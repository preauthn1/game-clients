var GameG = require( "GameGlobal")
var GameManager = require("GameManager")
var GameLayer = require("GameLayer")
var GameServer = require("GameServer")
var NetworkQueue=require("NetworkQueue");
var BClass=require("BClass");
var Game_JLBPK=require("Game_JLBPK");
var pojectName = null
var Game = require("Game")

// 假伺服器
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

	//10005 C2S 開始下注動畫播放完成
	StartBettingAnimationOK(data){
		if(fakeServer == false){
			NetworkQueue.SendMsg(BClass.Game, Game_JLBPK.StartBettingAnimationOK,data)
		} 
		else{
			GameServer.Receive(Game_JLBPK.StartBettingAnimationOK,data)
		}
	},

	//10007  C2S 玩家下注
	Bet(data){
		if(fakeServer == false){
			NetworkQueue.SendMsg(BClass.Game, Game_JLBPK.Bet,data)
		} 
		else{
			GameServer.Receive(Game_JLBPK.Bet,data)
		}
	},

	//10010 C2S 玩家停止下注動畫播放完成
	StopBettingAnimationOK(data){
		if(fakeServer == false){
			NetworkQueue.SendMsg(BClass.Game, Game_JLBPK.StopBettingAnimationOK,data)
		} 
		else{
			GameServer.Receive(Game_JLBPK.StopBettingAnimationOK,data)
		}
	},

	// 10012 C2S 發牌動畫播放完成
	DealOk(data){
		if(fakeServer == false){
			NetworkQueue.SendMsg(BClass.Game, Game_JLBPK.DealOk,data)
		} 
		else{
			GameServer.Receive(Game_JLBPK.DealOk,data)
		}
	},

	//10014 C2S 玩家加注
	DoubleBet(data){
		if(fakeServer == false){
			NetworkQueue.SendMsg(BClass.Game, Game_JLBPK.DoubleBet,data)
		} 
		else{
			GameServer.Receive(Game_JLBPK.DoubleBet,data)
		}
	},

	//10016 C2S 棄牌
	FoldCard(data){
		if(fakeServer == false){
			NetworkQueue.SendMsg(BClass.Game, Game_JLBPK.FoldCard,data)
		} 
		else{
			GameServer.Receive(Game_JLBPK.FoldCard,data)
		}
	},

	//10026 C2S 總結算OK  
	SettlementOK(data){
		if(fakeServer == false){
			NetworkQueue.SendMsg(BClass.Game, Game_JLBPK.SettlementOK,data)
		} 
		else{
			GameServer.Receive(Game_JLBPK.SettlementOK,data)
		}
	},

	RegMsg(){
		//等待遊戲開始，此階段玩家可自由進出遊戲
		NetworkQueue.RegMsgHook(BClass.Game, Game.GameBeginCountDownID, 
			function(data){
				GameLayer.WaitingStart(data)
			} ,
		pojectName)

		//10001 S2C牌局資訊，於玩家進入牌局或斷線重連時傳送
		NetworkQueue.RegMsgHook(BClass.Game, Game_JLBPK.GameInfo,
			function(data){
				GameLayer.GameInfo(data)
			},
		pojectName)

		//10002 S2C玩家資訊，當玩家人數或狀態有變動時傳送
		NetworkQueue.RegMsgHook(BClass.Game, Game_JLBPK.AllUserInfo,
			function(data){
				GameLayer.AllUserInfo(data)
			},
		pojectName)

		//10004 S2C遊戲開始，播放開始下注動畫
		NetworkQueue.RegMsgHook(BClass.Game, Game_JLBPK.StartBettingAnimation,
			function(data){
				GameLayer.StartBettingAnimation(data)
			},
		pojectName)

		//10006 S2C玩家開始下注
		NetworkQueue.RegMsgHook(BClass.Game, Game_JLBPK.UserBettingStart,
			function(data){
				GameLayer.UserBettingStart(data)
			},
		pojectName)

		//10008 S2C玩家下注結果
		NetworkQueue.RegMsgHook(BClass.Game, Game_JLBPK.BetResult,
			function(data){
				GameLayer.BetResult(data)
			},
		pojectName)

		//10009 S2C播放停止下注動畫
		NetworkQueue.RegMsgHook(BClass.Game, Game_JLBPK.StopBettingAnimation,
			function(data){
				// 清除載入時間
				GameManager.calLoadTime()
				GameLayer.StopBettingAnimation(data)
			},
		pojectName)

		//10011 S2C發牌
		NetworkQueue.RegMsgHook(BClass.Game, Game_JLBPK.Deal,
			function(data){
				GameLayer.Deal(data)
			},
		pojectName)

		//10013 S2C玩家開始加注
		NetworkQueue.RegMsgHook(BClass.Game, Game_JLBPK.DoubleBetStart,
			function(data){
				GameLayer.DoubleBetStart(data)
			},
		pojectName)

		//10015 S2C玩家加注結果
		NetworkQueue.RegMsgHook(BClass.Game, Game_JLBPK.DoubleBetResult,
			function(data){
				GameLayer.DoubleBetResult(data)
			},
		pojectName)

		//10017 S2C傳送玩家棄牌訊息，玩家於加注倒數時間結束時仍未加注，亦傳送此協定強制棄牌
		NetworkQueue.RegMsgHook(BClass.Game, Game_JLBPK.UserFoldCard,
			function(data){
				GameLayer.UserFoldCard(data)
			},
		pojectName)

		//10024 S2C更新Jackpot金額
		NetworkQueue.RegMsgHook(BClass.Game, Game_JLBPK.UpdateJackpot,
			function(data){
				GameLayer.UpdateJackpot(data)
			},
		pojectName)

		//10025 S2C總結算
		NetworkQueue.RegMsgHook(BClass.Game, Game_JLBPK.Settlement,
			function(data){
				// 清除載入時間
				GameManager.calLoadTime()

				GameLayer.Settlement(data)
			},
		pojectName)

    	// 注册游戏场景初始化方法,只有在断线重连时有意义
 		// G.Service.Game.RegNotifyGameSceneInit( function() GameSceneDestory() end )
	
	},

	//10001 S2C牌局資訊，於玩家進入牌局或斷線重連時傳送
	GameInfo(data){
		GameLayer.GameInfo(data)
	},

	//10002 S2C玩家資訊，當玩家人數或狀態有變動時傳送
	AllUserInfo(data){
		GameLayer.AllUserInfo(data)
	},

	//10003 S2C等待遊戲開始，此階段玩家可自由進出遊戲
	WaitingStart(data){
		GameLayer.WaitingStart(data)
	},

	//10004 S2C遊戲開始，播放開始下注動畫
	StartBettingAnimation(data){
		GameLayer.StartBettingAnimation(data)
	},

	//10006 S2C玩家開始下注
	UserBettingStart(data){
		GameLayer.UserBettingStart(data)
	},

	//10008 S2C 玩家下注結果
	BetResult(data){	 
		GameLayer.BetResult(data)
	},

	// 10009 S2C 玩家停止下注
	StopBettingAnimation(){
		GameLayer.StopBettingAnimation()
	},

	// 10011 S2C 發牌
	Deal(data){	 
		GameLayer.Deal(data)
	},

 	// 10013 S2C 玩家開始加注
	 DoubleBetStart(data){	
		GameLayer.DoubleBetStart(data)
	},

	// 10015 S2C 玩家加注結果
	 DoubleBetResult(data){	
		GameLayer.DoubleBetResult(data)
	},

 	// 10017 S2C 傳送玩家棄牌訊息，玩家於加注倒數時間結束時仍未加注，亦傳送此協定強制棄牌
	 UserFoldCard(data){	
		GameLayer.UserFoldCard(data)
	},

	// 10018 S2C 開牌，邊注結算
	Settlement(data){	
		GameLayer.Settlement(data)
	},
};

module.exports = GameModel
