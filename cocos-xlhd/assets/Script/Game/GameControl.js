//region *.lua
//Date
//此文件由[BabeLua]插件自动生成
//endregion
var G=require("Global");
var GameG=require("GameGlobal");
var FFunction=require("FFunction");
var GameManager=require("GameManager");
var ResultLayer=require("ResultLayer");
const UIManager=require("../Base/UIManager");
var GameScene=require("GameScene");

var GameControl={
    extends : cc.Component,

    //- 构造函数
    init() {
        this.fmg=require("FFunction");
        this.networkQueue=require("NetworkQueue");
        this.BClass=require("BClass");
        this.Game_XLHD=require("Game_XLHD");
        this.compare=require("Compare");
        this.gameLayer=require("GameLayer");

        this.initEvent();
        this.initData();
    },

    //- 清理函数
    onExit() {
        xlhd.gameAudio.stopTurnStep();
    },

    //- 初始化监听
    initEvent() {

        let groupName=GameG.GetGameName()

        // 添加事件监听函数
        this.networkQueue.RegMsgHook(this.BClass.Game, this.Game_XLHD.XLHDSettingID, function (receiveMsg) { GameControl.LHDSettingID(receiveMsg)}, groupName)
        this.networkQueue.RegMsgHook(this.BClass.Game, this.Game_XLHD.XLHDStateID, function (receiveMsg) { GameControl.LHDStateID(receiveMsg)}, groupName)
        this.networkQueue.RegMsgHook(this.BClass.Game, this.Game_XLHD.XLHDBroadCastBetID, function (receiveMsg) { GameControl.LHDBroadCastBetID(receiveMsg)}, groupName)
        this.networkQueue.RegMsgHook(this.BClass.Game, this.Game_XLHD.XLHDGameResultPokerID, function (receiveMsg) { GameControl.LHDGameResultPokerID(receiveMsg)}, groupName)
        this.networkQueue.RegMsgHook(this.BClass.Game, this.Game_XLHD.XLHDGameSceneID, function (receiveMsg) { GameControl.LHDGameSceneID(receiveMsg)}, groupName)
        this.networkQueue.RegMsgHook(this.BClass.Game, this.Game_XLHD.XLHDGameResultWinID, function (receiveMsg) { GameControl.LHDGameResultWinID(receiveMsg)}, groupName)

        this.networkQueue.RegMsgHook(this.BClass.Game, this.Game_XLHD.XLHDBetInfoID, function (receiveMsg) { GameControl.LHDBetInfoID(receiveMsg)}, groupName)
        this.networkQueue.RegMsgHook(this.BClass.Game, this.Game_XLHD.XLHDBetRetID, function (receiveMsg) { GameControl.LHDBetRetID(receiveMsg)}, groupName)
        this.networkQueue.RegMsgHook(this.BClass.Game, this.Game_XLHD.XLHDShangZhuangRetID, function (receiveMsg) { GameControl.LHDShangZhuangRetID(receiveMsg)}, groupName)
        this.networkQueue.RegMsgHook(this.BClass.Game, this.Game_XLHD.XLHDShangZhuangListInfoID, function (receiveMsg) { GameControl.LHDShangZhuangListInfoID(receiveMsg)}, groupName)
        this.networkQueue.RegMsgHook(this.BClass.Game, this.Game_XLHD.XLHDZhuangInfoID, function (receiveMsg) { GameControl.LHDZhuangInfoID(receiveMsg)}, groupName)
        this.networkQueue.RegMsgHook(this.BClass.Game, this.Game_XLHD.XLHDResultCardListID, function (receiveMsg) { GameControl.LHDResultCardListID(receiveMsg)}, groupName)

        this.networkQueue.RegMsgHook(this.BClass.Game, this.Game_XLHD.XLHDBetClearRetID, function (receiveMsg) { GameControl.LHDBetClearRetID(receiveMsg)}, groupName)
        this.networkQueue.RegMsgHook(this.BClass.Game, this.Game_XLHD.XLHDRichestListID, function (receiveMsg) { GameControl.LHDRichestListID(receiveMsg)}, groupName)
        this.networkQueue.RegMsgHook(this.BClass.Game, this.Game_XLHD.XLHDLuckyStarListID, function (receiveMsg) { GameControl.LHDLuckyStarListID(receiveMsg)}, groupName)
        this.networkQueue.RegMsgHook(this.BClass.Game, this.Game_XLHD.XLHDRoundID, function (receiveMsg) { GameControl.LHDRoundID(receiveMsg)}, groupName)
    },

    //- 初始化数据
    initData() {
        //xlhd.IDTitle = "ID:"
        xlhd.IDTitle="";
        xlhd.dtBetRecode=[];                    // 此局已下注记录
        xlhd.dtBetRecodeOrg=[];                 // 上一局下注记录
        xlhd.dtBetRecodePrv=null;               // 待回应下注记录
        xlhd.hAdioCoinAdd=[];                   // 筹码增加音效列表
        xlhd.hAddCoin=[0, 0, 0];                // 筹码增加动画列表
        xlhd.dtBetRate=1;                       // 1注筹码到钱的换算比例
        xlhd.dtUserBet=null;                    // 当前倍数
        xlhd.bBetted=false;                     // 是否下过注
        xlhd.bIBanker=false;                    // 是否是庄
        xlhd.bReqUpBanker=false;                // 是否申请了上庄
        xlhd.bReqDownBanker=false;              // 是否申请了下庄
        xlhd.bAutoBet=false;                    // 是否自动下注
        xlhd.bAutoBet=false;                    // 是否自动下注
        xlhd.bMidEnter=true;                    // 是否是游戏中加入
        xlhd.breakCoin=0;                       // 断线重连下注数
        xlhd.resultOdd=[1, 8, 1];               // 赔率
    },

    //- 更新玩家信息
    updateUser(data) {
        xlhd.gameLayer.updateUserInfo(true, data);
        ResultLayer.updateUser(data);
    },

    //- 设置下注状态 state-0:下注阶段；1:开奖阶段；2:动画阶段；3:等待阶段
    SetBetState(state) {

        xlhd.dtBetState=state;
        if (state === 0) {
            xlhd.bBetted=false;
            xlhd.bReqUpBanker=false;
            xlhd.bReqDownBanker=false;
            xlhd.bMidEnter=false;
            xlhd.bClearReq=null;
            xlhd.hAdioCoinAdd=[];
            xlhd.BroadBet=[];

            // 处理压注
            xlhd.dtBetRecodePrv=null;
            if (this.coluBetCoin(xlhd.dtBetRecode)>0) {
                xlhd.dtBetRecodeOrg=this.fmg.clone(xlhd.dtBetRecode);
            }
            xlhd.dtBetRecode=[];
            if (xlhd.bAutoBet) {
                this.BetCoinAry(xlhd.dtBetRecodeOrg);
            }

            // 处理筹码
            for (let j=0; j<4; ++ j) {
                for (let i=1; i<=xlhd.gameLayer.uiCast[j].length; ++ i) {
                    xlhd.poolCast.remove(xlhd.gameLayer.uiCast[j][i]);
                }
            }
            xlhd.gameLayer.uiCastIdx=[0, 0, 0,];
            xlhd.gameLayer.uiCast=[[], [], [], []];

            // 重置ui
            xlhd.gameLayer.uiRoot.time.betTip.active=true;
            xlhd.gameLayer.uiRoot.time.rstTip.active=false;
            for (let i=1; i<=3; ++ i) {
                xlhd.gameLayer.uiRoot.betNum.iBet[i].text="0";
                xlhd.gameLayer.updateAllBetNum(i, 0);
            }

            //GameScene.hideHold();
            UIManager.HideMessageFull();
            //----->需重新編譯程式碼    CS.UILoadingData.Hide() //use UIManager

        } else if (state>=1) {

            xlhd.gameLayer.uiRoot.time.rstTip.active=false;
            xlhd.gameLayer.stopBetTimer();
            xlhd.gameAudio.turnStep(3);

        }

        xlhd.gameLayer.updateBetBtnState();
    },

    //- 获取下注记录的总钱
    coluBetCoin(ary) {
        let coin=0
        for (let _ in (ary)) {
            let v=ary[_];

            coin=coin + (v.Count || 0);
        }

        return coin;
    },

    //- 单个下注
    BetCoin(idx) {
        if (xlhd.dtUserBet == null) {
            return;
        }
        let data=[];
        data[0]={}
        data[0].BetType=idx;
        data[0].Count=xlhd.dtUserBet;
        return this.BetCoinAry(data);
    },

    //- 数组下注
    BetCoinAry(data) {

        if (xlhd.dtBetRecodePrv != null || xlhd.bClearReq) {
            return
        }
        if (xlhd.UserInfo == null) {
            xlhd.toast.show(GameG.GetLocalizedString("当前不能下注"), 1.5);

            return false;
        }
        if (xlhd.bIBanker) {
            xlhd.toast.show(GameG.GetLocalizedString("庄家不能下注"), 1.5);
            return false;
        }

        //
        let coin=0;
        let tmp=[];
        for (let _ in (data)) {
            let v=data[_];

            coin=coin + v.Count;
            if (v.Count>0) {
                tmp[tmp.length]=v;
            }
        }
        if (coin<=0) {
            //xlhd.toast.show(GameG.GetLocalizedString("当前下注倍数"), 1.5);
            return;
        }

        if (coin * xlhd.dtBetRate<=xlhd.UserInfo.Score) {
            this.LHDBetID(tmp);
            xlhd.dtBetRecodePrv=data;
            xlhd.gameAudio.addCoin();
            return true;
        }
        else {
            xlhd.gameLayer.CloseAutoBet();
            xlhd.toast.show(GameG.GetLocalizedString("金币不足"), 3);
        }

        return false;
    },

    //- 初始化牌面
    initCard(obj, number, color, cardValue) {
        if (number == null || number == 0) {
            number=0;
            color=0;
        }

        cardValue.children[0].name="card_" + number + "_" + color

        GameG.SetImageSprite(obj, G.GetGamePName(), "card_" + number + "_" + color, false);
    },

    //- - 事件处理
    LHDSettingID(data) {
        this.fmg.fpack(data);
        xlhd.dtBetRate=data.BetMoney;
        xlhd.svrData.XLHDSettingID=data;

        let compare=function (dataA, dataB) {
            return dataA - dataB
        }
        data.BetCount.sort(compare);
        //table.sort(data.BetCount, function (a, b) { return a<b });

        xlhd.dtUserBet=data.BetCount[0];
        xlhd.dtBaseBet=data.BetCount;
        xlhd.betlimitmoney=data.betlimitmoney;
        xlhd.chooseBet=1;
        xlhd.gameLayer.updateBetBtns(data.BetCount);
        xlhd.gameLayer.updateGameInfo(data.BetCount[0] * xlhd.dtBetRate, data.BetMax[0]);
        xlhd.chartLayer.updateLimit(data.BetCount[0] * xlhd.dtBetRate, data.BetMax[0], data.BetMax[1]);
        //xlhd.gameLayer.uiRoot.recharge.text.text=xlhd.betlimitmoney>0 && "需要携带" + xlhd.betlimitmoney + "元才能下注,请前往充值" || "携带金额不足，请先充值"
    },

    LHDStateID(data) {
        this.fmg.fpack(data);
        this.SetBetState(data.State);

        if (data.State == 0) {
            xlhd.gameLayer.beginBetTimer(data.Time);
        }
        else {
            GameManager.calLoadTime();
        }

        // 执行开始动画
        if (data.State == 0 && data.Time>=3 && xlhd.bFirstState0 != 1) {
            xlhd.gameLayer.animStart();
            xlhd.gameAudio.turnStep(1);
            //xlhd.gamesettingCloseButton.animStart()
        }
        else if (data.State == 1) {

            xlhd.gameLayer.stopBetTimer()
        }
        else if (data.State == 0 && data.Time<3 && xlhd.bFirstState0 != 1) {

            xlhd.compare.playCard()
        }

        // 屏蔽首次进入可能双次收到此消息
        if (xlhd.bFirstState0 == null) {
            xlhd.bFirstState0=1;
            GameG.NewDelayOnce(function (adt) { xlhd.bFirstState0=2 }, 1);
        }
    },

    LHDBroadCastBetID(data) {
        this.fmg.fpack(data);

        // 是否筹码未连续变动（清除行为/第一次进入）

        for (let bk in (data.BroadCastBetArr)) {
            let bv=data.BroadCastBetArr[bk];

            xlhd.gameLayer.updateAllBetNum(bv.Type, bv.Money);
            xlhd.gameLayer.ShowBroadCastBetAll(bv.Type, bv.Money);
            let coin=0;

            for (let ax in (xlhd.BroadBet)) {
                let lv=xlhd.BroadBet[ax];

                if (bv.Type == lv.Type) {
                    coin=lv.Money;
                }
            }

            // 其他玩家投注
            if (coin<bv.Money && data.UserID != GameG.getUserID()) {
                let tmp=bv.Type
                if (xlhd.hAddCoin[tmp]<=3) {
                    xlhd.hAddCoin[tmp]=xlhd.hAddCoin[tmp] + 1;
                }

                let CheckBet=require("CheckBet");
                let Data=CheckBet.Init(bv.Money - coin, xlhd.dtBaseBet, xlhd.dtBetRate);
                let BetData=Data.value;
                let CountData=Data.count;
                for (let i=1; i<=BetData.length; ++ i) {
                    for (let j=1; j<=CountData[i]; ++ j) {
                        GameG.NewDelayOnce(
                            function () {
                                xlhd.gameLayer.ShowCastBetChip(bv.Type, BetData[i], BetData.length - i, data.UserID);
                            },
                            (Math.random() * 0.5)
                        )
                    }
                }
            }
            // 其他玩家清除操作
            else if (coin>bv.Money) {

                xlhd.gameLayer.resetBetCast(bv.Type, bv.Money / xlhd.dtBetRate);
                xlhd.gameLayer.ShowClearBetChip(data.UserID);
            }
        }

        xlhd.bFirstBroadBet=true;
        xlhd.BroadBet=this.fmg.clone(data.BroadCastBetArr);
    },

    LHDGameResultPokerID(data) {
        xlhd.gameLayer.animEndBet();
        this.fmg.fpack(data);
        xlhd.dtRstWin=xlhd.gameData.CompState(data.Poker[0].Number, data.Poker[1].Number);
        this.SetBetState(1);
        xlhd.bFirstState0=2;
        xlhd.resultLayer.setWinRst(xlhd.dtRstWin);

        if (! xlhd.bMidEnter) {
            xlhd.compare.animOpenCards(data, function () {
                xlhd.chartLayer.addRst(data.Poker, data.RoundID, true);
                if (xlhd.chShowRst) {
                    //coroutine.resume(xlhd.chShowRst);
                }
            });
        } else {
            GameScene.hold(GameG.GetLocalizedString("请等待新一局游戏开始"), 10);
        }
    },

    LHDGameSceneID(data) {
        //print("ftest event LHDGameSceneID")
        this.fmg.fpack(data);
    },

    LHDGameResultWinID(data) {
        let self=this;
        //print("ftest event LHDGameResultWinID")
        this.fmg.fpack(data);
        xlhd.breakCoin=0;
        xlhd.UserInfo.Score=xlhd.UserInfo.Score + data.SelfWin;
        xlhd.resultLayer.update(data);

        xlhd.gameLayer.ShowResultWin(data);

        //Coroutine by AZLDC >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        //xlhd.chShowRst=coroutine.create(function () {
        //    xlhd.gameLayer.hAddUseCoin=xlhd.gameLayer.hAddUseCoin || [obj=xlhd.gameLayer.uiRoot.user.coin, now=xlhd.UserInfo.Score];
        //    if (xlhd.gameLayer.dtOpenCardStep != 0) {
        //        coroutine.yield();
        //    }
        //    GameScene.hideHold();
        //    xlhd.chShowRst=null;
        //    xlhd.resultLayer.show(true);
        //    xlhd.gameLayer.bLockUseCoin=false;
        //    xlhd.gameLayer.showAddCoin(data.SelfWin, 2, 1.7, xlhd.UserInfo.Score);
        //    xlhd.resultLayer.hideCall=function () {
        //        xlhd.resultLayer.hideCall=null;
        //    }
        //});       

        //coroutine.resume(xlhd.chShowRst);        


        function Coroutine(f) {
            var o=f(); // instantiate the coroutine
            o.next(); // execute until the first yield   
            return function (x) {
                o.next(x);
            }
        }

        xlhd.chShowRst=Coroutine(function* () {
            var obj, now;
            xlhd.gameLayer.hAddUseCoin=xlhd.gameLayer.hAddUseCoin || [obj=xlhd.gameLayer.uiRoot.user.coin, now=xlhd.UserInfo.Score];
            while (xlhd.gameLayer.dtOpenCardStep != 0) {
                yield;
            }
            clearInterval(self.CorInt);
            xlhd.chShowRst=null;
            xlhd.resultLayer.show(true);
            xlhd.gameLayer.bLockUseCoin=false;
            xlhd.gameLayer.showAddCoin(data.SelfWin, 2, 0.5, xlhd.UserInfo.Score);
            xlhd.resultLayer.hideCall=function () {
                xlhd.resultLayer.hideCall=null;
                GameScene.hideHold();
            }
        });

        // xlhd.chShowRst();
        this.CorInt=setInterval(xlhd.chShowRst, 10);
        //Coroutine by AZLDC <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    },

    LHDBetInfoID(data) {
        this.fmg.fpack(data);
        let coin=0;
        for (let _ in (data.BetInfo)) {
            let v=data.BetInfo[_];

            coin=coin + v.Money;
            xlhd.gameLayer.uiRoot.betNum.iBet[v.Type].text=xlhd.gameLayer.MoneyText(v.Money);
            xlhd.dtBetRecode[v.Type]=xlhd.dtBetRecode[v.Type] || [];
            xlhd.dtBetRecode[v.Type].BetType=v.Type;
            xlhd.dtBetRecode[v.Type].Count=v.Money / xlhd.dtBetRate + (xlhd.dtBetRecode[v.Type].Count || 0);
            if (v.Money>0) {
                xlhd.bBetted=true;
            }

            xlhd.gameLayer.ShowBroadCastBetMy(v.Type, xlhd.dtBetRecode[v.Type].Count * xlhd.dtBetRate);
            let CheckBet=require("CheckBet");
            let Data=CheckBet.Init(v.Money - coin, xlhd.dtBaseBet, xlhd.dtBetRate);
            let BetData=Data.value;
            let CountData=Data.count;
            for (let i=1; i<=BetData.length; ++ i) {
                for (let j=1; j<=CountData[i]; ++ j) {
                    xlhd.gameLayer.ShowCastBetChip(v.Type, BetData[i], BetData.length - i + 1, data.UserID);
                }
            }
        }

        xlhd.breakCoin=coin;
        xlhd.UserInfo.Score=xlhd.UserInfo.Score - coin;
        xlhd.gameLayer.uiRoot.user.coin.text=xlhd.gameLayer.MoneyText(xlhd.UserInfo.Score);
        xlhd.gameLayer.updateBetBtnState();
    },

    LHDBetRetID(data) {
        //print("ftest event LHDBetRetID")
        this.fmg.fpack(data);

        xlhd.UserInfo.Score=data.Money;
        xlhd.gameLayer.updateUserCoin(data.Money);

        // if (data.Ret != 0) {
        //     for (let k in (data.BetArr)) {
        //         let v=data.BetArr[k];

        //         xlhd.gameLayer.ClearBetRetError(v.BetType, v.Count * xlhd.dtBetRate, GameG.getUserID());
        //     }
        // }

        if (data.Ret == 0) {
            xlhd.bBetted=true;

            for (let _ in (data.BetArr)) {
                let v=data.BetArr[_];

                xlhd.dtBetRecode[v.BetType]=xlhd.dtBetRecode[v.BetType] || [];
                xlhd.dtBetRecode[v.BetType].BetType=v.BetType;
                xlhd.dtBetRecode[v.BetType].Count=v.Count + (xlhd.dtBetRecode[v.BetType].Count || 0);
                xlhd.gameLayer.uiRoot.betNum.iBet[v.BetType].text=xlhd.gameLayer.MoneyText(xlhd.dtBetRecode[v.BetType].Count * xlhd.dtBetRate);
                xlhd.gameLayer.ShowBroadCastBetMy(v.BetType, xlhd.dtBetRecode[v.BetType].Count * xlhd.dtBetRate);

                let CheckBet=require("CheckBet")
                let Data=CheckBet.Init(v.Count * xlhd.dtBetRate, xlhd.dtBaseBet, xlhd.dtBetRate)
                let BetData=Data.value
                let CountData=Data.count
                let isFirst=true
                for (let i=1; i<=BetData.length; ++ i) {
                    for (let j=1; j<=CountData[i]; ++ j) {
                        if (isFirst == true) {
                            xlhd.gameLayer.ShowCastBetChip(v.BetType, BetData[i], BetData.length - i, GameG.getUserID())
                            isFirst=false
                        }
                        else {
                            GameG.NewDelayOnce(
                                function () {
                                    xlhd.gameLayer.ShowCastBetChip(v.BetType, BetData[i], BetData.length - i, GameG.getUserID())
                                },
                                (Math.random() * 0.5)
                            )
                        }
                    }
                }
                //xlhd.gameLayer.ShowCastBetChip(v.BetType, v.Count * xlhd.dtBetRate, xlhd.chooseBet, GameG.getUserID());
            }

        }
        else if (data.Ret == - 1) {
            xlhd.toast.show(GameG.GetLocalizedString("金币不足"));
        }
        else if (data.Ret == - 2) {
            xlhd.toast.show(GameG.GetLocalizedString("下注类型错误"));
        }
        else if (data.Ret == - 3) {
            xlhd.toast.show(GameG.GetLocalizedString("庄家不能下注"));
        }
        else if (data.Ret == - 4) {
            xlhd.toast.show(GameG.GetLocalizedString("总注数超过上限"));
        }
        else if (data.Ret == - 5) {
            xlhd.toast.show(GameG.GetLocalizedString("不可同时下注龙与虎"));
        }
        else if (data.Ret == - 6) {

            let MinCarryingScore=xlhd.betlimitmoney;
            xlhd.toast.show(GameG.GetLocalizedString("请前往充值").replace("####", MinCarryingScore));
        }

        if (data.Ret != 0) {
            for (let _ in (data.BetArr)) {
                let v=data.BetArr[_]

                xlhd.dtBetRecode[v.BetType]=xlhd.dtBetRecode[v.BetType] || [];
                xlhd.dtBetRecode[v.BetType].BetType=v.BetType;
                xlhd.dtBetRecode[v.BetType].Count=(xlhd.dtBetRecode[v.BetType].Count || 0);

                xlhd.gameLayer.ShowBroadCastBetMy(v.BetType, xlhd.dtBetRecode[v.BetType].Count * xlhd.dtBetRate);
            }
        }

        xlhd.dtBetRecodePrv=null;
        xlhd.gameLayer.updateBetBtnState();
    },

    LHDShangZhuangRetID(data) {
        this.fmg.fpack(data)
        if (data.ret == 1) {
            // xlhd.toast.show("下庄成功");
            xlhd.bReqDownBanker=true;
        }
        else if (data.ret == 0) {
            // xlhd.toast.show("上庄成功");
            xlhd.bReqUpBanker=true;
        }
        else if (data.ret == - 1) {
            // xlhd.toast.show("金币不足，上庄失败");
        }
        else if (data.ret == - 2) {
            // xlhd.toast.show("您已经在上庄列表中咯");
            xlhd.bReqUpBanker=true;
        }
        xlhd.gameLayer.updateBetBtnState()
    },

    LHDShangZhuangListInfoID(data) {
        //print("ftest event LHDShangZhuangListInfoID")
        this.fmg.fpack(data);
        for (let i=1; i<=data.UserInfo.length; ++ i) {
            if (data.UserInfo[i].UserID == GameG.getUserID()) {
                xlhd.bReqUpBanker=true;
                xlhd.gameLayer.updateBetBtnState();
                break;
            }
        }
    },

    LHDZhuangInfoID(data) {
        this.fmg.fpack(data);
        xlhd.bIBanker=data.UserID == GameG.getUserID();
        xlhd.svrData.XLHDZhuangInfoID=data;
        xlhd.gameLayer.updateBanker(data);
        xlhd.resultLayer.updateBanker(data);
        xlhd.gameLayer.updateBetBtnState();
    },

    LHDResultCardListID(data) {
        if (data.CardList == null)
            return

        this.fmg.fpack(data);
        this.fmg.revertTable(data.CardList);
        for (let i=0; i<data.CardList.length; ++ i) {
            xlhd.chartLayer.addRst(data.CardList[i].Cards, data.CardList[i].RoundID);
        }
    },

    LHDBetClearRetID(data) {
        this.fmg.fpack(data);
        xlhd.UserInfo.Score=data.Money;
        xlhd.gameLayer.updateUserCoin(data.Money);
        if (data.Ret == 0) {
            xlhd.toast.show(GameG.GetLocalizedString("退还押注成功"));
            xlhd.bBetted=false;
            xlhd.gameLayer.updateBetBtnState();
            xlhd.gameLayer.ShowClearBetChip(GameG.getUserID());
            xlhd.dtBetRecode=[];
            for (let i=1; i<=3; ++ i) {
                xlhd.gameLayer.uiRoot.betNum.iBet[i].text="0";
            }
        }
        else {
            xlhd.toast.show(GameG.GetLocalizedString("清理次数超过上限"));
        }
        xlhd.bClearReq=null;
    },

    //大富豪列表的消息
    LHDRichestListID(data) {
        xlhd.gameLayer.SetUserList(data);
    },

    //明燈玩家的消息
    LHDLuckyStarListID(data) {
        xlhd.gameLayer.SetUserStar(data);
    },

    //龙虎斗本局局数
    LHDRoundID(data) {
        let nodata=xlhd.resultRound == null;
        xlhd.resultRound={};
        xlhd.resultRound.RoundID=data.RoundID;
        xlhd.resultRound.LongWin=data.LongWin;
        xlhd.resultRound.HeWin=data.HeWin;
        xlhd.resultRound.HuWin=data.HuWin;
        if (nodata) {
            xlhd.gameLayer.updateGameInfoRound();
        }
    },

    //- - 发送请求
    LHDBetID(data) {
        this.fmg.fpack(data);
        //G.Proto.this.BClass.GameRoom
        let param={}
        param.BetArr=data
        this.networkQueue.SendMsg(this.BClass.Game, xlhd.gameProto.XLHDBetID, param);
    },

    LHDShangZhuangID(bUp) {
        this.fmg.fpack(bUp);
        let param={}
        param.IsShangZhuang=bUp
        this.networkQueue.SendMsg(this.BClass.Game, xlhd.gameProto.XLHDShangZhuangID, param);
    },

    LHDGetShangZhuangListID() {
        this.fmg.fpack(data);
        this.networkQueue.SendMsg(this.BClass.Game, xlhd.gameProto.XLHDGetShangZhuangListID, null);
    },

    LHDBetClearID() {
        this.fmg.fpack(data);
        this.networkQueue.SendMsg(this.BClass.Game, xlhd.gameProto.XLHDBetClearID, null);
    },

    //- 测试
    test() {

        // if (CS.UnityEngine.Input.GetKeyUp(CS.UnityEngine.KeyCode.Alpha1)) {
        //     xlhd.testNum=xlhd.testNum && xlhd.testNum + 1 || 1;

        //     xlhd.playerList.bNoMaxLen=true;
        //     let data=[DrawCount=39, FaceID=6, LoseCount=248, NickName="来自火星", Score=274765, SeatNo=0, Sex=0, StateValue=2, TableNo=0, UserID=G.User.GetCurrentUserID(), WinCount=51,]
        //     for (let i=- 5; i<=95; ++ i) {
        //         let user=this.fmg.clone(data);
        //         user.UserID=user.UserID + i;
        //         user.NickName=user.NickName + user.UserID;
        //         xlhd.testuserid=user.UserID;
        //         xlhd.playerList.dtTableUsers[user.UserID]=[];
        //         xlhd.playerList.dtTableUsers[user.UserID].user=user;
        //     }

        // }
        // else if (CS.UnityEngine.Input.GetKeyUp(CS.UnityEngine.KeyCode.Alpha2)) {

        //     xlhd.testNum=xlhd.testNum && xlhd.testNum + 1 || 1;

        //     xlhd.testuserid=xlhd.testuserid || 1;
        //     let data=[DrawCount=39, FaceID=6, LoseCount=248, NickName="来自火星", Score=274765, SeatNo=0, Sex=0, StateValue=2, TableNo=0, UserID=G.User.GetCurrentUserID() + xlhd.testuserid, WinCount=51,];
        //     xlhd.testuserid=xlhd.testuserid + 1;
        //     xlhd.playerList.dtTableUsers[data.UserID]=[];
        //     xlhd.playerList.dtTableUsers[data.UserID].user=data;

        // }
        // else if (CS.UnityEngine.Input.GetKeyUp(CS.UnityEngine.KeyCode.Alpha3)) {

        //     xlhd.testNum=xlhd.testNum && xlhd.testNum + 1 || 1;

        // }
        // else if (CS.UnityEngine.Input.GetKeyUp(CS.UnityEngine.KeyCode.Alpha4)) {

        // }
        // else if (CS.UnityEngine.Input.GetKeyUp(CS.UnityEngine.KeyCode.Alpha5)) {

        // }
        // else if (CS.UnityEngine.Input.GetKeyUp(CS.UnityEngine.KeyCode.Alpha6)) {

        // }

    },


};

module.exports=GameControl;
