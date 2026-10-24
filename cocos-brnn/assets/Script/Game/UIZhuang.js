var G = require( "Global")
var GameG = require("GameGlobal")
var UIUserPic = require("UIUserPic")
var gameData = require("GameData")

function UIZhuang(root) {
	//头像
	let img_head = cc.find("ImageHead",root).getComponent(cc.Sprite)
	//编码
	let txt_id = cc.find("Id/Text",root).getComponent(cc.Label)
	//金额
	let root_coin = cc.find("Coin",root)
	let txt_coin = cc.find("Coin/Text",root).getComponent(cc.Label)
	//回合
	let root_last = cc.find("LastTurn",root)
	let img_last = cc.find("LastTurn/Image",root).getComponent(cc.Sprite)
	let txt_last = cc.find("LastTurn/Text",root).getComponent(cc.Label)
	
	let txt_addCoin = cc.find("TextAddCoin",root).getComponent("TextControl")
	let txt_subCoin = cc.find("TextSubCoin",root).getComponent("TextControl")
	
	let poker = []
	
	//庄家信息 
	this.SetGameUser = function(data){
		this.userData = data
		root_coin.active =(data != null)
		root_last.active =(data != null)
		if(data == null ){
			txt_id.string = "荷官"
			UIUserPic.ResetSpriteByName(img_head, "9")
		} 
		else{
			txt_id.string = gameData.IDTitle + data.UserID.toString()
			txt_coin.string =  G.FormatDecimal(data.Score)
			UIUserPic.ResetSpriteByName(img_head, data.FaceID.toString())
		}
	}
	
	//回和数(剩余,最大值)
	this.SetLastTurn = function(count,cmax){
		root_last.active =(count >= 0 && this.userData != null)
		img_last.fillAmount = (count/cmax)
		txt_last.string = count.toString() + "/" + cmax.toString()
	}
	
	this.SetScore = function(score){
		txt_coin.string =  G.FormatDecimal(score)
	}
	
	this.GetPosition = function(){
		return GameG.LocalConvertWorldPointAR(img_head.node)
	}
	
	this.AnimAddCoin = function(data,timer){
		timer = timer || 1
		let rnum = parseInt(data/100)
		if(this.userData == null ){ 
			return
		}
		
		txt_subCoin.active =(rnum < 0)
		txt_addCoin.active =(rnum > 0)
		
		let obj = null
		
		if(rnum < 0) {
			txt_subCoin.text = G.FormatDecimal(data)
			obj = txt_subCoin
		} 
		else{
			txt_addCoin.text ="+"+ G.FormatDecimal(data)
			obj = txt_addCoin
		}

		let targetPos = obj.position
		obj.position = cc.v3(targetPos.x,0,targetPos.z)

		var sqs = GameG.NewTween(obj)
		sqs.to(timer, {position: cc.v2(targetPos.x,30)})
		sqs.call(function(){
			obj.active =(false)
		})				
		sqs.start()
	}
};

module.exports = UIZhuang
