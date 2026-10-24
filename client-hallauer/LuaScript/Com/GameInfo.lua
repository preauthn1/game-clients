require("Module")
mmodule(...)

local G = require("Global")

-- region 游戏ID配置
GameIDs = {};
GameIDs["25"] = "dfdc" -- 多福多财
GameIDs["26"] = "tgw" -- 糖果屋
GameIDs["27"] = "ald" -- 阿拉丁
GameIDs["29"] = "zcjb" -- 招财进宝
GameIDs["1001"] = "wlzb" -- 五龙争霸
-- endregion


-- 遊戲名稱
GameNames = {};
GameNames["25"] = { [0] = "多福多财", [1] = "皇家老虎机" }
GameNames["26"] = { [0] = "糖果屋" }
GameNames["27"] = { [0] = "阿拉丁" }
GameNames["29"] = { [0] = "招财进宝" }
GameNames["1001"] = { [0] = "五龙争霸" }

-- 要過濾的遊戲名稱
local FilterGameNames = {};
FilterGameNames["25"] = "多福多财" -- 27
FilterGameNames["26"] = "糖果屋" -- 28
FilterGameNames["27"] = "阿拉丁" -- 29
FilterGameNames["29"] = "招财进宝" -- 30
FilterGameNames["1001"] = "五龙争霸" -- 31

function GetGameIDCount()
    local count = 0
    for k, v in pairs(GameIDs) do
        count = count + 1
    end
    return count
end

-- 获取游戏IconName
function GetGameIconName(gameId)
    local userGameList = G.User.GetUserGameList2()
    for k, v in pairs(userGameList) do
        if tostring(v.GameID) == tostring(gameId) then
            return tonumber(v.IconName)
        end
    end
    print("GetGameIconName not find " .. gameId)
    return 0
end

-- 获取游戏项目名称
function GetGameName(GameId)
    local iconName = GetGameIconName(GameId)
    local gameName = GetGameNameByIconName(tostring(GameId), iconName)
    return gameName
end

-- 从gameID和iconName获取游戏项目名称
function GetGameNameByIconName(GameId, IconName)
    if GameId == nil or GameId == "nil" then
        print("gameID is nil")
        return ""
    elseif GameNames[tostring(GameId)] == nil then
        print("GameNames not find, gameID:" .. tostring(GameId))
        return ""
    else
        return GameNames[tostring(GameId)][IconName]
    end
end

-- 取得要過濾的名稱
function GetFilterGameNamess()
    return FilterGameNames
end

-- 替換訊息中遊戲名稱
function ReplaceGameName(message)
    for k, v in pairs(FilterGameNames) do
        -- 找關鍵字
        q = string.match(message, v)
        if q ~= nil then
            local iconName = GetGameIconName(k)
            if iconName > 0 then
                local name = GetGameNameByIconName(k, iconName)
                local newMessage = string.gsub(message, v, name)
                return newMessage
            end
        end
    end

    return message
end