using example.invalid;
using UnityEngine;
using UnityEditor;
using UnityEditor.Callbacks;
#if UNITY_IOS
using UnityEditor.iOS.Xcode;
using UnityEditor.iOS.Xcode.Custom;
using UnityEditor.iOS.Xcode.Custom.Extensions;
#endif

public static class XCodePostProcess
{
	[PostProcessBuild(100)]
	public static void OnPostprocessBuild(BuildTarget target, string pathToBuildProject) {
		if (target.ToString() == "iOS" || target.ToString() == "iPhone") {
			UpdateInfoPlist(pathToBuildProject);
		}
	}

	private static void UpdateInfoPlist(string path) {
#if UNITY_IOS
		//Get Plist
		string plistPath = Path.Combine(path, "Info.plist");   
		UnityEditor.iOS.Xcode.PlistDocument plist = new UnityEditor.iOS.Xcode.PlistDocument();
		plist.ReadFromString (File.ReadAllText (plistPath));
		//Get Root
		UnityEditor.iOS.Xcode.PlistElementDict rootDict = plist.root;
		rootDict.SetString("NSPhotoLibraryUsageDescription", "此 App 需要您的同意才能读取媒体资料库");
		rootDict.SetString("NSPhotoLibraryAddUsageDescription", "此 App 需要您的同意才能读取媒体资料库");
		rootDict.SetString("NSCameraUsageDescription", "Unity/Admob Dependency");
		

		//Add Necessary Things
		UnityEditor.iOS.Xcode.PlistElementArray LSApplicationQueriesSchemes = rootDict.CreateArray("LSApplicationQueriesSchemes");
		LSApplicationQueriesSchemes.AddString ("fb");
		LSApplicationQueriesSchemes.AddString ("instagram");
		LSApplicationQueriesSchemes.AddString ("tumblr");
		LSApplicationQueriesSchemes.AddString ("twitter");
		LSApplicationQueriesSchemes.AddString ("twitter");
		LSApplicationQueriesSchemes.AddString ("fbapi");
		LSApplicationQueriesSchemes.AddString ("alipays");
		LSApplicationQueriesSchemes.AddString ("alipayshare");
		LSApplicationQueriesSchemes.AddString ("mqqapi");
		LSApplicationQueriesSchemes.AddString ("mqq");
		LSApplicationQueriesSchemes.AddString ("QQ");
		LSApplicationQueriesSchemes.AddString ("wechat");
		LSApplicationQueriesSchemes.AddString ("weixin");
		LSApplicationQueriesSchemes.AddString ("alipay");
        LSApplicationQueriesSchemes.AddString ("jiuliao");
		
		// Schemes
		UnityEditor.iOS.Xcode.PlistElementArray urlTypeArray = rootDict.CreateArray("CFBundleURLTypes");
		UnityEditor.iOS.Xcode.PlistElementDict urlTypeDict = urlTypeArray.AddDict();
		urlTypeDict.SetString("CFBundleURLName", Application.identifier);
		UnityEditor.iOS.Xcode.PlistElementArray urlScheme = urlTypeDict.CreateArray("CFBundleURLSchemes");
		urlScheme.AddString(Application.companyName);

		
		string projPath = UnityEditor.iOS.Xcode.PBXProject.GetPBXProjectPath(path);
		UnityEditor.iOS.Xcode.PBXProject proj = new UnityEditor.iOS.Xcode.PBXProject();
		proj.ReadFromFile(projPath);
		string target = proj.TargetGuidByName("Unity-iPhone");

		proj.SetBuildProperty(target, "ONLY_ACTIVE_ARCH", "YES");//add for flash pay by AZLDC
		proj.SetBuildProperty(target, "ENABLE_BITCODE", "false");            
		//proj.AddFrameworkToProject(target, "CoreTelephony.framework", true);
		//proj.AddFrameworkToProject(target, "libresolv.tbd", true);
		proj.WriteToFile (projPath);

		//PlistElementDict NSAppTransportSecurity = rootDict.CreateDict("NSAppTransportSecurity");
		//NSAppTransportSecurity.SetBoolean("NSAllowsArbitraryLoads",true);
		//PlistElementDict NSExceptionDomains = NSAppTransportSecurity.CreateDict("NSExceptionDomains");
		//PlistElementDict url1 =  NSExceptionDomains.CreateDict ("example.invalid");
		//url1.SetBoolean ("NSIncludesSubdomains",true);
		//url1.SetBoolean ("NSThirdPartyExceptionRequiresForwardSecrecy", false);
		//PlistElementDict url2 =  NSExceptionDomains.CreateDict ("example.invalid");
		//url2.SetBoolean ("NSIncludesSubdomains",true);
		//url2.SetBoolean ("NSThirdPartyExceptionRequiresForwardSecrecy", false);
		//PlistElementDict url3 =  NSExceptionDomains.CreateDict ("example.invalid");
		//url3.SetBoolean ("NSIncludesSubdomains",true);
		//url3.SetBoolean ("NSThirdPartyExceptionRequiresForwardSecrecy", false);
		//PlistElementDict url4 =  NSExceptionDomains.CreateDict ("localhost");
		//url4.SetBoolean ("NSExceptionAllowsInsecureHTTPLoads",true);

		//WriteFile
		File.WriteAllText (plistPath, plist.WriteToString ());
#endif
    }
}