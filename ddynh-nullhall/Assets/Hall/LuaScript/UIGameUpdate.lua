require("Module")
mmodule(...)

local G = require "Global"

local GameLogoList
local GameVersion
local ShowIcon

local maxNum = 3 -- 下载上限

function Init(LogoList, Version, Show)	
	GameLogoList = LogoList
	GameVersion = Version
	ShowIcon = Show
end

local function GetSkin(gameId)
    local userGameList = nil;
    if ((G.User.GetUserGameList2() ~= nil)) then
        userGameList = G.User.GetUserGameList2()
    else
        userGameList = G.User.GetUserGameList()
    end
	
    return  G.Tool.TableHelper.Find(userGameList, function(v) return v.GameID == gameId end)[1].Skin
end

function ShowUpdateLog(gameId, data)
	local gameName = G.Game.GetGameName(tostring(gameId))
	print("************* UpdateLog " .. gameName .. " " .. data)
end

local updatesList = {}
function AddUpdateList(gameId, onUpdate, onEnd, onFail)
	ShowUpdateLog(gameId, "************* AddUpdateList ")

	-- 判断是否已经在列表中
	local isInWaitUpdates = false
	for i = 1, #updatesList do
		if(updatesList[i].gameId == gameId) then
			isInWaitUpdates = true
		end
	end
	
	-- 已经在列表中
	if (isInWaitUpdates == true) then
		ShowUpdateLog(gameId, "************* AddUpdateList 已经在列表中")
		return
	end
	
    local NoDataGame = GameLogoList[tostring(gameId)].transform:Find("NoDataGame")
    local _WaitText = NoDataGame.transform:Find("_WaitText")
    local _Loading = NoDataGame.transform:Find("_Loading")
    local _Percentage = NoDataGame.transform:Find("_Percentage")
	
    local data = { gameId = gameId, state = 0, onUpdate = onUpdate, onEnd = onEnd, onFail = onFail, NoDataGame = NoDataGame }
	table.insert(updatesList, data)
	
	local acc = 0
	for i = 1, #updatesList do
		if(updatesList[i].state == 1) then
			acc = acc + 1
		end
	end		
	
	-- 超过下载上限
	if (acc >= maxNum) then
		_WaitText.gameObject:SetActive(true)
		_Loading.gameObject:SetActive(false)
		_Percentage.gameObject:SetActive(false)
		ShowUpdateLog(gameId, "超过下载上限")

	-- 未达下载上限
	else
		_WaitText.gameObject:SetActive(false)
		_Loading.gameObject:SetActive(true)
		_Percentage.gameObject:SetActive(true)
		
		ShowUpdateLog(gameId, "未达下载上限")
		DoNextDownload()
	end
end

function RemoveUpdateList(gameId)
	ShowUpdateLog(gameId, "************* RemoveUpdateList ")

	for i = #updatesList, 1, -1 do
		if(updatesList[i].gameId == gameId) then
			table.remove(updatesList, i)
		end
	end
end

function ShowMessage(gameId, data)
	local gameName = G.Game.GetGameName(tostring(gameId))
	
	local openparam = CS.WindowNodeInitParam("UIMessage", CS.AppDefine.HallNumber)
	openparam.NodeType = CS.BaseNodeType.AboveNormal;
	openparam.LoadComplatedCallBack = function(windowNode)
		local txt = windowNode.WindowGameObject.transform:Find("Date_2"):GetComponent("Text")
		txt.text = "[" .. gameName .. "]" .. data
	end
	CS.WindowManager.Instance:OpenWindow(openparam)
end

function ShowMessageBox(gameId, data, clickOk, clickCancel)
	local gameName = G.Game.GetGameName(tostring(gameId))
	local windowName = "UIUpdateGameMessageBox_" .. tostring(gameId)
	
	local openparam = CS.WindowNodeInitParam("UIUpdateGameMessageBox", CS.AppDefine.HallNumber)
	openparam.NodeType = CS.BaseNodeType.AboveNormal;
	openparam.LoadComplatedCallBack = function(windowNode)
		windowNode.WindowName = windowName
	
		local txt_Content = windowNode.WindowGameObject.transform:Find("UIBody/_ContentArea/_Content"):GetComponent("Text")
		txt_Content.text = "[" .. gameName .. "]" .. data
		
		local btn_OK = windowNode.WindowGameObject.transform:Find("UIBody/Buttons/_OK"):GetComponent("Button")
		btn_OK:AddClickListener(function()
			clickOk()
			CS.WindowManager.Instance:CloseWindow(windowNode)
		end)
		
		local btn_Cancel = windowNode.WindowGameObject.transform:Find("UIBody/Buttons/_Cancel"):GetComponent("Button")
		btn_Cancel:AddClickListener(function()
			clickCancel()
			CS.WindowManager.Instance:CloseWindow(windowNode)
		end)
	end
	CS.WindowManager.Instance:OpenWindow(openparam)
end

function DoDownload(data)
	data.state = 1

	local gameId = data.gameId
    local name = G.GetGamePName(gameId)
    local skin = GetSkin(gameId)
	local newVersion = GameVersion[gameId]
	local gameName = G.Game.GetGameName(tostring(gameId))
	
	ShowUpdateLog(gameId, "DoDownload 开始下载")

    local NoDataGame = data.NoDataGame
	local _ImgCircle = NoDataGame.transform:Find("_Loading/_Loading"):GetComponent("Image")
	local _TextPersent = NoDataGame.transform:Find("_Percentage"):GetComponent("Text")
    local _WaitText = NoDataGame.transform:Find("_WaitText")
    local _Loading = NoDataGame.transform:Find("_Loading")
    local _Percentage = NoDataGame.transform:Find("_Percentage")	
	
	_ImgCircle.fillAmount = 1
	_TextPersent.text = "0%"
	_WaitText.gameObject:SetActive(false)
	_Loading.gameObject:SetActive(true)
	_Percentage.gameObject:SetActive(true)
	
	local path
	if(skin =="0" or skin =="") then
		path = name .. "/" .. newVersion
	else
		path = skin .. "/" .. name .. "/" .. newVersion			
	end
	
	-- 开始热更
	CS.HotUpdate.HotUpdateManager.Instance:AddGameHotUpdate(name, G.GameConfig.UpdateDomain .. path,
		-- 更新进度
		function(ProgressPercentage)
			_ImgCircle.fillAmount = 1 - ProgressPercentage
			_TextPersent.text = string.format("%.2f", ProgressPercentage * 100)
			
			if (data.onUpdate ~= nil) then
				data.onUpdate(ProgressPercentage)
			end
		end,
		-- 完成
		function()
			ShowUpdateLog(gameId, "DoDownload onEnd")
			
			ShowMessage(gameId, "下载完成")
			
			-- 清除下载图示
			ShowIcon(gameId)
			
			RemoveUpdateList(gameId)
			
			DoNextDownload()
			
			if (data.onEnd ~= nil) then
				data.onEnd()
			end
		end,
		-- 失败
		function()
			ShowUpdateLog(gameId, "DoDownload onFail")
			
			ShowMessage(gameId, "更新资源错误")
			
			-- 换线
			UpdatePath(gameId)
			
			-- 重设下载图示
			_Loading.gameObject:SetActive(false)
			_Percentage.gameObject:SetActive(false)
			
			RemoveUpdateList(gameId)

			DoNextDownload()			
			
			-- 不在游戏中 跳出确认 重试或取消
			if (G.IsGameStart() == false) then
				ShowMessageBox
				(
					gameId, 
					"更新资源错误，是否重试?",
					function() -- 重试
						AddUpdateList(data.gameId, data.onUpdate, data.onEnd, data.onFail)
					end,
					function() -- 取消
						if (data.onFail ~= nil) then
							data.onFail()
						end
					end
				)
			end
		end
	)	
end

-- 換下一條線
function UpdatePath(gameId)
	ShowUpdateLog(gameId, '<color=yellow>原本線路:</color>' .. G.GameConfig.UpdateDomain)

	local pathDomainList = {} --熱更list
	pathDomainList = G.Tool.StringHelper.Split(CS.UnityEngine.PlayerPrefs.GetString("UpdateDomain2", ""), ",")

	--分目前線路
	for i = 1, #pathDomainList, 1 do
		pathDomainList[i] = pathDomainList[i] .. "/UpdateFiles/"
	end

	for i = 1, #pathDomainList, 1 do
		if G.GameConfig.UpdateDomain == pathDomainList[i] then --目前熱更線 = 要到的线路			
			if i < #pathDomainList then
				G.GameConfig.UpdateDomain = pathDomainList[i + 1] --自動換下一條
			else
				i = #pathDomainList
				G.GameConfig.UpdateDomain = pathDomainList[1] -- 換成第一條
			end
			break
		end
	end
	ShowUpdateLog(gameId, '<color=yellow>自動更換線:</color>' .. G.GameConfig.UpdateDomain)
end

function DoNextDownload()	
	for i = 1, #updatesList do
		if(updatesList[i].state == 0) then
			DoDownload(updatesList[i])
			return
		end
	end	
end

function IsHotUpdate()
	if (#updatesList) > 0 then
		return true
	else
		return false
	end
end

function ClearGameHotUpdate()
	if (CS.HotUpdate.HotUpdateManager.Instance ~= nil) then
		CS.HotUpdate.HotUpdateManager.Instance:ClearGameHotUpdate()
	end
	
	updatesList = {}
end
