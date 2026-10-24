let GameG = require("GameGlobal")
let gameData = require("GameData")
let uiinputEvent = require("UIInputEvent")

let rootRect = null
let pageIndex = 1
let poolPage = []
let screenWidth = 1334
let actionTime = 0.2
let poolSymbol = []
let inputEvent = []
let dragDistance = 300
let dragPosition = null

/** 用途: 賠付表介面 */
var UIPayTable = {
	/** 遊戲離開(斷線重連) */
	onExit(){
		pageIndex = 1
		poolPage = []
		poolSymbol = []
		inputEvent = []
		dragPosition = null
    },
    /** 初始化 */
    Init(root){        
        rootRect = root
        rootRect.active = false

		screenWidth = GameG.GetScreenWidth()
        let self = this
		// 關閉按鈕
		this.btnHide = cc.find("ButtonHide",root).getComponent(cc.Button)
	    this.btnHide.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			self.Hide()
	    })
		// 上一頁按鈕
	    this.btnFront = cc.find("ButtonFront",root).getComponent(cc.Button)
	    this.btnFront.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			// 顯示選擇頁數的介面
			self.ShowPoolPage(pageIndex - 1)
	    })
		// 下一頁按鈕
	    this.btnNext = cc.find("ButtonNext",root).getComponent(cc.Button)
	    this.btnNext.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			// 顯示選擇頁數的介面
			self.ShowPoolPage(pageIndex + 1)
		})
		// 預載符號
		this.prefabSymbol = cc.find("PrefabSymbol",root)
		this.prefabSymbol.active = false
		// 預載頁數點點
		this.prefabPagePoint = cc.find("PagePoints/Button",root)
		this.prefabPagePoint.active = false

		this.poolRoot = cc.find("PoolPage",root)
		for(let i = 0; i < this.poolRoot.children.length; ++ i){
			let child = this.poolRoot.children[i]
			child.active = false
			let index = parseInt(i) +1
			poolPage[index] = []
			poolPage[index].root = child
			// 使用內建的cc.Layout排版(某些介面可能沒有)
			poolPage[index].layout = cc.find("Layout", child)
			// 子物件用於排版(某些介面可能沒有)
			poolPage[index].layoutPosition = cc.find("LayoutPosition", child)
			// 子物件使用多國語言(某些介面可能沒有)
			poolPage[index].localized = cc.find("LocalizedLabel", child)
			// 頁數點點
			let clone = GameG.CreateClone(this.prefabPagePoint)
			poolPage[index].rootPoint = cc.find("Image", clone)
			poolPage[index].rootPoint.active = false
			poolPage[index].btnPoint = clone.getComponent(cc.Button)
			poolPage[index].btnPoint.node.on('click',function(){ 
				GameG.PlayGameSound("se_click")
				// 顯示選擇頁數的介面
				self.ShowPoolPage(index)
			})

			if(poolPage[index].localized != null){
				let labels = poolPage[index].localized.getComponentsInChildren(cc.Label)
				for(let a in labels){
					labels[a].string = GameG.GetLocalizedString("paytable" + index + "_" + labels[a].node.name)
				}

				let labelSprites = poolPage[index].localized.getComponentsInChildren("LabelSprite")
				for(let a in labelSprites){
					labelSprites[a].Set(GameG.GetLocalizedString("paytable" + index + "_" + labelSprites[a].node.name))
				}
			}
		}
    },
    /** 顯示介面 */
    Show(){
		let self = this
		rootRect.active = true
		// 顯示選擇頁數的介面
		this.ShowPoolPage(pageIndex)
		// 設置符號資訊
		this.SetSymbol()
		// 點擊事件
		inputEvent.push(uiinputEvent.SetEventKeyDown(function(event){
			dragPosition = event.getLocation()
		}))
		// 放開事件
		inputEvent.push(uiinputEvent.SetEventKeyUp(function(event){
			dragPosition = null
		}))
		// 拖動事件
		inputEvent.push(uiinputEvent.SetEventKeyMove(function(event){
			if(dragPosition != null){
				let posX = dragPosition.x - event.getLocation().x
				if(posX > dragDistance) {	
					dragPosition = null
					// 顯示選擇頁數的介面
					self.ShowPoolPage(pageIndex + 1)
					GameG.PlayGameSound("se_click")	
				} 
				else if (posX < -dragDistance) {	
					dragPosition = null
					// 顯示選擇頁數的介面
					self.ShowPoolPage(pageIndex -1)
					GameG.PlayGameSound("se_click")
				}	
			}
		}))
    },
    /** 關閉介面 */
    Hide(){
		rootRect.active = false
		
		for(let i in inputEvent){
			uiinputEvent.RemoveKey(inputEvent.pop());
		}
	},
	/** 顯示選擇頁數的介面 */
	ShowPoolPage(index){
		let dir = (index > pageIndex) ? screenWidth : screenWidth *-1
		if(index <= 0){
			index = poolPage.length -1
		}
		else if(index >= poolPage.length){
			index = 1
		}
		let preIndex = pageIndex
		pageIndex = index
		
		if(preIndex != index){
			poolPage[index].root.position = cc.v2(dir, 0)

			let action = cc.tween().by(actionTime, {position: cc.v2(dir * -1, 0)})
			action.clone(poolPage[index].root).start();
			action.clone(poolPage[preIndex].root).start();
		}

		poolPage[index].root.active = true
		poolPage[index].rootPoint.active = true
		poolPage[preIndex].rootPoint.active = (preIndex == index)

		GameG.ScheduleOnce(function(){
			poolPage[preIndex].root.active = (preIndex == index)
		}, actionTime)
	},
	/** 設置符號資訊 */
	SetSymbol(){
		// 指定頁面要顯示的符號
		let pageSymbol = []
		pageSymbol[1] = ["p1","p2","p3","p4","p5"]
		pageSymbol[2] = ["p6","p7","p8","p9","p10","p11"]
		pageSymbol[3] = ["w1","s1"]
		// 用賠付值來排序
		pageSymbol[1].sort(function(symbolNameA,symbolNameB){
			symbolNameA = gameData.ChangeSymbolName(symbolNameA)
			let dataA = parseFloat(gameData.GetSymbolPayDetail(symbolNameA, 5).payout)
			symbolNameB = gameData.ChangeSymbolName(symbolNameB)
			let dataB = parseFloat(gameData.GetSymbolPayDetail(symbolNameB, 5).payout)
			if(dataA > dataB){
				return -1
			} 
			else if(dataA == dataB){	
				let valueA = symbolNameA.replace("p", "")
				let valueB = symbolNameB.replace("p", "")
				return (valueA - valueB) > 0 ? 1 : -1
			}
			return 1
		})

		let poolIndex = 0
		// 設置每頁要顯示的所有符號
		for(let pageIndex in pageSymbol){ 
			let symbolList = pageSymbol[pageIndex] 
	
			for(let i in symbolList){
				let index = poolIndex
				poolIndex = poolIndex +1
				
				if(poolSymbol[index] == null){
					let parent = poolPage[pageIndex].layout
					if(poolPage[pageIndex].layoutPosition != null){
						parent = poolPage[pageIndex].layoutPosition.children[i]
					}
					let clone = GameG.CreateClone(this.prefabSymbol, parent)
					poolSymbol[index] = {}
					poolSymbol[index].root = clone
					poolSymbol[index].img = cc.find("Image",clone).getComponent(cc.Sprite)
					poolSymbol[index].txt = []
					for(let i = 2; i <= 9; ++i){
						poolSymbol[index].txt[i] = cc.find("Count/Text"+ i +"/Text",clone).getComponent(cc.Label)
					}
				}
				
				// 符號名稱
				let symbolName = gameData.ChangeSymbolName(symbolList[i])
				// 設置符號圖案
				GameG.GetImageSprite(poolSymbol[index].img,"symbol_" + symbolName)
				// 設置賠付值
				for(let i in poolSymbol[index].txt){ 
					let detail = gameData.GetSymbolPayDetail(symbolName, i)
					poolSymbol[index].txt[i].node.parent.active = false
					if(detail != null && detail.paytable != null && detail.paytable != 0){
						poolSymbol[index].txt[i].node.parent.active = true
						poolSymbol[index].txt[i].string = detail.paytable
					}
				}		
				
				
			}
		}
	}
};

module.exports = UIPayTable