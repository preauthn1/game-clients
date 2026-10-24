var dm = require("JpDataManager");
var MobileSocket = require("MobileSocket");

cc.Class({
    extends: cc.Component,

    properties: {
        controller:cc.Node,
        isLocal:false,
        response:"",

        testResponse:"",
        isStart:false,
        timerCount:0,
        isRunTimer:false,
    },

    // use this for initialization
    start: function () {
        window.isJackpotDone = 0;
        //cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);

        // if(this.isStart){
        //     this.receiveToken(window.jackpotToken)
        // }

        // window.jackpotIP = "example.invalid";
        // window.jackpotToken = [REDACTED]";
        if(window.isWebSite != "1"){
            let i = MobileSocket.getCookie("session");
            window.jackpotToken = i;
        }
        //console.log(dm.isConnect);
        if(window.serviceId == null){
            window.serviceId = 0;
        }
        // window.serviceId = 35;

        if(!dm.isConnect)
        this.receiveToken(window.jackpotToken);
       
    },
    onKeyDown: function (event) {
        //console.log(event.keyCode);
        switch (event.keyCode) {
           case 32: //Space
           this.testing123();
           break;
        }
    },
    testing123(){
        //this.onReceiveMsg(this.testResponse);
    },
    receiveToken(token){
        // if(dm.isConnect)
        // return;
        // console.log(token);
        dm.registerListener(this);
        // this.onRequestTokenLogin(token,window.jackpotIP, "9098");
        if(window.jackpotIP == null){
            return;
        }

        this.onRequestTokenLogin(token,window.jackpotIP, window.jackpotPort);
        // this.onRequestTokenLogin("10a89559V080N5hT", "0.0.0.0", "9098");
    },
    receiveJPToken(){
        // if(dm.isConnect)
        // return;
        // console.log(token);
        dm.registerListener(this);
        // this.onRequestTokenLogin(window.jackpotToken, window.jackpotIP, "9098");
        this.onRequestTokenLogin(window.jackpotToken, window.jackpotIP, window.jackpotPort);
        // this.onRequestTokenLogin("10a89559V080N5hT", "0.0.0.0", "9098");
    },
    onRequestTokenLogin(token, ip, port) {
        dm.requestSocketConnect(ip, port, token);
    },

    onLoginSuccess() {
        console.log("onLoginSuccess");
        dm.isConnect = true;
        //this.listener.onLoginSuccess();
    },
    onConnectWsSuccess() {
        console.log("onConnectWsSuccess");
        dm.isConnect = true;

        if(window.serviceId!=null && window.serviceId != 0){
            this.isRunTimer = true;
            this.timerCount = 5;
        }
        //this.listener.onConnectWsSuccess();
    },
    onVerifySuccess() {
        console.log("onVerifySuccess");
        dm.isConnect = true;
        
        window.isJackpotDone = 1;
        if(this.controller!=null)
        this.controller.closeLoadingPage();
        // this.listener.onVerifySuccess();
    },
    onCheckVersionFail() {
        console.log("onCheckVersionFail");
        dm.isConnect = false;
        if(this.controller!=null)
        this.controller.onCheckVersionFail();
    },
    onLoginFail(err) {
        console.log("onLoginFail");
        dm.isConnect = false;
        //console.log("onLoginFail");
        if(this.controller!=null)
        this.controller.onLoginFail();
    },
    onConnectWsFail() {
        dm.isConnect = false;
        console.log("onConnectWsFail");
        if(this.controller!=null)
        this.controller.onConnectWsFail();
    },
    onVerifyFail() {
        dm.isConnect = false;
        if(this.controller!=null)
        this.controller.onVerifyFail();
    },
    onDisconnect(er, msg) {
        dm.isConnect = false;
        console.log("disconnect");
        if(this.controller!=null)
        this.controller.onDisconnect();
    },
    receiveNettyMsg(err, msg) {
        dm.isConnect = false;
        console.log("Receive Netty Message : " +msg);
        if(this.controller!=null)
        this.controller.onNettyMsg(msg);
	},
    onReceiveMsg(msg) {
        if(this.controller!=null)
        this.controller.closeLoadingPage();
        // dm.isConnect = true;
        //["Safari Heat","t199tangkas1994",1,1000]
        //["HighwayKing","cw4jltest01",4,100]
        //[[100,1],[100,2],[100,3],[100,4]]
        // console.log(msg);
        let jsonResult = JSON.parse(msg);
        // console.log("Jackpot : " +jsonResult);
        if(window.jpMainView!=null){
            if(jsonResult.length == 4 && (jsonResult[2] == 1||jsonResult[2] == 2||jsonResult[2] == 3||jsonResult[2] == 4)){
                window.jpMainView.addAnnoucement(jsonResult);
            }
            else{
                window.jpMainView.show(msg,window.serviceId);
            }
        }

        // msg = this.response;

        // if(!Array.isArray(msg))
        // jsonResult = msg;
    },
    cleanUp(){
        console.log("Jackpot cleanUp");
        dm.cleanUp();
    },
    update (dt) {
        if(this.isRunTimer){
            if(this.timerCount >= 5){
                this.timerCount = 0;
                this.sendServiceCommand();
            }
            this.timerCount += dt;
        }
    },
    sendServiceCommand(){
        dm.sendSocketRequestData2("2", "6", window.serviceId, null, null);
    },
});



