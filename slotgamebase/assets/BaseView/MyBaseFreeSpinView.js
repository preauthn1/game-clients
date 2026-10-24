var config = require('MyBaseConfig');
cc.Class({
    extends: cc.Component,

    properties: {
        controller:cc.Node,
        audioManager:cc.Node,
        mainNode:cc.Node,
        mainNodes:[cc.Node],
        freeSpinHideNodes:[cc.Node],
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () 
    {
        if(this.controller!=null)
        this.controller = this.controller.getComponent(config.SCRIPT.GAMECONTROLLER);

        this.show(false)
    },

    enterFreeSpin()
    {
        this.show(true)
    },

    exitFreeSpin()
    {
        this.show(false)
    },

    enableRetrigger(){

    },

    show(isFree)
    {        
        this.mainNode.active = isFree == true

        for(let i in this.mainNodes)
        {
            this.mainNodes[i].active = isFree == true;
        }
        for(let i in this.freeSpinHideNodes)
        {
            this.freeSpinHideNodes[i].active = isFree == false
        }
    }
    // update (dt) {},
});
