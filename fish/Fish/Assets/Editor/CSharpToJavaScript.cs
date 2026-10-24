using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;
using example.invalid;

namespace CocosConverterCSharp
{
    public class CSharpToJavaScript : MonoBehaviour
    {

        private static string targetKey = "ToJavaScriptFolder";

        [MenuItem("Assets/GUID", priority = 200)]
        private static void SceneFindGUID()
        {
            string targetPath = PlayerPrefs.GetString(targetKey, Path.Combine(Application.dataPath, ".."));
            targetPath = EditorUtility.SaveFolderPanel("Save JavaScript (建議路徑: ...\\[CocosProject]\\assets\\Script\\Game)", targetPath, "");
            if (targetPath.Length == 0)
                return;

            PlayerPrefs.SetString(targetKey, targetPath);
            PlayerPrefs.Save();

            string[] assetGUIDArray = Selection.assetGUIDs;
            string folderPath = "";

            if (assetGUIDArray.Length == 1)
                folderPath = AssetDatabase.GUIDToAssetPath(assetGUIDArray[0]);

            if (string.IsNullOrEmpty(folderPath) == true)
                return;

            FindGUID(folderPath);
        }

        private static void FindGUID(string path)
        {
            string text = FileTool.LoadTxt(path);
            FileTool.ParseTxt(text, (field) =>
            {
                if (field.IndexOf("guid:") < 0)
                    return;

                char[] splitChars = { ',' };
                string[] guids = field.Split(splitChars, System.StringSplitOptions.RemoveEmptyEntries);
                for (int i = 0; i < guids.Length; ++i)
                {
                    string guid = guids[i];
                    if (guid.IndexOf("guid:") >= 0)
                    {
                        guid = guid.Replace("guid:", "");
                        guid = guid.Replace(" ", "");
                        string filePath = AssetDatabase.GUIDToAssetPath(guid);
                        if (Path.GetExtension(filePath) == ".cs")
                        {
                            ParseFile(filePath);
                        }
                        else
                        {
                            //FindGUID(guids[i]);
                        }
                    }
                }
            });
        }

        [MenuItem("Assets/CSharpToJavaScript", priority = 200)]
        private static void Parse()
        {
            string targetPath = PlayerPrefs.GetString(targetKey, Path.Combine(Application.dataPath, ".."));
            targetPath = EditorUtility.SaveFolderPanel("Save JavaScript (建議路徑: ...\\[CocosProject]\\assets\\Script)", targetPath, "");
            if (targetPath.Length == 0)
                return;

            string[] assetGUIDArray = Selection.assetGUIDs;
            string folderPath = Application.dataPath;

            if (assetGUIDArray.Length == 1)
                folderPath = AssetDatabase.GUIDToAssetPath(assetGUIDArray[0]);

            PlayerPrefs.SetString(targetKey, targetPath);
            PlayerPrefs.Save();

            ParseFolder(folderPath);
            ParseFile(folderPath);
        }

        private static void ParseFolder(string folderPath)
        {
            if (Directory.Exists(folderPath) == false)
                return;

            try
            {
                // Process the list of files found in the directory.
                string[] fileEntries = Directory.GetFiles(folderPath);
                foreach (string fileName in fileEntries)
                    ParseFile(fileName);

                // Recurse into subdirectories of this directory.
                string[] subdirectoryEntries = Directory.GetDirectories(folderPath);
                foreach (string subdirectory in subdirectoryEntries)
                    ParseFolder(subdirectory);
            }
            catch (IOException e)
            {
                Debug.Log("轉換程式語言失敗..." + e.Message);
            }
        }

        private static void ParseFile(string filePath)
        {
            string targetPath = PlayerPrefs.GetString(targetKey, Path.Combine(Application.dataPath, ".."));
            try
            {
                FileInfo info = new FileInfo(filePath);

                if (CheckExtension(info.Extension) == false)
                    return;

                char[] splitChars = { '\\' };
                string[] folders = info.FullName.Replace(Application.dataPath.Replace("/", "\\"), "").Split(splitChars, System.StringSplitOptions.RemoveEmptyEntries);
                for (int i = 0; i < folders.Length - 1; ++i)
                {
                    targetPath = Path.Combine(targetPath, folders[i]);
                    if (Directory.Exists(targetPath) == false)
                        Directory.CreateDirectory(targetPath);
                }

                if (FilterClassName(info) == true)
                    return;

                Debug.Log("轉換中... " + info.FullName);
                string content = CSharpToJavaScriptContent.GetContent(info);
                Debug.Log("轉換結果..." + content);
                string fileName = Path.GetFileNameWithoutExtension(info.Name);
                fileName = fileName + ".js";

                File.WriteAllText(Path.Combine(targetPath, fileName), content);
            }
            catch (IOException e)
            {
                Debug.Log("轉換程式語言失敗..." + e.Message);
            }
        }

        /// <summary> 確認檔案類型 </summary>
        private static bool CheckExtension(string _extension)
        {
            _extension = _extension.ToLower();

            if (_extension == ".cs")
                return true;

            return false;
        }

        /// <summary> 過濾不處理的檔案 </summary>
        private static bool FilterClassName(FileInfo info)
        {
            string fileName = Path.GetFileNameWithoutExtension(info.Name);
            if (fileName == "SampleGameHelper")
                return true;
            if (fileName == "FishDataManager")
                return true;

            return false;
        }
    }


    public class CSharpToJavaScriptContent
    {
        private static string s_RequireContent = "";
        public static string GetContent(FileInfo info)
        {
            string fileName = Path.GetFileNameWithoutExtension(info.Name);

            List<string> extendsClass = new List<string>();
            List<string> className = new List<string>();
            string declareContent = "";
            string propertyContent = "";
            string propertyInObject = "";
            string constructorContent = "";
            string functionContent = "";
            string annotationContent = "";
            s_RequireContent = "";
            int rowIndex = 0;

            // 區域階層判斷用
            List<string> inPart = new List<string>();
            // 紀錄無法轉換程式碼從哪個階層開始
            int isUnableChange = -1;
            // 區域註解程式碼
            bool annotationPart = false;

            s_Linebreak = false;
            // 最終結果
            string returnContent = "";

            string text = FileTool.LoadTxt(info.FullName);
            FileTool.ParseTxt(text, (field) =>
            {
                rowIndex = rowIndex + 1;
                string changeContent = field;

                Debug.Log(rowIndex + ">> " + field);

                // 是否在Object裡面
                bool inObject = false;
                for (int i = 0; i < inPart.Count; ++i)
                {
                    if (inPart[i] == "ccClass")
                        inObject = true;
                    else if (inPart[i] == "fun")
                        inObject = true;
                }
                // 解析內容用
                string parseContent = field;
                parseContent = RemoveString(parseContent);
                parseContent = parseContent.Replace("(", " ");
                parseContent = parseContent.Replace(")", " ");
                parseContent = parseContent.Replace("{", " ");
                parseContent = parseContent.Replace("}", " ");
                parseContent = parseContent.Replace(",", " ");
                parseContent = parseContent.Replace("\t", " ");
                char[] splitChars = { ' ' };
                string[] splitContent = parseContent.Split(splitChars, System.StringSplitOptions.RemoveEmptyEntries);
                                
                // 尋找腳本名稱
                if (changeContent.IndexOf("class ") >= 0)
                {
                    int classIndex = changeContent.IndexOf("class ");
                    int startInex = changeContent.IndexOf(":");
                    string tempName = changeContent.Substring(classIndex);
                    if(startInex >= 0)
                        tempName = changeContent.Substring(classIndex, startInex - classIndex);
                    tempName = tempName.Replace("class", "");
                    tempName = tempName.Replace(" ", "");
                    className.Add(tempName);

                    // 尋找繼承腳本
                    if (startInex >= 0)
                    {
                        int endInex = changeContent.IndexOf("{");
                        if (endInex < 0)
                            endInex = changeContent.Length;

                        string extendsList = changeContent.Substring(startInex, endInex - startInex);
                        extendsList = extendsList.Replace(":", "");
                        extendsList = extendsList.Replace(" ", "");
                        extendsClass = new List<string>(extendsList.Split(','));

                        foreach (var extendsName in extendsClass)
                        {
                            int pointIndex = extendsName.IndexOf(".");
                            if (pointIndex >= 0)
                            {
                                string requireName = extendsName.Substring(0, pointIndex);
                                s_RequireContent += "var " + requireName + " = require('" + requireName + "')" + "\n";
                            }
                        }
                    }
                }

                // 如果為ccClass的大括弧換行，則省略大括弧
                if (s_Linebreak == true && inPart[inPart.Count - 1] == "ccClass")
                {
                    int startIndex = changeContent.IndexOf("{");
                    changeContent = changeContent.Substring(startIndex + 1);
                }
                else if (s_Linebreak == true && inPart[inPart.Count - 1] == "class")
                {
                    int startIndex = changeContent.IndexOf("{");
                    changeContent = changeContent.Substring(startIndex + 1);
                }

                // 開始區域註解程式碼
                if (CheckAnnotationPartStart(field) == true)
                    annotationPart = true;

                try
                {
                    // 註解程式碼不做任何轉換動作
                    if (annotationPart == false && CheckAnnotation(field) == false)
                    {
                        int startIndex = -1;
                        string tempContent = changeContent;
                        string replaceContent = "";

                        // 開始區域需重新編寫內容
                        foreach (string e in CheckPart(field))
                        {
                            startIndex = tempContent.IndexOf("{");
                            if (startIndex >= 0)
                            {
                                replaceContent = tempContent.Substring(0, startIndex + 1);
                                tempContent = tempContent.Substring(startIndex + 1);
                            }
                            else
                            {
                                replaceContent = tempContent;
                                tempContent = "";
                            }

                            // 此行為宣告class繼承MonoBehaviour
                            if (e == "ccClass")
                            {
                                changeContent = changeContent.Replace(replaceContent, ">>>更換ccClass宣告<<<");
                                inObject = true;
                            }
                            // 此行為宣告class
                            else if (e == "class")
                            {
                                string newChar = replaceContent.Replace("public ", "");
                                newChar = newChar.Replace("private ", "");

                                if (inObject == true)
                                {
                                    string tempName = "";
                                    for (int i = 0; i < className.Count; ++i)
                                        tempName += className[i];
                                    newChar = newChar.Replace("class ", "var ");
                                    newChar = newChar + " = cc.Class({" + "\n";
                                    newChar = newChar + "\t" + "name:\"" + tempName + "\"," + "\n";
                                    newChar = newChar + ">>>新增properties<<<" + "\n";
                                }
                                else
                                {
                                    newChar = newChar.Replace(" : ", " extends ");
                                    newChar = newChar.Replace(":", " extends ");
                                    newChar += "\n";
                                    newChar += "{" + "\n";
                                    if (newChar.IndexOf("extends ") >= 0)
                                        newChar += ">>>新增Constructor Extends<<<" + "\n";
                                    else
                                        newChar += ">>>新增Constructor<<<" + "\n";
                                }
                                changeContent = changeContent.Replace(replaceContent, newChar);
                            }
                            else if (e == "fun")
                            {
                                changeContent = changeContent.Replace("public ", "");
                                changeContent = changeContent.Replace("private ", "");
                                changeContent = changeContent.Replace("protected ", "");
                                inObject = true;
                            }
                            inPart.Add(e);
                            Debug.Log("[" + inPart.Count + "]" + e);
                        }
                    }
                }
                catch
                {
                    Debug.LogError(fileName + ":" + rowIndex + ">> " + field);
                }

                // 註解到原有程式碼
                if (CheckCommentOut(changeContent) == true)
                    changeContent = "//" + changeContent;

                // 需重新編寫內容
                string unableChangeContent = "//----->需重新編譯程式碼";
                if (CheckUnableChange(field) == true)
                {
                    changeContent = unableChangeContent + changeContent;
                }
                else if (isUnableChange > 0 && isUnableChange <= inPart.Count)
                {
                    changeContent = unableChangeContent + changeContent;
                    changeContent = changeContent.Replace("\n", "\n" + unableChangeContent);
                }

                changeContent = changeContent.Replace("this.transform", "this.node");
                changeContent = changeContent.Replace(".transform", "");
                changeContent = changeContent.Replace("transform", "this.node");
                changeContent = changeContent.Replace("this.gameObject", "this.node");
                changeContent = changeContent.Replace(".gameObject", "");
                changeContent = changeContent.Replace("gameObject", "this.node");
                changeContent = changeContent.Replace("GetComponentInChildren", "getComponentInChildren");
                changeContent = changeContent.Replace("GetComponentsInChildren", "getComponentsInChildren");
                changeContent = changeContent.Replace("GetComponentInParent", "parent.getComponentInChildren");
                changeContent = changeContent.Replace("GetComponentsInParent", "parent.getComponentsInChildren");
                changeContent = changeContent.Replace("GetComponent", "getComponent");
                changeContent = changeContent.Replace("FindObjectOfType", "cc.find(\"Canvas\").getComponentInChildren");
                changeContent = changeContent.Replace("FindObjectOfType", "cc.find(\"Canvas\").getComponentInChildren");
                changeContent = changeContent.Replace("childCount", "children.length");
                changeContent = changeContent.Replace(".GetSiblingIndex()", ".getSiblingIndex");
                changeContent = changeContent.Replace(".SetActive", ".active = ");
                changeContent = changeContent.Replace(".SetParent", ".parent = ");
                changeContent = changeContent.Replace(".localPosition", ".position");
                changeContent = changeContent.Replace(".localScale", ".scale");
                changeContent = changeContent.Replace(".localRotation", ".eulerAngles");
                changeContent = changeContent.Replace(".sizeDelta.x", ".width");
                changeContent = changeContent.Replace(".sizeDelta.y", ".height");
                changeContent = changeContent.Replace(".ToString", ".toString");
                changeContent = changeContent.Replace("Debug.Log", "console.log");
                changeContent = changeContent.Replace("new Vector2", "cc.v2");
                changeContent = changeContent.Replace("new Vector3", "cc.v3");
                changeContent = changeContent.Replace("Vector3.zero", "cc.v3(0, 0, 0)");
                changeContent = changeContent.Replace("Vector3.one", "cc.v3(1, 1, 1)");
                changeContent = changeContent.Replace("Instantiate", "cc.instantiate");
                changeContent = changeContent.Replace("<Text>", "(cc.Label)");
                changeContent = changeContent.Replace("<Button>", "(cc.Button)");
                changeContent = changeContent.Replace("<Image>", "(cc.Sprite)");
                changeContent = changeContent.Replace("<Sprite>", "(cc.Sprite)");
                changeContent = changeContent.Replace("<RawImage>", "(cc.Sprite)");
                changeContent = changeContent.Replace("<ScrollRect>", "(cc.ScrollView)");
                changeContent = changeContent.Replace("<Toggle>", "(cc.Toggle)");
                changeContent = changeContent.Replace("<Animator>", "(cc.Animation)");
                changeContent = changeContent.Replace("<GridLayoutGroup>", "(cc.Layout)");
                changeContent = changeContent.Replace("<ParticleSystem>", "(cc.ParticleSystem)");
                changeContent = changeContent.Replace("<Slider>", "(cc.Slider)");
                changeContent = changeContent.Replace("<SpriteRenderer>", "(cc.Sprite)");
                changeContent = changeContent.Replace("<SkeletonGraphic>", "(sp.Skeleton)");
                changeContent = changeContent.Replace("<Camera>", "(cc.Camera)");
                changeContent = changeContent.Replace("<Mask>", "(cc.Mask)");

                // 註解內容 (會保留至下段內容時寫入)
                if (annotationPart == true || CheckAnnotation(field) == true)
                {
                    annotationContent += changeContent + "\n";
                }
                else if (inPart.Count > 0 && inPart[inPart.Count - 1] == "ccClass")
                {
                    string tempContent = GetTypesetting(changeContent, inPart.Count);
                    changeContent = ChangeProperty(changeContent);
                    changeContent = GetTypesetting(changeContent, inPart.Count);

                    if (tempContent == changeContent)
                        returnContent += changeContent + "\n";
                    else if (tempContent.IndexOf("public") >= 0 || tempContent.IndexOf("SerializeField") >= 0)
                        propertyContent += changeContent + "\n";
                    else
                        constructorContent += changeContent + "\n";
                }
                else if (inPart.Count > 0 && inPart[inPart.Count - 1] == "class")
                {
                    string tempContent = GetTypesetting(changeContent, inPart.Count);
                    changeContent = ChangeProperty(changeContent);
                    changeContent = GetTypesetting(changeContent, inPart.Count);

                    if (inObject == true && tempContent != changeContent)
                        propertyInObject += changeContent + "\n";
                    else if (inObject == false && tempContent != changeContent)
                        constructorContent += changeContent + "\n";
                    else
                        returnContent += changeContent + "\n";
                }
                else if (inPart.Count > 0 && inPart[inPart.Count - 1] == "fun")
                {
                    changeContent = changeContent.Replace("void ", "");
                    changeContent = changeContent.Replace("internal ", "");
                    changeContent = changeContent.Replace("IEnumerator ", "");
                    returnContent += changeContent + "\n";
                }
                else
                {
                    returnContent += changeContent + "\n";
                }
                
                if (annotationPart == false && CheckAnnotation(field) == false)
                {
                    foreach (string e in CheckEnd(field))
                    {
                        if (inPart.Count == 0)
                        { }
                        // 此行為結束ccClass時，將內容整理
                        else if (inPart[inPart.Count - 1] == "ccClass")
                        {
                            int endIndex = returnContent.LastIndexOf("}");
                            returnContent = returnContent.Insert(endIndex + 1, ")");
                            returnContent = returnContent.Replace(">>>更換ccClass宣告<<<", GetContentCCClass(className, extendsClass, propertyContent, constructorContent));
                            extendsClass.Clear();
                            propertyContent = "";
                            constructorContent = "";
                            className.RemoveAt(className.Count - 1);
                        }
                        else if (inPart[inPart.Count - 1] == "class" && inObject == true)
                        {
                            int endIndex = returnContent.LastIndexOf("}");
                            returnContent = returnContent.Insert(endIndex + 1, ")");
                            returnContent = returnContent.Replace(">>>新增properties<<<", GetContentProperty(propertyInObject));
                            propertyInObject = "";
                            className.RemoveAt(className.Count - 1);
                        }
                        else if (inPart[inPart.Count - 1] == "class" && inObject == false)
                        {
                            returnContent = returnContent.Replace(">>>新增Constructor Extends<<<", GetContentConstructorExtends(constructorContent));
                            returnContent = returnContent.Replace(">>>新增Constructor<<<", GetContentConstructor(constructorContent));
                            constructorContent = "";
                            className.RemoveAt(className.Count - 1);
                        }
                        else if (inPart[inPart.Count - 1] == "fun" && inObject == true)
                        {
                            int endIndex = returnContent.LastIndexOf("}");
                            returnContent = returnContent.Insert(endIndex + 1, ",");
                        }

                        inPart.RemoveAt(inPart.Count - 1);
                        // 結束區域需重新編寫內容
                        if (isUnableChange == inPart.Count)
                            isUnableChange = -1;
                    }
                }
                // 結束區域註解程式碼
                if (CheckAnnotationPartEnd(field) == true)
                    annotationPart = false;

                Debug.Log(rowIndex + "<< " + changeContent);
                Debug.Log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~inPart.Count:" + inPart.Count);
            });

            returnContent = s_RequireContent + returnContent;
            return returnContent;
        }

        private static string GetTypesetting(string content, int count)
        {
            content = content.Replace("\t", "");
            content = content.Replace("\n", "\n\t");
            for (int i = 0; i < count; ++i)
            {
                content = "\t" + content;
                content = content.Replace("\n", "\n\t");
            }

            return content;
        }

        private static string GetContentCCClass(List<string> className, List<string> extendsClass, string propertyContent, string constructorContent)
        {
            string content = "";
            if (className.Count > 0)
                content += "var " + className[className.Count - 1] + " = ";

            content += "cc.Class({" + "\n";
            content += "\t" + "extends: cc.Component," + "\n";
            foreach (var extendsName in extendsClass)
            {                
                if(extendsName.IndexOf(".") >= 0)
                    content += "\t" + "extends: " + extendsName + "," + "\n";
                else if(extendsName != "MonoBehaviour")
                    content += "\t" + "extends: require('" + extendsName + "')," + "\n";
            }
            content += "\t" + "properties:" + "\n";
            content += "\t" + "{" + "\n";
            content += propertyContent + "\n";
            content += "\t" + "}," + "\n";
            content += "\t" + "ctor()" + "\n";
            content += "\t" + "{" + "\n";
            content += constructorContent + "\n";
            content += "\t" + "}," + "\n";

            return content;
        }

        private static string GetContentConstructorExtends(string constructorContent)
        {
            string content = "";
            if (string.IsNullOrEmpty(constructorContent) == false)
            {
                content += "\t" + "constructor()" + "\n";
                content += "\t" + "{" + "\n";
                content += "\t\t" + "super();" + "\n";
                content += constructorContent + "\n";
                content += "\t" + "}" + "\n";
            }
            return content;
        }

        private static string GetContentConstructor(string constructorContent)
        {
            string content = "";
            if (string.IsNullOrEmpty(constructorContent) == false)
            {
                content += "\t" + "constructor()" + "\n";
                content += "\t" + "{" + "\n";
                content += constructorContent + "\n";
                content += "\t" + "}" + "\n";
            }
            return content;
        }
        
        private static string GetContentProperty(string propertyContent)
        {
            string content = "";
            if (string.IsNullOrEmpty(propertyContent) == false)
            {
                content += "\t" + "properties:" + "\n";
                content += "\t" + "{" + "\n";
                content += propertyContent + "\n";
                content += "\t" + "}," + "\n";
            }
            return content;
        }

        private static bool CheckAnnotation(string content)
        {
            content = content.Replace("\t", "");
            content = content.Replace(" ", "");
            if (content.IndexOf("//") == 0)
                return true;

            return false;
        }
        private static bool CheckAnnotationPartStart(string content)
        {
            content = content.Replace("\t", "");
            content = content.Replace(" ", "");
            if (content.IndexOf("/*") == 0)
                return true;

            return false;
        }
        private static bool CheckAnnotationPartEnd(string content)
        {
            content = content.Replace("\t", "");
            content = content.Replace(" ", "");
            if (content.IndexOf("*/") >= 0)
                return true;

            return false;
        }

        private static bool s_Linebreak = false;
        private static List<string> CheckPart(string content)
        {
            List<string> list = new List<string>();
            content = RemoveString(content);
            content = RemoveChar(content);
            int startIndex = 0;
            string parseContent = content;
            while (startIndex >= 0)
            {
                string partName = "";
                if (s_Linebreak == true)
                    s_Linebreak = false;
                else if (parseContent.IndexOf("class ") >= 0 && parseContent.IndexOf(":") >= 0)
                    partName = "ccClass";
                else if (parseContent.IndexOf("class ") >= 0)
                    partName = "class";
                else if (parseContent.IndexOf("void ") >= 0 && parseContent.IndexOf(";") < 0)
                    partName = "fun";
                else if (parseContent.IndexOf("IEnumerator ") >= 0 && parseContent.IndexOf(";") < 0)
                    partName = "fun";
                else if (parseContent.IndexOf("virtual ") >= 0 && parseContent.IndexOf(";") < 0)
                    partName = "fun";
                else if (parseContent.IndexOf("override ") >= 0 && parseContent.IndexOf(";") < 0)
                    partName = "fun";
                else if (CheckReturnFunction(parseContent) == true)
                    partName = "fun";
                else if (parseContent.IndexOf("{") >= 0)
                    partName = "parentheses";

                startIndex = parseContent.IndexOf("{");
                parseContent = parseContent.Substring(startIndex + 1);

                // 有大括號換行的可能
                if (string.IsNullOrEmpty(partName) == false && partName != "parentheses" && startIndex < 0)
                    s_Linebreak = true;

                if (string.IsNullOrEmpty(partName) == false)
                    list.Add(partName);
            }

            return list;
        }

        private static List<string> CheckEnd(string content)
        {
            List<string> list = new List<string>();
            content = RemoveString(content);
            content = RemoveChar(content);
            while (content.IndexOf("}") >= 0)
            {
                int startIndex = content.IndexOf("}");
                content = content.Substring(startIndex + 1);
                list.Add("");
            }

            return list;
        }

        /// <summary> 檢查是否要註解到原有程式碼 </summary>
        private static bool CheckCommentOut(string content)
        {
            if (content.IndexOf("using") >= 0)
                return true;
            if (content.IndexOf("namespace") >= 0)
                return true;
            if (content.IndexOf("#") >= 0)
                return true;

            return false;
        }

        private static bool CheckUnableChange(string content)
        {
            return false;
        }

        private static string ChangeUnableChange(string content)
        {
            return content;
        }

        private static string ChangeProperty(string content)
        {
            string tempContent = content;
            string typeUnity = "";
            string typeCocos = "";

            content = RemovePrefix(content);
            bool passChange = false;
            char[] splitChars = { ' ' };
            string[] splitContent = content.Split(splitChars, System.StringSplitOptions.RemoveEmptyEntries);
            for (int i = 0; i < splitContent.Length; ++i)
            {
                string typeContent = splitContent[i];
                typeContent = typeContent.Replace("\t", "");
                splitContent[i] = splitContent[i].Replace("\t", "");
                splitContent[i] = splitContent[i].Replace(";", "");
                splitContent[i] = splitContent[i].Replace("[", "");
                splitContent[i] = splitContent[i].Replace("]", "");

                if (splitContent[i].IndexOf("(") >= 0)
                    passChange = true;

                if (string.IsNullOrEmpty(typeCocos) == true)
                {
                    typeCocos = ChangeComponent(splitContent[i]);
                    if (string.IsNullOrEmpty(typeCocos) == false)
                        typeUnity = typeContent;
                }
            }
            // 不是指定型別，皆不做轉換
            if (string.IsNullOrEmpty(typeUnity) == true)
                return content;

            string checkContent = content.Replace(" ", "");
            if (passChange == true)
                return content;
            else if (content.IndexOf(";") < 0)
                return content;
            else if (checkContent.IndexOf("Dictionary<") >= 0)
                return content;
            else if (checkContent.IndexOf("List<") >= 0)
                return content;

            // 判斷是否為陣列
            int startIndex = content.IndexOf("[");
            if (startIndex >= 0)
            {
                if (content.IndexOf("]", startIndex) >= 0)
                    typeCocos = "[" + typeCocos + "]";
            }
            if (tempContent.IndexOf("public") >= 0 || tempContent.IndexOf("SerializeField") >= 0)
                content = GetProperty(content, typeUnity, typeCocos);
            else
                content = GetConstructor(content, typeUnity, typeCocos);

            return content;
        }

        private static string GetProperty(string content, string typeUnity, string typeCocos)
        {
            string defaultContent = "";
            int equalIndex = content.IndexOf("=");
            if (equalIndex >= 0)
            {
                defaultContent = content.Substring(equalIndex);
                defaultContent = defaultContent.Replace("=", "");
                defaultContent = defaultContent.Replace(" ", "");
                defaultContent = defaultContent.Replace(";", "");
                if (typeUnity == "float")
                    defaultContent = defaultContent.Replace("f", "");
            }
            else
            {
                if (typeUnity == "float")
                    defaultContent = "0";
                else if(typeUnity == "double")
                    defaultContent = "0";
                else if (typeUnity == "int")
                    defaultContent = "0";
                else if (typeUnity == "long")
                    defaultContent = "0";
            }

            int parenthesesIndex = typeCocos.IndexOf("[");
            if (parenthesesIndex >= 0)
            {
                typeCocos = typeCocos.Replace("[", "");
                typeCocos = typeCocos.Replace("]", "");
            }

            string temp = ": {" + "\n";
            // default
            if (parenthesesIndex >= 0)
                temp += "default: " + "[]" + "," + "\n";
            else if(string.IsNullOrEmpty(defaultContent))
                temp += "default: " + "null" + "," + "\n";
            else
                temp += "default: " + defaultContent + "," + "\n";

            // type
            int pointIndex = typeUnity.IndexOf(".");
            string typeContent = typeUnity;
            typeContent = typeContent.Replace("\t", "");
            typeContent = typeContent.Replace(";", "");
            typeContent = typeContent.Replace("[", "");
            typeContent = typeContent.Replace("]", "");
            if (typeContent != ChangeComponent(typeContent))
                temp += "type : " + typeCocos + "," + "\n";
            else if (pointIndex >= 0)
            {
                temp += "type : " + typeCocos + "," + "\n";
                string requireName = typeUnity.Substring(0, pointIndex);
                s_RequireContent += "var " + requireName + " = require('" + requireName + "')" + "\n";
            }
            else
                temp += "type : require('" + typeCocos + "')," + "\n";

            temp += "}," + "\n";

            //不需要完整宣告
            bool completeDeclaration = false;
            if (typeUnity == "string")
                completeDeclaration = true;
            else if (typeUnity == "bool")
                completeDeclaration = true;
            else if (typeUnity == "Vector2")
                completeDeclaration = true;
            else if (typeUnity == "Vector3")
                completeDeclaration = true;
            
            if (completeDeclaration == true)
            {
                if (string.IsNullOrEmpty(defaultContent) == true)
                    temp = ":" + typeCocos + "," + "\n";
                else
                    temp = ":" + defaultContent + "," + "\n";
            }
            
            // content
            if (equalIndex >= 0)
            {
                string oldChar = content.Substring(equalIndex);
                content = content.Replace(oldChar, ";");
            }
            content = content.Replace("public ", "");
            content = content.Replace("private ", "");
            content = content.Replace("protected ", "");
            content = content.Replace(" " + typeUnity + " ", "");
            content = content.Replace("\t" + typeUnity + " ", "");
            content = content.Replace("=", "");
            content = content.Replace(";", temp);

            return content;
        }

        private static string GetConstructor(string content, string typeUnity, string typeCocos)
        {
            int equalIndex = content.IndexOf("=");
            if (equalIndex >= 0)
            {
                if (typeUnity == "float")
                {
                    string oldChar = content.Substring(equalIndex);
                    string newChar = oldChar.Replace("f", "");
                    content = content.Replace(oldChar, newChar);
                }
            }
            else
            {
                content = content.Replace(";", "=null;");
            }

            content = content.Replace("private ", "");
            content = content.Replace("protected ", "");
            content = content.Replace(" " + typeUnity + " ", "this.");
            content = content.Replace("\t" + typeUnity + " ", "this.");
            content = content.Replace("\t", "");
            content = content.Replace(":", "=");

            return content;
        }
    
        private static string ChangeComponent(string content)
        {
            switch (content)
            {
                // 不處理
                case "get": return "";
                case "set": return "";
                case "const": return "";
                case "readonly": return "";
                case "static": return "";            
                case "public": return "";
                case "private": return "";
                case "protected": return "";

                // unity 轉換為 cocos
                case "Text": return "cc.Label";
                case "Button": return "cc.Button";
                case "Image": return "cc.Sprite";
                case "Sprite": return "cc.Sprite";
                case "RawImage": return "cc.Sprite";
                case "ScrollRect": return "cc.ScrollView";
                case "Toggle": return "cc.Toggle";
                case "Animator": return "cc.Animation";
                case "GridLayoutGroup": return "cc.Layout";
                case "ParticleSystem": return "cc.ParticleSystem";
                case "Slider": return "cc.Slider";
                case "SpriteRenderer": return "cc.Sprite";
                case "SkeletonGraphic": return "sp.Skeleton";
                case "Camera": return "cc.Camera";
                case "Mask": return "cc.Mask";
                case "LineRenderer": return "LineRenderer";
                case "Vector2": return "cc.Vec2";
                case "Vector3": return "cc.Vec3";
                case "Color": return "cc.Color";
                case "string": return "cc.String";
                case "bool": return "cc.Boolean";
                case "int": return "cc.Integer";
                case "long": return "cc.Integer";
                case "float": return "cc.Float";
                case "double": return "cc.Float";
                case "RectTransform": return "cc.Node";
                case "Transform": return "cc.Node";
                case "GameObject": return "cc.Node";
                case "UnityEngine.Object": return "cc.Node";
                case "AudioClip": return "cc.AudioClip";
                case "DateTime": return "Date";
                default: return content;
            }
        }

        private static bool CheckReturnFunction(string content)
        {
            int startIndex = content.IndexOf("(");
            if (startIndex < 0)
                return false;

            int equalIndex = content.IndexOf("=");
            if (equalIndex >= 0)
                return false;

            content = content.Substring(0, startIndex);

            char[] splitChars = { ' ' };
            string[] splitContent = content.Split(splitChars, System.StringSplitOptions.RemoveEmptyEntries);

            for (int i = 0; i < splitContent.Length; ++i)
            {
                splitContent[i] = splitContent[i].Replace("\t", "");

                string compareContent = ChangeComponent(splitContent[i]);
                if (string.IsNullOrEmpty(compareContent))
                { }
                else if (compareContent != splitContent[i])
                    return true;
            }
            return false;
        }

        /// <summary> 移除前方有[SerializeField].[Header("")] </summary>
        private static string RemovePrefix(string content)
        {
            int startIndex = content.IndexOf("[");
            while (startIndex >= 0)
            {
                int endInex = content.IndexOf("]");
                
                string oldChar = content.Substring(startIndex, endInex - startIndex + 1);
                if (startIndex + 1 < endInex)
                    content = content.Replace(oldChar, "");

                int nextIndex = content.IndexOf("[");
                if (nextIndex == startIndex)
                    startIndex = -1;
                else
                    startIndex = nextIndex;
            }
            return content;
        }

        // 移除字串內容
        private static string RemoveString(string content)
        {
            int startIndex = -1;
            while (content.IndexOf("\"", startIndex + 1) >= 0)
            {
                if (startIndex == -1)
                    startIndex = content.IndexOf("\"", startIndex + 1);
                else
                {
                    int length = content.IndexOf("\"", startIndex + 1) - startIndex + 1;
                    content = content.Replace(content.Substring(startIndex, length), "");
                    startIndex = -1;
                }
            }

            return content;
        }

        private static string RemoveChar(string content)
        {
            int startIndex = -1;
            while (content.IndexOf("\'", startIndex + 1) >= 0)
            {
                if (startIndex == -1)
                    startIndex = content.IndexOf("\'", startIndex + 1);
                else
                {
                    int length = content.IndexOf("\'", startIndex + 1) - startIndex + 1;
                    content = content.Replace(content.Substring(startIndex, length), "");
                    startIndex = -1;
                }
            }

            return content;
        }
    }

    public class FileTool
    {
        public static string LoadTxt(string filePath)
        {
            // 判斷temporaryCache是否有資料
            if (File.Exists(filePath))
            {
                try
                {
                    FileStream _fs = new FileStream(filePath, FileMode.Open);

                    StreamReader _sr = new StreamReader(_fs); // 以串流讀取
                    string _line = _sr.ReadToEnd();
                    _fs.Close();

                    if (_line != null)
                        return _line;

                    return null;
                }
                catch (IOException e)
                {
                    //Debug.Log(e);

                    return null;
                }
            }
            return null;
        }

        /// <summary> 文檔解析器 </summary>
        public static void ParseTxt(string _text, System.Action<string> _doSomeThing)
        {
            if (_text == null)
            {
                return;
            }

            string[] _lineSeparator = new string[] { "\r\n", "\n" };
            string[] _lines = _text.Split(_lineSeparator, System.StringSplitOptions.None);

            for (int i = 0; i < _lines.Length; ++i)
            {
                _doSomeThing(_lines[i]);
            }
        }

        public static void ShowSplit(string[] splitContent)
        {
            string showContent = "";
            for (int i = 0; i < splitContent.Length; ++i)
            {
                splitContent[i] = splitContent[i].Replace(" ", "");
                showContent += "[" + splitContent[i].Replace(" ", "") + "]";
            }

            Debug.Log(showContent);
        }
    }
}
