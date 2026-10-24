var FileManager = require("FileManager");
var StateMachine = require("StateMachine");

cc.Class({
    extends: cc.Component,    

    properties: {
        dataPath : "",
        dataName : "",
    }, 

    onLoad(){
        let self = this
        this.animation = this.node.getComponent(cc.Animation)
        this.sm = new StateMachine();
        this.sm.setAnimation(this.animation);

        FileManager.LoadFile(true, this.dataPath, this.dataName, cc.JsonAsset, (err, data)=> {
            if (err) {
                return;
            }
            
            // 指定clip
            if (this.node.name,self.animation._clips.length == 0)
            {
                let acc = 0;
                let clip = data.json.clip;
                clip.forEach(function (clipname) {
                    FileManager.LoadFile(true, self.dataPath, clipname, cc.AnimationClip,  (err, clipData)=> {
                        if (err) {
                            return;
                        }
                        
                        if (self.node == null){
                            console.log("***************** self.node is null")
                            return
                        }


                        if (clipData != null)
                            if (self.animation)
                                self.animation.addClip(clipData);
                            else
                                console.log("***************** self.animation is null")
                        else{
                            console.log("****************** clip data is null")
                        }

                        acc++;
                        if (acc == clip.length){
                            self.sm.initData(data.json);
                        }
                    });

                });
            }
        });
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
        if (this.node.name == "ButtonOption1")
        console.log("############## SetBool ", this.node.name, CondName, CondValue)
        if (this.sm)
            this.sm.SetBool(CondName, CondValue)
        else {
            console.log("############## SetBool this.sm is null", this.node.name, CondName, CondValue)
        }
    },

    SetFloat(CondName, CondValue){
        if (this.node.name == "ButtonOption1")
        console.log("############## SetFloat ", this.node.name, CondName, CondValue)
        if (this.sm)
            this.sm.SetFloat(CondName, CondValue)
        else {
            console.log("############## SetFloat this.sm is null", this.node.name, CondName, CondValue)
        }
    },

    SetInteger(CondName, CondValue){
        if (this.node.name == "ButtonOption1")
        console.log("############## SetInteger ", this.node.name, CondName, CondValue)
        if (this.sm)
            this.sm.SetInteger(CondName, CondValue)
        else {
            console.log("############## SetInteger this.sm is null", this.node.name, CondName, CondValue)
        }
    },

    SetTrigger(CondName){
        if (this.node.name == "ButtonOption1")
        console.log("############## SetTrigger ", this.node.name, CondName)
        if (this.sm)
            this.sm.SetTrigger(CondName, 1)
        else {
            console.log("############## SetTrigger this.sm is null", this.node.name, CondName)
        }
    },

    ChangeState(StateName){
        if (this.node.name == "ButtonOption1")
        console.log("############## ChangeState ", this.node.name, StateName)
        if (this.sm)
            this.sm.changeState(StateName, false)
        else {
            console.log("############## ChangeState this.sm is null", this.node.name, StateName)
        }       
    }
});
