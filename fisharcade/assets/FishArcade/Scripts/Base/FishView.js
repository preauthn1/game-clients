cc.Class({
    extends: cc.Component,

    properties: {
        fishBase:cc.Node,
        fishShadow:cc.Node,
        fishDisplay:{
            default:[],
            visible:false,
        },
        fishSprite:{
            default:[],
            visible:false,
        },
    },

    onLoad:function(){
        this.fishDisplay[0] = this.fishBase.getComponent(cc.Animation);
        this.fishDisplay[1] = this.fishShadow.getComponent(cc.Animation);
    },
});
