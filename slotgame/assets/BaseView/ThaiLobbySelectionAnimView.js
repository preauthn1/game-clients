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
        
        obj:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    start () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    },
    onCollisionEnter: function (other, self) {
        console.log('on collision enter');
        console.log(other);
        this.obj = other.node;
        // var actions = cc.sequence(
        //     cc.delayTime(0),
        //     cc.rotateTo(0.05, -20),
        //     cc.rotateTo(0.05, 0),
        // );
        // this.node.stopAllActions();
        // this.node.runAction(actions);
    },
    update (dt) {
        if(this.obj!=null){
            var pos1 = this.obj.getPosition();
            var dist = this.node.position.sub(pos1).mag();
            console.log(dist);
        }
    },
});
