var G=require("Global")
var GameG=require("GameGlobal")
var SoundManager=require("SoundManager");
var FileManager=require("FileManager")
var toast=require("Toast")
var GameInfo=require("GameInfo")
var gameConfig=require("GameConfig")
var gameControl=null
var gameData=null
var gameAudio=null
var uiuser=null
var uibet=null
var fmg=null
var gameManager=null

var bit

var GameLayer={
    extends : cc.Component,

    //-
    init() {
        gameManager=require("GameManager")
        gameControl=require("GameControl")
        gameData=require("GameData")
        gameAudio=require("GameAudio")
        uiuser=require("UIUser")
        uibet=require("UIBet")
        fmg=require("FFunction")
        bit=require("BitHelper")

        this.initData()
        this.initUi()
    },

    //-
    onExit() {
    },

    //-
    initData() {
        this.uiChipBtn=[]                         // 下注倍数按钮
        this.bLockUseCoin=false                   // 是否不更新金币显示
        this.hTimer="tmhBeginBet"        // 倒计时进度条
        this.hCastAnim=[]                         // 下筹码动画保存
        this.hBlinkWinBet=[]                      // 下注区域赢的显示
        // 筹码列表,筹码重复使用索引
        this.uiCast=[]
        this.uiCastIdx=[]
        for (let i=1; i<=gameData.dtBetTypeNum + 1; ++ i) {
            this.uiCast[i]=[]
            this.uiCastIdx[i]=0
        }

        // 筹码落点区域
        this.dtBetRect=[]

        // 籌碼備份數量
        this.betMax=[70, //LM 庄
            70, //RM 閒
            60, //MM 和
            40, //LU 庄天王
            40,	//RU 閒天王
            40, //LD 庄對子
            40, //RD 閒對子
            40, //LM 庄順子
            40, //RM 閒順子
            40,]//MD 同點和				
    },

    //-
    initUi() {
        // 获取layer
        let canvas=cc.find("Canvas/GameLayer")
        let root=cc.find("Canvas/GameLayer/GameLayer")
        this.uiRoot={}
        this.uiRoot.root=root
        let uiRoot=this.uiRoot

        uiRoot.desk=cc.find("desk", root)

        // 查找按钮
        let findBtn=function (name, func) {
            let btn=cc.find(name, root).getComponent(cc.Button)
            btn.node.on('click', function () {
                GameG.PlayGameSound("se_click")
                func()
            })
            return btn
        }

        uiRoot.zhungPos=GameG.LocalConvertWorldPointAR(cc.find("Compare/bg/coin", root))

        uiRoot.userStar=new uiuser(cc.find("otherUser/Star", root))
        uiRoot.userList=[]
        for (let i=1; i<=5; ++ i) {
            uiRoot.userList[i]=new uiuser(cc.find("otherUser/No" + i, root))
        }

        uiRoot.betList=[]
        for (let i=1; i<=10; ++ i) {
            uiRoot.betList[i]=new uibet(i, cc.find("BetGroup/ButtonBet" + i, root), cc.find("BetGroupFront/ButtonBet" + i, root))
            uiRoot.betList[i].SetCallback(function (index) {
                if (gameControl.BetCoin(index) == true) {
                    // if(gameData.dtBetState == 0){
                    // 	let num = gameData.chooseMoney
                    // 	let chipIndex = gameData.chooseBet
                    // 	let targetPos = GameG.LocalConvertWorldPointAR(uiRoot.betBtn.chip[gameData.chooseBet].root);
                    // 	uiRoot.betList[index].ShowCastBetChip(num,chipIndex,true,targetPos,GameG.getUserID())
                    // }
                }
            })
        }

        uiRoot.stateImage=cc.find("StateImage", root).getComponent(cc.Sprite)
        this.SetGameStateImage(5)

        let self=this

        //menu
        uiRoot.menu={}

        uiRoot.menu.root=cc.find("menu", root)

        let Referrer=gameConfig.getReferrer()
        uiRoot.menu.exit=findBtn("exit", function () {
            gameAudio.btnClick()
            GameG.ExitGame()
        })
        if (Referrer == "0") {
            uiRoot.menu.exit.node.active=false
            uiRoot.menu.root.position=uiRoot.menu.exit.node.position
        }

        uiRoot.menu.setting=findBtn("menu/setting", function () {
            gameAudio.btnClick()
            uiRoot.setting.root.active=(true)
        })
        uiRoot.menu.description=findBtn("menu/description", function () {
            gameAudio.btnClick()
            self.uiRoot.description.root.active=(true)
            self.updateDescription()
        })

        //setting
        uiRoot.setting={}
        uiRoot.setting.root=cc.find("Setting", root)
        uiRoot.setting.bgmOpenToggle=cc.find("Setting/Bgm/OpenToggle", root).getComponent(cc.Toggle)
        uiRoot.setting.bgmCloseToggle=cc.find("Setting/Bgm/CloseToggle", root).getComponent(cc.Toggle)
        uiRoot.setting.soundOpenToggle=cc.find("Setting/Sound/OpenToggle", root).getComponent(cc.Toggle)
        uiRoot.setting.soundCloseToggle=cc.find("Setting/Sound/CloseToggle", root).getComponent(cc.Toggle)
        uiRoot.setting.versionText=cc.find("Setting/VersionText", root).getComponent(cc.Label)

        uiRoot.setting.root.active=true;

        let SetBgm=function (value) {
            SoundManager.SetMusic(value)
        }

        uiRoot.setting.settingCloseBG=findBtn("Setting/CloseBG", function () {
            uiRoot.setting.root.active=(false)
        })
        uiRoot.setting.settingCloseButton=findBtn("Setting/CloseButton", function () {
            gameAudio.btnClick()
            uiRoot.setting.root.active=(false)
        })

        uiRoot.setting.bgmOpenToggle.isChecked=SoundManager.GetMusic()
        uiRoot.setting.bgmOpenToggle.node.on('toggle', function (toggle) {
            SetBgm(true)
            gameAudio.btnClick()
        })

        uiRoot.setting.bgmCloseToggle.isChecked= ! SoundManager.GetMusic()
        uiRoot.setting.bgmCloseToggle.node.on('toggle', function (toggle) {
            SetBgm(false)
            gameAudio.btnClick()
        })

        let SetSound=function (value) {
            SoundManager.SetSound(value)
        }

        uiRoot.setting.soundOpenToggle.isChecked=SoundManager.GetSound()
        uiRoot.setting.soundOpenToggle.node.on('toggle', function (toggle) {
            SetSound(true)
            gameAudio.btnClick()
        })

        uiRoot.setting.soundCloseToggle.isChecked= ! SoundManager.GetSound()
        uiRoot.setting.soundCloseToggle.node.on('toggle', function (toggle) {
            SetSound(false)
            gameAudio.btnClick()
        })

        uiRoot.setting.root.active=false;

        // 版號
        cc.find("Setting/VersionText", root).getComponent(cc.Label).string="V." + GameG.GetGameVersion()

        //description
        uiRoot.description={}
        uiRoot.description.root=cc.find("Description", root)
        uiRoot.description.text=cc.find("Description/ScrollRect/Text", root).getComponent(cc.RichText)
        uiRoot.description.closeBG=findBtn("Description/CloseBG", function () {
            uiRoot.description.root.active=(false)
            window.isShowHelp = true
        })
        uiRoot.description.closeButton=findBtn("Description/CloseButton", function () {
            gameAudio.btnClick()
            uiRoot.description.root.active=(false)
            window.isShowHelp = true
        })

        if (window.isShowHelp == null){
            uiRoot.description.root.active=(true)
            this.updateDescription()
        }

        uiRoot.road={}
        uiRoot.road.root=cc.find("_chartLayer", root)
        uiRoot.road.root.active=(false)

        //充值訊息
        uiRoot.recharge={}
        uiRoot.recharge.root=cc.find("Recharge", root)
        uiRoot.recharge.text=cc.find("Recharge/Text", root).getComponent(cc.Label)
        uiRoot.recharge.root.active=(false)

        // gameInfo
        uiRoot.gameInfo={}
        uiRoot.gameInfo.round=cc.find("gameInfo/roundTxt", root).getComponent(cc.RichText)
        uiRoot.gameInfo.min=cc.find("gameInfo/min", root).getComponent(cc.Label)
        uiRoot.gameInfo.max=cc.find("gameInfo/max", root).getComponent(cc.Label)
        uiRoot.gameInfo.roadToggle=cc.find("gameInfo/RoadButton", root).getComponent(cc.Toggle)
        uiRoot.gameInfo.roadArrow=cc.find("gameInfo/RoadButton/Arrow", root)
        uiRoot.gameInfo.roadButton=findBtn("gameInfo/RoadButton", function () {
            gameAudio.btnClick()
            if (uiRoot.gameInfo.roadArrow.scaleX == 1) {
                uiRoot.gameInfo.roadButton.node.position=cc.v2(906, 0)
                uiRoot.gameInfo.roadArrow.scaleX= - 1
                uiRoot.road.root.active=(true)
            }
            else {
                uiRoot.gameInfo.roadButton.node.position=cc.v2(157, 0)
                uiRoot.gameInfo.roadArrow.scaleX=1
                uiRoot.road.root.active=(false)
            }
        })

        // countdown
        uiRoot.countdown={}
        uiRoot.countdown.root=cc.find("countdown", root)
        uiRoot.countdown.frame=cc.find("countdown/frame", root).getComponent(cc.Sprite)
        uiRoot.countdown.circle=cc.find("countdown/circle", root).getComponent(cc.Sprite)
        uiRoot.countdown.progressBar=cc.find("countdown/circle", root).getComponent(cc.ProgressBar)
        uiRoot.countdown.time=cc.find("countdown/time", root).getComponent("TextControl")
        uiRoot.countdown.countdownSequence=null
        uiRoot.countdown.root.active=(false)


        uiRoot.AnnAnchorPos=cc.find("public/AnnAnchorPos", canvas)

        uiRoot.timer={}
        uiRoot.timer.root=cc.find("time/time", root)
        uiRoot.timer.syting=cc.find("time/time/timer", root).getComponent("TextControl")
        uiRoot.timer.urgent=cc.find("time/time/urgent", root).getComponent(cc.Sprite)
        uiRoot.timer.time_open=cc.find("time/time_open", root)
        uiRoot.timer.effect=cc.find("_beginTimer", root).getComponent(cc.Sprite)
        uiRoot.timer.root.active=(false)
        uiRoot.timer.time_open.active=(false)
        uiRoot.timer.urgent.node.active=(false)

        let repeatTween=cc.tween(uiRoot.timer.urgent.node)
        let tween=cc.tween(repeatTween)
                    .to(0.2, { opacity : 0 })
                    .delay(0.3)
                    .to(0.1, { opacity : 255 })
        repeatTween.repeat(9999999999, tween).start()

        uiRoot.betUser=cc.find("downMune/users", root)
        this.betUserStartPos=uiRoot.betUser.position

        //
        uiRoot.bet={}
        uiRoot.bet.cast={}
        uiRoot.bet.cast.root=cc.find("cast", root)
        uiRoot.bet.chip=[]
        uiRoot.bet.num=[]

        uiRoot.betBtn={}
        uiRoot.betBtn.betBtn=cc.find("downMune/betBtn", root)
        uiRoot.betBtn.scroll=cc.find("downMune/betBtn/scroll/Viewport/Content", root)

        uiRoot.pfChip=cc.find("PfChip", canvas)

        uiRoot.betBtn.autoImg=cc.find("downMune/_betAuto", root).getComponent(cc.Sprite)
        uiRoot.betBtn.auto=findBtn("downMune/_betAuto", function () {
            gameAudio.btnClick()
            self.SetAutoBet(true)
        })

        uiRoot.betBtn.auto.node.active=(true)

        uiRoot.betBtn.autoNoImg=cc.find("downMune/_betAutoNo", root).getComponent(cc.Sprite)
        uiRoot.betBtn.autoNo=findBtn("downMune/_betAutoNo", function () {
            gameAudio.btnClick()
            self.SetAutoBet(false)
        })
        uiRoot.betBtn.autoNo.node.active=(false)

        let offsetX=0
        let offsetY=- 15
        let subWidth=100
        let subHeight=100

        for (let i=1; i<=10; ++ i) {
            uiRoot.bet.num[i]={}
            uiRoot.bet.num[i].all=cc.find("BetGroupFront/ButtonBet" + i + "/TextAll", root).getComponent(cc.Label)
            uiRoot.bet.num[i].my=cc.find("BetGroupFront/ButtonBet" + i + "/TextMy", root).getComponent(cc.Label)
            uiRoot.bet.num[i].efWin=cc.find("BetGroup/ButtonBet" + i + "/blink", root).getComponent(cc.Sprite)
            uiRoot.bet.num[i].all.string="0"
            uiRoot.bet.num[i].my.string="0"
            uiRoot.bet.num[i].efWin.node.active=(false)

            let tmp=i
            uiRoot.bet.chip[i]=cc.find("BetGroup/ButtonBet" + i, root).getComponent(cc.Button)
            uiRoot.bet.chip[i].node.on('click', function () {

            })

            this.dtBetRect[i]=fmg.ObjToRect(uiRoot.bet.chip[i], offsetX, offsetY, subWidth, subHeight)
        }

        uiRoot.bet.continue=findBtn("downMune/continue", function () {
            gameAudio.btnClick()
            gameControl.BetCoinAry(gameData.dtBetRecodeOrg)
        })

        //
        uiRoot.user={}
        uiRoot.user.root=cc.find("downMune/userInfo", root)
        uiRoot.user.head=cc.find("downMune/userInfo/head", root).getComponent(cc.Sprite)
        uiRoot.user.name=cc.find("downMune/userInfo/name", root).getComponent(cc.Label)
        uiRoot.user.coin=cc.find("downMune/userInfo/coin", root).getComponent(cc.Label)
        uiRoot.user.addcoin=cc.find("downMune/userInfo/addcoin", root).getComponent("TextControl")
        uiRoot.user.subcoin=cc.find("downMune/userInfo/subcoin", root).getComponent("TextControl")
        uiRoot.user.root.active=(false)
        uiRoot.user.addcoin.node.active=(false)
        uiRoot.user.subcoin.node.active=(false)

        uiRoot.betSkeleton=cc.find("betSkeleton", root).getComponent(sp.Skeleton)
        uiRoot.betSkeleton.node.active=(false)
    },


    //設置遊戲狀態
    SetGameStateImage(index) {
        if (index == null) {
            this.uiRoot.stateImage.active=(false)
        }
        else {
            this.uiRoot.stateImage.active=(true)
            GameG.SetImageSprite(this.uiRoot.stateImage, "", "state_" + index, true)
        }
    },

    //設置自動下注
    SetAutoBet(value) {
        gameData.bAutoBet=value
        this.uiRoot.betBtn.auto.node.active=(! value)
        this.uiRoot.betBtn.autoNo.node.active=(value)
        if (value == true)
            toast.show(GameG.GetLocalizedString("您已经开启自动下注"));
        else
            toast.show(GameG.GetLocalizedString("您已经取消自动下注"));
    },

    CloseAutoBet() {
        gameData.bAutoBet=false;
        this.uiRoot.betBtn.auto.node.active=(true)
        this.uiRoot.betBtn.autoNo.node.active=(false)
    },

    //- 设置限红
    updateGameInfo(min, max) {
        this.uiRoot.gameInfo.min.string=GameG.GetLocalizedString("最小").replace("####", this.MoneyText(min));
        this.uiRoot.gameInfo.max.string=GameG.GetLocalizedString("最大").replace("####", this.MoneyText(max));
    },

    //- 更新第幾局
    updateGameInfoRound() {
        if (gameData.resultRound == null) {
            this.uiRoot.gameInfo.round.string=""
        }
        else {
            let round=gameData.resultRound.RoundID + 1
            if (round>30)
                this.uiRoot.gameInfo.round.string=GameG.GetLocalizedString("局数").replace("####", "1");
            else
                this.uiRoot.gameInfo.round.string=GameG.GetLocalizedString("局数").replace("####", round.toString());
        }
    },

    //- 设置游戏说明
    updateDescription() {
        let self=this

        let fileName=GameInfo.GetGamePName(gameManager.getGameId())
        let urlData=window.location.search.substring(1);
        if (urlData == null || urlData == "") {
            FileManager.LoadFile(true, "Txt", fileName, cc.TextAsset, (err, data)=>{
                if(err) {
                    return
                }

                let descriptionText=self.uiRoot.description.text
                descriptionText.string=data.text
        })
        }
        else {
            cc.loader.load({ url : fileName + ".txt?=" + Math.random().toString(), type : cc.TextAsset }, function (err, ret) {
                if (err) {
                    console.error(err);
                    return;
                }

                let descriptionText=self.uiRoot.description.text
                descriptionText.string=ret
            })
        }
    },

    //- 设置玩家信息
    updateUserInfo(bEnter, data) {
        if (bEnter && data.UserID == GameG.getUserID()) {
            this.uiRoot.user.root.active=(true)
            this.updateUserCoin(data.Score)
            if (gameData.ShowID == false) {
                this.uiRoot.user.name.string="" + data.UserID
            }
            else {
                this.uiRoot.user.name.string="ID:" + data.UserID
            }
            //uiUserPic.ResetSpriteByName(this.uiRoot.user.head, (data.FaceID).toString())
        }
    },

    //- 设置玩家金币
    updateUserCoin(num) {
        if (gameData.UserInfo) {
            //num = num || gameData.UserInfo.Score
            gameData.UserInfo.Score=num
        }
        if (this.bLockUseCoin != null) {
            this.uiRoot.user.coin.string=this.MoneyText(num || 0)
        }

    },

    //- 显示充值讯息
    updateCoinInsufficient() {
        if (gameData.betlimitmoney != null && gameData.bBetted != null) {
            let insufficient=gameData.UserInfo.Score<gameData.betlimitmoney * 100
            this.uiRoot.recharge.root.active=(insufficient)
        }
    },

    //- 更新下注的按钮
    updateBetBtns(data) {
        gameData.betCount=data

        let self=this
        this.uiRoot.betBtn.chip=[]
        for (let i in data) {
            let index=parseInt(i) + 1 //lua 轉 javascript 初始值不同
            let cfg=gameData.dtBaseBet[i]
            let cls=cc.instantiate(this.uiRoot.pfChip)
            let bet=data[i]
            if (gameData.chooseMoney == null) {
                gameData.chooseMoney=bet * gameData.dtBetRate
            }
            if (cls == null) {
                return
            }
            cls.parent=(this.uiRoot.betBtn.scroll)
            cls.scale=1
            this.uiRoot.betBtn.chip[index]={}
            this.uiRoot.betBtn.chip[index].root=cls
            this.uiRoot.betBtn.chip[index].root.active=(true)
            this.uiRoot.betBtn.chip[index].blink=cc.find("btn/blink", cls).getComponent(cc.Sprite)
            this.uiRoot.betBtn.chip[index].btn=cc.find("btn", cls).getComponent(cc.Button)
            this.uiRoot.betBtn.chip[index].bet=cc.find("bet", cls).getComponent(cc.Label)
            this.uiRoot.betBtn.chip[index].betValue=bet
            let buttomPicIndex=index
            if (index>8) {
                buttomPicIndex=8
            }
            GameG.SetImageSprite(cc.find("btn", cls).getComponent(cc.Sprite), "", "cast" + (buttomPicIndex).toString() + "_1", false)
            this.uiRoot.betBtn.chip[index].bet.string=this.MoneyText(bet * gameData.dtBetRate)
            this.uiRoot.betBtn.chip[index].btn.node.on('click', function () {
                GameG.PlayGameSound("se_click")
                gameAudio.btnClick()
                self.setUserBet(bet, index)
            })
        }
        this.setUserBet(data[0], 1)
    },

    //- 设置下注倍数
    setUserBet(num, index) {
        gameData.chooseBet=index
        gameData.chooseMoney=num * gameData.dtBetRate

        if (num == null) {
            return
        }
        gameData.dtUserBet=num
        for (let j in (this.uiRoot.betBtn.chip)) {
            this.uiRoot.betBtn.chip[j].blink.node.active=(index == j)
            let obj=this.uiRoot.betBtn.chip[j].root
            if (index == j) {
                obj.scale=1.1
                obj.width=124 * 1.05
                obj.height=72
            }
            else {
                obj.scale=1
                obj.width=124
                obj.height=72
            }
            obj.parent=(this.uiRoot.root)
            obj.parent=(this.uiRoot.betBtn.scroll)
        }
    },

    //- 下注倒计时
    beginBetTimer(tm, call) {
        this.stopBetTimer()

        // 扣掉載入場景花費的時間
        tm=tm - gameManager.calLoadTime()

        this.uiRoot.countdown.root.active=(true)
        let remainingTime=tm //剩餘時間
        let alertSec=3 	//開始警報時間
        let alertInterval=1.1  //警報間隔
        let red=cc.Color.RED

        let self=this
        this.uiRoot.countdown.countdownSequence=GameG.StartCountDown(this.uiRoot.desk, 0.1, function (dt) {
            remainingTime=remainingTime - 0.1
            self.uiRoot.countdown.progressBar.progress=remainingTime / tm
            self.uiRoot.countdown.time.string=Math.ceil(remainingTime).toString()

            if (remainingTime<=alertSec) {
                if (alertInterval>1) {
                    gameAudio.ePlayCountdown()
                    alertInterval=0
                    self.uiRoot.countdown.frame.node.color=red
                    self.uiRoot.countdown.circle.node.color=red
                    self.uiRoot.countdown.time.node.color=red
                    self.uiRoot.countdown.time.node.scale=1

                    var sqs=GameG.NewTween(self.uiRoot.countdown.time.node)
                    sqs.to(0.4, { scale : 1.4 })
                    sqs.to(0.4, { scale : 1 })
                    sqs.delay(0.1)
                    sqs.start()
                }
                alertInterval=alertInterval + 0.1
            }
            if (remainingTime<=0) {
                gameControl.UserActionCommitID()
                self.stopBetTimer()
            }
        })
    },

    //- 停止下注倒计时
    stopBetTimer() {
        let white=cc.Color.WHITE
        if (this.uiRoot.countdown.countdownSequence != null) {
            this.uiRoot.countdown.countdownSequence.stop()
            this.uiRoot.countdown.countdownSequence=null
        }

        this.uiRoot.countdown.active=(false)
        this.uiRoot.countdown.frame.node.color=white
        this.uiRoot.countdown.circle.node.color=white
        this.uiRoot.countdown.time.node.color=white
        this.uiRoot.countdown.time.node.scale=1
        this.uiRoot.countdown.root.active=(false)
    },

    //- 更新庄家信息
    updateBanker(data) {
        this.updateBetBtnState()
    },

    //- 添加注
    animAddCast(data, noAnim, call, bOther) {
        let self=this
        let max=100
        let len=5
        let allNum=0
        for (let _ in (data)) {
            let v=data[_]

            let vec=[]
            let idx=v.BetType
            let num=v.Count
            for (let i=gameData.dtBaseBet.length; i<=1; ++ i) {
                if (gameData.dtBaseBet[i] && gameData.dtBaseBet[i]>0) {
                    vec[i]=Math.floor(num / gameData.dtBaseBet[i])
                    num=num % gameData.dtBaseBet[i]
                }
                else {
                    vec[i]=0
                }
            }
            for (let i=1; i<=vec.length; ++ i) {
                // 获取筹码
                for (let j=1; j<=vec[i]; ++ j) {
                    let tmp=null

                    if ((this.uiCast[idx].length)>=this.betMax[idx]) {
                        //this.uiCastIdx[idx] = math.fmod(this.uiCastIdx[idx]+1, this.betMax[idx])+1
                        this.uiCastIdx[idx]=this.uiCastIdx[idx] + 1 % this.betMax[idx] + 1
                        tmp=this.uiCast[idx][this.uiCastIdx[idx]]
                        SetCastData(tmp, i)
                    }
                    else {
                        tmp=gameData.poolCast.get([cfg=gameData.dtBaseBet[i]])
                        this.uiCast[idx][(this.uiCast[idx].length) + 1]=tmp
                    }
                    // 执行动画
                    let over=fmg.randInRect(this.dtBetRect[idx])
                    if (noAnim) {
                        tmp.position=over
                    }
                    else {
                        // 初始化动画位置
                        let beg=null
                        if (bOther) {
                            beg=this.uiRoot.betUser.position
                            over=fmg.randInRect(this.dtBetRect[idx])
                        }
                        else {
                            beg=fmg.convertPosN2N(this.uiRoot.betBtn.chip[i].btn, this.uiRoot.bet.cast.root, fmg.v3(0, 0, 0))
                        }

                        // 开始动画
                        if (this.hCastAnim[tmp]) {
                            this.hCastAnim[tmp].stop()
                        }
                        tmp.position=beg
                        var sqs=GameG.NewTween(tmp)
                        //sqs.easing(cc.easeSineOut ())
                        this.hCastAnim[tmp]=sqs
                        sqs.delay(Math.min(allNum * 0.2, 1))
                        sqs.call(function () {
                            //tmp:SetSiblingIndex(max*11)
                        })
                        sqs.by(0.5, { position : over })

                        fmg.argFuncAnim(sqs, function (adt) {
                            if (adt[1]) {
                                adt[1]()
                            }
                            slef.hCastAnim[adt[2]]=null
                        }, [call, tmp])
                        sqs.start()
                        allNum=allNum + 1
                    }
                }
            }
        }
        if (noAnim && call) {
            call()
        }
    },

    //- 清除注
    resetBetCast(idx, num) {
        let castmax=40
        let coinmax=gameData.dtBaseBet[gameData.dtBaseBet] * castmax.length
        // 获取筹码数组
        let vec=[]
        let cast=0
        num=Math.min(num, coinmax)
        for (let i=gameData.dtBaseBet.length; i<=1; ++ i) {
            vec[i]=Math.floor(num / gameData.dtBaseBet[i])
            num=num % gameData.dtBaseBet[i]
        }
        // 按数量改变筹码
        for (let j=1; j<=Math.min(vec.length, castmax); ++ j) {
            for (let i=1; i<=vec[j]; ++ i) {
                cast=cast + 1
                if (cast<=castmax) {
                    // 筹码不足，手动添加
                    this.uiCast[idx]=this.uiCast[idx] || []
                    if ((this.uiCast[idx].length)<cast) {
                        tmp=gameData.poolCast.get([cfg=gameData.dtBaseBet[j]])
                        this.uiCast[idx][(this.uiCast[idx].length) + 1]=tmp
                    }
                    let obj=this.uiCast[idx][cast]
                    obj.position=fmg.randInRect(this.dtBetRect[idx])
                }
                // 修正沒有重新指定籌碼的問題
                SetCastData(this.uiCast[idx][cast], j)
            }
        }
        // 删除多余的筹码
        for (let i=cast + 1; i<=(this.uiCast[idx]).length; ++ i) {
            gameData.poolCast.remove(this.uiCast[idx][i])
            //fmg.Destroy(this.uiCast[idx][i])
            this.uiCast[idx][i]=null
        }
    },

    //- 更新自己底注
    updateBetNumMy(idx, num) {
        if (this.uiRoot.bet.num[idx] != null)
            this.uiRoot.bet.num[idx].my.string=this.MoneyText(num || 0)
    },

    //- 更新桌面底注
    updateBetNumAll(idx, num) {
        if (idx && num) {
            if (this.uiRoot.bet.num[idx] != null)
                this.uiRoot.bet.num[idx].all.string=this.MoneyText(num, 0)
            if (num == 0) {
                for (let _ in (this.uiCast[idx])) {
                    let v=this.uiCast[idx][_]
                    gameData.poolCast.remove(v)
                }
                this.uiCast[idx]=[]
            }
        }
    },

    //- 更新下注功能按钮的状态
    updateBetBtnState() {
        let score=gameData.UserInfo.Score
        let recode=gameControl.coluBetCoin(gameData.dtBetRecodeOrg) * gameData.dtBetRate
        let allowBet=(gameData.bIBanker != null) && gameData.dtBetState == 0 //and score>=gameData.dtUserBet
        if (this.uiChipBtn) {
            for (let i=1; i<=gameData.dtBaseBet.length; ++ i) {
                //this.uiRoot.betBtn.chip[i].btn.interactable = allowBet && score>=gameData.dtBaseBet[i]*gameData.dtBetRate
                let sufficient=score>=gameData.dtBaseBet[i - 1] * gameData.dtBetRate
                this.uiRoot.betBtn.chip[i].btn.interactable=allowBet && sufficient
                if (! sufficient && gameData.chooseBet>=i) {
                    let index=0
                    if (i - 1<=0)
                        index=1
                    else
                        index=i - 1
                    GameLayer.setUserBet(gameData.betCount[index - 1], index)
                }
            }
        }

        for (let i=1; i<=10; ++ i) {
            this.uiRoot.bet.chip[i].interactable=allowBet
        }

        this.uiRoot.betBtn.auto.interactable=allowBet
        this.uiRoot.betBtn.autoNo.interactable=allowBet

        this.uiRoot.bet.continue.interactable=allowBet && recode>0 && score>=recode && (gameData.bBetted != null)
    },

    //- 显示上庄申请气泡
    showBankerBubble(num, bShow) {
    },

    //- 显示下注特效：0:无；1:开始；2:结束；
    showBetEf(state) {
        let ani=this.uiRoot.betSkeleton
        let name=""
        if (state == 1)
            name="start_bet"
        else
            name="end_bet"
        ani.setAnimation(0, name, false)
        ani.node.active=(true)
        setTimeout(function () {
            if (ani.node != null && ani.node.parent != null)
                ani.node.active=(false)
        }.bind(this), 1000 * 2.3);

        // this.uiRoot.start.root.active =(state == 1)
        // this.uiRoot.stop.root.active =(state == 2)

        // if (this.uiRoot.start.tween)
        // 	this.uiRoot.start.tween.stop()

        // if (this.uiRoot.stop.tween)
        // 	this.uiRoot.stop.tween.stop()			

        // let obj = null
        // var sqs = null
        // if(state == 1 ){
        // 	obj = this.uiRoot.start.obj
        // 	sqs = GameG.NewTween(obj)
        // 	this.uiRoot.start.tween = sqs
        // } 
        // else if(state == 2 ){
        // 	obj = this.uiRoot.stop.obj
        // 	sqs = GameG.NewTween(obj)
        // 	this.uiRoot.stop.tween = sqs
        // }

        // if (obj)
        // {
        // 	obj.position = cc.v3(0,0,0)
        // 	obj.opacity = 0
        // 	obj.scale = 2

        // 	sqs.to(0.2, {opacity: 255, scale: 1})
        // 	sqs.to(0.25, {scale: 1.2})
        // 	sqs.to(0.25, {scale: 0.9})
        // 	sqs.to(0.25, {scale: 1.1})
        // 	sqs.to(0.25, {scale: 1})
        // 	sqs.delay(0.2)
        // 	sqs.to(0.7, {position: cc.v3(2000,0,0)})
        // 	sqs.start()
        // }
    },

    //- 更新下注按钮的弧形位置
    UpdateCurvedBetBtn(pos) {
        let area=fmg.rect(0, - 298, 550, 151)
        let center=fmg.v3(0, - 555, 0)
        let radius=550
        let chipSz=fmg.v2(127, 139)
        let minX=- (area.width / 2 + chipSz.x / 2)
        let maxX=(area.width / 2 + chipSz.x / 2 + chipSz.x)
        let scroll=this.uiRoot.bet.chip.scroll
        let content=this.uiRoot.betBtn.scroll
        for (let _ in (this.uiChipBtn)) {
            let v=this.uiChipBtn[_]

            let pos=fmg.convertPosN2N(v.root, scroll, fmg.v3(0, 0, 0))
            if (pos.x>=minX && pos.x<=maxX && Math.abs(pos.x)<=radius) {
                pos.y=Math.max(Math.min(pos.y, - 141), - 5)
                pos.y=Math.sqrt(radius * radius - (pos.x - center.x) * (pos.x - center.x)) + center.y
                pos=fmg.convertPosN2N(scroll, content, pos)
                v.root.position=pos
            }
        }
    },

    //- 设置玩家人数
    updatePlayerNum(num) {
    },

    //- 开始赢家闪烁
    blinkWinBet(zuhe) {
        this.stopBlinkWin()

        let LoseArea=[]
        let WinArea=[]
        for (let i=1; i<=10; ++ i) {
            if (bit.band(zuhe, gameData.dtRstType[i].bit) != 0) {
                let obj=this.uiRoot.bet.num[i].efWin
                //let color = obj.color
                obj.active=(true)
                fmg.setAlpha(obj, 0)

                let repeatTween=GameG.NewTween(obj)
                let sqs=cc.tween(repeatTween)
                          .to(0.3, { opacity : 255 })
                          .delay(0.4)
                          .to(0.3, { opacity : 0 })
                repeatTween.repeat(9999999999, tween).start()

                this.hBlinkWinBet[i]=sqs
                WinArea.push(i)
            }
            else {
                LoseArea.push(i)
            }
        }

        this.RemoveLoseArea(LoseArea)
        this.PlayWinAnimation(WinArea)
    },

    //- 停止赢家闪烁
    stopBlinkWin() {
        for (let i=1; i<=10; ++ i) {
            if (this.hBlinkWinBet[i]) {
                this.hBlinkWinBet[i].stop()
                this.hBlinkWinBet[i]=null
                this.uiRoot.bet.num[i].efWin.active=(false)
            }
        }
    },

    //- 自己分数增加向上飘分数动画
    showAddCoin(num, tm, score) {
        if (num == 0) {
            return
        }

        let obj=null
        if (num<0) {
            obj=this.uiRoot.user.subcoin
        }
        else {
            obj=this.uiRoot.user.addcoin
        }

        obj.string=(num>0 && "+" || "") + this.MoneyText(num)
        let pos=this.uiRoot.user.coin.node.position
        obj.node.position=pos
        let self=this
        var sqs=GameG.NewTween(obj.node)
        sqs.call(function () {
            obj.node.active=(true)
            if (num>0) {
                self.uiRoot.user.coin.string=self.MoneyText(score)
            }
        })
        sqs.by(tm, { position : cc.v3(0, 100, 0) })
        sqs.call(function () {
            obj.node.active=(false)
        })
        sqs.start()
    },

    MoneyText(money) {
        let moneyText=money / 100
        if (moneyText % 1 == 0) {
            moneyText=Math.ceil(moneyText)
        }
        return moneyText
    },

    SetCastData(obj, i) {
        GameG.SetImageSprite(cc.find("btn", obj).getComponent(cc.Sprite), "", gameData.GetBetBtnImg(gameData.dtBaseBet[i], 1) + "_1", false)
        obj.Find("bet").getComponent(cc.Label).string=this.MoneyText(gameData.dtBaseBet[i] * gameData.dtBetRate)
    },

    // 移除沒贏區域的籌碼
    RemoveLoseArea(LoseArea) {
        let self=this
        setTimeout(function () {
            let IsPlayAudio=false

            for (let _ in (LoseArea)) {
                let j=LoseArea[_]

                if ((self.uiCast[j].length)>0) {
                    IsPlayAudio=true

                    for (let i=1; i<=(self.uiCast[j]).length; ++ i) {
                        let obj=self.uiCast[j][i]
                        var sqs=GameG.NewTween(obj)
                        sqs.delay(Math.random() * 0.3)
                        sqs.call(function () {
                            obj.node.active=(false)
                        })
                        sqs.start()
                    }
                }
            }

            if (IsPlayAudio == true) {
                gameAudio.outCast()
            }
        }.bind(this), 1000 * 3.5);
    },

    // 播放獲勝區域動畫
    PlayWinAnimation(WinArea) {
        let self=this
        setTimeout(function () {
            for (let _ in (WinArea)) {
                let dtRstWin=WinArea[_]

                // 取得玩家下注金額
                let userBetRecode=0
                if (gameData.dtBetRecode != null) {
                    if (gameData.dtBetRecode[dtRstWin] != null) {
                        userBetRecode=gameData.dtBetRecode[dtRstWin].Count * gameData.dtBetRate
                    }
                }
                // 其他玩家下注金額
                let otherBetRecode=0
                if (gameData.BroadBet[dtRstWin] != null) {
                    otherBetRecode=gameData.BroadBet[dtRstWin].Money - userBetRecode
                }

                // 該位置有下注
                if (userBetRecode>0 || otherBetRecode>0) {
                    let newCountData=null

                    // 補錢
                    setTimeout(function () {
                        gameAudio.addCoin()
                        newCountData=self.AddWinCast(userBetRecode, 11, dtRstWin)
                        self.AddWinCast(otherBetRecode, dtRstWin, dtRstWin)
                    }.bind(self), 1000 * 0.5);

                    // 獲勝飛錢
                    setTimeout(function () {
                        gameAudio.outCast()
                        // 玩家有下注
                        if (userBetRecode>0) {
                            let acc=self.resultFlyUserCast(newCountData, otherBetRecode, dtRstWin, self.uiCast[11])
                            // 其他玩家有下注
                            if (otherBetRecode>0) {
                                self.resultFlyOtherCast(acc, dtRstWin)
                            }
                        }
                        // 玩家沒下住
                        else {
                            self.resultFlyOtherCast(1, dtRstWin)
                        }
                    }.bind(self), 1000);
                }
            }
        }.bind(this), 1000 * 4);
    },

    // 增加贏區域籌碼數
    AddWinCast(money, poolIdx, dtRstWin) {
        if (money == 0) {
            return
        }

        let CheckBet=require("CheckBet")
        let Magnification=[1, 	//LM 庄
            1, 	//RM 閒
            8, 	//MM 和
            0, 	//LU 庄天王
            0,	//RU 閒天王
            11, //LD 庄對子
            11, //RD 閒對子
            0, 	//LM 庄順子
            0, 	//RM 閒順子
            0,]	//MD 同點和

        let BetInfo=CheckBet.Init(money * Magnification[dtRstWin], gameData.dtBaseBet, gameData.dtBetRate)
        let BetData=BetInfo["value"]
        let CountData=BetInfo["count"]

        // 將計算結果轉換回一般順序
        let newCountData=[]
        for (let i=1; i<=BetData.length; ++ i) {
            //t1, t2 = math.modf(BetData[i]/gameData.dtBetRate)
            t1=parseInt(BetData[i] / gameData.dtBetRate)
            for (let j=1; j<=gameData.dtBaseBet.length; ++ j) {
                if (t1 == gameData.dtBaseBet[j]) {
                    newCountData[j]=CountData[i]
                }
            }
        }

        // 庄家補錢動畫
        for (let i=1; i<=newCountData.length; ++ i) {
            for (let j=1; j<=newCountData[i]; ++ j) {
                tmp=gameData.poolCast.get([cfg=gameData.dtBaseBet[i]])
                this.uiCast[poolIdx][(this.uiCast[poolIdx].length) + 1]=tmp
                SetCastData(tmp, i)

                var sqs=GameG.NewTween(obj)
                sqs.by(0.4, { position : 0.4 })
                sqs.delay(Math.random() * 0.2)
                sqs.start()
            }
        }

        return newCountData
    },

    FlyUserCast(obj) {
        let pos=GameG.LocalConvertWorldPointAR(GameLayer.uiRoot.user.head.node)
        var sqs=GameG.NewTween(obj)
        sqs.to(0.5, { position : pos })
        sqs.delay(Math.random() * 0.2)
        sqs.call(function () {
            obj.active=(false)
        })
        sqs.start()
    },

    // 贏區域的籌碼飛向玩家
    resultFlyUserCast(newCountData, otherBetRecode, dtRstWin, usrpool) {
        // 莊家賠的籌碼
        for (let i=1; i<=usrpool.length; ++ i) {
            let obj=usrpool[i]
            this.FlyUserCast(obj)
        }

        // 其他玩家有下注，一部分飛向玩家，其他之後飛向其他玩家
        acc=1
        if (otherBetRecode != 0) {
            for (let i=1; i<=newCountData.length; ++ i) {
                for (let j=1; j<=newCountData[i]; ++ j) {
                    let obj=this.uiCast[dtRstWin][acc]
                    SetCastData(obj, i)
                    this.FlyUserCast(obj)
                    acc=acc + 1
                }
            }
            // 其他玩家沒下住，所有的錢飛向玩家
        }
        else {
            for (let i=1; i<=this.uiCast[dtRstWin].length; ++ i) {
                let obj=this.uiCast[dtRstWin][i]
                this.FlyUserCast(obj)
            }
        }
        return acc
    },

    // 贏區域的籌碼飛向其他玩家
    resultFlyOtherCast(beginIdx, dtRstWin) {
        if (beginIdx == 0) {
            beginIdx=1
        }

        for (let i=beginIdx; i<=(this.uiCast[dtRstWin]).length; ++ i) {
            let obj=this.uiCast[dtRstWin][i]
            let endPos=this.uiRoot.betUser.position

            var sqs=GameG.NewTween(obj)
            sqs.by(1, { position : endPos })
            sqs.delay(Math.random() * 0.2)
            sqs.call(function () {
                obj.active=(false)
            })
            sqs.start()
        }
    },

    GameStart() {
        this.uiRoot.userStar.SetActive(false)
        for (let k in (this.uiRoot.userList)) {
            let v=this.uiRoot.userList[k]
            if (v != null)
                v.GameStart()
        }
        for (let k in (this.uiRoot.betList)) {
            let v=this.uiRoot.betList[k]
            if (v != null)
                v.GameStart()
        }
    },

    GameEnd() {
        this.uiRoot.userStar.SetActive(false)
        for (let k in (this.uiRoot.userList)) {
            let v=this.uiRoot.userList[k]
            if (v != null)
                v.GameEnd()
        }
        for (let k in (this.uiRoot.betList)) {
            let v=this.uiRoot.betList[k]
            if (v != null)
                v.GameEnd()
        }
    },

    SetUserList(data) {
        for (let k in (data.RichestList)) {
            let v=data.RichestList[k]

            for (let k2 in (this.uiRoot.userList)) {
                let v2=this.uiRoot.userList[k2]
                if (v.UserID != 0 && k2 == v.Ranking) {
                    v2.SetActive(true)
                    v2.SetHead(v.UserFaceID)
                    v2.SetUserId(v.UserID)
                    v2.SetScore(v.Money)
                }
            }
        }
    },

    SetUserStar(data) {
        if (data == null) {
            return
        }
        this.uiRoot.userStar.SetActive(true)
        this.uiRoot.userStar.SetHead(data.UserFaceID)
        this.uiRoot.userStar.SetUserId(data.UserID)
    },

    //回收下注区金额
    ShowWinChip(siteNo, isWin) {
        if (this.uiRoot.betList[siteNo] != null) {
            this.uiRoot.betList[siteNo].ChangeChipUserId(gameData.winList, isWin)
            let headPosition=GameG.LocalConvertWorldPointAR(this.uiRoot.user.head.node)
            this.uiRoot.betList[siteNo].ShowWinChip(headPosition, GameG.getUserID())

            this.uiRoot.betList[siteNo].ShowWinChip(this.uiRoot.zhungPos, 0)
            this.uiRoot.betList[siteNo].ShowWinChip(this.uiRoot.xianPos, 0)
            this.uiRoot.betList[siteNo].ShowWinChip(null, null)
        }
    },

    //补给下注区金额
    ShowLoseChip(siteNo) {
        if (this.uiRoot.betList[siteNo] != null) {
            this.uiRoot.betList[siteNo].ShowLoseChipAll(gameData.GetResultOdd(siteNo), this.uiRoot.zhungPos)
            this.uiRoot.betList[siteNo].ShowLoseChipMy(gameData.GetResultOdd(siteNo), this.uiRoot.zhungPos)
        }
    },

    ShowClearBetChip(userId) {
        let targetPos=null
        for (let k in (this.uiRoot.betList)) {
            let v=this.uiRoot.betList[k]

            for (let kuser in (this.uiRoot.userList)) {
                let vuser=this.uiRoot.userList[kuser]

                if (vuser.GetUserId() == userId) {
                    targetPos=vuser.GetPosition()
                }
            }
            if (this.uiRoot.userStar.GetUserId() == userId) {
                targetPos=this.uiRoot.userStar.GetPosition()
            }

            if (GameG.getUserID() == userId) {
                targetPos=GameG.LocalConvertWorldPointAR(this.uiRoot.user.head.node)
                this.ShowBroadCastBetMy(k, 0)
            }

            if (v != null)
                v.ShowClearBetChip(userId, targetPos)
        }
    },

    ClearBetRetError(siteNo, num, userId) {
        if (this.uiRoot.betList[siteNo] != null)
            this.uiRoot.betList[siteNo].ClearBetRetError(num, userId)
    },

    ShowBroadCastBetAll(siteNo, num) {
        if (this.uiRoot.betList[siteNo] != null)
            this.uiRoot.betList[siteNo].ShowBroadCastBetAll(num)
    },

    ShowBroadCastBetMy(siteNo, num) {
        if (this.uiRoot.betList[siteNo] != null)
            this.uiRoot.betList[siteNo].ShowBroadCastBetMy(num)
    },

    ShowCastBetChip(siteNo, num, index, userId) {
        let targetPos=null
        let dir=10
        //自己
        if (targetPos == null) {
            if (GameG.getUserID() == userId) {
                targetPos=GameG.LocalConvertWorldPointAR(this.uiRoot.betBtn.chip[index].root);
            }
        }

        //其他
        if (targetPos == null) {
            let self=this
            var seq=GameG.NewTween(this.uiRoot.betUser)
            seq.to(0.1, { position : cc.v2(this.betUserStartPos.x - dir, this.betUserStartPos.y + dir) })
            seq.to(0.15, { position : cc.v2(this.betUserStartPos.x, this.betUserStartPos.y) })
            seq.call(function () {
                self.uiRoot.betUser.position=self.betUserStartPos
            })
            seq.start()
        }

        if (this.uiRoot.betList[siteNo] != null) {
            //this.uiRoot.betList[siteNo].ShowCastBetChip(num,index,gameData.dtBetState == 0,targetPos,userId)		
            this.uiRoot.betList[siteNo].ShowCastBetChip(num, index, true, targetPos, userId)
        }
    },

    ShowLuckyStar(siteNo, show) {
        if (show) {
            if (this.uiRoot.betList[siteNo] != null)
                this.uiRoot.betList[siteNo].ShowLuckyStar()
        }
        else {
            if (this.uiRoot.betList[siteNo] != null)
                this.uiRoot.betList[siteNo].StopLuckyStar()
        }
    },

    ShowResultPoker(data) {
        for (let k in (this.uiRoot.betList)) {
            let v=this.uiRoot.betList[k]
            if (v != null) {
                if (bit.band(data.ZuHe, gameData.dtRstType[k].bit) != 0) {
                    v.ShowBlinkWin(3)
                }
            }
        }
    },

    ShowResultWin(data) {
        if (gameData.winZuHe == null) {
            return
        }

        this.bLockUseCoin=true

        gameData.winList=[]
        for (let k in (data.StageUerInfo)) {
            let v=data.StageUerInfo[k]

            if (v.Win>0) {
                gameData.winList[gameData.winList.length + 1]=v.UserID
            }
        }
        let self=this
        let timer=0.85
        let sequence=GameG.NewTween(this.uiRoot.root)
        sequence.call(function () {
            for (let k in (self.uiRoot.betList)) {
                if (bit.band(gameData.winZuHe, gameData.dtRstType[k].bit) != 0) {
                    self.ShowLoseChip(k)
                }
            }
        })

        sequence.delay(timer)
        sequence.call(function () {
            for (let k in (self.uiRoot.betList)) {
                let isWin=bit.band(gameData.winZuHe, gameData.dtRstType[k].bit) != 0
                // 开和全退
                if (bit.band(gameData.winZuHe, gameData.dtRstType[3].bit) != 0) {
                    if (k != 6 && k != 7) {
                        isWin=true
                    }
                }
                self.ShowWinChip(k, isWin)
            }
        })

        sequence.delay(timer)
        sequence.call(function () {
            self.ShowResultScore(data)
            self.bLockUseCoin=false
        })
        sequence.start()
    },

    ShowResultScore(data) {
        gameAudio.eFlyMoneyNum(data.SelfWin != 0)
        this.showAddCoin(data.SelfWin, 1.7, gameData.UserInfo.Score)

        for (let k1 in (data.StageUerInfo)) {
            let v1=data.StageUerInfo[k1]

            let showing=false
            if (GameG.getUserID() == v1.UserID) {
                showing=true
            }

            if (showing == false) {
                for (let k2 in (this.uiRoot.userList)) {
                    let v2=this.uiRoot.userList[k2]
                    if (v2.GetUserId() == v1.UserID) {
                        v2.AnimAddCoin(v1.Win)
                        showing=true
                    }
                }
            }

            if (showing == false) {
                if (this.uiRoot.userStar.GetUserId() == v1.UserID) {
                    this.uiRoot.userStar.AnimAddCoin(v1.Win)
                }
            }
        }
    },

    //- 开始赢家闪烁
    ShowBlinkWin(idx, tm) {
        if (this.uiRoot.betList[idx] != null)
            this.uiRoot.betList[idx].ShowBlinkWin(tm)
    },

    StopBlinkWin(idx) {
        if (this.uiRoot.betList[idx] != null)
            this.uiRoot.betList[idx].StopBlinkWin()
    },


};

module.exports=GameLayer
