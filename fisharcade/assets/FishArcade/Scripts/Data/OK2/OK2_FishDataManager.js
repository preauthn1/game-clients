var dm = require("DataManager")

class Ok2_FishDataManager {
    constructor() {
        this.integrateWithOneS = false;
        this.gameImpl = null;
        this.loginListener = null;
        this.gameListener = null;
        this.id = -1;
        this.credit;
        this.currency = "";
        this.playerSeatNum = -1;
        this.betAmountIndex = 0;
        this.weaponIndex = 0;
        this.betAmountArray = [10, 20, 50, 100, 150, 200, 300, 500, 1000, 2000, 5000, 10000];
        this.bulletId = 0;
        this.tableId = 0;
        this.helper = null;
        this.loginPanel = null;
    }

    registerListener(listener, type, gameImpl) {
        dm.registerListener(this);
        if (type == 0) {
            this.loginListener = listener;
        }
        if (type == 2) {
            this.gameListener = listener;
            // if (this.integrateWithOneS) {
            //     if (this.gameImpl == null) {
            //         this.gameImpl = gameImpl;
            //         if (this.gameImpl != null) {
            //             this.gameImpl.InitGame(this);
            //         }
            //     }
            // } else {
            //     if (this.gameImpl == null) {
            //         this.gameImpl = gameImpl;
            //         if (this.gameImpl != null) {
            //             this.gameImpl.StandaloneInitGame(this);
            //         }
            //     }
            // }
        }
    }

    removeListener(type) {
        if (type == 0) {
            this.loginListener = null;
        }
        if (type == 2) {
            this.gameListener = null;
        }
    }

    initGame(ip, port, token) {
        this.ip = ip;
        this.port = port;
        this.token = [REDACTED];
        dm.loginToToken(token, ip, port);
    }

    reconnectToGame(ip, port, token) {
        dm.loginToToken(token, url, port);
    }

    onLoginSuccess() {
        console.log("onLoginSuccess");
        if (this.loginListener != null) {
            this.loginListener.onLoginSuccess();
        }
    }

    onConnectWsSuccess() {
        console.log("onConnectWsSuccess");
        //this.listener.onConnectWsSuccess();
    }
    onVerifySuccess() {
        this.isLogin = true;
        console.log("onVerifySuccess");
        if (this.loginListener != null) {
            this.loginListener.onSuccess(0);
        }
        if (this.lobbyListener != null) {
            this.lobbyListener.onSuccess(0);
        }
    }
    onCheckVersionFail() {
        console.log("onCheckVersionFail");
        //this.listener.onCheckVersionFail();
    }
    onLoginFail(err) {
        console.log("onLoginFail");
        console.log(err);
        this.isLogin = false;
        if (this.loginListener != null) {
            this.loginListener.onLoginFail(err);
        }
    }
    onConnectWsFail() {
        console.log("onConnectWsFail");
        this.isLogin = false;
        if (this.loginListener != null) {
            this.loginListener.onConnectWsFail();
        }

    }
    onVerifyFail() {
        console.log("onVerifyFail");
        this.isLogin = false;
        if (this.loginListener != null) {
            this.loginListener.onLoginFail(4);
        }
        if (this.lobbyListener != null) {
            this.lobbyListener.onVerifyFail();
        }
        if (this.gameListener != null) {
            this.gameListener.onRecieveTableKick();
        }
    }
    onDisconnect(er, msg) {
        console.log("onDisconnect");
        this.isLogin = false;
        if (this.lobbyListener != null) {
            this.lobbyListener.onConnectionClosed(-1, 0);
        }
        if (this.gameListener != null) {
            this.gameListener.onConnectionClosed(-1, 0);
        }
    }
    onReceiveMsg(msg) {
        //console.log("onReceiveMsg " + msg);
        let jsonResult = JSON.parse(msg);
        let id = jsonResult["id"];
        if (id == "0") //system
        {
            this.processSystemIncomingMessage(jsonResult);
        } else if (id == "1") //lobby
        {
            this.processLobbyIncomingMessage(jsonResult);
        } else if (id == "2") //game
        {
            this.processGameIncomingMessage(jsonResult);
            if (this.gameListener == null) {
                this.pendingList.push(msg);
            }
        }
    }

    processSystemIncomingMessage(jsonResult) {
        let actionId = jsonResult["actionId"];
        if (actionId == "1") //connected
        {
            this.onReceiveSystemConnected(jsonResult);
        } else if (actionId == "2") //pong
        {
            this.onReceiveSystemPong(jsonResult);
        } else if (actionId == "3") //player update
        {
            this.onReceivePlayerUpdate(jsonResult);
        } else if (actionId == "4") //system maintainance
        {
            this.onReceiveSystemMaintenance(jsonResult);
        }
    }

    onReceiveSystemConnected(jsonResult) {
        this.credit = jsonResult["eventData"]["credit"];
        this.id = jsonResult["eventData"]["id"];

        if (this.gameListener != null) {
            this.gameListener.checkPlayerCredit(this._credit);
        }

        this.betAmountArray = [10, 20, 50, 100, 150,200, 300, 500, 1000];
        if (jsonResult["eventData"]["currency"] != null) {
            this.currency = jsonResult["eventData"]["currency"];
            if (this.currency.includes("HP")) {
                this.betAmountArray = [100, 150, 200, 300, 500, 1000];
            }
        }
    }

    onReceivePing() {
        var currReqTime = new Date().getTime();
        if (this.lastPongReqTime != null) {
            var currLatency = currReqTime - this.lastPongReqTime - 5000;
            currLatency = -currLatency > 0 ? -currLatency : currLatency;
            this.latency.push(currLatency);
            if (this.latency.length > 10) {
                this.latency.splice(0, 1);
            }
            this.lastPingReqTime = currReqTime;
        } else {
            this.lastPingReqTime = currReqTime;
        }

        if (this.latency.length == 0) {
            return;
        }

        var num = 0;
        for (let i = 0; i < this.latency.length; i++) {
            num += this.latency[i];
        }

        var average = num / this.latency.length;
        average = -average > 0 ? -average : average;

        // if (this.gameListener != null) {
        //     this.gameListener.onReceiveLatency(average);
        // }
    }

    onReceiveSystemPong(jsonResult) {
        var currReqTime = new Date().getTime();
        var currLatency = currReqTime - this.lastPingReqTime;
        currLatency = -currLatency > 0 ? -currLatency : currLatency;
        this.latency.push(currLatency);
        this.lastPongReqTime = currReqTime;
        if (this.latency.length > 10) {
            this.latency.splice(0, 1);
        }

        var num = 0;
        for (let i = 0; i < this.latency.length; i++) {
            num += this.latency[i];
        }

        var average = num / this.latency.length;
        average = -average > 0 ? -average : average;
        if (this.gameListener != null) {
            this.gameListener.onReceiveLatency(average);
        }
    }

    updateConnectionRespondTime(range) {
        // if (lobbyHandler != null)
        // {
        // 	lobbyHandler.OnUpdateServerRespondTime(range);
        // }

        // if (gameHandler != null)
        // {
        // 	gameHandler.OnUpdateServerRespondTime(range);
        // }
    }

    onReceivePlayerUpdate(jsonResult) {
        this.credit = jsonResult["eventData"]["credit"];

        if (this.gameListener != null) {
            this.gameListener.onPlayerCreditUpdate(this.credit);
        }
    }

    onReceiveSystemMaintenance(jsonResult) {
        var maintainArray = jsonResult["eventData"];
        var type = maintainArray[0];
        var message = maintainArray[1];
        var fromDate = maintainArray[2];
        var toDate = maintainArray[3];

        if (this.gameListener != null) {
            this.gameListener.onReceiveSystemMaintenance(type, message, fromDate, toDate);
        }
    }


    processLobbyIncomingMessage(jsonResult) {
        let actionId = jsonResult["actionId"];
        if (actionId == "1") //table list
        {
            this.onReceiveTableList(jsonResult);
        } else if (actionId == "3") //reject table join
        {
            this.onReceiveTableRejectJoin(jsonResult);
        } else if (actionId == "4") //table update
        {
            this.onReceiveTableUpdate(jsonResult);
        } else if (actionId == "5") //lobby message
        {
            this.onReceiveLobbyMessage(jsonResult);
        } else if (actionId == "6") //lobby state
        {
            this.onReceiveLobbyState(jsonResult);
        }
    }

    onReceiveTableList(jsonResult) {
        if (this.tableId == 0) {
            this.onRequestJoinTable(1);
        } else {
            this.onRequestReconnectJoinTable(this.tableId);
        }
    }

    onReceiveTableRejectJoin(jsonResult) {
        var errorMsg = jsonResult["eventData"];
        if (this.gameListener != null) {
            this.gameListener.onReceiveJoinTableReject(errorMsg);
        }
    }
    onReceiveTableUpdate(jsonResult) {}

    onReceiveLobbyMessage(jsonResult) {}

    onReceiveLobbyState(jsonResult) {
        var eventData = jsonResult["eventData"];
        if (eventData == 0) {
            if (this.gameListener != null) {
                this.gameListener.onRecieveTableKick();
                dm.requestLogout();
            }
        }
    }

    processGameIncomingMessage(jsonResult) {
        let actionId = jsonResult["actionId"];
        if (actionId == "1") {
            this.onReceiveStartGameData(jsonResult);
        } else if (actionId == "2") {
            this.onReceiveSitInData(jsonResult);
        } else if (actionId == "3") {
            this.onReceiveRoundUpdateData(jsonResult);
        } else if (actionId == "4") {
            this.onReceiveFireinfo(jsonResult);
        } else if (actionId == "5") {
            this.onReceiveFishStatus(jsonResult);
        } else if (actionId == "6") {
            this.onReceivePlayerLeave(jsonResult);
        } else if (actionId == "7") {
            this.onReceiveFishList(jsonResult);
        } else if (actionId == "9") {
            this.onReceiveGunType(jsonResult);
        }
    }

    onReceiveStartGameData(jsonResult) {
        console.log("onReceiveStartGameData");
        var data = jsonResult["eventData"];
        var curGame;
        this.fishList = [];
        this.seatList = [];
        this.tableId = data[0][1];
        
        if (data[3] == -1) {
            curGame = new OK2_Game();
            curGame.init(-1, -1, 60, 60);
        } else {
            let maxTime = data[3][0][1];
            let curTime = maxTime - data[3][0][0];
            curGame = new OK2_Game();
            curGame.init(1, data[3][0][2], maxTime, curTime);

            var fishData = data[3][1];
            for (let i = 0; i < fishData.length; i++) {
                var curGroup = fishData[i];
                var thisSpawnTime = curGroup[3];
                if (thisSpawnTime > curGame.curGameTime) {
                    var tempTarget = new OK2_TargetObject;
                    tempTarget.init(curGroup[0], curGroup[1],
                        new cc.v2(curGroup[2][0], curGroup[2][1]),
                        curGroup[3], curGroup[4]);

                    var targets = [];
                    var fishsInfo = curGroup[5];
                    var fishGameInfo = new OK2_FishGameInfo();
                    fishGameInfo.init();
                    var fishNum = fishGameInfo.groupInfo[tempTarget.groupId];

                    for (let j = 0; j < fishNum; j++) {
                        var tempInfo = new OK2_TargetInfo();
                        tempInfo.init1(fishsInfo[j][0],
                            fishsInfo[j][1],
                            fishsInfo[j][2], 0, fishsInfo[j][4][0]);

                        targets.push(tempInfo);
                    }

                    tempTarget.setTargetInfo(targets);
                    this.fishList.push(tempTarget);
                }
            }
            if (data[2] != -1) {
                var playerData = data[2];
                for (let k = 0; k < playerData.length; k++) {
                    var tempPlayer = playerData[k];
                    var tempSeatInfo = new OK2_SeatInfo();
                    tempSeatInfo.init(tempPlayer[3],
                        tempPlayer[0],
                        tempPlayer[1],
                        tempPlayer[2],
                        tempPlayer[4], tempPlayer[5], tempPlayer[6]);

                    this.seatList.push(tempSeatInfo);
                }
            }
        }

        if (this.gameListener != null) {
            this.gameListener.initGame(curGame, this.fishList, this.seatList, this.id);
        }

        this.onRequestSitTable();
    }

    onReceiveSitInData(jsonResult) {
        console.log("onReceiveSitInData");
        var data = jsonResult["eventData"];
        var status = data[0];
        if (status == 0) {
            var playerData = data[1];
            var tempSeatInfo = new OK2_SeatInfo();

            tempSeatInfo.init(playerData[3],
                playerData[0],
                playerData[1],
                playerData[2],
                playerData[4], playerData[5], playerData[6]);

            if (tempSeatInfo.playerId == this.id) {
                this.playerSeatNum = tempSeatInfo.seatId;
            }

            if (this.gameListener != null) {
                this.gameListener.onReceivePlayerSitIn(tempSeatInfo, this.playerSeatNum);
            }

        } else {
            if (this.gameListener != null) {
                this.gameListener.receiveSitInFail(status);
            }
        }
    }

    onReceiveRoundUpdateData(jsonResult) {
        console.log("onReceiveRoundUpdateData");
        var data = jsonResult["eventData"];
        var roundNum = data[0];

        if (this.gameListener != null) {
            this.gameListener.receiveRoundUpdate(roundNum);
        }
    }

    onReceiveFireinfo(jsonResult) {
        // console.log("onReceiveFireinfo");
        var data = jsonResult["eventData"];
        var tempGunShoot = new OK2_GunShoot();
        tempGunShoot.init2(data[0], data[2], data[1], data[3], data[4], data[5]);
        if (this.gameListener != null) {
            this.gameListener.updateAllGunShoot(tempGunShoot);
            this.gameListener.updatePlayerCredit(data[0], data[5]);
        }
    }

    onReceiveFishStatus(jsonResult) {
        // console.log("onReceiveFishStatus");
        var data = jsonResult["eventData"];
        var playerId = data[0];
        var weapon = data[4];
        var shootId = data[1];
        var credit = data[2];
        var specialW = -1;
        var dinoList = data[3];
        var tempList = [];
        for (let i = 0; i < dinoList.length; i++) {
            var thisDino = dinoList[i];
            var curTarget = new OK2_TargetInfo();

            curTarget.init3(thisDino[0], thisDino[1], thisDino[2],
                (thisDino[3] == 1) ? true : false, thisDino[4], thisDino[5]);

            tempList.push(curTarget);

            if (!curTarget.isAlive && specialW < 0) {
                specialW = this.varifyIsSpecialWeapon(curTarget.targetType);
            }
        }

        if (this.gameListener != null) {
            this.gameListener.updateFishDeath(playerId, weapon, credit, tempList);
            this.gameListener.updatePlayerCredit(playerId, credit);
        }

        if (specialW > 0) {
            if (this.gameListener != null) {
                this.gameListener.receiveSpecialWeapon(shootId, specialW, (playerId == this.id));
            }
        }
    }

    onReceivePlayerLeave(jsonResult) {
        console.log("onReceivePlayerLeave");
        var data = jsonResult["eventData"];
        var seatId = data[0];
        var playerId = data[1];

        if (this.gameListener != null) {
            this.gameListener.onReceiveTablePlayerLeave(seatId, playerId, 0);
        }
    }

    onReceiveFishList(jsonResult) {
        var data = jsonResult["eventData"];
        var curGame = new OK2_Game();;
        var fishList = [];
        var fishData = data[1];
        for (let i = 0; i < fishData.length; i++) {
            var curGroup = fishData[i];
            var tempTarget = new OK2_TargetObject();
            tempTarget.init(curGroup[0], curGroup[1],
                new cc.v2(curGroup[2][0], curGroup[2][1]), curGroup[3], curGroup[4]);
            var targets = [];
            var fishsInfo = curGroup[5];
            var fishGameInfo = new OK2_FishGameInfo();
            fishGameInfo.init();
            var fishNum = fishGameInfo.groupInfo[tempTarget.groupId];
            for (let j = 0; j < fishNum; j++) {
                var tempInfo = new OK2_TargetInfo();
                tempInfo.init1(fishsInfo[j][0],
                    fishsInfo[j][1],
                    fishsInfo[j][2], 0, fishsInfo[j][4][0]);
                targets.push(tempInfo);
            }
            tempTarget.setTargetInfo(targets);
            fishList.push(tempTarget);
        }

        var maxTime = data[0][2];
        var curTime = maxTime - data[0][1];
        curGame.init(1, data[0][3], maxTime, curTime);
        var status = data[0][0];
        if (status == 0) {
            this.bulletId = 0;
            if (this.gameListener != null) {
                this.gameListener.onGameRoundUpdate(fishList, curGame);
            }
        } else if (status == 1){
            if (this.gameListener != null) {
                this.gameListener.receiveNextBatchFish(fishList, curGame);
            }
        }
    }


    onReceiveGunType(jsonResult) {
        console.log("onReceiveGunType");
        var data = jsonResult["eventData"];
        var gunType = new OK2_GunTypeChanged();
        gunType.init(data[0], data[1]);
        if (this.gameListener != null) {
            this.gameListener.updateAllGunType(gunType);
        }
    }

    onRequestLogin(url, username, password, nickname, ip, port) {
        this.url = url;
        this.loginUsername = username;
        this.password = [REDACTED];
        this.ip = ip;
        this.port = port;
        dm.requestLogin(username, password, nickname, url, ip, port);
    }

    onSuspend() {
        if (this.gameListener != null) {
            this.onRequestWaiting();
        }
        dm.requestLogout();
    }

    onRequestLogout() {
        dm.requestLogout();
    }

    onRetryLogin() {
        dm.requestLogin(this.loginUsername, this.password, null, this.url, this.ip, this.port);
    }

    onRetryTokenLogin(token, url, port) {
        dm.loginToToken(token, url, port);
    }

    loginToToken(token, url, port) {
        dm.loginToToken(token, url, port);
    }

    onRequestJoinTable(tableId) {
        dm.sendSocketData("1", "1", tableId, "-1", null);
    }

    onRequestReconnectJoinTable(tableId) {
        dm.sendSocketData("1", "1", "1", tableId, null);
    }

    onRequestTableList(categoryId) {
        dm.sendSocketData("1", "2", categoryId, null, null);
    }

    onRequestSitTable() {
        dm.sendSocketData("2", "1", null, null, null);
    }

    updateFishGetHit(hittedFish, weaponId, shootId) {
        if (hittedFish.length > 0) {
            var fishList = "[";

            for (let i = 0; i < hittedFish.length; i++) {
                fishList += hittedFish[i];

                if (i < (hittedFish.length - 1)) {
                    fishList += ",";
                } else {
                    fishList += "]";
                }
            }

            dm.sendSocketData("2", "5", shootId, fishList, null);
        }
    }

    updateGunShoot(gunShoot) {
        //this.bulletId = long.Parse(DateTime.Now.ToString("yyyyMMddHHmmssfffff"));
        var now = new Date();
        var dateString =
        now.getFullYear() + 
    ("0" + (now.getMonth()+1)).slice(-2) + 
    ("0" + now.getDate()).slice(-2) + 
    ("0" + now.getHours()).slice(-2) + 
    ("0" + now.getMinutes()).slice(-2) + 
    ("0" + now.getSeconds()).slice(-2)+
    ("0" + now.getMilliseconds());

        this.bulletId = dateString;
        var tempGunShoot = new OK2_GunShoot();
        tempGunShoot.init2(gunShoot.playerId, gunShoot.gunType, gunShoot.shootAngle, gunShoot.betValue, this.bulletId, 0);
        dm.sendSocketData2("2", "4", gunShoot.shootAngle, gunShoot.gunType, gunShoot.betValue, this.bulletId);
        if (this.gameListener != null) {
            this.gameListener.updateOwnShoot(tempGunShoot);
        }
    }

    onRequestLeaveTable() {
        dm.sendSocketData("2", "3", null, null, null);
    }

    updateGunType(gunChanged) {
        dm.sendSocketData("2", "6", null, null, null);
    }

    updateGunMove(gunMove) {}

    changeBetAmount(changeValue) {
        this.betAmountIndex += changeValue;
        if (this.betAmountIndex <= 0) {
            this.betAmountIndex = 0;
        } else if (this.betAmountIndex >= this.betAmountArray.length) {
            this.betAmountIndex = this.betAmountArray.length - 1;
        }

        if (this.gameListener != null) {
            this.gameListener.updateBetAmount(this.id, this.betAmountArray[this.betAmountIndex]);
        }
    }


    onCheckLoginCondition() {
        return this.isLogin;
    }

    varifyIsSpecialWeapon(fishType) {
        if (fishType == 203)
            return 6;
        return -1;
    }
}

var singleton = function singleton() {}
singleton.client = function () {
    if (this.instance === void 0) {
        this.instance = new Ok2_FishDataManager();
    }
    return this.instance;
}

module.exports = singleton.client();