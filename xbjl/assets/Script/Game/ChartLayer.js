var G = require("Global")
var GameG = require("GameGlobal")
var ChartLayer = require("ChartLayer")
var bit = require("BitHelper")
var gameData = require("GameData")
var gameAudio = require("GameAudio")
var gameLayer = require("GameLayer")

var BeadRoadCount = 30
var BigRoadCount = 30
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
var isBeginSmallRoad2 = false
var isBeginSmallRoad3 = false


var quanluRoot

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
		let root = cc.find("GameLayer/_chartLayer",canvas)
		quanluRoot = cc.find("ChartLayer", canvas)
	    this.uiRoot = {}
	    this.uiRoot.root = root
		let uiRoot = this.uiRoot
		
		uiRoot.quanlu = {}
		uiRoot.quanlu.UserMin = cc.find("TableLimit/UserMin", quanluRoot).getComponent(cc.Label)
		uiRoot.quanlu.UserMax = cc.find("TableLimit/UserMax", quanluRoot).getComponent(cc.Label)
		uiRoot.quanlu.HeMin = cc.find("TableLimit/HeMin", quanluRoot).getComponent(cc.Label)
		uiRoot.quanlu.HeMax = cc.find("TableLimit/HeMax", quanluRoot).getComponent(cc.Label)
		uiRoot.quanlu.DuiziMin = cc.find("TableLimit/DuiziMin", quanluRoot).getComponent(cc.Label)
		uiRoot.quanlu.DuiziMax = cc.find("TableLimit/DuiziMax", quanluRoot).getComponent(cc.Label)
	
		cc.find("ButtonClose", quanluRoot).getComponent(cc.Button).node.on('click',function(){
			gameAudio.btnClick()
			quanluRoot.active=(false)
		}, this)
	
		cc.find("CloseBG", quanluRoot).getComponent(cc.Button).node.on('click',function(){
			quanluRoot.active=(false)
		}, this)
	
		cc.find("ZoomButton", root).getComponent(cc.Button).node.on('click',function(){
			gameAudio.btnClick()
			quanluRoot.active=(true)
		}, this)

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
		example.invalid.value1.string = "0"
		example.invalid.value2.string = "0"
		example.invalid.value3.string = "0"
		example.invalid.value4.string = "0"
		
		example.invalid = {}
		example.invalid.value1 = cc.find("info/value_1", quanluRoot).getComponent(cc.Label)
		example.invalid.value2 = cc.find("info/value_2", quanluRoot).getComponent(cc.Label)
		example.invalid.value3 = cc.find("info/value_3", quanluRoot).getComponent(cc.Label)
		example.invalid.value4 = cc.find("info/value_4", quanluRoot).getComponent(cc.Label)
		example.invalid.value1.string = "0"
		example.invalid.value2.string = "0"
		example.invalid.value3.string = "0"
		example.invalid.value4.string = "0"

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


		uiRoot.quanlu.down = {}
		uiRoot.quanlu.down.blueR1 = cc.find("Next/blue/r1", quanluRoot).getComponent(cc.Sprite)
		uiRoot.quanlu.down.blueB1 = cc.find("Next/blue/b1", quanluRoot).getComponent(cc.Sprite)
		uiRoot.quanlu.down.blueR2 = cc.find("Next/blue/r2", quanluRoot).getComponent(cc.Sprite)
		uiRoot.quanlu.down.blueB2 = cc.find("Next/blue/b2", quanluRoot).getComponent(cc.Sprite)
		uiRoot.quanlu.down.blueR3 = cc.find("Next/blue/r3", quanluRoot).getComponent(cc.Sprite)
		uiRoot.quanlu.down.blueB3 = cc.find("Next/blue/b3", quanluRoot).getComponent(cc.Sprite)
		uiRoot.quanlu.down.redR1 = cc.find("Next/red/r1", quanluRoot).getComponent(cc.Sprite)
		uiRoot.quanlu.down.redB1 = cc.find("Next/red/b1", quanluRoot).getComponent(cc.Sprite)
		uiRoot.quanlu.down.redR2 = cc.find("Next/red/r2", quanluRoot).getComponent(cc.Sprite)
		uiRoot.quanlu.down.redB2 = cc.find("Next/red/b2", quanluRoot).getComponent(cc.Sprite)
		uiRoot.quanlu.down.redR3 = cc.find("Next/red/r3", quanluRoot).getComponent(cc.Sprite)
		uiRoot.quanlu.down.redB3 = cc.find("Next/red/b3", quanluRoot).getComponent(cc.Sprite)
	
		let self = this

		this.ClearSamllRoadNext()
		
		//胜率用纪录
		this.Rate = []
		
		//珠盘路
		this.InitBeadRoad(root)
		
		//大路
		this.InitBigRoad(root)

		uiRoot.toggle = {}
		uiRoot.toggle.bigRoad = cc.find("ToggleGroup/BigRoad", root).getComponent(cc.Toggle)
		uiRoot.toggle.beadRoad = cc.find("ToggleGroup/BeadRoad", root).getComponent(cc.Toggle)
	
		uiRoot.toggle.bigRoad.isChecked = true
		uiRoot.toggle.beadRoad.isChecked = false
		this.BeadRoadObj.root.active=(false)
		uiRoot.toggle.bigRoad.node.on('toggle', function(toggle) {
			gameAudio.btnClick()
			self.BigRoadObj.root.active=(true)
			self.BeadRoadObj.root.active=(false)
		})

		uiRoot.toggle.beadRoad.node.on('toggle', function(toggle) {
			gameAudio.btnClick()
			self.BigRoadObj.root.active=(false)
			self.BeadRoadObj.root.active=(true)
		})

		this.InitBigRoadMapData()
		
		//大眼仔
		this.CreateSmallRoad1()
		//小路
		this.CreateSmallRoad2()
		
		//小強路
		this.CreateSmallRoad3()
	},

	SetLimit(data){
		this.uiRoot.quanlu.UserMin.string 	= gameLayer.MoneyText(data.ZhuangXian.Min)
		this.uiRoot.quanlu.UserMax.string 	= gameLayer.MoneyText(data.ZhuangXian.Max)
		this.uiRoot.quanlu.HeMin.string 	= gameLayer.MoneyText(data.HeRange.Min)
		this.uiRoot.quanlu.HeMax.string 	= gameLayer.MoneyText(data.HeRange.Max)
		this.uiRoot.quanlu.DuiziMin.string 	= gameLayer.MoneyText(data.DuiZi.Min)
		this.uiRoot.quanlu.DuiziMax.string 	= gameLayer.MoneyText(data.DuiZi.Max)
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
			this.UpdateSmallRoad1(effect)
			this.UpdateSmallRoad2(effect)
			this.UpdateSmallRoad3(effect)
			this.UpdateSmallRoadNextBlue()
			this.UpdateSmallRoadNextRed()
			this.SetRound()
		}
		this.SetRound()
	},

	// ******************** 大路單
	InitBigRoad(root){
		this.BigRoadLast = null
		this.QuanluBigRoadLast = null

		this.BigRoadUse = 1
		this.BigRoadObj = {}
		this.BigRoadObj.root = cc.find("BigRoad", root)
		this.BigRoadObj.grid = {}
		this.BigRoadObj.grid.rect = cc.find("BigRoad/Grid",root)
		this.BigRoadObj.grid.layout = cc.find("BigRoad/Grid",root).getComponent(cc.Layout)
		this.BigRoadObj.grid.perfab = cc.find("BigRoad/Grid/Content",root)
		this.BigRoadObj.grid.initPos = this.BigRoadObj.grid.rect.position
		this.BigRoad = []

		this.uiRoot.quanlu.BigRoadObj = {}
		this.uiRoot.quanlu.BigRoadObj.root = cc.find("BigRoad", quanluRoot)
		this.uiRoot.quanlu.BigRoadObj.grid = {}
		this.uiRoot.quanlu.BigRoadObj.grid.rect = cc.find("BigRoad/Grid", quanluRoot)
		this.uiRoot.quanlu.BigRoadObj.grid.perfab = cc.find("BigRoad/Grid/Content",quanluRoot)
		this.uiRoot.quanlu.BigRoadObj.grid.initPos = this.uiRoot.quanlu.BigRoadObj.grid.rect.position
		this.uiRoot.quanlu.BigRoad = []

		for(let  i = 1;  i <= BigRoadCount; ++i){
			this.CreateBigRoad()
		}	
	},

	CreateBigRoad(){
		this.CreateBig(this.rootObj, this.BigRoadObj, this.BigRoad)
		this.CreateBig(quanluRoot, this.uiRoot.quanlu.BigRoadObj, this.uiRoot.quanlu.BigRoad)
	},

	CreateBig(rootObj, tableObj, table){
		let perfab = tableObj.grid.perfab
		let clone = this.CreateClone(perfab)

		let index = table.length
		if (index == 0)
			index = 1
		
		clone.name = "Content_" + index
		table[index] = []
		clone.active =(true)
		
		if (tableObj.grid.root == null)
			tableObj.grid.root = []
		tableObj.grid.root[index] = clone

		for(let j = 1; j <= clone.childrenCount; ++j){	
			table[index][j] = {}
			table[index][j].root = cc.find("Item_"+j,clone)
			table[index][j].img = cc.find("Item_"+j+"/Image",clone).getComponent(cc.Sprite)
			table[index][j].txt = cc.find("Item_"+j+"/Text",clone).getComponent(cc.Label)
			table[index][j].root.active =(true)
			table[index][j].img.node.active =(false)
			table[index][j].txt.node.active =(false)
			table[index][j].txt.string = ""
			table[index][j].resultUse = 0   //結果
			table[index][j].columnUse = 0     //
			table[index][j].HuCount = 0     //和的次数
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
					if (obj.txt.node == null || obj.txt.node.parent == null)
						return
					
					let obj2 = this.uiRoot.quanlu.BigRoad[i][j]		
					if(result == 2 ){
						if(this.BigRoadLast != null ){
							obj = this.BigRoadLast
							obj2 = this.QuanluBigRoadLast
						}
						obj.txt.node.active =(true)
						obj.HuCount = obj.HuCount + 1
						obj.txt.string = obj.HuCount.toString()
						obj2.txt.node.active =(true)
						obj2.txt.string = obj.HuCount.toString()
						if(effect == true ){
							this.ShowEffect(obj.txt)
							this.ShowEffect(obj2.txt)
						}
					} 
					else{
						obj.img.node.active =(true)
						obj.resultUse = result
						obj.columnUse = this.BigRoadUse
						obj2.img.node.active =(true)
						obj2.resultUse = result
						obj2.columnUse = this.BigRoadUse
						if(effect == true ){
							this.ShowEffect(obj.img)
							this.ShowEffect(obj2.img)
						}
						if(result == 1 ){
							GameG.SetImageSprite(obj.img, G.GetGamePName(), "eye_blue")
							GameG.SetImageSprite(obj2.img, G.GetGamePName(), "eye_blue")
						} 
						else if(result == 2 ){
							GameG.SetImageSprite(obj.img, G.GetGamePName(), "eye_green")
							GameG.SetImageSprite(obj2.img, G.GetGamePName(), "eye_green")
						} 
						else if(result == 3 ){
							GameG.SetImageSprite(obj.img, G.GetGamePName(), "eye_red")					
							GameG.SetImageSprite(obj2.img, G.GetGamePName(), "eye_red")					
						} 
						else{
							obj.img.node.active =(false)
							obj.txt.node.active =(false)
							obj.resultUse = 0
							obj.columnUse = 0
							obj.HuCount = 0
							obj.txt.string = ""

							obj2.img.node.active =(false)
							obj2.txt.node.active =(false)
							obj2.resultUse = 0
							obj2.columnUse = 0
							obj2.HuCount = 0
							obj2.txt.string = ""							
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
					this.QuanluBigRoadLast = this.uiRoot.quanlu.BigRoad[i][row]
					break
				} 
				//其他结果已使用向右排序
				else if(this.BigRoad[i][j].columnUse != this.BigRoadUse ){
					row = j -1
					this.BigRoadLast = this.BigRoad[i][row]
					this.QuanluBigRoadLast = this.uiRoot.quanlu.BigRoad[i][row]
					break
				} 
				//到底向右排序
				else if(j == this.BigRoad[i].length - 1){
					row = j
					this.BigRoadLast = this.BigRoad[i][row]
					this.QuanluBigRoadLast = this.uiRoot.quanlu.BigRoad[i][row]
					break
				} 
				else{
					this.BigRoadLast = this.BigRoad[i][j]
					this.QuanluBigRoadLast = this.uiRoot.quanlu.BigRoad[i][j]
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
		this.QuanluBigRoadLast = null
		this.uiRoot.quanlu.BigRoadObj.grid.rect.position = this.uiRoot.quanlu.BigRoadObj.grid.initPos
		
		for(let i = 1; i < this.BigRoad.length; ++i){
			this.BigRoadObj.grid.root[i].active =(i <= BigRoadCount)
			this.uiRoot.quanlu.BigRoadObj.grid.root[i].active=(i <= BigRoadCount)

			for(let j = 1; j < this.BigRoad[i].length; ++j){
				this.BigRoad[i][j].img.node.active =(false)
				this.BigRoad[i][j].txt.node.active =(false)
				this.BigRoad[i][j].resultUse = 0
				this.BigRoad[i][j].columnUse = 0
				this.BigRoad[i][j].HuCount = 0
				this.BigRoad[i][j].txt.string = ""

				this.uiRoot.quanlu.BigRoad[i][j].img.node.active=(false)
				this.uiRoot.quanlu.BigRoad[i][j].txt.node.active=(false)
				this.uiRoot.quanlu.BigRoad[i][j].txt.string = ""				
			}
		}
	},	

	// ******************** 珠盘路
	InitBeadRoad(root){
		this.BeadRoadObj = {}
		this.BeadRoadObj.root = cc.find("BeadRoad",root)
		this.BeadRoadObj.grid = {}
		this.BeadRoadObj.grid.rect = cc.find("BeadRoad/Grid",root)
		this.BeadRoadObj.grid.layout = cc.find("BeadRoad/Grid",root).getComponent(cc.Layout)
		this.BeadRoadObj.grid.perfab = cc.find("BeadRoad/Grid/Content",root)
		this.BeadRoadObj.grid.initPos = this.BeadRoadObj.grid.rect.position
		this.BeadRoad = []

		this.uiRoot.quanlu.BeadRoadObj = {}
		this.uiRoot.quanlu.BeadRoadObj.root = cc.find("BeadRoad", quanluRoot)
		this.uiRoot.quanlu.BeadRoadObj.grid = {}
		this.uiRoot.quanlu.BeadRoadObj.grid.rect = cc.find("BeadRoad/Grid", quanluRoot)
		this.uiRoot.quanlu.BeadRoadObj.grid.initPos = this.BeadRoadObj.grid.rect.position
		this.uiRoot.quanlu.BeadRoad = []

		for(let  i = 1;  i <= BeadRoadCount; ++i){
			this.CreateBeadRoad()
		}
	},
	
	CreateBeadRoad(){
		this.CreateBead(this.uiRoot.root,this.BeadRoadObj, this.BeadRoad)
		this.CreateBead(quanluRoot,this.uiRoot.quanlu.BeadRoadObj, this.uiRoot.quanlu.BeadRoad)
	},

	CreateBead(rootObj, tableObj, table){
		let perfab = cc.find("BeadRoad/Grid/Content", rootObj)
		let clone = this.CreateClone(perfab)

		let index = table.length
		if (index == 0)
			index = 1
		table[index] = []
		clone.active =(true)

		if (tableObj.grid.root == null)
			tableObj.grid.root = []
		tableObj.grid.root[index] = clone

		for(let j = 1; j <= clone.childrenCount; ++j){
			table[index][j] = {}
			table[index][j].root = cc.find("Item_"+j,clone)
			table[index][j].img = cc.find("Item_"+j+"/Image",clone).getComponent(cc.Sprite)
			table[index][j].imgR = cc.find("Item_"+j+"/ImageR",clone).getComponent(cc.Sprite)
			table[index][j].imgL = cc.find("Item_"+j+"/ImageL",clone).getComponent(cc.Sprite)
			table[index][j].root.active =(true)
			table[index][j].resultUse = false
			table[index][j].img.node.active =(false)
			table[index][j].imgR.node.active =(false)
			table[index][j].imgL.node.active =(false)
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
					let obj2 = this.uiRoot.quanlu.BeadRoad[i][j].img					
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
					obj2.node.active =(true)
					GameG.SetImageSprite(obj, G.GetGamePName(), iconName)
					GameG.SetImageSprite(obj2, G.GetGamePName(), iconName)
				
					if(effect == true ){
						this.ShowEffect(obj)
						this.ShowEffect(obj2)
					}
								
					this.ShowCurrentResult(this.BeadRoad,i,BeadRoadCount,this.BeadRoadObj.grid)
					
					this.BeadRoad[i][j].imgR.node.active =(false)
					this.BeadRoad[i][j].imgL.node.active =(false)	
					this.UpdateSideIcon(this.BeadRoad[i][j],sideL,effect)
					this.UpdateSideIcon(this.BeadRoad[i][j],sideR,effect)

					this.uiRoot.quanlu.BeadRoad[i][j].imgR.node.active =(false)
					this.uiRoot.quanlu.BeadRoad[i][j].imgL.node.active =(false)	
					this.UpdateSideIcon(this.uiRoot.quanlu.BeadRoad[i][j],sideL,effect)
					this.UpdateSideIcon(this.uiRoot.quanlu.BeadRoad[i][j],sideR,effect)					
					return
				}
			}
		}
		
		this.CreateBeadRoad()
		this.UpdateBeadRoad(result,sideL,sideR,effect)
	},

	ClearBeadRoad(){
		this.BeadRoadObj.grid.rect.position = this.BeadRoadObj.grid.initPos
		this.uiRoot.quanlu.BeadRoadObj.grid.rect.position = this.uiRoot.quanlu.BeadRoadObj.grid.initPos

		for(let i = 1; i < this.BeadRoad.length; ++i){
			this.BeadRoadObj.grid.root[i].active =(i <= BeadRoadCount)
			for(let j = 1; j < this.BeadRoad[i].length; ++j){
				this.BeadRoad[i][j].resultUse = false
				this.BeadRoad[i][j].img.node.active =(false)
				this.BeadRoad[i][j].imgR.node.active =(false)
				this.BeadRoad[i][j].imgL.node.active =(false)

				this.uiRoot.quanlu.BeadRoad[i][j].img.node.active =(false)
				this.uiRoot.quanlu.BeadRoad[i][j].imgR.node.active =(false)
				this.uiRoot.quanlu.BeadRoad[i][j].imgL.node.active =(false)
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
			this.ShowEffect(image)
		}
	},	

	ShowEffect(obj){
		obj.node.opacity = 1

		var tween = GameG.NewTween(obj.node)
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
		example.invalid.value1.string = parseInt(gameData.resultRound.ZhuangWin).toString()
		example.invalid.value2.string = parseInt(gameData.resultRound.XianWin).toString()
		example.invalid.value3.string = parseInt(gameData.resultRound.HeWin).toString()
		example.invalid.value4.string = parseInt(gameData.resultRound.RoundID).toString()

		example.invalid.value1.string = parseInt(gameData.resultRound.ZhuangWin).toString()
		example.invalid.value2.string = parseInt(gameData.resultRound.XianWin).toString()
		example.invalid.value3.string = parseInt(gameData.resultRound.HeWin).toString()
		example.invalid.value4.string = parseInt(gameData.resultRound.RoundID).toString()		
	},
 
	SetSetting(data){
		example.invalid.titleValue1.string = gameLayer.MoneyText(data.ZhuangXian.Min) + "-"+ gameLayer.MoneyText(data.ZhuangXian.Max)
		example.invalid.titleValue2.string = gameLayer.MoneyText(data.HeRange.Min) + "-"+ gameLayer.MoneyText(data.HeRange.Max)
		example.invalid.titleValue3.string = gameLayer.MoneyText(data.DuiZi.Min) + "-"+ gameLayer.MoneyText(data.DuiZi.Max)
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
		
		this.uiRoot.quanlu.down.redR1.node.active =(false)
		this.uiRoot.quanlu.down.redB1.node.active =(false)
		this.uiRoot.quanlu.down.redR2.node.active =(false)
		this.uiRoot.quanlu.down.redB2.node.active =(false)
		this.uiRoot.quanlu.down.redR3.node.active =(false)
		this.uiRoot.quanlu.down.redB3.node.active =(false)
		
		this.uiRoot.quanlu.down.blueR1.node.active =(false)
		this.uiRoot.quanlu.down.blueB1.node.active =(false)
		this.uiRoot.quanlu.down.blueR2.node.active =(false)
		this.uiRoot.quanlu.down.blueB2.node.active =(false)
		this.uiRoot.quanlu.down.blueR3.node.active =(false)
		this.uiRoot.quanlu.down.blueB3.node.active =(false)				
	},

	UpdateSmallRoadNextRed(){
		this.UpdateBigRoadMapData(colorRed, true)
		
		let value1 = this.GetSmallRoad1()
		if(value1 == colorRed ){
			this.uiRoot.down.redR1.node.active =(true)
			this.uiRoot.down.redB1.node.active =(false)
			this.uiRoot.quanlu.down.redR1.node.active =(true)
			this.uiRoot.quanlu.down.redB1.node.active =(false)			
		} 
		else if(value1 == colorBlue ){
			this.uiRoot.down.redR1.node.active =(false)
			this.uiRoot.down.redB1.node.active =(true)
			this.uiRoot.quanlu.down.redR1.node.active =(false)
			this.uiRoot.quanlu.down.redB1.node.active =(true)
		}
		
		let value2 = this.GetSmallRoad2()
		if(value2 == colorRed ){
			this.uiRoot.down.redR2.node.active =(true)
			this.uiRoot.down.redB2.node.active =(false)
			this.uiRoot.quanlu.down.redR2.node.active =(true)
			this.uiRoot.quanlu.down.redB2.node.active =(false)
		} 
		else if(value2 == colorBlue ){
			this.uiRoot.down.redR2.node.active =(false)
			this.uiRoot.down.redB2.node.active =(true)
			this.uiRoot.quanlu.down.redR2.node.active =(false)
			this.uiRoot.quanlu.down.redB2.node.active =(true)
		}
		
		let value3 = this.GetSmallRoad3()
		if(value3 == colorRed ){
			this.uiRoot.down.redR3.node.active =(true)
			this.uiRoot.down.redB3.node.active =(false)
			this.uiRoot.quanlu.down.redR3.node.active =(true)
			this.uiRoot.quanlu.down.redB3.node.active =(false)
		} 
		else if(value3 == colorBlue ){
			this.uiRoot.down.redR3.node.active =(false)
			this.uiRoot.down.redB3.node.active =(true)
			this.uiRoot.quanlu.down.redR3.node.active =(false)
			this.uiRoot.quanlu.down.redB3.node.active =(true)
		}
		
		this.RestoreUpdateBigRoadMapData()
	},

	UpdateSmallRoadNextBlue(){
		this.UpdateBigRoadMapData(colorBlue, true)
		let value1 = this.GetSmallRoad1()
		if(value1 == colorRed ){
			this.uiRoot.down.blueR1.node.active =(true)
			this.uiRoot.down.blueB1.node.active =(false)
			this.uiRoot.quanlu.down.blueR1.node.active =(true)
			this.uiRoot.quanlu.down.blueB1.node.active =(false)
		} 
		else if(value1 == colorBlue ){
			this.uiRoot.down.blueR1.node.active =(false)
			this.uiRoot.down.blueB1.node.active =(true)
			this.uiRoot.quanlu.down.blueR1.node.active =(false)
			this.uiRoot.quanlu.down.blueB1.node.active =(true)
		}
		
		let value2 = this.GetSmallRoad2()
		if(value2 == colorRed ){
			this.uiRoot.down.blueR2.node.active =(true)
			this.uiRoot.down.blueB2.node.active =(false)
			this.uiRoot.quanlu.down.blueR2.node.active =(true)
			this.uiRoot.quanlu.down.blueB2.node.active =(false)
		} 
		else if(value2 == colorBlue ){
			this.uiRoot.down.blueR2.node.active =(false)
			this.uiRoot.down.blueB2.node.active =(true)
			this.uiRoot.quanlu.down.blueR2.node.active =(false)
			this.uiRoot.quanlu.down.blueB2.node.active =(true)
		}
		
		let value3 = this.GetSmallRoad3()
		if(value3 == colorRed ){
			this.uiRoot.down.blueR3.node.active =(true)
			this.uiRoot.down.blueB3.node.active =(false)
			this.uiRoot.quanlu.down.blueR3.node.active =(true)
			this.uiRoot.quanlu.down.blueB3.node.active =(false)
		} 
		else if(value3 == colorBlue ){
			this.uiRoot.down.blueR3.node.active =(false)
			this.uiRoot.down.blueB3.node.active =(true)
			this.uiRoot.quanlu.down.blueR3.node.active =(false)
			this.uiRoot.quanlu.down.blueB3.node.active =(true)			
		}
		this.RestoreUpdateBigRoadMapData()
	},

	// .length
	// 產生小路單
	CreateSmallRoad(roadRoot, name, SmallRoadCount){
		let SmallRoadObj = {}
		SmallRoadObj.grid = {}
		SmallRoadObj.grid.rect = cc.find(name, roadRoot)
		SmallRoadObj.grid.layout = cc.find(name, roadRoot).getComponent(cc.Layout)
		SmallRoadObj.grid.perfab = cc.find(name+ "/Content", roadRoot)
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
			}
		}

		let obj = {}
		obj.SmallRoadObj = SmallRoadObj
		obj.SmallRoad = SmallRoad
		return obj
	},

	ClearSmallRoad(SmallRoadObj, SmallRoad, SmallRoadCount){
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
		let data = this.CreateSmallRoad(this.uiRoot.root, "SmallRoad1/Grid", SmallRoadCount1)
		this.SmallRoadObj1 = data.SmallRoadObj
		this.SmallRoad1 = data.SmallRoad

		data = this.CreateSmallRoad(quanluRoot, "SmallRoad1/Grid", SmallRoadCount1)
		this.QuanluSmallRoadObj1 = data.SmallRoadObj
		this.QuanluSmallRoad1 = data.SmallRoad
	},

	GetSmallRoad1(){
		if(BigRoadPosX < 2 ){
			return colorN
		}
		
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

	UpdateSmallRoad1(effect){
		let value = this.GetSmallRoad1()
		if(value == colorN ){
			return
		}
		
		this.SetSmallRoad1(value,effect)
	},
	
	SetSmallRoad1(result,effect){
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

					let obj2 = this.QuanluSmallRoad1[i][j]
					obj2.img.node.active =(true)

					if(result == 1 ){
						GameG.SetImageSprite(obj.img, G.GetGamePName(), "small_blue1")
						GameG.SetImageSprite(obj2.img, G.GetGamePName(), "small_blue1")
					} 
					else if(result == 2 ){

					} 
					else if(result == 3 ){
						GameG.SetImageSprite(obj.img, G.GetGamePName(), "small_red1")
						GameG.SetImageSprite(obj2.img, G.GetGamePName(), "small_red1")
					} 
					else{
						obj.img.node.active =(false)
						obj2.img.node.active =(false)
					}
					this.ShowCurrentResult(this.SmallRoad1,i,BigRoadCount,this.SmallRoadObj1.grid)
					if (effect) {
						this.ShowEffect(obj2.img)
					}
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
		this.SetSmallRoad1(result, effect)
	},

	ClearSmallRoad1(){
		this.SmallRoadUse1 = 1
		this.SmallRoadLast1 = null
		isBeginSmallRoad1 = false
		this.ClearSmallRoad(this.SmallRoadObj1, this.SmallRoad1, SmallRoadCount1)
		this.ClearSmallRoad(this.QuanluSmallRoadObj1, this.QuanluSmallRoad1, SmallRoadCount1)
	},

	/*
	小路的路單規則
	1）起始參照點是從大路的第三列第二行開始，如果大路中該坐標上沒有結果，則起始參照點為第四列第一行。
	2）判斷是否齊整、有或無、是否直落的方法與大眼路的方法大致相同，區別是：小路參考的兩列是當前列與前前列，即第三列與第一列、第四列與第二列，以此類推。
	*///
	CreateSmallRoad2(){
		this.SmallRoadUse2 = 1
		let data = this.CreateSmallRoad(this.uiRoot.root, "SmallRoad2/Grid", SmallRoadCount2)
		this.SmallRoadObj2 = data.SmallRoadObj
		this.SmallRoad2 = data.SmallRoad

		data = this.CreateSmallRoad(quanluRoot, "SmallRoad2/Grid", SmallRoadCount2)
		this.QuanluSmallRoadObj2 = data.SmallRoadObj
		this.QuanluSmallRoad2 = data.SmallRoad		
	},

	GetSmallRoad2(){
		if(BigRoadPosX < 3 ){
			return colorN
		}
		
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

	UpdateSmallRoad2(effect){
		let value = this.GetSmallRoad2()
		if(value == colorN ){
			return
		}
		
		this.SetSmallRoad2(value, effect)
	},

	SetSmallRoad2(result, effect){
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
					
					let obj2 = this.QuanluSmallRoad2[i][j]
					obj2.img.node.active=(true)

					if(result == 1 ){
						GameG.SetImageSprite(obj.img, G.GetGamePName(), "small_blue2")
						GameG.SetImageSprite(obj2.img, G.GetGamePName(), "small_blue2")
					} 
					else if(result == 2 ){

					} 
					else if(result == 3 ){
						GameG.SetImageSprite(obj.img, G.GetGamePName(), "small_red2")
						GameG.SetImageSprite(obj2.img, G.GetGamePName(), "small_red2")
					} 
					else{
						obj.img.node.active =(false)
						obj2.img.node.active =(false)
					}
					this.ShowCurrentResult(this.SmallRoad2,i,BigRoadCount,this.SmallRoadObj2.grid)
					if (effect) {
						this.ShowEffect(obj2.img)
					}
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
		this.SetSmallRoad1(result, effect)
	},

	ClearSmallRoad2(){
		this.SmallRoadUse2 = 1
		this.SmallRoadLast2 = null
		isBeginSmallRoad2 = false
		this.ClearSmallRoad(this.SmallRoadObj2, this.SmallRoad2, SmallRoadCount2)
		this.ClearSmallRoad(this.QuanluSmallRoadObj2, this.QuanluSmallRoad2, SmallRoadCount2)
	},

	/*
	曱甴路路單規則
	1）起始參照點是從大路的第四列第二行開始，如果大路中該坐標上沒有結果, 則起始參照點為第五列第一行。
	2）判斷是否齊整、有或無、是否直落的方法與大眼路的方法大致相同，區別是曱甴路參考的兩列是當前列與前前前列，即第四列與第一列、第五列與第二列，以此類推。
	*///
	CreateSmallRoad3(){
		this.SmallRoadUse3 = 1
		let data = this.CreateSmallRoad(this.uiRoot.root, "SmallRoad3/Grid", SmallRoadCount3)
		this.SmallRoadObj3 = data.SmallRoadObj
		this.SmallRoad3 = data.SmallRoad

		data = this.CreateSmallRoad(quanluRoot, "SmallRoad3/Grid", SmallRoadCount3)
		this.QuanluSmallRoadObj3 = data.SmallRoadObj
		this.QuanluSmallRoad3 = data.SmallRoad
	},

	GetSmallRoad3(){
		if(BigRoadPosX < 4 ){
			return colorN
		}
		
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

	UpdateSmallRoad3(effect){
		let value = this.GetSmallRoad3()
		if(value == colorN ){
			return
		}
		
		this.SetSmallRoad3(value, effect)
	},

	SetSmallRoad3(result, effect){
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
					
					let obj2 = this.QuanluSmallRoad3[i][j]
					obj2.img.node.active =(true)

					if(result == 1 ){
						GameG.SetImageSprite(obj.img, G.GetGamePName(), "small_blue3")
						GameG.SetImageSprite(obj2.img, G.GetGamePName(), "small_blue3")
					} 
					else if(result == 2 ){

					} 
					else if(result == 3 ){
						GameG.SetImageSprite(obj.img, G.GetGamePName(), "small_red3")
						GameG.SetImageSprite(obj2.img, G.GetGamePName(), "small_red3")
					} 
					else{
						obj.img.node.active =(false)
						obj2.img.node.active =(false)
					}
					this.ShowCurrentResult(this.SmallRoad3,i,BigRoadCount,this.SmallRoadObj3.grid)
					if (effect){
						this.ShowEffect(obj2.img)
					}
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
		this.SetSmallRoad3(result, effect)
	},

	ClearSmallRoad3(){
		this.SmallRoadUse3 = 1
		this.SmallRoadLast3 = null
		isBeginSmallRoad3 = false
		this.ClearSmallRoad(this.SmallRoadObj3, this.SmallRoad3, SmallRoadCount3)
		this.ClearSmallRoad(this.QuanluSmallRoadObj3, this.QuanluSmallRoad3, SmallRoadCount3)
	},


};

module.exports = ChartLayer
