import { _decorator, Component, Node, Prefab, instantiate } from 'cc';
import { PopMessageTemplate } from '../template/PopMessageTemplate';
import * as GameConfig from '../Common/GameConfig';
import { JZYQ_ResultCode } from '../Proto/Game/GameMsg_JZYQ';
const { ccclass, property } = _decorator;

/**
 * Popup訊息顯示控制
 */
@ccclass('PopupMessageController')
export class PopupMessageController extends Component {
    private static instance: PopupMessageController

    public static getInstance() {
        return PopupMessageController.instance;
    }

    @property(Node)
    public nodePopupMessage: Node;
    @property(Prefab)
    public prefabPopupMessageTemplate: Prefab;

    start() {
        PopupMessageController.instance = this;
    }

    public showPopupMessage(msgKey: string, defaultMsg: string = '') {
        if (msgKey === '') return;
        const msg = GameConfig.getMessageLocation(msgKey, defaultMsg);
        this.createPopupMessage(msg);
    }

    public showPopupResultCodeMessage(resultCode: JZYQ_ResultCode) {
        const msg: string = GameConfig.getMessageLocation(resultCode.toString(), resultCode.toString());
        const defaultMsg = msg.split('JZYQ_ResultCode');
        this.createPopupMessage(defaultMsg[defaultMsg.length > 1 ? 1 : 0]);
    }

    private createPopupMessage(msg: string) {
        const popupTemplate = instantiate(this.prefabPopupMessageTemplate);
        popupTemplate.setParent(this.nodePopupMessage);
        const templateHandler  = popupTemplate.getComponent(PopMessageTemplate);
        templateHandler.showPopMessage(msg);
    }
}


