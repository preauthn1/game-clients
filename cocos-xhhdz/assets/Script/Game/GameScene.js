var G = require("Global")
var gameAudio = require("GameAudio")
var GameData = require("GameData")
var ObjectPool = require("ObjectPool")
var fmg = require("FFunction")
var GameService = require("GameService")
var UIManager = require("UIManager")
var GameConfig = require("GameConfig")

var GameScene = {
	extends: cc.Component,

	//- 清理函数
	onExit(){

		GameData.gameControl.onExit()
	    GameData.gameLayer.onExit()
	    GameData.resultLayer.onExit()
	    gameAudio.onExit()
	},

	init(){
		GameData.Init()
	    GameData = GameData || {}
	    GameData.gameScene = this
		
	    GameData.gameProto = require("Game_HHDZ")
	    GameData.toast = require("Toast")
	    GameData.gameAudio = require("GameAudio")
	    GameData.compare = require("Compare")
	    GameData.gameLayer = require("GameLayer")
	    GameData.chartLayer = require("ChartLayer")
	    GameData.resultLayer = require("ResultLayer")
	    GameData.gameControl = require("GameControl")
	    GameData.msgBox = require("MsgBox")

		GameData.toast.initUi()
		GameData.compare.initUi()
		GameData.gameAudio.initData()
		GameData.gameLayer.initUi()
		GameData.chartLayer.initUi()
		GameData.resultLayer.initUi()
		GameData.gameControl.init()
		GameData.msgBox.initUi()

	    this.initData()
	    this.initUi()
		this.initEvent()
	
	    gameAudio.bgmNormalRandom()
		
		GameData.bankerCoin = 0
		GameData.ShowID = true			
	},

	//- data初始化
	initData(){
	    GameData.center = cc.v3(0, 0, 1)        // 屏幕中心点坐标
	    GameData.svrData = []                   // 存服务器数据
	},

	//- ui初始化
	initUi(){
		this.canvas = cc.find("Canvas")
		this.root = cc.find("GameLayer",this.canvas)
		this.PfCast =cc.find("GameLayer/CastPool/PfCast", this.canvas)

		let num = 5
		let poolInit = function(pool){
			let trans = this.PfCast
			trans.active =(false)
			trans.scale = 0.6
			pool.dtItem = trans
		}
		let create = function(pool){
			return cc.instantiate(pool.dtItem)
		}
		let objInit = function(obj, pool, bShow, args){
			obj.parent =(GameData.gameLayer.uiRoot.betNum.betCast, false)
			if(args == null ){ return }
			if(args.pos ){ obj.position = args.pos }
			if(args.parent ){ obj.parent =(args.parent) }
			if(args.cfg ){
				GameG.SetImageSprite(cc.find("btn",obj).getComponent(cc.Sprite), G.GetGamePName(), GameData.GetBetBtnImg(args.cfg)+"_1", false)					
				cc.Find("bet", obj).getComponent(cc.Label).text = gameLayer.MoneyText(args.cfg*GameData.dtBetRate)
			}
		}
		let objInitArgs = []
		let objDel = function(pool, obj){
			obj.active =(false)
		}

		GameData.poolCast = new ObjectPool()
		GameData.poolCast.init([num, poolInit, create, objInit, objInitArgs, objDel])
	},

	//- 初始化监听
	initEvent(){
		// 添加大厅事件监听函数
		let self = this
	    GameService.RegUserEnterMsg(function(receiveMsg){ self.RegUserEnterMsg(receiveMsg)})
	    GameService.RegUserStateChangeMsg(function(receiveMsg){ self.RegUserStateChangeMsg(receiveMsg)})
	    GameService.RegGameStartMsg(function(receiveMsg){ self.RegGameStartMsg(receiveMsg)})
	    GameService.RegUserLeaveMsg(function(receiveMsg){ self.RegUserLeaveMsg(receiveMsg)})
	    GameService.RegGameEndMsg(function(receiveMsg){ self.RegGameEndMsg(receiveMsg)})
	
	},
	
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
	RegUserStateChangeMsg(data){
    //print("ftest event UserStateChange")
	    if(data.User.UserID == GameConfig.getUserID() ){
	        GameData.breakCoin = GameData.breakCoin || 0
	        data.User.Score = data.User.Score - GameData.breakCoin
	        GameData.gameLayer.updateUserCoin(data.User.Score)
	    }
	},

	RegUserEnterMsg(data){
    //print("ftest event UserEnter")
	    if(data.User.UserID == GameConfig.getUserID() ){
	        GameData.UserInfo = data.User
	        GameData.gameControl.updateUser(data.User)
	    }
	},

	RegGameStartMsg(data){
    //print("ftest event GameStartID")
	GameData.gameLayer.GameStart()
	},

	RegUserLeaveMsg(data){
    //print("ftest event RegUserLeaveMsg")
	},

	RegGameEndMsg(data){
    //print("ftest event RegGameEndMsg")
	GameData.gameLayer.GameEnd()
	},


};

module.exports = GameScene
