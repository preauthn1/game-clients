// Learn cc.Class:
//  - [Chinese] https://example.invalid/creator/manual/zh/scripting/class.html
//  - [English] http://example.invalid/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://example.invalid/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://example.invalid/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://example.invalid/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://example.invalid/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        targetComponent:"cc.ParticleSystem",

        targetValue:{
            type:cc.String,
            default:[]
        },

        ttc:cc.Component,

        TotalLife:3,

        colorLife:{
            type:cc.Color,
            default:[]
        },
    },

    start () {
        if(this.targetComponent != ""){
            this.ttc = this.node.getComponent(this.targetComponent);
        }else{
            this.ttc = this.node;
        }
        this.lastColor=this.colorLife[this.colorLife.length - 1];
        this.nextColor=cc.color(255,255,255,255);
        this.nowColor=cc.color(255,255,255,255);

        this.countingTime = 0;
        this.colorTT = 0;
        this.colorCC = 0;
        this.change = 0;
    },

    update (dt) {
        if(this.targetComponent != ""){
            this.ttc = this.node.getComponent(this.targetComponent);
        }else{
            this.ttc = this.node;
        }
        this.singleColor = this.TotalLife / this.colorLife.length;
        this.countingTime = (this.countingTime + dt) % this.TotalLife;
        this.colorTT = this.countingTime % this.singleColor;
        this.colorCC = Math.floor(this.countingTime / this.singleColor);
        if(this.change != this.colorCC){
            this.lastColor = this.colorLife[this.change];
            this.change = this.colorCC;
            this.nextColor = this.colorLife[this.change];
        }
        this.nowColor.r = (this.nextColor.r - this.lastColor.r) * this.colorTT + this.lastColor.r;
        this.nowColor.g = (this.nextColor.g - this.lastColor.g) * this.colorTT + this.lastColor.g;
        this.nowColor.b = (this.nextColor.b - this.lastColor.b) * this.colorTT + this.lastColor.b;
        this.nowColor.a = (this.nextColor.a - this.lastColor.a) * this.colorTT + this.lastColor.a;
        for(let i in this.targetValue){
            this.ttc[this.targetValue[i]]= this.nowColor;
        }
    },
    // editor : {
    //     executeInEditMode : true
    // }
});
