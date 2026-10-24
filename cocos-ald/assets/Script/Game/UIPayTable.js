var G = require( "Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var uiinputEvent = require("UIInputEvent")
var poolPage = []
var poolSymbol = []
var poolPayLine = []
var index = 1
var pageCount = 5
var pageSetData
var screenWidth = 1334
var isDragPage
var currentDragPos
var dragSequence
// 頁面按鈕是否要循環
var pageBtnLoop = true
// 切頁速度
var pageTimeSpeed = 0.3
// 拖曳距離
var dragDistance = 300

/** 用途: 賠付表介面 */
var UIPayTable = {
	extends: cc.Component,

	Init(root){
		
	// 頁面設定資料
		pageSetData = []
		pageSetData[1] = {}
		pageSetData[1].pos = [[-250, 175], [250, 175], [-400, -35], [0, -35], [400, -35]]
		pageSetData[2] = {}
		pageSetData[2].pos = [[-150, 170], [400, 170]]
		pageSetData[2].iconSizeRate = 1.2
		pageSetData[2].textPos = [-110, -220]
		
		poolPage = []
	    poolSymbol = []
	    poolPayLine = []
		
		this.rootRect = root
		this.rootRect.active =(false)
		
		let self = this
		// 關閉按鈕
		this.btn_back = cc.find("ButtonBack",root).getComponent(cc.Button)
	    this.btn_back.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			self.Hide()
	    })
		// 上一頁按鈕
	    this.btn_front = cc.find("ButtonFront",root).getComponent(cc.Button)
	    this.btn_front.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			self.RefreshPoolPage(-1)
	    })
		// 下一頁按鈕
	    this.btn_next = cc.find("ButtonNext",root).getComponent(cc.Button)
	    this.btn_next.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			self.RefreshPoolPage(1)
	    })
		// 預載頁數點點
		this.pagePointPrefab = cc.find("PagePoints/Point",root)
		this.pagePointPrefab.active =(false)
		
		this.txtPickGame = cc.find("PoolPage/RawImage (3)/TextExplain",root).getComponent(cc.Label)
		this.txtPayLine = cc.find("PoolPage/RawImage (4)/TextExplain",root).getComponent(cc.Label)
		
		this.poolRoot = cc.find("PoolPage",root)
		for(let  i  =  0;  i  <=  this.poolRoot.children.length - 1; ++ i ){
			let child = this.poolRoot.children[i]
			poolPage[i +1] = {}
			poolPage[i +1].root = child
			poolPage[i +1].grid = cc.find("Grid",child) //某些介面可能沒有
			
			let psd = pageSetData[i + 1]
			if(psd != null) {
			// 有位置資料 關閉GridLayoutGroup
				if(psd.pos != null) {				
					if(poolPage[i +1].grid != null) {
						// poolPage[i +1].grid.getComponent(cc.Layout).enabled = false
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
				self.SetPoolPage(i +1)
			})
			btnPoint.node.opacity = 150
			poolPage[i +1].btnPoint = btnPoint
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
		
		let pageIndex = 4
		let parent = poolPage[pageIndex].grid || poolPage[pageIndex].root
		clone.parent =(parent)
		clone.position = cc.v3(0, 0, 0)
		clone.scale = 1
		clone.active =(false)
		
		poolPayLine[index] = {}
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
		let self = this
		this.rootRect.active =(true)	
		
		this.txtPayLine.string = gameData.PayLineDesc
		this.txtPickGame.string = gameData.SymbolPayTable["w1"].desc
		
		this.keyDown = uiinputEvent.SetEventKeyDown(this.onKeyDown)
		this.keyUp = uiinputEvent.SetEventKeyUp(this.onKeyUp)
		this.keyMove = uiinputEvent.SetEventKeyMove(this.onKeyMove)

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
			GameG.SetImageSprite(poolSymbol[poolIndex].img, G.GetGamePName(), "symbol_n_" + symbolName, true)
			
		// 頁面設定
			let psd = pageSetData[pageIndex]
			if(psd != null) {
			// 設定位置
				if(psd.pos != null) {
					let symbloRT = poolSymbol[poolIndex].root
					let i = poolIndex - 1
					if (i >= pageSetData[1].pos.length)
						i = i - pageSetData[1].pos.length
					//let i = symbloRT.getSiblingIndex() + 1
					let pos = psd.pos[i]
					symbloRT.position = cc.v2(pos[0], pos[1])
				}
			// 設定Icon大小
				if(psd.iconSizeRate != null) {
					let img = poolSymbol[poolIndex].img
					img.node.scale = psd.iconSizeRate
				}
			// 設定文字位置
				if(psd.textPos != null) {
					let countRT = cc.find("Count",poolSymbol[poolIndex].root)
					let pos = psd.textPos
					countRT.position = cc.v2(pos[0], pos[1])
				}
			}
					
			for(let k in (poolSymbol[poolIndex].txt)){ 
				let v = poolSymbol[poolIndex].txt[k] 
				let detail = gameData.GetSymbolPayDetail(symbolName,k)
				poolSymbol[poolIndex].txt[k].node.parent.active =(detail != null)				
				if(detail != null){
					poolSymbol[poolIndex].txt[k].string = GameG.AbbreviateNumber(detail.payout)
				}
			}
			poolSymbol[poolIndex].txtTitle.string = data.title || ""
			poolSymbol[poolIndex].txtContent.string = data.desc || ""
		}
		
		let compare = function(symbolNameA,symbolNameB){
			symbolNameA = gameData.ChangeSymbolName(symbolNameA)
			let dataA = gameData.SymbolPayTable[symbolNameA].detail[5].payout
			symbolNameB = gameData.ChangeSymbolName(symbolNameB)
			let dataB = gameData.SymbolPayTable[symbolNameB].detail[5].payout
			
			return dataB - dataA
		}
		
		let poolIndex = 1
		let pageSymbol = []
		pageSymbol[1] = ["p3","p4","p5","p6", "p7"]
		pageSymbol[2] = ["p1","p2"]
		
		pageSymbol[1].sort(compare)
		pageSymbol[2].sort(compare)
		for(let pageIndex in (pageSymbol)){ 
			let symbolList = pageSymbol[pageIndex] 
			for(let i in symbolList){	
				SetData(pageIndex,poolIndex,symbolList[i])			
				poolIndex = poolIndex +1
			}
		}	
			
		// payLine
		for(let k in (gameData.PayLines)){ 
			let v = gameData.PayLines[k] 
	
			this.CreatePayLine(k)
			
			poolPayLine[k].txtNo.string = v.PayLineID
			poolPayLine[k].root.active =(true)
			
			for(let  i in poolPayLine[k].payLine){
				poolPayLine[k].payLine[i].node.active =(false)
			}
			
			for(let  i in v.Positions){
				let reel = v.Positions[i].Reel
				let row = v.Positions[i].Row
				
				let index = (reel -1) * gameData.RowCounts + row	
				if(poolPayLine[k].payLine[index] != null){
					poolPayLine[k].payLine[index].node.active =(true)
				}
			}
		}
		
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
			this.btn_front.interactable = (pageIndex > 1)
			this.btn_next.interactable = (pageIndex <= poolPage.length)
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
			poolPage[i].btnPoint.node.opacity = 255
			poolPage[i].root.active =(true)
			poolPage[i].btnPoint.interactable = false
			
			let gridRT = poolPage[i].root
			gridRT.position = cc.v2(startPos, gridRT.position.y)
			let sequence = GameG.NewTween(gridRT)			
			sequence.to(timeSpeed, {position: cc.v3(endPos, gridRT.position.y, 0)})	
			sequence.start()
		} 
		else{
			poolPage[i].btnPoint.node.opacity = 255 * 0.5
			
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
