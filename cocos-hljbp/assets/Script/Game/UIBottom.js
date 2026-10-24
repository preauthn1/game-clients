var G			= require( "Global")
var GameG		= require("GameGlobal")
var GameLayer	= require("GameLayer")
var UIMain		= require("UIMain")
var Tool 		= require("Tool")
var root 						= null
var idText						= null
var moneyText					= null
var profileImage				= null
var winMoneyText 				= null
var currentBetText 				= null
var currentBetPercentageText 	= null
var winningHistoryButton 		= null
var betHistory		= []
var historyData 		= []

var UIBottom = {
	extends: cc.Component,

	Init(){
		root							= cc.find("Canvas/UI/GameLayer/UIBottom")
		idText							= cc.find("UserInfo/IDText",root).getComponent(cc.Label)
		moneyText						= cc.find("UserInfo/UserMoney/Text",root).getComponent(cc.Label)
		profileImage					= cc.find("UserInfo/ProfileImage",root).getComponent(cc.Sprite)
		winMoneyText 					= cc.find("UserInfo/WinMoneyText",root).getComponent("TextControl")
		currentBetText 					= cc.find("BetHistory/BetText",root).getComponent(cc.Label)
		currentBetPercentageText 		= cc.find("BetHistory/PercentageText",root).getComponent(cc.Label)
		winningHistoryButton 			= cc.find("WinningHistoryButton",root).getComponent(cc.Button)
		this.CreateBetHistory()
		historyData 					= []
		currentBetText.string 			= "0"
		currentBetPercentageText.string	= "0%"
		moneyText.string				= ""
		idText.string 					= ""
	
		winningHistoryButton.node.on('click',function(){ 
			GameG.PlayGameSound("click")
			UIMain.SetActiveWinningRecord(true)
		});

	},

	SetUserInfo(data){
		idText.string = "ID:"+data.UserID
		moneyText.string = Tool.MoneyText(data.Money)
		profileImage.sprite = null
		Tool.SetFaceID(profileImage,data.FaceID)
	},

//刷新玩家金額
	RefreshMoney(){
		let userMoney = GameLayer.GetUserMoney()
		moneyText.string = Tool.MoneyText(userMoney)
	},

	//輸贏金額
	ShowWinLoseMoney (money,OnComplete){ 
		let clone = cc.instantiate(winMoneyText.node)
		clone.active =(true) 
		clone.parent =(winMoneyText.node.parent)
		clone.position = winMoneyText.node.position
		clone.rotation = winMoneyText.node.rotation
		clone.scale = 1
		let moneyText = Tool.MoneyText(money)
		clone.getComponent("TextControl").string = money > 0 ? "+"+moneyText : moneyText
		let destination = clone.position.y + 30
		cc.tween(clone)
			.to(3, {y: destination})
			.call(function(){
				clone.destroy()
				if(OnComplete != null ){ OnComplete() }
			})
			.start()
	},

	CreateBetHistory(){
		let betHistoryPrefab = cc.find("BetHistory/History/Prefab",root)
		for(let  i = 1;  i <= 5; ++ i){
			let clone = cc.instantiate(betHistoryPrefab)
			clone.parent =(betHistoryPrefab.parent)
			clone.scale = betHistoryPrefab.scale
			betHistory[i] = {}
			betHistory[i].root 					= clone
			betHistory[i].title 				= cc.find("Title",clone).getComponent(cc.Label)
			betHistory[i].betText 				= cc.find("BetText",clone).getComponent(cc.Label)
			betHistory[i].percentageText		= cc.find("PercentageText",clone).getComponent(cc.Label)
			betHistory[i].title.string 			= GameG.GetLocalizedString("玩家下注").replace("####", i);
			betHistory[i].betText.string 		= ""
			betHistory[i].percentageText.string	= ""
			clone.active =(true)
		}
		betHistoryPrefab.active =(false)
	},

	AddBetHistory(data){
		historyData.unshift(data)
		if(historyData.length > 5 ){
			historyData.pop()
		}
		this.RefreshBetHistory()
	},

	RefreshBetHistory(){
		for(let k in (historyData)){ 
			let v = historyData[k] 
			let index = parseInt(k) +1

			betHistory[index].betText.string = Tool.MoneyText(v.bet)
			betHistory[index].percentageText.string = Tool.PercentageText(v.percentage)
			betHistory[index].betText.node.color = v.win ? Tool.Color(249,80,81,255) : Tool.Color(255,255,255,255)
			betHistory[index].percentageText.node.color = v.win ? Tool.Color(249,80,81,255) : Tool.Color(255,255,255,255)
		}
	},

	SetCurrentBet(bet,percentage){
		currentBetText.string = Tool.MoneyText(bet)
		currentBetPercentageText.string = Tool.PercentageText(percentage)
	},


};

module.exports = UIBottom
