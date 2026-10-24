var G = require( "Global")
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
		
		for(let  i  =  0;  i  <=  root.children.length - 1; ++ i ){
			let child = root.children[i]
			let ret,count = string.gsub(child.name,"Jackpot","")
			let index = tonumber(ret)
			pool[index] = {}
			pool[index].root = child
			pool[index].txtSystem = cc.find("TextSystem",child).getComponent(cc.Label)
	//----->需重新編譯程式碼		pool[index].sequence = CS.DG.Tweening.DOTween.Sequence()
			pool[index].targetMoney = 0
			pool[index].Money = 0
		}
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

	/** 刷新獎金池 */
	RefreshData(showSequence){
		for(let  i = 1;  i <=  pool.length; ++ i){	
			let userBet = gameData.GetTotalBetMoney()
			let maxBet = gameData.GetMaxBet()
			let targetMoney = pool[i].Money * userBet / maxBet * 0.01
					
			if(showSequence == true && pool[i].targetMoney != targetMoney){
				if(pool[i].sequence != null){
	//----->需重新編譯程式碼				pool[i].sequence:Kill()
				}
	//----->需重新編譯程式碼			pool[i].sequence = CS.DG.Tweening.DOTween.Sequence()
	//----->需重新編譯程式碼			pool[i].sequence:Append(CS.DG.Tweening.DOTween.To(setValue, pool[i].targetMoney, targetMoney, 0.5));
			} 
			else if(pool[i].targetMoney != targetMoney){

				if(pool[i].sequence != null){
	//----->需重新編譯程式碼				pool[i].sequence:Kill()
					pool[i].sequence = null
				}
				this.setValue(i, targetMoney)
			}
			pool[i].targetMoney = targetMoney
		}
	},
	/** 設置獎金池 */
	SetData(data){
		for(let  i = 1;  i <= data.length; ++ i){	
			if(pool[i] != null) {
				pool[i].Money = data[i]
			}
		}
		RefreshData(true)
	},


};

module.exports = UIJackpotPool
