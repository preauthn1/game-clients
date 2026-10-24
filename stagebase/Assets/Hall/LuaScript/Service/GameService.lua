require("Module")
mmodule(...)

local G = require "Global"

-- 场景初始化
local onGameSceneInit = nil

-- 桌子号改变事件(主要用于水果机之类的百人游戏)
local tableNoChange = nil

-- region 公共协议拦截

-- 用户入桌消息
function RegUserEnterMsg(callfun)
    G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game.UserEnterID, function(data)
        G.Tool.TableHelper.Print(data)
        callfun(data)
        if (data.User.UserID == G.User.GetCurrentUser().UserID and data.User.StateValue == 2) then
            print("发送准备请求")
            ReadyGame()
        end
    end , G.GetGamePName())
end

-- 用户状态改变消息
function RegUserStateChangeMsg(callfun)
    G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game.UserStateChangeID, function(data)
        if (data.User.UserID == G.User.GetCurrentUser().UserID) then
            -- 处理用户桌子号改变时，修改顶部房间信息
            G.Tool.TableHelper.Print(data)
            if (tableNoChange ~= nil) then
                if (data.User.TableNo >= 0) then
                    tableNoChange(data.User.TableNo)
                end
            end

            -- 设置全局用户状态值
            G.User.SetUserState(data.User)

            if (data.User.StateValue > 3) then
                G.IsGameing(true)
            else
                G.IsGameing(false)
            end
        end
        callfun(data);
    end , G.GetGamePName())
end

-- 游戏开始消息
function RegGameStartMsg(callfun)
    G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game.GameStartID, function(data)
        callfun(data)
    end , G.GetGamePName())
end

-- 游戏结束消息
function RegGameEndMsg(callfun)
    G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game.GameEndID, function(data)
        callfun(data);
    end , G.GetGamePName())
end

-- 用户离开消息
function RegUserLeaveMsg(callfun)
    G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game.UserLeaveID, function(data)
        callfun(data);
    end , G.GetGamePName())
end

-- 截拦当前桌所有玩家动画完成消息
function RegAllUserActionCommitedMsg(callfun)
    G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game.AllUserActionCommitID, function(data)
        print("收到动画通知", data.ActionName)
        callfun(data.ActionName);
    end , G.GetGamePName())
end

-- 旁观用户消息通知
function RegLookOnUserNotify(callfun)
    G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game.LookOnUserNotifyID, function(data)
        print("收到旁观用户通知")
        callfun(data)
    end , G.GetGamePName())
end

-- endregion

-- 初始化游戏顶部菜单界面,_parent顶部菜单附在指定的节点，isCustomExit是否需要自定义退出确认界面
function InitGameTopMenu(_parent, isCustomExitUI)
    isCustomExitUI = G.CaseWhen(isCustomExitUI == nil, false, isCustomExitUI)
    local initParas = {
        isCustomExitUI = isCustomExitUI
    }
    CS.WindowManager.Instance:OpenGameWindow("UIGameTopMenu", CS.AppDefine.HallNumber, _parent, initParas);
end

-- 发送客户端动作完成消息
function SendUserActionCommit(data, isLookOn)
    isLookOn = G.CaseWhen(isLookOn == nil, false, isLookOn)
    if (not isLookOn) then
        print("发送动画消息", data)
        G.NetQ.SendMsg(G.Proto.BClass.Game, G.Proto.Game.UserActionCommitID, { ActionName = data })
    else
        print("旁观用户不发送动画消息", data)
    end
end

-- 发送准备消息
function ReadyGame()
    G.NetQ.SendMsg(G.Proto.BClass.GameRoom, G.Proto.GameRoom.GameReadyID)
end

-- 发送换桌消息
function ChangeDesk()
    G.NetQ.SendMsg(G.Proto.BClass.GameRoom, G.Proto.GameRoom.UserQueueID)
end

-- 退出游戏场景
function ExitGame(callfun, hallData)
    G.Tool.Sound.CloseSound()
    RemoveLoadGameLua()
    if G.IsGameStart() then
        CS.WindowManager.Instance:CloseWindowByProjectName(G.GetGamePName())
    end
    roomNameChange = nil
    G.ClearRunGame()
    G.Service.NetworkService.CloseRoomSocket()
    onGameSceneInit = nil
    local exitGame = G.Util.async_to_sync(CS.GameManager.Instance.QuitGame)
    G.Util.coroutine_call( function()

        print("退出游戏场景")
        G.NetQ.Resume()
        G.Tool.UILoading.Hide()

        local openparam = CS.WindowNodeInitParam("UIHall", CS.AppDefine.HallNumber)
        -- 返回大厅时需要回传给大厅的数据
        openparam.WindowData = hallData
        openparam.NodeType = 0
        CS.WindowManager.Instance:OpenWindow(openparam)

        exitGame( function()

            if (type(callfun) == "function") then
                callfun()
            end
        end )
    end )()
end

function ReloadGame(callfun)
    local reLoadGame = G.Util.async_to_sync(CS.GameManager.Instance.ReLoadGame)
    G.Util.coroutine_call( function()
        reLoadGame( function()
            if (type(callfun) == "function") then callfun() end
        end )
    end )()
end

-- 注册游戏场景初始化方法
function RegNotifyGameSceneInit(callfun)
    -- onGameSceneInit = callfun
end 

-- 注册桌子号改变事件
function RegTableNoChange(callfun)
    tableNoChange = callfun
end

function RemoveTableNoChange()
    tableNoChange = nil
end

function RemoveLoadGameLua()
    for k, _ in pairs(package.loaded) do
        if (string.find(k, string.format("/%s/", G.GetGamePName()))) then
            package.loaded[k] = nil
            package.preload[k] = nil
        end
    end
end
