//region *.lua
//Date
//此文件由[BabeLua]插件自动生成
//endregion
var G = require("Global")
var MsgBox = fmg.class("MsgBox")

var MsgBox = {
	extends: cc.Component,

//- 构造
	MsgBox:ctor(){
	    self:initUi()
	},

//- ui初始化
	MsgBox:initUi(){
	    
	    self.uiRoot = []
	
//    // 预设创建
//    local canvas = CS.UnityEngine.GameObject.Find("Canvas").transform
//    local prf = CS.AssetBundleManager.Instance:LoadGameObject(G.GetGamePName(), "MsgBox")
//    local cls = CS.UnityEngine.GameObject.Instantiate(prf).transform
//    if(cls ==nil)then return end
//    cls:SetParent(canvas, false)
//    cls.gameObject:SetActive(true)
//    self.uiRoot.root = cls
	    
    // 画布查找
	    let canvas = cc.find("Canvas")
	    let root =cc.find("MsgBox", canvas)
	    root.active =(false)
	
    // ui初始化
	    let uiRoot = self.uiRoot
	    uiRoot.root = root
	
	    uiRoot.bg =cc.find("bg", root).getComponent(cc.Sprite)
	    uiRoot.text =cc.find("bg/text", root).getComponent(cc.Label)
	    uiRoot.upLimit =cc.find("bg/text/Text", root).getComponent(cc.Label)
	cc.find("bg/Close_56",    root).getComponent(cc.Button).node.on('click',function(){
		    hhdz.gameAudio:btnClick()
	        hhdz.msgBox:hide()
	    })
	cc.find("bg/ok",    root).getComponent(cc.Button).node.on('click',function(){
		    hhdz.gameAudio:btnClick()
	        hhdz.msgBox:hide()
	        if(self.okCall ){
	            self.okCall()
	            self.okCall = null
	        }
	    })
	cc.find("bg/no",    root).getComponent(cc.Button).node.on('click',function(){
		    hhdz.gameAudio:btnClick()
	        hhdz.msgBox:hide()
	    })
	
	},

//- 退出
	MsgBox:onExit(){
	},

//- 显示结算界面
	MsgBox:show(text,upLimit, okCall){
	    self.okCall = okCall
	    self.uiRoot.text.text = text
		self.uiRoot.upLimit.active =(upLimit)
	    fmg.popAnim(true, self.uiRoot.root, self.uiRoot.bg)
	},

//- 隐藏结算界面
	MsgBox:hide(){
	    fmg.popAnim(false, self.uiRoot.root, self.uiRoot.bg)
	},


};

module.exports = MsgBox
