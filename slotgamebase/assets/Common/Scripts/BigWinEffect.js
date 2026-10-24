var accounting = require('Accounting');
var config = require('MyBaseConfig');
cc.Class({
    extends: cc.Component,

    properties: {
        controller:cc.Node,
        winAmtLoopTime:[cc.Float],

        jackpotTypeSprite:[cc.SpriteFrame],
        jackpotTypeObj:cc.Sprite,

        loopTime:0,
        amount:0,
        text:cc.Label,
        jpText:cc.Label,
        winValueCallBack:null,
        tweenWinValue:0,
        button:cc.Node,
        jpButton:cc.Node,

        timerCount:0,
        isStart:false,

        audioManager:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        // var eventHandler = new cc.Component.EventHandler();
        // eventHandler.target = this.node; 
        // eventHandler.component = "BigWinEffect";
        // eventHandler.handler = "disableBigWinEffect";
        // this.button.getComponent(cc.Button).clickEvents.push(eventHandler);
        if(this.button!=null)
        this.button.on('click', this.disableBigWinEffect, this);
        if(this.jpButton!=null)
        this.jpButton.on('click', this.disableBigWinEffect, this);
        if(this.controller!=null)
        this.controller = this.controller.getComponent(config.SCRIPT.GAMECONTROLLER);

        if(this.button!=null)
        this.button.active = false;
        if(this.jpButton!=null)
        this.jpButton.active = false;
        //this.audioController = this.audioController.getComponent(this.audioControllerStr);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        
    },
    onKeyDown: function (event) {
        //console.log(event.keyCode);
        // switch (event.keyCode) {
        //    case 32: //Space
        //    this.testjackpot();
        //    break;
        // }
    },
    update (dt) {

    },
    testjackpot(){
        this.isStart = true;
        if(this.audioManager!=null)
        this.audioManager.playSymbolSoundSfx(this.audioManager.bigWinClip,false);
        //amount = 2500;
        this.node.stopAllActions();
        this.node.active = true;
        this.amount = data[1];
        this.loopTime = 200;
    
        this.button.active = false;
        this.startTweenWinValue(this.amount);
        this.node.getComponent(cc.Animation).play("BigWin_JackpotStart");

        this.node.runAction(
            cc.sequence(
                cc.callFunc(this.playPopUpSfx, this),
                cc.delayTime(0.5),
                cc.callFunc(this.playBigWinSfx, this),
            )
        );
    },
    startBigWin(){
        this.startBigWinEffect(1000);
    },
    startJackpotEffect(data){
        this.isStart = true;
        if(this.audioManager!=null)
        this.audioManager.playSymbolSoundSfx(this.audioManager.bigWinClip,false);
        //amount = 2500;
        let typeJP = parseInt(data[0])-1;
        // console.log("Jackpot Type = " +typeJP);
        this.jackpotTypeObj.spriteFrame = this.jackpotTypeSprite[typeJP];
        this.node.stopAllActions();
        this.node.active = true;
        this.amount = data[1];
        this.loopTime = 200;
        if(this.button!=null)
        this.button.active = false;
        if(this.jpButton!=null)
        this.jpButton.active = false;
        this.startTweenWinValue(this.amount);
        this.node.getComponent(cc.Animation).play("BigWin_JackpotStart");

        this.node.runAction(
            cc.sequence(
                cc.callFunc(this.playPopUpSfx, this),
                cc.delayTime(0.5),
                cc.callFunc(this.playBigWinSfx, this),
            )
        );

        return 2;
    },
    startBigWinEffect(amount){
        this.isStart = true;
        if(this.audioManager!=null)
        this.audioManager.playSymbolSoundSfx(this.audioManager.bigWinClip,false);
        //amount = 2500;
        this.node.stopAllActions();
        this.node.active = true;
        this.amount = amount;
        this.loopTime = 200;
        if(this.button!=null)
        this.button.active = false;
        if(this.jpButton!=null)
        this.jpButton.active = false;
        this.startTweenWinValue(this.amount);
        this.node.getComponent(cc.Animation).play("BigWin_Start");

        this.node.runAction(
            cc.sequence(
                cc.callFunc(this.playPopUpSfx, this),
                cc.delayTime(0.5),
                cc.callFunc(this.playBigWinSfx, this),
            )
        );

        return 2;
    },
    startMegaWinEffect(amount){
        this.isStart = true;
        if(this.audioManager!=null)
        this.audioManager.playSymbolSoundSfx(this.audioManager.bigWinClip,false);
        //amount = 5000;
        this.node.stopAllActions();
        this.node.active = true;
        this.amount = amount;
        this.loopTime = 400;
        if(this.button!=null)
        this.button.active = false;
        if(this.jpButton!=null)
        this.jpButton.active = false;
        this.startTweenWinValue(this.amount);
        this.node.getComponent(cc.Animation).play("BigWin_Start");
        //this.audioController.playBigWin();
        this.node.runAction(
            cc.sequence(
                cc.delayTime(3),
                cc.callFunc(this.playMegaWinAnimation, this),
            )
        );

        this.node.runAction(
            cc.sequence(
                cc.callFunc(this.playPopUpSfx, this),
                cc.delayTime(0.5),
                cc.callFunc(this.playBigWinSfx, this),
            )
        );

        return 4;
    },
    playPopUpSfx(){
        // this.audioController.playPopUp();
    },
    playBigWinSfx(){
        // this.audioController.playBigWin();
    },
    playMegaWinAnimation(){
        this.node.getComponent(cc.Animation).play("BigWin_MegaStart");
    },
    disableBigWinEffect(){
        this.isStart = false;
        this.timerCount = 0;
        this.node.active = false;
        if(this.audioManager!=null)
        this.audioManager.stopAllSfx();

        if(this.controller!=null)
        this.controller.resultPresentation();
    },
    getDelayTime(){
        return this.loopTime/10;
    },
    testAnimation(){
        this.node.getComponent(cc.Animation).play("BigWin_Start");
        this.startBigWinEffect(1000);
    },
    
    startTweenWinValue: function (end) {
        this.unschedule(this.winValueCallBack);
        this.winValueCallBack = null;

        this.tweenWinValue = 0;
        var addValue = 0;
        var tempTimeCount = this.loopTime;
        addValue = end / tempTimeCount;
        addValue = Math.floor(addValue);
        if (addValue == 0) {
            addValue = 1;
        }

        //console.log("startNormalTweenWinValue :: "+tempTimeCount +" / " +addValue +" / " + end);
        this.winValueCallBack = function () {
            if (this.tweenWinValue >= end) {
                var temp = accounting.formatNumber(end, 0, ",");
                this.text.string = temp;
                this.jpText.string = temp;
                this.unschedule(this.winValueCallBack);
                this.winValueCallBack = null;
                this.button.active = true;
                this.jpButton.active = true;
                // this.audioController.stopBigWin();
            }
            else {
                this.tweenWinValue += addValue;
                
                var temp = accounting.formatNumber(this.tweenWinValue, 0, ",");
                //console.log("startNormalTweenWinValue :: "+this.tweenWinValue +" / " +temp );
                this.text.string = temp;
                this.jpText.string = temp;
            }
        }
        this.schedule(this.winValueCallBack, 0.01);
    },

    update (dt) {
        
        if(this.isStart){
            this.timerCount += dt;

            if(this.timerCount >= 40){
                this.timerCount = 0;
                this.disableBigWinEffect();
            }
        }
    },
});
