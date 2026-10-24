import { _decorator, Component, Node, Label, js } from 'cc';
import { VoidCallback } from '../../framework/common/Types';
import { BaseViewController } from './BaseViewController';
import * as GameConfig from '../Common/GameConfig';
import { StringUtils } from '../../framework/utils/StringUtils';
const { ccclass, property } = _decorator;

/**
 * 等待佈局介面控制器
 */
@ccclass('WaitingViewController')
export class WaitingViewController extends BaseViewController {

    @property(Node)
    public viewNode: Node;

    @property(Label)
    public hintLabel: Label;

    @property(Label)
    public countdownLabel: Label;

    private dismissCallback: VoidCallback;

    public set countdownTimestamp(value: number) { this.timestamp = value; }

    public get countdownTimestamp() { return this.timestamp; }

    private timestamp: number = 0;
    
    //#region Overrides
    update(deltaTime: number) {
        super.update(deltaTime);

        if (this.viewNode.active && this.timestamp != 0) {
            const currentTimestamp = new Date().getTime();
            const countdown = Math.ceil((this.timestamp - currentTimestamp) / 1000);
            this.setCountdown(countdown);
        }
    }
    //#endregion

    //#region Public functions
    public show(dismissCallback: VoidCallback) {
        this.viewNode.active = true;
        this.dismissCallback = dismissCallback;
    }

    public dismiss() {
        this.viewNode.active = false;
        this.timestamp = 0;
        if (this.dismissCallback != null) {
            this.dismissCallback();
        }
    }
    //#endregion 

    //#region Private functions
    setCountdown(countdownNumber: number) {
        let format = GameConfig.i18nValue("labeltext.lblCountdownSeconds");
        this.countdownLabel.string = StringUtils.format(format, countdownNumber.toString());
    }
    //#endregion

}

