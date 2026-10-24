require("Module")
mmodule(...)
local G = require "Global"
local groupName = "UIHall";

local rootRect = nil

-----button HeadIcon
local callback_HeadIcon = nil
function SetCallbackHeadIcon(_callback)
	callback_HeadIcon = _callback
end	
-----button Recharge
local callback_Recharge = nil
function SetCallbackRecharge(_callback)
	callback_Recharge = _callback
end	


function Init(root)
	rootRect = root
	
	txt_Money = root.transform:Find("_Recharge/_Money"):GetComponent("Text")
	txt_PlayerID = root.transform:Find("_PlayerID"):GetComponent("Text")
	
	img_HeadIcon = root.transform:Find("_Head/_Icon"):GetComponent("Image")
	btn_HeadIcon = root.transform:Find("_Head"):GetComponent("Button")
	btn_HeadIcon:AddClickListener(function()
		if callback_HeadIcon ~= nil then
			callback_HeadIcon()
		end
	end)
	
	btn_Recharge = root.transform:Find("_Recharge"):GetComponent("Button")
	btn_Recharge:AddClickListener(function()
		if callback_Recharge ~= nil then
			callback_Recharge()
		end
	end)

end

--切換至遊戲背景
function ChangeBackground(gameId)
	rootGameBgDefault.gameObject:SetActive(gameId ~= nil and gameId > 0)
	
	for k,v in pairs(rootGameBg) do		
		rootGameBg[k].gameObject:SetActive(k == gameId)		
	end
end

--更新金額
function SetMoney(value)
	txt_Money.text = value
end

--顯示充值
function ShowRecharge(active)
	btn_Recharge.gameObject:SetActive(active)
end
--設置頭像圖片
function SetHeadIcon(value)
	img_HeadIcon:ResetSpriteByName(CS.AppDefine.HallNumber, tostring(value))
end

function SetPlayerID(value)
	txt_PlayerID.text = value
end