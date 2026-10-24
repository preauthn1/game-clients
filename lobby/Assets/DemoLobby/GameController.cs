using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using SimpleJSON;
using UnityEngine.UI;
using System;
using example.invalid;


namespace BetVictor
{
    public class GameController : MonoBehaviour {
        //Manager
        public DataManager db;
        public LoginManager loginManager;
        public LobbyManager lobbyManager;
        public ErrorManager errorManager;

        public DepositManager depositManager;
        public WithdrawManager withdrawManager;
        public string versionTxt;

        public GameObject maintenanceObj;
        public Text maintenanceTxt;
        public Button maintenanceBtn;
        public GameObject newVersionOj;
        public string link;
        public Button newVersionBtn;

		AndroidJavaClass activityClass = null;
		AndroidJavaClass pluginClass = null;
		AndroidJavaObject activity = null;
		AndroidJavaObject pluginActivity = null;
		string targetPluginFQCN = "com.vmsoft.utility.AppUpdater";		


		public GameObject gameUpdateProgress;
		public Text progressText;
		private float downloadProgress = 0;
        // Use this for initialization
        void Start() {
            Screen.fullScreen = false;

            db.controller = this;
            loginManager.controller = this;
            lobbyManager.controller = this;

        #if UNITY_ANDROID && !UNITY_EDITOR
			// must call java class before call function for download
			activityClass = new AndroidJavaClass ("com.unity3d.player.UnityPlayer");
			activity = activityClass.GetStatic<AndroidJavaObject> ("currentActivity");
			//				pluginClass = new AndroidJavaClass ("com.poker8.externalplugin.plugin"); // plugin name
			pluginActivity = new AndroidJavaObject (targetPluginFQCN, new object[]{ activity }); // plugin instance
			//				pluginActivity.Call ("setContext", activity); // plugin context activity
			//				pluginActivity.Call ("setActivity", activity); // android activity connection
			//
			//#elif UNITY_IOS
			//	Application.OpenURL("itms-services://?action=download-manifest&url=http://example.invalid/st/public/prod/ios/newpoker.plist");
        #endif
        }
        public void EnableMaintenance(string fromTime, string toTime) {
            maintenanceObj.SetActive(true);
            maintenanceTxt.text = "Server under maintainance. From " + fromTime + " to " + toTime;
            maintenanceBtn.onClick.AddListener(() => {
                Application.Quit();
            });
        }
		public void EnableUpdateVersion(string _link) {
            //link = ConfigFile.downloadLink;
			link = _link;
            newVersionOj.SetActive(true);
            newVersionBtn.onClick.AddListener(() => {
				EnableDownloadLink();
            });
        }
		public void UpdateAllGameThumnail(){
			lobbyManager.UpdateAllGameThumnail (versionTxt);
		}
		public void EnableDownloadLink(){
			#if UNITY_ANDROID
			StartCoroutine (DownloadAndInstallAPK (link+"?v=", RandomVerification ()));
			#elif UNITY_IOS
			gameUpdateProgress.SetActive(true);
			Application.OpenURL("itms-services://?action=download-manifest&url=https://example.invalid/st/public/prod/ios/king988.plist");
			Application.Quit();
			#endif
		}


		private IEnumerator DownloadAndInstallAPK(string url, int random)
		{
			float progress = 0f;
			WWW www = new WWW(url);
			gameUpdateProgress.SetActive(true);

			while (!www.isDone)
			{
				progress = (www.progress*100);
				downloadProgress = (int) progress;
				progressText.GetComponent<Text>().text = downloadProgress + "%";
				yield return null;
			}

			//			isDone = true;
			downloadProgress = 100;

			string fileName = url.Substring(url.LastIndexOf("/") + 1); //this is the file name. from the last slash.
			fileName = fileName.Substring(0, fileName.IndexOf("?"));
			fileName = fileName.Replace(".", "_" + random + ".");


			string _fullPath = Application.persistentDataPath + "/" + fileName;

			File.WriteAllBytes(_fullPath, www.bytes);
			fullPath = _fullPath;
			//			activity.Call("runOnUiThread", new AndroidJavaRunnable(() => {
			//				pluginActivity.Call("ManualInstallPath", fullPath); // plugin name to download with url
			//			}));
			InstallApk();
			//			InstallApp2(fullPath);
		}
		public string fullPath;
		public void InstallApk(){

			#if UNITY_ANDROID

			string completedPath= "file://" + fullPath;

			activity.Call ("runOnUiThread", new AndroidJavaRunnable (() => {
				Debug.Log ("Executing the download method call");

				pluginActivity.Call ("install", completedPath); // plugin name to download with url
			}));

			#endif
		}

		int RandomVerification()
		{
			int a = UnityEngine.Random.Range(0, 999999);
			return a;
		}
        public void OpenLink() {
            Application.OpenURL(link);
        }
        public void OnRequestLogin(string user, string pass) {
            EnableLoading(true);
            db.OnRequestLogin(user, pass);
            //			OnSuccessLogin();
        }
        public void GetBundleVersion(JSONNode result) {
            lobbyManager.GetBundleVersion(result);
        }
        public void OnSuccessLogin() {
            EnableLoading(false);
            loginManager.OnSuccessLogin();
        }
		public void GetPlayerSession(){
			db.OnRequestPlayerSessionInfo ();
		}
		public void OnRequestSelectToken(int _gameId, string _gameCode) {
			// 31 slot/arcade
			// 32 fish
			// 3 tangkas
			db.OnRequestSelectToken(_gameId, _gameCode);
		}
        public void OnRequestGameToken(int _gameId, string _gameCode) {
            // 31 slot/arcade
            // 32 fish
            // 3 tangkas
            db.OnRequestGameToken(_gameId, _gameCode);
        }
        public void OnRequestSelectGameToken(int _gameId, string _gameCode) {
            // 31 slot/arcade
            // 32 fish
            // 3 tangkas
            db.OnRequestSelectGameToken(_gameId, _gameCode);
        }
        public void OnSuccessReceiveLobbyInfo(string name, double credit1) {
            lobbyManager.OnSuccessReceiveLobbyInfo(name, credit1);
        }
		public void OnSuccessReceiveSessionInfo(string token) {
			lobbyManager.OnSuccessReceiveSessionInfo(token);
		}
		public void OnSuccessReceiveSessionInfo2(string token) {
			lobbyManager.OnSuccessReceiveSessionInfo2(token);
		}
        public void OnGetGameTokenResponse(string loginToken,string playerId=null) {
            //			EnableLoading (false);
            lobbyManager.OnReceiveGameToken(loginToken, playerId);
        }
        float loadingTimer;
        public GameObject loadingObj;
        public void EnableLoading(bool isActive) {
            loadingTimer = 0;
            loadingObj.SetActive(isActive);
        }
        void Update() {
            if (loadingObj.activeInHierarchy) {
                loadingTimer += Time.deltaTime;
                if (loadingTimer > 20) {
                    loadingTimer = 0;
                    OnEnableErrorMsg("Timed Out!!!", 0);
                }
            }

        }
        public void OnEnableErrorMsg(string msg, int type) {
            EnableLoading(false);
            errorManager.OnEnableErrorMsg(msg, type);
        }


        public void SetVersionTxt(string txt) {
            versionTxt = txt;
        }

        public int GetVersion(string name) {
            return 1;
            JSONNode json = JSON.Parse(versionTxt);
            int v = json[name].AsInt;

            return v;
        }

        #region DepositManager
        public void EnableDepositManager() {
            depositManager.EnableManager();
        }
        public void OnRequestGetDeposit() {
            EnableLoading(true);
            db.OnRequestGetDeposit();
        }
        public void OnGetDepositResponse(DepositData data) {
            EnableLoading(false);
            depositManager.OnGetDepositResponse(data);
        }
        public void OnRequestPostDeposit(string id, int amount) {
            EnableLoading(true);
            db.OnRequestPostDeposit(id, amount);
        }
        public void OnPostDepositResponse(string response) {
            EnableLoading(false);
            depositManager.OnPostDepositResponse(response);
        }
        #endregion

        #region WithdrawManager
        public void EnableWithdrawManager() {
            withdrawManager.EnableManager();
        }
        public void OnRequestGetWithdraw() {
            EnableLoading(true);
            db.OnRequestGetWithdraw();
            db.OnRequestGetUserBank();
            //
        }
        public void OnRequestPlayerGameInfo(){
            db.OnRequestPlayerGameInfo();
        }

		public void OnGetWithdrawBankResponse(WithdrawData data){
			EnableLoading (false);
			withdrawManager.OnGetWithdrawBankResponse (data);
		}
		public void OnGetP2PResponse(WithdrawData data){
			EnableLoading (false);
			withdrawManager.OnGetWithdrawBankResponse (data);
		}
		public void OnGetWithdrawResponse(WithdrawData data){
			EnableLoading (false);
			withdrawManager.OnGetWithdrawResponse (data);
		}
		public void OnRequestPostWithdraw(int amount){
			EnableLoading (true);
			db.OnRequestPostWithdraw (amount);
		}
		public void OnPostWithdrawResponse(string response){
			EnableLoading (false);
			withdrawManager.OnPostWithdrawResponse (response);
		}
		#endregion
	}
}