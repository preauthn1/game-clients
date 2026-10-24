var Game_BJL = require("Game_BJL");
var networkQueue = require("NetworkQueue");
var GameG = require("GameGlobal")
var GameScene = require("GameScene")
var UIManager = require("UIManager")
var UIUserPic = require("UIUserPic")

cc.Class({
extends: cc.Component,

	properties:{

	},

	onLoad() {
		GameG.initSchedule(this)
	},

	start() {
		// 載入完圖片才開始遊戲
        GameG.InitAndLoadSprite(function(){
			UIUserPic.InitAndLoadSprite(function(){
				Game_BJL.initMsgModel()
				GameScene.Init(cc.find("Canvas/GameLayer"))
				
				networkQueue.Resume()
				UIManager.HideLoading()
			})
		})
	},

	update(dt) {

	},

	onDestroy() {
		GameScene.onExit()
	},
});