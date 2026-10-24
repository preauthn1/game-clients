import { _decorator, Node, Label, Button, } from 'cc';
import { VoidCallback } from '../../framework/common/Types';
import GameManager, { DataType, } from '../GameManager';
import { BaseViewController } from './BaseViewController';
import { GameManagerDataChangedCallback } from '../GameManager';
import { SML_BetType, SML_Setting } from '../Proto/Msg/GameMsg_SML';
import { StringUtils } from '../../framework/utils/StringUtils';
import { AudioManger } from '../../framework/common/AudioManager';
const { ccclass, property } = _decorator;

/**
 * 遊戲規則對話框佈局介面控制器
 */
@ccclass('RuleDialogViewController')
export class RuleDialogViewController extends BaseViewController implements GameManagerDataChangedCallback {

    @property(Node)
    public viewNode: Node;

    @property(Label)
    public dialogTitleLabel: Label;

    @property(Button)
    public closeButton: Button;

    @property(Label)
    public ruleDescriptionTitleLabel: Label;

    @property(Label)
    public ruleDescriptionLabel: Label;

    @property(Label)
    public typeOfBetTitleLabel: Label;

    @property(Label)
    public payoutOddsTitleLabel: Label;

    @property([Label])
    public typeOfBetLabels: Array<Label> = [];

    @property([Label])
    public typeOfBetOddLabels: Array<Label> = [];

    private closedCallback: VoidCallback;

    //#region Overrides
    init() {
        super.init();

        this.closeButton.node.on(Button.EventType.CLICK, this.onCloseButtonClick, this);

        GameManager.sharedInstance().registerOnDataChangedEvent(DataType.SettingData, this);
    }
    //#endregion

    public open(closedCallback: VoidCallback) {
        this.closedCallback = closedCallback;
        this.viewNode.active = true;
    }

    private onCloseButtonClick() {
        this.viewNode.active = false;
        AudioManger.sharedInstance().playSound(0, false, false, 1);
        if (this.closedCallback != null) {
            this.closedCallback();
        }
    }

    //#region GameManagerDataChangedCallback
    public onGameManagerDataChanged(dataType: DataType, data: any): void {
        switch (dataType) {
            case DataType.SettingData: {
                let settingData = data as SML_Setting;
                
                let betItemViewTypes = [
                    SML_BetType.SML_BetTypeGoal,
                    SML_BetType.SML_BetTypeGoalLeft,
                    SML_BetType.SML_BetTypeGoalMiddle,
                    SML_BetType.SML_BetTypeGoalRight,
                    SML_BetType.SML_BetTypeSave,
                    SML_BetType.SML_BetTypeSaveLeft,
                    SML_BetType.SML_BetTypeSaveMiddle,
                    SML_BetType.SML_BetTypeSaveRight,
                ];
                settingData.BetAreas.forEach((betArea, index) => {
                    for (var i = 0; i < betItemViewTypes.length; ++i) {
                        if (betItemViewTypes[i] === betArea.Type) {
                            this.typeOfBetOddLabels[i].string = StringUtils.format("{0} : 1", betArea.Odd.toFixed(2).toString());
                            break;
                        }
                    }
                });
                break;
            }
        }
    }
    //#endregion
}

