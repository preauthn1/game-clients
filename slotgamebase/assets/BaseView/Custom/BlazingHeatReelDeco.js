var config = require('MyBaseConfig');
cc.Class({
    extends: cc.Component,

    properties: {
        eventManager:cc.Node,
        objs:[cc.Node],
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        if(this.eventManager!=null)
        var reg = this.eventManager.getComponent(config.SCRIPT.REGISTEREVENT);
        else
        var reg = this.node.parent.getComponent(config.SCRIPT.REGISTEREVENT);

        reg.subscribeEvent(config.EVENT.SPINNING,this.enableDeco,this);
        reg.subscribeEvent(config.EVENT.STOPSPINNING,this.disableDeco,this);
        reg.subscribeEvent(config.EVENT.STOPALLSPINNING,this.disableAllDeco,this);
    },

    enableDeco(){
        for(let i=0;i<this.objs.length;i++){
            this.objs[i].active = true;
        }
    },
    disableDeco(event){
        var value = event.detail.i;
        this.objs[value].active = false;   
    },
    disableAllDeco(){
        for(let i=0;i<this.objs.length;i++){
            this.objs[i].active = false;   
        }
    }
    // update (dt) {},
});
