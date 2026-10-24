require("Module")
mmodule(...)

local G = require "Global"
local groupName = "AnnSerice";

local AnnList = { };            -- 公告队列

function GetOneAnnMeg()
    local message = G.Tool.TableHelper.Pull(AnnList)

    --    if message == nil then
    --        return "123123123123123sdsdf";
    --    else
    --        return message
    --    end

    return message
end
 
G.NetQ.RegMsgHook(G.Proto.BClass.NotifyServer, G.Proto.NotifyServer.AnnID, function(receiveMsg)
    -- 根据平台做筛选
    for i, ann in ipairs(receiveMsg.Ann) do
        if ann.PlatformID == G.GameConfig.GamePlatformID then
            table.insert(AnnList, ann.MsgContent)
        end
    end
end , groupName);