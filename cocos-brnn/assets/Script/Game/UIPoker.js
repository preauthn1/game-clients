var G = require( "Global")
var gameData = require("GameData")
var GameG = require("GameGlobal")
var poolCount = 5

function UIPoker(root) {
	
	let canvas = cc.find("Canvas/GameLayer")
	let perfab = cc.find("GameLayer/PokerPool/Poker",canvas)
	let anchorStart = cc.find("GameLayer/PokerPool/AnchorStart",canvas)	
	
	this.root = root
	let grid = cc.find("Grid",root)
	let anchor = cc.find("Grid/Anchor",root)	
	let root_result = cc.find("Result",root)
	let txt_result_type = cc.find("Result/TextType",root).getComponent("TextControl")
	let txt_result_bet = cc.find("Result/TextBet",root).getComponent("TextControl")
	let img_result_nn = cc.find("Result/ResultNN",root).getComponent(cc.Sprite)
	let img_result_non = cc.find("Result/ResultNoN",root).getComponent(cc.Sprite)
	let pool = []
	
	let  CreateClone = function(index){
		let clone = cc.instantiate(perfab)
		if(clone == null){ return null }
		clone.parent =(perfab.parent)
		clone.position = cc.v3(0, 0, 0)
		clone.scale = 1
//----->需重新編譯程式碼		clone:SetAsFirstSibling()
			
		pool[index] = {}
		pool[index].root = clone
		pool[index].card = clone.getComponent(cc.Sprite)
		pool[index].back = cc.find("Back",clone)
	}
	
	for(let i = 1; i <= poolCount; ++ i){ CreateClone(i) }
		
	let  SetSprite = function(index,color,number){
		let cardName = "card_" + color +"_"+ number
		if(color > 6 ){
			cardName = null
		} 
		else if( color >= 4 ){
			cardName = "card_" + color
		} 
		else if( number >14 ){ cardName = null

		} 
		else if( number < 2 ){ 
			cardName = null
		}
		if(cardName != null){
			GameG.SetImageSprite(pool[index].card, G.GetGamePName(),cardName)
		} 
		else{
			GameG.SetImageSprite(pool[index].card, G.GetGamePName(),"null")
		}
	}

	//开牌
	this.ShowKapai = function(index,timer){
		timer = timer || 0.1
		if(pool[index].card.spriteFrame.name != "Null" ){
			if(timer == 0 ){
				pool[index].back.active =(false)
			} 
			else{
				GameG.PlayGameSound("fanzhuan")
				
				var sqs = GameG.NewTween(pool[index].root)
				sqs.to(timer * 0.1, {scaleX: 0, scaleY: 1})
				sqs.call(function(){
					pool[index].back.active =(false)
				})				
				sqs.to(timer * 0.05, {scale: 1})
				sqs.start()
			}
		}
	}
	
	//开牌
	this.ShowKapai_Move_Target = function(index,timer){
		timer = timer || 0.1
		if(pool[index].card.spriteFrame.name != "Null" ){
			if(timer == 0 ){
					pool[index].back.active =(false)
			} 
			else{
				GameG.PlayGameSound("fanzhuan")
				let startPos = pool[index].root.position
				let targetIndex = index
				if(index > 4 ){
					targetIndex = targetIndex - 1
				} 
				else if( index < 4 ){
					targetIndex = targetIndex + 1
				}
				let targetPos = pool[targetIndex].root.position

				var sqs = GameG.NewTween(pool[index].root)
				sqs.to(timer * 0.5, {position: targetPos})
				sqs.call(function(){
					pool[index].back.active =(false) 
				})				
				sqs.to(timer * 0.5, {position: startPos})
				sqs.start()
			}
		}
	}
	
	//开牌
	this.ShowKapai_Move_Last = function(index,timer,kapai){
		timer = timer || 0.1
		kapai = kapai == false
		if(pool[index].card.spriteFrame.name != "Null" ){
			if(timer == 0 ){
				pool[index].back.active =(kapai)
			} 
			else{
				GameG.PlayGameSound("fanzhuan")
				let startPos = pool[index].root.position
				let targetIndex = 5
				let targetPos = pool[targetIndex].root.position

				var sqs = GameG.NewTween(pool[index].root)
				sqs.to(timer * 0.5, {position: targetPos})
				sqs.call(function(){
					pool[index].back.active =(false) 
				})				
				sqs.to(timer * 0.5, {position: startPos})
				sqs.start()
			}
		}
	}
	

	//发三牌(一次发)
	this.ShowFapaiThreeCard = function(data,timer,show){
		for(let i = 4; i <= 5; ++i){
			gameData.PlayerPokers[i-1] = {}
			gameData.PlayerPokers[i-1].Color = 0
			gameData.PlayerPokers[i-1].CardNumber = 0
		}
		for(let k in (data)){ 
			let v = data[k] 
			gameData.PlayerPokers[parseInt(k)]={}
			gameData.PlayerPokers[parseInt(k)].Color = v.Color
			gameData.PlayerPokers[parseInt(k)].CardNumber =v.CardNumber
		}
		
		for(let  k = 1;  k <= 5; ++ k){
			SetSprite(k,gameData.PlayerPokers[k - 1].Color,gameData.PlayerPokers[k - 1].CardNumber)
			if(show == false ){
				pool[k].root.parent =(grid)
				pool[k].root.position = cc.v2(0, 0)
				//anchor:SetAsLastSibling()
				this.ShowKapai(k,0)
			}
			else{
				GameG.PlayGameSound("fapai")
				pool[k].root.position = GameG.LocalConvertWorldPointAR(anchorStart)
				let self = this
				let sequence = GameG.NewTween(pool[k].root)
				sequence.delay((k-1) * 0.02)
				sequence.to(0.4, {position: GameG.LocalConvertWorldPointAR(anchor)})
//----->需重新編譯程式碼				sequence:Append(pool[k].root:DOJump(anchor.position,200,1, 0.4))
				sequence.call( function(){ 
					pool[k].root.parent =(grid)
					pool[k].root.position = cc.v2(0, 0)
					self.ShowKapai(k)
				} )
				sequence.start()
			}
		}
	}
	
	//发二牌
	this.ShowFapaiTwoCard = function(data){
		for(let k in (data)){ 
			let v = data[k] 

			gameData.PlayerPokers[k+3]={}
			gameData.PlayerPokers[k+3].Color = v.Color
			gameData.PlayerPokers[k+3].CardNumber =v.CardNumber
		}

		for(let k in (data)){ 
			let v = data[k] 
			SetSprite(parseInt(k)+4,v.Color,v.CardNumber)
		}
	}
	
	//发五牌，结算才进来
	this.ShowFapaiFiveCard = function(data){
		for(let k in (data)){ 
			let v = data[k]
			k = parseInt(k) + 1

			if (pool[k].card.spriteFrame){
				if(pool[k].card.spriteFrame.name == "Null" ){
					SetSprite(k,v.Color,v.CardNumber)
					pool[k].root.parent =(grid)
//----->需重新編譯程式碼				anchor:SetAsLastSibling()
					this.ShowKapai(k,0)
				}
			}
		}
	}
	
	this.UpdataState = function(state){
		
	}
	
	let paixinname = []
	paixinname[0] = "5小n"
	paixinname[1] = "4炸"
	paixinname[2] = "5花n"
	paixinname[3] = "nn"
	paixinname[4] = "牛%s"
	paixinname[5] = "无"
	let dxNum = ["一","二","三","四","五","六","七","八","九"]
	
	// 播放牌型声音
	let playPaiXianSound = function(typeid, num){
		let paixinSounds = [ ]
		paixinSounds[0] = "五小牛"
		paixinSounds[1] = "四炸"
		paixinSounds[2] = "五花牛"
		paixinSounds[3] = "牛牛"
		paixinSounds[4] = "牛"
		paixinSounds[5] = "没牛"
		let soundName = paixinSounds[typeid]
		if (typeid == 4) {
			soundName = soundName + num.toString()
		}
		GameG.PlayGameSound(soundName)
	}
	
	//牌型
	this.ShowPaixi = function(data,bet){
		this.ShowKapai(4,0)
		this.ShowKapai(5,0)		

		root_result.active =(true)
		txt_result_bet.node.active =(bet > 1)
			txt_result_bet.text = "x" + bet.toString()

		if(data.NiuNiuRet == 3 ){
			img_result_nn.node.active =(true)
		} 
		else if( data.NiuNiuRet == 5 ){
			img_result_non.node.active =(true)
		} 
		else{
			txt_result_type.node.active =(true)
			
			if (data.NiuNiuRet == 4) {
				txt_result_type.text = paixinname[data.NiuNiuRet] + dxNum[data.NiuNiuNumber - 1]
			} 
			else{
				txt_result_type.text = paixinname[data.NiuNiuRet]
			}			
		}		
				
		if(gameData.OnceFapei * 0.001 > 0.7 ){
			playPaiXianSound(data.NiuNiuRet,data.NiuNiuNumber)
		}
	}
	
	//回收
	this.Recycle = function (){
		for(let k in (pool)){ 
			let v = pool[k] 

			v.root.parent =(perfab.parent)
			v.root.position = cc.v3(0, 0, 0)
			GameG.SetImageSprite(v.card, G.GetGamePName(),"null")
			v.back.active =(true)
			v.use = false
		}
	}
	
	this.GameEnd = function(){
		this.Recycle()
		root_result.active =(false)
		txt_result_type.node.active =(false)
		img_result_nn.node.active =(false)
		img_result_non.node.active =(false)
		txt_result_bet.node.active =(false)
	}
};

module.exports = UIPoker
