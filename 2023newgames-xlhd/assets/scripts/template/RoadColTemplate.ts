import { _decorator, Component, Node } from 'cc';
import { BigRoadData } from '../TrandHandler';
import { RoadRowTemplate } from './RoadRowTemplate';
const { ccclass, property } = _decorator;

/**
 * Road Colume Template for prefab
 */
@ccclass('RoadColTemplate')
export class RoadColTemplate extends Component {

    @property(RoadRowTemplate)
    public arrRoadRowTemplates: RoadRowTemplate[] = [];
    private roadColIndex = 0;

    initRoad (index: number) {
        this.roadColIndex = index;
        this.clearRoadData();
    }

    setRoadData(data: BigRoadData, isNew: boolean = false) {
        const shiftCol = Math.max(data.rowIndex - 5, 0);
        if ((data.colIndex + shiftCol) === this.roadColIndex) {
            if (data.rowIndex < this.arrRoadRowTemplates.length) {
                this.arrRoadRowTemplates[data.rowIndex].setRoadIconData(data.type, data.tieCount, isNew);
            } else {
                this.arrRoadRowTemplates[5].setRoadIconData(data.type, data.tieCount, isNew);
            }
        }
    }

    clearRoadData () {
        this.arrRoadRowTemplates.forEach(roadTemplate => {
            roadTemplate.setRoadIconData(-1, 0, false);
        })
    }
}


