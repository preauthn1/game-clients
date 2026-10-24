var G = require("Global")

var GameData = {
	extends: cc.Component,

	Init(){
		// 下注基本倍数
		this.dtBaseBet = []

		// 下注type配置映射
		this.dtRefBetType = []
		this.dtRefBetType[1] = {}
		this.dtRefBetType[1].idx = 1
		this.dtRefBetType[1].name = "long"
		this.dtRefBetType[2] = {}
		this.dtRefBetType[2].idx = 2
		this.dtRefBetType[2].name = "draw"	
		this.dtRefBetType[3] = {}
		this.dtRefBetType[3].idx = 3
		this.dtRefBetType[3].name = "hu"	

		this.gameName = G.GetGamePName() || "hhdz"        // 小游戏名字
	},

	GetRefBetType(){
		return this.dtRefBetType
	},

	//- 获取按钮图片
	GetBetBtnImg(num){
		let index = this.GetBetIdx(num)
		if(index > 7 ){
			index = 7
		}	
	
		// 依造順序指定顏色 By Rayon
		return "cast" + index
	},

	//- 通过注查映射
	GetBetIdx(num){
		let index = 1
		
		for(let i = 1; i <= this.dtBaseBet.length; ++i){
	        if(this.dtBaseBet[i] == num ){
	            index = i
	        }
	    }
		
		if(index > 7 ){
			index = 7
		}
			
		return index
	},

	CompState(long, hu){
	    if(long == hu ){ return 2 }
	    return long > hu && 1 || 3
	},


};

module.exports = GameData
