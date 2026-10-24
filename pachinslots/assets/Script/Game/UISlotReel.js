var GameG = require("GameGlobal");

function UISlotReel(root){
	let rootRect = root
	let rootPoolSymbol = cc.find("PoolSymbol",root) 
	let prefabSymbol = cc.find("PoolSymbol/Symbol",root)
	prefabSymbol.active = false
	
	let stopBtn = root.getComponent(cc.Button)

	let SymbolIcon = null
	let symbolIconIndex = 0
	let poolSymbol = []
	let rowCount = 3
	let symbolHeight = 0
	let sequenceSpin = null
	let inSpinLoop = false
	let refreshIndex = 0
	let refreshCount = 0
	let resultData = null
	let callbackStop = null
	let symbolType = 0

	let uiSlot = null
	let reelSpeed = 100
	let reelIndex = 0
	let symbolHeightScale = 1
	let spinOutBackDistance = 0.2 //輪軸滾動回拉的距離
	let spinOutBackTime = 0.2 //輪軸滾動回拉的時間

	this.Init = function(slot, speed, index, heightScale){
		uiSlot = slot
		reelSpeed = speed
		reelIndex = index
		symbolHeightScale = heightScale
	}

	let  CreateCloneSymbol = function(index){
		if(poolSymbol[index] != null){
			return;
		}
		
		let clone = cc.instantiate(prefabSymbol);
		clone.parent = rootPoolSymbol;
		clone.position = cc.v2(0, 0);
		clone.scale = 1;
		clone.name = prefabSymbol.name + index;
		clone.active = true;
		clone.width = root.width - 20;
		clone.height = root.height / rowCount;

		poolSymbol[index] = {}
		poolSymbol[index].root = clone;
		poolSymbol[index].txtSymbolName = cc.find("SymbolName",clone).getComponent(cc.Label);
		poolSymbol[index].txtSymbolId = cc.find("SymbolId",clone).getComponent(cc.Label);
		poolSymbol[index].sprite = cc.find("Sprite",clone).getComponent(cc.Sprite);
		poolSymbol[index].txtSymbolName.string = index;
		poolSymbol[index].symbolId = null;
		poolSymbol[index].symbolName = null;
		poolSymbol[index].resultRow = null;
	}

	this.GetSymbolPosByRow = function(rowIndex){
		let index = GetIndexByRow(rowIndex)
		return poolSymbol[index].root.position.add(rootPoolSymbol.position)
	}

	this.GetStopButton = function(){
		return stopBtn
	}

	this.GetReelIndex = function(){
		return reelIndex
	}

	let GetIndexByResultRow = function(rowIndex){
		for(let i in poolSymbol){
			if(poolSymbol[i].resultRow == rowIndex){
				return i
			}
		}
		return null
	}
	
	let GetIndexByRow = function(row){
		let index = refreshIndex + row;
        if(index >= poolSymbol.length){
            index = index - poolSymbol.length;
        }
		return index
	}

	let RefreshPosition = function(callback){
		let refreshIndexArray = []
		for(let i = poolSymbol.length -1; i >= 0; --i){
			refreshIndexArray.push(GetIndexByRow(i));
		}
		
		for(let i = 0; i < poolSymbol.length; ++i){
			let index = refreshIndexArray[i]
            let border = Math.round(rootRect.position.y - rootRect.height * symbolHeightScale * 0.5 - symbolHeight);
			let symbolTop = Math.round(poolSymbol[index].root.position.y + rootPoolSymbol.position.y + symbolHeight * 0.5);
			if(poolSymbol[index].resultRow != null){
				return
			}
			// 超出框線的放到第一個
            if(symbolTop <= border){
				refreshIndex = index;
				refreshCount = refreshCount +1;
				poolSymbol[index].root.position = cc.v2(0, refreshCount * symbolHeight);

				if(callback != null){
					callback(index)
				}
			}
		}
	}

	/**  
	 * [type] 0:normal 1:blur 2:result
	 */
	let SetPoolSymbolType = function(type){
		symbolType = type
		for(let i in poolSymbol){
			let symbolName = poolSymbol[i].symbolName
			SetSpine(i, symbolName)
		}
	}

	let SetSpine = function(index, symbolName){
		let spriteFrame = uiSlot.GetSymbol(symbolName, symbolType);
		poolSymbol[index].sprite.node.active = true
		poolSymbol[index].sprite.spriteFrame = spriteFrame;
	}

	let SetData = function(index, symbolId, symbolName){
		let symbol = poolSymbol[index]
		symbol.symbolId = symbolId;
		symbol.symbolName = symbolName;
		symbol.txtSymbolId.string = symbolId;
		symbol.txtSymbolName.string = symbolName;

		SetSpine(index, symbolName)
	}

	let GetRandomSymbolIcon = function(){
		if(symbolIconIndex == 0){
			symbolIconIndex = SymbolIcon.length;
		}
		symbolIconIndex = symbolIconIndex -1
		let iconName = SymbolIcon[symbolIconIndex]
		return iconName
	}

	// 轉動前設定
	this.SetReelStrips = function(data){
		SymbolIcon = data.Symbols;
		symbolHeight = root.height / rowCount * symbolHeightScale;
		symbolIconIndex = data.Symbols.length;

		for(let i = 0; i < rowCount +2; ++i){
			CreateCloneSymbol(i);

			let icon = GetRandomSymbolIcon()
			SetData(i, null, icon)
		}
		this.ResetSpin()
	}

	this.ResetSpin = function(){
		resultData = null
		callbackStop = null
		refreshCount = 0;
		rootPoolSymbol.position = cc.v2(0, symbolHeight * 2);
		
		for(let i = 0; i < poolSymbol.length; ++i){
			let index = GetIndexByRow(i);
			poolSymbol[index].root.position = cc.v2(0, i * -symbolHeight);
			poolSymbol[index].symbolId = null
			poolSymbol[index].resultRow = null;
		}
	}

	this.StartSpin = function () {		
		this.ResetSpin();

		inSpinLoop = true;
		SetPoolSymbolType(1)
	}
	
	this.SetStopSpin = function(data, callback){
		resultData = []
		for(let i in data.Symbols){
			resultData.push(data.Symbols[i])
		}
		callbackStop = callback
	}
	
	let StopSpin = function(){
		SetPoolSymbolType(0)
		let stopIndex = GetIndexByResultRow(1)
		let x = rootPoolSymbol.position.x;
		let y = -poolSymbol[stopIndex].root.position.y + symbolHeight;
		sequenceSpin = GameG.NewTween(rootPoolSymbol)
			.to(spinOutBackTime, {position: cc.v2(x, y)})
			.call(function(){
				sequenceSpin = null;
				inSpinLoop = false;
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
				let _timer = dt * reelSpeed;
				let movePercent = 0.1;
				_y = _y + symbolHeight * movePercent * -1 * _timer;
				rootPoolSymbol.position = cc.v2(_x, _y);

				let stopIndex = GetIndexByResultRow(1)
				if(poolSymbol[stopIndex] != null){
					let border = Math.round(rootRect.position.y + rootRect.height * symbolHeightScale * 0.5);
					let symbolTop = Math.round(poolSymbol[stopIndex].root.position.y + rootPoolSymbol.position.y + symbolHeight * 0.5);
					let outBack = symbolHeight * spinOutBackDistance; // 回彈的幅度
					if(symbolTop - outBack <= border){
						StopSpin();
					}
				}
			}

			RefreshPosition(function(index){
				// 轉動停止 更換結果符號
				if(resultData != null && resultData.length > 0){
					let rowIndex = resultData.length;
					let data = resultData.pop();
					SetData(index, null, data);
					poolSymbol[index].resultRow = rowIndex;
				}
				// 轉動中 隨機更換符號
				else{
					let icon = GetRandomSymbolIcon()
					SetData(index, null, icon);
				}
			})
		}
	}

	this.GetIsSpining = function(){
		if(inSpinLoop == true){
			return true
		}
		return false
	}
};

module.exports = UISlotReel