var Game_BRNN = require("Game_BRNN")
var networkQueue = require("NetworkQueue")

var GameG = require("GameGlobal")
var UIManager = require("UIManager")
var UIUserPic = require("UIUserPic")
var gameScene = require("GameScene")
var GameManager=require("GameManager")

cc.Class({
	extends: cc.Component,

	properties:{

	},

    ctor() {
        this.acc=0;
	},
		
	onLoad() {
		GameG.initSchedule(this)

        let self=this
        cc.game.on(cc.game.EVENT_HIDE, function () {
            console.log("游戏进入后台");
        }, this);

        cc.game.on(cc.game.EVENT_SHOW, function () {
            console.log("重新返回游戏");
            self.RequestReloadScene();
        }, this);		
	},

	start() {
		let self = this
		// 載入完圖片才開始遊戲
        GameG.InitAndLoadSprite(function(){
			UIUserPic.InitAndLoadSprite(function(){
				Game_BRNN.initMsgModel()
				
				gameScene.Init()

				networkQueue.Resume()
				UIManager.HideLoading()				
			})
		})
	},
	
    update(dt) {
        this.acc+=dt;
    },

    RequestReloadScene() {
        // 重新載入間隔時間太短就不重新載入
        if (this.acc<1) {
            console.log("重新載入間隔時間太短就不重新載入", this.acc);
            return;
        }

        console.error("**************** RequestReloadScene");

        this.acc=0;
        GameManager.clear();
        GameManager.closeConnect();

        cc.director.loadScene("GameLoading");
    },
});