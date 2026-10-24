var G = require( "Global")
var GameG = require( "GameGlobal")
var gameData = require("GameData")
var uiReel = require("UISlotReel")
var poolPayCount = 50
var rootRect
var prefab
var poolPrefab = []
var poolReel = []
var sequenceDict = []
var callbackStop = null
var callbackComplete = null
var callbackCarousel = null
var spinLoopTimer = null
var gameResultData = null
var symbolClickCallback = null // 點擊符號事件
var autoSequenceKey = 0
var stopReelIndex = 1

/** 用途: 盤面 */
var UISlot = {
	extends: cc.Component,

	ResetTotalReel(){
		for(let i in poolReel){
			poolReel[i].ResetStart();
		}
	},

	RestartSpin(){
		callbackCarousel = null
		callbackStop = null
	},
	/** 遊戲離開(斷線重連) */
	onExit(){		
		for(let i in poolReel){	
			//poolReel[i].onExit() 
		}
		for(let i in poolPrefab){
			//poolPrefab[i] = null	
		}
		poolReel = []
		poolPrefab = []
	},
    /** 初始化 */
	Init(root,rootResult){
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
		let _space = 5
	// 輪軸的寬度
		let _width = (rootRect.width + _space) / reelCount - _space
	// 輪軸的高度
		let _height = rootRect.height / gameData.RowCounts * prefabCount
	// 輪軸的位置
		let _x = (_width + _space) * (index -1) 
		_x = _x - rootRect.width * 0.5 // 至左
		var _y = rootRect.height * 0.5 // 至上
		poolPrefab[index].position = cc.v2(_x,_y)
		poolPrefab[index].width = _width
		poolPrefab[index].height = _height
	},
	
	/** 設定輪軸資料 */
	SetReelSetting(list){
	// 輪軸總數
		let reelCount = list.length
	// 單輪軸預生成符號數量
		let prefabCount = (gameData.RowCounts +2)
		
		for(let  i = 0;  i < list.length; ++ i){
			let index = i +1
			this.CreateClone(index, reelCount, prefabCount)
			poolReel[index].SetReelSetting(list[i].Symbols, prefabCount)
		}	
	},

// 設置點擊符號事件
	SetSymbolClickCallback(callback){
		symbolClickCallback = callback
	},
	
// 取得輪軸上符號位置
	GetSymbolListWorldPos(){
		let layoutWorldPos = []
		for(let i in poolReel){
			layoutWorldPos[i] = []
			for(let j = 1; j <= gameData.RowCounts; ++ j){
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
			refreshResult[reel] = refreshResult[reel] || []
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

// 確認符合符號的輪軸數量
	CheckConformReel(reelSetting, reelIndex, symbolName){
		let conformCount = 0 // 符合符號的數量	
		let refreshResult = [] // 整理符合符號的清單
		
		let reelResult = this.GetListBySymbolName(reelSetting , symbolName)
		for(let  i in reelResult){
			let reel = reelResult[i].Position.Reel
			refreshResult[reel] = refreshResult[reel] || []
			refreshResult[reel].count = 1
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

// 播放指定符號音效
	ShowSymbolAudio(reelSetting, reelIndex, symbolName){
	// 上個輪軸的數量
		let lastCount = this.CheckConformCount(reelSetting, reelIndex -1, symbolName)
	// 符合符號的數量
		let conformCount = this.CheckConformCount(reelSetting, reelIndex, symbolName)
			
	// 若數量符合則播放音效
		if(3 >= conformCount && conformCount > lastCount){
			GameG.PlayGameSound("se_bonus0" + conformCount)
		}
	},
// 確認是否聽牌
	CheckNearWin(data,reelIndex)
	{
		let isNearWin = false // 是否表演near win
		if(isNearWin == false){
			isNearWin = this.CheckNearWinScatter(data.ReelResult, reelIndex -1)
		}
		if(isNearWin == false){
			isNearWin = this.CheckNearWinBonus(data.ReelResult, reelIndex -1)
		}
		
		return isNearWin;
	},

// 確認是否聽牌
	CheckNearWinScatter(reelSetting, reelIndex){
	// 符合符號的數量
		let conformCount = this.CheckConformReel(reelSetting, reelIndex, "w1")
		
	// 符合數量
		if(conformCount >= 4){
			return true
		}
		
		return false
	},

// 確認是否聽牌
	CheckNearWinBonus(reelSetting, reelIndex){
	// 符合符號的數量
		let conformCount = this.CheckConformCount(reelSetting, reelIndex, "b1")
		
	// 符合數量
		if(conformCount >= 2){
			return true
		}
		
		return false
	},

// 顯示下個輪軸聽牌
	ShowNearWin(reelIndex){
		if(poolReel[reelIndex] != null)
			poolReel[reelIndex].ShowNearWin()
	},
// 關閉全部輪軸的聽牌效果
	HideNearWin(){
		for(let i in poolReel){
			poolReel[i].HideNearWin()
		}
	},

// 開始旋轉
	SetStartSpin(){
	
		this.rootMask.enabled = true
		GameG.CancelNewDelay("Carousel")
		this.RestartSpin()	
			
		for(let  i in poolReel){	
			poolReel[i].ResetStart()
			poolReel[i].StartSpin()
		}	
		
		stopReelIndex = 1
		spinLoopTimer = 0
		this.SpinLoopSequence = GameG.StartCountDown(rootRect, 0.1, function(){
			spinLoopTimer = spinLoopTimer +0.1			
		});		
	},

	// 接收結果
	SetGameResult(data,cbStop,cbComplete){
		callbackStop = cbStop
		callbackComplete = cbComplete
		gameResultData = data
		
		let self = this
		GameG.RemoveCountDown(this.SpinLoopSequence)
		//不停旋轉	
		let timer = (gameData.SpinLoopTimer - spinLoopTimer)
		if(timer > 0){
			this.sequenceStop = GameG.NewTween(rootRect)
			.delay(timer)
			.call(function(){ 		
				self.sequenceStop = null				
				self.SetStopSpin()
			})
			.start()
		} 
		else{
			this.SetStopSpin()
		}
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
		if(this.sequenceStop != null){
			this.sequenceStop.stop()
		}
		// 從第一個輪軸開始呼叫停止
		this.SetStopSpinReel(gameResultData, stopReelIndex, gapTimer)
	},

	SetStopSpinReel(data, reelIndex, gapTimer){
		// 停輪表演
		let self = this
		let delayTimer = gapTimer || gameData.GapTimer_Spin // 輪軸停止時間
		if(this.CheckNearWin(data, reelIndex)){
			delayTimer = gameData.GapTimer_NearWin
		}
		
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
			if(self.CheckNearWin(data, reelIndex) == false && poolReel[reelIndex +1] != null){
				nextReelNearWin = true
				// 呼叫下輪停輪
				self.SetStopSpinReel(data, reelIndex +1, gapTimer)
			}
			poolReel[reelIndex].StopSpinModeData(reelResult,function(){
				stopReelIndex = reelIndex +1
				self.ShowSymbolAudio(data.ReelResult, reelIndex, "b1")
				// 關閉全部的聽牌效果
				self.HideNearWin()
				// 開啟下輪的聽牌效果
				if(self.CheckNearWin(data, reelIndex +1)){
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
		for(let i in data.ReelResult){
			let reelIndex = data.ReelResult[i].Position.Reel
			let rowIndex = data.ReelResult[i].Position.Row
			let symbolID = data.ReelResult[i].Symbol.SymbolID
			let symbolName = data.ReelResult[i].Symbol.SymbolName
			if(data.ReelResult[i].Blink == true){
				poolReel[reelIndex].ShowWin(symbolID)
			}
		}
		
		if(data.WinMoney > 0){
			GameG.PlayGameSound("se_win01")
		}
		
		GameG.NewDelayOnce(function(){
			if(callbackComplete != null){
				callbackComplete()
				callbackComplete = null
			}
		}, 1);
	},

//依序輪播賠付線與獲得金額
	ShowGameResultCarousel(data, callback){
	// 沒有中任何連線
		if(data.PayGroups.length == 0){
			return
		}
		
		let self = this
		let payIndex = 0
		GameG.NewDelay(function(){
			self.ResetTotalReel()
			let payLineID = data.PayGroups[payIndex].PayLines.PayLineID
			let reelPosition = data.PayGroups[payIndex].PayLines.Positions
			// 尋找賠付線上有中獎的符號
			for(let k in (reelPosition)){ 
				let v = reelPosition[k] 
				for(let  index in data.ReelResult){
					let reelIndex = data.ReelResult[index].Position.Reel
					let rowIndex = data.ReelResult[index].Position.Row
					let symbolID = data.ReelResult[index].Symbol.SymbolID
					let blink = data.ReelResult[index].Blink
					if(reelIndex == v.Reel && rowIndex == v.Row && blink == true){
						poolReel[reelIndex].ShowWin(symbolID)
					}
				}
			}
			if(callback != null){
				callback(data.PayGroups[payIndex].WinMoney, payLineID)
			}
			
			payIndex = payIndex+1
			if(payIndex >= data.PayGroups.length){
				payIndex = 0
			}
		}, 1.0, "Carousel")
	},

// 表演有中Jackpot的符號
	ShowGameResultJackpot(data, callback){
	// 沒有中任何連線
		if(data.PayGroups.length == 0){		
			if(callback != null){
				callback()
			}
			return
		}
		
		this.ResetTotalReel()
		
		for(let i in data.PayGroups){
			let payLineID = data.PayGroups[i].PayLines.PayLineID
			let reelPosition = data.PayGroups[i].PayLines.Positions
			let conformCount = 0
			let result = []
		// 尋找賠付線上有中獎的符號
			for(let k in (reelPosition)){ 
			let v = reelPosition[k] 

				for(let  index in data.ReelResult){
					let reelIndex = data.ReelResult[index].Position.Reel
					let rowIndex = data.ReelResult[index].Position.Row
					let symbolID = data.ReelResult[index].Symbol.SymbolID
					let symbolName = data.ReelResult[index].Symbol.SymbolName
					let blink = data.ReelResult[index].Blink
					if(reelIndex == v.Reel && rowIndex == v.Row && blink == true && symbolName == "w1"){
						conformCount = conformCount +1
						result = result || []
						result[reelIndex] = symbolID
					}
				}
			}
			
			if(conformCount >= 5){
				for(let reelIndex in (result)){ 
					let symbolID = result[reelIndex] 

					poolReel[reelIndex].ShowWin(symbolID)
				}
				
				if(callback != null){
					callback(data.PayGroups[i].WinMoney, payLineID)
				}
			}
		}	
	},

// 表演有中BonusGame的符號
	ShowGameResultBonusGame(data){
	// 沒有中任何連線
		if(data.PayGroups.length == 0){	
			return
		}
		
		this.ResetTotalReel()
		
		for(let index in data.ReelResult){
			let reelIndex = data.ReelResult[index].Position.Reel
			let rowIndex = data.ReelResult[index].Position.Row
			let symbolID = data.ReelResult[index].Symbol.SymbolID
			let symbolName = data.ReelResult[index].Symbol.SymbolName
			if(symbolName == "b1"){
				poolReel[reelIndex].ShowWin(symbolID)
			}
		}
	},


};

module.exports = UISlot
