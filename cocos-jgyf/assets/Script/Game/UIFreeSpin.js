let GameG = require("GameGlobal")
let gameData = require("GameData")
let uiinputEvent = require("UIInputEvent")

let rootRect = null
let rootBackground = null

/** 用途: 遊戲類型-免費遊戲介面 */
var UIFreeSpin = {
	/** 遊戲離開(斷線重連) */
	onExit(){
				
	},
    /** 初始化 */
    Init(root){        
        rootRect = root
		rootRect.active = false
		
		// free game的背景
		rootBackground = cc.find("Canvas/GameLayer/FreeGame")
		rootBackground.active = false
		// 盤面存放位置
        this.rootSlotground = cc.find("Canvas/GameLayer/FreeGame/Slotground")
        // 獎金池存放位置
        this.rootJackpotPool = cc.find("Canvas/GameLayer/FreeGame/Slotground/RootJackpotPool")
		this.rootBonusEnter = cc.find("Canvas/GameLayer/FreeGame/Slotground/RootBonusEnter") 
        this.rootLogo = cc.find("Canvas/GameLayer/FreeGame/Foreground/ImageLogo")
		// 獲得金額
        this.txtWinMoney = cc.find("TextWinMoney", root).getComponent(cc.Label)
		// 剩餘次數
		this.txtLeftCount = cc.find("ImageLeftCount/Text", root).getComponent(cc.Label)
		this.txtSelectCount = cc.find("AnimSelectCount/Text", root).getComponent(cc.Label)
		this.txtWildMulti = cc.find("AnimWildMulti/Text", root).getComponent(cc.Label)
		
		this.animSelectCount = cc.find("AnimSelectCount", root).getComponent("MotionEffectControl")
		this.animSelectCount.node.active = false
		this.animWildMulti = cc.find("AnimWildMulti", root).getComponent("MotionEffectControl")
		this.animWildMulti.node.active = false
		// 結果介面
		this.rootResult = cc.find("RootResult", root)
		this.txtResultMoney = cc.find("RootResult/TextMoney", root).getComponent(cc.Label)
		// 獲得介面
		this.rootTrigger = cc.find("RootTrigger",root)
		this.txtTriggerCount = cc.find("RootTrigger/Text",root).getComponent(cc.Label)


		this.rootSlotLeft = cc.find("Canvas/GameLayer/FreeGame/Foreground/Left")
		this.rootSlotRight = cc.find("Canvas/GameLayer/FreeGame/Foreground/Right")

		this.freeSpinCount = 0
    },

    Update(dt)
    {
        if(this.moneyLerp != this.winMoney){
			this.moneyLerp = Math.floor(cc.misc.lerp(this.moneyStart, this.winMoney, (new Date().getTime() - this.startTime) / this.showTime))
			this.txtWinMoney.string = GameG.FormatNum(this.moneyLerp)
			if(this.moneyLerp >= this.winMoney){
				this.SetWinMoney(this.winMoney)
			}
		}
	},

	GetRootRect(){
		return rootRect
	},	
    /** 盤面存放位置(依遊戲畫面需求，切換層級用) */
	GetRootRectSlotground(){
		return this.rootSlotground
	},
    /** 獎金池存放位置(依遊戲畫面需求，切換層級用) */
	GetRootRectJackpotPool(){
		return  this.rootJackpotPool
	},

	GetRootRectBonusEnter(){
		return  this.rootBonusEnter
	},
    /** 顯示介面 */
    Show(callbackRowNum){
		if(gameData.GetGameTypeIndex() != gameData.EnumGameType.FreeGame){		
			this.ResetWinMoney()
			if(gameData.gameOptions != null){
				this.SetSelectCount(gameData.gameOptions.Times -1)
			}
			this.freeSpinCount = gameData.leftFreeGame.Count
		}
		gameData.SetGameTypeIndex(gameData.EnumGameType.FreeGame)
        rootRect.active = true
        rootBackground.active = true
		// 剩餘數量
        this.txtLeftCount.string = gameData.leftFreeGame.Count

		this.rootResult.active = false

		// 改變輪軸數量
		let freeData = gameData.GetFreeGameDataById(gameData.leftFreeGame.ID)
		if(freeData != null && callbackRowNum != null){
			this.rootLogo.active = (freeData.RowNum < 5)
			this.rootSlotground.height = gameData.slotSymbolHeight * freeData.RowNum
			// 更新子物件的介面
			let widgets = this.rootSlotground.getComponentsInChildren(cc.Widget)
			for (let i in widgets) {
				widgets[i].updateAlignment()
			}
			this.rootSlotLeft.y = this.rootSlotground.position.y + this.rootSlotground.height * 0.5
			this.rootSlotRight.y = this.rootSlotground.position.y + this.rootSlotground.height * 0.5
			callbackRowNum(freeData.RowNum)
		}
    },
    /** 關閉介面 */
    Hide(){
        rootRect.active = false
        rootBackground.active = false
		
		this.rootResult.active = false
        this.ResetWinMoney()	
	},

	/** 顯示獲得次數 */
	ShowTrigger(callback){
		if (gameData.leftFreeGame.Count > this.freeSpinCount){
			GameG.PlayGameSound("se_addfg")
			this.rootTrigger.active = true
			this.txtTriggerCount.string = gameData.leftFreeGame.Count - this.freeSpinCount

			let self = this
			GameG.ScheduleOnce(function(){
				self.rootTrigger.active = false
				if(callback != null){
					callback()
				}
			})
		}
		else if(callback != null){
			callback()
		}
		this.freeSpinCount = gameData.leftFreeGame.Count
	},

    /** 輪軸開始轉動 */
	SetStartSpin(){
		if(gameData.GetGameTypeIndex() != gameData.EnumGameType.FreeGame){
			return
		}
		GameG.PlayGameBGM("bgm_fg")
		this.SetWildMulti()
		
		this.freeSpinCount = gameData.leftFreeGame.Count -1
        this.txtLeftCount.string = (gameData.leftFreeGame.Count -1)
	},

	/** 停止旋轉 */
	SetStopSpin(){
		if(gameData.gameOptions != null){
			this.SetSelectCount(gameData.gameOptions.Times)
		}
	},

	/** 設置wild倍率 */
	SetWildMulti(data){
		this.txtWildMulti.string = ""
		this.animWildMulti.node.active = false
		if(data == null || data.length == 0){
			return
		}
		for(let i in data){
			if(data[i].Multi > 1){
				this.txtWildMulti.string ="x" + data[i].Multi
				this.animWildMulti.play()
				this.animWildMulti.node.active = true
			}
		}

		this.animWildMulti.node.scale = 0.8
		GameG.NewTween(this.animWildMulti.node)
		.to(0.2, { scale: 1.5})
		.to(0.1, { scale: 1})
		.start()
	},
	
	/** 設置選擇次數 */
	SetSelectCount(count){
		if(count > 0){
			this.txtSelectCount.string = count
			this.animSelectCount.node.active = true
			this.animSelectCount.play()
		}
		else{
			this.txtSelectCount.string = count
			this.animSelectCount.stop()
			this.animSelectCount.node.active = false
		}
	},

    /** 設置贏得金額 */
	SetWinMoney(money){
		this.moneyLerp = money
		this.winMoney = money
		this.txtWinMoney.string = GameG.FormatNum(money)
	},
	/** 重置贏得金額 */
	ResetWinMoney(){
		this.moneyLerp = 0
		this.winMoney = 0
		this.txtWinMoney.string = ""
	},
    /** 贏得金額跑分 */    
    AnimWinMoney(money){
		if(money == 0){
			return		
		}
		this.moneyLerp = this.winMoney
		this.moneyStart = this.winMoney
		this.winMoney = this.winMoney + money
		this.showTime = gameData.GetMoneyShowTimer(money) * 1000
		this.startTime = new Date().getTime()
		
		uiinputEvent.SetEventKeyDown(this.onKeyDown,"UIFreeSpin")
    },
    
	onKeyDown(event){
		UIFreeSpin.AnimWinMoneyComplete()
    },
    /** 贏得金額跑分結束 */
    AnimWinMoneyComplete(){
		this.moneyLerp = this.winMoney
		this.SetWinMoney(this.winMoney)
		uiinputEvent.RemoveKey("UIFreeSpin")
	},
	/** 結算介面 */
	ShowResult(data, callback){
		if(data == null || gameData.leftFreeGame.Count > 0){
			if(callback != null){
				callback()
			}
			return
		}
		this.rootResult.active = true
		this.txtResultMoney.string = GameG.FormatNum(data.FreeGameWinMoney)
		GameG.PlayGameSound("se_fgend")
		gameData.leftFreeGame = null

        GameG.ScheduleOnce(function(){
            if(callback != null){
				callback()
			}
        }, 4)
	},
};

module.exports = UIFreeSpin