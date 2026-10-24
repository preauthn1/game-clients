
require("Module")
mmodule(...)
local HallG = require("Global")
local GameG = HallG.RequireG("GameGlobal")
local gameData = GameG.RequireG("GameData")

local reelCount = 5
local rowCount = 3
local symbolList = {"p1","p2","p3","p4","p5","p6","p7","p8","p9"}
local payLineMode = 0		--賠付線類型 (0.非全線, 1.全線)
local payLines = {}
payLines[1] = {2,2,2,2,2}
payLines[2] = {1,1,1,1,1}
payLines[3] = {3,3,3,3,3}
payLines[4] = {1,2,3,2,1}
payLines[5] = {3,2,1,2,3}
payLines[6] = {1,1,2,1,1}
payLines[7] = {3,3,2,3,3}
payLines[8] = {2,3,3,3,2}
payLines[9] = {2,1,1,1,2}
payLines[10] = {2,1,2,1,2}
local symbolPayTable = {}
symbolPayTable["p1"] = {}
symbolPayTable["p1"][3] = 50
symbolPayTable["p1"][4] = 200
symbolPayTable["p1"][5] = 250
symbolPayTable["p2"] = {}
symbolPayTable["p2"][3] = 25
symbolPayTable["p2"][4] = 60
symbolPayTable["p2"][5] = 120
symbolPayTable["p3"] = {}
symbolPayTable["p3"][3] = 10
symbolPayTable["p3"][4] = 25
symbolPayTable["p3"][5] = 60
symbolPayTable["p4"] = {}
symbolPayTable["p4"][3] = 8
symbolPayTable["p4"][4] = 20
symbolPayTable["p4"][5] = 50
symbolPayTable["p5"] = {}
symbolPayTable["p5"][3] = 7
symbolPayTable["p5"][4] = 15
symbolPayTable["p5"][5] = 40
symbolPayTable["p6"] = {}
symbolPayTable["p6"][3] = 5
symbolPayTable["p6"][4] = 10
symbolPayTable["p6"][5] = 25
symbolPayTable["p7"] = {}
symbolPayTable["p7"][3] = 5
symbolPayTable["p7"][4] = 10
symbolPayTable["p7"][5] = 25
symbolPayTable["p8"] = {}
symbolPayTable["p8"][3] = 5
symbolPayTable["p8"][4] = 10
symbolPayTable["p8"][5] = 25
symbolPayTable["p9"] = {}
symbolPayTable["p9"][3] = 5
symbolPayTable["p9"][4] = 10
symbolPayTable["p9"][5] = 25
symbolPayTable["p10"] = {}
symbolPayTable["p10"][3] = 5
symbolPayTable["p10"][4] = 10
symbolPayTable["p10"][5] = 25
symbolPayTable["p11"] = {}
symbolPayTable["p11"][3] = 5
symbolPayTable["p11"][4] = 10
symbolPayTable["p11"][5] = 25
symbolPayTable["s1"] = {}
symbolPayTable["s1"][3] = 50
symbolPayTable["s1"][4] = 200
symbolPayTable["s1"][5] = 250
symbolPayTable["w1"] = {}
symbolPayTable["w1"][3] = 50
symbolPayTable["w1"][4] = 200
symbolPayTable["w1"][5] = 250
symbolPayTable["w2"] = {}
symbolPayTable["w2"][3] = 50
symbolPayTable["w2"][4] = 200
symbolPayTable["w2"][5] = 250
symbolPayTable["w3"] = {}
symbolPayTable["w3"][3] = 50
symbolPayTable["w3"][4] = 200
symbolPayTable["w3"][5] = 250
symbolPayTable["w4"] = {}
symbolPayTable["w4"][3] = 50
symbolPayTable["w4"][4] = 200
symbolPayTable["w4"][5] = 250

function Start()
	SendUserEnterID()
	local sequence = CS.DG.Tweening.DOTween.Sequence()
	sequence:AppendInterval(1)
	sequence:OnComplete( function()
		SendSetting()
		
		--Slot_GameReelSettingID = 20010
		SendGameReel()
		
		-- Slot_BonusGameID = 20009
		-- SendBonusGame()
		
		-- Slot_SelectGameOptionsID = 20008
		SendChooseGameOptions()
		
		--Slot_StatusID = 20002
		SendStatus(0)
	end)
end

function Receive(packetID,data)
	-- spin
	if(packetID == GameG.Network.protocol.Slot_ActionSpinID)then
		--Slot_StatusID = 20002
		SendStatus(4)
		
		--Slot_BetStatusID = 20003
		SendBetStatus(data.Money)
		
		--Slot_GameResultID = 20004
		SendGameResult(data.Money)
				
		--Slot_IncreaseGameTimesID = 20011
		-- SendIncreaseFreeGameTimes()
		
		--Slot_LeftFreeGameID = 20005
		-- SendLeftFreeGameData(data.Money)
		
		--Slot_IncreaseGameTimesID = 20011
		SendIncreaseBonusGameTimes()
		
		-- Slot_BonusGameID = 20009
		-- SendBonusGame()
		
		--Slot_StatusID = 20002
		SendStatus(0)
	-- jackpotPool
	elseif(packetID == GameG.Network.protocol.Slot_JackpotPoolID)then
		
	-- find history
	elseif(packetID == GameG.Network.protocol.Slot_LoadHistoryID)then
		
	-- PickBonus
	elseif(packetID == GameG.Network.protocol.Slot_PickBonusID)then
		SendPickBonusRet(data)
	elseif(packetID == GameG.Network.protocol.Slot_ActionChooseGameID)then
		SendLeftFreeGameData(gameData.GetChipMoney(),gameData.GetBetRate())
		SendStatus(0)
	end
end
--Slot_UserEnterID = 4
function SendUserEnterID()
	local data = {}
	data.User = {}
	data.User.Sex = 1
    data.User.Score = 99999
    data.User.FaceID = 11
    data.User.UpdateCoupon = 0
    data.User.NickName = "来自火星"
    data.User.Coupon = 0
    data.User.AvatarFrameID = 1
    data.User.DrawCount = 0
    data.User.LoseCount = 0
    data.User.LastWinLose = 0
    data.User.UserID = 9876543210
    data.User.TableNo = 0
    data.User.WinCount = 0
    data.User.StateValue = 2
    data.User.SeatNo = 0
	GameG.Network.onReceiveFakeMessage(GameG.Network.protocol.Slot_UserEnterID, data)
end
--Slot_SettingID = 20001
function SendSetting()
	local data = {}
	local SetPayLines = function(PayLineID,Rows)
		local index = #data.PayLines +1
		data.PayLines[index] = {}
		data.PayLines[index].PayLineID = PayLineID
		data.PayLines[index].Positions = {}
		data.PayLines[index].Positions[1] = {}
		data.PayLines[index].Positions[1].Reel = 1
		data.PayLines[index].Positions[1].Row = Rows[1]
		data.PayLines[index].Positions[2] = {}
		data.PayLines[index].Positions[2].Reel = 2
		data.PayLines[index].Positions[2].Row = Rows[2]
		data.PayLines[index].Positions[3] = {}
		data.PayLines[index].Positions[3].Reel = 3
		data.PayLines[index].Positions[3].Row = Rows[3]
		data.PayLines[index].Positions[4] = {}
		data.PayLines[index].Positions[4].Reel = 4
		data.PayLines[index].Positions[4].Row = Rows[4]
		data.PayLines[index].Positions[5] = {}
		data.PayLines[index].Positions[5].Reel = 5
		data.PayLines[index].Positions[5].Row = Rows[5]
	end
	
	local SetSymbolPayTable = function(typeName, symbolName, count, payout, title, Desc)
		local index = #data.SymbolPayTable +1
		data.SymbolPayTable[index] = {}
		data.SymbolPayTable[index].Count = count
		data.SymbolPayTable[index].Type = typeName
		data.SymbolPayTable[index].Payout = payout
		data.SymbolPayTable[index].Symbol = {}
		data.SymbolPayTable[index].Symbol.SymbolID = 0
		data.SymbolPayTable[index].Symbol.SymbolName = symbolName
		data.SymbolPayTable[index].Title = title or ""
		data.SymbolPayTable[index].Desc = Desc or ""
	end
	
	local SetReelSetting = function(reelSetting,reel)
		local index = #reelSetting +1
		reelSetting[index] = {}
		reelSetting[index].RealID = reel
		reelSetting[index].Symbols = {}
		reelSetting[index].Symbols[1] = {}
		reelSetting[index].Symbols[1].SymbolID = 1611
		reelSetting[index].Symbols[1].SymbolName = symbolList[math.random(1,#symbolList)]
		reelSetting[index].Symbols[2] = {}
		reelSetting[index].Symbols[2].SymbolID = 1614
		reelSetting[index].Symbols[2].SymbolName = symbolList[math.random(1,#symbolList)]
		reelSetting[index].Symbols[3] = {}
		reelSetting[index].Symbols[3].SymbolID = 1617
		reelSetting[index].Symbols[3].SymbolName = symbolList[math.random(1,#symbolList)]
		reelSetting[index].Symbols[4] = {}
		reelSetting[index].Symbols[4].SymbolID = 1620
		reelSetting[index].Symbols[4].SymbolName = symbolList[math.random(1,#symbolList)]
		reelSetting[index].Symbols[5] = {}
		reelSetting[index].Symbols[5].SymbolID = 1602
		reelSetting[index].Symbols[5].SymbolName = symbolList[math.random(1,#symbolList)]
		reelSetting[index].Symbols[6] = {}
		reelSetting[index].Symbols[6].SymbolID = 1605
		reelSetting[index].Symbols[6].SymbolName = symbolList[math.random(1,#symbolList)]
		reelSetting[index].Symbols[7] = {}
		reelSetting[index].Symbols[7].SymbolID = 1608
		reelSetting[index].Symbols[7].SymbolName = symbolList[math.random(1,#symbolList)]
	end
	local SetFreeGames = function(id,key,multi1,multi2)
		local index = #data.FreeGames +1
		data.FreeGames[index] = {}
		data.FreeGames[index].ID = id
		data.FreeGames[index].Count = 10
		data.FreeGames[index].ReelSetting = {}
		SetReelSetting(data.FreeGames[index].ReelSetting, 1)
		SetReelSetting(data.FreeGames[index].ReelSetting, 2)
		SetReelSetting(data.FreeGames[index].ReelSetting, 3)
		SetReelSetting(data.FreeGames[index].ReelSetting, 4)
		SetReelSetting(data.FreeGames[index].ReelSetting, 5)
		data.FreeGames[index].Data = "\"{key:"..key..", multi:["..multi1..","..multi2.."]}\""
	end
	local SetUnitPrefix = function(name,multiple)
		local index = #data.UnitPrefix +1
		data.UnitPrefix[index] = {}
		data.UnitPrefix[index].Name = name
		data.UnitPrefix[index].Multiple = multiple
	end
	
	data.PayLineMode = payLineMode	--賠付線類型 (0.非全線, 1.全線)
	data.TotalPayLine = 10			--總共多少賠付線
	data.MinCarryMoney = 30			--最小攜帶金額
	data.RowCounts = rowCount		--顯示結算的行數
	data.BetMoneys = {10, 20, 30, 50, 70, 100, 200, 300, 500, 700, 1000} --下注金額
	data.BigWinStep = {25, 75, 150, 250}	--BigWin各階段演出條件
	
	data.PayLines = {}			--所有賠付線
	-- for k,v in pairs(payLines)do
		-- SetPayLines(k,v)
	-- end	
	
	data.SymbolPayTable = {}	--符號倍率設定
	for symbolName,v in pairs(symbolPayTable)do	
		for count,payout in pairs(v)do
			SetSymbolPayTable("chip", symbolName, count, payout)
		end
	end
	
	data.Descriptions = {} --文字說明
		
	SetSymbolPayTable("respin","w1", 3, 0,"百搭","可代表任何符号，只出现在第2、3、4转轴。\n符号扩展占据整个转轴，并触发免费再转\n免费再转最多触发3次")
	SetSymbolPayTable("respin","w1", 2, 0,"百搭","可代表任何符号，只出现在第2、3、4转轴。\n符号扩展占据整个转轴，并触发免费再转\n免费再转最多触发3次")
	SetSymbolPayTable("respin","w1", 1, 0,"百搭","可代表任何符号，只出现在第2、3、4转轴。\n符号扩展占据整个转轴，并触发免费再转\n免费再转最多触发3次")
	
	SetSymbolPayTable("respin","s1", 3, 0,"百搭","可代表任何符号，只出现在第2、3、4转轴。\n符号扩展占据整个转轴，并触发免费再转\n免费再转最多触发3次")
	SetSymbolPayTable("respin","s1", 2, 0,"百搭","可代表任何符号，只出现在第2、3、4转轴。\n符号扩展占据整个转轴，并触发免费再转\n免费再转最多触发3次")
	SetSymbolPayTable("respin","s1", 1, 0,"百搭","可代表任何符号，只出现在第2、3、4转轴。\n符号扩展占据整个转轴，并触发免费再转\n免费再转最多触发3次")
	
	SetSymbolPayTable("respin","b1", 3, 0,"百搭","可代表任何符号，只出现在第2、3、4转轴。\n符号扩展占据整个转轴，并触发免费再转\n免费再转最多触发3次")
	SetSymbolPayTable("respin","b1", 2, 0,"百搭","可代表任何符号，只出现在第2、3、4转轴。\n符号扩展占据整个转轴，并触发免费再转\n免费再转最多触发3次")
	SetSymbolPayTable("respin","b1", 1, 0,"百搭","可代表任何符号，只出现在第2、3、4转轴。\n符号扩展占据整个转轴，并触发免费再转\n免费再转最多触发3次")
	
	data.ReelSetting = {}		--輪軸表演設置
	SetReelSetting(data.ReelSetting, 1)
	SetReelSetting(data.ReelSetting, 2)
	SetReelSetting(data.ReelSetting, 3)
	SetReelSetting(data.ReelSetting, 4)
	SetReelSetting(data.ReelSetting, 5)	
	
	data.FreeGames = {}		--輪軸表演設置
	SetFreeGames(1,"w2","2","3")
	SetFreeGames(2,"w3","2","4")
	SetFreeGames(3,"w4","2","5")
	
	data.UnitPrefix = {}
	SetUnitPrefix("K",1000)
	SetUnitPrefix("M",100000)
	
	data.BetRates = {}
	data.BetRates[1] = 28
	data.BetRates[2] = 38
	data.BetRates[3] = 58
	data.BetRates[4] = 88	
	
	GameG.Network.onReceiveFakeMessage(GameG.Network.protocol.Slot_SettingID, data)
end
--Slot_GameReelSettingID = 20010
function SendGameReel()
	local data = {}
	data.GameReels = {}
		
	local SetReelSetting = function(reelSetting,reel,symbolName)
		local index = #reelSetting +1
		reelSetting[index] = {}
		reelSetting[index].RealID = reel
		reelSetting[index].Symbols = {}
		reelSetting[index].Symbols[1] = {}
		reelSetting[index].Symbols[1].SymbolID = 1611
		reelSetting[index].Symbols[1].SymbolName = symbolName or symbolList[math.random(1,#symbolList)]
		reelSetting[index].Symbols[2] = {}
		reelSetting[index].Symbols[2].SymbolID = 1614
		reelSetting[index].Symbols[2].SymbolName = symbolName or  symbolList[math.random(1,#symbolList)]
		reelSetting[index].Symbols[3] = {}
		reelSetting[index].Symbols[3].SymbolID = 1617
		reelSetting[index].Symbols[3].SymbolName = symbolName or  symbolList[math.random(1,#symbolList)]
		reelSetting[index].Symbols[4] = {}
		reelSetting[index].Symbols[4].SymbolID = 1620
		reelSetting[index].Symbols[4].SymbolName = symbolName or  symbolList[math.random(1,#symbolList)]
		reelSetting[index].Symbols[5] = {}
		reelSetting[index].Symbols[5].SymbolID = 1602
		reelSetting[index].Symbols[5].SymbolName = symbolName or  symbolList[math.random(1,#symbolList)]
		reelSetting[index].Symbols[6] = {}
		reelSetting[index].Symbols[6].SymbolID = 1605
		reelSetting[index].Symbols[6].SymbolName = symbolName or  symbolList[math.random(1,#symbolList)]
		reelSetting[index].Symbols[7] = {}
		reelSetting[index].Symbols[7].SymbolID = 1608
		reelSetting[index].Symbols[7].SymbolName = symbolName or  symbolList[math.random(1,#symbolList)]
	end
	
	local SetGameReel = function()
		local index = #data.GameReels +1
		data.GameReels[index] = {}
		data.GameReels[index].Name = ""
		data.GameReels[index].ID = index
		data.GameReels[index].ReelSetting = {}	
		
		SetReelSetting(data.GameReels[index].ReelSetting,1,"p" .. index)
		SetReelSetting(data.GameReels[index].ReelSetting,2,"p" .. index)
		SetReelSetting(data.GameReels[index].ReelSetting,3,"p" .. index)
		SetReelSetting(data.GameReels[index].ReelSetting,4,"p" .. index)
		SetReelSetting(data.GameReels[index].ReelSetting,5,"p" .. index)
	end
	
	for i=1, 5 do
		SetGameReel()
	end
	
	GameG.Network.onReceiveFakeMessage(GameG.Network.protocol.Slot_GameReelSettingID, data)
end
--Slot_StatusID = 20002
function SendStatus(state)
	local data = {}
	data.State = state
	
	GameG.Network.onReceiveFakeMessage(GameG.Network.protocol.Slot_StatusID, data)
end
--Slot_BetStatusID = 20003
function SendBetStatus(betMoney)
	local data = {}
	data.Ret = 0
	data.Money = betMoney
	
	GameG.Network.onReceiveFakeMessage(GameG.Network.protocol.Slot_BetStatusID, data)
end
--Slot_GameResultID = 20004
function SendGameResult(betMoney)
	local data = {}
	local SetReelResult = function(reel, row)
		local symbolName = symbolList[math.random(1,#symbolList)]
		local index = #data.ReelResult +1
		data.ReelResult[index] = {}
		data.ReelResult[index].Position = {}
		data.ReelResult[index].Position.Reel = reel
		data.ReelResult[index].Position.Row = row
		data.ReelResult[index].Symbol = {}
		data.ReelResult[index].Symbol.SymbolID = index
		data.ReelResult[index].Symbol.SymbolName = symbolName
		data.ReelResult[index].Multi = 1
	end
	
	data.BetMoney = betMoney		--下注金額
	data.FinalMoney = gameData.User.Score	--最終身上金額
	data.WinMoney = 150000			--贏得獎金
	data.JackpotMoney = 0			--贏得的Jackpot金額
	data.FreeGameWinMoney = 0		--免費遊戲累計所贏得的獎金
	data.ReelResult = {}			--輪軸結果
	for i=1, reelCount do
		for j=1, rowCount do
			SetReelResult(i,j)
		end
	end
	
	data.PayGroups = {}				--中獎內容，賠付線結果(派彩線)
	CalculatePayGroup(data)
	
	local SetBackgroundResult = function(index, upgrade)
		local randomIndex = math.random(1,100)
		changeUpgrade = upgrade or (randomIndex >= 50)
		if(changeUpgrade)then
			local index1 = #data.BackgroundInfo.BlinkPositions +1
			data.BackgroundInfo.BlinkPositions[index1] = {}
			data.BackgroundInfo.BlinkPositions[index1].Reel = index
			data.BackgroundInfo.BlinkPositions[index1].Row = 0
			
			local index2 = #data.BackgroundInfo.Result +1
			data.BackgroundInfo.Result[index2] = {}
			data.BackgroundInfo.Result[index2].Position = {}
			data.BackgroundInfo.Result[index2].Position.Reel = index
			data.BackgroundInfo.Result[index2].Position.Row = 1
			data.BackgroundInfo.Result[index2].Type = "gold"
			
			local index3 = #data.BackgroundInfo.Result +1
			data.BackgroundInfo.Result[index3] = {}
			data.BackgroundInfo.Result[index3].Position = {}
			data.BackgroundInfo.Result[index3].Position.Reel = index
			data.BackgroundInfo.Result[index3].Position.Row = 2
			data.BackgroundInfo.Result[index3].Type = "gold"
			
			local index4 = #data.BackgroundInfo.Result +1
			data.BackgroundInfo.Result[index4] = {}
			data.BackgroundInfo.Result[index4].Position = {}
			data.BackgroundInfo.Result[index4].Position.Reel = index
			data.BackgroundInfo.Result[index4].Position.Row = 3
			data.BackgroundInfo.Result[index4].Type = "gold"
			
			local index5 = #data.BackgroundInfo.Result +1
			data.BackgroundInfo.Result[index5] = {}
			data.BackgroundInfo.Result[index5].Position = {}
			data.BackgroundInfo.Result[index5].Position.Reel = index
			data.BackgroundInfo.Result[index5].Position.Row = 4
			data.BackgroundInfo.Result[index5].Type = "gold"
		else
		
			local index2 = #data.BackgroundInfo.Result +1
			data.BackgroundInfo.Result[index2] = {}
			data.BackgroundInfo.Result[index2].Position = {}
			data.BackgroundInfo.Result[index2].Position.Reel = index
			data.BackgroundInfo.Result[index2].Position.Row = 1
			data.BackgroundInfo.Result[index2].Type = "none"
			
			local index3 = #data.BackgroundInfo.Result +1
			data.BackgroundInfo.Result[index3] = {}
			data.BackgroundInfo.Result[index3].Position = {}
			data.BackgroundInfo.Result[index3].Position.Reel = index
			data.BackgroundInfo.Result[index3].Position.Row = 2
			data.BackgroundInfo.Result[index3].Type = "none"
			
			local index4 = #data.BackgroundInfo.Result +1
			data.BackgroundInfo.Result[index4] = {}
			data.BackgroundInfo.Result[index4].Position = {}
			data.BackgroundInfo.Result[index4].Position.Reel = index
			data.BackgroundInfo.Result[index4].Position.Row = 3
			data.BackgroundInfo.Result[index4].Type = "none"
			
			local index5 = #data.BackgroundInfo.Result +1
			data.BackgroundInfo.Result[index5] = {}
			data.BackgroundInfo.Result[index5].Position = {}
			data.BackgroundInfo.Result[index5].Position.Reel = index
			data.BackgroundInfo.Result[index5].Position.Row = 4
			data.BackgroundInfo.Result[index5].Type = "gold"
		
		end
	end
	
	data.BackgroundInfo = {}
	data.BackgroundInfo.Result = {}
	data.BackgroundInfo.BlinkPositions = {}
	data.BackgroundInfo.WinMoney = 21000
	SetBackgroundResult(1, true)
	SetBackgroundResult(2)
	SetBackgroundResult(3)
	SetBackgroundResult(4)
	SetBackgroundResult(5)
	
	GameG.Network.onReceiveFakeMessage(GameG.Network.protocol.Slot_GameResultID, data)
end

function CalculatePayGroup(data)
	data.PayGroups[1] = {}
	data.PayGroups[1].WinMoney = 150
	data.PayGroups[1].PayLines = {}
	data.PayGroups[1].PayLines.PayLineID = 4
	data.PayGroups[1].PayLines.Positions = {}
	data.PayGroups[1].PayLines.Positions[1] = {}
	data.PayGroups[1].PayLines.Positions[1]. Reel = 1
	data.PayGroups[1].PayLines.Positions[1]. Row = 1
	data.PayGroups[1].PayLines.Positions[2] = {}
	data.PayGroups[1].PayLines.Positions[2]. Reel = 2
	data.PayGroups[1].PayLines.Positions[2]. Row = 1
	data.PayGroups[1].PayLines.Positions[3] = {}
	data.PayGroups[1].PayLines.Positions[3]. Reel = 3
	data.PayGroups[1].PayLines.Positions[3]. Row = 1
	data.PayGroups[1].PayLines.Positions[4] = {}
	data.PayGroups[1].PayLines.Positions[4]. Reel = 4
	data.PayGroups[1].PayLines.Positions[4]. Row = 1
	data.PayGroups[1].PayLines.Positions[5] = {}
	data.PayGroups[1].PayLines.Positions[5]. Reel = 5
	data.PayGroups[1].PayLines.Positions[5]. Row = 1
	data.PayGroups[1].BlinkPositions = {}
	
	-- 全線賠付
	if(payLineMode == 0)then
		
	-- 非全線賠付
	else
		
	end
end
--Slot_LeftFreeGameID = 20005
function SendLeftFreeGameData(betMoney, betRate)
	local data = {}
	data.ID = math.random(1,255)
	if(gameData.FreeGame == nil)then
		data.Count = 10
	else
		data.Count = gameData.FreeGame.LeftCount -1
	end
	data.BetMoney = betMoney
	data.BetRate = betRate
	data.TotalCount = 0
	data.TotalWinMoney = 100
	data.WinMoney = 10
	data.EachCountMoney = 480
	
	GameG.Network.onReceiveFakeMessage(GameG.Network.protocol.Slot_LeftFreeGameID, data)
end
-- Slot_SelectGameOptionsID = 20008
function SendChooseGameOptions()
	local data = {}
	data.Times = 1
	data.Options = {} 
	-- data.Data = 
	-- data.ReelResult = 
	data.BetMoney = gameData.GetChipMoney()
	data.BetRate = gameData.GetBetRate()
	
	local SetOption = function(index)
		local index = #data.Options +1
		data.Options[index] = {}
		data.Options[index].ID = index
		data.Options[index].Type = ""
		data.Options[index].Data = ""
	end
	SetOption(1)
	SetOption(2)
	SetOption(3)
	
	GameG.Network.onReceiveFakeMessage(GameG.Network.protocol.Slot_SelectGameOptionsID, data)
end
-- Slot_BonusGameID = 20009
function SendBonusGame()
	local data = {}
	data.Records = {}
	data.Count = 5
	data.WinMoney = 1000
	data.BetMoney = 100
	data.BetRate = 28
	
	local SetRecords = function()
		local index = #data.Records +1
		data.Records[index] = {}
		data.Records[index].ID = index
		data.Records[index].Location = 0
		data.Records[index].RewardValue = math.random(1,4)
		data.Records[index].BonusID = math.random(1,4)
	end
	
	for i=1, 5 do
		SetRecords()
	end
	
	GameG.Network.onReceiveFakeMessage(GameG.Network.protocol.Slot_BonusGameID, data)
end
--Slot_PickBonusRetID = 22006
function SendPickBonusRet(data)
	GameG.Network.onReceiveFakeMessage(GameG.Network.protocol.Slot_PickBonusRetID, data)
end
--Slot_IncreaseGameTimesID = 20011
function SendIncreaseBonusGameTimes()
	local data = {}
	data.ID = 1
	data.Count = 5
	data.Type = "JackpotGame"
	
	GameG.Network.onReceiveFakeMessage(GameG.Network.protocol.Slot_IncreaseGameTimesID, data)	
end
--Slot_IncreaseGameTimesID = 20011
function SendIncreaseFreeGameTimes()
	local data = {}
	data.ID = 1
	data.Count = 5
	data.Type = "FreeGame"
	
	GameG.Network.onReceiveFakeMessage(GameG.Network.protocol.Slot_IncreaseGameTimesID, data)	
end