import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { BaseHander } from './BaseHander';
import * as ICallback from './Data/ICallback';
const { ccclass, property } = _decorator;

/**
 * Loading畫面控制器
 */
@ccclass('LoadingHandler')
export class LoadingHandler extends BaseHander {
    @property(Sprite)
    public spriteProcessBar: Sprite;
    @property(Node)
    public nodeLoadingHint: Node;
    @property(Label)
    public lblLoadingHint: Label;

    start() {
        super.start();
    }

    update(deltaTime: number) {
        
    }

    updateGameStatus (status: ICallback.GameStatus) {
        super.updateGameStatus(status);
        if (this.nodeBase) {
            // this.nodeBase.active = (this.gameStatus === ICallback.GameStatus.LOADING || this.gameStatus === ICallback.GameStatus.RELOADING);
            switch (this.gameStatus) {
                case ICallback.GameStatus.LOADING:
                case ICallback.GameStatus.RELOADING:
                    this.showLoadingHint('');
                    this.spriteProcessBar.fillStart = 0;
                    this.nodeBase.active = true;
                    break;
                default:
                    this.nodeBase.active = false;
                    break;
            }
        }
    }

    updateProcessBar(value: number) {
        this.spriteProcessBar.fillStart = value;
    }

    showLoadingHint(hint: string) {
        this.nodeLoadingHint.active = hint === '';
        this.lblLoadingHint.string = hint;
    }

    init() {
        super.init();
    }
}


