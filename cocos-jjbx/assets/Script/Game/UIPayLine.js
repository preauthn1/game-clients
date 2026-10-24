var HallG = require("Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var poolLine = []
var poolLeft = []
var poolRight = []
var layoutWorldPos = []
var sizeMoney = 1
// 這要依照換線時間
var payLineTime = 0.9

/** 用途: 盤面上的賠付線 */
var UIPayLine = {
	extends: cc.Component,

//離開遊戲
	onExit(){
	
	for(let k in (poolLine)){ 
	let v = poolLine[k] 
 
			poolLine[k] = null 
		}
	},

	Init(root){
		this.rootRect = root
		
		this.rootLeft = cc.find("RootLeft",root)
		if(this.rootLeft != null){
			this.rootLeft.active =(false)
		}
		
		this.rootRight = cc.find("RootRight",root)
		if(this.rootRight != null){
			this.rootRight.active =(false)
		}
		
	    this.prefab = cc.find("PayLine",root)
		this.prefab.active =(false)
		
		this.rootMoney = cc.find("RootMoney",root)
		this.txtMoney = cc.find("RootMoney/Text",root).getComponent("TextControl")

		this.particlePool = cc.find("ParticlePool",root).getComponent("ObjectPool")
	},

	Update(dt){

        if(this.MoneyLerp != this.Money){
			this.SetMoney(Math.floor(cc.misc.lerp(0, this.Money, (new Date().getTime() - this.startTime) / this.showTime)))
			if(this.MoneyLerp >= this.Money){
				if(this.callback != null){
					this.callback()	
				}
			}
		}
	},

	CreateClone(index){
		if(poolLine[index] != null) { return poolLine[index] }
		let clone = cc.instantiate(this.prefab)
		if(clone == null){ return null }
		clone.parent =(this.prefab.parent)
		clone.position = cc.v3(0, 0, 0)
		clone.scale = 1
		clone.name = this.prefab.name + index
		
		poolLine[index] = {}
		poolLine[index].lineRenderer = clone.getComponent("LineRenderer")
	},
	
	SetTotal(count){
		for(let i = 1; i <= count; ++i){
			CreateClone(i)
			poolLeft[i] = cc.find("RootLeft/PayLineID ("+ i +")" ,this.rootRect)
			if(poolLeft[i] != null ){
				poolLeft[i] = poolLeft[i]
			}
			poolRight[i] = cc.find("RootRight/PayLineID ("+ i +")",this.rootRect)
			if(poolRight[i] != null ){
				poolRight[i] = poolRight[i]
			}
		}	
		for(let k in (poolLine)){ 
			let v = poolLine[k] 

			poolLine[k].lineRenderer.node.active =(false)
			poolLine[k].lineRenderer.show(false)
			poolLine[k].lineRenderer.positionCount = 0
			poolLine[k].offsetY = 0 // 偏移值
		}	
	},

	SetLayoutWorldPos(data){
		layoutWorldPos = data
	},

// 顯示介面
	SetGameResult(payGroups){
		
		if(payGroups == null){
			console.log("沒有 PayGroup")
			return
		}
		
		let compare = function(reelA,reelB){		
			return reelA.Reel < reelB.Reel
		}
			
		for(let k1 in (payGroups)){ 
			let v1 = payGroups[k1] 

			
			if(v1.PayLines != null && v1.PayLines.length > 0){
				let payLineID = v1.PayLines.PayLineID
	
				table.sort(v1.PayLines.Positions, compare)
	
				poolLine[payLineID].lineRenderer.positionCount = 0
				for(let k2 in (v1.PayLines.Positions)){ 
					let v2 = v1.PayLines.Positions[k2] 

					if(layoutWorldPos[v2.Reel] != null){
				// 因layoutWorldPos是初始設定的，沒有換算過螢幕解析度的縮放
						let targetPos = layoutWorldPos[v2.Reel][v2.Row] * gameData.CameraScale
						this.SetPosition(payLineID,v2.Reel,targetPos)
					}
				}
			}		
		}
	},

	SetMoney(money){
		this.MoneyLerp = money
		this.txtMoney.string = GameG.FormatNum(money)	
	},

// 傳入類型
// (nil,nil) 顯示全部有中獎的賠付線
// (value,nil) 顯示金額
// (value,value) 顯示金額，顯示中獎的賠付線
	Show(money, index){
	// 判斷是否顯示賠付線
		for(let k in (poolLine)){ 
			let v = poolLine[k] 

		// 判斷是否有連線
			let isShow = (poolLine[k].lineRenderer.positionCount >0)
		// 總結算
			if(index == null){
				poolLine[k].lineRenderer.active =(isShow)
		// 指定賠付線
			} 
			else{
			// 判斷是否為指定賠付線
				let isSome = (index == k)
				poolLine[k].lineRenderer.active =(isShow && isSome)
			}
		}
		
		this.txtMoney.node.scale = sizeMoney
		
	// 判斷是否顯示金額
		if(money != null && money > 0){
			this.rootMoney.active =(true)
		// 總結算
			if(index == null){
				this.MoneyLerp = 0
				this.Money = money
				this.showTime = gameData.GetMoneyShowTimer(money)
				this.startTime = new Date().getTime()
				
			} 
			// 指定賠付線
			else{
				this.AnimMoney()
				this.SetMoney(money)	
			}
		}
		
		if(poolLine[index] != null){
		// 需靠左邊邊線
			let posIndex = 3
		// 將金額的位置調整至賠付線的中間位置
			if(poolLine[index].lineRenderer.positionCount > posIndex){
				this.rootMoney.position = poolLine[index].lineRenderer.getPosition(posIndex)
			}
			
		// 飛特效
			let offsetPostion = cc.v2(25, 0)
			let startPosition = null
			let endPosition = null
			let runPosition = []
			if(linkType == "left"){				
				for(let  i = 0;  i < poolLine[index].lineRenderer.positionCount; ++ i){
					runPosition.push(poolLine[index].lineRenderer.getPosition(i))
				}
				startPosition = runPosition[0].sub(offsetPostion)
				endPosition = runPosition[runPosition.length -1].add(offsetPostion)
			}
			else{
				for(let  i = poolLine[index].lineRenderer.positionCount -1;  i >= 0; -- i){
					runPosition.push(poolLine[index].lineRenderer.getPosition(i))
				}
				startPosition = runPosition[0].add(offsetPostion)
				endPosition = runPosition[runPosition.length -1].sub(offsetPostion)
			}

			this.ShowParticlePayline(runPosition)
		} 
		else{
			this.rootMoney.position = cc.v3(0, 0, 0)
		}
	},

// 關閉介面
	Hide(){	
		this.rootMoney.active =(false)
		this.txtMoney.string = ""
		for(let k in (poolLine)){ 
			let v = poolLine[k] 

			poolLine[k].lineRenderer.active =(false)
		}
	},

	ShowParticlePayline(runPosition){
		let clone = this.particlePool.get("payline")
		clone.active = true
		clone.parent = this.particlePool.node
		clone.position = cc.v2(0, 0)

		let particle = clone.getComponent("AnimationParticle")
		this.recycleParticle.push(clone)

		let speed = payLineTime / (runPosition.length -1)
		for(let i in particle.node.children){
			let child = particle.node.children[i]
			child.active = false
			child.position = runPosition[0]
			
			let particleChild = child.getComponent(cc.ParticleSystem)
			
			let sequence = GameG.NewTween(child)
			sequence.delay(0.05 * i)
			sequence.call(function(){
				child.active = true
				particleChild.resetSystem()
			})
			for(let i in runPosition){
				if(i > 0){
					sequence.to(speed, { position: runPosition[i]})
				}
			}
			sequence.call(function(){
				particleChild.stopSystem()
			})
			sequence.start()
		}

		let self = this
		let sequenceRecycle = GameG.NewTween(clone)
		sequenceRecycle.delay(2)
		sequenceRecycle.call(function(){
			clone.position = cc.v2(10000, 10000)
			particle.stop()
		})
		sequenceRecycle.delay(2)
		sequenceRecycle.call(function(){
			self.particlePool.free("payline", clone)
		})
		sequenceRecycle.start()
	},
	
// (第幾條賠付線,位置)
	SetPosition(index, reelIndex, position){
		if(poolLine[index].lineRenderer == null){
			return
		}
				
		let SetPoolLinePosition = function(pool,root){
			if(pool[index] != null){
				poolLine[index].lineRenderer.positionCount = poolLine[index].lineRenderer.positionCount +1
				let _x = pool[index].position.x + root.position.x
				let _y = pool[index].position.y + root.position.y
				poolLine[index].lineRenderer.setPosition(poolLine[index].lineRenderer.positionCount -1, cc.v3(_x, _y, 0))
			} 
			else if(root != null){

				let _x = root.position.x
				let _y = position.y
				poolLine[index].lineRenderer.positionCount = poolLine[index].lineRenderer.positionCount +1
				poolLine[index].lineRenderer.setPosition(poolLine[index].lineRenderer.positionCount -1, cc.v3(_x, _y, 0))
			}
		}
		
	// 增加第一個點
		if(reelIndex == 1){	
			SetPoolLinePosition(poolLeft, this.rootLeft)	
		}
			
	// 計算偏移量
		if(gameData.PayLineOffset == true){
		// 依照第一輪軸與 poolLeft 的高度差
			if(reelIndex == 1 && poolLeft[index] != null){
				poolLine[index].offsetY = poolLeft[index].position.y - position.y			
		// 依照第五輪軸與 poolRight 的高度差
			} 
			else if(reelIndex == 5 && poolRight[index] != null){

				poolLine[index].offsetY = poolRight[index].position.y - position.y
			}
		}
			
		let _x = position.x
		let _y = position.y + poolLine[index].offsetY
		poolLine[index].lineRenderer.positionCount = poolLine[index].lineRenderer.positionCount +1
		poolLine[index].lineRenderer.setPosition(poolLine[index].lineRenderer.positionCount -1, cc.v3(_x, _y, 0))
		
	// 增加最後個點
		if(reelIndex == 5){
			SetPoolLinePosition(poolRight, this.rootRight)
		}	
	},

// 回合開始
	SetGameStart(){	
		
	},

// 回合結束
	SetGameEnd(){
		
	},

	SetStartSpin(){
		this.rootMoney.active =(false)
		this.txtMoney.string = ""
		for(let k in (poolLine)){ 
			let v = poolLine[k] 

			poolLine[k].lineRenderer.node.active =(false)
			poolLine[k].lineRenderer.show(false)
			poolLine[k].lineRenderer.positionCount = 0
			poolLine[k].offsetY = 0
		}
	},

// 獲得金額動畫
	AnimMoney(){
		this.txtMoney.node.scale = 0
		
		let sequence = GameG.NewTween(this.txtMoney.node)
		.to(0.2, { scaleX: 0.8 * sizeMoney, scaleY: 1.3 * sizeMoney})
		.to(0.1, { scaleX: 1.2 * sizeMoney, scaleY: 0.9 * sizeMoney})
		.to(0.1, { scaleX: 0.9 * sizeMoney, scaleY: 1.2 * sizeMoney})
		.to(0.1, { scaleX: 1.1 * sizeMoney, scaleY: 1.0 * sizeMoney})
		.to(0.1, { scaleX: 1.0 * sizeMoney, scaleY: 1.0 * sizeMoney})
		.start()		
	},


};

module.exports = UIPayLine
