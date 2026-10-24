var GameG = require("GameGlobal");
var GameData = require("GameData");
var GameConfig = require("GameConfig");

/** 玩到一半獲勝UI */
cc.Class({
    extends: cc.Component,

    properties: {
        WaitTime : 3,
    },

    init (GameLayer) {
        this.GameLayer = GameLayer
        
        this.Label_Score = cc.find("Label_Score", this.node).getComponent(cc.Label)
        this.Label_PlayerId = cc.find("Label_PlayerId", this.node).getComponent(cc.RichText)

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
            else{
                let text = GameG.GetLocalizedString("BEATEN")
                text = text.replace('##', player.UserID);
                this.Label_PlayerId.string = text
            }
        }

        let self = this
        setTimeout(function () {
            self.hide()
            self.GameLayer.showGameResult()
        }.bind(self), this.WaitTime * 1000);        
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
