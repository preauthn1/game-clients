var HallG = require("Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var poolStep = []
var isPlaying = false
var completeCallback = null
var sequenceShow = null
var inState = false

var UIBigWin = 
{
	extends: cc.Component,

	//離開遊戲
	onExit()
	{
		
	},

	Init(root)
	{
		this.rootRect = root
		this.rootRect.active =(false)
		
		this.spineDragon = cc.find("UponLayer/SkeletonGraphic(dragon_win)" , root).getComponent(sp.Skeleton)
		
		//	for i = 1, 4 do
		for(let  i  =  1;  i  <=  4; ++ i )
		{
			poolStep[i] = []
			poolStep[i].root = cc.find("UponLayer/Step" + i, root)
			poolStep[i].root.active =(false)
			poolStep[i].spineTitle = cc.find("UponLayer/Step" + i + "/SkeletonGraphicTitle", root).getComponent(sp.Skeleton)
			poolStep[i].spineWin = cc.find("UponLayer/Step" + i + "/SkeletonGraphicWin", root).getComponent(sp.Skeleton)
		}		
		this.txtCoin = cc.find("UponLayer/TextCoin", root).getComponent(cc.Label)
		inState = false
		this.isShow = false
	},

    Update(dt)
    {
        if (this.isShow == false)
            return

        this.newTime += dt;

        if (this.newTime >= this.time)
            this.WaitHide()

        let value = cc.misc.lerp(this.beginValue, this.endValue, this.newTime /this.time)
        this.SetStep(value)
    },
	
	// 顯示介面
	Show(coin,callback)
	{
		if (coin < gameData.GetMinBigWinStep())
		{
			if(callback != null)
			{
				callback()
			}
			return
		}
		this.completeCallback = callback
		this.txtCoin.node.active = (true)
		this.txtCoin.node.scale = 1
		
		inState = true
		isPlaying = false
		
        this.addEvent()
        this.isShow = true
        this.newTime = 0
		this.time = gameData.GetMoneyShowTimer(coin)
		this.beginValue = 0
		this.endValue = coin
		
		let sequence = GameG.NewTween(this.txtCoin.node)
		sequence.to(this.time, {scale: 1.5 })
	},

	// 等待關閉介面
	WaitHide(coin)
	{		
		let self = this
		this.isShow = false
		this.removeEvent()
		this.SetStep(this.endValue)
		
		GameG.PlayGameSound("se_winend")
		
		this.txtCoin.node.active =(true)
		this.txtCoin.node.scale = 1.5	
		
		GameG.NewDelayOnce(function(){
			self.Hide()			
		}, 2.0)
	},

	// 關閉介面
	Hide()
	{
		this.KillSequence()
		this.rootRect.active =(false)
		
		if(gameData.FreeGame == null)
		{
			GameG.PlayGameBGM("bgm_mg")
		} 
		else
		{
			GameG.PlayGameBGM("bgm_fg")
		}
		
		if(completeCallback != null)
		{
			completeCallback()
		}
	},

	// 回合開始
	SetGameStart()
	{
	
	},

	// 回合結束
	SetGameEnd()
	{
		
	},

	GetInState()
	{
		return inState
	},

	// 是否在表演
	CheckShowTimer()
	{
		return this.isShow
	},
	
	SetStep(temp)
	{
		this.txtCoin.string = GameG.FormatNum(temp)
			
		this.rootRect.active = (temp >= gameData.GetMinBigWinStep())	
			
		let targetStep = 0
		
		for(let i in gameData.BigWinStep)
		{
			if(temp >= gameData.BigWinStep[i])
			{
				targetStep = i
			}
		}
		
		if(temp >= gameData.GetMinBigWinStep() && isPlaying == false)
		{
			GameG.PlayGameBGM("se_bigwin")
			isPlaying = true
			this.spineDragon.setAnimation(0, "start", false)
			this.spineDragon.addAnimation(0, "idle", true , 1)
		}
		
		for(let i in poolStep)
		{
			if(i == targetStep && poolStep[i].root.activeSelf == false)
			{
				poolStep[i].root.active = (true)
				poolStep[i].spineTitle.setAnimation(0, "start", false)
				poolStep[i].spineTitle.addAnimation(0, "idle", true , 1)
				poolStep[i].spineWin.setAnimation(0, "start", false)
				poolStep[i].spineWin.addAnimation(0, "idle", true , 1)
				GameG.PlayGameSound("se_word")			
			}
			poolStep[i].root.active = (i == targetStep)
		}
	},
};

module.exports = UIBigWin
