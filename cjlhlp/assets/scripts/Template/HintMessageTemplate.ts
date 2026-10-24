import { _decorator, Component, Label, Node, tween, UIOpacity, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HintMessageTemplate')
export class HintMessageTemplate extends Component {

    @property(Label)
    public lblHintMessage: Label;
    @property(UIOpacity)
    public uiOpacity: UIOpacity;


    public showHintMessage(hint: string) {
        this.lblHintMessage.string = hint;
        tween().target(this.node)
            .by(1, { position: new Vec3(0, 150, 0) })
            .by(1, { position: new Vec3(0, 30, 0) }, {
                onUpdate: (target: Vec3, ratio: number) => {
                    this.uiOpacity.opacity = (1 - ratio) * 255;
                }
            })
            .removeSelf()
            .start();
    }
}


