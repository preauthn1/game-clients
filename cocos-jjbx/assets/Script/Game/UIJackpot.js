var HallG = require("Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var gameModel = require("GameModel")
var gameLayer = null
var MDoTween = require("MDoTween")
var sequenceShow = null
var JP = {}

/** 用途: 由獎金池獲得的獎金 */
var UIJackpot = {
	extends: cc.Component,

//離開遊戲
	onExit(){
		KillSequence()
	},

	Init(root){
		gameLayer = require("GameLayer")
		this.rootRect = root
		this.rootRect.active =(false)
		
		this.doTween = new MDoTween(root)
		
	// JP
		JP = {}
		JP.root = cc.find("JP",root)
		JP.SetActive = function(isActive){
			JP.root.active =(isActive)
		}
		JP.Result = []
		JP.Result.root = cc.find("Result",JP.root)
		JP.Result.text = cc.find("Result/Text",JP.root).getComponent("TextControl")
		JP.ShowResult = function(value){
			JP.Result.text.string = value
			JP.Result.SetActive(true)
		}
		JP.Result.SetActive = function(isActive){
			JP.Result.root.active =(isActive)
		}
		JP.Result.SetActive(false)
		JP.SetActive(true)
	},

// 顯示介面
	Show(receiveMsg,callback){
		let self = this
		this.rootRect.active =(true)	
		
		let sequence = this.doTween.Create()
		.delay(2)
		.call(function(){
			let score = GameG.FormatNum(receiveMsg.JackpotMoney)
			JP.ShowResult(score)
			GameG.PlayGameSound("jp_grand")
		})
		.delay(6)
		.call(function(){
			JP.Result.SetActive(false)
		})
		.delay(2)
		.call(function(){
			let completeFunc = function(){
				if(callback != null){
					callback()
				}
				self.rootRect.active =(false)
			// 送給Server更新JPPool
				gameModel.SendJackpotPool()
			}
			gameLayer.FreeShowBigWin(receiveMsg.JackpotMoney, completeFunc)
		})
		.start()
	},

	SetStep(temp){
		txtCoin.string = GameG.FormatNum(temp)
	},

// 等待關閉介面
	WaitHide(coin){
		let self = this
		this.SetStep(coin)
		
		txtCoin.active =(true)
		txtCoin.scale = 1.5
	
		GameG.NewDelayOnce(function(){
			self.Hide()
		}, 2.0)
	},

// 關閉介面
	Hide(){
		this.rootRect.active =(false)
		GameG.PlayGameBGM("bgm_mg")
				
		if(completeCallback != null){
			completeCallback()
		}
	},


};

module.exports = UIJackpot
