using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace P8Games.MicroFish
{
    public class Fish_LaserBulletBehavior : MonoBehaviour
    {
        public GameObject netPerfab;
        private GunView gv;
        private long shootId = 0;
        private bool ownGun = false;
		public GameObject background;

        public void Init(GunView gunView, Quaternion laserRotation, Vector3 movingDirection, double betAmount, long bulletId, bool ownBullet)
        {
            gv = gunView;
            ownGun = ownBullet;
            shootId = bulletId;
            transform.localEulerAngles = new Vector3(0f, 0f, 0f);
            //float angle = Vector2.Angle(movingDirection, Vector2.up);
//            transform.rotation = Quaternion.Euler(0f, 0f, (movingDirection.x < 0f ? 1 : -1));

			if (ownGun)
				background.SetActive (true);
        }
		public void PlayLaserSfx1(){
			if (ownGun) {
				FishSfxController sfxController = FindObjectOfType<FishSfxController>();
				if (sfxController != null) {
					sfxController.PlayLaserSW (0);
				}
			}
		}
		public void PlayLaserSfx2(){
			if (ownGun) {
				FishSfxController sfxController = FindObjectOfType<FishSfxController>();
				if (sfxController != null) {
					sfxController.PlayLaserSW (1);
				}
			}
		}
        private GameObject net;
        public void CreateNet()
        {
            if (!ownGun)
                return;

            net = GameObject.Instantiate(netPerfab);
            net.transform.position = transform.position;
            net.transform.rotation = transform.rotation;

            NetBehavior nb = net.GetComponent<NetBehavior>();
            nb.gv = gv;
            nb.betAmount = gv.BetValue;
            nb.thisGunType = 3;
            nb.bulletId = shootId;


            net.SetActive(true);
        }

        public void FireEnd()
        {
            Destroy(net);
            Destroy(this.gameObject);
        }
    }
}
