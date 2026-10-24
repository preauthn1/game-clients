var G = require("Global")
var GameG = require("GameGlobal")
var gameLayer = require("GameLayer")
var gameData = require("GameData")
var gameControl = null
var chartLayer = null
var UIManager = require("UIManager")
var GameService = require("GameService")
let GameConfig = null
let BitHelper = null
var fmg = null
var Compare = null

var GameScene = {
	extends: cc.Component,

	Init(){

		gameControl = require("GameControl")
		chartLayer = require("ChartLayer")		
		GameConfig = require("GameConfig")
		BitHelper = require("BitHelper")
		Compare = require("Compare")
		fmg = require("FFunction")
		BitHelper.init()
		gameData.Init()
		gameLayer.Init()
		gameControl.Init()
		chartLayer.Init()
		Compare.Init()

	    this.initData()
	    this.initEvent()		
		this.InitUI()
	},

	//- 清理函数
	onExit(){
	    gameData.gameControl.onExit()
		this.hideHold()
	},

	//- data初始化
	initData(){
	    gameData.center = cc.v3(0, 0, 1)        // 屏幕中心点坐标
	    gameData.svrData = []                                    // 存服务器数据
	},

	//- ui初始化
	InitUI(){
		this.canvas = cc.find("Canvas")
		this.root = cc.find("GameLayer",this.canvas)
		
		GameG.PlayGameBGM("admNormal1")
		GameG.PlayGameSound("adeBetBg",true)
	
	    gameData = gameData || {}
	    gameData.gameScene = this
	
	    gameData.gameProto = require("Game_BRNN")
	    gameData.compare = require("Compare")
	    gameData.chartLayer = require("ChartLayer")
	    gameData.gameControl = require("GameControl")
	
	    this.hold("等待游戏开始……", 30)
	},

	//- 初始化监听
	initEvent(){
		// 添加大厅事件监听函数
		let self = this
		GameService.RegUserEnterMsg(function(receiveMsg){ self.UserEnter(receiveMsg)})
		GameService.RegUserStateChangeMsg(function(receiveMsg){ self.UserStateChange(receiveMsg)})
		GameService.RegGameStartMsg(function(receiveMsg){ self.GameStartID(receiveMsg)})
		GameService.RegUserLeaveMsg(function(receiveMsg){ self.RegUserLeaveMsg(receiveMsg)})
		GameService.RegGameEndMsg(function(receiveMsg){ self.RegGameEndMsg(receiveMsg)})
	},

//- 
	hold(text, tm, call){
		this.hideHold()
		
		let self = this
		
		let repeatTween = cc.tween(this.canvas)
		let tween = cc.tween(repeatTween)
		.delay(0.05)
		.call(function(){
			UIManager.ShowMessageGameFull(text)
		 })
		repeatTween.repeat(9999999999, tween).start()
		this.hShowHold = repeatTween

		// 超时关闭
		this.hWaitStart = fmg.delayFunc(
			this.root,
			function(adt){
				self.hShowHold.stop()
				UIManager.HideMessageGameFull()
				self.hWaitStart = null
			}, 
			tm,
			[]
		)
		this.hWaitStart.start()
	},

	hideHold(){
	    this.dtHideHold = true
	    if(this.hWaitStart ){
			this.hShowHold.stop()
			this.hWaitStart.stop()
			this.hWaitStart = null
	    }
	
		UIManager.HideMessageGameFull()
	},

	//- 大厅消息
	UserStateChange(data){
	    //console.log("ftest event UserStateChange")
	    fmg.fpack(data)
		
		gameData.SetGameUser(data.User)
		if(data.User.UserID == GameConfig.getUserID() ){
	        gameData.breakCoin = gameData.breakCoin || 0
	        data.User.Score = data.User.Score - gameData.breakCoin
			
			gameData.SetGameUserScore(GameConfig.getUserID(),data.User.Score)
			gameLayer.SetUser(data.User)
		}
	},

	UserEnter(data){
	    //console.log("ftest event UserEnter")
	    if(data.User.UserID == GameConfig.getUserID() ){
	        gameData.UserInfo = data.User
	        gameData.gameControl.updateUser(data.User)
	    }
	},

	GameStartID(data){
	    //console.log("ftest event GameStartID")
		gameLayer.ShowStart()
		gameLayer.GameStart()
	},

	RegUserLeaveMsg(data){
	    //console.log("ftest event RegUserLeaveMsg")
	},

	RegGameEndMsg(data){
	    //console.log("ftest event RegGameEndMsg")
		gameData.GameEnd()
		gameLayer.GameEnd()
	},


};

module.exports = GameScene
