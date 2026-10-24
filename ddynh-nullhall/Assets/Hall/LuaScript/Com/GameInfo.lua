require("Module")
mmodule(...)

local G = require("Global")

-- region 游戏ID配置
GameIDs = {};
GameIDs["1"] = "ddz" -- 斗地主
GameIDs["2"] = "qznn" -- 抢庄牛牛
GameIDs["3"] = "zjh" -- 诈金花
GameIDs["4"] = "dzpk" -- 德州扑克
GameIDs["5"] = "wzp" -- 梭哈
GameIDs["6"] = "qzesyd" -- 21点
GameIDs["7"] = "tbnn" -- 经典牛牛
GameIDs["8"] = "sangong" -- 三公
GameIDs["9"] = "sgj" -- 水果机
GameIDs["10"] = "sss" -- 十三水
GameIDs["11"] = "lhd" -- 龙虎斗
GameIDs["12"] = "ttz" -- 推筒子
GameIDs["13"] = "bjl" -- 百家乐
GameIDs["14"] = "by" -- 捕鱼
GameIDs["15"] = "scmj" -- 四川麻将
GameIDs["16"] = "srnn" -- 双人牛牛
GameIDs["17"] = "ermj" -- 兩人麻将
GameIDs["18"] = "fkeb" -- 疯狂二八
GameIDs["19"] = "brnn" -- 百人牛牛
GameIDs["20"] = "hhdz" -- 紅黑大戰
GameIDs["21"] = "hhnn" -- 紅黑牛牛
GameIDs["22"] = "codyqzesyd" -- 21
GameIDs["23"] = "sgbjl" -- 性感百家樂
GameIDs["24"] = "bynew" -- 新捕鱼
GameIDs["25"] = "dfdc" -- 多福多财
GameIDs["26"] = "tgw" -- 糖果屋
GameIDs["27"] = "ald" -- 阿拉丁
GameIDs["28"] = "jlbpk" -- 加勒比扑克(預留)
GameIDs["29"] = "zcjb" -- 招财进宝
GameIDs["1000"] = "slot" -- 老虎机
GameIDs["1001"] = "wlzb" -- 五龙争霸
GameIDs["1002"] = "xgpd" -- 星光派对
GameIDs["1003"] = "xmbx" -- 熊猫报喜
GameIDs["1004"] = "jjbx" -- 金吉报喜
GameIDs["1005"] = "dhzw" -- 东海之王
GameIDs["2001"] = "jlbpk" -- 加勒比扑克
GameIDs["2003"] = "dczz" -- 赌场战争
GameIDs["2004"] = "hdc" -- 海盗船
GameIDs["2006"] = "hbsl" -- 红包扫雷
GameIDs["40"] = "jdesyd" -- 经典21点
-- endregion


-- 遊戲名稱
GameNames = {};
GameNames["1"] = { [0] = "斗地主", [1] = "迪祥斗地主", [2] = "天津随心玩", [3] = "小拾拼十", [4] = "10086游戏中心斗地主" }
GameNames["2"] = { [0] = "抢庄牛牛", [1] = "欢乐抢庄", [2] = "四人抢庄", [3] = "快来抢庄", [4] = "PK游戏", [5] = "抢牛大战", [6] = "拼五张", [7] = "201牛牛", [8] = "最爱斗牛" }
GameNames["3"] = { [0] = "炸金花", [1] = "火拼三牌", [2] = "飘三叶", [3] = "赢三张", [4] = "三张牌", [5] = "摸三张", [6] = "勾紧花", [7] = "闷金花", [8] = "土豪赢三张" }
GameNames["4"] = { [0] = "德州扑克", [1] = "快乐5张"}
GameNames["5"] = { [0] = "梭哈", [1] = "五张牌" }
GameNames["6"] = { [0] = "21点", [1] = "拼十" }
GameNames["7"] = { [0] = "经典牛牛", [1] = "经典斗牌", [2] = "通比牛牛", [3] = "通比拼十" }
GameNames["8"] = { [0] = "三公" }
GameNames["9"] = { [0] = "股市大亨", [1] = "大平台", [2] = "BTA大战", [3] = "股市老虎机", [4] = "", [5] = "游戏机" }
GameNames["10"] = { [0] = "十三水" }
GameNames["11"] = { [0] = "龙虎斗", [1] = "龙争虎斗", [2] = "龙虎争霸", [3] = "龙与虎", [4] = "争强好胜", [5] = "龙虎大战" }
GameNames["12"] = { [0] = "推筒子" }
GameNames["13"] = { [0] = "百家乐", [1] = "百家欢乐牌", [2] = "千人欢乐牌", [3] = "欢乐牌", [4] = "庄闲大战", [5] = "百人大战", [6] = "快乐30秒" }
GameNames["14"] = { [0] = "全民捕鱼3D" }
GameNames["15"] = { [0] = "四川麻将", [1] = "奥云黑龙江麻将", [2] = "湘约麻将", [3] = "翱翔红中麻将" }
GameNames["16"] = { [0] = "双人牛牛", [1] = "双人拼十" }
GameNames["17"] = { [0] = "双人麻将" }
GameNames["18"] = { [0] = "二八杠" }
GameNames["19"] = { [0] = "百人牛牛", [1] = "百战牛魔王", [2] = "百人大战" }
GameNames["20"] = { [0] = "红黑大战" }
GameNames["21"] = { [0] = "红黑牛牛", [1] = "红黑牛魔王", [2] = "红黑斗" }
GameNames["22"] = { [0] = "21点" }
GameNames["23"] = { [0] = "性感百家樂" }
GameNames["24"] = { [0] = "捕鱼大玩咖" }
GameNames["25"] = { [0] = "多福多财", [1] = "皇家老虎机" }
GameNames["26"] = { [0] = "糖果屋" }
GameNames["27"] = { [0] = "阿拉丁" }
GameNames["28"] = { [0] = "加勒比扑克(預留)" }
GameNames["29"] = { [0] = "招财进宝" }
GameNames["1000"] = { [0] = "老虎机" }
GameNames["1001"] = { [0] = "五龙争霸" }
GameNames["1002"] = { [0] = "星光派对" }
GameNames["1003"] = { [0] = "熊猫报喜" }
GameNames["1004"] = { [0] = "金吉报喜" }
GameNames["1005"] = { [0] = "东海之王" }
GameNames["2001"] = { [0] = "加勒比扑克" }
GameNames["2003"] = { [0] = "赌场战争" }
GameNames["2004"] = { [0] = "海盗船" }
GameNames["2006"] = { [0] = "红包扫雷" }
GameNames["40"] = { [0] = "经典21点" }

-- 要過濾的遊戲名稱
local FilterGameNames = {};
FilterGameNames["1"] = "斗地主" -- 3
FilterGameNames["2"] = "抢庄牛牛" -- 6
FilterGameNames["3"] = "炸金花" -- 2
FilterGameNames["4"] = "德州扑克" -- 10
FilterGameNames["5"] = "梭哈" -- 15
FilterGameNames["6"] = "21点"
FilterGameNames["7"] = "经典牛牛" -- 7
FilterGameNames["8"] = "三公" -- 9
FilterGameNames["9"] = "股市大亨" -- 22
FilterGameNames["10"] = "十三水" -- 13
FilterGameNames["11"] = "龙虎斗" -- 4
FilterGameNames["12"] = "推筒子" -- 12
FilterGameNames["13"] = "百家乐" -- 5
FilterGameNames["14"] = "捕鱼" -- 14
FilterGameNames["15"] = "四川麻将" -- 11
FilterGameNames["16"] = "双人牛牛" -- 16
FilterGameNames["17"] = "兩人麻将" -- 17
FilterGameNames["18"] = "二八杠" -- 23
FilterGameNames["19"] = "百人牛牛" -- 18
FilterGameNames["20"] = "红黑大战" -- 24
FilterGameNames["21"] = "红黑牛牛" -- 25
FilterGameNames["22"] = "21点" -- 8
FilterGameNames["23"] = "性感百家乐"
FilterGameNames["24"] = "捕鱼大玩咖" -- 26
FilterGameNames["25"] = "多福多财" -- 27
FilterGameNames["26"] = "糖果屋" -- 29
FilterGameNames["27"] = "阿拉丁" -- 30
FilterGameNames["28"] = "加勒比扑克" -- 34
FilterGameNames["29"] = "招财进宝" -- 28
FilterGameNames["1000"] = "老虎机" -- 
FilterGameNames["1001"] = "五龙争霸" -- 31
FilterGameNames["1002"] = "星光派对" -- 32
FilterGameNames["1003"] = "熊猫报喜" -- 37
FilterGameNames["1004"] = "金吉报喜" -- 33
FilterGameNames["1005"] = "东海之王" -- 38
FilterGameNames["2001"] = "加勒比扑克" -- 34
FilterGameNames["2003"] = "赌场战争" -- 36
FilterGameNames["2004"] = "海盗船" -- 
FilterGameNames["2006"] = "红包扫雷" -- 
FilterGameNames["40"] = "经典21点" -- 35

function GetGameIDCount()
    local count = 0
    for k, v in pairs(GameIDs) do
        count = count + 1
    end
    return count
end

-- region 配置需要显示桌子号的游戏ID
local showTableNoGame = {}
showTableNoGame["9"] = true
showTableNoGame["11"] = true

-- 判断游戏是否需要显示桌子号
function GetIsShowTableNo(_gameid)
    return showTableNoGame[tostring(_gameid)] == true
end

-- 是否為百人場
function IsMultiGame(GameId)
    if GameId == 13 then
        return true
    elseif GameId == 23 then
        return true    
    elseif GameId == 11 then
        return true
    elseif GameId == 19 then
        return true
    elseif GameId == 20 then
        return true
    elseif GameId == 21 then
        return true
    elseif GameId == 9 then
        return true
    else
        return false
    end
end

-- 获取游戏IconName
function GetGameIconName(gameId)
    local userGameList = G.User.GetUserGameList2()
    for k, v in pairs(userGameList) do
        if tostring(v.GameID) == tostring(gameId) then
            return tonumber(v.IconName)
        end
    end
    print("GetGameIconName not find " .. gameId)
    return 0
end

-- 获取游戏项目名称
function GetGameName(GameId)
    local iconName = GetGameIconName(GameId)
    local gameName = GetGameNameByIconName(tostring(GameId), iconName)
    return gameName
end


-- 从gameID和iconName获取游戏项目名称
function GetGameNameByIconName(GameId, IconName)
    if GameId == nil or GameId == "nil" then
        print("gameID is nil")
        return ""
    elseif GameNames[tostring(GameId)] == nil then
        print("GameNames not find, gameID:" .. tostring(GameId))
        return ""
    else
        return GameNames[tostring(GameId)][IconName]
    end
end

-- 取得要過濾的名稱
function GetFilterGameNamess()
    return FilterGameNames
end

-- 替換訊息中遊戲名稱
function ReplaceGameName(message)
    for k, v in pairs(FilterGameNames) do
        -- 找關鍵字
        q = string.match(message, v)
        if q ~= nil then
            local iconName = GetGameIconName(k)
            if iconName > 0 then
                local name = GetGameNameByIconName(k, iconName)
                local newMessage = string.gsub(message, v, name)
                return newMessage
            end
        end
    end

    return message
end

-- 是否顯示所有遊戲
function IsShowAllGame()
    local user = G.User.GetCurrentUser()
    local userdata = user.UserData

    local isShowAll = false
    -- 累计充值
    if userdata.SumCharge >= userdata.ShowAllGameLimit then
        isShowAll = true
    end    

    return isShowAll
end

function GetPlayGameId()
    local PlayGameId = CS.UnityEngine.PlayerPrefs.GetString("PlayGameId")
	if PlayGameId == "" or PlayGameId == nil then
		return ""
	else
		return PlayGameId
	end
end


function SavePlayGameId(GameId)
	local strGameId = tostring(GameId)
	
    local PlayGameId = CS.UnityEngine.PlayerPrefs.GetString("PlayGameId")
	if PlayGameId == "" or PlayGameId == nil then
		CS.UnityEngine.PlayerPrefs.SetString("PlayGameId", strGameId)
	else
		local accCount = 1
		local newData = GameId
		local arr1 = G.Tool.StringHelper.Split(PlayGameId, "|")
		for _, id in pairs(arr1) do	
			if (strGameId ~= id) then
				newData = newData .. "|" .. id
				accCount = accCount + 1
			end
			
			if (accCount > 7) then
				break
			end
		end
		CS.UnityEngine.PlayerPrefs.SetString("PlayGameId", newData)		
	end
end

function GetPlayGameId()
    local PlayGameId = CS.UnityEngine.PlayerPrefs.GetString("PlayGameId")
	if PlayGameId == "" or PlayGameId == nil then
		return ""
	else
		return PlayGameId
	end
end