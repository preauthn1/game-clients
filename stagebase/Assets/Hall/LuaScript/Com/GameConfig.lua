require("Module")
mmodule(...)

local gameDefine = require("Com/GameDefine")

-- region 游戏ID配置
GameIDs = { };
-- GameIDs["1"] = "ddz" -- 斗地主
-- GameIDs["2"] = "qznn" -- 抢庄牛牛
-- GameIDs["3"] = "zjh" -- 诈金花
-- GameIDs["4"] = "dzpk" -- 德州扑克
-- GameIDs["5"] = "wzp" -- 梭哈
-- GameIDs["6"] = "qzesyd" -- 21点
-- GameIDs["7"] = "tbnn"   -- 经典牛牛
-- GameIDs["8"] = "sangong"-- 三公
-- GameIDs["9"] = "sgj"-- 水果机
-- GameIDs["10"] = "sss"-- 十三水
-- GameIDs["11"] = "lhd"-- 龙虎斗
-- GameIDs["12"] = "ttz"-- 推筒子
-- GameIDs["13"] = "bjl"-- 百家乐
-- GameIDs["14"] = "by"-- 捕鱼
-- GameIDs["15"] = "scmj"-- 四川麻将
-- GameIDs["16"] = "srnn"-- 双人牛牛
-- GameIDs["17"] = "xyx"-- 小遊戲
GameIDs["37"] = "dfdc" -- 招财进宝
GameIDs["38"] = "wlzb" -- 五龙争霸
-- endregion

-- region 配置需要显示桌子号的游戏ID
local showTableNoGame = { }
showTableNoGame["9"] = true
showTableNoGame["11"] = true
-- endregion

-- 游戏自动准备倒计时
local autoReadyCountNum = 3
function GetAutoReadyCountNum()
    return autoReadyCountNum
end
-- 判断游戏是否需要显示桌子号
function GetIsShowTableNo(_gameid)
    return showTableNoGame[tostring(_gameid)] == true
end

-- 环境定义字符串
local VERSIONTYPE_LOCAL = "local"
local VERSIONTYPE_ONLINETEST = "online"
local VERSIONTYPE_TEST = "test"
local VERSIONTYPE_FORMAL = "formal"

-- 当前运行环境
local VERSIONTYPE = VERSIONTYPE_TEST

-- 非编辑器环境
if CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.Android or CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.IPhonePlayer then
    --VERSIONTYPE = VERSIONTYPE_FORMAL
end

-- 游戏官网
WebSiteDomain = "http://example.invalid"
   
-- 充值地址     
ChargeDomain = "http://example.invalid"

-- serverlist地址     
ServerListDomain = { "http://0.0.0.0:170", "0.0.0.0", "0.0.0.0" }  

-- 游戏渠道编号
GameSiteID = gameDefine.GameSiteID

-- 游戏平台编号         
GamePlatformID = gameDefine.GamePlatformID      
 
-- 获取本机Ip地址
IPReuestUrl = "http://0.0.0.0:9132/client/getip"

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

-- 本地
if VERSIONTYPE == VERSIONTYPE_LOCAL then

    -- 资源更新地址
    UpdateDomain = "http://0.0.0.0:140/UpdateFiles/"

    -- 大厅服务器IP
    DefaultServerIP = "0.0.0.0"

    -- 大厅服务器端口
    DefaultServerPort = 10000

    -- Android整包地址
    AndroidAPPUrl = ""

    -- 充值地址
    ChargeDomain = "http://0.0.0.0:9132/PayCenter/Index?userid=%d&paytype=%d&amount=%d&orderid=%d&platformid=%d&areaid=%d"

    -- 获取本机Ip地址
    IPReuestUrl = "http://0.0.0.0:9132/client/getip"
end

-- 外网
if VERSIONTYPE == VERSIONTYPE_ONLINETEST then
    -- 外网资源地址
    UpdateDomain = "http://0.0.0.0:140/UpdateFiles/"

    -- 大厅服务器IP
    DefaultServerIP = "0.0.0.0"

    -- 大厅服务器端口
    DefaultServerPort = 10000

    -- Android整包地址
    AndroidAPPUrl = "http://0.0.0.0:140/fullgame.apk"

    -- 充值地址
    ChargeDomain = "http://0.0.0.0:9132/PayCenter/Index?userid=%d&paytype=%d&amount=%d&orderid=%d&platformid=%d&areaid=%d"

    -- 获取本机Ip地址
    IPReuestUrl = "http://0.0.0.0/client/getip"
end

-- 测试
if VERSIONTYPE == VERSIONTYPE_TEST then

    -- 资源更新地址
    UpdateDomain = "http://0.0.0.0:2148/UpdateFiles/"

    -- 大厅服务器IP
    DefaultServerIP = "0.0.0.0"

    -- 大厅服务器端口
    DefaultServerPort = 10005

    -- Android整包地址
    AndroidAPPUrl = ""

    -- 充值地址
    ChargeDomain = "http://0.0.0.0:9132/PayCenter/Index?userid=%d&paytype=%d&amount=%d&orderid=%d&platformid=%d&areaid=%d"

    -- 获取本机Ip地址
    IPReuestUrl = "http://0.0.0.0:9132/client/getip"
end

-- 正式
if VERSIONTYPE == VERSIONTYPE_FORMAL then
    -- 外网资源地址
    UpdateDomain = "http://0.0.0.0:140/UpdateFiles/"

    -- 大厅服务器IP
    DefaultServerIP = "0.0.0.0"

    -- 大厅服务器端口
    DefaultServerPort = 10005

    -- Android整包地址
    AndroidAPPUrl = "http://0.0.0.0:140/fullgame.apk"

    -- 充值地址
    ChargeDomain = "http://0.0.0.0:80/PayCenter/Index?userid=%d&paytype=%d&amount=%d&orderid=%d&platformid=%d&areaid=%d"

    -- 获取本机Ip地址
    IPReuestUrl = "http://0.0.0.0/client/getip"
end

