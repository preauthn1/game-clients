using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace P8Games.Fish4
{
    public class CrabBehavior : MonoBehaviour
    {
        public TargetObject.TargetInfo fish;

        private Animator[] crabAnimator;
		private Animator[] crabAnimatorChild;
        private SpriteRenderer[] crabImage;
        private SpriteRenderer[] crabShadow;
        private CrabGroupBehavior gb;
        private PoolView pv;

        private Vector3 startPosition;
        private Vector3 endPosition;

        private int tweenId = -1;
        private AnimationCurve hitCurve;
//        private int fishId = 0;
        private bool _isDeath = false;
		public GameObject dimBg;
        public bool isDeath
        {
            get { return _isDeath; }
        }

        void Awake()
        {
            SpriteRenderer[] crabSr = this.GetComponentsInChildren<SpriteRenderer>();
            crabAnimator = this.GetComponentsInParent<Animator>();
			crabAnimatorChild = this.GetComponentsInChildren<Animator>();

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

            crabImage = ci.ToArray();
            crabShadow = cs.ToArray();
        }

        public void InitCrab(TargetObject.TargetInfo fishInfo, CrabGroupBehavior gb, PoolView pv, int fishId)
        {
            fish = fishInfo;
//            this.fishId = fishId;
            this.gb = gb;
            this.pv = pv;

            if (fish.lifePoint <= 0)
            {
                gb.RemoveCrab(this);
            }
        }

        public void ShowAnimation()
        {
			if (dimBg != null)
				dimBg.SetActive (false);
			
            _isDeath = false;

            LeanTween.cancel(tweenId);

            foreach (Animator ca in crabAnimator)
            {
                ca.speed = 1;
                ca.Play("appear");
            }

            foreach (SpriteRenderer ci in crabImage)
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

            gb.RemoveCrab(this);

            foreach (Collider2D co in gameObject.GetComponentsInChildren<Collider2D>())
                co.enabled = false;

            foreach (Animator ca in crabAnimator)
            {
                ca.speed = 1;
                ca.Play("fadeout");
            }

            foreach (SpriteRenderer ci in crabImage)
            {
                ci.color = new Color(1f, 1f, 1f, 1f);
            }

            LeanTween.value(gameObject, 0f, 1f, 1f).setOnComplete(() =>
            {
                foreach (Animator ca in crabAnimator)
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

            foreach (Collider2D co in gameObject.GetComponentsInChildren<Collider2D>())
                co.enabled = false;

            foreach (SpriteRenderer ci in crabImage)
            {
                ci.color = Color.white;
            }

            foreach (Animator ca in crabAnimator)
            {
                ca.speed = 0;
            }
			foreach (Animator ca in crabAnimatorChild)
			{
				ca.Play("die");
			}

			LeanTween.delayedCall (gameObject, 2f, () => {
				LeanTween.value(gameObject, 1f, 0f, 1f).setOnUpdate((float t) =>
					{
						foreach (SpriteRenderer ci in crabImage)
						{
							ci.color = new Color(1f, 1f, 1f, t);
						}

						foreach (SpriteRenderer cs in crabShadow)
							cs.color = new Color(0f, 0f, 0f, t);
					}).setOnComplete(()=>
						{
							foreach (Animator ca in crabAnimator)
							{
								ca.speed = 1;
								ca.Play("null");
								gb.DisableGameObject();
							}
						});
			});
			
			int seatId = pv.playerDict[playerId].seatId - 1;
			if (deathInfo.targetType > 300) {
				pv.gunList [seatId].PreBossBombExplose (transform.position,deathInfo.specialParam[2].AsInt,101);

			} else {
				pv.ShowCrabPayout (deathInfo.payout, playerId);
			}

            gb.RemoveCrab(this);
        }

        public void HitFishEffect()
        {
            LeanTween.cancel(tweenId);

            tweenId = LeanTween.value(gameObject, 0f, 1f, 0.7f).setOnUpdate((float t) =>
            {
                foreach (SpriteRenderer ci in crabImage)
                {
                    ci.color = new Color(1f, t, t, 1f);
                }
            }).id;
        }
    }
}
