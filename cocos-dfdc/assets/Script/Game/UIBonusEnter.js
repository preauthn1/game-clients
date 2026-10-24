var G = require("Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")

var UIBonusEnter = {
    extends: cc.Component,

    //離開遊戲
    onExit(){
    
    },
    
    Init(root){

        this.completeCallback = null
        this.mRewardCoin = -1

        this.rootRect = root
    
        this.AnimBat = []
        
        this.PrefabBat = cc.find("ImageBat", root)
        if (this.PrefabBat)
            this.PrefabBat.active = false
        
        this.rootReward = cc.find("ImageReward", root)
        this.AnimReward = cc.find("ImageReward", root).getComponent("AnimationController")
        
        this.SetRewardStep()
    },
    
    // 回合開始
    SetGameStart() {
    
    },
    
    // 回合結束
    SetGameEnd() {
    
    },
    
    Show(symbolList, currentIndex, winMoney, callback) {
        let self = this

        this.completeCallback = callback
        if(symbolList.length == 0){
            this.Hide()
            return
        }

        let sequenceReward = cc.tween(this.rootRect)
        sequenceReward.delay(1.0)
        sequenceReward.call( function() {
            self.mRewardCoin = self.mRewardCoin + winMoney            
            self.SetRewardStep()
        })
        sequenceReward.start()

        for (let i in symbolList) {
            let reel = symbolList[i].RealID
            let row = symbolList[i].RowIndex
            let path = (reel-1) *gameData.RowCounts + row

            if(i >= this.AnimBat.length) {
                this.CreateAnimBat()
            }

            let index = i
            if (this.AnimBat[index])
                this.AnimBat[index].SetInteger("path", path)
        }
        
        GameG.PlayGameSound("se_collect")
		GameG.NewDelayOnce(function() {
            for (let i = 0; i < symbolList.length; ++i) {
                if (self.AnimBat[i])
                    self.AnimBat[i].SetInteger("path", 0)
            }
		}, 1.5)
        
        if(gameData.BonusDetail == null){
            this.Hide()
            return
        }

        if(currentIndex >= gameData.BonusDetail.symbolList){
            this.Hide()
            return
        }
        
        let sequence = cc.tween(this.rootRect)
        // 聚寶盆關閉
        sequence.delay(1.0)
        sequence.call( function() {
            self.AnimReward.SetInteger("step", 0)
            self.AnimReward.SetTrigger("close")
        })
        // 聚寶盆震動
        sequence.delay(0.7)
        sequence.call( function() {
            self.AnimReward.ChangeState("shake")
        })
        // 聚寶盆打開
        sequence.delay(1.3)
        sequence.call( function() {
            self.AnimReward.ChangeState("explode")
        })
        // 進入bouns game
        sequence.delay(1.7)
        sequence.call( function() {
            self.mRewardCoin = 0
            self.SetRewardStep()
            self.Hide()
        })
		sequence.start()
		
		let sequenceAudio = cc.tween(this.rootRect)
        // 聚寶盆關閉
        sequenceAudio.delay(1.5)
        sequenceAudio.call( function() {
            GameG.PlayGameSound("se_potclose")
        })
        // 聚寶盆震動
        sequenceAudio.delay(1.0)
        sequenceAudio.call( function() {
            GameG.PlayGameSound("se_potexlpode", true)
        })
        // 聚寶盆打開
        sequenceAudio.delay(1.6)
        sequenceAudio.call( function() {
            GameG.CloseLoopSound("se_potexlpode")
            GameG.PlayGameSound("se_potopen")
        })
		sequenceAudio.start()
    },
    
    // 關閉介面
    Hide() {
        if(this.completeCallback != null) {
            this.completeCallback()
        }
    },
    
    // 創造蝙蝠動畫
    CreateAnimBat() {
        let clone = cc.instantiate(this.PrefabBat)
        if(clone == null) return null
        this.PrefabBat.parent.addChild(clone)
        clone.name = clone.name + this.AnimBat.length
        clone.position = this.PrefabBat.position
        clone.scale = 1
        clone.active = true
        
        let index = this.AnimBat.length
        this.AnimBat[index] = clone.getComponent("AnimationController")
        this.AnimBat[index].SetInteger("path", 0)
    },

    // 設定獎勵在第幾階段
    SetRewardStep() {
        if(this.mRewardCoin == -1){
            this.mRewardCoin = G.getRandom(0,gameData.RewardStep[gameData.RewardStep.length -1])
        }
        let targetStep = 1
        for (let i = 0; i < gameData.RewardStep.length; ++i) {
            if(this.mRewardCoin > gameData.RewardStep[i]){
                targetStep = i
            }
        }
        
        if (this.AnimReward)
            this.AnimReward.SetInteger("step", targetStep)
    },
    
    GetRewardPosition() {
        return this.rootReward.position
    },
};

module.exports = UIBonusEnter;
