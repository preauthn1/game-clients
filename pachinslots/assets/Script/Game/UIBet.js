cc.Class({
    extends: cc.Component,

    ctor(){
        this.selectCount = 0
    },

    init(label_betCount){
        this.label_betCount1 = label_betCount

        this.root = this.node

        let self = this
        this.btn_close = cc.find("close", this.node)
        this.btn_close.on('click',function(){
            self.hide()
        })        
        this.hide()

        // 下注額
        this.label_betCount = cc.find("betCount", this.node).getComponent(cc.Label)

        // 增加Bet
        this.btn_addBet = cc.find("add", this.node).getComponent(cc.Button)
        this.btn_addBet.node.on('click',function(){
            self.selectCount += 1
            if (self.selectCount > self.BetCountData.length - 1){
                self.selectCount = self.BetCountData.length - 1
            } 

            self.updateBetCount()
        })

        // 減少Bet
        this.btn_subBet = cc.find("sub", this.node).getComponent(cc.Button)
        this.btn_subBet.node.on('click',function(){
            self.selectCount -= 1
            if (self.selectCount < 0){
                self.selectCount = 0
            }
            self.updateBetCount()
        })

        // 最大Bet
        this.btn_maxBet = cc.find("max", this.node)
        this.btn_maxBet.on('click',function(){
            self.selectCount = self.BetCountData.length - 1

            self.updateBetCount()
        })        
    },

    show(){
        this.root.active = true

        this.updateBetCount()
    },

    hide(){
        this.root.active = false
    },

    getSelectIndex(){
        return this.selectCount;
    },

    SetGoldenDetail(data){
        this.GoldenDetaildata = data
    },

    SetBetCountData(data){
        this.BetCountData = data
    },

    updateBetCount(){
        let Money = this.BetCountData[this.selectCount]
        let GoldenSymbol = this.GoldenDetaildata[0].Credits
        let Value = (Money * GoldenSymbol * 0.01).toFixed(2)    
        this.label_betCount.string = Value.toString()

        if (this.label_betCount1 != null){
            this.label_betCount1.string = Value.toString()
        }

        if (this.selectCount == 0){
            this.btn_subBet.interactable = false
        }
        else{
            this.btn_subBet.interactable = true
        }

        if (this.selectCount == this.BetCountData.length - 1){
            this.btn_addBet.interactable = false
        }
        else{
            this.btn_addBet.interactable = true
        }
    },

});
