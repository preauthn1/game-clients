import { _decorator, Component, Node, Enum } from 'cc';
const { ccclass, property } = _decorator;

export enum NextCategory {
    DRAGON = 0,
    TIGER = 2
}
Enum(NextCategory)

/**
 * 下次的下三路的 Template for Prefab
 */
@ccclass('NextThreeRoadTemplate')
export class NextThreeRoadTemplate extends Component {
    @property({type: NextCategory})
    public category: NextCategory = NextCategory.DRAGON;
    @property(Node)
    public nodeDragon: Node;
    @property(Node)
    public nodeTiger: Node;

    setNextThreeRoadType(type: number) {
        this.nodeDragon.active = type !== -1 && type === this.category;
        this.nodeTiger.active = type !== -1 && type !== this.category;
    }
}


