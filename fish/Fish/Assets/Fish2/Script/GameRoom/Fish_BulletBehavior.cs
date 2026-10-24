using UnityEngine;
using System.Collections;

namespace P8Games.MicroFish
{
    public class Fish_BulletBehavior : MonoBehaviour
    {

        public GameObject explosivePrefab;

        private GunView gv;

        private bool moving = false;
        private Vector3 direction;

        [SerializeField] public float speed = 0f;
        [SerializeField] public int _bulletType = 0;
		long bulletShotId = 0;

        public int bulletType
        {
            get { return _bulletType; }
        }

		public bool isAimming = false;

        public void Init(GunView gunView, Vector3 movingDirection, int flipValue, long bulletId)
        {
            if (flipValue < 0)
                this.GetComponent<SpriteRenderer>().flipY = true;

			float angle = Vector2.Angle(movingDirection, Vector2.up);
			transform.rotation = Quaternion.Euler(0f, 0f, (movingDirection.x < 0f ? 1 : -1)*angle);

            gv = gunView;
            direction = movingDirection;
            moving = true;
			bulletShotId = bulletId;
        }
//		float destroyTime = 0f;
        void FixedUpdate()
        {
            if (moving)
            {
//				destroyTime += Time.deltaTime;

				if (bulletType == 0)
					//this.transform.position += direction * speed * Time.deltaTime;
					rb.MovePosition(transform.position+direction*speed*Time.deltaTime);
				else if (bulletType == 1) {
					if (selectedFishObj != null && Vector2.Distance (transform.position, selectedFishObj.transform.position) != 0) {
//						Debug.Log (Vector2.Distance (transform.position, selectedFishObj.transform.position));
						rb.MovePosition (Vector2.MoveTowards (transform.position, selectedFishObj.transform.position, speed * Time.deltaTime));
						//this.transform.position = Vector2.MoveTowards (transform.position, selectedFishObj.transform.position, speed * Time.deltaTime);
					} else {
						if (gv != null) {
							gv.DisposeBullet (this);
						}
						Destroy (gameObject);
					}
//					this.transform.LookAt (selectedFishObj.transform);
				} 
            }
        }
		public Rigidbody2D rb;
		void Start(){
			rb = gameObject.GetComponent<Rigidbody2D> ();
		}

		public GameObject selectedFishObj;
        void OnTriggerEnter2D(Collider2D other)
        {
			this.GetComponent<SpriteRenderer> ().flipY = false;
            if (other.tag == "Wall")
            {
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
            }
			else if (other.tag == "Fish")
            {
				if (bulletType != 0 && selectedFishObj != other.gameObject)
					return;

                GameObject net = GameObject.Instantiate(explosivePrefab);
                net.transform.localScale = Vector3.one;
                net.transform.position = gameObject.transform.position;
                net.GetComponentInChildren<NetBehavior>().gv = gv;
                net.GetComponentInChildren<NetBehavior>().bulletId = bulletShotId;
				net.GetComponentInChildren<NetBehavior> ().thisGunType = bulletType;
				if (bulletType == 1) {
//					net.GetComponentInChildren<NetBehavior> ().isSendHit = true;
					if (selectedFishObj != null) {
						net.GetComponentInChildren<NetBehavior> ().selectedFish = selectedFishObj;
					}
				}

				if (gv != null) {
					gv.DisposeBullet (this);
				}
                Destroy(gameObject);
                Destroy(net, 2f);
            }
        }
    }
}