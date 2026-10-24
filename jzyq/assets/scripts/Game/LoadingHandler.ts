import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { GameStatus } from '../Data/GameData';
import { BaseHandler } from './BaseHandler';
const { ccclass, property } = _decorator;

/**
 * Loading畫面管理控制
 */
@ccclass('LoadingHandler')
export class LoadingHandler extends BaseHandler {
    @property(Sprite)
    public spriteProcessBar: Sprite;
    @property(Node)
    public nodeLoadingHint: Node;
    @property(Label)
    public lblLoadingHint: Label;
    
    updateGameStatus (status: GameStatus) {
        super.updateGameStatus(status);
        if (this.nodeBase) {
            this.nodeBase.active = (this.gameStatus === GameStatus.LOADING || this.gameStatus === GameStatus.RELOADING);
        }
    }

    updateProcessBar(value: number) {
        if (this.spriteProcessBar) {
            this.spriteProcessBar.fillStart = value;
        }
    }

    showLoadingHint(hint: string) {
        if (this.nodeLoadingHint) {
            this.nodeLoadingHint.active = hint === '';
        }
        if (this.lblLoadingHint) {
            this.lblLoadingHint.string = hint;
        }
    }

    init() {
        super.init();
    }
}


