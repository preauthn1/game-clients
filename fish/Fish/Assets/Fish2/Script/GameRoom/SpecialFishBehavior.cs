using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace P8Games.MicroFish
{
public class SpecialFishBehavior : MonoBehaviour {
	[System.Serializable]
	public class FishType
	{
		public GameObject prefab;
		public int fishType;
	}
	public FishType[] fishType;

	public GameObject testPrefab;
	//public List<GameObject> spawnFishList = new List<GameObject>(); 
	public List<int> fishTypeList = new List<int> ();
	public List<Vector3> fishPosList = new List<Vector3> ();
		public List<int> fishPayout = new List<int> ();
	public List<GameObject> spawnFishList2 = new List<GameObject>(); 
	
	public float fishTimeCount = 0;
	public GameObject currentFish;
	public bool isMoving;
	public GameObject laserEffect;
	public int fishCount = 0;
		public Vector3 gunPos;
		public PoolView pv;
		public GunView gv;

		public int total;

		public GameObject coin;

		public Vector3 coinPos;
		public float destroyTimer = 0;

		public bool isPlayer = false;
	// Use this for initialization
	void Start () {
		//LeanTween.move (target, gameObject.transform.position, 3);
		//AnimateFish();
	}

	
	// Update is called once per frame
	void Update () {
			if (isMoving || spawnFishList2.Count>0) {
				fishTimeCount += Time.deltaTime;

				if (fishTimeCount >= 13 && fishTypeList.Count == 0 && !isMoving) {
					AllDie ();
				    //pv.OnFinishSpecialFish (playerId,total);
					gv.OnFinishSpecialFish(total);
				}	
			} 

			destroyTimer += Time.deltaTime;
			if (destroyTimer >= 20) {
				gv.ResetGunAfterSpecial ();
				Destroy (gameObject);
			}
	}
	public bool allDie;
	public void AllDie(){
		if (allDie)
			return;
		allDie = true;
		isMoving = false;
		for (int i = 0; i < spawnFishList2.Count; i++) {
				spawnFishList2 [i].GetComponent<SpecialFishUnitBehavior> ().coin = coin;
				spawnFishList2 [i].GetComponent<SpecialFishUnitBehavior> ().PlayDeathAnimation (fishPayout[i]);
				total += fishPayout [i];
		}
			PlayWinSfx ();
		Destroy (gameObject, 4f);
	}
		
	public void AnimateFish(){
			if (isMoving)
				return;

		if (fishTypeList.Count == 0) {
			isMoving = false;
			return;	
		}	
			
		fishCount++;
		isMoving = true;
		GameObject spawnObj = null;
		for (int i = 0; i < fishType.Length; i++) {
				if (fishTypeList[0] == fishType [i].fishType) {
					spawnObj = fishType [i].prefab;
				}				
		}

		if (currentFish == null) {
			GameObject obj = Instantiate (spawnObj, gameObject.transform);
			obj.transform.position = fishPosList [0];
			spawnFishList2.Add (obj);
			currentFish = obj;
			currentFish.GetComponent<SpecialFishUnitBehavior> ().SetParent (this);
			currentFish.GetComponent<SpecialFishUnitBehavior> ().EnableEffect (1);
			currentFish.GetComponent<SpecialFishUnitBehavior> ().coinPos =	coinPos;
			currentFish.GetComponent<SpecialFishUnitBehavior> ().SetNumber (fishCount);
			currentFish.GetComponent<SpecialFishUnitBehavior> ().Move (gunPos);
			LeanTween.delayedCall (gameObject,1f, () => {
				currentFish.GetComponent<SpecialFishUnitBehavior> ().EnableEffect (2);
					isMoving = false;
				AnimateFish ();
			});
		} else {
			GameObject obj = Instantiate (spawnObj, gameObject.transform);
			obj.transform.position = fishPosList [0];
			obj.GetComponent<SpecialFishUnitBehavior> ().SetParent (this);
			obj.GetComponent<SpecialFishUnitBehavior> ().Move (currentFish);
			spawnFishList2.Add (obj);
			currentFish = obj;
			currentFish.GetComponent<SpecialFishUnitBehavior> ().coinPos =	coinPos;
			currentFish.GetComponent<SpecialFishUnitBehavior> ().SetNumber (fishCount);
		}

			fishTypeList.RemoveAt (0);
			fishPosList.RemoveAt (0);
	}
		public void playSfx(){
			if (!isPlayer)
				return;

			FishSfxController sfxController = FindObjectOfType<FishSfxController>();
			if (sfxController != null) {
				sfxController.PlaySpecialFish ();
			}
		}
		public void PlayWinSfx(){
			if (!isPlayer)
				return;

			FishSfxController sfxController = FindObjectOfType<FishSfxController>();
			if (sfxController != null) {
				sfxController.PlaySpecialFishWin ();
			}
		}
}
}