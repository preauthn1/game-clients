var HallG = require("Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var rootRect = null
var prefab = null
var poolBet = []
var poolUpgrade = []
var betIndex = null
var clickCallback = null

var UIBetRate = 
{
	extends: cc.Component,

	//離開遊戲
	onExit()
	{
		betIndex = null
		
		// for i=1, poolBet.length do
		for(let i = 0; i < poolBet.length; ++ i)
		{
			poolBet[i] = null
		}
		// for i=1, poolUpgrade.length do
		for(let i = 0; i < poolUpgrade.length; ++ i)
		{
			poolUpgrade[i] = null
		}
	},

	Init(root)
	{
		rootRect = root
			
	    prefab = cc.find("LayoutGroup/Button", root)
		prefab.active =(false)
	},

	CreateClone(index)
	{
		if(poolBet[index] != null) { return poolBet[index] }
		let clone = cc.instantiate(prefab)
		if(clone == null){ return null }
		clone.parent =(prefab.parent)
		clone.position = cc.v3(0, 0, 0)
		clone.scale = cc.v3(1, 1, 1)
		clone.name = prefab.name + index
//----->需重新編譯程式碼	clone:SetAsFirstSibling()
		clone.active = (true)
			
		poolBet[index] = []
		poolBet[index].root = clone
		poolBet[index].txtNormal = cc.find("TextNormal", clone).getComponent("TextControl")
		poolBet[index].txtSelect = cc.find("ImageSelect/Text", clone).getComponent("TextControl")
		poolBet[index].imgSelect = cc.find("ImageSelect", clone).getComponent(cc.Sprite)
		poolBet[index].btn = clone.getComponent(cc.Button)
		poolBet[index].btn.node.on('click',function()
		{
			GameG.PlayGameSound("se_betclick")
			this.ClickChoose(index)
		})
	},
	
	// 設定點擊後callback
	SetClickCallback(callback)
	{
		clickCallback = callback
	},

	ClickChoose(index)
	{
		if(index == betIndex)
		{
			return
		}
		
		betIndex = index
		this.ShowUpgrade(index)
		this.ShowBetSelect(index)
		
		if(clickCallback != null)
		{
			clickCallback(index)
		}
		
		if(index == 2)
		{
			GameG.PlayGameSound("se_reel4")
		} 
		else if(index == 3)
		{
			GameG.PlayGameSound("se_reel3")
		} 
		else if(index == 4)
		{
			GameG.PlayGameSound("se_reel2")
		}
	},

	SetBetRate(betRate)
	{
		// for i=1, gameData.BetRates.length do
		for(let i = 0; i < gameData.BetRates.length; ++ i)
		{
			if(gameData.BetRates[i] == betRate)
			{
				betIndex = i
				this.ShowUpgrade(i)
				this.ShowBetSelect(i)
			}
		}
	},

	SetBetRateList()
	{
		// for i=1, gameData.BetRates.length do
		for(let i = 0; i < gameData.BetRates.length; ++ i)
		{
			this.CreateClone(i)
			
			poolBet[i].txtNormal.text = "X" + gameData.BetRates[i]
			poolBet[i].txtSelect.text = "X" + gameData.BetRates[i]
			
			// 強力輪軸升級
			poolUpgrade[i] = []
			poolUpgrade[i].root = cc.find("UpgradeGroup/Upgrade" + (i + 1) + "/RootOpen", rootRect)
			poolUpgrade[i].root.active =(false)
			
			if(gameData.GetBetRate() == null)
			{
				gameData.SetBetRateIndex(i)
			}
		}		
		this.SetBetRate(gameData.GetBetRate())
	},

	// 顯示強力輪軸升級
	ShowUpgrade(index)
	{
		gameData.SetBetRateIndex(index)
		
		for(let k in (poolUpgrade))
		{
			let v = poolUpgrade[k]
			poolUpgrade[k].root.active =(k<=index)
		}
	},

	ShowBetSelect(index)
	{
		// for i=1, poolBet.length do
		for(let i = 0; i < poolBet.length; ++ i)
		{
			poolBet[i].imgSelect.active = (i == index)
		}
	},

	SetInteractable(enabled)
	{
		// for i=1, poolBet.length do
		for(let i = 0; i < poolBet.length; ++ i)
		{
			poolBet[i].btn.interactable = enabled
		}
	},
};

module.exports = UIBetRate
