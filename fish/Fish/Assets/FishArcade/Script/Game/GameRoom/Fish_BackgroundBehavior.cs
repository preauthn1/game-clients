using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace P8Games.Fish
{
    public class Fish_BackgroundBehavior : MonoBehaviour
    {
        public float bgTransitionTime = 0.1f;

        public GameObject[] bg;

        public GameObject waterBg;
		public GameObject logoBg;
        public GameObject tacoBg;
		public GameObject dimBg; // for bulbfish
		public GameObject dimBg2;
		public GameObject crocodileBg;

		public GameObject[] bonusBg;

//        private int backgroundId = 0;

        private bool water = true;


		public GameObject[] titleObj;
        // Use this for initialization

		public void CheckBackground(int i,float time)
        {
			if (i < 0) {
				return;
			}

			if (i > 100) {
				i = i - 100;
			}

			LeanTween.cancel (gameObject);

            foreach (GameObject a in bg)
            {
                a.SetActive(false);
            }

            bg[i - 1].SetActive(true);

            if (water)
            {
                water = false;
                LeanTween.value(gameObject, 1f, 0f, 0.5f).setOnUpdate((float t) =>
                {
                    waterBg.GetComponent<SpriteRenderer>().color = new Color(1f, 1f, 1f, t);
					logoBg.GetComponent<SpriteRenderer>().color = new Color(1f, 1f, 1f, t);
                });
            }

            if (i == 3)
            {
                tacoBg.GetComponent<TacoMapController>().ShowMap();
            }
            else
            {
                tacoBg.GetComponent<TacoMapController>().HideMap();
            }

			//dimBg.SetActive (false);
			if (i == 4) {
				if(bg [i - 1].GetComponent<Animator> ()!=null)
				bg [i - 1].GetComponent<Animator> ().speed = 0;
				LeanTween.delayedCall (gameObject, time, () => {
					//dimBg.SetActive (true);
					if(bg [i - 1].GetComponent<Animator> ()!=null)
					bg [i - 1].GetComponent<Animator> ().speed = 1;
				});
			} 

			if (crocodileBg != null) {
				crocodileBg.SetActive (false);
				if (i == 5) {
					crocodileBg.SetActive (true);
					crocodileBg.GetComponent<Animator> ().Play ("stop");
					LeanTween.delayedCall (gameObject, time, () => {
						crocodileBg.GetComponent<Animator> ().Play ("start");
					});
				}
			}

			if (i == 1 || i == 3 || i == 4 || i == 5) {
				int index = i;
				if (time > 0) {
					LeanTween.delayedCall (gameObject, time, () => {
						showTitle (index);
					});
				}
			}


            FishMusicController musicController = FindObjectOfType<FishMusicController>();
            if (musicController != null)
                musicController.SetBgm(i - 1);
        }
		public void showTitle(int i){
			titleObj [i - 1].GetComponent<Animator> ().Play ("start");
		}
		public void CheckBackground(int i){
			CheckBackground (i, 300f);
		}
        public void ChangeBackground()
        {
            water = true;
            LeanTween.value(gameObject, 0f, 1f, 0.5f).setOnUpdate((float t) =>
            {
                waterBg.GetComponent<SpriteRenderer>().color = new Color(1f, 1f, 1f, t);
				logoBg.GetComponent<SpriteRenderer>().color = new Color(1f, 1f, 1f, t);
            });
			if (dimBg2 != null)
				dimBg2.SetActive (false);
        }
    }
}
