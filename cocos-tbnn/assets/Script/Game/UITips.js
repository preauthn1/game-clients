var G = require( "Global")
var GameG = require("GameGlobal")
var TipsType = require("TipsType")

var txt_countdown
var txt_tips
var ui_group
var sequence

var tips = [
	"",
    "请等其他玩家选择倍数",
    "请等待其他玩家组牌"
]

var UITips = {
	extends: cc.Component,

	// region 初始化UI
	// 初始化倍数选择按扭 _this 当前上下文 isZhuang 是否庄家选择倍数
	Init(root){
	    ui_group = cc.find("bggroup/ui/uitips",root)    
	    txt_tips = cc.find("bggroup/ui/uitips/txts/tips",root).getComponent(cc.Label)
	    txt_countdown = cc.find("bggroup/ui/uitips/txts/countdown",root).getComponent(cc.Label)
	},

	// region 显示UI
	Show(tipType, countdownNum){
		this.Destory()
	    txt_tips.string = tips[tipType]
	    txt_countdown.string = countdownNum.toString()

		sequence = GameG.NewTween(txt_countdown.node)
		sequence.delay(1)
		for(let i = countdownNum - 1; i > 0; --i ){
			sequence.call(function(){
				txt_countdown.string = i.toString()
			})
			sequence.delay(1)
		}
		sequence.call(function(){
			UITips.Destory()
		})
		sequence.start()

		ui_group.active =(true)
	},

	// region 回收界面
	Destory(){
	    ui_group.active =(false)
	    if (sequence != null) {
			sequence.stop()
	    }
	    sequence = null
	},


};

module.exports = UITips
