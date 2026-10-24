using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace P8Games.Fish
{
    public class UserInfoView : MonoBehaviour
    {
        [SerializeField] public GameObject userHolder = null;
        [SerializeField] public Text coinText = null;
        [SerializeField] public Text nameText = null;
        [SerializeField] public GameObject playerArrow = null;

        public int playerId = 0;
        public double balance = 0;



        public void Reset()
        {
            nameText.text = "";
            coinText.text = "";
            gameObject.SetActive(false);
        }

        private int tweenId = 0;

        public void InitPlayerInfo(SeatInfo seatInfo, bool isPlayer, bool rotateC)
        {
            gameObject.SetActive(true);
//            bool countryType = false;
            balance = seatInfo.balance;
            coinText.text = seatInfo.balance.ToString("###,###,###,##0");
            nameText.text = seatInfo.playerName;
            playerId = seatInfo.playerId;

            if (rotateC)
            {
                userHolder.transform.localScale = new Vector3(-1, -1, 1);
            }
            else
            {
                userHolder.transform.localScale = new Vector3(1, 1, 1);
            }

            if (isPlayer)
            {
                playerArrow.SetActive(true);
                tweenId = LeanTween.moveY(playerArrow, playerArrow .transform.position.y + 1f, 0.5f).setLoopPingPong(5).setOnComplete(() =>
                {
                    playerArrow.SetActive(false);
                }).id;
            }
        }

        public void Remove()
        {
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
        }

    }
}