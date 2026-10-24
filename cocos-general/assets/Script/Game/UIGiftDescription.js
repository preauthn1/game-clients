var UIBase = require("UIBase")

cc.Class({
    extends: UIBase,

    Init(){
        this.rootDiamond = cc.find("diamond", this.node)
        this.labelRewardDiamond = cc.find("label_reward", this.rootDiamond).getComponent(cc.Label)

        this.rootPlatinum = cc.find("platinum", this.node)
        this.labelRewardPlatinum = cc.find("label_reward", this.rootPlatinum).getComponent(cc.Label)
        this.labelSendOutPlatinum = cc.find("label_sendOut", this.rootPlatinum).getComponent(cc.Label)
    },

    showUI(type, value, sendOut){
        this.show()

        if (type == 0){
            this.rootDiamond.active = true
            this.rootPlatinum.active = false
            this.labelRewardDiamond.string = value.toString()
        }
        else if (type == 1){
            this.rootDiamond.active = false
            this.rootPlatinum.active = true
            this.labelRewardPlatinum.string = value.toString()
            this.labelSendOutPlatinum.string = sendOut.toString()
        }
    }

});
