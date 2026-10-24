var G = require( "Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var gameControl =require("GameControl")

var UICheckZhuang = {
	extends: cc.Component,

	Hide(){
	    this.uicheckzhung.active =(false)
	},

	Init(root){
	    this.uicheckzhung = cc.find("UICheckZhuang",root)
		this.btn_cancel = cc.find("UICheckZhuang/ButtonCancel",root).getComponent(cc.Button)
	    this.btn_enter = cc.find("UICheckZhuang/ButtonEnter",root).getComponent(cc.Button)
		this.txt_zhuangLimit = cc.find("UICheckZhuang/TextZhuangLimit",root).getComponent(cc.Label)
		
		this.btn_cancel.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			UICheckZhuang.Hide()
		})
		
		this.btn_enter.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			UICheckZhuang.Hide()
			gameControl.BRNNShangZhuangID(true)
		})
	},

	Show(){
	    this.uicheckzhung.active =(true)
		this.txt_zhuangLimit.string = "(上庄最少需要金币"+G.FormatDecimal(gameData.ZhuangLimit,0)+")"
	},


};

module.exports = UICheckZhuang
