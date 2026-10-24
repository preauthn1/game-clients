import { _decorator, Component, Node, Button } from 'cc';
const { ccclass, property } = _decorator;

/**
 * 基本 Dialog 管理控制 Class
 */
@ccclass('BaseDialogHandler')
export class BaseDialogHandler extends Component {

    @property(Node)
    public baseNode: Node;
    
    start() {
        this.baseNode.active = false;
    }

    init() {

    }

    showDialog() {
        this.baseNode.active = true;
    }

    onDialogCloseEvent () {
        this.baseNode.active = false;
    }
}


