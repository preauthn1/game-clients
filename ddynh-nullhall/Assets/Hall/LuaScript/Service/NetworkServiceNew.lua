require("Module")
mmodule(...)

local G = require "Global"
local str_StopCo = "StopCoroutine"  -- 退出协程函数关键字符串

local co_connectionGame             -- 连接游戏服务器协程引用
local co_confirmReturnHall          -- 确认是否返回大厅协程引用
local co_waitReConnectGame          -- 等待重连游戏协程

local co_confirmExitApp             -- 确认是否退出程序协程
local co_waitReConnectHall          -- 等待重连大厅协程

local RequestGameID                 -- 请求的游戏ID
local requestGameIp
local requestGamePort

local yield_return_HallConnect = G.Util.async_to_sync(function(to_to_yield, cb)
    CS.TimeManager.Instance:YieldAndCallback("HallConnect", to_to_yield, cb)
end)

local yield_return_RoomConnect = G.Util.async_to_sync(function(to_to_yield, cb)
    CS.TimeManager.Instance:YieldAndCallback("RoomConnect", to_to_yield, cb)
end)

local showMessageBox = G.Util.async_to_sync(CS.UIMessageBox.Show)

local onHotUpdateEnd = nil
local onHotUpdateFail = nil
local onHotUpdateReStart = nil
local onHotUpdateFailCancel = nil

local ReConnectHall = true
function SetNotReConnectHall() ReConnectHall = false end
function SetReConnectHall()  ReConnectHall = true end

local function SendLoginRoomMsg()

	print("发送登录房间消息")
	local LoginGameRoomInfo = { }

	-- 用户ID
	LoginGameRoomInfo.UserID = G.User.GetCurrentUser().UserID
	-- 证书
	LoginGameRoomInfo.Cer = G.User.GetCurrentUser().Cer
	-- 设备码
	LoginGameRoomInfo.HDCode = G.Env.GetHDCode()
	-- 设备类型
	LoginGameRoomInfo.HDType = G.Env.GetHDType()

	print(G.Proto.BClass.GameRoom, G.Proto.GameRoom.LoginRoomID)

	-- 发送登录游戏服务消息
	G.NetQ.SendMsg(G.Proto.BClass.GameRoom, G.Proto.GameRoom.LoginRoomID, LoginGameRoomInfo)
end 

-- 连接游戏成功处理
local function connectionGameSuccess()

    CS.UINetworkMessage.Hide()

    print("加载游戏场景")
    if G.IsGameStart() == false then
        G.Util.coroutine_call(function()
            -- 切换场景
            G.Util.async_to_sync(CS.GameManager.Instance.EnterGame)(G.GetGamePName(RequestGameID)) 
            print("当前加载场景数量 " .. CS.UnityEngine.SceneManagement.SceneManager.sceneCount)
            SendLoginRoomMsg()
        end)()
    else
        SendLoginRoomMsg()
    end

end

-- 连接游戏服务器
local function connectionGame(call_success, call_error)
	print("function Start连接游戏服务器",requestGameIp, requestGamePort)
		
    if (co_connectionGame ~= nil) then    
     	coroutine.resume(co_connectionGame, str_StopCo)
	end
	  
    co_connectionGame = coroutine.create( function()
        CS.DG.Tweening.DOTween.KillAll()
        print("尝试连接游戏服务器" .. requestGameIp .. ":" .. requestGamePort)
        local co_val = yield_return_RoomConnect(CS.NetworkManager.Instance:SendRoomConnect(requestGameIp, requestGamePort))
		if (co_val == str_StopCo) then return end
		
        if CS.NetworkManager.Instance.RoomSocket.MyConnectState == CS.ConnectState.Connect then
            G.NetQ.Resume()			
			G.Server.SendTokenMsg()
			
            print("启动游戏心跳机制")
            G.HeartBeat.StartGameServerHeartBeat()

            -- 发送本地IP给服务器
            G.Server.SendLocalIPMsg(1)

            if (type(call_success) == "function") then
                print("连接成功,回调成功函数")
                G.Room.GameLoginSuccess(false)
				call_success()
            end
        elseif (type(call_error) == "function") then
            print("连接游戏失败")
            call_error()
        end
    end )
    coroutine.resume(co_connectionGame)
end

-- 发送登录游戏消息,自动连接一次游戏
local function sendLoginRoomMessage()
    CS.UILoadingData.Show("游戏加载中...", 10, function()
        CS.UIBubblePrompt.Show("服务器连接失败，请稍后再试", "UIHall")
    end)

    connectionGame(connectionGameSuccess)
end

-- 游戏更新完成事件
local function onHotUpdateComplated()		
	if onHotUpdateEnd ~= nil then onHotUpdateEnd() end
	
	-- add by rayon 避免Repeat UpdateAssets
	CS.Main.s_IsUpdate = false
end

local function onHotUpdateFaild()
	--region 當熱更失敗時 自動換下一條線
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
	print('<color=yellow>原本線路:</color>' .. CS.AppDefine.UpdateFileUrl)
	CS.AppDefine.UpdateFileUrl = G.GameConfig.UpdateDomain .. G.GameConfig.UpdateFilesPath
	print('<color=yellow>自動更換線:</color>' .. CS.AppDefine.UpdateFileUrl)
	--endregion

	if onHotUpdateFail ~= nil then onHotUpdateFail() end

	if CS.NetworkManager.Instance.RoomSocket.MyConnectState == CS.ConnectState.Connect then
		if(onHotUpdateFailCancel ~= nil) then onHotUpdateFailCancel() end 		
		return 
	end

	G.Util.coroutine_call(function()
		local msgBox = showMessageBox(CS.MessageBoxStyle.OKCancel, "错误", "更新资源错误，是否重试?", "重试", "关闭")
		if msgBox == CS.MessageBoxResult.OK then
			if onHotUpdateReStart ~= nil then onHotUpdateReStart() end
			CS.HotUpdate.HotUpdateManager.Instance:TryStartUpdateRemoteAssetsToLocal()
		elseif(onHotUpdateFailCancel ~= nil) then 		
			onHotUpdateFailCancel()			
		end
	end)()
end

CS.HotUpdate.HotUpdateManager.OnHotUpdateComplated = CS.HotUpdate.HotUpdateManager.OnHotUpdateComplated + onHotUpdateComplated
CS.HotUpdate.HotUpdateManager.OnHotUpdateFaild = CS.HotUpdate.HotUpdateManager.OnHotUpdateFaild + onHotUpdateFaild

-- 服务器主动断开连接提示
G.NetQ.RegMsgHook(G.Proto.BClass.Common, G.Proto.Common.TipMessageID, function(receiveMsg)
	print("@@@@@@@@@@@@@@ 服务器主动断开连接提示 @@@@@@@@@")
    CS.UILoadingData.Hide()
    CS.UINetworkMessage.Hide()

    G.Tool.TableHelper.Print(receiveMsg)

    -- MsgType 1 房间主动踢出  2 大厅主动踢出 3 普通提示
    if receiveMsg.MsgType == 1 then
        -- 断开连接
        CloseRoomSocket()
        -- 如果有消息才显示k
        if (#receiveMsg.Message > 0) then
            -- Param等于1表示金币不足
			if (receiveMsg.Param == 1) then
				G.Util.coroutine_call(function()
					local boxResult = showMessageBox(CS.MessageBoxStyle.OKCancel, "", receiveMsg.Message, "前往充值", "取消");
					local hallParam = { };
					hallParam.OpenRechargeUI = true;
					
					if G.IsGameStart() then
						if boxResult == CS.MessageBoxResult.OK then							
							G.Service.Game.ExitGame(nil, hallParam);
						else
							G.Service.Game.ExitGame();
						end
					else
						if boxResult == CS.MessageBoxResult.OK then
							local node = CS.WindowManager.Instance:FindWindowNodeByName("UIHall")
							node.WindowData = hallParam
						end
					end
				end)()
			elseif (receiveMsg.Param == 4) then
				if G.IsGameStart() then
					-- 間隔一秒再踢出遊戲
					CS.TimeManager.Instance:DelayInvoke(1, function() G.Service.Game.ExitGame() end)									
				end
			-- 切换AB服,断线,指定IP,重新连线
			elseif (receiveMsg.Param == 6) then
				if G.IsGameStart() then
					--print("@@@@@@@@@@@@@@@@@@@@@@ Time " .. CS.System.DateTime.Now.Minute .. ":" .. CS.System.DateTime.Now.Second .. "." .. CS.System.DateTime.Now.Millisecond)
					CloseRoomSocket()
					local addressParm = G.Tool.StringHelper.Split(receiveMsg.Message, ":");
					G.Server.GetGameServerAddrCallback(addressParm[1], addressParm[2], function(res, ipAddress, port)
						if res == 0 then
							requestGameIp = ipAddress
							requestGamePort = port
			
							-- 間隔一秒再重新連線
							CS.TimeManager.Instance:DelayInvoke(1, function()								
								--print("@@@@@@@@@@@@@@@@@@@@@@ Time " .. CS.System.DateTime.Now.Minute .. ":" .. CS.System.DateTime.Now.Second .. "." .. CS.System.DateTime.Now.Millisecond)
								ReLoginRoom()
							end)
						else
							CS.UIBubblePrompt.Show("与游戏失去连线", "UIHall")
							G.Service.Game.ExitGame();
						end
					end);
				end				
			else
				G.Util.coroutine_call(function()
					local boxResult = showMessageBox(CS.MessageBoxStyle.OK, "提示", receiveMsg.Message, "确定");
					if boxResult == CS.MessageBoxResult.OK and G.IsGameStart() then
						G.Service.Game.ExitGame();
					end
				end)()
			end
        end

    elseif receiveMsg.MsgType == 2 then
		ReConnectHall = false
        ReLoginRoom = function() end
        ReLoginHall = function() end
        -- 断开连接
        CloseHallSocket()
        -- 断开连接
        CloseRoomSocket()
        if (#receiveMsg.Message > 0) then
            G.Util.coroutine_call(function()
                local boxResult = showMessageBox(CS.MessageBoxStyle.OK, "提示", receiveMsg.Message, "确定")
                if boxResult == CS.MessageBoxResult.OK then
                    CS.UnityEngine.Application.Quit()
                end
            end)()
        end
	
    else
        G.Util.coroutine_call(function()
            local boxResult = showMessageBox(CS.MessageBoxStyle.OK, "提示", receiveMsg.Message, "确定");
        end)()
    end
end);

-- 2 強更, 1 熱更, 0 不用更新
function CheckVer(localVer, remoteVer)
	if CS.AppDefine.OpenHotUpdate == false then return 0 end

	local ver1 = G.Tool.StringHelper.Split(localVer, ".")
	local ver2 = G.Tool.StringHelper.Split(remoteVer, ".")

	if tonumber(ver1[1]) < tonumber(ver2[1]) then
		return 2
	elseif ver1[1] == ver2[1] and (ver1[2] ~= ver2[2] or tonumber(ver1[3]) < tonumber(ver2[3])) then
		return 1
	else
		return 0
	end
end

-- 获取游戏服务器地址
function RequestGameServerAddr(gamedata)
    print("请求游戏服务器地址信息")
	G.Server.GetGameServerAddrCallback(gamedata.IP, gamedata.Port, function(res, ipAddress, port)
		if res == 0 then
			RequestGameID = gamedata.GameID
			requestGameIp = ipAddress
			requestGamePort = port			
			sendLoginRoomMessage()
		else
			CloseRoomSocket()
			CS.UIBubblePrompt.Show("游戏连接失败(1)", "UIHall")
		end
	end )
end

--請求熱更
function RequestHotUpdate(name, skin, newVersion, onEnd, onFail, onReStart, onFailCancel)
	onHotUpdateEnd = onEnd
	onHotUpdateFail = onFail
	onHotUpdateReStart = onReStart
	onHotUpdateFailCancel = onFailCancel
	
	--該死的底層，要用另一個HallVer來做判斷，原本的不能動
	if name == CS.AppDefine.HallNumber then
		newHallVer = newVersion
	end

    CS.UIMessageBox.Hide()
	CS.UILoadingData.Hide()

	local UpdateDomain = G.GameConfig.UpdateDomain
	local path
	if(skin =="0" or skin =="") then
		path = name .. "/" .. newVersion
	else
		path = skin.."/" .. name .. "/" .. newVersion			
	end

	CS.AppDefine.UpdateFileUrl = UpdateDomain .. path
	G.GameConfig.UpdateFilesPath = path
	CS.HotUpdate.HotUpdateManager.Instance:SetUpdateProjectName(name)
	if name == CS.AppDefine.HallNumber then
		CS.Main.Instance:UpdateAssets()
	else
		CS.HotUpdate.HotUpdateManager.Instance:TryStartUpdateRemoteAssetsToLocal()
	end
end

-- 重新进入游戏(如:断线重连),retryTimes　重连次数,首次调用不传参数
function ReLoginRoom(retryTimes)
    if (co_confirmReturnHall ~= nil) then coroutine.resume(co_confirmReturnHall, str_StopCo) end
    if (co_waitReConnectGame ~= nil) then coroutine.resume(co_waitReConnectGame, str_StopCo) end

	--問題:沒有UINetworkMessage提示，感覺在一直無法連線成功時會有BUG
    if (retryTimes == nil) then
        CS.UIMessageBox.Hide()
        CS.UINetworkMessage.Hide()
    end
    local gameRetryTimes = G.CaseWhen(retryTimes == nil, 10, retryTimes)
  
	connectionGame(
		function()--pass
			local gameData = G.GetRunGameData()
	
			G.Tool.TableHelper.Print(gameData)
			if(gameData.GameType == 1) then
				local parm = {}
				parm.GameID = gameData.GameID
				parm.FlagID = tonumber(gameData.Flag)
				parm.UserID = G.User.GetCurrentUserID()
		
				G.NetQ.RegOnceMsgHook(G.Proto.BClass.GameRoom, G.Proto.Hall.GameCompetitionRetID, function(receiveMsg)
					-- 比賽還沒有結束
					if receiveMsg.PiSaiTime > 0 then
						connectionGameSuccess()
					else
						G.Service.Game.ExitGame();
						G.IsGameing(false)
					end
				end );
		
				G.NetQ.SendMsg(G.Proto.BClass.GameRoom, G.Proto.Hall.GameCompetitionID, parm)
			else
				connectionGameSuccess()
			end	
		end,
		function()--error
			if (gameRetryTimes == 0) then
				print("connect error")
				CS.UINetworkMessage.Hide()
				co_confirmReturnHall = coroutine.create( function()
					local boxResult = showMessageBox(CS.MessageBoxStyle.OK, "提示", "游戏服务器连接断开，点击确定返回大厅。", "确定");
					if boxResult == CS.MessageBoxResult.OK then
						G.Service.Game.ExitGame()
					end
				end )
				coroutine.resume(co_confirmReturnHall)
			else
				gameRetryTimes = gameRetryTimes - 1
				co_waitReConnectGame = coroutine.create( function()
					print("等待1秒后再连")
					local co_val = yield_return_RoomConnect(CS.UnityEngine.WaitForSeconds(1))
					if co_val ~= str_StopCo then ReLoginRoom(gameRetryTimes) end					
				end )
				coroutine.resume(co_waitReConnectGame)
			end
		end 
	)

end

-- 重连登录大厅
function ReLoginHall(retryTimes)
	-- 被大廳強制關閉，不需要重連
	if ReConnectHall == false or G.IsGameInitFinish() == false then return end	

	-- 沒有驗證過版號，完整重連
	if StartUp.GetIsCheckVersion() == false then
		print("沒有驗證過版號，完整重連")
		CloseHallSocket()
		StartUp.BeginConnect()
		return
	end		

    if (co_confirmExitApp ~= nil) then coroutine.resume(co_confirmExitApp, str_StopCo) end
    if (co_waitReConnectHall ~= nil) then coroutine.resume(co_waitReConnectHall, str_StopCo) end
    if (retryTimes == nil) then CS.UIMessageBox.Hide() end
        
    local hallRetryTimes = G.CaseWhen(retryTimes == nil, 10, retryTimes)
    local isGameStart = G.IsGameStart()
    if isGameStart == false then
        CS.UINetworkMessage.Show("网络不稳定，正在重新连接(" .. hallRetryTimes .. ")...")
    end
    print("开始重连大厅", retryTimes, isGameStart)
    G.Server.LoadServerAddr(
		-- 成功处理
		function()
			if isGameStart == false then CS.UINetworkMessage.Hide()	end	
			
			StartUp.setTipMessage("正在登录大厅服务器...", 1)
			G.Service.Login.AutoLogon(StartUp.onLogonRet)
		end,
		-- 失败处理
		function()
			if hallRetryTimes == 0 then
				print("connect error")
				co_confirmExitApp = coroutine.create( function()
					-- 如果已经启动游戏，那么在自动重连之后失败不再处理
					if isGameStart == false then
						-- 断开连接
						CloseHallSocket()
						-- 断开连接
						CloseRoomSocket()

						-- 确认
						CS.UINetworkMessage.Hide()
						local boxResult = showMessageBox(CS.MessageBoxStyle.OK, "提示", "服务器连接断开，请检查网络并尝试重新登录游戏。", "确定");
						if boxResult == CS.MessageBoxResult.OK then
							CS.UnityEngine.Application.Quit()
						end
					end
				end )
				coroutine.resume(co_confirmExitApp)
			else
				hallRetryTimes = hallRetryTimes - 1
				co_waitReConnectHall = coroutine.create( function()
					local co_val = yield_return_HallConnect(CS.UnityEngine.WaitForSeconds(1))
					if co_val ~= str_StopCo then ReLoginHall(hallRetryTimes) end
				end )
				coroutine.resume(co_waitReConnectHall)
			end
		end
    )
end

-- 关闭大厅连接
function CloseHallSocket()
    CS.UINetworkMessage:Hide()
    CS.NetworkManager.Instance.HallSocket:Close()
    -- 停掉所有大厅连接相关的协程
    CS.TimeManager.Instance:StopAllCoroutines("HallConnect")
    CS.NetworkManager.Instance:RemoveEvents( function(s) return s.MainID ~= G.Proto.BClass.Game end)
end   

-- 关闭游戏连接
function CloseRoomSocket()
    G.Room.GameLoginSuccess(false)
    CS.UINetworkMessage:Hide()
    CS.NetworkManager.Instance.RoomSocket:Close()
    -- 停掉所有房间连接相关的协程 
    CS.TimeManager.Instance:StopAllCoroutines("RoomConnect")
    CS.NetworkManager.Instance:RemoveEvents( function(s) return s.MainID == G.Proto.BClass.Game end)
end   
