require("Module")
mmodule(...)
local HallG = require("Global")
local GameG = HallG.RequireG("GameGlobal")
local gameData = GameG.RequireG("GameData")
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
	
	packpotSpine = root.transform:Find("UponFx/SkeletonGraphicTitle"):GetComponent("SkeletonGraphic")
	
	txtCoin = root.transform:Find("UponFx/TextCoin"):GetComponent("Text")
end

-- 顯示介面
function Show(coin,callback)
	
	coin = coin * 0.01
	
	if(coin <= 0)then
		if(callback ~= nil)then
			callback()
		end
		return
	end
	
	GameG.PlayGameSound("se_jackpot03")
	
	completeCallback = callback
	
	rootRect.gameObject:SetActive(true)
	txtCoin.gameObject:SetActive(true)
	txtCoin.transform.localScale = CS.UnityEngine.Vector3.one	
	
	packpotSpine.AnimationState:SetAnimation(0, "start", false);
	packpotSpine.AnimationState:AddAnimation(0, "idle", true , 2);
	
	local timer = gameData.JackpotTime
	local sequence = GetSequence()
	sequence:Append(txtCoin.transform:DOScale(CS.UnityEngine.Vector3.one * 1.5 , timer));
	sequence:Join(CS.DG.Tweening.DOTween.To(SetStep, 0, coin, timer));
	sequence:AppendCallback(function()	
		WaitHide(coin)
	end)
	sequence:OnUpdate(function () 	
		if(CS.UnityEngine.Input.anyKeyDown)then	
			WaitHide(coin)
		end
	end)
end

function SetStep(temp)
	txtCoin.text = GameG.FormatNum(temp)
end

-- 等待關閉介面
function WaitHide(coin)
	-- DOTween.To 沒有跑到結束值，在這強制塞入結束值
	SetStep(coin)

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
	rootRect.gameObject:SetActive(false)
	GameG.PlayGameBGM("bgm_mg")
	
	KillSequence()
	
	if(completeCallback ~= nil)then
		completeCallback()
	end
end
