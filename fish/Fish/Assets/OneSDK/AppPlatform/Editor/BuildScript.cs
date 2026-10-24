using UnityEngine;
using UnityEditor;
using example.invalid;
using System.Collections.Generic;
using System;
using System.Xml;
using System.Linq;
using Environment = VMSoft.Configuration.Environment;
using UnityEditor.SceneManagement;
using UnityEditor.Callbacks;
using System.Threading;

#if UNITY_IOS
using UnityEditor.iOS.Xcode;

  //this is wanted.
#endif

namespace VMSoft.Utils
{
	/// <summary>
	/// Slot machine build editor.
	/// 
	/// http://example.invalid/learn/tutorials/modules/intermediate/editor/menu-items
	/// Menu are group according to their priority in an increment of 50.
	/// 
	/// Working on this editor build script to add feature for the jenkins build. (CI)
	/// </summary>
	[InitializeOnLoad]
	public static class BuildScript
	{

		#region PLATFORM definitions

#if UNITY_IOS
		static BuildTarget buildTarget = BuildTarget.iOS;
		const string APP_PATH = EXPORT_PATH + "/ios";
		const string BUILD_PATH = EXPORT_PATH + "/ios/rooms/";
		const string PREFIX = "iOS_";
#elif UNITY_ANDROID
        static BuildTarget buildTarget = BuildTarget.Android;
		const string APP_PATH = EXPORT_PATH + "/android";
        const string BUILD_PATH = EXPORT_PATH + "/android/rooms/";
        const string PREFIX = "Android_";

#elif UNITY_WEBGL
        static BuildTarget buildTarget = BuildTarget.WebGL;
        const string APP_PATH = EXPORT_PATH + "/webgl";
        const string BUILD_PATH =  EXPORT_PATH + "/webgl/";
        const string PREFIX = "WebGL_";

#elif UNITY_STANDALONE_OSX
        //Both OSX and the PC build.. should be the same they shared common files
        static BuildTarget buildTarget = BuildTarget.StandaloneOSXIntel64; //OSX intel.. definitely only this we want tos uport.
        const string APP_PATH = EXPORT_PATH + "/mac";            //output the main app itself
        const string BUILD_PATH =  EXPORT_PATH + "/mac/rooms";   //output the asset bundle.
        const string PREFIX = "mac_";

#elif UNITY_STANDALONE
        static BuildTarget buildTarget = BuildTarget.StandaloneWindows; 
		const string APP_PATH = EXPORT_PATH + "/pc";
        const string BUILD_PATH =  EXPORT_PATH + "/pc/rooms";
        const string PREFIX = "pc_";

#else
#error YOU HAVE A NOT YET SUPPORTED PLATFORM? XD What are you doing?
#endif
		const string EXPORT_PATH = "Build";

		//current option for the environment.
		const string KEY_CURRENT_OPT_ENV = "CURRENT_OPT_ENV";
		const string KEY_CURRENT_FLAVOUR = "CURRENT_FLAVOUR";

		const string OPT_DEV = "VMSoft/DEV";
		const string OPT_UAT = "VMSoft/UAT";
		const string OPT_PROD = "VMSoft/PROD";

		public const string filepath = "Assets/OneSDK/BuildFlavor/";
		public const string targetReplaceFolderName = "current/";

		static FlavourConfig currentFlavour;

        //Scripting Define Symbols<-- use this to determine the code (also correlated with the 'PREPROCESSOR'..
        //can't start with Numeric.. & also serves as menu key
        const string SDS_1SGAMES    = "1sgames";
		const string SDS_LIVE22     = "live22";
		const string SDS_GAMINGSOFT = "gamingsoft";
		const string SDS_SLOTSFT     = "slotsft";
		static string[] validFlavours = { SDS_1SGAMES, SDS_LIVE22, SDS_GAMINGSOFT, SDS_SLOTSFT };

		static Dictionary<string, FlavourConfig> appConfigDictionary = new Dictionary<string, FlavourConfig> () { 
			{ SDS_1SGAMES, new FlavourConfig("com.vmsoft.sm", "1sgames",
				"1sGames", "1sUAT", "1sDEV",filepath + "AppIcon-1sgames.png")},

            { SDS_LIVE22, new FlavourConfig("example.invalid",  "live22",
				"Live22", "Live22UAT", "Live22DEV",filepath + "AppIcon-live22.png")},

            { SDS_GAMINGSOFT, new FlavourConfig("example.invalid", "gamingsoft",
				"GamingSoft", "GsUAT", "GsDEV", filepath + "AppIcon-gamingsoft.png")},

			{ SDS_SLOTSFT, new FlavourConfig("example.invalid", "slotsft",
				"Slots", "SlotsUAT", "SlotsDev", filepath + "AppIcon-slotsft.png")},
        };


        //Class to hold our flavour (aka Label) configuration
        public class FlavourConfig
        {
            public string appId;
            // Default Bundle Identifier for the Games
            public string name;
            //the folder name as well.
            public string prodName;
            //Default Product Name - 1sGames.
            public string prodName_UAT;
            public string prodName_DEV;
            public string appIconPath;

            public FlavourConfig (string appId, string flavorFolderName, string prodName,
                                          string prodNameUat, string prodNameDev, string appIconPath)
            {
                this.appId = appId;
                this.name = flavorFolderName;
                this.prodName = prodName;
                prodName_UAT = prodNameUat;
                prodName_DEV = prodNameDev;
                this.appIconPath = appIconPath;
            }
        }

        static Texture2D[] GetTexture2DIcon(string path) {
            return new Texture2D[] { (Texture2D)AssetDatabase.LoadAssetAtPath<Texture2D>(path)};
        }

        ////the static initializer
        static BuildScript()
        {
            //Getting the value.
            string currentFlavourKey = EditorPrefs.GetString(KEY_CURRENT_FLAVOUR, SDS_1SGAMES);

            //just need to make sure currentFlavourKey is a valid one.
            currentFlavourKey = ValidateFlavour(currentFlavourKey);

            //string currentFlavourSymbol = PlayerSettings.GetScriptingDefineSymbolsForGroup(EditorUserBuildSettings.selectedBuildTargetGroup);

            UpdateFlavour(currentFlavourKey); //always set the flavour right. even after recompiling.. 

           // if (currentFlavourKey != currentFlavourSymbol)
            //{
                //correct the define symbols if not matching..
                //PlayerSettings.SetScriptingDefineSymbolsForGroup(EditorUserBuildSettings.selectedBuildTargetGroup, currentFlavourKey);

                //apply the correct environment
				//ApplyEnvironment(GetCurrentEnv());
           // }
        }

        static string ValidateFlavour(string flavorKey)
        {
            bool isMatched = false;
            foreach (string validKeys in validFlavours)
            {
                if (flavorKey == validKeys)
                {
                    isMatched = true;
                    break;
                }
            }

            if (!isMatched)
            {
                Debug.LogWarning("found invalid flavour:" + flavorKey + " change to default one: " + validFlavours[0]);
                return validFlavours[0];
            }
            return flavorKey;
        }

        static void UpdateFlavour(string key)
        {
            currentFlavour = appConfigDictionary[key];
            EditorPrefs.SetString(KEY_CURRENT_FLAVOUR, key);
        }

        #endregion

        static void PrepareOutputDirectory(string path = BUILD_PATH)
        {
            Debug.Log("Preparing the output directory");
            Directory.CreateDirectory("./" + path);
        }


        static string GetProjectName()
        {
            string[] s = Application.dataPath.Split('/');
            return s[s.Length - 2];
        }

        /// <summary>
        /// Finds the enabled editor scenes. (In the Build Setting Scenes.
        /// </summary>
        /// <returns>The enabled editor scenes.</returns>
        static string[] FindEnabledEditorScenes()
        {
            List<string> editorScenes = new List<string>();
            foreach (EditorBuildSettingsScene scene in EditorBuildSettings.scenes)
            {
                if (!scene.enabled)
                    continue;
                editorScenes.Add(scene.path);
            }
            return editorScenes.ToArray();
        }




        #region 00-Environment
        [MenuItem(OPT_DEV, false, 1)]
        static void ToggleEnv2Dev()
        {
            //ChangeEnvironment(Environment.DEV);
            ApplyEnvironment(Environment.DEV);
          
        }

        [MenuItem(OPT_DEV, true, 1)]
        static bool VadidateToggleEnv2Dev()
        {
            Menu.SetChecked(OPT_DEV, PlayerSettings.applicationIdentifier.EndsWith("dev", StringComparison.Ordinal));
            return true; //mark it available..
        }

        //--------------------------------------------------

        [MenuItem(OPT_UAT, false, 2)]
        static void ToggleEnv2UAT()
        {
            ApplyEnvironment(Environment.UAT);
        }

        [MenuItem(OPT_UAT, true, 2)]
        static bool VadidateToggleEnv2UAT()
        {
            Menu.SetChecked(OPT_UAT, PlayerSettings.applicationIdentifier.EndsWith("uat", StringComparison.Ordinal));
            return true; //mark it available..
        }

        //--------------------------------------------------

        [MenuItem(OPT_PROD, false, 3)]
        static void ToggleEnv2PROD()
        {
            ApplyEnvironment(Environment.PROD);
        }

        [MenuItem(OPT_PROD, true, 3)]
        static bool VadidateToggleEnv2PROD()
        {
            bool isProd = PlayerSettings.applicationIdentifier.EndsWith("app", StringComparison.Ordinal)
                            || PlayerSettings.applicationIdentifier.EndsWith("sm", StringComparison.Ordinal);
            Menu.SetChecked(OPT_PROD, isProd);
            return true; //mark it available..
        }

        #endregion

        //First set.. 1-49..
        #region 01-Tools:Reset 
        [MenuItem("VMSoft/Clear Caches", false, 51)]
        static void ClearCache()
        {
			Caching.ClearCache();
            Debug.Log("All Game Caches Cleared!.");
        }

        /** Reset the PlayerPreferences */
        [MenuItem("VMSoft/Reset Preferences", false, 52)]
        static void ClearPlayerPref()
        {
            PlayerPrefs.DeleteAll();
            //EditorPrefs.DeleteAll();
            Debug.Log("Player Preference Reset! Done.");
        }

        /// <summary>
        /// Purely Testing New Function
        /// </summary>
        //	[MenuItem ("VMSoft/Test Function X", false, 3)]
        //	static void TestFunctionX ()
        //	{
        //		Texture2D icon = AssetDatabase.LoadAssetAtPath("Assets/Sprites/SlotMachineLobby/lobby/cashicon.png", typeof(Texture2D)) as Texture2D;
        //		Texture2D[] typeIcons = new Texture2D[1]{icon};
        //		PlayerSettings.SetIconsForTargetGroup (EditorUserBuildSettings.selectedBuildTargetGroup, typeIcons);
        //		Debug.Log ("icon set>");
        //		UnityEngine.Debug.Log ("Function X Done!");
        //	}


        #endregion



        #region 02-Tools:Build

        [MenuItem("Assets/VMSoft: Build Scene(s)", false, 51)]
        public static void CreateAssetBundle()
        {
            PrepareOutputDirectory();

            AssetBundleBuild[] assetBundleBuild = new AssetBundleBuild[Selection.assetGUIDs.Length];

            string selectedFileName = "";
            for (int i = 0; i < Selection.assetGUIDs.Length; i++)
            {

                string selectedObjectPath = AssetDatabase.GetAssetPath(Selection.objects[i]);
                string fileName = Selection.objects[i].name;
                Debug.Log("selectedObjectPath: " + selectedObjectPath + " filename: " + fileName);
                string[] level = new string[] { selectedObjectPath };

                assetBundleBuild[i].assetBundleName = PREFIX + fileName + ".unity3d";
                assetBundleBuild[i].assetNames = level;

                selectedFileName += fileName;

                if (i != Selection.assetGUIDs.Length - 1)
                    selectedFileName += "/";
            }

            EditorPrefs.SetString("DefaultPackerPolicySample_sceneName", selectedFileName);
            UnityEditor.EditorSettings.spritePackerMode = UnityEditor.SpritePackerMode.BuildTimeOnly;
//            UnityEditor.Sprites.Packer.SelectedPolicy = "RoomBuildDefaultPackerPolicy";
            UnityEditor.Sprites.Packer.RebuildAtlasCacheIfNeeded(buildTarget, true, UnityEditor.Sprites.Packer.Execution.ForceRegroup);

            BuildPipeline.BuildAssetBundles(BUILD_PATH, assetBundleBuild, BuildAssetBundleOptions.ChunkBasedCompression, buildTarget);
            EditorUtility.RevealInFinder(BUILD_PATH);
        }

        const string BUILD_WEBGL = "Assets/VMSoft: Build WebGL";
        [MenuItem(BUILD_WEBGL, false, 51)]
        public static void BuildWebGL()
        {
            PrepareOutputDirectory();

            int count = Selection.assetGUIDs.Length;
            //AssetBundleBuild[] assetBundleBuild = new AssetBundleBuild[count];
            string[] level = new string[count];
            for (int i = 0; i < count; i++)
            {

                string selectedObjectPath = AssetDatabase.GetAssetPath(Selection.objects[i]);
                string fileName = Selection.objects[i].name;
                string outputMessage = string.Format("selectedObjectPath: {0}, \nfilename: {1}",
                    selectedObjectPath,
                    fileName
                );
                Debug.Log(outputMessage);

                level[i] = selectedObjectPath;
                //assetBundleBuild[i].assetBundleName = PREFIX + fileName + ".unity3d";
                //assetBundleBuild[i].assetNames = level;

                string outputPath = BUILD_PATH + fileName + "/";
                Debug.Log("Build Path:" + outputPath);
                BuildPipeline.BuildPlayer(level, outputPath, BuildTarget.WebGL, BuildOptions.None);
            }

            Debug.Log("total item to build: " + count);
            EditorUtility.RevealInFinder(BUILD_PATH);
        }



        #region Xcode Plist - Allow App Query
		/// <summary>
		/// This is Automatically called after the BuildPipeline.BuildPlayer!
		/// </summary>
		/// <param name="buildTarget">Build target.</param>
		/// <param name="pathToBuiltProject">Path to built project.</param>
        [PostProcessBuild]
        public static void PostProcessForBuild(BuildTarget buildTarget, string pathToBuiltProject)
        {
			Debug.Log("Get into PostProcessing For Build");

        #if UNITY_IOS
            if (buildTarget == BuildTarget.iOS)
            {
				Debug.Log("Run iOS Build PostProcessing");
				//============= [ Change the Xcode Project ] =============== 
				string projPath = pathToBuiltProject + "/Unity-iPhone.xcodeproj/project.pbxproj";
				PBXProject proj = new PBXProject();

				
				proj.ReadFromString(File.ReadAllText(projPath));
				string target = proj.TargetGuidByName("Unity-iPhone");
				proj.SetBuildProperty(target, "ENABLE_BITCODE", "false");

				proj.AddFrameworkToProject(target,"UserNotifications.framework",false);


				File.WriteAllText(projPath, proj.WriteToString());



                //===========[ Change the Plist ] =======================
                string plistPath = pathToBuiltProject + "/Info.plist";
                PlistDocument plist = new PlistDocument();
                plist.ReadFromString(File.ReadAllText(plistPath));

                // Get root
                PlistElementDict rootDict = plist.root;

                //Allow Query the Application Url Scheme
                string key = "LSApplicationQueriesSchemes";
                PlistElementArray lsApplicationQueriesArray = rootDict.CreateArray(key);
                lsApplicationQueriesArray.AddString("allbet");

                //Change the value of CFBundleVersion in XcodePlist
                var buildKey = "UIBackgroundModes";
                rootDict.CreateArray(buildKey).AddString("remote-notification");

                // Write to file
                File.WriteAllText(plistPath, plist.WriteToString());
            }
        #endif

			Debug.Log("<color=green>Build Complete</color>; Showing in File Explorer/Finder View");
			EditorUtility.RevealInFinder(pathToBuiltProject);	
        }
        #endregion

        [MenuItem(BUILD_WEBGL, true, 51)]
        static bool VerifyBuildWebGL()
        {
            return EditorUserBuildSettings.activeBuildTarget == BuildTarget.WebGL;
        }


        #endregion



        //[MenuItem ("VMSoft/Continuous Integration/Experimental/iOS", false, 103)]
        static void PerformiOSBuild()
        {
            Debug.Log("Does nothing currently");
            //Process p = new Process();
            //p.StartInfo.FileName="/Users/paperclipz/Development/UnityDev/Unity/SlotMachineUnityV1/unityRunScript.sh";
            //p.Start();
            //		string iospath = "Build";
            //		Directory.CreateDirectory ("./" + iospath);
            //		EditorUserBuildSettings.SwitchActiveBuildTarget(BuildTarget.iPhone);
            //		BuildPipeline.BuildPlayer(GetScenePaths(), iospath,BuildTarget.iPhone,BuildOptions.None);

            /*
			 * Add the scripts code here..  for future reference.
			 * #!/bin/bash
#!step1= /Applications/Unity/example.invalid/Contents/MacOS/Unity -executeMethod ExportAssetBundles.PerformiOSBuild -quit

			step2= xcodebuild archive -project /Users/paperclipz/Development/UnityDev/Unity/SlotMachineUnityV1/Build/Unity-iPhone.xcodeproj -scheme Unity-iPhone -archivePath /Users/paperclipz/Development/UnityDev/Unity/SlotMachineUnityV1/Build/1sGames.xcarchive

			step3= xcodebuild -exportArchive -archivePath /Users/paperclipz/Development/UnityDev/Unity/SlotMachineUnityV1/Build/1sGames.xcarchive -exportPath /Users/paperclipz/Development/UnityDev/Unity/SlotMachineUnityV1/Build/1sGames -exportFormat ipa -exportProvisioningProfile "iOSTeam Provisioning Profile: *"

			echo $step2 wait step3
			*/
        }

        //[MenuItem ("VMSoft/Continuous Integration/Build/Android", false, 101)]
        private static void AndroidReleaseBuild()
        {
            Debug.Log("Poooooff~ function not ready for use yet");
        }

        //[MenuItem ("VMSoft/Continuous Integration/Build/iOS", false, 102)]
        private static void IOSReleaseBuild()
        {
            string target_dir = "CI_IOS_1sGames" + ".ipa";
            GenericBuild(FindEnabledEditorScenes(), target_dir, BuildTarget.iOS, BuildOptions.None);
        }




        #region BUILD-APP

        /// <summary>
        /// Generics the build.
        /// </summary>
        /// <param name="scenes">Scenes.</param>
        /// <param name="target_dir">Target dir.</param>
        /// <param name="build_target">Build target.</param>
        /// <param name="build_options">Build options.</param>
        static void GenericBuild(string[] scenes, string target_dir, BuildTarget build_target, BuildOptions build_options)
        {
            Debug.Log("target dir:" + target_dir);
            UnityEditor.EditorSettings.spritePackerMode = UnityEditor.SpritePackerMode.Disabled;

            EditorUserBuildSettings.SwitchActiveBuildTarget(build_target);
            BuildPipeline.BuildPlayer(scenes, target_dir, build_target, build_options);

            UnityEditor.EditorSettings.spritePackerMode = UnityEditor.SpritePackerMode.BuildTimeOnly;
        }

        [MenuItem("VMSoft/Make Android", false, 301)]
        static void MakeAndroidBuildDev()
        {
            MakeBuild(BuildTarget.Android);
        }

        [MenuItem("VMSoft/Make Android", true, 301)]
        static bool verifyAndroidBuildability()
        {
            return EditorUserBuildSettings.activeBuildTarget == BuildTarget.Android;
        }

        [MenuItem("VMSoft/Make PC", false, 302)]
        static void MakePCBuildDev()
        {
            MakeBuild(BuildTarget.StandaloneWindows, BuildOptions.ShowBuiltPlayer);
        }

        [MenuItem("VMSoft/Make PC", true, 302)]
        static bool verifyPCBuildability()
        {
            return EditorUserBuildSettings.activeBuildTarget == BuildTarget.StandaloneWindows;
        }

        [MenuItem("VMSoft/Make iOS", false, 303)]
        static void MakeIOSBuildDev()
        {
            MakeBuild(BuildTarget.iOS, BuildOptions.SymlinkLibraries);
        }

        [MenuItem("VMSoft/Make iOS", true, 303)]
        static bool verifyiOSBuildability()
        {
            return EditorUserBuildSettings.activeBuildTarget == BuildTarget.iOS;
        }

        [MenuItem("VMSoft/Make Mac", false, 304)]
        static void MakeMacBuildDev()
        {
            MakeBuild(BuildTarget.StandaloneOSXIntel64, BuildOptions.ShowBuiltPlayer);
        }

        [MenuItem("VMSoft/Make Mac", true, 304)]
        static bool verifyMacBuildability()
        {
            return (EditorUserBuildSettings.activeBuildTarget
                    == BuildTarget.StandaloneOSXIntel64 ||
                    EditorUserBuildSettings.activeBuildTarget
                    == BuildTarget.StandaloneOSXIntel);
        }

        #region SET: BuildFlavour

        //static void SetScriptingSymbol(string sdsFlavour){
        //    PlayerSettings.SetScriptingDefineSymbolsForGroup(BuildTargetGroup.Standalone, sdsFlavour);
        //    PlayerSettings.SetScriptingDefineSymbolsForGroup(BuildTargetGroup.Android, sdsFlavour);
        //    PlayerSettings.SetScriptingDefineSymbolsForGroup(BuildTargetGroup.iOS, sdsFlavour);
        //    PlayerSettings.SetScriptingDefineSymbolsForGroup(BuildTargetGroup.WebGL, sdsFlavour);
        //}

		static void FunctionUseFlavour(string flavour){
            //old flavour, current before update:
            Menu.SetChecked("VMSoft/"+currentFlavour.name, false); //put previous off.

            //switching to the new flavour..
			UpdateFlavour(flavour);
            string path = "VMSoft/"+ currentFlavour.name;
            //Debug.Log("path to check for the state: " + path);
            Menu.SetChecked(path, true); //put it on.

			UpdateAssetsInScene(currentFlavour.name);
            PlayerSettings.SetIconsForTargetGroup(BuildTargetGroup.Unknown, GetTexture2DIcon(currentFlavour.appIconPath));
			ApplyEnvironment(GetCurrentEnv());
		}
		static bool FunctionVerifyFlavour(){
			//string symbols = PlayerSettings.GetScriptingDefineSymbolsForGroup(EditorUserBuildSettings.selectedBuildTargetGroup);
            Menu.SetChecked("VMSoft/" + currentFlavour.name, true );
			return true; //mark it available..
		}

		[MenuItem("VMSoft/" + SDS_1SGAMES, false, 500)]
        static void Use1sGames(){ FunctionUseFlavour(SDS_1SGAMES);}
        [MenuItem("VMSoft/" + SDS_1SGAMES, true, 500)]
        static bool Verify1sGames(){return FunctionVerifyFlavour();}

		[MenuItem("VMSoft/" + SDS_LIVE22, false, 501)]
		static void UseLive22(){ FunctionUseFlavour(SDS_LIVE22);}
        [MenuItem("VMSoft/" + SDS_LIVE22, true, 501)]
        static bool VerifyLive22(){return FunctionVerifyFlavour();}

		[MenuItem("VMSoft/" + SDS_GAMINGSOFT, false, 502)]
		static void UseGamingSoft(){ FunctionUseFlavour(SDS_GAMINGSOFT);}
        [MenuItem("VMSoft/" + SDS_GAMINGSOFT, true, 502)]
        static bool VerifyGamingSoft(){return FunctionVerifyFlavour();}

		[MenuItem("VMSoft/" + SDS_SLOTSFT, false, 503)]
		static void UseSlotsFt(){ FunctionUseFlavour(SDS_SLOTSFT);}
        [MenuItem("VMSoft/" + SDS_SLOTSFT, true, 503)]
        static bool VerifySlotsFt(){return FunctionVerifyFlavour();}


        #endregion


        //[MenuItem("VMSoft/Tools/Change AndroidManifest", false, 9000)]
        static void ChangeAndroidManifest(string attrName = "com.vmsoft.sm.dev")
        {
            //Debug.Log ("About to Change Android Manifest");
            //Goal -> Asset/Plugin/Android/AndroidManifest.xml - com.vmsoft.sm --> modified -> com.vmsoft.sm.dev - saved -
            //write you code here..
            string targetAndroidManifestFile = "./Assets/Plugins/Android/AndroidManifest.xml";

            XmlDocument xmlDoc = new XmlDocument();
            xmlDoc.Load(targetAndroidManifestFile);
            //XmlNode nodeCategory = xmlDoc.SelectNodes("//manifest/application/receiver/intent-filter/category").Item(0);
            XmlNode nodeManifest = xmlDoc.SelectNodes("//manifest").Item(0);
            XmlNode nodePermission = xmlDoc.SelectNodes("//manifest/permission").Item(0);
            XmlNode nodeUserPermission = xmlDoc.SelectNodes("//manifest//uses-permission").Item(0);

            nodeManifest.Attributes["package"].Value = attrName;
            nodePermission.Attributes["android:name"].Value = attrName + ".permission.C2D_MESSAGE";
            nodeUserPermission.Attributes["android:name"].Value = attrName + ".permission.C2D_MESSAGE";
            //nodeCategory.Attributes["android:name"].Value = attrName;

            //		XDocument doc = XDocument.Load (targetAndroidManifestFile);
            //		XElement category = doc.Element ("manifest").Element ("application").Element ("receiver").Element ("intent-filter").Element ("category");
            //		XElement manifest = doc.Element ("manifest");
            //		XElement permission = manifest.Element ("permission");
            //		XElement userPermission = manifest.Element ("uses-permission");

            //		manifest.SetAttributeValue ("package", attrName);
            //		permission.SetAttributeValue ("{http://example.invalid/apk/res/android}name", attrName + ".permission.C2D_MESSAGE");
            //		userPermission.SetAttributeValue ("{http://example.invalid/apk/res/android}name", attrName + ".permission.C2D_MESSAGE");
            //		category.SetAttributeValue ("{http://example.invalid/apk/res/android}name", attrName);

            Debug.Log("Android Change Manifest result: " + xmlDoc.OuterXml);
            xmlDoc.Save(targetAndroidManifestFile);
            Debug.Log("saved!");
        }

		static System.Diagnostics.Stopwatch sWatch = new System.Diagnostics.Stopwatch();
        static void UpdateAssetsInScene(string folder)
        {
            string srcPath = filepath + folder + "/";
            string dstPath = filepath + targetReplaceFolderName;
            string message = string.Format("Switching Asset to {2}\nCopying file from {0} to {1}", srcPath, dstPath, folder);

            Debug.Log(message);

            //FileUtil.ReplaceFile(srcPath+backgroundName, dstPath+backgroundName );
            //FileUtil.ReplaceFile(srcPath+logoName, dstPath+logoName );
            //FileUtil.ReplaceFile(srcPath+logoBase, dstPath+logoBase );

            string[] file = example.invalid.Directory.GetFiles(dstPath);

            List<string> filesToRefreshed = new List<string>();
            for (int i = 0; i < file.Length; i++)
            {
                if (file[i].EndsWith("png", StringComparison.Ordinal) || file[i].EndsWith("jpg", StringComparison.Ordinal))
                {
                    string destFile = dstPath + Path.GetFileName(file[i]);
                    FileUtil.ReplaceFile(srcPath + Path.GetFileName(file[i]), destFile);
                    //Debug.Log("Refresh assets:" + destFile);
                    filesToRefreshed.Add(destFile);
                }
            }
            Debug.Log("Assets Replacement done!");

            //the process of refreshing the file that was changed.

            //alternative way to refresh the assets.. (this took a long time)
    //        foreach (string targetFile in filesToRefreshed)
    //        {
				//////sWatch.Reset();
				//////sWatch.Start();
    //            AssetDatabase.ImportAsset(targetFile); //import asset under this path
    //            AssetDatabase.ImportAsset(targetFile,
    //            ImportAssetOptions.ForceUpdate|ImportAssetOptions.ForceSynchronousImport);    
				//////sWatch.Stop();
				//////string recordedTime = string.Format("target file: {0}, takes {1}", targetFile, sWatch.ElapsedMilliseconds);

				//////Debug.Log(recordedTime);
    //        }
    //        filesToRefreshed.Clear();
             //import asset under this path
            AssetDatabase.ImportAsset(dstPath, ImportAssetOptions.ImportRecursive|ImportAssetOptions.ForceUpdate | ImportAssetOptions.ForceSynchronousImport);    
      
            //AssetDatabase.Refresh();
            //Debug.Log("Asset Replaced to <color=red>" + folder + "</color>");
        }


#region SET: Environment
		static Environment GetCurrentEnv(){
			string env=  EditorPrefs.GetString(KEY_CURRENT_OPT_ENV, OPT_DEV); //default to DEV if nothing.
			return (Environment)Enum.Parse(typeof(Environment), env);
		}

        static void ApplyEnvironment(string env)
        {
            Environment environment = (Environment)Enum.Parse(typeof(Environment), env);
            PlayerSettings.SetIconsForTargetGroup(BuildTargetGroup.Unknown,GetTexture2DIcon(currentFlavour.appIconPath));
            ApplyEnvironment(environment);
        }

        static void ApplyEnvironment(Environment env)
        {
            switch (env)
            {
                case Environment.DEV:

                    PlayerSettings.applicationIdentifier = currentFlavour.appId + "." + env.ToString().ToLower();
                    PlayerSettings.iPhoneBundleIdentifier = PlayerSettings.applicationIdentifier;
                    PlayerSettings.productName = currentFlavour.prodName_DEV;

                    //PlayerSettings.shortBundleVersion = Configuration.BUNDLE_VERSION;
                    break;

                case Environment.UAT:

                    PlayerSettings.applicationIdentifier = currentFlavour.appId + "." + env.ToString().ToLower();
                    PlayerSettings.iPhoneBundleIdentifier = PlayerSettings.applicationIdentifier;
                    PlayerSettings.productName = currentFlavour.prodName_UAT;
                    //PlayerSettings.shortBundleVersion = Configuration.BUNDLE_VERSION;
                    break;

                /*Production - this should be free from any custom naming and identifier */
                case Environment.PROD:

                    PlayerSettings.applicationIdentifier = currentFlavour.appId;
                    PlayerSettings.iPhoneBundleIdentifier = PlayerSettings.applicationIdentifier;
                    PlayerSettings.productName = currentFlavour.prodName;
                    //PlayerSettings.shortBundleVersion = Configuration.BUNDLE_VERSION;
                    break;
            }

			//this is a HACK to ensure Mac/PC standalone version could detect the bundleIdentifier.
			PlayerSettings.companyName = PlayerSettings.applicationIdentifier; 

		    //Current environment
			EditorPrefs.SetString(KEY_CURRENT_OPT_ENV, env.ToString());
            string message = string.Format("Applied: <color=cyan>{0}</color>({1})\nFlavour: <color=magenta>{2}</color>", 
                env.ToString(), PlayerSettings.applicationIdentifier,currentFlavour.name);
            Debug.Log(message);
        }

#endregion

        private static void MakeBuild(BuildTarget outputBuildTarget, BuildOptions buildOption = BuildOptions.None)
        {

            string[] targetScenes = FindEnabledEditorScenes();


#region Prompt Confirmation
        string title = string.Format("Build {1} : {0}\nv{2}.{3} ({4}) ?",
                                         PlayerSettings.productName,
                                         outputBuildTarget.ToString(),
                                         Configuration.VERSION_STRING,
                                         Configuration.BUILD_NUMBER,
                                         Configuration.CurrentEnvironment
                                        );

            string message = "Please verify the version, environment. \nScenes included in the build:\n ";

            foreach (string sceneName in targetScenes)
            {
                //just take the scene name will do. 
                string scenePathName = sceneName.Substring(sceneName.LastIndexOf('/') + 1);
                message += "\n" + scenePathName;
            }

            string opt_yes = "Yes, Let's build it.";
            string opt_no = "No";

            if (!EditorUtility.DisplayDialog(title, message, opt_yes, opt_no))
            {
                return;
            }
#endregion


            Debug.Log("Building App for: <color=red>" + Configuration.CurrentEnvironment + "</color>");


            //Versioning Universal..
            PlayerSettings.Android.bundleVersionCode = Configuration.BUILD_NUMBER;
            PlayerSettings.iOS.buildNumber = Configuration.BUILD_NUMBER.ToString();

            // to display a complete versioning /build number on the APK when user install it.
            PlayerSettings.bundleVersion = Configuration.VERSION_STRING + "." + Configuration.BUILD_NUMBER;

            string productName = PlayerSettings.productName;
            string versioningSuffix = "." + Configuration.BUILD_NUMBER;

            //Define the Build Target output
            string target_dir = EXPORT_PATH;

            //--- ANDROID -----
            if (outputBuildTarget == BuildTarget.Android)
            {
                PlayerSettings.Android.keystorePass = "gamingsoft";
                PlayerSettings.Android.keyaliasPass = "gamingsoft";
                target_dir = EXPORT_PATH + "/" + productName + versioningSuffix + ".apk";
                ChangeAndroidManifest(PlayerSettings.applicationIdentifier);
                PrepareOutputDirectory();
            }

            //---- iOS --------
            else if (outputBuildTarget == BuildTarget.iOS)
            {
                //Set the Apple Developer Team ID manually.
                PlayerSettings.iOS.appleDeveloperTeamID = Configuration.APPLE_DEVELOPER_TEAM_ID;
                //No versionSuffix just 1 XcodeProject to have it replaced / appended will be good enough
                target_dir = EXPORT_PATH + "/" + productName + "_" + "xcode";
                PrepareOutputDirectory();
            }

            /** NOTICE: we build the desktop version not to have any versioning name in it, 
             * is to save the hassle of renaming works before generating the installer/package 
             * thus it's to be wrapped under a folder.
             */


            //---- Win/PC ---------
            else if (outputBuildTarget == BuildTarget.StandaloneWindows)
            {
                //for desktop version it's good to group them nicely..
                string folderDir = APP_PATH + "/" + productName + versioningSuffix + "/";
                target_dir = folderDir + productName + ".exe";
                PrepareOutputDirectory(folderDir);
            }

            //---- Mac ---------
            else if (outputBuildTarget == BuildTarget.StandaloneOSXIntel64)
            {
                //for desktop version it's good to group them nicely..
                string folderDir = APP_PATH + "/" + productName + versioningSuffix + "/";
                target_dir = folderDir + productName;
                PrepareOutputDirectory(folderDir);
            }

            GenericBuild(targetScenes, target_dir, outputBuildTarget, buildOption);
        }

#endregion


        //3rd set, 100++
#region 03-Tools:Find Missing References 

        [MenuItem("VMSoft/Tools/Find BrokenRefs in SCENE", false, 101)]
        public static void FindMissingReferencesInCurrentScene()
        {
            var objects = GetSceneObjects();
            //FindMissingReferences (EditorApplication.currentScene, objects);
            FindMissingReferences(UnityEngine.SceneManagement.SceneManager.GetActiveScene().name, objects);
        }

        [MenuItem("VMSoft/Tools/Find BrokenRefs in ALLSCENES", false, 102)]
        public static void MissingSpritesInAllScenes()
        {
            foreach (var scene in EditorBuildSettings.scenes)
            {
                //EditorApplication.OpenScene (scene.path);
                EditorSceneManager.OpenScene(scene.path);

                FindMissingReferences(scene.path, Resources.FindObjectsOfTypeAll<GameObject>());
            }
        }

        [MenuItem("VMSoft/Tools/Find BrokenRefs in ASSETS", false, 103)]
        public static void MissingSpritesInAssets()
        {
            var allAssets = AssetDatabase.GetAllAssetPaths();
            var objs = allAssets.Select(a => AssetDatabase.LoadAssetAtPath(a, typeof(GameObject)) as GameObject).Where(a => a != null).ToArray();

            FindMissingReferences("Project", objs);
        }

        private static void FindMissingReferences(string context, GameObject[] objects)
        {
            foreach (var go in objects)
            {
                var components = go.GetComponents<Component>();

                foreach (var c in components)
                {
                    if (!c)
                    {
                        Debug.LogError("Missing Component in GO: " + FullPath(go), go);
                        continue;
                    }

                    SerializedObject so = new SerializedObject(c);
                    var sp = so.GetIterator();

                    while (sp.NextVisible(true))
                    {
                        if (sp.propertyType == SerializedPropertyType.ObjectReference)
                        {
                            if (sp.objectReferenceValue == null
                                && sp.objectReferenceInstanceIDValue != 0)
                            {
                                ShowError(context, go, c.GetType().Name, ObjectNames.NicifyVariableName(sp.name));
                            }
                        }
                    }
                }
            }


            Debug.Log("<color=green>Done checking for Missing Reference.</color>");
        }


        private static GameObject[] GetSceneObjects()
        {
            return Resources.FindObjectsOfTypeAll<GameObject>()
                .Where(go => string.IsNullOrEmpty(AssetDatabase.GetAssetPath(go))
           && go.hideFlags == HideFlags.None).ToArray();
        }

        private const string err = "Missing Ref in: [{3}]{0}. Component: {1}, Property: {2}";

        private static void ShowError(string context, GameObject go, string c, string property)
        {
            Debug.LogError(string.Format(err, FullPath(go), c, property, context), go);
        }

        private static string FullPath(GameObject go)
        {
            return go.transform.parent == null
                ? go.name
                    : FullPath(go.transform.parent.gameObject) + "/" + go.name;
        }


        [MenuItem("VMSoft/Tools/Reapply Shaders", false, 104)]
        static void ReApplyShaders()
        {
            int workDone = 0;
            if (Selection.gameObjects != null)
            {
                Renderer[] renderers;
                Material[] materials;
                string[] shaders;

                GameObject[] allSelectedGameObjs = Selection.gameObjects;
                foreach (GameObject gobj in allSelectedGameObjs)
                {
                    renderers = gobj.GetComponentsInChildren<Renderer>();

                    foreach (var rend in renderers)
                    {
                        materials = rend.sharedMaterials;
                        shaders = new string[materials.Length];

                        for (int i = 0; i < materials.Length; i++)
                        {
                            if (materials[i] == null)
                                continue;

                            shaders[i] = materials[i].shader.name;
                        }

                        for (int i = 0; i < materials.Length; i++)
                        {
                            if (materials[i] == null)
                                continue;

                            materials[i].shader = Shader.Find(shaders[i]);
                            workDone++;
                        }
                    }
                }
            }

            string message = "Burrrrp.. end of re-applying shaders, this is labourous work, for {0} works.";
            message = string.Format(message, workDone);
            Debug.Log("<color=lime>" + message + "</color>");
        }


		[MenuItem("VMSoft/Tools/Reveal Thumbnail Cache", false, 105)]
		static void ShowThumbnailCacheLocation(){
			string location = Application.persistentDataPath + "/" + Configuration.THUMBNAIL_FOLDER;
			Debug.Log("open location: " + location);
			if(!Directory.Exists(location)){
				Directory.CreateDirectory(location);
			}
			EditorUtility.RevealInFinder(location);
		}

		/// <summary>
		/// Tests the IOSPBX project.change
		/// </summary>
		[MenuItem("VMSoft/Tools/TestFixiOSProject", false, 106)]
		static void TestIOSPBXProject(){

#if UNITY_IOS
			Debug.Log("Run iOS Build PostProcessing");
			//============= [ Change the Xcode Project ] =============== 

			string pathToBuiltProject = "Build/1sUAT_xcode";
			string projPath = pathToBuiltProject + "/Unity-iPhone.xcodeproj/project.pbxproj";
			PBXProject proj = new PBXProject();
			proj.ReadFromString(File.ReadAllText(projPath));
			string target = proj.TargetGuidByName("Unity-iPhone");
			proj.SetBuildProperty(target, "ENABLE_BITCODE", "false");

			File.WriteAllText(projPath, proj.WriteToString());
#endif

			//Run the Build Command Process
			System.Diagnostics.ProcessStartInfo proc = new System.Diagnostics.ProcessStartInfo();
			proc.FileName = "package-OPT_UAT.command";
			proc.WorkingDirectory = "/Users/cheongweelau/Development/Unity/1sGames.Standalone.5.5/Tools/Mac-PackageLive22/build";
			//proc.Arguments = "";
			proc.WindowStyle = System.Diagnostics.ProcessWindowStyle.Minimized;
			proc.CreateNoWindow = true;
			System.Diagnostics.Process.Start(proc);
			UnityEngine.Debug.Log("Done with it");
		}

#endregion
    }
}