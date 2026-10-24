let GameG = require("GameGlobal")
let UIManager = require("UIManager")
let networkQueue = require("NetworkQueue")
let gameData =require("GameData")
let gameLayer =require("GameLayer")
let gameModel =require("GameModel")
let uiinputEvent = require("UIInputEvent")

cc.Class({
    extends: cc.Component,

    onLoad () {
		GameG.initSchedule(this)
		GameG.LoadPoolSprite(cc.find("Canvas/PoolSprite"))
        gameData.Init()
        gameLayer.Init()
		gameModel.Init()
		
		uiinputEvent.Init()
    },

    start () {
        networkQueue.Resume()
        UIManager.HideLoading()
		gameLayer.Start()
    },

	update(dt) {
		gameLayer.Update(dt)
	},

	onDestroy() {
		gameLayer.onExit()
	},
});
