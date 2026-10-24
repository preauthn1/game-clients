using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace P8Games.MicroFish
{
public class SpecialFishUnitBehavior : MonoBehaviour {

	public SpecialFishBehavior parent;
	public GameObject[] effect;
	public RectTransform laserEffect;
	public Transform targetTransform;
	public Text numberTxt;	
	public Animator fishAnimation;
	public Text payoutTxt;
	// Use this for initialization
	void Start () {
			payoutTxt.gameObject.SetActive (false);
	}
	
	// Update is called once per frame
	void Update () {
		if (isMoving) {
			if(numberTxt!=null)
			numberTxt.transform.parent.gameObject.SetActive (true);
			laserEffect.gameObject.SetActive (true);
			Vector2 targetVector = targetTransform.position - laserEffect.transform.position;
			laserEffect.transform.eulerAngles = new Vector3 (0f, 0f, Mathf.Atan2 (targetVector.y, targetVector.x) * Mathf.Rad2Deg - 90f);
			laserEffect.sizeDelta = new Vector2 (laserEffect.sizeDelta.x, targetVector.magnitude / laserEffect.transform.localScale.y * 70);
			//Debug.LogError("123");
		} else {
			if(numberTxt!=null)
			numberTxt.transform.parent.gameObject.SetActive (false);
			if(laserEffect!=null)
			laserEffect.gameObject.SetActive (false);
		}
	}


	public void SetParent(SpecialFishBehavior fish){
		parent = fish;
	}

	public bool isMoving;
	public void Move(GameObject obj){
		targetTransform = obj.transform;
		isMoving = true;
//		Debug.Log ("Move : " + gameObject.name +" / " +obj.name);
		LeanTween.move(gameObject,obj.transform.position,2f);
		EnableEffect (1);
		parent.playSfx ();
	}
	public void Move(Vector3 pos){
		//isMoving = true;
			Debug.LogWarning(pos);
		LeanTween.move(gameObject,pos,1f);
	}

	void OnTriggerEnter2D(Collider2D other){
			if (other.tag != "Fish" && other.tag != "Wall" && other.gameObject.name !="GameArea" && other.gameObject.GetComponent<SpecialFishUnitBehavior>()!=null) {
//				Debug.Log ("OnTrigger Enter !!! " +other.gameObject.name +" / " +gameObject.name);
				LeanTween.cancel (gameObject);

//				Debug.Log (this.gameObject.name);

			EnableEffect (2);
			if (parent != null && isMoving) {
				parent.isMoving = false;
				parent.AnimateFish ();
				isMoving = false;
			}
		}
	} 
	public void EnableEffect(int i){
		if (i == 1) {
			effect [0].SetActive (true);
			effect [1].SetActive (false);
		} else {
			effect [0].SetActive (false);
			effect [1].SetActive (true);
		}
	}
	public void SetNumber(int num){
		numberTxt.text = num.ToString ();
	}

	public GameObject coin;
		public Vector3	coinPos;
		public bool isDeath;
	public void PlayDeathAnimation(int payOut){
			if (isDeath)
				return;
			isDeath = true;

		if(fishAnimation!=null)
			fishAnimation.Play ("death");
		payoutTxt.text = payOut.ToString();
		payoutTxt.gameObject.SetActive (true);

		for (int i = 0; i < 5; i++)
		{
			GameObject tempCoin = Instantiate(coin);
				tempCoin.transform.localPosition =  gameObject.transform.position;
			tempCoin.transform.parent = this.gameObject.transform;
				float delayTime = i * 0.1f;
				LeanTween.delayedCall(gameObject, delayTime , () =>
					{
						LeanTween.moveY(tempCoin, (gameObject.transform.position.y + 1), 0.3f).setOnComplete(() =>
							{
								LeanTween.move(tempCoin,coinPos, 0.3f);
								Destroy(tempCoin,1f);
							});
					});
				
//				LeanTween.moveY(tempCoin, ( gameObject.transform.position.y + 1 +(i*0.1f)), 0.3f).setOnComplete(() =>
//					{
//						LeanTween.move(tempCoin,coinPos, 1f);
//						Destroy(tempCoin,1f);
//					});
		}
	}
}
}