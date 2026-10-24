var GameG = null

/** 用途: 遊戲內存資料 */
var GameData = {
	extends: cc.Component,

	Init(){
		GameG = require("GameGlobal")

		this.ShowLogProcess = false //顯示過程訊息

		this.ShowReelSymbolDetail = false //顯示輪軸內的符號資訊
		//this.ShowReelSymbolDetail = true //顯示輪軸內的符號資訊
				
		this.SpinLoopTime = 0.8	//轉動持續最少時間(>=0)
			
		this.IntervalCarousel = 1.0 //結算輪播賠付線[間隔時間](>0)
		
		this.SpinMoveSpeed = 100 // [UISlotReel] 輪軸轉動每幀移動速度
		this.SpinMoveDistance = 25 // [UISlotReel] 輪軸轉動每幀移動每隔符號的百分比
		this.OutBackDistance = 35 // [UISlotReel] 停輪回拉的距離符號的百分比
		this.ReelSpinNormalTime = 0.33 // [UISlot] 每個輪軸間格動畫時間
		this.ReelSpinNearWinTime = 1.9 // [UISlot] 每個輪軸間格聽牌時間
		
		this.MoneyTimeByRate = 0.04 //表演金額時間倍數
		this.WinMoneyStayTime = 2.0 //顯示獲得金額停留時間

		this.BonusGameCountdownTotalTime = 60 //[UIBonusGame] 總倒數時間
		this.BonusGameCountdownShowTime = 20 //[UIBonusGame] 顯示倒數時間

		this.SelectModeCountdownTotalTime = 60 //[UISelectMode] 總倒數時間
		this.SelectModeCountdownShowTime = 20 //[UISelectMode] 顯示倒數時間
		
		this.betRate = 1 // 下注倍率
		this.gameTypeIndex = 0 // 目前遊戲模式

		this.InitGameType()
	},

	/** 設定遊戲基本資料
	 * @param {XMBX_MSG_Setting} data 封包:XMBX_SettingID = 20001
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
				if(data.Type == "addfreespins"){
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
				else if(data.Type == "chipXrate"){
					payout = payout * this.GetTotalBetMoney()
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

	/** 取得指定符號的金球倍率資料
	 * @param {string} symbolName 符號名稱
	 */
	GetGoldBallData(symbolName){
		for(let i in this.GoldBallSetting){
			if(this.GoldBallSetting[i].Symbol == symbolName){
				return this.GoldBallSetting[i]
			}
		}
		return null
	},

	/** 設定遊戲狀態
	 * @param {XMBX_MSG_Status} data 封包:XMBX_StatusID = 20002
	 */ 
	SetState(data){
		this.State = data.State
	},

	/** 設定玩家資料 
	 * @param {GameUser} data 玩家資料
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
		if(symbolName.indexOf("g") >= 0){
			symbolName = "g1"
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
	GetMoneyShowTime(money){
		let time = this.MoneyTimeByRate * money / this.GetTotalBetMoney()
		return time
	},
	////////////////////////////////////////////////////////////////////////////// 
	/** 取得盤面輪軸數量 */
	GetSlotReelCount(){
		return this.ReelSetting.length;
	},
	/** 取得盤面輪軸裡面符號數量 */
	GetSlotRowCount(){
		if(this.leftFreeGame != null){
			console.error(this.leftFreeGame)
			let freeData = this.GetFreeGameDataById(this.leftFreeGame.ID)
			if(freeData != null){
				return freeData.RowNum;
			}
		}
		return this.RowCounts;
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
	 * @param {XMBX_MSG_JackpotPool} data 封包:XMBX_JackpotPoolRetID = 22004
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
	 * @param {number} id 獎金池編號
	*/
	GetJackpotPoolById(id){
		for(let i in this.jackpotPool){
			if(this.jackpotPool[i].ID == id){
				return this.jackpotPool[i]
			}
		}
		return null		
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
	/** 初始化遊戲類型 */
	InitGameType(){
		this.EnumGameType = cc.Enum({
			MainGame: 0,
			FreeGame: 1,
			SelectGame: 2,
			BonusGame: 3,
			LightningGame: 4,
		})
		
		this.SetGameTypeIndex(-1)
	},
	/** 取得當前遊戲類型 (0:main, 1:free, 2:select 3:bonus 4:lightning)
	 ** 對應: EnumGameType
	*/
	GetGameTypeIndex(){
		return this.gameTypeIndex
	},
	/** 設定當前遊戲類型 
	 ** 對應: EnumGameType
	* @param {number} typeIndex 遊戲類型(0:main, 1:free, 2:select 3:bonus 4:lightning)
	*/
	SetGameTypeIndex(typeIndex){
		this.gameTypeIndex = typeIndex
		// 只記錄遊戲模式，會有 [mg > jp] 和 [fg > jp] 的情況
		if(typeIndex == this.EnumGameType.MainGame){
			this.gameModeIndex = typeIndex
		}
		else if(typeIndex == this.EnumGameType.FreeGame){
			this.gameModeIndex = typeIndex
		}
		else if(typeIndex == this.EnumGameType.LightningGame){
			this.gameModeIndex = typeIndex
		}
		//---------------------
		// 開發用訊息
		let content = "%c[遊戲模式] " + this.EnumGameType[this.gameModeIndex] + " [遊戲類型] " + this.EnumGameType[this.gameTypeIndex]
		GameG.Log(content,'background:#FFE5D4; color:#000000; font-size:120%')
	},
	/** 取得遊戲模式 (0:main, 1:free, 4:lightning)
	 ** 對應: EnumGameType
	*/
	GetGameModeIndex(){
		return this.gameModeIndex
	},
	//////////////////////////////////////////////////////////////////////////////
	/** 設定遊戲結果資料 [main game].[free game]
	 * @param {XMBX_MSG_GameResult} data 封包:XMBX_GameResultID = 20004
	 */
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
	 *  @param {XMBX_MSG_LeftFreeGameData} receiveMsg 封包: XMBX_LeftFreeGameID = 20005
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
	 * @param {XMBX_MSG_ChooseGameOptions} data 封包: XMBX_GameOptionsID = ?
	*/
	SetGameOptions(data){
		this.gameOptions = data
	},
	/** 取得指定索引值的選擇遊戲資料
	 * @param {number} optionId 編號
	 */
	GetGameOptionById(optionId){
		let data = this.gameOptions.Options
		for(let i in data){
			if(data[i].ID == optionId){
				return data[i]
			}
		}
		return null
	},
	//////////////////////////////////////////////////////////////////////////////
	/** 設定獎勵遊戲資料 [bonus game]
	 *  @param {XMBX_MSG_BonusGame} data 封包: XMBX_BonusGameID = 22005
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
	////////////////////////////////////////////////////////////////////////////// 
	/** 設定Lightning的準備資料 [lightning game]
	 *  @param {XMBX_MSG_LightningPrepare} data 封包: XMBX_LightningPrepareID = 10001
	*/
	SetLightningPrepare(data){
		this.lightningPrepare = data
	},
	/** 取得Lightning的準備資料-過去的中獎內容
	 * @param {number} reelIndex 輪軸索引值(由左至右，1~5)
	 * @param {number} rowIndex 行索引值(由上到下，1~)
	*/
	GetLightningLockSymbols(reelIndex, rowIndex){
		if(this.lightningPrepare != null){
			let data = this.lightningPrepare.LockSymbols			
			for(let i in data){
				if(data[i].Position.Reel != reelIndex){
					continue;
				}
				if(data[i].Position.Row != rowIndex){
					continue;
				}
				return data[i]
			}
		}
		return null
	},
	/** 設定Lightning的結果資訊
	 *  @param {XMBX_MSG_LightningResult} data 封包: XMBX_LightningResultID = 10002
	*/
	SetLightningResult(data){
		this.lightningResult = data
		this.SetGameResult(data)
	},
	/** 取得Lightning鎖輪上面的獲得金額 */
	GetLightningResultWinMoeny(){
		let totalMoney = 0
		if(this.lightningResult != null && this.lightningResult.PayGroups != null){
			let data = this.lightningResult.PayGroups
			for(let i in data){
				totalMoney = totalMoney + data[i].WinMoney
			}
		}
		return totalMoney
	},
};

module.exports = GameData
