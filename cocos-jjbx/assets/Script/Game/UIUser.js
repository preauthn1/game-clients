var HallG = require("Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var uiinputEvent = require("UIInputEvent")

/** 用途: 玩家資訊 */
var UIUser = {
	extends: cc.Component,

	Init(root){	  
		this.rootRect = root
	//頭像
		this.imgHead = cc.find("ImageHead",root).getComponent(cc.Sprite)
	//玩家編號
		this.txtUserId = cc.find("TextUserId",root).getComponent(cc.Label)
	//攜帶金額
		this.txtCarryMoney = cc.find("TextCarryMoney",root).getComponent(cc.Label)	
	//贏得分數
		this.txtWinMoney = cc.find("TextWinMoney",root).getComponent(cc.Label)
		this.winMoney = 0
		this.MoneyLerp = 0
        this.callback  = null
	},

// 設置攜帶金額
	SetCarryMoney(money){
		this.txtCarryMoney.string = GameG.FormatUnit(money)
	},
	
// 設置贏得分數
	SetWinMoney(money){
		this.MoneyLerp = money
		this.winMoney = money
		this.txtWinMoney.string = GameG.FormatNum(this.winMoney)
	},
// 重置贏得分數
	ResetWinMoney(reset){
		if(reset == true){
			this.MoneyLerp = 0
			this.winMoney = 0
			this.txtWinMoney.string = ""			
		} 
		else{
			this.txtWinMoney.string = GameG.FormatNum(this.winMoney)
		}	
	},
// 表演贏得分數動畫
	AnimWinMoney(money,callback){
		if(money == 0) { 
			return
		}
				
		GameG.PlayGameSound("se_count",true)
	
		uiinputEvent.SetEventKeyDown(this.onKeyDown,"UIUser")
 
        this.callback = callback
		this.MoneyLerp = this.winMoney
		this.MoneyStart = this.winMoney
		this.winMoney = this.winMoney + money
		this.showTime = gameData.GetMoneyShowTimer(money) * 1000
		this.startTime = new Date().getTime()
	},

    Update(dt)
    {
        if(this.MoneyLerp != this.winMoney){

			this.MoneyLerp = Math.floor(cc.misc.lerp(this.MoneyStart, this.winMoney, (new Date().getTime() - this.startTime) / this.showTime))
			this.txtWinMoney.string = GameG.FormatNum(this.MoneyLerp)
			if(this.MoneyLerp >= this.winMoney){
				this.Complete()	
			}
		}
	},
	
	onKeyDown(event){
		UIUser.Complete()
	},
			
	
	Complete(){
		this.SetWinMoney(this.winMoney)
		GameG.CloseLoopSound("se_count")
		uiinputEvent.RemoveKey("UIUser")

		let self = this
		GameG.NewDelayOnce(function(){
			GameG.CloseLoopSound("se_count")
			if(self.callback != null){
				self.callback()
			}
		}, 1)
	},

	SetGameStart(){
		
	},
	
	SetGameEnd(data){
		
	},
// 設置玩家資訊
	SetGameUser(data){
	// GameG.SetImageSprite(this.imgHead, data.FaceID.toString())
		this.txtUserId.string = gameData.IDTitle + data.UserID.toString()
		this.txtCarryMoney.string = GameG.FormatNum(data.Score)
	},
	
	CheckShowWinMoney(){
		return (this.MoneyLerp != this.winMoney)
	},
	
	onExit(){
		GameG.CloseLoopSound("se_count")
	},


};

module.exports = UIUser
