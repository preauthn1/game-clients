const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property([cc.Prefab])
    public creeps: cc.Prefab[] = [];
    @property(cc.Node)
    creepField: cc.Node = null;

    

    private timerSpawn = 0;
    onLoad () {
        window.gameView = this;
    }

    start () {
        this.timerSpawn =0;
    }

    update (dt) {
        this.timerSpawn -= dt;

        if(this.timerSpawn <=0 ){
            this.timerSpawn = Math.floor(Math.random() * 1) + 1;
            var prefab = cc.instantiate(this.creeps[Math.floor(Math.random() * this.creeps.length)  ]);
            prefab.position = cc.v2(1000,1000);
            this.creepField.insertChild(prefab, 0);
        }

    }


}
