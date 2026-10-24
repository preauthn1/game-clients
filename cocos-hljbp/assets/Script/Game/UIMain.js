var G=require("Global")
var GameG=require("GameGlobal")
var GameManager=require("GameManager")
var Tool=require("Tool")
var GameConfig=require("GameConfig")
var GameInfo=require("GameInfo")
var FileManager=require("FileManager")
var SoundManager=require("SoundManager")
var root=null
var countdown=null
var countdownFrameImg=null
var countdownImg=null
var countdownTxt=null
var limitText=null
var message=null
var warningMessage=null
var warningMessageText=null
var warningMessageImage=null
var winningRecordWindow=null
var winningRecordCloseButton=null
var winningRecordCloseBG=null
var winningRecordPrefab=null
var exitGameButton=null
var settingButton=null
var descriptionButton=null
var descriptionWindow=null
var descriptionCloseBG=null
var descriptionCloseButton=null
var descriptionText=null
var settingWindow=null
var settingCloseBG=null
var settingCloseButton=null
var bgmOpenToggle=null
var bgmCloseToggle=null
var soundOpenToggle=null
var soundCloseToggle=null
var versionText=null
var betSkeleton=null
var winningRecordContent=[]
var countdownSequence=null
var CountdownCallback=null

var UIMain={
    extends : cc.Component,

    Init() {
        root=cc.find("Canvas/UI/GameLayer/UIMain")
        countdown=cc.find("Countdown", root)
        countdownFrameImg=cc.find("Countdown/Frame", root).getComponent(cc.Sprite)
        countdownImg=cc.find("Countdown/Image", root).getComponent(cc.Sprite)
        countdownTxt=cc.find("Countdown/Text", root).getComponent("TextControl")
        limitText=cc.find("LimitText", root).getComponent(cc.RichText)
        message=cc.find("Message", root)
        warningMessage=cc.find("WarningMessage", root)
        warningMessageText=cc.find("WarningMessage/Text", root).getComponent(cc.Label)
        warningMessageImage=cc.find("WarningMessage/Image", root).getComponent(cc.Sprite)
        winningRecordWindow=cc.find("WinningRecord", root)
        winningRecordCloseButton=cc.find("WinningRecord/CloseButton", root).getComponent(cc.Button)
        winningRecordCloseBG=cc.find("WinningRecord/CloseBG", root).getComponent(cc.Button)
        winningRecordPrefab=cc.find("WinningRecord/ScrollView/Viewport/Prefab", root)
        exitGameButton=cc.find("Options/ExitGameButton", root).getComponent(cc.Button)
        settingButton=cc.find("Options/SettingButton", root).getComponent(cc.Button)
        descriptionButton=cc.find("Options/DescriptionButton", root).getComponent(cc.Button)
        descriptionWindow=cc.find("Options/DescriptionWindow", root)
        descriptionCloseBG=cc.find("Options/DescriptionWindow/CloseBG", root).getComponent(cc.Button)
        descriptionCloseButton=cc.find("Options/DescriptionWindow/CloseButton", root).getComponent(cc.Button)
        descriptionText=cc.find("Options/DescriptionWindow/ScrollRect/Text", root).getComponent(cc.RichText)
        settingWindow=cc.find("Options/SettingWindow", root)
        settingCloseBG=cc.find("Options/SettingWindow/CloseBG", root).getComponent(cc.Button)
        settingCloseButton=cc.find("Options/SettingWindow/CloseButton", root).getComponent(cc.Button)
        bgmOpenToggle=cc.find("Options/SettingWindow/Bgm/OpenToggle", root).getComponent(cc.Toggle)
        bgmCloseToggle=cc.find("Options/SettingWindow/Bgm/CloseToggle", root).getComponent(cc.Toggle)
        soundOpenToggle=cc.find("Options/SettingWindow/Sound/OpenToggle", root).getComponent(cc.Toggle)
        soundCloseToggle=cc.find("Options/SettingWindow/Sound/CloseToggle", root).getComponent(cc.Toggle)
        versionText=cc.find("Options/SettingWindow/VersionText", root).getComponent(cc.Label)
        betSkeleton=cc.find("Skeletons/BetSkeleton", root).getComponent(sp.Skeleton)

        countdownSequence=null
        CountdownCallback=null
        winningRecordContent=[]

        limitText.string=""
        winningRecordWindow.active=(false)
        winningRecordPrefab.active=(false)
        countdown.active=(false)
        descriptionWindow.active=(false)
        settingWindow.active=(false)
        message.active=(false)
        warningMessage.active=(false)
        betSkeleton.node.active=(false)
        let self=this

        winningRecordCloseButton.node.on('click', function () {
            GameG.PlayGameSound("click")
            winningRecordWindow.active=(false)
        })

        winningRecordCloseBG.node.on('click', function () {
            winningRecordWindow.active=(false)
        })


        //版本
        let localVersion=GameG.GetGameVersion()
        versionText.string="V." + (localVersion).toString()

        //離開遊戲
        let Referrer=GameConfig.getReferrer()
        exitGameButton.node.active=(Referrer != "0")
        exitGameButton.node.on('click', function () {
            GameG.PlayGameSound("click")
            GameG.ExitGame();
        })

        //遊戲說明
        descriptionButton.node.on('click', function () {
            GameG.PlayGameSound("click")
            descriptionWindow.active=(true)
            self.updateDescription()
        })
        descriptionCloseButton.node.on('click', function () {
            GameG.PlayGameSound("click")
            descriptionWindow.active=(false)
            window.isShowHelp = true
        })

        descriptionCloseBG.node.on('click', function () {
            descriptionWindow.active=(false)
            window.isShowHelp = true
        })

        if (window.isShowHelp == null){
            descriptionWindow.active=(true)
            this.updateDescription()
        }

        //設定
        settingButton.node.on('click', function () {
            GameG.PlayGameSound("click")
            settingWindow.active=(true)
        })

        settingCloseButton.node.on('click', function () {
            GameG.PlayGameSound("click")
            settingWindow.active=(false)
        })

        settingCloseBG.node.on('click', function () {
            settingWindow.active=(false)
        })

        //音效
        settingWindow.active=(true)
        let musicVale=SoundManager.GetMusic()
        bgmOpenToggle.isChecked=musicVale;
        bgmCloseToggle.isChecked= ! musicVale;

        let soundVale=SoundManager.GetSound()
        soundOpenToggle.isChecked=soundVale;
        soundCloseToggle.isChecked= ! soundVale;
        settingWindow.active=(false)

        let SetBgm=function (value) {
            SoundManager.SetMusic(value)
        };

        bgmOpenToggle.node.on('toggle', function (toggle) {
            SetBgm(true);
            GameG.PlayGameSound("click")
        });

        bgmCloseToggle.node.on('toggle', function (toggle) {
            SetBgm(false);
            GameG.PlayGameSound("click")
        });

        let SetSound=function (value) {
            SoundManager.SetSound(value)
        };

        soundOpenToggle.node.on('toggle', function (toggle) {
            SetSound(true)
            GameG.PlayGameSound("click")
        });

        soundCloseToggle.node.on('toggle', function (toggle) {
            SetSound(false)
            GameG.PlayGameSound("click")
        });
    },

    //音效
    SetBgm(value) {
        GameG.SetMusicStatus(value)
    },

    SetSound(value) {
        GameG.SetSoundStatus(value)
    },

    SetBetLimit(min, max) {
        min=Tool.MoneyText(min)
        max=Tool.MoneyText(max)
        limitText.string="<color=#C0AF71>" + GameG.GetLocalizedString("限红") + "</color>\n" + min + "~" + max;
    },

    //遊戲說明
    SetGameDescriptionText(description) {
        descriptionText.string=""
        for (let k in description) {
            descriptionText.string=descriptionText.string + description[k] + "\n"
        }

        descriptionText.node.width=descriptionText.node.width
        descriptionText.node.height=descriptionText.preferredHeight
    },

    //- 设置游戏说明
    updateDescription() {
        let fileName=GameInfo.GetGamePName(GameManager.getGameId())
        let urlData=window.location.search.substring(1);
        if (urlData == null || urlData == "") {
            FileManager.LoadFile(true, "Txt", fileName, cc.TextAsset, (err, data) => {
                if (err) {
                    return
                }

                descriptionText.string=data.text
            })
        }
        else {
            cc.loader.load({ url : fileName + ".txt?=" + Math.random().toString(), type : cc.TextAsset }, function (err, ret) {
                if (err) {
                    console.error(err);
                    return;
                }

                descriptionText.string=ret
            })
        }
    },

    //倒數
    StartCountdown(time, Callback) {
        let self=this
        this.StopCountdown()
        countdown.active=(true)
        countdownTxt.node.scale=1

        time=time - GameManager.calLoadTime()

        let remainingTime=time 	//剩餘時間
        let alertSec=3 			//開始警報時間
        let alertInterval=1.1  	//警報間隔
        let gapTime=0.1 			// 間隔時間
        CountdownCallback=Callback
        countdownSequence=GameG.StartCountDown(countdown, gapTime, function () {
            remainingTime=remainingTime - gapTime
            countdownImg.fillRange=remainingTime / time
            countdownTxt.string=Math.ceil(remainingTime)
            if (remainingTime<=alertSec) {
                if (alertInterval>1) {
                    GameG.PlayGameSound("countdown")
                    alertInterval=0
                    countdownFrameImg.node.color=Tool.Color(255, 0, 0, 255)
                    countdownImg.node.color=Tool.Color(255, 0, 0, 255)
                    countdownTxt.node.color=Tool.Color(255, 0, 0, 255)
                    countdownTxt.node.scale=1.4
                    cc.tween(countdownTxt.node)
                      .to(0.1, { scale : 2.3 })
                      .to(0.1, { scale : 1.4 })
                      .start()
                }
                alertInterval=alertInterval + gapTime
                if (remainingTime<=0) {
                    self.StopCountdown()
                }
            }
        })
    },

    StopCountdown() {
        if (countdownSequence != null) {
            GameG.RemoveCountDown(countdownSequence)
            countdownSequence=null
            if (CountdownCallback != null) {
                CountdownCallback()
                CountdownCallback=null
            }
        }

        countdownFrameImg.node.color=Tool.Color(255, 255, 255, 255)
        countdownImg.node.color=Tool.Color(255, 255, 255, 255)
        countdownTxt.node.color=Tool.Color(255, 255, 255, 255)
        countdownTxt.node.scale=1
        countdown.active=(false)
    },

    //訊息
    ShowMessage(msg, timer) {
        timer=timer || 1
        let clone=cc.instantiate(message)
        let background1=cc.find("Background1", clone).getComponent(cc.Sprite)
        let background2=cc.find("Background2", clone).getComponent(cc.Sprite)
        let txt=cc.find("Text", clone).getComponent(cc.Label)

        background1.node.color=new cc.Color(background1.node.color.r, background1.node.color.g, background1.node.color.b)
        background2.node.color=new cc.Color(background2.node.color.r, background2.node.color.g, background2.node.color.b)
        txt.node.color=new cc.Color(txt.node.color.r, txt.node.color.g, txt.node.color.b)
        txt.string=msg

        clone.parent=(root)
        clone.scale=message.scale
        clone.position=message.position
        clone.active=(true)

        cc.tween(clone).by(timer / 3, { y : 30 })
          .delay(timer / 3 * 2)
          .call(function () {
              clone.destroy();
          })
          .start()

        cc.tween(background1.node)
          .to(timer / 3, { opacity : 255 })
          .delay(timer / 3)
          .to(timer / 3, { opacity : 0 })
          .start()

        cc.tween(background2.node)
          .to(timer / 3, { opacity : 255 })
          .delay(timer / 3)
          .to(timer / 3, { opacity : 0 })
          .start()
    },

    //警告訊息
    ShowWarningMessage(text) {
        warningMessage.active=(true)
        warningMessageText.node.active=(true)
        warningMessageImage.node.active=(false)
        warningMessageText.string=text
    },

    ShowWarningImage(spriteName) {
        warningMessage.active=(true)
        warningMessageText.node.active=(false)
        warningMessageImage.node.active=(true)
        GameG.SetImageSprite(warningMessageImage, "", spriteName)
        warningMessageImage.sizeMode=cc.Sprite.SizeMode.TRIMMED;
    },

    HideWarningMessage() {
        warningMessage.active=(false)
    },

    //開始下注
    PlayStartBetAnimation(Callback) {
        GameG.PlayGameSound("betBegin")
        Tool.PlayAnimation(betSkeleton, "startbet", 2.2, function () {
            if (Callback != null) {
                Callback()
            }
        })
    },

    //停止下注
    PlayEndBetAnimation(Callback) {
        GameG.PlayGameSound("betEnd")
        Tool.PlayAnimation(betSkeleton, "endbet", 2.2, Callback)
    },

    //獲獎紀錄
    SetActiveWinningRecord(value) {
        winningRecordWindow.active=(value)
    },

    AddWinningRecord(data) {
        let obj=null
        if (winningRecordContent.length<20) {
            let clone=cc.instantiate(winningRecordPrefab)
            clone.parent=(winningRecordPrefab.parent)
            clone.scale=1
            clone.active=(true)

            let content={}
            content.root=clone
            content.background=cc.find("Background", clone).getComponent(cc.Sprite)
            content.idText=cc.find("IDText", clone).getComponent(cc.Label)
            content.moneyText=cc.find("MoneyText", clone).getComponent(cc.Label)
            content.percentageText=cc.find("PercentageText", clone).getComponent(cc.Label)
            content.numberText=cc.find("NumberText", clone).getComponent(cc.Label)
            content.profileImage=cc.find("ProfileImage", clone).getComponent(cc.Sprite)
            obj=content
            winningRecordContent.unshift(content)
        }
        else {
            obj=winningRecordContent[winningRecordContent.length - 1];
            winningRecordContent.unshift(obj);
            winningRecordContent.pop();
        }
        obj.root.setSiblingIndex(1)
        let textColor=Tool.IsSelf(data.userid) && Tool.Color(249, 80, 81, 255) || Tool.Color(192, 175, 113, 255)

        //obj.background.gameObject:SetActive(true)
        obj.idText.string=data.userid
        obj.moneyText.string=Tool.MoneyText(data.winMoney)
        obj.percentageText.string=Tool.PercentageText(data.percentage)
        obj.numberText.string=data.number

        obj.idText.color=textColor
        obj.moneyText.color=textColor
        obj.percentageText.color=textColor
        obj.numberText.color=textColor
        Tool.SetFaceID(obj.profileImage, data.faceid)

        // if winningRecordContent[2] ~= nil then
        // 	winningRecordContent[2].background.gameObject:SetActive(false)
        // end

    },

    OnDestroy() {
        if (countdownSequence != null) {
            GameG.RemoveCountDown(countdownSequence)
        }
    },
};

module.exports=UIMain
