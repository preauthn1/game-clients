var G = require( "Global")
var GameG = require( "GameGlobal")
var gameData = require("GameData")
var pool = []

/** 用途: 獎金池介面 */
var UIJackpotPool = {
	extends: cc.Component,

	/** 遊戲離開(斷線重連) */
	onExit(){
	
	},
    /** 初始化 */
	Init(root){
		this.rootRect = root
		this.rootRect.active =(true)
		
		for(let i = 0; i <= root.children.length - 1; ++ i ){
			let child = root.children[i]
			let ret = child.name.replace("Jackpot","")
			let index = parseInt(ret)
			pool[index] = {}
			pool[index].root = child
			pool[index].txtSystem = cc.find("TextSystem",child).getComponent(cc.Label)
	//----->需重新編譯程式碼		pool[index].sequence = CS.DG.Tweening.DOTween.Sequence()
			pool[index].targetMoney = 0
			pool[index].Money = 0
		}
		
        this.isShow = false
        this.newTime = 0
		this.time = 0.5
	},

// 回合開始
	SetGameStart(){
	
	},

// 回合結束
	SetGameEnd(){
		
	},
		
	SetValue(index, money){
		pool[index].txtSystem.string = GameG.FormatNum(money)			
	},

	Update(dt){
        if (this.isShow == false)
            return
		   
        this.newTime += dt;

        if (this.newTime >= this.time)
        {
			this.newTime = this.time
			this.isShow = false
		}    
		
		for(let i in pool){
			if (pool[i].beginValue != pool[i].targetMoney){
				let value = cc.misc.lerp(pool[i].beginValue, pool[i].targetMoney, this.newTime / this.time)
				this.SetValue(i,value)
			}
		}
	},
	/** 刷新獎金池 */
	RefreshData(showSequence){
		this.isShow = (showSequence == true)
		this.newTime = 0
		
		for(let i in pool){				
			let userBet = gameData.GetTotalBetMoney()
			let maxBet = gameData.GetMaxBet()
			let targetMoney = pool[i].Money * userBet / maxBet
			
			pool[i].beginValue = pool[i].targetMoney	
			// 顯示過程			
			if(showSequence == true && pool[i].targetMoney != targetMoney){
				
			} 
			// 直接顯示
			else{
				this.SetValue(i,targetMoney)
			}
			pool[i].targetMoney = targetMoney
		}
	},
	/** 設置獎金池 */
	SetData(data){
		for(let i in data){	
			let index = parseInt(i)+1
			if(pool[index] != null) {
				pool[index].Money = data[i]
			}
		}
		
		this.RefreshData(true)
	},


};

module.exports = UIJackpotPool
