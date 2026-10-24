var G=require("Global");
var GameG=require("GameGlobal");
var GameInfo=require("GameInfo");
var GameManager=require("GameManager");
var GameMsg=require("GameMsg");
var SoundManager=require("SoundManager");
//var UIUserPic=require("UIUserPic");
var FFunction=require("FFunction");
var FileManager=require("FileManager");
var uiuser=require("UIUser");
var uibet=require("UIBet");
var gameConfig=require("GameConfig")

var GameLayer={
    extends : cc.Component,

    init() {
        this.dtOpenCardStep=0; // 开牌动画
        this.bLockUseCoin=false; // 是否不更新金币显示
        // uiRoot
        this.dtBetTimer="tmhBeginBet"; // 开奖投注倒计时名称
        this.uiCast=[[], [], [], []]; // 桌面下注筹码ui
        this.hCastAnim={}; // 下筹码动画保存
        this.uiCastIdx=[0, 0, 0]; // 筹码重用索引

        // 下注筹码位置（相对 gameLayer）
        this.dtBetRectOther=[cc.rect(- 675, 5, 1, 408), cc.rect(675, 5, 1, 408)];
        this.dtBetBtnOfst=cc.v3(130, 0, 0); // bet btn偏移位置

        this.initUi();
    },

    onExit() {
    },

    //-
    initUi() {
        // 获取layer
        let self=this;
        let canvas=cc.find("Canvas");
        let root=cc.find("GameLayer/GameLayer", canvas);

        this.uiRoot={};
        this.uiRoot.root=root;
        let uiRoot=this.uiRoot;

        this.uiRoot.desk=cc.find("BG", root)
        this.PfChip=cc.find("GameLayer/PfChip", canvas);

        // 查找按钮
        let findBtn=function (name, func) {
            let btn=cc.find(name, root).getComponent(cc.Button);
            btn.node.on('click', func);
            return btn;
        };

        uiRoot.userStar=new uiuser(cc.find("otherUser/Star", root));
        uiRoot.userList=[];
        for (let i=1; i<=7; ++ i) {
            uiRoot.userList[i]=new uiuser(cc.find("otherUser/No" + i, root));
        }

        uiRoot.betList=[];
        for (let i=1; i<=3; ++ i) {
            uiRoot.betList[i]=new uibet(i, cc.find("BetGroup/ButtonBet" + i, root), cc.find("BetGroupFront/ButtonBet" + i, root));
            uiRoot.betList[i].SetCallback(function (index) {
                if (xlhd.gameControl.BetCoin(index) == true) {

                }
            });
        }

        uiRoot.playerNum=cc.find("betNum/playerNum/num", root).getComponent(cc.Label);

        uiRoot.gameStart={};
        uiRoot.gameStart.betAni=cc.find("gameStartAni/betAni", root).getComponent(sp.Skeleton);
        uiRoot.gameStart.betAni.node.active=false;

        uiRoot.betNum={};
        uiRoot.betNum.hu=cc.find("betNum/_betHu/num", root).getComponent(cc.Label);
        uiRoot.betNum.draw=cc.find("betNum/_betDraw/num", root).getComponent(cc.Label);
        uiRoot.betNum.long=cc.find("betNum/_betLong/num", root).getComponent(cc.Label);
        uiRoot.betNum.betCast=cc.find("betNum/_betCast", root);
        uiRoot.betNum.hu.node.parent.active=false;
        uiRoot.betNum.draw.node.parent.active=false;
        uiRoot.betNum.long.node.parent.active=false;
        uiRoot.betNum.hu.text="0";
        uiRoot.betNum.draw.text="0";
        uiRoot.betNum.long.text="0";


        uiRoot.betNum.iBet=[];
        uiRoot.betNum.iBet[1]=cc.find("betNum/_betILong/coin", root).getComponent(cc.Label);
        uiRoot.betNum.iBet[2]=cc.find("betNum/_betIDraw/coin", root).getComponent(cc.Label);
        uiRoot.betNum.iBet[3]=cc.find("betNum/_betIHu/coin", root).getComponent(cc.Label);
        for (let i=1; i<=3; ++ i) {
            uiRoot.betNum.iBet[i].text="0";
        }

        // bet btn
        uiRoot.betBtn={};
        uiRoot.betBtn.betBtn=cc.find("downMune/betBtn", root);
        uiRoot.betBtn.scroll=cc.find("downMune/betBtn/scroll/Viewport/Content", root);

        uiRoot.betUser=cc.find("downMune/users", root);
        uiRoot.betUserStartPos=uiRoot.betUser.position;

        uiRoot.zhuang=cc.find("zhuang", root);

        // 底部工具栏
        uiRoot.user={};
        uiRoot.user.bg=cc.find("downMune/userInfo", root);
        uiRoot.user.head=cc.find("downMune/userInfo/head", root).getComponent(cc.Sprite);
        uiRoot.user.name=cc.find("downMune/userInfo/name", root).getComponent(cc.Label);
        uiRoot.user.coin=cc.find("downMune/userInfo/coin", root).getComponent(cc.Label);
        uiRoot.user.addcoin=cc.find("downMune/userInfo/addcoin", root).getComponent("TextControl");
        uiRoot.user.bg.active=false;
        uiRoot.user.addcoin.node.active=false;
        uiRoot.user.delcoin=cc.find("downMune/userInfo/delcoin", root).getComponent("TextControl");
        uiRoot.user.delcoin.node.active=false;

        //充值訊息
        uiRoot.recharge={}
        uiRoot.recharge.root=cc.find("Recharge", root)
        uiRoot.recharge.text=cc.find("Recharge/Text", root).getComponent(cc.Label)
        uiRoot.recharge.root.active=(false)


        //menu
        uiRoot.menu={};

        let Referrer=gameConfig.getReferrer()
        uiRoot.menu.exit=findBtn("menu/exit", function () {
            xlhd.gameAudio.btnClick();
            window.location.href=Referrer;
        });
        uiRoot.menu.setting=findBtn("menu/setting", function () {
            xlhd.gameAudio.btnClick();
            uiRoot.setting.root.active=true;
        });
        uiRoot.menu.description=findBtn("menu/description", function () {
            xlhd.gameAudio.btnClick();
            uiRoot.description.root.active=true;
            self.updateDescription();
        });
        if (Referrer == "0") {
            uiRoot.menu.exit.node.active=false
            uiRoot.menu.description.node.position=uiRoot.menu.setting.node.position
            uiRoot.menu.setting.node.position=uiRoot.menu.exit.node.position
        }

        //setting
        uiRoot.setting={};
        uiRoot.setting.root=cc.find("Setting", root);
        uiRoot.setting.bgmOpenToggle=cc.find("Setting/Bgm/OpenToggle", root).getComponent(cc.Toggle);
        uiRoot.setting.bgmCloseToggle=cc.find("Setting/Bgm/CloseToggle", root).getComponent(cc.Toggle);
        uiRoot.setting.soundOpenToggle=cc.find("Setting/Sound/OpenToggle", root).getComponent(cc.Toggle);
        uiRoot.setting.soundCloseToggle=cc.find("Setting/Sound/CloseToggle", root).getComponent(cc.Toggle);
        uiRoot.setting.versionText=cc.find("Setting/VersionText", root).getComponent(cc.Label);

        uiRoot.setting.settingCloseBG=findBtn("Setting/CloseBG", function () {
            uiRoot.setting.root.active=false;
        });
        uiRoot.setting.settingCloseButton=findBtn("Setting/CloseButton", function () {
            xlhd.gameAudio.btnClick();
            uiRoot.setting.root.active=false;
        });

        let SetBgm=function (value) {
            SoundManager.SetMusic(value)
        };

        uiRoot.setting.settingCloseBG=findBtn("Setting/CloseBG", function () {
            uiRoot.setting.root.active=false;
        });
        uiRoot.setting.settingCloseButton=findBtn("Setting/CloseButton", function () {
            xlhd.gameAudio.btnClick();
            uiRoot.setting.root.active=false;
        });

        uiRoot.setting.root.active=true;
        uiRoot.setting.bgmOpenToggle.isChecked=SoundManager.GetMusic();
        uiRoot.setting.bgmCloseToggle.isChecked= ! SoundManager.GetMusic();
        uiRoot.setting.soundOpenToggle.isChecked=SoundManager.GetSound();
        uiRoot.setting.soundCloseToggle.isChecked= ! SoundManager.GetSound();
        uiRoot.setting.root.active=false;

        uiRoot.setting.bgmOpenToggle.node.on('toggle', function (toggle) {
            SetBgm(true);
            xlhd.gameAudio.btnClick()
        });

        uiRoot.setting.bgmCloseToggle.node.on('toggle', function (toggle) {
            SetBgm(false);
            xlhd.gameAudio.btnClick()
        });

        let SetSound=function (value) {
            SoundManager.SetSound(value)
        };

        uiRoot.setting.soundOpenToggle.node.on('toggle', function (toggle) {
            SetSound(true)
            xlhd.gameAudio.btnClick()
        });

        uiRoot.setting.soundCloseToggle.node.on('toggle', function (toggle) {
            SetSound(false)
            xlhd.gameAudio.btnClick()
        });

        // 版號
        //----->需重新編譯程式碼    let localVersion=CS.HotUpdate.HotUpdateManager.Instance.GetProjectVersion(G.GetGamePName());
        cc.find("Setting/VersionText", root).getComponent(cc.Label).string="V." + GameG.GetGameVersion();

        //description
        uiRoot.description={};
        uiRoot.description.root=cc.find("Description", root);
        uiRoot.description.text=cc.find("Description/ScrollRect/Text", root).getComponent(cc.RichText);
        uiRoot.description.closeBG=findBtn("Description/CloseBG", function () {
            uiRoot.description.root.active=false;
            window.isShowHelp = true;
        });
        uiRoot.description.closeButton=findBtn("Description/CloseButton", function () {
            xlhd.gameAudio.btnClick();
            uiRoot.description.root.active=false;
            window.isShowHelp = true;
        });


        if (window.isShowHelp == null){
            uiRoot.description.root.active=true;
            this.updateDescription();
        }  

        // gameInfo
        uiRoot.gameInfo={};
        uiRoot.gameInfo.round=cc.find("gameInfo/roundTxt", root).getComponent(cc.RichText);
        uiRoot.gameInfo.min=cc.find("gameInfo/min", root).getComponent(cc.Label);
        uiRoot.gameInfo.max=cc.find("gameInfo/max", root).getComponent(cc.Label);
        uiRoot.gameInfo.roadArrow=cc.find("gameInfo/RoadButton/Arrow", root);
        uiRoot.gameInfo.roadButton=findBtn("gameInfo/RoadButton", function () {
            xlhd.gameAudio.btnClick()
            if (uiRoot.gameInfo.roadArrow.scaleX == 1) {
                uiRoot.gameInfo.roadButton.node.position=cc.v2(906, 0);
                uiRoot.gameInfo.roadArrow.scaleX= - 1;
                uiRoot.road.root.active=(true)
            }
            else {
                uiRoot.gameInfo.roadButton.node.position=cc.v2(157, 0);
                uiRoot.gameInfo.roadArrow.scaleX=1;
                uiRoot.road.root.active=(false)
            }
        });

        // countdown
        uiRoot.countdown={};
        uiRoot.countdown.root=cc.find("countdown", root);
        uiRoot.countdown.frame=cc.find("countdown/frame", root).getComponent(cc.Sprite);
        uiRoot.countdown.circle=cc.find("countdown/circle", root).getComponent(cc.Sprite);
        uiRoot.countdown.progressBar=cc.find("countdown/circle", root).getComponent(cc.ProgressBar)
        uiRoot.countdown.time=cc.find("countdown/time", root).getComponent("TextControl");
        uiRoot.countdown.countdownSequence=null;
        uiRoot.countdown.root.active=false;


        uiRoot.betBtn.autoImg=cc.find("downMune/_betAuto", root).getComponent(cc.Sprite);

        uiRoot.betBtn.auto=findBtn("downMune/_betAuto", function () {
            xlhd.gameAudio.btnClick();
            xlhd.bAutoBet=true;
            self.uiRoot.betBtn.auto.node.active=false;
            self.uiRoot.betBtn.autoNo.node.active=true;
            xlhd.toast.show(GameG.GetLocalizedString("您已经开启自动下注"));
        })
        uiRoot.betBtn.auto.node.active=true;

        uiRoot.betBtn.autoNoImg=cc.find("downMune/_betAutoNo", root).getComponent(cc.Sprite);
        uiRoot.betBtn.autoNo=findBtn("downMune/_betAutoNo", function () {
            xlhd.gameAudio.btnClick();
            xlhd.bAutoBet=false;
            self.uiRoot.betBtn.auto.node.active=true;
            self.uiRoot.betBtn.autoNo.node.active=false;
            xlhd.toast.show(GameG.GetLocalizedString("您已经取消自动下注"));
        })

        uiRoot.betBtn.betLong=findBtn("betNum/_doBetLong", function () {
            xlhd.gameAudio.btnClick();
            xlhd.gameControl.BetCoin(1);
        })
        uiRoot.betBtn.betHe=findBtn("betNum/_doBetHe", function () {
            xlhd.gameAudio.btnClick();
            xlhd.gameControl.BetCoin(2);
        })
        uiRoot.betBtn.betHu=findBtn("betNum/_doBetHu", function () {
            xlhd.gameAudio.btnClick();
            xlhd.gameControl.BetCoin(3);
        })

        // 下注范围(龙和虎)
        let offsetX=0;
        let offsetY=10;
        let subWidth=80;
        let subHeight=180;
        this.dtBetRect=[
            FFunction.ObjToRect(uiRoot.betBtn.betLong, offsetX, offsetY, subWidth, subHeight),
            FFunction.ObjToRect(uiRoot.betBtn.betHe, offsetX, offsetY, subWidth, subHeight),
            FFunction.ObjToRect(uiRoot.betBtn.betHu, offsetX, offsetY, subWidth, subHeight)
        ];

        uiRoot.time={};
        uiRoot.time.betTip=cc.find("timeBet/timeBet", root).getComponent(cc.Sprite);
        uiRoot.time.rstTip=cc.find("timeBet/timeRst", root).getComponent(cc.Sprite);
        uiRoot.time.count=cc.find("timeBet/timeBet/timeDown", root).getComponent(cc.Label);
        uiRoot.time.betTip.active=false;
        uiRoot.time.rstTip.active=false;

        uiRoot.road={};
        uiRoot.road.root=cc.find("_chartLayer", root);
        uiRoot.road.root.active=false;

        //大路
        uiRoot.road.bigRoadObj={};
        uiRoot.road.bigRoadObj.root=cc.find("_chartLayer/BigRoad", root);
        uiRoot.road.bigRoadObj.grid={};
        uiRoot.road.bigRoadObj.grid.rect=cc.find("_chartLayer/BigRoad/Grid", root);
        uiRoot.road.bigRoadObj.toggle=cc.find("_chartLayer/ToggleGroup/BigRoad", root).getComponent(cc.Toggle);
        uiRoot.road.bigRoadObj.root.active=true;
        uiRoot.road.bigRoadObj.grid.initPos=uiRoot.road.bigRoadObj.grid.rect.position
        uiRoot.road.bigRoad=[]

        uiRoot.road.bigRoadObj.toggle.isChecked=true
        uiRoot.road.bigRoadObj.toggle.node.on('toggle', function (toggle) {
            xlhd.gameAudio.btnClick()
            uiRoot.road.bigRoadObj.root.active=true;
            uiRoot.road.beadRoadObj.root.active=false;
        })

        //珠盘路
        uiRoot.road.beadRoadObj={};
        uiRoot.road.beadRoadObj.root=cc.find("_chartLayer/BeadRoad", root);
        uiRoot.road.beadRoadObj.grid={};
        uiRoot.road.beadRoadObj.grid.rect=cc.find("_chartLayer/BeadRoad/Grid", root);
        uiRoot.road.beadRoadObj.toggle=cc.find("_chartLayer/ToggleGroup/BeadRoad", root).getComponent(cc.Toggle);
        uiRoot.road.beadRoadObj.root.active=false;
        uiRoot.road.beadRoadObj.grid.initPos=uiRoot.road.beadRoadObj.grid.rect.position
        uiRoot.road.beadRoad=[]

        uiRoot.road.beadRoadObj.toggle.isChecked=false
        uiRoot.road.beadRoadObj.toggle.node.on('toggle', function (toggle) {
            xlhd.gameAudio.btnClick()
            uiRoot.road.bigRoadObj.root.active=false;
            uiRoot.road.beadRoadObj.root.active=true;
        })

        //下局
        uiRoot.road.nextRound={};
        uiRoot.road.nextRound.nextLongDayanlu=cc.find("_chartLayer/NextRound/NextLongDayanlu", root).getComponent(cc.Sprite);
        uiRoot.road.nextRound.nextLongXiaoyanlu=cc.find("_chartLayer/NextRound/NextLongXiaoyanlu", root).getComponent(cc.Sprite);
        uiRoot.road.nextRound.nextLongZhanglanglu=cc.find("_chartLayer/NextRound/NextLongZhanglanglu", root).getComponent(cc.Sprite);
        uiRoot.road.nextRound.nextHuDayanlu=cc.find("_chartLayer/NextRound/NextHuDayanlu", root).getComponent(cc.Sprite);
        uiRoot.road.nextRound.nextHuXiaoyanlu=cc.find("_chartLayer/NextRound/NextHuXiaoyanlu", root).getComponent(cc.Sprite);
        uiRoot.road.nextRound.nextHuZhanglanglu=cc.find("_chartLayer/NextRound/NextHuZhanglanglu", root).getComponent(cc.Sprite);

        //總和
        uiRoot.road.total={};
        uiRoot.road.total.long=cc.find("_chartLayer/Total/TextLong", root).getComponent(cc.Label);
        uiRoot.road.total.hu=cc.find("_chartLayer/Total/TextHu", root).getComponent(cc.Label);
        uiRoot.road.total.he=cc.find("_chartLayer/Total/TextHe", root).getComponent(cc.Label);
        uiRoot.road.total.total=cc.find("_chartLayer/Total/TextTotal", root).getComponent(cc.Label);

        uiRoot.road.zoomButton=findBtn("_chartLayer/ZoomButton", function () {
            xlhd.gameAudio.btnClick();
            xlhd.chartLayer.show(true);
        })
    },

    GetRoadUI() {
        return this.uiRoot.road
    },

    GetRoundUI() {
        return this.uiRoot.road.round
    },

    CreateClone(perfab) {
        let clone=cc.instantiate(perfab);
        if (clone == null) {
            return null;
        }
        clone.parent=perfab.parent;
        clone.position=cc.v3(0, 0, 0);
        clone.scale=1;

        return clone;
    },

    GetBigRoad(i, j) {
        return this.uiRoot.road.bigRoad[i][j]
    },

    GetBigRoadObj(i, j) {
        return this.uiRoot.road.bigRoadObj
    },

    CreateBigRoad() {
        let perfab=cc.find("Grid/Content", this.uiRoot.road.bigRoadObj.root);
        let clone=this.CreateClone(perfab);
        clone.active=true

        let index=this.uiRoot.road.bigRoad.length
        if (index == 0)
            index=1

        clone.name="Content_" + index

        if (this.uiRoot.road.bigRoadObj.grid == null)
            this.uiRoot.road.bigRoadObj.grid=[]
        this.uiRoot.road.bigRoadObj.grid[index]=clone

        this.uiRoot.road.bigRoad[index]=[]
        for (let j=1; j<=clone.childrenCount; ++ j) {
            this.uiRoot.road.bigRoad[index][j]={};
            this.uiRoot.road.bigRoad[index][j].root=cc.find("Item_" + j, clone);
            this.uiRoot.road.bigRoad[index][j].img=cc.find("Item_" + j + "/Image", clone).getComponent(cc.Sprite);
            this.uiRoot.road.bigRoad[index][j].txt=cc.find("Item_" + j + "/Text", clone).getComponent(cc.Label);
            this.uiRoot.road.bigRoad[index][j].root.active=true;
            this.uiRoot.road.bigRoad[index][j].img.node.active=false;
            this.uiRoot.road.bigRoad[index][j].txt.node.active=false;
            this.uiRoot.road.bigRoad[index][j].txt.string="";
        }
    },

    GetBeadRoad(i, j) {
        return this.uiRoot.road.beadRoad[i][j]
    },

    GetBeadRoadObj(i, j) {
        return this.uiRoot.road.beadRoadObj
    },

    CreateBeadRoad() {
        let perfab=cc.find("Grid/Content", this.uiRoot.road.beadRoadObj.root);
        let clone=this.CreateClone(perfab);
        clone.active=true

        let index=this.uiRoot.road.beadRoad.length
        if (index == 0)
            index=1

        if (this.uiRoot.road.beadRoadObj.grid == null)
            this.uiRoot.road.beadRoadObj.grid=[]
        this.uiRoot.road.beadRoadObj.grid[index]=clone

        this.uiRoot.road.beadRoad[index]=[]
        for (let j=1; j<=clone.childrenCount; ++ j) {
            this.uiRoot.road.beadRoad[index][j]={};
            this.uiRoot.road.beadRoad[index][j].root=cc.find("Item_" + j, clone);
            this.uiRoot.road.beadRoad[index][j].img=cc.find("Item_" + j + "/Image", clone).getComponent(cc.Sprite);
            this.uiRoot.road.beadRoad[index][j].root.active=true;
            this.uiRoot.road.beadRoad[index][j].img.node.active=false;
        }
    },

    // 设置限红
    updateGameInfo(min, max) {
        this.uiRoot.gameInfo.min.string=GameG.GetLocalizedString("最小").replace("####", this.MoneyText(min));
        this.uiRoot.gameInfo.max.string=GameG.GetLocalizedString("最大").replace("####", this.MoneyText(max));
    },

    // 更新第幾局
    updateGameInfoRound() {
        if (xlhd.resultRound == null) {
            this.uiRoot.gameInfo.round.string=""
        }
        else {
            let round=xlhd.resultRound.RoundID + 1
            if (round>30)
                this.uiRoot.gameInfo.round.string=GameG.GetLocalizedString("局数").replace("####", "1");
            else
                this.uiRoot.gameInfo.round.string=GameG.GetLocalizedString("局数").replace("####", round.toString());
        }
    },

    // 设置游戏说明
    updateDescription() {
        let self=this;

        let fileName=GameInfo.GetGamePName(GameManager.getGameId())
        let urlData=window.location.search.substring(1);
        if (urlData == null || urlData == "") {
            FileManager.LoadFile(true, "Txt", fileName, cc.TextAsset, (err, data) => {
                if (err) {
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

    // 设置玩家信息
    updateUserInfo(bEnter, data) {

        if (bEnter && data.UserID == GameG.getUserID()) {
            cc.log("AZLDC:uiRoot ", this.uiRoot);
            this.uiRoot.user.bg.active=true;
            this.updateUserCoin(data.Score);
            if (xlhd.ShowID == false) {
                this.uiRoot.user.name.string="" + data.UserID;
            }
            else {
                this.uiRoot.user.name.string="ID:" + data.UserID;
            }
            // UIUserPic.ResetSpriteByName(this.uiRoot.user.head, data.FaceID.toString());//this.uiRoot.user.head.ResetSpriteByName(CS.AppDefine.HallNumber, tostring(data.FaceID));
        }
    },

    // 设置玩家金币
    updateUserCoin(num) {
        //GameMsg.GameUser
        if (xlhd.UserInfo) {
            // num=num || GameMsg.GameUser.Score;
            num=num == undefined ? xlhd.UserInfo.Score : num;
            xlhd.UserInfo.Score=num;
        }
        if (this.bLockUseCoin != null) {
            xlhd.bankerCoin=num;
            this.uiRoot.user.coin.string=this.MoneyText(num);
        }
    },

    // 显示充值讯息
    updateCoinInsufficient() {
        if (xlhd.betlimitmoney != null && xlhd.bBetted != null) {
            // let insufficient=GameMsg.GameUser.Score<xlhd.betlimitmoney * 100;
            //let insufficient=GameMsg.GameMsg.GameUser.prototype.Score<xlhd.betlimitmoney * 100;
            let insufficient=xlhd.UserInfo.Score<xlhd.betlimitmoney * 100;
            this.uiRoot.recharge.root.active=insufficient;
        }
    },

    CloseAutoBet() {
        xlhd.bAutoBet=false
        this.uiRoot.betBtn.auto.node.active=(true)
        this.uiRoot.betBtn.autoNo.node.active=(false)
    },

    MoneyText(money) {
        let moneyText=money / 100;
        if (moneyText % 1 == 0) {
            moneyText=Math.ceil(moneyText);
        }
        return moneyText;
    },

    // 更新下注按钮的状态
    updateBetBtns(data) {
        xlhd.betCount=data;
        this.uiRoot.betBtn.chip=[];

        let self=this
        for (let i=1; i<=data.length; ++ i) {
            let cfg=xlhd.dtBaseBet[i];
            let cls=cc.instantiate(this.PfChip);
            let bet=data[i - 1];
            let tmp=i;
            if (xlhd.chooseMoney == null) {
                xlhd.chooseMoney=bet * xlhd.dtBetRate;
            }
            if (cls == null) {
                return;
            }
            cls.parent=this.uiRoot.betBtn.scroll;
            cls.scale=1;

            this.uiRoot.betBtn.chip[i]={};
            this.uiRoot.betBtn.chip[i].root=cls;
            this.uiRoot.betBtn.chip[i].root.active=true;
            this.uiRoot.betBtn.chip[i].blink=cc.find("btn/blink", cls).getComponent(cc.Sprite);
            this.uiRoot.betBtn.chip[i].btn=cc.find("btn", cls).getComponent(cc.Button);
            this.uiRoot.betBtn.chip[i].bet=cc.find("bet", cls).getComponent("TextControl");

            let buttomPicIndex=i;
            if (i>7) {
                buttomPicIndex=7;
            }
            GameG.SetImageSprite(cc.find("btn", cls).getComponent(cc.Sprite), G.GetGamePName(), "cast" + (buttomPicIndex).toString() + "_1", false);
            this.uiRoot.betBtn.chip[i].bet.text=this.MoneyText(bet * xlhd.dtBetRate);
            this.uiRoot.betBtn.chip[i].btn.node.on('click', function () {
                GameG.PlayGameSound("se_click");
                xlhd.gameAudio.btnClick();
                self.setUserBet(bet, tmp);
            });
        }

        this.setUserBet(data[0], 1);
    },

    // 设置下注倍数
    setUserBet(num, index) {
        if (this.ahBetBlink) {
            this.ahBetBlink.stop();
        }
        xlhd.chooseBet=index;
        xlhd.chooseMoney=num * xlhd.dtBetRate;

        for (let k in (this.uiRoot.betBtn.chip)) {
            let v=this.uiRoot.betBtn.chip[k];

            v.blink.node.active=(num != null && xlhd.dtBaseBet[k - 1] == num);
        }

        if (num == null) {
            return;
        }

        xlhd.dtUserBet=num;
        let obj=this.uiRoot.betBtn.chip[xlhd.gameData.GetBetIdx(num)].blink;
        let clr=obj.color;
        FFunction.setAlpha(obj, 1);
        obj.active=true;
        for (let j=1; j<this.uiRoot.betBtn.chip.length; ++ j) {
            let obj=this.uiRoot.betBtn.chip[j].root;

            if (index == j) {
                obj.scale=1.1;
                obj.width=124 * 1.05;
                obj.height=72;
            }
            else {
                obj.scale=1;
                obj.width=124;
                obj.height=72;
            }

            obj.parent=this.uiRoot.root;
            obj.parent=this.uiRoot.betBtn.scroll;
        }
    },

    //- 下注倒计时
    beginBetTimer(tm) {
        let self=this;
        this.stopBetTimer();
        this.uiRoot.countdown.root.active=true;

        tm=tm - GameManager.calLoadTime();
        var remainingTime=tm; //剩餘時間
        let alertSec=3; 	//開始警報時間
        let alertInterval=1.1;  //警報間隔

        let red=cc.Color.RED;
        this.countdownSequence=GameG.StartCountDown(this.uiRoot.desk, 0.1, function (dt) {
            remainingTime=remainingTime - 0.1
            self.uiRoot.countdown.progressBar.progress=remainingTime / tm
            self.uiRoot.countdown.time.text=Math.ceil(remainingTime)
            self.uiRoot.countdown.time.node.name=remainingTime.toString()
            if (remainingTime<=alertSec) {
                if (alertInterval>1) {
                    alertInterval=0

                    self.uiRoot.countdown.frame.node.color=red
                    self.uiRoot.countdown.circle.node.color=red
                    self.uiRoot.countdown.time.node.color=red
                    self.uiRoot.countdown.time.node.scale=1

                    cc.tween(self.uiRoot.countdown.time.node)
                      .to(0.4, { scale : 1.4 })
                      .to(0.4, { scale : 1 })
                      .delay(0.1)
                      .start();
                }
                alertInterval=alertInterval + 0.1
            }
            if (remainingTime<=0) {
                self.stopBetTimer();
            }
        });
    },

    //- 停止下注倒计时
    stopBetTimer() {
        let white=cc.Color.WHITE;
        if (this.countdownSequence != null) {
            GameG.RemoveCountDown(this.countdownSequence);
            this.countdownSequence=null;
        }

        this.remainingTime=0;
        this.uiRoot.countdown.root.active=false;
        this.uiRoot.countdown.frame.node.color=white;
        this.uiRoot.countdown.circle.node.color=white;
        this.uiRoot.countdown.time.node.color=white;
        this.uiRoot.countdown.time.node.scale=1;
    },

    //- 显示开始
    animStart() {
        this.updateCoinInsufficient();
        let ani=this.uiRoot.gameStart.betAni;
        ani.setAnimation(0, "startbet", false);
        ani.node.active=true;
        GameG.NewDelayOnce(function () {
            ani.node.active=false;
        }, 2.4);

        this.updateGameInfoRound();
        xlhd.compare.playCard();
    },

    //- 停止下注
    animEndBet() {
        let ani=this.uiRoot.gameStart.betAni;
        ani.setAnimation(0, "endbet", false);
        ani.node.active=true;
        GameG.NewDelayOnce(function () {
            ani.node.active=false;
        }, 2.4);
    },

    //- 添加注
    animAddCast(data, noAnim, call, bOther) {
        let max=60
        let allNum=0
        for (let _ in (data)) {
            let v=data[_]

            let vec=[]
            let idx=v.BetType
            let num=v.Count
            for (let i=xlhd.dtBaseBet.length; i<=1; ++ i) {
                vec[i]=Math.floor(num / xlhd.dtBaseBet[i])
                num=num % xlhd.dtBaseBet[i]
            }

            for (let i=1; i<=vec.length; ++ i) {
                // 获取筹码
                for (let j=1; j<=vec[i]; ++ j) {
                    let tmp=null;
                    if (this.uiCast[idx].length>=max) {
                        this.uiCastIdx[idx]=((this.uiCastIdx[idx] + 1) % max) + 1;
                        tmp=this.uiCast[idx][this.uiCastIdx[idx]];
                        this.SetCastData(tmp, i);
                    }
                    else {
                        tmp=xlhd.poolCast.get({ cfg : xlhd.dtBaseBet[i] });
                        this.uiCast[idx][(this.uiCast[idx]).length + 1]=tmp;
                    }

                    // 执行动画
                    if (noAnim) {
                        tmp.position=over;
                        if (adt[1]) {
                            adt[1]();
                        }
                    }
                    else {
                        // 初始化动画位置
                        let beg, over;
                        if (bOther) {
                            let rt=idx == 1 && this.dtBetRectOther[1] || this.dtBetRectOther[2];
                            rt=idx == 2 && this.dtBetRectOther[Math.random(0, 3) % 2 + 1] || rt;
                            beg=this.uiRoot.betUser.position;
                            over=FFunction.randInRect(this.dtBetRect[idx]);
                        }
                        else {
                            let len=5
                            let list=this.uiRoot.betBtn.chip;
                            let pos=- this.uiRoot.betBtn.scroll.position.x;
                            if (list.length>5 && (pos>this.dtBetBtnOfst.x * (i - 1)) || (pos + this.dtBetBtnOfst.x * (len + 1)<this.dtBetBtnOfst.x * i)) {
                                let ofstx=0;
                                if (i + (len - 1)<=list.length) {
                                    ofstx=list[1].btn.position.x - list[i].btn.position.x;
                                }
                                else if (i - (len - 1)>=0) {
                                    ofstx=- this.dtBetBtnOfst.x * (i - 5);
                                }
                                this.uiRoot.betBtn.scroll.position=cc.v3(ofstx, this.uiRoot.betBtn.scroll.position.y, 0);
                            }

                            beg=FFunction.convertPosN2N(this.uiRoot.betBtn.chip[i].btn, this.uiRoot.betNum.betCast, cc.v3(0, 0, 0));
                            over=FFunction.randInRect(this.dtBetRect[idx]);
                        }

                        // 开始动画
                        if (this.hCastAnim[tmp] != undefined) {
                            this.hCastAnim[tmp].stop();
                            delete this.hCastAnim[tmp];
                        }
                        tmp.position=beg;
                        tmp.active=false;
                        let self=this
                        let sqs=cc.tween(tmp);
                        this.hCastAnim[tmp]=sqs;
                        sqs.delay(Math.min(allNum * 0.2, 1));
                        sqs.call(function () {
                            tmp.active=true;
                            tmp.zIndex=max * 11;
                        });
                        sqs.to(0.5, { position : over }, { easing : 'sineOut' });
                        FFunction.argFuncAnim(sqs, function (adt) {
                            if (adt[1]) {
                                adt[1]();
                            }
                            self.hCastAnim[adt[2]]=null;
                        }, [call, tmp]);
                        sqs.start();
                        allNum=allNum + 1;
                    }
                }
            }
        }
    },

    //- 清除注
    resetBetCast(idx, num) {
        let castmax=50
        let coinmax=xlhd.dtBaseBet[xlhd.dtBaseBet].length * castmax

        // 获取筹码数组
        let vec=[], cast=0;
        num=Math.min(num, coinmax);
        for (let i=xlhd.dtBaseBet.length; i<=1; ++ i) {
            vec[i]=Math.floor(num / xlhd.dtBaseBet[i])
            num=num % xlhd.dtBaseBet[i];
        }

        // 按数量改变筹码
        for (let j=1; j<=Math.min(vec.length, castmax); ++ j) {
            for (let i=1; i<=vec[j]; ++ i) {
                cast=cast + 1;
                if (cast<=castmax) {
                    // 筹码不足，手动添加
                    this.uiCast[idx]=this.uiCast[idx] || [];
                    if (this.uiCast[idx].length<cast) {
                        tmp=xlhd.poolCast.get([cfg=xlhd.dtBaseBet[j]])
                        this.uiCast[idx][(this.uiCast[idx]).length + 1]=tmp;
                    }

                    let obj=this.uiCast[idx][cast];
                    obj.position=FFunction.randInRect(this.dtBetRect[idx]);
                }
                // 修正沒有重新指定籌碼的問題
                this.SetCastData(this.uiCast[idx][cast], j)
            }
        }

        // 删除多余的筹码
        for (let i=cast + 1; i<=(this.uiCast[idx]).length; ++ i) {
            xlhd.poolCast.remove(this.uiCast[idx][i])
            this.uiCast[idx][i]=null
        }
    },

    //- 更新桌面底注
    updateAllBetNum(idx, num) {
        let txt=this.uiRoot.betNum[xlhd.gameData.dtRefBetType[idx].name];
        txt.node.parent.active=(idx && (num && num>0));
        if (idx && num) {
            txt.string=this.MoneyText(num);
            if (num == 0) {
                for (let _ in (this.uiCast[idx])) {
                    let v=this.uiCast[idx][_];

                    xlhd.poolCast.remove(v)
                }
                this.uiCast[idx]=[]
            }
        }
    },

    //- 更新庄家信息
    updateBanker(data) {
        this.updateBetBtnState()
    },

    //- 更新下注功能按钮的状态
    updateBetBtnState() {
        let score=xlhd.UserInfo.Score;
        let recode=xlhd.gameControl.coluBetCoin(xlhd.dtBetRecodeOrg) * xlhd.dtBetRate;
        let allowBet=! xlhd.bIBanker && xlhd.dtBetState === 0; //and score>=xlhd.dtUserBet

        if (this.uiRoot.betBtn.chip) {
            for (let i=1; i<=xlhd.dtBaseBet.length; ++ i) {
                let sufficient=score>=xlhd.dtBaseBet[i - 1] * xlhd.dtBetRate;
                this.uiRoot.betBtn.chip[i].btn.interactable=allowBet && sufficient;
                if (sufficient == false && xlhd.chooseBet>=i) {
                    let index=i - 1<=0 && 1 || i - 1;
                    this.setUserBet(xlhd.betCount[index - 1], index);
                }
            }
        }

        this.uiRoot.betBtn.auto.interactable=allowBet;
        this.uiRoot.betBtn.autoNo.interactable=allowBet;

        // 上莊中還是能按上莊列表按鈕
        this.uiRoot.betBtn.betLong.interactable=allowBet;
        this.uiRoot.betBtn.betHe.interactable=allowBet;
        this.uiRoot.betBtn.betHu.interactable=allowBet;
    },

    //- 自己分数增加向上飘分数动画
    showAddCoin(num, tm, delay, score) {
        let self=this;

        if (num == 0) {
            return;
        }

        let obj=null;
        if (num<0) {
            obj=this.uiRoot.user.delcoin;
        }
        else {
            obj=this.uiRoot.user.addcoin;
        }

        obj.text=(num>0 && "+" || "") + this.MoneyText(num);
        let pos=cc.v3(this.uiRoot.user.coin.node.position.x, this.uiRoot.user.coin.node.position.y + 30, this.uiRoot.user.coin.node.position.z);
        obj.node.position=pos;
        let sqs=cc.tween(obj.node);
        sqs.delay(delay);
        sqs.call(function () {
            obj.node.active=true;
            if (num>0) {
                self.updateUserCoin(score);
            }
        });
        sqs.by(tm, { position : cc.v3(0, 100, 0) });
        sqs.call(function () {
            obj.node.active=false;
        });
        sqs.start();
    },

    SetCastData(obj, i) {
        GameG.SetImageSprite(cc.find("btn", obj).getComponent(cc.Sprite), G.GetGamePName(), xlhd.gameData.GetBetBtnImg(xlhd.dtBaseBet[i]) + "_1", false);
        obj.Find("bet").getComponent(cc.Label).text=this.MoneyText(xlhd.dtBaseBet[i] * xlhd.dtBetRate);


    },

    // 移除沒贏區域的籌碼
    RemoveLoseArea(dtRstWin) {
        let IsPlayAudio=false;

        for (let j=1; j<=3; ++ j) {
            if (j != dtRstWin) {
                if (this.uiCast[j].length>0) {
                    IsPlayAudio=true;

                    for (let i=1; i<=(this.uiCast[j]).length; ++ i) {
                        let obj=this.uiCast[j][i];
                        let sqs=cc.tween(obj);
                        sqs.delay(Math.random() * 0.3);
                        sqs.call(function () {
                            obj.active=false;
                        });
                    }
                }
            }
        }

        if (IsPlayAudio == true) {
            xlhd.gameAudio.outCoin();
        }
    },

    // 播放獲勝區域動畫
    PlayWinAnimation(dtRstWin, returnMoney) {
        // 取得玩家下注金額
        let self=this;
        let userBetRecode=0;
        if (xlhd.dtBetRecode != null) {
            if (xlhd.dtBetRecode[dtRstWin] != null) {
                userBetRecode=xlhd.dtBetRecode[dtRstWin].Count * xlhd.dtBetRate
            }
        }
        // 其他玩家下注金額
        let otherBetRecode=0;
        if (xlhd.BroadBet[dtRstWin] != null) {
            otherBetRecode=xlhd.BroadBet[dtRstWin].Money - userBetRecode
        }

        // 該位置有下注
        if (userBetRecode>0 || otherBetRecode>0) {
            let newCountData=null;

            // 補錢
            if (returnMoney == false) {
                GameG.NewDelayOnce(function (adt) {
                    newCountData=this.AddWinCast(userBetRecode, 4, dtRstWin);
                    this.AddWinCast(otherBetRecode, dtRstWin, dtRstWin);
                }, 0.5);
            }
            else {
                newCountData=this.CalCast(userBetRecode, dtRstWin);
            }

            // 獲勝飛錢
            GameG.NewDelayOnce(function (adt) {
                xlhd.gameAudio.outCoin();
                // 玩家有下注
                if (userBetRecode>0) {
                    let acc=this.resultFlyUserCast(newCountData, otherBetRecode, self.uiCast[4], dtRstWin, returnMoney)
                    // 其他玩家有下注
                    if (otherBetRecode>0) {
                        this.resultFlyOtherCast(acc, dtRstWin);
                    }
                    // 玩家沒下住
                }
                else {
                    this.resultFlyOtherCast(1, dtRstWin);
                }
            }, 1.0);
        }
    },

    CalCast(money, dtRstWin) {
        if (money == 0) {
            return
        }

        let CheckBet=require("CheckBet")
        let Magnification=[1, 8, 1]
        let Data=CheckBet.Init(money * Magnification[dtRstWin], xlhd.dtBaseBet, xlhd.dtBetRate)
        let BetData=Data.value;
        let CountData=Data.count;

        // 將計算結果轉換回一般順序
        let newCountData=[]
        for (let i=1; i<=BetData.length; ++ i) {
            t1=parseInt(BetData[i] / xlhd.dtBetRate)
            for (let j=1; j<=xlhd.dtBaseBet.length; ++ j) {
                if (t1 == xlhd.dtBaseBet[j]) {
                    newCountData[j]=CountData[i]
                }
            }
        }

        return newCountData
    },

    // 增加贏區域籌碼數
    AddWinCast(money, poolIdx, dtRstWin) {
        if (money == 0) {
            return
        }

        let CheckBet=require("CheckBet")
        let Magnification=[1, 8, 1]
        let Data=CheckBet.Init(money * Magnification[dtRstWin], xlhd.dtBaseBet, xlhd.dtBetRate)
        let BetData=Data.value;
        let CountData=Data.count;

        // 將計算結果轉換回一般順序
        let newCountData=[]
        for (let i=1; i<=BetData.length; ++ i) {
            t1=parseInt(BetData[i] / xlhd.dtBetRate);
            for (let j=1; j<=xlhd.dtBaseBet.length; ++ j) {
                if (t1 == xlhd.dtBaseBet[j]) {
                    newCountData[j]=CountData[i];
                }
            }
        }

        return newCountData;
    },

    FlyUserCast(obj) {
        let pos=GameG.LocalConvertWorldPointAR(this.uiRoot.user.head.node)
        let sqs=cc.Tween(obj);
        sqs.delay(Math.random() * 0.2);
        sqs.to(0.5, { position : pos });
        sqs.call(function () {
            obj.active=false;
        });

    },

    // 贏區域的籌碼飛向玩家
    resultFlyUserCast(newCountData, otherBetRecode, usrpool, dtRstWin, returnMoney) {
        // 莊家賠的籌碼
        if (returnMoney == false) {
        }

        // 其他玩家有下注，一部分飛向玩家，其他之後飛向其他玩家
        acc=1
        if (otherBetRecode != 0) {
            for (let i=1; i<=newCountData.length; ++ i) {
                for (let j=1; j<=newCountData[i]; ++ j) {
                    let obj=this.uiCast[dtRstWin][acc];
                    this.SetCastData(obj, i);
                    this.FlyUserCast(obj);

                    acc=acc + 1;
                }
            }
            // 其他玩家沒下住，所有的錢飛向玩家
        }
        else {
            for (let i=1; i<=this.uiCast[dtRstWin].length; ++ i) {
                let obj=this.uiCast[dtRstWin][i];
                this.FlyUserCast(obj);
            }
        }
        return acc
    },

    // 贏區域的籌碼飛向其他玩家
    resultFlyOtherCast(beginIdx, dtRstWin) {
        if (beginIdx == 0) {
            beginIdx=1;
        }

        for (let i=beginIdx; i<=(this.uiCast[dtRstWin]).length; ++ i) {
            let obj=this.uiCast[dtRstWin][i];
            let endPos=this.uiRoot.betUser.position;

            let sqs=cc.tween(obj);
            sqs.delay(Math.random() * 0.2);
            sqs.to(1, { position : endPos });
            sqs.start();
        }
    },

    GameStart() {
        this.uiRoot.userStar.SetActive(false)
        for (let k in (this.uiRoot.userList)) {
            let v=this.uiRoot.userList[k];
            v.GameStart()
        }
        for (let k in (this.uiRoot.betList)) {
            let v=this.uiRoot.betList[k];
            v.GameStart()
        }
    },

    GameEnd() {
        this.uiRoot.userStar.SetActive(false);
        for (let k in (this.uiRoot.userList)) {
            let v=this.uiRoot.userList[k];
            v.GameEnd();
        }
        for (let k in (this.uiRoot.betList)) {
            let v=this.uiRoot.betList[k];
            v.GameEnd();
        }
    },

    SetUserList(data) {
        for (let k in (data.RichestList)) {
            let v=data.RichestList[k];

            for (let k2 in (this.uiRoot.userList)) {
                let v2=this.uiRoot.userList[k2];

                if (v.UserID != 0 && k2 == v.Ranking) {
                    v2.SetActive(true);
                    v2.SetHead(v.UserFaceID);
                    v2.SetUserId(v.UserID);
                    v2.SetScore(v.Money);
                }
            }
        }
    },

    SetUserStar(data) {
        if (data == null) {
            return
        }
        this.uiRoot.userStar.SetActive(true);
        this.uiRoot.userStar.SetHead(data.UserFaceID);
        this.uiRoot.userStar.SetUserId(data.UserID);
    },

    //回收下注区金额
    ShowWinChip(siteNo, cloneChip) {
        let self=this;
        let time=0;
        if (cloneChip) {
            this.uiRoot.betList[siteNo].CloneWinChip(siteNo); //庄家赔付
            time=0.7;
        }

        GameG.NewDelayOnce(function () {
            let headPosition=GameG.LocalConvertWorldPointAR(self.uiRoot.user.head.node)
            self.uiRoot.betList[siteNo].ShowWinChip(headPosition, GameG.getUserID());
            for (let k in (self.uiRoot.userList)) {
                let v=self.uiRoot.userList[k];
                self.uiRoot.betList[siteNo].ShowWinChip(null, v.GetUserId());
            }
            self.uiRoot.betList[siteNo].ShowWinChip(null, null);
        }, time)
    },

    //回收下注区金额
    ShowLoseChip(siteNo) {
        this.uiRoot.betList[siteNo].ChangeChipUserId(xlhd.winList, false)
        this.uiRoot.betList[siteNo].ShowWinChip(this.uiRoot.zhuang.position, GameG.getUserID());
        for (let k in (this.uiRoot.userList)) {
            let v=this.uiRoot.userList[k];
            this.uiRoot.betList[siteNo].ShowWinChip(this.uiRoot.zhuang.position, v.GetUserId())
        }
        this.uiRoot.betList[siteNo].ShowWinChip(this.uiRoot.zhuang.position, null)
    },

    ShowClearBetChip(userId) {
        let targetPos=null;
        for (let k in (this.uiRoot.betList)) {
            let v=this.uiRoot.betList[k];

            for (let kuser in (this.uiRoot.userList)) {
                let vuser=this.uiRoot.userList[kuser];

                if (vuser.GetUserId() == userId) {
                    targetPos=vuser.GetPosition();
                }
            }
            if (this.uiRoot.userStar.GetUserId() == userId) {
                targetPos=this.uiRoot.userStar.GetPosition();
            }

            if (GameG.getUserID() == userId) {
                targetPos=GameG.LocalConvertWorldPointAR(this.uiRoot.user.head.node)
                this.ShowBroadCastBetMy(k, 0);
            }

            v.ShowClearBetChip(userId, targetPos);
        }
    },

    ClearBetRetError(siteNo, num, userId) {
        this.uiRoot.betList[siteNo].ClearBetRetError(num, userId);
    },

    ShowBroadCastBetAll(siteNo, num) {
        this.uiRoot.betList[siteNo].ShowBroadCastBetAll(num);
    },

    ShowBroadCastBetMy(siteNo, num) {
        this.uiRoot.betList[siteNo].ShowBroadCastBetMy(num);
    },

    ShowCastBetChip(siteNo, num, index, userId) {
        let self=this;
        let targetPos=null;
        let dir=10;
        //自己
        if (targetPos == null) {
            if (GameG.getUserID() == userId) {
                targetPos=GameG.LocalConvertWorldPointAR(this.uiRoot.betBtn.chip[index].root);
            }
        }
        //其他
        if (targetPos == null) {
            cc.tween(this.uiRoot.betUser)
              .to(0.1, { position : cc.v3(this.uiRoot.betUserStartPos.x - dir, this.uiRoot.betUserStartPos.y + dir, 0) })
              .to(0.1, { position : cc.v3(this.uiRoot.betUserStartPos.x, this.uiRoot.betUserStartPos.y, 0) })
              .call(function () {
                  self.uiRoot.betUser.position=self.uiRoot.betUserStartPos;
              })
                .start;
        }

        this.uiRoot.betList[siteNo].ShowCastBetChip(num, siteNo, index, true, targetPos, userId);
    },

    ShowLuckyStar(siteNo, show) {
        if (show) {
            this.uiRoot.betList[siteNo].ShowLuckyStar();
        }
        else {
            this.uiRoot.betList[siteNo].StopLuckyStar();
        }
    },

    ShowResultWin(data) {
        let self=this;
        this.bLockUseCoin=true;
        xlhd.winList=[];
        for (let k in (data.StageUerInfo)) {
            let v=data.StageUerInfo[k];

            if (v.Win>0) {
                xlhd.winList[k]=v.UserID;
            }
        }

        let timer=0.85;

        for (let k in (this.uiRoot.betList)) {
            let v=this.uiRoot.betList[k];

            if (k == xlhd.dtRstWin) {
                v.ShowBlinkWin(2);
            }
        }

        let sequence=cc.tween(this.uiRoot.root);
        sequence.delay(timer);
        sequence.call(function () {
            //xlhd.gameAudio.outCoin();
            if (xlhd.dtRstWin == 2) {
                self.ShowWinChip(2, true);
                //開和全退
                self.ShowWinChip(1, false);
                self.ShowWinChip(3, false);
            }
            else {
                for (let k in (self.uiRoot.betList)) {
                    let v=self.uiRoot.betList[k];

                    if (k == xlhd.dtRstWin) {
                        self.ShowWinChip(k, true)
                    }
                    else {
                        self.ShowLoseChip(k)
                    }
                }
            }
        });
        sequence.delay(timer);
        sequence.call(function () {
            self.ShowResultScore(data);
            self.bLockUseCoin=false;
        });
        sequence.start();

    },

    ShowResultScore(data) {
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
    ShowBlinkWin(idx, times) {
        this.uiRoot.betList[idx].ShowBlinkWin(times)
    },

    StopBlinkWin(idx) {
        this.uiRoot.betList[idx].StopBlinkWin()
    },

};

module.exports=GameLayer
