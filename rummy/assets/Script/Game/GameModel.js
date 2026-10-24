var GameG = require( "GameGlobal")
let networkQueue = require("NetworkQueue");
var Game_INRM = require("Game_INRM")
let BClass = require("BClass")
var GameRoom = require("GameRoom")
var GameConfig = require("GameConfig")
var GameData = require("GameData")
var GameService = require("GameService");
var UIManager = require("UIManager");

cc.Class({
    extends: cc.Component,

    init (GameStart) {
        this.GameLayer = GameStart.GameLayer

        this.isFirstTime = true
        this.isGameOver = false
        this.isWaitGameOver = false

        let pojectName = GameG.GetGameName()
        let self = this

        /** 用户入桌消息 */
        GameService.RegUserEnterMsg(function(data){
            // 自己
            if (data.User.UserID == GameConfig.getUserID()) {
                GameData.setUserData(data.User)
            }

            console.error("UserEnter", data.User.UserID)
            self.GameLayer.UIGame.updatePlayerData(data.User)
        })

        /** 用户离开消息 */
        GameService.RegUserLeaveMsg(function(data){
            console.error("UserLeave", data.User.UserID)
            self.GameLayer.UIGame.removePlayerData(data.User)
        })

        let showStateLog = function(data){
            if (data.User.StateValue == 0){
                console.error("StateChange", data.User.UserID, "Game")
            }
            if (data.User.StateValue == 1){
                console.error("StateChange", data.User.UserID, "Queue")
            }
            if (data.User.StateValue == 2){
                console.error("StateChange", data.User.UserID, "Sit")
            }
            if (data.User.StateValue == 3){
                console.error("StateChange", data.User.UserID, "Ready")
            }
            if (data.User.StateValue == 4){
                console.error("StateChange", data.User.UserID, "Game")
            }
        }

        /** 用户状态改变消息 */
        GameService.RegUserStateChangeMsg(function(data){
            showStateLog(data)
            if (data.User.UserID == GameConfig.getUserID()) {
                GameData.setUserData(data.User)

                //StateValue 0:Free 1:Queue 2:Sit 3:Ready 4:Game

                if (self.isFirstTime == true){
                    self.isFirstTime = false

                    self.GameLayer.show()

                    // 進行遊戲中斷線
                    if (data.User.StateValue == 4){

                    }
                    else{

                    }
                }
            }

            self.GameLayer.UIGame.updatePlayerData(data.User)

        } , pojectName)

        // 遊戲設定 (內容為 INRM_GameSetting)
		networkQueue.RegMsgHook(BClass.Game, Game_INRM.MessageID.INRM_GameSettingID,function(data){
            GameData.setGameSetting(data)
            self.GameLayer.initGameData()
        }, pojectName)

        // 遊戲狀態 (狀態，第幾輪，當前玩家) (內容為 INRM_GameState) (廣播)
        networkQueue.RegMsgHook(BClass.Game, Game_INRM.MessageID.INRM_GameStateID,function(data){
            GameData.setGameStateData(data)
            self.GameLayer.UIGame.updateGameState(data)
        }, pojectName)

        // 遊戲結果 (內容為 INRM_GameResult) (廣播)
        networkQueue.RegMsgHook(BClass.Game, Game_INRM.MessageID.INRM_GameResultID,function(data){
            self.GameLayer.UIGame.gameOver()
            self.GameLayer.UIGameResult.show(data)
        }, pojectName)

        // 玩家手牌 (內容為 INRM_PlayerCards) (開始時發送一次)
        networkQueue.RegMsgHook(BClass.Game, Game_INRM.MessageID.INRM_PlayerCardID,function(data){
            console.error("************************************ INRM_PlayerCardID")
            self.GameLayer.UIGame.dealCard(data.Decks)
        }, pojectName)

        // 當蓋牌區牌被抽完，會將開牌區重新洗過去 (內容為 Poker_Hand) (廣播)
        networkQueue.AddMsgModelName(BClass.Game, Game_INRM.MessageID.INRM_DeckResetID, function(data){
            self.GameLayer.UIGame.deckReset(data)
        }, pojectName)


        // 玩家動作倒數開始 (廣播) (內容為 INRM_Player)(僅 ID, ActionCD)
        networkQueue.RegMsgHook(BClass.Game, Game_INRM.MessageID.INRM_PlayerActionCountDownID, function(data){
            self.GameLayer.UIGame.playerActionCountDown(data)
        }, pojectName)

        // 玩家動作倒數取消 (廣播) (內容為 INRM_Player)(僅 ID)
        networkQueue.RegMsgHook(BClass.Game, Game_INRM.MessageID.INRM_PlayerActionCountDownCancelID, function(data){
            self.GameLayer.UIGame.playerActionCountDownCancel(data)
        }, pojectName)

        // 玩家最終更新倒數開始 (廣播) (內容為 INRM_TimeCD)
        networkQueue.RegMsgHook(BClass.Game, Game_INRM.MessageID.INRM_WaitFinalRefreshCountDownID, function(data){
            self.GameLayer.UIGame.waitFinalRefreshCountDown(data)
        }, pojectName)


        // 遊戲倒數開始 (廣播)
        networkQueue.RegMsgHook(BClass.Game, Game_INRM.MessageID.INRM_GameStartCountDownID,function(data){
            console.error("遊戲倒數開始", data)
            GameService.ReadyGame()
            self.GameLayer.UIGame.gameStartCountDown()
            self.GameLayer.UIGameResult.gameStartCountDown()
        }, pojectName)
        
        // 遊戲倒數取消 (廣播)
        networkQueue.RegMsgHook(BClass.Game, Game_INRM.MessageIDINRM_GameStartCountDownCancelID,function(data){
            console.error("遊戲倒數取消", data)
            self.GameLayer.UIGame.gameStartCountDownCancel()
        }, pojectName)


        // 玩家更新手牌組合[回覆] (內容為 INRM_ActionRet)
        networkQueue.RegMsgHook(BClass.Game, Game_INRM.MessageID.INRM_RefreshHandRetID,function(data){
            console.error("玩家更新手牌組合[回覆]", data)
            self.GameLayer.UIGame.refreshHandRet(data)
        }, pojectName)

        // 玩家抽取亮牌區[回覆] (內容為 INRM_PopCardRet)
        networkQueue.RegMsgHook(BClass.Game, Game_INRM.MessageID.INRM_PopOpenDeckRetID,function(data){
            console.error("玩家抽取亮牌區[回覆]", data)
            self.GameLayer.UIGame.popOpenDeckRet(data)
        }, pojectName)

        // 玩家抽取蓋牌區[回覆] (內容為 INRM_PopCardRet)
        networkQueue.RegMsgHook(BClass.Game, Game_INRM.MessageID.INRM_PopCloseDeckRetID,function(data){
            console.error("玩家抽取蓋牌區[回覆]", data)
            self.GameLayer.UIGame.popCloseDeckRet(data)
        }, pojectName)

        // 玩家棄牌[回覆] (內容為 INRM_ActionRet)
        networkQueue.RegMsgHook(BClass.Game, Game_INRM.MessageID.INRM_GiveupRetID,function(data){
            console.error("玩家棄牌[回覆]", data)
            self.GameLayer.UIGame.giveupRet(data)
        }, pojectName)

        // 玩家丟牌[回覆] (內容為 INRM_ActionRet)
        networkQueue.RegMsgHook(BClass.Game, Game_INRM.MessageID.INRM_ThrowCardRetID,function(data){
            console.error("玩家丟牌[回覆]", data)
            self.GameLayer.UIGame.throwCardRet(data)
        }, pojectName)

        // 玩家宣告勝利[回覆] (內容為 INRM_ActionRet)
        networkQueue.RegMsgHook(BClass.Game, Game_INRM.MessageID.INRM_DeclareRetID,function(data){
            console.error("玩家宣告勝利[回覆]", data)
            self.GameLayer.UIGame.declareRet(data)
        }, pojectName)

        // 玩家Miss[回覆] (內容為 INRM_ActionRet)
        networkQueue.RegMsgHook(BClass.Game, Game_INRM.MessageID.INRM_MissRetID,function(data){
            console.error("玩家Miss[回覆]", data)
            self.GameLayer.UIGame.missRet(data)
        }, pojectName)
        

        // [事件發生] 玩家更新手牌組合 (內容為 INRM_Player)(僅 ID)
        networkQueue.RegMsgHook(BClass.Game, Game_INRM.MessageID.INRM_RefreshHandHappenedID,function(data){
            console.error("玩家更新手牌組合", data)
            self.GameLayer.UIGame.refreshHand(data)
        }, pojectName)

        // [事件發生] 玩家抽取亮牌區 (內容為 INRM_Player)(僅 ID)
        networkQueue.RegMsgHook(BClass.Game, Game_INRM.MessageID.INRM_PopOpenDeckHappenedID,function(data){
            console.error("玩家抽取亮牌區", data)
            self.GameLayer.UIGame.popOpenDeck(data)
        }, pojectName)

        // [事件發生] 玩家抽取蓋牌區 (內容為 INRM_Player)(僅 ID)
        networkQueue.RegMsgHook(BClass.Game, Game_INRM.MessageID.INRM_PopCloseDeckHappenedID,function(data){
            console.error("玩家抽取蓋牌區", data)
            self.GameLayer.UIGame.popCloseDeck(data)
        }, pojectName)

        // [事件發生] 玩家棄牌 (內容為 INRM_Player)(僅 ID)
        networkQueue.RegMsgHook(BClass.Game, Game_INRM.MessageID.INRM_GiveupHappenedID,function(data){
            console.error("玩家棄牌", data)
            self.GameLayer.UIGame.giveup(data)
        }, pojectName)

        // [事件發生] 玩家丟牌 (內容為 INRM_ThrowCard)(多 PlayerID)
        networkQueue.RegMsgHook(BClass.Game, Game_INRM.MessageID.INRM_ThrowCardHappenedID,function(data){
            console.error("玩家丟牌", data)
            self.GameLayer.UIGame.throwCard(data)
        }, pojectName)

        // [事件發生] 玩家宣告勝利 (內容為 INRM_Declare)(多 PlayerID)
        networkQueue.RegMsgHook(BClass.Game, Game_INRM.MessageID.INRM_DeclareHappenedID,function(data){
            console.error("玩家宣告勝利", data)
            self.GameLayer.UIGame.declare(data)
        }, pojectName)

        // [事件發生] 玩家詐糊 (廣播) (內容為 INRM_Player)(僅 ID)
        networkQueue.RegMsgHook(BClass.Game, Game_INRM.MessageID.INRM_BluffHappenedID,function(data){
            console.error("玩家詐糊", data)
            self.GameLayer.UIGame.bluff(data)
        }, pojectName)

        // [事件發生] 玩家Miss (內容為 INRM_Player)(僅 ID)
        networkQueue.RegMsgHook(BClass.Game, Game_INRM.MessageID.INRM_MissHappenedID,function(data){
            console.error("玩家Miss", data)
            self.GameLayer.UIGame.miss(data)
        }, pojectName)            

    },

    // 发送准备消息
    readyGame(){
        networkQueue.SendMsg(BClass.GameRoom, GameRoom.UserQueueID, null)
    },

    // 玩家更新手牌組合 (內容為 INRM_RefreshHand)
    refreshHand(data){
        console.error("玩家更新手牌組合", data)
        networkQueue.SendMsg(BClass.Game, Game_INRM.MessageID.INRM_RefreshHandID, data)    
    },

    // 玩家抽取亮牌區 (完成後廣播其他玩家)
    openDeck(){
        console.error("玩家抽取亮牌區")
        networkQueue.SendMsg(BClass.Game, Game_INRM.MessageID.INRM_PopOpenDeckID, null)
    },

    // 玩家抽取蓋牌區 (完成後廣播其他玩家)
    closeDeckID(){
        console.error("玩家抽取蓋牌區")
        networkQueue.SendMsg(BClass.Game, Game_INRM.MessageID.INRM_PopCloseDeckID, null)
    },

    // 玩家棄牌 (完成後廣播其他玩家)
    giveup(){
        console.error("玩家棄牌")
        networkQueue.SendMsg(BClass.Game, Game_INRM.MessageID.INRM_GiveupID, null)
    },

    // 玩家丟牌 (內容為 INRM_ThrowCard) (完成後廣播其他玩家)
    throwCard(data){
        console.error("玩家丟牌", data)
        if (data == null){
            console.error("!!!!!!!!!!! 玩家丟牌錯誤，無資料")
            return
        }        
        networkQueue.SendMsg(BClass.Game, Game_INRM.MessageID.INRM_ThrowCardID, data)
    },

    // 玩家宣告勝利 (內容為 INRM_Declare) (完成後廣播其他玩家)
    declare(data){
        console.error("玩家宣告勝利")
        if (data == null){
            console.error("!!!!!!!!!!! 玩家宣告勝利錯誤，無資料")
            return
        }        
        networkQueue.SendMsg(BClass.Game, Game_INRM.MessageID.INRM_DeclareID, data)
    },

    // 玩家Miss (完成後廣播其他玩家)
    miss(){
        console.error("玩家Miss")
        networkQueue.SendMsg(BClass.Game, Game_INRM.MessageID.INRM_MissID, null)
    },
});
