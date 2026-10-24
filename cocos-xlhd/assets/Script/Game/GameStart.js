var Game_XLHD=require("Game_XLHD")
var GameScene=require("GameScene")
var GameData=require("GameData")
var GameG=require("GameGlobal")
var networkQueue=require("NetworkQueue")
var UIManager=require("UIManager")
var GameManager=require("GameManager")

cc.Class({
    extends : cc.Component,

    properties : {},

    onLoad() {
        GameG.initSchedule(this)

        this.StartTime = new Date();
		
        Game_XLHD.initMsgModel();

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
        // 載入完圖片才開始遊戲
        GameG.InitAndLoadSprite(function () {
            Game_XLHD.initMsgModel();

            GameScene.init();
            //LHDSettingID
            if (xlhd.svrData.XLHDSettingID == null) {
                GameScene.hold(GameG.GetLocalizedString("等待游戏开始"), 30)
            }

            networkQueue.Resume();
            UIManager.HideLoading();
        })

    },

    RequestReloadScene() {
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
        GameManager.clear();
        GameManager.closeConnect();

        cc.director.loadScene("GameLoading");
    },  
});