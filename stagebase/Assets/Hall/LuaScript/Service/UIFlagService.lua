require("Module")
mmodule(...)

local G = require "Global"
-- ǷIOSֵ
function IsIOSRecharge()
    return G.Tool.StringHelper.SubString(G.User.GetCurrentUser().UserData.UIFlag, 1, 1) == "1"
end

-- Ƿʾ֧
function IsShowOnlinePay()
    return G.Tool.StringHelper.SubString(G.User.GetCurrentUser().UserData.UIFlag, 2, 1) == "1"
end

-- Ƿʾ֧
function IsShowAgentPay()
    return G.Tool.StringHelper.SubString(G.User.GetCurrentUser().UserData.UIFlag, 3, 1) == "1"
end

-- Ƿʾ
function IsShowAgentApply()
    return G.Tool.StringHelper.SubString(G.User.GetCurrentUser().UserData.UIFlag, 4, 1) == "1"
end