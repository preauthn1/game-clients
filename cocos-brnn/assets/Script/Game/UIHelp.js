var UIHelp = {
	extends: cc.Component,

// 初始化函数，实例化之后调用一次
	Start(){
		var Btn_exit = cc.find("_exit",this).getComponent(cc.Button)
		var Btn_close = cc.find("_close",this).getComponent(cc.Button)

	    Btn_exit.node.on('click', function(){
			GameG.PlayGameSound("se_click")
	        CS.WindowManager.Instance.CloseWindow("UIHelp", false)
	    } )
		
	    Btn_close.node.on('click', function(){
			GameG.PlayGameSound("se_click")
	        CS.WindowManager.Instance.CloseWindow("UIHelp", false)
	    } )	
	},


};

module.exports = UIHelp
