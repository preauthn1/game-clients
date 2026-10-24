var G = require("Global")
var GameG = require("GameGlobal")
var gameAudio = require("GameAudio")
var GameData = require("GameData")
var fmg = require("FFunction")
var gameLayer = null

var ResultLayer = {
	extends: cc.Component,

	onExit(){
	},

	initUi(){
		gameLayer = require("GameLayer")

	    let canvas = cc.find("Canvas")
	    let root =cc.find("ResultLayer", canvas)
	    this.uiRoot = {}
	    this.uiRoot.root = root
	    let uiRoot = this.uiRoot
	
	    root.active =(false)
	    uiRoot.bg =cc.find("bg", root).getComponent(cc.Sprite)
	
	    uiRoot.rank = []
		for(let i = 1; i <= 3; ++i){//    for i=1,3 do
	        uiRoot.rank[i] = {}
	        uiRoot.rank[i].root =cc.find("bg/rank/user"+i, root).getComponent(cc.Sprite)
	        uiRoot.rank[i].name =cc.find("bg/rank/user"+i+"/name", root).getComponent(cc.Label)
	        uiRoot.rank[i].coin =cc.find("bg/rank/user"+i+"/coin", root).getComponent(cc.Label)
	
	        uiRoot.rank[i].root.active =(false)
	    }
	    
	    uiRoot.banker = {}
	    uiRoot.banker.root =cc.find("bg/wininfo/banker", root)
	    uiRoot.banker.name =cc.find("bg/wininfo/banker/name", root).getComponent(cc.Label)
	    uiRoot.banker.coin =cc.find("bg/wininfo/banker/coin", root).getComponent(cc.Label)
	    uiRoot.banker.win =cc.find("bg/wininfo/banker/win", root).getComponent(cc.Sprite)
	    uiRoot.banker.root.active =(false)
	    
	    uiRoot.user = {}
	    uiRoot.user.root =cc.find("bg/wininfo/user", root)
	    uiRoot.user.name =cc.find("bg/wininfo/user/name", root).getComponent(cc.Label)
	    uiRoot.user.coin =cc.find("bg/wininfo/user/coin", root).getComponent(cc.Label)
	    uiRoot.user.win =cc.find("bg/wininfo/user/win", root).getComponent(cc.Sprite)
	
	    uiRoot.effect = {}
	    uiRoot.effect.titleWin =cc.find("bg/efWin", root)
	    uiRoot.effect.titleLose =cc.find("bg/efLose", root)
	    uiRoot.effect.titleWin.active =(false)
	    uiRoot.effect.titleLose.active =(false)
	
	    uiRoot.timer =cc.find("bg/ok/timer", root).getComponent(cc.Label)
		cc.find("bg/ok", root).getComponent(cc.Button).node.on('click',function(){
	        gameAudio.btnClick()
	        GameData.resultLayer.show(false)
	        GameData.resultLayer.stopTimer()
	    })
	    uiRoot.timer.text = ""
	
	    uiRoot.win = {}

	    uiRoot.lose = {}

	    uiRoot.rst = []
	    uiRoot.rst[1] =cc.find("bg/rst/win1", root).getComponent(cc.Sprite)
	    uiRoot.rst[2] =cc.find("bg/rst/win2", root).getComponent(cc.Sprite)
	    uiRoot.rst[3] =cc.find("bg/rst/win3", root).getComponent(cc.Sprite)
	    this.setWinRst(0)
	
	},

	show(bShow, call){
	    if(bShow ){
	    
	        this.uiRoot.banker.root.active =(this.bBankerHave)
	        
	        this.startTimer(3)
	        
	        fmg.popAnim(bShow, this.uiRoot.root, this.uiRoot.bg, 0.1, function(){
	            if(call ){ call() }
	        })
		} 
		else{
	        this.uiRoot.root.active =(false)
	        this.stopTimer()
	        if(self.hideCall ){ this.hideCall() }
	        if(call ){ call() }
	    }
	},

	update(data){
	    this.uiRoot.user.coin.text = gameLayer.MoneyText(data.thisWin)
	    this.uiRoot.user.win.active =(data.thisWin > 0)
	    this.uiRoot.banker.coin.text = gameLayer.MoneyText(data.ZhuangWin)
	    this.uiRoot.banker.win.active =(data.ZhuangWin > 0)
	    this.uiRoot.banker.root.active =(GameData.svrData.LHDZhuangInfoID && GameData.svrData.LHDZhuangInfoID.UserID != 0)
	    
		for(let i = 1; i <= 3; ++ i){//    for i=1,3 do
	        this.uiRoot.rank[i].root.active =(data.WinUserInfo[i] != null)
	        if(data.WinUserInfo[i] ){
	            this.uiRoot.rank[i].name.text = data.WinUserInfo[i].UserName
	            this.uiRoot.rank[i].coin.text = gameLayer.MoneyText(data.WinUserInfo[i].Win)
	        }
	    }
	
	    let tmp = ["win", "lose"]
	    let key = data.thisWin > 0 && tmp[1] || tmp[2]	
	},

	updateUser(data){
		if(GameData.ShowID == false ){
			this.uiRoot.user.name.text = "" + data.UserID
		}
		else{
			this.uiRoot.user.name.text = "ID:" + data.UserID
		}
	},

	updateBanker(data, mast){
	    this.bBankerHave = (data.UserID != 0)
	    if(data.UserID!=0 && (mast!=null || this.bShow==false) ){
			if(GameData.ShowID == false ){
				this.uiRoot.banker.name.text = "" + data.UserInfo[1].UserID
			} 
			else{
				this.uiRoot.banker.name.text = "ID:" + data.UserInfo[1].UserID
			}
	    }
	},

	startTimer(tm){
	    tm = tm || 10
	    this.stopTimer()
	    this.uiRoot.timer.text = ""+tm+"s"
		this.tmCloseHander = GameG.StartCountDown(this.uiRoot.root, 1.0, function(){
			tm = tm - 1
			GameData.resultLayer.uiRoot.timer.text = tm.toString() + "s"
	        if(tm <= 0 ){
	            GameData.resultLayer.stopTimer()
	            GameData.resultLayer.show(false)
	        }
		})
	},

	stopTimer(){
	    if(this.tmCloseHander ){
	        GameG.RemoveCountDown(this.tmCloseHander)
	        this.tmCloseHander = null
	    }
	},

	setWinRst(win){
		for(let i = 1; i <= 3; ++ i){//    for i=1,3 do
			this.uiRoot.rst[i].active =(i == win)
	    }
	},


};

module.exports = ResultLayer
