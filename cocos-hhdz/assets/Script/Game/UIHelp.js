//
// 规则界面
// Date: 2017-09-25 17:53:19
//
var G = require("Global")
var _tbREGCB = [] //按键消息
var onClickClose
var OpenAction
var CloseAction
////////////////////////////////////////////////////////////-

var UIHelp = {
	extends: cc.Component,

	Start(){
	    this:GetComponent(typeof(CS.UnityEngine.UI.Button)).node.on('click',(onClickClose)
GameG.PlayGameSound("se_click")
	},

	Awake(){
		OpenAction( this)
	},

	OpenAction(pSender){
	
	    pSender =cc.find("Image", pSender)
		pSender.scale = cc.v3(0.5,0.5,0)
	
	//----->需重新編譯程式碼	let sequence = CS.DG.Tweening.DOTween.Sequence()
	//----->需重新編譯程式碼	sequence:Append(pSender:DOScale(cc.v3(1.1, 1.1, 1.0), 0.25))
	//----->需重新編譯程式碼	sequence:Append(pSender:DOScale(cc.v3(1.0, 1.0, 1.0), 0.1))
	
	},

	CloseAction(pSender){
	    
	    let node =cc.find("Image", pSender)
	//----->需重新編譯程式碼	let tweener = node:DOScale(cc.v3(0.8, 0.8, 1), 0.1)
	//----->需重新編譯程式碼	tweener.call(function(...){
	//----->需重新編譯程式碼		CS.WindowManager.Instance:CloseWindow("UIHelp", false)
	//----->需重新編譯程式碼	})
	},

	onClickClose(pSender){
		CloseAction(this)
	},


};

module.exports = UIHelp
