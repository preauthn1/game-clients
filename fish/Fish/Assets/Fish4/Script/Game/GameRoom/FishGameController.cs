using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using GSLibrary.Common.Connection;
using System;

namespace P8Games.Fish4
{
	public class FishGameController : Fish_ArcadeGameController
	{
		[SerializeField] public PoolView pv = null;
		[SerializeField] public FrameView fv = null;
		[SerializeField] public Fish_ErrorView ev = null;
		private FishDataManager fishingDataManager;

		private bool gameStart = false;

		private List<GunTypeChanged> pendingGunList = new List<GunTypeChanged>();
		//		private bool pendingGun = false;
		private int playerId;

		private Game curGame;
		public GameObject reconnectObj;
		public GameObject messageObj;
		void Start()
		{
			FishGameInfo.Init ();

			//			Debug.Log ("123");
			fishingDataManager = FindObjectOfType<FishDataManager>();
			//			Debug.Log (fishingDataManager);
			if (fishingDataManager != null && (this.transform.parent == null || this.transform.parent.gameObject.name == "Game"))
				fishingDataManager.Register(this);

			//fishingDataManager.InitGame("0.0.0.0", 8800, "e5001787cfd1d75d2a24c1a6b619fd01");

		}
		public void DisconnectBackLobby(){
			if(ev!=null)
				ev.ShowDisconnect ();
			//				ev.Show("Disconnect From Server more that 30 second.");
		}
		public void Disconnect(){
			if(reconnectObj!=null)
				reconnectObj.SetActive (true);
		}
		public void InitGame(Game game, List<TargetObject> fishList, List<SeatInfo> seatInfoList, int playerId)
		{
			if(reconnectObj!=null)
				reconnectObj.SetActive (false);
			Fish_BackgroundBehavior backgroundBehavior = FindObjectOfType<Fish_BackgroundBehavior>();
			float time = 300f - (float)game.curGameTime;
			if (time < 0) {
				time = 0;
			}
			backgroundBehavior.CheckBackground(game.mapId,time);

			pv.PlayerShootStatus(false);

			List<GunInfo> testGunInfoList = new List<GunInfo>();
			testGunInfoList.Add(new GunInfo(1, "NormalGun", 0.25f,1));
			testGunInfoList.Add(new GunInfo(2, "SpecialGun", 0.15f, 2));
			testGunInfoList.Add(new GunInfo(3, "VipGun", 0.35f, 3));
			testGunInfoList.Add(new GunInfo(4, "VipGun", 0.15f, 4));

			pv.Init(this, fishList, testGunInfoList, seatInfoList, game.curGameTime, playerId);
			this.playerId = playerId;
			fv.Init(game);

			Debug.Log ("Init Game Fish Number : " + fishList.Count);

			if (game.roundId > -1) {
				StartGame ();
				curGame = game;
			}
		}

		void Update()
		{
			if (gameStart)
			{
				fv.SetCurTime(Time.deltaTime);

				if (curGame.maxGameTime - fv.curTime <= 8 ) {
					pv.PlayerShootStatus (true);
					messageObj.SetActive (true);
				}else{
					messageObj.SetActive (false);
				}

				if ((int)fv.curTime < curGame.maxGameTime)
				{
					pv.UpdateAllGroup(fv.curTime);
				}
				else
				{
					gameStart = false;
					EndGame();
				}
			}
		}

		public void StartGame()
		{
			gameStart = true;

			fv.StartGame();
		}

		public void EndGame()
		{
			fv.EndGame();
			pv.EndGameGroup();
		}

		public void PlayerChangeBetAmount(int changeValue)
		{
			fishingDataManager.ChangeBetAmount(changeValue);
		}

		public void PlayerChangeWeapon()
		{
			//			pendingGun = true;
			fishingDataManager.UpdateGunType(null);
		}

		public void UpdateOwnGunMove(GunMove gunMove)
		{
			fishingDataManager.UpdateGunMove(gunMove);
		}

		public void UpdateOwnGunShoot(GunShoot gunShoot)
		{
			fishingDataManager.UpdateGunShoot(gunShoot);
		}

		public void UpdateOwnGunType(GunTypeChanged gunChanged)
		{

			fishingDataManager.UpdateGunType(gunChanged);
		}

		public void UpdateBetAmount(int playerId, int betAmount)
		{
			pv.UpdateBetAmount(playerId, betAmount);
		}

		public void UpdateHitedFishes(int[] fishes, int weaponType, long shootId)
		{
			fishingDataManager.UpdateFishGetHit(fishes, weaponType, shootId);
		}

		public void UpdateAllGunMove(GunMove gunMove)
		{
			pv.UpdateAllGunMove(gunMove);
		}

		public void UpdatePlayerCredit(int playerId, double credit)
		{
			pv.UpdatePlayerCredit(playerId, credit);
		}

		public void UpdateAllGunShoot(GunShoot gunShoot)
		{
			if (this.playerId == gunShoot.playerId)
				return;
			//            FishSfxController sfxController = FindObjectOfType<FishSfxController>();
			//			if (sfxController != null && this.playerId == gunShoot.playerId && gunShoot.gunType < 3)
			//                sfxController.PlayShoot();
			//			else if(sfxController != null && this.playerId == gunShoot.playerId && gunShoot.gunType == 3)
			//				sfxController.PlayLaser();
			//			
			pv.UpdateAllGunShoot(gunShoot);
		}

		public void UpdateOwnShoot(GunShoot gunShoot){
			FishSfxController sfxController = FindObjectOfType<FishSfxController>();
			if (sfxController != null && this.playerId == gunShoot.playerId && gunShoot.gunType < 3)
				sfxController.PlayShoot();
			else if(sfxController != null && this.playerId == gunShoot.playerId && gunShoot.gunType == 3)
				sfxController.PlayLaser();

			pv.UpdateAllGunShoot(gunShoot);
		}

		public void UpdateAllGunType(GunTypeChanged gunChanged)
		{
			//            Debug.Log("UPDATE ALL GUN TYPE   " + gunChanged.gunType);
			if (gunChanged.gunType == -1)
				return;

			if (gunChanged.playerId != playerId)
				pv.UpdateAllGunType(gunChanged);
			else
			{
				//            if (pendingGun)
				//{
				pv.UpdateAllGunType(gunChanged);
				//	pendingGun = false;
				//}
				//else
				//{
				//	pendingGunList.Add(gunChanged);
				//}
			}
		}

		public void UpdateFishDeath(int playerId, int weaponId, double credit, TargetObject.TargetInfo[] deathInfo)
		{
			pv.OnFishStatusUpdate(playerId, weaponId, credit, deathInfo);
		}

		public void ReceiveOwnGunShoot(GunShoot gunShoot)
		{
			pv.ReceiveOwnGunShoot(gunShoot);
		}

		public void ReceiveRoundUpdate(int roundNum)
		{
			if (roundNum == 2) {
				FishMusicController musicController = FindObjectOfType<FishMusicController>();
				if (musicController != null)
					StartCoroutine(musicController.PlaySwitchMusic());

				Fish_BackgroundBehavior backgroundBehavior = FindObjectOfType<Fish_BackgroundBehavior>();
				backgroundBehavior.ChangeBackground();

				Fish_GameAreaBehavior gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
				gameArea.ResetType();

				pv.ResetDict();

				pv.PlayerShootStatus(true);
			}
		}

		public void ReceiveSpecialWeapon(long shootId, int weaponType, bool isOwnSw)
		{

		}

		public void ReceiveSitInFail(int status)
		{
			if (status == 1) 
			{
				ev.Show("An error occurred while joining table. Please try again.");
			}
			else if (status == 2)
			{
				ev.Show("Sit In Fail - Table Full");
			}
		}

		public override void OnReceiveSystemConnected(long id, string username, double credit, string dateTime, int avatarId, int baseCurrType, double baseCurrRate, int playerCurrType, double playerCurrRate, string countryCode)
		{
		}

		public override void OnConnectionClosed(GSConnectionErrorType type, GSGameState gameState)
		{
			//ev.Show("Connection close, please back to lobby resume game again.");
		}

		public override void OnPlayerCreditUpdate(double credit)
		{
		}

		public override void OnReceiveTablePlayerLeave(int seatId,int playerId , int status)
		{
			pv.OnReceiveTablePlayerLeave(playerId, seatId, status);
		}

		public override void OnUpdateServerRespondTime(double range)
		{
		}

		public override void OnReceiveSystemMaintenance(int type, string message, string fromDate, string toDate)
		{
		}

		public override void OnReceiveJoinTableReject(string errorMsg)
		{
			ev.Show("An error occurred while joining the table. Please try again.");
		}

		public override void OnReceiveTableSitError(string message)
		{
			ev.Show("An error occurred while sitting the table. Please try again.");
		}

		public override void OnRecieveTableKick()
		{
			ev.Show("You have been kicked out from the table.");
		}

		public override void OnGameRoundUpdate(List<TargetObject> fishList, Game curGame)
		{
			//Start Game

			//RoundNumber: 2
			//RoundPhase: 0
			//Init Data

			//(After 3s)

			//RoundNumber: 2
			//RoundPhase: 1
			//Start Game

			//(After 60s)

			//RoundNumber: 2
			//RoundPhase: 2
			//End Game

			//(Immediately)

			//RoundNumber: 1
			//RoundPhase: 1
			//Clean Pool

			//(After 5s, send again 2, 0)
			this.curGame = curGame;
			pv.RoundUpdate(fishList, curGame);
			Fish_BackgroundBehavior backgroundBehavior = FindObjectOfType<Fish_BackgroundBehavior>();
			backgroundBehavior.CheckBackground(curGame.mapId);
			pv.PlayerShootStatus(false);
			fv.Init(curGame);
			StartGame ();
		}

		public override void OnReceivePlayerSitIn(SeatInfo playerInfo, int thisPlayerSeatNum)
		{
			pv.SitInSuccess(playerInfo, thisPlayerSeatNum);
		}

		public override void UpdateRoundInfo(RoundUpdate roundUpdate)
		{
			if (roundUpdate.roundNumber == 2 && roundUpdate.roundPhase == 1)
			{
				StartGame();
			}
			else if (roundUpdate.roundNumber == 2 && roundUpdate.roundPhase == 2)
			{
				EndGame();
			}
			else if (roundUpdate.roundNumber == 1 && roundUpdate.roundPhase == 1)
			{
				pv.CleanPool();
			}
		}

		public void ReceiveNextBatchFish(List<TargetObject> fishList, Game curGame)
		{
			pv.ReceiveNextBatchFish(fishList, curGame);
		}

		public void ReceiveSwObj(TargetObject swObj)
		{

		}

		public void CheckNextGun()
		{
			if (pendingGunList.Count > 0)
			{
				pv.UpdateAllGunType(pendingGunList[0]);
				pendingGunList.RemoveAt(0);
			}
			//			else
			//			{
			//				pendingGun = true;
			//			}
		}

		public void CleanUp()
		{
			dataManager.CleanUp();
		}

		public void CheckPlayerCredit(double credit){
			if (credit < 10) {
				ev.ShowBackLobbyMessage("Credit is Less that Minimun Buy In.");
			}
		}
	}
}