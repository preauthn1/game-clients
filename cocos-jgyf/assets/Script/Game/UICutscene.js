let GameG = require("GameGlobal")
let gameData = require("GameData")

// let rootRect = null
// let animMainGame = null
// let animSelectGame = null
// let animFreeGame = null
// let animBonusGame = null
let screenHeight = 750
// let scheduleShow = null

/** 用途: 切換遊戲模式的場景 */
var UICutscene = {
    /** 初始化 */
    Init(root){        
        this.rootRect = root
        this.rootRect.active = false
        
        // animMainGame = cc.find("MainGame", root).getComponent("MotionEffectControl")
        // animMainGame.node.active = false
        // animSelectGame = cc.find("SelectGame", root).getComponent("MotionEffectControl")
        // animSelectGame.node.active = false
        // animFreeGame = cc.find("FreeGame", root).getComponent("MotionEffectControl")
        // animFreeGame.node.active = false
        // animBonusGame = cc.find("BonusGame", root).getComponent("MotionEffectControl")
        // animBonusGame.node.active = false


        screenHeight = GameG.GetScreenHeight()

        this.InitFreeGameEffect()
    },
    /** main game 過場 */
    ShowMainGame(callback){
        if(gameData.GetGameTypeIndex() == gameData.EnumGameType.MainGame){
            if(callback != null){
                callback()
            }
            return
        }

        if (this.freeGame.isPlay == false){
            if (callback != null){
                callback()
            }
        }
        else{
            this.ShowFreeGameEffect(callback, null)
            this.freeGame.isPlay = false
        }
    },

    InitFreeGameEffect(){
        this.freeGame = {}
        this.freeGame.root = cc.find("FreeGame", this.rootRect)
        this.freeGame.effect = cc.find("Effect", this.freeGame.root)
        this.freeGame.startPos = this.freeGame.effect.position
        this.freeGame.particles = cc.find("Particle", this.freeGame.effect).getComponentsInChildren(cc.ParticleSystem)
        this.freeGame.isPlay = false
    },

    ShowFreeGameEffect(callback, endCallback){
        this.rootRect.active = true

        GameG.PlayGameSound("se_cutscenes01")

        // 重設特效
        for (let i = 0; i < this.freeGame.particles; ++i){
            this.freeGame.particles[i].resetSystem()
        }

        let self = this

        this.freeGame.root.active = true

        // 移動背景
        this.freeGame.effect.position = this.freeGame.startPos
        let sequence = GameG.NewTween(this.freeGame.effect) 
        sequence.to(2, {position: cc.v2(0, 0)})
        sequence.delay(2.5)
        sequence.call(function(){
            self.freeGame.root.active = false
            self.rootRect.active = false

			if(endCallback != null){
				endCallback()
            }            
        })
        sequence.start()
        
        // 淡化背景
        this.freeGame.effect.opacity = 255

        let sequence1 = GameG.NewTween(this.freeGame.effect)
        sequence1.delay(2.5)
        sequence1.call(function(){
            if(callback != null){
				callback()
            }
        })
        sequence1.to(2, {opacity: 0})
        sequence1.start()
    },    
    /** free game 過場 */
    ShowFreeGame(callback, endCallback){
        if(gameData.GetGameModeIndex() == gameData.EnumGameType.FreeGame){
            if(callback != null){
                callback()
            }
            if(endCallback != null){
                endCallback()
            }
            return
        }

        this.freeGame.isPlay = true

        this.ShowFreeGameEffect(callback, endCallback)
    },   
    /** 選擇遊戲過場 */
    ShowSelectGame(callback){        
        if(callback != null){
            callback()
        }
    },
    /** 獎勵遊戲過場 */
    ShowBonusGame(callback){
        if (callback != null){
            callback()
        }
    },
    /** 獎勵遊戲結束過場 */
    ShowBonusGameEnd(callback){
        if (callback != null){
            callback()
        }
    }
};

module.exports = UICutscene