import { _decorator, Button, instantiate, Label, Node, Prefab, ScrollView, ToggleContainer, Color } from 'cc';
import { GameDataManager } from '../Data/GameDataManager';
import { GameDataType, GameStatus } from '../CocosFrameworks/Data/BaseGameDataManager';
import { Roulette_BetArea, Roulette_BetType, Roulette_GameResult, Roulette_Setting, Roulette_Bet, decodeRoulette_BetType, Roulette_BetResponse, Roulette_ResultCode, Roulette_GameResultWin, encodeRoulette_BetType, Roulette_BetAreaInfo, Roulette_BoardCastBet } from '../Proto/Game/GameMsg_Roulette';
import * as Protools from '../CocosFrameworks/Proto/ProtoTool';
import Long from 'long';
import { BetCoinTemplate } from '../Template/BetCoinTemplate';
import { Game_BetType } from '../Data/GameData';
import { BaseGameHandler } from './BaseGameHandler';
import { RouletteHandler } from './RouletteHandler';
import { WinLayoutHandler } from './WinLayoutHandler';
import { AudioManger, SoundType } from './AudioManger';
import { MessageController } from './MessageController';
import { ShowResultHandler } from './ShowResultHandler';
import { DialogSpecialHandler, SpecialBetData } from './Dialog/DialogSpecialHandler';
import { TableCoinTemplate } from '../Template/TableCoinTemplate';

const { ccclass, property } = _decorator;

@ccclass('BetAreaTypeData')
export class BetAreaTypeData {
    @property(Button)
    public btnBetArea: Button;
    @property(String)
    public jsonBetString: String = '';
}

@ccclass('BetAreaData')
export class BetAreaData {
    @property({ type: Game_BetType })
    public betType: Game_BetType = Game_BetType.Roulette_BetTypeNone;
    @property(Node)
    public nodeBetArea: Node;
}

@ccclass('ButtonUIData')
export class ButtonUIData {
    @property(Button)
    public btn: Button;
    @property(Label)
    public lblTitle: Label;
}

@ccclass('BetAreaCoin')
export class BetAreaCoin {
    @property({ type: Game_BetType })
    public type: Game_BetType;
    public money: number;
    public Numbers: number[] = [];
    public nodeButton: Node;

    constructor(type: Game_BetType, money: number, Numbers: number[], button: Node) {
        this.type = type;
        this.money = money;
        this.Numbers = Numbers;
        this.nodeButton = button;
    }
}

@ccclass('SendBetCoinData')
export class SendBetCoinData {
    public type: Game_BetType;
    public totalMoney: number;
    public Numbers: number[] = [];
    public nodeButton: Node;
    public coinList: BetAreaCoin[] = [];

    constructor(list: BetAreaCoin[], totalMoney: number) {
        this.type = list[0].type;
        this.totalMoney = totalMoney;
        this.Numbers = list[0].Numbers;
        this.nodeButton = list[0].nodeButton;
        this.coinList = list;
    }

    public getSendBetAreaCoin(): BetAreaCoin {
        return new BetAreaCoin(this.type, this.totalMoney, this.Numbers, this.nodeButton);
    }
}

@ccclass('BetTableHandler')
export class BetTableHandler extends BaseGameHandler {

    @property(RouletteHandler)
    public rouletteHandler: RouletteHandler;

    @property({ group: { name: 'BetContent', id: '1', displayOrder: 0 }, type: Prefab })
    public prefabBetCoin: Prefab;
    @property({ group: { name: 'BetContent', id: '1', displayOrder: 0 }, type: ScrollView })
    public scrollViewBetCoin: ScrollView;
    @property({ group: { name: 'BetContent', id: '1', displayOrder: 0 }, type: ToggleContainer })
    public toggleContainerBet: ToggleContainer;


    private arrBetMoney: number[] = [];
    private selectBetMoneyIndex: number = 0;

    @property({ group: { name: 'BetContent', id: '1', displayOrder: 0 }, type: Label })
    public lblTotalPlay: Label;
    @property({ group: { name: 'BetContent', id: '1', displayOrder: 0 }, type: Label })
    public lblWinMoney: Label;

    private totalPlayMoney: number = 0;
    private roundUserWinMoney: number = 0;

    @property({ group: { name: 'ButtonContent', id: '2', displayOrder: 0 }, type: ButtonUIData })
    public clear: ButtonUIData;
    @property({ group: { name: 'ButtonContent', id: '2', displayOrder: 0 }, type: ButtonUIData })
    public undo: ButtonUIData;
    @property({ group: { name: 'ButtonContent', id: '2', displayOrder: 0 }, type: ButtonUIData })
    public double: ButtonUIData;
    @property({ group: { name: 'ButtonContent', id: '2', displayOrder: 0 }, type: ButtonUIData })
    public confirm: ButtonUIData;


    @property({ group: { name: 'ButtonContent', id: '2', displayOrder: 0 }, type: Color })
    public arrButtonLabelColor: Color[] = [];

    @property({ group: { name: 'BetTable', id: '3', displayOrder: 0 }, type: Prefab })
    public prefabTableCoin: Prefab;
    @property({ group: { name: 'BetTable', id: '3', displayOrder: 0 }, type: BetAreaData })
    public arrBetAreaData: BetAreaData[] = [];
    @property({ group: { name: 'BetTable', id: '3', displayOrder: 0 }, type: Node })
    public nodeBetCoin: Node;

    private onTempTotalBetMoneyChanged: { (totalBetMoney: number): void } = null

    public registerTempTotalBetMoneyEvent(cb: { (totalBetMoney: number): void }) {
        this.onTempTotalBetMoneyChanged = cb;
    }

    private tempTotalBetMoney: number = 0;
    private set TempTotalBetMoney(money: number) {
        this.tempTotalBetMoney = money;
        if (this.onTempTotalBetMoneyChanged) {
            this.onTempTotalBetMoneyChanged(this.tempTotalBetMoney);
        }
    }

    private arrSendBetAreaCoinList: SendBetCoinData[] = [];

    private mapCombineSendBetAreaCoin: Map<string, BetAreaCoin[]> = new Map<string, BetAreaCoin[]>();

    private hasSuperZeroCoin: boolean = false;
    private lastGameResult: number = -1;

    private mapBetAreaCoinTemplate: Map<string, BetCoinTemplate[]> = new Map<string, BetCoinTemplate[]>();
    private mapBetAreaTotalMoney: Map<string, number> = new Map<string, number>();
    private arrTempBetAreaCoinList: any[] = [];
    private arrCurrentBetCoinTemplateList: BetCoinTemplate[] = [];

    private arrAllCoinTemplate: Node[] = [];

    @property(Prefab)
    public prefabOtherBetCoin: Prefab;
    @property(Node)
    public nodeOtherBetCoin: Node;
    private mapOtherBetAreaCoinMoney: Map<string, number> = new Map<string, number>();
    private mapOtherBetCoinTemplate: Map<string, TableCoinTemplate[]> = new Map<string, TableCoinTemplate[]>();

    private isThisRoundBetFinish: boolean = false;

    private arrBetCoinHistoryList: any[] = [];

    private betMinCarry: number = 0;
    private userMaxBet: number = 999999;
    private mapBetArea: Map<Roulette_BetType, Roulette_BetArea> = new Map<Roulette_BetType, Roulette_BetArea>();

    @property({ group: { name: 'WinContent', id: '4', displayOrder: 0 }, type: WinLayoutHandler })
    public winLayoutHandler: WinLayoutHandler;
    @property({ group: { name: 'WinContent', id: '4', displayOrder: 0 }, type: ShowResultHandler })
    public showResultHandler: ShowResultHandler;

    @property({ group: { name: 'BetSpecial', id: '5', displayOrder: 0 }, type: DialogSpecialHandler })
    public specialHandler: DialogSpecialHandler;

    public init(callback?: () => void): void {
        let self = this;
        this.initBetArea();
        this.initButton();
        this.resetBetTable();
        GameDataManager.getInstance().registerDataChange(GameDataType.SettingData, function (data: Roulette_Setting) {
            // console.log(GameDataType[GameDataType.SettingData].toString(), data);
            self.setSettingData(data);
        })
        GameDataManager.getInstance().registerDataChange(GameDataType.GameResult, function (data: Roulette_GameResult) {
            self.showGameResult(data);
            // console.log('GameResult:', data.Result);
        });

        GameDataManager.getInstance().registerDataChange(GameDataType.BetRetData, function (data: Roulette_BetResponse) {
            self.syncBetResponse(data);
        });

        GameDataManager.getInstance().registerDataChange(GameDataType.BetData, function (data: Roulette_BoardCastBet) {
            self.syncBetBoardCastData(data);
        });

        GameDataManager.getInstance().registerDataChange(GameDataType.ResultWinData, function (data: Roulette_GameResultWin) {
            // console.log('ResultWinData:', data);
            self.roundUserWinMoney = Protools.long2Number(data.Win as Long);
        });
        GameDataManager.getInstance().registerDataChange(GameDataType.BetAreaInfo, function (data: Roulette_BetAreaInfo) {
            // console.log('BetAreaInfo:', data);
            self.syncBetAreaInfo(data);
        });
        this.winLayoutHandler.init();
        this.showResultHandler.init();
        this.specialHandler.registerSpecialBetClickCallback(function (specialBetData: SpecialBetData) {
            self.specialBetClick(specialBetData);
        });
        super.init(callback);
    }

    protected updateGameStatus(status: GameStatus): void {
        super.updateGameStatus(status);
        // console.log('GameStatus:', GameStatus[status].toString());
        switch (status) {
            case GameStatus.BET_START:
                this.resetBetTable();
                break;
            case GameStatus.BET_COUNTDOWN:
                break;
            case GameStatus.BET_END:
                break;
            case GameStatus.SHOW_GAME_RESULT:
                this.resetTableTempBetCoin();
                this.checkAllButtonStatus();
                break;
            case GameStatus.BET_SCORE:
                this.showWinMoney();
                break;
            case GameStatus.ROUND_FINISH:
                this.resetCurrentTableBetCoin();
                break;
        }
    }

    private initButton() {
        let self = this;
        this.clear.btn.node.on(Button.EventType.CLICK, function () {
            AudioManger.getInstance().playSound(SoundType.BUTTON_CLICK);
            self.onClearButtonEvent();
        });

        this.undo.btn.node.on(Button.EventType.CLICK, function () {
            AudioManger.getInstance().playSound(SoundType.BUTTON_CLICK);
            self.onUndoButtonEvent();
        });

        this.double.btn.node.on(Button.EventType.CLICK, function () {
            AudioManger.getInstance().playSound(SoundType.BUTTON_CLICK);
            self.onDoubleButtonEvent();
        });

        this.confirm.btn.node.on(Button.EventType.CLICK, function () {
            AudioManger.getInstance().playSound(SoundType.BUTTON_CLICK);
            self.onConfirmButtonEvent();
        });
    }

    //#region 
    private syncBetBoardCastData(data: Roulette_BoardCastBet) {
        if (data.UserID !== GameDataManager.getInstance().UserData.UserID) {
            const betData = data.Bets ? data.Bets.pop() : null;
            if (betData) {
                const betType = encodeRoulette_BetType[betData.Type];
                const button = this.findButtonNodeByNumbers(betType, betData.Numbers);
                this.countingOtherBetMoney(button, Protools.long2Number(betData.Money as Long));
                this.reOtherBetCoin(betType, button);
            }
        }
    }

    private countingOtherBetMoney(button: Node, money: number) {
        const otherBetMoney = this.mapOtherBetAreaCoinMoney.get(button.name) ?? 0;
        this.mapOtherBetAreaCoinMoney.set(button.name, otherBetMoney + money);
    }

    private reOtherBetCoin(betType: Game_BetType, button: Node) {
        const arrTemplate = this.mapOtherBetCoinTemplate.get(button.name) ?? [];
        arrTemplate.forEach(temp => {
            if (temp) {
                temp.node.destroy();
            }
        })
        arrTemplate.length = 0;
        const otherBetMoney = this.mapOtherBetAreaCoinMoney.get(button.name) ?? 0;
        if (otherBetMoney > 0) {
            const coinIndexList = this.calcBetTotalMoneyToCoinList(otherBetMoney);
            coinIndexList.forEach((spriteIndex, index) => {
                const template = this.addOtherBetCoin(betType, spriteIndex, this.arrBetMoney[spriteIndex], button, index);
                if (template) {
                    template.node.setParent(this.nodeOtherBetCoin, true);
                    arrTemplate.push(template);
                }
            })
            this.mapOtherBetCoinTemplate.set(button.name, arrTemplate)
        }
    }

    private addOtherBetCoin(betType: Game_BetType, spriteIndex: number, betMoney: number, button: Node, coinIndex: number) {
        const showCoin = instantiate(this.prefabOtherBetCoin);
        this.arrAllCoinTemplate.push(showCoin);
        showCoin.setParent(button);
        showCoin.setPosition(0, coinIndex * 5, 0);
        showCoin.setScale(0.5, 0.5, 0.5);
        const template = showCoin.getComponent(TableCoinTemplate);
        template.setOtherUserTableCoin(spriteIndex, betMoney, betType);
        return template;
    }

    //#endregion

    /**
     * 處裡玩家下注回傳事件
     * @param data 
     */
    private syncBetResponse(data: Roulette_BetResponse) {
        MessageController.getInstance().showResultCodeMsg(data.Code);
        if (data.Code === Roulette_ResultCode.Roulette_ResultCodeSuccess) {
            this.isThisRoundBetFinish = true;
            if (data.Bets) {
                const betData = data.Bets[data.Bets.length - 1];
                const betType = encodeRoulette_BetType[betData.Type];
                const button = this.findButtonNodeByNumbers(betType, betData.Numbers);
                if (betType === Game_BetType.Roulette_BetTypeSuperZero) {
                    this.hasSuperZeroCoin = true;
                }
                const betMoney = Protools.long2Number(betData.Money as Long);
                if (betMoney === this.mapBetAreaTotalMoney.get(button.name)) {
                    const arrCoinTemp = this.mapBetAreaCoinTemplate.get(button.name);
                    arrCoinTemp.forEach(temp => {
                        temp.node.setParent(this.nodeBetCoin, true);
                    });
                    this.mapBetAreaCoinTemplate.delete(button.name);
                    this.addTotalPlayValue(betMoney);
                }
                this.rouletteHandler.addBetSelectNumber(betType, betData.Numbers);
            }
            this.checkAllButtonStatus();
        }
    }

    /**
     * 初始化下注按鈕事件
     */
    private initBetArea() {
        let self = this;
        this.arrBetAreaData.forEach(betAreaData => {
            if (betAreaData.betType !== Game_BetType.Roulette_BetTypeNone) {
                const arrBetButton = betAreaData.nodeBetArea?.getComponentsInChildren(Button);
                const type = betAreaData.betType;
                arrBetButton.forEach(button => {
                    button.node.on(Button.EventType.CLICK, function () {
                        if (self.gameStatus === GameStatus.BET_COUNTDOWN) {
                            self.addBetCoinAndArea(type, button);
                        }
                    })
                });
            }
        })
    }

    /**
     * 新增籌碼於下注區
     * @param type 
     * @param button 
     */
    private addBetCoinAndArea(type: Game_BetType, button: Button) {
        if (this.isThisRoundBetFinish) {
            return;
        }
        const userMoney = GameDataManager.getInstance().UserData ? Protools.long2Number(GameDataManager.getInstance().UserData.CashAmount as Long) : 0;
        if (userMoney < this.betMinCarry) {
            MessageController.getInstance().showResultCodeMsg(Roulette_ResultCode.Roulette_ResultCodeCarryMoneyNotEnough);
            return;
        }
        if (this.tempTotalBetMoney + this.arrBetMoney[this.selectBetMoneyIndex] > this.userMaxBet) {
            MessageController.getInstance().showHintMessageWithLabelText('overMaxLimit', 'Your bet amount can’t exceed the maximum limit');
            return;
        }
        if ((this.tempTotalBetMoney + this.arrBetMoney[this.selectBetMoneyIndex]) > userMoney) {
            MessageController.getInstance().showResultCodeMsg(Roulette_ResultCode.Roulette_ResultCodeMoneyNotEnough);
            return;
        }
        if (this.checkBetAreaMaxCoin(type, button.node, this.arrBetMoney[this.selectBetMoneyIndex])) {
            MessageController.getInstance().showResultCodeMsg(Roulette_ResultCode.Roulette_ResultCodeBetTypeOverLimit);
            return;
        }
        let Numbers: number[] = [];
        switch (type) {
            case Game_BetType.Roulette_BetTypeOneNumber:
            case Game_BetType.Roulette_BetTypeTwoNumber:
            case Game_BetType.Roulette_BetTypeThreeNumber:
            case Game_BetType.Roulette_BetTypeFourNumber:
            case Game_BetType.Roulette_BetTypeSixNumber:
                Numbers = this.getBetNumbersFromName(button.node.name);
                break;
            default:
                break;
        }


        this.countingBetAreaMoney(button.node, this.arrBetMoney[this.selectBetMoneyIndex]);
        const addCoinData = new BetAreaCoin(type, this.arrBetMoney[this.selectBetMoneyIndex], Numbers, button.node);
        this.reBetCoinTemplate(button.node);
        this.TempTotalBetMoney = this.tempTotalBetMoney + this.arrBetMoney[this.selectBetMoneyIndex];
        this.setTotalPlayValue(this.tempTotalBetMoney);
        AudioManger.getInstance().playSound(SoundType.PLACE_BET);
        this.arrTempBetAreaCoinList.push(addCoinData);
        this.checkAllButtonStatus();
    }

    private reBetCoinTemplate(button: Node, isReConnect: boolean = false) {
        const arrCoinTemplate = this.mapBetAreaCoinTemplate.get(button.name) ?? [];
        arrCoinTemplate.forEach(template => {
            if (template) {
                template.node.destroy();
            }
        });
        this.mapBetAreaCoinTemplate.delete(button.name);
        const totalBetMoney = this.mapBetAreaTotalMoney.get(button.name) ?? 0;
        if (totalBetMoney > 0) {
            let arrTemplate = [];
            const coinIndexList = this.calcBetTotalMoneyToCoinList(totalBetMoney);
            coinIndexList.forEach((betIndex, index) => {
                const coinTemplate = this.addTableCoinTemplate(betIndex, this.arrBetMoney[betIndex], button, index);
                arrTemplate.push(coinTemplate);
                coinTemplate.node.setParent(this.nodeBetCoin, true);
            });
            if (!isReConnect) {
                this.mapBetAreaCoinTemplate.set(button.name, arrTemplate);
            }
        }
    }

    private addTableCoinTemplate(spriteIndex: number, betMoney: number, button: Node, coinIndex: number) {
        const showCoin = instantiate(this.prefabTableCoin);
        this.arrAllCoinTemplate.push(showCoin);
        showCoin.setParent(button);
        showCoin.setPosition(0, coinIndex * 5, 0);
        showCoin.setScale(0.5, 0.5, 0.5);
        const template = showCoin.getComponent(BetCoinTemplate);
        template.setBetCoin(spriteIndex, betMoney);
        return template;
    }

    private checkBetAreaMaxCoin(type: Game_BetType, button: Node, money: number): boolean {
        let overMaxBet = false;
        const betTotalMoney = this.mapBetAreaTotalMoney.get(button.name);
        if (betTotalMoney) {
            const betAreaData = this.mapBetArea.get(decodeRoulette_BetType[type]);
            if (betAreaData) {
                const maxAreaMoney = Protools.long2Number(betAreaData.MaxBet as Long);
                overMaxBet = maxAreaMoney < (betTotalMoney + money);
            }
        }
        return overMaxBet;
    }

    /**
     * 斷線重連 補回已下注籌碼
     * @param data 
     */
    private syncBetAreaInfo(data: Roulette_BetAreaInfo) {
        if (this.gameStatus === GameStatus.BET_COUNTDOWN) {
            if (data.UserBets) {
                data.UserBets.forEach(userBetData => {
                    if (userBetData.UserID === GameDataManager.getInstance().UserData.UserID) {
                        let betMoney = 0;
                        if (userBetData.Bets) {
                            userBetData.Bets.forEach(betData => {
                                const type = encodeRoulette_BetType[betData.Type];
                                const button = this.findButtonNodeByNumbers(type, betData.Numbers);
                                const money = Protools.long2Number(betData.Money as Long)
                                this.countingBetAreaMoney(button, money);
                                betMoney += money;
                                this.reBetCoinTemplate(button, true);
                                this.rouletteHandler.addBetSelectNumber(type, betData.Numbers);
                            });
                            this.isThisRoundBetFinish = true;
                            this.setTotalPlayValue(betMoney);
                        }
                    } else {
                        if (userBetData.Bets) {
                            userBetData.Bets.forEach(betData => {
                                const betType = encodeRoulette_BetType[betData.Type];
                                const button = this.findButtonNodeByNumbers(betType, betData.Numbers);
                                this.countingOtherBetMoney(button, Protools.long2Number(betData.Money as Long));
                                this.reOtherBetCoin(betType, button);
                            })
                        }
                    }
                });
            }
        }
    }

    private specialBetClick(specialBetData: SpecialBetData) {
        if (this.isThisRoundBetFinish) {
            return;
        }
        if (this.gameStatus !== GameStatus.BET_COUNTDOWN) {
            MessageController.getInstance().showResultCodeMsg(Roulette_ResultCode.Roulette_ResultCodeNotBetStep);
            return;
        }
        AudioManger.getInstance().playSound(SoundType.PLACE_BET);
        const betMoney = this.arrBetMoney[this.selectBetMoneyIndex];
        const userMoney = Protools.long2Number(GameDataManager.getInstance().UserData.CashAmount as Long);
        const totalSpecialBetMoney = betMoney * specialBetData.BetCount;
        if ((totalSpecialBetMoney + this.tempTotalBetMoney) > this.userMaxBet || (totalSpecialBetMoney + this.tempTotalBetMoney) > userMoney) {
            MessageController.getInstance().showHintMessageWithLabelText('overMaxLimit', 'Your bet amount can’t exceed the maximum limit');
            return;
        }
        const specialList = [];
        specialBetData.Bet.forEach(betData => {
            const betTotalMoney = betMoney * betData.count;
            betData.name.forEach(buttonName => {
                const numbers = this.getBetNumbersFromName(buttonName)
                const buttonNode = this.findButtonNodeByNumbers(betData.type, numbers);
                if (buttonNode) {
                    this.countingBetAreaMoney(buttonNode, betTotalMoney);
                    this.reBetCoinTemplate(buttonNode);
                    const betAreaCoinData = new BetAreaCoin(betData.type, betTotalMoney, numbers, buttonNode);
                    specialList.push(betAreaCoinData);
                    this.TempTotalBetMoney = this.tempTotalBetMoney + betTotalMoney;
                }
            })
        });
        if (specialList.length > 0) {
            this.arrTempBetAreaCoinList.push(specialList);
        }
        this.setTotalPlayValue(this.tempTotalBetMoney);
        this.checkAllButtonStatus();
    }

    /**
     * 計算區域總額為多少籌碼
     * @param money 
     */
    private calcBetTotalMoneyToCoinList(money: number): number[] {
        let coinIndexList = [];
        let checkIndex = this.arrBetMoney.length - 1;
        while (checkIndex > -1) {
            const count = Math.floor(money / this.arrBetMoney[checkIndex]);
            for (let i = 0; i < count; i++) {
                coinIndexList.push(checkIndex);
            }
            money -= count * this.arrBetMoney[checkIndex];
            checkIndex -= 1;
        }
        return coinIndexList;
    }

    /**
     * 找出籌碼下注位置
     * @param type 
     * @param Numbers 
     * @returns 
     */
    private findButtonNodeByNumbers(type: Game_BetType, Numbers: number[]): Node {
        const betAreaData = this.arrBetAreaData.find(data => data.betType === type);
        if (betAreaData) {
            switch (type) {
                case Game_BetType.Roulette_BetTypeOneNumber:
                case Game_BetType.Roulette_BetTypeTwoNumber:
                case Game_BetType.Roulette_BetTypeThreeNumber:
                case Game_BetType.Roulette_BetTypeFourNumber:
                case Game_BetType.Roulette_BetTypeSixNumber:
                    let buttonName = 'btn_';
                    for (let i = 0; i < Numbers.length; i++) {
                        buttonName += Numbers[i];
                        if (i < Numbers.length - 1) {
                            buttonName += '-';
                        }
                    }
                    return betAreaData.nodeBetArea.getChildByName(buttonName);
                default:
                    return betAreaData.nodeBetArea;
            }
        }
        return null;
    }

    private getBetNumbersFromName(btnName: string): number[] {
        const numbers = [];
        const numberString = (btnName.split('_'))[1];
        const arrNumberStr = numberString.split('-');
        arrNumberStr.forEach(number => {
            numbers.push(parseInt(number));
        });
        return numbers;
    }

    /**
     * 輪盤開獎表演
     * @param data 
     */
    private showGameResult(data: Roulette_GameResult) {
        let self = this;
        if (this.gameStatus !== GameStatus.SHOW_GAME_RESULT)
            return;
        if (data.Result >= 0 && data.Result <= 36) {
            this.lastGameResult = data.Result;
            this.rouletteHandler.startShowRoulette(data.Result, function () {
                GameDataManager.getInstance().GameStatus = GameStatus.BET_SCORE;
                self.showResultHandler.showResult(self.lastGameResult);
            });
        }
    }

    /**
     * 在BET_SCORE狀態時表演贏得金額
     */
    private showWinMoney() {
        if (this.roundUserWinMoney > 0) {
            const isWinSuperZero = this.hasSuperZeroCoin && this.lastGameResult === 0;
            this.winLayoutHandler.showWinMoney(this.roundUserWinMoney, isWinSuperZero);
            this.setWinMoneyValue();
        }
    }

    /**
     * Protobuf RouletteSettingID 回調
     * @param data Roulette_Setting
     */
    private setSettingData(data: Roulette_Setting) {
        this.betMinCarry = data.BetMinCarry ? Protools.long2Number(data.BetMinCarry as Long) : 0;
        this.userMaxBet = data.UserMaxBet ? Protools.long2Number(data.UserMaxBet as Long) : 999999;
        this.arrBetMoney.length = 0;
        data.BetCount?.forEach((betCoin, index) => {
            const money = Protools.long2Number(betCoin as Long);
            this.addBetCoinTemplate(index, money);
            this.arrBetMoney.push(money);
        });
        data.BetAreas?.forEach(betInfo => {
            this.mapBetArea.set(betInfo.Type, betInfo);
        });
    }

    /**
     * 新增下注籌碼按鈕
     * @param index 
     * @param money 金額 
     */
    private addBetCoinTemplate(index: number, money: number) {
        const betCoin = instantiate(this.prefabBetCoin);
        betCoin.setParent(this.scrollViewBetCoin.content);
        const betCoinTemplate = betCoin.getComponent(BetCoinTemplate);
        if (betCoinTemplate) {
            betCoinTemplate.setBetCoin(index, money);
        }
    }

    /**
     * 下注籌碼選擇事件回調
     * @param event 
     * @param customEventData 
     */
    public onToggleCallback(event: Event, customEventData: string) {
        if (customEventData === 'BetCoin') {
            const toggleNode = event.target as unknown as Node;
            if (toggleNode.getComponent(BetCoinTemplate)) {
                const template = toggleNode.getComponent(BetCoinTemplate);
                this.selectBetMoneyIndex = template.getCoinIndex();
            }
        }
    }


    //#region Button Event
    private onUndoButtonEvent() {
        if (this.arrTempBetAreaCoinList.length > 0) {
            const data = this.arrTempBetAreaCoinList.pop();
            if (Array.isArray(data)) {
                data.forEach(element => {
                    this.countingBetAreaMoney(element.nodeButton, -element.money);
                    this.TempTotalBetMoney = this.tempTotalBetMoney - element.money;
                    this.setTotalPlayValue(this.tempTotalBetMoney);
                    this.reBetCoinTemplate(element.nodeButton);
                });
            } else {
                this.countingBetAreaMoney(data.nodeButton, -data.money);
                this.TempTotalBetMoney = this.tempTotalBetMoney - data.money;
                this.setTotalPlayValue(this.tempTotalBetMoney);
                this.reBetCoinTemplate(data.nodeButton);
            }

        }
        this.checkAllButtonStatus();
    }

    /**
     * 計算BetArea下注總額
     * @param button 
     * @param money 
     */
    private countingBetAreaMoney(button: Node, money: number) {
        let totalMoney = this.mapBetAreaTotalMoney.get(button.name) ?? 0;
        totalMoney += money;
        this.mapBetAreaTotalMoney.set(button.name, totalMoney);
    }

    /**
     * Clear Button Event
     */
    private onClearButtonEvent() {
        this.resetTableTempBetCoin();
        this.checkAllButtonStatus();
    }

    private onDoubleButtonEvent() {
        this.combineDoubleCoin();
        this.enableDoubleButton();
    }

    /**
     * 產生目前清單之兩倍籌碼
     */
    private combineDoubleCoin() {
        const mapCombineData: Map<string, BetAreaCoin[]> = new Map<string, BetAreaCoin[]>()
        this.arrTempBetAreaCoinList.forEach(data => {
            if (Array.isArray(data)) {
                data.forEach(subData => {
                    let list = mapCombineData.get(subData.nodeButton.name);
                    if (!list) {
                        list = [];
                    }
                    list.push(subData);
                    mapCombineData.set(subData.nodeButton.name, list);
                })
            } else {
                let list = mapCombineData.get(data.nodeButton.name);
                if (!list) {
                    list = [];
                }
                list.push(data);
                mapCombineData.set(data.nodeButton.name, list);
            }
        })
        const combineList: BetAreaCoin[] = [];
        mapCombineData.forEach((list, key) => {
            let totalBetMoney = 0;
            list.forEach(data => {
                totalBetMoney += data.money;
            });
            const areaBetMoney = this.mapBetAreaTotalMoney.get(key) ?? 0;
            this.mapBetAreaTotalMoney.set(key, areaBetMoney + totalBetMoney);
            const betData = list[0];
            this.reBetCoinTemplate(betData.nodeButton);
            const betAreaCoinData = new BetAreaCoin(betData.type, totalBetMoney, betData.Numbers, betData.nodeButton);
            combineList.push(betAreaCoinData);
            this.TempTotalBetMoney = this.tempTotalBetMoney + totalBetMoney;
            this.setTotalPlayValue(this.tempTotalBetMoney);
        });
        if (combineList.length > 0) {
            this.arrTempBetAreaCoinList.push(combineList);
        }
    }

    /**
     * 下注按鈕事件
     */
    private onConfirmButtonEvent() {
        if (this.tempTotalBetMoney > this.userMaxBet) {
            MessageController.getInstance().showHintMessageWithLabelText('overMaxLimit', 'Your bet amount can’t exceed the maximum limit');
            return;
        }
        const userMoney = Protools.long2Number(GameDataManager.getInstance().UserData.CashAmount as Long);
        if (this.tempTotalBetMoney > userMoney) {
            MessageController.getInstance().showResultCodeMsg(Roulette_ResultCode.Roulette_ResultCodeMoneyNotEnough);
            return;
        }
        this.arrTempBetAreaCoinList.forEach(data => {
            if (Array.isArray(data)) {
                data.forEach(betData => {
                    this.addSendBetAreaCoinToMap(betData);
                })
            } else {
                this.addSendBetAreaCoinToMap(data);
            }
        });
        this.startSendAreaCoinToServer();
    }

    /**
     * 整合下注籌碼清單資訊
     * @param betData 
     */
    private addSendBetAreaCoinToMap(betData: BetAreaCoin) {
        let list: BetAreaCoin[] = this.mapCombineSendBetAreaCoin.get(betData.nodeButton.name);
        if (!list) {
            list = [];
        }
        list.push(betData);
        this.mapCombineSendBetAreaCoin.set(betData.nodeButton.name, list);
    }

    /**
     * 將整合後之下注籌碼清單依序送交給Server
     */
    private startSendAreaCoinToServer() {
        this.arrSendBetAreaCoinList.length = 0;
        this.mapCombineSendBetAreaCoin.forEach((list, key) => {
            if (list && list.length > 0) {
                const betData = list[0];
                let totalMoney = 0;
                list.forEach(data => {
                    totalMoney += data.money;
                });
                const sendCoinData = new SendBetCoinData(list, totalMoney);
                this.sendBetAreaData(sendCoinData);
            }
        })
        this.mapCombineSendBetAreaCoin.clear();
    }
    //#endregion

    /**
     * 送出下注籌碼給Server
     * @param betData 
     */
    private sendBetAreaData(betData: SendBetCoinData) {
        const bet: Roulette_Bet = this.getRouletteBetData(betData.getSendBetAreaCoin());
        GameDataManager.getInstance().sendBetCoin(bet);
        this.arrSendBetAreaCoinList.push(betData);
    }

    /**
     * 轉換下注資訊給Server資料格式
     * @param data 
     * @returns 
     */
    private getRouletteBetData(data: BetAreaCoin): Roulette_Bet {
        switch (data.type) {
            case Game_BetType.Roulette_BetTypeOneNumber:
            case Game_BetType.Roulette_BetTypeTwoNumber:
            case Game_BetType.Roulette_BetTypeThreeNumber:
            case Game_BetType.Roulette_BetTypeFourNumber:
            case Game_BetType.Roulette_BetTypeSixNumber:
                return {
                    Type: decodeRoulette_BetType[data.type],
                    Money: Long.fromNumber(data.money),
                    Numbers: data.Numbers
                }
            default:
                return {
                    Type: decodeRoulette_BetType[data.type],
                    Money: Long.fromNumber(data.money)
                }
        }
    }

    /**
     * 重設下注桌面資訊
     */
    private resetBetTable() {
        this.isThisRoundBetFinish = false;
        this.hasSuperZeroCoin = false;
        this.totalPlayMoney = 0;
        this.roundUserWinMoney = 0;
        this.arrBetCoinHistoryList.length = 0;
        this.TempTotalBetMoney = 0;
        this.setTotalPlayValue(this.tempTotalBetMoney);
        this.winLayoutHandler.hideWinLayout();
        this.setTotalPlayValue(0);
        this.setWinMoneyValue();
        this.checkAllButtonStatus();
        const arrTemplate = this.nodeBetCoin.getComponentsInChildren(BetCoinTemplate);
        arrTemplate.forEach(temp => {
            temp.node.destroy();
        });
        const arrOtherTemplate = this.nodeOtherBetCoin.getComponentsInChildren(BetCoinTemplate);
        arrOtherTemplate.forEach(temp => {
            temp.node.destroy();
        });
    }

    /**
     * 清空已下注成功之籌碼
     */
    private resetCurrentTableBetCoin() {
        this.arrCurrentBetCoinTemplateList.forEach(temp => {
            if (temp) {
                temp.node.destroy();
            }
        })
        this.arrCurrentBetCoinTemplateList.length = 0;
        this.mapOtherBetCoinTemplate.forEach((arrTemp, key) => {
            arrTemp.forEach(temp => {
                if (temp) {
                    temp.node.destroy();
                }
            })
        })
        this.arrAllCoinTemplate.forEach(node => {
            if (node) {
                node.destroy();
            }
        })
        this.arrAllCoinTemplate.length = 0;
        this.mapOtherBetCoinTemplate.clear();
        this.mapOtherBetAreaCoinMoney.clear();
    }

    /**
     * 清空未下注成功之籌碼
     */
    private resetTableTempBetCoin() {
        if (this.mapBetAreaCoinTemplate.size > 0) {
            this.TempTotalBetMoney = 0;
            this.setTotalPlayValue(this.tempTotalBetMoney);
            if (this.gameStatus === GameStatus.SHOW_GAME_RESULT) {
                MessageController.getInstance().showHintMessageWithLabelText('betTimeOut', 'Bet times up ,Your bet will be returned.');
            }
        }
        this.mapBetAreaCoinTemplate.forEach((arrTemp, key) => {
            arrTemp.forEach(temp => {
                if (temp) {
                    temp.node.destroy();
                }
            })
        })
        this.mapBetAreaCoinTemplate.clear();
        this.mapBetAreaTotalMoney.clear();
        this.mapCombineSendBetAreaCoin.clear();
        this.arrTempBetAreaCoinList.length = 0;
    }


    /**
     * 顯示目前下注總額
     * @param money 
     */
    private addTotalPlayValue(money: number) {
        this.totalPlayMoney += money;
        this.setTotalPlayValue(this.totalPlayMoney);
    }

    private setTotalPlayValue(totalMoney: number) {
        this.lblTotalPlay.string = Intl.NumberFormat().format(totalMoney / 100);
    }

    private setWinMoneyValue() {
        this.lblWinMoney.string = Intl.NumberFormat().format(this.roundUserWinMoney / 100);
    }


    //#endregion 更新按鈕狀態
    /**
     * 檢查目前所有按鈕狀態
     */
    private checkAllButtonStatus() {
        this.enableClearButton();
        this.enableUndoButton();
        this.enableDoubleButton();
        this.enableConfirmButton();
    }

    private enableClearButton() {
        const enable: boolean = (this.arrTempBetAreaCoinList.length > 0 && this.gameStatus === GameStatus.BET_COUNTDOWN && !this.isThisRoundBetFinish);
        this.clear.btn.interactable = enable;
        this.clear.lblTitle.color = this.arrButtonLabelColor[enable ? 1 : 0];
    }

    private enableUndoButton() {
        const enable: boolean = (this.arrTempBetAreaCoinList.length > 0 && this.gameStatus === GameStatus.BET_COUNTDOWN && !this.isThisRoundBetFinish);
        this.undo.btn.interactable = enable;
        this.undo.lblTitle.color = this.arrButtonLabelColor[enable ? 1 : 0];
    }

    private enableConfirmButton() {
        const enable: boolean = (this.arrTempBetAreaCoinList.length > 0 && this.gameStatus === GameStatus.BET_COUNTDOWN && !this.isThisRoundBetFinish);
        this.confirm.btn.interactable = enable;
        this.confirm.lblTitle.color = this.arrButtonLabelColor[enable ? 1 : 0];
    }

    private enableDoubleButton() {
        const userMoney = GameDataManager.getInstance().UserData ? Protools.long2Number(GameDataManager.getInstance().UserData.CashAmount as Long) : 0;
        const doubleTempBetMoney = this.tempTotalBetMoney * 2;
        const enable: boolean = (this.arrTempBetAreaCoinList.length > 0 && this.gameStatus === GameStatus.BET_COUNTDOWN && doubleTempBetMoney <= userMoney && doubleTempBetMoney < this.userMaxBet && !this.isThisRoundBetFinish);
        this.double.btn.interactable = enable;
        this.double.lblTitle.color = this.arrButtonLabelColor[enable ? 1 : 0];
    }
    //#endregion
}


