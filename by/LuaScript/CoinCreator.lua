require("Module")
mmodule(...)

local G = require "Global"
local Model = G.RequireG("FishModel")
local coinSpace = 0.5;
local gameStart; 

function Init(_gameStart)
    gameStart = _gameStart
end

local moveSpeed = 6;
-- ʾ
local maxCoinNum = 8;
-- ұ,:6ʾ1ҵ6
local goldRate = 6;
-- ҴС
local coinSize = 0.44;



function Creat(_bornPosition, _flyToPosition, _fishReward, _isMy, _iscoinCreator, _fishConfig, _isPlayAudio)
    _iscoinCreator = G.CaseWhen(_iscoinCreator == nil, true, _iscoinCreator)
    if (_iscoinCreator == false) then
        return _bornPosition
    end
		
	local rewardNum = _fishConfig.rewardNum
	local coinCount
	if rewardNum == 1 then
		coinCount = 1
	elseif rewardNum == 2 then
		coinCount = 2
	elseif rewardNum == 3 then
		coinCount = 4
	elseif rewardNum == 4 then
		coinCount = 12
	else
		coinCount = 12
	end

    -- ж
    local poolName = G.CaseWhen(_isMy, "jinbi_1", "yinbi_1")
	local coinPos = Model.Call.GetCoinPos()
    local goTable = { };
    local seq = Model.Call.GetSequence()
    local jumDuration = 0.8
	local intervalTime = 0.02
	local scale = 0.7
    -- ʱ
    for i = 1, coinCount, 1 do
		local go = CS.FrameWork.ObjectPoolManager.Instance:Get(poolName)

		go.transform.localScale = CS.UnityEngine.Vector3.one * scale
		go.transform.position = _bornPosition;
		go.gameObject:SetActive(true)

		if coinCount > 1 then
			go.transform.position = go.transform.position + coinPos[i].transform.position * scale
		end
		
		goTable[i] = go;
		-- ֻвŵǰҵ4
		if _isMy then
			local isPlay = false
			if i == 1 then
				if _isPlayAudio == true then
					isPlay = true
				end
			-- ܶٷ
			elseif 	i == 12 then
				isPlay = true
			end
			
			if isPlay == true then
				seq:AppendCallback( function()
					G.Tool.Sound.PlayGameSound("drop_gold")
				end)			
			end
		end
		-- 
		seq:Append(go.transform:DOJump(go.transform.position, 0.8, 1, jumDuration * 0.625))
		seq:Append(go.transform:DOJump(go.transform.position, 0.25, 1, jumDuration * 0.375))
		seq:AppendInterval(-1 * jumDuration)
		-- ͬʱһ
		seq:Append(go.transform:DOScale(1.05 * scale, jumDuration * 0.625))
		seq:Append(go.transform:DOScale(1 * scale, jumDuration * 0.375))
		seq:AppendInterval(-1 *(jumDuration - intervalTime))
		-- ¸ҿʼ0.03
    end
    seq:AppendInterval(jumDuration)
	
    local flyTime = CS.UnityEngine.Vector3.Distance(_bornPosition, _flyToPosition) / moveSpeed * 0.5;
	
    for key, var in pairs(goTable) do
		if _isPlayAudio == true then
			-- ֻвŵǰҵ1
			if _isMy then
				local isPlay = false
				if key == 1 then
					if _isPlayAudio == true then
						isPlay = true
					end
				elseif key == 12 then
					isPlay = true			
				end
				
				if isPlay == true then
					seq:AppendCallback( function()
						G.Tool.Sound.PlayGameSound("collectGold")
					end )				
				end
			end
		end
		-- OutQuint
        seq:Append(var.transform:DOMove(_flyToPosition, flyTime):SetEase(CS.DG.Tweening.Ease.InCubic))
        seq:AppendInterval(-1 *(flyTime - intervalTime))
    end
    seq:AppendInterval(flyTime)
    seq:AppendCallback( function()
        for key, var in pairs(goTable) do
            CS.FrameWork.ObjectPoolManager.Instance:Release(poolName, var)
        end
    end )
    return _bornPosition
end