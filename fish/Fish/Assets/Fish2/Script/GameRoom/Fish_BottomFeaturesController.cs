using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

namespace P8Games.MicroFish
{
    public class Fish_BottomFeaturesController : MonoBehaviour
    {
        [Header("Option Content")] [SerializeField] public GameObject optionContent;
        [SerializeField] public GameObject arrowObj;
        [SerializeField] public GameObject homeObj;
        [SerializeField] public GameObject soundOnObj;
        [SerializeField] public GameObject soundOffObj;
        [SerializeField] public GameObject bgmOnObj;
        [SerializeField] public GameObject bgmOffObj;
        [SerializeField] public GameObject infoObj;
        [SerializeField] public GameObject autoObj;
		[SerializeField] public GameObject changeWeaponObj;

        private PoolView pv;

        private int tweenId = 0;

        private bool optionCondition = false;

        [SerializeField] public Fish_PaytableView paytableView;

		public GameObject loadingObj;

		public Sprite[] autoSprite;
        void Awake()
        {
            pv = FindObjectOfType<PoolView>();

            arrowObj.GetComponent<Button>().onClick.AddListener(ArrowCondition);
            homeObj.GetComponent<Button>().onClick.AddListener(LeaveRoom);

            soundOnObj.GetComponent<Button>().onClick.AddListener(SoundOff);
            soundOffObj.GetComponent<Button>().onClick.AddListener(SoundOn);
            bgmOnObj.GetComponent<Button>().onClick.AddListener(BgmOff);
            bgmOffObj.GetComponent<Button>().onClick.AddListener(BgmOn);
			infoObj.GetComponent<Button>().onClick.AddListener(ShowPaytable);
            autoObj.GetComponent<Button>().onClick.AddListener(AutoShoot);
			changeWeaponObj.GetComponent<Button>().onClick.AddListener(ChangeWeapon);
        }
		void ShowPaytable(){
			ArrowCondition ();
			paytableView.ShowPaytable ();
		}
        void SoundOn()
        {
            GameImpl gameImpl = FindObjectOfType<GameImpl>();
            gameImpl.SetSfxValume(1);
            soundOnObj.SetActive(true);
            soundOffObj.SetActive(false);

            FishSfxController sfxController = FindObjectOfType<FishSfxController>();
			if (sfxController != null) {
				sfxController.CheckSfxStatus ();
				sfxController.PlayButton ();
			}
        }

        void SoundOff()
        {
            GameImpl gameImpl = FindObjectOfType<GameImpl>();
            gameImpl.SetSfxValume(0);
            soundOnObj.SetActive(false);
            soundOffObj.SetActive(true);


            FishSfxController sfxController = FindObjectOfType<FishSfxController>();
			if (sfxController != null) {
				sfxController.CheckSfxStatus ();
				sfxController.PlayButton ();
			}
        }

        void BgmOn()
        {
            GameImpl gameImpl = FindObjectOfType<GameImpl>();
            gameImpl.SetMusicValume(1);
			gameImpl.SetSfxValume(1);
            bgmOnObj.SetActive(true);
            bgmOffObj.SetActive(false);

            FishMusicController musicController = FindObjectOfType<FishMusicController>();
			FishSfxController sfxController = FindObjectOfType<FishSfxController>();
			if (musicController != null) {
				musicController.CheckMusicStatus ();
				sfxController.CheckSfxStatus();
				sfxController.PlayButton ();
			}
        }

        void BgmOff()
        {
            GameImpl gameImpl = FindObjectOfType<GameImpl>();
            gameImpl.SetMusicValume(0);
			gameImpl.SetSfxValume(0);
            bgmOnObj.SetActive(false);
            bgmOffObj.SetActive(true);

			FishMusicController musicController = FindObjectOfType<FishMusicController>();
			FishSfxController sfxController = FindObjectOfType<FishSfxController>();
			if (musicController != null) {
				musicController.CheckMusicStatus ();
				sfxController.CheckSfxStatus();
				sfxController.PlayButton ();
			}
        }

        void ArrowCondition()
        {
            if (!optionCondition)
            {
                ShowOptionContent();
            }
            else
            {
                HideOptionContent();
            }
        }

        void ShowOptionContent()
        {

			optionCondition = true;
            arrowObj.transform.localScale = new Vector3(1, 1, 1);
            LeanTween.cancel(tweenId);
            optionContent.transform.localPosition = new Vector3(20, 0, 0);
            tweenId = LeanTween.moveLocalX(optionContent, -85, 0.5f).id;

            GameImpl gameImpl = FindObjectOfType<GameImpl>();
            if ((int)gameImpl.sfxVolume == 1)
            {
                soundOnObj.SetActive(true);
                soundOffObj.SetActive(false);
            }
            else
            {
                soundOnObj.SetActive(false);
                soundOffObj.SetActive(true);
            }

            //Debug.Log((int)gameImpl.musicVolume);
            if ((int)gameImpl.musicVolume == 1)
            {
                Debug.Log((int)gameImpl.musicVolume);
                bgmOnObj.SetActive(true);
                bgmOffObj.SetActive(false);
            }
            else
            {
                bgmOnObj.SetActive(false);
                bgmOffObj.SetActive(true);
            }
			FishSfxController sfxController = FindObjectOfType<FishSfxController>();
			if (sfxController != null) {
				sfxController.PlayButton ();
			}
        }

        public void HideOptionContent()
        {
			optionCondition = false;
            LeanTween.cancel(tweenId);
            arrowObj.transform.localScale = new Vector3(-1, 1, 1);
            optionContent.transform.localPosition = new Vector3(20, 0, 0);
			FishSfxController sfxController = FindObjectOfType<FishSfxController>();
			if (sfxController != null) {
				sfxController.PlayButton ();
			}
        }

        void LeaveRoom()
        {
			if(loadingObj!=null)
			loadingObj.SetActive (true);
            FishDataManager dataManager = FindObjectOfType<FishDataManager>();
            dataManager.CleanUp();
            //SceneManager.LoadScene("_AppLobbyV2");
			GameImpl gameImpl = FindObjectOfType<GameImpl>();
			gameImpl.BackToOneS ();
        }

        void AutoShoot()
        {
//			bool isAuto = false;
//            if(pv.GetGunView(pv.ThisPlayerId) != null)
//				isAuto = pv.GetGunView(pv.ThisPlayerId).ToggleAutoShot();
//
//			if (isAuto) {
//				autoObj.GetComponent<Image> ().sprite = autoSprite [1];
//			} else {
//				autoObj.GetComponent<Image> ().sprite = autoSprite [0];
//			}
        }

		void ChangeWeapon(){
			if (pv.GetGunView (pv.ThisPlayerId) != null) {
				FishSfxController sfxController = FindObjectOfType<FishSfxController>();
				if (sfxController != null) {
					sfxController.PlayButton ();
				}
				pv.GetGunView (pv.ThisPlayerId).ChangeWeapon ();
			}
		}

    }
}
