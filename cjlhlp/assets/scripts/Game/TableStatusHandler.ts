import { _decorator, Enum, Label, Node, tween } from 'cc';
import { BaseGameHandler } from './BaseGameHandler';
import { GameDataManager } from '../Data/GameDataManager';
import { GameDataType, GameStatus } from '../CocosFrameworks/Data/BaseGameDataManager';
import { Roulette_Step, Roulette_StepInfo } from '../Proto/Game/GameMsg_Roulette';
import { AudioManger, SoundType } from './AudioManger';
const { ccclass, property } = _decorator;

export enum GameStatusMode {
    BET_PERPARE = 0,
    BET_START = 1,
    BET_COUNTDOWN = 2,
    BET_STOP = 3,
    WAITING_NEXT_ROUND = 4
}
Enum(GameStatusMode);

@ccclass('TableStatusHandler')
export class TableStatusHandler extends BaseGameHandler {

    @property({ group: { name: 'BetStatus', id: '3', displayOrder: 0 }, type: Node })
    public arrBetStatus: Node[] = [];
    @property({ group: { name: 'BetStatus', id: '3', displayOrder: 0 }, type: Label })
    public lblCountdownValue: Label;
    @property({ group: { name: 'BetStatus', id: '3', displayOrder: 0 }, type: Label })
    public lblWaitingCountdownValue: Label;

    private bStartCountdown: boolean = false;
    private countdownTimer: number = 0;
    private isPlayCountdownLast: boolean = false;
    private isShowWaitingCounting: boolean = true;

    update(deltaTime: number) {
        if (this.bStartCountdown) {
            const number = Math.ceil((this.countdownTimer - new Date().getTime()) / 1000);
            this.bStartCountdown = number >= 1;
            if (this.bStartCountdown) {
                this.updateCountdownValue(number);
            } else if (this.gameStatus === GameStatus.BET_COUNTDOWN) {
                GameDataManager.getInstance().GameStatus = GameStatus.BET_END;
            }
        }
    }

    protected updateGameStatus(status: GameStatus): void {
        AudioManger.getInstance().stopSound();
        super.updateGameStatus(status);
        this.hideAllStatusNode();
        switch (status) {
            case GameStatus.BET_START:
                this.showGameStatusHint(GameStatusMode.BET_PERPARE, 2);
                break;
            case GameStatus.BET_COUNTDOWN:
                AudioManger.getInstance().playSound(SoundType.START_BETTING);
                this.showGameStatusHint(GameStatusMode.BET_START, 1);
                break;
            case GameStatus.BET_END:
                this.isPlayCountdownLast = false;
                this.showGameStatusHint(GameStatusMode.BET_STOP, 1);
                break;
            case GameStatus.BET_SCORE:
                break;
            case GameStatus.ROUND_FINISH:
                break;
            case GameStatus.WAITING_NEXT_ROUND:
                this.showGameStatusHint(GameStatusMode.WAITING_NEXT_ROUND, 0);
                break;
        }
    }

    public init(callback?: () => void): void {
        let self = this;
        GameDataManager.getInstance().registerDataChange(GameDataType.GameState, function (data: Roulette_StepInfo) {
            self.setGameStatus(data);
        });
        super.init(callback);
    }



    private hideAllStatusNode() {
        this.arrBetStatus.forEach(betStatus => {
            betStatus.active = false;
        })
    }

    private showGameStatusHint(statusMode: GameStatusMode, delayTime: number) {
        const nodeStatus = this.arrBetStatus[statusMode];
        nodeStatus.active = true;
        tween().target(nodeStatus)
            .delay(delayTime)
            .call(() => {
                if (statusMode !== GameStatusMode.WAITING_NEXT_ROUND) {
                    nodeStatus.active = false;
                }
                if (statusMode === GameStatusMode.BET_START) {
                    this.showCountdownTimer();
                } else if (statusMode === GameStatusMode.WAITING_NEXT_ROUND) {
                    this.showWaitingCountdownTimer();
                }
            })
            .start();
    }

    private showCountdownTimer() {
        this.arrBetStatus[GameStatusMode.BET_COUNTDOWN].active = true;
        this.updateCountdownValue(this.countdownTimer);
        this.bStartCountdown = true;
    }

    private showWaitingCountdownTimer() {
        this.updateCountdownValue(this.countdownTimer);
        this.bStartCountdown = true;
    }

    private updateCountdownValue(timer: number) {
        if (this.gameStatus === GameStatus.BET_COUNTDOWN) {
            if (timer === 3 && !this.isPlayCountdownLast) {
                this.isPlayCountdownLast = true;
                AudioManger.getInstance().playSound(SoundType.COUNTDOWN_LAST, true);
            }
            this.lblCountdownValue.string = timer.toFixed(0);
        } else {
            this.lblWaitingCountdownValue.string = (timer > 0 && this.isShowWaitingCounting) ? (timer.toFixed(0) + ' s...') : '';
        }
    }

    /**
     * Protobuf RouletteStepID 回調
     * @param data Roulette_StepInfo
     */
    private setGameStatus(data: Roulette_StepInfo) {
        let nextStatus = GameDataManager.getInstance().GameStatus;
        this.countdownTimer = new Date().getTime() + (data.Time * 1000);
        switch (data.Step) {
            case Roulette_Step.Roulette_StepPrepare:
                nextStatus = GameStatus.WAITING_NEXT_ROUND;
                break;
            case Roulette_Step.Roulette_StepStart:
                nextStatus = GameStatus.BET_START;
                break;
            case Roulette_Step.Roulette_StepWaitBet:
                if (data.Time > 2) {
                    nextStatus = GameStatus.BET_COUNTDOWN;
                } else {
                    this.isShowWaitingCounting = false;
                    nextStatus = GameStatus.WAITING_NEXT_ROUND;
                }
                break;
            case Roulette_Step.Roulette_StepShowAward:
                if (this.gameStatus === GameStatus.BET_END || this.gameStatus === GameStatus.BET_COUNTDOWN || this.gameStatus === GameStatus.SHOW_GAME_RESULT) {
                    nextStatus = GameStatus.SHOW_GAME_RESULT;
                } else {
                    this.isShowWaitingCounting = true;
                    nextStatus = GameStatus.WAITING_NEXT_ROUND;
                }
                break;
            case Roulette_Step.Roulette_StepFinish:
                nextStatus = GameStatus.ROUND_FINISH;
                break;
        }
        if (nextStatus !== GameDataManager.getInstance().GameStatus) {
            GameDataManager.getInstance().GameStatus = nextStatus;
        }
    }
}


