var Game_DFDC = require("Game_DFDC")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var gameLayer = require("GameLayer")
var gameModel = require("GameModel")
var gameGlobal = require("GameGlobal")
var networkQueue = require("NetworkQueue");
var UIManager = require("UIManager")

cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad () {
        gameGlobal.initSchedule(this)

        gameData.Init()
        gameModel.Init()
    },

    start() {
        GameG.PlayGameBGM("bgm_mg")

        gameLayer.Init(this.node.getChildByName("GameLayer"))

        // 載入完圖片才開始遊戲
        gameGlobal.InitAndLoadSprite(function(){
            Game_DFDC.initMsgModel()

            gameLayer.Start()
            networkQueue.Resume()

            UIManager.HideLoading()
        })
    },

    update (dt) {
        gameLayer.Update(dt)
    },

    onDestroy() {

        gameLayer.onExit()
    },
});
