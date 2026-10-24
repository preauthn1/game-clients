var G           = require("Global");
var GameG       = require("GameGlobal");
var GameConfig  = require("GameConfig");
var GameManager = require("GameManager");
var GameInfo    = require("GameInfo");
var FileManager = require("FileManager");
// 接收消息table
var pojectName  = G.GetGamePName();
var Tool        = require("Tool");

// var Tool=require("Tool");

function UIMain(root){
    
    let countdown         = cc.find("Countdown", root);
    let countdownFrameImg = cc.find("Countdown/Frame", root).getComponent(cc.Sprite);
    let countdownImg      = cc.find("Countdown/Image", root).getComponent(cc.Sprite);
    let countdownTxt      = cc.find("Countdown/Text", root).getComponent("TextControl");
    
    let message             = cc.find("Message", root);
    let prefabNeedMoney     = cc.find("needMoneyMSG", root);
    let prefabNeedMoneyText = cc.find("needMoneyMSG/Text", root).getComponent(cc.Label);
    
    let exitGameButton    = cc.find("Options/ExitGameButton", root).getComponent(cc.Button);
    let settingButton     = cc.find("Options/SettingButton", root).getComponent(cc.Button);
    let descriptionButton = cc.find("Options/DescriptionButton", root).getComponent(cc.Button);
    
    let descriptionWindow      = cc.find("Options/DescriptionWindow", root);
    let descriptionCloseBG     = cc.find("Options/DescriptionWindow/CloseBG", root).getComponent(cc.Button);
    let descriptionCloseButton = cc.find("Options/DescriptionWindow/CloseButton", root).getComponent(cc.Button);
    let descriptionText        = cc.find("Options/DescriptionWindow/ScrollRect/Text", root).getComponent(cc.RichText);
    
    let settingWindow      = cc.find("Options/SettingWindow", root);
    let settingCloseBG     = cc.find("Options/SettingWindow/CloseBG", root).getComponent(cc.Button);
    let settingCloseButton = cc.find("Options/SettingWindow/CloseButton", root).getComponent(cc.Button);
    let bgmOpenToggle      = cc.find("Options/SettingWindow/Bgm/OpenToggle", root).getComponent(cc.Toggle);
    let bgmCloseToggle     = cc.find("Options/SettingWindow/Bgm/CloseToggle", root).getComponent(cc.Toggle);
    let soundOpenToggle    = cc.find("Options/SettingWindow/Sound/OpenToggle", root).getComponent(cc.Toggle);
    let soundCloseToggle   = cc.find("Options/SettingWindow/Sound/CloseToggle", root).getComponent(cc.Toggle);
    let versionText        = cc.find("Options/SettingWindow/VersionText", root).getComponent(cc.Label);
    
    let mask               = cc.find("Skeletons/Mask", root);
    let betSkeleton        = cc.find("Skeletons/BetSkeleton", root).getComponent(sp.Skeleton);
    let startBetParticle   = cc.find("Skeletons/StartBetParticle", root);
    let dealerOpenSkeleton = cc.find("Skeletons/DealerOpenSkeleton", root).getComponent(sp.Skeleton);
    let userWinSkeleton    = cc.find("Skeletons/UserWinSkeleton", root).getComponent(sp.Skeleton);
    let sWinSkeleton       = cc.find("Skeletons/SWinSkeleton", root).getComponent(sp.Skeleton);
    
    let baseLimitText = cc.find("GameInfo/BaseLimitText", root).getComponent(cc.Label);
    let sideLimitText = cc.find("GameInfo/SideLimitText", root).getComponent(cc.Label);
    let roundText     = cc.find("GameInfo/RoundText", root).getComponent(cc.Label);
    let roomIDText    = cc.find("GameInfo/RoomIDText", root).getComponent(cc.Label);
    let watchText     = cc.find("GameInfo/WatchText", root).getComponent(cc.Label);
    
    let oddsSheetToggle = cc.find("OddsSheetToggle", root).getComponent(cc.Toggle);
    
    let oddsText = [];
    for(let i = 0; i < 2; i++){
        //1:邊注賠率，2:特殊牌賠率
        oddsText[i] = [];
        for(let j = 0; j < 2; j++){
            oddsText[i][j]        = cc.find("OddsSheetToggle/OddsText" + (i + 1) + "-" + (j + 1), root).getComponent(cc.Label);
            oddsText[i][j].string = "";
        }
    }
    
    let gameState      = cc.find("GameState", root);
    let gameStateText  = cc.find("GameState/Text", root).getComponent(cc.Label);
    let gameStateImage = cc.find("GameState/Image", root).getComponent(cc.Sprite);
    let waitStart      = cc.find("WaitStart", root);
    
    let countdownSequence     = null;
    let CountdownCallback     = null;
    let kickCountdownSequence = null;
    
    waitStart.active          = false;
    countdown.active          = false;
    descriptionWindow.active  = false;
    gameState.active          = false;
    message.active            = false;
    prefabNeedMoney.active    = false;
    mask.active               = false;
    betSkeleton.node.active   = false;
    startBetParticle.active   = false;
    startBetParticle.ballA    = startBetParticle.children[0];
    startBetParticle.ballB    = startBetParticle.children[1];
    startBetParticle.Particle = startBetParticle.children[2];
    
    dealerOpenSkeleton.node.active = false;
    userWinSkeleton.node.active    = false;
    sWinSkeleton.node.active       = false;
    baseLimitText.string           = "";
    sideLimitText.string           = "";
    
    //版本
    versionText.string = "V." + GameG.GetGameVersion();
    
    //房間資訊
    this.SetRoomInfo = function(min, baseMax, sideMax, roomID){
        min     = Tool.MoneyText(min);
        baseMax = Tool.MoneyText(baseMax);
        sideMax = Tool.MoneyText(sideMax);
        
        baseLimitText.string = GameG.GetLocalizedString("底注", min + "-" + baseMax);
        sideLimitText.string = GameG.GetLocalizedString("边注", min + "-" + sideMax);
        roomIDText.string    = GameG.GetLocalizedString("房间号", roomID);
    };
    
    this.SetWatchCount = function(count){
        watchText.string = GameG.GetLocalizedString("观局人数", count);
    };
    
    //賠率表 1:邊注賠率，2:特殊牌賠率
    this.SetOddsText = function(itype, data){
        let type = itype - 1;
        for(let k in (data)){
            let v    = data[k];
            let odds = v.split(",");
            for(let i = 0; i < 2; i++){
                let newText              = GameG.GetLocalizedString(odds[i]);
                oddsText[type][i].string = oddsText[type][i].string + newText + "\n";
            }
        }
    };
    
    
    //賠率表按鈕           
    oddsSheetToggle.isChecked = true;
    oddsSheetToggle.node.on("toggle", function(toggle){
        GameG.PlayGameSound("click");
        let wid = toggle.node;
        //DOAnchorPosY(isOn && - 140 || 85, 0.2) 
        cc.tween(wid)
          .to(0.2, { y : toggle.isChecked ? 460 : 235 })
          .start();
    });
    
    //局數
    this.SetRound = function(num){
        roundText.string = num;
    };
    
    //等待遊戲開始
    this.SetActiveWaitStart = function(value){
        waitStart.active = (value);
    };
    
    //離開遊戲
    let Referrer = GameConfig.getReferrer();
    exitGameButton.node.on("click", function(){
        GameG.PlayGameSound("click");
        GameG.ExitGame();
    });
    
    if(Referrer == "0"){
        exitGameButton.node.active      = false;
        descriptionButton.node.position = settingButton.node.position;
        settingButton.node.position     = exitGameButton.node.position;
    }
    
    let self = this;
    
    ////遊戲說明
    descriptionButton.node.on("click", function(){
        GameG.PlayGameSound("click");
        descriptionWindow.active = true;
        self.updateDescription();
    });
    descriptionCloseButton.node.on("click", function(){
        GameG.PlayGameSound("click");
        window.wasShowFirst      = true;
        descriptionWindow.active = false;
    });
    
    descriptionCloseBG.node.on("click", function(){
        window.wasShowFirst      = true;
        descriptionWindow.active = false;
    });
    
    this.SetGameDescriptionText = function(description){
        descriptionText.string = "";
        // for(let i = 1; i < description.length; ++i){
        //     descriptionText.string = descriptionText.string + description[i] + "\n";
        // }
        self.updateDescription();
        // let width=descriptionText.sizeDelta.x;
        // let height=descriptionText.preferredHeight;
        // descriptionText.sizeDelta=Tool.Vector2(width, height);
        descriptionText.node.width = descriptionText.node.parent.width;
        //descriptionCloseBG   descriptionCloseButton
        if(!window.wasShowFirst) descriptionWindow.active = true;
    };
    
    this.updateDescription = function(){
        let fileName = GameInfo.GetGamePName(GameManager.getGameId());
        let urlData  = window.location.search.substring(1);
        if(urlData == null || urlData == ""){
            FileManager.LoadFile(true, "Txt", fileName, cc.TextAsset, (err, data) => {
                if(err){
                    return;
                }
                descriptionText.string = data.text;
            });
        }else{
            cc.loader.load({ url : fileName + ".txt?=" + Math.random().toString(), type : cc.TextAsset }, function(err, ret){
                if(err){
                    console.error(err);
                    return;
                }
                
                descriptionText.string = ret;
            });
        }
    };
    this.updateDescription();
    
    ////設定
    settingButton.node.on("click", function(){
        GameG.PlayGameSound("click");
        settingWindow.active = true;
    });
    
    settingCloseButton.node.on("click", function(){
        GameG.PlayGameSound("click");
        settingWindow.active = false;
    });
    
    settingCloseBG.node.on("click", function(){
        settingWindow.active = false;
    });
    
    ////音效
    let SetBgm = function(value){
        GameG.SetMusicStatus(value);
        GameConfig.MusicStatus = value;
    };
    
    let SetSound = function(value){
        GameG.SetSoundStatus(value);
        GameConfig.SoundStatus = value;
    };
    
    settingWindow.active     = true;
    bgmOpenToggle.isChecked  = GameG.GetMusicStatus();
    bgmCloseToggle.isChecked = !GameG.GetMusicStatus();
    SetBgm(GameG.GetMusicStatus());
    soundOpenToggle.isChecked  = GameG.GetSoundStatus();
    soundCloseToggle.isChecked = !GameG.GetSoundStatus();
    SetSound(GameG.GetSoundStatus());
    settingWindow.active = false;
    
    bgmOpenToggle.node.on("toggle", function(isOn){
        SetBgm(isOn.isChecked);
        cc.log("bgmOpenToggle", isOn);
        GameG.PlayGameSound("click");
    });
    bgmCloseToggle.node.on("toggle", function(isOn){
        SetBgm(!isOn.isChecked);
        GameG.PlayGameSound("click");
    });
    soundOpenToggle.node.on("toggle", function(isOn){
        SetSound(isOn.isChecked);
        GameG.PlayGameSound("click");
    });
    soundCloseToggle.node.on("toggle", function(isOn){
        SetSound(!isOn.isChecked);
        GameG.PlayGameSound("click");
    });
    
    this.lastTime  = 0;
    this.deltaTime = function(){
        let dateMana  = new Date();
        let nowTime   = dateMana.getTime();
        let dt        = nowTime - this.lastTime;
        this.lastTime = nowTime;
        return dt / 1000;
    };
    this.deltaTime();
    
    //倒數
    this.StartCountdown = function(time, Callback){
        let self = this;
        this.StopCountdown();
        countdown.active        = true;
        countdownTxt.text       = "0";
        countdownTxt.node.scale = 1;
        let remainingTime       = time; 	//剩餘時間
        let alertSec            = 3; 			//開始警報時間
        let alertInterval       = 1.1;  //警報間隔
        let sequence            = Tool.GetSequence(countdownImg.node);
        let seqct               = Tool.GetSequence(countdownTxt.node);
        seqct.to(0.1, { scale : 2.3 })
             .to(0.1, { scale : 1.4 });
        
        countdownSequence = Tool.GetSequence();
        CountdownCallback = Callback;
        
        sequence.delay(0.01)
                .call(function(){
                    let dt = self.deltaTime();
            
                    remainingTime = remainingTime - dt;
                    if(!countdownImg || !countdownTxt){
                        self.StopCountdown();
                    }else{
                        countdownImg.fillStart = 0.25;
                        countdownImg.fillRange = remainingTime / time;
                        countdownTxt.text      = Math.ceil(remainingTime);
                        if(remainingTime <= alertSec){
                            if(alertInterval > 1){
                                GameG.PlayGameSound("countdown");
                                alertInterval                  = 0;
                                countdownFrameImg.node.color   = Tool.Color(255, 0, 0);
                                countdownFrameImg.node.opacity = 255;
                                countdownImg.node.color        = Tool.Color(255, 0, 0);
                                countdownImg.node.opacity      = 255;
                                countdownTxt.node.color        = Tool.Color(255, 0, 0);
                                countdownTxt.node.opacity      = 255;
                                countdownTxt.node.scale        = Tool.Vector3(1.4, 1.4, 1.4);
                                seqct.start();
                            }
                            alertInterval = alertInterval + dt;
                        }
                    }
                    if(remainingTime <= 0){
                        seqct.stop();
                        self.StopCountdown();
                    }
                });
        
        this.deltaTime();
        // countdownSequence.repeatForever(sequence)
        //                  .start();
        countdownSequence.repeat(99999, sequence)
                         .start();
    };
    
    this.StopCountdown = function(){
        if(countdownSequence != null){
            countdownSequence.stop();
            
            countdownSequence = null;
            if(CountdownCallback != null){
                CountdownCallback();
                CountdownCallback = null;
            }
        }
        
        countdownFrameImg.node.color = Tool.Color(255, 255, 255);
        countdownImg.node.color      = Tool.Color(255, 255, 255);
        countdownTxt.node.color      = Tool.Color(255, 255, 255);
        countdownTxt.node.scale      = Tool.Vector3(0.8, 0.8, 0.8);
        countdown.active             = false;
    };
    
    //踢人倒數
    this.StartKickCountdown = function(time){
        let self = this;
        this.StopKickCountdown();
        
        let sequence          = Tool.GetSequence();
        kickCountdownSequence = sequence;
        for(let i = time; i < 1; i++){
            sequence.call(function(){
                self.ShowGameStateMessage(GameG.GetLocalizedString("长时间未入座", Math.floor(i)));
            }).delay(1);
        }
        sequence.call(function(){
            self.StopKickCountdown();
        }).start();
    };
    
    this.StopKickCountdown = function(){
        if(kickCountdownSequence != null){
            kickCountdownSequence.stop();
            kickCountdownSequence = null;
            this.HideGameState();
        }
    };
    
    this.ShowGameStateMessage = function(text){
        gameState.active           = true;
        gameStateText.node.active  = true;
        gameStateImage.node.active = false;
        gameStateText.string       = text;
    };
    
    this.ShowGameStateImage = function(imgName){
        gameState.active           = true;
        gameStateText.node.active  = false;
        gameStateImage.node.active = true;
        Tool.SetSprite(gameStateImage, imgName);
        // gameStateImage._applySpriteSize();
        Tool.SetNativeSize(gameStateImage);
    };
    
    this.HideGameState = function(){
        gameState.active = false;
    };
    //AZLDC
    //UIMain.ShowNeedMoney("您的金币不足!请补充金币后再进行游戏.");
    this.ShowNeedMoney = function(Message, num){
        Message                    = GameG.GetLocalizedString(Message).replace("####", num);
        prefabNeedMoneyText.string = Message;
        prefabNeedMoney.active     = true;
    };
    this.HideNeedMoney = function(){
        prefabNeedMoney.active = false;
    };
    
    //訊息
    this.ShowMessage = function(msg, itimer){
        let timer                = itimer || 1;
        let clone                = cc.instantiate(message);
        let background1          = cc.find("Background1", clone).getComponent(cc.Sprite);
        let background2          = cc.find("Background2", clone).getComponent(cc.Sprite);
        let txt                  = cc.find("Text", clone).getComponent(cc.Label);
        background1.node.opacity = 0;
        background2.node.opacity = 0;
        txt.node.opacity         = 0;
        txt.string               = GameG.GetLocalizedString(msg);
        
        clone.parent = root;
        clone.active = true;
        txt.string   = GameG.GetLocalizedString(msg);
        
        clone.parent   = (root);
        clone.scale    = message.scale;
        clone.position = message.position;
        clone.active   = (true);
        
        let sequence = Tool.GetSequence(clone)
                           .by(timer / 3, { position : cc.v3(0, 30, 0) })
                           .delay(timer / 3 * 2)
                           .call(function(){
                               clone.destroy();
                           })
                           .start();
        let seq2     = Tool.GetSequence(background1.node)
                           .to(timer / 3, { opacity : 255 })
                           .delay(timer / 3)
                           .to(timer / 3, { opacity : 0 })
                           .start();
        let seq3     = Tool.GetSequence(background2.node)
                           .to(timer / 3, { opacity : 255 })
                           .delay(timer / 3)
                           .to(timer / 3, { opacity : 0 })
                           .start();
        let seq4     = Tool.GetSequence(txt.node)
                           .to(timer / 3, { opacity : 255 })
                           .delay(timer / 3)
                           .to(timer / 3, { opacity : 0 })
                           .start();
        
    };
    
    let ShowMask = function(time){
        mask.active = true;
        Tool.Delay(time, function(){
            mask.active = false;
        });
    };
    
    //開始下注
    this.PlayStartBetAnimation = function(iCallback){
        startBetParticle.active       = true;
        startBetParticle.ballA.x      = 0;
        startBetParticle.ballA.active = true;
        startBetParticle.ballB.x      = 0;
        startBetParticle.ballB.active = true;
        //瞬噴粒子
        let flashParticle             = cc.instantiate(startBetParticle.Particle);
        flashParticle.parent          = startBetParticle;
        flashParticle.active          = true;
        
        cc.tween(startBetParticle.ballA)
          .to(0.6, { x : 250 })
          .delay(0.2)
          .call(function(){
              startBetParticle.ballA.active = false;
          }).start();
        
        cc.tween(startBetParticle.ballB)
          .to(0.6, { x : -250 })
          .delay(0.2)
          .call(function(){
              startBetParticle.ballB.active = false;
          }).start();
        
        //startBetParticle.Play();
        Tool.PlayAnimation(betSkeleton, "start_bet", 2.2, function(){
            //startBetParticle.Stop();
            startBetParticle.active = false;
            if(iCallback != null){
                iCallback();
            }
        });
    };
    
    //停止下注
    this.PlayEndBetAnimation = function(Callback){
        Tool.PlayAnimation(betSkeleton, "end_bet", 2.2, Callback);
    };
    
    //莊家開牌
    this.PlayDealerOpenAnimation = function(Callback){
        let time = 2;
        Tool.PlayAnimation(dealerOpenSkeleton, "animation", time, Callback);
        ShowMask(time);
    };
    
    //玩家贏
    this.PlayUserWinAnimation = function(Callback){
        let time = 2.4;
        Tool.PlayAnimation(userWinSkeleton, "start", time, Callback);
        ShowMask(time);
    };
    
    //特別獎
    this.PlaySWinAnimation = function(Callback){
        let time = 2;
        Tool.PlayAnimation(sWinSkeleton, "animation", time, Callback);
        ShowMask(time);
    };
    
    return this;
};

module.exports = UIMain;
