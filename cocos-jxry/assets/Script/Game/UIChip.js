var HallG = require("Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var MScrollChoose = require("MScrollChoose")
var rootRect = null
var rootOption = null
var prefab = null
var btnClose = null
var pool = []
var mScrollChoose = null
var currentIndex = 1
var clickCallback = null

var UIChip = {
	extends: cc.Component,

	Init(root)
	{
		rootRect = root
		rootRect.active =(false)
		
		rootOption = cc.find("ScrollView/Mask/Offset/Content/OptionGroup", root)
		
	    prefab = cc.find("ScrollView/Mask/Offset/Content/OptionGroup/ButtonOption", root)	
		prefab.active =(false)
			
		btnClose = cc.find("ButtonClose", root).getComponent(cc.Button)
		btnClose.node.on('click',function()
		{
			GameG.PlayGameSound("se_click")
			Hide()
	    })
		
		// 滾動
		let scrollRect = cc.find("ScrollView", root).getComponent(cc.ScrollView)		
		// 選項高度
		let optionHeight = prefab.height
		// 建立滾動
		mScrollChoose = new MScrollChoose(scrollRect, optionHeight, this.ChooseAction)
	},

	CreateClone(index)
	{
		let clone = cc.instantiate(prefab)
		if(clone == null){ return null }
		clone.active = (true)
		clone.parent = (prefab.parent)
		clone.position = cc.v3(0, 0, 0)
		clone.scale = cc.v3(1, 1, 1)
	
		pool[index] = []
		pool[index].root = clone
		pool[index].btn = clone.getComponent(cc.Button)
		pool[index].txtBet = cc.find("TextBet", clone).getComponent(cc.Label)
	},

	// 離開遊戲
	onExit()
	{
		// for i=1, pool.length do	
		for(let  i = 0; i < pool.length; ++ i)
		{	
			pool[i] = null
		}		
		mScrollChoose.Close()
	},

	// 回合開始
	SetGameStart()
	{
		Hide()
	},

	// 回合結束
	SetGameEnd()
	{
	
	},

	// 顯示介面
	Show()
	{
		rootRect.active =(true)
		
		mScrollChoose.Show()
		mScrollChoose.MoveIndexPos(currentIndex)
	},

	// 關閉介面
	Hide()
	{
		if(rootRect.activeSelf == false)
		{
			return
		}
		
		rootRect.active =(false)
	
		mScrollChoose.ChooseNow()
		mScrollChoose.Close()
	},

	//設定資料
	SetData(data)
	{	
		// 銷毀物件
		mScrollChoose.Destroy()
		
		pool = []
		for(let index in (data))
		{
			let count = data[index] 

			if(pool[index] == null )
			{
				this.CreateClone(index)
			}
			
			let tempIndex = index
			pool[index].root.active =(true)
//----->需重新編譯程式碼		pool[index].root:SetAsFirstSibling()
			pool[index].txtBet.text = GameG.FormatNum(count)
			pool[index].betCount = count
		}
			
		let pos = rootOption.position;
		rootOption.position = cc.v2(pos.x, 0)
		
		//設定Pool
		mScrollChoose.SetPool(pool)
		mScrollChoose.Infinity()
	},

	// 取得目前倍率
	GetCurrentBetCount()
	{
		return pool[currentIndex].betCount
	},

	// 取得目前索引
	GetCurrentIndex()
	{
		return currentIndex
	},

	// 取得目前所選位置
	GetCurrentPosition()
	{
		return pool[currentIndex].root.position
	},

	// 設定點擊後callback
	SetClickCallback(callback)
	{
		clickCallback = callback
	},

	// 設定目前索引
	SetCurrentIndex(index)
	{
		currentIndex = index
		if(clickCallback != null )
		{
			clickCallback()
		}
	},

	// 設定目前倍率
	SetCurrentBetCount(value)
	{
		for(let  i = 1;  i <=  pool.length; ++ i)
		{
			//	for i=1, pool.length do
			if(pool[i].betCount == value)
			{
				this.SetCurrentIndex(i)
				mScrollChoose.MoveIndexPos(currentIndex)
			}
		}
	},

	// 降低倍率
	ClickDown()
	{
		this.SetCurrentIndex(currentIndex -1)
		mScrollChoose.MoveIndexPos(currentIndex)
	},

	// 提高倍率
	ClickUp()
	{
		this.SetCurrentIndex(currentIndex +1)
		mScrollChoose.MoveIndexPos(currentIndex)
	},

	// 滾動結果
	ChooseAction(index)
	{
		this.SetCurrentIndex(index + 1)
	},


};

module.exports = UIChip
