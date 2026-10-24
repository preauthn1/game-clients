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

    @property(cc.Node)
    target: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    private moveSpeed = 200;
    private gunView = null;
    @property
    speed = 30;
    start () {

    }

    setTarget(target,gunView){
        this.target = target;
        this.update(0);
        this.gunView = gunView;
    }

    update (dt) {
        if(!this.target){
            return;
        }
        //计算出朝向
        var dx = this.target.x - this.node.x;
        var dy = this.target.y - this.node.y;
        var dir = cc.v2(dx,dy);
        // if(dir.magSqr() < 100*100){
        //     this.node.destroy();
        //     return;
        // }

        var angle = dir.signAngle(cc.v2(1,0));

        var degree = angle / Math.PI * 180;
        this.node.rotation = degree;

        dir.normalizeSelf();
        this.node.x += dt * dir.x * 5 * this.moveSpeed;
        this.node.y += dt * dir.y * 5 *this.moveSpeed;
    }
    onCollisionEnter(other, self) {
        // console.log('on collision enter');
        // console.log(other);
        other.node.getComponent("CreepGroupView").die();
        this.node.destroy();
    }
}

