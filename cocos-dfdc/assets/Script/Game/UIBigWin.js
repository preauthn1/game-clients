var gameGlobal = require("GameGlobal")
var gameData = require("GameData")

/** 用途: Bigwin動畫跑分 */
var UIBigWin = {
    extends: cc.Component,
    
    KillSequence(){
        if(this.sequenceShow != null){
			gameGlobal.CancelNewDelay(this.sequenceShow);
            this.sequenceShow = null
        }
    },
    
    
    // 離開遊戲
    onExit() {
        UIBigWin.KillSequence()

        UIBigWin.removeEvent()
        
        this.isShow == false
    },
    
    Init(root) {
        this.sequenceShow = null
        this.completeCallback = null

        this.rootRect = root
        this.rootRect.active = false

		this.isAddEvent = false
        
        this.isShow = false
        this.newTime = 0
		this.beginValue = 0
		this.endValue = 0
		this.time = 0
        
        this.Input = cc.find("Canvas/Input")

        this.rootStep = []
        for (let i = 1; i <= 4; ++i) {
            this.rootStep[i] = cc.find("UponFx/Step" + i.toString(), root)
            this.rootStep[i].active = false
        }
        
        this.txtCoin = cc.find("UponFx/TextCoin", root).getComponent("TextControl")
    },
    

    // 顯示介面
    Show(coin,callback,startStep) {
        if (coin < gameData.BigWinStep[1]){
            if(callback != null){
                callback()
            }
            return		
        }
        
        this.completeCallback = callback
        gameGlobal.PlayGameBGM("bigwin2")
        this.txtCoin.node.scale = 0.45
        
        let timer = gameData.GetMoneyShowTimer(coin)    
		this.sequenceShow = cc.tween(this.txtCoin.node)
		.to(timer, {scale: 1})
		.start()
        UIBigWin.addEvent()

        
        this.isShow = true
        this.newTime = 0
		this.beginValue = 0
		this.endValue = coin
		this.time = timer        
    },
    
    Update(dt)
    {
        if (this.isShow == false)
            return

        this.newTime += dt;

        if (this.newTime >= this.time)
        {
            this.newTime = this.time
            this.isShow = false
            UIBigWin.WaitHide()
        }

        let value = cc.misc.lerp(this.beginValue, this.endValue, this.newTime / this.time)
        UIBigWin.SetStep(value)
    },

	addEvent()
	{
        this.isAddEvent = true        
		// this.Input.on(cc.Node.EventType.MOUSE_DOWN,  UIBigWin.onKeyDown, this);
		this.Input.on(cc.Node.EventType.TOUCH_START,  UIBigWin.onKeyDown, this);
	},
	
	removeEvent(){
        if (this.isAddEvent == true)
        {
            this.isAddEvent = false              
            // this.Input.off(cc.Node.EventType.MOUSE_DOWN,UIBigWin.onKeyDown, this);
            this.Input.off(cc.Node.EventType.TOUCH_START,UIBigWin.onKeyDown, this);
        }
	},
	
	onKeyDown(event){
		UIBigWin.WaitHide()
	},
    
    // 直接顯示結果
    WaitHide()	{
        UIBigWin.removeEvent()
        
        this.isShow = false

        UIBigWin.SetStep(this.endValue)
        this.sequenceShow.stop()
        this.txtCoin.node.scale = 1
        
        gameGlobal.PlayGameSound("se_winend")
		
		UIBigWin.KillSequence()
		
        this.sequenceShow = cc.tween(this.rootRect)
		.delay(2.0)
		.call(function(){
			UIBigWin.Hide()
		})
		.start()
    },
        
    // 關閉介面
    Hide() {
        UIBigWin.KillSequence()
        this.rootRect.active = false
        gameGlobal.PlayGameBGM("bgm_mg")
        
        if(this.completeCallback != null){
            this.completeCallback()
        }
    },
    // 回合開始
    SetGameStart()	{
    
    },
    // 回合結束
    SetGameEnd() {
        
    },
    
    // 是否在表演
    CheckShowTimer() {
        return this.sequenceShow != null
    },
    
    SetStep(temp) {
        let value = (temp/100).toFixed(2).toString()
        this.txtCoin.text = value
        //this.txtCoin.text = gameGlobal.FormatNum(temp)
        
        this.rootRect.active = temp >= gameData.BigWinStep[1]
        
        let targetStep = 0
        for (let i = 0; i < gameData.BigWinStep.length; ++i) {
            if(temp >= gameData.BigWinStep[i]) {
                targetStep = i
            }
        }

        for (let i = 1; i < this.rootStep.length; ++i) {
            this.rootStep[i].active = i == targetStep
        }
    },
};

module.exports = UIBigWin;

