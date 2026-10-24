import { GameMsg_HYXM } from "GameMsg_HYXM" //这里引入文件,msg为package的包名

var Game_HYXM = {
	UserEnterID : 4,
	UserLeaveID : 5,
	UserStateChangeID : 6,
	GameStartID : 7,
	GameEndID : 8,
	XMBX_LightningPrepareID : 10001,
	XMBX_LightningResultID : 10002,
	XMBX_ActionLightningSpinID : 11001,
	XMBX_LightningReadID : 10030001,
	XMBX_LightningReadRetID : 10030002,
	XMBX_LightningRecordID : 10030003,
	XMBX_SettingID : 20001,
	XMBX_StatusID : 20002,
	XMBX_BetStatusID : 20003,
	XMBX_GameResultID : 20004,
	XMBX_LeftFreeGameID : 20005,
	XMBX_ActionSpinID : 21001,
	XMBX_LoadHistoryID : 22001,
	XMBX_LoadHistoryRetID : 22002,
	XMBX_JackpotPoolID : 22003,
	XMBX_JackpotPoolRetID : 22004,
	XMBX_BonusGameID : 22005,
	XMBX_BonusGameRetID : 22006,
	
    initMsgModel: function()
    {
        var NetworkQueue = require("NetworkQueue");
        var BClass = require("BClass")

        NetworkQueue.AddMsgModelName(BClass.Game, Game_HYXM.UserEnterID,				GameMsg_HYXM.XMBX_MSG_UserEnter)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_HYXM.UserLeaveID,            	GameMsg_HYXM.XMBX_MSG_UserLeave)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_HYXM.UserStateChangeID,			GameMsg_HYXM.XMBX_MSG_UserStateChange)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_HYXM.XMBX_SettingID,				GameMsg_HYXM.XMBX_MSG_Setting)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_HYXM.XMBX_StatusID,      		GameMsg_HYXM.XMBX_MSG_Status)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_HYXM.XMBX_ActionSpinID,			GameMsg_HYXM.XMBX_MSG_Spin)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_HYXM.XMBX_BetStatusID,			GameMsg_HYXM.XMBX_MSG_BetStatus)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_HYXM.XMBX_GameResultID,			GameMsg_HYXM.XMBX_MSG_GameResult)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_HYXM.XMBX_LeftFreeGameID,    	GameMsg_HYXM.XMBX_MSG_LeftFreeGameData)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_HYXM.XMBX_BonusGameID,			GameMsg_HYXM.XMBX_MSG_BonusGame)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_HYXM.XMBX_BonusGameRetID,		GameMsg_HYXM.XMBX_MSG_BonusGame)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_HYXM.XMBX_JackpotPoolID,			GameMsg_HYXM.XMBX_MSG_GetJackpot)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_HYXM.XMBX_JackpotPoolRetID,		GameMsg_HYXM.XMBX_MSG_JackpotPool)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_HYXM.XMBX_LoadHistoryID,			GameMsg_HYXM.XMBX_MSG_GameLogRead)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_HYXM.XMBX_LoadHistoryRetID,  	GameMsg_HYXM.XMBX_MSG_GameLogRecord)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_HYXM.XMBX_LightningPrepareID,	GameMsg_HYXM.XMBX_MSG_LightningPrepare)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_HYXM.XMBX_LightningResultID,		GameMsg_HYXM.XMBX_MSG_LightningResult)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_HYXM.XMBX_ActionLightningSpinID,	GameMsg_HYXM.XMBX_MSG_LightningShow)

    },
};

module.exports = Game_HYXM
