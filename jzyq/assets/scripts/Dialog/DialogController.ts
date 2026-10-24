import { _decorator, Component, Node, Enum, Button, VideoPlayer } from 'cc';
import { BaseDialogHandler } from './BaseDialogHandler';
import { AudioManger, SoundType } from '../Game/AudioManger';
import { GameManager } from '../Game/GameManager';
import { VideoController } from '../Game/VideoController';
const { ccclass, property } = _decorator;

export enum DialogType {
    RuleDialog = 0,
    SettingDialog = 1,
    HistoryDialog = 2
}
Enum(DialogType)

/**
 * Popup Dialog 管理器
 * History Dialog, Rule Dialog, Setting Dialog
 */
@ccclass('DialogController')
export class DialogController extends Component {

    private static instance: DialogController;
    public static getInstance() {
        if (!DialogController.instance) {
            DialogController.instance = new DialogController();
        }
        return DialogController.instance;
    }
    @property(Node)
    public baseNode: Node;
    @property(Button)
    public btnClose: Button;
    private nowDialogType: DialogType = DialogType.RuleDialog;

    @property(BaseDialogHandler)
    public arrayDialogHandler: BaseDialogHandler[] = [];

    start() {
        var self = this;
        DialogController.instance = this;
        this.baseNode.active = false;
        this.btnClose.node.on(Button.EventType.CLICK, function() {
            if (GameManager.getInstance().isFirstLogin) {
                GameManager.getInstance().isFirstLogin = false;
                VideoController.getInstance().playBaseVideoClip();
            }
            
            AudioManger.getInstance().playSound(SoundType.BUTTON_CLICK);
            self.arrayDialogHandler[self.nowDialogType].onDialogCloseEvent();
            self.baseNode.active = false;
        });
    }

    public showDialog(type: DialogType) {
        this.nowDialogType = type;
        this.arrayDialogHandler[this.nowDialogType].showDialog();
        this.baseNode.active = true;
    }
}


