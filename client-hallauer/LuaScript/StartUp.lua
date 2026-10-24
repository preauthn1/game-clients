local G = require "Global"

local yield_return = G.Util.async_to_sync
(
function(to_to_yield, cb)
    CS.TimeManager.Instance:YieldAndCallback(to_to_yield, cb)
end
)

local showMessageBox = G.Util.async_to_sync(CS.UIMessageBox.Show)

-- 是否已經驗證過版號
local IsCheckVersion = false

-- 是否開啟回報介面
local IsShowLoginMessageBox = true

-- 接收到版本号返回数据包
local function reciveVer(receiveMsg)
    print("接收到服务器返回版本号")

	IsCheckVersion = true
	
	if receiveMsg.AreaConfig == nil or receiveMsg.AreaConfig == "" then
        G.Util.coroutine_call( function()
            local boxResult = showMessageBox(CS.MessageBoxStyle.OKCancel, "", "获取平台版本号失敗\n("..tostring(G.GameDefine.GameSiteID)..")", "确定", "取消");
            if boxResult == CS.MessageBoxResult.OK then
				StartUp.BeginConnect()
            else
                CS.UnityEngine.Application.Quit()
            end
        end )();
		return
	else
		StartUp.setTipMessage("获取平台版本号成功", 0.8)
	end
   
    G.GameDefine.SetServerjson(receiveMsg.AreaConfig);
	
    -- 熱更資源url
    G.GameConfig.UpdateDomain = receiveMsg.UpdateDomain .. "/UpdateFiles/"
    print("設定熱更資源url:"..receiveMsg.UpdateDomain .. "/UpdateFiles/")
    -- 訂單url
    G.GameConfig.ChargeDomain = receiveMsg.BillDomain .. "/paycenter/index?orderid=%d&gwid=%d"
    print("設定訂單url:" .. G.GameConfig.ChargeDomain)
	-- 支付url
    G.GameConfig.RechargeListDomain = receiveMsg.BillDomain
    print("設定支付Recharge Url:"..receiveMsg.BillDomain)
	
    local newVersion;
	local newVersion1 = nil;
    local localVersion = G.Env.GetHallVersion()
	
    if G.Env.IsIOS() then
		if G.GameDefine.AppleID == nil or G.GameDefine.AppleID == "" then
			if G.GameDefine.DownloadUrl ~= "" then
				G.GameConfig.IOSAPPUrl = G.GameDefine.DownloadUrl
			end
		end
		
        CS.AppDefine.GameUrl = G.GameConfig.IOSAPPUrl
        newVersion = G.Tool.StringHelper.ParseVersion(receiveMsg.IOSVersion, G.GameConfig.GamePlatformID)
		if receiveMsg.IOSVersion2 ~= nil and receiveMsg.IOSVersion2 ~= "" then
			newVersion1 = G.Tool.StringHelper.ParseVersion(receiveMsg.IOSVersion2, G.GameConfig.GamePlatformID)
		end
    elseif G.Env.IsAndroid() then	
		if G.GameDefine.DownloadUrl ~= "" then
			G.GameConfig.AndroidAPPUrl = G.GameDefine.DownloadUrl
		end
		
		CS.AppDefine.GameUrl = G.GameConfig.AndroidAPPUrl
        newVersion = G.Tool.StringHelper.ParseVersion(receiveMsg.AndroidVersion, G.GameConfig.GamePlatformID);
		if receiveMsg.AndroidVersion2 ~= nil and receiveMsg.AndroidVersion2 ~= "" then
			newVersion1 = G.Tool.StringHelper.ParseVersion(receiveMsg.AndroidVersion2, G.GameConfig.GamePlatformID)
		end
    elseif G.Env.IsWindows() then
		if G.GameDefine.DownloadUrl ~= "" then
			G.GameConfig.AndroidAPPUrl = G.GameDefine.DownloadUrl
		end	
        CS.AppDefine.GameUrl = G.GameConfig.AndroidAPPUrl
        newVersion = G.Tool.StringHelper.ParseVersion(receiveMsg.AndroidVersion, G.GameConfig.GamePlatformID);
		if receiveMsg.AndroidVersion2 ~= nil and receiveMsg.AndroidVersion2 ~= "" then
			newVersion1 = G.Tool.StringHelper.ParseVersion(receiveMsg.AndroidVersion2, G.GameConfig.GamePlatformID)
		end
    end	
	print("@@@@@@@@@@@@@ 整包下載地址 " .. CS.AppDefine.GameUrl)
	
    local checkReslut = CS.HotUpdate.HotUpdateManager.CheckVersion(newVersion, localVersion)
	print("@@@@@@@@@@@@@ Version1 " .. newVersion .. " " .. localVersion .. " " .. tostring(checkReslut))
	if checkReslut == 2 then 

	elseif checkReslut == 1 then
	
	else
		if newVersion1 ~= nil then
			newVersion = newVersion1
			checkReslut = CS.HotUpdate.HotUpdateManager.CheckVersion(newVersion, localVersion)
			print("@@@@@@@@@@@@@ Version2 " .. newVersion .. " " .. localVersion .. " " .. tostring(checkReslut))
		end
	end	
	
    -- 需要强制更新
    if checkReslut == 2 then
        G.Service.NetworkService.CloseHallSocket()
		
		-- 畫面上顯示機碼
		local node = CS.WindowManager.Instance:FindWindowNodeByName("UILoading")
		if node ~= nil then
			local Txt_HDCode = node.WindowGameObject.transform:Find("HDCode"):GetComponent("Text")
			if Txt_HDCode ~= nil then
				Txt_HDCode.text = G.Env.GetHDCode()
			end
		end		
		
		openparam = CS.WindowNodeInitParam("UIUpdateMessageBox", CS.AppDefine.HallNumber)
		openparam.NodeType = CS.BaseNodeType.Propmt;
		openparam.LoadComplatedCallBack = function(windowNode)
			local txt = windowNode.WindowGameObject.transform:Find("UIBody/_ContentArea/_Content"):GetComponent("Text")
			txt.text = "游戏需要重新下载，点击确定重新下载游戏."
			
			local Btn_OK = windowNode.WindowGameObject.transform:Find("UIBody/Buttons/_OK"):GetComponent("Button")
			Btn_OK:AddClickListener(
				function()
					CS.Utility.CopyText(G.Env.GetHDCode())
					CS.UnityEngine.Application.OpenURL(CS.AppDefine.GameUrl)
					G.AppEvent.AppQuit()
				end
			)
		end		
		CS.WindowManager.Instance:OpenWindow(openparam)
	-- 需要更新
    elseif checkReslut == 1 then
        G.Service.NetworkService.CloseHallSocket()

        G.Util.coroutine_call( function()
            StartUp.setTipMessage("等待更新", 0);

			local UpdateDomain = G.GameConfig.UpdateDomain
			
			-- 依造版本號取對應檔案 by Rayon
			if(G.GameDefine.Template=="0") then                                   
				CS.AppDefine.UpdateFileUrl = UpdateDomain .. "/" .. CS.AppDefine.HallNumber .. "/" .. newVersion
			else
				CS.AppDefine.UpdateFileUrl = UpdateDomain .. "/"..G.GameDefine.Template.."/" .. CS.AppDefine.HallNumber .. "/" .. newVersion
			end 
			print("HALL Update URL:"..CS.AppDefine.UpdateFileUrl)
			
			CS.HotUpdate.HotUpdateManager.Instance:SetUpdateProjectName(CS.AppDefine.HallNumber)
			CS.Main.Instance:UpdateAssets()
        end )()
	-- 不需要更新
    else
		CS.UnityEngine.GameObject.Destroy(CS.Main.Instance);

		-- 开始广场服务器心跳
		G.HeartBeat.StartHallServerHeartBeat()

		StartUp.setTipMessage("正在登录大厅服务器...", 1)
		-- 执行自动登录
		G.Service.Login.AutoLogon(StartUp.onLogonRet)
    end
end 
 
 
StartUp = { }

function StartUp.GetIsCheckVersion()
	return IsCheckVersion
end

function StartUp.AutoLogon()
	G.Service.Login.AutoLogon(StartUp.onLogonRet)
end

function onGameUpdateSucess()
	print("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ onGameUpdateSucess set CS.Main.s_IsUpdate false")
	CS.Main.s_IsUpdate = false
end

function StartUp.onLogonRet(recvMsg)
    print("############################## recv login ret...")
	
    -- 关闭当前界面
    if recvMsg.Code == 1 then
		
	else
		CS.UILoading.Hide()
	end
	
	-- 登入成功
    if recvMsg.Code == 1 then
	
		if CS.WindowManager.Instance:FindWindowNodeByName("UILogin") ~= nil then
	        CS.WindowManager.Instance:CloseWindow("UILogin", false);
		end
        -- 打开大厅界面
		if CS.WindowManager.Instance:FindWindowNodeByName("UIHall") == nil then
			local openparam = CS.WindowNodeInitParam("UIHall", CS.AppDefine.HallNumber)
			openparam.NodeType = 0
			CS.WindowManager.Instance:OpenWindow(openparam)
		else
			 print("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 重複開啟大廳...")
		end
	-- 其他登入失败
    else
        -- 打开登录界面
		if CS.WindowManager.Instance:FindWindowNodeByName("UILogin") == nil then
			local openparam = CS.WindowNodeInitParam("UILogin", CS.AppDefine.HallNumber)
			openparam.NodeType = 0
			CS.WindowManager.Instance:OpenWindow(openparam)
		else
			 print("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 重複開啟登入...")		
		end
    end
	
    -- 释放当前窗体
    CS.UnityEngine.GameObject.Destroy(CS.Main.Instance)
end

function StartUp.setTipMessage(msg, progressPercentage)
    CS.UILoading.SetTipMessage(msg, progressPercentage)
end

 function StartUp.SetShowSendLog(IsShow)
	G.NetQ.SetShowSendLog(IsShow)
 end
 
function StartUp.SetShowSendPauseLog(IsShow)
	G.NetQ.SetShowSendPauseLog(IsShow)
end
 
function StartUp.SetShowReceiveLog(IsShow)
	G.NetQ.SetShowReceiveLog(IsShow)
end
 
function StartUp.SetShowDeleteLog(IsShow)
	G.NetQ.SetShowDeleteLog(IsShow)
end

function StartUp.BeginConnect()
	G.Server.ClearFlag()
	G.Server.LoadServerAddr(
	(
	function()
		StartUp.setTipMessage("连接服务器成功...", 0.4)
		-- 注册消息接收函数
		G.NetQ.RegOnceMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.HallVerInfoID, reciveVer)
		 local sendMsg = { }

        -- 渠道號
		print("######### GameSiteID", G.GameDefine.GameSiteID)
        sendMsg.AreaId = G.GameDefine.GameSiteID
		-- 发送获取版本号消息
		G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.RequestHallVerID,sendMsg)

		StartUp.setTipMessage("正在检查更新...", 0.6)
		
		if G.GameDefine.Branch ~= G.Platform.GetBranch() then
			StartUp.setTipMessage("大厅和平台资料错误...", 0.6)
		end		
	end ),
	( 
	function()
		StartUp.setTipMessage("无法连接到服务器,请检查您的网络是否正常.", 0.4)
		
		if IsShowLoginMessageBox == true then
			local openparam = CS.WindowManager.Instance:FindWindowNodeByName("UILoginMessageBox")
			if openparam == nil then
				openparam = CS.WindowNodeInitParam("UILoginMessageBox", CS.AppDefine.HallNumber)
				openparam.NodeType = CS.BaseNodeType.Propmt;
				CS.WindowManager.Instance:OpenWindow(openparam)
			end
		else
			-- 顯示錯誤訊息
			local text = "无法连接到服务器，点击确定重新连线."
			text = text .. "\n" .. "(" .. G.Server.GetErrorCode() .. ")"
			
			G.Util.coroutine_call( function()
				local boxResult = showMessageBox(CS.MessageBoxStyle.OKCancel, "", text, "确定", "取消");
				if boxResult == CS.MessageBoxResult.OK then
					StartUp.BeginConnect()
				else
					CS.UnityEngine.Application.Quit()
				end
			end )()
		end
	end ))
end

-- 主入口函数。从这里开始lua逻辑
function StartUp.Main()
    print("StartUp Main....")

    print("game run ctx init....")

	CS.HotUpdate.HotUpdateManager.OnHotUpdateComplated = CS.HotUpdate.HotUpdateManager.OnHotUpdateComplated + onGameUpdateSucess
	
    G.Init()
		
    -- 资源热更新地址
    CS.AppDefine.UpdateFileUrl = G.GameConfig.UpdateDomain	
	
    -- 显示加载界面
    CS.UILoading.Show(function(WindowNode)	    	
		-- 顯示平台渠道
		if WindowNode.WindowGameObject.transform:Find("Channel") ~= nil then
			local Txt_Channel = WindowNode.WindowGameObject.transform:Find("Channel"):GetComponent("Text")
			Txt_Channel.text = tostring(G.GameConfig.GameSiteID) .. "." .. tostring(G.GameConfig.GamePlatformID) .. "." .. tostring(G.GameConfig.GetServerOption()) .. "." .. G.Platform.GetBranch()
		end
		
		-- 發行公司
		if WindowNode.WindowGameObject.transform:Find("TextCompany") ~= nil then
			TextCompany = WindowNode.WindowGameObject.transform:Find("TextCompany"):GetComponent("Text")			
			local copyright = G.Platform.GetCopyright()
			TextCompany.text = copyright
		end
		
		G.SetGameInitFinish()
		
		StartUp.BeginConnect()		
	end)
end

function StartUp.Shutdown()
    G.Clear()
end