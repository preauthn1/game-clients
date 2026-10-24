using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;
using example.invalid;

namespace CocosSpace
{
    public class ToJavaScript
    {
        [MenuItem("Assets/LuaToJavaScript", priority = 200)]
        private static void Parse()
        {
            string[] assetGUIDArray = Selection.assetGUIDs;
            string folderPath = "";

            if (assetGUIDArray.Length == 1)
                folderPath = AssetDatabase.GUIDToAssetPath(assetGUIDArray[0]);

            ParseFolder(folderPath);
        }

        private static void ParseFolder(string folderPath)
        {
            folderPath = Path.Combine(Application.dataPath + "/..", folderPath);
            folderPath = Path.Combine(folderPath, "LuaScript");

            Debug.Log("開始轉換程式語言... ");
            string targetKey = "ToJavaScriptFolder";
            string targetPath = PlayerPrefs.GetString(targetKey, Path.Combine(Application.dataPath, ".."));
            targetPath = EditorUtility.SaveFolderPanel("Save JavaScript", targetPath, "");
            if (targetPath.Length == 0)
                return;

            PlayerPrefs.SetString(targetKey, targetPath);
            PlayerPrefs.Save();

            try
            {
                string[] filenames = Directory.GetFiles(folderPath);
                foreach (var e in filenames)
                {
                    FileInfo info = new FileInfo(e);

                    if (CheckExtension(info.Extension) == false)
                        continue;

                    Debug.Log("轉換中... " + info.FullName);
                    string content = GetContent(info);
                    Debug.Log("轉換結果..." + content);
                    string fileName = Path.GetFileNameWithoutExtension(info.Name);
                    fileName = fileName + ".js";
                    File.WriteAllText(Path.Combine(targetPath, fileName), content);
                }
                Debug.Log("已完成轉換程式語言");
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

            if (_extension == ".lua")
                return true;

            return false;
        }

        private static string GetContent(FileInfo info)
        {
            string fileName = Path.GetFileNameWithoutExtension(info.Name);
            if (fileName == "GameStart")
                return GetContent_GameStart();
            else if (fileName.IndexOf("Game_") >= 0)
                return GetContent_GameProtocol(info);
            else
                return GetContent_Default(info);
        }

        private static string GetContent_GameStart()
        {
            string content = "";

            return content;
        }

        private static string GetContent_GameProtocol(FileInfo info)
        {
            string fileName = Path.GetFileNameWithoutExtension(info.Name);
            string scriptContent = "";

            string text = LoadTxt(info.FullName);
            ParseTxt(text, (field) => {

                string changeContent = field;
                changeContent = changeContent.Replace("=", ":");

                string[] splitContent = changeContent.Split('.');
                if (splitContent.Length > 1)
                    scriptContent += splitContent[1] + ",\n";
            });

            string content = "var " + fileName + " = {\n";
            content += scriptContent + "\n";
            content += "};\n";
            content += "\n";
            content += "module.exports = " + fileName + "\n";

            return content;
        }

        private static string GetContent_GameGlobal()
        {
            string content = "";

            return content;
        }

        private static string GetContent_Default(FileInfo info)
        {
            string fileName = Path.GetFileNameWithoutExtension(info.Name);

            string declareContent = "";
            string functionContent = "";
            string annotationContent = "";

            List<string> inPart = new List<string>();
            List<int> isUnableChange = new List<int>();
            bool annotationPart = false;
            int rowIndex = 0;
            string text = LoadTxt(info.FullName);
            ParseTxt(text, (field) => {
                if (field.IndexOf("mmodule") >= 0)
                    return;

                try
                {

                    rowIndex = rowIndex + 1;
                    Debug.Log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~inPart.Count:" + inPart.Count + "     //isUnableChange:" + isUnableChange.Count);
                    Debug.Log(rowIndex + ">> " + field);
                    string changeContent = field;
                    // 程式語法轉換
                    changeContent = changeContent.Replace("{", "[");
                    changeContent = changeContent.Replace("}", "]");
                    changeContent = changeContent.Replace("--", "//");
                    changeContent = changeContent.Replace("//[[", "/*");
                    changeContent = changeContent.Replace("]]", "*/");
                    changeContent = changeContent.Replace("~=", "!=");
                    changeContent = changeContent.Replace("elseif", "else if");
                    changeContent = changeContent.Replace("print(", "console.log(");
                    changeContent = changeContent.Replace("nil", "null");
                    changeContent = changeContent.Replace(" or ", "||");
                    changeContent = changeContent.Replace(" and ", "&&");
                    changeContent = changeContent.Replace("..", "+");

                    // 遊戲引擎語法轉換
                    changeContent = changeContent.Replace("G.RequireG", "require");
                    changeContent = changeContent.Replace(".transform", "");
                    changeContent = changeContent.Replace(".gameObject", "");
                    changeContent = changeContent.Replace(":GetComponent(\"RectTransform\")", "");
                    changeContent = changeContent.Replace(":GetComponent(\"Text\")", ".getComponent(cc.Label)");
                    changeContent = changeContent.Replace(":GetComponent(\"Button\")", ".getComponent(cc.Button)");
                    changeContent = changeContent.Replace(":GetComponent(\"Image\")", ".getComponent(cc.Sprite)");
                    changeContent = changeContent.Replace(":GetComponent(\"RawImage\")", ".getComponent(cc.Sprite)");
                    changeContent = changeContent.Replace(":GetComponent(\"ScrollRect\")", ".getComponent(cc.ScrollView)");
                    changeContent = changeContent.Replace(":GetComponent(\"Toggle\")", ".getComponent(cc.Toggle)");
                    changeContent = changeContent.Replace(":GetComponent(\"Animator\")", ".getComponent(cc.AnimationController)");
                    changeContent = changeContent.Replace(":GetComponent(\"GridLayoutGroup\")", ".getComponent(cc.Layout)");
                    changeContent = changeContent.Replace(":GetComponent(\"ParticleSystem\")", ".getComponent(cc.ParticleSystem)");
                    changeContent = changeContent.Replace("onClick:AddListener(", "node.on(\'click\',");
                    changeContent = changeContent.Replace(":SetActive", ".active =");
                    changeContent = changeContent.Replace(":SetParent", ".parent =");
                    changeContent = changeContent.Replace(":SetInteger", ".SetInteger");
                    changeContent = changeContent.Replace(":SetBool", ".SetBool");
                    changeContent = changeContent.Replace("childCount", "children.length");

                    // 透過解析轉換
                    changeContent = ChangeRequire(changeContent);
                    changeContent = ChangeFind(changeContent);
                    changeContent = ChangeLocalFunction(changeContent);
                    changeContent = ChangeForeach(changeContent);
                    changeContent = ChangeFor(changeContent);
                    changeContent = ChangeLength(changeContent);
                    changeContent = ChangeGetChild(changeContent);

                    // 需重新編寫內容
                    string unableChangeContent = "//----->無法轉換程式碼";
                    if (CheckUnableChange(changeContent) == true)
                    {
                        changeContent = unableChangeContent + changeContent;
                    }
                    else if (isUnableChange.Count > 0 && isUnableChange[isUnableChange.Count - 1] <= inPart.Count)
                    {
                        changeContent = unableChangeContent + changeContent;
                    }

                    // 解析內容用
                    string parseContent = field.Replace("(", " ");
                    parseContent = parseContent.Replace(")", " ");
                    parseContent = parseContent.Replace("{", " ");
                    parseContent = parseContent.Replace("}", " ");
                    parseContent = parseContent.Replace(",", " ");
                    parseContent = parseContent.Replace("\t", "");
                    string[] splitContent = parseContent.Split(' ');

                    // function開始
                    if (CheckFunctionStart(splitContent) == true)
                    {
                        inPart.Add("fun");
                        if (CheckUnableChange(changeContent) == true)
                            isUnableChange.Add(inPart.Count);

                        changeContent = ChangeFunction(changeContent, fileName);
                    }

                    if (CheckWhile(splitContent) == true)
                    {
                        inPart.Add("while");

                        changeContent = ChangeWhile(changeContent);
                    }

                    // else 開始
                    if (CheckElseIfStart(splitContent) == true)
                    {
                        changeContent = ChangeIf(changeContent);
                        changeContent = ChangeElseIf(changeContent);

                        if (CheckUnableChange(changeContent) == true)
                        {
                            changeContent = unableChangeContent + changeContent;
                        }
                        else if (isUnableChange.Count > 0 && isUnableChange[isUnableChange.Count - 1] <= inPart.Count)
                        {
                            changeContent = unableChangeContent + changeContent;
                        }
                    }
                    // if 開始
                    else if (CheckIfStart(splitContent) == true)
                    {
                        inPart.Add("if");
                        changeContent = ChangeIf(changeContent);
                    }
                    // if 開始
                    else if (CheckElseStart(splitContent) == true)
                    {
                        changeContent = ChangeElse(changeContent);

                        if (CheckUnableChange(changeContent) == true)
                        {
                            changeContent = unableChangeContent + changeContent;
                        }
                        else if (isUnableChange.Count > 0 && isUnableChange[isUnableChange.Count - 1] <= inPart.Count)
                        {
                            changeContent = unableChangeContent + changeContent;
                        }
                    }
                    // for 開始
                    if (CheckFor(splitContent) == true)
                    {
                        inPart.Add("for");
                    }

                    if (CheckAnnotationPartStart(field) == true)
                        annotationPart = true;

                    // 整行註解
                    if (annotationPart == true || CheckAnnotation(field) == true)
                    {
                        annotationContent += changeContent + "\n";
                    }
                    else if (inPart.Count == 0)
                    {
                        if (string.IsNullOrEmpty(annotationContent) == false)
                        {
                            declareContent += annotationContent;
                            annotationContent = "";
                        }

                        if (changeContent.IndexOf("return") >= 0)
                            return;

                        changeContent = changeContent.Replace("local", "var");
                        declareContent += changeContent + "\n";
                    }
                    else if (inPart.Count == 1)
                    {
                        if (string.IsNullOrEmpty(annotationContent) == false)
                        {
                            functionContent += annotationContent;
                            annotationContent = "";
                        }

                        if (changeContent.IndexOf("function") > 0)
                        {
                            changeContent = changeContent.Replace("local", "");
                            changeContent = changeContent.Replace("= function", "");
                        }

                        changeContent = changeContent.Replace("function", "");
                        changeContent = changeContent.Replace("local", "let");

                        if (CheckEnd(splitContent) == true)
                            changeContent = changeContent.Replace("end", "},");

                        functionContent += "\t" + changeContent + "\n";
                    }
                    else
                    {
                        if (string.IsNullOrEmpty(annotationContent) == false)
                        {
                            functionContent += annotationContent;
                            annotationContent = "";
                        }

                        changeContent = changeContent.Replace("local", "let");
                        if (CheckEnd(splitContent) == true)
                            changeContent = changeContent.Replace("end", "}");

                        functionContent += "\t" + changeContent + "\n";
                    }
                    if (CheckEnd(splitContent) == true)
                    {
                        if (isUnableChange.Count > 0 && isUnableChange[isUnableChange.Count - 1] == inPart.Count)
                            isUnableChange.RemoveAt(isUnableChange.Count - 1);

                        inPart.RemoveAt(inPart.Count - 1);
                    }
                    if (CheckAnnotationPartEnd(field) == true)
                        annotationPart = false;

                    Debug.Log(rowIndex + "<< " + changeContent);
                    //Debug.Log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~" + inPart.Count);
                    Debug.Log(fileName + "\n" + GetContent(fileName, declareContent, functionContent));
                }
                catch
                {
                    Debug.LogError(rowIndex + ">> " + field);
                }
            });

            return GetContent(fileName, declareContent, functionContent);
        }


        private static string GetContent(string fileName, string declareContent, string functionContent)
        {
            string content = declareContent + "\n";
            content += "var " + fileName + " = {\n";
            content += "\textends: cc.Component," + "\n";
            content += "\n";
            content += functionContent + "\n";
            content += "};\n";
            content += "\n";
            content += "module.exports = " + fileName + "\n";

            return content;
        }


        private static bool CheckElseStart(string[] splitContent)
        {
            for (int i = 0; i < splitContent.Length; ++i)
            {
                if (splitContent[i].IndexOf("else") >= 0)
                    return true;
            }

            return false;
        }


        private static bool CheckFor(string[] splitContent)
        {
            for (int i = 0; i < splitContent.Length; ++i)
            {
                if (splitContent[i] == "for")
                    return true;

                if (splitContent[i] == "for ")
                    return true;

                if (splitContent[i] == "for(")
                    return true;
            }

            return false;
        }

        private static bool CheckEnd(string[] splitContent)
        {
            for (int i = 0; i < splitContent.Length; ++i)
                if (splitContent[i] == "end")
                    return true;

            return false;
        }

        private static bool CheckWhile(string[] splitContent)
        {
            for (int i = 0; i < splitContent.Length; ++i)
                if (splitContent[i] == "while")
                    return true;

            return false;
        }

        private static bool CheckAnnotation(string content)
        {
            content = content.Replace("\t", "");
            content = content.Replace(" ", "");
            if (content.IndexOf("--") == 0)
                return true;

            return false;
        }

        private static bool CheckAnnotationPartStart(string content)
        {
            content = content.Replace("\t", "");
            content = content.Replace(" ", "");
            if (content.IndexOf("--[[") == 0)
                return true;

            return false;
        }

        private static bool CheckAnnotationPartEnd(string content)
        {
            content = content.Replace("\t", "");
            content = content.Replace(" ", "");
            if (content.IndexOf("]]") >= 0)
                return true;

            return false;
        }

        private static string ChangeLength(string content)
        {
            int requireIndex = content.IndexOf("#");
            if (requireIndex < 0)
                return content;

            char[] delimiterChars = { ' ', '=', '>', '<', '(', ')', '{', '}' };
            string parseContent = content.Replace("\t", "");
            string[] splitContent = parseContent.Split(delimiterChars);
            for (int i = 0; i < splitContent.Length; ++i)
            {
                if (splitContent[i].IndexOf("#") >= 0)
                {
                    content = content.Replace(splitContent[i], splitContent[i] + ".length");
                    content = content.Replace("#", "");
                }
            }

            return content;
        }

        private static string ChangeRequire(string content)
        {
            int requireIndex = content.IndexOf("require");
            if (requireIndex < 0)
                return content;
            
            int indexStr = content.IndexOf("(", requireIndex);
            if (indexStr < 0)
            {
                requireIndex = requireIndex + "require".Length;
                content = content.Insert(requireIndex, "(");
                content += ")";
            }

            return content;
        }

        private static string ChangeFind(string content)
        {
            int indexFind = content.IndexOf(":Find");
            if (indexFind < 0)
                return content;

            char[] delimiterChars = { ' ', '=', ':', ',', '(', ')' };

            string parseContent = content.Replace("\t", "");
            string[] splitContent = parseContent.Split(delimiterChars, System.StringSplitOptions.RemoveEmptyEntries);
            
            List<int> arrayFind = new List<int>();
            for (int i = 0; i < splitContent.Length; ++i)
            {
                splitContent[i] = splitContent[i].Replace(" ", "");
                if (splitContent[i] == "Find")
                    arrayFind.Add(i);
            }

            if (arrayFind.Count >= 0)
            {
                int indexEqual = content.IndexOf("=");
                string startPart = content.Substring(0, indexEqual);
                string endPart = content.Substring(indexEqual);
                for (int i =0; i < arrayFind.Count; ++i)
                {
                    string node = splitContent[arrayFind[i] - 1];
                    string path = splitContent[arrayFind[i] + 1];
                    endPart = endPart.Replace(node, "");
                    int index = endPart.IndexOf(path);
                    index += path.Length;
                    endPart = endPart.Insert(index, "," + node);
                    endPart = endPart.Replace(":Find", "cc.find");
                }
                content = startPart + endPart;
            }

            return content;
        }

        private static string ChangeLocalFunction(string content)
        {
            int indexFun = content.IndexOf("local function");
            if (indexFun < 0)
                return content;

            char[] delimiterChars = { ' ', '(' };
            string parseContent = content.Replace("\t", "");
            string[] splitContent = parseContent.Split(delimiterChars);
            int arrayFun = -1;
            for (int i = 0; i < splitContent.Length; ++i)
            {
                splitContent[i] = splitContent[i].Replace(" ", "");
                if (splitContent[i].IndexOf("function") >= 0)
                    arrayFun = i;
            }

            if (arrayFun >= 0)
            {
                content = content.Replace("function", "");                
                content = content.Replace(splitContent[arrayFun + 1], splitContent[arrayFun + 1] + " = function");
            }

            return content;
        }

        private static string ChangeForeach(string content)
        {
            int indexFor = content.IndexOf("for ");
            if (indexFor < 0)
                return content;

            int indexIn = content.IndexOf("in pairs");
            if (indexIn < 0)
                return content;

            char[] delimiterChars = { ' ', ',' };
            int indexDo = content.IndexOf("do");
            string lastContent = content.Substring(indexDo + "do".Length);
            string parseContent = content.Substring(0, indexDo);
            parseContent = parseContent.Replace("\t", "");
            parseContent = parseContent.Replace("for", "");
            parseContent = parseContent.Replace("do", "");
            parseContent = parseContent.Replace("in pairs", "");
            string[] splitContent = parseContent.Split(delimiterChars, System.StringSplitOptions.RemoveEmptyEntries);
            string keyContent = splitContent[0];
            string valueContent = splitContent[1];
            string listContent = splitContent[2];

            string tempContent = listContent.Replace("(","");
            tempContent = tempContent.Replace(")","");
            content = "for(let " + keyContent + " in " + listContent + "){ \n";
            content += "let " + valueContent + " = " + tempContent + "[" + keyContent + "] \n";
            content += lastContent;

            return content;
        }

        private static string ChangeFor(string content)
        {
            int indexFor = content.IndexOf("for ");
            if (indexFor < 0)
                return content;

            // 為foreach另外轉換
            int indexIn = content.IndexOf("in ");
            if (indexIn >= 0)
                return content;

            string keyDo = " do";
            int indexDo = content.IndexOf(keyDo);
            if (indexDo < 0)
                return content;
            
            char[] delimiterChars = { '=', ',' };
            string lastContent = content.Substring(indexDo + keyDo.Length);
            string parseContent = content.Substring(0, indexDo);
            parseContent = parseContent.Replace("\t", "");
            parseContent = parseContent.Replace("for", "");
            parseContent = parseContent.Replace("do", "");
            string[] splitContent = parseContent.Split(delimiterChars, System.StringSplitOptions.RemoveEmptyEntries);
            string declareContent = splitContent[0];
            string startContent = splitContent[1];
            string endContent = splitContent[2];

            if(endContent.IndexOf("#") >= 0)
            {
                delimiterChars = new char[] { ' ', '-', '+' };
                splitContent = endContent.Split(delimiterChars, System.StringSplitOptions.RemoveEmptyEntries);
                for (int i = 0; i < splitContent.Length; ++i)
                {
                    if (splitContent[i].IndexOf("#") >= 0)
                    {
                        endContent = endContent.Replace(splitContent[i], splitContent[i] + ".length");
                        endContent = endContent.Replace("#", "");
                    }
                }
            }

            content = "for(let " + declareContent + " = " + startContent + "; " + declareContent + " <= " + endContent + "; ++i){";
            content += lastContent;

            return content;
        }

        private static bool CheckFunctionStart(string[] splitContent)
        {
            for (int i = 0; i < splitContent.Length; ++i)
                if (splitContent[i] == "function")
                    return true;

            return false;
        }

        private static string ChangeFunction(string content, string fileName = "")
        {
            int indexFun = content.IndexOf("function");
            int indexStr = content.IndexOf(")", indexFun) + 1;
            content = content.Insert(indexStr, "{");

            if (string.IsNullOrEmpty(content) == false)
                content = content.Replace(fileName + ":", "");

            return content;
        }

        private static string ChangeWhile(string content)
        {
            content = content.Replace( "do", "{");

            return content;
        }

        private static bool CheckIfStart(string[] splitContent)
        {
            for (int i = 0; i < splitContent.Length; ++i)
            {
                if (splitContent[i] == "if")
                    return true;

                if (splitContent[i].IndexOf("if ") >= 0)
                    return true;

                if (splitContent[i].IndexOf("if(") >= 0)
                    return true;
            }

            return false;
        }

        private static string ChangeIf(string content)
        {
            int indexIf = content.IndexOf("if");
            int indexThen = content.IndexOf("then");
            if (content.IndexOf("(", indexIf, 5) < 0)
            {
                content = content.Replace("if ", "if(");
                content = content.Replace("then", "){");
            }
            else
                content = content.Replace("then", "{");

            return content;
        }


        private static bool CheckElseIfStart(string[] splitContent)
        {
            for (int i = 0; i < splitContent.Length; ++i)
            {
                if (splitContent[i].IndexOf("elseif") >= 0)
                    return true;
            }

            return false;
        }

        private static string ChangeElseIf(string content)
        {
            content = "} \n" + content + "\n";

            return content;
        }

        private static string ChangeElse(string content)
        {
            content = "} \n" + content + "{";

            return content;
        }

        private static string ChangeGetChild(string content)
        {            
            if (content.IndexOf(":GetChild") < 0)
                return content;

            char[] delimiterChars = { ':', '.' };
            string[] splitContent = content.Split(delimiterChars, System.StringSplitOptions.RemoveEmptyEntries);
            
            for (int i = 0; i < splitContent.Length; ++i)
            {
                if (splitContent[i].IndexOf("GetChild") >= 0)
                {
                    string keyContent = splitContent[i];
                    keyContent = keyContent.Replace("GetChild", "");
                    keyContent = keyContent.Replace("(", "");
                    keyContent = keyContent.Replace(")", "");

                    content = content.Replace(":" + splitContent[i], ".children[" + keyContent + "]");
                }
            }

            return content;
        }
        
        private static bool CheckUnableChange(string content)
        {
            if (content.IndexOf(":SetAsFirstSibling") >= 0)
                return true;

            if (content.IndexOf(":Append") >= 0)
                return true;

            if (content.IndexOf(":OnComplete") >= 0)
                return true;

            if (content.IndexOf(":Kill") >= 0)
                return true;

            if (content.IndexOf(":OnUpdate") >= 0)
                return true;

            if (content.IndexOf(":Join") >= 0)
                return true;

            if (content.IndexOf("DOTween") >= 0)
                return true;

            return false;
        }

        private static string LoadTxt(string filePath)
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
        private static void ParseTxt(string _text, System.Action<string> _doSomeThing)
        {
            if (_text == null)
            {
                return;
            }

            string[] _lineSeparator = new string[] { "\r\n" };
            string[] _lineSeparator_1 = new string[] { "\n" };
            char[] _fieldSeparator = new char[] { '\t' };

            string[] _lines = _text.Split(_lineSeparator, System.StringSplitOptions.RemoveEmptyEntries);
            if (_lines.Length == 1)
                _lines = _text.Split(_lineSeparator_1, System.StringSplitOptions.RemoveEmptyEntries);

            for (int i = 1; i < _lines.Length; ++i)
            {
                _doSomeThing(_lines[i]);
            }
        }

        private static void ShowSplit(string[] splitContent)
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
