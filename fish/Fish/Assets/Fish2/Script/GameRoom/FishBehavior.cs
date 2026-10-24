using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using UnityEngine.UI;

namespace P8Games.MicroFish
{
    public class FishBehavior : MonoBehaviour
    {
        [SerializeField] public int fishType;

        public int FishType
        {
            get { return fishType; }
        }

        public TargetObject.TargetInfo fish;

        private SpriteRenderer[] fishImage;
        private SpriteRenderer[] fishShadow;
        private Animator[] fishAnimator;
        private GroupBehavior gb;
        private PoolView pv;

        private Vector3 startPosition;
        private Vector3 endPosition;

        private int tweenId = -1;
        private AnimationCurve hitCurve;

        private bool _isDeath = false;

        private Fish_GameAreaBehavior gameArea;

        public bool isDeath
        {
            get { return _isDeath; }
        }

		public Animator moveAnimator;
		public bool testing;
		public GameObject lockIcon;
        void Awake()
        {
            SpriteRenderer[] fishSr = this.GetComponentsInChildren<SpriteRenderer>();

            fishAnimator = this.GetComponentsInChildren<Animator>();

            hitCurve = new AnimationCurve();
            hitCurve.AddKey(new Keyframe(0f, 0.3f, 0f, 0f));
            hitCurve.AddKey(new Keyframe(0.6f, 0.3f, 0f, 0f));
            hitCurve.AddKey(new Keyframe(1f, 1f, 0f, 0f));
            LeanTween.init(5000);

            List<SpriteRenderer> fi = new List<SpriteRenderer>();
            List<SpriteRenderer> fs = new List<SpriteRenderer>();

            foreach (SpriteRenderer sr in fishSr)
            {
                if (sr.tag == "Shadow")
                    fs.Add(sr);
                else
                    fi.Add(sr);
            }

            fishImage = fi.ToArray();
            fishShadow = fs.ToArray();

			if (lockIcon != null)
				lockIcon.SetActive (false);
        }

		public GameObject[] specialEffectObj;

        public void InitFish(TargetObject.TargetInfo fishInfo, GroupBehavior gb, PoolView pv)
        {
            fish = fishInfo;
            this.gb = gb;
            this.pv = pv;

            if (fish.lifePoint <= 0)
            {
                gb.RemoveFish(this);
            }

			if (fish.specialType >= 6 && specialEffectObj.Length!=0) {
				if(specialEffectObj [fish.specialType - 7]!=null)
				specialEffectObj [fish.specialType - 7].SetActive (true);
			}
			if (fishInfo.targetId == 0) {
				Debug.Log ("fish id = 0 : " +gameObject.name); 
				Debug.Log ("Fish type : " + fishType);
				Debug.Log ("Parent ： " + gameObject.transform.parent.name);
			}
        }

        public void SpeedUpAnimation()
        {
            _isDeath = true;

            if (gameObject == null)
                return;

            foreach (Animator fa in fishAnimator)
            {
                if(fa != null)
                    fa.speed = 3;
            }

            LeanTween.cancel(tweenId);

            foreach (Collider2D co in gameObject.GetComponentsInChildren<Collider2D>())
            {
                if (gameObject != null)
                {
                    co.enabled = false;
                }
            }

            LeanTween.value(gameObject, 1f, 0f, 0.5f).setOnUpdate((float value) =>
            {
                foreach (SpriteRenderer sr in fishImage)
                    sr.color = new Color(1f, 1f, 1f, value);

                foreach (SpriteRenderer sr in fishShadow)
                    sr.color = new Color(0f, 0f, 0f, value);

                
            }).setOnComplete(() =>
            {
                gb.RemoveFish(this);
            });

        }
		int _playerId = 0;
		TargetObject.TargetInfo _deathFish;
		public void StoreDeathInfo(int playerId, TargetObject.TargetInfo deathFish){
			if(gameArea==null)
				gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
			gameArea.RemoveType(deathFish.targetId);
			gb.RemoveFish(this);
			_isDeath = true;
			_playerId = playerId;
			_deathFish = deathFish;
		}
		public void SpecialDie(){
			Death (_playerId,_deathFish);
		}
        public void Death(int playerId, TargetObject.TargetInfo deathFish)
        {
			lockIcon.SetActive (false);
			if(gameArea==null)
				gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
			
            gameArea.RemoveType(deathFish.targetId);
            _isDeath = true;

            LeanTween.cancel(tweenId);
			if (lockTween != 0)
			LeanTween.cancel (lockTween);

            if (gameObject == null)
                return;

            foreach (Collider2D co in gameObject.GetComponentsInChildren<Collider2D>())
                co.enabled = false;

            foreach (SpriteRenderer sr in fishImage)
                sr.color = Color.white;

            if (!pv.playerDict.ContainsKey(playerId))
                return;

            int seatId = pv.playerDict[playerId].seatId - 1;


			if (fish.specialType >= 6 && specialEffectObj.Length!=0) {
				pv.gunList [seatId].SendSpecialFish ();
				if (specialEffectObj.Length!=0) {
					if(specialEffectObj [fish.specialType - 7]!=null)
						specialEffectObj [fish.specialType - 7].SetActive (false);
				}
			}

            if (deathFish.targetType == 201)
            {
                pv.gunList[seatId].EquipDrill();

                if (gameObject != null)
                    Destroy(gameObject);
            }
            else if (deathFish.targetType == 202)
            {
                pv.gunList[seatId].EquipLaserGun();

                if (gameObject != null)
                    Destroy(gameObject);
            }
            else if (deathFish.targetType == 203)
            {
				pv.gunList [seatId].PreBombExplose (transform.position,deathFish.specialParam[2].AsInt);
				if (gameObject != null)
					Destroy(gameObject);
            }
            else
            {

                Vector3 position = transform.position;
                Quaternion rotation = transform.rotation;

				gameObject.name = gameObject.name +"_die";
				if (moveAnimator != null) {
					float time = moveAnimator.GetCurrentAnimatorStateInfo(0).normalizedTime;
					int nameHash = moveAnimator.GetCurrentAnimatorStateInfo(0).fullPathHash;

					moveAnimator.Rebind ();
					moveAnimator.Play (nameHash, 0, time);
				}

				transform.SetParent (pv.fishHolder.transform, true);

                foreach (Animator fa in fishAnimator)
                {
                    fa.Play("death");
                }

                gameObject.transform.position = position;
                gameObject.transform.rotation = rotation;

                GameObject payoutText = GameObject.Instantiate(pv.ReturnPayoutText(seatId));
                payoutText.transform.position = gameObject.transform.position;
                payoutText.transform.localRotation = Quaternion.identity;
                payoutText.transform.localScale = Vector3.one;

                Text text = payoutText.GetComponentInChildren<Text>();

                LeanTween.value(gameObject, 0f, 1f, 1f).setOnUpdate((float t) =>
                {
                    text.text = "+"+(deathFish.payout*t).ToString("###,###,###,##0");
                }).setOnComplete(() =>
                {
					text.text = "+"+deathFish.payout.ToString("###,###,###,##0");
                });

//                LeanTween.delayedCall(gameObject, 1.0f, () =>
//                {
//                    LeanTween.value(gameObject, 1f, 0f, 0.5f).setOnUpdate((float value) =>
//                    {
//                        foreach (SpriteRenderer sr in fishImage)
//                            sr.color = new Color(1f, 1f, 1f, value);
//
//                        foreach (SpriteRenderer sr in fishShadow)
//                            sr.color = new Color(0f, 0f, 0f, value);
//                    });
//                });

                for (int i = 0; i < 5; i++)
                {
					GameObject tempCoin = Instantiate(pv.ReturnCoin(seatId));
                    tempCoin.transform.localPosition = position;
//                    tempCoin.transform.parent = this.gameObject.transform;

					float delayTime = i * 0.1f;
					LeanTween.delayedCall(gameObject, delayTime , () =>
                    {
                        LeanTween.moveY(tempCoin, (position.y + 1), 0.3f).setOnComplete(() =>
                        {
                            LeanTween.move(tempCoin, pv.userList[seatId].transform.position, 0.3f);
                        });
                    });
					Destroy(tempCoin,delayTime+0.6f);
                }

                gb.RemoveFish(this);
                if (gameObject != null)
                    Destroy(gameObject, 1.5f);
                if (payoutText != null)
                    Destroy(payoutText, 1.5f);


				if (fishType == 201 || fishType == 202 || fishType == 203) {
					pv.ShowTacoPayout (deathFish.payout, playerId);
				} else if (fishType == 16 || fishType == 15) {
					pv.ShowCrabPayout (deathFish.payout, playerId);
					GameObject tempCoin = Instantiate(pv.BurstCoin(seatId));
					tempCoin.transform.localPosition = position;
					Destroy(tempCoin,5f);
				} else if (fishType == 17) {
					pv.ShowDragonPayout (deathFish.payout, playerId);
					GameObject tempCoin = Instantiate(pv.BurstCoin(seatId));
					tempCoin.transform.localPosition = position;
					Destroy(tempCoin,5f);
				}
            }
        }

        public void HitFishEffect()
        {
            LeanTween.cancel(tweenId);

            tweenId = LeanTween.value(gameObject, 0f, 1f, 0.7f).setOnUpdate((float t) =>
            {
                float value = hitCurve.Evaluate(t);
                foreach (SpriteRenderer sr in fishImage)
                    sr.color = new Color(1f, value, value, 1f);
            }).id;
        }

		public void Die(){
			gameObject.name = gameObject.name +"_die";
			GameObject test = GameObject.Find ("Main Camera");
			transform.SetParent (test.transform, true);
			Vector3 position = transform.position;
			Quaternion rotation = transform.rotation;
			if (moveAnimator != null) {
				float time = moveAnimator.GetCurrentAnimatorStateInfo(0).normalizedTime;
				int nameHash = moveAnimator.GetCurrentAnimatorStateInfo(0).fullPathHash;

				moveAnimator.Rebind ();
				moveAnimator.Play (nameHash, 0, time);
			}
			gameObject.transform.position = position;
			gameObject.transform.rotation = rotation;
		} 

		int lockTween = 0;
		public void EnableLockIcon(){
//			lockTimer = 0f;
			if (lockTween != 0)
				LeanTween.cancel (lockTween);
			if(!_isDeath)
			lockIcon.SetActive (true);

			lockTween = LeanTween.delayedCall (gameObject, 0.35f, () => {
				if(lockIcon!=null)
				lockIcon.SetActive (false);
			}).id;
		}
//		float lockTimer = 0f;
//		void FixedUpdate(){
//			if (lockIcon!= null && lockIcon.activeInHierarchy) {
////				Debug.Log ("Lock!!!");
//				lockTimer += Time.deltaTime;
//				if (lockTimer > 0.35f) {
//					lockIcon.SetActive (false);
//				}
//			}
//		}
    }
}
