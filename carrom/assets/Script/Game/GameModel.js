var GameG = require( "GameGlobal")
let networkQueue = require("NetworkQueue");
var Game_INFC = require("Game_INFC")
let BClass = require("BClass")
let Game = require("Game")
var GameRoom = require("GameRoom")
var GameConfig = require("GameConfig")
var GameData = require("GameData")

cc.Class({
    extends: cc.Component,

    init (GameStart) {
        this.GameLayer = GameStart.GameLayer

        this.isFirstTime = true
        this.isGameOver = false
        this.isWaitGameOver = false

        let pojectName = GameG.GetGameName()
        let self = this

        networkQueue.RegMsgHook(BClass.Game, Game.UserStateChangeID, function(data){
            if (data.User.UserID == GameConfig.getUserID()) {
                GameData.setUserData(data)

                //StateValue 0:Free 1:Queue 2:Sit 3:Ready 4:Game

                if (self.isFirstTime == true){
                    self.isFirstTime = false
                    // 還沒進行遊戲
                    if (data.User.StateValue == 0) {
                        self.GameLayer.show()
                    }
                    // 進行遊戲中斷線
                    // 必須在收到INFC_GameRank資訊後顯示UIWaitGameOver
                    // 也有可能不會收到INFC_GameRank資訊，直接收到INFC_GameResult
                    else if (data.User.StateValue == 4){
                        self.isWaitGameOver = true
                    }
                }
            }
        } , pojectName)

        // 遊戲設定 (內容為 INFC_GameSetting)
		networkQueue.RegMsgHook(BClass.Game, Game_INFC.INFC_GameSettingID,function(data){ 
            GameData.setGameSetting(data)
            self.GameLayer.initGameData()
        }, pojectName)

        // 下注階段(Server主動扣錢)
        networkQueue.RegMsgHook(BClass.Game, Game_INFC.INFC_BetStepID,function(data){ 

        }, pojectName)

	    // 遊戲開始 (可以開始切)
        networkQueue.RegMsgHook(BClass.Game, Game_INFC.INFC_GameStartID,function(data){ 
            GameData.initGameData()
            self.isGameOver = false
            self.isWaitGameOver = false
            self.GameLayer.gameStart()
        }, pojectName)

    	// 排行榜 (內容為 INFC_GameRank)
        networkQueue.RegMsgHook(BClass.Game, Game_INFC.INFC_GameRankID,function(data){ 
            GameData.setRank(data)
            // 斷線重進遊戲，持續更新分數中 遊戲尚未結束
            if (self.isWaitGameOver == true){
                self.isWaitGameOver = false
                self.GameLayer.UIWaitGameOver.show()
            }

            if (self.GameLayer.updateRank(data) == true){
                self.isGameOver = true
            }
        }, pojectName)

        // 遊戲結果 (內容為 INFC_GameResult)
        networkQueue.RegMsgHook(BClass.Game, Game_INFC.INFC_GameResultID,function(data){ 
            GameData.setRank(data.Rank)
            GameData.setGameResult(data)
            self.GameLayer.gameEnd()
            self.isGameOver = true         
        }, pojectName)
    },

    // 发送准备消息
    readyGame(){
        networkQueue.SendMsg(BClass.GameRoom, GameRoom.UserQueueID, null)
    },
});
