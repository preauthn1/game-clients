import { GameMsg_CSDJP } from "GameMsg_CSDJP" //这里引入文件,msg为package的包名

var Game_CSDJP = {
    CSDJP_UserEnterID : 4,
    CSDJP_UserLeaveID : 5,
    CSDJP_UserStateChangeID : 6,
    CSDJP_GameStartID : 7,
    CSDJP_GameEndID : 8,
    CSDJP_SettingID : 20001,
    CSDJP_StatusID : 20002,
    CSDJP_BetStatusID : 20003,
    CSDJP_GameResultID : 20004,
    CSDJP_LeftFreeGameID : 20005,
    CSDJP_LightningPrepareID : 20006,
    CSDJP_LightningResultID : 20007,
    CSDJP_SelectGameOptionsID : 20008,
    CSDJP_BonusGameID : 20009,
    CSDJP_GameReelSettingID : 20010,
    CSDJP_IncreaseGameTimesID : 20011,
    CSDJP_ActionSpinID : 21001,
    CSDJP_ActionLightningSpinID : 21002,
    CSDJP_ActionChooseGameID : 21003,
    CSDJP_LoadHistoryID : 22001,
    CSDJP_LoadHistoryRetID : 22002,
    CSDJP_JackpotPoolID : 22003,
    CSDJP_JackpotPoolRetID : 22004,
    CSDJP_PickBonusID : 22005,
    CSDJP_PickBonusRetID : 22006,
    CSDJP_SelectGameReadID : 10000001,
    CSDJP_SelectGameReadRetID : 10000002,
    CSDJP_SelectGameRecordID : 10000003,
    CSDJP_FreeGameReadID : 10000011,
    CSDJP_FreeGameReadRetID : 10000012,
    CSDJP_FreeGameRecordID : 10000013,
    CSDJP_JackpotNoLinkReadID : 10000021,
    CSDJP_JackpotNoLinkReadRetID : 10000022,
    CSDJP_JackpotNoLinkRecordID : 10000023,
    CSDJP_GameLogReadID : 10000031,
    CSDJP_GameLogReadRetID : 10000032,
    CSDJP_GameLogAddID : 10000033,
    CSDJP_GameLogBatchAddID : 10000034,
    CSDJP_BonusGameReadID : 10000041,
    CSDJP_BonusGameReadRetID : 10000042,
    CSDJP_BonusGameRecordID : 10000043,
    CSDJP_BonusGameResetID : 10000044,
    CSDJP_LightningReadID : 10000051,
    CSDJP_LightningReadRetID : 10000052,
    CSDJP_LightningRecordID : 10000053,
    CSDJP_DeferredAwardReadID : 10000061,
    CSDJP_DeferredAwardReadRetID : 10000062,
    CSDJP_DeferredAwardRecordID : 10000063,
    CSDJP_DeferredAwardPopID : 10000064,
    CSDJP_DeferredAwardResetID : 10000065,

    initMsgModel: function()
    {
        var NetworkQueue = require("NetworkQueue");
        var BClass = require("BClass")

        NetworkQueue.AddMsgModelName(BClass.Game, Game_CSDJP.CSDJP_SettingID,           GameMsg_CSDJP.WLZBJP_MSG_Setting)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_CSDJP.CSDJP_StatusID,            GameMsg_CSDJP.WLZBJP_MSG_Status)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_CSDJP.CSDJP_BetStatusID,         GameMsg_CSDJP.WLZBJP_MSG_BetStatus)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_CSDJP.CSDJP_GameResultID,        GameMsg_CSDJP.WLZBJP_MSG_GameResult)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_CSDJP.CSDJP_LeftFreeGameID,      GameMsg_CSDJP.WLZBJP_MSG_LeftFreeGameData)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_CSDJP.CSDJP_BonusGameID,         GameMsg_CSDJP.WLZBJP_MSG_BonusGame)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_CSDJP.CSDJP_ActionSpinID,        GameMsg_CSDJP.WLZBJP_MSG_Spin)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_CSDJP.CSDJP_LoadHistoryID,       GameMsg_CSDJP.WLZBJP_MSG_GameLogRead)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_CSDJP.CSDJP_LoadHistoryRetID,    GameMsg_CSDJP.WLZBJP_MSG_GameLogRecord)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_CSDJP.CSDJP_JackpotPoolID,       GameMsg_CSDJP.WLZBJP_MSG_GetJackpot)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_CSDJP.CSDJP_JackpotPoolRetID,    GameMsg_CSDJP.WLZBJP_MSG_JackpotPool)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_CSDJP.CSDJP_SelectGameOptionsID, GameMsg_CSDJP.WLZBJP_MSG_ChooseGameOptions)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_CSDJP.CSDJP_ActionChooseGameID,  GameMsg_CSDJP.WLZBJP_MSG_ChooseGame)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_CSDJP.CSDJP_PickBonusID,         GameMsg_CSDJP.WLZBJP_MSG_PickBonus)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_CSDJP.CSDJP_PickBonusRetID,      GameMsg_CSDJP.WLZBJP_MSG_PickBonus)

    },
};

module.exports = Game_CSDJP
