var HallG = require("Global")
var GameG = null

var GameData = {
	extends: cc.Component,

	Init()
	{
		GameG = require("GameGlobal")
		
		this.IDTitle = "ID:"	
		
		this.User = []
		this.BigWinStep = []
		this.AutoSpinOption = []
		this.SymbolPayTable = []
		
		this.ShowReelSymbolDetail = false //顯示輪軸內的符號資訊
		// ShowReelSymbolDetail = true //顯示輪軸內的符號資訊
		
		// 0: 結算的時候到指定位置 (symbolID為初始塞入值)
		// 1: 結算時直接將符號塞入(symbolID為結果值，其餘為空值)
		this.SpinDataMode = 1 //輪軸資料處理模式
		
		this.SpinLoopTimer = 0.8	//轉動持續最少時間(>=0)
			
		this.GapTimer_Carousel = 1.0 //結算輪播賠付線[間隔時間](>0)
		
		this.SpinMoveTimer = 100 // [UISlotReel] 輪軸轉動每幀移動速度
		this.SpinPercent = 0.2 // [UISlotReel] 輪軸轉動每幀移動每隔符號的百分比
		this.GapTimer_Spin = 0.33 // [UISlot] 每個輪軸間格動畫時間
		this.GapTimer_NearWin = 1.9 // [UISlot] 每個輪軸間格聽牌時間
		
		this.MoneyTimeByRate = 0.026 //表演金額時間倍數
		this.JackpotTime = 4 // [UIJackpot] jackpot表演時間
		
		this.FreeSpinTotalCountdown = 60 // [UIFreeSpin] 幾秒後自動開始
		this.FreeSpinShowCountdown = 20 // [UIFreeSpin] 倒數顯示時間
		this.BonusMoney = 0
		this.BonusTotalCountdown = 60 // [UIBonusGame] 幾秒後自動翻牌
		this.BonusShowCountdown = 20 // [UIBonusGame] 倒數顯示時間
		
		this.UpgradeDoorTimer = 1.5 // [UISlotReel] 升級輪軸關門時間
	},

	SetSetting(data)
	{
		this.PayLineMode = data.PayLineMode //賠付類型 (0.非全線 1.全線)
		this.TotalPayLine = data.TotalPayLine //總共多少賠付線
		this.MinCarryMoney = data.MinCarryMoney //最小攜帶金額
		this.RowCounts = data.RowCounts //顯示結算的行數	
		this.BetMoneys = data.BetMoneys //可下注列表	
		this.BetRates = data.BetRates //下注倍率	
		this.BigWinStepBase = data.BigWinStep //BigWin各階段演出條件
		this.ReelSetting = data.ReelSetting //輪軸表演設置
		this.PayLines = data.PayLines //所有賠線
		this.UnitPrefix = data.UnitPrefix //單位縮寫對照
		this.SetSymbolPayTable(data.SymbolPayTable)
		this.SetDescriptions(data.Descriptions)
		this.SetFreeGames(data.FreeGames)//免費遊戲設置
	},

	SetDescriptions(data)
	{
		this.Descriptions = []
		// for(let k in (data))
		// {
			// let v = data[k] 

			// let index = Descriptions.length +1
			// this.Descriptions[index] = []
			// this.Descriptions[index].Title = data[k].Title
			// this.Descriptions[index].Name = data[k].Name
			// this.Descriptions[index].Desc = string.gsub(data[k].Desc,"\\n","\n")
		// }
	},

	GetDescriptions(name)
	{
		for(let k in (Descriptions))
		{
			let v = Descriptions[k] 

			if(Descriptions[k].Name == name)
			{
				return Descriptions[k]
			}
		}
		return null
	},

	SetGameReelSetting(data)
	{
		this.GameReelSetting = data.GameReels
	},

	GetGameReelSetting(conditionType, conditionValue)
	{
		//	for i=1, GameReelSetting.length do
		for(let  i = 1;  i <=  GameReelSetting.length; ++ i)
		{
			let _conditionType = GameReelSetting[i].ConditionType
			let _conditionValue = GameReelSetting[i].ConditionValue
			if(_conditionType == conditionType)
			{
				if(_conditionValue == tostring(conditionValue))
				{
					return GameReelSetting[i].ReelSetting
				}
			}
		}
		return null
	},

	SetFreeGames(data)
	{
		this.FreeGames = []
		for(let k in (data))
		{
			let v = data[k]
			this.FreeGames[k] = []
			this.FreeGames[k].ID = data[k].ID
			this.FreeGames[k].Count = data[k].Count
			this.FreeGames[k].ReelSetting = data[k].ReelSetting
			// this.FreeGames[k].Data = GameG.JsonDecode(data[k].Data)
		}
	},

	GetFreeGameInfoByID(id)
	{
		for(let k in (FreeGames))
		{
			let v = FreeGames[k]

			if(FreeGames[k].ID == id)
			{
				return FreeGames[k]
			}
		}
		return null
	},

	FilterTypeBySymbolPayTable(typeId)
	{
		if(typeId == "addfreespins")
		{
			return true
		} 
		else if(typeId == "selection")
		{

			return true
		}		
		return false
	},

	SetSymbolPayTable(data)
	{
		//	for i=1, data.length do
		for(let  i = 0;  i < data.length; ++ i)
		{
			let symbolName = data[i].Symbol.SymbolName
			this.SymbolPayTable[symbolName] = this.SymbolPayTable[symbolName] || []
			this.SymbolPayTable[symbolName].symbolName = symbolName
			this.SymbolPayTable[symbolName].detail = this.SymbolPayTable[symbolName].detail || []
			if(this.FilterTypeBySymbolPayTable(data[i].Type) == false)
			{
				let count = data[i].Count
				this.SymbolPayTable[symbolName].detail[count] = []
				this.SymbolPayTable[symbolName].detail[count].count = data[i].Count
				this.SymbolPayTable[symbolName].detail[count].typeId = data[i].Type
				this.SymbolPayTable[symbolName].detail[count].payout = data[i].Payout
			}
					
			if(data[i].Title != null && data[i].Title != "")
			{
				this.SymbolPayTable[symbolName].title = data[i].Title
			}		
			if(data[i].Desc != null && data[i].Desc != "")
			{
				this.SymbolPayTable[symbolName].desc = string.gsub(data[i].Desc,"\\n","\n")
			}
		}	
	},

	GetSymbolPayDetail(symbolName,detailCount)
	{
		if(this.SymbolPayTable[symbolName] == null)
		{
			return null
		}
		
		if(this.SymbolPayTable[symbolName].detail[detailCount] == null)
		{
			return null
		}
		
		let data = []
		data.count = this.SymbolPayTable[symbolName].detail[detailCount].count
		data.typeId = this.SymbolPayTable[symbolName].detail[detailCount].typeId
		
		let payout = this.SymbolPayTable[symbolName].detail[detailCount].payout
		if(data.typeId == "pickgame")
		{
			data.payout = string.format("%.0f b", payout)
		} 
		else if(data.typeId == "jackpot")
		{
			data.payout = string.format("a")
		} 
		else if(data.typeId == "chip")
		{
			data.payout = GameG.FormatUnit(payout * GetChipMoney())
		}		
		return data
	},

	// 遊戲狀態 0.下注状态 1.开奖状态 2.开奖动画 3.结算动画 4.等待游戏开始
	SetState(data)
	{
		this.State = data 
	},

	// 玩家資料
	SetUserData(data)
	{
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

	//通知可以選擇龍
	SelectGameOptions(data)
	{
		this.FreeMode = []
		this.FreeMode.Times = data.Times	//選擇免費遊戲的剩餘次數
		this.FreeMode.Options = data.Options //選項
		this.FreeMode.ParseOptions = [] 
		//	for i=1, data.Options.length do
		for(let  i = 1;  i <=  data.Options.length; ++ i)
		{
			this.FreeMode.ParseOptions[i] = []
			this.FreeMode.ParseOptions[i].ID = data.Options[i].ID
			this.FreeMode.ParseOptions[i].Type = data.Options[i].Type
			// this.FreeMode.ParseOptions[i].Data = GameG.JsonDecode(data.Options[i].Data)
		}
		this.FreeMode.Data = data.Data
		this.FreeMode.ReelResult = data.ReelResult //輪軸結果
		this.FreeMode.BetMoney = data.BetMoney //下注金額
		this.FreeMode.BetRate = data.BetRate //下注倍率
	},

	SetIncreaseGameTimes(data)
	{
		if(data.Type == "free_spins")
		{
			this.RetriggerFreeGame = []
			this.RetriggerFreeGame.Count = data.Count
			this.RetriggerFreeGame.ID = data.ID
			// RetriggerFreeGame.Data = GameG.JsonDecode(data.Data)
		} 
		else if(data.Type == "jackpot_game")
		{
			this.RetriggerBonusGame = this.RetriggerBonusGame || []
			let count = this.RetriggerBonusGame.Count || 0
			this.RetriggerBonusGame.Count = count + data.Count
			this.RetriggerBonusGame.ID = data.ID
			// RetriggerBonusGame.Data = GameG.JsonDecode(data.Data)
		}
	},

	// 剩餘免費遊戲資訊
	SetLeftFreeGameData(data)
	{
		this.FreeGame = []
		this.FreeGame.LeftCount = data.Count // 免費次數(0.付費)
		this.FreeGame.BetMoney = data.BetMoney // 下注金額
		this.FreeGame.BetRate = data.BetRate // 下注倍率符號
		this.FreeGame.ID = data.ID // 免費遊戲ID
		this.FreeGame.FreeGameExtAward = data.FreeGameExtAward // 免費遊戲額外獎勵
	},

	// bonus game
	SetBonusGame(data)
	{
		if(BonusGame == null)
		{
			this.BonusGame = []
			this.BonusGame.Records = data.Records
			this.BonusGame.Count = data.Count
			this.BonusGame.WinMoney = data.WinMoney
			this.BonusGame.All = data.All
			this.BonusGame.BetMoney = data.BetMoney
			this.BonusGame.BetRate = data.BetRate
		} 
		else
		{
			this.BonusGameStandby = []
			this.BonusGameStandby.Records = data.Records
			this.BonusGameStandby.Count = data.Count
			this.BonusGameStandby.WinMoney = data.WinMoney
			this.BonusGameStandby.All = data.All
			this.BonusGameStandby.BetMoney = data.BetMoney
			this.BonusGameStandby.BetRate = data.BetRate
		}
	},

	// 用位置取得 Bonus 資料
	GetBonusGameRecord(location)
	{
		for(let k in (this.BonusGame.Records))
		{ 
			let v = BonusGame.Records[k] 

			if(this.BonusGame.Records[k].Location == location)
			{
				return this.BonusGame.Records[k]
			}
		}
		for(let k in (this.BonusGame.Records))
		{
			let v = this.BonusGame.Records[k] 

			if(this.BonusGame.Records[k].Location == 0)
			{
				return this.BonusGame.Records[k]
			}
		}
		return null
	},

	// 符號狀態切換
	ChangeSymbolName(symbolName)
	{
		if(symbolName == "w14")
		{
			symbolName = "w1"
		} 
		else if(symbolName == "w24")
		{
			symbolName = "w2"
		} 
		else if(symbolName == "w34")
		{
			symbolName = "w3"
		} 
		else if(symbolName == "w44")
		{
			symbolName = "w4"
		}
		return symbolName
	},

	// 設定目前倍率
	SetBetRate(value)
	{
		this.betRate = value
	},

	SetBetRateIndex(index)
	{
		this.betRate = this.BetRates[index]
	},

	// 取得目前倍率
	GetBetRate()
	{
		return this.betRate
	},

	// 目前的籌碼金額
	SetChipMoney(money)
	{
		this.chipMoney = money
		this.MinBigWinStep = Number.MAX_SAFE_INTEGER
		
		// BigWin各階段演出條件
		for(let k in (this.BigWinStepBase))
		{
			let v = this.BigWinStepBase[k]
			this.BigWinStep[k] = this.BigWinStepBase[k] * this.GetBetMoney()
			
			if(this.BigWinStep[k] < this.MinBigWinStep)
			{
				this.MinBigWinStep = this.BigWinStep[k]
			}
		}
	},

	SetChipMoneyIndex(index)
	{
		this.SetChipMoney(BetMoneys[index])
	},

	// 目前的籌碼金額
	GetChipMoney()
	{
		return this.chipMoney
	},

	// 目前的下注倍率
	GetBetMoney()
	{
		let betMoney = this.chipMoney
		
		if(this.PayLineMode == 0)
		{
			betMoney = this.chipMoney * this.TotalPayLine
		}		
		return betMoney
	},

	// 目前的下注總倍率
	GetTotalBetMoney()
	{
		let total = this.chipMoney
		
		if(this.PayLineMode == 0)
		{
			total = this.chipMoney * this.TotalPayLine
		}
		if(this.betRate != null)
		{
			total = total * this.betRate
		}
		return total
	},

	// 取得可下注的最大倍數
	GetMaxBet()
	{
		let betMax = 1
		// for i=1,BetMoneys.length do
		for(let  i = 0;  i < this.BetMoneys.length; ++ i)
		{
			if(this.BetMoneys[i] > betMax)
			{
				betMax = this.BetMoneys[i]
			}
		}		
		let payLine = 1
		if(this.PayLineMode == 0)
		{
			payLine = this.TotalPayLine
		}		
		return betMax * payLine
	},

	// 取得可下注的最小倍數
	GetMinBet()
	{		
		let betMin = 9999999999999
		// for i=1,BetMoneys.length do
		for(let  i = 1;  i <= this.BetMoneys.length; ++ i)
		{
			if(this.BetMoneys[i] < betMin)
			{
				betMin = this.BetMoneys[i]
			}
		}		
		let payLine = 1
		if(this.PayLineMode == 0)
		{
			payLine = this.TotalPayLine
		}		
		return betMin * payLine
	},
	
	//取得BigWin最小階段
	GetMinBigWinStep()
	{
		return this.MinBigWinStep
	},

	//斷線重連資料
	SetUserRecover(data){
		
	},

	// 取得金額跑碼表的時間
	GetMoneyShowTimer(money)
	{
		let timer = this.MoneyTimeByRate * money / this.GetBetMoney() 
		return timer
	},

	// 設定Camera縮放
	SetCameraScale(value)
	{
		this.CameraScale = value
	},

	// 紀錄盤面結果
	SetRecoverGameResult(data)
	{
		this.RecoverGameResult = data
	},

	// 取得盤面結果
	GetRecoverGameResult()
	{
		return this.RecoverGameResult
	},

	SetJackpotPool(data)
	{
		this.JackpotPool = data
	},

	GetJackpotPoolByName(name)
	{
		//	for i=1, JackpotPool.length do
		for(let  i = 1;  i <=  this.JackpotPool.length; ++ i)
		{
			if(this.JackpotPool[i].Name == name)
			{
				return this.JackpotPool[i]
			}
		}		
		return null
	},
	
	SetGameReelSetting(data)
	{
		this.GameReelSetting = data
	},

	onExit()
	{
		this.BonusGame = null
		this.FreeGame = null
		this.RetriggerFreeGame = null
		this.RetriggerBonusGame = null
	},
};

module.exports = GameData
