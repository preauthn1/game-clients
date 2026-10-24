import aes_encrypt from 'AESEncrypt';

class MobileSocket {

    constructor() {
        //this.url = "http://example.invalid/mobile"; 
        // this.url = "http://example.invalid/mobile"; 
        // this.url = "http://example.invalid/mobile"; 
        //this.url = "http://0.0.0.0:8680/mobile"; 
        // this.url = "http://0.0.0.0:8380/mobile";
        this.url = window.mbip;
        // this.url = "http://0.0.0.0:8680/mobile";
        this.userId = "";
        this.password = "";

        this.session = "";
        this.sessionToken = "";
        this.gameToken = "";
        this.dateTime = "";
        this.appSignature = "123456";
        this.func = null;
        this.notifyIp = "0.0.0.0";
        this.notifyPort = "8999"
        this.aes = "";
    }

    onSessionLogin(func, username, password) {
        this.func = func;
        this.userId = username;
        this.password = [REDACTED];
        this.dateTime = this.getDateTime();
        var encryp = this.userId + this.password + this.dateTime + this.appSignature;
        var encrypToken = [REDACTED];
        var params = "username=" + this.userId + "&password=" + this.password + "&reqDateTime=" + this.dateTime + "&securityToken=" + encrypToken;
        this.onRequestData(this.url + "/session/login", params, "POST", this.onLoginResponse, this);
    }

    onLoginResponse(response, parent) {
        console.log("onLoginResponse : " + response);
        let dataArr = JSON.parse(response);
        if (dataArr[0] == "login.failed") {
            parent.func.failedLogin();
        } else {
            parent.session = dataArr[1][0];
            parent.sessionToken = [REDACTED];
            parent.func.successLogin();
            
        }
    }

    onSessionGetAccount(func) {
        this.func = func;
        this.dateTime = this.getDateTime();
        var encryp = this.userId + this.session + this.dateTime + this.appSignature;
        var encrypToken = [REDACTED];
        var params = "username=" + this.userId + "&session=" + this.session + "&reqDateTime=" + this.dateTime + "&securityToken=" + encrypToken;
        this.onRequestData(this.url + "/account/getAccountDto", params, "POST", this.onGetAccountResponse, this);
    }

    onGetAccountResponse(response, parent) {
        console.log("onGetAccountResponse : " + response);
        let dataArr = JSON.parse(response);
        if (dataArr[0] == "login.failed") {
            parent.func.failedGetToken();
        } else {
            var playerName = dataArr[1];
            var balance = dataArr[2];
            parent.func.successGetAcount(playerName, balance);
        }
    }

    onSessionGetLoginToken(func) {
        this.func = func;
        this.dateTime = this.getDateTime();
        var encryp = this.userId + this.session + this.dateTime + this.appSignature;
        var encrypToken = [REDACTED];
        var params = "username=" + this.userId + "&session=" + this.session + "&reqDateTime=" + this.dateTime + "&securityToken=" + encrypToken;
        this.onRequestData(this.url + "/account/getLoginToken", params, "POST", this.onGetLoginTokenResponse, this);
    }

    onGetLoginTokenResponse(response, parent) {
        console.log("onGetLoginTokenResponse : " + response);
        let dataArr = JSON.parse(response);
        if (dataArr[0] == "login.failed") {
            parent.func.failedGetToken();
        } else {
            // var playerName = dataArr[1];
            // var balance = dataArr[2];
            var token = [REDACTED];
            parent.func.successGetLoginToken(token);
        }
    }

    onSessionGetDeposit(func) {
        this.func = func;
        this.dateTime = this.getDateTime();
        var encryp = this.userId + this.session + this.dateTime + this.appSignature;
        var encrypToken = [REDACTED];
        var params = "username=" + this.userId + "&session=" + this.session + "&reqDateTime=" + this.dateTime + "&securityToken=" + encrypToken;
        this.onRequestData(this.url + "/account/getAccountDto", params, "POST", this.onGetDepositResponse, this);
    }

    onGetDepositResponse(response, parent) {
        console.log("onGetDepositResponse : " + response);
    }

    onGetGameToken2(func, gameId,gameType,param){
        this.func = func;
        this.dateTime = this.getDateTime();
        // let param = 1;
        var encryp = this.userId + this.session + this.dateTime + gameId +gameType+param + this.appSignature;
        var encrypToken = [REDACTED];
        var params = "username=" + this.userId + "&session=" + this.session + "&reqDateTime=" + this.dateTime + "&cmGameId=" + gameId +"&gameCode=" +gameType+"&param1="+param + "&securityToken=" + encrypToken;
        this.onRequestData(this.url + "/cma/getGameToken", params, "POST", this.onGetGameTokenResponse, this);
    }
    onGetGameToken(func, gameId,gameType,type){
        this.func = func;
        this.dateTime = this.getDateTime();
        // let param = 1;
        var encryp = this.userId + this.session + this.dateTime + gameId +gameType+type + this.appSignature;
        var encrypToken = [REDACTED];
        var params = "username=" + this.userId + "&session=" + this.session + "&reqDateTime=" + this.dateTime + "&cmGameId=" + gameId +"&gameCode=" +gameType+"&tp="+type + "&securityToken=" + encrypToken;
        this.onRequestData(this.url + "/cma/getGameToken", params, "POST", this.onGetGameTokenResponse, this);
    }
    onGetTangkasGameToken(func, gameType){
        this.func = func;
        this.dateTime = this.getDateTime();
        // let param = 1;
        var encryp = this.userId + this.session + this.dateTime + gameType + this.appSignature;
        var encrypToken = [REDACTED];
        var params = "username=" + this.userId + "&session=" + this.session + "&reqDateTime=" + this.dateTime +"&gameCode=" +gameType+"&securityToken=" + encrypToken;
        this.onRequestData(this.url + "/cma/getGameToken", params, "POST", this.onGetTangkasGameTokenReponse, this);
    }
    onGetTangkasGameTokenReponse(response, parent){
        // ["success","53LGf4psap42ASJc","3uAoE4K68l1EHF8E",["554c0c796de550c016ed8d76f6b9253c"]]
        console.log("onGetGameTokenResponse : " + response);
        let dataArr = JSON.parse(response);
        if(dataArr[0] == "success") {
            var token = [REDACTED];
            parent.func.successGetToken(token);
        }else{
            parent.func.failedGetToken();
        }
    }
    onGetGameTokenResponse(response, parent) {
        console.log("onGetGameTokenResponse : " + response);
        let dataArr = JSON.parse(response);
        if (dataArr[0] == "login.failed") {
            parent.func.failedGetToken();
        } 
        else if(dataArr[0] == "error.ex"){
            console.log("error.ex");
            parent.func.failedGetToken();
        }
        else if(dataArr[0] == "success") {
            var token = [REDACTED]";
            if(dataArr[3]!=null){
                token = [REDACTED];
            }
            else{
                token = [REDACTED];
            }
            parent.func.successGetToken(token);
        }else{
            parent.func.failedGetToken();
        }
    }
    onGetLiveCasinoToken(func, gameType,gameCode){
        this.func = func;
        this.dateTime = this.getDateTime();
        // let param = 1;
        var encryp = this.userId + this.session + this.dateTime + gameType+gameCode + this.appSignature;
        var encrypToken = [REDACTED];
        var params = "username=" + this.userId + "&session=" + this.session + "&reqDateTime=" + this.dateTime +"&cmGameId=" +gameType+"&gameCode=" +gameCode+"&securityToken=" + encrypToken;
        this.onRequestData(this.url + "/cma/selectGame", params, "POST", this.onGetLiveCasinoTokenReponse, this);
    }
    onGetLiveCasinoTokenReponse(response, parent){
        // ["success","A73idczaza04",null,["784EDDA2-CF33-4FE3-B042-AE944C48B941"]]
        console.log(response);
        let dataArr = JSON.parse(response);
        if(dataArr[0] == "success") {
            var token = [REDACTED];
            parent.func.successGetLiveCasinoToken(token);
        }else{
            parent.func.failedGetToken();
        }
    }
    onGetPokDengToken(func, gameType,gameCode){
        this.func = func;
        this.dateTime = this.getDateTime();
        // let param = 1;
        var encryp = this.userId + this.session + this.dateTime + gameType+gameCode + this.appSignature;
        var encrypToken = [REDACTED];
        var params = "username=" + this.userId + "&session=" + this.session + "&reqDateTime=" + this.dateTime +"&cmGameId=" +gameType+"&gameCode=" +gameCode+"&securityToken=" + encrypToken;
        // console.log(params);
        this.onRequestData(this.url + "/cma/selectGame", params, "POST", this.onGetPokDengTokenReponse, this);
    }
    onGetPokDengTokenReponse(response, parent){
        // ["success","A73idczaza04",null,["784EDDA2-CF33-4FE3-B042-AE944C48B941"]]
        console.log(response);
        let dataArr = JSON.parse(response);
        if(dataArr[0] == "success") {
            var token = [REDACTED];
            parent.func.successGetLiveCasinoToken(token);
        }else{
            parent.func.failedGetToken();
        }
    }
    onGetSlotToken(func, gameType){
        this.func = func;
        this.dateTime = this.getDateTime();
        // let param = 1;
        var encryp = this.userId + this.session + this.dateTime + gameType + this.appSignature;
        var encrypToken = [REDACTED];
        var params = "username=" + this.userId + "&session=" + this.session + "&reqDateTime=" + this.dateTime +"&cmGameId=" +gameType+"&securityToken=" + encrypToken;
        this.onRequestData(this.url + "/cma/selectGame", params, "POST", this.onGetSlotTokenReponse, this);
    }
    onGetSlotTokenReponse(response, parent){
        // ["success","A73idczaza04",null,["784EDDA2-CF33-4FE3-B042-AE944C48B941"]]
        console.log(response);
        let dataArr = JSON.parse(response);
        if(dataArr[0] == "success") {
            var token = [REDACTED];
            parent.func.successGetSlotToken(token);
        }else{
            parent.func.failedGetToken();
        }
    }
    onRequestGameIdList(func) {
        this.func = func;
        this.dateTime = this.getDateTime();
        var encryp = this.userId + this.session + this.dateTime + this.appSignature;
        var encrypToken = [REDACTED];
        var params = "username=" + this.userId + "&session=" + this.session + "&reqDateTime=" + this.dateTime + "&securityToken=" + encrypToken;
        this.onRequestData(this.url + "/cm/getPlayerGameTransferInfoList", params, "POST", this.onGetGameIdListResponse, this);
    }
    onGetGameIdListResponse(response, parent) {
        //["success",[["1 Slot",null,"0.00",27460,30,null],["4D",null,"0.00",27458,30,null],["AB Suite",null,"0.00",27467,30,null],["AG Suite","gsCMM6WIDidc11","0.00",27481,30,null],["BTI",null,"0.00",27469,20,null],["CMD Sport",null,"0.00",27470,20,null],["Fish","hpYc4L3m9sK8B7rW","50.00",27483,20,null],["GP Suite",null,"0.00",27463,30,null],["isin4d",null,"89.80",27858,20,null],["I Sport\u0026Suite",null,"0.00",27475,30,null],["Joker",null,"0.00",27479,20,null],["MG Suite",null,"0.00",27480,30,null],["PG Soft",null,"0.00",27472,20,null],["Play Star",null,"0.00",27478,20,null],["P Suite",null,"0.00",27477,30,null],["SBOBET",null,"0.00",27461,20,null],["Tangkas",null,"0.00",27462,30,null],["TTG",null,"0.00",27468,20,null],["W Sport",null,"108.99",27459,30,null]]]
        console.log("onGetGameIdListResponse : " + response);
    }

    onRequestTransferInGame(func, gameId, amt){
        // console.log
        this.func = func;
        this.dateTime = this.getDateTime();
        let gameidTransfer = "-6";
        var encryp = this.userId + this.session + this.dateTime+gameidTransfer+gameId+amt + this.appSignature;
        var encrypToken = [REDACTED];
        var params = "username=" + this.userId + "&session=" + this.session + "&reqDateTime=" + this.dateTime +"&gameId="+gameidTransfer+"&reqType="+gameId+"&amount="+amt+ "&securityToken=" + encrypToken;
        this.onRequestData(this.url + "/cm/requests", params, "POST", this.onGetGameIdListResponse, this);
    }
    onGetTransferInResponse(response, parent) {
        console.log("onGetTransferInResponse : " + response);
    }
    onRequestTransferOutGame(func, gameId, amt){
        this.func = func;
        this.dateTime = this.getDateTime();
        let gameidTransfer = "-6";
        var encryp = this.userId + this.session + this.dateTime+gameId+gameidTransfer+amt + this.appSignature;
        var encrypToken = [REDACTED];
        var params = "username=" + this.userId + "&session=" + this.session + "&reqDateTime=" + this.dateTime +"&gameId="+gameId+"&reqType="+gameidTransfer+"&amount="+amt+ "&securityToken=" + encrypToken;
        this.onRequestData(this.url + "/cm/requests", params, "POST", this.onGetGameIdListResponse, this);
    }
    onGetTransferOutResponse(response, parent) {
        console.log("onGetTransferOutResponse : " + response);
    }
    onRequestData(url, params, type, func, parent) {
        var _http = cc.loader.getXMLHttpRequest();
        // url = url +"?r=" +Math.random();
        _http.open(type, url);
        _http.target = func;
        _http.parent = parent;
        _http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        _http.onreadystatechange = function () {
            if (_http.readyState == 4 && _http.status == 200) {
                if (_http.target != null)
                    _http.target(_http.responseText, _http.parent);
            }
        }

        _http.send(params);
    }
    getDateTime(){
        var now = new Date();
        var year = "" + now.getFullYear();
        var month = "" + (now.getMonth() + 1); if (month.length == 1) { month = "0" + month; }
        var day = "" + now.getDate(); if (day.length == 1) { day = "0" + day; }
        var hour = "" + now.getHours(); if (hour.length == 1) { hour = "0" + hour; }
        var minute = "" + now.getMinutes(); if (minute.length == 1) { minute = "0" + minute; }
        var second = "" + now.getSeconds(); if (second.length == 1) { second = "0" + second; }
        return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    }

    connectNotification(){
        //this.notificationLogin(this.notifyIp, this.notifyPort);
    }

    notificationLogin(url, port){
		this.wsConnect(url, port);
	}
	
	wsConnect(ip, port) {
		let tempUrl = "ws://" + ip + ":" + port + "/websocket";
		this.connectWs(tempUrl)
    }

	connectWs(url) {
        console.log(this.sessionToken);
        var address = url;
		this.ws = new WebSocket(address);
		this.ws.onopen = function (event) {
			this.ws.send(this.sessionToken);
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
        console.log("Notification Socket Open");
        this.startPing();
	}

	onSocketClose() {
		console.log("Notification Socket Close ");
		this.stopPing();
	}

	onSocketError() {
		console.log("Notification Socket Error");
	}

	onSocketMessage(data) {
		console.log("Notification Socket Message " + data);
    }
    
    startPing() {
		console.log("startPing");
		if (this.checker === void 0) {
			this.checker = setInterval(function () {
				var ping_msg = { "id": "0", "actionId": "1" }
				var ping_msg_json = JSON.stringify(ping_msg);
				if (this.ws.readyState === WebSocket.OPEN) {
					this.ws.send(ping_msg_json);
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
    setCookie(cname, cvalue) {
        // var d = new Date();
        // d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
        // var expires = "expires="+d.toUTCString();
        // document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        cc.sys.localStorage.setItem(cname, cvalue);
    }
      
    getCookie(cname) {
        // var name = cname + "=";
        // var ca = document.cookie.split(';');
        // for(var i = 0; i < ca.length; i++) {
        //   var c = ca[i];
        //   while (c.charAt(0) == ' ') {
        //     c = c.substring(1);
        //   }
        //   if (c.indexOf(name) == 0) {
        //     return c.substring(name.length, c.length);
        //   }
        // }
        // return "";

        var data = cc.sys.localStorage.getItem(cname);
        return data;
    }

    restoreCookieDetail(){
        this.userId = this.getCookie("getId");
        this.session = this.getCookie("session");
    }
}

var singleton = function singleton() {}
singleton.client = function () {
    if (this.instance === void 0) {
        this.instance = new MobileSocket();
    }
    return this.instance;
}

module.exports = singleton.client();