require("Module")
mmodule(...)

local G = require "Global"
local WaterWave = G.RequireG("WaterWave")
local Model = G.RequireG("FishModel")
local coinCreator = G.RequireG("CoinCreator")
local goldNumberCreator = G.RequireG("GoldNumberCreator")
local fishManager = G.RequireG("Fish/FishManager")

local ByConfig = G.RequireG("ByConfig");
local bufPlayer = G.RequireG("UIPlayer")
UIPlayer = bufPlayer.UIPlayer
local bufPlayer2D = G.RequireG("Player2D")
Player2D = bufPlayer2D.Player2D
LockHint = { }

local randomIns = CS.FrameWork.Random(9999)

local Color = CS.UnityEngine.Color
local Vector3 = CS.UnityEngine.Vector3
local Quaternion = CS.UnityEngine.Quaternion
local Mathf = CS.UnityEngine.Mathf
local GameObject = CS.UnityEngine.GameObject
local DOTween = CS.DG.Tweening.DOTween

local pojectName = G.GetGamePName()
local this = this or nil
local uithis = uithis or nil
local gameStart = nil

Tran_FishMain = nil

-- Call
local OnAutoButton
local OnLockButton
local OnIceSkillButton

-- region UI
local uiplayer = { }
local player2D = { }
local BulletNode
local AutoButton
local LockButton
local AutoSelect
local LockSelect
local IceSkillButton
local IceSelect
local IceCountDown
local IceMask;
local FishComingNotice
local FishComingNoticeImage1
local FishComingNoticeImage2

local ShootCountDown
local ShootCountDownTimer
local WaveDoing
local WaveDoingTip
local NotDoSomething
local NotDoSomethingTip

local BOSSComing
local BOSSComingName
local BOSSComingNameParticle
local BOSSComingNameLight
local BOSSComingBonus
local BOSSComingBonusParticle
local BOSSComingBonusLight
local BOSSComingBonusText

local AnimationBommCamera
local GameMap
local GameTimer

local ParticleSystem = { }
local FishBulletList = {}

-- endregion

local playerPos = { }
playerPos[0] = Vector3(-5.3, -2.6, 0)
playerPos[1] = Vector3(4, -2.6, 0)
playerPos[2] = Vector3(-5.3, 2.6, 0)
playerPos[3] = Vector3(4, 2.6, 0)

local coinPosObject = {}

local groupName = G.GetGamePName();
-- 用于打印日志
function ToString()
    for k, v in pairs(Model.UserDataList) do
        if v.User.UserID == G.User.GetCurrentUserID() then
            local i = v.User.SeatNo
            local p = Model.Call.GetSeatnoToPos(i)
            uiplayer[p]:ToString()
            player2D[i]:ToString()
        end
    end
end
function InitWidget(_gameStart, th, uith)
    gameStart = _gameStart
    Tran_FishMain = _gameStart.transform:Find("UIFishMain")
    this = th
    uithis = uith
    uiplayer = { }
    player2D = { }
    for i = 1, Model.Defines.MaxNumPlayer do
        uiplayer[i - 1] = UIPlayer:New( { this = uithis.transform:Find("Player" ..(i - 1)), seatno = i - 1 })
		local HereEffect = this.transform:Find("Player" ..(i - 1))
        uiplayer[i - 1]:InitUI(gameStart, HereEffect)
        player2D[i - 1] = Player2D:New( { this = this.transform:Find("Player" ..(i - 1)), seatno = i - 1 })
        player2D[i - 1]:InitUI()
    end
    LockHint = this.transform:Find("LockHint")
    BulletNode = this.transform:Find("BulletNode")
	
	coinPosObject = {}
	local GoldPos = this.transform:Find("GoldPos")
	for i = 1, GoldPos.transform.childCount do
		local temp = GoldPos.transform:GetChild(i-1)
		if temp ~= nil then
			table.insert(coinPosObject, temp)
		end
	end	
	
    LockXian = uithis.transform:Find("LockXian")
    LockUI = uithis.transform:Find("LockHint")
    AutoButton = uithis.transform:Find("AutoButton"):GetComponent("Button")
    LockButton = uithis.transform:Find("LockButton"):GetComponent("Button")
    IceSkillButton = uithis.transform:Find("IceSkillButton"):GetComponent("Button")

    AutoButton:AddClickListener(OnAutoButton)
    LockButton:AddClickListener(OnLockButton)
    IceSkillButton:AddClickListener(OnIceSkillButton)

    AutoSelect = uithis.transform:Find("AutoButton/SelectImage")
    LockSelect = uithis.transform:Find("LockButton/SelectImage")
    IceSelect = uithis.transform:Find("IceSkillButton/SelectImage")
    IceCountDown = uithis.transform:Find("IceSkillButton/CountDown"):GetComponent("Image")
    IceCost = uithis.transform:Find("IceSkillButton/Text"):GetComponent("Text")
	ShootCountDown = uithis.transform:Find("AutoButton/ImageCountdown")
	ShootCountDownTimer = uithis.transform:Find("AutoButton/ImageCountdown/Text"):GetComponent("Text")

    WaveDoing = uithis.transform:Find("AdvanceNotice/WaveDoing")
    WaveDoingTip = uithis.transform:Find("AdvanceNotice/WaveDoing/Text"):GetComponent("Text")
    NotDoSomething = uithis.transform:Find("AdvanceNotice/NotDoSomething")
    NotDoSomethingTip = uithis.transform:Find("AdvanceNotice/NotDoSomething/Text"):GetComponent("Text")
	
    FishComingNotice = uithis.transform:Find("AdvanceNotice/WaveComing")
    FishComingNoticeImage1 = uithis.transform:Find("AdvanceNotice/WaveComing/Image1"):GetComponent("Image")
    FishComingNoticeImage2 = uithis.transform:Find("AdvanceNotice/WaveComing/Image2"):GetComponent("Image")
    BOSSComing = uithis.transform:Find("AdvanceNotice/BOSSComing")
	BOSSComingName = uithis.transform:Find("AdvanceNotice/BOSSComing/Image2/Title"):GetComponent("Image")
	BOSSComingNameParticle = uithis.transform:Find("AdvanceNotice/BOSSComing/Image2/Title/xingxing"):GetComponent("ParticleSystem")
	BOSSComingNameLight = uithis.transform:Find("AdvanceNotice/BOSSComing/Image2/Title/light"):GetComponent("Image")
	BOSSComingBonus = uithis.transform:Find("AdvanceNotice/BOSSComing/Image2/Bonus"):GetComponent("Image")
	BOSSComingBonusParticle = uithis.transform:Find("AdvanceNotice/BOSSComing/Image2/Bonus/xingxing"):GetComponent("ParticleSystem")
	BOSSComingBonusLight = uithis.transform:Find("AdvanceNotice/BOSSComing/Image2/Bonus/light"):GetComponent("Image")
	BOSSComingBonusText = uithis.transform:Find("AdvanceNotice/BOSSComing/Image2/Bonus/Text"):GetComponent("Text")
	
	SpecialComing = uithis.transform:Find("AdvanceNotice/SpecialComing")
	SpecialRotate = uithis.transform:Find("AdvanceNotice/SpecialComing/Rotate")
	SpecialBonus = uithis.transform:Find("AdvanceNotice/SpecialComing/Rotate/TextBonus"):GetComponent("Text")
	SpecialWarning = uithis.transform:Find("AdvanceNotice/SpecialComing/TextWarning"):GetComponent("Text")
		
    AnimationBommCamera = this.transform.parent:Find("Camera"):GetComponent("Animation")
    AnimationFishCamera = this.transform.parent:Find("CameraFish"):GetComponent("Animation")
    IceMask = this.transform:Find("IceMask"):GetComponent("SpriteRenderer")
    GameBG1 = this.transform:Find("BG_Atlantis/BG_1"):GetComponent("MeshRenderer")
    GameBG2 = this.transform:Find("BG_Atlantis/BG_2"):GetComponent("MeshRenderer")
    GameBgAni1 = this.transform:Find("BG_Atlantis/BG_1"):GetComponent("Animator")
    GameBgAni2 = this.transform:Find("BG_Atlantis/BG_2"):GetComponent("Animator")

	GTTimingRoot = uithis.transform:Find("GameTypeTiming")
	GTTimingCountdownBg = uithis.transform:Find("GameTypeTiming/CountdownBg")
	GTTimingCountDown = uithis.transform:Find("GameTypeTiming/TextCountdown"):GetComponent("Text")
	GTTimingGameStart = uithis.transform:Find("GameTypeTiming/GameStart")	
	GTTimingGameEnd = uithis.transform:Find("GameTypeTiming/GameEnd")	
	GTTimingAlarmClock = uithis.transform:Find("GameTypeTiming/GameEnd/AlarmClock")	
	GTTimingGameOver = uithis.transform:Find("GameTypeTiming/GameOver")
	GTTimingRainbow = uithis.transform:Find("GameTypeTiming/GameOver/ImageRainbow")
	GTTimingOverScore = uithis.transform:Find("GameTypeTiming/GameOver/Text"):GetComponent("Text")
	GTTimingInfoRoot = uithis.transform:Find("GameTypeTiming/Info")
	GTTimingCodetable = uithis.transform:Find("GameTypeTiming/Info/ImageCodetable"):GetComponent("Image")
	GTTimingTime = uithis.transform:Find("GameTypeTiming/Info/TextTime"):GetComponent("Text")
	GTTimingScore = uithis.transform:Find("GameTypeTiming/Info/TextScore"):GetComponent("Text")
	
	pipao = this.transform:Find("pipao")
	for i = 1, pipao.transform.childCount do
		local temp = pipao.transform:GetChild(i-1):GetComponent("ParticleSystem")
		if temp ~= nil then
			--print("~~~~~~~~~~~~~~~~~~~~~~~~~ find")
			table.insert(ParticleSystem, temp)
		else
			--print("~~~~~~~~~~~~~~~~~~~~~~~~~ not find")		
		end
	end
end
function InitBGAtlantis()
	if Model.Defines.RotationPlayer == false then
		return
	end
	
	local Scale = GameBG1.transform.localScale
	Scale.y = math.abs(Scale.y)
	Scale.z = math.abs(Scale.z)
	if Model.Call.IsRotationPlayer() == true then
		Scale.y = Scale.y * -1
		Scale.z = Scale.z * -1
	end
	GameBG1.transform.localScale = Scale
	GameBG2.transform.localScale = Scale
end

function Update()
	WaterWave.DoUpdate()
end
function FrameUpdate()
    for k, v in pairs(Model.UserDataList) do
        local i = v.User.SeatNo
        local p = Model.Call.GetSeatnoToPos(i)
        uiplayer[p]:FrameUpdate()
        player2D[i]:FrameUpdate()
    end
	
	--UpdateLockZ()
end
-- 初始化游戏
function InitGame()
    for i = 1, Model.Defines.MaxNumPlayer do
        uiplayer[i - 1]:HideUI()
        player2D[i - 1]:HideUI()
    end
end
-- 打开游戏
function OpenUI(receiveMsg)
	if GameBG1 ~= nil then
		GameBG1.material.mainTexture = CS.UISpriteManager.Instance:GetSprite(G.GetGamePName(), "map_bg_" .. Model.Defines.Background1).texture
	end
	
	if GameBG2 ~= nil then
		WaterWave.Init(GameBG2.material, true, true, 0.05, 0.1, 0.01)
		GameBG2.material:SetTexture("_Background", CS.UISpriteManager.Instance:GetSprite(G.GetGamePName(), "map_" .. Model.Defines.Background2).texture)
	end
	
	if GameBgAni1 ~= nil then
		GameBgAni1.speed = 0.1
	end
	if GameBgAni2 ~= nil then
		GameBgAni2.speed = 0.5
	end
	
	IceCost.text = tostring(Model.Call.GetIceData().IceMoney)
	
	GTTimingRoot.gameObject:SetActive(receiveMsg.GameType == 1)
	GTTimingCountdownBg.gameObject:SetActive(true)
	GTTimingGameStart.gameObject:SetActive(false)
	GTTimingGameEnd.gameObject:SetActive(false)
	GTTimingGameOver.gameObject:SetActive(false)
	
	GameTimer = receiveMsg.Competition.Time
	Model.Call.SetGameType(receiveMsg.GameType)
	
	local joinCount = 4
	if receiveMsg.GameType == 1 then
		joinCount = 1
		if receiveMsg.Competition.OnGamingRecover == 0 then		
			ReadyCountdown()
		end
	end
	
	for i = 1, joinCount do
		uiplayer[i - 1]:JoinGame(receiveMsg.GameType)
	end
	
    for i = 1, Model.Defines.MaxNumPlayer do
        uiplayer[i - 1]:HideUI()
        player2D[i - 1]:HideUI()
    end
    for k, v in pairs(Model.UserDataList) do
        local i = v.User.SeatNo
        local p = Model.Call.GetSeatnoToPos(i)
        uiplayer[p]:SetPlayerEnter()
        player2D[i]:SetPlayerEnter()
    end
	
	SetGunLevel()
	CloseLockButton()
	CloseAutoButton()
end
-- 设置玩家进入UI
function SetPlayerEnter(seatno)
    AutoButton.gameObject:SetActive(true)
    LockButton.gameObject:SetActive(true)
    IceSkillButton.gameObject:SetActive(true)
    local i = seatno
    local p = Model.Call.GetSeatnoToPos(i)
    uiplayer[p]:SetPlayerEnter()
    player2D[i]:SetPlayerEnter()
end
-- 玩家状态改变
function ChangePlayerState(seatno)
    local i = seatno
    local p = Model.Call.GetSeatnoToPos(i)
    uiplayer[p]:ChangePlayerState()
    player2D[i]:ChangePlayerState()
end

function GetPlayerNode(seatno)
    local i = seatno
    local p = Model.Call.GetSeatnoToPos(i)
    return uiplayer[p]:GetPlayerNode()
end

-- 设置玩家离开
function SetPlayerExit(seatno)
    local i = seatno
    local p = Model.Call.GetSeatnoToPos(i)
    uiplayer[p]:SetPlayerExit()
    player2D[i]:SetPlayerExit()
end
function GetUIPlayer(p)
	return uiplayer[p]
end

function ReadyCountdown()
	isReadyCountdown = true
	GTTimingCountdownBg.gameObject:SetActive(true)
	local sequence = Model.Call.GetSequence("ReadyCountdown")
	sequence:AppendInterval(2)
	for i = 3, 1, -1 do
		sequence:AppendCallback( function()  
			AnimCountdown(i)
		end)
        sequence:AppendInterval(1)
	end
	sequence:AppendCallback(function() 
		Model.Call.SendGameStart()
	end)
end

function ShowStartGame()
	GTTimingGameStart.gameObject:SetActive(true)
	GTTimingGameStart.transform.localPosition = CS.UnityEngine.Vector3(1000,0,0)
	GTTimingGameStart.transform.localScale = CS.UnityEngine.Vector3(1,0.9,1)
	local sequence = CS.DG.Tweening.DOTween.Sequence()
	sequence:Append(GTTimingGameStart.transform:DOMoveX(-50, 0.1))
	sequence:Join(GTTimingGameStart.transform:DOScale(CS.UnityEngine.Vector3(1,1.1,1), 0.1))
	
	sequence:Append(GTTimingGameStart.transform:DOMoveX(0, 0.25))
	sequence:Join(GTTimingGameStart.transform:DOScale(CS.UnityEngine.Vector3.one, 0.25))
	
	sequence:AppendInterval(0.3)
	
	sequence:Append(GTTimingGameStart.transform:DOMoveX(50, 0.25))
	sequence:Join(GTTimingGameStart.transform:DOScale(CS.UnityEngine.Vector3(1,0.9,1), 0.25))
	
	sequence:Append(GTTimingGameStart.transform:DOMoveX(-1000, 0.1))
	sequence:Join(GTTimingGameStart.transform:DOScale(CS.UnityEngine.Vector3(1,1.1,1), 0.1))
	sequence:AppendCallback( function() 
		Model.Call.SetCanShootState(true)
		GTTimingGameStart.gameObject:SetActive(false)
		GTTimingCountdownBg.gameObject:SetActive(false)
	end)
end

function ShowEndGame(Score)	
	GTTimingCountdownBg.gameObject:SetActive(true)
	Model.Call.SetCanShootState(false)
	GTTimingGameEnd.gameObject:SetActive(true)	
	GTTimingGameEnd.transform.localPosition = CS.UnityEngine.Vector3(1000,0,0)
	GTTimingGameEnd.transform.localScale = CS.UnityEngine.Vector3(1,0.9,1)
	GTTimingAlarmClock.transform.localEulerAngles = CS.UnityEngine.Vector3.zero
	
	local seqClock = CS.DG.Tweening.DOTween.Sequence()
	seqClock:Join(GTTimingAlarmClock.transform:DORotate(CS.UnityEngine.Vector3(0,0,-10), 0.05))
	seqClock:SetLoops(-1,CS.DG.Tweening.LoopType.Yoyo)
	
	local sequence = CS.DG.Tweening.DOTween.Sequence()
	sequence:Append(GTTimingGameEnd.transform:DOMoveX(-50, 0.1))
	sequence:Join(GTTimingGameEnd.transform:DOScale(CS.UnityEngine.Vector3(1,1.1,1), 0.1))
	
	sequence:Append(GTTimingGameEnd.transform:DOMoveX(0, 0.25))
	sequence:Join(GTTimingGameEnd.transform:DOScale(CS.UnityEngine.Vector3.one, 0.25))
	
	sequence:AppendInterval(0.3)
	
	sequence:Append(GTTimingGameEnd.transform:DOMoveX(50, 0.25))
	sequence:Join(GTTimingGameEnd.transform:DOScale(CS.UnityEngine.Vector3(1,0.9,1), 0.25))
	
	sequence:Append(GTTimingGameEnd.transform:DOMoveX(-1000, 0.1))
	sequence:Join(GTTimingGameEnd.transform:DOScale(CS.UnityEngine.Vector3(1,1.1,1), 0.1))
	sequence:AppendCallback( function()
		GTTimingGameEnd.gameObject:SetActive(false)
		ShowOverGame(Score)
	end)
end

function ShowOverGame(Score)
	GTTimingGameOver.gameObject:SetActive(true)
	GTTimingOverScore.transform.localScale = CS.UnityEngine.Vector3.one
	GTTimingOverScore.color = CS.UnityEngine.Color(GTTimingOverScore.color.r,GTTimingOverScore.color.g,GTTimingOverScore.color.b,1)
	
	local sequenceBg = CS.DG.Tweening.DOTween.Sequence()
	sequenceBg:SetLoops(-1,CS.DG.Tweening.LoopType.Yoyo)
	sequenceBg:Append(GTTimingGameOver.transform:DOMoveY(-35, 1))
	
	local sequenceRainbow = CS.DG.Tweening.DOTween.Sequence()
	sequenceRainbow:SetLoops(-1,CS.DG.Tweening.LoopType.Yoyo)
	sequenceRainbow:Append(GTTimingRainbow.transform:DOScale(CS.UnityEngine.Vector3.one * 1.1, 1))
	
	local showTotalTimer = 3
	local showCurrentTimer = 0
	local sequence = CS.DG.Tweening.DOTween.Sequence()
	local realtimeSinceStartup = CS.UnityEngine.Time.realtimeSinceStartup;
	sequence:OnUpdate(function()
		showCurrentTimer = CS.UnityEngine.Time.realtimeSinceStartup - realtimeSinceStartup
		if (showCurrentTimer > showTotalTimer) then
			showCurrentTimer = showTotalTimer
		end
		local currentScore = Score * showCurrentTimer / showTotalTimer
		GTTimingOverScore.text = tostring(G.Tool.UserHelper.ToCash(currentScore))
	end)
	sequence:AppendInterval(5)
	sequence:Append(GTTimingOverScore.transform:DOScale(CS.UnityEngine.Vector3.one * 1.2, 0.35))
	sequence:Append(GTTimingOverScore.transform:DOScale(CS.UnityEngine.Vector3.one, 0.15))
	for i = 1, 2 do
		sequence:Append(GTTimingOverScore:DOColor(CS.UnityEngine.Color(GTTimingOverScore.color.r,GTTimingOverScore.color.g,GTTimingOverScore.color.b,0), 0.5))
		sequence:Append(GTTimingOverScore:DOColor(CS.UnityEngine.Color(GTTimingOverScore.color.r,GTTimingOverScore.color.g,GTTimingOverScore.color.b,1), 0.5))
	end
end

function RefreshCountdown(sec)
	if(GameTimer ~= sec and sec >= 0) then
		GameTimer = sec
		--print("~~RefreshCountdown",sec)
		SetGameTypeTime(GameTimer)
		GTTimingCountdownBg.gameObject:SetActive(GameTimer <= 0)
		--GTTimingGameEnd.gameObject:SetActive(GameTimer < 0)
		Model.Call.SetCanShootState(GameTimer > 0)
			
		if 3 >= GameTimer and GameTimer > 0 then
			AnimTimeout()
		end
		
		if isReadyCountdown == true and GameTimer > 0 then
			Model.Call.KillSequence("ReadyCountdown")
			isReadyCountdown = false
		end
	end
end

function RefreshCompetitionBonus(score)
	if(GTTimingScore.text ~= G.Tool.UserHelper.ToCash(score)) then
		GTTimingScore.transform.localScale = CS.UnityEngine.Vector3.one
		local sequence = Model.Call.GetSequence("GTTimingScore")
		sequence:Append(GTTimingScore.transform:DOScale(CS.UnityEngine.Vector3.one * 1.2, 0.2))
		sequence:AppendInterval(0.6)
		sequence:Append(GTTimingScore.transform:DOScale(CS.UnityEngine.Vector3.one * 1.0, 0.2))	
	end
	GTTimingScore.text = G.Tool.UserHelper.ToCash(score)
end

function AnimCountdown(index)
	GTTimingCountDown.gameObject:SetActive(true)
	GTTimingCountDown.transform.localScale = CS.UnityEngine.Vector3.one * 4
	GTTimingCountDown.text = tostring(index)
	local sequence = CS.DG.Tweening.DOTween.Sequence()
    sequence:AppendInterval(0.6)
	sequence:Append(GTTimingCountDown.transform:DOScale(CS.UnityEngine.Vector3(0,0,1), 0.3))
	sequence:AppendCallback( function()
		GTTimingCountDown.gameObject:SetActive(false)
    end)
end

function AnimTimeout()	
	GTTimingTime.color = CS.UnityEngine.Color(1,1,1,1)
	local sequenceTime = CS.DG.Tweening.DOTween.Sequence()
	sequenceTime:Append(GTTimingTime:DOColor(CS.UnityEngine.Color(1,234/256,0,1),0.3))	
	sequenceTime:AppendInterval(0.3)	
	sequenceTime:Append(GTTimingTime:DOColor(CS.UnityEngine.Color(1,1,1,1),0.3))
	
	local sequenceInfo = CS.DG.Tweening.DOTween.Sequence()
	sequenceInfo:Append(GTTimingInfoRoot.transform:DOScale(CS.UnityEngine.Vector3.one * 1.1, 0.3))	
	sequenceInfo:AppendInterval(0.3)	
	sequenceInfo:Append(GTTimingInfoRoot.transform:DOScale(CS.UnityEngine.Vector3.one * 1.0, 0.3))
	
	local seqShake = CS.DG.Tweening.DOTween.Sequence()
	seqShake:Join(GTTimingCodetable.transform:DORotate(CS.UnityEngine.Vector3(0,0,-10), 0.05))
	seqShake:SetLoops(18,CS.DG.Tweening.LoopType.Yoyo)
end

function SetGameTypeTime(sec)
	local minute = 0
	while(sec >= 60) do
		sec = sec - 60
		minute = minute +1
	end
	
	
	if(sec <= 0) then
		GTTimingTime.text = tostring(minute) .. ":00"
	elseif(sec < 10) then
		GTTimingTime.text = tostring(minute) .. ":0" .. tostring(sec)
	else
		GTTimingTime.text = tostring(minute) .. ":" ..tostring(sec)
	end
end

-- 取得黑洞位置
function GetPlayerBlackHolePosition(userID)
	local user = Model.Call.GetIDToUser(userID)
	if not user then        
		return
	end
	
	local seatno = user.User.SeatNo
	
	return player2D[seatno]:GetBlackHolePosition()
end
-- 设置黑洞显示
function SetPlayerBlackHoleActive(userID,active,fishID)
	local user = Model.Call.GetIDToUser(userID)
	if not user then        
		return
	end
	
	local seatno = user.User.SeatNo
	player2D[seatno]:SetBlackHoleActive(active,fishID)
end

local GoldBlackTime
local GoldBlackMoney
function SetGoldNumberCreatorBlack(timer, money)
	GoldBlackTime = timer
	GoldBlackMoney = money
end

function GetGoldNumberCreatorBlackTime()
	return GoldBlackTime * #GoldBlackMoney
end

function ShowGlodNumberBlack(userID)
	local user = Model.Call.GetIDToUser(userID)
	if not user then        
		return 0
	end

	goldNumberCreator.CreatBlack(userID,uiplayer[Model.Call.GetPosToSeatno(user.User.SeatNo)]:GetGoldNumberPos(), GoldBlackMoney, GoldBlackTime)	
	
	return GoldBlackTime * #GoldBlackMoney
end

-- 自动开枪
function AutoShoot()
    local i = Model.Call.GetPlayerSeat()
    player2D[i]:AutoShoot()
end
-- 手动开枪
function ManualShoot(vec)
    local i = Model.Call.GetPlayerSeat()
    player2D[i]:ManualShoot(vec)
end
-- 开枪
function Shoot(data)
    local user = Model.Call.GetIDToUser(data.UserID)
    if not user then        
        return
    end
	
	-- 是機器人,有指定魚,由client計算槍的旋轉角度
	if not data.IsRobot == false then
		if data.FishID ~= 0 then
			local fish = fishManager.GetFishByID(data.FishID)
			if fish ~= nil then			
			    local gunP = player2D[user.User.SeatNo]:GetPosition()
				local p = fish.GameObj.transform.position - gunP
				local dirVec = p.normalized
				data.Pos.x = dirVec.x
				data.Pos.y = dirVec.y
			end
		end
	end	
	
    local p = Model.Call.GetSeatnoToPos(user.User.SeatNo)
    uiplayer[p]:UpdatePlayerMoneyNumber()
    uiplayer[p]:Shoot(data)
    player2D[user.User.SeatNo]:Shoot(data)
	
	if user.User.UserID == G.User.GetCurrentUserID() then
		StopShootCountdown(liveTime)
	end
end
-- 旋转枪
function GunRotateTo(isLeft)
    local i = Model.Call.GetPlayerSeat()
    player2D[i]:RotateTo(isLeft)
end
-- 停止旋转
function StopRotate()
    local i = Model.Call.GetPlayerSeat()
    player2D[i]:StopRotate()
end

function GunResetFireTime()
	local i = Model.Call.GetPlayerSeat()
    player2D[i]:ResetFireTime()
end
-- 创建子弹(玩家座位号，子弹类型)
function CreateBullet(data)
    local user = Model.Call.GetIDToUser(data.UserID)
    if not user then        
        return
    end
	
	--print("CreateBullet BoomNumber"..data.BoomNumber.. "//gunLevel"..user.gunLevel)

    local seatno = user.User.SeatNo
    local pos = player2D[seatno]:GetBulletPos()
    local dirVec = Vector3(data.Pos.x, data.Pos.y, 0)
    local r = Mathf.Atan2(dirVec.y, dirVec.x) * Mathf.Rad2Deg
    local rr = r - 90
    local vec = dirVec + pos
	local obj = nil
	
	local bulletSize = 1
	if Model.Call.GetBulletBoomType(user.gunLevel) == 3 then
		bulletSize = ByConfig.FishTable[data.BoomNumber].fishScale
		
		local p = Model.Call.GetSeatnoToPos(seatno)
		uiplayer[p]:RemoveBulletBelt()
		--[[更换枪
		if Model.Call.GetPlayerSeat() == seatno then
			local ReBoomNumber = CS.UnityEngine.PlayerPrefs.GetInt("MyBYGunLevel", BoomNumber)
			if ReBoomNumber ~= data.BoomNumber then
				Model.Call.SendGunBei(ReBoomNumber)
			end
		end]]
	end
	
	local bulletName = Model.Call.GetBulletPrefabName(tonumber(user.gunLevel))
	obj = CS.FrameWork.ObjectPoolManager.Instance:Get(bulletName)
	obj.transform:SetParent(BulletNode.transform)
	obj.transform.position = pos
	obj.transform.localScale = Vector3.one * bulletSize
	obj.transform.rotation = Quaternion.Euler(0, 0, rr)
	obj.name = bulletName
			
	local BulletData = {}
	BulletData.roat = rr
	BulletData.UserID = data.UserID
	BulletData.pSeatno = seatno
	BulletData.id = data.BoomID
	BulletData.IsRobot = data.IsRobot
	BulletData.BoomNumber = data.BoomNumber
	BulletData.gs = gameStart

	if data.FishID > 0 then
		BulletData.FishID = data.FishID
	else
		BulletData.FishID = -1
	end
	
	local spr = obj:AddScriptComponent(pojectName, "Bullet")
	spr.Init(BulletData)
	    
	Model.Call.AddBullet( 
		{ 
			Obj = obj,
			BulletSpr = spr,
			seatno = seatno,
			BoomID = data.BoomID,
			PlayerID = user.User.UserID,
			IsRobot = data.IsRobot,
			BoomOdd = tonumber(Model.Call.GetBulletBoomRate(user.gunLevel)),
			BoomNumber = data.BoomNumber,
			BoomType = Model.Call.GetBulletBoomType(user.gunLevel)
		}
	)
end
-- 變成子弹(玩家座位号，子弹类型)
function TurnIntoBullet(data,obj)
    local user = Model.Call.GetIDToUser(data.UserID)
    if not user then        
        return
    end
	if obj == nil then        
        return
    end
    local seatno = user.User.SeatNo
    local pos = player2D[seatno]:GetBulletPos()
	local direction = player2D[seatno]:GetDirection()
	local bulletSize = ByConfig.FishTable[data.FishID].fishScale
	
	obj.gameObject:SetActive(true)
	player2D[seatno]:SetGunChild(obj)
	obj.transform.localScale = CS.UnityEngine.Vector3.one * (bulletSize + 1)
		
	local sequence = CS.DG.Tweening.DOTween.Sequence()
	sequence:SetEase(CS.DG.Tweening.Ease.InQuad)
	sequence:Append(obj.transform:DOJump(pos,2,1,Model.Defines.ZlxReceiveSpeed))
	sequence:Join(obj.transform:DORotateQuaternion(direction,0.1))
	sequence:Join(obj.transform:DOScale(CS.UnityEngine.Vector3.one * bulletSize,Model.Defines.ZlxReceiveSpeed))
	
	local effect = obj.transform:Find("Effect")
	local rotate = obj.transform:Find("Effect/Rotate")
	if rotate ~= nil then
		sequence:Join(rotate.transform:DORotate(CS.UnityEngine.Vector3(0,0,360),0.5,CS.DG.Tweening.RotateMode.FastBeyond360))
	end
		
	sequence:AppendCallback(function()
		if effect ~= nil then
			effect.gameObject:SetActive(false)
		end
		
		obj.transform.position = player2D[seatno]:GetBulletPos()
		obj.transform.rotation = player2D[seatno]:GetDirection()	
		obj.gameObject:SetActive(false)
		CS.UnityEngine.GameObject.Destroy(obj.gameObject)
		
		-- 更换枪
		if Model.Call.GetPlayerSeat() == seatno then
			Model.Call.SendGunBei(data.FishID)
			-- 關閉自動發射
			--CloseAutoButton()
			-- 關閉瞄準發射
			--CloseLockButton()
		end
	end)
end
-- 子弹爆炸
function BoomBullet(data)
    local bullet = Model.Call.GetIDToBullet(data.BoomID)
	
	bullet.BulletSpr.Boom()
	
	-- 類型3子彈不會產生漁網
	local BoomType = Model.Call.GetBulletBoomType(bullet.BoomNumber)
	if BoomType == 3 then
		return
	end	
	
    local pos = data.Pos
	
	local fishNetName
	-- 子彈有碰到核炸彈,有40%的機會產生核符號
	if bullet.BulletSpr.CheckIsInList(41) == true then
		if math.random() <= 0.4 then
			fishNetName = "FishNet_Nuclear"
		else
			fishNetName = Model.Call.GetNetPrefabName(bullet.BoomNumber)
		end
	else
		fishNetName = Model.Call.GetNetPrefabName(bullet.BoomNumber)
	end
	
    local obj = CS.FrameWork.ObjectPoolManager.Instance:Get(fishNetName)
	if obj == nil then
		print("BoomBullet not find " .. fishNetName .. " " .. bullet.BoomType .. "//BoomID" .. data.BoomID)
		return
	end
	
    obj.transform:SetParent(BulletNode.transform)
	pos.x = pos.x + (-1 + randomIns:RangeFloat(0, 1) * 2) * 0.2
	pos.y = pos.y + (-1 + randomIns:RangeFloat(0, 1) * 2) * 0.2
    obj.transform.localPosition = pos
    obj.transform.localScale = Vector3(0.2, 0.2, 0.2)
    obj.name = "BoomID_" .. data.BoomID
	obj.transform:Rotate(Vector3(0, 0, math.random(0,360)))

	
    local ss = 0.8
    local seq = DOTween.Sequence()
	obj.transform.localScale = CS.UnityEngine.Vector3(0.7, 0.7, 0.7)
    seq:Append(DOTween.To( function() return obj.transform.localScale end, function(v) obj.transform.localScale = v end, Vector3(1, 1, 1) * ss, 0.15))
    seq:Append(DOTween.To( function() return obj.transform.localScale end, function(v) obj.transform.localScale = v end, Vector3(0.7, 0.7, 0.7) * ss, 0.1))

    local spr = obj:GetComponent("SpriteRenderer")
    spr.color = Color(1, 1, 1, 0.5)
    seq:Append(spr:DOFade(1, 0.02))
	seq:AppendInterval(0.15)
    seq:Append(spr:DOFade(0.2, 0.15))
    seq:OnComplete( function()
        CS.FrameWork.ObjectPoolManager.Instance:Release(fishNetName, obj)
    end )
end
-- 炸弹爆炸
function BoomEffect(data, Money)
	if Money == 0 then
		return
	end

	local modelName = nil
	if data.Type == 3 or data.Type == 5 then
		if data.TeshuFishID == 31 then
			modelName = "zhadanpangxie"
		elseif data.TeshuFishID == 41 then
			modelName = "zhadan"
		else
			return
		end
	elseif data.Type == 4 then
		modelName = "dianmanyu"
	elseif data.Type == 6 then
		modelName = "zuantoulongxia"
	else
		return
	end	
	
    local user = Model.Call.GetIDToUser(data.PlayerID)
	if user ~= nil then
		goldNumberCreator.CreatLarge(uiplayer[Model.Call.GetPosToSeatno(user.User.SeatNo)]:GetGoldNumberPos(), Money, modelName, user.User.SeatNo)	
	end
end

-- 抓住鱼
function GraspFish(data, _iscoinCreator, _isPlayAudio)
	if data.Money == 0 then
		return
	end
	
    _iscoinCreator = G.CaseWhen(_iscoinCreator == nil, true, _iscoinCreator)

    local user = Model.Call.GetIDToUser(data.PlayerID)
    if not user then
        return
    end

    local fishConfig = ByConfig.FishTable[data.FishID]
    local fishReward = fishConfig.reward
    local coinNumber = fishReward
    local p = Model.Call.GetSeatnoToPos(user.User.SeatNo)

    if ByConfig.FishTable[data.FishID].isShake == 1 then
        --        AnimationBommCamera.transform:DOShakePosition(0.5, Vector3(0.2, 0.2, 0)):SetEase(CS.DG.Tweening.Ease.Linear)
        AnimationBommCamera:Play()
    end

    -- 转盘金币及数量显示
    if (fishConfig.isTurnTable == 1) then
        goldNumberCreator.CreatLarge(uiplayer[Model.Call.GetPosToSeatno(user.User.SeatNo)]:GetGoldNumberPos(), data.Money, fishConfig.modelName, user.User.SeatNo)
    end

    Model.Call.AddUserMoney(user, data.Money, "捕到鱼")

    local isMy = false
    if data.PlayerID == G.User.GetCurrentUserID() then
        isMy = true
    end
    -- 金币跳出效果(跳出效果会对超出屏幕边界的座标做修改,会返回新坐标,后面效果根据需求是否使用新坐标)
	local Pos = data.Pos
	Pos.z = 0
	
	-- LuckyBonus
	goldNumberCreator.CreateLuckyBonus(Pos, data.LuckyBonus)
	
	local flyPosition = playerPos[user.User.SeatNo]
	if(Model.Defines.GameType == 1)then
		flyPosition = playerPos[2]
	end
	
    local newPos = coinCreator.Creat(Pos, flyPosition, coinNumber, isMy, _iscoinCreator, fishConfig, _isPlayAudio)

    -- 金币跳出后数量显示
	goldNumberCreator.Creat(newPos, data.Money, isMy)
    uiplayer[p]:UpdatePlayerMoneyNumber()
end

function GraspFishBlackHold(data)
	local user = Model.Call.GetIDToUser(data.PlayerID)
    if not user then
        return
    end
	
	local fishConfig = ByConfig.FishTable[data.FishID]
	
	-- 摇晃摄像头
	if fishConfig.isShake == 1 then
        AnimationBommCamera:Play()
    end
	
	-- 转盘金币及数量显示
    --if (fishConfig.isTurnTable == 1) then
        goldNumberCreator.CreatLarge(uiplayer[Model.Call.GetPosToSeatno(user.User.SeatNo)]:GetGoldNumberPos(), data.Money, fishConfig.modelName, user.User.SeatNo,1.5)
    --end	
end

function GraspFishCoin(data)

	local user = Model.Call.GetIDToUser(data.PlayerID)
    if not user then
        return
    end
	
	local fishConfig = ByConfig.FishTable[data.FishID]
    local p = Model.Call.GetSeatnoToPos(user.User.SeatNo)
	
	local isMy = false
    if data.PlayerID == G.User.GetCurrentUserID() then
        isMy = true
    end
    -- 金币跳出效果(跳出效果会对超出屏幕边界的座标做修改,会返回新坐标,后面效果根据需求是否使用新坐标)
	local Pos = GetPlayerBlackHolePosition(data.PlayerID)
	Pos.z = 0
	
	-- 金币跳出后数量显示				
	local sequence = CS.DG.Tweening.DOTween.Sequence();
	for i=1,#GoldBlackMoney do
		sequence:AppendCallback(function()	
		
			local user = Model.Call.GetIDToUser(data.PlayerID)
			if user ~= nil then
				
				local flyPosition = playerPos[user.User.SeatNo]
				if(Model.Defines.GameType == 1)then
					flyPosition = playerPos[2]
				end
	
				local newPos = coinCreator.Creat(Pos, flyPosition, coinNumber, isMy, _iscoinCreator, fishConfig, _isPlayAudio)
				goldNumberCreator.Creat(newPos, nil, isMy)
				uiplayer[p]:UpdatePlayerMoneyNumber()
			end
		end)
		sequence:AppendInterval(GoldBlackTime)
	end
end

function ShowAddedMoneyNumber(moneyNumber)
	if(Model.Defines.GameType == 1) then
		return
	end
    local user = Model.Call.GetIDToUser(G.User.GetCurrentUserID())
    if not user then
        return
    end
    uiplayer[Model.Call.GetSeatnoToPos(user.User.SeatNo)]:AddMoneyNumber(moneyNumber)
end

function SetGunLevel()
    for k, v in pairs(Model.UserDataList) do
        local i = v.User.SeatNo
        local p = Model.Call.GetSeatnoToPos(i)
        uiplayer[p]:SetGunLevel()
        player2D[i]:SetGunLevel()
    end
end
function SetPlayerMoney()
    for k, v in pairs(Model.UserDataList) do
        local i = v.User.SeatNo
        local p = Model.Call.GetSeatnoToPos(i)
        uiplayer[p]:UpdatePlayerMoneyNumber()
    end
end
function UpdatePlayerMoneyByNo(SeatNo)
	local p = Model.Call.GetSeatnoToPos(SeatNo)
	uiplayer[p]:UpdatePlayerMoneyNumber()
end
-- 修改炮弹
function ChangeGunLevel(data)
    local user = Model.Call.GetSeatnoToUser(data.SeatNO)
    if not user then
        return
    end
	
    local p = Model.Call.GetSeatnoToPos(data.SeatNO)
    if user.gunLevel > data.RateAfterChange then
        user.gunLevel = data.RateAfterChange
        uiplayer[p]:DownGunLevel()
        player2D[data.SeatNO]:DownGunLevel()

    else
        user.gunLevel = data.RateAfterChange
        uiplayer[p]:UpGunLevel()
        player2D[data.SeatNO]:UpGunLevel()
    end
    player2D[data.SeatNO]:ChangeGunLevel()
	
	if user.User.UserID == G.User.GetCurrentUserID() then
		local v = Model.Call.GetPlayerData()
		local DirectShootTime = Model.Call.GetBulletDirectShootTime(v.gunLevel)
		player2D[data.SeatNO]:SetDirectShootTime(DirectShootTime)
		StartShootCountdown(DirectShootTime)
	end
	
	SetBulletBelt(data.SeatNO,user.gunLevel)
end

function StartShootCountdown(liveTime)
	if liveTime > 0 then
		ShootCountDown.gameObject:SetActive(true)
		
		local sequence = Model.Call.GetSequence("ShootCountdown")
		for i = liveTime, 1, -1 do
			sequence:AppendCallback( function() 
				ShootCountDownTimer.text = tostring(i)
			end)
			sequence:AppendInterval(1)
		end 
	end
end

function StopShootCountdown()
	ShootCountDown.gameObject:SetActive(false)
	Model.Call.KillSequence("ShootCountdown")
end

-- 设定子弹带
function SetBulletBelt(seatno,gunLevel)
    local p = Model.Call.GetSeatnoToPos(seatno)
	-- 清除弹夹
	uiplayer[p]:RelaseBulletBelt()
	-- 加入弹夹
	if Model.Call.GetBulletBoomType(gunLevel) == 3 then		
		local bulletSize = ByConfig.FishTable[gunLevel].fishScale		
		local obj = uiplayer[p]:SetBulletBelt(gunLevel)
		player2D[seatno]:SetGunChild(obj)
		obj.transform.localPosition =  CS.UnityEngine.Vector3.zero
		obj.transform.localScale = CS.UnityEngine.Vector3.one * bulletSize
		obj.transform.localRotation = CS.UnityEngine.Quaternion.identity
	end
end
-- 设置锁定
function SetLock(data)
    local v = Model.Call.GetSeatnoToUser(data.SeatNO)
    if not v then
        return
    end
    v.isLock = data.SuoDing
    if Model.Call.IsPlayerSeat(data.SeatNO) then
        local im = LockButton.gameObject:GetComponent("Image")
        local v = Model.Call.GetPlayerData()
        if v.isLock then
            LockSelect.gameObject:SetActive(true)
        else
            LockSelect.gameObject:SetActive(false)
        end
        local i = Model.Call.GetPlayerSeat()
        player2D[i]:SetLock(v.isLock)
        local p = Model.Call.GetSeatnoToPos(i)
        if not v.isLock then
            Model.Call.RemoveLockFishID()
            Model.Call.RemoveLockFishTypeID()
        end
    end
end

function SetBgAniEnable(isEnable)
	if GameBgAni1 ~= nil then
		GameBgAni1.enabled = not isEnable
	end
	if GameBgAni2 ~= nil then
		GameBgAni2.enabled = not isEnable
	end
end

function SetIceMaskEnable(isEnable)
    IceMask.gameObject:SetActive(isEnable)
	
	for k, v in pairs(ParticleSystem) do
		if isEnable == true then
			v:Pause()
		else
			v:Play()
		end
	end
end

function SetWaveEnable(isEnable)
	WaterWave.SetEnabled(not isEnable)
end

function ShowIceMaskEff()
    local seq = Model.Call.GetSequence("IceMask")
    IceMask.color = CS.UnityEngine.Color(1, 1, 1, 0.3);
    seq:Append(IceMask:DOColor(CS.UnityEngine.Color(1, 1, 1, 1), 0.6))
    seq:Append(IceMask:DOColor(CS.UnityEngine.Color(1, 1, 1, 0.3), Model.Call.GetIceData().IceTime))
	seq:AppendCallback( function()
	end)	
end

-- 设置破产
function SetPoChan(data, isPC)
    local user = Model.Call.GetIDToUser(data)
    if not user then
        return
    end
    local p = Model.Call.GetSeatnoToPos(user.User.SeatNo)
    uiplayer[p]:SetPoChan(isPC)
end
function ShowAdvanceNotice_WaveComing()
    FishComingNotice.gameObject:SetActive(true)
	
    local seqBG = Model.Call.GetSequence("WaveComingBG")
	seqBG:SetLoops(-1,CS.DG.Tweening.LoopType.Restart)
    FishComingNoticeImage1.color = CS.UnityEngine.Color(1, 1, 1, 0.0);
    seqBG:Append(FishComingNoticeImage1:DOColor(CS.UnityEngine.Color(1, 1, 1, 1), 0.5))	
    seqBG:Append(0.5)
    seqBG:Append(FishComingNoticeImage1:DOColor(CS.UnityEngine.Color(1, 1, 1, 0), 0.5))

    local seq = Model.Call.GetSequence("WaveComing")
    FishComingNoticeImage2.color = CS.UnityEngine.Color(1, 1, 1, 0.0);
    seq:Append(FishComingNoticeImage2:DOColor(CS.UnityEngine.Color(1, 1, 1, 1), 0.5))
    seq:AppendInterval(5)
    seq:Append(FishComingNoticeImage2:DOColor(CS.UnityEngine.Color(1, 1, 1, 0), 0.5))
	seq:AppendCallback( function()
		FishComingNotice.gameObject:SetActive(false)	
		seqBG:Kill()
	end)
end

function ShowWaveDoing(tip)
	WaveDoing.gameObject:SetActive(true)
	WaveDoingTip.text = tip
end

function HideWaveDoing()
	WaveDoing.gameObject:SetActive(false)
end

local isNotDoSomething = false
-- 超过一秒还没接收到封包
local overTimer = false
function ShowNotDoSomething(tip,timer)
	overTimer = false
	
	if isNotDoSomething == false then
		isNotDoSomething = true		
		NotDoSomething.gameObject:SetActive(true)

		local seqKey = "nothingTimer"
		local sequence = Model.Call.GetSequence(seqKey)
		
		for i = timer, 0, -1 do
			sequence:AppendCallback( function()
				if overTimer == false then
					local message = "<color=#CC9636FF><size=34> "..i.."</size></color>"
					NotDoSomethingTip.text = string.format(tip,message)
				else				
					NotDoSomething.gameObject:SetActive(false)
					isNotDoSomething = false
					Model.Call.KillSequence(seqKey)
				end
			end)
			sequence:AppendInterval(1)
		end
	end
	
	local seqKey = "nothingHide"
	local sequenceHide = Model.Call.GetSequence(seqKey)
	sequenceHide:AppendInterval(Model.Defines.FrameTime)
	sequenceHide:AppendCallback( function()
		overTimer = true
		Model.Call.KillSequence(seqKey)
	end)
end

function ShowAdvanceNotice_BOSSComing(fishId, Bonus)
	--fishId = 30
	
    local fishConfig = ByConfig.FishTable[fishId]
	if fishConfig == nil then
		return
	end
	
    BOSSComing.gameObject:SetActive(true)
		
	BOSSComingNameParticle:Stop()
	BOSSComingBonusParticle:Stop()
		
	local obj = nil
	local objImage = nil
	
	obj = BOSSComingName.transform:Find(fishConfig.modelName)
	if obj ~= nil then
		objImage = obj:GetComponent("Image")
		objImage.color = CS.UnityEngine.Color(1,1,1,0)
	end
	
    local seq = Model.Call.GetSequence("BOSSComing")
    seq:AppendInterval(0.3)
    seq:AppendCallback( function()
        G.Tool.Sound.PlayGameSound("boss_coming")
    end )
	
	-- BOSS名稱底圖
	BOSSComingName.color = CS.UnityEngine.Color(1,1,1,0)
	seq:Append(BOSSComingName:DOColor(CS.UnityEngine.Color(1,1,1,1), 0.2))
	seq:AppendInterval(0.1)

	-- BOSS名稱
	if objImage ~= nil then
		objImage.transform.localScale = CS.UnityEngine.Vector3(2,2,2)
		seq:Append(objImage:DOColor(CS.UnityEngine.Color(1,1,1,1), 0.3))
		seq:Join(objImage.transform:DOScale(1, 0.2))
		
		BOSSComingNameLight.color = CS.UnityEngine.Color(1,1,1,0)
		BOSSComingNameLight.transform.localScale = CS.UnityEngine.Vector3(1,3,1)	
		seq:Append(BOSSComingNameLight:DOColor(CS.UnityEngine.Color(1,1,1,1), 0.3))
		seq:Join(BOSSComingNameLight.transform:DOScale(CS.UnityEngine.Vector3(1.5,0,1), 0.3))
		seq:AppendInterval(0.05)
		seq:AppendCallback( function()
			BOSSComingNameParticle:Play()
		end )
	end
	
	-- Bonus底圖
	BOSSComingBonus.color = CS.UnityEngine.Color(1,1,1,0)
	seq:Append(BOSSComingBonus:DOColor(CS.UnityEngine.Color(1,1,1,1), 0.2))
	seq:AppendInterval(0.1)
	
	-- Bonus數字	
	--BOSSComingBonusText.text = tostring(math.ceil(Model.Call.GetFishRewardMaxById(fishId)))
	if math.ceil(Bonus) == Bonus then
		Bonus = math.ceil(Bonus)
	end
	if Bonus == 0 then
		Bonus = "???"						
	end	
	BOSSComingBonusText.text = tostring(Bonus)
	BOSSComingBonusText.color = CS.UnityEngine.Color(1,1,1,0)
	seq:Append(BOSSComingBonusText:DOColor(CS.UnityEngine.Color(1,1,1,1), 0.3))	
	BOSSComingBonusText.transform.localScale = CS.UnityEngine.Vector3(2,2,2)	
	seq:Join(BOSSComingBonusText.transform:DOScale(1, 0.3))
	seq:AppendInterval(0.05)	
	seq:AppendCallback( function()
		BOSSComingBonusParticle:Play()
	end )	
	BOSSComingBonusLight.color = CS.UnityEngine.Color(1,1,1,0)
	BOSSComingBonusLight.transform.localScale = CS.UnityEngine.Vector3(1,3,1)	
	seq:Append(BOSSComingBonusLight:DOColor(CS.UnityEngine.Color(1,1,1,1), 0.3))
	seq:Join(BOSSComingBonusLight.transform:DOScale(CS.UnityEngine.Vector3(1.5,0,1), 0.3))
    seq:AppendInterval(0.5)
	
    seq:OnComplete( function()
		if objImage ~= nil then
			objImage.color = CS.UnityEngine.Color(1,1,1,0)
		end
        BOSSComing.gameObject:SetActive(false)
    end )
end


function ShowAdvanceNotice_SpecialComing(fishId, Bonus)
	
	local imgFish = nil
    local fishConfig = ByConfig.FishTable[fishId]
	if fishConfig ~= nil then
		imgFish = SpecialComing.transform:Find("Rotate/Fish/" .. fishConfig.modelName)	
		SpecialWarning.text = fishConfig.fishText
	end
	
	if imgFish ~= nil then
		imgFish.gameObject:SetActive(true)
		SpecialComing.gameObject:SetActive(true)
		local initPosition = CS.UnityEngine.Vector3(750,0,0)
		local initScale = CS.UnityEngine.Vector3.zero
		SpecialComing.transform.localPosition = initPosition
		SpecialRotate.transform.localScale = initScale
		
		--SpecialBonus.text = tostring(Model.Call.GetFishRewardMaxById(fishId))
		if math.ceil(Bonus) == Bonus then
			Bonus = math.ceil(Bonus)
		end
		SpecialBonus.text = tostring(Bonus)
		
		local sequence = CS.DG.Tweening.DOTween.Sequence()
		sequence:SetEase(CS.DG.Tweening.Ease.Linear)
		sequence:Append(SpecialComing.transform:DOLocalMoveX(0,0.25))
		sequence:Append(SpecialRotate.transform:DOScale(CS.UnityEngine.Vector3.one,0.2))
		sequence:AppendInterval(2)
		--sequence:Append(SpecialRotate.transform:DOScale(initScale,0.2))
		sequence:Append(SpecialComing.transform:DOLocalMoveX(initPosition.x,0.25))		
		sequence:OnComplete(function() 
			imgFish.gameObject:SetActive(false)
			SpecialComing.gameObject:SetActive(false)
			SpecialBonus.text = ""
		end)
	end
end

local lockTarget;
local lockTargetFish;
function ShowLockFish(show, _lockTarget, fish)
    if show then
		lockTargetFish = fish
		_lockTarget = fish.LockObj
        if _lockTarget ~= nil and lockTarget ~= _lockTarget then
            lockTarget = _lockTarget
            LockHint.transform:SetParent(_lockTarget.transform)
            LockHint.transform.localScale = CS.UnityEngine.Vector3.one
            LockHint.transform.localPosition = CS.UnityEngine.Vector3.zero
            --LockHint.gameObject:SetActive(true)
        end
        local v = Model.Call.GetPlayerData()
        local p = Model.Call.GetSeatnoToPos(v.User.SeatNo)
        local gunP = uiplayer[p]:GetGunPos()
		gunP.z = 0
        local lockP = Model.Call.Get2DToUIPoint(_lockTarget.transform.position)
		lockP.z = 0
        local le = Vector3.Distance(lockP, gunP)

        local vec2 =(lockP - gunP) / LockXian.childCount

        for i = 0, LockXian.transform.childCount - 1, 1 do
            LockXian:GetChild(i).position = vec2 *(i + 1) + gunP
        end
        LockXian.gameObject:SetActive(true)
		LockUI.gameObject:SetActive(true)
		LockUI.position = lockP
    else
        lockTarget = nil
        --LockHint.gameObject:SetActive(false)
        LockXian.gameObject:SetActive(false)
		LockUI.gameObject:SetActive(false)
    end
end

function UpdateLockZ()
	if lockTarget ~= nil then
		local pos = lockTargetFish.GameObj.transform.position
		pos.z = 0
		LockHint.gameObject.transform.position = pos
	end
end

function ShakeCamera()
	AnimationFishCamera:Play()
	AnimationBommCamera:Play()
end

function CloseAutoButton()
    local im = AutoButton.gameObject:GetComponent("Image")
	local v = Model.Call.GetPlayerData()
	v.isAuto = false
    AutoSelect.gameObject:SetActive(false)
	local i = Model.Call.GetPlayerSeat()
    player2D[i]:SetAuto(v.isAuto)
end

-- Button
OnAutoButton = function()
    local im = AutoButton.gameObject:GetComponent("Image")
    local v = Model.Call.GetPlayerData()
    if v.isAuto then
        v.isAuto = false
    else
        v.isAuto = true
        ToString()
    end
    if v.isAuto then
        AutoSelect.gameObject:SetActive(true)
    else
        AutoSelect.gameObject:SetActive(false)
    end
    local i = Model.Call.GetPlayerSeat()
    player2D[i]:SetAuto(v.isAuto)
end

function CloseLockButton()
    local v = Model.Call.GetPlayerData()
	local data = { }
	data.isLock = false
	Model.Call.SendLock(data)
end

OnLockButton = function()
    local v = Model.Call.GetPlayerData()
    local data = { }
    if v.isLock then
        data.isLock = false
    else
        data.isLock = true
    end
    Model.Call.SendLock(data)
end

-- 冰冻按钮点击
OnIceSkillButton = function()
	
	local user = Model.Call.GetIDToUser(G.User.GetCurrentUserID())
    if user ~= nil then
		local cost = Model.Call.GetIceData().IceMoney * 100
		local score = user.User.Score - cost
		if score < 0 then
			return
		end
		user.User.Score = score
		local id = Model.Call.GetSeatnoToPos(user.User.SeatNo)
		uiplayer[id]:DecMoneyNumber(tostring(cost))
		uiplayer[id]:UpdatePlayerMoneyNumber()
    end

    -- 向服务器发送使用技能请求
    print("Player Use ice skill")
    Model.Call.SendIceSkill()

    IceSelect.gameObject:SetActive(true)
    IceCountDown.gameObject:SetActive(true)
    IceSkillButton.enabled = false
    IceCountDown.fillAmount = 1
	
    IceCountDown:DOFillAmount(0, Model.Call.GetIceData().IceTime):SetEase(CS.DG.Tweening.Ease.Linear):OnComplete
	(
		function()
			IceSelect.gameObject:SetActive(false)
			IceCountDown.gameObject:SetActive(false)
			IceSkillButton.enabled = true
		end
	);
end

function GetCoinPos()
	return coinPosObject
end

function OnDestroy()
	WaterWave.End()
end