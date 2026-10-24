import { _decorator, Component, Enum, Label, Node, Sprite, SpriteFrame, Vec3 } from 'cc';
import { Game_BetType } from '../Data/GameData';
const { ccclass, property } = _decorator;

export enum ShiftDirectionType {
    NONE = 0,
    UP = 1,
    LEFT = 2,
    RIGHT = 3,
    DOWN = 4
}

@ccclass('TableCoinTemplate')
export class TableCoinTemplate extends Component {
    private index: number = 0;
    @property(Label)
    public lblMoney: Label;
    @property(Sprite)
    public spriteBetCoin: Sprite;
    @property(SpriteFrame)
    public arrBetSpriteFrame: SpriteFrame[] = [];

    public setOtherUserTableCoin(index: number, money: number, betType: Game_BetType) {
        this.index = index;
        this.lblMoney.string = (money / 100).toString();
        this.spriteBetCoin.spriteFrame = this.arrBetSpriteFrame[index % this.arrBetSpriteFrame.length];
        let shifVec3 = this.node.position;
        const directorType = this.getShiftDirectorType(betType);
        const shiftPos = this.getShiftPos(betType);
        switch (directorType) {
            case ShiftDirectionType.UP:
                shifVec3 = new Vec3(shifVec3.x, shifVec3.y + shiftPos, shifVec3.z);
                break;
            case ShiftDirectionType.LEFT:
                shifVec3 = new Vec3(shifVec3.x - shiftPos, shifVec3.y, shifVec3.z);
                break;
            case ShiftDirectionType.RIGHT:
                shifVec3 = new Vec3(shifVec3.x + shiftPos, shifVec3.y, shifVec3.z);
                break;
            case ShiftDirectionType.DOWN:
                shifVec3 = new Vec3(shifVec3.x, shifVec3.y - shiftPos, shifVec3.z);
                break;
        }
        this.node.setPosition(shifVec3);
    }

    private getShiftDirectorType(betType: Game_BetType): ShiftDirectionType {
        let type = ShiftDirectionType.NONE;
        switch (betType) {
            case Game_BetType.Roulette_BetTypeOneNumber:
            case Game_BetType.Roulette_BetTypeTwoNumber:
            case Game_BetType.Roulette_BetTypeThreeNumber:
            case Game_BetType.Roulette_BetTypeFourNumber:
            case Game_BetType.Roulette_BetTypeSixNumber:
                type = ShiftDirectionType.DOWN
                break;
            case Game_BetType.Roulette_BetTypeFirst12:
            case Game_BetType.Roulette_BetTypeSecond12:
            case Game_BetType.Roulette_BetTypeThird12:
            case Game_BetType.Roulette_BetTypeBig:
            case Game_BetType.Roulette_BetTypeSmall:
            case Game_BetType.Roulette_BetTypeBlack:
            case Game_BetType.Roulette_BetTypeRed:
            case Game_BetType.Roulette_BetTypeEven:
            case Game_BetType.Roulette_BetTypeOdd:
                type = ShiftDirectionType.RIGHT;
                break;
            case Game_BetType.Roulette_BetTypeSuperZero:
            case Game_BetType.Roulette_BetTypeFirstRow:
            case Game_BetType.Roulette_BetTypeSecondRow:
            case Game_BetType.Roulette_BetTypeThirdRow:
                type = ShiftDirectionType.DOWN;
                break;
        }
        return type;
    }

    private getShiftPos(betType: Game_BetType): number {
        let shiftPos = 15;
        switch (betType) {
            case Game_BetType.Roulette_BetTypeOneNumber:
                shiftPos = 25
                break;
            case Game_BetType.Roulette_BetTypeFirst12:
            case Game_BetType.Roulette_BetTypeSecond12:
            case Game_BetType.Roulette_BetTypeThird12:
            case Game_BetType.Roulette_BetTypeBig:
            case Game_BetType.Roulette_BetTypeSmall:
            case Game_BetType.Roulette_BetTypeBlack:
            case Game_BetType.Roulette_BetTypeRed:
            case Game_BetType.Roulette_BetTypeEven:
            case Game_BetType.Roulette_BetTypeOdd:
                shiftPos = 75;
                break;
            case Game_BetType.Roulette_BetTypeSuperZero:
            case Game_BetType.Roulette_BetTypeFirstRow:
            case Game_BetType.Roulette_BetTypeSecondRow:
            case Game_BetType.Roulette_BetTypeThirdRow:
                shiftPos = 25
                break;
        }
        return shiftPos;
    }
}


