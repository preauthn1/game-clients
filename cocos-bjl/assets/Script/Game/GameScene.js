var G = require("Global")
var GameG = require("GameGlobal")
var gameControl = require("GameControl")
var chartLayer = require("ChartLayer")
var gameLayer = require("GameLayer")
var compare = require("Compare")
var gameAudio = require("GameAudio")
var gameData = require("GameData")
var toast = require("Toast")
var ObjectPool = require("ObjectPool")
var GameService = require("GameService")

let networkQueue = null

let GameConfig = null
let BitHelper = null
var fmg = null

var GameScene = {
	extends: cc.Component,

	Init(canvas){
	    this.WaitGameStart = cc.find("WaitGameStart",canvas)
		this.WaitGameStart.active =(false)	

	    this.WaitGameStartBg = cc.find("WaitGameStart/bg",canvas)
		
		let prefabCast = cc.find("GameLayer/GameLayer/CastPool/PfCast" , canvas)
		
		networkQueue = require("NetworkQueue");
		GameConfig = require("GameConfig")
		BitHelper = require("BitHelper")
		fmg = require("FFunction")
		
	    this.initData()
	    this.initUi()
	    this.initEvent()
	    this.hold("等待游戏开始……", 30)
    //gameAudio.bgmNormal()
	    gameAudio.bgmNormalRandom()
		gameData.ShowID = false
	},

	//- 清理函数
	onExit(){
	    let name = GameG.GetGameName()
	    networkQueue.RemoveMsgHookByGroup(name)
	    networkQueue.RemoveGameMsgHook()
	    gameControl.onExit()
	    gameLayer.onExit()
	    gameAudio.onExit()
    	// 释放全局表
	    fmg.unLoadLua(name)
	    fmg = null
	},

	//- data初始化
	initData(){
	    gameData.svrData = []                                    // 存服务器数据
	},

	//- ui初始化
	initUi(){
		let num = 5
		let poolInit = function(pool){
			let trans = cc.instance(prefabCast)
			trans.active =(false)
			trans.scale = 1
			pool.dtItem = trans
			pool.dtParent = gameLayer.uiRoot.bet.cast.root
		}
		let create = function(pool){
	        return cc.instantiate(pool.dtItem)
		}
		let objInit = function(obj, pool, bShow, args){
			obj.parent =(pool.dtParent, false)
			
			// 修正在不同解析度下縮放錯誤的問題 Add By Rayon
			obj.scale = 1		
			
			if(args == null ){ return }
			if(args.pos ){ obj.position = args.pos }
			if(args.parent ){ obj.parent =(args.parent) }
			if(args.cfg ){
				GameG.SetImageSprite(cc.find("btn",obj).getComponent(cc.Sprite),"", gameData.GetBetBtnImg(args.cfg, 1)+"_1", false)
				cc.find("bet",obj).getComponent(cc.Label).text = GameG.FormatUnit(args.cfg*gameData.dtBetRate)
			}
		} 
		let objInitArgs = []
		let objDel = function(pool, obj){
			obj.active =(false)
	    }
			
		// 筹码缓存池
	    gameData.poolCast = new ObjectPool()
		gameData.poolCast.init([num, poolInit, create, objInit, objInitArgs, objDel,])
		
		BitHelper.init()
		gameData.init()
		gameAudio.initData()
		gameLayer.init()
		gameControl.init()
		chartLayer.init()
		compare.init()
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
		GameScene.hideHold()
		
		let self = this
		this.WaitGameStart.active =(true)

		let repeatTween = cc.tween(this.WaitGameStart)
		let tween = cc.tween(repeatTween)
		.delay(0.05)
		.call(function(){
			self.WaitGameStart.active =(true)
		 })
		repeatTween.repeat(9999999999, tween).start()
		this.hShowHold = repeatTween
		
        //CS.UILoadingData.Show(text)

    	// 超时关闭
		this.hWaitStart = fmg.delayFunc(
			this.WaitGameStartBg,
			function(adt){
				self.hShowHold.stop()
				//CS.UILoadingData.Hide()
				self.WaitGameStart.active =(false)
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
    	//CS.UILoadingData.Hide()
		this.WaitGameStart.active =(false)
	},

//- 大厅消息
	UserStateChange(data){
    //console.log("ftest event UserStateChange")
		fmg.fpack(data)
	    if(data.User.UserID == GameG.getUserID() && gameData.breakCoin==0 ){
	        gameData.breakCoin = gameData.breakCoin || 0
	        data.User.Score = data.User.Score - gameData.breakCoin
	        gameLayer.updateUserCoin(data.User.Score)
	    }
	},

	UserEnter(data){
    // console.log("ftest event UserEnter")
    //fmg.fpack(data)
	    if(data.User.UserID == GameG.getUserID() ){
	        gameData.UserInfo = data.User
	        gameControl.updateUser(data.User)
	    }
	},

	GameStartID(data){
    //console.log("ftest event GameStartID")
		
	//gameAudio.bgmNormal()
	    gameAudio.bgmNormalRandom()
		gameLayer.GameStart()
		
    //fmg.fpack(data)
	},

	RegUserLeaveMsg(data){
	    console.log("ftest event RegUserLeaveMsg")
    //fmg.fpack(data)
    //gameControl.updateUser(false, data)
	},

	RegGameEndMsg(data){
	    console.log("ftest event RegGameEndMsg")
    //fmg.fpack(data)
    //gameControl.updateUser(false, data)
		gameLayer.GameEnd()
	},


};

module.exports = GameScene
