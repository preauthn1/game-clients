var dm = require("DataManager");
var constants = require('DJSlotConstants');
var utils = require('Utils');

cc.Class({
    extends: cc.Component,

    properties: {
        isSimulation: false,
        isLocal:false,
        controller: cc.Node,
        playerId: "extp001",
        playerPass: "abc123",
        playerToken: "",
    },

    // use this for initialization
    onLoad: function () {
        window.init(this);

        if(!this.isLocal)
        window.initToken();
        else
        window.ReceiveToken("a67ed46fe2400fe6df744791d58fff13");
    },
    receiveToken(token){
        console.log("receiveToken :: " +token);
        dm.registerListener(this);

        if(!this.isLocal){
            constants.URL.GAME_TOKEN = [REDACTED];  
            this.onRequestTokenLogin(constants.URL.GAME_TOKEN, constants.URL.IP, constants.URL.PORT);    
        }
        else{
            constants.URL.GAME_TOKEN = [REDACTED];  
            this.onRequestTokenLogin(constants.URL.GAME_TOKEN, "0.0.0.0", "9090");
        }
        this.controller = this.controller.getComponent("BaseGameController");
    },
    init: function (isSimulation) {
        // if (isSimulation == false) {
        //     dm.registerListener(this);

        //     console.log(this.playerToken);
        //     if(this.playerToken != ""){
        //         //"99bf3061a614305195d523aaa761fae5";"74a85fa6bedf0031f330b0bc614afcbe"; Three Wheel TOKEN
        //         //"a67ed46fe2400fe6df744791d58fff13";"4669972eafd30a9e683328dd62b15366"; BlazingHeat TOKEN
        //         constants.URL.GAME_TOKEN = [REDACTED];  
        //     }
        //     if (constants.URL.GAME_TOKEN == "") {
        //         this.onRequestLogin("http://0.0.0.0:8080/func/jsx/slot_mobile_authentication?", this.playerId, this.playerPass, "");
        //     }
        //     else {
        //         //this.onRequestTokenLogin(constants.URL.GAME_TOKEN, constants.URL.IP, constants.URL.PORT);
        //         this.onRequestTokenLogin(constants.URL.GAME_TOKEN, "0.0.0.0", "9090");
        //     }

        //     this.controller = this.controller.getComponent("BaseGameController");
        // }
    },

    onLoginSuccess() {
        console.log("onLoginSuccess");
        //this.listener.onLoginSuccess();
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
        console.log("onCheckVersionFail");
        //this.controller.onCheckVersionFail();
    },
    onLoginFail(err) {
        console.log("onLoginFail");
        //this.controller.onLoginFail();
    },
    onConnectWsFail() {
        console.log("onConnectWsFail");
        this.controller.onConnectWsFail();
    },
    onVerifyFail() {
        console.log("onVerifyFail");
        this.controller.onVerifyFail();
    },
    onDisconnect(er, msg) {
        console.log("onDisconnect");
        this.controller.onDisconnect();
    },
    onReceiveMsg(msg) {
        var jsonResult = JSON.parse(msg);
        var id = jsonResult.id;
        if (id == "0") //system
        {
            this.processSystemIncomingMessage(jsonResult);
        }
        else if (id == "1") //lobby
        {
            //this.processLobbyIncomingMessage(jsonResult);
        }
        else if (id == "2") //game
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
        if (actionId == "1")//connected
        {
            this.onReceiveSystemConnected(jsonResult.eventData);
        }
        else if (actionId == "2")//pong
        {
            //this.onReceiveSystemPong(jsonResult);
        }
        else if (actionId == "3")//player update
        {
            this.onReceivePlayerUpdate(jsonResult.eventData);
        }
        else if (actionId == "4")//system maintainance
        {
            this.onReceiveSystemMaintenance(jsonResult.eventData);
        }
    },
    processGameIncomingMessage(jsonResult) {
        var actionId = jsonResult.actionId;
        var roundId = jsonResult.eventData[0][0];
        if (actionId == "1") {
            this.onReceiveStartGameData(jsonResult.eventData);
        }
        else if (actionId == "2") {
            this.onReceiveChangeMode(jsonResult.eventData);
        }
        else if (actionId == "9") {
            if (roundId == "1") {
                this.onReceiveSpinResult(jsonResult.eventData);
            } else if (roundId == "2") {
                this.onReceiveFreeInfo(jsonResult.eventData);
            } else if (roundId == "4") {
                this.onReceiveBonusInfo(jsonResult.eventData);
            }else if(roundId == "5"){
                this.onReceiveJackpotInfo(jsonResult.eventData);
            }
        }
        else if(actionId == "13"){
            this.onReceiveJackpotData(jsonResult.eventData);
        }

        if(actionId != "13"){
            console.log("onReceiveMsg " + msg);
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
    onReceiveJackpotData(jsonResult){
        var data = new SlotJackpotValueDataModel();
        data.init(jsonResult);
        this.controller.onReceiveJackpotData(data);   
    },
    //game
    onReceiveChangeMode(jsonResult) {
        var data = new SlotChangeModeDataModel();
        data.init(jsonResult);
        this.controller.onReceiveChangeMode(data);
    },

    onReceiveStartGameData(jsonResult) {
        var data = new SlotStartDataModel();
        data.init(jsonResult);

        var playerData = new PlayerDataModel();
        var player = [data.playerId, data.playerCredit];
        playerData.init(player[0], player[1]);
        this.controller.onReceiveStartGameData(data);
    },
    onReceiveFreeInfo(jsonResult) {
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
        var data = new SlotSpinDataModel();
        data.init(jsonResult);
        this.controller.onReceiveSpinResult(data);
        //Debug.LogWarning ("OnReceiveSpinResult : " + (Time.time - startTimer));
    },
    onReceiveJackpotInfo(jsonResult){
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
        console.log("onRequestSpinResult");
        dm.sendSocketRequestData("2", "6", [0], [lineNumber, betValue, multiplier], [betValue]);
    },
    onRequestFreeInfo(number) {
        dm.sendSocketRequestData("2", "6", [number], null, null);
    },
    onRequestBonusInfo(number) {
        dm.sendSocketRequestData("2", "6", [number], null, null);
    },
    onRequestJackpotInfo(number){
        dm.sendSocketRequestData("2", "6",[number], null, null);
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