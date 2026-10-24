//region *.lua
//Date
//此文件由[BabeLua]插件自动生成
//endregion
var G = require("Global")
var UpBankRank = fmg.class("UpBankRank")

var UpBankRank = {
	extends: cc.Component,

//-
	UpBankRank:ctor(){
	    self:initUi()
	},

//-
	UpBankRank:onExit(){
	},

//-
	UpBankRank:initUi(){
	
    // 
	    let canvas = cc.find("Canvas")
	    let root =cc.find("UpBankRank", canvas)
	    self.uiRoot = []
	    self.uiRoot.root = root
	    let uiRoot = self.uiRoot
	    root.active =(false)
	
    //
	    self.uiRoot.bg =cc.find("_Shadow", root)
	    self.uiRoot.scroll =cc.find("_Shadow/_upScroll", root).getComponent(cc.ScrollView)
	    self.uiRoot.content =cc.find("_Shadow/_upScroll/Viewport/Content", root)
	
	    self.uiRoot.upBetReq =cc.find("_Shadow/_reqUp", root).getComponent(cc.Button)
	    self.uiRoot.upBetReq.node.on('click',(function(){
GameG.PlayGameSound("se_click")
	        lhd.gameAudio:btnClick()
	        lhd.msgBox:show("您是否申请上庄", function(){
	            lhd.upBankRank:show(false)
	            lhd.gameControl:LHDShangZhuangID(true)
	        })
//        fmg.msgBox("您是否申请上庄", nil, 2, {okCall=function()
//            lhd.upBankRank:show(false)
//            lhd.gameControl:LHDShangZhuangID(true)
//        end})
	    })
	cc.find("_Shadow/_close",    root).getComponent(cc.Button).node.on('click',(function(){
GameG.PlayGameSound("se_click")
	        lhd.gameAudio:btnClick()
	        lhd.upBankRank:show(false)
	    })
	
    //
	    self.uiRoot.root.active =(false)
	
	},

//- 更新界面
	UpBankRank:update(data){
	    fmg.removeChildren(self.uiRoot.content)
		let prf = CS.AssetBundleManager.Instance:LoadGameObject(G.GetGamePName(), "ubItem")
	    if(prf == null ){ return }
	
	    let have = false
	for(let _ in (data.UserInfo)){ 
	let v = data.UserInfo[_] 

		    let cls = cc.instantiate(prf)
	        if(cls == null ){ return }
	        cls.active =(true)
	        cls.parent =(lhd.upBankRank.uiRoot.content, false)
	cc.find("_head",        cls).getComponent(cc.Sprite):ResetSpriteByName(CS.AppDefine.HallNumber, tostring(v.FaceID))
	        cls:Find("_name").getComponent(cc.Label).text = "" +,        cls v.UserID
			if(lhd.ShowID == false ){
				cls:Find("_name").getComponent(cc.Label).text = "ID:,cls" + v.UserID
	} 
		else{
				cls:Find("_coin").getComponent(cc.Label).text = G.To,clsol.UserHelper.ToCash(v.Score)
			}
	        if(v.UserID == GameConfig.getUserID() ){ have = true }
	    }
	
	    self.uiRoot.upBetReq.interactable = ((not have) && (not lhd.bIBanker))
	},

//- 显示界面
	UpBankRank:show(bShow, call){
	    if(bShow ){ fmg.removeChildren(self.uiRoot.content) }
	    fmg.popAnim(bShow, self.uiRoot.root, self.uiRoot.bg, 0.3, call)
	},


};

module.exports = UpBankRank
