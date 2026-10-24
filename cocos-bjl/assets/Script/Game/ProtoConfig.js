// 协议注册
var G = require( "Global")

var ProtoConfig = {
	extends: cc.Component,

	Init(){
	    G.Proto.Game_BJL = require("Game_BJL")
	    //G.Protobuf.register(CS.AssetBundleManager.Instance:LoadByte(G.GetGamePName(), 'HttpMsg_BJL.pb'))
	    //G.Protobuf.register(CS.AssetBundleManager.Instance:LoadByte(G.GetGamePName(), 'GameMsg_BJL.pb'))
	    G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_BJL.BJLSettingID, "BJL_Setting")
	    G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_BJL.BJLStateID, "BJL_Sate")
	    G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_BJL.BJLBetID, "BJL_BetArr")
	    G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_BJL.BJLBroadCastBetID, "BJL_BroadCastBetArr")
	    G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_BJL.BJLGameResultPokerID, "BJL_GameResultPoker")
	    G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_BJL.BJLGameResultWinID, "BJL_GameResultUserMoney")
	    G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_BJL.BJLBetInfoID, "BJL_UserBetInfo")
	    G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_BJL.BJLBetRetID, "BJL_BetRet")
	    G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_BJL.BJLShangZhuangID, "BJL_ShangZhuang")
	    G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_BJL.BJLShangZhuangRetID, "BJL_ShangzhuangRet")
	    G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_BJL.BJLShangZhuangListInfoID, "BJL_ZhuangList")
	    G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_BJL.BJLZhuangInfoID, "BJL_ZhuangInfo")
	    G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_BJL.BJLResultCardListID, "BJL_ResultCardList")
	    G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_BJL.BJLBetClearRetID, "BJL_BetClearRet")
	    G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_BJL.BJLRichestListID, "BJL_RichestList")
	    G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_BJL.BJLLuckyStarListID, "BJL_LuckyStar")
	    G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_BJL.BJLRoundID, "BJL_RoundID")
	},


};

module.exports = ProtoConfig
