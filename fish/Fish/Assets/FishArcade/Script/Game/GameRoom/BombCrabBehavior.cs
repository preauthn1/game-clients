using System.Collections;
using System.Collections.Generic;
using UnityEngine;


namespace P8Games.Fish
{
	public class BombCrabBehavior : MonoBehaviour {
		public double betAmount;
		public int thisGunType;
		public GunView gv;

//		List<int> hitFishList = new List<int>();

		public long bulletId = -1;

		public int boomCount = 0;
		public GameObject boomExpEffect;
		public bool isOwnGun;

		public GameObject[] countObj;
		// Use this for initialization
		void Start () {

		}

		// Update is called once per frame
		void Update () {

		}
		public void UpdateText(){
			for (int i = 0; i < countObj.Length; i++) {
				countObj [i].SetActive (false);
			}
			if(boomCount <= countObj.Length-1)
			countObj [boomCount].SetActive (true);
		}
		public void Boom(){
			boomCount++;
			UpdateText ();

			GameObject exp = Instantiate (boomExpEffect,gameObject.transform.parent.parent);
			exp.transform.position = this.transform.position;
			NetBehavior nb = exp.GetComponentInChildren<NetBehavior>();
			nb.gv = gv;
			//nb.betAmount = betAmount;
			nb.thisGunType = 6;
			nb.bulletId = bulletId;
			nb.isSendHit = !isOwnGun;
			PlayExpSfx ();
			Destroy(exp, 2.5f);
		}
		public void PlayBoomSfx(){
			if (isOwnGun) {
				FishSfxController sfxController = FindObjectOfType<FishSfxController>();
				if (sfxController != null) {
					sfxController.PlayBoom (boomCount);
				}
			}
		}
		public void PlayExpSfx(){
			if (isOwnGun) {
				FishSfxController sfxController = FindObjectOfType<FishSfxController>();
				if (sfxController != null) {
					sfxController.PlayBoomExp (boomCount);
				}
			}
		}
		public void Destroy(){
			Destroy (gameObject);
		}
	}
}