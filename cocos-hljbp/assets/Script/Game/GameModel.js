var G = require( "Global")
var GameG = require( "GameGlobal")
var GameLayer = require("GameLayer")
var GameServer = require("GameServer")
let networkQueue = require("NetworkQueue");
var Game_HLJBP = require("Game_HLJBP")
let BClass = require("BClass")
// 接收消息table
var pojectName
var fakeServer = false

var GameModel = {
	extends: cc.Component,

	Start (){
		pojectName = GameG.GetGameName()
		if(fakeServer ){
			GameServer.Start()
		} 
		else{
			this.RegMsg()
		}
	},

//10004 C2S 玩家下注
	HLJBP_Bet(data){
		if(fakeServer ){
			GameServer.Receive(Game_HLJBP.HLJBP_Bet,data)
		} 
		else{
			networkQueue.SendMsg(BClass.Game, Game_HLJBP.HLJBP_Bet,data)
		}
	},

//動畫播放完成
	HLJBP_UserActionCommitID(data){
		if(fakeServer ){
			GameServer.Receive(Game_HLJBP.HLJBP_UserActionCommitID,data)
		} 
		else{
			networkQueue.SendMsg(BClass.Game, Game_HLJBP.HLJBP_UserActionCommitID, data)
		}
	},

	RegMsg(){
		networkQueue.RegMsgHook(BClass.Game, Game_HLJBP.HLJBP_GameInfo,function(data){ GameLayer.HLJBP_GameInfo(data) }, pojectName)	
		networkQueue.RegMsgHook(BClass.Game, Game_HLJBP.HLJBP_AllUserInfo,function(data){ GameLayer.HLJBP_AllUserInfo(data) }, pojectName)	
		networkQueue.RegMsgHook(BClass.Game, Game_HLJBP.HLJBP_UserBettingStart,function(data){ GameLayer.HLJBP_UserBettingStart(data) }, pojectName)	
		networkQueue.RegMsgHook(BClass.Game, Game_HLJBP.HLJBP_BetResult,function(data){ GameLayer.HLJBP_BetResult(data) }, pojectName)	
		networkQueue.RegMsgHook(BClass.Game, Game_HLJBP.HLJBP_Settlement,function(data){ GameLayer.HLJBP_Settlement(data) }, pojectName)	
		networkQueue.RegMsgHook(BClass.Game, Game_HLJBP.HLJBP_KickTip,function(data){ GameLayer.HLJBP_KickTip(data) }, pojectName)	
		
	// 注册游戏场景初始化方法,只有在断线重连时有意义
	 //   G.Service.Game.RegNotifyGameSceneInit( function() GameSceneDestory() end )
	},

	HLJBP_GameInfo(data){
		GameG.Print("HLJBP_GameInfo",data)
		GameLayer.HLJBP_GameInfo(data)
	},

	HLJBP_AllUserInfo(data){
		GameG.Print("HLJBP_AllUserInfo",data)
		GameLayer.HLJBP_AllUserInfo(data)
	},

	HLJBP_UserBettingStart(data){
		GameG.Print("HLJBP_UserBettingStart",data)
		GameLayer.HLJBP_UserBettingStart(data)
	},

	HLJBP_BetResult(data){
		GameG.Print("HLJBP_BetResult",data)
		GameLayer.HLJBP_BetResult(data)
	},

	HLJBP_Settlement(data){
		GameG.Print("HLJBP_Settlement",data)
		GameLayer.HLJBP_Settlement(data)
	},


};

module.exports = GameModel
