import { _decorator, Component, Label, Node } from 'cc';
import { BaseDialogHandler } from '../../CocosFrameworks/UI/BaseDialogHandler';
import { Game_BetType } from '../../Data/GameData';
import { GameDataManager } from '../../Data/GameDataManager';
import { GameDataType } from '../../CocosFrameworks/Data/BaseGameDataManager';
import { encodeRoulette_BetType, Roulette_Setting } from '../../Proto/Game/GameMsg_Roulette';
import * as ProtoTools from '../../CocosFrameworks/Proto/ProtoTool'
import Long from 'long';
const { ccclass, property } = _decorator;

@ccclass('InfoUIData')
export class InfoUIData {
    @property({ type: Game_BetType })
    public type: Game_BetType;
    @property(Label)
    public lblMinBet: Label;
    @property(Label)
    public lblMaxBet: Label;
    @property(Label)
    public lblOdds: Label;
}

@ccclass('DialogInfoHandler')
export class DialogInfoHandler extends BaseDialogHandler {

    @property(InfoUIData)
    public arrInfoUIData: InfoUIData[] = [];

    public init(): void {
        let self = this;
        super.init();
        GameDataManager.getInstance().registerDataChange(GameDataType.SettingData, function (data: Roulette_Setting) {
            self.setBetTableValue(data);
        })
    }

    private setBetTableValue(data: Roulette_Setting) {
        data.BetAreas.forEach(betArea => {
            const type = encodeRoulette_BetType[betArea.Type];
            const infoUIData = this.arrInfoUIData.find(infoUI => infoUI.type === type);
            if (infoUIData) {
                const minBet = ProtoTools.long2Number(betArea.MinBet as Long);
                const maxBet = ProtoTools.long2Number(betArea.MaxBet as Long);
                infoUIData.lblMinBet.string = parseFloat((minBet / 100).toFixed(2)).toString();
                infoUIData.lblMaxBet.string = parseFloat((maxBet / 100).toFixed(2)).toString();
                infoUIData.lblOdds.string = (betArea.Odd + 1) + 'X';
            }
        })
    }
}


