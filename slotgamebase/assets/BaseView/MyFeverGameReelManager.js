var config = require('MyBaseConfig');
var accounting = require('Accounting');
cc.Class({
    extends: cc.Component,

    properties: {
        symbolsNode: [cc.Node],
        symbolView: [cc.Node],
        controller:cc.Node,
        randomSymbolList:[],
        isResult:false,
        resultCode:"c1",
        isReal:false,
        totalWinLabel:cc.Label,
        expNode:cc.Node,
        value:0,
        numberValue:0,
        particleNode:cc.Node,
        parentNode:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    onLoad () {
        var childsNode = [];
        var childView = [];
        // console.log(this.node.childrenCount);
        for (let j = 0; j < this.node.childrenCount; j++) {
            childsNode.push(this.node.children[j]);
            childView.push(this.node.children[j].getComponent(config.SCRIPT.SYMBOLVIEW));
        }
        if(this.totalWinLabel!=null)
        this.totalWinLabel.string = "";
        this.symbolsNode = childsNode;
        this.symbolView = childView;
    },

    // update (dt) {},

    randomAllRunAnim(_controller){
        this.controller = _controller;
        this.setAmountValue("");
        this.numberValue =0;
        this.randomSymbolList = this.controller.randomSymbolList; 

        // console.log(this.symbolView.length);
        for(let i=0;i<this.symbolView.length;i++){
            this.symbolView[i].setSymbol(this.randomSymbolList[Math.floor(Math.random() * (this.randomSymbolList.length-1))]);
            this.checkIsDim(this.symbolView[i]);
        }
    },
    setResultSymbol(winAmount){
        for(let i=0;i<this.symbolView.length;i++){
            this.symbolView[i].setSymbol(this.controller.feverSymbol);
            this.symbolView[i].playAnimation();
        }
        
        this.checkIsDim(this.symbolView[0]);
        this.setAmountValue(winAmount);
        this.numberValue =winAmount;
    },
    animationUpdateAmount(winAmount,time){
        if(this.totalWinLabel!=null){
            this.totalWinLabel.node.stopAllActions(); 
            this.totalWinLabel.node.runAction(
                cc.sequence(
                    cc.delayTime(time),
                    cc.callFunc(function(){
                        this.startWinAnim();
                    },this),
                    cc.scaleTo(0.2,0,0),
                    cc.callFunc(function(){
                        this.controller.playSingleAddSfx();
                        this.setAmountValue(winAmount);
                        this.numberValue =winAmount;
                    },this),
                    cc.scaleTo(0.2,1,1),
                )
            );   
        }
    },
    setAmountValue(amount){
        if(amount >= 1000){
            amount = amount/1000;
            this.value = amount.toFixed(0) +"k";
        }
        else{
            this.value = amount;
        }
        //accounting.formatNumber(amount, 0, ",");
        if(this.totalWinLabel!=null)
        this.totalWinLabel.string = this.value;  
    },
    startAnim(){
        this.isReal = false;
        this.isResult = false;
        this.node.getComponent(cc.Animation).play("RunAnim");
    },
    endRandomAnim(){
        this.symbolView[0].setSymbol(this.symbolView[this.symbolView.length-1].symbolCode);
        this.checkIsDim(this.symbolView[0]);
        for(let i=1;i<this.symbolView.length;i++){
            if(this.isResult == true && this.isReal == true){
                this.symbolView[i].setSymbol(this.randomSymbolList[Math.floor(Math.random() * (this.randomSymbolList.length-1))]);
            }
            else{
                this.symbolView[i].setSymbol(this.randomSymbolList[Math.floor(Math.random() * this.randomSymbolList.length)]);
            }
            this.checkIsDim(this.symbolView[i]);
        }

        

        this.node.setPosition(0, 0);
        if(this.isResult == true){
            this.symbolView[this.symbolView.length-1].setSymbol(this.resultCode);
            this.checkIsDim(this.symbolView[this.symbolView.length-1]);
            this.node.getComponent(cc.Animation).play("RunAnim2");
        }
        else{
            this.node.getComponent(cc.Animation).play("RunAnim");
        }
    },
    showResult(code, time,isReal){
        // console.log(code +" / " +isReal);
        this.resultCode = code;
        this.isReal = isReal;
        this.node.runAction(cc.sequence(
            cc.delayTime(time),
            cc.callFunc(function(){
                this.setTrueResult()
            }, this),
        ));
    },
    setTrueResult(){
        this.isResult = true;
    },
    done(){
        if(this.isReal== true){
            //this.symbolView[this.symbolView.length-1].playStopAnimation();
        }
        if(this.resultCode == this.controller.lightningSymbol){
            for(let i=0;i<this.symbolView.length;i++){
                // this.symbolView[i].playStopAnimation()
                this.symbolView[i].node.runAction(
                    cc.sequence(
                        cc.scaleTo(0.2,1,1),
                        cc.scaleTo(0.2,0.8,0.8),
                    )
                );
            }
        }
        this.controller.done();
    },
    startWinAnim(){
        for(let i=0;i<this.symbolView.length;i++){
            this.symbolView[i].playAnimation();
        }
    }, 

    checkIsDim(view){
        if(view.symbolCode == this.controller.feverSymbol||view.symbolCode == this.controller.lightningSymbol){
            view.isDimSymbol(false);
        }
        else{
            view.isDimSymbol(true);
        }
    },

    startFinalTotalWin(time){
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(
            cc.delayTime(time),
            cc.callFunc(function(){
                this.controller.playFlameSfx();
                this.startFinalAnim()
            }, this),
            cc.delayTime(0.2),
            cc.callFunc(function(){
                if(this.totalWinLabel!=null)
                this.totalWinLabel.string = "";  
                this.generateParticle();
            }, this),
            cc.delayTime(0.5),
            cc.callFunc(function(){
                this.updateFinalTotalWin();
            }, this),
        ));
    },  
    startFinalAnim(){
        // this.controller
        this.enableExploAnim();
        // this.setAmountValue("");
    },
    updateFinalTotalWin(){
        // console.log(this.numberValue);
        this.controller.updateFinalTotalWin(this.numberValue);
    },
    enableExploAnim(){
        this.expNode.stopAllActions(); 
        this.expNode.active = true;
        this.expNode.runAction(cc.sequence(
            cc.delayTime(0.43),
            cc.callFunc(function(){
                this.expNode.active = false;
            }, this),
        ));
    },

    generateParticle(){
        var line = cc.instantiate(this.controller.particleNode);
        line.parent = this.controller.particleParent;
        line.position = cc.v2(this.node.parent.position.x,this.node.parent.position.y);
        // console.log(line.position);
    
        var multiActions = [];
        multiActions.push(cc.moveTo(0.5, cc.v2(this.controller.particleDestination.position.x, this.controller.particleDestination.position.y)));
        multiActions.push(cc.callFunc(this.destroyObject, this, { obj: line }));
        line.runAction(cc.sequence(multiActions));
    },
    destroyObject(target, data) {
        data.obj.destroy();
    },

    startLightningWinAnim(){
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(
            cc.delayTime(0.5),
            cc.callFunc(function(){
                this.controller.playFlameSfx();
                this.enableExploAnim();
            }, this),
            cc.delayTime(0.2),
            cc.callFunc(function(){
                this.generateParticle();
            }, this),
            cc.delayTime(0.5),
            cc.callFunc(function(){
                for(let i=0;i<this.symbolView.length;i++){
                    this.symbolView[i].setSymbol(this.controller.feverSymbol);
                    this.symbolView[i].playAnimation();
                }
                this.controller.enableExploAnim2();
                this.controller.updateLightningTotal();
            }, this),
        ));
    
    },

    generateLightningShootParticle(timer){
        var line = cc.instantiate(this.controller.particleNode);
        line.parent = this.controller.particleParent;
        line.position = cc.v2(this.controller.particleDestination.position.x, this.controller.particleDestination.position.y);
        // console.log(line.position);
        var multiActions = [];
        multiActions.push(cc.delayTime(timer));
        multiActions.push(cc.callFunc(function(){
            this.controller.deductLightningTotal();
        }, this));
        multiActions.push(cc.moveTo(0.5,cc.v2(this.node.parent.position.x,this.node.parent.position.y)));
        multiActions.push(cc.callFunc(function(){
            this.enableExploAnim();
            this.animationUpdateAmount(this.numberValue * 2,0);
        }, this));
        multiActions.push(cc.callFunc(this.destroyObject, this, { obj: line }));
        line.runAction(cc.sequence(multiActions));
    },
});
