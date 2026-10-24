import { netproto } from "GameMsg_ALD" //这里引入文件,msg为package的包名
var Game_ALD = {
	ALD_SettingID:20001,
	ALD_StatusID:20002,
	ALD_BetStatusID:20003,
	ALD_GameResultID:20004,
	ALD_LeftFreeGameID:20005,
	ALD_ActionSpinID:21001,
	ALD_LoadHistoryID:22001,
	ALD_LoadHistoryRetID:22002,
	ALD_JackpotPoolID:22003,
	ALD_JackpotPoolRetID:22004,
	ALD_BonusGameID:22005,
	ALD_BonusGameRetID:22006,
	ALD_SelectGameReadID:10000001,
	ALD_SelectGameReadRetID:10000002,
	ALD_SelectGameRecordID:10000003,
	ALD_FreeGameReadID:10000011,
	ALD_FreeGameReadRetID:10000012,
	ALD_FreeGameRecordID:10000013,
	ALD_JackpotNoLinkReadID:10000021,
	ALD_JackpotNoLinkReadRetID:10000022,
	ALD_JackpotNoLinkRecordID:10000023,
	ALD_GameLogReadID:10000031,
	ALD_GameLogReadRetID:10000032,
	ALD_GameLogAddID:10000033,


	initMsgModel: function()
	{
		var NetworkQueue = require("NetworkQueue");
		var BClass = require("BClass")

		NetworkQueue.AddMsgModelName(BClass.Game, Game_ALD.ALD_SettingID               ,netproto.ALD_MSG_Setting)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_ALD.ALD_StatusID                ,netproto.ALD_MSG_Status)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_ALD.ALD_BetStatusID             ,netproto.ALD_MSG_BetStatus)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_ALD.ALD_GameResultID            ,netproto.ALD_MSG_StepGameResult)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_ALD.ALD_LeftFreeGameID          ,netproto.)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_ALD.ALD_ActionSpinID            ,netproto.ALD_MSG_Spin)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_ALD.ALD_LoadHistoryID           ,netproto.ALD_MSG_GameLogRead)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_ALD.ALD_LoadHistoryRetID        ,netproto.ALD_MSG_GameLogRecord)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_ALD.ALD_JackpotPoolID           ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_ALD.ALD_JackpotPoolRetID        ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_ALD.ALD_BonusGameID             ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_ALD.ALD_BonusGameRetID          ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_ALD.ALD_SelectGameReadID        ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_ALD.ALD_SelectGameReadRetID     ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_ALD.ALD_SelectGameRecordID      ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_ALD.ALD_FreeGameReadID          ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_ALD.ALD_FreeGameReadRetID       ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_ALD.ALD_FreeGameRecordID        ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_ALD.ALD_JackpotNoLinkReadID     ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_ALD.ALD_JackpotNoLinkReadRetID  ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_ALD.ALD_JackpotNoLinkRecordID   ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_ALD.ALD_GameLogReadID           ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_ALD.ALD_GameLogReadRetID        ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_ALD.ALD_GameLogAddID            ,netproto.)
	},
};

module.exports = Game_ALD
