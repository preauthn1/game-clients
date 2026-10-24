var GameG = require("GameGlobal");
var GameData = require("GameData");

cc.Class({
    extends: cc.Component,

    properties : {
        sound_GameLose : {
            default: null,
            type : cc.AudioClip,
        },
    },

    init (GameLayer) {
        this.GameLayer = GameLayer
        
        this.UIPlayer1 = cc.find("Player1", this.node).getComponent("UIPlayer")
        this.UIPlayer2 = cc.find("Player2", this.node).getComponent("UIPlayer")

        this.ProgressBar = cc.find("OkButton/Background", this.node).getComponent(cc.ProgressBar)
        this.Label_OK = cc.find("OkButton/Background/Label", this.node).getComponent(cc.Label)

        this.hide()
    },

    show(){
        GameG.PlaySound(this.sound_GameLose) 

        this.node.active = true

        let resultData = GameData.getGameResult()
        this.GameLayer.updatePlayerData(resultData.Rank, this.UIPlayer2, this.UIPlayer1)

        this.stopTime()

        let self = this
        let time = 5 // 自動開始時間
        let interval = 0.1
        let times = time / interval
        let acc = 0
        
        this.ProgressBar.progres = 0

        let text = "Starting New Battle {0}"
        this.Label_OK.string = text.replace("{0}", "(" + time.toString() + ")")

        this.countdown = GameG.StartCountdown(function(){
            acc += interval

            let value = acc / time
            self.ProgressBar.progress = value;

            self.Label_OK.string = text.replace("{0}", "(" + Math.floor(time - acc).toString() + ")")

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

    stopTime(){
        if (this.countdown != null){
            GameG.CancelCountdown(this.countdown)
            this.countdown = null
        }
    },

    isShow(){
        return this.node.active
    },

    clickOK(){
        this.hide()
        this.GameLayer.playClickSound()
        this.GameLayer.UIMatch.show()
    },

    clickCancel(){
        this.hide()
        this.GameLayer.playClickSound()
        this.GameLayer.UIGameStart.show()
    },
});
