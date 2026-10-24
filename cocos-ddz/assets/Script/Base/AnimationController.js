var FileManager = require("FileManager");
var StateMachine = require("StateMachine");

cc.Class({
    extends: cc.Component,    

    properties: {
        dataPath : "",
        dataName : "",
        data:cc.JsonAsset,
    }, 

    onLoad(){
        this.Init();
    },    

    Init(){
        if (this.animation == null)
        {
            this.animation = this.node.getComponent(cc.Animation)
            this.sm = new StateMachine();
            this.sm.setAnimation(this.animation);
            this.sm.initData(this.data.json);
        }
    },

    start() {

    },

    onDestroy() {
        this.animation = null;
    },

    update (dt) {
        if (this.sm)
        {
            this.sm.update(dt, false)
        }
    },

    SetBool(CondName, CondValue){
        this.Init()
        if (this.sm){
            this.sm.SetBool(CondName, CondValue)
        }
        else {
            console.log("############## SetBool this.sm is null", this.node.name, CondName, CondValue)
        }
    },

    SetFloat(CondName, CondValue){
        this.Init()
        if (this.sm){
            this.sm.SetFloat(CondName, CondValue)
        }
        else {
            console.log("############## SetFloat this.sm is null", this.node.name, CondName, CondValue)
        }
    },

    SetInteger(CondName, CondValue){
        this.Init()
        if (this.sm)
            this.sm.SetInteger(CondName, CondValue)
        else {
            console.log("############## SetInteger this.sm is null", this.node.name, CondName, CondValue)
        }
    },

    SetTrigger(CondName){
        this.Init()
        if (this.sm)
            this.sm.SetTrigger(CondName, 1)
        else {
            console.log("############## SetTrigger this.sm is null", this.node.name, CondName)
        }
    },

    ChangeState(StateName){
        this.Init()
        if (this.sm)
            this.sm.changeState(StateName, false)
        else {
            console.log("############## ChangeState this.sm is null", this.node.name, StateName)
        }       
    }
});
