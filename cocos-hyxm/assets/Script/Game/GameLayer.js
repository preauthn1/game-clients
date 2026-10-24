let GameG = require("GameGlobal")
let gameData = require("GameData")
let gameModel = require("GameModel")
let uislot = require("UISlot")
let uichip = require("UIChip")
let uiuser = require("UIUser")
let uisymbolDetail = require("UISymbolDetail")
let uibigWin = require("UIBigWin")
let uimessage = require("UIMessage")
let uiautoSpin = require("UIAutoSpin")
let uiselectMode = require("UISelectMode")
let uimainGame = require("UIMainGame")
let uifreeSpin = require("UIFreeSpin")
let uilightning = require("UILightning")
let uipayTable = require("UIPayTable")
let uihistory = require("UIHistory")
let uisetting = require("UISetting")
let uicutscene = require("UICutscene")
let uipayLine = require("UIPayLine")
let uijackpotPool = require("UIJackpotPool")
let uipayInfo = require("UIPayInfo")
let uibonusGame = require("UIBonusGame")
let uijackpotMoney = require("UIJackpotMoney")

/** 結果表演時間 */
let mResultShowTime = false

/** 用途: 控制遊戲流程與介面 */
var GameLayer = {
	extends: cc.Component,

	/** 初始化 */
	Init(){		
		mResultShowTime = false
	    let canvas = cc.find("Canvas")
		let root = cc.find("GameLayer",canvas)
		this.rootRect = root

		let self = this
		this.txtState = cc.find("TextState",root).getComponent(cc.Label)

		uimessage.Init(cc.find("UIMessage",root))
		uimessage.Show("正在分配座位……")

		uislot.Init(cc.find("UISlot",root))
		uislot.SetBtnSymbolCallback(function(symbolName){
			uisymbolDetail.Show(symbolName)
		})
		uislot.SetBtnStopCallback(function(){
			self.StopSpin()
		})

		uiuser.Init(cc.find("UIUser",root))
		uibigWin.Init(cc.find("UIBigWin",root))
		uiselectMode.Init(cc.find("UISelectMode",root))
		uisymbolDetail.Init(cc.find("UISymbolDetail",root))
		uicutscene.Init(cc.find("UICutscene",root))
		uipayLine.Init(cc.find("UIPayLine",root))
		uipayInfo.Init(cc.find("UIPayInfo",root))
		uijackpotPool.Init(cc.find("UIJackpotPool",root))
		uibonusGame.Init(cc.find("UIBonusGame",root))
		uijackpotMoney.Init(cc.find("UIJackpotMoney",root))

		uilightning.Init(cc.find("UILightning",root))
		uilightning.SetBtnStartCallback(function(){
			self.StartSpinLightning()
		})
		uifreeSpin.Init(cc.find("UIFreeSpin",root))
		uimainGame.Init(cc.find("UIMainGame",root))
		uimainGame.SetBtnStartCallback(function(){
			self.StartSpin()
		})
		uimainGame.SetBtnManualCallback(function(){
			uimainGame.SetCloseAutoSpin()
			uiautoSpin.SetManual()
		})
		uimainGame.SetBtnStopCallback(function(){
			self.StopSpin()
		})
		uimainGame.SetBtnAutoCallback(function(){
			uiautoSpin.Show()
			let count = uiautoSpin.GetLeftCount()
			uimainGame.SetAutoSpinLeftCount(count)
			self.GameStart()
		})

		uichip.Init(cc.find("UIChip",root))
		uichip.SetClickCallback(function(){
			uijackpotPool.RefreshData()
		})
		uimainGame.SetBtnChipCallback(function(){
			uichip.Show()
		})
		uimainGame.SetBtnChipDecreaseCallback(function(){
			uichip.ClickIncrease()
		})
		uimainGame.SetBtnChipIncreaseCallback(function(){
			uichip.ClickDecrease()
		})
		uisetting.Init(cc.find("UISetting",root))
		uimainGame.SetBtnSettingCallback(function(){
			uisetting.Show()
		})
		uipayTable.Init(cc.find("UIPayTable",root))
		uimainGame.SetBtnPayTableCallback(function(){
			uipayTable.Show()
		})
		uihistory.Init(cc.find("UIHistory",root))
		uisetting.SetBtnHistoryCallback(function(){
			uihistory.Show()
		})
	},

	Start(){

	},

	Update(dt){
		uislot.Update(dt)
		uiuser.Update(dt)
		uibigWin.Update(dt)
		uifreeSpin.Update(dt)
		uipayLine.Update(dt)
		uijackpotPool.Update(dt)
	},
	/** 遊戲離開(斷線重連) */
	onExit(){
		uichip.onExit()
		uihistory.onExit()
		uijackpotPool.onExit()
		uipayTable.onExit()
		uiselectMode.onExit()
		uislot.onExit()
		uiuser.onExit()
	},
	//////////////////////////////////////////////////////////////////////////////  
	/** 顯示訊息 */
	ShowMessage(msg,time){
		uimessage.ShowTime(msg,time)
	},

	/** 設定目前狀態，給QA測試用 */
	ShowStateContent(content){
		this.txtState.string = content
	},
	/** 設定按鈕狀態 */
	SetInteractable(enabled){
		uimainGame.SetInteractable(enabled)
		uisetting.SetInteractable(enabled)
		uilightning.SetInteractable(enabled)
	},
	
	//////////////////////////////////////////////////////////////////////////////
	/**　遊戲狀態S2C 0.下注状态 1.开奖状态 2.开奖动画 3.结算动画 4.等待游戏开始
	 * @param {XMBX_MSG_Status} receiveMsg 封包: XMBX_StatusID = 20002
	 */
	SetState(receiveMsg){
		this.GameStart()
	},
	/**　初始設定資料 
	 * @param {XMBX_MSG_Setting} receiveMsg 封包: XMBX_SettingID = 20001
	*/
	SetSetting(receiveMsg){
		uimessage.Hide()
		uichip.SetData(receiveMsg.BetMoneys)
		uislot.SetReelSetting(receiveMsg.ReelSetting)
		uilightning.SetReelSetting(receiveMsg.ReelSetting)
		uiselectMode.SetData(receiveMsg.FreeGames)
	},	
	/** 免費再轉特別獎 上局資訊
	 * @param {XMBX_MSG_LightningPrepare} receiveMsg 封包: XMBX_LightningPrepareID = 10001
	 */
	SetLightningPrepare(receiveMsg){
		// 資料皆在進入lightning的時間點做 ShowLightningGame()*/
	},
	/**　玩家資訊
	 * @param {XMBX_GameUser} receiveMsg 封包: UserEnterID = 4
	 */
	SetUserData(receiveMsg){
		// 設置攜帶金額
		let money = receiveMsg.Score
		uiuser.SetCarryMoney(money)
	},
	/** 設定歷史紀錄
	 * @param {XMBX_MSG_GameLogRecord} receiveMsg 封包: XMBX_LoadHistoryRetID = 22002
	 */
	SetHistoryFindData(receiveMsg){
		uihistory.SetFindData(receiveMsg)
	},
	/** 設定遊戲選擇
	 * @param {XMBX_MSG_ChooseGameOptions} receiveMsg 封包: XMBX_GameOptionsID = ?
	 */
	SetGameOptions(receiveMsg){
		uichip.SetCurrentBetCount(receiveMsg.BetMoney)
		uifreeSpin.SetSelectCount(receiveMsg.Times)
	},
	/** 設定剩餘Free Game資料
	 * @param {XMBX_MSG_LeftFreeGameData} receiveMsg 封包: XMBX_LeftFreeGameID = 20005
	 */
	SetLeftFreeGame(receiveMsg){
		uichip.SetCurrentBetCount(receiveMsg.BetMoney)

		this.GameStart()
	},
	/** 設定獎金池
	 * @param {XMBX_MSG_JackpotPool} receiveMsg 封包: XMBX_JackpotPoolRetID = 22004
	 */
	SetJackpotPool(receiveMsg){
		uijackpotPool.SetData(receiveMsg.Jackpots)
	},
	/** 設定獎勵遊戲
	 * @param {XMBX_MSG_BonusGame} receiveMsg 封包: XMBX_BonusGameID = 22005
	 */
	SetBonusGame(receiveMsg){
		uichip.SetCurrentBetCount(receiveMsg.BetMoney)
		gameData.SetBetRate(receiveMsg.BetRate)
	},
	/** 獎勵遊戲選擇結果
	 * @param {XMBX_MSG_BonusGame} receiveMsg 封包: XMBX_BonusGameRetID = 22006
	 */
	SetBonusGameRet(receiveMsg){
		uibonusGame.SetBonusGameRet(receiveMsg.Record)
	},
	////////////////////////////////////////////////////////////////////////////// 
	/** 遊戲開始，每個模式結束後，皆由這統一控制後續流程 */
	GameStart(){
		let self = this
		GameG.LogProcess("[GameLayer] GameStart",gameData.State,mResultShowTime)
		// 有流程還未表演完成
		if(mResultShowTime == true){
			return
		}
		// 遊戲狀態為5，有其他事件
		if(gameData.State == 5){
			// 有獎勵遊戲要進行
			if(gameData.bonusGame != null){
				this.ShowBonusGame()
			}
			// 有免費再轉特別獎要進行
			else if(gameData.lightningPrepare != null){
				this.SetInteractable(true)
				this.ShowLightningGame()
			}
			// 有選擇遊戲要進行
			else if(gameData.gameOptions != null){
				this.ShowSelectGame()
			}
		}
		// 遊戲狀態為0，可進行遊戲
		else if(gameData.State == 0){
			uimainGame.SetBtnManualEnabled(uiautoSpin.GetIsAutoMode())
			uimainGame.SetBtnStartEnabled(true)
			uimainGame.SetBtnStopEnabled(false)
			this.SetInteractable(true)
			// 進入Free Game
			if(gameData.leftFreeGame != null && gameData.leftFreeGame.Count > 0){
				// 過場動畫
				uicutscene.ShowFreeGame(function(){
					// 遊戲類型有切換
					if(gameData.GetGameTypeIndex() != gameData.EnumGameType.FreeGame){
						// 更換獎金池的父物件
						uijackpotPool.SetParentRoot(uifreeSpin.GetRootJackpotPool())
						// 更換盤面的父物件
						uislot.SetParentRoot(uifreeSpin.GetRootSlot())
					}
					// 遊戲模式有切換
					if(gameData.GetGameModeIndex() != gameData.EnumGameType.FreeGame){
						// 設定輪軸資料
						let data = gameData.GetFreeGameDataById(gameData.leftFreeGame.ID)
						uislot.SetSpinReelSetting(data.ReelSetting)
						// 切換遊戲模式
						uislot.SetGameMode(gameData.EnumGameType.FreeGame)
						// 關閉中獎資訊
						uipayInfo.Hide()
					}
					uiselectMode.Hide()
					uimainGame.Hide()
					uilightning.Hide()
					uifreeSpin.Show()

				},function(){
					// 顯示獲得次數
					uifreeSpin.ShowObtain(function(){
						self.SetInteractable(false)
						self.StartSpin()
					})
				})
			}
			// 進入Main Game
			else{
				// 過場動畫
				uicutscene.ShowMainGame(function(){
					// 遊戲類型有切換
					if(gameData.GetGameTypeIndex() != gameData.EnumGameType.MainGame){
						// 更換獎金池的父物件
						uijackpotPool.SetParentRoot(uimainGame.GetRootJackpotPool())
						// 更換盤面的父物件
						uislot.SetParentRoot(uimainGame.GetRootSlot())
					}
					// 遊戲模式有切換
					if(gameData.GetGameModeIndex() != gameData.EnumGameType.MainGame){
						// 設定輪軸資料
						uislot.SetSpinReelSetting(gameData.ReelSetting)
						// 切換遊戲模式
						uislot.SetGameMode(gameData.EnumGameType.MainGame)
						// 關閉中獎資訊
						uipayInfo.Hide()
					}
					uifreeSpin.Hide()
					uilightning.Hide()
					uimainGame.Show()
					// 自動模式
					if(uiautoSpin.GetIsAutoMode() == true){
						uimainGame.SetBtnStartEnabled(false)
						self.SetInteractable(false)
						self.StartSpin()
					}
				})
			}
		}
	},
	////////////////////////////////////////////////////////////////////////////// 
	/** 進入Select Game */
	ShowSelectGame(){
		GameG.LogProcess("[GameLayer] ShowSelectGame")
		// 過場動畫
		uicutscene.ShowSelectGame(function(){
			uiselectMode.Show()	
		})
	},
	////////////////////////////////////////////////////////////////////////////// 
	/** 進入Lightning Game */
	ShowLightningGame(){
		GameG.LogProcess("[GameLayer] ShowLightningGame")
		// 播放切場景熊貓動畫
		uimainGame.ShowCutSceneAnimation()
		// 播放切場景熊貓動畫
		uifreeSpin.ShowCutSceneAnimation()

		let self = this
		// 過場動畫
		uicutscene.ShowLightingGame(function(){
			// 遊戲類型有切換
			if(gameData.GetGameTypeIndex() != gameData.EnumGameType.LightningGame){
				// 更換獎金池的父物件
				uijackpotPool.SetParentRoot(uilightning.GetRootJackpotPool())
				// 更換盤面的父物件
				uislot.SetParentRoot(uilightning.GetRootSlot())
			}
			// 遊戲模式有切換
			if(gameData.GetGameModeIndex() != gameData.EnumGameType.LightningGame){
				// 設定輪軸資料
				uislot.SetSpinReelSetting(gameData.lightningPrepare.ReelSetting)
				// 設置盤面結果
				uislot.SetReelResult(gameData.lightningPrepare.ReelResult)
				// 切換遊戲模式
				uislot.SetGameMode(gameData.EnumGameType.LightningGame)
			}

			uimainGame.Hide()
			uifreeSpin.Hide()
			uilightning.Show()
			// 設置下注金額
			uichip.SetCurrentBetCount(gameData.lightningPrepare.BetMoney)
			// 設置下注倍率
			gameData.SetBetRate(gameData.lightningPrepare.BetRate)
			// 設置上局的鎖定符號
			uilightning.ShowPayout(gameData.lightningPrepare.PastPayGroups)
			
		},function(){
			self.StartSpinLightning()
		})
	},
	////////////////////////////////////////////////////////////////////////////// 
	/** 進入Bonus Game */
	ShowBonusGame(data){
		GameG.LogProcess("[GameLayer] ShowBonusGame")
		let self = this
		// 過場動畫
		uicutscene.ShowBonusGame(function(){
			// 遊戲類型有切換
			if(gameData.GetGameTypeIndex() != gameData.EnumGameType.BonusGame){
				// 更換獎金池的父物件
				//uijackpotPool.SetParentRoot(uibonusGame.GetRootJackpotPool())
			}
			// 開始結果表演 (每個遊戲類型皆由此判斷是否結束表演)
			mResultShowTime = true
			// 設置遊戲時間為正常速度
			let timeScale = GameG.GetTimeScale()
			GameG.ChangeTimeScale(1)

			uibonusGame.Show(function(winMoney){
				// 設置攜帶金額
				gameData.User.Score = gameData.User.Score + winMoney
				uiuser.SetCarryMoney(gameData.User.Score)
				// 設置遊戲時間回原始速度
				GameG.ChangeTimeScale(timeScale)
				// 顯示獎勵遊戲結果
				self.ShowBonusGameEnd(data)
			})
		})
	},
	/** 顯示獎勵遊戲結果 */
	ShowBonusGameEnd(data){
		GameG.LogProcess("[GameLayer] ShowBonusGameEnd")
		let self = this
		// 過場動畫
		uicutscene.ShowBonusGameEnd(function(){
			uibonusGame.Hide()
			// 遊戲類型結束的結算介面
			self.ShowResult(data)
		})
	},
	////////////////////////////////////////////////////////////////////////////// 
	/** 顯示每個遊戲模式結束時的結算介面 (每個遊戲模式結束後皆須呼叫) */
	ShowResult(data){
		GameG.LogProcess("[GameLayer] ShowResult")
		//GameG.Log("gameData.bonusGame",gameData.bonusGame)
		//GameG.Log("gameData.gameOptions",gameData.gameOptions)
		//GameG.Log("gameData.leftFreeGame",gameData.leftFreeGame)
		//GameG.Log("gameData.lightningPrepare",gameData.lightningPrepare)
		let self = this
		// 有bonus game的資料
		if(gameData.bonusGame != null){
            this.ShowBonusGame(data)    
        }        
		// lighting game的資料
		else if(gameData.lightningPrepare != null){
			uilightning.ShowResult(data, function(){		
				self.ShowNextGame(data)
			})
		}
		// 有free game的資料
		else if(gameData.leftFreeGame != null){
			uifreeSpin.ShowResult(data, function(){		
				self.ShowNextGame(data)
			})
		}
		// 下局遊戲
		else{
			this.ShowNextGame(data)
		}
	},
	// 下回遊戲開始，統一由ShowResult()呼叫
	ShowNextGame(data){	
		// 結束結果表演(每個遊戲類型皆由此判斷是否結束表演)
		mResultShowTime = false
		// 表演中獎輪播
		this.ShowGameResultCarousel(data)
		// 下回遊戲開始
		this.GameStart()
	},
	////////////////////////////////////////////////////////////////////////////// 
	/** 開始轉動， main game.free game下呼叫 */
	StartSpin(){
		// 有流程還未表演完成
		if(mResultShowTime == true){
			return
		}
		// 開始結果表演(每個遊戲類型皆由此判斷是否結束表演)
		mResultShowTime = true
		// 送出封包
		gameModel.SendGameStart(gameData.GetBetMoney(), gameData.GetBetRate())
	},

	/** 開始轉動，lighting game下呼叫 */
	StartSpinLightning(){
		// 有流程還未表演完成
		if(mResultShowTime == true){
			return
		}
		// 開始結果表演(每個遊戲類型皆由此判斷是否結束表演)
		mResultShowTime = true
		// 送出封包
		gameModel.SendLightningGameStart(gameData.lightningPrepare.LightningStep)
	},

	/** 快速停止轉動 */
	StopSpin(){	
		// 停止轉動
		uislot.SetStopSpin(0)
		
		uimainGame.SetBtnStopEnabled(false)
	},

	/** 下注結果S2C
	 * @param {XMBX_MSG_BetStatus} receiveMsg 封包:XMBX_BetStatusID = 20003
	 */
	SetBetRet(receiveMsg){
		if(receiveMsg.Ret == 0){
			this.ShowStateContent("spin")
			this.SetInteractable(false)
			uimainGame.SetBtnStopEnabled(uiautoSpin.GetIsAutoMode() == false)
			// 重置獲得金額
			uiuser.ResetWinMoney()
			// 開始轉動輪軸
			uislot.SetStartSpin()
			uimainGame.SetStartSpin()
			uifreeSpin.SetStartSpin()
			uilightning.SetStartSpin()
			uiautoSpin.SetStartSpin()
			uipayInfo.SetStartSpin()
			// 設置攜帶金額
			gameData.User.Score = gameData.User.Score - receiveMsg.Money
			uiuser.SetCarryMoney(gameData.User.Score)
		} 
		else{
			// 結束結果表演(每個遊戲類型皆由此判斷是否結束表演)
			mResultShowTime = false
			this.SetInteractable(true)
			// 關閉自動模式介面
			uimainGame.SetCloseAutoSpin()
			// 設置為手動模式
			uiautoSpin.SetManual()
		}
	},

	/** 遊戲結果S2C
	 ** 表演流程: 
	 * 1. [中lightning] 盤面中獎表演 > bigwin > goldball觸發表演 > lightning 過場 > lightning game > lightning 結算
	 * 2. [中freespin]  盤面中獎表演 > bigwin > scatter觸發表演 > freespin 過場 > free game > freespin 結算
	 * 3. [中lightning和freespin] 盤面中獎表演 > bigwin > goldball觸發表演 > lightning 過場 > lightning game > lightning 結算 > freespin 過場 > free game > freespin 結算
	 * @param {XMBX_MSG_GameResult} data 封包:XMBX_GameResultID = 20004
	 */
	SetGameResult(receiveMsg){
		GameG.LogProcess("[GameLayer] SetGameResult")	
		let self = this
		// 設置在free spin的獲得金額
		uifreeSpin.SetWinMoney(receiveMsg.FreeGameWinMoney - receiveMsg.WinMoney)
		if(gameData.GetGameTypeIndex() == gameData.EnumGameType.FreeGame){	
			uiuser.SetWinMoney(receiveMsg.FreeGameWinMoney - receiveMsg.WinMoney)
		}
		// 設置遊戲結果
        uislot.SetGameResult(receiveMsg, function(){
			self.ShowStateContent("stop")
			uiautoSpin.SetStopSpin()		
			uimainGame.SetStopSpin()
			uifreeSpin.SetStopSpin()
			// 盤面上符號有中獎表演
			self.ShowGameResultSymbolWin(receiveMsg)
		})
	},
	/**遊戲結果S2C (Lightning狀況下)
	 ** 表演流程: 
	 * 表演goldball鎖住 > 計算獲得金額 > jackpot money > bigwin > 結算(此款遊戲無此介面)
	 * @param {XMBX_MSG_LightningResult} data 封包:XMBX_LightningResultID = 10002
	 */
	SetLightningResult(receiveMsg){
		GameG.LogProcess("[GameLayer] SetLightningResult")	
		let param = {}
		param.Ret = 0
		this.SetBetRet(param)

		let self = this
		// 設置遊戲結果
		uislot.SetGameResult(receiveMsg, function(){
			self.ShowStateContent("stop")
			uilightning.SetStopSpin()
			// lightning目前轉過的次數
			uilightning.ShowLightningStep(receiveMsg.LightningStep)
			// lightning中表演符號鎖住
			self.ShowLightningResultLockSymbol(receiveMsg)
		})
	},
	//////////////////////////////////////////////////////////////////////////////
	/** 盤面上符號有中獎表演 
	 * @param {XMBX_MSG_GameResult} data 封包:XMBX_GameResultID = 20004
	 */
	ShowGameResultSymbolWin(data){	
		GameG.LogProcess("[GameLayer] ShowGameResultSymbolWin")	
		// 播放獲得金額動畫
		uimainGame.ShowWinMoneyAnimation(data)		
		uilightning.ShowWinMoneyAnimation(data)
		//uislot.ShowResultSymbolWin(data.ReelResult)
		// 盤面上符號有中獎表演
		uislot.ShowResultPayGroup(data.PayGroups)
		// 顯示中獎賠付線資訊
		uipayInfo.ShowResultCarousel(data.PayGroups)
		// 有獲得金額就等待盤面顯示中獎資訊
		let time = (data.WinMoney > 0) ? 1 : 0
		let self = this
		GameG.ScheduleOnce(function(){
			self.ShowGameResultBigWin(data)
		}, time)
	},
	//////////////////////////////////////////////////////////////////////////////	
	/** 表演 big win 與獲得金額跑分 
	 * @param {XMBX_MSG_GameResult} data 封包:XMBX_GameResultID = 20004
	 */ 
	ShowGameResultBigWin(data){
		GameG.LogProcess("[GameLayer] ShowGameResultBigWin")
		// 設置攜帶金額
		gameData.User.Score = data.FinalMoney
		uiuser.SetCarryMoney(gameData.User.Score)
		// 在free spin的介面顯示金額跑分
		uifreeSpin.AnimWinMoney(data.WinMoney)
		// 畫面中間顯示金額跑分
		uipayLine.Show(data.WinMoney)
		// 在big win的介面顯示金額跑分
		uibigWin.Show(data.WinMoney)
		// 用獲得金額判斷播放不同的音效
		this.ShowGameResultWinMulti(data)

		let self = this
		uiuser.AnimWinMoney(data.WinMoney,function(){
			// 有lightning資料，表演進入前動畫
			if(gameData.lightningPrepare != null){
				self.ShowGameResultIntoLightning(data)
			}
			// 有free game資料，表演進入前動畫
			else if(gameData.leftFreeGame != null){				
				self.ShowGameResultIntoFreeSpin(data)
			}
			// 遊戲類型結束的結算介面
			else{
				self.ShowResult(data)
			}
		})
	},
	/**用獲得金額判斷播放不同的音效 
	 * @param {XMBX_MSG_GameResult} data 封包:XMBX_GameResultID = 20004
	 */
	ShowGameResultWinMulti(data){
		// 獲得金額 > 總下注金額 * 60
		if(data.WinMoney > gameData.GetTotalBetMoney() * 60){
			GameG.PlayGameSound("se_win03")
		}
		// 獲得金額 > 總下注金額 * 20
		else if(data.WinMoney > gameData.GetTotalBetMoney() * 20){
			GameG.PlayGameSound("se_win02")
		}
		// 獲得金額 > 0
		else if(data.WinMoney > 0){
			GameG.PlayGameSound("se_win01")
		}
	},
	//////////////////////////////////////////////////////////////////////////////
	// 此款遊戲無bonus game
	/** 進入bonus game前的表演
	 * @param {XMBX_MSG_GameResult} data 封包:XMBX_GameResultID = 20004
	 */
	/*ShowGameResultIntoBonus(data){
		GameG.LogProcess("[GameLayer] ShowGameResultIntoBonus")
		let self = this
		let time = (gameData.bonusGame == null) ? 0 : 2
		//uislot.ShowResultSymbolWin(data.ReelResult, "s1")
		uislot.ShowResultIntoBonusGame(data.ReelResult)
		GameG.ScheduleOnce(function(){
			// 遊戲類型結束的結算介面
			self.ShowResult(data)
		}, time)
	},*/
	//////////////////////////////////////////////////////////////////////////////
	/** 進入lightning game前的表演 
	 * @param {XMBX_MSG_GameResult} data 封包:XMBX_GameResultID = 20004
	 */
	ShowGameResultIntoLightning(data){
		GameG.LogProcess("[GameLayer] ShowGameResultIntoLightning")
		// 盤面進入lightning符號表演
		uislot.ShowResultIntoLightning()

		let self = this
		GameG.ScheduleOnce(function(){
			// 遊戲類型結束的結算介面
			self.ShowResult(data)
		}, 5)
	},
	//////////////////////////////////////////////////////////////////////////////
	/** 進入free game前的表演 
	 * @param {XMBX_MSG_GameResult} data 封包:XMBX_GameResultID = 20004
	 */
	ShowGameResultIntoFreeSpin(data){
		GameG.LogProcess("[GameLayer] ShowGameResultIntoFreeSpin")
		// 盤面上符號中獎的有Scatter
		this.ShowGameResultWinScatter(data.PayGroups)

		let self = this
		GameG.ScheduleOnce(function(){
			// 遊戲類型結束的結算介面
			self.ShowResult(data)
		}, 1)
	},
	/** 盤面上符號中獎的有Scatter，播放音效 
	 * @param {XMBX_PayGroup} data 封包:XMBX_GameResultID = 20004
     */
	ShowGameResultWinScatter(data){
		// 播放符號Scatter的中獎動畫
		uislot.ShowResultSymbolWin(data.ReelResult, "s1")
		// 播放音效
		let playSound = false
		for(let i in data){
			for(let index in data[i].BlinkPositions){
				let reelIndex = data[i].BlinkPositions[index].Reel
				let rowIndex = data[i].BlinkPositions[index].Row
				let reelResult = gameData.GetGameResultReel(reelIndex, rowIndex)
				if(reelResult.Symbol.SymbolName == "s1"){
					playSound = true
				}
			}
		}
		if(playSound == true){
			GameG.PlayGameSound("se_fstrigger")
		}
	},
	//////////////////////////////////////////////////////////////////////////////	
	/** 表演中獎輪播
	 * @param {XMBX_MSG_GameResult} data 封包:XMBX_GameResultID = 20004
	 */
	ShowGameResultCarousel(data){
		if(data == null){
			return
		}
		uislot.ShowResultCarousel(function(payInfo){
			uipayInfo.Show(payInfo)
		})
	},
	//////////////////////////////////////////////////////////////////////////////
	/** lightning中表演符號鎖住
	 * @param {XMBX_MSG_LightningResult} data 封包:XMBX_LightningResultID = 10002
	 */
	ShowLightningResultLockSymbol(data){
		GameG.LogProcess("[GameLayer] ShowLightningResultLockSymbol")
		// 播放轉中goldball動畫
		uilightning.ShowWinMoneyAnimation(data)
		// 顯示鎖輪符號
		uilightning.ShowPayout(data.PayGroups)
		// 重置剩餘次數
		uilightning.ShowLeftCount(gameData.lightningPrepare.Count)
		// 顯示計算分數背景
		uilightning.StartCalculateMoney(data)

		let self = this
		GameG.ScheduleOnce(function(){
			self.ShowLightningResultCalculateMoney(data)
		}, 1)
	},
	//////////////////////////////////////////////////////////////////////////////
	/** 計算獲得金額 */
	ShowLightningResultCalculateMoney(data){
		GameG.LogProcess("[GameLayer] ShowLightningResultCalculateMoney")
		// 沒有下局lightning的時候
		if(gameData.lightningPrepare.LightningStep == data.LightningStep){
			// 由於滾動中會將結果替換掉，結算時鎖住背景會被關掉後面的符號要與結果一致
			uislot.SetReelResult(gameData.lightningResult.ReelResult)
		}

		let self = this
		uilightning.ShowCalculateMoney(data, function(){
			self.ShowLightningResultJackpotMoney(data)
		})
	},
	//////////////////////////////////////////////////////////////////////////////
	/** 顯示獲得jackpot money */
	ShowLightningResultJackpotMoney(data){
		GameG.LogProcess("[GameLayer] ShowLightningResultJackpotMoney")

		let self = this
		uijackpotMoney.Show(data.JackpotMoney, function(){
			self.ShowLightningResultBigWin(data)
		})
	},
	//////////////////////////////////////////////////////////////////////////////
	/** 表演 big win 與獲得金額跑分 */
	ShowLightningResultBigWin(data){
		GameG.LogProcess("[GameLayer] ShowLightningResultBigWin")
		// 設置攜帶金額
		gameData.User.Score = data.FinalMoney		
		uiuser.SetCarryMoney(gameData.User.Score)
		
		// 沒有下局lightning的時候
		if(gameData.lightningPrepare.LightningStep == data.LightningStep){
			// 獲得金額跑分
			let winMoeny = gameData.GetLightningResultWinMoeny()
			uibigWin.Show(winMoeny)
			
			let self = this
			uiuser.AnimWinMoney(winMoeny,function(){
				// 遊戲類型結束的結算介面
				self.ShowResult(data)
			})
		}
		else{
			// 遊戲類型結束的結算介面
			this.ShowResult(data)
		}
	},
};

module.exports = GameLayer
