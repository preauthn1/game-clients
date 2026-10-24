cc.Class({
    extends: cc.Component,

    properties: {
        animationName:"",
        timer:0,
        isLoops:1,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        
    },
    onEnable(){
        if(this.timer == 0){
            var anim = this.node.getComponent(dragonBones.ArmatureDisplay);
            // anim = anim.armature();
            //anim.animation.fadeIn(this.animationName,-1,-1,0,"normal");
            anim.playAnimation(this.animationName,this.isLoops);
        }

        
    },
    test(){
        
    },
});
