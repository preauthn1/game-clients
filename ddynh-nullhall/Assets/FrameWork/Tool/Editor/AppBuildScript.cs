using HotUpdate;
using System;
using System.Collections.Generic;
using example.invalid;
using System.Linq;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;

/// <summary>
/// 集成工具的编译功能，便于打包程序
/// </summary>
public class AppBuildScript
{
    public static bool s_IsPack = true;
    public static string CurrentGameId = "";
    public static string CurrentGameName = "";
    public static string FileNameKey = "";

    [MenuItem("Publish/清空Wrap脚本", priority = 10)]
    static void ClearLua()
    {
        // 清理当前资源相关内容        
        CSObjectWrapEditor.Generator.ClearAll();
        EditorUtility.DisplayDialog("通知", "清空Wrap腳本完成，請等待", "確定");
    }

    [MenuItem("Publish/生成Wrap脚本", priority = 20)]
    static void GenLua()
    {
        CSObjectWrapEditor.Generator.GenAll();

        EditorUtility.DisplayDialog("通知", "生成Wrap腳本完成，請等待", "確定");
    }

    [MenuItem("Publish/打包资源/本機版本號", priority = 40)]
    static void BuildRefreshPlatform()
    {
        GameConfig config = GetPackageGameConfig(true);
        if (config == null)
            return;

        //if (AppDefine.CurrentProjectPath.IndexOf("Hall") >= 0)
            //PlatformRouteController.Refresh(() => { PackageAssets(config); });
        //else
            PackageAssets(config);
    }

    [MenuItem("Publish/打包资源/清除打包資源", priority = 40)]
    static public void DeleteAssetBundle()
    {
        example.invalid.DirectoryInfo di = new DirectoryInfo(Application.dataPath + "/StreamingAssets/");

        foreach (FileInfo file in di.GetFiles())
        {
            if (!file.Name.Contains("Logo"))
                file.Delete();
        }
        foreach (DirectoryInfo dir in di.GetDirectories())
        {
            dir.Delete(true);
        }
        AssetDatabase.Refresh();
    }

    private static GameConfig GetPackageGameConfig(bool showMessage)
    {
        if (string.IsNullOrEmpty(AppDefine.CurrentProjectPath))
        {
            EditorUtility.DisplayDialog("错误", "没有设置当前项目，右键->设置为当前项目可设置当前项目。", "确定");
            return null;
        }

        GameConfig config = ProjectEditUtility.GetCurrentProjectConfig();

        if (config == null)
        {
            EditorUtility.DisplayDialog("通知", "缺少版本設定檔案!!!", "確定");
            return null;
        }

        if (string.IsNullOrEmpty(config.Version))
        {
            EditorUtility.DisplayDialog("通知", "無版本號!!!", "確定");
            return null;
        }

        if (showMessage == true)
        {
            if (EditorUtility.DisplayDialog("提示", "打包資源 " + AppDefine.CurrentProjectFolderPath + "，版本號 " + config.Version + "，确定打包?", "确定", "取消") == false)
                return null;
        }

        return config;
    }

    public static void PackageAssets(GameConfig config, bool showMsg = true)
    {
        AssetDatabase.Refresh();


        FileNameKey =  System.DateTime.Now.ToString("yyyy/MM/dd HH:mm:ss");

        string opendScenePath = EditorSceneManager.GetActiveScene().path;

        LuaBuildScript.CopyToPrimitiveLuaPath();    // 复制到Primitive目录
        FontBuildScript.Backup();                   // 打包备份

        AssetDatabase.Refresh();
        BuildAssetBundles();
        ClearAllManifestFiles();
        GenerateFileRecords();
        GenerateVersionFile(config.Version);
        GenerateSkinFile(config.Skin);
        GenerateProjectList();
        GenerateBuildLog(config.Version);
        
        LuaBuildScript.ClearAllLuaFiles();      // 生成完成后清除Primitive目录
        FontBuildScript.Restore();              // 还原
        AssetDatabase.Refresh();

        if (!string.IsNullOrEmpty(opendScenePath))
            EditorSceneManager.OpenScene(opendScenePath);    //打开场景 

        if (showMsg)
            EditorUtility.DisplayDialog("通知", "請等圈圈轉完!!!", "確定");
    }

    [MenuItem("Publish/測試資源", priority = 80)]
    static void BuildPublishFolder_Debug()
    {
        string baseDataPath = ReleaseScript.CopyFilesToHotFixFolder();
    }

    [MenuItem("Publish/產生垃圾文件", priority = 100)]
    static void Generate_TxtFile()
    {
        GenerateTxtFile();
    }

    /// <summary>
    /// 忽略的文件后缀名称
    /// </summary>
    public static List<string> IgnoreFileExtensions = new List<string>() { ".meta" };

    /// <summary>
    /// 生成热更新文件列表
    /// </summary> 
    public static void GenerateFileRecords()
    {
        // 文件记录列表
        List<FileRecord> fileRecordsNew = new List<FileRecord>();
        Dictionary<string, FileRecord> fileRecords = new Dictionary<string, FileRecord>();
        DirectoryInfo rootFolder = new DirectoryInfo(AppDefine.LOCAL_INIT_DATA_PATH);
        if (rootFolder.Exists)
        {
            FileInfo[] fileInfos = rootFolder.GetFiles("*.*", SearchOption.AllDirectories);
            foreach (FileInfo fileInfo in fileInfos)
            {
                if (IgnoreFileExtensions.Contains(fileInfo.Extension))
                {
                    continue;
                }

                if (!fileInfo.DirectoryName.EndsWith(AppDefine.CurrentProjectFolder))   // 只包含本项目目录
                {
                    continue;
                }

                string fileName = fileInfo.FullName.Replace("\\", "/").Replace(AppDefine.LOCAL_INIT_DATA_PATH.Replace("\\", "/"), "").TrimStart('/');
                string md5Hash = FileUtility.GetMD5HashOfFile(fileInfo.FullName);
                long fileSize = fileInfo.Length;
                if (!fileRecords.ContainsKey(fileName))
                {
                    FileRecord _FileRecord = new FileRecord();
                    _FileRecord.FileName = fileName;
                    _FileRecord.MD5 = md5Hash;
                    _FileRecord.Size = fileSize;
                    fileRecords.Add(fileName, _FileRecord);
                    fileRecordsNew.Add(_FileRecord);
                }
                else
                {
                    Debug.LogErrorFormat("Have the same file[{0}] in asset, please check it!", fileName);
                }
            }
        }

        //FileUtility.StoreFileRecords(FileUtility.GetAssetFilePath(HotUpdateManager.GetFormatedFileRecordFileName(AppDefine.CurrentProjectFolder), PathType.InitData), fileRecords);
        // 特製大廳排序方式
        if (AppDefine.CurrentProjectFolder == "Hall")
            fileRecordsNew = OrderMap(fileRecordsNew);
        FileUtility.StoreFileRecords(FileUtility.GetAssetFilePath(HotUpdateManager.GetFormatedFileRecordFileName(AppDefine.CurrentProjectFolder), PathType.InitData), fileRecordsNew);
        Debug.Log("<color=#00ee00ff>Success to generate file records!</color>");
        AssetDatabase.Refresh(ImportAssetOptions.ForceUpdate);
    }

    public static List<FileRecord> OrderMap(List<FileRecord> fileRecords)
    {
        List<string> orderName = new List<string>();
        orderName.Add("Hall/AssetRecords.bytes");
        orderName.Add("Hall/Hall");
        orderName.Add("Hall/hall_main");

        List<FileRecord> orderList = new List<FileRecord>();
        for (int i = 0; i < orderName.Count; ++i)
        {
            string _Name = orderName[i];
            for (int j = 0; j < fileRecords.Count; ++j)
            {
                if (fileRecords[j].FileName == _Name)
                {
                    orderList.Add(fileRecords[j]);
                    fileRecords.RemoveAt(j);
                    break;
                }
            }
        }

        for (int i = 0; i < fileRecords.Count; ++i)
        {
            orderList.Add(fileRecords[i]);
        }

        return orderList;
    }

    public static void GenerateVersionFile(string version)
    {
        //string version = string.IsNullOrEmpty(ProjectEditUtility.GetCurrentProjectConfig().Version) ? "1.0.1" : ProjectEditUtility.GetCurrentProjectConfig().Version;
        FileUtility.WriteTextToFile(FileUtility.GetAssetFilePath(HotUpdateManager.GetFormatedVersionFileName(AppDefine.CurrentProjectFolder), PathType.InitData), version);
        Debug.Log("<color=#00ee00ff>Success to generate version flie!</color>");
        AssetDatabase.Refresh(ImportAssetOptions.ForceUpdate);
    }

    public static void GenerateSkinFile(string skin)
    {
        //string version = string.IsNullOrEmpty(ProjectEditUtility.GetCurrentProjectConfig().Version) ? "1.0.1" : ProjectEditUtility.GetCurrentProjectConfig().Version;
        FileUtility.WriteTextToFile(FileUtility.GetAssetFilePath(HotUpdateManager.GetFormatedSkinFileName(AppDefine.CurrentProjectFolder), PathType.InitData), skin);
        Debug.Log("<color=#00ee00ff>Success to generate skin flie!</color>");
        AssetDatabase.Refresh(ImportAssetOptions.ForceUpdate);
    }

    public static void EncryptFiles(string outputPath)
    {
        if (AppDefine.IsEncrypted)
        {
            DirectoryInfo rootFolder = new DirectoryInfo(outputPath);
            if (rootFolder.Exists)
            {
                EditorUtility.DisplayProgressBar("Encrypt Asset", "Encrypt Asset...", 0);
                FileInfo[] fileInfos = rootFolder.GetFiles("*.*", SearchOption.AllDirectories);
                if (fileInfos.Length > 0)
                {
                    float delta = 100f / fileInfos.Length;
                    for (int i = 0; i < fileInfos.Length; i++)
                    {
                        FileInfo fileInfo = fileInfos[i];
                        if (fileInfo.Extension == ".meta" || fileInfo.Extension == ".manifest")
                            continue;
                        byte[] fileContent = FileUtility.ReadFileBytes(fileInfo.FullName);
                        fileContent = Utility.AESEncrypt(fileContent, AppDefine.AssetSecretKey);
                        FileUtility.WriteBytesToFile(fileInfo.FullName, fileContent, fileContent.Length);
                        EditorUtility.DisplayProgressBar("Encrypt Asset", "Encrypt Asset...", (i + 1) * delta);
                    }
                    EditorUtility.ClearProgressBar();
                }
            }
            Debug.LogFormat("<color=#00ee00ff>Asset Encrypt complated! Path:{0}</color>", rootFolder.FullName);
        }
    }

    /// <summary>
    /// 获得AssetRecord清单
    /// </summary>
    public static List<AssetRecordInfo> CreateAssetRecords(List<AssetBundleBuild> needBuildAsset)
    {
        List<AssetRecordInfo> assetRecordList = new List<AssetRecordInfo>();

        for (int i = 0; i < needBuildAsset.Count; ++i)
        {
            for (int j = 0; j < needBuildAsset[i].assetNames.Length; ++j)
            {
                string path = needBuildAsset[i].assetNames[j];
                if (path.EndsWith(".prefab")// 预制件
                    || path.EndsWith(".bytes") || path.EndsWith(".txt") || path.EndsWith(".xml") // 配置文件或者Lua文件
                    || path.EndsWith(".mp3") || path.EndsWith(".wav") || path.EndsWith(".ogg") // 音效文件
                    || path.EndsWith(".ttf")
                    || path.EndsWith(".unity") // 场景文件
                   )
                {
                    string assetRecordKey = AssetRecordInfo.ToAssetRecordKey(path);
                    AssetRecordInfo info = new AssetRecordInfo(assetRecordKey, needBuildAsset[i].assetBundleName);
                    assetRecordList.Add(info);
                }
            }
        }

        return assetRecordList;
    }

    /// <summary>
    /// 写入记录文件
    /// </summary>
    /// <param name="outputPath"></param>
    /// <param name="assetRecordList"></param>
    public static void StoreAssetRecordsToFile(string outputPath, List<AssetRecordInfo> assetRecordList)
    {
        System.Text.StringBuilder sb = new System.Text.StringBuilder();
        for (int i = 0; i < assetRecordList.Count; i++)
        {
            sb.Append(string.Format("#${0}#@{1}", assetRecordList[i].AssetName, assetRecordList[i].AssetBundleName));
        }
        byte[] bytes = Utility.UTF8StringToBytes(Utility.StringToUTF8String(sb.ToString()));
        // 写入到本地初始化目录
        FileUtility.WriteBytesToFile(outputPath + "/" + AppDefine.AssetRecordsFileName, bytes, bytes.Length);
    }

   

    #region Menu Items

    // 新增及修改 By Rayon
    private enum AssetBundleType
    {
        None            = 0,
        StreamingAssets = 1,
        HotUpdate       = 2,
    }

    private static AssetBundleType Current
    {
        get
        {
            return (AssetBundleType)EditorPrefs.GetInt("EditorAssetBundleChooseType", 0);
        }
        set
        {
            EditorPrefs.SetInt("EditorAssetBundleChooseType", (int)value);
        }
    }

    private static void UpdateAssetBundlesType()
    {
        if (Current == AssetBundleType.None)
        {
            AssetBundleOption.SimulateAssetBundleInEditor = true;
            AssetBundleOption.SimulateAssetBundleHotUpdateInEditor = false;
        }
        else if (Current == AssetBundleType.StreamingAssets)
        {
            AssetBundleOption.SimulateAssetBundleInEditor = false;
            AssetBundleOption.SimulateAssetBundleHotUpdateInEditor = false;
        }
        else if (Current == AssetBundleType.HotUpdate)
        {
            AssetBundleOption.SimulateAssetBundleInEditor = false;
            AssetBundleOption.SimulateAssetBundleHotUpdateInEditor = true;
        }
    }
    // ********************************** None ************************************************
    const string kSimulateAssetBundlesMenu_None = "Dev/AssetBundles/None";
    [MenuItem(kSimulateAssetBundlesMenu_None)]
    public static void ToggleSimulateAssetBundle_None()
    {
        Current = AssetBundleType.None;
        UpdateAssetBundlesType();
    }
    [MenuItem(kSimulateAssetBundlesMenu_None, true)]
    public static bool ToggleSimulateAssetBundleValidate_None()
    {
        Menu.SetChecked(kSimulateAssetBundlesMenu_None, Current == AssetBundleType.None);
        return true;
    }
    // ********************************** StreamingAssets ************************************************
    const string kSimulateAssetBundlesMenu_StreamingAssets = "Dev/AssetBundles/StreamingAssets";
    [MenuItem(kSimulateAssetBundlesMenu_StreamingAssets)]
    public static void ToggleSimulateAssetBundle_StreamingAssets()
    {
        Current = AssetBundleType.StreamingAssets;
        UpdateAssetBundlesType();
    }
    [MenuItem(kSimulateAssetBundlesMenu_StreamingAssets, true)]
    public static bool ToggleSimulateAssetBundleValidate_StreamingAssets()
    {
        Menu.SetChecked(kSimulateAssetBundlesMenu_StreamingAssets, Current == AssetBundleType.StreamingAssets);
        return true;
    }
    // ********************************** HotUpdate ************************************************
    const string kSimulateAssetBundlesMenu_HotUpdate = "Dev/AssetBundles/HotUpdate";
    [MenuItem(kSimulateAssetBundlesMenu_HotUpdate)]
    public static void ToggleSimulateAssetBundle_HotUpdate()
    {
        Current = AssetBundleType.HotUpdate;
        UpdateAssetBundlesType();
    }
    [MenuItem(kSimulateAssetBundlesMenu_HotUpdate, true)]
    public static bool ToggleSimulateAssetBundleValidate_HotUpdate()
    {
        Menu.SetChecked(kSimulateAssetBundlesMenu_HotUpdate, Current == AssetBundleType.HotUpdate);
        return true;
    }

    [MenuItem("Dev/清除HotUpdate下載資料")]
    public static void DeleteHotUpdateData()
    {
        if (Directory.Exists(AppDefine.LOCAL_TEMP_PATH))
            Directory.Delete(AppDefine.LOCAL_TEMP_PATH, true);

        if (Directory.Exists(AppDefine.LOCAL_DATA_PATH))
            Directory.Delete(AppDefine.LOCAL_DATA_PATH, true);
    }
    // **********************************************************************************

    /// <summary>
    /// 制作资源包
    /// </summary> 
    public static void BuildAssetBundles()
    {
        string outputPath = Path.Combine(AppDefine.LOCAL_INIT_DATA_PATH, AppDefine.CurrentProjectFolder);
        
        if (Directory.Exists(outputPath))
        {
            Directory.Delete(outputPath, true);
        }
        Directory.CreateDirectory(outputPath);

        // 只打包当前编辑项目         
        List<AssetBundleBuild> needBuildAsset = new List<AssetBundleBuild>();

        AddSceneToMap(AppDefine.CurrentProjectPath, ref needBuildAsset);
        AddBuildMap(AppDefine.CurrentProjectPath, ref needBuildAsset);

        BuildPipeline.BuildAssetBundles(outputPath, needBuildAsset.ToArray(), BuildAssetBundleOptions.None, EditorUserBuildSettings.activeBuildTarget);
        AssetDatabase.Refresh();

        List<AssetRecordInfo> assetRecordList = CreateAssetRecords(needBuildAsset);
        StoreAssetRecordsToFile(outputPath, assetRecordList);

        EncryptFiles(outputPath);
        Debug.Log("<color=#00ee00ff>Success to build assetbundles.</color>");
        AssetDatabase.Refresh(ImportAssetOptions.ForceUpdate);
    }

    public static void AddSceneToMap(string path, ref List<AssetBundleBuild> needBuildAsset)
    {
        string[] files = Directory.GetFiles(path, "*.unity", SearchOption.AllDirectories);

        for (int i = 0; i < files.Length; i++)
        {
            files[i] = files[i].Replace('\\', '/');
            string sceneName = Path.GetFileNameWithoutExtension(files[i]);
            needBuildAsset.Add(new AssetBundleBuild() { assetBundleName = (AppDefine.CurrentProjectFolder + "_" + sceneName).ToLower(), assetNames = new string[] { files[i] } });
        }
    }

    public static void AddBuildMap(string path, ref List<AssetBundleBuild> needBuildAsset)
    {
        string[] files = Directory.GetFiles(path).Where(t => !t.EndsWith(".meta") && !t.EndsWith(".cs") && !t.Contains("\\GameConfig.asset") && !t.EndsWith(".unity") && !t.Contains(".git") && !t.EndsWith(".md") && !t.EndsWith(".tpsheet")).ToArray();

        string name = path.Replace(AppDefine.CurrentProjectPath + "/", string.Empty);
        name = name.Replace('\\', '_').Replace('/', '_');

        if (!string.IsNullOrEmpty(name) && !name.Contains("LuaScript") && files.Length != 0)
        {
            for (int i = 0; i < files.Length; i++)
                files[i] = files[i].Replace('\\', '/');

            bool isPack = false;

            // 將檔案合併成一個檔
            if (name.Contains("Primitives"))
                isPack = true;
            else if (name.Contains("PbFile"))
                isPack = true;
            else if (name.Contains("Prefab_main"))
                isPack = true;
            else if (name.Contains("UI_UICommon"))
                isPack = true;
            else if (name.Contains("UI_UILoading"))
                isPack = true;

            if (isPack == true)
            {
                //Debug.LogError("Pack " + name);
                name = "P_a_c_k_D_a_t_a";
            }

            string assetBundleName_New = Md5Sum((FileNameKey + AppDefine.CurrentProjectFolder + "_" + name).ToLower());
            needBuildAsset.Add(new AssetBundleBuild() { assetBundleName = assetBundleName_New, assetNames = files });
        }

        string[] subFolders = AssetDatabase.GetSubFolders(path);

        if (subFolders != null && subFolders.Length != 0)
        {
            for (int i = 0; i < subFolders.Length; i++)
                AddBuildMap(subFolders[i], ref needBuildAsset);
        }
    }

    public static string Md5Sum(string strToEncrypt)
    {
        System.Text.UTF8Encoding ue = new System.Text.UTF8Encoding();
        byte[] bytes = ue.GetBytes(strToEncrypt);

        // encrypt bytes
        System.Security.Cryptography.MD5CryptoServiceProvider md5 = new System.Security.Cryptography.MD5CryptoServiceProvider();
        byte[] hashBytes = md5.ComputeHash(bytes);

        // Convert the encrypted bytes back to a string (base 16)
        string hashString = "";

        for (int i = 0; i < hashBytes.Length; i++)
        {
            hashString += System.Convert.ToString(hashBytes[i], 16).PadLeft(2, '0');
        }

        return hashString.PadLeft(32, '0');
    }

    /// <summary>
    /// 清理掉所有的Mainfest 文件
    /// </summary> 
    public static void ClearAllManifestFiles()
    {
        string outputPath = Path.Combine(AppDefine.LOCAL_INIT_DATA_PATH, AppDefine.CurrentProjectFolder);

        if (Directory.Exists(outputPath))
        {

            string[] manifestFileArray = Directory.GetFiles(outputPath, "*.manifest", SearchOption.AllDirectories);
            foreach (var manifestFile in manifestFileArray)
            {
                // 查找同名的
                string manifestMetaFile = manifestFile + ".meta";
                if (File.Exists(manifestMetaFile))
                {
                    File.Delete(manifestMetaFile);
                }
                if (File.Exists(manifestFile))
                {
                    File.Delete(manifestFile);
                }
            }
        }

        Debug.Log("<color=#00ee00ff>Success to clear manifest files.</color>");
        AssetDatabase.Refresh(ImportAssetOptions.ForceUpdate);
    }

    // 生成需要解压的文件列表
    public static void GenerateProjectList()
    {
        DirectoryInfo rootFolder = new DirectoryInfo(AppDefine.LOCAL_INIT_DATA_PATH);
        DirectoryInfo[] subFolder = rootFolder.GetDirectories();

        if (subFolder.Length == 0)
            return;

        string[] folderNameArray = new string[subFolder.Length];

        for (int i = 0; i < subFolder.Length; i++)
            folderNameArray[i] = subFolder[i].Name;

        byte[] bytes = Utility.UTF8StringToBytes(Utility.StringToUTF8String(string.Join(",", folderNameArray)));

        // 写入到本地初始化目录
        FileUtility.WriteBytesToFile(Path.Combine(AppDefine.LOCAL_INIT_DATA_PATH, AppDefine.ProjectListFileName), bytes, bytes.Length);
    }

    private static int GetBranchData()
    {
        if (AppDefine.CurrentProjectFolder == "Hall")
        {
            string filePath = Application.dataPath + "/Hall/LuaScript/Com/PlatformInfo.lua";
            FileStream fileStream_Open = new FileStream(Path.GetFullPath(filePath), FileMode.Open);
            StreamReader streamWriter = new StreamReader(fileStream_Open);
            string oldScriptContent = streamWriter.ReadToEnd();
            fileStream_Open.Close();
            streamWriter.Close();

            String _NoteBegin = "local branch = ";
            String _NoteEnd = "-- Check branch data";
            int begin = oldScriptContent.IndexOf(_NoteBegin);
            int end = oldScriptContent.IndexOf(_NoteEnd);
            if (begin == -1 || end == -1)
            {
                Debug.LogError("PlatformInfo.lua中找不到branch資料");
                return -1;
            }

            int Length = end - (begin + _NoteBegin.Length);

            oldScriptContent = oldScriptContent.Substring(begin + _NoteBegin.Length, Length);
            int result = Int32.Parse(oldScriptContent);
            return result;
        }

        return -1;
    }

    public static void GenerateBuildLog(string version)
    {
        string buildLog = "";
        buildLog += "Platform " + AppDefine.PlatformPath + "\n";

        int Branch = GetBranchData();
        if (Branch >= 0)
            buildLog += "Branch " + Branch + "\n";
        else
            Debug.LogWarning("找不到Branch資料");
        buildLog += "Version " + version + "\n";
        buildLog += "BuildTime " + System.DateTime.Now.ToString("yyyy/MM/dd HH:mm:ss") + "\n";
        buildLog += "\n";

        if (AppDefine.CurrentProjectFolder == "Hall")
        {
            string filePath = Application.dataPath + "/Hall/LuaScript/Com/PlatformRoute.lua";
            FileStream fileStream_Open = new FileStream(Path.GetFullPath(filePath), FileMode.Open);
            StreamReader streamWriter = new StreamReader(fileStream_Open);
            string oldScriptContent = streamWriter.ReadToEnd();
            fileStream_Open.Close();
            streamWriter.Close();
            string notes = "--- 以上内容为工具脚本自动生成，请不要在这之上做任何修改---"; // 注释部分
            oldScriptContent = oldScriptContent.Substring(0, oldScriptContent.IndexOf(notes));
            buildLog += "\nPlatformRoute\n" + oldScriptContent + "\n";
        }

        string currentProjectFolder = AppDefine.CurrentProjectFolder;
        string fileName = string.Format("{0}_BuildLog.txt", currentProjectFolder);
        FileUtility.WriteTextToFile(FileUtility.GetAssetFilePath(fileName, PathType.InitData), buildLog);
        Debug.Log("<color=#00ee00ff>Success to generate build log flie!</color>");
        AssetDatabase.Refresh(ImportAssetOptions.ForceUpdate);
    }

    public static string NewGuid()
    {
        string Guid = System.Guid.NewGuid().ToString();
        return Md5Sum(Guid);
    }

    public static int Random(int min, int max)
    {
        System.Random ran = new System.Random(Guid.NewGuid().GetHashCode());
        return ran.Next(min, max);
    }

    public static string RandomString(int Count)
    {
        string Text = NewGuid();
        for (int i = 0; i < Count; ++i)
        {
            Text += NewGuid();
        }
        return Text;
    }

    public static void GenerateTxtFile()
    {
        string tempfileName = "";
        int folderCount = Random(30, 50);
        Debug.Log("folderCount " + folderCount);
        for (int i = 0; i < folderCount; ++i)
        {
            string currentFolder = "";
            if (Random(0, 100) > 10)
                currentFolder = NewGuid() + "/";

            int fileCount = Random(2, 10);
            for (int j = 0; j < fileCount; ++j)
            {
                string currentFileName = NewGuid();
                string buildLog;

                int value = Random(0, 100);
                if (value < 10)
                {
                    buildLog = RandomString(1);
                    currentFileName += ".txt";
                }
                else if (value < 20)
                {
                    if (Random(0, 100) > 10)
                        buildLog = RandomString(Random(50, 100));
                    else
                        buildLog = RandomString(Random(500, 1000));

                    currentFileName += ".xml";
                }
                else
                {
                    if (Random(0, 100) > 10)
                        buildLog = RandomString(Random(300, 1000));
                    else
                        buildLog = RandomString(Random(5, 100));
                }
                string fileName = string.Format("{0}" + currentFileName, currentFolder);
                tempfileName += fileName + "\n";

                FileUtility.WriteTextToFile(FileUtility.GetAssetFilePath(fileName, PathType.InitData), buildLog);
            }
        }
        Debug.Log("tempfileName\n" + tempfileName);
        AssetDatabase.Refresh(ImportAssetOptions.ForceUpdate);
    }

    #endregion 
}