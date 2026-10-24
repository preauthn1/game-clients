let G = require("Global")
let GameG = require("GameGlobal")
let gameData = require("GameData")
let gameLayer = require("GameLayer")
let gameModel = require("GameModel")
let UIManager = require("UIManager")
let networkQueue = require("NetworkQueue");
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
        GameG.PlayGameBGM("bgm_mg")
		
		GameG.InitAndLoadSprite(function(){
			 
			gameLayer.Start()

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