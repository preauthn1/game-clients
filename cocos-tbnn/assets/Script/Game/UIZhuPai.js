var G = require( "Global")
var GameG = require( "GameGlobal")
var sf = require("NiuNiuSF")
var uitips = require("UITips")
var TipsType = require("TipsType")

// 分牌相关UI元素
var ui_zhupai
var txts = [ ]
var txt_result
var txt_tips
var btn_youniu = [ ]
var btn_sanpai = [ ]
var btn_auto = [ ]
// 倒计时相关UI元素
var txt_countdown
var sequence
// 扑克列表对象
var cards
var resultValue = 0
var event_finished = null


var UIZhuPai = {
	extends: cc.Component,

	getChooseCardNum(){
	    return G.Count(txts, function(v){ return v.carddata != null })
	},

	// region 初始化
	Init(root){
		this.root = root

	    txt_countdown = cc.find("bggroup/ui/uizhupai/countdown/group/txt",root).getComponent("TextControl")
	
	    ui_zhupai = cc.find("bggroup/ui/uizhupai",root)
		
		txts[1] = {}
	    txts[1].txt = cc.find("bggroup/ui/uizhupai/numtxts/txt1",root).getComponent(cc.Label)
		txts[2] = {}
	    txts[2].txt = cc.find("bggroup/ui/uizhupai/numtxts/txt2",root).getComponent(cc.Label)
		txts[3] = {}
	    txts[3].txt = cc.find("bggroup/ui/uizhupai/numtxts/txt3",root).getComponent(cc.Label)
	    txt_result = cc.find("bggroup/ui/uizhupai/numtxts/result",root).getComponent(cc.Label)
	    txt_tips = cc.find("bggroup/ui/uizhupai/tips",root).getComponent(cc.Label)
	
	    btn_youniu = cc.find("bggroup/ui/uizhupai/fenpaibtns/youniu",root).getComponent(cc.Button)
	    btn_sanpai = cc.find("bggroup/ui/uizhupai/fenpaibtns/sanpai",root).getComponent(cc.Button)
	    btn_auto = cc.find("bggroup/ui/uizhupai/fenpaibtns/auto",root).getComponent(cc.Button)
	
		this.Destory()
		
		let self = this

		btn_youniu.node.on('click', function(){
			GameG.PlayGameSound("se_click")
	        if (sf.IsSpecial(cards)) {
	            slef.RunFinishedEvent()
			} 
        	else if (self.getChooseCardNum() < 3) {

	            txt_tips.string = "请先选择3张牌"
	            return
			} 
        	else if (parseInt(txt_result.string) % 10 == 0) {
	            slef.RunFinishedEvent()
			} 
        	else{
	            txt_tips.string = "请仔细检查，您选择的牌不能组成牛"
	        }
		})
		
	    btn_sanpai.node.on('click', function(){
			GameG.PlayGameSound("se_click")
	        if (sf.IsSpecial(cards)) {
	            slef.RunFinishedEvent()
			}
        	else if (sf.IsExistNiu(cards)) {
	            txt_tips.string = "请仔细检查，您的牌有牛"
			}
        	else{
	            slef.RunFinishedEvent()
	        }
		})
		
	    btn_auto.node.on('click', self.RunFinishedEvent)
		GameG.PlayGameSound("se_click")
	},

	// region 设置用户扑克牌
	SetCards(_cards){
	    cards = _cards
	},

	// region 设置自动事件方法
	SetFinishedEvent(callfun){
	    event_finished = callfun
	},

	// region 显示分牌界面
	Show(countdownNum){
    	// 为了给扣牌动画流时间
	    countdownNum = countdownNum - 2
	    ui_zhupai.active =(true)
	    txt_tips.string = "请选择组牌"
	    txt_countdown.text = countdownNum.toString()

		let self = this

		// 开始启倒计时
		sequence = GameG.NewTween(txt_countdown.node)
		sequence.delay(1)
		for(let i  = countdownNum - 1; i > 0; --i ){
			sequence.call(function(){
				txt_countdown.text = i.toString()
			})
			sequence.delay(1)
	    }
	    sequence.call( function(){
	        self.RunFinishedEvent()
		} )
		sequence.start()
	},

	// region 设置选中点数
	SetValue(card){
	    if (this.getChooseCardNum() >= 3) {
	        return false
	    }
	
		for(let k in (txts)){ 
			let v = txts[k] 
			let t = card.Color.toString() + "_" + card.CardNumber.toString()
			if (v.carddata == t){
	            return false
	        }
	        if (v.txt.string.length == 0) {
	            v.txt.string = sf.GetCardPoint(card).toString()
	            v.carddata = t
	            resultValue = resultValue + sf.GetCardPoint(card)
	            break
	        }
	    }
	    txt_result.string = resultValue.toString()
	
	    return true
	},

	// region 移除最后一张选中的点数
	RemoveValue(card){
	for(let k = txts.length; k <= 1; ++k ){
	        let v = txts[k]
	        if (v.carddata == card.Color + "_" + card.CardNumber) {
	            resultValue = resultValue - parseInt(v.txt.string)
	            v.txt.string = ""
	            v.carddata = null
	            break
	        }
	    }
	    txt_result.string = resultValue.toString()
	},

	// region 触发完成按扭事件
	RunFinishedEvent(){
	    
	    if (event_finished != null) {
	        event_finished()
	    }
	    UIZhuPai.Destory()
	    if (txt_countdown.text.length > 0 && parseInt(txt_countdown.text) > 0) {
	        uitips.Show(TipsType.WaitZhuPai, parseInt(txt_countdown.text))
	    }
	},

	// region 回收,即清空相关数据
	Destory(){
		for(let k in (txts)){ 
			let v = txts[k] 
	        v.txt.string = ""
	        v.carddata = null
	    }
	    resultValue = 0
	    txt_result.string = ""
	    event_finished = null
	    ui_zhupai.active =(false)
	
	    // 倒计时相关
	    if (sequence != null){// && sequence:Duration() > 0) {
	        sequence.stop()
	    }
	},


};

module.exports = UIZhuPai
