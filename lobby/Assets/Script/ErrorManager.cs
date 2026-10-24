using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class ErrorManager : MonoBehaviour {
	public GameObject button;
	public Text errorText;

	public Text accessTokenTxt;
	public Text userIdTxt;
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}

	public void OnEnableErrorMsg(string msg, int type){
		gameObject.SetActive (true);
		button.SetActive (false);
		button.GetComponent<Button> ().onClick.RemoveAllListeners ();
		errorText.text = msg;
		if (type == 0) {
			button.SetActive (true);
			button.GetComponent<Button> ().onClick.AddListener (()=>DisableErrorMsg(type));
		} else if (type == 1) {
			button.SetActive (true);
			button.GetComponent<Button> ().onClick.AddListener (()=>DisableErrorMsg(type));
		}

	}
	public void DisableErrorMsg(int type){
		if (type == 0) {
			gameObject.SetActive (false);
		} else if (type == 1) {
			SceneManager.LoadScene (0);
		}
	}

	public void OnEnableDebugText(string msg,string user){
		gameObject.SetActive (true);
		button.SetActive (false);
		button.GetComponent<Button> ().onClick.RemoveAllListeners ();
		accessTokenTxt.text = msg;
			userIdTxt.text = user;

		button.SetActive (true);
		button.GetComponent<Button> ().onClick.AddListener (()=>DisableErrorMsg(0));
	}
}
