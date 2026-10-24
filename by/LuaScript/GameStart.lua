local G = require "Global"
local Model = G.RequireG("FishModel")
local byConfig = G.RequireG("ByConfig");
local fishManager = G.RequireG("Fish/FishManager");
local coinCreator = G.RequireG("CoinCreator")
local goldNumberCreator = G.RequireG("GoldNumberCreator")

local Vector3 = CS.UnityEngine.Vector3
local Vector2 = CS.UnityEngine.Vector2

local Input = CS.UnityEngine.Input
local KeyCode = CS.UnityEngine.KeyCode
local TouchPhase = CS.UnityEngine.TouchPhase
local Transform = CS.UnityEngine.Transform
local Object = CS.UnityEngine.Object
local Quaternion = CS.UnityEngine.Quaternion
local EventSystem = CS.UnityEngine.EventSystems.EventSystem
local groupName = G.GetGamePName();

local uiFishMain = G.RequireG("UIFishMain")

byConfig.Load();

local recTran_Ann
local txt_NoticeContent

local annShadeWidth  -- 公告文本遮罩宽度 
local annInitPos
local highestUIObj
local RectTran_NoticeContent
local UILoading 
function GetNoticeContentWidth()
    return CS.UnityEngine.UI.LayoutUtility.GetPreferredWidth(RectTran_NoticeContent)
end 

local CameraUI
local CameraScene
local CameraFish
local uIMenuTranScritp
local projectionMatrixScene
local projectionMatrixFish

-- region 游戏入口脚本
function Start()

    --CS.UnityEngine.QualitySettings.SetQualityLevel(2, true);


    print("..............................GameStart........................")
    G.Tool.Sound.PlayGameBGM("bgmusic_" .. CS.Utility.RangeInt(1, 3))
    Model.Call.Close()
    Model.Call.InitModel()
    Model.Call.RegMsgHook()
    local CameraUI = this.transform:Find("UICamera"):GetComponent("Camera")

    CameraScene = this.transform:Find("Camera"):GetComponent("Camera")
	projectionMatrixScene = CameraScene.projectionMatrix	
	
	CameraFish = this.transform:Find("CameraFish"):GetComponent("Camera")
	projectionMatrixFish = CameraFish.projectionMatrix

    Model.Call.SetCamera(CameraScene, CameraUI)
	
    uiFishMain.InitWidget(this, this.transform:Find("UIFishMain"), this.transform:Find("UIMainNode"))

    local objectNode = this.transform:Find("UIFishMain/2DObjectNode")
    local uiNode = this.transform:Find("UIMainNode/Node")

    recTran_Ann = this.transform:Find("UIMainNode/Ann")
    txt_NoticeContent = this.transform:Find("UIMainNode/Ann/Mask/NoticeContent"):GetComponent("Text")

    annShadeWidth = txt_NoticeContent.transform.parent:GetComponent("RectTransform").sizeDelta.x
    annInitPos = txt_NoticeContent.transform.localPosition
    RectTran_NoticeContent = txt_NoticeContent.transform:GetComponent("RectTransform")

    fishManager.Init(this, objectNode)

    coinCreator.Init(this)
    goldNumberCreator.Init(this, uiNode)

    local UIMenuTran = this.transform:Find("UIMainNode/UIMenu")
    uIMenuTranScritp = UIMenuTran.gameObject:AddScriptComponent(groupName, "UIMenu")
    uIMenuTranScritp.Init(this)

    -- region 游戏加载界面
    UILoading = this.transform:Find("UIMainNode/UILoading")
    UILoading.gameObject:SetActive(true);

	if G.IsPreLoadedGameRes() == false then
		G.Service.NetworkService.CloseRoomSocket()
	end
	
    local loadingScritp = UILoading.gameObject:AddScriptComponent(groupName, "UILoading")
    loadingScritp.Init(this)

    -- endregion

    -- BufText()
    highestUIObj = CS.UnityEngine.GameObject.Find("[UIRoot]/Windows/Highest")
    if(highestUIObj) then
        highestUIObj:SetActive(false)
    end
end

-- 回收方法
function OnDestroy()

    Model.Call.Close()
    -- 回收当前页面注册的消息
    G.NetQ.RemoveMsgHookByGroup(groupName)
    G.Service.Game.RemoveLoadGameLua()
    Model.Call.CloseSequence()
    StopFrameTimer()
	fishManager.RelaseSequences()
    --fishManager.FishTable = { }
    Model.BulletList = { }
	uiFishMain.OnDestroy()	
end

-- 是否点中了UI
local isPointDownOnUI = false;

function Update()
    if G.Room.GameLoginSuccess() == true and Model.IsGameReady then

        if (#txt_NoticeContent.text > 0 and txt_NoticeContent.transform.localPosition.x > annInitPos.x - GetNoticeContentWidth() - annShadeWidth) then
            txt_NoticeContent.transform.localPosition = txt_NoticeContent.transform.localPosition - CS.UnityEngine.Vector3(CS.UnityEngine.Time.deltaTime * 50, txt_NoticeContent.transform.localPosition.y, txt_NoticeContent.transform.localPosition.z)
        else
            local message = Model.Call.GetAnnMeg()
			
            if message == nil then
                recTran_Ann.gameObject:SetActive(false)
                txt_NoticeContent.text = ""
            else
                txt_NoticeContent.transform.localPosition = annInitPos
                txt_NoticeContent.text = message
                recTran_Ann.gameObject:SetActive(true)
            end
        end

        if G.Env.IsWindows() then
            if EventSystem.current:IsPointerOverGameObject() and CS.UnityEngine.Input:GetMouseButtonDown(0) then
                isPointDownOnUI = true;
                return
            end

            if isPointDownOnUI and CS.UnityEngine.Input.GetMouseButtonUp(0) then
                isPointDownOnUI = false
            end
        else
            if CS.UnityEngine.Input.touchCount > 0 and EventSystem.current:IsPointerOverGameObject(CS.UnityEngine.Input.GetTouch(0).fingerId) and CS.UnityEngine.Input.GetTouch(0).phase == CS.UnityEngine.TouchPhase.Began then
                isPointDownOnUI = true;
                return
            end

            if isPointDownOnUI and CS.UnityEngine.Input.GetTouch(0).phase == CS.UnityEngine.TouchPhase.Ended then
                isPointDownOnUI = false
            end
        end

        if isPointDownOnUI then
            return
        end

        local worldpos
        if Input.GetMouseButton(0) then
            worldpos = CS.UnityEngine.Input.mousePosition
        end

        if Input.touchCount > 0 and Input.GetTouch(0).phase == TouchPhase.Moved then
            worldpos = Vector3(Input.GetTouch(0).position.x, Input.GetTouch(0).position.y, 0)
        end

        if worldpos then
            worldpos = Model.SceneData.camera:ScreenToWorldPoint(worldpos)

            local user = Model.Call.GetPlayerData()
			local BoomType = Model.Call.GetBulletBoomType(user.gunLevel)
			-- 類型3子彈不需要檢查碰撞
			if BoomType == 3 then
				uiFishMain.ManualShoot(worldpos)			
			else
				if user.isLock then
					-- 射线检测鱼
					local hit = CS.UnityEngine.Physics2D.Raycast(Vector2(worldpos.x, worldpos.y), Vector2.zero, 2000);
					if hit.transform ~= nil then
						local fish = fishManager.FishTable[tonumber(hit.transform.parent.parent.parent.gameObject.name)]										
						if fish then
							Model.Call.SetLockFishID(fish)
							uiFishMain.ManualShoot(worldpos)
						end
					end
				else
					uiFishMain.ManualShoot(worldpos)
				end
			end
        end
    end
	
	uiFishMain.Update()
end

-- 踢出房提示訊息
--local isShowExitMessage = false
G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game_BY.BYLeaveTip, function(receiveMsg)
	Model.Call.ShowNotDoSomething(receiveMsg.TipMessage,receiveMsg.Time)
end, groupName);

G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game_BY.BYSettingID, function(receiveMsg)
    G.Tool.TableHelper.Print(receiveMsg)
	--G.Tool.TableHelper.Print("比賽類型 GameType",receiveMsg.GameType)
	--G.Tool.TableHelper.Print("活動設定 Competition",receiveMsg.Competition)
	--G.Tool.TableHelper.Print("砲台資料 BoomSetting",receiveMsg.BoomSetting)
	
	Model.Call.InitSetting(receiveMsg)
	
	-- 上傳玩家使用的槍
	if receiveMsg.GameType == 0 then
		local myGunLevel = Model.Call.GetPlayerSaveBulletData()
		Model.Call.SetUserGunLevel(myGunLevel)
		Model.Call.SendGunBei(myGunLevel)
	end
	Model.Call.SetCanShootState(receiveMsg.GameType == 0)
	
	-- 設定魚倍率
	uIMenuTranScritp.InitFishType()
	
	CS.UILoadingData.Hide()
		
    uiFishMain.OpenUI(receiveMsg)

    this:InvokeRepeating(FrameTimer, 0.5, Model.Defines.FrameTime)
end , groupName);

G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game_BY.BYNotifyFish, function(receiveMsg)
	Model.Call.SetAnnMeg(receiveMsg.TipMessage)
end, groupName);

function StopFrameTimer()
    this:CancelInvokeRepeat(FrameTimer)
end

RealFrameTime = 0;
LastSyncTime = 0;

function Scale(v)
	local m = CS.UnityEngine.Matrix4x4()
	m.m00 = v.x
	m.m01 = 0
	m.m02 = 0
	m.m03 = 0
	m.m10 = 0
	m.m11 = v.y
	m.m12 = 0
	m.m13 = 0
	m.m20 = 0
	m.m21 = 0
	m.m22 = v.z
	m.m23 = 0
	m.m30 = 0
	m.m31 = 0
	m.m32 = 0
	m.m33 = 1
	return m
end

function FrameTimer()
    if G.Room.GameLoginSuccess() == true then
        if Model.IsGameReady == false then
            Model.IsGameReady = true

			if Model.Defines.RotationPlayer == true then
				if Model.Call.IsRotationPlayer() == true then
					-- Scale不使用unity的發法,但做法和unity一樣,否則在IOS上會有問題
					CameraFish.projectionMatrix = projectionMatrixFish * Scale(CS.UnityEngine.Vector3(1, -1, 1))
					CameraScene.projectionMatrix = projectionMatrixScene * Scale(CS.UnityEngine.Vector3(1, -1, 1))
				else
					CameraFish.projectionMatrix = projectionMatrixFish
					CameraScene.projectionMatrix = projectionMatrixScene
				end
			end			
			
			if Model.IsIce == true then
				-- 冰凍下少執行一次,再次執行以修正面向
				local removeFrameTime = Model.Defines.FrameTime * Model.RecoverFrameNumber - Model.Defines.FrameTime
				-- 驱动执行Dotween帧
				CS.DG.Tweening.DOTween.ManualUpdate(removeFrameTime, removeFrameTime)
				
				CS.DG.Tweening.DOTween.ManualUpdate(Model.Defines.FrameTime, Model.Defines.FrameTime)
				-- 顯示魚
				fishManager.FrameUpdate()
				-- 設定冰凍狀態
				fishManager.SetAllFishFrozenState(Model.IsIce)
			else
				local removeFrameTime = Model.Defines.FrameTime * Model.RecoverFrameNumber
				-- 驱动执行Dotween帧
				CS.DG.Tweening.DOTween.ManualUpdate(removeFrameTime, removeFrameTime)
			end
			
			Model.Call.GameReady()
			
            UILoading.gameObject:SetActive(false)
        else
            if LastSyncTime == 0 then
                RealFrameTime = Model.Defines.FrameTime
            else
                RealFrameTime = CS.UnityEngine.Time.realtimeSinceStartup - LastSyncTime
            end

            LastSyncTime = CS.UnityEngine.Time.realtimeSinceStartup

            -- 子弹移动
            Model.FrameUpdate()

            -- 判断是否冰冻再做移动
            if Model.IsIce == false then
                -- 鱼移动
                fishManager.FrameUpdate()
                -- 驱动执行Dotween帧
                CS.DG.Tweening.DOTween.ManualUpdate(RealFrameTime, RealFrameTime)
            end

        end
    end
end




