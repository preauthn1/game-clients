import { _decorator, Component, Node, Label, tween, Vec3, UIOpacity } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Small Popup Message Template for Prefab
 */
@ccclass('PopMessageTemplate')
export class PopMessageTemplate extends Component {
    @property(Label)
    public lblMessage: Label;
    @property(UIOpacity)
    public uiopacity: UIOpacity;

    public showPopMessage(message: string) {
        this.lblMessage.string = message;
        tween().target(this.node)
            .by(1, { position: new Vec3(0, 150, 0)})
            .by(0.5, { position: new Vec3(0, 30, 0)}, {
                onUpdate: (target: Vec3, ratio: number) => {
                    this.uiopacity.opacity = (1 - ratio) * 255;
                }
            })
            .removeSelf()
            .start();
    }
}


