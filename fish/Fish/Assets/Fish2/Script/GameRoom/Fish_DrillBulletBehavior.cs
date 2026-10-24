using System.Collections;
using System.Collections.Generic;
using UnityEngine;


namespace P8Games.MicroFish
{
    public class Fish_DrillBulletBehavior : MonoBehaviour
    {
        private GunView gv;
        public GameObject netPrefab;

        //public ParticleSystem imbueParticle;
        //public ParticleSystem trailParticle;

        //public Sound explodeSfx;
        public AudioClip[] bounceSfx;

        private bool moving = false;
        private Vector3 direction;

        [SerializeField] public float speed = 20f;
        private int _bulletType = 3;
        private float duration = 6f;
        private float currentSpeed;
        private double betAmount;
        private int bounceSoundIndex = 0;

        private List<int> fishHitList;
        private List<int> fishAllHitList;

        long bulletShotId = 0;
        private bool ownBullet = false;

        public int bulletType
        {
            get { return _bulletType; }
        }

        void Start()
        {
            fishHitList = new List<int>();
            fishAllHitList = new List<int>();
            currentSpeed = speed;
            this.GetComponent<Animator>().Play("start");
        }

        public void Init(GunView gunView, Quaternion drillRotation, Vector3 movingDirection, double betAmount, long bulletId, bool ownBullet)
        {
            gv = gunView;
            direction = movingDirection;
            moving = true;
            transform.localEulerAngles = new Vector3(0f, 0f, transform.localEulerAngles.z);
            this.betAmount = betAmount;
            bulletShotId = bulletId;
            this.ownBullet = ownBullet;
            float angle = Vector2.Angle(movingDirection, Vector2.up);
            transform.rotation = Quaternion.Euler(0f, 0f, (direction.x < 0f ? 1 : -1) * angle);
        }

        void Update()
        {
            if (fishHitList.Count > 0)
            {
                if (ownBullet)
                {
                    gv.HitUnit(1, 4, fishHitList.ToArray(), bulletShotId);
                    fishHitList.Clear();
                }
            }

            if (moving)
            {
                if (duration > 0)
                {
                    duration -= Time.deltaTime;
                    this.transform.position += direction*currentSpeed*Time.deltaTime;

                    if (duration < 0)
                    {
                    }
                }
                else if (currentSpeed > 0)
                {
                    this.GetComponent<Animator>().Play("timeout");
                    currentSpeed -= Time.deltaTime*speed/4;
                    this.transform.position += direction*currentSpeed*Time.deltaTime;
                }
                else
                {
                    GameObject net = GameObject.Instantiate(netPrefab);
                    net.transform.localScale = new Vector3(3, 3, 3);
                    net.transform.position = gameObject.transform.position;

                    Fish_DrillNetBehavior nb = net.GetComponentInChildren<Fish_DrillNetBehavior>();
                    nb.gv = gv;
                    nb.betAmount = betAmount;
                    nb.thisGunType = 4;
                    nb.bulletId = bulletShotId;

                    Destroy(gameObject);
                    Destroy(net, 2f);

                    gv.SuperWeaponFinish();
                }
            }
        }

        void OnTriggerEnter2D(Collider2D other)
        {
            if (other.tag == "Wall")
            {
                fishAllHitList.Clear();

                if (other.name.Contains("Left") || other.name.Contains("Right"))
                {
                    direction = new Vector3(-direction.x, direction.y, direction.z);
                    transform.position += new Vector3(other.transform.GetChild(0).position.x - transform.position.x, 0f, 0f);
                }
                else
                {
                    direction = new Vector3(direction.x, -direction.y, direction.z);
                    transform.position += new Vector3(0f, other.transform.GetChild(0).position.y - transform.position.y, 0f);
                }

                float angle = Vector2.Angle(direction, Vector2.up);
                transform.rotation = Quaternion.Euler(0f, 0f, (direction.x < 0f ? 1 : -1)*angle);

                if (bounceSoundIndex >= bounceSfx.Length)
                    bounceSoundIndex = 0;
            }
            else if (other.tag == "Fish" && duration > 0)
            {
                if (other.GetComponentInParent<FishBehavior>() != null)
                {
                    FishBehavior fb = other.GetComponentInParent<FishBehavior>();
                    if (fb != null && fishAllHitList != null && fishHitList != null)
                    {
                        if (!fishAllHitList.Contains(fb.fish.targetId) && !fishHitList.Contains(fb.fish.targetId))
                        {
                            if (ownBullet)
                            {
                                fishHitList.Add(fb.fish.targetId);
                                fishAllHitList.Add(fb.fish.targetId);
                            }
                            fb.HitFishEffect();
                        }
                    }
                }

                if (other.GetComponentInParent<DragonBehavior>() != null)
                {
                    DragonBehavior db = other.GetComponentInParent<DragonBehavior>();
                    if (db != null && fishAllHitList != null && fishHitList != null)
                    {
                        if (!fishAllHitList.Contains(db.fish.targetId) && !fishHitList.Contains(db.fish.targetId))
                        {
                            if (ownBullet)
                            {
                                fishHitList.Add(db.fish.targetId);
                                fishAllHitList.Add(db.fish.targetId);
                            }
                            db.HitFishEffect();
                        }
                    }
                }

                if (other.GetComponentInParent<TacoBehavior>() != null)
                {
                    TacoBehavior tb = other.GetComponentInParent<TacoBehavior>();
                    if (tb != null && fishAllHitList != null && fishHitList != null)
                    {
                        if (!fishAllHitList.Contains(tb.fish.targetId) && !fishHitList.Contains(tb.fish.targetId))
                        {
                            if (ownBullet)
                            {
                                fishHitList.Add(tb.fish.targetId);
                                fishAllHitList.Add(tb.fish.targetId);
                            }
                            tb.HitFishEffect();
                        }
                    }
                }

                if (other.transform.root.GetComponentInParent<CrabBehavior>() != null)
                {
                    CrabBehavior cb = other.transform.root.GetComponentInParent<CrabBehavior>();
                    if (cb != null && fishAllHitList != null && fishHitList != null)
                    {
                        if (!fishAllHitList.Contains(cb.fish.targetId) && !fishHitList.Contains(cb.fish.targetId))
                        {
                            if (ownBullet)
                            {
                                fishHitList.Add(cb.fish.targetId);
                                fishAllHitList.Add(cb.fish.targetId);
                            }
                            cb.HitFishEffect();
                        }
                    }
                }

				if (other.transform.root.GetComponentInParent<BulbFishBehavior>() != null)
				{
					BulbFishBehavior cb = other.transform.root.GetComponentInParent<BulbFishBehavior>();
					if (cb != null && fishAllHitList != null && fishHitList != null)
					{
						if (!fishAllHitList.Contains(cb.fish.targetId) && !fishHitList.Contains(cb.fish.targetId))
						{
							if (ownBullet)
							{
								fishHitList.Add(cb.fish.targetId);
								fishAllHitList.Add(cb.fish.targetId);
							}
							cb.HitFishEffect();
						}
					}
				}

				if (other.transform.root.GetComponentInParent<CrocodileBehavior>() != null)
				{
					CrocodileBehavior cb = other.transform.root.GetComponentInParent<CrocodileBehavior>();
					if (cb != null && fishAllHitList != null && fishHitList != null)
					{
						if (!fishAllHitList.Contains(cb.fish.targetId) && !fishHitList.Contains(cb.fish.targetId))
						{
							if (ownBullet)
							{
								fishHitList.Add(cb.fish.targetId);
								fishAllHitList.Add(cb.fish.targetId);
							}
							cb.HitFishEffect();
						}
					}
				}
            }
        }
    }
}
