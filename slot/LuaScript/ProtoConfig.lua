require("Module")
mmodule(...)
local HallG = require("Global")
local GameG = HallG.RequireG("GameGlobal")

function Init()
	-- 已移至GameNetwork
	
	GameG.Network.protocol = GameG.RequireG("Game_Slot")
    HallG.Protobuf.register(CS.AssetBundleManager.Instance:LoadByte(GameG.GetGameName(), 'GameMsg_Slot.pb'))
	
    GameG.Network.AddMessageModelName(GameG.Network.protocol.Slot_UserEnterID, "Slot_MSG_UserEnter")
    GameG.Network.AddMessageModelName(GameG.Network.protocol.Slot_UserLeaveID, "Slot_MSG_UserLeave")
    GameG.Network.AddMessageModelName(GameG.Network.protocol.Slot_UserStateChangeID, "Slot_MSG_UserStateChange")
		
	-- Server to Client 20xxx
    GameG.Network.AddMessageModelName(GameG.Network.protocol.Slot_SettingID, "Slot_MSG_Setting")--[訊息] 設置相關 Server to Client -> Slot_SettingID = 20001
	GameG.Network.AddMessageModelName(GameG.Network.protocol.Slot_StatusID, "Slot_MSG_Status")--[訊息] 遊戲狀態 Server to Client -> Slot_StatusID = 20002
	GameG.Network.AddMessageModelName(GameG.Network.protocol.Slot_BetStatusID, "Slot_MSG_BetStatus")--[訊息] 下注結果 Server to Client -> Slot_BetStatusID = 20003
	GameG.Network.AddMessageModelName(GameG.Network.protocol.Slot_GameResultID, "Slot_MSG_GameResult")--[訊息] 遊戲結果 (轉出內容，中獎項目，中獎金額) Server to Client -> Slot_GameResultID = 20004
	GameG.Network.AddMessageModelName(GameG.Network.protocol.Slot_LeftFreeGameID, "Slot_MSG_LeftFreeGameData")--[訊息] 剩餘免費遊戲資訊 Server to Client -> Slot_LeftFreeGameID = 20005
	GameG.Network.AddMessageModelName(GameG.Network.protocol.Slot_LightningPrepareID, "Slot_MSG_LightningPrepare")--[訊息] Lightning準備資訊 Server to Client -> Slot_LightningPrepareID = 11001
	GameG.Network.AddMessageModelName(GameG.Network.protocol.Slot_LightningResultID, "Slot_MSG_LightningResult")--[訊息] Lightning結果 Server to Client -> Slot_LightningResultID = 11002	
	GameG.Network.AddMessageModelName(GameG.Network.protocol.Slot_SelectGameOptionsID, "Slot_MSG_ChooseGameOptions")--[訊息] 通知可以選擇龍龍 Server to Client -> Slot_SelectGameOptionsID = 20008	
	GameG.Network.AddMessageModelName(GameG.Network.protocol.Slot_BonusGameID, "Slot_MSG_BonusGame")--[訊息] 玩家贏得 BonusGame 並取得BonusGame紀錄 Server to Client ->  Slot_BonusGameID = 20009
	GameG.Network.AddMessageModelName(GameG.Network.protocol.Slot_GameReelSettingID, "Slot_MSG_ReelSetting")--[訊息] 遊戲排列帶 Server to Client -> Slot_GameReelSettingID = 20010
	GameG.Network.AddMessageModelName(GameG.Network.protocol.Slot_IncreaseGameTimesID, "Slot_MSG_IncreaseGameTimes")--[訊息] 通知可以增加遊戲有次數的東西 Server to Client -> Slot_IncreaseGameTimesID = 20011;
	
	-- Client to Server 21xxx	
	GameG.Network.AddMessageModelName(GameG.Network.protocol.Slot_ActionSpinID, "Slot_MSG_Spin")--[訊息] 玩家Spin Client to Server -> Slot_ActionSpinID = 21001
	GameG.Network.AddMessageModelName(GameG.Network.protocol.Slot_ActionLightningSpinID, "Slot_MSG_LightningShow")--[訊息] Lightning階段表演完成 Client to Server -> Slot_ActionLightningSpinID = 11001
	GameG.Network.AddMessageModelName(GameG.Network.protocol.Slot_ActionChooseGameID, "Slot_MSG_ChooseGame")--[訊息] 玩家選擇哪種免費遊戲 Client to Server -> Slot_ActionChooseGameID = 21003
	
	-- 會一來一回的資訊 22xxx
	GameG.Network.AddMessageModelName(GameG.Network.protocol.Slot_LoadHistoryID, "Slot_MSG_GameLogRead")--玩家查詢記錄
	GameG.Network.AddMessageModelName(GameG.Network.protocol.Slot_LoadHistoryRetID, "Slot_MSG_GameLogRecord")--回傳玩家查詢記錄
	GameG.Network.AddMessageModelName(GameG.Network.protocol.Slot_JackpotPoolID, "Slot_MSG_GetJackpot")--[訊息] Jackpot奬池資訊 Client to Server -> Slot_JackpotPoolID = 22003
	GameG.Network.AddMessageModelName(GameG.Network.protocol.Slot_JackpotPoolRetID, "Slot_MSG_JackpotPool")--回傳獎池資訊
	GameG.Network.AddMessageModelName(GameG.Network.protocol.Slot_PickBonusID, "Slot_MSG_PickBonus")--[訊息] 玩家選則BonusGame Client to Server -> Slot_PickBonusID = 22005, Server to Client -> Slot_PickBonusRetID = 22006	
	GameG.Network.AddMessageModelName(GameG.Network.protocol.Slot_PickBonusRetID, "Slot_MSG_PickBonus")--[訊息] 玩家選則BonusGame Client to Server -> Slot_PickBonusID = 22005, Server to Client -> Slot_PickBonusRetID = 22006
    
	-- GameG.Network.AddMessageModelName(GameG.Network.protocol., "")--	
end