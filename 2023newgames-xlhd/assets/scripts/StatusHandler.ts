import { _decorator, Component, Node, Label } from 'cc';
import { BaseHander } from './BaseHander';
import * as ICallback from './Data/ICallback';
import GameDataManager from './GameDataManager';
import { LHD_Sate } from './Proto/Msg/gameMsg_LHD';
import { AudioManger } from './AudioManger';
const { ccclass, property } = _decorator;

@ccclass('StatusHandler')
export class StatusHandler extends BaseHander {

    @property({ type: Node })
    public nodeStartBetting: Node;
    @property({ type: Node })
    public nodeStopBetting: Node;
    @property({ type: Node })
    public nodeStartCountdown: Node;
    @property({ type: Node })
    public nodeCountdown: Node;
    @property({ type: Label })
    public lblCountdown: Label;

    private countdownTimer: number = 0;
    private startCountdown: boolean = false;

    start() {
        
    }

    init() {
        super.init();
        var self = this;
        super.start();
        GameDataManager.getInstance().registerDataChange(ICallback.GameDataType.GameState, function(data: any) {
            self.setCountdownTimer(data as LHD_Sate);
        })
    }

    update(deltaTime: number) {
        if (this.startCountdown) {
            const number = Math.ceil((this.countdownTimer - new Date().getTime()) / 1000);
            this.startCountdown = number > 0;    
            if (this.startCountdown) {
                this.updateCountdownValue(number);
            }
        }
    }

    setCountdownTimer (data: LHD_Sate) {
        var self = this;
        if (data.State === 0 && data.Time > 3) {
            this.countdownTimer = new Date().getTime() + (data.Time * 1000);
            this.startCountdown = true;
            if (this.gameStatus !== ICallback.GameStatus.BET_START) {
                GameDataManager.getInstance().GameStatus = ICallback.GameStatus.BET_COUNTDOWN;
            }
        } else {
            GameDataManager.getInstance().GameStatus = ICallback.GameStatus.WAITING_NEXT_ROUND;
        }
    }

    updateCountdownValue(time: number) {
        this.lblCountdown.string = time > 0 ? time.toString() : '';
    }

    updateGameStatus (status: ICallback.GameStatus) {
        // console.log('updateGameStatus:', status);
        super.updateGameStatus(status);
        switch (this.gameStatus) {
            case ICallback.GameStatus.BET_START:
                this.showStartBetting();
                break;
            case ICallback.GameStatus.BET_END:
                this.showEndBetting();
                break;
            case ICallback.GameStatus.BET_SCORE:
                
                break;
            case ICallback.GameStatus.BET_COUNTDOWN:
                this.showCountdown();
                break;
        }
    }

    showStartBetting () {
        var self = this;
        AudioManger.getInstance().playSound(ICallback.SoundType.START_BETTING);
        this.nodeStartBetting.active = true;
        setTimeout(() => {
            self.nodeStartBetting.active = false;
            self.showCountdown();
        }, 1000);
    }

    showEndBetting () {
        var self = this;
        AudioManger.getInstance().playSound(ICallback.SoundType.END_BETTING);
        this.nodeCountdown.active = false;
        this.nodeStopBetting.active = true;
        setTimeout(() => {
            self.nodeStopBetting.active = false;
        }, 1000);
    }

    showCountdown () {
        var self = this;
        this.nodeStartCountdown.active = true;
        setTimeout(() => {
            self.nodeCountdown.active = true;
            self.nodeStartCountdown.active = false;
        }, 1000);
    }

    hideAllStatusNode () {
        this.nodeStartBetting.active = false;
        this.nodeStopBetting.active = false;
        this.nodeStartCountdown.active = false;
        this.nodeCountdown.active = false;
    }
}


