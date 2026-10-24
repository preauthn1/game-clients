/** 用途: 遊戲內存資料 */
var GameData = {
    extends: cc.Component,

    Init() {
        this.IDTitle = "ID:"

        this.AutoSpinOption = []
        this.BigWinStep = []

        this.ShowReelSymbolDetail = false //顯示輪軸內的符號資訊
        //ShowReelSymbolDetail = true //顯示輪軸內的符號資訊

        //0: 結算的時候到指定位置(symbolID為初始塞入值)
        //1: 結算時直接將符號塞入(symbolID為結果值，其餘為空值)
        this.SpinDataMode = 1 //輪軸資料處理模式

        this.SpinLoopTimer = 0.8	//轉動持續最少時間(>= 0)

        this.ShowTimer_BetRate = 1.0 //結算符號加倍[顯示時間](> 0)
        this.GapTimer_BetRate = 0.5 //結算符號加倍[間隔時間]

        this.GapTimer_CarouselPayLine = 1.0 //結算輪播賠付線[間隔時間](> 0)
        this.GapTimer_CarouselReel = 0.01 //結算輪播輪軸[間隔時間](> 0)

        this.SpinMoveTimer = 100 // [UISlotReel] 輪軸轉動每幀移動速度
        this.SpinPercent = 0.15 // [UISlotReel] 輪軸轉動每幀移動每隔符號的百分比
        this.GapTimer_Spin = 0.33 // [UISlot] 每個輪軸間格動畫時間
        this.GapTimer_NearWin = 1.9 // [UISlot] 每個輪軸間格聽牌時間

        this.MoneyTimeByRate = 0.1 //表演金額時間倍數

        this.FreeSpinCount = 0 //免費次數(0.付費)
        this.FreeSpinTotalCountdown = 60 // [UIFreeSpin] 幾秒後自動開始
        this.FreeSpinShowCountdown = 20 // [UIFreeSpin] 倒數顯示時間
		
		this.BonusDetail = null
        this.BonusMoney = 0
        this.BonusTotalCountdown = 60 // [UIBonusGame] 幾秒後自動翻牌
        this.BonusShowCountdown = 20 // [UIBonusGame] 倒數顯示時間

        //this.AutoSpinOption = [10, 50, 100, 200]

        this.RewardStep = [250, 500, 750, 1000]

        this.AccWinMoey = 0
        this.IsRecover = false //斷線重連有殘留資料
        this.GoldSymbolStep = 1
        this.GoldSymbolCredits = 1

        this.BetCount = []
    },

	/** 設定遊戲基本資料
	 * @param {DFDC_Setting} data 封包:DFDCSettingID = 10001
	 */
    SetSetting(data) {
        this.RowCounts = data.RowCounts//顯示結算的行數
        this.TotalPayLine = data.TotalPayLine//總共多少賠付線
        this.BigWinStepBase = data.BigWinStep//BigWin各階段演出條件
        this.BetCount = data.BetCount//可下注列表
        this.PayLineMode = data.PayLineMode//賠付類型(0.非全線 1.全線)
        this.ReelSetting = data.ReelSetting//輪軸資料
        this.UnitPrefix = data.UnitPrefix//單位縮寫對照
    },

	/** 設定遊戲狀態
	 * @param {DFDC_GameStatus} data 封包:DFDCStateID = 10004
	 */ 
    SetState(data) {
        this.State = data
    },

	/** 設定玩家資料 
	 * @param {GameUser} data 玩家資料
	 */ 
    SetUserData(data) {
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

        this.FinalMoney = data.Score
    },

    //回合開始
    SetGameStart() {

    },

    //回合結束
    SetGameEnd() {

    },

    //free spin
    SetSpinFreeOrPay(data) {
        this.FreeSpinCount = data.FreeCount// 免費次數(0.付費)
        this.FreeReelSetting = data.ReelSetting//動態輪軸
    },

    //bonus game
    SetBonusGame(data) {
        this.BonusDetail = data.BonusDetail
        this.BonusMoney = data.Money
    },

	/** 符號狀態切換
	 ** 介面: [UISlotReel]
	 ** 用途: 符號依照不同狀況，給予對應符號
	 * @param {string} symbolName 符號名稱
	 */ 
    ChangeSymbolName(symbolName) {
        if (this.GoldSymbolStep == 1) {
            if (symbolName == "p15") symbolName = "p5"
            if (symbolName == "p14") symbolName = "p4"
            if (symbolName == "p13") symbolName = "p3"
            if (symbolName == "p12") symbolName = "p2"
        }
        else if (this.GoldSymbolStep == 2) {
            if (symbolName == "p5") symbolName = "p15"
            if (symbolName == "p14") symbolName = "p4"
            if (symbolName == "p13") symbolName = "p3"
            if (symbolName == "p12") symbolName = "p2"
        }
        else if (this.GoldSymbolStep == 3) {
            if (symbolName == "p5") symbolName = "p15"
            if (symbolName == "p4") symbolName = "p14"
            if (symbolName == "p12") symbolName = "p2"
            if (symbolName == "p13") symbolName = "p3"
        }
        else if (this.GoldSymbolStep == 4) {
            if (symbolName == "p5") symbolName = "p15"
            if (symbolName == "p4") symbolName = "p14"
            if (symbolName == "p3") symbolName = "p13"
            if (symbolName == "p12") symbolName = "p2"
        }
        else if (this.GoldSymbolStep == 5) {
            if (symbolName == "p5") symbolName = "p15"
            if (symbolName == "p4") symbolName = "p14"
            if (symbolName == "p3") symbolName = "p13"
            if (symbolName == "p2") symbolName = "p12"
        }

        return symbolName
    },

    //黃金符號資訊
    SetGoldenDetail(data) {
        this.GoldenDetail = data.GoldenDetail
    },

    //目前的黃金符號階段
    SetGoldenSymbolStep(step) {
        this.GoldSymbolStep = step
    },

    //目前的黃金符號金額
    SetGoldenSymbolCredits(credits) {
        this.GoldSymbolCredits = credits
    },

    //目前的籌碼金額
    SetChipMoney(money) {
        this.chipMoney = money

        for (var k in (this.BigWinStepBase)) {
            var v = this.BigWinStepBase[k]
            this.BigWinStep[parseInt(k) +1] = this.BigWinStepBase[k] * this.chipMoney
        }
    },

    //目前的籌碼金額
    GetChipMoney() {
        return this.chipMoney
    },

    //目前的下注倍率
    GetBetMoney() {
        var betMoney = this.chipMoney
        if (this.PayLineMode == 0) {
            betMoney = this.chipMoney * this.TotalPayLine
        }

        return betMoney
    },

    //目前的下注倍率
    GetTotalBetMoney() {
        var total = this.chipMoney * this.GoldSymbolCredits
        if (this.PayLineMode == 0) {
            total = total * this.TotalPayLine
        }

        return total
    },

    //取得可下注的最大倍數
    GetMaxBet(){
        var goldMax = 1
        if (this.GoldenDetail != null) {
            for (let i in this.GoldenDetail) {
                if (this.GoldenDetail[i].Credits > goldMax) {
                    goldMax = this.GoldenDetail[i].Credits
                }
            }
        }

        var betMax = 1
        for (let i = 1; i <= this.BetCount.length; ++i) {
            if (this.BetCount[i] > betMax) {
                betMax = this.BetCount[i]
            }
        }

        return goldMax * betMax
    },

    //斷線重連資料
    SetUserRecover(data) {
        this.IsRecover = true
        this.AccWinMoey = data.WinMoey// 累積獲得金額
    },

    SetUserStateChange(data) {
        this.FinalMoney = data.Score
    },

    //取得金額跑碼表的時間
    GetMoneyShowTimer(money) {
        var timer = this.MoneyTimeByRate * money / this.GetTotalBetMoney()
        return timer
    },

    //設定Camera縮放
    SetCameraScale(value) {
        this.CameraScale = value
    },
};

module.exports = GameData;
