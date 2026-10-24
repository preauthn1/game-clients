var G            = require("Global");
var gameLayer    = require("GameLayer");
var gameServer   = require("GameServer");
var GameG        = require("GameGlobal");
var NetworkQueue = require("NetworkQueue");
var BClass       = require("BClass");
var Game_DCZZ    = require("Game_DCZZ");
// 假伺服器
var fakeServer   = false;

var GameModel = {
    extends : cc.Component,
    
    Start(){
        if(fakeServer){
            gameServer.Start();
        }else{
            this.RegMsg();
        }
    },
    
    //10005  C2S 洗牌動畫播放完成
    ShuffleOK(data){
        if(fakeServer == false){
            NetworkQueue.SendMsg(BClass.Game, Game_DCZZ.DCZZ_ShuffleOK, data);
        }else{
            gameServer.Receive(Game_DCZZ.DCZZ_ShuffleOK, data);
        }
    },
    
    //10007  C2S 玩家下注
    Bet(data){
        if(fakeServer == false){
            NetworkQueue.SendMsg(BClass.Game, Game_DCZZ.DCZZ_Bet, data);
        }else{
            gameServer.Receive(Game_DCZZ.DCZZ_Bet, data);
        }
    },
    
    //10010 C2S 玩家停止下注動畫播放完成
    StopBettingAnimationOK(data){
        if(fakeServer == false){
            NetworkQueue.SendMsg(BClass.Game, Game_DCZZ.DCZZ_StopBettingAnimationOK, data);
        }else{
            gameServer.Receive(Game_DCZZ.DCZZ_StopBettingAnimationOK, data);
        }
    },
    
    //10012 C2S 一般發牌動畫播放完成
    NormalDealAnimationOK(data){
        if(fakeServer == false){
            NetworkQueue.SendMsg(BClass.Game, Game_DCZZ.DCZZ_DealAnimationOK_Normal, data);
        }else{
            gameServer.Receive(Game_DCZZ.DCZZ_DealAnimationOK_Normal, data);
        }
    },
    
    // 10014 C2S 一般結算動畫播放完成
    NormalSettlementOK(data){
        if(fakeServer == false){
            NetworkQueue.SendMsg(BClass.Game, Game_DCZZ.DCZZ_Settlement_Normal_OK, data);
        }else{
            gameServer.Receive(Game_DCZZ.DCZZ_Settlement_Normal_OK, data);
        }
    },
    
    //10016 C2S 戰爭階段選項
    WarPhaseSelection(data){
        if(fakeServer == false){
            NetworkQueue.SendMsg(BClass.Game, Game_DCZZ.DCZZ_WarPhaseSelection, data);
        }else{
            gameServer.Receive(Game_DCZZ.DCZZ_WarPhaseSelection, data);
        }
    },
    
    //10019 C2S 進入戰爭階段動畫播放完成
    WarPhaseAnimationOK(data){
        if(fakeServer == false){
            NetworkQueue.SendMsg(BClass.Game, Game_DCZZ.DCZZ_WarPhaseAnimationOK, data);
        }else{
            gameServer.Receive(Game_DCZZ.DCZZ_WarPhaseAnimationOK, data);
        }
    },
    
    //10021 C2S 戰爭階段發牌動畫播放完成
    WarDealAnimationOK(data){
        if(fakeServer == false){
            NetworkQueue.SendMsg(BClass.Game, Game_DCZZ.DCZZ_DealAnimationOK_War, data);
        }else{
            gameServer.Receive(Game_DCZZ.DCZZ_DealAnimationOK_War, data);
        }
    },
    
    //10023  C2S 戰爭階段結算動畫播放完成
    WarSettlementOK(data){
        if(fakeServer == false){
            NetworkQueue.SendMsg(BClass.Game, Game_DCZZ.DCZZ_Settlement_War_OK, data);
        }else{
            gameServer.Receive(Game_DCZZ.DCZZ_Settlement_War_OK, data);
        }
    },
    
    RegMsg(){
        // 接收消息table
        var pojectName = GameG.GetGameName();
        
        //10001 S2C 牌局資訊，於玩家進入牌局或斷線重連時傳送
        NetworkQueue.RegMsgHook(BClass.Game, Game_DCZZ.DCZZ_GameInfo, function(data){ gameLayer.GameInfo(data); }, pojectName);
        
        //10002 S2C 玩家資訊，當玩家人數或狀態有變動時傳送
        NetworkQueue.RegMsgHook(BClass.Game, Game_DCZZ.DCZZ_AllUserInfo, function(data){ gameLayer.AllUserInfo(data); }, pojectName);
        
        //10003 S2C 等待遊戲開始，此階段玩家可自由進出遊戲
        NetworkQueue.RegMsgHook(BClass.Game, Game_DCZZ.DCZZ_WaitingStart, function(data){ gameLayer.WaitingStart(data); }, pojectName);
        
        //10004 S2C 洗牌
        NetworkQueue.RegMsgHook(BClass.Game, Game_DCZZ.DCZZ_Shuffle, function(data){ gameLayer.Shuffle(data); }, pojectName);
        
        //10006 S2C 開始下注
        NetworkQueue.RegMsgHook(BClass.Game, Game_DCZZ.DCZZ_StartBetting, function(data){ gameLayer.StartBetting(data); }, pojectName);
        
        //10008 S2C 玩家下注結果
        NetworkQueue.RegMsgHook(BClass.Game, Game_DCZZ.DCZZ_BetResult, function(data){ gameLayer.BetResult(data); }, pojectName);
        
        // 10009 S2C 玩家停止下注
        NetworkQueue.RegMsgHook(BClass.Game, Game_DCZZ.DCZZ_StopBetting, function(data){ gameLayer.StopBetting(data); }, pojectName);
        
        // 10011 S2C 一般發牌
        NetworkQueue.RegMsgHook(BClass.Game, Game_DCZZ.DCZZ_Deal_Normal, function(data){ gameLayer.NormalDeal(data); }, pojectName);
        
        // 10013 S2C 一般結算
        NetworkQueue.RegMsgHook(BClass.Game, Game_DCZZ.DCZZ_Settlement_Normal, function(data){ gameLayer.NormalSettlement(data); }, pojectName);
        
        // 10015 S2C 進入戰爭階段，符合資格玩家選擇是否要進入
        NetworkQueue.RegMsgHook(BClass.Game, Game_DCZZ.DCZZ_WarPhase, function(data){ gameLayer.WarPhase(data); }, pojectName);
        
        // 10017  S2C 戰爭階段選擇結果
        NetworkQueue.RegMsgHook(BClass.Game, Game_DCZZ.DCZZ_WarPhaseselectionResult, function(data){ gameLayer.WarPhaseselectionResult(data); }, pojectName);
        
        // 10018 S2C 開始戰爭階段
        NetworkQueue.RegMsgHook(BClass.Game, Game_DCZZ.DCZZ_WarPhaseBegin, function(data){ gameLayer.WarPhaseBegin(data); }, pojectName);
        
        //10020 S2C 戰爭階段發牌
        NetworkQueue.RegMsgHook(BClass.Game, Game_DCZZ.DCZZ_Deal_War, function(data){ gameLayer.WarDeal(data); }, pojectName);
        
        //10022 S2C 戰爭階段結算
        NetworkQueue.RegMsgHook(BClass.Game, Game_DCZZ.DCZZ_Settlement_War, function(data){ gameLayer.WarSettlement(data); }, pojectName);
        
        //10024  S2C 本局結束
        NetworkQueue.RegMsgHook(BClass.Game, Game_DCZZ.DCZZ_GameOver, function(data){ gameLayer.GameOver(data); }, pojectName);
        // 注册游戏场景初始化方法,只有在断线重连时有意义
        //   G.Service.Game.RegNotifyGameSceneInit( function() GameSceneDestory() end )
    },
    
    DCZZ_GameInfo(data){
        cc.log("DCZZ_GameInfo", data);
        gameLayer.GameInfo(data);
    },
    
    DCZZ_AllUserInfo(data){
        cc.log("DCZZ_AllUserInfo", data);
        gameLayer.AllUserInfo(data);
    },
    
    DCZZ_WaitingStart(data){
        cc.log("DCZZ_WaitingStart", data);
        gameLayer.WaitingStart(data);
    },
    
    //10004 S2C 洗牌
    DCZZ_Shuffle(data){
        cc.log("DCZZ_Shuffle", data);
        gameLayer.Shuffle(data);
    },
    
    ////10006 S2C 開始下注
    DCZZ_StartBetting(data){
        cc.log("DCZZ_StartBetting", data);
        gameLayer.StartBetting(data);
    },
    
    ////10008 S2C 玩家下注結果
    DCZZ_BetResult(data){
        cc.log("DCZZ_BetResult", data);
        gameLayer.BetResult(data);
    },
    
    // 10009 S2C 玩家停止下注
    DCZZ_StopBetting(){
        cc.log("DCZZ_StopBetting", data);
        gameLayer.StopBetting();
    },
    
    // 10011 S2C 一般發牌
    DCZZ_Deal_Normal(data){
        cc.log("DCZZ_Deal_Normal", data);
        gameLayer.NormalDeal(data);
    },
    
    // 10013 S2C 一般結算
    DCZZ_Settlement_Normal(data){
        cc.log("DCZZ_Settlement_Normal", data);
        gameLayer.NormalSettlement(data);
    },
    
    // 10015 S2C 進入戰爭階段，符合資格玩家選擇是否要進入
    DCZZ_WarPhase(data){
        cc.log("DCZZ_WarPhase", data);
        gameLayer.WarPhase(data);
    },
    
    // 10017  S2C 戰爭階段選擇結果
    DCZZ_WarPhaseselectionResult(data){
        cc.log("DCZZ_WarPhaseselectionResult", data);
        gameLayer.WarPhaseselectionResult(data);
    },
    
    // 10018 S2C 開始戰爭階段
    DCZZ_WarPhaseBegin(data){
        cc.log("DCZZ_WarPhaseBegin", data);
        gameLayer.WarPhaseBegin(data);
    },
    
    //10020 S2C 戰爭階段發牌
    DCZZ_Deal_War(data){
        cc.log("DCZZ_Deal_War", data);
        gameLayer.WarDeal(data);
    },
    
    //10022 S2C 戰爭階段結算
    DCZZ_Settlement_War(data){
        cc.log("DCZZ_Settlement_War", data);
        gameLayer.WarSettlement(data);
    },
    
    //10024  S2C 本局結束
    DCZZ_GameOver(){
        cc.log("DCZZ_GameOver", data);
        gameLayer.GameOver();
    },
    
    
};

module.exports = GameModel;
