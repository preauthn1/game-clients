//region *.lua
//Date
//此文件由[BabeLua]插件自动生成
//endregion
var G = require("Global")
var PlayerList = fmg.class("PlayerList")

var PlayerList = {
	extends: cc.Component,

//-
	PlayerList:ctor(){
	    self:initData()
	    self:initUi()
	    self:initEvent();
	},

//-
	PlayerList:onExit(){
	},

//-
	PlayerList:initData(){
	
    // 一次刷新的长度
	    self.dtPageLen = 0
    // 列表是否需要重新渲染
	    self.dtDirty = false
    // 玩家人数
	    self.dtPlayerNum = 0
	
    // 桌子上玩家列表
	    self.dtTableUsers = []
    // 桌子上玩家item列表
	    self.uiPageList = []
    // scroll的size
	    self.dtScrollSize = fmg.v2(620, 385);
    // item的size
	    self.dtItemSize = fmg.v2(602, 113);
    // item的size
	    self.dtContentSize = fmg.v2(620, 0);
    // 弹出动画显示和消失位置
	    self.dtPopAnimPos = [fmg.v3(-524,-7,0), fmg.v3(-808,-7,0)]
	
	
    // 玩家列表item 缓存池
	    hhdz.poolUserItem = require("ObjectPool"):new([
	        num = 5, poolInit = function(pool){
	            let canvas = cc.find("Canvas")
	            pool.dtItem =cc.find("PlayerList/bg/item", canvas)
	            pool.dtPrtHide =cc.find("PlayerList/bg/title", canvas)
	            pool.dtPrtShow =cc.find("PlayerList/bg/_upScroll/Viewport/Content", canvas)
	            pool.dtItem.active =(false)
	        }, create = function(pool){
	            return cc.instantiate(pool.dtItem)
	        }, objInit = function(obj, pool, bShow, args){
	            obj.parent =(bShow && pool.dtPrtShow || pool.dtPrtHide, false)
	            obj.scale = fmg.v3(1, 1, 1)
	            if(args == null ){ return }
	            if(args.user != null ){
	                obj:Find("_coin").getComponent(cc.Label).text = G.To,                objol.UserHelper.ToCash(args.user.Score)
					if(hhdz.ShowID == false ){
						obj:Find("_name").getComponent(cc.Label).text = "" +,obj args.user.UserID
	} 
				else{
						obj:Find("_name").getComponent(cc.Label).text = "ID:,obj" + args.user.UserID
					}
                //obj:Find("_head"):GetComponent("Image"):ResetSpriteByName(CS.AppDefine.HallNumber, tostring(args.user.FaceID))
	            }
	        }, objInitArgs = [], objDel = function(pool, obj){
	            obj.parent =(pool.dtPrtHide, false)
	            obj.active =(false)
	    },])
	
	},

//-
	PlayerList:initUi(){
	
    // 
	    let canvas = cc.find("Canvas")
	    let root =cc.find("PlayerList", canvas)
	    self.uiRoot = []
	    self.uiRoot.root = root
	    let uiRoot = self.uiRoot
	    root.active =(false)
	    
    // 查找按钮
	    let  findBtn = function(name, func){
	        let btn =cc.find(name, root).getComponent(cc.Button)
	        btn.node.on('click',func)
	        return btn
	    }
	
    //////
	    uiRoot.bg =cc.find("bg", root).getComponent(cc.Sprite)
	    uiRoot.bg.position = self.dtPopAnimPos[2]
	    uiRoot.item =cc.find("bg/item", root)
	    uiRoot.scroll =cc.find("bg/_upScroll/Viewport/Content", root)
	cc.find("bg/_upScroll",    root).getComponent(cc.ScrollView).onValueChanged:AddListener(fmg.handler(self, self.ScrollChange))
	    root.getComponent(cc.Button).node.on('click',function(){
	        hhdz.gameAudio:btnClick()
	        hhdz.playerList:show(false)
	    })
	    uiRoot.close = findBtn("bg/_close", function(){
	        hhdz.gameAudio:btnClick()
	        hhdz.playerList:show(false)
	    })
	
	    self.uiRoot.item.active =(false)
	
    //
	
	},

//- 事件初始化
	PlayerList:initEvent(){
	    
    // 添加事件监听函数
	    let  event = function(evt){
	        G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game_LHD[evt], fmg.handler(self, self[evt]), hhdz.gameName)
	    }
	    
	    G.Service.Game.RegUserEnterMsg(fmg.handler(self, self["UserEnter"]))
	    G.Service.Game.RegUserStateChangeMsg(fmg.handler(self, self["UserStateChange"]))
	    G.Service.Game.RegUserLeaveMsg(fmg.handler(self, self["RegUserLeaveMsg"]))
	},

//- 显示界面
	PlayerList:show(bShow, call){
	    if(self.dtLayerShow == bShow ){ return }
	//----->需重新編譯程式碼    if(self.hPopAction ){ self.hPopAction:Kill() }
	    self.dtLayerShow = bShow
	    hhdz.gameLayer.uiRoot.betBtn.openPlayerList.active =(not bShow)
	    self.uiRoot.close.active =(bShow)
	    if(bShow ){ hhdz.playerList:clearPage() }
	    let over = bShow && self.dtPopAnimPos[1] || self.dtPopAnimPos[2]
	    let speed = bShow && CS.DG.Tweening.Ease.OutSine || CS.DG.Tweening.Ease.InSine
	    
	    self.uiRoot.root.active =(true)
	//----->需重新編譯程式碼    let sqs = CS.DG.Tweening.DOTween.Sequence()
	    self.hPopAction = sqs
	//----->需重新編譯程式碼    sqs:SetEase(speed)
	
	//----->需重新編譯程式碼    sqs:Append(self.uiRoot.bg:DOLocalMove(over, 0.5))
	    fmg.argFuncAnim(sqs, function(adt){
	        adt[1].active =(adt[2])
	        if(adt[3] ){ adt[3]() }
	    }, [self.uiRoot.root, bShow, call])
	},

//- 更新界面
	PlayerList:updateUser(bEnter, data){
	    let obj = self.dtTableUsers[data.UserID].item
	    if(obj == null ){ return }
	    if(bEnter ){
	        obj:Find("_coin").getComponent(cc.Label).text = G.To,        objol.UserHelper.ToCash(data.Score)
			if(hhdz.ShowID == false ){
				obj:Find("_name").getComponent(cc.Label).text = "" +,obj data.UserID
	} 
		else{
				obj:Find("_name").getComponent(cc.Label).text = "ID:,obj" + data.UserID
			}
        //obj:Find("_head"):GetComponent("Image"):ResetSpriteByName(CS.AppDefine.HallNumber, tostring(data.FaceID))
	} 
    else{
	        hhdz.poolUserItem:remove(obj)
	    }
	},

//- 清理page
	PlayerList:clearPage(){
	    hhdz.poolUserItem:hideShows()
	for(let      i = 1;      i <= self.uiPageList.length; ++     i){//    for i=1,self.uiPageList.length do
	        self.uiPageList[i].bShow = null
	        self.uiPageList[i].item = null
	    }
	
    // 加入自己
	    self.uiPageList = []
	    let data = self.dtTableUsers[GameConfig.getUserID()]
	    let item = hhdz.poolUserItem:get([user = data.user])
	    data.item = item
	    data.bShow = true
	    self.uiPageList[1] = data
	
    // 
	    self.dtDirty = true
	    self.dtPageLen = 1
	
	},

//- 增加page
	PlayerList:newPage(){
	    let num = 10
	    self.bNoMaxLen = false
	for(let k in (self.dtTableUsers)){ 
	let v = self.dtTableUsers[k] 

	        if(num <= 0 ){
	            self.bNoMaxLen = true
	            break
	        }
	
	        if(v.bShow != true ){
	            v.bShow = true
	            v.item = hhdz.poolUserItem:get([user = v.user])
	            self.uiPageList[self.uiPageList+1].length = v
	            self.dtPageLen = self.dtPageLen + 1
	            num = num -1
	        }
	    }
	
	    self.dtContentSize = fmg.v2(self.dtScrollSize.x, self.dtItemSize.y*(self.dtPageLen - num))
	    self.uiRoot.scroll.sizeDelta = self.dtContentSize
	},

//- page滑动事件回调
	PlayerList:ScrollChange(pos){
	    if(self.bNoMaxLen || self.dtDirty ){
	        self.dtDirty = false
	        self:newPage()
	    }
	},

//- 大厅消息
	PlayerList:UserEnter(data){
    //print("ftest event UserList UserEnter")
	    fmg.fpack(data)
	    self.dtDirty = true
	    if(self.dtTableUsers[data.User.UserID] == null ){ self.dtPlayerNum = self.dtPlayerNum + 1 }
	    hhdz.gameLayer.uiRoot.playerNum.text = tostring(self.dtPlayerNum)
	    self.dtTableUsers[data.User.UserID] = self.dtTableUsers[data.User.UserID] || []
	    self.dtTableUsers[data.User.UserID].user = data.User
	
	    self:updateUser(true, data.User)
	    self.bNoMaxLen = true
	},

	PlayerList:UserStateChange(data){
    //print("ftest event UserList UserStateChange")
	    fmg.fpack(data)
	    self.dtDirty = true
	    if(self.dtTableUsers[data.User.UserID] == null ){ self.dtPlayerNum = self.dtPlayerNum + 1 }
	    hhdz.gameLayer.uiRoot.playerNum.text = tostring(self.dtPlayerNum)
	    self.dtTableUsers[data.User.UserID] = self.dtTableUsers[data.User.UserID] || []
	    self.dtTableUsers[data.User.UserID].user = data.User
	    self:updateUser(true, data.User)
	},

	PlayerList:RegUserLeaveMsg(data){
    //print("ftest event UserList RegUserLeaveMsg")
	    fmg.fpack(data)
	    self.dtDirty = true
	    if(self.dtTableUsers[data.User.UserID] != null ){ self.dtPlayerNum = math.max(self.dtPlayerNum - 1, 0) }
	    hhdz.gameLayer.uiRoot.playerNum.text = tostring(self.dtPlayerNum)
	    self:updateUser(false, data.User)
	    self.dtTableUsers[data.User.UserID] = null
	},


};

module.exports = PlayerList
