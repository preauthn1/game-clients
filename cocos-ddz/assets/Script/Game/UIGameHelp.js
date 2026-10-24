
var	GameInfo = require("GameInfo")
var GameManager = require("GameManager")
var FileManager = require("FileManager")

var UIGameHelp = {

	Init(root){
		this.root = root

		this.txt_Text = cc.find("mask/Panel/Text", this.root).getComponent(cc.RichText)
		this.txt_LoadingText = cc.find("mask/LoadingText", this.root).getComponent(cc.Label)
		this.btn_CloseButton = cc.find("mask/CloseButton", this.root).getComponent(cc.Button)

		this.btn_CloseButton.node.on('click', function(){
			UIGameHelp.root.active = false
		}, this)
		
		this.txt_Text.string = ""
		this.txt_LoadingText.node.active = true

		this.root.active = false

		UIGameHelp.BeginDownload()
	},

	Show(){
		this.root.active = true
	},

	BeginDownload(){
		let self = this

		let fileName = GameInfo.GetGamePName(GameManager.getGameId())
        FileManager.LoadFile(true, "Txt", fileName, cc.TextAsset, (err, file)=> {
            if (err) {
                return
			}
			
			self.txt_Text.string = file.text
			self.txt_LoadingText.node.active = false
		})
	},
};

module.exports = UIGameHelp;