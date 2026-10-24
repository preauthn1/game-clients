var GameG = require("GameGlobal");
var GameData = require("GameData");

cc.Class({
    extends: cc.Component,

    properties: {
        UIGame : require("UIGame"),
        UIGameResult : require("UIGameResult"),
        UIHelp : require("UIHelp"),
        ClickSound: {
            default: null,
            type : cc.AudioClip,
        },        
    },

    init(GameStart){
        this.GameModel = GameStart.GameModel

        this.UIGame.init(this)
        this.UIGameResult.init(this)
        this.UIHelp.init(this)
    }, 

    show(){
        this.UIGame.show()
    },

    playClickSound(){
        GameG.PlaySound(this.ClickSound)
    },

    /** 初始化遊戲設定 */
    initGameData(){
        this.isShowDead = false
        
        this.UIGame.show()
    },
});
