cc.Class({
    extends: cc.Component,

    properties: {
        animationName:"",
        timer:0,
        isLoop:0,
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
        // console.log("This Object ENable : ");
        // console.log(this.node);
        if(this.timer == 0){
            // console.log("1 : "+this.animationName);
            var anim = this.node.getComponent(cc.Animation)
            var animState = anim.play(this.animationName);
            // console.log("2 : "+this.animationName);
            if(this.isLoop == 1){
                animState.wrapMode = cc.WrapMode.Loop;
                animState.repeatCount = Infinity;
            }
        }

        
    },
    test(){
        // console.log("This Object ENable : ");
        // console.log(this.node);
        if(this.timer == 0){
            // console.log("1 : "+this.animationName);
            this.node.getComponent(cc.Animation).play(this.animationName);
            // console.log("2 : "+this.animationName);
        }
    },
});
