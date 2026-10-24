import { _decorator, Node, Label, Button, EventHandler, Prefab, instantiate } from 'cc';
import { VoidCallback } from '../../framework/common/Types';
import { BaseViewController } from './BaseViewController';
import { ChartBarViewController } from './ChartBarViewController';
import GameManager, { DataType, GameManagerDataChangedCallback } from '../GameManager';
import { SML_BetType, SML_GameRecords, SML_GameResult, SML_RoundInfo } from '../Proto/Msg/GameMsg_SML';
import { FullGameHistoryCellViewController } from './FullGameHistoryCellViewController';
import { RadarGraphicsTool } from '../Tools/RadarGraphicsTool';
import { StringUtils } from '../../framework/utils/StringUtils';
import * as GameConfig from '../Common/GameConfig';
const { ccclass, property } = _decorator;

/**
 * 完整遊戲歷程佈局介面控制器
 */
@ccclass('FullGameHistoryViewController')
export class FullGameHistoryViewController extends BaseViewController implements GameManagerDataChangedCallback {


    @property(Node)
    public viewNode: Node;

    @property(Button)
    public closeButton: Button;

    @property(Label)
    public gameHistoryTitleLabel: Label;

    @property(Label)
    public statisticsChartTitleLabel: Label;

    @property(Node)
    public gameHistoryCellContainerNode: Node;

    @property(Prefab)
    public fullGameHistoryCellViewPrefab: Prefab;

    @property(Label)
    public statisticsChartFromPastGameLabel: Label;
    
    @property([ChartBarViewController])
    public statisticsChartBars: ChartBarViewController[] = [];

    @property(Label)
    public statisticsLadarTitleLabel: Label;

    @property(Label)
    public statisticsLadarFromPastGameLabel: Label;

    @property(RadarGraphicsTool)
    public radarGraphicsTool: RadarGraphicsTool;

    private dismissCallback: VoidCallback;

    private fullGameHistoryCellViewControllers: FullGameHistoryCellViewController[] = [];

    ////////////////////////////////////////////////////////////////////////////////
    //#region Overrides
    ////////////////////////////////////////////////////////////////////////////////
    onLoad() {
        super.onLoad();
        this.init();
    }

    init() {
        super.init();

        this.closeButton.node.on(Button.EventType.CLICK, this.onCloseButtonClick, this);

        GameManager.sharedInstance().registerOnDataChangedEvent(DataType.GameResultData, this);
        GameManager.sharedInstance().registerOnDataChangedEvent(DataType.RecordData, this);
        GameManager.sharedInstance().registerOnDataChangedEvent(DataType.RoundData, this);

        for (var i = 0; i < 30; ++i) {
            let prefab = instantiate(this.fullGameHistoryCellViewPrefab);
            let cellViewController = prefab.getComponent(FullGameHistoryCellViewController);
            cellViewController.setGameResult(SML_BetType.SML_BetTypeNone);
            this.gameHistoryCellContainerNode.addChild(prefab);
            this.fullGameHistoryCellViewControllers.push(cellViewController);
        }

        this.statisticsChartFromPastGameLabel.string = StringUtils.format(GameConfig.i18nValue("labeltext.lblFromPastGames"), 30);
        this.statisticsLadarFromPastGameLabel.string = StringUtils.format(GameConfig.i18nValue("labeltext.lblFromPastGames"), 30);
        
    }
    //#endregion
    
    ////////////////////////////////////////////////////////////////////////////////
    //#region Private functions
    ////////////////////////////////////////////////////////////////////////////////
    private addGameResult(gameResultData: SML_GameResult) {
        if (gameResultData.RoundID != null && gameResultData.RoundID <= this.fullGameHistoryCellViewControllers.length) {
            this.fullGameHistoryCellViewControllers[gameResultData.RoundID - 1].setGameResult(gameResultData.Result);
        }
        
        var indexOfStatisticsChartBar = -1;
        switch (gameResultData.Result) {
            case SML_BetType.SML_BetTypeGoalLeft: indexOfStatisticsChartBar = 0; break;
            case SML_BetType.SML_BetTypeGoalMiddle: indexOfStatisticsChartBar = 1; break;
            case SML_BetType.SML_BetTypeGoalRight: indexOfStatisticsChartBar = 2; break;
            case SML_BetType.SML_BetTypeSaveLeft: indexOfStatisticsChartBar = 3; break;
            case SML_BetType.SML_BetTypeSaveMiddle: indexOfStatisticsChartBar = 4; break;
            case SML_BetType.SML_BetTypeSaveRight: indexOfStatisticsChartBar = 5; break;
        }
        if (indexOfStatisticsChartBar != -1) this.statisticsChartBars[indexOfStatisticsChartBar].barValue += 1;
    }

    private clearGameResults() {
        this.gameHistoryCellContainerNode.children.forEach((node, index) => {
            let cellViewController = node.getComponent(FullGameHistoryCellViewController);
            cellViewController.setGameResult(SML_BetType.SML_BetTypeNone);
        });

        this.statisticsChartBars.forEach((viewController, index) => {
            viewController.barValue = 0;
        });
    }
    
    private updateRadarChart() {
        var radarValue = [];
        for (var i = 0; i < 6; ++i) {
            radarValue.push(0);
        }
        this.statisticsChartBars.forEach((viewController, index) => {
            switch (index) {
                case 0:
                    radarValue[2] = viewController.barValue / viewController.max;
                    break;
                case 1:
                    radarValue[3] = viewController.barValue / viewController.max;
                    break;
                case 2:
                    radarValue[4] = viewController.barValue / viewController.max;
                    break;
                case 3:
                    radarValue[1] = viewController.barValue / viewController.max;
                    break;
                case 4:
                    radarValue[0] = viewController.barValue / viewController.max;
                    break;
                case 5:
                    radarValue[5] = viewController.barValue / viewController.max;
                    break;
            }
        });
        this.radarGraphicsTool.showNextRadarData(radarValue, false);
    }
    //#endregion

    ////////////////////////////////////////////////////////////////////////////////
    //#region Public functions
    ////////////////////////////////////////////////////////////////////////////////
    open(dismissCallback: VoidCallback) {
        this.dismissCallback = dismissCallback;
        this.viewNode.active = true;
    }
    //#endregion

    ////////////////////////////////////////////////////////////////////////////////
    //#region Events
    ////////////////////////////////////////////////////////////////////////////////
    private onCloseButtonClick(event: Event) {
        this.viewNode.active = false;
        if (this.dismissCallback != null) {
            this.dismissCallback();
        }
    }
    //#endregion

    ////////////////////////////////////////////////////////////////////////////////
    //#region GameManagerDataChangedCallback
    ////////////////////////////////////////////////////////////////////////////////
    public onGameManagerDataChanged(dataType: DataType, data: any): void {
        switch (dataType) {
            case DataType.RoundData: {
                let roundData = data as SML_RoundInfo;
                this.statisticsChartBars.forEach((viewController, index) => {
                    viewController.max = roundData.RoundID;
                });
                break;
            }
            case DataType.GameResultData: {
                let gameResultData = data as SML_GameResult;
                if (gameResultData.RoundID == 1) {
                   this.clearGameResults();
                }
                this.addGameResult(gameResultData);
                this.updateRadarChart();
                break;
            }
            case DataType.RecordData: {
                let recordData = data as SML_GameRecords;
                this.clearGameResults();
                if (recordData.Results != null) {
                    recordData.Results.forEach((gameResultData, index) => {
                        this.addGameResult(gameResultData);
                    });
                }
                this.updateRadarChart();
                break;
            }
        }
    }
    //#endregion

}

