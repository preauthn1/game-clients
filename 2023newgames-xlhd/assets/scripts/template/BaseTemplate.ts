import { _decorator, Component, Node, Vec3, Tween, tween } from 'cc';
const { ccclass, property } = _decorator;

export interface animatorCallback { (): void };

@ccclass('BaseTemplate')
export class BaseTemplate extends Component {
    private initScale = new Vec3();
    private _nowScale = new Vec3();
    private _startScale = new Vec3();
    private _lastScale = new Vec3();

    private startShowScale = false;
    private isPingPongScale = false;
    private isLoopScale = false;
    private tweenScale: Tween<Vec3> | null = null;

    onLoad() {
        this.initScale = this.node.scale;
        this.tweenScale = tween(this._nowScale);
        this.node.getScale(this._startScale);
    }

    start() {

    }

    

    update(deltaTime: number) {
        if (this.isPingPongScale) {
            if (!this._nowScale.equals(this._startScale)) {
                this.node.setScale(this._nowScale);
            } else {
                this.isPingPongScale = false;
            }
        }
    }

    doPingPongScale (scaleValue: number, deltaTime: number, waitTime: number, callback: animatorCallback = null) {
        this._lastScale.set(this._startScale.multiplyScalar(scaleValue))
        if (this.tweenScale) {
            this.tweenScale
                .to(deltaTime / 2, this._lastScale, { easing: 'cubicInOut' })
                .to(deltaTime / 2, this._startScale, { easing: 'cubicInOut' })
                .start();
            this.isPingPongScale = true;
        }
    }
}


