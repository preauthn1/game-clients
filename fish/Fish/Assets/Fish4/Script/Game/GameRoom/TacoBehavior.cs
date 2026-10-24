using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace P8Games.Fish4
{
    public class TacoBehavior : MonoBehaviour
    {
        public TargetObject.TargetInfo fish;

        private SpriteRenderer tacoImage;
        private Animator[] tacoAnimator;
        private TacoGroupBehavior gb;
        private PoolView pv;

        private Vector3 startPosition;
        private Vector3 endPosition;

        private int tweenId = -1;
        private AnimationCurve hitCurve;
//        private int fishId = 0;
        private bool _isDeath = false;

        public bool isDeath
        {
            get { return _isDeath; }
        }

		public GameObject dimBg;

		void Awake()
        {
            tacoImage = this.transform.Find("TacoTarget").GetComponentInChildren<SpriteRenderer>();
            tacoAnimator = this.GetComponentsInChildren<Animator>();

            hitCurve = new AnimationCurve();
            hitCurve.AddKey(new Keyframe(0f, 0.3f, 0f, 0f));
            hitCurve.AddKey(new Keyframe(0.6f, 0.3f, 0f, 0f));
            hitCurve.AddKey(new Keyframe(1f, 1f, 0f, 0f));
        }

        public Transform GetTarget()
        {
            return tacoImage.transform;
        }

        public void InitTaco(TargetObject.TargetInfo fishInfo, TacoGroupBehavior gb, PoolView pv, int fishId)
        {
            fish = fishInfo;
//            this.fishId = fishId;
            this.gb = gb;
            this.pv = pv;

            if (fish.lifePoint <= 0)
            {
                gb.RemoveTaco(this);
            }
        }

        public void ShowAnimation()
        {
			if (dimBg != null)
				dimBg.SetActive (false);
            _isDeath = false;

            tacoImage.color = new Color(1f, 1f, 1f, 1f);

            foreach (Animator ta in tacoAnimator)
            {
                ta.speed = 1;
                ta.Play("appear");
            }
        }

        public void HideAnimation()
        {
            _isDeath = true;
            LeanTween.cancel(tweenId);

            foreach (Collider2D co in gameObject.GetComponentsInChildren<Collider2D>())
                co.enabled = false;

            tacoImage.color = new Color(1f, 1f, 1f, 1f);

            foreach (Animator ta in tacoAnimator)
            {
                ta.speed = 1;
                ta.Play("hide");
            }



            LeanTween.value(gameObject, 0f, 1f, 1f).setOnComplete(() =>
            {
                foreach (Animator ta in tacoAnimator)
                {
                    ta.Play("null");
                    gb.RemoveTaco(this);
                }

                gb.DisableGameObject();
            });

        }

		public void Death(int playerId, TargetObject.TargetInfo deathInfo)
        {
            _isDeath = true;
            LeanTween.cancel(tweenId);

            foreach (Collider2D co in gameObject.GetComponentsInChildren<Collider2D>())
                co.enabled = false;

            tacoImage.color = Color.white;

            foreach (Animator ta in tacoAnimator)
            {
                ta.speed = 0;
            }

            LeanTween.value(gameObject, 1f, 0f, 1f).setOnUpdate((float t) =>
            {
                tacoImage.color = new Color(1f, 1f, 1f, t);
            });

            foreach (Animator ta in tacoAnimator)
            {
                ta.speed = 1;
                ta.Play("null");
            }

			int seatId = pv.playerDict[playerId].seatId - 1;
			if (deathInfo.targetType > 300) {
				pv.gunList [seatId].PreBossBombExplose (transform.position,deathInfo.specialParam[2].AsInt,103);

			} else {
				pv.ShowTacoPayout (deathInfo.payout, playerId);
			}
            gb.RemoveTaco(this);
            gb.DisableGameObject();
        }

        public void HitFishEffect()
        {
            LeanTween.cancel(tweenId);

            tweenId = LeanTween.value(gameObject, 0f, 1f, 0.7f).setOnUpdate((float t) =>
            {
                float value = hitCurve.Evaluate(t);
                tacoImage.color = new Color(1f, value, value, 1f);
            }).id;
        }
    }
}
