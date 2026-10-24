var Common = require("Common")
var Hall =  require("Hall")
var GameRoom = require("GameRoom")
var Game = require("Game")
var NotifyServer = require("NotifyServer")

var isInit = false;

var Proto = {
    initMsgModel: function()
    {
        if (isInit == true)
            return;

        isInit = true;

        console.log("initMsgModel");

        Common.initMsgModel()
        Hall.initMsgModel()
        GameRoom.initMsgModel()
        Game.initMsgModel()
        NotifyServer.initMsgModel()
    }
};

module.exports = Proto;