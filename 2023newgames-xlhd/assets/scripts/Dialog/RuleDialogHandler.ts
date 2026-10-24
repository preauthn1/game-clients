import { _decorator, Component, Node, Label } from 'cc';
import { BetArea, LHD_Setting } from '../Proto/Msg/gameMsg_LHD';
import * as GameConfig from '../Common/GameConfig';
import * as ICallback from '../Data/ICallback';
import { BaseDialogHandler } from './BaseDialogHandler';
import GameDataManager from '../GameDataManager';
const { ccclass, property } = _decorator;

/**
 * 遊戲規則Popup Dialog
 */
@ccclass('RuleDialogHandler')
export class RuleDialogHandler extends BaseDialogHandler {
    @property(Label)
    public lblRuleOddContent: Label;

    start() {
        var self = this;
        GameDataManager.getInstance().registerDataChange(ICallback.GameDataType.SettingData, function(data: any) {
            self.syncGameSettingData(data as LHD_Setting);
        })
    }

    syncGameSettingData(data: LHD_Setting) {
        const oddsValue = GameConfig.getMessageLocation('lblBetContent', '【Dragon】 x{0}\n【Tiger】 x{2}\n【Tie】 x{1}');
        const replaceOddsData = ['1', '8', '1'];
        if (data) {
            data.BetAreas?.forEach(betArea => {
                replaceOddsData[betArea.Type - 1] = betArea.Odds.toFixed(2).toString();
            })
        }
        this.lblRuleOddContent.string = GameConfig.StringFormat(oddsValue, replaceOddsData);
    }
}


