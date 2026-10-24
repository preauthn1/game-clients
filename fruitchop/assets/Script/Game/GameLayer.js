var GameG = require("GameGlobal");
var GameConfig = require("GameConfig");
var GameData = require("GameData");
var Game_INFC = require("Game_INFC")
var SoundManager = require("SoundManager")

cc.Class({
    extends: cc.Component,

    properties: {
        UIMatch : require("UIMatch"),
        UIMatchSuccess : require("UIMatchSuccess"),
        UIGame : require("UIGame"),
        UIGameOver : require("UIGameOver"),
        UIGameOverWin : require("UIGameOverWin"),
        UIGameWin : require("UIGameWin"),
        UIGameLose : require("UIGameLose"),
        UIWaitGameOver : require("UIWaitGameOver"),
        UIHelp : require("UIHelp"),
        ClickSound: {
            default: null,
            type : cc.AudioClip,
        },        
    },

    init(GameStart){
        this.GameModel = GameStart.GameModel
        this.FruitManager = GameStart.FruitManager
        this.Control = GameStart.Control

        this.UIMatch.init(this)
        this.UIMatchSuccess.init(this)
        this.UIGame.init(this)
        this.UIGameOver.init(this)
        this.UIGameOverWin.init(this)
        this.UIWaitGameOver.init(this)
        this.UIGameWin.init(this)
        this.UIGameLose.init(this)
        this.UIHelp.init(this)

        let value = SoundManager.GetMusic()
        this.sound = cc.find("Canvas/Sound").getComponent(cc.Toggle)
        this.sound.isChecked = value        
    }, 

    show(){
        this.UIHelp.show()
    },

    /** 播放按鍵音效 */
    playClickSound(){
        GameG.PlaySound(this.ClickSound)
    },

    clickAuto(){
        GameData.setBot()
    },

    /** 初始化遊戲設定 */
    initGameData(){
        this.isShowDead = false
        
        this.UIMatch.hide()
        this.UIMatchSuccess.show()
    },

    /** 遊戲開始 */
    gameStart(){
        this.UIMatch.hide()
        this.UIMatchSuccess.hide()
        this.UIGame.show()
    },

    /** 玩家死掉 */
    playerDead(){
        if (this.isShowDead == true){
            return
        }
        this.isShowDead = true

        let self = this
        this.UIGame.gameOver(function(){
            self.UIGameOver.show()
        })
    },

    /** 遊戲結束 */
    gameEnd(){
        let data = GameData.getGameResult()
        this.updateRank(data.Rank)

        // 自己已經輸了 等待對方結束
        if (this.UIWaitGameOver.isShow() == true){
            this.UIWaitGameOver.hide()
            this.showGameResult()
        }

        // 自己沒死
        if (this.isShowDead == false){
            let self = this
            this.UIGame.gameOver(function(){
                self.UIGameOverWin.show()
            })
        }

        // 斷線重進遊戲直接收到結果
        if (this.isShowDead == null){
            this.showGameResult()
        }
    },  

    /** 遊戲勝負結果 */
    showGameResult(){
        let data = GameData.getGameResult()
        // 贏
        if (data.Winner.UserID == GameConfig.getUserID()) {
            this.UIGameWin.show()
        }
        // 輸
        else{
            this.UIGameLose.show()
        }
    },       

    /**  更新玩家資料 */
    updateRank(data){
        // 更新遊戲中資訊
        if (this.UIGame.isShow() == true){
            this.UIGame.updateRank(data)
        }

        // 更新等待遊戲結束資訊
        if (this.UIWaitGameOver.isShow() == true){
            this.UIWaitGameOver.updateRank(data)
        }

        // 自己死掉，對手分數比自己還低的情況壞進入此遊戲結束
        for (let i = 0; i < data.Players.length; ++i){
            let player = data.Players[i]
            if (player.UserID == GameConfig.getUserID()){
                // 掛了
                if (player.State == Game_INFC.PlayerState.INFC_State_Dead){
                    // 等待結果就不再顯示game over
                    if (this.UIWaitGameOver.isShow() == true){
                        
                    }
                    else{
                        this.playerDead()
                    }
                    return true
                }
            }
        }

        return false
    },

    /**  更新玩家資料 */
    updatePlayerData(data, UIPlayer1, UIPlayer2, hasInitData = false){
        for (let i = 0; i < data.Players.length; ++i){
            let player = data.Players[i]
            if (player.UserID == GameConfig.getUserID()){
                if (hasInitData == false){
                    UIPlayer1.initData(player)
                }
                UIPlayer1.updateData(player)
            }
            else{
                if (hasInitData == false){
                    UIPlayer2.initData(player)
                }
                UIPlayer2.updateData(player)
            }
        }
    },   
    

    /** 按下聲音按鈕 */
    clickSoundButton(){
        this.playClickSound()
        let value = SoundManager.GetMusic()
        SoundManager.SetMusic(!value)
        SoundManager.SetSound(!value)
    },    
});
