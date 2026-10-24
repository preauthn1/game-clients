import { GameMsg_DCZZ } from "GameMsg_DCZZ"; //这里引入文件,msg为package的包名
const Game    = require("../../Base/Proto/Game");
const GameMsg = require("../../Base/Proto/Msg/GameMsg");

var Game_DCZZ = {
    DCZZ_GameInfo                : 10001,
    DCZZ_AllUserInfo             : 10002,
    DCZZ_WaitingStart            : 10003,
    DCZZ_Shuffle                 : 10004,
    DCZZ_ShuffleOK               : 10005,
    DCZZ_StartBetting            : 10006,
    DCZZ_Bet                     : 10007,
    DCZZ_BetResult               : 10008,
    DCZZ_StopBetting             : 10009,
    DCZZ_StopBettingAnimationOK  : 10010,
    DCZZ_Deal_Normal             : 10011,
    DCZZ_DealAnimationOK_Normal  : 10012,
    DCZZ_Settlement_Normal       : 10013,
    DCZZ_Settlement_Normal_OK    : 10014,
    DCZZ_WarPhase                : 10015,
    DCZZ_WarPhaseSelection       : 10016,
    DCZZ_WarPhaseselectionResult : 10017,
    DCZZ_WarPhaseBegin           : 10018,
    DCZZ_WarPhaseAnimationOK     : 10019,
    DCZZ_Deal_War                : 10020,
    DCZZ_DealAnimationOK_War     : 10021,
    DCZZ_Settlement_War          : 10022,
    DCZZ_Settlement_War_OK       : 10023,
    DCZZ_GameOver                : 10024,
    
    initMsgModel : function(){
        var NetworkQueue = require("NetworkQueue");
        var BClass       = require("BClass");
        // 後來的遊戲有用到 有用到的話加一下
        // NetworkQueue.AddMsgModelName(BClass.Game, Game.RequestLoginBonusRetID, GameMsg_DCZZ.LoginBonusData);
        NetworkQueue.AddMsgModelName(BClass.Game, Game.GameBeginCountDownID, GameMsg.GameBeginCountDown);
        
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DCZZ.DCZZ_GameInfo, GameMsg_DCZZ.DCZZ_Msg_GameInfo);
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DCZZ.DCZZ_AllUserInfo, GameMsg_DCZZ.DCZZ_Msg_AllUserInfo);
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DCZZ.DCZZ_WaitingStart, GameMsg_DCZZ.DCZZ_Msg_WaitingStart);
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DCZZ.DCZZ_StartBetting, GameMsg_DCZZ.DCZZ_Msg_StartBetting);
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DCZZ.DCZZ_Bet, GameMsg_DCZZ.DCZZ_Msg_Bet);
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DCZZ.DCZZ_BetResult, GameMsg_DCZZ.DCZZ_Msg_BetResult);
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DCZZ.DCZZ_Deal_Normal, GameMsg_DCZZ.DCZZ_Msg_Deal_Normal);
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DCZZ.DCZZ_Settlement_Normal, GameMsg_DCZZ.DCZZ_Msg_Settlement_Normal);
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DCZZ.DCZZ_WarPhase, GameMsg_DCZZ.DCZZ_Msg_WarPhase);
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DCZZ.DCZZ_WarPhaseSelection, GameMsg_DCZZ.DCZZ_Msg_WarPhaseSelection);
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DCZZ.DCZZ_WarPhaseselectionResult, GameMsg_DCZZ.DCZZ_Msg_WarPhaseselectionResult);
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DCZZ.DCZZ_Deal_War, GameMsg_DCZZ.DCZZ_Msg_Deal_War);
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DCZZ.DCZZ_Settlement_War, GameMsg_DCZZ.DCZZ_Msg_Settlement_War);
        
        // NetworkQueue.AddMsgModelName(BClass.Game, Game_DCZZ.DCZZ_Shuffle, GameMsg_DCZZ.DCZZ_Msg);
        // NetworkQueue.AddMsgModelName(BClass.Game, Game_DCZZ.DCZZ_ShuffleOK, );//DCZZ_StartBetting()
        // NetworkQueue.AddMsgModelName(BClass.Game, Game_DCZZ.DCZZ_StopBetting, GameMsg_DCZZ.DCZZ_Msg);
        // NetworkQueue.AddMsgModelName(BClass.Game, Game_DCZZ.DCZZ_StopBettingAnimationOK, GameMsg_DCZZ.DCZZ_Msg);
        // NetworkQueue.AddMsgModelName(BClass.Game, Game_DCZZ.DCZZ_DealAnimationOK_Normal, GameMsg_DCZZ.DCZZ_Msg);
        // NetworkQueue.AddMsgModelName(BClass.Game, Game_DCZZ.DCZZ_Settlement_Normal_OK, GameMsg_DCZZ.DCZZ_Msg);
        // NetworkQueue.AddMsgModelName(BClass.Game, Game_DCZZ.DCZZ_WarPhaseBegin, GameMsg_DCZZ.DCZZ_Msg);
        // NetworkQueue.AddMsgModelName(BClass.Game, Game_DCZZ.DCZZ_WarPhaseAnimationOK, GameMsg_DCZZ.DCZZ_Msg);
        // NetworkQueue.AddMsgModelName(BClass.Game, Game_DCZZ.DCZZ_DealAnimationOK_War, GameMsg_DCZZ.DCZZ_Msg);
        // NetworkQueue.AddMsgModelName(BClass.Game, Game_DCZZ.DCZZ_Settlement_War_OK, GameMsg_DCZZ.DCZZ_Msg);
        // NetworkQueue.AddMsgModelName(BClass.Game, Game_DCZZ.DCZZ_GameOver, GameMsg_DCZZ.DCZZ_Msg);
        
    },
};

module.exports = Game_DCZZ;
