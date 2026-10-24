var GameService = require("GameService")
var GameG = require("GameGlobal")

var UIStart = {
	extends: cc.Component,

	Init(_this){
	    this.root = _this
	    this.uistart = cc.find("UIStart",this.root)
	    this.obj = cc.find("UIStart/UIGameStart",this.root)
	},

	Show(){		
		this.uistart.active =(true)
		
		let self = this
		
		let obj = this.obj
		obj.position = cc.v3(0,0,0)
		obj.opacity = 0
		obj.scale = 2

		let sqs = GameG.NewTween(obj)
		sqs.to(0.2, {opacity: 255, scale: 1})
		sqs.to(0.25, {scale: 1.2})
		sqs.to(0.25, {scale: 0.9})
		sqs.to(0.25, {scale: 1.1})
		sqs.to(0.25, {scale: 1})
		sqs.delay(0.2)
		sqs.to(0.5, {position: cc.v3(2000,0,0)})
		sqs.call(function(){
			self.uistart.active =(false)
			GameService.SendUserActionCommit("gamestart")
		})
		sqs.start()
		
		this.sqs = sqs
	},

	Hide(){
		if (this.sqs)
			this.sqs.stop()
		
		this.uistart.active =(false)
	}

};

module.exports = UIStart
