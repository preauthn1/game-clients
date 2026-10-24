import { _decorator, Button, Component, Node } from 'cc';
import { AudioManger, SoundType } from '../../Game/AudioManger';
const { ccclass, property } = _decorator;

/**
 * 基本 Dialog 管理控制 Class
 */
@ccclass('BaseDialogHandler')
export class BaseDialogHandler extends Component {

    @property(Node)
    public baseNode: Node;
    @property(Button)
    public btnClose: Button;

    protected onCloseCallback: { (): void } = null;

    start() {

    }

    public init() {
        let self = this;
        this.baseNode.active = false;
        this.btnClose.node.on(Button.EventType.CLICK, function () {
            self.onDialogCloseEvent();
        })
    }

    public showDialog(callback: { (): void }) {
        this.baseNode.active = true;
        this.onCloseCallback = callback;
    }

    protected onDialogCloseEvent() {
        this.baseNode.active = false;
        AudioManger.getInstance().playSound(SoundType.BUTTON_CLICK);
        if (this.onCloseCallback) {
            this.onCloseCallback();
        }
    }
}


