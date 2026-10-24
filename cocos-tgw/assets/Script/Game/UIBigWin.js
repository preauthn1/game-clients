var GameG = require("GameGlobal")
var gameData = require("GameData")
var uiinputEvent = require("UIInputEvent")
/** 動畫階段物件 */
var poolStep = []
var inState = false
var isPlaying = false

/** 用途: Bigwin動畫跑分 */
var UIBigWin = {
	extends: cc.Component,

//離開遊戲
	onExit(){
		GameG.CloseLoopSound("se_bigwin")
	},

	Init(root){
		this.rootRect = root
		this.rootRect.active =(false)
		
		for(let i = 1; i <= 4; ++ i ){
			poolStep[i] = {}
			poolStep[i].root = cc.find("UponFx/Step"+i,root)
			poolStep[i].root.active =(false)
			poolStep[i].spineTitle = cc.find("UponFx/Step"+ i +"/SkeletonGraphicTitle",root).getComponent(sp.Skeleton)
			poolStep[i].spineWin = cc.find("UponFx/Step"+ i +"/SkeletonGraphicWin",root).getComponent(sp.Skeleton)
		}
        // 跑分金額
		this.txtCoin = cc.find("UponFx/TextCoin",root).getComponent("TextControl")
		inState = false
		this.isShow = false
	},

    Update(dt)
    {
        if (this.isShow == false)
            return

        this.newTime += dt;

        if (this.newTime >= this.time)
        {
        	this.newTime = this.time
			this.WaitHide()
		}

        let value = cc.misc.lerp(this.beginValue, this.endValue, this.newTime /this.time)
        this.SetStep(value)
    },
	
	onKeyDown(event){
		UIBigWin.WaitHide()
	},
	
// 顯示介面
	Show(coin,callback){
		if (coin < gameData.GetMinBigWinStep()){
			if(callback != null){
				callback()
			}
			return		
		}
		this.completeCallback = callback
		this.txtCoin.node.active =(true)
		this.txtCoin.node.scale = 1
		this.isShow = true
		inState = true
		isPlaying = false
		
        uiinputEvent.SetEventKeyDown(this.onKeyDown,"UIBigWin")
        let self= this
        this.newTime = 0
		this.time = gameData.GetMoneyShowTimer(coin)
		this.beginValue = 0
		this.endValue = coin
		
		let sequence = GameG.NewTween(this.txtCoin.node)
		sequence.to(this.time, {scale: 1.5 })
		sequence.start()
	},

// 等待關閉介面
	WaitHide(){
		let self = this
		this.isShow = false
		
		uiinputEvent.RemoveKey("UIBigWin")
		this.SetStep(this.endValue)
		
		GameG.CloseLoopSound("se_bigwin")
		GameG.PlayGameSound("se_winend01")
		
		this.txtCoin.node.active =(true)
		this.txtCoin.node.scale = 1.5	
		
		GameG.NewDelayOnce(function(){
			self.Hide()			
		}, 2.0)
	},

// 關閉介面
	Hide(){
		inState = false
		this.rootRect.active =(false)
		
		GameG.CloseLoopSound("se_bigwin")
		
		GameG.PlayGameBGM("bgm_mg")
		
		if(this.completeCallback != null){
			this.completeCallback()
		}
	},

// 回合開始
	SetGameStart(){	
	
	},

// 回合結束
	SetGameEnd(){
		
	},

	GetInState(){
		return inState
	},

    /** 設置跑分金額 */
	SetStep(temp){
		this.txtCoin.string = GameG.FormatNum(temp)
			
		this.rootRect.active =(temp >= gameData.GetMinBigWinStep())	
			
		let targetStep = 0
		for(let i in gameData.BigWinStep){
			if(temp >= gameData.BigWinStep[i]){
				targetStep = parseInt(i) +1
			}
		}
        // 到達第一階段開啟介面
		if(temp >= gameData.GetMinBigWinStep() && isPlaying == false){
			GameG.CloseBGMSound()
			GameG.PlayGameSound("se_bigwin",true)
			isPlaying = true
		}
        // 階段不同
		for(let i in poolStep){
			if(i == targetStep && poolStep[i].root.active == false){
				poolStep[i].root.active =(true)
				poolStep[i].spineTitle.setAnimation(0, "start", false);
				poolStep[i].spineTitle.addAnimation(0, "idle", true , 1);
				poolStep[i].spineWin.setAnimation(0, "start", false);
				poolStep[i].spineWin.addAnimation(0, "idle", true , 1);
				GameG.PlayGameSound("se_word")			
			}
			poolStep[i].root.active =(i == targetStep)
		}
	},


};

module.exports = UIBigWin
