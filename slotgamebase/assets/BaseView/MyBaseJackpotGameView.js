var config = require('MyBaseConfig');
var accounting = require('Accounting');
cc.Class({
    extends: cc.Component,

    properties: {
        controller: cc.Node,
        mainNode: cc.Node,
        audioManager: cc.Node,
        jpTotalAmt:0,
        jpText:cc.Label,       
        winValueCallBack:null,
        tweenWinValue:0,
        loopTime:0,
        gameStarted:false,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        if(this.audioManager!=null);
        this.audioManager = this.audioManager.getComponent(config.SCRIPT.AUDIOMANAGER);
        // this.updateTwoDArray();
        // var childView = [];
        // for (let j = 0; j < this.parentReelManager.childrenCount; j++) {
        //     childView.push(this.parentReelManager.children[j].getComponentInChildren("MyFeverGameReelManager"));
        // }
        // this.feverReelManager = childView;

        // this.openFeverGame(null);
        // cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },
    openJackpotGame() {
        console.log("Openn Jackpot Game");
        this.mainNode.active = true;
        this.jpText.string = "0"; 
        this.mainNode.getComponent(cc.Animation).play("BigWin_JackpotStart");
        console.log(this.jpTotalAmt);
        this.startTweenWinValue(this.jpTotalAmt);
        this.showFinalResult();
        if(this.audioManager!=null)
        this.audioManager.playSymbolSoundSfx(this.audioManager.bigWinClip,false);
    },
    onReceiveJackpotGameInfo(data) {
        if(this.gameStarted){
            return;
        }
        this.gameStarted = true;
        console.log(data);
        if(data.state == 0){// normal enter game
            this.jpTotalAmt = data.totalPayout;
        }
        else if(data.state == 1){//restore enter game
            this.jpTotalAmt = data.totalPayout;
            this.openJackpotGame();
        } else if(data.state == 2){//restore game
            let currPattern = data.restoreData[data.restoreData.length-1];
            this.jpTotalAmt = data.totalPayout;
            // console.log(currPattern);
            this.openJackpotGame();
        } 
    },
    saveDataToServer(){
        let data = [];
        // for (let i = 0; i < this.symbolPattern.length; i++) {
        //     if (this.symbolPattern[i] >= 1) {
        //         countWin += this.symbolPattern[i];
        //     }
        // }


        data = [0, 0, ""];

        this.controller.onRequestFeverInfo(0, data);
        // this.showFinalResult();
    },
    showFinalResult() { 
        //send data
        let data = [];
        data = [this.jpTotalAmt, 0, ""];
        this.controller.onRequestJackpotInfo(1, data); //finish game
    },
    closeGame() {
        // this.result.active = false;
        this.mainNode.active = false;
        this.controller.backFromFeverSpecialEvent();
        this.gameStarted = false;
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
                this.jpText.string = temp;
                this.unschedule(this.winValueCallBack);
                this.winValueCallBack = null;
            }
            else {
                this.tweenWinValue += addValue;
                
                var temp = accounting.formatNumber(this.tweenWinValue, 0, ",");
                this.jpText.string = temp;
            }
        }
        this.schedule(this.winValueCallBack, 0.01);
    },  
});
