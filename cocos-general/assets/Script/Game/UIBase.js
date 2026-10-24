cc.Class({
    extends: cc.Component,

    onLoad () {
        this.GameSound = cc.find("Canvas/GameSound").getComponent("GameSound")

        let self = this

        let btnClose = cc.find("btn_close", this.node)
        if (btnClose != null){
            btnClose.on('click', function () {
                self.GameSound.playButton()
                self.hide()
            })
        }

        let btnMask = cc.find("mask", this.node)
        if (btnMask != null){
            btnMask.on('click',function(){
                self.GameSound.playButton()
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
