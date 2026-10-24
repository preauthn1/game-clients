var config = require('MyBaseConfig');

cc.Class({
    extends: cc.Component,

    properties: {
        //reel setting
        instanceStopPattern: 0,
        reelSpeed: 10,
        timeBounceUp: 0.1,
        distanceBounceUp: 25,
        symbolAssignResult: 0,
        randomCode: {
            default: [],
            type: String,
        },
        //private 
        symbolsNode: {
            default: [],
            visible: false,
        },
        symbolsDefaulPos: {
            default: [],
            visible: false,
        },
        symbolsEndPoint: {
            default: 0,
            visible: false,
        },
        symbolsDiffPos: 0,
        //Flags
        isReceiveResult: {
            default: false,
            visible: false,
        },
        isSpin: {
            default: false,
            visible: false,
        },
        spinState: {
            default: 0,
            visible: false,
        },
        resultAnimation: {
            default: [],
            type: cc.String,
            //visable:false,
        },
        reelResult: {
            default: [],
            type: cc.String,
            //visable:false,
        },
        symbolResult: [cc.String],
        index: cc.Integer,


        maxReach: -247,
        symbolView: [cc.Node],
        reelSpinTime: 0.3,
        isClimax: false,
        climaxNode: cc.Node,
        blurNode: cc.Node,
        blurSingleNode:[cc.Node],
        reelManager: cc.Node,

        testing: [cc.String],
        testingCount: 0,

        randomSymbol: [cc.String],
        isInstant: false,
        audioManager: cc.Node,
        firstTime: 0,

        checkDesposeStatus:[cc.String],
        desposeAnimObj:{
            default:[],
            type:cc.Node,
        },
        desposeAnimTime:1,
    },

    // use this for initialization
    onLoad: function () {
        var childsNode = [];
        var childsPos = [];
        var checkPos = null;
        this.checkDesposeStatus = [0,0,0];

        var childView = [];
        for (let j = 0; j < this.node.childrenCount; j++) {
            childsNode.push(this.node.children[j]);
            childsPos.push(this.node.children[j].position);
            if (j == 1) {
                this.symbolsDiffPos = (this.node.children[0].position.y - this.node.children[j].position.y);
                this.symbolsEndPoint = this.node.children[0].position.y + this.symbolsDiffPos;
            }

            childView.push(this.node.children[j].getComponent(config.SCRIPT.SYMBOLVIEW));
        }
        this.symbolsNode = childsNode;
        this.symbolsDefaulPos = childsPos;

        this.symbolView = childView;


        if(this.blurSingleNode.length>0){
            for (let i = 0; i < this.blurSingleNode.length; i++) {
                this.blurSingleNode[i].active = false;
            }
        }
        this.symbolAssignResult = 0;
    },
    start() {
        // for(let j = 0;j<this.node.childrenCount-3;j++){
        //     var _view = this.node.children[j].getComponent(config.SCRIPT.SYMBOLVIEW);
        //     _view.setSymbol(this.testing[j]);
        // }
        // for(let i = 3;i<this.node.childrenCount;i++){
        //      var _view = this.node.children[i].getComponent(config.SCRIPT.SYMBOLVIEW);
        //      _view.setSymbol("s3");
        // }

        this.reelSpinTime = 0.2;
    },
    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        if (this.isSpin) {
            for (let i = 0; i < this.symbolsNode.length; i++) {
                var _symbol = this.symbolsNode[i];
                //Make Sure Correct spacing
                if (i > 0) {
                    _symbol.y = this.symbolsNode[i - 1].y + this.symbolsDiffPos;
                } else {
                    _symbol.y = _symbol.y - (dt * 100 * this.reelSpeed);
                }

                if (this.spinState == 1) {
                    if (_symbol.y <= this.symbolsDefaulPos[i].y) {
                        this.node.runAction(cc.sequence(
                            cc.moveTo(0.5, cc.v2(this.node.position.x, this.node.position.y - 1)),
                            cc.moveTo(0.5, cc.v2(this.node.position.x, this.node.position.y + 1)),
                        ));
                        this.spinState = 2;
                        _symbol.y = this.symbolsDefaulPos[i].y;
                        this.isSpin = false;
                    }
                } else {
                    if (_symbol.y < this.symbolsEndPoint) {
                        this.updateSymbolArr(_symbol);
                    }
                }
            }
            // if(this.spinState == 0){

            // }
            // else if(this.spinState == 1){
            //     for(let i=0;i<this.symbolsNode.length;i++){
            //         var _symbol = this.symbolsNode[i];
            //         //console.log()
            //         _symbol.y = _symbol.y - (dt*100*this.reelSpeed); 

            //         if(_symbol.y < this.symbolsEndPoint){
            //             this.updateSymbolArr(_symbol);
            //         }

            //         console.log(_symbol.y +"/" +this.symbolsDefaulPos[i].y);
            //         if(_symbol.y <= this.symbolsDefaulPos[i].y){
            //             this.node.runAction(cc.sequence(
            //                 cc.moveTo(0.1,cc.v2(this.node.position.x,this.node.position.y-1)),
            //                 cc.moveTo(0.1,cc.v2(this.node.position.x,this.node.position.y+1)),
            //             ));
            //             this.spinState = 2;
            //             _symbol.y = this.symbolsDefaulPos[i].y;
            //             this.isSpin = false;
            //         }
            //     }
            // }
        }
    },

    receiveResult(stopTime, isInstantStop) {
        // console.log("receiveResult : " +stopTime +" / " +isInstantStop);
        if(this.isInstant){
            if (this.instanceStopPattern == 1) {
                if (this.climaxNode != null)
                this.climaxNode.active = false;
                this.isReceiveResult = true;
                this.isClimax = false;
                this.node.stopAllActions();
                this.loopSpinAnimation();
                this.disableBlurAnim(true);
                return;
            }
        }

        if (!isInstantStop)
            this.isReceiveResult = true;
        else {
            if (this.climaxNode != null)
                this.climaxNode.active = false;
            
                this.node.stopAllActions();
                this.loopSpinAnimation();
        }
        // console.log("receiveResult2");
        if (this.isClimax) {
            this.enableClimax();
        }
        // console.log("receiveResult 1");
        this.node.runAction(cc.sequence(
            cc.delayTime(stopTime),
            cc.callFunc(this.disableClimax, this, {}),
        ));
    },
    disableClimax() {
        this.isClimax = false;
        this.isReceiveResult = true;
    },
    updateReelResult(reelResult) {
        this.symbolResult = reelResult;
    },
    startSpin() {
        // this.isSpin = true;
        // this.spinState = 0;
        // console.log("Start Spin !!!");
        
        this.resetDesposeAnim();
        this.node.stopAllActions();
        this.isDimAllSymbol(false);
        this.isReceiveResult = false;
        if(this.reelManager!=null)
        this.reelSpinTime = this.reelManager.defaultReelStopTime;
        this.isInstant = false;
        this.loopSpinAnimation();

        if (this.blurNode != null) {
            this.blurNode.active = true;
            for (let i = 0; i < this.symbolsNode.length; i++) {
                this.symbolsNode[i].active = false;
            }
        }
        if(this.blurSingleNode.length>0){
            for (let i = 0; i < this.blurSingleNode.length; i++) {
                this.blurSingleNode[i].active = true;
            }
        }

        // this.node.runAction(cc.sequence(
        //     cc.delayTime(5),
        //     cc.callFunc(this.receiveResult, this)
        // ));
    },
    instantStopReel(time) {
        this.reelSpinTime = time;
        this.isClimax = false;
        this.isInstant = true;
    },
    loopSpinAnimation() {
        // console.log(this.isReceiveResult +" / " +this.isClimax);
        if (this.isReceiveResult && !this.isClimax) {
            if (this.isInstant) {
                if (this.instanceStopPattern == 0) {
                    this.node.runAction(cc.sequence(
                        cc.moveTo(this.reelSpinTime, cc.v2(this.node.position.x, this.maxReach)),
                        cc.callFunc(this.finishSpinResult, this),
                        cc.callFunc(this.resetAllEffect, this),
                        cc.moveTo(this.timeBounceUp, cc.v2(this.node.position.x, this.node.position.y - this.distanceBounceUp)),
                        cc.moveTo(this.timeBounceUp, cc.v2(this.node.position.x, 0)),
                    ));
                } else {
                    this.node.runAction(cc.sequence(
                        cc.callFunc(this.finishSpinResult, this),
                        cc.callFunc(function(){
                            // this.node.setPosition(this.node.position.x, this.maxReach + this.distanceBounceUp);
                            this.node.setPosition(this.node.position.x, this.node.position.y - this.distanceBounceUp);
                        },this),
                        // cc.moveTo(0.2, cc.v2(this.node.position.x, 0)),
                        cc.callFunc(this.resetAllEffect, this),
                        // cc.moveTo(this.timeBounceUp, cc.v2(this.node.position.x, this.node.position.y - this.distanceBounceUp)),
                        cc.moveTo(this.timeBounceUp, cc.v2(this.node.position.x, 0)),
                    ));
                }
            } else {
                this.node.runAction(cc.sequence(
                    cc.moveTo(this.reelSpinTime, cc.v2(this.node.position.x, this.maxReach)),
                    cc.callFunc(this.finishSpinResult, this),
                    cc.callFunc(this.resetAllEffect, this),
                    cc.moveTo(this.timeBounceUp, cc.v2(this.node.position.x, this.node.position.y - this.distanceBounceUp)),
                    cc.moveTo(this.timeBounceUp, cc.v2(this.node.position.x, 0)),
                    // cc.callFunc(this.resetAllEffect, this),
                ));
            }
        } else {
            this.node.runAction(cc.sequence(
                cc.moveTo(this.reelSpinTime, cc.v2(this.node.position.x, this.maxReach)),
                cc.callFunc(this.reachTopSymbol, this),
            ));
        }
    },
    reachTopSymbol() {
        var childCount = this.node.childrenCount - 3;

        for (var i = 0; i < this.symbolResult.length; i++) {
            this.symbolView[i].setSpinningSymbol(this.symbolView[childCount].symbolCode);
            childCount++;
        }
        for (var i = 3; i < this.symbolView.length; i++) {
            if (this.isReceiveResult && !this.isClimax) {
                // console.log("1." +this.node.name +" / " +this.symbolResult[i-3]);
                // console.log(this.symbolView[i]);
                this.symbolView[i].setSpinningSymbol(this.symbolResult[i - 3]);
            } else {
                let s = this.randomSymbol[Math.floor(Math.random() * this.randomSymbol.length)];
                this.symbolView[i].setSpinningSymbol(s);
            }

        }

        this.node.setPosition(this.node.position.x, 0);
        this.loopSpinAnimation();
    },
    setRandomResult(num){
        for(let i=0;i<num;i++){
            let s = this.randomSymbol[Math.floor(Math.random() * this.randomSymbol.length)];
            this.symbolResult[i] = s;
        }
    },
    finishSpinResult() {
        var childCount = this.node.childrenCount - 3;
        for (var i = 0; i < 3; i++) {
            // console.log("2." +this.node.name +" / " +this.symbolResult[i]);
            this.symbolView[i].setSymbol(this.symbolResult[i]);
            childCount++;
        }
        for (var i = 3; i < 6; i++) {
            this.symbolView[i].setSymbol(this.randomSymbol[Math.floor(Math.random() * this.randomSymbol.length)]);
        }

        this.node.setPosition(this.node.position.x, 0);

        if (this.audioManager != null) {
            this.audioManager.stopAllSfx();
            this.audioManager.playCustomSoundSfx(this.audioManager.reelStopClip, false);
        }
    },
    instantUpdateReel() {
        for (var i = 0; i < this.resultAnimation.length; i++) {
            this.symbolView[i].setSymbol(this.symbolResult[i]);
        }
    },
    randomUpdateReel() {
        for (var i = 0; i < this.resultAnimation.length; i++) {
            this.symbolView[i].setSymbol(this.randomSymbol[Math.floor(Math.random() * this.randomSymbol.length)]);
        }
    },
    instantReelPosition(posY) {
        this.node.setPosition(this.node.position.x, posY);
    },
    resetAllEffect() {
        if (this.climaxNode != null)
            this.climaxNode.active = false;

        if(this.reelManager!=null){
            this.reelManager.checkStopAnimation(this);
            this.reelManager.stopReel();
        }

        if (this.blurNode != null) {
            for (let i = 0; i < this.symbolsNode.length; i++) {
                this.symbolsNode[i].active = true;
                this.symbolView[i].playAnimationFirstFrame();
            }
            this.blurNode.active = false;
        }

        this.disableBlurAnim(false);

        for(let i=0;i<this.desposeAnimObj.length;i++){
            this.desposeAnimObj[i].active = false;
        }

    },
    disableBlurAnim(isInstant){
        if (this.blurSingleNode.length > 0) {
            let count = 0;
            let delayTime = 0.2;
            if(isInstant){
                for (let i = this.blurSingleNode.length-1; i >=0 ; i--) {
                    this.blurSingleNode[i].stopAllActions();
                    this.blurSingleNode[i].active = false;
                }
            }
            else{
                for (let i = this.blurSingleNode.length-1; i >=0 ; i--) {
                    if(this.isInstant)
                    delayTime = 0;
    
                    let timer = count*0.1;
                    count++;
                    let _node = this.blurSingleNode[i];
                    this.blurSingleNode[i].runAction(cc.sequence(
                        cc.delayTime(timer),
                        cc.callFunc(this.disableNode, this, _node),
                    ));
                }
            }
        }
    },
    disableNode(target, data){
        // console.log("disable");
        data.active = false;
    },
    checkStopAnimation(symbol) {
        var checking = false;
        for (let i = 0; i < this.symbolResult.length; i++) {
            if (this.symbolResult[i] == symbol) {
                //do animation
                this.symbolView[i].playStopAnimation();
                checking = true;
            }
        }

        return checking;
    },
    cleanStopAnim(){
        for (let i = 0; i < this.symbolResult.length; i++) {
            this.symbolView[i].resetStopAnim();
        }
    },
    enableClimax() {
        if (this.climaxNode != null)
            this.climaxNode.active = true;

        this.reelManager.addReelClimax();

        if (this.audioManager != null)
            this.audioManager.playCustomSoundSfx(this.audioManager.climaxClip[0], false);
    },
    setReelManager(rm) {
        this.reelManager = rm;
    },
    playSpecialAnimation(i, isAnimate) {
        var num = i - 1;
        if (isAnimate) {
            this.symbolView[num].playSpecialAnimation();
        }
    },
    setSymbolAnimate(i, isAnimate) {
        var num = i - 1;
        if (isAnimate) {
            this.symbolView[num].playAnimation();
        }
    },
    setDesposeStatus(i) {
        var num = i - 1;
        this.checkDesposeStatus[num] = 1;
    },
    playDesposeAnimate() {
        this.node.stopAllActions();
        let deposeSymbol = [];
        let desposeNum = [];
        let desposeView = [];
        let num= 0;
        for (let i = 0; i < this.checkDesposeStatus.length; i++) {
            if (this.checkDesposeStatus[i] == 1) {
                deposeSymbol.push(this.symbolsNode[i]);
                desposeNum.push(i);
                desposeView.push(this.symbolView[i]);
                // this.symbolsNode[i].active = false;
                this.desposeAnimObj[i].active = true;
                let j=i;
                this.symbolsNode[j].runAction(cc.sequence(
                    cc.delayTime(this.desposeAnimTime),
                    cc.callFunc(function(){
                        for (let i = deposeSymbol.length-1; i>=0; i--) {
                            deposeSymbol[i].active = false;
                         }
                        this.desposeAnimObj[j].active = false;
                    },this),
                ));
            }
        }

         //perform restore array
         for (let i = deposeSymbol.length-1; i>=0; i--) {
            this.symbolsNode.splice(desposeNum[i],1);
            this.symbolView.splice(desposeNum[i],1);
         }
         for (let i =0;i<deposeSymbol.length;i++) {
            this.symbolsNode.push(deposeSymbol[i]);
            this.symbolView.push(desposeView[i]);
         }
         
        for (var i = 0; i < this.symbolResult.length; i++) {
            this.symbolView[i].setSymbol(this.symbolResult[i]);
        }
        //  console.log(this.symbolsNode);
        this.node.runAction(cc.sequence(
            cc.delayTime(1),
            cc.callFunc(this.playMoveAnimate,this),
        ));
    },

    playMoveAnimate(){
        for (let j = 0; j < this.symbolsNode.length; j++) {
            let pos = this.symbolsDefaulPos[j];
            if(this.symbolsNode[j].activeInHierarchy){
                this.symbolsNode[j].runAction(cc.sequence(
                    cc.delayTime(0),
                    cc.moveTo(0.3, cc.v2(pos.x, pos.y)),
                    // cc.callFunc(this.resetAllEffect, this),
                ));
            }
            else{
                this.symbolsNode[j].runAction(cc.sequence(
                    cc.delayTime(0),
                    cc.moveTo(0.01, cc.v2(pos.x, pos.y)),
                    // cc.callFunc(this.resetDesposeAnim, this),
                ));
                this.symbolsNode[j].position = pos;
            }
        }

        if (this.audioManager != null) {
            this.audioManager.playCustomSoundSfx(this.audioManager.desposeAnimDropClip, false);
        }
        for (let j = 0; j < this.checkDesposeStatus.length; j++) {
            this.checkDesposeStatus[j] = 0;
        }
        for(let i=0;i<this.desposeAnimObj.length;i++){
            this.desposeAnimObj[i].active = false;
        }
        // for (let j = 0; j < this.symbolsNode.length; j++) {
        //     this.symbolsNode[j].stopAllActions();
        //     this.symbolsNode[j].active = true;
        // }
        
    },
    resetDesposeAnim(){
        for (let j = 0; j < this.symbolsNode.length; j++) {
            this.symbolsNode[j].stopAllActions();
            this.symbolsNode[j].active = true;
        }
    },
    stopAllSymbolAnimation() {
        if (this.firstTime == 0) {
            this.firstTime++;
            return;
        }

        for (var i = 0; i < this.resultAnimation.length; i++) {
            this.symbolView[i].setSymbol(this.symbolResult[i]);
        }
    },
    setSymbolAnimation(animation) {
        this.symbolAnimation = animation;

        for (let i = 0; i < this.node.childrenCount; i++) {
            var _symbol = this.node.children[i].getComponent(cc.Animation);
            if (_symbol != null)
                _symbol.Clips = this.symbolAnimation;
        }
    },
    playSpecificAnimation(symbol) {
        for (let i = 0; i < this.symbolResult.length; i++) {
            if (this.symbolResult[i] == symbol) {
                //do animation
                this.symbolView[i].playAnimation();
            }
        }
    },
    randomAllSymbol() {
        for (var i = 0; i < this.node.childrenCount; i++) {
            this.symbolView[i].setSymbol(this.randomSymbol[Math.floor(Math.random() * this.randomSymbol.length)]);
        }
    },
    isDimAllSymbol(isDim) {
        for (let i = 0; i < this.symbolResult.length; i++) {
            this.symbolView[i].isDimSymbol(isDim);
        }
    },
    isSingleSymbol(i, isDim) {
        var num = i - 1;
        this.symbolView[num].isDimSymbol(isDim);
    },
});