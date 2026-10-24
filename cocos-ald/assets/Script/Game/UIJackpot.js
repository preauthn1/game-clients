var G = require( "Global")
var GameG = require( "GameGlobal")
var gameData = require("GameData")
var uiinputEvent = require("UIInputEvent")

/** 用途: 由獎金池獲得的獎金 */
var UIJackpot = {
	extends: cc.Component,

	/** 遊戲離開(斷線重連) */
	onExit(){
	
	},
    /** 初始化 */
	Init(root){
		this.rootRect = root
		this.rootRect.active =(false)
		
		this.packpotSpine = cc.find("UponFx/SkeletonGraphicTitle",root).getComponent(sp.Skeleton)
		
		this.txtCoin = cc.find("UponFx/TextCoin",root).getComponent("TextControl")	
		
		this.isShow = false
	},

    Update(dt)
    {
        if (this.isShow == false)
            return

        this.newTime += dt;

        if (this.newTime >= this.time){
			this.newTime = this.time
			this.WaitHide()
		}

        let value = cc.misc.lerp(this.beginValue, this.endValue, this.newTime /this.time)
        this.SetStep(value)
    },
		
	onKeyDown(event){
		UIJackpot.WaitHide()
	},
	
    /** 顯示介面 */
	Show(coin,callback){		
		if(coin <= 0){
			if(callback != null){
				callback()
			}
			return
		}
		
		GameG.PlayGameSound("se_jackpot03")
		
		this.completeCallback = callback
		uiinputEvent.SetEventKeyDown(this.onKeyDown,"UIJackpot")
		
		this.rootRect.active =(true)
		this.txtCoin.node.active =(true)
		this.txtCoin.node.scale = 1
		
		this.packpotSpine.setAnimation(0, "start", false);
		this.packpotSpine.addAnimation(0, "idle", true , 2);
				
        this.isShow = true
        this.newTime = 0
		this.time = gameData.JackpotTime
		this.beginValue = 0
		this.endValue = coin
		
		let sequence = GameG.NewTween(this.txtCoin.node)
		sequence.to(this.time, {scale: 1.5 })
	},
	/** 設置獲得金額 */
	SetStep(temp){
		this.txtCoin.string = GameG.FormatNum(temp)
	},

// 等待關閉介面
	WaitHide(){
		let self = this
		this.isShow = false
		uiinputEvent.RemoveKey("UIJackpot")
		this.SetStep(this.endValue)
	
		this.txtCoin.node.active =(true)
		this.txtCoin.node.scale = 1.5
	
		GameG.NewDelayOnce(function(){
			self.Hide()
		}, 2.0)
	},

    /** 關閉介面 */
	Hide(){
		this.rootRect.active =(false)
		GameG.PlayGameBGM("bgm_mg")
		
		if(this.completeCallback != null){
			this.completeCallback()
		}
	},


};

module.exports = UIJackpot
