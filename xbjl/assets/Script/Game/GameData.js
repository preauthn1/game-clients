//Date
//此文件由[BabeLua]插件自动生成
//endregion
var G = require("Global")
var GameG = null
var BitHelper = null
var GameData = {
	extends: cc.Component,

	init(){
		GameG = require("GameGlobal")
		BitHelper = require("BitHelper")
		// 下注按钮图片范围
		this.dtRefBetBtn = []
		this.dtRefBetBtn[1] = {}
		this.dtRefBetBtn[1].min=1
		this.dtRefBetBtn[1].max=20
		this.dtRefBetBtn[1].img="cast1"
		this.dtRefBetBtn[2] = {}
		this.dtRefBetBtn[2].min=21
		this.dtRefBetBtn[2].max=100
		this.dtRefBetBtn[2].img="cast2"
		this.dtRefBetBtn[3] = {}
		this.dtRefBetBtn[3].min=101
		this.dtRefBetBtn[3].max=200
		this.dtRefBetBtn[3].img="cast3"
		this.dtRefBetBtn[4] = {}
		this.dtRefBetBtn[4].min=201
		this.dtRefBetBtn[4].max=500
		this.dtRefBetBtn[4].img="cast4"
		this.dtRefBetBtn[5] = {}
		this.dtRefBetBtn[5].min=501
		this.dtRefBetBtn[5].max=800
		this.dtRefBetBtn[5].img="cast5"
		this.dtRefBetBtn[6] = {}
		this.dtRefBetBtn[6].min=801
		this.dtRefBetBtn[6].max=1999
		this.dtRefBetBtn[6].img="cast6"
		this.dtRefBetBtn[7] = {}
		this.dtRefBetBtn[7].min=2000
		this.dtRefBetBtn[7].max=-1
		this.dtRefBetBtn[7].img="cast7"
				
		// 下注基本倍数
		this.dtBaseBet = []
		// 下注type配置映射
		this.dtRefBetType = []
		this.dtRefBetType[1] = {}
		this.dtRefBetType[1].idx=1
		this.dtRefBetType[1].name="long"
		this.dtRefBetType[2] = {}
		this.dtRefBetType[2].idx=2
		this.dtRefBetType[2].name="draw"
		this.dtRefBetType[3] = {}
		this.dtRefBetType[3].idx=3
		this.dtRefBetType[3].name="hu"
		this.gameName = GameG.GetGameName() || "bjl"        // 小游戏名字
		this.dtBetTypeNum = 10                   // 下注类型总数
		// 番型配置
		this.dtRstType = []
		let self = this
		let SetDtRstType = function(idx, bit, comp, chart, tpe, win){
			self.dtRstType[idx] = {}
			self.dtRstType[idx].idx = idx
			self.dtRstType[idx].bit = bit
			self.dtRstType[idx].comp = comp
			self.dtRstType[idx].chart = chart
			self.dtRstType[idx].tpe = tpe		
			self.dtRstType[idx].win = win	
		}
		
		SetDtRstType(1,  BitHelper.lshift(1,0), "",         "rstIcon3", 0, 2)
		SetDtRstType(2,  BitHelper.lshift(1,1), "",         "rstIcon3", 0, 1)
		SetDtRstType(3,  BitHelper.lshift(1,2), "",         "rstIcon3", 0, 3)
		SetDtRstType(4,  BitHelper.lshift(1,3), "rstType3", "rstIcon1", 3, 2)
		SetDtRstType(5,  BitHelper.lshift(1,4), "rstType3", "rstIcon1", 3, 1)
		SetDtRstType(6,  BitHelper.lshift(1,5), "rstType1", "rstIcon5", 1, 2)
		SetDtRstType(7,  BitHelper.lshift(1,6), "rstType1", "rstIcon5", 1, 1)
		SetDtRstType(8,  BitHelper.lshift(1,7), "rstType2", "rstIcon4", 2, 2)
		SetDtRstType(9,  BitHelper.lshift(1,8), "rstType2", "rstIcon4", 2, 1)
		SetDtRstType(10, BitHelper.lshift(1,9), "",         "rstIcon2", 0, 3)

	},
//- 获取按钮图片
	GetBetBtnImg(num, state){
		// 依造順序指定顏色 By Rayon
		let index = this.GetBetIdx(num)
		if(index > 8 ){
			index = 8
		}
		
		return "cast" + index
		/*
		if(state == 4 ){ 
			return "cast0" 
		}
		// 不需要乘上倍率，上方顯示的金額才是需要 By Rayon
		//num = num * gameData.dtBetRate
		for(let _ in (gameData.dtRefBetBtn)){ 
			let v = gameData.dtRefBetBtn[_] 

			if (v.min==-1 || v.min<=num) && (v.max==-1 || v.max>=num) {
					return v.img
			}
		}
		*///
	},

//- 通过注查映射
	GetBetIdx(num){
		for(let i = 1; i <= this.dtBaseBet.length; ++i){
	        if(this.dtBaseBet[i] == num ){
	            return i
	        }
	    }
		
		return 1
	},

//- 获取比牌状态 1:龙赢；2:和；3:虎赢
	CompState(long, hu){
	    if(long == hu ){ return 2 }
	    return long > hu && 1 || 3
	},

// 获取相对类型的配置：1:庄；2:闲；3:和；
	GetRstType(tp){
	    if(tp == 1 ){
	        return [8,6,4,1,]
		} 
		else if(tp == 2 ){
	        return [9,7,5,2,]
		} 
		else if(tp == 3 ){
	        return [10,3,]
	    }
	},

	GetResultOdd(siteNo){
		if(siteNo == 1 ){
			return 1
		} 
		else if(siteNo == 2 ){
			return 1
		} 
		else if(siteNo == 3 ){
			return 8
		} 
		else if(siteNo == 6 ){
			return 11
		} 
		else if(siteNo == 7 ){
			return 11
		}
	},


};

module.exports = GameData
