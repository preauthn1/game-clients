using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine.UI;
using UnityEngine.EventSystems;
using System;

namespace P8Games.MicroFish
{
    public class GunView : MonoBehaviour
    {
        private float bulletShootInterval = 0;
//        private float updateGunMoveInterval = 0;
        [Space(10)] [SerializeField] public GameObject canvas = null;

        [SerializeField] public Text betText = null;
        [SerializeField] public Button minusBetButton = null;
        [SerializeField] public Button plusBetButton = null;
        [SerializeField] public Button[] shotButton = null;
        [Space(10)] [SerializeField] public GameObject[] bulletPrefs = null;
		[Space(10)] [SerializeField] public GameObject[] myBulletPrefs = null;
        [Space(10)] [SerializeField] public GameObject[] gunType = null;
        [SerializeField] public GameObject weaponBase = null;
        [SerializeField] public Fish_LightningEffect lightningBase = null;
        [SerializeField] public Fish_DrillEffect drillBase = null;
        [SerializeField] public Fish_LaserEffect laserBase = null;

        private GameObject currentGunType = null;
        [SerializeField] public Transform launcher = null;


        private int _gunSeatNum = -1;

        public int gunSeatNum
        {
            get { return _gunSeatNum; }
        }

        private bool _myOwnGun = false;

        public bool myOwnGun
        {
            get { return _myOwnGun; }
        }

        [System.Serializable]
        public class FishType
        {
            public int type;
            public GameObject obj;
        }

//        private bool _allowShot = true;

        private float startingAngle = 0f;
        private float endingAngle = 0f;
        private int thisGunType = 0;
        private Dictionary<int, GunInfo> gunInfoDict;
        private SeatInfo thisSeatInfo;

        //Own Gun Use
        private PoolView pv;
        [SerializeField] public Fish_LightningClickView lcv;
        private float curPosition;
		private List<Fish_BulletBehavior> bulletList = new List<Fish_BulletBehavior>();
//        private bool leftDown = false;
//        private bool rightDown = false;
//        private bool fireDown = false;
        private float curShootInterval = 0f;
        private float curMoveRate = 0f;

//        private float updateRatio = 0f;
//        private bool needUpdateMove = false;
        private int flipValue = 1;
        [SerializeField] public FishType[] gun03SelectedObj;
        [SerializeField] public GameObject gun03SelectedBtn;
		[SerializeField] public GameObject gun03SelectedMainObj;
		[SerializeField] public GameObject gun03DefaultObj;

        //for secondary input
//        private Vector2 thisGunDirection = new Vector2();
        private Vector2 vectorToTouch = new Vector2();
        private float shootAngle = 0;

        private bool isAutoShoot = false;
//        private bool isShowAutoButton = false;
//        private bool previousMouseDown = false;
        private bool _isControlLocked = false;

        float drillCount = 30;
        bool drillC = false;

        bool laserC = false;
        float laserCount = 30;

        long bulletShotId = 0;

        private bool flipC = false;

        public bool isControlLocked
        {
            get { return _isControlLocked; }
        }

        private bool _isBetLocked = false;

        public bool isBetLocked
        {
            get { return _isBetLocked; }
        }

//        private int tweenId = -1;

        private int betValue = 0;

//        private bool lightningShoot = false;

        public int BetValue
        {
            get { return betValue; }
        }

        private Fish_GameAreaBehavior gameArea;

        private bool shootLocked = false;

        public bool ShootLocked
        {
            get { return shootLocked; }
            set { shootLocked = value; }
        }

		public GameObject lightingPos;
		public GameObject positionObj;
		float positionTimer = 0f;
		public GameObject autoShootObj;
        void Awake()
        {
            gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
			HideFuncPanel ();
            gun03SelectedBtn.GetComponent<Button>().onClick.AddListener(RequestLightningList);
        }

		private bool _isChangeWeapon;
		public float gunRotateSpeed = 0.5f;
		public GameObject funcBtnPanel;
		float funcBtnTimer;
		public Button autoBtn;
		public Button lockBtn;
		public Sprite[] buttonOnOff;
		void HideFuncPanel(){
			funcBtnPanel.SetActive (false);
			funcBtnTimer = 0;
		}
		void ShowFuncPanel(){
//			FishSfxController sfxController = FindObjectOfType<FishSfxController> ();
//			if (sfxController != null) {
//				sfxController.PlayButton ();
//			}
//			SetAutoBtnImage (isAutoShoot);
//			if (thisGunType == 3)
//				SetAutoBtnImage (false);
//			SetLockBtnImage (thisGunType == 3);
//			funcBtnPanel.SetActive (true);
		}
		void LockFish(){
//			_isChangeWeapon = true;

//			if (_isChangeWeapon)
//				return;
			FishSfxController sfxController = FindObjectOfType<FishSfxController> ();
			if (sfxController != null) {
				sfxController.PlayButton ();
			}

//			if (thisGunType == 1) {
//				pv.PlayerChangeWeapon ();
//				pv.PlayerChangeWeapon ();
//			} else 
			if (thisGunType == 3) {
				isAutoShoot = false;
				pv.PlayerChangeWeapon ();
			} else {
				pv.PlayerChangeWeapon ();
			}
		}
		public bool ToggleAutoShot()
		{
			FishSfxController sfxController = FindObjectOfType<FishSfxController> ();
			if (sfxController != null) {
				sfxController.PlayButton ();
			}

//			if (thisGunType == 3) {
//				pv.PlayerChangeWeapon ();
//				HideFuncPanel ();
//				return;
//			}
			if (thisGunType >= 3)
				return false;

			isAutoShoot = !isAutoShoot;

			SetAutoBtnImage (isAutoShoot);

			HideFuncPanel ();
			return isAutoShoot;
		}
		public void SetLockBtnImage(bool isOn){
			if (isOn) {
				lockBtn.GetComponent<Image> ().sprite = buttonOnOff [0];
			} else {
				lockBtn.GetComponent<Image> ().sprite = buttonOnOff [1];
			}
		}
		public void SetAutoBtnImage(bool isOn){
			if (isOn) {
				autoBtn.GetComponent<Image> ().sprite = buttonOnOff [0];
			} else {
				autoBtn.GetComponent<Image> ().sprite = buttonOnOff [1];
			}
		}
		void FixedUpdate()
		{
			if (_myOwnGun) {
				if (positionObj != null && positionObj.activeInHierarchy) {
					positionTimer += Time.deltaTime;
					if (positionTimer >= 5f) {
						positionObj.SetActive (false);
					}
				}

				if (funcBtnPanel != null && funcBtnPanel.activeInHierarchy) {
					funcBtnTimer += Time.deltaTime;

					if (funcBtnTimer >= 5f) {
						HideFuncPanel ();
					}
				}
				curShootInterval += Time.deltaTime;
			}

           

			if (!shootLocked) {
				if (_myOwnGun) {
//					GetFishType ();

					if (!_isControlLocked) {
						if ((Input.GetKey (KeyCode.LeftArrow) || Input.GetKey (KeyCode.A)) && thisGunType < 3) {
//							GC.Collect ();
							float z = this.transform.localEulerAngles.z;
							if (z < 90 || (z < 360 && z >= 260)) {
								z += Time.fixedTime * gunRotateSpeed;
								this.transform.localEulerAngles = new Vector3 (0f, 0f, z);
							}
						} else if ((Input.GetKey (KeyCode.RightArrow) || Input.GetKey (KeyCode.D)) && thisGunType < 3) {
							float z = this.transform.localEulerAngles.z;
							if (z < 100 || (z < 360 && z >= 270)) {
								z -= Time.fixedTime * gunRotateSpeed;
								this.transform.localEulerAngles = new Vector3 (0f, 0f, z);
							} 
						}  

						if (!_isChangeWeapon && (Input.GetKeyDown (KeyCode.UpArrow) || Input.GetKeyDown (KeyCode.A))) {
							ChangeWeapon ();
							_isChangeWeapon = true;

						} else if (!_isChangeWeapon && (Input.GetKeyDown (KeyCode.DownArrow) || Input.GetKeyDown (KeyCode.S))) {
							ChangeWeapon ();
							_isChangeWeapon = true;
						}

						if (Input.GetKey (KeyCode.Space) && !isAutoShoot) {
							if (thisGunType < 3) {
								RequestFire ();
							}
							if (thisGunType == 3) {
								LightningShoot ();
							}

							if (laserC) {
								CancelLightningShoot ();
								laserC = false;
								laserCount = 30;
								RequestFireSuperWeapon ();
							}

							if (drillC) {
								CancelLightningShoot ();
								drillC = false;
								drillCount = 30;
								RequestFireSuperWeapon ();
							}
						}

						else if (Input.GetMouseButton (0)) {
							GameObject go = EventSystem.current.currentSelectedGameObject;
							if (go == null) {
								if (thisGunType < 3) {
									ProcessTouchInput (Camera.main.ScreenPointToRay (Input.mousePosition).origin);
									RequestFire ();
								}
								if (thisGunType == 3) {
									GetFishType ();
									LightningShoot ();
								}
							} else {
								CancelLightningShoot ();
							}
						} else {
							if (thisGunType == 3) {
								if (isAutoShoot) {
									GetFishType ();
									LightningShoot ();
								} else {
									CancelLightningShoot ();
								}
							}
						}

						if (isAutoShoot && thisGunType < 3) {
							autoShootObj.SetActive (true);
							RequestFire ();
						} else {
							autoShootObj.SetActive (false);
						}
						
					}

					if (laserC) {
						CancelLightningShoot ();
						laserCount -= Time.fixedDeltaTime;
						if (laserCount <= 0) {
							laserC = false;
							laserCount = 30;
							RequestFireSuperWeapon ();
						}
					}

					if (drillC) {
						CancelLightningShoot ();
						drillCount -= Time.fixedDeltaTime;
						if (drillCount <= 0) {
							drillC = false;
							drillCount = 30;
							RequestFireSuperWeapon ();
						}
					}
				} else {
					if (otherFishC) {
						loopTime -= Time.deltaTime;
						if (loopTime > 0) {
							OtherPlayerLoopLightning ();
						} else {
							otherFishC = false;
							OtherPlayerStopLightning ();
						}
					}
				}

//				previousMouseDown = Input.GetMouseButton (0);
			} else {
				if (thisGunType == 3)
				CancelLightningShoot ();
			}

				
			if (_myOwnGun && Input.GetMouseButtonDown (0) && thisGunType == 3 && !IsPointerOverUIObject()) { 
				
				Ray ray = Camera.main.ScreenPointToRay (Input.mousePosition); 
				RaycastHit2D[] hits = Physics2D.RaycastAll (ray.origin, ray.direction, 10000);
//				bool isClickButton = false;
//				for (int i = 0; i < hits.Length; i++) {
//					RaycastHit2D hit = hits [i];
//					if (hit.collider.tag == "Wall") {
//						i = hits.Length;
//						Debug.Log (hit.collider.tag);
//						Debug.Log ("Collider Button !!! ");
//						break;
//					}
//				}
//				if(!isClickButton)
				for (int i = 0; i < hits.Length; i++) {
					RaycastHit2D hit = hits [i];
					if (hit.collider != null && hit.collider.tag == "Fish") {
						//hit.collider.gameObject.GetComponent<FishBehavior> ();
						if (hit.collider.gameObject.GetComponent<FishBehavior> () != null) {
							//Debug.LogWarning (hit.collider.gameObject.GetComponent<FishBehavior> ().FishType + " / " + hit.collider.gameObject.GetComponent<FishBehavior> ().fish.targetId);
							//if (hit.collider.gameObject.GetComponent<FishBehavior> ().fish.specialType >= 6) {
							//								ResetAllSelected ();
							//								currentSelectedFish = hit.collider.gameObject.GetComponent<FishBehavior> ();
							//								UpdateClickSelectedFishType (300, currentSelectedFish.fish.targetId);
							//}
							//							else if (hit.collider.gameObject.GetComponent<FishBehavior> ().FishType > 9) {
							ResetAllSelected ();
							currentSelectedFish = hit.collider.gameObject.GetComponent<FishBehavior> ();
							UpdateClickSelectedFishType (currentSelectedFish.FishType, currentSelectedFish.fish.targetId);
							//							}
						} else if (hit.collider.gameObject.GetComponentInParent<BulbFishBehavior> () != null) {
							ResetAllSelected ();
							currentSelectedBulbFish = hit.collider.gameObject.GetComponentInParent<BulbFishBehavior> ();
							UpdateClickSelectedFishType (102, currentSelectedBulbFish.fish.targetId);
						} 
						//						else if (hit.collider.gameObject.GetComponentInParent<CrabBehavior> () != null) {
						//							ResetAllSelected ();
						//							currentSelectedCrab = hit.collider.gameObject.GetComponentInParent<CrabBehavior> ();
						//							UpdateClickSelectedFishType (101,currentSelectedCrab.fish.targetId);
						//						} 
						else if (hit.collider.gameObject.GetComponentInParent<CrocodileBehavior> () != null) {
							ResetAllSelected ();
							currentSelectedCrocodile = hit.collider.gameObject.GetComponentInParent<CrocodileBehavior> ();
							UpdateClickSelectedFishType (101, currentSelectedCrocodile.fish.targetId);
						} else if (hit.collider.gameObject.GetComponentInParent<DragonBehavior> () != null) {
							ResetAllSelected ();
							currentSelectedDragon = hit.collider.gameObject.GetComponentInParent<DragonBehavior> ();
							UpdateClickSelectedFishType (18, currentSelectedDragon.fish.targetId);
						} 
						//						else if (hit.collider.gameObject.GetComponentInParent<TacoBehavior> () != null) {
						//							ResetAllSelected ();
						//							currentSelectedTaco = hit.collider.gameObject.GetComponentInParent<TacoBehavior> ();
						//							UpdateClickSelectedFishType (103,currentSelectedTaco.fish.targetId);
						//						}
					}
				}
			}

        }
		private bool IsPointerOverUIObject()
		{
			var eventDataCurrentPosition = new PointerEventData(EventSystem.current)
			{
				position = new Vector2(Input.mousePosition.x, Input.mousePosition.y)
			};
			var results = new List<RaycastResult>();
			EventSystem.current.RaycastAll(eventDataCurrentPosition, results);

			for (int i = 0; i < results.Count; i++) {
				if (results [i].gameObject.name == "Button")
					return true;
			}
			return false;
//			return results.Count > 0;
		}
        private float loopTime = 2f;

        public void ResetGun()
        {
            betText.text = "";
            betValue = 0;
            isAutoShoot = false;
            SetButtonActivate(false);
			gameObject.transform.localEulerAngles = new Vector3(0, 0, 0);
            drillBase.CancelWeapon();
            laserBase.CancelWeapon();
            UnlockGun();
            foreach (GameObject gun in gunType)
            {
                gun.SetActive(false);
            }
        }

        #region OwnGunArea

        public void Init(List<GunInfo> gunInfoList, PoolView poolView, SeatInfo seatInfo)
        {
			positionObj.SetActive (true);
			positionTimer = 0;
			checkIsSuperWeapon = false;
            ResetGun();
            thisSeatInfo = seatInfo;
            pv = poolView;
            bulletList = new List<Fish_BulletBehavior>();
            gunInfoDict = new Dictionary<int, GunInfo>();

			autoBtn.onClick.AddListener(() =>
				{
					ToggleAutoShot();
				});
			lockBtn.onClick.AddListener (() => {
				LockFish();
			});

            minusBetButton.onClick.AddListener(() =>
            {
                ChangeBetAmount(-1);
            });

            plusBetButton.onClick.AddListener(() =>
            {
                ChangeBetAmount(+1);
            });
//            foreach (Button btn in shotButton)
//            {
//                btn.onClick.AddListener(RequestFireSuperWeapon);
//                btn.gameObject.SetActive(false);
//            }

            for (int i = 0; i < gunInfoList.Count; i++)
            {
                gunInfoDict.Add(gunInfoList[i].type, gunInfoList[i]);
            }

            curPosition = 0f;
            curShootInterval = 0f;
            curMoveRate = 0;
            startingAngle = this.transform.localEulerAngles.z;
            endingAngle = startingAngle;
            _gunSeatNum = thisSeatInfo.seatId;
            _myOwnGun = true;
            thisGunType = thisSeatInfo.gunType;
            this.transform.localEulerAngles = new Vector3(0f, 0f, curPosition);
			foreach (GameObject gun in gunType) 
			{
				gun.SetActive (false);
			}

			if (thisGunType == 3) {
				isAutoShoot = true;
				SetAutoBtnImage (isAutoShoot);
				if(_myOwnGun)
				gun03SelectedMainObj.SetActive (true);
			} else {
				isAutoShoot = false;
				SetAutoBtnImage (isAutoShoot);
				if(_myOwnGun)
				gun03SelectedMainObj.SetActive (false);
			}
			if (thisGunType < 4) 
			{
				bulletShootInterval = gunInfoDict [thisGunType].shootingInterval;
				LeanTween.cancel (tweenGunId);
				currentGunType = gunType [thisGunType - 1];
				currentGunType.SetActive (true);
				currentGunType.transform.Find ("Gun").transform.localScale = new Vector3 (2, 2, 2);
				tweenGunId = LeanTween.scale (currentGunType.transform.Find ("Gun").gameObject, new Vector3 (1, 1, 1), 0.5f).id;
			} 
			else 
			{
				if (thisGunType == 4) 
				{
					EquipDrill ();
				} 
				else if (thisGunType == 5) 
				{
					EquipLaserGun ();
				}
//				foreach (Button btn in shotButton)
//					btn.gameObject.SetActive (true);

				_isControlLocked = false;
			}
			gun03DefaultObj.SetActive (true);
            SetButtonActivate(true);
            canvas.SetActive(true);
            this.gameObject.SetActive(true);

//            weaponBase.GetComponent<Button>().onClick.AddListener(ChangeWeapon);
			if (FishDataManager._currency.Contains ("HP")) {
				if (int.Parse (seatInfo.previosBetValue.ToString ()) < 100) {
					//					ChangeBetAmount (-1);
					UpdateBetAmount (100);
				}
			} else {
				UpdateBetAmount (int.Parse (seatInfo.previosBetValue.ToString ()));
			}

            if (seatInfo.seatId > 2)
                flipC = true;
        }

        public void ChangeWeapon()
        {
            if (_isBetLocked)
                return;
            if (!_myOwnGun)
                return;
//			ShowFuncPanel ();

//            pv.PlayerChangeWeapon();
			if (thisGunType == 3) {
				isAutoShoot = false;
				SetAutoBtnImage (isAutoShoot);
				pv.PlayerChangeWeapon ();
			} else {
				pv.PlayerChangeWeapon ();
			}
        }

        public void Remove()
        {
            ResetGun();

            foreach (Fish_BulletBehavior bullet in bulletList)
            {
                if (bullet != null)
                {
                    Destroy(bullet.gameObject);
                }
            }
            bulletList = new List<Fish_BulletBehavior>();
            gunInfoDict = new Dictionary<int, GunInfo>();

            minusBetButton.onClick.RemoveListener(() =>
            {
                ChangeBetAmount(-1);
            });

            plusBetButton.onClick.RemoveListener(() =>
            {
                ChangeBetAmount(+1);
            });

//            foreach (Button btn in shotButton)
//            {
//                btn.onClick.RemoveListener(RequestFireSuperWeapon);
//                btn.gameObject.SetActive(false);
//            }


            curPosition = 0f;
            curShootInterval = 0f;
            curMoveRate = 0;
            _gunSeatNum = 0;
            _myOwnGun = false;
            SetButtonActivate(false);
            canvas.SetActive(false);
            this.gameObject.SetActive(false);
            for (int i = 0; i < gunType.Length; i++)
            {
                gunType[i].SetActive(false);
            }

            LeanTween.cancel(tweenGunId);
            flipC = false;

        }

       

        public void ChangeBetAmount(int changeValue)
        {
			Debug.Log ("Chang ebet");
            if (_isBetLocked)
                return;
			
			FishSfxController sfxController = FindObjectOfType<FishSfxController> ();
			if (sfxController != null) {
				sfxController.PlayBetButton ();
			}
            pv.PlayerChangeBetAmount(changeValue);
        }

        public void UpdateBetAmount(int betAmount)
        {
            betText.text = betAmount.ToString();
            betValue = betAmount;
        }
		public void SendSpecialFish(){
			Debug.Log ("Send Special Fish !!");

			if (_myOwnGun) {
				pv.UpdateOwnGunShoot (new GunShoot (thisSeatInfo.playerId, 7, this.transform.transform.localEulerAngles.z, betValue));
				_isControlLocked = true;
				_isBetLocked = true;
				shootLocked = true;
			}

		
		}
		public GameObject boomEffect;
		Vector3 boomPos;
		int boomPattern;
		public void PreBombExplose(Vector3 position,int pattern){
//			Debug.Log ("Boom Pattern : " +pattern);
			boomPos = position;
			boomPattern = pattern;
			if (_myOwnGun)
				pv.UpdateOwnGunShoot (new GunShoot (thisSeatInfo.playerId, 6, this.transform.transform.localEulerAngles.z, betValue));
			else
				TriggerBombExplosion (-1);
		}
		public void TriggerBombExplosion(long shootId){
//			Debug.Log ("TriggerBombExplosion : " +shootId);
			_isControlLocked = true;
			_isBetLocked = true;
			shootLocked = true;

//			if (!_myOwnGun)
//				return;
			currentGunType = gunType[4];
			if(pv == null)
				pv = GameObject.FindObjectOfType<PoolView>();
			
			GameObject be = GameObject.Instantiate(boomEffect,pv.fishHolder.gameObject.transform);
			be.transform.position = boomPos;
			BombCrabBehavior nb = be.GetComponentInChildren<BombCrabBehavior>();
			nb.gv = this;
			//nb.betAmount = betAmount;
			nb.thisGunType = 6;
			nb.bulletId = shootId;
			nb.isOwnGun = _myOwnGun;
			nb.boomCount = 0;
//			be.GetComponent<Animator> ().enabled = false;
			LeanTween.delayedCall(gameObject,1.5f,()=>{
				LeanTween.moveLocal (be, Vector3.zero,1f);
			});

			LeanTween.delayedCall(gameObject, 7f, () =>
				{
					_isControlLocked = false;
					_isBetLocked = false;
					shootLocked = false;
				});	
		}
			
        public void EquipLaserGun()
        {
//            Debug.LogWarning("this seat " + thisSeatInfo.seatId + "  Equip Laser Gun");
	
            _isControlLocked = true;
            _isBetLocked = true;
			shootLocked = true;
            laserCount = 30;
            laserC = true;

            foreach (GameObject tempGun in gunType)
            {
//				Debug.LogWarning("Temp Gun : " +tempGun.name);
                tempGun.SetActive(false);
            }

            LeanTween.cancel(tweenGunId);
            currentGunType = gunType[4];
            currentGunType.SetActive(true);
//            currentGunType.transform.Find("Gun").transform.localScale = new Vector3(2, 2, 2);
            tweenGunId = LeanTween.scale(currentGunType.transform.Find("Gun").gameObject, new Vector3(1, 1, 1), 0.5f).id;
            laserBase.EquipWeapon();

            if (!_myOwnGun)
                return;
			
            LeanTween.delayedCall(gameObject, 5.5f, () =>
            {
					pv.CheckNextGun();
					foreach (GameObject tempGun in gunType)
					{
						tempGun.SetActive(false);
					}

					LeanTween.cancel(tweenGunId);
					currentGunType = gunType[thisGunType - 1];
					currentGunType.SetActive(true);
					shootLocked = false;
            });
        }

        public void EquipDrill()
        {
//            Debug.LogWarning("this seat " + thisSeatInfo.seatId + "  Equip Drill");

            _isControlLocked = true;
            _isBetLocked = true;
            drillCount = 30;
            drillC = true;

            foreach (GameObject tempGun in gunType)
            {
                tempGun.SetActive(false);
            }

            LeanTween.cancel(tweenGunId);
            currentGunType = gunType[3];
            currentGunType.SetActive(true);
//            currentGunType.transform.Find("Gun").transform.localScale = new Vector3(2, 2, 2);
            tweenGunId = LeanTween.scale(currentGunType.transform.Find("Gun").gameObject, new Vector3(1, 1, 1), 0.5f).id;

            if (!_myOwnGun)
                return;
            LeanTween.delayedCall(gameObject, 1f, () =>
            {
                pv.CheckNextGun();
            });
        }

        public void UnlockGun()
        {
            _isControlLocked = false;
            _isBetLocked = false;
			shootLocked = false;
        }

        public void HitUnit(double betAmount, int gunType, int[] fishHit, long shootId = 1)
        {
//			Debug.Log ("Super Weapon : " +gunType);
            List<int> filteredFishList = new List<int>();
            for (int i = 0; i < fishHit.Length; i++)
            {
                if (gameArea.IsValidTarget(fishHit[i]))
                {
                    filteredFishList.Add(fishHit[i]);
                }
            }

            pv.UpdateHitedFishes(filteredFishList.ToArray(), gunType, shootId);
        }


        void ProcessTouchInput(Vector3 touchPos)
        {
//            if (thisGunType == 3)
//                return;
//			Debug.Log(touchPos);
//			Debug.Log(this.transform.transform.position);
            vectorToTouch.Set(touchPos.x - this.transform.transform.position.x, touchPos.y - this.transform.transform.position.y);

            shootAngle = Vector2.Angle(vectorToTouch.normalized, Vector2.up);

            if (shootAngle > 90f)
                shootAngle = 90f;

            this.transform.transform.localEulerAngles = new Vector3(0f, 0f, (vectorToTouch.x < 0f ? 1 : -1)*shootAngle);
        }
		public GameObject specialFishWinBase;
		public Text specialFishBetTxt;
		public Text specialWinTxt;
		public void OnInSpecialFish(){
			specialFishWinBase.SetActive (true);
			specialFishBetTxt.text = betValue.ToString();
			specialWinTxt.gameObject.SetActive (false);
		}
		public void OnFinishSpecialFish(int total){
			specialFishWinBase.SetActive (true);
			specialFishBetTxt.text = betValue.ToString();
			specialWinTxt.gameObject.SetActive (true);
			specialWinTxt.text = total.ToString("0");

			LeanTween.value(gameObject, 0f, 1f, 1.5f).setOnUpdate((float t) =>
			{
					specialWinTxt.text = ((double)total*t).ToString("###,###,###,##0");
			}).setOnComplete(() =>
				{
					specialWinTxt.text = total.ToString("###,###,###,##0");
				});
			
			LeanTween.delayedCall (gameObject, 3f, ResetGunAfterSpecial);
		}
		public void ResetGunAfterSpecial(){
			specialFishWinBase.SetActive(false);
			_isControlLocked = false;
			_isBetLocked = false;
			shootLocked = false;
		}

        public void RequestFireSuperWeapon()
        {
            if (!isControlLocked)
            {
                RequestFire();
            }
        }

        public void FireSuperWeapon(GunShoot gunShoot, long shootId)
        {

            if (_isControlLocked)
                return;

            _isControlLocked = true;

            if (gunShoot.gunType == 4)
            {
                drillC = false;
                drillCount = 30;
                drillBase.FireWeapon(gunShoot, myOwnGun, shootId, flipC);
            }
            if (gunShoot.gunType == 5)
            {
                laserC = false;
                laserCount = 30;
                laserBase.FireWeapon(gunShoot, shootId, myOwnGun, flipC);
            }
        }

        public void SuperWeaponFinish()
        {
            if (!_myOwnGun)
                return;

            pv.CheckNextGun();
        }

        private FishBehavior currentSelectedFish;
        private DragonBehavior currentSelectedDragon;
        private TacoBehavior currentSelectedTaco;
        private CrabBehavior currentSelectedCrab;
		private CrocodileBehavior currentSelectedCrocodile;
		private BulbFishBehavior currentSelectedBulbFish;
        private int tempValue = 0;
        public void LightningShoot()
        {
            if (pv.userDict[gunSeatNum].balance < betValue)
            {
                //lightningBase.ShotTarget(null, flipC);
                return;
            }

			if (currentSelectedDragon != null) {
				if (!gameArea.IsValidTarget (currentSelectedDragon.fish.targetId)) {
					currentSelectedDragon = null;
				}
			}
			if (currentSelectedTaco != null) {
				if (!gameArea.IsValidTarget (currentSelectedTaco.fish.targetId)) {
					currentSelectedTaco = null;
				}
			}
			if (currentSelectedCrab != null) {
				if (!gameArea.IsValidTarget (currentSelectedCrab.fish.targetId)) {
					currentSelectedCrab = null;
				}
			}
			if (currentSelectedBulbFish != null) {
				if (!gameArea.IsValidTarget (currentSelectedBulbFish.fish.targetId)) {
					currentSelectedBulbFish = null;
				}
			}
			if (currentSelectedCrocodile != null) {
				if (!gameArea.IsValidTarget (currentSelectedCrocodile.fish.targetId)) {
					currentSelectedCrocodile = null;
				}
			}

			bool selected = currentSelectedFish != null || currentSelectedDragon != null || currentSelectedTaco != null || currentSelectedCrab != null || currentSelectedBulbFish != null || currentSelectedCrocodile != null;
//			Debug.Log (selected);
            if (!selectedFishC || !selected)
            {
                //lightningBase.ShotTarget(null, flipC);
                return;
            }

            if (selected)
            {
                Transform target = null;
				if (currentSelectedFish != null) {
					target = currentSelectedFish.transform;
					currentSelectedFish.EnableLockIcon ();
				}

				if (currentSelectedDragon != null) {
					target = currentSelectedDragon.ActiveGragonPart ();
					currentSelectedDragon.EnableLockIcon ();
				}

                if (currentSelectedTaco != null)
                {
                    if (tempValue != currentSelectedTaco.fish.targetId)
                    {
                        tempValue = currentSelectedTaco.fish.targetId;
//                        Debug.Log("@@@@@@@@@@!!!!!!!!!!!!!!!!!!!!!!! temp value  " + tempValue);
                    }
					target = currentSelectedTaco.GetTarget();
                }

                if (currentSelectedCrab != null)
                {
                    if (tempValue != currentSelectedCrab.fish.targetId)
                    {
                        tempValue = currentSelectedCrab.fish.targetId;
//                        Debug.Log("@@@@@@@@@@!!!!!!!!!!!!!!!!!!!!!!! temp value  " + tempValue);
                    }

                    target = currentSelectedCrab.transform;
                }

				if (currentSelectedBulbFish != null)
				{
					if (tempValue != currentSelectedBulbFish.fish.targetId)
					{
						tempValue = currentSelectedBulbFish.fish.targetId;
//						Debug.Log("@@@@@@@@@@!!!!!!!!!!!!!!!!!!!!!!! temp value  " + tempValue);
					}

					target = currentSelectedBulbFish.transform;
					currentSelectedBulbFish.EnableLockIcon ();
				}
				if (currentSelectedCrocodile != null)
				{
					if (tempValue != currentSelectedCrocodile.fish.targetId)
					{
						tempValue = currentSelectedCrocodile.fish.targetId;
//						Debug.Log("@@@@@@@@@@!!!!!!!!!!!!!!!!!!!!!!! temp value  " + tempValue);
					}

					target = currentSelectedCrocodile.transform;
					currentSelectedCrocodile.EnableLockIcon ();
				}



                if (target == null)
                    return;

//                lightningBase.ShotTarget(target, flipC);
                vectorToTouch = target.position - transform.position;
                shootAngle = Vector2.Angle(vectorToTouch.normalized, Vector2.up);

//                lightningBase.gameObject.SetActive(true);
                if (!flipC)
                {
                    if (shootAngle < 90f)
                        shootAngle = 90f;
                    lightningBase.transform.localEulerAngles = new Vector3(0f, 0f, (vectorToTouch.x < 0f ? 1 : -1) * shootAngle);
                }
                else
                {
                    lightningBase.transform.localEulerAngles = new Vector3(0f, 0f, (vectorToTouch.x < 0f ? 1 : -1) * shootAngle - 180);
                }

                if (curShootInterval >= bulletShootInterval)
                {
                    curShootInterval = 0f;
                    if (currentSelectedFish != null)
					{
						pv.UpdateOwnGunShoot(new GunShoot(thisSeatInfo.playerId, thisGunType, this.transform.transform.localEulerAngles.z, betValue,currentSelectedFish.fish.targetId));
//                        HitUnit(betValue, 3, new int[] {currentSelectedFish.fish.targetId}, bulletShotId);
						//currentSelectedFish.HitFishEffect();
                    }
                    else if (currentSelectedDragon != null)
					{
						pv.UpdateOwnGunShoot(new GunShoot(thisSeatInfo.playerId, thisGunType, this.transform.transform.localEulerAngles.z, betValue,currentSelectedDragon.fish.targetId));
//                        HitUnit(betValue, 3, new int[] { currentSelectedDragon.fish.targetId }, bulletShotId);
						//currentSelectedDragon.HitFishEffect();
                    }
                    else if (currentSelectedTaco != null)
					{
						pv.UpdateOwnGunShoot(new GunShoot(thisSeatInfo.playerId, thisGunType, this.transform.transform.localEulerAngles.z, betValue,currentSelectedTaco.fish.targetId));
//                        HitUnit(betValue, 3, new int[] { currentSelectedTaco.fish.targetId }, bulletShotId);
						//currentSelectedTaco.HitFishEffect();
                    }
                    else if (currentSelectedCrab != null)
                    {
						pv.UpdateOwnGunShoot(new GunShoot(thisSeatInfo.playerId, thisGunType, this.transform.transform.localEulerAngles.z, betValue,currentSelectedCrab.fish.targetId));
//                        HitUnit(betValue, 3, new int[] { currentSelectedCrab.fish.targetId }, bulletShotId);
                        //currentSelectedCrab.HitFishEffect();
                    }
					else if (currentSelectedBulbFish != null)
					{
						pv.UpdateOwnGunShoot(new GunShoot(thisSeatInfo.playerId, thisGunType, this.transform.transform.localEulerAngles.z, betValue,currentSelectedBulbFish.fish.targetId));
//						HitUnit(betValue, 3, new int[] { currentSelectedBulbFish.fish.targetId }, bulletShotId);
						//currentSelectedBulbFish.HitFishEffect();
					}
					else if (currentSelectedCrocodile != null)
					{
						pv.UpdateOwnGunShoot(new GunShoot(thisSeatInfo.playerId, thisGunType, this.transform.transform.localEulerAngles.z, betValue,currentSelectedCrocodile.fish.targetId));
//						HitUnit(betValue, 3, new int[] { currentSelectedCrocodile.fish.targetId }, bulletShotId);
						//currentSelectedCrocodile.HitFishEffect();
					}

                    RequestFire();
                }
            }
        }

        public void CancelLightningShoot()
        {
            lightningBase.ShotTarget(null, flipC);
            lightningBase.gameObject.SetActive(false);
        }


        private int selectedFish = -1;
        private int selectedFishId = 0;
        private bool selectedFishC = false;
		public Sprite[] swFishSprite;
        public void GetFishType()
        {
            Dictionary<int, int> fishTypeDic = gameArea.GetFishType;

			if (selectedFish >= 100 && selectedFish < 200)
            {
//                selectedObj.GetComponent<Image>().color = new Color32(73, 73, 73, 255);
                selectedFishC = false;
                currentSelectedFish = null;

                int[] tempFish = {101, 102, 103,104,105};
				for (int i = 0; i < tempFish.Length; i++)
                {
                    if (fishTypeDic.ContainsValue(tempFish[i]))
                    {
//                        if (selectedObj != null)
//                            selectedObj.GetComponent<Image>().color = new Color32(255, 255, 255, 255);

                        selectedFishC = true;
                        selectedFish = tempFish[i];
                    }
                }
            }
			else if(selectedFish >= 300 && selectedFish < 400){
//				selectedObj.GetComponent<Image>().color = new Color32(73, 73, 73, 255);
				selectedFishC = false;
				currentSelectedFish = null;
				foreach(FishBehavior fish in gameArea.GetFishBehavior.Values)
				{
					if (fish.fish.specialType == 7) {
//						selectedObj.GetComponent<Image> ().color = new Color32 (255, 255, 255, 255);
						//selectedFish = fish.FishType;
						selectedFishC = true;
						selectedFishId =  fish.fish.targetId;
						currentSelectedFish = fish;
					}
				}
			}
            else
            {
//				if (selectedObj != null)
//				selectedObj.GetComponent<Image>().color = new Color32(73, 73, 73, 255);
//				Debug.Log(" Check available fish : " +fishTypeDic.ContainsValue(selectedFish) +" / " +currentSelectedFish);
				if (fishTypeDic.ContainsValue(selectedFish))
                {
//                    if (selectedObj != null)
//                        selectedObj.GetComponent<Image>().color = new Color32(255, 255, 255, 255);

					if (currentSelectedFish == null && selectedFish != 18) {
						gameArea.RemoveType (selectedFishId);
						currentSelectedFish = null;
					} else if (currentSelectedDragon != null && !currentSelectedDragon.gameObject.activeInHierarchy && selectedFish == 18) {
//						gameArea.RemoveType (selectedFishId);
//						currentSelectedFish = null;
						currentSelectedDragon = null;
					}

                    selectedFishC = true;
                }
                else
                {
//					int[] tempFish = {8,9,10,11,12,13,14,15,16,17,18};
//					for (int i = 0; i < tempFish.Length; i++)
//					{
//						if (fishTypeDic.ContainsValue(tempFish[i]))
//						{
//							if (selectedObj != null)
//								selectedObj.GetComponent<Image>().color = new Color32(255, 255, 255, 255);
//
//							selectedFishC = true;
//							selectedFish = tempFish[i];
//						}
//					}

//                    if (selectedObj != null)
//                        selectedObj.GetComponent<Image>().color = new Color32(73, 73, 73, 255);
//                    selectedFishC = false;
//                    currentSelectedFish = null;
                }
            }

            if (selectedFishC)
            {

//				if(gameArea.IsValidTarget(selectedFishId) && currentSelectedTaco == null){
//					selectedFishId = 0;
//				}

//				Debug.Log (gameArea.IsValidTarget (selectedFishId) + " / " + selectedFishId);
				if (!gameArea.IsValidTarget (selectedFishId)) { 
					currentSelectedFish = null;
					currentSelectedDragon = null;
//					currentSelectedTaco = null;
					currentSelectedCrab = null;
					currentSelectedBulbFish = null;
					currentSelectedCrocodile = null;
//					selectedFishId = 0;
					foreach (int key in fishTypeDic.Keys) {
						if (fishTypeDic [key].Equals (selectedFish)) {
//                            if (selectedFishId != key)
//                            {
							selectedFishId = key;
							Dictionary<int, FishBehavior> fishBehavior = gameArea.GetFishBehavior;
							if (fishBehavior.ContainsKey (selectedFishId)) {
								currentSelectedFish = fishBehavior [selectedFishId];
								break;
							}

							Dictionary<int, DragonBehavior> dragonBehavior = gameArea.GetDragonBehavior;
							if (dragonBehavior.ContainsKey (selectedFishId)) {
								currentSelectedDragon = dragonBehavior [selectedFishId];
								break;
							}

							Dictionary<int, TacoBehavior> tacoBehavior = gameArea.GetTacoBehavior;
							if (tacoBehavior.ContainsKey (selectedFishId)) {
								currentSelectedTaco = tacoBehavior [selectedFishId];
								break;
							}

							Dictionary<int, CrabBehavior> crabBehavior = gameArea.GetCrabBehavior;
							if (crabBehavior.ContainsKey (selectedFishId)) {
								currentSelectedCrab = crabBehavior [selectedFishId];
								break;
							}

							Dictionary<int, BulbFishBehavior> bulbfishBehavior = gameArea.GetBulbFishBehavior;
							if (bulbfishBehavior.ContainsKey (selectedFishId)) {
								currentSelectedBulbFish = bulbfishBehavior [selectedFishId];
								break;
							}

							Dictionary<int, CrocodileBehavior> crocodileBehavior = gameArea.GetCrocodileBehavior;
							if (crocodileBehavior.ContainsKey (selectedFishId)) {
								currentSelectedCrocodile = crocodileBehavior [selectedFishId];
								break;
							}
//                            }
						}
					}
				} else {

				}
            }
        }

		public void CheckAndResetDragonSelected(){
			if (selectedFish == 102) {
				UpdateSelectedFishType (100);
			}
		}
		public void ResetAllSelected(){
			currentSelectedFish = null;
			currentSelectedDragon = null;
			currentSelectedTaco = null;
			currentSelectedCrab = null;
			currentSelectedBulbFish = null;
			currentSelectedCrocodile = null;
			//UpdateSelectedFishType (0);
		}
        private GameObject selectedObj;
        public void UpdateSelectedFishType(int value)
        {
            selectedFish = value;
            selectedFishId = 0;
			bool isSelected = false;
            foreach (FishType obj in gun03SelectedObj)
            {
                obj.obj.SetActive(false);
	
                if (obj.type == value)
                {
                    obj.obj.SetActive(true);
                    selectedObj = obj.obj;
					gun03DefaultObj.SetActive (false);
                }
            }
			if (!isSelected && value >= 100 && value < 200) {
				selectedObj = gun03SelectedObj [(value-101) + 18].obj;
				selectedObj.SetActive (true);
				gun03DefaultObj.SetActive (false);
			} else if(!isSelected && value >= 200 && value < 300) {
				selectedObj = gun03SelectedObj[(value-202) + 20].obj;
				selectedObj.SetActive (true);
			}

			if (value == 0) {
				gun03DefaultObj.SetActive (true);
			}
        }

		public void UpdateClickSelectedFishType(int value,int id)
		{
			selectedFish = value;
			selectedFishId = id;
			bool isSelected = false;
			foreach (FishType obj in gun03SelectedObj)
			{
				obj.obj.SetActive(false);

				if (obj.type == value)
				{
					isSelected = true;
					obj.obj.SetActive(true);
					selectedObj = obj.obj;
					gun03DefaultObj.SetActive (false);
				}
			}

			if (!isSelected && value >= 100 && value < 200) {
				selectedObj = gun03SelectedObj[(value-101) + 18].obj;
				selectedObj.SetActive (true);

			}else if(!isSelected && value >= 200 && value < 300) {
				selectedObj = gun03SelectedObj[(value-202) + 20].obj;
				selectedObj.SetActive (true);
			}
		}

        public void RequestLightningList()
		{
            if(myOwnGun)
                lcv.Show();
        }


        public void SetButtonActivate(bool isActive)
        {
            minusBetButton.interactable = isActive;
            plusBetButton.interactable = isActive;
        }

        void UpdateOwnGunMove()
        {
            if (curMoveRate != 0f)
            {
                endingAngle = this.transform.transform.localEulerAngles.z;
                pv.UpdateOwnGunMove(new GunMove(gunSeatNum, curMoveRate, startingAngle, endingAngle));
                curMoveRate = 0f;
                startingAngle = endingAngle;
            }
        }

        void RequestFire()
        {
//			HideFuncPanel ();
            if (pv.userDict[gunSeatNum].balance < betValue)
            {
                return;
            }

            if (curShootInterval >= bulletShootInterval)
            {
				positionObj.SetActive (false);
                curShootInterval = 0f;
                pv.UpdateOwnGunShoot(new GunShoot(thisSeatInfo.playerId, thisGunType, this.transform.transform.localEulerAngles.z, betValue,0));
            }
        }

        public void PressFireButton(GunShoot gunShoot)
        {
			if (gunShoot.gunType == 6) {
				TriggerBombExplosion (gunShoot._shootId);
				return;
			}
			if (gunShoot.gunType < 3)
            {
				GameObject tempGo = (GameObject) Instantiate(myBulletPrefs[gunShoot.gunType-1], launcher.position, this.transform.transform.localRotation);
                Fish_BulletBehavior tempBullet = tempGo.GetComponent<Fish_BulletBehavior>();

                if (!flipC)
                    tempBullet.Init(this, currentGunType.transform.up, flipValue, gunShoot._shootId);
                else
                    tempBullet.Init(this, -currentGunType.transform.up, flipValue, gunShoot._shootId);

                bulletShotId = gunShoot._shootId;
                bulletList.Add(tempBullet);

                foreach (GameObject tempGun in gunType)
                {
                    if (tempGun.activeInHierarchy)
                    {
                        tempGun.GetComponentInChildren<Animator>().Play("fire", -1, 0f);
                    }
                }
            }

            if (gunShoot.gunType == 3)
            {

				if (gameArea.IsValidTarget (gunShoot.fishId)) { 
					GameObject tempGo = (GameObject) Instantiate(myBulletPrefs[gunShoot.gunType-1], launcher.position, this.transform.transform.localRotation);

					Fish_BulletBehavior tempBullet = tempGo.GetComponent<Fish_BulletBehavior>();
					Dictionary<int, int> fishTypeDic = gameArea.GetFishType;

					currentSelectedFish = null;
					currentSelectedDragon = null;
					currentSelectedBulbFish = null;
					currentSelectedCrocodile = null;

//					Debug.Log ("Own Selected : " + gunShoot.fishId);
					Dictionary<int, FishBehavior> fishBehavior = gameArea.GetFishBehavior;
					if (fishBehavior.ContainsKey (gunShoot.fishId)) {
						currentSelectedFish = fishBehavior [gunShoot.fishId];
						tempBullet.selectedFishObj = currentSelectedFish.gameObject;
						ProcessTouchInput(currentSelectedFish.gameObject.transform.position);
						//transform.LookAt (currentSelectedFish.gameObject.transform);
					}

					Dictionary<int, DragonBehavior> dragonBehavior = gameArea.GetDragonBehavior;
					if (dragonBehavior.ContainsKey (gunShoot.fishId)) {
						currentSelectedDragon = dragonBehavior [gunShoot.fishId];
//						tempBullet.
						tempBullet.selectedFishObj = currentSelectedDragon.ActiveGragonPart().gameObject;
						ProcessTouchInput(currentSelectedDragon.ActiveGragonPart().position);
						//transform.LookAt (currentSelectedFish.gameObject.transform);
					}
					Dictionary<int, BulbFishBehavior> bulbfishBehavior = gameArea.GetBulbFishBehavior;
					if (bulbfishBehavior.ContainsKey (gunShoot.fishId)) {
						currentSelectedBulbFish = bulbfishBehavior [gunShoot.fishId];
						tempBullet.selectedFishObj = currentSelectedBulbFish.gameObject;
						ProcessTouchInput(currentSelectedBulbFish.gameObject.transform.position);
						//transform.LookAt (currentSelectedFish.gameObject.transform);
					}
					Dictionary<int, CrocodileBehavior> crocodileBehavior = gameArea.GetCrocodileBehavior;
					if (crocodileBehavior.ContainsKey (gunShoot.fishId)) {
						currentSelectedCrocodile = crocodileBehavior [gunShoot.fishId];
						tempBullet.selectedFishObj = currentSelectedCrocodile.gameObject;
						ProcessTouchInput(currentSelectedCrocodile.gameObject.transform.position);
						//transform.LookAt (currentSelectedFish.gameObject.transform);
					}


					if (!flipC)
						tempBullet.Init(this, currentGunType.transform.up, flipValue, gunShoot._shootId);
					else
						tempBullet.Init(this, -currentGunType.transform.up, flipValue, gunShoot._shootId);

					bulletShotId = gunShoot._shootId;
					bulletList.Add(tempBullet);

					foreach (GameObject tempGun in gunType)
					{
						if (tempGun.activeInHierarchy)
						{
							tempGun.GetComponentInChildren<Animator>().Play("fire", -1, 0f);
						}
					}
				}


//                lightningShoot = true;
            }

            if (gunShoot.gunType > 3)
            {
                bulletShotId = gunShoot._shootId;
                FireSuperWeapon(new GunShoot(thisSeatInfo.playerId, thisGunType, this.transform.localEulerAngles.z, betValue), gunShoot._shootId);
            }
        }

        #endregion

        #region OtherPlayerGunArea

        public void Init(List<GunInfo> gunInfoList, int playerGunSeat, SeatInfo seatInfo)
        {
			positionObj.SetActive (false);
			checkIsSuperWeapon = false;
            this.thisSeatInfo = seatInfo;
            bulletList = new List<Fish_BulletBehavior>();
            gunInfoDict = new Dictionary<int, GunInfo>();
//			autoBtn.onClick.RemoveAllListeners ();

            for (int i = 0; i < gunInfoList.Count; i++)
            {
                gunInfoDict.Add(gunInfoList[i].type, gunInfoList[i]);
            }
//            updateRatio = 0f;
            flipValue = 1;
            _myOwnGun = false;
//            needUpdateMove = false;
            _gunSeatNum = thisSeatInfo.seatId;
            thisGunType = thisSeatInfo.gunType;

            foreach (GameObject tempGun in gunType)
            {
                tempGun.SetActive(false);
            }
			if (thisGunType == 3) {
				isAutoShoot = true;
			} else {
				isAutoShoot = false;
			}
            if (thisGunType < 4)
            {
                bulletShootInterval = gunInfoDict[thisGunType].shootingInterval;
                currentGunType = gunType[thisGunType - 1];
                currentGunType.SetActive(true);
            }
            else
            {
                if (thisGunType == 4)
                {
                    EquipDrill();
                }

                if (thisGunType == 5)
                {
                    EquipLaserGun();
                }
            }
            UpdateBetAmount(int.Parse(seatInfo.previosBetValue.ToString()));
			gun03DefaultObj.SetActive (true);
            SetButtonActivate(false);
            canvas.SetActive(true);
            this.gameObject.SetActive(true);
            if (seatInfo.seatId > 2)
                flipC = true;
        }

        public void UpdateThisGunPosition(GunMove gunMove)
        {
//            needUpdateMove = true;
//            updateRatio = 0f;
        }

        public void ThisGunFireBullet(GunShoot gunShoot)
        {
            UpdateBetAmount(int.Parse(gunShoot._betValue.ToString()));
            if (gunShoot.gunType < 3)
            {
                gameObject.transform.localEulerAngles = new Vector3(0f, 0f, gunShoot.shootAngle*flipValue);
				GameObject tempGo = Instantiate(bulletPrefs [gunShoot.gunType - 1], launcher.position, gameObject.transform.localRotation);


                Fish_BulletBehavior tempBullet = tempGo.GetComponent<Fish_BulletBehavior>();
				//tempBullet.selectedFishId = gunShoot.fishId; 

                if (!flipC)
                {
                    tempBullet.Init(this, gameObject.transform.up*flipValue, flipValue, gunShoot._shootId);
                }
                else
                {
                    tempBullet.Init(this, -gameObject.transform.up*flipValue, flipValue, gunShoot._shootId);
                }
                bulletList.Add(tempBullet);

//                foreach (Button btn in shotButton)
//                    btn.gameObject.SetActive(false);
				
				foreach (GameObject tempGun in gunType)
				{
					if (tempGun.activeInHierarchy)
					{
						tempGun.GetComponentInChildren<Animator>().Play("fire", -1, 0f);
					}
				}
            }
			if (gunShoot.gunType == 3) {
				gameObject.transform.localEulerAngles = new Vector3(0f, 0f, gunShoot.shootAngle*flipValue);
			}
            if (gunShoot.gunType > 3)
            {
                gameObject.transform.localEulerAngles = new Vector3(0f, 0f, gunShoot.shootAngle*flipValue);
                if (gunShoot.gunType == 4)
                {
                    drillC = false;
                    drillCount = 30;
                    drillBase.FireWeapon(gunShoot, myOwnGun, gunShoot._shootId, flipC);
                }
                if (gunShoot.gunType == 5)
                {
                    laserC = false;
                    laserCount = 30;
                    laserBase.FireWeapon(gunShoot, gunShoot._shootId, myOwnGun, flipC);
                }
            }
        }

        private bool otherFishC = false;
        private int otherFishId = 0;

        public void OtherPlayerLightning(int fishId)
        {
			selectedFishId = fishId;
//			Debug.Log ("Other Player Lightning! : " + fishId);
			GameObject tempGo = Instantiate(bulletPrefs [2], launcher.position, gameObject.transform.localRotation);
			Fish_BulletBehavior tempBullet = tempGo.GetComponent<Fish_BulletBehavior>();
			if (!flipC)
			{
				tempBullet.Init(this, gameObject.transform.up*flipValue, flipValue, fishId);
			}
			else
			{
				tempBullet.Init(this, -gameObject.transform.up*flipValue, flipValue, fishId);
			}
			bulletList.Add(tempBullet);

//			foreach (Button btn in shotButton)
//				btn.gameObject.SetActive(false);

			foreach (GameObject tempGun in gunType)
			{
				if (tempGun.activeInHierarchy)
				{
					tempGun.GetComponentInChildren<Animator>().Play("fire", -1, 0f);
				}
			}

			Dictionary<int, int> fishTypeDic = gameArea.GetFishType;
//			Debug.Log ("Other Player Lightning!2 : " + gameArea.IsValidTarget (selectedFishId));

			if (gameArea.IsValidTarget (selectedFishId)) { 
				currentSelectedFish = null;
				currentSelectedDragon = null;
				currentSelectedBulbFish = null;
				currentSelectedCrocodile = null;

//				Debug.Log ("Valid Fish : " + selectedFishId);
				Dictionary<int, FishBehavior> fishBehavior = gameArea.GetFishBehavior;
//				Debug.Log (fishBehavior.ContainsKey (selectedFishId));
				if (fishBehavior.ContainsKey (selectedFishId)) {
					currentSelectedFish = fishBehavior [selectedFishId];
					tempBullet.selectedFishObj = currentSelectedFish.gameObject;
				}

				Dictionary<int, DragonBehavior> dragonBehavior = gameArea.GetDragonBehavior;
				if (dragonBehavior.ContainsKey (selectedFishId)) {
					currentSelectedDragon = dragonBehavior [selectedFishId];
					tempBullet.selectedFishObj = currentSelectedDragon.ActiveGragonPart().gameObject;
				}
				Dictionary<int, BulbFishBehavior> bulbfishBehavior = gameArea.GetBulbFishBehavior;
				if (bulbfishBehavior.ContainsKey (selectedFishId)) {
					currentSelectedBulbFish = bulbfishBehavior [selectedFishId];
					tempBullet.selectedFishObj = currentSelectedBulbFish.gameObject;
				}
				Dictionary<int, CrocodileBehavior> crocodileBehavior = gameArea.GetCrocodileBehavior;
				if (crocodileBehavior.ContainsKey (selectedFishId)) {
					currentSelectedCrocodile = crocodileBehavior [selectedFishId];
					tempBullet.selectedFishObj = currentSelectedCrocodile.gameObject;
				}
					
			}


//            if (thisGunType == 3)
//            {
//                loopTime = 2;
//                otherFishId = fishId;
//                if (!otherFishC)
//                {
//                    otherFishC = true;
//                }
//            }
//            else
//            {
//                otherFishC = false;
//                currentSelectedFish = null;
//                lightningBase.ShotTarget(null, flipC);
//            }
        }

        void OtherPlayerLoopLightning()
        {
//            if (gameArea.IsValidTarget(otherFishId))
//            {
//                currentSelectedFish = null;
//                currentSelectedDragon = null;
//                currentSelectedTaco = null;
//                currentSelectedCrab = null;
//				currentSelectedBulbFish = null;
//				currentSelectedCrocodile = null;
//
//                Dictionary<int, FishBehavior> fishBehavior = gameArea.GetFishBehavior;
//                if (fishBehavior.ContainsKey(otherFishId))
//                {
//                    currentSelectedFish = fishBehavior[otherFishId];
//                }
//
//                Dictionary<int, DragonBehavior> dragonBehavior = gameArea.GetDragonBehavior;
//                if (dragonBehavior.ContainsKey(otherFishId))
//                {
//                    currentSelectedDragon = dragonBehavior[otherFishId];
//                }
//
//                Dictionary<int, TacoBehavior> tacoBehavior = gameArea.GetTacoBehavior;
//                if (tacoBehavior.ContainsKey(otherFishId))
//                {
//                    currentSelectedTaco = tacoBehavior[otherFishId];
//
//                }
//
//                Dictionary<int, CrabBehavior> crabBehavior = gameArea.GetCrabBehavior;
//                if (crabBehavior.ContainsKey(otherFishId))
//                {
//                    currentSelectedCrab = crabBehavior[otherFishId];
//                }
//
//				Dictionary<int, BulbFishBehavior> bulbFishBehavior = gameArea.GetBulbFishBehavior;
//				if (bulbFishBehavior.ContainsKey(otherFishId))
//				{
//					currentSelectedBulbFish = bulbFishBehavior[otherFishId];
//				}
//
//				Dictionary<int, CrocodileBehavior> crocodileBehavior = gameArea.GetCrocodileBehavior;
//				if (crocodileBehavior.ContainsKey(otherFishId))
//				{
//					currentSelectedCrocodile = crocodileBehavior[otherFishId];
//				}
//
//            }
//            else
//            {
//                otherFishC = false;
//                currentSelectedFish = null;
//                lightningBase.ShotTarget(null, flipC);
//                return;
//            }
//
//			bool selected = currentSelectedFish != null || currentSelectedDragon != null || currentSelectedTaco != null || currentSelectedCrab != null|| currentSelectedCrocodile != null|| currentSelectedBulbFish != null;
//
//            if (!selected)
//            {
//                otherFishC = false;
//                lightningBase.ShotTarget(null, flipC);
//                return;
//            }
//
//            Transform target = null;
//            if (currentSelectedFish != null)
//                target = currentSelectedFish.transform;
//
//            if (currentSelectedDragon != null)
//				target = currentSelectedDragon.ActiveGragonPart();
//
//            if (currentSelectedTaco != null)
//                target = currentSelectedTaco.GetTarget();
//
//            if (currentSelectedCrab != null)
//                target = currentSelectedCrab.transform;
//			if (currentSelectedBulbFish != null)
//				target = currentSelectedBulbFish.transform;
//			if (currentSelectedCrocodile != null)
//				target = currentSelectedCrocodile.transform;
//
//            lightningBase.ShotTarget(target, flipC);
//            vectorToTouch = target.position - transform.position;
//            shootAngle = Vector2.Angle(vectorToTouch.normalized, Vector2.up);
//            lightningBase.gameObject.SetActive(true);
//            if (!flipC)
//            {
//                if (shootAngle < 90f)
//                    shootAngle = 90f;
//
//                lightningBase.transform.localEulerAngles = new Vector3(0f, 0f, (vectorToTouch.x < 0f ? 1 : -1)*shootAngle);
//            }
//            else
//            {
//                lightningBase.transform.localEulerAngles = new Vector3(0f, 0f, (vectorToTouch.x < 0f ? 1 : -1)*shootAngle - 180);
//            }
//
//            if (curShootInterval >= bulletShootInterval)
//            {
//                curShootInterval = 0f;
//                if (currentSelectedFish != null)
//                {
//                    currentSelectedFish.HitFishEffect();
//                }
//
//                if (currentSelectedDragon != null)
//                {
//                    currentSelectedDragon.HitFishEffect();
//                }
//
//                if (currentSelectedTaco != null)
//                {
//                    currentSelectedTaco.HitFishEffect();
//                }
//
//                if (currentSelectedCrab != null)
//                {
//                    currentSelectedCrab.HitFishEffect();
//                }
//
//				if (currentSelectedCrocodile != null) {
//					currentSelectedCrocodile.HitFishEffect ();
//				}
//				if (currentSelectedBulbFish != null) {
//					currentSelectedBulbFish.HitFishEffect ();
//				}
//
//            }
        }

        public void OtherPlayerStopLightning()
        {
            otherFishC = false;
            lightningBase.ShotTarget(null, flipC);
        }

        private int tweenGunId = 0;
		private bool checkIsSuperWeapon;
        public void UpdateThisGunType(GunTypeChanged gunChanged)
        {
			HideFuncPanel ();
            thisGunType = gunChanged.gunType;



            _isControlLocked = false;
//			Debug.Log ("Update Gun Type1 :: " + thisGunType);
            if (thisGunType > 3)
            {
                if (!_myOwnGun)
                    return;

				if (thisGunType == 5) {
					checkIsSuperWeapon = true;
				}
//				Debug.Log ("Update THis Gun Type : " + thisGunType+" / " +_isControlLocked);
				curShootInterval = 0f;
				pv.UpdateOwnGunShoot(new GunShoot(thisSeatInfo.playerId, thisGunType, this.transform.transform.localEulerAngles.z, betValue,0));
//                foreach (Button btn in shotButton)
//                    btn.gameObject.SetActive(true);
            }
            else
            {
                _isBetLocked = false;
//                foreach (Button btn in shotButton)
//                    btn.gameObject.SetActive(false);

				if (!checkIsSuperWeapon) {
					foreach (GameObject tempGun in gunType)
					{
						tempGun.SetActive(false);
					}

					LeanTween.cancel(tweenGunId);
					currentGunType = gunType[thisGunType - 1];
					currentGunType.SetActive(true);
//					currentGunType.transform.Find("Gun").transform.localScale = new Vector3(2, 2, 2);
					tweenGunId = LeanTween.scale(currentGunType.transform.Find("Gun").gameObject, new Vector3(1, 1, 1), 0.5f).setOnComplete(()=>{
						_isChangeWeapon = false;
					}).id;
				}
				checkIsSuperWeapon = false;
                bulletShootInterval = gunInfoDict[thisGunType].shootingInterval;

				if (thisGunType == 3)
				{
					isAutoShoot = true;
					ResetAllSelected ();
					UpdateSelectedFishType (0);
					if(_myOwnGun)
					gun03SelectedMainObj.SetActive (true);
					gameObject.transform.localEulerAngles = new Vector3(0f, 0f, 0f);
					if (!_myOwnGun)
					{
						foreach (FishType obj in gun03SelectedObj)
						{
							obj.obj.SetActive(false);
						}
					}
				}
				else
				{
					//isAutoShoot = false;
					if(_myOwnGun)
					gun03SelectedMainObj.SetActive (false);
					gameObject.transform.localEulerAngles = new Vector3(0f, 0f, 0f);
					if (!_myOwnGun)
					{
						otherFishC = false;
					}
				}

				lightningBase.ShotTarget(null, flipC);
            }
        }

        public void DisposeBullet()
        {
            foreach (Fish_BulletBehavior bullet in bulletList)
            {
                if (bullet != null)
                {
                    Destroy(bullet.gameObject);
                }
            }

            bulletList = new List<Fish_BulletBehavior>();
        }
		public void DisposeBullet(Fish_BulletBehavior bullet){
			if (bulletList.Contains (bullet)) {
				bulletList.Remove (bullet);
			}
		}
        #endregion
    }
}
