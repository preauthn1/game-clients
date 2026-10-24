import { _decorator, Component, Node, Button, Prefab, instantiate, Label, ScrollView } from 'cc';
import { BaseDialogHandler } from './BaseDialogHandler';
import { RoadColTemplate } from '../template/RoadColTemplate';
import { PlateTempate } from '../template/PlateTempate';
import { LHD_Cards } from '../Proto/Msg/httpMsg_LHD';
import { LHD_RoundID, LHD_Setting } from '../Proto/Msg/gameMsg_LHD';
import { MainThreeRoadTemplate } from '../template/MainThreeRoadTemplate';
import { BigRoadData, ThreeRoadData } from '../TrandHandler';
import { NextThreeRoadTemplate } from '../template/NextThreeRoadTemplate';
import * as ProtoTool from '../Tools/ProtoTool'
import Long from 'long';
const { ccclass, property } = _decorator;

/**
 * 各路資訊Popup Dialog
 */
@ccclass('TrendDialogHandler')
export class TrendDialogHandler extends BaseDialogHandler {

    private trendColCount: number = 15;

    @property({ group: { name: 'BigRoad', id: '0', displayOrder: 1}, type: ScrollView})
    public nodeBigRoadContentView: ScrollView;
    @property({ group: { name: 'BigRoad', id: '0', displayOrder: 1}, type: Prefab})
    public prefabBigRoadTemplate: Prefab;
    private arrBigRoadTemplate: RoadColTemplate[] = [];
    
    @property({ group: { name: 'BeadPlate', id: '0', displayOrder: 2}, type: ScrollView})
    public nodeBeadPlateContentView: ScrollView;
    @property({ group: { name: 'BeadPlate', id: '0', displayOrder: 2}, type: Prefab})
    public prefabBeadPlateTemplate: Prefab;
    private arrBeadPlateTemplate: PlateTempate[] = [];

    @property({ group: { name: 'BigEye', id: '0', displayOrder: 3}, type: ScrollView})
    public nodeBigEyeContentView: ScrollView;
    @property({ group: { name: 'BigEye', id: '0', displayOrder: 3}, type: Prefab})
    public prefabBigEyeTemplate: Prefab;
    private arrBigEyeRoadTemplate: MainThreeRoadTemplate[] = [];

    @property({ group: { name: 'SmallRoad', id: '0', displayOrder: 4}, type: ScrollView})
    public nodeSmallRoadContentView: ScrollView;
    @property({ group: { name: 'SmallRoad', id: '0', displayOrder: 4}, type: Prefab})
    public prefabSmallRoadTemplate: Prefab;
    private arrSmallRoadTemplate: MainThreeRoadTemplate[] = [];

    @property({ group: { name: 'Cockroach', id: '0', displayOrder: 5}, type: ScrollView})
    public nodeCockroachContentView: ScrollView;
    @property({ group: { name: 'Cockroach', id: '0', displayOrder: 5}, type: Prefab})
    public prefabCockroachTemplate: Prefab;
    private arrCockroachRoadTemplate: MainThreeRoadTemplate[] = [];

    @property({ group: { name: 'TrendCount', id: '5', displayOrder: 0}, type: Label})
    public lblDragonCount: Label;
    @property({ group: { name: 'TrendCount', id: '5', displayOrder: 0}, type: Label})
    public lblTigerCount: Label;
    @property({ group: { name: 'TrendCount', id: '5', displayOrder: 0}, type: Label})
    public lblTieCount: Label;
    @property({ group: { name: 'TrendCount', id: '5', displayOrder: 0}, type: Label})
    public lblTotalCount: Label;

    @property({group: { name: 'NextTable', id: '6', displayOrder: 6}, type: NextThreeRoadTemplate})
    public nextThreeBigEye: NextThreeRoadTemplate[] = [];
    @property({group: { name: 'NextTable', id: '6', displayOrder: 6}, type: NextThreeRoadTemplate})
    public nextThreeSmall: NextThreeRoadTemplate[] = [];
    @property({group: { name: 'NextTable', id: '6', displayOrder: 6}, type: NextThreeRoadTemplate})
    public nextThreeCockroach: NextThreeRoadTemplate[] = [];

    @property({group: {name: 'BetTable', id: '4', displayOrder: 7}, type: Label})
    public lblDragonTigerMin: Label;
    @property({group: {name: 'BetTable', id: '4', displayOrder: 7}, type: Label})
    public lblDragonTigerMax: Label;
    @property({group: {name: 'BetTable', id: '4', displayOrder: 7}, type: Label})
    public lblTieMin: Label;
    @property({group: {name: 'BetTable', id: '4', displayOrder: 7}, type: Label})
    public lblTieMax: Label;

    start() {
        super.start();
    }

    update(deltaTime: number) {
        
    }

    init() {
        super.init();
        
    }

    showDialog() {
        super.showDialog();
        this.nodeBigRoadContentView.scrollToPercentHorizontal(0, 0.1, true);
        this.nodeBeadPlateContentView.scrollToPercentHorizontal(0, 0.1, true);
    }

    createTrendContent () {
        this.createBigRoadContent();
        this.createBeadPlateContent();
        this.createBigEyeContent();
        this.createSmallContent();
        this.createCockroachContent();
    }

    syncGameSettingData(data: LHD_Setting) {
        const betMin = ProtoTool.long2Number(data.betlimitmoney as Long);
        const betDTMax = ProtoTool.long2Number(data.BetMax[0] as Long);
        const betTieMax = ProtoTool.long2Number(data.BetMax[1] as Long);
        this.lblDragonTigerMin.string = Math.round(betMin / 100).toString();
        this.lblTieMin.string = Math.round(betMin / 100).toString();
        this.lblDragonTigerMax.string = Math.round(betDTMax / 100).toString();
        this.lblTieMax.string = Math.round(betTieMax / 100).toString();
    }

    clearTrendContent () {
        this.arrBigRoadTemplate.forEach((template, index) => {
            template.clearRoadData();
        })

        this.arrBeadPlateTemplate.forEach((template, index) => {
            template.clearBreadPlate();
        })
        this.arrBigEyeRoadTemplate.forEach((template, index) => {
            template.clearRoadData();
        })
        this.arrSmallRoadTemplate.forEach((template, index) => {
            template.clearRoadData();
        })
        this.arrCockroachRoadTemplate.forEach((template, index) => {
            template.clearRoadData();
        })
    }

    //#region Create Trend Table Content
    private createBigRoadContent () {
        this.arrBigRoadTemplate.length = 0;
        for (let i = 0; i < this.trendColCount; i++) {
            const index = i;
            const template = instantiate(this.prefabBigRoadTemplate);
            template.setParent(this.nodeBigRoadContentView.content);
            const bigRoadTemplate = template.getComponent(RoadColTemplate);
            bigRoadTemplate.initRoad(index);
            this.arrBigRoadTemplate.push(bigRoadTemplate);
        }
        
    }

    private createBeadPlateContent () {
        this.arrBeadPlateTemplate.length = 0;
        for (let i = 0; i < this.trendColCount; i++) {
            const index = i;
            const template = instantiate(this.prefabBeadPlateTemplate);
            template.setParent(this.nodeBeadPlateContentView.content);
            const beadPlateTemplate = template.getComponent(PlateTempate);
            beadPlateTemplate.initPlate(index);
            this.arrBeadPlateTemplate.push(beadPlateTemplate);
        }
    }

    private createBigEyeContent () {
        this.arrBigEyeRoadTemplate.length = 0;
        for (let i = 0; i < this.trendColCount; i++) {
            const index = i;
            const template = instantiate(this.prefabBigEyeTemplate);
            template.setParent(this.nodeBigEyeContentView.content);
            const bigEyeTemplate = template.getComponent(MainThreeRoadTemplate);
            bigEyeTemplate.initRoad(index);
            this.arrBigEyeRoadTemplate.push(bigEyeTemplate);
        }
        this.nodeBigEyeContentView.scrollToPercentHorizontal(0, 0.1, true);
    }

    private createSmallContent () {
        this.arrSmallRoadTemplate.length = 0;
        for (let i = 0; i < this.trendColCount; i++) {
            const index = i;
            const template = instantiate(this.prefabSmallRoadTemplate);
            template.setParent(this.nodeSmallRoadContentView.content);
            const bigEyeTemplate = template.getComponent(MainThreeRoadTemplate);
            bigEyeTemplate.initRoad(index);
            this.arrSmallRoadTemplate.push(bigEyeTemplate);
        }
        this.nodeSmallRoadContentView.scrollToPercentHorizontal(0, 0.1, true);
    }

    private createCockroachContent () {
        this.arrCockroachRoadTemplate.length = 0;
        for (let i = 0; i < this.trendColCount; i++) {
            const index = i;
            const template = instantiate(this.prefabCockroachTemplate);
            template.setParent(this.nodeCockroachContentView.content);
            const bigEyeTemplate = template.getComponent(MainThreeRoadTemplate);
            bigEyeTemplate.initRoad(index);
            this.arrCockroachRoadTemplate.push(bigEyeTemplate);
        }
        this.nodeCockroachContentView.scrollToPercentHorizontal(0, 0.1, true);
    }
    //#endregion

    setRoundContent (data: LHD_RoundID) {
        this.lblDragonCount.string = data.LongWin.toString();
        this.lblTigerCount.string = data.HuWin.toString();
        this.lblTieCount.string = data.HeWin.toString();
        this.lblTotalCount.string = data.RoundID.toString();
    }

    setBigRoadData(index: number, data: BigRoadData, isNew: boolean) {
        if (index >= this.arrBigRoadTemplate.length) {
            const template = instantiate(this.prefabBigRoadTemplate);
            template.setParent(this.nodeBigRoadContentView.content);
            const bigRoadTemplate = template.getComponent(RoadColTemplate);
            bigRoadTemplate.initRoad(index);
            this.arrBigRoadTemplate.push(bigRoadTemplate);
        }
        this.arrBigRoadTemplate[index].setRoadData(data, isNew);
    }

    setBeadPlateData(index: number, data: LHD_Cards, isNew: boolean) {
        this.arrBeadPlateTemplate[index].setBreadPlate(data, isNew);
    }

    setBigEyeRoadData(data: ThreeRoadData, isNew: boolean) {
        if (data.index >= this.arrBigEyeRoadTemplate.length) {
            const template = instantiate(this.prefabBigEyeTemplate);
            template.setParent(this.nodeBigEyeContentView.content);
            const bigEyeTemplate = template.getComponent(MainThreeRoadTemplate);
            bigEyeTemplate.initRoad(data.index);
            this.arrBigEyeRoadTemplate.push(bigEyeTemplate);
        }
        this.arrBigEyeRoadTemplate[data.index].setRoadData(data.index, data.rowIndex, data.type, isNew);
    }

    setSmallRoadData(data: ThreeRoadData, isNew: boolean) {
        if (data.index >= this.arrSmallRoadTemplate.length) {
            const template = instantiate(this.prefabSmallRoadTemplate);
            template.setParent(this.nodeSmallRoadContentView.content);
            const bigEyeTemplate = template.getComponent(MainThreeRoadTemplate);
            bigEyeTemplate.initRoad(data.index);
            this.arrSmallRoadTemplate.push(bigEyeTemplate);
        }
        this.arrSmallRoadTemplate[data.index].setRoadData(data.index, data.rowIndex, data.type, isNew);
    }

    setCockroachRoadData(data: ThreeRoadData, isNew: boolean) {
        if (data.index >= this.arrCockroachRoadTemplate.length) {
            const template = instantiate(this.prefabCockroachTemplate);
            template.setParent(this.nodeCockroachContentView.content);
            const bigEyeTemplate = template.getComponent(MainThreeRoadTemplate);
            bigEyeTemplate.initRoad(data.index);
            this.arrCockroachRoadTemplate.push(bigEyeTemplate);
        }
        this.arrCockroachRoadTemplate[data.index].setRoadData(data.index, data.rowIndex, data.type, isNew);
    }

    setNextDragonData(bigEyeType: number, smallType: number, cockroachType: number) {
        this.nextThreeBigEye.forEach(template => {
            template.setNextThreeRoadType(bigEyeType);
        })
        this.nextThreeSmall.forEach(template => {
            template.setNextThreeRoadType(smallType);
        })
        this.nextThreeCockroach.forEach(template => {
            template.setNextThreeRoadType(cockroachType);
        })
    }
}


