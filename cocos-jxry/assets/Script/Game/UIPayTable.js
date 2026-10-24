var HallG = require("Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var poolPage = []
var poolSymbol = []
var poolPayLine = []
var index = 1
var pageCount = 5
var pagePayLines = 4 //賠付線的頁數
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

var UIPayTable = 
{
	extends: cc.Component,

	Init(root)
	{		
		poolPage = []
	    poolSymbol = []
	    poolPayLine = []
		
		this.rootRect = root
		this.rootRect.active =(false)
		
		this.btnBack = cc.find("ButtonBack", root).getComponent(cc.Button)
	    this.btnBack.node.on('click',function()
		{
			GameG.PlayGameSound("se_click")
			Hide()
	    })
		
	    this.btnFront = cc.find("ButtonFront", root).getComponent(cc.Button)
	    this.btnFront.node.on('click',function()
		{
			GameG.PlayGameSound("se_click")
			RefreshPoolPage(-1)
	    })
		
	    this.btnNext = cc.find("ButtonNext", root).getComponent(cc.Button)
	    this.btnNext.node.on('click',function()
		{
			GameG.PlayGameSound("se_click")
			RefreshPoolPage(1)
	    })
		
		this.pagePointPrefab = cc.find("PagePoints/Point", root)
		this.pagePointPrefab.active =(false)
			
		this.poolRoot = cc.find("PoolPage", root)
		//	for i = 0, poolRoot.children.length - 1, 1 do
		for(let i = 0;i <= this.poolRoot.children.length - 1;++i)
		{
			let child = this.poolRoot.children[i]
			poolPage[i +1] = []
			poolPage[i +1].root = child
			poolPage[i +1].grid1 = cc.find("Grid1", child) //某些介面可能沒有
			poolPage[i +1].grid2 = cc.find("Grid2", child) //某些介面可能沒有
			poolPage[i +1].root.active =(false)
			
			// 建立點點
			let point = cc.instantiate(this.pagePointPrefab)
			point.parent = (this.pagePointPrefab.parent)
			point.position = cc.v3(0, 0, 0)
			point.scale = cc.v3(1, 1, 1)		
			point.active = (true)
			let btnPoint = cc.find("Button", point).getComponent(cc.Button)
			btnPoint.node.on('click',function()
			{
				GameG.PlayGameSound("se_click")
				SetPoolPage(i +1)
			})
			btnPoint.color = cc.Color(1,1,1,0.5)
			poolPage[i +1].btnPoint = btnPoint
		}
		
		this.prefabSymbol = cc.find("PrefabSymbol", root)
		this.prefabPayLine = cc.find("PrefabPayLine", root)
		
		let width = GameG.GetScreenWidth()
		
		if(width > screenWidth)
		{
			screenWidth = width
		}
	},

	onExit()
	{
		//	for i= 1, poolSymbol.length do poolSymbol[i] = null }
		for(let  i =  1;  i <=  poolSymbol.length; ++ i)
		{ 
			poolSymbol[i] = null 
		}
	},

	CreateSymbol(index)
	{
		if(poolSymbol[index] != null) 
		{ 
			return 	
		}
		
		let clone = cc.instantiate(prefabSymbol)
		if(clone == null)
		{ 
			return null 
		}
		clone.parent = (this.poolRoot)
		clone.position = cc.v3(0, 0, 0)
		clone.scale = cc.v3(1, 1, 1)
		clone.active =(false)
		
		poolSymbol[index] = []
		poolSymbol[index].root = clone
		poolSymbol[index].img =cc.find("Image", clone).getComponent(cc.Sprite)
		poolSymbol[index].txt = []
		poolSymbol[index].txt[2] =cc.find("Count/Text2", clone).getComponent(cc.Label)
		poolSymbol[index].txt[3] =cc.find("Count/Text3", clone).getComponent(cc.Label)
		poolSymbol[index].txt[4] =cc.find("Count/Text4", clone).getComponent(cc.Label)
		poolSymbol[index].txt[5] =cc.find("Count/Text5", clone).getComponent(cc.Label)
		poolSymbol[index].txt[6] =cc.find("Count/Text6", clone).getComponent(cc.Label)
		poolSymbol[index].txt[7] =cc.find("Count/Text7", clone).getComponent(cc.Label)
		poolSymbol[index].txt[8] =cc.find("Count/Text8", clone).getComponent(cc.Label)
		poolSymbol[index].txt[9] =cc.find("Count/Text9", clone).getComponent(cc.Label)
		poolSymbol[index].txtTitle =cc.find("TextTitle", clone).getComponent(cc.Label)
		poolSymbol[index].txtContent =cc.find("TextContent", clone).getComponent(cc.Label)
	},

	CreatePayLine(index)
	{
		if(poolPayLine[index] != null) { return }
		let clone = cc.instantiate(this.prefabPayLine)
		if(clone == null){ return null }
		
		let parent = poolPage[pagePayLines].grid || poolPage[pagePayLines].root
		clone.parent =(parent)
		clone.position = cc.v3(0, 0, 0)
		clone.scale = cc.v3(1, 1, 1)
		clone.active =(false)
			
		poolPayLine[index] = []
		poolPayLine[index].root = clone
		poolPayLine[index].txtNo =cc.find("TextNo", clone).getComponent(cc.Label)
		poolPayLine[index].grid =cc.find("Grid", clone)
		poolPayLine[index].payLine = []
		
		//	for i = 0, poolPayLine[index].grid.children.length - 1, 1 do
		for(let i = 0;i <= poolPayLine[index].grid.children.length - 1; ++i)
		{
			let child = poolPayLine[index].grid.children[i]
			poolPayLine[index].payLine[i + 1] = child.getComponent(cc.Sprite)
			poolPayLine[index].payLine[i + 1].active = (false)		
		}
	},

	SetPayLines()
	{
		if(gameData.PayLines == null)
		{
			return
		}
		
		for(let k in (gameData.PayLines))
		{
			let v = gameData.PayLines[k] 

			CreatePayLine(k)
			
			poolPayLine[k].txtNo.text = v.PayLineID
			poolPayLine[k].root.active =(true)
				
			// for i=1, poolPayLine[k].payLine.length do
			for(let  i = 1;  i <=  poolPayLine[k].payLine.length; ++ i)
			{
				poolPayLine[k].payLine[i].active =(false)
			}
				
			// for i=1, v.Positions.length do
			for(let  i = 1;  i <=  v.Positions.length; ++ i)
			{
				let reel = v.Positions[i].Reel
				let row = v.Positions[i].Row
				
				let index = (reel -1) * gameData.RowCounts + row	
				if(poolPayLine[k].payLine[index] != null)
				{
					poolPayLine[k].payLine[index].active =(true)
				}
			}
		}
	},

	SetSymbol()
	{
		let SetData = function(pageIndex, poolIndex, symbolName, gridIndex)
		{
			symbolName = gameData.ChangeSymbolName(symbolName)
			let data = gameData.SymbolPayTable[symbolName]
			if(data == null)
			{
				return
			}
			
			if(poolIndex > poolSymbol.length)
			{
				CreateSymbol(poolIndex)
			}
			
			let parent = poolPage[pageIndex].root
			if(poolPage[pageIndex].grid1 != null && gridIndex == 1)
			{
				parent = poolPage[pageIndex].grid1
			} 
			else if(poolPage[pageIndex].grid2 != null && gridIndex == 2)
			{
				parent = poolPage[pageIndex].grid2
			}
			poolSymbol[poolIndex].root.parent =(parent)
			poolSymbol[poolIndex].root.scale = cc.v3(1, 1, 1)
			poolSymbol[poolIndex].root.active =(true)
			GameG.SetImageSprite(poolSymbol[poolIndex].img,"symbol_n_" + symbolName)
			
			for(let k in (poolSymbol[poolIndex].txt))
			{
				let v = poolSymbol[poolIndex].txt[k] 
			
				let detail = gameData.GetSymbolPayDetail(symbolName,k)
				poolSymbol[poolIndex].txt[k].active =(detail != null)
				if(detail != null)
				{
					poolSymbol[poolIndex].txt[k].text = detail.payout
				}
			}
			poolSymbol[poolIndex].txtTitle.text = data.title
			poolSymbol[poolIndex].txtContent.text = data.desc
		}
			
		let compare = function(symbolNameA,symbolNameB)
		{
			symbolNameA = gameData.ChangeSymbolName(symbolNameA)
			let dataA = gameData.SymbolPayTable[symbolNameA].detail[5].payout
			symbolNameB = gameData.ChangeSymbolName(symbolNameB)
			let dataB = gameData.SymbolPayTable[symbolNameB].detail[5].payout
			if(dataA > dataB)
			{
				return true
			} 
			else if(dataA == dataB)
			{
				let valueA = string.gsub(symbolNameA, "p", "")
				let valueB = string.gsub(symbolNameB, "p", "")
				return valueA < valueB
			}
			return false
		}
		
		let poolIndex = 1
		let pageSymbol = []
		pageSymbol[1] = ["p1","p2","p3","p4","p5"]
		pageSymbol[2] = ["p6","p7","p8","p9","p10","p11"]
		
		let pageGrid = []
		pageGrid[1] = [1,1,2,2,2]
		pageGrid[2] = [1,1,1,2,2,2]
		
		table.sort(pageSymbol[1],compare)
		table.sort(pageSymbol[2],compare)
		for(let pageIndex in (pageSymbol))
		{
			let symbolList = pageSymbol[pageIndex] 
		
			// for i=1, symbolList.length do	
			for(let i = 1;  i <= symbolList.length; ++i)
			{
				let gridIndex = pageGrid[pageIndex][i]
				SetData(pageIndex,poolIndex,symbolList[i],gridIndex)			
				poolIndex = poolIndex +1
			}
		}	
	},

	// 顯示介面
	Show()
	{
		this.rootRect.active =(true)	
			
		// symbol
		SetSymbol()
		
		// payLine
		SetPayLines()
		
		// 不是第一個 先關閉當前在設定1 因為不要滑動 所以這邊設
		if(index != 1)
		{
			SetPoolButtonPoint(index, false, true, 0)
			index = 1
			SetPoolButtonPoint(index, true, true, 0)
		} 
		else
		{
			SetPoolButtonPoint(index, true, true, 0)
		}
		
//----->需重新編譯程式碼	dragSequence = CS.DG.Tweening.DOTween.Sequence()
//----->需重新編譯程式碼	dragSequence:SetLoops(-1,CS.DG.Tweening.LoopType.Restart)
//----->需重新編譯程式碼	dragSequence:OnUpdate(function(){
//----->需重新編譯程式碼		// 按下
//----->需重新編譯程式碼		if(CS.UnityEngine.Input:GetMouseButtonDown(0)){
//----->需重新編譯程式碼			isDragPage = true
//----->需重新編譯程式碼			currentDragPos = CS.UnityEngine.Input.mousePosition
//----->需重新編譯程式碼		}		
//----->需重新編譯程式碼		// 按上
//----->需重新編譯程式碼		if(CS.UnityEngine.Input:GetMouseButtonUp(0)){
//----->需重新編譯程式碼			isDragPage = false
//----->需重新編譯程式碼		}
//----->需重新編譯程式碼		if(isDragPage){
//----->需重新編譯程式碼			let pos = CS.UnityEngine.Input.mousePosition
//----->需重新編譯程式碼			let posX = currentDragPos.x - pos.x
//----->需重新編譯程式碼			if(posX > dragDistance) {
//----->需重新編譯程式碼				isDragPage = false
//----->需重新編譯程式碼				RefreshPoolPage(1)
//----->需重新編譯程式碼				GameG.PlayGameSound("se_click")
	//----->需重新編譯程式碼} 
//----->需重新編譯程式碼			else if (posX < -dragDistance) {
//----->需重新編譯程式碼
//----->需重新編譯程式碼				isDragPage = false
//----->需重新編譯程式碼				RefreshPoolPage(-1)
//----->需重新編譯程式碼				GameG.PlayGameSound("se_click")
//----->需重新編譯程式碼			}
//----->需重新編譯程式碼		}
//----->需重新編譯程式碼	})
	},

	// 關閉介面
	Hide()
	{
		this.rootRect.active =(false)
		
		if(dragSequence != null) 
		{
			//----->需重新編譯程式碼		dragSequence:Kill()
		}
	},

	RefreshPoolPage(offset)
	{
		SetPoolPage(index + offset)
	},

	// 設定頁
	SetPoolPage(pageIndex)
	{	
		let isLeft = index < pageIndex
			
		SetPoolButtonPoint(index, false, isLeft, pageTimeSpeed)
		index = pageIndex;
		
		if(pageBtnLoop == true)
		{
			if(index < 1)
			{
				index = poolPage.length
			}
			else if(index > poolPage.length) 
			{
				index = 1
			}
		}
		
		SetPoolButtonPoint(index, true, isLeft, pageTimeSpeed)
		
		if(pageBtnLoop == false)
		{
			this.btnFront.interactable = (pageIndex > 1)
			this.btnNext.interactable = (pageIndex < poolPage.length)
		}	
	},

	SetPoolButtonPoint(i, isActive, isLeft, timeSpeed)
	{
		let startPos
		let endPos
		if(isActive)
		{
			if(isLeft) 
			{
				startPos = screenWidth
				endPos = 0
			} 
			else
			{
				startPos = -screenWidth
				endPos = 0
			}
		} 
		else
		{
			if(isLeft) 
			{
				startPos = 0
				endPos = -screenWidth
			} 
			else
			{
				startPos = 0
				endPos = screenWidth
			}
		}
		if(isActive) 
		{
			poolPage[i].btnPoint.image.color = cc.Color.white
			
			let gridRT = poolPage[i].root
			gridRT.anchoredPosition = cc.v2(startPos, gridRT.anchoredPosition.y)	
//----->需重新編譯程式碼		let sequence = CS.DG.Tweening.DOTween.Sequence()
//----->需重新編譯程式碼		sequence:Append(gridRT:DOAnchorPosX(endPos, timeSpeed))
			poolPage[i].root.active =(true)
			poolPage[i].btnPoint.interactable = false
		}
		else
		{
			poolPage[i].btnPoint.image.color = cc.Color(1,1,1,0.5)
			
			let gridRT = poolPage[i].root
			gridRT.anchoredPosition = cc.v2(startPos, gridRT.anchoredPosition.y)	
//----->需重新編譯程式碼		let sequence = CS.DG.Tweening.DOTween.Sequence()
//----->需重新編譯程式碼		sequence:Append(gridRT:DOAnchorPosX(endPos, timeSpeed))
//----->需重新編譯程式碼		sequence.call( function(){ 
//----->需重新編譯程式碼			if(index != i) { 
//----->需重新編譯程式碼				poolPage[i].root.active =(false)
//----->需重新編譯程式碼				poolPage[i].btnPoint.interactable = true
//----->需重新編譯程式碼			}
//----->需重新編譯程式碼		})
		}
	},
};

module.exports = UIPayTable
