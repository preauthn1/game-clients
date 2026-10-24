var HallG = require("Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var uiinputEvent = require("UIInputEvent")
const GameGlobal = require("./GameGlobal")
var poolPage = []
var poolSymbol = []
var poolPayLine = []
var index = 1
var pageCount = 5
var pagePayLines = 4 //賠付線的頁數
var screenWidth = 1334
var isDragPage
var currentDragPos
// 頁面按鈕是否要循環
var pageBtnLoop = true
// 切頁速度
var pageTimeSpeed = 0.3
// 拖曳距離
var dragDistance = 300
let pageSettings

/** 用途: 賠付表介面 */
var UIPayTable = {
	extends: cc.Component,

	Init(root){
		
		pageSettings = []
		pageSettings[1] = []
		pageSettings[1].previousPoolCount = 0
		pageSettings[1].symbolPos = [[-250, 175], [250, 175], [-400, -35], [0, -35], [400, -35]]
	// pageSettings[2] = {}
	// pageSettings[2].previousPoolCount = 4
	// pageSettings[2].symbolPos = {{-250, 175}, {-250, -35}, {250, -35}, {250, 175}}
		pageSettings[3] = []
		pageSettings[3].previousPoolCount = 10
		pageSettings[3].symbolPos = [[-270, 200], [-270, 0]]
		pageSettings[3].countPos = [700, 0]
		pageSettings[3].textTitlePos = [240, 45]
		pageSettings[3].textContentPos = [270, -35]
		
		poolPage = []
	    poolSymbol = []
	    poolPayLine = []
		
		this.rootRect = root
		this.rootRect.active =(false)
		let self = this
		this.btnBack = cc.find("ButtonBack",root).getComponent(cc.Button)
	    this.btnBack.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			self.Hide()
	    })
		
	    this.btnFront = cc.find("ButtonFront",root).getComponent(cc.Button)
	    this.btnFront.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			self.RefreshPoolPage(-1)
	    })
		
	    this.btnNext = cc.find("ButtonNext",root).getComponent(cc.Button)
	    this.btnNext.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			self.RefreshPoolPage(1)
	    })
		
		this.pagePointPrefab = cc.find("PagePoints/Point",root)
		this.pagePointPrefab.active =(false)
			
		this.poolRoot = cc.find("PoolPage",root)
		for(let i = 0; i <= this.poolRoot.children.length - 1; ++ i){
			let child = this.poolRoot.children[i]
			let index = parseInt(i) +1
			poolPage[index] = []
			poolPage[index].root = child
			poolPage[index].grid = cc.find("Grid",child) //某些介面可能沒有
			
		// 頁面設定
			let pageSetting = pageSettings[index]
			if(pageSetting != null){
				if(pageSetting.symbolPos != null){
					if(poolPage[index].grid != null){
						let grid = poolPage[index].grid.getComponent(cc.Layout)
						if(grid != null){
							grid.enabled = false
						}
					}
				}
			}
		// 建立點點
			let point = cc.instantiate(this.pagePointPrefab)
			point.parent =(this.pagePointPrefab.parent)
			point.position = cc.v3(0, 0, 0)
			point.scale = 1	
			point.active =(true)
			let btnPoint = cc.find("Button",point).getComponent(cc.Button)
			btnPoint.node.on('click',function(){ 
				GameG.PlayGameSound("se_click")
				self.SetPoolPage(index)
			})
			btnPoint.node.opacity = 150
			poolPage[index].btnPoint = btnPoint
			let imageWhite = cc.find("ImageWhite",point).getComponent(cc.Sprite)
			poolPage[index].imageWhite = imageWhite
			poolPage[index].imageWhite.node.active =(false)
		}
		
		this.prefabSymbol = cc.find("PrefabSymbol",root)
		this.prefabPayLine = cc.find("PrefabPayLine",root)
		
		let width = GameG.GetScreenWidth()
		
		if(width > screenWidth) {
			screenWidth = width
		}
	},

	onExit(){	
		for(let  i =  1;  i <=  poolSymbol.length; ++ i){ 
			poolSymbol[i] = null 
		}
	},

	CreateSymbol(index){
		if(poolSymbol[index] != null) { return }
		let clone = cc.instantiate(this.prefabSymbol)
		if(clone == null){ return null }
		clone.parent =(this.poolRoot)
		clone.position = cc.v3(0, 0, 0)
		clone.scale = 1
		clone.active =(false)
		
		poolSymbol[index] = {}
		poolSymbol[index].root = clone
		poolSymbol[index].img = cc.find("Image",clone).getComponent(cc.Sprite)
		poolSymbol[index].txt = []
		poolSymbol[index].txt[2] = cc.find("Count/Text2/Text",clone).getComponent("TextControl")
		poolSymbol[index].txt[3] = cc.find("Count/Text3/Text",clone).getComponent("TextControl")
		poolSymbol[index].txt[4] = cc.find("Count/Text4/Text",clone).getComponent("TextControl")
		poolSymbol[index].txt[5] = cc.find("Count/Text5/Text",clone).getComponent("TextControl")
		poolSymbol[index].txt[6] = cc.find("Count/Text6/Text",clone).getComponent("TextControl")
		poolSymbol[index].txt[7] = cc.find("Count/Text7/Text",clone).getComponent("TextControl")
		poolSymbol[index].txt[8] = cc.find("Count/Text8/Text",clone).getComponent("TextControl")
		poolSymbol[index].txt[9] = cc.find("Count/Text9/Text",clone).getComponent("TextControl")
		poolSymbol[index].txtTitle = cc.find("TextTitle",clone).getComponent(cc.Label)
		poolSymbol[index].txtContent = cc.find("TextContent",clone).getComponent(cc.Label)
	},

	CreatePayLine(index){
		if(poolPayLine[index] != null) { return }
		let clone = cc.instantiate(this.prefabPayLine)
		if(clone == null){ return null }
		
		let parent = poolPage[pagePayLines].grid || poolPage[pagePayLines].root
		clone.parent =(parent)
		clone.position = cc.v3(0, 0, 0)
		clone.scale = 1
		clone.active =(false)
			
		poolPayLine[index] = []
		poolPayLine[index].root = clone
		poolPayLine[index].txtNo = cc.find("TextNo",clone).getComponent("TextControl")
		poolPayLine[index].grid = cc.find("Grid",clone)
		poolPayLine[index].payLine = []
		for(let i = 0; i < poolPayLine[index].grid.children.length; ++ i ){
			let child = poolPayLine[index].grid.children[i]
			poolPayLine[index].payLine[i +1] = child.getComponent(cc.Sprite)
			poolPayLine[index].payLine[i +1].node.active =(false)		
		}
	},

	SetPayLines(){
		if(gameData.PayLines == null){
			return
		}
		
		for(let k in (gameData.PayLines)){ 
			let v = gameData.PayLines[k] 

			CreatePayLine(k)
			
			poolPayLine[k].txtNo.string = v.PayLineID
			poolPayLine[k].root.active =(true)
			
			for(let  i = 1;  i <=  poolPayLine[k].payLine.length; ++ i){
				poolPayLine[k].payLine[i].active =(false)
			}
			
			for(let  i = 1;  i <=  v.Positions.length; ++ i){
				let reel = v.Positions[i].Reel
				let row = v.Positions[i].Row
				
				let index = (reel -1) * gameData.RowCounts + row	
				if(poolPayLine[k].payLine[index] != null){
					poolPayLine[k].payLine[index].active =(true)
				}
			}
		}
	},
	
	SetSymbol(){
		let self = this
		let SetData = function(pageIndex,poolIndex,symbolName){
			symbolName = gameData.ChangeSymbolName(symbolName)
			let data = gameData.SymbolPayTable[symbolName]
			if(data == null){
				return
			}
			
			if(poolSymbol[poolIndex] == null){
				self.CreateSymbol(poolIndex)
			}
			let parent = poolPage[pageIndex].grid || poolPage[pageIndex].root
			poolSymbol[poolIndex].root.parent =(parent)
			poolSymbol[poolIndex].root.scale = 1
			poolSymbol[poolIndex].root.active =(true)
			GameG.SetImageSprite(poolSymbol[poolIndex].img,"symbol_n_" + symbolName, true)
			
		// 頁面設定
			let pageSetting = pageSettings[pageIndex]
			if(pageSetting != null){			
				if(pageSetting.symbolPos != null){
					let grid = poolPage[pageIndex].grid.getComponent(cc.Layout)
					if(grid != null && grid.enabled == true){
						grid.enabled = false
						grid.anchorMin = cc.v2(0.5, 0.5)
						grid.anchorMax = cc.v2(0.5, 0.5)
					}
					let i = poolIndex - pageSetting.previousPoolCount -1
					let symbloRT = poolSymbol[poolIndex].root
					let pos = pageSetting.symbolPos[i]
					if(pos != null){
						symbloRT.position = cc.v2(pos[0], pos[1])
					}
				}			
				if(pageSetting.countPos != null){
					let symbloRT = cc.find("Count",poolSymbol[poolIndex].root)
					symbloRT.position = cc.v2(pageSetting.countPos[0], pageSetting.countPos[1])
				}
				if(pageSetting.textTitlePos != null){
					let symbloRT = cc.find("TextTitle",poolSymbol[poolIndex].root)
					symbloRT.position = cc.v2(pageSetting.textTitlePos[0], pageSetting.textTitlePos[1])
				}
				if(pageSetting.textContentPos != null){
					let symbloRT = cc.find("TextContent",poolSymbol[poolIndex].root)
					symbloRT.position = cc.v2(pageSetting.textContentPos[0], pageSetting.textContentPos[1])
				}
			}
			
			for(let k in (poolSymbol[poolIndex].txt)){ 
				let v = poolSymbol[poolIndex].txt[k] 
			
				let detail = gameData.GetSymbolPayDetail(symbolName,k)
				poolSymbol[poolIndex].txt[k].node.parent.active =(detail != null)
				if(detail != null){
					let payout = GameG.AbbreviateNumber(detail.payout)
					poolSymbol[poolIndex].txt[k].string = payout
				}
			}
			poolSymbol[poolIndex].txtTitle.string = data.title
			poolSymbol[poolIndex].txtContent.string = data.desc
		}
		
		let compare = function(symbolNameA,symbolNameB){
			symbolNameA = gameData.ChangeSymbolName(symbolNameA)
			let dataA = parseFloat(gameData.SymbolPayTable[symbolNameA].detail[5].payout)
			symbolNameB = gameData.ChangeSymbolName(symbolNameB)
			let dataB = parseFloat(gameData.SymbolPayTable[symbolNameB].detail[5].payout)
			if(dataA > dataB){
				return -1
			} 
			else if(dataA == dataB){

				let valueA = symbolNameA.replace("p", "")
				let valueB = symbolNameB.replace("p", "")
				return (valueA - valueB) > 0 ? 1 : -1
			}
			return 1
		}
		
		let poolIndex = 1
		let pageSymbol = []
		pageSymbol[1] = ["p1","p2","p3","p4","p5"]
		pageSymbol[2] = ["p6","p7","p8","p9","p10","p11"]
	// pageSymbol[3] = {"w1","g1"}
		
		pageSymbol[1].sort(compare)
	// 	pageSymbol[2].sort(compare)
		for(let pageIndex in (pageSymbol)){ 
			let symbolList = pageSymbol[pageIndex] 
	
			for(let i in symbolList){			
				SetData(pageIndex,poolIndex,symbolList[i])			
				poolIndex = poolIndex +1
			}
		}	
	},

	onKeyUp(event){
		isDragPage = false
	},
	
	onKeyDown(event){
		isDragPage = true
		currentDragPos = event.getLocation()
	},
	
	onKeyMove(event){
		if(isDragPage){
			let pos = event.getLocation()
			let posX = currentDragPos.x - pos.x
			if(posX > dragDistance) {
				isDragPage = false
				UIPayTable.RefreshPoolPage(1)
				GameG.PlayGameSound("se_click")

			} 
			else if (posX < -dragDistance) {

				isDragPage = false
				UIPayTable.RefreshPoolPage(-1)
				GameG.PlayGameSound("se_click")
			}	
		}
	},

// 顯示介面
	Show(){
		this.rootRect.active =(true)	
		
	// txtPayLine.string = gameData.PayLineDesc
	// txtPickGame.string = gameData.PickGameDesc

		this.keyDown = uiinputEvent.SetEventKeyDown(this.onKeyDown)
		this.keyUp = uiinputEvent.SetEventKeyUp(this.onKeyUp)
		this.keyMove = uiinputEvent.SetEventKeyMove(this.onKeyMove)
		
	// symbol
		this.SetSymbol()
	// payLine
		this.SetPayLines()
		
		if(index != 1){	
		// 不是第一個 先關閉當前在設定1 因為不要滑動 所以這邊設
			this.SetPoolButtonPoint(index, false, true, 0)
			index = 1
			this.SetPoolButtonPoint(index, true, true, 0)
		} 
		else{
			this.SetPoolButtonPoint(index, true, true, 0)
		}
	},

// 關閉介面
	Hide(){
		this.rootRect.active =(false)
		
		uiinputEvent.RemoveKey(this.keyDown)
		uiinputEvent.RemoveKey(this.keyMove)
		uiinputEvent.RemoveKey(this.keyUp)		
	},

	RefreshPoolPage(offset){
		this.SetPoolPage(index + offset)
	},

// 設定頁
	SetPoolPage(pageIndex){
	
		let isLeft = index < pageIndex
			
		this.SetPoolButtonPoint(index, false, isLeft, pageTimeSpeed)
		index = pageIndex;
		
		if(pageBtnLoop == true){
			if(index < 1){
				index = poolPage.length -1
			} 
			else if(index >= poolPage.length) {

				index = 1
			}
		}
		
		this.SetPoolButtonPoint(index, true, isLeft, pageTimeSpeed)
		
		if(pageBtnLoop == false) {
			this.btnFront.interactable = (pageIndex > 1)
			this.btnNext.interactable = (pageIndex < poolPage.length)
		}	
	},

	SetPoolButtonPoint(i, isActive, isLeft, timeSpeed){
		let startPos
		let endPos
		if(isActive){
			if(isLeft) {
				startPos = screenWidth
				endPos = 0
			} 
			else{
				startPos = -screenWidth
				endPos = 0
			}
		} 
		else{
			if(isLeft) {
				startPos = 0
				endPos = -screenWidth
			} 
			else{
				startPos = 0
				endPos = screenWidth
			}
		}
		if(isActive) {
		// poolPage[i].btnPoint.image.color = CS.UnityEngine.Color.white
			poolPage[i].imageWhite.node.active =(true)
			poolPage[i].root.active =(true)
			poolPage[i].btnPoint.interactable = false
			
			let gridRT = poolPage[i].root
			gridRT.position = cc.v2(startPos, gridRT.position.y)	
			let sequence = GameG.NewTween(gridRT)			
			sequence.to(timeSpeed, {position: cc.v3(endPos, gridRT.position.y, 0)})	
			sequence.start()
		} 
		else{
		// poolPage[i].btnPoint.image.color = CS.UnityEngine.Color(1,1,1,0.5)
			poolPage[i].imageWhite.node.active =(false)
			
			let gridRT = poolPage[i].root
			gridRT.position = cc.v2(startPos, gridRT.position.y)	

			let sequence = GameG.NewTween(gridRT)
			sequence.to(timeSpeed, {position: cc.v3(endPos, gridRT.position.y, 0)})			
			sequence.call( function(){ 
				if(index != i) { 
					poolPage[i].root.active =(false)
					poolPage[i].btnPoint.interactable = true
				}
			})
			sequence.start()
		}
	},


};

module.exports = UIPayTable
