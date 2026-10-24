var Game_TBNN = require("Game_TBNN");
var BClass = require("BClass")
var Game = require("Game")
var G = require( "Global")
var GameG = require( "GameGlobal")
var service = null
var uiuser = null
var uigamebegin = null
var uibet = null
var uitips = null
var uizhupai = null
var uiready = null
var effect = null
var gameData = null
var networkQueue = require("NetworkQueue")
var GameService = require("GameService")
var UIManager = require("UIManager")
var UIUserPic = require("UIUserPic")
var UIManager = require("UIManager")
var UserState = require("UserState")
var TipsType = require("TipsType")

var uigameTopMenu = null
var uiGameHelp = null
var uiSetGame = null

var RoomTips = 
{
    Allot : "正在分配座位……",
    WaitOtherPlayer : "正在等待其他玩家进入……",
    ReAllot : "正在重新分配座位……",
    WaitGameStart : "等待游戏开始……",
    Restore : "正在恢复游戏场景……"
};

var sequence = null

// 用户位置对象列表
var UserPosList = [ ]

// 当前玩家位置对象
var SelfPos = {}
var SelfUserID = 0

var uishowlog = {}
uishowlog.uibet = false,
uishowlog.uizhupai = false


// 游戏配置信息
var GameConfig = {
    BaseScoreTimeout : null,
    CardGroupTimeout : null,
    BaseScore : null,
    TableNo : null,
    GameID : null,
    ReadyTimeout : null,
    BaseScoreTimes : null,
}

var self

cc.Class({
	extends: cc.Component,
	
	properties:{

	},

	onLoad() {
		GameG.initSchedule(this)
	},

	// region 游戏入口脚本
	start(){
		this.root = cc.find("Canvas/UIGame")

		self = this

		// 載入完圖片才開始遊戲
        GameG.InitAndLoadSprite(function(){
			UIUserPic.InitAndLoadSprite(function(){
				Game_TBNN.initMsgModel()
				
				self.Init()
				
				networkQueue.Resume()
				UIManager.HideLoading()
			})
		})
	},

	onDestroy() {
	    self.GameSceneDestory()
	},	

	Init(){
		uiuser = require("UIUser")
		uigamebegin = require("UIGameBegin")
		uibet = require("UIBet")
		uitips = require("UITips")
		uizhupai = require("UIZhuPai")
		uiready = require("UIReady")
		effect = require("Effect")
		gameData = require("GameData")
		uigameTopMenu = require("UIGameTopMenu")
		uiGameHelp = require("UIGameHelp")
		uiSetGame = require("UISetGame")
		service = require("Service")

	    GameG.PlayGameBGM("bgmusic")

		effect.Init(this.root)
	    uigamebegin.Init(this.root)
	    uibet.Init(this.root)
	    uitips.Init(this.root)
	    uizhupai.Init(this.root)
		uiready.Init(this.root)
		service.Init()
		
		SelfUserID = require("GameConfig").getUserID()

		let nodePublic = cc.find("bggroup/topmenu",this.root)

		// game help
		let uiGameHelpPrefab = cc.find("UIGameHelp",nodePublic)
		uiGameHelp.Init(uiGameHelpPrefab)

		// 遊戲設定介面
		let uiSetGamePrefab = cc.find("UISetGame",nodePublic)
		uiSetGame.Init(uiSetGamePrefab)

		// top menu
	    let topMenu = cc.find("UIGameTopMenu",nodePublic)
		uigameTopMenu.Init(topMenu, 
			// help_callback
			function(){
				uiGameHelp.Show()
			},
			// set_callback
			function(){
				uiSetGame.Show()
			},
			// exit_callback
			function(){

			},                        
		)

		this.InitEvent()
	},

	InitEvent(){
		GameService.RegUserEnterMsg(self.RegUserEnterMsg)
		GameService.RegUserStateChangeMsg(self.RegUserStateChangeMsg)
		GameService.RegLookOnUserNotify(self.RegLookOnUserNotify)
		GameService.RegGameStartMsg(self.RegGameStartMsg)
		GameService.RegGameEndMsg(self.RegGameEndMsg)
		GameService.RegUserLeaveMsg(self.RegUserLeaveMsg)
		GameService.RegAllUserActionCommitedMsg(self.RegAllUserActionCommitedMsg)

		networkQueue.RegMsgHook(BClass.Game, Game_TBNN.TBNN_GameSceneID, self.TBNN_GameSceneID)
		networkQueue.RegMsgHook(BClass.Game, Game_TBNN.TBNN_GameConfigID, self.TBNN_GameConfigID)
		networkQueue.RegMsgHook(BClass.Game, Game_TBNN.TBNN_NotifyUserCardGroupID, self.TBNN_NotifyUserCardGroupID)
		networkQueue.RegMsgHook(BClass.Game, Game_TBNN.TBNN_NotifyUserBaseScoreID, self.TBNN_NotifyUserBaseScoreID)
		networkQueue.RegMsgHook(BClass.Game, Game_TBNN.TBNN_NotifyGameBaseScoreID, self.TBNN_NotifyGameBaseScoreID)
		networkQueue.RegMsgHook(BClass.Game, Game_TBNN.TBNN_UserBetInfoID, self.TBNN_UserBetInfoID)
		networkQueue.RegMsgHook(BClass.Game, Game.UserPokerID, self.UserPokerID)
		networkQueue.RegMsgHook(BClass.Game, Game_TBNN.TBNN_GameRetID, self.TBNN_GameRetID)
			

	},
	

	// 回收方法
	OnDestroy(){
    	// 回收当前页面注册的消息
	    this.GameSceneDestory()
	    gameData.Destory()
	},

	// 回收dotween动画
	DestoryDotween(){
		if (sequence != null) {
			sequence.stop()
		}
	},

	GameSceneDestory(){
	    this.DestoryDotween()
    	// 回收所有座位
		for(let k in (UserPosList)){ 
			let v = UserPosList[k]
			if (v){
				v.LeaveRoom()
			}
	    }
	    UserPosList = [ ]
	    uibet.Destory()
	    uitips.Destory()
	    uiready.Destory()
	    uizhupai.Destory()
	},

	// 配置组牌界面
	ConfigZhuPaiUI(cards){
    	// 配置当前有扑克牌选中事件
	    SelfPos.SetCardClickEvent( function(card, isChoose){
	        if (isChoose) {
	            return uizhupai.SetValue(card)
			} 
	        else{
	            uizhupai.RemoveValue(card)
	            return true
	        }
	    } , cards)
	    uizhupai.SetCards(cards)
	    uizhupai.SetFinishedEvent( function(){
			sequence = GameG.NewTween(self.root)
	        SelfPos.KouPai(sequence)
	        sequence.call( function(){
	            //service.SendGroupFinished()
			} )
			sequence.start()
	    } )
	},

	// region 游戏公共拦截消息
	// 注册游戏场景初始化方法,只有在断线重连时有意义
	//GameService.RegNotifyGameSceneInit( function(){
	    //GameSceneDestory()
	    //G.Tool.UILoading.ShowTxt(RoomTips.Restore, 0, true)
	//}),

	showUserPosList(text){
		// console.log("------------------------------------------" + text)
		// for(let _ in (UserPosList)){ 
		// 	let v = UserPosList[_]
		// 	if (v != null)
		// 		console.log(v.UserID)
		// }
		// console.log("------------------------------------------" + text)
	},

	// region 用户进入桌子消息
	RegUserEnterMsg(data){
		UserPosList[data.User.UserID.toString()] = new uiuser(self.root, data.User, SelfPos.UserData)
	    if (data.User.UserID == SelfUserID) {
	        UIManager.ShowMessageGameFull(RoomTips.WaitOtherPlayer, 0)
	        SelfPos = UserPosList[data.User.UserID.toString()]
	    }
		self.showUserPosList("進入後")
	},

	// region 用户状态改变触发
	RegUserStateChangeMsg(data){
		if (GameService.CurrentUserTableNo() == -1) {
	        self.GameSceneDestory()
	        UIManager.ShowMessageGameFull(RoomTips.Allot, 0)
	        return
		}
		let UserID = data.User.UserID.toString()
	    if (UserPosList[UserID] != null) {
			UserPosList[UserID].UpdateInfo(data.User, true)
	    }
	},

	// region 旁观用户通知
	RegLookOnUserNotify(data){
		for(let _ in (UserPosList)){ 
			let v = UserPosList[_]
			if (v){
				v.SetLookOn(false)
			}
		}

	    if (data != null && data.UserID != null) {
			for(let _ in (data.UserID)){ 
				let uid = data.UserID[_].toString()
	            if (UserPosList[uid]) {
	                UserPosList[uid].SetLookOn(true)
	            }
	        }
	    }
	},

	// region 游戏开始消息
	RegGameStartMsg(data){
	    UIManager.HideMessageGameFull()

		self.DestoryDotween()

		for(let k in (UserPosList)){ 
			let v = UserPosList[k]
			if (v){
				v.Destory()
			}
	    }
		for(let _ in (UserPosList)){ 
			let v = UserPosList[_]
			if (v){
				v.SetUserStateInfo(UserState.none)
			}
	    }
	
	    uigamebegin.Show()
	},

	// region 游戏结束消息
	RegGameEndMsg(data){
		uishowlog = {}
		uishowlog.uibet = false,
		uishowlog.uizhupai = false
		
	    if (SelfPos.IsLookOn()) {
	        UIManager.ShowMessageGameFull(RoomTips.WaitGameStart, 0)
		} 
    	else{
	        uiready.Show(GameConfig.ReadyTimeout)
	    }
	},
	
 	// region 其他用户离开桌子消息
 	RegUserLeaveMsg(data){
		self.showUserPosList("離開前")
		let UserID = data.User.UserID.toString()
		if (UserPosList[UserID]){
	    	UserPosList[UserID].LeaveRoom()
			UserPosList[UserID] = null
		}
		// let val = UserPosList[data.User.UserID.toString()]
		// for(var i=0; i<UserPosList.length; ++i  ) {
		// 	if(UserPosList[i] == val) {
		// 		UserPosList.splice(i, 1);
		// 		break;
		// 	}	
		// }
		self.showUserPosList("離開後")

	},
	
	// region 桌子配置消息
	TBNN_GameConfigID(gameconfig){
	    gameData.GameConfig(gameconfig)
	    GameConfig = gameconfig
	    GameConfig.BaseScore = G.FormatDecimal(GameConfig.BaseScore)
	    let txt_bottomscoretxt = cc.find("bggroup/desk/bottomscoretxt",self.root).getComponent("TextControl")
	    let baseScoreStr = GameConfig.BaseScore.toString()
		txt_bottomscoretxt.text = baseScoreStr
	},
	
 	// region 断线重连场景消息
	TBNN_GameSceneID(data){
	    UIManager.HideMessageGameFull()

	    //networkQueue.Pause()
	
		for(let k in (UserPosList)){ 
			let v = UserPosList[k]
			if (v){
				v.RestoreUserInfo(data)
			}
	    }
	
    	// 恢复可选倍数配置
	    if (data.BetTimes != null) {
	        gameData.AllowBaseScoreTimes(data.BetTimes)
	    }
	
	    if (SelfPos.IsLookOn() == false) {
            // 检查是否选择了倍数，未选择则显示选择界面
	        if (data.GameStep == 1) {
	            if (G.Exists(data.GameBaseScore.GameBet, function(m){ return m.UserID == SelfUserID }) != null) {
	                uishowlog.bet = true
	                uibet.Show(GameConfig.BaseScoreTimes, data.ElapsedSeconds)
				}
            	else{
	                uitips.Show(TipsType.WaitBet, data.ElapsedSeconds)
	            }
			} 
			// 处理分牌逻辑
			else if (data.GameStep == 2 || data.GameStep == 3) {
	            if (G.Exists(data.FinishedGroupUsers, function(uid){ return uid == SelfUserID })) {
	                uitips.Show(TipsType.WaitZhuPai, data.ElapsedSeconds)
				} 
            	else{
	                self.ConfigZhuPaiUI(data.UserPoker.Cards)
	                if (data.GameStep == 3) {
	                    uishowlog.zhupai = true
	                    SelfPos.CardClick = true
	                    uizhupai.Show(data.ElapsedSeconds)
					}
				}
			} 
        	else if (data.GameStep == 4) {

	
	        }
		} 
    	else{
	        UIManager.ShowMessageGameFull(RoomTips.WaitGameStart, 0)
	    }
	    //networkQueue.Resume()
	},
	
	// region当前桌所有玩家动画完成消息通知
	RegAllUserActionCommitedMsg(actionName){
	    if (SelfPos.IsLookOn() == false) {
			// 游戏开始动画完成消息
			if (actionName == "gamestart") {
	            if (uishowlog.bet == null) {
	                uibet.Show(GameConfig.BaseScoreTimes, GameConfig.BaseScoreTimeout)
	            }
			} 
			// 发牌动画完成消息
			else if (actionName == "fapai") {
	            if (uishowlog.zhupai == null) {
	                SelfPos.CardClick = true
	                uizhupai.Show(GameConfig.CardGroupTimeout)
	            }
			} 
            // 游戏结算动画完成消息
        	else if (actionName == "gameret") {

	        }
	    }
	},

	// region 玩家组牌成完成通知
	TBNN_NotifyUserCardGroupID(data){
		self.showUserPosList("玩家组牌成完成通知 SetUserStateInfo")
		if (UserPosList[data.UserID.toString()])
	    	UserPosList[data.UserID.toString()].SetUserStateInfo(UserState.zhupaifinished)
	},
	
	// region 玩家选择倍数通知
	TBNN_NotifyUserBaseScoreID(data){
		self.showUserPosList("玩家选择倍数通知 SetBet")
		if (UserPosList[data.UserID.toString()])
	    	UserPosList[data.UserID.toString()].SetBet(data.BaseScore)
	},
	
 	// region 确定所有玩家倍数
	TBNN_NotifyGameBaseScoreID(data){
		for(let _ in (data.GameBet)){ 
			let v = data.GameBet[_]
			if (UserPosList[v.UserID.toString()])
	        	UserPosList[v.UserID.toString()].SetBet(v.BaseScore)
	    }
	},
	
	// region 用户倍数选择数据更新
	TBNN_UserBetInfoID(data){
	    if (data == null) { data = [ ] }
	    gameData.AllowBaseScoreTimes(data.BetTimes)
	},
	
	// region 发牌消息
	UserPokerID(data){
	    uitips.Destory()
	    networkQueue.Pause()
	
		sequence = GameG.NewTween(self.root)
		for(let k in (UserPosList)){ 
			let v = UserPosList[k]
			if (v){
				v.SendPacker(data.Cards, sequence,)
			}
		}
		sequence.delay(0.5)
		sequence.call( function(){
			networkQueue.Resume()
	   	} )
	   	sequence.call( function(){
			for(let _ in (UserPosList)){ 
				let v = UserPosList[_]
				if (v){
					v.SetUserStateInfo(UserState.zhupaizhong)
				}
	       	}
	       	if (SelfPos.IsLookOn() == false) {
	           GameService.SendUserActionCommit("fapai", SelfPos.IsLookOn())
           		// 配置当前玩家的扑克牌选中事件
	           self.ConfigZhuPaiUI(data.Cards)
	       	}
		})
		sequence.start()
	},
	
	// region 亮牌消息
	TBNN_GameRetID(data){
	    uitips.Destory()
	    uizhupai.Destory()
		networkQueue.Pause()
		
		sequence = GameG.NewTween(self.root)

		// 获取赢家
		let winPos = UserPosList[G.First(data.UserRet, function(r){ return r.WinLose > 0 }).UserID]
		
		for(let k in (data.UserRet)){ 
			let v = data.UserRet[k]
			let curPos = UserPosList[v.UserID.toString()]
			if (curPos)
	        	curPos.OpenCard(v)
	        if (winPos.UserID != v.UserID) {
	            if (v.WinLose > 0) {
	                effect.FlyGold(winPos.GetGoldPos(), curPos.GetGoldPos(), sequence)
				}
            	else{
	                effect.FlyGold(curPos.GetGoldPos(), winPos.GetGoldPos(), sequence)
	            }
	        }
	    }
	    GameG.PlayHallSound("goldfly")
	    sequence.call( function(){
	        GameG.CloseSound()
			for(let _ in (data.UserRet)){ 
				let v = data.UserRet[_] 
	            let curPos = UserPosList[v.UserID.toString()]
	            if (curPos != null) {
	                curPos.ShowCashChange(v.WinLose)
	            }
			}
	        networkQueue.Resume()
	    } )
	    sequence.delay(0.1)
	    sequence.call( function(){
			for(let _ in (data.UserRet)){ 
				let v = data.UserRet[_] 
	            let curPos = UserPosList[v.UserID.toString()]
	            if (curPos != null) {
	                curPos.ShowCashChange(v.WinLose, false)
	            }
	        }
	        GameService.SendUserActionCommit("gameret", SelfPos.IsLookOn())
		} )
		sequence.start()
	},

});