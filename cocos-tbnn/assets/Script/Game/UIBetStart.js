var G = require( "Global")
var GameG = require( "GameGlobal")
var networkQueue = require( "NetworkQueue")
var GameService = require("GameService")

var UIBetStart = {
	extends: cc.Component,

	Init(_this){
	    this.root = _this
		this.uibetstart = cc.find("ef_gamestart",this.root)
	    this.obj = cc.find("UIBetStart",this.root)
	},

	Show(){
        networkQueue.Pause()
	    GameG.PlayGameSound("adeBetBegin")
	    GameG.PlayGameSound("adeBetBeginMan")
	    uibetstart.active =(true)
		
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
			self.uibetstart.active =(false)
			GameService.SendUserActionCommit("gamebetstart")
			networkQueue.Resume()
		})
		sqs.start()	
	},
};

module.exports = UIBetStart
