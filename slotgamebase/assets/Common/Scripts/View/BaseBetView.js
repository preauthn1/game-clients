var config = require('BaseConfig');
var constants = require('DJSlotConstants');
var accounting = require('Accounting');
var utils = require('Utils');
cc.Class({
    extends: cc.Component,

    properties: {
        spinHoldView: cc.Node,
        gameController: cc.Node,
        audioController: cc.Node,
        minMaxT: cc.Toggle,
        minMaxTMax: cc.Sprite,
        minMaxTMin: cc.Sprite,
        spinB: cc.Button,
        spinBSprite: cc.Sprite,
        spinBNormalTex: {
            type: cc.Texture2D,
            default: null,
        },
        spinBTurboTex: {
            type: cc.Texture2D,
            default: null,
        },
        stopSpinB: cc.Button,
        betPanel: cc.Node,
        betPanelOnPos: cc.Node,
        betPanelOffPos: cc.Node,
        minMaxTSprite: cc.Sprite,
        minMaxTOnSprite: {
            type: cc.Texture2D,
            default: null,
        },
        minMaxTOffSprite: {
            type: cc.Texture2D,
            default: null,
        },
        turboModeT: cc.Toggle,
        paylinePlusB: cc.Button,
        paylineMinusB: cc.Button,
        betPerLinePlusB: cc.Button,
        betPerLineMinusB: cc.Button,
        paylineL: cc.Label,
        betPerLineL: cc.Label,

        autoSpinStatusB: cc.Button,
        autoSpinStopB: cc.Button,
        autoSpinValueL: cc.Label,
        autoSpinPanel: cc.Node,
        autoSpinPanelOnPos: cc.Node,
        autoSpinPanelOffPos: cc.Node,
        autoSpinPanelMinB: cc.Button,
        autoSpinPanelHideB: cc.Button,
        autoSpinPanelAutoSpinValueL: cc.Label,
        autoSpinS: cc.Slider,
        whiteI: cc.Node,
        autoSpinPercentValue:0,
    },

    init: function () {
        this.gameController = this.gameController.getComponent(config.SCRIPT_PREFIX + 'GameController');
        this.spinHoldView = this.spinHoldView.getComponent(config.SCRIPT_PREFIX + 'SpinHoldView');
        this.audioController = this.audioController.getComponent(config.SCRIPT_PREFIX + 'AudioController');
        
        var minMaxToggleEventHandler = new cc.Component.EventHandler();
        minMaxToggleEventHandler.target = this.node; 
        minMaxToggleEventHandler.component = config.SCRIPT_PREFIX + "BetView";
        minMaxToggleEventHandler.handler = "onClickMinMax";
        minMaxToggleEventHandler.customEventData = "";
        this.minMaxT.checkEvents.push(minMaxToggleEventHandler, minMaxToggleEventHandler.customEventData);

        var turboToggleEventHandler = new cc.Component.EventHandler();
        turboToggleEventHandler.target = this.node; 
        turboToggleEventHandler.component = config.SCRIPT_PREFIX + "BetView";
        turboToggleEventHandler.handler = "onClickTurbo";
        turboToggleEventHandler.customEventData = "";
        this.turboModeT.checkEvents.push(turboToggleEventHandler, turboToggleEventHandler.customEventData);

        var autoSpinButtonEventHandler = new cc.Component.EventHandler();
        autoSpinButtonEventHandler.target = this.node; 
        autoSpinButtonEventHandler.component = config.SCRIPT_PREFIX + "BetView";
        autoSpinButtonEventHandler.handler = "onClickAutoSpin";
        this.autoSpinStatusB.clickEvents.push(autoSpinButtonEventHandler);

        var autoSpinStopButtonEventHandler = new cc.Component.EventHandler();
        autoSpinStopButtonEventHandler.target = this.node; 
        autoSpinStopButtonEventHandler.component = config.SCRIPT_PREFIX + "BetView";
        autoSpinStopButtonEventHandler.handler = "onClickAutoSpinStop";
        this.autoSpinStopB.clickEvents.push(autoSpinStopButtonEventHandler);

        var autoSpinMinButtonEventHandler = new cc.Component.EventHandler();
        autoSpinMinButtonEventHandler.target = this.node; 
        autoSpinMinButtonEventHandler.component = config.SCRIPT_PREFIX + "BetView";
        autoSpinMinButtonEventHandler.handler = "onClickHideAutoSpinPanel";
        this.autoSpinPanelMinB.clickEvents.push(autoSpinMinButtonEventHandler);
        this.autoSpinPanelHideB.clickEvents.push(autoSpinMinButtonEventHandler);

        var stopSpinButtonEventHandler = new cc.Component.EventHandler();
        stopSpinButtonEventHandler.target = this.node; 
        stopSpinButtonEventHandler.component = config.SCRIPT_PREFIX + "BetView";
        stopSpinButtonEventHandler.handler = "onClickStopSpin";
        this.stopSpinB.clickEvents.push(stopSpinButtonEventHandler);

        var betPlusButtonEventHandler = new cc.Component.EventHandler();
        betPlusButtonEventHandler.target = this.node; 
        betPlusButtonEventHandler.component = config.SCRIPT_PREFIX + "BetView";
        betPlusButtonEventHandler.handler = "onClickBetPlus";
        this.betPerLinePlusB.clickEvents.push(betPlusButtonEventHandler);

        var betMinusButtonEventHandler = new cc.Component.EventHandler();
        betMinusButtonEventHandler.target = this.node; 
        betMinusButtonEventHandler.component = config.SCRIPT_PREFIX + "BetView";
        betMinusButtonEventHandler.handler = "onClickBetMinus";
        this.betPerLineMinusB.clickEvents.push(betMinusButtonEventHandler);
        
        if(this.paylinePlusB != null)
        {
        var paylinePlusButtonEventHandler = new cc.Component.EventHandler();
        paylinePlusButtonEventHandler.target = this.node; 
        paylinePlusButtonEventHandler.component = config.SCRIPT_PREFIX + "BetView";
        paylinePlusButtonEventHandler.handler = "onClickPaylinePlus";
        this.paylinePlusB.clickEvents.push(paylinePlusButtonEventHandler);
        }

        if(this.paylineMinusB != null)
        {
        var paylineMinusButtonEventHandler = new cc.Component.EventHandler();
        paylineMinusButtonEventHandler.target = this.node; 
        paylineMinusButtonEventHandler.component = config.SCRIPT_PREFIX + "BetView";
        paylineMinusButtonEventHandler.handler = "onClickPaylineMinus";
        this.paylineMinusB.clickEvents.push(paylineMinusButtonEventHandler);
        }
        
        this.spinHoldView.init();
    },

    onHoldSpinB: function () {
        this.autoSpinStatusB.node.active = true;
        this.spinB.node.active = false;
        this.updateSpriteFrame(this.minMaxTSprite, this.minMaxTOnSprite);
        this.showAutoSpinPanel();
        this.hideBetPanel();
    },

    setAutoSpinButtonStatus(isAutoSpinMode, autoSpinVal) {
        this.spinB.node.active = !isAutoSpinMode;
        this.autoSpinStopB.node.active = isAutoSpinMode;
        if (isAutoSpinMode == true) {
            if (autoSpinVal == 100) {
                this.autoSpinValueL.string = "";
            }
            else {
                this.autoSpinValueL.string = autoSpinVal.toString();
            }
        }
    },

    onReceiveResult: function () {
        this.stopSpinB.node.active = true;
    },

    onIdleState: function (isChangeGameMode, gameMode, isAutoSpinMode, autoSpinVal) {
        // utils.log("basebetview::onIdleState::isAutoSpinMode::" + isAutoSpinMode);
        this.setAutoSpinButtonStatus(isAutoSpinMode, autoSpinVal);
        this.hideBetPanel();
        this.hideAutoSpinPanel();

        if(isAutoSpinMode){
            if(this.gameController.autoSpinValue != 0)
            this.onClickAutoSpin();
            else{
                //this.gameController.updateAutoSpinValue(100);
                this.setAutoSpinButtonStatus(false, 100);
            }
        }
    },

    onSpinState: function (isChangeGameMode, gameMode, isAutoSpinMode, autoSpinVal) {
        this.stopSpinB.node.active = false;
        this.spinB.node.active = false;
        this.minMaxT.isChecked = false;
        this.hideBetPanel();
        this.minMaxT.interactable = false;
        this.hideAutoSpinPanel();
    },

    onResultState: function (isChangeGameMode, gameMode, isAutoSpinMode, autoSpinVal, freeSpinleft) {
        this.stopSpinB.node.active = false;
        if (isChangeGameMode == false) {
            if (freeSpinleft > 0) {
                this.setAutoSpinButtonStatus(false, autoSpinVal);
                this.minMaxT.interactable = false;
            }
            else {
                this.setAutoSpinButtonStatus(isAutoSpinMode, autoSpinVal);
                this.minMaxT.interactable = true;
            }
        }
        else {
            this.spinB.node.active = false;
            this.minMaxT.interactable = false;
            this.autoSpinStopB.node.active = false;
        }
    },


    onNormalSpinState: function (isChangeGameMode, gameMode, isAutoSpinMode, autoSpinVal) {

        this.stopSpinB.node.active = false;
        this.setAutoSpinButtonStatus(isAutoSpinMode, autoSpinVal);
        this.minMaxT.interactable = true;
    },

    onFreeSpinState: function (isChangeGameMode, gameMode, isAutoSpinMode, autoSpinVal) {
        this.stopSpinB.node.active = false;
        this.minMaxT.interactable = false;
    },

    onClickAutoSpin: function () {
        this.audioController.playApStart();
        var val = this.gameController.autoSpinValue;
        
        console.log(" onClickAutoSpin " +val );
        if (val != 100) {
            val--;
        }
        this.gameController.isAutoSpinMode = true;
        this.gameController.autoSpinValue = val;
        this.setAutoSpinButtonStatus(true, val);
        this.gameController.onClickSpin();
    },

    onClickAutoSpinStop: function () {
        this.audioController.playApStop();
        this.autoSpinStopB.node.active = false;
        this.gameController.onClickAutoSpinStop();
    },

    onClickSpin: function () {
        this.audioController.playSpinB();
        this.gameController.onClickSpin();
    },

    onClickStopSpin: function () {
        this.stopSpinB.node.active = false;
        this.gameController.onClickStopSpin();
    },

    onReceiveStartGameData: function (payline, betValue, betIndex, maxBetIndex, freeSpinLeft, isChangeGameMode, gameMode, isAutoSpinMode, autoSpinValue) {
    this.updatePaylineValue(payline);
        this.updateBetValue(betValue, betIndex, maxBetIndex);
        if (isChangeGameMode == false) {
            if (gameMode == constants.SERVERDATAKEYS.NORMALSPINMODE) {
                if (freeSpinLeft < 0) {
                    this.setAutoSpinButtonStatus(isAutoSpinMode, autoSpinValue);
                    this.minMaxT.interactable = true;
                }
                else {
                    this.minMaxT.interactable = false;
                }
            }
        }
    },

    onClickPaylinePlus: function (event) {
        this.gameController.onClickPaylinePlus();
        this.audioController.playButtonUp();
    },

    onClickPaylineMinus: function (event) {
        this.gameController.onClickPaylineMinus();
        this.audioController.playButtonDown();
    },

    onClickBetPlus: function (event) {
        this.gameController.onClickBetPlus();
        this.audioController.playButtonUp();
    },

    onClickBetMinus: function (event) {
        this.gameController.onClickBetMinus();
        this.audioController.playButtonDown();
    },

    onClickTurbo: function (event, customEventData) {
        this.audioController.playPanelMinMax();
        this.node.runAction(
            cc.sequence(
                cc.callFunc(this.animateWhite, this, {}),
                cc.delayTime(0.5),
                cc.callFunc(this.stopAnimateWhite, this, {}),
            )
        );
        if (this.turboModeT.isChecked == true) {
            this.updateSpriteFrame(this.spinBSprite, this.spinBTurboTex);
        }
        else {
            this.updateSpriteFrame(this.spinBSprite, this.spinBNormalTex);
        }
        this.gameController.isTurboMode = this.turboModeT.isChecked;
    },

    animateWhite: function (target, data) {
        this.whiteI.active = true;
        this.whiteI.getComponent(cc.Animation).play();
    },

    stopAnimateWhite: function (target, data) {
        this.whiteI.active = false;
        this.whiteI.getComponent(cc.Animation).stop();
    },

    onClickMinMax: function (event, customEventData) {
        this.audioController.playPanelMinMax();
        if (this.minMaxT.isChecked == true) {
            this.updateSpriteFrame(this.minMaxTSprite, this.minMaxTOnSprite);
            this.showBetPanel();
        }
        else {
            this.updateSpriteFrame(this.minMaxTSprite, this.minMaxTOffSprite);
            this.hideBetPanel();
        }
    },
    onClickHide(){
        this.audioController.playPanelMinMax();
        if (this.minMaxT.isChecked == true) {
            this.minMaxT.isChecked = false;
            this.updateSpriteFrame(this.minMaxTSprite, this.minMaxTOffSprite);
            this.hideBetPanel();
        }
        else {
            this.minMaxT.isChecked = true;
            this.updateSpriteFrame(this.minMaxTSprite, this.minMaxTOnSprite);
            this.showBetPanel();
        }
    },
    reset: function () {
        this.updateSpriteFrame(this.minMaxTSprite, this.minMaxTOffSprite);
    },

    updatePaylineValue: function (value) {
        this.paylineL.string = value;

        if (value == config.SLOTDETAILS.MAX_PAYLINE) {
            this.paylineMinusB.interactable = true;
            this.paylinePlusB.interactable = false;
        }
        else if (value == 1) {
            this.paylineMinusB.interactable = false;
            this.paylinePlusB.interactable = true;
        }
        else {
            this.paylineMinusB.interactable = true;
            this.paylinePlusB.interactable = true;
        }
    },

    updateBetValue: function (value, betIndex, maxBetIndex) {
        value = accounting.formatNumber(value, 2, ",");
        this.betPerLineL.string = config.SLOTDETAILS.DENOMINATION_PREFIX + value;


        if (betIndex == maxBetIndex) {
            this.betPerLineMinusB.interactable = true;
            this.betPerLinePlusB.interactable = false;
        }
        else if (betIndex == 0) {
            this.betPerLineMinusB.interactable = false;
            this.betPerLinePlusB.interactable = true;
        }
        else {
            this.betPerLineMinusB.interactable = true;
            this.betPerLinePlusB.interactable = true;
        }
    },

    updateSpriteFrame: function (sprite, texture) {
        if (!sprite || !texture) {
            return;
        }
        var frame = new cc.SpriteFrame(texture);
        sprite.spriteFrame = frame;
    },

    showBetPanel: function () {
        this.betPanel.runAction(
            cc.moveTo(1, cc.p(this.betPanelOnPos.position.x, this.betPanelOnPos.position.y)).easing(cc.easeElasticOut(1)));
    },

    hideBetPanel: function () {
        this.betPanel.runAction(
            cc.moveTo(1, cc.p(this.betPanelOffPos.position.x, this.betPanelOffPos.position.y)).easing(cc.easeElasticOut(1)));
    },

    showAutoSpinPanel: function () {
        console.log("Show Auto Spin Panel...");
        if(this.gameController.isAutoSpinMode){
            return;
        }

        // if(this.gameController.autoSpinValue == 0){
        //     this.gameController.updateAutoSpinValue(100);
        //     this.updateAutoSpinValue(1);
        // }
        if(this.autoSpinPercentValue!=0){
            this.updateAutoSpinValue(1);
            this.autoSpinS.progress = 1;
        }
        if(this.gameController.autoSpinValue == 0){
            this.updateAutoSpinValue(this.autoSpinS.progress);
        }
        
        this.autoSpinPanelHideB.node.active = true;
        this.autoSpinPanel.stopAllActions();
        this.autoSpinPanel.runAction(
            cc.moveTo(1, cc.p(this.autoSpinPanelOnPos.position.x, this.autoSpinPanelOnPos.position.y)).easing(cc.easeElasticOut(1)));
    },

    hideAutoSpinPanel: function () {
        console.log("Show hideAutoSpinPanel...");
        if(!this.autoSpinPanelHideB.node.active)
        return;
        
        this.autoSpinPanelHideB.node.active = false;
        this.autoSpinStatusB.node.active = false;
        this.autoSpinPanel.stopAllActions();
        this.autoSpinPanel.runAction(
            cc.moveTo(1, cc.p(1547, this.autoSpinPanelOffPos.position.y)).easing(cc.easeElasticOut(1)));
    },

    onClickHideAutoSpinPanel: function () {
        console.log("Show onClickHideAutoSpinPanel...");
        this.autoSpinPanelHideB.node.active = false;
        this.autoSpinStatusB.node.active = false;
        this.spinB.node.active = true;
        this.autoSpinPanel.stopAllActions();
        this.autoSpinPanel.runAction(
            cc.moveTo(1, cc.p(1547, this.autoSpinPanelOffPos.position.y)).easing(cc.easeElasticOut(1)));
    },

    updateAutoSpinValue(val) {
        this.autoSpinPercentValue = val;
        if (val < 0.01) {
            this.autoSpinS.progress = 0.01;
            this.gameController.updateAutoSpinValue(1);
            this.autoSpinPanelAutoSpinValueL.string = "1 SPINS";
            this.autoSpinValueL.string = "1";
            return;
        }
        val = val * 100;
        val = Math.round(val);
        
        this.gameController.updateAutoSpinValue(val);
        if (val != 100) {
            this.autoSpinPanelAutoSpinValueL.string = val + " SPINS";
            this.autoSpinValueL.string = val;
        }
        else {
            this.autoSpinPanelAutoSpinValueL.string = "TO FEATURE";
            this.autoSpinValueL.string = "";
        }
    },


    onSliderHEvent(sender, eventType) {
        this.updateAutoSpinValue(sender.progress);
    }
});
