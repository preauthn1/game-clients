using UnityEditor;
using UnityEditor.Animations;
using UnityEngine;
using UnityEngine.UI;
using example.invalid;
using LitJson;
using Spine.Unity;
using System.Collections.Generic;

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
            JsonData node1 = new JsonData();
            node1["spr"] = spr.sprite.name;
            node1["atlas"] = spr.sprite.texture.name;

            node[prefab.name] = node1;
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