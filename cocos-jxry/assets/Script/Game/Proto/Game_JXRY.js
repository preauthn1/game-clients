import { netproto } from "GameMsg_JXRY" //这里引入文件,msg为package的包名
var Game_JXRY = {
	JXRY_UserEnterID:4,
	JXRY_UserLeaveID:5,
	JXRY_UserStateChangeID:6,
	JXRY_GameStartID:7,
	JXRY_GameEndID:8,
	JXRY_SettingID:20001,
	JXRY_StatusID:20002,
	JXRY_BetStatusID:20003,
	JXRY_GameResultID:20004,
	JXRY_LeftFreeGameID:20005,
	JXRY_LightningPrepareID:20006,
	JXRY_LightningResultID:20007,
	JXRY_SelectGameOptionsID:20008,
	JXRY_BonusGameID:20009,
	JXRY_GameReelSettingID:20010,
	JXRY_IncreaseGameTimesID:20011,
	JXRY_ActionSpinID:21001,
	JXRY_ActionLightningSpinID:21002,
	JXRY_ActionChooseGameID:21003,
	JXRY_LoadHistoryID:22001,
	JXRY_LoadHistoryRetID:22002,
	JXRY_JackpotPoolID:22003,
	JXRY_JackpotPoolRetID:22004,
	JXRY_PickBonusID:22005,
	JXRY_PickBonusRetID:22006,
	JXRY_SelectGameReadID:10000001,
	JXRY_SelectGameReadRetID:10000002,
	JXRY_SelectGameRecordID:10000003,
	JXRY_FreeGameReadID:10000011,
	JXRY_FreeGameReadRetID:10000012,
	JXRY_FreeGameRecordID:10000013,
	JXRY_JackpotNoLinkReadID:10000021,
	JXRY_JackpotNoLinkReadRetID:10000022,
	JXRY_JackpotNoLinkRecordID:10000023,
	JXRY_GameLogReadID:10000031,
	JXRY_GameLogReadRetID:10000032,
	JXRY_GameLogAddID:10000033,
	JXRY_BonusGameReadID:10000041,
	JXRY_BonusGameReadRetID:10000042,
	JXRY_BonusGameRecordID:10000043,
	JXRY_BonusGameResetID:10000044,
	JXRY_LightningReadID:10000051,
	JXRY_LightningReadRetID:10000052,
	JXRY_LightningRecordID:10000053,
	JXRY_DeferredAwardReadID:10000061,
	JXRY_DeferredAwardReadRetID:10000062,
	JXRY_DeferredAwardRecordID:10000063,
	JXRY_DeferredAwardPopID:10000064,


	initMsgModel: function()
	{
		var NetworkQueue = require("NetworkQueue");
		var BClass = require("BClass")

		NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_UserEnterID           ,netproto.JXRY_MSG_UserEnter)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_UserLeaveID           ,netproto.JXRY_MSG_UserLeave)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_UserStateChangeID     ,netproto.JXRY_MSG_UserStateChange)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_GameStartID           ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_GameEndID             ,netproto.)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_SettingID             ,netproto.JXRY_MSG_Setting)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_StatusID              ,netproto.JXRY_MSG_Status)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_BetStatusID           ,netproto.JXRY_MSG_BetStatus)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_GameResultID          ,netproto.JXRY_MSG_GameResult)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_LeftFreeGameID        ,netproto.JXRY_MSG_LeftFreeGameData)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_LightningPrepareID    ,netproto.JXRY_MSG_LightningPrepare)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_LightningResultID     ,netproto.JXRY_MSG_LightningResult)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_SelectGameOptionsID   ,netproto.JXRY_MSG_ChooseGameOptions)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_BonusGameID           ,netproto.JXRY_MSG_BonusGame)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_GameReelSettingID     ,netproto.JXRY_MSG_ReelSetting)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_IncreaseGameTimesID   ,netproto.JXRY_MSG_IncreaseGameTimes)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_ActionSpinID          ,netproto.JXRY_MSG_Spin)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_ActionLightningSpinID ,netproto.JXRY_MSG_LightningShow)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_ActionChooseGameID    ,netproto.JXRY_MSG_ChooseGame)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_LoadHistoryID         ,netproto.JXRY_MSG_GameLogRead)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_LoadHistoryRetID      ,netproto.JXRY_MSG_GameLogRecord)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_JackpotPoolID         ,netproto.JXRY_MSG_GetJackpot)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_JackpotPoolRetID      ,netproto.JXRY_MSG_JackpotPool)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_PickBonusID           ,netproto.JXRY_MSG_PickBonus)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_PickBonusRetID        ,netproto.JXRY_MSG_PickBonus)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_SelectGameReadID      ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_SelectGameReadRetID   ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_SelectGameRecordID    ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_FreeGameReadID        ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_FreeGameReadRetID     ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_FreeGameRecordID      ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_JackpotNoLinkReadID   ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_JackpotNoLinkReadRetID,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_JackpotNoLinkRecordID ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_GameLogReadID         ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_GameLogReadRetID      ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_GameLogAddID          ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_BonusGameReadID       ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_BonusGameReadRetID    ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_BonusGameRecordID     ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_BonusGameResetID      ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_LightningReadID       ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_LightningReadRetID    ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_LightningRecordID     ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_DeferredAwardReadID   ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_DeferredAwardReadRetID,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_DeferredAwardRecordID ,netproto.)
		// NetworkQueue.AddMsgModelName(BClass.Game, Game_JXRY.JXRY_DeferredAwardPopID    ,netproto.)
	},
};

module.exports = Game_JXRY
