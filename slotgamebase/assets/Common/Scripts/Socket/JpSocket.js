import aes_encrypt from 'AESEncrypt';
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
	}

	initState() {
		this.fsm = new FiniteStateMachine();
		this.fsm.addTransition(s_Init, s_Logining, t_Login);
		this.fsm.addTransition(s_Logining, s_ConnectSocket, t_Success);
		this.fsm.addTransition(s_Logining, s_ReadyLogin, t_Fail);
		this.fsm.addTransition(s_ConnectSocket, s_Verifying, t_Success);
		this.fsm.addTransition(s_ConnectSocket, s_ReadyLogin, t_Fail);
		this.fsm.addTransition(s_Verifying, s_ReadyToPlay, t_Success);
		this.fsm.addTransition(s_Verifying, s_ReadyLogin, t_Fail);
		this.fsm.addTransition(s_ReadyToPlay, s_Init, t_Disconnect);
		this.fsm.setInitialState(s_Init);
	}

	initDataManager(dm){
		this.dm = dm;
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
		this.fsm.applyTransition(t_Login);
		this.ip = ip;
		this.port = port;
		var url = url;
		url = url +
			"username=" + username 
			+ "&password=" + password;

		var xhr = cc.loader.getXMLHttpRequest();
		var rawData = "Test";

		console.log(url);
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
		console.log(response);
		this.verifyToken(response);
	}

	verifyToken(tokenData) {
		let dataArr = JSON.parse(tokenData);
		if (dataArr == "-1") {
			this.loginFail(LoginError.ERROR_LOGIN_VERI);
		}
		else if (dataArr == "-2") {
			this.loginFail(LoginError.ERROR_REQUIRE_NICKNAME);
		}
		else if (dataArr == "-3") {
			this.loginFail(LoginError.ERROR_CREATE_NICKNAME);
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
			}
			else if (tokenData == "-3") {
				this.loginFail(LoginError.ERROR_CREATE_NICKNAME);
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

	wsConnect(ip, port) {
		let tempUrl = "";
		if(port != "-1"){
			tempUrl = "ws://" + ip + ":" + port + "/websocket";
		}else{
			tempUrl = "ws://" + ip  + "/websocket";
		}
		this.connectWs(tempUrl)
	}

	wsConnectWithToken(ip, port, token) {
		this.token = [REDACTED];
		let tempUrl = "";
		if(window.isHttps == 1){
			tempUrl = "wss://";
		}
		else{
			tempUrl = "ws://";
		}

		if(port != "-1"){
			tempUrl = tempUrl + ip + ":" + port + "/websocket";
		}else{
			tempUrl = tempUrl + ip  + "/websocket";
		}

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
		// console.log(this.token);
		//this.aes = new aes_encrypt(this.token);
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
			this.onSocketError();
		}.bind(this);
		this.ws.onclose = function (event) {
			this.onSocketClose();
		}.bind(this);
	}

	onSocketOpen() {
		this.fsm.applyTransition(t_Success);
		this.dm.onConnectWsSuccess();
		//this.sendData(this.token);
	}

	onSocketClose() {
		console.log("Socket Close : " +this.fsm.getCurState());
		if (this.fsm.getCurState() == s_ConnectSocket) {
			this.fsm.applyTransition(t_Fail);
			this.dm.onConnectWsFail();
		}
		else if (this.fsm.getCurState() == s_Verifying) {
			this.fsm.applyTransition(t_Fail);
			this.dm.onVerifyFail();
		}
		else if (this.fsm.getCurState() == s_ReadyToPlay) {
			this.fsm.applyTransition(t_Disconnect);
			this.dm.onDisconnect(this.nettyError, this.nettyMsg);
		}
		else if(this.fsm.getCurState() == s_Logining) { //invalid token
			this.fsm.applyTransition(t_Disconnect);
			this.loginFail(LoginError.ERROR_LOGIN_VERI);
		}
		else if(this.fsm.getCurState() == s_Init) { //invalid connection
			this.fsm.applyTransition(t_Disconnect);
			this.dm.onCheckVersionFail();
		}
		this.stopPing();
	}

	onSocketError() {
		console.log("Socket Error");
	}

	onSocketMessage(data) {
		console.log("onSocketMessage " + data);
		if (data == "netty::0") {
			this.receiveNettyMsg(WsError.ERROR_GS_DUP, data);
			return;
		}
		else if (data == "netty::-1") {
			this.receiveNettyMsg(WsError.ERROR_GS_VERI, data);
			return;
		}
		try {
			// if (this.token != "") {
			// 	var finalMsg = this.aes.decrypt(data, this.token);
				this.processIncomingMessage(data);
			// }

		}
		catch (e) {

		}
	}

	processIncomingMessage(data) {
		//console.log("processIncomingMessage " + data);
		if (data == "netty::0") {
			this.receiveNettyMsg(WsError.ERROR_GS_DUP, data);
			return;
		}
		else if (data == "netty::-1") {
			this.receiveNettyMsg(WsError.ERROR_GS_VERI, data);
			return;
		}
		else if (data == "netty::-2") {
			this.receiveNettyMsg(WsError.SESSION_EXPIRED, data);
			return;
		}
		else if (data == "netty::-3") {
			this.receiveNettyMsg(WsError.FORCE_OUT, data);
			return;
		}
		else if (data == "netty::-4") {
			this.receiveNettyMsg(WsError.TIME_OUT, data);
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
		//console.log(data);
		var tempData = data;
		if (this.token != "" && this.fsm.getCurState() == s_ReadyToPlay) {
			this.aes.token = [REDACTED];
			tempData = this.aes.encrypt(data);
		}
		//console.log(tempData);
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
				} else {
					console.log("socket is down")
					this.stopPing();
				}
			}.bind(this), 10000);
		}
	}

	stopPing() {
		if (this.checker) {
			clearInterval(this.checker);
			this.checker = void 0;
		}
	}

	resetWsConnect(){
		this.token = "";
		this.fsm.applyTransition(t_Disconnect);
		this.stopPing();
		this.ws.close();
		//if not working use this
		//this.ws.onclose();
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
		console.log("addTransition " + fromState + "  " + toState + "  " + trans);
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
