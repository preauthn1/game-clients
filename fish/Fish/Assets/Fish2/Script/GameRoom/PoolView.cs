using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using UnityEngine.UI;

namespace P8Games.MicroFish
{
    public class PoolView : MonoBehaviour
    {
        public RouteCollection rc;
		public FishSfxController sfxController;
		public Fish_BottomFeaturesController sideMenuBar;
        public GameObject seatHolder;
        public GameObject fishHolder;
        public GameObject[] payoutTextPrefab;
		public GameObject payoutTextPrefab1;
		public GameObject payoutTextPrefab2;

        [SerializeField] public GunView[] gunList = null;
        [SerializeField] public UserInfoView[] userList = null;
        [Space(10)] public GameObject[] spawnPoint;
        [SerializeField] public GameObject[] groupPref = null;
        [SerializeField] public GameObject[] group1Pref = null;
        [SerializeField] public GameObject[] swPref = null;


        [Header("Effect")] 
		public GameObject coinExplosive;
		public GameObject myCoinExplosive;
		public GameObject[] coinsExplosive;
        public GameObject coin;
		public GameObject mycoin;
		public GameObject[] coinsPrefab;

        [Header("Dragon")] public GameObject[] dragon;
        public GameObject dragonPayoutTextPrefab;
        public GameObject[] dragonWinBase;

		[Header("Normal")] public GameObject[] crab;
        public GameObject crabPayoutTextPrefab;
        public GameObject[] crabWinBase;

        [Header("Special")] public GameObject[] taco;
        public GameObject tacoPayoutTextPrefab;
        public GameObject[] tacoWinBase;

		[Header("LikuFish")] public GameObject[] bulbFish;
		public GameObject bulbFishPayoutTextPrefab;
		public GameObject[] bulbFishWinBase;

		[Header("KoiFish")] public GameObject[] crocodile;
		public GameObject crocodilePayoutTextPrefab;
		public GameObject[] crocodileWinBase;

        private FishGameController gvc;
		List<GunInfo> gunInfoList = new List<GunInfo>();

		List<TargetObject> unspawnTarget = new List<TargetObject>();
		List<GroupBehavior> groupList = new List<GroupBehavior>();
		List<DragonGroupBehavior> dragonGroupList = new List<DragonGroupBehavior>();
		List<CrabGroupBehavior> crabGroupList = new List<CrabGroupBehavior>();
		List<TacoGroupBehavior> tacoGroupList= new List<TacoGroupBehavior>();
		List<BulbFishGroupBehavior> bulbFishGroupList= new List<BulbFishGroupBehavior>();
		List<CrocodileGroupBehavior> crocodileGroupList= new List<CrocodileGroupBehavior>();

		Dictionary<int, GunView> gunDict= new Dictionary<int, GunView>();
		public Dictionary<int, UserInfoView> userDict= new Dictionary<int, UserInfoView>();
		public Dictionary<int, SeatInfo> playerDict = new Dictionary<int, SeatInfo>();
        int thisPlayerId;

		Dictionary<int, FishBehavior> fishDict = new Dictionary<int, FishBehavior>();
		Dictionary<int, DragonBehavior> dragonDict = new Dictionary<int, DragonBehavior>();
		Dictionary<int, BulbFishBehavior> bulbFishDict = new Dictionary<int, BulbFishBehavior>();
		Dictionary<int, CrocodileBehavior> crocodileDict = new Dictionary<int, CrocodileBehavior>();

//        private bool updateCondition = true;
        private Fish_BackgroundBehavior _bgBehavior;
		private Dictionary<int, GameObject> singleGroupPrefs = new Dictionary<int, GameObject>();

		public GameObject[] bigWinEffect;
		public Text[] bigWinText;
        private Fish_BackgroundBehavior bgBehavior
        {
            get
            {
                if (_bgBehavior == null)
                    _bgBehavior = FindObjectOfType<Fish_BackgroundBehavior>();

                return _bgBehavior;
            }
        }

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


        public GameObject ReturnPayoutText(int seatId)
        {
			return payoutTextPrefab[seatId];
        }
		public GameObject ReturnCoin(int seatId)
		{
			return coinsPrefab[seatId];
		}
		public GameObject BurstCoin(int seatId){
			return coinsExplosive[seatId];
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

					if (fishType < 100 && fishType != 18) {
//						Debug.Log ("Check And SpawnGroup : " + fishType);
						GameObject tempGroup = (GameObject)Instantiate (singleGroupPrefs [fishType]);
						GroupBehavior gb = tempGroup.GetComponent<GroupBehavior> ();

						gb.SpawnGroup (this, unspawnTarget [0], currentTime, rotateC);
						groupList.Add (gb);
					}
					else if (fishType == 105) {
						string path = unspawnTarget [0].pathId;
						int pathNum = int.Parse (path.Remove (0, 1));

						CrabGroupBehavior gb = crab [pathNum - 1].GetComponentInChildren<CrabGroupBehavior> ();
						gb.SpawnCrab (this, unspawnTarget [0], currentTime);
						crabGroupList.Add (gb);
					} else if (fishType == 18) {

//						Debug.LogWarning ("fishType : " + unspawnTarget [0].pathId);
//						string path = unspawnTarget [0].pathId;
//						int pathNum = int.Parse (path.Remove (0, 1));
//						Debug.LogWarning ("fishType : " + pathNum);

						RouteCollection.Path path = rc.GetPath(unspawnTarget [0].pathId);
						Vector3 startPosition = path.start;
						Vector3 endPosition = path.end;

						int pathNum = endPosition.x - startPosition.x > 0f ? 2 : 1;

						DragonGroupBehavior gb = dragon [pathNum - 1].GetComponent<DragonGroupBehavior> ();
						gb.SpawnDragon (this, unspawnTarget [0], currentTime);
						dragonGroupList.Add (gb);
					} else if (fishType == 103) {
						string path = unspawnTarget [0].pathId;
						int pathNum = int.Parse (path.Remove (0, 1));

						TacoGroupBehavior gb = taco [pathNum - 1].GetComponentInChildren<TacoGroupBehavior> ();
						gb.SpawnTaco (this, unspawnTarget [0], currentTime);
						tacoGroupList.Add (gb);
					} else if (fishType == 102) {
						string path = unspawnTarget [0].pathId;
						int pathNum = int.Parse (path.Remove (0, 1));

						BulbFishGroupBehavior gb = bulbFish [pathNum - 1].GetComponentInChildren<BulbFishGroupBehavior> ();
						gb.SpawnBulbFish (this, unspawnTarget [0], currentTime);
						bulbFishGroupList.Add (gb);

					} else if (fishType == 101) {
						string path = unspawnTarget [0].pathId;
						int pathNum = int.Parse (path.Remove (0, 1));
						CrocodileGroupBehavior gb = crocodile [pathNum - 1].GetComponent<CrocodileGroupBehavior> ();
						gb.SpawnCrocodile (this, unspawnTarget [0], currentTime);
						crocodileGroupList.Add (gb);
					}
                    else if (fishType > 200)
                    {
//						Debug.Log ("Spawn Super Weapon Type : " +fishType);
                        GameObject tempGroup = (GameObject) Instantiate(swPref[fishType - 201]);
                        GroupBehavior gb = tempGroup.GetComponent<GroupBehavior>();

                        gb.SpawnGroup(this, unspawnTarget[0], currentTime, rotateC);
                        groupList.Add(gb);
                    }

					if (fishType == 105 || fishType == 104 || fishType == 103 || fishType == 101) {
						for (int i = 0; i < gunList.Length; i++) {
							gunList [i].CheckAndResetDragonSelected ();
						}
					}
                }
                else
                {
//					Debug.Log (" Spawn Group Id : " +unspawnTarget [0].groupId);
					int index = unspawnTarget [0].groupId - 2;
					if (unspawnTarget [0].groupId > 20) {
						index = (unspawnTarget [0].groupId - 21) + 5;
						//titleObj
						bgBehavior.showTitle(1);
					}

					GameObject tempGroup = (GameObject) Instantiate(groupPref[index]);
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
				payoutTextPrefab [seatInfo.seatId - 1] = payoutTextPrefab1;
				coinsPrefab [seatInfo.seatId - 1] = mycoin; 
				coinsExplosive [seatInfo.seatId - 1] = myCoinExplosive;
                if (seatInfo.seatId == 1 || seatInfo.seatId == 2)
                {
					gameObject.transform.eulerAngles = new Vector3(0.005f, 0, 0);
					seatHolder.transform.eulerAngles = new Vector3(0.005f, 0, 0);

                    gunList[seatInfo.seatId - 1].Init(gunInfoList, this, seatInfo);
                    gunDict.Add(seatInfo.seatId, gunList[seatInfo.seatId - 1]);
					rotateC = false;
                    userList[seatInfo.seatId - 1].InitPlayerInfo(seatInfo, true, rotateC);
                    userDict.Add(seatInfo.seatId, userList[seatInfo.seatId - 1]);

					userList[0].CheckIsRotate(rotateC);
					userList[1].CheckIsRotate(rotateC);
                }
                else
                {

					gameObject.transform.eulerAngles = new Vector3(0.005f, 0, -180);
					seatHolder.transform.eulerAngles = new Vector3(0.005f, 0, -180);
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
				payoutTextPrefab [seatInfo.seatId - 1] = payoutTextPrefab2;
				coinsPrefab [seatInfo.seatId - 1] = coin;
				coinsExplosive [seatInfo.seatId - 1] = coinExplosive;

                gunList[seatInfo.seatId - 1].Init(gunInfoList, seatInfo.seatId, seatInfo);
                gunDict.Add(seatInfo.seatId, gunList[seatInfo.seatId - 1]);

                userList[seatInfo.seatId - 1].InitPlayerInfo(seatInfo, false, rotateC);
                userDict.Add(seatInfo.seatId, userList[seatInfo.seatId - 1]);
            }
        }

		//Special Weapon
        public void ShowTacoPayout(double winAmount, int playerId)
        {
			if (!playerDict.ContainsKey(playerId))
				return;

			if (sfxController != null) {
				sfxController.PlayBigWin (0);
			}

			int seatId = playerDict[playerId].seatId - 1;
			GameObject payoutText = Instantiate(dragonPayoutTextPrefab);
			payoutText.transform.position = new Vector3(0f, 0f, 0f);
			payoutText.transform.localRotation = Quaternion.identity;
			payoutText.SetActive(true);

			GameObject dragonSymbol = payoutText.transform.Find("DragonSymbol").gameObject;

			tacoWinBase[seatId].SetActive(true);
			tacoWinBase[seatId].GetComponent<Image>().color = new Color(1f, 1f, 1f, 1f);
			Text payoutAmtText = dragonWinBase[seatId].GetComponentInChildren<Text>();
			payoutAmtText.text = winAmount.ToString("###,###,###,##0");

			Vector2 temp = new Vector2(dragonWinBase[seatId].transform.Find("CoinPosition").transform.position.x, dragonWinBase[seatId].transform.Find("CoinPosition").transform.position.y);
			LeanTween.move(dragonSymbol, temp, 0.05f).setOnComplete(()=>{
				for (int i = 0; i < 10; i++)
				{
					GameObject _tempcoin = coin;
					if(playerId == thisPlayerId)
						_tempcoin = mycoin;

					GameObject tempCoin = Instantiate(_tempcoin);
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

			Destroy(payoutText, 3f);
			LeanTween.delayedCall(gameObject,3f,()=>{
				tacoWinBase[seatId].SetActive(false);
			});
        }

		//Normal 
        public void ShowCrabPayout(double winAmount, int playerId)
        {
			if (!playerDict.ContainsKey(playerId))
				return;

			if (sfxController != null) {
				sfxController.PlayBigWin (0);
			}

			int seatId = playerDict[playerId].seatId - 1;
			GameObject payoutText = Instantiate(dragonPayoutTextPrefab);
			payoutText.transform.position = new Vector3(0f, 0f, 0f);
			payoutText.transform.localRotation = Quaternion.identity;
			payoutText.SetActive(true);

			GameObject dragonSymbol = payoutText.transform.Find("DragonSymbol").gameObject;

			crabWinBase[seatId].SetActive(true);
			crabWinBase[seatId].GetComponent<Image>().color = new Color(1f, 1f, 1f, 1f);
			Text payoutAmtText = dragonWinBase[seatId].GetComponentInChildren<Text>();
			payoutAmtText.text = winAmount.ToString("###,###,###,##0");

			Vector2 temp = new Vector2(dragonWinBase[seatId].transform.Find("CoinPosition").transform.position.x, dragonWinBase[seatId].transform.Find("CoinPosition").transform.position.y);
			LeanTween.move(dragonSymbol, temp, 0.05f).setOnComplete(()=>{
				for (int i = 0; i < 10; i++)
				{
					GameObject _tempcoin = coin;
					if(playerId == thisPlayerId)
						_tempcoin = mycoin;

					GameObject tempCoin = Instantiate(_tempcoin);
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

			Destroy(payoutText, 3f);
			LeanTween.delayedCall(gameObject,3f,()=>{
				crabWinBase[seatId].SetActive(false);
			});
        }
		public void ShowBigWinPayout(double winAmt, int type, float delayTimer = 0){
			LeanTween.delayedCall (bigWinEffect[type], delayTimer, () => {
				if (sfxController != null) {
					sfxController.PlayBigWin (2);
				}

				bigWinEffect[type].SetActive(true);
				LeanTween.value(gameObject, 0f, 1f, 2f).setOnUpdate((float t) =>
					{
						bigWinText[type].text = (winAmt*t).ToString("###,###,###,##0");
					}).setOnComplete(() =>
						{
							bigWinText[type].text = winAmt.ToString("###,###,###,##0");

						});
				LeanTween.delayedCall (gameObject, 5f, () => {
					bigWinEffect[type].SetActive(false);
				});
			});
		}
		public void ShowBulbFishPayout(double winAmount, int playerId)
		{
			if (!playerDict.ContainsKey(playerId))
				return;
			
			if (playerId == thisPlayerId) {
				ShowBigWinPayout (winAmount, 1,3f);
			} else {
				if (sfxController != null) {
					sfxController.PlayBigWin (1);
				}

				int seatId = playerDict[playerId].seatId - 1;
				GameObject payoutText = Instantiate(dragonPayoutTextPrefab);
				payoutText.transform.position = new Vector3(0f, 0f, 0f);
				payoutText.transform.localRotation = Quaternion.identity;
				payoutText.SetActive(true);

				GameObject dragonSymbol = payoutText.transform.Find("DragonSymbol").gameObject;

				bulbFishWinBase[seatId].SetActive(true);
				bulbFishWinBase[seatId].GetComponent<Image>().color = new Color(1f, 1f, 1f, 1f);
				Text payoutAmtText = bulbFishWinBase[seatId].GetComponentInChildren<Text>();
				payoutAmtText.text = winAmount.ToString("###,###,###,##0");

				Vector2 temp = new Vector2(bulbFishWinBase[seatId].transform.Find("CoinPosition").transform.position.x, bulbFishWinBase[seatId].transform.Find("CoinPosition").transform.position.y);
				LeanTween.move(dragonSymbol, temp, 0.05f).setOnComplete(()=>{
					for (int i = 0; i < 10; i++)
					{
						GameObject _tempcoin = coin;
						if(playerId == thisPlayerId)
							_tempcoin = mycoin;

						GameObject tempCoin = Instantiate(_tempcoin);
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

				Destroy(payoutText, 3f);
				LeanTween.delayedCall(gameObject,3f,()=>{
					bulbFishWinBase[seatId].SetActive(false);
				});
			}
		}

		public void ShowCrocodilePayout(double winAmount, int playerId)
		{
			if (!playerDict.ContainsKey(playerId))
				return;
			
			if (playerId == thisPlayerId) {
				ShowBigWinPayout (winAmount, 0,3f);
			} else {
				if (sfxController != null) {
					sfxController.PlayBigWin (1);
				}

				int seatId = playerDict[playerId].seatId - 1;
				GameObject payoutText = Instantiate(dragonPayoutTextPrefab);
				payoutText.transform.position = new Vector3(0f, 0f, 0f);
				payoutText.transform.localRotation = Quaternion.identity;
				payoutText.SetActive(true);

				GameObject dragonSymbol = payoutText.transform.Find("DragonSymbol").gameObject;

				crocodileWinBase[seatId].SetActive(true);
				crocodileWinBase[seatId].GetComponent<Image>().color = new Color(1f, 1f, 1f, 1f);
				Text payoutAmtText = crocodileWinBase[seatId].GetComponentInChildren<Text>();
				payoutAmtText.text = winAmount.ToString("###,###,###,##0");

				Vector2 temp = new Vector2(crocodileWinBase[seatId].transform.Find("CoinPosition").transform.position.x, crocodileWinBase[seatId].transform.Find("CoinPosition").transform.position.y);
				LeanTween.move(dragonSymbol, temp, 0.05f).setOnComplete(()=>{
					for (int i = 0; i < 10; i++)
					{
						GameObject _tempcoin = coin;
						if(playerId == thisPlayerId)
							_tempcoin = mycoin;

						GameObject tempCoin = Instantiate(_tempcoin);
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

				Destroy(payoutText, 3f);
				LeanTween.delayedCall(gameObject,3f,()=>{
					crocodileWinBase[seatId].SetActive(false);
				});
			}
		}

        public void ShowDragonPayout(double winAmount, int playerId)
        {
            if (!playerDict.ContainsKey(playerId))
                return;

			if (sfxController != null) {
				sfxController.PlayBigWin (1);
			}
            int seatId = playerDict[playerId].seatId - 1;
            GameObject payoutText = Instantiate(dragonPayoutTextPrefab);
            payoutText.transform.position = new Vector3(0f, 0f, 0f);
            payoutText.transform.localRotation = Quaternion.identity;
            payoutText.SetActive(true);
            
            GameObject dragonSymbol = payoutText.transform.Find("DragonSymbol").gameObject;

            dragonWinBase[seatId].SetActive(true);
            dragonWinBase[seatId].GetComponent<Image>().color = new Color(1f, 1f, 1f, 1f);
			Text payoutAmtText = dragonWinBase[seatId].GetComponentInChildren<Text>();
			payoutAmtText.text = winAmount.ToString("###,###,###,##0");
//            LeanTween.value(dragonWinBase[seatId], 2, 1, 0.5f).setOnUpdate((float value) =>
//            {
//                dragonWinBase[seatId].transform.localScale = new Vector3(value, value, 1f);
//            });
			Vector2 temp = new Vector2(dragonWinBase[seatId].transform.Find("CoinPosition").transform.position.x, dragonWinBase[seatId].transform.Find("CoinPosition").transform.position.y);
			LeanTween.move(dragonSymbol, temp, 0.05f).setOnComplete(()=>{
				for (int i = 0; i < 10; i++)
				{
					GameObject _tempcoin = coin;
					if(playerId == thisPlayerId)
						_tempcoin = mycoin;

					GameObject tempCoin = Instantiate(_tempcoin);
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

			Destroy(payoutText, 3f);
			LeanTween.delayedCall(gameObject,3f,()=>{
				dragonWinBase[seatId].SetActive(false);
			});
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
                if (uiv.playerId == playerId)
                    uiv.UpdatePlayerCredit(credit);
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
//            if (crabDict != null && !crabDict.ContainsKey(id))
//                crabDict.Add(id, cb);
        }

        public void AddTaco(int id, TacoBehavior tb)
        {
//            if (tacoDict != null && !tacoDict.ContainsKey(id))
//                tacoDict.Add(id, tb);
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

        public void ResetDict()
        {
            fishDict = new Dictionary<int, FishBehavior>();
            dragonDict = new Dictionary<int, DragonBehavior>();
//            crabDict = new Dictionary<int, CrabBehavior>();
//            tacoDict = new Dictionary<int, TacoBehavior>();
			bulbFishDict = new Dictionary<int, BulbFishBehavior>();
			crocodileDict = new Dictionary<int, CrocodileBehavior>();

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
//            if (crabDict.ContainsKey(deathInfo.targetId))
//            {
//                crabDict[deathInfo.targetId].Death(playerId, deathInfo);
//                crabDict.Remove(deathInfo.targetId);
//            }
        }

        public void OnTacoDeath(int playerId, TargetObject.TargetInfo deathInfo)
        {
//            if (tacoDict.ContainsKey(deathInfo.targetId))
//            {
//                tacoDict[deathInfo.targetId].Death(playerId, deathInfo);
//                tacoDict.Remove(deathInfo.targetId);
//            }
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
		Fish_GameAreaBehavior gameArea;
        public void RemoveGroup(GroupBehavior gb)
        {
			if(gameArea==null)
			gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
			gameArea.OnFishBehaviorCleanup ();
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

//		public void OnFinishSpecialFish(int playerId,int total){
//			gunDict [playerDict [playerId].seatId].OnFinishSpecialFish (total);
//		}
		public GameObject specialEffectMain01;
		public GameObject _specialobj;
        public void OnFishStatusUpdate(int playerId, int weaponId, double credit, TargetObject.TargetInfo[] fishStatusList)
        {
            if (!gunDict.ContainsKey(playerDict[playerId].seatId))
                return;
			
            if (playerId != thisPlayerId && weaponId == 3)
            {
                gunDict[playerDict[playerId].seatId].OtherPlayerLightning(fishStatusList[0].targetId);
            }

			if (fishStatusList.Length > 0 && fishStatusList [0].specialParam.AsArray.Count > 0) {
				if (weaponId == 7 || fishStatusList [0].specialParam.AsArray [0].AsInt == 7) {
//				Debug.Log ("Weapon Id : 7 : " +fishStatusList);
					List <TargetObject.TargetInfo> _temp = new List<TargetObject.TargetInfo> ();

					for (int i = 0; i < fishStatusList.Length; i++) {
						if (fishDict.ContainsKey (fishStatusList [i].targetId) && !fishStatusList [i].isAlive && fishStatusList [i].payout > 0) {
							_temp.Add (fishStatusList [i]);
						}
					}

					if (_specialobj == null && _temp.Count > 0) {
						gunDict [playerDict [playerId].seatId].OnInSpecialFish ();
						_specialobj = Instantiate (specialEffectMain01, gameObject.transform) as GameObject;
						for (int i = 0; i < _temp.Count; i++) {
							fishDict [_temp [i].targetId].StoreDeathInfo (playerId, fishStatusList [i]);
							_specialobj.GetComponent<SpecialFishBehavior> ().fishPosList.Add (fishDict [_temp [i].targetId].gameObject.transform.position);
							_specialobj.GetComponent<SpecialFishBehavior> ().fishTypeList.Add (fishDict [_temp [i].targetId].FishType);
							_specialobj.GetComponent<SpecialFishBehavior> ().fishPayout.Add ((int)_temp [i].payout);

							if (fishStatusList [0].specialParam.AsArray [0].AsInt == 7) {
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
						_specialobj.GetComponent<SpecialFishBehavior> ().coin = coin;

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
						_specialobj.GetComponent<SpecialFishBehavior> ().coin = coin;

						_specialobj.GetComponent<SpecialFishBehavior> ().AnimateFish ();
					}

					return;
				}
			}
			double _totalPayout = 0;
            for (int i = 0; i < fishStatusList.Length; i++)
            {
                if (fishDict.ContainsKey(fishStatusList[i].targetId) && !fishStatusList[i].isAlive)
                {
					if (sfxController != null && playerId == thisPlayerId) {
						sfxController.PlayFish ();
						sfxController.PlayCoin ();
						sfxController.PlayMove ();

						if (weaponId == 5 || weaponId == 6) {
							_totalPayout += fishStatusList [i].payout;
						}
					}

                    if(fishDict[fishStatusList[i].targetId] != null)
                        fishDict[fishStatusList[i].targetId].Death(playerId, fishStatusList[i]);

                    fishDict.Remove(fishStatusList[i].targetId);
                }

//                if (tacoDict.ContainsKey(fishStatusList[i].targetId) && !fishStatusList[i].isAlive)
//                {
//					if (sfxController != null && playerId == thisPlayerId) {
//						sfxController.PlayBoss ();
//						sfxController.PlayCoin ();
//						sfxController.PlayMove ();
//					}
//
//                    if (tacoDict[fishStatusList[i].targetId] != null)
//                        tacoDict[fishStatusList[i].targetId].Death(playerId, fishStatusList[i]);
//                    tacoDict.Remove(fishStatusList[i].targetId);
//                }
//
//                if (crabDict.ContainsKey(fishStatusList[i].targetId) && !fishStatusList[i].isAlive)
//                {
//					if (sfxController != null && playerId == thisPlayerId){
//						sfxController.PlayBoss ();
//						sfxController.PlayCoin ();
//						sfxController.PlayMove ();
//					}
//					
//                    if (crabDict[fishStatusList[i].targetId] != null)
//                        crabDict[fishStatusList[i].targetId].Death(playerId, fishStatusList[i]);
//                    crabDict.Remove(fishStatusList[i].targetId);
//                }

                if (dragonDict.ContainsKey(fishStatusList[i].targetId) && !fishStatusList[i].isAlive)
                {
					if (sfxController != null && playerId == thisPlayerId){
						sfxController.PlayBoss ();
						sfxController.PlayCoin ();
						sfxController.PlayMove ();
					}

                    if (dragonDict[fishStatusList[i].targetId] != null)
                        dragonDict[fishStatusList[i].targetId].Death(playerId, fishStatusList[i]);
                    dragonDict.Remove(fishStatusList[i].targetId);
                }

				if (bulbFishDict.ContainsKey(fishStatusList[i].targetId) && !fishStatusList[i].isAlive)
				{
					if (sfxController != null && playerId == thisPlayerId){
						sfxController.PlayBoss ();
						sfxController.PlayCoin ();
						sfxController.PlayMove ();
					}

					if (bulbFishDict[fishStatusList[i].targetId] != null)
						bulbFishDict[fishStatusList[i].targetId].Death(playerId, fishStatusList[i]);
					bulbFishDict.Remove(fishStatusList[i].targetId);
				}

				if (crocodileDict.ContainsKey(fishStatusList[i].targetId) && !fishStatusList[i].isAlive)
				{
					if (sfxController != null && playerId == thisPlayerId){
						sfxController.PlayBoss ();
						sfxController.PlayCoin ();
						sfxController.PlayMove ();
					}

					if (crocodileDict[fishStatusList[i].targetId] != null)
						crocodileDict[fishStatusList[i].targetId].Death(playerId, fishStatusList[i]);
					crocodileDict.Remove(fishStatusList[i].targetId);
				}
            }
			if (playerId == thisPlayerId && _totalPayout > 0) {
				ShowBigWinPayout (_totalPayout, 2);
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

			for (int i = 0; i < gunList.Length; i++) {
				gunList [i].ResetAllSelected ();
			}
        }

        public void CleanPool()
        {
			if(gameArea==null)
				gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
            gameArea.ResetType();
//            bgBehavior.ChangeBackground();
            groupList.Clear();
            tacoGroupList.Clear();
            dragonGroupList.Clear();
            crabGroupList.Clear();
			bulbFishGroupList.Clear ();
			crocodileGroupList.Clear ();
            //UpdateLightningLock(-1);
        }

		public void CleanTest1(){
			groupList.Clear();
		}
		public void CleanTest2(){
			if(gameArea==null)
				gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
			gameArea.ResetType();
		}
		public void CleanTest3(){
			dragonGroupList.Clear();
		}
		public void CleanTest4(){
			bulbFishGroupList.Clear ();
			crocodileGroupList.Clear ();
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
//			sideMenuBar.HideOptionContent ();
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
