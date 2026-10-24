let GameG = require("GameGlobal")
let gameData = require("GameData")

let rootRect = null
let rootBackground = null
let rootSlotground = null
let scheduleResult = null
let callbackResult = null

/** 用途: 遊戲類型-免費遊戲介面 */
var UIFreeSpin = {

	onExit(){
		scheduleResult = null
		callbackResult = null
    },
    /** 初始化 */
    Init(root){
		let self = this
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
		this.txtSelectCount = cc.find("RootSelectCount/Text", root).getComponent(cc.Label)
		this.txtWildMulti = cc.find("RootWildMulti/Text", root).getComponent(cc.Label)
		
		this.rootSelectCount = cc.find("RootSelectCount", root)
		this.rootSelectCount.active = false
		this.rootWildMulti = cc.find("RootWildMulti", root)
		this.rootWildMulti.active = false


		// 結果介面
		this.rootResult = cc.find("RootResult", root)
		this.txtResultMoney = cc.find("RootResult/TextMoney", root).getComponent(cc.Label)

		// 關閉按鈕
		this.btnHide = cc.find("RootResult/ButtonHide", root).getComponent(cc.Button)
		this.btnHide.node.on('click',function(){
			GameG.PlayGameSound("se_click")	
			self.ShowResultComplete()
		})
    },

    Update(dt){
		
    },

	SetParentSlotground(root){
		root.parent = rootSlotground
		root.position = cc.v2(0, 0)	
	},
    /** 顯示介面 */
    Show(){
		gameData.SetGameTypeIndex(1)
        rootRect.active = true
        rootBackground.active = true
        this.txtLeftCount.string = (gameData.leftFreeGame.Count -1)

		this.rootResult.active = false
		this.SetSelectCount()
    },
    /** 關閉介面 */
    Hide(){
        rootRect.active = false
        rootBackground.active = false
		
		this.rootResult.active = false
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
		this.SetSelectCount()
	},

	// 設置wild倍率
	SetWildMulti(data){
		this.txtWildMulti.string = ""
		this.rootWildMulti.active = false
		if(data == null || data.length == 0){
			return
		}
		for(let i in data){
			if(data[i].Multi > 1){
				this.txtWildMulti.string ="x" + data[i].Multi
				this.rootWildMulti.active = true
			}
		}
	},
	
	// 設置選擇次數
	SetSelectCount(){
		if(gameData.gameOptions != null && gameData.gameOptions.Times > 0){
			this.txtSelectCount.string = "x" + gameData.gameOptions.Times
			this.rootSelectCount.active = true
		}
		else{
			this.txtSelectCount.string = ""
			this.rootSelectCount.active = false
		}
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
		callbackResult = callback
        scheduleResult = GameG.ScheduleOnce(self.ShowResultComplete, 3)
	},
	/** 結算介面停留結束 */
	ShowResultComplete(){
		if(scheduleResult == null){
			return
		}
		GameG.Unschedule(scheduleResult)
		scheduleResult = null
		if(callbackResult != null){
			callbackResult()
		}
		gameData.leftFreeGame = null
	},
};

module.exports = UIFreeSpin