require("Module")
mmodule(...)

local G = require("Global")

local showMessageBox = G.Util.async_to_sync(CS.UIMessageBox.Show)

--region 下次廢除

-- 0 方舟
-- 1 986
-- 2 藍鑽
local branch = 0
-- Check branch data
function GetBranch()
	return branch
end

--endregion

-- 取得版權
function GetCopyright()
    return ""
end

-- 是否把“元”字改成 “币”
function IsChangeCoin()
    return false
end

-- 取得是否使用超级盾
function getUseQsu()
	return true
end


--L包客製，渠道名稱:6100022、6100023
function Is_L_Site()
    local siteId = G.GameConfig.GameSiteID
    if siteId == 6100022 or siteId == 6100023 or siteId == 6004001 then
        return true
    end

    return false
end

function Is_HT_Site()
    local siteId = G.GameConfig.GameSiteID
    if siteId == 6100032 or siteId == 6100033 or siteId == 6003001 then
        return true
    end

    return false
end
