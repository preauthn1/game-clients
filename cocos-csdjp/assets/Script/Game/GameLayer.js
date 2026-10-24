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
let uipayTable = require("UIPayTable")
let uihistory = require("UIHistory")
let uisetting = require("UISetting")
let uicutscene = require("UICutscene")
let uipayLine = require("UIPayLine")
let uijackpotPool = require("UIJackpotPool")
let uipayInfo = require("UIPayInfo")
let uibonusGame = require("UIBonusGame")

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
		uisetting.SetHideCallback(function(){
			uimainGame.ShowSettingRope()
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
		uifreeSpin.onExit()
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
	},
	
	//////////////////////////////////////////////////////////////////////////////
	/**　遊戲狀態S2C 0.下注状态 1.开奖状态 2.开奖动画 3.结算动画 4.等待游戏开始
	 * @param {WLZBJP_MSG_Status} receiveMsg 封包: CSDJP_StatusID = 20002
	 */
	SetState(receiveMsg){
		this.GameStart()
	},
	/**　初始設定資料 
	 * @param {WLZBJP_MSG_Setting} receiveMsg 封包: CSDJP_SettingID = 20001
	*/
	SetSetting(receiveMsg){
		uimessage.Hide()
		uislot.SetReelSetting(receiveMsg.ReelSetting)
		uichip.SetData(receiveMsg.BetMoneys)
		uiselectMode.SetData(receiveMsg.FreeGames)
	},
	/**　玩家資訊
	 * @param {WLZBJP_GameUser} receiveMsg 封包: UserEnterID = 4
	 */
	SetUserData(receiveMsg){
		// 設置攜帶金額
		let money = receiveMsg.Score
		uiuser.SetCarryMoney(money)
	},
	/** 設定歷史紀錄
	 * @param {WLZBJP_MSG_GameLogRecord} receiveMsg 封包: CSDJP_LoadHistoryRetID = 22002
	 */
	SetHistoryFindData(receiveMsg){
		uihistory.SetFindData(receiveMsg)
	},
	/** 設定遊戲選擇
	 * @param {WLZBJP_MSG_ChooseGameOptions} receiveMsg 封包: CSDJP_SelectGameOptionsID = 20008
	 */
	SetGameOptions(receiveMsg){
		uichip.SetCurrentBetCount(receiveMsg.BetMoney)
		uifreeSpin.SetSelectCount(receiveMsg.Times)
	},
	/** 設定剩餘Free Game資料
	 * @param {WLZBJP_MSG_LeftFreeGameData} receiveMsg 封包: CSDJP_LeftFreeGameID = 20005
	 */
	SetLeftFreeGame(receiveMsg){
		uichip.SetCurrentBetCount(receiveMsg.BetMoney)

		this.GameStart()
	},
	/** 設定獎金池
	 * @param {WLZBJP_MSG_JackpotPool} receiveMsg 封包: CSDJP_JackpotPoolRetID = 22004
	 */
	SetJackpotPool(receiveMsg){
		uijackpotPool.SetData(receiveMsg.Jackpots)
	},
	/** 設定獎勵遊戲
	 * @param {WLZBJP_MSG_BonusGame} receiveMsg 封包: CSDJP_BonusGameID = 20009
	 */
	SetBonusGame(receiveMsg){
		uichip.SetCurrentBetCount(receiveMsg.BetMoney)
	},
	/** 獎勵遊戲選擇結果
	 * @param {WLZBJP_MSG_PickBonus} receiveMsg 封包: CSDJP_PickBonusRetID = 22006
	 */
	SetPickBonusRet(receiveMsg){
		uibonusGame.SetPickBonusRet(receiveMsg.Record)
	},
	////////////////////////////////////////////////////////////////////////////// 
	/** 遊戲開始，每個模式結束後，皆由這統一控制後續流程 */
	GameStart(){
		let self = this
		console.log("GameStart",gameData.State,mResultShowTime,gameData.GetGameTypeIndex())
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
				if(gameData.GetGameTypeIndex() != 1){
					let data = gameData.GetFreeGameDataById(gameData.leftFreeGame.ID)
					uislot.SetSpinReelSetting(data.ReelSetting)
					uipayInfo.Hide()
				}
				// 過場動畫
				uicutscene.ShowFreeGame(function(){
					uiselectMode.Hide()
					uimainGame.Hide()
					uifreeSpin.SetParentSlotground(uislot.GetRootRect())
					uifreeSpin.Show()
				},function(){
					self.SetInteractable(false)
					self.StartSpin()
				})
			}
			// 進入Main Game
			else{
				// 過場動畫
				uicutscene.ShowMainGame(function(){
					if(gameData.GetGameTypeIndex() != 0){		
						uislot.SetSpinReelSetting(gameData.ReelSetting)
						uipayInfo.Hide()
					}
					uifreeSpin.Hide()
					uimainGame.SetParentSlotground(uislot.GetRootRect())
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
		uicutscene.ShowSelectGame(function(){
			uiselectMode.Show()	
		})
	},
	////////////////////////////////////////////////////////////////////////////// 
	/** 進入Bonus Game */
	ShowBonusGame(data){
		let self = this
		// 過場動畫
		uicutscene.ShowBonusGame(function(){

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
		let self = this
		// 過場動畫
		uicutscene.ShowBonusGameEnd(function(){
			self.ShowResult(data)
			uibonusGame.Hide()			
		})
	},
	////////////////////////////////////////////////////////////////////////////// 
	/** 顯示每個遊戲模式結束時的結算介面 (每個遊戲模式結束後皆須呼叫) */
	ShowResult(data){
		//console.error("gameData.bonusGame",gameData.bonusGame)
		//console.error("gameData.gameOptions",gameData.gameOptions)
		//console.error("gameData.leftFreeGame",gameData.leftFreeGame)
		let self = this
		// 有bonus game的資料
		if(gameData.bonusGame != null){
			this.ShowBonusGame(data)	
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
		this.GameStart()
		this.ShowWinCarousel(data)
	},
	////////////////////////////////////////////////////////////////////////////// 
	/** 開始轉動 */
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

	/** 快速停止轉動 */
	StopSpin(){	
		// 停止轉動
		uislot.SetStopSpin(0)
		
		uimainGame.SetBtnStopEnabled(false)
	},

	/** 下注結果S2C
	 * @param {WLZBJP_MSG_BetStatus} receiveMsg 封包:CSDJP_BetStatusID = 20003
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

	/** 遊戲結果S2C */
	SetGameResult(receiveMsg){
		let self = this
		if(receiveMsg.FreeGameWinMoney > 0){
			uiuser.SetWinMoney(receiveMsg.FreeGameWinMoney - receiveMsg.WinMoney)
		}
		// 設置遊戲結果
        uislot.SetGameResult(receiveMsg, function(){
			uimainGame.SetStopSpin()
			uifreeSpin.SetStopSpin()
			self.ShowStateContent("stop")
			self.ShowGameResultSymbolWin(receiveMsg)
		})
	},
	//////////////////////////////////////////////////////////////////////////////
	/** 盤面上符號有中獎表演 
	 * @param {WLZBJP_MSG_GameResult} data 封包:CSDJP_GameResultID = 20004
	 */
	ShowGameResultSymbolWin(data){
		uifreeSpin.SetWildMulti(data.PayGroups)
		//uislot.ShowGameResultSymbolWin(data.ReelResult)
		// 盤面上符號有中獎表演
		uislot.ShowGameResultPayGroup(data.PayGroups)
		this.ShowGameResultWinScatter(data.PayGroups)
		// 顯示中獎賠付線資訊
		uipayInfo.ShowGameResultCarousel(data.PayGroups)
		let time = (data.WinMoney > 0) ? 1 : 0
		let self = this
		GameG.ScheduleOnce(function(){
			self.ShowNormalBigWin(data)
		}, time)
	},
	// 表演中獎Scatter
	ShowGameResultWinScatter(data){
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
	/** 表演 big win 與獲得金額跑分 
	 * @param {WLZBJP_MSG_GameResult} data 封包:CSDJP_GameResultID = 20004
	 */ 
	ShowNormalBigWin(data){
		gameData.User.Score = data.FinalMoney
		uiuser.SetCarryMoney(gameData.User.Score)
		
		// 畫面中間顯示金額跑分
		uipayLine.Show(data.WinMoney)
		// 在big win的介面顯示金額跑分
		uibigWin.Show(data.WinMoney)
		// 用獲得金額判斷播放不同的音效
		this.ShowGameResultWinMulti(data)

		let self = this
		uiuser.AnimWinMoney(data.WinMoney,function(){
			self.ShowGameResultIntoBonus(data)
		})
	},
	/**用獲得金額判斷播放不同的音效 
	 * @param {WLZBJP_MSG_GameResult} data 封包:CSDJP_GameResultID = 20004
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
	/** 進入bonus game前的表演
	 * @param {WLZBJP_MSG_GameResult} data 封包:CSDJP_GameResultID = 20004
	 */
	ShowGameResultIntoBonus(data){
		let self = this
		let timer = (gameData.bonusGame == null) ? 0 : 2
		//uislot.ShowGameResultSymbolWin(data.ReelResult, "s1")
		uislot.ShowGameResultIntoBonusGame(data.ReelResult)
		GameG.ScheduleOnce(function(){
			// 遊戲類型結束的結算介面
			self.ShowResult(data)
		}, timer)
	},
	//////////////////////////////////////////////////////////////////////////////	
	/** 表演中獎輪播
	 * @param {WLZBJP_MSG_GameResult} data 封包:CSDJP_GameResultID = 20004
	 */
	ShowWinCarousel(data){
		if(data == null){
			return
		}
		uislot.ShowGameResultCarousel(function(payInfo){
			uipayInfo.Show(payInfo)
		})
	},

};

module.exports = GameLayer
