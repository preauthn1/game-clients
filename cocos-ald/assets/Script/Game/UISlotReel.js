var G = require( "Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var gameLayer = require("GameLayer")
var poolCount = 10

/** 用途: 輪軸 */
function UISlotReel(root, poolSpine){
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
	let refreshPositionCount = 0 //已更換位置的符號數量
	let isSpinning = false //轉動中
	let symbolClickCallback = null // 點擊符號事件
	let isLockSpin = false // 是鎖住轉動
	
	let objectPool = poolSpine.getComponent("ObjectPool")

	let rootNearWin = cc.find("near_win",rootRect)
	rootNearWin.active =(false)
	rootNearWin.parent =(rootRect.parent)
//----->需重新編譯程式碼	rootNearWin:SetAsLastSibling()
	
	let prefab = cc.find("Symbol",rootRect)	
	prefab.active =(false)
	
// 精靈
	let genie = cc.find("Genie",rootRect)
	
// 精靈動畫
	let genieSpine = cc.find("Genie/Spine",rootRect).getComponent(sp.Skeleton)
	genieSpine.node.active =(false)
	
// 精靈光特效
	let rainbow = cc.find("Genie/Rainbow",rootRect).getComponent("AnimationParticle")
	rainbow.node.active =(false)
	let GenieShowfog = cc.find("Genie/genie_showfog",rootRect).getComponent("AnimationParticle")
	GenieShowfog.node.active =(false)
	let GenieFogloop = cc.find("Genie/genie_fogloop",rootRect).getComponent("AnimationParticle")
	GenieFogloop.node.active =(false)
	
	let  SetSprite = function(img,symbolName){
		GameG.SetImageSprite(img, G.GetGamePName(), "symbol_" + symbolName)
		GameG.SpritePreserveAspect(img)
	};
		
	let  SetSpine = function(index,symbolName){
		// let temp = cc.find("SkeletonGraphic,rootPoolSpine (sp_"+symbolName+")")
		// if(temp != null ){
			let clone = objectPool.get(symbolName)
			// let clone = cc.instantiate(temp)
			clone.parent =(pool[index].rootPos)
//----->需重新編譯程式碼			clone:SetAsFirstSibling()
			clone.scale = 1
			clone.angle = 0
			clone.active =(true)
			clone.position = cc.v2(0,0)
			pool[index].spine = clone.getComponent(sp.Skeleton)
			pool[index].spine.setAnimation(0, "stop", false);
			
		// }
	};
		
	let  SetData = function(index, symbolID, symbolName){
		if(pool[index].spine != null){
			objectPool.free(pool[index].symbolName, pool[index].spine.node)
			pool[index].spine.node.active = false;
			pool[index].spine = null
		}
		pool[index].root.name = symbolName
		pool[index].symbolID = symbolID
		pool[index].symbolName = symbolName
		
		pool[index].detail.txtSymbolID.string = symbolID
		pool[index].detail.txtSymbolName.string = index + "_" + symbolName
		
		symbolName = gameData.ChangeSymbolName(symbolName)
		pool[index].imgIcon.node.active =(symbolID == null)
		pool[index].imgBlur.node.active =(false)
		
		// if(pool[index].spine != null){
		// 	pool[index].spine.node.destroy()
		// 	pool[index].spine = null
		// }
		
		if(symbolID != null){
			SetSpine(index,symbolName)
		} 
		else{
			SetSprite(pool[index].imgIcon, "n_" + symbolName)
			SetSprite(pool[index].imgBlur, "b_" + symbolName)
		}
		if(isLockSpin) {
			if(pool[index].spine != null) {
				pool[index].spine.node.active =(false)
			}
		}
	};
		
	let  ResetData = function(index){
		pool[index].symbolID = null
		pool[index].detail.txtSymbolID.string = null
	};
			
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
		pool[index].txtBet = cc.find("TextBet",clone).getComponent(cc.Label)
		pool[index].reScaleBet = pool[index].txtBet.scale
		let _width = rootRect.width
		let _y = (symbolHeight) * (index-1) * -1
		pool[index].root.position = cc.v2(0,_y)
		pool[index].root.width = _width
		pool[index].root.height = symbolHeight
		
		pool[index].detail = {}
		pool[index].detail.root = cc.find("ImageDetail",clone)
		pool[index].detail.txtSymbolID = cc.find("ImageDetail/TextSymbolID",clone).getComponent(cc.Label)
		pool[index].detail.txtSymbolName = cc.find("ImageDetail/TextSymbolName",clone).getComponent(cc.Label)
		pool[index].detail.root.active =(gameData.ShowReelSymbolDetail)
		
		pool[index].btn.node.on('click',function(){
			if(symbolClickCallback != null){
				GameG.PlayGameSound("se_click")
				let data = {}
				data.symbolName = pool[index].symbolName
				symbolClickCallback(isSpinning,data)
			}
		})	
		
		refreshPositionIndex = pool.length
	};
	
	let  GetIndexByRow = function(row){
        let index = refreshPositionIndex + row
        while(index >= pool.length){
            index = index - pool.length +1
        }
        return index
	};
	
// 刷新符號的位置
	let  RefreshPosition = function(callback){
		let _y = rootRect.position.y
		let SetPosition = function(i){
			if(stopSymbolID != null){
				if(pool[GetIndexByRow(1)].symbolID == stopSymbolID){
					return
				}
			}
			
			let _rootX = pool[i].root.position.x
			let _rootY = pool[i].root.position.y
			let _side = Math.round(_rootY + _y)
            let _line = Math.round((rootParent.height * 0.5 + symbolHeight * 0.5) * -1)
		// 超出框線的放到第一個
			if(_side <= _line){
				refreshPositionCount = refreshPositionCount +1
				let _targetY = refreshPositionCount * symbolHeight
				pool[i].root.position = cc.v2(_rootX,_targetY)		
				refreshPositionIndex = i
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
	};
	
// 表演精靈
	let  ShowGenie = function(isShow){
	// 設定精靈位置
		let posY = Math.abs(genie.parent.position.y)		
		let pos = cc.v2(0, posY - 50)
		genie.position = pos
		genie.active =(true)
		
		rainbow.node.active =(true)
		rainbow.play()
		GenieShowfog.node.active = true
		GenieShowfog.play()

		genieSpine.node.active =(true)			
		if(isShow == true) {
			genieSpine.setAnimation(0, "lamp_out", false)
			genieSpine.addAnimation(0, "out", false)
			genieSpine.addAnimation(0, "idle", true)
		} 
		else{
			genieSpine.setAnimation(0, "idle", true)
		}	

		let sequence = GameG.NewTween(genie)		
		sequence.delay(2)
		sequence.call(function(){
			GenieFogloop.node.active = true
			GenieFogloop.play()
		})
		sequence.start()
	};
	
// 只顯示結果符號
	let  ShowResult = function(){
		for(let i in pool){
			pool[i].root.active =(false)
		}
		for(let i = 1; i <=  gameData.RowCounts; ++i){
			let index = GetIndexByRow(i)
			pool[index].root.active =(true)
		}
	};
	
// 初始化輪軸資訊
	this.SetReelSetting = function(symbolGroup,totalCount){
		symbolHeight = rootRect.height / totalCount
		spinHeight = symbolHeight * (totalCount)
		rectHeight = symbolHeight * gameData.RowCounts
		spinReelSetting = symbolGroup
		spinReelIndex = symbolGroup.length -1
		
		for(let  i = 1;  i <=  totalCount; ++ i){
			CreateClone(i)
			
		// 隨機設定初始畫面
			let index = Math.floor(Math.random() * (symbolGroup.length-1))
			
		// 確保symbolID 不會有重複的問題
			let symbolID = null
			if(gameData.SpinDataMode == 0){
				symbolID = symbolGroup[index].SymbolID
			}
			let symbolName = symbolGroup[index].SymbolName
			SetData(i, symbolID, symbolName)
		}
		
		RefreshPosition(null)
	};
	
// 斷線重連直接顯示暫存結果
	this.SetReelResult = function(rowIndex,symbolID,symbolName){	
	
		SetData(rowIndex, symbolID, symbolName)
		
		if(symbolName == "w1" && rowIndex == 3 && gameData.ResultDetail != null) {
			isLockSpin = true
			ShowGenie(false)
			ShowResult()
		} 
		else if(rowIndex == 1){

			stopSymbolID = symbolID
		}
	};
		
	let  GetIndexBySymbolID = function(symbolID){
		for(let i in pool){
			if(pool[i].symbolID == symbolID){
				return i
			}
		}
		return null
	};
		
	this.ResetStart = function(){
		for(let i in pool){
			pool[i].txtBet.string = ""
			if(pool[i].spine != null){
				pool[i].spine.setAnimation(0, "stop", false);
			} 
			else{
				pool[i].imgIcon.node.active =(true)
				pool[i].imgBlur.node.active =(false)
			}
		}
	};
	
// 註冊符號點擊事件
	this.SetSymbolClickCallback = function(callback){
		symbolClickCallback = callback
	};
	
	this.Update = function(dt){
		if(isSpinning == true){		
			let _x = rootRect.position.x
			let _y = rootRect.position.y
			let _timer = dt * gameData.SpinMoveTimer
			let movePercent = gameData.SpinPercent
			_y = _y + symbolHeight * movePercent * -1 * _timer
			rootRect.position = cc.v3(_x, _y, 0)
						
			if(stopSymbolID != null){
				let index = GetIndexBySymbolID(stopSymbolID)
				if(index != null){
					let _rootY = pool[index].root.position.y - symbolHeight * 1.5
					let _outBack = symbolHeight *0.2 // 回彈的幅度
					if(_rootY + _y + _outBack <= 0){
						isSpinning = false
						this.StopSpin(_rootY *-1)
					}
				}
			}
		}
		
		if(this.GetIsSpinning() == true){
			RefreshPosition(function(index){
				if(stopReelIndex <= 0){
						
				} 
				//更換資料
				else if(stopReelResult.length > stopReelIndex && stopReelIndex > 0){

					let symbolID = stopReelResult[stopReelIndex].SymbolID
					let symbolName = stopReelResult[stopReelIndex].SymbolName
					SetData(index, symbolID, symbolName)	
					if(pool[index].spine != null){					
						pool[index].spine.setAnimation(0, "spin", false);
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
						pool[index].spine.setAnimation(0, "spin", false);
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
	};
//開始轉動輪軸
	this.StartSpin = function(callback){
		
		if(isLockSpin == true) {
			if(callback != null){
				callback()
			}
			return
		}
		
		stopSymbolID = null
		stopReelResult = []
		stopReelIndex = gameData.RowCounts
		
	// 開始轉動把輪軸拉回初始位置
		let _x = rootRect.position.x
		rootRect.position = cc.v2(_x,220)
		refreshPositionCount = 1
		
		for(let i=0; i< gameData.RowCounts+2; i++){
			let index = GetIndexByRow(i)
			pool[index].root.active =(true)
		// 開始轉動把輪軸拉回初始位置
			let _rootX = pool[index].root.position.x
			pool[index].root.position = cc.v2(_rootX, (refreshPositionCount-i) * symbolHeight)
		// 確保symbolID 不會有重複的問題
			if(gameData.SpinDataMode == 1){
				ResetData(index)
			}	
		}
		
		if(sequenceSpin != null)
			sequenceSpin.stop()
		
		sequenceSpin = GameG.NewTween(rootRect)
		sequenceSpin.to(0.5, {position: cc.v2(_x, rootRect.position.y  + symbolHeight *0.5)})
		sequenceSpin.call(function(){
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
			sequenceSpin = null
			isSpinning = true
		})
		sequenceSpin.start()
	};
	
	this.StopSpin = function(targetY){
		if(sequenceSpin != null)
			sequenceSpin.stop()
		
		let _x = rootRect.position.x  
		sequenceSpin = GameG.NewTween(rootRect)
		sequenceSpin.call(function(){
			GameG.PlayGameSound("se_normalstop")
			for(let  i in pool){
				if(pool[i].spine != null){
					pool[i].spine.setAnimation(0, "stop", false);
				} 
				else{
					pool[i].imgIcon.node.active =(true)
					pool[i].imgBlur.node.active =(false)
				}
			}
		})
		sequenceSpin.to(0.2, {position: cc.v2(_x, targetY)})
		sequenceSpin.call(function(){ 
			sequenceSpin = null
			isSpinning = false
			ShowResult()
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
	};
//停止轉動輪軸(reelResult 整列的符號)
	this.StopSpinModeData = function(reelResult,callback){
		stopCallback = callback
		stopReelResult = reelResult
		for(let i in reelResult){
			if(stopSymbolID == null){
				stopSymbolID = reelResult[i].SymbolID
			}		
			
			if(isLockSpin == true){
				let rowIndex = GetIndexByRow(i)
				SetData(rowIndex, reelResult[i].SymbolID, reelResult[i].SymbolName)
			}
		}
		
		if(isLockSpin == true){
			if(callback != null){
				callback()
			}
		}
	};
//取得停輪符號
	this.GetStopSymbolID = function(){
		return stopSymbolID
	};
		
// 取得符號的世界座標
	this.GetSymbolWorldPos = function(index){
		return GameG.LocalConvertWorldPointAR(pool[index].rootPos)
	};
	
//取得圖片名稱
	this.GetSymbolName = function(symbolID){
		let index = GetIndexBySymbolID(symbolID)
		return pool[index].symbolName
	};
		
//顯示亮框
	this.ShowWin = function(symbolID){
		let index = GetIndexBySymbolID(symbolID)
		if(pool[index].spine != null){
			pool[index].spine.setAnimation(0, "win", true)	
		} 
		else{
			pool[index].imgIcon.node.active =(true)
			pool[index].imgBlur.node.active =(false)
		}
		
		if(isLockSpin == true) {
			genieSpine.setAnimation(0, "win", false)
			genieSpine.addAnimation(0, "idle", true, 2)
		}
	};
	
//顯示倍率
	this.ShowBet = function(symbolID,bet,showTimer){
		if(bet != null && bet <= 1){ bet = "" }
		let index = GetIndexBySymbolID(symbolID)
		pool[index].txtBet.string = bet
		pool[index].txtBet.scale = pool[index].reScaleBet
		
        cc.tween(pool[index].txtBet.node)
        .to(showTimer, { scale: pool[index].reScaleBet * 2 })
		.start()
	};
	
// 顯示聽牌效果
	this.ShowNearWin = function(){		
		let _x = rootRect.position.x + rootRect.width * 0.5
        let _y = rectHeight * 0.5
        rootNearWin.position = cc.v2(_x, 0)
		rootNearWin.active =(true)
		GameG.PlayGameSound("se_nearwin")
	};
	
// 關閉聽牌效果
	this.HideNearWin = function(){	
		rootNearWin.active =(false)
	};
		
	this.onExit = function(){			
		if(sequenceSpin != null){
			sequenceSpin.stop()		
			sequenceSpin = null
		}
				
		for(let  i = 1;  i <=  pool.length; ++ i){	pool[i] = null	}
		pool = []
	};
	
	this.GetIsLockSpin = function(){
		return isLockSpin
	};
	
// 擴展
	this.Expand = function(symbolName, expandOrder){
		
		if(isLockSpin == true) {
			return
		}
		
		isLockSpin = true
		let count = 0
		
		ShowGenie(true)
		
		for(let  i = 1;  i <=  3; ++ i){
		
			let rowIndex = GetIndexByRow(i)
			
			let trans = null
			
			if(pool[rowIndex].spine == null){
				trans = pool[rowIndex].imgIcon
			} 
			else{
				trans = pool[rowIndex].spine
			}
				
			let sequence = GameG.NewTween(trans.node)
			sequence.delay(1)
			sequence.to(0.25, {angle: 90 })
			sequence.call(function(){
				SetData(rowIndex, pool[rowIndex].symbolID, symbolName)
			})
			sequence.start()
		}
	};
	
// 關閉擴展
	this.CloseExpand = function(timer){
		if(isLockSpin == false) {
			return
		}
		isLockSpin = false
		genieSpine.setAnimation(0, "in", false)
		genieSpine.addAnimation(0, "lamp_in", false, 2)


		GameG.NewDelayOnce(function(){
			genie.active =(false)
		}, timer)

		GameG.NewDelayOnce(function(){
			for(let  i = 1;  i <=  3; ++ i){
			
				let rowIndex = GetIndexByRow(i)
				
				let trans = null
			
				if(pool[rowIndex].spine == null){
					trans = pool[rowIndex].imgIcon
				} 
				else{
					trans = pool[rowIndex].spine
				}
				
				trans.node.angle = 90
				trans.node.active =(true)

				let sequence = GameG.NewTween(trans.node)
				sequence.to(0.5, {angle: 0 })
				sequence.start()	
			}
		}, 1)
	};
	
// 取得Pool
	this.GetPool = function(index){
		let rowIndex = GetIndexByRow(index)
		return pool[rowIndex]
	};
	
// 取得是否滾動
	this.GetIsSpinning = function(){
		if(isSpinning == true)
			return true
		
		if(sequenceSpin != null)
			return true
			
        return false
	};
};

module.exports = UISlotReel
