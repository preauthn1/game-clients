import { _decorator, Label, js, SpriteFrame, Sprite } from 'cc';
import Long from 'long';
import { BaseViewController } from './BaseViewController';
import * as ProtoTool from '../Tools/ProtoTool';
const { ccclass, property } = _decorator;

/**
 * 籌碼佈局介面控制器
 */
@ccclass('ChipViewController')
export class ChipViewController extends BaseViewController {

    @property(Label)
    public valueLabel: Label;
    
    @property(Sprite)
    public spriteNode: Sprite;

    @property(SpriteFrame)
    public sprites: SpriteFrame[] = [];

    public get betCoin() { return this.coin; }

    private coin: Long;

    public setData(coin: Long, indexOfSprite: number) {
        this.coin = coin;
        this.valueLabel.string = js.formatStr("%d", ProtoTool.long2Number(coin) / 100);
        this.spriteNode.spriteFrame = this.sprites[indexOfSprite % this.sprites.length];
    }
}

