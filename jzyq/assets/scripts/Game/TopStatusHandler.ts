import { _decorator, Component, Node, Button, Label, RichText } from 'cc';
import { GameDataType, GameStatus } from '../Data/GameData';
import { BaseHandler } from './BaseHandler';
import { DialogController, DialogType } from '../Dialog/DialogController';
import GameDataManager from '../Data/GameDataManager';
import { JZYQ_RoundInfo, JZYQ_Setting } from '../Proto/Game/GameMsg_JZYQ';
import * as GameConfig from '../Common/GameConfig'
import * as ProtoTool from '../Tools/ProtoTool'
import Long from 'long';
import { AudioManger, SoundType } from './AudioManger';
const { ccclass, property } = _decorator;

/**
 * 上方狀態列管理控制器
 */
@ccclass('TopStatusHandler')
export class TopStatusHandler extends BaseHandler {
    @property(Button)
    public btnHome: Button;
    @property(Button)
    public btnSetting: Button;
    @property(Button)
    public btnRegulation: Button;
    @property(Label)
    public lblGameRound: Label;
    @property(RichText)
    public richTextBetLimit: RichText;

    private nowRoundId = -1;


    start() {
        
    }

    updateGameStatus (status: GameStatus) {
        super.updateGameStatus(status);
        switch (this.gameStatus) {
            case GameStatus.BET_START:
                this.updateRoundId(true);
                break;
        }
    }

    init(callback:{():void} = null) {
        super.init(callback);
        var self = this;
        this.btnHome.node.on(Button.EventType.CLICK, function() {
            AudioManger.getInstance().playSound(SoundType.BUTTON_CLICK);
        }, this);
        this.btnSetting.node.on(Button.EventType.CLICK, function() {
            AudioManger.getInstance().playSound(SoundType.BUTTON_CLICK);
            DialogController.getInstance().showDialog(DialogType.SettingDialog);
        }, this);
        this.btnRegulation.node.on(Button.EventType.CLICK, function() {
            AudioManger.getInstance().playSound(SoundType.BUTTON_CLICK);
            DialogController.getInstance().showDialog(DialogType.RuleDialog);
        }, this);
        GameDataManager.getInstance().registerDataChange(GameDataType.SettingData, function(data: JZYQ_Setting) {
            self.setBetLimitValue(data)
        });
        GameDataManager.getInstance().registerDataChange(GameDataType.RoundData, function(data: JZYQ_RoundInfo) {
            self.nowRoundId = data.RoundID;
            self.updateRoundId();
        })
        if (callback) {
            callback();
        }
    }

    updateRoundId(isStartBet: boolean = false) {
        const showRoundId = isStartBet ? (this.nowRoundId === 30 ? 1 : (this.nowRoundId + 1)) : this.nowRoundId;
        this.lblGameRound.string = showRoundId.toString();
    }

    setBetLimitValue(data: JZYQ_Setting) {
        let betMin = 9999999;
        let betMax = ProtoTool.long2Number(data.UserMaxBet as Long) / 100;
        data.BetCount.forEach(betData => {
            betMin = Math.min(betMin, ProtoTool.long2Number(betData as Long) / 100);
        })
        this.richTextBetLimit.string = GameConfig.StringFormat(GameConfig.getMessageLocation('msgTopMinMax', '<color=#ffffff>Min : {0}</color><color=#e2c657> / </color> <color=#ffffff>Max : {1}</color>'), [betMin.toString(), betMax.toString()]);
    }
}


