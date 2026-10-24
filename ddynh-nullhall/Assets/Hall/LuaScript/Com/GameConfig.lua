require("Module")
mmodule(...)

local G = require "Global"

-- 环境定义字符串
local VERSIONTYPE_TEST = "test"
local VERSIONTYPE_FORMAL = "formal"

-- 当前运行环境
local VERSIONTYPE = VERSIONTYPE_FORMAL

-- 非编辑器环境
if CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.Android or CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.IPhonePlayer then
    VERSIONTYPE = VERSIONTYPE_FORMAL
end

RequestIpCount=0;
SoundStatus=true;
MusicStatus=true;

-- 充值地址     
ChargeDomain = ""

-- serverlist地址     
ServerListDomain = nil

-- User IP
UserIP = nil

-- serverlist檔案地址     
ServerListFile = ""

-- 游戏渠道编号
GameSiteID = G.GameDefine.GameSiteID

-- 游戏平台编号         
GamePlatformID = G.GameDefine.GamePlatformID      

-- 资源更新地址
UpdateDomain = ""

-- UIRoute換線用資料(先在 NetworkServiceNew.lua 写入值)
UpdateFilesPath = ""

--是否從UISetting 進入UIRoute
IsUISetting = false

-- 外网地址
DefaultServerIP = ""

-- 内网和外网端口
DefaultServerPort = 10000

RechargeListDomain=""

CustomServiceDomain="http://example.invalid/LR/Chatpre.aspx?id=MVP36604643&lng=cn"

-- 是否使用新的Transfer機制，資料加密，回傳token
local useNewTransfer = true
function isUseNewTransfer()
	return useNewTransfer;
end


local ServerOption = G.GameDefine.ServerOption
function GetServerOption()
	return ServerOption
end

function ReSetServerOption(so,pi,si)
	ServerOption=so;
	GameSiteID=si
    GamePlatformID=pi    
end

-- 是否测试环境
function IsTestCtx()
    return VERSIONTYPE == VERSIONTYPE_TEST
end

-- 是否正式环境
function IsFormalCtx()
    return VERSIONTYPE == VERSIONTYPE_FORMAL
end

-- 正式
if VERSIONTYPE == VERSIONTYPE_FORMAL then
    if ServerOption == 0 then--開發
		-- Log開關
		CS.RuntimeDebug.s_instance:SetShow(true)
		-- FPS開關
		CS.RuntimeStats.s_instance:SetShow(true)
		-- serverlist地址
		ServerListDomain = { "NjEuMjE4LjQ0LjIzMDoxNjA=" }
		
	elseif ServerOption == 1 then--QA
		-- Log開關
		CS.RuntimeDebug.s_instance:SetShow(true)
		-- FPS開關
		CS.RuntimeStats.s_instance:SetShow(true)
		-- serverlist地址
		ServerListDomain = { "NjEuMjE4LjQ0LjIzMToxNjA=" }

	elseif ServerOption == 2 then--壓力測試
		-- Log開關
		CS.RuntimeDebug.s_instance:SetShow(true)
		-- FPS開關
		CS.RuntimeStats.s_instance:SetShow(true)

    elseif ServerOption == 3 then--送審
		-- Log開關
		CS.RuntimeDebug.s_instance:SetShow(false)
		-- FPS開關
		CS.RuntimeStats.s_instance:SetShow(false)

	elseif ServerOption == 4 then--國服
		-- Log開關
		CS.RuntimeDebug.s_instance:SetShow(false)
		-- FPS開關
		CS.RuntimeStats.s_instance:SetShow(false)

		-- serverlist地址
		local BoundleID = CS.Utility.GetbundleIdentifier()
		-- 追风男鞋
		if (BoundleID == "example.invalid") then
			ServerListDomain = {
				"emh1aWZlbmdOYW16aHVhbmcuY2R5YWxlLmNvbQ==",
				"dGZhcGkuZWFudmlldy5jb20=",
			}	
		-- 悠悠零食
		elseif (BoundleID == "example.invalid") then
			ServerListDomain = {
				"aHVhc2hlbmdUb25neHVuLjc3NjAxMDguY29t",
				"dGZhcGkuZWFudmlldy5jb20=",
			}	
		-- 梦之恋
		elseif (BoundleID == "com.Meng.MengZhiLian") then
			ServerListDomain = {
				"TWVuZ1poaUxpYW4uY2hpeXVlZ2FuZ3RpZS5jb20=",
				"dGZhcGkuZWFudmlldy5jb20=",
			}
		-- 易快寻
		elseif (BoundleID == "com.tr.happyMenuOne") then
			ServerListDomain = {
				"aGFwcHlNZW51T25lLmVhbnZpZXcuY29t",
				"dGZhcGkuZWFudmlldy5jb20=",
			}	
		else
			-- serverlist地址
			ServerListDomain = {
				"dGZhcGkuZWFudmlldy5jb20=",
				"aHVhc2hlbmdUb25neHVuLjc3NjAxMDguY29t",
				"dGZhcGkuY2hpeXVlZ2FuZ3RpZS5jb20=",
				"ODg3ODUwNzcuY29t",
				"dGZhcGkuY2R5YWxlLmNvbQ==",
				"bmV3dGZhcGkuYWVncGtzLnh5eg==",
				"bmV3dGZhcGkuMTA5NThjbG92ZXJjaXIuY29t",
				"bmV3dGZhcGkuMDA0d2kwczIwMjIudG9w",
				"bmV3dGZhcGkuMDA1MWxtMjAyMi50b3A=",
				"bmV3dGZhcGkuMDAwd2IyMDIyLnRvcA==",
				"bmV3dGZhcGkuMTA5M3RpaHV3YW4uY29t",
			}		
		end

    elseif ServerOption == 5 then--UAT
		-- Log開關
		CS.RuntimeDebug.s_instance:SetShow(false)
		-- FPS開關
		CS.RuntimeStats.s_instance:SetShow(false)

		-- serverlist地址
		ServerListDomain = { "bmV3dGZhcGkuYWV1YXQuc2l0ZQ==" }
    end
end

if CS.AppDefine.UseChangeServerIP then
    -- Log開關
    CS.RuntimeDebug.s_instance:SetShow(true)
    -- FPS開關
    CS.RuntimeStats.s_instance:SetShow(true)

    -- 大厅服务器IP
    DefaultServerIP = CS.AppDefine.DefaultServerIP

    -- 大厅服务器端口
    DefaultServerPort = CS.AppDefine.DefaultServerPort

    -- serverlist地址     
    ServerListDomain = { CS.AppDefine.ServerListDomain  }

    if CS.AppDefine.LoginProcessType == 1 then
        VERSIONTYPE = VERSIONTYPE_FORMAL
		local data = tostring(DefaultServerIP) .. ":" .. tostring(DefaultServerPort)
		data = require("Tools/Base64").encodeBase64(data)
		ServerListDomain = { data }
    elseif CS.AppDefine.LoginProcessType == 2 then
        VERSIONTYPE = VERSIONTYPE_TEST
    end
end