var G = require( "Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var rootRect
var prefab
var pool = []
var currentIndex = 0
var clickCallback = null

/** 用途: 下注金額介面 */
var UIChip = {
	extends: cc.Component,
    /** 初始化 */
	Init(root){
		let self = this
		rootRect = root
		rootRect.active =(false)
		// 預載物件
	    prefab = cc.find("ScrollView/Mask/OptionGroup/ButtonOption",root)	
		prefab.active =(false)
		// 關閉按鈕
		this.btnClose = cc.find("ButtonClose",root).getComponent(cc.Button)
		this.btnClose.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			self.Hide()
	    })
		
		// 滾動
		this.scrollRect = cc.find("ScrollView",root).getComponent("CCScrollView")
	},
    /** 複製預載物件 */
	CreateClone(index){
		let self = this
		let clone = cc.instantiate(prefab)
		if(clone == null){ return null }
		clone.active =(true)
		clone.parent =(prefab.parent)
		clone.position = cc.v3(0, 0, 0)
		clone.scale = 1
	
		pool[index] = {}
		pool[index].root = clone
		pool[index].btn = clone.getComponent(cc.Button)
		pool[index].btn.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			self.SetCurrentBetCount(pool[index].betCount)
	    })
		pool[index].txtBet = cc.find("TextBet",clone).getComponent(cc.Label)
	},

// 離開遊戲
	onExit(){	
		for(let i in pool){	
			pool[i] = null 
		}
		pool = []
	},

// 回合開始
	SetGameStart(){
		Hide()
	},

// 回合結束
	SetGameEnd(){
	
	},

// 顯示介面
	Show(){
		rootRect.active =(true)

		let index = this.GetCurrentBetCount()
		this.SetCurrentBetCount(index)

		// 滑動設定
		let self = this
		this.scrollRect.SetCallbackScrollEnd(function(event){
			let child = self.scrollRect.GetChildAlignCenter()
			let nearIndex = currentIndex
			for(let i in pool){
				if(pool[i].root.uuid == child.uuid){
					nearIndex = i
				}
			}
			self.SetCurrentIndex(nearIndex)
		});
	},

// 關閉介面
	Hide(){
		rootRect.active =(false)
	},

//設定資料
	SetData(data){
		for(let k in (pool)){ 
			let v = pool[k] 
			v.root.active =(false)
		}
		for(let index in (data)){ 
			let count = data[index] 

			if(pool[index] == null ){
				this.CreateClone(index)
			}
			
			pool[index].root.active =(true)
			pool[index].root.setSiblingIndex(0)
			pool[index].txtBet.string = GameG.FormatNum(count)
			pool[index].betCount = count
		}		
	},

// 取得目前倍率
	GetCurrentBetCount(){
		return pool[currentIndex].betCount
	},

// 取得目前索引
	GetCurrentIndex(){
		return currentIndex
	},

// 取得目前所選位置
	GetCurrentPosition(){
		return pool[currentIndex].root.position
	},

// 設定點擊後callback
	SetClickCallback(callback){
		clickCallback = callback
	},

// 設定目前索引
	SetCurrentIndex(index){
		currentIndex = index
		this.scrollRect.SetChildAlignCenter(pool[index].root)
		if(clickCallback != null ){
			clickCallback()
		}
	},

// 設定目前倍率
	SetCurrentBetCount(value){
		for(let i in pool){
			if(pool[i].betCount == value){
				this.SetCurrentIndex(i)
			}
		}
	},

// 降低倍率
	ClickDown(){
		this.SetCurrentIndex(currentIndex -1)
	},

// 提高倍率
	ClickUp(){
		this.SetCurrentIndex(currentIndex +1)
	},
};

module.exports = UIChip
