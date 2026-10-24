var G=require("Global");
var GameG=require("GameGlobal");
var Game_FGSB=require("Game_FGSB");
var NetworkQueue=require("NetworkQueue");
var GameLayer=require("GameLayer");
var GameServer=require("GameServer");
var BClass=require("BClass");
// 接收消息table
var fakeServer=false;

var GameModel={
    extends : cc.Component,

    Start() {
        if (fakeServer) {
            GameServer.Start();
        }
        else {
            this.RegMsg();
        }
    },

    //10004 C2S 玩家下注
    FGSB_Bet(data) {
        if (fakeServer) {
            GameServer.Receive(Game_FGSB.FGSB_Bet, data)
        }
        else {
            NetworkQueue.SendMsg(BClass.Game, Game_FGSB.FGSB_Bet, data)
        }
    },

    //10010 C2S 玩家加注
    FGSB_DoubleBet(data) {
        if (fakeServer) {
            GameServer.Receive(Game_FGSB.FGSB_DoubleBet, data)
        }
        else {
            NetworkQueue.SendMsg(BClass.Game, Game_FGSB.FGSB_DoubleBet, data)
        }
    },

    //10011 C2S 棄牌
    FGSB_FoldCard(data) {
        if (fakeServer) {
            GameServer.Receive(Game_FGSB.FGSB_FoldCard, data)
        }
        else {
            NetworkQueue.SendMsg(BClass.Game, Game_FGSB.FGSB_FoldCard, data)
        }
    },

    // 10014 C2S 玩家選座位
    FGSB_SelectSeat(data) {
        if (fakeServer) {
            GameServer.Receive(Game_FGSB.FGSB_SelectSeat, data)
        }
        else {
            NetworkQueue.SendMsg(BClass.Game, Game_FGSB.FGSB_SelectSeat, data)
        }
    },

    //動畫播放完成
    FGSB_UserActionCommitID(data) {
        if (fakeServer) {
            GameServer.Receive(Game_FGSB.FGSB_UserActionCommitID, data);
        }
        else {
            NetworkQueue.SendMsg(BClass.Game, Game_FGSB.FGSB_UserActionCommitID, data);
        }
    },

    RegMsg() {
        var pojectName=GameG.GetGameName();
        // 10001牌局資訊，於玩家進入牌局或斷線重連時傳送

        NetworkQueue.RegMsgHook(BClass.Game, Game_FGSB.FGSB_GameInfo, function (data) {GameLayer.FGSB_GameInfo(data)}, pojectName);
        NetworkQueue.RegMsgHook(BClass.Game, Game_FGSB.FGSB_AllUserInfo, function (data) {GameLayer.FGSB_AllUserInfo(data)}, pojectName);
        NetworkQueue.RegMsgHook(BClass.Game, Game_FGSB.FGSB_UserBettingStart, function (data) {GameLayer.FGSB_UserBettingStart(data)}, pojectName);
        NetworkQueue.RegMsgHook(BClass.Game, Game_FGSB.FGSB_BetResult, function (data) {GameLayer.FGSB_BetResult(data)}, pojectName);
        NetworkQueue.RegMsgHook(BClass.Game, Game_FGSB.FGSB_StopBettingAnimation, function (data) { GameLayer.FGSB_StopBettingAnimation(data) }, pojectName);
        NetworkQueue.RegMsgHook(BClass.Game, Game_FGSB.FGSB_Deal, function (data) {GameLayer.FGSB_Deal(data)}, pojectName);
        NetworkQueue.RegMsgHook(BClass.Game, Game_FGSB.FGSB_SideSettlement, function (data) {GameLayer.FGSB_SideSettlement(data)}, pojectName);
        NetworkQueue.RegMsgHook(BClass.Game, Game_FGSB.FGSB_DoubleBetStart, function (data) {GameLayer.FGSB_DoubleBetStart(data)}, pojectName);
        NetworkQueue.RegMsgHook(BClass.Game, Game_FGSB.FGSB_DoubleBetResult, function (data) {GameLayer.FGSB_DoubleBetResult(data)}, pojectName);
        NetworkQueue.RegMsgHook(BClass.Game, Game_FGSB.FGSB_Settlement, function (data) {GameLayer.FGSB_Settlement(data)}, pojectName);
        NetworkQueue.RegMsgHook(BClass.Game, Game_FGSB.FGSB_SelectSeat_OK, function (data) {GameLayer.FGSB_SelectSeat_OK(data)}, pojectName);
        NetworkQueue.RegMsgHook(BClass.Game, Game_FGSB.FGSB_KickTip, function (data) {GameLayer.FGSB_KickTip(data)}, pojectName);
        NetworkQueue.RegMsgHook(BClass.Game, Game_FGSB.FGSB_WatchUserCountID, function (data) {GameLayer.FGSB_WatchUserCountID(data)}, pojectName);

        // 注册游戏场景初始化方法,只有在断线重连时有意义
        //   G.Service.Game.RegNotifyGameSceneInit( function() GameSceneDestory() end )
    },

    //10001 S2C牌局資訊，於玩家進入牌局或斷線重連時傳送
    FGSB_GameInfo(data) {
        GameG.Print("FGSB_GameInfo", data);
        GameLayer.FGSB_GameInfo(data)
    },

    //10002 S2C 玩家資訊，當玩家人數或狀態有變動時傳送
    FGSB_AllUserInfo(data) {
        GameG.Print("FGSB_AllUserInfo", data);
        GameLayer.FGSB_AllUserInfo(data)
    },

    //10003 S2C 玩家開始下注
    FGSB_UserBettingStart(data) {
        GameG.Print("FGSB_UserBettingStart", data);
        GameLayer.FGSB_UserBettingStart(data)
    },

    //10005 S2C 玩家下注結果
    FGSB_BetResult(data) {
        GameG.Print("FGSB_BetResult", data);
        GameLayer.FGSB_BetResult(data)
    },

    //10006  S2C 播放停止下注動畫
    FGSB_StopBettingAnimation(data) {
        GameG.Print("FGSB_StopBettingAnimation", data);
        GameLayer.FGSB_StopBettingAnimation(data)
    },

    //10007 S2C 發牌
    FGSB_Deal(data) {
        GameG.Print("FGSB_Deal", data);
        GameLayer.FGSB_Deal(data)
    },

    //10008 S2C 邊注、特殊牌型結算
    FGSB_SideSettlement(data) {
        GameG.Print("FGSB_SideSettlement", data);
        GameLayer.FGSB_SideSettlement(data)
    },

    //10009 S2C 玩家開始加注
    FGSB_DoubleBetStart(data) {
        GameG.Print("FGSB_DoubleBetStart", data);
        GameLayer.FGSB_DoubleBetStart(data)
    },

    //10012 S2C 玩家加注結果
    FGSB_DoubleBetResult(data) {
        GameG.Print("FGSB_DoubleBetResult", data);
        GameLayer.FGSB_DoubleBetResult(data)
    },

    //10013 S2C 總結算
    FGSB_Settlement(data) {
        GameG.Print("FGSB_Settlement", data);
        GameLayer.FGSB_Settlement(data)
    },

    //10015 2C 玩家選座位結果
    FGSB_SelectSeat_OK(data) {
        GameG.Print("FGSB_SelectSeat_OK", data);
        GameLayer.FGSB_SelectSeat_OK(data)
    },

};

module.exports=GameModel;
