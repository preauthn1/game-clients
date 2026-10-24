using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using SimpleJSON;

public class GameTokenData : MonoBehaviour {

	public string username = "";
	public string gameToken = "";

	public void Init(JSONNode arr){
		gameToken = [REDACTED] [0];
		username = arr [1];
	}
}