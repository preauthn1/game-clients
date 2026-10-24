var G = require("Global")
var GameG = null
// bonus game
// function SetBonusGame(data)
	// BonusDetail = data.Records
	// this.BonusMoney = data.WinMoney
	// BonusCount = data.Count
	// BonusAll = data.All
// end

/** 用途: 遊戲內存資料 */
var GameData = {
	extends: cc.Component,

	Init(){
		GameG = require("GameGlobal")

		this.IDTitle = "ID:"	
		
		this.BigWinStep = []
		this.AutoSpinOption = []
		this.SymbolPayTable = []
	// this.SymbolPayTable["s1"] = {}
	// this.SymbolPayTable["s1"].title = "獎勵符號"
	// this.SymbolPayTable["s1"].content = "画面出现3或更多奖励符号时，会进入糖果游戏，并获得高额彩金，符号只出现在2到5戏轴。"
	// this.SymbolPayTable["w1"] = {}
	// this.SymbolPayTable["w1"].title = "百搭"
	// this.SymbolPayTable["w1"].content = "百搭可以代表任何符号，除了奖励符号。如果转到5个百搭您将获得Jackpot大奖。"
		
		this.ShowReelSymbolDetail = false //顯示輪軸內的符號資訊
	//this.ShowReelSymbolDetail = true //顯示輪軸內的符號資訊
		
	// 0: 結算的時候到指定位置 (symbolID為初始塞入值)
	// 1: 結算時直接將符號塞入(symbolID為結果值，其餘為空值)
		this.SpinDataMode = 1 //輪軸資料處理模式
		
		this.SpinLoopTimer = 0.8	//轉動持續最少時間(>=0)
		
		this.GapTimer_Carousel = 1.0 //結算輪播賠付線[間隔時間](>0)
		
		this.SpinMoveTimer = 100 // [UISlotReel] 輪軸轉動每幀移動速度
		this.SpinPercent = 0.1 // [UISlotReel] 輪軸轉動每幀移動每隔符號的百分比
		this.GapTimer_Spin = 0.33 // [UISlot] 每個輪軸間格動畫時間
		this.GapTimer_NearWin = 1.9 // [UISlot] 每個輪軸間格聽牌時間
		
		this.MoneyTimeByRate = 0.04 //表演金額時間倍數
		this.JackpotTime = 4 // [UIJackpot] jackpot表演時間
		
		this.FreeSpinCount = 0 //免費次數(0.付費)
		this.FreeSpinTotalCountdown = 60 // [UIFreeSpin] 幾秒後自動開始
		this.FreeSpinShowCountdown = 20 // [UIFreeSpin] 倒數顯示時間	
		this.BonusMoney = 0
		this.BonusTotalCountdown = 60 // [UIBonusGame] 幾秒後自動翻牌
		this.BonusShowCountdown = 20 // [UIBonusGame] 倒數顯示時間
		
		this.PayLineOffset = false // [UIPayLine] 賠付線偏移
		
	//this.AutoSpinOption = {10,50,100,200}	
	},

	/** 設定遊戲基本資料
	 * @param {ALD_MSG_Setting} data 封包:ALD_SettingID = 20001
	 */
	SetSetting(data){	
		this.RowCounts = data.RowCounts //顯示結算的行數	
		this.TotalPayLine = data.TotalPayLine //總共多少賠付線	
		this.BigWinStepBase = data.BigWinStep //BigWin各階段演出條件	
		this.BetMoneys = data.BetMoneys //可下注列表	
		this.PayLineMode = data.PayLineMode //賠付類型 (0.非全線 1.全線)
		this.ReelSetting = data.ReelSetting //輪軸資料
		this.PayLines = data.PayLines //所有賠線
		this.MinCarryMoney = data.MinCarryMoney //最小攜帶金額
		this.UnitPrefix = data.UnitPrefix //單位縮寫對照
		this.SetSymbolPayTable(data.SymbolPayTable)
		this.SetDescriptions(data.Descriptions)
	},

	SetDescriptions(data){
		for(let k in (data)){ 
			let v = data[k] 

			//派彩線說明文字
			if(v.Name == "payline"){
				this.PayLineDesc = v.Desc.replace("\\n","\n")
			}
		}
	},

	SetSymbolPayTable(data){
		for(let i in data){	
			let symbolName = data[i].Symbol.SymbolName
			this.SymbolPayTable[symbolName] = this.SymbolPayTable[symbolName] || {}
			this.SymbolPayTable[symbolName].symbolName = symbolName
			this.SymbolPayTable[symbolName].detail = this.SymbolPayTable[symbolName].detail || []
			let count = data[i].Count
			this.SymbolPayTable[symbolName].detail[count] = {}
			this.SymbolPayTable[symbolName].detail[count].count = data[i].Count
			this.SymbolPayTable[symbolName].detail[count].typeId = data[i].Type
			this.SymbolPayTable[symbolName].detail[count].payout = data[i].Payout
			this.SymbolPayTable[symbolName].title = GameG.GetLocalizedString("symbol_title_" + symbolName)
			this.SymbolPayTable[symbolName].desc = GameG.GetLocalizedString("symbol_desc_" + symbolName)
		}	
	},

	/** 取得符號賠附表資料
	 ** 介面: [UIPayTable][UISymbolDetail]
	 * @param {string} symbolName 符號名稱
	 * @param {number} detailCount 賠付數量
	 */
	GetSymbolPayDetail(symbolName,detailCount){
		if(this.SymbolPayTable[symbolName] == null){
			return null
		}
		
		if(this.SymbolPayTable[symbolName].detail[detailCount] == null){
			return null
		}
		
		let data = {}
		data.count = this.SymbolPayTable[symbolName].detail[detailCount].count
		data.typeId = this.SymbolPayTable[symbolName].detail[detailCount].typeId
		
		let payout = this.SymbolPayTable[symbolName].detail[detailCount].payout
		if(data.typeId == "pickgame"){
			data.payout = string.format("%.0f b", payout)
	} 
	else if(data.typeId == "jackpot"){

			data.payout = string.format("a")
	} 
	else if(data.typeId == "chip"){

			data.payout = GameG.FormatUnit(payout * this.GetChipMoney())
	} 
	else{
			data.payout = payout
		}
		
		return data
	},

	/** 設定遊戲狀態
	 * @param {ALD_MSG_Status} data 封包:ALD_StatusID = 20002
	 */ 
	SetState(data){
		this.State = data 
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

// free spin
	SetSpinFreeOrPay(data){
		this.FreeSpinCount = data.FreeCount // 免費次數(0.付費)
		this.FreeReelSetting = data.ReelSetting //動態輪軸
	},

	SetGameResult(data){
		this.ResultDetail = data
		this.ResultIndex = 0
	},

	GetBetResult(){
		let data = {}
		data.Money = this.ResultDetail.SlotResult[this.ResultIndex].SlotResult.BetMoney
		data.Ret = 0
		
		return data
	},

	GetGameResult(){
		let data = {}
		data.BetMoney = this.ResultDetail.SlotResult[this.ResultIndex].SlotResult.BetMoney
		data.WinMoney = this.ResultDetail.SlotResult[this.ResultIndex].SlotResult.WinMoney
		data.FinalMoney = this.ResultDetail.SlotResult[this.ResultIndex].SlotResult.FinalMoney
		data.JackpotMoney = this.ResultDetail.SlotResult[this.ResultIndex].SlotResult.JackpotMoney
		data.ReelResult = this.ResultDetail.SlotResult[this.ResultIndex].InitResult
		data.ExpandOrder = this.ResultDetail.SlotResult[this.ResultIndex].ExpandOrder
		data.PayGroups = this.ResultDetail.SlotResult[this.ResultIndex].SlotResult.PayGroups
		data.IsExpand = this.ResultDetail.SlotResult[this.ResultIndex].IsExpand
		data.ExpandReel = this.ResultDetail.SlotResult[this.ResultIndex].ExpandReel
		
		this.RecoverReelResult = this.ResultDetail.SlotResult[this.ResultIndex].SlotResult.ReelResult
		
		this.ResultIndex = this.ResultIndex +1
		if(this.ResultIndex >= this.ResultDetail.SlotResult.length){
			this.ResultDetail = null
		}
		
		return data
	},

	/** 符號狀態切換
	 ** 介面: [UISlotReel]
	 ** 用途: 符號依照不同狀況，給予對應符號
	 * @param {string} symbolName 符號名稱
	 */ 
	ChangeSymbolName(symbolName){	
		return symbolName
	},

// 黃金符號
	SetGoldSymbol(data){
		this.GoldenDetail = data.GoldenDetail
	},

// 目前的籌碼金額
	SetChipMoney(money){
		this.chipMoney = money	
		this.MinBigWinStep = Number.MAX_SAFE_INTEGER
		
		// BigWin各階段演出條件
		for(let k in (this.BigWinStepBase)){ 
			let v = this.BigWinStepBase[k] 

			this.BigWinStep[k] = this.BigWinStepBase[k] * this.GetBetMoney()
			if(this.BigWinStep[k] < this.MinBigWinStep)
				this.MinBigWinStep = this.BigWinStep[k]
		}
	},

// 目前的籌碼金額
	GetChipMoney(){
		return this.chipMoney
	},

// 目前的下注倍率
	GetBetMoney(){
		let betMoney = this.chipMoney
		if(this.PayLineMode == 0){
			betMoney = this.chipMoney * this.TotalPayLine
		}
		
		return betMoney
	},

	/** 目前的下注總金額 */ 
	GetTotalBetMoney(){
		let total = this.chipMoney
		if(this.PayLineMode == 0){
			total = this.chipMoney * this.TotalPayLine
		}
		
		return total
	},

	/** 取得下注的最大總金額 */ 
	GetMaxBet(){
		let goldMax = 1
		if(this.GoldenDetail != null){
			for(let  i = 1;  i <= this.GoldenDetail.length; ++ i){
				if(this.GoldenDetail[i].Credits > goldMax){
					goldMax = this.GoldenDetail[i].Credits
				}
			}
		}
		
		let betMax = 1
		for(let  i = 1;  i <= this.BetMoneys.length; ++ i){
			if(this.BetMoneys[i] > betMax){
				betMax = this.BetMoneys[i]
			}
		}
		
		let payLine = 1
		if(this.PayLineMode == 0){
			payLine = this.TotalPayLine
		}
		
		return goldMax * betMax * payLine
	},

	/** 取得下注的最小總金額 */
	GetMinBet(){
		let goldMin = 9999999999999
		if(this.GoldenDetail != null){
			for(let  i = 1;  i <= this.GoldenDetail.length; ++ i){
				if(this.GoldenDetail[i].Credits < goldMin){
					goldMin = this.GoldenDetail[i].Credits
				}
			}
		} 
		else{
			goldMin = 1
		}
		
		let betMin = 9999999999999
		for(let  i = 1;  i <= this.BetMoneys.length; ++ i){
			if(this.BetMoneys[i] < betMin){
				betMin = this.BetMoneys[i]
			}
		}
		
		let payLine = 1
		if(this.PayLineMode == 0){
			payLine = this.TotalPayLine
		}
		
		return goldMin * betMin * payLine
	},

	//取得BigWin最小階段
	GetMinBigWinStep(){
		return this.MinBigWinStep
	},

//斷線重連資料
	SetUserRecover(){
		
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
		console.error("SetSlotSymbolWorldPosition",reelIndex)
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
		console.error("GetSlotSymbolLocalPosition",reelIndex)
		let key = reelIndex.toString() + rowIndex.toString()
		if (this.symbolPosition.has(key)){
			let position = this.symbolPosition.get(key);
			return GameG.WorldConvertLocalPointAR(parent, position)
		}
		return this.symbolPosition
	},
	////////////////////////////////////////////////////////////////////////////// 

};

module.exports = GameData
