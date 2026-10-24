var HallG = require("Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var gameModel= require("GameModel")
var gameLayer = null
var uibonusEnter = require("UIBonusEnter")
var MDoTween = require("MDoTween")
var MCountdown = require("MCountdown")
var pool = []
var currentRecordID = 0
var sequenceTimer = null
var isWaitServerChoose = false
var isAuto = false
var chooseCount = 0
var currentTimeScale = null
var coinPool = []
var Result = {}

/** 用途: 遊戲類型-獎勵遊戲介面 */
var UIBonusGame = {
	extends: cc.Component,

//離開遊戲
	onExit(){
	
	},

	Init(root){
		gameLayer = require("GameLayer")

		let self = this
		this.rootRect = root
		this.rootRect.active =(false)
		
		this.doTween = new MDoTween(root)
			
		this.optionGroupRoot = cc.find("OptionGroup",root)
		this.imgCoinBg = cc.find("Bg",root).getComponent(cc.Sprite)
		
		coinPool = []
		for(let  i = 1;  i <=  this.optionGroupRoot.childrenCount; ++ i){		
			let coin = []
			coin.root = cc.find("Coin_"+i,this.optionGroupRoot)
			coin.spine = cc.find("Spine",coin.root).getComponent(sp.Skeleton)
			coin.chooseIndex = 0		
			coin.PlayChoose = function(rewareValue){
				if(coin.chooseIndex == 0){
					GameG.PlayGameSound("se_flip")
					coin.chooseIndex = rewareValue
					coin.spine.setAnimation(0, "flip0"+rewareValue, false)
					coin.spine.addAnimation(0, "icon0"+rewareValue, true, 1)
				}
			}
			coin.Choose = function(rewareValue){
				if(coin.chooseIndex == 0){
					coin.chooseIndex = rewareValue
					coin.spine.setAnimation(0, "icon0"+rewareValue, true)
				}
			}
			coin.IsChoose = function(){
				return coin.chooseIndex != 0
			}
			coin.btn = cc.find("Spine",coin.root).getComponent(cc.Button)
			coin.btn.node.on('click',function(){
				self.ChooseOption(i)
			})
			coinPool[i] = coin
		}
		
	// 結算
		Result = {}
		Result.root = cc.find("Result",root)
		Result.grand = cc.find("Grand",Result.root)
		Result.grand.active =(false)
		Result.major = cc.find("Major",Result.root)
		Result.major.active =(false)
		Result.minor = cc.find("Minor",Result.root)
		Result.minor.active =(false)
		Result.mini = cc.find("Mini",Result.root)
		Result.mini.active =(false)
		Result.particle = cc.find("Particle",Result.root).getComponent("AnimationParticle")
		Result.textScore = cc.find("TextScore",Result.root).getComponent("TextControl")		
		Result.SetScore = function(score){
			Result.textScore.string = score
		}
		Result.SetActive = function(isActive){
			Result.root.active =(isActive)
		}
		Result.Show = function(jpName, score){
			GameG.PlayGameSound("jp_" + jpName.toLowerCase())
			let names = [ "Grand", "Major", "Minor", "Mini" ]
			let times = [ 6, 4.5, 5, 4.4 ]
			Result.grand.active =(jpName == names[0])
			Result.major.active =(jpName == names[1])
			Result.minor.active =(jpName == names[2])
			Result.mini.active =(jpName == names[3])
			Result.SetScore(score)
			Result.SetActive(true)
			for(let i in (names)){ 
				let j = names[i] 

				if(j == jpName){
					return times[i]
				}
			}
			return 0
		}
		Result.SetActive(false)
		
	// 倒數計時
		this.countdown = new MCountdown(cc.find("Countdown/Text",root))
		this.countdown.Init(cc.find("Countdown/Text",root).getComponent("TextControl"), gameData.CountdownTimeMax, gameData.CountdownTimeShow, function(){
		// console.log("UIBonusGame 自動選擇")
			isAuto = true
		// 自動選澤
			self.AutoChoose()
		})
	},

	ResetCoin(){
		for(let i in (coinPool)){ 
			let j = coinPool[i] 

			j.chooseIndex = 0
			j.spine.setAnimation(0, "idle", true)
		}
	},

	PlayShowCoin(){	
		this.doTween.DOAlpha(this.imgCoinBg.node, 0, 255, 1)
	// 取得寶箱Spine
		let bowlSpine = uibonusEnter.GetBowlSpine()
		let worldPosition = GameG.LocalConvertWorldPointAR(bowlSpine.node)
		
		for(let i in (coinPool)){
			let coinRT = coinPool[i].spine.node
			coinRT.position = GameG.WorldConvertLocalPointAR(coinRT.parent, worldPosition)			
			coinPool[i].btn.interactable = false
			
			this.doTween.DOMove(coinRT, cc.v2(0,0), 1, function(){
				coinPool[i].btn.interactable = true
			})
		}
	},

	ShowCoin(){
		
		this.imgCoinBg.node.opacity = 255
		for(let i in (coinPool)){ 
			coinPool[i].spine.node.position = cc.v2(0, 0)
		}
	},

	Reset(){
		isWaitServerChoose = false
		isAuto = false
		chooseCount = 0
		this.countdown.Stop()
	},

// 回合開始
	SetGameStart(){
	
	},

// 回合結束
	SetGameEnd(){
	
	},

	InState(){
		return this.rootRect.active
	},

//表演
	Show(isSpinHad, callback){
		
		if(gameData.BonusGame == null){
			if(callback != null){
				callback()
			}
			return
		}
		
		GameG.PlayGameBGM("bgm_jp")
		
		currentTimeScale = GameG.GetTimeScale()
		
		GameG.ChangeTimeScale(1)
		
		this.rootRect.active =(true)
	// 重置
		this.Reset()
	// 重置金幣
		this.ResetCoin()
	// 關閉結算
		Result.SetActive(false)
		
		for(let i in (gameData.BonusGame.Records)){ 
			let j = gameData.BonusGame.Records[i] 

			
		// 設置金幣選擇
			this.SetCoinChoose(j, false)
		}
		
	// 表演金幣
		if(isSpinHad){
			this.PlayShowCoin()
		} 
		else{
			this.ShowCoin()
		}
		
		this.completeCallback = callback
		this.countdown.Start()
	},

// 關閉介面
	Hide(){
		GameG.PlayGameBGM("bgm_mg")
		gameData.BonusGame = null
		this.rootRect.active =(false)
		
		GameG.ChangeTimeScale(currentTimeScale)
	},

// 選擇選項
	ChooseOption(index){
	// console.log("ChooseOption", gameData.BonusGame.Records)
		
		if(isWaitServerChoose == true){
		// console.log("BonusGame等待Server選擇完畢")
			return
		}
		
		let coin = coinPool[index]
		
		if(coin.IsChoose()){
		// console.log("這已經選擇過了")
		} 
		else{
			let param = null
			for(let k in (gameData.BonusGame.Records)){ 
				let v = gameData.BonusGame.Records[k] 

				if(v.Location == 0 && param == null){
					param = v
				}
			}
		// 已選擇完畢，不再傳送封包
			if(param == null){
				return
			}
			param.Location = index
			
			let data = []
			data.Record = param
			gameModel.SendPickBonusID(data)
			
		// 等待Server選擇
			isWaitServerChoose = true
			
			this.countdown.Stop()
			this.countdown.Start()
		}
	},

// 接收Server BonusGame選擇
	SetPickBonusRet(data){
	
		if(isWaitServerChoose == false){
		// console.log("Clien未選擇")
			return
		}
		
	// 等待Server選擇
		isWaitServerChoose = false
		
	// 播放金幣選擇
		this.SetCoinChoose(data.Record, true)
		
	// 自動選澤
		this.AutoChoose()
	},

// 自動選澤
	AutoChoose(){
		
	// 自動選擇
		if(isAuto){
			for(let i in (coinPool)){ 
				let j = coinPool[i] 

				if(j.chooseIndex == 0){
					this.ChooseOption(i)
					break
				}
			}
		}
	},

// 設置金幣選擇
	SetCoinChoose(record, isPlay){
		
		if(record.Location <= 0 || record.Location > coinPool.length){
		// console.log("SetCoinChoose 無法設定 Location : ", record.Location)
			return
		}
		
		let coin = coinPool[record.Location]
		
		if(coin.IsChoose()){
			// console.log("SetCoinChoose 這已經選擇過了")
		} 
		else{
			// 是要播放
			if(isPlay){
				coin.PlayChoose(record.RewareValue)
			} 
			else{
				coin.Choose(record.RewareValue)
			}
			
			chooseCount = chooseCount + 1
			
		// console.log("遊戲選擇次數 : ", chooseCount.."/"..#gameData.BonusGame.Records)
			
			if(chooseCount >= gameData.BonusGame.Records.length){
				this.GameEnd(record)
			}
		}
	},

	GameEnd(record){
		let self = this
	// console.log("遊戲結束")
		
		this.countdown.Stop()
		
		GameG.PlayGameSound("se_flipend")
		
		this.doTween.IntervalCallback(2, function(){
			
			let jpNames = [ null, "Grand", "Major", "Minor", "Mini" ]
			
			let jpName = jpNames[record.RewareValue]
			
			if(jpName == null){
				console.log("!!!!!!!! 找不到此 JPName : ", record.RewardValue)
				return
			}
			
		// JP
		// local jpValue = gameData.GetJackpotPoolMoney(jpName)
			let jpValue = gameData.BonusGame.WinMoney
		// 表演結算
			let showTime = Result.Show(jpName, GameG.FormatUnit(jpValue))
		// 等待關閉
			GameG.NewDelayOnce(function(){
				
				Result.SetActive(false)
				self.Hide()
				gameLayer.FreeShowBigWin(jpValue, self.completeCallback)
			}, showTime)
		})
	},


};

module.exports = UIBonusGame
