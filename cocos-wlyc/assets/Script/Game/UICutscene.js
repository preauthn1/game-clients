let GameG = require("GameGlobal")
let gameData = require("GameData")

let rootRect = null
let animMainGame = null
let animSelectGame = null
let animFreeGame = null
let screenHeight = 750
let scheduleShow = null

/** 用途: 切換遊戲模式的場景 */
var UICutscene = {
    /** 初始化 */
    Init(root){        
        rootRect = root
        rootRect.active = false
        
        // main game
        animMainGame = cc.find("MainGame", root).getComponent("MotionEffectControl")
        animMainGame.node.active = false
        // select game
        animSelectGame = cc.find("SelectGame", root).getComponent("MotionEffectControl")
        animSelectGame.node.active = false
        // free spin
        animFreeGame = cc.find("FreeGame", root).getComponent("MotionEffectControl")
        animFreeGame.node.active = false

        screenHeight = GameG.GetScreenHeight()
    },
    /** main game 過場 */
    ShowMainGame(callback){
        if(gameData.GetGameTypeIndex() == 0){
            if(callback != null){
                callback()
            }
            return
        }
        GameG.PlayGameBGM("se_cutscenes02")
        rootRect.active = true
        animMainGame.node.active = true
        animMainGame.play()
        scheduleShow = GameG.ScheduleOnce(function(){
            scheduleShow = null
            animMainGame.node.active = false
            rootRect.active = false
            if(callback != null){
                callback()
            }
        })
    },
    /** free game 過場 */
    ShowFreeGame(preGameType, callback){
        if(preGameType == 1){
            if(callback != null){
                callback()
            }
            return
        }
        GameG.PlayGameBGM("se_cutscenes02")
        rootRect.active = true
        animFreeGame.node.active = true
        animFreeGame.play("Trans_02_Normal")
        
        scheduleShow = GameG.ScheduleOnce(function(){
            scheduleShow = null
            animFreeGame.node.active = false
            rootRect.active = false
            if(callback != null){
                callback()
            }
        })
    },
    /** 選擇遊戲過場 */
    ShowSelectGame(callback){        
        GameG.PlayGameBGM("se_cutscenes")  
        if(gameData.GetGameTypeIndex() == 1){
            this.ShowSelectGameFormFreeGame(callback)
        }
        else{
            this.ShowSelectGameFormMainGame(callback)
        }
    },
    /** 從main game到選擇遊戲過場 */
    ShowSelectGameFormMainGame(callback){
        let showTime = 2
        rootRect.active = true
        animSelectGame.node.active = true
        animSelectGame.node.opacity = 255
        animSelectGame.node.position = cc.v2(0, screenHeight * 0.5)
        animSelectGame.play()

        scheduleShow = GameG.NewTween(animSelectGame.node)
        .to(showTime, { position: cc.v2(0, -screenHeight)})
        .call(function(){
            scheduleShow = null
        })
        .start()
        
        GameG.NewTween(animSelectGame.node)
        .delay(showTime * 0.7)
        .call(function(){
            if(callback != null){
                callback()
            }
        })
        .delay(showTime * 0.2)
        .to(showTime * 0.1, { opacity: 0})
        .call(function(){
            animSelectGame.node.active = false
            rootRect.active = false
        })
        .start()
    },

    /** 從free game到選擇遊戲過場 */
    ShowSelectGameFormFreeGame(callback){
        rootRect.active = true
        animFreeGame.node.active = true
        animFreeGame.play("Trans_02_Reverse")
        
        scheduleShow = GameG.ScheduleOnce(function(){
            scheduleShow = null
            if(callback != null){
                callback()
            }
            animFreeGame.node.active = false
            rootRect.active = false
        })
    },
};

module.exports = UICutscene