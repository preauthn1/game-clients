import { _decorator, Button, Component, Label, math, Node, tween, Vec3 } from 'cc';
import { BaseGameHandler } from './BaseGameHandler';
import { GameStatus } from '../CocosFrameworks/Data/BaseGameDataManager';
import { AudioManger, SoundType } from './AudioManger';
import { AnimatorPlayer } from '../Tools/AnimatorPlayer';
const { ccclass, property } = _decorator;

@ccclass('WinLayoutHandler')
export class WinLayoutHandler extends BaseGameHandler {

    @property(Button)
    public btnTest: Button;
    @property(Node)
    public nodeWin: Node;
    @property(Label)
    public lblWinMoney: Label;
    @property(Node)
    public nodeWinSuperZero: Node;
    @property(AnimatorPlayer)
    public arrAnimatorPlayer: AnimatorPlayer[] = [];

    private showNowMoney: number = 0;

    private set ShowNowMoney(money: number) {
        this.showNowMoney = money;
        const showMoney = parseFloat(this.showNowMoney.toFixed(2));
        this.lblWinMoney.string = Intl.NumberFormat().format(showMoney);
    }

    private totalWinMoney: number = 0;
    private startCounting: boolean = false;
    private countingShowMoneyTime = 1;
    private deltaShowMoneyTime = 0;
    private isSuperFinish = false;

    update(deltaTime: number) {
        if (this.startCounting) {
            this.deltaShowMoneyTime += deltaTime;
            let showMoney = parseInt(math.lerp(0, this.totalWinMoney, (this.deltaShowMoneyTime / this.countingShowMoneyTime)).toString());
            showMoney = parseInt((showMoney / 100).toString());
            if (this.deltaShowMoneyTime >= this.countingShowMoneyTime) {
                showMoney = parseFloat((this.totalWinMoney / 100).toFixed(2));
                this.startCounting = false
            }
            this.ShowNowMoney = showMoney;
        }
    }

    public init(callback?: () => void): void {
        super.init(callback);
    }

    public showWinMoney(money: number, isSuperZero: boolean = false) {
        if (this.gameStatus === GameStatus.BET_SCORE && money > 0) {
            if (isSuperZero) {
                this.playSuperZero(money);
            } else {
                AudioManger.getInstance().playSound(SoundType.WIN_MONEY);
                this.countingShowMoneyTime = Math.min(1, parseInt((money / 10000).toString()));
                this.ShowNowMoney = 0;
                this.deltaShowMoneyTime = 0;
                this.totalWinMoney = money;
                this.animatorNodeWin();
            }
        }
    }
    private playSuperZero(money: number) {
        let self = this;
        this.isSuperFinish = false;
        AudioManger.getInstance().playSound(SoundType.SUPER_ZERO);
        this.nodeWinSuperZero.active = true;
        this.arrAnimatorPlayer.forEach(player => {
            player.playAnimatorFrame(function () {
                if (!self.isSuperFinish) {
                    self.isSuperFinish = true;
                    self.nodeWinSuperZero.active = false;
                    self.showWinMoney(money, false);
                }
            });
        });
    }

    private animatorNodeWin() {
        this.nodeWin.setScale(0.5, 0.5, 0.5);
        this.nodeBase.active = true;
        this.startCounting = true;
        tween().target(this.nodeWin)
            .to(0.3, { scale: new Vec3(1, 1, 1) })
            .delay(1.5)
            .call(() => {
                this.nodeBase.active = false;
            })
            .start();
    }

    public hideWinLayout() {
        this.ShowNowMoney = 0;
        this.nodeBase.active = false;
        this.nodeWinSuperZero.active = false;
    }
}


