var GameModel = require("GameModel");
var GameG = require("GameGlobal")
var GameConfig = require("GameConfig")
var UIManager = require("UIManager")
var GameData = null
var GameScene = null
var GameLight = null

var GameLayer = {
    extends: cc.Component,

    Init() {
        let self = this

        GameData = require("GameData")
        GameScene  = require("GameScene")
        GameLight  = cc.find("Canvas/GameLight").getComponent("GameLight")
        // 遊戲狀態 0:待機 1:等在server結果 2:轉動中
        this.nowGameState = 0

        // 跑馬燈
        this.UIScrollMsg = cc.find("Canvas/UIScrollMsg").getComponent("UIScrollMsg")

        this.UIScrollMsg.Show("XXX", "將軍", 1)
        GameG.NewDelay(function(){
            if (Math.random() > 0.5)
                self.UIScrollMsg.Show("XXX", "將軍", 1)
            else
                self.UIScrollMsg.Show("XXX", "將軍", 2)
        }, 15)

        // 聲音
        this.GameSound = cc.find("Canvas/GameSound").getComponent("GameSound")
        this.GameSound.playBackGround(0)

        this.rootCenter = cc.find("Canvas/Center")
        
        // 遊戲設定
        this.GameSetting = this.rootCenter.getComponent("GameSetting")

        // 轉數
        this.UICounter = cc.find("Canvas/UICounter").getComponent("UICounter")
        this.UICounter.Init()

        // 滾輪
        this.UISlot = cc.find("UISlot", this.rootCenter).getComponent("UISlot")
        this.UISlot.Init(this.GameSetting)

        // 滾龍結果輪播
		this.UIPayResult = cc.find("UIPayResult", this.rootCenter).getComponent("UIPayResult")
		this.UIPayResult.Init(this.UISlot, this.GameSetting)        

        // 聽牌表現
		this.UIReadyHand = cc.find("UIReadyHand", this.rootCenter).getComponent("UIReadyHand")
		this.UIReadyHand.Init(this.UISlot, this.GameSetting)     

        // 設定介面
        this.UISetting = cc.find("Canvas/UISetting").getComponent("UISetting")


        // 玩家擁有的錢
        this.labelOwn = cc.find("label/own", this.rootCenter).getComponent(cc.Label)
        // 免費次數
        this.labelTimes = cc.find("label/times", this.rootCenter).getComponent(cc.Label)
        // 贏的金額
        this.labelWin = cc.find("label/win", this.rootCenter).getComponent(cc.Label)
        this.labelWin.string = "0"
        // 倍率
        this.labelRatio = cc.find("label/ratio", this.rootCenter).getComponent(cc.Label)
        // 機台號
        this.labelTableNo = cc.find("label/no", this.rootCenter).getComponent(cc.Label)

        let ClickStopByIndex = function(i){
            self.GameSound.playButton()
            self.UISlot.StopSpinReel(i)
            self.GameSound.playStopSpin()

            // 判斷三個按鈕是否都都被按下
            let acc = 0
            for (let j = 0; j < self.btnStop.length; ++j){
                if (self.btnStop[j].interactable == false){
                    acc += 1
                }
            }
            if (acc == self.btnStop.length){
                self.SetStartButtonActive(true)
            }
        }

        // 各軸停止spin按鈕
        let reelCount = this.UISlot.GetPoolReelCount()
        this.btnStop = []
        this.btnStopDisabled = []
        this.btnReelStop = []
        for (let i = 0; i < reelCount; ++i){
            let btn = cc.find("btn/stop/btn_stop" + i, this.rootCenter).getComponent(cc.Button)
            btn.interactable = false
            btn.node.on('click',function(){
                ClickStopByIndex(i)
            })
            this.btnStop.push(btn)

            let btnDisabled = cc.find("btn/stop/btn_stop" + i + "/disabled", this.rootCenter)
            btnDisabled.active = true
            this.btnStopDisabled.push(btnDisabled)

            // 點輪軸停止按鈕
            let btnReel = this.UISlot.GetReelStopBtuuon(i)
            btnReel.interactable = false
            btnReel.node.on('click',function(){
                ClickStopByIndex(i)
            })
            this.btnReelStop.push(btnReel)
        }

        let ClickStartSpin = function(){
            if (self.autoCountUI.active == true){
                return
            }

            if (self.CheckScore() == false){
                return
            }

            if(self.btnStart.interactable == false){
                return
            }

            self.GameSound.playButton()
            self.UpdateScore()
            self.SendStartSpin()
            self.StartButtonPlayDown()
            self.DisabledButton()
        }

        // btn_start 開始spin按鈕
        this.btnStart = cc.find("btn/btn_start", this.rootCenter).getComponent(cc.Button)
        this.btnStart.node.on('click',function(){
            ClickStartSpin()
        })
        let btnStartReel = this.UISlot.GetReelStartButton()
        btnStartReel.node.on('click',function(){
            ClickStartSpin()
        })

        this.btnStartDisabled = cc.find("disabled", this.btnStart.node)
        this.btnStartDisabled.active = false        

        // btn_start_down 下拉動畫
        this.btnStartDown = cc.find("btn/btn_start_down", this.rootCenter)
        this.btnStartDown.active = false

        // btn_start long click
        let touchEvent = this.btnStart.getComponent("LongTouchEvent")
        touchEvent.setCallback(function(){
            if (self.btnStart.interactable == false){
                return
            }

            self.GameSound.playButton()
            self.autoCountUI.active = true
        })

        // 是否在自動中
        this.isInAutoPlay = false
        // 是否自動
        this.isAutoPlay = false

        // btn_cancelauto 取消自動按鈕
        this.btnCancelauto = cc.find("btn/btn_cancelauto", this.rootCenter).getComponent(cc.Button)
        this.btnCancelauto.node.on('click',function(){            
            self.GameSound.playButton()
            self.SetAutoSpin(false)
            self.AutoButtonPlayDown()
        })
        this.btnCancelauto.node.active = false
        
        this.btnCancelautoDisabled = cc.find("disabled", this.btnCancelauto.node)
        this.btnCancelautoDisabled.active = false
        
        this.labelAutoCount = cc.find("label_Count", this.btnCancelauto.node).getComponent(cc.Label)

        // btn_cancelauto_down 下拉動畫
        this.btnCancelautoDown = cc.find("btn/btn_cancelauto_down", this.rootCenter)
        this.labelAutoCountDown = cc.find("label_Count_1", this.btnCancelautoDown).getComponent(cc.Label)
        this.btnCancelautoDown.active = false

        // 自動旋轉設定介面
        this.autoCountUI = cc.find("btn/autoCountUI", this.rootCenter)
        this.btnAutoCountUIClose = cc.find("close", this.autoCountUI)
        this.btnAutoCountUIClose.on('click',function(){
            self.GameSound.playButton()
            self.autoCountUI.active = false
        })

        let autoCountData = this.GameSetting.autoCount
        this.autoCountItem = cc.find("layout/countItem", this.autoCountUI)
        for (let i = 0; i < autoCountData.length; ++i){
            let clone = cc.instantiate(this.autoCountItem);
            clone.parent = this.autoCountItem.parent;
            let label = cc.find("label", clone).getComponent(cc.Label)
            if (autoCountData[i] == -1){
                label.string = "∞"
            }
            else{
                label.string = autoCountData[i]
            }

            if (i == 0){
                let line = cc.find("line", clone)
                line.active = false
            }

            clone.on('click',function(){
                // 待機狀態檢查錢是否足夠
                if (self.nowGameState == 0){
                    if (self.CheckScore() == false){
                        return
                    }
                }

                self.GameSound.playButton()
                self.SetAutoSpin(true)
                self.SetStartButtonActive(false)
                self.SetAutoSpinCount(autoCountData[i])

                // 避免重複
                if (self.isInAutoPlay == true){
                    self.UpdateAutoSpinCountText()
                    return
                }
        
                self.autoCountUI.active = false
                self.isInAutoPlay = true
                self.ShowInsertCoins()
            })
        }
        this.autoCountItem.active = false
        this.autoCountUI.active = false

        // UIBet
        this.btnBet = cc.find("btn/btn_bet", this.rootCenter).getComponent(cc.Button)
        this.btnBet.node.on('click',function(){
            self.GameSound.playButton()
            self.UIBet.Show()
        })

        this.btnBetDisabled = cc.find("disabled", this.btnBet.node)
        this.btnBetDisabled.active = false

        this.labelBetNote = cc.find("label_betNote", this.btnBet.node).getComponent(cc.Label)
        
        this.UIBet = cc.find("btn/UIBet", this.rootCenter).getComponent("UIBet")
        this.UIBet.Init()

        this.labelBetCount = cc.find("label_betCount", this.btnBet.node).getComponent(cc.Label)
        this.UIBet.SetChangeCallback(function(value){
            self.labelBetCount.string = value
        })

        // 投注額燈號
        this.rootbetLight = []
        for (let i = 1; i <= 3; ++i){
            let betlight = cc.find("background_front/betLight" + i.toString() +"/light", this.rootCenter)
            this.rootbetLight.push(betlight)
        }

        // 重轉燈號
        this.replayLight = cc.find("background_front/replayLight/light", this.rootCenter)

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (event) {
            switch(event.keyCode) {
                case cc.macro.KEY.a:
                    ClickStopByIndex(0);
                    break;
                case cc.macro.KEY.s:
                    ClickStopByIndex(1);
                    break;
                case cc.macro.KEY.d:
                    ClickStopByIndex(2);
                    break;
                case cc.macro.KEY.q:
                    ClickStopByIndex(0);
                    ClickStopByIndex(1);
                    ClickStopByIndex(2);
                    break;
                case cc.macro.KEY.w:
                    ClickStartSpin();
                    break;                                         
                case cc.macro.KEY.space:
                    ClickStartSpin();
                    break;
            }
        }, this);        
    },

    DisabledButton(){
        this.UISetting.SetEnable(false)
        this.btnBetDisabled.active = true
        this.btnStart.interactable = false
        this.btnStartDisabled.active = true        
    },

    EnabledButton(){
        this.nowGameState = 0
        this.UISetting.SetEnable(true)
        this.btnBetDisabled.active = false
        this.btnStart.interactable = true
        this.btnStartDisabled.active = false    
    },

    Update(dt) {
        if (this.UISlot != null){
            this.UISlot.Update(dt)
        }
    },

    // 檢查身上的錢是否夠下注
    CheckScore(){
        let bet = GameData.GetNowBet()
        if (GameData.userData.Score < bet){
            // 你的總壓注小於最小壓注
            UIManager.ShowMessage("你的總壓注小於最小壓注")
            return false
        }
        else{
            return true
        }
    },

    SetScore(value){
        value = (value * 0.01).toFixed(2)
        this.labelOwn.string = value.toString()
    },

    UpdateUserData() {
        if (this.nowGameState != 0){
            return
        }
        this.SetScore(GameData.userData.Score)
    },

    SetSetting(data){
        this.labelTableNo.string = "NO." + GameG.FormatNo(data.TableNo)
        GameConfig.saveRoomId(data.TableNo)

        this.settingData = data

        this.UISlot.SetReelStrips(data.ReelStrips)
        this.UIPayResult.SetReelSetting()

        this.UIBet.SetData()
    },

    GameStart(){        
        GameData.SetState(GameData.GetNextGameState())
        
        GameScene.DoSpinInit()

        this.UpdateUI()

        GameLight.ShowGameStart()
    },

    UpdateState(){
        if(GameData.GetState() == null){
            this.GameStart()
        }
        // 顯示機台倍率
        this.labelRatio.string = parseInt(GameData.GetBetOdds() * 0.01) + ":1"
    },

    UpdateUI(){
        this.isInAutoPlay = false

        // 更新所需金幣枚數
        this.UpdateBetLight()        
        // 更新按鈕
        this.UpdateButton()
        // 能選的金額
        this.UpdateBetCount()
        // 剩餘次數
        this.UpdateSpinTimes()
        // 檢查是否自動spin
        this.CheckAutoSpin()

        this.replayLight.active = GameData.GetReplay()
    },

    UpdateButton(){
        this.EnabledButton()

        let scenario = GameData.GetScenario()
        let Enum_Scenario = GameData.Enum_Scenario
        // Big Bonus 和 JAC 中只能自動
        if (scenario == Enum_Scenario.GEN_Scenario_BB || scenario == Enum_Scenario.GEN_Scenario_JAC){
            if (GameData.GatBonusLeft() != 0){
                this.SetAutoSpinCount(GameData.GatBonusLeft() + 1)
            }
            if (GameData.GatJACLeft() != 0){
                this.SetAutoSpinCount(GameData.GatJACLeft() + 1)
            }
            this.SetAutoSpin(true)
            this.btnStart.interactable = false
            this.btnCancelautoDisabled.active = true
            this.btnCancelauto.interactable = false
        }
        else{
            this.btnCancelautoDisabled.active = false
            this.btnCancelauto.interactable = true
        }
    },

    CheckAutoSpin(){
        if (this.isAutoPlay == false){
            return
        }

        if (this.autoSpinCount != -1){
            this.SetAutoSpinCount(this.autoSpinCount - 1)
        }

        // 沒次數
        if (this.autoSpinCount == 0){
            this.SetAutoSpin(false)
            this.SetStartButtonActive(true)
        }
        else{
            // 檢查錢是否足夠
            let result = this.CheckScore()
            if (result == false){
                this.SetAutoSpin(false)
                this.SetStartButtonActive(true)
            }
            else{
                this.isInAutoPlay = true
                this.ShowInsertCoins()
            }
        }
    },

    SetCounterData(){
        if (this.nowGameState != 0){
            return
        }
        this.UICounter.SetData()
    },

    UpdateSpinTimes(){
        this.labelTimes.string = "0"

        // BOUNUS GAME
        // 顯示格式為「3 30」
        // 3表示BONUS GAME 1
        // 30表示BONUS GAME 1 的剩餘次數
        let BonusLeft = GameData.GatBonusLeft()
        if (BonusLeft > 0){
            this.labelTimes.string = "3 " + GameG.FormatNo(BonusLeft, 2)
            // this.labelTimes.string = GameData.GatRequireCoin().toString() + GameG.FormatNo(BonusLeft, 2)
        }

        // JAC GAME 顯示格式為「1- 08」
        // 1表示JAC GAME 3
        // 08表示JAC GAME 3 的剩餘次數
        let JACLeft = GameData.GatJACLeft()
        if (JACLeft > 0){
            let text = "1- " + GameG.FormatNo(JACLeft, 2)
            // let text = GameData.GatRequireCoin().toString() + "- " + GameG.FormatNo(JACLeft, 2)
            this.labelTimes.string = text
        }

    },

    // 轉動結果
    SetGameResult(data){
        this.SpinStart()

        this.nowGameState = 2

        GameData.userData.Score -= data.BetMoney
        this.SetScore(GameData.userData.Score)
        
        if (this.isInAutoPlay == true){
            let self = this
            // 延遲停止
            self.AutoSpinStopId = GameG.ScheduleOnce(function(){
                self.AutoSpinStopId = null

                self.UISlot.AutoStop()
            }, self.GameSetting.autoSpinStopTime);
        }
        
        GameScene.DoSpin()

        this.UIPayResult.UpdatePayData()
    },

    // 設定自動
    SetAutoSpin(isAuto){
        this.isAutoPlay = isAuto
        this.btnCancelauto.node.active = isAuto
    },

    SetStartButtonActive(isShow){
        this.btnStart.node.active = isShow
    },

    // 開始按鈕播放下拉動態
    StartButtonPlayDown(){
        this.SetStartButtonActive(false)
        this.btnStartDown.active = true

        let self = this
        this.btn_start_downId = GameG.NewDelayOnce(function(){
            self.btn_start_downId = null

            self.SetStartButtonActive(true)
            self.btnStartDown.active = false
        }, 0.1, "btn_start_downId")
    },

    // 自動按鈕播放下拉動態
    AutoButtonPlayDown(){
        this.btnCancelautoDown.active = true

        let self = this
        this.btn_cancelauto_downId = GameG.NewDelayOnce(function(){
            self.btn_cancelauto_downId = null

            self.btnCancelautoDown.active = false
            self.SetStartButtonActive(true)
        }, 0.1, "btn_cancelauto_downId")        
    },

    SendStartSpin(){
        if (this.nowGameState != 0){
            return
        }

        this.nowGameState = 1
        
        GameModel.SendStartSpin(GameData.GetBetOdds())
    },

    SetAutoSpinCount(count){
        this.autoSpinCount = count
    },

    UpdateAutoSpinCountText(){
        if (this.autoSpinCount == -1){
            this.labelAutoCount.string = "∞"
            this.labelAutoCountDown.string = "∞"
        }
        else{
            this.labelAutoCount.string = this.autoSpinCount.toString()
            this.labelAutoCountDown.string = this.autoSpinCount.toString()
        }
    },

    ShowInsertCoins(){
        this.DisabledButton()

        // 自動模式 更新自動次數
        this.UpdateAutoSpinCountText()

        let delay = this.GameSetting.autoSpinStartTime
        let interval = this.GameSetting.autoSpinInsertCoinsTimeInterval
        // 投錢燈號顯示
        this.UpdateBetLight(interval, delay)
        // 投錢金額異動
        this.UpdateScore(interval, delay)
        // 開始旋轉
        interval = delay + interval * GameData.GatRequireCoin() + 0.1
        let self = this
        GameG.ScheduleOnce(function(){
            self.SendStartSpin()
        }, interval)
    },

    //開始轉動
    SpinStart(){
        this.GameSound.playStartSpin()
        this.GameSound.playLoopSpin()

        GameLight.ShowStartSpin()

        // 不是自動模式下才能按停止
        if (this.isAutoPlay == false){
            for (let i = 0; i < this.btnStop.length; ++i){
                this.btnStop[i].interactable = true
                this.btnStopDisabled[i].active = false

                if (this.GameSetting.reelStopButton == true){
                    this.btnReelStop[i].interactable = true
                }
            }
        }

        this.labelWin.string = "0"

        this.UIReadyHand.Start()
        this.UIPayResult.SpinStart()

        let self = this
        this.UISlot.StartSpin(
            // begin stop
            function(index){
                self.btnStop[index].interactable = false
                self.btnStopDisabled[index].active = true
                self.btnReelStop[index].interactable = false
                
                GameScene.DoStartStopOne(index)
                GameLight.ShowReelStopSpin(index)
            },                
            // stop all
            function(){
                self.SpinEnd()
                GameLight.ShowReelStopSpinEnd()
            },
            // stop one
            function(index){
                self.UIPayResult.SpinStop(index)
                
                self.UIReadyHand.Stop(index)

                GameScene.DoStopOne(index)
                GameLight.ShowReelStopSpinEnd(index)
            }
        )
    },    

    // 按下轉動停止
    SpinEnd(){
        this.ShowWinScore(GameData.GetWinMoney())

        this.UIPayResult.SpinStopAll()
        this.UIPayResult.ShowResult(this.isAutoPlay)

        GameLight.ShowResultStart()

        // 更新上方紀錄
        this.UICounter.ShowAllData()

        let self = this
        
        //　播放指定動畫
        GameScene.ShowResult(function(){
            self.ShowResultEnd()
        })
    },

    // 轉動停止播放動畫結束
    ShowResultEnd(){
        // this.UIPayResult.ShowResultEnd()

        GameLight.ShowResultEnd()

        // 更新錢
        if (GameData.userData != null){
            this.SetScore(GameData.userData.Score)
        }
        this.GameStart()
    },

    // 更新下注額
    UpdateBetCount(){
        let count = GameData.GatRequireCoin()     
        this.labelBetNote.string = count.toString() + "枚押注"

        this.btnBet.interactable = (GameData.GetOddsLength() > 1)
        this.UIBet.UpdateBetCount()
    },

    // 更新下注的金額圖示
    UpdateBetLight(interval, delay){
        interval = (interval == null) ? 0 : interval
        delay = (delay == null) ? 0 : delay
        let count = GameData.GatRequireCoin()
        // Auto Spin的時候，每次Spin會先迅速的顯示亮1枚，變為2枚、3枚後輪軸才開始滾動。 亮燈順序為由下至上
        for (let i = 0; i < this.rootbetLight.length; ++i){
            this.rootbetLight[i].active = false
        }

        let self = this
        for (let i = 0; i < count; ++i){
            GameG.ScheduleOnce(function(){
                self.rootbetLight[i].active = true
            }, interval * (i + 1) + delay);
        }
    },

    // 更新玩家身上的錢
    UpdateScore(interval, delay){
        interval = (interval == null) ? 0 : interval
        delay = (delay == null) ? 0 : delay
        let count = GameData.GatRequireCoin()
        let score = GameData.userData.Score
        let self = this
        
        for (let i = 0; i < count; ++i){
            GameG.ScheduleOnce(function(){
                score = score - GameData.GetBetOdds()
                self.SetScore(score)
            }, interval * (i + 1) + delay);
        }
    },

    // 顯示贏的金額
    ShowWinScore(value){
        if (value <= 0){
            return
        }
        value = value * 0.01
        let self = this
        let intervalTime = 0.01
        let showTime = this.GameSetting.winScoreShowTime
        let repeatTime = showTime / intervalTime
        this.winTextId = GameG.StartCountdown(function(count){
            self.labelWin.string = (((showTime - count)/showTime) * value).toFixed(0)
        }, intervalTime, repeatTime)
        // 跑分完後一秒歸零
        GameG.ScheduleOnce(function(){
            self.labelWin.string = "0"
        }, showTime + 1)
    },
};

module.exports = GameLayer;