require("Module")
mmodule(...)

local G = require "Global"

local mailList

local groupName = "MailService"

function GetMailList()
    return mailList
end

function HaveUnReadMail()
    if mailList == nil then
        return false
    end

    for i = 1, #mailList, 1 do
        if mailList[i].IsRead == false then
            return true
        end
    end

    return false
end

function InitLoadMailList()
    if (mailList == nil) then
        RefreshMailList()
    end
end

function RefreshMailList()
    G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.GetMailListID, nil)
end
 
function RegMailRetCallBack(callback)
    G.NetQ.RegMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.GetMailListRetID, function(receiveMsg)
        mailList = receiveMsg.MailList

        if callback ~= nil then
            callback()
        end
    end , groupName)
end
-- ƳʼϢ
function RemoveRegMailMsg()
    G.NetQ.RemoveMsgHookByGroup(groupName)
end