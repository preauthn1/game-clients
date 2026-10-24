var config = require('MyBaseConfig');
cc.Class({
    extends: cc.Component,

    properties: {
        controller:cc.Node,
        mainNode:cc.Node,
        mainNodes:[cc.Node],
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        if(this.controller!=null)
        this.controller = this.controller.getComponent(config.SCRIPT.GAMECONTROLLER);

        if(this.mainNode!=null)
        this.mainNode.active = false;

        for(let i=0;i<this.mainNodes.length;i++){
            this.mainNodes[i].active = false;
        }
    },
    enterFreeSpin(){
        this.mainNode.active = true;
        for(let i=0;i<this.mainNodes.length;i++){
            this.mainNodes[i].active = true;
        }
    },
    exitFreeSpin(){
        this.mainNode.active = false;
        for(let i=0;i<this.mainNodes.length;i++){
            this.mainNodes[i].active = false;
        }
    },
    // update (dt) {},
});
