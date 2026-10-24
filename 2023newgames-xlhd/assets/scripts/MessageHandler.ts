import { _decorator, Component, Node, Label, Prefab, instantiate } from 'cc';
import { PopMessageTemplate } from './template/PopMessageTemplate';
const { ccclass, property } = _decorator;

/**
 * 全畫面訊息顯示控制
 */
@ccclass('MessageHandler')
export class MessageHandler extends Component {
    private static instance: MessageHandler;

    public static getInstance() {
        if (!MessageHandler.instance) {
            MessageHandler.instance = new MessageHandler();
        }
        return MessageHandler.instance;
    }


    @property(Node)
    public nodeBase: Node;
    @property(Label)
    public lblMessageContent: Label;
    @property(Node)
    public nodePopMessage: Node;
    @property(Prefab)
    public prefabPopMessage: Prefab;

    start() {
        MessageHandler.instance = this;
        if (this.nodeBase) {
            this.nodeBase.active = false;
        }
        if (this.lblMessageContent) {
            this.lblMessageContent.string = '';
        }
    }

    public showMessageContent (content: string) {
        this.lblMessageContent.string = content;
        this.nodeBase.active = true;
    }

    public hideMessageContent () {
        this.nodeBase.active = false;
    }

    public showPopMessage(message: string) {
        const popMessage = instantiate(this.prefabPopMessage);
        popMessage.setParent(this.nodePopMessage);
        const popMessageTemplate = popMessage.getComponent(PopMessageTemplate);
        popMessageTemplate.showPopMessage(message);
    }
}


