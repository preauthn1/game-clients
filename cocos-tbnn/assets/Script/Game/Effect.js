var GameG = require( "GameGlobal")

// region 特效
var ui_gold
// 備份資料
var golds = [ ]
// 備份數量
var flyPoolCount = 50
// 目前使用
var useIndex = 1
// 一次飛的數量
var flyCount = 10
// endregion

var Effect = {
	extends: cc.Component,

	// 初始化
	Init(root){
	    ui_gold = cc.find("bggroup/flygold",root)
		
		// 飛籌碼使用備份資料 By Rayon
		this.InitFlyGold()	
	},

	InitFlyGold(){
		golds = [ ]
		useIndex = 1
	
		ui_gold.active =(true)
		for(let i = 1; i <= flyPoolCount; ++i ){
			let gold = cc.instantiate(ui_gold)
			gold.parent =(ui_gold.parent)
			gold.scale = 1
			gold.active =(false)
			golds.push(gold)
		}
		ui_gold.active =(false)
	},

	GetFreeFlyGold(){
		let gold = golds[useIndex]
		useIndex = useIndex + 1 
		if(useIndex >= flyPoolCount ){
			useIndex = 1
		}
		gold.active =(true)
		return gold
	},

	// 飞金币效果
	FlyGold(start, target, sequence){
		let self = this
		for(let i = 1; i <= flyCount; ++ i ){
			sequence.call(function(){
				let gold = self.GetFreeFlyGold()
				gold.position = start

				let seq = GameG.NewTween(gold)
				seq.to(0.25, {position: target})
				seq.call( function(){
					gold.active =(false)
				} )
				seq.start()
			})
			sequence.delay(0.1)
	    }
	},


};

module.exports = Effect
