var HallG = require("Global")
var GameG = null

/** 用途: 遊戲內存資料 */
var GameData = {
	extends: cc.Component,

	Init(){
		GameG = require("GameGlobal")
		this.IDTitle = "ID:"	
		
		this.BigWinStep = []
		this.AutoSpinOption = [] 
		this.SymbolPayTable = []
		
		this.ShowReelSymbolDetail = false //顯示輪軸內的符號資訊
		//this.ShowReelSymbolDetail = true //顯示輪軸內的符號資訊
		
	// 0: 結算的時候到指定位置 (symbolID為初始塞入值)
	// 1: 結算時直接將符號塞入(symbolID為結果值，其餘為空值)
		this.SpinDataMode = 1 //輪軸資料處理模式
		
		this.SpinLoopTimer = 0.8	//轉動持續最少時間(>=0)
			
		this.GapTimer_Carousel = 1.0 //結算輪播賠付線[間隔時間](>0)
		
		this.SpinMoveTimer = 100 // [UISlotReel] 輪軸轉動每幀移動速度
		this.SpinPercent = 0.15 // [UISlotReel] 輪軸轉動每幀移動每隔符號的百分比
		this.GapTimer_Spin = 0.33 // [UISlot] 每個輪軸間格動畫時間
		this.GapTimer_NearWin = 1.9 // [UISlot] 每個輪軸間格聽牌時間
		
		this.MoneyTimeByRate = 0.04 //表演金額時間倍數
		this.JackpotTime = 4 // [UIJackpot] jackpot表演時間
		
		this.CountdownTimeMax = 60 // [計時器] 幾秒後自動開始
	// this.CountdownTimeMax = 1 // [計時器] 幾秒後自動開始
		this.CountdownTimeShow = 20 // [計時器] 倒數顯示時間
			
		this.BonusMoney = 0
		this.BonusTotalCountdown = 5 // [UIBonusGame] 幾秒後自動翻牌
		this.BonusShowCountdown = 5 // [UIBonusGame] 倒數顯示時間
		
		this.BetRateIndex = 1
		
		this.FreeEachCountMoney = 0 // [UIFreeSpin] 單次金額
		this.FreeSelectIndex = 0 // [UIFreeSpin] 選擇神獸索引
		this.GoldSymbolStep = 1
		this.GoldSymbolCredits = 1
		
		this.RewardStep = [ 250, 500, 750, 1000 ]
	},

	SetSetting(data){
		this.PayLineMode = data.PayLineMode //賠付類型 (0.非全線 1.全線)
		this.TotalPayLine = data.TotalPayLine //總共多少賠付線
		this.MinCarryMoney = data.MinCarryMoney //最小攜帶金額
		this.RowCounts = data.RowCounts //顯示結算的行數	
		this.BetMoneys = data.BetMoneys //可下注列表	
		this.BetRates = data.BetRates //下注倍率	
		this.BigWinStepBase = data.BigWinStep //BigWin各階段演出條件
		this.ReelSetting = data.ReelSetting //輪軸表演設置
		this.FreeGameInfo = data.FreeGames //免費遊戲設置
		this.PayLines = data.PayLines //所有賠線
		this.Descriptions = data.Descriptions //單位縮寫對照
		this.UnitPrefix = data.UnitPrefix //單位縮寫對照
		this.GoldBallSetting = data.GoldBallSetting //金球倍率設定
		this.SetGoldBall(data.GoldBallSetting) //設定金球倍率
		this.SetSymbolPayTable(data.SymbolPayTable)
	},

	SetGameReelSetting(data){
		this.GameReelSetting = data.GameReels
	},

	SetSymbolPayTable(data){
		for(let i in data){	
			let symbolName = data[i].Symbol.SymbolName
			this.SymbolPayTable[symbolName] = this.SymbolPayTable[symbolName] || []
			this.SymbolPayTable[symbolName].symbolName = symbolName
			this.SymbolPayTable[symbolName].detail = this.SymbolPayTable[symbolName].detail || []
			let count = data[i].Count
			this.SymbolPayTable[symbolName].detail[count] = []
			this.SymbolPayTable[symbolName].detail[count].count = data[i].Count
			this.SymbolPayTable[symbolName].detail[count].typeId = data[i].Type
			this.SymbolPayTable[symbolName].detail[count].payout = data[i].Payout
			this.SymbolPayTable[symbolName].title = GameG.GetLocalizedString("symbol_title_" + symbolName)
			this.SymbolPayTable[symbolName].desc = GameG.GetLocalizedString("symbol_desc_" + symbolName)			
		}
	},

	GetSymbolPayDetail(symbolName,detailCount){
		if(this.SymbolPayTable[symbolName] == null){
			return null
		}
		
		if(this.SymbolPayTable[symbolName].detail[detailCount] == null){
			return null
		}
		 
		let data = []
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

			data.payout = GameG.FormatUnit(payout * this.GetBetMoney())
		}
		
		return data
	},

// 遊戲狀態 0.下注状态 1.开奖状态 2.开奖动画 3.结算动画 4.等待游戏开始
	SetState(data){
		this.State = data 
	},

// 玩家資料
	SetUserData(data){
		console.log(data)
		this.User = []
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

// 回合開始
	SetGameStart(){
	
	},

// 回合結束
	SetGameEnd(){
	
	},

// 設定Lightning準備
	SetLightningPrepare(data){
		this.LightningPrepare = data
	},

// 剩餘免費遊戲資訊
	SetLeftFreeGameData(data){
		this.FreeGame = data
	},

// bonus game
	SetBonusGame(data){
		this.BonusGame = []
		this.BonusGame.Records = data.Records
		this.BonusGame.Count = data.Count
		this.BonusGame.WinMoney = data.WinMoney
		this.BonusGame.All = data.All
		this.BonusGame.BetMoney = data.BetMoney
		this.BonusGame.BetRate = data.BetRate
	},

// 符號狀態切換
	ChangeSymbolName(symbolName){	
		if(this.GoldSymbolStep == 1){
			if(symbolName == "p15"){ symbolName = "p5" }
			if(symbolName == "p14"){ symbolName = "p4" }
			if(symbolName == "p13"){ symbolName = "p3" }
			if(symbolName == "p12"){ symbolName = "p2" }
		} 
		else if(this.GoldSymbolStep == 2){

			if(symbolName == "p5"){ symbolName = "p15" }
			if(symbolName == "p14"){ symbolName = "p4" }
			if(symbolName == "p13"){ symbolName = "p3" }
			if(symbolName == "p12"){ symbolName = "p2" }
		} 
		else if(this.GoldSymbolStep == 3){

			if(symbolName == "p5"){ symbolName = "p15" }
			if(symbolName == "p4"){ symbolName = "p14" }
			if(symbolName == "p13"){ symbolName = "p3" }
			if(symbolName == "p12"){ symbolName = "p2" }
		} 
		else if(this.GoldSymbolStep == 4){

			if(symbolName == "p5"){ symbolName = "p15" }
			if(symbolName == "p4"){ symbolName = "p14" }
			if(symbolName == "p3"){ symbolName = "p13" }
			if(symbolName == "p12"){ symbolName = "p2" }
		} 
		else if(this.GoldSymbolStep == 5){

			if(symbolName == "p5"){ symbolName = "p15" }
			if(symbolName == "p4"){ symbolName = "p14" }
			if(symbolName == "p3"){ symbolName = "p13" }
			if(symbolName == "p2"){ symbolName = "p12" }
		}
		return symbolName
	},

// 目前的黃金符號階段
	SetGoldenSymbolStep(step){
		this.GoldSymbolStep = step
	},

// 目前的黃金符號金額
	SetGoldenSymbolCredits(credits){
		this.GoldSymbolCredits = credits
	},

// 目前的籌碼金額
	SetChipMoney(money){
		this.chipMoney = money
		this.MinBigWinStep = Number.MAX_SAFE_INTEGER
		
		// BigWin各階段演出條件
		for(let k in (this.BigWinStepBase)){ 
			let v = this.BigWinStepBase[k] 

			this.BigWinStep[k] = this.BigWinStepBase[k] * this.GetTotalBetMoney()
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

// 目前的下注總倍率
	GetTotalBetMoney(){
		let total = this.chipMoney *this. GoldSymbolCredits
		if(this.PayLineMode == 0){
			total = this.chipMoney * this.TotalPayLine
		}
		
		return total
	},

// 取得可下注的最大倍數
	GetMaxBet(){
		let goldMax = 1
		if(this.BetRates != null){
			for(let  i = 1;  i <= this.BetRates.length; ++ i){
				if(this.BetRates[i] > goldMax){
					goldMax = this.BetRates[i]
				}
			}
		}
		let betMax = 1
		for(let  i = 1;  i <= this.BetMoneys.length; ++ i){
			if(this.BetMoneys[i] > betMax){
				betMax = this.BetMoneys[i]
			}
		}
		return goldMax * betMax
	// local payLine = 1
	// if(PayLineMode == 0)then
		// payLine = TotalPayLine
	// end
		
	// return betMax * payLine
	},

// 取得可下注的最小倍數
	GetMinBet(){	
		let betMin = 9999999999999
		for(let  i = 1;  i <= this.BetMoneys.length; ++ i){
			if(this.BetMoneys[i] < betMin){
				betMin = this.BetMoneys[i]
			}
		}
		
		let payLine = 1
		if(PayLineMode == 0){
			payLine = this.TotalPayLine
		}
		
		return betMin * payLine
	},

	SetBetRateIndex(index){
		this.BetRateIndex = index
	},

	GetBetRate(){
		return this.BetRates[this.BetRateIndex -1]
	},

//斷線重連資料
	SetUserRecover(data){
		
	},

// 取得金額跑碼表的時間
	GetMoneyShowTimer(money){
		let timer = this.MoneyTimeByRate * money / this.GetTotalBetMoney()
		return timer
	},

// 設定Camera縮放
	SetCameraScale(value){
		CameraScale = value
	},

// 設定金球
	SetGoldBall(data){
		this.GoldBall = []
		for(let i in (data)){ 
			let j = data[i] 

			this.GoldBall[j.Symbol] = j
		}
	},

// 取得金球
	GetGoldBallRate(symbol){
	
		let betMoney = this.GetBetMoney()
		
		if(betMoney == null){
			betMoney = 1
		}
		if(this.GoldBall[symbol].Value == null){
			return 0
		}
		return this.GoldBall[symbol].Value * betMoney
	},

	SetSelectGameOptionsData(data){
		let self = this
		this.SelectGameOptionsData = data
	// 轉換Data (Json)
		if(this.SelectGameOptionsData.Data != null){
			JSON.parse(this.SelectGameOptionsData.Data,function(k, money){
				if(k == "GMoney"){
					self.SelectGameOptionsData.Data = {}
					self.SelectGameOptionsData.Data.GMoney = money
					self.SetFreeEachCountMoney(money)
				}
			})
			
		}
	},

// 設定Free單次金額
	SetFreeEachCountMoney(value){
		this.FreeEachCountMoney = value
	},

// 取得Free單次金額
	GetFreeEachCountMoney(){
		return this.FreeEachCountMoney
	},

// 設定Lightning金球狀態
	SetLightningGoldBallState(isShow){
		this.LightningGoldBallIsShow = isShow
	},

	SetJackpotPool(data){
		this.jackpotPool = data.Jackpots
	},

	GetJackpotPoolMoney(Name){
		for(let i in this.jackpotPool){
			let data = this.jackpotPool[i]
			if(data.Name == Name){
				return data.Money
			}
		}

		return 0
	},

	GetJackpotPoolProgressive(Name){
		let Progressive = ["Grand","Major"];
		let userBet = this.GetTotalBetMoney()
		let maxBet = this.GetMaxBet()

		for(let i in this.jackpotPool){
			let data = this.jackpotPool[i]
			if(data.Name == Name){
				if(Progressive.includes(Name)){
					return data.Money
				}
				return Math.ceil(data.Money * userBet / maxBet)
			}
		}

		return 0
	},

	//取得BigWin最小階段
	GetMinBigWinStep(){
		return this.MinBigWinStep
	},
};

module.exports = GameData
