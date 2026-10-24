var G = require("Global")
var ResultLayer = fmg.class("ResultLayer")

var ResultLayer = {
	extends: cc.Component,

//-
	ResultLayer:ctor(){
	    self.tmCloseHander = "thRstClose"
	
	    self:initUi()
	},

//-
	ResultLayer:onExit(){
	},

//-
	ResultLayer:initUi(){
	
    // 
	    let canvas = cc.find("Canvas")
	    let root =cc.find("ResultLayer", canvas)
	    self.uiRoot = []
	    self.uiRoot.root = root
	    let uiRoot = self.uiRoot
	
    //
	    root.active =(false)
	    uiRoot.bg =cc.find("bg", root).getComponent(cc.Sprite)
	
    //
	    uiRoot.rank = []
	for(let      i = 1;      i <= 3; ++     i){//    for i=1,3 do
	        uiRoot.rank[i] = []
	        uiRoot.rank[i].root =cc.find("bg/rank/user"+i, root).getComponent(cc.Sprite)
	        uiRoot.rank[i].name =cc.find("bg/rank/user"+i+"/name", root).getComponent(cc.Label)
	        uiRoot.rank[i].coin =cc.find("bg/rank/user"+i+"/coin", root).getComponent(cc.Label)
	
	        uiRoot.rank[i].root.active =(false)
	    }
	    
    //
	    uiRoot.banker = []
	    uiRoot.banker.root =cc.find("bg/wininfo/banker", root)
	    uiRoot.banker.name =cc.find("bg/wininfo/banker/name", root).getComponent(cc.Label)
	    uiRoot.banker.coin =cc.find("bg/wininfo/banker/coin", root).getComponent(cc.Label)
	    uiRoot.banker.win =cc.find("bg/wininfo/banker/win", root).getComponent(cc.Sprite)
	    uiRoot.banker.root.active =(false)
	    
    //
	    uiRoot.user = []
	    uiRoot.user.root =cc.find("bg/wininfo/user", root)
	    uiRoot.user.name =cc.find("bg/wininfo/user/name", root).getComponent(cc.Label)
	    uiRoot.user.coin =cc.find("bg/wininfo/user/coin", root).getComponent(cc.Label)
	    uiRoot.user.win =cc.find("bg/wininfo/user/win", root).getComponent(cc.Sprite)
	
    //
	    uiRoot.effect = []
	    uiRoot.effect.titleWin =cc.find("bg/efWin", root)
	    uiRoot.effect.titleLose =cc.find("bg/efLose", root)
	    uiRoot.effect.titleWin.active =(false)
	    uiRoot.effect.titleLose.active =(false)
	
    // 
	    uiRoot.timer =cc.find("bg/ok/timer", root).getComponent(cc.Label)
	cc.find("bg/ok",    root).getComponent(cc.Button).node.on('click',function(){
	        hhdz.gameAudio:btnClick()
	        hhdz.resultLayer:show(false)
	        hhdz.resultLayer:stopTimer()
	    })
	    uiRoot.timer.text = ""
	
    // 
	    uiRoot.win = []
    //uiRoot.win.anim = root.transform:Find("bg/jiesuan_shengli"):GetComponent("RectTransform")
    //uiRoot.win.ps = root.transform:Find("bg/jiesuan_shengli/ALL"):GetComponent("ParticleSystem")
    //uiRoot.win.static = root.transform:Find("bg/efWin"):GetComponent("RectTransform")
	    
	    uiRoot.lose = []
    //uiRoot.lose.anim = root.transform:Find("bg/jiesuan_shibai"):GetComponent("RectTransform")
    //uiRoot.lose.ps = root.transform:Find("bg/jiesuan_shibai/ALL"):GetComponent("ParticleSystem")
    //uiRoot.lose.static = root.transform:Find("bg/efLose"):GetComponent("RectTransform")
	
	    uiRoot.rst = []
	    uiRoot.rst[1] =cc.find("bg/rst/win1", root).getComponent(cc.Sprite)
	    uiRoot.rst[2] =cc.find("bg/rst/win2", root).getComponent(cc.Sprite)
	    uiRoot.rst[3] =cc.find("bg/rst/win3", root).getComponent(cc.Sprite)
	    self:setWinRst(0)
	
	},

//- ��ʾ�������
	ResultLayer:show(bShow, call){
	    if(bShow ){
	    
	        self.uiRoot.banker.root.active =(self.bBankerHave)
	        
	        self:startTimer(3)
	        
      //  self:updateBanker(hhdz.svrData.LHDZhuangInfoID, true)
	        
	        fmg.popAnim(bShow, self.uiRoot.root, self.uiRoot.bg, 0.1, function(){
	            if(call ){ call() }
	        })
	        
	} 
    else{
	        self.uiRoot.root.active =(false)
	        self:stopTimer()
	        if(self.hideCall ){ self.hideCall() }
	        if(call ){ call() }
	    }
	},

//- ���½������
	ResultLayer:update(data){
	    self.uiRoot.user.coin.text = G.Tool.UserHelper.ToCashDetail(data.SelfWin)
	    self.uiRoot.user.win.active =(data.SelfWin > 0)
	    self.uiRoot.banker.coin.text = G.Tool.UserHelper.ToCashDetail(data.ZhuangWin)
	    self.uiRoot.banker.win.active =(data.ZhuangWin > 0)
	    self.uiRoot.banker.root.active =(hhdz.svrData.LHDZhuangInfoID && hhdz.svrData.LHDZhuangInfoID.UserID != 0)
	    
	for(let      i = 1;      i <= 3; ++     i){//    for i=1,3 do
	        self.uiRoot.rank[i].root.active =(data.WinUserInfo[i] != null)
	        if(data.WinUserInfo[i] ){
	            self.uiRoot.rank[i].name.text = data.WinUserInfo[i].UserName
	            self.uiRoot.rank[i].coin.text = G.Tool.UserHelper.ToCashDetail(data.WinUserInfo[i].Win)
	        }
	    }
	
	    let tmp = ["win", "lose"]
	    let key = data.SelfWin > 0 && tmp[1] || tmp[2]
    /*self.uiRoot[key].ps:Play()
    for _,v in pairs(tmp) do
        self.uiRoot[v].anim.gameObject:SetActive(key == v)
        self.uiRoot[v].static.gameObject:SetActive(key == v)
    end*/
	
	},

//- ���½������
	ResultLayer:updateUser(data){
		if(hhdz.ShowID == false ){
			self.uiRoot.user.name.text = "" + data.UserID
	} 
	else{
			self.uiRoot.user.name.text = "ID:" + data.UserID
		}
    //self.uiRoot.user.coin.text = G.Tool.UserHelper.ToCash(data.Score)
	},

//- ���½������
	ResultLayer:updateBanker(data, mast){
	    self.bBankerHave = (data.UserID != 0)
    //self.uiRoot.banker.root.gameObject:SetActive(data.UserID ~= 0)
	    if(data.UserID!=0 && (mast!=null || self.bShow==false) ){
			if(hhdz.ShowID == false ){
				self.uiRoot.banker.name.text = "" + data.UserInfo[1].UserID
	} 
		else{
				self.uiRoot.banker.name.text = "ID:" + data.UserInfo[1].UserID
			}
	    }
	},

//- �����ر�ҳ�浹��ʱ
	ResultLayer:startTimer(tm){
	    tm = tm || 10
	    self:stopTimer()
	    self.uiRoot.timer.text = ""+tm+"s"
	    fmg.hLuaGame:StartCountDown(tm, self.tmCloseHander, function(dt){
			hhdz.resultLayer.uiRoot.timer.text = string.format("%ds",dt)
	        if(dt <= 0 ){
	            hhdz.resultLayer:stopTimer()
	            hhdz.resultLayer:show(false)
	        }
		}, 1.0)
	},

//- �رչر�ҳ�浹��ʱ
	ResultLayer:stopTimer(){
	    if(self.tmCloseHander ){
	        fmg.hLuaGame:RemoveCountDown(self.tmCloseHander)
	        self.tmCloseHander = null
	    }
	},

//- ������Ӯ״̬��0:�ޣ�1:����2:����3:�ͣ�
	ResultLayer:setWinRst(win){
	for(let      i = 1;      i <= 3; ++     i){//    for i=1,3 do
	        self.uiRoot.rst[i].active =(i == win)
	    }
	},


};

module.exports = ResultLayer
