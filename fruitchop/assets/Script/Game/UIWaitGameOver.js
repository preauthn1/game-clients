var GameData = require("GameData");

/** 等待遊戲結束UI */
cc.Class({
    extends: cc.Component,

    init (GameLayer) {
        this.GameLayer = GameLayer
        this.GameModel = this.GameLayer.GameModel

        this.UIPlayer1 = cc.find("Player1", this.node).getComponent("UIPlayer")
        this.UIPlayer2 = cc.find("Player2", this.node).getComponent("UIPlayer")

        this.UIMessageBox = cc.find("UIMessageBox", this.node)

        this.hide()
    },

    show(){
        this.node.active = true
        this.isInit = false

        let data = GameData.getRank()
        this.updateRank(data)
    },

    hide(){
        this.node.active = false
        this.UIMessageBox.active = false
    },

    isShow(){
        return this.node.active
    },

    /**  更新玩家資料 */
    updateRank(data){
        this.GameLayer.updatePlayerData(data, this.UIPlayer1, this.UIPlayer2, this.isInit)
        this.isInit = true // 避免重複指定
    },

    showGameResult(){
        this.hide()

        this.GameLayer.UIWaitGameOver.show()
    },

    /** 按下離開 */
    clickExitButton(){
        this.GameLayer.playClickSound()

        this.UIMessageBox.active = true
    },

    /** 按下確認放棄遊戲 */
    clickYesButton(){
        this.GameLayer.playClickSound()

        this.UIMessageBox.active = false

        // 傳送放棄遊戲封包
        this.GameModel.giveUp()
    },

    /** 按下取消放棄遊戲 */
    clickNoButton(){
        this.GameLayer.playClickSound()

        this.UIMessageBox.active = false
    },
});
