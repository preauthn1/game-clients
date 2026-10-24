using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace P8Games.Fish
{
    public class DragonBehavior : MonoBehaviour
    {

        public TargetObject.TargetInfo fish;

        private SpriteRenderer[] dragonImage;
        private SpriteRenderer[] dragonShadow;
        private Animator[] dragonAnimator;
        private DragonGroupBehavior gb;
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
            SpriteRenderer[] dragonSr = this.GetComponentsInChildren<SpriteRenderer>();
            dragonAnimator = this.GetComponentsInChildren<Animator>();

            hitCurve = new AnimationCurve();
            hitCurve.AddKey(new Keyframe(0f, 0.3f, 0f, 0f));
            hitCurve.AddKey(new Keyframe(0.6f, 0.3f, 0f, 0f));
            hitCurve.AddKey(new Keyframe(1f, 1f, 0f, 0f));

            List<SpriteRenderer> di = new List<SpriteRenderer>();
            List<SpriteRenderer> ds = new List<SpriteRenderer>();

            foreach (SpriteRenderer sr in dragonSr)
            {
                if (sr.tag == "Shadow")
                    ds.Add(sr);
                else
                    di.Add(sr);
            }

            dragonImage = di.ToArray();
            dragonShadow = ds.ToArray();
        }

        public void InitDragon(TargetObject.TargetInfo fishInfo, DragonGroupBehavior gb, PoolView pv, int fishId)
        {
            fish = fishInfo;
//            this.fishId = fishId;
            this.gb = gb;
            this.pv = pv;

            if (fish.lifePoint <= 0)
            {
                gb.RemoveDragon(this);
            }
        }

        public void ShowAnimation()
        {
			if (dimBg != null)
				dimBg.SetActive (false);
            _isDeath = false;

            foreach (Animator da in dragonAnimator)
            {
                da.speed = 1;
                da.Play("appear");
            }

            foreach (SpriteRenderer di in dragonImage)
            {
                di.color = new Color(1f, 1f, 1f, 1f);
            }

            foreach (Collider2D co in gameObject.GetComponentsInChildren<Collider2D>())
                co.enabled = true;
        }

        public void HideAnimation()
        {
            _isDeath = true;
            LeanTween.cancel(tweenId);

            foreach (Collider2D co in gameObject.GetComponentsInChildren<Collider2D>())
                co.enabled = false;

            foreach (Animator da in dragonAnimator)
            {
                da.speed = 1;
            }


            LeanTween.value(gameObject, 0f, 1f, 1f).setOnComplete(() =>
            {
                foreach (Animator da in dragonAnimator)
                {
                    da.Play("null");
                }
                gb.DisableGameObject();
            });

            gb.RemoveDragon(this);
        }

		public void Death(int playerId, TargetObject.TargetInfo deathInfo)
        {
            _isDeath = true;
            LeanTween.cancel(tweenId);

            foreach (Collider2D co in gameObject.GetComponentsInChildren<Collider2D>())
                co.enabled = false;

            foreach (SpriteRenderer di in dragonImage)
            {
                di.color = Color.white;
            }

            foreach (Animator da in dragonAnimator)
            {
                da.speed = 0;
            }

            //dragonImage.sortingOrder = 101;

            GameObject go = this.gameObject;
            foreach (Transform col in go.transform)
            {
                if (col.gameObject.activeInHierarchy)
                {
                    foreach (Transform ce in col)
                    {
                        GameObject tempEx = Instantiate(pv.coinExplosive);
                        tempEx.transform.parent = ce;
                        tempEx.transform.localPosition = new Vector3(0, 0, 0);
                    }
                }
            }

            LeanTween.value(gameObject, 1f, 0f, 1f).setOnUpdate((float t) =>
            {
                foreach (SpriteRenderer di in dragonImage)
                {
                    di.color = new Color(1f, 1f, 1f, t);
                }

                foreach (SpriteRenderer ds in dragonShadow)
                {
                    ds.color = new Color(0f, 0f, 0f, t);
        }
            });

			pv.ShowDragonPayout(deathInfo.payout, playerId);

            LeanTween.value(gameObject, 0f, 1f, 2f).setOnComplete(() =>
            {
                foreach (Transform col in go.transform)
                {
                    if (col.gameObject.activeInHierarchy)
                    {
                        foreach (Transform ce in col)
                        {
                            foreach (Transform tce in ce)
                            {
                                Destroy(tce.gameObject);
                            }
                        }
                    }
                }

                gb.DisableGameObject();
            });

            gb.RemoveDragon(this);


        }

        public void HitFishEffect()
        {
            LeanTween.cancel(tweenId);

            tweenId = LeanTween.value(gameObject, 0f, 1f, 0.7f).setOnUpdate((float t) =>
            {
                float value = hitCurve.Evaluate(t);
                foreach (SpriteRenderer di in dragonImage)
                {
                    di.color = new Color(1f, value, value, 1f);
                }
            }).id;
        }

        public Transform ActiveGragonPart()
        {
            return gameObject.transform.Find("HitTarget");
        }
    }
}