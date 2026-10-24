require("Module")
mmodule(...)

AppEvent = require("Com/AppEvent")

-- 协议号
Proto = require("Com/Proto")
-- 网络模块
NetQ = require("Com/NetworkQueue")
-- 
GameDefine = require("Com/GameDefine")
-- 游戏配置
GameConfig = require("Com/GameConfig")
-- 协议结构
Protobuf = require "protobuf"
-- 工具类
Util = require "xlua.util"

-- 心跳
HeartBeat = require("Com/HeartBeat")

-- 用户信息
User = require("Com/UserInfo")

-- 代理商信息
Agent = require("Com/AgentInfo")

-- 游戏房间信息
Room = require("Com/RoomInfo")

-- 运行环境
Env = require("Com/Env")


-- 服务器信息
Server = require("Com/ServerInfo")

-- 游戏信息
Game = require("Com/GameInfo")

-- Platform信息
Platform = require("Com/PlatformInfo")


-- 工具函数
Tool = {
    TableHelper = require("Tools/TableExtend"),
    UserHelper = require("Tools/UserHelper"),
    StringHelper = require("Tools/StringHelper"),
    Sound = require("Tools/Sound"),
    UILoading = require("Tools/UILoading"),
    ColorHelper = require("Tools/ColorHelper"),
    Math = require("Tools/MathExtend"),
    Base64 = require("Tools/Base64"),
    Aes = require("Tools/Aes"),
    Other = require("Tools/Other"),
    Tool= require("Tools/Tool"),
    Ani= require("Tools/DotweenHelper"),
	Json= require("Tools/Json"),
	SupportVersion = require("Tools/SupportVersion"),
}

-- 游戏流程服务类
Service = {
    Login = require("Service/LoginService"),
    Game = require("Service/GameService"),
    NetworkService = require("Service/NetworkServiceNew"),
    Mail = require("Service/MailService"),
    FAQ = require("Service/FAQService"),
    ReCharge = require("Service/ReChargeService"),
    UIFlag = require("Service/UIFlagService"),
    NotifyFlag = require("Service/NotifgFlagService"),
    Ann = require("Service/AnnService"),
    Msg = require("Service/MsgService"),
}

-- 当前运行的游戏ID
local currentGameID = 0
-- 当前运行的游戏资料
local currentGameData = 0
-- 是否正游戏中(指的是游戏开始至游戏结束阶段)
local isGameing = false

local currentGameIpAddress = ""
local currentGamePort = ""; 

-- 本机IP地址
local localIPAddress = "0.0.0.0";

function SetLocalIP(ipAddress)
	if ipAddress == nil then
		return
	end
	
	if ipAddress == "" then
		return
	end
	
    localIPAddress = ipAddress
end

function GetLocalIP()
    return localIPAddress
end

-- 游戏环境是否已经初始化
local isGameCtxInit = false

-- 大厅信息
local hallData = {

};

function GetTraceback()
	return debug.traceback("", 2)
end

-- 清空当前登录玩家信息
function ClearLoginData()
    User.Clear()
    Tool.Sound.CloseSound()
    Tool.Sound.CloseBGMSound()
end

-- 获取当前游戏项目名称(用于加载资源)
function GetGamePName(gameID)
    if gameID then
        return Game.GameIDs["" .. gameID];
    else
        -- print("currentGameName", Game.GameIDs["" .. currentGameID])
        return Game.GameIDs["" .. currentGameID];
    end
end

-- 是否显示游戏
function IsShowGame(gameId)
 	local userGameList = User.GetUserGameList()
    for k, v in pairs(userGameList) do
		if v == gameId then
			return true
		end
	end
	
	return false
end


function CurrentGameIPAndPort()
    return currentGameIpAddress, currentGamePort
end

local gameInitFinish = false
function SetGameInitFinish()
    gameInitFinish = true
end

-- 游戏是否初始化完成
function IsGameInitFinish()
    return gameInitFinish
end


-- 游戏是否启动
function IsGameStart()
    return currentGameID > 0
end

local isPreloadedGameRes;
function IsPreLoadedGameRes()
    return isPreloadedGameRes == 1
end

function PreLoadGameResComplated()
    isPreloadedGameRes = 1
end

-- 清除预加载资源状态
function ClearPreLoadGameResState()
    isPreloadedGameRes = 0
end

-- 获取/设置是否在游戏进行中
function IsGameing(value)
    if (value ~= nil) then
        isGameing = value
    else
        return isGameing
    end
end

-- 设置当前运行游戏
function SetRunGame(gameid)
    currentGameID = gameid
end
-- 获当前运行游戏ID
function GetRunGameID()
    return currentGameID
end

-- 设置当前运行游戏资料
function SetRunGameData(gamedata)
    --Tool.TableHelper.Print(gamedata)
    currentGameData = gamedata
	currentGameData.MinCarryingScore = 50
end
-- 获当前运行游戏资料
function GetRunGameData()
    return currentGameData
end
-- 获当前运行游戏下注最小携带金额
function GetRunGameMinCarryingScore()
	local MinCarryingScore = 50
	if currentGameData ~= nil and currentGameData.MinCarryingScore ~= nil then
		MinCarryingScore = currentGameData.MinCarryingScore
	end
	return MinCarryingScore
end

-- 设置当前运行游戏的IP地址和端口号，并上报IP地址给服务器
function SetRunGameIPAndPort(ipAddress, port)
    currentGameIpAddress = ipAddress
    currentGamePort = port
end


-- 清除当前运行的游戏
function ClearRunGame()
    currentGameID = 0
end

-- 模拟三目运算
function CaseWhen(condition, trueVal, falseVal)
    if (condition == true) then
        return trueVal;
    else
        return falseVal;
    end

end


-- 加载游戏lua模块的方法
function RequireG(modelname)
    local m;
    if (IsGameStart()) then
        local path = "/" .. GetGamePName() .. "/" .. modelname;
        m = require(path);
    else
        m = require(modelname);
    end
    return m;
end

-- 加载协议数据
local function loadProtoMsgData()
    Protobuf.register(CS.AssetBundleManager.Instance:LoadByte(CS.AppDefine.HallNumber, 'HallMsg.pb'))
    Protobuf.register(CS.AssetBundleManager.Instance:LoadByte(CS.AppDefine.HallNumber, 'GameRoomMsg.pb'))
    Protobuf.register(CS.AssetBundleManager.Instance:LoadByte(CS.AppDefine.HallNumber, 'GameMsg_Slot.pb'))
    Protobuf.register(CS.AssetBundleManager.Instance:LoadByte(CS.AppDefine.HallNumber, 'GameMsg.pb'))
    Protobuf.register(CS.AssetBundleManager.Instance:LoadByte(CS.AppDefine.HallNumber, 'CommonMsg.pb'))
    Protobuf.register(CS.AssetBundleManager.Instance:LoadByte(CS.AppDefine.HallNumber, 'NotifyServerMsg.pb'))
end

-- 初始化系统
function Init()
    if isGameCtxInit == true then
        return false
    end

	CS.TimeManager.Instance:InvokeRepeating(UpdateRechargeList, 0, 20)

    -- 初始化协议号
    Proto.Init()

    -- 网络消息队列初始化
    NetQ.Init()

    AppEvent.Init();

    -- 初始化随机数种子,全局的,只需要设置一次
    math.randomseed(tostring(os.time()):reverse():sub(0, 6));

    -- 加载协议数据
    loadProtoMsgData()

    isGameCtxInit = true
	
	CS.UnityEngine.PlayerPrefs.Save()
		
    return true
end

function UpdateRechargeList()
	if User.GetCurrentUser() ~= nil then
		Service.ReCharge.GetRechargeList()
	end
end

-- 清理系统
function Clear()
    -- 网络消息队列释放
    NetQ.Clear()
end