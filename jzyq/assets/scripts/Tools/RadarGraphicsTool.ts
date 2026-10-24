import { _decorator, Component, Node, Vec2, v2, GraphicsComponent, tween } from 'cc';
const { ccclass, property } = _decorator;

/**
 * 雷達圖繪製工具
 */
@ccclass('RadarGraphicsTool')
export class RadarGraphicsTool extends Component {
    @property(GraphicsComponent)
    public graphics: GraphicsComponent;
    @property({ group: { name: 'polygon', id: '0', displayOrder: 0}, type: Number})
    public axes: number;
    @property({ group: { name: 'polygon', id: '0', displayOrder: 0}, type: Number})
    public shiftStartAngle: number = 0;
    @property({ group: { name: 'polygon', id: '0', displayOrder: 0}, type: Number})
    public axesLength: number = 0;

    private angles: number[] = [];

    protected currentData: number[] = [];
    protected startUpdating: boolean = false;

    start() {
        this.initRadarData();
        // this.showNextRadarData([1, 0.6, 0.4, 0.7, 0.9, 0.2], true);
    }

    protected update() {
        if (!this.startUpdating) return;
        this.drawRadarPolygon(this.currentData);
    }

    private initRadarData() {
        this.currentData.length = 0;
        for (let i = 0; i < this.axes; i++) {
            this.currentData.push(0);
        }
        this.initDrawAngles();
    }

    private initDrawAngles() {
        this.angles = [];
        const iAngle = 360 / this.axes;
        for (let i = 0; i < this.axes; i++) {
            const angle = (iAngle * i) + this.shiftStartAngle;
            this.angles.push(angle);
        }
    }

    public showNextRadarData(ratioDatas: number[], isOpen: boolean = false, duration: number = 0.5) {
        this.unscheduleAllCallbacks();
        if (ratioDatas.length !== this.currentData.length) return;
        this.startUpdating = true;
        for (let i = 0; i < this.currentData.length; i++) {
            if (isOpen) {
                this.currentData[i] = 0;
            }
            const nextValue = Math.min(1, ratioDatas[i]);
            tween(this.currentData)
            .to(duration, { [i]: nextValue})
            .start();
        }
        this.scheduleOnce(() => {
            this.startUpdating = false;
        }, duration + 1);
    }


    protected drawRadarPolygon(ratioList: number[] = null) {
        this.graphics.clear();
        let coords = [];
        for (let i = 0; i < this.axes; i++) {
            const length = this.axesLength * Math.min(1, ratioList[i] ?? 0);
            const radian = (Math.PI / 180) * this.angles[i];
            const coordsPos = v2(length * Math.cos(radian), length * Math.sin(radian));
            coords.push(coordsPos);
        }

        this.graphics.moveTo(coords[0].x, coords[0].y);
        for (let j = 1; j < coords.length; j++) {
            this.graphics.lineTo(coords[j].x, coords[j].y);
        }
        this.graphics.close();
        this.graphics.fill();
        this.graphics.stroke();
    }
    
}


