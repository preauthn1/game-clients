import { _decorator, Component, Node, Label, Sprite, tween } from 'cc';
import { BaseHandler } from './BaseHandler';
import GameDataManager from '../Data/GameDataManager';
import { GameDataType, GameStatus } from '../Data/GameData';
import { JZYQ_StepInfo } from '../Proto/Game/GameMsg_JZYQ';
import { AudioManger, SoundType } from './AudioManger';
const { ccclass, property } = _decorator;

/**
 * 遊戲狀態管理器
 */
@ccclass('StatusHandler')
export class StatusHandler extends BaseHandler {
    @property(Node)
    public nodeStartBetting: Node;
    @property(Node)
    public nodeCountdown: Node;
    @property(Node)
    public nodeStopBetting: Node;
    @property(Label)
    public lblCountdownTime: Label;
    @property(Sprite)
    public spriteCountdownCircle: Sprite;

    private nextStepTimer: number = 0;
    private startCountdown: boolean = false;
    private isPlayCountdownLast = false;

    
    @property({group: { name: 'WaitingDialog', id: '2', displayOrder: 0}, type: Node})
    public nodeWaitingDialog: Node;
    @property({group: { name: 'WaitingDialog', id: '2', displayOrder: 0}, type: Label})
    public lblWaitingTimer: Label;

    start() {
        
    }

    //#region Base Override
    init(callback:{():void} = null) {
        var self = this;
        super.init(callback);
        GameDataManager.getInstance().registerDataChange(GameDataType.GameState, function(data: any) {
            self.setNowStepStatus(data);
        });
        if (callback) {
            callback();
        }
    }

    updateGameStatus (status: GameStatus) {
        // console.log('updateGameStatus:', status);
        super.updateGameStatus(status);
        this.clearAllStatus();
        switch (status) {
            case GameStatus.BET_START:
                this.nodeWaitingDialog.active = false;
                this.nodeStartBetting.active = true;
                break;
            case GameStatus.BET_COUNTDOWN:
                AudioManger.getInstance().playSound(SoundType.START_BETTING);
                this.isPlayCountdownLast = true;
                this.nodeCountdown.active = true;
                break;
            case GameStatus.BET_END:
                this.showStopBettingHint();
                break;
            case GameStatus.BET_SCORE:
                
                break;
            case GameStatus.BET_FINISH:
                this.nodeWaitingDialog.active = false;
                break;
            case GameStatus.WAITING_NEXT_ROUND:
                this.nodeWaitingDialog.active = true;
                break;
        }
    }
    //#endregion

    private showStopBettingHint() {
        this.nodeCountdown.active = false;
        this.nodeStopBetting.active = true;
        AudioManger.getInstance().stopSound();
        this.scheduleOnce(() => {
            this.nodeStopBetting.active = false;
        }, 1);
    }

    private clearAllStatus() {
        this.nodeStartBetting.active = false;
        this.nodeStopBetting.active = false;
        this.nodeCountdown.active = false;
        this.lblCountdownTime.string = '';
        this.spriteCountdownCircle.fillRange = 0;
    }

    update(deltaTime: number) {
        if (this.startCountdown) {
            const timer = this.nextStepTimer - new Date().getTime();
            this.startCountdown = timer > 0;
            this.updateTimerValue(Math.max(timer, 0));
        }
    }

    private updateTimerValue(timer: number) {
        const showTimer = Math.ceil(timer / 1000);
        const circleTimer = timer % 1000;
        if (showTimer === 3 && this.isPlayCountdownLast) {
            this.isPlayCountdownLast = false;
            AudioManger.getInstance().playSound(SoundType.COUNTDOWN_LAST, true);
        }
        if (showTimer === 0 && this.gameStatus === GameStatus.BET_COUNTDOWN) {
            this.showStopBettingHint();
        } else {
            this.lblCountdownTime.string = showTimer > 0 ? showTimer.toString() : '';
        }
        let waitingTimerString = (showTimer > 0 ? showTimer.toString() : 0) + 's...'
        this.lblWaitingTimer.string = waitingTimerString;
        this.spriteCountdownCircle.fillRange = (circleTimer - 1000) / 1000;
    }

    private setNowStepStatus(data: JZYQ_StepInfo) {
        this.nextStepTimer = new Date().getTime() + ((data.Time - 1) * 1000);
        this.startCountdown = true;
    }
}


