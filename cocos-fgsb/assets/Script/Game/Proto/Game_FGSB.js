import { GameMsg_FGSB } from "GameMsg_FGSB" //这里引入文件,msg为package的包名

var Game_FGSB={
    FGSB_GameInfo : 10001,
    FGSB_AllUserInfo : 10002,
    FGSB_UserBettingStart : 10003,
    FGSB_Bet : 10004,
    FGSB_BetResult : 10005,
    FGSB_StopBettingAnimation : 10006,
    FGSB_Deal : 10007,
    FGSB_SideSettlement : 10008,
    FGSB_DoubleBetStart : 10009,
    FGSB_DoubleBet : 10010,
    FGSB_FoldCard : 10011,
    FGSB_DoubleBetResult : 10012,
    FGSB_Settlement : 10013,
    FGSB_SelectSeat : 10014,
    FGSB_SelectSeat_OK : 10015,
    FGSB_KickTip : 10016,
    FGSB_WatchUserCountID : 10017,
    FGSB_UserActionCommitID : 11,

    FGSBRichestListID : 10018,
    FGSBLuckyStarListID : 10019,
    FGSBRoundID : 10020,

    initMsgModel : function () {
        var NetworkQueue=require("NetworkQueue");
        var BClass=require("BClass");

        NetworkQueue.AddMsgModelName(BClass.Game, Game_FGSB.FGSB_GameInfo, GameMsg_FGSB.FGSB_Msg_GameInfo);
        NetworkQueue.AddMsgModelName(BClass.Game, Game_FGSB.FGSB_AllUserInfo, GameMsg_FGSB.FGSB_Msg_AllUserInfo);
        NetworkQueue.AddMsgModelName(BClass.Game, Game_FGSB.FGSB_UserBettingStart, GameMsg_FGSB.FGSB_Msg_UserBettingStart);
        NetworkQueue.AddMsgModelName(BClass.Game, Game_FGSB.FGSB_Bet, GameMsg_FGSB.FGSB_Msg_Bet);
        NetworkQueue.AddMsgModelName(BClass.Game, Game_FGSB.FGSB_BetResult, GameMsg_FGSB.FGSB_Msg_BetResult);
        NetworkQueue.AddMsgModelName(BClass.Game, Game_FGSB.FGSB_StopBettingAnimation, GameMsg_FGSB.FGSB_Msg_StopBettingAnimation);
        NetworkQueue.AddMsgModelName(BClass.Game, Game_FGSB.FGSB_Deal, GameMsg_FGSB.FGSB_Msg_Deal);
        NetworkQueue.AddMsgModelName(BClass.Game, Game_FGSB.FGSB_SideSettlement, GameMsg_FGSB.FGSB_Msg_SideSettlement);
        NetworkQueue.AddMsgModelName(BClass.Game, Game_FGSB.FGSB_DoubleBetStart, GameMsg_FGSB.FGSB_Msg_DoubleBetStart);
        NetworkQueue.AddMsgModelName(BClass.Game, Game_FGSB.FGSB_DoubleBetResult, GameMsg_FGSB.FGSB_Msg_DoubleBetResult);
        NetworkQueue.AddMsgModelName(BClass.Game, Game_FGSB.FGSB_Settlement, GameMsg_FGSB.FGSB_Msg_Settlement);
        NetworkQueue.AddMsgModelName(BClass.Game, Game_FGSB.FGSB_SelectSeat, GameMsg_FGSB.FGSB_Msg_SelectSeat);
        NetworkQueue.AddMsgModelName(BClass.Game, Game_FGSB.FGSB_SelectSeat_OK, GameMsg_FGSB.FGSB_Msg_SelectSeat_OK);
        NetworkQueue.AddMsgModelName(BClass.Game, Game_FGSB.FGSB_KickTip, GameMsg_FGSB.FGSB_Msg_KickTip);
        NetworkQueue.AddMsgModelName(BClass.Game, Game_FGSB.FGSB_UserActionCommitID, GameMsg_FGSB.FGSB_Msg_UserActionCommited);
        NetworkQueue.AddMsgModelName(BClass.Game, Game_FGSB.FGSB_WatchUserCountID, GameMsg_FGSB.FGSB_Msg_WatchUserCount);

    },
};

module.exports=Game_FGSB;
