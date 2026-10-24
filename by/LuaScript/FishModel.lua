require("Module")
mmodule(...)
local G = require "Global"
local fishManager = G.RequireG("Fish/FishManager");
local uiFishMain = G.RequireG("UIFishMain")
local ByConfig = G.RequireG("ByConfig")

local Vector3 = CS.UnityEngine.Vector3
local Rect = CS.UnityEngine.Rect
local GameObject = CS.UnityEngine.GameObject
local Quaternion = CS.UnityEngine.Quaternion

local groupName = G.GetGamePName();

-- 配置数据 
Defines = { }
Defines.WorldDimensionUnit = Rect(-5.68, -3.20, 11.36, 6.40)-- 单位屏幕区域(Unity世界单位)
Defines.WorldDimensionMin_x = -5.68     -- 世界范围x轴最小值
Defines.WorldDimensionMax_x = 5.68      -- 世界范围x轴最大值
Defines.WorldDimensionMin_y = -3.2    -- 世界范围y轴最小值
Defines.WorldDimensionMax_y = 3.2     -- 世界范围y轴最大值

Defines.FishBornMin_y = -2.5
Defines.FishBornMax_y = 2.5

Defines.MaxNumPlayer = 4-- 最大玩家数目
Defines.RecoverMoreRate = 0 --断线重连大于(不等于)倍率可出现的鱼

Defines.RotationPlayer = true
Defines.GameType = 0 -- 遊戲類型 0.正常 1.比賽


-- 场景数据
-- 2D摄像机camera与UI摄像机uiCamera
SceneData = { }

-- 玩家数据: User用户信息数据
UserDataList = { }

local receiveName = G.GetGamePName()
-- 公用方法
Call = { }

-- 子弹List 子弹的ID=BoomID 发射者的座位号=seatno 子弹物体=Obj
BulletList = { }
HideBulletList = { }-- 隐藏的子弹

SendTriggerFishList = { }-- 碰撞待发送列表
FishDeadList = {}

IsPoChanOnce = true	-- 是否只破產一次，破產後就算有錢是否能繼續玩

-- 断线重连中
IsRecoverRet = false
IsGameReady = false
-- 是否冰冻状态
IsIce = false    
local IsInIce = false 

-- 被锁定的鱼ID
LockFishID = -1
-- 鎖定的魚Type ID
LockFishTypeID = -1
isForceShow = false
--黑洞目前使用者
BlackHoldUserID = nil
--遊戲類型是否可以射擊
canShootState = false
--遊戲類型
isGameType = 0

AccReward = 0

local TableToStr
-- region 打印
TableToStr = function(tab, sd)

    if type(tab) ~= "table" then
        tab = { ["NMG"] = tab }
    end
    local sd = sd or 1
    -- 深度
    local ss = "\n" .. string.rep("	", sd - 1) .. "{"
    if not tab then
        ss = ss .. "\n" .. string.rep("	", sd) .. "nil"
    else
        -- 表结构显示在后面
        local ssT = ""
        local ssV = ""
        for k, v in pairs(tab) do
            if type(v) == "table" then
                if type(k) == "string" then
                    ssT = ssT .. "\n" .. string.rep("	", sd) .. "[\"" .. tostring(k) .. "\"]" .. " = " .. TableToStr(v, sd + 1)
                else
                    ssT = ssT .. "\n" .. string.rep("	", sd) .. "[" .. tostring(k) .. "]" .. " = " .. TableToStr(v, sd + 1)
                end
            else
                if type(k) == "string" then
                    ssV = ssV .. "\n" .. string.rep("	", sd) .. "[\"" .. tostring(k) .. "\"]" .. " = " .. tostring(v)
                else
                    ssV = ssV .. "\n" .. string.rep("	", sd) .. "[" .. tostring(k) .. "]" .. " = " .. tostring(v)
                end
            end
        end
        ss = ss .. ssV .. ssT
    end
    ss = ss .. "\n" .. string.rep("	", sd - 1) .. "}"
    return ss
end
local ShowTab = function(tips, tab)
    print(tips .. TableToStr(tab))
end

FrameUpdate = nil
local CopyTable
local IsPlayerSeat
local GetPlayerData
local GetPlayerSeat
local GetSeatnoToUser
local GetUserCount
local GetSeatnoToPos
local GetPosToSeatno
local IsRotationPlayer
local CloseBullet
local HideBullet
local AddBullet
local RemoveBullet
local IsPlayerBullet
local GetBulletNumber
local PrintBulletData
local GetIDToBullet
local UpdateBulledID
local GetLocalBulledMoney
local GetIDToUser
local Get2DToUIPoint
local SetLockFishID
local RemoveLockFishID
local RemoveLockFishTypeID
local GetGunPrefabName
local GetGunBgPrefabName
local GetBulletPrefabName
local GetNetPrefabName
local Close
local InitModel
local CalcLine2ToPos
local AddBullet
local SetCamera
local GetSequence
local KillSequence
local CloseSequence
local BaseScore = 1

local AddUserMoney
local DesUserMoney

local AcceptShoot
local AcceptTriggerFish
local AcceptGetFish

local SendFrameC2SID
local SendTriggerFish
local SendShoot
local SendGunBei
local SendLock
local SendIceSkill
local SendAllFish

local UserSeatNo = 0
local SetUserSeatNo
local GetUserSeatNo
SetUserSeatNo = function(seatno)
    print("<color=red>UserSeatNo = " .. UserSeatNo .. "  seatno = " .. seatno .. "</color>")
    UserSeatNo = seatno
end
GetUserSeatNo = function()
    return UserSeatNo
end

local GetBlackHoldUserID = function()
	return BlackHoldUserID
end

local NumBulletLimit = 100-- 子弹限制
local SetNumBulletLimit = function(Num)
	NumBulletLimit = Num
end
local GetNumBulletLimit = function()
	return NumBulletLimit
end

local AddAccReward = function(Reward)
	AccReward = AccReward + Reward
end
Call.AddAccReward = AddAccReward

local RemoveAccReward = function()
	AccReward = 0
end
Call.RemoveAccReward = RemoveAccReward

local GetAccReward = function()
	return AccReward
end

local GetCoinPos = function()
	return uiFishMain.GetCoinPos()
end

Defines.FishBullet = {}	-- 魚身上炮彈資料
Defines.BulletData = {}	-- 炮彈資料
Defines.MinBulletData = nil
local ClearBulletData = function(data)
	Defines.BulletData = {}
	Defines.MinBulletData = nil
end
local SetBulletData = function(data)
	local data1 = {}
	data1.BoomNumber 	= data.BoomNumber				-- 炮彈編號(BoomType=3是鱼的id)
	data1.BoomName 		= data.BoomName					-- 炮彈名稱
	data1.BoomUIType 	= data.BoomUIType				-- 炮弹UI类型
	data1.ShootInterval	= data.ShootInterval * 0.001	-- 射击间隔
	data1.BoomSpeed 	= data.BoomSpeed				-- 子弹速度
	data1.BoomType 		= data.BoomType					-- 砲彈類型 1.基本 2.VIP 3.鱼
	data1.BoomRate 		= data.BoomRate					-- 倍率
	data1.BoomIdx 		= #Defines.BulletData + 1		-- 索引
	data1.Rebound		= data.Rebound					-- 炮弹可反弹的次数 -1无次数限制 >=0次数限制

	-- 炮弹發射倒數時間 -1不自動發射 >=0倒數時間
	local BoomData = ByConfig.GetBoomTable(data.BoomNumber)
	if BoomData ~= nil then
		data1.DirectShootTime = BoomData.standby
	else
		data1.DirectShootTime = -1
	end
	
	if Defines.MinBulletData == nil then
		Defines.MinBulletData = data1
	else
		if data1.BoomRate < Defines.MinBulletData.BoomRate then
			Defines.MinBulletData = data1		
		end
	end
	
	-- 鱼身上的子弹所用
	if data1.BoomType == 3 then
		table.insert(Defines.FishBullet, data1)
	else
		table.insert(Defines.BulletData, data1)
	end
end
local GetMinBulletData = function()
	return Defines.MinBulletData
end
local HasBulletData = function()
	if Defines.BulletData == nil then
		return false
	end
	
	if #Defines.BulletData == 0 then
		return false
	end
	
	return true
end
local GetBulletDataByIdx = function(idx)
	return Defines.BulletData[idx]
end
local GetBulletData = function(idx)
    for k, v in pairs(Defines.BulletData) do
		if v.BoomNumber == idx then
			return v
		end
	end
	return nil
end

local GetFishBulletData = function(_fishId)
	for k, v in pairs(Defines.FishBullet) do
		if v.BoomNumber == _fishId then
			return v
		end
	end
	return nil	
end

local GetPlayerSaveBulletData = function()
    local myGunLevel = CS.UnityEngine.PlayerPrefs.GetInt("MyBYGunLevel", 1)
	if GetBulletData(myGunLevel) == nil then
		myGunLevel = Defines.BulletData[1].BoomNumber
	end
	return myGunLevel
end
local GetBulletBoomNumber = function(idx)
	local BulletData = GetBulletData(idx)
	local FishBullet = GetFishBulletData(idx)
	if BulletData ~= nil then
		return BulletData.BoomNumber
	elseif FishBullet ~= nil then
		return FishBullet.BoomNumber
	else
		print("<color=red> GetBulletBoomNumber error </color>" .. tostring(idx))
		return 1
	end
end
local GetBulletBoomUIType = function(idx)
	local BulletData = GetBulletData(idx)
	local FishBullet = GetFishBulletData(idx)
	if BulletData ~= nil then
		return BulletData.BoomUIType
	elseif FishBullet ~= nil then
		return FishBullet.BoomUIType
	else
		print("<color=red>GetBulletBoomUIType error </color>" .. tostring(idx))
		return 1
	end
end
local GetBulletShootInterval = function(idx)
	local BulletData = GetBulletData(idx)
	local FishBullet = GetFishBulletData(idx)
	if BulletData ~= nil then
		return BulletData.ShootInterval
	elseif FishBullet ~= nil then
		return FishBullet.ShootInterval
	else
		print("<color=red>GetBulletShootInterval error </color>" .. tostring(idx))
		return 1
	end
end
local GetBulletBoomSpeed = function(idx)
	local BulletData = GetBulletData(idx)
	local FishBullet = GetFishBulletData(idx)
	if BulletData ~= nil then
		return BulletData.BoomSpeed
	elseif FishBullet ~= nil then
		return FishBullet.BoomSpeed
	else
		print("<color=red>GetBulletBoomSpeed error </color>" .. tostring(idx))
		return 1
	end
end
local GetBulletBoomType = function(idx)
	local BulletData = GetBulletData(idx)
	local FishBullet = GetFishBulletData(idx)
	if BulletData ~= nil then
		return BulletData.BoomType
	elseif FishBullet ~= nil then
		return FishBullet.BoomType
	else
		print("<color=red>GetBulletBoomType error </color>" .. tostring(idx))
		return 1
	end
end
local GetBulletBoomRate = function(idx)
	local BulletData = GetBulletData(idx)
	local FishBullet = GetFishBulletData(idx)
	if BulletData ~= nil then
		return BulletData.BoomRate
	elseif FishBullet ~= nil then
		return FishBullet.BoomRate
	else
		print("<color=red>GetBulletBoomRate error </color>" .. tostring(idx))
		return 0
	end
end
local GetBulletRebound = function(idx)
	local BulletData = GetBulletData(idx)
	local FishBullet = GetFishBulletData(idx)
	if BulletData ~= nil then
		return BulletData.Rebound
	elseif FishBullet ~= nil then
		return FishBullet.Rebound
	else
		print("<color=red>GetBulletBoomRate error </color>" .. tostring(idx))
		return 0
	end
end
local GetBulletDirectShootTime = function(idx)
	local BulletData = GetBulletData(idx)
	local FishBullet = GetFishBulletData(idx)
	if BulletData ~= nil then
		return BulletData.DirectShootTime
	elseif FishBullet ~= nil then
		return FishBullet.DirectShootTime
	else
		print("<color=red>GetBulletDirectShootTime error </color>" .. tostring(idx))
		return -1
	end
end


Defines.IceData = {}	-- 冰凍資料
local ClearIceData = function()
	Defines.IceData = {}
end
local SetIceData = function(data)
	local iceData = {}
	iceData.IceNumber 		= data.IceNumber		-- 冰凍編號
	iceData.IceName 		= data.IceName			-- 冰凍名稱
	iceData.IceUIType 		= data.IceUIType		-- 冰凍UI類型
	iceData.IceTime 		= data.IceTime			-- 冰冻时间
	iceData.IceMoney 		= data.IceMoney	/ 100	-- 使用金幣
	table.insert(Defines.IceData, iceData)
end
local GetIceData = function()
	return Defines.IceData[1]
end

Defines.FishData = {}	-- 魚資料
local ClearFishData = function()
	Defines.FishData = {}
end
local SetFishData = function(data)
	local fishData = {}
	fishData.FishId 		= data.FishId			-- 魚的編號
	fishData.Reward 		= data.Reward			-- 鱼倍率
	fishData.FishType 		= data.FishType			-- 鱼类型
	fishData.SPBoomArea 	= data.SPBoomArea		-- 爆炸半徑 -1表示不使用. 0全部
	table.insert(Defines.FishData, fishData)
end

local GetFishSPBoomAreaById = function(id)
    for k, v in pairs(Defines.FishData) do
		if v.FishId == id then
			return v.SPBoomArea
		end
	end
	return -1
end

local GetFishTypeById = function(id)
    for k, v in pairs(Defines.FishData) do
		if v.FishId == id then
			return v.FishType
		end
	end
	return 0
end

local GetFishRewardMaxById = function(id)
    for k, v in pairs(Defines.FishData) do
		if v.FishId == id then
			return v.Reward[#v.Reward] / BaseScore
		end
	end
	return -1
end

local GetFishRewardMinById = function(id)
    for k, v in pairs(Defines.FishData) do
		if v.FishId == id then
			return v.Reward[1] / BaseScore
		end
	end
	return -1
end

local SetBaseScore = function(baseScore)
	if baseScore == 0 then
		BaseScore = 1
	else
		BaseScore = baseScore
	end
end

local InitSetting = function(data)
    Defines.FrameTime = data.FrameTime / 1000
	Defines.ZlxReceiveSpeed = data.ZlxReceiveSpeed * 0.001
	Defines.GameType = data.GameType

    SetNumBulletLimit(data.MaxBoom)
	SetBaseScore(data.BaseScore)
	
	-- 子彈資訊
	ClearBulletData()
    for k, v in pairs(data.BoomSetting) do
		SetBulletData(v)
	end
	
	ClearFishData()
    for k, v in pairs(data.FishSetting) do
		SetFishData(v)
	end	
	
	local BackgroundList = G.Tool.StringHelper.Split(data.BackgroundList, ",")
	Defines.Background1 = BackgroundList[1]
	if tonumber(Defines.Background1) > 5 then
		Defines.Background1 = 5
	end
	Defines.Background2 = BackgroundList[2]
	if tonumber(Defines.Background2) > 5 then
		Defines.Background2 = 5
	end
	
	-- 冰凍資訊
	ClearIceData()
	SetIceData(data.IceSetting)
end

-- 管理自己子弹ID
NextBulletID = 0
local GetNextBulletID = function()
    NextBulletID = NextBulletID - 1
    return NextBulletID
end

FrameUpdate = function()
    for k, v in pairs(BulletList) do
        if v ~= nil then
            v.BulletSpr.FrameUpdate()
        end
    end
    uiFishMain.FrameUpdate()
end
-- 拷贝表
CopyTable = function(data)
    local tt = { }
    if type(data) ~= "table" then
        return tt
    end
    for k, v in pairs(data) do
        if type(v) == "table" then
            tt[k] = CopyTable(v)
        else
            tt[k] = v
        end
    end
    return tt
end
-- 该座位号是不是自己
IsPlayerSeat = function(seat)
    for k, v in pairs(UserDataList) do
        if tonumber(v.User.SeatNo) == tonumber(seat) and tostring(G.User.GetCurrentUserID()) == tostring(k) then
            return true
        end
    end
    return false
end
-- 返回自己的数据
GetPlayerData = function()
    return GetSeatnoToUser(GetPlayerSeat())
end
-- 返回自己的座位号
GetPlayerSeat = function()
    if UserDataList[tostring(G.User.GetCurrentUserID())] then
        return UserDataList[tostring(G.User.GetCurrentUserID())].User.SeatNo
    end
    return 0
end
-- 是否旋转玩家
IsRotationPlayer = function()
    if GetUserSeatNo() >= 2 then
        return true
    end
    return false
end
-- 根据座位号返回玩家数据
GetSeatnoToUser = function(seatno)
    for k, v in pairs(UserDataList) do
        if tonumber(v.User.SeatNo) == tonumber(seatno) then
            return v
        end
    end
end
-- 更新玩家钱(加)
AddUserMoney = function(user, money, desc)
    -- print("<color=red>UserID=" .. user.User.UserID .. " Score=" .. user.User.Score .. " money=" .. money .. " Desc=" .. desc .. "</color>")
    user.User.Score = user.User.Score + money
end
-- 更新玩家钱(减)
DesUserMoney = function(user, money, desc)
    -- print("<color=red>UserID=" .. user.User.UserID .. " Score=" .. user.User.Score .. " money=" .. money .. " Desc=" .. desc .. "</color>")
    user.User.Score = user.User.Score - money
end
-- 根据ID返回玩家数据
GetIDToUser = function(id)
    --local key = tostring(id)
    --return UserDataList[key]

    for k, v in pairs(UserDataList) do
        if tostring(k) == tostring(id) then
            return v
        end
    end
    return nil
end
-- 获取玩家数
GetUserCount = function()
    local nn = 0
    for k, v in pairs(UserDataList) do
        if tonumber(v.User.StateValue) >= 4 then
            nn = nn + 1
        end
    end
    return nn
end
-- 获取玩家真实位置
GetSeatnoToPos = function(seatno)
	if Defines.RotationPlayer == true then
		if IsRotationPlayer() then
	        --return 3 - seatno
			if seatno == 0 then
				return 2
			elseif seatno == 1 then
				return 3
			elseif seatno == 2 then
				return 0
			elseif seatno == 3 then
				return 1
			end
		end
    end

    return seatno
end
-- 根据真实位置获取玩家座位号
GetPosToSeatno = function(pos)
	if Defines.RotationPlayer == true then
		if IsRotationPlayer() then
			--return 3 - pos
			if pos == 0 then
				return 2
			elseif pos == 1 then
				return 3
			elseif pos == 2 then
				return 0
			elseif pos == 3 then
				return 1
			end
		end
    end

    return pos
end

AddFishDead = function(fishId)
	table.insert(FishDeadList, fishId)    
end

CheckFishDead = function(fishId)
	for k, v in pairs(FishDeadList) do
		if v == fishId then
			return true
		end
	end
	
	return false
end
-- 添加子弹
AddBullet = function(data)
    table.insert(BulletList, data)    
end
-- 删除子弹
RemoveBullet = function(bulletId)
	
    for k, v in pairs(BulletList) do
        if v.BoomID == bulletId then
            local obj = BulletList[k].Obj
            table.remove(BulletList, k)			
            return obj
        end
    end
    for k, v in pairs(HideBulletList) do
        if v.BoomID == bulletId then
            local obj = HideBulletList[k].Obj
            table.remove(HideBulletList, k)			
            return obj
        end
    end
end
-- 获取自己子弹的数量
GetBulletNumber = function()
    local nn = 0
    for k, v in pairs(BulletList) do
        if v ~= nil then
            if v.PlayerID == G.User.GetCurrentUserID() then
				if v.BoomType ~= 3 then
					nn = nn + 1
				end
            end
        end
    end
    -- 隐藏子弹也算，隐藏的子弹是发射了碰撞信息的子弹
    for k, v in pairs(HideBulletList) do
        if v ~= nil then
            if v.PlayerID == G.User.GetCurrentUserID() then
				if v.BoomType ~= 3 then
					nn = nn + 1
				end
            end
        end
    end
    return nn
end
-- 打印子弹数据
PrintBulletData = function()
    print("**********BulletList**********")
    for k, v in pairs(BulletList) do
        if v ~= nil then
            if v.PlayerID == G.User.GetCurrentUserID() then
                print("BoomID=" .. v.BoomID .. " Pos x=" .. v.Obj.transform.position.x .. " y=" .. v.Obj.transform.position.y)
            end
        end
    end

    print("**********HideBulletList**********")
    for k, v in pairs(HideBulletList) do
        if v ~= nil then
            if v.PlayerID == G.User.GetCurrentUserID() then
                print("BoomID=" .. v.BoomID .. " Pos x=" .. v.Obj.transform.position.x .. " y=" .. v.Obj.transform.position.y)
            end
        end
    end
end
-- 根据子弹ID获取子弹数据
GetIDToBullet = function(id)
    for k, v in pairs(BulletList) do
        if v.BoomID == id then
            return BulletList[k]
        end
    end
    for k, v in pairs(HideBulletList) do
        if v.BoomID == id then
            return HideBulletList[k]
        end
    end
end
-- 更新自己的子弹数据
UpdateBulledID = function(data)    
    for k, v in pairs(BulletList) do
        if v.BoomID < 0 then
            if SendTriggerFishList[tostring(v.BoomID)] then
                local sendData = SendTriggerFishList[tostring(v.BoomID)]
                sendData.Boom.BoomID = data.BoomID
                SendFrameC2SID(sendData)
                SendTriggerFishList[tostring(v.BoomID)] = nil
            end
            v.BoomID = data.BoomID
			v.BoomNumber = data.BoomNumber
            v.BoomOdd = GetBulletBoomRate(data.BoomNumber)
            v.BulletSpr.SetBulledData(data)
            return
        end
    end
    for k, v in pairs(HideBulletList) do
        if v.BoomID < 0 then
            if SendTriggerFishList[tostring(v.BoomID)] then
                local sendData = SendTriggerFishList[tostring(v.BoomID)]
                sendData.Boom.BoomID = data.BoomID
                SendFrameC2SID(sendData)
                SendTriggerFishList[tostring(v.BoomID)] = nil
            end
            v.BoomID = data.BoomID
			v.BoomNumber = data.BoomNumber
            v.BoomOdd = GetBulletBoomRate(data.BoomNumber)
            v.BulletSpr.SetBulledData(data)
            return
        end
    end    
    print("<color=red>更新自己的子弹数据 失败</color>")
end
-- 返回未被服务器验证的子弹花费的总钱
GetLocalBulledMoney = function()
    local nn = 0
    for k, v in pairs(BulletList) do
        if v.BoomID < 0 then
            nn = nn + v.BoomOdd
        end
    end
    return nn
end
-- 注册锁定的鱼
SetLockFishID = function(fish)
    if LockFishID > 0 then
        local oldfish = fishManager.GetFishByID(LockFishID)
        if oldfish then
            oldfish.LeavePoolFun = nil
        end
    end
    LockFishID = fish.FishServerID
	LockFishTypeID = fish.FishID
    fish.LeavePoolFun = function(fishServerID)
        RemoveLockFishID()
    end
end
RemoveLockFishID = function()
    LockFishID = -1
    uiFishMain.ShowLockFish(false)
end
RemoveLockFishTypeID = function()
    LockFishTypeID = -1
end

local UINum = 8 

GetGunUIName = function(size)
	local id = GetBulletBoomUIType(size)
	if id > UINum then
		id = UINum
	end
		
	local fishBullet = GetFishBulletData(size)
	if fishBullet ~= nil then
		id = fishBullet.BoomUIType
	end
	return tostring(id)
end

-- 获取炮底座名
GetGunBgPrefabName = function(size)	
    return "taizuo_" .. GetGunUIName(size)
end
-- 获取炮台名
GetGunPrefabName = function(size)			
    return "gunSkin_" .. GetGunUIName(size)
end
-- 获取子弹名
GetBulletPrefabName = function(size)
    return "Bullet_00" .. GetGunUIName(size)
end
-- 获取渔网名
GetNetPrefabName = function(size)
    return "FishNet_" .. GetGunUIName(size)
end

-- 坐标转换(2D摄像机下的坐标转成UI摄像机下的坐标)
Get2DToUIPoint = function(vec)

    vec = SceneData.camera:WorldToScreenPoint(vec)
    vec = SceneData.uiCamera:ScreenToWorldPoint(vec)
	vec.z = 0
    return vec
end
-- 求两线的交点
CalcLine2ToPos = function(p1, p2, p3, p4)
    local x =(p2.x * p4.x *(p3.y - p1.y) + p2.x * p3.x *(p1.y - p4.y) + p1.x * p4.x *(p2.y - p3.y) + p1.x * p3.x *(p4.y - p2.y)) /((p2.y - p1.y) *(p4.x - p3.x) -(p4.y - p3.y) *(p2.x - p1.x))
    local y = p1.y + x *(p2.y - p1.y) /(p2.x - p1.x) -(p2.y - p1.y) /(p2.x - p1.x) * p1.x
    return Vector3(x, y, 0)
end



-- 设置摄像机
SetCamera = function(cam, uicam)
    SceneData.camera = cam
    SceneData.uiCamera = uicam
end
-- 发送炮弹爆炸(碰撞检查)
SendTriggerFish = function(data, delete, allFish)
    local sendData = { }
    sendData.FrameID = 0
    sendData.Boom = { }
    sendData.Boom.BoomID = data.id
    sendData.Boom.BoomRate = 1
    sendData.Boom.FishID = { }
    local bullet = GetIDToBullet(data.id)
    if bullet.seatno == GetPlayerSeat() then
    else
        sendData.Boom.UserID = data.UserID
    end
	sendData.Boom.BoomType = bullet.BoomType
	
	-- 是否刪除子彈 0不刪除 1刪除
	sendData.Boom.Delete = delete
	
    for k, v in pairs(data.fishS) do
        table.insert(sendData.Boom.FishID, v)
    end
	
	-- 傳送畫面上的魚
	if allFish ~= nil then
		sendData.AllFish = { }
		sendData.AllFish.FishID = { }
		sendData.AllFish.FishID = allFish		
	end
	
    if data.id < 0 then
        SendTriggerFishList[tostring(data.id)] = sendData
    else
        SendFrameC2SID(sendData)
    end
    --ShowTab("*******BoomData", sendData)	
end

-- 接收炮弹爆炸
AcceptTriggerFish = function(boom)
    local bullet = GetIDToBullet(boom.BoomID)
    if bullet then
        local pos = bullet.Obj.transform.localPosition + bullet.Obj.transform.up * 0.4
        local data = { }
        data.Pos = pos
        data.PlayerID = bullet.PlayerID
        data.BoomID = boom.BoomID
        uiFishMain.BoomBullet(data)
        CloseBullet(data.BoomID)
    else
		CS.UnityEngine.Debug.LogWarning("子弹不存在,ID = " .. boom.BoomID)
        --print("<color=red>子弹不存在,ID = " .. boom.BoomID .. "</color>")
    end
end

GetBoomAreaFishByFishID = function(FishID, pos)
	-- 爆炸半徑 -1表示不使用. 0全部
	local Range = GetFishSPBoomAreaById(FishID)
	if Range == 0 then
		if isSendAllFish then 
			return fishManager.GetAllFishID()
		else 
			return fishManager.GetAllPoolFishID()
		end
	elseif Range > 0 then
		return fishManager.GetWithinRangeFishID(pos, Range * 0.1)
	end
end

-- 记录死亡雷龙的位置
local electricFishPosition;

-- 接收炮弹捕到的鱼
AcceptGetFish = function(data,delayTime)

    local boomD = nil
	local boomRange = nil
    local isSendAllFish = false;

    -- 雷龙电死的鱼
    local electricShockFishTab = { }

    -- 屏幕四个区域创建需要金币鱼的数量， 左上，右上，左下，右下
    local coinCreatorPos = { 0, 0, 0, 0 };

    -- 累计所有鱼中当前玩家获得的金钱数量，统一显示
    local currentUserTotalGainMoney = 0;

	-- 總計爆炸賺得的金幣數
    local boomTotalGainMoney = 0;
	-- 爆炸玩家
    local boomUser = nil;
	
	local accFish = 0;
	
    for k, v in pairs(data) do
		local _isPlayAudio = true
		accFish = accFish + 1
		-- 同一時間最多只有一個金幣音效
		if accFish > 1 then
			_isPlayAudio = false
		end
		
		
		if v.FishID ~= nil then						
			local fishType = GetFishTypeById(v.FishID);

			-- 死亡类型为炸弹
			if fishType == 3 then
				--boomD = v
				boomRange = v
			end

			-- 死亡鱼为雷龙，记录雷龙死亡位置,用于播放特效时候连线
			if fishType == 4 then
				electricFishPosition = v.Pos
				boomD = v
			end

			-- 死亡类型为一网打净
			if fishType == 5 and v.Type == 0 then
				isSendAllFish = true
				boomD = v
			end
		end
		
        if v.PlayerID == G.User.GetCurrentUserID() then
            currentUserTotalGainMoney = currentUserTotalGainMoney + v.Money
        end
		-- v.Type 4 电鱼
        if G.Tool.TableHelper.Exists( { 4 }, v.Type) then
			table.insert(electricShockFishTab, v)
			
			boomUser = v
			boomTotalGainMoney = boomTotalGainMoney + v.Money
			
            local seq = GetSequence("_GraspFish" .. k)
            seq:AppendInterval(1)
            seq:OnKill( function()
                uiFishMain.GraspFish(v, true, _isPlayAudio)
            end )
		-- v.Type 3 5 炸弹
        elseif G.Tool.TableHelper.Exists( { 3, 5 }, v.Type) then
			boomUser = v
			boomTotalGainMoney = boomTotalGainMoney + v.Money
		-- v.Type 7 黑洞
        elseif G.Tool.TableHelper.Exists( {7}, v.Type) then
			BlackHoldUserID = v.PlayerID
			currentUserTotalGainMoney = 0
			-- 设置黑洞显示
			uiFishMain.SetPlayerBlackHoleActive(v.PlayerID,true,v.FishID)
			
			local sequenceDelay = CS.DG.Tweening.DOTween.Sequence();
			sequenceDelay:AppendInterval(delayTime)
			sequenceDelay:AppendCallback(function() 
				
				local endTimer = uiFishMain.ShowGlodNumberBlack(v.PlayerID)
				uiFishMain.GraspFishCoin(v)
				
				local sequenceClose = CS.DG.Tweening.DOTween.Sequence();
				sequenceClose:AppendInterval(endTimer)
				sequenceClose:AppendCallback(function()
					BlackHoldUserID = nil
					-- 设置黑洞显示
					uiFishMain.SetPlayerBlackHoleActive(v.PlayerID,false,v.FishID)
					
					-- 在玩家上出现轮盘
					uiFishMain.GraspFishBlackHold(v)
					
					if G.User.GetCurrentUserID() == v.PlayerID then
						uiFishMain.ShowAddedMoneyNumber(v.Money)
					end
				end)
				sequenceClose:OnUpdate(function()
					-- 玩家中途离场
					local user = GetIDToUser(v.PlayerID)
					if not user then
						BlackHoldUserID = nil
						-- 设置黑洞显示
						uiFishMain.SetPlayerBlackHoleActive(v.PlayerID,false,v.FishID)
						sequenceClose:Kill()
					end
				end)
			end)
        else
			uiFishMain.GraspFish(v, true, _isPlayAudio)
        end

    end

    if currentUserTotalGainMoney ~= 0 then
        local seq = GetSequence("ShowAddedMoneyNumber")
        seq:AppendInterval(1.4)
        seq:OnKill( function()
            uiFishMain.ShowAddedMoneyNumber(currentUserTotalGainMoney)
        end )
    end
	
	-- 殺死多隻魚
    if boomD then
        if boomD.PlayerID == G.User.GetCurrentUserID() then
            if isSendAllFish then 
                SendAllFish(fishManager.GetAllFishID())
            else 
                SendAllFish(fishManager.GetAllPoolFishID())
            end
        end
    end
	
	-- 范围爆炸
	if boomRange then
		if boomRange.PlayerID == G.User.GetCurrentUserID() then
			SendAllFish(GetBoomAreaFishByFishID(boomRange.FishID, boomRange.Pos))
		end
	end
	
	-- 爆炸,在爆炸玩家上出现轮盘
	if boomUser ~= nil then
		uiFishMain.BoomEffect(boomUser, boomTotalGainMoney)
	end
	
    if #electricShockFishTab ~= 0 and electricFishPosition ~= nil then
        -- 用于回收闪电节点特效
        local electricPointTab = { };

        local electricLine = CS.FrameWork.ObjectPoolManager.Instance:Get("electricLine")
        local lineRenderer = electricLine:GetComponent("LineRenderer")
        lineRenderer.positionCount = #electricShockFishTab + 1

        -- 特效设置到金币层，层级比金币低
        lineRenderer.sortingLayerName = "4";
        lineRenderer.sortingOrder = 1;

        local CreateElectricPoint = function(pos)
            local electricPoint = CS.FrameWork.ObjectPoolManager.Instance:Get("electricPoint")
            electricPoint.transform.localScale = CS.UnityEngine.Vector3.one;
            electricPoint.transform.eulerAngles = CS.UnityEngine.Vector3.zero
            electricPoint.transform.position = pos;

            table.insert(electricPointTab, electricPoint)
        end

        -- 雷龙位置为连线的起点位置
        local lineStartPosition = electricFishPosition;
		lineStartPosition.z = 0
        CreateElectricPoint(lineStartPosition)

        -- 第一个点为雷龙位置
        lineRenderer:SetPosition(0, lineStartPosition)

        for i = 1, #electricShockFishTab, 1 do
			local pos = electricShockFishTab[i].Pos
			pos.z = 0
            -- print("闪电连线", lineStartPosition, pos)

            -- 实例化闪电，设置起点和终点
            lineRenderer:SetPosition(i, pos)

            -- 更新起点
            lineStartPosition = pos

            -- 实例化一个闪电节点
            CreateElectricPoint(lineStartPosition)
        end

        -- 回收闪电和闪电节点
        local seq = GetSequence("_retrieveEff")
        seq:AppendInterval(2)

        seq:OnKill( function()
            CS.FrameWork.ObjectPoolManager.Instance:Release("electricLine", electricLine)

            for i = 1, #electricPointTab, 1 do
                CS.FrameWork.ObjectPoolManager.Instance:Release("electricPoint", electricPointTab[i])
            end
        end )
    end
end

LogBullet = {}
-- 是不是自己的子弹
IsPlayerBullet = function(id)
    local bulled = GetIDToBullet(id)
    if bulled ~= nil then
        if bulled.PlayerID == G.User.GetCurrentUserID() then
            return true
        end
    end
end
-- 根据ID清除子弹
CloseBullet = function(id)
    local obj = RemoveBullet(id)
    if obj then
        CS.FrameWork.ObjectPoolManager.Instance:Release(obj.name, obj)
	else
		--CS.UnityEngine.Debug.LogWarning("############### CloseBullet not find " .. id)
    end
end
HideBullet = function(id)
	local isFind = false

    for k, v in pairs(BulletList) do
        if v.BoomID == id then
			--CS.UnityEngine.Debug.LogWarning("############### HideBullet " .. id)
			local obj = v.Obj
            obj.transform.gameObject:SetActive(false)
            table.remove(BulletList, k)
			table.insert(HideBulletList, v)
			isFind = true
        end
    end
	
	if isFind == false then
		--CS.UnityEngine.Debug.LogWarning("############### HideBullet not find " .. id)
	end
end
-- 发送全部鱼
SendAllFish = function(data)
    local sendData = { }
    sendData.FrameID = 0
    sendData.AllFish = { }
    sendData.AllFish.FishID = { }
    sendData.AllFish.FishID = data
	
	--G.Tool.TableHelper.Print("发送全部鱼", sendData)
    SendFrameC2SID(sendData)
end
-- 发送锁定
SendLock = function(data)
    local sendData = { }
    sendData.FrameID = 0
    sendData.SuoDing = { SuoDing = data.isLock }

    SendFrameC2SID(sendData)
end

SendIceSkill = function()
    local sendData = { }
    sendData.FrameID = 0
    sendData.UseIce = true
    SendFrameC2SID(sendData)
end

-- 发送修改的枪倍率
SendGunBei = function(bei)
    local userChangeRate = { }
    userChangeRate.RateAfterChange = bei

    local sendData = { }
    sendData.FrameID = 0
    sendData.UserChangeRate = userChangeRate
	
	local seatno = GetPlayerSeat()
    local p = GetSeatnoToPos(seatno)
	uiFishMain.GetUIPlayer(p):ShowGunLevel(GetFishBulletData(bei) == nil)
	uiFishMain.GunResetFireTime()
	
    SendFrameC2SID(sendData)
end
-- 发送开枪消息
SendShoot = function(vec, isPC)
    local x = vec.Pos.x
    local y = vec.Pos.y

    local sendData = { }
    sendData.FrameID = 0
    sendData.Shoot = { }
    sendData.Shoot.Pos = { }
    sendData.Shoot.Pos.x = x
    sendData.Shoot.Pos.y = y
    if vec.FishID then
        sendData.Shoot.FishID = vec.FishID
    end
    -- 破产了不创建子弹
    if not isPC then
        -- 自己发射子弹不用等服务器
        -- 模仿服务器的消息
        local shootData = { }
        shootData.Pos = { }
        shootData.Pos.x = x
        shootData.Pos.y = y
        shootData.UserID = G.User.GetCurrentUserID()
        shootData.BoomID = GetNextBulletID()
        if vec.FishID then
            shootData.FishID = vec.FishID
        else
            shootData.FishID = 0
        end
        local v = GetPlayerData()
        shootData.BoomOdd = GetBulletBoomRate(v.gunLevel)
        shootData.BoomNumber = v.gunLevel
		shootData.Rebound = GetBulletRebound(v.gunLevel)
		shootData.BoomSpeed = GetBulletBoomSpeed(v.gunLevel)
		shootData.BoomType = GetBulletBoomType(v.gunLevel)
        uiFishMain.Shoot(shootData)
    end
	
	--uiFishMain.HideNotDoSomething()
    -- 发送消息给服务器
    SendFrameC2SID(sendData)
end
-- 玩家上一发子弹ID
local PlayerUpBulledID = -1
-- 接收开枪消息
AcceptShoot = function(data)
    -- 服务器发过来子弹，不用创建子弹了，只需要更新子弹ID
    if data.UserID == G.User.GetCurrentUserID() then
        if PlayerUpBulledID < 0 then
            PlayerUpBulledID = GetPlayerSeat() * 10000000
        end
        if (PlayerUpBulledID + 1) ~= data.BoomID then
            print("<color=red>GlobalFrameID=" .. GlobalFrameID .. " PlayerUpBulledID=" .. PlayerUpBulledID .. " data.BoomID=" .. data.BoomID .. "</color>")
        end
        PlayerUpBulledID = data.BoomID

        UpdateBulledID(data)
        uiFishMain.SetPlayerMoney()
        return
    end
    uiFishMain.Shoot(data)
end
-- 客户端发送帧数据
SendFrameC2SID = function(data)
    -- ShowTab("*******SendFrameC2SID", data)
    G.NetQ.SendMsg(G.Proto.BClass.Game, G.Proto.Game_BY.FrameC2SID, data)
end

-- region 公用网络接口
-- 用户进入桌子消息
local CallUserEnter = function(data)
    CS.UILoadingData.Hide()

    -- ShowTab("*******CallUserEnter", data)

    if not UserDataList[tostring(data.User.UserID)] then
        UserDataList[tostring(data.User.UserID)] = { }
    end
    UserDataList[tostring(data.User.UserID)].User = data.User

    if data.User.UserID == G.User.GetCurrentUserID() then
		--UserDataList[tostring(data.User.UserID)].gunLevel = GetPlayerSaveBulletData()

        SetUserSeatNo(data.User.SeatNo)
		--[[
        if IsRotationPlayer() then
            SceneData.camera.transform.rotation = Quaternion.Euler(0, 0, 180)
        end
		]]--
	else
		UserDataList[tostring(data.User.UserID)].gunLevel = 1
    end
    uiFishMain.SetPlayerEnter(data.User.SeatNo)
end

local SetUserGunLevel = function(GunLevel)
	UserDataList[tostring(G.User.GetCurrentUserID())].gunLevel = GunLevel
end

-- 用户状态改变
local CallUserStateChange = function(data)
    -- ShowTab("*******CallUserStateChange", data)
    if UserDataList[tostring(data.User.UserID)] then
        UserDataList[tostring(data.User.UserID)].User = data.User
        uiFishMain.ChangePlayerState(data.User.SeatNo)
    else
        print("<color=red>Error:Exit and Change</color>")
    end
end

-- 收到游戏开始消息
local CallGameStart = function(data)
    --CS.UILoadingData.Hide()
    --uiFishMain.OpenUI()
end

-- 游戏结束消息
local CallGameEnd = function(data)
    if (IsLookOn(GetPlayerData())) then
        G.Tool.UILoading.ShowTxt("等待其他玩家准备……", 0)
    end
end

-- 其他用户离开桌子消息
local CallUserLeave = function(data)
    local k = tostring(data.User.UserID)
    uiFishMain.SetPlayerExit(data.User.SeatNo)
    if UserDataList[k] then
        UserDataList[k] = nil
    end
end

-- 观战消息
CallUserLook = function(data)
    for _, v in pairs(UserDataList) do
        v.isLook = false
    end
    if (data ~= nil and data.UserID ~= nil) then
        for _, uid in pairs(data.UserID) do
            if (UserDataList[tostring(uid)]) then
                UserDataList[tostring(uid)].isLook = true
            end
        end
    end
end

-- 场景初始化
local GameSceneDestory = function()
    print("<color=red>GameSceneDestory</color>")
    uiFishMain.InitGame()
    InitModel()
end

-- 初始化数据
InitModel = function()
    UserDataList = { }
    SceneData = { }
    BulletList = { }
    SendTriggerFishList = { }
    IsRecoverRet = false
    IsGameReady = false
end
-- 回收当前页面注册的消息
Close = function()
    UserDataList = { }
    SceneData = { }
    BulletList = { }
    SendTriggerFishList = { }
end

-- 断线重连玩家信息
function RecoverPlayer(data)
    ShowTab("<color=red>断线重连玩家信息</color>", data)
    for k, v in ipairs(data) do
        local user = GetIDToUser(v.UserID)
        user.gunLevel = v.Rate
        user.User.Score = v.Money
        uiFishMain.SetPoChan(v.UserID, v.PoChan)
		uiFishMain.SetBulletBelt(user.User.SeatNo,user.gunLevel)
    end
    uiFishMain.SetPlayerMoney()
    uiFishMain.SetGunLevel()
end

function RecoverFishWaveTips(show,tip)
	if show == true then
		uiFishMain.ShowWaveDoing(tip)
	end
end

local ShowNotDoSomething = function (tip,timer)
	uiFishMain.ShowNotDoSomething(tip,timer)
end

AnnList = {}
function SetAnnMeg(msg)
	table.insert(AnnList, msg)
end

function GetAnnMeg()
	return G.Tool.TableHelper.Pull(AnnList)
end

RecoverFrameNumber = 0;
RecoverTotalFrameNumber = 0;

BreakFirstFrameID = -1  -- 断线数据的第一帧ID
BeginFirstFrameID = -1  -- 开始游戏的第一帧ID
GlobalFrameID = -1      -- 上一帧ID
isMoneyUnequal = false  -- 钱不相同
isForceShowFrameData = false
 
 function ShowLog(text, data)
	--print("@@@@@@@@@@@@@@@@@@@@@@@@@@@ " .. text)
	--G.Tool.TableHelper.Print(data)
end
 
function TestWave1()
	local wave = {}
	wave.FishWaveID = 1
	wave.FishInfo = {}
	
	local pathData
	pathData = CreatePathData(6, 20, 700, "Path1")
	table.insert(wave.FishInfo, pathData)
	
	pathData = CreatePathData(7, 20, 700, "Path2")
	table.insert(wave.FishInfo, pathData)

	pathData = CreatePathData(29, 1, 700, "Path3")
	table.insert(wave.FishInfo, pathData)

	pathData = CreatePathData(7, 20, 700, "Path4")
	table.insert(wave.FishInfo, pathData)
	
	pathData = CreatePathData(6, 20, 700, "Path5")
	table.insert(wave.FishInfo, pathData)

	pathData = CreatePathData(28, 1, 700, "Path6")
	table.insert(wave.FishInfo, pathData)	
	
	return wave
end

function TestWave2()
	local wave = {}
	wave.FishWaveID = 2
	wave.FishInfo = {}
	
	local pathData
	pathData = CreatePathData(8, 25, 700, "Path1")
	table.insert(wave.FishInfo, pathData)
	
	pathData = CreatePathData(9, 25, 700, "Path2")
	table.insert(wave.FishInfo, pathData)

	pathData = CreatePathData(15, 8, 700, "Path3")
	table.insert(wave.FishInfo, pathData)

	pathData = CreatePathData(11, 18, 700, "Path4")
	table.insert(wave.FishInfo, pathData)
	
	pathData = CreatePathData(12, 18, 700, "Path5")
	table.insert(wave.FishInfo, pathData)

	pathData = CreatePathData(29, 4, 700, "Path6")
	table.insert(wave.FishInfo, pathData)
	
	pathData = CreatePathData(18, 8, 700, "Path7")
	table.insert(wave.FishInfo, pathData)
	
	pathData = CreatePathData(9, 25, 700, "Path8")
	table.insert(wave.FishInfo, pathData)

	pathData = CreatePathData(8, 25, 700, "Path9")
	table.insert(wave.FishInfo, pathData)
	
	return wave
end

function TestWave4()
	local wave = {}
	wave.FishWaveID = 4
	wave.FishInfo = {}
	
	local pathData
	pathData = CreatePathData(4, 37, 1000, "Line1")
	table.insert(wave.FishInfo, pathData)
	
	pathData = CreatePathData(6, 38, 1000, "Line2")
	table.insert(wave.FishInfo, pathData)

	pathData = CreatePathData(15, 39, 1000, "Line3")
	table.insert(wave.FishInfo, pathData)
 
	return wave
 end
 
function CreatePathData(FishId, Count, Interval, PathName)
	local pathData
	pathData = {}
	pathData.FishId = FishId
	pathData.Count = Count
	pathData.Interval = Interval
	pathData.PathName = PathName
	
	return pathData
end

local TestWave = false
local FishWaveID = 4

-- region 服务器同步帧
function S2CFrameMessageHandle(receiveMsg)

	if GlobalFrameID ==receiveMsg.FrameID then
		return
	end

    local showDesc = ""
    if GlobalFrameID >= 0 then
        if (receiveMsg.FrameID - GlobalFrameID) ~= 1 then
            print("<color=red>Error帧ID  GlobalFrameID = " .. GlobalFrameID .. " FrameID = " .. receiveMsg.FrameID .. "</color>")
        end
    end
    if BreakFirstFrameID < 0 and IsRecoverRet then
        BreakFirstFrameID = receiveMsg.FrameID
    end
    if BeginFirstFrameID < 0 and not IsRecoverRet then
        BeginFirstFrameID = receiveMsg.FrameID
    end

	local AddFrame = receiveMsg.FrameID - GlobalFrameID
	
	if BreakFirstFrameID == receiveMsg.FrameID or
	   BeginFirstFrameID == receiveMsg.FrameID then
		RecoverFishWaveTips(receiveMsg.IsFishWave,"")
		AddFrame = 1
    end	
	
	--print("GlobalFrameID",GlobalFrameID,"receiveMsg.FrameID",receiveMsg.FrameID,"AddFrame",AddFrame,"IsInIce",IsInIce,"receiveMsg.IsIce",receiveMsg.IsIce)
    GlobalFrameID = receiveMsg.FrameID
	
	if TestWave == true then
		if receiveMsg.FrameID == 200 then 
			receiveMsg.advanceNoticeType = 1
			if FishWaveID == 1 then
				receiveMsg.fishWave = TestWave1()
			elseif FishWaveID == 2 then
				receiveMsg.fishWave = TestWave2()
			elseif FishWaveID == 4 then
				receiveMsg.fishWave = TestWave4()
			end
		end
	end
	
    -- 没有数据，默认false
    if receiveMsg.IsIce == nil then
        receiveMsg.IsIce = false
    end

    if IsRecoverRet == true or not IsGameReady then
        RecoverFrameNumber = RecoverFrameNumber + G.CaseWhen(IsInIce ~= true, AddFrame, 0)
        -- 子弹移动
        FrameUpdate()
    end
	
	IsInIce = receiveMsg.IsIce

    if isForceShowFrameData then
        print("<color=red>观察帧ID FrameID = " .. receiveMsg.FrameID .. "</color>")
    end

    if not IsRecoverRet then
        -- 判断冰冻状态是否有变化
        if (IsIce ~= receiveMsg.IsIce) then
            -- 设置屏幕冰冻状态
			uiFishMain.SetBgAniEnable(receiveMsg.IsIce)
            uiFishMain.SetIceMaskEnable(receiveMsg.IsIce)
            uiFishMain.SetWaveEnable(receiveMsg.IsIce)
            fishManager.SetAllFishFrozenState(receiveMsg.IsIce)
            IsIce = receiveMsg.IsIce
        end

        -- 是否是新的冰冻技能
        if receiveMsg.UseIce == true then
            -- 播放冰冻音效
            G.Tool.Sound.PlayGameSound("ice")

            -- 播放冰冻特效
            uiFishMain.ShowIceMaskEff()
        end
    end

    -- 处理玩家修改炮弹等级
    -- 炮台倍率先于发射炮弹处理，因为钱不够发射当前倍率炮弹的时候服务器会改变倍率，在发射子弹
    -- 同一帧玩家及改了倍率又发了炮弹，服务器与客户端都同样处理(先改倍率再发炮)
    if receiveMsg.UserChangeRate ~= nil and #receiveMsg.UserChangeRate ~= 0 then
        if not IsRecoverRet then
            for key, var in pairs(receiveMsg.UserChangeRate) do
			
				ShowLog("处理玩家修改炮弹等级", var)

                uiFishMain.ChangeGunLevel(var)
            end
        end
    end

    -- 处理其他玩家操作
    if receiveMsg.Shoot ~= nil and #receiveMsg.Shoot ~= 0 then
        if not IsRecoverRet then
            -- ShowTab("玩家操作数据", receiveMsg.Shoot)
            for key, var in pairs(receiveMsg.Shoot) do
                local user = GetIDToUser(var.UserID)
                if not user then
                    -- ShowTab("<color=red>当前所有玩家数据</color>", UserDataList)
                else
					var.BoomOdd = GetBulletBoomRate(var.BoomNumber)
                    DesUserMoney(user, var.BoomOdd, "打枪")
                    if var.UserID == G.User.GetCurrentUserID() then
                        showDesc = showDesc .. "\n打枪=" .. var.BoomOdd
                    end
					
                    AcceptShoot(var)
					
					--[[table.insert(LogBullet,var.BoomID)
					local message = "bullet shoot { "
					for key, var in pairs(LogBullet) do
						message = message ..",".. var
					end
					print(message)]]
                end
            end
        end
    end

    -- 处理子弹
    if receiveMsg.Boom ~= nil and #receiveMsg.Boom ~= 0 then
        if not IsRecoverRet then
            --ShowTab("销毁子弹消息", receiveMsg.Boom)
            for key, var in pairs(receiveMsg.Boom) do
                AcceptTriggerFish(var)
            end
			
			--[[
			for key, var in pairs(receiveMsg.Boom) do
				for kk, vv in pairs(LogBullet) do
					if var.BoomID == vv then
						LogBullet[kk] = nil
					end
				end
            end
			
			local message = "bullet boom { "
            for key, var in pairs(LogBullet) do
				message = message  ..",".. var
			end
			print(message)]]
        end
    end
	
	-- 多個得分金額
    if not IsRecoverRet and receiveMsg.FishWinList ~= nil and receiveMsg.FishWinList.Time ~= 0 then
		G.Tool.TableHelper.Print(receiveMsg.FishWinList)
		uiFishMain.SetGoldNumberCreatorBlack(receiveMsg.FishWinList.Time, receiveMsg.FishWinList.Money)
    end
	
	-- 比賽剩餘時間(秒)
    if not IsRecoverRet and receiveMsg.GameCompetitionTime ~= nil then
		uiFishMain.RefreshCountdown(receiveMsg.GameCompetitionTime)
    end
	
	local isNewFish = true
	if TestWave == true then
		if receiveMsg.FrameID > 200 then
			isNewFish = false
		end
	end
	
    -- 处理生成鱼
	if isNewFish == true then
    if receiveMsg.NewFish ~= nil and #receiveMsg.NewFish ~= 0 then
        local nn = 0
        for key, var in pairs(receiveMsg.NewFish) do
            -- print("收到服务器同步鱼数据 ID:" .. var.FishID .. " FishType:" .. var.FishType)

            if var.FishType > 1000 then
                fishManager.GenerateFishShoal(var)
            else
                fishManager.GenerateFish(var)
                if not IsRecoverRet then
                    local fishConfig = ByConfig.FishTable[var.FishType]
                    -- BOSS来临 播放背景音乐
					if fishConfig ~= nil then
						if fishConfig.musicbg ~= nil and fishConfig.musicbg ~= "" then
							G.Tool.Sound.PlayGameBGM(fishConfig.musicbg)
						end
					end
                end
            end
            nn = nn + 1
        end
        -- print("*************生成鱼nn = " .. nn)
	end
    end

    -- 处理捕中鱼
    if receiveMsg.Fish ~= nil and #receiveMsg.Fish ~= 0 then
        local data = { }
		
		local delayTime = 0
        --ShowTab("捕中鱼", receiveMsg.Fish)
        for key, var in pairs(receiveMsg.Fish) do			
            local fish = fishManager.GetFishByID(var.FishID)
            if fish ~= nil then
                for k, v in pairs(BulletList) do
                    if v ~= nil then
                        v.BulletSpr.RemoveLock(fish.FishServerID)
                    end
                end
            end
            local ll = { }
            ll.PlayerID = var.UserID
            ll.Money = var.Money
            ll.Type = var.Type
            ll.LuckyBonus = var.LuckyBonus
            ll.TeshuFishID = var.TeshuFishID
            if var.UserID == G.User.GetCurrentUserID() then
                showDesc = showDesc .. "\n捕鱼=" .. var.Money
            end
			
            if fish ~= nil then				
				--鱼死亡会化身为子弹
				fish.TurnIntoBullet(var.UserID)
				
				if var.Money == 0 then 
					if fish.FishID ~= 31 and fish.FishID ~= 32 and fish.FishID ~= 36 and fish.FishID ~= 41 then
						CS.UnityEngine.Debug.LogWarning("Money error fishID " .. fish.FishID .. ", Type " .. var.Type .. ", Money" .. var.Money)
					end
				end
				
                -- 电死的鱼死亡动画播放时间延迟
                if var.Type == 4 then
                    fish.Dead(2)
				-- 被炸彈炸死和一網打盡
                elseif var.Type == 3 or var.Type == 5 then
                    fish.Dead(1,true)
                elseif var.Type == 6 then
                    fish.Dead(1,true)
					AddAccReward(var.Money)
				-- 黑洞
                elseif var.Type == 7 then
					delayTime = fish.DeadBlackHole(var.UserID)
				else
					local fishType = GetFishTypeById(fish.FishID);
					-- 死亡类型为炸弹
					if fishType == 3 then
						if fish.FishID == 31 then
							fish.Dead(1.5)
						elseif fish.FishID == 41 then
							fish.Dead(2)
						end
					else
						fish.Dead(1)
					end
                end

                ll.FishID = fish.FishID
                ll.Pos = fish.GameObj.transform.position * uiFishMain.Tran_FishMain.localScale.x
                table.insert(data, ll)
            else
                --print("<color=red>鱼不存在,ID = " .. var.FishID .. "</color>")
                local user = GetIDToUser(var.UserID)
                if not IsRecoverRet then
                    AddUserMoney(user, var.Money, "捕到鱼")
                end
            end
        end
        if not IsRecoverRet then
            AcceptGetFish(data,delayTime)
        end
    end

    -- 处理锁定消息
    if receiveMsg.SuoDing ~= nil and #receiveMsg.SuoDing ~= 0 then
        if not IsRecoverRet then
            -- print("**************锁定消息")
            for key, var in pairs(receiveMsg.SuoDing) do
                uiFishMain.SetLock(var)
            end
        end
    end

    -- 处理破产消息
    if receiveMsg.PoChan ~= nil and #receiveMsg.PoChan ~= 0 then
        if not IsRecoverRet then
            -- print("**************破产消息")
            for key, var in pairs(receiveMsg.PoChan) do
                uiFishMain.SetPoChan(var, true)
            end
        end
    end

    -- 鱼潮来临通知
    if not IsRecoverRet and receiveMsg.advanceNoticeType ~= nil and receiveMsg.advanceNoticeType ~= 0 then
        if receiveMsg.advanceNoticeType == 1 then
            uiFishMain.ShowAdvanceNotice_WaveComing()
        end
    end
	
	if receiveMsg.IsFishWave == false then
		uiFishMain.HideWaveDoing()
	end

    -- 鱼潮来临
    if receiveMsg.fishWave.FishInfo ~= nil and #receiveMsg.fishWave.FishInfo ~= 0 then
        fishManager.BeginFishWave(receiveMsg.fishWave)
    end

    -- BOSS来临通知
    if not IsRecoverRet and receiveMsg.BossNear ~= nil and receiveMsg.BossNear ~= 0 then
        if receiveMsg.BossNear > 0 then
            uiFishMain.ShowAdvanceNotice_BOSSComing(receiveMsg.BossNear, receiveMsg.FishOdds / BaseScore)
        end
    end
		
    -- 特殊鱼来临通知
    if not IsRecoverRet and receiveMsg.TeshuNear ~= nil and receiveMsg.TeshuNear ~= 0 then
        if receiveMsg.TeshuNear > 0 then
            uiFishMain.ShowAdvanceNotice_SpecialComing(receiveMsg.TeshuNear, receiveMsg.FishOdds / BaseScore)
        end
    end
	
	 -- 魚膨脹
    if not IsRecoverRet and receiveMsg.FishSwell ~= nil then		
		--G.Tool.TableHelper.Print(receiveMsg.FishSwell)
		local fishID = receiveMsg.FishSwell.FishID
		local rate = receiveMsg.FishSwell.Rate
		fishManager.SetFishSwell(fishID,rate)
    end
	
    if not isMoneyUnequal and not IsRecoverRet and receiveMsg.UserInfo ~= nil and #receiveMsg.UserInfo ~= 0 then
        for key, var in pairs(receiveMsg.UserInfo) do
            local playerData = GetIDToUser(var.UserID)
			if playerData ~= nil then
				if var.UserMoney ~= playerData.User.Score then
					isMoneyUnequal = true
					
					playerData.User.Score = var.UserMoney
					uiFishMain.UpdatePlayerMoneyByNo(playerData.User.SeatNo)
					
					if var.UserID == G.User.GetCurrentUserID() then
						local ss = "<color=green>"
						ss = ss .. "receiveMsg.FrameID=" .. receiveMsg.FrameID
						ss = ss .. " 自己的钱"
						ss = ss .. " 服务器Money=" .. var.UserMoney
						ss = ss .. " 客户端Money=" .. playerData.User.Score
						ss = ss .. showDesc
						ss = ss .. "</color>"
						print(ss)
					else
						showDesc = ""
						local ss = "<color=green>"
						ss = ss .. "receiveMsg.FrameID=" .. receiveMsg.FrameID
						ss = ss .. " 别人的钱"
						ss = ss .. " 服务器Money=" .. var.UserMoney
						ss = ss .. " 客户端Money=" .. playerData.User.Score
						if receiveMsg.Shoot ~= nil and #receiveMsg.Shoot ~= 0 then
							if not IsRecoverRet then
								for key1, var1 in pairs(receiveMsg.Shoot) do
									if var1.UserID == var.UserID then
										showDesc = showDesc .. "\n打枪=" .. var1.BoomOdd
									end
								end
							end
						end
						for key1, var1 in pairs(receiveMsg.Fish) do
							if var1.UserID == var.UserID then
								showDesc = showDesc .. "\n捕鱼=" .. var1.Money
							end
						end
						ss = ss .. showDesc
						ss = ss .. "</color>"
						print(ss)
					end
				end
				-- 打死魚的所有總積分
				if var.GameCompetitionBonus ~= nil then
					uiFishMain.RefreshCompetitionBonus(var.GameCompetitionBonus)
				end
			end
        end
        if isMoneyUnequal then
			isMoneyUnequal = false
		
            print("<color=red>断线的第一帧BreakFirstFrameID = " .. BreakFirstFrameID .. "</color>")
            print("<color=red>开始游戏第一帧BeginFirstFrameID = " .. BeginFirstFrameID .. "</color>")
            print("<color=red>当前帧FrameID = " .. receiveMsg.FrameID .. "</color>")
        end
    end
end
 
G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game_BY.FrameS2CID, S2CFrameMessageHandle, groupName);

--遊戲類型是否可以射擊
local SetGameType = function(gameType)
	isGameType = gameType
end
--遊戲類型是否可以射擊
local GetGameType = function()
	return isGameType
end

--遊戲類型是否可以射擊
local SetCanShootState = function(state)
	canShootState = state
end
--遊戲類型是否可以射擊
local GetCanShootState = function()
	return canShootState
end

-- Client通知Server可以準備開始
local SendGameStart = function()
    G.NetQ.SendMsg(G.Proto.BClass.Game, G.Proto.Game_BY.BYGameStartC2SID, nil)
end
--Server通知Client可以開始
G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game_BY.BYGameStartS2CID, function(receiveMsg)
	uiFishMain.ShowStartGame()
end, groupName);

--比賽結束
G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game_BY.BYGameCompetitionEndID, function(receiveMsg)
	uiFishMain.ShowEndGame(receiveMsg.Score)
end, groupName);

-- 注册消息的处理方法
local function RegMsgHook()
    G.Service.Game.RegUserEnterMsg(CallUserEnter)
    G.Service.Game.RegUserStateChangeMsg(CallUserStateChange)
    G.Service.Game.RegGameStartMsg(CallGameStart)
    G.Service.Game.RegGameEndMsg(CallGameEnd)
    G.Service.Game.RegUserLeaveMsg(CallUserLeave)
    G.Service.Game.RegLookOnUserNotify(CallUserLook)

    -- 注册游戏场景初始化方法,只有在断线重连时有意义
    G.Service.Game.RegNotifyGameSceneInit( function() GameSceneDestory() end)
end

-- 动画管理 Sequence
local SequenceDict = { }
local autoSequenceKey = 1
GetSequence = function(key)
    if not key then
        key = "AutoSequenceKey_" .. autoSequenceKey
        autoSequenceKey = autoSequenceKey + 1
    end
    if not SequenceDict[key] then
        SequenceDict[key] = CS.DG.Tweening.DOTween.Sequence()
    else
        SequenceDict[key]:Kill()
        SequenceDict[key] = CS.DG.Tweening.DOTween.Sequence()
    end
    return SequenceDict[key]
end
KillSequence = function(key)
    if SequenceDict[key] then
        SequenceDict[key]:Kill()
    end
    SequenceDict[key] = nil
end
CloseSequence = function(key)
    for k, v in pairs(SequenceDict) do
        v:Kill()
    end
    SequenceDict = { }
    autoSequenceKey = 1
end

-- nmg10 todo
local BufCallUserEnter = function(data)
    CallUserEnter(data)
end
Call.BufCallUserEnter = BufCallUserEnter

local GameReady = function()		
	uiFishMain.InitBGAtlantis()
end

Call.AddAccReward = AddAccReward
Call.RemoveAccReward = RemoveAccReward
Call.GetAccReward = GetAccReward

Call.InitSetting = InitSetting

Call.ShowTab = ShowTab
Call.RegMsgHook = RegMsgHook
Call.InitModel = InitModel
Call.Close = Close
Call.GetSequence = GetSequence
Call.KillSequence = KillSequence
Call.CloseSequence = CloseSequence

Call.FrameUpdate = FrameUpdate
Call.CopyTable = CopyTable
Call.IsPlayerSeat = IsPlayerSeat
Call.GetPlayerData = GetPlayerData
Call.GetPlayerSeat = GetPlayerSeat
Call.GetSeatnoToUser = GetSeatnoToUser
Call.GetUserCount = GetUserCount
Call.GetSeatnoToPos = GetSeatnoToPos
Call.GetPosToSeatno = GetPosToSeatno
Call.IsRotationPlayer = IsRotationPlayer
Call.IsPlayerBullet = IsPlayerBullet
Call.GetIDToBullet = GetIDToBullet
Call.UpdateBulledID = UpdateBulledID
Call.GetLocalBulledMoney = GetLocalBulledMoney
Call.GetIDToUser = GetIDToUser
Call.Get2DToUIPoint = Get2DToUIPoint
Call.SetLockFishID = SetLockFishID
Call.RemoveLockFishID = RemoveLockFishID
Call.RemoveLockFishTypeID = RemoveLockFishTypeID
Call.GetGunPrefabName = GetGunPrefabName
Call.GetGunBgPrefabName = GetGunBgPrefabName
Call.GetBulletPrefabName = GetBulletPrefabName
Call.GetNetPrefabName = GetNetPrefabName
Call.InitUIFish = InitUIFish
Call.AddUserMoney = AddUserMoney
Call.DesUserMoney = DesUserMoney
Call.GetBlackHoldUserID = GetBlackHoldUserID

Call.SetUserGunLevel = SetUserGunLevel

Call.CalcLine2ToPos = CalcLine2ToPos

Call.GetPlayerSaveBulletData = GetPlayerSaveBulletData
Call.HasBulletData = HasBulletData
Call.AddBullet = AddBullet
Call.RemoveBullet = RemoveBullet
Call.CloseBullet = CloseBullet
Call.HideBullet = HideBullet
Call.SetCamera = SetCamera
Call.GetBulletNumber = GetBulletNumber
Call.PrintBulletData = PrintBulletData
Call.AcceptTriggerFish = AcceptTriggerFish
Call.AcceptGetFish = AcceptGetFish
Call.AcceptShoot = AcceptShoot
Call.SendTriggerFish = SendTriggerFish
Call.SendShoot = SendShoot

Call.SendGunBei = SendGunBei
Call.SendLock = SendLock
Call.SendIceSkill = SendIceSkill
Call.SendAllFish = SendAllFish

Call.SetNumBulletLimit = SetNumBulletLimit
Call.GetNumBulletLimit = GetNumBulletLimit
Call.SetBaseScore = SetBaseScore

Call.ClearBulletData = ClearBulletData
Call.SetBulletData = SetBulletData
Call.GetBulletDataByIdx = GetBulletDataByIdx
Call.GetBulletData = GetBulletData
Call.GetBulletBoomNumber = GetBulletBoomNumber
Call.GetBulletBoomUIType = GetBulletBoomUIType
Call.GetBulletShootInterval = GetBulletShootInterval
Call.GetBulletBoomSpeed = GetBulletBoomSpeed
Call.GetBulletBoomType = GetBulletBoomType
Call.GetBulletBoomRate = GetBulletBoomRate
Call.GetBulletRebound = GetBulletRebound
Call.GetBulletDirectShootTime = GetBulletDirectShootTime
Call.GetMinBulletData = GetMinBulletData
Call.GetFishBulletData = GetFishBulletData

Call.ClearIceData = ClearIceData
Call.GetIceData = GetIceData
Call.SetIceData = SetIceData

Call.ClearFishData = ClearFishData
Call.SetFishData = SetFishData
Call.GetFishSPBoomAreaById = GetFishSPBoomAreaById
Call.GetFishTypeById = GetFishTypeById
Call.GetFishRewardMaxById = GetFishRewardMaxById
Call.GetFishRewardMinById = GetFishRewardMinById

Call.AddFishDead = AddFishDead
Call.CheckFishDead = CheckFishDead

Call.SetAnnMeg = SetAnnMeg
Call.GetAnnMeg = GetAnnMeg

Call.ShowNotDoSomething = ShowNotDoSomething

Call.GetCoinPos = GetCoinPos

Call.GameReady = GameReady

Call.GetBoomAreaFishByFishID = GetBoomAreaFishByFishID


Call.SendGameStart = SendGameStart
Call.SetGameType = SetGameType
Call.GetGameType = GetGameType
Call.SetCanShootState = SetCanShootState
Call.GetCanShootState = GetCanShootState