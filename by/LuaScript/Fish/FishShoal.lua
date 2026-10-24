-- 鱼群游动AI
local G = require "Global"

-- 接收消息table
local pojectName = G.GetGamePName()

local G = require "Global"
local Model = G.RequireG("FishModel")
local fishManager = G.RequireG("Fish/FishManager");
local byConfig = G.RequireG("ByConfig");
local AI_FreeSwim = G.RequireG("Fish/AI_FreeSwim");
local Fish = G.RequireG("Fish/Fish");

local sequence;
local fishID;
local groupName = G.GetGamePName()

--_shoalID	鱼潮流水号 
--_fishID	流水号
--_interval	间隔时间
--_fishNo	鱼的序号
--_fishCount	鱼的数量
function Init(_shoalID, _fishID, _interval, _fishNo, _fishCount)
	--[[
	if _shoalID > 0 then
		return
	end
	]]--
	--print("@@@@@@@@@@@@@@@@@@ _shoalID ", _shoalID, _fishID, _interval, _fishNo, _fishCount)
    fishID = _fishID;
	
	count = 0
	remainder = _fishCount
	while(remainder >= this.transform.childCount)do
		remainder = remainder - this.transform.childCount
		count = count +1  
	end
	
	local offsetX = CS.FrameWork.Random(fishID):RangeFloat(1,3) -1
	local offsetY = CS.FrameWork.Random(fishID):RangeFloat(1,3) -1
	local offsetZ = 0
	for k, v in pairs(byConfig.FishShoalTable) do
		if v.shoalId == _shoalID then
			offsetZ = v.fishOrder * 10 + CS.FrameWork.Random(fishID):RangeFloat(1,10) -1
			break;
		end
	end
	
    -- 生成鱼
    for i = 0, this.transform.childCount - 1, 1 do
		local totalCount = count
		if remainder > i then
			totalCount = totalCount + 1
		end
		
        local childTran = this.transform:GetChild(i)

        -- 跟随出现延迟时间
        local fllowDelay = _interval
		
        local fishNumber = 1;
        local fishTrans = { }

        local transforms = childTran.gameObject:GetComponentsInChildren(typeof(CS.UnityEngine.Transform));

        -- 找到所有鱼位置信息节点
        for i = 0, transforms.Length - 1, 1 do
            if (string.find(transforms[i].name, "Fish_") ~= nil) then
                fishTrans[fishNumber] = transforms[i]
                fishNumber = fishNumber + 1;
            end
        end

        -- 路径移动
        if (string.find(childTran.name, "Path") ~= nil) then
            -- 行为节点
            local actionsTran = childTran.transform:Find("Actions")

            -- 为所有鱼添加路径行为
            --for index, fishTran in ipairs(fishTrans) do
			for index = 1, totalCount do

				if Model.Call.CheckFishDead(fishID) == false then
					--_fishNo = tonumber(G.Tool.StringHelper.Sub(fishTran.name, 6, string.len(fishTran.name)))
					--local fish, fishIns = GenerateFish(_fishNo, fishTran)
					local fish, fishIns = GenerateFish(_fishNo, childTran)

					local sequence = fish.GetSequence();
					
					local length = fish.Radius * 2 * fish.BaseScale
					-- length (距离)换算成时间比值 = /3 *4
					local timer =  (length / 3 *4  + fllowDelay) * (index -1)
					-- 添加出现时间间隔
					sequence:AppendInterval(timer);

					for i = 0, actionsTran.childCount - 1, 1 do
						local actionTran = actionsTran:GetChild(i)
						local pathAction = actionTran:GetComponent("DOTweenPath")
						local movePaths = { };

						if pathAction ~= nil then

							for j = 0, pathAction.wps.Count - 1, 1 do
								-- 位置偏移
								--movePaths[j] = pathAction.wps[j] + fishTran.localPosition
								movePaths[j] = pathAction.wps[j] + CS.UnityEngine.Vector3(offsetX,offsetY,offsetZ)
							end

							fishIns.transform.position = movePaths[0];

							-- 添加路径
							sequence:Append(fishIns.transform:DOFramePath(movePaths, pathAction.duration, pathAction.loops, pathAction.orientType));
						elseif (string.find(actionTran.name, "Delay_") ~= nil) then
							-- 添加时间等待
							local delayTime = tonumber(G.Tool.StringHelper.Sub(actionTran.name, 7, string.len(actionTran.name)))
							sequence:AppendInterval(delayTime);
						end
					end

					fish.SetMoveSequence(sequence)
				else
					fishID = fishID + 1
				end
            end
            -- 自由移动
        elseif (string.find(childTran.name, "Free") ~= nil) then
            local leaderMoveSpeed = 0
            local leaderTran = nil
            local pathPoint = nil;

            --for index, fishTran in ipairs(fishTrans) do
			for index = 1, totalCount do
				
				--_fishNo = tonumber(G.Tool.StringHelper.Sub(fishTran.name, 6, string.len(fishTran.name)))
				
				if Model.Call.CheckFishDead(fishID) == false then
					local fish = nil
					local fishIns = nil
					local movePaths = { };

					if leaderTran == nil then
						fish, fishIns = GenerateFish(_fishNo, childTran)
						pathPoint = AI_FreeSwim.GetFishPathInfo(fish)

						leaderMoveSpeed = byConfig.FishTable[_fishNo].moveSpeed
						leaderTran = fishIns.transform
					else
						--fish, fishIns = GenerateFish(_fishNo, leaderTran, fishTran.localPosition)
						fish, fishIns = GenerateFish(_fishNo, leaderTran, CS.UnityEngine.Vector3.zero)
					end
								
					for j = 1, #pathPoint, 1 do
						-- 位置偏移
						--movePaths[j] = pathPoint[j] + fishTran.localPosition
						--movePaths[j] = pathPoint[j] + CS.UnityEngine.Vector3.zero
						--因為隻數可能比陣行裡設的還多,所以重頭來
						local _index = index % transforms.Length
						if j == 1 or #pathPoint <= j then
							movePaths[j] = pathPoint[j] + CS.UnityEngine.Vector3.zero
						else
							movePaths[j] = pathPoint[j] + transforms[_index].localPosition
						end
					end

					fishIns.transform.position = movePaths[1];
					fish.SetMoveSequence(AI_FreeSwim.DoFreePath(fish, fishIns, fllowDelay *(index - 1), movePaths, leaderMoveSpeed))
				else
					fishID = fishID + 1
				end
            end
        end
    end

    CS.UnityEngine.GameObject.Destroy(this.gameObject);
end

function GenerateFish(_fishNo, _transform, _positionOffset)

	local fishTable = fishManager.FishTable;
	local fishIns = fishManager.GetFish(_fishNo)
  
	fish = Fish.New(_fishNo, fishID, fishIns, 1)

	fishIns.transform.localScale = CS.UnityEngine.Vector3.one;
	fishIns.transform.position = _transform.position;

	if _positionOffset ~= nil then
		fishIns.transform.position = fishIns.transform.position + _positionOffset
	end

	fishIns.transform.eulerAngles = _transform.eulerAngles;
	fishTable[fishID] = fish;
		
    fishID = fishID + 1

    return fish, fishIns;
end