require("Module")
mmodule(...)
local HallG = require("Global")
local GameG = HallG.RequireG("GameGlobal")
local gameData = GameG.RequireG("GameData")
local doorCloseX = 1000
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
end

function Init(root)
	rootRect = root.transform:GetComponent("RectTransform")
	rootRect.gameObject:SetActive(true)
	
	imgCount = root.transform:Find("ImageCount"):GetComponent("Image")
	txtCount = root.transform:Find("ImageCount/Text"):GetComponent("Text")
	imgCount.gameObject:SetActive(false)
end

-- 回合開始
function SetGameStart()

end

-- 回合結束
function SetGameEnd()

end

function Show(callback)
	if(gameData.BonusGame == nil)then
		if(callback ~= nil)then
			callback()
		end
		return
	end
	
	-- 表演過場動畫
	if(callback ~= nil)then
		callback()
	end	
end

function ShowBonusGameCount()
	if(gameData.RetriggerBonusGame == nil)then
		imgCount.gameObject:SetActive(false)
		return
	end
	if(gameData.RetriggerBonusGame.Count <= 0)then
		imgCount.gameObject:SetActive(false)
		return
	end
	imgCount.gameObject:SetActive(true)
	txtCount.text = "X" .. gameData.RetriggerBonusGame.Count
	
	local sequence = GetSequence()
	sequence:Append(imgCount.transform:DOScale(CS.UnityEngine.Vector3.one *1.2 , 0.5))
	sequence:Append(imgCount.transform:DOScale(CS.UnityEngine.Vector3.one , 0.5))
end
