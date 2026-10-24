
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
		
		this.txt_Text.text = ""
		this.txt_LoadingText.active = true

		this.root.active = false

		UIGameHelp.BeginDownload()
	},

	Show(){
		this.root.active = true
	},

	BeginDownload(){
		let self = this

		let fileName = GameInfo.GetGamePName(GameManager.getGameId())
		let urlData = window.location.search.substring(1);
		if (urlData == null || urlData == ""){
			FileManager.LoadFile(true, "Txt", fileName, cc.TextAsset, (err, data)=> {
				if (err) {
					return
				}
				
				let descriptionText = self.uiRoot.description.text
				descriptionText.string = data.text
			})
		}
		else{
			cc.loader.load({url: fileName + ".txt?=" + Math.random().toString(), type: cc.TextAsset}, function(err, ret) {
				if(err) {
					console.error(err);
					return;
				}

				let descriptionText = self.uiRoot.description.text
				descriptionText.string = ret			
			})
		}	
	},
};

module.exports = UIGameHelp;