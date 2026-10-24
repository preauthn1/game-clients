let GameG = require("GameGlobal")
let gameData = require("GameData")

let rootRect = null

/** 用途: 切換遊戲模式的場景 */
var UICutscene = {
    /** 初始化 */
    Init(root){        
        rootRect = root
        rootRect.active = false

        // free spin
        this.animFreeSpine = cc.find("FreeSpin", root).getComponent("MotionEffectControl")
        this.animFreeSpine.node.active = false
        this.txtLeftFreeCount = cc.find("FreeSpin/scroll/mask/curtain/TextCount", root).getComponent("LabelSprite")
        this.leftFreeCount = 0

        // lightning
        this.animLightning = cc.find("Lightning", root).getComponent("MotionEffectControl")
        this.animLightning.node.active = false
    },
    /** main game 過場 */
    ShowMainGame(callback){
        GameG.LogProcess("[UICutscene] ShowMainGame")
        if(callback != null){
            callback()
        }
    },
    /** free game 過場 */
    ShowFreeGame(callbackShow, callbackHide){
        if (gameData.leftFreeGame.Count <= this.leftFreeCount){
            if(callbackShow != null){
                callbackShow()
            }
            if(callbackHide != null){
                callbackHide()
            }
        }
        else{
            GameG.LogProcess("[UICutscene] ShowFreeGame")
            rootRect.active = true
            this.animFreeSpine.node.active = true
            this.animFreeSpine.play()
            let content = "x"+(gameData.leftFreeGame.Count - this.leftFreeCount) + " {t1}"
            this.txtLeftFreeCount.Set(content)

            let self = this
            // cutscene fade in time
            GameG.ScheduleOnce(function(){
                if(callbackShow != null){
                    callbackShow()
                }
            }, 0.25)

            // cutscene fade out time
            GameG.ScheduleOnce(function(){
                rootRect.active = false
                self.animFreeSpine.node.active = false
                if(callbackHide != null){
                    callbackHide()
                }
            }, 1.5)
        }
        this.leftFreeCount = gameData.leftFreeGame.Count -1
    },
    /** 選擇遊戲過場 */
    ShowSelectGame(callback){
        GameG.LogProcess("[UICutscene] ShowSelectGame")
        if(callback != null){
            callback()
        }
    },
    /** 獎勵遊戲過場 */
    ShowBonusGame(callback){
        GameG.LogProcess("[UICutscene] ShowBonusGame")
        if(callback != null){
            callback()
        }
    },
    /** 獎勵遊戲結束過場 */
    ShowBonusGameEnd(callback){
        GameG.LogProcess("[UICutscene] ShowBonusGameEnd")
        if(callback != null){
            callback()
        }
    },
    /** 免費再轉特別獎過場 */
    ShowLightingGame(callbackShow, callbackHide){
        if(gameData.GetGameModeIndex() == gameData.EnumGameType.LightningGame){
            if(callbackShow != null){
                callbackShow()
            }
            if(callbackHide != null){
                callbackHide()
            }
        }
        else{
            GameG.LogProcess("[UICutscene] ShowLightingGame")

            let self = this
            // 熊貓表演時間，熊貓的物件再[UIMainGame][UIFreeSpin]
            let pandaShowTime = 1.5
            // 等熊貓表演結束再打開介面
            let delayTime = (gameData.GetGameModeIndex() == gameData.EnumGameType.MainGame) ? pandaShowTime : 0
            delayTime = (gameData.GetGameModeIndex() == gameData.EnumGameType.FreeGame) ? pandaShowTime : delayTime
            GameG.ScheduleOnce(function(){
                rootRect.active = true
                self.animLightning.node.active = true
            }, delayTime)
            
            // 畫面淡入時間
            delayTime += 1 
            GameG.ScheduleOnce(function(){
                if(callbackShow != null){
                    callbackShow()
                }
            }, delayTime)

            // 畫面淡出時間
            delayTime += 3
            GameG.ScheduleOnce(function(){
                rootRect.active = false
                self.animLightning.node.active = false
                if(callbackHide != null){
                    callbackHide()
                }
            }, delayTime)
        }
    },
};

module.exports = UICutscene