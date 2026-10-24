var GameManager = require("GameManager")
var gameConfig = require("GameConfig")

var UIGameTopMenu = {

	Init(root, help_callback = null, set_callback = null, exit_callback = null){

		this.root = root

		this.Btn_exit = cc.find("menu/_menuGroup/_exit", this.root).getComponent(cc.Button)
		this.Btn_exit.node.on('click', UIGameTopMenu.event_exit, this)

		this.Btn_help = cc.find("menu/_menuGroup/_help", this.root).getComponent(cc.Button)
		this.Btn_help.node.on('click', UIGameTopMenu.event_help, this)

		this.Btn_set = cc.find("menu/_menuGroup/_set", this.root).getComponent(cc.Button)
		this.Btn_set.node.on('click', UIGameTopMenu.event_set, this)

		this.Btn_menuShow = cc.find("menu/_show", this.root).getComponent(cc.Button)
		this.Btn_menuShow.node.on('click', UIGameTopMenu.event_showMenu, this)

		this.Btn_menuHide = cc.find("menu/_menuGroup/_hide", this.root).getComponent(cc.Button)
		this.Btn_menuHide.node.on('click', UIGameTopMenu.event_hideMenu, this)

		this.RecTran_menuGroup = cc.find("menu/_menuGroup", this.root)
		this.Btn__menuGroupBG = cc.find("menu/_menuGroup/_menuGroupBG", this.root).getComponent(cc.Button)
		this.Btn__menuGroupBG.node.on('click', UIGameTopMenu.event_hideMenu, this)
		this.Btn__menuGroupBG_Big = cc.find("menu/_menuGroup/_menuGroupBG_big", this.root).getComponent(cc.Button)
		this.Btn__menuGroupBG_Big.node.on('click', UIGameTopMenu.event_hideMenu, this)
		
		this.help_callback = help_callback
		this.set_callback = set_callback
		this.exit_callback = exit_callback

        let Referrer = gameConfig.getReferrer()
        if (Referrer == "0")
		{
			this.Btn_exit.node.active = false
			this.Btn__menuGroupBG_Big.node.active = false
		}        

		UIGameTopMenu.event_hideMenu()
	},

	event_exit(){
		if (this.exit_callback != null) {
			let Referrer = gameConfig.getReferrer()
			window.location.href = Referrer;

			this.exit_callback()
		}
		else {
			GameManager.leaveGame();
		}
	},

	event_help(){
		if (this.help_callback != null) {
			this.help_callback()
		}		
	},
	
	event_set(){
		if (this.set_callback != null){
			this.set_callback()
		}
	},
	
	event_showMenu(){
		this.RecTran_menuGroup.active = true
	},

	event_hideMenu(){
		this.RecTran_menuGroup.active = false
	},	
};

module.exports = UIGameTopMenu;