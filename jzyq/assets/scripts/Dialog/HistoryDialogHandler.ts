import { _decorator, Component, Node, ScrollView, Prefab, instantiate, Enum, size, Label } from 'cc';
import { RadarGraphicsTool } from '../Tools/RadarGraphicsTool';
import { BaseDialogHandler } from './BaseDialogHandler';
import { JZYQ_GameResult } from '../Proto/Game/GameMsg_JZYQ';
import { DEFAULT_HISTORY_COUNT } from '../Game/HistoryHanlder';
import { HistoryBigGridTemplate } from '../template/HistoryBigGridTemplate';
import { BarChartTool } from '../Tools/BarChartTool';
import * as GameConfig from '../Common/GameConfig';
const { ccclass, property } = _decorator;

/**
 * 歷史下注記錄管理控制
 */
@ccclass('HistoryDialogHandler')
export class HistoryDialogHandler extends BaseDialogHandler {

    private static instance: HistoryDialogHandler;

    public static getInstance() {
        return HistoryDialogHandler.instance;
    }

    @property(RadarGraphicsTool)
    public radarGraphics: RadarGraphicsTool;
    @property(BarChartTool)
    public barChart: BarChartTool;

    @property(ScrollView)
    public scrollViewHistory: ScrollView;
    @property(Prefab)
    public prefabHistoryTemplate: Prefab;
    private arrHistoryTemplate: HistoryBigGridTemplate[] = [];
    @property(Label)
    public arrPostGameRound: Label[] = [];

    private arrHistoryRecordCount: number[] = [0, 0, 0, 0, 0, 0];
    private historyRatio: number[] = [];
    private nowRound = 0;
    start() {
        HistoryDialogHandler.instance = this;
        super.start();
        this.initHistoryRoad();
    }

    showDialog() {
        super.showDialog();
        this.radarGraphics.showNextRadarData(this.historyRatio, true);
        this.barChart.showNextBarChart(this.historyRatio, true);
    }

    initHistoryRoad() {
        this.arrHistoryTemplate.forEach(template => {
            template.destroy();
        })
        this.arrHistoryTemplate.length = 0;
        for (let i = 0; i < DEFAULT_HISTORY_COUNT; i++) {
            const index = i;
            const historyTemplate = this.addNewHistoryTemplate(index);
            this.arrHistoryTemplate.push(historyTemplate);
        }
    }

    syncNewRecordData(data: JZYQ_GameResult, isNew: boolean = false) {
        this.nowRound = data.RoundID;
        const roundIndex = data.RoundID - 1;
        if (roundIndex >= this.arrHistoryTemplate.length - 1) {
            const addTemplate = this.addNewHistoryTemplate(roundIndex);
            this.arrHistoryTemplate.push(addTemplate);
        }
        const template = this.arrHistoryTemplate[roundIndex];
        if (template) {
            template.setHistoryGridData(data, isNew);
        }
        this.updateFromGameRound();
        this.updateHistoryRecordCount(data, isNew);
    }

    private updateFromGameRound() {
        const msgString = GameConfig.getMessageLocation('msgHistoryGameCount', 'from post {0} games.');
        this.arrPostGameRound.forEach(label => {
            label.string = GameConfig.StringFormat(msgString, [this.nowRound.toString()]);
        })
    }

    private addNewHistoryTemplate(index: number): HistoryBigGridTemplate {
        const item = instantiate(this.prefabHistoryTemplate);
        item.setParent(this.scrollViewHistory.content);
        const historyTemplate = item.getComponent(HistoryBigGridTemplate);
        historyTemplate.initHistoryGridData(index);
        return historyTemplate;
    }

    private updateHistoryRecordCount(data: JZYQ_GameResult, isNew: boolean = false) {
        var self = this;
        this.unscheduleAllCallbacks();
        const isGoal = data.Result.includes('Goal');
        const isInside = data.Result.includes('Inside');
        this.arrHistoryRecordCount[0] += isGoal ? 1 : 0;
        this.arrHistoryRecordCount[1] += (isGoal && isInside) ? 1 : 0;
        this.arrHistoryRecordCount[2] += (isGoal && !isInside) ? 1 : 0;
        this.arrHistoryRecordCount[3] += !isGoal ? 1 : 0;
        this.arrHistoryRecordCount[4] += (!isGoal && isInside) ? 1 : 0;
        this.arrHistoryRecordCount[5] += (!isGoal && !isInside) ? 1 : 0;
        
        this.arrHistoryRecordCount.forEach((count, index) => {
            this.historyRatio[this.coverRadarIndex(index)] = count === 0 ? 0 : (count / this.nowRound);
        });
        if (isNew) {
            this.scheduleOnce(() => {
                self.showChart();
            }, 5);
        } else {
            this.showChart();
        }
    }

    private showChart() {
        if (this.baseNode.active) {
            this.radarGraphics.showNextRadarData(this.historyRatio, false, 1);
            this.barChart.showNextBarChart(this.historyRatio, false, 1);
        }
    }

    private coverRadarIndex(historyIndex: number): number {
        let radarIndex = 0;
        switch (historyIndex) {
            case 0:
                radarIndex = 3;
                break;
            case 1:
                radarIndex = 2;
                break;
            case 2:
                radarIndex = 4;
                break;
            case 3:
                radarIndex = 0;
                break;
            case 4:
                radarIndex = 1;
                break;
            case 5:
                radarIndex = 5;
                break;                                      
        }
        return radarIndex;
    }

    resetHistoryTemplate() {
        this.arrHistoryTemplate.forEach(template => {
            template.resetHistoryGridData();
        })
        for (let i = 0; i < this.arrHistoryRecordCount.length; i++) {
            this.arrHistoryRecordCount[i] = 0;
        }
        this.radarGraphics.showNextRadarData([0, 0, 0 ,0 ,0 ,0])
        this.barChart.showNextBarChart([0, 0, 0 ,0 ,0 ,0]);
    }
}


