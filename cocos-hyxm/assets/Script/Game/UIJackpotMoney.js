let GameG = require("GameGlobal")
let gameData = require("GameData")
let uiinputEvent = require("UIInputEvent")

let rootRect = null
let completeCallback = null

/** 用途: 由獎金池獲得的獎金 */
var UIJackpotMoney = {
    /** 初始化 */
    Init(root){        
        rootRect = root
        rootRect.active = false
        // 獲得金額
        this.txtMoney = cc.find("TextMoney", root).getComponent(cc.Label)
    },
    /** 顯示介面 */
    Show(money, callback){
        if(money == 0){
            if(callback != null){
                callback()
            }
            return
        }
        
        GameG.PlayGameSound("jp_major")
        
        rootRect.active = true
        completeCallback = callback
        // 獲得金額
        this.txtMoney.string = GameG.FormatNum(money)

        let self = this
        GameG.ScheduleOnce(function(){
            self.Hide()
        }, 1)
    },
    /** 關閉介面 */
    Hide(){
        rootRect.active = false
        if(completeCallback != null){
            completeCallback()
        }
    },
};

module.exports = UIJackpotMoney