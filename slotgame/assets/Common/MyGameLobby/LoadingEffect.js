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
        text:cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    onEnable(){
        // console.log("This Object ENable");
        if(this.text!=null)
        this.text.string = "";
    },
    show(count,total){
        this.text.string = count+" / "+total;
    }
    // update (dt) {},
});
