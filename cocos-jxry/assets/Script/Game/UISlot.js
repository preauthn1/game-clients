var HallG = require("Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var uiReel = require("UISlotReel")
var poolPayCount = 50
var rootRect = null
var prefab = null
var rootMask = null
var poolPrefab = []
var poolReel = []
var autoSequenceKey = 0
var sequenceDict = []
var callbackStop = null
var callbackComplete = null
var callbackCarousel = null
var spinLoopTimer = null
var gameResultData = null
var reelResultData = null
var symbolClickCallback = null // 點擊符號事件
var self = null

var UISlot = {
	extends: cc.Component,

	//取得Sequence
	GetSequence(key)
	{
	    if(key == null)
		{
	        key = "AutoSequenceKey_" + autoSequenceKey
	        autoSequenceKey = autoSequenceKey + 1
	    }
	    if(sequenceDict[key] == null)
		{
//----->需重新編譯程式碼        sequenceDict[key] = CS.DG.Tweening.DOTween.Sequence()
		} 
		else
		{
//----->需重新編譯程式碼        sequenceDict[key]:Kill()
//----->需重新編譯程式碼        sequenceDict[key] = CS.DG.Tweening.DOTween.Sequence()
	    }
	    return sequenceDict[key]
	},

	//刪除Sequence
	KillSequence(key)
	{
	    if(sequenceDict[key])
		{
			//----->需重新編譯程式碼        sequenceDict[key]:Kill()
	    }
	    sequenceDict[key] = null
	},

	//刪除全部Sequence
	KillTotalSequence()
	{
		for(let k in (sequenceDict))
		{ 
			let v = sequenceDict[k] 

			this.KillSequence(k)
		}
	},

	ResetTotalReel()
	{
		// for i=1, poolReel.length do
		for(let  i = 1;  i <=  poolReel.length; ++ i)
		{
			poolReel[i].ResetStart()
		}
	},

	RestartSpin()
	{
		callbackCarousel = null
		callbackStop = null
		
		this.KillTotalSequence()
	},

	onExit()
	{
		this.KillTotalSequence()
		
		// for i=1, poolReel.length do	poolReel[i].onExit() }
		for(let i = 1; i <= poolReel.length; ++ i)
		{
			poolReel[i].onExit() 
		}
		
		// for i=1, poolPrefab.length do	poolPrefab[i] = null	}
		for(let i = 1; i <= poolPrefab.length; ++i)
		{	
			poolPrefab[i] = null
		}
	},

	Init(root, rootResult)
	{
		self = this
		rootRect = root
	    prefab = cc.find("Reel", root)		
		prefab.active = (false)
		
		rootMask = root.getComponent(cc.Mask)
		
		this.ResetTotalReel()
		this.RestartSpin()
	},

	Update(dt) 
	{
        for (var i in poolReel)
		{
            poolReel[i].Update(dt)
		}
    },

	CreateClone(index, reelCount, prefabCount)
	{
		if(poolPrefab[index] != null) { return poolPrefab[index] }		
		let clone = cc.instantiate(prefab)
		if(clone == null){ return null }
		clone.parent = (prefab.parent)
		clone.position = cc.v3(0, 0, 0)
		clone.scale = 1
		clone.name = prefab.name + index
		clone.active = (true)
			
		poolPrefab[index] = clone
				
		let poolSpine = cc.find("PoolSpine", rootRect)
		poolReel[index] = new uiReel(poolPrefab[index], poolSpine)
		poolReel[index].SetSymbolClickCallback(function(isSpinning, data)
		{
			if(self.symbolClickCallback != null)
			{
				self.symbolClickCallback(isSpinning, data)
			}
		})
		
		// 輪軸間的距離
		let _space = 10
		// 輪軸的寬度
		let _width = (rootRect.width + _space) / reelCount - _space
		// 輪軸的高度
		let _height = rootRect.height / gameData.RowCounts * prefabCount
		// 輪軸的位置
		let _x = (_width + _space) * (index) 
		_x = _x - rootRect.width * 0.5 // 至左
		var _y = rootRect.height * 0.5 // 至上
		poolPrefab[index].position = cc.v2(_x,_y)
		poolPrefab[index].width = _width
		poolPrefab[index].height = _height
	},
	
	//設定輪軸清單
	SetReelSetting(list)
	{
		this.KillSequence("carousel")
		// 輪軸總數
		let reelCount = list.length
		// 單輪軸預生成符號數量
		let prefabCount = (gameData.RowCounts +2)
		
		for(let i in list)
		{
			this.CreateClone(i, reelCount, prefabCount)
			poolReel[i].SetReelSetting(list[i].Symbols, prefabCount)
		}
	},

	// 更換輪軸資訊
	ChangeReelSetting(list)
	{
		for(let i in list)
		{
			poolReel[i].ChangeReelSetting(list[i].Symbols)
		}
	},

	// 恢復盤面結果
	SetRecoverGameResult(data)
	{
		if(data == null)
		{
			return
		}
		
		for(let i in data.ReelResult)
		{
			let reelIndex = data.ReelResult[i].Position.Reel - 1
			poolReel[reelIndex].SetReelResult(data.ReelResult[i])
		}
		
		for(let i in data.BackgroundInfo.Result)
		{
			let reelIndex = data.BackgroundInfo.Result[i].Position.Reel - 1
			poolReel[reelIndex].SetBackgroundResult(data.BackgroundInfo.Result[i])
		}
	},

	// 設置點擊符號事件
	SetSymbolClickCallback(callback)
	{
		symbolClickCallback = callback
	},
	
	// 取得輪軸上符號位置
	GetSymbolListWorldPos()
	{
		let layoutWorldPos = []
		
		for(let i in poolReel)
		{
			layoutWorldPos[i] = []
			
			for(let j in gameData.RowCounts)
			{
				layoutWorldPos[i][j] = poolReel[i + 1].GetSymbolWorldPos(j)
			}
		}
		return layoutWorldPos
	},

	// 取得輪軸清單內的符號資訊
	GetListBySymbolName(reelSetting,symbolName)
	{
		let list = []	
		let tempIndex = 0
		
		for(let i in reelSetting)
		{
			if(reelSetting[i].Symbol.SymbolName == symbolName)
			{
				list[tempIndex] = reelSetting[i]
				tempIndex = tempIndex +1
			}
		}
		return list
	},

	// 確認輪軸符合符號的數量
	CheckConformCount(reelSetting, reelIndex, symbolName)
	{
		let conformCount = 0 // 符合符號的數量	
		let refreshResult = [] // 整理符合符號的清單
		
		let reelResult = this.GetListBySymbolName(reelSetting , symbolName)
		for(let i in reelResult)
		{
			let reel = reelResult[i].Position.Reel
			refreshResult[reel] = refreshResult[reel] || []
			refreshResult[reel].count = refreshResult[reel].count || 0
			refreshResult[reel].count = refreshResult[reel].count +1
		}
		
		// 計算輪軸已開獎符號符合的數量
		for(let k in (refreshResult))
		{
			let v = refreshResult[k]

			if(k <= reelIndex)
			{
				conformCount = conformCount + v.count
			}
		}		
		return conformCount
	},

	// 確認符合符號的輪軸數量
	CheckConformReel(reelSetting, reelIndex, symbolName)
	{
		let conformCount = 0 // 符合符號的數量	
		let refreshResult = [] // 整理符合符號的清單
		
		let reelResult = this.GetListBySymbolName(reelSetting , symbolName)
		
		for(let i in reelResult)
		{
			let reel = reelResult[i].Position.Reel - 1
			refreshResult[reel] = refreshResult[reel] || []
			refreshResult[reel].count = 1
		}
		
		// 計算輪軸已開獎符號符合的數量
		for(let k in (refreshResult))
		{			
			let v = refreshResult[k]

			if(k <= reelIndex)
			{
				conformCount = conformCount + v.count
			}
		}		
		return conformCount
	},

	// 顯示下個輪軸聽牌
	ShowNearWin(reelIndex)
	{
		for(let i in poolReel)
		{
			if(i == reelIndex + 1)
			{
				poolReel[i].ShowNearWin()
			} 
			else
			{
				poolReel[i].HideNearWin()
			}
		}
	},

	// 開始旋轉
	SetStartSpin()
	{	
		rootMask.enabled = true
		
		this.RestartSpin()	
		
		for(let i in poolReel)
		{
			poolReel[i].ResetStart()
			poolReel[i].StartSpin()
		}	
		
		spinLoopTimer = 0
		this.SpinLoopSequence = GameG.StartCountDown(rootRect, 0.1, function()
		{
			spinLoopTimer = spinLoopTimer + 0.1
		});
	},

	// 接收結果
	SetGameResult(data, complete)
	{
		callbackComplete = complete
		gameResultData = data
		reelResultData = []
		
		for (let i in data.ReelResult)
		{
			let reelIndex = data.ReelResult[i].Position.Reel - 1
			let rowIndex = data.ReelResult[i].Position.Row -1 
			let symbolID = data.ReelResult[i].Symbol.SymbolID
			let symbolName = data.ReelResult[i].Symbol.SymbolName
			reelResultData[reelIndex] = reelResultData[reelIndex] || []
			reelResultData[reelIndex][rowIndex] = reelResultData[reelIndex][rowIndex] || []			
			reelResultData[reelIndex][rowIndex].SymbolID = symbolID			
			reelResultData[reelIndex][rowIndex].SymbolName = symbolName
			reelResultData[reelIndex][rowIndex].Upgrade = false
		}
		
		for (let i in data.BackgroundInfo.Result)
		{
			let reelIndex = data.BackgroundInfo.Result[i].Position.Reel - 1
			let rowIndex = data.BackgroundInfo.Result[i].Position.Row - 1
			let typeName = data.BackgroundInfo.Result[i].Type
			
			if(typeName == "gold")
			{
				reelResultData[reelIndex] = reelResultData[reelIndex] || []
				reelResultData[reelIndex][rowIndex] = reelResultData[reelIndex][rowIndex] || []	
				reelResultData[reelIndex][rowIndex].Upgrade = true
			}
		}
		
		let upgradeReel = []
		if(data.BackgroundInfo.BlinkPositions != null)
		{
			for(let i in data.BackgroundInfo.BlinkPositions)
			{
				let reel = data.BackgroundInfo.BlinkPositions[i].Reel - 1
				if(reel != 1)
				{
					upgradeReel[reel] = true
				}
			}
		}
		
		// 提前預知結果
		for(let i in poolReel)
		{
			poolReel[i].PredictionResult(reelResultData[i], upgradeReel[i])
		}
		
		//不停旋轉	
		let timer = (gameData.SpinLoopTimer - spinLoopTimer)
		if(timer > 0)
		{
			let sequence = GameG.NewTween(rootRect)
			sequence.delay(timer)
			sequence.call(function()
			{
				self.SetStopSpin()
			})
			sequence.start()
		} 
		else
		{
			this.SetStopSpin()
		}
	},

	//停止旋轉
	SetStopSpin(gapTimer)
	{
		if (gameResultData == null) 
		{
			return
		}
		
		let count = 0
		
		for(let i in poolReel)
		{
			poolReel[i].ReadyMergeWild(reelResultData[i], function()
			{
				count = count + 1
				
				if(count == poolReel.length)
				{
					self.StopSpinModeData(gapTimer)
				}
			})
		}
	},

	StopSpinModeData(gapTimer)
	{		
		if (gameResultData == null)
		{
			return
		}
		
		let data = gameResultData
		let timer = gapTimer || gameData.GapTimer_Spin // 輪軸停止時間
		let reelResult = []
		
		for(let i in data.ReelResult)
		{
			let reelIndex = data.ReelResult[i].Position.Reel - 1
			let rowIndex = data.ReelResult[i].Position.Row - 1
			let symbolID = data.ReelResult[i].Symbol.SymbolID
			let symbolName = data.ReelResult[i].Symbol.SymbolName
			reelResult[reelIndex] = reelResult[reelIndex] || []
			reelResult[reelIndex][rowIndex] = reelResult[reelIndex][rowIndex] || []			
			reelResult[reelIndex][rowIndex].SymbolID = symbolID			
			reelResult[reelIndex][rowIndex].SymbolName = symbolName
		}
		
		// 確認所有輪軸是否皆在轉動
		let CheckReelIsSpinning = function()
		{
			for(let i in poolReel)
			{
				if(poolReel[i].GetIsSpinning() == true)
				{
					return true
				}
			}
			return false
		}
				
		//停止旋轉
		let delayTimer = 0
		
		for(let i in poolReel)
		{
			// 沒有停輪的輪軸才指定停輪資料
			if(poolReel[i].GetStopSymbolID() == null)
			{
				// 是否表演near win
				let isNearWin = this.CheckShowNearWin(data.ReelResult, i) 
				
				if(isNearWin == true)
				{
					timer = gameData.GapTimer_NearWin
				}
				
				delayTimer += timer
				
                GameG.NewDelayOnce(function()
				{
					let reelIndex = i
					
					poolReel[i].StopSpinModeData(reelResult[i], function()
					{
						let symbolNames = [ "s1" ]
						self.ShowSymbolAudioNew(data.ReelResult, reelIndex, symbolNames, "se_scatter0", 3)
						
						poolReel[i].ShowResult()
						
						if(isNearWin == true)
						{
							self.ShowNearWin(reelIndex)
						}
						// 全部輪軸皆沒有轉動
						if(CheckReelIsSpinning() == false)
						{
							// GameG.Print("!!! 全部輪軸皆沒有轉動")
							rootMask.enabled = false
							
							if (callbackComplete != null) 
							{
								callbackComplete()
								callbackComplete = null
							}
							self.ShowGameResultSymbolWin(data)
						}
					})
                }, delayTimer)
			}
		}
	},

	// 顯示倍數
	ShowGameResultMulti(data, callback)
	{
		let sequence = GameG.NewTween(rootRect)
		for(let i in data.ReelResult)
		{
			let reelIndex = data.ReelResult[i].Position.Reel - 1
			let symbolID = data.ReelResult[i].Symbol.SymbolID
			let multi = data.ReelResult[i].Multi
			let blink = data.ReelResult[i].Blink
			// 倍數加成，有連線狀況下
			if(multi > 1 && data.PayGroups != null && data.PayGroups.length > 0)
			{
				sequence.call(function()
				{
					if(poolReel[reelIndex].ShowMergeWild() == false)
					{
						// GameG.PlayGameSound("se_multiplier")
						poolReel[reelIndex].ShowWin(symbolID, multi)
					}
				})
				sequence.delay(0.5)
			}
		}
		sequence.call(function()
		{
			if(callback != null)
			{
				callback()
				callback = null
			}
		})
		sequence.start()
	},

	//顯示所有中獎符號
	ShowGameResultSymbolWin(data, callback)
	{
		for(let i in data.ReelResult)
		{
			let reelIndex = data.ReelResult[i].Position.Reel - 1
			let rowIndex = data.ReelResult[i].Position.Row - 1
			let symbolID = data.ReelResult[i].Symbol.SymbolID
			let symbolName = data.ReelResult[i].Symbol.SymbolName
			let multi = data.ReelResult[i].Multi
			if(data.ReelResult[i].Blink == true)
			{
				poolReel[reelIndex].ShowWin(symbolID, multi)
			}
		}
		
		let sequence = GameG.NewTween(rootRect)
		if(data.WinMoney > 0)
		{
			sequence.delay(1)
			
			if(data.WinMoney > gameData.GetBetMoney() * 150)
			{
				GameG.PlayGameSound("se_win03")
			} 
			else if(data.WinMoney > gameData.GetBetMoney() * 60)
			{

				GameG.PlayGameSound("se_win02")
			} 
			else
			{
				GameG.PlayGameSound("se_win01")
			}
		}		
		sequence.call(function()
		{
			if(callback != null)
			{
				callback()
			}
		})
		sequence.start()
	},

	// 顯示升級輪軸關門
	ShowUpgradeBackground(data, callback)
	{
		let haveChange = false
		
		if(data != null)
		{
			for(let i in data)
			{
				let reelIndex = data[i].Reel - 1
				if(poolReel[reelIndex].CheckShowUpgradeDoor() == true)
				{
					poolReel[reelIndex].ShowUpgradeBackground()			
					haveChange = true
				}
			}
		}
		
		if(haveChange == false)
		{
			if(callback != null)
			{
				callback()
			}
			return
		}
		
		GameG.NewDelayOnce(function()
		{
			if(callback != null)
			{
				callback()
			}
		}, gameData.UpgradeDoorTimer)
	},

	//依序輪播賠付線與獲得金額
	ShowGameResultCarousel(data, callback)
	{
		if(data == null)
		{
			return
		}
		// 沒有中任何連線
		if(data.PayGroups == null)
		{
			return
		}
		
		if(data.PayGroups.length == 0)
		{
			return
		}
		
		let sequence = this.GetSequence()
//----->需重新編譯程式碼	sequence:SetLoops(-1,CS.DG.Tweening.LoopType.Restart)
		
		//	for i=1, data.PayGroups.length do
		for(let i = 0; i <  data.PayGroups.length; ++ i)
		{
//----->需重新編譯程式碼		sequence.call(function(){
//----->需重新編譯程式碼			ResetTotalReel()
//----->需重新編譯程式碼			let blink = data.PayGroups[i].BlinkPositions
//----->需重新編譯程式碼			// 尋找賠付線上有中獎的符號
//----->需重新編譯程式碼for(let k in (blink)){ 
//----->需重新編譯程式碼	let v = blink[k] 
//----->需重新編譯程式碼
//----->需重新編譯程式碼for(let  index = 1;  index <= data.ReelResult.length; ++ index){//				for index=1,data.ReelResult.length do
//----->需重新編譯程式碼					let reelIndex = data.ReelResult[index].Position.Reel
//----->需重新編譯程式碼					let rowIndex = data.ReelResult[index].Position.Row
//----->需重新編譯程式碼					let symbolID = data.ReelResult[index].Symbol.SymbolID
//----->需重新編譯程式碼					let multi = data.ReelResult[index].Multi
//----->需重新編譯程式碼					if(reelIndex == v.Reel && rowIndex == v.Row){
//----->需重新編譯程式碼						poolReel[reelIndex].ShowWin(symbolID, multi)
//----->需重新編譯程式碼					}
//----->需重新編譯程式碼				}
//----->需重新編譯程式碼			}
//----->需重新編譯程式碼			if(callback != null){
//----->需重新編譯程式碼				callback(data.PayGroups[i].WinMoney, payLineID)
//----->需重新編譯程式碼			}
//----->需重新編譯程式碼		})
//----->需重新編譯程式碼		sequence:AppendInterval(1)
		}
	},

	// 顯示進入選擇遊戲前符合的符號
	ShowSelectGameEnter(callback)
	{
		let sequence = this.GetSequence()
		if(gameData.FreeMode != null && gameResultData != null)
		{
			this.ResetTotalReel()
			
			let data = gameResultData
			// for index=1,data.ReelResult.length do
			for(let index = 0; index < data.ReelResult.length; ++ index)
			{
				let reelIndex = data.ReelResult[index].Position.Reel
				let symbolID = data.ReelResult[index].Symbol.SymbolID
				let symbolName = data.ReelResult[index].Symbol.SymbolName
				let multi = data.ReelResult[index].Multi
				if(symbolName == "s1")
				{
					poolReel[reelIndex].ShowWin(symbolID, multi)
				}
			}
			
			GameG.PlayGameSound("se_fstrigger")
//----->需重新編譯程式碼		sequence:AppendInterval(2.518)
//----->需重新編譯程式碼		sequence.call(function(){
//----->需重新編譯程式碼			GameG.PlayGameSound("se_cutscenes")
//----->需重新編譯程式碼		})
//----->需重新編譯程式碼		sequence:AppendInterval(4.591)
		}
	
//----->需重新編譯程式碼	sequence.call(function(){
//----->需重新編譯程式碼		if(callback != null){
//----->需重新編譯程式碼			callback()
//----->需重新編譯程式碼		}
//----->需重新編譯程式碼	})
	},

	////////////////////////////////////////////////////////////////////////////////
	// 判斷有沒有進入near win
	CheckShowNearWin(reelSetting, reelIndex)
	{
		
		// FreeGame 不聽牌
		if(gameData.FreeGame != null)
		{
			return false
		}
		
		// 符合符號的數量
		let conformCount = 0
		let names = ["s1"]
		for(let i in (names))
		{
			let j = names[i]

			conformCount = conformCount + this.CheckConformReel(reelSetting, reelIndex, j)
		}
		
		// 符合數量
		if(conformCount >= 2)
		{
			return true
		}
		
		return false
	},

	////////////////////////////////////////////////////////////////////////////////
	// 播放指定符號音效
	ShowSymbolAudio(reelSetting, reelIndex, symbolName)
	{
		// 上個輪軸的數量
		let lastCount = this.CheckConformCount(reelSetting, reelIndex -1, symbolName)
		// 符合符號的數量
		let conformCount = this.CheckConformCount(reelSetting, reelIndex, symbolName)
			
		// 若數量符合則播放音效
		if(3 >= conformCount && conformCount > lastCount)
		{
			GameG.PlayGameSound("se_bonus0" + conformCount)
		}
	},

	// 播放指定符號音效
	ShowSymbolAudioNew(reelSetting, reelIndex, symbolNames, soundName, soundLength)
	{
		// 上個輪軸的數量
		let lastCount = 0
		// 符合符號的數量
		let conformCount = 0
		for(let i in (symbolNames))
		{
			let j = symbolNames[i] 

			lastCount = lastCount + this.CheckConformCount(reelSetting, reelIndex -1, j)
			conformCount = conformCount + this.CheckConformCount(reelSetting, reelIndex, j)
		}
		// 若數量符合則播放音效
		if(conformCount > lastCount)
		{
			if(conformCount > soundLength) { conformCount = soundLength }
			GameG.PlayGameSound(soundName+conformCount)
		}
	},
};

module.exports = UISlot
