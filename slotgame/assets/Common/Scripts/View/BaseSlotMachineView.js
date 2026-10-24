var config = require('BaseConfig');
var utils = require('Utils');
var constants = require('DJSlotConstants');
cc.Class({
    extends: cc.Component,

    properties: {
        hasStickyReels: false,
        stickyReelsStatusArr: [],
        paylineView: cc.Node,
        YThreshold: 0,
        parent: cc.Node,
        mainView: cc.Node,
        gameController: cc.Node,
        spriteController: cc.Node,
        audioController: cc.Node,

        isSpinBlur: false,

        climaxSymbol:[cc.String],

        reelSpinComplete: [],
        reelArr: {
            default: [],
            type: [cc.Node]
        },
        reelWhiteArr: {
            default: [],
            type: [cc.Node]
        },
        climaxArr: {
            default: [],
            type: [cc.Node]
        },
        spinSymbolResult: {
            default: [],
            type: ['String']
        },

        stopSymbol:{
            default: [],
            type: ['String']
        },
        bigwinEffect:cc.Node,
        winEffect:cc.Node,
        tempData:"",
        countClimaxSymbol:[],
    },

    start: function () {
        for(let i=0;i<this.climaxSymbol.length;i++){
            this.countClimaxSymbol.push(0);
        }
    },

    init: function () {
        this.gameController = this.gameController.getComponent(config.SCRIPT_PREFIX + 'GameController');
        this.spriteController = this.spriteController.getComponent(config.SCRIPT_PREFIX + 'SpriteController');
        if (this.paylineView != null) {
            this.paylineView = this.paylineView.getComponent(config.SCRIPT_PREFIX + 'PaylineView');
        }
        this.audioController = this.audioController.getComponent(config.SCRIPT_PREFIX + 'AudioController');
        this.mainView = this.mainView.getComponent(config.SCRIPT_PREFIX + 'MainView');
        for (var i = 0; i < this.reelArr.length; i++) {
            this.reelArr[i] = this.reelArr[i].getComponent(config.SCRIPT_PREFIX + 'ReelView');
            this.reelArr[i].init();
        }
    },

    onReceiveStartGameData: function (data, reelPosData) {
        utils.log("bsmv1");
        this.spinSymbolResult = data.slice(0);
        if (this.hasStickyReels == true) {
            this.checkStickyReels(this.spinSymbolResult);
        }
        utils.log("bsmv2");
        var chunks = this.parseResultValue(data, config.REELDETAILS.NUM_REEL);
        for (var i = 0; i < this.reelArr.length; i++) {
            var temp = chunks[i];
            this.reelArr[i].onReceiveStartGameData(temp, reelPosData[i]);
        }
    },

    onSpinState: function () {
        this.reset();
        this.spin();
    },

    onReelSpinComplete: function (index) {
        for(var i = 0; i < this.climaxArr.length; i++)
        {
            this.climaxArr[i].active = false;
        }
        this.reelSpinComplete[index] = true;
        var check = true;
        for (var i = 0; i < this.reelSpinComplete.length; i++) {
            if (this.reelSpinComplete[i] == false) {
                check = false;
            }
        }
        if (check == true) {
            /*
            var totalScatter = this.checkClimax(index);
            if (totalScatter > 1) {
                this.climaxArr[index].active = true;
                delayTime = config.REELDETAILS.CLIMAX_PREPARE_TO_STOP_TIME;
                this.audioController.playScatter(index);
                this.audioController.playClimax();
            }
            */
            this.onAllReelsSpinComplete();
            
            var data = this.gameController.slotSpinData.symbolResult;
            var rowData = data.slice(0);
            for(let i=0;i<this.stopSymbol.length;i++){
                for(let r=0;r<rowData.length;r++){
                    var colData = rowData[r].slice(0);
                    if(colData[index] == this.stopSymbol[i]){
                        this.audioController.playStopSound(index);
                        this.reelArr[index].playStopAnimation(this.stopSymbol[j]);
                        break;
                    }
                }
            }
        }
        else {    
            var data = this.gameController.slotSpinData.symbolResult;
            var rowData = data.slice(0);
            for(let i=0;i<this.stopSymbol.length;i++){
                for(let r=0;r<rowData.length;r++){
                    var colData = rowData[r].slice(0);
                    if(colData[index] == this.stopSymbol[i]){
                        this.audioController.playStopSound(index);
                        this.reelArr[index].playStopAnimation(this.stopSymbol[i]);
                        break;
                    }
                }
            }
            // for(let j=0;j < this.stopSymbol.length;j++){     
            //     for(let i =0 ;i < reelResult.length;i++){
            //         console.log(this.stopSymbol[j] +" / "+ reelResult[i]);
            //         if(this.stopSymbol[j] == reelResult[i]){
                        
            //         }        
            //     }
            // }   
            
            var isClimax = this.checkClimax(index);
            var delayTime = config.REELDETAILS.NORMAL_PREPARE_TO_STOP_TIME;
            if (isClimax) {
                this.climaxArr[index + 1].active = true;
                delayTime = config.REELDETAILS.CLIMAX_PREPARE_TO_STOP_TIME;
                this.audioController.playScatter(index);
                this.audioController.playClimax();
            }

            // var totalScatter = this.checkClimax(index);
            // var delayTime = config.REELDETAILS.NORMAL_PREPARE_TO_STOP_TIME;
            // if (totalScatter > 1) {
            //     this.climaxArr[index + 1].active = true;
            //     delayTime = config.REELDETAILS.CLIMAX_PREPARE_TO_STOP_TIME;
            //     this.audioController.playScatter(index);
            //     this.audioController.playClimax();
            // }
            var nextIndex = this.getNextReelSpinIndex(index, this.symbolResult);
            this.node.runAction(
                cc.sequence(
                    cc.delayTime(delayTime),
                    cc.callFunc(this.prepareToStop, this, { a: nextIndex }),
                )
            );
        }
    },

    getNextReelSpinIndex: function (index) {
        if (this.hasStickyReels == false) {
            var temp =  index;
            temp++;
            return temp;
        }
        else {
            var nextIndex = index++;
            for (var i = index; i < config.REELDETAILS.NUM_REEL; i++) {
                if (this.stickyReelsStatusArr[i] == false) {
                    return i;
                }
                else {
                    this.reelSpinComplete[index] = true;
                }
            }
        }
    },
    checkClimax:function(reelNum){
        var data = this.gameController.slotSpinData.symbolResult;
        var rowData = data.slice(0);
        //console.log(this.gameController.slotSpinData.symbolResult.length);
        var row = this.gameController.slotSpinData.symbolResult.length;
        var col = rowData[0].slice(0);
        col = col.length;
        for(let i=0;i<this.climaxSymbol.length;i++){
            for(let r=0;r<row;r++){
                var colData = rowData[r].slice(0);
                if(colData[reelNum] == this.climaxSymbol[i]){
                    this.countClimaxSymbol[i] += 1; 
                    break;
                }
            }
        }

        var isClimax = false;
        //console.log(this.countClimaxSymbol);
        for(let i=0;i<this.countClimaxSymbol.length;i++){
            if(this.countClimaxSymbol[i] >= 2){
                isClimax = true;
            }
        }

        return isClimax;
    },
    // checkClimax: function (id) {
    //     var data = this.gameController.slotSpinData;
    //     var chunks = this.parseResultValue(data.symbolResult, config.REELDETAILS.NUM_REEL);
    //     var totalScatter = this.getScatterCount(chunks[i]);
    //     return totalScatter;
    // },

    getScatterCount: function (val) {
        var totalScatter = 0;
        for (var i = 0; i < val.length; i++) {
            var reelArr = val[i];
            for (var j = 0; j < reelArr.length; j++) {
                if (reelArr[j] == config.SYMBOLCODE.SYMBOL_SCATTER) {
                    totalScatter++;
                }
            }
        }
        return totalScatter;
    },

    onClickStopSpin: function () {
        this.onAllReelsSpinComplete();
        this.node.runAction(
            cc.sequence(
                cc.callFunc(this.animateWhite, this, {}),
                cc.delayTime(1),
                cc.callFunc(this.stopAnimateWhite, this, {}),
            )
        );
    },

    animateWhite: function (target, data) {
        for (var i = 0; i < this.reelWhiteArr.length; i++) {
            this.reelWhiteArr[i].active = true;
            this.reelWhiteArr[i].getComponent(cc.Animation).play();
        }
    },

    stopAnimateWhite: function (target, data) {
        for (var i = 0; i < this.reelWhiteArr.length; i++) {
            this.reelWhiteArr[i].active = false;
            this.reelWhiteArr[i].getComponent(cc.Animation).stop();
        }
    },

    onReceiveSpinResult: function (data, reelPosData) {
        for(let i=0;i<this.climaxSymbol.length;i++){
            this.countClimaxSymbol[i] =0;
        }
        
        this.spinSymbolResult = data.slice(0);
        var chunks = this.parseResultValue(data, config.REELDETAILS.NUM_REEL);

        for (var i = 0; i < this.reelArr.length; i++) {
            var temp = chunks[i];
            this.reelArr[i].onReceiveSpinResult(temp, reelPosData[i]);
        }
        var delay = config.REELDETAILS.STARTING_PREPARE_TO_STOP_TIME;
        if (this.gameController.isTurboMode == true) {
            delay = 0;
        }
        this.node.runAction(
            cc.sequence(
                cc.delayTime(delay),
                cc.callFunc(this.prepareToStop, this, { a: 0 }),
            )
        );
    },

    onAllReelsSpinComplete: function () {
        if (this.hasStickyReels == true) {
            this.checkStickyReels(this.spinSymbolResult);
        }
        this.reset();
        this.node.runAction(
            cc.sequence(
                cc.delayTime(0.5),
                cc.callFunc(this.onNotifySpinComplete, this, {}),
            )
        );

        // for (var i = 0; i < this.reelArr.length; i++) {
        //     this.reelArr[i].prepareToStop();
        // }
    },

    onNotifySpinComplete: function (target, data) {
        this.gameController.onSpinComplete();
    },

    onResultState: function (data) {
        this.tempData = data;

        if (this.checkFiveOfAKind(data) == true) {
            this.node.runAction(
                cc.sequence(
                    cc.callFunc(this.showFiveOfAKind, this, {}),
                    cc.delayTime(config.REELDETAILS.ALL_PAYLINE_SHOW_DURATION),
                    cc.callFunc(this.hideFiveOfAKind, this, {}),
                    cc.callFunc(this.onResultState2, this, {}),
                    
                )
            );
        }
        else {
            
            // this.node.runAction(
            //     cc.callFunc(this.onResultState2, this, {})
            // );
            this.node.runAction(
                cc.sequence(
                    cc.delayTime(0),
                    cc.callFunc(this.onResultState2, this, {}),
                )
            );
        }
    },
    onResultState2(){
        // if (this.checkFiveOfAKind(data) == true) {
        //     this.node.runAction(
        //         cc.sequence(
        //             cc.callFunc(this.showFiveOfAKind, this, {}),
        //             cc.delayTime(config.REELDETAILS.ALL_PAYLINE_SHOW_DURATION),
        //             cc.callFunc(this.hideFiveOfAKind, this, {}),
        //             cc.callFunc(this.showAllWinningPaylines, this, { a: data }),
        //             cc.delayTime(config.REELDETAILS.ALL_PAYLINE_SHOW_DURATION),
        //             cc.callFunc(this.showSinglePaylineSequence, this, { a: data }),
        //         )
        //     );
        // }
        // else {
        //     this.node.runAction(
        //         cc.sequence(
        //             cc.callFunc(this.showAllWinningPaylines, this, { a: data }),
        //             cc.delayTime(config.REELDETAILS.ALL_PAYLINE_SHOW_DURATION),
        //             cc.callFunc(this.showSinglePaylineSequence, this, { a: data }),
        //         )
        //     );
        // }

        var betThreshold = this.mainView.betAmount * 10;
        var delayTime = 0;

        if(this.mainView.winValue >=  this.mainView.totalBet * 20){
            this.startMegaWinEffect();
        }
        else if(this.mainView.winValue >=  this.mainView.totalBet * 10){
            this.startBigWinEffect();
        }
        else{
            // this.node.runAction(
            //     cc.sequence(
            //         cc.callFunc(this.showAllWinningPaylines, this, { a: this.tempData }),
            //         cc.delayTime(config.REELDETAILS.ALL_PAYLINE_SHOW_DURATION),
            //         cc.callFunc(this.showSinglePaylineSequence, this, { a: this.tempData }),
            //     )
            // );
            this.startWinEffect();
        }
    },

    startWinEffect(){
        this.node.runAction(
           cc.sequence(
                cc.callFunc(this.showAllWinningPaylines, this),
                cc.delayTime(3),
                cc.callFunc(this.showSinglePaylineSequence, this),
            )
        );
    },
    startBigWinEffect(){
        this.node.runAction(
            cc.callFunc(this.callBigWinEffect, this, { a: true,v:this.mainView.winValue })
        );
    },
    startMegaWinEffect(){
        this.node.runAction(
            cc.callFunc(this.callMegaWinEffect, this, { a: true,v:this.mainView.winValue })
        );
    },
    callMegaWinEffect(target,data){
        this.audioController.playBigWin();
        //this.bigWinEffect.active = data.a;
        if(data.a){
            this.bigwinEffect.getComponent('BigWinEffect').startMegaWinEffect(data.v);
        }
    },
    callWinEffect(){
        this.audioController.playSmallWin();
        this.winEffect.active = true;
        this.winEffect.getComponent('WinEffect').startCoinEffect(this.mainView.winValue);
    },

    callBigWinEffect(target,data){
        this.audioController.playBigWin();
        //this.bigWinEffect.active = data.a;
        if(data.a){
            this.bigwinEffect.getComponent('BigWinEffect').startBigWinEffect(data.v);
        }
    },

    finishBigWinEffect(){
        this.startWinEffect();
    },

    checkScatter: function () {
        var totalScatter = 0;
        for (var i = 0; i < this.reelArr.length; i++) {
            var singleScatter = this.reelArr[i].checkScatter();
            totalScatter += singleScatter;
        }
        if (totalScatter > 2) {
            return true;
        }
        return false;
    },

    showFiveOfAKind: function (target, sourceData) {
        this.mainView.showFiveOfAKindTitle();
    },

    hideFiveOfAKind: function (target, sourceData) {
        this.mainView.hideFiveOfAKindTitle();
    },

    checkFiveOfAKind: function (data) {
        var winLineDataArr = data.winlineData;
        for (var i = 0; i < winLineDataArr.length; i++) {
            var winLineData = winLineDataArr[i];
            var symbolAmount = winLineData[2];
            if (symbolAmount == 5) {
                return true;
            }
        }
        return false;
    },



    checkStickyReels: function (data) {
        var as = this.gameController.slotSpinData;
        this.stickyReelsStatusArr = [];
        for (var i = 0; i < config.REELDETAILS.NUM_REEL; i++) {
            this.stickyReelsStatusArr.push(false);
        }
        if (this.gameController.slotSpinData.freeSpinLeft > 0) {
            for (var i = 0; i < this.reelArr.length; i++) {
                var check = this.checkSingleReelWild(i, data);
                this.stickyReelsStatusArr[i] = check;
            }
        }
    },

    checkSingleReelWild: function (index, data) {
        var chunks = this.parseResultValue(data, config.REELDETAILS.NUM_REEL);
        var temp = chunks[index].slice(0);


        var totalWild = this.getSingleWildCount(temp);
        if (totalWild != 0) {
            return true;
        }
        return false;
    },

    getSingleWildCount: function (chunks) {
        var totalWild = 0;
        if (chunks[1] == config.SYMBOLCODE.SYMBOL_WILD) {
            totalWild++;
        }
        return totalWild;
    },
    onAfterBigWin(){
        this.gameController.onAfterBigWin();
    },
    showAllWinningPaylines: function () {
        this.callWinEffect();
        this.node.runAction(
            cc.sequence(
                 cc.delayTime(2),
                 cc.callFunc(this.onAfterBigWin, this),
             )
         );
        //this.onResultEnd();
        var data = this.tempData;//sourceData.a;
        var winLineDataArr = data.winlineData;
        var winningPaylines = [];
        for (var i = 0; i < winLineDataArr.length; i++) {
            var winLineData = winLineDataArr[i];
            var payline = winLineData[0];
            winningPaylines.push(payline);
        }
        if (this.paylineView != null) {
            this.paylineView.showAllWinningPaylines(winningPaylines);
        }
        for (var i = 0; i < winLineDataArr.length; i++) {
            var winLineData = winLineDataArr[i];
            var payline = winLineData[0];
            var symbolType = winLineData[1];
            var symbolAmount = winLineData[2];
            var direction = winLineData[4];
            if (payline == 0) {
                this.playScatterAnimation(symbolType);
            }
            else {
                var coordinates = config.PAYLINEARR[payline-1];
                if (direction == constants.SERVERDATAKEYS.PAYLINE_START_FROM_LEFT) {
                    for (var j = 0; j < coordinates.length; j++) {
                        if (j + 1 < symbolAmount + 1) {
                            this.reelArr[j].playSymbolAnimation(coordinates[j], symbolType);
                        }
                    }
                }
                else {
                    var iterate = symbolAmount;
                    for (var j = coordinates.length - 1; j > -1; j--) {
                        if (iterate > 0) {
                            this.reelArr[j].playSymbolAnimation(coordinates[j], symbolType);
                            iterate--;
                        }
                    }
                }
            }
        };
    },

    showSinglePaylineSequence: function () {
        console.log("Show Single pay Line");
        var data = this.tempData;//sourceData.a;
        var winLineDataArr = data.winlineData;
        var endTime = data.winlineData.length * config.REELDETAILS.SINGLE_PAYLINE_SHOW_DURATION;
        var delay = config.REELDETAILS.SINGLE_PAYLINE_SHOW_DURATION;
        for (var i = 0; i < winLineDataArr.length; i++) {
            var winLineData = winLineDataArr[i];
            var payline = winLineData[0];
            var symbolType = winLineData[1];
            var symbolAmount = winLineData[2];
            var winVal = winLineData[3];
            var direction = winLineData[4];

            delay = delay + config.REELDETAILS.SINGLE_PAYLINE_SHOW_DURATION;
            var cycleRound = data.winlineData.length * config.REELDETAILS.SINGLE_PAYLINE_SHOW_DURATION;
            if (i == 0) {
                delay = 0;
            }
            var action = new cc.sequence(
                cc.delayTime(delay),
                cc.callFunc(this.setSinglePaylineAnimation, this, { a: payline, b: winVal, c: symbolAmount, d: symbolType, e: cycleRound, f: direction }),
            );
            this.node.runAction(action);
        };
        this.node.runAction(
            cc.sequence(
                cc.delayTime(endTime),
                cc.callFunc(this.onResultEnd, this, {}),
            )
        );
    },

    setSinglePaylineAnimation: function (target, data) {
        var paylineVal = data.a;
        var winVal = data.b;
        var symbolAmount = data.c;
        var symbolType = data.d;
        var cycleRound = data.e;
        var direction = data.f;
        var action = new cc.repeatForever(
            new cc.sequence(
                cc.callFunc(this.showSinglePayline, this, { a: paylineVal, b: winVal, c: symbolAmount, d: symbolType, e: direction }),
                cc.delayTime(cycleRound),
            ));
        this.node.runAction(action);
    },

    showSinglePayline: function (target, data) {
        var paylineVal = data.a;
        var winVal = data.b;
        var symbolAmount = data.c;
        var symbolType = data.d;
        var direction = data.e;
        if (paylineVal != 0) {
            if (this.paylineView != null) {
                this.paylineView.showSinglePayline(paylineVal, winVal, symbolAmount, direction);
            }
        }
        else {
            this.audioController.playLineToggle();
            //this.playScatterAnimation();
        }
    },

    playScatterAnimation: function (type) {
        //console.log("playScatterAnimation : ");
        for (var i = 0; i < this.reelArr.length; i++) {
            this.reelArr[i].playScatterAnimation(type);
        };
    },
    playSpecialSymbolAnimation(type){
        for (var i = 0; i < this.reelArr.length; i++) {
            this.reelArr[i].playSpecialSymbolAnimation(type,type);
        };
    },
    playJackpotAnimation(){
        for (var i = 0; i < this.reelArr.length; i++) {
            this.reelArr[i].playJackpotAnimation();
        };
    },
    onResultEnd: function (target, data) {
        this.gameController.onResultEnd();
    },


    parseResultValue: function (data, reelCount) {
        var chunkArr = [];

        for (var i = 0; i < reelCount; i++) {
            var tempChunk = [];
            for (var j = 0; j < data.length; j++) {
                if ((j % (reelCount)) == i) {
                    tempChunk.push(data[j]);
                }
            }
            chunkArr.push(tempChunk);
        }
        return chunkArr;
    },

    getIsSymbolCodeOnReel: function (str, index, reelCount) {
        var chunks = this.parseResultValue(this.spinSymbolResult, reelCount);
        var temp = chunks[index];
        for (var j = 0; j < temp.length; j++) {
            if (str == temp[j]) {
                return true;
            }
        }
        return false;
    },

    spin: function () {
        this.audioController.playReelSpin();
        for (var i = 0; i < this.reelArr.length; i++) {
            this.node.runAction(
                cc.sequence(
                    cc.delayTime(i * config.REELDETAILS.REEL_DELAY_TIME),
                    cc.callFunc(this.prepareToSpin, this, { a: i }),
                )
            );
        };
        var spinStartTotalTime = this.reelArr.length * config.REELDETAILS.REEL_DELAY_TIME;
        this.node.runAction(
            cc.sequence(
                cc.delayTime(spinStartTotalTime),
                cc.callFunc(this.allReelsStartedSpin, this, {}),
            )
        );
    },

    allReelsStartedSpin: function (target, data) {
        this.gameController.requestSpinResult();
    },

    prepareToSpin: function (target, data) {
        var index = data.a;
        if (this.hasStickyReels == true) {
            if (this.stickyReelsStatusArr[index] == false) {
                this.reelArr[index].prepareToSpin();
            }
        }
        else {
            this.reelArr[index].prepareToSpin();
        }
    },

    prepareToStop: function (target, data) {
        this.reelArr[data.a].prepareToStop();
    },

    reset: function () {
        this.node.stopAllActions();
        this.audioController.stopAllSfx();
        this.stopAnimateWhite();
        this.reelSpinComplete = [];
        for (var i = 0; i < config.REELDETAILS.NUM_REEL; i++) {
            this.reelSpinComplete.push(false);
        }
        for (var i = 0; i < this.climaxArr.length; i++) {
            this.climaxArr[i].active = false;
        }
        for (var i = 0; i < this.reelArr.length; i++) {
            this.reelArr[i].reset();
        }
    }
});
