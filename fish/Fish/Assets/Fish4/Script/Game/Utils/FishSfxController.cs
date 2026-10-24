using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace P8Games.Fish4
{
    public class FishSfxController : MonoBehaviour
    {
        [SerializeField] public AudioClip shootSfx;
		[SerializeField] public AudioClip laserSfx;
		[SerializeField] public AudioClip coinSfx;
		[SerializeField] public AudioClip moveSfx;

        [SerializeField] public AudioClip[] fishSfx;
		[SerializeField] public AudioClip[] bossSfx;
		[SerializeField] public AudioClip specialFishSfx;
		[SerializeField] public AudioClip specialFishWinSfx;
		[SerializeField] public AudioClip[] boomFishSfx;
		[SerializeField] public AudioClip[] boomFishExp;
		[SerializeField] public AudioClip boomBossDestroyExp;
		[SerializeField] public AudioClip[] boomBossExp;
		[SerializeField] public AudioClip[] laserSPSfx;
		[SerializeField] public AudioClip[] drillSPSfx;

        private float sfxVolume;
        bool mute;

        void Start()
        {
            CheckSfxStatus();
        }

        public void CheckSfxStatus()
        {
            GameImpl gameImpl = FindObjectOfType<GameImpl>();
			if(gameImpl!=null)
			sfxVolume = (float)gameImpl.sfxVolume;
        }

        IEnumerator PlaySfx(AudioClip a)
        {
            AudioSource source = gameObject.AddComponent<AudioSource>();

            source.clip = a;
            source.ignoreListenerVolume = true;
            GameImpl gameImpl = FindObjectOfType<GameImpl>();
			if(gameImpl!=null)
            sfxVolume = (float)gameImpl.sfxVolume;

            source.volume = sfxVolume;
            source.Play();

            yield return new WaitForSeconds(a.length);
            Destroy(source);
        }
		public void PlayBoom(int i){
			StartCoroutine(PlaySfx(boomFishSfx[i]));
		}
		public void PlayBoomExp(int i){
			StartCoroutine(PlaySfx(boomFishExp[i]));
		}
		public void PlayBoomBossExp(int i){
			StartCoroutine(PlaySfx(boomBossExp[i]));
		}
		public void PlayBoomBossDestroy(){
			StartCoroutine(PlaySfx(boomBossDestroyExp));
		}
		public void PlayLaserSP(int i){
			StartCoroutine(PlaySfx(laserSPSfx[i]));
		}
		public void PlayDrill(int i){
			StartCoroutine(PlaySfx(drillSPSfx[i]));
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
			if (laserCount < 0)
			{
				laserCount = 1f;
				StartCoroutine(PlaySfx(laserSfx));
			}
		}
		public void PlayDrillLoop(int i){
			if (laserCount < 0)
			{
				laserCount = 0.5f;
				StartCoroutine(PlaySfx(drillSPSfx[i]));
			}
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
                sfxCount = 15;
                int random = Random.Range(0, fishSfx.Length);
                StartCoroutine(PlaySfx(fishSfx[random]));
            }
        }

		public void PlayBoss(){
			int random = 0;
			StartCoroutine(PlaySfx(bossSfx[random]));
		}

		public void PlayCoin(){
			if (coinCount < 0) {
				coinCount = 2;
				StartCoroutine (PlaySfx (coinSfx));
			}
		}
		public void PlayMove(){
			if (moveCount < 0) {
				moveCount = 2;
				//StartCoroutine (PlaySfx (moveSfx));
			}
		}
    }
}
