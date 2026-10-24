let GameG = require("GameGlobal")
let gameData = require("GameData")

let rootRect = null

let SymbolDataDic = 
{
    "g1":{ pos:cc.v2(0,107)},
    "s1":{ pos:cc.v2(0,107)},
}

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
        // 符號圖片
        this.imgSymbolSprite = cc.find("Root/ImageSymbol",root).getComponent(cc.Sprite)
        this.imgSymbolSpritePos = this.imgSymbolSprite.node.position
        // 一般符號
        this.rootNormal = cc.find("Root/ImageNormal",root)
        // 特殊符號
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
        let isNormal = (symbolName.indexOf("p") >= 0)
        this.rootNormal.active = isNormal
        this.rootFeature.active = (isNormal == false)
        // 設置符號圖片
        GameG.GetImageSprite(this.imgSymbolSprite,"symbol_" + symbolName)
        // 設置位置
        this.imgSymbolSprite.node.position = this.imgSymbolSpritePos
        // 設置賠付值
        for(let i in this.txtSymbol){ 
            let detail = gameData.GetSymbolPayDetail(symbolName, i)
            this.txtSymbol[i].node.parent.active = false
            if(detail != null && detail.paytable != null && detail.paytable != 0){
                this.txtSymbol[i].node.parent.active = true
                this.txtSymbol[i].string = detail.paytable
            }
        }
        let symbolData = SymbolDataDic[symbolName]
        if(symbolData != null)
        {
            this.imgSymbolSprite.node.position = symbolData.pos
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