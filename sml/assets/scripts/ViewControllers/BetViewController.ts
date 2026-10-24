import { _decorator, Node, Button, Sprite, Label, math, Prefab, UITransform, Vec2, instantiate, randomRangeInt, js } from 'cc';
import GameManager, { DataType, GameStatus } from '../GameManager';
import { SML_Bet, SML_BetType, SML_BetResponse, SML_Setting, SML_GameResult, SML_StepInfo, SML_Step, SML_BoardCastBet, SML_ResultCode } from '../Proto/Msg/GameMsg_SML';
import { BaseViewController } from './BaseViewController';
import NetworkManager from '../network/NetworkManager';
import { MessageBClassID } from '../Proto/BClass';
import { SML_GameMessageClassID } from '../Proto/Game_SML';
import * as GameConfig from '../Common/GameConfig';
import Long from 'long';
import * as ProtoTool from '../Tools/ProtoTool';
import { GameManagerDataChangedCallback } from '../GameManager';
import { ChipViewController } from './ChipViewController';
import { AudioManger } from '../../framework/common/AudioManager';
const { ccclass, property } = _decorator;

enum BetItems {
    GoalLeft,
    GoalMiddle,
    GoalRight,
    Goal,
    SaveLeft,
    SaveMiddle,
    SaveRight,
    Save,
}

/**
 * 下注項目佈局介面
 */
@ccclass('BetItemView')
export class BetItemView {
    @property(Sprite)
    public highlightSprite: Sprite;

    @property(Button)
    public betButton: Button;

    @property(Label)
    public betTitleLabel: Label;

    @property(Label)
    public bonusRateLabel: Label;

    @property(Node)
    public betCoinContainer: Node;

    @property(Node)
    public userBetCoinContainer: Node;

    @property(Node)
    public userBetInfoContainer: Node;

    @property(Label)
    public userBetValueLabel: Label;
}

const kBetCoinSize: number = 150 * 0.3;

const kBetCoinScale: number = 0.3;

const kMaxNumberOfBetCoinInArea: number = 5;

/**
 * 下注佈局介面控制器
 */
@ccclass('BetViewController')
export class BetViewController extends BaseViewController implements GameManagerDataChangedCallback {
    
    @property([BetItemView])
    public betItemViews: [BetItemView];

    @property(Prefab)
    public betCoinPrefab: Prefab;

    private availableBetValues: number[] = [];

    private betTypeMinMap: Map<SML_BetType, Long> = new Map<SML_BetType, Long>();

    private betTypeMaxMap: Map<SML_BetType, Long> = new Map<SML_BetType, Long>();

    private isAbleToBet: boolean = false;

    private isLightOn: boolean = true;

    private minAlpha: number = 0.4;

    private maxAlpha: number = 1;

    private alpha: number = 0;

    private step: number = 0.04;

    private userBets: Map<number, SML_Bet[]> = new Map<number, SML_Bet[]>();

    private lastBetMoneyMap: Map<SML_BetType, number> = new Map<SML_BetType, number>();

    private currentGameResultData: SML_GameResult;

    //#region Overrides
    onLoad() {
        super.onLoad();
        this.init();
    }

    init() {
        super.init();

        var self = this;

        this.betItemViews.forEach((betItemView, index) => {
            betItemView.betButton.node.on(Button.EventType.CLICK, function() {
                self.onBetButtonClick(index);
            }, this);
        });
        
        GameManager.sharedInstance().registerOnDataChangedEvent(DataType.SettingData, this);
        GameManager.sharedInstance().registerOnDataChangedEvent(DataType.StepData, this);
        GameManager.sharedInstance().registerOnDataChangedEvent(DataType.GameResultData, this);
        GameManager.sharedInstance().registerOnDataChangedEvent(DataType.BoardcastData, this);
        GameManager.sharedInstance().registerOnDataChangedEvent(DataType.BetRetData, this);
    }

    update(deltaTime: number) {
        super.update(deltaTime);
        if (this.isLightOn) {
            if (this.alpha < this.maxAlpha) {
                this.alpha += this.step;
                if (this.alpha >= this.maxAlpha) {
                    this.alpha = this.maxAlpha;
                    this.isLightOn = !this.isLightOn;
                }
            }
        } else {
            if (this.alpha > this.minAlpha) {
                this.alpha -= this.step;
                if (this.alpha <= this.minAlpha) {
                    this.alpha = this.minAlpha;
                    this.isLightOn = !this.isLightOn;
                }
            }
        }
        this.betItemViews.forEach((betItemView, index) => {
            if (betItemView.highlightSprite.enabled) {
                betItemView.highlightSprite.color = new math.Color(255, 255, 255, this.alpha * 255);
            }
        });
      
    }

    onGameStatusChanged(gameStatus: GameStatus) {
        super.onGameStatusChanged(gameStatus);

        
        switch (gameStatus) {
            case GameStatus.ShowResult:
                if (this.currentGameResultData != null) {
                    var indexOfBetType = 0;
                    switch (this.currentGameResultData.Result) {
                        case SML_BetType.SML_BetTypeGoalLeft: indexOfBetType = BetItems.GoalLeft; break;
                        case SML_BetType.SML_BetTypeGoalMiddle: indexOfBetType = BetItems.GoalMiddle; break;
                        case SML_BetType.SML_BetTypeGoalRight: indexOfBetType = BetItems.GoalRight; break;
                        case SML_BetType.SML_BetTypeSaveLeft: indexOfBetType = BetItems.SaveLeft; break;
                        case SML_BetType.SML_BetTypeSaveMiddle: indexOfBetType = BetItems.SaveMiddle; break;
                        case SML_BetType.SML_BetTypeSaveRight: indexOfBetType = BetItems.SaveRight; break;
                    }
    
                    this.betItemViews.forEach((betItemView, index) => {
                        if ((index + 1) % 4 == 0) {
                            let min = (((index + 1) / 4) - 1) * 4;
                            let max = index + 1;
                            betItemView.highlightSprite.enabled = indexOfBetType >= min && indexOfBetType < max;
                        } else {
                            betItemView.highlightSprite.enabled = index == indexOfBetType;
                        }
                    });
                }
                break;
        }
    }
    //#endregion

    //#region Events
    private onBetButtonClick(index: number) {
        if (!this.isAbleToBet) {
            return;
        }

        AudioManger.sharedInstance().playSound(3, false, false, 1);
        
        var betType: SML_BetType;

        switch (index as BetItems) {
            case BetItems.GoalLeft: betType = SML_BetType.SML_BetTypeGoalLeft; break;
            case BetItems.GoalMiddle: betType = SML_BetType.SML_BetTypeGoalMiddle; break;
            case BetItems.GoalRight: betType = SML_BetType.SML_BetTypeGoalRight; break;
            case BetItems.Goal: betType = SML_BetType.SML_BetTypeGoal; break;
            case BetItems.SaveLeft: betType = SML_BetType.SML_BetTypeSaveLeft; break;
            case BetItems.SaveMiddle: betType = SML_BetType.SML_BetTypeSaveMiddle; break;
            case BetItems.SaveRight: betType = SML_BetType.SML_BetTypeSaveRight; break;
            case BetItems.Save: betType = SML_BetType.SML_BetTypeSave; break;
        }
        
        if (this.betTypeMinMap.has(betType) && GameManager.sharedInstance().betCoin < this.betTypeMinMap.get(betType)
        || this.betTypeMaxMap.has(betType) && GameManager.sharedInstance().betCoin > this.betTypeMaxMap.get(betType)) {
            // todo:jason 投注範圍超出限制
            // console.log("投注範圍超出限制:");
            return;
        }

        let betData: SML_Bet = {
            Type: betType,
            Money: GameManager.sharedInstance().betCoin,
        }
        NetworkManager.getInstance().sendMsgData(MessageBClassID.Game, SML_GameMessageClassID.SMLBetID, { Bet: betData });
    }
    //#endregion

    //#region Private functions
    private addBetCoinToArea(bet: SML_Bet) {
        
        var indexOfBetItemView: number = 0;
        switch (bet.Type) {
            case SML_BetType.SML_BetTypeGoalLeft:
                indexOfBetItemView = 0;
                break;
            case SML_BetType.SML_BetTypeGoalMiddle:
                indexOfBetItemView = 1;
                break;
            case SML_BetType.SML_BetTypeGoalRight:
                indexOfBetItemView = 2;
                break;
            case SML_BetType.SML_BetTypeGoal:
                indexOfBetItemView = 3;
                break;
            case SML_BetType.SML_BetTypeSaveLeft:
                indexOfBetItemView = 4;
                break;
            case SML_BetType.SML_BetTypeSaveMiddle:
                indexOfBetItemView = 5;
                break;
            case SML_BetType.SML_BetTypeSaveRight:
                indexOfBetItemView = 6;
                break;
            case SML_BetType.SML_BetTypeSave:
                indexOfBetItemView = 7;
                break;
        }

        var indexOfBetCoin: number = 0;
        for (var i = 0; i < this.availableBetValues.length; i++) {
            if (ProtoTool.long2Number(bet.Money as Long) === this.availableBetValues[i]) {
                indexOfBetCoin = i;
                break;
            }
        }

        var betItemView: BetItemView = this.betItemViews[indexOfBetItemView];
        if (betItemView.betCoinContainer.children.length > kMaxNumberOfBetCoinInArea) {
            return;
        }

        let uiTransform = betItemView.betCoinContainer.getComponent(UITransform);
        let contentSize = uiTransform.contentSize;
        let availableSize = new math.Size(contentSize.width - kBetCoinSize, contentSize.height - kBetCoinSize);
        
        var betCoinPosition: Vec2 = new Vec2(-availableSize.width * 0.5 + randomRangeInt(0, availableSize.width), -availableSize.height * 0.5 + randomRangeInt(0, availableSize.height));
        
        let betCoinPrefab = instantiate(this.betCoinPrefab);
        betCoinPrefab.setScale(kBetCoinScale, kBetCoinScale, kBetCoinScale);
        betCoinPrefab.setPosition(betCoinPosition.x, betCoinPosition.y, 0);
        betItemView.betCoinContainer.addChild(betCoinPrefab);
        
        let chipViewController = betCoinPrefab.getComponent(ChipViewController);
        chipViewController.setData(bet.Money as Long, indexOfBetCoin);
    }

    private addBetCoinToUserArea(bet: SML_Bet) {

        var indexOfBetItemView: number = 0;
        switch (bet.Type) {
            case SML_BetType.SML_BetTypeGoalLeft:
                indexOfBetItemView = 0;
                break;
            case SML_BetType.SML_BetTypeGoalMiddle:
                indexOfBetItemView = 1;
                break;
            case SML_BetType.SML_BetTypeGoalRight:
                indexOfBetItemView = 2;
                break;
            case SML_BetType.SML_BetTypeGoal:
                indexOfBetItemView = 3;
                break;
            case SML_BetType.SML_BetTypeSaveLeft:
                indexOfBetItemView = 4;
                break;
            case SML_BetType.SML_BetTypeSaveMiddle:
                indexOfBetItemView = 5;
                break;
            case SML_BetType.SML_BetTypeSaveRight:
                indexOfBetItemView = 6;
                break;
            case SML_BetType.SML_BetTypeSave:
                indexOfBetItemView = 7;
                break;
        }

        var betItemView: BetItemView = this.betItemViews[indexOfBetItemView];
        if (betItemView.userBetCoinContainer.children.length < kMaxNumberOfBetCoinInArea) {

            let uiTransform = betItemView.userBetCoinContainer.getComponent(UITransform);
            let contentSize = uiTransform.contentSize;
            let availableSize = new math.Size(contentSize.width - kBetCoinSize, contentSize.height - kBetCoinSize);
            
            var betCoinPosition: Vec2 = new Vec2(-availableSize.width * 0.5 + randomRangeInt(0, availableSize.width), -availableSize.height * 0.5 + randomRangeInt(0, availableSize.height));
            
            let betCoinPrefab = instantiate(this.betCoinPrefab);
            betCoinPrefab.setScale(kBetCoinScale, kBetCoinScale, kBetCoinScale);
            betCoinPrefab.setPosition(betCoinPosition.x, betCoinPosition.y, 0);
            betItemView.userBetCoinContainer.addChild(betCoinPrefab);

            var indexOfBetCoin: number = 0;
            for (var i = 0; i < this.availableBetValues.length; i++) {
                if (ProtoTool.long2Number(bet.Money as Long) === this.availableBetValues[i]) {
                    indexOfBetCoin = i;
                    break;
                }
            }
            
            let chipViewController = betCoinPrefab.getComponent(ChipViewController);
            chipViewController.setData(bet.Money as Long, indexOfBetCoin);
        }
    }
    //#endregion

    //#region GameManagerDataChangedCallback
    public onGameManagerDataChanged(dataType: DataType, data: any): void {
        switch (dataType) {
            case DataType.BetRetData: {
                let betRetData = data as SML_BetResponse;
                if (betRetData.Code != null && betRetData.Code === SML_ResultCode.SML_ResultCodeSuccess) {
                    if (betRetData.Bets != null) {
                        betRetData.Bets.forEach((bet) => {
                            if (!this.lastBetMoneyMap.has(bet.Type)) {
                                this.lastBetMoneyMap.set(bet.Type, 0);
                            }
                            let oldMoney = this.lastBetMoneyMap.get(bet.Type);
                            let totalUserBetMoney = ProtoTool.long2Number(bet.Money as Long);
                            if (totalUserBetMoney !== oldMoney) {
                                let currentBetMoney = totalUserBetMoney - this.lastBetMoneyMap.get(bet.Type);
                                this.lastBetMoneyMap.set(bet.Type, totalUserBetMoney);
                                let betData = {
                                    Type: bet.Type,
                                    Money: Long.fromNumber(currentBetMoney)
                                };
                                this.addBetCoinToUserArea(betData);
                            }
                        });
                    }
                }
                break;
            }
            case DataType.BoardcastData: {
                let boardcastData = data as SML_BoardCastBet;

                var userBets = this.userBets.get(boardcastData.UserID);
                
                if (boardcastData.Bets != null) {
                    boardcastData.Bets.forEach((betData, index) => {
                        const oldBet = userBets ? userBets.find(bet => bet.Type === betData.Type) : null;
                        const oldBetMoney = oldBet ? ProtoTool.long2Number(oldBet.Money as Long) : 0;
                        const nowBetMoney = ProtoTool.long2Number(betData.Money as Long);
                        if (oldBetMoney !== nowBetMoney) {
                            if (boardcastData.UserID === GameConfig.getUserId()) {
                                var indexOfBetItemView: number = 0;
                                switch (betData.Type) {
                                    case SML_BetType.SML_BetTypeGoalLeft:
                                        indexOfBetItemView = 0;
                                        break;
                                    case SML_BetType.SML_BetTypeGoalMiddle:
                                        indexOfBetItemView = 1;
                                        break;
                                    case SML_BetType.SML_BetTypeGoalRight:
                                        indexOfBetItemView = 2;
                                        break;
                                    case SML_BetType.SML_BetTypeGoal:
                                        indexOfBetItemView = 3;
                                        break;
                                    case SML_BetType.SML_BetTypeSaveLeft:
                                        indexOfBetItemView = 4;
                                        break;
                                    case SML_BetType.SML_BetTypeSaveMiddle:
                                        indexOfBetItemView = 5;
                                        break;
                                    case SML_BetType.SML_BetTypeSaveRight:
                                        indexOfBetItemView = 6;
                                        break;
                                    case SML_BetType.SML_BetTypeSave:
                                        indexOfBetItemView = 7;
                                        break;
                                }

                                var betItemView: BetItemView = this.betItemViews[indexOfBetItemView];
                                
                                betItemView.userBetValueLabel.string = js.formatStr("%d", ProtoTool.long2Number(betData.Money as Long) / 100);
                                betItemView.userBetInfoContainer.active = true;
                            } else {
                                this.addBetCoinToArea(betData);
                            }
                        }
                    });
                    this.userBets.set(boardcastData.UserID, boardcastData.Bets);
                }
                break;
            }
            case DataType.SettingData: {
                let settingData = data as SML_Setting;
                this.availableBetValues = [];
                settingData.BetCount.forEach((value, index) => {
                    this.availableBetValues.push(ProtoTool.long2Number(value as Long));
                });

                let betItemViewTypes = [
                    SML_BetType.SML_BetTypeGoalLeft,
                    SML_BetType.SML_BetTypeGoalMiddle,
                    SML_BetType.SML_BetTypeGoalRight,
                    SML_BetType.SML_BetTypeGoal,
                    SML_BetType.SML_BetTypeSaveLeft,
                    SML_BetType.SML_BetTypeSaveMiddle,
                    SML_BetType.SML_BetTypeSaveRight,
                    SML_BetType.SML_BetTypeSave,
                ];
                settingData.BetAreas.forEach((betArea, index) => {
                    this.betTypeMinMap.set(betArea.Type, betArea.MinBet as Long);
                    this.betTypeMaxMap.set(betArea.Type, betArea.MaxBet as Long);

                    for (var i = 0; i < betItemViewTypes.length; ++i) {
                        if (betItemViewTypes[i] === betArea.Type) {
                            this.betItemViews[i].bonusRateLabel.string = betArea.Odd.toFixed(2).toString();
                            break;
                        }
                    }
                });
                break;
            }
            case DataType.GameResultData: {
                let gameResultData = data as SML_GameResult;
                this.currentGameResultData = gameResultData;
                
                // var indexOfBetType = 0;
                // switch (gameResultData.Result) {
                //     case SML_BetType.SML_BetTypeGoalLeft: indexOfBetType = BetItems.GoalLeft; break;
                //     case SML_BetType.SML_BetTypeGoalMiddle: indexOfBetType = BetItems.GoalMiddle; break;
                //     case SML_BetType.SML_BetTypeGoalRight: indexOfBetType = BetItems.GoalRight; break;
                //     case SML_BetType.SML_BetTypeSaveLeft: indexOfBetType = BetItems.SaveLeft; break;
                //     case SML_BetType.SML_BetTypeSaveMiddle: indexOfBetType = BetItems.SaveMiddle; break;
                //     case SML_BetType.SML_BetTypeSaveRight: indexOfBetType = BetItems.SaveRight; break;
                // }

                // this.betItemViews.forEach((betItemView, index) => {
                //     if ((index + 1) % 4 == 0) {
                //         let min = (((index + 1) / 4) - 1) * 4;
                //         let max = index + 1;
                //         betItemView.highlightSprite.enabled = indexOfBetType >= min && indexOfBetType < max;
                //     } else {
                //         betItemView.highlightSprite.enabled = index == indexOfBetType;
                //     }
                // });
                break;
            }
            case DataType.StepData: {
                let stepData = data as SML_StepInfo;
                if (stepData.Step != SML_Step.SML_StepShowAward) {
                    this.betItemViews.forEach((betItemView, index) => {
                        betItemView.highlightSprite.enabled = false;
                    });
                }

                this.isAbleToBet = stepData.Step === SML_Step.SML_StepWaitBet;
                
                if (stepData.Step === SML_Step.SML_StepFinish) {
                    this.betItemViews.forEach((betItemView, index) => {
                        betItemView.betCoinContainer.removeAllChildren();
                        betItemView.userBetCoinContainer.removeAllChildren();
                        betItemView.userBetInfoContainer.active = false;
                    });
                    this.userBets.clear();

                    this.currentGameResultData = null;
                }

                if (stepData.Step === SML_Step.SML_StepStart) {
                    this.lastBetMoneyMap.clear();
                }

                switch (stepData.Step) {
                    case SML_Step.SML_StepPrepare:
                    case SML_Step.SML_StepWaitBet:
                    case SML_Step.SML_StepStart:
                    case SML_Step.SML_StepFinish:
                        
                        break;
                }
                break;
            }
        }
        
    }
    //#endregion

}

