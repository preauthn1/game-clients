using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace P8Games.Fish4
{
    public class UserInfoView : MonoBehaviour
    {
        [SerializeField] public GameObject userHolder = null;
        [SerializeField] public Text coinText = null;
        [SerializeField] public Text nameText = null;
        [SerializeField] public GameObject playerArrow = null;

        public int playerId = 0;
        public double balance = 0;

		public Sprite[] spriteArr;
		public GameObject waitingObj;
		public GameObject waitingObj2;
		public Animator winEffect;
		public GameObject coinPos;
		public bool rotate;
		public int countCoin = 0;
		public float countCoinDis = 0.1f;
		public float time = 0;
        public void Reset()
        {
            nameText.text = "";
            coinText.text = "";
            gameObject.SetActive(false);
        }
		public void PlayWinEffect(){
			winEffect.Play ("play");
		}
		void Update(){
			if (countCoin > 0) {
				time += Time.deltaTime;
				if (time > 1f) {
					countCoin = 0;
					time = 0;
				}
			}
		}
		public void PlayAddCoinEffect(GameObject payOut,double amount){
			
			GameObject obj = Instantiate(payOut,gameObject.transform);
			obj.GetComponentInChildren<Animator> ().Play ("play2");
			obj.GetComponentInChildren<Text> ().text = "+"+amount.ToString("###,###,###,##0");
			obj.transform.localPosition = new Vector3 (obj.transform.localPosition.x,obj.transform.localPosition.y +(countCoin *countCoinDis), 0);
			if (rotate) {
				obj.gameObject.transform.localScale = -Vector3.one;
			}
			Destroy (obj, 3f);

			coinText.text = balance.ToString("###,###,###,##0");
			coinText.gameObject.GetComponent<Animator> ().Play ("Play");
			countCoin++;
		}
        private int tweenId = 0;

        public void InitPlayerInfo(SeatInfo seatInfo, bool isPlayer, bool rotateC)
        {
			rotate = rotateC;
            gameObject.SetActive(true);
//            bool countryType = false;
            balance = seatInfo.balance;
            coinText.text = seatInfo.balance.ToString("###,###,###,##0");
            nameText.text = seatInfo.playerName;
            playerId = seatInfo.playerId;
			waitingObj.SetActive (false);
            if (rotateC)
            {
                userHolder.transform.localScale = new Vector3(-1, -1, 1);
				waitingObj.transform.localScale = new Vector3(-1, -1, 1);
				if(waitingObj2!=null)
					waitingObj2.transform.localScale = new Vector3(-1, -1, 1);
            }
            else
            {
                userHolder.transform.localScale = new Vector3(1, 1, 1);
            }
			userHolder.GetComponent<Image> ().sprite = spriteArr [1];
            if (isPlayer)
            {
				userHolder.GetComponent<Image> ().sprite = spriteArr [0];
                playerArrow.SetActive(true);
                tweenId = LeanTween.moveY(playerArrow, playerArrow .transform.position.y + 1f, 0.5f).setLoopPingPong(5).setOnComplete(() =>
                {
                    playerArrow.SetActive(false);
                }).id;
            }
        }

        public void Remove()
        {
			waitingObj.SetActive (true);
            gameObject.SetActive(false);
//            bool countryType = false;
            coinText.text = "0";
            nameText.text = "";
            playerId = 0;
            LeanTween.cancel(tweenId);
            playerArrow.SetActive(false);
        }

        public void UpdatePlayerCredit(double credit)
        {
            balance = credit;
            coinText.text = credit.ToString("###,###,###,##0");
//			PlayAddCreditAnimation();
        }
    }
}