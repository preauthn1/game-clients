import { _decorator, Node, Button, Enum, Label } from 'cc';
import { Game_BetType } from '../Data/GameData';
const { ccclass, property } = _decorator;

/**
 * 下注區域UI資料結構
 */
@ccclass('GlowAreaUIData')
export class GlowAreaUIData {
    @property({type: Game_BetType})
    public glowType: Game_BetType = Game_BetType.JZYQ_BetTypeNone;
    @property(Button)
    public btnGlowArea: Button;
    @property(Node)
    public nodeGlowResult: Node;
    @property(Label)
    public lblOddValue: Label;
}
