require("Module")
mmodule(...)
local HallG = require("Global")
local GameG = HallG.RequireG("GameGlobal")
local gameData = GameG.RequireG("GameData")
local poolBet = {}
local betIndex = nil

--離開遊戲
function onExit()
	betIndex = nil
	for i=1, #poolBet do
		poolBet[i] = nil	
	end
end

function Init(root)
	rootRect = root:GetComponent("RectTransform")
		
    prefab = root.transform:Find("LayoutGroup/Button").gameObject	
	prefab.gameObject:SetActive(false)
end

local function CreateClone(index)
	if(poolBet[index] ~= nil) then return poolBet[index] end
	local clone = CS.UnityEngine.GameObject.Instantiate(prefab)
	if(clone == nil)then return nil end
	clone.transform:SetParent(prefab.transform.parent)
	clone.transform.localPosition = CS.UnityEngine.Vector3.zero
	clone.transform.localScale = CS.UnityEngine.Vector3.one
	clone.transform.name = prefab.name .. index
	clone.transform:SetAsFirstSibling()
	clone.gameObject:SetActive(true)
		
	poolBet[index] = {}
	poolBet[index].root = clone.transform:GetComponent("RectTransform")
	poolBet[index].txtNormal = clone.transform:Find("TextNormal"):GetComponent("Text")
	poolBet[index].txtSelect = clone.transform:Find("ImageSelect/Text"):GetComponent("Text")
	poolBet[index].imgSelect = clone.transform:Find("ImageSelect"):GetComponent("Image")
	poolBet[index].btn = clone.transform:GetComponent("Button")
	poolBet[index].btn.onClick:AddListener(function()
		GameG.PlayGameSound("se_betclick")
		ClickChoose(index)
	end)
end	

-- 設定點擊後callback
function SetClickCallback(callback)
	clickCallback = callback
end

function ClickChoose(index)
	if(index == betIndex)then
		return
	end
	
	ShowBetSelect(index)
	
	if(clickCallback ~= nil)then
		clickCallback(index)
	end
end

function SetBetRate(betRate)
	for i=1, #gameData.BetRates do
		if(gameData.BetRates[i] == betRate)then
			ShowBetSelect(i)
		end
	end
end

function SetBetRateList()
	for i=1, #gameData.BetRates do
		CreateClone(i)
		
		poolBet[i].txtNormal.text = "X" .. gameData.BetRates[i]
		poolBet[i].txtSelect.text = "X" .. gameData.BetRates[i]
		
		if(gameData.GetBetRate() == nil)then
			gameData.SetBetRateIndex(i)
		end
	end
	
	SetBetRate(gameData.GetBetRate())
end

function ShowBetSelect(index)
	betIndex = index
	gameData.SetBetRateIndex(index)
	
	for i=1, #poolBet do
		poolBet[i].imgSelect.gameObject:SetActive(i == index)
	end
end

function SetInteractable(enabled)
	for i=1, #poolBet do
		poolBet[i].btn.interactable = enabled
	end
end