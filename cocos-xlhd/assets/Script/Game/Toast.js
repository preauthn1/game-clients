//Date
//此文件由[BabeLua]插件自动生成
//endregion

var fmg = require("FFunction")
var GameG = require("GameGlobal")

var Toast = {
	extends: cc.Component,

	//- ui初始化
	init(){
	    this.hideTime = 1.5                         // 隐藏时间
	    
    	// 移动动画位置
		this.dtMovePos = [fmg.v3(0,0,0), fmg.v3(0,100,0)]

    	// 创建toast
		this.canvas = cc.find("Canvas/GameLayer")
		this.prefab = cc.find("Toast",this.canvas)
		this.prefab.active =(false)
	},

	//- 退出
	onExit(){

	},

	//- 显示结算界面
	show(textValue, tm){
		if (this.prefab == null || this.prefab.parent == null)
			this.init()

		tm = tm || this.hideTime

		let root = cc.instantiate(this.prefab)
		root.parent = this.canvas
		root.active = true
	    let bg = cc.find("bg",root)
		let text = cc.find("text",root).getComponent(cc.Label)
		text.string = "" + textValue

		// alpha anim
		bg.opacity = 0
		var sqs2 = GameG.NewTween(bg)
		sqs2.to(tm/3, {opacity: 255})
		sqs2.delay(tm/3)
		sqs2.to(tm/3, {opacity: 0})
		sqs2.start()

		text.node.opacity = 0
		var sqs2 = GameG.NewTween(text.node)
		sqs2.to(tm/3, {opacity: 255})
		sqs2.delay(tm/3)
		sqs2.to(tm/3, {opacity: 0})
		sqs2.start()		

		var sqs = GameG.NewTween(root)
		sqs.to(tm, {position: this.dtMovePos[1]})
		sqs.delay(tm)
		sqs.call(function(){
			root.destroy()
		})
		sqs.start()
	},


};

module.exports = Toast
