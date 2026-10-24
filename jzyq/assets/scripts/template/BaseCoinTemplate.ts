import { _decorator, Component, Node, Sprite, Label, SpriteFrame } from 'cc';
import Long from 'long';
import * as ProtoTool from '../Tools/ProtoTool'
const { ccclass, property } = _decorator;

/**
 * 基礎Coin Tempate for Prefab
 */
@ccclass('BaseCoinTemplate')
export class BaseCoinTemplate extends Component {
    @property
    public id = 0;
    @property(Sprite)
    public icon: Sprite | null = null;
    @property(Label)
    public lblCoin: Label | null = null;
    public betCoin: Long;
    

    setCoinItem(index: number, betCoin: Long, betIcon: SpriteFrame) {
        this.id = index;
        this.icon.spriteFrame = betIcon;
        this.betCoin = betCoin;
        this.lblCoin.string = Math.floor(ProtoTool.long2Number(betCoin) / 100).toString();
    }
}


