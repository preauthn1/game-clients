
var config = require('BaseConfig');
var constants = require('DJSlotConstants');
var accounting = require('Accounting');
var utils = require('Utils');
cc.Class({
    extends: cc.Component,

    properties: {
        gameController: cc.Node,
        mainJackpotView: cc.Node,
        progressJackpotView: cc.Node,
        spriteController: cc.Node,
        audioController: cc.Node,
        menuView: cc.Node,
        slotSplashScreen: cc.Node,
        normalContent: cc.Node,
        freeSpinContent: cc.Node,
        freeSpinL: cc.RichText,
        multiplierL: cc.RichText,
        freeSpinWinL: cc.RichText,
        playerNameL: cc.Label,
        creditL: cc.Label,
        linesL: cc.Label,
        lineBetL: cc.Label,
        totalBetL: cc.Label,
        normalWinContent: cc.Node,
        bigWinContent: cc.Node,
        mainL: cc.Label,

        bonusTitle: cc.Node,
        bonusTitleA: cc.Animation,
        bonusGameView: cc.Node,


        nextStepBGo: cc.Node,
        nextStepB: cc.Button,

        freeSpinTitle: cc.Node,
        freeSpinTitleA: cc.Animation,


        fiveOfAKindTitle: cc.Node,

        freeSpinPopUpView: cc.Node,

        freeSpinSummaryPopUpView: cc.Node,

        retriggerView: cc.Node,

        popUpView: cc.Node,

        menuB: cc.Button,

        normalWinL: cc.RichText,
        bigWinL: cc.RichText,
        winValue: 0,
        tweenWinValue: 0,
        winValueCallBack: null,
        freeSpinWinValueCallBack: null,
        freeSpinTweenWinValue: 0,

        spinningFlag:false,
    },

    onLoad: function () {
        this.slotSplashScreen.active = true;
    },

    init: function () {
        //this.spriteController = this.spriteController.getComponent('ThreeWheelsSpriteController');
        this.spriteController = this.spriteController.getComponent(config.SCRIPT_PREFIX + 'SpriteController');
        this.popUpView = this.popUpView.getComponent(config.SCRIPT_PREFIX + 'PopUpView');
        this.audioController = this.audioController.getComponent(config.SCRIPT_PREFIX + 'AudioController');
        this.menuView = this.menuView.getComponent(config.SCRIPT_PREFIX + 'MenuView');

        this.gameController = this.gameController.getComponent(config.SCRIPT_PREFIX + 'GameController');

        if (this.bonusGameView != null) {
            this.bonusGameView = this.bonusGameView.getComponent(config.SCRIPT_PREFIX + 'BonusGameView');
        }
        if (this.freeSpinSummaryPopUpView != null) {
            this.freeSpinSummaryPopUpView = this.freeSpinSummaryPopUpView.getComponent(config.SCRIPT_PREFIX + 'FreeSpinSummaryPopUpView');
        }
        if (this.retriggerView != null) {
            this.retriggerView = this.retriggerView.getComponent(config.SCRIPT_PREFIX + 'RetriggerView');
        }

        if (this.freeSpinPopUpView != null) {
            this.freeSpinPopUpView = this.freeSpinPopUpView.getComponent(config.SCRIPT_PREFIX + 'FreeSpinPopUpView');
        }

        if (this.progressJackpotView != null) {
            this.progressJackpotView = this.progressJackpotView.getComponent(config.SCRIPT_PREFIX + 'ProgressiveJackpotView');
        }

        if (this.mainJackpotView != null) {
            this.mainJackpotView = this.mainJackpotView.getComponent(config.SCRIPT_PREFIX + 'MainJackpotView');
        }

        if (this.nextStepB != null) {
            var nextStepEventHandler = new cc.Component.EventHandler();
            nextStepEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
            nextStepEventHandler.component = config.SCRIPT_PREFIX + "MainView";
            nextStepEventHandler.handler = "onClickNextStepB";
            this.nextStepB.clickEvents.push(nextStepEventHandler);
        }

        var menuButtonEventHandler = new cc.Component.EventHandler();
        menuButtonEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        menuButtonEventHandler.component = config.SCRIPT_PREFIX + "MainView";
        menuButtonEventHandler.handler = "onClickMenuB";
        this.menuB.clickEvents.push(menuButtonEventHandler);

        if (this.progressJackpotView != null) {
            this.progressJackpotView.init();
        }
    },

    onReceiveSystemConnected: function (credit) {
        this.playerNameL.string = "test";
        var value = accounting.formatNumber(credit, 0, ",");
        this.creditL.string = config.SLOTDETAILS.DENOMINATION_PREFIX + value;
    },

    onReceiveStartGameData: function (data) {
        this.reset();
        var spinWin = 0;
        /*
        for (var i = 0; i < data.winlineData.length; i++) {
            var winLineData = data.winlineData[i];
            var winVal = winLineData[3];
            spinWin += winVal;
        };
        */
        this.freeSpinTweenWinValue = data.totalWin - data.preWinAmount + spinWin;
        utils.log("bmv::onReceiveStartGameData::1::totalWin::" + data.totalWin + "::preWinAmount::" + data.preWinAmount + "::spinWin::" + spinWin + "::freeSpinTweenWinValue::" + this.freeSpinTweenWinValue);
        this.slotSplashScreen.active = false;
        this.mainL.string = constants.constants.IDLEMESSAGE;
    },

    onReceiveSpinResult: function (data) {
    },

    onReceivePlayerUpdate: function (credit) {
        console.log("Player Update");
        this.credit = credit;
        var value = accounting.formatNumber(credit, 0, ",");
        this.creditL.string = config.SLOTDETAILS.DENOMINATION_PREFIX + value;
    },

    onReceiveFreeSpinResult: function (freeSpinLeft, multiplier) {
        // utils.log("bmv::onReceiveFreeSpinResult::freeSpinLeft::" + freeSpinLeft);
        // utils.log("bmv::onReceiveFreeSpinResult::multiplier::" + multiplier);
        if (this.freeSpinL != null) {
            this.freeSpinL.string = "<b>" + freeSpinLeft.toString() + "</b>";
        }
        if (this.multiplierL != null) {
            this.multiplierL.string = "<b>" + "x" + multiplier.toString() + "</b>";
        }
    },

    onReceiveBonusResult: function (isFreeSpin, val) {
        this.bonusGameView.onReceiveBonusResult(isFreeSpin, val);
        if (isFreeSpin == true) {
            if (this.freeSpinL != null) {
                this.freeSpinL.string = val.toString();
            }
        }
        else {
            if (this.multiplierL != null) {
                this.multiplierL.string = "x" + val;
            }
        }
    },
    onReceiveJackpotInfo:function(data){
        this.progressJackpotView.onReceiveJackpotInfo(data);
    },

    onReceiveMainJackpotData: function (arr) {
        this.mainJackpotView.onReceiveMainJackpotData(arr);
    },
    onReceiveJackpotData(data){
     
    },
    onBonusGameState: function (freeSpin, multiplier) {
        this.freeSpinTweenWinValue = 0;
        this.reset();
        this.bonusGameView.show(freeSpin, multiplier);
        this.bonusTitleA.stop();
        var str = "--";
        this.setRichTextString(this.freeSpinWinL, str);
    },

    onNormalSpinState: function () {
        this.freeSpinTweenWinValue = 0;
        this.reset();
        this.setGameObjectStatus(this.normalContent, true);
        this.setGameObjectStatus(this.freeSpinContent, false);
        this.setGameObjectInteractable(this.menuB, true);
    },

    onFreeSpinState: function (freeSpinLeft, multiplier, freeSpinWin, isChangeGameMode) {
        utils.log("bmv::onFreeSpinState::" + freeSpinWin);
        if (freeSpinWin < 0) {
            freeSpinWin = 0;
        }
        this.freeSpinTweenWinValue = freeSpinWin;
        if (this.bonusGameView != null) {
            this.bonusGameView.hide();
        }
        if (this.freeSpinL != null) {
            this.freeSpinL.string = "<b>" + freeSpinLeft.toString() + "</b>";
        }
        if (this.multiplierL != null) {
            this.multiplierL.string = "<b>" + "x" + multiplier.toString() + "</b>";
        }
        var freeSpinWinValue = accounting.formatNumber(freeSpinWin, 0, ",");
        var str = "<b>" + config.SLOTDETAILS.DENOMINATION_PREFIX + freeSpinWinValue.toString() + "</b>";
        this.setRichTextString(this.freeSpinWinL, str);

        this.setGameObjectStatus(this.normalContent, false);
        this.setGameObjectStatus(this.freeSpinContent, true);
        this.setGameObjectInteractable(this.menuB, false);
    },

    onSpinState: function (previousFreeSpinWinVal) {
        utils.log("bmv::onSpinState");
        this.onReceivePlayerUpdate(this.gameController.credit);
        this.showAndHideWinAmount();
        this.hideFiveOfAKindTitle();
        this.spinningFlag = true;
        //this.setGameObjectStatus(this.mainL.node, true);
        
        this.setGameObjectStatus(this.bigWinContent, false);
        this.setGameObjectInteractable(this.menuB, false);
        this.mainL.string = constants.constants.SPINMESSAGE;
        if (previousFreeSpinWinVal < 0) {
            previousFreeSpinWinVal = 0;
        }
        this.freeSpinTweenWinValue = previousFreeSpinWinVal;
        var temp = accounting.formatNumber(previousFreeSpinWinVal, 0, ",");
        var str = "<b>" + config.SLOTDETAILS.DENOMINATION_PREFIX + temp.toString() + "</b>";
        this.setRichTextString(this.freeSpinWinL, str);
        if (this.progressJackpotView != null) {
            this.progressJackpotView.hide();
            //this.progressJackpotView.show(progressJackpotWinType, progressJackpotWinAmount);
        }
    },
    showAndHideWinAmount(){
        var action = cc.sequence(
            cc.delayTime(1.5),
            cc.callFunc(this.hideWinAmount, this, {}),
        );
        this.tweenWinValue = this.winValue;
        this.normalWinContent.runAction(action);
    },
    hideWinAmount(){
        if(!this.spinningFlag)
        return;
        this.setGameObjectStatus(this.mainL.node, true);
        this.setGameObjectStatus(this.normalWinContent, false);
    },
    onResultState: function (winValue, isChangeGameMode, gameMode, freeSpinLeft, previousFreeSpinLeft, betAmount, freeSpinWin) {
        utils.log("bmv::onResultState");
        this.winValue = winValue;
        this.spinningFlag = false;
        this.normalWinContent.stopAllActions();

        var delayTime = 0;
        if (this.progressJackpotView != null && this.gameController.slotSpinData.progressJackpotData.length != null && this.gameController.slotSpinData.progressJackpotData.length>0) {
            this.gameController.slotMachineView.playJackpotAnimation();
            this.progressJackpotView.show(this.gameController.slotSpinData.progressJackpotData[0], this.gameController.slotSpinData.progressJackpotData[2]);
            delayTime = 3;
        }

        if (this.winValue > 0) {
            if (isChangeGameMode == true) {
                this.audioController.playSmallWin();
                this.setGameObjectStatus(this.mainL.node, false);
                this.setGameObjectStatus(this.normalWinContent, true);
                this.setGameObjectStatus(this.bigWinContent, false);
                this.startNormalTweenWinValue(winValue);
            }
            else {
                //var isFreeSpin = false;
                if (freeSpinLeft > 0) {
                    if (this.freeSpinL != null) {
                        this.freeSpinL.string = "<b>" + freeSpinLeft.toString() + "</b>";
                    }
                    var freeSpinWinValue = accounting.formatNumber(freeSpinWin, 0, ",");
                    var str = "<b>" + config.SLOTDETAILS.DENOMINATION_PREFIX + freeSpinWinValue.toString() + "</b>";
                    this.setRichTextString(this.freeSpinWinL, str);
                    this.setGameObjectInteractable(this.menuB, false);
                    //isFreeSpin = true;
                }
                else {
                    this.setGameObjectInteractable(this.menuB, true);
                }

                if(this.winValue >=  (this.totalBet * 20)){
                    
                }
                else if(this.winValue >=  this.totalBet * 10){

                }
                else {
                    
                    this.setGameObjectStatus(this.mainL.node, true);
                    //this.setGameObjectStatus(this.normalWinContent, true);
                    this.setGameObjectStatus(this.bigWinContent, false);
                    this.startNormalTweenWinValue(this.winValue);
                    
                    // this.node.runAction(
                    //     cc.callFunc(this.callWinEffect,this,{a:this.winValue})
                    // );
                }
            }
        }
        else {
            this.setGameObjectStatus(this.mainL.node, true);
            //this.normalWinL.string = "<b>0</b>";
            //this.setGameObjectStatus(this.normalWinContent, true);
            this.setGameObjectStatus(this.bigWinContent, false);
            this.setGameObjectInteractable(this.menuB, true);
            this.mainL.string = constants.constants.IDLEMESSAGE;
        }
    },
    

    showProgressiveJackpot: function (progressJackpotWinType, progressJackpotWinAmount) {
        this.progressJackpotView.show(progressJackpotWinType, progressJackpotWinAmount);
    },

    showProgressiveJackpotContent: function (target, data) {
        var progressJackpotWinType = data.a;
        var progressJackpotWinAmount = data.b;
    },

    hideProgressiveJackpotContent: function (target, data) {
        this.progressJackpotView.hide();
    },

    showFiveOfAKindTitle: function () {
        this.setGameObjectStatus(this.fiveOfAKindTitle, true);
    },

    hideFiveOfAKindTitle: function () {
        this.setGameObjectStatus(this.fiveOfAKindTitle, false);
    },

    startNormalTweenWinValue: function (end) {
        this.unschedule(this.winValueCallBack);
        this.winValueCallBack = null;

        this.tweenWinValue = 0;
        var addValue = 0;
        var tempTimeCount = config.SLOTDETAILS.TWEEN_TIME_DURATION * 100;
        addValue = end / tempTimeCount;
        addValue = Math.floor(addValue);
        if (addValue == 0) {
            addValue = 1;
        }

        //console.log("startNormalTweenWinValue :: "+tempTimeCount +" / " +addValue +" / " + end);
        this.winValueCallBack = function () {
            if (this.tweenWinValue >= end) {
                var temp = accounting.formatNumber(end, 0, ",");
                this.normalWinL.string = "<b>" + config.SLOTDETAILS.DENOMINATION_PREFIX + temp + "</b>";
                this.unschedule(this.winValueCallBack);
                this.winValueCallBack = null;
                this.onReceivePlayerUpdate(this.gameController.credit);
            }
            else {
                this.tweenWinValue += addValue;
                
                var temp = accounting.formatNumber(this.tweenWinValue, 0, ",");
                //console.log("startNormalTweenWinValue :: "+this.tweenWinValue +" / " +temp );
                this.normalWinL.string = "<b>" + config.SLOTDETAILS.DENOMINATION_PREFIX + temp + "</b>";
            }
        }
        this.schedule(this.winValueCallBack, 0.05);
    },

    startBigWinTweenWinValue: function (end) {
        this.unschedule(this.winValueCallBack);
        this.winValueCallBack = null;
        this.tweenWinValue = 0;
        var addValue = 0;
        var tempTimeCount = config.SLOTDETAILS.TWEEN_TIME_DURATION * 100;
        addValue = end / tempTimeCount;
        addValue = Math.floor(addValue);
        if (addValue == 0) {
            addValue = 1;
        }
        this.winValueCallBack = function () {
            if (this.tweenWinValue >= winValue) {
                var temp = accounting.formatNumber(end, 0, ",");
                this.bigWinL.string = "<b>" + config.SLOTDETAILS.DENOMINATION_PREFIX + temp + "</b>";
                this.unschedule(this.winValueCallBack);
                this.winValueCallBack = null;
                this.onReceivePlayerUpdate(this.gameController.credit);
            }
            else {
                this.tweenWinValue += addValue;
                var temp = accounting.formatNumber(this.tweenWinValue, 0, ",");
                this.bigWinL.string = "<b>" + config.SLOTDETAILS.DENOMINATION_PREFIX + temp + "</b>";
            }
        }
        this.schedule(this.winValueCallBack, 0.05);
    },

    startFreeSpinTweenWinValue: function (winValue) {
        this.unschedule(this.freeSpinWinValueCallBack);
                this.freeSpinWinValueCallBack = null;

        // utils.log("startFreeSpinTweenWinValue::freeSpinTweenWinValue::" + this.freeSpinTweenWinValue);
        // utils.log("startFreeSpinTweenWinValue::winValue::" + winValue);
        this.freeSpinWinValueCallBack = function () {
            if (this.freeSpinTweenWinValue >= winValue) {
                var temp = accounting.formatNumber(winValue, 0, ",");
                this.freeSpinWinL.string = "<b>" + config.SLOTDETAILS.DENOMINATION_PREFIX + temp + "</b>";
                this.unschedule(this.freeSpinWinValueCallBack);
                this.freeSpinWinValueCallBack = null;
                this.onReceivePlayerUpdate(this.gameController.credit);
            }
            else {
                this.freeSpinTweenWinValue++;
                var temp = accounting.formatNumber(this.freeSpinTweenWinValue, 0, ",");
                this.freeSpinWinL.string = "<b>" + config.SLOTDETAILS.DENOMINATION_PREFIX + temp + "</b>";
            }
        }
        this.schedule(this.freeSpinWinValueCallBack, 0.05);
    },

    onChangedBetValue: function (payline, betPerLine, totalBet) {
        this.linesL.string = payline;
        betPerLine = accounting.formatNumber(betPerLine, 0, ",");
        totalBet = accounting.formatNumber(totalBet, 0, ",");
        this.lineBetL.string = config.SLOTDETAILS.DENOMINATION_PREFIX + betPerLine;
        this.totalBetL.string = config.SLOTDETAILS.DENOMINATION_PREFIX + totalBet;
    },


    showBonusTitle: function () {
        this.bonusTitle.active = true;
        this.bonusTitleA.play();
    },

    showFreeSpinTitle: function () {
        if (this.freeSpinTitle != null) {
            this.freeSpinTitle.active = true;
        }
        if (this.freeSpinTitleA != null) {
            this.freeSpinTitleA.play();
        }
    },

    hideFreeSpinTitle: function () {
        if (this.freeSpinTitle != null) {
            this.freeSpinTitle.active = false;
        }
        if (this.freeSpinTitleA != null) {
            this.freeSpinTitleA.stop();
        }
    },

    onClickNextStepB: function () {
        this.nextStepBGo.active = false;
        this.gameController.onClickNextStepB();
    },

    /*
    onClickBonusGameB: function () {
        this.gameController.onClickBonusGameB();
    },
    */

    onBonusGameEnd: function () {
        this.gameController.onBonusGameEnd();
    },

    onClickNextStepFreeSpinGameB: function (freeSpinLeft, multiplier) {
        this.freeSpinPopUpView.show(freeSpinLeft, multiplier);
    },

    onClickNextStepShowFreeSpinSummary: function (preWinAmount, totalGameWin, totalWin) {
        this.freeSpinSummaryPopUpView.show(preWinAmount, totalGameWin, totalWin);
    },

    showRetrigger: function (freeSpin) {
        if (this.retriggerView != null) {
            this.retriggerView.show(freeSpin);
        }
    },

    onClickMenuB: function () {
        this.menuView.show();
    },

    showPopUp: function (title, content, forceExit) {
        this.popUpView.show(title, content, forceExit);
    },

    showNextStepB: function () {
        this.setGameObjectStatus(this.nextStepBGo, true);
        var action = new cc.repeatForever(
            new cc.sequence(
                cc.scaleTo(0.5, 1.2),
                cc.scaleTo(0.5, 1)));
        this.nextStepBGo.runAction(action);
    },

    hideNextStepB: function () {
        this.setGameObjectStatus(this.nextStepBGo, false);
        if (this.nextStepBGo != null) {
            this.nextStepBGo.stopAllActions();
        }
    },

    reset: function () {
        this.hideFiveOfAKindTitle();
        this.hideFreeSpinTitle();
        this.bigWinContent.getComponent(cc.Animation).stop();
        //this.setGameObjectStatus(this.mainL.node, true);
        this.setGameObjectStatus(this.normalWinContent, false);
        this.setGameObjectStatus(this.bigWinContent, false);
        this.tweenWinValue = 0;
        if (this.winValueCallBack != null) {
            this.unschedule(this.winValueCallBack);
            this.winValueCallBack = null;
        }
        if (this.freeSpinWinValueCallBack != null) {
            this.unschedule(this.freeSpinWinValueCallBack);
            this.freeSpinWinValueCallBack = null;
        }

        if (this.bonusGameView != null) {
            this.bonusGameView.hide();
        }
        if (this.retriggerView != null) {
            this.retriggerView.hide();
        }
        if (this.freeSpinSummaryPopUpView != null) {
            this.freeSpinSummaryPopUpView.hide();
        }
        if (this.freeSpinPopUpView != null) {
            this.freeSpinPopUpView.hide();
        }
        this.setGameObjectStatus(this.nextStepBGo, false);
        if (this.nextStepBGo != null) {
            this.nextStepBGo.stopAllActions();
        }

        this.setGameObjectStatus(this.bonusTitle, false);

        this.setGameObjectStatus(this.freeSpinTitle, false);

        this.node.stopAllActions();
    },

    setGameObjectStatus: function (gameObject, status) {
        if (gameObject != null) {
            gameObject.active = status;
        }
    },

    setGameObjectInteractable: function (gameObject, status) {
        if (gameObject != null) {
            gameObject.interactable = status;
        }
    },

    setRichTextString: function (gameObject, string) {
        if (gameObject != null) {
            gameObject.string = string;
        }
    },
});

