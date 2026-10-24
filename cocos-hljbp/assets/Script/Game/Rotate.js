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
    	resetOnEnable:true,
    	speed:180,
    },

    // LIFE-CYCLE CALLBACKS:

    onEnable(){
    	if(this.resetOnEnable)
    		this.node.angle = 0;
    },

    // onLoad () {},

    // start () {

    // },

    update (dt) {
    	this.node.angle = (this.node.angle + this.speed * dt) % 360;

    },

    // editor : {
    //     executeInEditMode : true
    // }
});
