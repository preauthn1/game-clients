var G = require("Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var gameConfig=require("GameConfig")
var gameModel= require("GameModel")
var uislot = require("UISlot")
// local uijackpotPool = G.RequireG("UIJackpotPool")
var uibonusEnter = require("UIBonusEnter")
// local uibonusGame = G.RequireG("UIBonusGame")
// local uiJackpot = G.RequireG("UIJackpot")
var uibigWin = require("UIBigWin")
var uifreeSpin = require("UIFreeSpin")
var uiautoSpin = require("UIAutoSpin")
var uichip = require("UIChip")
var uimessage = require("UIMessage")
var uipayTable = require("UIPayTable")
var uipayLine = require("UIPayLine")
var uiuser = require("UIUser")
// local uigoldSymbol = G.RequireG("UIGoldSymbol")
var uisetting = require("UISetting")
var uihistory = require("UIHistory")
var uisymbolDetail = require("UISymbolDetail")
var mResultShowEnd = true //結算表演結束
var CheckJailbreakSpin = false //檢測流程越獄
var rootCloud = []
// bouns game 選擇結果
// function SetBounsPickResult(data)
	// uibonusGame.SelectCandyComplete(data)
// end

/** 用途: 控制遊戲流程與介面 */
var GameLayer = {
	extends: cc.Component,
	/** 初始化 */
	Init(){
		let self = this
	    let canvas = cc.find("Canvas")
	    let root = cc.find("GameLayer",canvas)
		
		this.rootNormalBg = cc.find("NormalBg",root)
		this.rootNormalBg.active =(true)
		
	// for i=1, 9 do
		// rootCloud[i] = root.transform:Find("NormalBg/RawImageCloud"..i):GetComponent("RectTransform")
	// end
		
	// spineRole = root.transform:Find("NormalBg/SpineRole"):GetComponent("SkeletonGraphic")
		
	// 狀態
		this.txtState = cc.find("TextState",root).getComponent(cc.Label)
		
		uimessage.Init(cc.find("UIMessage",root))
		uipayTable.Init(cc.find("UIPayTable",root))	
	    this.btn_payTable = cc.find("ButtonPayTable",root).getComponent(cc.Button)
	    this.btn_payTable.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			uipayTable.Show()
	    })
			
		uislot.Init(cc.find("UISlot",root),cc.find("Result",root))
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
    // 賠付線數量
		this.txtPayLineCount = cc.find("ImagePayLineCount/Text",root).getComponent(cc.Label)
	// 籌碼
		uichip.Init(cc.find("UIChip",root))
		uichip.SetClickCallback(function(){
			self.RefreshChipButton()
		})
		uichip.Hide()
		
        let Referrer = gameConfig.getReferrer()
		this.btn_exit = cc.find("ButtonExit",root).getComponent(cc.Button)
	    this.btn_exit.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			uisetting.ClickExit()
		})

        if (Referrer == "0")
            this.btn_exit.node.active = false
        else
            this.btn_exit.node.active = true

	// 切換下注金額
		this.txtChip = cc.find("ButtonChip/Text",root).getComponent(cc.Label)
	    this.btnChip = cc.find("ButtonChip",root).getComponent(cc.Button)
	    this.btnChip.node.on('click',function(){
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
	    this.btnStart = cc.find("ButtonStart",root).getComponent(cc.Button)
	    this.btnStart.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			self.StartSpin()
		})
	//自動按鈕
		this.txtManual = cc.find("ButtonManual/Text",root).getComponent("TextControl")
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
		this.btnSpeedUp = cc.find("ButtonSpeedUp",root).getComponent(cc.Button)
		this.btnSpeedUp.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			self.ChangeTimeScale(2)
		})
		this.btnSpeedUp.node.active =(false)
	//減速按鈕
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
		
		uibonusEnter.Init(cc.find("UIBonusEnter",root))
	// uibonusGame.Init(root.transform:Find("UIBonusGame"))
	// uiJackpot.Init(root.transform:Find("UIJackpot"))
	// uijackpotPool.Init(root.transform:Find("UIJackpotPool"))
		uibigWin.Init(cc.find("UIBigWin",root))
		uifreeSpin.Init(cc.find("UIFreeSpin",root),cc.find("Result",root))
			
		uisetting.Init(cc.find("UISetting",root))
		uiautoSpin.Init(cc.find("UIAutoSpin",root))	
		uihistory.Init(cc.find("UIHistory",root))
		uisymbolDetail.Init(cc.find("UISymbolDetail",root))
		uipayLine.Init(cc.find("UIPayLine",root))
		
		mResultShowEnd = true
		
	// Logo表演
		this.logoSpine = cc.find("NormalBg/LogoSpine",root).getComponent(sp.Skeleton)
		this.logoSpine.setAnimation(0, "start", false)
		GameG.NewDelay(function(){
			self.logoSpine.setAnimation(0, "start", false)
		}, 30)
	},

	Update(dt){
		uisetting.Update(dt)
		uislot.Update(dt)
		uiuser.Update(dt)
		uibigWin.Update(dt)
		uipayLine.Update(dt)
		uisetting.Update(dt)
		uislot.Update(dt)
	},

// 設定目前狀態
	ShowStateContent(content){
		this.txtState.string = content
	},

//離開遊戲
	onExit(){
		uislot.onExit()
		uiuser.onExit()
		uichip.onExit()
		uipayLine.onExit()
		uipayTable.onExit()
	// uijackpotPool.onExit()
		uihistory.onExit()
		uisymbolDetail.onExit()
		uibigWin.onExit()
		// this.ChangeTimeScale(1)
	},

// 回合開始
	GameStart(){
		console.log("GameStart",gameData.State,mResultShowEnd,gameData.FreeSpinCount,gameData.ResultDetail)
		if(gameData.State != 0){
			return
		}
		if(mResultShowEnd == false){
			return
		}
		this.ShowStateContent("start")
		
		let self = this
		gameData.SetGameStart()
		this.SetInteractable(gameData.State == 0 && gameData.FreeSpinCount == 0 && gameData.ResultDetail == null)
		this.SetBtnStartEnabled(uiautoSpin.GetIsAutoMode() == false)
		this.SetBtnManualEnabled(uiautoSpin.GetIsAutoMode() == true)
		this.SetBtnStopEnabled(false)
		uiuser.SetGameStart()
	// uijackpotPool.SetGameStart()
		uibigWin.SetGameStart()
		uiautoSpin.SetGameStart()
		uihistory.SetGameStart()
		uisymbolDetail.SetGameStart()
		uipayLine.SetGameStart()
			
		if(uiautoSpin.GetCurrentCount() > 0){
			this.txtManual.string = uiautoSpin.GetCurrentCount() -1
		} 
		else{
			this.txtManual.string = "∞"
		}
		
		// respin
		if(gameData.ResultDetail != null){
			this.StartSpin(false)
			this.SetBetRet(gameData.GetBetResult())
			this.SetGameResult(gameData.GetGameResult())
		} 
		// bonus game (斷線重連，沒有free spin才會從這裡進去)
		else if(gameData.BonusDetail != null){		
			mResultShowEnd = false
			this.ShowBonusGame()
		} 
		// free spin
		else if(gameData.FreeSpinCount > 0){		

			uifreeSpin.Show(gameData.FreeSpinCount,
			function(){ 	//close door callback
				self.rootNormalBg.active =(gameData.FreeSpinCount == 0)
				uiuser.ResetWinMoney(true)
				if(gameData.FreeReelSetting != null){
					uislot.SetReelSetting(gameData.FreeReelSetting)
				}
			},
			function(){  // open door callback
			// bonus game (斷線重連)
				if(gameData.BonusDetail != null){
					mResultShowEnd = false
					self.ShowBonusGame()
				} 
				else{
					self.StartSpin() 
				}
			})
		} 
		// 自動旋轉
		else if(uiautoSpin.GetIsAutoMode() == true) {
			this.SetInteractable(false)
			this.StartSpin()
		}	
	},

// 回合結束
	GameEnd(){
		gameData.SetGameEnd()
		uiuser.SetGameEnd()
	// uijackpotPool.SetGameEnd()
		uibigWin.SetGameEnd()
		uiautoSpin.SetGameEnd()
		uihistory.SetGameEnd();
		uisymbolDetail.SetGameEnd()
		uipayLine.SetGameEnd()
	},

// 開始轉動
	StartSpin(sendPacket){
		if(mResultShowEnd == false){
			return
		}
	// 檢測流程越獄
		if(CheckJailbreakSpin == true){
			console.error("========== 流程越獄 => 請確認流程")
		}
		CheckJailbreakSpin = true
		
	// CS.AppDefine.StartLog()
		mResultShowEnd = false
	// spineRole.AnimationState:SetAnimation(0, "ginger_01_idle", true);
		this.rootNormalBg.active =(gameData.FreeSpinCount == 0)
		uiuser.ResetWinMoney(uifreeSpin.InState() == false)
		uiautoSpin.StartSpin()
		if(sendPacket != false){
			gameModel.SendGameStart(uichip.GetCurrentBetCount())
		}	
	},

// 停止轉動
	StopSpin(){	
		uislot.SetStopSpin(0.01)
		uiautoSpin.StopSpin()
		
		this.btnStop.interactable = false
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
	},

//初始設定資料
	SetSetting(receiveMsg){
		uislot.SetReelSetting(receiveMsg.ReelSetting)
		
		uipayLine.SetTotal(receiveMsg.TotalPayLine)
		uipayLine.SetLayoutWorldPos(uislot.GetSymbolListWorldPos())
		this.txtPayLineCount.string = receiveMsg.TotalPayLine + "线"
		
		uichip.SetData(receiveMsg.BetMoneys)	
		this.RefreshChipButton()

		uiautoSpin.SetOptionList(gameData.AutoSpinOption)
		uiuser.SetCarryMoney(gameData.User.Score)	
	},

//下注結果S2C
	SetBetRet(receiveMsg){
		if(receiveMsg.Ret == 0){
			this.ShowStateContent("spin")
			uipayLine.SetStartSpin()
			uislot.SetStartSpin()
			this.SetInteractable(false)
			gameData.User.Score = gameData.User.Score - receiveMsg.Money
			uiuser.SetCarryMoney(gameData.User.Score)
		} 
		else{
			mResultShowEnd = true
			this.SetCloseAutoSpin()
			this.GameStart()
		}
	},

//遊戲結果S2C
	SetGameResult(receiveMsg){
		let self = this
	//G.Service.Game.SendUserActionCommit("result")
		this.SetBtnStopEnabled(uiautoSpin.GetIsAutoMode() == false && uifreeSpin.InState() == false)
		
		gameData.User.Score = receiveMsg.FinalMoney - receiveMsg.WinMoney
	    uiuser.SetCarryMoney(gameData.User.Score)
		
		uislot.SetGameResult(receiveMsg,
		function(){ //callbackStop
			self.SetBtnStopEnabled(false)
		},
		function(){ // callbackComplete	
			self.ShowStateContent("stop")
			
			uipayLine.SetGameResult(receiveMsg.PayGroups)
		// if(receiveMsg.WinMoney > 0)then
			// spineRole.AnimationState:SetAnimation(0, "ginger_01_win", true);
		// end
			
		// 表演特效
			uislot.ShowSymbloEffect(receiveMsg, function(){
			// uipayLine.Show()
				self.ShowNormalBigWin(receiveMsg)
			})
		})
	},

// 表演 big win
	ShowNormalBigWin(receiveMsg){
		let self = this
	// uipayLine.Show(receiveMsg.WinMoney)
		
		uiuser.AnimWinMoney(receiveMsg.WinMoney,function(){
			self.CompleteReelResult(receiveMsg)
		})
		
		uibigWin.Show(receiveMsg.WinMoney,function(){
			self.CompleteReelResult(receiveMsg)
		})
	},

// 表演完金額與中獎符號
	CompleteReelResult(receiveMsg,carousel){
	// 金額還沒表演完畢
		if(uibigWin.GetInState() == true){
			return
		}
	// 獲得金幣還沒表演完畢
		if(uiuser.CheckShowWinMoney() == true){
			return
		}	
		this.ShowCloseExpand(receiveMsg)
	},

// 表演關閉神燈
	ShowCloseExpand(receiveMsg){
		let self = this
		uipayLine.Hide()
		if(gameData.ResultDetail == null){
			uislot.CloseExpand(function(){
				self.ShowBonusGameBigWin(receiveMsg)
			})
		} 
		else{
			this.ShowBonusGameBigWin(receiveMsg)
		}
	},

// 表演 big win
	ShowBonusGameBigWin(receiveMsg){
		let self = this
		this.ShowWinCarousel(receiveMsg)
		
		uibigWin.Show(gameData.BonusMoney,function(){
			self.ShowFreeSpinEnd(receiveMsg)	
		})
	},

//free spin 結束
	ShowFreeSpinEnd(receiveMsg){
		let self = this
		if(uifreeSpin.InState() == true && gameData.FreeSpinCount == 0){
			uifreeSpin.Hide(receiveMsg.FreeGameWinMoney,		
			function(){ 	//close door callback
				self.rootNormalBg.active =(true)
				uislot.SetReelSetting(gameData.ReelSetting)
			},
			function(){ // open door callback
				self.ShowNextGame(receiveMsg)
			})
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
		uislot.ShowGameResultCarousel(receiveMsg,function(money, payLineID, linkType){
			uipayLine.Show(money, payLineID, linkType)
		})
	},

//下局回合開始
	ShowNextGame(receiveMsg){
	// CS.AppDefine.StopLog()
		if(receiveMsg != null){
			gameData.User.Score = receiveMsg.FinalMoney
			uiuser.SetCarryMoney(gameData.User.Score)
		}
		gameData.BonusMoney = 0
		mResultShowEnd = true
		CheckJailbreakSpin = false
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
		this.btnStop.interactable = true
	},

//加速按鈕
	SetBtnSpeedUpEnabled(enabled){
		this.btnSpeedUp.node.active =(enabled)
	},

//減速按鈕
	SetBtnSlowDownEnabled(enabled){
		this.btnSlowDown.node.active =(enabled)
	},

// 設定按鈕的開關
	SetInteractable(enabled){
	// uigoldSymbol.SetInteractable(enabled)
		this.btnStart.interactable = enabled
		this.btnChipUp.interactable = enabled
		this.btnChipDown.interactable = enabled
		this.btn_payTable.interactable = enabled
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
	// uijackpotPool.SetData(data)
	},

// 設定指定押注額
	SetCurrentChip(num){
		uichip.SetCurrentBetMoney(num)
	},

// 設定目前指定黃金符號
	SetCurrentGoldSymbol(num){
	// uigoldSymbol.SetCurrentCredits(num)
	},

// 設定黃金符號資料
	SetGoldSymbol(data){
	// uigoldSymbol.SetData(data.GoldenDetail)
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
		console.log("RecoverReelResult",gameData.RecoverReelResult)
		uislot.SetReelResult(gameData.RecoverReelResult)
	},

// 重新整理選擇的下注金額
	RefreshChipButton(){
		let index = uichip.GetCurrentIndex()
		this.btnChipUp.interactable = (gameData.BetMoneys.length > index)
		this.btnChipDown.interactable = (index > 1)	
		
		gameData.SetChipMoney(uichip.GetCurrentBetCount())
		let coin = uichip.GetCurrentBetCount()
		if(gameData.PayLineMode == 0){
			coin = coin * gameData.TotalPayLine
		}		
		this.txtChip.string = GameG.FormatUnit(coin)
		this.txtTotalBet.string = GameG.FormatUnit(coin)
	
	// uijackpotPool.RefreshData()	
	},


};

module.exports = GameLayer
