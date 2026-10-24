using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace P8Games.MicroFish
{
    public class Fish_PaytableView : MonoBehaviour
    {
        [SerializeField] public GameObject[] content;
        [SerializeField] public GameObject nextButton;
		[SerializeField] public GameObject prevButton;
        [SerializeField] public GameObject exitButton;

		[SerializeField] public GameObject[] dotObj;
		[SerializeField] public Sprite dotOn;
		[SerializeField] public Sprite dotOff;

        void Awake()
        {
			page = 3;
			UpdatePage ();

			for (int i = 0; i < dotObj.Length; i++) {
				int j = i;
				dotObj [i].GetComponent<Button> ().onClick.AddListener (() => {
					SpecificPage(j);
				});
			}
        }
		public void SpecificPage(int i){
			page = i;
			UpdatePage ();
		}
        public void ShowPaytable()
        {
			FishSfxController sfxController = FindObjectOfType<FishSfxController> ();
			if (sfxController != null) {
				sfxController.PlayButton ();
			}
            gameObject.SetActive(true);
            page = 0;
			UpdatePage ();
        }

        public void HidePaytable()
        {
			FishSfxController sfxController = FindObjectOfType<FishSfxController> ();
			if (sfxController != null) {
				sfxController.PlayButton ();
			}
            gameObject.SetActive(false);
        }

        private int page = 0;
        public void NextContent()
        {
			FishSfxController sfxController = FindObjectOfType<FishSfxController> ();
			if (sfxController != null) {
				sfxController.PlayButton ();
			}
            page += 1;
			UpdatePage ();
        }
		public void PrevContent (){
			FishSfxController sfxController = FindObjectOfType<FishSfxController> ();
			if (sfxController != null) {
				sfxController.PlayButton ();
			}
			page--;
			UpdatePage ();
		}

		public void UpdatePage(){
			nextButton.SetActive (true);
			prevButton.SetActive (true);
			if (page >= content.Length-1) {
				page = content.Length - 1;
				nextButton.SetActive (false);
			}
			if (page <= 0) {
				prevButton.SetActive (false);
				page = 0;
			}

			for (int i=0;i<content.Length;i++)
			{
				content[i].SetActive(false);
				dotObj [i].GetComponent<Image> ().sprite = dotOff;
			}
			dotObj [page].GetComponent<Image> ().sprite = dotOn;
			content[page].SetActive(true);
		}
    }
}
