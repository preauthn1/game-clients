using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;
using example.invalid;

namespace CocosConverter
{
    public class LuaToJavaScript : MonoBehaviour
    {
        private static string targetKey = "ToJavaScriptFolder";

        [MenuItem("Assets/LuaToJavaScript", priority = 200)]
        private static void Parse()
        {
            string[] assetGUIDArray = Selection.assetGUIDs;
            string folderPath = "";

            if (assetGUIDArray.Length == 1)
                folderPath = AssetDatabase.GUIDToAssetPath(assetGUIDArray[0]);

            string targetPath = PlayerPrefs.GetString(targetKey, Path.Combine(Application.dataPath, ".."));
            targetPath = EditorUtility.SaveFolderPanel("Save JavaScript", targetPath, "");
            if (targetPath.Length == 0)
                return;

            PlayerPrefs.SetString(targetKey, targetPath);
            PlayerPrefs.Save();

            ParseFolder(folderPath);
            ParseFile(folderPath);
        }

        private static void ParseFolder(string folderPath)
        {
            folderPath = Path.Combine(Application.dataPath + "/..", folderPath);
            if (folderPath.IndexOf("LuaScript") < 0)
                folderPath = Path.Combine(folderPath, "LuaScript");

            if (Directory.Exists(folderPath) == false)
                return;

            try
            {
                string[] filenames = Directory.GetFiles(folderPath);
                foreach (var e in filenames)
                    ParseFile(e);
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

                Debug.Log("轉換中... " + info.FullName);
                string content = LuaToJavaScriptContent.GetContent(info);
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

            if (_extension == ".lua")
                return true;

            return false;
        }
    }

    public class LuaToJavaScriptContent
    {
        public static string GetContent(FileInfo info)
        {
            string fileName = Path.GetFileNameWithoutExtension(info.Name);
            if (fileName == "GameStart")
                return GetContent_GameStart();
            else if (fileName.IndexOf("Game_") >= 0)
                return GetContent_GameProtocol(info);
            else
                return GetContent_Default(info);
        }

        // 內容解析------
        private static string GetContent_GameStart()
        {
            string content = "cc.Class({" + "\n";
            content += "extends: cc.Component," + "\n";
            content += "\n";
            content += "\tproperties:{" + "\n";
            content += "\n";
            content += "\t}," + "\n";
            content += "\n";
            content += "\tonLoad() {" + "\n";
            content += "\t\tgameGlobal.initSchedule(this)" + "\n";
            content += "\t}," + "\n";
            content += "\n";
            content += "\tstart() {" + "\n";
            content += "\n";
            content += "\t}," + "\n";
            content += "\n";
            content += "\tupdate(dt) {" + "\n";
            content += "\n";
            content += "\t}," + "\n";
            content += "\n";
            content += "\tonDestroy() {" + "\n";
            content += "\n";
            content += "\t}," + "\n";
            content += "});";

            return content;
        }

        private static string GetContent_GameProtocol(FileInfo info)
        {
            string fileName = Path.GetFileNameWithoutExtension(info.Name);
            string scriptContent = "";

            string text = LuaToJavaScriptTool.LoadTxt(info.FullName);
            LuaToJavaScriptTool.ParseTxt(text, (field) =>
            {

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

        private static string GetContent_Default(FileInfo info)
        {
            string fileName = Path.GetFileNameWithoutExtension(info.Name);

            string declareContent = "";
            string functionContent = "";
            string annotationContent = "";

            // 區域階層判斷用
            List<string> inPart = new List<string>();
            // 紀錄無法轉換程式碼從哪個階層開始
            int isUnableChange = -1;
            bool annotationPart = false;
            int rowIndex = 0;
            string text = LuaToJavaScriptTool.LoadTxt(info.FullName);
            LuaToJavaScriptTool.ParseTxt(text, (field) =>
            {
                rowIndex = rowIndex + 1;
                string changeContent = field;

                Debug.Log(rowIndex + ">> " + field);

                // 解析內容用
                string parseContent = field.Replace("\\\"", "");
                // 移除字串內容
                int startIndex = -1;
                while (parseContent.IndexOf("\"", startIndex +1) >= 0)
                {
                    if (startIndex == -1)
                        startIndex = parseContent.IndexOf("\"", startIndex +1);
                    else
                    {
                        int length = parseContent.IndexOf("\"", startIndex +1) - startIndex +1;
                        parseContent = parseContent.Replace(parseContent.Substring(startIndex, length) ,"");
                        startIndex = -1;
                    }
                }
                parseContent = parseContent.Replace("(", " ");
                parseContent = parseContent.Replace(")", " ");
                parseContent = parseContent.Replace("{", " ");
                parseContent = parseContent.Replace("}", " ");
                parseContent = parseContent.Replace(",", " ");
                parseContent = parseContent.Replace("=", " ");
                parseContent = parseContent.Replace("\t", "");
                char[] splitChars = { ' ' };
                string[] splitContent = parseContent.Split(splitChars, System.StringSplitOptions.RemoveEmptyEntries);

                // 註解轉換
                changeContent = changeContent.Replace("--", "//");
                changeContent = changeContent.Replace("//[[", "/*");
                if (annotationPart == true)
                    changeContent = changeContent.Replace("]]", "*/");
                // 開始區域註解程式碼
                if (CheckAnnotationPartStart(field) == true)
                    annotationPart = true;

                try
                {
                    if (field == "local CallAllInBrod=function(data)")
                        Debug.Log("stop");

                    // 開始區域需重新編寫內容
                    List<string> partContent = CheckPart(splitContent);
                    if (isUnableChange < 0)
                        if (partContent.Count > 0)
                            if (CheckUnableChange(changeContent) == true)
                                isUnableChange = inPart.Count;

                    // 註解程式碼不做任何轉換動作
                    if (annotationPart == false && CheckAnnotation(field) == false)
                    {
                        foreach(string e in partContent)
                            inPart.Add(e);

                        // 程式語法轉換
                        changeContent = changeContent.Replace("{", "[");
                        changeContent = changeContent.Replace("}", "]");
                        changeContent = changeContent.Replace("--", "//");
                        changeContent = changeContent.Replace("~=", "!=");
                        changeContent = changeContent.Replace("print(", "console.log(");
                        changeContent = changeContent.Replace("nil", "null");
                        changeContent = changeContent.Replace(" or ", " || ");
                        changeContent = changeContent.Replace(" and ", " && ");

                        if (changeContent.IndexOf("...") < 0)
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
                        changeContent = changeContent.Replace(":GetComponent(\"Animator\")", ".getComponent(cc.Animation)");
                        changeContent = changeContent.Replace(":GetComponent(\"GridLayoutGroup\")", ".getComponent(cc.Layout)");
                        changeContent = changeContent.Replace(":GetComponent(\"ParticleSystem\")", ".getComponent(cc.ParticleSystem)");
                        changeContent = changeContent.Replace(":GetComponent(\"Slider\")", ".getComponent(cc.Slider)");
                        changeContent = changeContent.Replace(":GetComponent(\"Mask\")", ".getComponent(cc.Mask)");
                        changeContent = changeContent.Replace(":GetComponent(\"SkeletonGraphic\")", ".getComponent(sp.Skeleton)");
                        changeContent = changeContent.Replace(":GetComponent(", ".getComponent(");
                        changeContent = changeContent.Replace("onClick:AddListener(", "node.on(\'click\',");
                        changeContent = changeContent.Replace(":SetActive", ".active =");
                        changeContent = changeContent.Replace(":SetParent", ".parent =");
                        changeContent = changeContent.Replace(":SetInteger", ".SetInteger");
                        changeContent = changeContent.Replace(":SetBool", ".SetBool");
                        changeContent = changeContent.Replace("childCount", "children.length");
                        changeContent = changeContent.Replace("gameGlobal", "GameG");
                        changeContent = changeContent.Replace("CS.UISpriteManager.Instance:SetImageSprite", "GameG.SetImageSprite");
                        changeContent = changeContent.Replace("CS.UnityEngine.Quaternion.identity", "cc.v3(0, 0, 0)");
                        changeContent = changeContent.Replace("CS.UnityEngine.Vector3.zero", "cc.v3(0, 0, 0)");
                        changeContent = changeContent.Replace("CS.UnityEngine.Vector3.one", "cc.v3(1, 1, 1)");
                        changeContent = changeContent.Replace("CS.UnityEngine.Vector2", "cc.v2");
                        changeContent = changeContent.Replace("CS.UnityEngine.Vector3", "cc.v3");
                        changeContent = changeContent.Replace("CS.UnityEngine.Color", "cc.Color");
                        changeContent = changeContent.Replace("CS.SoundManager.Instance:", "SoundManager.");
                        changeContent = changeContent.Replace("CS.UnityEngine.GameObject.Instantiate", "cc.instantiate");
                        changeContent = changeContent.Replace("CS.UnityEngine.GameObject.Find", "cc.find");
                        changeContent = changeContent.Replace(".anchoredPosition", ".position");
                        changeContent = changeContent.Replace(".sizeDelta.x", ".width");
                        changeContent = changeContent.Replace(".sizeDelta.y", ".height");
                        changeContent = changeContent.Replace(".localPosition", ".position");
                        changeContent = changeContent.Replace(".localScale", ".scale");
                        changeContent = changeContent.Replace(".localRotation", ".eulerAngles");
                        changeContent = changeContent.Replace("gameGlobal", "GameG");
                        changeContent = changeContent.Replace("AnimationState:SetAnimation", "setAnimation");
                        changeContent = changeContent.Replace("AnimationState:AddAnimation", "addAnimation");

                        // 透過解析轉換
                        changeContent = ChangeRequire(changeContent);
                        changeContent = ChangeFind(changeContent);
                        changeContent = ChangeLocalFunction(changeContent, inPart.Count);
                        changeContent = ChangeFunction(changeContent);
                        changeContent = ChangeForeach(changeContent);
                        changeContent = ChangeFor(changeContent);
                        changeContent = ChangeLength(changeContent);
                        changeContent = ChangeIf(changeContent);
                        changeContent = ChangeElse(changeContent);
                        changeContent = ChangeElseIf(changeContent);
                        changeContent = ChangeWhile(changeContent);
                        changeContent = ChangeGetChild(changeContent);
                        changeContent = ChangeAddClickListener(changeContent);
                        changeContent = ChangeNot(changeContent);
                    }
                }
                catch
                {
                    Debug.LogError(fileName + ":" + rowIndex + ">> " + field);
                }

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

                // 註解內容 (會保留至下段內容時寫入)
                if (annotationPart == true || CheckAnnotation(field) == true)
                {
                    annotationContent += changeContent + "\n";
                }
                // 宣告內容
                else if (inPart.Count == 0)
                {
                    if (field.IndexOf("require") >= 0 && field.IndexOf("Module") >= 0)
                        changeContent = "";

                    if (field.IndexOf("mmodule") >= 0)
                        changeContent = "";

                    if (changeContent.IndexOf("return") >= 0)
                        changeContent = "";

                    if (string.IsNullOrEmpty(annotationContent) == false)
                    {
                        declareContent += annotationContent;
                        annotationContent = "";
                    }

                    changeContent = changeContent.Replace("local ", "var ");

                    // 省略過多空白
                    string checkSpace = changeContent.Replace("\t", "");
                    checkSpace = checkSpace.Replace(" ", "");
                    if (string.IsNullOrEmpty(checkSpace) == false)
                        declareContent += changeContent + "\n";
                }
                // 涵式內容
                else
                {
                    if (string.IsNullOrEmpty(annotationContent) == false)
                    {
                        functionContent += annotationContent;
                        annotationContent = "";
                    }

                    if (inPart.Count == 1 && inPart[0] == "fun")
                        changeContent = changeContent.Replace("function ", "");

                    if (CheckEnd(splitContent) == true)
                    {
                        if (inPart.Count == 1)
                            changeContent = changeContent.Replace("end", "},\n");
                        else
                            changeContent = changeContent.Replace("end", "}");
                    }

                    changeContent = changeContent.Replace("local ", "let ");
                    functionContent += "\t" + changeContent + "\n";
                }

                if (annotationPart == false && CheckAnnotation(field) == false)
                {
                    if (CheckEnd(splitContent) == true)
                    {
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
                Debug.Log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~inPart.Count:" + inPart.Count + "     //isUnableChange:" + isUnableChange + "\n\n" + GetContent(fileName, declareContent, functionContent));
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

        private static bool CheckEnd(string[] splitContent)
        {
            for (int i = 0; i < splitContent.Length; ++i)
                if (splitContent[i] == "end")
                    return true;

            return false;
        }

        private static List<string> CheckPart(string[] splitContent)
        {
            List<string> list = new List<string>();
            // 判斷階層
            for (int i = 0; i < splitContent.Length; ++i)
            {
                // function start
                if (splitContent[i] == "function")
                    list.Add("fun");

                // while (...) do
                if (splitContent[i] == "while")
                    list.Add("while");

                // if (...)then
                if (splitContent[i] == "if")
                    list.Add("if");
                if (splitContent[i].IndexOf("if(") >= 0)
                    list.Add("if");

                // for
                if (splitContent[i] == "for")
                    list.Add("for");
                if (splitContent[i] == "for(")
                    list.Add("for");
                // do
                if (splitContent[i] == "do") {
                    if(list.Count > 0 && list[list.Count - 1] != "for")
                        list.Add("do");
                    else if (list.Count == 0)
                        list.Add("do");
                }
            }
            return list;
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
                string startPart = "";
                string endPart = content;
                int indexEqual = content.IndexOf("=");
                if (indexEqual >= 0)
                {
                    startPart = content.Substring(0, indexEqual);
                    endPart = content.Substring(indexEqual);
                }
                for (int i = 0; i < arrayFind.Count; ++i)
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

        private static string ChangeLocalFunction(string content,int inPartCount)
        {
            int indexFun = content.IndexOf("local function ");
            if (indexFun < 0)
                return content;

            if (inPartCount == 1)
            {
                content = content.Replace("local function ", "");
                int indexEnd = content.IndexOf(")", indexFun);
                string stringEnd = "{";
                content = content.Insert(indexEnd + stringEnd.Length, stringEnd);
            }
            else
            {
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

                content = content.Replace("function", "");
                content = content.Replace(splitContent[arrayFun + 1], splitContent[arrayFun + 1] + " = function");
            }

            return content;
        }

        private static string ChangeFunction(string content)
        {
            int indexFun1 = content.IndexOf("function ");
            int indexFun2 = content.IndexOf("function(");
            if (indexFun1 < 0 && indexFun2 < 0)
                return content;

            string stringEnd = "{";
            if (indexFun1 >= 0)
            {
                int indexEnd = content.IndexOf(")", indexFun1);
                content = content.Insert(indexEnd + stringEnd.Length, stringEnd);
            }
            if (indexFun2 >= 0)
            {
                int indexEnd = content.IndexOf(")", indexFun2);
                content = content.Insert(indexEnd + stringEnd.Length, stringEnd);
            }

            return content;
        }

        private static string ChangeForeach(string content)
        {
            int indexFor = content.IndexOf("for ");
            if (indexFor < 0)
                return content;

            int indexInPairs = content.IndexOf("in pairs");
            int indexInIpairs = content.IndexOf("in ipairs");
            if (indexInPairs < 0 && indexInIpairs < 0)
                return content;

            char[] delimiterChars = { ' ', ',' };
            int indexDo = content.IndexOf("do");
            string lastContent = content.Substring(indexDo + "do".Length);
            string parseContent = content.Substring(0, indexDo);
            parseContent = parseContent.Replace("\t", "");
            parseContent = parseContent.Replace("for", "");
            parseContent = parseContent.Replace("do", "");
            parseContent = parseContent.Replace("in pairs", "");
            parseContent = parseContent.Replace("in ipairs", "");
            string[] splitContent = parseContent.Split(delimiterChars, System.StringSplitOptions.RemoveEmptyEntries);
            string keyContent = splitContent[0];
            string valueContent = splitContent[1];
            string listContent = splitContent[2];

            string tempContent = listContent.Replace("(", "");
            tempContent = tempContent.Replace(")", "");
            content = "for(let " + keyContent + " in " + listContent + "){ \n";
            content += "\tlet " + valueContent + " = " + tempContent + "[" + keyContent + "] \n";
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

            if (endContent.IndexOf("#") >= 0)
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

            content = "for(let " + declareContent + " = " + startContent + "; " + declareContent + " <= " + endContent + "; ++"+ declareContent + "){";
            content += lastContent;

            return content;
        }

        private static string ChangeLength(string content)
        {
            int requireIndex = content.IndexOf("#");
            if (requireIndex < 0)
                return content;

            char[] delimiterChars = { ' ', ',', ';', '=', '>', '<', '{', '}' };
            string parseContent = content.Replace("\t", "");
            string[] splitContent = parseContent.Split(delimiterChars, System.StringSplitOptions.RemoveEmptyEntries);
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

        private static string ChangeIf(string content)
        {
            int indexElseIf = content.IndexOf("elseif");
            if (indexElseIf >= 0)
                return content;

            int indexIf = content.IndexOf("if");
            if (indexIf < 0)
                return content;

            if (content.IndexOf("(", indexIf, 5) < 0)
            {
                content = content.Replace("if ", "if(");
                content = content.Replace("then", "){");
            }
            else
                content = content.Replace("then", "{");

            return content;
        }

        private static string ChangeElseIf(string content)
        {
            string keyElseIf = "elseif";
            int indexElseIf = content.IndexOf(keyElseIf);
            if (indexElseIf < 0)
                return content;
            
            int indexThen = content.IndexOf("then");
            if (content.IndexOf("(", indexElseIf, keyElseIf.Length + 5) < 0)
            {
                content = content.Replace("if", "if(");
                content = content.Replace("then", "){");
            }
            else
                content = content.Replace("then", "{");

            content = content.Replace("elseif", "else if");
            content = "} \n" + content + "\n";

            return content;
        }

        private static string ChangeElse(string content)
        {
            int indexElseIf = content.IndexOf("elseif");
            if (indexElseIf >= 0)
                return content;

            int indexElse = content.IndexOf("else");
            if (indexElse < 0)
                return content;

            content = "} \n" + content + "{";

            return content;
        }

        private static string ChangeWhile(string content)
        {
            string keyWhile = "while";
            int indexWhile = content.IndexOf(keyWhile);
            if (indexWhile < 0)
                return content;

            if (content.IndexOf("(", indexWhile, keyWhile.Length + 5) < 0)
            {
                content = content.Replace("while", "while(");
                content = content.Replace("do", "){");
            }
            else
                content = content.Replace("do", "{");

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

        private static string ChangeAddClickListener(string content)
        {
            int index = content.IndexOf(":AddClickListener");
            if (index < 0)
                return content;

            content = content.Replace(":AddClickListener", ".node.on(\'click\',");
            content += "\n" + "GameG.PlayGameSound(\"se_click\")";

            return content;
        }

        private static string ChangeNot(string content)
        {
            int indexIf = content.IndexOf("if");
            if (indexIf < 0)
                return content;

            int indexNot = content.IndexOf("not ");
            if (indexNot < 0)
                return content;


            char[] delimiterChars = { ' ', '(', ')', '{', '}' };
            string[] splitContent = content.Split(delimiterChars, System.StringSplitOptions.RemoveEmptyEntries);

            int arrayNotIndex = -1;
            for (int i = 0; i < splitContent.Length; ++i)
                if (splitContent[i] == "not")
                    arrayNotIndex = i;
                        
            int subLength = content.IndexOf(splitContent[arrayNotIndex + 1], indexNot) + splitContent[arrayNotIndex + 1].Length;
            string lastContent = content.Substring(subLength);
            string parseContent = content.Substring(0, subLength);
            parseContent = parseContent.Replace(splitContent[arrayNotIndex + 1], splitContent[arrayNotIndex + 1] + " != null");
            parseContent = parseContent.Replace("not ", "");

            content = parseContent + lastContent;
            return content;
        }

        private static bool CheckUnableChange(string content)
        {
            if (content.IndexOf(":SetAsFirstSibling") >= 0)
                return true;

            if (content.IndexOf(":SetAsLastSibling") >= 0)
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

            if (content.IndexOf(":SetLoops") >= 0)
                return true;

            if (content.IndexOf(":SetEase") >= 0)
                return true;

            if (content.IndexOf(":DOLocalMove") >= 0)
                return true;

            if (content.IndexOf(":DOColor") >= 0)
                return true;

            if (content.IndexOf(":DOScale") >= 0)
                return true;

            return false;
        }
    }

    public class LuaToJavaScriptTool
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
