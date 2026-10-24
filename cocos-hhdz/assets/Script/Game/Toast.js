//region *.lua
//Date
//此文件由[BabeLua]插件自动生成
//endregion
var G = require("Global")
var Toast = fmg.class("Toast")

var Toast = {
	extends: cc.Component,

//- 构造
	Toast:ctor(){
	    self.hideTime = 1.5                         // 隐藏时间
	    self.dtBgContent = [x=443, y=62]            // 背景content
	    
    // 移动动画位置
	    self.dtMovePos = [fmg.v3(0,0,0), fmg.v3(0,100,0)]
	
	    self:initUi()
	},

//- ui初始化
	Toast:initUi(){
	    
    // 创建toast
	    let canvas = cc.find("Canvas")
		let prf = CS.AssetBundleManager.Instance:LoadGameObject(G.GetGamePName(), "Toast")
		let cls = cc.instantiate(prf)
		if(cls ==null){ return }
		cls.parent =(canvas, false)
	    cls.active =(true)
	
    // ui初始化
	    self.uiRoot = []
	    self.uiRoot.root = cls
	
	    self.uiRoot.bg =cc.find("bg", cls).getComponent(cc.Sprite)
	    self.uiRoot.bgLeft =cc.find("bg/leftbg", cls).getComponent(cc.Sprite)
	    self.uiRoot.bgRight =cc.find("bg/rightbg", cls).getComponent(cc.Sprite)
	
	    self.uiRoot.text =cc.find("text", cls).getComponent(cc.Label)
	
	},

//- 退出
	Toast:onExit(){
	    self = null
	},

//- 显示结算界面
	Toast:show(text, tm){
	
    // 创建tm时间变化到a的obj动画
	    let  animAlpha = function(obj, ba, ea, tm){
	        let clr = obj.color
	        if(ba ){ obj.color = fmg.c4(clr.r, clr.g, clr.b, ba) }
	//----->需重新編譯程式碼        return obj:DOColor(fmg.c4(clr.r, clr.g, clr.b, ea), tm)
	    }
	
	    let inst = self:new()
	    tm = tm || inst.hideTime
	    inst.uiRoot.text.text = ""+text
	    inst.uiRoot.bg.scale = fmg.v3(inst.uiRoot.text.preferredWidth/inst.dtBgContent.x, 1, 1)
	
    // alpha anim
	//----->需重新編譯程式碼    let sqs2 = CS.DG.Tweening.DOTween.Sequence()
	//----->需重新編譯程式碼    sqs2:Append(animAlpha(inst.uiRoot.bgLeft, 0, 1, tm/3))
	//----->需重新編譯程式碼    sqs2:Join(animAlpha(inst.uiRoot.bgRight, 0, 1, tm/3))
	//----->需重新編譯程式碼    sqs2:Join(animAlpha(inst.uiRoot.text, 0, 1, tm/3))
	//----->需重新編譯程式碼    sqs2:AppendInterval(tm/3)
	//----->需重新編譯程式碼    sqs2:Append(animAlpha(inst.uiRoot.bgLeft, null, 0, tm/3))
	//----->需重新編譯程式碼    sqs2:Join(animAlpha(inst.uiRoot.bgRight, null, 0, tm/3))
	//----->需重新編譯程式碼    sqs2:Join(animAlpha(inst.uiRoot.text, null, 0, tm/3))
	
    // move anim
	//----->需重新編譯程式碼    let sqs = CS.DG.Tweening.DOTween.Sequence()
	//----->需重新編譯程式碼    sqs:Append(inst.uiRoot.root:DOMove(inst.dtMovePos[2], tm))
	//----->需重新編譯程式碼    sqs:AppendInterval(tm)
	    fmg.argFuncAnim(sqs, function(adt){
	        adt[1]:onExit()
	        fmg.Destroy(adt[2])
//----->需重新編譯程式碼        //if adt[3] then adt[3]:Kill() end
	    },[inst, inst.uiRoot.root, sqs2])
	
	},


};

module.exports = Toast
