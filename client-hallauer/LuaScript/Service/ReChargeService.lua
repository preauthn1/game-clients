require("Module")
mmodule(...)

local G = require "Global"
local yield_return = G.Util.async_to_sync
(
function(to_to_yield, cb)
    CS.TimeManager.Instance:YieldAndCallback(to_to_yield, cb)
end
)

local groupName = "UIHall";

local payConfig
-- oRȦC
function GetPayConfig()
	return payConfig
end

-- dINzH
G.NetQ.RegMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.ProxyRequestRetID, function(data)
	if data.type == "1" then
		payConfig = data
	end
end, groupName )

-- oRȸ
function GetRechargeList()
	local url = G.GameConfig.RechargeListDomain .. "/Pay/GetAmountList/"..tostring(G.GameConfig.GamePlatformID)
    -- local url = G.GameConfig.RechargeListDomain .. "/PayCenter/amountlist/"..tostring(G.GameConfig.GamePlatformID)
	sendata={};
	sendata.data=url;
	sendata.type="1";
	G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.ProxyRequestID, sendata)
end