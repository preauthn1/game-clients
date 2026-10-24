var G = require("Global")
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
		
		this.FreeSpinCount = 0 //免費次數(0.付費)
		this.FreeSpinTotalCountdown = 60 // [UIFreeSpin] 幾秒後自動開始
		this.FreeSpinShowCountdown = 20 // [UIFreeSpin] 倒數顯示時間
		this.BonusMoney = 0
		this.BonusTotalCountdown = 60 // [UIBonusGame] 幾秒後自動翻牌
		this.BonusShowCountdown = 20 // [UIBonusGame] 倒數顯示時間
		
		this.CameraScale = 1 //螢幕縮放比
	//this.AutoSpinOption = {10,50,100,200}	
	},

	/** 設定遊戲基本資料
	 * @param {TGW_MSG_Setting} data 封包:TGW_SettingID = 10001
	 */
	SetSetting(data){	
		this.RowCounts = data.RowCounts //顯示結算的行數	
		this.TotalPayLine = data.TotalPayLine //總共多少賠付線	
		this.BigWinStepBase = data.BigWinStep //BigWin各階段演出條件	
		this.BetCount = data.BetCount //可下注列表	
		this.PayLineMode = data.PayLineMode //賠付類型 (0.非全線 1.全線)
		this.ReelSetting = data.ReelSetting //輪軸資料
		this.PayLines = data.PayLines //所有賠線
		this.UnitPrefix = data.UnitPrefix //單位
		this.MinCarryMoney = data.MinCarryMoney //最小攜帶金額
		this.SetSymbolPayTable(data.SymbolPayTable)
		
		this.PayLineDesc = GameG.GetLocalizedString(data.PayLineDesc.replace("\\n","\n")) //派彩線說明文字
		this.PickGameDesc = GameG.GetLocalizedString(data.PickGameDesc.replace("\\n","\n")) //糖果遊戲說明文字
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
			this.SymbolPayTable[symbolName].title = GameG.GetLocalizedString(data[i].Title)
			this.SymbolPayTable[symbolName].desc = GameG.GetLocalizedString(data[i].Desc.replace("\\n","\n"))
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
			data.payout = Math.floor(payout * 10)*0.1 + "b"
		} 
		else if(data.typeId == "jackpot"){
			data.payout = "a"
		} 
		else if(data.typeId == "chip"){
			data.payout = GameG.FormatUnit(payout * this.GetChipMoney())
		}
		
		return data
	},

	/** 設定遊戲狀態
	 * @param {TGW_MSG_Status} data 封包:TGW_StatusID = 10002
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

// bonus game
	SetBonusGame(data){
		this.BonusDetail = data.Records
		this.BonusMoney = data.WinMoney
		this.BonusCount = data.Count
		this.BonusAll = data.All
	},

	/** 符號狀態切換
	 ** 介面: [UISlotReel]
	 ** 用途: 符號依照不同狀況，給予對應符號
	 * @param {string} symbolName 符號名稱
	 */ 
	ChangeSymbolName(symbolName){	
		return symbolName
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
			this.betMoney = this.chipMoney * this.TotalPayLine
		}
		
		return betMoney
	},

// 目前的下注總倍率
	GetTotalBetMoney(){
		let total = this.chipMoney
		if(this.PayLineMode == 0){
			total = this.chipMoney * this.TotalPayLine
		}
		
		return total
	},

// 取得可下注的最大倍數
	GetMaxBet(){	
		let betMax = 1
		for(let i = 1; i <= this.BetCount.length; ++ i){
			if(this.BetCount[i] > betMax){
				betMax = this.BetCount[i]
			}
		}
		
		let payLine = 1
		if(this.PayLineMode == 0){
			payLine = this.TotalPayLine
		}
		
		return betMax * payLine
	},

// 取得可下注的最小倍數
	GetMinBet(){	
		let betMin = 9999999999999
		for(let  i = 1;  i <= this.BetCount.length; ++ i){
			if(this.BetCount[i] < betMin){
				betMin = this.BetCount[i]
			}
		}
		
		let payLine = 1
		if(PayLineMode == 0){
			payLine = this.TotalPayLine
		}
		
		return betMin * payLine
	},
	
	//取得BigWin最小階段
	GetMinBigWinStep(){
		return this.MinBigWinStep
	},
	
//斷線重連資料
	SetUserRecover(data){
		
	},
	
	/** 取得金額跑碼表的時間 
	 *  @param {number} money 獲得金額(跑分數值)
	*/
	GetMoneyShowTimer(money){
		let timer = this.MoneyTimeByRate * money / this.GetTotalBetMoney()
		return timer
	},

// 設定Camera縮放
	SetCameraScale(value){
		this.CameraScale = value
	},


};

module.exports = GameData
