var G = require("Global")
var gameData = require("GameData")
var GameG = require("GameGlobal")
var gameConfig=require("GameConfig")
var gameModel= require("GameModel")
var uislot = require("UISlot")
var uijackpotPool = require("UIJackpotPool")
var uibonusEnter = require("UIBonusEnter")
var uibonusGame = require("UIBonusGame")
var uiJackpot = require("UIJackpot")
var uibigWin = require("UIBigWin")
var uifreeSpin = require("UIFreeSpin")
var uiautoSpin = require("UIAutoSpin")
var uichip = require("UIChip")
var uimessage = require("UIMessage")
var uipayTable = require("UIPayTable")
var uipayLine = require("UIPayLine")
var uiuser = require("UIUser")
var uisetting = require("UISetting")
var uihistory = require("UIHistory")
var uisymbolDetail = require("UISymbolDetail")
var mResultShowEnd = true //結算表演結束
var rootCloud = []

/** 用途: 控制遊戲流程與介面 */
var GameLayer = {
	extends: cc.Component,

	Init(){
		let self = this
	    let canvas = cc.find("Canvas")
	    this.rootRect = cc.find("GameLayer",canvas)
		let root = this.rootRect
		
		this.rootNormalBg = cc.find("NormalBg",root)
		this.rootNormalBg.active =(true)
		
		for(let  i = 1;  i <=  9; ++ i){
			rootCloud[i] = cc.find("NormalBg/RawImageCloud"+i,root)
		}
		
		this.spineRole = cc.find("NormalBg/SpineRole",root).getComponent(sp.Skeleton)
		
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
        this.btnExit = cc.find("ButtonExit", root).getComponent(cc.Button)
		this.btn_exit = cc.find("ButtonExit",root).getComponent(cc.Button)
	    this.btn_exit.node.on('click',function(){
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
		this.btnSpeedUp.active =(false)
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
		uibonusGame.Init(cc.find("UIBonusGame",root))
		uiJackpot.Init(cc.find("UIJackpot",root))
		uijackpotPool.Init(cc.find("UIJackpotPool",root))
		uibigWin.Init(cc.find("UIBigWin",root))
		uifreeSpin.Init(cc.find("UIFreeSpin",root),cc.find("Result",root))
		
		uisetting.Init(cc.find("UISetting",root))
		uiautoSpin.Init(cc.find("UIAutoSpin",root))	
		uihistory.Init(cc.find("UIHistory",root))
		uisymbolDetail.Init(cc.find("UISymbolDetail",root))
		uipayLine.Init(cc.find("UIPayLine",root))
		
		mResultShowEnd = true
	},

// 初始化Camera
	InitCamera(){
		let _RectTransform = cc.find("Canvas")		
		let _RectScale =  Math.floor(_RectTransform.scale.x * 1000)
		_RectScale = _RectScale * 0.001
		let UISize = 1.218
		let _Scale = 0
	// _RectScale值過大
		if(_RectScale > UISize){
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

	Start(){
		this.InitCamera()
	},

	Update(dt){
		this.ShowAnimBackground(dt)
		uisetting.Update(dt)
        uislot.Update(dt)
		uiJackpot.Update(dt)
		uijackpotPool.Update(dt)
		uibonusEnter.Update(dt)
		uibigWin.Update(dt)
		uipayLine.Update(dt)
		uiuser.Update(dt)
	},

	/** 設定目前狀態，給QA測試用 */
	ShowStateContent(content){
		this.txtState.string = content
	},

	/** 遊戲離開(斷線重連) */
	onExit(){
		uislot.onExit()
		uiuser.onExit()
		uichip.onExit()
		uipayLine.onExit()
		uipayTable.onExit()
		uijackpotPool.onExit()
		uihistory.onExit()
		uisymbolDetail.onExit()
		uibigWin.onExit()
		// this.ChangeTimeScale(1)		
	},

// 回合開始
	GameStart(){
		console.log("GameStart",gameData.State,mResultShowEnd,gameData.FreeSpinCount)
		if(gameData.State != 0){
			return
		}
		if(mResultShowEnd == false){
			return
		}
		this.ShowStateContent("start")
		
		gameData.SetGameStart()
		this.SetInteractable(gameData.State == 0 && gameData.FreeSpinCount == 0)	
		this.SetBtnStartEnabled(uiautoSpin.GetIsAutoMode() == false)
		this.SetBtnManualEnabled(uiautoSpin.GetIsAutoMode() == true)
		this.SetBtnStopEnabled(false)
		uiuser.SetGameStart()
		uijackpotPool.SetGameStart()
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
		
		// bonus game (斷線重連，沒有free spin才會從這裡進去)
		if(gameData.BonusDetail != null){		
			mResultShowEnd = false
			this.ShowBonusGame()
		} 
		// free spin
		else if(gameData.FreeSpinCount > 0){		

			uifreeSpin.Show(gameData.FreeSpinCount,
			function(){ 	//close door callback
				this.rootNormalBg.active =(gameData.FreeSpinCount == 0)
				uiuser.ResetWinMoney(true)
				if(gameData.FreeReelSetting != null){
					uislot.SetReelSetting(gameData.FreeReelSetting)
				}
			},
			function(){  // open door callback
			// bonus game (斷線重連)
				if(gameData.BonusDetail != null){
					mResultShowEnd = false
					this.ShowBonusGame()
				} 
				else{
					this.StartSpin() 
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
		uijackpotPool.SetGameEnd()
		uibigWin.SetGameEnd()
		uiautoSpin.SetGameEnd()
		uihistory.SetGameEnd();
		uisymbolDetail.SetGameEnd()
		uipayLine.SetGameEnd()
	},

// 開始轉動
	StartSpin(){
	// CS.AppDefine.StartLog()
		mResultShowEnd = false
		this.spineRole.setAnimation(0, "ginger_01_idle", true);
		this.rootNormalBg.active =(gameData.FreeSpinCount == 0)
		gameModel.SendGameStart(uichip.GetCurrentBetCount());
		uiuser.ResetWinMoney(uifreeSpin.InState() == false)
		uiautoSpin.StartSpin()
	},

// 停止轉動
	StopSpin(){	
		if(this.btnStop.node.active == false){
			return
		}

		uislot.SetStopSpin(0.01)
		uiautoSpin.StopSpin()
		
		this.SetBtnStopEnabled(false)
	},

	/** 顯示訊息 */
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
		console.log("ReelSetting",receiveMsg.ReelSetting)
		uislot.SetReelSetting(receiveMsg.ReelSetting)
		
		console.log("TotalPayLine",receiveMsg.TotalPayLine)
		uipayLine.SetTotal(receiveMsg.TotalPayLine)
		uipayLine.SetLayoutWorldPos(uislot.GetSymbolListWorldPos())
		this.txtPayLineCount.string = receiveMsg.TotalPayLine + GameG.GetLocalizedString("线")
		
		console.log("BetCount",receiveMsg.BetCount)
		uichip.SetData(receiveMsg.BetCount)	
		this.RefreshChipButton()
		
		console.log("BigWinStep",receiveMsg.BigWinStep)	
		console.log("SymbolPayTable",receiveMsg.SymbolPayTable)	
		console.log("PayLines",receiveMsg.PayLines)
		console.log("PayLineDesc",receiveMsg.PayLineDesc)
		console.log("PickGameDesc",receiveMsg.PickGameDesc)
		
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
			console.log("CurrentScore",gameData.User.Score,"Money",receiveMsg.Money)
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
		console.log("BetMoney",receiveMsg.BetMoney)
		console.log("WinMoney",receiveMsg.WinMoney)
		console.log("FinalMoney",receiveMsg.FinalMoney)
		console.log("JackpotMoney",receiveMsg.JackpotMoney)
		console.log("ReelResult",receiveMsg.ReelResult)
		console.log("PayGroups",receiveMsg.PayGroups)
		this.SetBtnStopEnabled(uiautoSpin.GetIsAutoMode() == false && uifreeSpin.InState() == false)
		
		uipayLine.SetGameResult(receiveMsg.PayGroups)
		uislot.SetGameResult(receiveMsg,
		function(){ //callbackStop
			self.SetBtnStopEnabled(false)
			//uipayLine.Show()
		},
		function(){ // callbackComplete	
			self.ShowStateContent("stop")
			
			gameData.User.Score = gameData.User.Score + receiveMsg.WinMoney
			uiuser.SetCarryMoney(gameData.User.Score)
			
			if(receiveMsg.WinMoney > 0){
				self.spineRole.setAnimation(0, "ginger_01_win", true);
			}
			
			self.ShowNormalBigWin(receiveMsg)	
		})
	},

// 表演 big win
	ShowNormalBigWin(receiveMsg){
		let self = this
		uipayLine.Show(receiveMsg.WinMoney)
			
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
		
		this.ShowJackpot(receiveMsg)
	},

// 表演 jackpot
	ShowJackpot(receiveMsg){
		let self = this
		if(receiveMsg.JackpotMoney > 0){
			uipayLine.Hide()
			uislot.ShowGameResultJackpot(receiveMsg,function(money, payLineID){
				uipayLine.Show(money, payLineID)
			})	
			
			GameG.PlayGameSound("se_wild_hit")
			
			GameG.NewDelayOnce(function(){
				gameData.User.Score = gameData.User.Score + receiveMsg.JackpotMoney
				uiuser.SetCarryMoney(gameData.User.Score)	
				uiuser.AnimWinMoney(receiveMsg.JackpotMoney)
				// 更新獎池金額
				gameModel.SendReadJackpotPoolID()
				
				uiJackpot.Show(receiveMsg.JackpotMoney,function(){		
					self.ShowBonusEnter(receiveMsg)
				})
			}, 1.5)
		} 
		else{
			this.ShowBonusEnter(receiveMsg)
		}
	},

// 表現進入bonus
	ShowBonusEnter(receiveMsg){
		let self = this
		if(gameData.BonusDetail != null){
			uipayLine.Hide()
			uislot.ShowGameResultBonusGame(receiveMsg)	
			
			GameG.PlayGameSound("se_bonus_hit")
			
			GameG.NewDelayOnce(function(){
				uibonusEnter.Show(function(showTimer){
					self.ShowBonusGame(receiveMsg, showTimer)
				})
			}, 1.5)	
		} 
		else{
			this.ShowBonusGame(receiveMsg)
		}
	},

//表演 bouns game
	ShowBonusGame(receiveMsg, delayCountdown){
		let self = this
		if(gameData.BonusDetail != null){
			let tempTimeScale = GameG.GetTimeScale()
			this.ChangeTimeScale(1)
		// local initPosition = uibonusEnter.GetRewardPosition()
			uibonusGame.Show(null , delayCountdown,function(){			
				gameData.User.Score = gameData.User.Score + gameData.BonusMoney
				console.log("CurrentScore",gameData.User.Score,"BonusMoney",gameData.BonusMoney)
				uiuser.SetCarryMoney(gameData.User.Score)		
				uiuser.AnimWinMoney(gameData.BonusMoney)
				
				self.ShowBonusGameBigWin(receiveMsg)
				
				self.ChangeTimeScale(tempTimeScale)
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
		if(uifreeSpin.InState() == true && gameData.FreeSpinCount == 0){
			uifreeSpin.Hide(receiveMsg.FreeGameWinMoney,		
			function(){ 	//close door callback
				this.rootNormalBg.active =(true)
				uislot.SetReelSetting(gameData.ReelSetting)
			},
			function(){ // open door callback
				this.ShowNextGame(receiveMsg)
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
		uislot.ShowGameResultCarousel(receiveMsg,function(money, payLineID){
			uipayLine.Show(money, payLineID)
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

// 設定按鈕的開關
	SetInteractable(enabled){
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
		uijackpotPool.SetData(data)
	},

// 設定指定押注額
	SetCurrentChip(num){
		uichip.SetCurrentBetMoney(num)
	},

// 設定歷史紀錄
	SetHistoryFindData(data){
		uihistory.SetFindData(data)
	},

// bouns game 選擇結果
	SetBounsPickResult(data){
		uibonusGame.SelectCandyComplete(data)
	},

// 關閉自動下注
	SetCloseAutoSpin(){
		this.SetBtnStartEnabled(true)
		this.SetBtnManualEnabled(false)
		uiautoSpin.SetManual()
	},

// 斷線重連回復場景
	SetUserRecover(){
	// 計算當前Bet
		let totalRewareValue = 0
		for(let i in gameData.BonusDetail){
			let detail = gameData.BonusDetail[i]
		// 計算總分
			totalRewareValue = totalRewareValue + detail.RewareValue
		}
	// 倍率
		let bet = gameData.BonusMoney / totalRewareValue
	// 設定倍率
		uichip.SetCurrentBetCount(bet)
		this.RefreshChipButton()
	},

// 重新整理選擇的下注金額
	RefreshChipButton(){
		let index = uichip.GetCurrentIndex()
		this.btnChipUp.interactable = (gameData.BetCount.length > index)
		this.btnChipDown.interactable = (index > 1)	
		
		gameData.SetChipMoney(uichip.GetCurrentBetCount())
		let coin = uichip.GetCurrentBetCount()
		if(gameData.PayLineMode == 0){
			coin = coin * gameData.TotalPayLine
		}
		this.txtChip.string = GameG.FormatUnit(coin)
		
		this.txtTotalBet.string = GameG.FormatUnit(coin)
		
		uijackpotPool.RefreshData()
	},

// 背景動畫
	ShowAnimBackground(dt){
		for(let  index in rootCloud){
			let y = rootCloud[index].position.y
			let speed = (Math.random() * (30-10) + 10) * dt
			speed = speed + rootCloud[index].position.x
			rootCloud[index].position = cc.v3(speed, y, 0)	

			if(rootCloud[index].position.x > 1500){
				y = rootCloud[index].position.y
				rootCloud[index].position = cc.v3(-1500,y,0)
			}
		}	
	},


};

module.exports = GameLayer
