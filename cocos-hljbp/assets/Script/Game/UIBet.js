var G				= require( "Global")
var GameG			= require("GameGlobal")
var Tool			= require("Tool")
var UITreasureBowl	= require("UITreasureBowl")
var betMoveDuration = 0.8
var maxBetCount 	= 80
var root 			= null
var betPrefab       = null
var range           = null
var clickBetImage   = null
var betingImage     = null
var userBetData     = []
var rubbishBets     = []
var betPool         = []
var accZIndex		= 0

var UIBet = {
	extends: cc.Component,

	Init(){
	    root			= cc.find("Canvas/UI/GameLayer/UIBet")
	    range			= cc.find("Range",root)
	    betPrefab		= cc.find("Range/BetPrefab",root)
	    clickBetImage	= cc.find("ClickBetImage",root).getComponent(cc.Sprite)
	    betingImage		= cc.find("BetingImage",root).getComponent(cc.Sprite)
	    userBetData     = []
	    rubbishBets     = []
	    betPool         = []
	    clickBetImage.node.active =(false)
	    betingImage.active =(false)
		betPrefab.active =(false)
	},

//玩家下注金額
	GetUserBet(seat){
	    return userBetData[seat] != null ? userBetData[seat] : 0
	},

	SetActiveClickBet(value){
	    clickBetImage.node.active =(value)
	},

	SetActiveBeting(value){
	    betingImage.node.active =(value)
	},

//下注總額
	GetBetTotal(){
	    let total = 0
		for(let _ in (userBetData)){ 
			let k = userBetData[_] 

	         total = total + k
	     }
	    return total
	},

	GetUserBetData(){
	    return userBetData
	},

//下注人數
	GetBetPeople(){
	    let count = 0
		for(let _ in (userBetData)){ 
			let k = userBetData[_] 

	        if(k > 0 ){
	            count = count + 1
	        }
	    }
	    return count
	},

//取得玩家下注百分比
	GetUserBetPercentage(seat){
		let percentage = 0
	    if(userBetData[seat] != null ){
		    let betTotal = this.GetBetTotal()
			percentage = userBetData[seat] / betTotal * 100
		}
		return percentage
	},

//丟棄籌碼
	DiscardBet (bet){
		bet.root.active =(false)
		bet.root.position = Tool.Vector3(0,0,0)
		bet.root.scale = betPrefab.scale
		rubbishBets.push(bet)
	},

//創建籌碼
	CreateBet(){
		let bet = cc.instantiate(betPrefab)
		let betTable  = {}
		betTable.root 	= bet
		betTable.img	= bet.getComponent(cc.Sprite)
		betTable.txt  	= cc.find("Text",bet).getComponent(cc.Label)
		return betTable
	},

//給錢
	// ShootMoney(money, endPosition){
	// 	endPosition = GameG.WorldConvertLocalPointAR(range, endPosition)
	//     let betMoney = math.abs(money)
	// 	GameG.PlayGameSound("coin")
	// 	if(betMoney < 100 ){ betMoney = 100 }
	// 	let betArray = Tool.SplitBet(betMoney)
	// 	let self = this
	// 	for(let k in (betArray)){ 
	// 		let v = betArray[k] 
 
	//         if(k > maxBetCount ){ break }
	//         Tool.Delay(k*0.03 , function (){
	// 		    let bet = this.GetBet(v, GetCastBetRange(), [])
	// //----->需重新編譯程式碼		    bet.root:DOMove(endPosition, betMoveDuration):SetEase(CS.DG.Tweening.Ease.InOutQuart):OnComplete(function(){ 
	// //----->需重新編譯程式碼                DiscardBet(bet)
	// //----->需重新編譯程式碼            })
	// 			bet.root.stopAction()
	// 			cc.tween(bet.root)
	// 				.to(betMoveDuration, { position: endPosition}, {easing: 'quadInOut'})
	// 				.call(function(){
	// 					self.DiscardBet(bet)
	// 				})
	// 				.start()
	//         })
	// 	}
	// },

//移動籌碼
	MoveBet(endPosition){
		endPosition = GameG.WorldConvertLocalPointAR(range, endPosition)
		GameG.PlayGameSound("coin")
		let self = this
		for(let k in (betPool)){ 
			let v = betPool[k] 
 
	        //Tool.Delay(k*0.03 , function (){
				v.root.stopAction()
				cc.tween(v.root)
					.delay(Math.random() * 0.1)
					.to(betMoveDuration, { position: endPosition }, { easing: 'quartInOut'})
					.call(function(){
						self.DiscardBet(v)
						// betPool.splice(k, 1)
					})
					.start()
	        //})
		}
		betPool = []

		accZIndex = 0;
	},

 //下注範圍
	GetCastBetRange(){
	    let x = Tool.Random(range.width * -0.5, range.width * 0.5)
	    let y = Tool.Random(range.height * -0.5, range.height * 0.5)
		return Tool.Vector3(x, y, 0)
	},

//取得籌碼
	GetBet(money,startPosition,pool){
	    startPosition = startPosition || Tool.Vector3(0,0,0)
		let bet = null
		
		if(rubbishBets.length > 0 ){ 
			bet = rubbishBets[0]
	        rubbishBets.shift()
		} 
  		else if( rubbishBets.length == 0 && pool.length > maxBetCount ){

	        bet = pool[0]
	        pool.shift()
		} 
   		else{
			bet = this.CreateBet()
	    }
		bet.money = money
		bet.txt.string = Tool.MoneyText(money)
		GameG.SetImageSprite(bet.img, "", Tool.GetBetSpriteName(money))
		bet.root.parent =(range)
		bet.root.position = startPosition
		bet.root.scale = betPrefab.scale
		bet.root.active =(true)
		bet.root.zIndex = accZIndex;
		accZIndex += 1;
	    pool.push(bet)
		return bet
	},

//下注
	Bet(seat,money,path){
		if(money <= 0 ){ return }
	    let effects = path != null
		let duration = effects ? betMoveDuration : 0 
	    let betArray = Tool.SplitBet(money)
	    let delay = 0.05
		let self = this
	    if(effects ){
	        GameG.PlayGameSound("bet")
			for(let k in (betArray)){ 
				let v = betArray[k] 
	            if(k > maxBetCount ){ break }
				let fullPath = Tool.CopyTable(path)	
				for(let k in fullPath){
					fullPath[k] = GameG.WorldConvertLocalPointAR(range, fullPath[k])
				}
				fullPath.push(this.GetCastBetRange())
	            Tool.Delay(delay * k, function (){
						let bet = self.GetBet(v, fullPath[0], betPool)
						fullPath.shift()

						let lastPath = path[0]
						// let totalDistance = 0
						// for(let k in fullPath){
						// 	totalDistance = totalDistance + Math.sqrt(Math.pow(fullPath[k].x - lastPath.x, 2) + Math.pow(fullPath[k].y - lastPath.y, 2))
						// 	lastPath = fullPath[k]
						// }
						
						// lastPath = path[0]
						let sequence = Tool.GetSequence(bet.root)
						for(let k in fullPath){
							// let distance = Math.sqrt(Math.pow(fullPath[k].x - lastPath.x, 2) + Math.pow(fullPath[k].y - lastPath.y, 2))
							// let timer = distance / totalDistance * duration
							//sequence.to(timer, { position: fullPath[k]})
							lastPath = fullPath[k]
						}
						sequence.to(betMoveDuration, { position: lastPath}, {easing: 'quartInOut'} )
						sequence.start()
					},
					this)
	        }
		} 
    	else{
			for(let k in (betArray)){ 
				let v = betArray[k] 

	            if(k > maxBetCount ){ 
					break 
				}
	            let destination = this.GetCastBetRange()
				let bet = this.GetBet(v, null, betPool)
				bet.root.stopAction()
				cc.tween(bet.root)
					.to(duration, { position: destination})
					.start()
	        }
	    }
	
	    this.AddUserBet(seat,money)
	    Tool.Delay(duration,function(){ 
	        UITreasureBowl.RefreshRoulette()
	    }, this)
	},

	AddUserBet(seat,money){
	    let userBet = userBetData[seat] == null ? 0 : userBetData[seat]
	    userBetData[seat] = userBet + money
	},

	Reset(){
	    userBetData = []
	},


};

module.exports = UIBet
