var UIBase = require("UIBase")

cc.Class({
    extends: UIBase,

    Init(){
        this.label_title = cc.find("title", this.node).getComponent(cc.Label)
    },

    showUI(roomId){
        this.show()

        this.label_title.string = "NO." + roomId.toString() + " 機台資訊"
    }
});
