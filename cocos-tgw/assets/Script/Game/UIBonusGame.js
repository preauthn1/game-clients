var G = require( "Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var gameModel= require("GameModel")
var uiChip = require("UIChip")
var pool = []
var chooseCount = 0
var totalScore = 0
var bet
var betMinValue
var betMaxValue
var completeCallback = null
var sequenceHide = null
var sequenceCountdown = null
var isWaitCandyComplete
var currentTempIndex
var isHideEnd
var all
var isAuto = false
var textScaleNormal = 0.45
var textScaleMin = 0.9
var textScaleMax = 1.15
//是等待選擇完成
var isWaitSelectCandyComplete = true
//是測試
var isTest = false

/** 用途: 遊戲類型-獎勵遊戲介面 */
var UIBonusGame = {
	extends: cc.Component,

//離開遊戲
	onExit(){
	//關閉計時器
		this.CloseCountdown()
	},
    /** 初始化 */
	Init(root){
		let self = this
		this.rootRect = root
		this.rootRect.active =(false)
	
		this.rootBg = cc.find("ImageBg",root)
		this.imgBg = cc.find("ImageBg",root).getComponent(cc.Sprite)
			
		this.rootMoney = cc.find("ImageMoney",root)
		this.txtMoney = cc.find("ImageMoney/UponFx/Text",root).getComponent("TextControl")
		
		this.txtTotalScore = cc.find("TextTotalScore",root).getComponent(cc.Label)
		this.txtChooseCount = cc.find("TextChooseCount",root).getComponent("TextControl")
        // 時間倒數文字
		this.txtCountdown = cc.find("TextCountdown",root).getComponent("TextControl")
			
		this.btnMoneyClose = cc.find("ImageMoney/ButtonClose",root).getComponent(cc.Button)
		this.btnMoneyClose.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			self.Hide()
		})
		
		this.rootUponFx = cc.find("ImageMoney/UponFx",root)
		
		this.spineRole = cc.find("Background/SpineRole",root).getComponent(sp.Skeleton)
		
		let index = 1
		for(let i in this.rootBg.children){
			let group = this.rootBg.children[i]
			for(let j in group.children){
				let tempIndex = index
				pool[index] = {}
				pool[index].root = group.children[j].getComponent(cc.Sprite)
				// let useBear = Math.floor(CS.UnityEngine.Random.Range(1,5))
				let useBear = Math.floor(Math.random() * (5-1) + 1)
				pool[index].spine = cc.find("SkeletonGraphic (b_bear_0"+useBear+")",group.children[j]).getComponent(sp.Skeleton)
				pool[index].spine.node.active =(true)
				pool[index].btn = group.children[j].getComponent(cc.Button)
				pool[index].btn.node.on('click',function(){	
					GameG.PlayGameSound("se_click")
					self.OnClickChooseBtn(tempIndex, true)	
				})
				pool[index].moneyText = cc.find("MoneyText" ,group.children[j]).getComponent("TextControl")
				pool[index].moneyGText = cc.find("MoneyGText" ,group.children[j]).getComponent("TextControl")
				index = index +1
			}
		}
	},

// 回合開始
	SetGameStart(){
	
	},

// 回合結束
	SetGameEnd(){
	
	},

//取得可以選擇的索引
	GetCanChooseIndex(){
		let list = []
		for(let i in pool){
			if(pool[i].btn.interactable == true){
				list.push(i)
			}
		}
		let index = Math.floor(G.getRandom(1, list.length))	
		return list[index -1]
	},

//自動選擇
	StartAutoChoose(){	
		let self = this
		isAuto = true
		GameG.NewDelayOnce(function(){
			self.OnClickChooseBtn(self.GetCanChooseIndex(), false)
		}, 0.2)
	},

// 開始倒數
	StartCountdown(delayCountdown){
		let self = this
	//關閉計時器
		this.CloseCountdown()
		sequenceCountdown = GameG.NewTween(this.rootRect)
		sequenceCountdown.delay(0.1)
		if(delayCountdown != null){
			delayCountdown = Math.ceil(delayCountdown)
		}
		
		let totalCountdown = delayCountdown || 0
		totalCountdown = totalCountdown + gameData.BonusTotalCountdown
		for(let i = totalCountdown; i >= 1; -- i ){
	        sequenceCountdown.call( function(){ 
				self.txtCountdown.node.active =(gameData.BonusShowCountdown >= i && gameData.BonusTotalCountdown >= i)
				self.txtCountdown.string = (i).toString()
			})
	        sequenceCountdown.delay(1)
	    }
		sequenceCountdown.call( function(){
	        self.txtCountdown.node.active =(false)
			self.StartAutoChoose()
		})
		sequenceCountdown.start()
	},

//關閉計時器
	CloseCountdown(){
		isAuto = false
		
		this.txtCountdown.node.active =(false)
		
		if(sequenceCountdown != null){
			sequenceCountdown.stop()
			sequenceCountdown = null
		}
	},

//表演
	Show(initPosition, delayCountdown, callback){
		if(this.rootRect.active == true){
			return
		}
			
		if(gameData.BonusDetail == null){
			if(callback != null){
				callback()
			}
			return
		}
		
		isHideEnd = false
		isWaitCandyComplete = false
	//重置總分
		this.ResetTotalScore()
	//重置選擇次數
		this.ResetChooseCount()
		this.txtCountdown.node.active =(false)
		completeCallback = callback
		this.rootRect.active =(true)
		this.rootBg.active =(true)
		this.rootMoney.active =(false)
		initPosition = initPosition || cc.v3(0, 0, 0)
		
		GameG.PlayGameBGM("bgm_bg")
			
	//動畫設定為Idle
		this.spineRole.setAnimation(0, "ginger_02_idle", true);
		for(let i in pool){	
			pool[i].spine.setAnimation(0, "idle", true)
			pool[i].btn.interactable = true
			pool[i].moneyText.node.active =(false);
			pool[i].moneyGText.node.active =(false);
		}
		
	// 取得倍率
		bet = gameData.GetChipMoney()
		bet = bet / 100
	// 所有倍率
		all = gameData.BonusAll
		betMinValue = all[1]
		betMaxValue = all[1]
	// 取得最大最小倍率
		for(let i in all){
			if(betMinValue >= all[i]) {
				betMinValue = all[i]
			}
			if(betMaxValue < all[i]) {
				betMaxValue = all[i]
			}
		}
	//設定已翻過
		for(let i in gameData.BonusDetail){
		//詳細資料
			let detail = gameData.BonusDetail[i]
		//翻牌位置
			let location = detail.Location
		// 翻過
			if(location > 0){
			//增加選擇次數
				this.AddChooseCount(1)
			//增加總分
				this.AddTotalScore(detail.RewareValue)
			// 開啟糖果
				this.OpenCandy(location, detail.RewareValue, true)
			}
		}
	// 取得選擇次數是否用完
		if(this.GetChooseCountEnd()){
		// print("次數已用完")
			this.Hide()
		} 
		else{
			this.StartCountdown(delayCountdown)
		}
	},

// 開啟糖果
	OpenCandy(index, value, isPlayerOpen){
		pool[index].btn.interactable = false
		let text = null
		if(isPlayerOpen) {
			GameG.NewDelayOnce(function(){
				pool[index].spine.setAnimation(0, "stop2", true)
			}, 0.5)
			
			pool[index].moneyGText.node.active =(false)
			pool[index].moneyText.node.active =(true)
			text = pool[index].moneyText
		} 
		else{
			GameG.NewDelayOnce(function(){
				pool[index].spine.setAnimation(0, "stop", true)
			}, 0.5)
			pool[index].moneyGText.node.active =(true)
			pool[index].moneyText.node.active =(false)
			text = pool[index].moneyGText
		}
	// 設定字大小
		let scale = 1 * textScaleNormal
	// 最小
		if(value == betMinValue) {
			scale = scale * textScaleMin		
			text.node.scale = scale
	// 最大
		} 
		else if(value == betMaxValue) {

			scale = scale * textScaleMax
			if(isPlayerOpen) {
				text.node.scale = scale * 1.35
				
				let sequence = GameG.NewTween(text.node)
				.to(0.20, { scale : scale * 1.50 })
				.to(0.20, { scale : scale * 0.95 })
				.to(0.15, { scale : scale * 1.05 })
				.to(0.15, { scale : scale * 1.00 })
				.start()
			}
		} 
		else{
			text.node.scale = scale
		}
		value = Math.floor(value * 10) * 0.1
		text.string = "x " + value
	},

//按下選擇次數按鈕
	OnClickChooseBtn(tempIndex,isPlayer){	
			
		if(isWaitCandyComplete){
		// print("等待Server完成")
			return
		}
		
		isWaitCandyComplete = true
			
	//次數用完
		if(chooseCount >= gameData.BonusDetail.length){
		// print("開獎次數用完了")
			return
		}
		
		for(let i in gameData.BonusDetail){
			if(gameData.BonusDetail[i].Location > 0){
				if(gameData.BonusDetail[i].Location == tempIndex){
			// print("此按鈕已經開過了 : "..tempIndex)
				return
				}
			} 
			else{
			// print("沒點過離開 : "..i)
				break;
			}
		}
			
		currentTempIndex = tempIndex
		
	//是玩家點的
		if(isPlayer){
		//關閉計時器
			this.CloseCountdown()
		}
		
	//測試
		if(isTest){
		//不等Server傳
			SelectCandyComplete()
		} 
		else{
		// 送給Server點選
			gameModel.SendBonusGameIcon(chooseCount + 1,tempIndex,-1);
			
		//是等待選擇完成
			if(isWaitSelectCandyComplete){
			} 
			else{
			//不等Server傳
				SelectCandyComplete()
			}
		}
	},

// 關閉介面
	Hide(){
		if(isHideEnd == true) { 
			return;
		}	
		isHideEnd = true
		gameData.BonusDetail = null
		this.rootRect.active =(false)
		GameG.PlayGameBGM("bgm_mg")
		if(completeCallback != null){
			completeCallback()
		}
	},

//重置總分
	ResetTotalScore(){
		totalScore = 0
		this.UpdateTotalScore()
	},

//增加總分
	AddTotalScore(rewareValue){
		totalScore = totalScore + (rewareValue * bet)
		this.UpdateTotalScore()
	},

//更新總分
	UpdateTotalScore(){
		this.txtTotalScore.string = GameG.FormatNum(totalScore * 100)
	},

//重置選擇次數
	ResetChooseCount(){
		chooseCount = 0
		this.UpdateChooseCountText()
	},

//增加選擇次數
	AddChooseCount(value){
		chooseCount = chooseCount + value
		this.UpdateChooseCountText()
	},

//更新選擇次數文字
	UpdateChooseCountText(){
		
		let count = gameData.BonusDetail.length - chooseCount
		this.txtChooseCount.string = (count).toString()
	},

//取得選擇次數是否用完
	GetChooseCountEnd(){
		if(chooseCount >= gameData.BonusDetail.length){
			return true
		} 
		else{
			return false
		}	
	},

//選擇糖果完成
	SelectCandyComplete(){
		let self = this
		let detailIndex = chooseCount
		
		let detail = gameData.BonusDetail[detailIndex]
		
	//存已翻過的位置
		detail.Location = currentTempIndex
		
	//按鈕
		pool[currentTempIndex].btn.interactable = false
		pool[currentTempIndex].spine.setAnimation(0, "flip", false);
	
	//音效
		GameG.PlayGameSound("se_pick")
		
		let index = currentTempIndex	
		GameG.NewDelayOnce(function(){
			// 開啟糖果
			self.OpenCandy(index, detail.RewareValue, true)
			//增加總分
			self.AddTotalScore(detail.RewareValue)
		}, 0.4)
		
	//選擇次數+1
		this.AddChooseCount(1);
		
	//次數用完
		if(this.GetChooseCountEnd()){
		// print("次數用完 遊戲結束")
			
		//關閉計時器
			this.CloseCountdown()
			
			let sequence = GameG.NewTween(this.rootRect)
			sequence.delay(2)
			sequence.call(function(){
				GameG.PlayGameSound("se_pickend")
			})
			
		// 亮所有糖果
			let allIndex = chooseCount
			console.log("all",all)
			for(let i in (pool)){ 
				let j = pool[i] 

				if(j.btn.interactable) {
					j.btn.interactable = false
					sequence.delay(0.02)
					sequence.call(function(){
						j.spine.setAnimation(0, "flip", false);	
						GameG.NewDelayOnce(function(){
							// 開啟糖果
							self.OpenCandy(i, all[allIndex], false)
							allIndex = allIndex + 1							
						}, 0.4)
					})
				}
			}
			sequence.delay(3)
			sequence.call(function(){
				GameG.PlayGameSound("se_winend02")
				self.ShowMoney()
				self.spineRole.setAnimation(0, "ginger_02_win", true);	

				GameG.NewDelayOnce(function(){
					self.Hide()
				}, 5)
			})	
			sequence.start()
		} 
		else{
		// print("次數還沒用完 遊戲繼續")
			
			isWaitCandyComplete = false
			
			if(isAuto){
				this.StartAutoChoose()
			} 
			else{
				this.StartCountdown()
			}
		}
	},

	ShowMoney(){	
		this.rootMoney.active =(true)
		
		this.txtMoney.string = GameG.FormatNum(totalScore * 100)
				
		this.rootUponFx.scale = 1
		
		GameG.NewTween(this.rootUponFx)
		.to(0.2, { scaleX : 0.8, scaleY : 1.3 })
		.to(0.1, { scaleX : 1.2, scaleY : 0.9 })
		.to(0.1, { scaleX : 0.9, scaleY : 1.2 })
		.to(0.1, { scaleX : 1.1, scaleY : 1.0 })
		.to(0.1, { scaleX : 1.0, scaleY : 1.0 })
		.start()		
	},


};

module.exports = UIBonusGame
