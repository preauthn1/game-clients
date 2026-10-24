var G = require( "Global")
var GameG = require( "GameGlobal")
var gameData = require("GameData")
var uiinputEvent = require("UIInputEvent")

/** 用途: 由獎金池獲得的獎金 */
var UIJackpot = {
	extends: cc.Component,

//離開遊戲
	onExit(){
	
	},
    /** 初始化 */
	Init(root){
		this.rootRect = root
		this.rootRect.active =(false)
		
		this.packpotSpine = cc.find("UponFx/SkeletonGraphicTitle",root).getComponent(sp.Skeleton)
        // 獲得金額
		this.txtCoin = cc.find("UponFx/TextCoin",root).getComponent("TextControl")	
				
		this.poolFirework = new cc.NodePool();
		this.rootFireworkGroup = cc.find("Fx/FireworkGroup" ,root)
		for(let i in this.rootFireworkGroup.children){
			this.rootFireworkGroup.children[i].active = false
			this.poolFirework.put(this.rootFireworkGroup.children[i])
		}

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

		GameG.NewDelay(this.SetOffFireworks, 0.1, "firework")
	},

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
		GameG.CancelNewDelay("firework")
		
		if(this.completeCallback != null){
			this.completeCallback()
		}
	},

	// 放煙火
	SetOffFireworks(){
		let self = UIJackpot
		let target = null
		if (self.poolFirework.size() > 0) { 
			target = self.poolFirework.get();
			target.parent = self.rootFireworkGroup
			target.scale = 1

			let particleChild = target.getComponent(cc.ParticleSystem)
			let sequence = GameG.NewTween(target)
			sequence.delay(Math.random() * 0.2)
			sequence.call(function(){
				target.active = true
				particleChild.resetSystem()
			})
			sequence.delay(0.5)
			sequence.call(function(){
				self.poolFirework.put(target)
			})
			sequence.start()
		}
	},
};

module.exports = UIJackpot
