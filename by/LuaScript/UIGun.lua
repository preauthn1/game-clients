local G = require "Global"
local Model = G.RequireG("FishModel")
local uiFishMain = G.RequireG("UIFishMain")

local Vector3 = CS.UnityEngine.Vector3
local Time = CS.UnityEngine.Time
local Mathf = CS.UnityEngine.Mathf
local Quaternion = CS.UnityEngine.Quaternion
local fishManager = G.RequireG("Fish/FishManager")

-- 方法
local Rotate
local GetCooldown

-- UI
local GunAnim
local Gun-- 枪
local GunOpen-- 枪口
local shootAnim
-- 数据
local pojectName = G.GetGamePName()
local RotateSpeed = 60-- 角度/秒
local RotateRange = 180-- 角度
local RotateState = { }-- 枪的旋转状态
RotateState.Idle = 0-- 不转
RotateState.Left = 1-- 左转
RotateState.Right = 2-- 右转
local ControlMode = { }-- 枪的瞄准状态
ControlMode.Manual = 0-- 手动
ControlMode.Auto = 1-- 自动
local Rotatable = true-- 是否可转动
local mRotateState = RotateState.Idle-- 当前状态
local mControlMode = ControlMode.Manual-- 当前枪的瞄准状态
local isUse = true-- 是否可以使用(目前仅自己可用)
local mLastFireTime = 0-- 最后一次发炮的时间
local seatno = -1-- 枪的拥有者座位号
local isFinishShoot = false-- 上一发炮弹是否发射完成
-- 锁定攻击相关
local isLockShoot = false-- 是否是锁定攻击
local directShootTime = -1
local blackholeFishID = -1
local sequenceBlackhole = nil
local baseScaleBlackHole = nil

-- 日志
local log01 = ""
local log02 = ""
function Init(data)
    seatno = data.seatno or -1
    isUse = data.isUse or false
	
	HereEffect.gameObject:SetActive(data.isUser)
	
	SetBlackHoleActive(false,blackholeFishID)
end

function Start()
end
function Awake()
    mControlMode = ControlMode.Manual
    mRotateState = RotateState.Idle
    isLockShoot = false
    mLastFireTime = 0

    GunAnim = this.transform:Find("GunAnim")
    Gun = this.transform:Find("GunAnim/Gun")
    GunOpen = this.transform:Find("GunAnim/Gun/GunOpen")
    shootAnim = Gun.gameObject:GetComponent("Animator")
	AutoEffect = this.transform:Find("AutoEffect")
	HereEffect = this.transform:Find("HereEffect")
	BlackHole = this.transform:Find("BlackHole")
	baseScaleBlackHole = BlackHole.transform.localScale
    GunAnim.transform.localRotation = Quaternion.Euler(0, 0, 0)
end
function GetPosition()
	return Gun.transform.position
end
-- 取得黑洞位置
function GetBlackHolePosition()
	return BlackHole.transform.position
end
-- 设置黑洞显示
function SetBlackHoleActive(active,fishID)
	if active == true then
		blackholeFishID = fishID
		BlackHole.gameObject:SetActive(true)
		
		if sequenceBlackhole ~= nil then
			sequenceBlackhole:Kill()
		end
		
		local sequence = CS.DG.Tweening.DOTween.Sequence()
		sequence:Append(BlackHole.transform:DOScale(baseScaleBlackHole,0))
		
	elseif blackholeFishID == fishID then
		if sequenceBlackhole ~= nil then
			sequenceBlackhole:Kill()
		end
		
		sequenceBlackhole = CS.DG.Tweening.DOTween.Sequence()
		sequenceBlackhole:AppendInterval(0.25)
		sequenceBlackhole:Append(BlackHole.transform:DOScale(CS.UnityEngine.Vector3.zero,0.5))
		sequenceBlackhole:AppendCallback( function()	
			BlackHole.transform.localScale = baseScaleBlackHole
			BlackHole.gameObject:SetActive(false)
			sequenceBlackhole:Kill()
			sequenceBlackhole = nil
		end)		
	end
end

function FrameUpdate()
    if not isUse then
        return
    end
	
	if directShootTime > 0 then
	    if (CS.UnityEngine.Time.realtimeSinceStartup - mLastFireTime) > directShootTime then
			DirectShoot()
			return
		end
	end
	
    -- 自动锁定
    if isLockShoot then
		--[[
        if Model.LockFishID <= 0 then
            local fish = fishManager.GetMaxScorePoolFish()
            if fish ~= nil then
                Model.Call.SetLockFishID(fish)
            end
        end
		]]--
		
		
		-- 目前鎖定的魚已經死了
		if Model.LockFishID <= 0 then
			local fish = nil
			-- 前一個魚有鎖定
			if Model.LockFishTypeID > 0 then
				-- 找同類型最近的魚
				fish = fishManager.GeSameNearPoolFish(Model.LockFishTypeID,  this.transform.position)
			end
			-- 沒找到魚，找積分最大的魚
			if fish == nil then
				fish = fishManager.GetMaxScorePoolFish()
			end			
            if fish ~= nil then
                Model.Call.SetLockFishID(fish)
            end			
		end
		
        if Model.LockFishID > 0 then
            local fish = fishManager.GetFishByID(Model.LockFishID)
            if not fish then
                Model.Call.RemoveLockFishID()
                return
            end
            local d = { }
            d.Fish = fish
            d.ID = Model.LockFishID
            uiFishMain.ShowLockFish(true, fish.GameObj, fish)
            --if mControlMode == ControlMode.Auto then
            -- 锁定就自动攻击
				LockShoot(d)
            --end
        end
    elseif mControlMode == ControlMode.Auto then
        AutoShoot()
    end
end

function IsCanSoot()
	local v = Model.Call.GetPlayerData()
	local BoomType = Model.Call.GetBulletBoomType(v.gunLevel)
	
	if BoomType == 3 then
		return false
	end
	
	return true
end

-- 自动开枪
function AutoShoot()
	-- 類型3的槍略過自動
	if IsCanSoot() == false then
		return
	end

    local rr = GunAnim.transform.localEulerAngles.z + 90

    if Model.Call.IsRotationPlayer() then
        rr = rr + 180
    end

    local vec = Vector3(math.cos(rr * Mathf.Deg2Rad), math.sin(rr * Mathf.Deg2Rad), 0)
    local dirVec = vec
    SendShoot(dirVec, true)
end
-- 直接开枪
function DirectShoot()
    local rr = GunAnim.transform.localEulerAngles.z + 90

    if Model.Call.IsRotationPlayer() then
        rr = rr + 180
    end

    local vec = Vector3(math.cos(rr * Mathf.Deg2Rad), math.sin(rr * Mathf.Deg2Rad), 0)
    local dirVec = vec
    SendShoot(dirVec, true)
end
-- 手动开枪
function ManualShoot(vec)
    local dirVec
    local gunP = Gun.transform.position

    if Model.Call.IsRotationPlayer() then
        if vec.y > gunP.y then
            vec.y = gunP.y
        end
    else
        if vec.y < gunP.y then
            vec.y = gunP.y
        end
    end

    local p =(vec - gunP)
    dirVec = p.normalized
	
	local v = Model.Call.GetPlayerData()
	local BoomType = Model.Call.GetBulletBoomType(v.gunLevel)
	-- 類型3的槍在自動射擊下,必須以自動方式射擊
	if BoomType == 3 then
		if mControlMode == ControlMode.Auto then
			SendShoot(dirVec, true)
		else
			SendShoot(dirVec, false)		
		end
	else
		SendShoot(dirVec, false)
	end
end
-- 锁定攻击
function LockShoot(data)
	-- 類型3的槍略過自動
	if IsCanSoot() == false then
		return
	end
	
    local gunP = Gun.transform.position
    local p = data.Fish.GameObj.transform.position - gunP
    dirVec = p.normalized

    SendShoot(dirVec, true, data.ID)
end
-- 方向
function GetDirection()
    return GunAnim.transform.rotation
end
-- 发送开枪消息
function SendShoot(vec, auto, FishID)
	local p = Model.Call.GetSeatnoToPos(seatno)
	local fishBulletData = uiFishMain.GetUIPlayer(p):GetBulletBelt()
	--破產且沒有免費子彈
	if Model.IsPoChanOnce == true then
		if isFinishShoot then
			if fishBulletData == nil then
				return
			end
		end
	end
    local dirVec = vec
    -- 射击指令来源与当前射击状态不一致
    if not auto and mControlMode == ControlMode.Auto then
        local r = Mathf.Atan2(dirVec.y, dirVec.x) * Mathf.Rad2Deg

        GunAnim.transform.rotation = Quaternion.Euler(0, 0, r - 90)
        return
    end
    if (CS.UnityEngine.Time.realtimeSinceStartup - mLastFireTime) < GetCooldown() then
        local r = Mathf.Atan2(dirVec.y, dirVec.x) * Mathf.Rad2Deg
        GunAnim.transform.rotation = Quaternion.Euler(0, 0, r - 90)
        return
    end
	NumBulletLimit = Model.Call.GetNumBulletLimit()
    if NumBulletLimit > 0 and Model.Call.GetBulletNumber() >= NumBulletLimit then
        local r = Mathf.Atan2(dirVec.y, dirVec.x) * Mathf.Rad2Deg
        GunAnim.transform.rotation = Quaternion.Euler(0, 0, r - 90)
        return
    end
    local user = Model.Call.GetSeatnoToUser(seatno)
	
	-- 更换枪，沒子彈
	if fishBulletData == nil and Model.Call.GetFishBulletData(user.gunLevel) ~= nil then
		return
	end
	-- 破产
	if uiFishMain.GetUIPlayer(p):GetPoChan() == true then
		return
	end	
	-- 黑洞出現
	if Model.Call.GetBlackHoldUserID() == G.User.GetCurrentUserID() then
        return
    end	
	--遊戲狀態是否可以射擊
	if  Model.Call.GetCanShootState() == false then
		return
	end
    -- 场上有子弹，但是没有钱
    if Model.Call.GetBulletNumber() > 0 and user.User.Score == 0 then
        return
    end
    -- 验证还未被服务器认可的子弹
    local localMoney = Model.Call.GetLocalBulledMoney()
    -- 已经没有钱了(如果服务器能收到我发送的子弹)
    if localMoney > 0 and(user.User.Score - localMoney) <= 0 then
        return
    end
    -- 是否破产
    local isPC = false
    -- 当前剩余钱不足，看能否降低炮台倍率
    if (user.User.Score - localMoney - Model.Call.GetBulletBoomRate(user.gunLevel)) < 0 then
        local isDown = false
        for i = user.gunLevel - 1, 1, -1 do
            if (user.User.Score - localMoney - Model.Call.GetBulletBoomRate(i)) >= 0 then
                Model.Call.SendGunBei(i)
                isDown = true
                break
            end
        end
        -- 不能降低
        if not isDown then
            isPC = true
        end
    end

    log01 = "Score=" .. user.User.Score .. " localMoney=" .. localMoney .. " BulledNum=" .. Model.Call.GetBulletNumber()
    if isPC then
        log01 = log01 .. " 判断为 有 破产"
        print("<color=red>log01=" .. log01 .. "</color>")
    else
        log01 = log01 .. " 判断为 没有 破产"
    end
    log02 = "发送时间=" .. os.date("%H:%M:%S", os.time())
	if Model.IsPoChanOnce == true then
		isFinishShoot = true
	end
    local data = { }
    data.Pos = { }
    data.Pos.x = dirVec.x
    data.Pos.y = dirVec.y
    if FishID then
        data.FishID = FishID
    end
	
	-- 发射子弹
    Model.Call.SendShoot(data, isPC)
end
-- 开枪
function Shoot(data)
    log01 = ""
    local r = Mathf.Atan2(data.Pos.y, data.Pos.x) * Mathf.Rad2Deg
    GunAnim.transform.rotation = Quaternion.Euler(0, 0, r - 90)    
    uiFishMain.CreateBullet(data)
	
	if Model.IsPoChanOnce == true then
		isFinishShoot = false
	end
	
    if G.User.GetCurrentUserID() == data.UserID then
        G.Tool.Sound.PlayGameSound("gunshot")
    end
    shootAnim:Play("ShootAnim", 0, 0)
    mLastFireTime = CS.UnityEngine.Time.realtimeSinceStartup
end
function ResetFireTime()
	mLastFireTime = CS.UnityEngine.Time.realtimeSinceStartup
end
GetCooldown = function()
    local user = Model.Call.GetSeatnoToUser(seatno)
    return Model.Call.GetBulletShootInterval(user.gunLevel)
end
function GetBulletPos()
    return GunOpen.transform.position
end

function SetGunChild(child)
	child.transform:SetParent(GunOpen.transform)
end 

-- 停止旋转
function StopRotate()
    mRotateState = RotateState.Idle
end
-- 旋转
function RotateTo(isLeft)
    if mRotateState == RotateState.Left or mRotateState == RotateState.Right then
        -- return
    end
    if isLeft then
        mRotateState = RotateState.Left
    else
        mRotateState = RotateState.Right
    end
    Rotate(isLeft)
end
-- 转向
Rotate = function(isLeft)
    local direct = -1
    if isLeft then
        direct = 1
    end
    local rotateRrangeHalf = RotateRange * 0.5
    GunAnim.transform:Rotate(Vector3.forward, direct * Time.deltaTime * RotateSpeed)
    if GunAnim.transform.localEulerAngles.z > rotateRrangeHalf and GunAnim.transform.localEulerAngles.z <(360 - rotateRrangeHalf) then
        if direct > 0 then
            GunAnim.transform:Rotate(Vector3.forward, -1 *(GunAnim.transform.localEulerAngles.z - rotateRrangeHalf))
        else
            GunAnim.transform:Rotate(Vector3.forward,(360 - rotateRrangeHalf - GunAnim.transform.localEulerAngles.z))
        end
    end
end
-- 设置是否自动
function SetAuto(b)
    if b then
        mControlMode = ControlMode.Auto
    else
        mControlMode = ControlMode.Manual
    end
end
-- 设置锁定攻击
function SetLock(b)
    if b then
        isLockShoot = b
    else
        isLockShoot = b
    end
	
	AutoEffect.gameObject:SetActive(b)
end

function SetDirectShootTime(Time)
	directShootTime = Time
end

function OnDestroy()
end
-- 子弹发射不出去的原因
function ToString()
    print("<color=red>上一发子弹="..log01.."</color>")
    print("<color=red>"..log02.."</color>")
	if Model.IsPoChanOnce == true then
		if isFinishShoot then
			print("<color=red>上一发炮弹发射未完成</color>")
		end
	end
    if (CS.UnityEngine.Time.realtimeSinceStartup - mLastFireTime) < GetCooldown() then
        print("<color=red>发射冷却中</color>")
        local s = CS.UnityEngine.Time.realtimeSinceStartup .. "  " .. mLastFireTime .. " " ..(CS.UnityEngine.Time.realtimeSinceStartup - mLastFireTime)
        print("<color=red>" .. s .. "</color>")
    end
	NumBulletLimit = Model.Call.GetNumBulletLimit()
    if NumBulletLimit > 0 and Model.Call.GetBulletNumber() >= NumBulletLimit then
        print("<color=red>子弹达到上限</color>")
        print("<color=red>数量=" .. Model.Call.GetBulletNumber() .. "</color>")
    end
    local user = Model.Call.GetSeatnoToUser(seatno)
    if Model.Call.GetBulletNumber() > 0 and user.User.Score == 0 then
        print("<color=red>场上有子弹，但是目前身上没钱</color>")
    end
    local user = Model.Call.GetSeatnoToUser(seatno)
    -- 场上有子弹，但是没有钱
    if Model.Call.GetBulletNumber() > 0 and user.User.Score == 0 then
        print("<color=red>场上有子弹，但是没有钱</color>")
    end
    -- 验证还未被服务器认可的子弹
    local localMoney = Model.Call.GetLocalBulledMoney()
    -- 已经没有钱了(如果服务器能收到我发送的子弹)
    if localMoney > 0 and(user.User.Score - localMoney) <= 0 then
        print("<color=red>已经没有钱了(如果服务器能收到我发送的子弹)</color>")
    end
    -- 是否破产
    local isPC = false
    -- 当前剩余钱不足，看能否降低炮台倍率
    if (user.User.Score - localMoney - Model.Call.GetBulletBoomRate(user.gunLevel)) < 0 then
        local isDown = false
        for i = user.gunLevel - 1, 1, -1 do
            if (user.User.Score - localMoney - Model.Call.GetBulletBoomRate(i)) >= 0 then
                Model.Call.SendGunBei(i)
                isDown = true
                break
            end
        end
        -- 不能降低
        if not isDown then
            isPC = true
            print("<color=red>不能降低</color>")
        end
    end
    print("Score=" .. user.User.Score .. " localMoney=" .. localMoney .. " BulledNum=" .. Model.Call.GetBulletNumber())
    Model.Call.PrintBulletData()
end