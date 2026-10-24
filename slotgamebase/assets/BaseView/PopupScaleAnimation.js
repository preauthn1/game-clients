cc.Class({
    extends: cc.Component,

    properties: {
       currentScale:0,
       timer:1,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.currentScale = this.node.scale;
    },

    start () {

    },
    onEnable(){
        this.node.scale = cc.v2(0,0);

        
        this.node.runAction(cc.scaleTo(this.timer, this.currentScale).easing(cc.easeElasticOut(this.timer)));
    },
});
