import { GameMsg_DFDC } from "GameMsg_DFDC" //这里引入文件,msg为package的包名

var Game_DFDC = {

    DFDCSettingID : 10001,
    DFDCGameStartID : 10002,
    DFDCGameResult : 10003,
    DFDCStateID : 10004,
    DFDCFreeOrPayID : 10005,
    DFDCGetJackpotPoolID : 10006,
    DFDCGetJackpotPoolRetID : 10007,
    DFDCUpdateJackpotPoolID : 10008,
    DFDCJackpotPoolS2CID : 10009,
    DFDCBetRetID : 10010,
    DFDCGoldenSymbolID : 10011,
    DFDCBonusGameID : 10012,
    DFDCBonusGameIconID : 10013,
    DFDCSysPoolID : 10014,
    DFDCSysPoolRetID : 10015,
    DFDCJackpotBonusGameID : 10016,
    DFDCJackpotBonusGameRetID : 10017,
    DFDCJackpotBonusDetailID : 10018,
    DFDCUserRecoverID : 10019,
    DFDC_LoadHistoryID : 22001,
    DFDC_LoadHistoryRetID : 22002,

    initMsgModel: function()
    {
        var NetworkQueue = require("NetworkQueue");
        var BClass = require("BClass")

        NetworkQueue.AddMsgModelName(BClass.Game, Game_DFDC.DFDCSettingID, GameMsg_DFDC.DFDC_Setting)//设置相关 S2C
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DFDC.DFDCGameStartID, GameMsg_DFDC.DFDC_StartBet)//遊戲開始C2S
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DFDC.DFDCGameResult, GameMsg_DFDC.DFDC_GameResultReel)//遊戲結果S2C
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DFDC.DFDCStateID, GameMsg_DFDC.DFDC_GameStatus)//遊戲狀態S2C
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DFDC.DFDCFreeOrPayID, GameMsg_DFDC.DFDC_FreeOrPayMsg)//遊戲要付費或免費
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DFDC.DFDCJackpotPoolS2CID, GameMsg_DFDC.DFDC_JackpotPoolS2CMsg)//S2C 更新Client Jackpot 值
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DFDC.DFDCBetRetID, GameMsg_DFDC.DFDC_BetRet)//S2C下注結果
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DFDC.DFDCGoldenSymbolID, GameMsg_DFDC.DFDC_GoldenSymbolList)//S2C 黃金符號列表
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DFDC.DFDCBonusGameID, GameMsg_DFDC.DFDC_BonusGame)//S2C 進入Bonus Game
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DFDC.DFDCBonusGameIconID, GameMsg_DFDC.DFDC_BonusGameDetail)//C2S 玩家Bonus Game選擇 
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DFDC.DFDCUserRecoverID, GameMsg_DFDC.DFDC_UserRecover)//S2C 開始遊戲時殘餘資料
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DFDC.DFDC_LoadHistoryID, GameMsg_DFDC.DFDC_MSG_GameLogRead)//C2S 查詢遊戲歷程紀錄
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DFDC.DFDC_LoadHistoryRetID, GameMsg_DFDC.DFDC_MSG_GameLogRecord)//S2C 查詢歷程紀錄結果
        //NetworkQueue.RegMsgHook(BClass.Game, Game_DFDC., "")//        
    }
};

module.exports = Game_DFDC;