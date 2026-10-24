var GameG = require("GameGlobal")
var gameData = require("GameData")

/** 用途: 中獎賠付線資訊 */
var UIPayInfo = {
	extends: cc.Component,
    /** 初始化 */
	Init(root){
		this.rootRect = root
		this.rootRect.active = false
        
        this.imgSymbol = cc.find("ImageSymbol", root).getComponent(cc.Sprite)
        this.txtWin = cc.find("TextWin", root).getComponent(cc.Label)
        this.txtCount = cc.find("TextCount", root).getComponent(cc.Label)
        this.txtContent = cc.find("TextContent", root).getComponent(cc.Label)
	},

    /** 輪軸開始轉動 */
	SetStartSpin(){
		this.Hide()
    },
    /** 顯示介面 */
	Show(data){
		this.rootRect.active = true
		GameG.Unschedule(this.scheduleCarousel)
		this.SetData(data)        
    },
    /** 關閉介面 */
    Hide(){
		this.rootRect.active = false
		GameG.Unschedule(this.scheduleCarousel)
    },
	/** 中獎輪播 */
    ShowResultCarousel(data){
		if(data == null || data.length == 0){
			return
        }
        let self = this
		let index = 0
		GameG.Unschedule(this.scheduleCarousel)
		this.rootRect.active = true
		this.scheduleCarousel = GameG.Schedule(function(){            
			self.SetData(data[index])
			index = index +1
			if(index >= data.length){
				index = 0
			}
		}, gameData.IntervalCarousel, null, 0)
	},
	/** 設置資料 */
	SetData(data){
        let reelIndex = data.BlinkPositions[0].Reel
        let rowIndex = data.BlinkPositions[0].Row
        let reelResult = gameData.GetGameResultReel(reelIndex, rowIndex)
        if(reelResult != null){
            GameG.GetImageSprite(this.imgSymbol,"symbol_" + reelResult.Symbol.SymbolName)
        }

        this.txtCount.string = data.Count
        this.txtWin.string = GameG.GetLocalizedString("win")
        
        let payMoney = GameG.FormatNum(data.WinMoney * data.Multi / data.Way)
        this.txtContent.string = payMoney + "(x" + data.Way + ")"
	},
};

module.exports = UIPayInfo
