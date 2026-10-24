require("Module")
mmodule(...)

local G = require("Global")
local currentuser = nil
local currentUserState = nil

local userStateValue_Free = 0      -- 站立
local userStateValue_Queue = 1     -- 排队
local userStateValue_Sit = 2       -- 坐下
local userStateValue_Ready = 3     -- 准备
local userStateValue_Game = 4      -- 游戏中
local userStateValue_Offline = 5   -- 断线

function Clear()
    CS.PrefsUtility.DeleteKey("UserID")
    CS.PrefsUtility.DeleteKey("Cer")
    CS.PrefsUtility.DeleteKey("LevelKey")
    CS.PrefsUtility.DeleteKey("UserLevel")
    currentuser = nil
end

-- 设置本地用户信息
function SetLocalUserInfo(user)
    CS.PrefsUtility.SetInt("UserID", user.UserID)
    CS.PrefsUtility.SetString("Cer", user.Cer)
    CS.PrefsUtility.SetString("LevelKey", user.UserData.LevelKey)
    CS.PrefsUtility.SetInt("UserLevel", user.UserData.UserLevel)
end

-- 设置用户信息
function SetCurrentUserInfo(user)
    currentuser = user
    SetLocalUserInfo(user)
end

-- 获取用户信息
function GetCurrentUser()
    return currentuser
end

-- 获取当前用户ID
function GetCurrentUserID()
    return currentuser.UserID
end

-- 获取当前用户证书
function GetCurrentUserCer()
    return currentuser.Cer
end

-- 获取当前用户类型
function GetCurrentUserType()
    return currentuser.UserData.UserType
end

-- 当前用户是否游客
function IsCurrentUserGuest()
    return GetCurrentUserType() == 3
end

-- 获取本地用户信息
function GetLocalUserInfo()
    local userID = CS.PrefsUtility.GetInt("UserID")
    local cer = CS.PrefsUtility.GetString("Cer")
    local userLevel = CS.PrefsUtility.GetInt("UserLevel")
    local levelKey = CS.PrefsUtility.GetString("LevelKey")

    if userID == 0 or cer == "" then
        return nil
    end

    return { UserID = userID, Cer = cer, UserLevel = userLevel, LevelKey = levelKey }
end

-- 用户是否已经登录
function IsLogon()
    return currentuser ~= nil
end


-- 检查是否显示指定的游戏
function CheckUserGame(gameid)
    if currentuser == nil then
        return false
    end

    if currentuser.UserData == nil then
        return false
    end

    local gamelist = currentuser.UserData.GameList

    for _, gid in pairs(gamelist) do
        if gid == gameid then
            return true
        end
    end

    return false
end

function GetUserGameList()
    return currentuser.UserData.GameList
end

-- 设置用户状态
function SetUserState(state)
    currentUserState = state
end

-- 当前用户是游戏状态
function IsCurrentUserGameing()
    if currentUserState == nil then
        return false
    end

    return currentUserState.StateValue == userStateValue_Game or currentUserState.StateValue == userStateValue_Offline
end

-- 当前用户是否旁观状态
function IsCurrentUserLookOn()
    return not IsCurrentUserGameing()
end

-- 当前用户是否准备状态
function IsCurrentUserReady()
    if currentUserState == nil then
        return false
    end

    return currentUserState.StateValue == userStateValue_Ready
end

-- 当期用户是否坐下状态
function IsCurrentUserSit()
    if currentUserState == nil then
        return false
    end

    return currentUserState.StateValue == userStateValue_Sit
end

-- 当前用户桌号
function CurrentUserTableNo()
    if currentUserState == nil then
        return -1
    end

    return currentUserState.TableNo
end

-- 当前用户椅子号
function CurrentUserSeatNo()
    if currentUserState == nil then
        return -1
    end

    return currentUserState.SeatNo
end

-- 设置充值金额配置 
function SetPayAmountConfig(data)
    local list = G.Tool.StringHelper.Split(data, "_")
    print("+++++++++++++++++++", list[1], tostring(G.GameConfig.GamePlatformID))
    if (list[1] == tostring(G.GameConfig.GamePlatformID)) then
        currentuser.UserData.PayAmountConfig = list[2]
    end
end