import { _decorator, Node, Sprite, Label, js, } from 'cc';
import { BaseViewController } from './BaseViewController';
const { ccclass, property } = _decorator;

export enum CountdownType {
    Seconds,
    Ranges,
}

/**
 * 倒數計時佈局介面控制器
 */
@ccclass('CountdownBadgeViewController')
export class CountdownBadgeViewController extends BaseViewController {

    @property(Node)
    public countdownBadgeViewNode: Node;

    @property(Sprite)
    public progressBarSprite: Sprite;

    @property(Label)
    public countdownLabel: Label;

    public set min(value: number) { this.minProgress = value; }

    public get min() { return this.minProgress; }

    public set max(value: number) { this.maxProgress = value; }

    public get max() { return this.maxProgress; }

    public set countdownType(value: CountdownType) { this.type = value; }

    public get countdownType() { return this.type; }

    private minProgress: number = 0;

    private maxProgress: number = 0;

    private type: CountdownType = CountdownType.Ranges;
    
    private isStartCountdown: boolean = false;



    private lastProgressTimestamp = 0;
    update(deltaTime: number) {
        super.update(deltaTime);
        if (this.isStartCountdown) {
            if (this.lastProgressTimestamp == 0) {
                this.lastProgressTimestamp = new Date().getTime();
            }
    
            var currentTimestamp = new Date().getTime();
            var progress = (currentTimestamp - this.lastProgressTimestamp) / 1000.0;
            this.setDuration(progress);
        }
    }

    /**
     * 開始倒計時
     */
    public startCountdown() {
        this.lastProgressTimestamp = 0;
        this.isStartCountdown = true;
    }

    /**
     * 停止倒計時
     */
    public stopCountdown() {
        this.isStartCountdown = false;
    }

    public setVisible(isVisible: boolean) {
        this.countdownBadgeViewNode.active = isVisible;
    }

    public setDuration(duration: number) {
        switch (this.countdownType) {
            case CountdownType.Seconds: {
                this.progressBarSprite.fillRange = duration - Math.floor(duration);
                break;
            }
            case CountdownType.Ranges: {
                let value: number;
                if (duration < this.min) value = this.min;
                else if (duration > this.max) value = this.max;
                else value = duration;
                this.progressBarSprite.fillRange = (value - this.min) / (this.max - this.min);
                break;
            }
        }
        
        this.countdownLabel.string = js.formatStr("%d", this.max - Math.floor(duration));
    }

}

