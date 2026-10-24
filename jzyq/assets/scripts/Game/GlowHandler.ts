import { _decorator, Component, Node, ScrollView, Prefab, instantiate, SpriteFrame, Toggle, tween, Vec3, Button, Label, UIOpacity, VideoPlayer, Enum, Vec2, Sprite, ToggleComponent } from 'cc';
import { BaseHandler } from './BaseHandler';
import GameDataManager from '../Data/GameDataManager';
import { GameDataType, GameStatus, Game_BetType } from '../Data/GameData';
import { JZYQ_Bet, JZYQ_BetType, JZYQ_BoardCastBet, JZYQ_GameResult, JZYQ_Setting, JZYQ_BetResponse, JZYQ_ResultCode, JZYQ_GameResultWin, encodeJZYQ_BetType, decodeJZYQ_BetType } from '../Proto/Game/GameMsg_JZYQ';
import { GlowAreaUIData } from './GlowAreaUIData';
import * as ProtoTool from '../Tools/ProtoTool';
import Long from 'long';
import { CoinTemplate } from '../template/CoinTemplate';
import { UserRoomLogonData } from '../Proto/Msg/gameRoomMsg';
import { VideoController } from './VideoController';
import { AudioManger, SoundType } from './AudioManger';
import { WinResultHandler } from './WinResultHandler';
import { GameManager } from './GameManager';
import { PopupMessageController } from './PopupMessageController';

const { ccclass, property } = _decorator;

/**
 * 桌面下注UI資料結構
 */
@ccclass('TableBetUIData')
export class TableBetUIData {
    @property({type: Game_BetType})
    public type: Game_BetType = Game_BetType.JZYQ_BetTypeNone;
    @property({ type: Node})
    public nodeUserCoinZone: Node;
    @property({ type: Node})
    public nodeOtherCoinZone: Node;
    @property({ type: Node})
    public nodeBetTotalValue: Node;
    @property({ type: Label})
    public lblBetTotal: Label;
}

/**
 * 桌面下注管理控制及結果管理控制
 */
@ccclass('GlowHandler')
export class GlowHandler extends BaseHandler {

    @property(Label)
    public lblUserId: Label;
    @property(Label)
    public lblUserMoney: Label;
    @property(ToggleComponent)
    public toggleAutoBet: ToggleComponent;


    @property(VideoPlayer)
    public videoPlayerBG: VideoPlayer;
    @property(GlowAreaUIData)
    public arrGlowAreaUIData: GlowAreaUIData[] = [];
    @property({group: { name: 'UserBetCoin', id: '0', displayOrder: 0}, type: ScrollView})
    public scrollViewBetCoin: ScrollView;
    @property({group: { name: 'UserBetCoin', id: '0', displayOrder: 0}, type: Prefab})
    public prefabBetCoin: Prefab;
    @property({group: { name: 'UserBetCoin', id: '0', displayOrder: 0}, type: SpriteFrame})
    public arrayBetCoinSpriteFrame: SpriteFrame[] = [];
    private arrayBetCoinTemplate: CoinTemplate[] = [];
    private selectBetCoinIndex = 0;


    @property({ group: { name: 'TableBetCoin', id: '1', displayOrder: 0}, type: Prefab})
    public prefabTableBetCoinTemplate: Prefab;
    @property({ group: { name: 'TableBetCoin', id: '1', displayOrder: 0}, type: TableBetUIData, serializable: true})
    public arrayUserBetCoinTableUIData: TableBetUIData[] = [];

    private mapTableUserBetZoneData: Map<number, JZYQ_Bet[]> = new Map<number, JZYQ_Bet[]>();
    private arrTableBetCoin: Node[] = [];

    //#region Auto Bet Data
    private recordBetData: JZYQ_Bet[] = [];
    private nowRoundBetData: JZYQ_Bet[] = [];
    private isAutoBetOn: boolean = false;
    //#endregion

    @property(WinResultHandler)
    public winResultHandler: WinResultHandler;
    private roundWinMoney = 0;

    start() {
        
    }

    init(callback:{():void} = null) {
        var self = this;
        super.init(callback);
        this.recordBetData.length = 0;
        this.toggleAutoBet.node.on(Toggle.EventType.TOGGLE, function(toggle: ToggleComponent) {
            AudioManger.getInstance().playSound(SoundType.BUTTON_CLICK);
            self.isAutoBetOn = toggle.isChecked;
            PopupMessageController.getInstance().showPopupMessage(toggle.isChecked ? 'msgAutoBetOn' : 'msgAutoBetOff', toggle.isChecked ? 'Auto Bet is on' : 'Auto Bet is off');
        });
        this.toggleAutoBet.isChecked = this.isAutoBetOn;
        GameDataManager.getInstance().registerDataChange(GameDataType.UserData, function(data: UserRoomLogonData) {
            self.updateUserInfoData(data);
        });
        GameDataManager.getInstance().registerDataChange(GameDataType.SettingData, function(data: JZYQ_Setting) {
            self.syncSettingData(data);
        });
        GameDataManager.getInstance().registerDataChange(GameDataType.BetRetData, function(data: JZYQ_BoardCastBet) {
            self.syncBetCoinIntoTable(data);
        });
        GameDataManager.getInstance().registerDataChange(GameDataType.GameResult, function(data: JZYQ_GameResult) {
            self.showGameResult(data);
        });
        GameDataManager.getInstance().registerDataChange(GameDataType.ResultWinData, function(data: JZYQ_GameResultWin) {
            self.showRoundResultWin(data);
        });
        GameDataManager.getInstance().registerDataChange(GameDataType.UserBetRet, function(data: JZYQ_BetResponse) {
            if (data.Code !== JZYQ_ResultCode.JZYQ_ResultCodeSuccess) {
                PopupMessageController.getInstance().showPopupResultCodeMessage(data.Code);
            } else {
                AudioManger.getInstance().playSound(SoundType.PLACE_BET);
                self.updateUserRoundBetData(data);
                self.updateUserMoney(data.Money as Long);
            }
        });
        this.initGlowAreaButton();
        if (callback) {
            callback();
        }
    }

    updateGameStatus (status: GameStatus) {
        super.updateGameStatus(status);
        this.toggleAutoBet.enabled = (status === GameStatus.BET_COUNTDOWN || status === GameStatus.BET_START);
        this.enabelGlowUI(status === GameStatus.BET_COUNTDOWN);
        switch (this.gameStatus) {
            case GameStatus.BET_FINISH:
                this.syncRecordBetData();
                break;
            case GameStatus.BET_START:
                this.clearAllTableBetCoin();
                break;
            case GameStatus.BET_COUNTDOWN:
                if (this.isAutoBetOn) {
                    this.glowAutoBetData();
                }
                break;
        }
    }

    enabelGlowUI(isEnable: boolean) {
        this.arrayBetCoinTemplate.forEach(template => {
            template.enableCoin(isEnable);
        })
        this.arrGlowAreaUIData.forEach(uiData => {
            uiData.btnGlowArea.enabled = isEnable;
        })
    }

    initGlowAreaButton() {
        var self = this;
        this.arrGlowAreaUIData.forEach((uiData, index) => {
            uiData.btnGlowArea.node.on(Button.EventType.CLICK, function() {
                self.sendGlowBetMsg(decodeJZYQ_BetType[uiData.glowType]);
            });
        });
    }

    //#region  Show Round Result Win
    private showRoundResultWin(data: JZYQ_GameResultWin) {
        this.roundWinMoney = ProtoTool.long2Number(data.Win as Long);
    }
    //#endregion

    //#region Update Round Bet Data
    private syncRecordBetData() {
        if (this.nowRoundBetData.length > 0) {
            this.recordBetData.length = 0;
            this.nowRoundBetData.forEach(betData => {
                this.recordBetData.push(betData);
            });
        }
        this.nowRoundBetData.length = 0;
    }
    private updateUserRoundBetData(data: JZYQ_BetResponse) {
        this.nowRoundBetData = data.Bets;
        // console.log('updateUserRoundBetData:', this.nowRoundBetData);
    }

    private glowAutoBetData() {
        this.recordBetData.forEach(betData => {
            let lastGlowZoneBetMoney = ProtoTool.long2Number(betData.Money as Long);
            for (let i = this.arrayBetCoinTemplate.length - 1; i >= 0; i--) {
                const index = i;
                const betCoinMoney = ProtoTool.long2Number(this.arrayBetCoinTemplate[index].betCoin as Long);
                const sendTimes = Math.trunc(lastGlowZoneBetMoney / betCoinMoney);
                if (sendTimes > 0) {
                    const sendBetData: JZYQ_Bet = {
                        Type: betData.Type,
                        Money: this.arrayBetCoinTemplate[index].betCoin
                    }
                    for (let j = 0; j < sendTimes; j++) {
                        GameDataManager.getInstance().sendBetData(sendBetData);
                    }
                }
                lastGlowZoneBetMoney = lastGlowZoneBetMoney % betCoinMoney;
            }
        })
    }
    //#endregion

    //#region 玩家下注成功表演
    
    private clearAllTableBetCoin() {
        this.arrTableBetCoin.forEach(coinItem => {
            coinItem.destroy();
        });
        this.arrTableBetCoin.length = 0;
        this.mapTableUserBetZoneData.clear();
        this.arrayUserBetCoinTableUIData.forEach(uiData => {
            uiData.lblBetTotal.string = '0';
            uiData.nodeBetTotalValue.active = false;
        })
    }

    private syncBetCoinIntoTable (boardCastBetData: JZYQ_BoardCastBet) {
        if (this.gameStatus === GameStatus.WAITING_NEXT_ROUND) {
            return;
        }
        const isUser = boardCastBetData.UserID === GameDataManager.getInstance().UserData.UserID;
        const userOldBetData = this.mapTableUserBetZoneData.get(boardCastBetData.UserID);
        if (boardCastBetData.Bets) {
            boardCastBetData.Bets.forEach(betData => {
                const oldBet = userOldBetData ? userOldBetData.find(bet => bet.Type === betData.Type) : null;
                const oldBetMoney = oldBet ? ProtoTool.long2Number(oldBet.Money as Long) : 0;
                const nowBetMoney = ProtoTool.long2Number(betData.Money as Long);
                if (oldBetMoney !== nowBetMoney) {
                    this.addBetCoinToTable(betData, nowBetMoney, isUser);
                }
            })
            this.mapTableUserBetZoneData.set(boardCastBetData.UserID, boardCastBetData.Bets);
        }
    }

    private addBetCoinToTable(bet: JZYQ_Bet, money: number, isUser: boolean) {
        const tableBetUIData = this.arrayUserBetCoinTableUIData.find(uiData => uiData.type === encodeJZYQ_BetType[bet.Type]);
        if (tableBetUIData) {
            if ((isUser && tableBetUIData.nodeUserCoinZone.children.length < 5) || (!isUser && tableBetUIData.nodeOtherCoinZone.children.length < 5)) {
                const coinItem = instantiate(this.prefabTableBetCoinTemplate);
                coinItem.getComponent(Sprite).spriteFrame = this.arrayBetCoinSpriteFrame[isUser ? 4 : 2];
                const shiftX = 100 - Math.random() * 200;
                const shiftY = Math.random() * 25;
                coinItem.setParent(isUser ? tableBetUIData.nodeUserCoinZone : tableBetUIData.nodeOtherCoinZone);
                coinItem.setPosition(shiftX, shiftY + 50, 0);
                tween().target(coinItem)
                    .by(0.3, { position: new Vec3(0, -50, 0)})
                    .start();
                this.arrTableBetCoin.push(coinItem);
            }
            if (isUser) {
                tableBetUIData.lblBetTotal.string = (money / 100).toString();
                tableBetUIData.nodeBetTotalValue.active = money > 0;
            }
        }
    }

    //#endregion

    //#region 開始表演本局結果
    private showGameResult(data: JZYQ_GameResult) {
        var self = this;
        if (this.gameStatus === GameStatus.BET_SCORE && !GameManager.getInstance().isFirstLogin) {
            VideoController.getInstance().showResult(data.Result.toString(), function(gameResult: string) {
                const isGoal = gameResult.toString().includes('Goal');
                const uiData = self.arrGlowAreaUIData.find(item => item.glowType === encodeJZYQ_BetType[gameResult]);
                self.showResultAreaZone(uiData.nodeGlowResult);
                self.showResultAreaZone(self.arrGlowAreaUIData[isGoal ? 0 : 3].nodeGlowResult);
                if (self.roundWinMoney > 0) {
                    self.winResultHandler.showWinResultHandler(self.roundWinMoney);
                }
            });
        }
    }

    private showResultAreaZone(areaZone: Node) {
        areaZone.active = true;
        tween().target(areaZone)
            .to(0.5, {}, {
                onUpdate: (target: Vec3, ratio: number) => {
                    areaZone.getComponent(UIOpacity).opacity = ratio * 255;
                }
            })
            .delay(0.3)
            .to(0.5, {}, {
                onUpdate: (target: Vec3, ratio: number) => {
                    areaZone.getComponent(UIOpacity).opacity = (1 - ratio) * 255;
                }
            })
            .to(0.5, {}, {
                onUpdate: (target: Vec3, ratio: number) => {
                    areaZone.getComponent(UIOpacity).opacity = ratio * 255;
                }
            })
            .delay(0.5)
            .call(() => {
                areaZone.getComponent(UIOpacity).opacity = 0;
                areaZone.active = false;
            })
            .start();
    }
    //#endregion

    private updateUserInfoData(data: UserRoomLogonData) {
        this.lblUserId.string = 'ID:' + data.UserID;
        this.updateUserMoney(data.CashAmount as Long);
    }

    private updateUserMoney(money: Long) {
        const userCash = ProtoTool.long2Number(money);
        // console.log('updateUserMoney:', userCash);
        const hasDecimal = (userCash % 100) > 0;
        this.lblUserMoney.string = userCash.toString().length > (hasDecimal ? 7 : 9) ? (Intl.NumberFormat().format(Math.trunc(userCash / 100 / 1000)) + 'k') : Intl.NumberFormat().format(userCash / 100);
    }

    private syncSettingData(data: JZYQ_Setting) {
        for (let i = 0; i < data.BetAreas.length; i++) {
            const betArea = data.BetAreas[i];
            const glowAreaUIData = this.arrGlowAreaUIData.find(uiData => uiData.glowType === encodeJZYQ_BetType[betArea.Type]);
            if (glowAreaUIData) {
                glowAreaUIData.lblOddValue.string = 'x' + betArea.Odd.toFixed(2);
            }
        }
        this.createBetCoinTemplate(data.BetCount as Long[]);
    }

    private createBetCoinTemplate(betCount: Long[]) {
        var self = this;
        this.arrayBetCoinTemplate.forEach(template => {
            template.destroy();
        });
        this.arrayBetCoinTemplate.length = 0;
        betCount.forEach((bet, index) => {
            const coinItem = instantiate(this.prefabBetCoin);
            coinItem.setParent(this.scrollViewBetCoin.content);
            const toggleCoin = coinItem.getComponent(Toggle);
            toggleCoin.isChecked = index === this.selectBetCoinIndex;
            const coinTemplate = coinItem.getComponent(CoinTemplate);
            const coinSprite = this.arrayBetCoinSpriteFrame[index % this.arrayBetCoinSpriteFrame.length];
            coinTemplate.setCoinItem(index, bet, coinSprite, function(template: CoinTemplate) {
                AudioManger.getInstance().playSound(SoundType.CHOOSE_CHIP);
                self.arrayBetCoinTemplate[self.selectBetCoinIndex].node.setScale(1, 1, 1);
                self.selectBetCoinIndex = template.id;
                self.setSelectBetCoin(template);
            });
            this.arrayBetCoinTemplate.push(coinTemplate);
        })
        this.setSelectBetCoin(this.arrayBetCoinTemplate[this.selectBetCoinIndex]);
    }

    private setSelectBetCoin(template: CoinTemplate) {
        tween().target(template.node)
            .to(0.2, { scale: new Vec3(1.1, 1.1, 1.1)})
            .start();
    }
    
    private sendGlowBetMsg(betType: JZYQ_BetType) {
        if (this.gameStatus !== GameStatus.BET_COUNTDOWN) {
            return;
        }
        const betData: JZYQ_Bet = {
            Type: betType,
            Money: this.arrayBetCoinTemplate[this.selectBetCoinIndex].betCoin
        }
        GameDataManager.getInstance().sendBetData(betData);
    }
}
