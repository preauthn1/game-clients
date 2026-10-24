-- 鱼管理器
require("Module")
mmodule(...)

-- 自由移动AI
local G = require "Global"
local Model = G.RequireG("FishModel")
local ByConfig = G.RequireG("ByConfig");
local Mathf = CS.UnityEngine.Mathf

function DoFreeSwim(_fish, _fishIns)
    local points = GetFishPathInfo(_fish)
    local moveSpeed = ByConfig.FishTable[_fish.FishID].moveSpeed;

    return DoFreePath(_fish, _fishIns, 0, points, moveSpeed)
end

-- 根据鱼推算出它的移动路径
function GetFishPathInfo(_fish)
    local bornPosition = RndBornPosition(_fish)
    local targetPosition = RndTargetPosition(_fish, bornPosition)
    --local targetPosition = RndTargetPosition(_fish, nil)
    return GetFreeMovePoints((targetPosition - bornPosition).normalized, bornPosition, _fish, _fish.Far)
end

function DoFreePath(_fish, _fishIns, _delayTime, _points, _moveSpeed)
    _fishIns.transform.localScale = CS.UnityEngine.Vector3.one;
    _fishIns.transform.eulerAngles = CS.UnityEngine.Vector3.zero;

    _fishIns.transform.position = _points[1];

    local fishConfig = ByConfig.FishTable[_fish.FishID];

    local sequence = _fish.GetSequence();
    sequence:AppendInterval(_delayTime)
	
	--依造魚型,動態調整速度
	local _speed = fishConfig.moveSpeed
	if fishConfig.isTypeUI == 4 or fishConfig.isTypeUI == 5 then
		_speed = _speed * _fish.randomIns:RangeFloat(0.6, 1.4)
	elseif fishConfig.isTypeUI == 3 then
		_speed = _speed * _fish.randomIns:RangeFloat(0.8, 1.2)	
	end
	
	-- 添加路径
	sequence:Append(_fishIns.transform:DOFramePath(_points, CS.Utility.GetPathLength(_points) / _speed));

    return sequence;
end
 
-- 随机一个鱼出生位置
function RndBornPosition(_fish)
    -- 随机出生点是在X轴还是Y轴上 x:0  Y:1
    local xORy = _fish.randomIns:RangeInt(0, 2);
	
    -- 随机是在上边框或者下边框（X轴情况）  左边框还是右边框（Y轴情况） 下/左:0  上/右:1
    local positiveORnegative = _fish.randomIns:RangeInt(0, 2)

	-- 随机的位置数值
	local pos = _fish.GameObj.transform.localPosition
    if xORy == 0 then 
		 pos.x = _fish.randomIns:RangeFloat(_fish.Radius * -2,_fish.Radius *2)
		
		-- 下边框
        if positiveORnegative == 0 then
			pos.y = Model.Defines.WorldDimensionMin_y - _fish.Radius
		-- 上边框
        else
			pos.y = Model.Defines.WorldDimensionMax_y + _fish.Radius
        end
    else
        pos.y = _fish.randomIns:RangeFloat(Model.Defines.FishBornMin_y, Model.Defines.FishBornMax_y)
		
		-- 左边框
        if positiveORnegative == 0 then
			pos.x = Model.Defines.WorldDimensionMin_x - _fish.Radius
		-- 右边框
        else
			pos.x = Model.Defines.WorldDimensionMax_x + _fish.Radius
        end
    end
	
	return pos
end 

-- 随机一个方向位置
function RndTargetPosition(_fish, bornPosition)

	local rtnVal
	if bornPosition ~= nil then
		local pos = {}
		local dis = {}
		local times = 20;

		-- 防止死循环
		while (times > 0) do
			times = times - 1	
			pos.x = _fish.randomIns:RangeFloat(Model.Defines.WorldDimensionMin_x, Model.Defines.WorldDimensionMax_x)
			pos.y = _fish.randomIns:RangeFloat(Model.Defines.WorldDimensionMin_y, Model.Defines.WorldDimensionMax_y)

			dis.x = pos.x - bornPosition.x
			dis.y = pos.y - bornPosition.y
			
			local r = Mathf.Atan2(dis.y,dis.x)*180/Mathf.PI
			
			if r < 0 then
				r = r + 360
			end
			
			if r > 35 and r < 90 then
				 
			elseif r > 90 and r < 150 then
				 
			elseif r > 210 and r < 270 then
				 
			elseif r > 270 and r < 330 then
				 
			else
				break
			end		
		end
			
		rtnVal = CS.UnityEngine.Vector3
		(
			pos.x,
			pos.y,
			_fish.GameObj.transform.localPosition.z
		)
	else
	
		rtnVal = CS.UnityEngine.Vector3
		(
			_fish.randomIns:RangeFloat(Model.Defines.WorldDimensionMin_x, Model.Defines.WorldDimensionMax_x),
			_fish.randomIns:RangeFloat(Model.Defines.WorldDimensionMin_y, Model.Defines.WorldDimensionMax_y),
			_fish.GameObj.transform.localPosition.z
		)	
	end
	
    return rtnVal;
end

function GetFreeMovePoints(dir, startPoint, _fish, _offsetZ)
    local fishConfig = ByConfig.FishTable[_fish.FishID];

    local points = { };
    local enterPool = false;

    startPoint.z = _fish.BaseZ
	table.insert(points, startPoint)
    startPoint = GetBorderPoint(dir, startPoint)
    startPoint.z = _fish.BaseZ
    table.insert(points, startPoint)

    local interval = fishConfig.rotateInterval + _fish.randomIns:RangeFloat(- fishConfig.rotateIntervalRndRange, fishConfig.rotateIntervalRndRange);

    local times = 10;

    -- 防止死循环
    while (times > 0) do
        times = times - 1
        -- 直线走一段距离
        local point = GetLinePoint(dir, fishConfig.moveSpeed, interval)

        -- 检查是否超出边界了
        state, startPoint = CheckPositionState(dir, fishConfig.Radius, startPoint + point)
		startPoint.z = _fish.BaseZ
        table.insert(points, startPoint)

        if state == -1 then
            break
        end
		
        -- 转向
		local rotateAngleF = _fish.randomIns:RangeFloat(-1 * fishConfig.rotateSpeed, fishConfig.rotateSpeed)
		local rotateAngleU = _fish.randomIns:RangeFloat(-1 * fishConfig.rotateAngleRndRange, fishConfig.rotateAngleRndRange)

        dir, point = GetRotatePoint(_fish, dir, fishConfig.moveSpeed, interval);
		
        -- 检查是否超出边界了
        state, startPoint = CheckPositionState(dir, fishConfig.Radius, startPoint + point)
        table.insert(points, startPoint)

        if state == -1 then
            break
        end
    end
	
    return points
end

local outSide_max_x = 0;
local outSide_min_x = 0;
local outSide_max_y = 0;
local outSide_min_y = 0;

-- 1在水池内(包含不可见部分) -1在水池范围外
function CheckPositionState(dir, _radius, _position)
    if math.abs(_position.x) <(Model.Defines.WorldDimensionMax_x + _radius) and math.abs(_position.y) <(Model.Defines.WorldDimensionMax_y + _radius) then
        return 1, _position;
    else

        local position = _position
        outSide_max_x = Model.Defines.WorldDimensionMax_x + _radius
        outSide_min_x = Model.Defines.WorldDimensionMin_x - _radius
        outSide_max_y = Model.Defines.WorldDimensionMax_y + _radius
        outSide_min_y = Model.Defines.WorldDimensionMin_y - _radius

        if _position.x < outSide_min_x then
            _position = _position +(outSide_min_x - _position.x) / dir.x * dir
        elseif _position.x > outSide_max_x then
            _position = _position +(outSide_max_x - _position.x) / dir.x * dir
        end

        if _position.y < outSide_min_y then
            _position = _position +(outSide_min_y - _position.y) / dir.y * dir
        elseif _position.y > outSide_max_y then
            _position = _position +(outSide_max_y - _position.y) / dir.y * dir
        end

        return -1, _position;
    end
end
 
function GetBorderPoint(dir, startPoint)
    borderPoint = CS.UnityEngine.Vector3.zero

    if startPoint.x < Model.Defines.WorldDimensionMin_x then
        borderPoint =(Model.Defines.WorldDimensionMin_x - startPoint.x) / dir.x * dir + startPoint
    elseif startPoint.x > Model.Defines.WorldDimensionMax_x then
        borderPoint = startPoint -(startPoint.x - Model.Defines.WorldDimensionMax_x) / dir.x * dir
    elseif startPoint.y < Model.Defines.WorldDimensionMin_y then
        borderPoint =(Model.Defines.WorldDimensionMin_y - startPoint.y) / dir.y * dir + startPoint
    elseif startPoint.y > Model.Defines.WorldDimensionMax_y then
        borderPoint = startPoint -(startPoint.y - Model.Defines.WorldDimensionMax_y) / dir.y * dir
    end

    return borderPoint
end

function RangeValue(_fish, _min, _max)
	local value = _fish.randomIns:RangeFloat(_min, _max)
	if _fish.randomIns:RangeInt(0, 100) > 50 then
		value = -value
	end
	return value
end

function GetRotatePoint(_fish, dir, moveSpeed, rotateTime)
	
	dir = CS.UnityEngine.Quaternion.AngleAxis(10, CS.UnityEngine.Vector3.forward) * dir
	if math.abs(dir.x) > 0.6 then
		dir.x = dir.x * 0.6
	end

	if math.abs(dir.y) > 0.5 then
		dir.y = dir.y * 0.5
	end
	
	-- 計算Z軸深度
	local value = _fish.randomIns:RangeInt(0, 100)
	if value < 40 then
		dir.z = RangeValue(_fish, 0.8, 1.0)
	elseif value < 80 then
		dir.z = RangeValue(_fish, 0.5, 0.8)
	else
		dir.z = RangeValue(_fish, 0.1, 0.4)
	end
	
    -- 移动方向 * 移动速度 * 转向总时间
    return dir, dir * moveSpeed * rotateTime;
end

function GetLinePoint(dir, moveSpeed, moveTime)
    --  移动方向 * 移动速度 * 转向总时间
    return dir * moveSpeed * moveTime;
end
 