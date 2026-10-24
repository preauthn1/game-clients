var GameG = require("GameGlobal")

/** 用途: 設定介面 */
var UISetting = {
	extends: cc.Component,

//離開遊戲
	onExit(){
	
	},

	Init(root){
		let self = this
		this.rootRect = root
		
		this.txtVersion = cc.find("TextVersion",root).getComponent(cc.Label)
		
		this.btnClose = cc.find("ButtonClose",root).getComponent(cc.Button)
	    this.btnClose.node.on('click',function(){		
			GameG.PlayGameSound("se_click")
			self.Hide()
		})
		
	// btnExit = root.transform:Find("ButtonExit"):GetComponent("Button")
    // btnExit.onClick:AddListener(function()
		// GameG.PlayGameSound("se_click")
		// ClickExit()
	// end)
		
		this.imgMusic = cc.find("ButtonMusic/Image",root).getComponent(cc.Sprite)
		this.btnMusic = cc.find("ButtonMusic",root).getComponent(cc.Button)
	    this.btnMusic.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			let state = GameG.GetMusicStatus()
			GameG.SetMusicStatus(state == false)
			self.imgMusic.node.active =(GameG.GetMusicStatus() == false)
		})
	
		this.imgSound = cc.find("ButtonSound/Image",root).getComponent(cc.Sprite)
		this.btnSound = cc.find("ButtonSound",root).getComponent(cc.Button)
	    this.btnSound.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			let state = GameG.GetSoundStatus()
	        GameG.SetSoundStatus(state == false)
			self.imgSound.node.active =(GameG.GetSoundStatus() == false)
		})
	
	},

	Update(){
		
	},

	Show(){
		this.rootRect.active =(true)
		
		this.txtVersion.string = "V." + GameG.GetGameVersion()
		
		this.imgMusic.node.active =(GameG.GetMusicStatus() == false)
		this.imgSound.node.active =(GameG.GetSoundStatus() == false)
	},

	Hide(){
		this.rootRect.active =(false)
	},

	ClickExit(){
		GameG.ExitGame()
	},


};

module.exports = UISetting
