var GameProto = require("Game_HHDZ")
var GameG = require("GameGlobal")
var networkQueue  = require("NetworkQueue")
var UIManager = require("UIManager")
var GameManager = require("GameManager")

cc.Class({
	extends: cc.Component,

	properties:{

	},

	ctor()
	{
        this.acc=0;
	},

	onLoad() {
		GameG.initSchedule(this)

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
			GameProto.initMsgModel()

			// GameScene.init()

			networkQueue.Resume()
			UIManager.HideLoading()
		})

	},

	update(dt) {
        this.acc += dt;
	},

	onDestroy() {

	},

    RequestReloadScene()
    {
        // 重新載入間隔時間太短就不重新載入
        if (this.acc < 1){
            console.log("重新載入間隔時間太短就不重新載入", this.acc)
            return;
        }

        console.error("**************** RequestReloadScene")

		this.acc = 0;
		
		GameManager.closeConnect()
		GameManager.clear()
       
		cc.director.loadScene("GameLoading");        
    },    
});