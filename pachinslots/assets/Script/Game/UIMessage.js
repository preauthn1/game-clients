var GameG = require("GameGlobal")

cc.Class({
    extends: cc.Component,

    properties: {
        textPic: {
            default:[], 
            type: cc.Node,
            tooltip: "1.遊戲開始\n" +
                     "2.你的總壓住小於最小壓住\n" +
                     "3.請停輪\n" +
                     "4.恭喜中獎!\n" + 
                     "5.別氣餒,歡迎下次中大獎\n" + 
                     "6.注意!即將進入紅利遊戲模式!\n" +
                     "7.注意!即將進入超級紅利遊戲模式!\n" +
                     "8.BIG BONUS\n" +
                     "9.REGULAR BONUS\n" +
                     "10.JACIN\n" +
                     "11.自動模式\n"
        },
    },

    Init(){
        for (let i = 0; i < this.textPic.length; ++i){
            this.textPic[i].active = false
        }
    },

    showMessage(index, time = 0, blink = false){
        this.hideMessage()

        this.showIndex = index
        
        if (this.textPic[this.showIndex - 1] != null){
            this.textPic[this.showIndex - 1].active = true
        }

        if (time > 0){
            let self = this
            GameG.NewDelayOnce(function(){
                self.showMessage(1)
            }, time);
        }

        if (blink == true){
            cc.tween(this.textPic[this.showIndex - 1])
                .blink(9999999, 9999999 * 2)
                .start();
        }
    },

    setText(text){
        if (text == null){
            return
        }

        if (this.textPic[this.showIndex - 1] == null){
            return
        }

        let common_number = cc.find("common_number", this.textPic[this.showIndex - 1])
        if (common_number == null){
            return
        }

        let label = common_number.getComponent(cc.Label)
        if (label == null){
            return
        }

        label.string = text
    },

    hideMessage(){
        if (this.showIndex != 0){
            if (this.textPic[this.showIndex - 1] != null){
                this.textPic[this.showIndex - 1].stopAllActions()
                this.textPic[this.showIndex - 1].opacity = 255

                this.textPic[this.showIndex - 1].active = false
                this.showIndex = 0
            }
        }
    }
});
