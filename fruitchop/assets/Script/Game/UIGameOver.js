var GameConfig = require("GameConfig")
var GameData = require("GameData");
const GameGlobal = require("./GameGlobal");

/** 遊戲結束UI */
cc.Class({
    extends: cc.Component,

    properties: {
        WaitTime : 3,
    },

    init (GameLayer) {
        this.GameLayer = GameLayer
        
        this.Label_Score = cc.find("Label_Score", this.node).getComponent(cc.Label)

        this.MissFruit = cc.find("MissFruit", this.node)
        this.FruitIcon = []
        for(let i = 1; i <= 3; ++i){
            let obj = cc.find("Fruit" + i.toString() + "/Icon", this.MissFruit).getComponent(cc.Sprite)
            this.FruitIcon.push(obj)
        }
        this.StruckBom = cc.find("StruckBom", this.node)

        this.hide()
    },

    show(){
        this.node.active = true

        // 有砍到炸彈
        if (GameData.getBoomCount() > 0){
            this.MissFruit.active = false
            this.StruckBom.active = true
        }
        // MISS 3次水果
        else{
            this.MissFruit.active = true
            this.StruckBom.active = false            
            let missFruit = GameData.getMissFruit()

            for (let i = 0; i < this.FruitIcon.length; ++i){
                let fruit = this.GameLayer.FruitManager.getFruit(missFruit[i])
                if (fruit != null){
                    let fruitScript = fruit.getComponent("Fruit");
                    this.FruitIcon[i].spriteFrame = fruitScript.Pic
                    GameGlobal.ResetSpriteSize(this.FruitIcon[i])
                }
                else{
                    console.error("missFruit is null", missFruit)
                }
            }
        }

        // 顯示分數
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

        let self = this
        setTimeout(function () {
            self.hide()

            if (GameData.getGameResult() != null){
                self.GameLayer.showGameResult()
            }
            else{
                self.GameLayer.UIWaitGameOver.show()
            }
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

        if (GameData.getGameResult() != null){
            this.GameLayer.showGameResult()
        }
        else{
            this.GameLayer.UIWaitGameOver.show()
        }
    }
});
