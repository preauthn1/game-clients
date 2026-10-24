import { _decorator, Component, Label, Node, ProgressBar, Sprite } from 'cc';
import { GameStatus } from '../CocosFrameworks/Data/BaseGameDataManager';
import { BaseGameHandler } from './BaseGameHandler';
const { ccclass, property } = _decorator;

@ccclass('LoadingHandler')
export class LoadingHandler extends BaseGameHandler {
    @property(ProgressBar)
    public progressBarLoading: ProgressBar;
    @property(Node)
    public nodeLoadingHint: Node;
    @property(Label)
    public lblLoadingHint: Label;

    start() {

    }

    public init(callback?: () => void): void {
        super.init(callback);
    }

    protected updateGameStatus(status: GameStatus): void {
        super.updateGameStatus(status);
        if (this.nodeBase) {
            this.nodeBase.active = (this.gameStatus === GameStatus.LOADING || this.gameStatus === GameStatus.RELOADING || this.gameStatus === GameStatus.LOGIN);
        }
    }

    public updateProcessBar(process: number) {
        this.progressBarLoading.progress = process;
    }

    public showLoadingHint(hint: string) {
        if (this.nodeLoadingHint) {
            this.nodeLoadingHint.active = hint === ''
        }
        if (this.progressBarLoading) {
            this.progressBarLoading.node.active = hint === '';
        }
        if (this.lblLoadingHint) {
            this.lblLoadingHint.string = hint;
        }
    }
}


