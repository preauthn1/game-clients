let GameG = require("GameGlobal")
let gameData = require("GameData")
let uiinputEvent = require("UIInputEvent")

let rootRect = null
/** 動畫階段索引值 */
let animStepIndex = -1
let completeCallback = null
/** 動畫階段物件 */
let poolStep = []

/** 用途: Bigwin動畫跑分 */
var UIBigWin = {
    /** 初始化 */
    Init(root){
        rootRect = root
        rootRect.active = false
        
        // 跑分金額
        this.txtMoney = cc.find("TextMoney", root).getComponent(cc.Label)
        // 動畫背景
        this.animWin = cc.find("RootStep/AnimationWin", root).getComponent(sp.Skeleton)
        
		for(let i = 0; i < 4; ++ i){
            poolStep[i] = {}
            poolStep[i].root = cc.find("RootStep/Step" + i, root)
            poolStep[i].anim = cc.find("RootStep/Step" + i + "/Anim", root).getComponent(sp.Skeleton)
            poolStep[i].root.active = false
        }
        // 目標跑分值
        this.winMoney = 0
        // 目前跑分值
        this.moneyLerp = 0
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
		UIBigWin.Hide()
	},
    /** 設置跑分金額 */
    SetWinMoney(money){

        // 目前跑分金額的階段
        let stepIndex = gameData.GetBigWinStepByMoney(money)
        this.txtMoney.string = GameG.FormatNum(money)
        // 到達第一階段開啟介面
        if(stepIndex >= 0 && animStepIndex == -1){
            GameG.PlayGameBGM("se_bigwin")
            rootRect.active = true
        }
        // 階段不同
        if(animStepIndex != stepIndex){
            if(poolStep[animStepIndex] != null){
                poolStep[animStepIndex].root.active = false
            }
            animStepIndex = stepIndex
            GameG.PlayGameSound("se_word")
            poolStep[stepIndex].root.active = true
            poolStep[stepIndex].anim.setAnimation(0, "start", false);
            poolStep[stepIndex].anim.addAnimation(0, "idle", true);
            this.animWin.setAnimation(0, "start", false);
            this.animWin.addAnimation(0, "idle", true);            
        }
    },
    /** 顯示介面 */
    Show(money, callback){
        if(money < gameData.GetBigWinStepByIndex(0)){
            if(callback != null){
                callback()
            }
            return
        }
        // 初始化動畫階段索引值
        animStepIndex = -1
        completeCallback = callback
        // 目前跑分值
		this.moneyLerp = 0
        // 開始跑分值
		this.moneyStart = 0
        // 目標跑分值
		this.winMoney = money
        // 跑分總時間
		this.showTime = gameData.GetMoneyShowTimer(money) * 1000
        // 開始跑分時間
        this.startTime = new Date().getTime()
        

        // 設置全畫面點擊事件
        uiinputEvent.SetEventKeyDown(this.onKeyDown,"UIBigWin")
    },
    
    Hide(){
        this.moneyLerp  = this.winMoney
        // 設置贏得分數
		this.SetWinMoney(this.winMoney)
        // 移除全畫面點擊事件
        uiinputEvent.RemoveKey("UIBigWin")
        // 關閉背景音樂
        GameG.CloseBGMSound()
        // 播放結束音效
		GameG.PlayGameSound("se_winend")

        GameG.ScheduleOnce(function(){
            poolStep[animStepIndex].root.active = false
            rootRect.active = false
            if(completeCallback != null){
                completeCallback()
            }
        }, 2)
    },
    /** 取得介面是否顯示 */
    CheckShowTimer(){
        return (this.moneyLerp != this.winMoney)
    },
};

module.exports = UIBigWin