let GameG = require("GameGlobal")
let gameData = require("GameData");

var UIBonusEnter = {
	extends: cc.Component,

	Init(root){
		this.rootRect = root
        this.rootRect.active = true
        
        this.BowlRoot = cc.find("Bowl", this.rootRect)
        this.BowlSpine = cc.find("Spine", this.BowlRoot).getComponent(sp.Skeleton)
        this.BowlParticleObj = cc.find("Particle", this.BowlRoot)
        this.BowlParticleObj.active = false
        this.BowlParticles = this.BowlParticleObj.getComponentsInChildren(cc.ParticleSystem)

        // 獎勵次數
        this.BowlRewardCount = GameG.MathRandom(0,gameData.RewardStep[gameData.RewardStep.length - 1])
        this.BowlUpdateRewardStep()    

        // 蝙蝠
        this.BatPrefabPool = cc.find("Bat", this.rootRect).getComponent("ObjectPool")
        this.BatRoot = cc.find("Bat", this.rootRect)
        this.BatSetActive(false)
	},
    
	ChangeBowlPosition(node){
        this.BowlRoot.position = GameG.GetWorldPosition(node)
    },

	GetBowlNode(){
        return this.BowlRoot
    },    

	Show(callback){
        this.completeCallback = callback
        
        if(gameData.bonusGame != null){
            // 寶箱打開
            this.BowlOpen()
            GameG.ScheduleOnce(function(){
                if(callback != null){
                    callback()
                }
            }, 2.9 * 0.75)
        }
        else{
            if(callback != null){
                callback()
            }
        }
    },

    Hide(){
        this.rootRect.active = false
        if(this.completeCallback != null){
            this.completeCallback()
        }
    },

    // 播放聚寶盆動畫
    BowlOpen(){
        GameG.PlayGameSound("se_potexlpode")
        
        GameG.ScheduleOnce(function(){
            GameG.PlayGameSound("se_potclose")
        }, 0.5)

        let self = this
        GameG.ScheduleOnce(function(){
            GameG.PlayGameSound("se_potopen")
            
            // 設定獎勵數值0
            self.BowlSetRewardValue(0)
        }, 2.5)

        self.BowlSpine.setAnimation(0, "open", false)
    },

    // 關閉聚寶盆動畫
    BowlStop(){
        this.BowlSpine.setAnimation(0, "stop", true)
    },

    BowlSetActive(isActive){
        this.BowlRoot.active(isActive)
    },

    // 顯示聚寶盆
    BowlShow (){
        this.BowlSetActive(true)
    },

    // 隱藏聚寶盆
    BowlHide(){
        this.BowlSetActive(false)
    },

    // 顯示聚寶鵬特效
    ShowBowlParticle(){
        this.BowlParticleObj.active = true
        
        for (let i = 0; i < this.BowlParticles.length; ++i){
            this.BowlParticles[i].resetSystem()
        }

        let self = this
        GameG.ScheduleOnce(function(){
            self.BowlParticleObj.active = false
        }, 1)
    },

    // 寶箱隱藏
    BowlHide(){
        this.BowlHide()
    },
    
    GetBowlSpine(){
        return this.BowlSpine
    },

    BatSetActive(isActive){
        this.BatRoot.active = isActive
    },

    // 播放蝙蝠飛動畫
    PlayBat(reel, row){
        this.BatSetActive(true)
        
        let rowNum = gameData.GetSlotRowCount()
        let mode = "mode" + rowNum.toString() + "x5"
        //let obj = this.BatPrefabPool.get(mode, this.BatRoot)
        let obj = this.BatPrefabPool.getCloneObject(mode, this.BatRoot)
        if (obj == null){
            console.error("can not find mode", mode)
            return
        }
        obj.active = true

        let anim = obj.getComponent(cc.Animation)
        let animName = "bat_" + reel + "_" + (rowNum - row + 1)
        anim.play(animName, 0)
        
        let self = this
        GameG.ScheduleOnce(function(){
            obj.destroy()
            //anim.stop()
            //obj.active = false
            
            //self.BatPrefabPool.free(mode, obj)

            // 有Bonus資料
            if(gameData.bonusGame == null){
                self.BowlAddReward(1)
            }
            else{
                self.BowlAddReward(gameData.RewardStep[gameData.RewardStep.length])
            }
        }, 1)
    },
    
    // 表演蝙蝠
    ShowBat(receiveMsg, callback){
        let self = this
        let isShow = false

        // 檢查蝙蝠
        for (let i = 0 ; i < receiveMsg.ReelResult.length; ++i){
            let j = receiveMsg.ReelResult[i]
            let symbol = j.Symbol
            let position = j.Position
            
            // 隨便一隻蝙蝠
            if(symbol.SymbolName == "w1"){
                // 播放蝙蝠
                GameG.ScheduleOnce(function(){
                    GameG.PlayGameSound("se_collect")
                    self.PlayBat(position.Reel, position.Row)
                }, 0.3)
                // uislot.PlayAnim(position.Reel, symbol.SymbolID, "bat_fly", false)
                isShow = true
            }
        }

        if(isShow){
            let sequence = GameG.NewTween(this.rootRect)
            sequence.delay(1.2)
            sequence.call(function(){
                self.ShowBowlParticle()
            })
            sequence.delay(1)
            sequence.call(function(){
                if(callback != null){
                    callback()
                }
            })
            sequence.start()
        }
        else if(callback != null){
            callback()
        }
    },

    // 設定獎勵數值
    BowlSetRewardValue(value){
        this.BowlRewardCount = value
        this.BowlUpdateRewardStep()
    },

    // 設定獎勵在第幾階段
    BowlUpdateRewardStep(){
        let targetStep = 1
        for (let i = 0; i <= gameData.RewardStep.length; ++i){
            if(this.BowlRewardCount > gameData.RewardStep[i]){
                targetStep = i + 1
            }
        }
        // 動畫第一階段沒有值
        if (targetStep == 1){
            targetStep = ""
        }
        this.BowlSpine.setAnimation(0, "stop" + targetStep, false)
    },

    // 設定獎勵在第幾階段
    BowlAddReward(rewardCount){
        this.BowlRewardCount = this.BowlRewardCount + rewardCount
        this.BowlUpdateRewardStep()
    },
    
    GetRewardPosition(){
        return this.BowlSpine.node.position
    },

};

module.exports = UIBonusEnter
