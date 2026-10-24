// Learn cc.Class:
//  - [Chinese] https://example.invalid/creator/manual/zh/scripting/class.html
//  - [English] http://example.invalid/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://example.invalid/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://example.invalid/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://example.invalid/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://example.invalid/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},

    play(name){
        let animation = this.node.getComponent(cc.Animation)
        if(animation != null){
            animation.play(name)
        }
        
        let particle = this.node.getComponent(cc.ParticleSystem)
        if(particle != null){
            particle.resetSystem()
        }

        this.resetSystemChild(name)
    },

    resetSystemChild(name,target){
        if(target == null){
            target = this.node
        }
    
        let animation = target.getComponentsInChildren(cc.Animation)
        for(let i in animation){
            animation[i].play(name)
        }

        let particle = target.getComponentsInChildren(cc.ParticleSystem)
        for(let i in particle){
            particle[i].resetSystem()
        }

        let motion = target.getComponentsInChildren(cc.MotionStreak)
        for(let i in motion){
            motion[i].reset()
        }
    },

    stop(){
        this.node.active = true
        
        let animation = this.node.getComponent(cc.Animation)
        if(animation != null){
            animation.stop()
        }
        
        let particle = this.node.getComponent(cc.ParticleSystem)
        if(particle != null){
            particle.resetSystem()
            particle.stopSystem()
        }

        this.stopSystemChild()
    },

    stopSystemChild(target){
        if(target == null){
            target = this.node
        }
    
        let animation = target.getComponentsInChildren(cc.Animation)
        for(let i in animation){
            animation[i].stop()
        }

        let particle = target.getComponentsInChildren(cc.ParticleSystem)
        for(let i in particle){
            particle[i].resetSystem()
            particle[i].stopSystem()
        }

        let motion = target.getComponentsInChildren(cc.MotionStreak)
        for(let i in motion){
            motion[i].reset()
        }
    },
});
