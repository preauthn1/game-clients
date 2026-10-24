using UnityEditor;
using UnityEngine;
using example.invalid;
using LitJson;

public class ExportUISpritePrefabToJson : Editor
{
    delegate bool Filter(Component component);

    [MenuItem("Cocos/Export UISpritePrefab To Json")]
    static void ExportSelect()
    {
        //選取的圖片以及資料夾中所有圖片，可多選
        Object[] selectedAsset = Selection.GetFiltered(typeof(Object), SelectionMode.DeepAssets);

        if (selectedAsset.Length < 1)
        {
            EditorUtility.DisplayDialog("", "請選擇檔案", "Back");
            return;
        }

        string savePath = EditorUtility.SaveFolderPanel("选择导出位置", null, "");
        if (string.IsNullOrEmpty(savePath))
        {
            EditorUtility.DisplayDialog("", "請選擇儲存路徑", "Back");
            return;
        }

        JsonData node = new JsonData();

        foreach (Object obj in selectedAsset)
        {
            ExportJson(node, obj as GameObject);
        }
        WriteJsonFile(JsonMapper.ToJson(node), savePath, "UISpritePrefab");
    }

    static void ExportJson(JsonData node, GameObject prefab)
    {
        SpriteRenderer spr = prefab.GetComponent<SpriteRenderer>();
        if (spr != null)
        {
            if (spr.sprite != null)
            {

                JsonData node1 = new JsonData();
                if (spr.sprite != null)
                {
                    node1["spr"] = spr.sprite.name;
                    node1["atlas"] = spr.sprite.texture.name;

                    var path = AssetDatabase.GetAssetPath(spr.sprite);
                    string fileName = Path.GetFileNameWithoutExtension(path);
                    //Debug.Log("fileName " + fileName);
                    node1["name"] = fileName;

                    string fullFileName = fileName + Path.GetExtension(path);
                    //Debug.Log("fullFileName " + fullFileName);

                    bool isFind = false;
                    string[] paths = path.Split('/');
                    string dir = "";
                    for (int i = 1; i < paths.Length; ++i)
                    {
                        string value = paths[i];
                        if (value == "UI")
                        {
                            isFind = true;
                        }
                        else
                        {
                            if (isFind == true)
                            {
                                if (value == fullFileName)
                                {
                                    break;
                                }
                                else
                                {
                                    if (dir != "")
                                        dir += "/";

                                    dir += value;
                                }
                            }
                        }
                    }
                    //Debug.Log("dir " + dir);
                    node1["dir"] = dir;

                    node[prefab.name] = node1;
                }
                else
                {
                    node1["spr"] = "null";
                    node1["atlas"] = "null";
                    node1["dir"] = "null";
                    node[prefab.name] = "null";
                }
            }
        }
    }

    static void WriteJsonFile(string content, string savePath, string name)
    {
        savePath = string.Format("{0}/{1}.json", savePath, name);
        Debug.Log("SavePath: " + savePath);
        if (File.Exists(savePath))
        {
            int option = EditorUtility.DisplayDialogComplex("文件已存在",
                savePath + "已存在, 是否替换?",
                "替换",
                "取消",
                "保留两者");

            switch (option)
            {
                case 0:
                    File.Delete(savePath);
                    break;

                case 1:
                    return;

                case 2:
                    savePath = savePath.Replace(".lua", "_auto.lua");
                    if (File.Exists(savePath))
                        File.Delete(savePath);
                    break;

                default:
                    Debug.LogError("Unrecognized option.");
                    break;
            }
        }

        FileStream fs = new FileStream(savePath, FileMode.Create);
        StreamWriter sw = new StreamWriter(fs);
        sw.Write(content);

        //清空缓冲区
        sw.Flush();
        //关闭流
        sw.Close();
        fs.Close();
    }
}