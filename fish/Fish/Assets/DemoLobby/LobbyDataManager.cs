using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using BestHTTP;
using SimpleJSON;
using System;

public class LobbyDataManager : MonoBehaviour {
	string mainLink;
	string appSignature = "123456";
	string userId = "";
	string password = "";
	string dateTime = "";
	string encrypToken = "";
	string urlLink = "";

	string gameType = "";
	string function = "";
	string opCode = "";
	string operatorID = "";
	// Use this for initialization
	void Start () {
		OnRequestLogin ("satest07", "abc123");
	}

	public void OnRequestLogin(string user,string pass){
		this.userId = user;
		this.password = [REDACTED];
		this.dateTime = System.DateTime.Now.ToString ();

		this.gameType = "20";
		this.function = "PlayerAuth";
		this.opCode = "ID";
		this.operatorID = "6y73cNo4";
		string sum = this.userId +this.password+this.gameType+this.function +dateTime +this.opCode+this.operatorID;
		encrypToken = [REDACTED] (sum);

		string link = mainLink + "/mobile/session/login";
		link = "http://0.0.0.0:8080/cmmace/func/cmoext/fish/authentication";

		HTTPRequest request = new HTTPRequest(new Uri(link), HTTPMethods.Post, OnSuccessLogin);
		request.AddField("username", this.userId);
		request.AddField("password", this.password);
		request.AddField("gameType", this.gameType);
		request.AddField("clientIp", "");
		request.AddField("reqDateTime", this.dateTime);
		request.AddField("opCode", this.opCode);
		request.AddField("securityToken", this.encrypToken);
		request.Send();
	}
	void OnSuccessLogin(HTTPRequest request, HTTPResponse response){
		//{"id":"satest07","balance":"0.0000"}
		PrintMsg (response.DataAsText);
		//		JSONNode arr = JSON.Parse (response.DataAsText);


		//socketDm.InitGame ("0.0.0.0", 8999, loginData.socketToken);
	}

	public void PrintMsg(string msg){
		Debug.Log(msg);
	}
}
