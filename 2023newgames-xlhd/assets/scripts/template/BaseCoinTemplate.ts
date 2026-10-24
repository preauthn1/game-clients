import { _decorator, Component, Node, Sprite, Label, SpriteFrame } from 'cc';
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
    public betCoin: number;
    
    start() {

    }

    update(deltaTime: number) {
        
    }

    setCoinItem(index: number, betCoin: number, betIcon: SpriteFrame) {
        this.id = index;
        this.icon.spriteFrame = betIcon;
        this.betCoin = betCoin;
        this.lblCoin.string = Math.floor(betCoin / 100).toString();
    }
}


