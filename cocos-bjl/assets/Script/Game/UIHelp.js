// 规则界面
// Date: 2017-09-25 17:53:19
//
var G = require("Global")
var _tbREGCB = [] //按键消息
var onClickClose
var OpenAction
var CloseAction

var UIHelp = {
	extends: cc.Component,

////////////////////////////////////////////////////////////-
	Init(root){
		this.rootRect = root
        this.btnClose = cc.find("", root).getComponent(cc.Button)
	    this.btnClose.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			Hide()
		})
	},

	Show(){
		this.rootRect.scale = 0.5
		//----->需重新編譯程式碼	let sequence = CS.DG.Tweening.DOTween.Sequence()
		//----->需重新編譯程式碼	sequence:Append(pSender:DOScale(cc.v3(1.1, 1.1, 1.0), 0.25))
		//----->需重新編譯程式碼	sequence:Append(pSender:DOScale(cc.v3(1.0, 1.0, 1.0), 0.1))
	},

	Hide (){
	    
	    let node = cc.find("Image",this.rootRect)
		//----->需重新編譯程式碼	let tweener = node:DOScale(cc.v3(0.8, 0.8, 1), 0.1)
		//----->需重新編譯程式碼	tweener:OnComplete(function(...){
		//----->需重新編譯程式碼		CS.WindowManager.Instance:CloseWindow("UIHelp", false)
		//----->需重新編譯程式碼	})
	},
};

module.exports = UIHelp
