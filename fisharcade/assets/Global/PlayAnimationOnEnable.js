cc.Class({
    extends: cc.Component,

    properties: {
        animationName:"",
        timer:0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

        if(this.timer != 0){
            let delayTime = Math.random();

            this.node.runAction(cc.sequence(
                cc.delayTime(delayTime),
                cc.callFunc(function(){
                    this.node.getComponent(cc.Animation).play(this.animationName);
                }, this)
            ));
        }
    },
    onEnable(){
        // console.log("This Object ENable");
        if(this.timer == 0)
        this.node.getComponent(cc.Animation).play(this.animationName);
    },
    // update (dt) {},
});
