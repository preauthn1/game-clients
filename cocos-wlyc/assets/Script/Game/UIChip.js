let GameG = require("GameGlobal")
let gameData = require("GameData")

let rootRect = null
let scrollRect = null
let pool = []
let currentIndex = null
let clickCallback = null

/** 用途: 下注金額介面 */
var UIChip = {
	/** 遊戲離開(斷線重連) */
	onExit(){
        pool = []
        currentIndex = null
        clickCallback = null
    },
    /** 初始化 */
    Init(root){
        rootRect = root
        rootRect.active = false

        let self = this
        // 標題文字
        let txtTitle = cc.find("ScrollView/ImageTitle/Text", root).getComponent(cc.Label)
        txtTitle.string = GameG.GetLocalizedString("chipTitle")
        // 預載物件
        this.prefab = cc.find("ScrollView/Mask/Content/Button",root)	
        this.prefab.active = false
        // 下注金額文字
        this.txtBet = cc.find("Canvas/GameLayer/UIMainGame/ButtonChip/Text").getComponent(cc.Label)
        // 關閉按鈕
        this.btnHide = cc.find("ButtonHide", root).getComponent(cc.Button)
        this.btnHide.node.on('click',function(){
            GameG.PlayGameSound("se_click")
            self.Hide()
	    })

        // 滾動
        scrollRect = cc.find("ScrollView",root).getComponent("CCScrollView")
        scrollRect.SetCallbackScrollEnd(function(event){
			let child = scrollRect.GetChildAlignCenter()
			let nearIndex = currentIndex
			for(let i in pool){
				if(pool[i].root.uuid == child.uuid){
					nearIndex = i
				}
			}
            // 指定置中物件為當前下注金額
			self.SetCurrentIndex(nearIndex)
		});
    },
    /** 複製預載物件 */
    CreateClone(index){
        if(pool[index] != null){
            return
        }

        let self = this
        let clone = GameG.CreateClone(this.prefab)
        pool[index] = {}
        pool[index].root = clone
		pool[index].txt = cc.find("Text",clone).getComponent(cc.Label)
        pool[index].btn = clone.getComponent(cc.Button)
        pool[index].btn.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			self.SetCurrentBetCount(pool[index].betCount)
	    })
    },
    /** 顯示介面 */
    Show(){
		rootRect.active = true
    },
    /** 關閉介面 */
    Hide(){
        rootRect.active = false
    },

    /** 設定資料 */
    SetData(data){
        for(let i in pool){
            pool[i].root.active = false
        }
        for(let index in data){ 
            let count = data[index] 

            if(pool[index] == null){
                this.CreateClone(index)
            }
            pool[index].root.active = true
            pool[index].root.setSiblingIndex(0)
            pool[index].txt.string = GameG.FormatNum(count)
            pool[index].betCount = count
            pool[index].root.name = GameG.FormatNum(count)

            if(currentIndex == null){                
                this.SetCurrentIndex(index)
            }
        }
    },

    /** 設定目前索引 */
	SetCurrentIndex(index){
        if(pool[index] == null){
            return
        }
        currentIndex = parseInt(index)
        // 設定目前下注金額
        gameData.SetBetMoney(pool[index].betCount)
        // 顯示下注金額
        this.txtBet.string = GameG.FormatNum(gameData.GetTotalBetMoney())
        // 把指定物件置中
		scrollRect.SetChildAlignCenter(pool[index].root)
		if(clickCallback != null){
			clickCallback()
        }
	},

    /** 設定目前倍率 */
    SetCurrentBetCount(value){
        for(let i in pool){
            if(pool[i].betCount == value){
                this.SetCurrentIndex(i)
            }
        }
    },

    /** 設定點擊後回調事件 */
    SetClickCallback(callback){
        clickCallback = callback
    },
    /** 增加下注額 */
    ClickIncrease(){
        this.SetCurrentIndex(currentIndex -1)
    },
    /** 減少下注額 */
    ClickDecrease(){
        this.SetCurrentIndex(currentIndex +1)
    },

};

module.exports = UIChip