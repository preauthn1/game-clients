import { GameMsg_BJL } from "GameMsg_BJL" //这里引入文件,msg为package的包名

var Game_BJL = {

    BJLSettingID : 10001,
    BJLStateID : 10002,
    BJLBetID : 10003,
    BJLBroadCastBetID : 10004,
    BJLGameResultPokerID : 10005,
    BJLGameSceneID : 10006,
    BJLGameResultWinID : 10007,
    BJLBetInfoID : 10008,
    BJLBetRetID : 10009,
    BJLShangZhuangID : 10010,
    BJLShangZhuangRetID : 10011,
    BJLGetShangZhuangListID : 10012,
    BJLShangZhuangListInfoID : 10013,
    BJLZhuangInfoID : 10014,
    BJLBetClearID : 10015,
    BJLResultCardListID : 10016,
    BJLBetClearRetID : 10017,
    BJLRichestListID : 10018,
    BJLLuckyStarListID : 10019,
    BJLRoundID : 10020,
    UserActionCommitID : 11,

    initMsgModel: function()
    {
        var NetworkQueue = require("NetworkQueue");
        var BClass = require("BClass")
    
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BJL.BJLSettingID, GameMsg_BJL.BJL_Setting)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BJL.BJLStateID, GameMsg_BJL.BJL_Sate)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BJL.BJLBetID, GameMsg_BJL.BJL_BetArr)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BJL.BJLBroadCastBetID, GameMsg_BJL.BJL_BroadCastBetArr)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BJL.BJLGameResultPokerID, GameMsg_BJL.BJL_GameResultPoker)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BJL.BJLGameResultWinID, GameMsg_BJL.BJL_GameResultUserMoney)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BJL.BJLBetInfoID, GameMsg_BJL.BJL_UserBetInfo)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BJL.BJLBetRetID, GameMsg_BJL.BJL_BetRet)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BJL.BJLShangZhuangID, GameMsg_BJL.BJL_ShangZhuang)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BJL.BJLShangZhuangRetID, GameMsg_BJL.BJL_ShangzhuangRet)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BJL.BJLShangZhuangListInfoID, GameMsg_BJL.BJL_ZhuangList)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BJL.BJLZhuangInfoID, GameMsg_BJL.BJL_ZhuangInfo)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BJL.BJLResultCardListID, GameMsg_BJL.BJL_ResultCardList)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BJL.BJLBetClearRetID, GameMsg_BJL.BJL_BetClearRet)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BJL.BJLRichestListID, GameMsg_BJL.BJL_RichestList)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BJL.BJLLuckyStarListID, GameMsg_BJL.BJL_LuckyStar)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BJL.BJLRoundID, GameMsg_BJL.BJL_RoundID)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BJL.UserActionCommitID, GameMsg_BJL.UserActionCommited)
    }
};

module.exports = Game_BJL;