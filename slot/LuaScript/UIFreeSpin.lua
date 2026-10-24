require("Module")
mmodule(...)
local HallG = require("Global")
local GameG = HallG.RequireG("GameGlobal")
local gameData = GameG.RequireG("GameData")
local gameModel= GameG.RequireG("GameModel")
local autoSequenceKey = 0
local sequenceDict = {}
local retriggerCallback = nil
local isFreeSpining = false

local colors = {}
colors["w2"] = CS.UnityEngine.Color(10,156,34,255)
colors["w3"] = CS.UnityEngine.Color(255,108,0,255)
colors["w4"] = CS.UnityEngine.Color(235,0,0,255)

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
end

function Init(root, rootResult)
	rootRect = root:GetComponent("RectTransform")
	rootRect.gameObject:SetActive(false)

	txtLeftCount = root.transform:Find("TextLeftCount"):GetComponent("Text")
	----- Mode
	rootMode = root.transform:Find("RootMode"):GetComponent("RectTransform")
	rootMode.gameObject:SetActive(false)
	
	imgModeBg = root.transform:Find("RootMode"):GetComponent("RawImage")
	
	imgModeCountdown = root.transform:Find("RootMode/ImageCountdown"):GetComponent("Image")
	txtModeCountdown = root.transform:Find("RootMode/ImageCountdown/Text"):GetComponent("Text")
	
	poolMode = {}
	for i=1, 3 do
		poolMode[i] = {}
		poolMode[i].imgAlpha = {}
		poolMode[i].imgAlpha[1] = root.transform:Find("RootMode/LayoutGroup/Button" .. i .."/ImageIcon"):GetComponent("Image")
		poolMode[i].txtDouble = {}
		poolMode[i].txtDouble[1] = root.transform:Find("RootMode/LayoutGroup/Button" .. i .."/TextDoubleL"):GetComponent("Text")
		poolMode[i].txtDouble[2] = root.transform:Find("RootMode/LayoutGroup/Button" .. i .."/TextDoubleR"):GetComponent("Text")
		poolMode[i].txtCount = root.transform:Find("RootMode/LayoutGroup/Button" .. i .."/TextCount"):GetComponent("Text")
		poolMode[i].btn = root.transform:Find("RootMode/LayoutGroup/Button" .. i):GetComponent("Button")
		poolMode[i].btn.onClick:AddListener(function()
			GameG.PlayGameSound("se_fgselect")
			ChooseOption(i)
		end)
		poolMode[i].option = nil
	end
	
	----- Retrigger
	rootRetrigger = root.transform:Find("RootRetrigger"):GetComponent("RectTransform")
	rootRetrigger.gameObject:SetActive(false)
	
	spineRetrigger = root.transform:Find("RootRetrigger/SkeletonGraphic (free_game)"):GetComponent("SkeletonGraphic")
	txtRetrigger = root.transform:Find("RootRetrigger/Text"):GetComponent("Text")
	
	----- WinMoney
	rootWinMoney = root.transform:Find("RootWinMoney"):GetComponent("RectTransform")
	rootWinMoneyBg = root.transform:Find("RootWinMoney/Image"):GetComponent("RectTransform")
	txtWinMoney = root.transform:Find("RootWinMoney/Image/Text"):GetComponent("Text")
	
	isFreeSpining = false
end
--取得目前是否在free spin
function InState()
	return isFreeSpining
end

-- 顯示介面
function Show(callback)	
	if(gameData.FreeGame == nil)then
		if(callback ~= nil)then
			callback()
		end
		return
	end
	if(gameData.FreeGame.LeftCount == 0)then
		if(callback ~= nil)then
			callback()
		end
		return
	end
		
	local sequence = GetSequence()	
	if(isFreeSpining == false)then
		GameG.PlayGameBGM("bgm_fg")		
		sequence:AppendInterval(2)
	end	
	
	sequence:OnComplete(function()			
		if(callback ~= nil)then
			callback()
		end
	end)
	
	isFreeSpining = true
	rootRect.gameObject:SetActive(true)	
	HideGameOption()
	
	txtLeftCount.text = gameData.FreeGame.LeftCount -1	
end

-- 關閉介面
function Hide(money,callback)
	if(gameData.FreeGame == nil)then
		if(callback ~= nil)then
			callback()
		end
		return
	elseif(gameData.FreeGame.LeftCount > 0)then
		if(callback ~= nil)then
			callback()
		end
		return
	end
	
	isFreeSpining = false
	rootRect.gameObject:SetActive(true)
	rootWinMoney.gameObject:SetActive(true)
	
	rootWinMoneyBg.transform.localScale = CS.UnityEngine.Vector3.one * 0.2
	
	txtWinMoney.text = GameG.FormatNum(money)
	
	GameG.CloseBGMSound()
	GameG.PlayGameSound("se_fgend")
	
	local sequence = GetSequence()
	sequence:Append(rootWinMoneyBg:DOScale(CS.UnityEngine.Vector3.one, 0.2))
	sequence:AppendInterval(3)
	sequence:AppendCallback(function()
		GameG.PlayGameBGM("bgm_mg")
		gameData.FreeGame = nil
		rootRect.gameObject:SetActive(false)
		rootWinMoney.gameObject:SetActive(false)
		if(callback ~= nil)then
			callback()
		end
	end)
end
-- 回合開始
function SetGameStart()	

end
-- 回合結束
function SetGameEnd()
	
end

-- 開始遊戲
function StartGame()
	
	
end

-- =============================================================
-- 顯示選擇模式
function ShowGameOption(callback)
	if(gameData.FreeMode == nil)then
		if(callback ~= nil)then
			callback()
		end		
		return
	end
	
	GameG.Print("FreeMode",gameData.FreeMode)	
	GameG.PlayGameBGM("bgm_fm")	
	
	rootRect.gameObject:SetActive(true)
	rootMode.gameObject:SetActive(true)	
	
	for i=1, #gameData.FreeMode.Options do
		if(poolMode[i] ~= nil)then
			poolMode[i].option = gameData.FreeMode.Options[i]
			
			local optionData = gameData.FreeMode.ParseOptions[i]
			poolMode[i].txtCount.text = optionData.Data.count
			
			local freeID = optionData.ID
			local info = gameData.GetFreeGameInfoByID(freeID)			
			poolMode[i].txtDouble[1].text = "X" .. info.Data.multi[1]
			poolMode[i].txtDouble[2].text = "X" .. info.Data.multi[2]
			poolMode[i].btn.interactable = true
		end
	end	
		
	-- 淡入動畫
	AlphaFadeIn(imgModeBg)
	for i=1, #poolMode do
		AlphaFadeIn(poolMode[i].txtDouble[1])
		AlphaFadeIn(poolMode[i].txtDouble[2])
		AlphaFadeIn(poolMode[i].txtCount)
		for j=1, #poolMode[i].imgAlpha do
			AlphaFadeIn(poolMode[i].imgAlpha[j])
		end
	end
	-- 開始倒數計時
	StartCountdown()	
end

-- 等待關閉選擇模式
function WaitHideGameOption()
	gameData.FreeMode = nil
end

-- 關閉選擇模式
function HideGameOption()
	rootMode.gameObject:SetActive(false)
end

-- 開始倒數計時
function StartCountdown()
	local sequence = GetSequence("countdown")
	local timer = gameData.FreeSpinTotalCountdown
	for i = timer, 1, -1 do
        sequence:AppendCallback(function() 
			imgModeCountdown.gameObject:SetActive(gameData.FreeSpinShowCountdown >= i and timer >= i)
			txtModeCountdown.text = tostring(i)
		end)
        sequence:AppendInterval(1)
    end
	sequence:OnComplete(function()
        imgModeCountdown.gameObject:SetActive(false)
		StartAutoChoose()
	end)
end

-- 自動選擇模式
function StartAutoChoose()
	local index = math.random(1, #poolMode)
	ChooseOption(index)
end

-- 選擇模式
function ChooseOption(index)
	KillSequence("countdown")
	WaitHideGameOption()
	-- 淡入動畫
	
	-- 淡出動畫	
	for i=1, #poolMode do
		poolMode[i].btn.interactable = false
		if(i ~= index)then
			AlphaFadeOut(poolMode[i].txtDouble[1])
			AlphaFadeOut(poolMode[i].txtDouble[2])
			AlphaFadeOut(poolMode[i].txtCount)
			for j=1, #poolMode[i].imgAlpha do
				AlphaFadeOut(poolMode[i].imgAlpha[j])
			end
		end
	end
	
	local sequence = GetSequence()
	sequence:AppendInterval(2)
	sequence:OnComplete(function()       
		-- 送出封包
		if(poolMode[index].option ~= nil)then
			gameModel.SendFreeGameMode(poolMode[index].option)
		end
	end)	
end

-- 物件淡入淡出
function AlphaFadeIn(obj,timer)
	timer = timer or 1
	local oriColor = obj.color
	obj.color = CS.UnityEngine.Color(oriColor.r,oriColor.g,oriColor.b,0.3)
	local sequence = GetSequence()
	sequence:Append(obj:DOColor(CS.UnityEngine.Color(oriColor.r,oriColor.g,oriColor.b,1), timer));
end

-- 物件淡入淡出
function AlphaFadeOut(obj, timer)
	timer = timer or 1
	local oriColor = obj.color
	obj.color = CS.UnityEngine.Color(oriColor.r,oriColor.g,oriColor.b,1)
	local sequence = GetSequence()
	sequence:Append(obj:DOColor(CS.UnityEngine.Color(oriColor.r,oriColor.g,oriColor.b,0.7), timer));
end
-- =============================================================
-- 顯示再次觸發
function ShowRetrigger(callback)
	if(gameData.RetriggerFreeGame == nil)then
		if(callback ~= nil)then
			callback()
		end
		return
	end
	retriggerCallback = callback
	rootRect.gameObject:SetActive(true)
	rootRetrigger.gameObject:SetActive(true)
	
	GameG.PlayGameSound("se_retrigger")
		
	local freeGameInfo = gameData.GetFreeGameInfoByID(gameData.RetriggerFreeGame.ID)
	if(freeGameInfo == nil)then
	
	elseif(freeGameInfo.Data.key == "w2")then
		txtRetrigger.color = colors["w2"]
		spineRetrigger.AnimationState:SetAnimation(0, "start_green", false);
		spineRetrigger.AnimationState:AddAnimation(0, "idle_green", true , 1);
	elseif(freeGameInfo.Data.key == "w3")then
		txtRetrigger.color = colors["w3"]	
		spineRetrigger.AnimationState:SetAnimation(0, "start_yellow", false);
		spineRetrigger.AnimationState:AddAnimation(0, "idle_yellow", true , 1);
	elseif(freeGameInfo.Data.key == "w4")then
		txtRetrigger.color = colors["w4"]	
		spineRetrigger.AnimationState:SetAnimation(0, "start_red", false);
		spineRetrigger.AnimationState:AddAnimation(0, "idle_red", true , 1);
	end
	
	txtRetrigger.text = "+" .. gameData.RetriggerFreeGame.Count
	
	local sequence = GetSequence()
	sequence:AppendInterval(3.979)
	sequence:OnComplete(function()
        HideRetrigger()
	end)	
end
-- 關閉再次觸發
function HideRetrigger()
	gameData.RetriggerFreeGame = nil
	rootRect.gameObject:SetActive(true)
	rootRetrigger.gameObject:SetActive(false)
	if(retriggerCallback ~= nil)then
		retriggerCallback()
	end
end