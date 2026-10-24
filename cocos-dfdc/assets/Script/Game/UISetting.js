var GameG = require("GameGlobal")

/** 用途: 設定介面 */
var UISetting = {
    extends: cc.Component,
        
    //離開遊戲
    onExit : function() {

    },

    Init : function (root) {
        this.rootRect = root
        // 版號
        this.txtVersion = cc.find("TextVersion", root).getComponent(cc.Label)
		// 關閉按鈕
        this.btnClose = cc.find("ButtonClose", root).getComponent(cc.Button)
        this.btnClose.node.on('click', function () {
            GameG.PlayGameSound("se_click")
            UISetting.Hide()
        })

        //this.btnExit = cc.find("ButtonExit").getComponent(cc.Button)
        //this.btnExit.node.on('click', function () {
		    //GameG.PlayGameSound("se_click")
		    //UISetting.ClickExit()
	    //})

        this.imgMusic = cc.find("ButtonMusic/Image", root).getComponent(cc.Sprite)
		// 音樂按鈕
        this.btnMusic = cc.find("ButtonMusic", root).getComponent(cc.Button)
        this.btnMusic.node.on('click', function () {
            GameG.PlayGameSound("se_click")
            var state = GameG.GetMusicStatus()
            GameG.SetMusicStatus(state == false)
            UISetting.imgMusic.node.active = (GameG.GetMusicStatus() == false)
        })

        this.imgSound = cc.find("ButtonSound/Image", root).getComponent(cc.Sprite)
		// 音效按鈕
        this.btnSound = cc.find("ButtonSound", root).getComponent(cc.Button)
        this.btnSound.node.on('click', function () {
            GameG.PlayGameSound("se_click")
            var state = GameG.GetSoundStatus()
            GameG.SetSoundStatus(state == false)
            UISetting.imgSound.node.active = (GameG.GetSoundStatus() == false)
        })
    },

    Update : function () {
            
    },

    Show : function () {
        this.rootRect.active = true

        this.txtVersion.string = "V." + GameG.GetGameVersion()
	
        this.imgMusic.node.active = (GameG.GetMusicStatus() == false)
        this.imgSound.node.active = (GameG.GetSoundStatus() == false)        
    },

    Hide : function () {
        this.rootRect.active = false
    },

    ClickExit : function(){
        GameG.ExitGame();
    },
};

module.exports = UISetting;
