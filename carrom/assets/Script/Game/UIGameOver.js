var GameConfig = require("GameConfig")
var GameData = require("GameData")

cc.Class({
    extends: cc.Component,

    init (GameLayer) {
        this.GameLayer = GameLayer
        
        this.Label_Score = cc.find("Label_Score", this.node).getComponent(cc.Label)

        this.hide()
    },

    show(){
        this.node.active = true

        let data = GameData.getRank()
        for (let i = 0; i < data.Players.length; ++i){
            let player = data.Players[i]
            if (player.UserID == GameConfig.getUserID()){
                let Score = player.Score
                if (Score == null){
                    Score = 0
                }

                this.Label_Score.string = Score.toString()
            }
        }
    },

    hide(){
        this.node.active = false
    },

    isShow(){
        return this.node.active
    },

    clickOK(){
        this.GameLayer.playClickSound()
        this.hide()

        this.GameLayer.showGameResult()
    }
});
