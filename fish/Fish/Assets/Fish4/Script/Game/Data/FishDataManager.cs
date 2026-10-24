#pragma warning disable 219 //value never used
#pragma warning disable 414 //private field is assigned but value is never used.
#pragma warning disable 649 //is never assigned to, and will always have its default value `null'

using System;
using System.Collections;
using System.Collections.Generic;
using GSLibrary.Common.Connection;
using GSLibrary.Common.Data;
using SimpleJSON;
using UnityEngine;
using OneSDK.StarterPack;
using UnityEngine.UI;

namespace P8Games.Fish4
{
    public class FishDataManager : DataManager
    {
		[SerializeField] public bool integrateWithOneS = false;
		protected GameImpl gameImpl;

        private List<ArcadeLobbyRoomData> lobbyTableDataList = new List<ArcadeLobbyRoomData>();
        private string lobbyMessage = "";

        private List<IConnector> connectorList = new List<IConnector>();
        private FishGameController gameHandler;

        //Player Data
        private int _id = -1;
        private string _username;
        private double _credit;
        private string _dateTime;
        private int _baseCurrType = 0; //myr , 1 = IDR = 1K ,
        private double _baseCurrRate = 0;
        private int _playerCurrType = 0;
        private double _playerCurrRate = 0;
        private string _countryCode = "-1";
        private int _avatarId = -1;
        private int _playerSeatNum = -1;
        private int _betAmountIndex = 0;
        private int _weaponIndex = 0;
        private int[] _betAmountArray = new int[] { 10, 20, 50, 100, 150, 200, 300, 500, 1000, 2000, 5000, 10000 };
		long bulletId = 0;

		private UnityEngine.Object locker = new UnityEngine.Object();
		private int tableId = 0;
        #region Register Handler


		public Text debugText;
        public override void Register(IConnector connector)
        {
         if (connector is Fish_ArcadeGameController)
			{
                gameHandler = (FishGameController) connector;
				//StartCoroutine(CountDown(2, 0, 0f));
				//this.socketManager.TestConnectServer();
				if (integrateWithOneS)
				{
					if (gameImpl == null)
					{
						gameImpl = FindObjectOfType<GameImpl>();
//
						if (gameImpl != null)
							gameImpl.InitGame(this);
					}
				}
				else
				{
                    if (gameImpl == null)
                    {
                        gameImpl = FindObjectOfType<GameImpl>();

                        if (gameImpl != null)
                            gameImpl.StandaloneInitGame(this);
                    }
                }
            }
//			InitGame ("0.0.0.0", 8800, "31e067e518115b79c9298ef620a597ae");
            if (!connectorList.Contains(connector))
                connectorList.Add(connector);
        }
		public SampleGameHelper helper;
		public GameObject loginPanel;
		public void SelectPlayer(int i){
			if (i == 0) {
				helper.playerId = "33737298";
			} else if (i == 1) {
				helper.playerId = "75107581";
			} else if (i == 2) {
				helper.playerId = "77453746";
			} else {
				helper.playerId = "55201755";
			}	
			loginPanel.SetActive (false);
			if (gameImpl == null)
			{
				gameImpl = FindObjectOfType<GameImpl>();

				if (gameImpl != null)
					gameImpl.InitGame(this);
			}
		}
        public override void Unregister(IConnector connector)
        {
            if (connectorList.Contains(connector))
                connectorList.Remove(connector);
        }

        #endregion

		#region Integration
		public void InitGame(string ip, int port, string token)
		{
			if(debugText!=null)
			debugText.text = "Connect Socket...";
			this.ip = ip;
			this.port = port;
			this.token = [REDACTED];

			url = ip;
			this.socketManager.ConnectSocket(ip, port, token);
		}

		public void ReconnectToGame(string ip, int port, string token)
		{
			this.socketManager.ReconnectSocket(ip, port, token);
		}
		#endregion

        #region Receive Socket Msg

        public override void OnReceiveIncomingMessage(string data, bool restore = false)
        {
//            Debug.Log("OnReceiveIncomingMessage::" + data);
            JSONNode jsonResult = JSON.Parse(data);

            string id = jsonResult["id"];

            if (id == "0") //system
            {
                ProcessSystemIncomingMessage(jsonResult);
            }
            else if (id == "1") //lobby
            {
                ProcessLobbyIncomingMessage(jsonResult);
            }
            else if (id == "2")
            {
                ProcessIngameIncomingMsg(jsonResult);
            }
        }

        private void ProcessSystemIncomingMessage(JSONNode jsonResult)
        {
            string actionId = jsonResult["actionId"];
            if (actionId == "1") //connected
            {
                OnReceiveSystemConnected(jsonResult);
            }
            else if (actionId == "2") //pong
            {
                OnReceiveSystemPong(jsonResult);
            }
            else if (actionId == "3") //player update
            {
                OnReceivePlayerUpdate(jsonResult);
            }
            else if (actionId == "4") //player update
            {
                OnReceiveSystemMaintenance(jsonResult);
            }
        }

        private void OnReceiveSystemConnected(JSONNode jsonResult)
        {
            this._credit = jsonResult["eventData"]["credit"].AsDouble;
            this._dateTime = jsonResult["eventData"]["serverDateTime"];
            this._username = jsonResult["eventData"]["username"];
            this._id = jsonResult["eventData"]["id"].AsInt;
            this._avatarId = jsonResult["eventData"]["setting"].AsArray[0].AsInt;

            this._baseCurrType = jsonResult["eventData"]["baseCurrType"].AsInt;
            this._baseCurrRate = jsonResult["eventData"]["baseCurrRate"].AsDouble;
            this._playerCurrType = jsonResult["eventData"]["playerCurrType"].AsInt;
            this._playerCurrRate = jsonResult["eventData"]["playerCurrRate"].AsDouble;
            this._countryCode = jsonResult["eventData"]["ctryCode"];

			if (gameHandler != null)
			{
				gameHandler.CheckPlayerCredit(this._credit);
			}
        }

        private void OnReceiveSystemPong(JSONNode jsonResult)
        {
            UpdateConnectionRespondTime(GetPingPongTime());
        }

        private void OnReceivePlayerUpdate(JSONNode jsonResult)
        {
            this._credit = jsonResult["eventData"]["credit"].AsDouble;
//            Debug.Log("onReceivePlayerUpdate: " + jsonResult.ToString());
         
            if (gameHandler != null)
            {
                gameHandler.OnPlayerCreditUpdate(_credit);
            }
        }

        private void OnReceiveSystemMaintenance(JSONNode jsonResult)
        {
            JSONArray maintainArray = jsonResult["eventData"].AsArray;
            int type = maintainArray[0].AsInt;
            string message = maintainArray[1];
            string fromDate = maintainArray[2];
            string toDate = maintainArray[3];

            if (gameHandler != null)
            {
                gameHandler.OnReceiveSystemMaintenance(type, message, fromDate, toDate);
            }
        }

        private void ProcessLobbyIncomingMessage(JSONNode jsonResult)
        {
            string actionId = jsonResult["actionId"];

            if (actionId == "1") //table list
            {
                OnReceiveTableList(jsonResult);
            }
            else if (actionId == "3") //reject table join
            {
                OnReceiveTableRejectJoin(jsonResult);
            }
            else if (actionId == "4") //table update
            {
                OnReceiveTableUpdate(jsonResult);
            }
            else if (actionId == "5") //lobby message
            {
                OnReceiveLobbyMessage(jsonResult);
            }
            else if (actionId == "6") //lobby message
            {
                OnReceiveLobbyState(jsonResult);
            }
        }

        private void OnReceiveTableList(JSONNode jsonResult)
        {
//			Debug.Log("OnReceiveTableList: " + jsonResult.ToString());
            /*lobbyTableDataList.Clear();
            JSONArray tableArr = jsonResult["eventData"].AsArray;

            for (int i = 0; i < tableArr.Count; i++)
            {
                ArcadeLobbyRoomData lobbyTableData = new ArcadeLobbyRoomData(tableArr[i]);
                lobbyTableDataList.Add(lobbyTableData);
            }*/
//			tableId = 4;
			if (tableId == 0) {
				OnRequestJoinTable (1);
			} else {
				OnRequestReconnectJoinTable (tableId);
			}
        }

        private void OnReceiveTableRejectJoin(JSONNode jsonResult)
        {
			
            string errorMsg = jsonResult["eventData"];
			Debug.Log ("OnReceiveTableRejectJoin :: " +jsonResult.ToString());
            if (gameHandler != null)
            {
                gameHandler.OnReceiveJoinTableReject(errorMsg);
            }
        }

        private void OnReceiveTableUpdate(JSONNode jsonResult)
        {
            JSONArray tableArr = jsonResult["eventData"].AsArray[0].AsArray;
        }

        private void OnReceiveLobbyMessage(JSONNode jsonResult)
        {
            lobbyMessage = jsonResult["eventData"].AsArray[0];
        }

        private void OnReceiveLobbyState(JSONNode jsonResult)
        {
            int eventData = jsonResult["eventData"].AsInt;
            if (eventData == 0)
            {
                if (gameHandler != null)
                {
                    gameHandler.OnRecieveTableKick();
                }
            }
        }

        private void ProcessIngameIncomingMsg(JSONNode jsonResult)
        {
            string actionId = jsonResult["actionId"];

//			Debug.Log (jsonResult.ToString ());
			if (actionId == "1")
			{
				OnReceiveStartGameData(jsonResult);
			}
			else if (actionId == "2")
			{
				OnReceiveSitInData(jsonResult);
			}
			else if (actionId == "3")
			{
				OnReceiveRoundUpdateData(jsonResult);
			}
			else if (actionId == "4")
			{
				OnReceiveFireinfo(jsonResult);
			}
			else if (actionId == "5")
			{
				OnReceiveFishStatus(jsonResult);
			}
			else if (actionId == "6")
			{
				OnReceivePlayerLeave(jsonResult);
			}
			else if (actionId == "7")
			{
				OnReceiveFishList(jsonResult);
			}
			else if (actionId == "9")
			{
				OnReceiveGunType(jsonResult);
			}
        }

        private void OnReceiveStartGameData(JSONNode jsonResult)
        {
//			Debug.Log("OnReceiveStartGameData: " + jsonResult.ToString());
            JSONArray data = jsonResult["eventData"].AsArray;
			Game curGame;
			List<TargetObject> fishList = new List<TargetObject>();
			List<SeatInfo> seatList = new List<SeatInfo> ();
			//PlayerPrefs.SetInt ("FishPlayerTableID", data [0].AsArray [1].AsInt);
			tableId = data [0].AsArray [1].AsInt;
//			Debug.Log ("Table Id : " + tableId);
			//curGame = new Game(-1, 1, 60, 60);


			if (data [3].AsInt == -1) {

				curGame = new Game (-1, -1, 60, 60);

			} else{
				debugText.text = "";
				double maxTime = data[3].AsArray[0].AsArray[1].AsDouble;
				double curTime = maxTime - data[3].AsArray[0].AsArray[0].AsDouble;
				curGame = new  Game(1, data[3].AsArray[0].AsArray[2].AsInt, maxTime, curTime);


				JSONArray fishData = data[3].AsArray[1].AsArray;

				for (int i = 0; i < fishData.Count; i++)
				{
					JSONArray curGroup = fishData[i].AsArray;

					double thisSpawnTime = curGroup [3].AsDouble;
					if (thisSpawnTime > curGame.curGameTime) {

						 TargetObject tempTarget = new  TargetObject (curGroup [0].AsInt, curGroup [1],
							new Vector2 (curGroup [2].AsArray [0].AsFloat, curGroup [2].AsArray [1].AsFloat),
							curGroup [3].AsDouble, curGroup [4].AsDouble);
						List< TargetObject.TargetInfo> targets = new List< TargetObject.TargetInfo> ();
						JSONArray fishsInfo = curGroup [5].AsArray;
						int fishNum = FishGameInfo.groupInfo [tempTarget.groupId];

						for (int j = 0; j < fishNum; j++) {
							 TargetObject.TargetInfo tempInfo = new  TargetObject.TargetInfo (fishsInfo [j].AsArray [0].AsInt,
								fishsInfo [j].AsArray [1].AsInt,
								fishsInfo [j].AsArray [2].AsDouble,0,fishsInfo[j].AsArray[4].AsArray[0].AsInt);

							targets.Add (tempInfo);
						}

						tempTarget.SetTargetInfo (targets.ToArray ());
						fishList.Add (tempTarget);
					}
				}

				if (data [2].AsInt != -1) {
					JSONArray playerData = data [2].AsArray;
					for (int k = 0; k < playerData.Count; k++) {
						Debug.LogWarning ("Start game Data Player Data For Loop : " + k);
						JSONArray tempPlayer = playerData [k].AsArray;
						SeatInfo tempSeatInfo = new  SeatInfo (tempPlayer [3].AsInt,
							                        tempPlayer [0].AsInt,
							                        tempPlayer [1],
							                        tempPlayer [2].AsInt,
						                                       tempPlayer [4].AsDouble, tempPlayer [5].AsFloat, tempPlayer [6].AsDouble);

						seatList.Add (tempSeatInfo);
					}
				}
			}
			Debug.LogWarning ("Start game Data : " + seatList.Count);
			gameHandler.InitGame(curGame, fishList, seatList, this._id);

            OnRequestSitTable();
        }

        public void OnReceiveSitInData(JSONNode jsonResult)
        {
            JSONArray data = jsonResult["eventData"].AsArray;

			int status = data[0].AsInt;

			if (status == 0) {
				JSONArray playerData = data [1].AsArray;
				//bulletId = playerData[7].AsInt;

				SeatInfo tempSeatInfo = new SeatInfo (playerData [3].AsInt,
					                        playerData [0].AsInt,
					                        playerData [1],
					                        playerData [2].AsInt,
					                        playerData [4].AsDouble, playerData [5].AsFloat, playerData [6].AsInt);

				if (tempSeatInfo.playerId == this._id)
					_playerSeatNum = tempSeatInfo.seatId;

				gameHandler.OnReceivePlayerSitIn (tempSeatInfo, _playerSeatNum);
			}
			else
			{
				gameHandler.ReceiveSitInFail (status);
			}
        }

        public void OnReceiveRoundUpdateData(JSONNode jsonResult)
        {
			debugText.text = "";
            JSONArray data = jsonResult["eventData"].AsArray;

			int roundNum = data [0].AsInt;

			gameHandler.ReceiveRoundUpdate (roundNum);
			/*Game curGame;
            List<TargetObject> fishList = new List<TargetObject>();

			JSONArray fishData = data [2].AsArray [1].AsArray;

			for (int i = 0; i < fishData.Count; i++) 
			{
				JSONArray curGroup = fishData [i].AsArray;
				TargetObject tempTarget = new TargetObject (curGroup [0].AsInt, curGroup [1], 
					new Vector2(curGroup [2].AsArray[0].AsFloat, curGroup[2].AsArray[1].AsFloat)
					, curGroup [3].AsDouble, curGroup [4].AsDouble);
				List<TargetObject.TargetInfo> targets = new List<TargetObject.TargetInfo> ();
				JSONArray fishsInfo = curGroup [5].AsArray;
				int fishNum = FishGameInfo.groupInfo [tempTarget.groupId];

				for (int j = 0; j < fishNum; j++) {
					TargetObject.TargetInfo tempInfo = new TargetObject.TargetInfo (fishsInfo [j].AsArray [0].AsInt, 
						fishsInfo [j].AsArray [1].AsInt,
						fishsInfo [j].AsArray [2].AsDouble);

					targets.Add (tempInfo);
				}

				tempTarget.SetTargetInfo (targets.ToArray());
				fishList.Add (tempTarget);
			}

			double maxTime = data [2].AsArray [0].AsArray [0].AsDouble;
			double curTime = maxTime - data [2].AsArray [0].AsArray [1].AsDouble;

			curGame = new Game (1, 1, maxTime, curTxwime);*/

            //gameHandler.OnGameRoundUpdate(fishList, curGame);
        }

        public void OnReceiveFireinfo(JSONNode jsonResult)
        {
            JSONArray data = jsonResult["eventData"].AsArray;
			GunShoot tempGunShoot = new GunShoot(data[0].AsInt, data[2].AsInt, data[1].AsFloat, data[3].AsDouble, data[4].AsInt, data[5].AsDouble);
            gameHandler.UpdateAllGunShoot(tempGunShoot);
            gameHandler.UpdatePlayerCredit(data[0].AsInt, data[5].AsDouble);
            //UpdateFishGetHit();
        }

		public void OnReceiveFishStatus(JSONNode jsonResult)
		{
//			Debug.Log ("OnReceiveFishStatus : " +jsonResult.ToString ());
			//Debug.Log("Fish Status is come back");
			JSONArray data = jsonResult["eventData"].AsArray;
			//[1659,1,2103941823,[[8,1,100,0,100]]]
			int playerId = data[0].AsInt;
			int weapon = data[4].AsInt;
			long shootId = data[1].AsInt;
			double credit = data[2].AsDouble;

			int specialW = -1;

			JSONArray dinoList = data[3].AsArray;
			List<TargetObject.TargetInfo> tempList = new List<TargetObject.TargetInfo>();
			for (int i = 0; i < dinoList.Count; i++)
			{
				JSONNode thisDino = dinoList[i];
				TargetObject.TargetInfo curTarget;

				curTarget = new TargetObject.TargetInfo(thisDino[0].AsInt, thisDino[1].AsInt, thisDino[2].AsInt,
					(thisDino[3].AsInt == 1) ? true : false, thisDino[4].AsDouble,thisDino[5].AsArray);

				tempList.Add(curTarget);

				if (!curTarget.isAlive && specialW < 0)
				{
					specialW = VarifyIsSpecialWeapon(curTarget.targetType);
				}
			}

			gameHandler.UpdateFishDeath(playerId, weapon, credit, tempList.ToArray());
            gameHandler.UpdatePlayerCredit(playerId, credit);

			if (specialW > 0)
			{
				gameHandler.ReceiveSpecialWeapon(shootId, specialW, (playerId == _id));
			}
        }

		public void OnReceivePlayerLeave(JSONNode jsonResult)
		{
			JSONArray data = jsonResult["eventData"].AsArray;
			int seatId = data[0].AsInt;
			int playerId = data[1].AsInt;

			gameHandler.OnReceiveTablePlayerLeave(seatId, playerId, 0);
		}

		public void OnReceiveFishList(JSONNode jsonResult)
		{
			JSONArray data = jsonResult["eventData"].AsArray;

			Game curGame;
			List<TargetObject> fishList = new List<TargetObject>();

			JSONArray fishData = data[1].AsArray;

			for (int i = 0; i < fishData.Count; i++)
			{
				JSONArray curGroup = fishData[i].AsArray;
				TargetObject tempTarget = new TargetObject(curGroup[0].AsInt, curGroup[1],
					new Vector2(curGroup[2].AsArray[0].AsFloat, curGroup[2].AsArray[1].AsFloat)
					, curGroup[3].AsDouble, curGroup[4].AsDouble);
				List<TargetObject.TargetInfo> targets = new List<TargetObject.TargetInfo>();
				JSONArray fishsInfo = curGroup[5].AsArray;
				int fishNum = FishGameInfo.groupInfo[tempTarget.groupId];


				//Debug.LogWarning("Group ID : " + tempTarget.groupId);
				for (int j = 0; j < fishNum; j++)
				{
					TargetObject.TargetInfo tempInfo = new TargetObject.TargetInfo(fishsInfo[j].AsArray[0].AsInt,
						fishsInfo[j].AsArray[1].AsInt,
						fishsInfo[j].AsArray[2].AsDouble,0,fishsInfo[j].AsArray[4].AsArray[0].AsInt);

					//Debug.LogWarning("Fish Info ---> ID:" + tempInfo.targetId + "  Type:" + tempInfo.targetType);

					targets.Add(tempInfo);
				}

				//Debug.LogWarning("====================================================");

				tempTarget.SetTargetInfo(targets.ToArray());
				fishList.Add(tempTarget);
			}

			double maxTime = data[0].AsArray[2].AsDouble;
			double curTime = maxTime - data[0].AsArray[1].AsDouble;

			curGame = new Game(1, data[0].AsArray[3].AsInt, maxTime, curTime);

			int status = data[0].AsArray[0].AsInt;

			if (status == 0) 
			{
				bulletId = 0;
				gameHandler.OnGameRoundUpdate (fishList, curGame);
			}
			else if (status == 1)
				gameHandler.ReceiveNextBatchFish(fishList, curGame);
		}


		void OnReceiveGunType(JSONNode jsonResult)
		{
			JSONArray data = jsonResult["eventData"].AsArray;
			GunTypeChanged gunType = new GunTypeChanged(data[0].AsInt, data[1].AsInt);

			//if (gunType.gunType > 3)
				//shootIds.Add(++bulletId);

			gameHandler.UpdateAllGunType(gunType);
		}
        #endregion

        #region Socket Request

        public void OnRequestJoinTable(int tableId)
        {
            Debug.LogWarning("Request Join Table");
            SendSocketRequestData("1", "1", tableId.ToString(), "-1", null);
        }
		public void OnRequestReconnectJoinTable(int tableId){
			SendSocketRequestData("1", "1","1", tableId.ToString(), null);
		}

        public void OnRequestTableList(int categoryId)
        {
            Debug.LogWarning("Request Table List");
            SendSocketRequestData("1", "2", categoryId.ToString(), null, null);
        }

        public void OnRequestSitTable()
        {
            Debug.LogWarning("Request Sit Table");
            SendSocketRequestData("2", "1", null, null, null);
        }

		//List<long> shootIds = new List<long>();
		public void UpdateFishGetHit(int[] hittedFish, int weaponId, long shootId)
		{
			if (hittedFish.Length > 0)
			{
				string fishList = "[";

				for (int i = 0; i < hittedFish.Length; i++)
				{
					fishList += hittedFish[i].ToString();

					if (i < (hittedFish.Length - 1))
					{
						fishList += ",";
					}
					else
					{
						fishList += "]";
					}
				}
//				Debug.Log (fishList +" / " +shootId);
				SendSocketRequestData("2", "5", shootId.ToString(), fishList, null);
			}
			else
			{
				//Debug.Log("Fish Array is empty");
			}
		
			//SimulateFishDeath(hittedFish, weaponId, betValue);
		}

        public void UpdateGunShoot(GunShoot gunShoot)
        {
			lock(locker)
			{
//				bulletId ++;
				bulletId = long.Parse(DateTime.Now.ToString("yyyyMMddHHmmssfffff"));
				//shootIds.Add(bulletId);
				//gameHandler.ReceiveOwnGunShoot(new GunShoot(gunShoot, bulletId));
				GunShoot tempGunShoot = new GunShoot(gunShoot.playerId,gunShoot.gunType,gunShoot.shootAngle,gunShoot._betValue,bulletId,0);

				if (gunShoot.gunType == 2) {
					SendSocketRequestData("2", "4", gunShoot.shootAngle.ToString(), gunShoot.gunType.ToString(), gunShoot._betValue.ToString(), (bulletId+1).ToString());
					SendSocketRequestData("2", "4", gunShoot.shootAngle.ToString(), gunShoot.gunType.ToString(), gunShoot._betValue.ToString(), (bulletId+2).ToString());
				}else
				SendSocketRequestData("2", "4", gunShoot.shootAngle.ToString(), gunShoot.gunType.ToString(), gunShoot._betValue.ToString(), bulletId.ToString());

				gameHandler.UpdateOwnShoot(tempGunShoot);


				//SimulateGunShoot(gunShoot);
			}
        }

        public void OnRequestLeaveTable()
        {
            Debug.Log("Leave Table");
            SendSocketRequestData("2", "3", null, null, null);
        }

        public void UpdateGunType(GunTypeChanged gunChanged)
        {
			SendSocketRequestData("2", "6", null, null, null);
			//ChangeWeaponType();
        }

        /*public void UpdateHitedFishes(int[] fishes, int weaponType)
        {
            string tempFishString = "[";
            for (int i = 0; i < fishes.Length; i++)
            {
                tempFishString += fishes[i].ToString();

                if (i < (fishes.Length - 1))
                    tempFishString += ",";
            }

            tempFishString += "]";

            //SendSocketRequestData("2", "5", _id.ToString(), tempFishString, null);
            //SimulateFishDeath(fishes);
        }*/

        public void UpdateGunMove(GunMove gunMove)
        {
        }

		#endregion

		int VarifyIsSpecialWeapon(int fishType)
		{
			if (fishType == 203)
				return 6;
			/*else if (fishType == 201)
				return 4;
			else if (fishType == 202)
				return 5;*/

			return - 1;
		}

        public void ChangeBetAmount(int changeValue)
        {
            _betAmountIndex += changeValue;
            if (_betAmountIndex < 0)
                _betAmountIndex = 0;
            else if (_betAmountIndex >= _betAmountArray.Length)
                _betAmountIndex = _betAmountArray.Length - 1;

            gameHandler.UpdateBetAmount(_id, _betAmountArray[_betAmountIndex]);

        }

        public void ChangeWeaponType()
        {
			Debug.Log("Change Gun Type Func Called");
            if (_weaponIndex < 3)
            {
                _weaponIndex += 1;
            }
            else
            {
                _weaponIndex = 1;
            }

			lastUseWeapon = _weaponIndex;
            gameHandler.UpdateAllGunType(new GunTypeChanged(_playerSeatNum, _weaponIndex));
        }
		public DateTime dateTimeDc; 
        public override void OnSuspend()
        {
			dateTimeDc = System.DateTime.Now;
//			Debug.Log(dateTimeDc);
            Debug.Log("Suspend");
        }

        protected override bool isLoginScene()
        {
            return false;
        }

        protected void UpdateConnectionRespondTime(double range)
        {
        }

        protected void OnConnectionClosed(GSConnectionErrorType type, GSGameState gameState)
        {
            foreach (IConnector connector in connectorList)
            {
                if (!connector.Equals(null)) //ensure object is still alive and available..
                {
                    Debug.Log("<color=orange>We're going to disconnect</color>");
                    connector.OnConnectionClosed(type, gameState); //issue close connection.
                }
            }

			if (gameHandler != null) {
				gameHandler.Disconnect ();
			}
        }

        #region Start Connect Process

        public override void OnCheckVersionFailed()
        {
        }

        public override void OnCheckVersionSuccess(int type, string version, string loginUrl, string mainFrom, string mainTo, string downloadLink)
        {
			
        }

        public override void LoginSuccess()
        {
            Debug.Log("<color=cyan>On Login Success</color>");
			debugText.text = "Login Success...";
        }

        public override void OnLoginFailed(GSConnectionErrorType typeId)
        {
            Debug.Log("<color=cyan>On Login Success</color>");
			debugText.text = "Login Fail...";
        }

        public override void OnConnectingSocket()
        {
            Debug.Log("<color=cyan>On Connecting Socket</color>");
        }

        public override void OnReconnecting()
        {
            Debug.Log("<color=cyan>On Reconnecting</color>");
			if (gameHandler != null) {
				gameHandler.Disconnect ();
			}
        }

		public bool isEnableDisconnectT;
		public override void OnRequestReconnect()
		{

			System.TimeSpan diff = System.DateTime.Now.Subtract(dateTimeDc);
			Debug.Log (diff.TotalSeconds);

			if (diff.TotalSeconds > 30 && isEnableDisconnectT) {
				if (gameHandler != null) {
					gameHandler.DisconnectBackLobby ();
				}
			} else {
				GameImpl gameImpl = FindObjectOfType<GameImpl>();
				gameImpl.RequestNewToken();
			}

		}


        public override void OnVerifying()
        {
            Debug.Log("<color=cyan>On Verifying</color>");
			debugText.text = "Verifying...";
        }

        public override void OnConnectSocketFailed()
        {
            Debug.Log("<color=cyan>On Connect Socket Fail</color>");
			debugText.text = "Connect Socket Fail...";
        }

        public override void OnVerifyFailed()
        {
            Debug.Log("<color=cyan>On Verify Fail</color>");
			debugText.text = "Verify Failed...";
        }

        public override void OnConnectSocketSuccess()
        {
            Debug.Log("<color=cyan>On Connect Socket Success</color>");
			debugText.text = "Connect Socket Success...";
        }

        public override void OnVerifySuccess()
        {
            EnabledPingPong();
            Debug.Log("<color=cyan>On Verify Success</color>");
			debugText.text = "Verify Success...";
        }

        public override void OnReconnectFail()
        {
            Debug.Log("<color=cyan>On Reconnect Fail</color>");
        }

        public override void OnDisconnect(GSConnectionErrorType typeId)
        {
            DisablePingPong();
            OnConnectionClosed(typeId, GSGameState.Disconnected);
            Debug.Log("<color=cyan>On Disconnect</color>");
			debugText.text = "Disconnected...";
        }

        public override void OnReconnectSuccess()
        {
			EnabledPingPong();
            Debug.Log("<color=cyan>On Reconnect Success</color>");
        }

		#endregion

		#region Clean Up
		public void CleanUp()
		{
			DisablePingPong(true);
			OnRequestLeaveTable();
			if(this.socketManager!=null)
			this.socketManager.Disconnect(GSConnectionErrorType.USER_INITIATE_DISCONNECT);
			if(this.gameObject!=null)
			Destroy(this.gameObject);
		}
		#endregion

		#region simulateData

		void SimulateGunShoot(GunShoot gunShoot)
        {
            gameHandler.UpdateAllGunShoot(gunShoot);
        }

		public void SimulateSwFire(GunShoot gunShoot)
		{
			gameHandler.UpdateAllGunShoot(gunShoot);
			gameHandler.UpdateAllGunType(new GunTypeChanged(_id, lastUseWeapon));
		}

        void SimulateFishDeath(int[] hittedFish, int weaponId, double betValue)
        {
            int success = UnityEngine.Random.Range(0, 5);
			bool isSw = (weaponId > 3)? true:false;
			//int success = 1;
			//int success = 0;

			if (isSw)
			{
				List<TargetObject.TargetInfo> deathFishs = new List<TargetObject.TargetInfo>();
				for (int i = 0; i < hittedFish.Length; i++)
				{
					if (hittedFish[i] != 201 && hittedFish[i] != 202)
					{
						fishDict[hittedFish[i]].thisFishDeath();
						fishDict[hittedFish[i]].setPayout(betValue * UnityEngine.Random.Range(1, 10));
						deathFishs.Add(fishDict[hittedFish[i]]);
					}

					gameHandler.UpdateFishDeath(_id, 1, _credit, deathFishs.ToArray());
				}
			}
			if (success == 1)
            {
                FishDeathInfo tempFishDeathInfo = new FishDeathInfo(_id, hittedFish[0], _betAmountArray[_betAmountIndex]*UnityEngine.Random.Range(1, 21));
                FishSfxController sfxController = FindObjectOfType<FishSfxController>();
                if (sfxController != null)
                    sfxController.PlayFish();

				TargetObject.TargetInfo deathFish = fishDict[hittedFish[0]];
				deathFish.thisFishDeath();
				deathFish.setPayout(betValue * UnityEngine.Random.Range(1, 10));

				gameHandler.UpdateFishDeath(_id, 1, _credit, new TargetObject.TargetInfo[] {deathFish});

				if (hittedFish[0] == 201 || hittedFish[0] == 202)
				{
					int swType = (hittedFish[0] == 201) ? 4 :
						(hittedFish[0] == 202) ? 5: 0;

					gameHandler.UpdateAllGunType(new GunTypeChanged(_id, swType));
				}
            }
        }

        IEnumerator CountDown(int roundIndex, int roundPhase, float timeDelta)
        {
            yield return new WaitForSeconds(timeDelta);

            RoundUpdate tempRound = new RoundUpdate(roundIndex, roundPhase);
            gameHandler.UpdateRoundInfo(tempRound);

            if (roundIndex == 2 && roundPhase == 0)
            {
                SimulateInit();
            }
            else if (roundIndex == 2 && roundPhase == 1)
                StartCoroutine(CountDown(2, 2, 60f));
            else if (roundIndex == 2 && roundPhase == 2)
                StartCoroutine(CountDown(1, 1, 0f));
            else if (roundIndex == 1 && roundPhase == 1)
            {
                StartCoroutine(CountDown(2, 0, 5f));
            }
        }

		int lastUseWeapon = 1;
		Dictionary<int, TargetObject.TargetInfo> fishDict;
        Game game;
        int[] singleGroup = new int[] {1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14};

        void SimulateInit()
        {
			fishDict = new Dictionary<int, TargetObject.TargetInfo>();
            game = new Game(1, UnityEngine.Random.Range(1, 4), 60, 0);
            //game = new Game(1,3, 60, 0);
            FishGameInfo.Init();
            List<TargetObject> fishList = new List<TargetObject>();

            /*for (int i = 0; i < 1000; i++)
		{
			int startDir = UnityEngine.Random.Range(0, 4);
			int endDir = UnityEngine.Random.Range(0, 4);

			while (startDir == endDir)
				endDir = UnityEngine.Random.Range(0, 4);

			float startPos = UnityEngine.Random.Range(-1f, 1f);
			float endPos = 0f;

			if ((startDir == 0 && (endDir == 1 || endDir == 3)) ||
			   (startDir == 1 && (endDir == 2 || endDir == 0)))
				endPos = UnityEngine.Random.Range(-1f, 0f);

			if ((startDir == 2 && (endDir == 2 || endDir == 3)) ||
			   (startDir == 3 && (endDir == 1 || endDir == 3)))
				endPos = UnityEngine.Random.Range(0f, 1f);

			fishList.Add(new TargetObject(i, UnityEngine.Random.Range(0, 19), UnityEngine.Random.Range(0f, 170f), UnityEngine.Random.Range(15f, 25f), 1, 50f, startDir, startPos, endDir, endPos));
		}*/

            int tempFishId = 0;
            for (int i = 0; i < 100; i++)
            {
                //int[] offSet = FishGameInfo.routeOffsetRange["r1"];

                int groupId = UnityEngine.Random.Range(0, 10);

                if (groupId != 2 && groupId != 3 && groupId != 4)
                    groupId = 1;

				fishList.Add(new TargetObject(groupId, "L" + UnityEngine.Random.Range(0, 500), Vector2.zero, UnityEngine.Random.Range(0, 60),
                    UnityEngine.Random.Range(10, 20)));

                int fishNum = FishGameInfo.groupInfo[groupId];
                TargetObject.TargetInfo[] infos = new TargetObject.TargetInfo[fishNum];

                if (groupId == 1)
                {
                    infos[0] = new TargetObject.TargetInfo(tempFishId, singleGroup[UnityEngine.Random.Range(1, singleGroup.Length)], 10);
					fishDict.Add(tempFishId, infos[0]);
                    tempFishId++;
                }
                else if (groupId == 2)
                {
                    infos[0] = new TargetObject.TargetInfo(tempFishId, 1, 10);
					fishDict.Add(tempFishId, infos[0]);
                    tempFishId++;
                    infos[1] = new TargetObject.TargetInfo(tempFishId, 1, 10);
					fishDict.Add(tempFishId, infos[1]);
                    tempFishId++;
                    infos[2] = new TargetObject.TargetInfo(tempFishId, 1, 10);
					fishDict.Add(tempFishId, infos[2]);
                    tempFishId++;
                    infos[3] = new TargetObject.TargetInfo(tempFishId, 1, 10);
					fishDict.Add(tempFishId, infos[3]);
                    tempFishId++;
                }
                else if (groupId == 3)
                {
                    infos[0] = new TargetObject.TargetInfo(tempFishId, 2, 10);
					fishDict.Add(tempFishId, infos[0]);
                    tempFishId++;
                    infos[1] = new TargetObject.TargetInfo(tempFishId, 2, 10);
					fishDict.Add(tempFishId, infos[1]);
                    tempFishId++;
                    infos[2] = new TargetObject.TargetInfo(tempFishId, 1, 10);
					fishDict.Add(tempFishId, infos[2]);
                    tempFishId++;
                }
                else if (groupId == 4)
                {
                    for (int j = 0; j < fishNum; j++) 
                    {
                        infos[j] = new TargetObject.TargetInfo(tempFishId, 8, 10);
						fishDict.Add(tempFishId, infos[j]);
                        tempFishId++;
                    }
                }

                fishList[i].SetTargetInfo(infos);
            }

            /////////////Map Detail///////////////
            /// 
            /// Map ID = 1
            /// Crap Boss
            /// 
            /// Map ID = 2
            /// Dragon
            /// 
            /// Map ID = 3 
            /// Taco
            /// 
            /// (Check Below Info)
            //////////////////////////////////////

            string pathChar = "C";
            int fishType = 20;

            //Debug.LogWarning("Map Id : " + game.mapId);

            if (game.mapId == 2)
            {
                pathChar = "D";
                fishType = 21;
            }
            else if (game.mapId == 3)
            {
                pathChar = "T";
                fishType = 22;
            }

            //---------------------Add 1 ---------------------
			fishList.Add(new TargetObject(1, pathChar + 1, Vector2.zero, UnityEngine.Random.Range(0, 60),
                25));
            int fishNum2 = FishGameInfo.groupInfo[1];
            TargetObject.TargetInfo[] infos2 = new TargetObject.TargetInfo[fishNum2];

            for (int j = 0; j < fishNum2; j++)
            {
                infos2[j] = new TargetObject.TargetInfo(tempFishId, fishType, 10);
                tempFishId++;
            }
            fishList[100].SetTargetInfo(infos2);

            //----------------------Add 2 ------------------------
			fishList.Add(new TargetObject(1, pathChar + 2, Vector2.zero, UnityEngine.Random.Range(0, 60),
                25));
            infos2 = new TargetObject.TargetInfo[fishNum2];

            for (int j = 0; j < fishNum2; j++)
            {
                infos2[j] = new TargetObject.TargetInfo(tempFishId, fishType, 10);
                tempFishId++;
            }

            fishList[101].SetTargetInfo(infos2);

            //---------------------Add 3 --------------------------
			fishList.Add(new TargetObject(1, pathChar + 3, Vector2.zero, UnityEngine.Random.Range(0, 60),
                25));
            infos2 = new TargetObject.TargetInfo[fishNum2];

            for (int j = 0; j < fishNum2; j++)
            {
                infos2[j] = new TargetObject.TargetInfo(tempFishId, fishType, 10);
                tempFishId++;
            }

            fishList[102].SetTargetInfo(infos2);

            //--------------------Add 3 -------------------------
			fishList.Add(new TargetObject(1, pathChar + 4, Vector2.zero, UnityEngine.Random.Range(0, 60),
                25));
            infos2 = new TargetObject.TargetInfo[fishNum2];

            for (int j = 0; j < fishNum2; j++)
            {
                infos2[j] = new TargetObject.TargetInfo(tempFishId, fishType, 10);
                tempFishId++;
            }

            fishList[103].SetTargetInfo(infos2);

            /*
		fishList.Add(new TargetObject(0, 10, 0f, 20f, 1, 50f, 1, 0, 3, 0));
		fishList.Add(new TargetObject(1, 10, 0f, 20f, 1, 50f, 1, 0, 2, 0));
		fishList.Add(new TargetObject(2, 10, 0f, 20f, 1, 50f, 1, 0, 0, 0));
		fishList.Add(new TargetObject(3, 10, 0f, 20f, 1, 50f, 2, 0, 0, 0));*/
            List<GunInfo> gunInfoList = new List<GunInfo>();
            gunInfoList.Add(new GunInfo(0, "NormalGun", 0.25f, 0));
            gunInfoList.Add(new GunInfo(1, "SpecialGun", 0.2f, 1));
            gunInfoList.Add(new GunInfo(2, "VipGun", 0.15f, 2));

            List<SeatInfo> seatInfoList = new List<SeatInfo>();
            //seatInfoList.Add(new SeatInfo(0, 0, "other1", 0, 9999999f, 0f, 100));
            //seatInfoList.Add(new SeatInfo(1, 1, "other2", 0, 88f, 0f, 250));
            //seatInfoList.Add(new SeatInfo(2, 2, "other3", 0, 1000000f, 0f, 1000));
            //seatInfoList.Add(new SeatInfo(2, 2, "other4", 0, 1000f, 0f, 100));

            _playerSeatNum = 1;
            int betAmount = 250;

            gameHandler.InitGame(game, fishList, seatInfoList, 1);
            gameHandler.OnReceivePlayerSitIn(new SeatInfo(_playerSeatNum, 1, "player1", 0, 1234567f, 0f, betAmount), _playerSeatNum);
            StartCoroutine(CountDown(2, 1, 2f));

            _id = 1;
            _betAmountArray = new int[] {10, 20, 50, 100, 150,200, 300, 500, 1000};
            _betAmountIndex = 0;
            for (int i = 0; i < _betAmountArray.Length; i++)
            {
                if (_betAmountArray[i] == betAmount)
                {
                    _betAmountIndex = i;
                    break;
                }
            }

            gameHandler.PlayerChangeBetAmount(0);
            /*testLoginResult = new LoginResult ("TestToken", true, "Success");
		testPlayerDetail = new PlayerDetail ("TestName", 888888);

		testGame = new Game(1, 60f, 0f); 
		testFishList = new List<TargetObject> ();
		testGunInfoList = new List<GunInfo> ();
		testGameInfoList = new List<CmmLobbyRoomData> ();
		seatInfoList = new List<SeatInfo>();

		testGameInfoList.Add(new CmmLobbyRoomData(0, "FishScene", 0, "0.0.0.0", 1111));
		testGameInfoList.Add(new CmmLobbyRoomData(1, "FishSimulator", 0, "0.0.0.0", 1111));*/
        }

		int swStartingId = 9999;
		List<int> swIdList;
		float swSpawnMinTime = 0f;
		float swSpawnManTime = 5f;
		float swSpawnInterval = 30f;
		int roomMul = 2;
		TargetObject obj;

		IEnumerator SimulateSuperWeapon()
		{
			swIdList = new List<int>();

			for (int i = 0; i < 10; i++)
			{
				float spawnTime = UnityEngine.Random.Range(swSpawnMinTime, swSpawnManTime);

				yield return new WaitForSeconds(spawnTime);

				int rand = UnityEngine.Random.Range(0, 3);

				if (rand == 0)
				{
					obj = new TargetObject(1, "S" + UnityEngine.Random.Range(0, 2), new Vector2(0f, -UnityEngine.Random.Range(3f, 5f)), spawnTime + 5 + (i * swSpawnInterval), 20);
					obj.SetTargetInfo(new TargetObject.TargetInfo[] { new TargetObject.TargetInfo(swStartingId + i, 201, 40) });
					fishDict.Add(swStartingId + i, obj.targetInfo[0]);
				}
				else if (rand == 1)
				{
					obj = new TargetObject(1, "S" + UnityEngine.Random.Range(0, 2), new Vector2(0f, -UnityEngine.Random.Range(3.5f, 4.5f)), spawnTime + 5 + (i * swSpawnInterval), 10);
					obj.SetTargetInfo(new TargetObject.TargetInfo[] { new TargetObject.TargetInfo(swStartingId + i, 202, 40) });
					fishDict.Add(swStartingId + i, obj.targetInfo[0]);
				}
				swIdList.Add(swStartingId + i);

				gameHandler.ReceiveSwObj(obj);

				yield return new WaitForSeconds(swSpawnInterval - spawnTime);
			}
		}

        #endregion
    }
}