#pragma warning disable 219 //value never used
#pragma warning disable 414 //private field is assigned but value is never used.
#pragma warning disable 649 //is never assigned to, and will always have its default value `null'

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
using SimpleJSON;
using GSLibrary.Common.Util;
using WebSocketSharp;
using Common.Fsm;

namespace GSLibrary.Common.Connection
{
	public class GSSocketManager
	{

		const int READ_BUFFER_SIZE = 8142;

		TcpClient client;
		byte[] readBuffer = new byte[READ_BUFFER_SIZE];
		string res = String.Empty;

		GSConnectionErrorType previousConnectionError = GSConnectionErrorType.NONE;
		protected bool isUserRequestedDisconnect;

		private string sessionToken = "";
		private DataManager dataManager;

		private SocketClient socketClient;
		private FiniteStateMachine fsm;
		protected GSSocketManager.States curState
		{
			get
			{
				return (GSSocketManager.States)this.fsm.GetCurrentState();
			}
		}

		[Header("Properties")] public bool isDemo = true;

		/// <summary>
		/// Test New Socket Script.
		/// </summary>
		/// <param name="dataManager">Data manager.</param>

		///For Skip Version Use Only
		public void SkipVersionChangeState()
		{
			fsm.ApplyTransition((object)GSSocketManager.Transitions.StartCheckVersion);
			fsm.ApplyTransition((object)GSSocketManager.Transitions.Success);
		}

		public GSSocketManager(DataManager dataManager)
		{
			this.dataManager = dataManager;
			InitFsm();
			socketClient = new SocketClient();
			socketClient.AddEventDelegate(SocketEvent.ON_CONNECT, new OnSocketEventDelegate(OnConnect));
			socketClient.AddEventDelegate(SocketEvent.ON_MESSAGE, new OnSocketEventDelegate(OnMessage));
			socketClient.AddEventDelegate(SocketEvent.ON_ERROR, new OnSocketEventDelegate(OnError));
			socketClient.AddEventDelegate(SocketEvent.ON_DISCONNECT, new OnSocketEventDelegate(OnDisconnect));
		}

		public void ProcessEvent()
		{
			try
			{
				socketClient.ProcessEvent();
			}
			catch (Exception ex)
			{
				Debug.Log("Process Event Exception: " + ex.Message + " " + ex.StackTrace);
			}
		}

		public void CleanUp()
		{
			socketClient.CleanUp();
		}

		private void OnConnect(SocketBaseEvent evt)
		{
			Debug.Log("On Socket Connect " + curState.ToString());

			if (curState == States.ConnectingSocket)
			{
				fsm.ApplyTransition((object)GSSocketManager.Transitions.Success);
				dataManager.OnConnectSocketSuccess();
			}
			socketClient.Send (sessionToken);
//			SendData(sessionToken);
		}

		private void OnMessage(SocketBaseEvent evt)
		{
			if (curState == GSSocketManager.States.Verifying
			   || curState == States.ReadyToPlay
			   || curState == States.Reconnecting) 
				ProcessCommand((string)evt.Params["message"]);
		}

		private void OnError(SocketBaseEvent evt)
		{
			Debug.LogError("\n\nSocket Error : " + (string)evt.Params["errorMessage"]);

			if (this.curState == States.ConnectingSocket)
			{
				fsm.ApplyTransition((object)GSSocketManager.Transitions.Fail);
				dataManager.OnConnectSocketFailed();
			}
			else if (this.curState == States.Verifying)
			{
				dataManager.OnVerifyFailed();
				fsm.ApplyTransition((object)GSSocketManager.Transitions.Fail);
			}
			else if (this.curState == States.Reconnecting)
			{
				fsm.ApplyTransition((object)GSSocketManager.Transitions.Fail);
				dataManager.OnReconnectFail();
			}
		}

		private void OnDisconnect(SocketBaseEvent evt)
		{
			if (this.curState == States.ReadyToPlay)
			{
				fsm.ApplyTransition((object)GSSocketManager.Transitions.Suspend);
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
					fsm.ApplyTransition((object)GSSocketManager.Transitions.ForceOut);
					dataManager.OnDisconnect(previousConnectionError);
				}
				else
				{
					dataManager.OnRetryLogin();
				}

//                fsm.ApplyTransition((object)GSSocketManager.Transitions.ForceOut);
//                dataManager.OnDisconnect(previousConnectionError);
            }

			previousConnectionError = GSConnectionErrorType.NONE;
		}

		void InitFsm()
		{
			this.fsm = new FiniteStateMachine();
			this.fsm.AddAllStates(typeof(GSSocketManager.States));
			this.fsm.AddStateTransition((object)GSSocketManager.States.Init, (object)GSSocketManager.States.CheckingVersion, (object)GSSocketManager.Transitions.StartCheckVersion);
			this.fsm.AddStateTransition((object)GSSocketManager.States.CheckingVersion, (object)GSSocketManager.States.Init, (object)GSSocketManager.Transitions.Fail);
			this.fsm.AddStateTransition((object)GSSocketManager.States.CheckingVersion, (object)GSSocketManager.States.ReadyLogin, (object)GSSocketManager.Transitions.Success);
			this.fsm.AddStateTransition((object)GSSocketManager.States.ReadyLogin, (object)GSSocketManager.States.Logining, (object)GSSocketManager.Transitions.StartLogin);
			this.fsm.AddStateTransition((object)GSSocketManager.States.Logining, (object)GSSocketManager.States.ReadyLogin, (object)GSSocketManager.Transitions.Fail);
			this.fsm.AddStateTransition((object)GSSocketManager.States.Logining, (object)GSSocketManager.States.Logined, (object)GSSocketManager.Transitions.Success);
			this.fsm.AddStateTransition((object)GSSocketManager.States.Logined, (object)GSSocketManager.States.ConnectingSocket, (object)GSSocketManager.Transitions.ConnectSocket);
			this.fsm.AddStateTransition((object)GSSocketManager.States.ConnectingSocket, (object)GSSocketManager.States.ReadyLogin, (object)GSSocketManager.Transitions.Fail);
			this.fsm.AddStateTransition((object)GSSocketManager.States.ConnectingSocket, (object)GSSocketManager.States.Verifying, (object)GSSocketManager.Transitions.Success);
			this.fsm.AddStateTransition((object)GSSocketManager.States.Verifying, (object)GSSocketManager.States.ReadyLogin, (object)GSSocketManager.Transitions.Fail);
			this.fsm.AddStateTransition((object)GSSocketManager.States.Verifying, (object)GSSocketManager.States.ReadyToPlay, (object)GSSocketManager.Transitions.Success);
			this.fsm.AddStateTransition((object)GSSocketManager.States.ReadyToPlay, (object)GSSocketManager.States.ReadyReconnect, (object)GSSocketManager.Transitions.Suspend);
			this.fsm.AddStateTransition((object)GSSocketManager.States.ReadyReconnect, (object)GSSocketManager.States.ReadyLogin, (object)GSSocketManager.Transitions.ForceOut);
			this.fsm.AddStateTransition((object)GSSocketManager.States.ReadyReconnect, (object)GSSocketManager.States.Reconnecting, (object)GSSocketManager.Transitions.StartReconnect);
			this.fsm.AddStateTransition((object)GSSocketManager.States.Reconnecting, (object)GSSocketManager.States.ReadyToPlay, (object)GSSocketManager.Transitions.Success);
			this.fsm.AddStateTransition((object)GSSocketManager.States.Reconnecting, (object)GSSocketManager.States.ReadyLogin, (object)GSSocketManager.Transitions.Fail);
			this.fsm.SetCurrentState((object)States.Init);
			this.fsm.onStateChange = new FiniteStateMachine.OnStateChangeDelegate(OnStateChange);
		}

		void LoginFail(GSConnectionErrorType errorType)
		{ 
			fsm.ApplyTransition((object)GSSocketManager.Transitions.Fail);
			dataManager.OnLoginFailed(errorType);
		}


		void ReceiveNettyMsg(GSConnectionErrorType errorType, string gameType = "")
		{
			Debug.LogWarning("Receive Netty Msg ::: " +errorType);
			if (curState == States.Verifying)
			{
				fsm.ApplyTransition((object)GSSocketManager.Transitions.Fail);
				dataManager.OnVerifyFailed();

				if(errorType == GSConnectionErrorType.GAME_LOCK && gameType.Length >= 11)
                    dataManager.OnGameLock(gameType.Substring(11));
			}
			else if (curState == States.Reconnecting)
			{
				fsm.ApplyTransition((object)GSSocketManager.Transitions.Fail);
				dataManager.OnReconnectFail();
			}

			previousConnectionError = errorType;
			CleanUp();
		}

		void OnStateChange(int fromState, int toState, int transition)
		{
		}

	    /// ///////////////////////////////////////// 


	    public IEnumerator CheckVersion(string url, Action onComplete = null)
	    {
	        //TODO: this part may need to work, to throw a NO internet interface.
	        if (Application.internetReachability == NetworkReachability.NotReachable)
	        {
	            dataManager.OnCheckVersionFailed();
	        }
	        else
	        {

	            fsm.ApplyTransition((object) GSSocketManager.Transitions.StartCheckVersion);
	            string version = "";
	            Dictionary<string, string> headers = new Dictionary<string, string>();
	            headers.Add("Content-Type", "Application/json");
	            WWW www = new WWW(url, System.Text.Encoding.UTF8.GetBytes("Test"), headers);

	            yield return www;
	            Debug.Log("www.text  " + www.error + " : " + www.text);
	            if (www.error != null)
	            {
	                fsm.ApplyTransition((object) GSSocketManager.Transitions.Fail);
	                dataManager.OnCheckVersionFailed();
	            }
	            else
	            {
	                version = www.text;
	                fsm.ApplyTransition((object) GSSocketManager.Transitions.Success);
	                dataManager.OnReceiveVersionData(version);
	            }
	        }
	    }

		public void ConnectSocket(string ip, int port, string token)
		{
            sessionToken = [REDACTED];
			if (this.curState == States.Init)
				this.fsm.SetCurrentState(States.Logined);

			Debug.Log("Connect Socket Success : " + token);
			ConnectSocket(ip, port);
		}

	    public void ReconnectSocket(string ip, int port, string token)
	    {
	        if (this.curState == States.ReadyReconnect)
	        {
	            fsm.ApplyTransition((object) GSSocketManager.Transitions.StartReconnect);
	            dataManager.OnReconnecting();
	            sessionToken = [REDACTED];
	            //if (this.curState == States.Init)
	                this.fsm.SetCurrentState(States.Logined);

	            Debug.Log("Connect Socket : " + token);
	            ConnectSocket(ip, port);
	        }
	    }

	    //When we have gotten the 
		public void ConnectSocket(string ip, int port)
		{
			if (curState == States.Logined)
			{
				fsm.ApplyTransition((object)GSSocketManager.Transitions.ConnectSocket);
				dataManager.OnConnectingSocket();
			}
			Debug.Log("Connect To Socket: " + ip + " port: " + port);
			socketClient.ConnectSocket(ip, port);
		}


		// Use a StreamWriter to send a message to server.
		public void SendData(string data)
		{
//			Debug.Log("<color=orange>Before Encrypt Date : </color> " + this.curState + " " + data);
			if (this.curState == States.ReadyToPlay)
			{
				data = AESEncryption.ByteArrayToString(AESEncryption.AES_Encrypt(data, sessionToken));
				data = "[" + data + "]";
			}

			if (this.curState == States.ReadyToPlay) 
			{
				socketClient.Send (data);
			}

		}

		//this happen when head > tail
		private void ProcessCommand(string data)
		{
//			Debug.Log("Entering Process Command with data: " + data.Length + ":: dataM: "+data);


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
				if (sessionToken != string.Empty)
				{
					byte[] myByteArrayData = AESEncryption.StringToByteArray(data);
					string result = AESEncryption.AES_Decrypt(myByteArrayData, sessionToken);

					ProcessIncomingMessage(result);
				}

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
			if (data == "netty::0")
			{
				Debug.Log("Entering Process Incoming with data: " + data + ":: time: ");
				previousConnectionError = GSConnectionErrorType.ERROR_GS_DUP;
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
			else if (data == "netty::-5")
            {
                Debug.Log("This is netty 5 message : " +data);
                ReceiveNettyMsg(GSConnectionErrorType.GAME_LOCK, data);
                return;
            }

			string[] dataArr = data.Split(new string[] {"{\"actionId\":"}, StringSplitOptions.None);
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
						fsm.ApplyTransition((object)GSSocketManager.Transitions.Success);
						dataManager.OnVerifySuccess();
					}
					else if (curState == States.Reconnecting)
					{
						fsm.ApplyTransition((object)GSSocketManager.Transitions.Success);
						dataManager.OnReconnectSuccess();
					}

					string newData = "{\"actionId\":" + data1;
					dataManager.OnReceiveConnectionMessage(newData);
					//Debug.Log("result: " + newData);
				}

			}
			/****/
		}

		public void Disconnect(GSConnectionErrorType type = GSConnectionErrorType.NONE)
		{
			if (this.curState == States.ReadyToPlay || this.curState == States.Verifying)
			{
				fsm.ApplyTransition((object)GSSocketManager.Transitions.Suspend);
				CleanUp();

				if(type == GSConnectionErrorType.USER_INITIATE_DISCONNECT)
					isUserRequestedDisconnect = true;

				if (type != GSConnectionErrorType.NONE)
				{
					previousConnectionError = type;
				}
				sessionToken = [REDACTED];
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
