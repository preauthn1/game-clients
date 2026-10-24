var GameG = require("GameGlobal")
var gameConfig = require("GameConfig")
var gameData = require("GameData")
var gameModel= require("GameModel")
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
var uichoose = require("UIChoose")
var uigoldsymbol = require("UIGoldSymbol")
var uilightning = require("UILightning")
var uishowsymbol = require("UIShowSymbol")
var uibonusEnter = require("UIBonusEnter")
var uibonusGame = require("UIBonusGame")
var uifreeSpin = require("UIFreeSpin")
var uijackpotPool = require("UIJackpotPool")
var uiJackpot = require("UIJackpot")
var MDoTween = require("MDoTween")
var mResultShowEnd = true //結算表演結束
var mIsSpinHad = false //有轉過
var mIsShowWin

/** 用途: 控制遊戲流程與介面 */
var GameLayer = {
	extends: cc.Component,

	Init(){
		GameG.PlayGameBGM("bgm_mg")
		
	    let canvas = cc.find("Canvas")
		let root = cc.find("GameLayer",canvas)
		this.rootRect = root

		this.rootNormalBg = cc.find("NormalBg",root)	
		this.rootFreeSpinBg = cc.find("FreeSpinBg",root)	
		this.rootLigthningBg = cc.find("LigthningBg",root)
		let self = this
	// 狀態
		this.txtState = cc.find("TextState",root).getComponent(cc.Label)
		
		uimessage.Init(cc.find("UIMessage",root))
		uimessage.Show("正在分配座位……")
	
		uipayTable.Init(cc.find("UIPayTable",root))	
	    this.btnPayTable = cc.find("ButtonPayTable",root).getComponent(cc.Button)
	    this.btnPayTable.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			uipayTable.Show()
	    })	
			
		uislot.Init(cc.find("UISlot",root))
		uislot.SetSymbolClickCallback(function(isSpinning,data){
			if(isSpinning == true){
				self.StopSpin()
			} 
			else{
				uisymbolDetail.Show(data)
			}
		})
    // 總下注金額
		this.txtTotalBet = cc.find("ImageTotalBet/Text",root).getComponent(cc.Label)
	// 籌碼
		uichip.Init(cc.find("UIChip",root))
		uichip.SetClickCallback(function(){
			self.RefreshChipButton()
		})
		uichip.Hide()
		
        let Referrer = gameConfig.getReferrer()
		this.btnExit = cc.find("ButtonExit",root).getComponent(cc.Button)
	    this.btnExit.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			uisetting.ClickExit()
		})
        if (Referrer == "0")
            this.btnExit.node.active = false
        else
			this.btnExit.node.active = true
			
	// 切換下注金額
		this.txtChip = cc.find("ButtonChip/Text",root).getComponent(cc.Label)
	    this.btnChip = cc.find("ButtonChip",root).getComponent(cc.Button)
	    this.btnChip.node.on('click',function(){
			return
			GameG.PlayGameSound("se_click")
			uichip.Show()
	    })	
	    this.btnChipDown = cc.find("ButtonChipDown",root).getComponent(cc.Button)
	    this.btnChipDown.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			uichip.ClickDown()
			self.RefreshChipButton()
	    })	
	    this.btnChipUp = cc.find("ButtonChipUp",root).getComponent(cc.Button)
	    this.btnChipUp.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			uichip.ClickUp()
			self.RefreshChipButton()
	    })
		
	//玩家資訊
		uiuser.Init(cc.find("UIUser",root))
	//開始按鈕	
	    this.imgStart = cc.find("ButtonStart",root).getComponent(cc.Sprite)
	    this.btnStart = cc.find("ButtonStart",root).getComponent(cc.Button)
	    this.btnStart.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			self.StartSpin() 
		})
	//自動按鈕
		this.txtManual = cc.find("ButtonManual/Text",root).getComponent("TextControl")
		this.imgManual = cc.find("ButtonManual",root).getComponent(cc.Sprite)
		this.btnManual = cc.find("ButtonManual",root).getComponent(cc.Button)
		this.btnManual.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			self.SetCloseAutoSpin()
		})
	    this.btnAuto = cc.find("ButtonAuto",root).getComponent(cc.Button)
	    this.btnAuto.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			uiautoSpin.Show(function(){ 
				self.GameStart()
			})
		})
	//停止按鈕
	    this.btnStop = cc.find("ButtonStop",root).getComponent(cc.Button)
	    this.btnStop.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			self.StopSpin() 
		})
		this.SetBtnStopEnabled(false)
	//加速按鈕
		this.imgSpeedUp = cc.find("ButtonSpeedUp",root).getComponent(cc.Sprite)
		this.btnSpeedUp = cc.find("ButtonSpeedUp",root).getComponent(cc.Button)
		this.btnSpeedUp.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			self.ChangeTimeScale(2) 
		})
		this.btnSpeedUp.node.active =(false)
	//減速按鈕
		this.imgSlowDown = cc.find("ButtonSlowDown",root).getComponent(cc.Sprite)
		this.btnSlowDown = cc.find("ButtonSlowDown",root).getComponent(cc.Button)
		this.btnSlowDown.node.on('click',function(){ 
			GameG.PlayGameSound("se_click")
			self.ChangeTimeScale(1) 
		})	
	//初始速度
		this.ChangeTimeScale(1)
	//設定介面
		this.btnSetting = cc.find("ButtonSetting",root).getComponent(cc.Button)
	    this.btnSetting.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			uisetting.Show()
		})
	//歷史訊息按鈕
	    this.btnHistory = cc.find("UISetting/ButtonHistory",root).getComponent(cc.Button)
	    this.btnHistory.node.on('click',function(){ 
			GameG.PlayGameSound("se_click")
			uisetting.Hide()
			uihistory.Show()
		})
			
		uibigWin.Init(cc.find("UIBigWin",root))
		uisetting.Init(cc.find("UISetting",root))
		uiautoSpin.Init(cc.find("UIAutoSpin",root))	
		uihistory.Init(cc.find("UIHistory",root))
		uisymbolDetail.Init(cc.find("UISymbolDetail",root))
		uipayLine.Init(cc.find("UIPayLine",root))
	// 關門
		let closeDoorFunc = function(){
			self.SetNormalUIActive(false)
			self.rootNormalBg.active =(false)
			uigoldsymbol.SetActive(false)
			uibonusEnter.SetActive(false)
		}
		uichoose.Init(cc.find("UIChoose",root), closeDoorFunc)
		uigoldsymbol.Init(cc.find("UIGoldSymbol",root))
		uigoldsymbol.SetRefresh(function(){
			self.RefreshGoldSymbolCredits()
		})
		uilightning.Init(cc.find("UILightning",root), this.rootLigthningBg)
		uishowsymbol.Init(cc.find("UIShowSymbol",root))
		
		mResultShowEnd = true
		
		this.InitFilter()
		this.SetBg("Normal")
		
		this.doTween = new MDoTween()
	},

	SetBg(id){	
		this.rootNormalBg.active =(id == "Normal")	
		this.rootFreeSpinBg.active =(id == "FreeSpin")
		this.rootLigthningBg.active =(id == "Lightning")
	},

	InitFilter(){
		
	// bouns game
		let rootBonusEnter = cc.find("UIBonusEnter",this.rootRect)
		if(rootBonusEnter != null){			
			uibonusEnter.Init(rootBonusEnter)
		}
		
		let rootBonusGame = cc.find("UIBonusGame",this.rootRect)
		if(rootBonusGame != null){			
			uibonusGame.Init(rootBonusGame)
		}
		
	// free spin
		let rootFreeSpin = cc.find("UIFreeSpin",this.rootRect)
		if(rootFreeSpin != null){			
			uifreeSpin.Init(rootFreeSpin)
		}
	// jackpotPool
		let rootJackpotPool = cc.find("UIJackpotPool",this.rootRect)
		if(rootJackpotPool != null){			
			uijackpotPool.Init(rootJackpotPool)	
		}
		
	// jackpot
		let rootJackpot = cc.find("UIJackpot",this.rootRect)
		if(rootJackpot != null){			
			uiJackpot.Init(rootJackpot)
		}	
	},

	Start(){
		
	},

	Update(dt){
		uisetting.Update(dt)
		uijackpotPool.Update(dt)
		uislot.Update(dt)
		uiuser.Update(dt)
		uibigWin.Update(dt)
		uipayLine.Update(dt)
	},

// 設定目前狀態
	ShowStateContent(content){
		this.txtState.string = content
	},

//離開遊戲
	onExit(){
		gameData.FreeGame = null
		if(this.doTween != null){
			this.doTween.Kill()
		}
		mIsSpinHad = false
		uislot.onExit()
		uiuser.onExit()
		uichip.onExit()
		uipayLine.onExit()
		uipayTable.onExit()
		uihistory.onExit()
		uisymbolDetail.onExit()
		uilightning.onExit()
		uichoose.onExit()
		if(uijackpotPool != null){
			uijackpotPool.onExit()
		}
	},

// 回合開始
	GameStart(){
		console.log("GameStart",gameData.State,mResultShowEnd)
		
		if(mResultShowEnd == false){
			return
		}
	// BonusGame中
		if(uibonusGame.InState()){
			return
		}
	// Lightning中
		if(uilightning.InState()){
			return
		}
		let self = this
		if(gameData.State == 5){
		
		// 有BonusGame
			if(gameData.BonusGame != null){
				
				let winMoney = gameData.BonusGame.WinMoney
				
				let callback = function(){				
				// BonusGame
					uibonusGame.Show(mIsSpinHad, function(){
						gameData.User.Score = gameData.User.Score + winMoney
						uiuser.SetCarryMoney(gameData.User.Score)
						self.GameStart()
					})
				}
				self.SetBet(gameData.BonusGame.BetMoney, gameData.BonusGame.BetRate)
				uibonusEnter.Show(mIsSpinHad, callback)
				return
			}
			
		// 在選擇
			if(uichoose.InState()){
				
			} 
			else{
			// 進入選擇
				uibonusEnter.BowlHide()
				this.SetBet(gameData.SelectGameOptionsData.BetMoney, gameData.SelectGameOptionsData.BetRate)
				uichoose.Show(mIsSpinHad)
				mIsSpinHad = true
			}
			return
		}
		if(gameData.State != 0){
			return
		}
		this.ShowStateContent("start")
		uigoldsymbol.SetTouchEnable(true)
		
		gameData.SetGameStart()
		
		this.SetInteractable(gameData.State == 0 && gameData.FreeGame == null)	
		this.SetBtnStartEnabled(uiautoSpin.GetIsAutoMode() == false)
		this.SetBtnManualEnabled(uiautoSpin.GetIsAutoMode() == true)
		this.SetBtnStopEnabled(false)
		uiuser.SetGameStart()
		uiautoSpin.SetGameStart()
		uihistory.SetGameStart()
		uisymbolDetail.SetGameStart()
		uipayLine.SetGameStart()
		uibigWin.SetGameStart()
		if(uijackpotPool != null){
			uijackpotPool.SetGameStart()
		}
		
		if(uiautoSpin.GetCurrentCount() > 0){
			this.txtManual.string = uiautoSpin.GetCurrentCount() -1
		} 
		else{
			this.txtManual.string = "∞"
		}
		
	// bonus game (斷線重連，沒有free spin才會從這裡進去)
		if(gameData.BonusGame != null){	
			console.log("BonusGame",gameData.BonusGame)	
			mResultShowEnd = false
		// ShowBonusGame()
	// free spin
		} 
		else if(gameData.FreeGame != null){	

			console.log("FreeGame",gameData.FreeGame)
			uifreeSpin.Show(mIsSpinHad, gameData.FreeGame,
			function(){ 	//close door callback
				self.SetNormalUIActive(false)
				uigoldsymbol.SetActive(false)
				uibonusEnter.SetActive(false)
				
				uiuser.ResetWinMoney(true)
				self.UpdateFreeReelSetting()
			// 設定倍率
				uichip.SetCurrentBetCount(gameData.FreeGame.BetMoney)
				self.RefreshChipButton()
				self.SetBg("FreeSpin")
			},
			function(){  // open door callback
			// bonus game (斷線重連)
				if(gameData.BonusGame != null){
					mResultShowEnd = false
					self.ShowBonusGame()
				} 
				else{
					self.StartSpin() 
				}
			})
			
	// 自動旋轉
		} 
		else if(uiautoSpin.GetIsAutoMode() == true) {
			this.SetInteractable(false)	
			this.StartSpin()
		}	
	},

// 回合結束
	GameEnd(){
		gameData.SetGameEnd()
		uiuser.SetGameEnd()
		uiautoSpin.SetGameEnd()
		uihistory.SetGameEnd();
		uisymbolDetail.SetGameEnd()
		uipayLine.SetGameEnd()
		uibigWin.SetGameEnd()
		
		if(uijackpotPool != null){		
			uijackpotPool.SetGameEnd()
		}
	},

// 開始轉動
	StartSpin(){
		if(mResultShowEnd == false){
			return
		}
		mIsShowWin = true
		mIsSpinHad = true
	// CS.AppDefine.StartLog()
		mResultShowEnd = false
		this.rootNormalBg.active =(gameData.FreeGame == null)
		gameModel.SendGameStart(uichip.GetCurrentBetCount(), gameData.GetBetRate())
		uiautoSpin.StartSpin()
		uishowsymbol.StartSpin()
		uigoldsymbol.SetTouchEnable(false)
		
	// free spin	
		let inFreeSpin = false
		if(uifreeSpin != null){
			inFreeSpin = uifreeSpin.InState()
		}
		uiuser.ResetWinMoney(inFreeSpin == false)
	},

// 停止轉動
	StopSpin(){	
		uislot.SetStopSpin(0)
		uiautoSpin.StopSpin()
		
		this.SetBtnStopEnabled(false)
	},

//顯示訊息
	ShowMessage(msg,timer){
		uimessage.ShowTimer(msg,timer)
	},

//遊戲狀態S2C 0.下注状态 1.开奖状态 2.开奖动画 3.结算动画 4.等待游戏开始
	SetState(state){
		if(state == 0){
			this.GameStart()
		} 
		else if(state == 5){

			this.GameStart()
		}
	},

//初始設定資料
	SetSetting(receiveMsg){
		uimessage.Hide()
		console.log("ReelSetting",receiveMsg.ReelSetting)
		uislot.SetReelSetting(receiveMsg.ReelSetting)
		
		console.log("TotalPayLine",receiveMsg.TotalPayLine)
	// uipayLine.SetTotal(receiveMsg.TotalPayLine)
	// uipayLine.SetLayoutWorldPos(uislot.GetSymbolListWorldPos())
		
		console.log("BetRates",receiveMsg.BetRates)
		console.log("BetMoneys",receiveMsg.BetMoneys)
		uichip.SetData(receiveMsg.BetMoneys)
		this.RefreshChipButton()
		this.RefreshGoldSymbolCredits()
		
		console.log("BigWinStep",receiveMsg.BigWinStep)	
		console.log("SymbolPayTable",receiveMsg.SymbolPayTable)	
		console.log("PayLines",receiveMsg.PayLines)
		console.log("UnitPrefix",receiveMsg.UnitPrefix)
		console.log("FreeGames",receiveMsg.FreeGames)
		console.log("Descriptions",receiveMsg.Descriptions)
		console.log("GoldBallSetting",receiveMsg.GoldBallSetting)
		
		uiautoSpin.SetOptionList(gameData.AutoSpinOption)
		
		uiuser.SetCarryMoney(gameData.User.Score)
	},

	SetGameReelSetting(receiveMsg){	
		console.log("GameReelSetting",receiveMsg.GameReels)
	},

//下注結果S2C
	SetBetRet(receiveMsg){
		if(receiveMsg.Ret == 0){
			this.ShowStateContent("spin")
		// uipayLine.SetStartSpin()
			uislot.SetStartSpin()
			this.SetInteractable(false)
			gameData.User.Score = gameData.User.Score - receiveMsg.Money
			console.log("CurrentScore",gameData.User.Score,"Money",receiveMsg.Money)
			uiuser.SetCarryMoney(gameData.User.Score)
		} 
		else{
			mResultShowEnd = true
			this.SetCloseAutoSpin()
			uigoldsymbol.SetTouchEnable(true)
			this.SetInteractable(true)
		}
	},

//遊戲結果S2C
	SetGameResult(receiveMsg){
		console.log("BetMoney",receiveMsg.BetMoney)
		console.log("WinMoney",receiveMsg.WinMoney)
		console.log("FinalMoney",receiveMsg.FinalMoney)
		console.log("JackpotMoney",receiveMsg.JackpotMoney)
		console.log("ReelResult",receiveMsg.ReelResult)
		console.log("PayGroups",receiveMsg.PayGroups)
		console.log("FreeGameWinMoney",receiveMsg.FreeGameWinMoney)
		console.log("FreeGameExtAward",receiveMsg.FreeGameExtAward)
		
	// free spin
		let inFreeSpin = false
		if(uifreeSpin != null){
			inFreeSpin = uifreeSpin.InState()		
		}
		uishowsymbol.SetGameResult(receiveMsg, gameData.GapTimer_Carousel)
		this.SetBtnStopEnabled(uiautoSpin.GetIsAutoMode() == false && inFreeSpin == false)
		let self = this
	// uipayLine.SetGameResult(receiveMsg.PayGroups)
		uislot.SetGameResult(receiveMsg,
		function(){ //callbackStop
			self.SetBtnStopEnabled(false)
		// uipayLine.Show()
			if(inFreeSpin){
				self.ShowWinCarousel(receiveMsg)
			}
		},
		function(){ // callbackComplete
			self.ShowStateContent("stop")
					
			if(inFreeSpin){
				self.ShowNormalBigWin(receiveMsg)
			} 
			else{
				gameData.User.Score = receiveMsg.FinalMoney - receiveMsg.WinMoney
				uiuser.SetCarryMoney(gameData.User.Score)
				self.ShowNormalBigWin(receiveMsg)
			}
		})
	},

// 表演 big win
	ShowNormalBigWin(receiveMsg){
	// uipayLine.Show(receiveMsg.WinMoney)
		let self = this
		uiuser.AnimWinMoney(receiveMsg.WinMoney,function(){
			self.CompleteReelResult(receiveMsg)
		})
			
		uibigWin.Show(receiveMsg.WinMoney,function(){
			self.CompleteReelResult(receiveMsg)
		})
	},

// 表演完金額與中獎符號
	CompleteReelResult(receiveMsg){
	// 金額還沒表演完畢
		if(uibigWin.CheckShowTimer() == true){
			return
		}
	// 獲得金幣還沒表演完畢
		if(uiuser.CheckShowWinMoney() == true){
			return
		}	
		
		this.ShowResultProcess(receiveMsg)
	},

//free spin 結束
	ShowFreeSpinEnd(receiveMsg){
		
		if(uifreeSpin != null && uifreeSpin.InState() == true && gameData.FreeGame != null){
		
		// 更新次數
		// uifreeSpin.SetFreeCount(gameData.FreeGame.Count)		
			let self = this
			let callback = function(){
				
				GameG.PlayGameBGM("bgm_fg")		
				
				if(gameData.FreeGame.Count == 0){
					uifreeSpin.Hide(receiveMsg,
					function(){ 	//close door callback
						uishowsymbol.Hide()
						self.SetNormalUIActive(true)
						uigoldsymbol.SetActive(true)
						uibonusEnter.SetActive(true)
						self.RefreshGameReelSetting(true)
						self.SetBg("Normal")
					},
					function(){ // open door callback
					// 不要播輪播獎
						mIsShowWin = false
						self.ShowNextGame(receiveMsg)
					})
				} 
				else{
				// 最後一首
					// if(receiveMsg.FreeGameExtAward.IsFinished == true){
					// // 更新錢
					// 	gameData.User.Score = receiveMsg.FinalMoney - receiveMsg.FreeGameWinMoney - receiveMsg.FreeGameExtAward.TotalWinMoney
					// } 
					// else{
					// // 更新錢
					// 	gameData.User.Score = receiveMsg.FinalMoney - receiveMsg.FreeGameWinMoney
					// }
					gameData.User.Score = receiveMsg.FinalMoney
					uiuser.SetCarryMoney(gameData.User.Score)
				// 不要播輪播獎
					mIsShowWin = false
					self.ShowNextGame(receiveMsg)
				}
			}
		// 
			uifreeSpin.SpinEnd(receiveMsg, callback)		
		} 
		else{
			this.ShowNextGame(receiveMsg)
		}
	},

// 表演中獎輪播
	ShowWinCarousel(receiveMsg){
		if(receiveMsg == null){
			return
		}
		if(mIsShowWin == false){
			uishowsymbol.Hide()
			return
		}
		if(uifreeSpin.InState()){
			uishowsymbol.Show(533, 0)
		} 
		else{
			uishowsymbol.Show(190, 300)
		}
		uislot.ShowGameResultCarousel(receiveMsg,function(money, payLineID){
		// uipayLine.Show(money, payLineID)
		})
	},

//下局回合開始 
	ShowNextGame(receiveMsg){
		this.ShowWinCarousel(receiveMsg)
	// CS.AppDefine.StopLog()
		if(receiveMsg != null){
			if(uifreeSpin.InState()){
			} 
			else{
				gameData.User.Score = receiveMsg.FinalMoney
				uiuser.SetCarryMoney(gameData.User.Score)
			}
		}
		gameData.BonusMoney = 0
		mResultShowEnd = true
		this.GameStart()
	},

//玩家資訊
	SetUserData(data){
		uiuser.SetGameUser(data)
	},

//開始按鈕 
	SetBtnStartEnabled(enabled){
		this.btnStart.node.active =(enabled)
	},

//自動旋轉按鈕
	SetBtnManualEnabled(enabled){
		this.btnManual.node.active =(enabled)
	},

//停止按鈕
	SetBtnStopEnabled(enabled){
		this.btnStop.node.active =(enabled)
	},

//加速按鈕
	SetBtnSpeedUpEnabled(enabled){
		this.btnSpeedUp.node.active =(enabled)
	},

//減速按鈕
	SetBtnSlowDownEnabled(enabled){
		this.btnSlowDown.node.active =(enabled)
	},

//設定按鈕
	SetBtnSettingEnabled(enabled){
		this.btnSetting.node.active =(enabled)
	},

//賠付表按鈕
	SetBtnPayTableEnabled(enabled){
		this.btnPayTable.node.active =(enabled)
	},

//自動按鈕
	SetBtnAutoEnabled(enabled){
		this.btnAuto.node.active =(enabled)
	},

//下注按鈕
	SetBtnChipEnabled(enabled){
		this.btnChip.node.active =(enabled)
		this.btnChipUp.node.active =(enabled)
		this.btnChipDown.node.active =(enabled)
	},

// 設定所有按鈕活
	SetNormalUIActive(isActive){
		this.imgStart.enabled = isActive
		this.btnStart.interactable = isActive
		this.imgManual.enabled = isActive
		this.btnManual.interactable = isActive
		this.txtManual.node.active = isActive
		this.SetBtnStopEnabled(isActive)
		this.imgSpeedUp.enabled = isActive
		this.btnSpeedUp.interactable = isActive
		this.imgSlowDown.enabled = isActive
		this.btnSlowDown.interactable = isActive
		this.SetBtnSettingEnabled(isActive)
		this.SetBtnPayTableEnabled(isActive)
		this.SetBtnAutoEnabled(isActive)
		this.SetBtnChipEnabled(isActive)
		uijackpotPool.SetActive(isActive)
	},

// 設定按鈕的開關
	SetInteractable(enabled){
		this.btnStart.interactable = enabled
		this.btnChipUp.interactable = enabled
		this.btnChipDown.interactable = enabled
		this.btnPayTable.interactable = enabled
		this.btnAuto.interactable = enabled
		this.btnSetting.interactable = enabled
		this.btnChip.interactable = enabled
			
		if(enabled == true){
			this.RefreshChipButton()
		}
	},

// 更改遊戲速度
	ChangeTimeScale(scale){
		GameG.ChangeTimeScale(scale)
		this.SetBtnSpeedUpEnabled(scale == 1)
		this.SetBtnSlowDownEnabled(scale > 1)
	},

//更新Jackpot pool值
	SetJackpotPool(data){
		uijackpotPool.SetData(data)
		
	// FreeGame更新JP
		if(uifreeSpin.InState()){
			uifreeSpin.UpdateJP()
		}
		
	// Lightning更新JP
		if(uilightning.InState()){
			uilightning.UpdateJP()
		}
	},

// 設定歷史紀錄
	SetHistoryFindData(data){
		uihistory.SetFindData(data)
	},

// 關閉自動下注
	SetCloseAutoSpin(){
		this.SetBtnStartEnabled(true)
		this.SetBtnManualEnabled(false)
		uiautoSpin.SetManual()
	},

// 斷線重連回復場景
	SetUserRecover(){
	
	},

	SetPickBonusRet(data){
		uibonusGame.SetPickBonusRet(data)
	},

	SetLightningPrepare(data){	
		//console.log("[LightningPrepare] LightningStep",data.LightningStep)
		//console.log("[LightningPrepare] ReelSetting",data.ReelSetting)
		//console.log("[LightningPrepare] LockSymbols",data.LockSymbols)
		//console.log("[LightningPrepare] Count",data.Count)
		//console.log("[LightningPrepare] IsFreeGame",data.IsFreeGame)
		//console.log("[LightningPrepare] ReelResult",data.ReelResult)
		//console.log("[LightningPrepare] PastPayGroups",data.PastPayGroups)
		//console.log("[LightningPrepare] BetMoney",data.BetMoney)
		//console.log("[LightningPrepare] BetRate",data.BetRate)
		
		this.SetBet(data.BetMoney, data.BetRate)
		
		this.InspectLightningMode()
	},

	SetLightningResult(receiveMsg){
	
		//console.log("[LightningResult] BetMoney",receiveMsg.BetMoney)
		//console.log("[LightningResult] WinMoney",receiveMsg.WinMoney)
		//console.log("[LightningResult] FinalMoney",receiveMsg.FinalMoney)
		//console.log("[LightningResult] JackpotMoney",receiveMsg.JackpotMoney)
		//console.log("[LightningResult] ReelResult",receiveMsg.ReelResult)
		//console.log("[LightningResult] PayGroups",receiveMsg.PayGroups)
		//console.log("[LightningResult] FreeGameWinMoney",receiveMsg.FreeGameWinMoney)
		//console.log("[LightningResult] LightningStep",receiveMsg.LightningStep)
		//console.log("[LightningResult] Count",receiveMsg.Count)
		let self = this
	// 停輪 callbackStop
		let stopFunc = function(){
			
		}
	// 完成 callbackComplete
		let completeFunc = function(){
			self.ShowResultProcess(receiveMsg)
		}
	// 設定遊戲結算
		uislot.SetGameResult(receiveMsg, stopFunc, completeFunc)
		uilightning.SetGameResult()
	},

	SetBonusGame(data){
		console.log("SetBonusGame",data)
	},

	SetBet(betMoney, betRate){
	// 設定倍率
		uichip.SetCurrentBetCount(betMoney)
	// 
		uigoldsymbol.SetChooseIndex(betRate)
		
		this.RefreshChipButton()
	},

// 重新整理選擇的下注金額
	RefreshChipButton(){
		let index = uichip.GetCurrentIndex()
		
		this.btnChipUp.interactable = (gameData.BetMoneys.length -1 > index)
		this.btnChipDown.interactable = (index > 0)	
		
		gameData.SetChipMoney(uichip.GetCurrentBetCount())
		
	// this.txtChip.string = GameG.FormatNum(gameData.GetBetMoney())
	// this.txtTotalBet.string = GameG.FormatNum(gameData.GetTotalBetMoney())
		
	// jackpotPool
	// if(uijackpotPool ~= nil)then
		// uijackpotPool.RefreshData()
	// end
		
		this.RefreshGoldSymbolCredits()
	},

// 重新整理選擇的黃金符號
	RefreshGoldSymbolCredits(){
		
		let coin = uichip.GetCurrentBetCount()
		this.txtChip.string = "x" + GameG.FormatNum(coin)
		
		let credits = gameData.GetBetRate()
		let total = coin * credits
		this.txtTotalBet.string = GameG.FormatNum(total)
		
		let stepIndex = uigoldsymbol.GetChooseStep()
		gameData.SetGoldenSymbolStep(stepIndex)
		gameData.SetGoldenSymbolCredits(credits)
		
		gameData.SetChipMoney(uichip.GetCurrentBetCount())
		uijackpotPool.RefreshData()
		
		if(uifreeSpin.InState() == true){
		// console.log("FreeGame 不更新")
			return
		}
		if(uilightning.InState() == true){
		// console.log("Lightning 不更新")
			return
		}
	// console.log("重新整理MainReelSetting")
	// 重新整理MainReelSetting
		this.RefreshGameReelSetting(false)
	},

// 重新整理MainReelSetting
	RefreshGameReelSetting(isUpdateBoard){	
	// console.log("RefreshGameReelSetting : ", isUpdateBoard)
		let stepIndex = uigoldsymbol.GetChooseStep() -1
		let gameReelSetting = gameData.GameReelSetting[stepIndex]
		uislot.SetReelSetting(gameReelSetting.ReelSetting, isUpdateBoard)
	},

////////////////////////////////////////////////////////////////////////////////
// CompleteReelResult > 結算流程 > ShowFreeSpinEnd
	ShowResultProcess(receiveMsg){
		
		//console.log("AAA ShowResultProcess")	
		let self = this
	// 在Lightning - [注意] receiveMsg為JJBX_MSG_LightningResult
		if(uilightning.InState()){
		// 
			uilightning.SpinEnd(receiveMsg, function(){		
			// ShowNextGame(receiveMsg)
			// 不要播輪播獎
				mIsShowWin = false
				self.SetNormalUIActive(true)
				uigoldsymbol.SetActive(true)
				uigoldsymbol.SetTouchEnable(true)
				uibonusEnter.SetActive(true)
				self.SetBg("Normal")
				self.RefreshGameReelSetting(true)
				self.ShowNextGame(receiveMsg)
			})
			return
		}
		
		let func = function(){
		// 表演蝙蝠
			if(uibonusEnter.ShowBat(receiveMsg, function(){ self.ShowFreeSpinEnd(receiveMsg) })){
				return
			}
		// 在選擇
			if(uichoose.InState()){
				
			} 
			else{
				if(uichoose.Show(mIsSpinHad)){
				// console.log("AAA ShowResultProcess Show")
				// 進入選擇
					uibonusEnter.BowlHide()
					return
				}
			}
			self.ShowFreeSpinEnd(receiveMsg)
		}
		
		if(uifreeSpin.InState()){
			func()
			return
		}
		if(uilightning.InState()){
			func()
			return
		}
		if(receiveMsg.JackpotMoney > 0){
			uiJackpot.Show(receiveMsg, func)
			return
		}
		func()
	},

	SetLeftFreeGameData(data){
		//console.log("AAA SetLeftFreeGameData : ", data)
		
	// 設定Free單次金額
		gameData.SetFreeEachCountMoney(data.FreeGameExtAward.EachCountMoney)
	// 設定金幣
		uifreeSpin.SetGoldMoney(data.FreeGameExtAward.EachCountMoney)
	// 需要更新總金幣
		if(uifreeSpin.IsUpdateGoldTotalMoney()){
		// 設定總金幣
			uifreeSpin.SetGoldTotalMoney(data.FreeGameExtAward.TotalWinMoney)
		}
		
	// FreeGame中
		if(uifreeSpin.InState()){
			uifreeSpin.SetFreeCount(data.Count)
		} 
		else{
			gameData.FreeGame = data
			
		// 設定FreeGame排列帶
			this.UpdateFreeReelSetting()
			uigoldsymbol.SetChooseIndex(gameData.FreeGame.BetRate)
			this.RefreshChipButton()
			this.RefreshGoldSymbolCredits()
			uichoose.Door.Open()
			this.SetBg("FreeSpin")
			this.ShowNextGame(null)
		}
	},

// 更新Free排列帶
	UpdateFreeReelSetting(){
			
		let freeReelSetting = null
		
		for(let i in (gameData.FreeGameInfo)){ 
			let j = gameData.FreeGameInfo[i] 

			if(j.ID == gameData.FreeGame.ID){
				freeReelSetting = j.ReelSetting
				break
			}
		}
		
	// 有找到ID
		if(freeReelSetting != null){
			
			//console.log("更換 freeReelSetting")
		// 設定FreeGame排列帶
			uislot.SetReelSetting(freeReelSetting, true)
		} 
		else{
			//console.log("!!!!!!!!!!!!!! 沒有找到 FreeReelSetting", gameData.FreeGame.ID)
		}
	},

// FreeGame表演BigWin
	FreeShowBigWin(totalWinMoney, completeFunc){
		
		let count = 0
		
		let Complete = function(){
			count = count + 1
			if(count >= 2){
				if(completeFunc != null){
					completeFunc()
				}
			}
		}
		uiuser.AnimWinMoney(totalWinMoney,Complete)
		uibigWin.Show(totalWinMoney,Complete)
	},

// FreeGame表演BigWin
	SetUserWinMoney(winMoney){	
		uiuser.SetWinMoney(winMoney)
	},

// 檢查Lightning模式
	InspectLightningMode(){
		
		//console.log("AAA InspectLightningMode : ", mIsSpinHad)
			
		let data = gameData.LightningPrepare	
			
		if(data == null){	
			console.log("AAA 沒有 Lightning 資料")
			return
		}
			
		if(uilightning.InState()){
			
		} 
		else{
			uishowsymbol.Hide()
			uislot.SetReelSetting(data.ReelSetting)
			uislot.StartLightning(data.ReelResult)
		// SetInteractable(false)
			this.SetNormalUIActive(false)
			uigoldsymbol.SetActive(false)
			uibonusEnter.SetActive(false)
		// uipayLine.Hide()
			this.SetCloseAutoSpin()
			uilightning.Show()
			this.SetBg("Lightning")
			
		// 有玩過才開門
			if(mIsSpinHad){
				uichoose.Door.Open()
				return
			}
		// 在選擇畫面
			if(uichoose.InState()){
				uichoose.Door.Open()
				return
			}
		}
	},


};

module.exports = GameLayer
