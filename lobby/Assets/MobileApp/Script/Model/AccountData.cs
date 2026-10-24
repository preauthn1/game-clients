using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using SimpleJSON;

public class AccountData {
	public string playerName = "";
	public double credit = 0;
	public string bankName = "";
	public string bankNo = "";
	public string bankType = "";

	public void Init(JSONNode arr){
		if (arr [0] == "success") {
			playerName = arr [1];
			credit = arr [2].AsDouble;
			bankName = arr [3];
			bankNo = arr [4];
			bankType = arr [5];
		} 
	}
}