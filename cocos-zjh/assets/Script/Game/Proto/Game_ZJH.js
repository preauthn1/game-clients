import { GameMsg_ZJH } from "GameMsg_ZJH" //这里引入文件,msg为package的包名

var Game_ZJH = {
    BetBaseId : 10001,
    FaPaiId : 10002,
    WaitOptID : 10003,
    CurrOptID : 10004,
    CheckCardsID : 10005,
    CheckCardsBroadCastID : 10006,
    CardsInfo : 10007,
    CompareID : 10008,
    CompareRetID : 10009,
    DropID : 10010,
    DropBroadCastID : 10011,
    FollowID : 10012,
    FollowBrodCastID : 10013,
    BetAddID : 10014,
    BetAddBrodCastID : 10015,
    GameResultID : 10016,
    ComparePokerID : 10017,
    ZJHGameSceneID : 10018,
    ReadyTime : 10019,
    FollowEndID : 10020,
    EarlyChangeTable : 10021,
    AllinID : 10022,
    AllinRetID : 10023,
    EarlyLeaveTable : 10024,
    GameCurrturn : 10025,
    AllInSettlement : 10026,
    UserCardType : 10027,

    initMsgModel: function()
    {
        var NetworkQueue = require("NetworkQueue");
		var BClass = require("BClass")

        NetworkQueue.AddMsgModelName(BClass.Game, Game_ZJH.BetBaseId, GameMsg_ZJH.ZJH_BetBase)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_ZJH.WaitOptID, GameMsg_ZJH.ZJH_WaitOpt)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_ZJH.CurrOptID, GameMsg_ZJH.ZJH_WaitOptSeat)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_ZJH.CardsInfo, GameMsg_ZJH.UserPoker)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_ZJH.CompareID, GameMsg_ZJH.ZJH_SeatNO)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_ZJH.CompareRetID, GameMsg_ZJH.ZJH_CompareCardsRet)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_ZJH.FollowBrodCastID, GameMsg_ZJH.ZJH_Follow)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_ZJH.BetAddID, GameMsg_ZJH.ZJH_BetAdd)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_ZJH.BetAddBrodCastID, GameMsg_ZJH.ZJH_BetAddBrodCast)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_ZJH.GameResultID, GameMsg_ZJH.ZJH_GameRet)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_ZJH.ZJHGameSceneID, GameMsg_ZJH.ZJH_UserInfoArr)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_ZJH.DropBroadCastID, GameMsg_ZJH.ZJH_SeatNO)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_ZJH.CheckCardsBroadCastID, GameMsg_ZJH.ZJH_SeatNO)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_ZJH.ReadyTime, GameMsg_ZJH.ZJH_ReadyTime)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_ZJH.ComparePokerID, GameMsg_ZJH.ZJH_ComparePoker)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_ZJH.FaPaiId, GameMsg_ZJH.ZJH_FaiPai)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_ZJH.EarlyChangeTable, GameMsg_ZJH.EarlyChangeTable)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_ZJH.AllinRetID, GameMsg_ZJH.ZJH_AllinBrodCast)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_ZJH.GameCurrturn, GameMsg_ZJH.ZJH_Currturn)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_ZJH.DropID, GameMsg_ZJH.ZJH_UserDrop)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_ZJH.UserCardType, GameMsg_ZJH.ZJH_Poker)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_ZJH.AllInSettlement, GameMsg_ZJH.ZJH_ComparePoker)
	},
};

module.exports = Game_ZJH
