require("Module")
mmodule(...)
local HallG = require("Global")
local GameG = HallG.RequireG("GameGlobal")
local gameData = GameG.RequireG("GameData")
local poolStep = {}
local isPlaying = false
local sequenceShow = nil

local GetSequence = function()
	if(sequenceShow ~= nil)then
		sequenceShow:Kill()
	end	
	sequenceShow = CS.DG.Tweening.DOTween.Sequence()
	return sequenceShow
end

local KillSequence = function()
	if(sequenceShow ~= nil)then
		sequenceShow:Kill()
		sequenceShow = nil
	end	
end

--離開遊戲
function onExit()
	KillSequence()
end

function Init(root)
	rootRect = root:GetComponent("RectTransform")
	rootRect.gameObject:SetActive(false)
	
	spineDragon = root.transform:Find("UponLayer/SkeletonGraphic (dragon_win)"):GetComponent("SkeletonGraphic")
	
	for i = 1, 4 do
		poolStep[i] = {}
		poolStep[i].root = root.transform:Find("UponLayer/Step"..i)
		poolStep[i].root.gameObject:SetActive(false)
		poolStep[i].spineTitle = root.transform:Find("UponLayer/Step"..i .."/SkeletonGraphicTitle"):GetComponent("SkeletonGraphic")
		poolStep[i].spineWin = root.transform:Find("UponLayer/Step"..i .."/SkeletonGraphicWin"):GetComponent("SkeletonGraphic")
	end
	
	txtCoin = root.transform:Find("UponLayer/TextCoin"):GetComponent("Text")
end

-- 顯示介面
function Show(coin,callback)
	if (coin < gameData.BigWinStep[1])then
		if(callback ~= nil)then
			callback()
		end
		return		
	end
	completeCallback = callback
	txtCoin.gameObject:SetActive(true)
	txtCoin.transform.localScale = CS.UnityEngine.Vector3.one
	
	isPlaying = false
	local timer = gameData.GetMoneyShowTimer(coin)
	local sequence = GetSequence()
	sequence:Append(txtCoin.transform:DOScale(CS.UnityEngine.Vector3.one * 1.5 , timer));	
	sequence:Join(CS.DG.Tweening.DOTween.To(SetStep, 0, coin, timer));
	sequence:AppendCallback( function()	
		WaitHide(coin)
	end)	
	sequence:OnUpdate(function ()
		if(CS.UnityEngine.Input.anyKeyDown)then	
			WaitHide(coin)
		end
	end)
end

-- 等待關閉介面
function WaitHide(coin)
	-- DOTween.To 沒有跑到結束值，在這強制塞入結束值
	SetStep(coin)
	
	GameG.PlayGameSound("se_winend")
	
	txtCoin.gameObject:SetActive(true)
	txtCoin.transform.localScale = CS.UnityEngine.Vector3.one * 1.5	
	
	local sequence = GetSequence()
	sequence:AppendInterval(2.0)
	sequence:OnComplete(function() 
		Hide()
	end)	
end
	
-- 關閉介面
function Hide()
	KillSequence()
	rootRect.gameObject:SetActive(false)
	
	if(gameData.FreeGame == nil)then
		GameG.PlayGameBGM("bgm_mg")
	else
		GameG.PlayGameBGM("bgm_fg")
	end
	
	if(completeCallback ~= nil)then
		completeCallback()
	end
end
-- 回合開始
function SetGameStart()	

end
-- 回合結束
function SetGameEnd()
	
end

-- 是否在表演
function CheckShowTimer()
	return sequenceShow ~= nil
end

function SetStep(temp)
	txtCoin.text = GameG.FormatNum(temp)
		
	rootRect.gameObject:SetActive(temp >= gameData.BigWinStep[1])	
		
	local targetStep = 0
	for i=1, #gameData.BigWinStep do
		if(temp >= gameData.BigWinStep[i])then
			targetStep = i
		end
	end
	
	if(temp >= gameData.BigWinStep[1] and isPlaying == false)then
		GameG.PlayGameBGM("se_bigwin")
		isPlaying = true
		spineDragon.AnimationState:SetAnimation(0, "start", false);
		spineDragon.AnimationState:AddAnimation(0, "idle", true , 1);
	end
	
	for i=1, #poolStep do
		if(i == targetStep and poolStep[i].root.gameObject.activeSelf == false)then
			poolStep[i].root.gameObject:SetActive(true)
			poolStep[i].spineTitle.AnimationState:SetAnimation(0, "start", false);
			poolStep[i].spineTitle.AnimationState:AddAnimation(0, "idle", true , 1);
			poolStep[i].spineWin.AnimationState:SetAnimation(0, "start", false);
			poolStep[i].spineWin.AnimationState:AddAnimation(0, "idle", true , 1);
			GameG.PlayGameSound("se_word")			
		end
		poolStep[i].root.gameObject:SetActive(i == targetStep)
	end
end