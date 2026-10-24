using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LobbyAudioManager : MonoBehaviour {
    public AudioClip loginBgm;
    public AudioClip[] lobbyBgm;
    AudioSource source;

    //0:OFF 1:ON
    public Toggle[] sfxToggle = new Toggle[2];
    public Toggle[] musicToggle = new Toggle[2];

    private Color unselectedColor = new Color(115f/255f, 109f/255f, 154f/255f);

    public void PlayLoginBGM()
    {
        PlayMusic(loginBgm);
    }

    public void PlayLobbyBGM()
    {
        StartCoroutine(playEngineSound());
    }
    public void UpdateBGMVolume(float vl)
    {
        source.volume = vl;
    }
    IEnumerator playEngineSound()
    {
        source.clip = lobbyBgm[Random.Range(0,lobbyBgm.Length)];
        source.Play();
        source.loop = false;
        source.volume = PlayerPrefs.GetInt("MusicV");
        yield return new WaitForSeconds(source.clip.length);
        PlayLobbyBGM();
    }

    void PlayMusic(AudioClip a)
    {
        source = GetComponent<AudioSource>();

        if (source.clip != a)
        {
            source.clip = a;
            source.ignoreListenerVolume = true;

            source.volume = PlayerPrefs.GetInt("MusicV");
            source.loop = true;
            source.Play();
        }
    }
    /*
    public void SetMusic()
    {
        int v = PlayerPrefs.GetInt("MusicV");
        if (v == 1)
        {
            v = 0;
            musicOnOff[0].SetActive(false);
            musicOnOff[1].SetActive(true);
        }
        else
        {
            v = 1;
            musicOnOff[1].SetActive(false);
            musicOnOff[0].SetActive(true);
        }
        source.volume = v;
        PlayerPrefs.SetInt("MusicV", v);
    }
    */

    /*
    public void SetSfx()
    {
        int v = PlayerPrefs.GetInt("SfxV");
        if (v == 1)
        {
            v = 0;
            sfxOnOff[0].SetActive(false);
            sfxOnOff[1].SetActive(true);
        }
        else
        {
            v = 1;
            sfxOnOff[1].SetActive(false);
            sfxOnOff[0].SetActive(true);
        }
        PlayerPrefs.SetInt("SfxV", v);
    }
    */

    public void SetMusic(bool value)
    {
        int v = value ? 1 : 0;
        source.volume = v;
        PlayerPrefs.SetInt("MusicV", v);
        for (int i = 0; i < musicToggle.Length; i++)
            musicToggle[i].transform.Find("Text").GetComponent<Text>().color = v == i ? Color.white : unselectedColor;
    }

    public void SetSfx(bool value)
    {
        int v = value ? 1 : 0;
        PlayerPrefs.SetInt("SfxV", v);
        for (int i = 0; i < sfxToggle.Length; i++)
            sfxToggle[i].transform.Find("Text").GetComponent<Text>().color = v == i ? Color.white : unselectedColor;
    }

    // Use this for initialization
    void Awake () {
        source = GetComponent<AudioSource>();

        if (!PlayerPrefs.HasKey("MusicV")) SetMusic(true);
        int v = PlayerPrefs.GetInt("MusicV");
        for (int i = 0; i < musicToggle.Length; i++)
        {
            musicToggle[i].isOn = v == i;
            musicToggle[i].transform.Find("Text").GetComponent<Text>().color = v == i ? Color.white : unselectedColor;
        }

        if (!PlayerPrefs.HasKey("SfxV")) SetSfx(true);
        v = PlayerPrefs.GetInt("SfxV");
        for (int i = 0; i < sfxToggle.Length; i++)
        {
            sfxToggle[i].isOn = v == i;
            sfxToggle[i].transform.Find("Text").GetComponent<Text>().color = v == i ? Color.white : unselectedColor;
        }

        musicToggle[1].onValueChanged.AddListener((value) =>
        {
            SetMusic(value);
        });

        sfxToggle[1].onValueChanged.AddListener((value) =>
        {
            SetSfx(value);
        });

        /*
        if (v == 0)
        {
            musicOnOff[0].SetActive(false);
            musicOnOff[1].SetActive(true);
        }
        else
        {
            musicOnOff[1].SetActive(false);
            musicOnOff[0].SetActive(true);
        }
        v = PlayerPrefs.GetInt("SfxV");
        if (v == 0)
        {
            sfxOnOff[0].SetActive(false);
            sfxOnOff[1].SetActive(true);
        }
        else
        {
            sfxOnOff[1].SetActive(false);
            sfxOnOff[0].SetActive(true);
        }
        */

    }

}
