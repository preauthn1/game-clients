var Socket = require("JpSocket")

class DataManager {

	constructor() {
		this.listener = null;
		this.loginUrl = "";
		this.reconnecting = false;
		this.isConnect = false;
	}

	registerListener(listener) {
		this.listener = listener;
		console.log('add socket lister: ' + listener);
	}

	onCheckVersionSuccess(type, version, loginUrl, mainFrom, mainTo, downloadLink) {
		this.listener.onCheckVersionSuccess(type, version, loginUrl, mainFrom, mainTo, downloadLink);
	}

	onLoginSuccess() {
		this.listener.onLoginSuccess();
	}

	onConnectWsSuccess() {
		this.listener.onConnectWsSuccess();
	}
	onVerifySuccess() {
		this.listener.onVerifySuccess();
	}
	onCheckVersionFail() {
		this.isConnect = false;
		this.listener.onCheckVersionFail();
	}
	onLoginFail(err) {
		this.isConnect = false;
		this.listener.onLoginFail(err);
	}
	onConnectWsFail() {
		this.isConnect = false;
		this.listener.onConnectWsFail();
	}
	onVerifyFail() {
		this.isConnect = false;
		this.listener.onVerifyFail();
	}
	onDisconnect(er, msg) {
		this.isConnect = false;
		this.listener.onDisconnect(er, msg);
	}
	onReceiveMsg(msg) {
		this.listener.onReceiveMsg(msg);
	}

	receiveVersionData(data) {
		// console.log("receiveVersionData " + data);
		let dataArr = JSON.parse(data);
		if (dataArr[0] == '0') {
			this.loginUrl = dataArr[2];
			this.onCheckVersionSuccess(dataArr[0], dataArr[1], dataArr[2], null, null, dataArr[3]);
		} else if (dataArr[0] == '1') {
			this.onCheckVersionSuccess(dataArr[0], null, null, dataArr[1], dataArr[2], null);
		}
	}

	tryReconnect(er, msg) {
		if (!this.reconnecting && er == this.Socket.WsError.TIME_OUT) {
			this.reconnecting = true;
			Socket.initToken();
		} else {
			this.reconnecting = false;
			this.onDisconnect(er, msg);
		}
	}
	sendSocketData2(action,_data){
		var data = new SendDataModel2();
		data.action = action;
		data.data = _data;
		var tempData = JSON.stringify(data);
		Socket.sendData(tempData);
	}
	sendSocketData(param1, param2, param3) {
		var data = new SendDataModel();
		data.param1 = param1;
		data.param2 = param2;
		data.param3 = param3;

		var tempData = JSON.stringify(data);
		Socket.sendData(tempData);
		console.log("send data :: " + tempData);
	}

	sendSocketRequestData(id, actionId, param1, param2, param3) {
		var testData1 = new SendDataModel();
		testData1.id = id;
		testData1.actionId = actionId;

		var param1Str = "";

		if (param1 != null && param1.length > 0) {
			param1Str = param1Str + "[";
			for (let i = 0; i < param1.length; i++) {
				param1Str = param1Str + param1[i] + ",";
			}

			param1Str = param1Str.substring(0, param1Str.length - 1);

			param1Str = param1Str + "]";

		}
		testData1.param1 = param1Str;

		var param2Str = "";
		if (param2 != null && param2.length > 0) {
			param2Str = param2Str + "[";

			for (let j = 0; j < param2.length; j++) {
				param2Str = param2Str + param2[j] + ",";
			}

			param2Str = param2Str.substring(0, param2Str.length - 1);

			param2Str = param2Str + "]";

		}
		testData1.param2 = param2Str;

		var param3Str = "";
		if (param3 != null && param3.length > 0) {
			param3Str = param3Str + "[";

			for (let j = 0; j < param3.length; j++) {
				param3Str = param3Str + param3[j] + ",";
			}

			param3Str = param3Str.substring(0, param3Str.length - 1);
			param3Str = param3Str + "]";
		}
		testData1.param3 = param3Str;

		var tempData = JSON.stringify(testData1);
		console.log("send data :: " + tempData);
		Socket.sendData(tempData);
	}

	checkVersion(url) {
		console.log("checkVersion");
		Socket.checkVersion(url, this);
	}

	requestLogin(userName, password, nickname, url, ip, port) {
		Socket.loginToServer(userName, password, url, nickname, ip, port);
	}

	requestSocketConnect(ip, port, token){
		Socket.initDataManager(this);
		Socket.wsConnectWithToken(ip, port, token)
	}

	requestLogout() {
		Socket.resetWsConnect();
	}

	cleanUp(){
		Socket.resetWsConnect();
	}
}

class SendDataModel {
	param1 = "";
	param2 = "";
	param3 = "";
}
class SendDataModel2 {
	action = "";
	data = "";
}

var singleton = function singleton() {}
singleton.client = function () {
	if (this.instance === void 0) {
		this.instance = new DataManager();
	}
	return this.instance;
}

module.exports = singleton.client();