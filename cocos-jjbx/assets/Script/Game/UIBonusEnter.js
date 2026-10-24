var HallG = require("Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var MDoTween = require("MDoTween")
var completeCallback = null
var Bowl = {}
var Bat = {}

var UIBonusEnter = {
	extends: cc.Component,

//離開遊戲
	onExit(){
	
	},

	Init(root){
		let self = this
		this.doTween = new MDoTween(root)
		
		this.rootRect = root
		this.rootRect.active =(true)
		
		Bowl = {}
		Bowl.root = cc.find("Bowl",this.rootRect)
		Bowl.img1 = cc.find("img_01_main",Bowl.root).getComponent(cc.Sprite)
		Bowl.spine = cc.find("Spine",Bowl.root).getComponent(sp.Skeleton)
		Bowl.Particle = cc.find("Particle",Bowl.root).getComponent("AnimationParticle")
		Bowl.Particle.active =(false)
		Bowl.ShowParticle = function(){
			Bowl.Particle.active =(true)
			Bowl.Particle.play()
			GameG.NewDelayOnce(function(){
				Bowl.Particle.active =(false)
			}, 1)
		}
		Bowl.Open = function(){
			GameG.PlayGameSound("se_potexlpode")
			
			GameG.NewDelayOnce(function(){
				GameG.PlayGameSound("se_potclose")
			}, 0.5)
			GameG.NewDelayOnce(function(){
				GameG.PlayGameSound("se_potopen")
				
			// 設定獎勵數值0
				Bowl.SetRewardValue(0)
			}, 2)
			Bowl.spine.setAnimation(0, "open", false)
		}
		Bowl.Stop = function(){
			Bowl.spine.setAnimation(0, "stop", true)
		}	
		Bowl.SetActive = function(isActive){
			Bowl.root.active =(isActive)
		}
		Bowl.Show = function(){
		// local colorStart = CS.UnityEngine.Color.white
		// local colorEnd = CS.UnityEngine.Color.TRANSPARENT
		// Bowl.img1.color = colorStart
		// Bowl.spine.color = colorEnd
		// self.doTween.DOColor(Bowl.bg, Bowl.img1, 1)
		// self.doTween.DOColor(Bowl.spine, Bowl.spine, 1)
			Bowl.SetActive(true)
		}
		Bowl.Hide = function(){
		// local colorStart = CS.UnityEngine.Color.TRANSPARENT
		// local colorEnd = CS.UnityEngine.Color.white
		// Bowl.img1.color = colorStart
		// Bowl.spine.color = colorEnd
		// self.doTween.DOColor(Bowl.bg, Bowl.img1, 1, false)
		// self.doTween.DOColor(Bowl.spine, Bowl.spine, 1, false)
			Bowl.SetActive(false)
		}
	// 獎勵次數
		Bowl.rewardCount = Math.random()* gameData.RewardStep[gameData.RewardStep.length -1]
	// 設定獎勵數值
		Bowl.SetRewardValue = function(value){
			Bowl.rewardCount = value
			Bowl.UpdateRewardStep()
		}
	// 設定獎勵在第幾階段
		Bowl.UpdateRewardStep = function(){
			let targetStep = 1
			for(let i in gameData.RewardStep){
				if(Bowl.rewardCount > gameData.RewardStep[i]){
					targetStep = i
				}
			}
		// 動畫第一階段沒有值
			if(targetStep == 1){ targetStep = "" }
			Bowl.spine.setAnimation(0, "stop"+targetStep, false)
		}
	// 設定獎勵在第幾階段
		Bowl.AddReward = function(rewardCount){
			Bowl.rewardCount = Bowl.rewardCount + rewardCount
			Bowl.UpdateRewardStep()
		}
		Bowl.UpdateRewardStep()
		
	// 蝙蝠
		Bat = {}
		Bat.root = cc.find("Bat",this.rootRect)
		Bat.prefabPool = cc.find("Bat",this.rootRect).getComponent("ObjectPool")
		Bat.Play = function(reel, row){
			Bat.SetActive(true)
			
			let pool = Bat.prefabPool.get("Anim")
			pool.active = true
			pool.parent = Bat.prefabPool.node
			pool.position = cc.v2(0, 0)
			pool.scale = 1

			let anim = pool.getComponent(cc.Animation)
			let animName = "JJBX_BAT"+reel+row
		// console.log("Bat Play : ", animName)
			anim.play(animName)
			
			GameG.NewDelayOnce(function(){
				Bat.prefabPool.free("Anim", pool)
				
			// 有Bonus資料
				if(gameData.BonusGame == null){
					Bowl.AddReward(1)
				} 
				else{
					Bowl.AddReward(gameData.RewardStep[gameData.RewardStep.length -1])
				}
			}, 1)
		}
		Bat.SetActive = function(isActive){
			Bat.root.active =(isActive)
		}
		Bat.SetActive(false)
	},

// 回合開始
	SetGameStart(){
	
	},

// 回合結束
	SetGameEnd(){
	
	},

	Show(isSpinHad, callback){
	
	// GameG.PlayGameSound("se_cutscenes")
		
		completeCallback = callback
		
		if(isSpinHad){
		// 寶箱打開
			Bowl.Open()
			
			this.doTween.IntervalCallback(2.9 * 0.75, function(){
				if(callback != null){
					callback()
				}
			})
	} 
	else{
			if(callback != null){
				callback()
			}
		}
	},

// 關閉介面
	Hide(){		
		this.rootRect.active =(false)
		if(completeCallback != null){
			completeCallback()
		}
	},

	SetActive(isActive){
		Bowl.SetActive(isActive)
	},

// 寶箱隱藏
	BowlHide(){
		Bowl.Hide()
	},

	GetBowlSpine(){
		return Bowl.spine
	},

// 表演蝙蝠
	ShowBat(receiveMsg, callback){
		let isShow = false
	// 檢查蝙蝠
		for(let i in (receiveMsg.ReelResult)){ 
			let j = receiveMsg.ReelResult[i] 

			let symbol = j.Symbol
			let position = j.Position
		// 隨便一隻蝙蝠
			if(symbol.SymbolName == "w1"){
				GameG.PlayGameSound("se_collect")
			// 播放蝙蝠
				Bat.Play(position.Reel, position.Row)
				isShow = true
			}
		}
		if(isShow){
			this.doTween.Create()
				.delay(1)
				.call(function(){
					Bowl.ShowParticle()
				})
				.delay(1)
				.call(function(){
					if(callback != null){
						callback()
					}
				})
				.start()
		}
		return isShow
	},


};

module.exports = UIBonusEnter
