var G = require( "Global")
var GameG = require("GameGlobal")
var GameConfig = require("GameConfig")
var GameLayer = require("GameLayer")
var utils=require("../Base/utils");

var betPrefab	= null
var maxBetCount = 30
var betMoveDuration = 0.5
var winLoseMoneyDuration = 3.0
var chipData = []
var sideBet = 0

var Seat = null

var UIUser = {
	extends: cc.Component,

	Init(){
		betPrefab 	= cc.find("Canvas/GameLayer/UIUser/BetPrefab");
		betPrefab.active =(false)
		chipData = []
		sideBet = 0
	},

	SetChipData(data){
        for (let k=0; k<data.length; k++) {
			let v = data[k] 
			chipData[k] = {}
			chipData[k].spriteName 	= "chip_"+(k+1).toString()+"_t"
			chipData[k].money 		= v
		}
	},

	SetSideBet(money){
		sideBet = money
		// table.insert(chipData,1,[
		// 	spriteName = "chip_1_t",
		// 	money = money
		// ])

		let data = {}
		data.spriteName = "chip_1_t"
		data.money = money
		chipData.unshift(data)

		for(let i = 1;  i <= 2; ++ i){
			let sideText = cc.find("Canvas/GameLayer/UIUser/SideBet/SideImage"+i+"/Text").getComponent(cc.Label)
			sideText.string = GameLayer.MoneyText(sideBet)
		}
	},

	GetSideBetMoney(){
		return sideBet
	},

	Create(root) {
		let target = {}
		Seat = new require("Seat")(root, target)

		let ownFrame 			= cc.find("OwnFrame",root)
		let userInfo 			= cc.find("UserInfo",root)
		let idText 				= cc.find("UserInfo/IDText",root).getComponent(cc.Label)
		let profileImage 		= cc.find("UserInfo/ProfileFrame/Mask/ProfileImage",root).getComponent(cc.Sprite)
		let moneyText 			= cc.find("UserInfo/MoneyText",root).getComponent(cc.Label)
		let abandonImage		= cc.find("AbandonImage",root).getComponent(cc.Sprite)
		let actionSignImage		= cc.find("ActionSignImage",root).getComponent(cc.Sprite)
		let pleaseBetImage		= cc.find("PleaseBetImage",root).getComponent(cc.Sprite)
		let winMoneyText		= cc.find("WinMoneyText",root).getComponent("TextControl")
		let loseMoneyText		= cc.find("LoseMoneyText",root).getComponent("TextControl")
		let seatStateText		= cc.find("SeatStateText",root).getComponent(cc.Label)
		let offlineImage		= cc.find("OfflineBg",root).getComponent(cc.Sprite)
		let wasteBet 			= cc.find("WasteBet",root)
		let chestSkeleton		= cc.find("ChestSkeleton",root).getComponent(sp.Skeleton)

		//點擊放大
		let amplificationButton = cc.find("AmplificationButton",root).getComponent(cc.Button)
		amplificationButton.node.on('click',function(){ 
			GameG.PlayGameSound("click")
			GameLayer.SwitchAmplificationCardWindow()
		})

		//籌碼
		let wasteBetPool = []
		let betPool = []
		let SetBetPool = function(parent,index){
			betPool[index] = {}
			betPool[index].button 		= cc.find("BetPoolButton"+index,parent).getComponent(cc.Button)
			betPool[index].range 		= cc.find("BetPoolButton"+index+"/Range",parent)
			betPool[index].totalText 	= cc.find("BetPoolButton"+index+"/TotalText",parent).getComponent(cc.Label)
			if (betPool[index].totalText == null)
				betPool[index].totalText = cc.find("BetPoolButton"+index+"/TotalText",parent).getComponent("TextControl")
			betPool[index].pool 		= []
			betPool[index].total 		= 0

			betPool[index].button.interactable = false
			betPool[index].totalText.string = ""
			betPool[index].button.node.on('click',function(){ 
				GameLayer.Bet(index)
			})
		}

		target.GetBetTotal = function(type){
			return betPool[type].total
		};

		//0:底注
		SetBetPool(root,0)
		//3:加注
		SetBetPool(root,3)

		//設置邊注
		let SetSideBetPool = function(){
			if (betPool[1] == null && betPool[2] == null){ 
				let sideBetRoot = cc.find("Canvas/GameLayer/UIUser/SideBet")
				//1:玩家彩金
				SetBetPool(sideBetRoot,1)
				//2:莊家彩金
				SetBetPool(sideBetRoot,2)
			}
		};

		//性別
		let userGender = 0 
		//玩家狀態，0:空位，1:正常，2:觀戰，3:棄牌
		let userState = 0
		//自己
		let own = false

		//////UserInfo
		let ClearUser = function(){ 
			ownFrame.active =(false)
			userInfo.active =(false)
			abandonImage.node.active =(false)
			actionSignImage.node.active =(false)
			pleaseBetImage.node.active =(false)
			winMoneyText.node.active =(false)
			loseMoneyText.node.active =(false)
			offlineImage.node.active =(false)
			amplificationButton.node.active =(false)
			chestSkeleton.node.active =(false)
			seatStateText.string = GameG.GetLocalizedString("等待入桌...")
		};

		ClearUser()
		
		target.SetUser = function (userData){
			userState = userData.State
			own = userData.UserID == GameConfig.getUserID()
			let idColor 	= new cc.Color(255,68,43)
			let ownIdColor 	= new cc.Color(81,176,101)
			if (own == true)
				idText.node.color = ownIdColor
			else
				idText.node.color = idColor

			if(userState == 0 ){
				ClearUser()
			} 
			else{
				userInfo.active 		=(true)
				idText.string 			= "ID:"+userData.UserID
				moneyText.string 		= GameLayer.MoneyText(userData.Money)
				seatStateText.string 	= userState == 2 && GameG.GetLocalizedString("观看中") || ""
				userGender 				= userData.FaceID
				GameG.SetImageSprite(profileImage, null,"face_"+userData.FaceID)
				if(own ){
					ownFrame.active =(true)
					SetSideBetPool()
				}
			}
		};
		
		target.SetMoney = function(money){
			moneyText.string = GameLayer.MoneyText(money)
		};

		target.GetState = function(){
			return userState
		};


		//////顯示
		//輸贏金額
		target.ShowWinLoseMoney = function (money,OnComplete){ 
			if (money == 0){
				return
			}

			let clone = null
			if (money > 0)
				clone = cc.instantiate(winMoneyText.node)
			else
				clone = cc.instantiate(loseMoneyText.node)
			clone.active =(true) 
			clone.parent = root
			clone.position = winMoneyText.node.position
			clone.angle = winMoneyText.node.angle
			clone.scale = 1

			let moneyText = GameLayer.MoneyText(money)
			if (money > 0)
				clone.getComponent("TextControl").string = "+" + moneyText
			else
				clone.getComponent("TextControl").string =  moneyText

			GameG.NewTween(clone)
			.by(winLoseMoneyDuration, { position : cc.v3(0, 15, 0) })
			.call(function(){
				clone.destroy()

				if (OnComplete != null){
					OnComplete()
				}
			})
			.start()
		};

		//請下注圖示
		target.SetActivePleaseBetImage = function(value){
			if (userState == 1){
				pleaseBetImage.node.active =(value)
			}
		};

		//棄牌圖示
		target.SetActiveAbandonImage = function(v){
			abandonImage.node.active =(v)
			if (v && own){
				target.SetActiveAmplificationButton(false) 
			}
		};

		//點擊放大按鈕
		target.SetActiveAmplificationButton = function(v){
			amplificationButton.node.active =(v)
			if (v != null){ 
				GameLayer.CloseAmplificationCardWindow()
			}
		};

		//動作
		let ShowActionSignImage = function(imgName){
			actionSignImage.node.active =(true)
			GameG.SetImageSprite(actionSignImage, null,imgName)

			GameLayer.Delay(1,
				function(){
					actionSignImage.node.active =(false)
				}
			)
		};

		//加注動作
		target.DoubleAction = function(cardsInfo){
			// let soundName = userGender == 0 && "man_raise" || "woman_raise"
			// GameG.PlayGameSound(soundName)
			ShowActionSignImage("double")
		};

		//棄牌動作
		target.AbandonAction = function(cardsInfo){
			// let soundName = userGender == 0 && "man_fold" || "woman_fold"
			// GameG.PlayGameSound(soundName)
			GameG.PlayGameSound("giveup")
			ShowActionSignImage("abandon")
		};

		//寶箱
		target.ShowChestAnimation = function(){
			GameG.PlayGameSound("coin")
			chestSkeleton.node.active =(true)
			chestSkeleton.setAnimation(0, "animation", false)
			GameLayer.Delay(2.5,function (){
				chestSkeleton.node.active =(false)
				//chestSkeleton.stop()
			})
		};

		//////下注
		let GetBetSpriteName = function(money){
			for (let k in chipData){
				let v = chipData[k] 
				if (money == v.money){
					return v.spriteName
				}
			}
			return chipData[0].spriteName
		};

		let GetCastBetRange = function(range){
			let width = betPrefab.width * 0.5 * betPrefab.scaleX
			let rangeX = GameG.Random(range.width * -0.5 + width, range.width * 0.5 - width)
			let height = betPrefab.height * 0.5 * betPrefab.scaleY
			let rangeY = GameG.Random(range.height * -0.5 + height, range.height * 0.5 - height)
			return cc.v2(rangeX,rangeY)
		};

		//廢棄籌碼
		let AddWasteBetPool = function(bet){
			bet.active =(false)
			bet.parent =(wasteBet)
			wasteBetPool.push(bet)
		};

		let GetWasteBetPool = function (){
			let bet = null
			if(wasteBetPool.length > 0 ){ 
				bet = wasteBetPool[0]
			}
			wasteBetPool.shift()
			return bet
		};

		//創建籌碼
		let CreateBet = function(money, betType){
			let bet = null
			//廢棄
			if (wasteBetPool.length > 0){
				bet = GetWasteBetPool()
			} 
			//生成
			else{
				//重複使用
				if (betType.pool.length < maxBetCount){
					bet = cc.instantiate(betPrefab)
				} 
				else{
					bet = betType.pool[0].root
					betType.pool.shift()
				}
			}

			bet.stopAllActions()
			bet.parent 		= betType.range
			bet.scale 		= betPrefab.scale
			//----->需重新編譯程式碼		bet:SetAsLastSibling()
			bet.active 		=(true)

			let betObj = {}
			betObj.root 		= bet
			betObj.img	 		= bet.getComponent(cc.Sprite)
			betObj.txt  		= cc.find("Text",bet).getComponent(cc.Label)
			betObj.money 		= money
			betObj.txt.string	= GameLayer.MoneyText(money)
			GameG.SetImageSprite(betObj.img, null,GetBetSpriteName(money))
			betType.pool.push(betObj)

			return betObj
		};
		
		//拆成多個籌碼
		let SplitBet = function(money){
			if(money <= 0 ){
				return []
			}

			let betArray = []
			let i = chipData.length - 1
			while (i > 0) {
				if (money >= chipData[i].money && money - chipData[i].money >= 0) {
					money = money - chipData[i].money
					betArray.push(chipData[i].money)
				} 
				else{
					i = i - 1
				}
			}
			return betArray
		};

		//排序下注池
		let SortBetPool = function(pool){
			for (let i = 0; i < pool.length-1; ++ i){
				for (let j = 0; j < pool.length-1; ++ j){
					if (pool[j] != null && pool[j+1] != null && pool[j].money < pool[j+1].money){ 
						let tmp = pool[j]
						pool[j] = pool[j+1]
						pool[j+1] = tmp
					}
				}
			}
		};

		//合成籌碼
		let SynthesisBetPool = function(betType){
			SortBetPool(betType.pool)
			
			let betArray = SplitBet(betType.total)
			if (betArray.length >= maxBetCount){
				return
			}

			if (betType.pool == betArray.length){
				return
			}

			let destoryIndex = []

			for (let k in betType.pool){ 
				let v = betType.pool[k] 
				let destory = true
				for (let j=betArray.length - 1; j >= 0; j--) {
					if(v.money == betArray[j] ){
						destory = false
						betArray.splice(j, 1)
						break
					}
				}
				if(destory){ 
					destoryIndex.push(v)
				}
			}

			for (let k in destoryIndex){ 
				let v = destoryIndex[k] 
				for(let i = 0; i < betType.pool.length; ++i){
					if(betType.pool[i] == v ){
						AddWasteBetPool (betType.pool[i].root)
						betType.pool.splice(i, 1)
					}
				}
			}

			for (let k in betArray){ 
				let v = betArray[k] 
				let bet = CreateBet(v, betType)
				bet.root.position = GetCastBetRange(betType.range)
			}
		};
		
		let AddBetTotal = function(money, type){
			let betType = betPool[type]
			betType.total = betType.total + money

			//顯示邊注倍數
			if (type == 1 || type == 2){
				let multiple = Math.ceil(betType.total / sideBet)
				betType.totalText.string = multiple > 0 && multiple || ""
			} 
			//顯示金額
			else {
				betType.totalText.string = betType.total > 0 && GameLayer.MoneyText(betType.total) || ""
			}
		};
		
		//下注
		target.Bet = function (money, type, startNode, duration){
			if (money == 0)
				return
			
			GameG.PlayGameSound("chip")

			if (duration == null){
				duration = betMoveDuration
			}

			let betType = betPool[type]

			let betArray = SplitBet(money)
			for(let k in betArray){ 
				if(k > maxBetCount){
					break
				}

				let v = betArray[k]
				let bet = CreateBet(v, betType)

				if (startNode != null){
					utils.node.setParent(startNode, bet.root)
					bet.root.position = cc.v2(0, 0)
					utils.node.setParent(betType.range, bet.root)
				}

				let destination = GetCastBetRange(betType.range)
				if (startNode == null){
					bet.root.position = destination
				}

				GameG.NewTween(bet.root)
				.to(duration, { position : destination, angle : 0 })
				.call(function(){
					if (type == 0){
						SynthesisBetPool(betType)
					}
				})
				.start()
			}
			AddBetTotal(money,type)
		};

		//收錢
		target.ShootMoney = function(money, startPosition){
			if (money == 0)
				return

			GameG.PlayGameSound("chip")

			let betMoney = Math.abs(money)
			if(betMoney < 100 ){
				betMoney = 100
			}

			let tmpPool = {}
			tmpPool.pool = []
			let range = 200

			let betArray = SplitBet(betMoney)
			for (let k in betArray){
				if (k > maxBetCount){
					break
				}

				let rangeX = GameG.Random(startPosition.x - range, startPosition.x + range)
				let rangeY = GameG.Random(startPosition.y - range, startPosition.y + range)
				let startPosition1 = cc.v3(rangeX,rangeY,0)
				
				let destination = target.GetRoot().position

				let v = betArray[k] 
				let clone = CreateBet(v, tmpPool)
				clone.position = startPosition1

				GameG.NewTween(clone)
				.to(betMoveDuration, { position : destination })
				.call(function(){
					AddWasteBetPool(clone.root)
				})
				.start();
			}
		};

		//清除
		let ClearBetPool = function(betType){
			for(let k in betType.pool){ 
				let v = betType.pool[k] 
				AddWasteBetPool (v.root)
			}

			betType.pool = []
			betType.total = 0
			betType.totalText.string = ""
		};
		
		//移動籌碼
		target.MoveBetPool = function(type, destination){
			let betType = betPool[type]
			if (betType != null){
				if (betType.pool.length == 0)
					return

				GameG.PlayGameSound("chip")

				for (let k in betType.pool){
					let v = betType.pool[k]
					utils.node.setParent(destination, v.root)
		
					GameG.NewTween(v.root)
					.to(betMoveDuration, { position : cc.v2(0, 0) })
					.start();
				}

				GameLayer.Delay(betMoveDuration,function(){ 
					ClearBetPool(betType)
				})
			}
		};

		//下注開關
		target.SetBetPoolActive = function(type,value){
			betPool[type].button.interactable = value
		};

		return target;
	},
};

module.exports = UIUser
