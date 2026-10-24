var G = require( "Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var pool = []
/** 自動旋轉次數(-1.無限, 0.手動, 1~次數) */
var currentCount = 0
var clickCallback = null

/** 用途: 自動旋轉次數選擇 */
var UIAutoSpin = {
	extends: cc.Component,

//離開遊戲
	onExit(){
	
	},

	CreateClone(index){
		if(pool[index] != null) { return pool[index] }
		let clone = cc.instantiate(this.prefab)
		if(clone == null){ return null }
		clone.parent =(this.prefab.parent)
		clone.position = cc.v3(0, 0, 0)
		clone.scale = 1
		clone.name = this.prefab.name + index
		clone.active =(true)
			
		pool[index] = []
		pool[index].root = clone
		pool[index].btn = clone.getComponent(cc.Button)
		pool[index].txt = cc.find("Text",clone).getComponent(cc.Label)
	},
    /** 初始化 */
	Init(root){
		this.rootRect = root
		this.rootRect.active =(false)
		
		this.rootOption = cc.find("OptionGroup",root)
		
	    this.prefab = cc.find("OptionGroup/ButtonOption",root)	
		this.prefab.active =(false)
		
		this.btnClose = cc.find("ButtonClose",root).getComponent(cc.Button)
		this.btnClose.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			Hide()
	    })	
	},

	SetOptionList(data){
	for(let  i = 1;  i <=  data.length; ++ i){
			CreateClone(i)
			
			let tempIndex = i
			pool[i].count = data[i]
			pool[i].txt.string = data[i]
			pool[i].btn.node.on('click',function(){
				GameG.PlayGameSound("se_click")
				currentCount = data[tempIndex]
				Hide()
				if(clickCallback){
					clickCallback()
				}
			})
		}
	},

	SetManual(){
		currentCount = 0
	},

    /** 顯示介面(目前無此介面，故直接切換模式) */
	Show(callback){
		if(pool.length == 0){
			if(currentCount == -1){
				currentCount = 0
	} 
		else{
				currentCount = -1
			}
			if(callback){
				callback()
			}
			return
		}
		clickCallback = callback
	
		this.rootRect.active =(true)
		
		let _x = this.rootOption.width
		this.rootOption.position = cc.v2(_x, 0)
		
	//----->需重新編譯程式碼	let sequence = CS.DG.Tweening.DOTween.Sequence()
	//----->需重新編譯程式碼	sequence:Append(this.rootOption:DOAnchorPosX(0, 0.2))
	},

// 關閉介面
	Hide(){
		let _x = this.rootOption.width
		
	//----->需重新編譯程式碼	let sequence = CS.DG.Tweening.DOTween.Sequence()
	//----->需重新編譯程式碼	sequence:Append(this.rootOption:DOAnchorPosX(_x , 0.2))	
	//----->需重新編譯程式碼	sequence:OnComplete( function(){
	//----->需重新編譯程式碼		this.rootRect.active =(false)
	//----->需重新編譯程式碼	})
	},

// 取得是否自動旋轉
	GetIsAutoMode(){
		if(currentCount == -1){
			return true
	} 
	else if(currentCount > 0){

			return true
	} 
	else{
			return false
		}
	},
    /** 取得剩餘次數 */
	GetCurrentCount(){
		return currentCount
	},

// 回合開始
	SetGameStart(){	
	
	},

// 回合結束
	SetGameEnd(){
		
	},
	
// 開始轉動
	StartSpin(){
		if(currentCount > 0) {
			currentCount = currentCount -1
		}
	},

	StopSpin(){	
		
	},


};

module.exports = UIAutoSpin
