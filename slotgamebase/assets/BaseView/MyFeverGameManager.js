var config = require('MyBaseConfig');
var accounting = require('Accounting');
cc.Class({
    extends: cc.Component,

    properties: {
        controller: cc.Node,
        mainNode: cc.Node,
        testingLabel: cc.Label,
        startingAnim: cc.Node,
        symbolPattern: [cc.Integer],
        numberColumn: 5,
        numberRow: 3,
        symbolTwoDArr: [],
        maxMultiplier: 22,
        curMultiplier: 0,

        randomSymbolList: [cc.String],
        parentReelManager: cc.Node,
        feverReelManager: [],

        countSymbolSpin: 0,
        maxSymbolSpin: 0,
        feverSymbol: "f1",
        lightningSymbol: "l1",
        betSize: 3000,
        haveUpdate: 0,

        totalCount: 3,
        countRemainNode: [cc.Node],
        activeCountNode: [cc.Node],
        currCount: 0,

        //animation
        expNode: cc.Node,
        expNode2:cc.Node,
        finalTotalWinNode: cc.Node,
        finalTotalWinText: cc.Label,
        finalTotalWin: 0,

        particleDestination: cc.Node,
        particleParent: cc.Node,
        particleNode: cc.Node,

        result: cc.Node,
        resultLabel: cc.Label,

        audioManager: cc.Node,
        singleAddSfx: {
            type: cc.AudioClip,
            default: null,
        },
        spinCountSfx: {
            type: cc.AudioClip,
            default: null,
        },
        reelSpinSfx: {
            type: cc.AudioClip,
            default: null,
        },
        flameSfx: {
            type: cc.AudioClip,
            default: null,
        },
        upTotalWinSfx: {
            default: [],
            type: cc.AudioClip,
        },
        finalPayoutSfx: {
            type: cc.AudioClip,
            default: null,
        },
        transSfx: {
            type: cc.AudioClip,
            default: null,
        },
        lightSfx: {
            type: cc.AudioClip,
            default: null,
        },
        countTotalWinSfx: 0,

        gameStarted: false,
        extraMultiplier: 0,
        extraCount: 0,
        isLightningRound: false,
        enableLightningMode: false,
        lightningModeEnter: cc.Node,
        lightningSmallMainNode:cc.Node,
        lightningSmallNode:[cc.Node],
        lightningCollectNode:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.audioManager = this.audioManager.getComponent(config.SCRIPT.AUDIOMANAGER);
        // this.updateTwoDArray();
        // var childView = [];
        // for (let j = 0; j < this.parentReelManager.childrenCount; j++) {
        //     childView.push(this.parentReelManager.children[j].getComponentInChildren("MyFeverGameReelManager"));
        // }
        // this.feverReelManager = childView;

        // this.openFeverGame(null);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },
    openFeverGame() {
        this.mainNode.active = true;
        this.updateTwoDArray();
        var childView = [];
        this.gameStarted = true;
        for (let j = 0; j < this.parentReelManager.childrenCount; j++) {
            childView.push(this.parentReelManager.children[j].getComponentInChildren("MyFeverGameReelManager"));
        }
        this.feverReelManager = childView;

        if (this.audioManager != null)
            this.audioManager.playBGM(4);


        for (let i = 0; i < this.feverReelManager.length; i++) {
            this.feverReelManager[i].randomAllRunAnim(this);

            if (this.symbolPattern[i] > 0)
                this.feverReelManager[i].setResultSymbol(this.symbolPattern[i] * this.betSize);
        }

        for (let i = 0; i < this.countRemainNode.length; i++) {
            this.activeCountNode[i].active = true;
            this.countRemainNode[i].active = false;
        }
        this.countRemainNode[this.countRemainNode.length - 1].active = true;
        this.lightningSmallMainNode.active = false;

        for(let i =0;i<this.lightningSmallNode.length;i++){
            this.lightningSmallNode[i].active = false;
        }

        this.currCount = this.totalCount;
        this.extraMultiplier = 0;
        this.enableLightningMode = false;
        this.finalTotalWinNode.active = false;
        this.finalTotalWin = 0;
        this.finalTotalWinText.string = "0";
        this.result.active = false;
        this.resultLabel.string = "";

        this.startingAnim.active = true;
        this.node.runAction(cc.sequence(
            cc.delayTime(1),
            cc.callFunc(function () {
                // console.log("di");
                this.startingAnim.active = false;
            }, this),
            cc.delayTime(1),
            cc.callFunc(function () {
                // console.log("spin fever");
                this.spinFeverGame()
            }, this),
        ));
    },
    onReceiveFeverInfo(data, spinData) {
        if (this.gameStarted) {
            return;
        }
        console.log(data);
        if(data.state == 0){
            this.betSize = spinData.lineNum * spinData.betValue;
            this.symbolPattern = [];
            for (let i = 0; i < spinData.fullReelData.length; i++) {
                let rowData = spinData.fullReelData[i];
                for (let j = 0; j < rowData.length; j++) {
                    if (rowData[j] == "f1") {
                        this.symbolPattern.push(1);
                    } else if (rowData[j] == "f2") {
                        this.symbolPattern.push(2);
                    } else if (rowData[j] == "f3") {
                        this.symbolPattern.push(3);
                    } else {
                        this.symbolPattern.push(-1);
                    }
                }
            }
            this.maxMultiplier = data.totalPayout / this.betSize;
        }
        else if(data.state == 1){
            this.betSize = data.betSize;
            this.symbolPattern = [];
            for (let i = 0; i < data.restoreData.length; i++) {
                let rowData = data.restoreData[i];
                if (rowData == "f1") {
                    this.symbolPattern.push(1);
                } else if (rowData == "f2") {
                    this.symbolPattern.push(2);
                } else if (rowData == "f3") {
                    this.symbolPattern.push(3);
                } else {
                    this.symbolPattern.push(-1);
                }
            }
            this.maxMultiplier = data.totalPayout / this.betSize;
            this.openFeverGame();
        } else if(data.state == 2){
            this.betSize = data.betSize;
            // console.log( data.restoreData);
            let currPattern = data.restoreData[data.restoreData.length-1];
            // console.log(currPattern);
            this.symbolPattern = [];
            for(let i =2;i<currPattern.length;i++){
                this.symbolPattern.push(parseInt(currPattern[i]));
            }   
            // this.symbolPattern = data.restoreData;
            this.maxMultiplier = data.totalPayout / this.betSize;
            console.log(this.maxMultiplier +" / " +data.totalPayout+" / "+this.betSize); 
            this.openFeverGame();
        } 
        console.log(this.symbolPattern);
    },
    spinFeverGame() {
        if (this.currCount <= 0) {
            console.log("Finish FeverGame");
            this.showFinalResult();
            return;
        }
        //9,14,20,27,35,44,54
        let invalid = true;
        let _currMulti = 0;
        // do{
        let rMultiplier = Math.floor(Math.random() * 3);
        //console.log("Random Multiplier: "+rMultiplier);
        rMultiplier = 1;
        let tryTime = 0;
        this.haveUpdate = 0;
        this.isLightningRound = false;

        let _currTotalWin =0;
        do {
            _currMulti = 0;
            let pMultiplier = Math.floor(Math.random() * this.symbolPattern.length);
            //  pMultiplier = 14;
            //  console.log("Random Position Multiplier: "+pMultiplier);
            if (this.symbolPattern[pMultiplier] <= 0) {
                this.updateTwoDArray();
                if (this.checkIsLink(pMultiplier)) {
                    rMultiplier -= 1;
                    let countNumberMulti = 0;
                    for (let i = 0; i < this.symbolPattern.length; i++) {
                        if (this.symbolPattern[i] >= 1) {
                            countNumberMulti+=1;
                            _currMulti += this.symbolPattern[i] + 1;
                        }
                    }

                    _currMulti += 1;
                    _currMulti += this.extraMultiplier;
                    let rand = Math.random();
                    // console.log(countNumberMulti + " / " +this.extraMultiplier);
                    if (countNumberMulti == 7 && this.extraMultiplier == 0) {
                        _currMulti += 3;
                        if (_currMulti <= this.maxMultiplier) {
                            this.extraMultiplier = 3;
                            this.extraCount = 2;
                            _currTotalWin = this.updateAllMultiplier(pMultiplier);
                            _currTotalWin += 3;
                            this.isLightningRound = true;
                            this.haveUpdate = 1;
                        } else {
                            break;
                        }
                    }
                    else if (this.currCount <= 1) {
                        if (_currMulti <= this.maxMultiplier) {
                            _currTotalWin = this.updateAllMultiplier(pMultiplier);
                            this.haveUpdate = 1;
                        } else {
                            break;
                        }
                    }
                    else if (this.currCount > 1 && rand >= 0.3) {
                        if (_currMulti <= this.maxMultiplier) {
                            _currTotalWin = this.updateAllMultiplier(pMultiplier);
                            this.haveUpdate = 1;
                        } else {
                            break;
                        }
                    }
                    else {
                        break;
                    }
                }
            } else {
                tryTime++;
                if (tryTime > 50) {
                    console.log("Fail to get more that 10 time");
                    rMultiplier -= 1;
                    invalid = true;
                }
            }
        } while (rMultiplier > 0);
        //    if(_currMulti > this.maxMultiplier){
        //         invalid = false;
        //    }
        //
        // }while(!invalid);
        // console.log(_currMulti + " / " + invalid);
        let count = 0;
        this.countSymbolSpin = 0;
        this.maxSymbolSpin = 0;
        for (let i = 0; i < this.feverReelManager.length; i++) {
            let timer = 2 + (count * 0.3);
            if (this.symbolPattern[i] < 0) {
                this.feverReelManager[i].startAnim();
                let _rand = Math.floor(Math.random() * this.randomSymbolList.length - 1);
                // console.log(_rand)
                if (_rand <= 0) {
                    _rand = 0;
                }
                this.feverReelManager[i].showResult(this.randomSymbolList[_rand], timer, false);
                count++;
            }
            else if (this.symbolPattern[i] == 1 && this.haveUpdate == 1 && this.isLightningRound == true) {
                this.feverReelManager[i].startAnim();
                this.feverReelManager[i].showResult(this.lightningSymbol, timer, true);
                count++;
            }
            else if (this.symbolPattern[i] == 1 && this.haveUpdate == 1) {
                this.feverReelManager[i].startAnim();
                this.feverReelManager[i].showResult(this.feverSymbol, timer, true);
                count++;
            }
        }
        this.currCount--;
        this.maxSymbolSpin = count;

        for (let z = 0; z < this.countRemainNode.length; z++) {
            this.countRemainNode[z].active = false;
        }
        if (this.currCount <= 0) {
            this.countRemainNode[0].active = false;
        } else {
            this.countRemainNode[this.currCount - 1].active = true;
        }
        // this.playSpinCountSfx();
        this.activeCountNode[this.currCount].active = false;


        //senddatatoserver
        let countWin = 0;
        let data = [];
        for (let i = 0; i < this.symbolPattern.length; i++) {
            if (this.symbolPattern[i] >= 1) {
                countWin += this.symbolPattern[i];
            }
        }
        // data.push(countWin*this.betSize);
        // data.push(this.symbolPattern);
        data = [_currTotalWin * this.betSize, this.betSize, this.symbolPattern.toString()]
        this.controller.onRequestFeverInfo(0, data);
    },

    done() {
        this.playReelSpinSfx();
        this.countSymbolSpin++;
        // console.log(this.maxSymbolSpin +" / "+this.countSymbolSpin +" / " +this.haveUpdate);
        let count = 0;
        if (this.maxSymbolSpin == this.countSymbolSpin && this.haveUpdate == 1 && this.isLightningRound) {
            // this.haveUpdate = 0;
            for (let i = 0; i < this.feverReelManager.length; i++) {
                if (this.symbolPattern[i] == 1) {
                    this.feverReelManager[i].startLightningWinAnim();
                }
            }

            for (let i = 0; i < this.feverReelManager.length; i++) {
                if (this.symbolPattern[i] > 0) {
                    let timer = 2 + (count * 0.4);
                    // console.log(timer);
                    this.feverReelManager[i].animationUpdateAmount(this.symbolPattern[i] * this.betSize, timer);
                    count++;
                }
            }

            let timer2 = 2 + (count * 0.4);
            this.node.runAction(cc.sequence(
                cc.delayTime(timer2),
                cc.callFunc(function () {
                    this.updateCount();
                }, this),
                cc.delayTime(1),
                cc.callFunc(function () {
                    this.spinFeverGame()
                }, this),

            ));
        }
        else if (this.maxSymbolSpin == this.countSymbolSpin && this.haveUpdate == 1) {
            // this.haveUpdate = 0;
            for (let i = 0; i < this.feverReelManager.length; i++) {
                if (this.symbolPattern[i] > 0) {
                    let timer = 1 + (count * 0.4);
                    // console.log(timer);
                    this.feverReelManager[i].animationUpdateAmount(this.symbolPattern[i] * this.betSize, timer);
                    count++;
                }
            }

            if (count == 7 && this.enableLightningMode == false) {
                this.enableLightningMode = true;
                let timer2 = 1 + (count * 0.4);
                this.node.runAction(cc.sequence(
                    cc.delayTime(timer2),
                    cc.callFunc(function () {
                        this.updateCount()
                    }, this),
                    cc.delayTime(1),
                    cc.callFunc(function () {
                        if (this.audioManager != null){
                            this.audioManager.stopBGM();
                            this.audioManager.playCustomSoundSfx(this.transSfx,false);
                        }
                        this.lightningModeEnter.active = true;
                        this.lightningSmallMainNode.active = true;
                    }, this),
                    cc.delayTime(3),
                    cc.callFunc(function () {
                        if (this.audioManager != null)
                        {
                            this.audioManager.stopAllSfx();
                            this.audioManager.playBGM(5);
                        }
                        this.lightningModeEnter.active = false;
                        this.spinFeverGame()
                    }, this),
                ));
            }
            else {
                let timer2 = 1 + (count * 0.4);
                this.node.runAction(cc.sequence(
                    cc.delayTime(timer2),
                    cc.callFunc(function () {
                        this.updateCount()
                    }, this),
                    cc.delayTime(1),
                    cc.callFunc(function () {
                        this.spinFeverGame()
                    }, this),

                ));
            }
        } else if (this.maxSymbolSpin == this.countSymbolSpin && this.haveUpdate == 0) {
            this.node.runAction(cc.sequence(
                cc.delayTime(1),
                cc.callFunc(function () {
                    this.spinFeverGame()
                }, this),

            ));
        }
    },
    updateCount() {
        if (this.haveUpdate == 1) {
            this.currCount = this.totalCount;

            for (let i = 0; i < this.activeCountNode.length; i++) {
                this.countRemainNode[i].active = false;
                this.activeCountNode[i].active = true;
            }
            this.countRemainNode[this.countRemainNode.length - 1].active = true;
            this.playSpinCountSfx();
        }

        this.haveUpdate = 0;
    },
    updateAllMultiplier(pMultiplier) {
        let countWinMulti = 0;
        for (let i = 0; i < this.symbolPattern.length; i++) {
            if (this.symbolPattern[i] >= 1) {
                this.symbolPattern[i] = this.symbolPattern[i] + 1;
                countWinMulti++;
            }
        }
        countWinMulti++;
        this.symbolPattern[pMultiplier] = 1;
        return countWinMulti;
    },
    updateTwoDArray() {
        let _arr = [];
        let count = 0;
        this.symbolTwoDArr = [];
        for (let i = 0; i < this.symbolPattern.length; i++) {
            count++;
            _arr.push(this.symbolPattern[i]);
            if (count == this.numberColumn) {
                count = 0;
                this.symbolTwoDArr.push(_arr);
                _arr = [];
            }
        }
        //console.log(this.symbolTwoDArr);
    },

    showFinalResult() { 
        let count = 0;
        let selected = -1;
        let countParticle = 0;
        for(let i=0;i<this.extraCount;i++){
            for (let i = 0; i < this.feverReelManager.length; i++) {
                if (this.symbolPattern[i] == 1 && selected != i){
                    selected = i;
                    let time = countParticle*1;
                    countParticle++;
                    this.feverReelManager[i].generateLightningShootParticle(time);
                    break;
                }else if (this.symbolPattern[i] == 2 && selected != i){
                    selected = i;
                    let time = countParticle*1;
                    countParticle++;
                    this.feverReelManager[i].generateLightningShootParticle(time);
                    break;
                }
            }
        }


        for (let i = 0; i < this.feverReelManager.length; i++) {
            if (this.symbolPattern[i] > 0) {
                let timer = 3 + (count * 0.95);
                // console.log(timer);
                this.feverReelManager[i].startFinalTotalWin(timer);
                count++;
            }
        }

        let timer2 = 4 + (count * 0.95);
        this.node.runAction(cc.sequence(
            cc.delayTime(timer2),
            cc.callFunc(function () {
                this.result.active = true;
                this.playFinalPayoutSfx();
                this.resultLabel.string = accounting.formatNumber(this.finalTotalWin, 0, ",");
            }, this),

        ));

        let data = [this.finalTotalWin, 0];
        this.controller.onRequestFeverInfo(1, data);
    },
    closeFeverGame() {
        this.gameStarted = false;
        this.result.active = false;
        this.mainNode.active = false;
        this.controller.backFromFeverSpecialEvent();
    },
    updateFinalTotalWin(value) {
        this.finalTotalWin += value;
        this.enableExploAnim();
        this.finalTotalWinNode.active = true;
        this.finalTotalWinText.node.stopAllActions();
        this.finalTotalWinNode.runAction(
            cc.sequence(
                cc.scaleTo(0.2, 0.9, 0.9),
                cc.callFunc(function () {
                    this.finalTotalWinText.string = accounting.formatNumber(this.finalTotalWin, 0, ",");
                }, this),
                cc.scaleTo(0.2, 0.77, 0.77),
            )
        );
        this.playUpTotalWinSfx(this.countTotalWinSfx);
        this.countTotalWinSfx++;
    },
    enableExploAnim() {
        this.expNode.stopAllActions();
        this.expNode.active = true;
        this.expNode.runAction(cc.sequence(
            cc.delayTime(0.43),
            cc.callFunc(function () {
                this.expNode.active = false;
            }, this),
        ));
    },
    enableExploAnim2() {
        this.expNode2.stopAllActions();
        this.expNode2.active = true;
        this.expNode2.runAction(cc.sequence(
            cc.delayTime(0.43),
            cc.callFunc(function () {
                this.expNode2.active = false;
            }, this),
        ));
    },
    updateLightningTotal(){
        for(let i=0;i<this.lightningSmallNode.length;i++){
            this.lightningSmallNode[i].active = false;
        }
        for(let i=0;i<this.extraCount;i++){
            this.lightningSmallNode[i].active = true;
        }
    },
    deductLightningTotal(){
        this.enableLightningCollectAnim();
        this.extraCount --;
        for(let i=0;i<this.lightningSmallNode.length;i++){
            this.lightningSmallNode[i].active = false;
        }
        for(let i=0;i<this.extraCount;i++){
            this.lightningSmallNode[i].active = true;
        }
    },    
    enableLightningCollectAnim(){
        if (this.audioManager != null)
            this.audioManager.playCustomSoundSfx(this.lightSfx, false);
        
        this.lightningCollectNode.active = false;
        this.lightningCollectNode.stopAllActions(); 
        this.lightningCollectNode.active = true;
        this.lightningCollectNode.runAction(cc.sequence(
            cc.delayTime(1),
            cc.callFunc(function(){
                this.lightningCollectNode.active = false;
            }, this),
        ));
    },  

    checkIsLink(pos) {
        let _countR = 0;
        let _countC = 0;
        let _pos = pos + 1;
        //this.symbolTwoDArr =[];
        //console.log(this.symbolTwoDArr);
        if (pos != 0) {
            for (let i = 1; i < _pos; i++) {
                _countC++;
                if (i == (this.numberRow * this.numberColumn) - 1) {
                    //_countC--;
                }
                else if (_countC == this.numberColumn) {
                    _countC = 0;
                    _countR++;
                }
            }
        }


        //console.log(pos +" / " +_countR +" / "+_countC);
        //checkLeft
        if (_countC > 0) {
            if (this.symbolTwoDArr[_countR][_countC - 1] > 0) {
                console.log("Is Left");
                return true;
            }
        }

        //checkRight
        if (_countC < this.numberColumn - 1) {
            if (this.symbolTwoDArr[_countR][_countC + 1] > 0) {
                console.log("Is Right");
                return true;
            }
        }

        //check Top
        if (_countR > 0) {
            //console.log(_countR - 1 + " / " + this.symbolTwoDArr[_countR - 1][_countC]);
            if (this.symbolTwoDArr[_countR - 1][_countC] > 0) {
                console.log("Is Top");
                return true;
            }
        }

        //check Down
        if (_countR < (this.numberRow - 1)) {
            if (this.symbolTwoDArr[_countR + 1][_countC] > 0) {
                console.log("Is Down");
                return true;
            }
        }

        return false;
    },
    onKeyDown: function (event) {
        // console.log(event.keyCode);
        switch (event.keyCode) {

            case 65: //Space
                this.enableExploAnim();
                break;

        }
    },

    update(dt) {
        // this.testingLabel.string ="";
        // for(let i=0;i<this.symbolPattern.length;i++){
        //     this.testingLabel.string = this.testingLabel.string +this.symbolPattern[i] +" , ";
        // }
    },



    ///CallSfx()

    playSingleAddSfx() {
        if (this.audioManager != null)
            this.audioManager.playCustomSoundSfx(this.singleAddSfx, false);
    },
    playSpinCountSfx() {
        if (this.audioManager != null)
            this.audioManager.playCustomSoundSfx(this.spinCountSfx, false);
    },
    playReelSpinSfx() {
        if (this.audioManager != null)
            this.audioManager.playCustomSoundSfx(this.reelSpinSfx, false);
    },
    playUpTotalWinSfx(i) {
        if (this.audioManager != null)
            this.audioManager.playCustomSoundSfx(this.upTotalWinSfx[i], false);
    },
    playFlameSfx() {
        if (this.audioManager != null)
            this.audioManager.playCustomSoundSfx(this.flameSfx, false);
    },
    playFinalPayoutSfx() {
        if (this.audioManager != null) {
            this.audioManager.stopBGM();
            this.audioManager.playCustomSoundSfx(this.finalPayoutSfx, false);
        }
    },
});
