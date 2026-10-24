require("Module")
mmodule(...)

local G = require "Global"
local groupName = "LoginBonusService";

LoginTimes = 0 --己领取次数
RetCode=-1 --领取代码 0 本日己领取, 1 成功领取, 2可领取, -1 活动不存在, -2 已领超过七次限制, -3 充值金额不足, -4 帐号未绑定
GiftCash = 0
GiftCashToCash = 0
DayMax = 7
ContentList = {}

--查询登入奖励
function SendRequest(callback)
	Callback = callback
	G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.RequestLoginBonusID, nil)
end

--领取登入奖励
function SendApply(callback)
	Callback = callback
	G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.ApplyLoginBonusID, nil)
end

function IsOpenLoginBonus()
	if ((RetCode == -1) or (RetCode == -2)) then
		return false
	else
		return true
	end
end

-- 领取代码 0本日己领取,1成功领取,2未領取,-1活动不存在,-2已领超过七次限制,-3充值金额不足,-4帐号未绑定
G.NetQ.RegMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.RequestLoginBonusRetID, function(receiveMsg)
	LoginTimes=receiveMsg.LoginTimes
    RetCode=receiveMsg.RetCode
	GiftCashToCash= G.Tool.UserHelper.ToCash(receiveMsg.GiftCash)
	GiftCash=receiveMsg.GiftCash
    local userdata = G.User.GetCurrentUser() 
	userdata.CashAmount = receiveMsg.CurrentAmount

	ContentList = receiveMsg.LoginBonusConfigList

	if Callback ~= nil then
		Callback()
		Callback = nil
	end
end , groupName);