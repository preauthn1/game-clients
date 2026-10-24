let GameG = require("GameGlobal")
let gameData = require("GameData")
let uiinputEvent = require("UIInputEvent")

let rootRect = null
/** 動畫階段索引值 */
let animStepIndex = -1
let completeCallback = null

/** 用途: Bigwin動畫跑分 */
var UIBigWin = {
    /** 初始化 */
    Init(root){        
        rootRect = root
        rootRect.active = false
        
        // 跑分金額
        this.txtMoney = cc.find("TextMoney", root).getComponent(cc.Label)
        this.animWin = cc.find("AnimationWin", root).getComponent(cc.Animation)
        // 目標跑分值
        this.winMoney = 0
        // 目前跑分值
        this.moneyLerp = 0

		this.poolFirework = cc.find("PoolFirework", root).getComponent("ObjectPool")
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
        
        let self = this
        // 階段不同
        if(animStepIndex != stepIndex){
            animStepIndex = stepIndex
            GameG.PlayGameSound("se_word")
            this.animWin.play("step" + stepIndex + "_start")
            GameG.Unschedule(this.scheduleWin)
            this.scheduleWin = GameG.ScheduleOnce(function(){
                self.animWin.play("step" + stepIndex + "_loop")
            }, 0.85)
            
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
        let self = this
        GameG.Unschedule(this.scheduleFirework)
        this.scheduleFirework = GameG.Schedule(function(){
            self.SetOffFireworks()
        }, 0.25)
    },
    /** 關閉介面 */
    Hide(){
        this.moneyLerp  = this.winMoney
		this.SetWinMoney(this.winMoney)
        uiinputEvent.RemoveKey("UIBigWin")
        GameG.CloseBGMSound()
		GameG.PlayGameSound("se_winend")

        GameG.ScheduleOnce(function(){
            GameG.Unschedule(this.scheduleFirework)
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

	SetOffFireworks(){		
		let clone = this.poolFirework.get("firework");
		let rangeWidth = GameG.GetScreenWidth() * 0.8
		let x = Math.random() * rangeWidth - rangeWidth * 0.5
		let rangeHeight = GameG.GetScreenHeight() * 0.8
		let y = Math.random() * rangeHeight - rangeHeight * 0.5
		clone.position = cc.v2(x, y)

		let self = this
		let particle = clone.getComponent("MotionEffectControl")
		let sequence = GameG.NewTween(clone)
		sequence.delay(Math.random() * 0.2)
		sequence.call(function(){
			clone.active = true
			particle.play()
		})
		sequence.delay(1)
		sequence.call(function(){
			self.poolFirework.free("firework", clone)
		})
		sequence.start()
	},
};

module.exports = UIBigWin