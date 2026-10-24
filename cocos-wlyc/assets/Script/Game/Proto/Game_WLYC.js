import { GameMsg_WLYC } from "GameMsg_WLYC" //这里引入文件,msg为package的包名

var Game_WLYC = {
    WLZB_GameOptionsID : 10001,
    WLZB_ChooseGameID : 11001,
    WLZB_SettingID : 20001,
    WLZB_StatusID : 20002,
    WLZB_BetStatusID : 20003,
    WLZB_GameResultID : 20004,
    WLZB_LeftFreeGameID : 20005,
    WLZB_ActionSpinID : 21001,
    WLZB_LoadHistoryID : 22001,
    WLZB_LoadHistoryRetID : 22002,
    WLZB_JackpotPoolID : 22003,
    WLZB_JackpotPoolRetID : 22004,
    WLZB_BonusGameID : 22005,
    WLZB_BonusGameRetID : 22006,

	initMsgModel: function()
	{
		var NetworkQueue = require("NetworkQueue");
		var BClass = require("BClass")

        NetworkQueue.AddMsgModelName(BClass.Game, Game_WLYC.WLZB_GameOptionsID,     GameMsg_WLYC.WLZB_MSG_ChooseGameOptions)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_WLYC.WLZB_ChooseGameID,      GameMsg_WLYC.WLZB_MSG_ChooseGame)

        NetworkQueue.AddMsgModelName(BClass.Game, Game_WLYC.WLZB_SettingID,         GameMsg_WLYC.WLZB_MSG_Setting)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_WLYC.WLZB_StatusID,          GameMsg_WLYC.WLZB_MSG_Status)

        NetworkQueue.AddMsgModelName(BClass.Game, Game_WLYC.WLZB_BetStatusID,       GameMsg_WLYC.WLZB_MSG_BetStatus)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_WLYC.WLZB_GameResultID,      GameMsg_WLYC.WLZB_MSG_GameResult)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_WLYC.WLZB_LeftFreeGameID,    GameMsg_WLYC.WLZB_MSG_LeftFreeGameData)

        NetworkQueue.AddMsgModelName(BClass.Game, Game_WLYC.WLZB_ActionSpinID,      GameMsg_WLYC.WLZB_MSG_Spin)

        NetworkQueue.AddMsgModelName(BClass.Game, Game_WLYC.WLZB_LoadHistoryID,     GameMsg_WLYC.WLZB_MSG_GameLogRead)           
        NetworkQueue.AddMsgModelName(BClass.Game, Game_WLYC.WLZB_LoadHistoryRetID,  GameMsg_WLYC.WLZB_MSG_GameLogRecord)

	},
};

module.exports = Game_WLYC
