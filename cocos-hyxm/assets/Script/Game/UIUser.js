let GameG = require("GameGlobal")
let gameData = require("GameData")
let uiinputEvent = require("UIInputEvent")

let rootRect = null
let animCallback = null

/** 用途: 玩家資訊 */
var UIUser = {
	/** 遊戲離開(斷線重連) */
	onExit(){
        animCallback = null
    },
    /** 初始化 */
    Init(root){
		rootRect = root
        rootRect.active = true
        this.txtCarryMoney = cc.find("TextCarryMoney",root).getComponent(cc.Label)	
		this.txtWinMoney = cc.find("TextWinMoney",root).getComponent(cc.Label)
        // 目前跑分值
		this.moneyLerp = 0
        // 目標跑分值
		this.winMoney = 0
    },

    Update(dt)
    {
        if(this.moneyLerp != this.winMoney){
			this.moneyLerp = Math.floor(cc.misc.lerp(this.moneyStart, this.winMoney, (new Date().getTime() - this.startTime) / this.showTime))
			this.txtWinMoney.string = GameG.FormatNum(this.moneyLerp)
			if(this.moneyLerp >= this.winMoney){
				this.AnimWinMoneyComplete()	
			}
		}
    },
	
	onKeyDown(event){
		UIUser.AnimWinMoneyComplete()
	},
    
    /** 設置攜帶金額 */
	SetCarryMoney(money){
		this.txtCarryMoney.string = GameG.FormatUnit(money)
	},

    /** 設置贏得分數 */
	SetWinMoney(money){
		this.moneyLerp = money
		this.winMoney = money
		this.txtWinMoney.string = GameG.FormatNum(money)
	},
	/** 重置贏得分數 */
	ResetWinMoney(){
		this.moneyLerp = 0
		this.winMoney = 0
		this.txtWinMoney.string = ""
	},
    /** 設置跑分金額 */
    AnimWinMoney(money, callback){
		if(money == 0){
			if(callback != null){
				callback()	
			}
			return		
		}

		//GameG.PlayGameSound("se_count",true)
		
        animCallback = callback
        // 目前跑分值
		this.moneyLerp = this.winMoney
        // 開始跑分值
		this.moneyStart = this.winMoney
        // 目標跑分值
		this.winMoney = this.winMoney + money
        // 跑分總時間
		this.showTime = gameData.GetMoneyShowTime(money) * 1000
        // 開始跑分時間
		this.startTime = new Date().getTime()
        // 設置全畫面點擊事件
		uiinputEvent.SetEventKeyDown(this.onKeyDown,"UIUser")
    },
    /** 跑分金額結束 */
    AnimWinMoneyComplete(){
        // 設置贏得分數
		this.SetWinMoney(this.winMoney)
		// 關閉循環音效
		GameG.CloseLoopSound("se_count")
        // 移除全畫面點擊事件
		uiinputEvent.RemoveKey("UIUser")

		let time = (this.winMoney < gameData.GetBigWinStepByIndex(0)) ? 1 : gameData.WinMoneyStayTime		
        // 增加0.01秒是因為同時間有好幾個地方跑分，需等所有跑完再處理completeCallback
        time += 0.01
        GameG.ScheduleOnce(function(){
			GameG.CloseLoopSound("se_count")
            if(animCallback != null){
                animCallback()
            }
        }, time)
	},
    /** 取得是否還在跑分 */
	CheckShowWinMoney(){
		return (this.moneyLerp != this.winMoney)
	},
};

module.exports = UIUser