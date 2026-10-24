let GameG = require("GameGlobal")
let gameData = require("GameData")
let uiinputEvent = require("UIInputEvent")

let rootRect = null

/** 用途: 盤面上的賠付線 */
var UIPayLine = {
    /** 初始化 */
    Init(root){        
        rootRect = root
        rootRect.active = true
        
        this.rootMoney = cc.find("RootMoney", root)
        this.rootMoney.active = false
        // 獲得金額文字
        this.txtMoney = cc.find("RootMoney/Text", root).getComponent(cc.Label)
    },
    
    Update(dt)
    {
        if(this.moneyLerp != this.winMoney){
            this.moneyLerp = Math.floor(cc.misc.lerp(this.moneyStart, this.winMoney, (new Date().getTime() - this.startTime) / this.showTime))
            this.SetWinMoney(this.moneyLerp)
			if(this.moneyLerp >= this.winMoney){
				this.Hide()	
			}
		}
    },
	
	onKeyDown(event){
		UIPayLine.Hide()
    },
        
    /** 設置贏得分數 */
	SetWinMoney(money){
		this.txtMoney.string = GameG.FormatNum(money)
	},
    /** 顯示介面 */
    Show(money){
        if(money == 0){
            return
        }
        this.rootMoney.active = true

		this.moneyLerp = 0
		this.moneyStart = 0
		this.winMoney = money
		this.showTime = gameData.GetMoneyShowTime(money) * 1000
        this.startTime = new Date().getTime()

        // 設置全畫面點擊事件
        uiinputEvent.SetEventKeyDown(this.onKeyDown,"UIPayLine")   
    },
    /** 關閉介面 */
    Hide(){
        this.moneyLerp = this.winMoney
        // 設置贏得分數
        this.SetWinMoney(this.winMoney)        
        // 移除全畫面點擊事件
		uiinputEvent.RemoveKey("UIPayLine")
        
        let self = this
        GameG.ScheduleOnce(function(){
            self.rootMoney.active = false
        })
    },
};

module.exports = UIPayLine