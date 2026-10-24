var UIBase = require("UIBase")

cc.Class({
    extends: UIBase,

    Init(){
        this.labelReward = cc.find("label_reward", this.node).getComponent(cc.Label)
    },

    ShowUI(value){
        this.show()

        this.labelReward.string = value.toString()
    }

});
