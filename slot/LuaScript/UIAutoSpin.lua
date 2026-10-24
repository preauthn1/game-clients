require("Module")
mmodule(...)
local HallG = require("Global")
local GameG = HallG.RequireG("GameGlobal")
local gameData = GameG.RequireG("GameData")
local pool = {}
local currentCount = 0 --自動轉動(-1.無限,0.手動)
local clickCallback = nil

--離開遊戲
function onExit()

end

local function CreateClone(index)
	if(pool[index] ~= nil) then return pool[index] end
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
	pool[index].txt = clone.transform:Find("Text"):GetComponent("Text")
end	

function Init(root)
	rootRect = root.transform:GetComponent("RectTransform")
	rootRect.gameObject:SetActive(false)
	
	rootOption = root.transform:Find("OptionGroup"):GetComponent("RectTransform")
	
    prefab = root.transform:Find("OptionGroup/ButtonOption").gameObject	
	prefab.gameObject:SetActive(false)
	
	btnClose = root.transform:Find("ButtonClose"):GetComponent("Button")
	btnClose.onClick:AddListener(function()
		GameG.PlayGameSound("se_click")
		Hide()
    end)	
end

function SetOptionList(data)
	for i=1, #data do
		CreateClone(i)
		
		local tempIndex = i
		pool[i].count = data[i]
		pool[i].txt.text = data[i]
		pool[i].btn.onClick:AddListener(function()
			GameG.PlayGameSound("se_click")
			currentCount = data[tempIndex]
			Hide()
			if(clickCallback)then
				clickCallback()
			end
		end)
	end
end

function SetManual()
	currentCount = 0
end

function GetManual()
	return (currentCount == 0)
end

-- 顯示介面
function Show(callback)
	if(#pool == 0)then
		if(currentCount == -1)then
			currentCount = 0
		else
			currentCount = -1
		end
		if(callback)then
			callback()
		end
		return
	end
	clickCallback = callback

	rootRect.gameObject:SetActive(true)
	
	local _x = rootOption.sizeDelta.x
	rootOption.anchoredPosition = CS.UnityEngine.Vector2(_x, 0)
	
	local sequence = CS.DG.Tweening.DOTween.Sequence()
	sequence:Append(rootOption:DOAnchorPosX(0, 0.2))
end
	
-- 關閉介面
function Hide()
	local _x = rootOption.sizeDelta.x
	
	local sequence = CS.DG.Tweening.DOTween.Sequence()
	sequence:Append(rootOption:DOAnchorPosX(_x , 0.2))	
	sequence:OnComplete( function()
		rootRect.gameObject:SetActive(false)
	end)
end

-- 取得是否自動旋轉
function GetIsAutoMode()
	if(currentCount == -1)then
		return true
	elseif(currentCount > 0)then
		return true
	else
		return false
	end
end

function GetCurrentCount()
	return currentCount
end

-- 回合開始
function SetGameStart()	

end
-- 回合結束
function SetGameEnd()
	
end	
-- 開始轉動
function StartSpin()
	if(currentCount > 0) then
		currentCount = currentCount -1
	end
end

function StopSpin()	
	
end
