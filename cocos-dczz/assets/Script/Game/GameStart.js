var Game_DCZZ    = require("Game_DCZZ");
var GameG        = require("GameGlobal");
var GameLayer    = require("GameLayer");
var networkQueue = require("NetworkQueue");
var UIManager    = require("UIManager");
var GameManager  = require("GameManager");

cc.Class({
    extends : cc.Component,
    
    properties : {},
    
    // ctor(){
    //     this.acc = 0;
    // },
    
    onLoad(){
        GameG.initSchedule(this);
        GameLayer.Init();
        GameG.PlayGameBGM("main");
        
        let self = this;
        cc.game.on(cc.game.EVENT_HIDE, function(){
            console.log("游戏进入后台");
            GameManager.closeConnect();
        }, this);
        
        cc.game.on(cc.game.EVENT_SHOW, function(){
            console.log("重新返回游戏");
            GameManager.closeConnect();
            GameManager.clearGameStart();
            self.RequestReloadScene();
        }, this);
    },
    
    start(){
        // 載入完圖片才開始遊戲
        GameG.InitAndLoadSprite(function(){
            Game_DCZZ.initMsgModel();
            networkQueue.Resume();
            UIManager.HideLoading();
        });
    },
    
    // update(dt){
    //     this.acc += dt;
    // },
    
    onDestroy(){
        
    },
    
    RequestReloadScene(){
        // 重新載入間隔時間太短就不重新載入
        // if(this.acc < 1){
        //     console.log("重新載入間隔時間太短就不重新載入", this.acc);
        //     return;
        // }
        
        console.error("**************** RequestReloadScene");
        
        // this.acc = 0;
        GameLayer.RemoveAllSequence();//停止所有tween
        
        GameManager.closeConnect();
        GameManager.clear();
        
        cc.director.loadScene("GameLoading");
    },
});