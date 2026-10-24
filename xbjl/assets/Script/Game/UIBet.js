var G = require( "Global")
var GameG = require("GameGlobal")
var gameAudio = require( "GameAudio")
var gameData = require( "GameData")
var fmg  = require( "FFunction")
var gameLayer = require("GameLayer")
var poolCount = 100

function UIBet(index,root,rootFront){
	
	let canvas = cc.find("Canvas/GameLayer")
	let perfab = cc.find("GameLayer/CastPool/PfCast",canvas)
	
	let anchor_start = cc.find("GameLayer/downMune/users",canvas)
	
	let txt_all = cc.find("TextAll",rootFront).getComponent(cc.Label)
	let txt_my =  cc.find("TextMy",rootFront).getComponent(cc.Label)
	let luckyStar = cc.find("Star",rootFront).getComponent(cc.Sprite)
	
	let btn = root.getComponent(cc.Button)
	let range = cc.find("Range",root)
	let blink = cc.find("blink",root).getComponent(cc.Sprite)
	let luckyStarEffect = cc.find("LuckyStarEffect",root)
	let luckyStarEffectPos = luckyStarEffect.position
	luckyStarEffect.active =(false)
	
	let pool = []
	let castBetAll = 0
	let castBetMy = 0
	let useIndex = 0
	
	let self = this
	this.showWinAudio = false
	this.showCleaerAudio = false
	
	this.SetCallback = function(data){ 
		this.callback = data 
	}
	
	btn.node.on('click',function(){ 
		self.callback(index) 
	})
	
	let CreateClone = function(index){
		let clone = cc.instantiate(perfab)
		if(clone == null){ return null }
		clone.parent =(perfab.parent)
		clone.position = cc.v3(0, 0, 0)
		clone.scale = 1
		
		pool[index] = {}
		pool[index].root = clone
		pool[index].btn = cc.find("btn",clone).getComponent(cc.Button)
		pool[index].img = cc.find("btn",clone).getComponent(cc.Sprite)
		pool[index].bet = cc.find("bet",clone).getComponent(cc.Label)
		pool[index].use = false	//使用中
		pool[index].userId = 0
		
	}
	
	let  RecycleCastBetChip = function(i){
		pool[i].use = false
		pool[i].count = 0
		pool[i].userId = 0
		pool[i].root.active =(false)
	}
	
	for(let  i = 1;  i <= poolCount; ++i){ CreateClone(i) }
	let  GetCurrentChip = function(num,index){
		for(let k in (pool)){ 
			let v = pool[k] 

			if(v.use == false ){
				v.use = true
				v.bet.string = gameLayer.MoneyText(num)
				v.bet.node.active = true
				v.count = num
				v.root.active =(true)
				v.root.setSiblingIndex(-1)
//----->需重新編譯程式碼				v.root:SetAsLastSibling()
				v.root.scale = 1
				//v.root.angle = Math.random() * 90 - 45
				GameG.SetImageSprite(v.img, "",  gameData.GetBetBtnImg(gameData.dtBaseBet[index])+"_4")
			//GameG.SetImageSprite(v.img, "", "cast"+tostring(index-1)+"_1")
				
				return v
			}
		}
		return null
	}
	
	let  GetCastBetChip = function(num,index){
		let clone = GetCurrentChip(num,index)
		if(clone == null ){
			// 从头开始
			for(let k in (pool)){ 
				let v = pool[k] 

				if(v.userId != GameG.getUserID() ){ 
					if(k > useIndex ){
						useIndex = k 
						if(useIndex >= pool.length ){ useIndex = 0 }
						v.use = false
						break
					}
				}
			}
			clone = GetCurrentChip(num,index)
		}
		if(clone == null ){
			CreateClone(pool.length +1)
			clone = GetCurrentChip(num,index)
		}
		clone.root.stopAllActions();
		
		return clone
	}
	
	let  GetCastBetRange = function(root){
		let targetPos = GameG.LocalConvertWorldPointAR(range)
		let targetPosX = targetPos.x 
		let rangeX = (Math.random() - 0.5) * (range.width - root.width)
		targetPosX = targetPosX + rangeX
		
		let targetPosY = targetPos.y
		let rangeY = (Math.random() - 0.5) * (range.height - root.height)
		targetPosY = targetPosY + rangeY
		
		return cc.v3(targetPosX,targetPosY, 0)
	}
	
	let IsCanPlayAudio = true
	let  playAudio = function(){
		if(IsCanPlayAudio == true ){
			IsCanPlayAudio = false
		
			gameAudio.addCoin()
			GameG.NewDelayOnce(function( ){
				
				IsCanPlayAudio = true
			}, 0.2)
		}
	}		
	this.GetCastBetAll = function(){
		return castBetAll
	}
	// 下注失敗的時候回收籌碼
	this.ClearBetRetError = function(num,userId){
		for(let k in (pool)){ 
			let v = pool[k] 

			if(v.use == true && v.userId == userId && v.count == num ){
				RecycleCastBetChip(k)
				return
			}
		}
	}
	
	this.ShowCastBetChip = function(num,index,show,startPos,userId){
		if(num == 0 ){ return }
		startPos = startPos || GameG.LocalConvertWorldPointAR(anchor_start)
		let obj = GetCastBetChip(num,index)
		obj.userId = userId
		playAudio()
		
		let endPos = GetCastBetRange(obj.root)

		if(show == false ){
			obj.root.position = endPos
		} 
		else{
			obj.root.position = startPos
			obj.root.scale = 1

			var sqs = GameG.NewTween(obj.root)
			sqs.to(0.5, {position: endPos}, {easing: 'quadInOut'})
			sqs.to(0.5, {scale: 0.8})
			sqs.start()
		}
	}
	
	this.ShowClearBetChip = function(userId,targetPos){
		let self = this
		targetPos = targetPos || anchor_start.position
		for(let k in (pool)){ 
			let v = pool[k] 

			if(v.use == true && v.userId == userId ){
				if(this.showCleaerAudio == false ){ 
					gameAudio.outCast()
					this.showCleaerAudio = true 
				}

				var sqs = GameG.NewTween(v.root)
				sqs.to(0.5, {position: targetPos}, {easing: 'quadInOut'})
				sqs.call(function(){
					self.RecycleCastBetChip(k)
				})				
				sqs.start()
			}
		}
	}
	
	//桌面底注
	this.ShowBroadCastBetAll = function(num){
		castBetAll = num
		txt_all.string = gameLayer.MoneyText(num || 0)
	}
	//自己底注
	this.ShowBroadCastBetMy = function(num){
		castBetMy = num
		
		txt_my.string = gameLayer.MoneyText(num || 0)	
	}
	
	let  CheckShowWinChip = function(data,userId){
		//庄家全部回收
		if(userId == null ){
			return true
		//指定回收
		} 
		else if(data.userId == userId ){

			return true
		} 
		return false
	}
	
	//赢钱动画
	this.ShowWinChip = function(targetPos,userId){
		let self = this
		targetPos = targetPos || GameG.LocalConvertWorldPointAR(anchor_start)
		
		let delayTimer = 0
		for(let k in (pool)){ 
			let v = pool[k] 

			if(v.use == true && CheckShowWinChip(v,userId) == true ){
				v.use = false
				targetPos = targetPos || startPos
				//delayTimer = delayTimer + 0.01
				delayTimer = Math.random() * 0.3
				let sequence = GameG.NewTween(v.root)
				sequence.delay(delayTimer)
				sequence.call(function(){
					if(self.showWinAudio == false ){ 
						gameAudio.outCast()
						self.showWinAudio = true
					}
				})
				sequence.to(1, {position: targetPos}, {easing: 'quadInOut'})
				sequence.call(function(){
					RecycleCastBetChip(k)
				})
				sequence.start()				
			}
		}
	}
	
	//输钱动画(赔率,移动目标)
	this.ShowLoseChipAll = function(odd,targetPos,part){
		part = part || 1
		let castBet = (castBetAll - castBetMy)
		if(castBet <= 0 ){ return }
		targetPos = targetPos || anchor_start.position
		
		let CheckBet = require("CheckBet")
		let BetInfo = CheckBet.Init(odd * castBet, gameData.dtBaseBet, gameData.dtBetRate)
		let BetData = BetInfo["value"]
		let CountData = BetInfo["count"]
	
		let userIndex = 1
		if(gameData.winList.length > 0 ){
			for(let  i = 1;  i <= BetData.length; ++i){
				for(let  j = 1;  j <= CountData[i]; ++j){
					this.ShowCastBetChip(BetData[i],BetData.length - i,true,targetPos,gameData.winList[userIndex])
					userIndex = userIndex +1
				}
			}
		}
	}
	
	//输钱动画(赔率,移动目标)
	this.ShowLoseChipMy = function(odd,targetPos){
		if(castBetMy <= 0 ){ return }
		targetPos = targetPos || anchor_start.position
		
		let CheckBet = require("CheckBet")
		let BetInfo = CheckBet.Init(odd * castBetMy, gameData.dtBaseBet, gameData.dtBetRate)
		let BetData = BetInfo["value"]
		let CountData = BetInfo["count"]
		
		for(let  i = 1;  i <= BetData.length; ++i){
			for(let  j = 1;  j <= CountData[i]; ++j){
				this.ShowCastBetChip(BetData[i],BetData.length - i,true,targetPos,GameG.getUserID())
			}
		}
	}
	
	this.ChangeChipUserId = function(data,iswin){
		for(let k in (pool)){ 
			let v = pool[k] 

			if(v.use == true ){
				if(iswin == false ){
					v.userId = 0
				}
			}
		}
	}
	
	this.GameStart = function(){
		this.ShowBroadCastBetAll(0)
		this.ShowBroadCastBetMy(0)
		this.StopLuckyStar()
		this.StopBlinkWin()
		for(let k in (pool)){ 
			let v = pool[k] 
			RecycleCastBetChip(k)
		}
	}
	
	this.GameEnd = function(data){
		this.ShowBroadCastBetAll(0)
		this.ShowBroadCastBetMy(0)
		this.StopLuckyStar()
		IsCanPlayAudio = true
	}
	
	let sequenceStar = null
	this.ShowLuckyStar = function(){
		if (sequenceStar != null){
			return
		}

		luckyStarEffect.active =(true)
		luckyStarEffect.position = luckyStarEffectPos
		luckyStar.node.active =(true)
		luckyStar.node.opacity = 0
		let endPos = cc.v2(luckyStar.node.position.x - 50, luckyStar.node.position.y - 30)
		let sequence = GameG.NewTween(luckyStarEffect)
		sequence.to(1.5, {position: endPos}, {easing: 'circIn'})
		sequence.call(function(){
			luckyStarEffect.active =(false)
		})
		sequence.start()
		sequenceStar = sequence

		let sequence1 = GameG.NewTween(luckyStar.node)
		//sequence.easing(cc.easeCircleActionIn ())
		sequence1.delay(1.5)
        sequence1.to(0.3, {opacity: 255})
		sequence1.start()		
	}
	
	this.StopLuckyStar = function(){
		luckyStarEffect.active =(false)
		luckyStar.node.active =(false)
		luckyStar.node.scale = 1
		if (sequenceStar != null){
			sequenceStar = null
		}
	}
	
	// 开始赢家闪烁
	this.ShowBlinkWin = function(timer){
		//let color = blink.color
		blink.node.active =(true)
		blink.opacity = 0

		let self = this
		let sequence = GameG.NewTween(blink.node)

		for(let  i  =  1;  i  <=  timer; ++i){
			sequence.to(0.3, {opacity: 255})
			sequence.delay(1)
			sequence.to(0.3, {opacity: 0})
		}
		sequence.call(function(){
			self.StopBlinkWin()
		})
		sequence.start()
	}
	
	// 停止赢家闪烁
	this.StopBlinkWin = function(){
		blink.node.active =(false)
	}
};

module.exports = UIBet
