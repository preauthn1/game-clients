// Learn cc.Class:
//  - [Chinese] http://example.invalid/creator/manual/zh/scripting/class.html
//  - [English] http://example.invalid/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://example.invalid/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://example.invalid/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://example.invalid/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://example.invalid/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        rotateTime:0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    onEnable(){
        this.startRotate();
    },
    startRotate(){
        var actions = cc.sequence(
            cc.rotateBy(this.rotateTime, 360),
            cc.callFunc(this.startRotate,this),
        );
        this.node.runAction(actions);
    },
    onDisable(){
        this.node.stopAllActions();
    },
    // update (dt) {},
});
