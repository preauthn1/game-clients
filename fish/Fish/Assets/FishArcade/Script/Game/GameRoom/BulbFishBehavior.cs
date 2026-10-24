using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace P8Games.Fish
{
public class BulbFishBehavior : MonoBehaviour {

		public TargetObject.TargetInfo fish;
		public GameObject selfLight;
		private Animator[] bulbFishAnimator;
//		private Animator[] bulbChildAnimator;
		private SpriteRenderer[] bulbFishImage;
		private SpriteRenderer[] bulbFishShadow;
		private BulbFishGroupBehavior gb;
		private PoolView pv;

		private Vector3 startPosition;
		private Vector3 endPosition;

		private int tweenId = -1;
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
			bulbFishAnimator = this.GetComponents<Animator>();
//			bulbChildAnimator = this.GetComponentsInChildren<Animator>();
			hitCurve = new AnimationCurve();
			hitCurve.AddKey(new Keyframe(0f, 0.3f, 0f, 0f));
			hitCurve.AddKey(new Keyframe(0.6f, 0.3f, 0f, 0f));
			hitCurve.AddKey(new Keyframe(1f, 1f, 0f, 0f));

			List<SpriteRenderer> ci = new List<SpriteRenderer>();
			List<SpriteRenderer> cs = new List<SpriteRenderer>();

			foreach (SpriteRenderer sr in crabSr)
			{ 
				if (sr.gameObject.name != "Light") {
					if (sr.tag == "Shadow")
						cs.Add(sr);
					else
						ci.Add(sr);
				}
			}

			bulbFishImage = ci.ToArray();
			bulbFishShadow = cs.ToArray();
		}

		public void InitBulbFish(TargetObject.TargetInfo fishInfo, BulbFishGroupBehavior gb, PoolView pv, int fishId)
		{
			fish = fishInfo;
//			this.fishId = fishId;
			this.gb = gb;
			this.pv = pv;

			if (fish.lifePoint <= 0)
			{
				gb.RemoveBulbFish(this);
			}
		}

		public void ShowAnimation()
		{
			_isDeath = false;

			LeanTween.cancel(tweenId);

			foreach (Animator ca in bulbFishAnimator)
			{
				ca.speed = 1;
				ca.Play("appear");
			}

			foreach (SpriteRenderer ci in bulbFishImage)
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

			if (selfLight != null) {
				selfLight.SetActive (true);
			}

			if (dimBg != null)
				dimBg.SetActive (false);
		}

		public void HideAnimation()
		{
			_isDeath = true;
			LeanTween.cancel(tweenId);

			gb.RemoveBulbFish(this);

			foreach (Collider2D co in gameObject.GetComponentsInChildren<Collider2D>())
				co.enabled = false;

			foreach (Animator ca in bulbFishAnimator)
			{
				ca.speed = 1;
				ca.Play("fadeout");
			}

			foreach (SpriteRenderer ci in bulbFishImage)
			{
				ci.color = new Color(1f, 1f, 1f, ci.color.a);
			}

			LeanTween.value(gameObject, 0f, 1f, 1f).setOnComplete(() =>
				{
					foreach (Animator ca in bulbFishAnimator)
					{
						ca.speed = 1;
						ca.Play("null");
						gb.DisableGameObject();
					}
				});

			if (selfLight != null) {
				selfLight.SetActive (false);
			}
			if (dimBg != null)
				dimBg.SetActive (true);
		}

		public void Death(int playerId, TargetObject.TargetInfo deathInfo)
		{
			_isDeath = true;
			LeanTween.cancel(tweenId);

			foreach (Collider2D co in gameObject.GetComponentsInChildren<Collider2D>())
				co.enabled = false;

			foreach (SpriteRenderer ci in bulbFishImage)
			{
				ci.color = Color.white;
			}

			foreach (Animator ca in bulbFishAnimator)
			{
				ca.speed = 0;
			}

			LeanTween.value(gameObject, 1f, 0f, 1f).setOnUpdate((float t) =>
				{
					foreach (SpriteRenderer ci in bulbFishImage)
					{
						ci.color = new Color(1f, 1f, 1f, t);
					}

					foreach (SpriteRenderer cs in bulbFishShadow)
						cs.color = new Color(0f, 0f, 0f, t);
				}).setOnComplete(()=>
					{
						foreach (Animator ca in bulbFishAnimator)
						{
							ca.speed = 1;
							ca.Play("null");
							gb.DisableGameObject();
						}
					});

			pv.ShowBulbFishPayout(deathInfo.payout, playerId);

			gb.RemoveBulbFish(this);

			if (selfLight != null) {
				selfLight.SetActive (false);
			}
			if (dimBg != null)
				dimBg.SetActive (true);
		}

		public void HitFishEffect()
		{
			LeanTween.cancel(tweenId);

			tweenId = LeanTween.value(gameObject, 0f, 1f, 0.7f).setOnUpdate((float t) =>
				{
					foreach (SpriteRenderer ci in bulbFishImage)
					{
						ci.color = new Color(1f, t, t, 1f);
					}
				}).id;
		}
}
}
