//require("Module")
//mmodule(...)
var G=require("Global");
var GameG=require("GameGlobal");
var fmg=require("FFunction");
var ObjectPool=require("ObjectPool")
var GameService=require("GameService")
var UIManager=require("UIManager");

var GameScene={
    extends : cc.Component,

    //- 构造函数
    init() {
        window.xlhd={};
        xlhd.gameScene=this;
        xlhd.gameProto=require("Game_XLHD");
        xlhd.toast=require("Toast");
        xlhd.gameData=require("GameData");
        xlhd.gameAudio=require("GameAudio");
        xlhd.compare=require("Compare");
        xlhd.gameLayer=require("GameLayer");
        xlhd.chartLayer=require("ChartLayer");
        xlhd.resultLayer=require("ResultLayer");
        xlhd.gameControl=require("GameControl");

        this.initData();
        this.initUi();
        this.initEvent();

        xlhd.bankerCoin=0;
        xlhd.ShowID=true;
        this.isClear=false;

        xlhd.gameData.init();
        xlhd.gameAudio.initData();
        xlhd.gameLayer.init();
        xlhd.gameControl.init();
        xlhd.chartLayer.init();
        xlhd.compare.init();
        xlhd.toast.init();
        fmg.init();
        xlhd.resultLayer.init();

        cc.audioEngine.stop();
        xlhd.gameAudio.bgmNormal();
    },

    //- 清理函数
    onExit() {
        let name=G.GetGamePName() || "xlhd";
        G.NetQ.RemoveMsgHookByGroup(name);
        G.NetQ.RemoveGameMsgHook();
        xlhd.gameControl.onExit();
        xlhd.gameLayer.onExit();
        xlhd.resultLayer.onExit();
        xlhd.gameAudio.onExit();

        // 释放全局表
        fmg.unLoadLua(name);
        xlhd=null;
        fmg=null;

    },

    //- data初始化
    initData() {
        xlhd.center=cc.v3(0, 0, 1);        // 屏幕中心点坐标
        xlhd.svrData=[];                                    // 存服务器数据
    },

    //- ui初始化
    initUi() {
        this.canvas=cc.find("Canvas")
        this.root=cc.find("GameLayer", this.canvas)

        let num=5;
        let poolInit=function (pool) {
            //----->需重新編譯程式碼    let trans=CS.AssetBundleManager.Instance.LoadGameObject(G.GetGamePName(), "PfCast");
            let trans=cc.instantiate();
            trans.active=false;
            trans.scale=0.6;
            pool.dtItem=trans;
        };

        let create=function (pool) {
            return cc.instantiate(pool.dtItem);
        };

        let objInit=function (obj, pool, bShow, args) {
            obj.parent=(xlhd.gameLayer.uiRoot.betNum.betCast, false);
            obj.GetSiblingIndex(xlhd.gameLayer.uiRoot.betNum.betCast.children.length - 1);
            if (args == null) {
                return;
            }
            if (args.pos) {
                obj.position=args.pos;
            }
            if (args.parent) {
                obj.parent=args.parent;
            }
            if (args.cfg) {
                GameG.SetImageSprite(cc.find("btn", obj).getComponent(cc.Sprite), G.GetGamePName(), xlhd.gameData.GetBetBtnImg(args.cfg) + "_1", false);
                cc.find("bet", obj).getComponent(cc.Label).text=xlhd.MoneyText(args.cfg * xlhd.dtBetRate);
            }
        };

        let objInitArgs=[];

        let objDel=function (pool, obj) {
            obj.active=false;
        };

        xlhd.poolCast=new ObjectPool();
        xlhd.poolCast.init([num, poolInit, create, objInit, objInitArgs, objDel]);
    },

    //- 初始化监听
    initEvent() {
        let self=this
        // 添加大厅事件监听函数
        GameService.RegUserEnterMsg(function (receiveMsg) { self.RegUserEnterMsg(receiveMsg)})
        GameService.RegUserStateChangeMsg(function (receiveMsg) { self.RegUserStateChangeMsg(receiveMsg)})
        GameService.RegGameStartMsg(function (receiveMsg) { self.RegGameStartMsg(receiveMsg)})
        GameService.RegUserLeaveMsg(function (receiveMsg) { self.RegUserLeaveMsg(receiveMsg)})
        GameService.RegGameEndMsg(function (receiveMsg) { self.RegGameEndMsg(receiveMsg)})

    },

    //- 
    hold(text, tm, call) {
        this.hideHold();

        let self=this
        UIManager.ShowMessageFull(text);

        // let repeatTween=cc.tween(this.canvas)
        // let tween=cc.tween(repeatTween)
        //             .delay(0.05)
        //             .call(function () {
        //                 UIManager.ShowMessageFull(text);
        //             });

        // repeatTween.repeat(9999999999, tween).start();

        // this.hShowHold=repeatTween;

        UIManager.ShowMessageFull(text);
        this.hWaitStart = "hShowHold";
        // 超时关闭
        GameG.NewDelayOnce(function (adt) {
            cc.log("stop hShowHold");
            // self.hShowHold.stop();
            UIManager.HideMessageFull();
            self.hWaitStart=null;
        }, tm,this.hWaitStart);
        cc.log("start hShowHold",this.hWaitStart);
    },

    hideHold() {
        this.dtHideHold=true;
        cc.log("hideHold stop hShowHold",this.hWaitStart);
        // if (this.hShowHold) {
        //     this.hShowHold.stop();
        // }
        if (this.hWaitStart) {
            GameG.CancelNewDelay(this.hWaitStart);
            this.hWaitStart=null;
        }
        UIManager.HideMessageFull();
    },

    //- 大厅消息
    RegUserStateChangeMsg(data) {
        fmg.fpack(data)
        if (data.User.UserID == GameG.getUserID()) {
            xlhd.breakCoin=xlhd.breakCoin || 0
            data.User.Score=data.User.Score - xlhd.breakCoin
            xlhd.gameLayer.updateUserCoin(data.User.Score)
        }
    },

    RegUserEnterMsg(data) {
        fmg.fpack(data)
        if (data.User.UserID == GameG.getUserID()) {
            xlhd.UserInfo=data.User
            xlhd.gameControl.updateUser(data.User)
        }
    },

    RegGameStartMsg(data) {
        fmg.fpack(data)
        xlhd.gameLayer.GameStart()
    },

    RegUserLeaveMsg(data) {
        fmg.fpack(data)
    },

    RegGameEndMsg(data) {
        fmg.fpack(data)
        xlhd.gameLayer.GameEnd()
    },

    CleanUp() {
        Global.RemoveAllTween()

        this.OnRequestLeaveTable();
        dm.cleanUp();

        this.isClear=true;
    },

    update(tm) {
        if (this.isClear == true)
            return;

        TWEEN.update(tm);
    },

};

module.exports=GameScene;
