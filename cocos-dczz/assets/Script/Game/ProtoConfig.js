var G = require("../Base/Global")

var ProtoConfig = {
    extends : cc.Component,
    
    Init(){
        G.Proto.Game_DCZZ = require("Game_DCZZ");
        
        //----->需重新編譯程式碼 G.Protobuf.register(CS.AssetBundleManager.Instance.LoadByte(G.GetGamePName(), 'GameMsg_DCZZ.pb'));
        
        G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_DCZZ.DCZZ_GameInfo, "DCZZ_Msg_GameInfo")
        G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_DCZZ.DCZZ_AllUserInfo, "DCZZ_Msg_AllUserInfo")
        G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_DCZZ.DCZZ_WaitingStart, "DCZZ_Msg_WaitingStart")
        G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_DCZZ.DCZZ_StartBetting, "DCZZ_Msg_StartBetting")
        G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_DCZZ.DCZZ_Bet, "DCZZ_Msg_Bet")
        G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_DCZZ.DCZZ_BetResult, "DCZZ_Msg_BetResult")
        G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_DCZZ.DCZZ_Deal_Normal, "DCZZ_Msg_Deal_Normal")
        G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_DCZZ.DCZZ_Settlement_Normal, "DCZZ_Msg_Settlement_Normal")
        G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_DCZZ.DCZZ_WarPhase, "DCZZ_Msg_WarPhase")
        G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_DCZZ.DCZZ_WarPhaseSelection, "DCZZ_Msg_WarPhaseSelection")
        G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_DCZZ.DCZZ_WarPhaseselectionResult, "DCZZ_Msg_WarPhaseselectionResult")
        G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_DCZZ.DCZZ_Deal_War, "DCZZ_Msg_Deal_War")
        G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_DCZZ.DCZZ_Settlement_War, "DCZZ_Msg_Settlement_War")
        //  G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_DCZZ., "")
    },
    
    
};

module.exports = ProtoConfig
