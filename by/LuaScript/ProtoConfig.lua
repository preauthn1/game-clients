require("Module")
mmodule(...)
local G = require "Global" 

function Init()
    -- ñ
    G.Protobuf.register(CS.AssetBundleManager.Instance:LoadByte(G.GetGamePName(), 'FishTable.pb')) 
    G.Protobuf.register(CS.AssetBundleManager.Instance:LoadByte(G.GetGamePName(), 'FishShoalTable.pb'))
    G.Protobuf.register(CS.AssetBundleManager.Instance:LoadByte(G.GetGamePName(), 'RoomTable.pb'))
    G.Protobuf.register(CS.AssetBundleManager.Instance:LoadByte(G.GetGamePName(), 'FishWaveTable.pb'))
    G.Protobuf.register(CS.AssetBundleManager.Instance:LoadByte(G.GetGamePName(), 'GlobalTable.pb'))
    G.Protobuf.register(CS.AssetBundleManager.Instance:LoadByte(G.GetGamePName(), 'BoomTable.pb'))

    -- Ϣ
    G.Protobuf.register(CS.AssetBundleManager.Instance:LoadByte(G.GetGamePName(), 'GameMsg_BY.pb'))

    G.Proto.Game_BY = G.RequireG("Game_BY")

    -- S2C Ϸ ֡ͬ
    G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_BY.BYSettingID, "BY_Setting")
    -- S2C ->ͻ ͬ֡
    G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_BY.FrameS2CID, "BY_FrameS2C")    
    -- S2C 
    G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_BY.UserRecoverRetID, "BY_UserRecoverRet") 

    -- C2S ͬ֡
    G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_BY.FrameC2SID, "BY_FrameC2S")
	
    -- S2C ߳ʾӍϢ
    G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_BY.BYLeaveTip, "BY_LeaveMsg") 	
	
	
    G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_BY.BYNotifyFish, "BY_NotifyFishMsg")
	
    G.NetQ.AddReturnMsgModelName(G.Proto.BClass.Game, G.Proto.Game_BY.BYGameCompetitionEndID, "BY_GameCompetitionEndMsg")
end