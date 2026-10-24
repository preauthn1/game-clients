using System.Collections;
using System.Collections.Generic;
using example.invalid;
using SimpleJSON;
using UnityEngine;
using UnityEngine.UI;
using System;
using UnityEngine.Networking;

namespace BetVictor
{
	public class LoginManager : MonoBehaviour {

		public GameController controller;
		public InputField userInput;
		public InputField passInput;

		public GameObject gameUpdateProgress;
		public Text progressText;
		private float downloadProgress = 0;
		public string versionTxt = "1.0.0";
		public Toggle rememberMe;


		public GameObject mainObj;
        public LobbyAudioManager am;
        public ChangeLanguageManager lm;

		private bool signedIn = false;
		public bool SignedIn
		{
			get
			{
				return signedIn;
			}
		}
		void OnLoad(){
			mainObj.SetActive (false);
		}
		void Start(){
            Screen.sleepTimeout = SleepTimeout.NeverSleep;
            Screen.fullScreen = true;
			//lm.SetLanguage(PlayerPrefs.GetInt("Language"));
			lm.SetLanguage(1);
			if (PlayerPrefs.GetInt ("SaveId") == 1) {
				rememberMe.isOn = true;
				userInput.text = PlayerPrefs.GetString ("UserName");
				passInput.text = PlayerPrefs.GetString ("Password");
			}

			if (PlayerPrefs.GetInt ("BackFromFish") == 1) {
				PlayerPrefs.SetInt ("BackFromFish", 0);
				userInput.text = PlayerPrefs.GetString ("UserName");
				passInput.text = PlayerPrefs.GetString ("Password");
				OnRequestLogin ();
			} else {
				mainObj.SetActive (true);

                if(am!=null)
                am.PlayLoginBGM();
            }

//			return;
			//if (Application.platform == RuntimePlatform.Android) {

			CheckVersion();
		}

		public void CheckVersion(){
			try{
				string link = "https://example.invalid/st/public/prod/android/version.txt";
				#if UNITY_IOS
				       link = "https://example.invalid/st/public/prod/ios/version.txt";
				#endif

//				HTTPRequest request = new HTTPRequest(new Uri(link), HTTPMethods.Get, OnSuccess);
//				request.Send();
//				StartCoroutine(Get(link));
			}
			catch(InvalidCastException e){
				Debug.Log ("Error Occur!!!");
			}
		}
//		public IEnumerator Get(string link)
//		{
//			using (UnityWebRequest www = UnityWebRequest.Get(link))
//			{
//				yield return www.SendWebRequest();
//
//				if (www.isNetworkError || www.isHttpError)
//				{
//					Debug.Log(www.error);
//				}
//				else
//				{
//					string response = www.downloadHandler.text;
//					if (String.IsNullOrEmpty (response))
//						yield return null;
//
//					JSONNode json = JSON.Parse (response);
//					if (json["version"] != ConfigFile.version) {
//						Debug.Log ("Version Different");
//						controller.EnableUpdateVersion (json["link"]);
//						yield return null;
//					}
//					if (controller != null) {
//						controller.SetVersionTxt (response);
//						controller.UpdateAllGameThumnail ();
//					}
//					Debug.Log ("Version Same");
//				}
//			}
//		}

		// Use this for initialization
		public void OnRequestLogin(){
			if (rememberMe.isOn) {
				PlayerPrefs.SetInt ("SaveId", 1);
			} else {
				PlayerPrefs.SetInt ("SaveId", 0);
			}
			PlayerPrefs.SetString ("UserName", userInput.text);
			PlayerPrefs.SetString ("Password", passInput.text);
			controller.OnRequestLogin (userInput.text, passInput.text);
//			controller.OnRequestLogin ("satest12", "abc123");
		}

		public void OnSuccessLogin(){
            if (am != null)
                am.PlayLobbyBGM();
			gameObject.SetActive (false);
			signedIn = true;
		}

	}
}
