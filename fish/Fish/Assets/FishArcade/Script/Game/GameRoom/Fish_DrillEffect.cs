using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace P8Games.Fish
{
    public class Fish_DrillEffect : MonoBehaviour
    {
        public GameObject drillObject;
        public GameObject launcher;
        public GunView gv;
        public GameObject BulletPrefab;


        public void FireWeapon(GunShoot gunShoot, bool myOwnGun, long shootId, bool rotate)
        {
            Debug.Log("Fire Weapon");
            GameObject tempGo = (GameObject)Instantiate(BulletPrefab, drillObject.transform.position, drillObject.transform.rotation);

            Fish_DrillBulletBehavior drill = tempGo.GetComponent<Fish_DrillBulletBehavior>();
            if(!rotate)
                drill.Init(gv, drillObject.transform.rotation, gv.transform.up, gunShoot._betValue, shootId, myOwnGun);
            else
                drill.Init(gv, drillObject.transform.rotation, -gv.transform.up, gunShoot._betValue, shootId, myOwnGun);
        }

        public void CancelWeapon()
        {
            gameObject.SetActive(false);
        }
    }
}
