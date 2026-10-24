var HallG = require("Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
let MDoTween = require("MDoTween")
var pool = []
var rootRect = null
var mIsEnable = false
var mCurrentIndex = 1

/** 用途: 黃金符號介面 */
var UIGoldSymbol = {
	extends: cc.Component,

//離開遊戲
	onExit(){
	
	},

	Init(root){
		let self = this
		rootRect = root
		
		this.doTween = new MDoTween(rootRect)
		
		this.imageAllUp = cc.find("ImageAllUp",rootRect).getComponent(cc.Sprite)
		this.imageFrame = cc.find("ImageFrame",rootRect).getComponent(cc.Sprite)
		this.sequenceFrame = null
		this.buttonGroup = cc.find("ButtonGroup",rootRect)
		this.Buttons = []
		for(let  i = 1;  i <=  this.buttonGroup.children.length; ++ i){
			this.Buttons[i] = []
			this.Buttons[i].enable = cc.find("Btn"+i+"/Enable",this.buttonGroup)
			this.Buttons[i].disable = cc.find("Btn"+i+"/Disable",this.buttonGroup)
			this.Buttons[i].btn = cc.find("Btn"+i,this.buttonGroup).getComponent(cc.Button)
			this.Buttons[i].btn.node.on('click',function(){
				
				if(mIsEnable == true){
					GameG.PlayGameSound("se_click")
					self.ChooseBtn(i)
					
					if(self.mRefreshFunc != null){
						self.mRefreshFunc()
					}
				}
			})
		}
		
		this.symbolGroup = cc.find("SymbolGroup",rootRect)	
		this.Symbols = []
		for(let  i = 1;  i <=  this.symbolGroup.children.length; ++ i){
			this.Symbols[i] = []
			this.Symbols[i].root = cc.find("Symbol"+i,this.symbolGroup)
			this.Symbols[i].imgIcon = cc.find("Icon",this.Symbols[i].root).getComponent(cc.Sprite)
			this.Symbols[i].imagRateBg = cc.find("Rate/Bg",this.Symbols[i].root).getComponent(cc.Sprite)
		}
		
		let symbolEnableLists = []
		symbolEnableLists[1] = [1, 0, 0, 0, 0]
		symbolEnableLists[2] = [1, 1, 0, 0, 0]
		symbolEnableLists[3] = [1, 1, 1, 0, 0]
		symbolEnableLists[4] = [1, 1, 1, 1, 0]
		symbolEnableLists[5] = [1, 1, 1, 1, 1]
			
		for(let i in this.Symbols){
			let symbolEnableList = symbolEnableLists[i]
			let triggers = []
			for(let j in symbolEnableList){ 
				let enable = symbolEnableList[j] 
				let index = parseInt(j) + 1

				triggers[index] = function(){
					let symbol = self.Symbols[index]
					let color = cc.Color.GRAY
					if(enable == 1){
						color = cc.Color.WHITE
					}
					symbol.imgIcon.node.color = color
					symbol.imagRateBg.node.color = color
				}
			}
			this.Symbols[i].Update = function(){
				for(let i in (triggers)){ 
					let j = triggers[i] 

					if(j != null) {
						j()
					}
				}
			}
		}
		
	// 預設選擇
		this.ChooseBtn(mCurrentIndex)
	},
	
	ShowFrame(){
		let self = this
		if(this.sequenceFrame != null){
			this.sequenceFrame.stop()
		}
		this.sequenceFrame = this.doTween.Create(this.imageFrame.node)
		.to(0.3, { opacity: 255 })
		.to(1, { opacity: 0 })
		.call(function(){
			self.sequenceFrame = null
		})
		.start()
	},
	
	SetSymbolEnable(index, isEnable){
		let symbol = this.Symbols[index]
		let color = cc.Color.WHITE
		if(isEnable == false){
			color = cc.Color.GRAY
		}
		symbol.imgIcon.node.color = color
		symbol.imagRateBg.node.color = color
	},	

// 選擇按鈕
	ChooseBtn(index){
		mCurrentIndex = index
		gameData.SetBetRateIndex(mCurrentIndex)
		
		for(let i in (this.Buttons)){ 
			let j = this.Buttons[i] 

			if(i == index){
				j.enable.active =(true)
			} 
			else{
				j.enable.active =(false)
				j.disable.active =(false)
			}
		}
		
		this.Symbols[mCurrentIndex].Update()
		
	// 最後一個才亮
		if(index == this.buttonGroup.children.length){
			this.imageAllUp.node.color = cc.Color.WHITE
		} 
		else{
			this.imageAllUp.node.color = cc.Color.GRAY
		}
		
		this.ShowFrame()
	},

// 設定選擇索引 - 依照數值尋找
	SetChooseIndex(value){
		let betRates = gameData.BetRates
		
		for(let i in (betRates)){ 
			let j = betRates[i] 

			if(j == value){
				this.ChooseBtn(parseInt(i) +1)
				return
			}
		}
		console.log("!!!!!!!!!!!!!! [Error] SetChooseIndex", value)
	},

// 取得目前所選階段
	GetChooseStep(){
		return mCurrentIndex
	},

// 設定按鈕可否互動
	SetBtnInteractable(isInteractable){
		for(let i in (this.Buttons)){ 
			let j = this.Buttons[i] 

			if(i == mCurrentIndex){
				j.disable.active =(isInteractable == false)
				j.enable.active =(isInteractable == true)			
			} 
			else{
				j.disable.active =(false)
				j.enable.active =(false)
				j.btn.interactable = isInteractable
			}
		}
	},

	SetTouchEnable(isEnable){
		mIsEnable = isEnable
		this.SetBtnInteractable(mIsEnable)
	},

	SetActive(isActive){
		rootRect.active =(isActive)
	},

// 回合開始
	SetGameStart(){
	
	},

// 回合結束
	SetGameEnd(){
		
	},

	SetRefresh(refreshFunc){
		this.mRefreshFunc = refreshFunc
	},


};

module.exports = UIGoldSymbol
