var G = require( "Global")
var GameG = require("GameGlobal")
var UIUserPic = require("UIUserPic")
var gameData = require("GameData")

function UIUser(root) {
	root.active =(false)
	
	let rootStartPos = root.position
	//头像
	let img_head = cc.find("ImageHead",root).getComponent(cc.Sprite)
	//编码
	let txt_id = cc.find("TextId",root).getComponent(cc.Label)
	//金额
	let txt_coin = cc.find("TextCoin",root).getComponent(cc.Label)
	
	let txt_addCoin = cc.find("TextAddCoin",root).getComponent("TextControl")
	let txt_subCoin = cc.find("TextSubCoin",root).getComponent("TextControl")
	
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
			txt_subCoin.text = G.FormatDecimal(data)
			obj = txt_subCoin.node
		} 
		else{
			txt_addCoin.text ="+"+ G.FormatDecimal(data)
			obj = txt_addCoin.node
		}

		let targetPos = obj.position
		obj.position =  cc.v3(targetPos.x,30,targetPos.z)

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
		root.scale = 1

		var sqs = GameG.NewTween(root)
		sqs.to(0.25, {scaleX: 0, scaleY: 1.2})
		sqs.to(0.05, {scaleX: 1, scaleY: 1.1})
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
		userId = data.UserID
		root.active =(true)
		UIUserPic.ResetSpriteByName(img_head, data.FaceID.toString())
		txt_id.string = gameData.IDTitle + data.UserID.toString()
		txt_coin.string = G.FormatDecimal(data.Score)
	}
	
	this.SetHead = function(faceId){
		UIUserPic.ResetSpriteByName(img_head, faceId.toString())
	}
	
	this.SetUserId = function(id){
		if(userId != id ){
			this.AnimChangeUser()
		}
		userId = id
		txt_id.string = gameData.IDTitle + id.toString()
	}
	
	this.SetScore = function(score){
		txt_coin.string = G.FormatDecimal(score)
	}
	
	this.GetPosition = function(){
		return GameG.LocalConvertWorldPointAR(img_head.node)
	}
	
	this.GetUserId = function(){
		return userId
	}
};

module.exports = UIUser
