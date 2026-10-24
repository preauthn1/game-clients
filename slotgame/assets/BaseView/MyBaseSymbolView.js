var config = require('MyBaseConfig');

cc.Class({
    extends: cc.Component,

    properties: {
        animation:cc.Animation,
        symbolCode:"",
        symbolSprite:cc.Sprite,
        defaultScale:cc.v2,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.animation = this.node.getComponent(cc.Animation);
    },

    start () {
        this.defaultScale = new cc.v2(this.node.scaleX,this.node.scaleY);
    },
    setSymbol(symbol){
        // console.log(symbol);
        this.symbolCode = symbol;
        this.playAnimationFirstFrame();
    },
    setSpinningSymbol(symbol){
        // console.log("setSpinningSymbol : " +symbol);
        this.symbolCode = symbol;
        this.animation.play(config.BlurSymbolAnimation[this.symbolCode]);
        this.animation.setCurrentTime(0);
        this.animation.pause();
    },
    playSpecialAnimation(){
        this.isDimSymbol(false);
        // console.log(config.SymbolAnimation[config.SPECIALSYMBOLANIM[this.symbolCode]]);
        this.animation.play(config.SymbolAnimation[config.SPECIALSYMBOLANIM[this.symbolCode]]);
    },
    playSelectedSymbol(anim){
        this.animation.play(anim);
    },
    
    playAnimation(){
        // console.log("playAnimation : " );
        this.isDimSymbol(false);
        this.animation.resume();
    },
    playAnimationFirstFrame(){
        // console.log(config.SymbolAnimation[this.symbolCode] +" / " +this.symbolCode);
        this.animation.play(config.SymbolAnimation[this.symbolCode]);
        this.animation.setCurrentTime(0);
        this.animation.pause();
    },
    playStopAnimation(){
        this.node.runAction(
            cc.sequence(
                cc.scaleTo(0.2,1.3,1.3),
                cc.scaleTo(0.2,1,1),
            )
        );
    },
    resetStopAnim(){
        this.node.stopAllActions();
        this.node.runAction(
            cc.sequence(
                cc.scaleTo(0,this.defaultScale.x,this.defaultScale.y),
                cc.scaleTo(0,this.defaultScale.x,this.defaultScale.y),
            )
        );
    },
    isDimSymbol(isDim){
        if(isDim){
            this.symbolSprite.node.color = new cc.Color(100, 100, 100);
        }
        else{
            this.symbolSprite.node.color = new cc.Color(255, 255, 255);
        }
    },
    // update (dt) {},
});
