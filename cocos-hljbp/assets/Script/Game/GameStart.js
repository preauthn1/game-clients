var GameG = require("GameGlobal")
var networkQueue  = require("NetworkQueue")
var UIManager = require("UIManager")
var UIUserPic = require("UIUserPic")
var GameManager = require("GameManager")
var gameLayer = require("GameLayer")
var gameModel = require("GameModel")

cc.Class({
	extends: cc.Component,

	properties:{

	},

	onLoad() {
		GameG.initSchedule(this)

        this.StartTime = new Date();
		
        let self = this
        cc.game.on(cc.game.EVENT_HIDE, function(){
            console.log("游戏进入后台");
        },this);
        
        cc.game.on(cc.game.EVENT_SHOW, function(){
            console.log("重新返回游戏");
            self.RequestReloadScene();
        },this);		
	},

	start() {		
		// 載入完圖片才開始遊戲
		GameG.InitAndLoadSprite(function(){
			UIUserPic.InitAndLoadSprite(function(){
				gameLayer.Init()
				gameLayer.Start()
				gameModel.Start()
	
				networkQueue.Resume()
				UIManager.HideLoading()
			})
		})

	},
	
	onDestroy() {
		gameLayer.OnDestroy()
	},

    RequestReloadScene()
    {
        let HoldTime = new Date();
        let milliseconds = HoldTime.getTime() - this.StartTime.getTime();
        milliseconds = milliseconds * 0.001

        // 重新載入間隔時間太短就不重新載入
        if (milliseconds < 1) {
            console.log("重新載入間隔時間太短就不重新載入", milliseconds);
            return;
        }

        console.error("**************** RequestReloadScene");

        this.StartTime = new Date();
		GameManager.closeConnect()
		GameManager.clear()

		UIManager.ClearMessageBox();
                    
		cc.director.loadScene("GameLoading");        
    },    
});