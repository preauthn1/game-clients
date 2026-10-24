var GameG = require("GameGlobal");
var GameData = require("GameData")

cc.Class({
    extends: cc.Component,

    properties: {
        WaitTime : 60       
    },

    init (GameLayer) {
        this.GameLayer = GameLayer
        this.GameModel = this.GameLayer.GameModel

        this.UIPlayer1 = cc.find("Player1", this.node).getComponent("UIPlayer")
        this.UIPlayer1.clear()
        this.UIPlayer2 = cc.find("Player2", this.node).getComponent("UIPlayer")
        this.UIPlayer2.clear()

        this.Label_Time = cc.find("Label_Time", this.node).getComponent(cc.Label)
        this.Label_Time.string = ""

        this.hide()
    },

    show(){
        this.node.active = true

        this.GameModel.readyGame()

        this.stopTime()

        this.beginTime()

        let userData = GameData.getUserData()
        this.UIPlayer1.initData(userData.User)
    },

    beginTime(){
        let self = this
        let time = this.WaitTime // 自動開始時間
        let interval = 1
        let times = time / interval
        let acc = 0
        this.showTime(time)

        this.countdown = GameG.StartCountdown(function(){
            acc += interval

            let value = Math.floor(time - acc)
            if (value < 0){
                self.stopTime()
                self.beginTime()
                self.showTime(0)
                // self.hide()
                // self.GameLayer.UIGameStart.show()                
            }
            else{
                self.showTime(value)
            }
      
        },  interval, times)   
    },

    showTime(value){
        let min = Math.floor(value / 60)
        let text = "("
        if (min > 0){
            if (min < 10){
                text += "0"
            }
            text += min.toString()
        }
        else{
            text += "00"
        }
        text += ":"

        let sec = value % 60
        if (sec < 10){
            text += "0"
        }
        text += sec.toString() + ")"
        this.Label_Time.string = text
    },

    hide(){
        this.stopTime()
        this.node.active = false
    },

    stopTime(){
        if (this.countdown != null){
            GameG.CancelCountdown(this.countdown)
            this.countdown = null
        }
    },    

    isShow(){
        return this.node.active
    }
});
