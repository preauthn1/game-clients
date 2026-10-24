import { _decorator, Node, Button, Label, js } from 'cc';
import GameManager, { DataType } from '../GameManager';
import { BaseViewController } from './BaseViewController';
import { RuleDialogViewController } from './RuleDialogViewController';
import { SettingDialogViewController } from './SettingDialogViewController';
import { GameManagerDataChangedCallback } from '../GameManager';
import { SML_RoundInfo, SML_Setting, SML_Step, SML_StepInfo, SML_GameRecords } from '../Proto/Msg/GameMsg_SML';
import * as ProtoTool from '../Tools/ProtoTool';
import * as GameConfig from '../Common/GameConfig';
import Long from 'long';
import { StringUtils } from '../../framework/utils/StringUtils';
import { AudioManger } from '../../framework/common/AudioManager';
const { ccclass, property, executionOrder } = _decorator;

/**
 * 遊戲上方區域佈局介面控制器
 */
@ccclass('TopBarViewController')
@executionOrder(0)
export class TopBarViewController extends BaseViewController implements GameManagerDataChangedCallback {
    
    @property(Node)
    public fullMaskView: Node;

    @property(Button)
    public homeButton: Button;

    @property(Label)
    public gameNumberTitleLabel: Label;

    @property(Label)
    public gameNumberLabel: Label;

    @property(Label)
    public betLimitTitleLabel: Label;
    
    @property(Label)
    public betMinValueLabel: Label;

    @property(Label)
    public betMaxValueLabel: Label;

    @property(Button)
    public regulationButton: Button;

    @property(Button)
    public systemButton: Button;

    @property(RuleDialogViewController)
    public ruleDialogViewController: RuleDialogViewController;

    @property(SettingDialogViewController)
    public systemDialogViewController: SettingDialogViewController;

    private currentRoundIndex: number = 0;

    onLoad() {
        super.onLoad();
        this.init();
    }

    init() {
        super.init();

        this.homeButton.node.on(Button.EventType.CLICK, this.onHomeButtonClick, this);
        this.regulationButton.node.on(Button.EventType.CLICK, this.onRegulationButtonClick, this);
        this.systemButton.node.on(Button.EventType.CLICK, this.onSystemButtonClick, this);

        GameManager.sharedInstance().registerOnDataChangedEvent(DataType.RoundData, this);
        GameManager.sharedInstance().registerOnDataChangedEvent(DataType.SettingData, this);
        GameManager.sharedInstance().registerOnDataChangedEvent(DataType.RecordData, this);
        GameManager.sharedInstance().registerOnDataChangedEvent(DataType.StepData, this);
    }

    private setGameNumber(gameNumber: number) {
        this.gameNumberLabel.string = js.formatStr("%d", gameNumber);
    }

    private setBetLimit(min: number, max: number) {
        this.betMinValueLabel.string = StringUtils.format(GameConfig.i18nValue("labeltext.lblBetLimitMin"), min.toString());
        this.betMaxValueLabel.string = StringUtils.format(GameConfig.i18nValue("labeltext.lblBetLimitMax"), max.toString());
    }

    ////////////////////////////////////////////////////////////////////////////////
    //#region  Events
    ////////////////////////////////////////////////////////////////////////////////
    private onHomeButtonClick(event: Event) {
        // todo:jason 貌似暫無動作
    }

    private onRegulationButtonClick(event: Event) {
        AudioManger.sharedInstance().playSound(0, false, false, 1);
        this.fullMaskView.active = true;
        this.ruleDialogViewController.open(() => {
            this.fullMaskView.active = false;
        });
    }

    private onSystemButtonClick(event: Event) {
        AudioManger.sharedInstance().playSound(0, false, false, 1);
        this.fullMaskView.active = true;
        this.systemDialogViewController.open(() => {
            this.fullMaskView.active = false;
        });
    }
    //#endregion
    
    ////////////////////////////////////////////////////////////////////////////////
    // GameManagerDataChangedCallback
    ////////////////////////////////////////////////////////////////////////////////
    onGameManagerDataChanged(dataType: DataType, data: any): void {
        switch (dataType) {
            case DataType.RecordData: {
                let recordData = data as SML_GameRecords;
                if (recordData.Results != null) {
                    var gameNumber = recordData.Results[recordData.Results.length - 1].RoundID == 30 ? 0 : recordData.Results[recordData.Results.length - 1].RoundID;
                    this.setGameNumber(gameNumber + 1);
                }
                break;
            }
            case DataType.RoundData: {
                let roundData = data as SML_RoundInfo;
                this.currentRoundIndex = roundData.RoundID;
                break;
            }
            case DataType.StepData: {
                let stepData = data as SML_StepInfo;
                if (stepData.Step === SML_Step.SML_StepStart) {
                    var gameNumber = this.currentRoundIndex == 30 ? 0 : this.currentRoundIndex;
                    this.setGameNumber(gameNumber + 1);
                }
                break;
            }
            case DataType.SettingData: {
                let settingData = data as SML_Setting;

                // 計算下注的最大最小值
                var betLimitMin = 99999999;
                var betLimitMax = ProtoTool.long2Number(settingData.UserMaxBet as Long);
                settingData.BetCount.forEach((item, index) => {
                    betLimitMin = Math.min(ProtoTool.long2Number(item as Long), betLimitMin);
                });
                this.setBetLimit(betLimitMin / 100, betLimitMax / 100);

                // // 可用籌碼
                // settingData.BetCount.forEach((item, index) => {
                //     let betCount = ProtoTool.long2Number(item as Long);
                // });
                break;
            }
        }
    }
}

