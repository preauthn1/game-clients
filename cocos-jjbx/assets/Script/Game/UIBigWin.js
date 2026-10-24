var HallG = require("Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var uiinputEvent = require("UIInputEvent")
var poolStep = []
var isPlaying = false
var inState = false
var completeCallback = null
var sequenceScale = null

/** 用途: Bigwin動畫跑分 */
var UIBigWin = {
	extends: cc.Component,

//離開遊戲
	onExit(){
		
	},

	Init(root){
		this.rootRect = root
		this.rootRect.active =(false)
		
		for(let  i  =  1;  i  <=  4; ++ i ){
			poolStep[i] = []
			poolStep[i].root = cc.find("UponLayer/Step"+i,root)
			poolStep[i].root.active =(false)
			poolStep[i].spineTitle = cc.find("UponLayer/Step"+i +"/SkeletonGraphicTitle",root).getComponent(sp.Skeleton)
			poolStep[i].spineWin = cc.find("UponLayer/Step"+i +"/SkeletonGraphicWin",root).getComponent(sp.Skeleton)
		}
		
		this.poolFirework = cc.find("FireworkPool", root).getComponent("ObjectPool")
		this.txtCoin = cc.find("UponLayer/TextCoin",root).getComponent("TextControl")
		inState = false
	},
	
	Update(dt){
		if(this.MoneyLerp != this.Money){
			this.SetStep(Math.floor(cc.misc.lerp(0, this.Money, (new Date().getTime() - this.startTime) / this.showTime)))
			if(this.MoneyLerp >= this.Money){
				this.WaitHide()
			}
		}
	},

// 顯示介面
	Show(money,callback){
		if (money < gameData.GetMinBigWinStep()){
			if(callback != null){
				callback()
			}
			return		
		}

		if(sequenceScale != null){
			sequenceScale.stop()
		}

		completeCallback = callback
		this.txtCoin.node.active =(true)
		this.txtCoin.node.scale = 1
		
		isPlaying = false
		inState = true
		
		uiinputEvent.SetEventKeyDown(this.onKeyDown,"UIBigWin")

        this.callback = callback
		this.MoneyLerp = 0
		this.Money = money
		let timer = gameData.GetMoneyShowTimer(money)
		this.showTime = timer * 1000
		this.startTime = new Date().getTime()

		sequenceScale = GameG.NewTween(this.txtCoin.node)
			.to(timer, {scale: 1.5 })
			.call(function(){
				sequenceScale = null
			})
			.start()

		let self = this
		GameG.NewDelay(function(){
			self.SetOffFireworks()
		}, 0.1, "firework")
	},
 
	onKeyDown(event){
		UIBigWin.WaitHide()
	},
			
// 等待關閉介面
	WaitHide(){
		this.SetStep(this.Money)
		
		uiinputEvent.RemoveKey("UIBigWin")
		GameG.CloseLoopSound("se_bigwin")
		GameG.PlayGameSound("se_winend")
		GameG.CancelNewDelay("firework")
		
		if(sequenceScale != null){
			sequenceScale.stop()
			sequenceScale = null
		}

		this.txtCoin.node.active =(true)
		this.txtCoin.node.scale = 1.5	
		
		let self = this
		GameG.NewDelayOnce(function(){
			if(self.callback != null){
				self.Hide()
			}
		}, 2)
	},

// 關閉介面
	Hide(){
		inState = false
		this.rootRect.active =(false)
		
		GameG.CloseLoopSound("se_bigwin")
		// GameG.PlayGameSound("se_winend")
		
		// GameG.PlayGameBGM("bgm_mg")
		
		if(completeCallback != null){
			completeCallback()
		}
	},

// 回合開始
	SetGameStart(){	
	
	},

// 回合結束
	SetGameEnd(){
		
	},

// 是否在表演
	CheckShowTimer(){
		return inState
	},

	SetStep(money){
		this.MoneyLerp = money
		this.txtCoin.string = GameG.FormatNum(money)
			
		this.rootRect.active =(money >= gameData.GetMinBigWinStep())	
			
		let targetStep = 0
		for(let i in gameData.BigWinStep){
			if(money >= gameData.BigWinStep[i]){
				targetStep = parseInt(i) +1
			}
		}

		if(money >= gameData.GetMinBigWinStep() && isPlaying == false){
			GameG.CloseBGMSound()
			GameG.PlayGameSound("se_bigwin",true)
			isPlaying = true
		}
		
		for(let i in poolStep){
			if(i == targetStep && poolStep[i].root.active == false){
				poolStep[i].root.active =(true)
				poolStep[i].spineTitle.setAnimation(0, "start", false)
				poolStep[i].spineTitle.addAnimation(0, "idle", true, 1)
				poolStep[i].spineWin.setAnimation(0, "start", false)
				poolStep[i].spineWin.addAnimation(0, "idle", true, 1)
			}
			poolStep[i].root.active =(i == targetStep)
		}
	},

	SetOffFireworks(){		
		let target = this.poolFirework.get("firework");
		target.active = true
		target.parent = this.poolFirework.node
		target.scale = 1

		let rangeWidth = GameG.GetScreenWidth() * 0.8
		let x = Math.random() * rangeWidth - rangeWidth * 0.5
		let rangeHeight = GameG.GetScreenHeight() * 0.8
		let y = Math.random() * rangeHeight - rangeHeight * 0.5
		target.position = cc.v2(x, y)

		let self = this
		let particle = target.getComponent("AnimationParticle")
		let sequence = GameG.NewTween(target)
		sequence.delay(Math.random() * 0.2)
		sequence.call(function(){
			target.active = true
			particle.play()
		})
		sequence.delay(1)
		sequence.call(function(){
			self.poolFirework.free("firework", target)
		})
		sequence.start()
	},
};

module.exports = UIBigWin
