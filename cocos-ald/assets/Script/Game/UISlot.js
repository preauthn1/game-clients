var G = require( "Global")
var GameG = require( "GameGlobal")
var gameData = require("GameData")
var uiReel = require("UISlotReel")
var PrefabPool = require("PrefabPool")
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
var isRespin = false

/** 用途: 盤面 */
var UISlot = {
	extends: cc.Component,

	ResetTotalReel(){
		for(let i in poolReel){
			poolReel[i].ResetStart()
		}
	},

	RestartSpin(){
		callbackCarousel = null
		callbackStop = null
	},
	/** 遊戲離開(斷線重連) */
	onExit(){	
		
		// for(let  i = 1;  i <=  poolReel.length; ++ i){	poolReel[i].onExit() }
		// for(let  i = 1;  i <=  poolPrefab.length; ++ i){	poolPrefab[i] = null	}
		poolReel = []
		poolPrefab = []
	},

	Init(root,rootResult){
		rootRect = root
	    prefab = cc.find("Reel",root)	
		prefab.active =(false)
		
		this.rootMask = root.getComponent(cc.Mask)
			
		this.ResetTotalReel()
		this.RestartSpin()
			
	// 特效
		this.effectPool = cc.find("Effect",rootRect).getComponent("ObjectPool")
		
	// 特效文字
		let effectTextRoot = cc.find("EffectText",rootRect)
		let effectNames = [ "SlotEffectText" ]
		let prefabs = []
		prefabs[0] = cc.find("SlotEffectText",effectTextRoot)
		this.effectTextPool = new PrefabPool(effectTextRoot, prefabs, effectNames)

		this.effectTextPool = cc.find("EffectText",rootRect).getComponent("ObjectPool")
		
	// Combo動畫
		this.comboSpine = cc.find("Combo/ComboSpine",rootRect).getComponent(sp.Skeleton)
		this.comboSpine.node.active =(false)
		this.megeComboSpine = cc.find("Combo/MegaComboSpine",rootRect).getComponent(sp.Skeleton)
		this.megeComboSpine.node.active =(false)
		this.superComboSpine = cc.find("Combo/SuperComboSpine",rootRect).getComponent(sp.Skeleton)
		this.superComboSpine.node.active =(false)
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
		let _space = 0
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

// 斷線重連直接顯示暫存結果
	SetReelResult(data){
		if(data == null){
			return
		}
		
		for(let index in data){
			let reelIndex = data[index].Position.Reel
			let rowIndex = data[index].Position.Row
			let symbolID = data[index].Symbol.SymbolID
			let symbolName = data[index].Symbol.SymbolName
			poolReel[reelIndex].SetReelResult(rowIndex,symbolID,symbolName)
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
			for(let j = 1; j <= gameData.RowCounts; ++j){
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
		
		let reelResult = GetListBySymbolName(reelSetting , symbolName)
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

// 確認符合符號的輪軸數量
	CheckConformReel(reelSetting, reelIndex, symbolName){
		let conformCount = 0 // 符合符號的數量	
		let refreshResult = [] // 整理符合符號的清單
		
		let reelResult = GetListBySymbolName(reelSetting , symbolName)
		for(let i in reelResult){
			let reel = reelResult[i].Position.Reel
			refreshResult[reel] = refreshResult[reel] || {}
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
		let lastCount = CheckConformCount(reelSetting, reelIndex -1, symbolName)
	// 符合符號的數量
		let conformCount = CheckConformCount(reelSetting, reelIndex, symbolName)
			
	// 若數量符合則播放音效
		if(3 >= conformCount && conformCount > lastCount){
			GameG.PlayGameSound("se_bonus0" + conformCount)
		}
	},

// 確認是否聽牌
	CheckNearWinScatter(reelSetting, reelIndex){
	// 符合符號的數量
		let conformCount = CheckConformReel(reelSetting, reelIndex, "w1")
		
	// 符合數量
		if(conformCount >= 4){
			return true
		}
		
		return false
	},

// 確認是否聽牌
	CheckNearWinBonus(reelSetting, reelIndex){
	// 符合符號的數量
		let conformCount = CheckConformCount(reelSetting, reelIndex, "b1")
		
	// 符合數量
		if(conformCount >= 2){
			return true
		}
		
		return false
	},

// 顯示下個輪軸聽牌
	ShowNearWin(reelIndex){
		for(let  i = 1;  i <=  poolReel.length; ++ i){
			if(i == reelIndex +1){
				poolReel[i].ShowNearWin()
			} 
			else{
				poolReel[i].HideNearWin()
			}
		}
	},

// 開始旋轉
	SetStartSpin(){
		this.effectPool.freeAll()
		this.effectTextPool.freeAll()
	
		this.rootMask.enabled = true
		
		this.RestartSpin()	
		if(gameData.ResultDetail == null){
			this.CloseExpand()
		}
		
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
		
		GameG.CancelNewDelay("SpinLoop")
	//不停旋轉	
		let timer = (gameData.SpinLoopTimer - spinLoopTimer)
		GameG.NewDelayOnce(function(){
			self.SetStopSpin()
		}, timer)
		
		this.isStopSpin = false
	},

//停止旋轉
	SetStopSpin(gapTimer){
		if (gameResultData == null) {
			return
		}
		
		if(this.isStopSpin == true){
			return
		}
		
		this.isStopSpin = true
		let self = this
		let data = gameResultData
		
		let timer = gapTimer || gameData.GapTimer_Spin // 輪軸停止時間
		
	//停止旋轉
		let reelResult = []	
		
		for(let i in data.ReelResult){
			let reelIndex = data.ReelResult[i].Position.Reel
			let rowIndex = data.ReelResult[i].Position.Row
			let symbolID = data.ReelResult[i].Symbol.SymbolID
			let symbolName = data.ReelResult[i].Symbol.SymbolName
			reelResult[reelIndex] = reelResult[reelIndex] || []
			reelResult[reelIndex][rowIndex] = reelResult[reelIndex][rowIndex] || {}
			reelResult[reelIndex][rowIndex].SymbolID = symbolID			
			reelResult[reelIndex][rowIndex].SymbolName = symbolName
		}
	
		// 確認所有輪軸是否皆在轉動
		let CheckReelIsSpinning = function(){
			for(let i in poolReel){
				if(poolReel[i].GetIsSpinning() == true){
					return true
				}
			}
			return false
		}
		
		let PoolReelComplete = function(index, isNearWin){
			
			poolReel[index].StopSpinModeData(reelResult[index],function(){				
				self.SetRecordSymbolPosition(index)			
				
				if(CheckReelIsSpinning() == false){
					self.rootMask.enabled = false
					
					if (callbackStop != null) {
						callbackStop()
						callbackStop = null
					}
				// ShowGameResultSymbolWin(data)
					self.ShowExpand(data)
				}
			})
		}
	
		let delayTime = 0
		for(let  i in poolReel){
			let isNearWin = false // 是否表演near win
	        if(isNearWin == true){
	            timer = gameData.GapTimer_NearWin
	        }
			delayTime = delayTime + timer 
		// 沒有停輪的輪軸才指定停輪資料
			if(poolReel[i].GetStopSymbolID() == null){	
				GameG.NewDelayOnce(function(){
					PoolReelComplete(i, isNearWin)
				}, delayTime)
			} 
			else{
				PoolReelComplete(i, isNearWin)
			}
		}
	},

	SetRecordSymbolPosition(reelIndex){
		for(let rowIndex = 1; rowIndex <= gameData.RowCounts; ++rowIndex){
			let pool = poolReel[reelIndex].GetPool(rowIndex)
			let targetPosition = GameG.LocalConvertWorldPointAR(pool.rootPos)
			gameData.SetSlotSymbolWorldPosition(reelIndex, rowIndex, targetPosition)
		}
	},

//顯示所有中獎符號
	ShowGameResultSymbolWin(data){
		let self = this
		for(let i in data.ReelResult){
			let reelIndex = data.ReelResult[i].Position.Reel
			let rowIndex = data.ReelResult[i].Position.Row
			let symbolID = data.ReelResult[i].Symbol.SymbolID
			let symbolName = data.ReelResult[i].Symbol.SymbolName
			if(data.ReelResult[i].Blink == true){
				poolReel[reelIndex].ShowWin(symbolID)
			}
		}	
		
		let delayTime = 0
		if(data.WinMoney > 0){
			GameG.PlayGameSound("se_win01")
			delayTime = 1
		}
		
		GameG.NewDelayOnce(function(){
			// 禁用全部文字特效
			self.effectTextPool.freeAll()
			
			let callback = callbackComplete
			callbackComplete = null
			if(callback != null){
				callback()
			}
		}, delayTime)
	},

//依序輪播賠付線與獲得金額
	ShowGameResultCarousel(data, callback){
	// 沒有中任何連線
		if(data.PayGroups.length == 0){
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
		}, 1.4, 0.1, "Carousel")
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
			let linkType = data.PayGroups[i].LinkType
			let reelPosition = data.PayGroups[i].PayLines.Positions
			let conformCount = 0
			let result = []
		// 尋找賠付線上有中獎的符號
			for(let k in (reelPosition)){ 
				let v = reelPosition[k] 

				for(let  index = 1;  index <= data.ReelResult.length; ++ index){
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
					callback(data.PayGroups[i].WinMoney, payLineID, linkType)
				}
			}
		}	
	},

// 表演有中BonusGame的符號
	ShowGameResultBonusGame(data){
	// 沒有中任何連線
		if(data.PayGroups.length == 0){		
			if(callback != null){
				callback()
			}
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

// 表演擴展
	ShowExpand(data){
		let self = this
		let checkExpand = false
		let symbolName = "w1"

		if(data.IsExpand == true) {
			for(let index in data.ExpandReel){
				let reelIndex = data.ExpandReel[index]
				if(poolReel[reelIndex].GetIsLockSpin() == false){
					checkExpand = true
					poolReel[reelIndex].Expand(symbolName, data.ExpandOrder)
				}					
			}
		}	
		
		if(checkExpand == true) {
			GameG.PlayGameSound("se_expand04")
			
			GameG.NewDelayOnce(function(){
				self.ShowGameResultSymbolWin(data)
			}, 4)
			
			if(isRespin == false) {
				isRespin = true			
				GameG.PlayGameBGM("bgm_rs")
			}
		} 
		else{
			this.ShowGameResultSymbolWin(data)
		}
	},

// 關閉擴展
	CloseExpand(callback){	
		if(isRespin == true) {
			isRespin = false
			let timer = 1.5
			for(let  i = 1;  i <=  5; ++ i){
			// 擴展結束
				poolReel[i].CloseExpand(timer)
			}
			GameG.NewDelayOnce(function(){
				if(callback != null) {
					callback()
				}
			},timer)
			GameG.PlayGameSound("se_expandcancel02")
			GameG.PlayGameBGM("bgm_mg")
		} 
		else{
			if(callback != null) {
				callback()
			}
		}
	},

// 表演圖騰特效
	ShowSymbloEffect(data, callback){
		if(data.PayGroups.length == 0){
			if(callback() != null)
				callback()
			return
		}

		// 設定沒有表演的圖騰透明度
		this.SetNoShowSymbolAlpha(data,0.5)
			
		let self = this
		let delayTime = 0.2
		let totalTime = 1.5
		for(let k in data.PayGroups){
			let winMoney = data.PayGroups[k].WinMoney
			let blinkList  = data.PayGroups[k].BlinkPositions
			let blinkCount  = data.PayGroups[k].Count
			let moveTime = totalTime / blinkCount
			
			let effectText = this.effectTextPool.get("SlotEffectText")
			effectText.parent = this.effectTextPool.node
			effectText.getComponent("TextControl").string = parseFloat(GameG.FormatNum(winMoney))			
			effectText.scale = 1
			effectText.active = false

			let effectSymbolName = null			
			for(let index in blinkList){
				let reelIndex = blinkList[index].Reel
				let rowIndex = blinkList[index].Row				
				let pool = poolReel[reelIndex].GetPool(rowIndex)
				if(effectSymbolName == null){
					effectSymbolName = pool.symbolName
				}
				let targetPosition = GameG.LocalConvertWorldPointAR(pool.rootPos)
				targetPosition = GameG.WorldConvertLocalPointAR(this.effectTextPool.node, targetPosition)
				let tweenPosition = cc.tween().to(moveTime * 1.0,{ position: targetPosition})
				let tweenAngle = cc.tween().to(moveTime * 0.5, { angle : Math.floor(Math.random() * 60) - 30})
				let tweenScale = null
				if(index == 0){
					effectText.position = targetPosition
				}
				else if(index >= blinkCount -2){
					tweenScale = cc.tween().to(moveTime * 1.0,{ scale: 0.8})
				}
				else{
					tweenScale = cc.tween().to(moveTime * 1.0,{ scale: 1.8})
				}
								
				let sequence = GameG.NewTween(effectText)
				sequence.delay(delayTime * k + index * moveTime * 0.5)
				sequence.call(function(){
					if(index == 1){
						GameG.PlayGameSound("se_normal_hit02")
						// 表演Compb
						self.ShowCombo(parseInt(k) + 1)

						effectText.active = true
					}
					self.ShowEffect(effectSymbolName, pool.rootPos)
				})
				if(index > 0){
					sequence.parallel(tweenPosition, tweenAngle, tweenScale)
					if(index == blinkCount -1){
						sequence.to(moveTime, { scale : 0})
					}
				}
				sequence.start()
			}
		}		

		let sequence = GameG.NewTween(rootRect)
		sequence.delay(delayTime * data.PayGroups.length + totalTime)
		sequence.call(function(){
			// 設定沒有表演的圖騰透明度
			self.SetNoShowSymbolAlpha(data, 1)
			if(callback() != null)
				callback()
		})
		sequence.start()
	},

// 設定沒有表演的圖騰透明度
	SetNoShowSymbolAlpha(data, alpha){	
		for(let i in data.ReelResult){
			let reelIndex = data.ReelResult[i].Position.Reel
			let rowIndex = data.ReelResult[i].Position.Row
			let symbolID = data.ReelResult[i].Symbol.SymbolID
			let symbolName = data.ReelResult[i].Symbol.SymbolName
			if(data.ReelResult[i].Blink == false){
				let pool = poolReel[reelIndex].GetPool(rowIndex)
				if(pool.spine != null) {
					pool.spine.node.opacity = alpha * 255
				}
			}
		}
	},

// 表演特效
	ShowEffect(symbolName, parent){	
		// 特效物件
		let clone = this.effectPool.get(symbolName)
		clone.active = true
		clone.parent = this.effectPool.node
		let targetPosition = GameG.LocalConvertWorldPointAR(parent)
		targetPosition = GameG.WorldConvertLocalPointAR(this.effectPool.node, targetPosition)
		clone.position = targetPosition
		clone.scale = 1

		let animationEffect = clone.getComponent("AnimationParticle")
		animationEffect.play()

		let sequence = GameG.NewTween(clone)
		sequence.delay(3)
		sequence.call(function(){
			clone.active = false
		})
		sequence.start()
	},

	ShowCombo(count){
		if(count == 2) {
			this.comboSpine.node.active =(true)
			this.comboSpine.setAnimation(0, "combo", false)
		}
		else if(count == 4) {
			this.superComboSpine.node.active =(true)
			this.superComboSpine.setAnimation(0, "super_combo", false)
		}
		else if(count == 7) {
			this.superComboSpine.node.active =(true)
			this.superComboSpine.setAnimation(0, "mega_combo", false)
		}

		let self = this
		GameG.NewDelayOnce(function(){
			self.comboSpine.node.active =(false)
			self.superComboSpine.node.active =(false)
			self.megeComboSpine.node.active =(false)
		}, 2)
	},

	PlayBGM(){
		if(isRespin == true) {
			GameG.PlayGameBGM("bgm_rs")	
		} 
		else{
			GameG.PlayGameBGM("bgm_mg")
		}
	},


};

module.exports = UISlot
