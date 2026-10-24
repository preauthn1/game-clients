local img_LoadingFill = this.transform:Find("LoadingFill"):GetComponent("Image")
local img_LoadingBG = this.transform:Find("BG"):GetComponent("Image")


local G = require "Global"

local WaterWave = G.RequireG("WaterWave")

local ByConfig = G.RequireG("ByConfig");
local Model = G.RequireG("FishModel")
local fishManager = G.RequireG("Fish/FishManager");

local Vector3 = CS.UnityEngine.Vector3

local groupName = G.GetGamePName()
local gameStart;
local isLoadingAnim = false
local isLoadingFinish = false
local LoadingAnim

local yield_return = G.Util.async_to_sync
(
function(to_to_yield, cb)
    gameStart:YieldAndCallback(to_to_yield, cb)
end
)

function Init(_gameStart)
    gameStart = _gameStart
end

function CreatePool(poolName, initSize, maxSize, prefabName)
	-- GetRunGameID == 0表示已經離開遊戲
	-- 發現離開遊戲後雖然停止了lua,仍然會跑一下子
	if G.GetRunGameID() == 0 then
		return false
	end

	if CS.FrameWork.ObjectPoolManager.Instance:GetPool(poolName) == nil then
		local prefab = CS.AssetBundleManager.Instance:LoadGameObject(groupName, prefabName, false)
		CS.FrameWork.ObjectPoolManager.Instance:CreatePool(poolName, initSize, maxSize, prefab)
		return true
	else
		return false
	end
end

function CreateFishPool(fishID, initSize)
	-- GetRunGameID == 0表示已經離開遊戲
	-- 發現離開遊戲後雖然停止了lua,仍然會跑一下子
	if G.GetRunGameID() == 0 then
		return false
	end
	
	--return false
	local result = fishManager.CreateFishPool(fishID, initSize)
	return result
end


function Start()
	WaterWave.Init(img_LoadingBG.material, true, true, 0.03, 0.1, 0.015)
	
	local IsCreatePool = false
    isLoadingAnim = false
    img_LoadingFill.fillAmount = 0;
    LoadingAnim = this.transform:Find("LoadingNode/LoadingAnim")
    G.Util.coroutine_call( function()
        isLoadingAnim = true
        if G.IsPreLoadedGameRes() == false then
            for i = 1, 8 do
                local b_n = "Bullet_00" ..(i)
                img_LoadingFill:DOFillAmount(i / 8 * 0.05, 0.1)
                if IsCreatePool == true then yield_return(1) end
                IsCreatePool = CreatePool(b_n, 40, 30, b_n)
            end
			local b_n = "Bullet_0036"
			IsCreatePool = CreatePool(b_n, 10, 30, b_n)
			b_n = "FishNet_Nuclear"
			IsCreatePool = CreatePool(b_n, 10, 30, b_n)
			
            for i = 1, 8 do
                local fn_n = "FishNet_" ..(i)
                img_LoadingFill:DOFillAmount(0.1 + i / 8 * 0.05, 0.1)
                if IsCreatePool == true then yield_return(1) end
                IsCreatePool = CreatePool(fn_n, 40, 30, fn_n)
            end
			
            IsCreatePool = CreatePool("AddMoneyText", 5, 10, "AddMoneyText")
            IsCreatePool = CreatePool("SubMoneyText", 2, 5, "SubMoneyText")
			
            -- 本人击中鱼飞出的金币
            img_LoadingFill:DOFillAmount(0.15, 0.1)
			if IsCreatePool == true then yield_return(1) end
            IsCreatePool = CreatePool("jinbi_1", 100, 30, "jinbi_1")
            IsCreatePool = CreatePool("jinbi_eruption", 2, 5, "jinbi_eruption")

            -- 其他人击中鱼飞出的金币
            img_LoadingFill:DOFillAmount(0.20, 0.1)
			if IsCreatePool == true then yield_return(1) end
            IsCreatePool = CreatePool("yinbi_1", 100, 30, "yinbi_1")
            IsCreatePool = CreatePool("yinbi_eruption", 2, 5, "yinbi_eruption")
			
            -- 用于显示金币数量
            img_LoadingFill:DOFillAmount(0.25, 0.1)
			if IsCreatePool == true then yield_return(1) end
            IsCreatePool = CreatePool("GoldNumberShow", 30, 40, "GoldNumberShow")

            -- 用于显示别人金币数量
            img_LoadingFill:DOFillAmount(0.25, 0.1)
			if IsCreatePool == true then yield_return(1) end
            IsCreatePool = CreatePool("OtherGoldNumberShow", 30, 5, "OtherGoldNumberShow")

            -- 用于显示大额金币数量
            img_LoadingFill:DOFillAmount(0.3, 0.1)
			if IsCreatePool == true then yield_return(1) end
            IsCreatePool = CreatePool("GoldNumberShow_Small", 10, 5, "GoldNumberShow_Small")
            IsCreatePool = CreatePool("GoldNumberShow_Large", 2, 5, "GoldNumberShow_Large")
            IsCreatePool = CreatePool("GoldNumberShow_Black", 2, 5, "GoldNumberShow_Black")
			
			-- LuckyBonus
			if IsCreatePool == true then yield_return(1) end
            IsCreatePool = CreatePool("LuckyBonus", 10, 5, "LuckyBonus")			
			
            -- 用于闪电鱼特效连线
            img_LoadingFill:DOFillAmount(0.35, 0.1)
			if IsCreatePool == true then yield_return(1) end
            IsCreatePool = CreatePool("electricPoint", 50, 50, "electricPoint")
            IsCreatePool = CreatePool("electricLine", 2, 2, "electricLine")
			
			--因跳號所以修改下方解讀方式
			--local roomConfig = ByConfig.RoomTable[tonumber(G.Room.GetRoomLevel())]
			local roomConfig = nil
			for k,v in pairs(ByConfig.RoomTable) do
				if v.roomNumber == tonumber(G.Room.GetRoomLevel()) then
					roomConfig = v
				end
			end
			
			local preLoadFishNumber = roomConfig.preLoadFishNumber
            local type_NumberGroup = G.Tool.StringHelper.Split(preLoadFishNumber, ",")			
			
			-- 用于显示鱼死亡特效			
            IsCreatePool = CreatePool("DeadEff_0", 20, 40, "DeadEff_0")
			
            -- 根据房间配置，预加载鱼
            for k = 1, #type_NumberGroup, 1 do
				img_LoadingFill:DOFillAmount(k / #type_NumberGroup * 0.65 + 0.35, 0.2)
				if IsCreatePool == true then yield_return(1) end
                
				local type_Number = G.Tool.StringHelper.Split(type_NumberGroup[k], ":")
                local fishID = type_Number[1]
				local fishNumber = type_Number[2]
				IsCreatePool = CreateFishPool(fishID, fishNumber)
            end

            G.PreLoadGameResComplated()
			
			G.Service.NetworkService.ReLoginRoom()
        else
            img_LoadingFill.fillAmount = 1
			LoadingAnim.transform.localPosition = Vector3(632 * img_LoadingFill.fillAmount, 0, 0)
        end
        isLoadingAnim = false
		isLoadingFinish = true
        G.NetQ.Resume()
		
		WaterWave.End()
    end )()
end
function Update()
    if isLoadingAnim then
        LoadingAnim.transform.localPosition = Vector3(632 * img_LoadingFill.fillAmount, 0, 0)
    end
	
	WaterWave.DoUpdate()
end
 
-- endregion

-- 断线重连消息 
G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game_BY.UserRecoverRetID, function(receiveMsg)

    print("断线重连总帧数" .. #receiveMsg.FrameInfo)
    Model.RecoverPlayer(receiveMsg.UserStatus)
	Model.RecoverFishWaveTips(receiveMsg.isfishwave,receiveMsg.fishwavetip)
	
    G.Util.coroutine_call( function()
		if isLoadingFinish == false then
			return
		end
	
        -- 断线重连处理过程中不允许解析处理后续逻辑
        G.NetQ.Pause()

        Model.RecoverFrameNumber = 0
        Model.IsRecoverRet = true
        Model.IsGameReady = false

        Model.RecoverTotalFrameNumber = G.Tool.TableHelper.Count(receiveMsg.FrameInfo, function(v) return v.IsIce ~= true end)

        local frameList = {}	
		
		for k = 1, #receiveMsg.FrameInfo, 1 do
			InsertFrameInfo(frameList,receiveMsg.FrameInfo[k])
			frameList[k] = receiveMsg.FrameInfo[k]
        end
		
		for i=1, #frameList do
			if frameList[i] ~= nil then
				Model.S2CFrameMessageHandle(frameList[i])
			end
            if i % 1000 == 0 then
                print("每1000帧等待一帧")
                yield_return(1)
            end
		end	
		
        Model.IsRecoverRet = false
        -- 恢复网络锁定，后续继续解析网络帧数据
        G.NetQ.Resume()
    end )()

end , groupName); 

-- 数字长度补全，如果数字长度不够则在数字前用0补全
local function GetFixedLenthNumber(_number, _length)
    local rtnVal = tostring(_number)

    while string.len(rtnVal) < _length do
        rtnVal = "0" .. rtnVal;
    end

    return rtnVal
end;

-- region 过滤
function InsertFrameInfo(frameList,receiveMsg)
		
	if receiveMsg.UserInfo ~= nil and #receiveMsg.UserInfo ~= 0 then
		for index=1, #receiveMsg.UserInfo do
			for i=1, #frameList do
				if frameList[i].UserInfo ~= nil and #frameList[i].UserInfo ~= 0 then
					for j=#frameList[i].UserInfo,1, -1  do
						if receiveMsg.UserInfo[index].UserID == frameList[i].UserInfo[j].UserID then
							table.remove(frameList[i].UserInfo,j)
						end
					end
				end
			end
		end
	end
	
	-- 处理玩家修改炮弹等级
	if receiveMsg.UserChangeRate ~= nil and #receiveMsg.UserChangeRate ~= 0 then
		for index=1, #receiveMsg.UserChangeRate do
			for i=1, #frameList do
				if frameList[i].UserChangeRate ~= nil and #frameList[i].UserChangeRate ~= 0 then
					for j=#frameList[i].UserChangeRate,1, -1 do
						if receiveMsg.UserChangeRate[index].SeatNO == frameList[i].UserChangeRate[j].SeatNO then
							table.remove(frameList[i].UserChangeRate,j)							
						end
					end
				end
			end
		end
	end
	
	-- 处理锁定消息
	if receiveMsg.SuoDing ~= nil and #receiveMsg.SuoDing ~= 0 then
		for index=1, #receiveMsg.SuoDing do
			for i=1, #frameList do
				if frameList[i].SuoDing ~= nil and #frameList[i].SuoDing ~= 0 then
					for j=#frameList[i].SuoDing,1, -1 do
						if receiveMsg.SuoDing[index].SeatNO == frameList[i].SuoDing[j].SeatNO then
							table.remove(frameList[i].SuoDing,j)
						end
					end
				end
			end
		end
	end
	
	--[[ 处理子弹
	if receiveMsg.Boom ~= nil and #receiveMsg.Boom ~= 0 then
		G.Tool.TableHelper.Print(receiveMsg)
		for index=1, #receiveMsg.Boom do
			for i=1, #frameList do
				if frameList[i].Shoot ~= nil and #frameList[i].Shoot ~= 0 then
					for j=#frameList[i].Shoot,1, -1 do
						if receiveMsg.Boom[index].BoomID == frameList[i].Shoot[j].BoomID then
							print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
							G.Tool.TableHelper.Print(frameList[i])
							table.remove(frameList[i].Shoot,j)
							table.remove(receiveMsg.Boom,index)
							G.Tool.TableHelper.Print(frameList[i])
						end
					end
				end
			end
		end
	end]]
		
	-- 过滤小于50倍的鱼
	if receiveMsg.NewFish ~= nil and #receiveMsg.NewFish ~= 0 then
		--G.Tool.TableHelper.Print(receiveMsg.NewFish)
		 for key, var in pairs(receiveMsg.NewFish) do
			if var.FishType > 1000 then
				for i=0,var.FishCount -1 do
					--print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~NewFish FishId",var.FishNumber,"ServerID",var.FishID + i,"RewardMax",Model.Call.GetFishRewardMaxById(var.FishNumber))
					if(Model.Call.GetFishRewardMaxById(var.FishNumber) < Model.Defines.RecoverMoreRate)then
						Model.Call.AddFishDead(var.FishID + i)
					end
				end
			else
					--print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~NewFish FishId",var.FishType,"ServerID",var.FishID,"RewardMax",Model.Call.GetFishRewardMaxById(var.FishType))
				if(Model.Call.GetFishRewardMaxById(var.FishType) < Model.Defines.RecoverMoreRate)then
					Model.Call.AddFishDead(var.FishID)
				end
			end
		 end		 
	end
		
	-- 处理捕中鱼
	if receiveMsg.Fish ~= nil and #receiveMsg.Fish ~= 0 then
		--G.Tool.TableHelper.Print(receiveMsg.Fish)
		for key, var in pairs(receiveMsg.Fish) do
			--print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~Fish FishID",var.FishID)
			Model.Call.AddFishDead(var.FishID)
		end
	end
	
	-- 过滤小于50倍的鱼
	if receiveMsg.fishWave.FishInfo ~= nil and #receiveMsg.fishWave.FishInfo ~= 0 then
		--G.Tool.TableHelper.Print(receiveMsg.fishWave)
		for key, var in pairs(receiveMsg.fishWave.FishInfo) do
			for i=0,var.Count -1 do
				local serverID = GetFishServerID(var.FishId)
				--print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~NewFish FishId",var.FishId,"ServerID",serverID,"RewardMax",Model.Call.GetFishRewardMaxById(var.FishId))
				if(Model.Call.GetFishRewardMaxById(var.FishId) < Model.Defines.RecoverMoreRate)then
					Model.Call.AddFishDead(serverID)
				end
			end
		end
	end
end

local fishIndexTable = {}
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