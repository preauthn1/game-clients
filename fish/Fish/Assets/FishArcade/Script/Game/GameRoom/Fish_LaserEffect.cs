using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace P8Games.Fish
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



        public void EquipWeapon()
        {
            gameObject.SetActive(true);
            indicator.SetActive(true);
            this.GetComponent<Animator>().Play("move");
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
