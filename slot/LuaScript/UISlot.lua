require("Module")
mmodule(...)
local HallG = require("Global")
local GameG = HallG.RequireG("GameGlobal")
local gameData = GameG.RequireG("GameData")
local uiReel = GameG.RequireG("UISlotReel")
local poolPayCount = 50

local rootRect
local prefab
local poolPrefab = {}
local poolReel = {}
local autoSequenceKey = 0
local sequenceDict = {}
local callbackStop = nil
local callbackComplete = nil
local callbackCarousel = nil
local spinLoopTimer = nil
local gameResultData = nil
local reelResultData = nil
local symbolClickCallback = nil -- 點擊符號事件

--取得Sequence
local GetSequence = function(key)
    if(key == nil)then
        key = "AutoSequenceKey_" .. autoSequenceKey
        autoSequenceKey = autoSequenceKey + 1
    end
    if(sequenceDict[key] == nil)then
        sequenceDict[key] = CS.DG.Tweening.DOTween.Sequence()
    else
        sequenceDict[key]:Kill()
        sequenceDict[key] = CS.DG.Tweening.DOTween.Sequence()
    end
    return sequenceDict[key]
end
--刪除Sequence
local KillSequence = function(key)
    if sequenceDict[key] then
        sequenceDict[key]:Kill()
    end
    sequenceDict[key] = nil
end
--刪除全部Sequence
local KillTotalSequence = function()
    for k,v in pairs(sequenceDict)do
		KillSequence(k)
	end
end

local function ResetTotalReel()
	for i=1, #poolReel do
		poolReel[i].ResetStart();
	end
end

local function RestartSpin()
	callbackCarousel = nil
	callbackStop = nil
	
	KillTotalSequence()
end

function onExit()
	KillTotalSequence()
	
	for i=1, #poolReel do	poolReel[i].onExit() end
	for i=1, #poolPrefab do	poolPrefab[i] = nil	end
end

function Init(root,rootResult)
	rootRect = root.transform:GetComponent("RectTransform")
    prefab = root.transform:Find("Reel").gameObject	
	prefab.gameObject:SetActive(false)
	
	rootMask = root.transform:GetComponent("Mask")
	
	ResetTotalReel()
	RestartSpin()
end

local function CreateClone(index,reelCount,prefabCount)
	if(poolPrefab[index] ~= nil) then return poolPrefab[index] end
	local clone = CS.UnityEngine.GameObject.Instantiate(prefab)
	if(clone == nil)then return nil end
	clone.transform:SetParent(prefab.transform.parent)
	clone.transform.localPosition = CS.UnityEngine.Vector3.zero
	clone.transform.localScale = CS.UnityEngine.Vector3.one
	clone.transform.name = prefab.name .. index
	clone.gameObject:SetActive(true)
		
	poolPrefab[index] = clone.transform:GetComponent("RectTransform")
			
	local poolSpine = rootRect.transform:Find("PoolSpine")
	poolReel[index] = uiReel.Create(poolPrefab[index], poolSpine)
	poolReel[index].SetSymbolClickCallback(function(isSpinning,data)
		if(symbolClickCallback ~= nil)then
			symbolClickCallback(isSpinning,data)
		end
	end)
	
	-- 輪軸間的距離
	local _space = 10
	-- 輪軸的寬度
	local _width = (rootRect.sizeDelta.x + _space) / reelCount - _space
	-- 輪軸的高度
	local _height = rootRect.sizeDelta.y / gameData.RowCounts * prefabCount
	-- 輪軸的位置
	local _x = (_width + _space) * (index -1) 
	poolPrefab[index].anchoredPosition = CS.UnityEngine.Vector2(_x,0)
	poolPrefab[index].sizeDelta = CS.UnityEngine.Vector2(_width,_height)	
end	

--設定輪軸清單
function SetReelSetting(list)	
	KillSequence("carousel")
	-- 輪軸總數
	local reelCount = #list
	-- 單輪軸預生成符號數量
	local prefabCount = (gameData.RowCounts +2)
	
	for i=1,#list do
		CreateClone(i, reelCount, prefabCount)
			
		poolReel[i].SetReelSetting(list[i].Symbols, prefabCount)
	end	
end

-- 更換輪軸資訊
function ChangeReelSetting(list)
	for i=1, #list do
		poolReel[i].ChangeReelSetting(list[i].Symbols)
	end	
end

-- 恢復盤面結果
function SetRecoverGameResult(data)
	if(data == nil)then
		return
	end
	
	for i=1, #data.ReelResult do
		local reelIndex = data.ReelResult[i].Position.Reel
		poolReel[reelIndex].SetReelResult(data.ReelResult[i])
	end
	
	for i=1, #data.BackgroundInfo.Result do
		local reelIndex = data.BackgroundInfo.Result[i].Position.Reel
		poolReel[reelIndex].SetBackgroundResult(data.BackgroundInfo.Result[i])
	end
end

-- 設置點擊符號事件
function SetSymbolClickCallback(callback)
	symbolClickCallback = callback
end	

-- 取得輪軸上符號位置
function GetSymbolListWorldPos()
	local layoutWorldPos = {}
	for i=1, #poolReel do
		layoutWorldPos[i] = {}
		for j=1, gameData.RowCounts do
			layoutWorldPos[i][j] = poolReel[i].GetSymbolWorldPos(j)
		end
	end
	return layoutWorldPos
end

-- 取得輪軸清單內的符號資訊
function GetListBySymbolName(reelSetting,symbolName)
	local list = {}	
	local tempIndex = 1
	for i=1, #reelSetting do
		if(reelSetting[i].Symbol.SymbolName == symbolName)then
			list[tempIndex] = reelSetting[i]
			tempIndex = tempIndex +1
		end		
	end	
	
	return list
end

-- 確認輪軸符合符號的數量
function CheckConformCount(reelSetting, reelIndex, symbolName)
	local conformCount = 0 -- 符合符號的數量	
	local refreshResult = {} -- 整理符合符號的清單
	
	local reelResult = GetListBySymbolName(reelSetting , symbolName)
	for i=1, #reelResult do
		local reel = reelResult[i].Position.Reel
		refreshResult[reel] = refreshResult[reel] or {}
		refreshResult[reel].count = refreshResult[reel].count or 0
		refreshResult[reel].count = refreshResult[reel].count +1
	end
	
	-- 計算輪軸已開獎符號符合的數量
	for k,v in pairs(refreshResult) do
		if(k <= reelIndex)then
			conformCount = conformCount + v.count
		end
	end
	
	return conformCount
end

-- 確認符合符號的輪軸數量
function CheckConformReel(reelSetting, reelIndex, symbolName)
	local conformCount = 0 -- 符合符號的數量	
	local refreshResult = {} -- 整理符合符號的清單
	
	local reelResult = GetListBySymbolName(reelSetting , symbolName)
	for i=1, #reelResult do
		local reel = reelResult[i].Position.Reel
		refreshResult[reel] = refreshResult[reel] or {}
		refreshResult[reel].count = 1
	end
	
	-- 計算輪軸已開獎符號符合的數量
	for k,v in pairs(refreshResult) do
		if(k <= reelIndex)then
			conformCount = conformCount + v.count
		end
	end
	
	return conformCount
end

-- 顯示下個輪軸聽牌
function ShowNearWin(reelIndex)
	for i=1, #poolReel do
		if(i == reelIndex +1)then
			poolReel[i].ShowNearWin()
		else
			poolReel[i].HideNearWin()
		end
	end
end

-- 開始旋轉
function SetStartSpin()

	rootMask.enabled = true
	
	RestartSpin()	
	
	for i=1,#poolReel do	
		poolReel[i].ResetStart()
		poolReel[i].StartSpin()
	end	
	
	spinLoopTimer = 0
	local sequence = GetSequence("Process");
	sequence:SetLoops(-1,CS.DG.Tweening.LoopType.Restart)
	sequence:AppendInterval(0.1)
	sequence:AppendCallback(function()
		spinLoopTimer = spinLoopTimer +0.1
	end)
end
-- 接收結果
function SetGameResult(data,complete)
	callbackComplete = complete
	gameResultData = data
	reelResultData = {}		
	
	for i=1,#data.ReelResult do
		local reelIndex = data.ReelResult[i].Position.Reel
		local rowIndex = data.ReelResult[i].Position.Row
		local symbolID = data.ReelResult[i].Symbol.SymbolID
		local symbolName = data.ReelResult[i].Symbol.SymbolName
		reelResultData[reelIndex] = reelResultData[reelIndex] or {}
		reelResultData[reelIndex][rowIndex] = reelResultData[reelIndex][rowIndex] or {}			
		reelResultData[reelIndex][rowIndex].SymbolID = symbolID			
		reelResultData[reelIndex][rowIndex].SymbolName = symbolName
		reelResultData[reelIndex][rowIndex].Upgrade = false
	end
	
	for i=1, #data.BackgroundInfo.Result do
		local reelIndex = data.BackgroundInfo.Result[i].Position.Reel
		local rowIndex = data.BackgroundInfo.Result[i].Position.Row
		local typeName = data.BackgroundInfo.Result[i].Type
		
		if(typeName == "gold")then
			reelResultData[reelIndex] = reelResultData[reelIndex] or {}
			reelResultData[reelIndex][rowIndex] = reelResultData[reelIndex][rowIndex] or {}	
			reelResultData[reelIndex][rowIndex].Upgrade = true
		end
	end
	
	local upgradeReel = {}
	if(data.BackgroundInfo.BlinkPositions ~= nil)then
		for i=1, #data.BackgroundInfo.BlinkPositions do
			local reel = data.BackgroundInfo.BlinkPositions[i].Reel
			if(reel ~= 1)then
				upgradeReel[reel] = true
			end
		end
	end
	
	-- 提前預知結果
	for i=1, #poolReel do
		poolReel[i].PredictionResult(reelResultData[i], upgradeReel[i])
	end
	
	--不停旋轉	
	local timer = (gameData.SpinLoopTimer - spinLoopTimer)
	if(timer > 0)then
		local sequence = GetSequence("Process");
		sequence:AppendInterval(timer)
		sequence:OnComplete(function() 
			SetStopSpin()
		end)
	else
		SetStopSpin()
	end
end

--停止旋轉
function SetStopSpin(gapTimer)
	if (gameResultData == nil) then
		return
	end
	
	data = gameResultData
	
	-- 確認所有輪軸是否皆在轉動
	local function CheckReelIsSpinning()
		for i=1,#poolReel do
			if(poolReel[i].GetIsSpinning() == true)then
				return true
			end
		end
		return false
	end
	
	local sequence = GetSequence("Process");
	for i=1,#poolReel do		
		local timer = gapTimer or gameData.GapTimer_Spin -- 輪軸停止時間
		local isNearWin = CheckShowNearWin(data.ReelResult, i) -- 是否表演near win
		if(isNearWin == true)then
			timer = gameData.GapTimer_NearWin
		end
		-- 沒有停輪的輪軸才指定停輪資料
		if(poolReel[i].GetStopSymbolID() == nil)then
			sequence:AppendCallback(function()
				local reelIndex = i
				poolReel[i].StopSpinModeData(reelResultData[i],function()
					
					local symbolNames = { "s1" }
					ShowSymbolAudioNew(data.ReelResult, reelIndex, symbolNames, "se_scatter0", 3)
					
					if(isNearWin == true)then
						ShowNearWin(reelIndex)
					end
					-- 全部輪軸皆沒有轉動
					if(CheckReelIsSpinning() == false)then
						rootMask.enabled = false
						
						if (callbackComplete ~= nil) then
							callbackComplete()
							callbackComplete = nil
						end
					end
				end)
			end)
			sequence:AppendInterval(timer)
		end
	end
end

-- 顯示倍數
function ShowGameResultMulti(data, callback)
	local sequence = GetSequence();
	for i=1, #data.ReelResult do
		local reelIndex = data.ReelResult[i].Position.Reel
		local symbolID = data.ReelResult[i].Symbol.SymbolID
		local multi = data.ReelResult[i].Multi
		local blink = data.ReelResult[i].Blink
		-- 倍數加成，有連線狀況下
		if(multi > 1 and data.PayGroups ~= nil and #data.PayGroups > 0)then
			sequence:AppendCallback(function()
				if(poolReel[reelIndex].ShowMergeWild() == false)then
					-- GameG.PlayGameSound("se_multiplier")
					poolReel[reelIndex].ShowWin(symbolID, multi)
				end				
			end)
			sequence:AppendInterval(0.5)
		end
	end
	sequence:OnComplete(function()
		if(callback ~= nil)then
			callback()
			callback = nil
		end
	end)
end


--顯示所有中獎符號
function ShowGameResultSymbolWin(data, callback)	
	for i=1,#data.ReelResult do
		local reelIndex = data.ReelResult[i].Position.Reel
		local rowIndex = data.ReelResult[i].Position.Row
		local symbolID = data.ReelResult[i].Symbol.SymbolID
		local symbolName = data.ReelResult[i].Symbol.SymbolName
		local multi = data.ReelResult[i].Multi
		if(data.ReelResult[i].Blink == true)then
			poolReel[reelIndex].ShowWin(symbolID, multi)
		end
	end
	
	local sequence = GetSequence();
	if(data.WinMoney > 0)then
		sequence:AppendInterval(1)
		if(data.WinMoney > gameData.GetBetMoney() * 150)then
			GameG.PlayGameSound("se_win03")
		elseif(data.WinMoney > gameData.GetBetMoney() * 60)then
			GameG.PlayGameSound("se_win02")
		else
			GameG.PlayGameSound("se_win01")
		end
	end
	
	sequence:OnComplete(function()
		if(callback ~= nil)then
			callback()
		end
	end)
end

-- 顯示升級輪軸關門
function ShowUpgradeBackground(data, callback)
	if(callback ~= nil)then
		callback()
	end
end

--依序輪播賠付線與獲得金額
function ShowGameResultCarousel(data, callback)
	if(data == nil)then
		return
	end
	-- 沒有中任何連線
	if(data.PayGroups == nil)then
		return
	end
	
	if(#data.PayGroups == 0)then
		return
	end
	
	local sequence = GetSequence();
	sequence:SetLoops(-1,CS.DG.Tweening.LoopType.Restart)
	
	for i=1, #data.PayGroups do
		sequence:AppendCallback(function()
			ResetTotalReel()
			local blink = data.PayGroups[i].BlinkPositions
			-- 尋找賠付線上有中獎的符號
			for k, v in pairs(blink)do
				for index=1,#data.ReelResult do
					local reelIndex = data.ReelResult[index].Position.Reel
					local rowIndex = data.ReelResult[index].Position.Row
					local symbolID = data.ReelResult[index].Symbol.SymbolID
					local multi = data.ReelResult[index].Multi
					if(reelIndex == v.Reel and rowIndex == v.Row)then
						poolReel[reelIndex].ShowWin(symbolID, multi)
					end
				end
			end
			if(callback ~= nil)then
				callback(data.PayGroups[i].WinMoney, payLineID)
			end
		end)
		sequence:AppendInterval(1)
	end	
end

-- 顯示進入選擇遊戲前符合的符號
function ShowSelectGameEnter(callback)
	local sequence = GetSequence();
	if(gameData.FreeMode ~= nil and gameResultData ~= nil)then
		ResetTotalReel()
		
		local data = gameResultData
		for index=1,#data.ReelResult do
			local reelIndex = data.ReelResult[index].Position.Reel
			local symbolID = data.ReelResult[index].Symbol.SymbolID
			local symbolName = data.ReelResult[index].Symbol.SymbolName
			local multi = data.ReelResult[index].Multi
			if(symbolName == "s1")then
				poolReel[reelIndex].ShowWin(symbolID, multi)
			end
		end
		
		GameG.PlayGameSound("se_fstrigger")
		sequence:AppendInterval(2.518)
		sequence:AppendCallback(function()
			GameG.PlayGameSound("se_cutscenes")
		end)
		sequence:AppendInterval(4.591)
	end
	
	sequence:OnComplete(function()
		if(callback ~= nil)then
			callback()
		end
	end)
end

--------------------------------------------------------------------------------
-- 判斷有沒有進入near win
function CheckShowNearWin(reelSetting, reelIndex)
	
	-- FreeGame 不聽牌
	if(gameData.FreeGame ~= nil)then	
		return false
	end
	
	-- 符合符號的數量
	conformCount = 0
	local names = { "s1" }
	for i,j in pairs(names) do
		conformCount = conformCount + CheckConformReel(reelSetting, reelIndex, j)
	end
	
	-- 符合數量
	if(conformCount >= 2)then
		return true
	end
	
	return false
end

--------------------------------------------------------------------------------
-- 播放指定符號音效
function ShowSymbolAudio(reelSetting, reelIndex, symbolName)
	-- 上個輪軸的數量
	local lastCount = CheckConformCount(reelSetting, reelIndex -1, symbolName)
	-- 符合符號的數量
	local conformCount = CheckConformCount(reelSetting, reelIndex, symbolName)
		
	-- 若數量符合則播放音效
	if(3 >= conformCount and conformCount > lastCount)then
		GameG.PlayGameSound("se_bonus0" .. conformCount)
	end
end

-- 播放指定符號音效
function ShowSymbolAudioNew(reelSetting, reelIndex, symbolNames, soundName, soundLength)
	-- 上個輪軸的數量
	local lastCount = 0
	-- 符合符號的數量
	local conformCount = 0
	for i,j in pairs(symbolNames) do
		lastCount = lastCount + CheckConformCount(reelSetting, reelIndex -1, j)
		conformCount = conformCount + CheckConformCount(reelSetting, reelIndex, j)
	end
	-- 若數量符合則播放音效
	if(conformCount > lastCount)then
		if(conformCount > soundLength) then conformCount = soundLength end
		GameG.PlayGameSound(soundName..conformCount)
	end
end
