import aes_encrypt from 'AESEncrypt';

class MobileSocket {

    constructor() {
        //this.url = "http://0.0.0.0:8580/mobile"; //p8indo
        this.url = "http://0.0.0.0:8380/mobile"; //pok deng
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
        this.gameId = "";
    }

    onSessionLogin(func, username, password, url) {
        this.func = func;
        this.userId = username;
        this.password = [REDACTED];
        this.url = url;
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
        this.onRequestData(this.url + "/account/getAccountDto2", params, "POST", this.onGetAccountResponse, this);
    }

    onGetAccountResponse(response, parent) {
        console.log("onGetAccountResponse : " + response);
        let dataArr = JSON.parse(response);
        if (dataArr[0] == "login.failed" || dataArr[0] == "error.ex") {
            parent.func.failedGetToken();
        } else {
            var playerName = dataArr[1];
            var balance = dataArr[2];
            var tournament = dataArr[3]
            parent.func.successGetAcount(playerName, balance, tournament);
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

    onGetGameToken(func, gameId, gameCode, nickname){
        this.func = func;
        this.gameId = gameId;
        this.dateTime = this.getDateTime();
        // thai
        if(nickname == null){
            var encryp = this.userId + this.session + this.dateTime + gameId + gameCode + this.appSignature ;
            var encrypToken = [REDACTED];
            var params = "username=" + this.userId + "&session=" + this.session + "&reqDateTime=" + this.dateTime + "&cmGameId=" + gameId + "&gameCode=" +gameCode+ "&securityToken=" + encrypToken ;
            this.onRequestData(this.url + "/cma/selectGame", params, "POST", this.onGetGameTokenResponse, this);
        }
        else{
            var encryp = this.userId + this.session + this.dateTime + gameId + gameCode + nickname + this.appSignature;
            var encrypToken = [REDACTED];
            var params = "username=" + this.userId + "&session=" + this.session + "&reqDateTime=" + this.dateTime + "&cmGameId=" + gameId + "&gameCode=" +gameCode+ "&nickname=" +nickname+"&securityToken=" + encrypToken ;
            this.onRequestData(this.url + "/cma/submitNickname", params, "POST", this.onGetGameTokenNicknameResponse, this);
        }

        // indo
        // var encryp = this.userId + this.session + this.dateTime + gameCode + this.appSignature ;
        // var encrypToken = [REDACTED];
        // var params = "username=" + this.userId + "&session=" + this.session + "&reqDateTime=" + this.dateTime + "&gameCode=" +gameCode+ "&securityToken=" + encrypToken ;
        // this.onRequestData(this.url + "/cma/getGameToken", params, "POST", this.onGetGameTokenResponse, this);
    }

    onGetGameTokenNicknameResponse(response, parent){
        console.log("onGetGameTokenNicknameResponse : " + response);
        let dataArr = JSON.parse(response);
        if (dataArr[0] == "success") {
            var token = [REDACTED];
            var ip = dataArr[1][1];
            var port = dataArr[1][2];
            parent.func.successGetToken(token, ip, port);
        }
        else{
            parent.func.nicknameFailed();
        }
    }

    onGetGameTokenResponse(response, parent) {
        console.log("onGetGameTokenResponse : " + response);
        let dataArr = JSON.parse(response);
        //thai
        if (dataArr[0] == "login.failed" || dataArr[0] == "error.ex" || dataArr[0] == "error" || dataArr[3]== null) {
            parent.func.failedGetToken();
        } else {
            var token = [REDACTED];
            var ip = dataArr[3][1];
            var port = dataArr[3][2];
            if(token == -1 || token == null){
                parent.func.failedGetToken();
                return;
            }
            if(token == -2){
                parent.func.requestNickname();
                return;
            }
            parent.func.successGetToken(token, ip, port);
        }

        // indo
        // if (dataArr[0] == "login.failed" || dataArr[0] == "error.ex" || dataArr[0] == "error" || dataArr[1] == null) {
        //    parent.func.failedGetToken();
        // } else {
        //     var token = [REDACTED];
        //     if(token == -1 || token == null){
        //         parent.func.failedGetToken();
        //         return;
        //     }
        //     parent.func.successGetToken(token);
        // }
    }

    onRequestData(url, params, type, func, parent) {
        console.log("url   " + url);
        console.log("params  " + params);
        var _http = cc.loader.getXMLHttpRequest();
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

    connectNotification(ip, port){
        this.notifyIp = ip;
        this.notifyPort = port;
        this.notificationLogin(this.notifyIp, this.notifyPort);
    }

    notificationLogin(url, port){
		this.wsConnect(url, port);
	}
	
	wsConnect(ip, port) {
        let tempUrl = "";
        if(port != null){
			tempUrl = "wss://" + ip + ":" + port + "/websocket";
		}
		else{
			tempUrl = "wss://" + ip +"/websocket";
		}
		this.connectWs(tempUrl)
    }

	connectWs(url) {

        if(this.ws != null){
            if(this.ws.OPEN)
                return;
        }

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
}

var singleton = function singleton() {}
singleton.client = function () {
    if (this.instance === void 0) {
        this.instance = new MobileSocket();
    }
    return this.instance;
}

module.exports = singleton.client();