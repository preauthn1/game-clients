var config = require('BaseConfig');
var constants = require('DJSlotConstants');
var utils = require('Utils');

cc.Class({
    extends: cc.Component,

    properties: {
        gameController: cc.Node,
        currentSpinIndex: 0,
        freeSpinLeft: 2,
        currentBonusIndex: 0,
        grandTween: 94050,
        majorTween: 33692,
        minorTween: 15622,
        jackpotWinValueCallBack: null,
    },

    init: function () {
        this.gameController = this.gameController.getComponent(config.SCRIPT_PREFIX + 'GameController');
    },

    onRequestSystemConnectedData: function () {
        var str = "{\"actionId\":\"1\",\"eventData\":[1659,\"extp002\",10101289,\"2017/11/15 12:36:56\",[[],null]],\"id\":\"0\"}";

        var jsonResult = JSON.parse(str);
        var tempData = jsonResult.eventData;
        var userName = "";
        var credit = "";
        credit = tempData[2];
        userName = tempData[1];
        console.log("sim:credit:" + credit);
        console.log("sim:userName:" + userName);
        //credit = jsonResult[2];
        //userName = jsonResult[1];
        this.gameController.onReceiveSystemConnected(userName, credit);
    },

    onExitGameToLobby: function () {
        if (this.jackpotWinValueCallBack != null) {
            this.unschedule(this.jackpotWinValueCallBack);
        }
    },

    startMainJackpotSimulation: function () {
        console.log("startMainJackpotSimulation");
        this.updateMainJackpot();
        this.jackpotWinValueCallBack = function () {
            // 这里的 this 指向 component
            this.updateMainJackpot();
        },
            this.schedule(this.jackpotWinValueCallBack, 5);
    },

    updateMainJackpot: function () {
        this.grandTween += 5750;
        this.majorTween += 5692;
        this.minorTween += 5622;

        var arr = [this.grandTween, this.majorTween, this.minorTween];
        this.gameController.onReceiveMainJackpotData(arr);
    },

    onRequestStartGameData: function () {
        var str = "{\"actionId\":\"1\",\"eventData\":[[null,null,0,0],[\"extp003\",10029879],[[1,0,1,-1,15,1,0,0,1,0,[]],[[[\"s8\",\"s8\",\"s2\",\"s3\",\"s10\"],[\"s10\",\"s5\",\"s5\",\"s6\",\"w1\"],[\"s4\",\"s6\",\"s4\",\"s9\",\"s4\"]],[0,0,0,0,0]],[],[1]]],\"id\":\"2\"}";
        //var str = "{\"actionId\":\"1\",\"eventData\":[[null,null,0,0],[\"extp002\",10101289],[[1,0,1,-1,25,1,0,0,1,0,[]],[[[\"s10\",\"s7\",\"s7\",\"s11\",\"s10\"],[\"s8\",\"s6\",\"s9\",\"w1\",\"s6\"],[\"s11\",\"s8\",\"s10\",\"s7\",\"s5\"]],[0,0,0,0,0]],[],[1]]],\"id\":\"2\"}";
        var jsonResult = JSON.parse(str);
        var tempData = jsonResult.eventData;
        var slotStartData = new SlotStartDataModel();
        slotStartData.init(tempData);
        this.gameController.onReceiveStartGameData(slotStartData);

        /*
        var slotStartData = new SlotStartDataModel();
        slotStartData.playerId = "";
        slotStartData.playerCredit = 0;
        slotStartData.roundId = constants.SERVERDATAKEYS.NORMALSPINMODE;
        slotStartData.symbolResult = [
            ["s1", "s3", "s6", "s8", "c1"],
            ["s5", "s2", "s11", "w1", "s1"],
            ["s1", "s7", "s10", "c1", "w1"]];
        slotStartData.freeSpinLeft = -1;
        slotStartData.multiplier = 1;
        slotStartData.totalWin = 0;
        slotStartData.totalGameWin = 0;
        slotStartData.curTotalWin = 0;
        slotStartData.preWinAmount = 0;
        slotStartData.nextRoundId = 0;
        slotStartData.betValue = 0;
        slotStartData.lineBet = 0;
        slotStartData.gameAction = -1;
        slotSpinData.reelPosData = [
            constants.SERVERDATAKEYS.REELPOS_NEUTRAL,
            constants.SERVERDATAKEYS.REELPOS_NEUTRAL,
            constants.SERVERDATAKEYS.REELPOS_NEUTRAL,
            constants.SERVERDATAKEYS.REELPOS_NEUTRAL,
            constants.SERVERDATAKEYS.REELPOS_NEUTRAL
        ];
        slotStartData.winlineData = [];
        this.gameController.onReceiveStartGameData(slotStartData);
        */
    },

    onRequestSpinResult: function () {
        var str = "{\"actionId\":\"9\",\"eventData\":[[1,0,1,-1,15,1,0,0,1,0],[[[\"s6\",\"s8\",\"s7\",\"s10\",\"s9\"],[\"s7\",\"s1\",\"s9\",\"s11\",\"s3\"],[\"s4\",\"s11\",\"s8\",\"s8\",\"s5\"]],[0,0,0,0,0]],[],[1]],\"id\":\"2\"}";
        //Simulator: onReceiveMsg {"actionId":"9","eventData":[[1,0,1,-1,15,1,0,0,1,0],[[["s6","s8","s7","s10","s9"],["s7","s1","s9","s11","s3"],["s4","s11","s8","s8","s5"]],[0,0,0,0,0]],[],[1]],"id":"2"}
        var jsonResult = JSON.parse(str);
        var tempData = jsonResult.eventData;
        var slotSpinData = new SlotSpinDataModel();
        slotSpinData.init(tempData);
        this.gameController.onReceiveSpinResult(slotSpinData);

        /*
        var slotSpinData = new SlotSpinDataModel();
        var isChangedMode = false;
        this.currentSpinIndex++;
        slotSpinData.freeSpinLeft = -1;
        if (this.currentSpinIndex > 1) {
            this.currentSpinIndex = 0;
            isChangedMode = true;
            slotSpinData.freeSpinLeft = 2;
        }
        slotSpinData.roundId = 1;
        slotSpinData.symbolResult = [
            ["s2", "s2", "s2", "s8", "c1"],
            ["s1", "s1", "s1", "s1", "s1"],
            ["s1", "s7", "s10", "c1", "w1"]];
        slotSpinData.multiplier = 1;
        slotSpinData.totalWin = 200.30;
        slotSpinData.totalGameWin = 1050;
        slotSpinData.curTotalWin = 0;
        slotSpinData.preWinAmount = 0;
        slotSpinData.nextRoundId = 0;
        slotSpinData.betValue = 0;
        slotSpinData.lineBet = 0;
        slotSpinData.gameAction = -1;
        slotSpinData.reelPosData = [
            constants.SERVERDATAKEYS.REELPOS_NEUTRAL,
            constants.SERVERDATAKEYS.REELPOS_NEUTRAL,
            constants.SERVERDATAKEYS.REELPOS_NEUTRAL,
            constants.SERVERDATAKEYS.REELPOS_NEUTRAL,
            constants.SERVERDATAKEYS.REELPOS_NEUTRAL
        ];
        slotSpinData.winlineData = [
            [1, "s1", 5, 100, 1],
            [2, "ss", 3, 200, 1],
        ];
        this.gameController.onReceiveSpinResult(slotSpinData);
        if (isChangedMode == true) {
            this.gameController.onReceiveChangeMode(constants.SERVERDATAKEYS.NORMALSPINMODE);
        }
        */
    },

    onRequestFreeSpinResult: function () {
        var slotSpinData = new SlotSpinDataModel();
        var isChangedMode = false;
        this.freeSpinLeft--;
        if (this.freeSpinLeft < 0) {
            this.freeSpinLeft = 0;
            isChangedMode = true;
        }
        slotSpinData.freeSpinLeft = this.freeSpinLeft;
        if (isChangedMode == true) {
            slotSpinData.freeSpinLeft = -1;
        }
        slotSpinData.roundId = 1;
        slotSpinData.symbolResult = [
            ["s6", "s6", "s6", "s4", "s5"],
            ["s5", "s5", "s5", "s9", "s10"],
            ["s11", "c1", "s4", "s3", "w1"]];
        slotSpinData.multiplier = 3;
        slotSpinData.totalWin = 200.30;
        slotSpinData.totalGameWin = 1050;
        slotSpinData.curTotalWin = 100.60;
        slotSpinData.preWinAmount = 25.10;
        slotSpinData.nextRoundId = 0;
        slotSpinData.betValue = 0;
        slotSpinData.lineBet = 0;
        slotSpinData.gameAction = -1;
        slotSpinData.reelPosData = [
            constants.SERVERDATAKEYS.REELPOS_NEUTRAL,
            constants.SERVERDATAKEYS.REELPOS_NEUTRAL,
            constants.SERVERDATAKEYS.REELPOS_NEUTRAL,
            constants.SERVERDATAKEYS.REELPOS_NEUTRAL,
            constants.SERVERDATAKEYS.REELPOS_NEUTRAL
        ];
        slotSpinData.winlineData = [
            [1, "s5", 3, 100, 1],
            [2, "s6", 3, 200, 1],
        ];
        this.gameController.onReceiveFreeSpinResult(slotSpinData);
        if (isChangedMode == true) {
            this.gameController.onReceiveChangeMode(constants.SERVERDATAKEYS.NORMALSPINMODE);
            this.freeSpinLeft = 2;
        }
    },

    onRequestBonusResult: function () {
        var isChangedMode = false;
        this.currentBonusIndex++;
        if (this.currentBonusIndex > 1) {
            this.currentBonusIndex = 0;
            isChangedMode = true;
        }
        if (this.currentBonusIndex == 1) {

            this.gameController.onReceiveBonusResult(0, 3);
        }
        else {
            this.gameController.onReceiveBonusResult(1, 2);
        }
        if (isChangedMode == true) {
            this.gameController.onReceiveChangeMode(1);
        }
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
