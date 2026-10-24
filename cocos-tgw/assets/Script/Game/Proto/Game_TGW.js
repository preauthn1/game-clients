import { GameMsg_TGW } from "GameMsg_TGW" //这里引入文件,msg为package的包名

var Game_TGW = {
	TGW_SettingID : 10001,
	TGW_StatusID : 10002,
	TGW_JackpotPoolID : 10003,
	TGW_BetStatusID : 10004,
	TGW_GameResultID : 10005,
	TGW_BonusGameID : 10006,
	TGW_ActionSpinID : 11001,
	TGW_ReadJackpotPoolID : 11002,
	TGW_LoadHistoryID : 12001,
	TGW_LoadHistoryRetID : 12002,
	TGW_ActionPickID : 12003,
	TGW_ActionPickRetID : 12004,
	TGW_ReadBonusGameID : 13001,
	TGW_ReadBonusGameRetID : 13002,
	TGW_ResetBonusGameID : 13003,
	TGW_RecordBonusGameID : 13004,


    initMsgModel: function()
    {
        var NetworkQueue = require("NetworkQueue");
        var BClass = require("BClass")
    
        NetworkQueue.AddMsgModelName(BClass.Game, Game_TGW.TGW_SettingID, GameMsg_TGW.TGW_MSG_Setting)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_TGW.TGW_StatusID, GameMsg_TGW.TGW_MSG_Status)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_TGW.TGW_JackpotPoolID, GameMsg_TGW.TGW_MSG_JackpotPool)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_TGW.TGW_BetStatusID, GameMsg_TGW.TGW_MSG_BetStatus)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_TGW.TGW_GameResultID, GameMsg_TGW.TGW_MSG_GameResult)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_TGW.TGW_BonusGameID, GameMsg_TGW.TGW_MSG_BonusGame)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_TGW.TGW_ActionSpinID, GameMsg_TGW.TGW_MSG_Spin)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_TGW.TGW_ActionPickID, GameMsg_TGW.TGW_MSG_Pick)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_TGW.TGW_ActionPickRetID, GameMsg_TGW.TGW_MSG_PickRet)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_TGW.TGW_LoadHistoryID, GameMsg_TGW.TGW_LoadHistoryData)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_TGW.TGW_LoadHistoryRetID, GameMsg_TGW.TGW_SendHistoryData)
    }
};

module.exports = Game_TGW
