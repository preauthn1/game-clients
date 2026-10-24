var GameG = require("GameGlobal")
var gameData = require("GameData")
var gameLayer = require("GameLayer")
var gameModel = require("GameModel")
var networkQueue = require("NetworkQueue")
var UIManager = require("UIManager")
let UIInputEvent = require("UIInputEvent");

cc.Class({
	extends: cc.Component,

	properties:{

	},

	onLoad() {
		GameG.initSchedule(this)
		
		gameData.Init()
		gameLayer.Init()
		gameModel.Init()
		UIInputEvent.Init()
	},

	start() {
		// 載入完圖片才開始遊戲
		GameG.InitAndLoadSprite(function(){
			//原始start改放這裡面

			GameG.PlayGameBGM("bgm_mg")
		
			networkQueue.Resume()
			UIManager.HideLoading()
		})
	},

	update(dt) {
		gameLayer.Update(dt)
	},

	onDestroy() {
		gameLayer.onExit()		
	},
});