import { GameMsg_LHD } from "GameMsg_LHD" //这里引入文件,msg为package的包名

var Game_LHD = {

    LHDSettingID : 10001,
    LHDStateID : 10002,
    LHDBetID : 10003,
    LHDBroadCastBetID : 10004,
    LHDGameResultPokerID : 10005,
    LHDGameSceneID : 10006,
    LHDGameResultWinID : 10007,
    LHDBetInfoID : 10008,
    LHDBetRetID : 10009,
    LHDShangZhuangID : 10010,
    LHDShangZhuangRetID : 10011,
    LHDGetShangZhuangListID : 10012,
    LHDShangZhuangListInfoID : 10013,
    LHDZhuangInfoID : 10014,
    LHDBetClearID : 10015,
    LHDResultCardListID : 10016,
    LHDBetClearRetID : 10017,
    LHDRichestListID : 10018,
    LHDLuckyStarListID : 10019,
    LHDRoundID : 10020,

    initMsgModel: function()
    {
        var NetworkQueue = require("NetworkQueue");
        var BClass = require("BClass")
    
        NetworkQueue.AddMsgModelName(BClass.Game, Game_LHD.LHDSettingID, GameMsg_LHD.LHD_Setting)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_LHD.LHDStateID, GameMsg_LHD.LHD_Sate)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_LHD.LHDBetID, GameMsg_LHD.LHD_BetArr)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_LHD.LHDBroadCastBetID, GameMsg_LHD.LHD_BroadCastBetArr)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_LHD.LHDGameResultPokerID, GameMsg_LHD.LHD_GameResultPoker)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_LHD.LHDGameResultWinID, GameMsg_LHD.LHD_GameResultUserMoney)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_LHD.LHDBetInfoID, GameMsg_LHD.LHD_UserBetInfo)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_LHD.LHDBetRetID, GameMsg_LHD.LHD_BetRet)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_LHD.LHDShangZhuangID, GameMsg_LHD.LHD_ShangZhuang)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_LHD.LHDShangZhuangRetID, GameMsg_LHD.LHD_ShangzhuangRet)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_LHD.LHDShangZhuangListInfoID, GameMsg_LHD.LHD_ZhuangList)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_LHD.LHDZhuangInfoID, GameMsg_LHD.LHD_ZhuangInfo)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_LHD.LHDResultCardListID, GameMsg_LHD.LHD_ResultCardList)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_LHD.LHDBetClearRetID, GameMsg_LHD.LHD_BetClearRet)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_LHD.LHDRichestListID, GameMsg_LHD.LHD_RichestList)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_LHD.LHDLuckyStarListID, GameMsg_LHD.LHD_LuckyStar)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_LHD.LHDRoundID, GameMsg_LHD.LHD_RoundID)
    }
};

module.exports = Game_LHD;