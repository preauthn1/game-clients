cc.Class({
    extends: cc.Component,

    start () {
        this.GameSound = cc.find("Canvas/GameSound").getComponent("GameSound")

        let self = this

        let btn_close = cc.find("btn_close", this.node)
        if (btn_close != null){
            btn_close.on('click', function () {
                self.hide()
            })
        }

        let btn_mask = cc.find("mask", this.node)
        if (btn_mask != null){
            btn_mask.on('click',function(){
                self.hide()
            })
        }
    },

    show(){
        this.node.active = true

        if (this.GameSound == null)
            this.GameSound = cc.find("Canvas/GameSound").getComponent("GameSound")
        this.GameSound.playShowUI()
    },

    hide(){
        this.node.active = false

        if (this.GameSound == null)
            this.GameSound = cc.find("Canvas/GameSound").getComponent("GameSound")
        this.GameSound.playCloseUI()
    }    
});
