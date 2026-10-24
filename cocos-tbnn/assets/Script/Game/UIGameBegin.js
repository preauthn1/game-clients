var G = require( "Global")
var GameG = require( "GameGlobal")
var networkQueue = require( "NetworkQueue")
var GameService = require("GameService")
var ui_gamestart

var UIGameBegin = {
	extends: cc.Component,

	Init(root){
	    ui_gamestart = cc.find("bggroup/ui/ef_gamestart",root)
	},

	Show(){
		networkQueue.Resume()

		GameG.PlayGameSound("gamestart")
		   
	    ui_gamestart.active =(true)
		ui_gamestart.position = cc.v3(0,0,0)
		ui_gamestart.opacity = 0
		ui_gamestart.scale = 2

		let sqs = GameG.NewTween(ui_gamestart)
		sqs.to(0.2, {opacity: 255, scale: 1})
		sqs.to(0.25, {scale: 1.2})
		sqs.to(0.25, {scale: 0.9})
		sqs.to(0.25, {scale: 1.1})
		sqs.to(0.25, {scale: 1})
		sqs.delay(0.2)
		sqs.to(0.5, {position: cc.v3(2000,0,0)})
		sqs.call(function(){
	        ui_gamestart.active =(false)
	        GameService.SendUserActionCommit("gamestart")
			networkQueue.Resume()
		})
		sqs.start()			
	},
};

module.exports = UIGameBegin
