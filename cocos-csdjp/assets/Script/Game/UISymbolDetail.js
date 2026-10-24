let GameG = require("GameGlobal")
let gameData = require("GameData")

let rootRect = null

/** 用途: 於盤面顯示符號詳細資訊 */
var UISymbolDetail = {
    /** 初始化 */
    Init(root){        
        rootRect = root
        rootRect.active = false

        let self = this
        // 關閉按鈕
		this.btnHide = cc.find("ButtonHide",root).getComponent(cc.Button)
		this.btnHide.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			self.Hide()
        })
        // 一般符號圖片
        this.imgSymbolNormal = cc.find("Root/ImageNormal/ImageSymbol",root).getComponent(cc.Sprite)
        this.rootNormal = cc.find("Root/ImageNormal",root)
        // 特殊符號圖片
        this.imgSymbolFeature = cc.find("Root/ImageFeature/ImageSymbol",root).getComponent(cc.Sprite)
        this.rootFeature = cc.find("Root/ImageFeature",root)
		// 特殊符號說明
		this.txtContent = cc.find("Root/ImageFeature/TextContent",root).getComponent("LabelSprite")
		// 賠付值
        this.txtSymbol = []
        for(let i= 2; i <= 9; ++i){
            this.txtSymbol[i] = cc.find("Root/Count/Text" + i + "/Text", root).getComponent(cc.Label)
        }

    },
    /** 顯示介面 */
    Show(symbolName){
        rootRect.active = true
        // 判斷是否為特殊符號
        let isFeature = (symbolName.indexOf("w") >= 0)
        this.rootNormal.active = (isFeature == false)
        this.rootFeature.active = isFeature
        // 設置符號圖片
        GameG.GetImageSprite(this.imgSymbolNormal,"symbol_" + symbolName)
        GameG.GetImageSprite(this.imgSymbolFeature,"symbol_" + symbolName)
        // 設置賠付值
        for(let i in this.txtSymbol){ 
            let detail = gameData.GetSymbolPayDetail(symbolName, i)
            this.txtSymbol[i].node.parent.active = (detail != null && detail.paytable != null)
            if(detail != null && detail.paytable != null){
                this.txtSymbol[i].string = detail.paytable
            }
        }
        // 設置符號說明
        this.txtContent.Set(GameG.GetLocalizedString("symbol_desc_" + symbolName))
    },
    /** 關閉介面 */
    Hide(){
        rootRect.active = false
    },
};

module.exports = UISymbolDetail