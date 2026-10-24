let GameG = require("GameGlobal")
let gameConfig = require("GameConfig")
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
let uipayInfo = require("UIPayInfo")
let uijackpotPool = require("UIJackpotPool")
let uibonusGame = require("UIBonusGame")
let uibonusEnter = require("UIBonusEnter")

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
			//uisymbolDetail.Show(symbolName)
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
		uibonusEnter.Init(cc.find("UIBonusEnter",root))

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
	 * @param {JGYF_MSG_Status} data 封包:JGYF_StatusID = 20002
	 */
	SetState(receiveMsg){
		this.GameStart()
	},
	/**　初始設定資料 
	 * @param {JGYF_MSG_Setting} data 封包:JGYF_SettingID = 20001
	*/
	SetSetting(receiveMsg){
		uimessage.Hide()
		uislot.SetReelSetting(receiveMsg.ReelSetting)
		uichip.SetData(receiveMsg.BetMoneys)
	},

	SetGameReelSetting(receiveMsg){	
		console.log("GameReelSetting",receiveMsg.GameReels)
	},
	/**　玩家資訊
	 * @param {GameUser} data 玩家資料
	 */
	SetUserData(receiveMsg){
		// 設置攜帶金額
		let money = receiveMsg.Score
		uiuser.SetCarryMoney(money)
	},
	/** 設定歷史紀錄
	 * @param {JGYF_MSG_GameLogRecord} data 封包: JGYF_LoadHistoryRetID = 22002
	 */
	SetHistoryFindData(receiveMsg){
		uihistory.SetFindData(receiveMsg)
	},
	/** 設定遊戲選擇
	 * @param {JGYF_MSG_ChooseGameOptions} data 封包: JGYF_SelectGameOptionsID = 20008
	 */
	SetGameOptions(receiveMsg){
		//uifreeSpin.SetSelectCount(receiveMsg.Times)
		uichip.SetCurrentBetCount(receiveMsg.BetMoney)
	},
	/** 設定剩餘Free Game資料
	 *  @param {JGYF_MSG_LeftFreeGameData} receiveMsg 封包: JGYF_LeftFreeGameID = 20005
	 */
	SetLeftFreeGame(receiveMsg){
		uichip.SetCurrentBetCount(receiveMsg.BetMoney)
		let self = this
		uiselectMode.RetFreeGameMode(receiveMsg,function(){
			self.ShowResult()
		})
	},
	/** 設定獎金池
	 * @param {JGYF_MSG_Setting} data 封包:JGYF_SettingID = 20001
	 */
	SetJackpotPool(receiveMsg){
		uijackpotPool.SetData(receiveMsg.Jackpots)
	},
	/** 設定獎勵遊戲
	 *  @param {JGYF_MSG_BonusGame} data 封包: JGYF_BonusGameID = 20009
	 */
	SetBonusGame(receiveMsg){
		uichip.SetCurrentBetCount(receiveMsg.BetMoney)
	},
	/** 獎勵遊戲選擇結果
	 * @param {JGYF_MSG_PickBonus} receiveMsg 封包: JGYF_PickBonusRetID = 22006
	 */
	SetPickBonusRet(receiveMsg){
		uibonusGame.SetPickBonusRet(receiveMsg.Record)
	},
	////////////////////////////////////////////////////////////////////////////// 
	/** 遊戲開始，每個模式結束後，皆由這統一控制後續流程 */
	GameStart(){
		let self = this
		GameG.Log("GameStart",gameData.State,mResultShowTime)
		// 有流程還未表演完成
		if(mResultShowTime == true){
			return
		}
		// 遊戲狀態為5，有其他事件
		if(gameData.State == 5){
			uiuser.HideAnimWinMoney()
			uipayInfo.Hide()
			uislot.ResetReel()
			// 有獎勵遊戲要進行
			if(gameData.bonusGame != null){
				this.ShowBonusGame()
			}
			// 有選擇遊戲要進行
			else if(gameData.gameOptions != null){
				this.ShowSelectGame()
			}
		}
		// 遊戲狀態為0，可進行遊戲
		else if(gameData.State == 0){
			// uiselectMode.Hide()
			uimainGame.SetBtnManualEnabled(uiautoSpin.GetIsAutoMode())
			uimainGame.SetBtnStartEnabled(true)
			uimainGame.SetBtnStopEnabled(false)
			this.SetInteractable(true)
			// 進入Free Game
			if(gameData.leftFreeGame != null && gameData.leftFreeGame.Count > 0){
				// 過場動畫
				uicutscene.ShowFreeGame(function(){
					if(gameData.GetGameModeIndex() != gameData.EnumGameType.FreeGame){
						let data = gameData.GetFreeGameDataById(gameData.leftFreeGame.ID)
						uislot.SetSpinReelSetting(data.ReelSetting)
						uipayInfo.Hide()
						uiuser.HideAnimWinMoney()
						//uislot.SetParentRoot(uifreeSpin.GetRootRect())
					}
					//uimainGame.Hide()
					let preGameType = gameData.GetGameTypeIndex()
					uifreeSpin.Show(function(rowCount){
						if(preGameType != gameData.EnumGameType.FreeGame){
							uijackpotPool.SetParentRoot(uifreeSpin.GetRootRectJackpotPool())
							uibonusEnter.ChangeBowlPosition(uifreeSpin.GetRootRectBonusEnter())
							uislot.SetRowCount(rowCount)
							uislot.ChangeRootReelPosition(uifreeSpin.GetRootRectSlotground())
						}
					})
				}, function(){
					// 顯示獲得次數
					uifreeSpin.ShowTrigger(function(){
						self.StartSpin()
					})
				})
			}
			// 進入Main Game
			else{
				// 過場動畫
				uicutscene.ShowMainGame(function(){
					if(gameData.GetGameModeIndex() != gameData.EnumGameType.MainGame){
						// 設定輪軸資料
						uislot.SetSpinReelSetting(gameData.ReelSetting)
						uislot.SetRowCount(gameData.RowCounts)
						// 關閉中獎資訊
						uipayInfo.Hide()
						uiuser.HideAnimWinMoney()
					}
					
					if(gameData.GetGameTypeIndex() != gameData.EnumGameType.MainGame){	
						//uislot.SetParentRoot(uimainGame.GetRootRect())
						uijackpotPool.SetParentRoot(uimainGame.GetRootRectJackpotPool())
						uibonusEnter.ChangeBowlPosition(uimainGame.GetRootRectBonusEnter())
						uislot.ChangeRootReelPosition(uimainGame.GetRootRectSlotground())
					}
					uifreeSpin.Hide()
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
		if(gameData.leftFreeGame != null){
			uijackpotPool.SetParentRoot(uifreeSpin.GetRootRectJackpotPool())
		}
		else{
			uijackpotPool.SetParentRoot(uimainGame.GetRootRectJackpotPool())
		}
		// 過場動畫
		uicutscene.ShowSelectGame(function(){
			mResultShowTime = true
			uiselectMode.Show()	
		})
	},
	//////////////////////////////////////////////////////////////////////////////
	/** 進入Bonus Game前動畫 */
	ShowBonusGameEnter(data){
		uiuser.HideAnimWinMoney()
		uipayInfo.Hide()
		uislot.ResetReel()
		
		let self = this
		uibonusEnter.Show(function(){
			self.ShowBonusGame(data)
		})
	},
	/** 進入Bonus Game */
	ShowBonusGame(data){
		let self = this
		// 開始結果表演 (每個遊戲類型皆由此判斷是否結束表演)
		mResultShowTime = true
		// 設置遊戲時間為正常速度
		let timeScale = GameG.GetTimeScale()
		GameG.ChangeTimeScale(1)
		// 更換獎金池的父物件
		uijackpotPool.SetParentRoot(uibonusGame.GetRootRectJackpotPool())
		uibonusGame.Show(function(winMoney){
			// 設置攜帶金額
			gameData.User.Score = gameData.User.Score + winMoney
			uiuser.SetCarryMoney(gameData.User.Score)
			// 設置遊戲時間回原始速度
			GameG.ChangeTimeScale(timeScale)
			// 顯示獎勵遊戲結果
			self.ShowBonusGameEnd(data)
		},
		uibonusEnter.GetBowlNode())
	},
	/** 顯示獎勵遊戲結果 */
	ShowBonusGameEnd(data){
		let self = this
		// 過場動畫
		uicutscene.ShowBonusGameEnd(function(){
			// 遊戲類型結束的結算介面
			self.ShowResult(data)
			uibonusGame.Hide()			
		})
	},
	////////////////////////////////////////////////////////////////////////////// 
	/** 顯示每個遊戲模式結束時的結算介面 (每個遊戲模式結束後皆須呼叫) */
	ShowResult(data){
		let self = this
		if(gameData.bonusGame != null){
            this.ShowBonusGame(data)    
        }        
		// 不是free game中
		else if(gameData.GetGameTypeIndex() != gameData.EnumGameType.FreeGame){
			this.ShowNextGame(data)
		} 
		// 還有剩餘次數
		else if(gameData.leftFreeGame.Count > 0){
			this.ShowNextGame(data)
		}
		else if(data == null){
			this.ShowNextGame(data)
		}
		else{
			uifreeSpin.ShowResult(data, function(){
				self.ShowNextGame(data)
			})
		}
	},
	// 下回遊戲開始，統一由ShowResult()呼叫
	ShowNextGame(data){	
		// 結束結果表演(每個遊戲類型皆由此判斷是否結束表演)
		mResultShowTime = false
		// 獎勵遊戲結束，不表演輪播
		if(gameData.GetGameTypeIndex() != gameData.EnumGameType.BonusGame){	
			// 表演中獎輪播
			this.ShowWinCarousel(data)
		}
		// 下回遊戲開始
		this.GameStart()
		
	},
	////////////////////////////////////////////////////////////////////////////// 
	// 開始轉動
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

	// 停止轉動
	StopSpin(){	
		uislot.SetStopSpin(0)
		
		uimainGame.SetBtnStopEnabled(false)
	},

	/** 下注結果S2C
	 * @param {JGYF_MSG_BetStatus} receiveMsg 封包:JGYF_BetStatusID = 20003
	 */
	SetBetRet(receiveMsg){
		if(receiveMsg.Ret == 0){
			this.ShowStateContent("spin")
			this.SetInteractable(false)
			uimainGame.SetBtnStopEnabled(uiautoSpin.GetIsAutoMode() == false)
			// 重置獲得金額
			uiuser.ResetWinMoney()
			uiuser.HideAnimWinMoney()
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
		// 設置在free spin的獲得金額
		uifreeSpin.SetWinMoney(receiveMsg.FreeGameWinMoney - receiveMsg.WinMoney)
		if(gameData.GetGameTypeIndex() == gameData.EnumGameType.FreeGame){			
			uiuser.SetWinMoney(receiveMsg.FreeGameWinMoney - receiveMsg.WinMoney)
		}
		// 設置遊戲結果
        uislot.SetGameResult(receiveMsg, function(){
			uimainGame.SetStopSpin()
			uifreeSpin.SetStopSpin()
			self.ShowStateContent("stop")
			// 盤面上符號有中獎表演
			self.ShowGameResultSymbolWin(receiveMsg)
		})
	},
	//////////////////////////////////////////////////////////////////////////////
	/** 盤面上符號有中獎表演 
	 * @param {JGYF_MSG_GameResult} data 封包:JGYF_GameResultID = 20004
	 */
	ShowGameResultSymbolWin(data){
		uifreeSpin.SetWildMulti(data.PayGroups)
		uislot.ShowGameResultSymbolWin(data.PayGroups)
		this.ShowGameResultWinWild(data.PayGroups)
		uipayInfo.ShowGameResultCarousel(data.PayGroups)
		
		let timer = (data.WinMoney > 0) ? 1 : 0
		let self = this
		GameG.ScheduleOnce(function(){
			self.ShowNormalBigWin(data)
		}, timer)
	},
	// 表演中獎Wild
	ShowGameResultWinWild(data){
		let playSound = false
		for(let i in data){
			for(let index in data[i].BlinkPositions){
				let reelIndex = data[i].BlinkPositions[index].Reel
				let rowIndex = data[i].BlinkPositions[index].Row
				let result = gameData.GetGameResultReel(reelIndex, rowIndex)
				if(result != null){
					if(result.Symbol.SymbolName == "s1"){
						playSound = true
					}
				}
			}
		}
		if(playSound == true){
			GameG.PlayGameSound("se_fstrigger")
		}
	},
	//////////////////////////////////////////////////////////////////////////////	
	/** 表演 big win 與獲得金額跑分 
	 * @param {JGYF_MSG_GameResult} data 封包:JGYF_GameResultID = 20004
	 */ 
	ShowNormalBigWin(data){
		// 設置攜帶金額
		gameData.User.Score = data.FinalMoney
		uiuser.SetCarryMoney(gameData.User.Score)
		// 在free spin的介面顯示金額跑分
		uifreeSpin.AnimWinMoney(data.WinMoney)
		// 畫面中間顯示金額跑分
		//uipayLine.Show(data.WinMoney)
		// 在big win的介面顯示金額跑分
		uibigWin.Show(data.WinMoney)

		let self = this
		uiuser.AnimWinMoney(data.WinMoney,function(){
			self.ShowSymbolScatter(data)
		})

		if(gameData.GetBigWinStepByIndex(0) > data.WinMoney &&  data.WinMoney > 0){
			uiuser.ShowAnimWinMoney()
		}
	},
	//////////////////////////////////////////////////////////////////////////////	
	/** 盤面上符號有Scatter 
	 * @param {JGYF_MSG_GameResult} data 封包:JGYF_GameResultID = 20004
	*/
	ShowSymbolScatter(data){
		let self = this
		uibonusEnter.ShowBat(data, function(){
			if (gameData.bonusGame != null){
				self.ShowBonusGameEnter(data)
			}
			else{
				self.ShowResult(data)
			}
		})		
	},
	//////////////////////////////////////////////////////////////////////////////	
	/** 表演中獎輪播
	 * @param {JGYF_MSG_GameResult} data 封包:JGYF_GameResultID = 20004
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
