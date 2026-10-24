import { _decorator, Component, Label, Node, Sprite, SpriteFrame, Toggle, ToggleComponent, tween, Vec3 } from 'cc';
import { AudioManger, SoundType } from '../Game/AudioManger';
const { ccclass, property } = _decorator;

@ccclass('BetCoinTemplate')
export class BetCoinTemplate extends Component {

    private index: number = 0;
    private money: number = 0;
    @property(Label)
    public lblBetMoney: Label;
    @property(Sprite)
    public spriteBetCoin: Sprite;
    @property(SpriteFrame)
    public arrBetSpriteFrame: SpriteFrame[] = [];
    @property(ToggleComponent)
    public toggle: ToggleComponent;

    public setBetCoin(index: number, money: number) {
        let self = this;
        this.index = index;
        this.money = money;
        this.lblBetMoney.string = (money / 100).toString();
        this.spriteBetCoin.spriteFrame = this.arrBetSpriteFrame[index % this.arrBetSpriteFrame.length];
        if (this.toggle) {
            this.toggle.node.on(Toggle.EventType.TOGGLE, function (toggle: ToggleComponent) {
                AudioManger.getInstance().playSound(SoundType.CHOOSE_CHIP);
                self.setSelect(toggle.isChecked);
            });
            this.setSelect(this.toggle.isChecked);
        }
    }

    private setSelect(select: boolean) {
        const scaleValue = select ? 1.1 : 1;
        tween().target(this.node)
            .to(0.2, { scale: new Vec3(scaleValue, scaleValue, scaleValue) })
            .start();
    }

    public getCoinMoney(): number {
        return this.money;
    }

    public getCoinIndex(): number {
        return this.index;
    }

}


