import { _decorator, Component, Vec3, Node, Label, Prefab, instantiate, SpriteFrame, ToggleContainer, EventHandler, Event, Button, UITransform, tween, Size, size, UIOpacity, Toggle, ToggleComponent, math } from 'cc';
import Long from 'long';
import * as GameConfig from './Common/GameConfig'
import { BaseHander } from './BaseHander';
import * as ICallback from './Data/ICallback';
import GameDataManager from './GameDataManager';
import { LHD_BroadCastBetArr, LHD_Setting, LHD_Bet, LHD_BetRet, LHD_GameResultPoker, LHD_GameResultUserMoney, BetArea } from './Proto/Msg/gameMsg_LHD';
import * as ProtoTool from './Tools/ProtoTool';
import { CoinTemplate } from './template/CoinTemplate';
import { ShowCoinTemplate } from './template/ShowCoinTemplate';
import { AudioManger } from './AudioManger';
import { ShowMoneyTemplate } from './template/ShowMoneyTemplate';
import { MessageHandler } from './MessageHandler';
const { ccclass, property } = _decorator;

@ccclass('BetValueProperty')
class BetValueProperty {
    @property(Label)
    public lblTotalBet: Label;
    @property(Label)
    public lblUserBet: Label;
}

/**
 * 下注桌面控制
 * 籌碼事件、下注表演、下注功能、AUTOBET
 */
@ccclass('GlowHandler')
export class GlowHandler extends BaseHander {
    @property({ group: { name: 'UserData', id: '0', displayOrder: 1}, type: Label})
    public lblUserId: Label;
    @property({ group: { name: 'UserData', id: '0', displayOrder: 1}, type: Label})
    public lblUserMoney: Label;

    @property(BetValueProperty)
    public arrayBetValue: BetValueProperty[] = [];

    @property({ group: { name: 'BetChip', id: '1', displayOrder: 2}, type: ToggleContainer})
    public toggleBetContent: ToggleContainer;
    @property({ group: { name: 'BetChip', id: '1', displayOrder: 2}, type: Prefab})
    public prefabBetItem: Prefab;
    @property({ group: { name: 'BetChip', id: '1', displayOrder: 2}, type: SpriteFrame})
    public arrayChipSprite: SpriteFrame[] = [];


    @property({ group: { name: 'TableGlow', id: '2', displayOrder: 3}, type: Button})
    public arraybtnGlow: Button[] = [];
    @property({ group: { name: 'TableChip', id: '3', displayOrder: 4}, type: Node})
    public nodeOtherBetPos: Node;
    @property({ group: { name: 'TableChip', id: '3', displayOrder: 4}, type: Node})
    public nodeDealer: Node;
    @property({ group: { name: 'TableChip', id: '3', displayOrder: 4}, type: Node})
    public nodeUserRecycleMoney: Node;

    private arrBetCount: number[] = [];
    private arrayBetItems: CoinTemplate[] = [];

    @property({ group: { name: 'TableChip', id: '3', displayOrder: 4}, type: Prefab})
    public prefabShowCoinItem: Prefab;
    @property({ group: { name: 'TableChip', id: '3', displayOrder: 4}, type: Node})
    public nodeShowWinMoney: Node;
    @property({ group: { name: 'TableChip', id: '3', displayOrder: 4}, type: Prefab})
    public prefabShowWinMoney: Prefab;

    @property(Toggle)
    public toggleAutoBet: Toggle;

    @property(Label)
    public arrlblGlowOddsUI: Label[] = [];

    private selectBetTemplate: CoinTemplate;

    private winGlowIndex = -1;
    private roundSelfWinMoney = 0;

    private arrayTableBetItem = {};
    private arrUserTableBetItem = {};
    private arrayTotalBet: number[] = [0, 0, 0];
    private arrayUserBet: number[] = [0, 0, 0];

    private isAutoBet = false;
    private autoBetData: LHD_Bet[] = [];
    private roundBetData: LHD_Bet[] = [];

    start() {
        super.start();
    }

    update(deltaTime: number) {
        
    }

    updateBetCoinStatus (isEnable: boolean) {
        this.arrayBetItems.forEach(item => {
            item.node.getComponent(Toggle).enabled = isEnable;
        })
        this.toggleAutoBet.enabled = isEnable;
        this.arraybtnGlow.forEach(button => {
            button.enabled = isEnable;
        })
    }

    updateGameStatus (status: ICallback.GameStatus) {
        super.updateGameStatus(status);
        switch (this.gameStatus) {
            case ICallback.GameStatus.LOGIN:
                this.lblUserId.string = 'ID:' + GameDataManager.getInstance().UserData.UserID;
                this.updateUserMoney(GameDataManager.getInstance().UserData.CashAmount as Long);
                break;
            case ICallback.GameStatus.BET_START:
                this.resetBetValue();
                this.updateBetCoinStatus(true);
                if (this.isAutoBet) {
                    this.sendAutoBetCoin();
                }
                break;
            case ICallback.GameStatus.BET_COUNTDOWN:
                this.updateBetCoinStatus(true);
                break;
            case ICallback.GameStatus.BET_END:
                this.updateBetCoinStatus(false);
                break;
            case ICallback.GameStatus.BET_SCORE:
                this.showTableGlowAni();
                break;
            case ICallback.GameStatus.BET_FINISH:
                if (this.roundBetData.length > 0) {
                    this.autoBetData.length = 0;
                    this.roundBetData.forEach(data => {
                        this.autoBetData.push(data);
                    })
                }
                this.showSelfWinMoney();
                break;
            case ICallback.GameStatus.RELOADING:
                //TODO
                break;
        }
    }

    init() {
        super.init();
        var self = this;
        this.resetBetValue();
        this.toggleAutoBet.node.on('toggle', this.onAutoBetChanged, this);
        GameDataManager.getInstance().registerDataChange(ICallback.GameDataType.BetData, function(data: any) {
            self.syncBetData(data as LHD_BroadCastBetArr);
        })
        GameDataManager.getInstance().registerDataChange(ICallback.GameDataType.BetRetData, function(data: any) {
            self.updateUserBetRetData(data as LHD_BetRet);
        })
        GameDataManager.getInstance().registerDataChange(ICallback.GameDataType.UserData, function(data: any) {
            self.updateUserMoney(GameDataManager.getInstance().UserData.CashAmount as Long)
        })
        GameDataManager.getInstance().registerDataChange(ICallback.GameDataType.PokerResult, function(data: any) {
            self.setWinGlowIndex(data as LHD_GameResultPoker);
        })
        GameDataManager.getInstance().registerDataChange(ICallback.GameDataType.ResultWinData, function(data: any) {
            self.setRoundSelfWinMoney(data as LHD_GameResultUserMoney);
        })
        this.addToggleEvent();
        this.initGlowButton();
    }

    onAutoBetChanged(toggle: ToggleComponent) {
        this.isAutoBet = toggle.isChecked;
        MessageHandler.getInstance().showPopMessage(GameConfig.getMessageLocation(this.isAutoBet ? 'AutoBetOn' : 'AutoBetOff'));
    }

    initGlowButton() {
        var self = this;
        this.arraybtnGlow.forEach((button, index) => {
            const clickIndex = index + 1;
            button.node.on(Button.EventType.CLICK, function() {
                self.sendGlowMessage(clickIndex);
            })
        })
    }

    sendAutoBetCoin() {
        this.autoBetData.forEach(item => {
            GameDataManager.getInstance().sendBetData(item);
        })
    }

    checkBothBet (index: number) {
        let bothBet = false;
        if (index !== 2) {
            const roundIndex = this.roundBetData.findIndex(data => data.BetType === (index === 1 ? 3 : 1));
            bothBet = roundIndex !== -1;
        }
        return bothBet;
    }

    sendGlowMessage (index: number) {
        if (this.gameStatus === ICallback.GameStatus.BET_START || this.gameStatus === ICallback.GameStatus.BET_COUNTDOWN) {
            if (this.checkBothBet(index)) {
                MessageHandler.getInstance().showPopMessage(GameConfig.getMessageLocation('BetBothDT'));
                return;
            } 
            AudioManger.getInstance().playSound(ICallback.SoundType.BUTTON_CLICK);
            const betData: LHD_Bet = {
                BetType: index,
                Count: this.selectBetTemplate.betCoin
            }
            GameDataManager.getInstance().sendBetData(betData);
        }
    }

    private setRoundSelfWinMoney(data: LHD_GameResultUserMoney) {
        this.roundSelfWinMoney = ProtoTool.long2Number(data.SelfWin as Long);
    }

    private showSelfWinMoney() {
        if (this.roundSelfWinMoney !== 0) {
            const template = instantiate(this.prefabShowWinMoney);
            template.setParent(this.nodeShowWinMoney);
            template.getComponent(ShowMoneyTemplate)?.showMoney(this.roundSelfWinMoney);
        }
    }

    //#region Show Coin Payment Animation
    showTableGlowAni () {
        var self = this;
        Object.keys(this.arrUserTableBetItem).forEach(key => {
            if (parseInt(key) === this.winGlowIndex) {
                this.movefromDealer(this.arrUserTableBetItem[key], true, (payCoinList: ShowCoinTemplate[]) => {
                    self.moveToUser(payCoinList);
                });
            } else {
                if (this.winGlowIndex === 1) {
                    this.moveToUser(this.arrUserTableBetItem[key]);
                } else {
                    this.moveToDealer(this.arrUserTableBetItem[key]);
                }
            }
        })
        Object.keys(this.arrayTableBetItem).forEach(key => {
            if (parseInt(key) === this.winGlowIndex) {
                this.movefromDealer(this.arrayTableBetItem[key], false, (payCoinList: ShowCoinTemplate[]) => {
                    self.moveToOther(payCoinList);
                });
            } else {
                if (this.winGlowIndex === 1) {
                    this.moveToOther(this.arrayTableBetItem[key]);
                } else {
                    this.moveToDealer(this.arrayTableBetItem[key]);
                }
            }
        })
    }

    

    moveToDealer(coinList: ShowCoinTemplate[]) {
        coinList.forEach((coin, index) => {
            const dealPos = this.nodeDealer.getWorldPosition();
            const moveShift = dealPos.subtract(coin.node.getWorldPosition());
            tween().target(coin.node)
                .delay(1)
                .call(() => {
                    if (index < 5) {
                        AudioManger.getInstance().playSound(ICallback.SoundType.ADD_CAST);
                    }
                })
                .by(0.5, { position: moveShift })
                .removeSelf()
                .start();
        })
    }

    movefromDealer(coinList: ShowCoinTemplate[], isUser: boolean, callback: {(payCoinList: ShowCoinTemplate[]): void}) {
        const payCoinList = [];
        coinList.forEach((coin, index) => {
            const coinItem = instantiate(this.prefabShowCoinItem);
            if (isUser) {
                coin.node.setParent(this.nodeUserRecycleMoney);
            }
            coinItem.setParent(isUser ? this.nodeUserRecycleMoney : this.nodeOtherBetPos);
            coinItem.setWorldPosition(this.nodeDealer.getWorldPosition());
            coinItem.setScale(new Vec3(0.7, 0.7, 0.7));
            const showCoinTemplate = coinItem.getComponent(ShowCoinTemplate);
            const moveTo = coin.node.getWorldPosition().subtract(coinItem.getWorldPosition()).add(new Vec3(10, 10));
            showCoinTemplate.setCoinItem(0, coin.betCoin, coin.icon.spriteFrame);
            tween().target(coinItem)
                .delay(1.3)
                .call(() => {
                    if (index < 5) {
                        AudioManger.getInstance().playSound(ICallback.SoundType.ADD_CAST);
                    }
                })
                .by(0.5, { position: moveTo })
                .to(0.3, { scale: new Vec3(0.5, 0.5, 0.5) })
                .start();
            payCoinList.push(coin);
            payCoinList.push(showCoinTemplate);
        })
        if (callback) {
            callback(payCoinList);
        }
    }
    
    moveToOther (coinList: ShowCoinTemplate[]) {
        coinList.forEach((coin, index) => {
            tween().target(coin.node)
                .delay(2)
                .call(() => {
                    if (index < 5) {
                        AudioManger.getInstance().playSound(ICallback.SoundType.ADD_CAST);
                    }
                })
                .to(0.4, { position: Vec3.ZERO })
                .removeSelf()
                .start();
        })
    }

    moveToUser (coinList: ShowCoinTemplate[]) {
        coinList.forEach((coin, index) => {
            tween().target(coin.node)
                .delay(2)
                .call(() => {
                    if (index < 5) {
                        AudioManger.getInstance().playSound(ICallback.SoundType.ADD_CAST);
                    }
                })
                .to(0.4, { position: Vec3.ZERO })
                .removeSelf()
                .start();
        })
    }
    //#endregion

    setWinGlowIndex (data: LHD_GameResultPoker) {
        if (data.Poker[0].Number > data.Poker[1].Number) {
            this.winGlowIndex = 0;
        } else if (data.Poker[0].Number === data.Poker[1].Number) {
            this.winGlowIndex = 1;
        } else {
            this.winGlowIndex = 2;
        }
    }

    saveThisRoundBetData (totalBet: number, glowIndex: number) {
        const index = this.roundBetData.findIndex(item => item.BetType === (glowIndex + 1))
        if (index !== -1) {
            this.roundBetData[index].Count += totalBet;
        } else {
            const betData: LHD_Bet = {
                BetType: glowIndex + 1,
                Count: totalBet
            }
            this.roundBetData.push(betData);
        }
    }

    createBetCoinItemToTable (userId: number, totalBet: number, glowIndex: number) {
        const isByUser = userId === GameDataManager.getInstance().UserData.UserID;
        if (isByUser) {
            this.saveThisRoundBetData(totalBet, glowIndex);
        }
        const glowBtn = this.arraybtnGlow[glowIndex];
        const createCoinData = this.getNeedCreateCoinItem(totalBet);
        const contentSize = glowBtn.getComponent(UITransform).contentSize;
        Object.keys(createCoinData).forEach(key => {
            const index = parseInt(key);
            const count = createCoinData[key];
            for (let i = 0; i < count; i++) {
                const createIndex = i;
                const coinItem = instantiate(this.prefabShowCoinItem);
                coinItem.setParent(isByUser ? this.nodeUserRecycleMoney : this.nodeOtherBetPos);
                coinItem.setScale(new Vec3(0.7, 0.7, 0.7));
                if (isByUser) {
                    coinItem.setWorldPosition(this.arrayBetItems[index].node.getWorldPosition());
                } else {
                    coinItem.setPosition(Vec3.ZERO);
                }
                
                const showCoinTemplate = coinItem.getComponent(ShowCoinTemplate);
                if (showCoinTemplate) {
                    const durationTime = 0.1 + (Math.random() * 2) / 10;
                    const shiftSize = new Vec3((Math.random() * contentSize.x - (contentSize.x / 2)) / 2 * 0.7, (Math.random() * contentSize.y - (contentSize.y / 2)) / 2 * 0.7 + 50, 0);
                    const moveTo = glowBtn.node.getWorldPosition().subtract(coinItem.getWorldPosition()).add(shiftSize);
                    showCoinTemplate.setCoinItem(0, this.arrBetCount[index], this.arrayChipSprite[index]);
                    tween().target(coinItem)
                        .call(() => {
                            if (createIndex < 5) {
                                AudioManger.getInstance().playSound(ICallback.SoundType.ADD_CAST);
                            }
                        })
                        .by(durationTime, { position: moveTo })
                        .to(0.2, { scale: new Vec3(0.5, 0.5, 0.5) })
                        .start();
                    //TODO is User Bet
                    if (isByUser) {
                        if (!this.arrUserTableBetItem[glowIndex]) {
                            this.arrUserTableBetItem[glowIndex] = [];
                        }
                        this.arrUserTableBetItem[glowIndex].push(showCoinTemplate);
                    } else {
                        if (!this.arrayTableBetItem[glowIndex]) {
                            this.arrayTableBetItem[glowIndex] = [];
                        }
                        this.arrayTableBetItem[glowIndex].push(showCoinTemplate);
                    }
                }
            }
        })
    }

    getNeedCreateCoinItem (totalBet: number) {
        var addBetCoin = {};
        let lessValue = totalBet;
        for (let i = this.arrBetCount.length - 1; i >= 0; i--) {
            const index = i;
            const betCoin = this.arrBetCount[index];
            const count = Math.floor(lessValue / betCoin);
            if (count > 0) {
                addBetCoin[index] = count;
            }
            lessValue = lessValue % betCoin;
        }
        return addBetCoin;
    }

    updateUserMoney (money: Long) {
        const userCash = ProtoTool.long2Number(money);
        const hasDecimal = (userCash % 100) > 0;
        this.lblUserMoney.string = userCash.toString().length > (hasDecimal ? 7 : 9) ? (Intl.NumberFormat().format(Math.trunc(userCash / 100 / 1000)) + 'k') : Intl.NumberFormat().format(userCash / 100);
    }

    updateUserBetRetData (data: LHD_BetRet) {
        if (data.Ret === 0) {
            this.updateUserMoney(data.Money as Long);
            data.BetArr.forEach(betData => {
                this.arrayUserBet[betData.BetType - 1] += Math.floor(betData.Count / 100);
            })
        } else {
            let showResultCodeKeyString = '';
            switch (data.Ret) {
                case -1:    //-1用户金额不足
                    showResultCodeKeyString = 'ResultCodeMoneyNotEnough';
                    break;
                case -2:    //-2下注的类型未找到
                    showResultCodeKeyString = 'ResultCodeIllegalBetType';
                    break;
                case -3:    //-3庄家不能下注
                    showResultCodeKeyString = 'ResultCodeInvalidArgument';
                    break;
                case -4:    //-4此类下注已达到上限
                    showResultCodeKeyString = 'ResultCodeBetTypeOverLimit';
                    break;
                case -5:    //-5不可同时下注龙与虎
                    showResultCodeKeyString = 'ResultCodeAlreadyBetOtherSide';
                    break;
                case -6:    //-6用户金额小於下注限制
                    showResultCodeKeyString = 'ResultCodeCarryMoneyNotEnough';
                    break;
            }
            MessageHandler.getInstance().showPopMessage(GameConfig.getMessageLocation(showResultCodeKeyString));
        }
        this.updateLabelBetValue();
    }

    addToggleEvent () {
        const containerEventHandler = new EventHandler();
        containerEventHandler.target = this.node;
        containerEventHandler.component = 'GlowHandler';
        containerEventHandler.handler = 'onToggleCallback';
        containerEventHandler.customEventData = 'BetCoin';

        if (this.toggleBetContent) {
            this.toggleBetContent.checkEvents.push(containerEventHandler);
        }
    }

    onToggleCallback(event: Event, customEventData: string) {
        if (customEventData === 'BetCoin') {
            const toggleNode = event.target as Node;
            if (toggleNode.getComponent(CoinTemplate)) {
                this.selectBetTemplate = toggleNode.getComponent(CoinTemplate);
            }
            this.setSelectCoinScale();
        }
    }

    setSelectCoinScale() {
        this.arrayBetItems.forEach((item, index) => {
            if (index === this.selectBetTemplate.id) {
                item.node.setScale(1.1, 1.1, 1.1);
            } else {
                item.node.setScale(1, 1, 1);
            }
        })
    }

    resetBetValue () {
        this.winGlowIndex = -1;
        this.arrayTotalBet = [0, 0, 0];
        this.arrayUserBet = [0, 0, 0];
        this.roundBetData.length = 0;
        Object.values(this.arrayTableBetItem).forEach(itemList => {
            this.removeTableBetItemList(itemList as ShowCoinTemplate[]);
        })
        this.arrayTableBetItem = {};
        this.arrUserTableBetItem = {};
        this.updateLabelBetValue();
    }

    removeTableBetItemList (itemList: ShowCoinTemplate[]) {
        itemList.forEach(template => {
            template.node.destroy();
        })
    }

    syncBetData(data: LHD_BroadCastBetArr) {
        data.BroadCastBetArr.forEach(betItem => {
            const money = ProtoTool.long2NumberCash(betItem.Money as Long);
            const addTotalCoin = money - this.arrayTotalBet[betItem.Type - 1];
            if (addTotalCoin > 0) {
                this.createBetCoinItemToTable(data.UserID, addTotalCoin * 100, betItem.Type - 1)
            }
            this.arrayTotalBet[betItem.Type - 1] = money;
        })
        this.updateLabelBetValue();
    }

    syncBetSettingData (data: LHD_Setting) {
        var self = this;
        this.syncBetOdds(data.BetAreas);
        this.clearBetItems();
        this.arrBetCount.length = 0;
        data.BetCount.forEach((item, index) => {
            this.arrBetCount.push(item);
            const coinItem = instantiate(this.prefabBetItem);
            coinItem.setParent(this.toggleBetContent.node)
            const itemTemplate = coinItem.getComponent(CoinTemplate);
            if (index === 0) {
                this.selectBetTemplate = itemTemplate;
            }
            itemTemplate.setCoinItem(index, item, this.arrayChipSprite[index % this.arrayChipSprite.length], true, function(coin: number) {
                self.clickCoinItemCallback(coin);
            })
            this.arrayBetItems.push(itemTemplate);
        })
        this.setSelectCoinScale();
    }

    syncBetOdds(data: BetArea[]) {
        if (data) {
            data.forEach(betAres => {
                this.arrlblGlowOddsUI[betAres.Type - 1].string = '1:' + betAres.Odds.toFixed(2);
            })
        }
    }

    clickCoinItemCallback (betCoin: number) {
        // console.log('sendUserBetMessage:', betCoin);
    }

    clearBetItems () {
        this.arrayBetItems.forEach(item => {
            item.node.destroy();
        })
        this.arrayBetItems.length = 0;
    }

    updateLabelBetValue () {
        for (let i = 0; i < this.arrayUserBet.length; i++) {
            const index = i;
            this.arrayBetValue[index].lblUserBet.string = this.arrayUserBet[index].toString();
            this.arrayBetValue[index].lblTotalBet.string = this.arrayTotalBet[index].toString();
        }
    }
}


