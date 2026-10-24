local G = require "Global"
local Model = G.RequireG("FishModel")
local uiFishMain = G.RequireG("UIFishMain")
local fishManager = G.RequireG("Fish/FishManager")

local Vector3 = CS.UnityEngine.Vector3
local Time = CS.UnityEngine.Time
local Mathf = CS.UnityEngine.Mathf
local Quaternion = CS.UnityEngine.Quaternion
local GameObject = CS.UnityEngine.GameObject

-- 接收消息table
local pojectName = G.GetGamePName()
local seatno--座位号
local bulletID--子弹ID
local fishList = { }--碰撞到的鱼列表
local hitFishList = {}--子彈碰撞到的鱼列表(不分玩家)
local isShowFishList = false--是否发送碰撞的鱼列表，字段添加的原因：OnTriggerEnter2D会在一帧执行多次(碰撞多条鱼)

local bufRota--子弹角度
local lineType = 0-- 0无 1上 2下 3左 4右
local LockFishID = nil--锁定的鱼的ID
local IsRobot = false--是否是机器人的子弹
local m_UserID--用户ID
local BoomNumber = 0 -- 子彈編號
local BoomSpeed = 0
local reboundCount = -1 --子弹还可反弹的次数 -1无次数限制 >=0次数限制
local reboundLimit = false --子弹反弹次數限制
local expParticleSystem = nil
local BoomType = 1
local LiveTime = -1 -- 子彈生存時間
local DelayInvokeID = -1
local gs = nil

function Init(data)
    bufRota = data.roat
    seatno = data.pSeatno
    bulletID = data.id
    isShowFishList = false
    IsRobot = data.IsRobot
    m_UserID = data.UserID
	BoomNumber = data.BoomNumber
	AccReward = 0
	gs = data.gs
	
	BoomSpeed = Model.Call.GetBulletBoomSpeed(BoomNumber)
	--reboundCount = Model.Call.GetBulletRebound(BoomNumber)	
	--reboundLimit = (reboundCount >= 0)
	BoomType = Model.Call.GetBulletBoomType(BoomNumber)
	
	LiveTime = Model.Call.GetBulletRebound(BoomNumber)
	if LiveTime > 0 then		
		DelayInvokeID = 1
		gs:InvokeRepeating(DestroyBullet, LiveTime, LiveTime)
	else
		DelayInvokeID = -1
	end

	reboundLimit = (LiveTime >= 0)
	--CS.UnityEngine.Debug.LogWarning("bulletID...".. bulletID .. "//reboundCount"..reboundCount)
	
	if reboundLimit == false then
		if data.FishID > 0 then
			LockFishID = data.FishID
		else
			LockFishID = nil
		end
	end
	
	if sequenceRotate ~= nil then
		sequenceRotate:Kill()
		sequenceRotate = nil
	end
	
	local rotateObj = this.transform:Find("Rotate")
	if rotateObj ~= nil then
		sequenceRotate = CS.DG.Tweening.DOTween.Sequence()
		sequenceRotate:SetLoops(-1,CS.DG.Tweening.LoopType.Restart)
		sequenceRotate:Append(rotateObj.transform:DOLocalRotate(CS.UnityEngine.Vector3(0,0,180),0.01))
		sequenceRotate:Append(rotateObj.transform:DOLocalRotate(CS.UnityEngine.Vector3(0,0,360),0.01))
	end
	
	local object = this.transform:Find("ExpEffect")
	if object ~= nil then
		expParticleSystem = object:GetComponent("ParticleSystem")
		if expParticleSystem ~= nil then
			expParticleSystem:Stop()
		end
	end
end

function Start()
end
-- 被锁定的鱼死亡，取消锁定
function RemoveLock(fishID)
    if LockFishID and tonumber(LockFishID) == tonumber(fishID) then
        LockFishID = nil
    end
end
function GetLockFishID()
    return LockFishID
end
-- 更新子弹的ID，客户端先创建自己的子弹，再发送消息给服务器，等服务器返回子弹ID再做更新。优化子弹发射卡顿问题。
function SetBulledData(data)
    bulletID = data.BoomID
	BoomType = data.BoomType
	--print("SetBulledData bulletID"..bulletID.. "//BoomNumber"..BoomNumber .."//BoomType"..BoomType )
end

function Boom()
	if DelayInvokeID > 0 then
		gs:CancelInvokeRepeat(DestroyBullet)
		DelayInvokeID = -1
	end
	
	BoomZhadan()
end

function HideBullet(ID)
	Model.Call.HideBullet(ID)
end

function CloseBullet(ID)	
	local data = { }
	data.BoomID = ID
	Model.Call.AcceptTriggerFish(data)
end

function BoomZhadan()
	if BoomType == 3 then
		G.Tool.Sound.PlayGameSound("s_zhadan")
		
		local pos = this.transform.position + this.transform.up * 0.5
		local fishDeadEffect = CS.FrameWork.ObjectPoolManager.Instance:Get("Exp_Wave_05")
		if fishDeadEffect ~= nil then
			fishDeadEffect.transform.position = Model.Call.Get2DToUIPoint(pos)
			fishDeadEffect:SetActive(true)			
			
			local sequence = Model.Call.GetSequence()
			sequence:AppendInterval(2.0)			
			sequence:AppendCallback( function()
				CS.FrameWork.ObjectPoolManager.Instance:Release("Exp_Wave_05", fishDeadEffect)
			end )
		end
	
		local accReward = Model.Call.GetAccReward()
		local data = {}
		data.PlayerID = m_UserID
		data.Type = 6
		uiFishMain.BoomEffect(data, Model.Call.GetAccReward())
		Model.Call.RemoveAccReward()
	end	
end

function SendTriggerFish(isDel)
	-- 核彈魚額外傳目前畫面上的魚,核彈魚會不會死取決於畫面上的魚
	local allFish = nil
	for k,v in ipairs(hitFishList) do
		if v.FishID == 41 then
			allFish = Model.Call.GetBoomAreaFishByFishID(41, CS.UnityEngine.Vector3(0,0,0))
		end
	end

	Model.Call.SendTriggerFish( { UserID = m_UserID, id = bulletID, fishS = fishList }, isDel, allFish)
	fishList = { }
end

function DestroyBullet()
	HideBullet(bulletID)
	
	if Model.Call.GetPlayerSeat() == seatno then
		-- 刪除反彈子彈
		SendTriggerFish(1)
	
		--CloseBullet(bulletID)
		--更换枪
		local ReBoomNumber = CS.UnityEngine.PlayerPrefs.GetInt("MyBYGunLevel", BoomNumber)
		--CS.UnityEngine.Debug.LogWarning("ReBoomNumber "..ReBoomNumber.."//BoomNumber "..BoomNumber)
		Model.Call.SendGunBei(ReBoomNumber)
	end
end

--指定子弹剩余反弹次数
function SetReboundCount(_count)
	--CS.UnityEngine.Debug.LogWarning("SetReboundCount..." .._count)
	reboundCount = _count
	--子弹反弹次数限制
	if reboundLimit == true then
		if reboundCount < 0 then
			DestroyBullet()
		else
			uiFishMain.ShakeCamera()
		end
	end
end

function FrameUpdate()

    if isShowFishList then
        isShowFishList = false
		
		-- 子弹反弹次数限制
		if reboundLimit == false then
			SendTriggerFish(1)
			HideBullet(bulletID)
		-- 子彈會反彈
		else
			SendTriggerFish(0)
		end
		
        return
    end
	
    -- 锁定并跟踪鱼
    if LockFishID then
        local fish = fishManager.GetFishByID(LockFishID)
        if fish then
            local dirVec = fish.GameObj.transform.position - this.transform.position
            local r = Mathf.Atan2(dirVec.y, dirVec.x) * Mathf.Rad2Deg
            this.transform.rotation = Quaternion.Euler(0, 0, r - 90)
        else
            LockFishID = nil
        end
    end
    this.transform.localPosition = this.transform.localPosition + this.transform.up * Model.Defines.FrameTime * BoomSpeed

    -- 子弹两帧都在某一边外边是因为在四个角的位置有可能出现子弹同时超过两边的坐标，这样下一帧折射回来的时候就还会在某一边的外
    if this.transform.localPosition.x > Model.Defines.WorldDimensionUnit.xMax or this.transform.localPosition.x < Model.Defines.WorldDimensionUnit.xMin then
	
		if this.transform.localPosition.x > Model.Defines.WorldDimensionUnit.xMax * 2 or this.transform.localPosition.x < Model.Defines.WorldDimensionUnit.xMin * 2 then
            print("<color=red>強制回收流浪的子彈</color>")
			HideBullet(bulletID)
			CloseBullet(bulletID)
			return
		end
	
        LockFishID = nil
        -- 碰撞四周后取消锁定
        if (this.transform.localPosition.x > Model.Defines.WorldDimensionUnit.xMax and lineType == 1) or
            (this.transform.localPosition.x < Model.Defines.WorldDimensionUnit.xMin and lineType == 2) then
            -- print("<color=red>同一边碰撞了2次及以上</color>")
            return
        end
        if this.transform.localPosition.x > Model.Defines.WorldDimensionUnit.xMax then
            lineType = 1
        end
        if this.transform.localPosition.x < Model.Defines.WorldDimensionUnit.xMin then
            lineType = 2
        end
        bufRota = - bufRota
        this.transform.rotation = Quaternion.Euler(0, 0, bufRota)
		
		-- 指定子弹剩余反弹次数
		--SetReboundCount(reboundCount-1)		
		if reboundLimit == true then
			uiFishMain.ShakeCamera()
		end
        return
    end
    if this.transform.localPosition.y > Model.Defines.WorldDimensionUnit.yMax or this.transform.localPosition.y < Model.Defines.WorldDimensionUnit.yMin then
	
		if this.transform.localPosition.y > Model.Defines.WorldDimensionUnit.yMax * 2 or this.transform.localPosition.y < Model.Defines.WorldDimensionUnit.yMin * 2 then
            print("<color=red>強制回收流浪的子彈</color>")
			HideBullet(bulletID)
			CloseBullet(bulletID)
			return
		end	
	
        LockFishID = nil
        -- 碰撞四周后取消锁定
        if (this.transform.localPosition.y > Model.Defines.WorldDimensionUnit.yMax and lineType == 4) or
            (this.transform.localPosition.y < Model.Defines.WorldDimensionUnit.yMin and lineType == 3) then
            -- print("<color=red>同一边碰撞了2次及以上</color>")
            return
        end
        if this.transform.localPosition.y > Model.Defines.WorldDimensionUnit.yMax then
            lineType = 4
        end
        if this.transform.localPosition.y < Model.Defines.WorldDimensionUnit.yMin then
            lineType = 3
        end
        bufRota = 180 - bufRota
        this.transform.rotation = Quaternion.Euler(0, 0, bufRota)
		
		-- 指定子弹剩余反弹次数
		--SetReboundCount(reboundCount-1)		
		if reboundLimit == true then
			uiFishMain.ShakeCamera()
		end
        return
    end
end

function OnTriggerEnter(collision)
	OnTriggerEnter2D(collision)
end

-- 一个子弹可以同时碰撞多个鱼
function OnTriggerEnter2D(collision)
    local fish = fishManager.FishTable[tonumber(collision.transform.parent.parent.parent.gameObject.name)]
	if fish == nil then
		return
	end
	
	-- 避免同一發子彈打到好幾次
	local isInclude = false
	for k,v in ipairs(hitFishList) do
	  if v == fish.FishServerID then
		  isInclude =  true
	  end
	end
	
	if isInclude == false then		
		table.insert(hitFishList, fish)
	end	
		
	-- 不是机器人的子弹，也不是自己的子弹
    if not IsRobot and not Model.Call.IsPlayerBullet(bulletID) then
        local user = Model.Call.GetIDToUser(m_UserID)
        if not user then
            -- 用户不存在，子弹在客户端爆炸掉。
            local data = { }
            data.BoomID = bulletID
            Model.Call.AcceptTriggerFish(data)
        else
            -- 不是别的玩家锁定的鱼，不处理
            if fish and LockFishID and tonumber(LockFishID) ~= tonumber(fish.FishServerID) then
                return
            end
			
			--子弹反弹次数限制
			if reboundLimit == false then
				HideBullet(bulletID)
				--CS.UnityEngine.Debug.LogWarning("OnTriggerEnter2D HideBullet"..bulletID)
			end			
        end
		
		fish.Hit()
		
        return
    end
	
	
	-- 不是自己锁定的鱼，不处理
	if LockFishID and tonumber(LockFishID) ~= tonumber(fish.FishServerID) then
		return
	end
	
	fish.Hit()	
	
	-- 鑽頭子彈只會打到類型1的魚
	if BoomType == 3 then
		if fish.fishType ~= 1 then
			return
		end
	end	
	
	-- 避免同一發子彈打到自己好幾次
	local is_include = false
	for k,v in ipairs(fishList) do
	  if v == fish.FishServerID then
		  is_include =  true
	  end
	end
	
	if is_include == false then		
		table.insert(fishList, fish.FishServerID)
	end
	
	isShowFishList = true
end

function CheckIsInList(FishID)
	for k,v in ipairs(hitFishList) do
		if v.FishID == FishID then
			return true
		end
	end
	return false
end

function OnDestroy()
    Model.Call.RemoveBullet(bulletID)
end