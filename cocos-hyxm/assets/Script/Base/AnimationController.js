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

    onEnable(){
        this.SetCurrentTime(0);
    },

    Init(){
        if (this.animation == null)
        {
            this.animation = this.node.getComponent(cc.Animation)
            this.animation.playOnLoad = true;

            this.NewStateMachine();
        }
    },

    NewStateMachine()
    {
        this.sm = new StateMachine();
        this.sm.setAnimation(this.animation);
        if (this.data != null)
        {
            this.sm.initData(this.data.json);
        }
    },

    Rebind(){
        if (this.sm != null)
            delete this.sm

        this.NewStateMachine();        
    },

    onDestroy() {
        this.animation = null;
        delete this.sm
    },

    update (dt) {
        if (this.sm)
        {
            this.sm.update(dt, false)
        }
    },

    SetBool(CondName, CondValue){
        if (this.sm == null){
            //console.error("############## SetBool this.sm is null", this.node.name, CondName, CondValue)
            this.Init()
        }

        this.sm.SetBool(CondName, CondValue)
    },

    SetFloat(CondName, CondValue){
        if (this.sm == null){
            //console.error("############## SetFloat this.sm is null", this.node.name, CondName, CondValue)
            this.Init()
        }

        this.sm.SetFloat(CondName, CondValue)
    },

    SetInteger(CondName, CondValue){
        if (this.sm == null){
            //console.error("############## SetInteger this.sm is null", this.node.name, CondName, CondValue)
            this.Init()
        }

        this.sm.SetInteger(CondName, CondValue)
    },

    SetTrigger(CondName){
        if (this.sm == null){
            //console.error("############## SetTrigger this.sm is null", this.node.name, CondName)
            this.Init()
        }

        this.sm.SetTrigger(CondName, 1)
    },

    ChangeState(StateName, StartTime = 0){
        if (this.sm == null){
            //console.error("############## ChangeState this.sm is null", this.node.name, StateName)
            this.Init()
        }

        this.sm.changeState(StateName, false, StartTime)    
    },

    HasState(StateName){
        if (this.sm == null){
            //console.error("############## HasState this.sm is null", this.node.name, StateName)
            this.Init()
        }

        return this.sm.HasState(StateName)
    },


    SetSpeed(Speed){
        if (this.sm == null){
            //console.error("############## SetSpeed this.sm is null", this.node.name)
            this.Init()
        }

        this.sm.SetSpeed(Speed)
    },

    GetNowAnimationTime(){
        if (this.sm == null){
            //console.error("############## GetNowAnimationTime this.sm is null", this.node.name)
            this.Init()
        }

        return this.sm.GetNowAnimationTime()
    },

    GetNowAnimationName(){
        if (this.sm == null){
            //console.error("############## GetNowAnimationName this.sm is null", this.node.name)
            this.Init()
        }

        return this.sm.GetNowAnimationName()       
    },

    SetCurrentTime(time){
        if (this.sm == null){
            //console.error("############## SetCurrentTime this.sm is null", this.node.name)
            this.Init()
        }

        return this.sm.SetCurrentTime(time)       
    },

    Pause(){
        if (this.sm == null){
            //console.error("############## Stop this.sm is null", this.node.name)
            this.Init()
        }
        this.sm.Pause()       
    },    
});
