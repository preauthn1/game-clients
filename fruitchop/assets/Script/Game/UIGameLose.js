var GameG = require("GameGlobal");
var GameData = require("GameData");
var GameManager = require("GameManager");

/** 輸UI */
cc.Class({
    extends: cc.Component,

    init (GameLayer) {
        this.GameLayer = GameLayer
        
        this.UIPlayer1 = cc.find("Player1", this.node).getComponent("UIPlayer")
        this.UIPlayer2 = cc.find("Player2", this.node).getComponent("UIPlayer")
        this.Label_coin = cc.find("OkButton/label_coin", this.node).getComponent(cc.Label)
        this.ProgressBar = cc.find("OkButton", this.node).getComponent(cc.Sprite)
    
        this.hide()
    },

    show(){
        this.node.active = true

        let resultData = GameData.getGameResult()
        this.GameLayer.updatePlayerData(resultData.Rank, this.UIPlayer1, this.UIPlayer2)

        let value = 0
        if (resultData.WinMoney % 100 == 0){
            value = (resultData.WinMoney / 100).toFixed(0)
        }
        else if (resultData.WinMoney % 10 == 0){
            value = (resultData.WinMoney / 100).toFixed(1)
        }
        else{
            value = (resultData.WinMoney / 100).toFixed(2)
        }

        this.UIPlayer2.setReward(value)

        let roomInfo = GameManager.getRoomInfo()
        this.Label_coin.string = Math.floor(roomInfo.BaseScore / 100).toString()

        this.stopTime()

        let self = this
        let time = 5 // 自動開始時間
        let interval = 0.1 // 更新頻率
        let times = time / interval
        let acc = 0
        
        this.ProgressBar.fillRange = 0

        this.countdown = GameG.StartCountdown(function(){
            acc += interval

            let value = acc / time
            self.ProgressBar.fillRange = value;

            if (acc >= time){
                self.hide()
                self.clickOK()
            }            
        },  interval, times)        
    },


    hide(){
        this.stopTime()        
        this.node.active = false    
    },

    isShow(){
        return this.node.active
    },

    stopTime(){
        if (this.countdown != null){
            GameG.CancelCountdown(this.countdown)
            this.countdown = null
        }
    },  

    clickOK(){
        this.hide()
        this.GameLayer.playClickSound()
        this.GameLayer.UIMatch.show()
    },

    clickCancel(){
        this.hide()
        this.GameLayer.playClickSound()
        GameG.ExitGame()
    },
});
