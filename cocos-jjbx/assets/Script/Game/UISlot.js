var HallG = require("Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var uiReel = require("UISlotReel")
var uifreeSpin = require("UIFreeSpin")
var uilightning = require("UILightning")
var poolPayCount = 50
var rootRect
var prefab
var poolPrefab = []
var poolReel = []
var sequenceDict = []
var callbackStop = null
var callbackComplete = null
var spinLoopTimer = null
var gameResultData = null
var symbolClickCallback = null // 點擊符號事件
var soundPool = []

/** 用途: 盤面 */
var UISlot = {
	extends: cc.Component,

	ResetTotalReel(){
		for(let i in poolReel){
			poolReel[i].ResetStart();
		}
	},

	RestartSpin(){
		callbackStop = null
	},

	onExit(){		
		poolPrefab = []
		poolReel = []
		sequenceDict = []
		callbackStop = null
		callbackComplete = null
		spinLoopTimer = null
		gameResultData = null
		symbolClickCallback = null // 點擊符號事件
		soundPool = []
	},
	
	Init(root){
		rootRect = root
	    prefab = cc.find("Reel",root)	
		prefab.active =(false)
		
		this.rootMask = root.getComponent(cc.Mask)
		
		this.ResetTotalReel()
		this.RestartSpin()
	},

	Update (dt) {
        for (var index in poolReel)
            poolReel[index].Update(dt)
    },
	
	 CreateClone(index,reelCount,prefabCount){
		if(poolPrefab[index] != null) { return poolPrefab[index] }
		let clone = cc.instantiate(prefab)
		if(clone == null){ return null }
		clone.parent =(prefab.parent)
		clone.position = cc.v3(0, 0, 0)
		clone.scale = 1
		clone.name = prefab.name + index
		clone.active =(true)
			
		poolPrefab[index] = clone
				
		let poolSpine = cc.find("PoolSpine",rootRect)
		poolReel[index] = new uiReel(poolPrefab[index], poolSpine)
		poolReel[index].SetSymbolClickCallback(function(isSpinning,data){
			if(symbolClickCallback != null){
				symbolClickCallback(isSpinning,data)
			}
		})
		
	// 輪軸間的距離
		let _space = 12
	// 輪軸的寬度
		let _width = (rootRect.width + _space) / reelCount - _space
	// 輪軸的高度
		let _height = rootRect.height / gameData.RowCounts * prefabCount
	// 輪軸的位置
		let _x = (_width + _space) * (index -1) 
		_x = _x - rootRect.width * 0.5 // 至左
		let _y = rootRect.height * 0.5 // 至上
		poolPrefab[index].position = cc.v2(_x,_y)
		poolPrefab[index].width = _width
		poolPrefab[index].height = _height
	},
	
//設定輪軸清單
	SetReelSetting(list, isUpdateBoard){
		if(isUpdateBoard == null){ isUpdateBoard = true }
		if(isUpdateBoard){
			GameG.CancelNewDelay("Carousel")
		}
	// 輪軸總數
		let reelCount = list.length
	// 單輪軸預生成符號數量
		let prefabCount = (gameData.RowCounts +2)
		
		for(let  i = 0;  i < list.length; ++ i){
			let index = i +1
			this.CreateClone(index, reelCount, prefabCount)
				
			poolReel[index].SetReelSetting(list[i].Symbols, prefabCount, isUpdateBoard)
		}	
	},
	
// 設置點擊符號事件
	SetSymbolClickCallback(callback){
		symbolClickCallback = callback
	},
	
// 取得輪軸上符號位置
	GetSymbolListWorldPos(){
		let layoutWorldPos = []
		for(let  i = 1;  i <=  poolReel.length; ++ i){
			layoutWorldPos[i] = []
			for(let  j = 1;  j <=  gameData.RowCounts; ++ j){
				layoutWorldPos[i][j] = poolReel[i].GetSymbolWorldPos(j)
			}
		}
		return layoutWorldPos
	},
	
// 取得輪軸清單內的符號資訊
	GetListBySymbolName(reelSetting,symbolName){
		let list = []	
		let tempIndex = 1
		for(let i in reelSetting){
			if(reelSetting[i].Symbol.SymbolName == symbolName){
				list[tempIndex] = reelSetting[i]
				tempIndex = tempIndex +1
			}		
		}	
		
		return list
	},
	
// 確認輪軸符合符號的數量
	CheckConformCount(reelSetting, reelIndex, symbolName){
		let conformCount = 0 // 符合符號的數量	
		let refreshResult = [] // 整理符合符號的清單
		
		let reelResult = this.GetListBySymbolName(reelSetting , symbolName)
		for(let i in reelResult){
			let reel = reelResult[i].Position.Reel
			refreshResult[reel] = refreshResult[reel] || {}
			refreshResult[reel].count = refreshResult[reel].count || 0
			refreshResult[reel].count = refreshResult[reel].count +1
		}
		
	// 計算輪軸已開獎符號符合的數量
		for(let k in (refreshResult)){ 
			let v = refreshResult[k] 

			if(k <= reelIndex){
				conformCount = conformCount + v.count
			}
		}
		
		return conformCount
	},
	
	// 顯示下個輪軸聽牌
	ShowNearWin(reelIndex){
		if(poolReel[reelIndex] != null)
			poolReel[reelIndex].ShowNearWin()
	},

// 開始旋轉
	SetStartSpin(){
	
		this.rootMask.enabled = true
		
		this.RestartSpin()	
		
		for(let i in poolReel){	
			poolReel[i].ResetStart()
			poolReel[i].StartSpin()
		}	
		
		spinLoopTimer = 0
		
		GameG.CancelNewDelay("Carousel")
		GameG.NewDelay(function(){
			spinLoopTimer = spinLoopTimer +0.1
		},0.1, "SpinLoop");
	},
// 接收結果
	SetGameResult(data,cbStop,cbComplete){
		let self = this
		callbackStop = cbStop
		callbackComplete = cbComplete
		gameResultData = data
		
	//不停旋轉	
		GameG.CancelNewDelay("SpinLoop")
		GameG.NewDelayOnce(function(){
			self.SetStopSpin()
		}, gameData.SpinLoopTimer - spinLoopTimer, "SpinLoop")
	},
	
//停止旋轉
	SetStopSpin(gapTimer){
		if (gameResultData == null) {
			return
		}
				
		for(let i in poolReel){
			if(poolReel[i].sequence != null){
				poolReel[i].sequence.stop()
			}
		}
		GameG.CancelNewDelay("SpinLoop")
		
		// 從第一個輪軸開始呼叫停止
		this.SetStopSpinReel(gameResultData, 1, gapTimer)
	},

	SetStopSpinReel(data, reelIndex, gapTimer){
		let self = this
		let delayTimer = (gapTimer != null)? gapTimer : gameData.GapTimer_Spin // 輪軸停止時間
		if(this.CheckShowNearWin(data.ReelResult, reelIndex) == true){
			delayTimer = gameData.GapTimer_NearWin
		}

	//停止旋轉
		let reelResult = []
		for(let i in data.ReelResult){
			let rowIndex = data.ReelResult[i].Position.Row
			let symbolID = data.ReelResult[i].Symbol.SymbolID
			let symbolName = data.ReelResult[i].Symbol.SymbolName
			if(reelIndex == data.ReelResult[i].Position.Reel){
				reelResult[rowIndex] = {}
				reelResult[rowIndex].SymbolID = symbolID
				reelResult[rowIndex].SymbolName = symbolName
			}
		}

		poolReel[reelIndex].sequence = GameG.NewTween(rootRect)
		poolReel[reelIndex].sequence.delay(delayTimer)
		poolReel[reelIndex].sequence.call(function(){
			poolReel[reelIndex].sequence = null
			let nextReelNearWin = false
			// 下輪不會表演nearwin
			if(self.CheckShowNearWin(data.ReelResult, reelIndex +1) == false && poolReel[reelIndex +1] != null){
				nextReelNearWin = true
				// 呼叫下輪停輪
				self.SetStopSpinReel(data, reelIndex +1, gapTimer)
			}
			poolReel[reelIndex].StopSpinModeData(reelResult,function(){
					
				// FreeGame
				if(uifreeSpin.InState()){
					self.ShowSymbolAudio(data.ReelResult, reelIndex, [ "g7" ], "se_fgycoin0", 3)
				// Lightning
				} 
				else if(uilightning.InState()){
					let isPlaySound = false
					
					let pool = poolReel[reelIndex].GetPool()
					for(let poolIndex in (pool)){ 
						let poolItem = pool[poolIndex] 

						let names = [ "g7", "g8" ]
						for(let nameIndex in (names)){ 
							let name = names[nameIndex] 

							if(poolItem.symbolName == name){									
								if(poolItem.symbolID != null){
									if(soundPool[poolItem.symbolID]){
									// console.log("已經播放過了 : ", poolItem.symbolID)
									} 
									else{
									// console.log("AAA 新的圖騰")
										soundPool[poolItem.symbolID] = true
										isPlaySound = true										
									}
								}
							}
						}
					}
					if(isPlaySound){
						self.ShowSymbolAudio(data.ReelResult, reelIndex, [ "g7" ], "se_ltnycoin0", 5)
						self.ShowSymbolAudio(data.ReelResult, reelIndex, [ "g8" ], "se_ltngcoin0", 5)
					}
				// MainGame
				} 
				else{
					let symbolNames = [ "g1", "g2", "g3", "g4", "g5", "g6" ]
					self.ShowSymbolAudio(data.ReelResult, reelIndex, symbolNames, "se_red0", 5)
				}
				// 開啟下輪的聽牌效果
				if(self.CheckShowNearWin(data.ReelResult, reelIndex +1) == true){
					self.ShowNearWin(reelIndex +1)
				}
				// 全部都已結束
				if(poolReel[reelIndex +1] == null){
					self.rootMask.enabled = false
							
					if (callbackStop != null) {
						callbackStop()
						callbackStop = null
					}
					self.ShowGameResultSymbolWin(data)
				}
				else if(nextReelNearWin == false){
					// 呼叫下輪停輪
					self.SetStopSpinReel(data, reelIndex +1, gapTimer)
				}
			})
		})
		poolReel[reelIndex].sequence.start()
	},
	
//顯示所有中獎符號
	ShowGameResultSymbolWin(data){	
	
    // Lightning不播
	    if(uilightning.InState()){    
	        if(callbackComplete != null){
	            callbackComplete()
	            callbackComplete = null
	        }
	        
	        this.ResetTotalReel()
	        return
	    }
	    
		for(let i in data.ReelResult){
			let reelIndex = data.ReelResult[i].Position.Reel
			let rowIndex = data.ReelResult[i].Position.Row
			let symbolID = data.ReelResult[i].Symbol.SymbolID
			let symbolName = data.ReelResult[i].Symbol.SymbolName
			if(data.ReelResult[i].Blink == true){
				poolReel[reelIndex].ShowWin(symbolID)
			}
		}
		
		let delayTimer = 0
		if(data.WinMoney > 0){
			if(data.WinMoney > gameData.GetTotalBetMoney() * 60){
				GameG.PlayGameSound("se_win03")
			// console.log("se_win03",data.WinMoney , gameData.GetTotalBetMoney() * 60,gameData.GetTotalBetMoney())
				delayTimer = 4.284
			} 
			else if(data.WinMoney > gameData.GetTotalBetMoney() * 20){

				GameG.PlayGameSound("se_win02")
			// console.log("se_win02",data.WinMoney , gameData.GetTotalBetMoney() * 20,gameData.GetTotalBetMoney())
				delayTimer = 2.089
			} 
			else{
				GameG.PlayGameSound("se_win01")
			// console.log("se_win01",data.WinMoney , gameData.GetTotalBetMoney() ,gameData.GetTotalBetMoney())
				delayTimer = 1.044
			}
		}
		
		let self = this
		GameG.NewDelayOnce(function(){		
			if(callbackComplete != null){
				callbackComplete()
				callbackComplete = null
			}
			
			self.ResetTotalReel()
			GameG.CancelNewDelay("Carousel")
		}, delayTimer)
	},
	
//依序輪播賠付線與獲得金額
	ShowGameResultCarousel(data, callback){
	
	// 沒有資料
		if(data == null || data.PayGroups == null){
			console.log("沒有資料")
			return
		}
	// 沒有中任何連線
		if(data.PayGroups.length == 0){
			console.log("沒有中任何連線")
			return
		}
	// 沒有PayLines資料
		let payGroup = data.PayGroups[0]
		if(payGroup.PayLines == null){
			console.log("沒有PayLines資料")
			return
		} 
		
		let self = this
		let payIndex = 0
		GameG.NewDelayInterval(function(){
			self.ResetTotalReel()

			let payLineID = data.PayGroups[payIndex].PayLines.PayLineID
			let linkType = data.PayGroups[payIndex].LinkType
			// 尋找賠付線上有中獎的符號
			for(let k in (data.PayGroups[payIndex].BlinkPositions)){ 
				let v = data.PayGroups[payIndex].BlinkPositions[k] 
				for(let index in data.ReelResult){
					let reelIndex = data.ReelResult[index].Position.Reel
					let rowIndex = data.ReelResult[index].Position.Row
					let symbolID = data.ReelResult[index].Symbol.SymbolID
					if(reelIndex == v.Reel && rowIndex == v.Row){
						poolReel[reelIndex].ShowWin(symbolID)
					}
				}
			}
			if(callback != null){
				callback(data.PayGroups[payIndex].WinMoney, payLineID, linkType)
			}

			payIndex = payIndex+1
			if(payIndex >= data.PayGroups.length){
				payIndex = 0
			}
		}, gameData.GapTimer_Carousel, 0, "Carousel")
	},
	
////////////////////////////////////////////////////////////////////////////////
// 判斷有沒有進入near win
	CheckShowNearWin(reelSetting, reelIndex){
		
	// FreeGame不要聽
		if(uifreeSpin.InState()){
			return false
		}
	// Lightning不要聽
		if(uilightning.InState()){
			return false
		}
		
	// 符合符號的數量
		let conformCount = 0
		let names = [ "g1", "g2", "g3", "g4", "g5", "g6"]
		for(let i in (names)){ 
			let j = names[i] 

			conformCount = conformCount + this.CheckConformCount(reelSetting, reelIndex -1, j)
		}
		
	// 每輪要有數量以上
	// if(conformCount >= reelIndex)then
		// 符合數量
			if(conformCount >= 5){
				return true
			}
	// end
		return false
	},
	
////////////////////////////////////////////////////////////////////////////////
// 播放指定符號音效
	ShowSymbolAudio(reelSetting, reelIndex, symbolNames, soundName, soundLength){
	// 上個輪軸的數量
		let lastCount = 0
	// 符合符號的數量
		let conformCount = 0
		for(let i in (symbolNames)){ 
			let j = symbolNames[i] 

			lastCount = lastCount + this.CheckConformCount(reelSetting, reelIndex -1, j)
			conformCount = conformCount + this.CheckConformCount(reelSetting, reelIndex, j)
		}
	// 若數量符合則播放音效
		if(conformCount > lastCount){
			if(conformCount > soundLength) { conformCount = soundLength }
			GameG.PlayGameSound(soundName+conformCount)
		}
	},
	
	GetSymbol(reel, symbolID){
		return poolReel[reel].GetSymbol(symbolID)
	},
	
// 設定輪軸結果
	SetReelResult(reelResult){		
		for(let i in reelResult){
			let reelIndex = reelResult[i].Position.Reel
			let rowIndex = reelResult[i].Position.Row

			let	result = []
			result[rowIndex] = {}
			result[rowIndex].SymbolID = reelResult[i].Symbol.SymbolID
			result[rowIndex].SymbolName = reelResult[i].Symbol.SymbolName

			poolReel[reelIndex].SetReelResult(result)
		}	
	},
	
// 鎖輪
	LockReelAll(lockSymbols){
	
		for(let i in (lockSymbols)){ 
			let j = lockSymbols[i] 

			let reel = j.Position.Reel
			let row = j.Position.Row
			poolReel[reel].SetLock(row)
		}
	},
	
// 鎖輪
	LockReel(reel, row){
		poolReel[reel].SetLock(row)
	},
	
// 解鎖輪
	UnlockReel(){
		
		for(let i in (poolReel)){ 
			let j = poolReel[i] 

			j.UnLock()
		}
	},
	
// Lightning顏色不是g的都壓黑
	LightningColor(){
		
		for(let i in (poolReel)){ 
			let j = poolReel[i] 

			j.LightningColor()
		}
	},
	
// 取得Lightning資料
	GetLightningData(reel, row){
		return poolReel[reel].GetLightningData(row)
	},
	
// 更新圖騰的G錢由Lightning資料設定
	UpdateSymbolGMoneyByLightningData(){	
		for(let i in (poolReel)){ 
			let j = poolReel[i] 

			j.UpdateSymbolGMoneyByLightningData()
		}
	},
	
// 開始Lightning
	StartLightning(reelResult){	
	// 設定已播放的音效SymbolID
		soundPool = []
		for(let i in (reelResult)){ 
			let j = reelResult[i] 

			soundPool[j.Symbol.SymbolID] = true
		}
	},

};

module.exports = UISlot
