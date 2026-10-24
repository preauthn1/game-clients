var GameG = require("GameGlobal");
var GameConfig = require("GameConfig");
var GameData = require("GameData");

cc.Class({
    extends: cc.Component,

    properties: {
        UIGameStart : require("UIGameStart"),
        UIMatch : require("UIMatch"),
        UIGame : require("UIGame"),
        UIGameOver : require("UIGameOver"),
        UIGameWin : require("UIGameWin"),
        UIGameLose : require("UIGameLose"),
        UIHelp : require("UIHelp"),
        ClickSound: {
            default: null,
            type : cc.AudioClip,
        },        
    },

    init(GameStart){
        this.GameModel = GameStart.GameModel

        this.UIGameStart.init(this)
        this.UIMatch.init(this)
        this.UIGame.init(this)
        this.UIGameOver.init(this)
        this.UIGameWin.init(this)
        this.UIGameLose.init(this)
        this.UIHelp.init(this)
    }, 

    show(){
        this.UIGameStart.show()
        // this.UIGame.show()
    },

    playClickSound(){
        GameG.PlaySound(this.ClickSound)
    },

    /** 初始化遊戲設定 */
    initGameData(){
        this.isShowDead = false
        
        this.UIMatch.hide()
        this.UIGame.show()
    },

    /** 遊戲開始 */
    gameStart(){
        this.UIGame.gameStart()
    },

    /** 遊戲結束 */
    gameEnd(){
        let data = GameData.getGameResult()
        this.updateRank(data.Rank)

        // let self = this
        // this.UIGame.gameOver(function(){
        //     self.showGameResult()
        // })
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
    },

    /**  更新玩家資料 */
    updatePlayerData(data, UIPlayer1, UIPlayer2){
        for (let i = 0; i < data.Players.length; ++i){
            let player = data.Players[i]
            if (player.UserID == GameConfig.getUserID()){
                UIPlayer1.initData(player)
                UIPlayer1.updateData(player)
            }
            else{
                UIPlayer2.initData(player)
                UIPlayer2.updateData(player)
            }
        }
    },    
});
