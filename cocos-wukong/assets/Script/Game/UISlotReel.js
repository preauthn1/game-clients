var GameG = require("GameGlobal");

function UISlotReel(root){
	let rootRect = root
	let rootPoolSymbol = cc.find("PoolSymbol",root) 
	let prefabSymbol = cc.find("PoolSymbol/Symbol",root)
	prefabSymbol.active = false
	
	let stopBtn = root.getComponent(cc.Button)

	let SymbolIcon = null
	let poolSymbol = []
	let rowCount = 0
	let symbolHeight = 0
	let sequenceSpin = null
	let inSpinLoop = false
	let refreshIndex = 0
	let refreshCount = 0
	let resultData = null
	let callbackStop = null

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
		poolSymbol[index].sprite = cc.find("Sprite",clone).getComponent(cc.Sprite);
		poolSymbol[index].txtSymbolName.string = index;
		poolSymbol[index].symbolId = null;
		poolSymbol[index].symbolName = null;
		poolSymbol[index].resultRow = null;
		poolSymbol[index].aniRoot = cc.find("AniRoot",clone);

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
            let border = Math.round(rootRect.position.y - rootRect.height * 0.5 - symbolHeight);
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

	// type 0:normal 1:blur
	let SetData = function(index, symbolId, symbolName, type = 0, symbolNameS = null){
		let symbol = poolSymbol[index]
		symbol.symbolId = symbolId;
		symbol.symbolName = symbolName;
		if (symbolNameS != null)
			symbol.txtSymbolName.string = symbolNameS.toString();
		else
		symbol.txtSymbolName.string = "";

		if (symbol.obj != null){
			uiSlot.FreeSymbolAni(symbol.obj);
			symbol.obj.root.active = false;
			symbol.obj = null
		}

		symbol.sprite.node.active = true

		let spriteFrame = uiSlot.GetSymbol(symbolName, type);
		if (spriteFrame == null)
			spriteFrame = uiSlot.GetSymbol(symbolName, 0);
		symbol.sprite.spriteFrame = spriteFrame;

		// 判斷是有動畫
		let obj = uiSlot.GetSymbolAni(symbolName, type);
		if (obj != null){
			symbol.obj = obj
			symbol.obj.root.parent = symbol.aniRoot
			symbol.obj.root.active = false
		}
	}

	let ClearBlurData = function(index){
		let symbol = poolSymbol[index]
		let spriteFrame = uiSlot.GetSymbol(symbol.symbolName, 0);
		symbol.sprite.spriteFrame = spriteFrame;
	}

	this.playAnimmationByRowIndex = function(row, ani){
		let index = GetIndexByResultRow(row)
		if (index == null){
			return
		}

		let symbol = poolSymbol[index]
		this.playAnimmation(symbol, ani)
	}

	this.playAnimmationBySymbolID = function(id, ani){
		for(let i in poolSymbol){
			if(poolSymbol[i].symbolId == id){
				this.playAnimmation(poolSymbol[i], ani)
			}
		}
	}

	this.playAnimmation = function(symbol, ani){
		if (symbol == null){
			console.error("symbol is null", row)
			return
		}

		if (symbol.obj == null){
			console.error("symbol.obj is null", row, poolSymbol)
			return
		}

		symbol.sprite.node.active = false

		let clipps = symbol.obj.ani.getClips()
		if (clipps[ani] != null){
			symbol.obj.root.active = true;
			symbol.obj.ani.play(clipps[ani].name, true)
		}
		else{
			console.error("can not find ani index", ani)
		}
	}

	this.stopAllAnimation = function(){
		for (let i = 1; i <= rowCount; ++i){
			this.stopAnimationByRow(i)
		}
	}

	this.stopAnimationByRow = function(row){
		let index = GetIndexByResultRow(row)
		if (index == null){
			return
		}

		let symbol = poolSymbol[index]
		if (symbol == null){
			console.error("symbol is null", row)
			return
		}

		if (symbol.obj == null){
			//console.error("symbol.obj is null", row)
			return
		}

		symbol.sprite.node.active = true
		symbol.obj.root.active = false

		if (symbol.obj.ani != null){
			symbol.obj.ani.stop()
		}
	}

	let GetRandomSymbolIcon = function(){
		let iconName = SymbolIcon[GameG.RandomInt(0, SymbolIcon.length)]
		return iconName
	}

	// 轉動前設定
	this.SetReelSetting = function(data){
		SymbolIcon = data.Symbol;
		rowCount = data.RowCount;
		symbolHeight = root.height / rowCount * symbolHeightScale;

		for(let i = 0; i < rowCount +2; ++i){
			CreateCloneSymbol(i);

			let icon = GetRandomSymbolIcon()
			SetData(i, null, icon, 0)
		}
		this.ResetSpin()
	}

	this.ResetSpin = function(){
		this.stopAllAnimation()

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

		let x = rootPoolSymbol.position.x;
		let y = rootPoolSymbol.position.y  + symbolHeight * spinOutBackDistance;
		sequenceSpin = GameG.NewTween(rootPoolSymbol)
			.to(spinOutBackTime, {position: cc.v2(x, y)})
			.call(function(){
				sequenceSpin = null;
				inSpinLoop = true;			
			})
			.start()
	}
	
	this.SetStopSpin = function(data, callback){
		resultData = data;
		callbackStop = callback
	}
	
	let StopSpin = function(){
		let x = rootPoolSymbol.position.x;
		let y = -poolSymbol[GetIndexByResultRow(1)].root.position.y + symbolHeight;
		sequenceSpin = GameG.NewTween(rootPoolSymbol)
			.to(spinOutBackTime, {position: cc.v2(x, y)})
			.call(function(){
				sequenceSpin = null;
				if(callbackStop != null){
					for(let i = 0; i < poolSymbol.length; ++i){
						let index = GetIndexByRow(i)
						ClearBlurData(index);
					}

					callbackStop();
				}			
			})
			.start()
	}

	this.Update = function(dt){
		if(inSpinLoop == true){
			let _x = rootPoolSymbol.position.x;
			let _y = rootPoolSymbol.position.y;
			let _timer = dt * reelSpeed;
			let movePercent = 0.1;
			_y = _y + symbolHeight * movePercent * -1 * _timer;
			rootPoolSymbol.position = cc.v2(_x, _y);

			let stopIndex = GetIndexByResultRow(1)
            if(poolSymbol[stopIndex] != null){
                let border = Math.round(rootRect.position.y + rootRect.height * 0.5);
                let symbolTop = Math.round(poolSymbol[stopIndex].root.position.y + rootPoolSymbol.position.y + symbolHeight * 0.5);
                let outBack = symbolHeight * spinOutBackDistance; // 回彈的幅度
                if(symbolTop + outBack <= border){
                    inSpinLoop = false;
                    StopSpin();
                }
            }

			RefreshPosition(function(index){
				// 轉動停止 更換結果符號
				if(resultData != null && resultData.length > 0){
					let rowIndex = resultData.length;
					let data = resultData.shift();
					SetData(index, data.SymbolID, data.SymbolName, 2, data.SymbolNameS);
					poolSymbol[index].resultRow = rowIndex;
				}
				// 轉動中 隨機更換符號
				else{
					let icon = GetRandomSymbolIcon()
					SetData(index, null, icon, 1);
				}
			})
		}
	}

	this.GetIsSpining = function(){
		if(sequenceSpin != null){
			return true
		}

		if(inSpinLoop == true){
			return true
		}
		return false
	}
};

module.exports = UISlotReel