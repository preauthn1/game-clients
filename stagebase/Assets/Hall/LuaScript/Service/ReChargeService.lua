require("Module")
mmodule(...)

local G = require "Global"


function GetPayAmountConfig()
    local configstr = G.User.GetCurrentUser().UserData.PayAmountConfig

    local config = { }
    for _, v in pairs(G.Tool.StringHelper.Split(configstr, "|")) do
        local payType = G.Tool.StringHelper.Split(v, ":")
        local k = payType[1]
        local list = G.Tool.StringHelper.Split(payType[2], ".")
        config[k] = list
    end
    return config
end

