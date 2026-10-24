import { _decorator, Button, Component, Node } from 'cc';
import { BaseDialogHandler } from '../../CocosFrameworks/UI/BaseDialogHandler';
import { AudioManger, SoundType } from '../AudioManger';
const { ccclass, property } = _decorator;

export class BetData {
    public type: number;
    public name: string[] = [];
    public count: number;
}

export class SpecialBetData {
    public BetCount: number;
    public Bet: BetData[] = [];
}

@ccclass('DialogSpecialHandler')
export class DialogSpecialHandler extends BaseDialogHandler {

    @property(Button)
    public arrButotnSpecial: Button[] = [];
    private specialBetCallback: { (specialBetData: SpecialBetData): void } = null;

    private specialOneBetJson: string = '{"BetCount": 9, "Bet":[{"type": 14, "name":["btn_4-7", "btn_12-15", "btn_18-21", "btn_19-22", "btn_32-35"], "count": 1}, {"type":15, "name":["btn_0-2-3"], "count": 2}, {"type":16, "name":["btn_25-26-28-29"], "count": 2}]}';
    private specialTwoBetJson: string = '{"BetCount": 5, "Bet":[{"type": 13, "name":["btn_1"], "count": 1}, {"type":14, "name":["btn_6-9", "btn_14-17", "btn_17-20", "btn_31-34"], "count": 1}]}';
    private specialThreeBetJson: string = '{"BetCount": 6, "Bet":[{"type": 14, "name":["btn_5-8", "btn_10-11", "btn_13-16", "btn_23-24", "btn_27-30", "btn_33-36"], "count": 1}]}';

    private arrSpecialBetData: SpecialBetData[] = [];

    public init(): void {
        super.init();
        let self = this;
        this.arrSpecialBetData.push(JSON.parse(this.specialOneBetJson) as SpecialBetData);
        this.arrSpecialBetData.push(JSON.parse(this.specialTwoBetJson) as SpecialBetData);
        this.arrSpecialBetData.push(JSON.parse(this.specialThreeBetJson) as SpecialBetData);
        this.arrButotnSpecial.forEach((button, index) => {
            button.node.on(Button.EventType.CLICK, function () {
                if (self.specialBetCallback) {
                    self.specialBetCallback(self.arrSpecialBetData[index]);
                }
                self.onDialogCloseEvent(true);
            })
        })
    }

    public registerSpecialBetClickCallback(callback: { (specialBetData: SpecialBetData): void }) {
        this.specialBetCallback = callback;
    }

    protected onDialogCloseEvent(isSpecialBet: boolean = false): void {
        this.baseNode.active = false;
        if (!isSpecialBet) {
            AudioManger.getInstance().playSound(SoundType.BUTTON_CLICK);
        }
        if (this.onCloseCallback) {
            this.onCloseCallback();
        }
    }
}


