var G = require("Global")
var gameAudio = require("GameAudio")
var fmg  = require("FFunction")

var MsgBox = {
	extends: cc.Component,


	//- ui初始化
	initUi(){
		let slef = this
		
	    this.uiRoot = {}
		
    	// 画布查找
	    let canvas = cc.find("Canvas")
	    let root =cc.find("MsgBox", canvas)
	    root.active =(false)
	
	    this.uiRoot.root = root
	
	    this.uiRoot.bg =cc.find("bg", root).getComponent(cc.Sprite)
	    this.uiRoot.text =cc.find("bg/text", root).getComponent(cc.Label)
	    this.uiRoot.upLimit =cc.find("bg/text/Text", root).getComponent(cc.Label)
		cc.find("bg/Close_56",    root).getComponent(cc.Button).node.on('click',function(){
			gameAudio.btnClick()
			GameData.msgBox.hide()
		})
		cc.find("bg/ok", root).getComponent(cc.Button).node.on('click',function(){
			gameAudio.btnClick()
			GameData.msgBox.hide()
			if(self.okCall ){
				self.okCall()
				self.okCall = null
			}
		})
		cc.find("bg/no", root).getComponent(cc.Button).node.on('click',function(){
			gameAudio.btnClick()
			GameData.msgBox.hide()
		})
	
	},

	//- 退出
	onExit(){

	},

	//- 显示结算界面
	show(text,upLimit, okCall){
	    this.okCall = okCall
	    this.uiRoot.text.text = text
		this.uiRoot.upLimit.active =(upLimit)
	    fmg.popAnim(true, this.uiRoot.root, this.uiRoot.bg)
	},

	//- 隐藏结算界面
	hide(){
	    fmg.popAnim(false, this.uiRoot.root, this.uiRoot.bg)
	},


};

module.exports = MsgBox
