-- 鱼管理器
require("Module")
mmodule(...)

local G = require "Global"
local Model = G.RequireG("FishModel")
local ByConfig = G.RequireG("ByConfig");
local AI_FreeSwim = G.RequireG("Fish/AI_FreeSwim");
local AI_PathSwim = G.RequireG("Fish/AI_PathSwim");
local Fish = G.RequireG("Fish/Fish");

local gameStart;
local groupName = G.GetGamePName()

FishTable = { };
FishNodeTran = { };

function Init(_gameStart, _fishNodeTran)
    FishTable = { };
    FishNodeTran = { };
	
    FishNodeTran = _fishNodeTran
    gameStart = _gameStart
end
 
local waveScript
local waveIns

function CreatePool(poolName, initSize, maxSize, prefabName)
	if CS.FrameWork.ObjectPoolManager.Instance:GetPool(poolName) == nil then
		local prefab = CS.AssetBundleManager.Instance:LoadGameObject(groupName, prefabName, false)
		CS.FrameWork.ObjectPoolManager.Instance:CreatePool(poolName, initSize, maxSize, prefab)
		return true
	else
		return false
	end
end

function CreateFishPool(fishID, initSize)
	local fishConfig = ByConfig.FishTable[tonumber(fishID)]
	if fishConfig == nil then
		return
	end
		
	-- 用于显示鱼死亡特效
	if fishConfig.deadEffect > 0 then
		local EffectName = "DeadEff_" ..tostring(fishConfig.deadEffect)
		CreatePool(EffectName, 5, 10, EffectName)
	end			
		
	-- 載入魚會用到的特效
	if fishID == "36" then
		CreatePool("Exp_Wave_05", 3, 5, "Exp_Wave_05")
	elseif fishID == "42" then
		CreatePool("Black_Hole", 3, 5, "Black_Hole")				
	end
	
	-- 載入model
	local fishModel = fishConfig.modelName
	if fishModel == "" or fishModel == nil then
		fishModel = fishID
		initSize = 1
	end
	local result = CreatePool("Fish_" .. fishID, initSize, initSize + 5, "Fish_" .. fishModel)
	return result
end

function GetFish(FishID)
	if CS.FrameWork.ObjectPoolManager.Instance:GetPool("Fish_" .. FishID) == nil then
		CreateFishPool(FishID, 1)
	end
	fishIns = CS.FrameWork.ObjectPoolManager.Instance:Get("Fish_" .. FishID)
	
	return fishIns
end

function GenerateFish(fishInfo)
    -- 鱼潮结束后收到第一个鱼作为，鱼潮结束的标志
    if waveScript ~= nil then
        EndFishWave()
    end

	--fishInfo.FishType = 41
	
	if Model.Call.CheckFishDead(fishInfo.FishID) == false then
		local fishIns = GetFish(fishInfo.FishType)
		if fishIns == nil then
			print("!!!!!!!!!!!!!!!!!!!!! can not find fish " .. "Fish_" .. fishInfo.FishType)
			return
		end
		
		fish = Fish.New(fishInfo.FishType, fishInfo.FishID, fishIns, 0)
	
		FishTable[fishInfo.FishID] = fish;
		
		local fishConfig = ByConfig.FishTable[fishInfo.FishType];
		
		--fishConfig.aiType = "path1"
		if fishConfig.aiType == "" then
			-- 鱼游动旋转方式 1：正常旋转 2：不旋转
			--fishConfig.swimRotationType = 2	
			fish.SetMoveSequence(AI_FreeSwim.DoFreeSwim(fish, fishIns))
		elseif fishConfig.aiType ~= "" then
			fish.SetMoveSequence(AI_PathSwim.DoPathSwim(fish, fishIns))
		end
	end
end

function GenerateFishShoal(shoalInfo)
    if waveScript ~= nil then
        EndFishWave()
    end
	
    -- 实例化鱼群
    local shoalObj = CS.AssetBundleManager.Instance:LoadGameObject(groupName, "FishShoal_" .. shoalInfo.FishType)
    local shoalIns = CS.UnityEngine.GameObject.Instantiate(shoalObj);
    shoalIns.transform:SetParent(FishNodeTran);
    shoalIns.transform.localPosition = CS.UnityEngine.Vector3.zero
    shoalIns.transform.localScale = CS.UnityEngine.Vector3.one;
    shoalIns.transform.localEulerAngles = CS.UnityEngine.Vector3.zero

	local interval = 0.5
    for k, v in pairs(ByConfig.FishShoalTable) do
		if v.shoalId == shoalInfo.FishType then
			interval = v.interval
			break;
		end
	end
		
		
    shoalScript = shoalIns:AddScriptComponent(groupName, "Fish/FishShoal")
    shoalScript.Init(shoalInfo.FishType, shoalInfo.FishID, interval, shoalInfo.FishNumber, shoalInfo.FishCount)
end

function FrameUpdate()
    for k, v in pairs(FishTable) do
        if v ~= nil then
            v.FrameUpdate()
        end
    end
end 
 
-- 获得所有鱼池内所有鱼的ServerID
function GetAllPoolFishID()
    local rtnTable = { }

    -- 循环所有鱼
    for k, v in pairs(FishTable) do
        if v ~= nil and v.CheckIsInPool() then
            table.insert(rtnTable, k)
        end
    end

    return rtnTable
end

-- 获得所有鱼池内所有鱼的ServerID
function GetAllFishID()
    local rtnTable = { }

    -- 循环所有鱼
    for k, v in pairs(FishTable) do
        if v ~= nil then
            table.insert(rtnTable, k)
        end
    end

    return rtnTable
end

-- 获得所有鱼池范围内所有鱼的ServerID
function GetWithinRangeFishID(pos,range)
    local rtnTable = { }
	local range = (Model.Defines.WorldDimensionMax_x - Model.Defines.WorldDimensionMin_x)/range
	pos.z = 0
	
    -- 循环所有鱼
    for k, v in pairs(FishTable) do
        if v ~= nil then
			local targetPos = v.GameObj.transform.position
			targetPos.z = 0
			local dis = CS.UnityEngine.Vector3.Distance(pos, targetPos)
			if dis <= range then
				table.insert(rtnTable, k)
			end
        end
    end

    return rtnTable
end

-- 设置鱼的冰冻状态
function SetAllFishFrozenState(isFrozen)
    for k, v in pairs(FishTable) do
        if v ~= nil then
            v.SetFishFrozenState(isFrozen)
        end
    end
end

-- 获得分数值最大的鱼ID
function GetMaxScorePoolFish()
    local rtnVal = nil

    -- 循环所有鱼
    for k, v in pairs(FishTable) do
        if v ~= nil and v.GameObj.transform.childCount > 0 then
			if v.CheckIsInPool() and(rtnVal == nil or rtnVal.Reward < v.Reward) then
                rtnVal = v
            end
        end
    end

    return rtnVal
end

-- 找同一類型最近鱼ID
function GeSameNearPoolFish(FishTypeID, pos)
    local rtnVal = nil
	local preDis = 0
	pos.z = 0
	
    -- 循环所有鱼
    for k, v in pairs(FishTable) do
        if v ~= nil then
            if v.CheckIsInPool() and FishTypeID == v.FishID then
				local targetPos = v.GameObj.transform.position
				targetPos.z = 0
				if rtnVal == nil then
					rtnVal= v
					preDis = CS.UnityEngine.Vector3.Distance(pos, targetPos)
				else
					local dis = CS.UnityEngine.Vector3.Distance(pos, targetPos)
					if dis < preDis then
						preDis = dis
						rtnVal = v					
					end
				end
            end
        end
    end
	
    return rtnVal
end

function GetFishByID(_fishID)
    return FishTable[_fishID]
end

function SetFishSwell(_fishID,_scale)
	local fish = GetFishByID(_fishID)
	if fish ~= nil then
		fish.SetSwell(_scale)
	end
end

-- 开始鱼潮
function BeginFishWave(_wave)
	
    local waveConfig = ByConfig.FishWaveTable[tonumber(_wave.FishWaveID)]
	if waveConfig == nil then
		return
	end
	
	-- 海浪開始表演時間
	local beginShowWaveTime = 1 	
	-- 海浪表演時間
	local showTime = 3
	-- 魚淡出時間
	local alphaTime = 0.6	
	-- 開始實體化魚時間
	local initFishTime = beginShowWaveTime + showTime + alphaTime
	-- 魚開始進場延遲時間
	local enterTime = 1
	-- 距離多遠就開始淡出
	local minDis = 0
	-- 半徑縮放
	local RadiusScale = 2.5
	
	-- 播放潮動畫
    if Model.IsRecoverRet == false then	
		G.Tool.Sound.PlayGameSound("yuchao")
	
		local halfWidth = 7.2 			-- 浪開始和結束位置
		local dir = waveConfig.enterDir -- 浪方向
		
		-- 播放浪動畫
		local tran_wave = gameStart.transform:Find("UIFishMain/wave"):GetComponent("Transform")
		local movePos
		
        -- 播放海浪过场 1：从左到右 2：从右到左
        if dir == 1 then
            tran_wave.localEulerAngles = CS.UnityEngine.Vector3(0, 180, 0)
            tran_wave.localPosition = CS.UnityEngine.Vector3(-halfWidth, 0, 0);
			movePos = CS.UnityEngine.Vector3(halfWidth, 0, 0)
        else
            tran_wave.localEulerAngles = CS.UnityEngine.Vector3(0, 0, 0)
            tran_wave.localPosition = CS.UnityEngine.Vector3(halfWidth, 0, 0);
			movePos = CS.UnityEngine.Vector3(-halfWidth, 0, 0)
        end
		
		local sqsWaveInterval = Model.Call.GetSequence("WaveInterval")
		sqsWaveInterval:AppendInterval(beginShowWaveTime)
		sqsWaveInterval:AppendCallback( function()			
			local sqsWave = Model.Call.GetSequence("WavePic")
			--sqsWave:SetEase(CS.DG.Tweening.Ease.Linear)
			sqsWave:Append(tran_wave:DOMove(movePos, showTime))		
			sqsWave:OnUpdate(function()
				local pos = tran_wave.transform.position.x
				for k, v in pairs(FishTable) do
					if v ~= nil then
						if v.IsInAlphaDisappear() == false then
							local length = v.GameObj.transform.localScale.x * v.Radius * RadiusScale
							
							-- 2：从右到左
							if dir == 2 then
								if pos - v.GameObj.transform.position.x < length + minDis then
									v.AlphaDisappear(0, alphaTime)
								end
							-- 1：从左到右
							else
								if pos - v.GameObj.transform.position.x > -(length + minDis) then
									v.AlphaDisappear(0, alphaTime)
								end					
							end
						end
					end
				end
			end)		
		end)
    end	
	
	--魚的路徑資料
    local waveObj = CS.AssetBundleManager.Instance:LoadGameObject(groupName, "FishWave_" .. waveConfig.waveID)
    waveIns = CS.UnityEngine.GameObject.Instantiate(waveObj);
    waveIns.transform:SetParent(FishNodeTran);
    waveIns.transform.localPosition = CS.UnityEngine.Vector3.zero
    waveIns.transform.localScale = CS.UnityEngine.Vector3.one;
    waveIns.transform.localEulerAngles = CS.UnityEngine.Vector3.zero	
	
	local waveData = {}
	for i=1,#_wave.FishInfo do
		local dataIndex = #waveData +1
		for j=1,#waveData do
			if waveData[j].pathName == _wave.FishInfo[i].PathName then
				dataIndex = j
			end
		end
		waveData[dataIndex] = waveData[dataIndex] or {}
		waveData[dataIndex].pathName = _wave.FishInfo[i].PathName
		waveData[dataIndex].list = waveData[dataIndex].list or {}
		local index = #waveData[dataIndex].list +1
		waveData[dataIndex].list[index] = {}
		waveData[dataIndex].list[index].interval = _wave.FishInfo[i].Interval * 0.001
		waveData[dataIndex].list[index].fishType = _wave.FishInfo[i].FishId
		waveData[dataIndex].list[index].fishCount = _wave.FishInfo[i].Count
	end

    local waveScript = waveIns:AddScriptComponent(groupName, "Fish/FishWave")
	
	 -- 開始時實體化魚
    if Model.IsRecoverRet == false then
		local sqsInitFish = Model.Call.GetSequence("InitFish")
		sqsInitFish:AppendInterval(initFishTime)
		sqsInitFish:AppendCallback( function()
			waveScript.Init(enterTime, waveData)
		end)
	else
		waveScript.Init(enterTime, waveData)	
	end
end

function RelaseSequences()	
    for k, v in pairs(FishTable) do
        if v ~= nil then
            v.RelaseSequences()
        end
    end
end

function EndFishWave()
    for k, v in pairs(FishTable) do
        if v ~= nil then
            v.Relase()
        end
    end

    waveScript = nil
    -- CS.UnityEngine.GameObject.Destroy(waveIns);
    FishTable = { }
end