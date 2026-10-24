var G = require( "Global")
var GameG = require("GameGlobal")
var fmg = require("FFunction")

var UIMessage = {
	extends: cc.Component,

	Init(root){
	    this.hideTime = 1.5                         // 隐藏时间
	    
    	// 移动动画位置
		this.dtMovePos = [fmg.v3(0,0,0), fmg.v3(0,100,0)]

    	// 创建toast
		this.canvas = cc.find("Canvas/GameLayer")
		this.prefab = cc.find("UIMessage",this.canvas)
		this.prefab.active =(false)
	},

	Show(message,timer){
		if (this.prefab == null)
		this.initUi()

		let tm = timer || this.hideTime

		let root = cc.instantiate(this.prefab)
		root.parent = this.canvas
		root.active = true
		let left = cc.find("Left",root).getComponent(cc.Sprite)
		let right = cc.find("Right",root).getComponent(cc.Sprite)
		let text = cc.find("Text",root).getComponent(cc.Label)
				
		text.string = "" + message

		// alpha anim
		left.node.opacity = 0
		var sqs2 = GameG.NewTween(left.node)
		sqs2.to(tm/3, {opacity: 255})
		sqs2.delay(tm/3)
		sqs2.to(tm/3, {opacity: 0})
		sqs2.start()

		right.node.opacity = 0
		var sqs2 = GameG.NewTween(right.node)
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

	Create(){
	    let clone = cc.instantiate(uimessage)
		if(clone == null){ return null }
		clone.parent =(this.root)
		clone.position = cc.v3(0, 0, 0)
		clone.scale = 1
		
		return clone
	},


};

module.exports = UIMessage
