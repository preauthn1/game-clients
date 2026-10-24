var GameG = require("GameGlobal")
var GameData = null
var GameSound = null
var selectIndex = 0

cc.Class({
    extends: cc.Component,

	onDestroy(){
		selectIndex = 0
	},

    Init(){
        GameData = require("GameData")
        GameSound = cc.find("Canvas/GameSound").getComponent("GameSound")

        this.root = this.node
        this.root.active = false

        let self = this
        this.btnClose = cc.find("close", this.node)
        this.btnClose.on('click',function(){
            self.Hide()
        })

        // 下注額
        this.labelBetCount = cc.find("betCount", this.node).getComponent(cc.Label)

        // 增加Bet
        this.btnAddBet = cc.find("add", this.node).getComponent(cc.Button)
        this.btnAddBet.node.on('click',function(){
            GameSound.playButton()
            self.SetCurrentIndex(selectIndex +1)
        })

        // 減少Bet
        this.btnSubBet = cc.find("sub", this.node).getComponent(cc.Button)
        this.btnSubBet.node.on('click',function(){
            GameSound.playButton()
            self.SetCurrentIndex(selectIndex -1)
        })

        // 最大Bet
        this.btnMaxBet = cc.find("max", this.node).getComponent(cc.Button)
        this.btnMaxBet.node.on('click',function(){
            GameSound.playButton()
            self.SetCurrentIndex(GameData.GetOddsLength() - 1)
        })
    },

    Show(){
        this.root.active = (GameData.GetOddsLength() > 1)
                
        this.UpdateBetCount()
    },

    Hide(){
        this.root.active = false
    },
    
    SetData(){
        selectIndex = 0
        let data = GameData.GetOdds()
        for(let i in data){
            if(data[i] == GameData.GetBetOdds()){
                selectIndex = i
            }
        }
    },

    SetCurrentIndex(index){
        let betOdds = GameData.GetOdds(index)
        if(betOdds == null){
            return
        }
        selectIndex = index
        GameData.SetBetOdds(betOdds)
        this.UpdateBetCount()
    },

    UpdateBetCount(){
        let Value = GameG.FormatNum(GameData.GetNowBet(), 0)
        this.labelBetCount.string = Value

        if (this.changeCallback != null){
            this.changeCallback(Value)
        }
        this.btnSubBet.interactable = (GameData.GetOdds(selectIndex -1) != null)
        this.btnAddBet.interactable = (GameData.GetOdds(selectIndex +1) != null)
        this.btnMaxBet.interactable = (GameData.GetOdds(GameData.GetOddsLength() - 1) != null)
    },

    SetChangeCallback(callback){
        this.changeCallback = callback
    },
});
