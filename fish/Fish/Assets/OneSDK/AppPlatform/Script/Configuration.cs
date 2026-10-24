using System;
using System.Collections.Generic;
using UnityEngine;

namespace VMSoft
{
    /// <summary>
    /// Configuration.
    ///
    /// README -->>
    ///	  Programming --> loose coupling and high cohesion
    ///	  0 - OOP: encapsulation, inheritance, polymorphism.
    ///	  1 - modular
    ///	  2 - less Singleton or status variable, USE argument/parameter; should be consistent in passing as value/ref.
    ///	  3 - Give Proper Naming for every concept or item; example Slot: Reel / Hit / Symbol 
    ///       will greatly facilitate the communication between fellow programmers & consultants.
    /// 
    /// </summary>
    public class Configuration
    {
        //let's have a pizza , and code! '🍕'
        public const string VERSION_STRING = "3.8";
        public const int BUILD_NUMBER = 720;
        public const string APPLE_DEVELOPER_TEAM_ID = "2YT7384LQS";   
        public const string THUMBNAIL_FOLDER = "thumbnails"; 
        #region Scenes

        /* All the In-App Scenes: the information will be listed here
         * Now we use index based.. would that be much easier? kaka!*/
        public const int SCENE_SPLASH = 0;
        public const int SCENE_LOGIN = 1;
        public const int SCENE_LOBBY = 2;
        public const int SCENE_HTML = 3;
        // Handling the web content

        #endregion

        static AppLabelConfig currentAppLabelConfig;

        #region Static Block

        static Configuration()
        {
            //determine app label configuration immediately at the start.
			SetLogging(); //set the logging for this application
			// The size of the game cache in Byte, that maximum space will be utilized for the downloaded game.

            currentAppLabelConfig = appLabelConfigList.Find(
                (obj) => { return AppId.StartsWith(obj.appId, StringComparison.Ordinal); });
            Debug.Log("Our App now on:" + currentAppLabelConfig);

           
	#if UNITY_ANDROID || UNITY_IOS
            //Caching.maximumAvailableDiskSpace = 1024000000;
	#endif
			//long usedSpaceMB = Cache.spaceOccupied;
			//long maxAvailableMB = Cache.maximumAvailableStorageSpace;

           // string cacheLog = string.Format("Free/Allocated Cache (MB): {0}/{1}", usedSpaceMB, maxAvailableMB);
            //Debug.Log("<b># Applied Application Configuration (ツ)</b>\n" + cacheLog);
        }

        #endregion

        public enum Environment
        {
            DEV = 0,
            UAT = 1,
            PROD = 2,
            UNASSIGNED = -99,
            SIMULATOR = 99
        };

        /* --- these are the definition  ----- */
        static Dictionary<Environment, string> serverUrlDictionary = new Dictionary<Environment, string> {
            { Environment.DEV, "https://example.invalid" }, //this is local link
			//{ Environment.UAT, "https://example.invalid" },
			{ Environment.UAT, "https://example.invalid" },
            { Environment.PROD,"https://example.invalid" }
        };

        //Game Center choice, determines the statement type either. 
        static List<AppLabelConfig> appLabelConfigList = new List<AppLabelConfig>(){
			new AppLabelConfig{appId = "com.vmsoft.sm", appKey = AppKey._1sgames, gameCenter = GameCenter.Cash, casinoFeature = false, enableGift = false, enableCashOut = false, enableAnnouncement = true},
			new AppLabelConfig{appId = "example.invalid", appKey = AppKey._live22, gameCenter = GameCenter.Seamless, casinoFeature = true, enableGift = true, enableCashOut = false, enableAnnouncement = true},
			new AppLabelConfig{appId = "example.invalid", appKey = AppKey._vlive22, gameCenter = GameCenter.Seamless, casinoFeature = false, enableGift = false, enableCashOut = false, enableAnnouncement = true},
			new AppLabelConfig{appId = "example.invalid", appKey = AppKey._klive22, gameCenter = GameCenter.Seamless, casinoFeature = true, enableGift = false, enableCashOut = true, enableAnnouncement = false},
			new AppLabelConfig{appId = "example.invalid", appKey = AppKey._slotsft, gameCenter = GameCenter.Seamless, casinoFeature = true, enableGift = true, enableCashOut = false, enableAnnouncement = true},
			new AppLabelConfig{appId = "example.invalid", appKey = AppKey._gsoft, gameCenter = GameCenter.Cash, casinoFeature = false, enableGift = false, enableCashOut = false, enableAnnouncement = true},
        };

        static void SetLogging()
        {
#if UNITY_EDITOR
            //Debug.logger.logEnabled = true;
#else
            bool isAllowed = (CurrentEnvironment == Environment.DEV || CurrentEnvironment == Environment.UAT);

			Debug.unityLogger.logEnabled = isAllowed;
#endif
        }

        //If it's Development or Uat environment
        public static bool isDEVorUAT
        {
            get
            {
                return (CurrentEnvironment == Environment.DEV || CurrentEnvironment == Environment.UAT);
            }
        }

        public static bool isEditor
        {
            get
            {
                return (Application.platform == RuntimePlatform.OSXEditor ||
                Application.platform == RuntimePlatform.WindowsEditor);

            }
        }


        static bool isAppKeyHardened = false; //this appKey will be 'fixed' once it was applied for one time in app/runtime.
        /// <summary>
        /// Get the App Key
        /// </summary>
        /// <value>The app key.</value>
        public static AppKey CurrentAppKey
        {
            get
            {
                return currentAppLabelConfig.appKey;
            }
            set{
                if(!isAppKeyHardened){
                    currentAppLabelConfig.appKey = value;
                    isAppKeyHardened = true;
                }
                else{
                    Debug.LogWarning("AppKey is hardened, to protect it from being tampered in this cycle.");
                }
            }
        }

        public static bool SupportCasino{
            get{
                return currentAppLabelConfig.casinoFeature;
            }
        }

		public static bool SupportGift
		{
			get{
				return currentAppLabelConfig.enableGift;
			}
		}

		public static bool SupportCashOut
		{
			get{
				return currentAppLabelConfig.enableCashOut;
			}
		}

		public static bool SupportAnnouncement
		{
			get{
				return currentAppLabelConfig.enableAnnouncement;
			}
		}

        public static string CurrentAppKeyString{
            get{ return currentAppLabelConfig.AppKeyString;}
        }

        /// <summary>
        /// Gets the current game center, determine type of this 
        /// </summary>
        /// <value>The current game center.</value>
        public static GameCenter CurrentGameCenter{
            get{
                return currentAppLabelConfig.gameCenter;
            }
        }

        /// <summary>
        /// Get the app identifier.
        /// </summary>
        /// <value>The app identifier.</value>
        public static string AppId
        {
            get
            {
#if UNITY_EDITOR
                string appId = UnityEditor.PlayerSettings.applicationIdentifier;
#elif UNITY_STANDALONE_OSX || UNITY_STANDALONE
                string appId = Application.companyName;
#else
				string appId = Application.identifier;
#endif
                return appId;

            }
        }


        /** Control the portrait/landscape thing */
        public static bool SwitchToPortrait
        {
            get
            {
                return Screen.autorotateToPortrait;
            }
            set
            {
                Screen.autorotateToPortrait = value;
                Screen.autorotateToPortraitUpsideDown = value;
                Screen.autorotateToLandscapeLeft = !value;
                Screen.autorotateToLandscapeRight = !value;

                //orienting the screen?
			
				Screen.orientation = (value)?ScreenOrientation.Portrait:DeviceOrientationToScreenOrientation(Input.deviceOrientation);
			
				if(!value)
               		Screen.orientation = ScreenOrientation.AutoRotation;
            }
        }

		static ScreenOrientation DeviceOrientationToScreenOrientation(DeviceOrientation deviceOrientation){

				switch(deviceOrientation){
					case DeviceOrientation.Portrait:
						if (Screen.autorotateToPortrait) {
							return ScreenOrientation.Landscape;
						}
						break;
					case DeviceOrientation.PortraitUpsideDown:
					if (Screen.autorotateToPortraitUpsideDown) {
						return ScreenOrientation.Landscape;
						}
						break;
					case DeviceOrientation.LandscapeLeft:
						if (Screen.autorotateToLandscapeLeft) {
							return ScreenOrientation.LandscapeLeft;
						}
						break;
					case DeviceOrientation.LandscapeRight:
						if (Screen.autorotateToLandscapeRight) {
						return ScreenOrientation.LandscapeRight;
						}
						break;
				}
				return ScreenOrientation.Landscape;

		}

        /// <summary>
        /// Gets the environment, usually we check what's at the end of the AppID..
        /// there should be DEV / UAT at the back.. or empty if it's meant for production.
        /// </summary>
        /// <value>The environment.</value>
        public static Environment CurrentEnvironment
        {
            get
            {
                string appId = Configuration.AppId;

                string appIdEnvHint = appId.Substring(appId.LastIndexOf(".", System.StringComparison.Ordinal) + 1);
                if (appIdEnvHint.ToLower().EndsWith("dev", System.StringComparison.Ordinal))
                {
                    return Environment.DEV;
                }
                else if (appIdEnvHint.ToLower().EndsWith("uat", System.StringComparison.Ordinal))
                {
                    return Environment.UAT;
                    //---- the following.. just take it as "Production" setting.
                }
                else if (appIdEnvHint.ToLower().EndsWith("app", System.StringComparison.Ordinal) ||
                         appIdEnvHint.ToLower().EndsWith("com", System.StringComparison.Ordinal))
                {
                    return Environment.PROD;
                }
                else
                {
                    Debug.Log("Unknown AppId:" + appId + " ,CurrentEnvironment maybe inaccurate. Set to PROD");
                    return Environment.PROD;
                }
            }
        }

        public static string GetServerUrl(Environment target = Configuration.Environment.UNASSIGNED)
        {
            if (target == Configuration.Environment.UNASSIGNED)
                target = Configuration.CurrentEnvironment;

            return serverUrlDictionary[target];
        }


        public class AppKeyConfig
        {
            public string appId;
            public string keycode;
            public GameCenter gameCenter;
        }


		#region Platform Setting

#if UNITY_ANDROID
                public const string Platform_Prefix = "android";
                static GameClientPlatform _clientPlatform = GameClientPlatform.Android;
#elif UNITY_IPHONE || UNITY_IOS 
				public const string Platform_Prefix = "ios";
                static GameClientPlatform _clientPlatform = GameClientPlatform.iOS;
#elif UNITY_WEBGL
                public const string Platform_Prefix = "webgl";
				static GameClientPlatform _clientPlatform = GameClientPlatform.Web;
#elif UNITY_STANDALONE_OSX
				public const string Platform_Prefix = "pc";
				static GameClientPlatform _clientPlatform = GameClientPlatform.Mac;
#elif UNITY_STANDALONE
				public const string Platform_Prefix = "pc";
				static GameClientPlatform _clientPlatform = GameClientPlatform.PC;
#else
				static GameClientPlatform _clientPlatform = GameClientPlatform.None;
#endif

        public static GameClientPlatform ClientPlatform
        {
            get
            {
				return _clientPlatform;
            }
        }

        #endregion

    }//End of Configuration Class

    /// <summary>
    /// Game client platform.
    /// these name are used in aligned with build script 
    /// to create the asset bundle in relevant naming 
    /// </summary>
    public enum GameClientPlatform
    {
        None = -1,
        Web = 0,
        iOS = 1,
        Android = 2,
        //Unused
        Web_iOS = 3,
        //Unused
        Web_Android = 4,
        PC = 5,
        Mac = 6,
    }


    public enum GameCenter
    {
        Cash,
        //Fund Transfer
        Seamless
        //Common Wallet, e.g Operator: CAMS
    }

    public enum AppKey
    {
        _1sgames,
        _live22,
        _slotsft,
        _gsoft,
		_klive22,
		_vlive22
    }

    public class AppLabelConfig
    {
        public GameCenter gameCenter;
        public bool casinoFeature = false;
        public AppKey appKey;
        public string appId;
		public bool enableGift;
		public bool enableCashOut;
		public bool enableAnnouncement;

        public string AppKeyString
        {
            get
            {
                string rawAppKeyString = appKey.ToString();
                return rawAppKeyString.Substring(rawAppKeyString.IndexOf("_", StringComparison.Ordinal) + 1);
            }
        }
		
		public override string ToString ()
    	{
    		return string.Format ("[AppLabelConfig: gameCenter={0}, casinoFeature={1}, appKey={2}, appId={3}, enableGift={4}, AppKeyString={5}]", gameCenter, casinoFeature, appKey, appId, enableGift, AppKeyString);
    	}
    }

}
//end of namespace

