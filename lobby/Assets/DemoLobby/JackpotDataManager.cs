#pragma warning disable 219 //value never used
#pragma warning disable 414 //private field is assigned but value is never used.
#pragma warning disable 649 //is never assigned to, and will always have its default value `null'

using System;
using System.Collections;
using System.Collections.Generic;
using GSLibrary.Common.Connection;
using GSLibrary.Common.Data;
using SimpleJSON;
using UnityEngine;
using UnityEngine.UI;

	public class JackpotDataManager : WebDataManager
    {

	public Text totalJP;
	public override void Register(IConnector connector)
	{


	}
	public override void Unregister(IConnector connector)
	{
	}
	#region Integration
	public void InitGame(string token)
	{
        //		this.ip = "0.0.0.0";
        //		this.port = 9098;
        //this.ip = "example.invalid"; // 正式
        this.ip = "example.invalid"; // demo
        this.port = -1;
		this.token = [REDACTED];

		this.webSocketManager.ConnectTokenDomain(ip, port, this.token);
	}

	#endregion
	public int jptotalValue = 0;
	public int currentJPValue = 0;
	public bool isRunningJP = false;
    public override void OnReceiveIncomingMessage(string data, bool restore = false)
    {
            Debug.Log("OnReceiveIncomingMessage::" + data);

		//{"actionId":[[199999688,1],[92797078,2],[51142110,3],[26651743,4]]
            JSONNode jsonResult = JSON.Parse(data);

		int total = 0;

		for (int i = 0; i < jsonResult.Count; i++) {
			total += jsonResult [i] [0].AsInt;
		}

		if(totalJP!=null){
			if (jptotalValue == 0) {
				jptotalValue = total;
				total -= 24;
				currentJPValue = total;
				totalJP.text = total.ToString ("###,###");
				isRunningJP = true;
				InvokeRepeating ("UpdateJackpotValueFunc", 1, 0.2f);
			} else {
				jptotalValue = total;
			}
        }
	}
	#region Start Connect Process
	void Update(){
	
	}
	public void UpdateJackpotValueFunc(){
		if(jptotalValue > currentJPValue){
			currentJPValue += 1;
			totalJP.text = currentJPValue.ToString ("###,###");
		}
	}
	public override void OnCheckVersionFailed()
	{
	}
	public override void OnSuspend()
	{
		Debug.Log("Suspend");
	}

	protected override bool isLoginScene()
	{
		return false;
	}

	public override void OnCheckVersionSuccess(int type, string version, string loginUrl, string mainFrom, string mainTo, string downloadLink)
	{

	}

	public override void LoginSuccess()
	{
		Debug.Log("<color=cyan>On Login Success</color>");
	}

	public override void OnLoginFailed(GSConnectionErrorType typeId)
	{
		Debug.Log("<color=cyan>On Login Success</color>");
	}

	public override void OnConnectingSocket()
	{
		Debug.Log("<color=cyan>On Connecting Socket</color>");
	}

	public override void OnReconnecting()
	{
		Debug.Log("<color=cyan>On Reconnecting</color>");
	}

	public override void OnVerifying()
	{
		Debug.Log("<color=cyan>On Verifying</color>");
	}

	public override void OnConnectSocketFailed()
	{
		Debug.Log("<color=cyan>On Connect Socket Fail</color>");
	}

	public override void OnVerifyFailed()
	{
		Debug.Log("<color=cyan>On Verify Fail</color>");
	}

	public override void OnConnectSocketSuccess()
	{
		Debug.Log("<color=cyan>On Connect Socket Success</color>");
	}

	public override void OnVerifySuccess()
	{
		EnabledPingPong();
		Debug.Log("<color=cyan>On Verify Success</color>");
	}

	public override void OnReconnectFail()
	{
		Debug.Log("<color=cyan>On Reconnect Fail</color>");
	}

	public override void OnDisconnect(GSConnectionErrorType typeId)
	{
		DisablePingPong();
		OnConnectionClosed(typeId, GSGameState.Disconnected);
		Debug.Log("<color=cyan>On Disconnect</color>");
	}

	public override void OnReconnectSuccess()
	{
		EnabledPingPong();
		Debug.Log("<color=cyan>On Reconnect Success</color>");
	}
	protected void OnConnectionClosed(GSConnectionErrorType type, GSGameState gameState)
	{
		
	}
	#endregion

	#region Clean Up
	public void CleanUp()
	{
		DisablePingPong();
		if(this.webSocketManager!=null)
			this.webSocketManager.Disconnect(GSConnectionErrorType.USER_INITIATE_DISCONNECT);
		if(this.gameObject!=null)
			Destroy(this.gameObject);
	}
	#endregion

    }