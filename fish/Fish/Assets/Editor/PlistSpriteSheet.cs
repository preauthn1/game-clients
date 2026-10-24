using System;
using UnityEngine;
using UnityEditor;
using example.invalid;
using System.Xml;
using System.Text;
using System.Collections.Generic;
using Application = UnityEngine.Application;
using Object = UnityEngine.Object;
using SimpleJSON_CC;
using Json = MiniJSON.Json;

//從Unity中讀取分割資料 每一張大圖存成一個Plist檔，將產出的Plist檔放到Cocos專案中的圖片旁邊即可
public class PlistSpriteSheet
{
	private static float progress = 0.0f;
	//座標倍率，動畫運動的座標修正用
	private static float ScaleOfPos = 100f;
	//縮放倍率，動畫修正用
	private static float ScaleOfScale = 100f;
	private static string pathRoot;
	private static string clipfolder;
	private static string outputMainPath = Application.dataPath +"/../../outputJsonAnim/";

	[MenuItem ("Cocos/Parse Sprite and Animation to Cocos Resource")]
	public static void ParsePlist ()
	{
		//選取的圖片以及資料夾中所有圖片，可多選
		Object[] selectedAsset = Selection.GetFiltered (typeof(Object), SelectionMode.DeepAssets);
		outputMainPath = outputMainPath.Replace("\\","/");
		pathRoot = outputMainPath.Replace("/","\\");

		if (selectedAsset.Length < 1) {
			EditorUtility.DisplayDialog ("Sprite/Parse Plist",
				"Select a 'Sprite' 'AnimationClip' or 'folder'to Parse", "Back");
			return;
		}

		int i = 0;
		foreach (Object obj in selectedAsset) {
			
			progress = i++ / ((float)selectedAsset.Length);
			EditorUtility.DisplayProgressBar ("cocos resource converter", obj.name, progress);

			if (obj is Texture2D) {
				CloneObj (obj);
				CreateXml (obj as Texture2D);
			}

			if (obj is AnimationClip) {
				ParseClip (obj as AnimationClip);
			}

			if (obj is AudioClip || obj is Font) {
				CloneObj(obj);
			}
		}

		EditorUtility.ClearProgressBar ();
		pathRoot = pathRoot.Replace ("/", "\\");
		System.Diagnostics.Process.Start ("explorer.exe", pathRoot);
	}

	private static XmlDocument xmldoc;

	public static void CreateXml (Texture2D assetObject)
	{
		string objPath = AssetDatabase.GetAssetPath (assetObject);
		TextureImporter ti = AssetImporter.GetAtPath (objPath) as TextureImporter;
		string filename = Path.GetFileName (objPath);

		if (ti.spriteImportMode == SpriteImportMode.Single || !ti.textureType.Equals (TextureImporterType.Sprite)) {
			return;
		}

		string path = outputMainPath + Path.ChangeExtension (objPath, "plist");
		var folder = Path.GetDirectoryName (path);
		Directory.CreateDirectory (folder);
		if (File.Exists (path)) {
			File.Delete (path);
		}

		//创建最上一层的节点。
		xmldoc = new XmlDocument ();
		xmldoc.AppendChild (xmldoc.CreateXmlDeclaration ("1.0", "UTF-8", null));
		xmldoc.AppendChild (xmldoc.CreateDocumentType ("plist", "-//Apple Computer//DTD PLIST 1.0//EN",
			"http://example.invalid/DTDs/PropertyList-1.0.dtd", null));

		//创建最上一层的节点。
		XmlElement root = xmldoc.CreateElement ("plist");
		root.SetAttribute ("version", "1.0");
		xmldoc.AppendChild (root);

		XmlElement elementChild1, elementChild2, elementChild3, elementChild4;
		XmlElement element = newXmlElement (root, "dict");

		newXmlElement (element, "key", "frames");
		elementChild1 = newXmlElement (element, "dict");
		string ttsize =
			"{" + String.Format ("{0},{1}", Mathf.Round (assetObject.width), Mathf.Round (assetObject.height)) + "}";

		//切出來的一個小Sprite
		for (int i = 0; i < ti.spritesheet.Length; i++) {
			SpriteMetaData oSm = ti.spritesheet [i];
			//cocos的Y軸起始方向與Unity相反，重新換算
			string pos = "{" + String.Format ("{0},{1}",
				             Mathf.Round (oSm.rect.x),
				             Mathf.Round (assetObject.height - oSm.rect.y - oSm.rect.height)) + "}";
			string size = "{" + String.Format ("{0},{1}",
				              Mathf.Round (oSm.rect.width),
				              Mathf.Round (oSm.rect.height)) + "}";
			string rect = "{" + String.Format ("{0},{1}", pos, size) + "}";

			newXmlElement (elementChild1, "key", oSm.name);
			elementChild2 = newXmlElement (elementChild1, "dict");
			newXmlElement (elementChild2, "key", "aliases");
			newXmlElement (elementChild2, "array");
			newXmlElement (elementChild2, "key", "spriteOffset");
			newXmlElement (elementChild2, "string", "{0,0}");
			newXmlElement (elementChild2, "key", "spriteSize");
			newXmlElement (elementChild2, "string", size); //spriteSize
			newXmlElement (elementChild2, "key", "spriteSourceSize");
			newXmlElement (elementChild2, "string", size); //spriteSourceSize
			newXmlElement (elementChild2, "key", "textureRect");
			newXmlElement (elementChild2, "string", rect); //textureRect
			newXmlElement (elementChild2, "key", "textureRotated");
			newXmlElement (elementChild2, "false");
		}
		//小圖完畢

		newXmlElement (element, "key", "metadata");
		elementChild1 = newXmlElement (element, "dict");
		newXmlElement (elementChild1, "key", "format");
		newXmlElement (elementChild1, "integer", "3");
		newXmlElement (elementChild1, "key", "pixelFormat");
		newXmlElement (elementChild1, "string", "RGBA8888");
		newXmlElement (elementChild1, "key", "premultiplyAlpha");
		newXmlElement (elementChild1, "false");
		newXmlElement (elementChild1, "key", "realTextureFileName");
		newXmlElement (elementChild1, "string", filename);
		newXmlElement (elementChild1, "key", "size");
		newXmlElement (elementChild1, "string", ttsize);
		newXmlElement (elementChild1, "key", "smartupdate");
		newXmlElement (elementChild1, "string",
			"$TexturePacker:SmartUpdate:3b1eac0e6c1fcffc3f0fd7fd492e8089:0280c04a5811590e33a1e26cc759b0c4:b1d7634429216a4fd5138097b0cb227e$");
		newXmlElement (elementChild1, "key", "textureFileName");
		newXmlElement (elementChild1, "string", filename);

		//最后保存文件
		xmldoc.Save (path);
	}

	public static void CloneObj (Object assetObject)
	{
		string objPath = AssetDatabase.GetAssetPath (assetObject);

		string path = outputMainPath + objPath;
		var folder = Path.GetDirectoryName (path);
		Directory.CreateDirectory (folder);
		if (File.Exists (path)) {
			File.Delete (path);
		}

		FileUtil.CopyFileOrDirectory (objPath, path);
	}

	public static XmlElement newXmlElement (XmlElement Parente, string name, string InnerText = null)
	{
		XmlElement elementChild = xmldoc.CreateElement (name);
		if (InnerText != null) {
			elementChild.InnerText = InnerText;
		}

		Parente.AppendChild (elementChild);
		return elementChild;
	}


	private static StringBuilder sb;

	private static string jsonFileExt = ".json";

	private static string[] wrapModeNum = {
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
	private static int Compare (EditorCurveBinding cv1, EditorCurveBinding cv2)
	{
		if (cv1.path == cv2.path) {
			if (cv1.type.Name == cv2.type.Name) {
				if (cv1.propertyName == cv2.propertyName) {
					return 0;
				}
				return String.Compare (cv1.propertyName, cv2.propertyName, StringComparison.Ordinal);
			}

			if (cv1.type.Name == "Image")
				return String.Compare ("1", "0", StringComparison.Ordinal);
			return String.Compare ("0", "1", StringComparison.Ordinal);
		}
		return String.Compare (cv1.path, cv2.path, StringComparison.Ordinal);
	}

	static string combinePath(string iPath,string rPath){
		List<string> psArr = new List<string> (iPath.Split('/'));
		List<string> ntArr = new List<string> (rPath.Split('/'));
		ntArr.RemoveAt(0);
		while (ntArr[0] == "..") {
			psArr.RemoveAt(psArr.Count - 1);
			ntArr.RemoveAt(0);
		}
		psArr.AddRange(ntArr);
		return String.Join("/",psArr.ToArray());
	}

	//這邊輸入Clip 直接存成JSON檔，格式參照Cocos，但因為需要Cocos的UUID，暫時記著相對路徑，之後到Cocos再來轉一次就好
	public static void ParseClip (AnimationClip clip)
	{
		int i, j, l, x;

		clipfolder = Path.Combine (pathRoot, Path.GetDirectoryName (AssetDatabase.GetAssetPath (clip)));
		SimpleJSON_CC.JSONNode cocosAnimFile = new SimpleJSON_CC.JSONObject ();

		cocosAnimFile ["type"] = "cc.AnimationClip";
		cocosAnimFile ["_name"] = clip.name;
		cocosAnimFile ["_objFlags"] = 0;
		cocosAnimFile ["_native"] = "";
		cocosAnimFile ["_duration"] = clip.length;
		cocosAnimFile ["sample"] = clip.frameRate;
		cocosAnimFile ["speed"] = 1;
		cocosAnimFile ["wrapMode"] = AnimationUtility.GetAnimationClipSettings(clip).loopTime ? 2 : Array.IndexOf (wrapModeNum, clip.wrapMode.ToString());

		List<EditorCurveBinding> cda = new List<EditorCurveBinding> (AnimationUtility.GetObjectReferenceCurveBindings(clip));
		List<EditorCurveBinding> cdb = new List<EditorCurveBinding> (AnimationUtility.GetCurveBindings(clip));
		cda.AddRange (cdb);
		EditorCurveBinding[] cdataarray = cda.ToArray ();
		int TL = cdataarray.Length;

		Array.Sort (cdataarray, Compare);

		for (x = 0; x < TL; x++) {
			EditorCurveBinding cdata = cdataarray [x];
			SimpleJSON_CC.JSONNode TargetNode;
			if (cdata.path == "") {
				if (cocosAnimFile ["curveData"] == null)
					cocosAnimFile ["curveData"] = new SimpleJSON_CC.JSONObject ();
				TargetNode = cocosAnimFile ["curveData"];
			} else {
				if (cocosAnimFile ["curveData"] ["paths"] [cdata.path] == null)
					cocosAnimFile ["curveData"] ["paths"] [cdata.path] = new SimpleJSON_CC.JSONObject ();
				TargetNode = cocosAnimFile ["curveData"] ["paths"] [cdata.path];
			}

			if (cdata.propertyName == "m_Sprite") {
				ObjectReferenceKeyframe[] Keyframes = AnimationUtility.GetObjectReferenceCurve (clip, cdata);
				for (i = 0; i < Keyframes.Length; i++) {
					ObjectReferenceKeyframe kf = Keyframes [i];
					SimpleJSON_CC.JSONNode a = new SimpleJSON_CC.JSONObject ();
					a ["frame"] = kf.time;
					if (kf.value) {
						//這邊用來判斷圖片中包含了多少資料，通常一張大圖不切，其中會有自己的檔名(含png那個)然後是只有名字那個，因此長度為2
						//而這邊取得的資料長度若大於2，則代表這張圖片中包含了分割資料，裡面會有切圖的行為
						//在cocos中，切圖以plist檔案來處理，因此路徑會有所差異，特別為它加上判斷
						l = AssetDatabase.LoadAllAssetsAtPath (AssetDatabase.GetAssetPath (kf.value)).Length;
						//下面這邊就是將相對路徑塞到_fakename中，在cocos中我們自訂的導入工具將會先讀取這邊，然後刪除_fakename，並將取得的UUID塞到同階層的["__UUID__"]中
						a ["value"] ["_fakename"] = relativePath (AssetDatabase.GetAssetPath (clip), AssetDatabase.GetAssetPath (kf.value), kf.value.name, (l > 2));
					} else {
						Debug.Log ("動畫檔 " + AssetDatabase.GetAssetPath (clip) + " 之中有影格關鍵偵上圖片為空值");
						a ["value"] = "null";//在這個時間點移除圖片
					}
					TargetNode ["comps"] ["cc.Sprite"] ["spriteFrame"].Add (a);
				}
			}

			AnimationCurve posArray = AnimationUtility.GetEditorCurve (clip, cdata);
			if (posArray != null) {
				Keyframe[] keys = posArray.keys;
				if (cdata.propertyName == "m_AnchoredPosition.x") {
					for (i = 0; i < keys.Length; i++) {
						Keyframe kf = keys [i];
						SimpleJSON_CC.JSONNode a = new SimpleJSON_CC.JSONObject ();
						a ["frame"] = kf.time;
						a ["value"] = kf.value;
						TargetNode ["props"] ["x"].Add (a);
					}
				} else if (cdata.propertyName == "m_AnchoredPosition.y") {
					for (i = 0; i < keys.Length; i++) {
						Keyframe kf = keys [i];
						SimpleJSON_CC.JSONNode a = new SimpleJSON_CC.JSONObject ();
						a ["frame"] = kf.time;
						a ["value"] = kf.value;
						TargetNode ["props"] ["y"].Add (a);
					}
				} else if (cdata.propertyName == "m_AnchoredPosition.z") {
					for (i = 0; i < keys.Length; i++) {
						Keyframe kf = keys [i];
						SimpleJSON_CC.JSONNode a = new SimpleJSON_CC.JSONObject ();
						a ["frame"] = kf.time;
						a ["value"] = kf.value;
						TargetNode ["props"] ["y"].Add (a);
					}
				} else if (cdata.propertyName == "m_LocalPosition.x") {
					for (i = 0; i < keys.Length; i++) {
						Keyframe kf = keys [i];
						SimpleJSON_CC.JSONNode a = new SimpleJSON_CC.JSONObject ();
						a ["frame"] = kf.time;
						a ["value"] = kf.value * ScaleOfPos;
						TargetNode ["props"] ["x"].Add (a);
					}
				} else if (cdata.propertyName == "m_LocalPosition.y") {
					for (i = 0; i < keys.Length; i++) {
						Keyframe kf = keys [i];
						SimpleJSON_CC.JSONNode a = new SimpleJSON_CC.JSONObject ();
						a ["frame"] = kf.time;
						a ["value"] = kf.value * ScaleOfPos;
						TargetNode ["props"] ["y"].Add (a);
					}
				} else if (cdata.propertyName == "m_LocalPosition.z") {
					for (i = 0; i < keys.Length; i++) {
						Keyframe kf = keys [i];
						SimpleJSON_CC.JSONNode a = new SimpleJSON_CC.JSONObject ();
						a ["frame"] = kf.time;
						a ["value"] = kf.value * ScaleOfPos;
						TargetNode ["props"] ["z"].Add (a);
					}
				} else if (cdata.propertyName == "m_LocalScale.x") {
					for (i = 0; i < keys.Length; i++) {
						Keyframe kf = keys [i];
						SimpleJSON_CC.JSONNode a = new SimpleJSON_CC.JSONObject ();
						a ["frame"] = kf.time;
						a ["value"] = kf.value * ScaleOfScale;
						TargetNode ["props"] ["scaleX"].Add (a);
					}
				} else if (cdata.propertyName == "m_LocalScale.y") {
					for (i = 0; i < keys.Length; i++) {
						Keyframe kf = keys [i];
						SimpleJSON_CC.JSONNode a = new SimpleJSON_CC.JSONObject ();
						a ["frame"] = kf.time;
						a ["value"] = kf.value * ScaleOfScale;
						TargetNode ["props"] ["scaleY"].Add (a);
					}
				} else if (cdata.propertyName == "m_LocalScale.z") {
					for (i = 0; i < keys.Length; i++) {
						Keyframe kf = keys [i];
						SimpleJSON_CC.JSONNode a = new SimpleJSON_CC.JSONObject ();
						a ["frame"] = kf.time;
						a ["value"] = kf.value * ScaleOfScale;
						TargetNode ["props"] ["scaleZ"].Add (a);
					}
				} else if (cdata.propertyName == "m_IsActive") {
					for (i = 0; i < keys.Length; i++) {
						Keyframe kf = keys [i];
						SimpleJSON_CC.JSONNode a = new SimpleJSON_CC.JSONObject ();
						a ["frame"] = kf.time;
						a ["value"] = (bool)(kf.value == 1);
						a ["curve"] = "constant";
						TargetNode ["props"] ["active"].Add (a);
					}
				} else if (cdata.propertyName == "localEulerAnglesRaw.x")
					continue;
				else if (cdata.propertyName == "localEulerAnglesRaw.y")
					continue;
				else if (cdata.propertyName == "localEulerAnglesRaw.z") {
					for (i = 0; i < keys.Length; i++) {
						Keyframe kf = keys [i];
						SimpleJSON_CC.JSONNode a = new SimpleJSON_CC.JSONObject ();
						a ["frame"] = kf.time;
						a ["value"] = kf.value;
						TargetNode ["props"] ["angle"].Add (a);
					}
				} else if (cdata.propertyName == "m_SizeDelta.x") {
					for (i = 0; i < keys.Length; i++) {
						Keyframe kf = keys [i];
						SimpleJSON_CC.JSONNode a = new SimpleJSON_CC.JSONObject ();
						a ["frame"] = kf.time;
						a ["value"] = kf.value;
						TargetNode ["props"] ["width"].Add (a);
					}
				} else if (cdata.propertyName == "m_SizeDelta.y") {
					for (i = 0; i < keys.Length; i++) {
						Keyframe kf = keys [i];
						SimpleJSON_CC.JSONNode a = new SimpleJSON_CC.JSONObject ();
						a ["frame"] = kf.time;
						a ["value"] = kf.value;
						TargetNode ["props"] ["height"].Add (a);
					}
				} else if (cdata.propertyName.Contains ("m_Color")) {

					if (TargetNode ["props"] ["color"] == null) {
						for (i = 0; i < keys.Length; i++) {
							Keyframe kf = keys [i];
							SimpleJSON_CC.JSONNode a = new SimpleJSON_CC.JSONObject ();
							a ["frame"] = kf.time;
							a ["value"] = new SimpleJSON_CC.JSONObject ();
							a ["value"] ["__type__"] = "cc.Color";
							a ["value"] ["r"] = 255;
							a ["value"] ["g"] = 255;
							a ["value"] ["b"] = 255;
							a ["value"] ["a"] = 255;

							if (cdata.propertyName == "m_Color.r")
								a ["value"] ["r"] = kf.value * 255;
							if (cdata.propertyName == "m_Color.g")
								a ["value"] ["g"] = kf.value * 255;
							if (cdata.propertyName == "m_Color.b")
								a ["value"] ["b"] = kf.value * 255;

							TargetNode ["props"] ["color"].Add (a);
						}
					} else {
						int Len = TargetNode ["props"] ["color"].Count;
						for (i = 0; i < keys.Length; i++) {
							Keyframe kf = keys [i];
							for (j = 0; j < Len; j++) {
								if (TargetNode ["props"] ["color"] [i] ["frame"] != null && float.Parse (TargetNode ["props"] ["color"] [i] ["frame"]) == kf.time) {
									if (cdata.propertyName == "m_Color.r")
										TargetNode ["props"] ["color"] [i] ["r"] = kf.value * 255;
									if (cdata.propertyName == "m_Color.g")
										TargetNode ["props"] ["color"] [i] ["g"] = kf.value * 255;
									if (cdata.propertyName == "m_Color.b")
										TargetNode ["props"] ["color"] [i] ["b"] = kf.value * 255;
									if (cdata.propertyName == "m_Color.a")
										TargetNode ["props"] ["color"] [i] ["a"] = kf.value * 255;
									break;
								}
							}

							if (j < Len)
								continue;

							SimpleJSON_CC.JSONNode a = new SimpleJSON_CC.JSONObject ();
							a ["frame"] = kf.time;
							a ["value"] = new SimpleJSON_CC.JSONObject ();
							a ["value"] ["__type__"] = "cc.Color";
							a ["value"] ["r"] = 255;
							a ["value"] ["g"] = 255;
							a ["value"] ["b"] = 255;
							a ["value"] ["a"] = 255;

							if (cdata.propertyName == "m_Color.r")
								a ["value"] ["r"] = kf.value * 255;
							if (cdata.propertyName == "m_Color.g")
								a ["value"] ["g"] = kf.value * 255;
							if (cdata.propertyName == "m_Color.b")
								a ["value"] ["b"] = kf.value * 255;
							a ["value"] ["a"] = 255;

							TargetNode ["props"] ["color"].Add (a);
						}
					}

					if (TargetNode ["props"] ["opacity"] == null) {
						for (i = 0; i < keys.Length; i++) {
							Keyframe kf = keys [i];
							SimpleJSON_CC.JSONNode a = new SimpleJSON_CC.JSONObject ();
							a ["frame"] = kf.time;
							a ["value"] = 255;
							if (cdata.propertyName == "m_Color.a")
								a ["value"] = kf.value * 255;
							TargetNode ["props"] ["opacity"].Add (a);
						}
					} else {
						int Len = TargetNode ["props"] ["opacity"].Count;
						for (i = 0; i < keys.Length; i++) {
							Keyframe kf = keys [i];
							for (j = 0; j < Len; j++) {
								if (TargetNode ["props"] ["opacity"] [i] ["frame"] != null && float.Parse (TargetNode ["props"] ["opacity"] [i] ["frame"]) == kf.time) {
									if (cdata.propertyName == "m_Color.a")
										TargetNode ["props"] ["opacity"] [i] ["value"] = kf.value * 255;
									break;
								}
							}

							if (j < Len)
								continue;

							SimpleJSON_CC.JSONNode a = new SimpleJSON_CC.JSONObject ();
							a ["frame"] = kf.time;
							a ["value"] = 255;
							if (cdata.propertyName == "m_Color.a")
								a ["value"] = kf.value * 255;

							TargetNode ["props"] ["opacity"].Add (a);
						}
					}
					continue;
				} else if (cdata.propertyName == "m_Enabled") {
					for (i = 0; i < keys.Length; i++) {
						Keyframe kf = keys [i];
						SimpleJSON_CC.JSONNode a = new SimpleJSON_CC.JSONObject ();
						a ["frame"] = kf.time;
						a ["value"] = (bool)(kf.value == 1);
						a ["curve"] = "constant";
						TargetNode ["props"] ["active"].Add (a);
					}
				} else if (cdata.propertyName == "m_UVRect.x") {
					Debug.Log (clip.name+" 包含UV功能(x)，該動畫無法正確的轉換");
					for (i = 0; i < keys.Length; i++) {
						Keyframe kf = keys [i];
						SimpleJSON_CC.JSONNode a = new SimpleJSON_CC.JSONObject ();
						a ["frame"] = kf.time;
						a ["value"] = kf.value;
						TargetNode ["props"] ["UVX"].Add (a);
					}
				} else if (cdata.propertyName == "m_UVRect.y") {
					Debug.Log (clip.name+" 包含UV功能(y)，該動畫無法正確的轉換");
					for (i = 0; i < keys.Length; i++) {
						Keyframe kf = keys [i];
						SimpleJSON_CC.JSONNode a = new SimpleJSON_CC.JSONObject ();
						a ["frame"] = kf.time;
						a ["value"] = kf.value;
						TargetNode ["props"] ["UVY"].Add (a);
					}
				} else {
					//用來記錄待補的其他功能，如若缺少了對應的部分，這邊會在Console中顯示，之後再來補充
					string needAdd;
					if (cdata.path == "") {
						needAdd = "other cdata.propertyName = " + cdata.propertyName + "(" + keys.Length + ") in " + clip.name;
					} else {
						needAdd = "other cdata.propertyName = " + cdata.propertyName + "(" + keys.Length + ") of " + cdata.path + " in " + clip.name;
					}
					for (i = 0; i < keys.Length; i++) {
						needAdd += "\nkey[" + i + "] time : " + keys [i].time;
						needAdd += ", value : " + keys [i].value;
					}
					Debug.Log (needAdd);
					continue;
				}
			}
		}

		AnimationEvent[] eves = AnimationUtility.GetAnimationEvents (clip);
		l = eves.Length;
		if(l > 0) {
			Debug.Log ("動畫檔 "+AssetDatabase.GetAssetPath (clip)+" 中發現 "+l+" 個 Event");
			cocosAnimFile ["events"] = new SimpleJSON_CC.JSONArray ();
		}
		for (i = 0; i < l; i++) {
			AnimationEvent kf = eves [i];
			SimpleJSON_CC.JSONNode a = new SimpleJSON_CC.JSONObject ();
			a ["frame"] = kf.time;
			a ["func"] = kf.functionName;
			a ["params"] = new SimpleJSON_CC.JSONArray ();
			a ["params"].Add (kf.intParameter);
			a ["params"].Add (kf.floatParameter);
			a ["params"].Add (kf.stringParameter);
			cocosAnimFile["events"].Add (a);
		}


		Directory.CreateDirectory (clipfolder);
		string filename = clipfolder + "/" + clip.name + jsonFileExt;

		WriteJsonFile (cocosAnimFile.ToString (), filename);
	}

	//將Json文字進行格式化整理
	//json文字資料
	public static string JsonTree (string json)
	{
		int level = 0;
		char[] jsonArr = json.ToCharArray ();
		string jsonTree = string.Empty;
		for (int i = 0; i < json.Length; i++) {
			char c = jsonArr [i];
			if (level > 0 && '\n' == jsonTree.ToCharArray () [jsonTree.Length - 1]) {
				jsonTree += TreeLevel (level);
			}

			switch (c) {
				case '{':
				case '[':
					jsonTree += c + "\n";
					level++;
					break;
				case ',':
					jsonTree += c + "\n";
					break;
				case '}':
				case ']':
					jsonTree += "\n";
					level--;
					jsonTree += TreeLevel (level);
					jsonTree += c;
					break;
				default:
					jsonTree += c;
					break;
			}
		}

		return jsonTree;
	}

	//JsonTree依賴
	private static string TreeLevel (int level)
	{
		string leaf = string.Empty;
		for (int t = 0; t < level; t++) {
			leaf += "\t";
		}

		return leaf;
	}

	// relativePath(載體路徑,圖片相對路徑)
	// 回傳：與載體的相對路徑
	// 用途：可以在cocos中使用animformjson中
	// 使用relativePath(載體路徑,圖片相對路徑)取回db路徑
	static string relativePath (string inA, string inB, string name, bool plist = false)
	{
		int i, j, k, l;
		l = inA.Length * 1;
		k = inB.Length * 1;
		for (i = 0, j = 0; i < l && i < k; i++) {
			if (inA [i] != inB [i]) {
				j = i;
				break;
			}
		}

		string[] arr = inA.Substring (j, l - j).Split ('/');
		string pathA = inB.Substring (j, k - j);
		l = arr.Length;
		string tmp = "";
		for (i = 0; i < l - 1; i++)
			tmp = "../" + tmp;

		pathA.Replace (".png.png", ".png");
		pathA.Replace (".jpg.jpg", ".jpg");
		if (plist) {
			pathA = pathA.Replace (".png", ".plist");
			pathA = pathA.Replace (".jpg", ".plist");
		}

		return tmp + pathA + "/" + name;
	}

	//輸出成Json檔
	//content : Json的純文字資料
	//filename : 存檔的目的地位置
	static void WriteJsonFile (string content, string filename)
	{
		FileStream f;
		if (File.Exists (filename)) {
			f = new FileStream (filename, FileMode.Truncate, FileAccess.Write);
		} else {
			f = new FileStream (filename, FileMode.Create, FileAccess.Write);
		}

		StreamWriter sw = new StreamWriter (f);
		sw.Write ("");
		sw.Close ();
		f.Close ();
		f = new FileStream (filename, FileMode.Truncate, FileAccess.Write);
		sw = new StreamWriter (f);
		string FormatJSON = "null";
		try {
			FormatJSON = JsonTree (Json.Serialize (Json.Deserialize (content)));
		} catch (Exception e) {
			sw.Write(content);
			sw.Close();
			f.Close();
			Console.WriteLine(e);
			throw;
		}

		sw.Write (FormatJSON);
		sw.Close ();
		f.Close ();
	}
}