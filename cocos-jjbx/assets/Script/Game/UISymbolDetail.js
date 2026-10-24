var HallG = require("Global")
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
	
		this.btnClose = cc.find("ButtonClose",root).getComponent(cc.Button)
		this.btnClose.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			self.Hide()
		})
		
		this.rootNormalBg = cc.find("ImageNormalBg",root)
		this.rootFeatureBg = cc.find("ImageFeatureBg",root)
		this.rootFeatureBg.active =(false)
		
		this.imgSymbol = cc.find("ImageSymbol",root).getComponent(cc.Sprite)
		this.txtContent = cc.find("TextContent",root).getComponent(cc.Label)
		
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
		let symbolName = data.symbolName
	// console.log("!!!!!!!!!! symbolName ", symbolName)
		
		let changeName = "g1"
		let changeTargets = [ "g2", "g3", "g4", "g5", "g6"]
		for(let i in (changeTargets)){ 
			let j = changeTargets[i] 

			if(symbolName == j){
				symbolName = changeName
				break
			}
		}
		
		this.rootRect.active =(true)
		
		let normalList = [ "p" ]
		
		let isNormal = false	
		
		for(let i in (normalList)){ 
			let j = normalList[i] 

			if(symbolName.match(j) != null){
				isNormal = true
				break
			}
		}
		
		this.rootNormalBg.active =(isNormal == true)
		this.rootFeatureBg.active =(isNormal == false)
		
		this.imgSymbol.sprite = null
		GameG.SetImageSprite(this.imgSymbol,"symbol_n_" + symbolName)
		//this.imgSymbol.node.active =(this.imgSymbol.sprite != null)
		
		if(symbolName == "g7"){
			this.imgSymbol.node.scale = 0.8
		}
		else if(symbolName == "g8"){
			this.imgSymbol.node.scale = 0.8
		}
		else{
			this.imgSymbol.node.scale = 1.0
		}
	// 關閉Count文字
		for(let k in (this.txtSymbol)){ 
			let v = this.txtSymbol[k] 
			this.txtSymbol[k].node.parent.parent.active =(isNormal)
			break
		}
		
		if(isNormal){
			for(let k in (this.txtSymbol)){ 
				let v = this.txtSymbol[k] 

				let detail = gameData.GetSymbolPayDetail(symbolName, k)
				this.txtSymbol[k].node.parent.active =(detail != null)
				if(detail != null){
					this.txtSymbol[k].string = detail.payout
				}
			}
		}
		this.txtContent.string = gameData.SymbolPayTable[symbolName].desc
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
