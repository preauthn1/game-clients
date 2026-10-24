import { GameMsg_HLJBP } from "GameMsg_HLJBP" //这里引入文件,msg为package的包名

var Game_HLJBP = {
    HLJBP_GameInfo : 10001,
    HLJBP_AllUserInfo : 10002,
    HLJBP_UserBettingStart : 10003,
    HLJBP_Bet : 10004,
    HLJBP_BetResult : 10005,
    HLJBP_Settlement : 10006,
    HLJBP_KickTip : 10007,
    HLJBP_UserActionCommitID : 11,

    initMsgModel: function()
    {
        var NetworkQueue = require("NetworkQueue");
        var BClass = require("BClass")

        NetworkQueue.AddMsgModelName(BClass.Game,Game_HLJBP.HLJBP_GameInfo, GameMsg_HLJBP.HLJBP_Msg_GameInfo)
        NetworkQueue.AddMsgModelName(BClass.Game,Game_HLJBP.HLJBP_AllUserInfo, GameMsg_HLJBP.HLJBP_Msg_AllUserInfo)
        NetworkQueue.AddMsgModelName(BClass.Game,Game_HLJBP.HLJBP_UserBettingStart, GameMsg_HLJBP.HLJBP_Msg_UserBettingStart)
        NetworkQueue.AddMsgModelName(BClass.Game,Game_HLJBP.HLJBP_Bet, GameMsg_HLJBP.HLJBP_Msg_Bet)
        NetworkQueue.AddMsgModelName(BClass.Game,Game_HLJBP.HLJBP_BetResult, GameMsg_HLJBP.HLJBP_Msg_BetResult)
        NetworkQueue.AddMsgModelName(BClass.Game,Game_HLJBP.HLJBP_Settlement, GameMsg_HLJBP.HLJBP_Msg_Settlement)
        NetworkQueue.AddMsgModelName(BClass.Game,Game_HLJBP.HLJBP_KickTip, GameMsg_HLJBP.HLJBP_Msg_KickTip)
        NetworkQueue.AddMsgModelName(BClass.Game,Game_HLJBP.HLJBP_UserActionCommitID, GameMsg_HLJBP.HLJBP_Msg_UserActionCommited)
    }
};

module.exports = Game_HLJBP
