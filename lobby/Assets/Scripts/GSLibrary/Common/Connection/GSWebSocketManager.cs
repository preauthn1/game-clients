using UnityEngine;
using System.Collections;
using example.invalid.Sockets;
using System;
using System.Text;
using example.invalid;
using CoreLibrary.Game.Util;
using GSLibrary.Common.Data;
using GSLibrary.Common.Security;
using System.Collections.Generic;
using BestHTTP;
using SimpleJSON;
using GSLibrary.Common.Util;
using WebSocketSharp;
using Common.Fsm;

namespace GSLibrary.Common.Connection
{
	public class GSWebSocketManager
	{

		const int READ_BUFFER_SIZE = 8142;

		TcpClient client;
		byte[] readBuffer = new byte[READ_BUFFER_SIZE];
		string res = String.Empty;

		//flow
		public bool isLogin;
		bool isConnect;
		GSConnectionErrorType previousConnectionError = GSConnectionErrorType.NONE;
		protected bool isUserRequestedDisconnect;

		// private string sNetIP = "0.0.0.0";
		// private int PORT_NUM = 8990;

		//private string username = "gs001";
		//private string password = [REDACTED]";
		private string sessionToken = "";
		private WebDataManager dataManager;

		private FiniteStateMachine fsm;
		protected GSWebSocketManager.States curState
		{
			get
			{
				return (GSWebSocketManager.States)this.fsm.GetCurrentState();
			}
		}

		[Header("Properties")]
		public bool isDemo = true;

		public GSWebSocketManager(WebDataManager dataManager)
		{
			InitFsm();
			this.dataManager = dataManager;
		}

		/// <summary>
		/// Test New Socket Script.
		/// </summary>
		/// <param name="dataManager">Data manager.</param>

		///For Skip Version Use Only
		public void SkipVersionChangeState()
		{
			fsm.ApplyTransition((object)GSWebSocketManager.Transitions.StartCheckVersion);
			fsm.ApplyTransition((object)GSWebSocketManager.Transitions.Success);
		}

		public void CleanUp()
		{
			webSocket.Close();
		}

		public void ReconnectToGame(string url, string username, string password)
		{
			fsm.ApplyTransition((object)GSWebSocketManager.Transitions.StartReconnect);
			dataManager.OnReconnecting();
			ConnectHttp(url, username, password, null);
		}

		void InitFsm()
		{
			this.fsm = new FiniteStateMachine();
			this.fsm.AddAllStates(typeof(GSWebSocketManager.States));
			this.fsm.AddStateTransition((object)GSWebSocketManager.States.Init, (object)GSWebSocketManager.States.CheckingVersion, (object)GSWebSocketManager.Transitions.StartCheckVersion);
			this.fsm.AddStateTransition((object)GSWebSocketManager.States.CheckingVersion, (object)GSWebSocketManager.States.Init, (object)GSWebSocketManager.Transitions.Fail);
			this.fsm.AddStateTransition((object)GSWebSocketManager.States.CheckingVersion, (object)GSWebSocketManager.States.ReadyLogin, (object)GSWebSocketManager.Transitions.Success);
			this.fsm.AddStateTransition((object)GSWebSocketManager.States.ReadyLogin, (object)GSWebSocketManager.States.Logining, (object)GSWebSocketManager.Transitions.StartLogin);
			this.fsm.AddStateTransition((object)GSWebSocketManager.States.Logining, (object)GSWebSocketManager.States.ReadyLogin, (object)GSWebSocketManager.Transitions.Fail);
			this.fsm.AddStateTransition((object)GSWebSocketManager.States.Logining, (object)GSWebSocketManager.States.Logined, (object)GSWebSocketManager.Transitions.Success);
			this.fsm.AddStateTransition((object)GSWebSocketManager.States.Logined, (object)GSWebSocketManager.States.ConnectingSocket, (object)GSWebSocketManager.Transitions.ConnectSocket);
			this.fsm.AddStateTransition((object)GSWebSocketManager.States.ConnectingSocket, (object)GSWebSocketManager.States.ReadyLogin, (object)GSWebSocketManager.Transitions.Fail);
			this.fsm.AddStateTransition((object)GSWebSocketManager.States.ConnectingSocket, (object)GSWebSocketManager.States.Verifying, (object)GSWebSocketManager.Transitions.Success);
			this.fsm.AddStateTransition((object)GSWebSocketManager.States.Verifying, (object)GSWebSocketManager.States.ReadyLogin, (object)GSWebSocketManager.Transitions.Fail);
			this.fsm.AddStateTransition((object)GSWebSocketManager.States.Verifying, (object)GSWebSocketManager.States.ReadyToPlay, (object)GSWebSocketManager.Transitions.Success);
			this.fsm.AddStateTransition((object)GSWebSocketManager.States.ReadyToPlay, (object)GSWebSocketManager.States.ReadyReconnect, (object)GSWebSocketManager.Transitions.Suspend);
			this.fsm.AddStateTransition((object)GSWebSocketManager.States.ReadyReconnect, (object)GSWebSocketManager.States.ReadyLogin, (object)GSWebSocketManager.Transitions.ForceOut);
			this.fsm.AddStateTransition((object)GSWebSocketManager.States.ReadyReconnect, (object)GSWebSocketManager.States.Reconnecting, (object)GSWebSocketManager.Transitions.StartReconnect);
			this.fsm.AddStateTransition((object)GSWebSocketManager.States.Reconnecting, (object)GSWebSocketManager.States.ReadyToPlay, (object)GSWebSocketManager.Transitions.Success);
			this.fsm.AddStateTransition((object)GSWebSocketManager.States.Reconnecting, (object)GSWebSocketManager.States.ReadyLogin, (object)GSWebSocketManager.Transitions.Fail);
			this.fsm.SetCurrentState((object)States.Init);
			this.fsm.onStateChange = new FiniteStateMachine.OnStateChangeDelegate(OnStateChange);
		}

		void LoginFail(GSConnectionErrorType errorType)
		{
			fsm.ApplyTransition((object)GSWebSocketManager.Transitions.Fail);
			dataManager.OnLoginFailed(errorType);
		}


		void ReceiveNettyMsg(GSConnectionErrorType errorType)
		{
			Debug.LogWarning("Receive Netty Msg : " + errorType);
			if (curState == States.Verifying)
			{
				fsm.ApplyTransition((object)GSWebSocketManager.Transitions.Fail);
				dataManager.OnVerifyFailed();
			}
			else if (curState == States.Reconnecting)
			{
				fsm.ApplyTransition((object)GSWebSocketManager.Transitions.Fail);
				dataManager.OnReconnectFail();
			}

			previousConnectionError = errorType;
			webSocket.Close();
		}

		void OnStateChange(int fromState, int toState, int transition)
		{

		}
        /// ///////////////////////////////////////// 

        public void ConnectTokenHttp(string token)
        {
            fsm.ApplyTransition((object)GSWebSocketManager.Transitions.StartCheckVersion);
            fsm.ApplyTransition((object)GSWebSocketManager.Transitions.Success);
            fsm.ApplyTransition((object)GSWebSocketManager.Transitions.StartLogin);
            isUserRequestedDisconnect = false;


            if (curState == States.Logining)
            {
                dataManager.LoginSuccess();
                fsm.ApplyTransition((object)GSWebSocketManager.Transitions.Success);
            }

            sessionToken = [REDACTED];
            //ConnectSocket("ws://0.0.0.0:9090/websocket", 9090);
        }
		public void ConnectTokenHttp(string ip, int port, string token)
		{
			fsm.ApplyTransition((object)GSWebSocketManager.Transitions.StartCheckVersion);
			fsm.ApplyTransition((object)GSWebSocketManager.Transitions.Success);
			fsm.ApplyTransition((object)GSWebSocketManager.Transitions.StartLogin);
			isUserRequestedDisconnect = false;


			if (curState == States.Logining)
			{
				dataManager.LoginSuccess();
				fsm.ApplyTransition((object)GSWebSocketManager.Transitions.Success);
			}

			sessionToken = [REDACTED];
			ConnectSocket("ws://"+ip+":"+port+"/websocket", port);
			Debug.Log("ws://"+ip+":"+port+"/websocket:"+port +" /// " +token);
		}
		public void ConnectTokenDomain(string ip, int port, string token){
			fsm.ApplyTransition((object)GSWebSocketManager.Transitions.StartCheckVersion);
			fsm.ApplyTransition((object)GSWebSocketManager.Transitions.Success);
			fsm.ApplyTransition((object)GSWebSocketManager.Transitions.StartLogin);
			isUserRequestedDisconnect = false;


			if (curState == States.Logining)
			{
				dataManager.LoginSuccess();
				fsm.ApplyTransition((object)GSWebSocketManager.Transitions.Success);
			}

			sessionToken = [REDACTED];
			if(port>0)
			ConnectSocket("wss://"+ip+":"+port+"/websocket", port);
			else
				ConnectSocket("wss://"+ip+"/websocket", port);
			Debug.Log("ws://"+ip+"/websocket:"+port +" /// " +token);
		}

        public IEnumerator CheckVersion(string url, Action onComplete = null)
		{

			//TODO: this part may need to work, to throw a NO internet interface.
			if (Application.internetReachability == NetworkReachability.NotReachable)
				dataManager.OnCheckVersionFailed();

			else
			{
				fsm.ApplyTransition((object)GSWebSocketManager.Transitions.StartCheckVersion);
				Debug.Log(curState + " " + url);
				string version = "";
				Dictionary<string, string> headers = new Dictionary<string, string>();
				headers.Add("Content-Type", "Application/json");
				WWW www = new WWW(url, System.Text.Encoding.UTF8.GetBytes("Test"), headers);

				yield return www;
				Debug.Log("www.text" + www.error + " : " + www.text);
				if (www.error != null)
				{
					fsm.ApplyTransition((object)GSWebSocketManager.Transitions.Fail);
					dataManager.OnCheckVersionFailed();
				}
				else {
					version = www.text;
					fsm.ApplyTransition((object)GSWebSocketManager.Transitions.Success);
					dataManager.OnReceiveVersionData(version);
				}
			}

		}

		BestHTTP.WebSocket.WebSocket webSocket;

        /// <summary>
        /// Connects the http.
        /// </summary>
        /// <returns>The http.</returns>
        /// <param name="username">Username.</param>
        /// <param name="password">Password.</param>
        public void ConnectHttp(string url, string username, string password, string nickname, Action onComplete = null)
        {
			fsm.ApplyTransition((object)GSWebSocketManager.Transitions.StartLogin);
            isUserRequestedDisconnect = false;

            url = url +
                  "username=" + username.UrlEncode()
                  + "&password=" + password.UrlEncode();

            byte[] rawData = Encoding.UTF8.GetBytes("Test");


            if (nickname != null)
            {
                nickname = nickname.UrlEncode();
                Debug.Log(nickname);
                rawData = Encoding.UTF8.GetBytes(nickname.ToCharArray());
                url = url + "&nickname=1";
                Debug.Log(url);
            }



            Dictionary<string, string> headers = new Dictionary<string, string>();
            headers.Add("Content-Type", "Application/json");

            byte[] bytes = Encoding.UTF8.GetBytes(url);
            url = Encoding.UTF8.GetString(bytes);

            var request = new BestHTTP.HTTPRequest(new Uri(url), HTTPMethods.Post, ConnectResponse);
            request.RawData = rawData;
            request.AddHeader("Content-Type", "Application/json");
            request.Send();

            //}
        }

        public void ConnectResponse(HTTPRequest request, HTTPResponse response)
        {
            try
            {
				Debug.LogWarning("Login Response " + response.DataAsText);
                if (response.Message != "OK")
                {
                   if (curState == States.Reconnecting)
					{
						dataManager.OnReconnectFail();
					}
					else
					{
						dataManager.OnLoginFailed(GSConnectionErrorType.ERROR_LOGIN_LINK);
					}

					fsm.ApplyTransition((object)GSWebSocketManager.Transitions.Fail);
                }
                else
                {

                    //On Success we call..
                    sessionToken = [REDACTED];
                    Debug.Log("MyToken: " + sessionToken);
                    sessionToken = [REDACTED]"\"", "");
                    if (sessionToken == "-1")
                    {
                        LoginFail(GSConnectionErrorType.ERROR_LOGIN_VERI);
                    }
                    else if (sessionToken == "-2")
                    {
                        LoginFail(GSConnectionErrorType.ERROR_REQUIRE_NICKNAME);
                    }
                    else if (sessionToken == "-3")
                    {
                       LoginFail(GSConnectionErrorType.ERROR_CREATE_NICKNAME);
                    }
                    else if (sessionToken == "-4")
                    {
                        LoginFail(GSConnectionErrorType.ERROR_SUSPENDED);
                    }
                    else if (sessionToken == "-5")
                    {
                        LoginFail(GSConnectionErrorType.ERROR_NO_PERMISSION);
                    }
                    else if (sessionToken == "-6")
                    {
                        LoginFail(GSConnectionErrorType.ERROR_SPECIAL_FIRST_LOGIN);
                    }
                    else
                    {

                        Debug.Log("Response ->" + " " + Encoding.UTF8.GetString(response.Data) + " success and we passed the token to the next connect socket");

                        JSONNode jsonResult = JSON.Parse(Encoding.UTF8.GetString(response.Data));
                        JSONArray dataArr = jsonResult.AsArray;

                        sessionToken = [REDACTED];
                        if (sessionToken == "-1")
                        {
                            LoginFail(GSConnectionErrorType.ERROR_LOGIN_VERI);
                        }
                        else if (sessionToken == "-2")
                        {
                            LoginFail(GSConnectionErrorType.ERROR_REQUIRE_NICKNAME);
                        }
                        else if (sessionToken == "-3")
                        {
                            LoginFail(GSConnectionErrorType.ERROR_CREATE_NICKNAME);
                        }
                        else if (sessionToken == "-4")
                        {
                            LoginFail(GSConnectionErrorType.ERROR_SUSPENDED);
                        }
                        else if (sessionToken == "-5")
                        {
                            LoginFail(GSConnectionErrorType.ERROR_NO_PERMISSION);
                        }
                        else if (sessionToken == "-6")
                        {
                            LoginFail(GSConnectionErrorType.ERROR_SPECIAL_FIRST_LOGIN);
                        }
                        else
                        {
							Debug.LogWarning(curState);
							if (curState == States.Logining)
							{
								dataManager.LoginSuccess();
								fsm.ApplyTransition((object)GSWebSocketManager.Transitions.Success);
							}

                            string ip = dataArr[1];
                            int port = dataArr[2].AsInt;
                            ConnectSocket(ip, port);
                            //ConnectSocket("0.0.0.0", 9090);
                        }
                    }

                }
            }
            catch (Exception ex)
            {
				Debug.LogError(ex.Message + "  " + ex.StackTrace);

               if (curState == States.Reconnecting)
					dataManager.OnReconnectFail();
				else
					dataManager.OnLoginFailed(GSConnectionErrorType.ERROR_LOGIN_VERI);

				fsm.ApplyTransition((object)GSWebSocketManager.Transitions.Fail);
            }
        }


        //When we have gotten the
        void ConnectSocket(string ip, int port)
		{
			if (curState == States.Logined)
			{
				fsm.ApplyTransition((object)GSWebSocketManager.Transitions.ConnectSocket);
				dataManager.OnConnectingSocket();
			}

//			string tempUri = "ws://" + ip + ":" + port.ToString() + "/websocket";

			Debug.LogWarning(ip);

			webSocket = new BestHTTP.WebSocket.WebSocket(new Uri(ip));
			webSocket.OnOpen += OnOpen;
			webSocket.OnMessage += OnMessageReceived;
			webSocket.OnClosed += OnClosed;
			webSocket.OnError += OnError;

			webSocket.Open();
		}

		void OnOpen(BestHTTP.WebSocket.WebSocket ws)
		{
			Debug.Log("On Web Socket Connect " + curState.ToString());

			if (curState == States.ConnectingSocket)
			{
				fsm.ApplyTransition((object)GSWebSocketManager.Transitions.Success);
				dataManager.OnConnectSocketSuccess();
			}
			SendData(sessionToken);
		}

		/// <summary>
		/// Called when we received a text message from the server
		/// </summary>
		void OnMessageReceived(BestHTTP.WebSocket.WebSocket ws, string message)
		{
//			Debug.Log("<color=green>Reveive Data : </color>" + message);

			ProcessCommand(message);
		}

		/// <summary>
		/// Called when the web socket closed
		/// </summary>
		void OnClosed(BestHTTP.WebSocket.WebSocket ws, UInt16 code, string message)
		{
			if (this.curState == States.ReadyToPlay)
			{
				fsm.ApplyTransition((object)GSWebSocketManager.Transitions.Suspend);
			}

			Debug.Log("<color=red>Disconnected : </color>" + previousConnectionError + " CurState : " + curState);
			if (curState == States.ReadyReconnect)
			{
				if (previousConnectionError == GSConnectionErrorType.DIS_SERVER ||
					previousConnectionError == GSConnectionErrorType.USER_INITIATE_DISCONNECT ||
					previousConnectionError == GSConnectionErrorType.SESSION_EXPIRED ||
					previousConnectionError == GSConnectionErrorType.FORCE_OUT ||
					isUserRequestedDisconnect)
				{
					fsm.ApplyTransition((object)GSWebSocketManager.Transitions.ForceOut);
					dataManager.OnDisconnect(previousConnectionError);
				}
				else
				{
					dataManager.OnRetryLogin();
				}
			}
			previousConnectionError = GSConnectionErrorType.NONE;
		}

		/// <summary>
		/// Called when an error occured on client side
		/// </summary>
		void OnError(BestHTTP.WebSocket.WebSocket ws, Exception ex)
		{
			Debug.LogError("Web Socket Error : " + ex.Message + " " + ex.StackTrace);
			//webSocket = null;
			DisconnectionHandler();
		}

		void DisconnectionHandler()
		{
			if (this.curState == States.ReadyToPlay)
			{
				fsm.ApplyTransition((object)GSWebSocketManager.Transitions.Suspend);
			}
			else if (this.curState == States.ConnectingSocket)
			{
				fsm.ApplyTransition((object)GSWebSocketManager.Transitions.Fail);
				dataManager.OnConnectSocketFailed();
			}
			else if (this.curState == States.Verifying)
			{
				fsm.ApplyTransition((object)GSWebSocketManager.Transitions.Fail);
				webSocket.Close();
				dataManager.OnVerifyFailed();
			}
			else if (this.curState == States.Reconnecting)
			{
				fsm.ApplyTransition((object)GSWebSocketManager.Transitions.Fail);
				webSocket.Close();
				dataManager.OnReconnectFail();
			}

			if (curState == States.ReadyReconnect)
			{
				if (previousConnectionError == GSConnectionErrorType.DIS_SERVER ||
					previousConnectionError == GSConnectionErrorType.USER_INITIATE_DISCONNECT ||
					previousConnectionError == GSConnectionErrorType.SESSION_EXPIRED ||
					previousConnectionError == GSConnectionErrorType.FORCE_OUT ||
					isUserRequestedDisconnect)
				{
					fsm.ApplyTransition((object)GSWebSocketManager.Transitions.ForceOut);
					dataManager.OnDisconnect(previousConnectionError);
				}
				else
				{
					dataManager.OnRetryLogin();
				}
			}
		}

		// Use a StreamWriter to send a message to server.
		public void SendData(string data)
		{
			try
			{
//				Debug.Log("<color=orange>Send Data : " + curState + " </color>" + data);

				if (this.curState == States.ReadyToPlay)
				{
					//data = AESEncryption.ByteArrayToString(AESEncryption.AES_Encrypt(data, sessionToken));
					//data = "[" + data + "]";
				}

				//Debug.Log(data);
				webSocket.Send(data);
			}
			catch (Exception e)
			{
				if (!string.IsNullOrEmpty(e.Message))
					Debug.LogError("Send Data Error : " + e.Message + " " + e.StackTrace);
				DisconnectionHandler();
			}
		}

		private string remainderMessage = "";
		private int count = 0;
		// Process the command received from the server, and take appropriate action.

		private void ProcessCommand(string data)
		{
			//Debug.Log("Entering Process Command with data: " + data.Length + ":: dataM: "+data);
			if (data == "netty::0")
			{
				ReceiveNettyMsg(GSConnectionErrorType.ERROR_GS_DUP);
				return;
			}
			else if (data == "netty::-1")
			{
				ReceiveNettyMsg(GSConnectionErrorType.ERROR_GS_VERI);
				return;
			}

			try
			{
				//byte[] myByteArrayData = AESEncryption.StringToByteArray(data);
				//string result = AESEncryption.AES_Decrypt(myByteArrayData, sessionToken);

				ProcessIncomingMessage(data);

			}
			catch (Exception ex)
			{
				Debug.LogError("are we getting rubbish data ? : " + data + " sessionToken::" + sessionToken);
				Debug.LogError("something happened:" + ex.Message + "\n" + ex.StackTrace);
			}
			/** **/

		}

		private void ProcessIncomingMessage(string data)
		{
			//Debug.Log("Entering Process Incoming with data: " + data + ":: time: " );
			if (data == "netty::0")
			{
				Debug.Log("Entering Process Incoming with data: " + data + ":: time: ");
				ReceiveNettyMsg(GSConnectionErrorType.ERROR_GS_DUP);
				return;
			}
			else if (data == "netty::-1")
			{
				Debug.Log("Entering Process Incoming with data: " + data + ":: time: ");
				ReceiveNettyMsg(GSConnectionErrorType.ERROR_GS_DUP);
				return;
			}
			else if (data == "netty::-2")
			{
				ReceiveNettyMsg(GSConnectionErrorType.SESSION_EXPIRED);
				return;
			}
			else if (data == "netty::-3")
			{
				ReceiveNettyMsg(GSConnectionErrorType.FORCE_OUT);
				return;
			}
			else if (data == "netty::-4")
			{
				ReceiveNettyMsg(GSConnectionErrorType.TIME_OUT);
				return;
			}

			string[] dataArr = data.Split(new string[] { "{\"actionId\":" }, StringSplitOptions.None);
			foreach (string data1 in dataArr)
			{

				if (data1.Length > 0)
				{
					if (data1 == "netty::0")
					{
						Debug.Log("Entering Process Incoming with data: " + data + ":: time: ");
						ReceiveNettyMsg(GSConnectionErrorType.ERROR_GS_DUP);
						return;
					}
					else if (data1 == "netty::-1")
					{
						Debug.Log("Entering Process Incoming with data: " + data + ":: time: ");
						ReceiveNettyMsg(GSConnectionErrorType.ERROR_GS_VERI);
						return;
					}

					if (curState == States.Verifying)
					{
						fsm.ApplyTransition((object)GSWebSocketManager.Transitions.Success);
						dataManager.OnVerifySuccess();
					}
					else if (curState == States.Reconnecting)
					{
						fsm.ApplyTransition((object)GSWebSocketManager.Transitions.Success);
						dataManager.OnReconnectSuccess();
					}

					string newData = "{\"actionId\":" + data1;
					dataManager.OnReceiveConnectionMessage(data1);
				}

			}
			/****/

		}

		public void Disconnect(GSConnectionErrorType type = GSConnectionErrorType.NONE)
		{
			if (this.curState == States.ReadyToPlay)
			{
				fsm.ApplyTransition((object)GSWebSocketManager.Transitions.Suspend);

				if (type == GSConnectionErrorType.USER_INITIATE_DISCONNECT)
					isUserRequestedDisconnect = true;

				if (type != GSConnectionErrorType.NONE)
				{
					previousConnectionError = type;
				}

				webSocket.Close();
			}
		}

		protected enum States
		{
			Init,
			CheckingVersion,
			ReadyLogin,
			Logining,
			Logined,
			ConnectingSocket,
			Verifying,
			ReadyToPlay,
			ReadyReconnect,
			Reconnecting
		}

		protected enum Transitions
		{
			StartCheckVersion,
			StartLogin,
			ConnectSocket,
			StartReconnect,
			Suspend,
			ForceOut,
			Success,
			Fail
		}


	}
}
