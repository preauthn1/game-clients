var HallG = require("Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var gameLayer = require("GameLayer")
var uilightning = require("UILightning")
var utilities = require("MUtilities")
var poolCount = 10

/** 用途: 輪軸 */
function UISlotReel(root, poolSpine){
	let self = this
	let rootRect = root
	let rootParent = rootRect.parent
	let rootPoolSpine = poolSpine
	let target = []
	let pool = []
	let symbolHeight = 0 //單個符號高度
	let spinHeight = 0 //轉軸的高度
	let rectHeight = 0 //看得見的範圍高度
	let whiteColor = cc.Color(1,1,1,1)
	let blackColor = cc.Color(0,0,0,0.3)
	let sequenceSpin = null
	let stopSymbolID = null
	let stopReelResult = null //結算符號資料
	let stopReelIndex = 0
	let spinReelSetting = null //轉動符號資料
	let spinReelIndex = 0	
	let stopCallback = null
	let refreshPositionIndex
	let refreshPositionCount = 1
	let isSpinning = false //轉動中
	let symbolClickCallback = null // 點擊符號事件
	let lockData = []
	let lightningData = []
	
	let rootNearWin = cc.find("NearWin",rootRect)
	rootNearWin.active =(false)
	rootNearWin.parent = cc.find("Canvas/GameLayer/UISlotParticle")
	
	let prefab = cc.find("Symbol",rootRect)	
	prefab.active =(false)
	
// 設定Lightning預置物
	let symbolLightningPrefab = cc.find("PoolSymbolLightning/SymbolLightning",rootRect)	
	symbolLightningPrefab.active =(false)
	let lightningPrefabPool = cc.find("PoolSymbolLightning",rootRect).getComponent("ObjectPool")
	
	let  SetSprite = function(img,symbolName){
		GameG.SetImageSprite(img,"symbol_" + symbolName)
	}
	
	let  SetSpine = function(index,symbolName){
		let temp = cc.find("SkeletonGraphic (sp_"+symbolName+")", rootPoolSpine)
		if(temp != null ){
			let clone = cc.instantiate(temp)
			clone.active =(true)
			clone.parent =(pool[index].rootPos)
			clone.position = cc.v2(0, 0)
			clone.setSiblingIndex(-1)
			clone.scale = 1
			pool[index].spine = clone.getComponent(sp.Skeleton)
			pool[index].spine.setAnimation(0, "idle", false)
		}
	}
		
	let  SetData = function(index, symbolID, symbolName){	
		pool[index].root.name = symbolName
		pool[index].symbolID = symbolID
		pool[index].symbolName = symbolName
		
		pool[index].detail.txtSymbolID.string = symbolID
		pool[index].detail.txtSymbolName.string = symbolName
		
		symbolName = gameData.ChangeSymbolName(symbolName)
		pool[index].imgIcon.node.active =(symbolID == null)
		pool[index].imgBlur.node.active =(false)
		pool[index].gID = ""
		pool[index].gValue = 0
		pool[index].txtg1.string = ""
		pool[index].txtg7.string = ""
		pool[index].txtg8.string = ""
		
		if(pool[index].spine != null){
			pool[index].spine.node.destroy()
			pool[index].spine = null
		}
		
		let isScale = false
	// Lightning
		if(symbolName.match("g") != null){
		// pool[index].Lightning.SetText(GetLightningRate(symbolName))
			
			let s = symbolName.replace("g", "")
			let value = parseInt(s)
			
			if(value >= 1 && value <= 6){
				symbolName = "g1"
				pool[index].Show(symbolName, gameData.GetGoldBallRate("g"+value))
			} 
			else if (value == 7){

				isScale = true
				symbolName = "g7"
				
			// Lightning 不要先設定黃幣
				if(uilightning.InState()){
					pool[index].Show(symbolName, null)
				} 
				else{
					pool[index].Show(symbolName, gameData.GetFreeEachCountMoney())
				}
			} 
			else if (value == 8){

				isScale = true
				symbolName = "g8"				
				pool[index].Show(symbolName, null)
			} 
			else{
				console.log("!!!!!!!!!!!!!!!!!!! 沒有這個數值", value)
			}
		}
		
		if(symbolID != null){
			SetSpine(index,symbolName)
		} 
		else{
			SetSprite(pool[index].imgIcon, "n_" + symbolName)
			SetSprite(pool[index].imgBlur, "b_" + symbolName)
		}
		
	// if(pool[index].isScale == isScale)then
	// else
		// pool[index].isScale = isScale
			
			let scale = 1
			
			if(isScale == true){
				scale = scale * 0.85
			}
			
			if(pool[index].spine != null){
				pool[index].spine.node.scale = scale
			}
			pool[index].imgIcon.node.scale = scale
			pool[index].imgBlur.node.scale = scale
	// end
			
	// Lightning
		if(symbolName.match("g") != null){
			pool[index].Lightning.SetColorEnable(true)
			
			if(pool[index].spine != null){
				pool[index].spine.setAnimation(0, "idle", true)
			}
		} 
		else if(symbolName.match("b") != null){			

			pool[index].Lightning.SetColorEnable(true)
		} 
		else{
		// 是Lightning
			if(uilightning.InState()){
				pool[index].Lightning.SetColorEnable(false)
			}
		}
	}
	
	let  ResetData = function(index){
		pool[index].symbolID = null
		pool[index].detail.txtSymbolID.string = null
	}
			
	let  CreateClone = function(index){
		if(pool[index] != null) { 
			ResetData(index) 
			return null 
		}
		let clone = cc.instantiate(prefab)
		if(clone == null){ return null }
		clone.parent =(prefab.parent)
		clone.position = cc.v3(0, 0, 0)
		clone.scale = 1
		clone.name = prefab.name + index
		clone.active =(true)
		
		pool[index] = {}
		pool[index].root = clone
		pool[index].btn = clone.getComponent(cc.Button)
		pool[index].rootPos = cc.find("RootPos",clone)
		pool[index].imgIcon = cc.find("ImageIcon",clone).getComponent(cc.Sprite)
		pool[index].imgBlur = cc.find("ImageBlur",clone).getComponent(cc.Sprite)
		pool[index].gID = ""
		pool[index].gValue = 0
		pool[index].txtg1 = cc.find("Textg1",clone).getComponent("TextControl")
		pool[index].txtg7 = cc.find("Textg7",clone).getComponent("TextControl")
		pool[index].txtg8 = cc.find("Textg8",clone).getComponent("TextControl")
	// 顯示文字
		pool[index].Show = function(id, value){
			if(value == null){
				value = 0
			}
			pool[index].gID = id
			pool[index].gValue = value
			pool[index].txtg1.string = ""
			pool[index].txtg7.string = ""
			pool[index].txtg8.string = ""
			if(value > 0){
				if(id == "g1"){
					pool[index].txtg1.string = GameG.AbbreviateNumber(pool[index].gValue, true)
					utilities.AdjustTextSize(pool[index].txtg1, 5, 0.1)
				} 
				else if(id == "g7"){

					pool[index].txtg7.string = GameG.AbbreviateNumber(pool[index].gValue, true)
					utilities.AdjustTextSize(pool[index].txtg7, 6, 0.1)
				} 
				else if(id == "g8"){

					pool[index].txtg8.string = GameG.AbbreviateNumber(pool[index].gValue, true)
					utilities.AdjustTextSize(pool[index].txtg8, 6, 0.1)
				}
			}
		}
	// 隱藏文字
		pool[index].Hide = function(){
			pool[index].txtg1.string = ""
			pool[index].txtg7.string = ""
			pool[index].txtg8.string = ""
		}
	// 恢復顯示文字
		pool[index].RecoverShow = function(){
			pool[index].Show(pool[index].gID, pool[index].gValue)
		}
		pool[index].txtBet = cc.find("TextBet",clone).getComponent(cc.Label)
		pool[index].reScaleBet = pool[index].txtBet.scale
		let _width = rootRect.width
		let _y = (symbolHeight) * (index-1) * -1
		pool[index].root.position = cc.v2(0,_y)
		pool[index].root.width = _width
		pool[index].root.height = symbolHeight
		
		pool[index].detail = []
		pool[index].detail.root = cc.find("ImageDetail",clone)
		pool[index].detail.txtSymbolID = cc.find("ImageDetail/TextSymbolID",clone).getComponent(cc.Label)
		pool[index].detail.txtSymbolName = cc.find("ImageDetail/TextSymbolName",clone).getComponent(cc.Label)
		pool[index].detail.root.active =(gameData.ShowReelSymbolDetail)
		
		pool[index].btn.node.on('click',function(){
			if(symbolClickCallback != null){
				GameG.PlayGameSound("se_click")
				let data = []
				data.symbolName = pool[index].symbolName
				symbolClickCallback(isSpinning,data)
			}
		})
		
		let lightning = []
		lightning.SetColorEnable = function(isEnable){
			if(isEnable){
				let color = cc.Color.WHITE
				if(pool[index].spine != null){
					pool[index].spine.node.color = color
				}
				pool[index].imgIcon.node.color = color
				pool[index].imgBlur.node.color = color
			} 
			else{
				let color = cc.Color.GRAY
				if(pool[index].spine != null){
					pool[index].spine.node.color = color
				}
				pool[index].imgIcon.node.color = color
				pool[index].imgBlur.node.color = color
			}
		}
		
		pool[index].Lightning = lightning
		refreshPositionIndex = pool.length
	}
		
	let  GetIndexByRow = function(row){
        let index = refreshPositionIndex + row
        if(index >= pool.length){
            index = index - pool.length +1
        }
		
		return index
	}
		
// 刷新符號的位置
	let  RefreshPosition = function(callback){
		let _y = rootRect.position.y
		let SetPosition = function(i){
			if(stopSymbolID != null){
				if(pool[GetIndexByRow(1)].symbolID == stopSymbolID){
					if(pool[GetIndexByRow(0)].symbolID == null){
						return
					}
				}
			}
			
			let _rootX = pool[i].root.position.x
			let _rootY = pool[i].root.position.y
            let _side = Math.round(_rootY + _y)
            let _line = Math.round((rootParent.height * 0.5 + symbolHeight * 0.5) * -1)
            // 超出框線的放到第一個
            if(_side <= _line){
				pool[i].root.position = cc.v2(_rootX,_rootY + spinHeight)					
				refreshPositionIndex = i
				refreshPositionCount = refreshPositionCount +1
				if(callback != null){
					callback(i)
				}
			}
		}
		
		let tempIndex = refreshPositionIndex
		
		for(let i = tempIndex; i >= 1; -- i){
			if(i != tempIndex){
				SetPosition(i)
			}
		}
		
		for(let i = pool.length -1; i >= tempIndex; -- i){
			SetPosition(i)
		}
	}
	
// 初始化輪軸資訊
	this.SetReelSetting = function(symbolGroup,totalCount,isUpdateBoard){
	//console.log(symbolGroup)
		symbolHeight = rootRect.height / totalCount
		spinHeight = symbolHeight * (totalCount)
		rectHeight = symbolHeight * gameData.RowCounts
		spinReelSetting = symbolGroup
		spinReelIndex = symbolGroup.length -1
		
	// 未設定視同更新
		if(isUpdateBoard == null || isUpdateBoard == true){
			for(let  i = 1;  i <=  totalCount; ++ i){
				CreateClone(i)
				
			// 隨機設定初始畫面
				let index = Math.floor(Math.random() * symbolGroup.length)
				
				let symbolID = null
			// 確保symbolID 不會有重複的問題
				if(gameData.SpinDataMode == 0){
					symbolID = symbolGroup[index].SymbolID
				}
				let symbolName = symbolGroup[index].SymbolName
				SetData(i, symbolID, symbolName)
			}
		}		
		RefreshPosition(null)
	}	
	
// 指定輪軸結果
	this.SetReelResult = function(reelResult){
		for(let i in reelResult){
			
			let rowIndex = refreshPositionIndex + parseInt(i)
			if(rowIndex >= pool.length){
					rowIndex = rowIndex - pool.length +1
			}
			SetData(rowIndex, reelResult[i].SymbolID, reelResult[i].SymbolName)
		}
	}
	
	this.GetIndexBySymbolID = function(symbolID){
		for(let i in pool){
			if(pool[i].symbolID == symbolID){
				return i
			}
		}
		return null
	}		
	
	this.ResetStart = function(){
		for(let i in pool){
			pool[i].txtBet.string = ""
			if(pool[i].spine != null){
				pool[i].spine.setAnimation(0, "idle", true)
			} 
			else{
				pool[i].imgIcon.node.active =(true)
				pool[i].imgBlur.node.active =(false)
			}
		}
	}
	
// 註冊符號點擊事件
	this.SetSymbolClickCallback = function(callback){
		symbolClickCallback = callback
	}	
		
// 只顯示結果符號
	this.ShowResult = function(){
		let _y = rootRect.position.y
		
		for(let i in pool){
			pool[i].root.active =(false)
		}

		for(let i =1; i <= 3; i++){
			pool[GetIndexByRow(i)].root.active =(true)
		}
	}
		
//開始轉動輪軸
	this.StartSpin = function(callback){	
		stopSymbolID = null
		stopReelResult = []
		stopReelIndex = gameData.RowCounts
		
	// 開始轉動把輪軸拉回初始位置
		let _x = rootRect.position.x
		let _y = rootRect.position.y
		rootRect.position = cc.v2(_x,0)
		refreshPositionCount = 2
				
		for(let i in pool){
			pool[i].root.active =(true)
		// 開始轉動把輪軸拉回初始位置
			let _rootX = pool[i].root.position.x
			let _rootY = pool[i].root.position.y
			pool[i].root.position = cc.v2(_rootX,_rootY + _y)
			
		// 確保symbolID 不會有重複的問題
			if(gameData.SpinDataMode == 1){
				ResetData(i)
			}	
		}

		if(sequenceSpin != null)
			sequenceSpin.stop()
		
		sequenceSpin = GameG.NewTween(rootRect)
		sequenceSpin.to(0.23, {position: cc.v2(_x, rootRect.position.y  + symbolHeight *0.3)})
		sequenceSpin.call(function(){
			sequenceSpin = null
			if(callback != null){
				callback()
			}
			for(let i in pool){
				if(pool[i].spine != null){
					pool[i].spine.setAnimation(0, "spin", false);
				} 
				else{
					pool[i].imgIcon.node.active =(false)
					pool[i].imgBlur.node.active =(true)
				}
			}
			isSpinning = true
		})
		sequenceSpin.start()
		
	}

	this.Update = function(dt){
		if(isSpinning == true){
			let _x = rootRect.position.x
			let _y = rootRect.position.y
			let _timer = dt * gameData.SpinMoveTimer
			let movePercent = gameData.SpinPercent
			_y = _y + symbolHeight * movePercent * -1 * _timer
			rootRect.position = cc.v3(_x, _y, 0)

			if(stopSymbolID != null){
				if(pool[GetIndexByRow(1)].symbolID == stopSymbolID){
					if(pool[GetIndexByRow(0)].symbolID == null){
						let index = GetIndexByRow(1)
						if(pool[index].symbolID == stopSymbolID){
							let _rootY = pool[index].root.position.y - symbolHeight * 1.5
							let _outBack = symbolHeight *0.2 // 回彈的幅度
							if(_rootY + _y + _outBack <= 0){
								isSpinning = false
								this.StopSpin(_rootY *-1)
							}
						}
					}
				}
			}
		}

		if(this.GetIsSpinning() == true){
			RefreshPosition(function(index){
				if(stopReelIndex <= 0){
					
				//更換資料
				} 
				else if(stopReelResult.length > stopReelIndex && stopReelIndex > 0){

					let symbolID = stopReelResult[stopReelIndex].SymbolID
					let symbolName = stopReelResult[stopReelIndex].SymbolName
					if(lockData[stopReelIndex] == true){
						let randomIndex = GameG.MathRandom(0, spinReelSetting.length)
						symbolName = spinReelSetting[randomIndex].SymbolName
					}
					SetData(index, symbolID, symbolName)	
					if(pool[index].spine != null){					
						pool[index].spine.setAnimation(0, "spin", false)
					} 
					else{
						pool[index].imgIcon.node.active =(false)
						pool[index].imgBlur.node.active =(true)
					}
					stopReelIndex = stopReelIndex -1
				} 
				else{
					// 確保symbolID 不會有重複的問題
					let symbolID = null
					if(gameData.SpinDataMode == 0){
						symbolID = spinReelSetting[spinReelIndex].SymbolID
					}	
					let symbolName = spinReelSetting[spinReelIndex].SymbolName
					SetData(index, symbolID, symbolName)
					if(pool[index].spine != null){
						pool[index].spine.setAnimation(0, "spin", false)
					} 
					else{
						pool[index].imgIcon.node.active =(false)
						pool[index].imgBlur.node.active =(true)
					}
					spinReelIndex = spinReelIndex -1
					if(spinReelIndex <= 0){
						spinReelIndex = spinReelSetting.length -1
					}
				}
			})
		}
	},

	this.StopSpin = function(targetY){
		let self = this
		if(sequenceSpin != null)
			sequenceSpin.stop()
		
        let _x = rootRect.position.x  
		sequenceSpin = GameG.NewTween(rootRect)
		sequenceSpin.call(function(){
			GameG.PlayGameSound("se_normalstop")
			for(let i in pool){
				if(pool[i].spine != null){
					pool[i].spine.setAnimation(0, "stop", true)
				} 
				else{
					pool[i].imgIcon.node.active =(true)
					pool[i].imgBlur.node.active =(false)
				}
			}
		})
		sequenceSpin.to(0.2, {position: cc.v2(_x, targetY)})
		sequenceSpin.call(function(){ 
			self.ShowResult()
			self.HideNearWin()
			sequenceSpin = null
			if(stopCallback != null){
				stopCallback()
			}
		})		
		sequenceSpin.start()	
		
	};

//停止轉動輪軸(symbolID 第一行的符號)
	this.StopSpinModeSymbol = function(symbolID,callback){
		stopCallback = callback
		if (symbolID == 0) {
			gameLayer.ShowMessage("结果资料错误，請確認伺服器資料", 5)
			stopSymbolID = pool[1].symbolID
		}
		
		stopSymbolID = symbolID
	}
//停止轉動輪軸(reelResult 整列的符號)
	this.StopSpinModeData = function(reelResult,callback){
		stopCallback = callback
		stopReelResult = reelResult
		for(let i in reelResult){
			if(stopSymbolID == null){
				stopSymbolID = reelResult[i].SymbolID
			}
		}
		
		if(this.GetIsSpinning() == false && stopCallback != null){
			stopCallback()
		}
	}
	
// 取得輪軸是否在運轉
	this.GetIsSpinning = function(){
		if(isSpinning == true)
			return true
		
		if(sequenceSpin != null)
			return true
			
		return false
	}
	
//取得停輪符號
	this.GetStopSymbolID = function(){
		return stopSymbolID
	}
	
// 取得符號的世界座標
	this.GetSymbolWorldPos = function(index){
		return pool[index].rootPos.position
	}
	
//取得圖片名稱
	this.GetSymbolName = function(symbolID){
		let index = self.GetIndexBySymbolID(symbolID)
		return pool[index].symbolName
	}
	
//取得圖片名稱
	this.GetSymbol = function(symbolID){
		let index = self.GetIndexBySymbolID(symbolID)
		return pool[index]
	}
	
// 取得Pool
	this.GetPool = function(){
		return pool
	}
	
//顯示亮框
	this.ShowWin = function(symbolID){
		let index = self.GetIndexBySymbolID(symbolID)
		if(pool[index].spine != null){
			pool[index].spine.setAnimation(0, "win", true)
		} 
		else{
			pool[index].imgIcon.node.active =(true)
			pool[index].imgBlur.node.active =(false)
		}
	}
		
// 顯示聽牌效果
	this.ShowNearWin = function(){
		// 如果停輪就不表演
		if(this.GetIsSpinning() == false){
			return
		}	
		let _x = rootRect.position.x + rootRect.width * 0.5
        let _y = rectHeight * 0.5
        rootNearWin.position = cc.v2(_x, 0)
		rootNearWin.active =(true)
		GameG.PlayGameSound("se_nearwin")
	}
	
// 關閉聽牌效果
	this.HideNearWin = function(){
		rootNearWin.active =(false)
	}
		
	this.onExit = function(){	
		if(sequenceSpin != null){
			sequenceSpin.stop()	
			sequenceSpin = null
		}
		
		for(let i in pool){	
			pool[i] = null
		}
		lockData = []
	}
	
// 設定鎖住
	this.SetLock = function(rowIndex){
						
	// console.log("lockData[symbolID] : ", lockData[symbolID])
		
		if(rowIndex == null){
			return
		}		
		
		if(lockData[rowIndex] == true){
			return
		}
		lockData[rowIndex] = true
		let index = GetIndexByRow(rowIndex)
		let symbolLightning = lightningPrefabPool.get("SymbolLightning")
		symbolLightning.active = true
		symbolLightning.parent = rootRect.parent
		symbolLightning.position = GameG.LocalConvertWorldPointAR(pool[index].root).sub(rootRect.parent)
		symbolLightning.scale = 1

		let lightning = []
		lightning.gID = null
		lightning.gName = null
		lightning.gValue = 0
		lightning.gSet = false
		lightning.g1 = {}
		lightning.g1.root = cc.find("Root/GGroup/G1",symbolLightning)
		lightning.g1.spine = cc.find("Root/GGroup/G1/Spine",symbolLightning).getComponent(sp.Skeleton)
		lightning.g1.text = cc.find("Root/GGroup/G1/Text",symbolLightning).getComponent("TextControl")
		lightning.g1.value = 0
		lightning.g1.Show = function(value){
			lightning.g1.root.active =(true)
			lightning.g7.root.active =(false)
			lightning.g8.root.active =(false)
			if(value == null){ value = 0 }
			if(value == 0){
				lightning.g1.text.string = ""
			} 
			else{
				lightning.g1.text.string = GameG.AbbreviateNumber(value, true)
			}
			lightning.gID = "g1"
			lightning.gValue = value
			utilities.AdjustTextSize(lightning.g1.text, 5, 0.1)
		}
		lightning.g7 = []
		lightning.g7.root = cc.find("Root/GGroup/G7",symbolLightning)
		lightning.g7.spine = cc.find("Root/GGroup/G7/Spine",symbolLightning).getComponent(sp.Skeleton)
		lightning.g7.text = cc.find("Root/GGroup/G7/Text",symbolLightning).getComponent("TextControl")
		lightning.g7.value = 0
		lightning.g7.Show = function(value){
			lightning.g1.root.active =(false)
			lightning.g7.root.active =(true)
			lightning.g8.root.active =(false)
			if(value == null){ value = 0 }
			if(value == 0){
				lightning.g7.text.string = ""
			} 
			else{
				lightning.g7.text.string = GameG.AbbreviateNumber(value, true)
			}
			lightning.g7.value = value
			lightning.gID = "g7"
			lightning.gValue = value
			utilities.AdjustTextSize(lightning.g7.text, 6, 0.1)
		}
		lightning.g8 = []
		lightning.g8.root = cc.find("Root/GGroup/G8",symbolLightning)
		lightning.g8.spine = cc.find("Root/GGroup/G8/Spine",symbolLightning).getComponent(sp.Skeleton)
		lightning.g8.text = cc.find("Root/GGroup/G8/Text",symbolLightning).getComponent("TextControl")
		lightning.g8.value = 0
		lightning.g8.Show = function(value){
			lightning.g1.root.active =(false)
			lightning.g7.root.active =(false)
			lightning.g8.root.active =(true)
			if(value == null){ value = 0 }
			if(value == 0){
				lightning.g8.text.string = ""
			} 
			else{
				lightning.g8.text.string = GameG.AbbreviateNumber(value, true)
			}
			lightning.g8.value = value
			lightning.gID = "g8"
			lightning.gValue = value
			utilities.AdjustTextSize(lightning.g8.text, 6, 0.1)
		}
		lightning.Show = function(name, value){
			lightning.gName = name
		// name 1~6
			for(let  i = 1;  i <=  6; ++ i){
				let targetName = "g"+i
				if(name == targetName){
					lightning.g1.Show(value)
					return
				}
			}
			if(name == "g7"){
				lightning.g7.Show(value)
			} 
			else if(name == "g8"){

				lightning.g8.Show(value)
			}
		}
		lightning.PlayTally = function(){
			if(lightning.gName == "g7"){
				lightning.g7.spine.setAnimation(0, "tally", false)
				return
			}
			if(lightning.gName == "g8"){
				lightning.g8.spine.setAnimation(0, "tally", false)
				return
			}
		}
		lightningData[rowIndex] = lightning
		let isScale = false
		let spine = null
		let gID = pool[index].gID
		let gValue = pool[index].gValue
		if(gID == "g1"){
			lightning.g1.Show(gValue)
			spine = lightning.g1.spine
		} 
		else if(gID == "g7"){

			isScale = true
			lightning.g7.Show(gValue)
			spine = lightning.g7.spine
		} 
		else if(gID == "g8"){

			isScale = true
			lightning.g8.Show(gValue)	
			spine = lightning.g8.spine		
		} 
		else{
			console.log("!!!!!!!!!!!!!! 錯誤 gID : ", gID)
		}
		if(spine != null){
		// local isShow = gameData.LightningGoldBallIsShow
		// if(isShow)then
			// spine.setAnimation(0, "idle", true)
			// spine.addAnimation(0, "idle", true, 1)
		// else
			// spine.setAnimation(0, "idle", true)
		// end
			spine.setAnimation(0, "idle", true)
			
			if(isScale){
				let startScale = 0.85
				let endScale = 1

				spine.node.scale = startScale
				GameG.NewTween(spine.node)
					.to(0.5, { scale: endScale})
					.start()
			} 
			else{
				spine.node.scale = 1
			}
		}
	// 把原先的G1圖換掉		
		SetData(index, pool[index].symbolID, "")
	}
	
// 設定解鎖
	this.UnLock = function(){
		
		for(let i in (pool)){ 
			let j = pool[i] 

			j.Lightning.SetColorEnable(true)			
		}
		lockData = []
		lightningData = []
	}
		
/*
// 表演還未表演的金球
this.ShowGoldBall = function(){
	for(let i in pool){
		if(j.symbolName.match("g")){
			this.SetLock(j.symbolID)
		}
	}
}

// Lightning顏色不是g的都壓黑
this.LightningColor = function(){
	for(let i in pool){
		if(j.symbolName.match("g")){
			pool[i].Lightning.SetColorEnable(true)
		}
		else{
			pool[i].Lightning.SetColorEnable(false)
		}
	}
}
*/
	
// Lightning顏色不是g的都壓黑
	this.LightningColor = function(){
		for(let i in (pool)){ 
			let j = pool[i] 

			if(j.symbolName.match("g") != null){
				pool[i].Lightning.SetColorEnable(true)
			} 
			else{
				pool[i].Lightning.SetColorEnable(false)
			}
		}
	}
	
// 取得Lightning資料
	this.GetLightningData = function(rowIndex){
		return lightningData[rowIndex]
	}
	
// 更新圖騰的G錢由Lightning資料設定
	this.UpdateSymbolGMoneyByLightningData = function(){
	// console.log("UpdateSymbolGMoneyByLightningData")
		for(let i in (lightningData)){ 
			let j = lightningData[i] 

			let index = GetIndexByRow(i)
			if(pool[index] != null){
				pool[index].Show(j.gID, j.gValue)
			}
		}
		lightningPrefabPool.freeAll()
	}
};

module.exports = UISlotReel
