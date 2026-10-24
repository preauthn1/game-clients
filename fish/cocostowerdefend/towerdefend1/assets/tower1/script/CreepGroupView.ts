// Learn TypeScript:
//  - [Chinese] https://example.invalid/creator/manual/zh/scripting/typescript.html
//  - [English] http://example.invalid/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://example.invalid/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://example.invalid/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://example.invalid/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://example.invalid/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}
    die(){
        this.node.getComponent(cc.BoxCollider).enabled = false;
        this.node.getComponent(cc.Animation).enabled = false;
        this.node.runAction(cc.sequence(
            cc.fadeOut(0.5),
            cc.callFunc(this.cleanUp,this),
        ));
    }
    cleanUp(){
        console.log("Clean Up");
        this.node.destroy();
    }

    enableCollider(){
        //console.log(this.node.getComponent("BoxCollider"));
        //this.node.getComponent("BoxCollider").enabled = true;
    }
}
