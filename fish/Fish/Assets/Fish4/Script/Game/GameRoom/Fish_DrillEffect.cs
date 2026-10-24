using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace P8Games.Fish4
{
    public class Fish_DrillEffect : MonoBehaviour
    {
        public GameObject drillObject;
        public GameObject launcher;
        public GunView gv;
		public GameObject BulletPrefab;
		public bool isOwnGun;


        public void FireWeapon(GunShoot gunShoot, bool myOwnGun, long shootId, bool rotate)
        {
//            Debug.Log("Fire Weapon");
            GameObject tempGo = (GameObject)Instantiate(BulletPrefab, drillObject.transform.position, drillObject.transform.rotation);

            Fish_DrillBulletBehavior drill = tempGo.GetComponent<Fish_DrillBulletBehavior>();
            if(!rotate)
                drill.Init(gv, drillObject.transform.rotation, gv.transform.up, gunShoot._betValue, shootId, myOwnGun);
            else
                drill.Init(gv, drillObject.transform.rotation, -gv.transform.up, gunShoot._betValue, shootId, myOwnGun);
			isOwnGun = myOwnGun;

			if (isOwnGun) {
				FishSfxController sfxController = FindObjectOfType<FishSfxController>();
				if (sfxController != null) {
					sfxController.PlayDrill (1);
				}
			}
			if (gv != null)
				gv.FireDrill ();
		}
        public void CancelWeapon()
        {
            gameObject.SetActive(false);
        }
    }
}
