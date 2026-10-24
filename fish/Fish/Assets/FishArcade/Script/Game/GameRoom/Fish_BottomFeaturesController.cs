using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

namespace P8Games.Fish
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

        private PoolView pv;

        private int tweenId = 0;

        private bool optionCondition = false;

        [SerializeField] public Fish_PaytableView paytableView;


        void Awake()
        {
            pv = FindObjectOfType<PoolView>();

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
            GameImpl gameImpl = FindObjectOfType<GameImpl>();
            gameImpl.SetSfxValume(1);
            soundOnObj.SetActive(true);
            soundOffObj.SetActive(false);

            FishSfxController sfxController = FindObjectOfType<FishSfxController>();
            if (sfxController != null)
                sfxController.CheckSfxStatus();
        }

        void SoundOff()
        {
            GameImpl gameImpl = FindObjectOfType<GameImpl>();
            gameImpl.SetSfxValume(0);
            soundOnObj.SetActive(false);
            soundOffObj.SetActive(true);


            FishSfxController sfxController = FindObjectOfType<FishSfxController>();
            if (sfxController != null)
                sfxController.CheckSfxStatus();
        }

        void BgmOn()
        {
            GameImpl gameImpl = FindObjectOfType<GameImpl>();
            gameImpl.SetMusicValume(1);
            bgmOnObj.SetActive(true);
            bgmOffObj.SetActive(false);

            FishMusicController musicController = FindObjectOfType<FishMusicController>();
            if (musicController != null)
                musicController.CheckMusicStatus();
        }

        void BgmOff()
        {
            GameImpl gameImpl = FindObjectOfType<GameImpl>();
            gameImpl.SetMusicValume(0);
            bgmOnObj.SetActive(false);
            bgmOffObj.SetActive(true);

            FishMusicController musicController = FindObjectOfType<FishMusicController>();
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
            arrowObj.transform.localScale = new Vector3(1, 1, 1);
            LeanTween.cancel(tweenId);
            optionContent.transform.localPosition = new Vector3(60, 0, 0);
            tweenId = LeanTween.moveLocalX(optionContent, -60, 0.5f).id;

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
        }

        void HideOptionContent()
        {
            LeanTween.cancel(tweenId);
            arrowObj.transform.localScale = new Vector3(-1, 1, 1);
            optionContent.transform.localPosition = new Vector3(60, 0, 0);
        }

        void LeaveRoom()
        {
            FishDataManager dataManager = FindObjectOfType<FishDataManager>();
            dataManager.CleanUp();
            //SceneManager.LoadScene("_AppLobbyV2");
			GameImpl gameImpl = FindObjectOfType<GameImpl>();
			gameImpl.BackToOneS ();
        }

        void AutoShoot()
        {
            if(pv.GetGunView(pv.ThisPlayerId) != null)
                pv.GetGunView(pv.ThisPlayerId).ToggleAutoShot();
        }

    }
}
