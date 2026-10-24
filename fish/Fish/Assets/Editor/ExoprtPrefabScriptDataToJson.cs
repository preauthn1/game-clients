using UnityEditor;
using UnityEngine;
using UnityEngine.UI;
using example.invalid;
using LitJson;
using System.Collections.Generic;
using System.Reflection;
using UnityEngine.EventSystems;

public class ExoprtPrefabScriptDataToJson : Editor
{
    private static Dictionary<string, List<string>> m_ScriptName = new Dictionary<string, List<string>>();
    private static Dictionary<string, string> m_AssetPath = new Dictionary<string, string>();

    [MenuItem("Cocos/輸出腳本資料")]
    static void ExportSelect()
    {
        if (Selection.objects == null)
        {
            return;
        }

        Object[] prefabs = Selection.GetFiltered(typeof(GameObject), SelectionMode.TopLevel);
        if (prefabs == null)
        {
            return;
        }

        string savePath = PlayerPrefs.GetString("ExportScriptSavePath", "");
        savePath = EditorUtility.SaveFolderPanel("选择导出位置", savePath, "");
        if (string.IsNullOrEmpty(savePath) == true)
        {
            return;
        }

        PlayerPrefs.SetString("ExportScriptSavePath", savePath);

        m_ScriptName.Clear();
        m_AssetPath.Clear();

        foreach (Object obj in prefabs)
        {
            ExportJson(obj as GameObject, savePath);
        }

        string DataLog = "";
        // ********************* 腳本數量 *********************
        int AccValue = 0;
        foreach (KeyValuePair<string, List<string>> data in m_ScriptName)
        {
            DataLog += "名稱:" + data.Key + " 數量" + data.Value.Count + "\n";
            AccValue += data.Value.Count;
        }
        Debug.Log("腳本總數:" + AccValue + "腳本數:" + m_ScriptName.Count + "\n" + DataLog);

        // ********************* 腳本路徑 *********************
        DataLog = "";
        foreach (KeyValuePair<string, List<string>> data in m_ScriptName)
        {
            DataLog += "**************** script name " + data.Key + "\n";
            foreach (string data1 in data.Value)
            {
                DataLog += "path " + data1 + "\n";
            }
        }
        Debug.Log("腳本路徑\n" + DataLog);

        // ********************* 資源路徑 *********************
        DataLog = "";
        foreach (KeyValuePair<string, string> data in m_AssetPath)
        {
            DataLog += data.Value + "\n";
        }
        Debug.Log("資源路徑\n" + DataLog);
    }

    static void ExportJson(GameObject prefab, string savePath)
    {
        JsonData node = new JsonData();
        GetNodeJson(node, prefab);

        // Debug.Log(JsonMapper.ToJson(jd));
        WriteJsonFile(JsonMapper.ToJson(node), savePath, prefab.name + "_script");
    }

    static string GetRefer(Transform tr)
    {
        string refer = tr.name;
        while (tr.parent != null)
        {
            tr = tr.parent;
            refer = tr.name + "/" + refer;
        }
        return refer;
    }

    static JsonData GetArrayData(GameObject go, string fieldName, string fieldTypeName, string fieldBaseTypeName, string fieldFullName, object value)
    {
        JsonData datas = null;

        fieldTypeName = fieldTypeName.Replace("[]", "");
        fieldFullName = fieldFullName.Replace("[]", "");

        object[] objs = value as object[];
        if (objs != null && objs.Length > 0)
        {
            foreach (var o in objs)
            {
                JsonData data = PaseData(go, fieldName, fieldTypeName, "", fieldFullName, o);
                if (data != null)
                {
                    if (datas == null)
                        datas = new JsonData();
                    datas.Add(data);
                }
            }
        }
        return datas;
    }

    static string GetCompName(Component m)
    {
        string targetStart = "(";
        string targetEnd = ")";
        int indexStart;
        int indexEnd;
        int targetStartLength = targetStart.Length;

        string sname = m.ToString();
        if (sname.Contains("UnityEngine") == true)
            return "";

        indexStart = sname.IndexOf(targetStart);
        if (indexStart == -1)
            return "";
        indexEnd = sname.IndexOf(targetEnd, indexStart);
        if (indexEnd == -1)
            return "";

        if (indexEnd != sname.Length - 1)
        {
            indexStart = sname.IndexOf(targetStart, indexEnd);
            if (indexStart == -1)
                return "";
            indexEnd = sname.IndexOf(targetEnd, indexStart);
            if (indexEnd == -1)
                return "";
        }

        string objPath = AssetDatabase.GetAssetPath(m);

        sname = sname.Substring(indexStart + targetStartLength, indexEnd - indexStart - targetStartLength);
        string[] names = sname.Split('.');
        sname = names[names.Length - 1];

        return sname;
    }

    static string GetAssetPath(GameObject go, Object obj)
    {
        string objPath = AssetDatabase.GetAssetPath(obj);

        if (m_AssetPath.ContainsKey(objPath) == false)
            m_AssetPath.Add(objPath, objPath);

        if (objPath.Contains("Assets/Fish4") == false)
        {
            Debug.LogWarning(GetRefer(go.transform) + "\n" + objPath);
        }

        objPath = objPath.Replace("Assets/Fish4/", "");
        objPath = objPath.Replace(".ogg", ".mp3");
        return objPath;
    }

    static JsonData PaseData(GameObject go, string fieldName, string fieldTypeName, string fieldBaseTypeName, string fieldFullName, object value)
    {
        if (value == null)
            return null;

        JsonData fieldInfoData = null;

        if (fieldBaseTypeName == "Array")
        {
            var ArrayData = GetArrayData(go, fieldName, fieldTypeName, fieldBaseTypeName, fieldFullName, value);
            if (ArrayData != null)
            {
                fieldInfoData = new JsonData();
                fieldInfoData["dataType"] = "Array";
                fieldInfoData["datas"] = ArrayData;
            }
        }
        // DateTime Int32 Single Boolean Double Vector3
        else if (fieldBaseTypeName == "ValueType")
        {
            fieldInfoData = new JsonData();
            fieldInfoData["dataType"] = fieldTypeName;

            if (fieldTypeName == "Vector3")
            {
                Vector3 v3 = (Vector3)value;
                fieldInfoData["data"] = new JsonData();
                fieldInfoData["data"]["x"] = v3.x;
                fieldInfoData["data"]["y"] = v3.y;
                fieldInfoData["data"]["z"] = v3.z;
            }
            else
            {
                fieldInfoData["data"] = value.ToString();
            }
        }
        else if (fieldBaseTypeName == "MonoBehaviour")
        {
            Component comp = value as Component;
            if (comp != null)
            {
                fieldInfoData = new JsonData();
                fieldInfoData["dataType"] = "MonoBehaviour";
                fieldInfoData["dataTypeName"] = GetCompName(comp);
                fieldInfoData["refer"] = GetRefer(comp.transform);
            }
        }
        else if (fieldTypeName == "GameObject")
        {
            GameObject go1 = value as GameObject;
            if (go1 != null)
            {
                fieldInfoData = new JsonData();
                fieldInfoData["dataType"] = "GameObject";

                if (go1.name == "Main Camera")
                {
                    fieldInfoData["refer"] = go1.name;
                }
                else
                {
                    if (go1.transform.parent == null)
                    {
                        fieldInfoData["res"] = GetAssetPath(go, go1);
                    }
                    else
                    {
                        fieldInfoData["refer"] = GetRefer(go1.transform);
                    }
                }
            }
        }
        else if (fieldTypeName == "Transform" || fieldTypeName == "RectTransform")
        {
            Transform tr1 = value as Transform;
            if (tr1 != null)
            {
                fieldInfoData = new JsonData();
                fieldInfoData["dataType"] = "Transform";
                fieldInfoData["refer"] = GetRefer(tr1);
            }
        }
        else if (fieldTypeName == "Text")
        {
            Text txt = value as Text;
            if (txt != null)
            {
                fieldInfoData = new JsonData();
                fieldInfoData["dataType"] = "MonoBehaviour";
                fieldInfoData["dataTypeName"] = "cc.Label";
                fieldInfoData["refer"] = GetRefer(txt.transform);
            }
        }
        else if (fieldTypeName == "Image")
        {
            Image img = value as Image;
            if (img != null)
            {
                fieldInfoData = new JsonData();
                fieldInfoData["dataType"] = "MonoBehaviour";
                fieldInfoData["dataTypeName"] = "cc.Sprite";
                fieldInfoData["refer"] = GetRefer(img.transform);
            }
        }
        else if (fieldTypeName == "CanvasGroup")
        {
            CanvasGroup cg = value as CanvasGroup;
            if (cg != null)
            {
                fieldInfoData = new JsonData();
                fieldInfoData["refer"] = GetRefer(cg.transform);
            }
        }
        else if (fieldTypeName == "Animator")
        {
            Animator ani = value as Animator;
            if (ani != null)
            {
                fieldInfoData = new JsonData();
                fieldInfoData["dataType"] = "MonoBehaviour";
                fieldInfoData["dataTypeName"] = "cc.Animation";
                fieldInfoData["refer"] = GetRefer(ani.transform);
            }
        }
        else if (fieldTypeName == "Sprite")
        {
            Sprite sprite = value as Sprite;
            if (sprite != null)
            {
                fieldInfoData = new JsonData();
                fieldInfoData["dataType"] = "sprite-frame";
                fieldInfoData["res"] = GetAssetPath(go, sprite);
            }
        }
        else if (fieldTypeName == "AudioClip")
        {
            AudioClip audio = value as AudioClip;
            if (audio != null)
            {
                fieldInfoData = new JsonData();
                fieldInfoData["dataType"] = "AudioClip";
                fieldInfoData["res"] = GetAssetPath(go, audio);
            }
        }
        else if (fieldTypeName == "Slider")
        {
            Slider slider = value as Slider;
            if (slider != null)
            {
                fieldInfoData = new JsonData();
                fieldInfoData["dataType"] = "MonoBehaviour";
                fieldInfoData["dataTypeName"] = "cc.Slider";
                fieldInfoData["refer"] = GetRefer(slider.transform);
            }
        }
        else if (fieldTypeName == "Button")
        {
            Button button = value as Button;
            if (button != null)
            {
                fieldInfoData = new JsonData();
                fieldInfoData["dataType"] = "MonoBehaviour";
                fieldInfoData["dataTypeName"] = "cc.Button";
                fieldInfoData["refer"] = GetRefer(button.transform);
            }
        }
        else if (fieldTypeName == "String")
        {
            fieldInfoData = new JsonData();
            fieldInfoData["dataType"] = "String";
            fieldInfoData["data"] = value.ToString();
        }
        else if (fieldTypeName == "SampleGameHelper")
        {
            OneSDK.StarterPack.SampleGameHelper sgh = value as OneSDK.StarterPack.SampleGameHelper;
            if (sgh != null)
            {
                fieldInfoData = new JsonData();
                fieldInfoData["dataType"] = "MonoBehaviour";
                fieldInfoData["dataTypeName"] = "SampleGameHelper";
                fieldInfoData["refer"] = GetRefer(sgh.transform);
            }
        }
        else if (fieldTypeName == "Package")
        {
            OneSDK.Utility.ErrorCodeHandler.Package packet = value as OneSDK.Utility.ErrorCodeHandler.Package;
            if (packet != null)
            {
                fieldInfoData = new JsonData();
                fieldInfoData["dataType"] = "MonoBehaviour";
                fieldInfoData["dataTypeName"] = "Package";
                fieldInfoData["data"] = new JsonData();
                fieldInfoData["data"]["code"] = PaseData(go, fieldName, "Int32", "ValueType", "", packet.code);
                fieldInfoData["data"]["message"] = PaseData(go, fieldName, "String", "", "", packet.message);
                fieldInfoData["data"]["otherInfo"] = PaseData(go, fieldName, "String", "", "", packet.otherInfo);
                fieldInfoData["data"]["type"] = PaseData(go, fieldName, "Int32", "ValueType", "", packet.type);
            }
        }
        else if (fieldTypeName == "AppKey")
        {
            fieldInfoData = PaseData(go, fieldName, "Int32", "ValueType", "", (int)value);
            /*
            fieldInfoData = new JsonData();
            fieldInfoData["dataType"]       = "MonoBehaviour";
            fieldInfoData["data"]           = (int)value;
            */
        }
        else if (fieldTypeName == "Environment")
        {
            fieldInfoData = PaseData(go, fieldName, "Int32", "ValueType", "", (int)value);
            /*
            fieldInfoData = new JsonData();
            fieldInfoData["dataType"]       = "MonoBehaviour";
            fieldInfoData["dataTypeName"]   = "Environment";
            fieldInfoData["data"]           = (int)value;
            */
        }
        else if (fieldTypeName == "serverSelection")
        {
            fieldInfoData = PaseData(go, fieldName, "Int32", "ValueType", "", (int)value);
            /*
            fieldInfoData["dataType"]       = "MonoBehaviour";
            fieldInfoData["dataTypeName"]   = "serverSelection";
            fieldInfoData["data"]           = (int)value;
            */
        }
        /*
        else if (fieldTypeName == "EventTrigger")
        {
            EventTrigger et = value as EventTrigger;
            if (et != null)
            {
                fieldInfoData = new JsonData();
                fieldInfoData["dataType"] = "MonoBehaviour";
                fieldInfoData["dataTypeName"] = "EventTrigger";
                fieldInfoData["refer"] = GetRefer(et.transform);
            }
        }
        */
        else if (fieldFullName == "P8Games.Fish4.GunView+FishType")
        {
            P8Games.Fish4.GunView.FishType ft = value as P8Games.Fish4.GunView.FishType;
            if (ft != null)
            {
                fieldInfoData = new JsonData();
                fieldInfoData["dataType"] = "MonoBehaviour";
                fieldInfoData["dataTypeName"] = "GunView.FishType";
                fieldInfoData["data"] = new JsonData();
                fieldInfoData["data"]["type"] = PaseData(go, fieldName, "Int32", "ValueType", "", ft.type);
                fieldInfoData["data"]["obj"] = PaseData(go, fieldName, "GameObject", "", "", ft.obj);
            }
        }
        else if (fieldFullName == "P8Games.Fish4.Fish_LightningClickView+FishType")
        {
            P8Games.Fish4.Fish_LightningClickView.FishType ft = value as P8Games.Fish4.Fish_LightningClickView.FishType;
            if (ft != null)
            {
                fieldInfoData = new JsonData();
                fieldInfoData["dataType"] = "MonoBehaviour";
                fieldInfoData["dataTypeName"] = "Fish_LightningClickView.FishType";
                fieldInfoData["data"] = new JsonData();
                fieldInfoData["data"]["type"] = PaseData(go, fieldName, "Int32", "ValueType", "", ft.type);
                fieldInfoData["data"]["btn"] = PaseData(go, fieldName, "Button", "", "", ft.btn);
            }
        }
        else if (fieldFullName == "P8Games.Fish4.GunView")
        {
            P8Games.Fish4.GunView gv = value as P8Games.Fish4.GunView;
            if (gv != null)
            {
                fieldInfoData = new JsonData();
                fieldInfoData["dataType"] = "MonoBehaviour";
                fieldInfoData["dataTypeName"] = "GunView";
                fieldInfoData["refer"] = GetRefer(gv.transform);
            }
        }
        else if (fieldFullName == "P8Games.Fish4.UserInfoView")
        {
            P8Games.Fish4.UserInfoView uiv = value as P8Games.Fish4.UserInfoView;
            if (uiv != null)
            {
                fieldInfoData = new JsonData();
                fieldInfoData["dataType"] = "MonoBehaviour";
                fieldInfoData["dataTypeName"] = "UserInfoView";
                fieldInfoData["refer"] = GetRefer(uiv.transform);
            }
        }
        else if (fieldFullName == "P8Games.Fish4.RouteCollection+Dynamic")
        {

        }
        else if (fieldFullName == "P8Games.Fish4.SpecialFishBehavior+FishType")
        {
            P8Games.Fish4.SpecialFishBehavior.FishType ft = value as P8Games.Fish4.SpecialFishBehavior.FishType;
            if (ft != null)
            {
                fieldInfoData = new JsonData();
                fieldInfoData["dataType"] = "MonoBehaviour";
                fieldInfoData["dataTypeName"] = "SpecialFishBehavior.FishType";
                fieldInfoData["data"] = new JsonData();
                fieldInfoData["data"]["prefab"] = PaseData(go, fieldName, "GameObject", "", "", ft.prefab);
                fieldInfoData["data"]["fishType"] = PaseData(go, fieldName, "Int32", "ValueType", "", ft.fishType);
            }
        }
        /*
        else if (fieldName == "fishTypeList" || fieldName == "fishPayout")
        {
            List<int> lists = value as List<int>;
            if (lists != null && lists.Count > 0)
            {
                fieldInfoData = new JsonData();
                fieldInfoData["dataType"]       = "MonoBehaviour";
                fieldInfoData["dataTypeName"]   = fieldName;
                fieldInfoData["datas"]          = new JsonData();
                foreach (int data in lists)
                {
                    JsonData infoData = PaseData(go, fieldName, "Int32", "ValueType", "", value);
                    fieldInfoData["datas"].Add(infoData);
                }

                var ArrayData = GetArrayData(go, fieldName, "", "Array", "", lists);
                if (ArrayData != null)
                {
                    fieldInfoData = new JsonData();
                    fieldInfoData["dataType"] = "Array";
                    fieldInfoData["datas"] = ArrayData;
                }
            }
        }
        else if (fieldName == "fishPosList")
        {
            List<Vector3> lists = value as List<Vector3>;
            if (lists != null && lists.Count > 0)
            {
                fieldInfoData = new JsonData();
                fieldInfoData["dataType"]    = "Array";
                fieldInfoData["datas"]       = new JsonData();

                foreach (Vector3 data in lists)
                {
                    JsonData infoData = PaseData(go, fieldName, "Vector3", "ValueType", "", data);
                    fieldInfoData["datas"].Add(infoData);
                }

                var ArrayData = GetArrayData(go, fieldName, "", "Array", "", lists);
                if (ArrayData != null)
                {
                    fieldInfoData = new JsonData();
                    fieldInfoData["dataType"] = "Array";
                    fieldInfoData["datas"] = ArrayData;
                }
            }
        }
        else if (fieldName == "spawnFishList2")
        {
            List<Vector3> lists = value as List<Vector3>;
            if (lists != null && lists.Count > 0)
            {
                fieldInfoData = new JsonData();
                fieldInfoData["dataType"]   = "Array";
                fieldInfoData["datas"]      = new JsonData();

                foreach (Vector3 data in lists)
                {
                    JsonData infoData = PaseData(go, fieldName, "Vector3", "ValueType", "", data);
                    fieldInfoData["datas"].Add(data);
                }

                var ArrayData = GetArrayData(go, fieldName, "", "Array", "", lists);
                if (ArrayData != null)
                {
                    fieldInfoData = new JsonData();
                    fieldInfoData["dataType"] = "Array";
                    fieldInfoData["datas"] = ArrayData;
                }
            }
        }
        */
        else
        {
            string info = "";
            info += "game object name " + go.name + "\n";
            info += "fieldName " + fieldName + "\n";
            info += "fieldTypeName " + fieldTypeName + "\n";
            info += "fieldFullName " + fieldFullName + "\n";
            info += "fieldBaseTypeName " + fieldBaseTypeName + "\n";
            Debug.Log(info);
            fieldInfoData = null;
        }

        return fieldInfoData;
    }

    static void ParseScriptData(JsonData node, GameObject go, Component m)
    {
        string targetStart = "(";
        string targetEnd = ")";
        int indexStart;
        int indexEnd;
        int targetStartLength = targetStart.Length;

        string sname = m.ToString();
        if (sname.Contains("UnityEngine") == true)
            return;

        indexStart = sname.IndexOf(targetStart);
        if (indexStart == -1)
            return;
        indexEnd = sname.IndexOf(targetEnd, indexStart);
        if (indexEnd == -1)
            return;

        if (indexEnd != sname.Length - 1)
        {
            indexStart = sname.IndexOf(targetStart, indexEnd);
            if (indexStart == -1)
                return;
            indexEnd = sname.IndexOf(targetEnd, indexStart);
            if (indexEnd == -1)
                return;
        }

        string objPath = AssetDatabase.GetAssetPath(m);

        sname = sname.Substring(indexStart + targetStartLength, indexEnd - indexStart - targetStartLength);

        string[] names = sname.Split('.');
        sname = names[names.Length - 1];

        if (sname == "ExportSetting")
            return;

        JsonData scriptData = new JsonData();
        scriptData["s_name"] = sname;
        scriptData["s_path"] = GetRefer(go.transform);

        JsonData scriptDatas = null;

        System.Type type = m.GetType(); //同樣先取得Component的type
        FieldInfo[] fields = type.GetFields(BindingFlags.Instance | BindingFlags.Public); //使用Reflection取得此type上的所有fields
        foreach (FieldInfo field in fields)
        {
            //Debug.LogWarning(field.Name + " " + field.FieldType + " " + field.GetValue(m));
            JsonData fieldInfoData = new JsonData();

            object value = field.GetValue(m);
            if (value == null || value.ToString() == "null")
            {

            }
            else
            {
                JsonData data = PaseData(go, field.Name, field.FieldType.Name, field.FieldType.BaseType.Name, field.FieldType.FullName, value);
                if (data != null)
                {
                    data["f_name"] = field.Name;

                    if (scriptDatas == null)
                        scriptDatas = new JsonData();
                    scriptDatas.Add(data);
                }
            }
        }
        if (scriptDatas != null)
            scriptData["s_data"] = scriptDatas;
        node.Add(scriptData);

        string path = go.name;
        Transform tr = go.transform;
        while (tr.parent != null)
        {
            tr = tr.parent;
            path = tr.name + ">" + path;
        }
        if (m_ScriptName.ContainsKey(sname) == false)
            m_ScriptName.Add(sname, new List<string>());
        m_ScriptName[sname].Add(path);
    }

    static void GetNodeJson(JsonData node, GameObject go)
    {
        // 取得腳本
        Component[] ms = go.GetComponents<Component>();
        if (ms.Length > 0)
        {
            foreach (var m in ms)
            {
                ParseScriptData(node, go, m);
            }
        }

        if (go.transform.childCount > 0)
        {
            for (int i = 0, len = go.transform.childCount; i < len; ++i)
            {
                GetNodeJson(node, go.transform.GetChild(i).gameObject);
            }
        }
    }

    static void WriteJsonFile(string content, string savePath, string name)
    {
        if (content == "")
        {
            Debug.Log("!!!!! " + name +"no content data ... ");
            return;
        }

        savePath = string.Format("{0}/{1}.json", savePath, name);
        //Debug.Log("SavePath: " + savePath);
        if (File.Exists(savePath))
        {
            File.Delete(savePath);
            /*
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
            */
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