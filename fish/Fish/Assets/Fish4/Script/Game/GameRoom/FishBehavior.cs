using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using UnityEngine.UI;

namespace P8Games.Fish4
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

//		private Fish_GameAreaBehavior gameArea;
		public Text[] payTextsArr;
		public bool isDeath
		{
			get { return _isDeath; }
		}

		void Awake()
		{
//			gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
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
				//				Debug.Log (fish.specialType + " appear in game !!!, " + gameObject.name);
				if (fish.specialType == 9) {
					//					specialEffectObj [0].SetActive (true);
				}
				else if(specialEffectObj [fish.specialType - 7]!=null )
					specialEffectObj [fish.specialType - 7].SetActive (true);
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
			pv.gameArea.RemoveType(deathFish.targetId);
			gb.RemoveFish(this);
			_isDeath = true;
			_playerId = playerId;
			_deathFish = deathFish;
		}
		public void SpecialDie(){
			Death (_playerId,_deathFish);
		}
		public Animator moveAnimator;
		public Animator groupMoveAnimator;
		public PathPatternMove ppm; 
		public bool getSpecialPath;

		public void OnEnable(){
			if (getSpecialPath) {
				if (gb != null) {
					string path = gb.GetSpecialPathId ();
					moveAnimator.Play (path);
				}
			}
		}

		public void Death(int playerId, TargetObject.TargetInfo deathFish)
		{
			pv.gameArea.RemoveType(deathFish.targetId);
			_isDeath = true;

			LeanTween.cancel(tweenId);

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
				pv.gunList [seatId].SendSpecialFish (fish.specialType);
				if (specialEffectObj.Length!=0) {
					if (fish.specialType == 9) {

					}
					else if(specialEffectObj [fish.specialType - 7]!=null)
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


//					moveAnimator.enabled = false;
//					moveAnimator.speed = 0;
					moveAnimator.Rebind ();
					moveAnimator.Play ("null");
//					moveAnimator.Play (nameHash, 0, time);
				}
				if (groupMoveAnimator != null) {
					float time = groupMoveAnimator.GetCurrentAnimatorStateInfo(0).normalizedTime;
					int nameHash = groupMoveAnimator.GetCurrentAnimatorStateInfo(0).fullPathHash;

					groupMoveAnimator.Rebind ();
					groupMoveAnimator.Play (nameHash, 0, time);
				}

				if (ppm != null) {
					ppm.isDeath = true;
				}

				transform.SetParent(pv.fishHolder.transform, true);
				foreach (Animator fa in fishAnimator)
				{
					fa.Play("death");
				}

				gameObject.transform.position = position;
				gameObject.transform.rotation = rotation;

				GameObject payoutText = null;
				Text text;
				if (payTextsArr.Length != 0) {
					if (pv.CheckIsPlayer (playerId)) {
						payTextsArr [0].gameObject.SetActive (true);
						text = payTextsArr[0];
						payTextsArr[0].transform.rotation = Quaternion.identity;
//						payTextsArr[0].transform.localScale = Vector3.one;
					} else {
						payTextsArr [1].gameObject.SetActive (true);
						text = payTextsArr[1];
						payTextsArr[1].transform.rotation = Quaternion.identity;
//						payTextsArr[1].transform.localScale = Vector3.one;
					}
				} else {
					
				}

				int numCoin = 3;
				if(fishType >= 14 && fishType < 100){
					
//					payoutText.transform.localScale = Vector3.one;
					GameObject tempEx = Instantiate(pv.coinExplosive);
					tempEx.transform.localPosition = position;
					if (tempEx != null)
						Destroy(tempEx, 3f);


					LeanTween.delayedCall(gameObject, 1.0f, () =>
						{
							LeanTween.move (gameObject, pv.gunList [seatId].GetFishMovePos(fishType).position, 1).setOnComplete(() =>
								{
									
									payoutText = GameObject.Instantiate(pv.ReturnPayoutText(playerId));
									payoutText.transform.position = gameObject.transform.position;
									payoutText.transform.localRotation = Quaternion.identity;
									//				payoutText.transform.localScale = Vector3.one;
									text = payoutText.GetComponentInChildren<Text>();
									payoutText.transform.SetParent (this.gameObject.transform);
									text.text = "0";

									LeanTween.delayedCall(gameObject, 0.2f, () =>
										{
									LeanTween.value(gameObject, 0f, 1f, 1.5f).setOnUpdate((float t) =>
										{
											text.text = (deathFish.payout*t).ToString("###,###,###,##0");
										}).setOnComplete(() =>
											{
												text.GetComponent<Animator>().Play("play");
												text.text = deathFish.payout.ToString("###,###,###,##0");
											});
										});
									if (payoutText != null)
										Destroy(payoutText, 2.7f);
									StartCoroutine(EnableDieEffect(numCoin,position, playerId, seatId,deathFish.payout));

								});
						});
					
					numCoin = 6;
				}else{
					payoutText = GameObject.Instantiate(pv.ReturnPayoutText(playerId));
					payoutText.transform.position = gameObject.transform.position;
					payoutText.transform.localRotation = Quaternion.identity;
					//				payoutText.transform.localScale = Vector3.one;
					text = payoutText.GetComponentInChildren<Text>();

					if (fishType < 14) {
						payoutText.transform.localScale = new Vector3 (0.7f, 0.7f, 0.7f);
					}
//					text.text = "0";
					text.text = deathFish.payout.ToString("###,###,###,##0");
					text.GetComponent<Animator>().Play("play1");
//					LeanTween.value(gameObject, 0f, 1f, 1.5f).setOnUpdate((float t) =>
//						{
//							text.text = (deathFish.payout*t).ToString("###,###,###,##0");
//						}).setOnComplete(() =>
//							{
//								
//								text.GetComponent<Animator>().Play("play1");
//								text.text = deathFish.payout.ToString("###,###,###,##0");
//							});
					
					LeanTween.delayedCall(gameObject, delayFadeOutTime, () =>
						{
							for (int i = 0; i < numCoin; i++)
							{
								StartCoroutine (flyCoin (i, position, playerId, seatId,deathFish.payout));
							}
							LeanTween.value(gameObject, 1f, 0f, 0.5f).setOnUpdate((float value) =>
								{
									foreach (SpriteRenderer sr in fishImage)
										sr.color = new Color(1f, 1f, 1f, value);

									foreach (SpriteRenderer sr in fishShadow)
										sr.color = new Color(0f, 0f, 0f, value);
								});

						});
					if (gameObject != null)
						Destroy(gameObject, 6f);
					if (payoutText != null)
						Destroy(payoutText, 3f);
				}
				gb.RemoveFish(this);
			}
		}
		public float delayFadeOutTime = 2.5f;
		IEnumerator flyCoin(int i,Vector3 position,int playerId,int seatId,double payout){
			float delay = i * 0.2f;
			yield return new WaitForSeconds(delay);
			GameObject tempCoin = Instantiate(pv.CheckPlayerCoin(playerId));
			GameObject paytext = pv.ReturnPayoutText (playerId);
			tempCoin.transform.localPosition = new Vector3(position.x+UnityEngine.Random.Range(0f,1.5f),position.y,position.z);
//			tempCoin.transform.SetParent(this.gameObject.transform);
			LeanTween.moveY(tempCoin, (position.y + 1), 0.3f).setOnComplete(() =>
				{
					LeanTween.moveY(tempCoin, (position.y), 0.3f).setOnComplete(() =>
						{
							LeanTween.moveY(tempCoin, (position.y + 0.5f), 0.3f).setOnComplete(() =>
								{
									
									LeanTween.move(tempCoin, pv.userList[seatId].coinPos.transform.position, 0.3f).setOnComplete(()=>{
										if(i==0){
											pv.userList[seatId].PlayWinEffect();
											pv.userList[seatId].PlayAddCoinEffect(paytext,payout);
										}
										tempCoin.transform.localScale = new Vector3(0.5f,0.5f,0.5f);
										LeanTween.cancel(tempCoin);
									});
								});
						});
				});
			Destroy(tempCoin,1.3f);
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

		IEnumerator EnableDieEffect(int numCoin,Vector3 position,int playerId,int seatId,double payout){
			
//			Debug.Log ("Die Effect 1");
			yield return new WaitForSeconds (2.5f);
			for (int i = 0; i < numCoin; i++)
			{
				StartCoroutine (flyCoin (i, transform.position, playerId, seatId,payout));
			}
			Vector3 size = transform.localScale;
			InvokeRepeating ("Rotate", 0.05f, 0.02f);
			LeanTween.value(gameObject, 1f, 0f, 2f).setOnUpdate((float value) =>
				{
					transform.localScale = new Vector3(size.x*value,size.y*value,size.z*value);
					foreach (SpriteRenderer sr in fishImage)
						sr.color = new Color(1f, 1f, 1f, value);

					foreach (SpriteRenderer sr in fishShadow)
						sr.color = new Color(0f, 0f, 0f, value);
				});	
			
			if (gameObject != null)
				Destroy(gameObject, 4f);
		}

		void OnDisable(){
			CancelInvoke ("Rotate");
		}
		public void Rotate(){
			this.transform.Rotate(Vector3.back * 10);
		}	
	}
}
