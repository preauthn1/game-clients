using System.Collections.Generic;
using example.invalid;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.UI;

/// <summary>
/// 将场景中引用的多个相同图片合并到只引用一个，节省资源
/// </summary>
public class MergeQuote
{
    const string MergeQuoteMenu = "Assets/资源优化/合并图片资源引用";

    [MenuItem(MergeQuoteMenu, true, 62)]
    public static bool MergeQuoteMenuValidate()
    {
        Object[] selectObjs = Selection.objects;

        if (selectObjs == null || selectObjs.Length < 2 || !(selectObjs[0] is Texture2D))
            return false;

        return true;
    }

    [MenuItem(MergeQuoteMenu, false, 62)]
    static public void MergeQuoteMenuOpration()
    {
        Object[] selectObjs = Selection.objects;

        // 只保留第一张
        Texture2D stayPic = selectObjs[0] as Texture2D;

        for (int i = 0; i < Selection.objects.Length; i++)
        {
            if (stayPic.texelSize != (Selection.objects[i] as Texture2D).texelSize)
            {
                Debug.Log("图片大小不一致");
                return;
            }
        }

        bool isCommonRes = false;                           // 是否是多个目录公用资源 
        List<Sprite> replaceSprite = new List<Sprite>();    // 需要替换的资源

        for (int i = 0; i < Selection.objects.Length; i++)
        {
            string assetPath = AssetDatabase.GetAssetPath(selectObjs[i]);

            if (!assetPath.Contains(AppDefine.CurrentProjectFolderPath))
            {
                Debug.Log("选择合并引用的图片必须属于同一个项目");
                return;
            }

            replaceSprite.Add(AssetDatabase.LoadAssetAtPath<Sprite>(assetPath));
        }

        // 找到当前项目所有预制体
        try
        {
            string[] paths = Directory.GetFiles(Application.dataPath + "/" + AppDefine.CurrentProjectFolderPath, "*.prefab", SearchOption.AllDirectories);

            for (int i = 0; i < paths.Length; i++)
            {
                if (!string.IsNullOrEmpty(paths[i]) && EditorFileUtility.IsPrefabFile(paths[i]))   //full name  
                {
                    EditorUtility.DisplayProgressBar("替换中", string.Format("替换文件{0}中...", paths[i]), 1f * i / paths.Length);

                    GameObject prefabObj = AssetDatabase.LoadAssetAtPath(EditorFileUtility.GetRelativeAssetPath(paths[i]), typeof(GameObject)) as GameObject;

                    GameObject newOBj = PrefabUtility.InstantiatePrefab(prefabObj) as GameObject;

                    List<Image> replceImage = new List<Image>();

                    newOBj.GetComponentsInChildren<Image>(true, replceImage);  // 获取选择预制体的所有子物体上的Image组件

                    for (int j = 0; j < replceImage.Count; j++)
                    {
                        if (replceImage[j].sprite == null)                  // 为空 
                            continue;

                        if (!replaceSprite.Contains(replceImage[j].sprite)) // 不是需要替换的图
                            continue;

                        if (replceImage[j].sprite == replaceSprite[0])      // 自己
                            continue;

                        // 如果两个文件的目录不一致，则将该资源视为公共资源

                        AssetDatabase.GetAssetPath(replceImage[j].sprite).Replace(replceImage[j].sprite.name, string.Empty);
                        AssetDatabase.GetAssetPath(replaceSprite[0]).Replace(replceImage[j].sprite.name, string.Empty);

                        if (EditorFileUtility.GetFileDirectory(replceImage[j].sprite.texture) != EditorFileUtility.GetFileDirectory(replaceSprite[0].texture))
                            isCommonRes = true;

                        replceImage[j].sprite = replaceSprite[0];

                        Debug.Log(string.Format("将{0}上游戏对象<color=#FF0000FF>{1}</color>的图片替换为<color=#10CC00FF>{2}</color>", prefabObj.name, replceImage[j].gameObject.name, replaceSprite[0].name));
                        PrefabUtility.ReplacePrefab(newOBj, prefabObj);
                    }

                    Object.DestroyImmediate(newOBj);
                }
            }

            string[] scenePaths = Directory.GetFiles(AppDefine.CurrentProjectPath, "*.unity", SearchOption.AllDirectories);

            if (scenePaths.Length > 0)
            {
                //打开场景
                UnityEngine.SceneManagement.Scene scene = EditorSceneManager.OpenScene(scenePaths[0]);

                //获取场景中的所有游戏对象
                GameObject[] gos = (GameObject[])GameObject.FindObjectsOfType(typeof(GameObject));

                foreach (GameObject go in gos)
                {
                    //判断GameObject是否为一个Prefab的引用
                    if (PrefabUtility.GetPrefabType(go) != PrefabType.PrefabInstance)
                    {
                        List<Image> replceImage = new List<Image>();

                        (go as GameObject).GetComponentsInChildren<Image>(true, replceImage);  // 获取所有Text组件

                        for (int j = 0; j < replceImage.Count; j++)
                        {
                            if (replceImage[j].sprite == null)                  // 为空 
                                continue;

                            if (!replaceSprite.Contains(replceImage[j].sprite)) // 不是需要替换的图
                                continue;

                            if (replceImage[j].sprite == replaceSprite[0])      // 自己
                                continue;

                            AssetDatabase.GetAssetPath(replceImage[j].sprite).Replace(replceImage[j].sprite.name, string.Empty);
                            AssetDatabase.GetAssetPath(replaceSprite[0]).Replace(replceImage[j].sprite.name, string.Empty);

                            if (EditorFileUtility.GetFileDirectory(replceImage[j].sprite.texture) != EditorFileUtility.GetFileDirectory(replaceSprite[0].texture))
                                isCommonRes = true;

                            replceImage[j].sprite = replaceSprite[0];

                            Debug.Log(string.Format("将{0}上游戏对象<color=#FF0000FF>{1}</color>的图片替换为<color=#10CC00FF>{2}</color>", scene.name, replceImage[j].gameObject.name, replaceSprite[0].name));

                            EditorSceneManager.MarkSceneDirty(scene);
                            EditorSceneManager.SaveScene(scene);
                        }
                    }
                }
            }

            // 删除不再需要的资源
            for (int i = replaceSprite.Count - 1; i > 0; i--)
                AssetDatabase.DeleteAsset(AssetDatabase.GetAssetPath(replaceSprite[i]));

            // 将公共资源移到公共目录中
            if (isCommonRes)
            {
                string resPath = AssetDatabase.GetAssetPath(selectObjs[0]);
                // AssetDatabase.MoveAsset(resPath, PSDUIImporter.PSDImporterConst.Globle_BASE_FOLDER + "/" + EditorFileUtility.GetFileName(resPath));
            }
        }
        catch (System.Exception ex)
        {
            Debug.Log("--------------------------------------");
            throw ex;
        }
        finally
        {
            EditorUtility.ClearProgressBar();
        }

        AssetDatabase.Refresh();    //Refresh to ensure new generated RBA and Alpha textures shown in Unity as well as the meta file 
    }

}
