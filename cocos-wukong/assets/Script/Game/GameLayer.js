var GameModel = require("GameModel");
var GameG = require("GameGlobal")
var GameConfig = require("GameConfig")
var UIManager = require("UIManager")

var GameLayer = {
    extends: cc.Component,

    Init() {
        // 遊戲狀態 0:待機 1:等在server結果 2:轉動中
        this.nowGameState = 0
        //目前所選擇的金額
        this.selectCount = 0
        //目前所選擇的符號
        this.selectGoldenSymbol = 0

        this.UIScrollMsg = cc.find("Canvas/Top/UIScrollMsg").getComponent("UIScrollMsg")
        this.UIScrollMsg.startScroll("恭喜 XXX 在 將軍 開出BONUS GAME!")

        this.GameSound = cc.find("Canvas/GameSound").getComponent("GameSound")
        this.GameSound.playBackGround(0)

        this.Center = cc.find("Canvas/Center")
        
        this.GameSetting = this.Center.getComponent("GameSetting")

        this.UIActionManager = cc.find("Canvas/ActionManager").getComponent("UIActionManager")
        this.UIActionManager.Init()
        this.UIActionManager.changeAction(1, null, -1)

        this.UISlotActionManager = cc.find("Canvas/SlotActionManager").getComponent("UISlotActionManager")
        this.UISlotActionManager.Init()
        // this.UISlotActionManager.setData(1)
        // this.UISlotActionManager.do_start()

        this.UICounter = cc.find("Canvas/Top/UICounter").getComponent("UICounter")
        this.UICounter.Init()

        this.UISlot = cc.find("UISlot", this.Center).getComponent("UISlot")
        this.UISlot.Init(this.GameSetting)
        
        this.UIMessage = cc.find("UIMessage", this.Center).getComponent("UIMessage")
        this.UIMessage.Init()

        // 玩家擁有的錢
        this.label_own = cc.find("label/own", this.Center).getComponent(cc.Label)
        // 一次幾枚
        this.label_once = cc.find("label/once", this.Center).getComponent(cc.Label)
        // 免費次數
        this.label_times = cc.find("label/times", this.Center).getComponent(cc.Label)
        // 贏的金額
        this.label_win = cc.find("label/win", this.Center).getComponent(cc.Label)
        this.label_win.string = "0"
        // 倍率
        this.label_ratio = cc.find("label/ratio", this.Center).getComponent(cc.Label)
        // 機台號
        this.label_no = cc.find("label/no", this.Center).getComponent(cc.Label)

        let self = this
        // 開始spin按鈕
        this.btn_start = cc.find("btn/btn_start", this.Center).getComponent(cc.Button)
        this.btn_start.node.on('click',function(){
            //self.UISlotActionManager.doNextAction()
            if (self.CheckScore() == false){
                return
            }

            self.updateScore(false)
            self.setStartButton(false, false)
            self.SendStartSpin()
        })
                
        // 停止全部spin按鈕
        this.btn_down = cc.find("btn/btn_down", this.Center).getComponent(cc.Button)
        this.btn_down.node.on('click',function(){
            self.StopSpin()
        })

        let clickStopByIndex = function(i){
            self.UISlot.StopSpinReel(i)

            self.GameSound.playStopSpin()

            // 判斷三個按鈕是否都都被按下
            let acc = 0
            for (let j = 0; j < self.btn_stop.length; ++j){
                if (self.btn_stop[j].interactable == false){
                    acc += 1
                }
            }
            if (acc == self.btn_stop.length){
                self.btn_start.node.active = true
                self.btn_down.node.active = false
            }
        }

        // 各軸停止spin按鈕
        let reelCount = this.UISlot.GetPoolReelCount()
        this.btn_stop = []
        this.btn_reelStop = []
        for (let i = 0; i < reelCount; ++i){
            let btn = cc.find("btn/stop/btn_stop" + i, this.Center).getComponent(cc.Button)
            btn.interactable = false
            btn.node.on('click',function(){
                clickStopByIndex(i)
            })
            this.btn_stop.push(btn)

            // 點輪軸停止按鈕
            let btn_Reel = this.UISlot.GetReelStopBtuuon(i)
            btn_Reel.interactable = false
            btn_Reel.node.on('click',function(){
                clickStopByIndex(i)
            })
            this.btn_reelStop.push(btn_Reel)
        }

        // 是否再自動轉
        this.isInAutoPlay = false
        // 取消自動按鈕
        this.isAutoPlay = false
        this.btn_cancelauto = cc.find("btn/btn_cancelauto", this.Center)
        this.btn_cancelauto.on('click',function(){
            self.GameSound.playButton()
            
            self.setAutoSpin(false)
        })

        // 自動按鈕
        this.btn_auto = cc.find("btn/btn_auto", this.Center)
        this.btn_auto.on('click',function(){
            self.GameSound.playButton()
            
            self.autoCountUI.active = true


        })
        
        let autoCount = [ 20, 50, 100, 250, -1 ]
        this.autoCountUI = cc.find("btn/autoCountUI", this.Center)
        this.autoCountUI.on('click',function(){
            self.autoCountUI.active = false
        })
        this.autoCountItem = cc.find("layout/countItem", this.autoCountUI)
        for (let i = 0; i < autoCount.length; ++i){
            let clone = cc.instantiate(this.autoCountItem);
            clone.parent = this.autoCountItem.parent;
            let label = cc.find("Background/Label", clone).getComponent(cc.Label)
            if (autoCount[i] == -1){
                label.string = "∞"
            }
            else{
                label.string = autoCount[i]
            }

            clone.on('click',function(){
                // 待機狀態檢查錢是否足夠
                if (self.nowGameState == 0){
                    if (self.CheckScore() == false){
                        return
                    }
                }

                self.setAutoSpin(true)

                self.SetAutoSpinCount(autoCount[i])

                // 避免重複
                if (self.isInAutoPlay == true){
                    self.SetAutoSpinCountText()
                    return
                }
        
                self.isInAutoPlay = true

                self.ShowInsertCoins()

                self.autoCountUI.active = false
            })
        }
        this.autoCountItem.active = false
        this.autoCountUI.active = false

        this.btn_menu = cc.find("btn/btn_menu", this.Center)
        this.btn_menu.on('click',function(){
            self.GameSound.playButton()
        })   

        // 下注額
        this.label_betCount = cc.find("Count/betCount", this.Center).getComponent(cc.Label)

        // 增加Bet
        this.btn_addCount = cc.find("Count/add", this.Center)
        this.btn_addCount.on('click',function(){
            self.GameSound.playButton()

            self.selectCount += 1
            if (self.selectCount > self.BetCountData.length - 1){
                self.selectCount = 0
            } 

            self.updateBetCount()
        })

        // 減少Bet
        this.btn_subCount = cc.find("Count/sub", this.Center)
        this.btn_subCount.on('click',function(){
            self.GameSound.playButton()

            self.selectCount -= 1
            if (self.selectCount < 0){
                self.selectCount = self.BetCountData.length - 1
            }
            self.updateBetCount()
        })

        // 最大Bet
        this.btn_maxCount = cc.find("Count/max", this.Center)
        this.btn_maxCount.on('click',function(){
            self.GameSound.playSound("max_bet")

            self.selectCount = self.BetCountData.length - 1

            self.updateBetCount()
        })        

        // 投注額燈號
        this.betlight1 = cc.find("background_front/betlight1/betlight", this.Center)
        this.betlight2 = cc.find("background_front/betlight2/betlight", this.Center)
        this.betlight3 = cc.find("background_front/betlight3/betlight", this.Center)
        this.updateBetLight(false)
    },

    Update(dt) {
        if (this.UISlot != null){
            this.UISlot.Update(dt)
        }
    },

    // 檢查身上的錢是否夠下注
    CheckScore(){
        let Money = this.BetCountData[this.selectCount]
        let GoldenSymbol = this.GoldenDetaildata[this.selectGoldenSymbol].Credits

        if (this.userData.Score < Money * GoldenSymbol){
            this.UIMessage.showMessage(2)
            return false
        }
        else{
            return true
        }
    },

    //按下停止
    StopSpin(){
        this.GameSound.playStopSpin()

        this.UISlot.AutoStop()

        this.setStartButton(true, null)
    },

    //遊戲狀態S2C 0.下注状态 1.开奖状态 2.开奖动画 3.结算动画 4.等待游戏开始
    SetState(state){
        // if(state == 0){
        //     GameLayer.GameStart()
        // }
    },

    setScore(value){
        value = (value * 0.01).toFixed(2)
        this.label_own.string = value.toString()
    },

    SetUserData(data) {
        this.userData = data
        this.setScore(data.Score)
    },

    SetGoldenDetail(data){
        this.GoldenDetaildata = data.GoldenDetail
    },

    SetSetting(data){
        this.label_once.string = data.once.toString()
        this.label_times.string = data.times.toString()
        this.label_ratio.string = data.ratio.toString() + ":1"
        this.label_once.string = data.once.toString()
        this.label_no.string = "NO." + data.no.toString()

        GameConfig.saveRoomId(data.no)

        this.settingData = data

        //能選的金額
        this.BetCountData = data.BetCount

        this.updateBetCount()

        if (this.CheckScore() == false){
            this.UIMessage.showMessage(2, 0, true)
        }
        else{
            this.UIMessage.showMessage(1, 0, true)
        }        
    },

    // 轉動結果
    SetGameResult(data){
        this.resultData = data
        
        this.UISlot.SetGameResult(data)
    },

    // 玩家狀態結果
    SetUserStateChange(data){
        this.userData = data
    },

    // 設定自動
    setAutoSpin(isAuto){
        this.isAutoPlay = isAuto
        this.btn_cancelauto.active = isAuto
        this.btn_auto.active = !isAuto  
    },

    setStartButton(showStart, enableStart = null){
        this.btn_start.node.active = showStart
        this.btn_down.node.active = !showStart

        if (enableStart != null){
            this.btn_start.interactable = enableStart
        }
    },

    // 
    SendStartSpin(){
        if (this.nowGameState != 0){
            return
        }

        this.nowGameState = 1

        let Money = this.BetCountData[this.selectCount]
        let GoldenSymbol = this.GoldenDetaildata[this.selectGoldenSymbol].Credits        
        GameModel.SendStartSpin(Money, GoldenSymbol)
    },

    SetAutoSpinCount(count){
        this.autoSpinCount = count
    },

    SetAutoSpinCountText(){
        if (this.autoSpinCount == -1)
            this.UIMessage.setText("∞")
        else
            this.UIMessage.setText(this.autoSpinCount.toString())        
    },

    ShowInsertCoins(){
        this.UIMessage.showMessage(11)
        this.SetAutoSpinCountText()

        let self = this
        // 延遲開始
        this.AutoSpinStartId = GameG.NewDelayOnce(function(){
            self.AutoSpinStartId = null

            //投錢
            self.updateBetLight(self.isInAutoPlay)
            self.updateScore(self.isInAutoPlay)

            self.InsertCoins = GameG.NewDelayOnce(function(){
                self.InsertCoins = null

                self.SendStartSpin()
                          
            }, self.GameSetting.autoSpinInsertCoinsTimeInterval * 2, "InsertCoins");

        }, this.GameSetting.autoSpinStartTime, "AutoSpinStart");
    },

    //開始轉動
    SpinStart(){
        this.GameSound.playStartSpin()
        this.GameSound.playLoopSpin()

        for (let i = 0; i < this.btn_stop.length; ++i){
            this.btn_stop[i].interactable = true

			if (this.GameSetting.reelStopButton == true){
                this.btn_reelStop[i].interactable = true
            }
        }

        this.label_win.string = "0"

        if (this.isInAutoPlay == false){
            this.UIMessage.showMessage(3)
        }

        // 扣錢
        this.updateBetCount()

        this.UISlotActionManager.setData(1)

        this.UISlotActionManager.do_start()

        let self = this

        this.UISlot.StartSpin(
            // begin stop
            function(index){
                self.btn_stop[index].interactable = false
                self.btn_reelStop[index].interactable = false
                
                self.UISlotActionManager.do_startStop(index)        
            },                
            // stop all
            function(){
                self.SpinEnd()
            },
            // stop one
            function(index){
                self.UISlotActionManager.do_stop(index)
            }
        )
    },    

    // 按下轉動停止
    SpinEnd(){
        this.showWinScore(this.resultData.win)

        // 顯示對應的訊息
        if (this.resultData.win > 0){
            this.UIMessage.showMessage(4)
        }
        else {
            this.UIMessage.showMessage(5)
        }

        // 更新上方紀錄
        this.UICounter.showOneData()

        //　播放指定動畫
        let self = this
        this.UISlotActionManager.do_stopAll(function(){
            self.ShowResultEnd()
        })
    },

    // 轉動停止播放動畫結束
    ShowResultEnd(){
        this.GameSound.playBackGround(0)

        this.nowGameState = 0

        this.setStartButton(true, true)

        this.UIActionManager.changeAction(1, null, -1)

        // 更新錢
        if (this.userData != null){
            this.setScore(this.userData.Score)
        }

        this.isInAutoPlay = false
        
        // 結束後自動下一輪
        if (this.isAutoPlay == true){
            if (this.autoSpinCount != -1)
                this.SetAutoSpinCount(this.autoSpinCount - 1)

            if (this.autoSpinCount == 0){
                this.setAutoSpin(false)
            }
            else{
                // 檢查錢是否足夠
                if (this.CheckScore() == false){
                    this.setAutoSpin(false)
                }
                else{
                    this.isInAutoPlay = true
                    
                    this.ShowInsertCoins()
                }
            }
        }
    },

    // 遊戲結束
    GameEnd(){

    },

    // 更新下注額
    updateBetCount(){
        let Money = this.BetCountData[this.selectCount]
        let GoldenSymbol = this.GoldenDetaildata[this.selectGoldenSymbol].Credits
        let Value = (Money * GoldenSymbol * 0.01).toFixed(2)    
        this.label_betCount.string = Value.toString()
    },

    // 更新下注的金額圖示
    updateBetLight(isAtuo){
        // Auto Spin的時候，每次Spin會先迅速的顯示亮1枚，變為2枚、3枚後輪軸才開始滾動。 亮燈順序為由下至上
        if (isAtuo == true){
            this.betlight1.active = true
            this.betlight2.active = false
            this.betlight3.active = false

            let self = this

            this.betlightId2 = GameG.NewDelayOnce(function(){
                self.betlight2.active = true

            }, this.GameSetting.autoSpinInsertCoinsTimeInterval, "betlight2");

            this.betlightId3 = GameG.NewDelayOnce(function(){
                self.betlight3.active = true
            }, this.GameSetting.autoSpinInsertCoinsTimeInterval * 2, "betlight3");

            this.isAtuoUpdateBetCount = false
            return
        }

        //在NG、BB中，顯示亮3枚
        if (this.nowGameType == "NG" || this.nowGameType == "BB"){
            this.betlight1.active = true
            this.betlight2.active = true
            this.betlight3.active = true
        }
       //在JAC 中，顯示亮1枚
       else if (this.nowGameType == "JAC" || this.nowGameType){
            this.betlight1.active = true
            this.betlight2.active = false
            this.betlight3.active = false
        }
        else{
            this.betlight1.active = true
            this.betlight2.active = true
            this.betlight3.active = true
        }
    },

    // 更新玩家身上的錢
    updateScore(isAtuo){
        let score = this.userData.Score

        let Money = this.BetCountData[this.selectCount]
        let GoldenSymbol = this.GoldenDetaildata[this.selectGoldenSymbol].Credits
        let value = Money * GoldenSymbol

        // 自動模式下,一次扣三分之一
        if (isAtuo == true){
            value = (Money * GoldenSymbol) / 3
            score = score - value
            this.setScore(score)

            let self = this
            this.betCount2 = GameG.NewDelayOnce(function(){
                score = score - value
                self.setScore(score)
            }, this.GameSetting.autoSpinInsertCoinsTimeInterval, "betCount2");

            this.betCount3 = GameG.NewDelayOnce(function(){
                score = score - value
                self.setScore(score)
            }, this.GameSetting.autoSpinInsertCoinsTimeInterval * 2, "betCount3");

            return
        }

        //NG、BB顯示3枚
        if (this.nowGameType == "NG" || this.nowGameType == "BB"){
            score = score - value
            this.setScore(score)
        }
        //JAC顯示1枚
        else if (this.nowGameType == "JAC" || this.nowGameType){
            score = score - value
            this.setScore(score)
        }
        else{
            score = score - value
            this.setScore(score)
        }
    },

    // 顯示贏的金額
    showWinScore(value){
        if (value <= 0){
            return
        }

        value = (value * 0.01).toFixed(2)

        let accTime = 0
        let intervalTime = 0.01
        let showTime = this.GameSetting.winScoreShowTime
        let self = this

        this.winTextId = GameG.StartCountDown(this.label_win.node, intervalTime, function(){
            accTime += intervalTime
            if (accTime >= showTime){
                accTime = 1

                GameG.RemoveCountDown(self.winTextId)
            }

            self.label_win.string = (Math.floor(value * accTime)).toString()
        })
    },

    showMessage(text){
        UIManager.ShowMessage(text)
    },

    SetBetRet(receiveMsg){
        if (receiveMsg.Ret == 0){
            this.nowGameState = 2

            this.SpinStart()
            //GameLayer.SetInteractable(false)
            this.userData.Score = this.userData.Score - receiveMsg.Money
            this.setScore(this.userData.Score)
            
            if (this.isInAutoPlay == true){
                let self = this
                // 延遲停止
                self.AutoSpinStopId = GameG.NewDelayOnce(function(){
                    self.AutoSpinStopId = null

                    self.UISlot.AutoStop()
                }, self.GameSetting.autoSpinStopTime, "AutoSpinStop");
            }
        }
        else{
            this.nowGameState = 0

            this.setScore(this.userData.Score)

            this.setAutoSpin(false)        
            this.setStartButton(true, true) 
        }        
    },
};

module.exports = GameLayer;