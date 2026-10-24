var networkQueue = null
var Game_TBNN = null
var BClass = null

var Service = {
	extends: cc.Component,

	Init(){
		networkQueue = require("NetworkQueue");
		Game_TBNN = require("Game_TBNN")
		BClass = require("BClass")
	},

	// 发送用户选择底分
	SendBetChoose(num){
		let param = {}
		param.BaseScore = num
	    networkQueue.SendMsg(BClass.Game, Game_TBNN.TBNN_UserBaseScoreID, param)
	},

	// 发送组牌完成请求
	SendGroupFinished(){
		networkQueue.SendMsg(BClass.Game, Game_TBNN.TBNN_UserCardGroupID)
	},
};

module.exports = Service
