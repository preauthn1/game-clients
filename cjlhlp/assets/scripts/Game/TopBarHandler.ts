import { _decorator, Button, Component, instantiate, Label, Node, Prefab } from 'cc';
import { BaseGameHandler } from './BaseGameHandler';
import { GameDataManager } from '../Data/GameDataManager';
import { GameDataType, GameStatus } from '../CocosFrameworks/Data/BaseGameDataManager';
import { UserRoomLogonData } from '../Proto/Msg/gameRoomMsg';
import * as ProtoTool from '../CocosFrameworks/Proto/ProtoTool'
import Long from 'long';
import { DialogController, DialogMode } from './Dialog/DialogController';
import { AudioManger, SoundType } from './AudioManger';
import { GameStatusMode } from './TableStatusHandler';
import { Roulette_Bet, Roulette_BetAreaInfo, Roulette_BetResponse, Roulette_GameResultWin } from '../Proto/Game/GameMsg_Roulette';
import { ShowMoneyTemplate } from '../Template/ShowMoneyTemplate';
import { BetTableHandler } from './BetTableHandler';
const { ccclass, property } = _decorator;

@ccclass('TopBarHandler')
export class TopBarHandler extends BaseGameHandler {

    @property({ group: { name: 'UserData', id: '1', displayOrder: 0 }, type: Label })
    public lblUserId: Label;
    @property({ group: { name: 'UserData', id: '1', displayOrder: 0 }, type: Label })
    public lblUserMoney: Label;

    @property({ group: { name: 'Button', id: '2', displayOrder: 0 }, type: Button })
    public btnHome: Button;
    @property({ group: { name: 'Button', id: '2', displayOrder: 0 }, type: Button })
    public btnInfo: Button;
    @property({ group: { name: 'Button', id: '2', displayOrder: 0 }, type: Button })
    public btnSetting: Button;
    @property({ group: { name: 'Button', id: '2', displayOrder: 0 }, type: Button })
    public btnHistory: Button;
    @property({ group: { name: 'Button', id: '2', displayOrder: 0 }, type: Button })
    public btnSpecial: Button;

    @property(Prefab)
    public prefabShowMoney: Prefab;
    @property(Node)
    public nodeShowMoney: Node;
    @property(BetTableHandler)
    public betTableHandler: BetTableHandler;

    private tempUserMoney: number = 0;
    private winMoney: number = 0;
    private totalBetMoney: number = 0;
    private isHasBetMoney: boolean = false;

    public init(callback?: () => void): void {
        let self = this;
        this.initButton();
        this.betTableHandler.registerTempTotalBetMoneyEvent(function (tempTotalBetMoney: number) {
            self.totalBetMoney = tempTotalBetMoney;
            self.updateUserMoney();
        });

        GameDataManager.getInstance().registerDataChange(GameDataType.UserData, function (data: UserRoomLogonData) {
            if (self.gameStatus !== GameStatus.BET_COUNTDOWN && self.gameStatus !== GameStatus.SHOW_GAME_RESULT) {
                self.setUserInfoData(data);
            }
        });

        GameDataManager.getInstance().registerDataChange(GameDataType.ResultWinData, function (data: Roulette_GameResultWin) {
            self.winMoney = data.Win ? ProtoTool.long2Number(data.Win as Long) : 0;
            // console.log('winMoney:', data);
        });

        GameDataManager.getInstance().registerDataChange(GameDataType.BetRetData, function (data: Roulette_BetResponse) {
            self.syncBetResponse(data);
        });

        GameDataManager.getInstance().registerDataChange(GameDataType.BetAreaInfo, function (data: Roulette_BetAreaInfo) {
            self.syncBetAreaInfo(data);
        });
        super.init(callback);
    }

    private syncBetAreaInfo(data: Roulette_BetAreaInfo) {
        let betMoney = 0;
        if (data.UserBets) {
            data.UserBets.forEach(userBet => {
                if (userBet.UserID === GameDataManager.getInstance().UserData.UserID) {
                    if (userBet.Bets) {
                        userBet.Bets.forEach(betData => {
                            betMoney += ProtoTool.long2Number(betData.Money as Long);
                        });
                        this.totalBetMoney = betMoney;
                    }
                }
            })
        }
        this.updateUserMoney();
        this.isHasBetMoney = this.totalBetMoney > 0;
    }

    private syncBetResponse(data: Roulette_BetResponse) {
        let betMoney = 0;
        if (data.Bets) {
            data.Bets.forEach(betData => {
                betMoney += ProtoTool.long2Number(betData.Money as Long);
            });
            this.totalBetMoney = betMoney;
            this.updateUserMoney();
        }
        this.isHasBetMoney = this.totalBetMoney > 0;
    }

    protected updateGameStatus(status: GameStatus): void {
        super.updateGameStatus(status);
        switch (status) {
            case GameStatus.ROUND_FINISH:

                // this.showWinMoneyTemplate();
                break;
            case GameStatus.BET_END:
                // this.totalBetMoney = 0;
                break;
        }
    }

    private showWinMoneyTemplate() {
        if (this.winMoney !== 0) {
            const showMoney = instantiate(this.prefabShowMoney);
            showMoney.setParent(this.nodeShowMoney);
            const template = showMoney.getComponent(ShowMoneyTemplate);
            template.showMoney(this.winMoney + this.totalBetMoney);
        }
    }

    private showFinishUserMoneyTemplate(money: number) {
        const showMoney = instantiate(this.prefabShowMoney);
        showMoney.setParent(this.nodeShowMoney);
        const template = showMoney.getComponent(ShowMoneyTemplate);
        template.showMoney(money);
    }

    private initButton() {
        this.btnHistory.node.on(Button.EventType.CLICK, function () {
            AudioManger.getInstance().playSound(SoundType.BUTTON_CLICK);
            DialogController.getInstance().showDialog(DialogMode.HISTORY);
        })

        this.btnInfo.node.on(Button.EventType.CLICK, function () {
            AudioManger.getInstance().playSound(SoundType.BUTTON_CLICK);
            DialogController.getInstance().showDialog(example.invalid);
        })

        this.btnSetting.node.on(Button.EventType.CLICK, function () {
            AudioManger.getInstance().playSound(SoundType.BUTTON_CLICK);
            DialogController.getInstance().showDialog(DialogMode.SETTING);
        })

        this.btnSpecial.node.on(Button.EventType.CLICK, function () {
            AudioManger.getInstance().playSound(SoundType.BUTTON_CLICK);
            DialogController.getInstance().showDialog(DialogMode.SPECIAL);
        })
    }

    private setUserInfoData(data: UserRoomLogonData) {
        this.lblUserId.string = 'ID:' + data.UserID;
        const syncUserMoney = ProtoTool.long2Number(data.CashAmount as Long);
        if (this.isHasBetMoney) {
            const winMoney = syncUserMoney - (this.tempUserMoney - this.totalBetMoney);
            this.totalBetMoney = 0;
            // console.log('winMoney:', winMoney, syncUserMoney, this.tempUserMoney, this.totalBetMoney);
            this.isHasBetMoney = false;
            if (winMoney > 0) {
                this.showFinishUserMoneyTemplate(winMoney);
            }
        }
        this.tempUserMoney = syncUserMoney;
        this.updateUserMoney()
    }

    private updateUserMoney() {
        const userCash = this.tempUserMoney - this.totalBetMoney
        const hasDecimal = (userCash % 100) > 0;
        this.lblUserMoney.string = userCash.toString().length > (hasDecimal ? 7 : 9) ? (Intl.NumberFormat().format(Math.trunc(userCash / 100 / 1000)) + 'k') : Intl.NumberFormat().format(userCash / 100);
    }
}


