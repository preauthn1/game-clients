import { _decorator, Node, Button, Label, EventHandler, Prefab, instantiate } from 'cc';
import { FullGameHistoryViewController } from './FullGameHistoryViewController';
import { BaseViewController } from './BaseViewController';
import GameManager, { DataType, GameManagerDataChangedCallback } from '../GameManager';
import { SML_GameRecords, SML_GameResult, SML_BetType } from '../Proto/Msg/GameMsg_SML';
import { GameHistoryCellViewController } from './GameHistoryCellViewController';
const { ccclass, property } = _decorator;

/**
 * 遊戲歷程佈局介面控制器
 */
@ccclass('GameHistoryViewController')
export class GameHistoryViewController extends BaseViewController implements GameManagerDataChangedCallback {

    @property(Label)
    public titleLabel: Label;

    @property(Button)
    public fullScreenButton: Button;

    @property(Node) 
    public fullMaskViewNode: Node;

    @property(FullGameHistoryViewController)
    public fullGameHistoryViewController: FullGameHistoryViewController;

    @property(Node)
    public gameHistoryCellContainerNode: Node;

    @property(Prefab)
    public gameHistoryCellViewPrefab: Prefab;

    private gameHistoryCellViewControllers: GameHistoryCellViewController[] = [];

    ////////////////////////////////////////////////////////////////////////////////
    //#region Overrides
    ////////////////////////////////////////////////////////////////////////////////
    onLoad() {
        super.onLoad();
        this.init();
    }

    init() {
        super.init();
        
        this.fullScreenButton.node.on(Button.EventType.CLICK, this.onFullScreenButtonClick, this);

        GameManager.sharedInstance().registerOnDataChangedEvent(DataType.GameResultData, this);
        GameManager.sharedInstance().registerOnDataChangedEvent(DataType.RecordData, this);

        for (var i = 0; i < 30; ++i) {
            let prefab = instantiate(this.gameHistoryCellViewPrefab);
            let cellViewController = prefab.getComponent(GameHistoryCellViewController);
            cellViewController.setGameResult(SML_BetType.SML_BetTypeNone);
            this.gameHistoryCellContainerNode.addChild(prefab);
            this.gameHistoryCellViewControllers.push(cellViewController);
        }
        
    }
    //#endregion

    ////////////////////////////////////////////////////////////////////////////////
    //#region Private functions
    ////////////////////////////////////////////////////////////////////////////////
    private addGameResult(gameResultData: SML_GameResult) {
        if (gameResultData.RoundID != null && gameResultData.RoundID <= this.gameHistoryCellViewControllers.length) {
            this.gameHistoryCellViewControllers[gameResultData.RoundID - 1].setGameResult(gameResultData.Result);
        }
    }

    private clearGameResults() {
        this.gameHistoryCellContainerNode.children.forEach((node, index) => {
            let cellViewController = node.getComponent(GameHistoryCellViewController);
            cellViewController.setGameResult(SML_BetType.SML_BetTypeNone);
        });
    }
    //#endregion

    ////////////////////////////////////////////////////////////////////////////////
    //#region Public functions
    ////////////////////////////////////////////////////////////////////////////////
    public setTitle(title: string) {
        this.titleLabel.string = title;
    }
    //#endregion

    ////////////////////////////////////////////////////////////////////////////////
    //#region Events
    ////////////////////////////////////////////////////////////////////////////////
    private onFullScreenButtonClick(event: Event) {
        this.fullMaskViewNode.active = true;
        this.fullGameHistoryViewController.open(() => {
            this.fullMaskViewNode.active = false;
        });
    }
    //#endregion

    ////////////////////////////////////////////////////////////////////////////////
    //#region GameManagerDataChangedCallback
    ////////////////////////////////////////////////////////////////////////////////
    public onGameManagerDataChanged(dataType: DataType, data: any): void {
        switch (dataType) {
            case DataType.GameResultData: {
                let gameResultData = data as SML_GameResult;
                if (gameResultData.RoundID == 1) {
                    this.clearGameResults();
                }
                this.addGameResult(gameResultData);
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
                break;
            }
        }
    }
    //#endregion
}

