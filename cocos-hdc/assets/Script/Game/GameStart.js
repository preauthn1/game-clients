var Game_JLBPK = require("Game_JLBPK")
var GameG = require("GameGlobal")
var networkQueue  = require("NetworkQueue")
var UIManager = require("UIManager")
var GameManager = require("GameManager")
var gameLayer = require("GameLayer")
var gameModel = require("GameModel")
var GameService = require("GameService")

cc.Class({
	extends: cc.Component,

	properties:{

	},

	// ctor()
	// {
    //     this.acc=0;
	// },

	onLoad() {
		GameG.initSchedule(this)

        let self = this
        cc.game.on(cc.game.EVENT_HIDE, function(){
			console.log("游戏进入后台");
			GameManager.closeConnect()
        },this);
        
        cc.game.on(cc.game.EVENT_SHOW, function(){
			console.log("重新返回游戏");
			GameManager.closeConnect()
			GameManager.clearGameStart()
			self.RequestReloadScene();
        },this);		
	},

	start() {
		// 載入完圖片才開始遊戲
		GameG.InitAndLoadSprite(function(){
			if (cc.find("Canvas/GameLayer") == null)
				return

			Game_JLBPK.initMsgModel()

			GameG.PlayGameBGM("main")

			gameLayer.Init()	
			gameModel.Start()
			
			networkQueue.Resume()
			UIManager.HideLoading()

			GameService.ReadyGame()
		})

	},

	// update(dt) {
    //     this.acc += dt;
	// },

	onDestroy() {

	},

    RequestReloadScene()
    {
        // 重新載入間隔時間太短就不重新載入
        // if (this.acc < 1){
        //     console.log("重新載入間隔時間太短就不重新載入", this.acc)
        //     return;
        // }

        console.error("**************** RequestReloadScene")

		// this.acc = 0;
		
		GameManager.closeConnect()
		GameManager.clear()
       
		cc.director.loadScene("GameLoading");        
    },    
});