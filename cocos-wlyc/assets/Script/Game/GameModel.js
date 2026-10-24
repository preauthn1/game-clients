var HallG = require( "Global")
var GameG = require( "GameGlobal")
var gameLayer = null
var gameData = null
let networkQueue = require("NetworkQueue");
let BClass = require("BClass")
let Game = require("Game")
let Game_WLYC = require("Game_WLYC");

var groupName = HallG.GetGamePName()

/** 用途: 接收和傳送封包 */
var GameModel = {
	extends: cc.Component,
	/** 初始化 */
	Init(){	
		gameLayer = require("GameLayer")
		gameData = require("GameData")
		groupName = GameG.GetGameName()

		// 用戶進入桌子消息
		networkQueue.RegMsgHook(BClass.Game, Game.UserEnterID, function(receiveMsg){
			gameData.SetUserData(receiveMsg.User)
			gameLayer.SetUserData(receiveMsg.User)
		} , groupName)
		// 遊戲設定
		networkQueue.RegMsgHook(BClass.Game, Game_WLYC.WLZB_SettingID, function(receiveMsg){
			gameData.SetSetting(receiveMsg)
			gameLayer.SetSetting(receiveMsg)
		} , groupName);
		// 下注結果
		networkQueue.RegMsgHook(BClass.Game, Game_WLYC.WLZB_BetStatusID, function(receiveMsg){	
			gameLayer.SetBetRet(receiveMsg)	
			if(receiveMsg.Ret == 0 ){
			
			} 
			else if(receiveMsg.Ret == -1){
				gameLayer.ShowMessage("金币不足")
			} 
			else if(receiveMsg.Ret == -2){
				gameLayer.ShowMessage("下注类型错误")
			} 
			else if(receiveMsg.Ret == -3){
				gameLayer.ShowMessage("庄家不能下注")
			} 
			else if(receiveMsg.Ret == -4){
				gameLayer.ShowMessage("总注数超过上限")
			} 
			else if(receiveMsg.Ret == -5){
				gameLayer.ShowMessage("非下注階段")
			} 
			else if(receiveMsg.Ret == -6){
				let MinCarryMoney = GameG.GetLocalizedString("前往充值后再来")
				gameLayer.ShowMessage(MinCarryMoney.replace("####", GameG.FormatNum(gameData.MinCarryMoney)))
			}
			else if(receiveMsg.Ret == -7) {
				gameLayer.ShowMessage("非正常下注额")
			}
		} , groupName);
		// 遊戲結果
		networkQueue.RegMsgHook(BClass.Game, Game_WLYC.WLZB_GameResultID, function(receiveMsg){
			gameData.SetGameResult(receiveMsg)
			gameLayer.SetGameResult(receiveMsg)
		} , groupName);
		// 遊戲狀態
		networkQueue.RegMsgHook(BClass.Game, Game_WLYC.WLZB_StatusID, function(receiveMsg){	
			gameData.SetState(receiveMsg.State)	
			gameLayer.SetState(receiveMsg.State)
		} , groupName);
		// 免費遊戲資料(UIFreeSpin)
		networkQueue.RegMsgHook(BClass.Game, Game_WLYC.WLZB_LeftFreeGameID, function(receiveMsg){
			gameData.SetLeftFreeGame(receiveMsg)
			gameLayer.SetLeftFreeGame(receiveMsg)
		} , groupName);
		// 獎勵遊戲資料(UIBonusGame)
		networkQueue.RegMsgHook(BClass.Game, Game_WLYC.WLZB_BonusGameID, function(receiveMsg){
			gameData.SetBonusGame(receiveMsg)
			gameLayer.SetUserRecover()
		} , groupName);
		// 獎金池資料(UIJackpotPool)
		networkQueue.RegMsgHook(BClass.Game, Game_WLYC.WLZB_JackpotPoolID, function(receiveMsg){		
			gameLayer.SetJackpotPool(receiveMsg.Money)
		} , groupName);
		// 歷史紀錄資料(UIHistory)
		networkQueue.RegMsgHook(BClass.Game, Game_WLYC.WLZB_LoadHistoryRetID, function(receiveMsg){	
			gameLayer.SetHistoryFindData(receiveMsg)
		} , groupName);
		// 選擇遊戲(UISelectMode)
		networkQueue.RegMsgHook(BClass.Game, Game_WLYC.WLZB_GameOptionsID, function(receiveMsg){
			gameData.SetGameOptions(receiveMsg)
		} , groupName);
	},
	/** 開始下注 */
	SendGameStart(BetMoney){
		let param = {}
		param.Money = BetMoney
			
		networkQueue.SendMsg(BClass.Game, Game_WLYC.WLZB_ActionSpinID, param)
	},
	/** 查詢歷史紀錄(UIHistory) */
	SendFindHistory(StartTime,EndTime,PageIndex,PageSize){
		let param = {}
		param.UserID = gameData.User.UserID
		param.StartTime = StartTime
		param.EndTime = EndTime
		param.PageIndex = PageIndex
		param.PageSize = PageSize
			
		networkQueue.SendMsg(BClass.Game, Game_WLYC.WLZB_LoadHistoryID, param)
	},
	/** 選擇遊戲-選擇模式(UISelectMode) */
	SendChooseGame(ModeID){
		let data = {}
		data.ID = ModeID
	    networkQueue.SendMsg(BClass.Game, Game_WLYC.WLZB_ChooseGameID, data)
	},
};

module.exports = GameModel
