require("Module")
mmodule(...)
local HallG = require("Global")
local GameG = HallG.RequireG("GameGlobal")
local gameData = GameG.RequireG("GameData")
local pool = {}

--離開遊戲
function onExit()

end

function Init(root)
	rootRect = root.transform:GetComponent("RectTransform")
	rootRect.gameObject:SetActive(true)
	
	for i = 0, root.transform.childCount - 1 do
		local child = root.transform:GetChild(i)
		local keyName = child.name
		pool[keyName] = {}
		pool[keyName].root = child.transform:GetComponent("RectTransform")
		pool[keyName].txtSystem = child.transform:Find("TextSystem"):GetComponent("Text")
		pool[keyName].sequence = CS.DG.Tweening.DOTween.Sequence()
		pool[keyName].targetMoney = 0
		pool[keyName].Money = 0
	end
end
-- 回合開始
function SetGameStart()

end
-- 回合結束
function SetGameEnd()
	
end

function RefreshData(showSequence)
	for k,v in pairs(pool) do	
		local setValue = function(temp)
			temp = math.floor(temp * 100) * 0.01
			v.txtSystem.text = GameG.FormatNum(temp)			
		end
		
		local userBet = gameData.GetTotalBetMoney()
		local maxBet = gameData.GetMaxBet()
		local targetMoney = v.Money * userBet / maxBet * 0.01
		if(v.IsLink == true)then
			targetMoney = v.Money
		end	
				
		if(showSequence == true and v.targetMoney ~= targetMoney)then
			if(v.sequence ~= nil)then
				v.sequence:Kill()
			end
			v.sequence = CS.DG.Tweening.DOTween.Sequence()
			v.sequence:Append(CS.DG.Tweening.DOTween.To(setValue, v.targetMoney, targetMoney, 0.5));
		elseif(v.targetMoney ~= targetMoney)then
			if(v.sequence ~= nil)then
				v.sequence:Kill()
				v.sequence = nil
			end
			setValue(targetMoney)
		end
		v.targetMoney = targetMoney
	end
end

function SetData(data)
	-- GameG.Print(data)
	for k,v in pairs(data)do
		if(pool[v.Name] ~= nil)then
			pool[v.Name].Money = v.Money
			pool[v.Name].IsLink = v.IsLink
		end
	end
	RefreshData(true)
end