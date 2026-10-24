using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace P8Games.Fish
{
    public class Fish_LaserBulletBehavior : MonoBehaviour
    {
        public GameObject netPerfab;
        private GunView gv;
        private long shootId = 0;
        private bool ownGun = false;

        public void Init(GunView gunView, Quaternion laserRotation, Vector3 movingDirection, double betAmount, long bulletId, bool ownBullet)
        {
            gv = gunView;
            ownGun = ownBullet;
            shootId = bulletId;
            transform.localEulerAngles = new Vector3(0f, 0f, transform.localEulerAngles.z);
            float angle = Vector2.Angle(movingDirection, Vector2.up);
            transform.rotation = Quaternion.Euler(0f, 0f, (movingDirection.x < 0f ? 1 : -1) * angle);
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
