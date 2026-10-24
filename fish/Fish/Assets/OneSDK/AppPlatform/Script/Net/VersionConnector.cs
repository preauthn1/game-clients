using UnityEngine;
using System;
using SimpleJSON;
using VMSoft.SlotMachine;
using VMSoft.Utils;
using UnityEngine.SceneManagement;
using LobbyServiceAPI = VMSoft.SlotMachine.DataManager.GameServicesManager.LobbyServiceAPI;
using System.Collections.Generic;
using example.invalid;
using OneSDK.StarterPack;

namespace example.invalid.MobileService
{
    public class VersionConnector : BaseConnector
    {
        public string UpdateUrl
        {
            get; set;
        }
        public int LatestVersion
        {
            get; set;
        }
        public bool RequestLobbyInfo { get; set; }

        public override RequestMethod GetRequestMethod()
        {
            return RequestMethod.GET;
        }

		Configuration.Environment target = Configuration.Environment.UNASSIGNED;
        public override string GetUrl()
        {
            return Configuration.GetServerUrl(target) + "/mobileservice/app/version" + AppendQueries();
            //return Configuration.GetServerUrl() + "/app/version" + AppendQueries();
        }

		/// <summary>
		/// Set this environment earlier may direct the versionConnector to query from the desired source
		/// </summary>
		/// <param name="target">Target.</param>
		public void SetEnvironment(Configuration.Environment target){
			this.target = target;
		}

        public override string InitParameters()
        {
            return "";
        }

        protected override void OnSuccess(string response)
        {
            JSONNode jsonResponse = JSON.Parse(response);

            if (RequestLobbyInfo)
            {
                DataManager.Instance.serviceManager.downloadUrl = WWW.UnEscapeURL(jsonResponse["version"]["downloadUrl"]);
                DataManager.Instance.serviceManager.appUrl = WWW.UnEscapeURL(jsonResponse["version"]["appUrl"]);
                DataManager.Instance.serviceManager.roomUrl = WWW.UnEscapeURL(jsonResponse["version"]["roomUrl"]);
                DataManager.Instance.serviceManager.iosPlistAPI = WWW.UnEscapeURL(jsonResponse["api"]["iosPlist"]);
                DataManager.Instance.serviceManager.assetAPI = WWW.UnEscapeURL(jsonResponse["api"]["asset"]);
                DataManager.Instance.serviceManager.lobbyServiceUrl = WWW.UnEscapeURL(jsonResponse["lobby"]["serviceUrl"]);
                DataManager.Instance.serviceManager.lobbyServiceApiDict = new System.Collections.Generic.Dictionary<LobbyServiceAPI, string>();


                DataManager.Instance.serviceManager.lobbyServiceApiDict.Add(LobbyServiceAPI.login, jsonResponse["lobby"][LobbyServiceAPI.login.ToString()]);
                DataManager.Instance.serviceManager.lobbyServiceApiDict.Add(LobbyServiceAPI.balance, jsonResponse["lobby"][LobbyServiceAPI.balance.ToString()]);
                DataManager.Instance.serviceManager.lobbyServiceApiDict.Add(LobbyServiceAPI.createShortLogin, jsonResponse["lobby"][LobbyServiceAPI.createShortLogin.ToString()]);
                DataManager.Instance.serviceManager.lobbyServiceApiDict.Add(LobbyServiceAPI.logout, jsonResponse["lobby"][LobbyServiceAPI.logout.ToString()]);
                DataManager.Instance.serviceManager.lobbyServiceApiDict.Add(LobbyServiceAPI.status, jsonResponse["lobby"][LobbyServiceAPI.status.ToString()]);
                DataManager.Instance.serviceManager.lobbyServiceApiDict.Add(LobbyServiceAPI.statement, jsonResponse["lobby"][LobbyServiceAPI.statement.ToString()]);
                DataManager.Instance.serviceManager.lobbyServiceApiDict.Add(LobbyServiceAPI.jackpot, jsonResponse["lobby"][LobbyServiceAPI.jackpot.ToString()]);
                DataManager.Instance.serviceManager.lobbyServiceApiDict.Add(LobbyServiceAPI.gamelist, jsonResponse["lobby"][LobbyServiceAPI.gamelist.ToString()]);
                DataManager.Instance.serviceManager.lobbyServiceApiDict.Add(LobbyServiceAPI.gamelogin, jsonResponse["lobby"][LobbyServiceAPI.gamelogin.ToString()]);
                DataManager.Instance.serviceManager.lobbyServiceApiDict.Add(LobbyServiceAPI.playerinfo, jsonResponse["lobby"][LobbyServiceAPI.playerinfo.ToString()]);
                DataManager.Instance.serviceManager.lobbyServiceApiDict.Add(LobbyServiceAPI.jCasinoForward, jsonResponse["lobby"][LobbyServiceAPI.jCasinoForward.ToString()]);
            }
            base.OnSuccess(response);
        }

        //Read all the code in the array and convert into a string
        List<string> ReadAllCode(JSONArray jsonArray){
            List<string> tempStringList = new List<string>();
            foreach(JSONNode node in jsonArray){
                tempStringList.Add(node);
            }

            return tempStringList;
        }

        public bool IsUpdateNeeded(string response, Action onNoErrorFinishFunction)
        {

            JSONNode jsonResponse = JSON.Parse(response);
            bool updateRequired = jsonResponse["version"]["needUpdate"].AsBool;
            int serverBuildNumber = jsonResponse["version"]["latestBuildNumber"].AsInt;
            bool isOffline = jsonResponse["version"]["isOffline"].AsBool;
            DataManager.Instance.isMaintenance = isOffline;

            if (!isOffline)
            {
                Debug.Log(String.Format("Mobile Service (latest) version: <color=orange>{0}</color> Client version <color=orange>{1}</color>"
                                        ,serverBuildNumber, Configuration.BUILD_NUMBER));

                //#1 Check for the game version - "The VersionCode" in the server is actually the BuildNumber..
                if ((updateRequired || serverBuildNumber > Configuration.BUILD_NUMBER)
#if UNITY_EDITOR
                        /* if the skipVersionCheck is Enable, the latter will always give FALSE with ! sign, thus we will be skipping this version checking */
                        && !DataManager.Instance.ignoreVersion
#endif
                )
                {
                    string updateURL = string.Empty;
#if UNITY_ANDROID
                    updateURL = DataManager.Instance.serviceManager.downloadUrl + DataManager.Instance.serviceManager.appUrl;
#elif UNITY_IOS || UNITY_IPHONE
                    //this is slightly different because for iOS we're calling a plist (this is an API) 
                    //instead of directly downloading the *.ipa file
                    updateURL = Configuration.GetServerUrl() + DataManager.Instance.serviceManager.iosPlistAPI;
#elif UNITY_STANDALONE
                    updateURL = DataManager.Instance.serviceManager.downloadUrl + DataManager.Instance.serviceManager.appUrl;
#endif
                    updateRequired = true;
                    Debug.Log("<color=orange>Update url: </color>" + updateURL);
                    this.UpdateUrl = updateURL;
                    this.LatestVersion = serverBuildNumber;
                }
                else
                {
                    //Process do to the next onFinishFunction.
                    updateRequired = false;
                    onNoErrorFinishFunction();
                }
            }
            else
            {
                //replace with new error message handling
                AGameHelper.FindGameHelper().ReportError(-1,LanguageManager.CurrentLocaleData().titleMaintenance,"");
                //ErrorMessageManager.Instance.ShowFixErrorMessage(LanguageManager.CurrentLocaleData().titleMaintenance);


                if (SceneManager.GetActiveScene().buildIndex != Configuration.SCENE_LOGIN)
                    SceneManager.LoadSceneAsync(Configuration.SCENE_LOGIN);
            }
            //#2 Pre-Operator URL: we always need to save this operator url thing.
            //string tempEncryptedPreOperatorURL = jsonResponse["VersionControl"]["OperatorUrl"][Configuration.environment.ToString()];
            //DataManager.Instance.preOperatorURL = EncryptionTool.Decrypt(tempEncryptedPreOperatorURL, Configuration.DECRYPTION_KEY);

            return updateRequired;
        }

        public string AppendQueries()
        {
            string tempQuery = string.Format("?client={0}&build={1}&appKey={2}",
                                             (int)Configuration.ClientPlatform,
                                             Configuration.BUILD_NUMBER,
                                             Configuration.CurrentAppKeyString);
            if (RequestLobbyInfo)
                tempQuery += "&lobby=y";

            return tempQuery;
        }

    }
}
