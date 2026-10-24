var G = require( "Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")

/** 用途: 遊戲類型-免費遊戲介面 */
var UIFreeSpin = {
	extends: cc.Component,

//離開遊戲
	onExit(){
	
	},
    /** 初始化 */
	Init(root, rootResult){
		this.rootRect = root
		this.rootRect.active =(false)
	},

//取得目前是否在free spin
	InState(){
		if(this.rootRect.active == true){		
			return true
		} 
		else{
			return false
		}
	},

    /** 顯示介面 */
	Show(){
	
	},
	
	onKeyDown(event){
		
	},
	
    /** 關閉介面 */
	Hide(score, closeCallback,openCallback){
		
	},

// 回合開始
	SetGameStart(){	
	
	},

// 回合結束
	SetGameEnd(){
		
	},

// 開始遊戲
	StartGame(){
		
	},


};

module.exports = UIFreeSpin
