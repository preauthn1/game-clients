var G = require( "Global")
var GameG = require( "GameGlobal")
var gameData = require("GameData")
var GameService = require("GameService")

var AutoReadyCountNum = 3

var ui_ready
var event_changedesk = null
var event_ready = null
var txt_countdown
var sequence
var isEnd = false
var txt_countdown1
var txt_countdown2

var UIReady = {
	extends: cc.Component,

	// region 回收
	Destory(){
		ui_ready.active =(false)

		if (sequence && isEnd == false){
			sequence.stop()
		}
	},

	// region 初始化
	Init(root){
	    ui_ready = cc.find("bggroup/ui/uiready",root)
	    let btn_ready = cc.find("btns/ready",ui_ready).getComponent(cc.Button)
	    let btn_changedesk = cc.find("btns/changedesk",ui_ready).getComponent(cc.Button)
	    let btn_autoready = cc.find("btns/autoready",ui_ready).getComponent(cc.Button)
	    let btn_noautoready = cc.find("btns/noautoready",ui_ready).getComponent(cc.Button)
	    let exitlab1 = cc.find("bggroup/ui/uiready/countdown/txts/exitlab1",root).getComponent(cc.Sprite)
	    let readylab1 = cc.find("bggroup/ui/uiready/countdown/txts/readylab1",root).getComponent(cc.Sprite)
	
    	// 倒计时相关
	    txt_countdown1 = cc.find("bggroup/ui/uiready/countdown/txts/txt1",root).getComponent("TextControl")
	    txt_countdown2 = cc.find("bggroup/ui/uiready/countdown/txts/txt2",root).getComponent("TextControl")
	    btn_noautoready.node.active =(false)
	    exitlab1.node.active =(true)
	    txt_countdown1.node.active =(true)
	    readylab1.node.active =(false)
	    txt_countdown2.node.active =(false)
	
    	// 准备
	    btn_ready.node.on('click', function(){
			GameG.PlayGameSound("se_click")
	        GameService.ReadyGame()
	        if (event_ready != null) { event_ready() }
	        UIReady.Destory()
	    } )
	
    	// 换桌
	    btn_changedesk.node.on('click', function(){
			GameG.PlayGameSound("se_click")
			if (event_changedesk != null) { event_changedesk() }
	        GameService.ChangeDesk()
	        UIReady.Destory()
	    } )
	
	    btn_autoready.node.on('click', function(){
			GameG.PlayGameSound("se_click")
	        exitlab1.node.active =(false)
			txt_countdown1.node.active =(false)
	        readylab1.node.active =(true)
			txt_countdown2.node.active =(true)
	
	        btn_ready.node.active =(false)
	        btn_changedesk.node.active =(false)
	        btn_autoready.node.active =(false)
	        btn_noautoready.node.active =(true)
	        gameData.IsAutoReady(true)
	        GameService.ReadyGame()
	        UIReady.Destory()
	    } )
	    btn_noautoready.node.on('click', function(){
			GameG.PlayGameSound("se_click")
	        exitlab1.node.active =(true)
			txt_countdown1.node.active =(true)
	        readylab1.node.active =(false)
			txt_countdown2.node.active =(false)
	
	        btn_ready.node.active =(true)
	        btn_changedesk.node.active =(true)
	        btn_autoready.node.active =(true)
	        btn_noautoready.node.active =(false)
	        gameData.IsAutoReady(false)
	    } )
	},

	// region 设置换桌回调事件
	SetChangeDeskEvent(event_fun){
	    event_changedesk = event_fun
	},

	// region 设置准备事件
	SetReadyEvent(event_fun){
	    event_ready = event_fun
	},

	// region 显示
	Show(countdownNum){
		isEnd = false

		ui_ready.active =(true)
    	// 开始启倒计时
		sequence = GameG.NewTween(ui_ready)
		for(let i = countdownNum; i > 0; --i ){
	        sequence.call( function(){
	            if (gameData.IsAutoReady() == true) {
	                txt_countdown1.text = (AutoReadyCountNum -(countdownNum - i)).toString()
					txt_countdown2.text = (AutoReadyCountNum -(countdownNum - i)).toString()
				}
				else{
	                txt_countdown1.text = (i).toString()
	                txt_countdown2.text = (i).toString()
	            }
				
	            if (gameData.IsAutoReady() == true && countdownNum - i == AutoReadyCountNum) {
	                GameService.ReadyGame()
	                UIReady.Destory()
	            }
	        } )
	
	        sequence.delay(1)
	    }
		sequence.call( function(){
			isEnd = true

			GameG.ExitGame()
		})
		sequence.start()
	},


};

module.exports = UIReady
