-- 
require("Module")
mmodule(...)

local G = require "Global"
local Model = G.RequireG("FishModel")
local ByConfig = G.RequireG("ByConfig");
local FishManager = G.RequireG("Fish/FishManager");
local uiFishMain = G.RequireG("UIFishMain")
local groupName = G.GetGamePName()

local ScaleFar = 2
local ScaleNear = 0
local ScaleDis = 1 / (ScaleFar - ScaleNear)
local ScaleMin = 0.6
local ScaleMax = 1.0
local ScaleOffset = ScaleMax - ScaleMin

local DeadAlpha = true

local HitCooldown = 0.2

function New(_fishType, _fishServerID, _fishGameObj, _fishSwinType)
    local fish = { };

    local seqlist = { };
    local fishConfig = ByConfig.FishTable[_fishType]
    local fishDeadEffect
	local fishDeadEffectList = {}
		
    fish.GameObj = _fishGameObj
    fish.GameObj.name = _fishServerID
    fish.FishServerID = _fishServerID
    fish.FishID = fishConfig.fishId
    fish.Radius = fishConfig.Radius
    fish.randomIns = CS.FrameWork.Random(_fishServerID)
    fish.LeavePoolFun = { }
	fish.BaseZ = fishConfig.fishOrder * 10 + fish.randomIns:RangeFloat(1,10) - 1
	fish.fishScale = fishConfig.fishScale
	fish.BaseScale = fishConfig.fishScale	
	fish.Far = ScaleFar
	fish.isShow = false
	fish.prePos = CS.UnityEngine.Vector3(-99999,-99999,-99999)
	fish.LastHitTime = 0
	fish.fishOrder = fishConfig.fishOrder
	fish.fishSwinType = _fishSwinType
	fish.fishType = Model.Call.GetFishTypeById(fish.FishID)
	fish.isRelease = true
	fish.Reward = Model.Call.GetFishRewardMaxById(fish.FishID)
	fish.SwinTypeScale = 1
	
	fish.RotationPlayer = 1
	if Model.Defines.RotationPlayer == true then
		if Model.Call.IsRotationPlayer() == true then
			fish.RotationPlayer = -1
		end
	end
	
    fish.fishObj = fish.GameObj.transform:Find("Body")
	fish.fishObj.transform.forward = CS.UnityEngine.Vector3.forward
    fish.boxCollider = fish.fishObj.transform:Find("Boxing")
	if fish.boxCollider == nil then
		fish.boxCollider = fish.fishObj.transform:Find("Body/Dummy001/Boxing")	
	end
    fish.boxCollider1 = fish.fishObj.transform:Find("Boxing (1)")
	
	-- gøһ
	fish.accUpdate = fish.randomIns:RangeInt(0,2)
	
	fish.fishMats = {}
	fish.sequencesHit = {}
	fish.fishAnimList = {}
	fish.fishParticleList = {}
	
	fish.alphaSequence = nil
	fish.sequenceBoom = nil
	fish.sequenceDead = nil
	
	fish.electricLine = nil
	fish.electricLineRenderer = nil
	fish.electricPoint = nil
		
	fish.LockObj = fish.GameObj
	lookShoot = fish.GameObj.transform:Find("NodeLookShoot")
	if lookShoot ~= nil then
		for i = 1, lookShoot.transform.childCount do
			local temp = fish.GameObj.transform:Find(lookShoot.transform:GetChild(i-1).name)
			if temp ~= nil then
				fish.LockObj = temp
			else
				print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! LockObj not find " .. fish.FishID)	
			end
		end
	end
		
		
	fish.BodyObj = fish.fishObj.transform:Find("Body")
	if fish.BodyObj ~= nil then
		
		-- ָ
		fish.EulerAngles = false
		fish.EulerAnglesX = nil
		fish.EulerAnglesY = nil
		fish.EulerAnglesZ = nil
		
		-- 36 ?^?r
		if fishConfig.modelName == "zuantoulongxia" then
			--fish.EulerAngles = true
			--fish.EulerAnglesX = 0
			--fish.EulerAnglesZ = -45
			
		-- 31 ը?з
		elseif fishConfig.modelName == "zhadanpangxie" then		
			fish.EulerAngles = true
			fish.EulerAnglesX = 30
			fish.EulerAnglesY = -90
			fish.EulerAnglesZ = 0
			
		-- 39 ޴?r
		elseif fishConfig.modelName == "julongxia" then		
			fish.EulerAngles = true
			fish.EulerAnglesX = 0
			fish.EulerAnglesZ = -45
			
		-- 40 ޴з
		elseif fishConfig.modelName == "jupangxie" then
			fish.EulerAngles = true
			fish.EulerAnglesX = 30
			fish.EulerAnglesY = -90
			fish.EulerAnglesZ = 0
			
		-- 37 
		elseif fishConfig.modelName == "jinchanchu" then		
			fish.EulerAngles = true
			fish.EulerAnglesX = 0
			fish.EulerAnglesZ = -45	
			
		-- 38 ^L
		elseif fishConfig.modelName == "dujiaojing" then		
		
		end
		
		-- u\SCD
		if fishConfig.modelName == "wuzei" then
			local localEulerAngles = fish.BodyObj.transform.localEulerAngles
			fish.BodyObj.transform.localEulerAngles = CS.UnityEngine.Vector3(fish.randomIns:RangeFloat(0,360), localEulerAngles.y, localEulerAngles.z)
		
			if fish.boxCollider ~= nil then
				fish.boxCollider.transform.localEulerAngles = fish.BodyObj.transform.localEulerAngles
			end
		end
				
		fish.fishAnim = fish.BodyObj:GetComponent("Animator")
		fish.fishAnim.enabled = not Model.IsIce
	end
		
	-- SkinnedMeshRenderer
	PathSMR = fish.GameObj.transform:Find("PathSkinnedMeshRenderer")
	if PathSMR ~= nil then	
		for i = 1, PathSMR.transform.childCount do
			local ChildObj = PathSMR.transform:GetChild(i -1)
			local fishChildObj = fish.GameObj.transform:Find(ChildObj.name)
			if fishChildObj ~= nil then
				local fishSMR = fishChildObj:GetComponent("SkinnedMeshRenderer")
				if fishSMR ~= nil then
					table.insert(fish.fishMats, fishSMR.material)
				end
			else
				print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! SkinnedMeshRenderer is nil FishID " .. fish.FishID)	
			end
		end
	end
	
	-- MeshRenderer
	PathMR = fish.GameObj.transform:Find("PathMeshRenderer")
	if PathMR ~= nil then	
		for i = 1, PathMR.transform.childCount do
			local ChildObj = PathMR.transform:GetChild(i -1)
			local fishChildObj = fish.GameObj.transform:Find(ChildObj.name)
			if fishChildObj ~= nil then
			local fishMR = fishChildObj:GetComponent("MeshRenderer")
				if fishMR ~= nil then
					table.insert(fish.fishMats, fishMR.material)
				end
			else
				print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! MeshRenderer is nil FishID " .. fish.FishID)
			end
		end
	end	
	
	-- Animator
	PathAnim = fish.GameObj.transform:Find("PathAnimator")
	if PathAnim ~= nil then	
		for i = 1, PathAnim.transform.childCount do
			local ChildObj = PathAnim.transform:GetChild(i -1)
			local fishChildObj = fish.GameObj.transform:Find(ChildObj.name)
			if fishChildObj ~= nil then
			local fishAnim = fishChildObj:GetComponent("Animator")
				if fishAnim ~= nil then
					table.insert(fish.fishAnimList, fishAnim)
				end
			else
				print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Animator is nil FishID " .. fish.FishID)
			end
		end
	end	
	
	-- ParticleSystem
	PathParticle = fish.GameObj.transform:Find("PathParticleSystem")
	if PathParticle ~= nil then	
		for i = 1, PathParticle.transform.childCount do
			local ChildObj = PathParticle.transform:GetChild(i -1)
			local fishChildObj = fish.GameObj.transform:Find(ChildObj.name)
			if fishChildObj ~= nil then
			local fishParticle = fishChildObj:GetComponent("ParticleSystem")
				if fishParticle ~= nil then
					table.insert(fish.fishParticleList, fishParticle)
				end
			else
				print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Animator is nil FishID " .. fish.FishID)
			end
		end
	end	
	
	-- Bullet
	if fish.fishType == 6 then
		fish.bullet = fish.GameObj.transform:Find("Bullet")
	end
	
	-- effectSwell
	fish.effectSwell = fish.GameObj.transform:Find("EffectSwell")
	if fish.effectSwell ~= nil then
		fish.effectSwell.gameObject:SetActive(false)
	end
	
	for i = 1, #fish.fishMats do
		fish.fishMats[i].color = CS.UnityEngine.Color(1.0, 1.0, 1.0, 1.0)
	end	
		
    fish.GetSequence = function(isNormalUpdate)
        local sequence = CS.DG.Tweening.DOTween.Sequence();

        if isNormalUpdate == true then
            sequence:SetUpdate(CS.DG.Tweening.UpdateType.Normal)
        else
            sequence:SetUpdate(CS.DG.Tweening.UpdateType.Manual)
        end
		
		sequence:OnUpdate(function()
			if fish ~= nil then
				fish.OnUpdate()
			end
		end)

        table.insert(seqlist, sequence)		
		
        return sequence
    end

    fish.KillSequences = function()
        for _, v in pairs(seqlist) do
            v:Kill();
        end
    end

    EnterPool = function()
		fish.fishObj.gameObject:SetActive(false)		
		
        LockHint = fish.GameObj.transform:Find("LockHint")

        -- ʱLockHintΪ󣬶ĻһЧĶǿɾ
        if LockHint and LockHint ~= uiFishMain.LockHint then
            CS.UnityEngine.GameObject.Destroy(LockHint.gameObject)
        end
    end

    fish.SetMoveSequence = function(_sequence)
        if Model.IsRecoverRet or not Model.IsGameReady then
            _sequence:PrependInterval(Model.RecoverFrameNumber * Model.Defines.FrameTime)
            if _sequence:Duration(true) < Model.RecoverTotalFrameNumber * Model.Defines.FrameTime then
                FishManager.FishTable[fish.FishServerID] = nil
                fish.Relase()
            else
                EnterPool()
            end
        else
            EnterPool()
        end
		
        _sequence:OnComplete( function()

			FishManager.FishTable[fish.FishServerID] = nil
			fish.Relase()
        end )
    end

    -- 
    fish.Dead = function(delayRelaseTime,showEffectDeath)
        FishManager.FishTable[fish.FishServerID] = nil
		
        if (type(fish.LeavePoolFun) == "function") then
            fish.LeavePoolFun(fish.FishServerID);
            fish.LeavePoolFun = nil
        end

        if Model.IsRecoverRet then
            fish.Relase()
        else
            local dealSound = fishConfig.deadSound
            local sdata = G.Tool.StringHelper.Split(fishConfig.deadSound, ",")
			if sdata ~= nil then
				if (#sdata > 1) then
					local rd = fish.randomIns:RangeInt(1, 101)
					local curIndex = 0
					for i, v in pairs(sdata) do
						local cdata = G.Tool.StringHelper.Split(v, ":")
						curIndex = curIndex + tonumber(cdata[2])
						if (rd <= curIndex) then
							dealSound = cdata[1]
							break
						end
					end
				else
					dealSound = sdata[1]
				end
			else
				print("######################## " .. fish.FishID .. "dead sound error !!")
			end
			
            if (dealSound ~= "" and dealSound ~= "0") then
                G.Tool.Sound.PlayGameSound(string.format("%.0f%s", dealSound, "_die"))
            end
			
			if fish.fishAnim ~= nil then
				fish.fishAnim:SetTrigger("Dead");
			end
			
			if fish.boxCollider ~= nil then
				fish.boxCollider.gameObject:SetActive(false)
			end
			if fish.boxCollider1 ~= nil then
				fish.boxCollider1.gameObject:SetActive(false)
			end
			
			if fish.electricLine ~= nil then
				fish.electricLine.gameObject:SetActive(false)
			end
		
			if fish.electricPoint ~= nil then
				fish.electricPoint.gameObject:SetActive(false)
			end
			
            fish.KillSequences()

            -- Ч
			local isPlayDeadEffect = false
			-- Ч
            if (fishConfig.deadEffect > 0) then
				isPlayDeadEffect = true
			-- ʹAO,?^ը
			elseif showEffectDeath == true then
				-- "DeadEff_0"
				isPlayDeadEffect = true
            end
			
			if isPlayDeadEffect == true then
				-- Sλ
				if tostring(fishConfig.deadEffect) == "1" then
					G.Tool.Sound.PlayGameSound("s_zhadan")
					fish.sequenceBoom = CS.DG.Tweening.DOTween.Sequence();
					local _x = 0
					local _y = 0
					local _scale = 0.8
					for i=1,4 do
						local temp = i
						fishDeadEffectList[i] = CS.FrameWork.ObjectPoolManager.Instance:Get("DeadEff_" .. fishConfig.deadEffect)
						fishDeadEffectList[i]:SetActive(false)
						if fishDeadEffectList[i] ~= nil then
							if i == 1 then
								_x = fish.randomIns:RangeFloat(0,Model.Defines.WorldDimensionMax_x * _scale)
								_y = fish.randomIns:RangeFloat(0,Model.Defines.WorldDimensionMax_y * _scale)
							elseif i == 2 then
								_x = fish.randomIns:RangeFloat(0,Model.Defines.WorldDimensionMax_x * _scale)
								_y = fish.randomIns:RangeFloat(Model.Defines.WorldDimensionMin_y,0)
							elseif i == 3 then
								_x = fish.randomIns:RangeFloat(Model.Defines.WorldDimensionMin_x,0)
								_y = fish.randomIns:RangeFloat(Model.Defines.WorldDimensionMin_y,0)
							elseif i == 4 then
								_x = fish.randomIns:RangeFloat(Model.Defines.WorldDimensionMin_x,0)
								_y = fish.randomIns:RangeFloat(0,Model.Defines.WorldDimensionMax_y * _scale)
							end
							fishDeadEffectList[i].transform.position = Model.Call.Get2DToUIPoint(CS.UnityEngine.Vector3(_x,_y,0))
							fish.sequenceBoom:AppendInterval(0.3)
							fish.sequenceBoom:AppendCallback(function() 
								fishDeadEffectList[temp]:SetActive(true) 
								fish.sequenceBoom = nil
							end)	
						end	
					end
				elseif tostring(fishConfig.deadEffect) == "5" then
					G.Tool.Sound.PlayGameSound("s_zhadan")					
				end				
				
				fishDeadEffect = CS.FrameWork.ObjectPoolManager.Instance:Get("DeadEff_" .. fishConfig.deadEffect)
				if fishDeadEffect ~= nil then
					fishDeadEffect.transform.position = Model.Call.Get2DToUIPoint(fish.GameObj.transform.position)					
					fishDeadEffect:SetActive(true)
				else
					print("not find effect prefab", fishDeadEffect)
				end				
			end
			
			fish.sequenceDead = CS.DG.Tweening.DOTween.Sequence();
			-- ?
			local aniTime = 0.5
			local deadColor = CS.UnityEngine.Color(0.5, 0.5, 0.5, 1)
			for i = 1, #fish.fishMats do			
				if i == 1 then
					fish.sequenceDead:Append(fish.fishMats[i]:DOColor(deadColor, aniTime))
				else
					fish.sequenceDead:Join(fish.fishMats[i]:DOColor(deadColor, aniTime))					
				end
			end
			
			-- uʧЧ
			local deadAlphaColor = CS.UnityEngine.Color(0.5, 0.5, 0.5, 0)
			if DeadAlpha == true then
				local alphaTime = delayRelaseTime - aniTime
				for i = 1, #fish.fishMats do
					if i == 1 then
						fish.sequenceDead:Append(fish.fishMats[i]:DOColor(deadAlphaColor, alphaTime))
					else
						fish.sequenceDead:Join(fish.fishMats[i]:DOColor(deadAlphaColor, alphaTime))					
					end
				end		
			end
			fish.sequenceDead:AppendCallback( function()				
				fish.sequenceDead = nil
            end )			
			
            -- ͷż
            local sequence = fish.GetSequence(true);
            sequence:AppendInterval(delayRelaseTime)
            sequence:AppendCallback( function()
							
				fish.Relase()
            end )
			
			for i=1, #fish.fishParticleList do
				fish.fishParticleList[i]:Stop()
			end
        end
    end
	
	fish.DeadBlackHole = function(userID)
		FishManager.FishTable[fish.FishServerID] = nil
		
        if (type(fish.LeavePoolFun) == "function") then
            fish.LeavePoolFun(fish.FishServerID);
            fish.LeavePoolFun = nil
        end
		
		if fish.boxCollider ~= nil then
			fish.boxCollider.gameObject:SetActive(false)
		end
		if fish.boxCollider1 ~= nil then
			fish.boxCollider1.gameObject:SetActive(false)
		end
			
		fish.KillSequences()
		
		
		local clone = CS.AssetBundleManager.Instance:LoadGameObject(groupName, "PathBlackHole")
		local pathAction = clone:GetComponent("DOTweenPath")
		local movePaths = { }
		
		movePaths[0] = fish.GameObj.transform.position
		local targetA = movePaths[0]
		targetA.z = 0
		
		-- úڶʾ
		--uiFishMain.SetPlayerBlackHoleActive(userID,true,fish.FishServerID)
		
		local playerPosition = uiFishMain.GetPlayerBlackHolePosition(userID)
		local targetB = playerPosition
		targetB.z = 0
		-- Ч
		fish.ShowElectricLine(playerPosition)
		-- תǶ
		local angle = CS.UnityEngine.Vector3.Angle(movePaths[0] - playerPosition, CS.UnityEngine.Vector3(1,0,0))
		-- ڶľ
		local disFish = CS.UnityEngine.Vector3.Distance(targetA, targetB)
		
		-- ¸·
		local pathIndex = -1 
		
		-- ҳ¸·
		for j = 1, pathAction.wps.Count - 1, 1 do
			local disPath = CS.UnityEngine.Vector3.Distance(pathAction.wps[pathAction.wps.Count -1], pathAction.wps[j])
			
			if disFish > disPath and pathIndex < 0 then
				pathIndex = j
			end
		end
		
		-- ¼·
		for j = pathIndex, pathAction.wps.Count -1, 1 do
			local _x = pathAction.wps[j].x
			local _y = pathAction.wps[j].y
			local _z = fish.GameObj.transform.position.z
			local target = CS.UnityEngine.Vector3(_x,_y,_z)
			-- ·ĽǶתתǶ
			target = CS.UnityEngine.Quaternion.AngleAxis(angle,CS.UnityEngine.Vector3.forward) * target
			
			movePaths[j - pathIndex +1] = playerPosition + target
		end		
		
		local target = playerPosition
		if movePaths[#movePaths -1].x <= 0 then
			target = target + CS.UnityEngine.Vector3(0.5,0,movePaths[#movePaths].z) 
		else
			target = target + CS.UnityEngine.Vector3(-0.5,0,movePaths[#movePaths].z) 
		end
		
		movePaths[#movePaths +1] = target
		
		local endTimer = uiFishMain.GetGoldNumberCreatorBlackTime()
		local sequenceMove = fish.GetSequence(true);
		sequenceMove:Append(fish.GameObj.transform:DOFramePath(movePaths, pathAction.duration, pathAction.loops, pathAction.orientType));		
		sequenceMove:AppendCallback( function()
		
			fish.SetFishFrozenState(false)
			if fish.fishAnim ~= nil then
				fish.fishAnim:SetTrigger("Dead");
			end			
			
			local sequenceScale = CS.DG.Tweening.DOTween.Sequence();
			for i=1,10 do
				sequenceScale:AppendInterval(0.5)
				sequenceScale:AppendCallback(function() 
					fish.SetFishFrozenState(false)
					
					local user = Model.Call.GetIDToUser(userID)
					if not user then
						sequenceMove:Kill()
						sequenceScale:Kill()
						fish.Dead(1,true)
					else
						fish.BaseScale = fish.BaseScale * 0.98
					end
				end)
			end
		end)
		sequenceMove:AppendInterval(endTimer)
		sequenceMove:AppendCallback(function() 
			-- úڶʾ
			--uiFishMain.SetPlayerBlackHoleActive(userID,false,fish.FishServerID)
			fish.Dead(1,true)
		end)
		
		local initScale = fish.BaseScale
		local sequenceScale = CS.DG.Tweening.DOTween.Sequence();
		for i=1,50 do
			sequenceScale:AppendInterval(0.1)
			sequenceScale:AppendCallback(function()				
				fish.BaseScale = initScale - ((initScale - 0.7) * 0.02 * i)
								
				local user = Model.Call.GetIDToUser(userID)
				if not user then
					sequenceMove:Kill()
					sequenceScale:Kill()
					fish.Dead(1,true)
				end
			end)
		end
		--fish.SetMoveSequence(sequenceMove)
		
		return pathAction.duration
	end

    -- ܻ
    fish.Hit = function()		
		if (CS.UnityEngine.Time.realtimeSinceStartup - fish.LastHitTime) < HitCooldown then
			return
		end
		
		fish.LastHitTime = CS.UnityEngine.Time.realtimeSinceStartup
		
		for _, v in pairs(fish.sequencesHit) do
			v:Kill()
		end
		fish.sequencesHit = {}
		
		for i = 1, #fish.fishMats do
			local sequence = CS.DG.Tweening.DOTween.Sequence();
			sequence:Append(fish.fishMats[i]:DOColor(CS.UnityEngine.Color(1.0, 0.2, 0.2, 1), 0.05))
            sequence:AppendInterval(0.1)
			sequence:Append(fish.fishMats[i]:DOColor(CS.UnityEngine.Color(1.0, 1.0, 1.0, 1), 0.05))
            sequence:AppendCallback( function()
				table.remove(fish.sequencesHit, 1)
            end )			
			table.insert(fish.sequencesHit, sequence)
		end
    end

    -- ñ״̬
    fish.SetFishFrozenState = function(isFrozen)		
		fish.fishAnim.enabled = not isFrozen
		for i=1, #fish.fishAnimList do
			fish.fishAnimList[i].enabled = not isFrozen
		end
		for i=1, #fish.fishParticleList do
			if(isFrozen)then
				fish.fishParticleList[i]:Pause()
			else
				fish.fishParticleList[i]:Play()
			end
		end
    end
	
	fish.IsInAlphaDisappear = function()
		if fish.alphaSequence ~= nil then
			return true
		else
			return false
		end	
	end
	
	fish.AlphaDisappear = function(delayTime, alphaTime)
		if fish.IsInAlphaDisappear() == true then
			return
		end
	
		-- uʧЧ
		local nowColor = CS.UnityEngine.Color(1.0, 1.0, 1.0, 1.0)
		local deadAlphaColor = CS.UnityEngine.Color(1.0, 1.0, 1.0, 0)
		
		fish.alphaSequence = CS.DG.Tweening.DOTween.Sequence();
		if delayTime > 0 then
			fish.alphaSequence:AppendInterval(delayTime)
		end
		if DeadAlpha == true then
			for i = 1, #fish.fishMats do
				fish.fishMats[i].color = nowColor
				if i == 1 then
					fish.alphaSequence:Append(fish.fishMats[i]:DOColor(deadAlphaColor, alphaTime))						
				else
					fish.alphaSequence:Join(fish.fishMats[i]:DOColor(deadAlphaColor, alphaTime))
				end
			end		
		end
		fish.alphaSequence:AppendCallback( function()
			fish.Disappear()
			fish.alphaSequence = nil
		end )			
		
		for i=1, #fish.fishParticleList do
			fish.fishParticleList[i]:Stop()
		end		
	end
	
    -- 㳱٣ʧ
    fish.Disappear = function()
        FishManager.FishTable[fish.FishServerID] = nil

        if (type(fish.LeavePoolFun) == "function") then
            fish.LeavePoolFun(fish.FishServerID);
            fish.LeavePoolFun = nil
        end

        if Model.IsRecoverRet then
            fish.Relase()
        else
			if fish.boxCollider ~= nil then
				fish.boxCollider.gameObject:SetActive(false)
			end
			if fish.boxCollider1 ~= nil then
				fish.boxCollider1.gameObject:SetActive(false)
			end
			
			fish.Relase()
        end
    end

    -- ͷԴ
    fish.Relase = function()
		
		if fish.isRelease == false then
			return
		end
		
		FishManager.FishTable[fish.FishServerID] = nil
		
        fish.RelaseSequences()

        if not Model.IsRecoverRet and fish.fishType == 2 then
            -- Boss㣬лر
            G.Tool.Sound.PlayGameBGM("bgmusic_" .. CS.Utility.RangeInt(1, 3))
        end
        if (fishDeadEffect) then
            CS.FrameWork.ObjectPoolManager.Instance:Release("DeadEff_" .. fishConfig.deadEffect, fishDeadEffect)
        end
		
		for k,v in pairs(fishDeadEffectList) do
			CS.FrameWork.ObjectPoolManager.Instance:Release("DeadEff_" .. fishConfig.deadEffect, v)
		end
		fishDeadEffectList = {}

        CS.FrameWork.ObjectPoolManager.Instance:Release("Fish_" .. fish.FishID, fish.GameObj)
		
		if fish.fishObj ~= nil then
			fish.fishObj.gameObject:SetActive(false)
		end
		
		if fish.electricLine ~= nil then
			CS.FrameWork.ObjectPoolManager.Instance:Release("electricLine", fish.electricLine)
		end
		
		if fish.electricPoint ~= nil then
			CS.FrameWork.ObjectPoolManager.Instance:Release(electricPoint)
		end
    end
	
	fish.RelaseSequences = function()
		fish.KillSequences()
		
		if fish.alphaSequence ~= nil then
			fish.alphaSequence:Kill()
			fish.alphaSequence = nil
		end
		
		for _, v in pairs(fish.sequencesHit) do
			v:Kill()
		end
		fish.sequencesHit = {}
		
		if fish.sequenceBoom ~= nil then
			fish.sequenceBoom:Kill()
			fish.sequenceBoom = nil
		end

		if fish.sequenceDead ~= nil then
			fish.sequenceDead:Kill()
			fish.sequenceDead = nil
		end		
	end
	
    fish.FrameUpdate = function()
        if (fish.LeavePoolFun ~= nil and type(fish.LeavePoolFun) == "function") and not fish.CheckIsInPool() then
            fish.LeavePoolFun(fish.FishServerID);
            fish.LeavePoolFun = nil
        end
		
		if fish.isShow == false then
			fish.isShow = true
			fish.fishObj.gameObject:SetActive(true)
			if fish.boxCollider ~= nil then
				fish.boxCollider.gameObject:SetActive(true)
			end
			if fish.boxCollider1 ~= nil then
				fish.boxCollider1.gameObject:SetActive(true)
			end
			
			fish.BaseZ = fish.GameObj.transform.position.z
			
			for i=1, #fish.fishParticleList do
				fish.fishParticleList[i]:Play()
			end
		end
		--print(tostring(fish.fishAnim.enabled))
	end
	
    fish.OnUpdate = function()
		if fish.GameObj == nil then
			return
		end
	
		fish.accUpdate = fish.accUpdate + 1
		if fish.accUpdate < 1 then
			return
		end
		
		fish.accUpdate = 0
	
		moveDirection = fish.GameObj.transform.position - fish.prePos
		
		-- ~
		if moveDirection.x == 0 and moveDirection.y == 0 and moveDirection.z == 0 then
			--print("!!!!!!!!!!!!!!!! moveDirection is nil")			
		else
			fish.fishObj.transform.forward = moveDirection
		end
		fish.prePos = fish.GameObj.transform.position
		
		fish.fishObj.transform.localScale = CS.UnityEngine.Vector3(1, 1 * fish.RotationPlayer, 1) * fish.BaseScale * fish.SwinTypeScale
		
		-- ?~Сs
		local z = fish.GameObj.transform.position.z - fish.BaseZ
		
		local scale = ScaleMax - z * ScaleDis * ScaleOffset
		if scale < 0 then
			--ShowLog(fish, "scale < 0")
			scale = ScaleMin
		end
		
		if scale < ScaleMin then
			--ShowLog(fish, "scale < ScaleMin")
			scale = ScaleMin
		end
		
		if scale > 1.0 then
			--ShowLog(fish, "scale > 1.0")
			scale = 1.0
		end
						
		fish.fishObj.transform.localScale = fish.fishObj.transform.localScale * scale

		if fish.EulerAngles == true then
			local localEulerAngles = fish.BodyObj.transform.localEulerAngles
			local EulerAngles = CS.UnityEngine.Vector3(localEulerAngles.x, localEulerAngles.y, localEulerAngles.z)
			
			if fish.EulerAnglesY ~= nil then
				EulerAngles.y = fish.EulerAnglesY
			end
				
			if moveDirection.x < 0 then
				if fish.EulerAnglesX ~= nil then
					EulerAngles.x = fish.EulerAnglesX
				end
			
				if fish.EulerAnglesZ ~=nil then
					EulerAngles.z = -fish.EulerAnglesZ
				end
			elseif moveDirection.x > 0 then
				if fish.EulerAnglesX ~= nil then
					EulerAngles.x = -fish.EulerAnglesX
				end
				
				if fish.EulerAnglesZ ~= nil then
					EulerAngles.z = fish.EulerAnglesZ
				end
			end
			fish.BodyObj.transform.localEulerAngles = EulerAngles
			
			if fish.boxCollider ~= nil then
				fish.boxCollider.transform.localEulerAngles = EulerAngles
			end
			if fish.boxCollider1 ~= nil then
				fish.boxCollider1.transform.localEulerAngles = EulerAngles
			end
		end		
				
		if fish.electricLineRenderer ~= nil then
			local fishPos = fish.GameObj.transform.position
			fishPos.z = 0
			fish.electricLineRenderer:SetPosition(0, fishPos)
			
			fish.electricPoint.transform.localScale = CS.UnityEngine.Vector3.one
			fish.electricPoint.transform.eulerAngles = CS.UnityEngine.Vector3.zero	
			fish.electricPoint.transform.position = fishPos;	
		end
    end

    fish.CheckIsInPool = function()
        if math.abs(fish.GameObj.transform.position.x) < Model.Defines.WorldDimensionMax_x and math.abs(fish.GameObj.transform.position.y) < Model.Defines.WorldDimensionMax_y then
            return true;
        else
            return false;
        end
    end

	-- Ϊӵ
	fish.TurnIntoBullet = function(_userID)	
		if fish.bullet ~= nil then
			local bulletData = { }
			bulletData.UserID = _userID
			bulletData.FishID = fish.FishID
			
			local clone = CS.UnityEngine.GameObject.Instantiate(fish.bullet.gameObject)
			clone.transform.position = CS.UnityEngine.Vector3(fish.fishObj.transform.position.x,fish.fishObj.transform.position.y,0)
			uiFishMain.TurnIntoBullet(bulletData,clone)
		end
	end
	
	fish.StopAnimator = function()
		
	end
	
	fish.SetSwell = function(_scale)					
		if fish.effectSwell == nil then return end
		
		local sequence = CS.DG.Tweening.DOTween.Sequence();
		sequence:AppendCallback(function()
			fish.BaseScale = fish.fishScale *  (100 + _scale) * 0.01
						
			if _scale >= 50 then
				fish.effectSwell.gameObject:SetActive(true)
			end
		end)
		sequence:OnUpdate(function()
			if fish ~= nil then
				fish.OnUpdate()
			end
		end)
	end

	fish.ShowElectricLine = function(endPos)
        fish.electricLine = CS.FrameWork.ObjectPoolManager.Instance:Get("electricLine")
        fish.electricLineRenderer = fish.electricLine:GetComponent("LineRenderer")
		fish.electricLineRenderer.positionCount = 2;
		
		-- ЧõҲ㣬㼶Ƚҵ
        fish.electricLineRenderer.sortingLayerName = "4";
        fish.electricLineRenderer.sortingOrder = 1;
		
		local fishPos = fish.GameObj.transform.position
		fishPos.z = 0
		endPos.z = 0
		
		fish.electricLineRenderer:SetPosition(0, fishPos) -- _ʼλ,~
        fish.electricLineRenderer:SetPosition(1, endPos) -- Yλ,ڶ
		
		fish.electricPoint = CS.FrameWork.ObjectPoolManager.Instance:Get("electricPoint")
		fish.electricPoint.transform.localScale = CS.UnityEngine.Vector3.one
        fish.electricPoint.transform.eulerAngles = CS.UnityEngine.Vector3.zero	
		fish.electricPoint.transform.position = fishPos;
	end
	
    return fish
end

function ShowLog(obj, text)
	print(obj.GameObj.name .. " " .. text)
	print(tostring(obj.FishID) .. " scale " .. tostring(scale))
	print(tostring(obj.FishID) .. " pos " .. tostring(obj.GameObj.transform.position.z))
	print(tostring(obj.FishID) .. " BaseZ " .. tostring(obj.BaseZ))		
end