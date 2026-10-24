-- region *.lua
-- Date
-- 此文件由[BabeLua]插件自动生成

require("Module")
mmodule(...)

local G = require "Global"
local str_StopCo = "StopCoroutine"  -- 退出协程函数关键字符串

local co_receiveGameVerMsg          -- 接收游戏本版协程引用
local co_connectionGame             -- 连接游戏服务器协程引用
local co_confirmReturnHall          -- 确认是否返回大厅协程引用
local co_waitReConnectGame          -- 等待重连游戏协程

local co_confirmExitApp             -- 确认是否退出程序协程
local co_waitReConnectHall          -- 等待重连大厅协程


local RequestGameID                 -- 请求的游戏ID
local yield_return_HallConnect = G.Util.async_to_sync
(
function(to_to_yield, cb)
    CS.TimeManager.Instance:YieldAndCallback("HallConnect", to_to_yield, cb)
end
)
local yield_return_RoomConnect = G.Util.async_to_sync
(
function(to_to_yield, cb)
    CS.TimeManager.Instance:YieldAndCallback("RoomConnect", to_to_yield, cb)
end
)
local showMessageBox = G.Util.async_to_sync(CS.UIMessageBox.Show)


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
    CS.UINetworkMessage:Hide()
    CS.NetworkManager.Instance.RoomSocket:Close()
    -- 停掉所有房间连接相关的协程 
    CS.TimeManager.Instance:StopAllCoroutines("RoomConnect")
    CS.NetworkManager.Instance:RemoveEvents( function(s) return s.MainID == G.Proto.BClass.Game end)
end   

-- 连接游戏服务器
local function connectionGame(call_success, call_error)
    local ipAddress, port = G.CurrentGameIPAndPort()
    if (co_connectionGame ~= nil) then coroutine.resume(co_connectionGame, str_StopCo) end
    co_connectionGame = coroutine.create( function()
        CS.DG.Tweening.DOTween.KillAll()
        print("尝试连接游戏服务器" .. ipAddress .. ":" .. port)
        local co_val = yield_return_RoomConnect(CS.NetworkManager.Instance:SendRoomConnect(ipAddress, port))
        if (co_val == str_StopCo) then return end
        if CS.NetworkManager.Instance.RoomSocket.MyConnectState == CS.ConnectState.Connect then
            G.NetQ.Resume()
            print("启动游戏心跳机制")
            G.HeartBeat.StartGameServerHeartBeat()

            -- 发送本地IP给服务器
            G.Server.SendLocalIPMsg(1)

            if (type(call_success) == "function") then
                print("连接成功,回调成功函数")
                call_success()
            end
        else
            print("连接游戏失败")
            if (type(call_error) == "function") then
                call_error()
            end
        end
    end )
    coroutine.resume(co_connectionGame)
end

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
        G.Util.coroutine_call
        (
        function()
            -- 切换场景
            G.Util.async_to_sync(CS.GameManager.Instance.EnterGame)(G.GetGamePName(RequestGameID)) 
            print("当前加载场景数量 " .. CS.UnityEngine.SceneManagement.SceneManager.sceneCount)
            SendLoginRoomMsg()
        end
        )()
    else
        SendLoginRoomMsg()
    end

end

-- 发送登录游戏消息,自动连接一次游戏
local function sendLoginRoomMessage()
    CS.UILoadingData.Show("正在连接游戏服务器,请稍后...", 10,
    (
    function()
        CS.UIBubblePrompt.Show("连接游戏服务器失败,请检查您的网络是否正常", "UIHall")
    end
    ))

    connectionGame(connectionGameSuccess)
end

function sendLoginRoom(gameid)
    RequestGameID = gameid
	sendLoginRoomMessage()
end

-- 游戏更新完成事件
local function onGameUpdateSucess()
    sendLoginRoomMessage()
    CS.HotUpdate.HotUpdateManager.OnHotUpdateComplated = CS.HotUpdate.HotUpdateManager.OnHotUpdateComplated - onGameUpdateSucess
end

-- 接收游戏版本号处理
local function receiveGameVerMsg(data)
    if (co_receiveGameVerMsg ~= nil) then coroutine.resume(co_receiveGameVerMsg, str_StopCo) end
    CS.UIMessageBox.Hide()

    local newVersion;
    print("检查游戏ID", RequestGameID, G.GetGamePName(RequestGameID))
    local localVersion = CS.HotUpdate.HotUpdateManager.Instance:GetProjectVersion(G.GetGamePName(RequestGameID));

    if G.Env.IsIOS() then
        newVersion = data.IOSVersion
    elseif G.Env.IsAndroid() then
        newVersion = data.AndroidVersion
    elseif G.Env.IsWindows() then
        newVersion = data.AndroidVersion
    end

    local checkReslut = CS.HotUpdate.HotUpdateManager.CheckVersion(newVersion, localVersion)

    if checkReslut ~= 0 and checkReslut ~= -1 then
        -- 有版本更新，将Socket断开
        CloseRoomSocket()
        CS.UILoadingData.Hide()
        co_receiveGameVerMsg = coroutine.create( function()
            local message = "";

            if localVersion == CS.HotUpdate.HotUpdateManager.DEFAULT_VERSION then
                message = "游戏需要下载，点击确定下载游戏";
            else
                message = "游戏需要更新，点击确定更新游戏";
            end

            local co_val = showMessageBox(CS.MessageBoxStyle.OKCancel, "", message, "确定", "取消");
            if (co_val == str_StopCo) then return end
            local boxResult = co_val

            if boxResult == CS.MessageBoxResult.OK then
                -- 更新或者下载游戏
                print("更新游戏ID", RequestGameID)
                CS.HotUpdate.HotUpdateManager.Instance:SetUpdateProjectName(G.GetGamePName(RequestGameID))
                CS.HotUpdate.HotUpdateManager.Instance:TryStartUpdateRemoteAssetsToLocal()

                CS.UIUpdateGame.Show();
                CS.HotUpdate.HotUpdateManager.OnHotUpdateComplated = CS.HotUpdate.HotUpdateManager.OnHotUpdateComplated + onGameUpdateSucess
            end
        end )
        assert(coroutine.resume(co_receiveGameVerMsg), "确定更新协程报错")
    else
        sendLoginRoomMessage()
    end
end

-- 检查游戏版本
function CheckGameVersion(gameid)
    RequestGameID = gameid
    CS.UILoadingData.Show("正在连接游戏服务器,请稍后...", 10,
    (
    function()
        CS.UIBubblePrompt.Show("连接游戏服务器失败,请检查您的网络是否正常", "UIHall")
    end
    ))
    -- 连接游戏服务器
    connectionGame(
    -- 成功处理
    function()
        print("连接到游戏服务器成功")
        CS.UILoadingData.Show("正在验证游戏版本号,请稍后...", 10,
        (
        function()
            CS.UIBubblePrompt.Show("获取游戏版本号错误", "UIHall")
        end
        ))
        G.NetQ.RegOnceMsgHook(G.Proto.BClass.GameRoom, G.Proto.GameRoom.GameVerInfoID, receiveGameVerMsg);
        G.NetQ.SendMsg(G.Proto.BClass.GameRoom, G.Proto.GameRoom.RequestGameVerID)
    end
    ,
    -- 失败处理
    function()
        print("连接到游戏服务器失败")
        CS.UILoadingData.Hide();
        CS.UIBubblePrompt.Show("连接游戏服务器失败,请检查您的网络是否正常.", "UIHall")
    end
    )
end

-- 获取游戏服务器地址
function RequestGameGameServerAddr(gamedata)
    print("请求游戏服务器地址信息")
    CS.UILoadingData.Show("请求分配游戏服务器,请稍后...", 10,
    (
    function()
        CS.UIBubblePrompt.Show("请求分配游戏服务器失败", "UIHall")
    end
    ))
    -- 拦截游戏服务器地址消息
    G.NetQ.RegOnceMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.GameServerAddrInfoID, function(receiveMsg)
        local ipAddress, port = G.Server.GetGameServerAddr(receiveMsg.IPAddress, receiveMsg.Port)
        G.SetRunGameIPAndPort(ipAddress, port)
        CheckGameVersion(gamedata.GameID)
    end );
	
	
    -- 发送请求游戏服务器地址
    G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.RequestGameServerAddrID, gamedata)
end

-- 重新进入游戏(如:断线重连),retryTimes　重连次数,首次调用不传参数
function ReLoginRoom(retryTimes)
    -- if (not G.IsGameing()) then return end
    print("重新连接游戏服务器", retryTimes)
    if (co_confirmReturnHall ~= nil) then coroutine.resume(co_confirmReturnHall, str_StopCo) end
    if (co_waitReConnectGame ~= nil) then coroutine.resume(co_waitReConnectGame, str_StopCo) end

    if (retryTimes == nil) then
        CS.UIMessageBox.Hide()
        CS.UINetworkMessage.Hide()
    end
    local gameRetryTimes = G.CaseWhen(retryTimes == nil, 10, retryTimes)
    CS.UINetworkMessage.Show("网络不稳定，正在重新连接(" .. gameRetryTimes .. ")...")

    connectionGame(connectionGameSuccess, function()
        if (gameRetryTimes == 0) then
            print("connect error")
            CS.UINetworkMessage.Hide()
            co_confirmReturnHall = coroutine.create( function()
                local boxResult = showMessageBox(CS.MessageBoxStyle.OK, "提示", "游戏服务器连接断开，点击确定返回大厅。", "确定");
                if (boxResult == str_StopCo) then return end
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
                if (co_val == str_StopCo) then return end
                print("等待1秒完成马上重连")
                ReLoginRoom(gameRetryTimes)
            end )
            coroutine.resume(co_waitReConnectGame)
        end
    end )

end


-- 重连登录大厅
function ReLogonHall(isAutoLogin, retryTimes)
    isAutoLogin = G.CaseWhen(isAutoLogin == nil, true, isAutoLogin)
    if (co_confirmExitApp ~= nil) then coroutine.resume(co_confirmExitApp, str_StopCo) end
    if (co_waitReConnectHall ~= nil) then coroutine.resume(co_waitReConnectHall, str_StopCo) end
    if (retryTimes == nil) then
        CS.UIMessageBox.Hide()
    end
    local hallRetryTimes = G.CaseWhen(retryTimes == nil, 10, retryTimes)
    local isGameStart = G.IsGameStart()
    if isGameStart == false then
        CS.UINetworkMessage.Show("网络不稳定，正在重新连接(" .. hallRetryTimes .. ")...")
    end
    print("开始重连大厅", retryTimes, isGameStart)
    G.Server.LoadServerAddr(
    -- 成功处理
    function()
        if isGameStart == false then
            CS.UINetworkMessage.Hide()
            print("是否游戏中", isGameStart)
            CS.UIBubblePrompt.Show("正在登录大厅服务器...", "UIHall")
        end

        G.Service.Login.AutoLogon( function(recvMsg)
            if recvMsg.Code == 0 then
                CS.UIBubblePrompt.Show(recvMsg.Message .. "请退出程序重新登录.", "UIHall")
            end
        end )
    end
    ,
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
                    if (boxResult == str_StopCo) then return end

                    if boxResult == CS.MessageBoxResult.OK then
                        CS.UnityEngine.Application.Quit()
                    end
                end
            end )
            coroutine.resume(co_confirmExitApp)
        else
            hallRetryTimes = hallRetryTimes - 1
            print(hallRetryTimes)
            co_waitReConnectHall = coroutine.create( function()
                print("等待1秒后再连")
                local co_val = yield_return_HallConnect(CS.UnityEngine.WaitForSeconds(1))
                if (co_val == str_StopCo) then return end
                print("等待1秒完成马上重连")
                ReLogonHall(true, hallRetryTimes)
            end )
            coroutine.resume(co_waitReConnectHall)
        end
    end
    )
end

-- region 服务器主动断开连接提示
G.NetQ.RegMsgHook(G.Proto.BClass.Common, G.Proto.Common.TipMessageID, function(receiveMsg)

    CS.UILoadingData.Hide()
    CS.UINetworkMessage.Hide()

    G.Tool.TableHelper.Print(receiveMsg)

    -- MsgType 1 房间主动踢出  2 大厅主动踢出 3 普通提示
    if receiveMsg.MsgType == 1 then
        -- 断开连接
        CloseRoomSocket()
        -- 如果有消息才显示k
        if (#receiveMsg.Message > 0) then
            G.Util.coroutine_call
            (
            function()
                -- Param等于1表示金币不足
                if (receiveMsg.Param == 1) then
                    G.Util.coroutine_call
                    (
                    function()
                        local boxResult = showMessageBox(CS.MessageBoxStyle.OKCancel, "", receiveMsg.Message, "前往充值", "取消");

                        if G.IsGameStart() then
                            if boxResult == CS.MessageBoxResult.OK then
                                local hallParam = { };
                                hallParam.OpenRechargeUI = true;
                                G.Service.Game.ExitGame(nil, hallParam);
                            else
                                G.Service.Game.ExitGame();
                            end
                        else
                            if boxResult == CS.MessageBoxResult.OK then
                                local hallData = { };
                                hallData.OpenRechargeUI = true;
                                local node = CS.WindowManager.Instance:FindWindowNodeByName("UIHall")
                                node.WindowData = hallData
                            end
                        end
                    end
                    )()
                else
                    local boxResult = showMessageBox(CS.MessageBoxStyle.OK, "提示", receiveMsg.Message, "确定");
                    if boxResult == CS.MessageBoxResult.OK and G.IsGameStart() then
                        G.Service.Game.ExitGame();
                    end
                end
            end
            )()
        end

    elseif receiveMsg.MsgType == 2 then
        ReLoginRoom = function() end
        ReLogonHall = function() end
        -- 断开连接
        CloseHallSocket()
        -- 断开连接
        CloseRoomSocket()
        if (#receiveMsg.Message > 0) then
            G.Util.coroutine_call
            (
            function()
                local boxResult = showMessageBox(CS.MessageBoxStyle.OK, "提示", receiveMsg.Message, "确定");

                if boxResult == CS.MessageBoxResult.OK then
                    CS.UnityEngine.Application.Quit()
                end
            end
            )()
        end

    else
        G.Util.coroutine_call
        (
        function()
            local boxResult = showMessageBox(CS.MessageBoxStyle.OK, "提示", receiveMsg.Message, "确定");
        end
        )()
    end
end );

-- endregion



-- endregion
