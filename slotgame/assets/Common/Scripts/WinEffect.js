// Learn cc.Class:
//  - [Chinese] http://example.invalid/docs/creator/scripting/class.html
//  - [English] http://example.invalid/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://example.invalid/docs/creator/scripting/reference/attributes.html
//  - [English] http://example.invalid/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://example.invalid/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://example.invalid/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

var utils = require('Utils');
var accounting = require('Accounting');

cc.Class({
    extends: cc.Component,

    properties: {
        coinsPrefab:cc.Prefab,
        coinsArr:[],
        coinsNum:10,

        maxUpYPos:100,
        minUpYPos:100,
        upXPos:100,

        downYPos:100,
        destination:cc.Node,

        amount:0,
        text:cc.RichText,
        winValueCallBack:null,
        tweenWinValue:0,
        isHideWinAmt:true,
        audioManager:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    },

    start () {

    },
    testCoinEffect(){
        this.startCoinEffect(1000);
    },
    startCoinEffect(amount){
        // console.log("Win Amount : " +amount);
        if(amount <=0){
            this.amount =0;
            return;
        }
        this.text.node.active = true;
        for(let i=0;i<this.coinsNum;i++){
            var action = cc.sequence(
                cc.delayTime(((Math.floor(Math.random() * 5))+1)/10),
                cc.callFunc(this.instantiateCoin, this, {}),
            );
            this.node.runAction(action);
        }
        this.amount = amount;
        this.text.node.stopAllActions();
        this.startTweenWinValue(this.amount);
        if(this.audioManager!=null)
        this.audioManager.playWinSoundSfx(this.audioManager.winClip,false);
                
    },
    instantiateCoin(){
        var coins = cc.instantiate(this.coinsPrefab);
        this.coinsArr.push(coins);
        coins.parent = this.node;
        coins.setPosition(0, 0);    
        var condition = Math.random() > 0.5;
        
        var upPos = cc.v2(Math.floor((Math.random() * this.upXPos) + 10),Math.floor((Math.random() * this.maxUpYPos) + this.minUpYPos));
        var downPos ;
        if(condition){ //left
            upPos = cc.v2(-upPos.x,upPos.y);
            downPos = cc.v2(upPos.x - Math.floor((Math.random() * 100) + 1) ,upPos.y - Math.floor((Math.random() * this.downYPos) + 10) );
        }
        else{
            downPos = cc.v2(upPos.x + Math.floor((Math.random() * 100) + 1) ,upPos.y - Math.floor((Math.random() * this.downYPos) + 10) );
        }

        var action = cc.sequence(
            cc.moveTo(0.5, upPos),
            cc.moveTo(0.5, downPos),
            cc.moveTo(1, this.destination.position),
            cc.callFunc(this.destroyObject,this,{obj:coins}),
        );
        coins.runAction(action);
    },
    destroyObject(target,data){
        data.obj.destroy();
    },

    hideObject(){
        // console.log("Update Win Effetc Amount to zero ::: ");
        this.updateAmount(0);
        if(this.audioManager!=null)
        this.audioManager.stopWinSoundSfx();

        if(this.isHideWinAmt)
        this.text.node.active = false;
        //this.node.active = false;
    },
    updateAmount(amt){
        var temp = accounting.formatNumber(amt, 0, ",");
        this.text.string = utils.customRichTextFont(temp);
    },
    startTweenWinValue: function (end) {
        this.unschedule(this.winValueCallBack);
        this.winValueCallBack = null;

        this.tweenWinValue = 0;
        var addValue = 0;
        var tempTimeCount = 30;
        addValue = end / tempTimeCount;
        addValue = Math.floor(addValue);
        if (addValue == 0) {
            addValue = 1;
        }

        //console.log("startNormalTweenWinValue :: "+tempTimeCount +" / " +addValue +" / " + end);
        this.winValueCallBack = function () {
            if (this.tweenWinValue >= end) {
                var temp = accounting.formatNumber(end, 0, ",");
                this.text.string = utils.customRichTextFont(temp);
                this.unschedule(this.winValueCallBack);
                this.winValueCallBack = null;
               
                if(this.isHideWinAmt){
                    var action = cc.sequence(
                        cc.delayTime(2),
                        cc.callFunc(this.hideObject,this,{}),
                    );
                    this.text.node.runAction(action);
                }
            }
            else {
                this.tweenWinValue += addValue;
                
                var temp = accounting.formatNumber(this.tweenWinValue, 0, ",");
                this.text.string = utils.customRichTextFont(temp);
            }
        }
        this.schedule(this.winValueCallBack, 0.01);
    },
});
