using System;
using System.Collections.Generic;
using UnityEngine;
using VMSoft;
using example.invalid;
using VMSoft.SlotMachine;
using example.invalid.MobileService;

namespace example.invalid
{
    public class OneSGameConnectionManager: IRequester
    {
        public enum AppKey { OneSGames, Live22 }

        //Game Connector
		VersionConnector versionConnector;
        LoginConnector loginConnector;
        GameLoginConnector gameLoginConnector;
        FakeOpLoginConnector fakeOpLoginConnector;

        //====== Private ============================
        MonoBehaviour mono;
        Configuration.Environment environment;

        public OneSGameConnectionManager(MonoBehaviour mono, Configuration.Environment environment){
            this.mono = mono;
            this.environment = environment;
            Init();
        }

        void Init(){
            
            //init setup
            Debug.Log("<color=cyan>OneSGameConnectionManager initialized env:</color>" + this.environment);

            BaseConnector.AllowConnectionLog = Configuration.isDEVorUAT;

			versionConnector = new VersionConnector();
			versionConnector.SetRequester(this);

            loginConnector = new LoginConnector();
            loginConnector.SetRequester(this);
            gameLoginConnector = new GameLoginConnector();
            gameLoginConnector.SetRequester(this);

            fakeOpLoginConnector = new FakeOpLoginConnector();
            fakeOpLoginConnector.SetRequester(this);

			versionConnector.SetEnvironment(this.environment);
        }

		public void DoVersionInfo(){
			
			versionConnector.RequestLobbyInfo = true;
			mono.StartCoroutine (versionConnector.Connect ());
		}

        public void DoLogin(string _username, string _password, string _appKey)
        {
            Debug.Log("initiate login");
            LoginConnector.PlayerLoginRequest request = new LoginConnector.PlayerLoginRequest();
            request.playerLoginId = _username;
            request.playerPassword = [REDACTED];
            request.appKey = _appKey;

            loginConnector.SetParam(request);
            mono.StartCoroutine(loginConnector.Connect());
        }

        public void DoGameLogin(string _gameId, int clientId, string operatorId, string lobbyToken)
        {
            Debug.Log("initiate game login");

            gameLoginConnector.SetGameData(lobbyToken, _gameId, operatorId, clientId);
            mono.StartCoroutine(gameLoginConnector.Connect());
        }

        /// <summary>
        /// This is the FakeOpLogin that is used in a complete DEV environment,
        /// current use-case only in existing in house 1s Game Development Team. 
        /// </summary>
        public void DoFakeOpLogin(string _username, string _gameId, int clientId, string protocolVersion){
            Debug.Log("going to start lookup");

            GameProperties gameProperties = GameProperties.FindOrCreateIt();
            gameProperties.InitSettingWith(protocolVersion);

            FakeOpLoginConnector.OpLoginRequest request = new FakeOpLoginConnector.OpLoginRequest();
            fakeOpLoginConnector.GameServerUrl = gameProperties.GetGameServiceUrl();
            //where we need to get the game server url first, before we could get the opId..

            request.SlotId = _gameId;
            request.Client = clientId;
            request.LoginId = _username;

            request.OPId = gameProperties.OpId();
            request.ProtocolVersion = protocolVersion;


            fakeOpLoginConnector.SetParam(request);
            mono.StartCoroutine (fakeOpLoginConnector.Connect());
        }

        #region SupportingFunction

        string GetAppKey(AppKey _appKey)
        {
            switch (_appKey)
            {
                case AppKey.OneSGames:
                    return "1sgames";
                case AppKey.Live22:
                    return "live22";
            }

            return "";
        }

        public void OnRequestSuccess(string response, string connectorId)
        {
			if(connectorId == versionConnector.GetId())
			{
				//the connection lobby url would have been processed by the Connector internally.
				Debug.Log("version & server info data received");
				BaseConnector.SetLobbyServiceHost(DataManager.Instance.serviceManager.lobbyServiceUrl);
				if(responder!=null)
					responder.OnVersionInfoSuccess(response);
			}
            else if (connectorId == loginConnector.GetId())
            {
				if (loginConnector.ResponseData.status == 200) {
					if (responder != null)
						responder.OnLoginSuccess (
							loginConnector.ResponseData.token, 
							loginConnector.ResponseData.operatorId);
				} else {
					//Returning error message
					OnRequestFailed(loginConnector.ResponseData.status, 
						loginConnector.ResponseData.message,
						loginConnector.GetId());
				}
            }
            else if (connectorId == gameLoginConnector.GetId())
            {
                if(gameLoginConnector.ResponseData.status == 200){
                    if (responder != null)
                        responder.OnGameLoginSuccess(gameLoginConnector.ResponseData.gameTicket,
                                                     gameLoginConnector.ResponseData.gameUrl);
                }
                else{
                    //Returning error message
                    OnRequestFailed(gameLoginConnector.ResponseData.status, 
                                    gameLoginConnector.ResponseData.message,
                                    gameLoginConnector.GetId());
                }
            }
            else if( connectorId == fakeOpLoginConnector.GetId())
            {
                FakeOpLoginConnector.OpLoginResponse responseData =
                                        fakeOpLoginConnector.Resolve(response);
                //Debug.Log(responseData.ToString());

                if(responseData.Status == 200){
                    //Returning to indicate gameLogin Success
                    if(responder!= null) 
                        responder.OnGameLoginSuccess(responseData.SessionId,
                                                 responseData.GameServerUrl);
                }
                else{
                    //Returning error message
                    OnRequestFailed(responseData.Status, 
                                    responseData.StatusDescription,
                                    fakeOpLoginConnector.GetId());
                }
            }
            else {
                Debug.LogWarning(String.Format("There is a connectorId not recognized {0}" + connectorId));
            }
        }

        public void OnRequestFailed(int code, string message, string connectorId)
        {
            string errorMsg = string.Format("code:{0}, message:{1}, connectorId:{2}", code, message, connectorId);
            Debug.LogWarning(errorMsg);

            if (responder != null)
           		 responder.OnFailed(code, message);
          
        }

        #endregion


        private IResponder responder;

        public void SetResponder(IResponder responder)
        {
            this.responder = responder;
        }

        #region 
        public interface IResponder
        {
			void OnVersionInfoSuccess(string response);
			void OnLoginSuccess(string token, string operatorId);
            void OnGameLoginSuccess(string gameToken, string gameServerUrl);
            void OnFailed(int code, string message);
        }
        #endregion
    }

}
