var G = require( "Global")
var GameG = require( "GameGlobal")
var gameData = require("GameData")
var gameModel= require("GameModel")
var completeCallback = null
var completeOpen = false
let showTimer = 3.3

var UIBonusEnter = {
	extends: cc.Component,

//離開遊戲
	onExit(){
	
	},

	Init(root){
		this.rootRect = root
		this.rootRect.active =(false)
		
		this.rootWall = cc.find("RootWall",root)
		this.rootWall.active =(true)
		
		this.imgWall = cc.find("RootWall/Background",root).getComponent(cc.Sprite)	
		
		this.rootMask = cc.find("ImageMask",root)
		this.rootMask.active =(true)	
	},

// 回合開始
	SetGameStart(){
	
	},

// 回合結束
	SetGameEnd(){
	
	},

	Update(dt){
		
		if(this.rootWall.position.x > 0 && completeOpen == false){
			completeOpen = true
			if(completeCallback != null){
				completeCallback(showTimer * 0.5)
			}
		}
	},
	
	Show(callback){
		let self = this
		GameG.PlayGameSound("se_cutscenes")
			
		completeCallback = callback
		
		this.rootRect.active =(true)
		
		let _x = this.imgWall.node.width
		let _y = this.imgWall.node.y
		this.rootWall.position = cc.v2(-_x, 0)
			
		this.imgWall.scale = 1
		
		completeOpen = false
		
		let sequence = GameG.NewTween(this.rootWall)
		.to(showTimer, { position: cc.v2(_x + 150, _y), easing: 'quadOut'})
		.call(function(){
			self.Hide()
		})
		.start()
		
	},

// 關閉介面
	Hide(){		
		this.rootRect.active =(false)
	},


};

module.exports = UIBonusEnter
