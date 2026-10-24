var G           = require("Global");
// 接收消息table
var pojectName  = G.GetGamePName();
var gameLayer   = require("GameLayer");
var GameG       = require("GameGlobal");
var GameConfig  = require("GameConfig");
var GameInfo    = require("../Base/GameInfo");
var GameManager = require("../Base/GameManager");
var FileManager = require("../Base/FileManager");

var UIMain = {
    extends : cc.Component,
    
    Create(root){
        let squareCountdown         = cc.find("SquareCountdown", root);
        // let squareCountdownImg      = cc.find("SquareCountdown/Image", root).getComponent(cc.Sprite);
        // let squareCountdownTxt      = cc.find("SquareCountdown/Text", root).getComponent("TextControl");
        let squareCountdownTitleTxt = cc.find("SquareCountdown/TitleText", root).getComponent(cc.Label);
        
        // let CircleTimer = cc.find("Timer", root);
        let CircleTimer  = {};
        CircleTimer.node = cc.find("Timer", squareCountdown);
        CircleTimer.func = CircleTimer.node.getComponent("CircleTimer");
        
        let betSkeleton      = cc.find("BetSkeleton", root).getComponent(sp.Skeleton);
        // let startBetParticle = cc.find("StartBetParticle", root).getComponent(cc.ParticleSystem);    
        let startBetLayer    = cc.find("StartBetLayer", root);
        let startBetParticle = cc.find("StartBetParticle", root);
        let tieSkeleton      = cc.find("TieSkeleton", root).getComponent(sp.Skeleton);
        let vsSkeleton       = cc.find("VSSkeleton", root).getComponent(sp.Skeleton);
        let shuffleSkeleton  = cc.find("ShuffleSkeleton", root).getComponent(sp.Skeleton);
        
        let exitGameButton    = cc.find("Options/ExitGameButton", root).getComponent(cc.Button);
        let settingButton     = cc.find("Options/SettingButton", root).getComponent(cc.Button);
        let descriptionButton = cc.find("Options/DescriptionButton", root).getComponent(cc.Button);
        let settingBg         = cc.find("Options/SettingImage/CoverBackground", root);
        let descriptionBg     = cc.find("Options/DescriptionWindow/CoverBackground", root);
        
        let descriptionWindow      = cc.find("Options/DescriptionWindow", root);
        let descriptionText        = cc.find("Options/DescriptionWindow/ScrollRect/Text", root).getComponent(cc.RichText);
        let descriptionCloseButton = cc.find("Options/DescriptionWindow/CloseButton", root).getComponent(cc.Button);
        
        let settingImage = cc.find("Options/SettingImage", root);
        
        let bgmOpenToggle      = cc.find("Options/SettingImage/Bgm/OpenToggle", root).getComponent(cc.Toggle);
        let bgmCloseToggle     = cc.find("Options/SettingImage/Bgm/CloseToggle", root).getComponent(cc.Toggle);
        let soundOpenToggle    = cc.find("Options/SettingImage/Sound/OpenToggle", root).getComponent(cc.Toggle);
        let soundCloseToggle   = cc.find("Options/SettingImage/Sound/CloseToggle", root).getComponent(cc.Toggle);
        let settingCloseButton = cc.find("Options/SettingImage/CloseButton", root).getComponent(cc.Button);
        let versionText        = cc.find("Options/SettingImage/VersionText", root).getComponent(cc.Label);
        
        let message = cc.find("Message", root);
        
        let sequenceArray = [];
        let target        = [];
        
        let squareCountdownSequence = null;
        let onLocalPosition         = cc.v3(-25, 0, 0);
        let offLocalPosition        = cc.v3(25, 0, 0);
        
        let betFix = null;
        
        squareCountdown.active      = false;
        betSkeleton.node.active     = false;
        startBetParticle.active     = false;
        tieSkeleton.node.active     = false;
        vsSkeleton.node.active      = false;
        shuffleSkeleton.node.active = false;
        descriptionWindow.active    = false;    //is Node
        message.active              = false;    //is Node
        
        //----->已重新編譯 let localVersion = CS.HotUpdate.HotUpdateManager.Instance.GetProjectVersion(G.GetGamePName());
        let localVersion   = GameG.GetGameVersion();
        //<-----已重新編譯
        versionText.string = "V." + localVersion.toString();
        
        let SetActiveDescriptionWindow = function(value){
            descriptionWindow.active = value;
        };
        
        let SetActiveSettingWindow = function(value){
            settingImage.active = value;
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
        
        descriptionButton.node.on("click", function(){
            GameG.PlayGameSound("click");
            SetActiveDescriptionWindow(true);
        });
        
        let closeDescription = function(){
            GameG.PlayGameSound("click");
            window.wasShowFirst = true;
            SetActiveDescriptionWindow(false);
        };
        descriptionBg.on("click", closeDescription);
        descriptionCloseButton.node.on("click", closeDescription);
        
        settingButton.node.on("click", function(){
            GameG.PlayGameSound("click");
            SetActiveSettingWindow(true);
        });
        
        let closeSetting = function(){
            GameG.PlayGameSound("click");
            SetActiveSettingWindow(false);
        };
        settingBg.on("click", closeSetting);
        settingCloseButton.node.on("click", closeSetting);
        
        let SetBgm = function(value){
            GameG.SetMusicStatus(value);
            GameConfig.MusicStatus = value;
        };
        
        let SetSound = function(value){
            GameG.SetSoundStatus(value);
            GameConfig.SoundStatus = value;
        };
        
        settingImage.active      = true;
        bgmOpenToggle.isChecked  = GameG.GetMusicStatus();
        bgmCloseToggle.isChecked = !GameG.GetMusicStatus();
        SetBgm(GameG.GetMusicStatus());
        soundOpenToggle.isChecked  = GameG.GetSoundStatus();
        soundCloseToggle.isChecked = !GameG.GetSoundStatus();
        SetSound(GameG.GetSoundStatus());
        settingImage.active = false;
        
        bgmOpenToggle.node.on("toggle", function(tgl){
            SetBgm(tgl.isChecked);
            GameG.PlayGameSound("click");
        });
        bgmCloseToggle.node.on("toggle", function(tgl){
            SetBgm(!tgl.isChecked);
            GameG.PlayGameSound("click");
        });
        soundOpenToggle.node.on("toggle", function(tgl){
            SetSound(tgl.isChecked);
            GameG.PlayGameSound("click");
        });
        soundCloseToggle.node.on("toggle", function(tgl){
            SetSound(!tgl.isChecked);
            GameG.PlayGameSound("click");
        });
        
        target.StartSquareCountdown = function(imgName, time, OnComplete){
            if(squareCountdownSequence != null){
                //----->已重新編譯
                squareCountdownSequence.stop();
                //<-----已重新編譯
            }
            squareCountdown.active = true;
            
            let sequence = gameLayer.GetSequence(null, "StartSquareCountdown");
            //imgName       
            //bet waiting  selection
            //请下注   游戏即将开始  请选择
            // GameG.SetImageSprite(squareCountdownImg, G.GetGamePName(), imgName);
            let imgToString                = {};
            imgToString["bet"]             = "请下注";
            imgToString["waiting"]         = "游戏即将开始";
            imgToString["selection"]       = "请选择";
            squareCountdownTitleTxt.string = GameG.GetLocalizedString(imgToString[imgName]);
            
            // gameLayer.SetNativeSize(squareCountdownImg);
            // for(let i = time; i >= 1; --i){
            //     //----->已重新編譯            
            //     sequence.call(function(){
            //                 squareCountdownTxt.string = Math.floor(i).toString();
            //             })
            //             .delay(1);
            //     //<-----已重新編譯   
            // }
            sequence.delay(time);
            //----->已重新編譯
            sequence.call(function(){
                squareCountdown.active  = false;
                squareCountdownSequence = null;
                if(OnComplete != null){
                    OnComplete();
                }
                gameLayer.clearTargetSequence(sequence);
            });
            squareCountdownSequence = sequence;
            squareCountdownSequence.start();
            CircleTimer.func.setTime(time);
            //<-----已重新編譯
        };
        
        target.StopSquareCountdown = function(){
            if(squareCountdownSequence != null){
                //----->已重新編譯
                squareCountdownSequence.stop();
                //<-----已重新編譯
                squareCountdownSequence = null;
                CircleTimer.func.break();
            }
            squareCountdown.active = false;
        };
        
        target.SetGameDescriptionText = function(description){
            descriptionText.string = "";
            // for(let i = 1; i <= description.length; ++i){
            //     descriptionText.string = descriptionText.string + description[i] + "\n";
            // }
            
            target.updateDescription();
            let width  = descriptionText.node.width;
            let height = descriptionText.preferredHeight;              //lineHeight
            
            descriptionText.node.width = descriptionText.node.parent.width;
            // descriptionText.node.height = height;              
            if(!window.wasShowFirst) descriptionWindow.active = true;
        };
        
        target.updateDescription = function(){
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
        target.updateDescription();
        
        target.PlayStartBetAnimation = function(Callback){
            betSkeleton.node.active = true;
            // startBetParticle.active = true;
            let cloneParticle       = cc.instantiate(startBetParticle);
            cloneParticle.parent    = startBetLayer;
            cloneParticle.active    = true;
            
            betSkeleton.setAnimation(0, "start_bet", false);
            // startBetParticle.Play();
            
            gameLayer.GetSequence(cloneParticle.children[0], "開始下注 移動亮點[0]")
                     .to(0.4, { x : 320, scale : 0 })
                     .delay(0.2)
                     .call(function(){
                         cloneParticle.children[0].active = false;
                     })
                     .start();
            gameLayer.GetSequence(cloneParticle.children[1], "開始下注 移動亮點[1]")
                     .delay(0.05)
                     .to(0.4, { x : -320, scale : 0 })
                     .delay(0.2)
                     .call(function(){
                         cloneParticle.children[1].active = false;
                     })
                     .start();
            //----->已重新編譯      
            betFix = gameLayer.GetSequence(cloneParticle, "開始下注 主體刪除")
                              .delay(2.2)
                              .call(function(){
                                  betSkeleton.node.active = false;
                                  // startBetParticle.active = false;
                                  gameLayer.destoryNode(cloneParticle);
                                  if(Callback != null){
                                      Callback();
                                  }
                              })
                              .start();
            //<-----已重新編譯
        };
        
        target.PlayEndBetAnimation = function(Callback){
            betSkeleton.node.active = true;
            betSkeleton.setAnimation(0, "end_bet", false);
            
            if(betFix){
                betFix.stop();
                betFix = null;
            }
            
            //----->已重新編譯    
            gameLayer.Delay(2.2, function(){
                betSkeleton.node.active = false;
                if(Callback != null){
                    Callback();
                }
            });
            //<-----已重新編譯  
        };
        
        target.ShowTieSkeleton = function(Callback){
            tieSkeleton.node.active = true;
            tieSkeleton.setAnimation(0, "animation", false);
            //----->已重新編譯    
            gameLayer.Delay(2.5, function(){
                tieSkeleton.node.active = false;
                if(Callback != null){
                    Callback();
                }
            });
            //<-----已重新編譯  
        };
        
        target.ShowVSSkeleton = function(Callback){
            vsSkeleton.node.active = true;
            vsSkeleton.setAnimation(0, "animation", false);
            //----->已重新編譯    
            gameLayer.Delay(1.7, function(){
                vsSkeleton.node.active = false;
                if(Callback != null){
                    Callback();
                }
            });
            //<-----已重新編譯  
        };
        
        target.ShowShuffleSkeleton = function(Callback){
            shuffleSkeleton.node.active = true;
            shuffleSkeleton.setAnimation(0, "animation", false);
            //----->已重新編譯    
            gameLayer.Delay(1, function(){
                shuffleSkeleton.node.active = false;
                if(Callback != null){
                    Callback();
                }
            });
            //<-----已重新編譯  
        };
        
        target.ShowMessage = function(msg, iTimer){
            let timer       = iTimer || 1;
            let clone       = cc.instantiate(message);
            clone.parent    = (root);
            let background1 = cc.find("Background1", clone).getComponent(cc.Sprite);
            let background2 = cc.find("Background2", clone).getComponent(cc.Sprite);
            let txt         = cc.find("Text", clone).getComponent(cc.Label);
            // let sequence    = gameLayer.GetSequence(null, "ShowMessage");
            
            background1.node.opacity = 0;
            background2.node.opacity = 0;
            txt.node.opacity         = 0;
            txt.string               = GameG.GetLocalizedString(msg);
            
            clone.active = true;
            
            //----->已重新編譯 
            //  sequence.SetEase.(CS.DG.Tweening.Ease.Linear)
            //  sequence.Append(clone.DOMove(cc.v3(0,200,0), timer))
            //  sequence.Join(background1.DOColor(cc.Color(background1.color.r,background1.color.g,background1.color.b,1), timer /3))
            //  sequence.Join(background2.DOColor(cc.Color(background2.color.r,background2.color.g,background2.color.b,1), timer /3))
            //  sequence.Join(txt.DOColor(cc.Color(txt.color.r,txt.color.g,txt.color.b,1), timer /3))
            //  sequence.delay(timer/3)
            //  sequence.Append(background1.DOColor(cc.Color(background1.color.r,background1.color.g,background1.color.b,0), timer /3))
            //  sequence.Join(background2.DOColor(cc.Color(background2.color.r,background2.color.g,background2.color.b,0), timer /3))
            //  sequence.Join(txt.DOColor(cc.Color(txt.color.r,txt.color.g,txt.color.b,0), timer /3))
            //  sequence.call(function(){
            //  	CS.UnityEngine.GameObject.Destroy(clone)
            //  })  
            
            gameLayer.GetSequence(clone, "message clone move")
                     .to(timer, { position : cc.v2(0, 200) })
                     .delay(timer / 3 * 2)
                     .call(function(){
                         gameLayer.destoryNode(clone);
                     })
                     .start();
            
            gameLayer.GetSequence(background1.node, "message background1 opacity")
                     .to(timer / 3, { opacity : 255 })
                     .delay(timer / 3)
                     .to(timer / 3, { opacity : 0 })
                     .start();
            
            gameLayer.GetSequence(background2.node, "message background2 opacity")
                     .to(timer / 3, { opacity : 255 })
                     .delay(timer / 3)
                     .to(timer / 3, { opacity : 0 })
                     .start();
            
            gameLayer.GetSequence(txt.node, "message text opacity")
                     .to(timer / 3, { opacity : 255 })
                     .delay(timer / 3)
                     .to(timer / 3, { opacity : 0 })
                     .start();
            
            //<-----已重新編譯  
        };
        
        return target;
    },
    
    
};

module.exports = UIMain;
