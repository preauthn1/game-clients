//Date
//此文件由[BabeLua]插件自动生成
//endregion
var G=require("Global")
var gameGlobal=require("GameGlobal")
var gameData=null
var gameAudio=require("GameAudio")
var gameScene=null
var gameLayer=null
var toast=require("Toast")
var chartLayer=require("ChartLayer")
var compare=null
var fmg=null
var GameConfig=require("GameConfig")
var gameManager=require("GameManager")

var networkQueue=null
var Game_BJL=null
var BClass=null

var GameControl={
    extends : cc.Component,

    //- 构造函数
    init() {
        gameData=require("GameData")
        gameLayer=require("GameLayer")
        gameScene=require("GameScene")
        networkQueue=require("NetworkQueue");
        Game_BJL=require("Game_BJL")
        BClass=require("BClass")
        fmg=require("FFunction")
        compare=require("Compare")

        this.initData()
        this.initEvent()
    },

    //- 清理函数
    onExit() {
        gameAudio.stopTurnStep()
    },

    //- 初始化监听
    initEvent() {
        let gameName=gameGlobal.GetGameName()

        //    G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game_bjl.bjlStateID, function(data){
        //    end, bjl.gameName)
        // 添加事件监听函数
        networkQueue.RegMsgHook(BClass.Game, Game_BJL.BJLSettingID, function (receiveMsg) { GameControl.BJLSettingID(receiveMsg)}, gameName)
        networkQueue.RegMsgHook(BClass.Game, Game_BJL.BJLStateID, function (receiveMsg) { GameControl.BJLStateID(receiveMsg)}, gameName)
        networkQueue.RegMsgHook(BClass.Game, Game_BJL.BJLBroadCastBetID, function (receiveMsg) { GameControl.BJLBroadCastBetID(receiveMsg)}, gameName)
        networkQueue.RegMsgHook(BClass.Game, Game_BJL.BJLGameResultPokerID, function (receiveMsg) { GameControl.BJLGameResultPokerID(receiveMsg)}, gameName)
        networkQueue.RegMsgHook(BClass.Game, Game_BJL.BJLGameSceneID, function (receiveMsg) { GameControl.BJLGameSceneID(receiveMsg)}, gameName)
        networkQueue.RegMsgHook(BClass.Game, Game_BJL.BJLGameResultWinID, function (receiveMsg) { GameControl.BJLGameResultWinID(receiveMsg)}, gameName)
        networkQueue.RegMsgHook(BClass.Game, Game_BJL.BJLBetInfoID, function (receiveMsg) { GameControl.BJLBetInfoID(receiveMsg)}, gameName)
        networkQueue.RegMsgHook(BClass.Game, Game_BJL.BJLBetRetID, function (receiveMsg) { GameControl.BJLBetRetID(receiveMsg)}, gameName)
        networkQueue.RegMsgHook(BClass.Game, Game_BJL.BJLShangZhuangRetID, function (receiveMsg) { GameControl.BJLShangZhuangRetID(receiveMsg)}, gameName)
        networkQueue.RegMsgHook(BClass.Game, Game_BJL.BJLShangZhuangListInfoID, function (receiveMsg) { GameControl.BJLShangZhuangListInfoID(receiveMsg)}, gameName)
        networkQueue.RegMsgHook(BClass.Game, Game_BJL.BJLZhuangInfoID, function (receiveMsg) { GameControl.BJLZhuangInfoID(receiveMsg)}, gameName)
        networkQueue.RegMsgHook(BClass.Game, Game_BJL.BJLResultCardListID, function (receiveMsg) { GameControl.BJLResultCardListID(receiveMsg)}, gameName)
        networkQueue.RegMsgHook(BClass.Game, Game_BJL.BJLBetClearRetID, function (receiveMsg) { GameControl.BJLBetClearRetID(receiveMsg)}, gameName)
        networkQueue.RegMsgHook(BClass.Game, Game_BJL.BJLRichestListID, function (receiveMsg) { GameControl.BJLRichestListID(receiveMsg)}, gameName)
        networkQueue.RegMsgHook(BClass.Game, Game_BJL.BJLLuckyStarListID, function (receiveMsg) { GameControl.BJLLuckyStarListID(receiveMsg)}, gameName)
        networkQueue.RegMsgHook(BClass.Game, Game_BJL.BJLRoundID, function (receiveMsg) { GameControl.BJLRoundID(receiveMsg)}, gameName)
    },

    //- 初始化数据
    initData() {
        //this.IDTitle = "ID:"
        gameData.IDTitle=""
        gameData.dtBetRecode=[]                    // 此局已下注记录
        gameData.dtBetRecodeOrg=[]                 // 上一局下注记录
        gameData.dtBetRecodePrv=null                // 待回应下注记录
        gameData.hAdioCoinAdd=[]                   // 筹码增加音效列表
        gameData.hAddCoin=[0, 0, 0]                // 筹码增加动画列表
        gameData.dtBetLimt=0                       // 下注上限
        gameData.dtBetRate=1                       // 1注筹码到钱的换算比例
        gameData.dtUserBet=null                     // 当前倍数
        gameData.bBetted=false                     // 是否下过注
        gameData.bIBanker=false                    // 是否是庄
        gameData.bReqUpBanker=false                // 是否申请了上庄
        gameData.bReqDownBanker=false              // 是否申请了下庄
        gameData.bAutoBet=false                    // 是否自动下注
        gameData.bDeal=false                       // 是否發過牌
        gameData.bMidEnter=true                    // 是否是游戏中加入
        gameData.breakCoin=0                       // 断线重连下注数
        gameData.dtBankerReqNum=0                  // 上庄申请的人数

        gameData.bClearReq=null
        gameData.hAdioCoinAdd=[]
        gameData.BroadBet=[]
    },

    //- 更新玩家信息
    updateUser(data) {
        gameLayer.updateUserInfo(true, data)
    },

    //- 设置下注状态 state-0:下注阶段；1:开奖阶段；2:动画阶段；3:等待阶段
    SetBetState(state) {
        gameData.dtBetState=state
        if (state == 0) {
            gameData.bBetted=false
            gameData.bReqUpBanker=false
            gameData.bReqDownBanker=false
            //gameData.bMidEnter = false
            gameData.bClearReq=null
            gameData.hAdioCoinAdd=[]
            //gameData.BroadBet = []  // 清除改到表演階段

            // 处理压注
            gameData.dtBetRecodePrv=null
            if (this.coluBetCoin(gameData.dtBetRecode)>0) {
                gameData.dtBetRecodeOrg=fmg.clone(gameData.dtBetRecode)
            }
            gameData.dtBetRecode=[]
            if (gameData.bAutoBet) {
                this.BetCoinAry(gameData.dtBetRecodeOrg)
            }
            // 处理筹码
            for (let j in gameLayer.uiCast) {
                for (let i in gameLayer.uiCast[j]) {
                    gameData.poolCast.remove(gameLayer.uiCast[j][i])
                }
                gameLayer.uiCastIdx[j]=0
                gameLayer.uiCast[j]=[]
            }
            //gameData.poolCast.ShowTotalCount()

            gameScene.hideHold()
            gameLayer.stopBlinkWin()
            //gameLayer.updatePlayerNum(0)
            //----->需重新編譯程式碼   CS.UILoadingData.Hide()
            // 重置ui
            for (let i in gameData.dtBetTypeNum) {
                gameLayer.updateBetNumMy(i, 0)
                gameLayer.updateBetNumAll(i, 0)
            }
        }
        else if (state>=1) {
            gameLayer.stopBetTimer()
        }

        // 表演階段
        if (state == 6) {
            gameData.BroadBet=[]
        }
        gameLayer.updateBetBtnState()
    },

    //- 获取下注记录的总钱
    coluBetCoin(ary) {
        let coin=0
        for (let _ in (ary)) {
            let v=ary[_]

            coin=coin + (v.Count || 0)
        }
        return coin
    },

    //- 单个下注
    BetCoin(idx) {
        if (gameData.dtUserBet == null) {
            return
        }
        let data=[]
        data[0]={}
        data[0].BetType=idx
        data[0].Count=gameData.dtUserBet
        return this.BetCoinAry(data)
    },

    //- 数组下注
    BetCoinAry(data) {

        //if gameData.dtBetRecodePrv!=null || gameData.bClearReq then return end
        if (gameData.UserInfo == null) {
            toast.show(gameGlobal.GetLocalizedString("当前不能下注"), 1.5)
            return false
        }
        if (gameData.bIBanker) {
            toast.show(gameGlobal.GetLocalizedString("庄家不能下注"), 1.5)
            return false
        }
        //
        let coin=0
        let tmp=[]
        for (let _ in (data)) {
            let v=data[_]

            coin=coin + v.Count
            if (v.Count>0) {
                tmp[tmp.length]=v
            }
        }

        if (coin<=0) {
            //toast.show("当前下注倍数为0", 1.5)
            return
        }
        if (coin * gameData.dtBetRate<=gameData.UserInfo.Score) {
            this.BJLBetID(tmp)
            gameData.dtBetRecodePrv=data
            return true
        }
        else {
            gameLayer.CloseAutoBet()
            toast.show(gameGlobal.GetLocalizedString("金币不足"), 1)

        }
        return false
    },

    //- 初始化牌面
    initCard(obj, number, color) {
        if (number == null || number == 0) {
            number=0
            color=0
        }
        gameGlobal.SetImageSprite(obj, "", "card_" + number + "_" + color, false)
    },

    //- - 事件处理
    BJLSettingID(data) {
        //console.log("ftest event BJLSettingID")
        fmg.fpack(data)
        gameData.svrData.bjlSettingID=data
        data.BetCount.sort(function (a, b) { return a-b })
        gameData.dtBetRate=data.BetMoney
        gameData.dtBaseBet=data.BetCount
        gameData.dtBetLimt=data.BetMoneyLimit
        gameData.dtBankMax=data.MaxZhuang
        gameData.betlimitmoney=data.betlimitmoney
        gameData.chooseBet=1
        gameLayer.updateBetBtns(data.BetCount)
        gameLayer.updateGameInfo(data.BetRange.ZhuangXian.Min, data.BetRange.ZhuangXian.Max)
        // gameScene.hideHold()
        chartLayer.SetSetting(data.BetRange)
        chartLayer.SetLimit(data.BetRange)
        //gameLayer.uiRoot.recharge.text.string = gameData.betlimitmoney > 0 && "需要携带" + gameData.betlimitmoney.toString()+"元才能下注,请前往充值" || "携带金额不足，请先充值"
    },

    BJLStateID(data) {
        //console.log("ftest event BJLStateID")
        fmg.fpack(data)
        this.SetBetState(data.State)

        if (data.State != 0 && data.State != 6) {
            gameManager.calLoadTime()
        }

        // G.Tool.TableHelper.Print(data)
        // 执行开始动画
        if (data.State == 0) {
            let time=gameData.bMidEnter && data.Time - 1 || data.Time
            gameLayer.beginBetTimer(time)
            gameLayer.updateGameInfoRound()
            gameLayer.SetGameStateImage(2)
            gameLayer.updateCoinInsufficient()
            if (data.Time>=3 && gameData.bFirstState0 != 1) {
                gameLayer.showBetEf(1)
                gameAudio.turnStep(1)
            }
            this.deal()
        }
        else if (data.State == 1) {
            gameManager.calLoadTime()

            gameLayer.showBetEf(2)
            //gameAudio.turnStep(4)
            gameAudio.eStopBetBg()
            gameLayer.stopBetTimer()
        }
        else if (data.State == 6) {
            gameLayer.SetGameStateImage(1)
            gameAudio.eDealVoice()
            this.deal()
        }

        // 屏蔽首次进入可能双次收到此消息
        if (gameData.bFirstState0 == null) {
            gameData.bFirstState0=1
            gameGlobal.NewDelayOnce(function () { gameData.bFirstState0=2 }, 1, "bFirstState0")
            //fmg.delayFunc(function(adt){ gameData.bFirstState0 = 2 }, 1, [])
        }
        gameData.bMidEnter=false
    },

    deal() {
        if (gameData.bDeal) {
            return
        }

        let acc=0
        for (var k in compare.dtOpenPlayer) {
            for (var i=1; i<=2; ++ i) {
                this.dealCard(k, i, acc)
            }
        }
    },

    dealCard(k, i, acc) {
        setTimeout(function () {
            compare.deal(parseInt(k), i)
        }.bind(this), 1000 * 0.15 * acc);
    },

    BJLBroadCastBetID(data) {
        if (gameData.dtBetState == 3) {
            return
        }
        //console.log("ftest event BJLBroadCastBetID")
        fmg.fpack(data)
        // 是否筹码未连续变动（清除行为/第一次进入）
        for (let bk in (data.BroadCastBetArr)) {
            let bv=data.BroadCastBetArr[bk]

            gameLayer.updateBetNumAll(bv.Type, bv.Money)
            gameLayer.ShowBroadCastBetAll(bv.Type, bv.Money)
            let coin=0
            for (let _ in (gameData.BroadBet)) {
                let lv=gameData.BroadBet[_]
                if (bv.Type == lv.Type) {
                    coin=lv.Money;
                    break;
                }
            }
            //gameLayer.ShowLuckyStar(bv.Type,bv.LuckyStar)

            // 其他玩家投注
            //if coin < bv.Money && gameData.dtBetRecodePrv==null then
            if (coin<bv.Money && data.UserID != GameConfig.getUserID()) {
                /*local tmp = bv.Type
                 gameData.hAddCoin[tmp] = gameData.hAddCoin[tmp] || 0
                 if(gameData.hAddCoin[tmp] <= 3 ){
                 gameData.hAddCoin[tmp] = gameData.hAddCoin[tmp] + 1
                 gameAudio.addCoin()
                 gameLayer.animAddCast({{BetType=bv.Type, Count=(bv.Money-coin)/gameData.dtBetRate}}, false, function(){
                 gameData.hAddCoin[tmp] = gameData.hAddCoin[tmp] - 1
                 end, true)
                 end*/
                let CheckBet=require("CheckBet")
                let BetInfo=CheckBet.Init(bv.Money - coin, gameData.dtBaseBet, gameData.dtBetRate)
                let BetData=BetInfo["value"]
                let CountData=BetInfo["count"]
                for (let i=0; i<BetData.length; ++ i) {
                    for (let j=0; j<CountData[i]; ++ j) {
                        gameGlobal.NewDelayOnce(
                            function () {
                                gameLayer.ShowCastBetChip(bv.Type, BetData[i], BetData.length - i, data.UserID)
                            },
                            (Math.random() * 0.5)
                        )
                    }
                }
            }
            // 其他玩家清除操作
            else if (coin>bv.Money) {
                gameLayer.resetBetCast(bv.Type, bv.Money / gameData.dtBetRate)
                gameLayer.ShowClearBetChip(data.UserID)
            }
        }
        gameData.bFirstBroadBet=true
        gameData.BroadBet=fmg.clone(data.BroadCastBetArr)
    },

    BJLGameResultPokerID(data) {
        //console.log("ftest event BJLGameResultPokerID")
        fmg.fpack(data)
        this.SetBetState(1)
        gameData.bFirstState0=2
        gameData.winZuHe=data.ZuHe
        //gameData.dtRstWin = gameData.CompState(data.Poker[1].Number, data.Poker[2].Number)
        if (gameData.bMidEnter == false) {
            //gameAudio.turnStep(4)
            gameAudio.eStopBetBg()
            compare.animOpenCards(data, function () {
                chartLayer.addRst(data, true, data.RoundID)
                //gameLayer.ShowResultPoker(data)
                if (gameData.chShowRst) {
                    //Coroutine by AZLDC >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                    // coroutine.resume(gameData.chShowRst)          
                    gameData.chShowRst();
                    //Coroutine by AZLDC <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
                }
                else {
                    compare.dtOpenCardStep=0
                }
            })
        }
        else {
            gameScene.hold(gameGlobal.GetLocalizedString("请等待新一局游戏开始"), 20)
        }
    },

    BJLGameSceneID(data) {
        //console.log("ftest event BJLGameSceneID")
        fmg.fpack(data)
    },

    BJLGameResultWinID(data) {
        //console.log("ftest event BJLGameResultWinID")
        fmg.fpack(data)
        gameData.breakCoin=0
        gameData.UserInfo.Score=gameData.UserInfo.Score + data.SelfWin
        gameLayer.ShowResultWin(data)
        //Coroutine by AZLDC >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // gameData.chShowRst=coroutine.create(function () {   
        //     //gameLayer.bLockUseCoin = true
        //     gameLayer.hAddUseCoin=gameLayer.hAddUseCoin || [obj=gameLayer.uiRoot.user.coin, now=gameData.UserInfo.Score];
        //     if (compare.dtOpenCardStep != 0) {
        //         coroutine.yield()
        //     }
        //     gameScene.hideHold();
        //     gameData.chShowRst=null;
        //     gameAudio.bgmRst(data.SelfWin>0);
        //     compare.dtOpenCardStep=0;
        //     //gameLayer.bLockUseCoin = false
        // });          
        // coroutine.resume(gameData.chShowRst)      

        function Coroutine(f) {
            var o=f(); // instantiate the coroutine
            o.next(); // execute until the first yield
            return function (x) {
                o.next(x);
            }
        }

        gameData.chShowRst=Coroutine(function* () {
            var obj, now;
            gameLayer.hAddUseCoin=gameLayer.hAddUseCoin || [obj=gameLayer.uiRoot.user.coin, now=gameData.UserInfo.Score];
            if (compare.dtOpenCardStep != 0) {
                yield;
            }
            //gameScene.hideHold();
            gameData.chShowRst=null;
            //gameAudio.bgmRst(data.SelfWin>0);
            compare.dtOpenCardStep=0;
        });
        gameData.chShowRst();
        //Coroutine by AZLDC <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    },

    BJLBetInfoID(data) {
        //console.log("ftest event BJLBetInfoID")
        fmg.fpack(data)
        let coin=0
        for (let _ in (data.BetInfo)) {
            let v=data.BetInfo[_]

            coin=coin + v.Money
            gameLayer.updateBetNumMy(v.Type, v.Money)
            gameData.dtBetRecode[v.Type]=gameData.dtBetRecode[v.Type] || []
            gameData.dtBetRecode[v.Type].BetType=v.Type
            gameData.dtBetRecode[v.Type].Count=v.Money / gameData.dtBetRate + (gameData.dtBetRecode[v.Type].Count || 0)
            //gameLayer.animAddCast([[BetType=v.Type, Count=v.Money/gameData.dtBetRate]], false)
            if (v.Money>0) {
                gameData.bBetted=true
            }

            gameLayer.ShowBroadCastBetMy(v.Type, gameData.dtBetRecode[v.Type].Count * gameData.dtBetRate)
            let CheckBet=require("CheckBet")
            let BetInfo=CheckBet.Init(v.Money - coin, gameData.dtBaseBet, gameData.dtBetRate)
            let BetData=BetInfo["value"]
            let CountData=BetInfo["count"]
            for (let i=1; i<=BetData.length; ++ i) {
                for (let j=1; j<=CountData[i]; ++ j) {
                    gameLayer.ShowCastBetChip(v.Type, BetData[i], BetData.length - i + 1, data.UserID)
                }
            }
        }
        gameData.breakCoin=coin
        gameData.UserInfo.Score=gameData.UserInfo.Score - coin
        gameLayer.uiRoot.user.coin.string=gameLayer.MoneyText(gameData.UserInfo.Score)
        gameLayer.updateBetBtnState()
    },

    BJLBetRetID(data) {
        //console.log("ftest event BJLBetRetID")
        fmg.fpack(data)
        gameData.UserInfo.Score=data.Money
        gameLayer.updateUserCoin(data.Money)
        // if (data.Ret != 0) {
        //     for (let k in (data.BetArr)) {
        //         let v=data.BetArr[k]

        //         gameLayer.ClearBetRetError(v.BetType, v.Count * gameData.dtBetRate, GameConfig.getUserID())
        //     }
        // }

        if (data.Ret == 0) {
            //toast.show("下注成功")
            gameData.bBetted=true
            //gameLayer.animAddCast(data.BetArr, false, null, false)
            for (let _ in (data.BetArr)) {
                let v=data.BetArr[_]

                gameData.dtBetRecode[v.BetType]=gameData.dtBetRecode[v.BetType] || []
                gameData.dtBetRecode[v.BetType].BetType=v.BetType
                gameData.dtBetRecode[v.BetType].Count=v.Count + (gameData.dtBetRecode[v.BetType].Count || 0)
                //gameLayer.updateBetNumMy(v.BetType, gameData.dtBetRecode[v.BetType].Count*gameData.dtBetRate)

                gameLayer.ShowBroadCastBetMy(v.BetType, gameData.dtBetRecode[v.BetType].Count * gameData.dtBetRate)

                let CheckBet=require("CheckBet")
                let Data=CheckBet.Init(v.Count * gameData.dtBetRate, gameData.dtBaseBet, gameData.dtBetRate)
                let BetData=Data.value
                let CountData=Data.count
                let isFirst=true
                for (let i=1; i<=BetData.length; ++ i) {
                    for (let j=1; j<=CountData[i]; ++ j) {
                        if (isFirst == true) {
                            gameLayer.ShowCastBetChip(v.BetType, BetData[i], BetData.length - i, GameConfig.getUserID())
                            isFirst=false
                        }
                        else {
                            gameGlobal.NewDelayOnce(
                                function () {
                                    gameLayer.ShowCastBetChip(v.BetType, BetData[i], BetData.length - i, GameConfig.getUserID())
                                },
                                (Math.random() * 0.5)
                            )
                        }
                    }
                }
                //gameLayer.ShowCastBetChip(v.BetType,v.Count*gameData.dtBetRate,gameData.chooseBet,GameConfig.getUserID())
            }
        }
        else if (data.Ret == - 1) {
            toast.show(gameGlobal.GetLocalizedString("金币不足"));
        }
        else if (data.Ret == - 2) {
            toast.show(gameGlobal.GetLocalizedString("下注类型错误"));
        }
        else if (data.Ret == - 2) {
            toast.show(gameGlobal.GetLocalizedString("庄家不能下注"));
        }
        else if (data.Ret == - 4) {
            toast.show(gameGlobal.GetLocalizedString("总注数超过上限"));
        }
        else if (data.Ret == - 5) {
            toast.show(gameGlobal.GetLocalizedString("不可同时下注庄闲"));
        }
        else if (data.Ret == - 6) {
            let MinCarryingScore=gameData.betlimitmoney;
            toast.show(gameGlobal.GetLocalizedString("前往充值后再来").replace("####", MinCarryingScore));
        }
        gameData.dtBetRecodePrv=null;
        gameLayer.updateBetBtnState()
    },

    BJLShangZhuangRetID(data) {
        //console.log("ftest event BJLShangZhuangRetID")
        fmg.fpack(data)
        if (data.ret == 1) {
            toast.show(gameGlobal.GetLocalizedString("下庄成功"));
            gameData.bReqDownBanker=true
        }
        else if (data.ret == 0) {

            toast.show(gameGlobal.GetLocalizedString("上庄成功"));
            gameData.bReqUpBanker=true
            gameLayer.showBankerBubble(gameData.dtBankerReqNum + 1, true)
        }
        else if (data.ret == - 1) {

            toast.show(gameGlobal.GetLocalizedString("不足上庄"));  
        }
        else if (data.ret == - 2) {

            toast.show(gameGlobal.GetLocalizedString("已在列表")); 
            gameData.bReqUpBanker=true
        }
        gameLayer.updateBetBtnState()
    },

    BJLShangZhuangListInfoID(data) {
        //console.log("ftest event BJLShangZhuangListInfoID")
        fmg.fpack(data)
        for (let i=1; i<=data.UserInfo.length; ++ i) {
            if (data.UserInfo[i].UserID == GameConfig.getUserID()) {
                gameData.bReqUpBanker=true
                gameLayer.updateBetBtnState()
                break
            }
        }
        gameData.dtBankerReqNum=data.UserInfo.length
        gameLayer.showBankerBubble(gameData.dtBankerReqNum)
        //gameLayer.updatePlayerNum(data.UserInfo.length)
    },

    BJLZhuangInfoID(data) {
        //console.log("ftest event BJLZhuangInfoID")
        fmg.fpack(data)
        gameData.bIBanker=data.UserID == GameConfig.getUserID()
        gameData.svrData.BJLZhuangInfoID=data
        gameLayer.updateBanker(data)
        gameLayer.updateBetBtnState()
    },

    BJLResultCardListID(data) {
        //console.log("ftest event BJLResultCardListID")
        if (data.CardList == null)
            return;

        fmg.fpack(data)
        fmg.revertTable(data.CardList)
        for (let i=0; i<data.CardList.length; ++ i) {
            chartLayer.addRst(data.CardList[i], false, data.CardList[i].RoundID)
        }
    },

    BJLBetClearRetID(data) {
        //console.log("ftest event BJLBetClearRetID")
        fmg.fpack(data)
        gameData.UserInfo.Score=data.Money
        gameLayer.updateUserCoin(data.Money)
        if (data.Ret == 0) {
            toast.show("退还押注成功")
            gameData.bBetted=false
            gameLayer.updateBetBtnState()
            gameData.dtBetRecode=[]
            for (let i=1; i<=gameData.dtBetTypeNum; ++ i) {
                gameLayer.updateBetNumMy(i, 0)
            }
        }
        else {
            toast.show("清理次数超过上限，清理失败")
        }
        gameData.bClearReq=null
    },

    //大富豪列表的消息
    BJLRichestListID(data) {
        gameLayer.SetUserList(data)
    },

    //明燈玩家的消息
    BJLLuckyStarListID(data) {
        gameLayer.SetUserStar(data)
    },

    //龙虎斗本局局数
    BJLRoundID(data) {
        let nodata=gameData.resultRound == null
        gameData.resultRound={}
        gameData.resultRound.ZhuangWin=data.ZhuangWin
        gameData.resultRound.XianWin=data.XianWin
        gameData.resultRound.HeWin=data.HeWin
        gameData.resultRound.RoundID=data.RoundID
        if (nodata) {
            gameLayer.updateGameInfoRound()
        }
    },

    //- - 发送请求
    BJLBetID(data) {
        //console.log("ftest event BJLBetID")
        //G.Proto.BClass.GameRoom
        let param={}
        param.BetArr=data
        networkQueue.SendMsg(BClass.Game, Game_BJL.BJLBetID, param)
    },

    BJLShangZhuangID(bUp) {
        //console.log("ftest event BJLShangZhuangID")
        fmg.fpack(bUp)
        let param={}
        param.IsShangZhuang=bUp
        networkQueue.SendMsg(BClass.Game, Game_BJL.BJLShangZhuangID, param)
    },

    BJLGetShangZhuangListID() {
        //console.log("ftest event BJLGetShangZhuangListID")
        networkQueue.SendMsg(BClass.Game, Game_BJL.BJLGetShangZhuangListID, null)
    },

    BJLBetClearID() {
        //console.log("ftest event BJLBetClearID")
        networkQueue.SendMsg(BClass.Game, Game_BJL.BJLBetClearID, null)
    },

    UserActionCommitID() {
        //console.log("ftest event UserActionCommitID")
        let param={}
        param.ActionName="betend"
        networkQueue.SendMsg(BClass.Game, Game_BJL.UserActionCommitID, param)
    },
};

module.exports=GameControl
