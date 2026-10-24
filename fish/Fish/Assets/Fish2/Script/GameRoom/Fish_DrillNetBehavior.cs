using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace P8Games.MicroFish
{
    public class Fish_DrillNetBehavior : MonoBehaviour
    {
        public double betAmount;
        public int thisGunType;
        public GunView gv;

        List<int> hitFishList;

        public long bulletId = -1;

//        private bool myOwnGun = false;

        float timer = 0.1f;

        void Start()
        {
            hitFishList = new List<int>();
        }

        void Update()
        {
            timer -= Time.deltaTime;
            if (timer <= 0f && hitFishList.Count > 0)
            {
                if (gv.myOwnGun)
                    gv.HitUnit(1, thisGunType, hitFishList.ToArray(), bulletId);
            }
        }

        void OnTriggerEnter2D(Collider2D other)
        {
            if (other.tag == "Fish")
            {
                FishBehavior fb = other.GetComponentInParent<FishBehavior>();

                if (fb != null)
                {
                    if (!hitFishList.Contains(fb.fish.targetId))
                    {
                        if (gv.myOwnGun)
                        {
                            hitFishList.Add(fb.fish.targetId);
                        }
                        fb.HitFishEffect();
                    }
                }

                TacoBehavior tb = other.GetComponentInParent<TacoBehavior>();

                if (tb != null)
                {
                    if (!hitFishList.Contains(tb.fish.targetId))
                    {
                        if (gv.myOwnGun)
                        {
                            hitFishList.Add(tb.fish.targetId);
                        }

                        tb.HitFishEffect();
                    }
                }

                DragonBehavior db = other.GetComponentInParent<DragonBehavior>();

                if (db != null)
                {
                    if (!hitFishList.Contains(db.fish.targetId))
                    {
                        if (gv.myOwnGun)
                        {
                            hitFishList.Add(db.fish.targetId);
                        }

                        db.HitFishEffect();
                    }
                }

                CrabBehavior cb = other.GetComponentInParent<CrabBehavior>();

                if (cb != null)
                {
                    if (!hitFishList.Contains(cb.fish.targetId))
                    {
                        if (gv.myOwnGun)
                        {
                            hitFishList.Add(cb.fish.targetId);
                        }

                        cb.HitFishEffect();
                    }
                }

				BulbFishBehavior bf = other.GetComponentInParent<BulbFishBehavior>();

				if (bf != null)
				{
					if (!hitFishList.Contains(bf.fish.targetId))
					{
						if (gv.myOwnGun)
						{
							hitFishList.Add(bf.fish.targetId);
						}

						bf.HitFishEffect();
					}
				}

				CrocodileBehavior c = other.GetComponentInParent<CrocodileBehavior>();

				if (c != null)
				{
					if (!hitFishList.Contains(c.fish.targetId))
					{
						if (gv.myOwnGun)
						{
							hitFishList.Add(c.fish.targetId);
						}

						c.HitFishEffect();
					}
				}
            }
        }
    }
}
