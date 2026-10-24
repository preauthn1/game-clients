using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace P8Games.MicroFish
{
    public class FishSfxController : MonoBehaviour
    {
        [SerializeField] public AudioClip shootSfx;
		[SerializeField] public AudioClip laserSfx;
		[SerializeField] public AudioClip coinSfx;
		[SerializeField] public AudioClip moveSfx;
		[SerializeField] public AudioClip buttonSfx;
		[SerializeField] public AudioClip betBtnSfx;

        [SerializeField] public AudioClip[] bigWinSfx;
		[SerializeField] public AudioClip[] bossSfx;
		[SerializeField] public AudioClip specialFishSfx;
		[SerializeField] public AudioClip specialFishWinSfx;
		[SerializeField] public AudioClip[] boomFishSfx;
		[SerializeField] public AudioClip[] laserFishSfx;
		[SerializeField] public AudioClip[] titleSfx;

        private float sfxVolume;
        bool mute;

        void Start()
        {
            CheckSfxStatus();
        }

        public void CheckSfxStatus()
        {
            GameImpl gameImpl = FindObjectOfType<GameImpl>();
            sfxVolume = (int)gameImpl.sfxVolume;
        }

        IEnumerator PlaySfx(AudioClip a)
        {
            AudioSource source = gameObject.AddComponent<AudioSource>();

            source.clip = a;
            source.ignoreListenerVolume = true;
            GameImpl gameImpl = FindObjectOfType<GameImpl>();
			if(gameImpl!=null)
            sfxVolume = (int)gameImpl.sfxVolume;
            source.volume = sfxVolume;
            source.Play();

            yield return new WaitForSeconds(a.length);
            Destroy(source);
        }
		public void PlayBoom(int i){
			StartCoroutine(PlaySfx(boomFishSfx[i]));
		}
		public void PlayLaserSW(int i){
			StartCoroutine(PlaySfx(laserFishSfx[i]));
		}
		public void PlayButton(){
			StartCoroutine(PlaySfx(buttonSfx));
		}
		public void PlayBetButton(){
			StartCoroutine(PlaySfx(betBtnSfx));
		}
		public void PlaySpecialFish(){
			StartCoroutine(PlaySfx(specialFishSfx));
		}
		public void PlaySpecialFishWin(){
			StartCoroutine(PlaySfx(specialFishWinSfx));
		}
        public void PlayShoot()
        {
            StartCoroutine(PlaySfx(shootSfx));
        }
		public void PlayLaser(){
			StartCoroutine(PlaySfx(laserSfx));
		}
		public void PlaySingleSfx(AudioClip audio){
			StartCoroutine(PlaySfx(audio));
		}

        private float sfxCount = 0;
		private float coinCount = 0;
		private float moveCount = 0;
		private float laserCount = 0;
        void Update()
        {
			laserCount -= Time.deltaTime;
            sfxCount -= Time.deltaTime;
			coinCount -= Time.deltaTime;
			moveCount -= Time.deltaTime;
        }

        public void PlayFish()
        {
            if (sfxCount < 0)
            {
//                int random = Random.Range(0, fishSfx.Length);
//                StartCoroutine(PlaySfx(fishSfx[random]));
            }
        }

		public void PlayBoss(){
			int random = 0;
//			StartCoroutine(PlaySfx(bossSfx[random]));
		}

		public void PlayCoin(){
			if (coinCount < 0) {
				coinCount = 1;
				StartCoroutine (PlaySfx (coinSfx));
			}
		}
		public void PlayMove(){
			if (moveCount < 0) {
				moveCount = 1;
				StartCoroutine (PlaySfx (moveSfx));
			}
		}

		public void PlayBigWin(int i){
			if (sfxCount < 0) {
				sfxCount = 3;
				StartCoroutine(PlaySfx(bigWinSfx[i]));
			}
		}
		public void PlayTitle(int i){
			StartCoroutine(PlaySfx(titleSfx[i]));
		}
    }
}
