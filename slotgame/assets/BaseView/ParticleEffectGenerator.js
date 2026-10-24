cc.Class({
    extends: cc.Component,

    properties: {
        numOfChild:10,
        prefab:cc.Prefab,
        distanceRange:0,


        countParticle:0,
        delayTime:0,
        time:0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.delayTime = Math.random();
    },


    update (dt) {
        this.time += dt;

        if(this.time > this.delayTime && this.numOfChild > this.countParticle){
            this.delayTime = Math.random();
            this.generateParticle();
        }
    },

    generateParticle(){
        var prefab = cc.instantiate(this.prefab);
        this.node.insertChild(prefab);

        let dis = this.distanceRange* Math.random();
        
        if(Math.random() > 0.5){
            dis = -dis;
        }
        prefab.position = new cc.v2(dis,0);
        //prefab.rotation = Math.floor(Math.random() * 360);
        let size = Math.random()*0.5;
        prefab.scale = new cc.v2(size,size);
        this.countParticle ++;

        prefab.runAction(cc.sequence(
            cc.moveTo(Math.random(), cc.v2(prefab.position.x, -50)),
            cc.callFunc(function(){
                this.finish(prefab,this);
            }, this),
        ));
    },
    finish(obj,parent){
        obj.destroy();
        parent.countParticle --;
    },
});
