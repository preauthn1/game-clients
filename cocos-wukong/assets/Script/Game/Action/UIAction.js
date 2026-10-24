cc.Class({
    extends: cc.Component,

    properties: {
        index : {
            displayName: "索引值",
            default: 0,
        },
        
        actionName : {
            displayName: "名稱",
            default: "",
        },

        playTime : {
            displayName: "顯示時間",
            default: 0,
            tooltip: "顯示時間 0:一直顯示 >0有指定顯示時間"
        },

        useAniTime : {
            displayName: "顯示使用動畫時間",
            default: false,
            tooltip: "顯示時間使用動畫播放的時間"
        },        

        nextNode :
        {
            displayName: "##### 指定下一個索引值 #####",
            default: null,
            type: cc.Node,
            notify(oldValue){
                let data = this.nextNode.getComponent("UIAction")
                if (data != null){
                    this.next = data.index
                }
            },
        },

        next : {
            displayName: "下一個索引值",
            default: 1,
        },          
    },

    init(actionManager){
        this.actionManager = actionManager
        this.data = this.node.getComponents("UIActionData")
    },

    getIndex(){
        return this.index
    },    

    beginAction(callback, nextAction){
        this.accTime = 0
        if (nextAction == 0){
            this.nextAction = this.next
        }
        else{
            this.nextAction = nextAction
        }

        this.callback = callback

        this.doFirstAction()
    },

    doFirstAction(){
        for (let i = 0; i < this.data.length; ++i){
            let data = this.data[i]
            data.init(this)
            data.doFirstAction()
        }
    },

    doAction(dt){
        for (let i = 0; i < this.data.length; ++i){
            let data = this.data[i]
            data.doAction(dt)
        }

        // 計算action，時間到自動轉到下一個action
        if (this.playTime > 0){
            this.accTime += dt

            if (this.accTime >= this.playTime){
                this.doNextAction()                    
            }
        }
    },

    doLastAction(){
        for (let i = 0; i < this.data.length; ++i){
            let data = this.data[i]
            data.doLastAction()
        }
    },

    doNextAction(){
        if (this.nextAction == -2){
            return
        }

        if (this.nextAction > 0){
            this.actionManager.changeAction(this.nextAction, this.callback)
        }
        else{
            this.nextAction = -2
            this.doLastAction()

            if (this.callback != null){
                this.callback()
                this.callback = null
            }
        }
    },

    setPlayAnimationEndOnceCB(){
        if (this.useAniTime == true){
            this.playAnimationEndOnceCB = true
        }
    },

    playAnimationEndOnce(){
        if (this.useAniTime == true){
            if (this.playAnimationEndOnceCB == true){
            this.playAnimationEndOnceCB = false
            this.doNextAction()
            }
        }
    },

    playAnimationEnd(){
        if (this.useAniTime == true){
            this.doNextAction()
        }
    },

    editor : {
        //executeInEditMode : false
        disallowMultiple: true,

    }
});
