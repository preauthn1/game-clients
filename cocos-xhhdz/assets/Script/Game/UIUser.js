var G = require( "Global")
var GameG = require("GameGlobal")
var GameData = require("GameData")
var gameLayer = null

function UIUser(root)
{
	gameLayer = require("GameLayer")

	root.active =(false)
	
	let rootStartPos = root.position
	let rootStartScale = root.scale
	//头像
	let img_head =cc.find("head", root).getComponent(cc.Sprite)
	//编码
	let txt_id =cc.find("name", root).getComponent(cc.Label)
	//金额
	let txt_coin =cc.find("coinbg/coin", root).getComponent(cc.Label)

	let txt_addCoin =cc.find("addCoin", root).getComponent(cc.Label)
	let txt_subCoin =cc.find("subCoin", root).getComponent(cc.Label)
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
			txt_subCoin.string = gameLayer.MoneyText(data)
			obj = txt_subCoin.node
		} 
		else{
			txt_addCoin.string ="+"+ gameLayer.MoneyText(data)
			obj = txt_addCoin.node
		}

		obj.position = addCoinStartPos		
		var sqs = GameG.NewTween(obj)
		sqs.by(1.2, {position: cc.v2(0,60)})
		sqs.call(function(){
			obj.active =(false)

		})				
		sqs.start()
	}
	
	
	this.AnimShake = function(dir){
		var sqs = GameG.NewTween(root)
		sqs.to(0.1, {position: cc.v2(rootStartPos.x + dir,root.position.y)})
		sqs.to(0.15, {position: cc.v2(rootStartPos.x,root.position.y)})
		sqs.call(function(){
			root.position = rootStartPos
		})				
		sqs.start()
	}
	
	this.AnimChangeUser = function(){
		root.scale = rootStartScale

		var sqs = GameG.NewTween(root)
		sqs.to(0.25, {scaleX: 0, scaleY: 1.2})
		sqs.to(0.05, {scaleX: 1, scaleY: rootStartScale})
		sqs.call(function(){
			root.scale = cc.v3(1, 1, 1)
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

	this.SetActive = function(enable){
		root.active =(enable)
	}
	
	this.SetGameUser = function(data){
		//GameG.SetImageSprite(img_head, "", data.FaceID.toString())

		txt_id.string = GameData.IDTitle + (data.UserID).toString()
		txt_coin.string = gameLayer.MoneyText(data.Score)
	}
	
	this.SetHead = function(faceId){
		//GameG.SetImageSprite(img_head, "", faceId.toString())
	}
	
	this.SetUserId = function(id){
		if(txt_id.string != GameData.IDTitle + id.toString()){
			this.AnimChangeUser()
		}
		userId = id
		txt_id.string = GameData.IDTitle + toString(id)
	}
	
	this.SetScore = function(score){
		txt_coin.string = gameLayer.MoneyText(score)
	}
	
	this.GetPosition = function(){
		return GameG.LocalConvertWorldPointAR(img_head.node)
	}
	
	this.GetUserId = function(){
		return userId
	}
};

module.exports = UIUser
