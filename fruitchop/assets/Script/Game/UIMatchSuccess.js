var GameG = require("GameGlobal");
var GameData = require("GameData")
var GameConfig = require("GameConfig");

/** 配對成功UI */
cc.Class({
    extends: cc.Component,

    properties: {
        WaitTime : 60       
    },

    init (GameLayer) {
        this.GameLayer = GameLayer
        this.GameModel = this.GameLayer.GameModel

        this.UIPlayer1 = cc.find("Player1", this.node).getComponent("UIPlayer")
        this.UIPlayer2 = cc.find("Player2", this.node).getComponent("UIPlayer")
        this.Label_coin = cc.find("Label_coin", this.node).getComponent(cc.Label)

        this.hide()
    },

    show(){
        this.node.active = true
  
        let accValue = 0
        let data = GameData.getGameSetting()
        for (let i = 0; i < data.Players.length; ++i){
            let player = data.Players[i]
            if (player.UserID == GameConfig.getUserID()){
                this.UIPlayer1.initData(player)
            }
            else{
                this.UIPlayer2.initData(player)
            }
            accValue += player.UserID
        }

        // 設定亂數種子，種子數值為兩個玩家ID數值種和
        GameG.InitRandomSeed(accValue)

        this.Label_coin.string = Math.floor(data.Bet / 100).toString()        
    },

    hide(){
        this.node.active = false
    },

    isShow(){
        return this.node.active
    }
});
