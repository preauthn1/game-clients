var G 				= require( "Global")
var GameG 			= require("GameGlobal")
var Tool 			= require("Tool")
var UITreasureBowl 	= require("UITreasureBowl")
var winLoseMoneyDuration 	= 3.0
//local idColor 		= Tool.Color(255, 231, 67, 255)
//local ownIdColor 	= Tool.Color(255, 255, 255, 255)

function UIUser(root,seat){
	  	let own 	= false  	//自己
		let userState = 0  	//玩家狀態，0:空位，1:正常，2:觀戰
		let id 	= 0
		let money = 0		
		let betPercentage = 0
		let flashing = false
		let idBackground 		= cc.find("IDBackground",root)
		let ownBackground 		= cc.find("OwnBackground",root)
		let idText 				= cc.find("IDText",root).getComponent(cc.Label)
		let moneyText 			= cc.find("MoneyText",root).getComponent(cc.Label)
		let winFrame 			= cc.find("WinFrame",root).getComponent(cc.Sprite)
		let profileImage 		= cc.find("ProfileImage",root).getComponent(cc.Sprite)
		let percentageText		= cc.find("PercentageText",root).getComponent(cc.Label)
		let colorImage 			= cc.find("ColorImage",root).getComponent(cc.Sprite)
		let winMoneyText		= cc.find("WinMoneyText",root).getComponent("TextControl")
		let betPath				= cc.find("BetPath",root)
	
		GameG.SetImageSprite(colorImage, "", "color_"+seat)
		idText.node.color = UITreasureBowl.GetColor(seat)
		percentageText.node.color = UITreasureBowl.GetColor(seat)
	
		this.SetMoney = function(num){
			money = num
			moneyText.string = Tool.MoneyText(money)
		}
	
		this.SetPercentage = function(num){
			betPercentage = num
			percentageText.string = Tool.PercentageText(num)
		}
	
		this.GetPercentage = function(){
			return betPercentage
		}
	
		this.GetState = function(){
			return userState
		}
	
		this.GetPosition = function(){
			return GameG.LocalConvertWorldPointAR(profileImage.node)
		}
	
		this.GetMoney = function(){
			return money
		}
	
		this.IsSelf = function(){
			return own
		}
	
		this.Reset = function(){
			betPercentage = 0
			percentageText.string = ""
		}
	
		let  ClearUserInfo = function(){
			idText.string = ""
			moneyText.string = ""
			percentageText.string = ""
			id 	= 0
			money = 0
			betPercentage = 0
			flashing = false
			root.active =(false)
			winFrame.node.active =(false)
			winMoneyText.node.active =(false)
		}
	
		ClearUserInfo()
	
		this.SetUserInfo = function(userData){
			userState = userData.State
			own = Tool.IsSelf(userData.UserID)
			if(userState == 0 ){
				ClearUserInfo()
			} 
			else{
				id = userData.UserID
				money = userData.Money
				moneyText.string = Tool.MoneyText(money)
				idText.string = "ID:"+id
				idBackground.active =(own == false)
				ownBackground.active =(own)
			//idText.color = own and ownIdColor or idColor
				root.active =(true)
				Tool.SetFaceID(profileImage, userData.FaceID)
			}
		}
	
	//輸贏金額
		this.ShowWinLoseMoney = function(money,OnComplete){ 
			let clone = cc.instantiate(winMoneyText.node)
			clone.active =(true) 
			clone.parent =(root)
			clone.position = winMoneyText.node.position
			clone.angle = winMoneyText.node.angle
			clone.scale = 1
			let moneyText = Tool.MoneyText(money)
			clone.getComponent("TextControl").string = money > 0 ? "+"+moneyText : moneyText
			let destination = clone.position.y + 30
			cc.tween(clone)
				.to(winLoseMoneyDuration, { y: destination})
				.call(function(){
					if(OnComplete != null ){ OnComplete() }
					clone.destroy()
				})
				.start()
		}
	
	// 閃爍
		this.Flicker = function(){
			if(flashing ){ return }
			flashing = true
			winFrame.node.active =(true)
			winFrame.opacity = 0
			cc.tween(winFrame.node)
				.repeat(3,
					cc.tween().to(0.5, { opacity: 255 })
						.to(0.5, { opacity: 0 })
				)
				.call(function(){
					flashing = false
					winFrame.node.active =(false)
				})
				.start()
		}
	
	// 顯示自己座位
		this.ShowOwnSeat = function(){
			cc.tween(root)
				.repeat(3,
					cc.tween().to(0.2, { scale: 1.3 })
					.to(0.2, { scale: 1 })
				)
				.start()
		}
	
		this.BetPath = function(){
			return [GameG.LocalConvertWorldPointAR(profileImage.node),GameG.LocalConvertWorldPointAR(betPath)]
		}

};

module.exports = UIUser
