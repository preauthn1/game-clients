#pragma warning disable 219 //value never used
#pragma warning disable 414 //private field is assigned but value is never used.
#pragma warning disable 649 //is never assigned to, and will always have its default value `null'

using System;
using Global.Model;
using GSLibrary.Common.Connection;
using SimpleJSON;
using UnityEngine;

namespace GSLibrary.Common.Data
{
	public abstract class DataManager : MonoBehaviour
	{
		[SerializeField]
		bool isDisconnected = false;

		private LagMonitor lagMonitor;

		GSConnectionErrorType disconnectError = GSConnectionErrorType.NONE;
		GSGameState gameState = GSGameState.Disconnected; //this is what it should be. at the default

		protected bool isPlayerReqLogout = false;
		protected bool isReconnecting = false;

		private bool isPause = false;
		private bool isRetry = false;

		private int outOfRange = 0;
		public bool IsReconnecting
		{
			get
			{
				return isReconnecting;
			}
		}

		static DataManager instance;

		protected GSSocketManager socketManager; //we need a unit of TestGameFlow here to help us do soemthing..

		#region Abstract

		protected abstract bool isLoginScene();

		public void ConnectionClosed(GSConnectionErrorType type)
		{
			isDisconnected = true;
			disconnectError = type;
			gameState = GSGameState.Disconnected;

			if (isPause)
				return;

			if (type != GSConnectionErrorType.DIS_SERVER && type != GSConnectionErrorType.USER_INITIATE_DISCONNECT && type != GSConnectionErrorType.SESSION_EXPIRED && type != GSConnectionErrorType.FORCE_OUT)
			{
				if (isPlayerReqLogout)
				{
					Debug.Log("User disconnect this...");
				}
				else
				{
					//tryt to fire re-try

					if (isReconnecting)
					{
						isReconnecting = false;
					}
					else
					{
						Debug.Log("Somehow we're disconnected by some reasons, attempt to reconnect...");
						if (!isPause)
							OnRetryLogin();
					}
				}
			}
			else
			{
				isReconnecting = false;
			}
			isPlayerReqLogout = false;

		}

		public void OnReceiveConnectionMessage(string data)
		{
			gameState = GSGameState.Connected;
			OnReceiveIncomingMessage(data);
		}

		void Awake()
		{

			if (socketManager == null)
				socketManager = new GSSocketManager(this);

			DontDestroyOnLoad(this); //this makes it persistence across different scene.

			if (FindObjectsOfType(GetType()).Length > 1)
			{
				Destroy(gameObject);
			}

			instance = this;


		}
#if !UNITY_WEBGL
		//Will be called "Consistently every frame"
		protected void FixedUpdate()
		{
			socketManager.ProcessEvent();
		}
#endif


#region - NEW

#endregion

		public void SendSocketRequestData(string id, string actionId, string param1, string param2, string param3, string param4, bool skip = false)
		{
			SendDataModel testData1 = new SendDataModel();
			testData1.id = id;
			testData1.actionId = actionId;
			testData1.param1 = param1;
			testData1.param2 = param2;
			testData1.param3 = param3;
			testData1.param4 = param4;

			string jsonData = JsonUtility.ToJson(testData1);

			socketManager.SendData(jsonData);
		}

        public void SendSocketRequestData(string id, string actionId, string param1, string param2, string param3,bool skip=false)
        {
            SendDataModel testData1 = new SendDataModel();
            testData1.id = id;
            testData1.actionId = actionId;
            testData1.param1 = param1;
            testData1.param2 = param2;
            testData1.param3 = param3;
			testData1.param4 = null;

            string jsonData = JsonUtility.ToJson(testData1);

			socketManager.SendData(jsonData);
        }

        public void SendSocketRequestData(string id, string actionId, int[] param1, int[] param2)
        {
            SendDataModel testData1 = new SendDataModel();
            testData1.id = id;
            testData1.actionId = actionId;



            string param1Str = "";
            if (param1 != null && param1.Length > 0)
            {
                param1Str = param1Str + "[";
                foreach (int i in param1)
                {
                    param1Str = param1Str + i + ",";
                }

                param1Str = param1Str.Substring(0, param1Str.Length - 1);

                param1Str = param1Str + "]";

            }



            testData1.param1 = param1Str;


            string param2Str = "";
            if (param2 != null && param2.Length > 0)
            {
                param2Str = param2Str + "[";
                foreach (int i in param2)
                {
                    param2Str = param2Str + i + ",";
                }

                param2Str = param2Str.Substring(0, param2Str.Length - 1);

                param2Str = param2Str + "]";

            }


            testData1.param2 = param2Str;

            string jsonData = JsonUtility.ToJson(testData1);

            socketManager.SendData(jsonData);
        }

        public abstract void OnReceiveIncomingMessage(string data, bool restore = false);

#region Login
        protected string url;
        protected string username;
        protected string password;
		protected string ip;
		protected int port;
		protected string token;

        public void OnRequestLogout()
        {
            this.url = "";
            this.username = "";
            this.password = "";
            this.isPlayerReqLogout = true;
#if !UNITY_WEBGL
            socketManager.Disconnect();
#else
            webSocketManager.Disconnect();
#endif

        }

		public void OnRequestCheckVersion(string url)
		{
#if !UNITY_WEBGL
			StartCoroutine(socketManager.CheckVersion(url));
#else
			StartCoroutine(webSocketManager.CheckVersion(url));
#endif

		}

        /// <summary>
        /// Retry the login, it will only be valid if it's not requested by User.
        /// </summary>
        /// <returns>The retry login.</returns>
		public void OnRetryLogin()
        {
			if (!isPause)
			{
			    OnRequestReconnect();
			}
        }

#endregion

        public abstract void Register(IConnector connector);
        public abstract void Unregister(IConnector connector);
        #endregion

        public abstract void OnSuspend();


#region Login Progress and Ping Pong
		public abstract void OnConnectingSocket();
		public abstract void OnReconnecting();
        public abstract void OnRequestReconnect();
        public abstract void OnVerifying();

        public abstract void OnLoginFailed(GSConnectionErrorType typeId);
        public abstract void OnCheckVersionFailed();
		public abstract void OnConnectSocketFailed();
		public abstract void OnVerifyFailed();
		public abstract void OnReconnectFail();
		public abstract void OnDisconnect(GSConnectionErrorType typeId);

		public abstract void OnCheckVersionSuccess(int type, string version, string loginUrl, string mainFrom, string mainTo, string downloadLink);
		public abstract void LoginSuccess();
		public abstract void OnConnectSocketSuccess();
		public abstract void OnVerifySuccess();
		public abstract void OnReconnectSuccess();

 		public virtual void OnGameLock(string gameType){}
		 
        public void OnReceiveVersionData(string data)
        {
            JSONNode jsonResult = JSON.Parse(data);
            JSONArray dataArr = jsonResult.AsArray;

            if (dataArr[0].AsInt == 0)
            {
                OnCheckVersionSuccess(dataArr[0].AsInt, dataArr[1], dataArr[2], null, null,dataArr[3]);
            }
            else if (dataArr[0].AsInt == 1)
            {
                OnCheckVersionSuccess(dataArr[0].AsInt, null, null, dataArr[1], dataArr[2],null);
            }
        }

		protected double GetPingPongTime()
		{
//			Debug.Log ("Get Pong : " +DateTime.UtcNow.ToString());
			if (lagMonitor != null && lagMonitor.IsRunning)
				return (double)lagMonitor.OnPingPong();

			return 0;
		}

		protected void EnabledPingPong()
		{
			if (lagMonitor == null)
				lagMonitor = new LagMonitor(new LagMonitor.PingDataDelegate(SendPingData), 2, 10);

			if(!lagMonitor.IsRunning)
				lagMonitor.Start();
		}

		protected void DisablePingPong(bool destroy = false)
		{
			if(lagMonitor != null && lagMonitor.IsRunning)
				lagMonitor.Stop();

			if (destroy && lagMonitor != null)
				lagMonitor.Destroy();
		}

		void SendPingData()
		{
			SendDataModel pingData = new SendDataModel();
			pingData.id = "0";
			pingData.actionId = "1";
//			Debug.Log ("Send Ping : " +DateTime.UtcNow.ToString());
			socketManager.SendData(JsonUtility.ToJson(pingData));
		}

		public void DestroyThisDataManager()
		{
			Destroy(this.gameObject);
		}
#endregion

		//This is for Testing purpose, Skip Version.
		public void SkipVersion()
		{
			socketManager.SkipVersionChangeState();

		}

#region StateControl
        void OnApplicationPause(bool pauseStatus)
        {
            isPause = pauseStatus;
            Debug.Log("<color=magenta>Application entering state:.. Pause? </color>" + pauseStatus);
           
            //OnSuspend.
            if (pauseStatus == true)
            {
                OnSuspend();
				DisablePingPong();

                Debug.Log(">> Application Paused...");
                Debug.Log("<color=red>Application Enter Suspend, and Disconnect</color>");
                //ConnectionClosed(GSConnectionErrorType.USER_INITIATE_DISCONNECT);

                socketManager.Disconnect(GSConnectionErrorType.ERROR_CONNECT_GAME_SERVER); // set this.. because it was put into the background..
            }
            //OnResume
            else
            {

            }
        }

        void OnApplicationQuit()
        {
            Debug.Log("<color=red>Application Quit Triggered</color>");

			if (lagMonitor != null)
				lagMonitor.Destroy();

            socketManager.Disconnect(GSConnectionErrorType.USER_INITIATE_DISCONNECT);
        }

#endregion
    }
}

