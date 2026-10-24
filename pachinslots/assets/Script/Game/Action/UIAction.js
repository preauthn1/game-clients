cc.Class({
    extends: cc.Component,

    editor : {
        disallowMultiple : true,
        executeInEditMode : true,
        menu : 'Action/UIAction'
    },

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

        this.data = []
        let data1 = this.node.getComponents("UIActionData")
        if (data1 != null){
            for (let i = 0; i < data1.length; i++){
                this.data.push(data1[i])
            }
        }
        let data2 = this.node.getComponentsInChildren("UIActionData");
        if (data2 != null){
            for (let i = 0; i < data2.length; i++){
                this.data.push(data2[i])
            }
        }
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
});
