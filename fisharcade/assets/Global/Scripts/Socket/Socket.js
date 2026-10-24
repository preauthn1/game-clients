import aes_encrypt from 'AESEncrypt';
var Global = require("Global")

class Socket {

	constructor() {
		this.curState = 0;
		this.host = "";
		this.port = 0;
		this.token = "";
		this.aes = "";
		this.initState();
		this.dm;
		this.ip = "";
		this.port =0;
		this.manualClose = false;
		this.lastReqTime = null;
	}

	initState() {
		this.fsm = new FiniteStateMachine();
		this.fsm.addTransition(s_Init, s_Logining, t_Login);
		this.fsm.addTransition(s_Logining, s_ConnectSocket, t_Success);
		this.fsm.addTransition(s_Logining, s_ReadyLogin, t_Fail);
		this.fsm.addTransition(s_ReadyLogin, s_Logining, t_Success);
		this.fsm.addTransition(s_ConnectSocket, s_Verifying, t_Success);
		this.fsm.addTransition(s_ConnectSocket, s_ReadyLogin, t_Fail);
		this.fsm.addTransition(s_Verifying, s_ReadyToPlay, t_Success);
		this.fsm.addTransition(s_Verifying, s_ReadyLogin, t_Fail);
		this.fsm.addTransition(s_ReadyToPlay, s_Init, t_Disconnect);
		this.fsm.setInitialState(s_Init);
	}

	checkVersion(url, dm) {
		this.dm = dm;
		var rawData = "Test";
		var xhr = cc.loader.getXMLHttpRequest();
		xhr.open("POST", url);
		xhr.setRequestHeader("Content-Type", "Application/json");
		xhr.target = this;
		xhr.send(rawData);

		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status <= 207)) {
				var httpStatus = xhr.statusText;
				var response = xhr.responseText;
				xhr.target.onComplete(response);
			}
			else {
				if (xhr.status < 200 && xhr.status > 207) {
				}
			}
		};
	}

	onComplete(response) {
		this.dm.receiveVersionData(response);
	}

	loginToServer(username, password, url, nickname, ip , port) {
		console.log("Login to Server");
		this.fsm.applyTransition(t_Login);
		this.ip = ip;
		this.port = port;
		var url = url;
		url = url +
			"username=" + username 
			+ "&password=" + password;

		var xhr = cc.loader.getXMLHttpRequest();
		var rawData = "Test";

		//console.log("url  :::  " + url);
		if (nickname != null) {
			rawData = nickname;
			url = url + "&nickname=1";
		}

		xhr.open("POST", url);
		xhr.setRequestHeader("Content-Type", "Application/json");
		xhr.send(rawData);

		xhr.target = this;

		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status <= 207)) {
				var httpStatus = xhr.statusText;
				var response = xhr.responseText;
				xhr.target.loginComplete(response);
			}
			else {

			}
		}
	}

	loginComplete(response) {
		//console.log("loginComplete ::: " + response);
		this.verifyToken(response);
	}

	verifyToken(tokenData) {
		console.log("verifyToken :::  " + tokenData);
		let dataArr = JSON.parse(tokenData);
		if (dataArr == "-1") {
			this.loginFail(LoginError.ERROR_LOGIN_VERI);
		}
		else if (dataArr == "-2") {
			this.loginFail(LoginError.ERROR_REQUIRE_NICKNAME);
			this.fsm.setInitialState(s_Init);
		}
		else if (dataArr == "-3") {
			this.loginFail(LoginError.ERROR_CREATE_NICKNAME);
			this.fsm.setInitialState(s_Init);
		}
		else if (dataArr == "-4") {
			this.loginFail(LoginError.ERROR_SUSPENDED);
		}
		else if (dataArr == "-5") {
			this.loginFail(LoginError.ERROR_NO_PERMISSION);
		}
		else if (dataArr == "-6") {
			this.loginFail(LoginError.ERROR_SPECIAL_FIRST_LOGIN);
		}
		else {
			tokenData = dataArr[0];

			if (tokenData == "-1") {
				this.loginFail(LoginError.ERROR_LOGIN_VERI);
			}
			else if (tokenData == "-2") {
				this.loginFail(LoginError.ERROR_REQUIRE_NICKNAME);
				this.fsm.setInitialState(s_Init);
			}
			else if (tokenData == "-3") {
				this.loginFail(LoginError.ERROR_CREATE_NICKNAME);
				this.fsm.setInitialState(s_Init);
			}
			else if (tokenData == "-4") {
				this.loginFail(LoginError.ERROR_SUSPENDED);
			}
			else if (tokenData == "-5") {
				this.loginFail(LoginError.ERROR_NO_PERMISSION);
			}
			else if (tokenData == "-6") {
				this.loginFail(LoginError.ERROR_SPECIAL_FIRST_LOGIN);
			}
			else {
				this.fsm.applyTransition(t_Success);
				this.token = [REDACTED];
				this.dm.onLoginSuccess();

				this.wsConnect(this.ip, this.port);
			}
		}
	}

	loginToToken(token, ip, port, dm){
		this.dm = dm;
		this.fsm.applyTransition(t_Login);
		this.fsm.applyTransition(t_Success);
		this.token = [REDACTED];
		this.dm.onLoginSuccess();

		this.wsConnect(ip, port);
	}
	
	wsConnect(ip, port) {
		let tempUrl = "";
		//thai
		if(port != null){
			tempUrl = "ws://" + ip + ":" + port + "/websocket";
		}
		else{
			tempUrl = "ws://" + ip +"/websocket";
		}
		//indo
		// if(port != null){
		// 	tempUrl = "ws://" + ip + ":" + port + "/websocket";
		// }
		// else{
		// 	tempUrl = "ws://" + ip +"/websocket";
		// }
		this.connectWs(tempUrl)
	}

	onReceiveToken(token) {
		if (token != null) {
			this.verifyTokenData(token, this.tokenURL);
		}
		else {
			this.dm.onDisconnect(this.nettyError, this.nettyMsg);
		}
	}

	loginFail(erMsg) {
		this.fsm.applyTransition(t_Fail);
		this.dm.onLoginFail(erMsg);
	}

	OnGetIOError(event) {
		if (this.fsm.getCurState() == s_CheckingVersion) {
			this.dm.onLoginFail(erMsg);
			this.dm.onCheckVersionFail();
		}
		else if (this.fsm.getCurState() == s_Logining) {
			this.dm.onLoginFail(erMsg);
			this.dm.onLoginFail(LoginError.ERROR_LOGIN_LINK);
		}
		this.fsm.applyTransition(t_Fail);
	}

	connectWs(url) {
		console.log("connectWs :: " + url);
		console.log("this.token :: " + this.token);
		this.aes = new aes_encrypt(this.token);
		console.log("this.aes :: " + this.aes);
		var address = url;
		this.ws = new WebSocket(address);
		this.ws.onopen = function (event) {
			this.ws.send(this.token);
			this.onSocketOpen();
		}.bind(this);
		this.ws.onmessage = function (event) {
			this.onSocketMessage(event.data);
		}.bind(this);
		this.ws.onerror = function (event) {
			this.onSocketError(event);
		}.bind(this);
		this.ws.onclose = function (event) {
			this.onSocketClose(event);
		}.bind(this);
	}

	onSocketOpen() {
		console.log("onSocketOpen");
		this.fsm.applyTransition(t_Success);
		this.dm.onConnectWsSuccess();
	}

	onSocketClose(event) {
		console.log("onSocketClose "+ event);
		if(this.manualClose){
			this.manualClose = false;
			return;
		}
		
		if (this.fsm.getCurState() == s_ConnectSocket) {
			this.fsm.setInitialState(s_Init);
			this.dm.onConnectWsFail();
		}
		else if (this.fsm.getCurState() == s_Verifying) {
			this.fsm.setInitialState(s_Init);
			this.dm.onVerifyFail();
		}
		else {
			this.fsm.setInitialState(s_Init);
			this.dm.onDisconnect(this.nettyError, this.nettyMsg);
		}
		this.stopPing();
		this.resetWsConnect();
	}

	onSocketError(event) {
		console.log(event);
		this.receiveNettyMsg(WsError.TIME_OUT, data);
		this.resetWsConnect();
	}

	onSocketMessage(data) {
		//console.log(data);
		if (data == "netty::0") {
			this.receiveNettyMsg(WsError.ERROR_GS_DUP, data);
			this.resetWsConnect();
			return;
		}
		else if (data == "netty::-1") {
			this.receiveNettyMsg(WsError.ERROR_GS_VERI, data);
			this.resetWsConnect();
			return;
		}

		try {
			if (this.token != "") {
				var finalMsg = this.aes.decrypt(data, this.token);
				this.processIncomingMessage(finalMsg);
			}

		}
		catch (e) {

		}
	}

	processIncomingMessage(data) {
		//console.log("processIncomingMessage " + data);
		if (data == "netty::0") {
			this.receiveNettyMsg(WsError.ERROR_GS_DUP, data);
			this.resetWsConnect();
			return;
		}
		else if (data == "netty::-1") {
			this.receiveNettyMsg(WsError.ERROR_GS_VERI, data);
			this.resetWsConnect();
			return;
		}
		else if (data == "netty::-2") {
			this.receiveNettyMsg(WsError.SESSION_EXPIRED, data);
			this.resetWsConnect();
			return;
		}
		else if (data == "netty::-3") {
			this.receiveNettyMsg(WsError.FORCE_OUT, data);
			this.resetWsConnect();
			return;
		}
		else if (data == "netty::-4") {
			this.receiveNettyMsg(WsError.TIME_OUT, data);
			this.resetWsConnect();
			return;
		}

		if (this.fsm.getCurState() == s_Verifying) {
			this.fsm.applyTransition(t_Success);
			this.dm.onVerifySuccess();
			this.startPing();
		}
		this.dm.onReceiveMsg(data);
	}
	receiveNettyMsg(err, msg) {
		console.log("receiveNettyMsg " + err);
		if (this.fsm.getCurState() == s_Verifying) {
			this.fsm.applyTransition(t_Fail);
			this.dm.onVerifyFail();
		}
		this.nettyError = err;
		this.nettyMsg = msg;
		this.ws.close();
		this.stopPing();
	}

	sendData(data) {
		//console.log("sendData ::: " + data);
		var tempData = data;
		if (this.token != "" && this.fsm.getCurState() == s_ReadyToPlay) {
			this.aes.token = [REDACTED];
			tempData = this.aes.encrypt(data);
		}
		this.ws.send(tempData);
	}
	startPing() {
		console.log("startPing");
		if (this.checker === void 0) {
			this.checker = setInterval(function () {
				var ping_msg = { "id": "0", "actionId": "1" }
				var ping_msg_json = JSON.stringify(ping_msg);
				var encrypted_data = this.aes.encrypt(ping_msg_json);
				if (this.ws.readyState === WebSocket.OPEN) {
					this.ws.send(encrypted_data);
					this.dm.onReceivePing();
				} else {
					console.log("socket is down")
					this.stopPing();
				}
			}.bind(this), 5000);
		}
	}
	stopPing() {
		if (this.checker) {
			clearInterval(this.checker);
			this.checker = void 0;
		}
	}

	resetWsConnect(){
		//console.log("resetWsConnect");
		this.token = "";
		this.stopPing();
		this.ws.close();
		this.fsm.applyTransition(t_Disconnect);
		//this.initState();
		//if not working use this
		//this.ws.onclose();
	}

	manualResetWs(){
		this.manualClose = true;
		this.token = "";
		this.stopPing();
		this.ws.close();
		//this.fsm.applyTransition(t_Disconnect);
		this.fsm.setInitialState(s_Init);
		//this.initState();
	}
}

class FiniteStateMachine {

	stateDict = {};
	curState = "";

	constructor() {
		this.fsmTarget = IFsm;
	}

	setupCallBack(target) {
		this.fsmTarget.state = target;
	}

	setInitialState(setToState) {
		this.curState = setToState;
	}

	getCurState() {
		return this.curState;
	}

	addTransition(fromState, toState, trans) {
		//console.log("addTransition " + fromState + "  " + toState + "  " + trans);
		var tempFsm;
		if (this.stateDict[fromState] == null) {
			tempFsm = new FSMState(fromState);
			tempFsm.addState(toState, trans);
			this.stateDict[fromState] = tempFsm;
		}
		else {
			tempFsm = this.stateDict[fromState];
			tempFsm.addState(toState, trans);
			this.stateDict[tempFsm] = tempFsm;
		}
	}

	applyTransition(trans) {

		if (this.curState == '') {
			return;
		}

		//console.log( this.curState);
		//console.log( this.stateDict[this.curState]);
		var fromState = this.curState;
		this.curState = this.stateDict[this.curState].applyTransition(trans);
		if (this.fsmTarget.state != null) {
			this.fsmTarget.state = this.curState;
		}
	}
}

class FSMState {

	transDict = {};
	stateName = '';

	constructor(thisStateName) {
		this.stateName = thisStateName;
	}

	addState(state, transition) {

		if (this.transDict[transition] == null) {
			this.transDict[transition] = state;
		}
		else {
			// egret.log("This state <" + state + "> ald contain this transition <" + transition + ">.");
		}
	}

	applyTransition(transition) {
		var tempState = this.stateName;

		if (this.transDict[transition] != null) {
			tempState = this.transDict[transition];
		}
		else {
			// egret.log("This state <" + this.stateName + "> didnt have this transition <" + transition + ">");
		}

		return tempState;
	}

	checkTransition(transition) {
		// egret.log("From : " + this.stateName + " To : " + this.transDict[transition] + " With Trans : " + transition);
	}
}

class IFsm {
	state;
}

var s_Init = "init";
var s_CheckingVersion = "checkingVersion";
var s_ReadyLogin = "readyLogin";
var s_Logining = "logining";
var s_ConnectSocket = "connectingWs";
var s_Verifying = "verifying";
var s_ReadyToPlay = "readyToPlay"
var s_Disconnected = "disconnected";

var t_CheckVersion = "checkVersion";
var t_Login = "login";
var t_Success = "success";
var t_Fail = "fail";
var t_Disconnect = "disconnect";

var LoginError = {
	ERROR_LOGIN_VERI: 0,
	ERROR_REQUIRE_NICKNAME: 1,
	ERROR_CREATE_NICKNAME: 2,
	ERROR_SUSPENDED: 3,
	ERROR_NO_PERMISSION: 4,
	ERROR_SPECIAL_FIRST_LOGIN: 5,
	ERROR_LOGIN_LINK: 6
}

var WsError = {
	ERROR_GS_DUP: 0,
	ERROR_GS_VERI: 1,
	SESSION_EXPIRED: 2,
	FORCE_OUT: 3,
	TIME_OUT: 4
}

var singleton = function singleton() { }
singleton.client = function () {
	if (this.instance === void 0) {
		this.instance = new Socket();
	}
	return this.instance;
}

module.exports = singleton.client();
