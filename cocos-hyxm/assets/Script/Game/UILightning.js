let GameG = require("GameGlobal")
let gameData = require("GameData")

let rootRect = null
let rootBackground = null
let rootSlot = null
let rootJackpotPool = null

/** 用途: 遊戲類型-免費再轉特別獎介面(對應gameData.EnumGameType.LightningGame) */
var UILightning = {
    /** 初始化 */
    Init(root){        
        rootRect = root
        rootRect.active = false
        
		rootBackground = cc.find("Canvas/GameLayer/LightningGame")
		rootBackground.active = false
		// 盤面存放位置
        rootSlot = cc.find("Canvas/GameLayer/LightningGame/RootSlot")
        // 獎金池存放位置
		rootJackpotPool = cc.find("Canvas/GameLayer/LightningGame/RootJackpotPool")

		//開始按鈕	
        this.btnStart = cc.find("ButtonStart",root).getComponent(cc.Button)	
        
        // 計算獲得金額
        this.rootCalculateMoney = cc.find("RootCalculateMoney", root)
        this.txtCalculateMoney = cc.find("RootCalculateMoney/Text", root).getComponent(cc.Label)
        this.animCalculateMoney = cc.find("RootCalculateMoney", root).getComponent("MotionEffectControl")
        
        // 免費再轉次數
        this.rootLeftCount = cc.find("RootLeftCount", root)
        //this.txtLeftCount = cc.find("RootLeftCount/Text", root).getComponent(cc.Label)
        this.animLeftCount = cc.find("RootLeftCount", root).getComponent("MotionEffectControl")

        // 鎖定符號
        this.prefabSymbol = cc.find("LockSymbols/Symbol", root)
        this.prefabSymbol.active = false
        this.poolSymbol = []
        
		// 結果
		this.rootResult = cc.find("RootResult", root)
        this.txtResultMoney = cc.find("RootResult/TextMoney", root).getComponent(cc.Label)
        
		// 熊貓動畫
		this.animPanda = cc.find("panda_c_ske", root).getComponent(dragonBones.ArmatureDisplay)
    },
    /** 盤面存放位置(依遊戲畫面需求，切換層級用) */
	GetRootSlot(){
		return rootSlot
    },
    /** 獎金池存放位置(依遊戲畫面需求，切換層級用) */
	GetRootJackpotPool(){
		return rootJackpotPool
	},
    /** 設置輪軸資料 */
    SetReelSetting(data){
        for(let i in data){
            let reelIndex = data[i].ReelID
            for(let rowIndex = 1; rowIndex <= gameData.RowCounts; ++rowIndex){
                let clone = GameG.CreateClone(this.prefabSymbol)
                clone.active = false

                let index = this.poolSymbol.length
                this.poolSymbol[index] = {}
                this.poolSymbol[index].reelIndex = reelIndex
                this.poolSymbol[index].rowIndex = rowIndex
                this.poolSymbol[index].root = clone
                this.poolSymbol[index].spine = cc.find("Spine", clone).getComponent(dragonBones.ArmatureDisplay)
                this.poolSymbol[index].txtMoney = cc.find("TextMoney", clone).getComponent(cc.Label)
                this.poolSymbol[index].rootMajor = cc.find("ImageMajor", clone)
                this.poolSymbol[index].rootMinor = cc.find("ImageMinor", clone)
                this.poolSymbol[index].rootMini = cc.find("ImageMini", clone)
                this.poolSymbol[index].winMoney = null
            }
        }
    },
    /** 取得盤面上的符號索引值 */
    GetIndex(reelIndex, rowIndex){
        for(let i in this.poolSymbol){
            if(this.poolSymbol[i].reelIndex != reelIndex){
                continue
            }
            if(this.poolSymbol[i].rowIndex != rowIndex){
                continue
            }
            return i
        }
        return null
    },
    /** 顯示介面 */
    Show(){
		// 上個遊戲類型不是免費再轉特別獎
		if(gameData.GetGameTypeIndex() != gameData.EnumGameType.LightningGame){
            // 重設符號資料
            this.ResetLockSymbol()
            // 剩餘次數
            this.ShowLeftCount(gameData.lightningPrepare.Count)
		}
		GameG.LogProcess("[UILightning] Show")
		gameData.SetGameTypeIndex(gameData.EnumGameType.LightningGame)
        rootRect.active = true
        rootBackground.active = true
        this.rootResult.active = false        
        this.rootLeftCount.active = true
        this.rootCalculateMoney.active = false
        //this.txtLeftCount.string = gameData.lightningPrepare.Count
    },
    /** 關閉介面 */
    Hide(){
		GameG.LogProcess("[UILightning] Hide")
        rootRect.active = false
		rootBackground.active = false
		this.rootResult.active = false
    },

    /** 開始按鈕 */
    SetBtnStartCallback(callback){
        this.btnStart.node.on('click',function(){
            GameG.PlayGameSound("se_click")
            if(callback != null){
                callback()
            }
		})
    },
	/** 設定按鈕狀態 */
    SetInteractable(enabled){
		this.btnStart.interactable = enabled
    },

    /** 輪軸開始轉動 */
    SetStartSpin(){
		if(gameData.GetGameTypeIndex() != gameData.EnumGameType.LightningGame){
			return
        }
        
    },
    /** 輪軸停止轉動 */
	SetStopSpin(){
		
    },
    /** 背景音效 */
    SetPlayGameBGM(){
        // 盤面上goldball超過12個
        if(gameData.lightningPrepare.PastPayGroups.length > 12){
            GameG.PlayGameBGM("bgm_rs02")
        }
        else{
            GameG.PlayGameBGM("bgm_rs01")
        }
    },    
    // 重設符號資料
    ResetLockSymbol(){
        for(let i in this.poolSymbol){
            this.poolSymbol[i].root.active = false
            this.poolSymbol[i].txtMoney.string = ""
            // 用此判斷是否已鎖定
            this.poolSymbol[i].winMoney = null
            // 指定位置
            let reelIndex = this.poolSymbol[i].reelIndex
            let rowIndex = this.poolSymbol[i].rowIndex
            let parent = this.poolSymbol[i].root.parent
            let position = gameData.GetSlotSymbolLocalPosition(reelIndex, rowIndex, parent)
            this.poolSymbol[i].root.position = position
        }
    },
    /** 鎖住的符號資料 */
    ShowLockSymbols(data){               
        
    },
    /** 轉過次數 */
    ShowLightningStep(data){
        
    },
    /** 剩餘次數 */
    ShowLeftCount(count){
        //this.txtLeftCount.string = count
        this.animLeftCount.play("respin_" + count)
        this.SetPlayGameBGM()
    },
    /** 賠付線結果 */
    ShowPayout(data){
        if(data == null){
            return
        }
        for(let i in this.poolSymbol){
            this.poolSymbol[i].root.active = false
            this.poolSymbol[i].txtMoney.string = ""
        }
        for(let i in data){
            let reelIndex = data[i].Position.Reel
            let rowIndex = data[i].Position.Row

            let index = this.GetIndex(reelIndex, rowIndex)
            if(index != null){
                this.poolSymbol[index].root.active = true

                let type = data[i].Type
                let jackpot = data[i].JackpotType
                this.poolSymbol[index].rootMajor.active = (type == "jackpot" && jackpot == "Major")
                this.poolSymbol[index].rootMinor.active = (type == "jackpot" && jackpot == "Minor")
                this.poolSymbol[index].rootMini.active = (type == "jackpot" && jackpot == "Mini")
                this.poolSymbol[index].txtMoney.active = false
                if(type == "chipXrate"){
                    this.poolSymbol[index].txtMoney.active = true
                    this.poolSymbol[index].txtMoney.string = GameG.FormatNum(data[i].WinMoney)
                }
                if(this.poolSymbol[index].winMoney == null){
                    if(gameData.GetGameTypeIndex() == gameData.EnumGameType.LightningGame){
                        this.poolSymbol[index].spine.playAnimation("hold")
                    }
                    else{
                        this.poolSymbol[index].spine.playAnimation("l_stop")
                    }
                }
                this.poolSymbol[index].winMoney = data[i].WinMoney 
            }
        }
    },
    /** 顯示結算介面 */
	ShowResult(data, callback){
        // 沒有遊戲結果資料
        if(data == null){
            if(callback != null){
                callback()
            }
        }
        // 有新的lightning 準備資料，下局還有lightning要轉
        else if(gameData.lightningPrepare.LightningStep != data.LightningStep){
            if(callback != null){
                callback()
            }
        }
        // 顯示結算介面
        else{

            /* 此款遊戲無結算介面
            this.rootResult.active = true
            this.txtResultMoney.string = GameG.FormatNum(gameData.GetLightningResultWinMoeny())
            */
           
            let self = this            
            this.callbackResult = callback
            this.scheduleResult = GameG.ScheduleOnce(function(){
                self.ShowResultComplete()
            }, 0)
        }
	},    
	/** 結算介面停留結束 */
	ShowResultComplete(){
		if(this.scheduleResult == null){
			return
		}
		GameG.Unschedule(this.scheduleResult)
		this.scheduleResult = null
		if(this.callbackResult != null){
			this.callbackResult()
        }
        gameData.lightningPrepare = null
    },
    /** 顯示計算版 */
    StartCalculateMoney(data){
        // 沒有遊戲結果資料
        if(data == null){
        }
        // 有新的lightning 準備資料，下局還有lightning要轉
        else if(gameData.lightningPrepare.LightningStep != data.LightningStep){            
        }
        // 顯示記分板
        else{
            this.rootLeftCount.active = false
            this.rootCalculateMoney.active = true
            this.txtCalculateMoney.string = ""
            this.animCalculateMoney.play("money_bag_start")
        }
    },

    /** 計算獲得金額 */
    ShowCalculateMoney(data, callback){
        // 沒有遊戲結果資料
        if(data == null){
            if(callback != null){
                callback()
            }
        }
        // 有新的lightning 準備資料，下局還有lightning要轉
        else if(gameData.lightningPrepare.LightningStep != data.LightningStep){
            if(callback != null){
                callback()
            }
        }
        // 計算獲得金額
        else{
            let self = this
            let delayTime = 0 // 延遲動畫時間
            let winMoney = 0 // 獲得金額

            for(let i in this.poolSymbol){
                if(this.poolSymbol[i].winMoney != null){
                    GameG.ScheduleOnce(function(){
                        // 累積獲得金額
                        winMoney += self.poolSymbol[i].winMoney
                        self.txtCalculateMoney.string = GameG.FormatNum(winMoney)
                        // 播放獲得動畫
                        self.poolSymbol[i].spine.playAnimation("win")                        
                        self.animCalculateMoney.play("money_bag_win")

                        // 文字特效動畫
                        let clone = GameG.CreateClone(self.txtCalculateMoney.node)
                        clone.scale = 0.9                        
                        let label = clone.getComponent(cc.Label)
                        label.string = GameG.FormatNum(self.poolSymbol[i].winMoney)                        
                        let labelTime = 0.5
                        let x = self.txtCalculateMoney.node.x
                        let y = self.txtCalculateMoney.node.y
                        GameG.DoPosition(clone, cc.v3(x, y, 0), cc.v3(x, y + 50, 0), labelTime)
                        GameG.DoOpacity(clone, null, 150, labelTime, function(){
                            clone.destroy()
                        })
                    }, delayTime)
                    // 加上累加金額的間隔時間
                    delayTime += 0.45
                }
            }
            // 表演結束
            GameG.ScheduleOnce(function(){
                self.animCalculateMoney.play("money_bag_idle")
                if(callback != null){
                    callback()
                }
            }, delayTime)
        }
    },
	//////////////////////////////////////////////////////////////////////////////
	/** 中獎場景動畫 */
	ShowWinMoneyAnimation(data){
        // 計算已經鎖定的符號數量
        let count = 0
        for(let i in this.poolSymbol){
            if(this.poolSymbol[i].winMoney != null){
                count = count + 1
            }
        }
        // 有新的鎖定符號
        if(data.PayGroups.length > count){
            this.animPanda.playAnimation("lightning_panda_win")
			this.animPanda.addAnimation("lightning_panda_idle")        
        }
	},
};

module.exports = UILightning