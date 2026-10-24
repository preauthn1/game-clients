require("Module")
mmodule(...)
local HallG = require("Global")
local GameG = HallG.RequireG("GameGlobal")
local gameData = GameG.RequireG("GameData")
local gameModel= GameG.RequireG("GameModel")
local pool = {}
local completeCallback = nil
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

--離開遊戲
function onExit()
	KillTotalSequence()
	
	for i=1, #pool do
		pool[i] = nil	
	end
end

function Init(root)
	rootRect = root.transform:GetComponent("RectTransform")
	rootRect.gameObject:SetActive(false)

	rootOption = root.transform:Find("RootOption"):GetComponent("RectTransform")
	
	rootMoney = root.transform:Find("RootMoney"):GetComponent("RectTransform")
	rootMoney.gameObject:SetActive(false)	
	txtMoney = root.transform:Find("RootMoney/Text"):GetComponent("Text")
	imageTitle = {}
	for i=1, 4 do
		imageTitle[i] = root.transform:Find("RootMoney/ImageTitle" .. i):GetComponent("Image")
	end
			
	txtScore = root.transform:Find("TextScore"):GetComponent("Text")
	txtCount = root.transform:Find("TextCount"):GetComponent("Text")
	
	rootTimer = root.transform:Find("ImageTimer"):GetComponent("RectTransform")
	txtTimer = root.transform:Find("ImageTimer/Text"):GetComponent("Text")		
		
	for i=1, rootOption.transform.childCount do
		local child = rootOption.transform:GetChild(i -1)
		for j=1, child.transform.childCount do
			local index = #pool +1
			pool[index] = {}
			pool[index].root = child.transform:GetChild(j -1):GetComponent("RectTransform")
			pool[index].btn = child.transform:GetChild(j -1):GetComponent("Button")
			pool[index].btn.onClick:AddListener(function()
				ChooseOption(index)
			end)
			pool[index].spine = child.transform:GetChild(j -1):Find("SkeletonGraphic (bonus_coin)"):GetComponent("SkeletonGraphic")
		end
	end
end

-- 回合開始
function SetGameStart()

end

-- 回合結束
function SetGameEnd()

end

--表演
function Show(callback)
	if(gameData.BonusGame == nil)then
		if(callback ~= nil)then
			callback()
		end
		return
	end
		
	if(gameData.RetriggerBonusGame ~= nil)then
		local count = gameData.RetriggerBonusGame.Count
		gameData.RetriggerBonusGame.Count = count -1
	end	
	
	GameG.Print("BounsGame",gameData.BonusGame)
	completeCallback = callback
	rootRect.gameObject:SetActive(true)
	
	GameG.PlayGameBGM("bgm_jp")	
	-- 顯示未開獎勵狀態
	rootOption.gameObject:SetActive(true)
	rootMoney.gameObject:SetActive(false)
	
	for i=1, #pool do
		pool[i].btn.enabled = true
		pool[i].spine.AnimationState:SetAnimation(0, "idle_coin", true);
		pool[i].record = nil		
	end
	
	for i=1, #imageTitle do
		imageTitle[i].gameObject:SetActive(false)
	end
	
	RecoverRecord()
	ShowAllReward()
	StartCountdown()
end

-- 回復翻牌紀錄
function RecoverRecord()
	for k,v in pairs(gameData.BonusGame.Records)do
		local data = gameData.BonusGame.Records[k]
		local index = data.Location
		if(pool[index] ~= nil)then			
			pool[index].btn.enabled = false
			pool[index].record = data
			if(data.RewareValue == 1)then
				pool[index].spine.AnimationState:SetAnimation(0, "idle_huge", false);
			elseif(data.RewareValue == 2)then
				pool[index].spine.AnimationState:SetAnimation(0, "idle_big", false);
			elseif(data.RewareValue == 3)then
				pool[index].spine.AnimationState:SetAnimation(0, "idle_medium", false);
			elseif(data.RewareValue == 4)then
				pool[index].spine.AnimationState:SetAnimation(0, "idle_small", false);
			end
		end
	end
end

-- 等待關閉介面
function WaitHide()
	if(completeCallback ~= nil)then
		completeCallback()
	end
end

-- 關閉介面
function Hide()	
	gameData.BonusGame = gameData.BonusGameStandby
	gameData.BonusGameStandby = nil
	
	rootRect.gameObject:SetActive(false)	
	rootMoney.gameObject:SetActive(false)
	
	GameG.PlayGameBGM("bgm_mg")
end

function ChooseOption(index)
	local data = gameData.GetBonusGameRecord(index)
	if(data ~= nil)then
		data.Location = index
		gameModel.SendPickBonus(data)
	end
	
	local data = gameData.BonusGame.Records[#gameData.BonusGame.Records]
	if(data.Location ~= index)then
		--從新計時自動翻牌
		StartCountdown()
	else
		KillSequence("countdown")
		rootTimer.gameObject:SetActive(false)
	
		for k,v in pairs(pool)do
			if(pool[k].record == nil)then
				pool[k].btn.enabled = false
				pool[k].spine.AnimationState:SetAnimation(0, "bw_coin", false);
			end
		end
	end
end

function SetRecords(data)
	GameG.PlayGameSound("se_flip")
	
	local index = data.Location
	pool[index].record = data
	pool[index].btn.enabled = false
	if(data.RewareValue == 1)then
		pool[index].spine.AnimationState:SetAnimation(0, "start_huge", false);
	elseif(data.RewareValue == 2)then
		pool[index].spine.AnimationState:SetAnimation(0, "start_big", false);
	elseif(data.RewareValue == 3)then
		pool[index].spine.AnimationState:SetAnimation(0, "start_medium", false);
	elseif(data.RewareValue == 4)then
		pool[index].spine.AnimationState:SetAnimation(0, "start_small", false);
	end
	
	-- 翻完牌，顯示下個階段
	local sequence = GetSequence()
	sequence:AppendInterval(1.0)
	sequence:OnComplete(function() 
		ShowAllReward(index)
	end)
	
end

-- 開出所有獎項
function ShowAllReward(index)	
	-- 還未翻完全部
	local data = gameData.GetBonusGameRecord(0)
	if(data ~= nil)then
		return
	end	
	
	-- 不是最後一個
	local data = gameData.BonusGame.Records[#gameData.BonusGame.Records]
	if(data.Location ~= index and index ~= nil)then
		return
	end
	
	for k,v in pairs(pool)do
		if(pool[k].record == nil)then
			pool[k].btn.enabled = false
			pool[k].spine.AnimationState:SetAnimation(0, "bw_coin", false);
		elseif(pool[k].record.RewareValue == data.RewareValue)then
			if(data.RewareValue == 1)then
				pool[k].spine.AnimationState:SetAnimation(0, "idle_huge", true);
			elseif(data.RewareValue == 2)then
				pool[k].spine.AnimationState:SetAnimation(0, "idle_big", true);
			elseif(data.RewareValue == 3)then
				pool[k].spine.AnimationState:SetAnimation(0, "idle_medium", true);
			elseif(data.RewareValue == 4)then
				pool[k].spine.AnimationState:SetAnimation(0, "idle_small", true);
			end	
		end
	end
	
	if(data.RewareValue == 1)then
		GameG.PlayGameSound("jp_grand")
	elseif(data.RewareValue == 2)then
		GameG.PlayGameSound("jp_major")
	elseif(data.RewareValue == 3)then
		GameG.PlayGameSound("jp_minor")
	elseif(data.RewareValue == 4)then
		GameG.PlayGameSound("jp_mini")
	end
	
	local sequence = GetSequence()
	sequence:AppendInterval(2.0)
	sequence:OnComplete(function() 
		ShowMoney()
	end)
end

-- 顯示獲得金額
function ShowMoney()
	rootMoney.gameObject:SetActive(true)
	txtMoney.text = GameG.FormatNum(gameData.BonusGame.WinMoney)
	txtMoney.transform.localScale = CS.UnityEngine.Vector3.one	
	
	local sequence = GetSequence()
	local data = gameData.BonusGame.Records[#gameData.BonusGame.Records]
	imageTitle[data.RewareValue].gameObject:SetActive(true)
	if(data.RewareValue == 1)then
		sequence:AppendInterval(4.7)
	elseif(data.RewareValue == 2)then
		sequence:AppendInterval(3.3)
	elseif(data.RewareValue == 3)then
		sequence:AppendInterval(2.5)
	elseif(data.RewareValue == 4)then
		sequence:AppendInterval(1.7)
	end
	
	sequence:OnComplete(function() 
		WaitHide()
	end)
end
-- 開始倒數計時
function StartCountdown()
	local sequence = GetSequence("countdown")
	local timer = gameData.BonusTotalCountdown
	for i = timer, 1, -1 do
        sequence:AppendCallback(function() 
			rootTimer.gameObject:SetActive(gameData.BonusShowCountdown >= i and timer >= i)
			txtTimer.text = tostring(i)
		end)
        sequence:AppendInterval(1)
    end
	sequence:OnComplete(function()
        rootTimer.gameObject:SetActive(false)
		StartAutoChoose()
	end)
end

-- 自動選擇獎勵
function StartAutoChoose()
	local list = GetCanChooseList()
	local sequence = GetSequence()
	for k,v in pairs(gameData.BonusGame.Records)do
		local data = gameData.BonusGame.Records[k]
		if(data.Location == 0)then
			sequence:AppendCallback(function() 
				ChooseOption(list[k])
			end)
			sequence:AppendInterval(0.1)
		end
	end
end

-- 取得目前可選擇的獎勵
function GetCanChooseList()
	local list = {}
	for k, v in pairs(pool)do		
		if(pool[k].btn.enabled == true)then
			table.insert(list,k)
		end
	end

	-- 還需亂數可選擇的獎勵
	for i=1, #list do
		local index = math.random(i,#list)		
		if(i ~= index)then
			local temp = list[index]
			list[index] = list[i]
			list[i] = temp
		end
	end	
	
	return list
end
