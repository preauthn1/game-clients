import { _decorator, instantiate, Label, Prefab, random, ScrollView, Vec2 } from 'cc';
import { BaseDialogHandler } from '../../CocosFrameworks/UI/BaseDialogHandler';
import { GameDataManager } from '../../Data/GameDataManager';
import { GameDataType, GameStatus } from '../../CocosFrameworks/Data/BaseGameDataManager';
import { Roulette_GameRecords, Roulette_GameResult } from '../../Proto/Game/GameMsg_Roulette';
import { HistroyRowTemplate } from '../../Template/HistroyRowTemplate';
const { ccclass, property } = _decorator;

@ccclass('TopFiveHistoryData')
export class TopFiveHistoryData {
    @property(Label)
    public lblNumber: Label;
    @property(Label)
    public lblPercent: Label;
}

@ccclass('DialogHistoryHandler')
export class DialogHistoryHandler extends BaseDialogHandler {

    @property(TopFiveHistoryData)
    public arrColdTopFiveData: TopFiveHistoryData[] = [];
    @property(TopFiveHistoryData)
    public arrHotTopFiveData: TopFiveHistoryData[] = [];

    @property(Prefab)
    public prefabHistoryRow: Prefab;
    @property(ScrollView)
    public scrollViewHistoryRow: ScrollView;

    private arrHistoryTemplateData: HistroyRowTemplate[] = [];

    private historyCount: number = 30;
    private gameRound: number = 0;

    private arrResultCount: number[] = new Array(37);

    private lastResultData: Roulette_GameResult;

    start() {
        // this.init();
    }

    update(deltaTime: number) {

    }

    public showDialog(callback: () => void): void {
        super.showDialog(callback);
        this.scrollViewHistoryRow.scrollToOffset(new Vec2(0, 0));
    }

    public init(): void {
        let self = this;
        super.init();
        this.reNewResultList();
        this.createHistoryRow();
        GameDataManager.getInstance().registerGameStatusChanged(function (status: GameStatus) {
            self.updateStatus(status);
        })
        GameDataManager.getInstance().registerDataChange(GameDataType.HistoryData, function (data: Roulette_GameRecords) {
            // console.log('HistoryData:', JSON.stringify(data));
            self.syncHistoryData(data);
        });
        GameDataManager.getInstance().registerDataChange(GameDataType.GameResult, function (data: Roulette_GameResult) {
            // self.addNewGameResult(data, true);
            self.lastResultData = data;
        });
    }

    private updateStatus(status: GameStatus) {
        switch (status) {
            case GameStatus.BET_START:
                this.addNewGameResult(this.lastResultData, true);
                break;
        }
    }

    private updateColdList() {
        const coldIndexList = [];
        const tempColdList = [];
        this.arrResultCount.forEach(count => {
            tempColdList.push(count);
        })
        for (let i = 0; i < 5; i++) {
            const index = tempColdList.indexOf(Math.min(...tempColdList));
            if (tempColdList[index] === 0 && i < 4) {
                let randomIndex = parseInt((random() * 37).toString());
                while (coldIndexList.findIndex(number => number === randomIndex) > -1 || tempColdList[randomIndex] > 0) {
                    randomIndex = parseInt((random() * 37).toString());
                }
                coldIndexList.push(randomIndex);
            } else {
                coldIndexList.push(index);
            }
        }
        this.setColdListTable(coldIndexList);
    }

    private setColdListTable(coldIndexList: number[]) {
        coldIndexList.forEach((countIndex, index) => {
            this.arrColdTopFiveData[index].lblNumber.string = countIndex.toString();
            this.arrColdTopFiveData[index].lblPercent.string = (this.arrResultCount[countIndex] === 0 ? '0.0' : ((this.arrResultCount[countIndex] / (this.gameRound - 1)) * 100).toFixed(1)) + '%';
        })
    }

    private updateHotList() {
        const hotIndexList = [];
        const tempHotList = [];
        this.arrResultCount.forEach(count => {
            tempHotList.push(count);
        })
        for (let i = 0; i < 5; i++) {
            const index = tempHotList.indexOf(Math.max(...tempHotList));
            if (tempHotList[index] === 0) {
                let randomIndex = parseInt((random() * 37).toString());
                while (hotIndexList.findIndex(number => number === randomIndex) > -1) {
                    randomIndex = parseInt((random() * 37).toString());
                }
                hotIndexList.push(randomIndex);
            } else {
                hotIndexList.push(index);
                tempHotList[index] = 0;
            }
        }
        this.setHotListTable(hotIndexList);
    }

    private setHotListTable(hotIndexList: number[]) {
        hotIndexList.forEach((countIndex, index) => {
            this.arrHotTopFiveData[index].lblNumber.string = countIndex.toString();
            this.arrHotTopFiveData[index].lblPercent.string = ((this.arrResultCount[countIndex] / (this.gameRound - 1)) * 100).toFixed(1) + '%';
        })
    }

    private addNewGameResult(data: Roulette_GameResult, update: boolean = false) {
        if (data) {
            if (data.RoundID === 1 && update) {
                this.reNewResultList();
                this.resetHistoryRow();
            }
            this.gameRound = data.RoundID;
            this.arrResultCount[data.Result] += 1;
            if (this.gameRound > this.arrHistoryTemplateData.length) {
                this.arrHistoryTemplateData.push(this.addHistoryRow(this.gameRound - 1))
            }
            const templateData = this.arrHistoryTemplateData[this.gameRound - 1];
            templateData.node.active = true;
            templateData.node.setSiblingIndex(0);
            templateData.setHisrotyRowNumber(this.gameRound - 1, data.Result);
            this.scrollViewHistoryRow.scrollToOffset(new Vec2(0, 0), 0.5);
            if (update) {
                this.updateHotList();
                this.updateColdList();
            }
        }
    }

    private syncHistoryData(data: Roulette_GameRecords) {
        data.Results?.forEach(result => {
            this.addNewGameResult(result);
        });
        this.updateHotList();
        this.updateColdList();
    }

    private createHistoryRow() {
        for (let i = 0; i < this.historyCount; i++) {
            const index = i;
            const templateHandler = this.addHistoryRow(index);
            templateHandler.node.active = index < 5;
            this.arrHistoryTemplateData.push(templateHandler);
        }
        this.scrollViewHistoryRow.scrollToOffset(new Vec2(0, 0));
    }

    private addHistoryRow(index: number): HistroyRowTemplate {
        const template = instantiate(this.prefabHistoryRow);
        template.setParent(this.scrollViewHistoryRow.content);
        const templateHandler = template.getComponent(HistroyRowTemplate);
        templateHandler.createHistoryRow(index);
        return templateHandler;
    }

    private resetHistoryRow() {
        this.arrHistoryTemplateData.forEach((template, index) => {
            template.clearAllNumber();
            template.node.active = index < 5;
        });
        this.scrollViewHistoryRow.scrollToOffset(new Vec2(0, 0));
    }

    private reNewResultList() {
        for (let i = 0; i < this.arrResultCount.length; i++) {
            this.arrResultCount[i] = 0;
        }
    }
}


