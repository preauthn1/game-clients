using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using SimpleJSON;


public class DepositData {
	public string status = "";
	public double minDeposit = 0;
	public double maxDesposit = 0;

	public List<BankInfo> bankInfo = new List<BankInfo>();
	public void GetDeposit(JSONNode arr){
		//["success",10000,100000000,[[200,1,"Bank Central Asia","101101101101","TestBola"]]]
		JSONArray data = arr.AsArray;
		status = data [0];
		minDeposit = data[1].AsDouble;
		maxDesposit = data [2].AsDouble;

		JSONArray _bankInfoArr = data [3].AsArray;

		foreach (JSONArray _arr in _bankInfoArr) {
			BankInfo info = new BankInfo (_arr);
			bankInfo.Add (info);
		}
	}
}

