var G = require( "Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var GameConfig = require("GameConfig")
var poolCount = 100
var roadmapCount = 9

function UIBet(index,root){
	
	let canvas = cc.find("Canvas/GameLayer")
	let perfab = cc.find("GameLayer/CastPool/PfCast",canvas)
	let anchor_start = cc.find("GameLayer/Down/OtherUser",canvas)

	this.root = root
	
	let txt_all = cc.find("TextAll",root).getComponent(cc.Label)
	let txt_my = cc.find("TextMy",root).getComponent(cc.Label)
	let luckyStar = cc.find("Star",root).getComponent(cc.Sprite)
	let luckyStarStartPos = luckyStar.node.position
	let luckyStarlight = cc.find("Star/light",root).getComponent(cc.Sprite)

	let btn = root.getComponent(cc.Button)
	let range = cc.find("Range",root)
	let blink = cc.find("blink",root).getComponent(cc.Sprite)
	let luckyStarEffect = cc.find("LuckyStarEffect",root)
	let luckyStarEffectPos = luckyStarEffect.position
	luckyStarEffect.active =(false)

	let pool = []
	let roadmap = []
	let castBetAll = 0
	let castBetMy = 0
	let useIndex = 0

	let castImg = [
		"cast1_1",
		"cast2_1",
		"cast3_1",
		"cast4_1",
		"cast5_1",
		"cast6_1",
	]


	for(let i  =  1; i <= roadmapCount; ++i ){
		roadmap[i] = {}
		roadmap[i].img = cc.find("RoadmapGrop/Grid/Road" + i.toString() + "/Image", root).getComponent(cc.Sprite)
		roadmap[i].last = cc.find("RoadmapGrop/Grid/Road" + i.toString() + "/Last", root).getComponent(cc.Sprite)
		roadmap[i].img.active =(false)
		roadmap[i].use = false
	}

	let self = this
	this.SetCallback = function(data){ this.callback = data }
	btn.node.on('click',function(){ self.callback(index) })

	let  CreateClone = function(index){
		let clone = cc.instantiate(perfab)
		if (clone == null) { return null }
		clone.parent =(perfab.parent)
		clone.position = cc.v3(0, 0, 0)
		clone.scale = 1

		pool[index] = {}
		pool[index].root = clone
		pool[index].btn = cc.find("btn",clone).getComponent(cc.Button)
		pool[index].img = cc.find("btn",clone).getComponent(cc.Sprite)
		pool[index].bet = cc.find("bet",clone).getComponent("TextControl")
		pool[index].use = false //使用中
		pool[index].userId = 0
		
	}

	let  RecycleCastBetChip = function(i){
		pool[i].use = false
		pool[i].count = 0
		pool[i].userId = 0
		pool[i].root.active =(false)
	}

	for(let i = 1; i <=  poolCount; ++i ){ CreateClone(i) }

	let  GetCurrentChip = function(num, index){
		for(let k in (pool)){ 
		let v = pool[k] 

			if(v.use == false ){
				v.use = true
				v.bet.text = G.FormatDecimal(num, 0)
				v.count = num
				v.root.active =(true)
//----->需重新編譯程式碼                v.root:SetAsLastSibling()
				v.root.angle = Math.random() * 90 - 45
				
				let idx = index
				if(idx > 6 ){
					idx = 6
				}

			//籌碼顏色隨著面額修正 by AZLDC
				if(gameData.BetCount[idx] != num ){
					for(let i =  1; i <= gameData.BetCount.length; ++i ){
						if(gameData.BetCount[i] == num ){
							idx = i
						}
					}

					if(idx > 6 ){
						idx = 6
					}
				}

				GameG.SetImageSprite(v.img, G.GetGamePName(), castImg[idx])	
				return v
			}
		}
		return null
	}

	let  GetCastBetChip = function(num, index){
		let clone = GetCurrentChip(num, index)
		if(clone == null ){
			// 从头开始
			for(let k in (pool)){ 
			let v = pool[k] 

				if(v.userId != GameConfig.getUserID() ){
					if(k > useIndex ){
						useIndex = k
						if(useIndex >= pool.length ){ useIndex = 0 }
						v.use = false
						break
					}
				}
			}
			clone = GetCurrentChip(num, index)
		}
		if(clone == null ){
			CreateClone(pool.length + 1)
			clone = GetCurrentChip(num, index)
		}

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
		
		return cc.v3(targetPosX, targetPosY)
	}

	let IsCanPlayAudio = true
	let  playAudio = function(){
		if(IsCanPlayAudio == true ){
			IsCanPlayAudio = false

			GameG.PlayGameSound("adAddCastMax")

			GameG.NewDelayOnce(function( ){
				
				IsCanPlayAudio = true
			}, 0.2)
		}
	}

	this.GetCastBetAll = function(){
		return castBetAll
	}
	// 下注失敗的時候回收籌碼
	this.ClearBetRetError = function(num, userId){
		for(let k in (pool)){ 
			let v = pool[k] 

			if(v.use == true && v.userId == userId && v.count == num ){
				RecycleCastBetChip(k)
				return
			}
		}
	}

	this.ShowCastBetChip = function(num, index, show, startPos, userId){
		if(num == 0 ){ return }
		startPos = startPos || GameG.LocalConvertWorldPointAR(anchor_start)
		let obj = GetCastBetChip(num, index)
		obj.userId = userId
		if(userId == GameConfig.getUserID() ){
			GameG.PlayGameSound("adAddCast")
		} 
		else{
			playAudio()
		}
		if(show == false ){
			obj.root.position = GetCastBetRange(obj.root)
		} 
		else{
			obj.root.position = startPos

			var sqs = GameG.NewTween(obj.root)
			sqs.to(0.5, {position: GetCastBetRange(obj.root)})		
			sqs.start()
		}
	}

	this.ShowClearBetChip = function(userId, targetPos){
		targetPos = targetPos || GameG.LocalConvertWorldPointAR(anchor_start)
		for(let k in (pool)){ 
			let v = pool[k] 

			if(v.use == true && v.userId == userId ){
				playAudio()
				
				var sqs = GameG.NewTween(v.root)
				sqs.to(0.5, {position: targetPos})
				sqs.call(function(){
					RecycleCastBetChip(k)
				})				
				sqs.start()
			}
		}
	}

	//桌面底注
	this.ShowBroadCastBetAll = function(num){
		castBetAll = num
		txt_all.string = G.FormatDecimal(num || 0, 0)
	}
	//自己底注
	this.ShowBroadCastBetMy = function(num){
		castBetMy = num
		txt_my.string = G.FormatDecimal(num || 0, 0)
	}
	//显示路单
	this.ShowRoadmap = function(data, show, tm){
		tm = tm || 1.5
		let tempImg = null
	// 往左移动
		for(let i = roadmapCount; i <= 1; ++i ){
			if(tempImg == null ){
				tempImg = roadmap[i].img.sprite
				tempShow = roadmap[i].img.activeSelf
				roadmap[i].use = true
				roadmap[i].img.active =(true)
				if(data == true ){
					GameG.SetImageSprite(roadmap[i].img, G.GetGamePName(), "roadmap_smallblue")
				} 
				else{
					GameG.SetImageSprite(roadmap[i].img, G.GetGamePName(), "roadmap_smallred")
				}
			} 
			else{
				tempImg2 = roadmap[i].img.sprite
				tempShow2 = roadmap[i].img.activeSelf
				roadmap[i].img.sprite = tempImg
				roadmap[i].img.active =(tempShow)
				tempImg = tempImg2
				tempShow = tempShow2
			}
		}

		if(show == true ){
			roadmap[roadmapCount].last.active =(false)
			roadmap[roadmapCount].img.scale = 0
			
			var sqs = GameG.NewTween(roadmap[roadmapCount].img.node)
			sqs.to(tm * 0.5, {scale: 1.5})
			sqs.to(tm * 0.5, {scale: 1.1})
			sqs.call(function(){
				roadmap[roadmapCount].last.active =(true)
			})				
			sqs.start()
		} 
		else{
			roadmap[roadmapCount].img.scale = 1.1
			roadmap[roadmapCount].last.active =(true)
		}
	}

	let  CheckShowWinChip = function(data, userId){
		//庄家全部回收
		if(userId == null ){
			return true
		} 
		//指定回收
		else if( data.userId == userId ){

			return true
		}
		return false
	}

	//赢钱动画
	this.ShowWinChip = function(targetPos, userId){
		let conut = 1
		targetPos = targetPos || GameG.LocalConvertWorldPointAR(anchor_start)
		for(let k in (pool)){ 
			let v = pool[k] 

			if(v.use == true && CheckShowWinChip(v, userId) == true ){
				v.use = false
				
				conut = conut + 1

				GameG.NewDelayOnce(function(){
					playAudio()
					let sequence = GameG.NewTween(v.root)
					sequence.to(1, {position: targetPos})
					sequence.call(function(){
						RecycleCastBetChip(k)
					})
					sequence.start()
				}, 0.01 * conut)
			}
		}
	}

	//输钱动画(赔率,移动目标)
	this.ShowLoseChipAll = function(odd, targetPos){
		let castBet = (castBetAll - castBetMy)
		if(castBet <= 0 ){ return }
		targetPos = targetPos || GameG.LocalConvertWorldPointAR(anchor_start)
		let castAllArr = gameData.gameControl.getCoinArr(odd * castBet)

		for(let k in (castAllArr)){ 
			let v = castAllArr[k] 

			for(let i = 1; i <= v; ++i ){
				if(v > 0 ){
					this.ShowCastBetChip(gameData.BetCount[k], k, true, targetPos)
				}
			}
		}
	}

	//输钱动画(赔率,移动目标)
	this.ShowLoseChipMy = function(odd, targetPos){
		if(castBetMy <= 0 ){ return }
		targetPos = targetPos || GameG.LocalConvertWorldPointAR(anchor_start)
		let castMyArr = gameData.gameControl.getCoinArr(odd * castBetMy)
		for(let k in (castMyArr)){ 
			let v = castMyArr[k] 
			
			for(let i = 1; i <= v; ++i ){
				if(v > 0 ){
					this.ShowCastBetChip(gameData.BetCount[k], k, true, targetPos, GameConfig.getUserID())
				}
			}
		}
	}

	this.ChangeChipUserId = function(data){
		for(let k in (pool)){ 
			let v = pool[k] 

			if(v.use == true ){
				if(v.userId != GameConfig.getUserID() ){
					v.userId = 0
				}
			}
		}


		if(data.length != 0 ){
			let poolCount = 1
			for(let k in (pool)){ 
			let v = pool[k] 

				if(pool[k].userId == 0 ){
					let userNo = poolCount % data.length + 1
					pool[k].userId = data[userNo]
					poolCount = poolCount + 1
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
		//CS.TimeManager.Instance:StopAllDelayInvoke()
	}

	let sequenceStar = null
	this.ShowLuckyStar = function(){
		if(sequenceStar != null ){ return }
		luckyStarEffect.active =(true)
		luckyStarEffect.position = luckyStarEffectPos
		luckyStar.node.active =(true)
		luckyStar.node.opacity = 0
		
		if (this.luckyStar_repeatTween){
			this.luckyStar_repeatTween.stop()
			this.luckyStar_repeatTween = null
		}
		if (this.luckyStarlight_repeatTween){
			this.luckyStarlight_repeatTween.stop()
			this.luckyStarlight_repeatTween = null
		}

		let self = this
		let sequence = GameG.NewTween(luckyStarEffect)
		sequence.to(1.5, {position: luckyStar.node.position})
		sequence.call(function(){
			self.ShowLuckyStarLoop()
		})
		sequence.start()
		sequenceStar = sequence

		let sequence1 = GameG.NewTween(luckyStar.node)
		sequence1.delay(1.5)
		sequence1.to(0.3, {opacity: 255})
		sequence1.start()
	}
	
	this.ShowLuckyStarLoop = function(){
		luckyStarEffect.active =(false)
		luckyStarlight.node.active =(true)
		
		this.luckyStar_repeatTween = cc.tween(luckyStar.node)
		let tween = cc.tween(this.luckyStar_repeatTween)
		tween.to(0.5, {angle: 25})
		tween.to(1, {angle: -10})
		tween.to(0.5, {angle: 0.6})
		this.luckyStar_repeatTween.repeat(9999999999, tween).start()

		this.luckyStarlight_repeatTween = cc.tween(luckyStarlight.node)
		let tween1 = cc.tween(this.luckyStarlight_repeatTween)
		tween1.to(0.6, {scale: 0.6})
		tween1.to(1.1, {scale: 1})
		this.luckyStarlight_repeatTween.repeat(9999999999, tween1).start()
	}

	this.StopLuckyStar = function(){
		luckyStarEffect.active =(false)
		luckyStar.node.active =(false)
		luckyStarlight.node.active =(false)
		luckyStar.node.scale = 1
		if(sequenceStar != null ){
			sequenceStar.stop()
			sequenceStar = null
		}
		
		if (this.luckyStar_repeatTween){
			this.luckyStar_repeatTween.stop()
			this.luckyStar_repeatTween = null
		}
		if (this.luckyStarlight_repeatTween){
			this.luckyStarlight_repeatTween.stop()
			this.luckyStarlight_repeatTween = null
		}
	}

	// 开始赢家闪烁
	this.ShowBlinkWin = function(timer){
		blink.node.active =(true)
		blink.node.opacity = 0

		let self = this
		var sqs = GameG.NewTween(blink.node)
		for(let i = 1; i <= timer; ++i ){
			sqs.to(0.3, {opacity: 255})
			sqs.delay(0.4)
			sqs.to(0.3, {opacity: 0})
		}

		sqs.call(function(){
			self.StopBlinkWin()
		})		
		sqs.start()

	}

	// 停止赢家闪烁
	this.StopBlinkWin = function(){
		blink.node.active =(false)
		blink.node.opacity = 255
	}

	
};

module.exports = UIBet
