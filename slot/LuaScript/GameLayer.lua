
require("Module")
mmodule(...)
local HallG = require("Global")
local GameG = HallG.RequireG("GameGlobal")
local gameData = GameG.RequireG("GameData")
local gameModel= GameG.RequireG("GameModel")
local uislot = GameG.RequireG("UISlot")
local uibigWin = GameG.RequireG("UIBigWin")
local uiautoSpin = GameG.RequireG("UIAutoSpin")
local uichip = GameG.RequireG("UIChip")
local uimessage = GameG.RequireG("UIMessage")
local uipayTable = GameG.RequireG("UIPayTable")
local uipayLine = GameG.RequireG("UIPayLine")
local uiuserSP = GameG.RequireG("UIUser")
local uisetting = GameG.RequireG("UISetting")
local uihistory = GameG.RequireG("UIHistory")
local uisymbolDetail = GameG.RequireG("UISymbolDetail")
local uibetRate = GameG.RequireG("UIBetRate")
local mResultShowEnd = true --結算表演結束
local CheckJailbreakSpin = false --檢測流程越獄

function Init()
	GameG.PlayGameBGM("bgm_mg")
	
    local canvas = CS.UnityEngine.GameObject.Find("Canvas")
    root = canvas.transform:Find("GameLayer")
	
	rootNormalBg = root.transform:Find("NormalBg"):GetComponent("RectTransform")
	rootNormalBg.gameObject:SetActive(true)
	
	-- 狀態
	txtState = root.transform:Find("TextState"):GetComponent("Text")
	
	uimessage.Init(root.transform:Find("UIMessage"))
	uimessage.Show("正在分配座位……")

	uipayTable.Init(root.transform:Find("UIPayTable"))	
    btnPayTable = root.transform:Find("ButtonPayTable"):GetComponent("Button")
    btnPayTable.onClick:AddListener(function()
		GameG.PlayGameSound("se_click")
		uipayTable.Show()
    end)	
		
	uislot.Init(root.transform:Find("UISlot"),root.transform:Find("Result"))
	uislot.SetSymbolClickCallback(function(isSpinning,data)
		if(isSpinning == true)then
			StopSpin()
		else
			uisymbolDetail.Show(data)
		end
	end)
    -- 總下注金額
	txtTotalBet = root.transform:Find("ImageTotalBet/Text"):GetComponent("Text")
	-- 籌碼
	uichip.Init(root.transform:Find("UIChip"))
	uichip.SetClickCallback(function()
		RefreshChipButton()
	end)
	uichip.Hide()
	
	btnExit = root.transform:Find("ButtonExit"):GetComponent("Button")
    btnExit.onClick:AddListener(function()
		GameG.PlayGameSound("se_click")
		uisetting.ClickExit()
	end)
	-- 切換下注金額
	txtChip = root.transform:Find("ButtonChip/Text"):GetComponent("Text")
    btnChip = root.transform:Find("ButtonChip"):GetComponent("Button")
    btnChip.onClick:AddListener(function()
		GameG.PlayGameSound("se_click")
		uichip.Show()
    end)
	btnChipClass = {} 
	btnChipClass.imgEnable = root.transform:Find("ButtonChip/ImageEnable")
	btnChipClass.imgDisable = root.transform:Find("ButtonChip/ImageDisable")
	btnChipClass.Interactable = function(enabled)
		btnChip.interactable = enabled
		btnChipClass.imgEnable.gameObject:SetActive(enabled == true)
		btnChipClass.imgDisable.gameObject:SetActive(enabled == false)
	end
    btnChipDown = root.transform:Find("ButtonChipDown"):GetComponent("Button")
    btnChipDown.onClick:AddListener(function()
		GameG.PlayGameSound("se_click")
		uichip.ClickDown()
		RefreshChipButton()
    end)	
    btnChipUp = root.transform:Find("ButtonChipUp"):GetComponent("Button")
    btnChipUp.onClick:AddListener(function()
		GameG.PlayGameSound("se_click")
		uichip.ClickUp()
		RefreshChipButton()
    end)
	
	--玩家資訊
	uiuser = uiuserSP.Create(root.transform:Find("UIUser"))
	--開始按鈕	
    btnStart = root.transform:Find("ButtonStart"):GetComponent("Button")
    btnStart.onClick:AddListener(function()
		GameG.PlayGameSound("se_click")
		StartSpin() 
	end)
	--自動按鈕
	txtManual = root.transform:Find("ButtonManual/Text"):GetComponent("Text")
	btnManual = root.transform:Find("ButtonManual"):GetComponent("Button")
	btnManual.onClick:AddListener(function()
		GameG.PlayGameSound("se_click")
		SetCloseAutoSpin()
	end)
	-- imgAuto = root.transform:Find("ButtonAuto/Image"):GetComponent("Image")
	-- imgAuto.gameObject:SetActive(uiautoSpin.GetManual() == false)
    btnAuto = root.transform:Find("ButtonAuto"):GetComponent("Button")
    btnAuto.onClick:AddListener(function()
		GameG.PlayGameSound("se_click")
		uiautoSpin.Show(function()
			GameStart()
		end)
	end)
	--停止按鈕
    btnStop = root.transform:Find("ButtonStop"):GetComponent("Button")
    btnStop.onClick:AddListener(function() 
		GameG.PlayGameSound("se_click")
		StopSpin() 
	end)
	SetBtnStopEnabled(false)
	--加速按鈕
	btnSpeedUp = root.transform:Find("ButtonSpeedUp"):GetComponent("Button")
	btnSpeedUp.onClick:AddListener(function()
		GameG.PlayGameSound("se_click")
		ChangeTimeScale(2) 
	end)
	btnSpeedUp.gameObject:SetActive(false)
	--減速按鈕
	btnSlowDown = root.transform:Find("ButtonSlowDown"):GetComponent("Button")
	btnSlowDown.onClick:AddListener(function() 
		GameG.PlayGameSound("se_click")
		ChangeTimeScale(1) 
	end)	
	--初始速度
	ChangeTimeScale(1)
	--設定介面
	btnSetting = root.transform:Find("ButtonSetting"):GetComponent("Button")
    btnSetting.onClick:AddListener(function()
		GameG.PlayGameSound("se_click")
		uisetting.Show()
	end)
	--歷史訊息按鈕
    btnHistory = root.transform:Find("UISetting/ButtonHistory"):GetComponent("Button")
    btnHistory.onClick:AddListener(function() 
		GameG.PlayGameSound("se_click")
		uisetting.Hide()
		uihistory.Show()
	end)
		
	uibigWin.Init(root.transform:Find("UIBigWin"))
	uisetting.Init(root.transform:Find("UISetting"))
	uiautoSpin.Init(root.transform:Find("UIAutoSpin"))	
	uihistory.Init(root.transform:Find("UIHistory"))
	uisymbolDetail.Init(root.transform:Find("UISymbolDetail"))
	uipayLine.Init(root.transform:Find("UIPayLine"))
	uibetRate.Init(root.transform:Find("UIBetRate"))
	uibetRate.SetClickCallback(function(index)
		RefreshBetRateButton()
		-- 更換輪軸資訊
		local conditionType = "betRate"
		local conditionValue = gameData.GetBetRate()
		local reelSetting = gameData.GetGameReelSetting(conditionType, conditionValue)
		if(reelSetting ~= nil)then
			uislot.ChangeReelSetting(reelSetting)
		end
	end)
	
	
	mResultShowEnd = true
	
	InitFilter()
end

function InitFilter()
	
	-- bouns game
	local rootBonusEnter = root.transform:Find("UIBonusEnter")
	if(rootBonusEnter ~= nil)then
		uibonusEnter = GameG.RequireG("UIBonusEnter")
		uibonusEnter.Init(rootBonusEnter)
	end
	
	local rootBonusGame = root.transform:Find("UIBonusGame")
	if(rootBonusGame ~= nil)then
		uibonusGame = GameG.RequireG("UIBonusGame")
		uibonusGame.Init(rootBonusGame)
	end
	
	-- free spin
	local rootFreeSpin = root.transform:Find("UIFreeSpin")
	if(rootFreeSpin ~= nil)then
		uifreeSpin = GameG.RequireG("UIFreeSpin")
		uifreeSpin.Init(rootFreeSpin)
	end
	-- jackpotPool
	local rootJackpotPool = root.transform:Find("UIJackpotPool")
	if(rootJackpotPool ~= nil)then
		uijackpotPool = GameG.RequireG("UIJackpotPool")
		uijackpotPool.Init(rootJackpotPool)	
	end
	
	-- jackpot
	local rootJackpot = root.transform:Find("UIJackpot")
	if(rootJackpot ~= nil)then
		uijackpot = GameG.RequireG("UIJackpot")
		uijackpot.Init(rootJackpot)
	end	
end

-- 初始化Camera
function InitCamera()	
	local _RectTransform = CS.UnityEngine.GameObject.Find("Canvas"):GetComponent("RectTransform")
	local _RectScale = tonumber(string.format("%.3f",_RectTransform.transform.localScale.x))
	local UISize = 1.218
	local _Scale = 0
	-- _RectScale值過大
	if(_RectScale > UISize)then
		_Scale =  1.0
	else
		_Scale = UISize / _RectScale
	end
	local _Camera = CS.UnityEngine.GameObject.Find("Canvas/Camera"):GetComponent("Camera")
	_Camera.orthographicSize = _Camera.orthographicSize * _Scale
	
	gameData.SetCameraScale(_Scale)
end

function Start() 
	InitCamera()
end

function Update(  )
	uisetting.Update()
end

-- 設定目前狀態
function ShowStateContent(content)
	txtState.text = content
end

--離開遊戲
function onExit()
	gameData.onExit()
	uislot.onExit()
	uiuser.onExit()
	uichip.onExit()
	uipayLine.onExit()
	uipayTable.onExit()
	uihistory.onExit()
	uisymbolDetail.onExit()
	uibigWin.onExit()
	uibetRate.onExit()
	uiautoSpin.onExit()
	uisetting.onExit()
	if(uibonusEnter ~= nil)then
		uibonusEnter.onExit()
	end
	if(uibonusGame ~= nil)then
		uibonusGame.onExit()
	end
	if(uifreeSpin ~= nil)then
		uifreeSpin.onExit()
	end	
	if(uijackpotPool ~= nil)then
		uijackpotPool.onExit()
	end	
	if(uijackpot ~= nil)then
		uijackpot.onExit()
	end
	ChangeTimeScale(1)
end
-- 回合開始
function GameStart()
	print("GameStart",gameData.State,mResultShowEnd)
	if(mResultShowEnd == false)then
		return
	end
	
	uisymbolDetail.Hide()
	
	if(gameData.State == 5)then
		ShowBonusEnter()
		return	
	elseif(gameData.State ~= 0)then
		return
	end
	ShowStateContent("start")
	
	gameData.SetGameStart()
	SetBtnStartEnabled(uiautoSpin.GetIsAutoMode() == false)
	SetBtnManualEnabled(uiautoSpin.GetIsAutoMode() == true)
	SetBtnStopEnabled(false)
	uiuser.SetGameStart()
	uiautoSpin.SetGameStart()
	uihistory.SetGameStart()
	uisymbolDetail.SetGameStart()
	uipayLine.SetGameStart()
	uibigWin.SetGameStart()
	if(uijackpotPool ~= nil)then
		uijackpotPool.SetGameStart()
	end
		
	if(uiautoSpin.GetCurrentCount() > 0)then
		txtManual.text = uiautoSpin.GetCurrentCount() -1
	else
		txtManual.text = "∞"
	end
	
	-- free spin
	if(gameData.FreeGame ~= nil)then	
		if(uifreeSpin.InState() == false)then
			local freeGameInfo = gameData.GetFreeGameInfoByID(gameData.FreeGame.ID)
			uislot.SetReelSetting(freeGameInfo.ReelSetting)
			uiuser.ResetWinMoney(true)
			uibonusEnter.ShowBonusGameCount()
		end
			
		GameG.Print("FreeGame",gameData.FreeGame)
		uifreeSpin.Show(function()
			-- 設定倍率
			uichip.SetCurrentBetCount(gameData.FreeGame.BetMoney)
			RefreshChipButton()
			
			uibetRate.SetBetRate(gameData.FreeGame.BetRate)
			RefreshBetRateButton()
						
			StartSpin()
		end)
		
	-- 自動旋轉
	elseif(uiautoSpin.GetIsAutoMode() == true) then
		StartSpin()
	else		
		SetInteractable(true)
	end	
end

-- 回合結束
function GameEnd()
	gameData.SetGameEnd()
	uiuser.SetGameEnd()
	uiautoSpin.SetGameEnd()
	uihistory.SetGameEnd();
	uisymbolDetail.SetGameEnd()
	uipayLine.SetGameEnd()
	uibigWin.SetGameEnd()
	
	if(uijackpotPool ~= nil)then		
		uijackpotPool.SetGameEnd()
	end
end
-- 開始轉動
function StartSpin()
	if(mResultShowEnd == false)then
		return
	end
	-- 檢測流程越獄
	if(CheckJailbreakSpin == true)then
		CS.UnityEngine.Debug.LogError("========== 流程越獄 => 請確認流程")
	end
	CheckJailbreakSpin = true
	
	-- CS.AppDefine.StartLog()
	mResultShowEnd = false
	rootNormalBg.gameObject:SetActive(gameData.FreeGame == nil)
	gameModel.SendGameStart();
	uiautoSpin.StartSpin()
	
	-- free spin	
	local inFreeSpin = false
	if(uifreeSpin ~= nil)then
		inFreeSpin = uifreeSpin.InState()
	end
	uiuser.ResetWinMoney(inFreeSpin == false)
end
-- 停止轉動
function StopSpin()	
	-- 快停按鈕沒出現的話，無法快停
	if(btnStop.gameObject.activeSelf == false)then
		return
	end
	
	uislot.SetStopSpin(0.01)
	uiautoSpin.StopSpin()
	
	SetBtnStopEnabled(false)
end

--顯示訊息
function ShowMessage(msg,timer)
	uimessage.ShowTimer(msg,timer)
end

--遊戲狀態S2C 0.下注状态 1.开奖状态 2.开奖动画 3.结算动画 4.等待游戏开始
function SetState(state)
	if(state == 0)then
		GameStart()
	elseif(state == 5)then
		GameStart()
	end
end
--初始設定資料
function SetSetting(receiveMsg)
	uimessage.Hide()
	GameG.Print("ReelSetting",receiveMsg.ReelSetting)
	uislot.SetReelSetting(receiveMsg.ReelSetting)
	
	GameG.Print("TotalPayLine",receiveMsg.TotalPayLine)
	uipayLine.SetTotal(receiveMsg.TotalPayLine)
	uipayLine.SetLayoutWorldPos(uislot.GetSymbolListWorldPos())
	
	GameG.Print("BetMoneys",receiveMsg.BetMoneys)
	uichip.SetData(receiveMsg.BetMoneys)	
	RefreshChipButton()
	
	GameG.Print("BigWinStep",receiveMsg.BigWinStep)	
	GameG.Print("SymbolPayTable",receiveMsg.SymbolPayTable)	
	GameG.Print("PayLines",receiveMsg.PayLines)
	GameG.Print("UnitPrefix",receiveMsg.UnitPrefix)
	GameG.Print("FreeGames",receiveMsg.FreeGames)
	GameG.Print("Descriptions",receiveMsg.Descriptions)
	
	uiautoSpin.SetOptionList(gameData.AutoSpinOption)
	uibetRate.SetBetRateList(receiveMsg.BetRates)
	
	uiuser.SetCarryMoney(gameData.User.Score)
	local gameResult = gameData.GetRecoverGameResult()
	uislot.SetRecoverGameResult(gameResult)
end

--下注結果S2C
function SetBetRet(receiveMsg)
	if(receiveMsg.Ret == 0)then
		ShowStateContent("spin")
		uipayLine.SetStartSpin()
		uislot.SetStartSpin()
		SetInteractable(false)
		gameData.User.Score = gameData.User.Score - receiveMsg.Money
		print("CurrentScore",gameData.User.Score,"Money",receiveMsg.Money)
		uiuser.SetCarryMoney(gameData.User.Score)
	else
		mResultShowEnd = true
		CheckJailbreakSpin = false
		SetCloseAutoSpin()
	end
end
--------------------------------------------------------------------------------
--遊戲結果S2C > 結算流程 > ShowFreeSpinEnd
function SetGameResult(receiveMsg)
	GameG.Print("BetMoney",receiveMsg.BetMoney)
	GameG.Print("WinMoney",receiveMsg.WinMoney)
	GameG.Print("FinalMoney",receiveMsg.FinalMoney)
	GameG.Print("JackpotMoney",receiveMsg.JackpotMoney)
	GameG.Print("ReelResult",receiveMsg.ReelResult)
	GameG.Print("PayGroups",receiveMsg.PayGroups)
	GameG.Print("FreeGameWinMoney",receiveMsg.FreeGameWinMoney)
	GameG.Print("FreeGameExtAward",receiveMsg.FreeGameExtAward)
	GameG.Print("BackgroundInfo",receiveMsg.BackgroundInfo)
	
	local jackpotMoney = receiveMsg.JackpotMoney or 0
	local freeGameWinMoney = receiveMsg.FreeGameWinMoney or 0
	if(freeGameWinMoney > 0)then
		freeGameWinMoney = freeGameWinMoney - receiveMsg.WinMoney
		freeGameWinMoney = freeGameWinMoney - jackpotMoney
		uiuser.SetWinMoney(freeGameWinMoney)
	end
	
	gameData.User.Score = receiveMsg.FinalMoney - receiveMsg.WinMoney
	gameData.User.Score = gameData.User.Score - jackpotMoney
	uiuser.SetCarryMoney(gameData.User.Score)
	
	-- 紀錄盤面結果
	if(uifreeSpin.InState() == false)then
		gameData.SetRecoverGameResult(receiveMsg)
	end
	
	-- free spin
	local inFreeSpin = false
	if(uifreeSpin ~= nil)then
		inFreeSpin = uifreeSpin.InState()
	end	
	SetBtnStopEnabled(uiautoSpin.GetIsAutoMode() == false and inFreeSpin == false)
	-- uipayLine.SetGameResult(receiveMsg.PayGroups)
	uislot.SetGameResult(receiveMsg, function() 
		SetBtnStopEnabled(false)
		ShowStateContent("stop")		
		ShowUpgradeBackground(receiveMsg)
	end)
end

-- 表演關門，顯示升級輪軸
function ShowUpgradeBackground(receiveMsg)
	local result = receiveMsg.BackgroundInfo.BlinkPositions
	uislot.ShowUpgradeBackground(result,function()
		ShowMulti(receiveMsg)
	end)
end

-- 表演中獎倍率
function ShowMulti(receiveMsg)
	uislot.ShowGameResultMulti(receiveMsg,function()
		ShowPayGroup(receiveMsg)
	end)
end

-- 表演中獎連線
function ShowPayGroup(receiveMsg)
	uislot.ShowGameResultSymbolWin(receiveMsg,function()
		ShowNormalBigWin(receiveMsg)
	end)
end

-- 表演 big win
function ShowNormalBigWin(receiveMsg)
	gameData.User.Score = receiveMsg.FinalMoney - receiveMsg.WinMoney
	uiuser.SetCarryMoney(gameData.User.Score)
	
	-- uipayLine.Show(receiveMsg.WinMoney)

	uiuser.AnimWinMoney(receiveMsg.WinMoney,function()
		CompleteReelResult(receiveMsg)
	end)
		
	uibigWin.Show(receiveMsg.WinMoney,function()
		CompleteReelResult(receiveMsg)
	end)
end

-- 表演完金額與中獎符號
function CompleteReelResult(receiveMsg)
	-- 金額還沒表演完畢
	if(uibigWin.CheckShowTimer() == true)then
		return
	end
	-- 獲得金幣還沒表演完畢
	if(uiuser.CheckShowWinMoney() == true)then
		return
	end	
	
	gameData.User.Score = receiveMsg.FinalMoney
	uiuser.SetCarryMoney(gameData.User.Score)
	
	ShowRetrigger(receiveMsg)
end

-- 顯示再次觸發free game
function ShowRetrigger(receiveMsg)
	uifreeSpin.ShowRetrigger(function()
		ShowFreeSpinEnd(receiveMsg)
	end)
end

--------------------------------------------------------------------------------
--free spin 結束
function ShowFreeSpinEnd(receiveMsg)
	if(uifreeSpin ~= nil)then
		local freeSpinState = uifreeSpin.InState()
		uifreeSpin.Hide(receiveMsg.FreeGameWinMoney,function()	
			if(freeSpinState == true and gameData.FreeGame == nil)then
				rootNormalBg.gameObject:SetActive(true)
				-- 更換輪軸資訊
				local conditionType = "betRate"
				local conditionValue = gameData.GetBetRate()
				local reelSetting = gameData.GetGameReelSetting(conditionType, conditionValue)
				if(reelSetting ~= nil)then
					print("~SetRecoverGameResult")
					uislot.ChangeReelSetting(reelSetting)
					local gameResult = gameData.GetRecoverGameResult()
					uislot.SetRecoverGameResult(gameResult)
					receiveMsg = nil
				else
					print("~SetReelSetting")
					uislot.SetReelSetting(gameData.ReelSetting)
				end
			end
			ShowNextGame(receiveMsg)
		end)
	else
		ShowNextGame(receiveMsg)
	end
end

--下局回合開始
function ShowNextGame(receiveMsg)
	-- CS.AppDefine.StopLog()
	if(receiveMsg ~= nil)then
		ShowWinCarousel(receiveMsg)
		gameData.User.Score = receiveMsg.FinalMoney
		uiuser.SetCarryMoney(gameData.User.Score)
	end
	gameData.BonusMoney = 0
	mResultShowEnd = true
	CheckJailbreakSpin = false
	GameStart()
end

--------------------------------------------------------------------------------
-- 狀態5 會觸發狀態
--進入bonus過場
function ShowBonusEnter()	
	if(gameData.BonusGame ~= nil)then
		-- 設定倍率
		uichip.SetCurrentBetCount(gameData.BonusGame.BetMoney)
		RefreshChipButton()
		
		uibetRate.SetBetRate(gameData.BonusGame.BetRate)
		RefreshBetRateButton()
	end
	uibonusEnter.Show(function()
		ShowBonusGame()
	end)
end
--bonus
function ShowBonusGame()
	mResultShowEnd = false
	local tempTimeScale = CS.UnityEngine.Time.timeScale
	ChangeTimeScale(1)
	uibonusGame.Show(function()
		ChangeTimeScale(tempTimeScale)
		ShowBonusEnd()
	end)
	uibonusEnter.ShowBonusGameCount()
end
--離開bonus過場
function ShowBonusEnd()
	if(gameData.BonusGame ~= nil)then
		gameData.User.Score = gameData.User.Score + gameData.BonusGame.WinMoney
		uiuser.SetCarryMoney(gameData.User.Score)
		
		gameModel.SendJackpotPool()
	end
	
	uibonusEnter.Show(function()
		uibonusGame.Hide()
		mResultShowEnd = true
		-- 判斷是否還有BonusGame
		if(gameData.BonusGame ~= nil)then
			ShowBonusGame()
		else
			ShowSelectGameEnter()
		end
	end)
end

-- 顯示可進入free game option
function ShowSelectGameEnter()
	uislot.ShowSelectGameEnter(function()
		ShowSelectGame()
	end)
end

-- 顯示選擇遊戲
function ShowSelectGame()
	if(gameData.FreeMode ~= nil)then
		-- 設定倍率
		uichip.SetCurrentBetCount(gameData.FreeMode.BetMoney)
		RefreshChipButton()
		
		uibetRate.SetBetRate(gameData.FreeMode.BetRate)
		RefreshBetRateButton()
	end
	
	uifreeSpin.ShowGameOption(function()
		GameStart()
	end)
end
--------------------------------------------------------------------------------
-- 表演中獎輪播
function ShowWinCarousel(receiveMsg)
	uislot.ShowGameResultCarousel(receiveMsg,function(money, payLineID)
		-- uipayLine.Show(money, payLineID)
	end)
end

--玩家資訊
function SetUserData(data)
	uiuser.SetGameUser(data)
end
--開始按鈕
function SetBtnStartEnabled(enabled)
	btnStart.gameObject:SetActive(enabled)
end
--自動旋轉按鈕
function SetBtnManualEnabled(enabled)
	btnManual.gameObject:SetActive(enabled)
	-- imgAuto.gameObject:SetActive(enabled)
end
--停止按鈕
function SetBtnStopEnabled(enabled)
	btnStop.gameObject:SetActive(enabled)
end
--加速按鈕
function SetBtnSpeedUpEnabled(enabled)
	btnSpeedUp.gameObject:SetActive(enabled)
end
--減速按鈕
function SetBtnSlowDownEnabled(enabled)
	btnSlowDown.gameObject:SetActive(enabled)
end

-- 設定按鈕的開關
function SetInteractable(enabled)
	btnStart.interactable = enabled
	btnChipUp.interactable = enabled
	btnChipDown.interactable = enabled
	btnPayTable.interactable = enabled
	btnAuto.interactable = enabled
	btnSetting.interactable = enabled
	btnChipClass.Interactable(enabled)
		
	if(enabled == true)then
		RefreshChipButton()
	end
	
	uibetRate.SetInteractable(enabled)
end

-- 更改遊戲速度
function ChangeTimeScale(scale)
	CS.UnityEngine.Time.timeScale = scale
	SetBtnSpeedUpEnabled(scale == 1)
	SetBtnSlowDownEnabled(scale > 1)
end

--更新Jackpot pool值
function SetJackpotPool(data)
	uijackpotPool.SetData(data)
end

-- 設定歷史紀錄
function SetHistoryFindData(data)
	uihistory.SetFindData(data)
end

-- 關閉自動下注
function SetCloseAutoSpin()
	SetBtnStartEnabled(true)
	SetBtnManualEnabled(false)
	uiautoSpin.SetManual()
end

-- 斷線重連回復場景
function SetUserRecover()

end
-- 選擇獎勵結果
function SetPickBonusRet(data)
	uibonusGame.SetRecords(data)
end

-- 重新整理選擇的下注金額
function RefreshChipButton()
	local index = uichip.GetCurrentIndex()
	btnChipUp.interactable = (#gameData.BetMoneys > index)
	btnChipDown.interactable = (index > 1)	
	
	gameData.SetChipMoney(uichip.GetCurrentBetCount())
	
	txtChip.text = GameG.FormatNum(gameData.GetBetMoney())
	txtTotalBet.text = GameG.FormatNum(gameData.GetTotalBetMoney())
		
	-- jackpotPool
	if(uijackpotPool ~= nil)then
		uijackpotPool.RefreshData()
	end
end

-- 重新整理選擇的下注倍率
function RefreshBetRateButton()

	txtTotalBet.text = GameG.FormatNum(gameData.GetTotalBetMoney())
	
	-- jackpotPool
	if(uijackpotPool ~= nil)then
		uijackpotPool.RefreshData()
	end
end
