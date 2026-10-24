import { _decorator, Label, UIOpacity, tween, Vec3 } from 'cc';
import { BaseViewController } from './BaseViewController';
const { ccclass, property } = _decorator;

/**
 * 彈跳訊息佈局介面控制器
 */
@ccclass('PopMessageViewController')
export class PopMessageViewController extends BaseViewController {
    @property(Label)
    public lblMessage: Label;
    
    @property(UIOpacity)
    public opacity: UIOpacity;

    public showPopMessage(message: string) {
        this.lblMessage.string = message;
        tween().target(this.node)
            .by(1, { position: new Vec3(0, 150, 0)})
            .by(0.5, { position: new Vec3(0, 30, 0)}, {
                onUpdate: (target: Vec3, ratio: number) => {
                    this.opacity.opacity = (1 - ratio) * 255;
                }
            })
            .removeSelf()
            .start();
    }
}

