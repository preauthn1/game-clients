// Learn TypeScript:
//  - [Chinese] https://example.invalid/creator/manual/zh/scripting/typescript.html
//  - [English] http://example.invalid/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://example.invalid/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://example.invalid/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://example.invalid/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://example.invalid/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property([cc.Prefab])
    public bullet: cc.Prefab[] = [];
    @property(cc.Node)
    bulletField: cc.Node = null;

    private bulletList = [];
    private timerSpawn = 0.5;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    update (dt) {
        this.timerSpawn -= dt;
    }

    onCollisionEnter(other, self) {
        if(this.timerSpawn <=0){
            this.timerSpawn = 1;
            var prefab = cc.instantiate(this.bullet[0]);
            prefab.position = this.node.position;
            prefab.active = true;
            this.bulletList.push(prefab);
            this.bulletField.insertChild(prefab, 0);
            prefab.getComponent("BulletView").setTarget(other.node,this);
        }
    }

    bulletCleanUp(bullet){

    }
}
