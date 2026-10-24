require("Module")
mmodule(...)

local G = require "Global"

RequestIpCount=0;
RequestGameRemoteVersion=0;
RequestGameServerFlag=0;

-- endregion

-- 是否使用新的Transfer機制，資料加密，回傳token
local useNewTransfer = true
function isUseNewTransfer()
	return useNewTransfer;
end

-- 游戏自动准备倒计时
local autoReadyCountNum = 3
function GetAutoReadyCountNum()
    return autoReadyCountNum
end

-- 环境定义字符串
local VERSIONTYPE_LOCAL = "local"
local VERSIONTYPE_ONLINETEST = "online"
local VERSIONTYPE_TEST = "test"
local VERSIONTYPE_FORMAL = "formal"
local ServerOption = G.GameDefine.ServerOption
--local ServerOption = CS.AppDefine.ServerOption
--ServerOption = 3
function GetServerOption()
	return ServerOption
end

function ReSetServerOption(so,pi,si)
    ServerOption=so;
    GamePlatformID=pi
    GameSiteID=si
end

-- 当前运行环境
local VERSIONTYPE = VERSIONTYPE_FORMAL

-- 非编辑器环境
if CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.Android or CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.IPhonePlayer then
    VERSIONTYPE = VERSIONTYPE_FORMAL
end

-- 游戏官网
WebSiteDomain = "http://example.invalid/"
   
-- 充值地址     
ChargeDomain = "http://0.0.0.0/paycenter/index?orderid=%d"

-- serverlist地址     
ServerListDomain = { "dGYuMjg4ZG0uY29t","d3d3Ljg1enIuY24=","MjcuMTQ4LjE5Ni4xMg==","d3d3LjYzYncuY24=","d3d3LjY4eHMuY24=","d3d3Lmp1ZGVyb25nLmNu","MTgwLjEwMS43NS41NA=="}

-- User IP
UserIP = nil

-- serverlist檔案地址     
ServerListFile = nil

-- 游戏渠道编号
GameSiteID = G.GameDefine.GameSiteID

-- 游戏平台编号         
GamePlatformID = G.GameDefine.GamePlatformID

-- 资源更新地址
UpdateDomain = "http://0.0.0.0/UpdateFiles/"

-- 外网地址
DefaultServerIP = "0.0.0.0"

-- 内网和外网端口
DefaultServerPort = 10000
 
-- Android整包地址
AndroidAPPUrl = ""  

-- IOS整包地址  
IOSAPPUrl = ""  

-- IOS APP ID
IOSAPPID = ""

IOSRecharge="http://example.invalid/IAP/Pay?"

ProductIdentifiers={ CS.Utility.GetbundleIdentifier()..".100coins", CS.Utility.GetbundleIdentifier()..".500coins", CS.Utility.GetbundleIdentifier()..".1000coins" }

RechargeListDomain="http://0.0.0.0"

CustomServiceDomain="http://example.invalid"

-- 登入客服
ContactService="http://0.0.0.0/client/ContactService"

-- 是否本地环境
function IsLocalCtx()
    return VERSIONTYPE == VERSIONTYPE_LOCAL
end

-- 外网
function IsOnlineTextCtx()
    return VERSIONTYPE == VERSIONTYPE_ONLINETEST
end

-- 是否测试环境
function IsTestCtx()
    return VERSIONTYPE == VERSIONTYPE_TEST
end

-- 是否正式环境
function IsFormalCtx()
    return VERSIONTYPE == VERSIONTYPE_FORMAL
end

-- 是否送審階段 Add By Rayon
Submission = false
function IsSubmissionCtx()
	--return G.Service.UIFlag.IsIOSRecharge()
	return Submission
end

-- 是否顯示充值階段 Add By Rayon
Recharge = true
function IsRechargeCtx()
	return Recharge
end

-- 正式
if VERSIONTYPE == VERSIONTYPE_FORMAL then
	
	-- 开发
    if ServerOption == 0 then
		-- Log開關
		CS.RuntimeDebug.s_instance:SetShow(true)
		-- FPS開關
		CS.RuntimeStats.s_instance:SetShow(true)

		-- serverlist地址     
		ServerListDomain = { "MTkyLjE2OC4xMC4xMDA6MTYw" }
		
		-- serverlist檔案地址
		ServerListFile = "http://0.0.0.0:140"

		-- 大厅服务器IP
		DefaultServerIP = "0.0.0.0"

		-- 大厅服务器端口
		DefaultServerPort = 10000
		
		-- 登入客服
		ContactService="http://0.0.0.0/client/ContactService"
		
	-- QA
	elseif ServerOption == 1 then
		-- Log開關
		CS.RuntimeDebug.s_instance:SetShow(true)
		-- FPS開關
		CS.RuntimeStats.s_instance:SetShow(true)

		-- serverlist地址
		ServerListDomain = { "NjEuMjE4LjQ0LjIzMToxNjA=" }
		
		-- serverlist檔案地址
		ServerListFile = "http://0.0.0.0:140"
		
		-- 登入客服
		ContactService="http://0.0.0.0/client/ContactService"
		
	-- 壓力測試
	elseif ServerOption == 2 then
		-- Log開關
		CS.RuntimeDebug.s_instance:SetShow(true)
		-- FPS開關
		CS.RuntimeStats.s_instance:SetShow(true)

		-- serverlist地址     
		ServerListDomain = { "NjEuMjE4LjQ0LjIzMjoxNjA=" }
		
		-- serverlist檔案地址
		ServerListFile = "http://0.0.0.0:140"
		
		-- 登入客服
		ContactService="http://0.0.0.0/client/ContactService"
		
	-- 美服
    elseif ServerOption == 3 then
		-- Log開關
		CS.RuntimeDebug.s_instance:SetShow(false)
		-- FPS開關
		CS.RuntimeStats.s_instance:SetShow(false)

		-- serverlist地址     
		ServerListDomain = { "http://" }
		
		-- serverlist檔案地址
		ServerListFile = "http://example.invalid/serverlist_otuey.txt"
		
		-- 登入客服
		ContactService="http://example.invalid/client/ContactService"
		
	-- 正式环境
	elseif ServerOption == 4 then
		-- Log開關
		CS.RuntimeDebug.s_instance:SetShow(false)
		-- FPS開關
		CS.RuntimeStats.s_instance:SetShow(false)

		-- serverlist地址
		ServerListDomain = 
		{
			"dGZhcGkuODg4c3Rhci54eXo=",
		}
		
		-- serverlist檔案地址
		ServerListFile = "http://example.invalid"
		
		-- 登入客服
		ContactService="http://example.invalid/client/ContactService"
	
	-- STAGE
    elseif ServerOption == 5 then
		-- Log開關
		CS.RuntimeDebug.s_instance:SetShow(false)
		-- FPS開關
		CS.RuntimeStats.s_instance:SetShow(false)

		-- serverlist地址
		ServerListDomain = { "dGYudGVycHJvLmNvbQ==" }
		
		-- serverlist檔案地址
		ServerListFile = "http://0.0.0.0:140"
		
		-- 登入客服
		ContactService="http://0.0.0.0/client/ContactService"
    end
end

--////////////////////////////////////////////////////////////////////
--超級大贏家-伺服器
--com.cqxx.myGameserver
if CS.AppDefine.UseChangeServerIP then
    -- Log開關
    CS.RuntimeDebug.s_instance:SetShow(true)
    -- FPS開關
    CS.RuntimeStats.s_instance:SetShow(true)

    -- 大厅服务器IP
    DefaultServerIP = CS.AppDefine.DefaultServerIP
CS.UnityEngine.Debug.Log("DefaultServerIP " .. DefaultServerIP)
	
    -- 大厅服务器端口
    DefaultServerPort = CS.AppDefine.DefaultServerPort
CS.UnityEngine.Debug.Log("DefaultServerPort " .. DefaultServerPort)

    -- serverlist檔案地址
    ServerListFile = "http://" .. DefaultServerIP .. ":" .. DefaultServerPort

    -- serverlist地址     
    ServerListDomain = { CS.AppDefine.ServerListDomain  }

    if CS.AppDefine.LoginProcessType == 1 then
        ServerListFile = nil
        VERSIONTYPE = VERSIONTYPE_FORMAL
		local data = tostring(DefaultServerIP) .. ":" .. tostring(DefaultServerPort)
		data = require("Tools/Base64").encodeBase64(data)
		ServerListDomain = { data }		
    elseif CS.AppDefine.LoginProcessType == 2 then
        ServerListFile = nil
        VERSIONTYPE = VERSIONTYPE_TEST
    end
end
