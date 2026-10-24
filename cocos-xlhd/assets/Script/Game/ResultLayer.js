var G=require("Global");
var FFunction=require("FFunction");
var GameG=require("GameGlobal");

var ResultLayer={
    extends : cc.Component,

    //-
    init() {
        //this.tmCloseHander="thRstClose";

        this.initUi();
    },

    //-
    onExit() {
    },

    //-
    initUi() {

        // 
        let canvas=cc.find("Canvas");
        let root=cc.find("GameLayer/ResultLayer", canvas);
        this.uiRoot=[];
        this.uiRoot.root=root;
        let uiRoot=this.uiRoot;

        //
        root.active=false;
        uiRoot.bg=cc.find("bg", root).getComponent(cc.Sprite);

        //
        uiRoot.rank=[]
        for (let i=1; i<=3; ++ i) {
            uiRoot.rank[i]=[];
            uiRoot.rank[i].root=cc.find("bg/rank/user" + i, root).getComponent(cc.Sprite);
            uiRoot.rank[i].name=cc.find("bg/rank/user" + i + "/name", root).getComponent(cc.Label);
            uiRoot.rank[i].coin=cc.find("bg/rank/user" + i + "/coin", root).getComponent(cc.Label);

            uiRoot.rank[i].root.active=false;
        }

        //
        uiRoot.banker=[];
        uiRoot.banker.root=cc.find("bg/wininfo/banker", root);
        uiRoot.banker.name=cc.find("bg/wininfo/banker/name", root).getComponent(cc.Label);
        uiRoot.banker.coin=cc.find("bg/wininfo/banker/coin", root).getComponent(cc.Label);
        uiRoot.banker.win=cc.find("bg/wininfo/banker/win", root).getComponent(cc.Sprite);
        uiRoot.banker.root.active=false;

        //
        uiRoot.user=[];
        uiRoot.user.root=cc.find("bg/wininfo/user", root);
        uiRoot.user.name=cc.find("bg/wininfo/user/name", root).getComponent(cc.Label);
        uiRoot.user.coin=cc.find("bg/wininfo/user/coin", root).getComponent(cc.Label);
        uiRoot.user.win=cc.find("bg/wininfo/user/win", root).getComponent(cc.Sprite);

        //
        uiRoot.effect=[];
        uiRoot.effect.titleWin=cc.find("bg/efWin", root);
        uiRoot.effect.titleLose=cc.find("bg/efLose", root);
        uiRoot.effect.titleWin.active=false;
        uiRoot.effect.titleLose.active=false;

        // 
        uiRoot.timer=cc.find("bg/ok/timer", root).getComponent("TextControl");
        cc.find("bg/ok", root).getComponent(cc.Button).node.on('click', (function () {
            GameG.PlayGameSound("se_click");
            xlhd.gameAudio.btnClick();
            xlhd.resultLayer.show(false);
            xlhd.resultLayer.stopTimer();
        }));
        uiRoot.timer.text="";

        // 
        uiRoot.win=[];
        uiRoot.win.anim=cc.find("bg/jiesuan_shengli", root);
        // uiRoot.win.ps=cc.find("bg/jiesuan_shengli/ALL", root).getComponent(cc.ParticleSystem);
        uiRoot.win.static=cc.find("bg/efWin", root);

        uiRoot.lose=[];
        uiRoot.lose.anim=cc.find("bg/jiesuan_shibai", root);
        // uiRoot.lose.ps=cc.find("bg/jiesuan_shibai/ALL", root).getComponent(cc.ParticleSystem);
        uiRoot.lose.static=cc.find("bg/efLose", root);

        uiRoot.rst=[];
        uiRoot.rst[1]=cc.find("bg/rst/win1", root).getComponent(cc.Sprite);
        uiRoot.rst[2]=cc.find("bg/rst/win2", root).getComponent(cc.Sprite);
        uiRoot.rst[3]=cc.find("bg/rst/win3", root).getComponent(cc.Sprite);
        this.setWinRst(0);

    },

    //- ��ʾ��������
    show(bShow, call) {
        if (bShow) {
            this.uiRoot.banker.root.active=(this.bBankerHave);
            this.startTimer(3);
            this.updateBanker(xlhd.svrData.XLHDZhuangInfoID, true);
            FFunction.popAnim(bShow, this.uiRoot.root, this.uiRoot.bg, 0.1, function () {
                if (call) {
                    call();
                }
            })
        }
        else {
            this.uiRoot.root.active=false;
            this.stopTimer();
            if (this.hideCall) {
                this.hideCall();
            }
            if (call) {
                call();
            }
        }
    },

    //- ���½�������
    update(data) {
        this.uiRoot.user.coin.text=GameG.FormatNum(data.thisWin);
        this.uiRoot.user.win.active=(data.thisWin>0);
        this.uiRoot.banker.coin.text=GameG.FormatNum(data.ZhuangWin);
        this.uiRoot.banker.win.active=(data.ZhuangWin>0);
        this.uiRoot.banker.root.active=(xlhd.svrData.XLHDZhuangInfoID && xlhd.svrData.XLHDZhuangInfoID.UserID != 0);

        for (let i=1; i<=3; ++ i) {
            this.uiRoot.rank[i].root.active=(data.WinUserInfo[i] != null);
            if (data.WinUserInfo[i]) {
                this.uiRoot.rank[i].name.text=data.WinUserInfo[i].UserName;
                this.uiRoot.rank[i].coin.text=GameG.FormatNum(data.WinUserInfo[i].Win);
            }
        }

        let tmp=["win", "lose"];
        let key=data.thisWin>0 && tmp[0] || tmp[1];
        cc.log("this.uiRoot[" + key + "]", this.uiRoot);
        // this.uiRoot[key].ps.Play();
        for (let _ in (tmp)) {
            let v=tmp[_];

            this.uiRoot[v].anim.active=(key == v);
            this.uiRoot[v].static.active=(key == v)
        }

    },

    updateUser(data) {
        if (xlhd.ShowID == false) {
            this.uiRoot.user.name.text="" + data.UserID
        }
        else {
            this.uiRoot.user.name.text="ID:" + data.UserID
        }
        //this.uiRoot.user.coin.text = G.Tool.UserHelper.ToCash(data.Score)
    },

    updateBanker(data, mast) {
        // this.bBankerHave=(data.UserID != 0);
        // if (data.UserID != 0 && (mast != null || this.bShow == false)) {
        //     if (xlhd.ShowID == false) {
        //         this.uiRoot.banker.name.text="" + data.UserInfo[1].UserID;
        //     } else {
        //         this.uiRoot.banker.name.text="ID:" + data.UserInfo[1].UserID;
        //     }
        // }
    },

    startTimer(tm) {
        tm=tm || 10;
        this.stopTimer();
        this.uiRoot.timer.text="" + tm + "s";
        let cdTime=tm;
        //this.tmCloseHander
        GameG.StartCountDown(this.uiRoot.timer, tm, function (dt) {
            cdTime=cdTime - dt;
            xlhd.resultLayer.uiRoot.timer.text=cdTime.toString() + "s";
            if (cdTime<=0) {
                xlhd.resultLayer.uiRoot.timer.text="0";
                xlhd.resultLayer.stopTimer();
                xlhd.resultLayer.show(false);
            }
        }, 1.0);
    },

    stopTimer() {
        if (this.tmCloseHander != null) {
            GameG.RemoveCountDown(this.tmCloseHander);
            this.tmCloseHander=null;
        }
    },

    setWinRst(win) {
        for (let i=1; i<=3; ++ i) {
            this.uiRoot.rst[i].active=(i == win);
        }
    },

};

module.exports=ResultLayer;
