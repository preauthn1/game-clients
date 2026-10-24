using System.Collections;
using System.Collections.Generic;
using example.invalid;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.UI;

public class FindAllSpriteReferences
{
    [MenuItem("Assets/资源优化/查找选中图片引用", priority = 22)]
    static private void ExcuteMenu()
    {
        UnityEngine.Object[] selectObjs = Selection.objects;

        for (int m = 0; m < selectObjs.Length; m++)
        {
            if (!(selectObjs[m] is Texture2D))
                return;

            string assetPath = AssetDatabase.GetAssetPath(selectObjs[m]);
            Sprite obj = AssetDatabase.LoadAssetAtPath<Sprite>(assetPath);

            try
            {
                string[] paths = Directory.GetFiles(AppDefine.CurrentProjectPath, "*.prefab", SearchOption.AllDirectories);

                for (int i = 0; i < paths.Length; i++)
                {
                    GameObject prefabObj = AssetDatabase.LoadAssetAtPath(EditorFileUtility.GetRelativeAssetPath(paths[i]), typeof(GameObject)) as GameObject;

                    EditorUtility.DisplayProgressBar("查找sprite引用", string.Format("查找{0}在预制体{1}中的引用...", obj.name, prefabObj.name), 1f * i / paths.Length);

                    // ------------------Image-------------------------
                    List<Image> imageList = new List<Image>();

                    (prefabObj as GameObject).GetComponentsInChildren<Image>(true, imageList);  // 获取所有Text组件

                    for (int j = 0; j < imageList.Count; j++)
                    {
                        if (imageList[j].sprite == obj)
                            Debug.Log(string.Format("<color=#3FFF20>预制体</color> {0} 的 {1} 引用了{2}。", prefabObj.name, imageList[j].name, obj.name));
                    }

                    // ------------------Sprite------------------------
                    List<SpriteRenderer> spriteList = new List<SpriteRenderer>();

                    (prefabObj as GameObject).GetComponentsInChildren<SpriteRenderer>(true, spriteList);  // 获取所有Text组件

                    for (int j = 0; j < spriteList.Count; j++)
                    {
                        if (spriteList[j].sprite == obj)
                            Debug.Log(string.Format("<color=#3FFF20>预制体</color> {0} 的 {1} 引用了{2}。", prefabObj.name, spriteList[j].name, obj.name));
                    }
                }

                string[] scenePaths = Directory.GetFiles(AppDefine.CurrentProjectPath, "*.unity", SearchOption.AllDirectories);

                for (int i = 0; i < scenePaths.Length; i++)
                {
                    string senceName = EditorFileUtility.GetFileName(scenePaths[i].Replace(@"\", @"/"));

                    EditorUtility.DisplayProgressBar("查找sprite引用", string.Format("查找{0}在场景{1}中的引用...", obj.name, senceName), 1f * i / scenePaths.Length);

                    //打开场景
                    EditorSceneManager.OpenScene(scenePaths[i]);

                    //获取场景中的所有游戏对象
                    GameObject[] gos = (GameObject[])GameObject.FindObjectsOfType(typeof(GameObject));

                    foreach (GameObject go in gos)
                    {
                        //判断GameObject是否为一个Prefab的引用
                        if (PrefabUtility.GetPrefabType(go) != PrefabType.PrefabInstance)
                        {
                            // ------------------Image-------------------------
                            List<Image> imageList = new List<Image>();

                            (go as GameObject).GetComponentsInChildren<Image>(true, imageList);  // 获取所有Text组件

                            for (int j = 0; j < imageList.Count; j++)
                            {
                                if (imageList[j].sprite == obj)
                                    Debug.Log(string.Format("<color=#ff0000>场景</color> {0} 的 {1} 引用了{2}。", senceName, imageList[j].name, obj.name));
                            }

                            // ------------------Sprite------------------------
                            List<SpriteRenderer> spriteList = new List<SpriteRenderer>();

                            (go as GameObject).GetComponentsInChildren<SpriteRenderer>(true, spriteList);  // 获取所有Text组件

                            for (int j = 0; j < spriteList.Count; j++)
                            {
                                if (spriteList[j].sprite == obj)
                                    Debug.Log(string.Format("<color=#ff0000>场景</color> {0} 的 {1} 引用了{2}。", senceName, spriteList[j].name, obj.name));
                            }
                        }
                    }
                }
            }
            catch (System.Exception ex)
            {
                throw ex;
            }
            finally
            {
                EditorUtility.ClearProgressBar();
            }
        }
    }
}
