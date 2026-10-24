var Game_DFDC = require("Game_DFDC")
var GameG = require("GameGlobal")
// var gameData = require("GameData")
var GameLayer = require("GameLayer")
var GameModel = require("GameModel")
var networkQueue = require("NetworkQueue");
var UIManager = require("UIManager")

cc.macro.ENABLE_TRANSPARENT_CANVAS = true

cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad () {
        GameG.initSchedule(this)

        GameModel.Init()
    },

    start() {
        Game_DFDC.initMsgModel()

        GameLayer.Init()

        networkQueue.Resume()

        UIManager.HideLoading()
    },

    update (dt) {
        GameLayer.Update(dt)
    },    
});
