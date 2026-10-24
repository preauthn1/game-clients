var HallG = require("Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var symbolTable = []
var txtSymbol = []

var UISymbolDetail = {
	extends: cc.Component,

//離開遊戲
	onExit(){
	
	},

	Init(root)
	{
		this.rootRect = root
		this.rootRect.active = (false)
	
		this.btnClose = cc.find("ButtonClose", root).getComponent(cc.Button)
		this.btnClose.node.on('click',function()
		{
			GameG.PlayGameSound("se_click")
			Hide()
		})
		
		this.rootNormalBg =cc.find("ImageNormalBg", root)
		this.rootFeatureBg =cc.find("ImageFeatureBg", root)
		this.rootFeatureBg.active =(false)
		
		this.imgSymbol =cc.find("ImageSymbol", root).getComponent(cc.Sprite)
		this.symbolClass = []
		this.symbolClass.SetNormal = function(isNormal)
		{
			if(isNormal)
			{
				this.imgSymbol.anchoredPosition = cc.v2(-95, 110)		
			} 
			else
			{
				this.imgSymbol.anchoredPosition = cc.v2(0, 110)
			}
		}
		this.txtContent = cc.find("TextContent", root).getComponent(cc.Label)
		
		this.rootSymbol = cc.find("RootDetail/Count", root)
		
		txtSymbol = []
		txtSymbol[2] =cc.find("RootDetail/Count/Text2", root).getComponent(cc.Label)
		txtSymbol[3] =cc.find("RootDetail/Count/Text3", root).getComponent(cc.Label)
		txtSymbol[4] =cc.find("RootDetail/Count/Text4", root).getComponent(cc.Label)
		txtSymbol[5] =cc.find("RootDetail/Count/Text5", root).getComponent(cc.Label)
		txtSymbol[6] =cc.find("RootDetail/Count/Text6", root).getComponent(cc.Label)
		txtSymbol[7] =cc.find("RootDetail/Count/Text7", root).getComponent(cc.Label)
		txtSymbol[8] =cc.find("RootDetail/Count/Text8", root).getComponent(cc.Label)
		txtSymbol[9] =cc.find("RootDetail/Count/Text9", root).getComponent(cc.Label)
	},

	// 顯示介面
	Show(data)
	{
		this.rootRect.active =(true)
		this.symbolClass.SetNormal(true)
		
		data.symbolName = gameData.ChangeSymbolName(data.symbolName)
		
		let isFeature = (string.find(data.symbolName, "p") == null)
		this.rootNormalBg.active = (isFeature == false)
		this.rootFeatureBg.active = (isFeature == true)
		
		this.imgSymbol.sprite = null
		GameG.SetImageSprite(imgSymbol,"symbol_n_" + data.symbolName)
		this.imgSymbol.active = (this.imgSymbol.sprite != null)
		
		for(let k in (txtSymbol))
		{
			let v = txtSymbol[k]
		
			let detail = gameData.GetSymbolPayDetail(data.symbolName,k)
			txtSymbol[k].active =(detail != null)
			if(detail != null){
				txtSymbol[k].text = detail.payout
			}
		}
		
		let haveCount = false
		for(let k in (txtSymbol))
		{
			let v = txtSymbol[k] 

			if(txtSymbol[k].activeSelf == true)
			{
				haveCount = true
			}
		}
		this.rootSymbol.active =(haveCount)
		
		let descData = gameData.GetDescriptions(data.symbolName)
		if(descData != null)
		{
			this.txtContent.text = descData.Desc
			
			if(haveCount == false)
			{
				this.symbolClass.SetNormal(false)
			}
		}
		else
		{
			this.txtContent.text = ""
		}
	},

	// 關閉介面
	Hide()
	{
		this.rootRect.active =(false)	
	},

	// 回合開始
	SetGameStart()
	{
		
	},

	// 回合結束
	SetGameEnd()
	{
		
	},

	SetStartSpin()
	{
		
	},
};

module.exports = UISymbolDetail
