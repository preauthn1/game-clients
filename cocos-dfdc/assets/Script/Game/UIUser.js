var GameG = require("GameGlobal")
var gameData = require("GameData")

/** 用途: 玩家資訊 */
var UIUser = {
    extends: cc.Component,

    KillSequence() {
        if (this.sequenceWinMoney != null) {
			GameG.CancelNewDelay(this.sequenceWinMoney);
            this.sequenceWinMoney = null
        }
    },

    Init(root) {
        this.rootRect = root
        //頭像
        this.imgHead = cc.find("ImageHead", root).getComponent(cc.Sprite)
        //玩家編號
        this.txtUserId = cc.find("TextUserId", root).getComponent(cc.Label)
        //攜帶金額
        this.txtCarryMoney = cc.find("TextCarryMoney", root).getComponent(cc.Label)
        //贏得分數
        this.txtWinMoney = cc.find("TextWinMoney", root).getComponent(cc.Label)
        
        this.Input = cc.find("Canvas/Input")

		//this.sequenceWinMoney = null
        
        this.callback  = null

		this.winMoney = 0
		
        this.isAddEvent = false

        this.isShow = false
        this.newTime = 0
		this.beginValue = 0
		this.endValue = 0
		this.time = 0        
    },

    //設置攜帶金額
    SetCarryMoney(money) {
        this.txtCarryMoney.string = GameG.FormatUnit(money)
    },

    //設置贏得分數
    SetWinMoney(money) {
        this.txtWinMoney.string = GameG.FormatNum(this.winMoney)
    },
    //重置贏得分數
    ResetWinMoney(reset) {
        if (reset == true) {
            this.winMoney = 0
            this.txtWinMoney.string = ""
        }
        else {
            this.txtWinMoney.string = GameG.FormatNum(this.winMoney)
        }
    },
	

	//目前分數 = 分數 * (經過時間 / 表演時間)
	SetCoin(temp) {
		this.txtWinMoney.string = GameG.FormatNum(temp)
	},

	Complete() {
        UIUser.removeEvent()

        let slef = this

        this.isShow = false

		this.SetCoin(this.winMoney)
    
        this.sequenceWinMoney = function() {
            slef.KillSequence()
            
			if (slef.callback != null) {
				slef.callback()
            }
        }
		GameG.NewDelayOnce(this.sequenceWinMoney, 1)
	},
	
    //表演贏得分數動畫
    AnimWinMoney(money, callback) {
        if (money == 0) {
            return
        }

        GameG.PlayGameSound("se_count")
		
        UIUser.addEvent()
        
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
        {
            this.newTime = this.time
            this.isShow = false
            UIUser.Complete()
        }

        let value = cc.misc.lerp(this.beginValue, this.endValue, this.newTime /this.time)
        UIUser.SetCoin(value)
    },

	addEvent()
	{
		this.isAddEvent = true
		// this.Input.on(cc.Node.EventType.MOUSE_DOWN,  UIUser.onKeyDown, this);
		this.Input.on(cc.Node.EventType.TOUCH_START,  UIUser.onKeyDown, this);
	},
	
	removeEvent(){
        if (this.isAddEvent = true)
        {
		    this.isAddEvent = false
            // this.Input.off(cc.Node.EventType.MOUSE_DOWN,UIUser.onKeyDown, this);
            this.Input.off(cc.Node.EventType.TOUCH_START,UIUser.onKeyDown, this);
        }
	},
	
	onKeyDown(event){
		UIUser.Complete()
	},

    SetGameStart(){

    },

    SetGameEnd(data){

    },

    //設置玩家資訊
    SetGameUser(data) {
        //imgHead: ResetSpriteByName(CS.AppDefine.HallNumber, data.FaceID.toString())
        this.txtUserId.string = gameData.IDTitle + data.UserID.toString()
        UIUser.SetCarryMoney(data.Score)
    },

    CheckShowWinMoney(){
        return (this.isShow == true)
        //return this.sequenceWinMoney != null
    },

    onExit(){
        //UIUser.KillSequence()

        UIUser.removeEvent()
    },
};

module.exports = UIUser;
