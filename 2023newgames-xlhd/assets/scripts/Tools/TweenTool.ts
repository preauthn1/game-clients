import { _decorator, Component, Node, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TweenTool')
export class TweenTool extends Component {
    start() {
        this.showAnimation();
    }

    update(deltaTime: number) {
        
    }

    showAnimation () {
        tween()
            .target(this.node)
            .to(1.0, {scale: new Vec3(1.5, 1.5, 1.5)})
            .to(1.0, { scale: new Vec3(1, 1, 1)})
            .start();
    }
}


