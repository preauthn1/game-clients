import { brnn } from "GameMsg_BRNN" //这里引入文件,msg为package的包名

var Game_BRNN = {

    BRNNSettingID : 10001,                //设置相关 S2C, 下注设置
    BRNNStateID : 10002,                  //阶段ID S2C, 状态消息
    BRNNBetID : 10003,                    //下注ID C2S, 下注
    BRNNBroadCastBetID : 10004,           //广播下注 S2C, 廣播下注消息
    BRNNGameResultPokerID : 10005,        //游戏结果扑克 S2C , 廣播開獎結果的後兩張牌
    BRNNGameResultWinID : 10007,          //游戏结果赢钱 S2C, 游戏用户赢钱结果
    BRNNBetInfoID : 10008,                //用户断线重连已下注的消息
    BRNNBetRetID : 10009,                 //下注结果 S2C
    BRNNShangZhuangID : 10010,            //上庄请求 C2S
    BRNNShangZhuangRetID : 10011,         //上庄请求结果 S2C
    BRNNGetShangZhuangListID : 10012,     //获取上庄列表 C2S
    BRNNShangZhuangListInfoID : 10013,    //下发上庄列表 S2C
    BRNNZhuangInfoID : 10014,             //庄家信息 S2C
    BRNNBetClearID : 10015,               //玩家清除已下的注 C2S
    BRNNResultCardListID : 10016,         //前20次开牌结果
    BRNNBetClearRetID : 10017,            //清理下注结果
    BRNNBroadCastFapaiThreeCard : 10018,  //廣播所有亮牌的前三張
    BRNNBroadCastTotalBet : 10019,        //廣播已下注和還可下注
    BRNNBroadCastFapaiTwoCard : 10020,    //廣播所有亮牌的後兩張
    BRNNGetFapeiThreeCard : 10021,        //請求亮牌的前三張
    BRNNRichestListID : 10022,            //大富豪列表的消息
    BRNNLuckyStarListID : 10023,          //明燈玩家的消息

    initMsgModel: function()
    {
        var NetworkQueue = require("NetworkQueue");
        var BClass = require("BClass")

        NetworkQueue.AddMsgModelName(BClass.Game, Game_BRNN.BRNNSettingID, brnn.BRNN_Setting)//下注设置
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BRNN.BRNNStateID, brnn.BRNN_Sate)//状态消息
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BRNN.BRNNBetID, brnn.BRNN_BetArr)//下注ID C2S
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BRNN.BRNNBroadCastBetID, brnn.BRNN_BroadCastBetArr)//广播下注 S2C, 廣播下注消息
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BRNN.BRNNGameResultPokerID, brnn.BRNN_GameResultPoker)//游戏结果扑克 S2C , 廣播開獎結果的後兩張牌
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BRNN.BRNNGameResultWinID, brnn.BRNN_GameResultUserMoney)//游戏结果赢钱 S2C, 游戏用户赢钱结果
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BRNN.BRNNBetInfoID, brnn.BRNN_UserBetInfo)//用户断线重连已下注的消息
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BRNN.BRNNBetRetID, brnn.BRNN_BetRet)//下注的结果
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BRNN.BRNNShangZhuangID, brnn.BRNN_ShangZhuang)//是否上庄
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BRNN.BRNNShangZhuangRetID, brnn.BRNN_ShangzhuangRet)//上庄结果
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BRNN.BRNNShangZhuangListInfoID, brnn.BRNN_ZhuangList)//下发上庄列表 S2C
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BRNN.BRNNZhuangInfoID, brnn.BRNN_ZhuangInfo)//庄家信息 S2C
      
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BRNN.BRNNResultCardListID, brnn.BRNN_ResultCardList)//前20次开出的牌
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BRNN.BRNNBetClearRetID, brnn.BRNN_BetClearRet)//清除结果回应消息
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BRNN.BRNNBroadCastFapaiThreeCard, brnn.BRNN_BrodcastPokerCard)//
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BRNN.BRNNBroadCastFapaiTwoCard, brnn.BRNN_BrodcastPokerCard)//
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BRNN.BRNNBroadCastTotalBet, brnn.BRNN_BroadCastTotal)//广播用户下注内容数据结构
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BRNN.BRNNRichestListID, brnn.BRNN_RichestList)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_BRNN.BRNNLuckyStarListID, brnn.BRNN_LuckyStar)


    }
};

module.exports = Game_BRNN;