let GameG = require("GameGlobal");
let gameData = require("GameData")
let UISlotReel = require("UISlotReel");
let rootRect = null
let poolReel = [];
let spinLoopTimer = 0 //開始轉動後計時秒數
let stopReelIndex = 1
let ScheduleLoopTime = null
let ScheduleCarousel = null
let ScheduleReel = []
let reelResultData = null
let completeCallback = null
let callbackSymbol = null
let callbackStop = null
let isSpinning = false
let isStopping = false
	
/** 用途: 盤面 */
var UISlot = {
	extends: cc.Component,
	/** 遊戲離開(斷線重連) */
	onExit(){
		poolReel = [];
		spinLoopTimer = 0
		stopReelIndex = 1
		ScheduleLoopTime = null
		ScheduleCarousel = null
		ScheduleReel = []
		reelResultData = null
		completeCallback = null
		callbackSymbol = null
		callbackStop = null
		isSpinning = false
		isStopping = false
	},
    /** 初始化 */
	Init(root){
		rootRect = root;

		this.rootPoolReel = cc.find("PoolReel", root)
		this.prefabReel = cc.find("PoolReel/Reel", root)
		this.prefabReel.active = false
		this.rootPoolSpine = cc.find("PoolSpine", root)
		this.rootPoolSpine.active = false
		this.rootPoolParticle = cc.find("PoolParticle", root)
		this.rootPoolParticle.active = false		
	},

	Update(dt){
		for(let i in poolReel){
			poolReel[i].Update(dt)
		}
	},
	/** 更換層級，父物件位置(依遊戲畫面需求，切換層級用) */
	SetParentRoot(node){
		rootRect.parent = node
		rootRect.position = cc.v2(0, 0)
		for(let i in poolReel){
			poolReel[i].SetRecordSymbolPosition()
		}
	},
	/** 不更換層級，修改盤面位置(依遊戲畫面需求) */
	SetRootReelPosition(node){
		let position = GameG.GetWorldPosition(node)		
		this.rootPoolReel.position = position
		for(let i in poolReel){
			poolReel[i].SetRecordSymbolPosition()
		}
	},
	
	/** 遊戲模式切換 */
	SetGameMode(gameMode){
		for(let i in poolReel){
			poolReel[i].SetGameMode(gameMode)
		}
	},

	/** 設定輪軸資料 */
	SetReelSetting(list){
		let reelSpace = 0 // 輪軸間的距離
		let reelCount = list.length

		for(let i in list){
			let reelId = list[i].ReelID
			if(poolReel[reelId] == null){
				let clone = GameG.CreateClone(this.prefabReel)
				clone.name = this.prefabReel.name + reelId
				clone.width = (this.rootPoolReel.width + reelSpace) / reelCount - reelSpace
				clone.height = this.rootPoolReel.height
				// 指定座標位置
				let x = (clone.width + reelSpace) * (reelId -1)
				x = x + clone.width * 0.5
				x = x - this.rootPoolReel.width * 0.5 // 至左
				clone.position = cc.v2(x, 0)
				
				poolReel[reelId] = new UISlotReel(clone, reelId)
				poolReel[reelId].SetReelSetting(list[i].Symbols)
				poolReel[reelId].SetBtnSymbolCallback(function(symbolName){
					if(isSpinning == false && callbackSymbol != null){
						callbackSymbol(symbolName)
					}
					else if(isSpinning == true && callbackStop != null){
						callbackStop()
					}
				})
			}
		}	
	},
	/** 改變輪軸內的數量 */
	SetRowCount(rowNum){
		this.rootPoolReel.height = gameData.slotSymbolHeight * rowNum
		for(let i in poolReel){
			poolReel[i].SetRowCount(rowNum)
		}
	},
	/** 設置滾輪資料 */
	SetSpinReelSetting(list){
		GameG.Unschedule(ScheduleCarousel)
		for(let i in list){
			let reelId = list[i].ReelID
			poolReel[reelId].SetSpinReelSetting(list[i].Symbols)
		}
	},
	
	GetIsSpinning(){
		return isSpinning
	},

	/** 計算第1軸到指定輪軸，符合符號的符號數量 
	 * @param {number} index 輪軸索引值(1~)
	 * @param {number} conformSymbol 要比對的符號陣列 ex.["s1"]
	*/
	GetConformSymbolCount(index, conformSymbol){
		let conformCount = 0
		let data = gameData.resultData.ReelResult
		for(let i in data){
			let reelIndex = data[i].Position.Reel
			let symbolName = data[i].Symbol.SymbolName
			if(reelIndex <= index){
				if(conformSymbol.includes(symbolName) == true){
					conformCount = conformCount +1
				}
			}
		}
		return conformCount
	},

	/** 計算第1軸到指定輪軸，符合符號的輪軸數量 
	 * @param {number} index 輪軸索引值(1~)
	 * @param {number} conformSymbol 要比對的符號陣列 ex.["s1"]
	 */
	GetConformReelCount(index, conformSymbol){
		let conformReel = new Map() 
		let data = gameData.resultData.ReelResult
		for(let i in data){
			let reelIndex = data[i].Position.Reel
			let symbolName = data[i].Symbol.SymbolName
			if(reelIndex <= index){
				if(conformSymbol.includes(symbolName) == true){
					if(conformReel.has(reelIndex) == false){
						conformReel.set(reelIndex, 1)
					}
				}
			}
		}
		return conformReel.size
	},
	/** 播放音效-scatter */
	ShowAudioScatter(index){
		let conformSymbol = ["s1"]
		let conformCount = this.GetConformReelCount(index, conformSymbol)
		if(conformCount == index){
			if(conformCount > 3){
				conformCount = 3
			}
			GameG.PlayGameSound("se_scatter0" + conformCount)
		}
	},
	/** 播放音效-goldball */
	ShowAudioGoldball(index){
		let conformSymbol = []
		for(let i in gameData.GoldBallSetting){
			conformSymbol.push(gameData.GoldBallSetting[i].Symbol)
		}
		let conformCount = this.GetConformReelCount(index, conformSymbol)
		if(conformCount == index){
			if(conformCount > 3){
				conformCount = 3
			}
			GameG.PlayGameSound("se_goldball0" + conformCount)
		}
	},
	/** 播放符號特效
	 * @param {number} index 輪軸索引值(1~)
	 */
	ShowSymbolEffect(index){
		let conformSymbol = ["s1", "w1"]
		let conformCount = this.GetConformReelCount(index, conformSymbol)
		if(conformCount == index){
			if(conformCount >= 3){
				for(let i in conformSymbol){
					poolReel[index].ShowSymbolParticle(conformSymbol[i])
				}
			}
		}
	},
	/** 確認near win
	 * @param {number} index 輪軸索引值(1~)
	 */
	CheckNearWin(index){
		// lightning game 不會有
		if(gameData.GetGameModeIndex() == gameData.EnumGameType.LightningGame){
			return false
		}
		// 兩個輪軸以上有符合scatter
		let conformSymbol = ["s1"]
		let conformCount = this.GetConformReelCount(index -1, conformSymbol)		
		if(conformCount >= 2){
			return true
		}

		// 盤面上有五個以上的goldball
		conformSymbol = []
		for(let i in gameData.GoldBallSetting){
			conformSymbol.push(gameData.GoldBallSetting[i].Symbol)
		}
		conformCount = this.GetConformSymbolCount(index -1, conformSymbol)
		if(conformCount >= 5){
			return true
		}
		
		return false
	},

    /** 輪軸開始轉動 */
	SetStartSpin(){
		for(let i in poolReel){
			poolReel[i].StartSpin();
		}	
		
		isStopping = false
		isSpinning = true
		stopReelIndex = 1
		spinLoopTimer = 0
		reelResultData = null
		GameG.Unschedule(ScheduleCarousel)
		ScheduleLoopTime = GameG.Schedule(function(){
			ScheduleLoopTime = null
			spinLoopTimer = spinLoopTimer + 0.1;
		}, 0.1);
	},
    /** 設置盤面輪軸結果 */
	SetReelResult(data){
		for(let i in data){
			let reelIndex = data[i].Position.Reel
			poolReel[reelIndex].SetReelResult(data[i])
		}
	},
    /** 設置遊戲結果 */
	SetGameResult(data, callback){
		completeCallback = callback
		let self = this
		reelResultData = []
		for(let i in data.ReelResult){
			let reelIndex = data.ReelResult[i].Position.Reel
			let array = reelResultData[reelIndex] || []
			array.push(data.ReelResult[i])
			reelResultData[reelIndex] = array
		}

		GameG.Unschedule(ScheduleLoopTime)
		ScheduleLoopTime = GameG.ScheduleOnce(function(){
			ScheduleLoopTime = null
			self.SetStopSpin()
		},  gameData.SpinLoopTime - spinLoopTimer);
	},

	/** 停止旋轉 */
	SetStopSpin(intervalTime){
		if(reelResultData == null){
			return
		}
		if(isStopping == true){
			return
		}
		if(intervalTime != null){
			isStopping = true
		}		
		GameG.Unschedule(ScheduleLoopTime)
		for(let reelIndex in poolReel){
			GameG.Unschedule(ScheduleReel[reelIndex]);
		}
		
		// 從第一個輪軸開始呼叫停止
		this.SetStopSpinReel(stopReelIndex, intervalTime);
	},

	/** 停止指定輪軸 */
	SetStopSpinReel(reelIndex, intervalTime){
		let self = this;
		let checkShowNearWin = this.CheckNearWin(reelIndex);
		 // 輪軸停止時間	
		let delayTime = (intervalTime == null)? gameData.ReelSpinNormalTime : intervalTime;
		delayTime = (checkShowNearWin == true)? gameData.ReelSpinNearWinTime : delayTime;

		let data = reelResultData[reelIndex]
		ScheduleReel[reelIndex] = GameG.ScheduleOnce(function(){
			ScheduleReel[reelIndex] = null
			// 下個需要停止的輪軸
			let nextIndex = reelIndex +1;
			// 等到此輪停止才呼叫下個需要停止的輪軸
			if(checkShowNearWin == false && poolReel[nextIndex] != null){
				// 呼叫下個需要停止的輪軸
				self.SetStopSpinReel(nextIndex, intervalTime);
			}
			// 呼叫輪軸停止
			poolReel[reelIndex].SetStopSpin(data,function(){
				self.ShowAudioScatter(reelIndex)
				self.ShowAudioGoldball(reelIndex)
				stopReelIndex = nextIndex				
				// 全部都已結束
				if(poolReel[nextIndex] == null){
					isSpinning = false
					if(completeCallback != null){
						completeCallback()
					}
				}
				else{
					// 顯示下輪的near win
					if(self.CheckNearWin(nextIndex) == true){
						poolReel[nextIndex].ShowNearWin()
					}
					// 等到此輪停止才呼叫下個需要停止的輪軸
					if(checkShowNearWin == true){
						self.SetStopSpinReel(nextIndex, intervalTime);
					}
				}
			});
		}, delayTime);
	},
	
	SetBtnSymbolCallback(callback){
		callbackSymbol = callback
	},
	SetBtnStopCallback(callback){
		callbackStop = callback
	},
	//////////////////////////////////////////////////////////////////////////////////////
	/** 中獎輪播 */
	ShowResultCarousel(callback){
		let data = gameData.resultData.PayGroups
		if(data == null || data.length == 0){
			return
		}
		let index = 0
		GameG.Unschedule(ScheduleCarousel)
		ScheduleCarousel = GameG.Schedule(function(){
			for(let i in data[index].BlinkPositions){
				let reelIndex = data[index].BlinkPositions[i].Reel
				let rowIndex = data[index].BlinkPositions[i].Row
				poolReel[reelIndex].ShowSymbolWin(rowIndex)
			}
			if(callback != null){
				callback(data[index])
			}
			index = index +1
			if(index >= data.length){
				index = 0
			}
		}, gameData.IntervalCarousel, null, 0)
	},

	/** 盤面上符號有中獎表演 */
	ShowResultSymbolWin(data, symbolName){
		GameG.Unschedule(ScheduleCarousel)
		ScheduleCarousel = GameG.Schedule(function(){
			for(let i in data){
				let reelIndex = data[i].Position.Reel
				let rowIndex = data[i].Position.Row
				if(data[i].Symbol.SymbolName != symbolName){
					continue
				}
				if(data[i].Blink == true){
					poolReel[reelIndex].ShowSymbolWin(rowIndex)
				}
			}
		}, 1, null, 0)
	},

	/** 盤面上符號有中獎表演
	 *  原先使用ShowResultSymbolWin()，
		因ReelResult只要符號為S1，Blink皆為true
		故另外用PayGroups做中獎表演*/
	ShowResultPayGroup(data){
		GameG.Unschedule(ScheduleCarousel)
		ScheduleCarousel = GameG.Schedule(function(){
			for(let i in data){
				for(let index in data[i].BlinkPositions){
					let reelIndex = data[i].BlinkPositions[index].Reel
					let rowIndex = data[i].BlinkPositions[index].Row
					poolReel[reelIndex].ShowSymbolWin(rowIndex)
				}
			}
		}, 1, null, 0)
	},

	/*此款遊戲無bonus game
	// 表演有Scatter進BonusGame
	ShowResultIntoBonusGame(data){
		if(gameData.bonusGame == null){
			return
		}
		GameG.Unschedule(ScheduleCarousel)
		ScheduleCarousel = GameG.Schedule(function(){
			for(let i in data){
				let reelIndex = data[i].Position.Reel
				let rowIndex = data[i].Position.Row			
				if(data[i].Symbol.SymbolName == "s1"){
					poolReel[reelIndex].ShowSymbolWin(rowIndex)
				}
			}
		}, 1, null, 0)
	},*/

	// 表演有GoldBall進Lighting
	ShowResultIntoLightning(){
		if(gameData.lightningPrepare == null){
			return
		}
		let data = gameData.lightningPrepare.LockSymbols		
		GameG.Unschedule(ScheduleCarousel)
		for(let i in data){
			let reelIndex = data[i].Position.Reel
			let rowIndex = data[i].Position.Row	
			poolReel[reelIndex].ShowSymbolTrigger(rowIndex)
		}
	},
	
	// 表演有Scatter進Lighting
	ShowResultIntoFreeSpin(data){
		GameG.Unschedule(ScheduleCarousel)
		ScheduleCarousel = GameG.Schedule(function(){
			for(let i in data){
				for(let index in data[i].BlinkPositions){
					let reelIndex = data[i].BlinkPositions[index].Reel
					let rowIndex = data[i].BlinkPositions[index].Row
					if(data[i].Symbol.SymbolName == "s1"){
						poolReel[reelIndex].ShowSymbolWin(rowIndex)
					}
				}
			}
		}, 1, null, 0)
	},
};

module.exports = UISlot