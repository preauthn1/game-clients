cc.Class({
    extends: cc.Component,

    Init () {
        this.UIActionManager = cc.find("Canvas/ActionManager").getComponent("UIActionManager")

        this.action = new Map()

        this.data = this.node.getComponentsInChildren("UISlotAction")
        for (let i = 0; i < this.data.length; ++i){
            let data = this.data[i]
            if (data.index != null){     
                if (this.action.has(data.index) == false){       
                    this.action.set(data.index, data)
                }
                else{
                    console.error("index 重複", data.index, data.actionName)
                }
            }
        }
    },

    setData(index){
        if (this.action.has(index) != null){
            this.nowAction = this.action.get(index)
        }
        else{
            this.nowAction = null
        }
    },
    
    do_start(callback){
        if (this.nowAction == null){
            return
        }

        this.setNowData(this.nowAction.startAction, callback)
    },

    do_startStop(index, callback){
        if (this.nowAction == null){
            return
        }

        let data = null
        if (index == 0){
            data = this.nowAction.startStopAction1
        }
        else if (index == 1){
            data = this.nowAction.startStopAction2
        }
        else if (index == 2){            
            data = this.nowAction.startStopAction3
        }
        this.setNowData(data, callback)
    },

    do_stop(index, callback){
        if (this.nowAction == null){
            return
        }

        let data = null
        if (index == 0){
            data = this.nowAction.stopAction1
        }
        else if (index == 1){
            data = this.nowAction.stopAction2
        }
        else if (index == 2){            
            data = this.nowAction.stopAction3
        }
        this.setNowData(data, callback)
    },
    
    do_stopAll(callback){
        if (this.nowAction == null){
            return
        }

        this.setNowData(this.nowAction.stopAllAction, callback)
    },

    setNowData(data, callback){
        if (data.length == 0){
            if (callback != null){
                callback()
            }
            return
        }

        this.nowIndex = 0
        this.data = data
        this.callback = callback
        this.changeAction()
    },

    doNextAction(){
         this.UIActionManager.setPlayAnimationEndOnceCB()
    },

    changeAction(){
        if (this.nowIndex >= this.data.length){
            if (this.callback != null){
                this.callback()
                this.callback = null
            }
            return
        }

        let index = this.data[this.nowIndex]
        let self = this
        this.UIActionManager.changeAction(index, function(){
            self.nowIndex += 1
            self.changeAction()
        },
        -1)
    }
});
