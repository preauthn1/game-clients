require("Module")
mmodule(...)
local HallG = require "Global"
local GameG = HallG.RequireG("GameGlobal")
local gameLayer = GameG.RequireG("GameLayer")
local gameData = GameG.RequireG("GameData")

function Init()	

	-- 用戶進入桌子消息
	GameG.Network.RegisterMessage(GameG.Network.protocol.Slot_UserEnterID, function(receiveMsg)
		SendGameReady()
		gameData.SetUserData(receiveMsg.User)
		gameLayer.SetUserData(receiveMsg.User)
	end)
	--用戶離開
	GameG.Network.RegisterMessage(GameG.Network.protocol.Slot_UserLeaveID, function(receiveMsg)
	
	end)
	--用戶狀態改變
	GameG.Network.RegisterMessage(GameG.Network.protocol.Slot_UserStateChangeID,function(receiveMsg)
		
	end)
	--遊戲開始
	GameG.Network.RegisterMessage(GameG.Network.protocol.Slot_GameStartID,function(receiveMsg)
	
	end)
	--遊戲結束
	GameG.Network.RegisterMessage(GameG.Network.protocol.Slot_GameEndID,function(receiveMsg)
		gameLayer.GameEnd()
	end)
	
	GameG.Network.RegisterMessage(GameG.Network.protocol.Slot_SettingID, function(receiveMsg)
		gameData.SetSetting(receiveMsg)
		gameLayer.SetSetting(receiveMsg)	
	end)
	GameG.Network.RegisterMessage(GameG.Network.protocol.Slot_StatusID, function(receiveMsg)
		gameData.SetState(receiveMsg.State)	
		gameLayer.SetState(receiveMsg.State)
	end)
	GameG.Network.RegisterMessage(GameG.Network.protocol.Slot_BetStatusID, function(receiveMsg)
		gameLayer.SetBetRet(receiveMsg)	
		if receiveMsg.Ret == 0 then
		
		elseif receiveMsg.Ret == -1 then
			gameLayer.ShowMessage("金币不足")
		elseif receiveMsg.Ret == -2 then
			gameLayer.ShowMessage("下注类型错误")
		elseif receiveMsg.Ret == -3 then
			gameLayer.ShowMessage("庄家不能下注")
		elseif receiveMsg.Ret == -4 then
			gameLayer.ShowMessage("总注数超过上限")
		elseif receiveMsg.Ret == -5 then
			gameLayer.ShowMessage("非下注階段")
		elseif receiveMsg.Ret == -6 then
			local MinCarryMoney = GameG.FormatNum(gameData.MinCarryMoney)
			gameLayer.ShowMessage("携带金币少于" .. MinCarryMoney .. "无法下注喔!您可以前往充值后再来")
		end
	end)
	GameG.Network.RegisterMessage(GameG.Network.protocol.Slot_GameResultID, function(receiveMsg)
		gameLayer.SetGameResult(receiveMsg)
	end)
	GameG.Network.RegisterMessage(GameG.Network.protocol.Slot_LeftFreeGameID, function(receiveMsg)
		gameData.SetLeftFreeGameData(receiveMsg)
	end)
	GameG.Network.RegisterMessage(GameG.Network.protocol.Slot_LightningPrepareID, function(receiveMsg)
		
	end)
	GameG.Network.RegisterMessage(GameG.Network.protocol.Slot_LightningResultID, function(receiveMsg)
		
	end)
	GameG.Network.RegisterMessage(GameG.Network.protocol.Slot_SelectGameOptionsID, function(receiveMsg)
		gameData.SelectGameOptions(receiveMsg)
	end)
	GameG.Network.RegisterMessage(GameG.Network.protocol.Slot_BonusGameID, function(receiveMsg)
		gameData.SetBonusGame(receiveMsg)
	end)
	GameG.Network.RegisterMessage(GameG.Network.protocol.Slot_GameReelSettingID, function(receiveMsg)
		gameData.SetGameReelSetting(receiveMsg)
	end)
		
	GameG.Network.RegisterMessage(GameG.Network.protocol.Slot_LoadHistoryRetID, function(receiveMsg)
		gameLayer.SetHistoryFindData(receiveMsg)
	end)
	GameG.Network.RegisterMessage(GameG.Network.protocol.Slot_JackpotPoolRetID, function(receiveMsg)
		gameData.SetJackpotPool(receiveMsg.Jackpots)
		gameLayer.SetJackpotPool(receiveMsg.Jackpots)	
	end)
	GameG.Network.RegisterMessage(GameG.Network.protocol.Slot_PickBonusRetID, function(receiveMsg)
		gameLayer.SetPickBonusRet(receiveMsg.Record)
	end)
	GameG.Network.RegisterMessage(GameG.Network.protocol.Slot_IncreaseGameTimesID, function(receiveMsg)
		gameData.SetIncreaseGameTimes(receiveMsg)
	end)
end
--=== 發送幀數據 ===
function SendGameReady()
	HallG.NetQ.SendMsg(HallG.Proto.BClass.GameRoom, HallG.Proto.GameRoom.GameReadyID)
end

function SendGameStart()
	local param = {}
	param.Money = gameData.GetChipMoney()
	param.Rate = gameData.GetBetRate()
	
    GameG.Network.SendMessage(GameG.Network.protocol.Slot_ActionSpinID, param)
end

function SendActionLightningSpin()
	local param = {}
	-- param.LightningStep = 
		
    GameG.Network.SendMessage(GameG.Network.protocol.Slot_ActionLightningSpinID, nil)
end

function SendActionChooseGame()
	local param = {}
		
    GameG.Network.SendMessage(GameG.Network.protocol.Slot_ActionChooseGameID, nil)
end

function SendFindHistory(StartTime,EndTime,PageIndex,PageSize)
	local param = {}
	param.UserID = gameData.User.UserID
	param.StartTime = StartTime
	param.EndTime = EndTime
	param.PageIndex = PageIndex
	param.PageSize = PageSize
		
    GameG.Network.SendMessage(GameG.Network.protocol.Slot_LoadHistoryID, param)
end

function SendJackpotPool(arg1, arg2, arg3, arg4)
	local param = {}
	param.ID = {}
	param.ID[1] = arg1
	param.ID[2] = arg2
	param.ID[3] = arg3
	param.ID[4] = arg4
	
    GameG.Network.SendMessage(GameG.Network.protocol.Slot_JackpotPoolID, param)
end

function SendPickBonus(record)
	local param = {}
	param.Record = record
	
    GameG.Network.SendMessage(GameG.Network.protocol.Slot_PickBonusID, param)
end

function SendFreeGameMode(data)
	local param = {}
	param.Option = data
    GameG.Network.SendMessage(GameG.Network.protocol.Slot_ActionChooseGameID, param)
end
	