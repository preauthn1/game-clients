var GameG = require("GameGlobal");
var UISlotReel = require("UISlotReel");
var poolReel = [];
var gameResultData = null

cc.Class({
	extends: cc.Component,
	
	Init(GameSetting){
		this.GameSetting = GameSetting

		this.uiPayResult = this.node.getComponent("UIPayResult")
		this.uiPayResult.init(this, this.GameSetting)

		let getSprite = function(object, name){
			let obj = cc.find(name, object)
			if (obj != null){
				let sp = obj.getComponent(cc.Sprite)
				if (sp != null){
					return sp.spriteFrame
				}
			}
			return null
		}

		let getObject = function(object, name){
			let obj = cc.find(name, object)
			if (obj != null){
				return obj
			}
			return null
		}


		this.symbolData = new Map();
		let symbol = cc.find("Symbol", this.node)
        var children = symbol.children;
        for (var i = 0; i < children.length; ++i) {		
			let object = children[i]
			let symbol = {}
			var names = object.name.split("#")
			if (names.length == 2){
				symbol.name = names[0]

				// 圖片資料
				symbol.sprite = []
				let normal = getSprite(object, names[1])
				symbol.sprite.push(normal)
				let blur = getSprite(object, names[1] + "_blur")
				symbol.sprite.push(blur)
				let light = getSprite(object, names[1] + "_light")
				symbol.sprite.push(light)				

				// 動畫資料
				symbol.ani = []
				symbol.ani.push(null)
				symbol.ani.push(null)
				let win = getObject(object, names[1] + "_win")
				symbol.ani.push(win)

				// 動畫pool
				symbol.aniPool = []
				symbol.aniPool.push([])
				symbol.aniPool.push([])
				symbol.aniPool.push([])
				
				this.symbolData.set(symbol.name, symbol)
			}
			else{
				console.error(object.name + " symbol資料格式錯誤\n格式: server符號名稱#object名稱\n如:B7#ng_B7")
			}
		}

		let rootPoolSymbol = cc.find("PoolSymbol", this.node)
		let rootPoolReel = cc.find("PoolReel", this.node)
		for(let i in rootPoolReel.children){
			let clone = cc.instantiate(rootPoolSymbol);
			clone.parent = rootPoolReel.children[i]
			clone.active = true

			let reel = rootPoolReel.children[i]
			poolReel[i] = new UISlotReel(reel)
			poolReel[i].Init(this, this.GameSetting.reelSpeed, i, this.GameSetting.symbolHeightScale)
		}
	},

	GetPoolReelCount(){
		return poolReel.length
	},

	GetPoolReel(index){
		return poolReel[index]
	},

	GetReelStopBtuuon(index){
		return this.GetPoolReel(index).GetStopButton()
	},

	// 0:normal 1:blur 2:light
	GetSymbol(name, type){
		if (this.symbolData.has(name) == false){
			return null
		}

		let data = this.symbolData.get(name)
		return data.sprite[type]
	},

	GetSymbolAni(name, type){
		if (this.symbolData.has(name) == false){
			return null
		}

		let symbolData = this.symbolData.get(name)
		let aniData = symbolData.ani[type]
		if (aniData == null)
			return null
		
		let aniPool = symbolData.aniPool[type]
		let obj = null
		if (aniPool.length == 0){
			obj = {}
			obj.name = name
			obj.type = type
			obj.root = cc.instantiate(aniData);
			obj.ani = obj.root.getComponent(cc.Animation)
		}
		else{
			obj = aniPool.shift();
		}

		return obj
	},	

	FreeSymbolAni(obj){
		if (this.symbolData.has(obj.name) == false){
			return
		}
		
		let data = this.symbolData.get(obj.name)
		data.aniPool[obj.type].push(obj)
	},

	Update(dt){
		for(let i in poolReel){
			poolReel[i].Update(dt)
		}

		if (this.isPlay == true){
			this.PlayAccTime += dt

			if (this.isTimeOutAutoStop == true) {
				if (this.PlayAccTime > this.GameSetting.autoStopTime){
					this.AutoStop(2, 1, 0)
				}
			}
		}
	},

	// 設定輪軸資料
	SetReelSetting(list){
		for(let i in list){
			poolReel[i].SetReelSetting(list[i])
		}	
	},
	
	// 開始旋轉
	StartSpin(stopOneBeginCB, stopAllFinishCB, stopOneFinishCB){
		if (this.isPlay == true){
			return
		}

		this.uiPayResult.showResultEnd()

		// 轉動結果
		gameResultData = null

		this.isPlay = true
		// 超過指定時間自動停止
		this.isTimeOutAutoStop = true
		// 停止flag 0:停止 1:轉動中 2:按下停止 3:停止中
		this.reelState = [1, 1, 1]
		// 轉動累計時間
		this.PlayAccTime = 0
		// 第一個按下停止的輪軸
		this.firstStopIndex = null
		
		// 一個輪軸開始停止
		this.stopOneBeginCB = stopOneBeginCB
		// 一個輪軸停止完成
		this.stopOneFinishCB = stopOneFinishCB
		// 全部停止完成
		this.stopAllFinishCB = stopAllFinishCB

		for(let i in poolReel){
			poolReel[i].StartSpin();
		}
	},
	
	SetGameResult(data){
		gameResultData = data

		this.uiPayResult.setPayData(data.PayAllDetail)

		for (let i = 0; i < this.reelState.length; ++i){
			if (this.reelState[i] == 2){
				this.StopSpinReel(i)
			}
		}
	},

	// 各別停止輪軸
	StopSpinReel(reelIndex){
		if (this.firstStopIndex == null){
			this.firstStopIndex = reelIndex
		}

		// 停止中不再處理停止
		if (this.reelState[reelIndex] == 3){
			return
		}

		// 按下停止
		this.reelState[reelIndex] = 2

		if (this.stopOneBeginCB != null){
			this.stopOneBeginCB(reelIndex)
		}

		if (gameResultData == null){
			console.error("gameResultData is null")
			return
		}

		// 停止中
		this.reelState[reelIndex] = 3

		let self = this;
		let data = gameResultData.ReelSetting[reelIndex]
		
		// 呼叫輪軸停止
		poolReel[reelIndex].SetStopSpin(data,function(){
			if (self.stopOneFinishCB != null){
				self.stopOneFinishCB(reelIndex)
			}

			self.reelState[reelIndex] = 0

			// 判斷是否全部停止
			let acc = 0
			for (let i = 0; i < self.reelState.length; ++i){
				acc += self.reelState[i]
			}
			
			// 全部停止
			if (acc == 0){
				self.isPlay = false

				if (self.stopAllFinishCB != null){
					self.stopAllFinishCB()

					self.uiPayResult.showResult()
				}
			}
		});
	},
	
	AutoStop(first = 0, second = 1, thrid = 2){
		this.isTimeOutAutoStop = false
		
		let self = this
		let accTimeInterval = 0

		if (this.reelState[first] == 1)
		{
			GameG.NewDelayOnce(function(){
				self.StopSpinReel(first)
			}, accTimeInterval, "AutoStop1");
			accTimeInterval += this.GameSetting.autoStopTimeInterval
		}

		if (this.reelState[second] == 1)
		{
			GameG.NewDelayOnce(function(){
				self.StopSpinReel(second)
			}, accTimeInterval, "AutoStop2");
			accTimeInterval += this.GameSetting.autoStopTimeInterval
		}
		
		if (this.reelState[thrid] == 1)
		{
			GameG.NewDelayOnce(function(){
				self.StopSpinReel(thrid)
			}, accTimeInterval, "AutoStop3");				
		}
	},
});