using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using SimpleJSON;

public class NotificationData  {

	public int type = 0;
	public string id ="";
	public string title = "";
	public string desc = "";

	public void Init(JSONNode arr){
		//[[20,"0c2e5e52-f80e-41d1-bf80-21cb8c5621c5",["Deposit Request Notification","Deposit request amount 10.000 has been cancelled."],null],[20,"07550367-0393-4542-95b5-1f4c75e56021",["Deposit Request Notification","Deposit request amount 10.000 has been cancelled."],null],[20,"8baa336a-054d-40ca-b570-8a82c4bc2e38",["Withdraw Request Notification","Withdraw request amount 10.000 has been cancelled."],null]]
		this.type = arr [0];
		this.id = arr [1];
		this.title = arr [2] [0];
		this.desc = arr [2] [1];
	}
}
