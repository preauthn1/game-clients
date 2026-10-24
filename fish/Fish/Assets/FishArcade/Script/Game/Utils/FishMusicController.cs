using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace P8Games.Fish
{
    public class FishMusicController : MonoBehaviour
    {

        [SerializeField] public AudioClip[] bgm;
        [SerializeField] public AudioClip switchBgm;

        AudioSource source;

        float volume;
        private bool sfx;


        private float musicVolume;

        int musicId = 0;


        void Start()
        {
            CheckMusicStatus();
        }

        public void CheckMusicStatus()
        {
            GameImpl gameImpl = FindObjectOfType<GameImpl>();
            musicVolume = (int) gameImpl.musicVolume;
            volume = musicVolume;
            if (source != null)
            {
                source.volume = volume;
            }
        }

        void PlayMusic(AudioClip a)
        {
            source = GetComponent<AudioSource>();

            if (source.clip != a)
            {
                source.clip = a;
                source.ignoreListenerVolume = true;
                GameImpl gameImpl = FindObjectOfType<GameImpl>();

				if(gameImpl!=null)
                volume = (int)gameImpl.musicVolume;
                source.volume = volume;
                source.loop = true;
                source.Play();
            }
        }

        public IEnumerator PlaySwitchMusic()
        {
            source = GetComponent<AudioSource>();

            source.clip = switchBgm;
            source.ignoreListenerVolume = true;
            GameImpl gameImpl = FindObjectOfType<GameImpl>();
            volume = (int)gameImpl.musicVolume;
            source.volume = volume;
            source.loop = false;
            source.Play();

            while (source.isPlaying)
                yield return true;

            PlayBgm();
        }

        public void SetBgm(int value)
        {
			musicId = value;
			PlayBgm();
        }

        public void PlayBgm()
        {
            PlayMusic(bgm[musicId]);
        }

        public void StopBgm()
        {
            source = GetComponent<AudioSource>();
            source.Stop();
            musicId = 0;
        }
    }
}