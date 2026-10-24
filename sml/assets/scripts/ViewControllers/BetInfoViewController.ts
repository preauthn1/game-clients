import { _decorator, Node, Label, EventHandler, ToggleContainer, Toggle, Prefab, instantiate, js, tween, Vec3 } from 'cc';
import GameManager, { DataType } from '../GameManager';
import { BaseViewController } from './BaseViewController';
import { ChipViewController } from './ChipViewController';
import { GameManagerDataChangedCallback } from '../GameManager';
import { SML_Bet, SML_BetResponse, SML_BetType, SML_GameResultWin, SML_ResultCode, SML_Setting, SML_Step, SML_StepInfo } from '../Proto/Msg/GameMsg_SML';
import * as ProtoTool from '../Tools/ProtoTool';
import * as GameConfig from '../Common/GameConfig';
import Long from 'long';
import { UserStateChange } from '../Proto/Msg/gameMsg';
import { UserRoomLogonData } from '../Proto/Msg/gameRoomMsg';
import { MessageBClassID } from '../Proto/BClass';
import NetworkManager from '../network/NetworkManager';
import { SML_GameMessageClassID } from '../Proto/Game_SML';
import { AudioManger } from '../../framework/common/AudioManager';
const { ccclass, property } = _decorator;

/**
 * 下注資訊佈局介面控制器
 */
@ccclass('BetInfoViewController')
export class BetInfoViewController extends BaseViewController implements GameManagerDataChangedCallback {

    @property(Label)
    public idTitleLabel: Label;

    @property(Label)
    public idLabel: Label;

    @property(Label)
    public goldLabel: Label;

    @property(ToggleContainer)
    public coinToggleContainer: ToggleContainer;

    @property(Prefab) 
    public coinPrefabs: Prefab;

    @property(Toggle)
    public autoBetToggle: Toggle;

    private isAutoBet: boolean = false;

    private roundBetMap: SML_Bet[] = [];

    private currentBetMap: SML_Bet[] = [];

    private isBetGoal: boolean = false;

    private isBetSave: boolean = false;

    onLoad() {
        super.onLoad();
        this.init();
    }

    init() {
        super.init();

        var eventHandler: EventHandler;

        eventHandler = new EventHandler();
        eventHandler.target = this.node;
        eventHandler.component = "BetInfoViewController";
        eventHandler.handler = "onCoinSelectedChanged";
        this.coinToggleContainer.checkEvents.push(eventHandler);

        this.autoBetToggle.node.on(Toggle.EventType.TOGGLE, this.onAutoBetToggleStatusChanged, this);

        GameManager.sharedInstance().registerOnDataChangedEvent(DataType.UserStateChangedData, this);
        GameManager.sharedInstance().registerOnDataChangedEvent(DataType.UserRoomLogonData, this);
        GameManager.sharedInstance().registerOnDataChangedEvent(DataType.SettingData, this);
        GameManager.sharedInstance().registerOnDataChangedEvent(DataType.BetRetData, this);
        GameManager.sharedInstance().registerOnDataChangedEvent(DataType.StepData, this);
        GameManager.sharedInstance().registerOnDataChangedEvent(DataType.GameResultWinData, this);
        
    }

    ////////////////////////////////////////////////////////////////////////////////
    // Private functions
    ////////////////////////////////////////////////////////////////////////////////
    private setUserGold(userCash: number) {
        const hasDecimal = (userCash % 100) > 0;
        this.goldLabel.string = userCash.toString().length > (hasDecimal ? 7 : 9) ? (Intl.NumberFormat().format(Math.trunc(userCash / 100 / 1000)) + 'k') : Intl.NumberFormat().format(userCash / 100);
    }

    private setUserId(value: number) {
        this.idLabel.string = js.formatStr("%d", value);
    }

    ////////////////////////////////////////////////////////////////////////////////
    // Events
    ////////////////////////////////////////////////////////////////////////////////
    private onCoinSelectedChanged(event: Event) {
        let targetCoinNode = ((event.target as unknown) as Node);
        var chipViewController = targetCoinNode.getComponent(ChipViewController);
        GameManager.sharedInstance().betCoin = chipViewController.betCoin;
        this.coinToggleContainer.node.children.forEach((node) => {
            if (node) {
                node.setScale(1, 1, 1);
            }
        });
        tween().target(targetCoinNode)
            .to(0.3, { scale: new Vec3(1.1, 1.1, 1.1) })
            .start();
        AudioManger.sharedInstance().playSound(4, false, false, 1);
    }

    private onAutoBetToggleStatusChanged(event: Event) {
        var autoBetToggle = (event.target as unknown as Node).getComponent(Toggle);
        this.isAutoBet = autoBetToggle.isChecked;
        GameManager.sharedInstance().showPopMessage(GameConfig.getMessageLocation(this.isAutoBet ? 'AutoBetOn' : 'AutoBetOff'));
        AudioManger.sharedInstance().playSound(0, false, false, 1);
    }

    ////////////////////////////////////////////////////////////////////////////////
    // GameManagerDataChangedCallback
    ////////////////////////////////////////////////////////////////////////////////
    public onGameManagerDataChanged(dataType: DataType, data: any): void {
        switch (dataType) {
            case DataType.UserStateChangedData: {
                let userStateChangedData = data as UserStateChange;
                if (userStateChangedData.User.UserID === GameConfig.getUserId()) {
                    this.setUserGold(ProtoTool.long2Number(userStateChangedData.User.Score as Long));
                }
                break;
            }
            case DataType.StepData: {
                let stepData = data as SML_StepInfo;
                switch (stepData.Step) {
                    case SML_Step.SML_StepWaitBet: {
                        this.isBetGoal = false;
                        this.isBetSave = false;

                        // 當要自動下注時，將上一次有效下注回合內紀錄的下注資料再重新送出
                        if (this.isAutoBet) {
                            
                            this.roundBetMap.forEach((bet, index) => {

                                var remainMoney = ProtoTool.long2Number(bet.Money as Long);
                                while (remainMoney > 0) {
                                    for (var i = this.coinToggleContainer.node.children.length - 1; i >= 0; --i) {
                                        let chipViewController = this.coinToggleContainer.node.children[i].getComponent(ChipViewController);
                                        let betCoin = ProtoTool.long2Number(chipViewController.betCoin);
                                        if (remainMoney >= betCoin) {
                                            let numberOfBetCoinCount = Math.floor(remainMoney / betCoin);
                                            
                                            for (var numberOfBetCoin = 0; numberOfBetCoin < numberOfBetCoinCount; ++numberOfBetCoin) {
                                                let betData: SML_Bet = {
                                                    Type: bet.Type,
                                                    Money: Long.fromNumber(betCoin),
                                                }
                                                NetworkManager.getInstance().sendMsgData(MessageBClassID.Game, SML_GameMessageClassID.SMLBetID, { Bet: betData });
                                            }
                                            
                                            remainMoney -= betCoin * numberOfBetCoinCount;
                                        }
                                    }
                                }

                                // let betData: SML_Bet = {
                                //     Type: bet.Type,
                                //     Money: bet.Money,
                                // }
                                // NetworkManager.getInstance().sendMsgData(MessageBClassID.Game, SML_GameMessageClassID.SMLBetID, { Bet: betData });
                            });
                        }
                        break;
                    }
                    case SML_Step.SML_StepStart: {
                        this.currentBetMap = [];
                        break;
                    }
                    case SML_Step.SML_StepFinish: {
                        if (this.currentBetMap.length > 0) {
                            this.roundBetMap = [];
                            this.currentBetMap.forEach((bet, index) => {
                                this.roundBetMap.push(bet);
                            });
                        }
                        break;
                    }
                }
                break;
            }
            case DataType.UserRoomLogonData: {
                let userRoomLogonData = data as UserRoomLogonData;
                this.setUserId(userRoomLogonData.UserID);
                this.setUserGold(ProtoTool.long2Number(userRoomLogonData.CashAmount as Long));
                break;
            }
            case DataType.BetRetData: {
                let betRetData = data as SML_BetResponse
                switch (betRetData.Code) {
                    case SML_ResultCode.SML_ResultCodeSuccess:
                        this.setUserGold(ProtoTool.long2Number(betRetData.Money as Long));

                        this.currentBetMap = [];
                        betRetData.Bets.forEach((bet, index) => {
                            this.currentBetMap.push(bet);

                            if (bet.Type === SML_BetType.SML_BetTypeGoal) {
                                this.isBetGoal = true;
                            }
                            if (bet.Type === SML_BetType.SML_BetTypeSave) {
                                this.isBetSave = true;
                            }
                        });
                        break;
                    case SML_ResultCode.SML_ResultCodeAlreadyBetOtherSide:
                    case SML_ResultCode.SML_ResultCodeMoneyNotEnough:
                    case SML_ResultCode.SML_ResultCodeCarryMoneyNotEnough:
                    case SML_ResultCode.SML_ResultCodeIllegalBetType:
                    case SML_ResultCode.SML_ResultCodeIllegalBetMoney:
                    case SML_ResultCode.SML_ResultCodeNotBetStep:
                    case SML_ResultCode.SML_ResultCodeInvalidArgument:
                    case SML_ResultCode.SML_ResultCodeInternalError:
                    case SML_ResultCode.SML_ResultCodeBetTypeOverLimit:
                        GameManager.sharedInstance().showPopMessage(GameConfig.i18nValue("labeltext." + betRetData.Code.toString()));
                        break;
                }
                break;
            }
            case DataType.GameResultWinData: {
                let gameResultWinData = data as SML_GameResultWin;
                if (gameResultWinData.StageUserInfo != null) {
                    gameResultWinData.StageUserInfo.forEach((userInfo, index) => {
                        if (userInfo.UserID != GameConfig.getUserId()) return;
    
                        this.setUserGold(ProtoTool.long2Number(userInfo.Money as Long));
                    });
                }
                break;
            }
            case DataType.SettingData: {
                let settingData = data as SML_Setting;

                // 研判當前所選擇的籌碼是否還在有效範圍內
                var isCurrentBetCoinAllowed: boolean = false;
                
                // 移除當前的全部籌碼
                this.coinToggleContainer.node.removeAllChildren();

                // 添加系統設置的有效籌碼
                settingData.BetCount.forEach((item, index) => {
                    let coinPrefab = instantiate(this.coinPrefabs);
                    let chipViewController = coinPrefab.getComponent(ChipViewController);
                    chipViewController.setData(item as Long, index);
                    this.coinToggleContainer.node.addChild(coinPrefab);

                    if (!isCurrentBetCoinAllowed) {
                        isCurrentBetCoinAllowed = GameManager.sharedInstance().betCoin === chipViewController.betCoin;
                    }
                });

                if (!isCurrentBetCoinAllowed && this.coinToggleContainer.node.children.length > 0) {
                    // 預設使用第一個籌碼
                    let firstChipViewController = this.coinToggleContainer.node.children[0].getComponent(ChipViewController);
                    firstChipViewController.node.setScale(1.1, 1.1, 1.1);
                    GameManager.sharedInstance().betCoin = firstChipViewController.betCoin;
                }
                break;
            }
        }
    }
}

