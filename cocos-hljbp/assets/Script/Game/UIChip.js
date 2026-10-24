var G 			= require( "Global")
var GameG 		= require("GameGlobal")
var GameLayer	= require("GameLayer")
var Tool 		= require("Tool")
var root 			= null
var chipPrefab 		= null
var chips			= null
var autoBetButton 	= null
var autoOpenImage	= null
var recharge		= null
var rechargeText	= null
var rechargeButton 	= null
var chipPool		= []
var betLimit		= null
var chooseChipIndex	= 0
var lastChooseIndex	= 1
var autoBet			= false

var UIChip = {
	extends: cc.Component,

	Init (){
		root 				= cc.find("Canvas/UI/GameLayer/UIChip")
		chipPrefab 			= cc.find("ScrollRect/Chips/ChipPrefab",root)
		chips				= cc.find("ScrollRect/Chips",root)
		autoBetButton 		= cc.find("AutoBetButton",root).getComponent(cc.Button)
		autoOpenImage 		= cc.find("AutoBetButton/OpenImage",root).getComponent(cc.Sprite)
		recharge			= cc.find("Recharge",root)
		rechargeText		= cc.find("Recharge/Text",root).getComponent(cc.Label)
		rechargeButton		= cc.find("Recharge/Button",root).getComponent(cc.Button)
	
		chipPool 			= []
		betLimit			= null
		chooseChipIndex 	= 0
		lastChooseIndex   	= 1
		autoBet 			= false
	
		let self = this
		autoBetButton.node.on('click',function(){
			GameG.PlayGameSound("click")
			self.SetAutoBet(autoBet == false)
		})
	
		rechargeButton.node.on('click',function(){
			GameG.PlayGameSound("click")
			let openparam = CS.WindowNodeInitParam("UIRecharge", CS.AppDefine.HallNumber)
	        CS.WindowManager.Instance.OpenWindow(openparam)
		})
	
	
		autoBetButton.node.active =(false)
		autoOpenImage.node.active =(false)
		chipPrefab.active =(false)
		chips.active =(false)
		recharge.active =(false)
	},

	SetAutoBet(value){
		autoBet = value
		autoOpenImage.node.active =(value)
	},

	AutoBetIsOn(){
		return autoBet
	},

	SetChooseChip(index){	
		if(chooseChipIndex == index ){ return }
		if(chooseChipIndex != 0 ){ 
			chipPool[chooseChipIndex].img_select.node.active =(false)
			cc.tween(chipPool[chooseChipIndex].root)
				.to(0.2, { scale: chipPrefab.scale })
				.start()
		}
		
		chooseChipIndex = index
		if(chipPool[index] != null ){ 
			let newScale = chipPrefab.scale + 0.15
			chipPool[index].img_select.node.active =(true)
			cc.tween(chipPool[chooseChipIndex].root)
				.to(0.2, { scale: newScale })
				.start()
		}		
	},

	CreateChip (chipData){
		if(chipPool.length > 0 ){ return }
		chipData.sort((dataA,dataB) => {				
			return dataA - dataB
		})
		let self = this
		for(let k in chipData){
			let i = parseInt(k) +1
			let clone = cc.instantiate(chipPrefab)
			clone.active =(true)
			clone.parent =(chipPrefab.parent)
		//clone.transform.localPosition = Tool.Vector3(0,0,0)
			clone.scale = chipPrefab.scale
			clone.name = chipPrefab.name + i
			chipPool[i] = {}
			chipPool[i].root		= clone
			chipPool[i].btn 		= clone.getComponent(cc.Button)
			chipPool[i].img_normal 	= clone.getComponent(cc.Sprite)
			chipPool[i].img_select 	= cc.find("Select",clone).getComponent(cc.Sprite)
			chipPool[i].txt 		= cc.find("Text",clone).getComponent(cc.Label)
			chipPool[i].money 		= chipData[k]
			chipPool[i].img_select.node.active =(false)
			chipPool[i].txt.string 	= Tool.MoneyText(chipData[k])
			let index = i > 8 ? 8 : i			
			GameG.SetImageSprite(chipPool[i].img_normal, "", "chip_"+(index).toString())
			chipPool[i].btn.node.on('click',function(){
				GameG.PlayGameSound("click")
				self.SetChooseChip(i)
				lastChooseIndex = i
			})
		}
	},

	GetChipPosition (money){
		for(let k in (chipPool)){ 
			let v = chipPool[k] 

			if(money == v.money ){ 
				return GameG.LocalConvertWorldPointAR(v.root)
			}
		}
		return GameG.LocalConvertWorldPointAR(chipPool[1].root)
	},

	GetChipBetPath (money){
		return [this.GetChipPosition(money)]
	},

	GetChooseChipMoney (){
		return chipPool[chooseChipIndex] == null && chipPool[1].money || chipPool[chooseChipIndex].money
	},

	RefreshChipInteractable(){
		let betTotal  = GameLayer.GetOwnTotalBet()
		let userMoney = GameLayer.GetUserMoney()
		for(let k in (chipPool)){ 
			let v = chipPool[k] 
			let index = parseInt(k)
			let active = userMoney - v.money >= 0 && v.money + betTotal <= betLimit 
			v.btn.interactable = active
			if(active == false && chooseChipIndex >= index ){
				this.SetChooseChip(index - 1)
			}
		}
	},

	SetChipsActive(value){
		chips.active =(value)
		autoBetButton.node.active =(value)
		if(value ){ 
			this.SetChooseChip(lastChooseIndex)
			this.RefreshChipInteractable()
			this.CheckCoinInsufficient()
		}
	},

	SetBetLimit(num){
		betLimit = num
	},

//充值訊息
	CheckCoinInsufficient(){
		let userMoney = GameLayer.GetUserMoney()
		let betMin 	= chipPool[1].money
		if(betMin > userMoney ){
            rechargeText.string = GameG.GetLocalizedString("请前往充值").replace("####", Tool.MoneyText(betMin));
			recharge.active =(true)
		}
	},


};

module.exports = UIChip
