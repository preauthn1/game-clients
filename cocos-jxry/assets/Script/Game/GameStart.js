let G = require("Global")
let GameG = require("GameGlobal")
let gameData = require("GameData")
let gameLayer = require("GameLayer")
let gameModel = require("GameModel")
let UIManager = require("UIManager")
let networkQueue = require("NetworkQueue")

cc.Class({
extends: cc.Component,

	properties:{

	},

	onLoad()
	{
		GameG.initSchedule(this)
		
		gameData.Init()
		gameLayer.Init()
		gameModel.Init()
	},

	start() 
	{
		// 載入完圖片才開始遊戲
		GameG.InitAndLoadSprite(function()
		{
			//原始start改放這裡面
			gameLayer.Start()
			
			networkQueue.Resume()
			UIManager.HideLoading()
		})
	},

	update(dt) 
	{
		gameLayer.Update(dt)
	},

	onDestroy() 
	{
		gameLayer.onExit()
	},
});
