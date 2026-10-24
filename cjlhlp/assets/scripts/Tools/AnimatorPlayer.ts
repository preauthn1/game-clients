import { _decorator, Component, Node, tween } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AnimatorPlayer')
export class AnimatorPlayer extends Component {
    @property(Node)
    public arrAnimatorNode: Node[] = [];
    private playIndex = 0;
    public playEachFramePerSecond: number = 15;

    private frameTime = 1;

    protected onLoad(): void {
        this.frameTime = 1 / this.playEachFramePerSecond;
    }

    public playAnimatorFrame(callback: { (): void } = null) {
        this.playIndex = 0;
        tween().target(this.node)
            .call(() => {
                if (this.playIndex > 0) {
                    if ((this.playIndex - 1) < this.arrAnimatorNode.length) {
                        const preNode = this.arrAnimatorNode[this.playIndex - 1];
                        if (preNode) {
                            preNode.active = false;
                        }
                    }
                }
                if (this.playIndex < this.arrAnimatorNode.length) {
                    const node = this.arrAnimatorNode[this.playIndex];
                    if (node) {
                        node.active = true;
                    }
                    this.playIndex += 1;
                }
            })
            .delay(this.frameTime)
            .union()
            .repeat(this.arrAnimatorNode.length)
            .call(() => {
                if (this.arrAnimatorNode[this.arrAnimatorNode.length - 1]) {
                    this.arrAnimatorNode[this.arrAnimatorNode.length - 1].active = false;
                }
            })
            .delay(0.5)
            .call(() => {
                if (callback) {
                    callback();
                }
            })
            .start();
    }
}


