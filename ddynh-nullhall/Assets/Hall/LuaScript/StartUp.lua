local G = require "Global"
local showMessageBox = G.Util.async_to_sync(CS.UIMessageBox.Show)
local IsCheckVersion = false-- 是否已經驗證過版號
local IsShowLoginMessageBox = true-- 是否開啟回報介面
local UIUpdateHall

-- 接收到版本号返回数据包
local function reciveVer(receiveMsg)
	print("StartUp.reciveVer : 接收到服务器返回版本号")
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
	CS.UnityEngine.PlayerPrefs.SetString("WebsiteUrl", G.GameDefine.DownloadUrl)
	
	--取得並設定熱更資源url
	G.GameConfig.UpdateDomain = receiveMsg.UpdateDomain .. "/UpdateFiles/"
	print("StartUp : 設定熱更資源url : "..receiveMsg.UpdateDomain .. "/UpdateFiles/")

	--紀錄换线url
	CS.UnityEngine.PlayerPrefs.SetString("UpdateDomain2", receiveMsg.UpdateDomain2)

	--取得並設定支付url
	G.GameConfig.ChargeDomain = receiveMsg.BillDomain .. "/paycenter/index?orderid=%d&gwid=%d"
	--print("設定支付url:"..receiveMsg.BillDomain .. "/paycenter/index?orderid=%d&gwid=%d")
	
	--取得並設定支付Recharge url
	G.GameConfig.RechargeListDomain = receiveMsg.BillDomain
	--print("設定支付Recharge Url:"..receiveMsg.BillDomain)
	
	G.GameConfig.CustomServiceDomain = receiveMsg.CustomerDomain

    G.GameConfig.AgentDomain = receiveMsg.ClubDomain .. "/agentclub/admin/RedirectDownload?invitecode=%s"
	--print("設定代理QRCODE Url:"..receiveMsg.ClubDomain)	

	G.User.GiftMoney = receiveMsg.GiftMoney

	local newVersion = G.Tool.StringHelper.ParseVersion(G.CaseWhen(G.Env.IsIOS(), receiveMsg.IOSVersion, receiveMsg.AndroidVersion), G.GameConfig.GamePlatformID)
	local localVersion = G.Env.GetHallVersion()
	local checkReslut = G.Service.NetworkService.CheckVer(localVersion, newVersion)
	print("check version : " .. newVersion .. ", " .. localVersion .. ", " .. tostring(checkReslut))

	local newVersion2 = G.Tool.StringHelper.ParseVersion(G.CaseWhen(G.Env.IsIOS(), receiveMsg.IOSVersion2, receiveMsg.AndroidVersion2), G.GameConfig.GamePlatformID)
	local checkReslut2 = G.Service.NetworkService.CheckVer(localVersion, newVersion2)
	print("check version2 : " .. newVersion2 .. ", " .. localVersion .. ", " .. tostring(checkReslut2))



	-- 需要强制更新
	if checkReslut == 2 then
		G.Service.NetworkService.CloseHallSocket()
		G.Service.NetworkService.SetNotReConnectHall()
		UIUpdateHall.LuaScript.ShowHDCode()

		local openparam = CS.WindowNodeInitParam("UIUpdateMessageBox", CS.AppDefine.HallNumber)
		openparam.NodeType = CS.BaseNodeType.Propmt
		openparam.WindowData = {}
		openparam.WindowData.msg = "游戏需要重新下载，点击确定重新下载游戏."
		openparam.WindowData.onOk = function()
			CS.UnityEngine.Application.OpenURL(G.GameDefine.DownloadUrl)
			G.AppEvent.AppQuit()	
		end
		CS.WindowManager.Instance:OpenWindow(openparam)
		-- 需要更新
	elseif checkReslut == 1 then
		StartUp.setTipMessage("等待更新", 0);

		G.Service.NetworkService.CloseHallSocket()	
		G.Service.NetworkService.SetNotReConnectHall()
		G.Service.NetworkService.RequestHotUpdate(
			CS.AppDefine.HallNumber, 
			G.GameDefine.Template, 
			newVersion,
			function()
				G.Service.NetworkService.SetReConnectHall()

				if UIUpdateHall ~= nil then
					CS.WindowManager.Instance:CloseWindow("UIUpdateHall", false)
					UIUpdateHall = nil
				end

				if CS.WindowManager.Instance:FindWindowNodeByName("UIRoute") ~= nil then
					CS.WindowManager.Instance:CloseWindow("UIRoute", false);
				end

				local UICustomer = CS.WindowManager.Instance:FindWindowNodeByName("UICustomer")
				if UICustomer ~= nil then
					UICustomer.WindowGameObject:GetComponent("LuaWindowBase").LuaScript.EscapeWindow()
				end
			end,
			nil,
			nil,
			CS.UnityEngine.Application.Quit)		
	-- 需要强制更新
	elseif checkReslut2 == 2 then
		G.Service.NetworkService.CloseHallSocket()
		G.Service.NetworkService.SetNotReConnectHall()
		UIUpdateHall.LuaScript.ShowHDCode()

		local openparam = CS.WindowNodeInitParam("UIUpdateMessageBox", CS.AppDefine.HallNumber)
		openparam.NodeType = CS.BaseNodeType.Propmt
		openparam.WindowData = {}
		openparam.WindowData.msg = "游戏需要重新下载，点击确定重新下载游戏."
		openparam.WindowData.onOk = function()
			CS.UnityEngine.Application.OpenURL(G.GameDefine.DownloadUrl)
			G.AppEvent.AppQuit()	
		end
		CS.WindowManager.Instance:OpenWindow(openparam)
		-- 需要更新
	elseif checkReslut2 == 1 then
		StartUp.setTipMessage("等待更新", 0);

		G.Service.NetworkService.CloseHallSocket()	
		G.Service.NetworkService.SetNotReConnectHall()
		G.Service.NetworkService.RequestHotUpdate(
			CS.AppDefine.HallNumber, 
			G.GameDefine.Template, 
			newVersion2,
			function()
				G.Service.NetworkService.SetReConnectHall()

				if UIUpdateHall ~= nil then
					CS.WindowManager.Instance:CloseWindow("UIUpdateHall", false)
					UIUpdateHall = nil
				end

				if CS.WindowManager.Instance:FindWindowNodeByName("UIRoute") ~= nil then
					CS.WindowManager.Instance:CloseWindow("UIRoute", false);
				end

				local UICustomer = CS.WindowManager.Instance:FindWindowNodeByName("UICustomer")
				if UICustomer ~= nil then
					UICustomer.WindowGameObject:GetComponent("LuaWindowBase").LuaScript.EscapeWindow()
				end
			end,
			nil,
			nil,
			CS.UnityEngine.Application.Quit)
			
	else		
		-- 开始广场服务器心跳
		G.HeartBeat.StartHallServerHeartBeat()

		StartUp.setTipMessage("正在登录大厅服务器...", 1)
		-- 执行自动登录
		G.Service.Login.AutoLogon(StartUp.onLogonRet)
	end	
end 

StartUp = { }

-- 主入口函数。从这里开始lua逻辑
function StartUp.Main() 	
	print("StartUp.Main")	
	
    G.Init()

	local openparam = CS.WindowNodeInitParam("UIUpdateHall", CS.AppDefine.HallNumber)
	openparam.NodeType = CS.BaseNodeType.Loading
	openparam.LoadComplatedCallBack = function(windowNode)
		UIUpdateHall = windowNode.WindowGameObject:GetComponent("LuaWindowBase")
		G.SetGameInitFinish()			
		StartUp.BeginConnect()
	end
	CS.WindowManager.Instance:OpenWindow(openparam)
end

function StartUp.BeginConnect()	
	G.Server.ClearFlag()
	G.Server.LoadServerAddr(
		function()
			print('StartUp : ServerInfo.LoadServerAddr 成功Callback')
			StartUp.setTipMessage("连接服务器成功...", 0.4)
			-- 注册消息接收函数
			G.NetQ.RegOnceMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.HallVerInfoID, reciveVer)
			local sendMsg = { }

			-- 渠道號
			print("StartUp : 渠道號GameSiteID : ".. G.GameDefine.GameSiteID)
			sendMsg.AreaId = G.GameDefine.GameSiteID
			-- 发送获取版本号消息
			G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.RequestHallVerID,sendMsg)

			StartUp.setTipMessage("正在检查更新...", 0.6)			
		end,
		function()
			print('StartUp : ServerInfo.LoadServerAddr 失敗Callback')
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
		end
	)
end

function StartUp.onLogonRet(recvMsg)
    print("StartUp.onLogonRet : recv login ret...", recvMsg.Code)
    -- 关闭当前界面
    if recvMsg.Code ~= 1 then
		CS.WindowManager.Instance:CloseWindow("UIUpdateHall", false)
	end
	
	-- 登入成功
    if recvMsg.Code == 1 then
		if G.IsGameStart() == true then return end

		if CS.WindowManager.Instance:FindWindowNodeByName("UILogin") ~= nil then
	        CS.WindowManager.Instance:CloseWindow("UILogin", false);
		end
        -- 打开大厅界面
		if CS.WindowManager.Instance:FindWindowNodeByName("UIHall") == nil then
			local openparam = CS.WindowNodeInitParam("UIHall", CS.AppDefine.HallNumber)
			openparam.NodeType = 0
			CS.WindowManager.Instance:OpenWindow(openparam)
		end
	-- 邀请码错误
	elseif recvMsg.Code == -2 then
		G.Service.NetworkService.CloseHallSocket()
		G.Service.NetworkService.SetNotReConnectHall()
		
		local openparam = CS.WindowNodeInitParam("UIBindingMessageBox", CS.AppDefine.HallNumber)
		openparam.NodeType = CS.BaseNodeType.Propmt;
		openparam.LoadComplatedCallBack = function(windowNode)
			if windowNode.WindowGameObject.transform:Find("UIBody/_ContentArea/_Content") ~= nil then
				local txt = windowNode.WindowGameObject.transform:Find("UIBody/_ContentArea/_Content"):GetComponent("Text")
				txt.text =  recvMsg.Message	
			end
		end
		CS.WindowManager.Instance:OpenWindow(openparam)
	-- 其他登入失败
	else
		if G.IsGameStart() == true then
			G.Util.coroutine_call(function()
				local boxResult = showMessageBox(CS.MessageBoxStyle.OK, "", "您的帐号有误，请退出程序重新登录.", "确定")
				if boxResult == CS.MessageBoxResult.OK then
					CS.UnityEngine.Application.Quit()
				end						
			end)()
        -- 打开登录界面
		elseif CS.WindowManager.Instance:FindWindowNodeByName("UILogin") == nil then
			local openparam = CS.WindowNodeInitParam("UILogin", CS.AppDefine.HallNumber)
			openparam.NodeType = 0
			CS.WindowManager.Instance:OpenWindow(openparam)	
		end
	end
	
	-- 释放当前窗体
	CS.UnityEngine.GameObject.Destroy(CS.Main.Instance)
	UIUpdateHall = nil
end

function StartUp.GetIsCheckVersion()
	return IsCheckVersion
end

function StartUp.setTipMessage(msg, progressPercentage)	
	if UIUpdateHall ~= nil then
		UIUpdateHall.LuaScript.SetTipAndProgress(msg, progressPercentage)
	end
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

function StartUp.Shutdown()
    G.Clear()
end