import { _decorator, Component, Node, Label } from 'cc';
import { BaseDialogHandler } from './BaseDialogHandler';
import GameDataManager from '../Data/GameDataManager';
import { GameDataType, Game_BetType } from '../Data/GameData';
import { JZYQ_Setting, encodeJZYQ_BetType } from '../Proto/Game/GameMsg_JZYQ';
const { ccclass, property } = _decorator;

@ccclass('RuleOddUIData')
export class RuleOddUIData {
    @property({ type: Game_BetType})
    public type: Game_BetType = Game_BetType.JZYQ_BetTypeNone;
    @property(Label)
    public lblOddValue: Label;
}

/**
 * 遊戲規則Popup Dialog
 */
@ccclass('RuleDialogHandler')
export class RuleDialogHandler extends BaseDialogHandler {
    @property(RuleOddUIData)
    public arrRuleOddUIData: RuleOddUIData[] = [];

    start() {
        var self = this;
        GameDataManager.getInstance().registerDataChange(GameDataType.SettingData, function(data: JZYQ_Setting) {
            self.syncOddPaymentValue(data);
        })
    }

    syncOddPaymentValue(data: JZYQ_Setting) {
        data.BetAreas?.forEach(betAres => {
            const uiData = this.arrRuleOddUIData.find(ui => ui.type === encodeJZYQ_BetType[betAres.Type]);
            if (uiData) {
                uiData.lblOddValue.string = betAres.Odd + ' : 1';
            }
        })
    }
}


