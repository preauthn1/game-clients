using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;
using example.invalid;
using System.Runtime.CompilerServices;
using System.Xml;
using System.Text;
using Application = UnityEngine.Application;
using Object = UnityEngine.Object;
using Json = MiniJSON.Json;
using SimpleJSON;

//從Unity中讀取分割資料 每一張大圖存成一個Plist檔，將產出的Plist檔放到Cocos專案中的圖片旁邊即可
public class PlistSpriteSheet
{
    private static float progress = 0.0f;

    [MenuItem("Tools/Parse Sprite and Animation to Cocos Resource")]
    public static void ParsePlist()
    {
        //選取的圖片以及資料夾中所有圖片，可多選
        Object[] selectedAsset = Selection.GetFiltered(typeof(Object), SelectionMode.DeepAssets);

        if (selectedAsset.Length < 1)
        {
            EditorUtility.DisplayDialog("Sprite/Parse Plist",
                "Select a 'Sprite' 'AnimationClip' or 'folder'to Parse", "Back");
            return;
        }

        int i = 0;
        foreach (Object obj in selectedAsset)
        {
            progress = ((float) selectedAsset.Length) / (float) i;
            EditorUtility.DisplayProgressBar("cocos resource converter", obj.name, progress);

            if (obj is Texture2D)
            {
                CreateXml(obj as Texture2D);
            }

            if (obj is AnimationClip)
            {
                ParseClip(obj as AnimationClip);
            }

            i++;
        }

        EditorUtility.ClearProgressBar();
    }

    private static XmlDocument xmldoc;

    public static void CreateXml(Texture2D assetObject)
    {
        string          objPath  = AssetDatabase.GetAssetPath(assetObject);
        TextureImporter ti       = AssetImporter.GetAtPath(objPath) as TextureImporter;
        string          filename = Path.GetFileName(objPath);

        if (ti.spriteImportMode == SpriteImportMode.Single)
        {
            return;
        }

        string path = Application.dataPath + "/../../outputJsonAnim/" + Path.ChangeExtension(objPath, "plist");

        var folder = Path.GetDirectoryName(path);
        Directory.CreateDirectory(folder);

        if (File.Exists(path))
        {
            File.Delete(path);
        }

        //创建最上一层的节点。
        xmldoc = new XmlDocument();
        xmldoc.AppendChild(xmldoc.CreateXmlDeclaration("1.0", "UTF-8", null));
        xmldoc.AppendChild(xmldoc.CreateDocumentType("plist", "-//Apple Computer//DTD PLIST 1.0//EN",
            "http://example.invalid/DTDs/PropertyList-1.0.dtd", null));

        //创建最上一层的节点。
        XmlElement root = xmldoc.CreateElement("plist");
        root.SetAttribute("version", "1.0");
        xmldoc.AppendChild(root);

        XmlElement elementChild1, elementChild2, elementChild3, elementChild4;
        XmlElement element = newXmlElement(root, "dict");

        newXmlElement(element, "key", "frames");
        elementChild1 = newXmlElement(element, "dict");
        string ttsize =
            "{" + String.Format("{0},{1}", Mathf.Round(assetObject.width), Mathf.Round(assetObject.height)) + "}";

        //切出來的一個小Sprite
        for (int i = 0; i < ti.spritesheet.Length; i++)
        {
            SpriteMetaData oSm = ti.spritesheet[i];
            //cocos的Y軸起始方向與Unity相反，重新換算
            string pos = "{" + String.Format("{0},{1}",
                             Mathf.Round(oSm.rect.x),
                             Mathf.Round(assetObject.height - oSm.rect.y - oSm.rect.height)) + "}";
            string size = "{" + String.Format("{0},{1}",
                              Mathf.Round(oSm.rect.width),
                              Mathf.Round(oSm.rect.height)) + "}";
            string rect = "{" + String.Format("{0},{1}", pos, size) + "}";

            newXmlElement(elementChild1, "key", oSm.name);
            elementChild2 = newXmlElement(elementChild1, "dict");
            newXmlElement(elementChild2, "key", "aliases");
            newXmlElement(elementChild2, "array");
            newXmlElement(elementChild2, "key",    "spriteOffset");
            newXmlElement(elementChild2, "string", "{0,0}");
            newXmlElement(elementChild2, "key",    "spriteSize");
            newXmlElement(elementChild2, "string", size); //spriteSize
            newXmlElement(elementChild2, "key",    "spriteSourceSize");
            newXmlElement(elementChild2, "string", size); //spriteSourceSize
            newXmlElement(elementChild2, "key",    "textureRect");
            newXmlElement(elementChild2, "string", rect); //textureRect
            newXmlElement(elementChild2, "key",    "textureRotated");
            newXmlElement(elementChild2, "false");
        }
        //小圖完畢

        newXmlElement(element, "key", "metadata");
        elementChild1 = newXmlElement(element, "dict");
        newXmlElement(elementChild1, "key",     "format");
        newXmlElement(elementChild1, "integer", "3");
        newXmlElement(elementChild1, "key",     "pixelFormat");
        newXmlElement(elementChild1, "string",  "RGBA8888");
        newXmlElement(elementChild1, "key",     "premultiplyAlpha");
        newXmlElement(elementChild1, "false");
        newXmlElement(elementChild1, "key",    "realTextureFileName");
        newXmlElement(elementChild1, "string", filename);
        newXmlElement(elementChild1, "key",    "size");
        newXmlElement(elementChild1, "string", ttsize);
        newXmlElement(elementChild1, "key",    "smartupdate");
        newXmlElement(elementChild1, "string",
            "$TexturePacker:SmartUpdate:3b1eac0e6c1fcffc3f0fd7fd492e8089:0280c04a5811590e33a1e26cc759b0c4:b1d7634429216a4fd5138097b0cb227e$");
        newXmlElement(elementChild1, "key",    "textureFileName");
        newXmlElement(elementChild1, "string", filename);

        //最后保存文件
        xmldoc.Save(path);
//        Debug.Log("out put to " + path);
    }

    public static XmlElement newXmlElement(XmlElement Parente, string name, string InnerText = null)
    {
        XmlElement elementChild = xmldoc.CreateElement(name);
        if (InnerText != null)
        {
            elementChild.InnerText = InnerText;
        }

        Parente.AppendChild(elementChild);
        return elementChild;
    }


    private static StringBuilder sb;

    private static bool   OnlyHead = false;
    private static string folder;

    private static string jsonFileExt = ".json";

    private static string[] wrapModeNum =
    {
        "Default", "normal", "loop",
        "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null",
        "null", "null", "null", "null", "null",
        "pingpong",
        "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null",
        "reverse", "null",
        "loopreverse", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null",
        "null", "null", "null",
        "pingpongreverse",
    };

    //重新排序Clip裡面的資料，原始資料超亂
    private static int Compare(EditorCurveBinding cv1, EditorCurveBinding cv2)
    {
        if (cv1.path == cv2.path)
        {
            if (cv1.type.Name == cv2.type.Name)
            {
                if (cv1.propertyName == cv2.propertyName)
                {
                    return 0;
                }

                return String.Compare(cv1.propertyName, cv2.propertyName, StringComparison.Ordinal);
            }

            if (cv1.type.Name == "Image")
                return String.Compare("1", "0", StringComparison.Ordinal);
            return String.Compare("0", "1", StringComparison.Ordinal);
        }

        return String.Compare(cv1.path, cv2.path, StringComparison.Ordinal);
    }


    //這邊輸入Clip 直接存成JSON檔，格式參照Cocos，但因為需要Cocos的UUID，暫時記著名字，之後到Cocos再來轉一次就好
    public static void ParseClip(AnimationClip clip)
    {
        int    i, x;
        string path   = Path.GetDirectoryName(Application.dataPath + "\\..\\..\\outputJsonAnim\\");
        string folder = Path.Combine(path, Path.GetDirectoryName(AssetDatabase.GetAssetPath(clip)));
        OnlyHead = false;
        sb       = new StringBuilder();
        EditorCurveBinding cdata;
        BeginObject();
        WriteString("type", "cc.AnimationClip");
        Next();
        WriteString("_name", clip.name);
        Next();
        WriteFloat("_objFlags", 0);
        Next();
        WriteString("_native", "");
        Next();
        WriteFloat("_duration", clip.length);
        Next();
        WriteFloat("sample", clip.frameRate);
        Next();
        WriteFloat("speed", 1);
        Next();

        AnimationClipSettings tSettings = AnimationUtility.GetAnimationClipSettings(clip);

        int wm = Array.IndexOf(wrapModeNum, clip.wrapMode.ToString());

        Debug.Log("wrapMode" + wm + ", " + clip.wrapMode + "," + tSettings.loopTime);
        if (wm > 0)
        {
            WriteFloat("wrapMode", wm);
        }
        else if (tSettings.loopTime)
        {
            WriteFloat("wrapMode", 2);
        }
        else
        {
            WriteFloat("wrapMode", 0);
        }

        Next();
        EditorCurveBinding[] cdataarray    = AnimationUtility.GetObjectReferenceCurveBindings(clip);
        EditorCurveBinding[] cdataarray2   = AnimationUtility.GetCurveBindings(clip);
        int                  l             = cdataarray.Length;
        int                  TL            = l + cdataarray2.Length;
        bool                 haveCurveData = (TL > 0);
        bool                 havePaths     = false;
        if (haveCurveData)
        {
            BeginObject("curveData");
            BeginObject("paths");
        }
        else
        {
            BeginObject("curveData");
            EndObject();
            Next();
            BeginArray("events");
            EndArray();
            EndObject();
            writeFile(folder, clip);
            return;
        }

        EditorCurveBinding[] cdataarray3 = new EditorCurveBinding[TL];
        EditorCurveBinding[] cdataarray4;
        for (x = 0; x < l; x++)
        {
            cdataarray3[x] = cdataarray[x];
        }

        for (i = 0, x = l; x < TL; i++, x++)
        {
            cdataarray3[x] = cdataarray2[i];
        }

        Array.Sort(cdataarray3, Compare);

        //Cocos的層級與Unity不同，這邊直接比對名字來重新建立層級，場上物件名字應該沒人換行吧
        string memPath            = "xxxxxxxxxxxxxxxx\nxxxxxxxxxxxxxxxx";
        bool   wasBeginPathObject = false;
        bool   lastIsImage        = false;

        cdataarray4 = WriteJGroup(cdataarray3, clip, TL, false);

        if (OnlyHead)
        {
            Next();
        }
        else
        {
            EndObject();
            EndObject();
        }

        //這邊是後來補的，處理最上層級(掛著Animation/Animator)的這個物件在Animation裡面的動作
        //最上層這個物件是否有動畫?
        if (cdataarray4 != null)
        {
            WriteJGroup(cdataarray4, clip, cdataarray4.Length, true);
            EndObject();
        }

        EndObject();
        Next();
        BeginArray("events");
        AnimationEvent[] AniEve = clip.events;
        l = AniEve.Length;
        for (x = 0; x < l; x++)
        {
            string Parameter = "";

            if (AniEve[x].objectReferenceParameter != null)
            {
                BeginObject();
                WriteFloat("frame", AniEve[x].time);
                WriteString("func", AniEve[x].functionName);
                BeginArray("params");
                WriteString(AniEve[x].objectReferenceParameter.name);
                EndArray();
                EndObject();
            }
            else if (AniEve[x].stringParameter != "")
            {
                BeginObject();
                WriteFloat("frame", AniEve[x].time);
                WriteString("func", AniEve[x].functionName);
                BeginArray("params");
                WriteString(AniEve[x].stringParameter);
                EndArray();
                EndObject();
            }
            else
            {
                float numP = AniEve[x].floatParameter + AniEve[x].intParameter;
                BeginObject();
                WriteFloat("frame", AniEve[x].time);
                WriteString("func", AniEve[x].functionName);
                BeginArray("params");
                WriteFloat(numP);
                EndArray();
                EndObject();
            }
        }

        EndArray();
        EndObject();
        writeFile(folder, clip);
    }

    private static void writeFile(string folder, AnimationClip clip)
    {
        if (folder.Length > 0)
        {
            Directory.CreateDirectory(folder);
            string filename = folder + "/" + clip.name + jsonFileExt;
            //FileMode.Truncate:複寫全檔
            FileStream   f  = new FileStream(filename, FileMode.OpenOrCreate, FileAccess.Write);
            StreamWriter sw = new StreamWriter(f);
            sw.Write("");
            sw.Close();
            f.Close();
            f  = new FileStream(filename, FileMode.Truncate, FileAccess.Write);
            sw = new StreamWriter(f);
            string jsonString = sb.ToString();

            string FormatJSON = "null";


            try
            {
                FormatJSON = Json.Serialize(Json.Deserialize(jsonString));
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                sw.Write(jsonString);
                sw.Close();
                f.Close();
                throw;
            }

            sw.Write(FormatJSON);
            sw.Close();
            f.Close();
        }
    }

    //EditorCurveBinding[] cdataarray
    private static EditorCurveBinding[] WriteJGroup(EditorCurveBinding[] cdataarray, AnimationClip clip, int Len, bool firstLayer)
    {
        int    i, j, x, TL        = 0;
        string memPath            = "xxxxxxxxxxxxxxxx\nxxxxxxxxxxxxxxxx";
        bool   wasBeginPathObject = false;
        bool   lastIsImage        = false;
        bool   inColor            = false;
        bool   inOpacity          = false;

        List<CocosAnimColorJson>   CCAniC = new List<CocosAnimColorJson>();
        CocosAnimColorJson         tempC;
        List<CocosAnimOpacityJson> CCAniO = new List<CocosAnimOpacityJson>();
        CocosAnimOpacityJson       tempO;
        EditorCurveBinding[]       topLayer = null;
        if (!firstLayer)
        {
            for (x = 0; x < Len; x++)
            {
                EditorCurveBinding cdata = cdataarray[x];
                if (cdata.path == "")
                    TL++;
            }

            if (TL == Len)
                OnlyHead = true;

            if (TL > 0)
                topLayer = new EditorCurveBinding[TL];

            TL = 0;
        }


        for (x = 0; x < Len; x++)
        {
            EditorCurveBinding cdata = cdataarray[x];

            if (!firstLayer && cdata.path == "")
            {
                topLayer[TL++] = cdata;
                continue;
            }

            if (memPath != cdata.path)
            {
                memPath = cdata.path;
                if (wasBeginPathObject)
                {
                    if (!lastIsImage)
                        EndObject();

                    EndObject();
                    if (x < Len)
                        Next();
                }

                //最上層cdata.path會是空的，最上層只會有自己一個
                if (!firstLayer)
                    BeginObject(cdata.path);

                lastIsImage = (cdata.propertyName == "m_Sprite");


                if (!lastIsImage)
                {
                    BeginObject("props");
                }

                wasBeginPathObject = true;
            }

            if (cdata.propertyName == "m_Sprite")
            {
                EndObject();
                Next();
                BeginObject("comps");
                BeginObject("cc.Sprite");
                BeginArray("spriteFrame");

                ObjectReferenceKeyframe[] Keyframes = AnimationUtility.GetObjectReferenceCurve(clip, cdata);
                for (i = 0; i < Keyframes.Length; i++)
                {
                    ObjectReferenceKeyframe kf = Keyframes[i];
                    BeginObject();
                    WriteFloat("frame", kf.time);
                    Next();
                    BeginObject("value");
                    WriteString("_fakename", kf.value.name);
                    EndObject();
                    EndObject();
                    if (i < Keyframes.Length - 1)
                        Next();
                }

                EndArray();
                EndObject();
            }
            else
            {
                AnimationCurve posArray = AnimationUtility.GetEditorCurve(clip, cdata);
                Keyframe[]     keys     = posArray.keys;
                if (posArray != null)
                {
                    if (cdata.propertyName == "m_AnchoredPosition.x")
                        BeginArray("x");
                    else if (cdata.propertyName == "m_AnchoredPosition.y")
                        BeginArray("y");
                    else if (cdata.propertyName == "m_AnchoredPosition.z")
                        BeginArray("z");
                    else if (cdata.propertyName == "m_LocalScale.x")
                        BeginArray("scaleX");
                    else if (cdata.propertyName == "m_LocalScale.y")
                        BeginArray("scaleY");
                    else if (cdata.propertyName == "m_LocalScale.z")
                        BeginArray("scaleZ");
                    else if (cdata.propertyName == "m_IsActive")
                        BeginArray("active");
                    else if (cdata.propertyName == "localEulerAnglesRaw.x")
                        continue;
                    else if (cdata.propertyName == "localEulerAnglesRaw.y")
                        continue;
                    else if (cdata.propertyName == "localEulerAnglesRaw.z")
                        BeginArray("angle");
                    else if (cdata.propertyName == "m_SizeDelta.x")
                        BeginArray("width");
                    else if (cdata.propertyName == "m_SizeDelta.y")
                        BeginArray("height");
                    else if (cdata.propertyName == "m_Color.a")
                    {
                        inOpacity = true;
                        for (i = 0; i < keys.Length; i++)
                        {
                            Keyframe kf = keys[i];
                            for (j = 0; j < CCAniO.Count; j++)
                            {
                                if (CCAniO[j].frame == kf.time)
                                {
                                    tempO       = CCAniO[j];
                                    tempO.Value = kf.value;
                                    break;
                                }
                            }

                            if (j >= CCAniO.Count)
                            {
                                tempO       = new CocosAnimOpacityJson();
                                tempO.frame = kf.time;
                                tempO.Value = kf.value;
                                CCAniO.Add(tempO);
                            }
                        }

                        continue;
                    }
                    else if (cdata.propertyName.Contains("m_Color"))
                    {
                        inColor = true;
                        for (i = 0; i < keys.Length; i++)
                        {
                            Keyframe kf = keys[i];
                            for (j = 0; j < CCAniC.Count; j++)
                            {
                                if (CCAniC[j].frame == kf.time)
                                {
                                    tempC = CCAniC[j];
                                    if (cdata.propertyName == "m_Color.r")
                                        tempC.Value.r = kf.value;
                                    if (cdata.propertyName == "m_Color.g")
                                        tempC.Value.g = kf.value;
                                    if (cdata.propertyName == "m_Color.b")
                                        tempC.Value.b = kf.value;
                                    break;
                                }
                            }

                            if (j >= CCAniC.Count)
                            {
                                tempC       = new CocosAnimColorJson();
                                tempC.frame = kf.time;
                                if (cdata.propertyName == "m_Color.r")
                                    tempC.Value.r = Mathf.Floor(kf.value * 255);
                                if (cdata.propertyName == "m_Color.g")
                                    tempC.Value.g = Mathf.Floor(kf.value * 255);
                                if (cdata.propertyName == "m_Color.b")
                                    tempC.Value.b = Mathf.Floor(kf.value * 255);

                                CCAniC.Add(tempC);
                            }
                        }

                        continue;
                    }
                    else
                    {
                        //用來記錄待補的其他功能，如若缺少了對應的部分，這邊會顯示，之後再來補充
                        Debug.Log("other cdata.propertyName = " + cdata.propertyName + "(" + keys.Length + ") of " + clip.name);
                        continue;
                    }

                    for (i = 0; i < keys.Length; i++)
                    {
                        Keyframe kf = keys[i];
                        BeginObject();
//                        WriteFloat("frame", posArray[i].time);
                        WriteFloat("frame", kf.time);
                        Next();
//                        WriteFloat("value", posArray[i].value);
                        WriteFloat("value", kf.value);
                        EndObject();
                        if (i < keys.Length - 1)
                            Next();
                    }

                    EndArray();
                }
            }

            if (x < Len - 1)
                Next();
        }

        if (CCAniC.Count > 0)
        {
            Next();
            BeginArray("color");
            Len = CCAniC.Count;
            for (j = 0; j < Len; j++)
            {
                WriteObject(CCAniC[j].ToString());
                if (j < Len - 1)
                    Next();
            }

            EndArray();

            if (CCAniO.Count > 0)
            {
                Next();
            }
        }

        if (CCAniO.Count > 0)
        {
            BeginArray("opacity");
            Len = CCAniO.Count;
            for (j = 0; j < Len; j++)
            {
                WriteObject(CCAniO[j].ToString());
                if (j < Len - 1)
                    Next();
            }

            EndArray();
        }

        if (!firstLayer)
            EndObject();


        return topLayer;
    }

    public class CocosAnimOpacityJson
    {
        public float frame = 0;
        public float Value = 0;

        public override string ToString()
        {
            return "{\"frame\": " + frame + ",\"value\": " + Value + "}";
        }
    }

    public class CocosAnimColorJson
    {
        public float        frame = 0;
        public ccColorValue Value = new ccColorValue();

        public override string ToString()
        {
            return "{\"frame\": " + frame + ",\"value\": {\"__type__\": \"cc.Color\",\"r\": " + Value.r + ",\"g\": " + Value.g + ",\"b\": " + Value.b + ",\"a\": 255}}";
        }
    }

    public class ccColorValue
    {
        public float r = 0;
        public float g = 0;
        public float b = 0;
    }


    private static void list(JSONNode dict)
    {
        int Len = dict.Count;
        foreach (var child in dict)
        {
            if (child.Value.Count > 0)
            {
                Debug.Log("key:" + child.Key);
            }
            else
            {
                Debug.Log("key:" + child.Key + "\nValue:" + child.Value);
            }
        }
    }

    private static void BeginObject(string name = "")
    {
        if (name != "")
            sb.Append("\"" + name + "\": { ");
        else
            sb.Append("{ ");
    }

    private static void EndObject()
    {
        sb.Append(" }");
    }

    private static void BeginArray(string keyname)
    {
        sb.AppendFormat("\"{0}\" : [", keyname);
    }

    private static void EndArray()
    {
        sb.Append(" ]");
    }

    private static void WriteString(string key, string value)
    {
        sb.AppendFormat("\"{0}\" : \"{1}\"", key, value);
    }

    private static void WriteFloat(string key, float val)
    {
        sb.AppendFormat("\"{0}\" : {1}", key, val);
    }

    private static void WriteString(string value)
    {
        sb.AppendFormat("\"{0}\"", value);
    }

    private static void WriteObject(string value)
    {
        sb.AppendFormat("{0}", value);
    }

    private static void WriteFloat(float val)
    {
        sb.AppendFormat("{0}", val);
    }

    private static void Next()
    {
        sb.Append(", ");
    }
}