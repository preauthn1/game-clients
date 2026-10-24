
require("Module")
mmodule(...)
local HallG = require("Global")
local GameG = HallG.RequireG("GameGlobal")

function onExit()
	BonusGame = nil
	FreeGame = nil
	RetriggerFreeGame = nil
	RetriggerBonusGame = nil
end

function Init()
	IDTitle = "ID:"	
	
	User = {}
	BigWinStep = {}
	AutoSpinOption = {}
	SymbolPayTable = {}
	
	ShowReelSymbolDetail = false --顯示輪軸內的符號資訊
	-- ShowReelSymbolDetail = true --顯示輪軸內的符號資訊
	
	-- 0: 結算的時候到指定位置 (symbolID為初始塞入值)
	-- 1: 結算時直接將符號塞入(symbolID為結果值，其餘為空值)
	SpinDataMode = 1 --輪軸資料處理模式
	
	SpinLoopTimer = 0.8	--轉動持續最少時間(>=0)
		
	GapTimer_Carousel = 1.0 --結算輪播賠付線[間隔時間](>0)
	
	SpinMoveTimer = 100 -- [UISlotReel] 輪軸轉動每幀移動速度
	SpinPercent = 0.2 -- [UISlotReel] 輪軸轉動每幀移動每隔符號的百分比
	GapTimer_Spin = 0.33 -- [UISlot] 每個輪軸間格動畫時間
	GapTimer_NearWin = 1.9 -- [UISlot] 每個輪軸間格聽牌時間
	
	MoneyTimeByRate = 0.04 --表演金額時間倍數
	JackpotTime = 4 -- [UIJackpot] jackpot表演時間
	
	FreeSpinTotalCountdown = 60 -- [UIFreeSpin] 幾秒後自動開始
	FreeSpinShowCountdown = 20 -- [UIFreeSpin] 倒數顯示時間
	BonusMoney = 0
	BonusTotalCountdown = 60 -- [UIBonusGame] 幾秒後自動翻牌
	BonusShowCountdown = 20 -- [UIBonusGame] 倒數顯示時間	
end

function SetSetting(data)	
	PayLineMode = data.PayLineMode --賠付類型 (0.非全線 1.全線)
	TotalPayLine = data.TotalPayLine --總共多少賠付線
	MinCarryMoney = data.MinCarryMoney --最小攜帶金額
	RowCounts = data.RowCounts --顯示結算的行數	
	BetMoneys = data.BetMoneys --可下注列表	
	BetRates = data.BetRates --下注倍率	
	BigWinStepBase = data.BigWinStep --BigWin各階段演出條件
	ReelSetting = data.ReelSetting --輪軸表演設置
	PayLines = data.PayLines --所有賠線
	UnitPrefix = data.UnitPrefix --單位縮寫對照
	SetSymbolPayTable(data.SymbolPayTable)	
	SetDescriptions(data.Descriptions)
	SetFreeGames(data.FreeGames)--免費遊戲設置
end

function SetDescriptions(data)
	Descriptions = {}
	for k,v in pairs(data)do
		local index = #Descriptions +1
		Descriptions[index] = {}
		Descriptions[index].Title = data[k].Title
		Descriptions[index].Name = data[k].Name
		Descriptions[index].Desc = string.gsub(data[k].Desc,"\\n","\n")
	end
end

function GetDescriptions(name)
	for k,v in pairs(Descriptions)do
		if(Descriptions[k].Name == name)then
			return Descriptions[k]
		end
	end
	return nil
end

function SetGameReelSetting(data)
	GameReelSetting = data.GameReels
end

function GetGameReelSetting(conditionType, conditionValue)
	for i=1, #GameReelSetting do
		local _conditionType = GameReelSetting[i].ConditionType
		local _conditionValue = GameReelSetting[i].ConditionValue
		if(_conditionType == conditionType)then
			if(_conditionValue == tostring(conditionValue))then
				return GameReelSetting[i].ReelSetting
			end
		end
	end
	return nil
end

function SetFreeGames(data)	
	FreeGames = {}
	for k,v in pairs(data)do
		FreeGames[k] = {}
		FreeGames[k].ID = data[k].ID
		FreeGames[k].Count = data[k].Count
		FreeGames[k].ReelSetting = data[k].ReelSetting
		FreeGames[k].Data = GameG.JsonDecode(data[k].Data)
	end
end

function GetFreeGameInfoByID(id)
	for k,v in pairs(FreeGames)do
		if(FreeGames[k].ID == id)then
			return FreeGames[k]
		end
	end
	return nil
end

local function FilterTypeBySymbolPayTable(typeId)
	if(typeId == "addfreespins")then
		return true
	elseif(typeId == "selection")then
		return true
	end
	
	return false
end

function SetSymbolPayTable(data)
	for i=1, #data do
		local symbolName = data[i].Symbol.SymbolName
		SymbolPayTable[symbolName] = SymbolPayTable[symbolName] or {}
		SymbolPayTable[symbolName].symbolName = symbolName
		SymbolPayTable[symbolName].detail = SymbolPayTable[symbolName].detail or {}
		if(FilterTypeBySymbolPayTable(data[i].Type) == false)then
			local count = data[i].Count
			SymbolPayTable[symbolName].detail[count] = {}
			SymbolPayTable[symbolName].detail[count].count = data[i].Count
			SymbolPayTable[symbolName].detail[count].typeId = data[i].Type
			SymbolPayTable[symbolName].detail[count].payout = data[i].Payout
		end
				
		if(data[i].Title ~= nil and data[i].Title ~= "")then
			SymbolPayTable[symbolName].title = data[i].Title
		end		
		if(data[i].Desc ~= nil and data[i].Desc ~= "")then
			SymbolPayTable[symbolName].desc = string.gsub(data[i].Desc,"\\n","\n")
		end
	end	
end

function GetSymbolPayDetail(symbolName,detailCount)
	if(SymbolPayTable[symbolName] == nil)then
		return nil
	end
	
	if(SymbolPayTable[symbolName].detail[detailCount] == nil)then
		return nil
	end
	
	local data = {}
	data.count = SymbolPayTable[symbolName].detail[detailCount].count
	data.typeId = SymbolPayTable[symbolName].detail[detailCount].typeId
	
	local payout = SymbolPayTable[symbolName].detail[detailCount].payout
	if(data.typeId == "pickgame")then
		data.payout = string.format("%.0f b", payout)
	elseif(data.typeId == "jackpot")then
		data.payout = string.format("a")
	elseif(data.typeId == "chip")then
		data.payout = GameG.FormatUnit(payout * GetChipMoney())
	end
	
	return data
end

-- 遊戲狀態 0.下注状态 1.开奖状态 2.开奖动画 3.结算动画 4.等待游戏开始
function SetState(data)
	State = data 
end

-- 玩家資料
function SetUserData(data)
	User.UserID = data.UserID
	User.NickName = data.NickName
	User.Sex = data.Sex
	User.FaceID = data.FaceID
	User.Score = data.Score
	User.WinCount = data.WinCount
	User.LoseCount = data.LoseCount
	User.DrawCount = data.DrawCount
	User.StateValue = data.StateValue
	User.TableNo = data.TableNo
	User.SeatNo = data.SeatNo
end

-- 回合開始
function SetGameStart()

end
-- 回合結束
function SetGameEnd()

end

--通知免費遊戲選擇
function SelectGameOptions(data)
	FreeMode = {}
	FreeMode.Times = data.Times	--選擇免費遊戲的剩餘次數
	FreeMode.Options = data.Options --選項
	FreeMode.ParseOptions = {} 
	for i=1, #data.Options do
		FreeMode.ParseOptions[i] = {}
		FreeMode.ParseOptions[i].ID = data.Options[i].ID
		FreeMode.ParseOptions[i].Type = data.Options[i].Type
		FreeMode.ParseOptions[i].Data = GameG.JsonDecode(data.Options[i].Data)
	end
	FreeMode.Data = data.Data
	FreeMode.ReelResult = data.ReelResult --輪軸結果
	FreeMode.BetMoney = data.BetMoney --下注金額
	FreeMode.BetRate = data.BetRate --下注倍率
end

function SetIncreaseGameTimes(data)
	if(data.Type == "free_spins")then
		RetriggerFreeGame = {}
		RetriggerFreeGame.Count = data.Count
		RetriggerFreeGame.ID = data.ID
		-- RetriggerFreeGame.Data = GameG.JsonDecode(data.Data)
	elseif(data.Type == "jackpot_game")then
		RetriggerBonusGame = RetriggerBonusGame or {}
		local count = RetriggerBonusGame.Count or 0
		RetriggerBonusGame.Count = count + data.Count
		RetriggerBonusGame.ID = data.ID
		-- RetriggerBonusGame.Data = GameG.JsonDecode(data.Data)
	end
end

-- 剩餘免費遊戲資訊
function SetLeftFreeGameData(data)
	FreeGame = {}
	FreeGame.LeftCount = data.Count -- 免費次數(0.付費)
	FreeGame.BetMoney = data.BetMoney -- 下注金額
	FreeGame.BetRate = data.BetRate -- 下注倍率符號
	FreeGame.ID = data.ID -- 免費遊戲ID
	FreeGame.FreeGameExtAward = data.FreeGameExtAward -- 免費遊戲額外獎勵
end

-- bonus game
function SetBonusGame(data)
	if(BonusGame == nil)then
		BonusGame = {}
		BonusGame.Records = data.Records
		BonusGame.Count = data.Count
		BonusGame.WinMoney = data.WinMoney
		BonusGame.All = data.All
		BonusGame.BetMoney = data.BetMoney
		BonusGame.BetRate = data.BetRate
	else
		BonusGameStandby = {}
		BonusGameStandby.Records = data.Records
		BonusGameStandby.Count = data.Count
		BonusGameStandby.WinMoney = data.WinMoney
		BonusGameStandby.All = data.All
		BonusGameStandby.BetMoney = data.BetMoney
		BonusGameStandby.BetRate = data.BetRate
	end
end

-- 用位置取得 Bonus 資料
function GetBonusGameRecord(location)
	for k,v in pairs(BonusGame.Records) do
		if(BonusGame.Records[k].Location == location)then
			return BonusGame.Records[k]
		end
	end
	for k,v in pairs(BonusGame.Records) do
		if(BonusGame.Records[k].Location == 0)then
			return BonusGame.Records[k]
		end
	end
	return nil
end

-- 符號狀態切換
function ChangeSymbolName(symbolName)	
	return symbolName
end

-- 設定目前倍率
function SetBetRate(value)
	betRate = value
end

function SetBetRateIndex(index)
	betRate = BetRates[index]
end

-- 取得目前倍率
function GetBetRate()
	return betRate
end

-- 目前的籌碼金額
function SetChipMoney(money)
	chipMoney = money
	
	-- BigWin各階段演出條件
	for k,v in pairs(BigWinStepBase) do
		BigWinStep[k] = BigWinStepBase[k] * GetTotalBetMoney()
	end
end

function SetChipMoneyIndex(index)
	SetChipMoney(BetMoneys[index])
end

-- 目前的籌碼金額
function GetChipMoney()
	return chipMoney
end

-- 目前的下注倍率
function GetBetMoney()
	local betMoney = chipMoney
	if(PayLineMode == 0)then
		betMoney = chipMoney * TotalPayLine
	end
	
	return betMoney
end

-- 目前的下注總倍率
function GetTotalBetMoney()
	local total = chipMoney
	if(PayLineMode == 0)then
		total = chipMoney * TotalPayLine
	end
	if(betRate ~= nil)then
		total = total * betRate
	end
	
	return total
end

-- 取得可下注的最大倍數
function GetMaxBet()	
	local betMax = 1
	for i=1,#BetMoneys do
		if(BetMoneys[i] > betMax)then
			betMax = BetMoneys[i]
		end
	end
	
	local payLine = 1
	if(PayLineMode == 0)then
		payLine = TotalPayLine
	end
	
	return betMax * payLine
end

-- 取得可下注的最小倍數
function GetMinBet()	
	local betMin = 9999999999999
	for i=1,#BetMoneys do
		if(BetMoneys[i] < betMin)then
			betMin = BetMoneys[i]
		end
	end
	
	local payLine = 1
	if(PayLineMode == 0)then
		payLine = TotalPayLine
	end
	
	return betMin * payLine
end

--斷線重連資料
function SetUserRecover(data)
	
end

-- 取得金額跑碼表的時間
function GetMoneyShowTimer(money)
	local timer = MoneyTimeByRate * money / GetTotalBetMoney()
	return timer
end

-- 設定Camera縮放
function SetCameraScale(value)
	CameraScale = value
end

-- 紀錄盤面結果
function SetRecoverGameResult(data)
	RecoverGameResult = data
end

-- 取得盤面結果
function GetRecoverGameResult()
	return RecoverGameResult
end

function SetJackpotPool(data)
	JackpotPool = data
end

function GetJackpotPoolByName(name)
	for i=1, #JackpotPool do
		if(JackpotPool[i].Name == name)then
			return JackpotPool[i]
		end
	end
	
	return nil
end