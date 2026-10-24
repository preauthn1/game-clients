import { _decorator, Component, Node, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('OrientationHintHandler')
export class OrientationHintHandler extends Component {

    private static instance: OrientationHintHandler;

    public static getInstance() {
        return OrientationHintHandler.instance;
    }
    @property(Node)
    public nodeCanvas: Node;
    @property(Node)
    public nodeShowOrientationHint: Node;
    @property(Node)
    public nodeHintIcon: Node;
    private tweenShow: any;

    protected onLoad(): void {
        OrientationHintHandler.instance = this;
        this.tweenShow = tween().target(this.nodeHintIcon);
    }

    public showOrientationHint(isShow: boolean) {
        console.log('showOrientationHint:', isShow);
        this.nodeCanvas.setRotationFromEuler(0, 0, isShow ? 90 : 0);
        // if (!this.tweenShow) {
        //     this.tweenShow = tween().target(this.nodeHintIcon);
        // }
        // if (isShow) {
        //     this.nodeShowOrientationHint.active = true;
        //     this.nodeHintIcon.setRotationFromEuler(new Vec3(0, 0, -90))
        //     this.tweenShow
        //         .to(0.5, {
        //             eulerAngles: new Vec3(0, 0, -180)
        //         })
        //         .delay(1)
        //         .to(0.5, {
        //             eulerAngles: new Vec3(0, 0, -90)
        //         })
        //         // .delay(0.5)
        //         .union()
        //         .repeatForever()
        //         .start()
        // } else {
        //     this.nodeShowOrientationHint.active = false;
        //     this.tweenShow.stop();
        // }
    }
}


