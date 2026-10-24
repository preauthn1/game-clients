using System.Collections.Generic;
using OneSDK.Slot;
using example.invalid;
using UnityEngine;
using VMSoft;
using VMSoft.Lobby.Model;
using example.invalid;
using VMSoft.SlotMachine;

namespace example.invalid
{
    public class OneSlotConnectionManager : IRequester
    {

        //Private ==
        MonoBehaviour mono;
        string serverUrl;
        string protocolVersion;
        string sessionId;
        string gameId;
        //Private ==

        FakeOpLoginConnector fakeOpLoginConnector;

        SlotServerInfoConnector serverInfoConnector;
        SlotLoginConnector loginConnector;
        SlotSpinConnector spinConnector;
        SlotJackpotStatusConnector jackpotStatusConnector;

        public OneSlotConnectionManager(MonoBehaviour mono, string serverUrl, string protocolVersion,
                                       string sessionId, string gameId)
        {
            this.mono = mono;
            this.serverUrl = serverUrl;
            this.protocolVersion = protocolVersion;
            this.sessionId = sessionId;
            this.gameId = gameId;
            Init();
        }

        void Init()
        {
            //worker = new SequentialWorker();

            //init setup
            BaseConnector.AllowConnectionLog = Configuration.isDEVorUAT;
            BaseConnector.GameServiceUrl = serverUrl;

            fakeOpLoginConnector = new FakeOpLoginConnector();
            fakeOpLoginConnector.SetRequester(this);

            serverInfoConnector = new SlotServerInfoConnector();
            serverInfoConnector.SetRequester(this);

            loginConnector = new SlotLoginConnector();
            loginConnector.SetRequester(this);

            spinConnector = new SlotSpinConnector();
            spinConnector.SetRequester(this);

            jackpotStatusConnector = new SlotJackpotStatusConnector();
            jackpotStatusConnector.SetRequester(this);
        }

        #region Public Functions
        public void DoServerInfo(){
            mono.StartCoroutine(serverInfoConnector.Connect());
        }

        public void DoLogin()
        {
            SlotLoginConnector.LoginRequest request = new SlotLoginConnector.LoginRequest();

            request.ProtocolVersion = protocolVersion;
            request.SlotId = gameId;
            request.Client = (int)Configuration.ClientPlatform;
            request.SessionId = sessionId;

            loginConnector.SetParam(request);
            mono.StartCoroutine(loginConnector.Connect());
        }

        public void DoJackpotStatus()
        {
            SlotJackpotStatusConnector.JackpotStatusRequest request = new SlotJackpotStatusConnector.JackpotStatusRequest();

            request.ProtocolVersion = protocolVersion;
            request.SessionId = sessionId;
            request.Client = (int)Configuration.ClientPlatform;
            request.SlotId = int.Parse(gameId);

            jackpotStatusConnector.SetParam(request);
            mono.StartCoroutine(jackpotStatusConnector.Connect());
        }

        public void DoSpin(int betValue, int lineBet, int totalLines){

            SlotSpinConnector.SpinRequest request = new SlotSpinConnector.SpinRequest();
            request.ProtocolVersion = protocolVersion;
            request.SessionId = sessionId;
            request.Client = (int)Configuration.ClientPlatform;
            request.SlotId = int.Parse(gameId);
            request.BetValue = betValue;
            request.LineBet = lineBet;
            request.TotalLines = totalLines;

            spinConnector.SetParam(request);
            mono.StartCoroutine(spinConnector.Connect());
        }

        private ISubsriber subscriber;
        public void SetSubscriber(ISubsriber subscriber)
        {
            this.subscriber = subscriber;
        }

        #endregion


        void UpdateSessionId(string sId)
        {
            if (!string.IsNullOrEmpty(sId) && sId != "-1")
            {
                this.sessionId = sId;
            }
        }

        #region IRequester Implementation

        public void OnRequestSuccess(string response, string connectorId)
        {
            //Login
            if (connectorId == loginConnector.GetId())
            {
                string ssId = loginConnector.Resolve(response).SessionId;
				string username = loginConnector.Resolve(response).Username;
				double balance = loginConnector.Resolve(response).TotalCoins;
                UpdateSessionId(ssId);

                if (subscriber != null)
                    subscriber.OnLoginSuccess(username, balance, response);
            }
            //JackpotStatus
            else if (connectorId == jackpotStatusConnector.GetId())
            {

                SlotJackpotStatusConnector.Response responseData = jackpotStatusConnector.Resolve(response);


                if (subscriber != null)
                    subscriber.OnJackpotStatusReceived(responseData.jackpotData,
                                                       responseData.grandWinnerList,
                                                       responseData.majorWinnerList,
                                                       responseData.minorWinnerList,
                                                       responseData.miniWinnerList);
            }
            else {
                Debug.Log("unknown request:" + connectorId);
            }
        }


        public void OnRequestFailed(int code, string message, string connectorId)
        {
            if (subscriber != null)
                subscriber.OnFailed(code, message, connectorId);
        }


        #endregion



        //----------------------------------------------------------------------------------------

        #region Interface
        public interface ISubsriber
        {
            void OnLoginSuccess(string username, double balance, string response);
            void OnJackpotStatusReceived(JackpotData jackpotData, List<JackpotWinnerData> grandWinnerList,
                                         List<JackpotWinnerData> majorWinnerList,
                                         List<JackpotWinnerData> minorWinnerList,
                                         List<JackpotWinnerData> miniWinnerList);
            void OnFailed(int code, string message, string connectorId);
        }
        #endregion
    }
}

