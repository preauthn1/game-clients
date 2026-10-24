var G = require( "Global")
var GameG = require("GameGlobal")
var fmg  = require("FFunction")
var GameData = require("GameData")
var GameConfig = require("GameConfig")
var gameLayer = null

var poolCount = 100

function UIBet(index,root,rootFront,rootLast)
{	
	gameLayer = require("GameLayer")
	
	let canvas = cc.find("Canvas")
	let perfab =cc.find("GameLayer/CastPool/PfCast", canvas)
	
	let anchor_start =cc.find("GameLayer/downMune/users", canvas)
	
	this.root = root

	let txt_all =cc.find("TextAll", rootFront).getComponent(cc.Label)
	let txt_my =cc.find("TextMy",  rootFront).getComponent(cc.Label)
	let txt_mybg =cc.find("TextMyBg",  rootFront).getComponent(cc.Sprite)

	let btn = root.getComponent(cc.Button)
	let range =cc.find("Range", root)
	let blink =cc.find("blink", rootLast).getComponent(cc.Sprite)

			
	let pool = []
	let roadmap = []
	let castBetAll = 0
	let castBetMy = 0
	let useIndex = 0
	
	this.callback = null
	this.SetCallback = function(data){
		this.callback = data
	}

	btn.node.on('click',function(){
		if (this.callback)
			this.callback(index) 
	}, this)

	let  CreateClone = function(index){
		let clone = cc.instantiate(perfab)
		if(clone == null){ return null }
		clone.parent =(perfab.parent)
		clone.position = cc.v3(0, 0, 0)
		clone.scale = 1
		
		pool[index] = {}
		pool[index].root = clone
		pool[index].btn =cc.find("btn", clone).getComponent(cc.Button)
		pool[index].img =cc.find("btn", clone).getComponent(cc.Sprite)
		pool[index].bet =cc.find("bet", clone).getComponent(cc.Label)
		pool[index].use = false	//使用中
		pool[index].userId = 0
		
	}
	
	let  RecycleCastBetChip = function(i){
		pool[i].use = false
		pool[i].count = 0
		pool[i].userId = 0
		pool[i].bettype = 0
		pool[i].root.active =(false)
	}
	
	for (let i=1; i <= poolCount; ++i){
		CreateClone(i)
	}

	let  GetCurrentChip = function(num,index){
		for(let k in (pool)){ 
			let v = pool[k] 

			if(v.use == false ){
				v.use = true
				v.bet.string = gameLayer.MoneyText(num)
				v.count = num
				v.root.active =(true)
				v.root.setSiblingIndex(-1)
//----->需重新編譯程式碼				v.root:SetAsLastSibling()
				v.root.eulerAngles = cc.v3(0, 0, 0)
			//v.root.transform:Rotate(fmg.v3(0, 0, Math.random(-45,45)))

				GameG.SetImageSprite(v.img, G.GetGamePName(),  GameData.GetBetBtnImg(GameData.dtBaseBet[index])+"_4")
								
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

				if(v.userId != GameConfig.getUserID() ){ 
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

		return cc.v3(targetPosX,targetPosY)
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
	this.ClearBetRetError = function(num,userId){
		for(let k in (pool)){ 
			let v = pool[k] 

			if(v.use == true && v.userId == userId && v.count == num ){
				RecycleCastBetChip(k)
				return
			}
		}
	}
	
	this.ShowCastBetChip = function(num,bettype,index,show,startPos,userId){
		if(num == 0 ){ return }
		startPos = startPos || GameG.LocalConvertWorldPointAR(anchor_start)
		let obj = GetCastBetChip(num,index)
		obj.userId = userId
		obj.index = index
		obj.bettype = bettype
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
			sqs.to(0.5, {position: GetCastBetRange(obj.root)}, { easing : 'quadInOut' })
			sqs.start()
		}
	}
	
	this.ShowClearBetChip = function(userId,targetPos){
		targetPos = targetPos || anchor_start.position
		for(let k in (pool)){ 
			let v = pool[k] 

			if(v.use == true && v.userId == userId ){
				playAudio()

				var sqs = GameG.NewTween(v.root)
				sqs.to(0.5, {position: targetPos}, { easing : 'quadInOut' })
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
		txt_all.string = gameLayer.MoneyText(num || 0)
	}
	
	//自己底注
	this.ShowBroadCastBetMy = function(num){
		castBetMy = num

		txt_my.string = gameLayer.MoneyText(num)
	}
	
	let  CheckShowWinChip = function(data,userId){
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

	//庄家赔付
	this.CloneWinChip = function(bettype){
		let self = this
		let pos = GameG.LocalConvertWorldPointAR(GameData.gameLayer.uiRoot.zhuang)

		let sequence = null
		for(let k in (pool)){ 
			let obj = pool[k]

			if(obj.use && obj.bettype == bettype ){
				if (sequence == null)
					sequence = GameG.NewTween(this.root)
                sequence.delay(0.01)
                sequence.call(function(){
                    self.ShowCastBetChip(obj.count, obj.bettype, obj.index, true, pos, obj.userId)
                })
			}
		}
		
		if (sequence)
			sequence.start()
	}
	

	//赢钱动画
	this.ShowWinChip = function(targetPos,userId){
		let conut = 1
		let isPlayAudio = false

		targetPos = targetPos || GameG.LocalConvertWorldPointAR(anchor_start)
		for(let k in (pool)){ 
			let v = pool[k] 

			if(v.use == true && CheckShowWinChip(v,userId) == true ){
				v.use = false

				conut = conut + 1

				GameG.NewDelayOnce(function(){
					if (isPlayAudio == false){
						isPlayAudio = true
						playAudio()
					}
					let sequence = GameG.NewTween(v.root)
					sequence.to(0.7, {position: targetPos}, { easing : 'quadInOut' })
					sequence.call(function(){
						RecycleCastBetChip(k)
					})
					sequence.start()
				}, 0.01 * conut)				
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
		let Data = CheckBet.Init(odd * castBet, GameData.dtBaseBet, GameData.dtBetRate)
		let BetData = Data.value
		let CountData = Data.count
		for(let  i = 1;  i <= BetData.length; ++ i){
			for(let  j = 1;  j <= CountData[i]; ++ j){
				this.ShowCastBetChip(brnn.BetCount[k],k,true,this,0)
			}
		}
	}
	
	//输钱动画(赔率,移动目标)
	this.ShowLoseChipMy = function(odd,targetPos){
		if(castBetMy <= 0 ){ return }
		targetPos = targetPos || anchor_start.position
		let castMyArr = brnn.gameControl.getCoinArr(odd * castBetMy)
		for(let k in (castMyArr)){ 
			let v = castMyArr[k] 
			for(let  i  = 1;  i  <= v; ++ i ){
				if(v > 0 ){
					this.ShowCastBetChip(brnn.BetCount[k],k,true,targetPos,GameConfig.getUserID())
				}
			}
		}
	}
	
	this.ChangeChipUserId = function(data,iswin){
		for(let k in (pool)){ 
			let v = pool[k] 

			if(v.use == true ){
				if(iswin == true && v.userId != GameConfig.getUserID() ){
					v.userId = 0
			} 
			else if( iswin == false ){

					v.userId = 0
				}
			}
		}
		
		if(data.length != 0 ){
			let poolCount = 1
			for(let k in (pool)){ 
				let v = pool[k] 

				if(pool[k].userId == 0 ){
					let userNo = (poolCount % data.length) +1
					pool[k].userId = data[userNo]
					poolCount = poolCount+1
				}
			}
		}
	}
	
	this.GameStart = function(){
		this.ShowBroadCastBetAll(0)
		this.ShowBroadCastBetMy(0)
		for(let k in (pool)){ 
			RecycleCastBetChip(k)
		}
	}
	
	this.GameEnd = function(data){
		this.ShowBroadCastBetAll(0)
		this.ShowBroadCastBetMy(0)
		IsCanPlayAudio = true
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
