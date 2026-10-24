import { tbnn } from "GameMsg_TBNN" //这里引入文件,msg为package的包名
var Game_TBNN = {
	TBNN_GameStepID:10001,
	TBNN_NotifyUserBaseScoreID:10002,
	TBNN_NotifyGameBaseScoreID:10003,
	TBNN_UserBaseScoreID:10004,
	TBNN_UserCardGroupID:10005,
	TBNN_NotifyUserCardGroupID:10006,
	TBNN_GameConfigID:10007,
	TBNN_GameRetID:10008,
	TBNN_GameSceneID:10009,
	TBNN_UserBetInfoID:10010,


	initMsgModel: function()
	{
		var NetworkQueue = require("NetworkQueue");
		var BClass = require("BClass")
		var Game_TBNN = require("Game_TBNN")

		NetworkQueue.AddMsgModelName(BClass.Game, Game_TBNN.TBNN_GameStepID            ,tbnn.TBNN_GameStep)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_TBNN.TBNN_NotifyUserBaseScoreID ,tbnn.TBNN_NotifyUserBaseScore)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_TBNN.TBNN_NotifyGameBaseScoreID ,tbnn.TBNN_NotifyGameBaseScore)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_TBNN.TBNN_UserBaseScoreID       ,tbnn.TBNN_UserBaseScore)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_TBNN.TBNN_UserCardGroupID       ,tbnn.)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_TBNN.TBNN_NotifyUserCardGroupID ,tbnn.TBNN_NotifyUserCardGroup)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_TBNN.TBNN_GameConfigID          ,tbnn.TBNN_GameSetting)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_TBNN.TBNN_GameRetID             ,tbnn.TBNN_GameRet)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_TBNN.TBNN_GameSceneID           ,tbnn.TBNN_GameScene)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_TBNN.TBNN_UserBetInfoID         ,tbnn.TBNN_UserBetInfo)
	},
};

module.exports = Game_TBNN
