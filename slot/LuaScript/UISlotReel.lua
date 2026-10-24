require("Module")
mmodule(...)
local HallG = require("Global")
local GameG = HallG.RequireG("GameGlobal")
local gameData = GameG.RequireG("GameData")
local gameLayer = GameG.RequireG("GameLayer")

function Create(root, poolSpine)
	local rootRect = root.transform:GetComponent("RectTransform")
	local rootParent = rootRect.parent:GetComponent("RectTransform")
	local rootPoolSpine = poolSpine
	local target = {}
	local pool = {}
	local symbolHeight = 0 --單個符號高度
	local spinHeight = 0 --轉軸的高度
	local rectHeight = 0 --看得見的範圍高度
	local whiteColor = CS.UnityEngine.Color(1,1,1,1)
	local blackColor = CS.UnityEngine.Color(0,0,0,0.3)
	local sequenceSpin = CS.DG.Tweening.DOTween.Sequence()
	local sequenceLoop = CS.DG.Tweening.DOTween.Sequence()
	local stopSymbolID = nil
	local stopReelResult = nil --結算符號資料
	local stopReelIndex = 0
	local spinReelSetting = nil --轉動符號資料
	local spinReelIndex = 0	
	local stopCallback = nil
	local refreshPositionIndex
	local refreshPositionCount = 1
	local isSpinning = false --轉動中
	local symbolClickCallback = nil -- 點擊符號事件
		
	local rootNearWin = rootRect.transform:Find("ChangeParent/ParticleNearWin"):GetComponent("RectTransform")
	rootNearWin.gameObject:SetActive(false)
	
    local prefab = rootRect.transform:Find("Symbol").gameObject	
	prefab.gameObject:SetActive(false)
			
	local rootChangeParent = rootRect.transform:Find("ChangeParent"):GetComponent("RectTransform")
	rootChangeParent.transform:SetParent(rootRect.transform.parent)
	rootChangeParent.transform:SetAsLastSibling()	
	rootChangeParent.transform.name = rootRect.transform.name .. "_" .. rootChangeParent.transform.name
	
	local autoSequenceKey = 0
	local sequenceDict = {}

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
	
	local function SetSprite(img,symbolName)
		GameG.SetImageSprite(img,"symbol_" .. symbolName)
	end
	
	local function SetSpine(index,symbolName)
		local temp = rootPoolSpine.transform:Find("SkeletonGraphic (sp_"..symbolName..")")
		if temp ~= nil then
			local clone = CS.UnityEngine.GameObject.Instantiate(temp)
			clone.transform:SetParent(pool[index].root)
			clone.transform:SetSiblingIndex(1)
			clone.transform.localScale = CS.UnityEngine.Vector3.one
			clone.gameObject:SetActive(true)
			pool[index].spine = clone.transform:GetComponent("SkeletonGraphic")
			pool[index].spine.AnimationState:SetAnimation(0, "idle", false);
			
			local rect = clone.transform:GetComponent("RectTransform")
			rect.anchoredPosition = CS.UnityEngine.Vector2.zero
		end
	end
				
	local function SetData(index, symbolID, symbolName)
		pool[index].root.name = prefab.name .."_".. index
		pool[index].symbolID = symbolID
		pool[index].symbolName = symbolName
		
		pool[index].detail.txtSymbolID.text = symbolID
		pool[index].detail.txtSymbolName.text = symbolName
		
		symbolName = gameData.ChangeSymbolName(symbolName)
		pool[index].imgIcon.gameObject:SetActive(symbolID == nil)
		pool[index].imgBlur.gameObject:SetActive(false)
		
		if(pool[index].spine ~= nil)then
			CS.UnityEngine.GameObject.Destroy(pool[index].spine.gameObject)
			pool[index].spine = nil
		end
		
		if(symbolID ~= nil)then
			SetSpine(index,symbolName)
		else
			SetSprite(pool[index].imgIcon, "n_" .. symbolName)
			SetSprite(pool[index].imgBlur, "b_" .. symbolName)
		end
		
		if(symbolName == "s1")then
			pool[index].root.transform:SetAsFirstSibling()
		end
	end	
	
	local function ResetData(index)
		pool[index].symbolID = nil
		pool[index].detail.txtSymbolID.text = nil
	end
			
	local function CreateClone(index)
		if(pool[index] ~= nil) then ResetData(index) return nil end
		local clone = CS.UnityEngine.GameObject.Instantiate(prefab)
		if(clone == nil)then return nil end
		clone.transform:SetParent(prefab.transform.parent)
		clone.transform.localPosition = CS.UnityEngine.Vector3.zero
		clone.transform.localScale = CS.UnityEngine.Vector3.one
		clone.transform.name = prefab.name .. index
		clone.gameObject:SetActive(true)
		
		pool[index] = {}
		pool[index].root = clone.transform:GetComponent("RectTransform")
		pool[index].btn = clone.transform:GetComponent("Button")
		pool[index].rootPos = clone.transform:Find("RootPos"):GetComponent("RectTransform")
		pool[index].imgBg = clone.transform:Find("ImageBg"):GetComponent("Image")
		pool[index].imgBg.gameObject:SetActive(false)
		pool[index].imgBg.transform.name = pool[index].imgBg.transform.name .. "_" ..rootRect.transform.name .. "_" .. index
		pool[index].imgIcon = clone.transform:Find("ImageIcon"):GetComponent("Image")
		pool[index].imgBlur = clone.transform:Find("ImageBlur"):GetComponent("Image")
		pool[index].txtBet = clone.transform:Find("TextBet"):GetComponent("Text")
		pool[index].reScaleBet = pool[index].txtBet.transform.localScale
		local _width = rootRect.sizeDelta.x
		local _y = (symbolHeight) * (index-1) * -1
		pool[index].root.anchoredPosition = CS.UnityEngine.Vector2(0,_y)
		pool[index].root.sizeDelta = CS.UnityEngine.Vector2(_width, symbolHeight)
		
		pool[index].detail = {}
		pool[index].detail.root = clone.transform:Find("ImageDetail"):GetComponent("RectTransform")
		pool[index].detail.txtSymbolID = clone.transform:Find("ImageDetail/TextSymbolID"):GetComponent("Text")
		pool[index].detail.txtSymbolName = clone.transform:Find("ImageDetail/TextSymbolName"):GetComponent("Text")
		pool[index].detail.root.gameObject:SetActive(gameData.ShowReelSymbolDetail)
		
		pool[index].btn.onClick:AddListener(function()
			if(symbolClickCallback ~= nil)then
				GameG.PlayGameSound("se_click")
				local data = {}
				data.symbolName = pool[index].symbolName
				symbolClickCallback(isSpinning,data)
			end
		end)	
				
		refreshPositionIndex = #pool
	end
	
	local function GetIndexByRow(row)
		local index = refreshPositionIndex + row
		if(index > #pool)then
			index = index - #pool
		end
		return index
	end
	
	-- 刷新符號的位置
	local function RefreshPosition(callback)		
		local _y = rootRect.anchoredPosition.y
		local SetPosition = function(i)
			if(stopSymbolID ~= nil)then
				if(pool[GetIndexByRow(1)].symbolID == stopSymbolID)then
					return
				end
			end
		
			local _rootX = pool[i].root.anchoredPosition.x
			local _rootY = pool[i].root.anchoredPosition.y
			local _side = tonumber(string.format("%.0f",(_rootY + _y)))
			local _line = tonumber(string.format("%.0f",(rectHeight * -1 - symbolHeight)))
			-- 超出框線的放到第一個
			if(_side <= _line)then
				local _targetY = refreshPositionCount * symbolHeight
				pool[i].root.anchoredPosition = CS.UnityEngine.Vector2(_rootX, _targetY)	
				refreshPositionIndex = i
				refreshPositionCount = refreshPositionCount +1
				if(callback ~= nil)then
					callback(i)
				end
			end
		end
		
		local tempIndex = refreshPositionIndex
		
		for i=tempIndex, 1, -1 do
			if(i ~= tempIndex)then
				SetPosition(i)
			end
		end
		
		for i=#pool, tempIndex, -1 do
			SetPosition(i)
		end
	end
	
	-- 更改盤面結果
	target.SetReelResult = function(data)
		local index = GetIndexByRow(data.Position.Row)		
		local symbolID = data.Symbol.SymbolID
		local symbolName = data.Symbol.SymbolName
		SetData(index, symbolID, symbolName)
	end
	
	target.SetBackgroundResult = function(data)
		upgradeReel = false
		local index = GetIndexByRow(data.Position.Row)
		local upgrade = (data.Type == "gold")
		-- 先將全部背景塞成中間的，再計算頭尾
		pool[index].imgBg.gameObject:SetActive(upgrade)
		if(upgrade == true)then
			SetSprite(pool[index].imgBg, "bg_3")
		end
	end
	
	-- 更換輪軸資訊
	target.ChangeReelSetting = function(symbolGroup)
		spinReelSetting = symbolGroup
		spinReelIndex = #symbolGroup
	end
	
	-- 初始化輪軸資訊
	target.SetReelSetting = function(symbolGroup,totalCount)
		--GameG.Print(symbolGroup)
		symbolHeight = rootRect.sizeDelta.y / totalCount
		spinHeight = symbolHeight * (totalCount)
		rectHeight = symbolHeight * gameData.RowCounts
		spinReelSetting = symbolGroup
		spinReelIndex = #symbolGroup
		
		for i=1, totalCount do
			CreateClone(i)
			
			-- 隨機設定初始畫面
			local index = math.modf(CS.UnityEngine.Random.Range(1, #symbolGroup))
			
			-- 確保symbolID 不會有重複的問題
			local symbolID = nil
			if(gameData.SpinDataMode == 0)then
				symbolID = symbolGroup[index].SymbolID
			end
			local symbolName = symbolGroup[index].SymbolName
			SetData(i, symbolID, symbolName)
		end
		
		RefreshPosition(nil)
		
		-- 初始化界面
		local _x = rootRect.transform.localPosition.x
		local _width = rootRect.sizeDelta.x		
		rootChangeParent.transform.localPosition = CS.UnityEngine.Vector3(_x + _width *0.5, 0, 0)
	end	
		
	local function GetIndexBySymbolID(symbolID)
		for i=1, #pool do
			if(pool[i].symbolID == symbolID)then
				return i
			end
		end
		return nil
	end		
	
	target.ResetStart = function()
		for i=1,#pool do
			pool[i].txtBet.text = ""
			if(pool[i].spine ~= nil)then
				pool[i].spine.AnimationState:SetAnimation(0, "stop", false);
			else
				pool[i].imgIcon.gameObject:SetActive(true)
				pool[i].imgBlur.gameObject:SetActive(false)
			end
		end
	end
	
	-- 註冊符號點擊事件
	target.SetSymbolClickCallback = function(callback)
		symbolClickCallback = callback
	end	
		
	-- 只顯示結果符號
	local function ShowResult()
		local _y = rootRect.anchoredPosition.y
		
		for i=1, #pool do
			local _rootY = pool[i].root.anchoredPosition.y
			
			if(_rootY + _y > 0)then
				pool[i].root.gameObject:SetActive(false)
			elseif(_rootY + _y < rectHeight * -1 + symbolHeight * 0.5)then
				pool[i].root.gameObject:SetActive(false)
			else
				pool[i].imgBg.transform:SetParent(rootRect.transform.parent)
				pool[i].imgBg.transform:SetAsFirstSibling()
			end
		end
	end
	
	local function HideBackground()
		for i=1, #pool do
			pool[i].imgBg.transform:SetParent(pool[i].root.transform)
			pool[i].imgBg.transform:SetAsFirstSibling()
		end
	end
		
	--開始轉動輪軸
	target.StartSpin = function(callback)	
		stopSymbolID = nil
		stopReelResult = {}
		stopReelIndex = gameData.RowCounts
		isSpinning = true
		
		-- 開始轉動把輪軸拉回初始位置
		local _x = rootRect.anchoredPosition.x
		local _y = rootRect.anchoredPosition.y
		rootRect.anchoredPosition = CS.UnityEngine.Vector2(_x,0)
		refreshPositionCount = 2
				
		for i=1, #pool do
			pool[i].root.gameObject:SetActive(true)
			-- 開始轉動把輪軸拉回初始位置
			local _rootX = pool[i].root.anchoredPosition.x
			local _rootY = pool[i].root.anchoredPosition.y
			pool[i].root.anchoredPosition = CS.UnityEngine.Vector2(_rootX,_rootY + _y)
			
			-- 確保symbolID 不會有重複的問題
			if(gameData.SpinDataMode == 1)then
				ResetData(i)
			end	
		end
		
		-- 回復
		HideBackground()
		
		sequenceLoop:Kill()
		sequenceSpin:Kill()
		sequenceSpin = CS.DG.Tweening.DOTween.Sequence()
		sequenceSpin:Append(rootRect:DOAnchorPosY(rootRect.anchoredPosition.y  + symbolHeight * 0.4, 0.23))
		sequenceSpin:OnComplete(function() 	
			if(callback ~= nil)then
				callback()
			end
			for i=1, #pool do		
				if(pool[i].spine ~= nil)then
					pool[i].spine.AnimationState:SetAnimation(0, "spin", false);
				else
					pool[i].imgIcon.gameObject:SetActive(false)
					pool[i].imgBlur.gameObject:SetActive(true)
				end
			end
			sequenceLoop = CS.DG.Tweening.DOTween.Sequence()
			sequenceLoop:SetLoops(-1,CS.DG.Tweening.LoopType.Restart)
			sequenceLoop:OnUpdate(function()
				local _y = rootRect.anchoredPosition.y
				local _timer = CS.UnityEngine.Time.deltaTime * gameData.SpinMoveTimer
				local movePercent = gameData.SpinPercent
				rootRect.transform:Translate(CS.UnityEngine.Vector3(0,symbolHeight * movePercent * -1,0) * _timer)
				RefreshPosition(function(index)
					if(stopReelIndex <= 0)then
						local symbolName = spinReelSetting[spinReelIndex].SymbolName
						SetData(index, nil, symbolName)
					--更換資料
					elseif(#stopReelResult >= stopReelIndex and stopReelIndex > 0)then
						local symbolID = stopReelResult[stopReelIndex].SymbolID
						local symbolName = stopReelResult[stopReelIndex].SymbolName
						SetData(index, symbolID, symbolName)	
						if(pool[index].spine ~= nil)then					
							pool[index].spine.AnimationState:SetAnimation(0, "spin", false);
						else
							pool[index].imgIcon.gameObject:SetActive(false)
							pool[index].imgBlur.gameObject:SetActive(true)
						end
						stopReelIndex = stopReelIndex -1						
					else
						local symbolName = spinReelSetting[spinReelIndex].SymbolName
						SetData(index, nil, symbolName)
						if(pool[index].spine ~= nil)then
							pool[index].spine.AnimationState:SetAnimation(0, "spin", false);
						else
							pool[index].imgIcon.gameObject:SetActive(false)
							pool[index].imgBlur.gameObject:SetActive(true)
						end
						spinReelIndex = spinReelIndex -1
						if(spinReelIndex <= 0)then
							spinReelIndex = #spinReelSetting
						end
					end
				end)
				
				local _y = rootRect.anchoredPosition.y
				if(stopSymbolID ~= nil)then
					local index = GetIndexBySymbolID(stopSymbolID)
					if(index ~= nil)then
						local _rootY = pool[index].root.anchoredPosition.y
						local _outBack = symbolHeight *0.2 -- 回彈的幅度
						if(_rootY + _y + _outBack <= 0)then
							sequenceLoop:Kill()
							sequenceSpin = CS.DG.Tweening.DOTween.Sequence()
							sequenceSpin:AppendCallback(function()
								GameG.PlayGameSound("se_normalstop")
								for i=1,#pool do
									if(pool[i].spine ~= nil)then
										pool[i].spine.AnimationState:SetAnimation(0, "stop", true);
									else
										pool[i].imgIcon.gameObject:SetActive(true)
										pool[i].imgBlur.gameObject:SetActive(false)
									end
								end
							end)
							sequenceSpin:Append(rootRect:DOAnchorPosY(_rootY * -1, 0.2))
							sequenceSpin:OnComplete(function() 
								isSpinning = false
								ShowResult()
								if(stopCallback ~= nil)then
									stopCallback()
								end	
							end)
						end
					end
				end
			end)
		end)
	end
	
	--停止轉動輪軸(symbolID 第一行的符號)
	target.StopSpinModeSymbol = function(symbolID,callback)
		stopCallback = callback
		if (symbolID == 0) then
			gameLayer.ShowMessage("结果资料错误，請確認伺服器資料", 5)
			stopSymbolID = pool[1].symbolID
		end
		
		stopSymbolID = symbolID
	end
	--停止轉動輪軸(reelResult 整列的符號)
	target.StopSpinModeData = function(reelResult,callback)	
		stopCallback = callback
		stopReelResult = reelResult
		for i=1, #reelResult do
			if(stopSymbolID == nil)then
				stopSymbolID = reelResult[i].SymbolID
			end
		end
	end
	
	-- 預知結果
	target.PredictionResult = function(reelResult, upgrad)
		
	end
		
	-- 取得輪軸是否在運轉
	target.GetIsSpinning = function()
		return isSpinning
	end
	
	--取得停輪符號
	target.GetStopSymbolID = function()
		return stopSymbolID
	end
	
	-- 取得符號的世界座標
	target.GetSymbolWorldPos = function(index)
		return pool[index].rootPos.transform.position
	end
	
	--取得圖片名稱
	target.GetSymbolName = function(symbolID)
		local index = GetIndexBySymbolID(symbolID)
		return pool[index].symbolName
	end
	
	--顯示亮框
	target.ShowWin = function(symbolID, multi)
		local index = GetIndexBySymbolID(symbolID)
		if(pool[index].spine ~= nil)then
			if(multi > 2)then
				pool[index].spine.AnimationState:SetAnimation(0, "win_xx_start", true);
				pool[index].spine.AnimationState:AddAnimation(0, "win_xx", true , 1);
			elseif(multi == 2)then
				pool[index].spine.AnimationState:SetAnimation(0, "win_x2_start", true);
				pool[index].spine.AnimationState:AddAnimation(0, "win_x2", true , 1);
			else
				pool[index].spine.AnimationState:SetAnimation(0, "win", true);
			end
		else
			pool[index].imgIcon.gameObject:SetActive(true)
			pool[index].imgBlur.gameObject:SetActive(false)
		end
	end
	
	--顯示倍率
	target.ShowBet = function(symbolID,bet,showTimer)
		if(bet ~= nil and bet <= 1)then bet = nil end
		local index = GetIndexBySymbolID(symbolID)
		pool[index].txtBet.text = bet
		pool[index].txtBet.transform.localScale = pool[index].reScaleBet
		
		local sequence = CS.DG.Tweening.DOTween.Sequence()
		sequence:Append(pool[index].txtBet.transform:DOScale(pool[index].reScaleBet * 2, showTimer))
	end
	
	-- 顯示聽牌效果
	target.ShowNearWin = function()
		local _offsetX = 0
		local _x = rootRect.sizeDelta.x * 0.5
		local _y = rectHeight * 0.5
		rootNearWin.anchoredPosition = CS.UnityEngine.Vector2(-_x + _offsetX, _y)
		rootNearWin.gameObject:SetActive(true)
		GameG.PlayGameSound("se_nearwin")
		
		local runTimer = 0.05
		local gapTimer = 0.04
		local sequence = GetSequence("near_win")
		sequence:SetLoops(-1,CS.DG.Tweening.LoopType.Restart)
		sequence:Append(rootNearWin:DOAnchorPos(CS.UnityEngine.Vector2( _x + _offsetX,  _y)	, runTimer))
		sequence:AppendInterval(gapTimer)
		sequence:Append(rootNearWin:DOAnchorPos(CS.UnityEngine.Vector2( _x + _offsetX, -_y)	, runTimer))
		sequence:AppendInterval(gapTimer)
		sequence:Append(rootNearWin:DOAnchorPos(CS.UnityEngine.Vector2(-_x + _offsetX, -_y)	, runTimer))
		sequence:AppendInterval(gapTimer)
		sequence:Append(rootNearWin:DOAnchorPos(CS.UnityEngine.Vector2(-_x + _offsetX,  _y)	, runTimer))
		sequence:AppendInterval(gapTimer)
	end
	
	-- 關閉聽牌效果
	target.HideNearWin = function()
		KillSequence("near_win")
		
		rootNearWin.gameObject:SetActive(false)
	end
		
	target.onExit = function()	
		KillTotalSequence()
		if(sequenceLoop ~= nil)then
			sequenceLoop:Kill()
			sequenceLoop = nil
		end
		
		if(sequenceSpin ~= nil)then
			sequenceSpin:Kill()		
			sequenceSpin = nil
		end

		for i=1, #pool do	pool[i] = nil	end
	end
	
	-- 顯示升級背景
	target.ShowUpgradeBackground = function()
		
	end	
	
	return target
end