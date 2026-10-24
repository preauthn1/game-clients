using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

namespace P8Games.Fish4
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
		[SerializeField] public GameObject autoActiveObj;

        public PoolView pv;

        private int tweenId = 0;

        private bool optionCondition = false;
		public Sprite[] autoSprite;
        [SerializeField] public Fish_PaytableView paytableView;


        void Awake()
        {
//            pv = FindObjectOfType<PoolView>();
			if (gameImpl == null)
				gameImpl = FindObjectOfType<GameImpl>();
			
            arrowObj.GetComponent<Button>().onClick.AddListener(ArrowCondition);
            homeObj.GetComponent<Button>().onClick.AddListener(LeaveRoom);

            soundOnObj.GetComponent<Button>().onClick.AddListener(SoundOff);
            soundOffObj.GetComponent<Button>().onClick.AddListener(SoundOn);
            bgmOnObj.GetComponent<Button>().onClick.AddListener(BgmOff);
            bgmOffObj.GetComponent<Button>().onClick.AddListener(BgmOn);
            infoObj.GetComponent<Button>().onClick.AddListener(paytableView.ShowPaytable);
            autoObj.GetComponent<Button>().onClick.AddListener(AutoShoot);
        }

        void SoundOn()
        {
            gameImpl.SetSfxValume(1);
            soundOnObj.SetActive(true);
            soundOffObj.SetActive(false);

            if (sfxController != null)
                sfxController.CheckSfxStatus();
        }

        void SoundOff()
        {
            gameImpl.SetSfxValume(0);
            soundOnObj.SetActive(false);
            soundOffObj.SetActive(true);

            if (sfxController != null)
                sfxController.CheckSfxStatus();
        }

        void BgmOn()
        {
            gameImpl.SetMusicValume(1);
            bgmOnObj.SetActive(true);
            bgmOffObj.SetActive(false);

            if (musicController != null)
                musicController.CheckMusicStatus();
        }

        void BgmOff()
        {
            gameImpl.SetMusicValume(0);
            bgmOnObj.SetActive(false);
            bgmOffObj.SetActive(true);

            if (musicController != null)
                musicController.CheckMusicStatus();
        }

        void ArrowCondition()
        {
            if (!optionCondition)
            {
                optionCondition = true;
                ShowOptionContent();
            }
            else
            {
                optionCondition = false;
                HideOptionContent();
            }
        }

        void ShowOptionContent()
        {
//            arrowObj.transform.localScale = new Vector3(1, 1, 1);
//            LeanTween.cancel(tweenId);
//            optionContent.transform.localPosition = new Vector3(60, 0, 0);
//            tweenId = LeanTween.moveLocalX(optionContent, -60, 0.5f).id;

			optionContent.GetComponent<Animator> ().Play ("open");

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
        }

        void HideOptionContent()
        {
//            LeanTween.cancel(tweenId);
//            arrowObj.transform.localScale = new Vector3(-1, 1, 1);
//            optionContent.transform.localPosition = new Vector3(60, 0, 0);

			optionContent.GetComponent<Animator> ().Play ("close");
        }

        void LeaveRoom()
        {
            FishDataManager dataManager = FindObjectOfType<FishDataManager>();
			if(dataManager!=null)
            dataManager.CleanUp();

			if (gameImpl == null)
				gameImpl = FindObjectOfType<GameImpl>();
            //SceneManager.LoadScene("_AppLobbyV2");
			gameImpl.BackToOneS ();
        }

        void AutoShoot()
        {
			if (pv.GetGunView (pv.ThisPlayerId) != null) {
				bool isOn = pv.GetGunView (pv.ThisPlayerId).ToggleAutoShot ();
				if (isOn) {
					autoObj.GetComponent<Image> ().sprite = autoSprite [0];
					autoActiveObj.SetActive(true);
				} else {
					autoObj.GetComponent<Image> ().sprite = autoSprite [1];
					autoActiveObj.SetActive(false);
				}
			}
        }

		public GameObject settingPanel;
		public Slider soundSlider;
		public Slider musicSlider;
		public Image[] speakerObj;
		public Sprite[] speakerOnOffSprite;
		public FishSfxController sfxController;
		public FishMusicController musicController;
		public GameImpl gameImpl;
		public void SettingActive(){
			settingPanel.SetActive (!settingPanel.activeInHierarchy);
			CheckSpeakerStatus ();
		}
		public void SetMusic(){
			if (gameImpl == null)
				gameImpl = FindObjectOfType<GameImpl>();
			if (gameImpl.musicVolume <= 0) {
				gameImpl.SetMusicValume (1);
			} else {
				gameImpl.SetMusicValume (0);
			}
			CheckSpeakerStatus ();
		}
		public void SetMusicSlider(){
			if (gameImpl == null)
				gameImpl = FindObjectOfType<GameImpl>();
			gameImpl.SetMusicValume(musicSlider.value);
			CheckSpeakerStatus ();
		}
		public void SetSound(){
			if (gameImpl == null)
				gameImpl = FindObjectOfType<GameImpl>();
			if (gameImpl.sfxVolume <= 0) {
				gameImpl.SetSfxValume (1);
			} else {
				gameImpl.SetSfxValume (0);
			}
			CheckSpeakerStatus ();
		}
		public void SetSoundSlider(){
			if (gameImpl == null)
				gameImpl = FindObjectOfType<GameImpl>();
			gameImpl.SetSfxValume(soundSlider.value);
			CheckSpeakerStatus ();
		}
		public void SetSoundPlusMinus(int i){
			float volume = gameImpl.sfxVolume;
			if (i == 0) {
				volume += 0.1f;
			} else {
				volume -= 0.1f;
			}
			if (volume >= 1.0f) {
				volume = 1.0f;
			}
			if(volume <= 0) {
				volume = 0;
			}
			gameImpl.SetSfxValume (volume);
			CheckSpeakerStatus ();
		}
		public void SetMusicPlusMinus(int i){
			float volume = gameImpl.musicVolume;
			if (i == 0) {
				volume += 0.1f;
			} else {
				volume -= 0.1f;
			}
			if (volume >= 1.0f) {
				volume = 1.0f;
			}
			if(volume <= 0) {
				volume = 0;
			}
//			Debug.Log (gameImpl.sfxVolume);
			gameImpl.SetMusicValume (volume);
			CheckSpeakerStatus ();
		}
		public void CheckSpeakerStatus(){
			if (sfxController != null)
				sfxController.CheckSfxStatus ();
			if (musicController != null)
				musicController.CheckMusicStatus();

//			Debug.Log (gameImpl.sfxVolume);
			if (gameImpl.sfxVolume <= 0) {
				gameImpl.SetSfxValume (0);
				soundSlider.value = 0;
				speakerObj [1].sprite = speakerOnOffSprite [1];
			} else {
				soundSlider.value = gameImpl.sfxVolume;
				speakerObj [1].sprite = speakerOnOffSprite [0];
			}
			if (gameImpl.musicVolume <= 0) {
				gameImpl.SetMusicValume(0);
				musicSlider.value = 0;
				speakerObj [0].sprite = speakerOnOffSprite [1];
			} else {
				musicSlider.value = gameImpl.musicVolume;
				speakerObj [0].sprite = speakerOnOffSprite [0];
			}
		}
    }
}
