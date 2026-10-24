using UnityEngine;
using UnityEditor;
using example.invalid;
using System.Collections.Generic;
using UnityEngine.UI;
using UnityEditor.SceneManagement;
using UnityEngine.SceneManagement;

/// <summary>
/// 打包时候对子项目依赖大厅的字体做处理，减少打包文件的大小
/// </summary>
public class FontBuildScript
{
    private static string PathOfBackup = Path.GetFullPath(Application.dataPath + "/../BuildBackup/");

    public static void Backup()
    {
        if (AppDefine.CurrentProjectFolder == AppDefine.HallNumber)
            return;

        ClearAllBackupFiles();

        if (!Directory.Exists(PathOfBackup))
            Directory.CreateDirectory(PathOfBackup);

        DirectoryInfo rootFolder = new DirectoryInfo(AppDefine.CurrentProjectPath);

        if (rootFolder.Exists)
        {
            FileInfo[] prefabInfos = rootFolder.GetFiles("*.prefab", SearchOption.AllDirectories);

            for (int i = 0; i < prefabInfos.Length; i++)
            {
                GameObject prefabObj = AssetDatabase.LoadAssetAtPath(EditorFileUtility.GetRelativeAssetPath(prefabInfos[i].FullName), typeof(GameObject)) as GameObject;

                Text[] textArray = prefabObj.GetComponentsInChildren<Text>(true);

                if (textArray.Length != 0)
                {
                    FileUtility.CopyFile(prefabInfos[i].FullName, prefabInfos[i].FullName.Replace(@"\Assets\", @"\BuildBackup\"));

                    for (int j = 0; j < textArray.Length; j++)
                    {
                        if (textArray[j].font != null && AssetDatabase.GetAssetPath(textArray[j].font).Contains("/" + AppDefine.HallNumber + "/"))
                        {
                            textArray[j].gameObject.AddComponent<BindingFont>().SetFontName(textArray[j].font.name);
                            textArray[j].font = null;
                        }
                    }
                    EditorUtility.SetDirty(prefabObj);
                    AssetDatabase.SaveAssets();
                }
            }

            FileInfo[] sceneInfos = rootFolder.GetFiles("*.unity", SearchOption.AllDirectories);
            for (int i = 0; i < sceneInfos.Length; i++)
            {
                FileUtility.CopyFile(sceneInfos[i].FullName, sceneInfos[i].FullName.Replace(@"\Assets\", @"\BuildBackup\"));

                //打开场景
                Scene scene = EditorSceneManager.OpenScene(sceneInfos[i].FullName);

                //获取场景中的所有游戏对象
                GameObject[] gos = (GameObject[])GameObject.FindObjectsOfType(typeof(GameObject));

                foreach (GameObject go in gos)
                {
                    List<Text> textArray = new List<Text>();
                    (go as GameObject).GetComponentsInChildren<Text>(true, textArray);  // 获取所有Text组件
                    for (int j = 0; j < textArray.Count; j++)
                    {
                        string dd = AssetDatabase.GetAssetPath(textArray[j].font);

                        if (textArray[j].font != null && AssetDatabase.GetAssetPath(textArray[j].font).Contains("/" + AppDefine.HallNumber + "/"))
                        { 
                            // 当预制体与场景中放置的预制体字体有冲突的时候，将场景中的预制体实例font置空无效，这里将场景中的Prefab实例和Prefab断开联系
                            if (PrefabUtility.GetPrefabType(textArray[j].gameObject) == PrefabType.PrefabInstance)
                                PrefabUtility.DisconnectPrefabInstance(textArray[j].gameObject);

                            textArray[j].gameObject.AddComponent<BindingFont>().SetFontName(textArray[j].font.name);
                            textArray[j].font = null;
                        }
                    }
                }

                EditorSceneManager.SaveScene(scene);
            }
        }

        AssetDatabase.Refresh(ImportAssetOptions.ForceUpdate);
    }

    public static void Restore()
    {
        if (AppDefine.CurrentProjectFolder == AppDefine.HallNumber)
            return;

        DirectoryInfo rootFolder = new DirectoryInfo(PathOfBackup);

        if (rootFolder.Exists)
        {
            FileInfo[] prefabInfos = rootFolder.GetFiles("*.prefab", SearchOption.AllDirectories);

            for (int i = 0; i < prefabInfos.Length; i++)
                FileUtility.CopyFile(prefabInfos[i].FullName, prefabInfos[i].FullName.Replace(@"\BuildBackup\", @"\Assets\"), true);

            FileInfo[] sceneInfos = rootFolder.GetFiles("*.unity", SearchOption.AllDirectories);

            for (int i = 0; i < sceneInfos.Length; i++)
                FileUtility.CopyFile(sceneInfos[i].FullName, sceneInfos[i].FullName.Replace(@"\BuildBackup\", @"\Assets\"), true);
        }

        AssetDatabase.Refresh(ImportAssetOptions.ForceUpdate);
    }

    static void ClearAllBackupFiles()
    {
        if (Directory.Exists(PathOfBackup))
        {
            Directory.Delete(PathOfBackup, true);
            AssetDatabase.Refresh();
        }
    }
}
