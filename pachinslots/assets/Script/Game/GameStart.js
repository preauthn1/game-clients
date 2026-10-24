var Game_DFDC = require("Game_DFDC")
var GameG = require("GameGlobal")
// var gameData = require("GameData")
var GameLayer = require("GameLayer")
var GameModel = require("GameModel")
var networkQueue = require("NetworkQueue");
var UIManager = require("UIManager")

cc.macro.ENABLE_TRANSPARENT_CANVAS = true

/*
4-1、BIG BONUS
又稱BB，此款進入BB的條件為3個藍7或紅7，進入後共有30局付費的BB遊戲，每回合Spin需扣除3枚硬幣，中途會因為轉到JAC IN 可額外獲得JAC GAME，每次 8局，最多3次，最少0次。

4-2、REGULAR BONUS
又稱RB，此款進入RB的條件為3個Bar，進入後共有8局，每局需付費1枚硬幣的JAC GAME，如果連續8局都轉出銅鐘，則會額外獲得1次連莊機會的1G連。

4-3、JAC GAME
透過在BB模式下，轉出JAC IN，即可進入，每次進入皆可獲得8局只需自費1枚硬幣的紅利遊戲。
*/

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
