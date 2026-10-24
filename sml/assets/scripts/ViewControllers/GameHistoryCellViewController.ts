import { _decorator, Node } from 'cc';
import { SML_BetType } from '../Proto/Msg/GameMsg_SML';
import { BaseViewController } from './BaseViewController';
const { ccclass, property } = _decorator;

/**
 * 遊戲歷程項目佈局介面控制器
 */
@ccclass('GameHistoryCellViewController')
export class GameHistoryCellViewController extends BaseViewController {

    @property(Node)
    public goalLeftNode: Node;

    @property(Node)
    public saveLeftNode: Node;

    @property(Node)
    public goalMiddleNode: Node;

    @property(Node)
    public saveMiddleNode: Node;

    @property(Node)
    public goalRightNode: Node;

    @property(Node)
    public saveRightNode: Node;

    public setGameResult(result: SML_BetType) {
        this.goalLeftNode.active = result === SML_BetType.SML_BetTypeGoalLeft;
        this.goalMiddleNode.active = result === SML_BetType.SML_BetTypeGoalMiddle;
        this.goalRightNode.active = result === SML_BetType.SML_BetTypeGoalRight;
        this.saveLeftNode.active = result === SML_BetType.SML_BetTypeSaveLeft;
        this.saveMiddleNode.active = result === SML_BetType.SML_BetTypeSaveMiddle;
        this.saveRightNode.active = result === SML_BetType.SML_BetTypeSaveRight;
    }
}

