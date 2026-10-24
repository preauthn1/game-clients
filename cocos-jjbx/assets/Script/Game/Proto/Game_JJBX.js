import { GameMsg_JJBX } from "GameMsg_JJBX" //这里引入文件,msg为package的包名

var Game_JJBX = {
    JJBX_UserEnterID : 4,
    JJBX_UserLeaveID : 5,
    JJBX_UserStateChangeID : 6,
    JJBX_GameStartID : 7,
    JJBX_GameEndID : 8,
    JJBX_SettingID : 20001,
    JJBX_StatusID : 20002,
    JJBX_BetStatusID : 20003,
    JJBX_GameResultID : 20004,
    JJBX_LeftFreeGameID : 20005,
    JJBX_LightningPrepareID : 20006,
    JJBX_LightningResultID : 20007,
    JJBX_SelectGameOptionsID : 20008,
    JJBX_BonusGameID : 20009,
    JJBX_GameReelSettingID : 20010,
    JJBX_IncreaseGameTimesID : 20011,
    JJBX_ActionSpinID : 21001,
    JJBX_ActionLightningSpinID : 21002,
    JJBX_ActionChooseGameID : 21003,
    JJBX_LoadHistoryID : 22001,
    JJBX_LoadHistoryRetID : 22002,
    JJBX_JackpotPoolID : 22003,
    JJBX_JackpotPoolRetID : 22004,
    JJBX_PickBonusID : 22005,
    JJBX_PickBonusRetID : 22006,
    JJBX_SelectGameReadID : 10000001,
    JJBX_SelectGameReadRetID : 10000002,
    JJBX_SelectGameRecordID : 10000003,
    JJBX_FreeGameReadID : 10000011,
    JJBX_FreeGameReadRetID : 10000012,
    JJBX_FreeGameRecordID : 10000013,
    JJBX_JackpotNoLinkReadID : 10000021,
    JJBX_JackpotNoLinkReadRetID : 10000022,
    JJBX_JackpotNoLinkRecordID : 10000023,
    JJBX_GameLogReadID : 10000031,
    JJBX_GameLogReadRetID : 10000032,
    JJBX_GameLogAddID : 10000033,
    JJBX_GameLogBatchAddID : 10000034,
    JJBX_BonusGameReadID : 10000041,
    JJBX_BonusGameReadRetID : 10000042,
    JJBX_BonusGameRecordID : 10000043,
    JJBX_BonusGameResetID : 10000044,
    JJBX_LightningReadID : 10000051,
    JJBX_LightningReadRetID : 10000052,
    JJBX_LightningRecordID : 10000053,
    JJBX_DeferredAwardReadID : 10000061,
    JJBX_DeferredAwardReadRetID : 10000062,
    JJBX_DeferredAwardRecordID : 10000063,
    JJBX_DeferredAwardPopID : 10000064,
    JJBX_DeferredAwardResetID : 10000065,

	initMsgModel: function()
	{
		var NetworkQueue = require("NetworkQueue");
		var BClass = require("BClass")

        NetworkQueue.AddMsgModelName(BClass.Game, Game_JJBX.JJBX_UserEnterID,           GameMsg_JJBX.JJBX_MSG_UserEnter)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JJBX.JJBX_UserLeaveID,           GameMsg_JJBX.JJBX_MSG_UserLeave)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JJBX.JJBX_UserStateChangeID,     GameMsg_JJBX.JJBX_MSG_UserStateChange)
   
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JJBX.JJBX_SettingID,             GameMsg_JJBX.JJBX_MSG_Setting)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JJBX.JJBX_GameReelSettingID,     GameMsg_JJBX.JJBX_MSG_ReelSetting)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JJBX.JJBX_StatusID,              GameMsg_JJBX.JJBX_MSG_Status)
       
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JJBX.JJBX_ActionSpinID,          GameMsg_JJBX.JJBX_MSG_Spin)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JJBX.JJBX_BetStatusID,           GameMsg_JJBX.JJBX_MSG_BetStatus)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JJBX.JJBX_GameResultID,          GameMsg_JJBX.JJBX_MSG_GameResult)
           
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JJBX.JJBX_JackpotPoolRetID,      GameMsg_JJBX.JJBX_MSG_JackpotPool)
       
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JJBX.JJBX_LoadHistoryID,         GameMsg_JJBX.JJBX_MSG_GameLogRead)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JJBX.JJBX_LoadHistoryRetID,      GameMsg_JJBX.JJBX_MSG_GameLogRecord)
       
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JJBX.JJBX_LeftFreeGameID,        GameMsg_JJBX.JJBX_MSG_LeftFreeGameData)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JJBX.JJBX_LightningPrepareID,    GameMsg_JJBX.JJBX_MSG_LightningPrepare)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JJBX.JJBX_LightningResultID,     GameMsg_JJBX.JJBX_MSG_LightningResult)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JJBX.JJBX_ActionLightningSpinID, GameMsg_JJBX.JJBX_MSG_LightningShow)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JJBX.JJBX_SelectGameOptionsID,   GameMsg_JJBX.JJBX_MSG_ChooseGameOptions)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JJBX.JJBX_ActionChooseGameID,    GameMsg_JJBX.JJBX_MSG_ChooseGame)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JJBX.JJBX_BonusGameID,           GameMsg_JJBX.JJBX_MSG_BonusGame)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JJBX.JJBX_PickBonusID,           GameMsg_JJBX.JJBX_MSG_PickBonus)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JJBX.JJBX_PickBonusRetID,        GameMsg_JJBX.JJBX_MSG_PickBonus)
	},
};

module.exports = Game_JJBX
