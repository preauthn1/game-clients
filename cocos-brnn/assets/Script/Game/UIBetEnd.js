var GameG = require("GameGlobal")
var GameService = require("GameService")

var UIBetEnd = {
	extends: cc.Component,

	Init(root){
	    this.root = root
	    this.uibetend = cc.find("UIBetEnd",this.root)
	    this.obj = cc.find("UIBetEnd/UIBetEnd",this.root)
	},

	Show(){
		GameG.PlayGameSound("adeBetEnd")
		this.uibetend.active =(true)
		
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
			self.uibetend.active =(false)
			GameService.SendUserActionCommit("gamebetend")			
		})
		sqs.start()
	},


};

module.exports = UIBetEnd
