local G = require "Global"
local Model = G.RequireG("FishModel")
local fishManager = G.RequireG("Fish/FishManager");
local Fish = G.RequireG("Fish/Fish");

local groupName = G.GetGamePName()
 
-- 数字长度补全，如果数字长度不够则在数字前用0补全
local function GetFixedLenthNumber(_number, _length)
    local rtnVal = tostring(_number)

    while string.len(rtnVal) < _length do
        rtnVal = "0" .. rtnVal;
    end

    return rtnVal
end;

-- index:鱼ID value:当前ID编号 Index
local fishIndexTable = { };

-- 初始化函数，实例化之后调用一次
function Init(_enterTime,_waveData)
    fishIndexTable = { };

	for key ,data in pairs(_waveData) do
		local pathName = data.pathName
		local childTran = this.transform:Find(pathName)
        -- 找到路径移动类型根节点
		if (string.find(pathName, "Path") ~= nil) then

		-- 找到行为节点
            local actionsTran = childTran.transform:Find("Actions")

            local fishNumber = 0;
			local startIndex = 1
			local moveIntenal = 0		

            -- 循环为所有鱼添加节点行为
            for index = 1, #data.list do
				for j = startIndex,data.list[index].fishCount + startIndex - 1 do				
					startIndex = startIndex +1
					
					
					local fishServerID = GetFishServerID(data.list[index].fishType)
					if Model.Call.CheckFishDead(fishServerID) == false then
						local fishID = data.list[index].fishType
						local fish, fishIns = GenerateFish(fishID, fishServerID, childTran)
						local fishPosition = nil

						local sequence = fish.GetSequence();
						sequence:AppendInterval(_enterTime)
											
						local length = fish.Radius * 2 * fish.BaseScale
						moveIntenal = moveIntenal + (length / 3 *4  + data.list[index].interval)
						-- 添加出现时间间隔
						sequence:AppendInterval(moveIntenal)
						fishNumber = fishNumber + 1
						
						local offsetZ = fish.fishOrder * 10 + (CS.FrameWork.Random(fishNumber):RangeFloat(1,10) - 1)
						
						for i = 0, actionsTran.childCount - 1, 1 do
							local actionTran = actionsTran:GetChild(i)
							local pathAction = actionTran:GetComponent("DOTweenPath")

							if pathAction ~= nil then	
								if fishPosition == nil then
									fishPosition = pathAction.wps[0] + CS.UnityEngine.Vector3(0,0,offsetZ)
									fishIns.transform.position = fishPosition
								end
								
								local movePaths = {};			
								for j = 0, pathAction.wps.Count - 1, 1 do
									-- 位置偏移
									movePaths[j] = pathAction.wps[j] + CS.UnityEngine.Vector3(0,0,offsetZ);
								end
								
								-- 添加路径
								sequence:Append(fishIns.transform:DOFramePath(movePaths, pathAction.duration, pathAction.loops, pathAction.orientType));
							elseif (string.find(actionTran.name, "Delay_") ~= nil) then
								-- 添加时间等待
								local delayTime = tonumber(G.Tool.StringHelper.Sub(actionTran.name, 7, string.len(actionTran.name)))
								sequence:AppendInterval(delayTime)
							end
						end
						fish.SetMoveSequence(sequence)
					end
				end
            end

            -- 找到直线移动类型根节点
		elseif (string.find(pathName, "Line") ~= nil) then
            local childList = childTran.gameObject:GetComponentsInChildren(typeof(CS.UnityEngine.Transform));
			local startIndex = 1
			
            for index = 1, #data.list do	
				for j = startIndex,data.list[index].fishCount + startIndex -1 do					
					startIndex = startIndex +1
					
					local fishServerID = GetFishServerID(data.list[index].fishType)
					if Model.Call.CheckFishDead(fishServerID) == false then
						local target = childList[j] or childTran
						-- 解析移动速度，实例化鱼，绑定移动AI脚本		
						local moveSpd = data.list[index].interval
						local fishID = data.list[index].fishType
						local fish, fishIns = GenerateFish(fishID, fishServerID, target)
					
						local startPos = fishIns.transform.position;
						local endPos;
						local duration;
						-- 判断方向是向左还是向右
						if (startPos.x > Model.Defines.WorldDimensionUnit.xMax) then
							endPos = CS.UnityEngine.Vector3(Model.Defines.WorldDimensionUnit.xMin - fish.Radius * 2, startPos.y)
						else
							endPos = CS.UnityEngine.Vector3(Model.Defines.WorldDimensionUnit.xMax + fish.Radius * 2, startPos.y)
						end

						duration = math.abs(CS.UnityEngine.Vector3.Distance(startPos, endPos)) / moveSpd

						local fishseq = fish.GetSequence()
						fishseq:AppendInterval(_enterTime)
						fishseq:Append(fishIns.transform:DOFramePath( { startPos, endPos }, duration, 1, CS.DG.Tweening.Plugins.Options.OrientType.None))
						fish.SetMoveSequence(fishseq)
					end
                end
            end
        end
    end

    CS.UnityEngine.GameObject.Destroy(this.gameObject);

end
 
function GenerateFish(_fishID, _fishServerID, _transform)
	
    local fishTable = fishManager.FishTable;
	
	local fishIns = fishManager.GetFish(_fishID)

	fish = Fish.New(_fishID, _fishServerID, fishIns, 2)
	fish.SwinTypeScale = _transform.localScale.x

	fishIns.transform.localScale = CS.UnityEngine.Vector3.one;
	fishIns.transform.position = _transform.position;
	fishIns.transform.eulerAngles = _transform.eulerAngles;
	
	fishTable[_fishServerID] = fish;
		
    return fish, fishIns;
end

function GetFishServerID(_fishID)
	if fishIndexTable[_fishID] == nil then
        fishIndexTable[_fishID] = 1
    else
        fishIndexTable[_fishID] = fishIndexTable[_fishID] + 1
    end

    -- 鱼潮生成ID规则固定 1 + {2位类型} + {3位自增长ID}
    local fishServerID = tonumber("1" .. GetFixedLenthNumber(_fishID, 2) .. GetFixedLenthNumber(fishIndexTable[_fishID], 3));
	
	return fishServerID
end