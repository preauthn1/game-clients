var GameModel = require("GameModel");
var GameG = require("GameGlobal")
var GameConfig = require("GameConfig")
var UIManager = require("UIManager")

var GameLayer = {
    extends: cc.Component,

    Init() {
        // 遊戲狀態 0:待機 1:等在server結果 2:轉動中
        this.nowGameState = 0

        this.UIScrollMsg = cc.find("Canvas/UIScrollMsg").getComponent("UIScrollMsg")
        this.UIScrollMsg.show("XXX", "將軍", 1)

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

		this.UIPayResult = cc.find("UIPayResult", this.Center).getComponent("UIPayResult")
		this.UIPayResult.init(this.UISlot, this.GameSetting)        
        
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

        // 開始spin按鈕
        this.btn_start = cc.find("btn/btn_start", this.Center).getComponent(cc.Button)
        this.btn_start.node.on('click',function(){
            if (self.autoCountUI.active == true){
                return
            }

            //self.UISlotActionManager.doNextAction()
            if (self.CheckScore() == false){
                return
            }

            self.updateScore(false)
            self.setStartButton(false)
            self.SendStartSpin()
        })

        let LongClickButton = this.btn_start.getComponent("LongClickButton")
        LongClickButton.setCallback(function(){
            if (self.btn_start.interactable == false){
                return
            }

            self.autoCountUI.active = true
        })        

        // 是否在自動
        this.isInAutoPlay = false
        // 取消自動按鈕
        this.isAutoPlay = false
        this.btn_cancelauto = cc.find("btn/btn_cancelauto", this.Center)
        this.btn_cancelauto.on('click',function(){            
            self.setAutoSpin(false)
        })
        this.btn_cancelauto.active = false

        this.label_autoCount = cc.find("label_Count", this.btn_cancelauto).getComponent(cc.Label)

        let autoCount = [ 20, 50, 100, 250, -1 ]
        this.autoCountUI = cc.find("btn/autoCountUI", this.Center)
        this.btn_autoCountUIClose = cc.find("close", this.autoCountUI)
        this.btn_autoCountUIClose.on('click',function(){
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

        })   

        // UIBet
        this.btn_bet = cc.find("btn/btn_bet", this.Center)
        this.btn_bet.on('click',function(){
            self.UIBet.show()
        })
        this.label_betCount = cc.find("label_betCount", this.btn_bet).getComponent(cc.Label)

        this.UIBet = cc.find("btn/betUI", this.Center).getComponent("UIBet")
        this.UIBet.init(this.label_betCount)        
        // *************

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
        let Money = this.BetCountData[this.UIBet.getSelectIndex()]
        let GoldenSymbol = this.GoldenDetaildata[0].Credits

        if (this.userData.Score < Money * GoldenSymbol){
            // 你的總壓住小於最小壓住
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

        this.setStartButton(true)
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
        this.UIBet.SetGoldenDetail(data.GoldenDetail)
    },

    SetSetting(data){
        this.label_once.string = data.once.toString()
        this.label_ratio.string = data.ratio.toString() + ":1"
        this.label_once.string = data.once.toString()
        this.label_no.string = "NO." + data.no.toString()

        this.updateTimes(0, data.times)

        GameConfig.saveRoomId(data.no)

        this.settingData = data

        //能選的金額
        this.BetCountData = data.BetCount
        this.UIBet.SetBetCountData(data.BetCount)
        this.updateBetCount()

        if (this.CheckScore() == true){
            // 遊戲開始
            this.UIMessage.showMessage(1, 0, true)
        }

        this.UISlot.SetReelStrips(data.ReelStrips)
        this.UIPayResult.SetReelSetting()
        this.UICounter.setData(data.counter)

    },

    updateTimes(type, times){
        //JAC GAME 顯示格式為「1- 08」 1表示JAC GAME 3 08表示JAC GAME 3 的剩餘次數 
        //BOUNUS GAME 顯示格式為「3 30」 3表示BONUS GAME 1 30表示BONUS GAME 1 的剩餘次數

        if (type > 0){
            this.label_times.string = type.toString() + "-" + times.toString()
        }
        else{
            this.label_times.string = times.toString()
        }
    },

    // 轉動結果
    SetGameResult(data){
        this.resultData = data
        
        if (this.resultData.WinMoney > 0)
            this.UISlotActionManager.setData(1)
        else
            this.UISlotActionManager.setData(2)

        this.UISlotActionManager.do_start()

        this.UISlot.SetGameResult(data)

        this.UIPayResult.setPayData(data)
        
        this.UICounter.addOneData(data.Counter)
    },

    // 玩家狀態結果
    SetUserStateChange(data){
        this.userData = data
    },

    // 設定自動
    setAutoSpin(isAuto){
        this.isAutoPlay = isAuto
        this.btn_cancelauto.active = isAuto
    },

    setStartButton(showStart){
        this.btn_start.interactable = showStart
    },

    // 
    SendStartSpin(){
        if (this.nowGameState != 0){
            return
        }

        this.nowGameState = 1

        let Money = this.BetCountData[this.UIBet.getSelectIndex()]
        let GoldenSymbol = this.GoldenDetaildata[0].Credits        
        GameModel.SendStartSpin(Money, GoldenSymbol)
    },

    SetAutoSpinCount(count){
        this.autoSpinCount = count
    },

    SetAutoSpinCountText(){
        if (this.autoSpinCount == -1){
            this.UIMessage.setText("∞")
            this.label_autoCount.string = "∞"
        }
        else{
            this.UIMessage.setText(this.autoSpinCount.toString())
            this.label_autoCount.string = this.autoSpinCount.toString()
        }
    },

    ShowInsertCoins(){
        // 自動模式
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
            // 請停輪
            this.UIMessage.showMessage(3)
        }

        // 扣錢
        this.updateBetCount()

        let self = this

        this.UIPayResult.showResultEnd()

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
                self.UIPayResult.showMask(index)

                self.UISlotActionManager.do_stop(index)
            }
        )
    },    

    // 按下轉動停止
    SpinEnd(){
        this.showWinScore(this.resultData.WinMoney)

        // 顯示對應的訊息
        if (this.resultData.WinMoney > 0){
            // 恭喜中獎
            this.UIMessage.showMessage(4)
        }
        else {
            // 別氣餒,歡迎下次中大獎
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

        this.setStartButton(true)

        this.UIActionManager.changeAction(1, null, -1)

        this.UIPayResult.showResult()

        // 更新錢
        if (this.userData != null){
            this.setScore(this.userData.Score)
        }

        this.isInAutoPlay = false
        
        let result = this.CheckScore()
        if (result == true){
            // 遊戲開始
            this.UIMessage.showMessage(1, 0, true)            
        }

        // 結束後自動下一輪
        if (this.isAutoPlay == true){
            if (this.autoSpinCount != -1)
                this.SetAutoSpinCount(this.autoSpinCount - 1)

            if (this.autoSpinCount == 0){
                this.setAutoSpin(false)
            }
            else{
                // 檢查錢是否足夠
                if (result == false){
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
        let Money = GameLayer.BetCountData[this.UIBet.getSelectIndex()]
        let GoldenSymbol = this.GoldenDetaildata[0].Credits
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

        let Money = this.BetCountData[this.UIBet.getSelectIndex()]
        let GoldenSymbol = this.GoldenDetaildata[0].Credits
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
            this.setStartButton(true) 
        }        
    },
};

module.exports = GameLayer;