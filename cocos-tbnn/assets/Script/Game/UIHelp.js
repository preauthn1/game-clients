
//- 以上内容为工具脚本自动生成，请不要在这之上做任何修改//-

var UIHelp = {
	extends: cc.Component,

// 初始化函数，实例化之后调用一次
	Init(root){
		let Btn_exit = cc.find("_exit",this).getComponent(cc.Button)
	    Btn_exit.node.on('click',( function(){
			GameG.PlayGameSound("se_click")
	//----->需重新編譯程式碼        CS.WindowManager.Instance:CloseWindow("UIHelp", false)
	    }))
	},


};

module.exports = UIHelp
