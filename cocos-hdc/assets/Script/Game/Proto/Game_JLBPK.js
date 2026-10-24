import { GameMsg_JLBPK } from "GameMsg_JLBPK" //这里引入文件,msg为package的包名

var Game_JLBPK = {
    GameInfo : 10001,
    AllUserInfo : 10002,
    WaitingStart : 10003,
    StartBettingAnimation : 10004,
    StartBettingAnimationOK : 10005,
    UserBettingStart : 10006,
    Bet : 10007,
    BetResult : 10008,
    StopBettingAnimation : 10009,
    StopBettingAnimationOK : 10010,
    Deal : 10011,
    DealOk : 10012,
    DoubleBetStart : 10013,
    DoubleBet : 10014,
    DoubleBetResult : 10015,
    FoldCard : 10016,
    UserFoldCard : 10017,
    ShowCards : 10018,
    ShowCardsOK : 10019,
    Compensate_BetBase : 10020,
    Compensate_BetBase_OK : 10021,
    Compensate_DoubleBet : 10022,
    Compensate_DoubleBet_OK : 10023,
    UpdateJackpot : 10024,
    Settlement : 10025,
    SettlementOK : 10026,


    initMsgModel: function()
    {
        var NetworkQueue = require("NetworkQueue");
        var BClass = require("BClass")
    
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JLBPK.GameInfo, GameMsg_JLBPK.JLBPK_GameInfo)	
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JLBPK.AllUserInfo, GameMsg_JLBPK.JLBPK_AllUserInfo)	
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JLBPK.WaitingStart, GameMsg_JLBPK.JLBPK_WaitingStart)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JLBPK.UserBettingStart, GameMsg_JLBPK.JLBPK_UserBettingStart)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JLBPK.Bet, GameMsg_JLBPK.JLBPK_Bet)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JLBPK.BetResult, GameMsg_JLBPK.JLBPK_BetResult)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JLBPK.Deal, GameMsg_JLBPK.JLBPK_Deal)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JLBPK.DoubleBetStart, GameMsg_JLBPK.JLBPK_DoubleBetStart)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JLBPK.DoubleBetResult, GameMsg_JLBPK.JLBPK_DoubleBetResult)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JLBPK.UserFoldCard, GameMsg_JLBPK.JLBPK_UserFoldCard)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JLBPK.ShowCards, GameMsg_JLBPK.JLBPK_ShowCards)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JLBPK.Compensate_BetBase, GameMsg_JLBPK.JLBPK_Compensate_BetBase)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JLBPK.Compensate_DoubleBet, GameMsg_JLBPK.JLBPK_Compensate_DoubleBet)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JLBPK.UpdateJackpot, GameMsg_JLBPK.JLBPK_UpdateJackpot)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_JLBPK.Settlement, GameMsg_JLBPK.JLBPK_Settlement)
    }
};

module.exports = Game_JLBPK;