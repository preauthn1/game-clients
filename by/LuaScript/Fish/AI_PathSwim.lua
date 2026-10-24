-- 鱼管理器
require("Module")
mmodule(...)

-- 按照固定线路移动AI
local G = require "Global"
local ByConfig = G.RequireG("ByConfig");
local groupName = G.GetGamePName()
 
function DoPathSwim(_fish, _fishIns)
    local fishConfig = ByConfig.FishTable[_fish.FishID];

    local randomIns = CS.FrameWork.Random(_fish.FishServerID)
    local pathsGo = CS.AssetBundleManager.Instance:LoadGameObject(groupName, fishConfig.aiType, false)

    if pathsGo == nil then
        return
    end
	
    -- 随机行为节点
    local actionsTran = pathsGo.transform:GetChild(randomIns:RangeInt(0, pathsGo.transform.childCount))

	local offsetZ = _fish.BaseZ--fishConfig.fishOrder * 10 + (randomIns:RangeFloat(1,10) - 1)
    _fishIns.transform.position = CS.UnityEngine.Vector3.zero;
    _fishIns.transform.localScale = CS.UnityEngine.Vector3.one;
    _fishIns.transform.eulerAngles = CS.UnityEngine.Vector3.zero;
    local sequence = _fish.GetSequence();
	
    for i = 0, actionsTran.childCount - 1, 1 do
        local actionTran = actionsTran:GetChild(i)
        local pathAction = actionTran:GetComponent("DOTweenPath")

        if pathAction ~= nil then
            _fishIns.transform.position = pathAction.wps[0] + CS.UnityEngine.Vector3(0,0,offsetZ);
			
			local movePaths = {};			
			for j = 0, pathAction.wps.Count - 1, 1 do
				-- 位置偏移
				movePaths[j] = pathAction.wps[j] + CS.UnityEngine.Vector3(0,0,offsetZ);
			end
			
            -- 添加路径
            sequence:Append(_fishIns.transform:DOFramePath(movePaths, pathAction.duration, pathAction.loops, pathAction.orientType));
        elseif (string.find(actionTran.name, "Delay_") ~= nil) then
            -- 添加时间等待
            local delayTime = tonumber(G.Tool.StringHelper.Sub(actionTran.name, 7, string.len(actionTran.name)))
            sequence:AppendInterval(delayTime);
        end
    end

    return sequence
end 