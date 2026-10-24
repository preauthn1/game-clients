import { GameMsg } from "./Msg/GameMsg" //这里引入文件,msg为package的包名

var Game = {

    TestGameChatID : 1,
    TestGameScoreID : 2,
    TestGameEndID : 3,
    UserEnterID : 4,
    UserLeaveID : 5,
    UserStateChangeID : 6,
    GameStartID : 7,
    GameEndID : 8,
    UserPokerID : 9,
    GamePokerID : 10,
    UserActionCommitID : 11,
    AllUserActionCommitID : 12,
    UserRecoverID : 13,
    LookOnUserNotifyID : 14,
    UserLuckScoreID : 15,
    UserLuckScoreRetID : 16,
    GameBeginCountDownID : 25,
    GameBeginCountDownStopID : 26,
    SuperToolAddChangeLogID : 27,
    SuperToolAssignRewardID : 28,
    SuperToolGetAssignRewardDetailID : 29,
    SuperToolGetAssignRewardDetailRetID : 30,
    SuperToolUpdAssignRewardDetailID : 31,
    SuperToolGetVipUserID : 32,
    SuperToolGetVipUserRetID : 33,
    SuperToolUpdVipUserID : 34,
    SuperToolFishGetSystemRewardDetailID : 35,
    SuperToolFishGetSystemRewardDetailRet : 36,
    SuperToolFishUpdSystemRewardID : 37,
    SuperToolFishUpdSystemRewardRetID : 38,
    SuperToolFishUpdVIPUserRewardID : 39,
    SuperToolFishUpdVIPUserRewardRetID : 40,
    SuperToolZjhGetVipUserID : 41,
    SuperToolZjhGetVipUserRetID : 42,
    SuperToolZjhUpdVipUserID : 43,
    FishSysPoolID : 45,
    FishSysPoolRetID : 46,
    FishPlayerPoolID : 47,
    FishPlayerPoolRetID : 48,
    GetBeginnerOfferID : 49,
    GetBeginnerOfferRetID : 50,
    UpdateBeginnerOfferID : 51,
    GameCompetitionStartID : 52,
    GameCompetitionStartRetID : 53,
    GameUpdateUserJackpotBox : 54,
    SlotFreeSpinID : 55,
    SlotFreeSpinRetID : 56,
    SlotFreeSpinDetailID : 57,
    SlotJackpotNoLinkID : 58,
    SlotJackpotNoLinkRetID : 59,
    SlotJackpotLinkID : 60,
    SlotJackpotLinkRetID : 61,
    SlotAddGameLogID : 62,
    SlotGetGameLogID : 63,
    SlotSendGameLogID : 64,

    initMsgModel: function()
    {
        var NetworkQueue = require("NetworkQueue");
        var BClass = require("BClass")
                
        NetworkQueue.AddMsgModelName(BClass.Game, Game.UserStateChangeID, GameMsg.UserStateChange)
        NetworkQueue.AddMsgModelName(BClass.Game, Game.UserEnterID, GameMsg.UserEnter)
        NetworkQueue.AddMsgModelName(BClass.Game, Game.UserLeaveID, GameMsg.UserLeave)
        NetworkQueue.AddMsgModelName(BClass.Game, Game.UserPokerID, GameMsg.UserPoker)
        NetworkQueue.AddMsgModelName(BClass.Game, Game.UserActionCommitID, GameMsg.UserActionCommited)
        NetworkQueue.AddMsgModelName(BClass.Game, Game.AllUserActionCommitID, GameMsg.AllUserActionCommited)
        NetworkQueue.AddMsgModelName(BClass.Game, Game.LookOnUserNotifyID, GameMsg.LookOnUserNotify)
    },
};

module.exports = Game;        