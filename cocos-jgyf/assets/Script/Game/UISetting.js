let GameG = require("GameGlobal")

let rootRect = null

/** 用途: 設定介面 */
var UISetting = {

    Init(root){        
        rootRect = root
        rootRect.active = false

        let self = this
        this.btnHide = cc.find("ButtonHide",root).getComponent(cc.Button)
	    this.btnHide.node.on('click',function(){		
			GameG.PlayGameSound("se_click")
			self.Hide()
		})
		//歷史訊息按鈕
        this.btnHistory = cc.find("ButtonHistory",root).getComponent(cc.Button)
        // 版號
        this.txtVersion = cc.find("TextVersion",root).getComponent(cc.Label)
		// 開啟音樂按鈕
		this.btnMusicOpen = cc.find("ButtonMusic/Open",root).getComponent(cc.Button)
	    this.btnMusicOpen.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			GameG.SetMusicStatus(true)
			self.SetButtonEnable()
		})
		// 關閉音樂按鈕
		this.btnMusicClose = cc.find("ButtonMusic/Close",root).getComponent(cc.Button)
	    this.btnMusicClose.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			GameG.SetMusicStatus(false)
			self.SetButtonEnable()
		})
		// 開啟音效按鈕
		this.btnSoundOpen = cc.find("ButtonSound/Open",root).getComponent(cc.Button)
	    this.btnSoundOpen.node.on('click',function(){
			GameG.PlayGameSound("se_click")
	        GameG.SetSoundStatus(true)
			self.SetButtonEnable()
		})
		// 關閉音效按鈕
		this.btnSoundClose = cc.find("ButtonSound/Close",root).getComponent(cc.Button)
	    this.btnSoundClose.node.on('click',function(){
			GameG.PlayGameSound("se_click")
	        GameG.SetSoundStatus(false)
			self.SetButtonEnable()
		})
    },
    /** 顯示介面 */
    Show(){
        rootRect.active = true
		// 設置按鈕開關
		this.SetButtonEnable()
		// 指定版號
		this.txtVersion.string = "V." + GameG.GetGameVersion()		
    },
    /** 關閉介面 */
    Hide(){
        rootRect.active = false
	},
	
    /** 歷史訊息按鈕回調 */
    SetBtnHistoryCallback(callback){
        let self = this
		this.btnHistory.node.on('click',function(){ 
            GameG.PlayGameSound("se_click")
			self.Hide()
            if(callback != null){
                callback()
            }
		})
	},
	/** 設置按鈕開關 */
	SetButtonEnable(){
		this.btnMusicOpen.node.active = (GameG.GetMusicStatus() == false)
		this.btnMusicClose.node.active = (GameG.GetMusicStatus() == true)
		this.btnSoundOpen.node.active = (GameG.GetSoundStatus() == false)
		this.btnSoundClose.node.active = (GameG.GetSoundStatus() == true)
	},

	/** 設定按鈕狀態 */
	SetInteractable(enabled){
		this.btnHistory.interactable = enabled
		this.btnMusicOpen.interactable = enabled
		this.btnMusicClose.interactable = enabled
		this.btnSoundOpen.interactable = enabled
		this.btnSoundClose.interactable = enabled
	},
};

module.exports = UISetting