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
	let isSpinning = false //轉動中
	let symbolClickCallback = null // 點擊符號事件
	
	let objectPool = poolSpine.getComponent("ObjectPool")
	let rootNearWin = cc.find("near_win",rootRect)
	rootNearWin.active =(false)
	//rootNearWin.parent =(rootRect.parent)
	rootNearWin.parent = cc.find("Canvas/GameLayer/UISlotParticle")

//----->需重新編譯程式碼	rootNearWin:SetAsLastSibling()
	
	let prefab = cc.find("Symbol",rootRect)	
	prefab.active =(false)
	
	let  SetSprite = function(img,symbolName){
		GameG.SetImageSprite(img, G.GetGamePName(), "symbol_" + symbolName)
	};
	
	let  SetSpine = function(index,symbolName){		
		// let temp = cc.find("SkeletonGraphic (sp_"+symbolName+")",rootPoolSpine)
		// if(temp != null ){
			//let clone = cc.instantiate(temp)
			let clone = objectPool.get(symbolName)
			clone.parent =(pool[index].root)
//----->需重新編譯程式碼			clone:SetAsFirstSibling()
			clone.scale = 1
			clone.active =(true)
			clone.position = pool[index].rootPos.position
			pool[index].spine = clone.getComponent(sp.Skeleton)
			pool[index].spine.setAnimation(0, "idle", false);			
		// }
	};
		
	let  SetData = function(index, symbolID, symbolName){
		if(pool[index].spine != null){
			objectPool.free(pool[index].symbolName, pool[index].spine.node)
			pool[index].spine.node.active = false;
			pool[index].spine = null
		}
		pool[index].root.name = prefab.name +"_"+ index
		pool[index].symbolID = symbolID
		pool[index].symbolName = symbolName
		
		pool[index].detail.txtSymbolID.string = symbolID
		pool[index].detail.txtSymbolName.string = symbolName
		
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
	
    let GetIndexByRow = function(row){
        let index = refreshPositionIndex + row
        if(index >= pool.length){
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
				pool[i].root.position = cc.v2(_rootX,_rootY + spinHeight)	
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
	
// 初始化輪軸資訊
	this.SetReelSetting = function(symbolGroup,totalCount){
	//G.Tool.TableHelper.Print(symbolGroup)
		symbolHeight = rootRect.height / totalCount
		spinHeight = symbolHeight * (totalCount)
		rectHeight = symbolHeight * gameData.RowCounts
		spinReelSetting = symbolGroup
		spinReelIndex = symbolGroup.length -1
		
		for(let i = 1; i <= totalCount; ++ i){
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
				pool[i].spine.setAnimation(0, "idle", false);
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
		stopSymbolID = null
		stopReelResult = []
		stopReelIndex = gameData.RowCounts
		isSpinning = false
		
	// 開始轉動把輪軸拉回初始位置
		let _x = rootRect.position.x
		let _y = rootRect.position.y
		rootRect.position = cc.v2(_x,0)
				
		for(let  i in pool){
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
		let self = this
		if(sequenceSpin != null)
			sequenceSpin.stop()
		
        let _x = rootRect.position.x  
		sequenceSpin = GameG.NewTween(rootRect)
		sequenceSpin.call(function(){
			GameG.PlayGameSound("se_normalstop")
			for(let  i in pool){
				if(pool[i].spine != null){
					pool[i].spine.setAnimation(0, "stop", true);
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
	};
//停止轉動輪軸(reelResult 整列的符號)
	this.StopSpinModeData = function(reelResult,callback){
		stopCallback = callback
		stopReelResult = reelResult
		for(let  i = 1;  i <=  reelResult.length; ++ i){
			if(stopSymbolID == null){
				stopSymbolID = reelResult[i].SymbolID
			}
		}
	};
	
// 取得輪軸是否在運轉
	this.GetIsSpinning = function(){
		if(isSpinning == true)
			return true
		
		if(sequenceSpin != null)
			return true
			
        return false
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
			pool[index].spine.setAnimation(0, "win", true);
		} 
		else{
			pool[index].imgIcon.node.active =(true)
			pool[index].imgBlur.node.active =(false)
		}
	};
	
//顯示倍率
	this.ShowBet = function(symbolID,bet,showTimer){
		if(bet != null && bet <= 1){ bet = null }
		let index = GetIndexBySymbolID(symbolID)
		pool[index].txtBet.string = bet
		pool[index].txtBet.scale = pool[index].reScaleBet
		
		let sequence = GameG.NewTween(pool[index].txtBet)
		sequence.to(showTimer, {scale: pool[index].reScaleBet * 2})
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
	
// 只顯示結果符號
	this.ShowResult = function(){
		
		let _y = rootRect.position.y
		
		for(let i in pool){
			pool[i].root.active =(pool[i].symbolID != null)
		}
	};
	
	this.onExit = function(){				
		for(let  i = 1;  i <=  pool.length; ++ i){	
			pool[i] = null	
		}
		pool = []
	};


};

module.exports = UISlotReel
