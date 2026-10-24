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
		this.moneyLerp = 0
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

		GameG.PlayGameSound("se_count",true)
		
        animCallback = callback
		this.moneyLerp = this.winMoney
		this.moneyStart = this.winMoney
		this.winMoney = this.winMoney + money
		this.showTime = gameData.GetMoneyShowTimer(money) * 1000
		this.startTime = new Date().getTime()
		
		uiinputEvent.SetEventKeyDown(this.onKeyDown,"UIUser")
    },
    /** 跑分金額結束 */
    AnimWinMoneyComplete(){
		this.moneyLerp = this.winMoney
		this.SetWinMoney(this.winMoney)
		GameG.CloseLoopSound("se_count")
		uiinputEvent.RemoveKey("UIUser")

		let timer = (this.winMoney < gameData.GetBigWinStepByIndex(0)) ? 1 : 2
        GameG.ScheduleOnce(function(){
			GameG.CloseLoopSound("se_count")
            if(animCallback != null){
                animCallback()
            }
        }, timer)
	},
    /** 取得是否還在跑分 */
	CheckShowWinMoney(){
		return (this.moneyLerp != this.winMoney)
	},
};

module.exports = UIUser