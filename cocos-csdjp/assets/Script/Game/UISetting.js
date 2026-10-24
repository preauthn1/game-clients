let GameG = require("GameGlobal")

let rootRect = null

/** 用途: 設定介面 */
var UISetting = {
    /** 初始化 */
    Init(root){        
        rootRect = root
        rootRect.active = false

        let self = this
		// 關閉按鈕
        this.btnHide = cc.find("ButtonHide",root).getComponent(cc.Button)
	    this.btnHide.node.on('click',function(){		
			GameG.PlayGameSound("se_click")
			self.Hide()
		})
		// 歷史訊息按鈕
        this.btnHistory = cc.find("ButtonHistory",root).getComponent(cc.Button)
        // 版號
        this.txtVersion = cc.find("TextVersion",root).getComponent(cc.Label)

		this.rootMusic = cc.find("ButtonMusic",root)
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
	
		this.rootSound = cc.find("ButtonSound",root)
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

		this.barRope = cc.find("ImageRope", root).getComponent(cc.ProgressBar)
    },
    /** 顯示介面 */
    Show(){
        rootRect.active = true
		
		let timerScale = 0.3
		let timer = 1 * timerScale
		this.SetButtonEnable()
		this.txtVersion.string = "V." + GameG.GetGameVersion()
		
		GameG.DoOpacity(this.btnHide.node, 0, 150, timer)
		
		GameG.DoOpacity(this.btnHistory.node, 0, 255, 0.01, null, 0.25 * timerScale)
		GameG.DoScaleY(this.btnHistory.node, 0.1, 1, 0.1, null, 0.25 * timerScale)
		
		GameG.DoOpacity(this.rootSound, 0, 255, 0.01, null, 0.6 * timerScale)
		GameG.DoScaleY(this.rootSound, 0.1, 1, 0.1, null, 0.6 * timerScale)

		GameG.DoOpacity(this.rootMusic, 0, 255, 0.01, null, 0.95 * timerScale)
		GameG.DoScaleY(this.rootMusic, 0.1, 1, 0.1, null, 0.95 * timerScale)

		GameG.NewTween(this.barRope)
			.to(timer, {progress: 1})
			.start()
    },
    /** 關閉介面 */
    Hide(){
		let self = this
		
		let timerScale = 0.1
		let timer = 1 * timerScale
		GameG.DoOpacity(this.btnHide.node, 150, 0, timer)

		GameG.DoOpacity(this.btnHistory.node, 255, 0, 0.01, null, 0.65 * timerScale)
		GameG.DoScaleY(this.btnHistory.node, 1, 0, 0.1, null, 0.65 * timerScale)

		GameG.DoOpacity(this.rootSound, 255, 0, 0.01, null, 0.35 * timerScale)
		GameG.DoScaleY(this.rootSound, 1, 0, 0.1, null, 0.35 * timerScale)

		GameG.DoOpacity(this.rootMusic, 255, 0, 0.01, null, 0.05 * timerScale)
		GameG.DoScaleY(this.rootMusic, 1, 0, 0.1, null, 0.05 * timerScale)

		GameG.NewTween(this.barRope)
			.to(timer, {progress: 0.2})
			.call(function(){
				rootRect.active = false

				if(self.HideCallback != null){
					self.HideCallback()
				}
			})
			.start()
	},
	
    /** 歷史訊息按鈕回調 */
	SetHideCallback(callback){
		this.HideCallback = callback
	},

    //歷史訊息按鈕
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