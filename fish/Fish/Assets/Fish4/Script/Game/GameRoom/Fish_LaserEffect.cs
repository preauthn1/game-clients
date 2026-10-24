using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace P8Games.Fish4
{
    public class Fish_LaserEffect : MonoBehaviour
    {
        public GameObject laserBase;
        public GameObject launcher;
        public GameObject indicator;
        public GameObject gunShootObj;
        public GameObject bulletPerfab;
        public GameObject netBase;
        public GunView gv;
		public bool isOwnGun;


        public void EquipWeapon()
        {
            gameObject.SetActive(true);
            indicator.SetActive(true);
            this.GetComponent<Animator>().Play("move");

			PlayGetSfx ();
        }

        public void FireWeapon(GunShoot gunShoot, long shootId, bool ownGun, bool rotate)
        {
            indicator.SetActive(false);
            this.GetComponent<Animator>().Play("shot");
            GameObject tempGo = (GameObject)Instantiate(bulletPerfab, gunShootObj.transform.position, gunShootObj.transform.rotation);
            Fish_LaserBulletBehavior laser = tempGo.GetComponent<Fish_LaserBulletBehavior>();
            if (!rotate)
                laser.Init(gv, gunShootObj.transform.rotation, gv.transform.up,gunShoot._betValue, shootId, ownGun);
            else
                laser.Init(gv, gunShootObj.transform.rotation, -gv.transform.up, gunShoot._betValue, shootId, ownGun);
			isOwnGun = ownGun;

			PlayFireSfx ();
			if (gv != null)
				gv.FireLaser ();
        }


		public void PlayGetSfx(){
			if (isOwnGun) {
				FishSfxController sfxController = FindObjectOfType<FishSfxController>();
				if (sfxController != null) {
					sfxController.PlayLaserSP (0);
				}
			}
		}
		public void PlayFireSfx(){
			if (isOwnGun) {
				FishSfxController sfxController = FindObjectOfType<FishSfxController>();
				if (sfxController != null) {
					sfxController.PlayLaserSP (1);
				}
			}
		}
        public void FireEnd()
        {
            gv.SuperWeaponFinish();
            gameObject.SetActive(false);
        }

        public void CancelWeapon()
        {
            gameObject.SetActive(false);
        }
    }
}
