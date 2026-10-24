var Game_FGSB    = require("Game_FGSB");
// var GameScene=require("GameScene");
var GameG        = require("GameGlobal");
var networkQueue = require("NetworkQueue");
var UIManager    = require("UIManager");
var GameManager  = require("GameManager");
var GameLayer    = require("GameLayer");
var Tool         = null;
// var GameModel    = require("GameModel");
// var UIMain = require("UIMain");

cc.Class({
    extends : cc.Component,
    
    properties : {},
    
    onLoad(){
        GameG.initSchedule(this);
        GameLayer.Init();
        
        this.StartTime = new Date();

        let self = this;
        cc.game.on(cc.game.EVENT_HIDE, function(){
            console.log("游戏进入后台");
        }, this);
        
        cc.game.on(cc.game.EVENT_SHOW, function(){
            console.log("重新返回游戏");
            self.RequestReloadScene();
        }, this);
    },
    
    start(){		
        GameModel.Start();
        // 載入完圖片才開始遊戲
        GameG.InitAndLoadSprite(function(){
            Game_FGSB.initMsgModel();
            
            //LHDSettingID
            if(Game_FGSB.FGSBSettingID == null){
                UIMain.ShowGameStateMessage(GameG.GetLocalizedString("等待游戏开始"))
            }
            
            networkQueue.Resume();
            UIManager.HideLoading();
        });
        
    },

    onDestroy(){
        // GameScene.onExit();
    },
    
    RequestReloadScene(){
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
		
        Tool     = require("Tool");
        Tool.RemoveAllSequence();//停止所有tween
        Tool.clearTimeOutEx();//停止所有setTimeout
        
        GameManager.clear();
        GameManager.closeConnect();
        
        UIManager.ClearMessageBox();
        
        cc.director.loadScene("GameLoading");
    },
});