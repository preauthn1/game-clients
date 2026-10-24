var Game_DDZ = require("Game_DDZ");
var networkQueue = require("NetworkQueue");
var GameG = require("GameGlobal")
var UIManager = require("UIManager")
var UIUserPic = require("UIUserPic")
var GameControl = require("GameControl")

cc.Class({
	extends: cc.Component,

	properties:{
		PrefabM:{
			default:null,
			type:require("PrefabManager"),
        },		
	},

	onLoad() {
		GameG.initSchedule(this)
	},

	start() {
		let self = this

		// 載入完圖片才開始遊戲
        GameG.InitAndLoadSprite(function(){
			UIUserPic.InitAndLoadSprite(function(){
				Game_DDZ.initMsgModel()

				GameControl.Init(self.PrefabM)

				networkQueue.Resume()
				UIManager.HideLoading()
			})
		})
	},

	update(dt) {

	},

	onDestroy() {

	},

	
});