var HallG = require("Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var gameLayer = null
var gameModel = require("GameModel")
var uislot = null
var uiautoSpin = require("UIAutoSpin")
var uichoose = require("UIChoose")
var utilities = require("MUtilities")
var MDoTween = require("MDoTween")
var doorCloseX = 1000
var sequencePress = null
var mGData = []
var Panel = {}
var CoinRing = {}
var SpinTrigger = {}
var JP = {}
var Result = {}
var doTween = null

/** 用途: 遊戲類型-免費再轉特別獎介面 */
var UILightning = {
	extends: cc.Component,

//離開遊戲
	onExit(){
		mGData = []
	},

	Init(root, bg){
		gameLayer = require("GameLayer")
		uislot = require("UISlot")		

		let self = this
		this.rootRect = root
		this.rootRect.active =(false)
		bg.active =(false)
		
		doTween = new MDoTween(root)
			
		Panel = {}
		Panel.root = cc.find("Panel",root)
		Panel.SetActive = function(isActive){
			Panel.root.active =(isActive)
		}
	// Free次數
		Panel.freeCount = 0
		Panel.txtFreeCount = cc.find("TextFreeCount",Panel.root).getComponent(cc.Label)
		Panel.SetFreeCount = function(value){
			Panel.freeCount = value
		}
		Panel.AddFreeCount = function(value){
			Panel.freeCount = Panel.freeCount + value
		}
		Panel.UpdateFreeCountText = function(){
			Panel.txtFreeCount.string = Panel.freeCount
		}
	// 金幣(G7)
		Panel.goldMoney = 0
		Panel.txtGoldMoney = cc.find("TextGoldMoney",Panel.root).getComponent("TextControl")
		Panel.SetGoldMoney = function(value){
			Panel.goldMoney = value
			Panel.txtGoldMoney.string = GameG.AbbreviateNumber(Panel.goldMoney, true)
			utilities.AdjustTextSize(Panel.txtGoldMoney, 7, 0.1)
		}
	// 綠幣(G8)
		Panel.greenMoney = 0
		Panel.txtGreenMoney = cc.find("TextGreenMoney",Panel.root).getComponent("TextControl")
		Panel.SetGreenMoney = function(value){
			Panel.greenMoney = value
			Panel.txtGreenMoney.string = GameG.AbbreviateNumber(Panel.greenMoney, true)
			utilities.AdjustTextSize(Panel.txtGreenMoney, 7, 0.1)
		}
		Panel.UpdateGreenMoney = function(){		
			let prepare = gameData.LightningPrepare		
			let greenMoney = 0
			if(prepare != null){
				for(let i in (prepare.PastPayGroups)){ 
					let j = prepare.PastPayGroups[i] 

					greenMoney = greenMoney + j.WinMoney
				}
			}
			Panel.SetGreenMoney(greenMoney)
		}
		Panel.AddGreenMoney = function(value){
			Panel.greenMoney = Panel.greenMoney + value
			Panel.SetGreenMoney(Panel.greenMoney)
		}
	// 總金幣
		Panel.txtGoldAmount = cc.find("TextGoldAmount",Panel.root).getComponent("TextControl")
		Panel.goldAmount = 0
		Panel.SetTextGoldAmount = function(value){
			Panel.goldAmount = value
			Panel.txtGoldAmount.string = Panel.goldAmount
		}
		Panel.UpdateTextGoldAmount = function(reelResult){		
		// 總金額
			let goldAmount = 0
			for(let i in (reelResult)){ 
				let j = reelResult[i] 

				let symbol = j.Symbol
				if(symbol.SymbolName.match("g") != null){
					goldAmount = goldAmount + 1
				}
			}
		// 設定總金幣文字
			Panel.SetTextGoldAmount(goldAmount)
		}	
	//開始按鈕	
	    Panel.btnStart = cc.find("ButtonStart",Panel.root).getComponent(cc.Button)
	    Panel.btnStart.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			self.StartSpin()
		})
	//停止按鈕
	    Panel.btnStop = cc.find("ButtonStop",Panel.root).getComponent(cc.Button)
	    Panel.btnStop.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			self.StopSpin()
		})

		Panel.ShowStartSpin = function(){
			Panel.btnStart.interactable = false
			Panel.btnStart.node.active =(true)
			Panel.btnStop.node.active =(false)
		}
		Panel.SetStartSpin = function(){
			Panel.btnStart.interactable = true
			Panel.btnStart.node.active =(true)
			Panel.btnStop.node.active =(false)
		}
		Panel.StartSpin = function(){
			Panel.btnStart.interactable = false
			Panel.btnStart.node.active =(false)
			Panel.SetBtnStopEnable(false)
		}
		Panel.StopSpin = function(){
			Panel.btnStart.node.active =(true)
			Panel.btnStop.node.active =(false)
		}
		Panel.SpinEnd = function(){
			Panel.btnStart.node.active =(true)
			Panel.btnStart.interactable = false
			Panel.btnStop.node.active =(false)
		}
		Panel.SetBtnStopEnable = function(isEnable){
			Panel.btnStop.interactable = isEnable
			Panel.btnStop.node.active =(true)
		}
		Panel.SetActive(false)
		
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
			
			let sequence = doTween.Create(pool)
			.to(t, { position: endPos})
			.call(function(){
				if(endFunc != null){
					endFunc()
				}
				doTween.IntervalCallback(1, function(){
					CoinRing.prefabPool.free("Particle", pool)
				})
			})
			.delay(0.1)
			.call(function(){
				pool.active = false
			})
			.start()
		}
		
	// SpinTrigger
		SpinTrigger = {}
		SpinTrigger.root = cc.find("SpinTrigger",root)
		SpinTrigger.particle = cc.find("Particle",SpinTrigger.root)
		SpinTrigger.particle.active =(false)
		SpinTrigger.prefabPool = cc.find("SpinTrigger",root).getComponent("ObjectPool")
		SpinTrigger.Show = function(targetPos){
			let pool = SpinTrigger.prefabPool.get("Particle")
			pool.active = true
			pool.parent = SpinTrigger.prefabPool.node
			pool.position = targetPos
			pool.scale = 1

			let particle = pool.getComponent("AnimationParticle")
			particle.play()

			doTween.IntervalCallback(3, function(){
				SpinTrigger.prefabPool.free("Particle", pool)
			})
		}
		
	// JP
		JP = {}
		JP.root = cc.find("JP",root)
		JP.Grand = {}
		JP.Grand.root = cc.find("Grand",JP.root)
		JP.Grand.text = cc.find("Grand/Text",JP.root).getComponent(cc.Label)
		JP.SetGrandText = function(value){
			JP.Grand.text.string = value
		}
		JP.SetActive = function(isActive){
			JP.root.active =(isActive)
		}
		JP.Result = {}
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
		
		Result = {}
		Result.root = cc.find("Result",root)
		Result.medalSpine = cc.find("Medal",Result.root).getComponent(sp.Skeleton)
		Result.titleSpine = cc.find("Title",Result.root).getComponent(sp.Skeleton)
		Result.scoreText = cc.find("TextScore",Result.root).getComponent("TextControl")
		Result.Show = function(score){
			Result.SetActive(true)
			Result.medalSpine.setAnimation(0, "animation", false)
			Result.titleSpine.setAnimation(0, "start", false)
			Result.titleSpine.addAnimation(0, "idle", true, 1)	
			Result.scoreText.string = score
		}
		Result.SetActive = function(isActive){
			Result.root.active =(isActive)
		}
		Result.SetActive(false)
	},

//取得目前是否在
	InState(){
		return this.rootRect.active
	},

// 顯示介面
	Show(){
	
	 	//console.log("AAA Lightning Show : ", this.rootRect.active)
		
		if(this.rootRect.active == true){
			gameData.SetLightningGoldBallState(true)
		} 
		else{
			this.rootRect.active =(true)
		// 結算關閉
			Result.SetActive(false)
			Panel.ShowStartSpin()
		// result.SetActive(false)
		// score.SetActive(false)
			
			GameG.PlayGameBGM("bgm_rs")
			
		// 先清g資料
			mGData = []
			
		// Spin時間
			let spinDelayTime = 1
			
			let prepare = gameData.LightningPrepare
			
			Panel.SetActive(true)
		// 設定Free次數
			Panel.SetFreeCount(prepare.Count)
			Panel.UpdateFreeCountText()
		// 更新G數量
			Panel.UpdateTextGoldAmount(prepare.ReelResult)
			
		// 金幣
			let goldMoney = gameData.GetFreeEachCountMoney()
		// 沒有值就計算
			if(goldMoney == null || goldMoney == 0){
				goldMoney = 0
				for(let i in (prepare.ReelResult)){ 
					let j = prepare.ReelResult[i] 

					let symbol = j.Symbol
					if(symbol.SymbolName.match("g") != null){
						let gValue = gameData.GetGoldBallRate(symbol.SymbolName)	
						goldMoney = goldMoney + gValue
					}
				}
				gameData.SetFreeEachCountMoney(goldMoney)
			}
			goldMoney = goldMoney
		// 設定金幣
			Panel.SetGoldMoney(goldMoney)
		// 更新綠幣
			Panel.UpdateGreenMoney()
		// 更新JP
			this.UpdateJP()
		// 關閉JP結算
			JP.Result.SetActive(false)
			
		// 設定輪軸結果
			uislot.SetReelResult(prepare.ReelResult)
		// 設定輪軸排列帶
			uislot.SetReelSetting(prepare.ReelSetting, false)
		// Lightning顏色不是g的都壓黑
			uislot.LightningColor()
		// 鎖輪
			uislot.LockReelAll(prepare.LockSymbols)
			
		// 更新設定G錢
			this.UpdateLightningGMoney()
			
		// 等待發送LightningSpin
			doTween.IntervalCallback(spinDelayTime, function(){			
				Panel.SetStartSpin()
			})
		}
	},

// 關閉介面
	Hide(score, closeCallback,openCallback){
		if(this.rootRect.active == false){
			if(openCallback != null){
				openCallback()
			}
			return
		}
	},

// 回合開始
	SetGameStart(){	
	
	},

// 回合結束
	SetGameEnd(){
		
	},

	StartSpin(){
		uislot.SetStartSpin()
		gameModel.SendLightningGameStart()
		
		Panel.AddFreeCount(-1)
		Panel.UpdateFreeCountText()
			
		Panel.StartSpin()
	},

	StopSpin(){
		uislot.SetStopSpin(0)
		uiautoSpin.StopSpin()
		
		Panel.StopSpin()
	},

// 設定G資料
	SetGData(symbol, reel, gValue){
		
		let gData = []
		gData.symbol = symbol
		gData.reel = reel
		gData.gValue = gValue
	// 紀錄資料
		mGData[symbol.SymbolID] = gData
	},

// 更新LightningG錢
	UpdateLightningGMoney(){
		
		let prepare = gameData.LightningPrepare
		
	// 設定字典
		let pastPayGroupsDic = []
		for(let i in (prepare.PastPayGroups)){ 
			let j = prepare.PastPayGroups[i] 

			pastPayGroupsDic[j.SymbolID] = j
		}
	// 需要設定的ID
		let setIDs = [ "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8" ]
		for(let i in (prepare.ReelResult)){ 
			let j = prepare.ReelResult[i] 

			let symbol = j.Symbol
			let position = j.Position
			
			let setID = null
			for(let setIDIndex in (setIDs)){ 
				let setIDData = setIDs[setIDIndex] 

				if(symbol.SymbolName == setIDData){
					setID = symbol.SymbolName
				}
			}
			if(setID != null){
				let pastPayGroup = pastPayGroupsDic[symbol.SymbolID]				
				if(pastPayGroup == null){
					console.log("!!!!!!!!!!!!!!! 沒找到 PastPayGroup ID:", symbol.SymbolID)
					return
				}
				let lightningData = uislot.GetLightningData(position.Reel, position.Row)
				if(lightningData == null){
					console.log("!!!!!!!!!!!!!!! 沒找到 lightningData ID:", symbol.SymbolID)
					return
				}
				let gValue = pastPayGroup.WinMoney
				lightningData.gSet = true
				lightningData.Show(symbol.SymbolName, gValue)
				this.SetGData(symbol, position.Reel, gValue)
			}
		}
	},

	SpinEnd(receiveMsg, callback){
	
		Panel.SpinEnd()
	 //console.log("AAA SpinEnd")		
		let self = this
		let delayTime = 0

		let reelResult = receiveMsg.ReelResult
		let show = []
		show[1] = {}
		show[1].Name = "g7"
		show[1].targetIDs = [ "g1", "g2", "g3", "g4", "g5", "g6" ]
		show[2] = {}
		show[2].Name = "g8"
		show[2].targetIDs = [ "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8" ]
		
		for(let showIndex in (show)){ 
			let showData = show[showIndex] 

			
			for(let i in (reelResult)){ 
				let j = reelResult[i] 

				
				let symbolID = j.Symbol.SymbolID
				let symbolName = j.Symbol.SymbolName
				let position = j.Position
				
				if(symbolName == showData.Name){
					
				// console.log("AAA 發現"..showData.Name)
				// 鎖輪
					uislot.LockReel(position.Reel, position.Row)
				// 取得Lightning資料
					let lightningData = uislot.GetLightningData(position.Reel, position.Row)
					
					if(lightningData != null){
						
						if(lightningData.gSet == false){
						// console.log("AAA lightningData : ", symbolName)
							
							lightningData.gSet = true
							lightningData.gValue = 0
							lightningData.valueArr = []
							lightningData.valueArrIndex = 0
							
							let soundCount = 0
							for(let findIndex in (showData.targetIDs)){ 
								let findDat = showData.targetIDs[findIndex] 

								
								for(let k in (reelResult)){ 
									let m = reelResult[k] 

								
								// 不能是當前的圖騰
									if(j != m){
										
										let symbolID2 = m.Symbol.SymbolID
										let symbolName2 = m.Symbol.SymbolName
										let position2 = m.Position
										
										if(symbolName2 == findDat){
											
										// 取得Lightning資料
											let lightningData2 = uislot.GetLightningData(position2.Reel, position2.Row)
											
											if(lightningData2 != null){
													
												if(lightningData2.gSet == true){
												
												// 計算總和
													lightningData.gValue = lightningData.gValue + lightningData2.gValue
													
												// 存起來
													lightningData.valueArr.push(lightningData.gValue)
													
													let t = 0.5
													delayTime = delayTime + t
													GameG.NewDelayOnce(function(){
														soundCount = soundCount + 1
														let value = soundCount
														if(value > 14){value = 14}
														let soundID = value.toString()
														if(soundID.length < 2){
															soundID = "0" + soundID
														}
														
														if(lightningData.gID == "g7"){
															GameG.PlayGameSound("se_ltnflyycoin"+soundID)
														} 
														else if(lightningData.gID == "g8"){

															GameG.PlayGameSound("se_ltnflygcoin"+soundID)
														}
														
														let startPos = GameG.LocalConvertWorldPointAR(lightningData2.g8.root)
														let endPos = GameG.LocalConvertWorldPointAR(lightningData.g8.root)
														CoinRing.Play(startPos, endPos, t, function(){
															
														// 表演
															let value = lightningData.valueArr[lightningData.valueArrIndex]
															lightningData.valueArrIndex = lightningData.valueArrIndex + 1
															
														// console.log("更新 : ", value)
															lightningData.Show(showData.Name, value)
															lightningData.PlayTally()
															self.SetGData(j.Symbol, position.Reel, value)
														})
													}, delayTime)
												}
											}
										}
									}
								}
							}
						// console.log("總和 : ", lightningData.gValue)
						}
					}
				}
			}
		}
	// 增加Spin次數
		let addSpinData = []
		for(let i in (reelResult)){ 
			let j = reelResult[i] 

			let symbol = j.Symbol
			let position = j.Position
			if(symbol.SymbolName.match("b") != null){
				let data = uislot.GetSymbol(position.Reel, symbol.SymbolID)
				addSpinData.push(data)
			}
		}
	// 表演增加Spin次數
		if(addSpinData.length > 0){
			delayTime = delayTime + 1
			GameG.NewDelayOnce(function(){
				GameG.PlayGameSound("se_addfg")
				for(let i in addSpinData){ 
					let targetPosition = GameG.LocalConvertWorldPointAR(addSpinData[i].spine.node)
					SpinTrigger.Show(targetPosition)
				}
			}, delayTime)
			delayTime = delayTime + 3
			GameG.NewDelayOnce(function(){
				Panel.UpdateFreeCountText()
			}, delayTime)
		}
		let goldAmount = 0
		for(let i in (reelResult)){ 
			let j = reelResult[i] 

			let symbol = j.Symbol
			if(symbol.SymbolName.match("g") != null){
				goldAmount = goldAmount + 1
			}
		}
		if(Panel.goldAmount != goldAmount){
			delayTime = delayTime + 1
			GameG.NewDelayOnce(function(){		
				// 更新G數量
				Panel.UpdateTextGoldAmount(reelResult)
			}, delayTime)
		}
		
		let completeFunc = function(){				
		// 還有次數
			if(Panel.freeCount > 0){
			// 鎖輪
				uislot.LockReelAll(gameData.LightningPrepare.LockSymbols)
			// 更新綠幣
				Panel.UpdateGreenMoney()
				Panel.SetStartSpin()
			} 
			else{
			// console.log("Lightning End")
				self.LightningEnd(receiveMsg, callback)			
			}
		// 送給Server更新JPPool
			gameModel.SendJackpotPool()
		}
	// 更新Server給的次數
		Panel.SetFreeCount(receiveMsg.Count)
				
	// 有中JP
		if(receiveMsg.JackpotMoney != null && receiveMsg.JackpotMoney > 0){
			delayTime = delayTime + 1
			GameG.NewDelayOnce(function(){
				let jpMoney = GameG.FormatNum(receiveMsg.JackpotMoney)
				JP.ShowResult(jpMoney)
				GameG.PlayGameSound("jp_grand")
			}, delayTime)
			delayTime = delayTime + 6
			GameG.NewDelayOnce(function(){
				JP.Result.SetActive(false)
			}, delayTime)
			delayTime = delayTime + 0.5
			GameG.NewDelayOnce(function(){
				gameLayer.FreeShowBigWin(receiveMsg.JackpotMoney, completeFunc)
			}, delayTime)
			return
		}
		GameG.NewDelayOnce(function(){
			// console.log("AAA FreeGame Complete : ", Panel.freeCount)
			completeFunc()
		}, delayTime)
	},

	SetGameResult(){
		Panel.SetBtnStopEnable(true)
	},

	LightningEnd(receiveMsg, callback){
		let self = this
	// 完成
		let completeFunc = function(){
			
			doTween.IntervalCallback(1, function(){
			
				uichoose.Door.Close(false)
				
				doTween.IntervalCallback(1, function(){
				
					GameG.PlayGameBGM("bgm_mg")
				// 結算關閉
					Result.SetActive(false)
				// 關閉Lightning
					self.rootRect.active =(false)
				// 解鎖輪
					uislot.UnlockReel()
				// 設定輪軸排列帶回Main
					uislot.SetReelSetting(gameData.ReelSetting, false)
				// 回復牌面
					uislot.SetReelResult(receiveMsg.ReelResult)
				// 更新圖騰的G錢由Lightning資料設定
					uislot.UpdateSymbolGMoneyByLightningData()
				// 開門
					uichoose.Door.Open()
				// 清除Lightning資料
					gameData.LightningPrepare = null
					
					if(callback != null){
						callback()
					}
				})
			})
		}
				
		let totalWinMoney = 0
		
		for(let i in (mGData)){ 
			let j = mGData[i] 
			totalWinMoney = totalWinMoney + j.gValue
		}
	// console.log("totalWinMoney : ", totalWinMoney)
	// gameLayer.FreeShowBigWin(totalWinMoney, completeFunc)
		
		doTween.IntervalCallback(1, function(){
			
			gameLayer.SetUserWinMoney(totalWinMoney)
			Result.Show(GameG.FormatNum(totalWinMoney))
			
			GameG.PlayGameSound("se_fgwin")
		})
		
		doTween.IntervalCallback(3, completeFunc)
	},

// 更新JP
	UpdateJP(){
	// JP
		let jpValue = gameData.GetJackpotPoolMoney("Grand")
		jpValue = GameG.FormatUnit(jpValue)
		JP.SetGrandText(jpValue)
	},


};

module.exports = UILightning
