var G = require( "Global")
var GameG = require("GameGlobal")
var GameLayer = require("GameLayer")
var utils = require("../Base/utils");

var cardSpace = 28
var cardCount = 5
var cardMoveDuration = 0.15
var cardRotateDuration = 0.3
var cardBackColor = 4
var cardBackNumber = 17

function Seat(root, user) {
	user.cards = []
	user.cardPrefab 	= cc.find("Canvas/GameLayer/Background/Card/CardPrefab");
	user.recoverCard 	= cc.find("Canvas/GameLayer/Background/Card/RecoverCard");
	user.cardRoot		= cc.find("CardRoot",root)
	user.patternImage	= cc.find("PatternImage",root).getComponent(cc.Sprite)
	user.patternImage1	= cc.find("PatternImage/Node",root)
	
	user.cardPrefab.active =(false)
	user.recoverCard.active =(false)
	user.patternImage.node.active =(false)

	for(let j = 1; j <= cardCount; ++j){ 
		let clone 		= cc.instantiate(user.cardPrefab)
		clone.active 	=(false)
		clone.parent 	=(user.cardRoot)
		clone.scale 	= user.cardPrefab.scale
		clone.angle 	= user.cardPrefab.angle
		clone.position 	= user.cardPrefab.position
		user.cards.push(clone.getComponent(cc.Sprite))
	}

	//重設
	let ResetCard = function(){
		for(let k in (user.cards)){ 
			let v = user.cards[k].node
			v.position 	= user.cardPrefab.position
			v.angle 	= user.cardPrefab.angle
			v.active 	=(false)
		}
	}

	ResetCard()
	
	//發單張牌
	user.Deal = function(index, cardInfo, sequence, duration){
		if (duration == null)
			duration = cardMoveDuration
		let card = user.cards[index]
		let x = (index) * cardSpace
		let destination = cc.v3(x,0,0)

		sequence.delay(duration)
		sequence.call(function(){
			card.node.active =(true)
			card.node.stopAllActions()

			utils.node.setParent(user.cardPrefab, card.node);
			card.node.position = cc.v2(0,0)
			utils.node.setParent(user.cardRoot, card.node);

			let spriteName = "card_"+cardInfo.Color+"_"+cardInfo.CardNumber
			card.node.name = "card_"+cardInfo.Color+"_"+cardInfo.CardNumber
			GameG.SetImageSprite(card, null, spriteName, false)	

			GameG.NewTween(card.node)
			.to(duration, { position : destination, angle : 0, scale : 1 })
			.start()
		})
	}

	//轉牌
	let TurnCard = function(card, cardInfo, Callback, PlaySound = false){
		if (cardInfo == null){
			cardInfo = {}
			cardInfo.Color = cardBackColor
			cardInfo.CardNumber = cardBackNumber
		}

		let sequence = GameLayer.GetSequence(card.node)
		sequence.to(cardRotateDuration / 2, { scaleX : 0, scaleZ : 0 })
		sequence.call(function (){
			if (PlaySound == true){
				GameG.PlayGameSound("open")
			}
			let spriteName = "card_"+cardInfo.Color+"_"+cardInfo.CardNumber
			card.node.name = "card_"+cardInfo.Color+"_"+cardInfo.CardNumber
			GameG.SetImageSprite(card, null, spriteName, false)
		})
		sequence.to(cardRotateDuration / 2, { scaleX : 1, scaleZ : 1 })
		sequence.call(function(){
			if(Callback != null ){
				Callback()
			}
		})
		sequence.start()
	}
	
	//開牌
	user.ShowCards = function (startIndex, endIndex, userCards, Callback){ 
		for(let i = startIndex;  i <= endIndex; ++ i){
			TurnCard(user.cards[i],userCards[i],Callback, true)
		}
	}
	
	//回收牌
	user.RecoverCard = function(isPlaySound = false){
		if (isPlaySound == true){
			GameG.PlayGameSound("open")
		}

		for(let k in user.cards){ 			
			let v = user.cards[k] 
			TurnCard(v)
			
			if (isPlaySound == true){
				isPlaySound = false
				GameLayer.Delay(cardRotateDuration - 0.1,function(){ 
					GameG.PlayGameSound("collect")
				})
			}

			GameLayer.Delay(cardRotateDuration,function(){ 
                v.node.oldParent = v.node.parent;
				utils.node.setParent(user.recoverCard.parent, v.node);
				
				GameG.NewTween(v.node)
				.to(cardMoveDuration, { angle : user.recoverCard.angle, position : user.recoverCard.position })
				.call(function(){
					v.node.parent = v.node.oldParent;
					v.node.oldParent = undefined;					
				})
				.start()
			})
		}

		GameLayer.Delay(cardRotateDuration + cardMoveDuration + 0.01, 
			function(){
				ResetCard()
			}
		)
	}

	//牌型
	user.ShowPattern = function(pattern){
		if (pattern == null)
			return
		
		user.patternImage.node.active =(true)
		user.patternImage1.name = "pattern_"+pattern
		GameG.SetImageSprite(user.patternImage, null,"pattern_"+pattern, true)
	}

	//隱藏牌型
	user.HidePattern = function(){
		user.patternImage.node.active =(false)
	}

	user.GetRoot = function(){
		return root
	}	
};

module.exports = Seat
