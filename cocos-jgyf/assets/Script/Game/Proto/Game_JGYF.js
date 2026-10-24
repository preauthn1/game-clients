import { GameMsg_JGYF } from "GameMsg_JGYF" //这里引入文件,msg为package的包名

var Game_JGYF = {

    JGYF_UserEnterID : 4,
    JGYF_UserLeaveID : 5,
    JGYF_UserStateChangeID : 6,
    JGYF_GameStartID : 7,
    JGYF_GameEndID : 8,
    JGYF_SettingID : 20001,
    JGYF_StatusID : 20002,
    JGYF_BetStatusID : 20003,
    JGYF_GameResultID : 20004,
    JGYF_LeftFreeGameID : 20005,
    JGYF_LightningPrepareID : 20006,
    JGYF_LightningResultID : 20007,
    JGYF_SelectGameOptionsID : 20008,
    JGYF_BonusGameID : 20009,
    JGYF_GameReelSettingID : 20010,
    JGYF_IncreaseGameTimesID : 20011,
    JGYF_ActionSpinID : 21001,
    JGYF_ActionLightningSpinID : 21002,
    JGYF_ActionChooseGameID : 21003,
    JGYF_LoadHistoryID : 22001,
    JGYF_LoadHistoryRetID : 22002,
    JGYF_JackpotPoolID : 22003,
    JGYF_JackpotPoolRetID : 22004,
    JGYF_PickBonusID : 22005,
    JGYF_PickBonusRetID : 22006,

	initMsgModel: function()
	{
		var NetworkQueue = require("NetworkQueue");
		var BClass = require("BClass")

        NetworkQueue.AddMsgModelName(BClass.Game, Game_JGYF.JGYF_SettingID,             GameMsg_JGYF.JGYF_MSG_Setting)//设置相关
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JGYF.JGYF_ActionSpinID,          GameMsg_JGYF.JGYF_MSG_Spin)//遊戲開始 [無用]
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JGYF.JGYF_GameResultID,          GameMsg_JGYF.JGYF_MSG_GameResult)//遊戲結果
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JGYF.JGYF_StatusID,              GameMsg_JGYF.JGYF_MSG_Status)//遊戲狀態
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JGYF.JGYF_JackpotPoolID,         GameMsg_JGYF.JGYF_MSG_GetJackpot)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JGYF.JGYF_JackpotPoolRetID,      GameMsg_JGYF.JGYF_MSG_JackpotPool)//更新ClientJackpot值
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JGYF.JGYF_BetStatusID,           GameMsg_JGYF.JGYF_MSG_BetStatus)//S2C下注結果
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JGYF.JGYF_BonusGameID,           GameMsg_JGYF.JGYF_MSG_BonusGame)//進入BonusGame
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JGYF.JGYF_PickBonusID,           GameMsg_JGYF.JGYF_MSG_PickBonus)//選擇BonusGame
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JGYF.JGYF_PickBonusRetID,        GameMsg_JGYF.JGYF_MSG_PickBonus)//進入BonusGame
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JGYF.JGYF_LoadHistoryID,         GameMsg_JGYF.JGYF_MSG_GameLogRead)//查詢遊戲歷程紀錄
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JGYF.JGYF_LoadHistoryRetID,      GameMsg_JGYF.JGYF_MSG_GameLogRecord)//查詢歷程紀錄結果
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JGYF.JGYF_SelectGameOptionsID,   GameMsg_JGYF.JGYF_MSG_ChooseGameOptions)//查詢歷程紀錄結果
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JGYF.JGYF_ActionChooseGameID,    GameMsg_JGYF.JGYF_MSG_ChooseGame)//[訊息] 玩家選擇哪種免費遊戲 Client to Server -> WLJR_ActionChooseGameID = 21003
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JGYF.JGYF_LeftFreeGameID,        GameMsg_JGYF.JGYF_MSG_LeftFreeGameData)//[訊息] 剩餘免費遊戲資訊 Server to Client -> WLJR_LeftFreeGameID = 20005

	},
};

module.exports = Game_JGYF
