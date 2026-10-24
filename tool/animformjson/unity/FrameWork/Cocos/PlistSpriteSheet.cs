using System;
using UnityEngine;
using UnityEditor;
using example.invalid;
using System.Xml;
using System.Text;
using Application = UnityEngine.Application;
using Object = UnityEngine.Object;
using SimpleJSON;
using Json = MiniJSON.Json;

//從Unity中讀取分割資料 每一張大圖存成一個Plist檔，將產出的Plist檔放到Cocos專案中的圖片旁邊即可
public class PlistSpriteSheet
{
	private static float  progress = 0.0f;
	private static float  ScaleOfPos = 100f;//座標倍率，動畫運動的座標修正用
    private static string pathRoot;
    private static string clipfolder;

    [MenuItem("Cocos/Parse Sprite and Animation to Cocos Resource")]
    public static void ParsePlist()
	{
		Debug.Log("Position Scale is " + ScaleOfPos);
        //選取的圖片以及資料夾中所有圖片，可多選
        Object[] selectedAsset = Selection.GetFiltered(typeof(Object), SelectionMode.DeepAssets);
        pathRoot = Path.GetDirectoryName(Application.dataPath + "\\..\\..\\outputJsonAnim\\");

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
                CloneObj(obj);
                CreateXml(obj as Texture2D);
            }

            if (obj is AnimationClip)
            {
                ParseClip(obj as AnimationClip);
            }

            if (obj is AudioClip || obj is Font)
            {
                CloneObj(obj);
            }

            i++;
        }

        EditorUtility.ClearProgressBar();
		pathRoot = pathRoot.Replace ("/","\\");
        System.Diagnostics.Process.Start("explorer.exe", pathRoot);
    }

    private static XmlDocument xmldoc;

    public static void CreateXml(Texture2D assetObject)
    {
        string          objPath  = AssetDatabase.GetAssetPath(assetObject);
        TextureImporter ti       = AssetImporter.GetAtPath(objPath) as TextureImporter;
        string          filename = Path.GetFileName(objPath);

        if (ti.spriteImportMode == SpriteImportMode.Single || !ti.textureType.Equals(TextureImporterType.Sprite))
        {
            return;
        }

        string path   = Application.dataPath + "/../../outputJsonAnim/" + Path.ChangeExtension(objPath, "plist");
        var    folder = Path.GetDirectoryName(path);
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
    }

    public static void CloneObj(Object assetObject)
    {
        string objPath = AssetDatabase.GetAssetPath(assetObject);

        string path   = Application.dataPath + "/../../outputJsonAnim/" + objPath;
        var    folder = Path.GetDirectoryName(path);
        Directory.CreateDirectory(folder);
        if (File.Exists(path))
        {
            File.Delete(path);
        }

        FileUtil.CopyFileOrDirectory(objPath, path);
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
    private static void ParseClip(AnimationClip clip)
    {
        int i, j, x;
        clipfolder = Path.Combine(pathRoot, Path.GetDirectoryName(AssetDatabase.GetAssetPath(clip)));
        JSONNode cocosAnimFile = new SimpleJSON.JSONObject();

        cocosAnimFile["type"]      = "cc.AnimationClip";
        cocosAnimFile["_name"]     = clip.name;
        cocosAnimFile["_objFlags"] = 0;
        cocosAnimFile["_native"]   = "";
        cocosAnimFile["_duration"] = clip.length;
        cocosAnimFile["sample"]    = clip.frameRate;
        cocosAnimFile["speed"]     = 1;

        AnimationClipSettings tSettings = AnimationUtility.GetAnimationClipSettings(clip);
        int                   wm        = Array.IndexOf(wrapModeNum, clip.wrapMode.ToString());
        if (tSettings.loopTime)
        {
            wm = 2;
        }

        cocosAnimFile["wrapMode"] = wm;

        EditorCurveBinding[] cdataarrayA = AnimationUtility.GetObjectReferenceCurveBindings(clip);
        EditorCurveBinding[] cdataarrayB = AnimationUtility.GetCurveBindings(clip);
        int                  l           = cdataarrayA.Length;
        int                  TL          = l + cdataarrayB.Length;
		EditorCurveBinding[] cdataarray  = new EditorCurveBinding[TL];
        for (x = 0; x < l; x++)
        {
			cdataarray[x] = cdataarrayA[x];
        }

        for (i = 0, x = l; x < TL; i++, x++)
        {
            cdataarray[x] = cdataarrayB[i];
        }

        Array.Sort(cdataarray, Compare);

        for (x = 0; x < TL; x++)
        {
            EditorCurveBinding cdata = cdataarray[x];
            if (cdata.path == "")
            {
                if (cdata.propertyName == "m_Sprite")
                {
                    ObjectReferenceKeyframe[] Keyframes = AnimationUtility.GetObjectReferenceCurve(clip, cdata);
                    for (i = 0; i < Keyframes.Length; i++)
                    {
                        ObjectReferenceKeyframe kf = Keyframes[i];
                        JSONNode a  = new SimpleJSON.JSONObject();
                        a["frame"]              = kf.time;
						if (kf.value) {
							l = AssetDatabase.LoadAllAssetsAtPath (AssetDatabase.GetAssetPath (kf.value)).Length;
							a ["value"] ["_fakename"] = relativePath(AssetDatabase.GetAssetPath(clip),AssetDatabase.GetAssetPath(kf.value),kf.value.name,(l>2));
						} else {
							Debug.Log(clip.name+" There's a value is Null");
							a ["value"] = "null";//在這個時間點移除圖片
						}
                        cocosAnimFile["curveData"]["comps"]["cc.Sprite"]["spriteFrame"].Add(a);
                    }
                }

                AnimationCurve posArray = AnimationUtility.GetEditorCurve(clip, cdata);
                if (posArray != null)
                {
					Keyframe[] keys = posArray.keys;
					if (cdata.propertyName == "m_AnchoredPosition.x")
					{
						for (i = 0; i < keys.Length; i++)
						{
							Keyframe kf = keys[i];
							JSONNode a  = new SimpleJSON.JSONObject();
							a["frame"] = kf.time;
							a["value"] = kf.value;
							cocosAnimFile["curveData"]["props"]["x"].Add(a);
						}
					}
                    else if (cdata.propertyName == "m_AnchoredPosition.y")
                    {
                        for (i = 0; i < keys.Length; i++)
                        {
                            Keyframe kf = keys[i];
                            JSONNode a  = new SimpleJSON.JSONObject();
                            a["frame"] = kf.time;
                            a["value"] = kf.value;
                            cocosAnimFile["curveData"]["props"]["y"].Add(a);
                        }
					}
                    else if (cdata.propertyName == "m_AnchoredPosition.z")
                    {
                        for (i = 0; i < keys.Length; i++)
                        {
                            Keyframe kf = keys[i];
                            JSONNode a = new SimpleJSON.JSONObject();
                            a["frame"] = kf.time;
                            a["value"] = kf.value;
                            cocosAnimFile["curveData"]["props"]["z"].Add(a);
                        }
					}
					else if (cdata.propertyName == "m_LocalPosition.x")
					{
						for (i = 0; i < keys.Length; i++)
						{
							Keyframe kf = keys[i];
							JSONNode a  = new SimpleJSON.JSONObject();
							a["frame"] = kf.time;
							a["value"] = kf.value * ScaleOfPos;
							cocosAnimFile["curveData"]["props"]["x"].Add(a);
						}
					}
					else if (cdata.propertyName == "m_LocalPosition.y")
					{
						for (i = 0; i < keys.Length; i++)
						{
							Keyframe kf = keys[i];
							JSONNode a  = new SimpleJSON.JSONObject();
							a["frame"] = kf.time;
							a["value"] = kf.value * ScaleOfPos;
							cocosAnimFile["curveData"]["props"]["y"].Add(a);
						}
					}
					else if (cdata.propertyName == "m_LocalPosition.z")
					{
						for (i = 0; i < keys.Length; i++)
						{
							Keyframe kf = keys[i];
							JSONNode a = new SimpleJSON.JSONObject();
							a["frame"] = kf.time;
							a["value"] = kf.value * ScaleOfPos;;
							cocosAnimFile["curveData"]["props"]["z"].Add(a);
						}
					}
                    else if (cdata.propertyName == "m_LocalScale.x")
                    {
                        for (i = 0; i < keys.Length; i++)
                        {
                            Keyframe kf = keys[i];
                            JSONNode a = new SimpleJSON.JSONObject();
                            a["frame"] = kf.time;
                            a["value"] = kf.value;
                            cocosAnimFile["curveData"]["props"]["scaleX"].Add(a);
                        }
                    }
                    else if (cdata.propertyName == "m_LocalScale.y")
                    {
                        for (i = 0; i < keys.Length; i++)
                        {
                            Keyframe kf = keys[i];
                            JSONNode a = new SimpleJSON.JSONObject();
                            a["frame"] = kf.time;
                            a["value"] = kf.value;
                            cocosAnimFile["curveData"]["props"]["scaleY"].Add(a);
                        }
                    }
                    else if (cdata.propertyName == "m_LocalScale.z")
                    {
                        for (i = 0; i < keys.Length; i++)
                        {
                            Keyframe kf = keys[i];
                            JSONNode a = new SimpleJSON.JSONObject();
                            a["frame"] = kf.time;
                            a["value"] = kf.value;
                            cocosAnimFile["curveData"]["props"]["scaleZ"].Add(a);
                        }
                    }
                    else if (cdata.propertyName == "m_IsActive")
                    {
                        for (i = 0; i < keys.Length; i++)
                        {
                            Keyframe kf = keys[i];
                            JSONNode a = new SimpleJSON.JSONObject();
                            a["frame"] = kf.time;
                            a["value"] = kf.value;
                            cocosAnimFile["curveData"]["props"]["active"].Add(a);
                        }
                    }
                    else if (cdata.propertyName == "localEulerAnglesRaw.x")
                        continue;
                    else if (cdata.propertyName == "localEulerAnglesRaw.y")
                        continue;
                    else if (cdata.propertyName == "localEulerAnglesRaw.z")
                    {
                        for (i = 0; i < keys.Length; i++)
                        {
                            Keyframe kf = keys[i];
                            JSONNode a = new SimpleJSON.JSONObject();
                            a["frame"] = kf.time;
                            a["value"] = kf.value;
                            cocosAnimFile["curveData"]["props"]["angle"].Add(a);
                        }
                    }
                    else if (cdata.propertyName == "m_SizeDelta.x")
                    {
                        for (i = 0; i < keys.Length; i++)
                        {
                            Keyframe kf = keys[i];
                            JSONNode a = new SimpleJSON.JSONObject();
                            a["frame"] = kf.time;
                            a["value"] = kf.value;
                            cocosAnimFile["curveData"]["props"]["width"].Add(a);
                        }
                    }
                    else if (cdata.propertyName == "m_SizeDelta.y")
                    {
                        for (i = 0; i < keys.Length; i++)
                        {
                            Keyframe kf = keys[i];
                            JSONNode a = new SimpleJSON.JSONObject();
                            a["frame"] = kf.time;
                            a["value"] = kf.value;
                            cocosAnimFile["curveData"]["props"]["height"].Add(a);
                        }
                    }
                    else if (cdata.propertyName.Contains("m_Color"))
                    {
                        int Len = cocosAnimFile["curveData"]["props"]["color"].Count;
                        for (i = 0; i < keys.Length; i++)
                        {
                            Keyframe kf = keys[i];
                            for (j = 0; j < Len; j++)
                            {
                                if (cocosAnimFile["curveData"]["props"]["opacity"][i]["frame"]              != null &&
                                    float.Parse(cocosAnimFile["curveData"]["props"]["opacity"][i]["frame"]) == kf.time)
                                {
                                    if (cdata.propertyName == "m_Color.r")
                                        cocosAnimFile["curveData"]["props"]["color"][i]["r"] = kf.value * 255;
                                    if (cdata.propertyName == "m_Color.g")
                                        cocosAnimFile["curveData"]["props"]["color"][i]["g"] = kf.value * 255;
                                    if (cdata.propertyName == "m_Color.b")
                                        cocosAnimFile["curveData"]["props"]["color"][i]["b"] = kf.value * 255;
                                    if (cdata.propertyName == "m_Color.a")
                                        cocosAnimFile["curveData"]["props"]["color"][i]["a"] = kf.value * 255;
                                    break;
                                }
                            }

                            if (j < Len)
                                continue;

                            JSONNode a = new SimpleJSON.JSONObject();
                            a["frame"]             = kf.time;
                            a["value"]             = new SimpleJSON.JSONObject();
                            a["value"]["__type__"] = "cc.Color";
                            a["value"]["r"]        = 255;
                            a["value"]["g"]        = 255;
                            a["value"]["b"]        = 255;

                            if (cdata.propertyName == "m_Color.r")
                                a["value"]["r"] = kf.value * 255;
                            if (cdata.propertyName == "m_Color.g")
                                a["value"]["g"] = kf.value * 255;
                            if (cdata.propertyName == "m_Color.b")
                                a["value"]["b"] = kf.value * 255;

                            cocosAnimFile["curveData"]["props"]["color"].Add(a);
                        }


                        Len = cocosAnimFile["curveData"]["props"]["opacity"].Count;
                        for (i = 0; i < keys.Length; i++)
                        {
                            Keyframe kf = keys[i];
                            for (j = 0; j < Len; j++)
                            {
                                if (cocosAnimFile["curveData"]["props"]["opacity"][i]["frame"]              != null &&
                                    float.Parse(cocosAnimFile["curveData"]["props"]["opacity"][i]["frame"]) == kf.time)
                                {
                                    if (cdata.propertyName == "m_Color.a")
                                        cocosAnimFile["curveData"]["props"]["opacity"][i]["value"] = kf.value * 255;
                                    break;
                                }
                            }

                            if (j < Len)
                                continue;

                            JSONNode a = new SimpleJSON.JSONObject();
                            a["frame"] = kf.time;
                            a["value"] = 255;
                            if (cdata.propertyName == "m_Color.a")
                                a["value"] = kf.value * 255;

                            cocosAnimFile["curveData"]["props"]["color"].Add(a);
                        }

                        continue;
                    }
                    else
                    {
                        //用來記錄待補的其他功能，如若缺少了對應的部分，這邊會顯示，之後再來補充
						string needAdd;
						if (cdata.path == "") {
							needAdd = "other cdata.propertyName = " + cdata.propertyName + "(" + keys.Length + ") in " + clip.name;
						} else {
							needAdd = "other cdata.propertyName = " + cdata.propertyName + "(" + keys.Length + ") of " + cdata.path + " in "+ clip.name;
						}
						for (i = 0; i < keys.Length; i++) {
							needAdd +=  "\nkey["+i+"] time : "+keys[i].time;
							needAdd +=  ", value : "+keys[i].value;
						}
						Debug.Log(needAdd);
                        continue;
                    }
                }
            }
            else
            {
                if (cdata.propertyName == "m_Sprite")
                {
                    ObjectReferenceKeyframe[] Keyframes = AnimationUtility.GetObjectReferenceCurve(clip, cdata);
                    for (i = 0; i < Keyframes.Length; i++)
                    {
                        ObjectReferenceKeyframe kf = Keyframes[i];
                        JSONNode a  = new SimpleJSON.JSONObject();
                        a["frame"]              = kf.time;

						if (kf.value) {
							l = AssetDatabase.LoadAllAssetsAtPath (AssetDatabase.GetAssetPath (kf.value)).Length;
							a ["value"] ["_fakename"] = relativePath(AssetDatabase.GetAssetPath(clip),AssetDatabase.GetAssetPath(kf.value),kf.value.name,(l>2));
						} else {
							Debug.Log(clip.name+" There's a value is Null");
							a ["value"] = "null";//在這個時間點移除圖片
						}

                        cocosAnimFile["curveData"]["paths"][cdata.path]["comps"]["cc.Sprite"]["spriteFrame"].Add(a);
                    }
                }

                AnimationCurve posArray = AnimationUtility.GetEditorCurve(clip, cdata);
                if (posArray != null)
                {
                    Keyframe[] keys = posArray.keys;
					if (cdata.propertyName == "m_AnchoredPosition.x")
                    {
                        for (i = 0; i < keys.Length; i++)
                        {
                            Keyframe kf = keys[i];
                            JSONNode a = new SimpleJSON.JSONObject();
                            a["frame"] = kf.time;
                            a["value"] = kf.value;
                            cocosAnimFile["curveData"]["paths"][cdata.path]["props"]["x"].Add(a);
                        }
                    }
					else if (cdata.propertyName == "m_AnchoredPosition.y")
                    {
                        for (i = 0; i < keys.Length; i++)
                        {
                            Keyframe kf = keys[i];
                            JSONNode a = new SimpleJSON.JSONObject();
                            a["frame"] = kf.time;
                            a["value"] = kf.value;
                            cocosAnimFile["curveData"]["paths"][cdata.path]["props"]["y"].Add(a);
                        }
                    }
					else if (cdata.propertyName == "m_AnchoredPosition.z")
                    {
                        for (i = 0; i < keys.Length; i++)
                        {
                            Keyframe kf = keys[i];
                            JSONNode a = new SimpleJSON.JSONObject();
                            a["frame"] = kf.time;
                            a["value"] = kf.value;
                            cocosAnimFile["curveData"]["paths"][cdata.path]["props"]["z"].Add(a);
                        }
					}
					else if (cdata.propertyName == "m_LocalPosition.x")
					{
						for (i = 0; i < keys.Length; i++)
						{
							Keyframe kf = keys[i];
							JSONNode a = new SimpleJSON.JSONObject();
							a["frame"] = kf.time;
							a["value"] = kf.value * ScaleOfPos;
							cocosAnimFile["curveData"]["paths"][cdata.path]["props"]["x"].Add(a);
						}
					}
					else if (cdata.propertyName == "m_LocalPosition.y")
					{
						for (i = 0; i < keys.Length; i++)
						{
							Keyframe kf = keys[i];
							JSONNode a = new SimpleJSON.JSONObject();
							a["frame"] = kf.time;
							a["value"] = kf.value * ScaleOfPos;
							cocosAnimFile["curveData"]["paths"][cdata.path]["props"]["y"].Add(a);
						}
					}
					else if (cdata.propertyName == "m_LocalPosition.z")
					{
						for (i = 0; i < keys.Length; i++)
						{
							Keyframe kf = keys[i];
							JSONNode a = new SimpleJSON.JSONObject();
							a["frame"] = kf.time;
							a["value"] = kf.value * ScaleOfPos;
							cocosAnimFile["curveData"]["paths"][cdata.path]["props"]["z"].Add(a);
						}
					}
                    else if (cdata.propertyName == "m_LocalScale.x")
                    {
                        for (i = 0; i < keys.Length; i++)
                        {
                            Keyframe kf = keys[i];
                            JSONNode a = new SimpleJSON.JSONObject();
                            a["frame"] = kf.time;
                            a["value"] = kf.value;
                            cocosAnimFile["curveData"]["paths"][cdata.path]["props"]["scaleX"].Add(a);
                        }
                    }
                    else if (cdata.propertyName == "m_LocalScale.y")
                    {
                        for (i = 0; i < keys.Length; i++)
                        {
                            Keyframe kf = keys[i];
                            JSONNode a = new SimpleJSON.JSONObject();
                            a["frame"] = kf.time;
                            a["value"] = kf.value;
                            cocosAnimFile["curveData"]["paths"][cdata.path]["props"]["scaleY"].Add(a);
                        }
                    }
                    else if (cdata.propertyName == "m_LocalScale.z")
                    {
                        for (i = 0; i < keys.Length; i++)
                        {
                            Keyframe kf = keys[i];
                            JSONNode a = new SimpleJSON.JSONObject();
                            a["frame"] = kf.time;
                            a["value"] = kf.value;
                            cocosAnimFile["curveData"]["paths"][cdata.path]["props"]["scaleZ"].Add(a);
                        }
                    }
                    else if (cdata.propertyName == "m_IsActive")
                    {
                        for (i = 0; i < keys.Length; i++)
                        {
                            Keyframe kf = keys[i];
                            JSONNode a = new SimpleJSON.JSONObject();
                            a["frame"] = kf.time;
                            a["value"] = kf.value;
                            cocosAnimFile["curveData"]["paths"][cdata.path]["props"]["active"].Add(a);
                        }
                    }
                    else if (cdata.propertyName == "localEulerAnglesRaw.x")
                        continue;
                    else if (cdata.propertyName == "localEulerAnglesRaw.y")
                        continue;
                    else if (cdata.propertyName == "localEulerAnglesRaw.z")
                    {
                        for (i = 0; i < keys.Length; i++)
                        {
                            Keyframe kf = keys[i];
                            JSONNode a = new SimpleJSON.JSONObject();
                            a["frame"] = kf.time;
                            a["value"] = kf.value;
                            cocosAnimFile["curveData"]["paths"][cdata.path]["props"]["angle"].Add(a);
                        }
                    }
                    else if (cdata.propertyName == "m_SizeDelta.x")
                    {
                        for (i = 0; i < keys.Length; i++)
                        {
                            Keyframe kf = keys[i];
                            JSONNode a = new SimpleJSON.JSONObject();
                            a["frame"] = kf.time;
                            a["value"] = kf.value;
                            cocosAnimFile["curveData"]["paths"][cdata.path]["props"]["width"].Add(a);
                        }
                    }
                    else if (cdata.propertyName == "m_SizeDelta.y")
                    {
                        for (i = 0; i < keys.Length; i++)
                        {
                            Keyframe kf = keys[i];
                            JSONNode a = new SimpleJSON.JSONObject();
                            a["frame"] = kf.time;
                            a["value"] = kf.value;
                            cocosAnimFile["curveData"]["paths"][cdata.path]["props"]["height"].Add(a);
                        }
                    }
                    else if (cdata.propertyName.Contains("m_Color"))
                    {
                        if (cocosAnimFile["curveData"]["props"][cdata.path]["color"] == null)
                        {
                            for (i = 0; i < keys.Length; i++)
                            {
                                Keyframe kf = keys[i];
                                JSONNode a = new SimpleJSON.JSONObject();
                                a["frame"]             = kf.time;
                                a["value"]             = new SimpleJSON.JSONObject();
                                a["value"]["__type__"] = "cc.Color";
                                a["value"]["r"]        = 255;
                                a["value"]["g"]        = 255;
                                a["value"]["b"]        = 255;

                                if (cdata.propertyName == "m_Color.r")
                                    a["value"]["r"] = kf.value * 255;
                                if (cdata.propertyName == "m_Color.g")
                                    a["value"]["g"] = kf.value * 255;
                                if (cdata.propertyName == "m_Color.b")
                                    a["value"]["b"] = kf.value * 255;

                                cocosAnimFile["curveData"]["paths"][cdata.path]["props"]["color"].Add(a);
                            }
                        }
                        else
                        {
                            int Len = cocosAnimFile["curveData"]["paths"][cdata.path]["props"]["color"].Count;
                            for (i = 0; i < keys.Length; i++)
                            {
                                Keyframe kf = keys[i];
                                for (j = 0; j < Len; j++)
                                {
                                    if (cocosAnimFile["curveData"]["paths"][cdata.path]["props"]["opacity"][i]["frame"]              != null &&
                                        float.Parse(cocosAnimFile["curveData"]["paths"][cdata.path]["props"]["opacity"][i]["frame"]) == kf.time)
                                    {
                                        if (cdata.propertyName == "m_Color.r")
                                            cocosAnimFile["curveData"]["paths"][cdata.path]["props"]["color"][i]["r"] = kf.value * 255;
                                        if (cdata.propertyName == "m_Color.g")
                                            cocosAnimFile["curveData"]["paths"][cdata.path]["props"]["color"][i]["g"] = kf.value * 255;
                                        if (cdata.propertyName == "m_Color.b")
                                            cocosAnimFile["curveData"]["paths"][cdata.path]["props"]["color"][i]["b"] = kf.value * 255;
                                        if (cdata.propertyName == "m_Color.a")
                                            cocosAnimFile["curveData"]["paths"][cdata.path]["props"]["color"][i]["a"] = kf.value * 255;
                                        break;
                                    }
                                }

                                if (j < Len)
                                    continue;

                                JSONNode a = new SimpleJSON.JSONObject();
                                a["frame"]             = kf.time;
                                a["value"]             = new SimpleJSON.JSONObject();
                                a["value"]["__type__"] = "cc.Color";
                                a["value"]["r"]        = 255;
                                a["value"]["g"]        = 255;
                                a["value"]["b"]        = 255;

                                if (cdata.propertyName == "m_Color.r")
                                    a["value"]["r"] = kf.value * 255;
                                if (cdata.propertyName == "m_Color.g")
                                    a["value"]["g"] = kf.value * 255;
                                if (cdata.propertyName == "m_Color.b")
                                    a["value"]["b"] = kf.value * 255;
                                a["value"]["a"] = 255;

                                cocosAnimFile["curveData"]["paths"][cdata.path]["props"]["color"].Add(a);
                            }
                        }

                        if (cocosAnimFile["curveData"]["paths"][cdata.path]["props"]["opacity"] == null)
                        {
                            for (i = 0; i < keys.Length; i++)
                            {
                                Keyframe kf = keys[i];
                                JSONNode a = new SimpleJSON.JSONObject();
                                a["frame"] = kf.time;
                                a["value"] = 255;
                                if (cdata.propertyName == "m_Color.a")
                                    a["value"] = kf.value * 255;
                                cocosAnimFile["curveData"]["paths"][cdata.path]["props"]["opacity"].Add(a);
                            }
                        }
                        else
                        {
                            int Len = cocosAnimFile["curveData"]["paths"][cdata.path]["props"]["opacity"].Count;
                            for (i = 0; i < keys.Length; i++)
                            {
                                Keyframe kf = keys[i];
                                for (j = 0; j < Len; j++)
                                {
                                    if (cocosAnimFile["curveData"]["paths"][cdata.path]["props"]["opacity"][i]["frame"]              != null &&
                                        float.Parse(cocosAnimFile["curveData"]["paths"][cdata.path]["props"]["opacity"][i]["frame"]) == kf.time)
                                    {
                                        if (cdata.propertyName == "m_Color.a")
                                            cocosAnimFile["curveData"]["paths"][cdata.path]["props"]["opacity"][i]["value"] = kf.value * 255;
                                        break;
                                    }
                                }

                                if (j < Len)
                                    continue;

                                JSONNode a = new SimpleJSON.JSONObject();
                                a["frame"] = kf.time;
                                a["value"] = 255;
                                if (cdata.propertyName == "m_Color.a")
                                    a["value"] = kf.value * 255;

                                cocosAnimFile["curveData"]["paths"][cdata.path]["props"]["color"].Add(a);
                            }
                        }

                        continue;
                    }
                    else
                    {
                        //用來記錄待補的其他功能，如若缺少了對應的部分，這邊會顯示，之後再來補充
						string needAdd;
						if (cdata.path == "") {
							needAdd = "other cdata.propertyName = " + cdata.propertyName + "(" + keys.Length + ") in " + clip.name;
						} else {
							needAdd = "other cdata.propertyName = " + cdata.propertyName + "(" + keys.Length + ") of " + cdata.path + " in "+ clip.name;
						}
						for (i = 0; i < keys.Length; i++) {
							needAdd +=  "\nkey["+i+"] time : "+keys[i].time;
							needAdd +=  ", value : "+keys[i].value;
						}
						Debug.Log(needAdd);
                        continue;
                    }
                }
            }
        }

        Directory.CreateDirectory(clipfolder);
        string filename = clipfolder + "/" + clip.name + jsonFileExt;

        WriteJsonFile(cocosAnimFile.ToString(), filename);
    }

    public static string JsonTree(string json)
    {
        int    level    = 0;
        char[] jsonArr  = json.ToCharArray();
        string jsonTree = string.Empty;
        for (int i = 0; i < json.Length; i++)
        {
            char c = jsonArr[i];
            if (level > 0 && '\n' == jsonTree.ToCharArray()[jsonTree.Length - 1])
            {
                jsonTree += TreeLevel(level);
            }

            switch (c)
            {
                case '{':
                    jsonTree += c + "\n";
                    level++;
                    break;
                case ',':
                    jsonTree += c + "\n";
                    break;
                case '}':
                    jsonTree += "\n";
                    level--;
                    jsonTree += TreeLevel(level);
                    jsonTree += c;
                    break;
                default:
                    jsonTree += c;
                    break;
            }
        }

        return jsonTree;
    }

    private static string TreeLevel(int level)
    {
        string leaf = string.Empty;
        for (int t = 0; t < level; t++)
        {
            leaf += "\t";
        }

        return leaf;
    }

    // relativePath(載體路徑,圖片相對路徑)
    // 回傳：與載體的相對路徑
    // 用途：可以在cocos中使用animformjson中
    // 使用relativePath(載體路徑,圖片相對路徑)取回db路徑
	static string relativePath(string inA, string inB, string name, bool plist=false)
    {
        int i, j, k, l;
        l = inA.Length * 1;
        k = inB.Length * 1;
        for (i = 0, j = 0; i < l && i < k; i++)
        {
            if (inA[i] != inB[i])
            {
                j = i;
                break;
            }
        }

        string[] arr   = inA.Substring(j, l - j).Split('/');
        string   pathA = inB.Substring(j, k - j);
        l = arr.Length;
        string tmp = "";
        for (i = 0; i < l - 1; i++)
            tmp = "../" + tmp;

        pathA.Replace(".png.png",".png");
		pathA.Replace(".jpg.jpg",".jpg");
		if (plist) {
			pathA = pathA.Replace(".png",".plist");
			pathA = pathA.Replace(".jpg",".plist");
		}
		string o=tmp + pathA + "/" + name;
		return o;
    }

    static void WriteJsonFile(string content, string filename)
    {
        FileStream f;
        if (File.Exists(filename))
        {
            f = new FileStream(filename, FileMode.Truncate, FileAccess.Write);
        }
        else
        {
            f = new FileStream(filename, FileMode.Create, FileAccess.Write);
        }

        StreamWriter sw = new StreamWriter(f);
        sw.Write("");
        sw.Close();
        f.Close();
        f  = new FileStream(filename, FileMode.Truncate, FileAccess.Write);
        sw = new StreamWriter(f);
        string FormatJSON = "null";
        try
		{
			FormatJSON = Json.Serialize(Json.Deserialize(content));
			FormatJSON = JsonTree(Json.Serialize(Json.Deserialize(content)));
        }
        catch (Exception e)
        {
            sw.Write(content);
            sw.Close();
            f.Close();
            Console.WriteLine(e);
            throw;
        }

        sw.Write(FormatJSON);
//        sw.Write(content);
        sw.Close();
        f.Close();
    }
}