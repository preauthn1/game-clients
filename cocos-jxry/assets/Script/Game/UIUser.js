var G = require( "Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")

var UIUser = 
{
	extends: cc.Component,

	Init(root)
	{	    
		this.rootRect = root
		//頭像
	    this.imgHead = cc.find("ImageHead",root).getComponent(cc.Sprite)
		//玩家編號
	    this.txtUserId = cc.find("TextUserId",root).getComponent(cc.Label)
		//攜帶金額
	    this.txtCarryMoney = cc.find("TextCarryMoney",root).getComponent(cc.Label)	
		//贏得分數
	    this.txtWinMoney = cc.find("TextWinMoney",root).getComponent(cc.Label)
		
		this.winMoney = 0		
		this.isShow = false
        this.callback  = null
	},
				
	// 設置攜帶金額
	SetCarryMoney(money)
	{
		this.txtCarryMoney.string = GameG.FormatUnit(money)
	},
	
	// 設置贏得分數
	SetWinMoney(money)
	{
		this.winMoney = money
		this.txtWinMoney.string = GameG.FormatNum(this.winMoney)
	},
	
	// 重置贏得分數
	ResetWinMoney(reset)
	{
		if(reset == true)
		{
			this.winMoney = 0
			this.txtWinMoney.string = ""
		}
		else
		{
			this.txtWinMoney.string = GameG.FormatNum(this.winMoney)
		}	
	},
	
	//目前分數 = 分數 * (經過時間 / 表演時間)
	SetCoin(temp)
	{
		this.txtWinMoney.string = GameG.FormatNum(temp)
	},
	
	Complete()
	{
		let self = this
		this.isShow = false
		this.RemoveEvent()		
		this.SetCoin(this.winMoney)		
		GameG.CloseLoopSound("se_count")		
		GameG.NewDelayOnce(function()
		{
			GameG.CloseLoopSound("se_count")
			if(self.callback != null)
			{
				self.callback()
			}
		}, 1)
	},
	
	// 表演贏得分數動畫
	AnimWinMoney(money,callback)
	{
		if(money == 0) 
		{
			return
		}
		GameG.PlayGameSound("se_count",true)
		
        this.AddEvent()
        
        this.isShow = true
        this.newTime = 0
		this.beginValue = this.winMoney
		this.endValue = this.winMoney + money
		this.winMoney = this.winMoney + money
        this.time =  gameData.GetMoneyShowTimer(money)   
        this.callback = callback
    },
    
    Update(dt)
    {
        if (this.isShow == false)
            return

        this.newTime += dt;

        if (this.newTime >= this.time)
            this.Complete()

        let value = cc.misc.lerp(this.beginValue, this.endValue, this.newTime /this.time)
        this.SetCoin(value)
    },
	
	AddEvent()
	{
		this.isAddEvent = true
		this.rootRect.on(cc.Node.EventType.MOUSE_DOWN,  this.onKeyDown, this);
		this.rootRect.on(cc.Node.EventType.TOUCH_START,  this.onKeyDown, this);
	},
	
	RemoveEvent()
	{
        if (this.isAddEvent = true)
		{
		    this.isAddEvent = false
            this.rootRect.off(cc.Node.EventType.MOUSE_DOWN,this.onKeyDown, this);
            this.rootRect.off(cc.Node.EventType.TOUCH_START,this.onKeyDown, this);
        }
	},
	
	onKeyDown(event)
	{
		this.Complete()
	},
	
	SetGameStart()
	{
		
	},
	
	SetGameEnd(data)
	{
		
	},
	
	// 設置玩家資訊
	SetGameUser(data)
	{
		GameG.SetImageSprite(this.imgHead, (data.FaceID).toString())
		this.txtUserId.string = gameData.IDTitle + (data.UserID).toString()
		this.txtCarryMoney.string = GameG.FormatNum(data.Score)
	},
	
	CheckShowWinMoney()
	{
		return this.isShow
	},
	
	onExit()
	{
		GameG.CloseLoopSound("se_count")
	},
};

module.exports = UIUser
