using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace P8Games.Fish4
{
public class CrocodileBehavior : MonoBehaviour {

		public TargetObject.TargetInfo fish;

		private Animator[] crocodileAnimator;
		private Animator[] crocodileChildAnimator;
		private SpriteRenderer[] crocodileImage;
		private SpriteRenderer[] crocodileShadow;
		private CrocodileGroupBehavior gb;
		private PoolView pv;

		private Vector3 startPosition;
		private Vector3 endPosition;

		private int tweenId = -1;
		private int childTweenId = -1;
		private AnimationCurve hitCurve;
//		private int fishId = 0;
		private bool _isDeath = false;
		public GameObject dimBg;
		public bool isDeath
		{
			get { return _isDeath; }
		}
		void Awake()
		{
			SpriteRenderer[] crabSr = this.GetComponentsInChildren<SpriteRenderer>();
			crocodileAnimator = this.GetComponents<Animator>();
			crocodileChildAnimator = this.GetComponentsInChildren<Animator>();
			hitCurve = new AnimationCurve();
			hitCurve.AddKey(new Keyframe(0f, 0.3f, 0f, 0f));
			hitCurve.AddKey(new Keyframe(0.6f, 0.3f, 0f, 0f));
			hitCurve.AddKey(new Keyframe(1f, 1f, 0f, 0f));

			List<SpriteRenderer> ci = new List<SpriteRenderer>();
			List<SpriteRenderer> cs = new List<SpriteRenderer>();

			foreach (SpriteRenderer sr in crabSr)
			{
				if (sr.tag == "Shadow")
					cs.Add(sr);
				else
					ci.Add(sr);
			}

			crocodileImage = ci.ToArray();
			crocodileShadow = cs.ToArray();
		}

		public void InitCrocodile(TargetObject.TargetInfo fishInfo, CrocodileGroupBehavior gb, PoolView pv, int fishId)
		{
			fish = fishInfo;
//			this.fishId = fishId;
			this.gb = gb;
			this.pv = pv;

			if (fish.lifePoint <= 0)
			{
				gb.RemoveCrocodile(this);
			}
		}

		public void ShowAnimation()
		{
			_isDeath = false;
			if (dimBg != null)
				dimBg.SetActive (false);
			
			LeanTween.cancel(tweenId);

			foreach (Animator ca in crocodileAnimator)
			{
				ca.speed = 1;
				ca.Play("appear");
			}
			childTweenId = LeanTween.delayedCall (gameObject, 3f,()=>{
				foreach (Animator ca in crocodileChildAnimator)
				{
					ca.speed = 1;
					ca.Play("bite");
				}
			}).id;	

			foreach (SpriteRenderer ci in crocodileImage)
			{
				ci.color = new Color(1f, 1f, 1f, 1f);
			}

			foreach (Transform a in this.gameObject.transform)
			{
				foreach (Collider2D co in a.GetComponentsInChildren<Collider2D>())
				{
					co.enabled = true;
				}
			}
		}

		public void HideAnimation()
		{
			_isDeath = true;
			LeanTween.cancel(tweenId);
			LeanTween.cancel (childTweenId);
			gb.RemoveCrocodile(this);

			foreach (Collider2D co in gameObject.GetComponentsInChildren<Collider2D>())
				co.enabled = false;


//			foreach (Animator ca in crocodileAnimator)
//			{
//				ca.speed = 1;
//				ca.Play("fadeout");
//			}

			foreach (SpriteRenderer ci in crocodileImage)
			{
				ci.color = new Color(1f, 1f, 1f, 1f);
			}

			LeanTween.value(gameObject, 0f, 1f, 1f).setOnComplete(() =>
				{
					foreach (Animator ca in crocodileAnimator)
					{
						ca.speed = 1;
						ca.Play("null");
						gb.DisableGameObject();
					}
				});

		}

		public void Death(int playerId, TargetObject.TargetInfo deathInfo)
		{
			_isDeath = true;
			LeanTween.cancel(tweenId);
			LeanTween.cancel (childTweenId);

			foreach (Collider2D co in gameObject.GetComponentsInChildren<Collider2D>())
				co.enabled = false;

			foreach (SpriteRenderer ci in crocodileImage)
			{
				ci.color = Color.white;
			}

			foreach (Animator ca in crocodileAnimator)
			{
				ca.speed = 0;
			}

			LeanTween.value(gameObject, 1f, 0f, 1f).setOnUpdate((float t) =>
				{
					foreach (SpriteRenderer ci in crocodileImage)
					{
						ci.color = new Color(1f, 1f, 1f, t);
					}

					foreach (SpriteRenderer cs in crocodileShadow)
						cs.color = new Color(0f, 0f, 0f, t);
				}).setOnComplete(()=>
					{
						foreach (Animator ca in crocodileAnimator)
						{
							ca.speed = 1;
							ca.Play("null");
							gb.DisableGameObject();
						}
					});
			
			int seatId = pv.playerDict[playerId].seatId - 1;
			if (deathInfo.targetType > 300) {
				pv.gunList [seatId].PreBossBombExplose (transform.position,deathInfo.specialParam[2].AsInt,105);

			} else {
				pv.ShowCrocodilePayout (deathInfo.payout, playerId);
			}
			gb.RemoveCrocodile(this);
		}

		public void HitFishEffect()
		{
			LeanTween.cancel(tweenId);

			tweenId = LeanTween.value(gameObject, 0f, 1f, 0.7f).setOnUpdate((float t) =>
				{
					foreach (SpriteRenderer ci in crocodileImage)
					{
						ci.color = new Color(1f, t, t, 1f);
					}
				}).id;
		}
}
}