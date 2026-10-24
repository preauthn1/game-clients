import { _decorator, Node } from 'cc';
import { SML_BetType } from '../Proto/Msg/GameMsg_SML';
import { BaseViewController } from './BaseViewController';
const { ccclass, property } = _decorator;

/**
 * 完整遊戲歷程項目佈局介面控制器
 */
@ccclass('FullGameHistoryCellViewController')
export class FullGameHistoryCellViewController extends BaseViewController {

    @property(Node)
    public goalLeftNode: Node;

    @property(Node)
    public goalMiddleNode: Node;

    @property(Node)
    public goalRightNode: Node;

    @property(Node)
    public saveLeftNode: Node;

    @property(Node)
    public saveMiddleNode: Node;

    @property(Node)
    public saveRightNode: Node;
    
    ////////////////////////////////////////////////////////////////////////////////
    // Public functions
    ////////////////////////////////////////////////////////////////////////////////

    /**
     * 設置遊戲投注結果
     * @param betType 投注結果
     */
    public setGameResult(betType: SML_BetType) {
        this.goalLeftNode.active = betType === SML_BetType.SML_BetTypeGoalLeft;
        this.goalMiddleNode.active = betType === SML_BetType.SML_BetTypeGoalMiddle;
        this.goalRightNode.active = betType === SML_BetType.SML_BetTypeGoalRight;
        this.saveLeftNode.active = betType === SML_BetType.SML_BetTypeSaveLeft;
        this.saveMiddleNode.active = betType === SML_BetType.SML_BetTypeSaveMiddle;
        this.saveRightNode.active = betType === SML_BetType.SML_BetTypeSaveRight;
    }
}

