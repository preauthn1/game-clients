import { _decorator, Component, Node, tween, UIOpacity } from 'cc';
import { JZYQ_GameResult } from '../Proto/Game/GameMsg_JZYQ';
const { ccclass, property } = _decorator;

/**
 * 歷史開獎資料結構
 */
@ccclass('HistoryGridUIData')
export class HistoryGridUIData {
    @property(Node)
    public nodeGoal: Node;
    @property(Node)
    public nodeLost: Node;
}

/**
 * 下方 History Grid Template for Prefab
 */
@ccclass('HistoryGridTemplate')
export class HistoryGridTemplate extends Component {
    @property(HistoryGridUIData)
    public arrayGridUIData: HistoryGridUIData[] = [];
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
                self.syncHistoryGradData(data, isNew);
            }, 5);
        } else {
            this.syncHistoryGradData(data, isNew);
        }
    }

    syncHistoryGradData(data: JZYQ_GameResult, isNew: boolean = false) {
        const isGoal = data.Result.includes('Goal');
        const isInside = data.Result.includes('Inside');
        this.arrayGridUIData.forEach((uiData, index) => {
            switch (index) {
                case 0:
                case 2:
                    uiData.nodeGoal.active = index === 0 && isGoal;
                    uiData.nodeLost.active = index === 2 && !isGoal;
                    break;
                case 1:
                    uiData.nodeGoal.active = isInside && isGoal
                    uiData.nodeLost.active = isInside && !isGoal;
                    break;
                case 3:
                    uiData.nodeGoal.active = !isInside && isGoal
                    uiData.nodeLost.active = !isInside && !isGoal;
                    break;
            }
        });
        if (isNew) {
            this.showIsNewAnimation();
        }
    }

    showIsNewAnimation() {
        this.arrayGridUIData.forEach(uiData => {
            tween().target(this.node)
                .by(0.3, {}, {
                    onUpdate(target, ratio) {
                        uiData.nodeGoal.getComponent(UIOpacity).opacity = ratio * 255;
                        uiData.nodeLost.getComponent(UIOpacity).opacity = ratio * 255;
                    },
                })
                .by(0.3, {}, {
                    onUpdate(target, ratio) {
                        uiData.nodeGoal.getComponent(UIOpacity).opacity = (1 - ratio) * 255;
                        uiData.nodeLost.getComponent(UIOpacity).opacity = (1 - ratio) * 255;
                    },
                })
                .by(0.3, {}, {
                    onUpdate(target, ratio) {
                        uiData.nodeGoal.getComponent(UIOpacity).opacity = ratio * 255;
                        uiData.nodeLost.getComponent(UIOpacity).opacity = ratio * 255;
                    },
                })
                .by(0.3, {}, {
                    onUpdate(target, ratio) {
                        uiData.nodeGoal.getComponent(UIOpacity).opacity = (1 - ratio) * 255;
                        uiData.nodeLost.getComponent(UIOpacity).opacity = (1 - ratio) * 255;
                    },
                })
                .by(0.3, {}, {
                    onUpdate(target, ratio) {
                        uiData.nodeGoal.getComponent(UIOpacity).opacity = ratio * 255;
                        uiData.nodeLost.getComponent(UIOpacity).opacity = ratio * 255;
                    },
                })
                .start();
        })
    }

    resetHistoryGridData() {
        this.arrayGridUIData.forEach(uiData => {
            uiData.nodeGoal.active = false;
            uiData.nodeLost.active = false;
        }) 
    }
}


