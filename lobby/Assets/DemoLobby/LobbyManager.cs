using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;
using GSLibrary.Game.Bundle;
using SimpleJSON;

using UnityEngine.Networking;

namespace BetVictor
{
	public class LobbyManager : MonoBehaviour {
		public GameController controller;

		public Text credit1Txt;
		public Text credit2Txt;
		public Text nameTxt;
		public Information informationPanel;
		public GameObject loading;
		public ScrollRectPage gameListPage;
		public enum GameType{
			slot,
			//fish,
			//p2p,
			table,
			arcade,
			live,
		}

		public enum IconType
		{
			Big,
			Small
		}

		[System.Serializable]
		public class GameDetail
		{
			public string name;
			public int gameId = 0;
			public string gameDownloadUrl = "";
			public string gameCode="";
			public Button gameButton;
			public string scene = "SM_AC_FishScene";
			public Image downloadImg;
			public GameObject downloadButton;
			public GameObject maintenanceMode;
			public bool doneDownload;
			public int version = 0;
            public string gameArr = "0";//for slot
            public Button highLightBtn;
			public GameType gameType;
            public bool isBigIcon = true;
            public bool isNew = false;
            public bool isHot = false;
        }

        public ScrollRect scrollRect;
        public GameObject gameList;
        public GameObject gridItem;

		public GameDetail[] gameDetails;
		public GameDetail selectedDetail;

		public GameObject loginPage;
		public GameObject registerPage;

		public GameObject settingPanel;
		public Button settingBtn;
		public Button logoutBtn;

		public GameObject suggestionPanel;
        public Button suggestionBtn;

        public GameObject transactionPanel;
        public Button transactionBtn;

        public Text jackpotTxt;
		public float amount;

		public Animator runningTxtAnim;
		public Text runningTxt;
		public string[] tips;
		public int countTips;

		public GameObject[] sfxOnOff;
		public GameObject[] musicOnOff;
		public AudioClip bgm;
		AudioSource source;
		public BundleDownloadManager downloadManager;
        public RectTransform scrollObj;
        public SuggestionManager suggestM;

		private IconType iconType = IconType.Big;

		public void EnableSuggestion()
        {
            suggestM.EnableSuggestion(nameTxt.text);
        }
        void PlayMusic(AudioClip a)
		{
			source = GetComponent<AudioSource>();

			if (source.clip != a)
			{
				source.clip = a;
				source.ignoreListenerVolume = true;

				source.volume = PlayerPrefs.GetInt ("MusicV");
				source.loop = true;
				source.Play();
			}
		}
		public void SetMusic(){
			int v = PlayerPrefs.GetInt ("MusicV");
			if (v == 1) {
				v = 0;
                if (musicOnOff.Length != 0)
                {
                    musicOnOff[0].SetActive(false);
                    musicOnOff[1].SetActive(true);
                }
			} else {
				v = 1;
                if (musicOnOff.Length != 0)
                {
                    musicOnOff[1].SetActive(false);
                    musicOnOff[0].SetActive(true);
                }
			}
			source.volume = v;
			PlayerPrefs.SetInt ("MusicV",v);
		}
		public void SetSfx(){
			int v = PlayerPrefs.GetInt ("SfxV");
			if (v == 1) {
				v = 0;
                if (sfxOnOff.Length != 0)
                {
                    sfxOnOff[0].SetActive(false);
                    sfxOnOff[1].SetActive(true);
                }
			} else {
				v = 1;
                if (sfxOnOff.Length != 0)
                {
                    sfxOnOff[1].SetActive(false);
                    sfxOnOff[0].SetActive(true);
                }
			}
			PlayerPrefs.SetInt ("SfxV",v);
		}
		public void RunText(){
//			Debug.Log ("Run Text");
			//runningTxtAnim.Play ("Play");
			runningTxt.text = tips [countTips];

			countTips++;

			if (countTips >= tips.Length) {
				countTips = 0;
			}
		}
		public void GetBundleVersion(JSONNode node){
//			for (int i = 0; i < node.Count; i++) {
//				gameDetails [i].version = node[i];
//				GameDetail game = this.gameDetails [i];
//
//				if (downloadManager != null) {
//					BundleRoomModel model = new BundleRoomModel ();
//					model.id = game.gameId.ToString();
//					model.code = game.gameCode.ToString ();
//					model.url = game.gameDownloadUrl;
//					model.scene = game.scene;
//					model.version = game.version;
//
//					Debug.Log (model.url);
//					Debug.Log (Caching.IsVersionCached (model.url, model.version));
//					if (Caching.IsVersionCached (model.url, model.version)) {
//						game.downloadButton.SetActive (false);
//					} else {
//						game.downloadButton.SetActive (false);
//					}
//				}
//			}
		}
		void Awake()
		{
			if (PlayerPrefs.GetInt ("First") == 0) {
				PlayerPrefs.SetInt ("First", 1);
				PlayerPrefs.SetInt ("SfxV", 1);
				PlayerPrefs.SetInt ("MusicV", 1);
			}
			source = GetComponent<AudioSource>();
			int v = PlayerPrefs.GetInt ("MusicV");
			if (v == 0) {
                if (musicOnOff.Length != 0)
                {
                    musicOnOff[0].SetActive(false);
                    musicOnOff[1].SetActive(true);
                }
			} else {
                //PlayMusic (bgm);
                if (musicOnOff.Length != 0)
                {
                    musicOnOff[1].SetActive(false);
                    musicOnOff[0].SetActive(true);
                }
			}
			v = PlayerPrefs.GetInt ("SfxV");
			if (v == 0) {
                if (sfxOnOff.Length != 0)
                {
                    sfxOnOff[0].SetActive(false);
                    sfxOnOff[1].SetActive(true);
                }
			} else {
                if (sfxOnOff.Length != 0)
                {
                    sfxOnOff[1].SetActive(false);
                    sfxOnOff[0].SetActive(true);
                }
			}

            settingBtn.onClick.AddListener (() => {
				OnOffSettingPage();
			});
			suggestionBtn.onClick.AddListener(() => {
				OnOffSuggestionPanel();
			});
            transactionBtn.onClick.AddListener(() => {
                OnOffTransactionPanel();
            });
            logoutBtn.onClick.AddListener (() => {
				Logout();
			});

            for (int i = 0; i < this.gameDetails.Length; i++)
            {
                GameDetail game = this.gameDetails[i];
                game.gameButton.onClick.AddListener(() =>
                {
                    OnRequestGameToken(game);
                });
                game.highLightBtn.onClick.AddListener(() =>
                {
                    OnClickHighLight(game);
                });
            }
            
            if (PlayerPrefs.GetInt("BackFromFish") == 1)
            {
                int isHighlightGame = PlayerPrefs.GetInt("IsHightLight");
                for (int i = 0; i < this.gameDetails.Length; i++)
                {
                    GameDetail game = this.gameDetails[i];

                    if (isHighlightGame == 1)
                    {
                        string gameCode = "HightlightGame" + this.gameDetails[i].gameId + this.gameDetails[i].gameCode + this.gameDetails[i].gameArr;
                        int isHighLight = PlayerPrefs.GetInt(gameCode);
                        if (isHighLight == 1)
                            this.gameDetails[i].gameButton.gameObject.SetActive(true);
                        else
                            this.gameDetails[i].gameButton.gameObject.SetActive(false);
                    }
                    else
                    {
                        this.gameDetails[i].gameButton.gameObject.SetActive(true);
                    }
                }

                scrollObj.localPosition = new Vector3(PlayerPrefs.GetFloat("Scroll"), scrollObj.localPosition.y, 0f);
            }


			SetGameFilterButton(gameFilterButtons[0]);
			FilterAllGame(0);
			InvokeRepeating("RunText", 6, 7);
            CheckAllHightLight();
//			BundleDownloadManager.AddDelegates (StartDownloadBundle,FinishDownloadBundle,DownloadingBundle);
//			InvokeRepeating ("UpdateJackpotAmount", 0.5f, 0.5f);
        }

        public void showHotAndNew()
        {
            for (int i = 0; i < this.gameDetails.Length; i++)
            {
                GameDetail game = this.gameDetails[i];
                
                GameObject newImg = game.gameButton.transform.Find("new").gameObject;
                newImg.SetActive(game.isNew);
                GameObject hotImg = game.gameButton.transform.Find("hot").gameObject;
                hotImg.SetActive(game.isHot);
            }
        }

        public void AddGridItem(int addCount)
        {
            for (int j = 0; j < addCount; ++j)
            {
                Instantiate(gridItem).transform.parent = scrollRect.content;
            }
        }

        public void showGameIcon()
        {
            bool showBigIcon = false;
            if (iconType == IconType.Big)
                showBigIcon = true;

            for (int i = 0; i < this.gameDetails.Length; i++)
            {
                GameDetail game = this.gameDetails[i];
                game.gameButton.transform.parent = gameList.transform;
            }
            
            for (int i = scrollRect.content.transform.childCount - 1; i >= 0; i--)
            {
                GameObject.Destroy(scrollRect.content.transform.GetChild(i).gameObject);
            }

            int index = 0;
            // 用來記錄左右兩邊上一個是否為大圖
            List<bool> grid = new List<bool>();
            grid.Add(false);
            grid.Add(false);

            for (int i = 0; i < this.gameDetails.Length; i++)
            {
                GameDetail game = this.gameDetails[i];
                if (game.gameButton.gameObject.activeSelf == false) {
                    continue;
                }
                
                if (showBigIcon == true)
                {
                    GameObject bigIcon = game.gameButton.transform.Find("Icon/BigIcon").gameObject;
                    GameObject smallIcon = game.gameButton.transform.Find("Icon/SmallIcon").gameObject;
                    if (game.isBigIcon == true)
                    {
                        bigIcon.SetActive(true);
                        smallIcon.SetActive(false);
                    }
                    else
                    {
                        bigIcon.SetActive(false);
                        smallIcon.SetActive(true);
                    }

                    // 處理大小圖
                    int addCount = 0;
                    // 每次都必須檢查左右兩邊
                    for (int j = 0; j < 2; ++j)
                    {
                        if (grid[index] == true)
                        {
                            addCount++;
                            grid[index] = false;
                            index = (index == 0) ? 1 : 0;
                        }
                    }

                    AddGridItem(addCount);
                }

                game.gameButton.transform.parent = scrollRect.content;

                if (showBigIcon == true)
                {
                    grid[index] = game.isBigIcon;

                    if (i == this.gameDetails.Length - 1) {
                        if (index == 0) {
                            if (grid[0] == true) {
                                AddGridItem(2);
                            }
                            else if (grid[1] == true) {
                                AddGridItem(2);
                            }
                        }
                        else if (index == 1) {
                            if (grid[1] == true) {
                                AddGridItem(2);
                            }
                        }
                    }

                    index = (index == 0) ? 1 : 0;
                }
            }
        }

		public IEnumerator GetGameSetting()
		{
            string link = "https://example.invalid/st/public/slotLobbySetting.txt?r=" + Random.Range(0f, 1.0f);

            using (UnityWebRequest www = UnityWebRequest.Get(link))
            {
                yield return www.SendWebRequest();

                if (www.isNetworkError || www.isHttpError)
                {
                    Debug.LogError(www.error);

                    showGameIcon();
                }
                else
                {
                    string response = www.downloadHandler.text;
                    if (string.IsNullOrEmpty(response))
                        yield return null;

                    JSONNode json = JSON.Parse(response);
                    JSONArray datas = json["game"] as JSONArray;

                    GameDetail[] gameDetailsSort = new GameDetail[gameDetails.Length];
                    int index = 0;
                    for (int i = 0; i < datas.Count; i++)
                    {
                        var data = datas[i];
                        
                        for (int j = 0; j < gameDetails.Length; j++)
                        {
                            GameDetail game = gameDetails[j];
                            if (game != null && game.name == data["name"])
                            {
                                if (data["bigIcon"] != null)
                                    game.isBigIcon = data["bigIcon"];
                                if (data["hot"] != null)
                                    game.isHot = data["hot"];
                                if (data["new"] != null)
                                    game.isNew = data["new"];

                                gameDetailsSort[index] = game;
                                gameDetails[j] = null;
                                index++;
                            }
                        }
                    }

                    // 加上缺少的
                    for (int j = 0; j < this.gameDetails.Length; j++)
                    {
                        GameDetail game = this.gameDetails[j];
                        if (game != null)
                        {
                            gameDetailsSort[index] = game;
                            index++;
                        }
                    }

                    gameDetails = gameDetailsSort;

                    showHotAndNew();
                    showGameIcon();
                }
            }
		}
        
        void Update()
        {
        }

		public void LoadGame(int i){
			GameDetail game = this.gameDetails [i];
			OnRequestGameToken(game);
			OnClickHighLight(game);
		}

		public void UpdateAllGameThumnail(string txt){
			JSONNode json = JSON.Parse (txt);

			for (int i = 0; i < this.gameDetails.Length; i++) {
				GameDetail game = this.gameDetails [i];
				if (json [game.name] != "1") {
					if (this.gameDetails [i].maintenanceMode != null) {
						this.gameDetails [i].maintenanceMode.SetActive (true);
						this.gameDetails[i].maintenanceMode.GetComponentInChildren<Text>().text = "Maintenance Break";
						this.gameDetails [i].gameButton.onClick.RemoveAllListeners ();
					}
				} else {
					if(this.gameDetails [i].maintenanceMode!=null)
					this.gameDetails [i].maintenanceMode.SetActive (false);
				}
			}

            StartCoroutine(gameListPage.RefreshToggleCount());
        }

		public GameObject highLightMessage;
        public void EnableHighLight()
        {
			int isHighlightGame = 1;

			//int isHighlightGame = PlayerPrefs.GetInt("IsHightLight");

			//if(isHighlightGame== 0)
			//{
			//    isHighlightGame = 1;
			//    PlayerPrefs.SetInt("IsHightLight", 1);
			//}
			//else
			//{
			//    isHighlightGame = 0;
			//    PlayerPrefs.SetInt("IsHightLight", 0);
			//}

			int count = 0;
            for (int i = 0; i < this.gameDetails.Length; i++)
            {
                GameDetail game = this.gameDetails[i];

                if (isHighlightGame == 1)
                {
                    string gameCode = "HightlightGame" + this.gameDetails[i].gameId + this.gameDetails[i].gameCode + this.gameDetails[i].gameArr;
                    int isHighLight = PlayerPrefs.GetInt(gameCode);
					if (isHighLight == 1) {
						count++;
						this.gameDetails [i].gameButton.gameObject.SetActive (true);
					}
                    else
                        this.gameDetails[i].gameButton.gameObject.SetActive(false);
                }
                else
                {
                    this.gameDetails[i].gameButton.gameObject.SetActive(true);
                }
            }

			if (count == 0 && isHighlightGame == 1) {
				if(highLightMessage!=null)
				highLightMessage.SetActive (true);
			} else {
				if(highLightMessage!=null)
				highLightMessage.SetActive (false);
			}
			SetGameIconSize(IconType.Small);
			StartCoroutine(gameListPage.RefreshToggleCount());
        }
        public void CheckAllHightLight()
        {
            for(int i = 0; i < this.gameDetails.Length; i++)
            {
                string gameCode = "HightlightGame"+this.gameDetails[i].gameId + this.gameDetails[i].gameCode + this.gameDetails[i].gameArr;
                int isHighLight = PlayerPrefs.GetInt(gameCode);
                if (isHighLight == 0)
                {
                    this.gameDetails[i].highLightBtn.gameObject.transform.GetChild(0).gameObject.SetActive(false);
                }
                else
                {
                    this.gameDetails[i].highLightBtn.gameObject.transform.GetChild(0).gameObject.SetActive(true);
                }
            }
        }
        public void OnClickHighLight(GameDetail game)
        {
            string gameCode = "HightlightGame" + game.gameId + game.gameCode + game.gameArr;
            int isHighLight = PlayerPrefs.GetInt(gameCode);

            if(isHighLight == 0)
            {
                PlayerPrefs.SetInt(gameCode,1);
                game.highLightBtn.gameObject.transform.GetChild(0).gameObject.SetActive(true);
            }
            else
            {
                PlayerPrefs.SetInt(gameCode, 0);
                game.highLightBtn.gameObject.transform.GetChild(0).gameObject.SetActive(false);
            }
        }
//		public void CurrentBundleProgress(string id){
//			Debug.Log ("CurrentBundleProgress : " + id);
//		}
//		public void UpdateDownloadPercentage(string id){
//			Debug.Log ("FinishDownloadBundle : " + id);
//		}
		public void UpdateDownloadPercentage(BundleRoomModel room, int percent){
//			Debug.Log ("DownloadingBundle : "+room +" / " + percent.ToString());
			for (int i = 0; i < this.gameDetails.Length; i++) {
				if (gameDetails [i].gameId.ToString () == room.id && gameDetails[i].gameCode.ToString() == room.code) {
					float cent = (float)(100 - percent) / 100;
//					Debug.Log (cent);
					gameDetails [i].downloadImg.fillAmount = cent;
				}
			}
		}

		public void CompleteDownload(BundleRoomModel room){
			for (int i = 0; i < this.gameDetails.Length; i++) {
				if (gameDetails [i].gameId.ToString () == room.id && gameDetails[i].gameCode.ToString() == room.code) {
					gameDetails [i].downloadImg.gameObject.SetActive (false);
					gameDetails [i].downloadButton.SetActive (false);
					gameDetails [i].doneDownload = true;
				}
			}
		}
		void Start(){
			jpManager = GameObject.FindObjectOfType<JackpotDataManager> ();

            StartCoroutine(GetGameSetting());
        }
			
		void UpdateJackpotAmount(){
			amount += 1;
			jackpotTxt.text = amount.ToString("###,###,###,##0");
		}
		public void OnOffSettingPage(){
			if (settingPanel.activeInHierarchy) {
				settingPanel.SetActive (false);
			} else {
				settingPanel.SetActive (true);
			}
		}

		public void OnOffSuggestionPanel()
		{
			suggestionPanel.SetActive(!suggestionPanel.activeSelf);
		}

        public void OnOffTransactionPanel()
        {
            transactionPanel.SetActive(!transactionPanel.activeSelf);
        }
        
        public void Logout(){
			PlayerPrefs.SetInt ("BackFromFish", 0);
			SceneManager.LoadScene(1);
		}
		public void OpenLoginPage(){
			loginPage.SetActive (true);
		}
		public void CloseLoginPage(){
			loginPage.SetActive (false);
		}

		public void OpenRegisterPage(){
			registerPage.SetActive (true);
		}
		public void CloseRegisterPage(){
			registerPage.SetActive (false);
		}

        string name;
		public void OnSuccessReceiveLobbyInfo(string _name, double credit1){
            name = _name;
			if(nameTxt!=null)
            nameTxt.text = name;

            string str1;
            if (credit1.ToString().IndexOf(".") == -1)
            {
                str1 = string.Format("{0:N0}", credit1);
            }
            else
            {
                str1 = string.Format("{0:N}", credit1);
            }

            if (credit1Txt != null)
            {
                //credit1Txt.text = credit1.ToString();
                credit1Txt.text = str1;
            }

            //			credit2Txt.text = credit2.ToString();
            informationPanel.SetInformation(_name, str1);
        }
		public JackpotDataManager jpManager;
		public string jpToken;
		public void OnSuccessReceiveSessionInfo(string token){
			Debug.Log (token);
			jpToken = [REDACTED];
			jpManager.InitGame (token);
		}

		public void OnRequestGameToken(int id){
//			if (id == 33) {
//				controller.EnableLoading (true);
//				SceneManager.LoadSceneAsync ("CarRacing");
//				return;
//			}
			controller.OnRequestGameToken (id,"20");
        }
		BundleDownloadManager mydownload;
		public void OnRequestGameToken(GameDetail game){
            loading.SetActive(true);

            //			controller.OnRequestGameToken (game.gameId,game.gameCode);
            selectedDetail = game;

			if (game.gameId == 40) {
				OnReceiveGameToken ("123");
				return;
			} 
//			else if (game.gameId == 21) {
//				OpenInternalLink ("http://example.invalid/?token=[REDACTED]");
//				return;
//			} else if (game.gameId == 22) {
//				OpenInternalLink ("https://example.invalid/entry?params=c2l0ZT0x&SESSIONID=4c0d5a74f7683954217e79a8c48361c6a7b527d3");
//				return;
//			}

            controller.OnRequestSelectGameToken (game.gameId,game.gameCode);
		}
		IEnumerator LoadBundle(BundleRoomModel model) 
		{
			while (!Caching.ready)
			{
				yield return null;
			}

			//Begin download
			WWW www = WWW.LoadFromCacheOrDownload (model.url+"?"+model.version, 0);
			yield return www;

			//Load the downloaded bundle
			AssetBundle bundle = www.assetBundle;
			if (bundle.isStreamedSceneAssetBundle) {
				www.Dispose();
				SceneManager.LoadScene(model.scene);
			}
		}

		public GameObject uniWebPrefab;
		public bool isCreate = false;
		public void CreateUniWeb(){
			if (isCreate)
				return;
			isCreate = true;

			GameObject obj = Instantiate (uniWebPrefab) as GameObject;
			UniWebView web = obj.GetComponentInChildren<UniWebView> ();
			web.Load ("http://example.invalid/st/public/login2");
			web.Show ();
            web.OnMessageReceived += (view, message) => {
                if (message.Path.Equals("backlobby"))
                {
                    // Restart the game
                    Destroy(web.gameObject);
                }
            };
        }
		public bool isWaitingToken = [REDACTED];
		public bool isWaitingJP = false;
		public string extUrl = "";
		public void OnSuccessReceiveSessionInfo2(string token){
			Debug.Log (token);
			jpToken = [REDACTED];
			isWaitingJP = true;
			if (isWaitingToken) {
				extUrl =extUrl+"&jpToken=" + jpToken;
			}
			if (isWaitingJP && isWaitingToken) {
				OpenInternalLink(extUrl);
			}
		}
		public void OnReceiveGameToken(string token,string playerId=null){
			Debug.Log (token);
			if(jpManager!=null)
			jpManager.CleanUp ();
            PlayerPrefs.SetString ("GameToken",token);			
			GameDetail game = selectedDetail;

            PlayerPrefs.SetFloat("Scroll", scrollObj.localPosition.x);
			Screen.orientation = ScreenOrientation.Portrait;
			PlayerPrefs.SetInt ("webviewalpha", 1);
//			SceneManager.LoadSceneAsync ("SM_AC_FishScene4");
			if (game.gameId == 31) {
				PlayerPrefs.SetInt ("webviewalpha", 0);
				string url = "https://example.invalid/st/public/slotCrWeb.html?r=" + Random.Range (0f, 1.0f) + "&loginToken=" + token + "&gameType=" + game.gameArr;
//				string url = "http://0.0.0.0:8980/st/public/slotCrWeb3.html?r=" + Random.Range (0f, 1.0f) + "&loginToken=" + token + "&gameType=" + game.gameArr;
				string lobbyurl = "http://example.invalid/st/public/lobbyCrWeb.html?r=" + Random.Range (0f, 1.0f) + "&loginToken=" + token;

				Debug.Log (lobbyurl);
				//loading.SetActive(false);
				//Debug.Log(url);
				extUrl = url;
//				if (isWaitingJP) {
//					extUrl = extUrl + "&jpToken=" + jpToken;
//				}
				isWaitingToken = [REDACTED];
				if (isWaitingJP && isWaitingToken) {
					OpenInternalLink (extUrl);
				}
				return;
			} else if (game.gameId == 34) {
				string url = game.gameDownloadUrl + "?r=" + Random.Range (0f, 1.0f) + "&loginToken=" + token;
				Debug.Log (url);
				OpenInternalLink (url);
				return;
			} else if (game.gameId == 32) {
                Screen.orientation = ScreenOrientation.Landscape;
                string url = "http://0.0.0.0:8480/fs/secure/game/h5oceanking3/index.html" + "?r=" + Random.Range(0f, 1.0f) + "&gameToken=" + token;
                //url = "https://example.invalid/st/secure/game/OceanKing3/17" + "/index.html" + "?r=" + Random.Range(0f, 1.0f) + "&gameToken=" + token;
                Debug.Log (url);
				OpenInternalLink (url);
				return;
			}else if (game.gameId == 40) {
				string url = "https://example.invalid/st/secure/mobile/ionlivecasino/index.html";
				Debug.Log (url);
				OpenInternalLink (url);
				return;
			} else if (game.gameId == 118) {
				string url = "https://example.invalid/st/public/test3/index.html?" + "g=" + game.gameDownloadUrl + "&p=HYPHENSE&u=" + playerId + "&t=" + token + "&ak=57D78B1F1BBA4C44BD9119A04817C311&m=0&sfp=1&lsd=1&cr=THB&dn=0.1&mc=2&dh=1";
				//string url = "http://0.0.0.0:8980/st/public/test3/index.html?" + "g=" +game.gameDownloadUrl+ "&p=HYPHENSE&u=" + playerId + "&t="+ token+ "&ak=57D78B1F1BBA4C44BD9119A04817C311&m=0&sfp=1&lsd=1&cr=THB&dn=0.1&mc=2&dh=1";
				//string url = "http://0.0.0.0:8980/st/public/test4/index.html?" + "g=" + game.gameDownloadUrl + "&p=HYPHEN&u=idczaza04&t=Uz1ehfWWubq99N9q&ak=A0BA1797AC3B4B03976A4A915027541A&m=1&cr=IDR";
				//Debug.Log(url);
				extUrl = url;
				if (isWaitingJP) {
					extUrl = extUrl + "&jpToken=" + jpToken;
				}
				isWaitingToken = [REDACTED];
				if (isWaitingJP && isWaitingToken) {
					OpenInternalLink (extUrl);
				}
				return;
			} else if (game.gameId == 21) {
				string url = game.gameDownloadUrl + "?" + "token=" + token + "&type=live&mobile=1";
				OpenInternalLink (url);
				return;
			} else if (game.gameId >= 253) {
				OpenInternalLink (token);
				return;
			}

            if (loadLocal) {
				SceneManager.LoadSceneAsync (selectedDetail.scene);
			} else {
				
				if (downloadManager != null) {
					BundleRoomModel model = new BundleRoomModel ();
					model.id = game.gameId.ToString ();
					model.code = game.gameCode.ToString ();
					model.url = game.gameDownloadUrl;
					model.scene = game.scene;
					model.version = controller.GetVersion (game.name);
                    //SceneManager.LoadSceneAsync(selectedDetail.scene);
                    //return;
                    //Debug.Log (Caching.IsVersionCached (model.url, model.version));
                    if (Caching.IsVersionCached (model.url, model.version)) {
						if (game.doneDownload) {
							SceneManager.LoadSceneAsync (selectedDetail.scene);
						} else
							StartCoroutine (downloadManager.LoadAssetBundleFor (model));
					} else {
						loading.SetActive (false);
						game.downloadImg.gameObject.SetActive (true);
						game.downloadImg.fillAmount = 1;
						downloadManager.AddToDownload (model);
					}
				}
			}
		}
		public bool loadLocal;
		void OnDisable(){

		}

		public void OpenExternalLink(string url){
//			url = "https://example.invalid/";
			Application.OpenURL (url);
		}
		public GameObject uniWeb;
		public void OpenInternalLink(string url){
			Debug.Log (url);
            PlayerPrefs.SetString("GameUrl", url);
            //Application.OpenURL(url);
            SceneManager.LoadScene(2);
        }
        public void OnFinishLoadPage(UniWebView web,int statusCode,string url)
        {
            loading.SetActive(false);
            web.Show();
        }
        public bool OnShouldClose(UniWebView webView)
        {
            Destroy(uniWeb);
            return false;
        }

        int selectedId = 0;
        public void FilterAllGame(int gameId)
        {
            if (selectedId == gameId)
            {
                selectedId = 0;
            }
            else
                selectedId = gameId;

			if(selectedId == 0)
				PlayerPrefs.SetInt("IsHightLight", 0);
            PerformFilter(selectedId);
        }
//		public GameObject ioncasino;
        public void PerformFilter(int gameId)
        {
            for (int i = 0; i < gameDetails.Length; i++)
            {
				int gameType = (int)gameDetails [i].gameType;
				if ( gameType+1 == gameId || gameId == 0)
					gameDetails [i].gameButton.gameObject.SetActive (true);
//				else if (gameId == 31 && gameDetails [i].gameId == 118 ) {
//					gameDetails [i].gameButton.gameObject.SetActive (true);
//				}
                else
                    gameDetails[i].gameButton.gameObject.SetActive(false);
            }

			LeanTween.delayedCall (gameObject,0.05f, () => {
				if (gameId == 1) {
					scrollObj.localPosition = new Vector3 (-358f, scrollObj.localPosition.y, 0f);
				} else if (gameId == 2) {
					scrollObj.localPosition = new Vector3 (-184f, scrollObj.localPosition.y, 0f);
				} else if (gameId == 3) {
					scrollObj.localPosition = new Vector3 (-267f, scrollObj.localPosition.y, 0f);
				} else if (gameId == 4) {
					scrollObj.localPosition = new Vector3 (0, scrollObj.localPosition.y, 0f);
				}
			});
			SetGameIconSize(IconType.Big);
			StartCoroutine(gameListPage.RefreshToggleCount());
        }
        public void PerformFilterPlayerNum(int game){
			for (int i = 0; i < gameDetails.Length; i++)
			{
				int gameType = (int)gameDetails[i].gameType;
				gameDetails[i].gameButton.gameObject.SetActive(game == gameType);
			}
			SetGameIconSize(IconType.Big);
            StartCoroutine(gameListPage.RefreshToggleCount());

        }
        public ScrollRect scoller;
		public float[] pagenumlist;
		public void ClickLeftButton(){
			for(int i=pagenumlist.Length-1;i>0;i--){
//				Debug.Log (scoller.horizontalNormalizedPosition + " / " + pagenumlist [i - 1]);
				if (scoller.horizontalNormalizedPosition > pagenumlist[i-1]) {
//					Debug.Log (scoller.horizontalNormalizedPosition + " < " + pagenumlist [i - 1]);
					scoller.horizontalNormalizedPosition = pagenumlist[i-1]-0.01f;
					break;
				}
			}
		}
		public void ClickRightButton(){
			for(int i=0;i<pagenumlist.Length-1;i++){
//				Debug.Log (scoller.horizontalNormalizedPosition + " / " + pagenumlist [i + 1]);
				if (scoller.horizontalNormalizedPosition < pagenumlist[i+1]) {
//					Debug.Log (scoller.horizontalNormalizedPosition + " < " + pagenumlist [i + 1]);
					scoller.horizontalNormalizedPosition = pagenumlist[i+1]+0.01f;
					break;
				}
			}
		}

		[SerializeField] List<Button> gameFilterButtons = new List<Button>();
		[SerializeField] Button openGameFilterButton;
		[SerializeField] Animator gameFilterRoot;
		private bool gameFilterRootIsOpen = false;

		List<Color> gameFilterColor = new List<Color>
		{
			new Color(251/255f, 1  /255f, 119/255f),
			new Color(251/255f, 228/255f, 73 /255f),
			new Color(73 /255f, 255/255f, 146/255f),
			new Color(209/255f, 137/255f, 255/255f),
			new Color(251/255f, 164/255f, 73 /255f),
			new Color(76 /255f, 228/255f, 255/255f)
		};
		public void SwitchGameFilterRoot()
		{
			gameFilterRoot.Play(gameFilterRootIsOpen ? "Off" : "On");
			gameFilterRootIsOpen = !gameFilterRootIsOpen;
		}

		public void SetGameFilterButton(Button selectButton)
		{
			int index = 0;
			foreach (Button btn in gameFilterButtons)
			{
				bool selected = btn == selectButton;
				Text text = btn.transform.Find("Text").GetComponent<Text>();
				Image openButtonImage = openGameFilterButton.transform.GetChild(index).GetComponent<Image>();

				if (selected)
				{
					text.color = gameFilterColor[index];
					btn.image.color = gameFilterColor[index];
					openButtonImage.gameObject.SetActive(true);
					openGameFilterButton.targetGraphic = openButtonImage;
				}
				else
				{
					text.color = Color.white;
					btn.image.color = Color.white;
					openButtonImage.gameObject.SetActive(false);
				}
				index++;
			}
			gameFilterRoot.Play("Off");
			gameFilterRootIsOpen = false;
		}

		public void SetGameIconSize(IconType type)
		{
			if (iconType == type)
                return;

			iconType = type;

			foreach (GameDetail game in gameDetails)
			{
				Transform t = game.gameButton.transform.Find("Icon");
				if (t)
				{
					t.Find("BigIcon").gameObject.SetActive(type == IconType.Big);
					t.Find("SmallIcon").gameObject.SetActive(type == IconType.Small);
				}
			}

            showGameIcon();
		}

	}
}