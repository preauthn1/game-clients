local Img_MenuGroup = this.transform:Find("_MenuGroup")
local Btn_Hide = this.transform:Find("_MenuGroup/_Hide"):GetComponent("Button")
local Btn_Exit = this.transform:Find("_MenuGroup/_Exit"):GetComponent("Button")
local Btn_Setting = this.transform:Find("_MenuGroup/_Setting"):GetComponent("Button")
local Btn_Help = this.transform:Find("_MenuGroup/_Help"):GetComponent("Button")
local Btn_ShowMenu = this.transform:Find("_ShowMenu"):GetComponent("Button")
local RecTran_FishType = this.transform:Find("_FishType"):GetComponent("RectTransform")
local Btn_CloseFishType = this.transform:Find("_FishType/_CloseFishType"):GetComponent("Button")
local RecTran_GridNormal = this.transform:Find("_FishType/ScrollView/Content/GridNormal")
local RecTran_GridSpecial = this.transform:Find("_FishType/ScrollView/Content/GridSpecial")
local RecTran_GridBoss1 = this.transform:Find("_FishType/ScrollView/Content/GridBoss1")
local RecTran_GridBoss2 = this.transform:Find("_FishType/ScrollView/Content/GridBoss2")

--- 以上内容为工具脚本自动生成，请不要在这之上做任何修改---

local G = require "Global"
local ByConfig = G.RequireG("ByConfig");
local Model = G.RequireG("FishModel")

local gameStart;

-- 初始化函数，实例化之后调用一次
function Start()
    Btn_Hide:AddClickListener
    (
    function()
        Img_MenuGroup.gameObject:SetActive(false)
        Btn_ShowMenu.gameObject:SetActive(true)
    end
    )

    Btn_Exit:AddClickListener
    (
    function()  
        gameStart.LuaScript.OnDestroy()
        G.Service.Game.ExitGame()
    end
    )

    Btn_Setting:AddClickListener
    (
    function()
        local openparam = CS.WindowNodeInitParam("UISetGame", G.GetGamePName())
        openparam.NodeType = 5
        CS.WindowManager.Instance:OpenWindow(openparam)
		
        Img_MenuGroup.gameObject:SetActive(false)
        Btn_ShowMenu.gameObject:SetActive(true)		
    end
    )

    Btn_Help:AddClickListener
    (
    function()	
        RecTran_FishType.gameObject:SetActive(true)
		
        Img_MenuGroup.gameObject:SetActive(false)
        Btn_ShowMenu.gameObject:SetActive(true)		
    end
    )

    Btn_ShowMenu:AddClickListener
    (
    function()
        Img_MenuGroup.gameObject:SetActive(true)
        Btn_ShowMenu.gameObject:SetActive(false)
    end
    )

    Btn_CloseFishType:AddClickListener
    (
    function()
        RecTran_FishType.gameObject:SetActive(false)
    end
    )
end

-- 每帧调用一次
function Update()

end

-- 脚本删除时调用，释放变量，释放资源
function OnDestroy()

end  

function Init(_gameStart)
    gameStart = _gameStart
end

function InitFishType()
	
    for i = 0, RecTran_GridNormal.childCount - 1, 1 do
		CS.UnityEngine.GameObject.Destroy(RecTran_GridNormal:GetChild(i).gameObject)
	end
	for i = 0, RecTran_GridSpecial.childCount - 1, 1 do
		CS.UnityEngine.GameObject.Destroy(RecTran_GridSpecial:GetChild(i).gameObject)
	end
	for i = 0, RecTran_GridBoss1.childCount - 1, 1 do
		CS.UnityEngine.GameObject.Destroy(RecTran_GridBoss1:GetChild(i).gameObject)
	end
	for i = 0, RecTran_GridBoss2.childCount - 1, 1 do
		CS.UnityEngine.GameObject.Destroy(RecTran_GridBoss2:GetChild(i).gameObject)
	end

	local fishList = {}
	for _, v in pairs(ByConfig.FishTable) do
		if v.isTypeUI >= 0 then
		    --G.Tool.TableHelper.Print(v)
			
			local minReward = Model.Call.GetFishRewardMinById(v.fishId)
			if math.ceil(minReward) == minReward then
				minReward = math.ceil(minReward)
			end
			
			local maxReward = Model.Call.GetFishRewardMaxById(v.fishId)
			if math.ceil(maxReward) == maxReward then
				maxReward = math.ceil(maxReward)
			end			
			
			if minReward >= 0 then
				local fishData = {}
				fishData.fishId = v.fishId
				fishData.uiType = v.isTypeUI
				fishData.rewardMin = minReward
				fishData.rewardMax = maxReward
				fishData.isTypeUI = v.isTypeUI
				fishData.modelName = v.modelName
				fishData.name = v.name
				fishData.isTypeUIText = v.isTypeUIText
				table.insert(fishList, fishData)
			end
		end
	end
	
	-- 依造倍率排序
	table.sort(fishList, function(a,b) return (a.rewardMax > b.rewardMax)	end)
		
	for _, v in pairs(fishList) do
		if v.modelName ~= "" then	
			local perfab = this.transform:Find("_FishType/ScrollView/Content/Pool/Item"..v.isTypeUI)
			if perfab ~= nil then
				itemObject = CS.UnityEngine.GameObject.Instantiate(perfab).transform
				if v.isTypeUI == 6 then
					itemObject:SetParent(RecTran_GridSpecial.transform)
				elseif v.isTypeUI == 1 then
					itemObject:SetParent(RecTran_GridBoss1.transform)
				elseif v.isTypeUI == 2 then
					itemObject:SetParent(RecTran_GridBoss2.transform)
				else
					itemObject:SetParent(RecTran_GridNormal.transform)
				end
				itemObject.localScale = CS.UnityEngine.Vector3.one
				itemObject.localPosition = CS.UnityEngine.Vector3.zero
				itemObject.gameObject:SetActive(true)
				
				local TextBei = itemObject.transform:Find("TextBei")
				if TextBei ~= nil then			
					local Text = TextBei:GetComponent("Text")
					if v.rewardMin ~= v.rewardMax then
						Text.text = tostring(v.rewardMin) .. "~" .. tostring(v.rewardMax)
					else					
						if v.rewardMin ~= 0 then
							Text.text = tostring(v.rewardMin)
						else
							Text.text = "???"						
						end
					end
				end	
					
				local TextName = itemObject.transform:Find("TextName")
				if TextName ~= nil then			
					local Text = TextName:GetComponent("Text")
					Text.text = tostring(v.name)
				end	
								
				local TextExplain = itemObject.transform:Find("TextExplain")
				if TextExplain ~= nil then			
					local Text = TextExplain:GetComponent("Text")
					Text.text = tostring(v.isTypeUIText)
				end	
				
				if v.modelName ~= "" then
					local ImageIcon = itemObject.transform:Find("ImageIcon")		
					if ImageIcon ~= nil then			
						local Image = ImageIcon:GetComponent("Image")
						Image.sprite = CS.UISpriteManager.Instance:GetSprite(G.GetGamePName(), "fish_" .. v.modelName)
					end
				else
					print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! modelName is nil " .. v.fishId)
				end
			end
		end
	end
	
	isInitFishType = true
end
 