var GameG = require("GameGlobal");
var GameConfig = require("GameConfig");
var GameData = require("GameData");

/** 遊戲UI */
cc.Class({
    extends: cc.Component,

    properties : {
        sound_GameStart : {
            default: null,
            type : cc.AudioClip,
        },
        sound_GameOver : {
            default: null,
            type : cc.AudioClip,
        },
        sound_Countdown : {
            default: null,
            type : cc.AudioClip,
        },
    },

    init (GameLayer) {
        this.GameLayer = GameLayer
        this.Control = GameLayer.Control
        this.FruitManager = GameLayer.FruitManager

        this.bg = cc.find("bg", this.node)

        this.UIPlayer1 = cc.find("Player1", this.node).getComponent("UIPlayer")
        this.UIPlayer2 = cc.find("Player2", this.node).getComponent("UIPlayer")

        this.ScoreManager = cc.find("Score", this.node).getComponent("Score")

        this.UIWait = cc.find("Wait", this.node)
		this.UIWait.active = false
        this.Label_WaitTime = cc.find("label_time", this.UIWait).getComponent(cc.Label)

        this.UIStart = cc.find("Start", this.node)
		this.UIStart.active = false

        this.hide()
    },

    show(){
        this.node.active = true

        this.ScoreManager.clear()

        // 設定玩家資料
        this.UIPlayer1.clear()
        this.UIPlayer2.clear()

        let data = GameData.getGameSetting()
        for (let i = 0; i < data.Players.length; ++i){
            let player = data.Players[i]
            if (player.UserID == GameConfig.getUserID()){
                this.UIPlayer1.initData(player)
            }
            else{
                this.UIPlayer2.initData(player)
            }
        }

        // 倒數
        this.showWaitTime()
    },

    initProtoSetting(){
        this.FruitManager.initProtoSetting()
    },

    showWaitTime(){
        this.UIWait.active = true

        GameG.PlaySound(this.sound_Countdown)

        let setValue = function(label, value){
            label.string = value
            label.node.scale = 1
            label.node.opacity = 255
        }

        let self = this
        setValue(this.Label_WaitTime, "3")
        let tween = GameG.NewTween(this.Label_WaitTime.node)
        tween.to(1, {scale: 0.5, opacity: 0})
        tween.call(function(){
            setValue(self.Label_WaitTime, "2")
        })
        tween.to(1, {scale: 0.5, opacity:0})
        tween.call(function(){
            setValue(self.Label_WaitTime, "1")
        })
        tween.to(1, {scale: 0.5, opacity:0})
        tween.call(function(){
            self.UIWait.active = false
            self.showStart()
        })
        tween.start()
    },

    showStart(){
        let self = this
        this.UIStart.active = true
        this.UIStart.scale = 0
        this.UIStart.opacity = 0
        let tween = GameG.NewTween(this.UIStart)
        tween.to(0.2, {scale: 1, opacity: 255})
        tween.delay(0.4)
        tween.to(0.2, {scale: 0.5, opacity: 0})
        tween.call(function(){
            self.gameStart()
            self.UIStart.active = false
        })
        tween.start()
    },

    gameStart(){
        this.Control.begin()
        this.FruitManager.begin()
        GameG.PlaySound(this.sound_GameStart) 
    },

    gameOver(callback){
        this.Control.end()
        GameG.PlaySound(this.sound_GameOver)

        // 不馬上結束，等待效果播完
        let self = this
        setTimeout(function () {
            self.FruitManager.end()

            self.hide();

            if (callback != null){
                callback()
            }
        }.bind(self), 1 * 1000);
    },

    hide(){
        this.node.active = false
    },

    isShow(){
        return this.node.active
    },

    /**  更新玩家資料 */
    updateRank(data){
        for (let i = 0; i < data.Players.length; ++i){
            let player = data.Players[i]
            if (player.UserID == GameConfig.getUserID()){
                this.UIPlayer1.updateData(player)
            }
            else{
                this.UIPlayer2.updateData(player)
            }
        }
    }
});
