var G = require( "Global")
var GameG = null
var UIUserPic = require("UIUserPic")
var gameData = null

function UIUser (root){
	let target = []
	
	GameG = require("GameGlobal")
	gameData = require("GameData")
	
	root.active =(false)
	
	let rootStartPos = root.position
	//头像
	let img_head = cc.find("head",root).getComponent(cc.Sprite)
	//编码
	let txt_id = cc.find("name",root).getComponent(cc.Label)
	//金额
	let txt_coin = cc.find("coinbg/coin",root).getComponent(cc.Label)
	let txt_subCoin = cc.find("subCoin",root).getComponent("TextControl")
	let txt_addCoin = cc.find("addCoin",root).getComponent("TextControl")
	let addCoinStartPos = txt_addCoin.node.position
	
	let userId = -1
	
	this.AnimAddCoin = function(data,timer){
		timer = timer || 1
		let rnum= parseInt(data/100)
		if(rnum == 0) { 
			return
		}
		txt_subCoin.node.active =(rnum < 0)
		txt_addCoin.node.active =(rnum > 0)
		
		let obj = null
		
		if(rnum < 0) {
			txt_subCoin.text = GameG.FormatUnit(data)
			obj = txt_subCoin
		} 
		else{
			txt_addCoin.text = "+" + GameG.FormatUnit(data)
			obj = txt_addCoin
		}
		
		obj.position = addCoinStartPos

		var sqs = GameG.NewTween(obj.node)
		sqs.by(1.2, {position: cc.v3(0,60,0)})
		//sqs.by(1.2, {position: addCoinStartPos + cc.v3(0,60,0)})
		sqs.delay(0.3)
		sqs.call(function(){
			obj.node.active =(false)
		})
		sqs.start()
	}
	
	
	this.AnimShake = function(dir){
		var sqs = GameG.NewTween(root)
		sqs.to(0.1, {position: cc.v3(rootStartPos.x + dir,root.position.y,0)})
		sqs.to(0.15, {position: cc.v3(rootStartPos.x,root.position.y,0)})
		sqs.call(function(){
			root.position = rootStartPos
		})
		sqs.start()
	}
	
	this.AnimChangeUser = function(){
		root.scale = 1
		var sqs = GameG.NewTween(root)
		sqs.to(0.4, { scaleX: 0, scaleY: 1.2 })
		sqs.to(0.4, { scaleX: 1, scaleY: 1})
		sqs.call(function(){
			root.scale = 1
		})
		sqs.start()
	}
	
	this.GameStart = function(){
		this.SetActive(false)
		userId = -1
	}
	
	this.GameEnd = function(data){
		this.SetActive(false)
		userId = -1
	}
//
	this.SetActive = function(enable){
		root.active =(enable)
	}
	
	this.SetGameUser = function(data){
		UIUserPic.ResetSpriteByName(img_head, (data.FaceID).toString())
		txt_id.string = gameData.IDTitle + (data.UserID).toString()
		txt_coin.string = GameG.FormatUnit(data.Score)
	}
	
	this.SetHead = function(faceId){
		UIUserPic.ResetSpriteByName(img_head, (faceId).toString())
	}
	
	this.SetUserId = function(id){
		if(userId != id ){
			this.AnimChangeUser()
		}
		userId = id
		txt_id.string = gameData.IDTitle + (id).toString()
	}
	
	this.SetScore = function(score){
		txt_coin.string = GameG.FormatUnit(score)
	}
	
	this.GetPosition = function(){
		return GameG.LocalConvertWorldPointAR(img_head.node)
	}
	
	this.GetUserId = function(){
		return userId
	}

};

module.exports = UIUser
