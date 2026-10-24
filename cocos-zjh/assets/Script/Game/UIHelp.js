var G = require( "Global")
var goldFlowerModel = require("GoldFlowerModel")
//- 以上内容为工具脚本自动生成，请不要在这之上做任何修改//-
// region 私有方法
var OnBackButton
// endregion
// region UI
var BackButton    // 返回
var HelpDesc      // 说明
// endregion
// region 数据
// endregion

var UIHelp = {
	extends: cc.Component,

	OnDestroy(){
	},

	Start(){
	    BackButton = cc.find("HelpBG/BackButton",this).getComponent(cc.Button)
	    BackButton.node.on('click', function(){
			GameG.PlayGameSound("se_click")
			OnBackButton()
		})
	    cc.find("TouchButton",this).getComponent(cc.Button).node.on('click', function(){
			GameG.PlayGameSound("se_click")
			OnBackButton()
		})
    //HelpDesc = this.transform:Find("HelpBG/ScrollView/Viewport/Content/HelpDesc"):GetComponent("Text")
	    OpenUI()
	},

	OpenUI(){
	    this.active =(true)
	},

// region But
	OnBackButton(){
	    CS.WindowManager.Instance.CloseWindow("UIHelp", false)
	},


};

module.exports = UIHelp
