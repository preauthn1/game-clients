const {ccclass, property} = cc._decorator;

@ccclass
export default class BackgroundView extends cc.Component {

    @property([cc.Node])
    public bg: cc.Node[] = [];
    @property([cc.Node])
    public titleObj: cc.Node[] = [];
    @property(cc.Node)
    public loadingObj: cc.Node = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    backgroundLoading(){
        this.loadingObj.active =false;
    }
    changeBackground(i){
        this.changeBackgroundTime(i,300);
    }
    changeBackgroundTime(i,time){
        if(i<0)
        return;

        if(i>100){
            i=i-100;
        }

        for(let i=0;i<this.bg.length;i++){
            this.bg[i].active = false;
        }
        this.bg[i-1].active = true;
        this.loadingObj.active =false;

        if(i==3){
            //taco
        }
        else{

        }

        if(i==4){
            // this.bg[i-1]
        }
    }
    showTitle(i){
        this.titleObj[i-1].active = true;

        this.titleObj[i-1].runAction(cc.sequence(
            cc.delayTime(2),
            cc.callFunc(()=>{
                this.titleObj[i-1].active = false;
            }, this),
        ));
    }
    // update (dt) {}
}
