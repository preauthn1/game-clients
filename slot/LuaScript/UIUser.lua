require("Module")
mmodule(...)
local HallG = require("Global")
local GameG = HallG.RequireG("GameGlobal")
local gameData = GameG.RequireG("GameData")


function Create(root)
	local target = {}
    	
	local rootRect = root:GetComponent("RectTransform")
	--頭像
    local imgHead = root.transform:Find("ImageHead"):GetComponent("Image")
    --玩家編號
    local txtUserId = root.transform:Find("TextUserId"):GetComponent("Text")
	--攜帶金額
    local txtCarryMoney = root.transform:Find("TextCarryMoney"):GetComponent("Text")	
	--贏得分數
    local txtWinMoney = root.transform:Find("TextWinMoney"):GetComponent("Text")
	local winMoney = 0
	local sequenceWinMoney = nil
	
	local GetSequence = function()
		if(sequenceWinMoney ~= nil)then
			sequenceWinMoney:Kill()
		end	
		sequenceWinMoney = CS.DG.Tweening.DOTween.Sequence()
		return sequenceWinMoney
	end

	local KillSequence = function()
		if(sequenceWinMoney ~= nil)then
			sequenceWinMoney:Kill()
			sequenceWinMoney = nil
		end	
	end
	
	-- 設置攜帶金額
	target.SetCarryMoney = function(money)
		txtCarryMoney.text = GameG.FormatUnit(money)
	end
	
	-- 設置贏得分數
	target.SetWinMoney = function(money)
		winMoney = money
		txtWinMoney.text = GameG.FormatNum(winMoney)
	end
	-- 重置贏得分數
	target.ResetWinMoney = function(reset)
		if(reset == true)then
			winMoney = 0
			txtWinMoney.text = ""			
		else
			txtWinMoney.text = GameG.FormatNum(winMoney)
		end	
	end
	-- 表演贏得分數動畫
	target.AnimWinMoney = function(money,callback)
		if(money == 0) then 
			return
		end
		
		--目前分數 = 分數 * (經過時間 / 表演時間)
		local SetCoin = function(temp)
			txtWinMoney.text = GameG.FormatNum(temp)
		end
		
		local Complete = function()
			SetCoin(winMoney)
			GameG.CloseLoopSound("se_count")
			local sequence = GetSequence()
			sequence:AppendInterval(1.0)
			sequence:AppendCallback( function() 
				GameG.CloseLoopSound("se_count")
				KillSequence()
				if(callback ~= nil)then
					callback()
				end
			end)
		end
		
		GameG.PlayGameSound("se_count",true)
		
		local sequence = GetSequence()
		sequence:Append(CS.DG.Tweening.DOTween.To(SetCoin, winMoney, winMoney + money, gameData.GetMoneyShowTimer(money)));
		sequence:AppendCallback( function() 
			Complete()
		end)
		sequence:OnUpdate(function ()
			if(CS.UnityEngine.Input.anyKeyDown)then
				Complete()
			end
		end)
	
		winMoney = winMoney + money
	end
			
	target.SetGameStart = function()
		
	end
	
    target.SetGameEnd = function(data)
		
    end
	-- 設置玩家資訊
	target.SetGameUser = function(data)
		-- GameG.SetImageSprite(imgHead, tostring(data.FaceID))
		txtUserId.text = gameData.IDTitle .. tostring(data.UserID)
		txtCarryMoney.text = GameG.FormatNum(data.Score)
	end
	
	target.CheckShowWinMoney = function()
		return sequenceWinMoney ~= nil
	end
	
	target.onExit = function()
		GameG.CloseLoopSound("se_count")
		KillSequence()
	end
	
	return target
end
