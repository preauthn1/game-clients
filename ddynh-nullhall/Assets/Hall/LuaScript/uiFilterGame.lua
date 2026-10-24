require("Module")
mmodule(...)

local G = require "Global"
local GameInfo = G.RequireG("Com/GameInfo")

local ButtonList = {};
local NowIndex = -2; -- -2:所有遊戲 -1:最近完的六個遊戲

local rootRect = nil
local Filter;
local FilterGame;
local btn_ButtonAll = nil
local btn_ButtonLately = nil
local btn_ButtonHot = nil
local btn_ButtonCard = nil
local btn_ButtonElectronic = nil
local btn_ButtonMulti = nil

local ClickCB = nil

local GameTabs;		-- 分類
local CategoryList;	-- 遊戲分類

function Init(root, UpdateGameIcon)
	ButtonList = {}
	rootRect = root
	
	ClickCB = UpdateGameIcon
	
	Filter = rootRect.transform:Find("_Main/Left/_Filter")
	
	FilterGame = Filter:Find("_FilterGame"):GetComponent("ScrollRect")
	
	-- 預設全部遊戲
	btn_ButtonAll = Filter:Find("_FilterGame/Grid/ButtonAll"):GetComponent("Button")
	AddFilterButton(-2, btn_ButtonAll.gameObject)
	
	-- 預設最近玩過的遊戲
	btn_ButtonLately = Filter:Find("_FilterGame/Grid/ButtonLately"):GetComponent("Button")
	--btn_ButtonLately.gameObject:SetActive(false)
	AddFilterButton(-1, btn_ButtonLately.gameObject)		
	
	btn_ButtonHot = Filter:Find("_FilterGame/Grid/ButtonHot"):GetComponent("Button")
	btn_ButtonHot.gameObject:SetActive(false)
	btn_ButtonCard = Filter:Find("_FilterGame/Grid/ButtonCard"):GetComponent("Button")
	btn_ButtonCard.gameObject:SetActive(false)
	btn_ButtonElectronic = Filter:Find("_FilterGame/Grid/ButtonElectronic"):GetComponent("Button")
	btn_ButtonElectronic.gameObject:SetActive(false)
	btn_ButtonMulti = Filter:Find("_FilterGame/Grid/ButtonMulti"):GetComponent("Button")
	btn_ButtonMulti.gameObject:SetActive(false)
	
	UpdaeButton()

end

function UpdaeButton()
	for i, buttonData in ipairs(ButtonList) do
		if (buttonData.categoryID == NowIndex) then
			buttonData.selectImg.gameObject:SetActive(true)		
		else
			buttonData.selectImg.gameObject:SetActive(false)
		end
	end
end

function ClickFilterButton(index)
	if (NowIndex == index) then
		return
	end

	NowIndex = index
	
	UpdaeButton()
	
	ClickCB()
end

function AddFilterButton(categoryID, clone)
	buttonData = {}
	buttonData.obj = clone
	buttonData.categoryID = categoryID
	--buttonData.text = clone.transform:Find("Text"):GetComponent("Text")

	buttonData.selectImg = clone.transform:Find("Select"):GetComponent("Image")
	buttonData.selectImg.gameObject:SetActive(false)

	buttonData.button = clone:GetComponent("Button")
	buttonData.button:AddClickListener(function()
		ClickFilterButton(categoryID)
	end)
	
	table.insert(ButtonList, buttonData)
	
	return buttonData
end

function UpdateButton(receiveMsg)	
	GameTabs = receiveMsg.GameCategory.GameTabs
	CategoryList = receiveMsg.GameCategory.CategoryList
	
	--G.Tool.TableHelper.Print("GameTabs", GameTabs)
	--G.Tool.TableHelper.Print("CategoryList", CategoryList)
	
	for i, buttonData in ipairs(ButtonList) do
		if (buttonData.categoryID > 0) then
			buttonData.obj:SetActive(false)	
		end
	end
	
	local isFind = false
	if (NowIndex < 0 ) then
		isFind = true
	end
	
	if (GameTabs ~= nil and #GameTabs > 0) then
		for i, tabs in ipairs(GameTabs) do
			local CategoryID = tabs.CategoryID
			
			local buttonData = nil
			for i, buttonData1 in ipairs(ButtonList) do
				if (buttonData1.categoryID == CategoryID) then
					buttonData = buttonData1
					break
				end
			end

			if (buttonData == nil) then
				local clone
				if (CategoryID == 1) then
					clone = btn_ButtonHot.gameObject
				elseif (CategoryID == 2) then
					clone = btn_ButtonCard.gameObject
				elseif (CategoryID == 3) then
					clone = btn_ButtonElectronic.gameObject
				elseif (CategoryID == 4) then
					clone = btn_ButtonMulti.gameObject
				else
					clone = CS.UnityEngine.GameObject.Instantiate(btn_ButtonAll.gameObject);
					print("not found CategoryID", CategoryID)
				end
				
				buttonData = AddFilterButton(CategoryID, clone)
				clone.transform:SetParent(btn_ButtonAll.gameObject.transform.parent);
				clone.transform.localScale = CS.UnityEngine.Vector3(1, 1, 1)
				clone.transform.localPosition = CS.UnityEngine.Vector3.zero
			end
			
			buttonData.obj:SetActive(true)			
			--buttonData.text.text = tabs.Name
			
			if (isFind == false) then
				if (NowIndex == CategoryID) then
					isFind = true
				end
			end
		end
	end
	
	-- 找不到該分類 使用預設
	if (isFind == false) then
		ClickFilterButton(-2)
	end
	
	-- 如果proto沒顯示就不顯示
	--print("Visible",receiveMsg.GameCategory.IsVisible)
	local isFull = false
	if (receiveMsg.GameCategory.IsVisible==0) then
		Filter.gameObject:SetActive(false)
		isFull = true
	else
		Filter.gameObject:SetActive(true)
		isFull = false	
	end
	
	--最近沒玩就隱藏
	local Latelylist = GameInfo.GetPlayGameId()
	if Latelylist == "" or Latelylist == nil then
		btn_ButtonLately.gameObject:SetActive(false)		
	else 
	    btn_ButtonLately.gameObject:SetActive(true)
	end
	
	return isFull
end

function GetLatelyPlayerGame(userGameList)
	local PlayGameId = GameInfo.GetPlayGameId() 
	if (PlayGameId == "") then
		return {}
	end
	
	local playGameIdList = G.Tool.StringHelper.Split(PlayGameId, "|")
		
	local dataList = {}
	for i, gameId in ipairs(playGameIdList) do
		for _, newgid in pairs(userGameList) do	
			if (tostring(newgid.GameID) == tostring(gameId)) then
				table.insert(dataList, newgid)
			end
		end
	end
	
	return dataList	
end

function GetPlayerGameByType(CategoryID, userGameList)
	local strCategoryID = tostring(CategoryID)
	local dataList = {}
	
	for _, newgid in pairs(userGameList) do	
		for i, category in ipairs(CategoryList) do
			if (tostring(newgid.GameID) == tostring(category.GameID)) then
				local arr1 = G.Tool.StringHelper.Split(category.CategoryIDs, ",")
				for _, cid in pairs(arr1) do
					if (strCategoryID == cid) then
						table.insert(dataList, newgid)
					end
				end
			end
		end
	end
	return dataList
end

function GetFilterGame(userGameList)
	if (NowIndex == -2) then
		return userGameList
	elseif (NowIndex == -1) then
		return GetLatelyPlayerGame(userGameList)
	else
		return GetPlayerGameByType(NowIndex, userGameList)
	end	
end