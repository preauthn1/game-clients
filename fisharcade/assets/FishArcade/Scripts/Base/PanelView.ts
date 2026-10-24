// Learn TypeScript:
//  - [Chinese] http://example.invalid/creator/manual/zh/scripting/typescript.html
//  - [English] http://example.invalid/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://example.invalid/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://example.invalid/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://example.invalid/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://example.invalid/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    exitBtn: cc.Node = null;


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.exitBtn.on('click', this.backToLobby, this);
    }

    backToLobby(){
        console.log("Back Lobby");
        window.location.href = "http://example.invalid/st/public/lobbymobile/index.html?r="+Math.random();
    }
    // update (dt) {}
}
