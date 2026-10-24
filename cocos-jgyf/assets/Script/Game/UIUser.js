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
		this.animWinMoney = cc.find("AnimWinMoney",root).getComponent("MotionEffectControl")
		this.animWinMoney.node.active = false
		this.moneyLerp = 0
		this.winMoney = 0

		let rootParticle = cc.find("Canvas/GameLayer/RootSlotParticle")
		this.animWinMoney.node.parent = rootParticle
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
        // 設置全畫面點擊事件
		uiinputEvent.SetEventKeyDown(this.onKeyDown,"UIUser")		
    },
    /** 跑分金額結束 */
    AnimWinMoneyComplete(){
		this.moneyLerp = this.winMoney
        // 設置贏得分數
		this.SetWinMoney(this.winMoney)
		// 關閉循環音效
		GameG.CloseLoopSound("se_count")
        // 移除全畫面點擊事件
		uiinputEvent.RemoveKey("UIUser")
		
		let timer = (this.winMoney < gameData.GetBigWinStepByIndex(0)) ? 1 : gameData.WinMoneyStayTime		
        // 增加0.01秒是因為同時間有好幾個地方跑分，需等所有跑完再處理completeCallback
        timer += 0.01
        GameG.ScheduleOnce(function(){
			GameG.CloseLoopSound("se_count")
            if(animCallback != null){
                animCallback()
            }
        }, timer)
	},

	ShowAnimWinMoney(){
		this.animWinMoney.node.active = true
		this.animWinMoney.play()
	},

	HideAnimWinMoney(){
		this.animWinMoney.stop()
		this.animWinMoney.node.active = false
	},
	
    /** 取得是否還在跑分 */
	CheckShowWinMoney(){
		return (this.moneyLerp != this.winMoney)
	},
};

module.exports = UIUser