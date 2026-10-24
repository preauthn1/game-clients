using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using UnityEngine.UI;

namespace P8Games.Fish4
{
	public class PoolView : MonoBehaviour
	{
		public RouteCollection rc;

		public GameObject seatHolder;
		public GameObject fishHolder;
		public GameObject[] payoutTextPrefab;
		[SerializeField] public GunView[] gunList = null;
		[SerializeField] public UserInfoView[] userList = null;
		[Space(10)] public GameObject[] spawnPoint;
		[SerializeField] public GameObject[] groupPref = null;
		[SerializeField] public GameObject[] group1Pref = null;
		[SerializeField] public GameObject[] swPref = null;


		[Header("Effect")] public GameObject coinExplosive;
		public GameObject coin;
		public GameObject coin2;


		[Header("Dragon")] public GameObject[] dragon;
		public GameObject dragonPayoutTextPrefab;
		public GameObject[] dragonWinBase;
		public GameObject[] dragonPowerWinBase;

		[Header("Crab")] public GameObject[] crab;
		public GameObject crabPayoutTextPrefab;
		public GameObject[] crabWinBase;
		public GameObject[] crabPowerWinBase;

		[Header("Taco")] public GameObject[] taco;
		public GameObject tacoPayoutTextPrefab;
		public GameObject[] tacoWinBase;
		public GameObject[] tacoPowerWinBase;

		[Header("BulbFish")] public GameObject[] bulbFish;
		public GameObject bulbFishPayoutTextPrefab;
		public GameObject[] bulbFishWinBase;
		public GameObject[] bulbPowerWinBase;

		[Header("CrocodileFish")] public GameObject[] crocodile;
		public GameObject crocodilePayoutTextPrefab;
		public GameObject[] crocodileWinBase;
		public GameObject[] crocodilePowerWinBase;

		[Header("TurtleFish")] public GameObject[] turtle;
		public GameObject turtlePayoutTextPrefab;
		public GameObject[] turtleWinBase;
		public GameObject[] turtlePowerWinBase;

		[Header("Dragon2Fish")] public GameObject[] dragon2;
		public GameObject dragon2PayoutTextPrefab;
		public GameObject[] dragon2WinBase;
		public GameObject[] dragon2PowerWinBase;

		[Header("Boss Boom Effect")]
		public GameObject[] bossBoomEffect;
		private FishGameController gvc;
		List<GunInfo> gunInfoList =  new List<GunInfo>();

		List<TargetObject> unspawnTarget = new List<TargetObject>();
		List<GroupBehavior> groupList = new List<GroupBehavior>();
		List<DragonGroupBehavior> dragonGroupList = new List<DragonGroupBehavior>();
		List<CrabGroupBehavior> crabGroupList = new List<CrabGroupBehavior>();
		List<TacoGroupBehavior> tacoGroupList= new List<TacoGroupBehavior>();
		List<BulbFishGroupBehavior> bulbFishGroupList= new List<BulbFishGroupBehavior>();
		List<CrocodileGroupBehavior> crocodileGroupList= new List<CrocodileGroupBehavior>();
		List<TurtleGroupBehavior> turtleGroupList= new List<TurtleGroupBehavior>();
		List<Dragon2GroupBehavior> dragon2GroupList= new List<Dragon2GroupBehavior>();

		Dictionary<int, GunView> gunDict= new Dictionary<int,GunView> ();
		public Dictionary<int, UserInfoView> userDict = new Dictionary<int,UserInfoView> ();
		public Dictionary<int, SeatInfo> playerDict = new Dictionary<int,SeatInfo> ();
		int thisPlayerId;

		Dictionary<int, FishBehavior> fishDict = new Dictionary<int, FishBehavior>();
		Dictionary<int, TacoBehavior> tacoDict = new Dictionary<int, TacoBehavior>();
		Dictionary<int, DragonBehavior> dragonDict = new Dictionary<int, DragonBehavior>();
		Dictionary<int, CrabBehavior> crabDict = new Dictionary<int, CrabBehavior>();
		Dictionary<int, BulbFishBehavior> bulbFishDict = new Dictionary<int, BulbFishBehavior>();
		Dictionary<int, CrocodileBehavior> crocodileDict = new Dictionary<int, CrocodileBehavior>();
		Dictionary<int, TurtleBehavior> turtleDict = new Dictionary<int, TurtleBehavior>();
		Dictionary<int, Dragon2Behavior> dragon2Dict = new Dictionary<int, Dragon2Behavior>();

		//        private bool updateCondition = true;
		private Fish_BackgroundBehavior _bgBehavior;
		private Dictionary<int, GameObject> singleGroupPrefs = new Dictionary<int, GameObject>();

		private Fish_BackgroundBehavior bgBehavior
		{
			get
			{
				if (_bgBehavior == null)
					_bgBehavior = FindObjectOfType<Fish_BackgroundBehavior>();

				return _bgBehavior;
			}
		}
		public FishSfxController sfxController;
		public void Init(FishGameController gameController, List<TargetObject> tempFishList, List<GunInfo> gunInfoList, List<SeatInfo> seatList, double curGameTime, int playerId)
		{
			gvc = gameController;
			unspawnTarget = new List<TargetObject>();
			gunDict = new Dictionary<int, GunView>();
			userDict = new Dictionary<int, UserInfoView>();
			playerDict = new Dictionary<int, SeatInfo>();
			this.gunInfoList = gunInfoList;
			thisPlayerId = playerId;

			for (int i = 0; i < gunList.Length; i++) {
				gunList[i].Remove();
				userList[i].Remove();
			}

			Dictionary<int, SeatInfo> tempTypeDict = new Dictionary<int, SeatInfo>();
			for (int i = 0; i < seatList.Count; i++)
			{
				tempTypeDict.Add(seatList[i].seatId, seatList[i]);
			}

			singleGroupPrefs = new Dictionary<int, GameObject>();
			for (int i = 0; i < group1Pref.Length; i++)
			{
//				Debug.Log (" 1323 : "+group1Pref[i].name);
//								Debug.Log (" 1323 : "+group1Pref [i].GetComponentInChildren<FishBehavior> ().FishType);
				singleGroupPrefs.Add(group1Pref[i].GetComponentInChildren<FishBehavior>().FishType, group1Pref[i]);
			}

			//Init Gun List
			if (seatList != null && seatList.Count > 0)
			{
				for (int i = 0; i < seatList.Count; i++)
				{
					gunList[seatList[i].seatId - 1].Init(gunInfoList, -1, seatList[i]);
					gunDict.Add(seatList[i].seatId, gunList[seatList[i].seatId - 1]);

					userList[seatList[i].seatId - 1].InitPlayerInfo(seatList[i], false, rotateC);
					userDict.Add(seatList[i].seatId, userList[seatList[i].seatId - 1]);
					playerDict.Add(seatList[i].playerId, seatList[i]);
				}
			}

			//			groupList = new List<GroupBehavior>();
			//			tacoGroupList = new List<TacoGroupBehavior>();
			//			dragonGroupList = new List<DragonGroupBehavior>();
			//			crabGroupList = new List<CrabGroupBehavior>();
			//			bulbFishGroupList = new List<BulbFishGroupBehavior> ();
			//			crocodileGroupList = new List<CrocodileGroupBehavior> ();
			//			fishDict = new Dictionary<int, FishBehavior>();
			//			tacoDict = new Dictionary<int, TacoBehavior>();
			//			crabDict = new Dictionary<int, CrabBehavior>();
			//			dragonDict = new Dictionary<int, DragonBehavior>();
			//			bulbFishDict = new Dictionary<int, BulbFishBehavior>();
			//			crocodileDict = new Dictionary<int, CrocodileBehavior>();

			if (tempFishList != null && tempFishList.Count > 0)
			{
				SpawnAllFish(tempFishList, curGameTime);
			}
		}


		public GameObject ReturnPayoutText(int playerId)
		{
			if (thisPlayerId == playerId) {

				return payoutTextPrefab [0];
			} else {
				return payoutTextPrefab[1];
			}
		}
		public bool CheckIsPlayer(int playerId){
			if (thisPlayerId == playerId) {
				return true;
			} else {
				return false;
			}
		}


		void SpawnAllFish(List<TargetObject> targetObjectList, double curGameTime)
		{
			unspawnTarget.AddRange(targetObjectList);

			unspawnTarget.Sort(delegate(TargetObject a, TargetObject b)
				{
					return a.spawnTime.CompareTo(b.spawnTime);
				});

			CheckAndSpawnGroup(curGameTime);
		}

		private void CheckAndSpawnGroup(double currentTime)
		{
			while (unspawnTarget.Count > 0 && unspawnTarget[0].spawnTime <= currentTime)
			{
				//Debug.Log("Check Fish Type Before Spawn : " + unspawnTarget[0].targetInfo[0].targetType);

				if (unspawnTarget[0].groupId == 1)
				{
					int fishType = unspawnTarget[0].targetInfo[0].targetType;

//										Debug.Log (fishType);
					if (fishType < 100) {
						GameObject tempGroup = (GameObject)Instantiate (singleGroupPrefs [fishType]);
						GroupBehavior gb = tempGroup.GetComponent<GroupBehavior> ();

						gb.SpawnGroup (this, unspawnTarget [0], currentTime, rotateC);
						groupList.Add (gb);
					}
					else if (fishType == 101 || fishType == 301) {
						string path = unspawnTarget [0].pathId;
						int pathNum = int.Parse (path.Remove (0, 1));

						CrabGroupBehavior gb = crab [pathNum - 1].GetComponentInChildren<CrabGroupBehavior> ();
						gb.SpawnCrab (this, unspawnTarget [0], currentTime);
						crabGroupList.Add (gb);
					} else if (fishType == 102 || fishType == 302) {
						string path = unspawnTarget [0].pathId;
						int pathNum = int.Parse (path.Remove (0, 1));

						DragonGroupBehavior gb = dragon [pathNum - 1].GetComponentInChildren<DragonGroupBehavior> ();
						gb.SpawnDragon (this, unspawnTarget [0], currentTime);
						dragonGroupList.Add (gb);
					} else if (fishType == 103 || fishType == 303) {
						string path = unspawnTarget [0].pathId;
						int pathNum = int.Parse (path.Remove (0, 1));

						TacoGroupBehavior gb = taco [pathNum - 1].GetComponentInChildren<TacoGroupBehavior> ();
						gb.SpawnTaco (this, unspawnTarget [0], currentTime);
						tacoGroupList.Add (gb);
					} else if (fishType == 104 || fishType == 304) {
						string path = unspawnTarget [0].pathId;
						int pathNum = int.Parse (path.Remove (0, 1));

						BulbFishGroupBehavior gb = bulbFish [pathNum - 1].GetComponentInChildren<BulbFishGroupBehavior> ();
						gb.SpawnBulbFish (this, unspawnTarget [0], currentTime);
						bulbFishGroupList.Add (gb);

					} else if (fishType == 105 || fishType == 305) {
						string path = unspawnTarget [0].pathId;
						int pathNum = int.Parse (path.Remove (0, 1));
						CrocodileGroupBehavior gb = crocodile [pathNum - 1].GetComponent<CrocodileGroupBehavior> ();
						gb.SpawnCrocodile (this, unspawnTarget [0], currentTime);
						crocodileGroupList.Add (gb);
					} 
					else if (fishType == 106 ||fishType == 306) {
						string path = unspawnTarget [0].pathId;
						int pathNum = int.Parse (path.Remove (0, 1));
						TurtleGroupBehavior gb = turtle [pathNum - 1].GetComponent<TurtleGroupBehavior> ();
						gb.SpawnCrocodile (this, unspawnTarget [0], currentTime);
						turtleGroupList.Add (gb);
					}
					else if (fishType == 107||fishType == 307) {
						string path = unspawnTarget [0].pathId;
						int pathNum = int.Parse (path.Remove (0, 1));
						Dragon2GroupBehavior gb = dragon2 [pathNum - 1].GetComponent<Dragon2GroupBehavior> ();
						gb.SpawnDragon (this, unspawnTarget [0], currentTime);
						dragon2GroupList.Add (gb);
					}


					else if (fishType > 200)
					{
//						Debug.Log (fishType);
						GameObject tempGroup = (GameObject) Instantiate(swPref[fishType - 201]);
						GroupBehavior gb = tempGroup.GetComponent<GroupBehavior>();

						gb.SpawnGroup(this, unspawnTarget[0], currentTime, rotateC);
						groupList.Add(gb);
					}

					if (fishType == 105 || fishType == 104 || fishType == 103 || fishType == 101|| fishType == 102|| fishType == 107|| fishType == 106) {
						for (int i = 0; i < gunList.Length; i++) {
							gunList [i].CheckAndResetDragonSelected ();
						}
					}
				}
				else
				{
					GameObject tempGroup = (GameObject) Instantiate(groupPref[unspawnTarget[0].groupId - 2]);
					GroupBehavior gb = tempGroup.GetComponent<GroupBehavior>();

					gb.SpawnGroup(this, unspawnTarget[0], currentTime, rotateC);
					groupList.Add(gb);
				}

				unspawnTarget.RemoveAt(0);
			}
		}

		private bool rotateC = false;

		public void SitInSuccess(SeatInfo seatInfo, int playerSeat)
		{
			playerDict.Add(seatInfo.playerId, seatInfo);

			if (seatInfo.playerId == thisPlayerId)
			{
				if (seatInfo.seatId == 1 || seatInfo.seatId == 2)
				{
					gunList[seatInfo.seatId - 1].Init(gunInfoList, this, seatInfo);
					gunDict.Add(seatInfo.seatId, gunList[seatInfo.seatId - 1]);

					userList[seatInfo.seatId - 1].InitPlayerInfo(seatInfo, true, rotateC);
					userDict.Add(seatInfo.seatId, userList[seatInfo.seatId - 1]);
				}
				else
				{

					gameObject.transform.eulerAngles = new Vector3(0, 0, -180);
					seatHolder.transform.eulerAngles = new Vector3(0, 0, -180);
					rotateC = true;
					gunDict.Clear();
					userDict.Clear();

					foreach (UserInfoView uiv in userList)
						uiv.Reset();


					foreach (KeyValuePair<int, SeatInfo> playerInfo in playerDict)
					{
						if (playerInfo.Key != seatInfo.playerId)
						{
							gunList[playerInfo.Value.seatId - 1].Init(gunInfoList, seatInfo.seatId, playerInfo.Value);
							userList[playerInfo.Value.seatId - 1].InitPlayerInfo(playerInfo.Value, false, rotateC);
						}
						else
						{
							gunList[playerInfo.Value.seatId - 1].Init(gunInfoList, this, playerInfo.Value);
							userList[playerInfo.Value.seatId - 1].InitPlayerInfo(playerInfo.Value, true, rotateC);
						}

						gunDict.Add(playerInfo.Value.seatId, gunList[playerInfo.Value.seatId - 1]);
						userDict.Add(playerInfo.Value.seatId, userList[playerInfo.Value.seatId - 1]);
					}
				}
			}
			else
			{
				gunList[seatInfo.seatId - 1].Init(gunInfoList, seatInfo.seatId, seatInfo);
				gunDict.Add(seatInfo.seatId, gunList[seatInfo.seatId - 1]);

				userList[seatInfo.seatId - 1].InitPlayerInfo(seatInfo, false, rotateC);
				userDict.Add(seatInfo.seatId, userList[seatInfo.seatId - 1]);
			}
		}

		public void ShowTacoPayout(double winAmount, int playerId)
		{
			ShowBossPayout (winAmount, playerId, tacoWinBase,tacoPayoutTextPrefab);
		}
		public void ShowCrabPayout(double winAmount, int playerId)
		{
			ShowBossPayout (winAmount, playerId, crabWinBase,crabPayoutTextPrefab);
		}
		public void ShowBulbFishPayout(double winAmount, int playerId)
		{
			ShowBossPayout (winAmount, playerId, bulbFishWinBase,bulbFishPayoutTextPrefab);
		}
		public void ShowCrocodilePayout(double winAmount, int playerId)
		{
			ShowBossPayout (winAmount, playerId, crocodileWinBase,crocodilePayoutTextPrefab);
		}
		public void ShowDragonPayout(double winAmount, int playerId)
		{
			ShowBossPayout (winAmount, playerId, dragonWinBase,dragonPayoutTextPrefab);
		}
		public void ShowDragon2Payout(double winAmount, int playerId)
		{
			ShowBossPayout (winAmount, playerId, dragon2WinBase,dragon2PayoutTextPrefab);
		}
		public void ShowTurtlePayout(double winAmount, int playerId)
		{
			ShowBossPayout (winAmount, playerId, turtleWinBase,turtlePayoutTextPrefab);
		}

		public void ShowBossPayout(double winAmount, int playerId, GameObject[] winbase,GameObject payoutTextPrefab){
			if (!playerDict.ContainsKey(playerId))
				return;

			int seatId = playerDict[playerId].seatId - 1;
			GameObject payoutText = Instantiate(payoutTextPrefab);
			payoutText.transform.position = new Vector3(0f, 0f, 0f);
			payoutText.transform.localRotation = Quaternion.identity;
			payoutText.SetActive(true);
			Text payoutAmtText = payoutText.GetComponentInChildren<Text>();
			GameObject dragonSymbol = payoutText.transform.Find("Symbol").gameObject;

			winbase[seatId].SetActive(true);
			winbase[seatId].GetComponent<Image>().color = new Color(1f, 1f, 1f, 1f);

			LeanTween.value(winbase[seatId], 2, 1, 0.5f).setOnUpdate((float value) =>
				{
					winbase[seatId].transform.localScale = new Vector3(value, value, 1f);
				});


			LeanTween.value(dragonSymbol, 0f, 1f, 2f).setOnUpdate((float value) =>
				{
					dragonSymbol.GetComponent<SpriteRenderer>().color = new Color(1f, 1f, 1f, value);
				}).setOnComplete(() =>
					{
						Vector2 temp = new Vector2(winbase[seatId].transform.Find("CoinPosition").transform.position.x, winbase[seatId].transform.Find("CoinPosition").transform.position.y);
						LeanTween.move(dragonSymbol, temp, 1f).setOnComplete(() =>
							{
								LeanTween.delayedCall(dragonSymbol,1f,()=>{
									LeanTween.value(dragonSymbol, 1f, 0f, 1f).setOnUpdate((float value) =>
										{
											dragonSymbol.GetComponent<SpriteRenderer>().color = new Color(1f, 1f, 1f, value);
										}).setOnComplete(() =>
											{

												LeanTween.value(gameObject, 1f, 0f, 1f).setOnUpdate((float t) =>
													{
														winbase[seatId].GetComponent<Image>().color = new Color(1f, 1f, 1f, t);
													}).setOnComplete(() =>
														{
															winbase[seatId].SetActive(false);
															winbase[seatId].GetComponent<Image>().color = new Color(1f, 1f, 1f, 1f);
														});

												for (int i = 0; i < 5; i++)
												{
													GameObject _coin = CheckPlayerCoin(playerId);

													GameObject tempCoin = Instantiate(_coin);
													tempCoin.transform.localPosition = dragonSymbol.transform.position;
													tempCoin.transform.parent = this.gameObject.transform;

													LeanTween.delayedCall(gameObject, i*0.1f, () =>
														{
															LeanTween.moveY(tempCoin, userList[seatId].transform.position.y + 2, 0.3f).setOnComplete(() =>
																{
																	LeanTween.move(tempCoin, userList[seatId].transform.position, 0.3f).setOnComplete(() =>
																		{
																			Destroy(tempCoin);
																		});
																});
														});
												}
											});
								});

							});

						LeanTween.value(gameObject, 0f, 1f, 1f).setOnUpdate((float t) =>
							{
								payoutAmtText.text = (winAmount*t).ToString("###,###,###,##0");
							}).setOnComplete(() =>
								{
									payoutAmtText.text = winAmount.ToString("###,###,###,##0");
									Destroy(payoutText, 3f);
								});

					});
		}

		public GameObject CheckPlayerCoin(int playerId){

			if (playerId == thisPlayerId)
				return coin;

			return coin2;
		}
		public float GetSpawnPosition(int edge)
		{
			return edge%2 == 0 ? spawnPoint[edge].transform.localPosition.x : spawnPoint[edge].transform.localPosition.y;
		}

		public void CheckNextGun()
		{
			gvc.CheckNextGun();
		}


		public void UpdateBetAmount(int playerId, int betAmount)
		{
			if(gunDict.ContainsKey(playerDict[playerId].seatId))
				gunDict[playerDict[playerId].seatId].UpdateBetAmount(betAmount);
		}

		public void UpdatePlayerCredit(int playerId, double credit)
		{
			foreach (UserInfoView uiv in userList)
			{
				if (uiv.playerId == playerId) {
					uiv.UpdatePlayerCredit (credit);
				}
			}
		}

		public void PlayerChangeBetAmount(int changeValue)
		{
			gvc.PlayerChangeBetAmount(changeValue);
		}

		public void PlayerChangeWeapon()
		{
			gvc.PlayerChangeWeapon();
		}

		public void RoundUpdate(List<TargetObject> fishList, Game curGame)
		{
			ResetDict ();
			unspawnTarget = new List<TargetObject> ();
			if (fishList != null)
				SpawnAllFish(fishList, curGame.curGameTime);
			//UpdateLightningLock(-1);
		}

		public void ReceiveNextBatchFish(List<TargetObject> fishList, Game curGame)
		{
			if (fishList != null && fishList.Count > 0)
			{
				unspawnTarget.AddRange(fishList);

				unspawnTarget.Sort(delegate(TargetObject a, TargetObject b)
					{
						return a.spawnTime.CompareTo(b.spawnTime);
					});
			}
		}

		public void AddFish(int id, FishBehavior fish)
		{
			if (fishDict != null && !fishDict.ContainsKey(id))
				fishDict.Add(id, fish);
		}

		public void AddDragon(int id, DragonBehavior db)
		{
			if (dragonDict != null && !dragonDict.ContainsKey(id))
				dragonDict.Add(id, db);
		}

		public void AddCrab(int id, CrabBehavior cb)
		{
			if (crabDict != null && !crabDict.ContainsKey(id))
				crabDict.Add(id, cb);
		}

		public void AddTaco(int id, TacoBehavior tb)
		{
			if (tacoDict != null && !tacoDict.ContainsKey(id))
				tacoDict.Add(id, tb);
		}

		public void AddBulbFish(int id, BulbFishBehavior tb)
		{
			if (bulbFishDict != null && !bulbFishDict.ContainsKey(id))
				bulbFishDict.Add(id, tb);
		}

		public void AddCrocodile(int id, CrocodileBehavior tb)
		{
			if (crocodileDict != null && !crocodileDict.ContainsKey(id))
				crocodileDict.Add(id, tb);
		}

		public void AddDragon2(int id, Dragon2Behavior boss)
		{
			if (dragon2Dict != null && !dragon2Dict.ContainsKey(id))
				dragon2Dict.Add(id, boss);
		}
		public void AddTurtle(int id, TurtleBehavior boss)
		{
			if (turtleDict != null && !turtleDict.ContainsKey(id))
				turtleDict.Add(id, boss);
		}

		public void ResetDict()
		{
			fishDict = new Dictionary<int, FishBehavior>();
			dragonDict = new Dictionary<int, DragonBehavior>();
			crabDict = new Dictionary<int, CrabBehavior>();
			tacoDict = new Dictionary<int, TacoBehavior>();
			bulbFishDict = new Dictionary<int, BulbFishBehavior>();
			crocodileDict = new Dictionary<int, CrocodileBehavior>();
			turtleDict = new Dictionary<int, TurtleBehavior> ();
			dragon2Dict = new Dictionary<int, Dragon2Behavior> ();

			if (gunDict != null)
			{
				foreach (GunView gun in gunDict.Values)
				{
					gun.DisposeBullet();
				}
			}

			//UpdateLightningLock(-1);
		}


		public void OnDragonDeath(int playerId, TargetObject.TargetInfo deathInfo)
		{
			if (dragonDict.ContainsKey(deathInfo.targetId))
			{
				dragonDict[deathInfo.targetId].Death(playerId, deathInfo);
				dragonDict.Remove(deathInfo.targetId);
			}
		}

		public void OnCrabDeath(int playerId, TargetObject.TargetInfo deathInfo)
		{
			if (crabDict.ContainsKey(deathInfo.targetId))
			{
				crabDict[deathInfo.targetId].Death(playerId, deathInfo);
				crabDict.Remove(deathInfo.targetId);
			}
		}

		public void OnTacoDeath(int playerId, TargetObject.TargetInfo deathInfo)
		{
			if (tacoDict.ContainsKey(deathInfo.targetId))
			{
				tacoDict[deathInfo.targetId].Death(playerId, deathInfo);
				tacoDict.Remove(deathInfo.targetId);
			}
		}

		public void OnBulbFishDeath(int playerId, TargetObject.TargetInfo deathInfo)
		{
			if (bulbFishDict.ContainsKey(deathInfo.targetId))
			{
				bulbFishDict[deathInfo.targetId].Death(playerId, deathInfo);
				bulbFishDict.Remove(deathInfo.targetId);
			}
		}

		public void OnCrocodileDeath(int playerId, TargetObject.TargetInfo deathInfo)
		{
			if (crocodileDict.ContainsKey(deathInfo.targetId))
			{
				crocodileDict[deathInfo.targetId].Death(playerId, deathInfo);
				crocodileDict.Remove(deathInfo.targetId);
			}
		}

		public void RemoveGroup(GroupBehavior gb)
		{
			if (groupList.Contains(gb))
			{
				groupList.Remove(gb);
				Destroy(gb.gameObject);
			}
		}

		public void RemoveDragonGroup(DragonGroupBehavior dgb)
		{
			if (dragonGroupList.Contains(dgb))
				dragonGroupList.Remove(dgb);
		}

		public void RemoveCrabGroup(CrabGroupBehavior cgb)
		{
			if (crabGroupList.Contains(cgb))
				crabGroupList.Remove(cgb);
		}

		public void RemoveTacoGroup(TacoGroupBehavior tgb)
		{
			if(tacoGroupList.Contains(tgb))
				tacoGroupList.Remove(tgb);
		}

		public void RemoveBulbFishGroup(BulbFishGroupBehavior bfgb)
		{
			if(bulbFishGroupList.Contains(bfgb))
				bulbFishGroupList.Remove(bfgb);
		}

		public void RemoveCrocodileGroup(CrocodileGroupBehavior cgb)
		{
			if(crocodileGroupList.Contains(cgb))
				crocodileGroupList.Remove(cgb);
		}

		public void RemoveGroup(Dragon2GroupBehavior group){
			if(dragon2GroupList.Contains(group))
				dragon2GroupList.Remove(group);
		}
		public void RemoveGroup(TurtleGroupBehavior group){
			if(turtleGroupList.Contains(group))
				turtleGroupList.Remove(group);
		}
		//		public void OnFinishSpecialFish(int playerId,int total){
		//			gunDict [playerDict [playerId].seatId].OnFinishSpecialFish (total);
		//		}
		public GameObject[] specialEffectMain;
		public GameObject _specialobj;
		public void OnFishStatusUpdate(int playerId, int weaponId, double credit, TargetObject.TargetInfo[] fishStatusList)
		{
			if (!gunDict.ContainsKey(playerDict[playerId].seatId))
				return;

			if (playerId != thisPlayerId && weaponId == 3)
			{
				gunDict[playerDict[playerId].seatId].OtherPlayerLightning(fishStatusList[0].targetId);
			}

			//			Debug.Log (fishStatusList [0].specialParam.AsArray [0].AsInt == 7);
			if (fishStatusList.Length > 0 && fishStatusList [0].specialParam.AsArray.Count > 0) {
				if (weaponId == 7 || fishStatusList [0].specialParam.AsArray [0].AsInt == 7 || weaponId == 8 || fishStatusList [0].specialParam.AsArray [0].AsInt == 8) {
					//				Debug.Log ("Weapon Id : 7 : " +fishStatusList);
					List <TargetObject.TargetInfo> _temp = new List<TargetObject.TargetInfo> ();

					for (int i = 0; i < fishStatusList.Length; i++) {
						if (fishDict.ContainsKey (fishStatusList [i].targetId) && !fishStatusList [i].isAlive && fishStatusList [i].payout > 0) {
							_temp.Add (fishStatusList [i]);
						}
					}

					if (_specialobj == null && _temp.Count > 0) {
						if (weaponId == 7 || fishStatusList [0].specialParam.AsArray [0].AsInt == 7) {
							gunDict [playerDict [playerId].seatId].OnInSpecialFish ();
							_specialobj = Instantiate (specialEffectMain [0], gameObject.transform.parent) as GameObject;
						} else if (weaponId == 8 || fishStatusList [0].specialParam.AsArray [0].AsInt == 8) {
							gunDict [playerDict [playerId].seatId].OnInSpecialFish2 ();
							_specialobj = Instantiate (specialEffectMain [1], gameObject.transform.parent) as GameObject;
						}
						for (int i = 0; i < _temp.Count; i++) {
							fishDict [_temp [i].targetId].StoreDeathInfo (playerId, fishStatusList [i]);
							_specialobj.GetComponent<SpecialFishBehavior> ().fishPosList.Add (fishDict [_temp [i].targetId].gameObject.transform.position);
							_specialobj.GetComponent<SpecialFishBehavior> ().fishTypeList.Add (fishDict [_temp [i].targetId].FishType);
							_specialobj.GetComponent<SpecialFishBehavior> ().fishPayout.Add ((int)_temp [i].payout);

							if (fishStatusList [0].specialParam.AsArray [0].AsInt == 7) {
								FishSfxController sfxController = FindObjectOfType<FishSfxController> ();
								if (sfxController != null && playerId == thisPlayerId) {
									sfxController.PlayFish ();
									sfxController.PlayCoin ();
									sfxController.PlayMove ();
								}
								if (fishDict [fishStatusList [i].targetId] != null)
									fishDict [fishStatusList [i].targetId].Death (playerId, fishStatusList [i]);
							} else if (fishStatusList [0].specialParam.AsArray [0].AsInt == 8) {
								FishSfxController sfxController = FindObjectOfType<FishSfxController> ();
								if (sfxController != null && playerId == thisPlayerId) {
									sfxController.PlayFish ();
									sfxController.PlayCoin ();
									sfxController.PlayMove ();
								}
								if (fishDict [fishStatusList [i].targetId] != null)
									fishDict [fishStatusList [i].targetId].Death (playerId, fishStatusList [i]);
							}

							fishDict.Remove (_temp [i].targetId);
						}
						_specialobj.GetComponent<SpecialFishBehavior> ().gv = gunDict [playerDict [playerId].seatId];
						_specialobj.GetComponent<SpecialFishBehavior> ().pv = this;
						_specialobj.GetComponent<SpecialFishBehavior> ().isPlayer = (playerId == thisPlayerId);
						_specialobj.GetComponent<SpecialFishBehavior> ().gunPos = gunDict [playerDict [playerId].seatId].lightingPos.transform.position;
						_specialobj.GetComponent<SpecialFishBehavior> ().coinPos = userList [playerDict [playerId].seatId - 1].transform.position;
						_specialobj.GetComponent<SpecialFishBehavior> ().coin = CheckPlayerCoin(playerId);

						_specialobj.GetComponent<SpecialFishBehavior> ().AnimateFish ();

					} else if (_specialobj != null) {
						for (int i = 0; i < _temp.Count; i++) {
							fishDict [_temp [i].targetId].StoreDeathInfo (playerId, fishStatusList [i]);
							_specialobj.GetComponent<SpecialFishBehavior> ().fishPosList.Add (fishDict [_temp [i].targetId].gameObject.transform.position);
							_specialobj.GetComponent<SpecialFishBehavior> ().fishTypeList.Add (fishDict [_temp [i].targetId].FishType);
							_specialobj.GetComponent<SpecialFishBehavior> ().fishPayout.Add ((int)_temp [i].payout);
							fishDict.Remove (_temp [i].targetId);
						}
						_specialobj.GetComponent<SpecialFishBehavior> ().gv = gunDict [playerDict [playerId].seatId];
						_specialobj.GetComponent<SpecialFishBehavior> ().pv = this;
						_specialobj.GetComponent<SpecialFishBehavior> ().isPlayer = (playerId == thisPlayerId);
						_specialobj.GetComponent<SpecialFishBehavior> ().gunPos = gunDict [playerDict [playerId].seatId].lightingPos.transform.position;
						_specialobj.GetComponent<SpecialFishBehavior> ().coinPos = userList [playerDict [playerId].seatId - 1].transform.position;
						_specialobj.GetComponent<SpecialFishBehavior> ().coin = CheckPlayerCoin(playerId);

						_specialobj.GetComponent<SpecialFishBehavior> ().AnimateFish ();
					}

					return;
				}
			}
			for (int i = 0; i < fishStatusList.Length; i++)
			{
				if (fishDict.ContainsKey(fishStatusList[i].targetId) && !fishStatusList[i].isAlive)
				{
//					sfxController = FindObjectOfType<FishSfxController>();
					if (sfxController != null && playerId == thisPlayerId) {
						sfxController.PlayFish ();
						sfxController.PlayCoin ();
						sfxController.PlayMove ();
					}
					gunDict [playerDict [playerId].seatId].AddFreeWeaponWin (fishStatusList [i].payout);
//					Debug.Log (weaponId);
					if (weaponId >= 100) {
						gunDict [playerDict [playerId].seatId].AddPowerUpWin (fishStatusList [i].payout);
					}else if (weaponId >= 4) {
						gunDict [playerDict [playerId].seatId].AddSuperWin (fishStatusList [i].payout);
					}

					if(fishDict[fishStatusList[i].targetId] != null)
						fishDict[fishStatusList[i].targetId].Death(playerId, fishStatusList[i]);

					fishDict.Remove(fishStatusList[i].targetId);
				}

				if (tacoDict.ContainsKey(fishStatusList[i].targetId) && !fishStatusList[i].isAlive)
				{
//					FishSfxController sfxController = FindObjectOfType<FishSfxController>();
					if (sfxController != null && playerId == thisPlayerId) {
						sfxController.PlayBoss ();
						sfxController.PlayCoin ();
						sfxController.PlayMove ();
					}
					gunDict [playerDict [playerId].seatId].AddFreeWeaponWin (fishStatusList [i].payout);
					if (weaponId >= 100) {
						gunDict [playerDict [playerId].seatId].AddPowerUpWin (fishStatusList [i].payout);
					}else if (weaponId >= 4) {
						gunDict [playerDict [playerId].seatId].AddSuperWin (fishStatusList [i].payout);
					}
					if (tacoDict[fishStatusList[i].targetId] != null)
						tacoDict[fishStatusList[i].targetId].Death(playerId, fishStatusList[i]);
					tacoDict.Remove(fishStatusList[i].targetId);
				}

				if (crabDict.ContainsKey(fishStatusList[i].targetId) && !fishStatusList[i].isAlive)
				{
//					FishSfxController sfxController = FindObjectOfType<FishSfxController>();
					if (sfxController != null && playerId == thisPlayerId){
						sfxController.PlayBoss ();
						sfxController.PlayCoin ();
						sfxController.PlayMove ();
					}
					gunDict [playerDict [playerId].seatId].AddFreeWeaponWin (fishStatusList [i].payout);
					if (weaponId >= 100) {
						gunDict [playerDict [playerId].seatId].AddPowerUpWin (fishStatusList [i].payout);
					}else if (weaponId >= 4) {
						gunDict [playerDict [playerId].seatId].AddSuperWin (fishStatusList [i].payout);
					}
					if (crabDict[fishStatusList[i].targetId] != null)
						crabDict[fishStatusList[i].targetId].Death(playerId, fishStatusList[i]);
					crabDict.Remove(fishStatusList[i].targetId);
				}

				if (dragonDict.ContainsKey(fishStatusList[i].targetId) && !fishStatusList[i].isAlive)
				{
//					FishSfxController sfxController = FindObjectOfType<FishSfxController>();
					if (sfxController != null && playerId == thisPlayerId){
						sfxController.PlayBoss ();
						sfxController.PlayCoin ();
						sfxController.PlayMove ();
					}
					gunDict [playerDict [playerId].seatId].AddFreeWeaponWin (fishStatusList [i].payout);
					if (weaponId >= 100) {
						gunDict [playerDict [playerId].seatId].AddPowerUpWin (fishStatusList [i].payout);
					}else if (weaponId >= 4) {
						gunDict [playerDict [playerId].seatId].AddSuperWin (fishStatusList [i].payout);
					}
					if (dragonDict[fishStatusList[i].targetId] != null)
						dragonDict[fishStatusList[i].targetId].Death(playerId, fishStatusList[i]);
					dragonDict.Remove(fishStatusList[i].targetId);
				}

				if (bulbFishDict.ContainsKey(fishStatusList[i].targetId) && !fishStatusList[i].isAlive)
				{
//					FishSfxController sfxController = FindObjectOfType<FishSfxController>();
					if (sfxController != null && playerId == thisPlayerId){
						sfxController.PlayBoss ();
						sfxController.PlayCoin ();
						sfxController.PlayMove ();
					}
					gunDict [playerDict [playerId].seatId].AddFreeWeaponWin (fishStatusList [i].payout);
					if (weaponId >= 100) {
						gunDict [playerDict [playerId].seatId].AddPowerUpWin (fishStatusList [i].payout);
					}else if (weaponId >= 4) {
						gunDict [playerDict [playerId].seatId].AddSuperWin (fishStatusList [i].payout);
					}
					if (bulbFishDict[fishStatusList[i].targetId] != null)
						bulbFishDict[fishStatusList[i].targetId].Death(playerId, fishStatusList[i]);
					bulbFishDict.Remove(fishStatusList[i].targetId);
				}

				if (crocodileDict.ContainsKey(fishStatusList[i].targetId) && !fishStatusList[i].isAlive)
				{
//					FishSfxController sfxController = FindObjectOfType<FishSfxController>();
					if (sfxController != null && playerId == thisPlayerId){
						sfxController.PlayBoss ();
						sfxController.PlayCoin ();
						sfxController.PlayMove ();
					}
					gunDict [playerDict [playerId].seatId].AddFreeWeaponWin (fishStatusList [i].payout);
					if (weaponId >= 100) {
						gunDict [playerDict [playerId].seatId].AddPowerUpWin (fishStatusList [i].payout);
					}else if (weaponId >= 4) {
						gunDict [playerDict [playerId].seatId].AddSuperWin (fishStatusList [i].payout);
					}
					if (crocodileDict[fishStatusList[i].targetId] != null)
						crocodileDict[fishStatusList[i].targetId].Death(playerId, fishStatusList[i]);
					crocodileDict.Remove(fishStatusList[i].targetId);
				}

				if (dragon2Dict.ContainsKey(fishStatusList[i].targetId) && !fishStatusList[i].isAlive)
				{
//					FishSfxController sfxController = FindObjectOfType<FishSfxController>();
					if (sfxController != null && playerId == thisPlayerId){
						sfxController.PlayBoss ();
						sfxController.PlayCoin ();
						sfxController.PlayMove ();
					}
					gunDict [playerDict [playerId].seatId].AddFreeWeaponWin (fishStatusList [i].payout);
					if (weaponId >= 100) {
						gunDict [playerDict [playerId].seatId].AddPowerUpWin (fishStatusList [i].payout);
					}else if (weaponId >= 4) {
						gunDict [playerDict [playerId].seatId].AddSuperWin (fishStatusList [i].payout);
					}
					if (dragon2Dict[fishStatusList[i].targetId] != null)
						dragon2Dict[fishStatusList[i].targetId].Death(playerId, fishStatusList[i]);
					dragon2Dict.Remove(fishStatusList[i].targetId);
				}

				if (turtleDict.ContainsKey(fishStatusList[i].targetId) && !fishStatusList[i].isAlive)
				{
//					FishSfxController sfxController = FindObjectOfType<FishSfxController>();
					if (sfxController != null && playerId == thisPlayerId){
						sfxController.PlayBoss ();
						sfxController.PlayCoin ();
						sfxController.PlayMove ();
					}
					gunDict [playerDict [playerId].seatId].AddFreeWeaponWin (fishStatusList [i].payout);
					if (weaponId >= 100) {
						gunDict [playerDict [playerId].seatId].AddPowerUpWin (fishStatusList [i].payout);
					}else if (weaponId >= 4) {
						gunDict [playerDict [playerId].seatId].AddSuperWin (fishStatusList [i].payout);
					}
					if (turtleDict[fishStatusList[i].targetId] != null)
						turtleDict[fishStatusList[i].targetId].Death(playerId, fishStatusList[i]);
					turtleDict.Remove(fishStatusList[i].targetId);
				}
			}
		}

		public void UpdateAllGroup(double curGameTime)
		{
			CheckAndSpawnGroup(curGameTime);

			if (groupList != null)
			{

				List<GroupBehavior> deathGroupList = new List<GroupBehavior>();
				foreach (GroupBehavior gb in groupList)
				{
					if (gb.SwimGroup(curGameTime))
						deathGroupList.Add(gb);
				}

				while (deathGroupList.Count > 0)
				{
					RemoveGroup(deathGroupList[0]);
					deathGroupList.RemoveAt(0);
				}
			}

			if (dragonGroupList != null)
			{
				foreach (DragonGroupBehavior gb in dragonGroupList.ToArray())
					gb.SwimGroup(curGameTime);
			}

			if (crabGroupList != null)
			{
				foreach (CrabGroupBehavior gb in crabGroupList.ToArray())
					gb.SwimGroup(curGameTime);
			}

			if (tacoGroupList != null)
			{
				foreach (TacoGroupBehavior gb in tacoGroupList.ToArray())
					gb.SwimGroup(curGameTime);
			}

			if (bulbFishGroupList != null)
			{
				foreach (BulbFishGroupBehavior gb in bulbFishGroupList.ToArray())
					gb.SwimGroup(curGameTime);
			}

			if (crocodileGroupList != null)
			{
				foreach (CrocodileGroupBehavior gb in crocodileGroupList.ToArray())
					gb.SwimGroup(curGameTime);
			}

			if (turtleGroupList != null)
			{
				foreach (TurtleGroupBehavior gb in turtleGroupList.ToArray())
					gb.SwimGroup(curGameTime);
			}

			if (dragon2GroupList != null)
			{
				foreach (Dragon2GroupBehavior gb in dragon2GroupList.ToArray())
					gb.SwimGroup(curGameTime);
			}
		}

		public void EndGameGroup()
		{

			if (groupList != null)
			{
				foreach (GroupBehavior gb in groupList)
				{
					if (gb != null)
					{
						gb.SpeedUpGroupPosition();
					}
				}

			}

			if (dragonGroupList != null)
			{

				foreach (DragonGroupBehavior gb in dragonGroupList.ToArray())
				{
					if (gb != null)
					{
						gb.SpeedUpGroupPosition();
					}
				}
			}

			if (crabGroupList != null)
			{
				foreach (CrabGroupBehavior gb in crabGroupList.ToArray())
				{
					if (gb != null)
					{
						gb.SpeedUpGroupPosition();
					}
				}
			}

			if (tacoGroupList != null)
			{
				foreach (TacoGroupBehavior gb in tacoGroupList.ToArray())
				{
					if (gb != null)
					{
						gb.SpeedUpGroupPosition();
					}
				}
			}

			if (bulbFishGroupList != null)
			{
				foreach (BulbFishGroupBehavior gb in bulbFishGroupList.ToArray())
				{
					if (gb != null)
					{
						gb.SpeedUpGroupPosition();
					}
				}
			}

			if (crocodileGroupList != null)
			{
				foreach (CrocodileGroupBehavior gb in crocodileGroupList.ToArray())
				{
					if (gb != null)
					{
						gb.SpeedUpGroupPosition();
					}
				}
			}

			if (dragon2GroupList != null)
			{
				foreach (Dragon2GroupBehavior gb in dragon2GroupList.ToArray())
				{
					if (gb != null)
					{
						gb.SpeedUpGroupPosition();
					}
				}
			}
			if (turtleGroupList != null)
			{
				foreach (TurtleGroupBehavior gb in turtleGroupList.ToArray())
				{
					if (gb != null)
					{
						gb.SpeedUpGroupPosition();
					}
				}
			}
			for (int i = 0; i < gunList.Length; i++) {
				gunList [i].ResetAllSelected ();
			}
		}

		public Fish_GameAreaBehavior gameArea;
		public void CleanPool()
		{
			gameArea.ResetType();
			bgBehavior.ChangeBackground();
			groupList.Clear();
			tacoGroupList.Clear();
			dragonGroupList.Clear();
			crabGroupList.Clear();
			bulbFishGroupList.Clear ();
			crocodileGroupList.Clear ();
			turtleGroupList.Clear ();
			dragon2GroupList.Clear ();
			//UpdateLightningLock(-1);
		}

		public void UpdateHitedFishes(int[] fishes, int weaponType, long shootId)
		{
			gvc.UpdateHitedFishes(fishes, weaponType, shootId);
		}

		public void UpdateOwnGunMove(GunMove gunMove)
		{
			gvc.UpdateOwnGunMove(gunMove);
		}

		public void UpdateOwnGunShoot(GunShoot gunShoot)
		{
			gvc.UpdateOwnGunShoot(gunShoot);
		}

		public void UpdateOwnGunType(GunTypeChanged gunChanged)
		{
			gvc.UpdateOwnGunType(gunChanged);
		}

		public void UpdateAllGunMove(GunMove gunMove)
		{
			if (gunDict.ContainsKey(gunMove.gunSeatNum))
				gunDict[gunMove.gunSeatNum].UpdateThisGunPosition(gunMove);
		}

		public void UpdateAllGunShoot(GunShoot gunShoot)
		{
			if (gunShoot.playerId != thisPlayerId)
			{
				if (playerDict.ContainsKey(gunShoot.playerId))
				{
					if (gunDict.ContainsKey(playerDict[gunShoot.playerId].seatId))
						gunDict[playerDict[gunShoot.playerId].seatId].ThisGunFireBullet(gunShoot);
				}
			}
			else
			{
				ReceiveOwnGunShoot(gunShoot);
			}
		}

		public void UpdateLightningLock(int value)
		{
			if (playerDict.ContainsKey(thisPlayerId))
			{
				if (gunDict.ContainsKey(playerDict[thisPlayerId].seatId))
					gunDict[playerDict[thisPlayerId].seatId].UpdateSelectedFishType(value);
			}
		}

		public void UpdateAllGunType(GunTypeChanged gunChanged)
		{
			if (playerDict.ContainsKey(gunChanged.playerId))
			{
				if (gunDict.ContainsKey(playerDict[gunChanged.playerId].seatId))
					gunDict[playerDict[gunChanged.playerId].seatId].UpdateThisGunType(gunChanged);
			}
		}

		public void ReceiveOwnGunShoot(GunShoot gunShoot)
		{
			if (playerDict.ContainsKey(gunShoot.playerId))
			{
				if (gunDict.ContainsKey(playerDict[gunShoot.playerId].seatId))
					gunDict[playerDict[gunShoot.playerId].seatId].PressFireButton(gunShoot);
			}
		}

		public GunView GetGunView(int playerId)
		{
			if (gunDict.ContainsKey(playerDict[playerId].seatId))
				return gunDict[playerDict[playerId].seatId];

			return null;
		}

		public int ThisPlayerId
		{
			get { return thisPlayerId; }
		}

		public void OnReceiveTablePlayerLeave(int playerId, int seatId, int status)
		{
			if (seatId <= 0)
				return;

			gunList[seatId - 1].Remove();

			if(gunDict.ContainsKey(seatId))
				gunDict.Remove(seatId);

			userList[seatId - 1].Remove();
			if (userDict.ContainsKey(seatId))
				userDict.Remove(seatId);

			if (playerDict.ContainsKey(playerId))
				playerDict.Remove(playerId);
		}

		public void PlayerShootStatus(bool condition)
		{
			if (gunDict != null)
			{
				foreach (GunView gun in gunDict.Values)
				{
					gun.ShootLocked = condition;
				}
			}
		}
	}
}
