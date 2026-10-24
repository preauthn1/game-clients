require("Module")
mmodule(...)

local G = require("Global")

local yield_return_HallConnect = G.Util.async_to_sync
(
function(to_to_yield, cb)
    CS.TimeManager.Instance:YieldAndCallback("HallConnect", to_to_yield, cb)
end
)
  

-- 服务器IP
local serverIP = ""
-- 服务器端口
local serverPort = 0
-- 服务器模式 0 直连 1 转发
local serverMode = 0
local co_connectHall    -- 连接大厅服务器协程
local str_StopCo = "StopCoroutine"  -- 退出协程关键字符串

-- 清理服务器地址
local function clearServerAddr()
    serverIP = ""
    serverPort = 0
end

-- 发送本地IP给服务器 0 大厅服务器　1游戏服务器
function SendLocalIPMsg(serverType)
    local localIP = G.GetLocalIP()
    if (localIP ~= nil and localIP ~= "" and serverMode == 1) then
        if (serverType == 0) then
            print("发送IP地址" .. localIP .. "给大厅服务器")
            G.NetQ.SendHallMsg(G.Proto.BClass.Common, G.Proto.Common.IPReportID, { IPAddress = G.GetLocalIP() })
        else
            print("发送IP地址" .. G.GetLocalIP() .. "给游戏服务器")
            G.NetQ.SendGameMsg(G.Proto.BClass.Common, G.Proto.Common.IPReportID, { IPAddress = G.GetLocalIP() })
        end
    end
end

-- 设置服务器信息
function SetServerInfo(ip, port, mode)
    serverIP = ip
    serverPort = port
    serverMode = G.Tool.Math.ParseInt(mode)
end



-- 获取大厅服务器信息
function GetHallServerAddr()
    if serverIP == "" or serverPort == 0 then
        return nil, nil
    end

    return serverIP, serverPort
end

-- 获取游戏服务器地址
function GetGameServerAddr(ip, port)
    -- 直连模式
    if serverMode == 0 then
        return ip, port
    end

    -- 转发模式
    return serverIP, port
end


-- 加载服务器地址
function LoadServerAddr(onSuccessCallback, onErrorCallback)
    if (co_connectHall ~= nil) then coroutine.resume(co_connectHall, str_StopCo) end

    -- 成功回调
    local onSuccess = function()
        if onSuccessCallback ~= nil then
            onSuccessCallback()
        end
    end

    -- 失败回调
    local onError = function()
        if onErrorCallback ~= nil then
            onErrorCallback()
        end
    end

    -- 清理地址信息
    clearServerAddr()

    -- 本地环境和测试环境,使用默认的IP和端口,直连模式
    if G.GameConfig.IsLocalCtx() or G.GameConfig.IsTestCtx() or G.GameConfig.IsOnlineTextCtx() then
        local localaddr = G.GameConfig.DefaultServerIP .. ":" .. G.GameConfig.DefaultServerPort

        co_connectHall = coroutine.create( function()
            print("尝试连接大厅服务器." .. localaddr)
            local co_val = yield_return_HallConnect(CS.NetworkManager.Instance:SendHallConnect(G.GameConfig.DefaultServerIP, G.GameConfig.DefaultServerPort))
            if (co_val == str_StopCo) then return end
            if CS.NetworkManager.Instance.HallSocket.MyConnectState == CS.ConnectState.Connect then
                print("连接到大厅服务器成功." .. localaddr)
                SetServerInfo(G.GameConfig.DefaultServerIP, G.GameConfig.DefaultServerPort, 0)
                -- 发送本地IP给大厅服务器
                SendLocalIPMsg(0)
                onSuccess()
            else
                print("无法连接到大厅服务器." .. localaddr)
                onError()
            end
        end )
    else
        co_connectHall = coroutine.create( function()
            local localUserData = G.User.GetLocalUserInfo()
            for _, url in pairs(G.GameConfig.ServerListDomain) do
                if (localUserData ~= nil) then
                    url = url .. string.format("/serverlist?userid=%s&levelid=%s&key=%s&r=%s", localUserData.UserID, localUserData.UserLevel, localUserData.LevelKey, math.random(1, 100000))
                else
                    url = url .. string.format("/serverlist?r=%s", math.random(1, 100000))
                end

                local www = CS.UnityEngine.WWW(url)
                print("开始加载serverlist")
                local co_val = yield_return_HallConnect(CS.TimeManager.Instance:TimeOutReturn( function() return www.isDone end, 8))
                if (co_val == str_StopCo) then return end
                if (www.isDone) then
                    -- 加载url成功
                    if www.error == nil then
                        -- 获得文本数据
                        local data = www.text

                        print("加载serverlist成功,获取到数据," .. data .. " from " .. url)

                        -- 解析数据
                        local arr1 = G.Tool.StringHelper.Split(data, "|")

                        if #arr1 ~= 2 then
                            print("数据结构错误," .. data .. "," .. url)
                        else
                            local ipstr = arr1[1]
                            local mode = arr1[2]

                            local arr2 = G.Tool.StringHelper.Split(ipstr, ",")

                            for _, addr in pairs(arr2) do
                                if addr ~= nil and addr ~= "" then
                                    local arr3 = G.Tool.StringHelper.Split(addr, ":")
                                    if #arr3 == 2 and arr3[1] ~= "" and arr3[2] ~= "" then
                                        print("解析到地址" .. addr)

                                        -- ip
                                        local ip = tostring(arr3[1])
                                        -- 端口
                                        local port = tonumber(arr3[2])
                                        print(string.format("尝试连接大厅服务器%s,%s", ip, port))
                                        local co_val = yield_return_HallConnect(CS.NetworkManager.Instance:SendHallConnect(ip, port))
                                        if (co_val == str_StopCo) then return end
                                        if CS.NetworkManager.Instance.HallSocket.MyConnectState == CS.ConnectState.Connect then
                                            print("连接到大厅服务器成功," .. addr)

                                            -- 设置服务器信息
                                            SetServerInfo(ip, port, mode)
                                            -- 发送本地IP给大厅服务器
                                            SendLocalIPMsg(0)

                                            -- 连接服务器成功回调
                                            onSuccess()
                                            return
                                        else
                                            print("连接到大厅服务器失败," .. addr)
                                        end
                                    end
                                end
                            end
                        end
                    else
                        print("加载serverlist失败," .. url)
                    end
                else
                    print("加载serverlist超时," .. url)
                end
            end

            print("加载所有serverlist失败...")
            -- 连接服务器失败回调
            onError()
        end )
    end
    coroutine.resume(co_connectHall)
end