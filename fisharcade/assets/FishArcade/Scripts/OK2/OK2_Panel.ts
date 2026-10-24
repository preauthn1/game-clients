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
import Panel from '../Base/PanelView';

@ccclass
export default class NewClass extends Panel {
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}
}
