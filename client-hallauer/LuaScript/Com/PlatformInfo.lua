require("Module")
mmodule(...)

local G = require("Global")

local showMessageBox = G.Util.async_to_sync(CS.UIMessageBox.Show)

-- 0 方舟
-- 1 986
-- 2 藍鑽
local branch = 0
-- Check branch data
function GetBranch()
	return branch
end

-- 版權
local copyright = {}
--copyright["111"] = "上海迪祥信息科技有限公司"

-- 取得版權
function GetCopyright()
    local PlatformID = G.GameConfig.GamePlatformID
    if copyright[tostring(PlatformID)] == nil then
        return ""
    else
        return copyright[tostring(PlatformID)]
    end
end

-- 把“元”字改成 “币”
local changeCoin = {};
--changeCoin["122"] = true

-- 是否把“元”字改成 “币”
function IsChangeCoin()
    local PlatformID = G.GameConfig.GamePlatformID
    if changeCoin[tostring(PlatformID)] == nil then
        return false
    else
        return changeCoin[tostring(PlatformID)]
    end
end