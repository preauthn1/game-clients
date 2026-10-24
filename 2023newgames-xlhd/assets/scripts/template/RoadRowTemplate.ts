import { _decorator, Component, Node, UIOpacity, Label, tween, Vec3 } from 'cc';
import { BigRoadData } from '../TrandHandler';
const { ccclass, property } = _decorator;

/**
 * Road Row Template for Prefab
 */
@ccclass('RoadRowTemplate')
export class RoadRowTemplate extends Component {

    @property(UIOpacity)
    public opacityIcon: UIOpacity;
    @property(Node)
    public nodeDragonIcon: Node;
    @property(Node)
    public nodeTigerIcon: Node;
    @property(Label)
    public lblTieCount: Label;


    setRoadIconData(resultType: number, tieCount: number, isNew: boolean = false) {
        var self = this;
        this.nodeDragonIcon.active = resultType === 0;
        this.nodeTigerIcon.active = resultType === 2;
        this.lblTieCount.node.active = tieCount > 0;
        this.lblTieCount.string = tieCount.toString();
        if (isNew) {
            tween().target(this.node)
            .by(0.5, { position: Vec3.ZERO}, {
                onUpdate: (target: Vec3, ratio: number) => {
                    self.opacityIcon.opacity = ratio * 255;
                }
            })
            .by(0.5, { position: Vec3.ZERO}, {
                onUpdate: (target: Vec3, ratio: number) => {
                    self.opacityIcon.opacity = (1 - ratio) * 255;
                }
            })
            .by(0.5, { position: Vec3.ZERO}, {
                onUpdate: (target: Vec3, ratio: number) => {
                    self.opacityIcon.opacity = ratio * 255;
                }
            })
            .start();
        } else {
            this.opacityIcon.opacity = 255;
        }
    }
}


