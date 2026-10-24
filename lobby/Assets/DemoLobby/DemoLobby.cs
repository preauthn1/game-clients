using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class DemoLobby : MonoBehaviour {

	public GameObject loading;

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}

	public void OpenFish(){
		loading.SetActive (true);
		SceneManager.LoadSceneAsync (1);
	}
}
