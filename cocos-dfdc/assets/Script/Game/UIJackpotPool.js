var GameG = require("GameGlobal")
var gameData = require("GameData")

/** 用途: 獎金池介面 */
var UIJackpotPool = {
    extends: cc.Component,
    
	/** 遊戲離開(斷線重連) */
    onExit(){
    
    },
    
    Init(root){
        this.pool = []
        let children = root.children;
        for (var i = 0; i < children.length; ++i) {
            let child = children[i]
            let ret = child.name.substr(7, 1)
            let index = parseInt(ret)            
            this.pool[index] = {}
            this.pool[index].root = child
            this.pool[index].txtSystem = cc.find("TextSystem", child).getComponent(cc.Label)
            this.pool[index].targetSyspool = 0
            this.pool[index].Syspool = 0

            this.pool[index].beginValue = 0
            this.pool[index].endValue = 0
        }

		this.isAddEvent = false
        
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
    
    setValue(i, temp){
        this.pool[i].txtSystem.string = GameG.FormatNum(temp)			
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

        for (var i = 1; i < this.pool.length; ++i) {
            let data = this.pool[i]
            if (data.beginValue != data.endValue){
                let value = cc.misc.lerp(data.beginValue, data.endValue, this.newTime / this.time)
                UIJackpotPool.setValue(i, value)
            }
        }
    },
	/** 刷新獎金池 */
    RefreshData(showSequence){
        for (var i = 1; i < this.pool.length; ++i) {
            let data = this.pool[i]
			let userBet = gameData.GetTotalBetMoney()
			let maxBet = gameData.GetMaxBet()
            let targetSyspool = data.Syspool * userBet / maxBet
            data.beginValue = data.targetSyspool
            data.endValue = targetSyspool

            // 顯示過程
            if(showSequence == true){
                if (data.targetSyspool != targetSyspool){

                }
                else{
                    UIJackpotPool.setValue(i, targetSyspool)
                }
            }
            // 直接顯示
            else{
                UIJackpotPool.setValue(i, targetSyspool)
            }
            data.targetSyspool = targetSyspool
        }

        if (showSequence){
            this.isShow = true
            this.newTime = 0
        }
        else{
            this.isShow = false
        }
    },
	/** 設置獎金池 */
    SetData(data){
        for (let i in data) {
            let index = data[i].JackpotID
            if(this.pool[index] != null) {
                this.pool[index].Syspool = data[i].Syspool
            }
        }
        UIJackpotPool.RefreshData(true)
    },
};

module.exports = UIJackpotPool;
