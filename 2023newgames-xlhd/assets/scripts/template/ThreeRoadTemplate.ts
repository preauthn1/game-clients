import { _decorator, Component, Node, UIOpacity, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

/**
 * 下三錄用 template for Prefab
 */
@ccclass('ThreeRoadTemplate')
export class ThreeRoadTemplate extends Component {
    @property(Node)
    public nodeDragonIcon: Node;
    @property(Node)
    public nodeTigerIcon: Node;
    @property(UIOpacity)
    public opacityNode: UIOpacity;

    setTreeRoadIconData(showType: number, isNew: boolean = false) {
        var self = this;
        this.nodeDragonIcon.active = showType === 0;
        this.nodeTigerIcon.active = showType === 2;
        if (isNew) {
            tween().target(this.node)
                .by(0.5, { position: Vec3.ZERO}, {
                    onUpdate: (target: Vec3, ratio: number) => {
                        self.opacityNode.opacity = ratio * 255;
                    }
                })
                .by(0.5, { position: Vec3.ZERO }, {
                    onUpdate: (target: Vec3, ratio: number) => {
                        self.opacityNode.opacity = (1 - ratio) * 255;
                    }
                })
                .by(0.5, { position: Vec3.ZERO}, {
                    onUpdate: (target: Vec3, ratio: number) => {
                        self.opacityNode.opacity = ratio * 255;
                    }
                })
                .start();
        } else {
            this.opacityNode.opacity = 255;
        }
    }
}


