using HotUpdate;
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
    [MenuItem("Publish/清空Wrap脚本", priority = 10)]
    static void ClearLua()
    {
        // 清理当前资源相关内容        
        CSObjectWrapEditor.Generator.ClearAll();
    }

    [MenuItem("Publish/生成Wrap脚本", priority = 20)]
    static void GenLua()
    {
        CSObjectWrapEditor.Generator.GenAll();
    }

    [MenuItem("Publish/打包资源", priority = 30)]
    static void BuildStepThree()
    {
        if (string.IsNullOrEmpty(AppDefine.CurrentProjectPath))
        {
            EditorUtility.DisplayDialog("错误", "没有设置当前项目，右键->设置为当前项目可设置当前项目。", "确定");
            return;
        }

        GameConfig config = ProjectEditUtility.GetCurrentProjectConfig();

        if (config == null)
        {
            EditorUtility.DisplayDialog("错误", "找不到项目的配置文件。", "确定");
            return;
        }

        if (string.IsNullOrEmpty(config.Version))
        {
            EditorUtility.DisplayDialog("错误", "项目版本号不能为空。", "确定");
            return;
        }

        string opendScenePath = EditorSceneManager.GetActiveScene().path;

        LuaBuildScript.CopyToPrimitiveLuaPath();    // 复制到Primitive目录
        FontBuildScript.Backup();                   // 打包备份

        AssetDatabase.Refresh();

        BuildAssetBundles();
        ClearAllManifestFiles();
        GenerateFileRecords();
        GenerateVersionFile();
        GenerateProjectList();

        LuaBuildScript.ClearAllLuaFiles();      // 生成完成后清除Primitive目录
        FontBuildScript.Restore();              // 还原
        AssetDatabase.Refresh();
        
        if (!string.IsNullOrEmpty(opendScenePath))
            EditorSceneManager.OpenScene(opendScenePath);    //打开场景 
    }

    [MenuItem("Publish/发布资源", priority = 40)]
    static void BuildStepFive()
    {
        CopyFilesToHotFixFolder();
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
                    fileRecords.Add(fileName, new FileRecord() { FileName = fileName, MD5 = md5Hash, Size = fileSize });
                }
                else
                {
                    Debug.LogErrorFormat("Have the same file[{0}] in asset, please check it!", fileName);
                }
            }
        }

        FileUtility.StoreFileRecords(FileUtility.GetAssetFilePath(HotUpdateManager.GetFormatedFileRecordFileName(AppDefine.CurrentProjectFolder), PathType.InitData), fileRecords);
        Debug.Log("<color=#00ee00ff>Success to generate file records!</color>");
        AssetDatabase.Refresh(ImportAssetOptions.ForceUpdate);
    }

    public static void GenerateVersionFile()
    {
        string version = string.IsNullOrEmpty(ProjectEditUtility.GetCurrentProjectConfig().Version) ? "1.0.1" : ProjectEditUtility.GetCurrentProjectConfig().Version;
        FileUtility.WriteTextToFile(FileUtility.GetAssetFilePath(HotUpdateManager.GetFormatedVersionFileName(AppDefine.CurrentProjectFolder), PathType.InitData), version);
        Debug.Log("<color=#00ee00ff>Success to generate version flie!</color>");
        AssetDatabase.Refresh(ImportAssetOptions.ForceUpdate);
    }

    public static void CopyFilesToHotFixFolder()
    {
        // 本地上传更新根路径
        string localUpdateRootPath = Path.GetFullPath(Application.dataPath + "/../UpdateFiles/" + AppDefine.PlatformPath);

        if (Directory.Exists(localUpdateRootPath))
        {
            Directory.Delete(localUpdateRootPath, true);
        }

        // 创建文件夹
        Directory.CreateDirectory(localUpdateRootPath);

        DirectoryInfo rootFolder = new DirectoryInfo(AppDefine.LOCAL_INIT_DATA_PATH);
        if (rootFolder.Exists)
        {
            EditorUtility.DisplayProgressBar("Copy update assets", "Copy Update assets...", 0);
            FileInfo[] fileInfos = rootFolder.GetFiles("*.*", SearchOption.AllDirectories);
            if (fileInfos.Length > 0)
            {
                float delta = 100f / fileInfos.Length;
                for (int i = 0; i < fileInfos.Length; i++)
                {
                    FileInfo fileInfo = fileInfos[i];
                    if (fileInfo.Extension == ".meta")
                        continue;
                    string fileName = fileInfo.FullName.Replace("\\", "/").Replace(AppDefine.LOCAL_INIT_DATA_PATH.Replace("\\", "/"), "").TrimStart('/');

                    FileUtility.CopyFile(fileInfo.FullName, localUpdateRootPath + "/" + fileName);
                    EditorUtility.DisplayProgressBar("Copy update assets", "Copy Update assets...", (i + 1) * delta);
                }
                EditorUtility.ClearProgressBar();
            }
        }

        Debug.LogFormat("<color=#00ee00ff>Success to copy need update assets! Path:{0}</color>", localUpdateRootPath);
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

    /// <summary>
    /// 从资源包的Manifest文件中获取到其包含的所有资源路径
    /// </summary>
    /// <param name="assetBundleManifestPath">资源包Manifest文件路径</param>
    /// <returns>所有资源的路径</returns>
    static string[] GetAssetsPathInAssetBundle(string assetBundleManifestPath)
    {
        if (!File.Exists(assetBundleManifestPath))
        {
            return new string[] { };
        }
        List<string> assetPaths = new List<string>();

        StreamReader sr = File.OpenText(assetBundleManifestPath);
        string line = sr.ReadLine();
        while (!string.IsNullOrEmpty(line))
        {
            if (line.Equals("Dependencies"))
            {
                break;
            }

            if (line.Contains("- Assets/"))
            {
                line = line.Substring(2);
                assetPaths.Add(line);
            }

            line = sr.ReadLine();
        }

        sr.Close();
        return assetPaths.ToArray();
    }

    #region Menu Items

    const string kSimulateAssetBundlesMenu = "Dev/模拟AssetBundles";

    [MenuItem(kSimulateAssetBundlesMenu, false, 1)]
    public static void ToggleSimulateAssetBundle()
    {
        AssetBundleOption.SimulateAssetBundleInEditor = !AssetBundleOption.SimulateAssetBundleInEditor;
    }

    [MenuItem(kSimulateAssetBundlesMenu, true, 1)]
    public static bool ToggleSimulateAssetBundleValidate()
    {
        Menu.SetChecked(kSimulateAssetBundlesMenu, AssetBundleOption.SimulateAssetBundleInEditor);
        return true;
    }

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
        string[] files = Directory.GetFiles(path).Where(t => !t.EndsWith(".meta") && !t.EndsWith(".cs") && !t.Contains("\\GameConfig.asset") && !t.EndsWith(".unity")).ToArray();

        string name = path.Replace(AppDefine.CurrentProjectPath + "/", string.Empty);
        name = name.Replace('\\', '_').Replace('/', '_');

        if (!string.IsNullOrEmpty(name) && !name.Contains("LuaScript") && files.Length != 0)
        {
            for (int i = 0; i < files.Length; i++)
                files[i] = files[i].Replace('\\', '/');

            needBuildAsset.Add(new AssetBundleBuild() { assetBundleName = (AppDefine.CurrentProjectFolder + "_" + name).ToLower(), assetNames = files });
        }

        string[] subFolders = AssetDatabase.GetSubFolders(path);

        if (subFolders != null && subFolders.Length != 0)
        {
            for (int i = 0; i < subFolders.Length; i++)
                AddBuildMap(subFolders[i], ref needBuildAsset);
        }
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

    #endregion 
}