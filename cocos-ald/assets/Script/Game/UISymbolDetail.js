var G = require( "Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var symbolTable = []

/** 用途: 於盤面顯示符號詳細資訊 */
var UISymbolDetail = {
	extends: cc.Component,

//離開遊戲
	onExit(){
	
	},

	Init(root){
		let self = this
		this.rootRect = root
		this.rootRect.active =(false)
        // 關閉按鈕	
		this.btnClose = cc.find("ButtonClose",root).getComponent(cc.Button)
		this.btnClose.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			self.Hide()
		})
		
        // 一般符號
		this.rootNormalBg = cc.find("ImageNormalBg",root)
        // 特殊符號
		this.rootFeatureBg = cc.find("ImageFeatureBg",root)
		this.rootFeatureBg.active =(false)
        // 符號圖片
		this.imgSymbol = cc.find("ImageSymbol",root).getComponent(cc.Sprite)
		this.txtContent = cc.find("TextContent",root).getComponent(cc.Label)
		// 賠付值
		this.txtSymbol = []
		this.txtSymbol[2] = cc.find("Count/Text2/Text",root).getComponent("TextControl")
		this.txtSymbol[3] = cc.find("Count/Text3/Text",root).getComponent("TextControl")
		this.txtSymbol[4] = cc.find("Count/Text4/Text",root).getComponent("TextControl")
		this.txtSymbol[5] = cc.find("Count/Text5/Text",root).getComponent("TextControl")
		this.txtSymbol[6] = cc.find("Count/Text6/Text",root).getComponent("TextControl")
		this.txtSymbol[7] = cc.find("Count/Text7/Text",root).getComponent("TextControl")
		this.txtSymbol[8] = cc.find("Count/Text8/Text",root).getComponent("TextControl")
		this.txtSymbol[9] = cc.find("Count/Text9/Text",root).getComponent("TextControl")
	},

// 顯示介面
	Show(data){
		this.rootRect.active =(true)
        // 判斷是否為特殊符號
		let isFeature = (data.symbolName.indexOf("p") < 0)
		this.rootNormalBg.active =(isFeature == false)
		this.rootFeatureBg.active =(isFeature == true)
		
        // 設置符號圖片
		this.imgSymbol.sprite = null
		GameG.SetImageSprite(this.imgSymbol, G.GetGamePName(), "symbol_n_" + data.symbolName)
		this.imgSymbol.active =(this.imgSymbol.sprite != null)
        // 設置賠付值
		for(let k in (this.txtSymbol)){ 
			let v = this.txtSymbol[k] 
		
			let detail = gameData.GetSymbolPayDetail(data.symbolName,k)
			this.txtSymbol[k].node.parent.active =(detail != null)
			if(detail != null){
				this.txtSymbol[k].node.parent.active =(detail.typeId != "respin")
				this.txtSymbol[k].string = detail.payout
			}
		}
        // 設置符號說明
		this.txtContent.string = gameData.SymbolPayTable[data.symbolName].desc
	},

// 關閉介面
	Hide(){	
		this.rootRect.active =(false)	
	},

// 回合開始
	SetGameStart(){	
		
	},

// 回合結束
	SetGameEnd(){
		
	},

	SetStartSpin(){
		
	},


};

module.exports = UISymbolDetail
