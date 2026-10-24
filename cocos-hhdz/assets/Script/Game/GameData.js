//region *.lua
//Date
//此文件由[BabeLua]插件自动生成
//endregion
var G = require("Global")
// 下注按钮图片范围
hhdz.dtRefBetBtn = [
    [1] = [min=1,       max=19,         img="cast1",  ],
    [2] = [min=20,      max=50,         img="cast2",  ],
    [3] = [min=51,      max=100,        img="cast3",  ],
    [4] = [min=101,     max=500,        img="cast4",  ],
    [5] = [min=501,     max=1000,       img="cast5",  ],
    [6] = [min=1001,    max=5000,       img="cast6",  ],
    [7] = [min=5000,    max=50000,      img="cast7",  ],
    [8] = [min=50000,   max=-1,         img="cast8",  ],
]
// 下注基本倍数
hhdz.dtBaseBet = []
// 下注type配置映射
hhdz.dtRefBetType = [
    [1] = [idx=1,   name="long",    ],
    [2] = [idx=2,   name="draw",    ],
    [3] = [idx=3,   name="hu",      ],]
hhdz.gameName = G.GetGamePName() || "hhdz"        // 小游戏名字

var GameData = {
	extends: cc.Component,

//- 获取按钮图片
	hhdz.GetBetBtnImg(num){
		let index = hhdz.GetBetIdx(num)
		if(index > 7 ){
			index = 7
		}	
	
	// 依造順序指定顏色 By Rayon
		return "cast" + index
	/*
    for _,v in pairs(hhdz.dtRefBetBtn) do
        if (v.min==-1 or v.min<=num) and (v.max==-1 or v.max>=num) then
            return v.img
        end
    end
	*///
	},

//- 通过注查映射
	hhdz.GetBetIdx(num){
		let index = 1
		
	for(let      i = 1;      i <= hhdz.dtBaseBet.length; ++     i){//    for i=1,hhdz.dtBaseBet.length do
	        if(hhdz.dtBaseBet[i] == num ){
	            index = i
	        }
	    }
		
		if(index > 7 ){
			index = 7
		}
			
		return index
	},

//- 获取比牌状态 1:龙赢；2:和；3:虎赢
	hhdz.CompState(long, hu){
	    if(long == hu ){ return 2 }
	    return long > hu && 1 || 3
	},


};

module.exports = GameData
