import { _decorator, Component, Node, Prefab, instantiate, Vec3, Label, Button } from 'cc';
import * as ICallback from './Data/ICallback';
import { BaseHander } from './BaseHander';
import GameDataManager from './GameDataManager';
import { LHD_Cards, LHD_Poker, LHD_ResultCardList } from './Proto/Msg/httpMsg_LHD';
import { PlateTempate } from './template/PlateTempate';
import { LHD_GameResultPoker, LHD_RoundID, LHD_Setting } from './Proto/Msg/gameMsg_LHD';
import { RoadColTemplate } from './template/RoadColTemplate';
import { TrendDialogHandler } from './Dialog/TrendDialogHandler';
import { DialogHandler } from './Dialog/DialogHandler';
import { NextThreeRoadTemplate } from './template/NextThreeRoadTemplate';
import { AudioManger } from './AudioManger';
const { ccclass, property } = _decorator;

export class BigRoadData {
    public type: number;
    public tieCount: number;
    public colIndex: number;
    public rowIndex: number;
}

export class BigRoadCountData {
    public index: number;
    public count: number;
    public type: number;
}

export class ThreeRoadData {
    public index: number;
    public rowIndex: number;
    public type: number;
}

/**
 * 歷史開注控制器
 */
@ccclass('TrandHandler')
export class TrandHandler extends BaseHander {

    public resultCardList: LHD_Cards[] = [];
    public bigRoadDataList: BigRoadData[] = [];
    private bigRoadCountList: BigRoadCountData[] = [];

    private nowBigEyeRoadData: ThreeRoadData = null;
    private nowSmallRoadData: ThreeRoadData = null;
    private nowCockroachRoadData: ThreeRoadData = null;

    private nextDragonBigEyeType: number = -1;
    private nextDragonSmallType: number = -1;
    private nextDragonCockroachType: number = -1;

    private plateCount: number = 30;
    private arrPlateTemplate: PlateTempate[] = [];
    private arrRoadTemplate: RoadColTemplate[] = [];

    @property({ group: { name: 'BeadPlate', id: '1', displayOrder: 1}, type: Node})
    public nodeBeadPlateContentView: Node;
    @property({ group: { name: 'BeadPlate', id: '1', displayOrder: 1}, type: Prefab})
    public prefabPlateTemplate: Prefab;

    @property({ group: { name: 'BigRoad', id: '2', displayOrder: 2}, type: Node})
    public nodeBigRoadContentView: Node;
    @property({ group: { name: 'BigRoad', id: '2', displayOrder: 2}, type: Prefab})
    public prefabRoadTemplate: Prefab;

    private lastResultPoker: LHD_GameResultPoker = null;
    private checkLastBigRoadData: BigRoadData = null;

    private nowRoundData: LHD_RoundID = null;
    @property({ group: { name: 'RoundData', id: '0', displayOrder: 3}, type: Label})
    public lblDragonRound: Label;
    @property({ group: { name: 'RoundData', id: '0', displayOrder: 3}, type: Label})
    public lblTigerRound: Label;
    @property({ group: { name: 'RoundData', id: '0', displayOrder: 3}, type: Label})
    public lblTieRound: Label;
    @property({ group: { name: 'RoundData', id: '0', displayOrder: 3}, type: Label})
    public lblTotalRound: Label;

    @property({group: { name: 'NextTable', id: '3', displayOrder: 6}, type: NextThreeRoadTemplate})
    public nextThreeBigEye: NextThreeRoadTemplate[] = [];
    @property({group: { name: 'NextTable', id: '3', displayOrder: 6}, type: NextThreeRoadTemplate})
    public nextThreeSmall: NextThreeRoadTemplate[] = [];
    @property({group: { name: 'NextTable', id: '3', displayOrder: 6}, type: NextThreeRoadTemplate})
    public nextThreeCockroach: NextThreeRoadTemplate[] = [];

    @property(Button)
    public btnOpenTrendDialog: Button;
    @property(TrendDialogHandler)
    public trendDialogHandler: TrendDialogHandler;

    init() {
        super.init();
        var self = this;
        this.createPlateTemplate();
        this.createRoadTemplate();
        this.trendDialogHandler.createTrendContent();
        if (this.btnOpenTrendDialog) {
            this.btnOpenTrendDialog.node.on(Button.EventType.CLICK, this.onOpenTrendDialogEvent, this)
        }
        GameDataManager.getInstance().registerDataChange(ICallback.GameDataType.TrandData, function(data: any) {
            self.setTrandTableData(data as LHD_ResultCardList);
        });
        GameDataManager.getInstance().registerDataChange(ICallback.GameDataType.PokerResult, function(data: any) {
            self.keepLastResultPoker(data as LHD_GameResultPoker);
        })
        GameDataManager.getInstance().registerDataChange(ICallback.GameDataType.RoundData, function(data: any) {
            self.nowRoundData = data as LHD_RoundID;
        })
    }

    updateGameStatus (status: ICallback.GameStatus) {
        super.updateGameStatus(status);
        switch (this.gameStatus) {
            case ICallback.GameStatus.BET_FINISH:
                if (this.nowRoundData?.RoundID === 1) {
                    this.clearRoundToFirst();
                }
                this.setNewBigRoadData();
                this.setNewBeadPlateData();
                this.updateRoundData();
                break;
            case ICallback.GameStatus.BET_START:
                break;
            case ICallback.GameStatus.SHOW_POKER:
                break;
            case ICallback.GameStatus.BET_END:
                break;
            case ICallback.GameStatus.RELOADING:
                this.clearBigRoadData();
                this.clearRoundToFirst();
                break;
            default:
                break;
        } 
    }

    syncGameSettingData(data: LHD_Setting) {
        this.trendDialogHandler.syncGameSettingData(data);
        this.nodeBeadPlateContentView.active = false;
        this.nodeBeadPlateContentView.active = true;
    }

    private clearRoundToFirst () {
        this.nextDragonBigEyeType = -1;
        this.nextDragonSmallType = -1;
        this.nextDragonCockroachType = -1;
        this.nowBigEyeRoadData = null;
        this.nowSmallRoadData = null;
        this.nowCockroachRoadData = null;
        this.trendDialogHandler.clearTrendContent();
    }

    private createPlateTemplate () {
        for (let i = 0; i < this.plateCount; i++) {
            const index = i;
            const template = instantiate(this.prefabPlateTemplate);
            template.setParent(this.nodeBeadPlateContentView);
            const plateTemplate = template.getComponent(PlateTempate);
            plateTemplate.initPlate(index);
            this.arrPlateTemplate.push(plateTemplate);
        }
    }

    private createRoadTemplate () {
        for (let i = 0; i < this.plateCount; i++) {
            const index = i;
            const template = instantiate(this.prefabRoadTemplate);
            template.setParent(this.nodeBigRoadContentView);
            const roadTemplate = template.getComponent(RoadColTemplate);
            roadTemplate.initRoad(index);
            this.arrRoadTemplate.push(roadTemplate);
        } 
    }

    private updateRoundData () {
        if (this.nowRoundData === null)
            return;
        this.lblDragonRound.string = this.nowRoundData.LongWin.toString();
        this.lblTigerRound.string = this.nowRoundData.HuWin.toString();
        this.lblTieRound.string = this.nowRoundData.HeWin.toString();
        this.lblTotalRound.string = this.nowRoundData.RoundID.toString();
        this.setNextDragonData();
        this.trendDialogHandler.setNextDragonData(this.nextDragonBigEyeType, this.nextDragonSmallType, this.nextDragonCockroachType);
        this.trendDialogHandler.setRoundContent(this.nowRoundData);
    }

    private keepLastResultPoker(data: LHD_GameResultPoker) {
        this.lastResultPoker = Object.assign({}, data);
    }

    private setTrandTableData (data: LHD_ResultCardList) {
        this.resultCardList.length = 0;
        let startSave = false;
        if (data.CardList) {
            data.CardList.forEach(data => {
                if (!startSave) {
                    startSave = data.RoundID === 1;
                }
                if (startSave) {
                    this.resultCardList.push(data);
                }
            })
        }
        this.setBreadPlateData();
        this.setBigRoadData();
    }

    //#region Parse Three Road Data
    private setBigEyeRoadData (data: BigRoadCountData, isNew: boolean) {
        const nowThreeRoadData = this.getThreeRoadData(data, this.nowBigEyeRoadData, 1);
        if (nowThreeRoadData.type !== -1) {
            this.nowBigEyeRoadData = Object.assign({}, nowThreeRoadData);
            this.trendDialogHandler.setBigEyeRoadData(nowThreeRoadData, isNew);
        }
        this.nextDragonBigEyeType = this.getNextDragonThreeRoadType(data, 1);
    }

    private setSmallRoadData (data: BigRoadCountData, isNew: boolean) {
        const nowThreeRoadData = this.getThreeRoadData(data, this.nowSmallRoadData, 2);
        if (nowThreeRoadData.type !== -1) {
            this.nowSmallRoadData = Object.assign({}, nowThreeRoadData);
            this.trendDialogHandler.setSmallRoadData(nowThreeRoadData, isNew);
        }
        this.nextDragonSmallType = this.getNextDragonThreeRoadType(data, 2);
    }

    private setCockroachRoadData(data: BigRoadCountData, isNew: boolean) {
        const nowThreeRoadData = this.getThreeRoadData(data, this.nowCockroachRoadData, 3);
        if (nowThreeRoadData.type !== -1) {
            this.nowCockroachRoadData = Object.assign({}, nowThreeRoadData);
            this.trendDialogHandler.setCockroachRoadData(nowThreeRoadData, isNew);
        }
        this.nextDragonCockroachType = this.getNextDragonThreeRoadType(data, 3);
    }

    private getThreeRoadData (data: BigRoadCountData, threeRoadData: ThreeRoadData, checkIndex: number): ThreeRoadData {
        const threeRoadType = this.getThreeRoadType(data, checkIndex);
        const index = threeRoadData === null ? 0 : (threeRoadData.index + (threeRoadData.type === threeRoadType ? 0 : 1));
        const rowIndex = threeRoadData === null ? 0 : (threeRoadData.type === threeRoadType ? (threeRoadData.rowIndex + 1) : 0);
        return {
            index: index,
            type: threeRoadType,
            rowIndex: rowIndex
        }
    }

    private getNextDragonThreeRoadType (data: BigRoadCountData, checkShiftIndex: number) {
        const nextData: BigRoadCountData = {
            index: data.index,
            count: data.count + 1,
            type: data.type
        } 
        const nextTreeRoadType = this.getThreeRoadType(nextData, checkShiftIndex);
        return data.type === 0 ? nextTreeRoadType : (nextTreeRoadType === 0 ? 2 : 0);
    }

    private getThreeRoadType (data: BigRoadCountData, checkShiftIndex: number): number {
        let roadType = -1;
        if (data.count === 1 && data.index > checkShiftIndex) {
            const checkData = this.bigRoadCountList[data.index - (checkShiftIndex + 1)];
            const preRoadData = this.bigRoadCountList[data.index - 1];
            roadType = (checkData.count - preRoadData.count === 0) ? 2 : 0;
        } else if (data.count > 1) {
            const checkData = this.bigRoadCountList[data.index - checkShiftIndex];
            const minusCount = data.count - checkData.count;
            roadType = minusCount > 0 ? (minusCount > 1 ? 2 : 0) : 2;
        }
        return roadType;
    }

    setNextDragonData() {
        this.nextThreeBigEye.forEach(template => {
            template.setNextThreeRoadType(this.nextDragonBigEyeType);
        })
        this.nextThreeSmall.forEach(template => {
            template.setNextThreeRoadType(this.nextDragonSmallType);
        })
        this.nextThreeCockroach.forEach(template => {
            template.setNextThreeRoadType(this.nextDragonCockroachType);
        })
    }
    //#endregion

    //#region Parse Bead Plate Data
    private updateBigRoadCountData(data: BigRoadData, isNew: boolean) {
        let bigRoadCountData: BigRoadCountData = null;
        if (this.bigRoadCountList[data.colIndex]) {
            bigRoadCountData = this.bigRoadCountList[data.colIndex];
            if (bigRoadCountData.type === data.type) {
                bigRoadCountData.count++;
                this.bigRoadCountList[data.colIndex] = bigRoadCountData;
            }
        } else {
            bigRoadCountData = {
                index: data.colIndex,
                type: data.type,
                count: 1
            }
            this.bigRoadCountList.push(bigRoadCountData);
        }
        if (data.colIndex > 0) {
            this.setBigEyeRoadData(bigRoadCountData, isNew);
        }
        if (data.colIndex > 1) {
            this.setSmallRoadData(bigRoadCountData, isNew);
        }

        if (data.colIndex > 2) {
            this.setCockroachRoadData(bigRoadCountData, isNew);
        }
    }

    private setNewBeadPlateData() {
        if (this.lastResultPoker === null) {
            return;
        }
        const cardData: LHD_Cards = {
            Cards: this.lastResultPoker.Poker,
            RoundID: this.lastResultPoker.RoundID
        }
        if (this.resultCardList[this.resultCardList.length - 1].RoundID === cardData.RoundID) {
            return;
        }
        if (cardData.RoundID === 1) {
            this.arrPlateTemplate.forEach(template => {
                template.clearBreadPlate();
            });
            this.resultCardList.length = 0;
        }
        this.lastResultPoker = null;
        this.resultCardList.push(cardData);
        const plateIndex = Math.floor((cardData.RoundID - 1) / 6);
        this.arrPlateTemplate[plateIndex].setBreadPlate(cardData, true);
        this.trendDialogHandler.setBeadPlateData(plateIndex, cardData, true);
    }

    private setBreadPlateData () {
        this.resultCardList.forEach(roundData => {
            const plateIndex = Math.floor((roundData.RoundID -1) / 6);
            this.arrPlateTemplate[plateIndex].setBreadPlate(roundData);
            this.trendDialogHandler.setBeadPlateData(plateIndex, roundData, false);
        })
        this.updateRoundData();
    }
    //#endregion

    //#region Parse Big Road Data
    private clearBigRoadData () {
        this.arrRoadTemplate.forEach(roadTemplate => {
            roadTemplate.clearRoadData();
        })
        this.checkLastBigRoadData = null;
        this.bigRoadDataList.length = 0;
        this.bigRoadCountList.length = 0;
    }


    private setNewBigRoadData () {
        if (this.lastResultPoker?.RoundID === 1) {
            this.clearBigRoadData();
        }
        const bigRoadData = this.covertBigRoadData(this.lastResultPoker.Poker);
        if (this.getResultType(this.lastResultPoker.Poker) !== 1) {
            this.updateBigRoadCountData(bigRoadData, true);
        }
        this.bigRoadDataList.push(bigRoadData);
        this.checkLastBigRoadData = Object.assign({}, bigRoadData);
        const shiftCol = Math.max(bigRoadData.rowIndex - 5, 0);
        const bigRoadIndex = bigRoadData.colIndex + shiftCol;
        this.arrRoadTemplate[bigRoadIndex].setRoadData(bigRoadData, true);
        this.trendDialogHandler.setBigRoadData(bigRoadIndex, bigRoadData, true);
    }

    private setBigRoadData () {
        this.resultCardList.forEach(roundData => {
            const bigRoadData = this.covertBigRoadData(roundData.Cards);
            if (this.getResultType(roundData.Cards) !== 1) {
                this.updateBigRoadCountData(bigRoadData, false);
            }
            this.bigRoadDataList.push(bigRoadData);
            this.checkLastBigRoadData = Object.assign({}, bigRoadData);
            const shiftCol = Math.max(bigRoadData.rowIndex - 5, 0);
            const bigRoadIndex = bigRoadData.colIndex + shiftCol;
            this.arrRoadTemplate[bigRoadIndex].setRoadData(bigRoadData, false);
            this.trendDialogHandler.setBigRoadData(bigRoadIndex, bigRoadData, false);
        })
        this.setNextDragonData();
        this.trendDialogHandler.setNextDragonData(this.nextDragonBigEyeType, this.nextDragonSmallType, this.nextDragonCockroachType);
    }
    //#endregion

    private covertBigRoadData (data: LHD_Poker[]): BigRoadData {
        const roundType = this.getResultType(data);
        const type = roundType === 1 ? (this.checkLastBigRoadData ? this.checkLastBigRoadData.type : roundType) : roundType;
        const tieCount = roundType === 1 ? (this.checkLastBigRoadData ? (this.checkLastBigRoadData.tieCount + 1) : 1) : (this.checkLastBigRoadData ? (this.checkLastBigRoadData.type === 1 ? this.checkLastBigRoadData.tieCount : 0) : 0);
        let colIndex = 0;
        if (roundType === 1) {
            colIndex = this.checkLastBigRoadData ? this.checkLastBigRoadData.colIndex : 0;
        } else {
            colIndex = this.checkLastBigRoadData ? ((this.checkLastBigRoadData.type !== roundType && this.checkLastBigRoadData.type !== 1) ? (this.checkLastBigRoadData.colIndex + 1) : this.checkLastBigRoadData.colIndex) : 0;
        }
        let rowIndex = 0;
        if (roundType === 1) {
            rowIndex = this.checkLastBigRoadData ? this.checkLastBigRoadData.rowIndex : 0;
        } else {
            rowIndex = this.checkLastBigRoadData ? (this.checkLastBigRoadData.type !== roundType ? 0 : (this.checkLastBigRoadData.rowIndex + 1)) : 0;
        }
        const bigRoadData = {
            type: type,
            tieCount: tieCount,
            colIndex: colIndex,
            rowIndex: rowIndex
        }
        return bigRoadData;
    }

    private getResultType (data: LHD_Poker[]) {
        const minusNumber = data[0].Number - data[1].Number;
        return minusNumber > 0 ? 0 : (minusNumber === 0 ? 1 : 2);
    }

    private onOpenTrendDialogEvent() {
        AudioManger.getInstance().playSound(ICallback.SoundType.BUTTON_CLICK);
        DialogHandler.getInstance().showDialog(ICallback.DialogType.TREND);
    }
}


