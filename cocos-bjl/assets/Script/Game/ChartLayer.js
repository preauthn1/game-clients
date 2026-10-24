var G = require("Global")
var GameG = require("GameGlobal")
var ChartLayer = require("ChartLayer")
var bit = require("BitHelper")
var gameData = require("GameData")

var BeadRoadCount = 10
var BigRoadCount = 27
var BigRoadCountRow = 60
var BigRoadCountColumn = 60
var SmallRoadCount1 = 24
var SmallRoadCount2 = 24
var SmallRoadCount3 = 24
var colorN = 0
var colorRed = 3
var colorGreen = 2
var colorBlue = 1
//- 更新界面
var resultMap = [ 0, 3, 1, 2 ]
// .length
var BigRoadPosX
var BigRoadPosY
var LastResult
var BigRoadMap
var BigRoadMapCount
// 暫存大路單,並產生小路單
// result 1:blue 2:green 3:red
var tempLastResult
var tempBigRoadPosX
var tempBigRoadPosY
var tempChangeBigRoadPosX
var tempChangeBigRoadPosY
var isBeginSmallRoad1 = false

var ChartLayer = {
	extends: cc.Component,

//-
	init(){                     // 
	    this.initUi()
	},

//-
	onExit(){
	},

//-
	initUi(){
    // 
	    let canvas = cc.find("Canvas/GameLayer")
	    let root = cc.find("GameLayer/ChartLayer",canvas)
	    this.uiRoot = {}
	    this.uiRoot.root = root
	    let uiRoot = this.uiRoot
		
		example.invalid = {}
		example.invalid.titleValue1 = cc.find("info/title1_value",root).getComponent(cc.Label)
		example.invalid.titleValue2 = cc.find("info/title2_value",root).getComponent(cc.Label)
		example.invalid.titleValue3 = cc.find("info/title3_value",root).getComponent(cc.Label)	
		example.invalid.value1 = cc.find("info/value_1",root).getComponent(cc.Label)
		example.invalid.value2 = cc.find("info/value_2",root).getComponent(cc.Label)
		example.invalid.value3 = cc.find("info/value_3",root).getComponent(cc.Label)
		example.invalid.value4 = cc.find("info/value_4",root).getComponent(cc.Label)
		example.invalid.titleValue1.string = "0"
		example.invalid.titleValue2.string = "0"
		example.invalid.titleValue3.string = "0"
		example.invalid.value1.text = "0"
		example.invalid.value2.text = "0"
		example.invalid.value3.text = "0"
		example.invalid.value4.text = "0"
		
		uiRoot.down = {}
		uiRoot.down.blueR1 = cc.find("Next/blue/r1",root).getComponent(cc.Sprite)
		uiRoot.down.blueB1 = cc.find("Next/blue/b1",root).getComponent(cc.Sprite)
		uiRoot.down.blueR2 = cc.find("Next/blue/r2",root).getComponent(cc.Sprite)
		uiRoot.down.blueB2 = cc.find("Next/blue/b2",root).getComponent(cc.Sprite)
		uiRoot.down.blueR3 = cc.find("Next/blue/r3",root).getComponent(cc.Sprite)
		uiRoot.down.blueB3 = cc.find("Next/blue/b3",root).getComponent(cc.Sprite)
		uiRoot.down.redR1 = cc.find("Next/red/r1",root).getComponent(cc.Sprite)
		uiRoot.down.redB1 = cc.find("Next/red/b1",root).getComponent(cc.Sprite)
		uiRoot.down.redR2 = cc.find("Next/red/r2",root).getComponent(cc.Sprite)
		uiRoot.down.redB2 = cc.find("Next/red/b2",root).getComponent(cc.Sprite)
		uiRoot.down.redR3 = cc.find("Next/red/r3",root).getComponent(cc.Sprite)
		uiRoot.down.redB3 = cc.find("Next/red/b3",root).getComponent(cc.Sprite)
		this.ClearSamllRoadNext()
		
		//胜率用纪录
		this.Rate = []
		
		//珠盘路
		this.InitBeadRoad(root)
		
		//大路
		this.InitBigRoad(root)

		this.InitBigRoadMapData()
		
		//大眼仔
		this.CreateSmallRoad1()
		//小路
		this.CreateSmallRoad2()
		
		//小強路
		this.CreateSmallRoad3()
	},

	CreateClone(perfab){
		let clone = cc.instantiate(perfab)
		if(clone == null){ return null }
		clone.parent =(perfab.parent)
		clone.position = cc.v3(0, 0, 0)
		clone.scale = 1
		return clone
	},

	//- 更新界面
	update(data){
		
	},

	addRst(data,effect,round){
		let result = 0
		for(let i = 1; i <= 10; ++i){
	        if(bit.band(data.ZuHe, gameData.dtRstType[i].bit) != 0 ){
				result = resultMap[i]
				break
			}
		}	
		
		let sideL = 0
		if(bit.band(data.ZuHe, gameData.dtRstType[7].bit) != 0 ){
			sideL = 1
		}
		let sideR = 0
		if(bit.band(data.ZuHe, gameData.dtRstType[6].bit) != 0 ){
			sideR = 2
		}

		//清掉所有路单
		if(round == 1 ){
			LastResult = 0
			
			this.ClearBeadRoad()
			this.ClearBigRoad()
			
			this.InitBigRoadMapData()
			this.ClearSmallRoad1()
			this.ClearSmallRoad2()
			this.ClearSmallRoad3()
			this.ClearSamllRoadNext()
		}

		this.UpdateBeadRoad(result,sideL,sideR,effect)
		this.UpdateBigRoad(result,effect)

		if(result != colorN && result != colorGreen ){
			this.UpdateBigRoadMapData(result, false)
			this.UpdateSmallRoad1()
			this.UpdateSmallRoad2()
			this.UpdateSmallRoad3()
			this.UpdateSmallRoadNextBlue()
			this.UpdateSmallRoadNextRed()
			this.SetRound()
		}
	},

	// ******************** 大路單
	InitBigRoad(root){
		this.BigRoadUse = 1
		this.BigRoadObj = {}
		this.BigRoadObj.grid = {}
		this.BigRoadObj.grid.rect = cc.find("BigRoad/Grid",root)
		this.BigRoadObj.grid.layout = cc.find("BigRoad/Grid",root).getComponent(cc.Layout)
		this.BigRoadObj.grid.perfab = cc.find("BigRoad/Grid/Content",root)
		this.BigRoadObj.grid.initPos = this.BigRoadObj.grid.rect.position

		this.BigRoad = []
		for(let  i = 1;  i <= BigRoadCount; ++i){
			this.CreateBigRoad()
		}	
	},

	CreateBigRoad(){
		let perfab = this.BigRoadObj.grid.perfab
		let clone = this.CreateClone(perfab)
		
		let index = this.BigRoad.length
		if (index == 0)
			index = 1
		
		clone.name = "Content_" + index
		this.BigRoad[index] = []
		clone.active =(true)
		
		if (this.BigRoadObj.grid.root == null)
			this.BigRoadObj.grid.root = []
		this.BigRoadObj.grid.root[index] = clone

		for(let j = 1; j <= clone.childrenCount; ++j){	
			this.BigRoad[index][j] = {}
			this.BigRoad[index][j].root = cc.find("Item_"+j,clone)
			this.BigRoad[index][j].img = cc.find("Item_"+j+"/Image",clone).getComponent(cc.Sprite)
			this.BigRoad[index][j].txt = cc.find("Item_"+j+"/Text",clone).getComponent("TextControl")
			this.BigRoad[index][j].root.active =(true)
			this.BigRoad[index][j].img.node.active =(false)
			this.BigRoad[index][j].txt.node.active =(false)
			this.BigRoad[index][j].txt.text = ""
			this.BigRoad[index][j].resultUse = 0   //結果
			this.BigRoad[index][j].columnUse = 0     //
			this.BigRoad[index][j].HuCount = 0     //和的次数
		}
	},

	UpdateBigRoad(result,effect){
		if(result == 0 ){
			return
		}

		let row = 1
		for(let  i = this.BigRoadUse;  i < this.BigRoad.length; ++i){
			for(let  j = row;  j < this.BigRoad[i].length; ++j){
				if(i != this.BigRoadUse && j != row ){
					break
				} 
				else if(this.BigRoad[i][j].resultUse == 0 ){
					this.BigRoadObj.grid.root[i].active =(true)
					let obj = this.BigRoad[i][j]				
					if(result == 2 ){
						if(this.BigRoadLast != null ){
							obj = this.BigRoadLast
						}
						obj.txt.node.active =(true)
						obj.HuCount = obj.HuCount + 1
						obj.txt.text = obj.HuCount.toString()
						if(effect == true ){
							this.ShowEffect(obj.txt)
						}
					} 
					else{
						obj.img.node.active =(true)
						obj.resultUse = result
						obj.columnUse = this.BigRoadUse
						if(effect == true ){
							this.ShowEffect(obj.img)
						}
						if(result == 1 ){
							GameG.SetImageSprite(obj.img, G.GetGamePName(), "eye_blue")
						} 
						else if(result == 2 ){
							GameG.SetImageSprite(obj.img, G.GetGamePName(), "eye_green")
						} 
						else if(result == 3 ){
							GameG.SetImageSprite(obj.img, G.GetGamePName(), "eye_red")					
						} 
						else{
							obj.img.node.active =(false)
							obj.txt.node.active =(false)
							obj.resultUse = 0
							obj.columnUse = 0
							obj.HuCount = 0
							obj.txt.text = ""
						}
					}
					
					this.ShowCurrentResult(this.BigRoad,i,BigRoadCount,this.BigRoadObj.grid)
					return
				} 
				//不同结果换行
				else if(this.BigRoad[i][1].resultUse == 1 && result == 3 ){
					this.BigRoadUse = this.BigRoadUse+1
					row = 1
					break
				} 
				//不同结果换行
				else if(this.BigRoad[i][1].resultUse == 3 && result == 1 ){
					this.BigRoadUse = this.BigRoadUse+1
					row = 1
					break				
				} 
				//其他结果已使用向右排序
				else if(this.BigRoad[i][j].resultUse != result && result != 2 ){
					row = j -1
					this.BigRoadLast = this.BigRoad[i][row]
					break
				} 
				//其他结果已使用向右排序
				else if(this.BigRoad[i][j].columnUse != this.BigRoadUse ){
					row = j -1
					this.BigRoadLast = this.BigRoad[i][row]
					break
				} 
				//到底向右排序
				else if(j == this.BigRoad[i].length ){
					row = j
					this.BigRoadLast = this.BigRoad[i][row]
					break
				} 
				else{
					this.BigRoadLast = this.BigRoad[i][j]
				}
			}
		}
		
		this.CreateBigRoad()
		this.UpdateBigRoad(result,effect)
	},

	ClearBigRoad(){
		this.BigRoadUse = 1
		this.BigRoadLast = null
		this.BigRoadObj.grid.rect.position = this.BigRoadObj.grid.initPos

		for(let i = 1; i < this.BigRoad.length; ++i){
			this.BigRoadObj.grid.root[i].active =(i <= BigRoadCount)
			for(let j = 1; j < this.BigRoad[i].length; ++j){
				this.BigRoad[i][j].img.node.active =(false)
				this.BigRoad[i][j].txt.node.active =(false)
				this.BigRoad[i][j].resultUse = 0
				this.BigRoad[i][j].columnUse = 0
				this.BigRoad[i][j].HuCount = 0
				this.BigRoad[i][j].txt.text = ""
			}
		}
	},	

	// ******************** 珠盘路
	InitBeadRoad(root){
		this.BeadRoadObj = {}
		this.BeadRoadObj.grid = {}
		this.BeadRoadObj.grid.rect = cc.find("BeadRoad/Grid",root)
		this.BeadRoadObj.grid.layout = cc.find("BeadRoad/Grid",root).getComponent(cc.Layout)
		this.BeadRoadObj.grid.perfab = cc.find("BeadRoad/Grid/Content",root)
		this.BeadRoadObj.grid.initPos = this.BeadRoadObj.grid.rect.position

		this.BeadRoad = []
		for(let  i = 1;  i <= BeadRoadCount; ++i){
			this.CreateBeadRoad()
		}
	},

	CreateBeadRoad(){
		let perfab = this.BeadRoadObj.grid.perfab
		let clone = this.CreateClone(perfab)
		let index = this.BeadRoad.length
		if (index == 0)
			index = 1
		this.BeadRoad[index] = []
		clone.active =(true)

		if (this.BeadRoadObj.grid.root == null)
			this.BeadRoadObj.grid.root = []
		this.BeadRoadObj.grid.root[index] = clone

		for(let j = 1; j <= clone.childrenCount; ++j){
			this.BeadRoad[index][j] = {}
			this.BeadRoad[index][j].root = cc.find("Item_"+j,clone)
			this.BeadRoad[index][j].img = cc.find("Item_"+j+"/Image",clone).getComponent(cc.Sprite)
			this.BeadRoad[index][j].imgR = cc.find("Item_"+j+"/ImageR",clone).getComponent(cc.Sprite)
			this.BeadRoad[index][j].imgL = cc.find("Item_"+j+"/ImageL",clone).getComponent(cc.Sprite)
			this.BeadRoad[index][j].root.active =(true)
			this.BeadRoad[index][j].resultUse = false
			this.BeadRoad[index][j].img.node.active =(false)
			this.BeadRoad[index][j].imgR.node.active =(false)
			this.BeadRoad[index][j].imgL.node.active =(false)
		}
	},

	UpdateBeadRoad(result,sideL,sideR,effect){
		if(result == 0 ){
			return
		}
		if(result > 3 ){
			return
		}

		for(let  i = 1;  i < this.BeadRoad.length; ++i){
			for(let  j = 1;  j < this.BeadRoad[i].length; ++j){
				if(this.BeadRoad[i][j].resultUse == false ){
					this.BeadRoad[i][j].resultUse = true

					let obj = this.BeadRoad[i][j].img
					let iconName = ""
					if(result == 1 ){
						iconName = "roadmap_blue"
					} 
					else if(result == 2 ){

						iconName = "roadmap_green"
					} 
					else if(result == 3 ){

						iconName = "roadmap_red"
					}

					obj.node.active =(true)
					GameG.SetImageSprite(obj, G.GetGamePName(), iconName)
				
					if(effect == true ){
						this.ShowEffect(obj)
					}
								
					this.ShowCurrentResult(this.BeadRoad,i,BeadRoadCount,this.BeadRoadObj.grid)
					
					this.BeadRoad[i][j].imgR.node.active =(false)
					this.BeadRoad[i][j].imgL.node.active =(false)	
					this.UpdateSideIcon(this.BeadRoad[i][j],sideL,effect)
					this.UpdateSideIcon(this.BeadRoad[i][j],sideR,effect)
					return
				}
			}
		}
		
		this.CreateBeadRoad()
		this.UpdateBeadRoad(result,sideL,sideR,effect)
	},

	ClearBeadRoad(){
		this.BeadRoadObj.grid.rect.position = this.BeadRoadObj.grid.initPos

		for(let i = 1; i < this.BeadRoad.length; ++i){
			this.BeadRoadObj.grid.root[i].active =(i <= BeadRoadCount)
			for(let j = 1; j < this.BeadRoad[i].length; ++j){
				this.BeadRoad[i][j].resultUse = false
				this.BeadRoad[i][j].img.node.active =(false)
				this.BeadRoad[i][j].imgR.node.active =(false)
				this.BeadRoad[i][j].imgL.node.active =(false)
			}
		}
	},

	UpdateSideIcon(obj,side,effect){	
		if(side == 0 ){
			return
		}
		
		let image
		let iconName
		if(side == 1 ){
			image = obj.imgR
			iconName = "roadmap_point_blue"
		} 
		else if(side == 2 ){

			image = obj.imgL
			iconName = "roadmap_point_red"
		} 
		else{
			console.log(".length UpdateSideIcon error !! side " + side.toString)
			return
		}
			
		image.node.active =(true)
		GameG.SetImageSprite(image, G.GetGamePName(), iconName)
		if(effect == true ){
			this.ShowEffect(image.node)
		}
	},	

	ShowEffect(obj){
		obj.node.opacity = 1

		var tween = cc.tween(obj.node)
		tween.to(0.5, {opacity: 0})
		tween.to(0.5, {opacity: 255})
		tween.to(0.5, {opacity: 0})
		tween.to(0.5, {opacity: 255})
		tween.start()
	},

	ShowCurrentResult(pool,column,columnMax,grid){
		let count = G.CaseWhen( column < columnMax, 0, column - columnMax)
		let item = grid.perfab.width
		grid.rect.position = cc.v2(item * count * -1 + grid.initPos.x, grid.initPos.y)
	},

	SetRound(){
		if (gameData.resultRound == null)
			return

		example.invalid.value1.text = parseInt(gameData.resultRound.ZhuangWin)
		example.invalid.value2.text = parseInt(gameData.resultRound.XianWin)
		example.invalid.value3.text = parseInt(gameData.resultRound.HeWin)
		example.invalid.value4.text = parseInt(gameData.resultRound.RoundID)
	},
 
	SetSetting(data){
		example.invalid.titleValue1.string = GameG.FormatNum(data.ZhuangXian.Min) + "-"+ GameG.FormatNum(data.ZhuangXian.Max)
		example.invalid.titleValue2.string = GameG.FormatNum(data.HeRange.Min) + "-"+ GameG.FormatNum(data.HeRange.Max)
		example.invalid.titleValue3.string = GameG.FormatNum(data.DuiZi.Min) + "-"+ GameG.FormatNum(data.DuiZi.Max)
	},

	InitBigRoadMapData(){
		BigRoadPosX = 0
		BigRoadPosY = 0
		LastResult = 0
		BigRoadMap = []
		BigRoadMapCount = []
		for(let i = 1;  i <= BigRoadCountRow; ++i){
			BigRoadMap[i] = []
			BigRoadMapCount[i] = 0
			for(let j = 1;  j <= BigRoadCountColumn; ++j){
				BigRoadMap[i][j] = 0
			}
		}
	},

	UpdateBigRoadMapData(result, isTest){
		// 測次模式記錄目前位置
		if(isTest == true ){
			tempLastResult = LastResult
			tempBigRoadPosX = BigRoadPosX
			tempBigRoadPosY = BigRoadPosY
		}
		// 顏色不一樣,換行
		if(LastResult != result ){
			BigRoadPosX = BigRoadPosX + 1
			BigRoadPosY = 0
		}
		
		LastResult = result
		BigRoadPosY = BigRoadPosY + 1
		BigRoadMap[BigRoadPosX][BigRoadPosY] = result
		BigRoadMapCount[BigRoadPosX] = BigRoadMapCount[BigRoadPosX] + 1
		
		// 測次模式記錄修改後位置
		if(isTest == true ){
			tempChangeBigRoadPosX = BigRoadPosX
			tempChangeBigRoadPosY = BigRoadPosY
		}
	},

	// 恢復測試
	RestoreUpdateBigRoadMapData(){
		// 恢復記錄目前位置
		LastResult = tempLastResult
		BigRoadPosX = tempBigRoadPosX
		BigRoadPosY = tempBigRoadPosY
		
		// 恢復修改後位置
		BigRoadMap[tempChangeBigRoadPosX][tempChangeBigRoadPosY] = 0
		BigRoadMapCount[tempChangeBigRoadPosX] = BigRoadMapCount[tempChangeBigRoadPosX] - 1
	},

	ClearSamllRoadNext(){
		this.uiRoot.down.redR1.node.active =(false)
		this.uiRoot.down.redB1.node.active =(false)
		this.uiRoot.down.redR2.node.active =(false)
		this.uiRoot.down.redB2.node.active =(false)
		this.uiRoot.down.redR3.node.active =(false)
		this.uiRoot.down.redB3.node.active =(false)
		
		this.uiRoot.down.blueR1.node.active =(false)
		this.uiRoot.down.blueB1.node.active =(false)
		this.uiRoot.down.blueR2.node.active =(false)
		this.uiRoot.down.blueB2.node.active =(false)
		this.uiRoot.down.blueR3.node.active =(false)
		this.uiRoot.down.blueB3.node.active =(false)
	},

	UpdateSmallRoadNextRed(){
		this.UpdateBigRoadMapData(colorRed, true)
		
		let value1 = this.GetSmallRoad1()
		if(value1 == colorRed ){
			this.uiRoot.down.redR1.node.active =(true)
			this.uiRoot.down.redB1.node.active =(false)
		} 
		else if(value1 == colorBlue ){
			this.uiRoot.down.redR1.node.active =(false)
			this.uiRoot.down.redB1.node.active =(true)
		}
		
		let value2 = this.GetSmallRoad2()
		if(value2 == colorRed ){
			this.uiRoot.down.redR2.node.active =(true)
			this.uiRoot.down.redB2.node.active =(false)
		} 
		else if(value2 == colorBlue ){
			this.uiRoot.down.redR2.node.active =(false)
			this.uiRoot.down.redB2.node.active =(true)
		}
		
		let value3 = this.GetSmallRoad3()
		if(value3 == colorRed ){
			this.uiRoot.down.redR3.node.active =(true)
			this.uiRoot.down.redB3.node.active =(false)
		} 
		else if(value3 == colorBlue ){
			this.uiRoot.down.redR3.node.active =(false)
			this.uiRoot.down.redB3.node.active =(true)
		}
		
		this.RestoreUpdateBigRoadMapData()
	},

	UpdateSmallRoadNextBlue(){
		this.UpdateBigRoadMapData(colorBlue, true)
		let value1 = this.GetSmallRoad1()
		if(value1 == colorRed ){
			this.uiRoot.down.blueR1.node.active =(true)
			this.uiRoot.down.blueB1.node.active =(false)
		} 
		else if(value1 == colorBlue ){
			this.uiRoot.down.blueR1.node.active =(false)
			this.uiRoot.down.blueB1.node.active =(true)
		}
		
		let value2 = this.GetSmallRoad2()
		if(value2 == colorRed ){
			this.uiRoot.down.blueR2.node.active =(true)
			this.uiRoot.down.blueB2.node.active =(false)
		} 
		else if(value2 == colorBlue ){
			this.uiRoot.down.blueR2.node.active =(false)
			this.uiRoot.down.blueB2.node.active =(true)
		}
		
		let value3 = this.GetSmallRoad3()
		if(value3 == colorRed ){
			this.uiRoot.down.blueR3.node.active =(true)
			this.uiRoot.down.blueB3.node.active =(false)
		} 
		else if(value3 == colorBlue ){
			this.uiRoot.down.blueR3.node.active =(false)
			this.uiRoot.down.blueB3.node.active =(true)
		}
		this.RestoreUpdateBigRoadMapData()
	},

	// .length
	// 產生小路單
	CreateSmallRoad(name, SmallRoadCount){
		let SmallRoadObj = {}
		SmallRoadObj.grid = {}
		SmallRoadObj.grid.rect = cc.find(name,this.uiRoot.root)
		SmallRoadObj.grid.layout = cc.find(name,this.uiRoot.root).getComponent(cc.Layout)
		SmallRoadObj.grid.perfab = cc.find(name+ "/Content",this.uiRoot.root)
		SmallRoadObj.grid.initPos = SmallRoadObj.grid.rect.position
		if (SmallRoadObj.grid.root == null)
			SmallRoadObj.grid.root = []
		
		let SmallRoad = []
		let perfab = SmallRoadObj.grid.perfab
		for(let i = 1; i <= SmallRoadCount; ++i){
			let clone = this.CreateClone(perfab)			
			let index = SmallRoad.length
			if (index == 0)
				index = 1
			clone.name = "Content_" + index

			SmallRoad[index] = []
			clone.active = true
			SmallRoadObj.grid.root[index] = clone

			for(let j = 1; j <= clone.children.length; ++j){
				let obj = {}
				SmallRoad[index][j] = obj
				obj.root = cc.find("Item_"+j,clone)
				obj.img = cc.find("Item_"+j+"/Image",clone).getComponent(cc.Sprite)			
				obj.root.active =(true)
				obj.img.node.active =(false)
				obj.resultUse = 0
				obj.columnUse = 0

				if(j % 2 == 1 ){
					if(index % 2 == 0 ){
						obj.bg = cc.find("Item_"+j+"/bg",clone).getComponent(cc.Sprite)
						obj.bg.node.active =(false)
					}
				}
			}
		}

		let obj = {}
		obj.SmallRoadObj = SmallRoadObj
		obj.SmallRoad = SmallRoad
		return obj
	},

	ClearSmallRoad(SmallRoadObj, SmallRoad, SmallRoadCount){
		let item = SmallRoadObj.grid.perfab.width
		SmallRoadObj.grid.rect.position = SmallRoadObj.grid.initPos

		for(let  i = 1;  i < SmallRoad.length; ++i){
			SmallRoadObj.grid.root[i].active =(i <= SmallRoadCount)
			for(let  j = 1;  j < SmallRoad[i].length; ++j){
				SmallRoad[i][j].root.active =(true)
				SmallRoad[i][j].img.node.active =(false)
				SmallRoad[i][j].resultUse = 0
				SmallRoad[i][j].columnUse = 0
			}
		}
	},

	/*
	大眼仔路單規則
	1）根據大路路單生成大眼仔路單。起始標示的參照點從大路的第二行第二列開始（第一列必須出現莊或閒，否則向後移一列參照），
	如果大路中該坐標上沒有出現“莊”或“閒”，則以大路的第三列第一行開始作為參照點。
	2）路單規則總體是：
	第一粒 看齊整，齊整為紅，不齊整為藍
	第二粒 看有無或直落，有或直落為紅，無為藍。
	莊閒交錯分佈，從莊到閒，從閒到莊都要換到下一列書寫，連莊和連閒則依次優先向下走，不能向下則向右走。
	3）齊整，大路當前參照點的前兩列（不包括參照點所在的列）的紅藍的個數是否相等。
	4）有無，大路的第二粒水平向前看一粒，前面有一粒，無論紅藍則為紅，沒有則為藍。
	5）直落，上一粒前面無粒，而次粒前也無粒，直落為紅。
	*///
	CreateSmallRoad1(){
		this.SmallRoadUse1 = 1
		let data = this.CreateSmallRoad("SmallRoad1/Grid", SmallRoadCount1)
		this.SmallRoadObj1 = data.SmallRoadObj
		this.SmallRoad1 = data.SmallRoad
	},

	GetSmallRoad1(){
		if(BigRoadPosX < 2 ){
			return colorN
		}
		
		let  isBeginSmallRoad1 = false
		if(BigRoadPosX == 2 ){
			if(BigRoadPosY < 2 ){
				return colorN
			} 
			// 第二列第二筆
			else if(BigRoadPosY == 2 ){
				isBeginSmallRoad1 = true
				// 若前面也有圈(成一對)，則第一筆紀錄為”紅”
				if(BigRoadMap[1][2] != colorN ){
					return colorRed
				} 
				else{
					return colorBlue
				}
			}
		}	
		
		// 沒有第二列第二筆，則參考第三列第一筆
		if(isBeginSmallRoad1 == false ){
			if(BigRoadPosX == 3 ){
				isBeginSmallRoad1 = true
				// 前兩列是否等長，等長就記錄”紅”，不等長記錄”藍”。
				if(BigRoadMapCount[1] == BigRoadMapCount[2] ){
					return colorRed
				} 
				else{
					return colorBlue
				}
			}
		}
		
		// 看齊整，齊整為紅，不齊整為藍
		if(BigRoadPosY == 1 ){
			if(BigRoadMapCount[BigRoadPosX - 1] == BigRoadMapCount[BigRoadPosX - 2] ){
				return colorRed
			} 
			else{
				return colorBlue
			}
		} 
		// 看有無或直落，有或直落為紅，無為藍。
		else{
			//水平向前看一粒，前面有一粒，無論紅藍則為紅，沒有則為藍。
			if(BigRoadMap[BigRoadPosX - 1][BigRoadPosY] != colorN ){
				return colorRed		
			} 
			//上一粒前面無粒，而次粒前也無粒，直落為紅
			else{
				if(BigRoadMap[BigRoadPosX - 1][BigRoadPosY - 1] == colorN ){
					return colorRed
				} 
				else{
					return colorBlue
				}
			}
		}
	},

	UpdateSmallRoad1(){
		let value = this.GetSmallRoad1()
		if(value == colorN ){
			return
		}
		
		this.SetSmallRoad1(value)
	},
	
	SetSmallRoad1(result){
		let row = 1
		for(let  i = this.SmallRoadUse1;  i < this.SmallRoad1.length; ++i){
			for(let  j = row;  j < this.SmallRoad1[i].length; ++j){
				if(i != this.SmallRoadUse1 && j != row ){
					break
				} 
				else if(this.SmallRoad1[i][j].resultUse == 0 ){
					this.SmallRoadObj1.grid.root[i].active =(true)
					let obj = this.SmallRoad1[i][j]
					obj.img.node.active =(true)
					obj.resultUse = result
					obj.columnUse = this.SmallRoadUse1
					
					if(result == 1 ){
						GameG.SetImageSprite(obj.img, G.GetGamePName(), "small_blue1")
					} 
					else if(result == 2 ){

					} 
					else if(result == 3 ){
						GameG.SetImageSprite(obj.img, G.GetGamePName(), "small_red1")
					} 
					else{
						obj.img.node.active =(false)
					}
					this.ShowCurrentResult(this.SmallRoad1,i,BigRoadCount,this.SmallRoadObj1.grid)
					return
				} 
				//不同结果换行
				else if(this.SmallRoad1[i][1].resultUse == 1 && result == 3 ){
					this.SmallRoadUse1 = this.SmallRoadUse1+1
					row = 1
					break
				} 
				//不同结果换行
				else if(this.SmallRoad1[i][1].resultUse == 3 && result == 1 ){
					this.SmallRoadUse1 = this.SmallRoadUse1+1
					row = 1
					break
				} 
				//其他结果已使用向右排序
				else if(this.SmallRoad1[i][j].resultUse != result && result != 2 ){
					row = j -1
					this.SmallRoadLast1 = this.SmallRoad1[i][row]
					break
				} 
				//其他结果已使用向右排序
				else if(this.SmallRoad1[i][j].columnUse != this.SmallRoadUse1 ){
					row = j -1
					this.SmallRoadLast1 = this.SmallRoad1[i][row]
					break
				} 
				//到底向右排序
				else if(j == this.SmallRoad1[i].length ){
					row = j
					this.SmallRoadLast1 = this.SmallRoad1[i][row]
					break
				} 
				else{
					this.SmallRoadLast1 = this.SmallRoad1[i][j]
				}
			}
		}
		
		this.CreateSmallRoad1()
		this.SetSmallRoad1(result)
	},

	ClearSmallRoad1(){
		this.SmallRoadUse1 = 1
		this.SmallRoadLast1 = null
		isBeginSmallRoad1 = false
		this.ClearSmallRoad(this.SmallRoadObj1, this.SmallRoad1, SmallRoadCount1)
	},

	/*
	小路的路單規則
	1）起始參照點是從大路的第三列第二行開始，如果大路中該坐標上沒有結果，則起始參照點為第四列第一行。
	2）判斷是否齊整、有或無、是否直落的方法與大眼路的方法大致相同，區別是：小路參考的兩列是當前列與前前列，即第三列與第一列、第四列與第二列，以此類推。
	*///
	CreateSmallRoad2(){
		this.SmallRoadUse2 = 1
		let data = this.CreateSmallRoad("SmallRoad2/Grid", SmallRoadCount2)
		this.SmallRoadObj2 = data.SmallRoadObj
		this.SmallRoad2 = data.SmallRoad
	},

	GetSmallRoad2(){
		if(BigRoadPosX < 3 ){
			return colorN
		}
		
		let isBeginSmallRoad2 = false
		if(BigRoadPosX == 3 ){
			if(BigRoadPosY < 2 ){
				return colorN
			} 
			// 第三列第二筆
			else if(BigRoadPosY == 2 ){
				isBeginSmallRoad2 = true
				// 若前面也有圈(成一對)，則第一筆紀錄為”紅”
				if(BigRoadMap[1][2] != colorN ){
					return colorRed
				} 
				else{
					return colorBlue
				}
			}
		}	
		
		// 沒有第三列第二筆，則參考第四列第一筆
		if(isBeginSmallRoad2 == false ){
			if(BigRoadPosX == 4 ){
				isBeginSmallRoad2 = true
				// 前兩列是否等長，等長就記錄”紅”，不等長記錄”藍”。
				if(BigRoadMapCount[1] == BigRoadMapCount[2] ){
					return colorRed
				} 
				else{
					return colorBlue
				}
			}
		}
		
	// 看齊整，齊整為紅，不齊整為藍
		if(BigRoadPosY == 1 ){
			if(BigRoadMapCount[BigRoadPosX - 1] == BigRoadMapCount[BigRoadPosX - 3] ){
				return colorRed
			} 
			else{
				return colorBlue
			}
		} 
		// 看有無或直落，有或直落為紅，無為藍。
		else{
			//水平向前看一粒，前面有一粒，無論紅藍則為紅，沒有則為藍。
			if(BigRoadMap[BigRoadPosX - 2][BigRoadPosY] != colorN ){
				return colorRed		
			} 
		//上一粒前面無粒，而次粒前也無粒，直落為紅
		else{
				if(BigRoadMap[BigRoadPosX - 2][BigRoadPosY - 1] == colorN ){
					return colorRed
				} 
				else{
					return colorBlue
				}
			}
		}
	},

	UpdateSmallRoad2(){
		let value = this.GetSmallRoad2()
		if(value == colorN ){
			return
		}
		
		this.SetSmallRoad2(value)
	},

	SetSmallRoad2(result){
		let row = 1
		for(let i = this.SmallRoadUse2; i < this.SmallRoad2.length; ++i){
			for(let j = row; j < this.SmallRoad2[i].length; ++j){
				if(i != this.SmallRoadUse2 && j != row ){
					break
				} 
				else if(this.SmallRoad2[i][j].resultUse == 0 ){
					this.SmallRoadObj2.grid.root[i].active =(true)
					let obj = this.SmallRoad2[i][j]
					obj.img.node.active =(true)
					obj.resultUse = result
					obj.columnUse = this.SmallRoadUse2
					
					if(result == 1 ){
						GameG.SetImageSprite(obj.img, G.GetGamePName(), "small_blue2")
					} 
					else if(result == 2 ){

					} 
					else if(result == 3 ){
						GameG.SetImageSprite(obj.img, G.GetGamePName(), "small_red2")
					} 
					else{
						obj.img.node.active =(false)
					}
					this.ShowCurrentResult(this.SmallRoad2,i,BigRoadCount,this.SmallRoadObj2.grid)
					return
				} 
				//不同结果换行
				else if(this.SmallRoad2[i][1].resultUse == 1 && result == 3 ){
					this.SmallRoadUse2 = this.SmallRoadUse2+1
					row = 1
					break
				} 
				//不同结果换行
				else if(this.SmallRoad2[i][1].resultUse == 3 && result == 1 ){
					this.SmallRoadUse2 = this.SmallRoadUse2+1
					row = 1
					break
				} 
				//其他结果已使用向右排序
				else if(this.SmallRoad2[i][j].resultUse != result && result != 2 ){
					row = j -1
					this.SmallRoadLast2 = this.SmallRoad2[i][row]
					break
				} 
				//其他结果已使用向右排序
				else if(this.SmallRoad2[i][j].columnUse != this.SmallRoadUse2 ){
					row = j -1
					this.SmallRoadLast2 = this.SmallRoad2[i][row]
					break
				} 
				//到底向右排序
				else if(j == this.SmallRoad2[i].length ){
					row = j
					this.SmallRoadLast2 = this.SmallRoad2[i][row]
					break
				} 
				else{
					this.SmallRoadLast2 = this.SmallRoad2[i][j]
				}
			}
		}
		
		this.CreateSmallRoad1()
		this.SetSmallRoad1(result)
	},

	ClearSmallRoad2(){
		this.SmallRoadUse2 = 1
		this.SmallRoadLast2 = null
		this.ClearSmallRoad(this.SmallRoadObj2, this.SmallRoad2, SmallRoadCount2)
	},

	/*
	曱甴路路單規則
	1）起始參照點是從大路的第四列第二行開始，如果大路中該坐標上沒有結果, 則起始參照點為第五列第一行。
	2）判斷是否齊整、有或無、是否直落的方法與大眼路的方法大致相同，區別是曱甴路參考的兩列是當前列與前前前列，即第四列與第一列、第五列與第二列，以此類推。
	*///
	CreateSmallRoad3(){
		this.SmallRoadUse3 = 1
		let data = this.CreateSmallRoad("SmallRoad3/Grid", SmallRoadCount3)
		this.SmallRoadObj3 = data.SmallRoadObj
		this.SmallRoad3 = data.SmallRoad
	},

	GetSmallRoad3(){
		if(BigRoadPosX < 4 ){
			return colorN
		}
		
		let isBeginSmallRoad3 = false
		if(BigRoadPosX == 4 ){
			if(BigRoadPosY < 2 ){
				return colorN
			} 
			// 第四列第二筆
			else if(BigRoadPosY == 2 ){
				isBeginSmallRoad3 = true
				// 若前面也有圈(成一對)，則第一筆紀錄為”紅”
				if(BigRoadMap[1][2] != colorN ){
					return colorRed
				} 
				else{
					return colorBlue
				}
			}
		}	
		
		// 沒有第四列第二筆，則參考第五列第一筆
		if(isBeginSmallRoad3 == false ){
			if(BigRoadPosX == 5 ){
				isBeginSmallRoad3 = true
				// 前兩列是否等長，等長就記錄”紅”，不等長記錄”藍”。
				if(BigRoadMapCount[1] == BigRoadMapCount[2] ){
					return colorRed
				} 
				else{
					return colorBlue
				}
			}
		}
		
		// 看齊整，齊整為紅，不齊整為藍
		if(BigRoadPosY == 1 ){
			if(BigRoadMapCount[BigRoadPosX - 1] == BigRoadMapCount[BigRoadPosX - 4] ){
				return colorRed
			} 
			else{
				return colorBlue
			}
		} 
		// 看有無或直落，有或直落為紅，無為藍。
		else{
			//水平向前看一粒，前面有一粒，無論紅藍則為紅，沒有則為藍。
			if(BigRoadMap[BigRoadPosX - 3][BigRoadPosY] != colorN ){
				return colorRed		
			} 
			//上一粒前面無粒，而次粒前也無粒，直落為紅
			else{
				if(BigRoadMap[BigRoadPosX - 3][BigRoadPosY - 1] == colorN ){
					return colorRed
				} 
				else{
					return colorBlue
				}
			}
		}
	},

	UpdateSmallRoad3(){
		let value = this.GetSmallRoad3()
		if(value == colorN ){
			return
		}
		
		this.SetSmallRoad3(value)
	},

	SetSmallRoad3(result){
		let row = 1
		for(let i = this.SmallRoadUse3; i < this.SmallRoad3.length; ++i){
			for(let j = row; j < this.SmallRoad3[i].length; ++j){
				if(i != this.SmallRoadUse3 && j != row ){
					break
				} 
				else if(this.SmallRoad3[i][j].resultUse == 0 ){
					this.SmallRoadObj3.grid.root[i].active =(true)
					let obj = this.SmallRoad3[i][j]
					obj.img.node.active =(true)
					obj.resultUse = result
					obj.columnUse = this.SmallRoadUse3
					
					if(result == 1 ){
						GameG.SetImageSprite(obj.img, G.GetGamePName(), "small_blue3")
					} 
					else if(result == 2 ){

					} 
					else if(result == 3 ){
						GameG.SetImageSprite(obj.img, G.GetGamePName(), "small_red3")
					} 
					else{
						obj.img.node.active =(false)
					}
					this.ShowCurrentResult(this.SmallRoad3,i,BigRoadCount,this.SmallRoadObj3.grid)
					return
				} 
				//不同结果换行
				else if(this.SmallRoad3[i][1].resultUse == 1 && result == 3 ){
					this.SmallRoadUse3 = this.SmallRoadUse3+1
					row = 1
					break
				} 
				//不同结果换行
				else if(this.SmallRoad3[i][1].resultUse == 3 && result == 1 ){
					this.SmallRoadUse3 = this.SmallRoadUse3+1
					row = 1
					break
				} 
				//其他结果已使用向右排序
				else if(this.SmallRoad3[i][j].resultUse != result && result != 2 ){
					row = j -1
					this.SmallRoadLast3 = this.SmallRoad3[i][row]
					break
				} 
				//其他结果已使用向右排序
				else if(this.SmallRoad3[i][j].columnUse != this.SmallRoadUse3 ){
					row = j -1
					this.SmallRoadLast3 = this.SmallRoad3[i][row]
					break
				} 
				//到底向右排序
				else if(j == this.SmallRoad3[i].length ){
					row = j
					this.SmallRoadLast3 = this.SmallRoad3[i][row]
					break
					
				} 
				else{
					this.SmallRoadLast3 = this.SmallRoad3[i][j]
				}
			}
		}
		
		this.CreateSmallRoad3()
		this.SetSmallRoad3(result)
	},

	ClearSmallRoad3(){
		this.SmallRoadUse3 = 1
		this.SmallRoadLast3 = null
		this.ClearSmallRoad(this.SmallRoadObj3, this.SmallRoad3, SmallRoadCount3)
	},


};

module.exports = ChartLayer
