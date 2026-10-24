import { _decorator, Component, Node } from 'cc';
import { BaseDialogHandler } from '../../CocosFrameworks/UI/BaseDialogHandler';
import { GameManager } from '../GameManager';
const { ccclass, property } = _decorator;

export enum DialogMode {
    SETTING = 0,
    HISTORY = 1,
    SPECIAL = 2,
    INFO = 3
}

@ccclass('DialogController')
export class DialogController extends Component {

    private static instance: DialogController;

    public static getInstance(): DialogController {
        return DialogController.instance;
    }

    @property(Node)
    public baseNode: Node;
    @property(BaseDialogHandler)
    public arrDialogHandler: BaseDialogHandler[] = [];

    start() {
        DialogController.instance = this;
        this.arrDialogHandler.forEach(handler => {
            handler.init();
        })
    }

    public showDialog(mode: DialogMode) {
        let self = this;
        if (this.arrDialogHandler.length > mode) {
            this.baseNode.active = true;
            this.arrDialogHandler[mode].showDialog(function () {
                if (GameManager.getInstance() && GameManager.getInstance().isFirstLogin) {
                    GameManager.getInstance().isFirstLogin = false;
                }
                self.baseNode.active = false;
            })
        }
    }
}


