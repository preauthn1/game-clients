let UIManager = require("UIManager")
let GameG = require("GameGlobal")
let gameData =require("GameData")
let gameLayer =require("GameLayer")
let gameModel =require("GameModel")
var networkQueue = require("NetworkQueue")
let UIInputEvent = require("UIInputEvent");

cc.Class({
    extends: cc.Component,

    properties: {
        
    },

	onLoad() {
		GameG.initSchedule(this)
        gameData.Init()
        gameLayer.Init()
        gameModel.Init()
		
		UIInputEvent.Init()
	},

    start () {
		// 載入完圖片才開始遊戲
		GameG.InitAndLoadSprite(function(){
			//原始start改放這裡面
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
