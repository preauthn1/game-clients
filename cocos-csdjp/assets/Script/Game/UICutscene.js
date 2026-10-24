let GameG = require("GameGlobal")
let gameData = require("GameData")

let rootRect = null
let distance = 820

/** 用途: 切換遊戲模式的場景 */
var UICutscene = {
    /** 初始化 */
    Init(root){        
        rootRect = root
        rootRect.active = false
        
        this.rootDoorL = cc.find("RootDoorLeft", root)
        this.rootDoorR = cc.find("RootDoorRight", root)
    },
    /** main game 過場 */
    ShowMainGame(callback){
        // free game
        if(gameData.GetGameTypeIndex() == 1){
            this.Show(callback, null)
        }
        else if(gameData.GetGameTypeIndex() == 3 && gameData.leftFreeGame != null){
            this.Show(callback, null)
        }
        else{            
            if(callback != null){
                callback()
            }
        }        
    },
    /** free game 過場 */
    ShowFreeGame(callbackClose, callbackOpen){
        // select game
        if(gameData.GetGameTypeIndex() == 2){
            this.Show(callbackClose, callbackOpen)
        }
        else{
            if(callbackClose != null){
                callbackClose()
            }
            if(callbackOpen != null){
                callbackOpen()
            }
            return
        }
    },
    /** 選擇遊戲過場 */
    ShowSelectGame(callback){
        if(gameData.GetGameTypeIndex() == 3 && gameData.leftFreeGame == null){
            if(callback != null){
                callback()
            }
        }
        else{
            this.Show(callback, null)
        }
    },
    /** 獎勵遊戲過場 */
    ShowBonusGame(callback){
        this.Show(callback, null)
    },
    /** 獎勵遊戲結束過場 */
    ShowBonusGameEnd(callbackClose, callbackOpen){
        this.Show(callbackClose, callbackOpen)
    },

    Show(callbackClose, callbackOpen){
        rootRect.active = true
        GameG.PlayGameSound("se_jpcutscene")
        GameG.PlayGameSound("se_jpclosedoor")

        let start = this.GetStartPosition(this.rootDoorL)
        GameG.DoPosition(this.rootDoorL, start, cc.v2(0, 0), 0.4, callbackClose)
        GameG.DoPosition(this.rootDoorL, null, start, 0.4, function(){
            rootRect.active = false
            if(callbackOpen != null){
                callbackOpen()
            }
        } , 0.6)

        start = this.GetStartPosition(this.rootDoorR)
        GameG.DoPosition(this.rootDoorR, start, cc.v2(0, 0), 0.4)
        GameG.DoPosition(this.rootDoorR, null, start, 0.4, null, 0.6)

    },

    GetStartPosition(node){
        return cc.v2(distance * node.scaleX * -1, node.position.y)
    },
};

module.exports = UICutscene