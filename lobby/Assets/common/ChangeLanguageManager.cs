using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ChangeLanguageManager : MonoBehaviour {

    public delegate void OnChangeLanguageDelegate(int value);
    public static event OnChangeLanguageDelegate OnChangeLanguage;

    public GameObject[] objs;
    public string[] texts;
    public Text textObj;
	public Font[] fontfile;
	public FontStyle fontStyle;
    public void SetLanguage(int i)
    {
        PlayerPrefs.SetInt("Language", i);
        OnChangeLanguage(i);
    }
    // Use this for initialization
    void Start () {
		ChangeLanguage(PlayerPrefs.GetInt("Language"));
		if(textObj!=null)
			fontStyle = textObj.fontStyle;
	}
	
	// Update is called once per frame
	void Update () {
        
	}
    
    void ChangeLanguage(int value)
    {
        for(int i = 0; i < objs.Length; i++)
        {
            objs[i].SetActive(false);
        }

        if(objs.Length>0)
        if (objs[value] != null)
        {
            objs[value].SetActive(true);
        }

        if (textObj != null)
        {
			textObj.font = fontfile [value];
            textObj.text = texts[value];

			if (value == 0)
				textObj.fontStyle = FontStyle.Normal;
			else
				textObj.fontStyle = fontStyle;
        }
    }
    public bool isDebug;
    void OnEnable()
    {
        ChangeLanguageManager.OnChangeLanguage += ChangeLanguage;
        ChangeLanguage(PlayerPrefs.GetInt("Language"));
    }


    void OnDisable()
    {
        ChangeLanguageManager.OnChangeLanguage -= ChangeLanguage;
    }
}
