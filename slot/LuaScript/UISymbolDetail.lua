require("Module")
mmodule(...)
local HallG = require("Global")
local GameG = HallG.RequireG("GameGlobal")
local gameData = GameG.RequireG("GameData")

local symbolTable = {}

--離開遊戲
function onExit()

end

function Init(root)
	rootRect = root:GetComponent("RectTransform")
	rootRect.gameObject:SetActive(false)

	btnClose = root.transform:Find("ButtonClose"):GetComponent("Button")
	btnClose.onClick:AddListener(function()
		GameG.PlayGameSound("se_click")
		Hide()
	end)
	
	rootNormalBg = root.transform:Find("ImageNormalBg"):GetComponent("RectTransform")
	rootFeatureBg = root.transform:Find("ImageFeatureBg"):GetComponent("RectTransform")
	rootFeatureBg.gameObject:SetActive(false)
	
	imgSymbol = root.transform:Find("ImageSymbol"):GetComponent("Image")
	symbolClass = {}
	symbolClass.SetNormal = function(isNormal)
		if(isNormal)then
			imgSymbol:GetComponent("RectTransform").anchoredPosition = CS.UnityEngine.Vector2(-95, 110)		
		else
			imgSymbol:GetComponent("RectTransform").anchoredPosition = CS.UnityEngine.Vector2(0, 110)
		end
	end
	txtContent = root.transform:Find("TextContent"):GetComponent("Text")
	
	rootSymbol = root.transform:Find("RootDetail/Count"):GetComponent("RectTransform")
	
	txtSymbol = {}
	txtSymbol[2] = root.transform:Find("RootDetail/Count/Text2"):GetComponent("Text")
	txtSymbol[3] = root.transform:Find("RootDetail/Count/Text3"):GetComponent("Text")
	txtSymbol[4] = root.transform:Find("RootDetail/Count/Text4"):GetComponent("Text")
	txtSymbol[5] = root.transform:Find("RootDetail/Count/Text5"):GetComponent("Text")
	txtSymbol[6] = root.transform:Find("RootDetail/Count/Text6"):GetComponent("Text")
	txtSymbol[7] = root.transform:Find("RootDetail/Count/Text7"):GetComponent("Text")
	txtSymbol[8] = root.transform:Find("RootDetail/Count/Text8"):GetComponent("Text")
	txtSymbol[9] = root.transform:Find("RootDetail/Count/Text9"):GetComponent("Text")
end

-- 顯示介面
function Show(data)
	rootRect.gameObject:SetActive(true)
	symbolClass.SetNormal(true)
	
	data.symbolName = gameData.ChangeSymbolName(data.symbolName)
	
	isFeature = (string.find(data.symbolName, "p") == nil)
	rootNormalBg.gameObject:SetActive(isFeature == false)
	rootFeatureBg.gameObject:SetActive(isFeature == true)
	
	imgSymbol.sprite = nil
	GameG.SetImageSprite(imgSymbol,"symbol_n_" .. data.symbolName)
	imgSymbol.gameObject:SetActive(imgSymbol.sprite ~= nil)
	
	for k,v in pairs(txtSymbol) do		
		local detail = gameData.GetSymbolPayDetail(data.symbolName,k)
		txtSymbol[k].gameObject:SetActive(detail ~= nil)
		if(detail ~= nil)then
			txtSymbol[k].text = detail.payout
		end
	end
	
	local haveCount = false
	for k, v in pairs(txtSymbol) do
		if(txtSymbol[k].gameObject.activeSelf == true)then
			haveCount = true
		end
	end
	rootSymbol.gameObject:SetActive(haveCount)
	
	local descData = gameData.GetDescriptions(data.symbolName)
	if(descData ~= nil)then
		txtContent.text = descData.Desc
		
		if(haveCount == false)then
			symbolClass.SetNormal(false)
		end
	else
		txtContent.text = ""
	end
end
	
-- 關閉介面
function Hide()	
	rootRect.gameObject:SetActive(false)	
end

-- 回合開始
function SetGameStart()	
	
end
-- 回合結束
function SetGameEnd()
	
end

function SetStartSpin()
	
end