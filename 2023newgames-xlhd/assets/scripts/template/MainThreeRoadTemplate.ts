import { _decorator, Component, Node } from 'cc';
import { ThreeRoadTemplate } from './ThreeRoadTemplate';
const { ccclass, property } = _decorator;

/**
 * 當前下三路 Template for Prefab
 */
@ccclass('MainThreeRoadTemplate')
export class MainThreeRoadTemplate extends Component {
    @property(ThreeRoadTemplate)
    public arrThreeRoadTemplate: ThreeRoadTemplate[] = [];
    private roadIndex: number = 0;
    
    initRoad(index: number) {
        this.roadIndex = index;
        this.clearRoadData();
    }

    clearRoadData () {
        this.arrThreeRoadTemplate.forEach(template => {
            template.setTreeRoadIconData(-1, false);
        });
    }

    setRoadData (index: number, rowIndex: number, roadType: number, isNew: boolean) {
        if (this.roadIndex === index) {
            if (this.arrThreeRoadTemplate.length > rowIndex) {
                this.arrThreeRoadTemplate[rowIndex].setTreeRoadIconData(roadType, isNew);
            }
        }
    }
}


