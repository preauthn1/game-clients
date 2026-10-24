cc.Class({
    extends: cc.Component,

    properties: 
    {
        isStartDisable:true,
        particleSystems:[cc.ParticleSystem]
    },

    onLoad()
    {
        this.mScale = this.node.scale

        if(this.isStartDisable == true)
        {
            this.node.active = false
        }
    },
    
    onEnable ()
    {
        for(let i in this.particleSystems)
        {
            this.particleSystems[i].resetSystem()
        } 
        this.node.runAction(cc.sequence(
            cc.delayTime(0.3),
            cc.callFunc(function()
            {
                this.node.scale = this.mScale
            },this)
        ));
    },

    onDisable ()
    {
        this.node.scale = 0
    },

    stopSystem()
    {
        for(let i in this.particleSystems)
        {
            this.particleSystems[i].stopSystem()
        } 
    }
});
