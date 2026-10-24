var HallG = require( "Global")
var GameG = require("GameGlobal")
var gameLayer = null
var gameData = null
let networkQueue = require("NetworkQueue");
let Game_JJBX = require("Game_JJBX")
let GameRoom = require("GameRoom")
let BClass = require("BClass")

// 接收消息table
var groupName = HallG.GetGamePName()

/** 用途: 接收和傳送封包 */
var GameModel = {
	extends: cc.Component,

	Init(){	
		let self = this
		gameLayer = require("GameLayer")
		gameData = require("GameData")
		groupName = GameG.GetGameName()
	// 用戶進入桌子消息
		networkQueue.RegMsgHook(BClass.Game, Game_JJBX.JJBX_UserEnterID, function(receiveMsg){
			self.SendGameReady()
			gameData.SetUserData(receiveMsg.User)
			gameLayer.SetUserData(receiveMsg.User)
		} , groupName);
	
	//用戶狀態改變
		networkQueue.RegMsgHook(BClass.Game, Game_JJBX.JJBX_UserStateChangeID, function(receiveMsg){
			
		} , groupName);
	//用戶離開
		networkQueue.RegMsgHook(BClass.Game, Game_JJBX.JJBX_UserLeaveID, function(receiveMsg){
		
		} , groupName);
	//遊戲開始
		networkQueue.RegMsgHook(BClass.Game, Game_JJBX.JJBX_GameStartID, function(receiveMsg){
		
		} , groupName);
	//遊戲結束
		networkQueue.RegMsgHook(BClass.Game, Game_JJBX.JJBX_GameEndID, function(receiveMsg){
			gameLayer.GameEnd()
		} , groupName);
		
		networkQueue.RegMsgHook(BClass.Game, Game_JJBX.JJBX_SettingID, function(receiveMsg){
			gameData.SetSetting(receiveMsg)
			gameLayer.SetSetting(receiveMsg)	
		} , groupName);
	// 
		networkQueue.RegMsgHook(BClass.Game, Game_JJBX.JJBX_GameReelSettingID, function(receiveMsg){
			gameData.SetGameReelSetting(receiveMsg)
			gameLayer.SetGameReelSetting(receiveMsg)
		} , groupName);
		networkQueue.RegMsgHook(BClass.Game, Game_JJBX.JJBX_StatusID, function(receiveMsg){
			gameData.SetState(receiveMsg.State)	
			gameLayer.SetState(receiveMsg.State)
		} , groupName);
		networkQueue.RegMsgHook(BClass.Game, Game_JJBX.JJBX_BetStatusID, function(receiveMsg){
			gameLayer.SetBetRet(receiveMsg)	
			if(receiveMsg.Ret == 0 ){
			
			} 
			else if( receiveMsg.Ret == -1 ){

				gameLayer.ShowMessage("金币不足")
			} 
			else if( receiveMsg.Ret == -2 ){

				gameLayer.ShowMessage("下注类型错误")
			} 
			else if( receiveMsg.Ret == -3 ){

				gameLayer.ShowMessage("庄家不能下注")
			} 
			else if( receiveMsg.Ret == -4 ){

				gameLayer.ShowMessage("总注数超过上限")
			} 
			else if( receiveMsg.Ret == -5 ){

				gameLayer.ShowMessage("非下注階段")
			} 
			else if( receiveMsg.Ret == -6 ){

				let MinCarryMoney = GameG.FormatNum(gameData.MinCarryMoney)
				gameLayer.ShowMessage("携带金币少于" + MinCarryMoney + "无法下注喔!您可以前往充值后再来")
			}
		} , groupName);
		networkQueue.RegMsgHook(BClass.Game, Game_JJBX.JJBX_GameResultID, function(receiveMsg){
			gameLayer.SetGameResult(receiveMsg)
		} , groupName);
		networkQueue.RegMsgHook(BClass.Game, Game_JJBX.JJBX_JackpotPoolRetID, function(receiveMsg){
			gameData.SetJackpotPool(receiveMsg)
			gameLayer.SetJackpotPool(receiveMsg)	
		} , groupName);
		networkQueue.RegMsgHook(BClass.Game, Game_JJBX.JJBX_LoadHistoryRetID, function(receiveMsg){
			gameLayer.SetHistoryFindData(receiveMsg)
		} , groupName);
		networkQueue.RegMsgHook(BClass.Game, Game_JJBX.JJBX_LeftFreeGameID, function(receiveMsg){
			gameData.SetLeftFreeGameData(receiveMsg)
			gameLayer.SetLeftFreeGameData(receiveMsg)
		} , groupName);
	// networkQueue.RegMsgHook(BClass.Game, Game_JJBX.Slot_ActionPickRetID, function(receiveMsg)
		// gameLayer.SetActionPickRet(receiveMsg)
	// end , groupName);
		networkQueue.RegMsgHook(BClass.Game, Game_JJBX.JJBX_LightningPrepareID, function(receiveMsg){
			gameData.SetLightningPrepare(receiveMsg)
			gameLayer.SetLightningPrepare(receiveMsg)
		} , groupName);
		networkQueue.RegMsgHook(BClass.Game, Game_JJBX.JJBX_LightningResultID, function(receiveMsg){
			gameLayer.SetLightningResult(receiveMsg)
		} , groupName);
		networkQueue.RegMsgHook(BClass.Game, Game_JJBX.JJBX_SelectGameOptionsID, function(receiveMsg){
			gameData.SetSelectGameOptionsData(receiveMsg)
		} , groupName);
		networkQueue.RegMsgHook(BClass.Game, Game_JJBX.JJBX_BonusGameID, function(receiveMsg){
			gameData.SetBonusGame(receiveMsg)
			gameLayer.SetBonusGame(receiveMsg)
		} , groupName);
		networkQueue.RegMsgHook(BClass.Game, Game_JJBX.JJBX_PickBonusRetID, function(receiveMsg){
			gameLayer.SetPickBonusRet(receiveMsg)
		} , groupName);
	},

//=== 發送幀數據 ===
	SendGameReady(){
		networkQueue.SendMsg(BClass.GameRoom, GameRoom.GameReadyID, null)
	},

	SendGameStart(betMoney, betRate){
		let param = []
		param.Money = betMoney
		param.Rate = betRate
			
	    networkQueue.SendMsg(BClass.Game, Game_JJBX.JJBX_ActionSpinID, param)
	},

	SendFindHistory(StartTime,EndTime,PageIndex,PageSize){
		let param = []
		param.UserID = gameData.User.UserID
		param.StartTime = StartTime
		param.EndTime = EndTime
		param.PageIndex = PageIndex
		param.PageSize = PageSize
			
	   networkQueue.SendMsg(BClass.Game, Game_JJBX.JJBX_LoadHistoryID, param)
	},

	SendJackpotPool(){
		let param = []	
	   networkQueue.SendMsg(BClass.Game, Game_JJBX.JJBX_JackpotPoolID, null)
	},

	SendPickBonusID(param){
	   networkQueue.SendMsg(BClass.Game, Game_JJBX.JJBX_PickBonusID, param)
	},

	SendChooseGameOptions(param){
	   networkQueue.SendMsg(BClass.Game, Game_JJBX.JJBX_ActionChooseGameID, param)
	},

	SendLightningGameStart(){
		let param = []
		param.LightningStep = gameData.LightningPrepare.LightningStep
	   networkQueue.SendMsg(BClass.Game, Game_JJBX.JJBX_ActionLightningSpinID, param)
	},


};

module.exports = GameModel
