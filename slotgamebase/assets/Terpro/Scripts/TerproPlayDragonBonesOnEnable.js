cc.Class({
    extends: cc.Component,

    properties: 
    {
        
    },

    onEnable() 
    {
        let anim = this.node.getComponent("dragonBones.ArmatureDisplay")
        anim.armature().animation.play(anim.animationName, anim.playTimes)
    },
});
