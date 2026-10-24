require("Module")
mmodule(...)
local HallG = require("Global")
local GameG = HallG.RequireG("GameGlobal")
local gameData = GameG.RequireG("GameData")
local rootRect
local prefab
local pool = {}
local mScrollChoose
local currentIndex = 1
local clickCallback = nil

function Init(root)
	rootRect = root.transform:GetComponent("RectTransform")
	rootRect.gameObject:SetActive(false)
	
	rootOption = root.transform:Find("ScrollView/Mask/Offset/Content/OptionGroup"):GetComponent("RectTransform")
	
    prefab = root.transform:Find("ScrollView/Mask/Offset/Content/OptionGroup/ButtonOption").gameObject	
	prefab.gameObject:SetActive(false)
		
	btnClose = root.transform:Find("ButtonClose"):GetComponent("Button")
	btnClose.onClick:AddListener(function()
		GameG.PlayGameSound("se_click")
		Hide()
    end)
	
	-- 滾動
	local scrollRect = root.transform:Find("ScrollView"):GetComponent("ScrollRect")		
	-- 選項高度
	local optionHeight = prefab:GetComponent("RectTransform").sizeDelta.y
	-- 建立滾動
	mScrollChoose = GameG.RequireG("MScrollChoose").Create(scrollRect, optionHeight, ChooseAction)
end

local function CreateClone(index)
	local clone = CS.UnityEngine.GameObject.Instantiate(prefab)
	if(clone == nil)then return nil end
	clone.gameObject:SetActive(true)
	clone.transform:SetParent(prefab.transform.parent)
	clone.transform.position = CS.UnityEngine.Vector3.zero
	clone.transform.localScale = CS.UnityEngine.Vector3.one

	pool[index] = {}
	pool[index].root = clone.transform:GetComponent("RectTransform")
	pool[index].btn = clone.transform:GetComponent("Button")
	pool[index].txtBet = clone.transform:Find("TextBet"):GetComponent("Text")
end

-- 離開遊戲
function onExit()	
	for i=1, #pool do	
		pool[i] = nil 
	end
	
	mScrollChoose.Close()
end

-- 回合開始
function SetGameStart()
	Hide()
end

-- 回合結束
function SetGameEnd()

end

-- 顯示介面
function Show()
	rootRect.gameObject:SetActive(true)
	
	mScrollChoose.Show()
	mScrollChoose.MoveIndexPos(currentIndex)
end
	
-- 關閉介面
function Hide()
	if(rootRect.gameObject.activeSelf == false)then
		return
	end
	
	rootRect.gameObject:SetActive(false)

	mScrollChoose.ChooseNow()
	mScrollChoose.Close()
end

--設定資料
function SetData(data)
	for k,v in pairs(pool) do
		v.root.gameObject:SetActive(false)
	end
	
	for index,count in pairs(data) do
		if pool[index] == nil then
			CreateClone(index)
		end
		
		local tempIndex = index
		pool[index].root.gameObject:SetActive(true)
		pool[index].root.transform:SetAsFirstSibling()
		pool[index].txtBet.text = GameG.FormatNum(count)
		pool[index].betCount = count
	end
		
	local pos = rootOption.anchoredPosition;
	rootOption.anchoredPosition = CS.UnityEngine.Vector2(pos.x, 0)
	
	--設定Pool
	mScrollChoose.SetPool(pool)
	mScrollChoose.Infinity()
end

-- 取得目前倍率
function GetCurrentBetCount()
	return pool[currentIndex].betCount
end

-- 取得目前索引
function GetCurrentIndex()
	return currentIndex
end
	
-- 取得目前所選位置
function GetCurrentPosition()
	return pool[currentIndex].root.transform.position
end

-- 設定點擊後callback
function SetClickCallback(callback)
	clickCallback = callback
end

-- 設定目前索引
local function SetCurrentIndex(index)
	currentIndex = index
	if clickCallback ~= nil then
		clickCallback()
	end
end

-- 設定目前倍率
function SetCurrentBetCount(value)
	for i=1, #pool do
		if(pool[i].betCount == value)then
			SetCurrentIndex(i)
			mScrollChoose.MoveIndexPos(currentIndex)
		end
	end
end

-- 降低倍率
function ClickDown()
	SetCurrentIndex(currentIndex -1)
	mScrollChoose.MoveIndexPos(currentIndex)
end

-- 提高倍率
function ClickUp()
	SetCurrentIndex(currentIndex +1)
	mScrollChoose.MoveIndexPos(currentIndex)
end

-- 滾動結果
function ChooseAction(index)
	SetCurrentIndex(index + 1)
end