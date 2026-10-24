import { _decorator, Component, Node, Button, ScrollView, Prefab, instantiate } from 'cc';
import { HistoryGridTemplate } from '../template/HistoryGridTemplate';
import { BaseHandler } from './BaseHandler';
import GameDataManager from '../Data/GameDataManager';
import { GameDataType, GameStatus } from '../Data/GameData';
import { JZYQ_GameRecords, JZYQ_GameResult } from '../Proto/Game/GameMsg_JZYQ';
import { DialogController, DialogType } from '../Dialog/DialogController';
import { HistoryDialogHandler } from '../Dialog/HistoryDialogHandler';
import { AudioManger, SoundType } from './AudioManger';
const { ccclass, property } = _decorator;

export const DEFAULT_HISTORY_COUNT = 15;

/**
 * 下方歷史紀錄管理控制
 */
@ccclass('HistoryHanlder')
export class HistoryHanlder extends BaseHandler {
    @property(Button)
    public btnFullScreen: Button;
    @property(ScrollView)
    public scrollViewHistoryView: ScrollView;
    @property(Prefab)
    public prefabHistoryTemplate: Prefab;

    private arrayHistoryGridTemplate: HistoryGridTemplate[] = [];

    private nextRoundId = 0;

    start() {
        
    }

    init(callback:{():void} = null) {
        var self = this;
        super.init(callback);
        this.btnFullScreen.node.on(Button.EventType.CLICK, function() {
            AudioManger.getInstance().playSound(SoundType.BUTTON_CLICK);
            DialogController.getInstance().showDialog(DialogType.HistoryDialog);
        });
        this.createHistoryGridTemplate();
        GameDataManager.getInstance().registerDataChange(GameDataType.TrandData, function(data: any) {
            self.setRoundRecordData(data);
        });
        GameDataManager.getInstance().registerDataChange(GameDataType.GameResult, function(data: any) {
            self.syncNewRecordData(data as JZYQ_GameResult, true);
        });
        if (callback) {
            callback();
        }
    }

    updateGameStatus (status: GameStatus) {
        super.updateGameStatus(status);
        switch (this.gameStatus) {
            case GameStatus.BET_START:
                if (this.nextRoundId === 30) {
                    this.resetHistoryTemplate();
                }
                break;
        }
    }

    setRoundRecordData(data: JZYQ_GameRecords) {
        // console.log('setRoundRecordData:', data);
        data.Results?.forEach(resultData => {
            this.syncNewRecordData(resultData);
        })
    }

    syncNewRecordData(data: JZYQ_GameResult, isNew: boolean = false) {
        this.nextRoundId = data.RoundID;
        const historyIndex = data.RoundID - 1;
        if (historyIndex >= this.arrayHistoryGridTemplate.length - 1) {
            const addGridTemplate = this.addHistoryGridTemplate();
            this.arrayHistoryGridTemplate.push(addGridTemplate);
        }
        const gridTemplate = this.arrayHistoryGridTemplate[historyIndex]
        if (gridTemplate) {
            gridTemplate.setHistoryGridData(data, isNew);
        }
        HistoryDialogHandler.getInstance().syncNewRecordData(data, isNew);
    }

    createHistoryGridTemplate() {
        this.arrayHistoryGridTemplate.forEach(template => {
            template.node.destroy();
        })
        this.arrayHistoryGridTemplate.length = 0;
        for (var i = 0; i < DEFAULT_HISTORY_COUNT; i++) {
            const index = i;
            const gridTemplate = this.addHistoryGridTemplate();
            gridTemplate.initHistoryGridData(index);
            this.arrayHistoryGridTemplate.push(gridTemplate);
        }
    }

    addHistoryGridTemplate(): HistoryGridTemplate {
        const gridItem = instantiate(this.prefabHistoryTemplate);
        gridItem.setParent(this.scrollViewHistoryView.content);
        const gridTemplate = gridItem.getComponent(HistoryGridTemplate);
        gridTemplate.initHistoryGridData(this.arrayHistoryGridTemplate.length);
        return gridTemplate;
    } 

    resetHistoryTemplate() {
        this.arrayHistoryGridTemplate.forEach(template => {
            template.resetHistoryGridData();
        })
        HistoryDialogHandler.getInstance().resetHistoryTemplate();
    }
}


