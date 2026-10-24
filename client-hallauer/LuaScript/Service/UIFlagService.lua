require("Module")
mmodule(...)

local G = require "Global"
-- ǷIOSֵ
function IsIOSRecharge()
    return false
end

-- Ƿʾ֧
function IsShowOnlinePay()
    return G.User.payinfo.UIFlagPay
end

-- Ƿʾ֧
function IsShowAgentPay()
	if G.User.payinfo.UIFlagAgent == false then
		return false
	end
	
	return true
end

-- Ƿʾ
function IsShowAgentApply()
    return G.User.payinfo.UIFlagApplyAgent
end