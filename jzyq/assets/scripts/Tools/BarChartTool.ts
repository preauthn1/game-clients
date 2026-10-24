import { _decorator, Component, Node, Sprite, tween } from 'cc';
const { ccclass, property } = _decorator;

/**
 * 直條圖繪製工具
 */
@ccclass('BarChartTool')
export class BarChartTool extends Component {
    @property(Sprite)
    public arrSpriteBarChart: Sprite[] = [];
    protected currentData: number[] = [0, 0, 0, 0, 0, 0];
    protected startUpdating: boolean = false;

    start() {

    }

    update(deltaTime: number) {
        if (!this.startUpdating) return;
        this.drawBarChart();
    }

    private drawBarChart() {
        this.arrSpriteBarChart.forEach((sprite, index) => {
            sprite.fillRange = this.currentData[index];
        })
    }

    public showNextBarChart(ratioDatas: number[], isOpen: boolean = false, durction: number = 0.5) {
        this.unscheduleAllCallbacks();
        if (ratioDatas.length != this.currentData.length) return;
        this.startUpdating = true;
        for (let i = 0; i < this.currentData.length; i++) {
            if (isOpen) {
                this.currentData[i] = 0;
            }
            const nextValue = Math.min(1, ratioDatas[i]);
            tween(this.currentData)
            .to(durction, {[i]: nextValue})
            .start();
        }
        this.scheduleOnce(() => {
            this.startUpdating = false;
        }, durction + 1);
    }
}


