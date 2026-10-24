using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SeatManager : MonoBehaviour {

//	Vector3 playerPos;

	// Use this for initialization
	void Start () {
//		playerPos = Vector3.zero;
	}
	
	// Update is called once per frame
	void Update () {
		
	}

	void SeatMove(float x){
		transform.position = new Vector3(x,transform.position.y,transform.position.z);
	}
}
