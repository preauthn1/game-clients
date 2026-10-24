import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { HintMessageTemplate } from '../Template/HintMessageTemplate';
import { Roulette_ResultCode } from '../Proto/Game/GameMsg_Roulette';
import * as GameConfig from '../CocosFrameworks/Data/GameConfig'
const { ccclass, property } = _decorator;

@ccclass('MessageController')
export class MessageController extends Component {

    private static instance: MessageController;

    public static getInstance(): MessageController {
        return MessageController.instance;
    }

    @property(Node)
    public nodeMessage: Node;
    @property(Prefab)
    public prefabHintMsg: Prefab;

    start() {
        MessageController.instance = this;
    }


    public showHintMessage(hint: string) {
        const hintMessage = instantiate(this.prefabHintMsg);
        hintMessage.setParent(this.nodeMessage);
        const hintTemplate = hintMessage.getComponent(HintMessageTemplate);
        if (hintTemplate) {
            hintTemplate.showHintMessage(hint);
        }
    }

    public showHintMessageWithLabelText(labelKey: string, defaultMsg: string) {
        if (labelKey !== '') {
            this.showHintMessage(GameConfig.getMessageLocation(labelKey, defaultMsg))
        }
    }

    public showResultCodeMsg(code: Roulette_ResultCode) {
        let defaultMsg: string = '';
        switch (code) {
            case "Roulette_ResultCodeSuccess":
                defaultMsg = 'Bet send successful';
                break;
            case "Roulette_ResultCodeMoneyNotEnough":
                defaultMsg = "Your money not enough!"
                break;
            case "Roulette_ResultCodeIllegalBetType":
                defaultMsg = "Illegal bet type!"
                break;
            case "Roulette_ResultCodeIllegalBetMoney":
                defaultMsg = "Illegal Bet money!"
                break;
            case "Roulette_ResultCodeBetTypeOverLimit":
                defaultMsg = "Your bet type over limit!"
                break;
            case "Roulette_ResultCodeAlreadyBetOtherSide":
                defaultMsg = "You already bet on other side!"
                break;
            case "Roulette_ResultCodeCarryMoneyNotEnough":
                defaultMsg = "Your carry money not enough!"
                break;
            case "Roulette_ResultCodeNotBetStep":
                defaultMsg = "Do not place bets during the available time!"
                break;
            case "Roulette_ResultCodeIllegalNumbers":
                defaultMsg = "Parameter error"
                break;
            case "Roulette_ResultCodeInvalidArgument":
                defaultMsg = "Invalid Argument"
                break;
            case "Roulette_ResultCodeInternalError":
                defaultMsg = "Internal Error"
                break;
        }
        if (defaultMsg !== '') {
            this.showHintMessage(GameConfig.getMessageLocation(code, defaultMsg))
        }
    }
}


