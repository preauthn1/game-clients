var GameG = require("GameGlobal")

cc.Class({
    extends: cc.Component,

    editor : {
        executeInEditMode : true,
        menu : 'Action/UIActionManager'
    },

    properties: {

    },

    Init(){
        this.nowAction = null
        this.action = new Map()

        this.data = this.node.getComponentsInChildren("UIAction")
        for (let i = 0; i < this.data.length; ++i){
            let data = this.data[i]
            if (data.index != null){     
                if (this.action.has(data.index) == false){       
                    this.action.set(data.index, data)
                    
                    data.init(this)
                }
                else{
                    console.error("index 重複", data.index, data.actionName)
                }
            }
        }
    },

    getAction(index){
        let action = this.action.has(index)
        if (action == null)
            return null;
        else
            return this.action.get(index)
    },

    update(dt){
        if (this.nowAction != null){
            this.nowAction.doAction(dt)
        }
    },

    // callback 播放完成的callback
    // nextAction -1:不自動切換 0:預設
    changeAction(index, callback = null, nextAction = 0){
        // console.log("###### change action index:" + index + " nextAction:" + nextAction)
        
        if (this.nowAction != null){
            // 狀態一樣不切換
            // if (this.nowAction.getIndex() == index)
            //     return
            
            this.nowAction.doLastAction()
        }

        this.nowAction = this.getAction(index)
        if (this.nowAction != null) {
            this.nowAction.beginAction(callback, nextAction)
        }
        else{
            console.error("action index not find", index)
        }
    },

    setPlayAnimationEndOnceCB(){
        if (this.nowAction != null){
            this.nowAction.setPlayAnimationEndOnceCB()
        }
    },
});
