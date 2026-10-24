using UnityEngine;
using System.Collections;
using VMSoft.Utils;
using System;
using VMSoft.SlotMachine;
using System.Text.RegularExpressions;

namespace VMSoft.Lobby.Model{
	
	[System.Serializable]
	public class GameData: ICloneable {

		//this is determine if it's downloadable / and launch type.
        public enum Type { 
            DEFAULT = 0, //standard usual trigger another scene / assetBundle
            ALLBET_APP_FORWARD = 1, //customise launch another game
            SELECT_LIVE_CASINO = 2 , //prompt selection for another casino game
            HTML5 =3 //launch a browser based
        }

		//This one used for Sorting the Items
        public enum Category{
			SLOT = 0,
			ARCADE = 1 ,
			TABLE = 2,
            CASINO_SELECTOR = 3,
            LIVE_CASINO = 4,
            NONE = -99 //as no category type
        }

		//This applies how do we want to handle the 'URL' web content, web based game.
		public enum WebContentHandling{
			NotApplicable = 0,
			OpenInApp = 1,
			OpenExternal = 2
		}

		public string id = NO_ID;
		public const string NO_ID = "999";
		public string[] title; //the title for the game
		public string originalTitle; // the original default title in English only.
		public string[] platformBundles;

		[SerializeField] public string scene;
		public string Scene{
			set{
				scene = value;
			}
			get{
				string mainScene = scene.Split(',')[0]; // get the first index only as main entry scene.
				return mainScene;
			}
		}

		public int version;
		public bool isOnline;
		public bool isHot; //aka isFeatured.. 
		public bool isNew; //this flag is for the "NEW" ribbon on the GameRoom..
		///<summary>is developer mode? Skip the server Login API, straight connect to dev server.</summary>
		public bool isDevMode = false;
        public bool isForcedDisplayTitle;
        public bool isGamePortrait;
		public bool isBigThumbnail;
        public bool isComingSoon;
        [SerializeField] public string[] textComingSoon;

		public int thumbnailVersion = -1;
		public SlotGameData slotGameData;

        [Header("Meta Data")]
        public Type type = Type.DEFAULT;
        public Category category = Category.NONE;
		public WebContentHandling webContentHandle = WebContentHandling.NotApplicable;
        //this is used for initial download. determine if the content is downloadable. 
        public bool isDownloadable = true; 
        public string customValue; //for any potential data. e.g. Provider for LiveCasino

		/// <summary>
		/// Initializes a new instance of the <see cref="T:VMSoft.Lobby.Model.GameData"/> class.
		/// using default values..
		/// </summary>
		public GameData(){
			id = "-1";
			//title = new string[]
			version = -1;
			isOnline = false;
			scene = "";
			isNew = true;
			isDevMode = false;
			slotGameData = null;
		}

       
		[Serializable]
		public class SlotGameData
		{
			public int lines;
			public int ways;
			public SlotGameData(int lines, int ways){
				this.lines = lines; 
				this.ways = ways;
			}
		}

		public object Clone ()
		{
			GameData myData = new GameData();


			myData.id = id;
			myData.title = title;
			myData.version = version;
			myData.isOnline = isOnline;
			myData.Scene = scene;
			myData.isNew = isNew;
			myData.isDevMode = isDevMode;
			return myData;
		}
			
        public void SetCategory(int id){

			switch(id){
			case 0:
				category = Category.SLOT;
				break;
			case 1:
				category = Category.ARCADE;
				break;
			case 2:
				category = Category.TABLE;
				break;
			case 3:
				category = Category.CASINO_SELECTOR;
				break;
			case 4:category = Category.LIVE_CASINO;
				break;
			}
        }

        public string TitleLocalized{
            get{
                //Debug.Log("title is:" + title.);
				string text = "";
				try{
					text = title[LanguageManager.CurrentLocaleId];
				}
				catch{
					//Debug.LogWarning ("probably this is DEV bypass game asset test, we don't have the localized title for that game");
					text = null;
				}
                
                if(string.IsNullOrEmpty(text)){

					if (LanguageManager.CurrentLocaleId == (int)LocaleCode.EN)
						text = originalTitle;
					else if (LanguageManager.CurrentLocaleId == (int)example.invalid)
						text = "{" + originalTitle + ".CN}";
					else
						text = originalTitle;

                    if(string.IsNullOrEmpty(text)){
                        text = "NO DATA?";
                    }
                }
                return text;
            }
        }

		/// <summary>
		/// Gets the bundle URL, where the default one should the 0-index. 
		/// in most case, we get the url for the first bundle.
		/// </summary>
		/// <returns>The bundle URL.</returns>
		/// <param name="index">Index.</param>
		public string GetBundleUrl(int index = 0){
			
			string downloadServerPath = DataManager.Instance.serviceManager.downloadUrl + DataManager.Instance.serviceManager.roomUrl;
			string platformSpecificDownloadFile = platformBundles[index];
			string bundleURL = CheckAppendSeparatorToServerPath(downloadServerPath) + platformSpecificDownloadFile;
			return bundleURL;
		}

		public string[] GetBundleUrls(){
			string downloadServerPath = DataManager.Instance.serviceManager.downloadUrl 
				+ DataManager.Instance.serviceManager.roomUrl;

			string[] bundleUrls = new string[platformBundles.Length];

			for(int i=0; i < platformBundles.Length; i++){
				bundleUrls[i] = CheckAppendSeparatorToServerPath(downloadServerPath) + platformBundles[i];
			}
			return bundleUrls;
		}

		private string CheckAppendSeparatorToServerPath(string url)
		{
			if (string.IsNullOrEmpty(url))
				return url;
			else
			{
				if (url.EndsWith("/", System.StringComparison.Ordinal))
					return url;
				else
					return url + "/";
			}
		}

        //Modifier, to set the comingSoonText.
        public string ComingSoonText{
            set{
                textComingSoon = ProcessDelimiterString(value);
            }
            get{
                string text = string.Empty;
                //validate if the textComingSoon is there.
                if(textComingSoon != null && textComingSoon.Length > LanguageManager.CurrentLocaleId){
                    text = textComingSoon[LanguageManager.CurrentLocaleId];    
                }
                else
                    text = LanguageManager.CurrentLocaleData().lobbyComingSoon;

                return text;
            }
        }

        string[] ProcessDelimiterString(string data){
            if(data == null)
                return null;

            return Regex.Split(data, "\\s*,\\s*");
        }

        //if it's a live casino game it has this value
        public int GetCasinoProviderCode(){
            int providerCode = -999;
            int.TryParse(customValue.Substring(customValue.IndexOf("=")+1), out providerCode);
            return providerCode;

        }

	}
}