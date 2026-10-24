var G = require( "Global")
var UIManager = require("UIManager")
var GameData = null
var GameLayer = null
var GameScene = null

let networkQueue = require("NetworkQueue");
let GameProto = require("GameProto")
let BClass = require("BClass")
let Game = require("Game")
let GameRoom = require("GameRoom")

var groupName = G.GetGamePName()

var GameModel = {
	extends: cc.Component,

	Init(){	
		GameData = require("GameData")
		GameLayer = require("GameLayer")
		GameScene = require("GameScene")
        
        let self = this
        
		//用户进入桌子消息
		networkQueue.RegMsgHook(BClass.Game, Game.UserEnterID, function(receiveMsg){
            self.SendGameReady()
            GameData.SetUserData(receiveMsg.User)
            GameLayer.UpdateUserData()
        }, groupName);

        //用户状态改变
        networkQueue.RegMsgHook(BClass.Game, Game.UserStateChangeID, function(receiveMsg){
            GameData.SetUserStateChange(receiveMsg.User)
            GameLayer.UpdateUserData()
        }, groupName),

        //用户离开
        networkQueue.RegMsgHook(BClass.Game, Game.UserLeaveID, function(receiveMsg){

        }, groupName),

        //游戏结束
        networkQueue.RegMsgHook(BClass.Game, Game.GameEndID, function(receiveMsg){
            GameScene.GameEnd()
        }, groupName),
        // 發生錯誤
		networkQueue.RegMsgHook(BClass.Game, GameProto.MessageID.GEN_ErrorID, function(receiveMsg){
            UIManager.ShowMessage(receiveMsg.Message)

            if (receiveMsg.Source == GameProto.GameMessageID.GEN_BetID){
                // 錢不夠
                if (receiveMsg.Type == GameProto.ErrorType.GEN_ErrBet_MoneyNotEnough){
                    GameLayer.EnabledButton()
                }
                // 倍率不合規定
                else if(receiveMsg.Type == GameProto.ErrorType.GEN_ErrBet_IllegalOdds){
                    GameLayer.EnabledButton()
                }
            }
        } , groupName);
        //設定
        networkQueue.RegMsgHook(BClass.Game, GameProto.MessageID.GEN_GameSettingID, function(receiveMsg){
            GameData.SetSetting(receiveMsg)
            GameLayer.SetSetting(receiveMsg)
        } , groupName);
        // 轉數表
		networkQueue.RegMsgHook(BClass.Game, GameProto.MessageID.GEN_RoadMapID, function(receiveMsg){
            GameData.SetRoadMap(receiveMsg)
            GameLayer.SetCounterData()
        } , groupName);        
        // 遊戲狀態
        networkQueue.RegMsgHook(BClass.Game, GameProto.MessageID.GEN_GameStatusID, function(receiveMsg){
            GameData.SetNextGameState(receiveMsg)
            GameLayer.UpdateState()
        } , groupName);
        // 遊戲結果
		networkQueue.RegMsgHook(BClass.Game, GameProto.MessageID.GEN_GameResultID, function(receiveMsg){
            GameData.SetResultData(receiveMsg)
            GameLayer.SetGameResult(receiveMsg)

            // if (receiveMsg.WinMoney != null)
            //     console.error("****************** WinMoney", receiveMsg.WinMoney)
        } , groupName);
	},

	//////////////////////////////////////////////////////////////////////////////
    SendGameReady(){
        networkQueue.SendMsg(BClass.GameRoom, GameRoom.GameReadyID, null)
    },
    // 查詢機台分佈資訊
    SendReadTableInfo(){
        networkQueue.SendMsg(BClass.GameRoom, GameRoom.ROOM_Read_TableInfoID, null)
	},
    // 下注
	SendStartSpin(Odds){
        let param = {}
        param.Odds = Odds
        networkQueue.SendMsg(BClass.Game, GameProto.MessageID.GEN_BetID, param)
    },

    // 查詢遊戲設定
	SendReadGameSetting(){			
        networkQueue.SendMsg(BClass.Game, GameProto.MessageID.GEN_Read_GameSettingID, null)
    },
    
    // 查詢轉數表
	SendReadRoadMap(){		
        networkQueue.SendMsg(BClass.Game, GameProto.MessageID.GEN_Read_RoadMapID, null)
    },
    // 查詢遊戲狀態
	SendReadGameStatus(){			
        networkQueue.SendMsg(BClass.Game, GameProto.MessageID.GEN_Read_GameStatusID, null)
    },
};

module.exports = GameModel