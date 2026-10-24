var UIBase = require("UIBase")

cc.Class({
    extends: UIBase,

    Init(){
        this.label_reward = cc.find("label_reward", this.node).getComponent(cc.Label)
    },

    showUI(value){
        this.show()

        this.label_reward.string = value.toString()
    }

});
