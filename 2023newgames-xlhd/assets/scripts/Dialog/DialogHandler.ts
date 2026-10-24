import { _decorator, Component, Node, Button } from 'cc';
import { AudioManger } from '../AudioManger';
const { ccclass, property } = _decorator;
import * as ICallback from '../Data/ICallback';
import { BaseDialogHandler } from './BaseDialogHandler';
import { GameManager } from '../GameManager';

/**
 * Popup Dialog 管理器
 */
@ccclass('DialogHandler')
export class DialogHandler extends Component {
    private static instance: DialogHandler;

    public static getInstance() {
        if (!DialogHandler.instance) {
            DialogHandler.instance = new DialogHandler();
        }
        return DialogHandler.instance;
    }

    @property(Node)
    public nodeDialog: Node;
    @property(Button)
    public btnClose: Button;

    @property(Node)
    public arrNodeDialog: Node[] = [];
    @property(BaseDialogHandler)
    public arrDialogHandler: BaseDialogHandler[] = [];
    private onCloseCallback: { (): void } = null;

    start() {
        DialogHandler.instance = this;
        this.nodeDialog.active = false;
        if (this.btnClose) {
            this.btnClose.node.on(Button.EventType.CLICK, this.onCloseClickEvent, this);
        }
        this.arrDialogHandler.forEach(handler => {
            handler.init();
        })
    }

    onCloseClickEvent () {
        GameManager.getInstance().isFirstLogin = false;
        AudioManger.getInstance().playSound(ICallback.SoundType.BUTTON_CLICK);
        this.nodeDialog.active = false;
        if (this.onCloseCallback) {
            this.onCloseCallback();
        }
        this.arrDialogHandler.forEach(handler => {
            if (handler) {
                handler.onDialogCloseEvent();
            }
        })
    }

    private showBaseDialog(callback: { (): void }) {
        this.onCloseCallback = callback;
        this.nodeDialog.active = true;
    }

    showDialog(type: ICallback.DialogType, callback: { (): void } = null) {
        this.showBaseDialog(callback);
        this.arrDialogHandler.forEach((dialog, index) => {
            if (index === type) {
                dialog.showDialog();
            }
        });
    }
}


