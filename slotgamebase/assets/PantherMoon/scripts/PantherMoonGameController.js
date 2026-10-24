
var constants = require('DJSlotConstants');
var config = require('BaseConfig');
var utils = require('Utils');

cc.Class({
    extends: cc.Component,
    extends: require('BaseGameController'),
    properties: {

    },
    
    start: function () {
        this.payline = config.SLOTDETAILS.MAX_PAYLINE;
        
        this.spinFsm = new FiniteStateMachine();
        this.spinFsm.addTransition(config.SPINSTATE_CONSTANTS.SPINSTATE_INIT, config.SPINSTATE_CONSTANTS.SPINSTATE_IDLE, config.SPINSTATE_TRANS_CONSTANTS.SPINTRANS_INIT_TO_IDLE);
		this.spinFsm.addTransition(config.SPINSTATE_CONSTANTS.SPINSTATE_IDLE, config.SPINSTATE_CONSTANTS.SPINSTATE_SPIN, config.SPINSTATE_TRANS_CONSTANTS.SPINTRANS_IDLE_TO_SPIN);
        this.spinFsm.addTransition(config.SPINSTATE_CONSTANTS.SPINSTATE_SPIN, config.SPINSTATE_CONSTANTS.SPINSTATE_RESULT, config.SPINSTATE_TRANS_CONSTANTS.SPINTRANS_SPIN_TO_RESULT);
        this.spinFsm.addTransition(config.SPINSTATE_CONSTANTS.SPINSTATE_RESULT, config.SPINSTATE_CONSTANTS.SPINSTATE_IDLE, config.SPINSTATE_TRANS_CONSTANTS.SPINTRANS_RESULT_TO_IDLE);
        this.spinFsm.setInitialState(config.SPINSTATE_CONSTANTS.SPINSTATE_INIT);

        this.gameFsm = new FiniteStateMachine();
		this.gameFsm.addTransition(config.GAMESTATE_CONSTANTS.GAMESTATE_INIT, config.GAMESTATE_CONSTANTS.GAMESTATE_NORMAL, config.GAMESTATE_TRANS_CONSTANTS.GAMETRANS_INIT_TO_NORMAL);
		this.gameFsm.addTransition(config.GAMESTATE_CONSTANTS.GAMESTATE_NORMAL, config.GAMESTATE_CONSTANTS.GAMESTATE_FREESPIN, config.GAMESTATE_TRANS_CONSTANTS.GAMETRANS_NORMAL_TO_FREESPIN);
		this.gameFsm.addTransition(config.GAMESTATE_CONSTANTS.GAMESTATE_FREESPIN, config.GAMESTATE_CONSTANTS.GAMESTATE_NORMAL, config.GAMESTATE_TRANS_CONSTANTS.GAMETRANS_FREESPIN_TO_NORMAL);
		this.gameFsm.setInitialState(config.GAMESTATE_CONSTANTS.GAMESTATE_INIT);
        this._super();
    },

    onReceiveStartGameData: function (data) {
        utils.log("BaseGameController::onReceiveStartGameData::1");
        this.reset();
        this.slotSpinData = new SlotSpinDataModel();
        this.slotSpinData.roundId = data.roundId;
        this.gameMode = data.roundId;
        this.slotSpinData.freeSpinLeft = data.freeSpinLeft;
        this.slotSpinData.multiplier = data.multiplier;
        this.slotSpinData.totalWin = data.totalWin;
        this.slotSpinData.preWinAmount = data.preWinAmount;
        this.slotSpinData.nextRoundId = data.nextRoundId;
        this.slotSpinData.betValue = data.betValue;
        this.slotSpinData.lineBet = data.lineBet;
        this.slotSpinData.gameAction = data.gameAction;
        this.slotSpinData.reelPosData = data.reelPosData;
        utils.log("BaseGameController::onReceiveStartGameData::3");
        this.freeSpinSelectionType = data.freeSpinSelectionType;
        this.freeSpinSelectionNum = data.freeSpinSelectionNum;
        utils.log("BaseGameController::onReceiveStartGameData::4");
        if (data.freeSpinSelectionType == 0) {
            this.slotSpinData.multiplier = data.freeSpinSelectionNum;
        }
        else if (data.freeSpinSelectionType == 1) {
            this.slotSpinData.freeSpinLeft = data.freeSpinSelectionNum;
        }
        utils.log("BaseGameController::onReceiveStartGameData::roundId::" + this.slotSpinData.roundId);
        utils.log("BaseGameController::onReceiveStartGameData::freeSpinLeft::" + this.slotSpinData.freeSpinLeft);
        utils.log("BaseGameController::onReceiveStartGameData::multiplier::" + this.slotSpinData.multiplier);
        utils.log("BaseGameController::onReceiveStartGameData::totalWin::" + this.slotSpinData.totalWin);
        utils.log("BaseGameController::onReceiveStartGameData::preWinAmount::" + this.slotSpinData.preWinAmount);
        utils.log("BaseGameController::onReceiveStartGameData::nextRoundId::" + this.slotSpinData.nextRoundId);
        utils.log("BaseGameController::onReceiveStartGameData::betValue::" + this.slotSpinData.betValue);
        utils.log("BaseGameController::onReceiveStartGameData::lineBet::" + this.slotSpinData.lineBet);
        utils.log("BaseGameController::onReceiveStartGameData::gameAction::" + this.slotSpinData.gameAction);
        utils.log("BaseGameController::onReceiveStartGameData::reelPosData::" + this.slotSpinData.reelPosData);
        utils.log("BaseGameController::onReceiveStartGameData::isChangeGameMode::" + this.isChangeGameMode);
        utils.log("BaseGameController::onReceiveStartGameData::gameMode::" + this.gameMode);
        utils.log("BaseGameController::onReceiveStartGameData::isAutoSpinMode::" + this.isAutoSpinMode);
        utils.log("BaseGameController::onReceiveStartGameData::autoSpinValue::" + this.autoSpinValue);
        this.mainView.onReceiveStartGameData(data);
        this.mainView.onChangedBetValue(this.payline, this.getBetPerLineValue(), this.getTotalBetValue());
        var maxBetIndex = this.betPerLineValueArr.length - 1;
        this.betView.onReceiveStartGameData(this.payline, this.getBetPerLineValue(), this.betIndex, maxBetIndex, this.slotSpinData.freeSpinLeft, this.isChangeGameMode, this.gameMode, this.isAutoSpinMode, this.autoSpinValue);

        var symbolResult = [];
        if (data.roundId != -1) {
            for (var i = 0; i < data.symbolResult.length; i++) {
                var arr = data.symbolResult[i];
                for (var j = 0; j < arr.length; j++) {
                    symbolResult.push(arr[j]);
                }
            }
        }
        else {
            var totalSymbols = config.REELDETAILS.NUM_REEL * config.REELDETAILS.NUM_ROW;
            for (var i = 0; i < totalSymbols; i++) {
                var rand = this.getRandomInt(0, config.SYMBOLCODEARR.length - 1);
                var str = config.SYMBOLCODEARR[rand];
                symbolResult.push(str);
            }
        }
        utils.log("BaseGameController::onReceiveStartGameData::symbolResult::====================");
        for (var i = 0; i < symbolResult.length; i++) {
            utils.log("symbolResult::" + symbolResult[i]);
        }
        utils.log("BaseGameController::onReceiveStartGameData::symbolResult::====================");
        this.slotMachineView.onReceiveStartGameData(symbolResult, data.reelPosData);
        if (data.roundId == constants.SERVERDATAKEYS.FIRSTTIMEMODE) {
            var state = this.gameFsm.applyTransition(config.GAMESTATE_TRANS_CONSTANTS.GAMETRANS_INIT_TO_NORMAL);
            this.updateGameFsm(state);
        }
        else if (data.roundId == constants.SERVERDATAKEYS.NORMALSPINMODE) {
            if (data.freeSpinLeft > 0) {
            utils.log("data.roundId == constants.SERVERDATAKEYS.NORMALSPINMODE::data.freeSpinLeft");
                var state = this.gameFsm.applyTransition(config.GAMESTATE_TRANS_CONSTANTS.GAMETRANS_INIT_TO_NORMAL);
                this.updateGameFsm(state);
                var state2 = this.gameFsm.applyTransition(config.GAMESTATE_TRANS_CONSTANTS.GAMETRANS_NORMAL_TO_FREESPIN);
                this.updateGameFsm(state2);
            }
            else {
                var state = this.gameFsm.applyTransition(config.GAMESTATE_TRANS_CONSTANTS.GAMETRANS_INIT_TO_NORMAL);
                this.updateGameFsm(state);
            }
        }
        this.popUpView.hide();
    },

    checkNextStep: function () {
        var freeSpinDifference = this.slotSpinData.freeSpinLeft - this.previousFreeSpinNum;
        if (this.isChangeGameMode == true) {
            if (this.slotSpinData.freeSpinLeft != -1) {
                this.slotMachineView.reset();
                this.audioController.stopAllSfx();
                this.audioController.playFreeSpinTrigger();
                this.mainView.showFreeSpinTitle();
            }
            else {
                this.slotMachineView.reset();
                this.audioController.stopAllSound();
                this.audioController.playFreeSpinSummary();
                this.mainView.onClickNextStepShowFreeSpinSummary(this.slotSpinData.preWinAmount, this.slotSpinData.totalGameWin, this.slotSpinData.totalWin);
            }
        }
        else if (freeSpinDifference > 15) {
            this.mainView.showRetrigger(15);
        }
        else {
            var state = this.spinFsm.applyTransition(config.SPINSTATE_TRANS_CONSTANTS.SPINTRANS_RESULT_TO_IDLE);
            this.updateSpinFsm(state);
        }
    },

    onClickNextStepB: function () {
        var freeSpinDifference = this.slotSpinData.freeSpinLeft - this.previousFreeSpinNum;
        this.slotMachineView.reset();
        this.audioController.stopAllSound();
        if (this.isChangeGameMode == true) {
            if (this.slotSpinData.freeSpinLeft > 0) {
                this.mainView.onClickNextStepFreeSpinGameB(this.slotSpinData.freeSpinLeft, this.slotSpinData.multiplier);
            }
            else {
                this.audioController.playFreeSpinSummary();
                var freeSpinWin = this.slotSpinData.totalWin - this.slotSpinData.preWinAmount;
                this.mainView.onClickNextStepShowFreeSpinSummary(this.slotSpinData.preWinAmount, freeSpinWin, this.slotSpinData.totalWin);
            }
        }
        else if (freeSpinDifference > 15) {
            this.onClickSpin();
        }
    },
});
