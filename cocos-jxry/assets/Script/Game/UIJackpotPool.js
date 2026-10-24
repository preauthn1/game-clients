var G = require( "Global")
var GameG = require( "GameGlobal")
var gameData = require("GameData")
var rootRect = null
var isShow = null
var newTime = null
var time = null
var pool = []

var UIJackpotPool = 
{
	extends: cc.Component,

	//離開遊戲
	onExit(){
	
	},

	Init(root)
	{
		rootRect = root
		rootRect.active =(true)
		
		for(let i = 0; i < root.children.length - 1; ++ i )
		{
			let child = root.children[i]
			pool[i] = []
			pool[i].root = child
			pool[i].txtSystem = cc.find("TextSystem",child).getComponent(cc.Label)
//----->需重新編譯程式碼		pool[index].sequence = CS.DG.Tweening.DOTween.Sequence()
			pool[i].targetMoney = 0
			pool[i].money = 0
		}
		
        isShow = false
        newTime = 0
		time = 0.5
	},

	// 回合開始
	SetGameStart(){
	
	},

	// 回合結束
	SetGameEnd(){
		
	},
		
	SetValue(index, money)
	{
		pool[index].txtSystem.string = GameG.FormatNum(money)
	},
	
	Update(dt)
	{
        if (isShow == false)
		{
            return
		}
		   
        newTime += dt;

        if (newTime >= time)
		{
            isShow = false
		}
		
		for(let i = 0; i < pool.length; i++)
		{
			if (pool[i].beginValue != pool[i].targetMoney)
			{
				let value = cc.misc.lerp(pool[i].beginValue, pool[i].targetMoney, newTime / time)
				this.SetValue(i, value)
			}
		}
	},
	
	RefreshData(showSequence)
	{
		isShow = showSequence
		newTime = 0
		
		for(let i = 0; i < pool.length; i++)
		{
			let userBet = gameData.GetTotalBetMoney()
			let maxBet = gameData.GetMaxBet()
			let targetMoney = pool[i].money * userBet / maxBet
			
			pool[i].beginValue = pool[i].targetMoney
			
			// 顯示過程			
			if(showSequence == true && pool[i].targetMoney != targetMoney)
			{
				
			}
			// 直接顯示
			else
			{
				this.SetValue(i, targetMoney)
			}
			pool[i].targetMoney = targetMoney
		}
	},

	SetData(data)
	{		
		for(let i = 0; i < data.length; i++)
		{
			for(let j = 0; j < pool.length; j++)
			{
				if(pool[j].root.name == data[i].Name)
				{
					pool[j].money = data[i].Money
					break
				}
			}
		}
		this.RefreshData(true)
	},
};

module.exports = UIJackpotPool
