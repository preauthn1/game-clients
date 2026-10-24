var G = require( "Global")
var GameG = require( "GameGlobal")
var uitips = require("UITips")
var service = require("Service")
var gameData = require("GameData")
var TipsType = require("TipsType")

// 按扭组
var ui_group
var txt_countdown
var event_choose = null
var _betConfig = [ 1, 2, 3, 4, 5 ]
var sequence
var btns

var UIBet = {
	extends: cc.Component,

	// 抢庄按扭事件
	btnClick(index){
	    service.SendBetChoose(_betConfig[index])
	    if (event_choose != null) {
	        event_choose(_betConfig[index])
	    }
		this.Destory()
	    uitips.Show(TipsType.WaitBet, parseInt(txt_countdown.text))
	},

	// region 初始化UI
	// 初始化倍数选择按扭 _this 当前上下文 isZhuang 是否庄家选择倍数
	Init(root){
	    ui_group = cc.find("bggroup/ui/uibet",root)
	    let btn_bet1 = cc.find("bggroup/ui/uibet/btns/bet1/normal",root).getComponent(cc.Button)
	    let btn_bet2 = cc.find("bggroup/ui/uibet/btns/bet2/normal",root).getComponent(cc.Button)
	    let btn_bet3 = cc.find("bggroup/ui/uibet/btns/bet3/normal",root).getComponent(cc.Button)
	    let btn_bet4 = cc.find("bggroup/ui/uibet/btns/bet4/normal",root).getComponent(cc.Button)
	
		let self = this

	    txt_countdown = cc.find("bggroup/ui/uibet/countdown/txts/txt",root).getComponent("TextControl")
	    btn_bet1.node.on('click', function(){ 
			GameG.PlayGameSound("se_click")
			self.btnClick(0)
		})

	    btn_bet2.node.on('click', function(){ 
			GameG.PlayGameSound("se_click")
			self.btnClick(1) 
		})

	    btn_bet3.node.on('click', function(){ 
			GameG.PlayGameSound("se_click")
			self.btnClick(2) 
		})

	    btn_bet4.node.on('click', function(){ 
			GameG.PlayGameSound("se_click")
			self.btnClick(3) 
		})

		btns = [ ]
		btns.push(btn_bet1)
		btns.push(btn_bet2)
		btns.push(btn_bet3)
		btns.push(btn_bet4)
	},

	// region 显示UI
	Show(betConfig, countdownNum){
	    _betConfig = betConfig
		for(let _ in (btns)){ 
			let v = btns[_] 
	        v.active =(false)
	    }    
		for(let k in (_betConfig)){ 
	        if (gameData.AllowBaseScoreTimes()[k] != null) {
	            btns[k].active =(true)
	        }
	    }
	
	    ui_group.active =(true)
	
		txt_countdown.text = countdownNum.toString()
		
		let self = this

    	// 开始启倒计时
		sequence = GameG.NewTween(txt_countdown.node)
		sequence.delay(1)
		for(let i = countdownNum - 1; i > 0; --i ){
			sequence.call(function(){
				txt_countdown.text = i.toString()
			})
			sequence.delay(1)
	    }
	    sequence.call( function(){
	        self.btnClick(1)
		} )
		sequence.start()
	},

	// region 设置选中后的回调事件
	SetChooseEvent(eventfun){
	    event_choose = eventfun
	},

	// region 选择倍数界面是否隐藏
	IsHide(){
	    return ui_group.activeSelf == false
	},

	// region 回收界面
	Destory(){
	    ui_group.active =(false)
	    event_choose = null
	    if (sequence != null) {
			sequence.stop()
	    }
	
	},


};

module.exports = UIBet
