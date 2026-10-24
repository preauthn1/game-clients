using System.Collections;
using System.Collections.Generic;
using UnityEngine;


namespace P8Games.MicroFish
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

		// Use this for initialization
		void Start () {

		}

		// Update is called once per frame
		void Update () {

		}

		public void Boom(){
			boomCount++;

			GameObject exp = Instantiate (boomExpEffect,gameObject.transform.parent.parent);
			exp.transform.position = this.transform.position;
			NetBehavior nb = exp.GetComponentInChildren<NetBehavior>();
			nb.gv = gv;
			//nb.betAmount = betAmount;
			nb.thisGunType = 6;
			nb.bulletId = bulletId;
			nb.isSendHit = !isOwnGun;
			PlayBoom4Sfx ();
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
//				FishSfxController sfxController = FindObjectOfType<FishSfxController>();
//				if (sfxController != null) {
//					sfxController.PlayBoomExp (boomCount);
//				}
			}
		}

		public void PlayBoom1Sfx(){
			if (isOwnGun) {
				FishSfxController sfxController = FindObjectOfType<FishSfxController>();
				if (sfxController != null) {
					sfxController.PlayBoom (0);
				}
			}
		}
		public void PlayBoom2Sfx(){
			if (isOwnGun) {
				FishSfxController sfxController = FindObjectOfType<FishSfxController>();
				if (sfxController != null) {
					sfxController.PlayBoom (1);
				}
			}
		}
		public void PlayBoom3Sfx(){
			if (isOwnGun) {
				FishSfxController sfxController = FindObjectOfType<FishSfxController>();
				if (sfxController != null) {
					sfxController.PlayBoom (2);
				}
			}
		}
		public void PlayBoom4Sfx(){
			if (isOwnGun) {
				FishSfxController sfxController = FindObjectOfType<FishSfxController>();
				if (sfxController != null) {
					sfxController.PlayBoom (3);
				}
			}
		}
		public void Destroy(){
			Destroy (gameObject);
		}

		GameObject shakeObj;
		public void ShakeCamera(){
			if(shakeObj==null)
			shakeObj = GameObject.Find ("ShakeCamera");//

			if(shakeObj!=null)
			shakeObj.GetComponent<ShakeCamera> ().ShakeLoop();
		}
		public void StopShake3(){
			if(shakeObj!=null)
			shakeObj.GetComponent<ShakeCamera> ().StopLoop();
		}
	}
}