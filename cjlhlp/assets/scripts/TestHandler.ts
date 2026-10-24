import { _decorator, Color, Component, Material, math, Node, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TestHandler')
export class TestHandler extends Component {

    @property(Material)
    public material: Material;

    private alphaRange: Vec2 = new Vec2(180, 0)
    private alphaValue: number;
    private isLighting: boolean = false;
    private deltaLightTime: number = 0;
    start() {
        this.alphaValue = this.alphaRange.x;
    }

    update(deltaTime: number) {
        this.deltaLightTime += deltaTime;
        if (this.isLighting) {
            this.alphaValue = math.lerp(this.alphaRange.y, this.alphaRange.x, this.deltaLightTime)
            if (this.alphaValue > this.alphaRange.x) {
                this.alphaValue = this.alphaRange.x
                this.isLighting = false;
                this.deltaLightTime = 0;
            }
        } else {
            this.alphaValue = math.lerp(this.alphaRange.x, this.alphaRange.y, this.deltaLightTime)
            if (this.alphaValue < this.alphaRange.y) {
                this.alphaValue = this.alphaRange.y
                this.isLighting = true;
                this.deltaLightTime = 0;
            }
        }
        this.material.setProperty('mainColor', new Color(255, 255, 0, this.alphaValue));
    }
}


