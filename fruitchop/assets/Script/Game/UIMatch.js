var GameG = require("GameGlobal");
var GameData = require("GameData")
var GameManager = require("GameManager")

/** 配對UI */
cc.Class({
    extends: cc.Component,

    properties: {
        WaitTime : 60       
    },

    init (GameLayer) {
        this.GameLayer = GameLayer
        this.GameModel = this.GameLayer.GameModel

        this.UIPlayer1 = cc.find("Player1", this.node).getComponent("UIPlayer")
        this.Label_Time = cc.find("Label_Time", this.node).getComponent(cc.Label)
        this.Label_coin = cc.find("Label_coin", this.node).getComponent(cc.Label)

        this.hide()
    },

    show(){
        this.node.active = true

        let roomInfo = GameManager.getRoomInfo()
        this.Label_coin.string = Math.floor(roomInfo.BaseScore / 100).toString()
        
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
            }
            else{
                self.showTime(value)
            }
      
        },  interval, times)   
    },

    showTime(value){
        let timeString = ""

        let min = Math.floor(value / 60)
        if (min > 0){
            if (min < 10){
                timeString += "0"
            }
            timeString += min.toString()
        }
        else{
            timeString += "00"
        }
        timeString += ":"

        let sec = value % 60
        if (sec < 10){
            timeString += "0"
        }
        timeString += sec.toString()

        let text = GameG.GetLocalizedString("FindingPlayer")
        text = text.replace('##', timeString);

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
