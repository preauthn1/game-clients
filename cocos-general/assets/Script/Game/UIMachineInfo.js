var UIBase = require("UIBase")

cc.Class({
    extends: UIBase,

    Init(){
        this.labelTitle = cc.find("title", this.node).getComponent(cc.Label)
    },

    showUI(roomId){
        this.show()

        this.labelTitle.string = "NO." + roomId.toString() + " 機台資訊"
    }
});
