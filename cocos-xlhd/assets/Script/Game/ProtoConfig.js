//
// 协议注册
var G=require("Global")

var ProtoConfig={
    extends:cc.Component,

    Init() {
        G.Proto.Game_XLHD=require("Game_XLHD");
        G.Protobuf.register(CS.AssetBundleManager.Instance.LoadByte(G.GetGamePName(), 'HttpMsg_xlhd.pb'));
        G.Protobuf.register(CS.AssetBundleManager.Instance.LoadByte(G.GetGamePName(), 'GameMsg_xlhd.pb'));

        G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_xlhd.XLHDSettingID, "XLHD_Setting");
        G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_xlhd.XLHDStateID, "XLHD_Sate");
        G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_xlhd.XLHDBetID, "XLHD_BetArr");
        G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_xlhd.XLHDBroadCastBetID, "XLHD_BroadCastBetArr");
        G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_xlhd.XLHDGameResultPokerID, "XLHD_GameResultPoker");
        G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_xlhd.XLHDGameResultWinID, "XLHD_GameResultUserMoney");
        G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_xlhd.XLHDBetInfoID, "XLHD_UserBetInfo");
        G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_xlhd.XLHDBetRetID, "XLHD_BetRet");
        G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_xlhd.XLHDShangZhuangID, "XLHD_ShangZhuang");
        G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_xlhd.XLHDShangZhuangRetID, "XLHD_ShangzhuangRet");
        G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_xlhd.XLHDShangZhuangListInfoID, "XLHD_ZhuangList");
        G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_xlhd.XLHDZhuangInfoID, "XLHD_ZhuangInfo");
        G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_xlhd.XLHDResultCardListID, "XLHD_ResultCardList");
        G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_xlhd.XLHDBetClearRetID, "XLHD_BetClearRet");
        G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_xlhd.XLHDRichestListID, "XLHD_RichestList");
        G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_xlhd.XLHDLuckyStarListID, "XLHD_LuckyStar");
        G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_xlhd.XLHDRoundID, "XLHD_RoundID");
    },
};
module.exports=ProtoConfig;
