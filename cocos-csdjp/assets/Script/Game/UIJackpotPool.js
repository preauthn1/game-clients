var GameG = require("GameGlobal")
var gameData = require("GameData")
var pool = []

/** 用途: 獎金池介面 */
var UIJackpotPool = {
	extends: cc.Component,
	/** 遊戲離開(斷線重連) */
	onExit(){
        pool = []
    },
    /** 初始化 */
	Init(root){
		this.rootRect = root
		this.rootRect.active =(true)
		
        for (var i = 0; i < root.children.length; ++i) {
			let child = root.children[i]
			let keyName = child.name
			pool[keyName] = {}
			pool[keyName].root = child
			pool[keyName].txtSystem = cc.find("Text",child).getComponent(cc.Label)
			pool[keyName].MoneyLerp = 0
			pool[keyName].Money = 0
			pool[keyName].Name = keyName
		}
	},
	/** 刷新獎金池 */
	RefreshData(){
		for(let i in pool){
			let money = gameData.GetJackpotPoolMoney(pool[i].Name)
			pool[i].Money = money
			pool[i].MoneyStart = money
			pool[i].MoneyLerp = money
			pool[i].txtSystem.string = GameG.FormatNum(money)
		}
	},

	Update(dt){
		for(let i in pool){
			let data = pool[i]
			if(data.MoneyLerp != data.Money){

				data.MoneyLerp = Math.floor(cc.misc.lerp(data.MoneyStart, data.Money, (new Date().getTime() - data.startTime) / data.showTime))
				data.txtSystem.string = GameG.FormatNum(data.MoneyLerp)
				if(data.MoneyLerp >= data.Money){
					data.MoneyLerp = data.Money
				}
			}
		}
	},
	/** 設置獎金池 */
	SetData(data){
		for(let k in (data.Jackpots)){ 
			let v = data.Jackpots[k] 
			let index = v.Name
			if(pool[index] != null){
				pool[index].MoneyStart = pool[index].Money
				pool[index].Money = gameData.GetJackpotPoolMoney(index)
				pool[index].showTime = 0.5 * 1000
				pool[index].startTime = new Date().getTime()
			}
		}
		this.RefreshData()
	},

	SetActive(isActive){
		this.rootRect.active = isActive
	},
};

module.exports = UIJackpotPool
