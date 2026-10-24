using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class UniWebViewManger : MonoBehaviour {
    public UniWebView webView;
    // Use this for initialization
    void Start() {
        webView.OnShouldClose += OnShouldClose;
        //webView.SetShowSpinnerWhileLoading(true);
        webView.OnPageFinished += OnFinishLoadPage;
        webView.OnKeyCodeReceived += OnButtonClick;
//        webView.AddUrlScheme("example.invalid");
        webView.SetBackButtonEnabled(true);
        webView.Load(PlayerPrefs.GetString("GameUrl"));
        webView.OnMessageReceived += OnMessageReceived;
    }
    public void OnMessageReceived(UniWebView webView, UniWebViewMessage message){
        Debug.Log("UniWebViewManger Message here");
        Debug.Log(message.Path);
        Debug.Log(message.RawMessage);
        if (message.Path.Equals("backlobby") || message.Path.Equals("endSession"))
        {
            PlayerPrefs.SetInt("BackFromFish", 1);
            SceneManager.LoadScene(0);
		}else if(message.Path.Equals("openweb") ){
			UpdateAlpha ("123");
		}
    }
    public void OnPageErrorReceived(UniWebView webView, int errorCode, string errorMessage){

    }
    public void OnFinishLoadPage(UniWebView web, int statusCode, string url)
    {
		webView.Alpha = PlayerPrefs.GetInt("webviewalpha");
		webView.Show();
    }
	public void UpdateAlpha(string a){
		//string[] splt = a.Split ('.');
		//webView.Alpha = float.Parse(splt[1]);
		webView.Alpha = 1;
	}
    public bool OnShouldClose(UniWebView webView)
    {
        PlayerPrefs.SetInt("BackFromFish", 1);
        SceneManager.LoadScene(0);
        return false;
    }

    public void OnButtonClick(UniWebView webView, int key)
    {
        if(key == 4)
        {
            PlayerPrefs.SetInt("BackFromFish", 1);
            SceneManager.LoadScene(0);
        }
    }
	public void Update(){
		if (Input.GetKeyDown (KeyCode.A)) {
			PlayerPrefs.SetInt("BackFromFish", 1);
			SceneManager.LoadScene(0);
		}
	}

}
