using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using BestHTTP;
using System;
using SimpleJSON;
using UnityEngine.Networking;
using UnityEngine.SceneManagement;
using System.Linq;

namespace BetVictor
{
	public class DataManager : MonoBehaviour {
		public GameController controller;

		string mainLink;
		string appSignature = "123456";
		string userId = "";
		string password = "";
		string dateTime = "";
		string encrypToken = "";
		string urlLink = "";

		GetLoginData loginData = new GetLoginData();
		public string version = "1.0.0";
		void Awake(){
			//			mainLink = "http://0.0.0.0:8280"; // indo
			//			mainLink = "http://0.0.0.0:8280"; // thai
			mainLink = ConfigFile.mobileServiceIp;


			//			mainLink = "http://0.0.0.0:8380";
			//			mainLink = "http://0.0.0.0:8080";
			//			mainLink = "http://0.0.0.0:8080";

			//OnRequestLogin("satest12","abc123");
			//			mainLink = "http://0.0.0.0:8580";


			//DontDestroyOnLoad (this);
			//			CheckVersion ();
		}
		public void CheckVersion(){
			HTTPRequest request = new HTTPRequest(new Uri(ConfigFile.checkMobile), HTTPMethods.Post, SuccessGetVersion);
			request.AddField("test", "test");
			request.Send();
		}
		public void SuccessGetVersion(HTTPRequest request, HTTPResponse response){
			PrintMsg (response.DataAsText);

			JSONNode arr = JSON.Parse (response.DataAsText);
			JSONArray jsonArr = arr.AsArray;
			if (arr [0].AsInt == 0) {
				//Update App
				Debug.Log(jsonArr[2]);
				JSONNode arr2 =  JSON.Parse (jsonArr[2]);

				controller.GetBundleVersion(arr2);
				if (version != jsonArr [1]) {
					string link = jsonArr [3];
					Debug.Log (jsonArr [3]);
					JSONNode _arr = JSON.Parse (link);
					Debug.Log (_arr);
					controller.EnableUpdateVersion (_arr);
				}
			} 
			else if (arr [0].AsInt == 1) {
				//InMaintenance
				controller.EnableMaintenance(arr [1],arr [2]);
			}else {
				controller.OnEnableErrorMsg ("Fail To Connect Server!", 0);
			}
		}
		public void OnRequestLogin(string user,string pass){
			this.userId = user;
			this.password = [REDACTED];
			//this.dateTime = "05/14/2018 23:12:14";
			this.dateTime = System.DateTime.Now.ToString ();

			string sum = this.userId +this.password +dateTime +appSignature;
			encrypToken = [REDACTED] (sum);
			string link = mainLink + "/mobile/session/login";
			Debug.Log (link);
			HTTPRequest request = new HTTPRequest(new Uri(link), HTTPMethods.Post, OnSuccessLogin);
			request.AddField("username", this.userId);
			request.AddField("password", this.password);
			request.AddField("reqDateTime", this.dateTime);
			request.AddField("securityToken", this.encrypToken);
			request.Send();
		}
		void OnSuccessLogin(HTTPRequest request, HTTPResponse response){
			//["login.success",["Xx5GFM4767h1WWeF",""]]
			//["login.failed","login.error"]
			PrintMsg (response.DataAsText);
			if (String.IsNullOrEmpty (response.DataAsText)) {
				controller.OnEnableErrorMsg ("Internal Server Error!", 0);
				return;
			}

			JSONNode arr = JSON.Parse (response.DataAsText);

			if (arr [0] == "login.success") {
				GetLoginData data = new GetLoginData ();
				data.Init (arr);
				loginData = data;
				OnRequestPlayerGameInfo ();
				InvokeRepeating ("OnRequestPlayerGameInfo", 3, 1);
				OnRequestPlayerSessionInfo();
				OnRequestTransferLists ();
				//				EnabledPingPong ();
				controller.OnSuccessLogin ();

			} 
			else {
				controller.OnEnableErrorMsg (arr [1], 0);
			}
			//socketDm.InitGame ("0.0.0.0", 8999, loginData.socketToken);
		}

		public void OnRequestPlayerGameInfo(){
			string sum = this.userId  +loginData.session+dateTime +appSignature;
			encrypToken = [REDACTED] (sum);

			string link = mainLink + "/mobile/account/getAccountDto";
			HTTPRequest request = new HTTPRequest(new Uri(link), HTTPMethods.Post, OnGetPlayerGameInfoResponse);
			request.AddField("username", this.userId);
			request.AddField("session", loginData.session);
			request.AddField("reqDateTime", this.dateTime);
			request.AddField("securityToken", this.encrypToken);
			request.Send();
		}	

		void OnGetPlayerGameInfoResponse(HTTPRequest request, HTTPResponse response){
			//["success","satest12",100001.10000,null,null,null,"example.invalid/ref/?rid\u003drf145b51I",null,1,"example.invalid/ref/?rid\u003drf245b0e7"]
			//["login.failed","login.error"]
			PrintMsg (response.DataAsText);
			JSONNode arr = JSON.Parse (response.DataAsText);

			if (arr [0] == "success") {
				controller.OnSuccessReceiveLobbyInfo (arr [1], arr [2].AsDouble);
			} 
			else {
				CancelInvoke ();
				controller.OnEnableErrorMsg (arr [1], 0);
			}
			//socketDm.InitGame ("0.0.0.0", 8999, loginData.socketToken);
		}

		public void OnRequestTransferLists(){
			string sum = this.userId  +loginData.session+dateTime +appSignature;
			encrypToken = [REDACTED] (sum);

			string link = mainLink + "/mobile/cm/getPlayerGameTransferInfoList";

			HTTPRequest request = new HTTPRequest(new Uri(link), HTTPMethods.Post, OnGetPlayerTransferListsResponse);
			request.AddField("username", this.userId);
			request.AddField("session", loginData.session);
			request.AddField("reqDateTime", this.dateTime);
			request.AddField("securityToken", this.encrypToken);
			request.Send();
		}
		void OnGetPlayerTransferListsResponse(HTTPRequest request, HTTPResponse response){
			//["success",[["FishAce","7C0p5QF0d3RAGqk3","0.00",29362,20,62],["GP Suite",null,"0.00",29376,20,41],["KA","kgs800057","0.00",29364,20,242],["SlotAce","092V150IU45eQCtw","0.00",29363,20,236]]]
			//["login.failed","login.error"]
			PrintMsg (response.DataAsText);
			JSONNode arr = JSON.Parse (response.DataAsText);

			if (arr [0] == "success") {
				//				controller.OnSuccessReceiveSessionInfo (arr [1]);
				for (int i = 0; i < arr [1].AsArray.Count; i++) {
					//					Debug.Log (arr [1] [i]);
					//					Debug.Log (arr [1] [i][2].AsInt +" / " +arr [1] [i][3]);

					if(arr [1] [i] [5].AsInt==41){
						gpid = arr [1] [i] [3].AsInt;
					}
					if (arr [1] [i] [2].AsInt > 0) {
						//						Debug.Log ("On Request Transfer To Main");
						//						Debug.Log (arr [1] [i][2].AsInt +" / " +arr [1] [i][3]);
						//OnRequestTransfer(arr [1] [i][3].AsInt,-6,arr [1] [i][2].AsInt);
						OnRequestInstantBalance(gpid);
					}
				}
			} 
			else {
				controller.OnEnableErrorMsg (arr [1], 0);
			}
			//socketDm.InitGame ("0.0.0.0", 8999, loginData.socketToken);
		}
		int gpid = 0;
		#region For GP
		public void OnRequestInstantBalance(int from){
			string sum = this.userId  +loginData.session+dateTime+from.ToString() +appSignature;
			encrypToken = [REDACTED] (sum);

			string link = mainLink + "/mobile/cma/gameWalletRefresh";

			HTTPRequest request = new HTTPRequest(new Uri(link), HTTPMethods.Post, OnInstantBalanceResponse);
			request.AddField("username", this.userId);
			request.AddField("session", loginData.session);
			request.AddField("reqDateTime", this.dateTime);
			request.AddField("gameIdId", from.ToString());
			request.AddField("securityToken", this.encrypToken);
			request.Send();
		}
		void OnInstantBalanceResponse(HTTPRequest request, HTTPResponse response){
			//["success","268.00"]
			//["login.failed","login.error"]
			PrintMsg (response.DataAsText);
			JSONNode arr = JSON.Parse (response.DataAsText);

			if (arr [0] == "success") {
				//				controller.OnSuccessReceiveLobbyInfo (arr [1], arr [2].AsDouble);
				Debug.Log("OnInstantBalanceResponse : " +arr[1].AsInt);
				if(gpid !=0)
					OnRequestTransfer(gpid,-6,arr[1].AsInt);
			} 
			else {
				controller.OnEnableErrorMsg (arr [1], 0);
			}
			//socketDm.InitGame ("0.0.0.0", 8999, loginData.socketToken);
		}
		public void OnRequestTransferToGame(){
			string sum = this.userId  +loginData.session+dateTime +appSignature;
			encrypToken = [REDACTED] (sum);

			string link = mainLink + "/mobile/account/getAccountDto";
			HTTPRequest request = new HTTPRequest(new Uri(link), HTTPMethods.Post, OnTransferToGameResponse);
			request.AddField("username", this.userId);
			request.AddField("session", loginData.session);
			request.AddField("reqDateTime", this.dateTime);
			request.AddField("securityToken", this.encrypToken);
			request.Send();
		}
		void OnTransferToGameResponse(HTTPRequest request, HTTPResponse response){
			//["success","satest12",100001.10000,null,null,null,"example.invalid/ref/?rid\u003drf145b51I",null,1,"example.invalid/ref/?rid\u003drf245b0e7"]
			//["login.failed","login.error"]
			PrintMsg (response.DataAsText);
			JSONNode arr = JSON.Parse (response.DataAsText);

			if (arr [0] == "success") {
				//				controller.OnSuccessReceiveLobbyInfo (arr [1], arr [2].AsDouble);
				Debug.Log("OnTransferToGameResponse : " +arr[2].AsInt);
				if(gpid !=0)
					OnRequestTransfer(-6,gpid,arr[2].AsInt);
			} 
			else {
				controller.OnEnableErrorMsg (arr [1], 0);
			}
			//socketDm.InitGame ("0.0.0.0", 8999, loginData.socketToken);
		}
		#endregion
		public void OnRequestTransfer(int from, int to, int amt){
			// 29376 (GP id), -6 (main wallet)
			string sum = this.userId  +loginData.session+dateTime+from.ToString()+to.ToString()+amt.ToString() +appSignature;
			encrypToken = [REDACTED] (sum);

			string link = mainLink + "/mobile/cm/requests";

			HTTPRequest request = new HTTPRequest(new Uri(link), HTTPMethods.Post, OnGetPlayerTransferResponse);
			request.AddField("username", this.userId);
			request.AddField("session", loginData.session);
			request.AddField("reqDateTime", this.dateTime);
			request.AddField("gameId", from.ToString());
			request.AddField("reqType",to.ToString());
			request.AddField("amount",amt.ToString());
			request.AddField("securityToken", this.encrypToken);
			request.Send();
		}
		void OnGetPlayerTransferResponse(HTTPRequest request, HTTPResponse response){
			//["success","Deposit (from wallet) request successfully."]
			//["success","Withdraw (to wallet) request successfully."]
			//["login.failed","login.error"]
			PrintMsg (response.DataAsText);
			JSONNode arr = JSON.Parse (response.DataAsText);

			if (arr [0] == "success") {
			} 
			else {
				//				controller.OnEnableErrorMsg (arr [1], 0);
			}
			//socketDm.InitGame ("0.0.0.0", 8999, loginData.socketToken);
		}
		public void OnRequestPlayerSessionInfo(){
			string sum = this.userId  +loginData.session+dateTime +appSignature;
			encrypToken = [REDACTED] (sum);

			string link = mainLink + "/mobile/cm/getUserSessionId";

			HTTPRequest request = new HTTPRequest(new Uri(link), HTTPMethods.Post, OnGetPlayerSessionInfoResponse);
			request.AddField("username", this.userId);
			request.AddField("session", loginData.session);
			request.AddField("reqDateTime", this.dateTime);
			request.AddField("securityToken", this.encrypToken);
			request.Send();
		}
		void OnGetPlayerSessionInfoResponse(HTTPRequest request, HTTPResponse response){
			//["success","satest12",100001.10000,null,null,null,"example.invalid/ref/?rid\u003drf145b51I",null,1,"example.invalid/ref/?rid\u003drf245b0e7"]
			//["login.failed","login.error"]
			PrintMsg (response.DataAsText);
			JSONNode arr = JSON.Parse (response.DataAsText);

			if (arr [0] == "success") {
				controller.OnSuccessReceiveSessionInfo (arr [1]);
			} 
			else {
				controller.OnEnableErrorMsg (arr [1], 0);
			}
			//socketDm.InitGame ("0.0.0.0", 8999, loginData.socketToken);
		}

		#region GameManager
		string session;
		int gameId;
		public void OnRequestSelectToken(int _gameId,string gameCode){
			// 31 slot/arcade
			// 32 fish
			// 3 tangkas
			gameId = _gameId;
			string sum = this.userId  +loginData.session+dateTime+gameCode +appSignature;
			encrypToken = [REDACTED] (sum);
			string link = mainLink + "/mobile/cma/selectGame";

			HTTPRequest request = new HTTPRequest(new Uri(link), HTTPMethods.Post, OnSelectTokenResponse);
			request.AddField("username", this.userId);
			request.AddField("session", loginData.session);
			request.AddField("reqDateTime", this.dateTime);
			request.AddField("cmGameId", gameId.ToString());
			request.AddField("gameCode",gameCode);
			request.AddField("securityToken", this.encrypToken);
			request.Send();
		}
		void OnSelectTokenResponse(HTTPRequest request, HTTPResponse response){
			//["error.ex","Your request has error. Please contact system administrator."]
			//["success","t199tangkas01","5YLr4Y31sUA2R9H0",["243166377542ed90ead019a09b4dd775"]] //fish response
			//["success","8d7Es2LBTR9i6Y1E","ce31OoDuc4gTmvYw",["79dba3ccf1670b245bc22c29f11e63f1"]] //tangkas response
			//["success","t99tangkas01","PM90VqAs2kT9l432",null]
			PrintMsg ("GetGameToken : " +response.DataAsText);
			JSONNode node = JSON.Parse (response.DataAsText);
			JSONArray arr = node.AsArray;

			if (arr [0] == "success") {
				if(gameId == 21)
					controller.OnGetGameTokenResponse (arr[3][0]);
			} else {
				controller.OnEnableErrorMsg (arr [1], 0);
			}
		}
		public void OnRequestGameToken(int _gameId,string gameCode){
			// 31 slot/arcade
			// 32 fish
			// 3 tangkas
			gameId = _gameId;
			string sum = this.userId  +loginData.session+dateTime+gameCode +appSignature;
			encrypToken = [REDACTED] (sum);
			string link = mainLink + "/mobile/cma/getGameToken";

			HTTPRequest request = new HTTPRequest(new Uri(link), HTTPMethods.Post, OnGetGameTokenResponse);
			request.AddField("username", this.userId);
			request.AddField("session", loginData.session);
			request.AddField("reqDateTime", this.dateTime);
			//			request.AddField("cmGameId", gameId.ToString());
			Debug.Log(gameCode);
			request.AddField("gameCode",gameCode);
			request.AddField("securityToken", this.encrypToken);
			request.Send();
		}

		public void OnRequestSelectGameToken(int _gameId,string gameCode){
			// 31 slot/arcade
			// 32 fish
			// 3 tangkas
			gameId = _gameId;

			CancelInvoke ();

			string sum = this.userId  +loginData.session+dateTime+_gameId+gameCode +appSignature;
			encrypToken = [REDACTED] (sum);
			string link = mainLink + "/mobile/cma/selectGame";

			HTTPRequest request = new HTTPRequest(new Uri(link), HTTPMethods.Post, OnGetSelectGameTokenResponse);
			request.AddField("username", this.userId);
			request.AddField("session", loginData.session);
			request.AddField("reqDateTime", this.dateTime);
			request.AddField("cmGameId", gameId.ToString());
			request.AddField("gameCode",gameCode);
			request.AddField("securityToken", this.encrypToken);
			request.Send();

			/// custom for GP
			if (gameId == 21) {
				OnRequestTransferToGame ();
				return;
			}

			sum = this.userId  +loginData.session+dateTime +appSignature;
			encrypToken = [REDACTED] (sum);

			link = mainLink + "/mobile/cm/getUserSessionId";

			HTTPRequest request2 = new HTTPRequest(new Uri(link), HTTPMethods.Post, OnGetPlayerSessionInfoResponse2);
			request2.AddField("username", this.userId);
			request2.AddField("session", loginData.session);
			request2.AddField("reqDateTime", this.dateTime);
			request2.AddField("securityToken", this.encrypToken);
			request2.Send();
		}

		void OnGetPlayerSessionInfoResponse2(HTTPRequest request, HTTPResponse response){
			//["success","satest12",100001.10000,null,null,null,"example.invalid/ref/?rid\u003drf145b51I",null,1,"example.invalid/ref/?rid\u003drf245b0e7"]
			//["login.failed","login.error"]
			PrintMsg (response.DataAsText);
			JSONNode arr = JSON.Parse (response.DataAsText);

			if (arr [0] == "success") {
				controller.OnSuccessReceiveSessionInfo2 (arr [1]);
			} 
			else {
				controller.OnEnableErrorMsg (arr [1], 0);
			}
			//socketDm.InitGame ("0.0.0.0", 8999, loginData.socketToken);
		}
		void OnGetGameTokenResponse(HTTPRequest request, HTTPResponse response){
			//["error.ex","Your request has error. Please contact system administrator."]
			//["success","t199tangkas01","5YLr4Y31sUA2R9H0",["243166377542ed90ead019a09b4dd775"]] //fish response
			//["success","8d7Es2LBTR9i6Y1E","ce31OoDuc4gTmvYw",["79dba3ccf1670b245bc22c29f11e63f1"]] //tangkas response
			//["success","t99tangkas01","PM90VqAs2kT9l432",null]
			PrintMsg ("GetGameToken : " +response.DataAsText);
			JSONNode node = JSON.Parse (response.DataAsText);
			JSONArray arr = node.AsArray;

			if (arr [0] == "success") {
				if(gameId == 32 || gameId == 38)
					controller.OnGetGameTokenResponse (arr[1]);
				else
					controller.OnGetGameTokenResponse (arr[2]);
			} else {
				controller.OnEnableErrorMsg (arr [1], 0);
			}
		}
		void OnGetSelectGameTokenResponse(HTTPRequest request, HTTPResponse response){
			//["error.ex","Your request has error. Please contact system administrator."]
			//["success","t199tangkas01","5YLr4Y31sUA2R9H0",["243166377542ed90ead019a09b4dd775"]] //fish response
			//["success","8d7Es2LBTR9i6Y1E","ce31OoDuc4gTmvYw",["79dba3ccf1670b245bc22c29f11e63f1"]] //tangkas response
			//["success","t99tangkas01","PM90VqAs2kT9l432",null]
			PrintMsg ("OnGetSelectGameTokenResponse : " +response.DataAsText);
			JSONNode node = JSON.Parse (response.DataAsText);
			JSONArray arr = node.AsArray;

			if (arr [0] == "success") {
				if(gameId == 38|| gameId == 31|| gameId == 32 || gameId == 21)
					controller.OnGetGameTokenResponse (arr[3][0]);
				else if(gameId == 34)
					controller.OnGetGameTokenResponse(arr[3][3]);
				else if(gameId == 118)
					controller.OnGetGameTokenResponse(arr[3][0], arr[1]);
				else
					controller.OnGetGameTokenResponse (arr[2]);
			} else {
				controller.OnEnableErrorMsg (arr [1], 0);
			}
		}
		#endregion

		#region DepositManager
		public void OnRequestGetDeposit(){
			string sum = this.userId  +loginData.session +appSignature;
			encrypToken = [REDACTED] (sum);

			string link = mainLink + "/mobile/credit/getDepositView";

			HTTPRequest request = new HTTPRequest(new Uri(link), HTTPMethods.Post, OnGetDepositResponse);
			request.AddField("username", this.userId);
			request.AddField("session", loginData.session);
			request.AddField("securityToken", this.encrypToken);
			request.Send();
		}
		void OnGetDepositResponse(HTTPRequest request, HTTPResponse response){
			// ["success",10000,100000000,[[196,1,"Bank Central Asia","1211111111","test"]]]
			PrintMsg ("Get Deposit : " + response.DataAsText);
			JSONNode node = JSON.Parse (response.DataAsText);

			if (node [0] == "success") {
				//				DepositData data = new DepositData ();
				//				data.GetDeposit (node);
				//
				//				controller.OnGetDepositResponse (data);
			} else {
				controller.OnEnableErrorMsg (node [1], 0);
			}
		}
		public void OnRequestPostDeposit(string id,double amount){
			string sum = this.userId  +loginData.session+dateTime+id+amount +appSignature;
			encrypToken = [REDACTED] (sum);

			string link = mainLink + "/mobile/credit/reqDeposit";

			HTTPRequest request = new HTTPRequest(new Uri(link), HTTPMethods.Post, OnPostDepositResponse);
			request.AddField("username", this.userId);
			request.AddField("session", loginData.session);
			request.AddField("reqDateTime", this.dateTime);
			request.AddField("bankId", id);
			request.AddField("amount", amount.ToString());
			request.AddField("securityToken", this.encrypToken);
			request.Send();
		}

		void OnPostDepositResponse(HTTPRequest request, HTTPResponse response){
			//["success","Deposit confirmation success."]
			PrintMsg ("Post Deposit : " + response.DataAsText);
			JSONNode arr = JSON.Parse (response.DataAsText);

			if (arr [0] == "success") {
				//				controller.OnPostDepositResponse (arr [1]);
			} else {
				controller.OnEnableErrorMsg (arr [1], 0);
			}

		}
		#endregion

		#region WithdrawManager
		public void OnRequestGetWithdraw(){
			string sum = this.userId  +loginData.session+dateTime +appSignature;
			encrypToken = [REDACTED] (sum);

			string link = mainLink + "/mobile/credit/getWithdrawView";

			HTTPRequest request = new HTTPRequest(new Uri(link), HTTPMethods.Post, OnGetWithdrawResponse);
			request.AddField("username", this.userId);
			request.AddField("session", loginData.session);
			request.AddField("reqDateTime", this.dateTime);
			request.AddField("securityToken", this.encrypToken);
			request.Send();

		}
		public void OnRequestGetUserBank(){
			string sum = this.userId  +loginData.session+dateTime +appSignature;
			encrypToken = [REDACTED] (sum);

			string link = mainLink + "/mobile/credit/getUserBank";

			HTTPRequest request = new HTTPRequest(new Uri(link), HTTPMethods.Post, OnGetUserBankResponse);
			request.AddField("username", this.userId);
			request.AddField("session", loginData.session);
			request.AddField("reqDateTime", this.dateTime);
			request.AddField("securityToken", this.encrypToken);
			request.Send();
		}
		void OnGetWithdrawResponse(HTTPRequest request, HTTPResponse response){
			PrintMsg ("Get Withdraw : " + response.DataAsText);
			JSONNode node = JSON.Parse (response.DataAsText);
			WithdrawData data = new WithdrawData ();
			data.GetWithdraw (node);

			controller.OnGetWithdrawResponse (data);
		}
		public void OnRequestGetP2PGameInfo(){
			string sum = this.userId  +loginData.session+dateTime +appSignature;
			encrypToken = [REDACTED] (sum);

			string link = mainLink + "/mobile/cm/getP2PGameInfo";

			HTTPRequest request = new HTTPRequest(new Uri(link), HTTPMethods.Post, OnGetP2PResponse);
			request.AddField("username", this.userId);
			request.AddField("session", loginData.session);
			request.AddField("reqDateTime", this.dateTime);
			request.AddField("securityToken", this.encrypToken);
			request.Send();
		}
		void OnGetP2PResponse(HTTPRequest request, HTTPResponse response){
			PrintMsg ("Get Withdraw : " + response.DataAsText);
			JSONNode node = JSON.Parse (response.DataAsText);
			WithdrawData data = new WithdrawData ();
			data.GetWithdraw (node);

			controller.OnGetP2PResponse (data);
		}
		void OnGetUserBankResponse(HTTPRequest request, HTTPResponse response){
			PrintMsg ("Get UserBank : " + response.DataAsText);
			JSONNode node = JSON.Parse (response.DataAsText);
			WithdrawData data = new WithdrawData ();
			data.GetBankInfo (node);

			controller.OnGetWithdrawBankResponse (data);
		}

		public void OnRequestPostWithdraw(int amount){
			string sum = this.userId  +loginData.session+dateTime+amount.ToString() +appSignature;
			encrypToken = [REDACTED] (sum);

			string link = mainLink + "/mobile/cm/reqWithdraw";

			HTTPRequest request = new HTTPRequest(new Uri(link), HTTPMethods.Post, OnPostWithdrawResponse);
			request.AddField("username", this.userId);
			request.AddField("session", loginData.session);
			request.AddField("reqDateTime", this.dateTime);
			//			request.AddField ("gameIdWd", id.ToString ());
			request.AddField("amount", amount.ToString());
			request.AddField("securityToken", this.encrypToken);
			request.Send();
		}

		void OnPostWithdrawResponse(HTTPRequest request, HTTPResponse response){
			//["error",{"label.withReq":"checkMandotryField"}]
			PrintMsg ("OnPostWithdrawResponse : " + response.DataAsText);
			JSONNode arr = JSON.Parse (response.DataAsText);
			if (arr [0] == "success") {
				controller.OnPostWithdrawResponse (arr [1]);
			} else {
				controller.OnEnableErrorMsg (arr [1], 0);
			}
		}
		#endregion

		public void PrintMsg(string msg){
			Debug.Log(msg);
		}
	}
}

