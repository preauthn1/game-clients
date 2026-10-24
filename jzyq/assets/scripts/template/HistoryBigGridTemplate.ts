import { _decorator, Component, Node, tween, UIOpacity } from 'cc';
import { JZYQ_GameResult } from '../Proto/Game/GameMsg_JZYQ';
const { ccclass, property } = _decorator;

/**
 * Popup Dialog History Grid Template for Prefab
 */
@ccclass('HistoryBigGridTemplate')
export class HistoryBigGridTemplate extends Component {
    @property(Node)
    public arrayGridUIData: Node[] = [];
    public index: number = -1;   
    initHistoryGridData(index: number) {
        this.index = index;
        this.resetHistoryGridData();
    }

    setHistoryGridData(data: JZYQ_GameResult, isNew: boolean = false) {
        var self = this;
        this.unscheduleAllCallbacks();
        if (isNew) {
            this.scheduleOnce(() => {
                self.syncHistoryGridData(data, isNew);
            }, 5);
        } else {
            this.syncHistoryGridData(data, isNew);
        }
    }

    private syncHistoryGridData(data: JZYQ_GameResult, isNew: boolean = false) {
        const isGoal = data.Result.includes('Goal');
        const isInside = data.Result.includes('Inside');
        this.arrayGridUIData[0].active = isGoal;
        this.arrayGridUIData[1].active = isGoal && isInside;
        this.arrayGridUIData[2].active = isGoal && !isInside;
        this.arrayGridUIData[3].active = !isGoal;
        this.arrayGridUIData[4].active = !isGoal && isInside;
        this.arrayGridUIData[5].active = !isGoal && !isInside;
        if (isNew) {
            this.showIsNewAnimation();
        }
    }

    resetHistoryGridData() {
        this.arrayGridUIData.forEach(uiNode => {
            uiNode.active = false;
        }) 
    }

    private showIsNewAnimation() {
        this.arrayGridUIData.forEach(uiData => {
            tween().target(this.node)
                .by(0.3, {}, {
                    onUpdate(target, ratio) {
                        uiData.getComponent(UIOpacity).opacity = ratio * 255;
                    },
                })
                .by(0.3, {}, {
                    onUpdate(target, ratio) {
                        uiData.getComponent(UIOpacity).opacity = (1 - ratio) * 255;
                    },
                })
                .by(0.3, {}, {
                    onUpdate(target, ratio) {
                        uiData.getComponent(UIOpacity).opacity = ratio * 255;
                    },
                })
                .by(0.3, {}, {
                    onUpdate(target, ratio) {
                        uiData.getComponent(UIOpacity).opacity = (1 - ratio) * 255;
                    },
                })
                .by(0.3, {}, {
                    onUpdate(target, ratio) {
                        uiData.getComponent(UIOpacity).opacity = ratio * 255;
                    },
                })
                .start();
        })
    }
}


