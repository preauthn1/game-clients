using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using SimpleJSON;

public class BankInfo{
	public int id = 0;
	public int value = 0;
	public string bank = "";
	public string accNum = "";
	public string accName = "";

	public BankInfo(JSONArray arr){
		id = arr [0].AsInt;
		value = arr [1].AsInt;
		bank = arr [2];
		accNum = arr [3];
		accName = arr [4];
	}
}