using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MissionOnOff : MonoBehaviour {

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {

	}
	bool isOpen = false;
	public void OnOff(){

		if (!isOpen) {
			gameObject.GetComponent<Animator> ().Play ("On");
		} else {
			gameObject.GetComponent<Animator> ().Play ("Off");
		}

		isOpen = !isOpen;
	}
}
