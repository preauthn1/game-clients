var dm = require("DataManager");
var config = require('MyBaseConfig');
var MobileSocket = require("MobileSocket");
cc.Class({
    extends: cc.Component,

    properties: {
        isSimulation: false,
        isLocal: false,
        controller: cc.Node,
        jackpotDM: cc.Node,
        gamePauseFlag: 0,
        token: "",

        countLost:0,
        dataManager2:[cc.Node],
    },

    // use this for initialization
    onLoad: function () {
        for(let i=0;i<this.dataManager2.length;i++){
            this.dataManager2[i] = this.dataManager2[i].getComponent("MySlotMultiDataManager");
        }
    },
    start: function () {
        // let st = "netty::-5>>8";
        // if(st.match("netty::-5")){
        //     console.log(st.split(">>")[1]);
        // }

        // window.gameIP = "example.invalid";
        // window.jackpotIP = "example.invalid";
        // window.gamePort = "-1";
        // window.isWebSite = "1";
        this.controller = this.controller.getComponent(config.SCRIPT.GAMECONTROLLER);
        config.isLocal = this.isLocal;

        this.receiveToken(this.token);
        return;

        if (this.jackpotDM != null)
            this.jackpotDM = this.jackpotDM.getComponent("MyJackpotDataManager");

        if (window.isWebSite == "1") {
            console.log("Is Using Web Token!!!");
            // window.init(this);
            // window.initToken();
            this.receiveToken(window.slotObj.token);
        } else if (window.isWebSite == "2") {
            console.log("Is Using Web Token!!!");
            // window.init(this);
            // window.initToken();
            this.receiveToken(window.slotObj.token);
        } else {
            //window.jackpotToken = [REDACTED]"session");
            // this.controller.showError(MobileSocket.getCookie("token"));
            this.receiveToken(MobileSocket.getCookie("token"));
        }

        // cc.game.on(cc.game.EVENT_HIDE, function () {
        //     // console.log("Hide");
        //     this.gamePauseFlag = 1;
        //     // this.disconnectServer();
        // }, this);
        // cc.game.on(cc.game.EVENT_SHOW, function () {
        //     // console.log("Show");
        //     if(this.gamePauseFlag == 1)
        //     this.controller.onGameHide();
        // }, this);
    },
    receiveToken(token) {
        console.log("receiveToken :: " + token);
        dm.registerListener(this);
        let gameIP = "0.0.0.0";
        let gamePort = "9090";
        if (window.gameIP != null) {
            gameIP = window.gameIP;
        }
        if (window.gamePort != null) {
            gamePort = window.gamePort;
        }

        if(this.token!=null && this.token!="")
        this.onRequestTokenLogin(token, gameIP, gamePort);   
        else
        this.onRequestTokenLogin("31e067e518115b79c9298ef620a597ae", "0.0.0.0", "9090");
        return;

        if (!this.isLocal) {
            //9090 -> tournament
            //9191 -> real cash
            //s://example.invalid:9090/websocket
            this.onRequestTokenLogin(token, "example.invalid", "9191");
            // this.onRequestTokenLogin(token, "0.0.0.0", "9090");   
        } else {
            this.onRequestTokenLogin("31e067e518115b79c9298ef620a597ae", "0.0.0.0", "9090");
            // this.onRequestTokenLogin("31e067e518115b79c9298ef620a597ae", "0.0.0.0", "9090");
            // this.onRequestTokenLogin("31e067e518115b79c9298ef620a597ae", "0.0.0.0", "9090");
            //this.onRequestTokenLogin("095eb5f535dcca91fd7278c946a76b92", "0.0.0.0", "8801");
        }

    },
    init: function (isSimulation) {

    },

    onLoginSuccess() {
        console.log("onLoginSuccess");
        //this.listener.onLoginSuccess();
        MobileSocket.connectNotification();
    },

    onConnectWsSuccess() {
        console.log("onConnectWsSuccess");
        //this.listener.onConnectWsSuccess();
    },
    onVerifySuccess() {
        console.log("onVerifySuccess");
        //this.listener.onVerifySuccess();
    },
    onCheckVersionFail() {
        this.controller.onCheckVersionFail();
    },
    onLoginFail(err) {
        this.controller.onLoginFail();
    },
    onConnectWsFail() {
        if(this.countLost<3){
            this.countLost --;
            this.receiveToken(window.slotObj.token);
        }else{
            this.controller.onConnectWsFail();
        }
        //this.controller.onConnectWsFail();
    },
    onVerifyFail() {
        if(this.countLost<3){
            this.countLost --;
            this.receiveToken(window.slotObj.token);
        }else{
            this.controller.onVerifyFail();
        }
    },
    onDisconnect(er, msg) {
        this.controller.onDisconnect(er, msg);
    },
    onReceiveMsg(msg) {
        if (msg.match("netty::-5")) {
            console.log(msg.split(">>")[1]);
            this.controller.onGameLock(msg.split(">>")[1]);
            return;
        }
        console.log(msg);
        var jsonResult = JSON.parse(msg);
        var id = jsonResult.id;
        if (id == "0") //system
        {
            this.processSystemIncomingMessage(jsonResult);
        } else if (id == "1") //lobby
        {
           // this.processLobbyIncomingMessage(jsonResult);
        } else if (id == "2") //game
        {
            this.processGameIncomingMessage(jsonResult);
            // let actionId = jsonResult.actionId;
            // if (actionId == "1" && !restore) //table init
            // {
            //     this.pendingList = [];
            // }

            // if (this, gameListener == null) {
            //     pendingList.push(data);
            // }
        }
    },

    processSystemIncomingMessage(jsonResult) {
        let actionId = jsonResult.actionId;
        if (actionId == "1") //connected
        {
            this.onReceiveSystemConnected(jsonResult.eventData);
        } else if (actionId == "2") //pong
        {
            //this.onReceiveSystemPong(jsonResult);
        } else if (actionId == "3") //player update
        {
            this.onReceivePlayerUpdate(jsonResult.eventData);
        } else if (actionId == "4") //system maintainance
        {
            this.onReceiveSystemMaintenance(jsonResult.eventData);
        }
    },
    processLobbyIncomingMessage(jsonResult) {

    },
    processGameIncomingMessage(jsonResult) {
        
        var actionId = jsonResult.actionId;
        var roundId = jsonResult.eventData[0][0];
        // console.log(actionId);
        if (actionId == "1") {
            this.onReceiveStartGameData(jsonResult.eventData);
        } else if (actionId == "2") {
            this.onReceiveChangeMode(jsonResult.eventData);
        } else if (actionId == "9") {
            if (roundId == "1") {
                this.onReceiveSpinResult(jsonResult.eventData);
            } else if (roundId == "2") {
                this.onReceiveFreeInfo(jsonResult.eventData);
            } else if (roundId == "4") {
                this.onReceiveBonusInfo(jsonResult.eventData);
            } else if (roundId == "5") {
                this.onReceiveJackpotInfo(jsonResult.eventData);
            }
        } else if (actionId == "13") {
            this.onReceiveJackpotData(jsonResult.eventData);
        }
        //multiplayer
        else if (actionId == "4") {
            console.log(actionId);
            if (jsonResult.eventData[1] == "0") {
                //join
                //[3,0,14,"123",1000000,null]
                console.log(jsonResult.eventData[3]);
                this.dataManager2[0].onReceivePlayerUpdate(jsonResult.eventData[3],jsonResult.eventData[4]);
            }
            else if(jsonResult.eventData[1] == "1"){
                //leave
                //[3,1,14]
            }
        }
        else if (actionId == "11") {
            this.dataManager2[0].onReceivePlayerUpdate("",jsonResult.eventData[3]);
            this.dataManager2[0].processGameIncomingMessage(jsonResult.eventData[4]);
        }
    },

    //System
    onReceivePlayerUpdate(jsonResult) {
        this.controller.onReceivePlayerUpdate(jsonResult[0], jsonResult[1]);
    },

    onReceiveSystemConnected(jsonResult) {
        var userName = "";
        var credit = "";
        credit = jsonResult[2];
        //param.dateTime = jsonResult[3];
        userName = jsonResult[1];
        //param.id = jsonResult[0];

        //Receive Player Name, Player Credit
        this.controller.onReceiveSystemConnected(userName, credit);
    },
    //jackpot
    onReceiveJackpotData(jsonResult) {
        //{"actionId":"13","eventData":[4,[519,4,106]],"id":"2"}
        var data = new SlotJackpotValueDataModel();
        data.init(jsonResult);
        this.controller.onReceiveJackpotData(data);
    },
    //game
    onReceiveChangeMode(jsonResult) {
        // var data = new SlotChangeModeDataModel();
        // data.init(jsonResult);
        this.controller.onReceiveChangeMode(jsonResult);
    },

    onReceiveStartGameData(jsonResult) {
        var data = config.StartDataModel(jsonResult);
        this.controller.onReceiveStartGameData(data);
    },
    onReceiveFreeInfo(jsonResult) {
        // console.log(jsonResult) ;
        var data = new SlotFreeSpinDataModel();
        data.init(jsonResult);
        this.controller.onReceiveFreeSpinInfo(data);
    },
    onReceiveBonusInfo(jsonResult) {
        var data = new SlotBonusDataModel();
        data.init(jsonResult);
        this.controller.onReceiveBonusInfo(data);
    },
    onReceiveSpinResult(jsonResult) {
        var data = config.SpinDataModel(jsonResult);
        this.controller.onReceiveSpinResult(data);
        //Debug.LogWarning ("OnReceiveSpinResult : " + (Time.time - startTimer));
    },
    onReceiveJackpotInfo(jsonResult) {
        var data = new SlotJackpotDataModel();
        data.init(jsonResult);
        this.controller.onReceiveJackpotInfo(data);
    },
    cleanUp: function () {
        dm.cleanUp();
    },
    onRequestCheckVersion(url) {
        dm.checkVersion(url);
    },

    onRequestLogin(url, username, password, nickname) {
        dm.requestLogin(username, password, nickname, url);
    },

    onRequestTokenLogin(token, ip, port) {
        dm.requestTokenLogin(token, ip, port);
    },
    onRequestSpinResult(lineNumber, betValue, multiplier) {
        // console.log("onRequestSpinResult");
        dm.sendSocketRequestData("2", "6", [0], [lineNumber, betValue, multiplier], [betValue]);
    },
    onRequestFreeInfo(number) {
        dm.sendSocketRequestData("2", "6", [number], null, null);
    },
    onRequestBonusInfo(number) {
        dm.sendSocketRequestData("2", "6", [number], null, null);
    },
    onRequestJackpotInfo(number) {
        dm.sendSocketRequestData("2", "6", [number], null, null);
    },
    onRequestForGamble() {
        dm.sendSocketRequestData("2", "6", "[2]", null, null);
    },
    onRequestGambleResult(number) {
        dm.sendSocketRequestData("2", "6", "[0]", [number], null);
    },
    onRequestCollectGambleReward() {
        dm.sendSocketRequestData("2", "6", "[1]", null, null);
    }
});