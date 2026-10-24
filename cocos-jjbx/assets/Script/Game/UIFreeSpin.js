var HallG = require("Global")
var GameG = require("GameGlobal")
var gameConfig = require("GameConfig")
var gameLayer = null
var gameData = require("GameData")
var gameModel = require("GameModel")
var uichoose = require("UIChoose")
var uislot = null
var uipayLine = require("UIPayLine")
var utilities = require("MUtilities")
var MDoTween = require("MDoTween")
var mFreeCount = 0
var mIsSwtichSpinLoopTimer = false
var Panel = {}
var Drop = {}
var SwtichSpinLoopTimer = {}
var CoinRing = {}
var Result = {}
var Trigger = {}
var JP = {}
var startCallback = null

/** 用途: 遊戲類型-免費遊戲介面 */
var UIFreeSpin = {
	extends: cc.Component,

//離開遊戲
	onExit(){
	
	},

	Init(root, rootResult){
		gameLayer = require("GameLayer")
		uislot = require("UISlot")
		
		let self = this
		this.rootRect = root
		this.rootRect.active =(false)
		
		this.doTween = new MDoTween(root)
		
		Panel = {}
		Panel.root = cc.find("Panel",this.rootRect)
		Panel.txtFreeCount = cc.find("TextFreeCount",Panel.root).getComponent(cc.Label)
		Panel.SetFreeCount = function(value){
			Panel.txtFreeCount.string = value
		}
		Panel.goldMoney = 0
		Panel.txtGoldMoney = cc.find("TextGoldMoney",Panel.root).getComponent("TextControl")
		Panel.SetGoldMoney = function(value){
			Panel.goldMoney = value
			Panel.txtGoldMoney.string = GameG.AbbreviateNumber(value, true)
			utilities.AdjustTextSize(Panel.txtGoldMoney, 7, 0.1)
		}
		Panel.isUpdateGoldTotalMoney = false
		Panel.UpdateGoldTotalMoney = function(){
			if(Panel.isUpdateGoldTotalMoney == false){
				Panel.isUpdateGoldTotalMoney = true
				return true
			}
			return false
		}
		Panel.goldTotalMoney = 0
		Panel.textGoldTotalMoney = cc.find("TextGoldTotalMoney",Panel.root).getComponent("TextControl")
		Panel.SetGoldTotalMoney = function(value){
			if(value == null){
				Panel.goldTotalMoney = 0
				Panel.textGoldTotalMoney.string = ""
			} 
			else{
				Panel.goldTotalMoney = value
				Panel.textGoldTotalMoney.string = GameG.FormatNum(value)
			}
		}
		Panel.AddGoldTotalMoney = function(value){
		// console.log("AddGoldTotalMoney : ", value)
			Panel.goldTotalMoney = Panel.goldTotalMoney + value
			Panel.textGoldTotalMoney.string = GameG.FormatNum(Panel.goldTotalMoney)
		}
		Panel.SetActive = function(isActive){
			Panel.root.active =(isActive)
		}
		
		Drop = {}
		Drop.root = cc.find("Drop",this.rootRect)
		Drop.particles = []
		for(let  i = 1;  i <=  5; ++ i){
			Drop.particles[i] = cc.find("Particle"+i,Drop.root).getComponent("AnimationParticle")
			Drop.particles[i].node.active =(false)
		}
		Drop.Show = function(index){
			let particle = Drop.particles[index]
			if(particle != null){
				particle.node.active =(true)
				particle.play()
				GameG.NewDelayOnce(function(){
					particle.node.active =(false)
				}, 5)
			}
		}
		
		SwtichSpinLoopTimer = {}
		SwtichSpinLoopTimer.isEnable = false
		SwtichSpinLoopTimer.currentSpinLoopTime = -1
	// 切換滾動時間
		SwtichSpinLoopTimer.SwitchTime = function(spinLoopTime){
			if(SwtichSpinLoopTimer.isEnable == false){
				SwtichSpinLoopTimer.isEnable = true
				SwtichSpinLoopTimer.currentSpinLoopTime = gameData.SpinLoopTimer
				gameData.SpinLoopTimer = spinLoopTime
			}
		}
	// 恢復滾動時間
		SwtichSpinLoopTimer.Restore = function(){
			if(SwtichSpinLoopTimer.isEnable == true){
				SwtichSpinLoopTimer.isEnable = false
				gameData.SpinLoopTimer = SwtichSpinLoopTimer.currentSpinLoopTime
				SwtichSpinLoopTimer.currentSpinLoopTime = -1
			}
		}
		
	// 金幣環
		CoinRing = {}
		CoinRing.root = cc.find("CoinRing",root)
		CoinRing.particle = cc.find("Particle",CoinRing.root)
		CoinRing.particle.active =(false)
		CoinRing.prefabPool = cc.find("CoinRing",root).getComponent("ObjectPool")
	// 播放特效飛
		CoinRing.Play = function(startPos, endPos, t, endFunc){
			let pool = CoinRing.prefabPool.get("Particle")
			pool.active = true
			pool.parent = CoinRing.prefabPool.node
			pool.position = startPos
			pool.scale = 1

			let particle = pool.getComponent("AnimationParticle")
			particle.play()
			
			self.doTween.Create(pool)
				.to(t, { position: endPos })
				.call(function(){
					if(endFunc != null){
						endFunc()
					}		
					GameG.NewDelayOnce(function(){
						CoinRing.prefabPool.free("Particle", pool)
					}, 1)
				})
				.delay(0.1)
				.call(function(){
					pool.active = false
				})
				.start()
		}
		
		Result = {}
		Result.root = cc.find("Result",root)
		Result.bg = cc.find("Bg",Result.root)
		Result.score = cc.find("Score",Result.root)
		Result.txtScore = cc.find("Score/Text",Result.root).getComponent("TextControl")
		Result.SetTxtScore = function(value){
			Result.txtScore.string = value
		}
	// 表演結算 (播放時間, 結束停頓時間, 結束Function)
		Result.Show = function(playTime, endTime, endFunc){
			GameG.PlayGameSound("se_fgwin")
			let score = Panel.goldTotalMoney
			Panel.SetGoldTotalMoney(null)
			Result.SetActive(true)
			Result.SetTxtScore(GameG.FormatNum(score))
			Result.score.position = Panel.textGoldTotalMoney.node.position
						
			self.doTween.Create(Result.score)
				.to(playTime, { position: cc.v2(0, -60) })
				.delay(endTime)
				.call(function(){
					if(endFunc != null){
						endFunc()
					}
				})
				.start()
		}
		Result.SetActive = function(isActive){
			Result.root.active =(isActive)
		}
		Result.SetActive(false)
		
	// 觸發增加次數
		Trigger = {}
		Trigger.root = cc.find("Trigger",root)
		Trigger.text = cc.find("Text",Trigger.root).getComponent("TextControl")
		if(gameConfig.getLang() == "EN-US"){
			Trigger.text.node.position = cc.v2(-250, -6.5)	
		}
		else{
			Trigger.text.node.position = cc.v2(-41, -6.5)
		}
		Trigger.Show = function(value){			
			Trigger.text.string = value
			Trigger.SetActive(true)
		}
		Trigger.SetActive = function(isActive){
			Trigger.root.active =(isActive)
		}
		Trigger.SetActive(false)
		
	// JP
		JP = {}
		JP.root = cc.find("JP",root)
		JP.Grand = []
		JP.Grand.root = cc.find("Grand",JP.root)
		JP.Grand.text = cc.find("Grand/Text",JP.root).getComponent(cc.Label)
		JP.SetGrandText = function(value){
			JP.Grand.text.string = value
		}
		JP.SetActive = function(isActive){
			JP.root.active =(isActive)
		}
		JP.Result = []
		JP.Result.root = cc.find("Result",JP.root)
		JP.Result.text = cc.find("Result/Text",JP.root).getComponent("TextControl")
		JP.ShowResult = function(value){
			JP.Result.text.string = value
			JP.Result.SetActive(true)
		}
		JP.Result.SetActive = function(isActive){
			JP.Result.root.active =(isActive)
		}
		JP.Result.SetActive(false)
		JP.SetActive(true)
	},

//取得目前是否在free spin
	InState(){
		if(this.rootRect.active == true){
	        return true
		} 
		else{
	        return false
	    }
	},

// 顯示介面
	Show(isSpinHad, data, closeCallback, openCallback){
	
	// console.log("BBBBBBBBBBB Show", freeCount)
			
		if(this.rootRect.active == true){
			this.StartGame()
			return
		}
		
		GameG.PlayGameBGM("bgm_fg")
		
		this.rootRect.active =(true)
		let self = this
		Panel.SetActive(true)
		JP.SetActive(true)
		Result.SetActive(false)
		
		startCallback = openCallback
		
		if(closeCallback != null){
			closeCallback()
		}
		
		if(isSpinHad){
			let freeGameExtAward = data.FreeGameExtAward
		// 設定更新金幣總錢
			this.SetGoldTotalMoney(freeGameExtAward.EachCountMoney, true)
		}
		
		this.doTween.IntervalCallback(1, function(){
			
		// 不是斷線復原才表演下降
			if(isSpinHad == true){
			// 切換滾動時間
				SwtichSpinLoopTimer.SwitchTime(4)
			// 表演下降
				Drop.Show(gameData.FreeSelectIndex)
			}
		// 開始轉
			self.StartGame()
		})
		
	// 設定Free次數
		this.SetFreeCount(data.Count)
	// 更新Free次數
		this.UpdataFreeCount()
	// 更新JP
		this.UpdateJP()
	// 關閉JP結算
		JP.Result.SetActive(false)
	},

// 關閉介面
	Hide(receiveMsg, closeCallback, openCallback){
		let self = this
		if(this.rootRect.active == false){
			if(openCallback != null){
				openCallback()
			}
			return
		}
		
		if(gameData.FreeGame == null){
			return
		}
			
		console.log("FreeSpin Hide")
		
		gameData.FreeGame = null
			
	// 完成
		let completeFunc = function(){
			
			GameG.NewDelayOnce(function(){
				
				uichoose.Door.Close(false)
				
				GameG.NewDelayOnce(function(){

					if(closeCallback != null){
						closeCallback()
					}
					
					Panel.SetActive(false)
					JP.SetActive(false)
					
					GameG.NewDelayOnce(function(){
					
						uichoose.Door.Open()
						
						GameG.NewDelayOnce(function(){
						
							GameG.PlayGameBGM("bgm_mg")
							
							uichoose.Hide()
							
							self.rootRect.active =(false)
							
							if(openCallback != null){
								openCallback()
							}
						}, 1)
					}, 1)
				}, 1.5)
			}, 1)
		}
		
	// 離開
		let exitFunc = function(){
							
			Result.SetActive(false)	
					
			let totalWinMoney = 0
		// 連線分數
		// totalWinMoney = totalWinMoney + receiveMsg.FreeGameWinMoney
		// 金幣分數
			totalWinMoney = totalWinMoney + receiveMsg.FreeGameExtAward.TotalWinMoney
		// console.log("AAA 總共贏得 : ", totalWinMoney)
			
			gameLayer.FreeShowBigWin(totalWinMoney, completeFunc)
		}
	// 表演結算
		Result.Show(2, 2, exitFunc)
	},

// 回合開始
	SetGameStart(){	
	
	},

// 回合結束
	SetGameEnd(){
		
	},

// 開始遊戲
	StartGame(){
	// btnStart.gameObject:SetActive(false)
		
	// 設定Free次數
		this.SetFreeCount(mFreeCount - 1)
		this.UpdataFreeCount()
		
		if(startCallback != null){
			startCallback()
		}
	},

// 設定Free次數
	SetFreeCount(value){
		mFreeCount = value
	},

// 更新Free次數
	UpdataFreeCount(){
		Panel.SetFreeCount(mFreeCount)
	},

// 設定金幣
	SetGoldMoney(value){
		Panel.SetGoldMoney(value)
	},

// 設定金幣
	SetGoldTotalMoney(value){
		Panel.SetGoldTotalMoney(value)
	},

// 需要更新金幣總金額
	IsUpdateGoldTotalMoney(){
		return Panel.UpdateGoldTotalMoney()
	},

	SpinEnd(receiveMsg, callback){
		let self = this
	// 恢復滾動時間
		SwtichSpinLoopTimer.Restore()
		
		let symbolName = "g"
		let symbolCountMax = 3
		
		let count = 0
		let soundCount = 0
		let delayTime = 0
		for(let i in (receiveMsg.ReelResult)){ 
			let j = receiveMsg.ReelResult[i] 

			if(j.Symbol.SymbolName.match(symbolName) != null){
				count = count + 1
				
				let symbol = j.Symbol
				let position = j.Position
				let symbolTarget = uislot.GetSymbol(position.Reel, symbol.SymbolID)
				let money = symbolTarget.gValue
				
				if(symbolTarget != null){
					let t = 0.5
					delayTime = delayTime + t
					GameG.NewDelayOnce(function(){
						soundCount = soundCount + 1
						let value = soundCount
					// 防止超出
						if(value > 9){ value = 9 }
						let soundID = value.toString()
						if(soundID.length < 2){
							soundID = "0" + soundID
						}
					// console.log("soundID : ", soundID)
						GameG.PlayGameSound("se_fgycoinflytop"+soundID)
					// 飛金幣環
						let startPosition = GameG.LocalConvertWorldPointAR(symbolTarget.imgIcon.node)
						let endPosition = GameG.LocalConvertWorldPointAR(Panel.textGoldTotalMoney.node)
						CoinRing.Play(startPosition, endPosition, t, function(){
							Panel.AddGoldTotalMoney(money)
						})
					}, delayTime)
				} 
				else{
					console.log("!!!!!!!!!!!!! 找不到 Symbol")
				}
			}
		}
		
	// 關閉報獎
		uipayLine.Hide()
		
		delayTime = delayTime +2
		
	// 是否有增加次數
		if(count >= symbolCountMax){
		// console.log("觸發 SpinTrigger")
			
			GameG.NewDelayOnce(function(){
				
				GameG.PlayGameSound("se_addfg")
				
			// 更新Free次數
				self.UpdataFreeCount()
				
				let count = symbolCountMax
				Trigger.Show(count)			
			}, delayTime)

			delayTime = delayTime +2
			GameG.NewDelayOnce(function(){
				Trigger.SetActive(false)
			}, delayTime)
		}
		
	// 有中JP
		if(receiveMsg.JackpotMoney > 0){
			console.log("有中JP : ", receiveMsg.JackpotMoney)
			let symbolTarget = null
			delayTime = delayTime + 1
			GameG.NewDelayOnce(function(){
				for(let i in (receiveMsg.ReelResult)){ 
					let j = receiveMsg.ReelResult[i] 
				
					let symbol = j.Symbol
					
				// 找到金幣
					if(symbol.SymbolName == "g7"){
						let position = j.Position
						symbolTarget = uislot.GetSymbol(position.Reel, symbol.SymbolID)
						if(symbolTarget == null){
							console.log("symbolTarget is null")
						} 
						else{
							symbolTarget.Hide()
							symbolTarget.spine.setAnimation(0, "flip_bat", false)
							symbolTarget.spine.addAnimation(0, "bat", false, 1)
						}
						break
					}
				}
			}, delayTime)
			delayTime = delayTime + 2
			GameG.NewDelayOnce(function(){
				let score = GameG.FormatNum(receiveMsg.JackpotMoney)
				JP.ShowResult(score)
				GameG.PlayGameSound("jp_grand")			
			}, delayTime)
			delayTime = delayTime + 6
			GameG.NewDelayOnce(function(){
				JP.Result.SetActive(false)
			}, delayTime)
			delayTime = delayTime + 1
			GameG.NewDelayOnce(function(){
				if(symbolTarget == null){
					console.log("!!!!!!!!!!!!! 沒有找到g7")
				} 
				else{
					symbolTarget.spine.setAnimation(0, "flip_coin", false)
				}
			}, delayTime)
			delayTime = delayTime + 0.4
			GameG.NewDelayOnce(function(){
				if(symbolTarget == null){
					console.log("!!!!!!!!!!!!! 沒有找到g7")
				} 
				else{
					symbolTarget.RecoverShow()
				}
			}, delayTime)
			delayTime = delayTime + 2
			GameG.NewDelayOnce(function(){	
				let completeFunc = function(){
					if(callback != null){
						callback()
					}
				// 送給Server更新JPPool
					gameModel.SendJackpotPool()
				}
				gameLayer.FreeShowBigWin(receiveMsg.JackpotMoney, completeFunc)
			}, delayTime)
			return
		}
		
	// 所有動作完成
		GameG.NewDelayOnce(function(){
			if(callback != null){
				callback()
			}
		}, delayTime)
	},

// 設定免費遊戲額外獎勵
	SetFreeGameExtAward(data){
		FreeGameExtAward = data	
	},

// 更新JP
	UpdateJP(){
	// JP
		let jpValue = gameData.GetJackpotPoolMoney("Grand")
		jpValue = GameG.FormatUnit(jpValue)
		JP.SetGrandText(jpValue)
	},


};

module.exports = UIFreeSpin
