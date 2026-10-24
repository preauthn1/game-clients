using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using SimpleJSON;

public class WithdrawData {
	public string status="";
	public int min;
	public int max;
	public string accountBank="";
	public string accountNumber="";
	public string accountName="";
	public List<BankInfo> bankInfo = new List<BankInfo>();

	public void GetWithdraw(JSONNode arr){
		//["success",10,1000000]
		JSONArray data = arr.AsArray;
		status = data [0];
		min = data [1];
		max = data [2];
	}
	public void GetBankInfo(JSONNode arr){
		//["success","Bank BNI","0123456789","abc123"]
		JSONArray data = arr.AsArray;
		status = data [0];
		accountBank = data [1];
		accountNumber = data [2];
		accountName = data [3];
	}
}