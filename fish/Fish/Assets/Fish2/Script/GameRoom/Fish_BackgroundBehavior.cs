using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace P8Games.MicroFish
{
    public class Fish_BackgroundBehavior : MonoBehaviour
    {
        public float bgTransitionTime = 0.1f;

		public GameObject defaultBg;
        public GameObject[] bg;

        public GameObject waterBg;
		public GameObject logoBg;
		public GameObject dimBg; // for bulbfish
		public GameObject dimBg2;

//        private int backgroundId = 0;

        private bool water = true;


		public GameObject[] titleObj;
		private int currentMapIndex = 0;
		public GameImpl impl;
		public Sprite[] logoSprite;

        // Use this for initialization
		public void Start(){
			logoBg.GetComponent<Image> ().sprite = logoSprite [impl.languageCode];
		}
		public void CheckBackground(int i,float time)
        {
			if (i < 0) {
				return;
			}
			
			if (i > 100) {
				i = i - 100;
			}
			if (currentMapIndex != i) {
				if (i == 1) {
					showTitle (2);
				} else if (i == 2) {
					showTitle (3);
				} 
			}
			if (i != currentMapIndex) {
				FishMusicController musicController = FindObjectOfType<FishMusicController> ();

				if (musicController != null)
					musicController.SetBgm (i - 1);
			}
			if(currentMapIndex!=0)
			bg [currentMapIndex - 1].SetActive (false);
			currentMapIndex = i;


//			LeanTween.cancel (gameObject);

//			LeanTween.delayedCall (gameObject, 0.5f, () => {
//				for(int x=0;x<bg.Length;x++){
//					if(x!=currentMapIndex-1)
//						bg[x].SetActive(false);
//				}
//			});

			bg[currentMapIndex - 1].SetActive(true);
						LeanTween.delayedCall (gameObject, 4f, () => {
							defaultBg.GetComponent<Image> ().sprite = bg [currentMapIndex - 1].GetComponent<Image> ().sprite;
						});
            if (water)
            {
                water = false;
//                LeanTween.value(gameObject, 1f, 0f, 0.5f).setOnUpdate((float t) =>
//                {
//						waterBg.GetComponent<Image>().color = new Color(1f, 1f, 1f, t);
//						logoBg.GetComponent<Image>().color = new Color(1f, 1f, 1f, t);
//                });

            }

			waterBg.SetActive (false);
			logoBg.SetActive (false);
				

//			if (i == 1 || i == 3 || i == 4 || i == 5) {
//				int index = i;
//				if (time > 0) {
//					LeanTween.delayedCall (gameObject, time, () => {
//						showTitle (index);
//					});
//				}
//			}
			//Debug

           
        }
		public void showTitle(int i){
			titleObj [i - 1].SetActive (true);

			FishSfxController sfxController = FindObjectOfType<FishSfxController>();
			if (sfxController != null)
				sfxController.PlayTitle(i - 1);
			
			LeanTween.delayedCall (titleObj [i - 1], 2.1f, () => {
				CloseAllTitle();
			});
			//titleObj [i - 1].GetComponent<Animator> ().Play ("start");
		}
		public void CloseAllTitle(){
			
			for (int i = 0; i < titleObj.Length; i++) {
//				Debug.Log (i);
				titleObj [i].SetActive (false);
			}
		}
		public void CheckBackground(int i){
			CheckBackground (i, 300f);
		}
        public void ChangeBackground()
        {
            water = true;
//            LeanTween.value(gameObject, 0f, 1f, 0.5f).setOnUpdate((float t) =>
//            {
//					waterBg.GetComponent<Image>().color = new Color(1f, 1f, 1f, t);
//					logoBg.GetComponent<Image>().color = new Color(1f, 1f, 1f, t);
//            });
			waterBg.SetActive (true);
			logoBg.SetActive (true);
			if (dimBg2 != null)
				dimBg2.SetActive (false);
        }
    }
}
