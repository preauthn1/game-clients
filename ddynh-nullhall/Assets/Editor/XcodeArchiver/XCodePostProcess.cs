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
		rootDict.SetString("NSPhotoLibraryUsageDescription", "此 App 需要您的同意才能读取媒体资料库,用来发布动态");
		rootDict.SetString("NSAppleMusicUsageDescription", "此 App 需要您的同意才能读取媒体资料库,用来发布动态");
		rootDict.SetString("NSCameraUsageDescription", "此 App 需要您的同意才能打开您的相机,用来发布动态");
		rootDict.SetString("NSLocationAlwaysUsageDescription", "此 App 需要您的同意才能持续获取你的地理位置,为你提供当前自己所在的位置");
		rootDict.SetString("NSLocationWhenInUseUsageDescription", "此 App 需要您的同意才能访问您的位置，用来发布动态时为你的位置定位");
		rootDict.SetString("NSPhotoLibraryAddUsageDescription", "此 App 需要您的同意才能读取媒体资料库");
		rootDict.SetString("UIApplicationExitsOnSuspend", "此 App 需要您的同意才能访问您的相册,用来发布动态");

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

		// Schemes
		UnityEditor.iOS.Xcode.PlistElementArray urlTypeArray = rootDict.CreateArray("CFBundleURLTypes");
		UnityEditor.iOS.Xcode.PlistElementDict urlTypeDict = urlTypeArray.AddDict();
		urlTypeDict.SetString("CFBundleURLName", Application.identifier);
		UnityEditor.iOS.Xcode.PlistElementArray urlScheme = urlTypeDict.CreateArray("CFBundleURLSchemes");
		urlScheme.AddString(Application.companyName);

		//Add BackgroundModes
		UnityEditor.iOS.Xcode.PlistElementArray urlArray = rootDict.CreateArray("UIBackgroundModes");
		urlArray.AddString("remote-notification");

		Debug.Log("that use to output entitlement Path="+path);

		string entitlementString="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE plist PUBLIC \"-//Apple//DTD PLIST 1.0//EN\" \"http://example.invalid/DTDs/PropertyList-1.0.dtd\">\n<plist version=\"1.0\">\n<dict>\n\t<key>aps-environment</key>\n\t<string>development</string>\n</dict>\n</plist>";

		string appName = PlayerSettings.applicationIdentifier.Split('.')[2];
		string entitlementPath = path+"/Unity-iPhone/"+appName+".entitlements";
		File.WriteAllText(entitlementPath,entitlementString);

		string projPath = UnityEditor.iOS.Xcode.PBXProject.GetPBXProjectPath(path);
		UnityEditor.iOS.Xcode.PBXProject proj = new UnityEditor.iOS.Xcode.PBXProject();
		proj.ReadFromFile(projPath);
		string target = proj.TargetGuidByName("Unity-iPhone");
		
		proj.SetBuildProperty(target, "ONLY_ACTIVE_ARCH", "YES");//add for flash pay by AZLDC
		proj.SetBuildProperty(target, "ENABLE_BITCODE", "false");            
		//proj.AddFrameworkToProject(target, "CoreTelephony.framework", true);
		//proj.AddFrameworkToProject(target, "libresolv.tbd", true);

		proj.SetBuildProperty (target, "CODE_SIGN_ENTITLEMENTS", "Unity-iPhone/"+appName+".entitlements");

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