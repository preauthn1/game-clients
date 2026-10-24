//require("Module")
//mmodule(...)
var G = require("Global")
var GameScene = fmg.class("GameScene")

var GameScene = {
	extends: cc.Component,

//- 构造函数
	GameScene:ctor(){
	
	    hhdz = hhdz || []
	    hhdz.gameScene = self
	
	    hhdz.gameProto = require("Game_HHDZ")
	    hhdz.toast = require("Toast")
	    hhdz.gameData = require("GameData")
	    hhdz.gameAudio = require("GameAudio"):new()
	    hhdz.compare = require("Compare"):new()
	    hhdz.gameLayer = require("GameLayer"):new()
	    hhdz.playerList = require("PlayerList"):new()
	    hhdz.upBankRank = require("UpBankRank"):new()
	    hhdz.chartLayer = require("ChartLayer"):new()
	    hhdz.resultLayer = require("ResultLayer"):new()
	    hhdz.gameControl = require("GameControl"):new()
	    hhdz.msgBox = require("MsgBox"):new()
	
	    self:initData()
	    self:initUi()
	    self:initEvent()
	
	    SoundManager.GetComponent(typeof(CS.UnityEngine.AudioSource)):Stop()
	    hhdz.gameAudio:bgmNormalRandom()
    //hhdz.gameAudio:bgmNormal()
	
		hhdz.bankerCoin = 0
		hhdz.ShowID = true	
	},

//- 清理函数
	GameScene:onExit(){
	    let name = G.GetGamePName() || "hhdz"
	    G.NetQ.RemoveMsgHookByGroup(name)
	    G.NetQ.RemoveGameMsgHook()
	    hhdz.gameControl:onExit()
	    hhdz.gameLayer:onExit()
	    hhdz.resultLayer:onExit()
	    hhdz.gameAudio:onExit()
	
    // 释放全局表
	    fmg.unLoadLua(name)
	    hhdz = null
	    fmg = null
	
	},

//- data初始化
	GameScene:initData(){
	    hhdz.center = cc.v3(0, 0, 1)        // 屏幕中心点坐标
	    hhdz.svrData = []                                    // 存服务器数据
	},

//- ui初始化
	GameScene:initUi(){
	    hhdz.poolCast = require("ObjectPool"):new([
	        num = 5, poolInit = function(pool){
	            let trans = CS.AssetBundleManager.Instance:LoadGameObject(G.GetGamePName(), "PfCast")
	            trans.active =(false)
	            trans.scale = fmg.v3(0.6, 0.6, 1)
	            pool.dtItem = trans
	        }, create = function(pool){
	            return cc.instantiate(pool.dtItem)
	        }, objInit = function(obj, pool, bShow, args){
	            obj.parent =(hhdz.gameLayer.uiRoot.betNum.betCast, false)
	            obj:GetSiblingIndex(hhdz.gameLayer.uiRoot.betNum.betCast.children.length - 1)
	            if(args == null ){ return }
	            if(args.pos ){ obj.position = args.pos }
	            if(args.parent ){ obj.parent =(args.parent) }
	            if(args.cfg ){
	                GameG.SetImageSprite(cc.find("btn",obj).getComponent(cc.Sprite), G.GetGamePName(), hhdz.GetBetBtnImg(args.cfg)+"_1", false)
	                obj:Find("bet").getComponent(cc.Label).text = G.,                objTool.UserHelper.ToCash(args.cfg*hhdz.dtBetRate)
	            }
	        }, objInitArgs = [], objDel = function(pool, obj){
	            obj.active =(false)
	    },])
	},

//- 初始化监听
	GameScene:initEvent(){
//    // 添加大厅事件监听函数
	    G.Service.Game.RegUserEnterMsg(fmg.handler(self, self["RegUserEnterMsg"]))
	    G.Service.Game.RegUserStateChangeMsg(fmg.handler(self, self["RegUserStateChangeMsg"]))
	    G.Service.Game.RegGameStartMsg(fmg.handler(self, self["RegGameStartMsg"]))
	    G.Service.Game.RegUserLeaveMsg(fmg.handler(self, self["RegUserLeaveMsg"]))
	    G.Service.Game.RegGameEndMsg(fmg.handler(self, self["RegGameEndMsg"]))
	
	},

//- 
	GameScene:hold(text, tm, call){
	    self:hideHold()
	//----->需重新編譯程式碼    let sqs1 = CS.DG.Tweening.DOTween.Sequence()
	//----->需重新編譯程式碼    sqs1:SetLoops(-1)
	    self.hShowHold = sqs1
	    fmg.argFuncAnim(sqs1, function(adt){
	        CS.UILoadingData.Show(text)
	    }, [])
	//----->需重新編譯程式碼    sqs1:AppendInterval(0.05)
	
    // 超时关闭
	    self.hWaitStart = fmg.delayFunc(function(adt){
	//----->需重新編譯程式碼        hhdz.gameScene.hShowHold:Kill()
	        CS.UILoadingData.Hide()
	        self.hWaitStart = null
	    }, tm, [])
	},

	GameScene:hideHold(){
	    self.dtHideHold = true
	    if(self.hWaitStart ){
	//----->需重新編譯程式碼        self.hShowHold:Kill()
	//----->需重新編譯程式碼        self.hWaitStart:Kill()
	        self.hWaitStart = null
	    }
	
	    CS.UILoadingData.Hide()
	},

//- 大厅消息
	GameScene:RegUserStateChangeMsg(data){
    //print("ftest event UserStateChange")
	    fmg.fpack(data)
	    if(data.User.UserID == GameConfig.getUserID() ){
	        hhdz.breakCoin = hhdz.breakCoin || 0
	        data.User.Score = data.User.Score - hhdz.breakCoin
	        hhdz.gameLayer:updateUserCoin(data.User.Score)
	    }
	},

	GameScene:RegUserEnterMsg(data){
    //print("ftest event UserEnter")
	    fmg.fpack(data)
	    if(data.User.UserID == GameConfig.getUserID() ){
	        hhdz.UserInfo = data.User
	        hhdz.gameControl:updateUser(data.User)
	    }
	},

	GameScene:RegGameStartMsg(data){
    //print("ftest event GameStartID")
	    fmg.fpack(data)
		hhdz.gameLayer:GameStart()
	},

	GameScene:RegUserLeaveMsg(data){
    //print("ftest event RegUserLeaveMsg")
	    fmg.fpack(data)
    //lhd.gameControl:updateUser(false, data)
	},

	GameScene:RegGameEndMsg(data){
    //print("ftest event RegGameEndMsg")
	    fmg.fpack(data)
    //lhd.gameControl:updateUser(false, data)
		hhdz.gameLayer:GameEnd()
	},


};

module.exports = GameScene
