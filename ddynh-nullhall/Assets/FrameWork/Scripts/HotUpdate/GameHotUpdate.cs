using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using example.invalid;
using System.Security;
using UnityEngine;

namespace HotUpdate
{
    public class GameHotUpdate : MonoBehaviour
    {
        /// <summary>
        /// 预设版本号
        /// </summary>
        public const string DEFAULT_VERSION = "0.0.0";

        /// <summary>
        /// 当前更新模块操作的项目
        /// </summary>
        public string m_ProjectName = "";

        /// <summary>
        /// 版本文件名称
        /// </summary>
        private string m_VersionFileName;

        /// <summary>
        /// 文件列表文件名称
        /// </summary>
        private string m_FileRecordFileName;

        /// <summary>
        /// 目前进度百分比
        /// </summary>
        private float m_ProgressPercentage;

        /// <summary>
        /// 前一个进度百分比
        /// </summary>
        private float m_PreProgressPercentage;

        /// <summary>
        /// 是否更新进度
        /// </summary>
        private bool m_IsNotifyHotUpdateProgessChanged;

        /// <summary>
        /// 进度更新事件
        /// </summary>
        private Action<float> OnHotUpdateProgressChanged;

        /// <summary>
        /// 更新完成事件
        /// </summary>
        private Action OnHotUpdateComplated;

        /// <summary>
        /// 更新失败事件
        /// </summary>
        private Action OnHotUpdateFaild;
                
        /// <summary>
        /// 是否工作中
        /// </summary>
        public bool IsWorking { get; private set; }

        /// <summary>
        /// 是否载入了新的资源文件
        /// </summary>
        public bool IsLoadedNewAsset { get; private set; }

        /// <summary>
        /// 更新的状态
        /// </summary>
        private HotUpdateState m_UpdaterState = HotUpdateState.None;

        /// <summary>
        /// 下载路径
        /// </summary>
        public string m_UpdatePath;

        private GameWebClientDownloader m_GameWebClientDownloader = new GameWebClientDownloader();

        public void UpdateProjectName(string ProjectName, string UpdatePath, Action<float> ProgressChanged, Action Complated, Action Faild)
        {
            m_ProjectName = ProjectName;
            m_UpdatePath = UpdatePath;
            OnHotUpdateProgressChanged = ProgressChanged;
            OnHotUpdateComplated = Complated;
            OnHotUpdateFaild = Faild;

            m_VersionFileName = ProjectName + "_version.txt";
            m_FileRecordFileName = ProjectName + "_FileList.xml";

            TryStartUpdateRemoteAssetsToLocal();
        }

        public void OnDestroy()
        {
            Stop();
        }

        /// <summary>
        /// 更新器的状态
        /// </summary>
        public HotUpdateState UpdaterState
        {
            get { return m_UpdaterState; }
            private set
            {
                if (m_UpdaterState != value)
                {
                    Debug.LogWarningFormat("HotUpdater state:[{0}] ====>[{1}]", m_UpdaterState, value);
                }
                m_UpdaterState = value;
                Debug.LogWarning("HotUpdater State " + UpdaterState);
            }
        }

        /// <summary>
        /// 本地文件记录
        /// </summary>
        private Dictionary<string, FileRecord> m_LocalFileRecords = new Dictionary<string, FileRecord>();

        /// <summary>
        /// 远程文件记录
        /// </summary>
        private Dictionary<string, FileRecord> m_RemoteFileRecords = new Dictionary<string, FileRecord>();

        /// <summary>
        /// 需要更新的文件记录
        /// </summary>
        private List<FileRecord> m_NeedUpdateFileRecords = new List<FileRecord>();

        /// <summary>
        /// 下一个进入的状态
        /// </summary>
        HotUpdateState m_NextUpdateState = HotUpdateState.None;

        void HotUpdaterSwitchToState(HotUpdateState state)
        {
            m_NextUpdateState = state;
            Debug.LogWarning("HotUpdaterSwitchToState " + m_NextUpdateState);
        }

        void HotUpdaterSwitchToFaildState()
        {
            HotUpdaterSwitchToState(HotUpdateState.Failed);
        }

        void Update()
        {
            if (m_IsNotifyHotUpdateProgessChanged == true)
            {
                m_IsNotifyHotUpdateProgessChanged = false;
                m_PreProgressPercentage = m_ProgressPercentage;
                OnHotUpdateProgressChanged(m_ProgressPercentage);
            }
            else if (m_ProgressPercentage - m_PreProgressPercentage > 0.01f)
            {
                m_PreProgressPercentage = m_ProgressPercentage;
                OnHotUpdateProgressChanged(m_ProgressPercentage);
            }

            if (m_NextUpdateState == HotUpdateState.None || m_NextUpdateState == UpdaterState)
            {
                return;
            }

            UpdaterState = m_NextUpdateState;
            m_NextUpdateState = HotUpdateState.None;

            switch (UpdaterState)
            {
                case HotUpdateState.None:
                    break;
                case HotUpdateState.LoadLocalVersionFile:
                    m_TipsContent = "校验版本信息";
                    m_IsNotifyHotUpdateProgessChanged = true;
                    StartLoadLocalVersionFile();
                    break;
                case HotUpdateState.LoadLocalFileRecords:
                    m_TipsContent = "校验版本信息";
                    m_IsNotifyHotUpdateProgessChanged = true;
                    StartLoadLocalRecordFile();
                    break;
                case HotUpdateState.LoadRemoteVersionFile:
                    m_TipsContent = "校验版本信息";
                    m_IsNotifyHotUpdateProgessChanged = true;
                    StartLoadRemoteVersionFile();
                    break;
                case HotUpdateState.LoadRemoteFileRecords:
                    m_TipsContent = "校验版本信息";
                    m_IsNotifyHotUpdateProgessChanged = true;
                    StartLoadRemoteRecordFile();
                    break;
                case HotUpdateState.DownloadData:
                    StartDownLoadRemoteUpdatedAssets();
                    break;
                case HotUpdateState.ClearObsoleteAssets:
                    StartClearObsoleteAssetOfDownload();
                    break;
                case HotUpdateState.ValidateLocalData:
                    StartValidateLocalAssetFiles();
                    break;
                case HotUpdateState.Done:
                    m_TipsContent = "校验版本信息";
                    m_IsNotifyHotUpdateProgessChanged = true;
                    HotUpdateComplated();
                    break;
                case HotUpdateState.Failed:
                    HotUpdateFaild();
                    break;
                default:
                    break;
            }
        }

        void RestoreLocalFileRecords(Dictionary<string, FileRecord> fileRecords)
        {
            Debug.LogWarning("RestoreLocalFileRecords");
            FileUtility.StoreFileRecords(FileUtility.GetAssetFilePath(m_FileRecordFileName, PathType.Local), fileRecords);
        }

        public void Stop()
        {
            StopAllCoroutines();

            m_GameWebClientDownloader.StopDownloader();
        }

        public void OnApplicationQuit()
        {
            Stop();
        }

        #region Update Remote Assets

        /// <summary>
        /// 尝试从远程服务器更新资源
        /// </summary>
        /// <returns></returns>
        void TryStartUpdateRemoteAssetsToLocal()
        {
            IsLoadedNewAsset = false;
            m_NextUpdateState = HotUpdateState.None;
            UpdaterState = HotUpdateState.None;

            m_LocalFileRecords.Clear();
            m_RemoteFileRecords.Clear();
            m_NeedUpdateFileRecords.Clear();

            m_NeedUpdateSize = 0;      // 需要下载数据大小
			m_UpdatedFileSize = 0;     // 已经下载文件数据大小
			m_TempUpdatedFileSize = 0;     // 已经下载文件数据大小
            m_ProgressPercentage = 0;
            m_PreProgressPercentage = 0;

            HotUpdaterSwitchToState(HotUpdateState.LoadLocalVersionFile);
        }

        #region Load local version file

        /// <summary>
        /// 开始加载本地版本记录文件
        /// </summary>
        void StartLoadLocalVersionFile()
        {
            Debug.Log("资源更新：加载本地版本文件");
            HotUpdaterSwitchToState(HotUpdateState.LoadLocalFileRecords);
        }

        #endregion

        #region Load local record file

        /// <summary>
        /// 开始加载本地文件记录文件
        /// </summary>
        void StartLoadLocalRecordFile()
        {
            Debug.Log("资源更新：加载本地Record文件");
            m_LocalFileRecords = ConvertToFileRecords(FileUtility.ReadFileText(m_FileRecordFileName, PathType.Local));
            HotUpdaterSwitchToState(HotUpdateState.LoadRemoteVersionFile);
        }

        #endregion

        #region Download remote version file

        void StartLoadRemoteVersionFile()
        {
            Debug.Log("资源更新：下载远程版本文件");
            m_GameWebClientDownloader.AppendDownloadFile(m_VersionFileName, m_UpdatePath, DownLoadVersionFile_Complated, null);
        }

        /// <summary>
        /// 远程版本文件下载完成
        /// </summary>
        /// <param name="fileName"></param>
        /// <param name="e"></param>
        void DownLoadVersionFile_Complated(string fileName, AsyncCompletedEventArgs e)
        {
            if (fileName != m_VersionFileName)
                return;

            if (e.Error != null)
            {
                Debug.LogErrorFormat("读取服务器版本文件失败:\n{0}\n{1}", fileName, e.Error.Message, fileName);

                // 下载失败直接当出错处理
                HotUpdaterSwitchToFaildState();

            }
            else if (e.Cancelled)
            {
                HotUpdaterSwitchToFaildState();
            }
            else
            {
                // 进入更新文件列表                    
                HotUpdaterSwitchToState(HotUpdateState.LoadRemoteFileRecords);
            }
        }

        #endregion

        #region Download remote record file

        /// <summary>
        /// 开始加载远程的列表文件
        /// </summary>
        void StartLoadRemoteRecordFile()
        {
            Debug.Log("资源更新：下载远程Record文件");
            m_GameWebClientDownloader.AppendDownloadFile(m_FileRecordFileName, m_UpdatePath, DownLoadFileRecords_Complated, null);
        }

        /// <summary>
        /// 远程文件列表下载完成
        /// </summary>
        /// <param name="fileName"></param>
        /// <param name="e"></param>
        void DownLoadFileRecords_Complated(string fileName, AsyncCompletedEventArgs e)
        {
            if (fileName != m_FileRecordFileName) return;

            if (e.Error != null)
            {
                Debug.LogErrorFormat("Load remote records error: {0} ", e.Error.Message);
                HotUpdaterSwitchToFaildState();
            }
            else if (e.Cancelled)
            {
                HotUpdaterSwitchToFaildState();
            }
            else
            {
                Debug.Log("资源更新：远程Record文件下载完成");
                m_RemoteFileRecords = ConvertToFileRecords(FileUtility.ReadFileText(m_FileRecordFileName, PathType.Cache));
                HotUpdaterSwitchToState(HotUpdateState.DownloadData);
            }
        }

        #endregion

        #region Download remote asset files

        private long m_NeedUpdateSize = 0;                  // 需要下载数据大小
		private long m_UpdatedFileSize = 0;                 // 已经下载文件数据大小
		private long m_TempUpdatedFileSize = 0;                 // 已经下载文件数据大小
        private long m_LastDownLoadedFileSize = 0;          // 最近一次记录下载文件的大小，用于比较两次大小计算下载速度 
        
        public string m_TipsContent;

        void change(string name, DownloadProgressChangedEventArgs e)
		{
			m_TempUpdatedFileSize = m_UpdatedFileSize + e.BytesReceived;

			m_ProgressPercentage = m_TempUpdatedFileSize * 1f / m_NeedUpdateSize;
            m_TipsContent = "正在下载文件";
		}

        void StartDownLoadRemoteUpdatedAssets()
        {
            m_NeedUpdateFileRecords = FilterNeedUpdateFileRecodes(m_RemoteFileRecords, m_LocalFileRecords);

            Debug.LogFormat("资源更新：开始更新远程资源文件，需要下载的文件数量为{0}", m_NeedUpdateFileRecords.Count);
            if (m_NeedUpdateFileRecords.Count > 0)
            {
                m_NeedUpdateFileRecords.ForEach(o => { m_NeedUpdateSize += o.Size; });      // 计算总共需要下载大小
                RefreshDownloadProgress();

                for (int i = m_NeedUpdateFileRecords.Count - 1; i >= 0; i--)
                {
                    FileRecord record = m_NeedUpdateFileRecords[i];
                    m_GameWebClientDownloader.AppendDownloadFile(record.FileName, m_UpdatePath, DownloadAssetFile_Complated, change);
                }
                IsLoadedNewAsset = true;
            }
            else
            {
                HotUpdaterSwitchToState(HotUpdateState.ValidateLocalData);
            }
        }

        private void RefreshDownloadProgress()
        {
			if (m_UpdatedFileSize > m_NeedUpdateSize)     // 最后一个文件下载完后 m_CurrentDownLoadBytesReceived 会被重复计算
				m_UpdatedFileSize = m_NeedUpdateSize;

			m_ProgressPercentage = m_UpdatedFileSize * 1f / m_NeedUpdateSize;
            m_TipsContent = "正在下载文件";

            m_IsNotifyHotUpdateProgessChanged = true;
        }

        Queue<FileRecord> complatedFileRecords = new Queue<FileRecord>();
        /// <summary>
        /// 完成多少个之后回填本地记录信息
        /// </summary>
        int ComplatedDownloadSaveCount = 5;

        void DownloadAssetFile_Complated(string fileName, AsyncCompletedEventArgs e)
        {
            FileRecord record = m_NeedUpdateFileRecords.Find(temp => temp.FileName == fileName);
            if (record == null) return;

            if (e.Error != null)
            {
                Debug.LogErrorFormat("download remote file:[{0}] error[{1}]", fileName, e.Error.Message);
                m_GameWebClientDownloader.StopDownloader();
                HotUpdaterSwitchToFaildState();
            }
            else if (e.Cancelled)
            {
                HotUpdaterSwitchToFaildState();
            }
            else
            {
                m_NeedUpdateFileRecords.Remove(record);

                if (FileUtility.CopyFileByPathType(record.FileName, PathType.Cache, PathType.Local))
                {
                    complatedFileRecords.Enqueue(record);
					m_UpdatedFileSize += record.Size;
                    RefreshDownloadProgress();
                }
                m_TempUpdatedFileSize = m_UpdatedFileSize;

                if (m_NeedUpdateFileRecords.Count == 0)
                {
                    // 下载完成了
                    DownloadComplatedRestore();
                    HotUpdaterSwitchToState(HotUpdateState.ClearObsoleteAssets);
                }
                else if (complatedFileRecords.Count >= ComplatedDownloadSaveCount)
                {
                    DownloadComplatedRestore();
                }
            }
        }

        /// <summary>
        /// 下载完成回存资源列表信息
        /// </summary>
        void DownloadComplatedRestore()
        {
            if (HotUpdateManager.s_ShowFullLog == true)
                Debug.Log("DownloadComplatedRestore");

            while (complatedFileRecords.Count > 0)
            {
                FileRecord record = complatedFileRecords.Dequeue();
                m_LocalFileRecords[record.FileName] = record;
            }

            RestoreLocalFileRecords(m_LocalFileRecords);
        }

        #endregion

        #region Clear obsolete asset files

        /// <summary>
        /// 清理下载时残留的资源信息
        /// </summary>
        void StartClearObsoleteAssetOfDownload()
        {
            StartCoroutine(ClearObsoleteAssetData(m_RemoteFileRecords, m_LocalFileRecords));
        }

        int PreFrameClearAssetCount = 20;
        /// <summary>
        /// 清理过期的资源信息
        /// </summary>
        /// <param name="newFileRecords"></param>
        /// <param name="oldFileRecords"></param>
        /// <returns></returns>
        IEnumerator ClearObsoleteAssetData(Dictionary<string, FileRecord> newFileRecords, Dictionary<string, FileRecord> oldFileRecords)
        {
            List<FileRecord> obsoleteList = FilterObsoleteFileRecodes(newFileRecords, oldFileRecords);
            int handleCount = 0;
            if (obsoleteList.Count > 0)
            {
                for (int i = 0; i < obsoleteList.Count; i++)
                {
                    if (handleCount >= PreFrameClearAssetCount)
                    {
                        yield return 1;
                        handleCount = 0;

                        m_TipsContent = "清理资源...";
                        m_IsNotifyHotUpdateProgessChanged = true;
                    }
                    handleCount++;

                    //Debug.Log("ClearObsoleteAssetData");

                    if (FileUtility.DeleteFileOfType(obsoleteList[i].FileName, PathType.Local))
                    {
                        if (oldFileRecords.ContainsKey(obsoleteList[i].FileName))
                        {
                            oldFileRecords.Remove(obsoleteList[i].FileName);
                        }
                    }
                }
                obsoleteList.Clear();
                RestoreLocalFileRecords(oldFileRecords);
            }

            HotUpdaterSwitchToState(HotUpdateState.ValidateLocalData);
        }

        #endregion

        #region Validate local asset files

        /// <summary>
        /// 校验本地资源文件
        /// </summary>
        void StartValidateLocalAssetFiles()
        {
            StartCoroutine(ValidateLoadAssetsCoroutine());
        }

        /// <summary>
        /// 每帧校验文件的最大数量
        /// </summary>
        const int PerFrameValidateMax = 5;

        IEnumerator ValidateLoadAssetsCoroutine()
        {
            Debug.LogFormat("资源更新：开始验证本地资源，需要验证文件数量:{0}", m_LocalFileRecords.Count);
            bool isContainsErrorFile = false;

            if (m_LocalFileRecords.Count > 0)
            {
                int handleCount = 0;
                int index = 0;

                foreach (var item in m_LocalFileRecords)
                {
                    index++;
                    handleCount++;
                    if (handleCount < PerFrameValidateMax)
                    {
                        FileRecord record = item.Value;
                        // 文件不存在，MD5为空，或者不相等
                        // Add s_ShowFullLog By Rayon
                        if (HotUpdateManager.s_ShowFullLog == false)
                        {
                            if (!FileUtility.ExistsFileOfType(record.FileName, PathType.Local)
                                 || string.IsNullOrEmpty(record.MD5)
                                 || record.MD5 != FileUtility.GetMD5HashFromFile(record.FileName, PathType.Local))
                            {
                                Debug.LogErrorFormat("File error:{0}", record.FileName);
                                isContainsErrorFile = true;
                                record.MD5 = "";// 将MD5码置空，便于下次重新来过时可以更新到该资源
                            }
                        }
                        else
                        {

                            if (!FileUtility.ExistsFileOfType(record.FileName, PathType.Local))
                            {
                                Debug.LogErrorFormat("File error:(No file)\n{0}", record.FileName);
                                isContainsErrorFile = true;
                                record.MD5 = "";// 将MD5码置空，便于下次重新来过时可以更新到该资源
                            }

                            if (string.IsNullOrEmpty(record.MD5))
                            {
                                Debug.LogErrorFormat("File error:(No MD5)\n{0}", record.FileName);
                                isContainsErrorFile = true;
                                record.MD5 = "";// 将MD5码置空，便于下次重新来过时可以更新到该资源
                            }

                            string _MD5 = FileUtility.GetMD5HashFromFile(record.FileName, PathType.Local);
                            if (record.MD5 != _MD5)
                            {
                                Debug.LogErrorFormat("File error:(MD5 error)\n{0}\n{1}\n{2}",
                                                    record.FileName,
                                                    record.MD5,
                                                    _MD5);
                                isContainsErrorFile = true;
                                record.MD5 = "";// 将MD5码置空，便于下次重新来过时可以更新到该资源
                            }
                        }
                    }
                    else
                    {
                        yield return 1;

                        m_TipsContent = "验证本地资源...";
                        m_IsNotifyHotUpdateProgessChanged = true;
                        handleCount = 0;
                    }
                }
                m_TipsContent = "验证本地资源...";
                m_IsNotifyHotUpdateProgessChanged = true;
            }

            // 如果本地没有文件，验证不允许通过，否则后续流程取资源会出问题
            if (m_LocalFileRecords.Count == 0)
            {
                Debug.Log("如果本地没有文件，验证不允许通过");

                HotUpdaterSwitchToFaildState();
            }
            else
            {
                if (isContainsErrorFile)
                {
                    Debug.Log("资源更新：Record记录和实际文件MD5不相同");
                    RestoreLocalFileRecords(m_LocalFileRecords);
                    // 验证资源失败
                    HotUpdaterSwitchToFaildState();
                }
                else
                {
                    // 拷贝远程版本号到本地
                    FileUtility.CopyFileByPathType(m_VersionFileName, PathType.Cache, PathType.Local);

                    Debug.Log("资源更新：资源验证通过");
                    HotUpdaterSwitchToState(HotUpdateState.Done);
                }

                // 清理本地临时文件路径
                Debug.Log("删除资源 " + m_ProjectName);
                string delPath = string.Format("{0}/{1}", AppDefine.LOCAL_TEMP_PATH, m_ProjectName);
                FileUtility.DeleteDirectory(delPath, true);
                FileUtility.DeleteFiles(AppDefine.LOCAL_TEMP_PATH, m_ProjectName + "_version.txt");
                FileUtility.DeleteFiles(AppDefine.LOCAL_TEMP_PATH, m_ProjectName + "_FileList.xml");
            }
        }

        #endregion

        #region 更新失败

        void HotUpdateFaild()
        {
            Debug.LogError("HotUpdateFaild");

            if (OnHotUpdateFaild != null)
                OnHotUpdateFaild();

            Destroy(this);
        }

        #endregion

        #region 更新完成

        void HotUpdateComplated()
        {
            Debug.LogWarning("HotUpdateComplated");

            if (OnHotUpdateComplated != null)
                OnHotUpdateComplated();

            Destroy(this);
        }

        #endregion

        /// <summary>
        /// 转换文件列表内容为文件记录信息
        /// </summary>
        /// <param name="content"></param>
        /// <returns></returns>
        public static Dictionary<string, FileRecord> ConvertToFileRecords(string content)
        {
            Dictionary<string, FileRecord> fileRecords = new Dictionary<string, FileRecord>();
            Mono.Xml.SecurityParser sp = new Mono.Xml.SecurityParser();
            if (string.IsNullOrEmpty(content))
                return fileRecords;
            sp.LoadXml(content);
            SecurityElement root = sp.ToXml();
            if (root.Children != null)
            {
                foreach (SecurityElement child in root.Children)
                {
                    SecurityElement fileName = child.SearchForChildByTag("NAME");
                    SecurityElement md5 = child.SearchForChildByTag("MD5");
                    SecurityElement size = child.SearchForChildByTag("SIZE");

                    if (fileName == null || md5 == null || size == null)
                    {
                        Debug.LogError("'FileList.xml' has error!");
                        continue;
                    }

                    FileRecord record = new FileRecord();
                    record.FileName = fileName.Text;
                    record.MD5 = md5.Text;
                    record.Size = long.Parse(size.Text);
                    fileRecords.Add(record.FileName, record);
                }
            }
            return fileRecords;
        }

        /// <summary>
        /// 筛选出过期的资源文件
        /// </summary>
        /// <returns></returns>
        List<FileRecord> FilterObsoleteFileRecodes(Dictionary<string, FileRecord> newFileRecords, Dictionary<string, FileRecord> oldFileRecords)
        {
            List<FileRecord> fileRecordList = new List<FileRecord>();
            // 筛选出需要更新的文件
            foreach (var item in oldFileRecords)
            {
                if (!newFileRecords.ContainsKey(item.Key))
                {
                    fileRecordList.Add(item.Value);
                }
            }

            return fileRecordList;
        }

        /// <summary>
        /// 筛选出需要更新的文件
        /// </summary>
        /// <returns></returns>
        List<FileRecord> FilterNeedUpdateFileRecodes(Dictionary<string, FileRecord> newFileRecords, Dictionary<string, FileRecord> oldFileRecords)
        {
            List<FileRecord> fileRecordList = new List<FileRecord>();
            // 筛选出需要更新的文件
            foreach (var item in newFileRecords)
            {
                if (oldFileRecords.ContainsKey(item.Key))
                {
                    if (oldFileRecords[item.Key].MD5 == item.Value.MD5)
                    {
                        continue;
                    }
                }
                fileRecordList.Add(item.Value);
            }

            return fileRecordList;
        }

        #endregion
    }
}
