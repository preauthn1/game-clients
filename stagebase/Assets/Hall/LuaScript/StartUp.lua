local G = require "Global"

local yield_return = G.Util.async_to_sync
(
function(to_to_yield, cb)
    CS.TimeManager.Instance:YieldAndCallback(to_to_yield, cb)
end
)

local showMessageBox = G.Util.async_to_sync(CS.UIMessageBox.Show)

local function setTipMessage(msg, progressPercentage)
    CS.UILoading.SetTipMessage(msg, progressPercentage)
end

local function onLogonRet(recvMsg)
    print("recv login ret...")
    -- 关闭当前界面
    CS.UILoading.Hide()

    if recvMsg.Code == 1 then
        -- 打开大厅界面
        local openparam = CS.WindowNodeInitParam("UIHall", CS.AppDefine.HallNumber)
        openparam.NodeType = 0
        CS.WindowManager.Instance:OpenWindow(openparam)
    else
        -- 打开登录界面
        local openparam = CS.WindowNodeInitParam("UILogin", CS.AppDefine.HallNumber)
        openparam.NodeType = 0
        CS.WindowManager.Instance:OpenWindow(openparam)
    end

    -- 释放当前窗体
    CS.UnityEngine.GameObject.Destroy(CS.Main.Instance)
end

-- 接收到版本号返回数据包
local function reciveVer(receiveMsg)
    print("接收到服务器返回版本号")

    setTipMessage("获取平台版本号成功.", 0.8)
    G.Tool.TableHelper.Print(receiveMsg);

    local newVersion;
    local localVersion = G.Env.GetHallVersion()

    if G.Env.IsIOS() then
        CS.AppDefine.GameUrl = G.GameConfig.IOSAPPUrl
        newVersion = G.Tool.StringHelper.ParseVersion(receiveMsg.IOSVersion, G.GameConfig.GamePlatformID)
    elseif G.Env.IsAndroid() then
        CS.AppDefine.GameUrl = G.GameConfig.AndroidAPPUrl
        newVersion = G.Tool.StringHelper.ParseVersion(receiveMsg.AndroidVersion, G.GameConfig.GamePlatformID);
    elseif G.Env.IsWindows() then
        CS.AppDefine.GameUrl = G.GameConfig.AndroidAPPUrl
        newVersion = G.Tool.StringHelper.ParseVersion(receiveMsg.AndroidVersion, G.GameConfig.GamePlatformID);
    end

    local checkReslut = CS.HotUpdate.HotUpdateManager.CheckVersion(newVersion, localVersion)

    -- 需要强制更新
    if checkReslut == 2 then
        G.Service.NetworkService.CloseHallSocket()

        G.Util.coroutine_call( function()
            local boxResult = showMessageBox(CS.MessageBoxStyle.OKCancel, "", "游戏需要重新下载，点击确定重新下载游戏.", "确定", "取消");

            if boxResult == CS.MessageBoxResult.OK then
                CS.UnityEngine.Application.OpenURL(CS.AppDefine.GameUrl)
                G.AppEvent.AppQuit()
            else
                CS.UnityEngine.Application.Quit()
            end
        end )();
        -- 需要更新
    elseif checkReslut == 1 then
        G.Service.NetworkService.CloseHallSocket()

        G.Util.coroutine_call( function()
            CS.UILoading.SetTipMessage("等待更新", 0);
            local boxResult = showMessageBox(CS.MessageBoxStyle.OKCancel, "", "游戏需要更新，点击确定更新游戏.", "确定", "取消");

            if boxResult == CS.MessageBoxResult.OK then
                CS.HotUpdate.HotUpdateManager.Instance:SetUpdateProjectName(CS.AppDefine.HallNumber);
                CS.Main.Instance:UpdateAssets()
            else
                CS.UnityEngine.Application.Quit()
            end
        end )();
    else
        CS.UnityEngine.GameObject.Destroy(CS.Main.Instance);

        -- 开始广场服务器心跳
        G.HeartBeat.StartHallServerHeartBeat()

        setTipMessage("正在登录大厅服务器...", 1)
        -- 执行自动登录
        G.Service.Login.AutoLogon(onLogonRet)
    end
end 
 
StartUp = { }

-- 主入口函数。从这里开始lua逻辑
function StartUp.Main()
    print("StartUp Main....")

    print("game run ctx init....")

    G.Init()

    -- 资源热更新地址
    CS.AppDefine.UpdateFileUrl = G.GameConfig.UpdateDomain

    -- 显示加载界面
    CS.UILoading.Show();
    G.Util.coroutine_call
    (
    function()

        if G.GameConfig.IsFormalCtx() then
            setTipMessage("正在初始化本地信息...", 0.1);

            -- 获取本机IP地址
            local www = CS.UnityEngine.WWW(G.GameConfig.IPReuestUrl)
            yield_return(www);

            if www.error ~= nil then
                print(www.error)
            else
                if www.isDone and www.text ~= nil and www.text ~= "" then
                    print("获得本机IP地址： " .. www.text)
                    G.SetLocalIP(www.text)
                end
            end
        end

        setTipMessage("正在连接服务器...", 0.2);
        G.Server.LoadServerAddr(
        (
        function()
            setTipMessage("连接服务器成功...", 0.4)
            -- 注册消息接收函数
            G.NetQ.RegOnceMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.HallVerInfoID, reciveVer)
            -- 发送获取版本号消息
            G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.RequestHallVerID)

            setTipMessage("正在检查更新...", 0.6)
        end ),
        ( function()
            setTipMessage("无法连接到服务器,请检查您的网络是否正常.", 1)
        end ))
    end
    )()
end

function StartUp.Shutdown()
    G.Clear()
end