var GameG = null

/** 用途: 遊戲內存資料 */
var GameData = {
	extends: cc.Component,

	Init(){
		GameG = require("GameGlobal")
				
		this.ShowReelSymbolDetail = false //顯示輪軸內的符號資訊
		//this.ShowReelSymbolDetail = true //顯示輪軸內的符號資訊
				
		this.SpinLoopTimer = 0.8	//轉動持續最少時間(>=0)
			
		this.GapTimer_Carousel = 1.0 //結算輪播賠付線[間隔時間](>0)
		
		this.SpinMoveTimer = 100 // [UISlotReel] 輪軸轉動每幀移動速度
		this.SpinMoveDistance = 25 // [UISlotReel] 輪軸轉動每幀移動每隔符號的百分比
		this.OutBackDistance = 35 // [UISlotReel] 停輪回拉的距離符號的百分比
		this.GapTimer_Spin = 0.33 // [UISlot] 每個輪軸間格動畫時間
		this.GapTimer_NearWin = 1.9 // [UISlot] 每個輪軸間格聽牌時間
		
		this.MoneyTimeByRate = 0.04 //表演金額時間倍數		

		this.BonusGameCountdownTotalTimer = 60 //[UIBonusGame] 總倒數時間
		this.BonusGameCountdownShowTimer = 20 //[UIBonusGame] 顯示倒數時間

		this.SelectModeCountdownTotalTimer = 60 //[UISelectMode] 總倒數時間
		this.SelectModeCountdownShowTimer = 20 //[UISelectMode] 顯示倒數時間
		
		this.betRate = 1 // 下注倍率
		this.gameTypeIndex = 0 // 目前遊戲模式
	},

	/** 設定遊戲基本資料
	 *  封包: CSDJP_SettingID = 20001
	 *  封包結構: WLZBJP_MSG_Setting
	 */
	SetSetting(data){
		this.PayLineMode = data.PayLineMode //賠付類型 (0.非全線 1.全線)
		this.TotalPayLine = data.TotalPayLine //總共多少賠付線
		this.MinCarryMoney = data.MinCarryMoney //最小攜帶金額
		this.RowCounts = data.RowCounts //顯示結算的行數	
		this.BetMoneys = data.BetMoneys //可下注金額	
		this.BetRates = data.BetRates //下注倍率	
		this.BigWinStep = data.BigWinStep //BigWin各階段演出條件
		this.ReelSetting = data.ReelSetting //輪軸表演設置
		this.FreeGames = data.FreeGames //免費遊戲設置
		this.PayLines = data.PayLines //所有賠線
		this.Descriptions = data.Descriptions //單位縮寫對照
		this.UnitPrefix = data.UnitPrefix //單位縮寫對照
		this.GoldBallSetting = data.GoldBallSetting //金球倍率設定
		this.SymbolPayTable = data.SymbolPayTable
		this.SetJackpotPool(data.Jackpots)
		this.SetBetRate(data.BetRates[0])		
	},
	/** 取得符號賠附表資料
	 ** 介面: [UIPayTable][UISymbolDetail]
	 * @param {string} symbolName 符號名稱
	 * @param {number} detailCount 賠付數量
	 */
	GetSymbolPayDetail(symbolName,detailCount){
		let detail = {}
		for(let i in this.SymbolPayTable){
			let data = this.SymbolPayTable[i]
			if(data.Symbol.SymbolName == symbolName){
				if(detailCount != null && data.Count != detailCount){
					continue;
				}	
				if(data.Type == "selection"){
					continue;
				} 
				if(data.Type == "mysteryJPG"){
					continue;
				} 
				let payout = data.Payout
				let paytable = data.Payout
				if(data.Type == "pickgame"){
					paytable = string.format("%.0f b", payout)
				} 
				else if(data.Type == "jackpot"){
					paytable = string.format("a")
				} 
				else if(data.Type == "chip"){
					payout = payout * this.GetBetMoney()
					paytable = GameG.FormatUnit(payout)
				}
				detail.payout = payout
				detail.paytable = paytable
				detail.typeId = data.Type
			}
		}
		
		detail.title = GameG.GetLocalizedString("symbol_title_" + symbolName)
		detail.desc = GameG.GetLocalizedString("symbol_desc_" + symbolName)
		
		return detail
	},

	/** 設定遊戲狀態
	 * @param {WLZBJP_MSG_Status} data 封包:CSDJP_StatusID = 20002
	 */ 
	SetState(data){
		this.State = data 
	},

	/** 設定玩家資料 
	 * @param {WLZBJP_GameUser} data 玩家資料
	 */ 
	SetUserData(data){
		this.User = {}
		this.User.UserID = data.UserID
		this.User.NickName = data.NickName
		this.User.Sex = data.Sex
		this.User.FaceID = data.FaceID
		this.User.Score = data.Score
		this.User.WinCount = data.WinCount
		this.User.LoseCount = data.LoseCount
		this.User.DrawCount = data.DrawCount
		this.User.StateValue = data.StateValue
		this.User.TableNo = data.TableNo
		this.User.SeatNo = data.SeatNo
	},

	/** 回合開始 */ 
	SetGameStart(){
	
	},

	/** 回合結束 */ 
	SetGameEnd(){
	
	},

	/** 符號狀態切換
	 ** 介面: [UISlotReel]
	 ** 用途: 符號依照不同狀況，給予對應符號
	 * @param {string} symbolName 符號名稱
	 */ 
	ChangeSymbolName(symbolName){
		if(symbolName.indexOf("w") >= 0){
			symbolName = "w1"
		}
		return symbolName
	},

 	//////////////////////////////////////////////////////////////////////////////    
    /** 設定當前下注金額
	 ** 介面: [UIChip]
	 ** 說明: 此參數由使用者控制，於是由[UIChip]介面指定
	 * @param {number} money 下注金額 (由封包[SettingID]的參數[BetMoneys]取得)
	 */
	SetBetMoney(money){
		this.betMoney = money		
	},

	/** 取得當前下注金額 */ 
	GetBetMoney(){
		return this.betMoney
	},
	
	/** 設定當前下注倍率 
	 ** 說明: 不是所有遊戲都由使用者控制
	 * @param {number} rate 下注倍率 (由封包[SettingID]的參數[BetRates]取得)
	*/
	SetBetRate(rate){
		this.betRate = rate
	},

	/** 取得當前下注倍率 */ 
	GetBetRate(){
		return this.betRate
	},

	/** 目前的下注總金額 */ 
	GetTotalBetMoney(){
		// 下注倍率
		let betRate = this.betRate
		// 下注金額
		let betMoney = this.betMoney
		
		return betRate * betMoney
	},

	/** 取得下注的最大總金額 */ 
	GetMaxBetMoney(){
		// 下注倍率
		let betRate = 1
		if(this.BetRates != null){
			for(let i in this.BetRates){
				if(this.BetRates[i] > betRate){
					betRate = this.BetRates[i]
				}
			}
		}
		// 下注金額
		let betMoney = 1
		for(let i in this.BetMoneys){
			if(this.BetMoneys[i] > betMoney){
				betMoney = this.BetMoneys[i]
			}
		}

		return betRate * betMoney
	},

	/** 取得下注的最小總金額 */
	GetMinBetMoney(){
		// 下注倍率
		let betRate = Number.MAX_SAFE_INTEGER
		if(this.BetRates != null){
			for(let i in this.BetRates){
				if(this.BetRates[i] > betRate){
					betRate = this.BetRates[i]
				}
			}
		}
		// 下注金額
		let betMoney = Number.MAX_SAFE_INTEGER
		for(let i in this.BetMoneys){
			if(this.BetMoneys[i] > betMoney){
				betMoney = this.BetMoneys[i]
			}
		}

		return betRate * betMoney
	},

	//////////////////////////////////////////////////////////////////////////////    
	/** 取得BigWin指定階段的金額
	 *  @param {number} index 階段(0:big win, 1:super win, 2: mega win, 3:super mega win)
	*/
	GetBigWinStepByIndex(index){
		if(this.BigWinStep[index] != null){
			return this.BigWinStep[index] * this.GetTotalBetMoney()
		}
		return Number.MAX_SAFE_INTEGER
	},
	/** 取得指定金額為BigWin的哪個階段
	 *  @param {number} index 階段(0:big win, 1:super win, 2: mega win, 3:super mega win)
	*/
	GetBigWinStepByMoney(money){
		let stepIndex = -1
		for(let i in this.BigWinStep){
			if(this.GetBigWinStepByIndex(i) <= money){
				stepIndex = i
			}
		}
		return stepIndex
	},
	//////////////////////////////////////////////////////////////////////////////    
    /** 取得金額跑碼表的時間 
	 *  @param {number} money 獲得金額(跑分數值)
	*/
	GetMoneyShowTimer(money){
		let timer = this.MoneyTimeByRate * money / this.GetTotalBetMoney()
		return timer
	},
	////////////////////////////////////////////////////////////////////////////// 
	/** 紀錄盤面符號世界位置 
	 * @param {number} reelIndex 輪軸索引值(由左至右，1~5)
	 * @param {number} rowIndex 行索引值(由上到下，1~)
	 * @param {cc.Vec2} position 世界座標位置
	*/
	SetSlotSymbolWorldPosition(reelIndex, rowIndex, position){
		if(this.symbolPosition == null){
			this.symbolPosition = new Map()
		}
		let key = reelIndex.toString() + rowIndex.toString()
		this.symbolPosition.set(key, position)
	},
	/** 取得盤面符號世界位置
	 * @param {number} reelIndex 輪軸索引值(由左至右，1~5)
	 * @param {number} rowIndex 行索引值(由上到下，1~)
	 */
	GetSlotSymbolWorldPosition(reelIndex, rowIndex){
		let key = reelIndex.toString() + rowIndex.toString()
		if (this.symbolPosition.has(key)){
			let position = this.symbolPosition.get(key);
			return position
		}

		return this.symbolPosition
	},
	/** 取得盤面符號Local位置 
	 * @param {number} reelIndex 輪軸索引值(由左至右，1~5)
	 * @param {number} rowIndex 行索引值(由上到下，1~)
	 * @param {cc.Node} parent 父物件
	 */
	GetSlotSymbolLocalPosition(reelIndex, rowIndex, parent){
		let key = reelIndex.toString() + rowIndex.toString()
		if (this.symbolPosition.has(key)){
			let position = this.symbolPosition.get(key);
			return GameG.WorldConvertLocalPointAR(parent, position)
		}
		return this.symbolPosition
	},
	////////////////////////////////////////////////////////////////////////////// 
	/** 設定獎金池 
	 * @param {WLZBJP_MSG_JackpotPool} data 封包:CSDJP_JackpotPoolRetID = 22004
	*/
	SetJackpotPool(data){
		if(this.jackpotPool == null){
			this.jackpotPool = {}
		}
		for(let i in data){
			let name = data[i].Name
			this.jackpotPool[name] = data[i]
		}
	},

	/** 取得指定獎金池的資訊
	 * @param {string} name 獎金池名稱(Grand,Major,Minor,Mini)
	*/
	GetJackpotPool(name){
		if(name == null){
			return this.jackpotPool
		}
		return this.jackpotPool[name]
	},

	/** 取得指定獎金池的獎金
	 * @param {string} name 獎金池名稱(Grand,Major,Minor,Mini)
	*/
	GetJackpotPoolMoney(name){
		let userBet = this.GetTotalBetMoney()
		let maxBet = this.GetMaxBetMoney()

		let data = this.jackpotPool[name]
		if(data != null){
			if(data.IsLink == true){
				return data.Money
			}
			return Math.ceil(data.Money * userBet / maxBet)
		}

		return 0
	},
	////////////////////////////////////////////////////////////////////////////// 
	SetGameResult(data){
		this.resultData = data
	},
	/** 取得遊戲結果的輪軸資料
	 * @param {number} reelIndex 輪軸索引值(由左至右，1~5)
	 * @param {number} rowIndex 行索引值(由上到下，1~)
	 */
	GetGameResultReel(reelIndex, rowIndex){
		let data = this.resultData.ReelResult
		for(let i in data){
			if(data[i].Position.Reel == reelIndex){
				if(data[i].Position.Row == rowIndex){
					return data[i]
				}
			}
		}
		return null
	},
	//////////////////////////////////////////////////////////////////////////////
	/** 設定剩餘免費遊戲資料 [free game]
	 *  @param {WLZBJP_MSG_LeftFreeGameData} receiveMsg 封包: CSDJP_LeftFreeGameID = 20005
	*/
	SetLeftFreeGame(data){
		this.leftFreeGame = data
	},
	/** 取得指定編號的免費遊戲資料 */
	GetFreeGameDataById(id){
		for(let i in this.FreeGames){
			if(this.FreeGames[i].ID == id){
				return this.FreeGames[i]
			}
		}
		return null
	},
	//////////////////////////////////////////////////////////////////////////////   
	/** 設定選擇遊戲資料  [select game]
	 * @param {WLZBJP_MSG_ChooseGameOptions} data 封包: CSDJP_SelectGameOptionsID = 20008
	*/
	SetGameOptions(data){
		this.gameOptions = data
	},
	/** 取得指定索引值的選擇遊戲資料
	 * @param {number} optionId 編號
	 */
	GetGameOption(optionId){
		let data = this.gameOptions.Options
		for(let i in data){
			if(data[i].ID == optionId){
				return data[i]
			}
		}
		return null
	},
	////////////////////////////////////////////////////////////////////////////// 
	GetGameTypeName(index){
		if(index == 0){ return "Main Game"}
		else if(index == 1){ return "Free Game"}
		else if(index == 2){ return "Select Game"}
		else if(index == 3){ return "Bonus Game"}
	},
	// 0.main, 1.free, 2.select 3.bonus
	GetGameTypeIndex(){
		return this.gameTypeIndex
	},

	SetGameTypeIndex(typeIndex){
		//console.error("-------------" + this.GetGameTypeName(this.gameTypeIndex) + " > " + this.GetGameTypeName(typeIndex))
		this.gameTypeIndex = typeIndex
	},

	//////////////////////////////////////////////////////////////////////////////
	/** 設定獎勵遊戲資料 [bonus game]
	 *  @param {WLZBJP_MSG_BonusGame} data 封包: CSDJP_BonusGameID = 20009
	*/
	SetBonusGame(data){
		this.bonusGame = data
	},

	/** 取得獎勵遊戲資料的最後個獎勵 */
	GetBonusGameLastRecordID(){
		let data = null
		for(let i in this.bonusGame.Records){
			data = this.bonusGame.Records[i].ID
		}
		return data
	},	

};

module.exports = GameData
