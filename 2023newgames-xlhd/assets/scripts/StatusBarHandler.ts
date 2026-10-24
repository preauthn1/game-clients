import { _decorator, Component, Node, Button, Label, RichText } from 'cc';
import { BaseHander } from './BaseHander';
import * as GameConfig from './Common/GameConfig'
import * as ICallback from './Data/ICallback';
import GameDataManager from './GameDataManager';
import { LHD_RoundID, LHD_Setting } from './Proto/Msg/gameMsg_LHD';
import { DialogHandler } from './Dialog/DialogHandler';
import { AudioManger } from './AudioManger';
import * as ProtoTool from './Tools/ProtoTool';
import Long from 'long';
import * as i18n from 'db://i18n/LanguageData';
const { ccclass, property } = _decorator;

/**
 * 上方狀態列控制器
 * 局數、MAX MIN BET等等
 */
@ccclass('StatusBarHandler')
export class StatusBarHandler extends BaseHander {
    @property(Button)
    public btnHome: Button | null = null;
    @property(Button)
    public btnSetting: Button | null = null;
    @property(Button)
    public btnRegulation: Button | null = null;
    @property(Label)
    public lblGameRound: Label;
    @property(RichText)
    public rTxtBetLimit: RichText;

    private nowRoundCount: number = -1;

    onLoad() {
        
    }

    start() {
        super.start();
    }

    updateGameStatus (status: ICallback.GameStatus) {
        super.updateGameStatus(status);
        switch (this.gameStatus) {
            case ICallback.GameStatus.BET_START:
                this.updateRoundID();
                break;
        }
    }

    init() {
        var self = this;
        super.init();
        if (this.btnHome != null) {
            this.btnHome.node.on(Button.EventType.CLICK, this.onHomeClickEvent, this)
        }
        if (this.btnSetting != null) {
            this.btnSetting.node.on(Button.EventType.CLICK, this.onSettingClickEvent, this)
        }
        if (this.btnRegulation != null) {
            this.btnRegulation.node.on(Button.EventType.CLICK, this.onReguationClickEvent, this)
        }
        GameDataManager.getInstance().registerDataChange(ICallback.GameDataType.RoundData, function(data: any) {
            self.saveRoundCount(data as LHD_RoundID);      
        })
    }

    saveRoundCount (data: LHD_RoundID) {
        const refresh = this.nowRoundCount === -1;
        this.nowRoundCount = data.RoundID + 1;
        if (this.nowRoundCount > 30) {
            this.nowRoundCount = 1;
        }
        if (refresh) {
            this.updateRoundID();
        }
    }

    updateRoundID () {
        this.lblGameRound.string = (this.nowRoundCount).toString();
    }

    update(deltaTime: number) {
        // console.log('update:', deltaTime);
    }

    onHomeClickEvent () {
        // console.log('Home Button Click!')
        AudioManger.getInstance().playSound(ICallback.SoundType.BUTTON_CLICK);
    }

    onSettingClickEvent () {
        // console.log('Setting Button Click!')
        AudioManger.getInstance().playSound(ICallback.SoundType.BUTTON_CLICK);
        DialogHandler.getInstance().showDialog(ICallback.DialogType.SETTING);
    }

    onReguationClickEvent () {
        AudioManger.getInstance().playSound(ICallback.SoundType.BUTTON_CLICK);
        DialogHandler.getInstance().showDialog(ICallback.DialogType.RULE);
        // console.log('Regulation Button Click!')
    }

    syncGameSettingData(data: LHD_Setting) {
        let betMin = 9999999;
        const betMax = (ProtoTool.long2Number(data.UserMaxBet as Long));
        data.BetCount.forEach(betData => {
            betMin = Math.min(betMin, betData);
        })
        const message = GameConfig.StringFormat(GameConfig.getMessageLocation('lblTopMinMax'), [Math.round(betMin / 100).toString(), Math.round(betMax / 100).toString()]);
        this.rTxtBetLimit.string = message;
    }

    onDestroy () {
        // if (this.btnHome != null) {
        //     this.btnHome.node.off(Button.EventType.CLICK, this.onHomeClickEvent, this)
        // }
        // if (this.btnSetting != null) {
        //     this.btnSetting.node.off(Button.EventType.CLICK, this.onSettingClickEvent, this)
        // }
        // if (this.btnRegulation != null) {
        //     this.btnRegulation.node.off(Button.EventType.CLICK, this.onReguationClickEvent, this)
        // }
    }
    
}