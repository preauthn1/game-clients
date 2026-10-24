var HallG = require("Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var MDoTween = require("MDoTween")
var mReelResult = null
var mPayGroups = null
var mIndex = 0
var mTime = 0

/** 用途: 中獎賠付線資訊 */
var UIShowSymbol = {
	extends: cc.Component,

	Init(root){
		this.rootRect = root
		this.rootRect.active =(false)
			
		this.textCount = cc.find("TextCount",root).getComponent(cc.Label)
		this.textContent = cc.find("TextContent",root).getComponent(cc.Label)
		this.imageIcon = cc.find("ImageIcon",root).getComponent(cc.Sprite)
		
		this.doTween = new MDoTween(this.rootRect)
	},

	Show(x, y){
		let self = this
	// 有PayGroup才表演
		if(mPayGroups != null && mPayGroups.length > 0){	
			
			if(x == null){
				x = 0
			}
			if(y == null){
				y = 0
			}		
			
			GameG.NewDelay(function(){ 
	
				self.rootRect.active =(true)
			
				self.rootRect.position = cc.v2(x, y)
			
				let payGroup = mPayGroups[mIndex]
				self.textCount.string = payGroup.Count

				let reel = payGroup.BlinkPositions[0].Reel
				let row = payGroup.BlinkPositions[0].Row

				for(let i in mReelResult){
					let data = mReelResult[i]
					if(data.Position.Reel == reel){
						if(data.Position.Row == row){
							let spriteName = "symbol_n_" + data.Symbol.SymbolName
							GameG.SetImageSprite(self.imageIcon, spriteName)

							let symbolName = data.Symbol.SymbolName
							symbolName = gameData.ChangeSymbolName(symbolName)
							let detail = gameData.GetSymbolPayDetail(symbolName,payGroup.Count)
							self.textContent.string = detail.payout + "(x"+payGroup.Way+")"
						}
					}
				}
				
				mIndex = mIndex + 1
				
				if(mIndex >= mPayGroups.length) {
					mIndex = 0
				}
			},mTime, "ShowSymbol")
		}
	},

	Close(){
		GameG.CancelNewDelay("ShowSymbol")		
		this.rootRect.active =(false)	
	},

	SetGameResult(receiveMsg, t){
		
		mReelResult = receiveMsg.ReelResult
		mPayGroups = receiveMsg.PayGroups
		mTime = t
		mIndex = 0
		
	// console.log("SetGameResult : ", mReelResult, mPayGroups)
	},

	StartSpin(){
		this.Close()
	},

	Hide(){
		this.Close()
	},

	onExit(){
		this.Close()
	},


};

module.exports = UIShowSymbol
