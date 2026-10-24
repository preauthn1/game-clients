import { GameMsg_LHD } from "GameMsg_LHD" //这里引入文件,msg为package的包名

var Game_XLHD={
    XLHDSettingID:10001,
    XLHDStateID:10002,
    XLHDBetID:10003,
    XLHDBroadCastBetID:10004,
    XLHDGameResultPokerID:10005,
    XLHDGameSceneID:10006,
    XLHDGameResultWinID:10007,
    XLHDBetInfoID:10008,
    XLHDBetRetID:10009,
    XLHDShangZhuangID:10010,
    XLHDShangZhuangRetID:10011,
    XLHDGetShangZhuangListID:10012,
    XLHDShangZhuangListInfoID:10013,
    XLHDZhuangInfoID:10014,
    XLHDBetClearID:10015,
    XLHDResultCardListID:10016,
    XLHDBetClearRetID:10017,
    XLHDRichestListID:10018,
    XLHDLuckyStarListID:10019,
    XLHDRoundID:10020,

    initMsgModel: function()
    {
        var NetworkQueue = require("NetworkQueue");
        var BClass = require("BClass")
        
        NetworkQueue.AddMsgModelName(BClass.Game, Game_XLHD.XLHDSettingID, GameMsg_LHD.LHD_Setting)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_XLHD.XLHDStateID, GameMsg_LHD.LHD_Sate)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_XLHD.XLHDBetID, GameMsg_LHD.LHD_BetArr)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_XLHD.XLHDBroadCastBetID, GameMsg_LHD.LHD_BroadCastBetArr)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_XLHD.XLHDGameResultPokerID, GameMsg_LHD.LHD_GameResultPoker)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_XLHD.XLHDGameResultWinID, GameMsg_LHD.LHD_GameResultUserMoney)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_XLHD.XLHDBetInfoID, GameMsg_LHD.LHD_UserBetInfo)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_XLHD.XLHDBetRetID, GameMsg_LHD.LHD_BetRet)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_XLHD.XLHDShangZhuangID, GameMsg_LHD.LHD_ShangZhuang)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_XLHD.XLHDShangZhuangRetID, GameMsg_LHD.LHD_ShangzhuangRet)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_XLHD.XLHDShangZhuangListInfoID, GameMsg_LHD.LHD_ZhuangList)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_XLHD.XLHDZhuangInfoID, GameMsg_LHD.LHD_ZhuangInfo)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_XLHD.XLHDResultCardListID, GameMsg_LHD.LHD_ResultCardList)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_XLHD.XLHDBetClearRetID, GameMsg_LHD.LHD_BetClearRet)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_XLHD.XLHDRichestListID, GameMsg_LHD.LHD_RichestList)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_XLHD.XLHDLuckyStarListID, GameMsg_LHD.LHD_LuckyStar)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_XLHD.XLHDRoundID, GameMsg_LHD.LHD_RoundID)
    }
};

module.exports=Game_XLHD;
