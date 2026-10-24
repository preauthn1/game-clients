var HallG = require("Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var gameModel = require("GameModel")
var uislot = require("UISlot")
var uibigWin = require("UIBigWin")
var uiautoSpin = require("UIAutoSpin")
var uichip = require("UIChip")
var uimessage = require("UIMessage")
var uipayTable = require("UIPayTable")
var uipayLine = require("UIPayLine")
var uiuser = require("UIUser")
var uisetting = require("UISetting")
var uihistory = require("UIHistory")
var uisymbolDetail = require("UISymbolDetail")
var uibetRate = require("UIBetRate")
var uifortuneGod = require("UIFortuneGod")
var uigoldenReel = require("UIGoldenReel")
var uibonusEnter = require("UIBonusEnter")
var uibonusGame = require("UIBonusGame")
var uifreeSpin = require("UIFreeSpin")
var uijackpotPool = require("UIJackpotPool")
var uijackpot = require("UIJackpot")
var mResultShowEnd = true //結算表演結束
var CheckJailbreakSpin = false //檢測流程越獄
var self = null
////////////////////////////////////////////////////////////////////////////////
// CompleteReelResult > 結算流程 > ShowFreeSpinEnd

var GameLayer = 
{
	extends: cc.Component,
	
	Init()
	{		
		self = this
		
	    let canvas = cc.find("Canvas")
	    let root = cc.find("GameLayer", canvas)
		
		this.rootNormalBg = cc.find("NormalBg", root)
		this.rootNormalBg.active = (true)
		
		// 狀態
		this.txtState = cc.find("TextState", root).getComponent(cc.Label)
		uimessage.Init(cc.find("UIMessage", root))
		uimessage.Show("正在分配座位……")
	
		uipayTable.Init(cc.find("UIPayTable",root))	
	    this.btnPayTable = cc.find("ButtonPayTable", root).getComponent(cc.Button)
	    this.btnPayTable.node.on('click',function()
		{
			GameG.PlayGameSound("se_click")
			self.uipayTable.Show()
	    })	
			
		uislot.Init(cc.find("UISlot", root), cc.find("Result", root))
		uislot.SetSymbolClickCallback(function(isSpinning,data)
		{
			if(isSpinning == true)
			{
				self.StopSpin()
			} 
			else
			{
				self.uisymbolDetail.Show(data)
			}
		})
		// 總下注金額
		this.txtTotalBet = cc.find("ImageTotalBet/Text", root).getComponent(cc.Label)
		// 籌碼
		uichip.Init(cc.find("UIChip", root))
		uichip.SetClickCallback(function()
		{
			self.RefreshChipButton()
		})
		uichip.Hide()
		
		this.btnExit = cc.find("ButtonExit", root).getComponent(cc.Button)
	    this.btnExit.node.on('click', function()
		{
			GameG.PlayGameSound("se_click")
			uisetting.ClickExit()
		})
		// 切換下注金額
		this.txtChip = cc.find("ButtonChip/Text", root).getComponent(cc.Label)
		this.btnChipEnable = cc.find("ButtonChip/ImageEnable", root)
		this.btnChipDisable = cc.find("ButtonChip/ImageDisable", root)
	    this.btnChip = cc.find("ButtonChip", root).getComponent(cc.Button)
	    this.btnChip.node.on('click',function()
		{
			GameG.PlayGameSound("se_click")
			self.uichip.Show()
	    })
	    this.btnChipDown =cc.find("ButtonChipDown", root).getComponent(cc.Button)
	    this.btnChipDown.node.on('click',function()
		{
			GameG.PlayGameSound("se_click")
			uichip.ClickDown()
			self.RefreshChipButton()
	    })	
	    this.btnChipUp =cc.find("ButtonChipUp", root).getComponent(cc.Button)
	    this.btnChipUp.node.on('click',function()
		{
			GameG.PlayGameSound("se_click")
			uichip.ClickUp()
			self.RefreshChipButton()
	    })
		
		//玩家資訊
		uiuser.Init(cc.find("UIUser",root))
		//開始按鈕	
	    this.btnStart = cc.find("ButtonStart", root).getComponent(cc.Button)
	    this.btnStart.node.on('click',function()
		{
			GameG.PlayGameSound("se_click")
			self.StartSpin() 
		})
		//自動按鈕
		this.txtManual = cc.find("ButtonManual/Text", root).getComponent("TextControl")
		this.btnManual = cc.find("ButtonManual", root).getComponent(cc.Button)
		this.btnManual.node.on('click',function()
		{
			GameG.PlayGameSound("se_click")
			self.SetCloseAutoSpin()
		})
		// imgAuto = root.transform:Find("ButtonAuto/Image"):GetComponent("Image")
		// imgAuto.gameObject:SetActive(uiautoSpin.GetManual() == false)
	    this.btnAuto = cc.find("ButtonAuto", root).getComponent(cc.Button)
	    this.btnAuto.node.on('click',function()
		{
			GameG.PlayGameSound("se_click")
			uiautoSpin.Show(function()
			{
				self.GameStart()
			})
		})
		//停止按鈕
	    this.btnStop = cc.find("ButtonStop", root).getComponent(cc.Button)
	    this.btnStop.node.on('click',function()
		{ 
			GameG.PlayGameSound("se_click")
			self.StopSpin()
		})
		this.SetBtnStopEnabled(false)
		//加速按鈕
		this.btnSpeedUp = cc.find("ButtonSpeedUp", root).getComponent(cc.Button)
		this.btnSpeedUp.node.on('click', function()
		{
			GameG.PlayGameSound("se_click")
			self.ChangeTimeScale(2) 
		})
		this.btnSpeedUp.node.active = (false)
		//減速按鈕
		this.btnSlowDown = cc.find("ButtonSlowDown", root).getComponent(cc.Button)
		this.btnSlowDown.node.on('click',function()
		{			
			GameG.PlayGameSound("se_click")
			self.ChangeTimeScale(1) 
		})
		//初始速度
		this.ChangeTimeScale(1)
		//設定介面
		this.btnSetting = cc.find("ButtonSetting", root).getComponent(cc.Button)
	    this.btnSetting.node.on('click',function()
		{
			GameG.PlayGameSound("se_click")
			uisetting.Show()
		})
		//歷史訊息按鈕
		this.btnHistory = cc.find("UISetting/ButtonHistory", root).getComponent(cc.Button)
		this.btnHistory.node.on('click',function()
		{
			GameG.PlayGameSound("se_click")
			uisetting.Hide()
			uihistory.Show()
		})
		
		uibigWin.Init(cc.find("UIBigWin", root))
		uisetting.Init(cc.find("UISetting", root))
		uiautoSpin.Init(cc.find("UIAutoSpin", root))	
		uihistory.Init(cc.find("UIHistory", root))
		uisymbolDetail.Init(cc.find("UISymbolDetail", root))
		uipayLine.Init(cc.find("UIPayLine", root))
		uibetRate.Init(cc.find("UIBetRate", root))
		uibetRate.SetClickCallback(function(index)
		{
			RefreshBetRateButton()
			// 更換輪軸資訊
			let conditionType = "betRate"
			let conditionValue = gameData.GetBetRate()
			let reelSetting = gameData.GetGameReelSetting(conditionType, conditionValue)
			if(reelSetting != null)
			{
				uislot.ChangeReelSetting(reelSetting)
			}
		})
		
		uifortuneGod.Init(cc.find("UIFortuneGod", root))
		uigoldenReel.Init(cc.find("UIGoldenReel", root))
		uibonusEnter.Init(cc.find("UIBonusEnter", root))
		uibonusGame.Init(cc.find("UIBonusGame", root))
		uifreeSpin.Init(cc.find("UIFreeSpin", root))
		uijackpotPool.Init(cc.find("UIJackpotPool", root))
		// uijackpot.Init(cc.find("UIJackpot", root))
		
		mResultShowEnd = true
		
		GameG.PlayGameBGM("bgm_mg")
	},

	// 初始化Camera
	InitCamera()
	{
		let _RectTransform = cc.find("Canvas")		
		let _RectScale =  Math.floor(_RectTransform.scale.x * 1000)
		_RectScale = _RectScale * 0.001
		let UISize = 1.218
		let _Scale = 0
		// _RectScale值過大
		if(_RectScale > UISize)
		{
			_Scale =  1.0
		} 
		else{
			_Scale = UISize / _RectScale
		}
		let _Camera = cc.find("Canvas/Main Camera").getComponent(cc.Camera)
		_Camera.orthographicSize = _Camera.orthographicSize * _Scale
		
		// gameData.SetCameraScale(_Scale)
		gameData.SetCameraScale(1)
	},

	Start()
	{
		this.InitCamera()
	},

	Update(dt)
	{
		uisetting.Update(dt)
		uislot.Update(dt)
		uiuser.Update(dt)
		// uiJackpot.Update(dt)
		uijackpotPool.Update(dt)
		uibonusEnter.Update(dt)
		uibigWin.Update(dt)
	},

	// 設定目前狀態
	ShowStateContent(content)
	{
		this.txtState.text = content
	},

	//離開遊戲
	onExit()
	{
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
		uifortuneGod.onExit()
		uigoldenReel.onExit()
		uiautoSpin.onExit()
		uisetting.onExit()
		if(uibonusEnter != null){
			uibonusEnter.onExit()
		}
		if(uibonusGame != null){
			uibonusGame.onExit()
		}
		if(uifreeSpin != null){
			uifreeSpin.onExit()
		}	
		if(uijackpotPool != null){
			uijackpotPool.onExit()
		}	
		if(uijackpot != null){
			uijackpot.onExit()
		}
		this.ChangeTimeScale(1)
	},

	// 回合開始
	GameStart()
	{
		console.log("GameStart",gameData.State, mResultShowEnd)
		if(mResultShowEnd == false)
		{
			return
		}
		
		uisymbolDetail.Hide()
		
		if(gameData.State == 5)
		{
			ShowBonusEnter()
			return	
		} 
		else if(gameData.State != 0)
		{
			return
		}
		this.ShowStateContent("start")
		
		gameData.SetGameStart()
		this.SetBtnStartEnabled(uiautoSpin.GetIsAutoMode() == false)
		this.SetBtnManualEnabled(uiautoSpin.GetIsAutoMode() == true)
		this.SetBtnStopEnabled(false)
		uiuser.SetGameStart()
		uiautoSpin.SetGameStart()
		uihistory.SetGameStart()
		uisymbolDetail.SetGameStart()
		uipayLine.SetGameStart()
		uibigWin.SetGameStart()
		if(uijackpotPool != null)
		{
			uijackpotPool.SetGameStart()
		}
			
		if(uiautoSpin.GetCurrentCount() > 0)
		{
			this.txtManual.text = uiautoSpin.GetCurrentCount() -1
		}
		else{
			this.txtManual.text = "∞"
		}
		
		// free spin
		if(gameData.FreeGame != null)
		{
			if(uifreeSpin.InState() == false)
			{
				let freeGameInfo = gameData.GetFreeGameInfoByID(gameData.FreeGame.ID)
				uislot.SetReelSetting(freeGameInfo.ReelSetting)
				uiuser.ResetWinMoney(true)
				uibonusEnter.ShowBonusGameCount()
			}
			
			GameG.Print("FreeGame",gameData.FreeGame)
			uifreeSpin.Show(function()
			{
				// 設定倍率
				uichip.SetCurrentBetCount(gameData.FreeGame.BetMoney)
				this.RefreshChipButton()
				
				uibetRate.SetBetRate(gameData.FreeGame.BetRate)
				RefreshBetRateButton()
							
				this.StartSpin()
			})
			
		// 自動旋轉
		}
		else if(uiautoSpin.GetIsAutoMode() == true) 
		{
			this.StartSpin()
		}
		else		
		{
			this.SetInteractable(true)
		}
	},

	// 回合結束
	GameEnd()
	{
		gameData.SetGameEnd()
		uiuser.SetGameEnd()
		uiautoSpin.SetGameEnd()
		uihistory.SetGameEnd();
		uisymbolDetail.SetGameEnd()
		uipayLine.SetGameEnd()
		uibigWin.SetGameEnd()
		
		if(uijackpotPool != null)
		{	
			uijackpotPool.SetGameEnd()
		}
	},

	// 開始轉動
	StartSpin()
	{
		if(mResultShowEnd == false)
		{
			return
		}
		
		// 檢測流程越獄
		if(CheckJailbreakSpin == true)
		{
			CS.UnityEngine.Debug.LogError("========== 流程越獄 => 請確認流程")
		}
		CheckJailbreakSpin = true
		
		// CS.AppDefine.StartLog()
		mResultShowEnd = false
		this.rootNormalBg.active =(gameData.FreeGame == null)
		this.gameModel.SendGameStart()
		uiautoSpin.StartSpin()
		
		// free spin	
		let inFreeSpin = false
		if(uifreeSpin != null)
		{
			inFreeSpin = uifreeSpin.InState()
		}
		uiuser.ResetWinMoney(inFreeSpin == false)
	},

	// 停止轉動
	StopSpin()
	{
		// 快停按鈕沒出現的話，無法快停
		if(this.btnStop.activeSelf == false)
		{
			return
		}
		
		uislot.SetStopSpin(0.01)
		uiautoSpin.StopSpin()
		
		this.SetBtnStopEnabled(false)
	},

	//顯示訊息
	ShowMessage(msg,timer)
	{
		uimessage.ShowTimer(msg,timer)
	},

	//遊戲狀態S2C 0.下注状态 1.开奖状态 2.开奖动画 3.结算动画 4.等待游戏开始
	SetState(state)
	{
		if(state == 0)
		{
			this.GameStart()
		} 
		else if(state == 5)
		{
			this.GameStart()
		}
	},

	//初始設定資料
	SetSetting(receiveMsg)
	{
		GameG.Print("!!! SetSetting")
		uimessage.Hide()
		GameG.Print("ReelSetting",receiveMsg.ReelSetting)
		uislot.SetReelSetting(receiveMsg.ReelSetting)
		
		GameG.Print("TotalPayLine",receiveMsg.TotalPayLine)
		uipayLine.SetTotal(receiveMsg.TotalPayLine)
		uipayLine.SetLayoutWorldPos(uislot.GetSymbolListWorldPos())
		
		GameG.Print("BetMoneys",receiveMsg.BetMoneys)
		uichip.SetData(receiveMsg.BetMoneys)	
		this.RefreshChipButton()
		
		GameG.Print("BigWinStep",receiveMsg.BigWinStep)	
		GameG.Print("SymbolPayTable",receiveMsg.SymbolPayTable)	
		GameG.Print("PayLines",receiveMsg.PayLines)
		GameG.Print("UnitPrefix",receiveMsg.UnitPrefix)
		GameG.Print("FreeGames",receiveMsg.FreeGames)
		GameG.Print("Descriptions",receiveMsg.Descriptions)
		
		uiautoSpin.SetOptionList(gameData.AutoSpinOption)
		uibetRate.SetBetRateList(receiveMsg.BetRates)
		
		uiuser.SetCarryMoney(gameData.User.Score)
		let gameResult = gameData.GetRecoverGameResult()
		uislot.SetRecoverGameResult(gameResult)
	},

	//下注結果S2C
	SetBetRet(receiveMsg)
	{
		if(receiveMsg.Ret == 0)
		{
			this.ShowStateContent("spin")
			uipayLine.SetStartSpin()
			uislot.SetStartSpin()
			this.SetInteractable(false)
			gameData.User.Score = gameData.User.Score - receiveMsg.Money
			console.log("CurrentScore",gameData.User.Score,"Money",receiveMsg.Money)
			uiuser.SetCarryMoney(gameData.User.Score)
		} 
		else
		{
			mResultShowEnd = true
			CheckJailbreakSpin = false
			SetCloseAutoSpin()
		}
	},

	//遊戲結果S2C
	SetGameResult(receiveMsg)
	{
		GameG.Print("BetMoney",receiveMsg.BetMoney)
		GameG.Print("WinMoney",receiveMsg.WinMoney)
		GameG.Print("FinalMoney",receiveMsg.FinalMoney)
		GameG.Print("JackpotMoney",receiveMsg.JackpotMoney)
		GameG.Print("ReelResult",receiveMsg.ReelResult)
		GameG.Print("PayGroups",receiveMsg.PayGroups)
		GameG.Print("FreeGameWinMoney",receiveMsg.FreeGameWinMoney)
		GameG.Print("FreeGameExtAward",receiveMsg.FreeGameExtAward)
		GameG.Print("BackgroundInfo",receiveMsg.BackgroundInfo)
		
		let jackpotMoney = receiveMsg.JackpotMoney || 0
		let freeGameWinMoney = receiveMsg.FreeGameWinMoney || 0
		if(freeGameWinMoney > 0)
		{
			freeGameWinMoney = freeGameWinMoney - receiveMsg.WinMoney
			freeGameWinMoney = freeGameWinMoney - jackpotMoney
			uiuser.SetWinMoney(freeGameWinMoney)
		}
		
		gameData.User.Score = receiveMsg.FinalMoney - receiveMsg.WinMoney
		gameData.User.Score = gameData.User.Score - jackpotMoney
		uiuser.SetCarryMoney(gameData.User.Score)
		
		// 紀錄盤面結果
		if(uifreeSpin.InState() == false)
		{
			gameData.SetRecoverGameResult(receiveMsg)
		}
		
		uifortuneGod.Show(receiveMsg, function(fly)
		{
			if(fly == false)
			{
				// free spin
				let inFreeSpin = false
				if(uifreeSpin != null)
				{
					inFreeSpin = uifreeSpin.InState()
				}
				self.SetBtnStopEnabled(uiautoSpin.GetIsAutoMode() == false && inFreeSpin == false)			
			}
			
			// uipayLine.SetGameResult(receiveMsg.PayGroups)
			uislot.SetGameResult(receiveMsg, function()
			{
				self.SetBtnStopEnabled(false)
				self.ShowStateContent("stop")
				self.ShowUpgradeBackground(receiveMsg)
			})
		})
	},
	
	// 表演關門，顯示升級輪軸
	ShowUpgradeBackground(receiveMsg)
	{
		let result = receiveMsg.BackgroundInfo.BlinkPositions
		uislot.ShowUpgradeBackground(result, function()
		{
			self.ShowGoldenReel(receiveMsg)
		})
	},

	ShowGoldenReel(receiveMsg)
	{
		let result = receiveMsg.BackgroundInfo.BlinkPositions
		let money = receiveMsg.BackgroundInfo.WinMoney
		uigoldenReel.Show(result, money,
		function()
		{ 
			//count
			uibonusEnter.ShowBonusGameCount()
		},
		function()
		{ 
			//money
			gameData.User.Score = receiveMsg.FinalMoney - receiveMsg.WinMoney
			uiuser.SetCarryMoney(gameData.User.Score)
			
			let jackpotPoolData = gameData.GetJackpotPoolByName("GoldReel")
			if(jackpotPoolData != null)
			{
				gameModel.SendJackpotPool(jackpotPoolData.ID)
			}
		},
		function()
		{
			//complete	
			self.ShowMulti(receiveMsg)
		})
	},

	// 表演中獎倍率
	ShowMulti(receiveMsg)
	{
		// GameG.Print("!!! 表演中獎倍率")
		uislot.ShowGameResultMulti(receiveMsg, function()
		{
			self.ShowPayGroup(receiveMsg)
		})
	},

	// 表演中獎連線
	ShowPayGroup(receiveMsg)
	{
		// GameG.Print("!!! 表演中獎連線")
		uislot.ShowGameResultSymbolWin(receiveMsg,function()
		{
			self.ShowNormalBigWin(receiveMsg)
		})
	},

	// 表演 big win
	ShowNormalBigWin(receiveMsg)
	{
		// GameG.Print("!!! 表演 big win")
		gameData.User.Score = receiveMsg.FinalMoney - receiveMsg.WinMoney
		uiuser.SetCarryMoney(gameData.User.Score)
		
		// uipayLine.Show(receiveMsg.WinMoney)
	
		uiuser.AnimWinMoney(receiveMsg.WinMoney,function()
		{
			self.CompleteReelResult(receiveMsg)
		})
			
		uibigWin.Show(receiveMsg.WinMoney,function()
		{
			self.CompleteReelResult(receiveMsg)
		})
	},

	// 表演完金額與中獎符號
	CompleteReelResult(receiveMsg)
	{
		// GameG.Print("!!! 表演完金額與中獎符號")
		// 金額還沒表演完畢
		if(uibigWin.CheckShowTimer() == true)
		{
			return
		}
		// 獲得金幣還沒表演完畢
		if(uiuser.CheckShowWinMoney() == true)
		{
			return
		}
		
		gameData.User.Score = receiveMsg.FinalMoney
		uiuser.SetCarryMoney(gameData.User.Score)
		
		this.ShowResultProcess(receiveMsg)
	},

	ShowResultProcess(receiveMsg)
	{
		// GameG.Print("!!! ShowResultProcess")
		this.ShowRetrigger(receiveMsg)
	},

	// 顯示再次觸發free game
	ShowRetrigger(receiveMsg)
	{
		// GameG.Print("!!! 顯示再次觸發free game")
		uifreeSpin.ShowRetrigger(function()
		{
			self.ShowFreeSpinEnd(receiveMsg)
		})
	},

	////////////////////////////////////////////////////////////////////////////////
	//free spin 結束
	ShowFreeSpinEnd(receiveMsg)
	{
		// GameG.Print("!!! free spin 結束")
		if(uifreeSpin != null)
		{
			let freeSpinState = uifreeSpin.InState()
			uifreeSpin.Hide(receiveMsg.FreeGameWinMoney,function()
			{
				if(freeSpinState == true && gameData.FreeGame == null)
				{
					rootNormalBg.node.active =(true)
					// 更換輪軸資訊
					let conditionType = "betRate"
					let conditionValue = gameData.GetBetRate()
					let reelSetting = gameData.GetGameReelSetting(conditionType, conditionValue)
					if(reelSetting != null)
					{
						console.log("~SetRecoverGameResult")
						uislot.ChangeReelSetting(reelSetting)
						let gameResult = gameData.GetRecoverGameResult()
						uislot.SetRecoverGameResult(gameResult)
						receiveMsg = null
					} 
					else
					{
						console.log("~SetReelSetting")
						uislot.SetReelSetting(gameData.ReelSetting)
					}
				}
				self.ShowNextGame(receiveMsg)
			})
		}
		else
		{
			self.ShowNextGame(receiveMsg)
		}
	},

	//下局回合開始
	ShowNextGame(receiveMsg)
	{
		// GameG.Print("!!! 下局回合開始")
		// CS.AppDefine.StopLog()
		if(receiveMsg != null)
		{
			this.ShowWinCarousel(receiveMsg)
			gameData.User.Score = receiveMsg.FinalMoney
			uiuser.SetCarryMoney(gameData.User.Score)
		}
		gameData.BonusMoney = 0
		mResultShowEnd = true
		CheckJailbreakSpin = false
		this.GameStart()
	},

	////////////////////////////////////////////////////////////////////////////////
	// 狀態5 會觸發狀態
	//進入bonus過場
	ShowBonusEnter()
	{
		if(gameData.BonusGame != null)
		{
			// 設定倍率
			uichip.SetCurrentBetCount(gameData.BonusGame.BetMoney)
			this.RefreshChipButton()
			
			uibetRate.SetBetRate(gameData.BonusGame.BetRate)
			RefreshBetRateButton()
		}
		uibonusEnter.Show(function()
		{
			ShowBonusGame()
		})
	},

	//bonus
	ShowBonusGame()
	{
		mResultShowEnd = false
		let tempTimeScale = CS.UnityEngine.Time.timeScale
		this.ChangeTimeScale(1)
		uibonusGame.Show(function()
		{
			this.ChangeTimeScale(tempTimeScale)
			ShowBonusEnd()
		})
		uibonusEnter.ShowBonusGameCount()
	},

	//離開bonus過場
	ShowBonusEnd()
	{
		if(gameData.BonusGame != null)
		{
			gameData.User.Score = gameData.User.Score + gameData.BonusGame.WinMoney
			uiuser.SetCarryMoney(gameData.User.Score)
			
			gameModel.SendJackpotPool()
		}
		
		uibonusEnter.Show(function()
		{
			uibonusGame.Hide()
			mResultShowEnd = true
			// 判斷是否還有BonusGame
			if(gameData.BonusGame != null)
			{
				ShowBonusGame()
			} 
			else
			{
				ShowSelectGameEnter()
			}
		})
	},

	// 顯示可進入free game option
	ShowSelectGameEnter()
	{
		uislot.ShowSelectGameEnter(function()
		{
			ShowSelectGame()
		})
	},

	// 顯示選擇遊戲
	ShowSelectGame()
	{
		if(gameData.FreeMode != null)
		{
			// 設定倍率
			uichip.SetCurrentBetCount(gameData.FreeMode.BetMoney)
			this.RefreshChipButton()
			
			uibetRate.SetBetRate(gameData.FreeMode.BetRate)
			RefreshBetRateButton()
		}
		
		uifreeSpin.ShowGameOption(function()
		{
			this.GameStart()
		})
	},

	////////////////////////////////////////////////////////////////////////////////
	// 表演中獎輪播
	ShowWinCarousel(receiveMsg)
	{
		uislot.ShowGameResultCarousel(receiveMsg,function(money, payLineID)
		{
			// uipayLine.Show(money, payLineID)
		})
	},

	//玩家資訊
	SetUserData(data)
	{
		uiuser.SetGameUser(data)
	},

	//開始按鈕
	SetBtnStartEnabled(enabled)
	{
		this.btnStart.node.active =(enabled)
	},

	//自動旋轉按鈕
	SetBtnManualEnabled(enabled)
	{
		this.btnManual.node.active =(enabled)
		// imgAuto.gameObject:SetActive(enabled)
	},

	//停止按鈕
	SetBtnStopEnabled(enabled)
	{
		this.btnStop.node.active = (enabled)
	},

	//加速按鈕
	SetBtnSpeedUpEnabled(enabled)
	{
		this.btnSpeedUp.node.active =(enabled)
	},

	//減速按鈕
	SetBtnSlowDownEnabled(enabled)
	{
		this.btnSlowDown.node.active =(enabled)
	},

	// 設定按鈕的開關
	SetInteractable(enabled)
	{
		this.btnStart.interactable = enabled
		this.btnChipUp.interactable = enabled
		this.btnChipDown.interactable = enabled
		this.btnPayTable.interactable = enabled
		this.btnAuto.interactable = enabled
		this.btnSetting.interactable = enabled
		this.btnChip.interactable = enabled
		this.btnChipEnable.active = enabled
		this.btnChipDisable.active = enabled
		
		if(enabled == true)
		{
			this.RefreshChipButton()
		}
		
		uibetRate.SetInteractable(enabled)
	},

	// 更改遊戲速度
	ChangeTimeScale(scale)
	{
		GameG.ChangeTimeScale(scale)
		this.SetBtnSpeedUpEnabled(scale == 1)
		this.SetBtnSlowDownEnabled(scale > 1)
	},

	//更新Jackpot pool值
	SetJackpotPool(data)
	{
		uijackpotPool.SetData(data)
	},

	// 設定歷史紀錄
	SetHistoryFindData(data)
	{
		uihistory.SetFindData(data)
	},

	// 關閉自動下注
	SetCloseAutoSpin()
	{
		this.SetBtnStartEnabled(true)
		this.SetBtnManualEnabled(false)
		uiautoSpin.SetManual()
	},

	// 斷線重連回復場景
	SetUserRecover()
	{
	
	},

	// 選擇獎勵結果
	SetPickBonusRet(data)
	{
		uibonusGame.SetRecords(data)
	},

	// 重新整理選擇的下注金額
	RefreshChipButton()
	{
		let index = uichip.GetCurrentIndex()
		this.btnChipUp.interactable = (gameData.BetMoneys.length > index)
		this.btnChipDown.interactable = (index > 1)	
		
		gameData.SetChipMoney(uichip.GetCurrentBetCount())
		
		this.txtChip.text = GameG.FormatNum(gameData.GetBetMoney())
		this.txtTotalBet.text = GameG.FormatNum(gameData.GetTotalBetMoney())
			
		// jackpotPool
		if(uijackpotPool != null)
		{
			uijackpotPool.RefreshData()
		}
	},

	// 重新整理選擇的下注倍率
	RefreshBetRateButton(){
	
		this.txtTotalBet.text = GameG.FormatNum(gameData.GetTotalBetMoney())
		
		// jackpotPool
		if(uijackpotPool != null)
		{
			uijackpotPool.RefreshData()
		}
	},
};

module.exports = GameLayer
