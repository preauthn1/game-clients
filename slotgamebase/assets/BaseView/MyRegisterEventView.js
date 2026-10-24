
cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},

    subscribeEvent: function(event,_callback,self)
    {
        this.node.on(event,_callback,self);
        // cc.log("event registered");
    },
    
    sendEvent: function(event)
    {
        this.node.emit(event);
        //this.node.dispatchEvent(new cc.Event.EventCustom('done', true));
    },

    sendEventWithParam(event,param){
        this.node.emit(event,param);
    },
});
