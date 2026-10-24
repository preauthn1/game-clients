var GameG = require("GameGlobal");
var gameData = require("GameData");

/** 用途: 輪軸 */
function UISlotReel(root, reelIndex){
	let self = this
	let rootRect = root
	let rootPoolSymbol = cc.find("PoolSymbol",root) 
	let prefabSymbol = cc.find("PoolSymbol/Symbol",root)
	prefabSymbol.active = false
	let poolSpine = cc.find("Canvas/GameLayer/UISlot/PoolSpine").getComponent("ObjectPool")
	let poolParticle = cc.find("Canvas/GameLayer/UISlot/PoolParticle").getComponent("ObjectPool")
	let rootParticle = cc.find("Canvas/GameLayer/RootSlotParticle")
	let rootNearWin = null
	let mask = root.getComponent(cc.Mask)
	
	let poolStore = []
	let poolSymbol = []
	let rowCount = 0
	let symbolHeight = 0
	let sequenceSpin = null
	let inSpinLoop = false
	let refreshIndex = 0
	let refreshCount = 0
	let resultData = null
	let callbackStop = null
	let callbackSymbol = null
	let spinReelSetting = null // 輪軸滾動符號表
	let lockSymbols = []
	let gameModeIndex = null

	let  CreateCloneSymbol = function(index){
		if(poolSymbol[index] != null){			
			poolSymbol[index].root.active = true
			return;
		}
		
		let clone = GameG.CreateClone(prefabSymbol);
		clone.name = prefabSymbol.name + index;
		clone.width = rootRect.width;
		clone.height = rootRect.height / rowCount;

		poolSymbol[index] = {}
		poolSymbol[index].root = clone;
		poolSymbol[index].rootSpine = cc.find("RootSpine", clone)
		poolSymbol[index].txtSpineName = cc.find("RootSpine", clone).getComponent(cc.Label);
		poolSymbol[index].txtSymbolName = cc.find("SymbolName", clone).getComponent(cc.Label);
		poolSymbol[index].txtSymbolName.string = index;
		poolSymbol[index].txtSymbolName.node.active = gameData.ShowReelSymbolDetail
		poolSymbol[index].txtValue = cc.find("TextValue", clone).getComponent(cc.Label);
		poolSymbol[index].txtValue.node.active = false
		poolSymbol[index].rootMajor = cc.find("ImageMajor", clone);
		poolSymbol[index].rootMajor.active = false
		poolSymbol[index].rootMinor = cc.find("ImageMinor", clone);
		poolSymbol[index].rootMinor.active = false
		poolSymbol[index].rootMini = cc.find("ImageMini", clone);
		poolSymbol[index].rootMini.active = false
		poolSymbol[index].txtValue.node.active = false
		poolSymbol[index].symbolId = null;
		poolSymbol[index].symbolName = null;
		poolSymbol[index].spine = null;
		poolSymbol[index].resultRow = null;

		poolSymbol[index].root.on(cc.Node.EventType.TOUCH_START,  function(){
            GameG.PlayGameSound("se_click")
            if(callbackSymbol != null){
                callbackSymbol(poolSymbol[index].symbolName)
            }
		}, this);
		// 將符號資料存起來，方便輪軸數量更換時異動
		poolStore[index] = poolSymbol[index]
	}	
	/** 結果資料取得索引值 */
	let GetIndexByResultRow = function(rowIndex){
		for(let i in poolSymbol){
			if(poolSymbol[i].resultRow == rowIndex){
				return i
			}
		}
		return null
	}
	/** 盤面上位置取得索引值 */
	let GetIndexByRow = function(row){
		let index = refreshIndex + row;
        if(index >= poolSymbol.length){
            index = index - poolSymbol.length;
        }
		return index
	}
	/** 刷新符號位置 */
	let RefreshPosition = function(callback){
		let refreshIndexArray = []
		for(let i = poolSymbol.length -1; i >= 0; --i){
			refreshIndexArray.push(GetIndexByRow(i));
		}
		
		for(let i = 0; i < poolSymbol.length; ++i){
			let index = refreshIndexArray[i]
            let border = Math.round(rootRect.position.y - rootRect.height * 0.5 - symbolHeight);
			let symbolTop = Math.round(poolSymbol[index].root.position.y + rootPoolSymbol.position.y + symbolHeight * 0.5);
			if(poolSymbol[index].resultRow != null){
				return
			}
			// 超出框線的放到第一個
			let outBack = gameData.OutBackDistance; 
			if(symbolTop + outBack <= border){
				refreshIndex = index;
				refreshCount = refreshCount +1;
				poolSymbol[index].root.position = cc.v2(0, refreshCount * symbolHeight);

				if(callback != null){
					callback(index)
				}
			}
		}
	}

	let ChangeAnimationName = function(data, animName){
		// 因為時間點的關係，遊戲模式用指定進來的值，不去gameData抓取
		if(gameModeIndex == gameData.EnumGameType.LightningGame){
			// 除了goldball之外的都要更換成灰階
			if(data.symbolName.indexOf("g") < 0){
				if(animName == "spin"){
					animName = "l_spin"
				}
				if(animName == "stop"){
					animName = "l_stop"
				}
				if(animName == "idle"){
					animName = "l_stop"
				}
			}
			// 被鎖住的goldball都讓他不要動
			else if(lockSymbols[data.resultRow] != null){
				animName = "stop"
			}
		}
		return animName
	}

	/** 播放符號指定動畫 */
	let SetPoolSymbolPlayAnimation = function(animName){		
		for(let i in poolSymbol){
			if(poolSymbol[i].spine != null){
				let tempName = ChangeAnimationName(poolSymbol[i], animName)
				poolSymbol[i].spine.playAnimation(tempName)
			}
		}
	}
	/** 更換符號動畫 */
	let SetSpine = function(index, symbolName){
		symbolName = gameData.ChangeSymbolName(symbolName)
		let clone = poolSpine.get(symbolName, poolSymbol[index].rootSpine)
		if(clone != null){			
			poolSymbol[index].spine = clone.getComponent(dragonBones.ArmatureDisplay)
			let animName = ChangeAnimationName(poolSymbol[index], "idle")
			poolSymbol[index].spine.playAnimation(animName)
		}
	}
	/** 更換金球資料 */
	let SetGoldBallData = function(index, symbolName){
		poolSymbol[index].txtValue.node.active = false
		poolSymbol[index].rootMajor.active = false
		poolSymbol[index].rootMinor.active = false
		poolSymbol[index].rootMini.active = false
		let goldBall = gameData.GetGoldBallData(symbolName)
		if(goldBall == null){
			return
		}
		if(goldBall.Type == "multiple_rate"){
			poolSymbol[index].txtValue.node.active = true
			poolSymbol[index].txtValue.string = GameG.FormatNum(goldBall.Value * gameData.GetBetRate())
		}
		else if(goldBall.Type == "jackpot"){
			let jackpot = gameData.GetJackpotPoolById(goldBall.Value)
			if(jackpot != null){
				poolSymbol[index].rootMajor.active = (jackpot.Name == "Major")
				poolSymbol[index].rootMinor.active = (jackpot.Name == "Minor")
				poolSymbol[index].rootMini.active = (jackpot.Name == "Mini")
			}
		}
	}
	/** 更換符號資料 */
	let SetData = function(index, symbolId, symbolName){
		// 更換金球資料
		SetGoldBallData(index, symbolName)
		// 轉換符號名稱
		symbolName = gameData.ChangeSymbolName(symbolName)
		// 回收動畫
		if(poolSymbol[index].spine != null){
			poolSpine.free(poolSymbol[index].symbolName, poolSymbol[index].spine.node)
			poolSymbol[index].spine = null
		}
		poolSymbol[index].txtSpineName.string = symbolName;
		poolSymbol[index].txtSymbolName.string = symbolId + "_" + symbolName; 
		poolSymbol[index].symbolId = symbolId;
		poolSymbol[index].symbolName = symbolName;
		// 設置動畫
		SetSpine(index, symbolName)
	}
	
	/** 遊戲模式切換 */
	this.SetGameMode = function(index){
		gameModeIndex = index
		SetPoolSymbolPlayAnimation("idle")
	}
	/** 設定輪軸資料 */
	this.SetReelSetting = function(data){
		rowCount = gameData.RowCounts;
		symbolHeight = rootRect.height / rowCount;
		spinReelSetting = data

		for(let i = 0; i < rowCount +2; ++i){
			CreateCloneSymbol(i);

			let index = GameG.MathRandom(0, data.length)
			let symbolName = data[index].SymbolName
			SetData(i, null, symbolName)
		}
		this.ResetSpin()
	}
	/** 設定當前旋轉輪軸的符號 */
	this.SetSpinReelSetting = function(data){
		spinReelSetting = data
		for(let i in poolSymbol){
			let index = GameG.MathRandom(0, data.length)
			let symbolName = data[index].SymbolName
			SetData(i, null, symbolName)
		}
	}
	/** 設定輪軸的行數 */
	this.SetRowCount = function(count){
		rowCount = count
		rootRect.height = gameData.slotSymbolHeight * count
		symbolHeight = rootRect.height / rowCount;
		refreshIndex = 0
		mask.enabled = true
		
		poolSymbol = []
		for(let i in poolStore){
			poolStore[i].root.active = false
		}
		for(let i = 0; i < rowCount +2; ++i){
			poolSymbol[i] = poolStore[i]
			CreateCloneSymbol(i);

			let index = GameG.MathRandom(0, spinReelSetting.length)
			let symbolName = spinReelSetting[index].SymbolName
			SetData(i, null, symbolName)
		}
		this.ResetSpin()
	}
	/** 紀錄盤面位置 */
	this.SetRecordSymbolPosition = function(){
		for(let rowIndex = 1; rowIndex <= rowCount; ++rowIndex){
			let index = GetIndexByRow(rowIndex)
			if(index != null){
				let position = GameG.GetWorldPosition(poolSymbol[index].root)
				gameData.SetSlotSymbolWorldPosition(reelIndex, rowIndex, position)
			}			
		}
	}
	/** 直接指定輪軸結果，不表演 */
	this.SetReelResult = function(data){		
		let rowIndex = data.Position.Row
		let symbolId = data.Symbol.SymbolID
		let symbolName = data.Symbol.SymbolName
		let index = GetIndexByRow(rowIndex)
		SetData(index, symbolId, symbolName)
	}
	/** 重置旋轉 */
	this.ResetSpin = function(){
		resultData = null;
		callbackStop = null;
		refreshCount = 0;
		let y = symbolHeight * rowCount * 0.5 + symbolHeight * 0.5
		rootPoolSymbol.position = cc.v2(0, y);
				
		for(let i = 0; i < poolSymbol.length; ++i){
			let index = GetIndexByRow(i);
			poolSymbol[index].root.active = true
			poolSymbol[index].root.position = cc.v2(0, i * -symbolHeight);
			poolSymbol[index].resultRow = null;
		}
		// 紀錄符號的位置
		this.SetRecordSymbolPosition()
		// 紀錄已鎖定的符號
		lockSymbols = []
		for(let rowIndex = 1; rowIndex <= rowCount; ++rowIndex){
			lockSymbols[rowIndex] = gameData.GetLightningLockSymbols(reelIndex, rowIndex)
		}
	}
	/** 開始旋轉 */
	this.StartSpin = function (callback) {	
		this.ResetSpin();
		mask.enabled = true
		let x = rootPoolSymbol.position.x;
		let y = rootPoolSymbol.position.y  + gameData.OutBackDistance;
		sequenceSpin = GameG.NewTween(rootPoolSymbol)
			.to(0.2, {position: cc.v2(x, y)})
			.call(function(){
				SetPoolSymbolPlayAnimation("spin")
				sequenceSpin = null;
				inSpinLoop = true;
				if(callback != null){
					callback();
				}			
			})
			.start()
	}
	/** 設定輪軸停止的資料 */
	this.SetStopSpin = function(data, callback){
		resultData = data;
		callbackStop = callback
	}
	/** 停止旋轉 */
	let StopSpin = function(){
		self.HideNearWin()
		GameG.PlayGameSound("se_normalstop")		
		let x = rootPoolSymbol.position.x;
		let y = symbolHeight * rowCount * 0.5 - symbolHeight * 0.5;
		y -= poolSymbol[GetIndexByResultRow(1)].root.position.y
		sequenceSpin = GameG.NewTween(rootPoolSymbol)
			.to(0.2, {position: cc.v2(x, y)})
			.call(function(){
				SetPoolSymbolPlayAnimation("idle")
				sequenceSpin = null;
				inSpinLoop = false;
				mask.enabled = false
				// 紀錄符號的位置
				self.SetRecordSymbolPosition()
				// 只顯示結果符號
				self.ShowResultRow()
				if(callbackStop != null){
					callbackStop();
				}
			})
			.start()
	}

	this.Update = function(dt){
		if(inSpinLoop == true){
			if(sequenceSpin == null){
				let _x = rootPoolSymbol.position.x;
				let _y = rootPoolSymbol.position.y;
				let _timer = dt * gameData.SpinMoveSpeed;
				let moveDistance = gameData.SpinMoveDistance;
				_y = _y + moveDistance * -1 * _timer;
				rootPoolSymbol.position = cc.v2(_x, _y);

				let stopIndex = GetIndexByResultRow(1)
				if(poolSymbol[stopIndex] != null){
					let border = Math.round(rootRect.position.y + rootRect.height * 0.5);
					let symbolTop = Math.round(poolSymbol[stopIndex].root.position.y + rootPoolSymbol.position.y + symbolHeight * 0.5);
					let outBack = gameData.OutBackDistance; 
					if(symbolTop + outBack <= border){
						StopSpin();
					}
				}
			}

			RefreshPosition(function(index){
				// 更換結果符號
				if(resultData != null && resultData.length > 0){
					let data = resultData.pop();
					let rowIndex = data.Position.Row;
					let symbolId = data.Symbol.SymbolID;
					let symbolName = data.Symbol.SymbolName;
					// 旋轉中，已鎖定的符號，替換成其他符號
					if(lockSymbols[rowIndex] != null){
						let randomIndex = GameG.MathRandom(0, spinReelSetting.length)
						symbolName = spinReelSetting[randomIndex].SymbolName
					}
					SetData(index, symbolId, symbolName);
					poolSymbol[index].resultRow = rowIndex;
				}
				// 隨機更換符號
				else{
					let randomIndex = GameG.MathRandom(0, spinReelSetting.length)
					let symbolName = spinReelSetting[randomIndex].SymbolName
					SetData(index, null, symbolName)
				}
				// 切換成旋轉動畫
				if(poolSymbol[index].spine != null){
                    let animName = ChangeAnimationName(poolSymbol[index], "spin")
					poolSymbol[index].spine.playAnimation(animName)
				}
			})
		}
	}
	//////////////////////////////////////////////////////////////////////////////////////	
	/** 指定點擊符號事件 */
	this.SetBtnSymbolCallback = function(callback){
		callbackSymbol = callback
	}
	//////////////////////////////////////////////////////////////////////////////////////	
	/** 顯示有結果的符號 */
	this.ShowResultRow = function(){
		for(let i in poolSymbol){
			poolSymbol[i].root.active = (poolSymbol[i].resultRow != null)
		}
	}
	//////////////////////////////////////////////////////////////////////////////////////
	/** 播放near win動畫 */
	this.ShowNearWin = function(){
		rootNearWin = poolParticle.get("NearWin", rootParticle)
		// 指定座標位置
		rootNearWin.position = GameG.GetWorldPosition(rootRect)
		// 播放動畫
		let anim = rootNearWin.getComponent("MotionEffectControl")
		anim.play("nw")
		// 播放音效
		GameG.PlayGameSound("se_nearwin")
	}	
	/** 關閉near win動畫 */
	this.HideNearWin = function(){
		if(rootNearWin != null){
			poolParticle.free("NearWin", rootNearWin)
			rootNearWin.active = false
		}
	}

	//////////////////////////////////////////////////////////////////////////////////////
	/** 播放符號中獎動畫 */
	this.ShowSymbolWin = function(rowIndex){
		let index = GetIndexByResultRow(rowIndex)
		if(poolSymbol[index] != null && poolSymbol[index].spine != null){
			poolSymbol[index].spine.playAnimation("win")
		}
	}
	/** 播放符號觸發動畫 */
	this.ShowSymbolTrigger = function(rowIndex){
		let index = GetIndexByResultRow(rowIndex)
		if(poolSymbol[index] != null && poolSymbol[index].spine != null){
			poolSymbol[index].spine.playAnimation("trigger")
			poolSymbol[index].spine.addAnimation("hold")
		}
	}
	//////////////////////////////////////////////////////////////////////////////////////
	/** 播放符號專屬特效 */
	this.ShowSymbolParticle = function(symbolName){
		for(let i in poolSymbol){
			if(poolSymbol[i].resultRow == null){
				continue;
			}
			if(poolSymbol[i].symbolName != symbolName){
				continue;
			}
			let clone = poolParticle.get(symbolName, rootParticle)
			if(clone != null){
				// 指定座標位置
				clone.position = GameG.GetWorldPosition(poolSymbol[i].root)
				// 播放動畫
				let anim = clone.getComponent("MotionEffectControl")
				anim.play("nearwin_fire")
				// 回收
				GameG.ScheduleOnce(function(){
					poolParticle.free(symbolName, clone)
				})
			}
		}
	}
};

module.exports = UISlotReel