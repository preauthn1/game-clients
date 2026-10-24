var GameData = require("GameData")
var SoundManager = require("SoundManager")

cc.Class({
    extends: cc.Component,

    init (GameLayer) {
        this.GameLayer = GameLayer

        this.MatchButton = cc.find("MatchButton", this.node)
        this.MatchButton.active = true

        this.Label_Name = cc.find("Label_Name", this.node).getComponent(cc.Label)
        this.Label_Score = cc.find("Label_Score", this.node).getComponent(cc.Label)

        let value = SoundManager.GetMusic()
        this.sound = cc.find("Sound", this.node).getComponent(cc.Toggle)
        this.sound.isChecked = value

        this.hide()
    },

    show(){
        this.node.active = true

        let userData = GameData.getUserData()
        if (userData != null){
            this.Label_Name.string = "ID:" + userData.User.UserID
            this.Label_Score.string = Math.floor(userData.User.Score / 100).toString()
        }
        else{
            this.Label_Name.string = ""
            this.Label_Score.string = ""
        }
    },

    hide(){
        this.node.active = false
    },

    isShow(){
        return this.node.active
    },

    /** 按下配對按鈕 */
    clickMatchButton(){
        this.hide()
        this.GameLayer.playClickSound()
        this.GameLayer.UIMatch.show()
    },

    /** 按下幫助按鈕 */
    clickHelpButton(){
        this.GameLayer.playClickSound()
        this.GameLayer.UIHelp.show()
    },

    /** 按下聲音按鈕 */
    clickSoundButton(){
        this.GameLayer.playClickSound()
        let value = SoundManager.GetMusic()
        SoundManager.SetMusic(!value)
        SoundManager.SetSound(!value)
    },    
});
