import { _decorator, Component, Node, Label, UIOpacity, tween, Vec3, Color } from 'cc';
const { ccclass, property } = _decorator;

/**
 * 結算時顯示的+-金額 Popup Show Money Message Template for Prefab
 */
@ccclass('ShowMoneyTemplate')
export class ShowMoneyTemplate extends Component {
    @property(Label)
    public lblMoney: Label;
    @property(UIOpacity)
    public uiOpacity: UIOpacity;

    showMoney(money: number) {
        var self = this;
        const isWin = money > 0;
        this.lblMoney.color = isWin ? Color.GREEN : Color.RED;
        this.lblMoney.string = (money > 0 ? '+' : '') + (money / 100).toString();
        tween().target(this.node)
            .by(1.5, { position: new Vec3(0, 100, 0)}, {
                onUpdate: (target: Vec3, ratio: number) => {
                    self.uiOpacity.opacity = (1 - ratio) * 255;
                }
            })
            .removeSelf()
            .start();
    }
}


