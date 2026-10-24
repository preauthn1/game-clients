let GameG = require("GameGlobal")
let gameData = require("GameData")
let uiinputEvent = require("UIInputEvent")

let rootRect = null
let rootBackground = null
let rootSlotground = null

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
		// 盤面存放位置
        rootSlotground = cc.find("Canvas/GameLayer/FreeGame/Slotground")
		// 獲得金額
        this.txtWinMoney = cc.find("TextWinMoney", root).getComponent(cc.Label)
		// 剩餘次數
		this.txtLeftCount = cc.find("TextLeftCount", root).getComponent(cc.Label)
		this.txtSelectCount = cc.find("AnimSelectCount/Text", root).getComponent(cc.Label)
		this.txtWildMulti = cc.find("AnimWildMulti/Text", root).getComponent(cc.Label)
		
		this.animSelectCount = cc.find("AnimSelectCount", root).getComponent("MotionEffectControl")
		this.animSelectCount.node.active = false
		this.animWildMulti = cc.find("AnimWildMulti", root).getComponent("MotionEffectControl")
		this.animWildMulti.node.active = false

		// 結果介面
		this.rootResult = cc.find("RootResult", root)
		this.txtResultMoney = cc.find("RootResult/TextMoney", root).getComponent(cc.Label)
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

	SetParentSlotground(root){
		root.parent = rootSlotground
		root.position = cc.v2(0, 0)	
	},
    /** 顯示介面 */
    Show(){
		if(gameData.GetGameTypeIndex() != 1){		
			this.ResetWinMoney()
			if(gameData.gameOptions != null){
				this.SetSelectCount(gameData.gameOptions.Times -1)
			}
		}
		gameData.SetGameTypeIndex(1)
        rootRect.active = true
        rootBackground.active = true
        this.txtLeftCount.string = (gameData.leftFreeGame.Count -1)

		this.rootResult.active = false
    },
    /** 關閉介面 */
    Hide(){
        rootRect.active = false
        rootBackground.active = false
		
		this.rootResult.active = false
        this.ResetWinMoney()
	},

    /** 輪軸開始轉動 */
	SetStartSpin(){
		if(gameData.GetGameTypeIndex() != 1){
			return
		}
		GameG.PlayGameBGM("bgm_fg")
		this.SetWildMulti()
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
        // 目前跑分值
		this.moneyLerp = this.winMoney
        // 開始跑分值
		this.moneyStart = this.winMoney
        // 目標跑分值
		this.winMoney = this.winMoney + money
        // 跑分總時間
		this.showTime = gameData.GetMoneyShowTimer(money) * 1000
        // 開始跑分時間
		this.startTime = new Date().getTime()
		
        // 設置全畫面點擊事件
		uiinputEvent.SetEventKeyDown(this.onKeyDown,"UIFreeSpin")
    },
    
	onKeyDown(event){
		UIFreeSpin.AnimWinMoneyComplete()
    },
    /** 贏得金額跑分結束 */
    AnimWinMoneyComplete(){
		this.moneyLerp = this.winMoney
		// 設置贏得金額
		this.SetWinMoney(this.winMoney)
        // 移除全畫面點擊事件
		uiinputEvent.RemoveKey("UIFreeSpin")
	},
	/** 結算介面 */
	ShowResult(data, callback){
		this.rootResult.active = true
		this.txtResultMoney.string = GameG.FormatNum(data.FreeGameWinMoney)
		GameG.PlayGameSound("se_fgend")

        GameG.ScheduleOnce(function(){
            if(callback != null){
				callback()
			}
        }, 8.3)
	},
};

module.exports = UIFreeSpin