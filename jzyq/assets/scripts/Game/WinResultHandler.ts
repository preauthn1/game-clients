import { _decorator, Component, Node, Label, tween, Vec3, Quat } from 'cc';
import { GameStatus } from '../Data/GameData';
import { BaseHandler } from './BaseHandler';
const { ccclass, property } = _decorator;

/**
 * 勝利結果控制器
 */
@ccclass('WinResultHandler')
export class WinResultHandler extends BaseHandler {
    @property(Node)
    public nodeFlashLight: Node;
    @property(Label)
    public lblWinMoney: Label;

    start() {
        this.nodeBase.active = false;
    }

    updateGameStatus (status: GameStatus) {
        super.updateGameStatus(status);
    }

    init(callback:{():void} = null) {
        super.init(callback);
    }

    showWinResultHandler(money: number) {
        this.lblWinMoney.string = (money / 100).toString()
        let quat = new Quat();
        tween().target(this.nodeFlashLight)
            .delay(0.3)
            .call(() => {
                this.nodeBase.active = true;
                Quat.fromEuler(quat, 0, 0, 15);
            })
            .to(0.5, {scale: new Vec3(1, 1, 1), rotation: quat})
            .call(() => {
                Quat.fromEuler(quat, 0, 0, -15);
            })
            .to(0.5, {scale: new Vec3(1.5, 1.5, 1.5), rotation: quat})
            .call(() => {
                Quat.fromEuler(quat, 0, 0, 15);
            })
            .to(0.5, {scale: new Vec3(1, 1, 1), rotation: quat})
            .call(() => {
                Quat.fromEuler(quat, 0, 0, -15);
            })
            .to(0.5, {scale: new Vec3(1.5, 1.5, 1.5), rotation: quat})
            .call(() => {
                this.nodeBase.active = false;
            })
            .start();
    }
}


