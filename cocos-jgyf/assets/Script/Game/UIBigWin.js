let GameG = require("GameGlobal")
let gameData = require("GameData")
let uiinputEvent = require("UIInputEvent")

let rootRect = null
/** 動畫階段索引值 */
let animStepIndex = -1
/** 動畫階段物件 */
let poolStep = []

/** 用途: Bigwin動畫跑分 */
var UIBigWin = {
    /** 初始化 */
    Init(root){        
        rootRect = root
        rootRect.active = false
        
        this.txtMoney = cc.find("TextMoney", root).getComponent(cc.Label)
        this.animBoard = cc.find("SkeletonGraphic(board)", root).getComponent(sp.Skeleton)
        this.animWin = cc.find("SkeletonGraphic(win)", root).getComponent(sp.Skeleton)

        this.animRootStep = cc.find("RootStep", root).getComponent("MotionEffectControl")
        
        for(let i = 0; i < 4; ++ i){
            poolStep[i] = {}
            poolStep[i].root = cc.find("RootStep/Step" + i, root)
            poolStep[i].rootAnim = cc.find("RootStep/Step" + i + "/RootAnim", root)
            poolStep[i].anim = cc.find("RootStep/Step" + i + "/SkeletonGraphicTitle", root).getComponent(sp.Skeleton)
            poolStep[i].root.active = false
        }
        // 目標跑分值
        this.winMoney = 0
        // 目前跑分值
        this.moneyLerp = 0

        this.poolParticle = cc.find("PoolParticle", root).getComponent("ObjectPool")
        for(let i in this.poolParticle.node.children){
            let child = this.poolParticle.node.children[i]
            child.active = (child.name == "0")
        }
    },

    Update(dt)
    {
        if(this.moneyLerp != this.winMoney){
            this.moneyLerp = Math.floor(cc.misc.lerp(this.moneyStart, this.winMoney, (new Date().getTime() - this.startTime) / this.showTime))
            this.txtMoney.node.scale = cc.misc.lerp(1, 1.5, (new Date().getTime() - this.startTime) / this.showTime)
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
            rootRect.active = true
            let lastIndex = gameData.GetBigWinStepByMoney(this.winMoney)
            if(lastIndex == 0){
                GameG.PlayGameBGM("se_bigwin")
            }
            else if(lastIndex == 1){
                GameG.PlayGameBGM("se_superwin")
            }
            else{
                GameG.PlayGameBGM("se_megawin")
            }
            
            this.animBoard.setAnimation(0, "start", false)
            this.animBoard.addAnimation(0, "idle", true)

            for (let i = 0; i < poolStep.length; ++i){
                poolStep[i].root.active = false
            }
        }
        // 階段不同
        if(animStepIndex != stepIndex){
            if(poolStep[animStepIndex] != null){
                poolStep[animStepIndex].root.active = false
            }
            animStepIndex = stepIndex
            // GameG.PlayGameSound("se_word")
            poolStep[stepIndex].root.active = true
            poolStep[stepIndex].anim.setAnimation(0, "start", false);
            poolStep[stepIndex].anim.addAnimation(0, "idle", true);
            
            this.animBoard.node.parent = poolStep[stepIndex].rootAnim
            this.animWin.node.parent = poolStep[stepIndex].rootAnim
            this.animWin.setAnimation(0, "start", false)
            this.animWin.addAnimation(0, "idle", true)

            this.animRootStep.play()
        }
    },
    /** 顯示介面 */
    Show(money){
        if(money < gameData.GetBigWinStepByIndex(0)){
            return
        }
        // 初始化動畫階段索引值
        animStepIndex = -1
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
        
        this.txtMoney.node.scale = 1
        this.ShowParticleStep()

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
        let lastIndex = gameData.GetBigWinStepByMoney(this.winMoney)
        if(lastIndex == 0){
            GameG.PlayGameSound("se_winend")
        }
        else if(lastIndex == 1){
            GameG.PlayGameSound("se_superwinend")
        }
        else{
            GameG.PlayGameSound("se_megawinend")
        }

        let self = this
        this.txtMoney.node.scale = 1.5	
        GameG.ScheduleOnce(function(){
            rootRect.active = false
            
            GameG.Unschedule(self.scheduleStep)
        }, gameData.WinMoneyStayTime)        
    },
    /** 取得介面是否顯示 */
    CheckShowTimer(){
        return (this.moneyLerp != this.winMoney)
    },

    ShowParticleStep(){
        let self = this
        
        this.scheduleStep = GameG.Schedule(function(){
            
            let stepIndex = gameData.GetBigWinStepByMoney(self.moneyLerp)
            
            for(let i=0; i <= stepIndex; ++i){
                let target = self.poolParticle.get(i.toString());
                if(target != null){   
                    target.active = false
                    GameG.ScheduleOnce(function(){
                        target.active = true
                        let particle = target.getComponent("MotionEffectControl")
                        particle.play()
                    }, GameG.MathRandom(0, 1.5))
                    // 撥放完畢刪除物件
                    GameG.ScheduleOnce(function(){
                        target.destroy()
                    }, 5)
                }
            }
        }, 2, null, 0)
    },
};

module.exports = UIBigWin