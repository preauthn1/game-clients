var UIBase = require("UIBase")

cc.Class({
    extends: UIBase,

    Init(){
        this.diamond = cc.find("diamond", this.node)
        this.label_reward_diamond = cc.find("label_reward", this.diamond).getComponent(cc.Label)

        this.platinum = cc.find("platinum", this.node)
        this.label_reward_platinum = cc.find("label_reward", this.platinum).getComponent(cc.Label)
        this.label_sendOut_platinum = cc.find("label_sendOut", this.platinum).getComponent(cc.Label)
    },

    showUI(type, value, sendOut){
        this.show()

        if (type == 0){
            this.diamond.active = true
            this.platinum.active = false
            this.label_reward_diamond.string = value.toString()
        }
        else if (type == 1){
            this.diamond.active = false
            this.platinum.active = true
            this.label_reward_platinum.string = value.toString()
            this.label_sendOut_platinum.string = sendOut.toString()
        }
    }

});
