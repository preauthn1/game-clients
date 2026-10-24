using UnityEditor;
using UnityEngine;
using System;

namespace PSDUIImporter
{
    //------------------------------------------------------------------------------
    // class definition
    //------------------------------------------------------------------------------
    public class PSDImportMenu : Editor
    {

        [MenuItem("Tools/导入UI", false, 100)]
        static public void ImportHogSceneMenuItem()
        {
            string inputFile = EditorUtility.OpenFilePanel("选择导入的UI文件", Application.dataPath, "xml");
            ImportUI(inputFile);
        }


        [MenuItem("Assets/导入UI", false, 100)]
        static public void ImportHogSceneMenuItem_Assets()
        {
            string inputFile = AssetDatabase.GetAssetPath(Selection.activeObject);
            inputFile = Application.dataPath + inputFile.Replace("Assets", string.Empty);
            ImportUI(inputFile);
        }

        public static void ImportUI(string inputFile)
        {
            if ((inputFile != null) && (inputFile != "") && (inputFile.StartsWith(Application.dataPath)))
            {
                PSDImportCtrl import = new PSDUIImporter.PSDImportCtrl(inputFile);
                import.BeginDrawUILayers();
                import.BeginSetUIParents();
            }
            GC.Collect();
        }
    }
}
