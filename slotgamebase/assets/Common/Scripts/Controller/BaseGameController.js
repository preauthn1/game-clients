
var constants = require('DJSlotConstants');
var config = require('BaseConfig');
var utils = require('Utils');
var slotSpinDataModel = require('SlotSpinDataModel');
//var playerDataModel = require('PlayerDataModel');
cc.Class({
    extends: cc.Component,

    properties: {
        loadingView: cc.Node,
        credit: 0,
        betIndex: 0,
        payline: 9,
        //freeSpinLeft: -1,
        //freeSpinMultiplier: -1,
        autoSpinValue:
            {
                default: 100,
                visible: false
            },
        betPerLineValueArr:
            {
                default: [],
                type: [cc.Float]
            },
        isSimulation: false,
        isJackpotSimulation: false,
        mainView: cc.Node,
        popUpView: cc.Node,
        simulator: cc.Node,
        betView: cc.Node,
        spriteController: cc.Node,
        slotMachineView: cc.Node,
        paylineView: cc.Node,
        progressJackpotView: cc.Node,
        freeSpinPopUpView: cc.Node,
        freeSpinSummaryPopUpView: cc.Node,
        retriggerView: cc.Node,
        menuView: cc.Node,
        audioController: cc.Node,
        slotDataManager: cc.Node,
        //result data
        slotSpinData: slotSpinDataModel,
        gameMode: 0,
        isChangeGameMode: false,
        isFirstFreeSpinAfterChangeMode: false,

        isAutoSpinMode: false,
        isTurboMode: false,
        previousFreeSpinNum: 0,
        previousMultiplierNum: 1,
        previousFreeSpinWinVal: 0,
    },

    // use this for initialization
    onLoad: function () {

    },

    start: function () {
        //utils.log('gamecontroller::config::' + config.SCRIPT_PREFIX);
        this.slotDataManager = this.slotDataManager.getComponent('SlotDataManager');
        this.loadingView = this.loadingView.getComponent('BaseLoadingView');

        this.mainView = this.mainView.getComponent(config.SCRIPT_PREFIX + 'MainView');
        this.simulator = this.simulator.getComponent(config.SCRIPT_PREFIX + 'Simulator');
        this.popUpView = this.popUpView.getComponent(config.SCRIPT_PREFIX + 'PopUpView');
        this.betView = this.betView.getComponent(config.SCRIPT_PREFIX + 'BetView');
        this.slotMachineView = this.slotMachineView.getComponent(config.SCRIPT_PREFIX + 'SlotMachineView');
        if (this.paylineView != null) {
            this.paylineView = this.paylineView.getComponent(config.SCRIPT_PREFIX + 'PaylineView');
            this.paylineView.init();
        }
        this.spriteController = this.spriteController.getComponent(config.SCRIPT_PREFIX + 'SpriteController');
        this.audioController = this.audioController.getComponent(config.SCRIPT_PREFIX + 'AudioController');
        if (this.freeSpinPopUpView != null) {
            this.freeSpinPopUpView = this.freeSpinPopUpView.getComponent(config.SCRIPT_PREFIX + 'FreeSpinPopUpView');
            this.freeSpinPopUpView.init();
        }
        if (this.freeSpinSummaryPopUpView != null) {
            this.freeSpinSummaryPopUpView = this.freeSpinSummaryPopUpView.getComponent(config.SCRIPT_PREFIX + 'FreeSpinSummaryPopUpView');
            this.freeSpinSummaryPopUpView.init();
        }
        if (this.retriggerView != null) {
            this.retriggerView = this.retriggerView.getComponent(config.SCRIPT_PREFIX + 'RetriggerView');
            this.retriggerView.init();
        }
        if (this.progressJackpotView != null) {
            this.progressJackpotView = this.progressJackpotView.getComponent(config.SCRIPT_PREFIX + 'ProgressiveJackpotView');
            this.progressJackpotView.init();
        }
        this.menuView = this.menuView.getComponent(config.SCRIPT_PREFIX + 'MenuView');

        this.mainView.init();
        this.simulator.init();
        this.popUpView.init();
        this.betView.init();
        this.slotMachineView.init();
        this.spriteController.init();
        this.audioController.init();
        this.menuView.init();

        if (this.isSimulation == true) {
            this.simulator.onRequestSystemConnectedData();
            this.simulator.onRequestStartGameData();
        }
        else {
            this.slotDataManager.init(this.isSimulation);
        }

        if (this.isJackpotSimulation == true) {
            this.simulator.startMainJackpotSimulation();
        }
    },


    /////////////////////////////////////////////STATES_START////////////////////////////////////////////////////////////

    onIdleState: function () {
        utils.log("BaseGameController::onIdleState::isChangeGameMode::" + this.isChangeGameMode + "::gameMode::" + this.gameMode);
        this.betView.onIdleState(this.isChangeGameMode, this.gameMode, this.isAutoSpinMode, this.autoSpinValue);
        if (this.checkBet() == true) {
            if (this.gameMode == constants.SERVERDATAKEYS.NORMALSPINMODE) {
                if (this.slotSpinData.freeSpinLeft > 0) {
                    var state = this.spinFsm.applyTransition(config.SPINSTATE_TRANS_CONSTANTS.SPINTRANS_IDLE_TO_SPIN);
                    this.updateSpinFsm(state);
                    //utils.log("BaseGameController::onIdleState2::");
                }
            }
            else if (this.isAutoSpinMode == true) {
                if (this.autoSpinValue != 0) {
                    if (this.autoSpinValue != 100) {
                        this.autoSpinValue--;
                    }
                    this.onClickSpin();
                }
                else {
                    this.isAutoSpinMode = false;
                }
            }
        }
        else {
            this.payline = 1;
            this.betIndex = 0;
            var minBet = this.betPerLineValueArr[this.betIndex];
            if (this.credit < minBet) {
                this.mainView.showPopUp("", constants.constants.ERR_CLIENT_INSF_COIN_MESSAGE, true);
            }
        }
    },

    onSpinState: function () {
        // utils.log("BaseGameController::onSpinState::");
        
        this.previousFreeSpinNum = this.slotSpinData.freeSpinLeft;
        this.previousMultiplierNum = this.slotSpinData.multiplier;
        var totalWin = this.slotSpinData.totalWin;
        if(this.isFirstFreeSpinAfterChangeMode == true)
        {
            this.isFirstFreeSpinAfterChangeMode = false;
            totalWin = 0;
        }
        var previousFreeSpinWinVal =  totalWin - this.slotSpinData.preWinAmount;
        //utils.log("BaseGameController::onSpinState::totalWin::" + totalWin);
        //utils.log("BaseGameController::onSpinState::preWinAmount::" + this.slotSpinData.preWinAmount);
        //this.reset();
        this.betView.onSpinState(this.isChangeGameMode, this.gameMode, this.isAutoSpinMode, this.autoSpinValue);
        if (this.paylineView != null) {
            this.paylineView.onSpinState();
        }
        // utils.log("BaseGameController::onSpinState::previousFreeSpinWinVal::" + previousFreeSpinWinVal);
        this.mainView.onSpinState(previousFreeSpinWinVal);
        this.slotMachineView.onSpinState();
        // utils.log("BaseGameController::onSpinState:: 2");
    },

    requestSpinResult: function () {
        var isFreeSpin = false;
        if (this.previousFreeSpinNum > 0) {
            isFreeSpin = true;
        }
        var multiplier = this.previousMultiplierNum;

        if (this.isSimulation == true) {
            if (isFreeSpin == false) {
                //utils.log("BaseGameController::simulator::onRequestSpinResult::");
                this.simulator.onRequestSpinResult();
            }
            else {
                this.simulator.onRequestFreeSpinResult();
            }
        }
        else {
            if (isFreeSpin == false) {
                // utils.log("BaseGameController::requestSpinResult::isFreeSpin::false");
                // utils.log("BaseGameController::requestSpinResult::payline::" + this.payline);
                // utils.log("BaseGameController::requestSpinResult::getBetPerLineValue::" + this.getBetPerLineValue());
                this.onRequestSpinResult(this.payline, this.getBetPerLineValue(), 1);
            }
            else {
                // utils.log("BaseGameController::requestSpinResult::isFreeSpin::true");
                // utils.log("BaseGameController::requestSpinResult::payline::" + this.payline);
                // utils.log("BaseGameController::requestSpinResult::getBetPerLineValue::" + this.getBetPerLineValue());
                this.onRequestSpinResult(this.payline, this.getBetPerLineValue(), multiplier);
            }
        }
    },

    onResultState: function () {
        //utils.log("BaseGameController::onResultState::");
        this.audioController.stopAllSfx();
        //this.mainView.onReceivePlayerUpdate(this.credit);
        var freeSpinWin = this.slotSpinData.totalWin - this.slotSpinData.preWinAmount;
        var spinWin = 0;
        for (var i = 0; i < this.slotSpinData.winlineData.length; i++) {
            var winLineData = this.slotSpinData.winlineData[i];
            var winVal = winLineData[3];
            spinWin += winVal;
        };
        this.mainView.onResultState(spinWin, this.isChangeGameMode, this.gameMode, this.slotSpinData.freeSpinLeft, this.previousFreeSpinNum, this.getTotalBetValue(), freeSpinWin);
        if (this.slotSpinData.progressJackpotWinType != -1) {
            // utils.log("baseGameController::onResultState::progressJackpotWinType::" + this.slotSpinData.progressJackpotWinType);
            // utils.log("baseprogressivejackpotview::onResultState::progressJackpotWinAmount::" + this.slotSpinData.progressJackpotWinAmount);
            this.mainView.showProgressiveJackpot(this.slotSpinData.progressJackpotWinType, this.slotSpinData.progressJackpotWinAmount);
        }
        else if (this.isChangeGameMode){
            this.slotMachineView.playSpecialSymbolAnimation(config.SYMBOLCODE.SYMBOL_SCATTER);
            if (spinWin > 0) {
                var symbolTypeArr = this.slotSpinData.symbolTypeArr;
                this.slotMachineView.onResultState(this.slotSpinData);
            }
        }
        else if (spinWin > 0) {
            var symbolTypeArr = this.slotSpinData.symbolTypeArr;
            this.slotMachineView.onResultState(this.slotSpinData);
        }
        else {
            this.betView.onResultState(this.isChangeGameMode, this.gameMode, this.isAutoSpinMode, this.autoSpinValue, this.slotSpinData.freeSpinLeft);
            this.onResultEnd();
            /*
        if (this.isChangeGameMode == false) {
            var state = this.spinFsm.applyTransition(config.SPINSTATE_TRANS_CONSTANTS.SPINTRANS_RESULT_TO_IDLE);
            this.updateSpinFsm(state);
        }
        
            */
        }
    },
    onAfterBigWin(){
        this.betView.onResultState(this.isChangeGameMode, this.gameMode, this.isAutoSpinMode, this.autoSpinValue, this.slotSpinData.freeSpinLeft);
    },
    onResultEnd: function () {
        // utils.log("onResultEnd");
        this.checkNextStep();
    },

    onBonusGameState: function () {
        // utils.log("gc::onBonusGameState::");
        this.audioController.stopAllSound();
        this.audioController.playBGM(this.audioController.bgmBonusStr);
        this.mainView.onBonusGameState(this.slotSpinData.freeSpinLeft, this.slotSpinData.multiplier);
        this.slotMachineView.reset();
        if (this.paylineView != null) {
            this.paylineView.hideAllPaylines();
        }
        this.isChangeGameMode = false;
    },

    onNormalSpinState: function () {
        // utils.log("gc::onNormalSpinState::" + this.isChangeGameMode + "::" + this.gameMode);
        this.audioController.stopAllSound();
        this.audioController.playBGM(this.audioController.bgmNormalStr);
        this.slotMachineView.reset();
        if (this.paylineView != null) {
            this.paylineView.hideAllPaylines();
        }
        this.mainView.onNormalSpinState();
        this.betView.onNormalSpinState(this.isChangeGameMode, this.gameMode, this.isAutoSpinMode, this.autoSpinValue);
        if (this.spinFsm.getCurState() == config.SPINSTATE_CONSTANTS.SPINSTATE_RESULT) {
            var state = this.spinFsm.applyTransition(config.SPINSTATE_TRANS_CONSTANTS.SPINTRANS_RESULT_TO_IDLE);
            this.updateSpinFsm(state);
        }
        this.isChangeGameMode = false;
    },

    onFreeSpinState: function () {
        // utils.log("gc::onFreeSpinState::isChangeGameMode::" + this.isChangeGameMode + "::gameMode::" + this.gameMode + "::totalWin::" + this.slotSpinData.totalWin + "::preWinAmount::" + this.slotSpinData.preWinAmount);
        this.audioController.stopAllSound();
        this.audioController.playBGM(this.audioController.bgmFreeSpinStr);
        this.slotMachineView.reset();
        if (this.paylineView != null) {
            this.paylineView.hideAllPaylines();
        }
        var freeSpinWin = this.slotSpinData.totalWin - this.slotSpinData.preWinAmount;
        this.mainView.onFreeSpinState(this.slotSpinData.freeSpinLeft, this.slotSpinData.multiplier, freeSpinWin, this.isChangeGameMode);
        this.betView.onFreeSpinState(this.isChangeGameMode, this.gameMode, this.isAutoSpinMode, this.autoSpinValue);
        if (this.spinFsm.getCurState() == config.SPINSTATE_CONSTANTS.SPINSTATE_RESULT) {
            var state = this.spinFsm.applyTransition(config.SPINSTATE_TRANS_CONSTANTS.SPINTRANS_RESULT_TO_IDLE);
            this.updateSpinFsm(state);
        }
        this.isChangeGameMode = false;
    },
    /////////////////////////////////////////////STATES_END////////////////////////////////////////////////////////////


    /////////////////////////////////////////////SERVER_DATA_START////////////////////////////////////////////////////////////

    onReceiveSystemConnected: function (userName, credit) {
        // utils.log("onReceiveSystemConnected::" + credit);
        this.credit = credit;
        var state = this.spinFsm.applyTransition(config.SPINSTATE_TRANS_CONSTANTS.SPINTRANS_INIT_TO_IDLE);
        this.updateSpinFsm(state);
        this.mainView.onReceiveSystemConnected(credit);
    },

    onReceiveStartGameData: function (data) {
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
        this.freeSpinSelectionType = data.freeSpinSelectionType;
        this.freeSpinSelectionNum = data.freeSpinSelectionNum;
        if (data.freeSpinSelectionType == 0) {
            this.slotSpinData.multiplier = data.freeSpinSelectionNum;
        }
        else if (data.freeSpinSelectionType == 1) {
            this.slotSpinData.freeSpinLeft = data.freeSpinSelectionNum;
        }
        // utils.log("BaseGameController::onReceiveStartGameData::======================");
        // utils.log("BaseGameController::onReceiveStartGameData::roundId::" + this.slotSpinData.roundId);
        // utils.log("BaseGameController::onReceiveStartGameData::freeSpinLeft::" + this.slotSpinData.freeSpinLeft);
        // utils.log("BaseGameController::onReceiveStartGameData::multiplier::" + this.slotSpinData.multiplier);
        // utils.log("BaseGameController::onReceiveStartGameData::totalWin::" + this.slotSpinData.totalWin);
        // utils.log("BaseGameController::onReceiveStartGameData::preWinAmount::" + this.slotSpinData.preWinAmount);
        // utils.log("BaseGameController::onReceiveStartGameData::nextRoundId::" + this.slotSpinData.nextRoundId);
        // utils.log("BaseGameController::onReceiveStartGameData::betValue::" + this.slotSpinData.betValue);
        // utils.log("BaseGameController::onReceiveStartGameData::lineBet::" + this.slotSpinData.lineBet);
        // utils.log("BaseGameController::onReceiveStartGameData::gameAction::" + this.slotSpinData.gameAction);
        // utils.log("BaseGameController::onReceiveStartGameData::reelPosData::" + this.slotSpinData.reelPosData);
        // utils.log("BaseGameController::onReceiveStartGameData::isChangeGameMode::" + this.isChangeGameMode);
        // utils.log("BaseGameController::onReceiveStartGameData::gameMode::" + this.gameMode);
        // utils.log("BaseGameController::onReceiveStartGameData::isAutoSpinMode::" + this.isAutoSpinMode);
        // utils.log("BaseGameController::onReceiveStartGameData::autoSpinValue::" + this.autoSpinValue);
        // for (var i = 0; i < this.slotSpinData.winlineData.length; i++) {
        //     utils.log("BaseGameController::onReceiveSpinResult::winlineData::" + this.slotSpinData.winlineData[i]);
        // }
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
        //utils.log("BaseGameController::onReceiveStartGameData::symbolResult::====================");
        // for (var i = 0; i < symbolResult.length; i++) {
        //     utils.log("symbolResult::" + symbolResult[i]);
        // }
        //utils.log("BaseGameController::onReceiveStartGameData::symbolResult::====================");
        //utils.log("BaseGameController::onReceiveStartGameData::======================");
        this.slotMachineView.onReceiveStartGameData(symbolResult, data.reelPosData);
    },



    onReceiveSpinResult: function (data) {
        utils.log("onReceiveSpinResult::==========================================");
        this.slotSpinData = data;
        // utils.log("BaseGameController::onReceiveSpinResult::roundId::" + this.slotSpinData.roundId);
        // utils.log("BaseGameController::onReceiveSpinResult::freeSpinLeft::" + this.slotSpinData.freeSpinLeft);
        // utils.log("BaseGameController::onReceiveSpinResult::multiplier::" + this.slotSpinData.multiplier);
        // utils.log("BaseGameController::onReceiveSpinResult::totalWin::" + this.slotSpinData.totalWin);
        // utils.log("BaseGameController::onReceiveSpinResult::preWinAmount::" + this.slotSpinData.preWinAmount);
        // utils.log("BaseGameController::onReceiveSpinResult::nextRoundId::" + this.slotSpinData.nextRoundId);
        // utils.log("BaseGameController::onReceiveSpinResult::betValue::" + this.slotSpinData.betValue);
        // utils.log("BaseGameController::onReceiveSpinResult::lineBet::" + this.slotSpinData.lineBet);
        // utils.log("BaseGameController::onReceiveSpinResult::gameAction::" + this.slotSpinData.gameAction);
        // utils.log("BaseGameController::onReceiveSpinResult::reelPosData::" + this.slotSpinData.reelPosData);
        // utils.log("BaseGameController::onReceiveSpinResult::winlineData::" + this.slotSpinData.winlineData[0]);
        // utils.log("BaseGameController::onReceiveSpinResult::progressJackpotWinType::" + this.slotSpinData.progressJackpotWinType);
        // utils.log("BaseGameController::onReceiveSpinResult::progressJackpotWinAmount::" + this.slotSpinData.progressJackpotWinAmount);
        // utils.log("onReceiveSpinResult::==========================================");
        this.gameMode = data.roundId;
        this.betView.onReceiveResult();
        this.mainView.onReceiveSpinResult(data);
        var symbolResult = [];
        for (var i = 0; i < data.symbolResult.length; i++) {
            var arr = data.symbolResult[i];
            for (var j = 0; j < arr.length; j++) {
                symbolResult.push(arr[j]);
            }
        }

        // for (var i = 0; i < symbolResult.length; i++) {
        //     utils.log("symbolResult::" + symbolResult[i]);
        // }
        // utils.log("onReceiveSpinResult::==========================================");
        this.slotMachineView.onReceiveSpinResult(symbolResult, data.reelPosData);
        if (data.freeSpinLeft > -1) {
            var retrigger = this.checkRetrigger();
            if (retrigger != true) {
                this.mainView.onReceiveFreeSpinResult(data.freeSpinLeft, data.multiplier);
            }
        }
    },


    onReceiveChangeMode: function (data) {
        //utils.log("onReceiveChangeMode::");
        this.gameMode = data.mode;
        this.slotSpinData.freeSpinLeft = data.freespinNumber;
        this.slotSpinData.freespinMultiplier = data.freespinMultiplier;
        this.isChangeGameMode = true;
        this.isFirstFreeSpinAfterChangeMode = true;
        // utils.log("onReceiveChangeMode::gameMode::" + this.gameMode);
        // utils.log("onReceiveChangeMode::freeSpinLeft::" + this.slotSpinData.freeSpinLeft);
        //utils.log("onReceiveChangeMode::freespinMultiplier::" + this.slotSpinData.freespinMultiplier);
    },

    onReceiveJackpotData(data){
        this.mainView.onReceiveJackpotData(data);
    },
    onReceivePlayerUpdate: function (type, credit) {
        this.credit = credit;
        if (type == 0) {
            this.mainView.onReceivePlayerUpdate(credit);
        }
    },
    onReceiveFreeSpinInfo: function (data) {
        var gameAction = data.selectionType;
        var val = data.selectionNum;
        if (gameAction == 0) {
            this.slotSpinData.freeSpinLeft = val;
            this.mainView.onReceiveBonusResult(false, val);
        }
        else if (gameAction == 1) {
            this.slotSpinData.freeSpinMultiplier = val;
            this.mainView.onReceiveBonusResult(true, val);
        }
    },
    onReceiveJackpotInfo:function(data){
        this.mainView.onReceiveJackpotInfo(data);
    },
    onReceiveMainJackpotData: function (data) {
        // constants.STORED_SERVER_DATA.GRAND_VAL = arr[0];
        // constants.STORED_SERVER_DATA.MAJOR_VAL = arr[1];
        // constants.STORED_SERVER_DATA.MINOR_VAL = arr[2];
        this.mainView.onReceiveMainJackpotData(data);
    },

    /////////////////////////////////////////////SERVER_DATA_END////////////////////////////////////////////////////////////



    /////////////////////////////////////////////REQUEST_DATA_START////////////////////////////////////////////////////////////
    requestJackpotResult:function(val){
        this.slotDataManager.onRequestJackpotInfo(val);
    },  
    requestBonusResult: function (val) {
        if (this.isSimulation == true) {
            this.simulator.onRequestBonusResult();
        }
        else {
            this.slotDataManager.onRequestFreeInfo(val);
        }
    },

    onRequestSpinResult: function (payline, betPerLine, multiplier) {
        if (this.isSimulation == true) {
            this.simulator.onRequestSpinResult();
        }
        else {
            this.slotDataManager.onRequestSpinResult(payline, betPerLine, multiplier);
        }
    },

    /////////////////////////////////////////////REQUEST_DATA_END////////////////////////////////////////////////////////////
    onReelSpinComplete: function (id) {
    },

    onSpinComplete: function () {
        var state = this.spinFsm.applyTransition(config.SPINSTATE_TRANS_CONSTANTS.SPINTRANS_SPIN_TO_RESULT);
        this.updateSpinFsm(state);
    },

    updateSpinFsm: function (state) {
        if (this.spinFsm.getCurState() == config.SPINSTATE_CONSTANTS.SPINSTATE_INIT) {

        }
        else if (this.spinFsm.getCurState() == config.SPINSTATE_CONSTANTS.SPINSTATE_IDLE) {
            this.onIdleState();
        }
        else if (this.spinFsm.getCurState() == config.SPINSTATE_CONSTANTS.SPINSTATE_SPIN) {
            this.onSpinState();
        }
        else if (this.spinFsm.getCurState() == config.SPINSTATE_CONSTANTS.SPINSTATE_RESULT) {
            this.onResultState();
        }
    },

    updateGameFsm: function (state) {
        //utils.log("updateGameFsm::" + this.gameFsm.getCurState());
        if (this.gameFsm.getCurState() == config.GAMESTATE_CONSTANTS.GAMESTATE_INIT) {

        }
        else if (this.gameFsm.getCurState() == config.GAMESTATE_CONSTANTS.GAMESTATE_NORMAL) {
            this.onNormalSpinState();
        }
        else if (this.gameFsm.getCurState() == config.GAMESTATE_CONSTANTS.GAMESTATE_BONUS) {
            this.onBonusGameState();
        }
        else if (this.gameFsm.getCurState() == config.GAMESTATE_CONSTANTS.GAMESTATE_FREESPIN) {
            this.onFreeSpinState();
        }
    },

    reset: function () {
        this.slotSpinData = null;
        this.audioController.stopAllSfx();
        this.mainView.reset();
        if (this.progressJackpotView != null) {
            this.progressJackpotView.reset();
        }
    },

    checkRetrigger: function () {
        var scatterCount = 0;
        for (var i = 0; i < this.slotSpinData.symbolResult.length; i++) {
            var arr = this.slotSpinData.symbolResult[i];
            for (var j = 0; j < arr.length; j++) {
                if (arr[j] == config.SYMBOLCODE.SYMBOL_SCATTER) {
                    scatterCount++;
                };
            }
        }
        if (scatterCount > 2) {
            return true;
        }
        return false;
    },

    onClickBonusGameB: function () {
        var state = this.gameFsm.applyTransition(config.GAMESTATE_TRANS_CONSTANTS.GAMETRANS_NORMAL_TO_BONUS);
        this.updateGameFsm(state);
    },

    onClickFreeSpinPopUpContinueB: function () {
        //utils.log("gc::onClickFreeSpinPopUpContinueB");
        this.gameFsm.applyTransition(config.GAMESTATE_TRANS_CONSTANTS.GAMETRANS_NORMAL_TO_FREESPIN);
        var state = this.gameFsm.getCurState();
        this.updateGameFsm(state);
    },

    onBonusGameEnd: function () {
        //utils.log("gc::onBonusGameEnd");
        this.gameFsm.applyTransition(config.GAMESTATE_TRANS_CONSTANTS.GAMETRANS_BONUS_TO_FREESPIN);
        var state = this.gameFsm.getCurState();
        this.updateGameFsm(state);
    },

    onFreeSpinEnd: function () {
        this.gameFsm.applyTransition(config.GAMESTATE_TRANS_CONSTANTS.GAMETRANS_FREESPIN_TO_NORMAL);
        var state = this.gameFsm.getCurState();
        this.updateGameFsm(state);
    },

    onClickRetriggerContinueB: function () {
        if (this.spinFsm.getCurState() == config.SPINSTATE_CONSTANTS.SPINSTATE_RESULT) {
            this.spinFsm.applyTransition(config.SPINSTATE_TRANS_CONSTANTS.SPINTRANS_RESULT_TO_IDLE);
            var state = this.gameFsm.getCurState();
            this.updateSpinFsm(state);
        }
        this.spinFsm.applyTransition(config.SPINSTATE_TRANS_CONSTANTS.SPINTRANS_IDLE_TO_SPIN);
        var state2 = this.gameFsm.getCurState();
        this.updateSpinFsm(state2);
    },

    onClickStopSpin: function () {
        if (this.slotSpinData != null) {
            this.slotMachineView.onClickStopSpin();
        }
    },

    onClickSpin: function () {
        if (this.checkBet() == true) {
            if (this.gameFsm.getCurState() == config.GAMESTATE_CONSTANTS.GAMESTATE_NORMAL) {
                if (this.spinFsm.getCurState() == config.SPINSTATE_CONSTANTS.SPINSTATE_RESULT) {
                    this.spinFsm.applyTransition(config.SPINSTATE_TRANS_CONSTANTS.SPINTRANS_RESULT_TO_IDLE);
                    var state = this.spinFsm.getCurState();
                    this.updateSpinFsm(state);
                }
                this.spinFsm.applyTransition(config.SPINSTATE_TRANS_CONSTANTS.SPINTRANS_IDLE_TO_SPIN);
                var state2 = this.spinFsm.getCurState();
                this.updateSpinFsm(state2);
            }
            else if (this.gameFsm.getCurState() == config.GAMESTATE_CONSTANTS.GAMESTATE_FREESPIN) {
                if (this.spinFsm.getCurState() == config.SPINSTATE_CONSTANTS.SPINSTATE_IDLE) {
                    this.spinFsm.applyTransition(config.SPINSTATE_TRANS_CONSTANTS.SPINTRANS_IDLE_TO_SPIN);
                    var state = this.spinFsm.getCurState();
                    this.updateSpinFsm(state);
                }
                else if (this.spinFsm.getCurState() == config.SPINSTATE_CONSTANTS.SPINSTATE_RESULT) {
                    this.spinFsm.applyTransition(config.SPINSTATE_TRANS_CONSTANTS.SPINTRANS_RESULT_TO_IDLE);
                    var state = this.spinFsm.getCurState();
                    this.updateSpinFsm(state);
                }
            }
        }
        else {
            this.mainView.showPopUp("", constants.constants.ERR_CLIENT_INSF_COIN_MESSAGE, false);
        }
    },

    onClickAutoSpinStop: function () {
        this.isAutoSpinMode = false;
        //this.autoSpinValue = 0;
    },

    onClickPaylinePlus: function () {
        this.payline++;
        if (this.payline > config.SLOTDETAILS.MAX_PAYLINE) {
            this.payline = config.SLOTDETAILS.MAX_PAYLINE;
        }
        if (this.checkBet() == true) {
            this.slotMachineView.reset();
            if (this.paylineView != null) {
                this.paylineView.onClickPaylines(this.payline);
            }
            this.betView.updatePaylineValue(this.payline);
            this.mainView.onChangedBetValue(this.payline, this.getBetPerLineValue(), this.getTotalBetValue());
        }
        else {
            this.payline--;
            if (this.payline < 0) {
                this.payline = 0;
            }
            this.mainView.showPopUp("", constants.constants.ERR_CLIENT_INSF_COIN_MESSAGE, false);
        }
    },

    onClickPaylineMinus: function () {
       // utils.log("onClickPaylineMinus");
        this.payline--;
        if (this.payline < 1) {

            this.payline = 1;
        }
        if (this.checkBet() == true) {
            this.slotMachineView.reset();
            if (this.paylineView != null) {
                this.paylineView.onClickPaylines(this.payline);
            }
            this.betView.updatePaylineValue(this.payline);
            this.mainView.onChangedBetValue(this.payline, this.getBetPerLineValue(), this.getTotalBetValue());
        }
        else {
            this.mainView.showPopUp("", constants.constants.ERR_CLIENT_INSF_COIN_MESSAGE, false);
        }
    },

    onClickBetPlus: function () {
        this.betIndex++;
        var maxBetIndex = this.betPerLineValueArr.length - 1;
        if (this.betIndex > (this.betPerLineValueArr.length - 1)) {
            this.betIndex = this.betPerLineValueArr.length - 1;
        }
        if (this.checkBet() == true) {
            this.slotMachineView.reset();
            if (this.paylineView != null) {
                this.paylineView.hideAllPaylines();
            }
            this.betView.updateBetValue(this.getBetPerLineValue(), this.betIndex, maxBetIndex);
            this.mainView.onChangedBetValue(this.payline, this.getBetPerLineValue(), this.getTotalBetValue());
        }
        else {
            this.betIndex--;
            if (this.betIndex < 0) {
                this.betIndex = 0;
            }
            this.mainView.showPopUp("", constants.constants.ERR_CLIENT_INSF_COIN_MESSAGE, false);
        }
    },

    onClickBetMinus: function () {
        //utils.log("onClickBetMinus");
        this.betIndex--;
        var maxBetIndex = this.betPerLineValueArr.length - 1;
        if (this.betIndex < 0) {

            this.betIndex = 0;
        }
        if (this.checkBet() == true) {
            this.slotMachineView.reset();
            if (this.paylineView != null) {
                this.paylineView.hideAllPaylines();
            }
            this.betView.updateBetValue(this.getBetPerLineValue(), this.betIndex, maxBetIndex);
            this.mainView.onChangedBetValue(this.payline, this.getBetPerLineValue(), this.getTotalBetValue());
        }
        else {
            this.mainView.showPopUp("", constants.constants.ERR_CLIENT_INSF_COIN_MESSAGE, false);
        }
    },

    onExitApp: function () {
        this.loadingView.show();
        this.audioController.stopAllSound();
        if (this.isSimulation == false) {
            this.slotDataManager.cleanUp();
        }
        cc.game.end();
    },

    onExitGameToLogin: function () {
        this.loadingView.show();
        this.audioController.stopAllSound();
        this.simulator.onExitGameToLobby();
        cc.director.loadScene(constants.constants.loginScene);
    },

    onExitGameToLobby: function () {
        this.loadingView.show();
        this.audioController.stopAllSound();
        this.simulator.onExitGameToLobby();
        if (this.isSimulation == false) {
            this.slotDataManager.cleanUp();
        }
        cc.director.loadScene(constants.constants.lobbyScene);
    },

    onConnectWsFail() {
        this.reset();
        this.popUpView.show("Error", "Fail Connect Server!", false, true, false, "", "");
        //this.popUpView.show("Error", "Fail Connect Server!", false, true, false, this.popUpView.actionType_BackToLogin, this.popUpView.actionType_ExitApp);
    },

    onVerifyFail() {
        this.reset();
        this.popUpView.show("Error", "Verification failed", true, true, false, this.popUpView.actionType_BackToLogin, this.popUpView.actionType_ExitApp);
    },

    onDisconnect() {
        this.reset();
        this.popUpView.show("Error", "You have been disconnected", false, true, false, "", "");
        //this.popUpView.show("Error", "You have been disconnected", true, true, false, this.popUpView.actionType_BackToLogin, this.popUpView.actionType_ExitApp);
    },



    checkBet: function () {
        var betValue = this.getTotalBetValue();
        if (betValue > this.credit) {
            return false;
        }
        return true;
    },

    getBetPerLineValue: function () {
        return this.betPerLineValueArr[this.betIndex];
    },

    getTotalBetValue: function () {
        return this.betPerLineValueArr[this.betIndex] * this.payline;
    },

    updateAutoSpinValue(val) {
        this.autoSpinValue = val;
    },

    getRandomInt: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    },
});
