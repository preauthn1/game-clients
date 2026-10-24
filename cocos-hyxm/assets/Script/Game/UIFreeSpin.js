let GameG = require("GameGlobal")
let gameData = require("GameData")
let uiinputEvent = require("UIInputEvent")

let rootRect = null
let rootBackground = null
let rootSlot = null
let rootJackpotPool = null

/** 用途: 遊戲類型-免費遊戲介面(對應gameData.EnumGameType.FreeGame) */
var UIFreeSpin = {
    /** 初始化 */
    Init(root){
		let self = this
        rootRect = root
        rootRect.active = false
		
		// free game的背景
		rootBackground = cc.find("Canvas/GameLayer/FreeGame")
		rootBackground.active = false
		// 盤面存放位置
		rootSlot = cc.find("Canvas/GameLayer/FreeGame/RootSlot")
        // 獎金池存放位置
		rootJackpotPool = cc.find("Canvas/GameLayer/FreeGame/RootJackpotPool")
		// 獲得金額
		this.txtWinMoney = cc.find("TextWinMoney", root).getComponent(cc.Label)
		// 剩餘次數
		this.txtLeftCount = cc.find("ImageLeftCount/Text", root).getComponent(cc.Label)

		// 獲得介面
		this.rootObtain = cc.find("RootObtain", root)
		this.rootObtain.active = false
		//this.txtObtainCount = cc.find("RootObtain/Animation/scroll/mask/curtain/TextCount", root).getComponent(cc.Label)
		//this.animObtain = cc.find("RootObtain/Animation", root).getComponent("MotionEffectControl")
		this.leftCount = 0

		// 結果介面
		this.rootResult = cc.find("RootResult", root)
		this.txtResultMoney = cc.find("RootResult/TextMoney", root).getComponent(cc.Label)

		// 關閉按鈕
		this.btnHide = cc.find("RootResult/ButtonHide", root).getComponent(cc.Button)
		this.btnHide.node.on('click',function(){
			GameG.PlayGameSound("se_click")	
			self.ShowResultComplete()
		})
		
		// 熊貓動畫
		this.animPanda = cc.find("panda_c_ske", root).getComponent(dragonBones.ArmatureDisplay)
    },

    Update(dt){
		if(this.moneyLerp != this.winMoney){
			this.moneyLerp = Math.floor(cc.misc.lerp(this.moneyStart, this.winMoney, (new Date().getTime() - this.startTime) / this.showTime))
			this.txtWinMoney.string = GameG.FormatNum(this.moneyLerp)
			if(this.moneyLerp >= this.winMoney){
				this.SetWinMoney(this.winMoney)
			}
		}
    },
    /** 盤面存放位置(依遊戲畫面需求，切換層級用) */
	GetRootSlot(){
		return rootSlot
	},
    /** 獎金池存放位置(依遊戲畫面需求，切換層級用) */
	GetRootJackpotPool(){
		return rootJackpotPool
	},
    /** 顯示介面 */
    Show(){
		// 上個遊戲類型不是免費遊戲
		if(gameData.GetGameTypeIndex() != gameData.EnumGameType.FreeGame){
			GameG.PlayGameBGM("bgm_fg")	
			//this.leftCount = gameData.leftFreeGame.Count
		}
		GameG.LogProcess("[UIFreeSpin] Show")
		gameData.SetGameTypeIndex(gameData.EnumGameType.FreeGame)
        rootRect.active = true
		rootBackground.active = true
		this.rootResult.active = false
		// 剩餘數量
        this.txtLeftCount.string = gameData.leftFreeGame.Count		
    },
    /** 關閉介面 */
    Hide(){
		GameG.LogProcess("[UIFreeSpin] Hide")
        rootRect.active = false
        rootBackground.active = false		
		this.rootResult.active = false
	},

    /** 輪軸開始轉動 */
	SetStartSpin(){
		if(gameData.GetGameTypeIndex() != gameData.EnumGameType.FreeGame){
			return
		}
		// 剩餘數量
		this.leftCount = (gameData.leftFreeGame.Count -1)
        this.txtLeftCount.string = (gameData.leftFreeGame.Count -1)
	},

	/** 停止旋轉 */
	SetStopSpin(){
		
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
		this.showTime = gameData.GetMoneyShowTime(money) * 1000
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

		let self = this
		this.callbackResult = callback
        this.scheduleResult = GameG.ScheduleOnce(function(){
			self.ShowResultComplete()
		}, 3)
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
		gameData.leftFreeGame = null
	},
	/** 顯示獲得次數 */
	ShowObtain(callback){
		/* 這款獲得遊戲與切場景做法相同，故在UICutscene
		if (gameData.leftFreeGame.Count > this.leftCount){
			this.rootObtain.active = true
			this.txtObtainCount.string = gameData.leftFreeGame.Count - this.leftCount
			this.animObtain.play()

			let self = this
			GameG.ScheduleOnce(function(){
				self.rootObtain.active = false
				if(callback != null){
					callback()
				}
			}, 1.5)
		}
		else*/ if(callback != null){
			callback()
		}
		this.leftCount = gameData.leftFreeGame.Count
	},
	//////////////////////////////////////////////////////////////////////////////
	/** 中獎場景動畫 */
	ShowWinMoneyAnimation(data){
		if(data.WinMoney > 0){
			this.animPanda.playAnimation("MG_panda_win")
			this.animPanda.addAnimation("MG_panda_idle")
		}
	},
	//////////////////////////////////////////////////////////////////////////////
	/** 顯示過場動畫 */
	ShowCutSceneAnimation(){
		if(gameData.GetGameModeIndex() != gameData.EnumGameType.FreeGame){
			return
		}
		this.animPanda.playAnimation("MG_start_lightning")
		this.animPanda.addAnimation("MG_panda_idle")
	}
};

module.exports = UIFreeSpin