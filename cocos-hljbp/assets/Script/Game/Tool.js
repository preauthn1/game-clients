var G 			= require( "Global")
var GameG 		= require("GameGlobal")
var UIUserPic 	= require("UIUserPic")
var sequenceArray	= null
var chipData		= null

var Tool = {
	extends: cc.Component,

	Init(){
		sequenceArray = []
		chipData = []
	},

////籌碼
	GetBetSpriteName(money){
		for(let k in (chipData)){ 
			let v = chipData[k] 

			if(money == v.money ){
				return v.spriteName
			}
		}
		return chipData[1].spriteName
	},

	SetChipData(data){
		for(let  i = 0;  i < data.length; ++ i){
			let index = parseInt(i) +1
			chipData[index] = {}
			chipData[index].spriteName 	= "chip_"+(index).toString()+"_t"
			chipData[index].money 		= data[i]
		}
	},

	GetChipData (){
		return chipData
	},

//拆籌碼
	SplitBet(money){		
		if(money <= 0 ){ return [] }
		let betArray = []
		let i = chipData.length -1		
		while (i > 0) {		
			if (money >= chipData[i].money && money - chipData[i].money >= 0) {
				money = money - chipData[i].money
				betArray[betArray.length+1] = chipData[i].money
			} 
			else{
				i = i - 1
			}
		}
		if(betArray.length <= 0 ){
			betArray.push(chipData[1].money)
		}
		return betArray
	},
	
	SetFaceID(image,faceid){
		image.sprite = null
		UIUserPic.ResetSpriteByName(image, (faceid).toString())
	},
	
	GetSequence(root){
		let sequence = cc.tween(root)
		sequenceArray.push(sequence)
		return sequence
	},
	
	RemoveAllSequence(){
		for(let k in (sequenceArray)){ 
			let v = sequenceArray[k] 
			v.stop()
		}
	},
	
	PlayAnimation(skeleton,name,time,Callback){ 
		skeleton.node.active =(true)
		skeleton.setAnimation(0, name, false)
	
		this.Delay(time + 0.3,function (){
			if (skeleton.node == null || skeleton.node.parent == null)
				return

			skeleton.node.active =(false)
			skeleton.clearTracks()
			if(Callback != null ){ 
				Callback()
			}
		})
	},
	
	IsSelf(id){
		return id == GameG.getUserID()
	},
	
	Random(min,max){
		return Math.floor(Math.random()*(max-min+1))+min;
	},
	
	Delay(time,Func,bind){
		GameG.NewDelayOnce(Func, time)
/*
		setTimeout(function () {
			if(Func != null)
				Func()
		}.bind(bind), time * 1000);
*/
	},
	
	Err(message){
		console.error(message)
	},
	
	Vector2(x,y){
		return cc.v2(x,y)
	},
	
	Vector3(x,y,z){
		return cc.v3(x,y,z)
	},
	Quaternion(x,y,z){
		return cc.v3(x,y,z)
	},
	
	Color(r,g,b,a){
		return new cc.Color(r, g, b, a)
	},
	
	MoneyText(money){
		let moneyText = money / 100
		if(moneyText % 1 == 0 ){
			moneyText = Math.ceil(moneyText)
		}
		return moneyText
	},
	
	PercentageText(num){
		return num % 1 == 0 ? Math.ceil(num)+"%" : num.toFixed(1)+"%"
	},
	
	CopyTable(t){
		let u = []
		for(let i in t){
			u[i] = Object.assign({}, t[i]);
		}		
		return u
	},
		
	OnDestroy(){
		this.RemoveAllSequence()
	},

};

module.exports = Tool
