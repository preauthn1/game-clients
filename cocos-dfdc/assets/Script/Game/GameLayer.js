var gameGlobal = require("GameGlobal")
var gameConfig = require("GameConfig")
var gameData = require("GameData")
var gameModel= require("GameModel")
var uimessage = require("UIMessage")
var uipayTable = require("UIPayTable")
var uisetting = require("UISetting")
var uibonusEnter = require("UIBonusEnter")
var uibonusGame = require("UIBonusGame")
var uijackpotPool = require("UIJackpotPool")
var uigoldSymbol = require("UIGoldSymbol")
var uifreeSpin = require("UIFreeSpin")
var uiautoSpin = require("UIAutoSpin")
var uihistory = require("UIHistory")
var uibigWin = require("UIBigWin")
var uislot = require("UISlot")
var uichip = require("UIChip")
var uiuser = require("UIUser")
var mResultShowEnd = true //結算表演結束

var mTimeScale = 1

/** 用途: 控制遊戲流程與介面 */
var GameLayer = {
    extends: cc.Component,

    Init(root) {            
        this.isExit = false;

        this.rootRect = root

        this.rootNormalBg = cc.find("NormalBg", root)
        this.rootNormalBg.active = true

        this.rootResultLogo = cc.find("Result/ImageLogo", root)
        this.rootResultNormal = cc.find("Result/ImageNormal", root)
        this.rootResultFreeSpin = cc.find("Result/ImageFreeSpin", root)

        // 狀態
        this.txtState = cc.find("TextState", root).getComponent(cc.Label)

        uimessage.Init(cc.find("UIMessage", root))
        uimessage.Show("正在分配座位……")
        uipayTable.Init(cc.find("UIPayTable", root))
        this.btnPayTable = cc.find("ButtonPayTable", root).getComponent(cc.Button)
        this.btnPayTable.node.on('click', function () {
            gameGlobal.PlayGameSound("se_click")
            uipayTable.Show()
        })

        uislot.Init(cc.find("UISlot", root), cc.find("Result", root))
        //總下注金額
        this.txtTotalBet = cc.find("ImageTotalBet/Text", root).getComponent(cc.Label)
        //賠付線數量
        this.txtPayLineCount = cc.find("ImagePayLineCount/Text", root).getComponent(cc.Label)

        //籌碼
        uichip.Init(cc.find("UIChip", root))
        uichip.SetClickCallback(function () {
            GameLayer.RefreshChipButton()
        })
        uichip.Hide()

        let Referrer = gameConfig.getReferrer()
        this.btnExit = cc.find("ButtonExit", root).getComponent(cc.Button)
        this.btnExit.node.on('click', function () {
            gameGlobal.PlayGameSound("se_click")
            uisetting.ClickExit()
        })
        if (Referrer == "0")
            this.btnExit.node.active = false
        else
            this.btnExit.node.active = true
        
        //切換下注金額
        this.txtChip = cc.find("ButtonChip/Text", root).getComponent(cc.Label)
        this.btnChip = cc.find("ButtonChip", root).getComponent(cc.Button)
        this.btnChip.node.on('click', function () {
            gameGlobal.PlayGameSound("se_click")
            uichip.Show()
        })
        this.btnChipDown = cc.find("ButtonChipDown", root).getComponent(cc.Button)
        this.btnChipDown.node.on('click', function () {
            gameGlobal.PlayGameSound("se_click")
            uichip.ClickDown()
            GameLayer.RefreshChipButton()
        })
        this.btnChipUp = cc.find("ButtonChipUp", root).getComponent(cc.Button)
        this.btnChipUp.node.on('click', function () {
            gameGlobal.PlayGameSound("se_click")
            uichip.ClickUp()
            GameLayer.RefreshChipButton()
        })

        //玩家資訊
        uiuser.Init(cc.find("UIUser", root))
        //開始按鈕
        this.btnStart = cc.find("ButtonStart", root).getComponent(cc.Button)
        this.btnStart.node.on('click', function () {
            gameGlobal.PlayGameSound("se_click")
            GameLayer.StartSpin()
        })
        //自動按鈕
        this.txtManual = cc.find("ButtonManual/Text", root).getComponent("TextControl")
        this.btnManual = cc.find("ButtonManual", root).getComponent(cc.Button)
        this.btnManual.node.on('click', function () {
            gameGlobal.PlayGameSound("se_click")
            GameLayer.SetCloseAutoSpin()
        })
        this.btnAuto = cc.find("ButtonAuto", root).getComponent(cc.Button)
        this.btnAuto.node.on('click', function () {
            gameGlobal.PlayGameSound("se_click")
            uiautoSpin.Show(function () {
                GameLayer.GameStart()
            })
        })
        //停止按鈕
        this.btnStop = cc.find("ButtonStop", root).getComponent(cc.Button)
        this.btnStop.node.on('click', function () {
            gameGlobal.PlayGameSound("se_click")
            GameLayer.StopSpin()
        })
        GameLayer.SetBtnStopEnabled(false)
        //加速按鈕
        this.btnSpeedUp = cc.find("ButtonSpeedUp", root).getComponent(cc.Button)
        this.btnSpeedUp.node.on('click', function () {
            gameGlobal.PlayGameSound("se_click")
            GameLayer.ChangeTimeScale(2)
        })

        this.btnSpeedUp.node.active = (false)
        //減速按鈕
        this.btnSlowDown = cc.find("ButtonSlowDown", root).getComponent(cc.Button)
        this.btnSlowDown.node.on('click', function () {
            gameGlobal.PlayGameSound("se_click")
            GameLayer.ChangeTimeScale(1)
        })
        //初始速度
        this.ChangeTimeScale(1)
        //設定介面
        this.btnSetting = cc.find("ButtonSetting", root).getComponent(cc.Button)
        this.btnSetting.node.on('click', function () {
            gameGlobal.PlayGameSound("se_click")
            uisetting.Show()
        })
        //停止按鈕
        this.btnHistory = cc.find("UISetting/ButtonHistory", root).getComponent(cc.Button)
        this.btnHistory.node.on('click', function () {
            gameGlobal.PlayGameSound("se_click")
            uisetting.Hide()
            uihistory.Show()
        })

        uibonusEnter.Init(cc.find("UIBonusEnter", root))
        uibonusGame.Init(cc.find("UIBonusGame", root))
        uijackpotPool.Init(cc.find("UIJackpotPool", root))
        uibigWin.Init(cc.find("UIBigWin", root))
        uifreeSpin.Init(cc.find("UIFreeSpin", root), cc.find("Result", root))

        uigoldSymbol.Init(cc.find("UIGoldSymbol", root))
        uigoldSymbol.SetToggleCallback(function () {
            GameLayer.RefreshGoldSymbolCredits()
        })

        uisetting.Init(cc.find("UISetting", root))
        uiautoSpin.Init(cc.find("UIAutoSpin", root))
        uihistory.Init(cc.find("UIHistory", root))

        mResultShowEnd = true
        GameLayer.SetInteractable(false)
    },

    //初始化Camera
    InitCamera() { },

    Start() {
        GameLayer.InitCamera()
    },

    Update(dt) {
        uisetting.Update()
        uibigWin.Update(dt)
        uiuser.Update(dt)
        uislot.Update(dt)
        uijackpotPool.Update(dt)
    },

    //設定目前狀態
    ShowStateContent(content) {
        this.txtState.string = content
    },

    //離開遊戲
    onExit() {
        this.isExit = true;

        uislot.onExit()
        uiuser.onExit()
        uichip.onExit()
        uipayTable.onExit()
        uijackpotPool.onExit()
        uihistory.onExit()
        GameLayer.ChangeTimeScale(1)
    },
    // 回合開始
    GameStart(){
        console.log("GameStart",gameData.State,mResultShowEnd,gameData.FreeSpinCount)
        if(gameData.State != 0){
            return
        }
        if(mResultShowEnd == false){
            return
        }
        GameLayer.ShowStateContent("start")
        
        gameData.SetGameStart()
        GameLayer.SetInteractable(gameData.State == 0 && gameData.FreeSpinCount == 0)	
        GameLayer.SetBtnStartEnabled(uiautoSpin.GetIsAutoMode() == false)
        GameLayer.SetBtnManualEnabled(uiautoSpin.GetIsAutoMode() == true)
        GameLayer.SetBtnStopEnabled(false)
        uiuser.SetGameStart()
        uijackpotPool.SetGameStart()
        uibigWin.SetGameStart()
        uiautoSpin.SetGameStart()
        uihistory.SetGameStart()
        uichip.SetGameStart()
        if(gameData.AccWinMoey > 0){
            uiuser.SetWinMoney(gameData.AccWinMoey)
        }
        
        if(uiautoSpin.GetCurrentCount() > 0)
            this.txtManual.text = uiautoSpin.GetCurrentCount() -1
        else
            this.txtManual.text = "∞"
        
        let self = this
        // bonus game (斷線重連，沒有free spin才會從這裡進去)
        if(gameData.BonusDetail != null){
            mResultShowEnd = false
            GameLayer.ShowBonusGame()
        }
        // free spin
        else if(gameData.FreeSpinCount > 0){		
            uifreeSpin.Show(gameData.FreeSpinCount,
            function(){ 	//close door callback
                self.rootResultFreeSpin.active = gameData.FreeSpinCount > 0
                self.rootResultNormal.active = gameData.FreeSpinCount == 0
                self.rootResultLogo.active = gameData.FreeSpinCount == 0
                self.rootNormalBg.active = gameData.FreeSpinCount == 0
                uiuser.ResetWinMoney(gameData.AccWinMoey == 0)
                if(gameData.FreeReelSetting != null){
                    uislot.SetReelSetting(gameData.FreeReelSetting)
                }
            },
            function(){  // open door callback
                // bonus game (斷線重連)
                if(gameData.BonusDetail != null){
                    mResultShowEnd = false
                    GameLayer.ShowBonusGame()
                }
                else{
                    GameLayer.StartSpin() 
                }
            })
        }
        // 自動旋轉
        else if(uiautoSpin.GetIsAutoMode() == true) {
            GameLayer.StartSpin()
        }
    },
    
    // 回合結束
    GameEnd(){
        gameData.SetGameEnd()
        uiuser.SetGameEnd()
        uijackpotPool.SetGameEnd()
        uibigWin.SetGameEnd()
        uiautoSpin.SetGameEnd()
        uihistory.SetGameEnd();
        uichip.SetGameEnd()
    },
    // 開始轉動
    StartSpin(){
        if(mResultShowEnd == false){
            return
        }
        mResultShowEnd = false
        this.rootResultFreeSpin.active = gameData.FreeSpinCount > 0
        this.rootResultNormal.active = gameData.FreeSpinCount == 0
        this.rootResultLogo.active = gameData.FreeSpinCount == 0
        this.rootNormalBg.active = gameData.FreeSpinCount == 0
        gameModel.SendGameStart(uichip.GetCurrentBetCount(),uigoldSymbol.GetChooseCredits());	
        uiuser.ResetWinMoney(uifreeSpin.InState() == false)
        uiautoSpin.StartSpin()
    },
    // 停止轉動
    StopSpin(){
        uislot.SetStopSpin(0.01)
        uiautoSpin.StopSpin()
        
        GameLayer.SetBtnStopEnabled(false)
    },
    
    //顯示訊息
    ShowMessage(msg,timer){
        uimessage.ShowTimer(msg,timer)
    },
    
    //遊戲狀態S2C 0.下注状态 1.开奖状态 2.开奖动画 3.结算动画 4.等待游戏开始
    SetState(state){
        if(state == 0){
            GameLayer.GameStart()
        }
    },
    //初始設定資料
    SetSetting(receiveMsg){
        uimessage.Hide()
        gameGlobal.Print("ReelSetting",receiveMsg.ReelSetting)
        uislot.SetReelSetting(receiveMsg.ReelSetting)
        
        gameGlobal.Print("TotalPayLine",receiveMsg.TotalPayLine)
        this.txtPayLineCount.string = receiveMsg.TotalPayLine + "线"
        
        gameGlobal.Print("BetCount",receiveMsg.BetCount)
        uichip.SetData(receiveMsg.BetCount)	
        GameLayer.RefreshChipButton()
        GameLayer.RefreshGoldSymbolCredits()
        
        gameGlobal.Print("BigWinStep",receiveMsg.BigWinStep)
        
        gameGlobal.Print("SymbolPayTable",receiveMsg.SymbolPayTable)
        uipayTable.SetData(receiveMsg.SymbolPayTable)
        
        uiautoSpin.SetOptionList(gameData.AutoSpinOption)	
    
        if (gameData.User)
            uiuser.SetCarryMoney(gameData.User.Score)
    },
    //下注結果S2C
    SetBetRet(receiveMsg){
        if (receiveMsg.Ret == 0){
            GameLayer.ShowStateContent("spin")
            uislot.SetStartSpin()
            GameLayer.SetInteractable(false)
            gameData.User.Score = gameData.User.Score - receiveMsg.Money
            gameGlobal.Print("CurrentScore",gameData.User.Score,"Money",receiveMsg.Money)
            uiuser.SetCarryMoney(gameData.User.Score)
        }
        else{
            mResultShowEnd = true
            GameLayer.SetCloseAutoSpin()
        }
    },
    
    //遊戲結果S2C
    SetGameResult(receiveMsg){
        let self = this

        //G.Service.Game.SendUserActionCommit("result")
        gameGlobal.Print("SymbolID 結果起始號碼",receiveMsg.SymbolID)
        gameGlobal.Print("WinMoney 結算金額",receiveMsg.WinMoney)
        gameGlobal.Print("FreeGameWinMoney",receiveMsg.FreeGameWinMoney)
        gameGlobal.Print("ReelSetting",receiveMsg.ReelSetting)
        // gameGlobal.Print("PayLineGroup",receiveMsg.PayLineGroup)
        gameGlobal.Print("PayAllGroup",receiveMsg.PayAllGroup)
        GameLayer.SetBtnStopEnabled(uiautoSpin.GetIsAutoMode() == false && uifreeSpin.InState() == false)
        uislot.SetGameResult(receiveMsg,
        function() {//callbackStop
            GameLayer.SetBtnStopEnabled(false)
        },
        function(){ //callbackBet
        
        },
        function(){ // callbackComplete		
            GameLayer.ShowStateContent("stop")
            if(receiveMsg.WinMoney > 0){
                self.rootResultFreeSpin.active = false
                self.rootResultNormal.active = true
                self.rootResultLogo.active = false
            }            
            GameLayer.ShowNormalBigWin(receiveMsg)
        },
        function(){ // callbackCarousel
           
        })	
    },
    
    // 表演 big win
    ShowNormalBigWin(receiveMsg){
        gameData.User.Score = gameData.User.Score + receiveMsg.WinMoney
        gameGlobal.Print("CurrentScore",gameData.User.Score,"WinMoney",receiveMsg.WinMoney)
        uiuser.SetCarryMoney(gameData.User.Score)
        uiuser.AnimWinMoney(receiveMsg.WinMoney,function(){
            GameLayer.CompleteReelResult(receiveMsg)
        })

        uibigWin.Show(receiveMsg.WinMoney,function(){
            GameLayer.CompleteReelResult(receiveMsg)
        }, 1)        
    },
    // 表演完金額與中獎符號
    CompleteReelResult(receiveMsg,carousel){
        // 金額還沒表演完畢
        if(uibigWin.CheckShowTimer() == true){
            return
        }
        // 獲得金幣還沒表演完畢
        if(uiuser.CheckShowWinMoney() == true){
            return
        }
        GameLayer.ShowBonusEnter(receiveMsg)
    },
    
    // 表現進入bonus
    ShowBonusEnter(receiveMsg){
        uislot.ShowWinBySymbol(receiveMsg.ReelSetting, "w1")
        let symbolList = uislot.GetListBySymbolName(receiveMsg.ReelSetting, "w1")
        let currentIndex = uibonusGame.GetCurrentIndex()
        uibonusEnter.Show(symbolList, currentIndex, receiveMsg.WinMoney,function(){
            GameLayer.ShowBonusGame(receiveMsg)
        })
    },
    
    //表演 bouns game
    ShowBonusGame(receiveMsg){
        if(gameData.BonusDetail != null){
            let tempTimeScale = mTimeScale
            GameLayer.ChangeTimeScale(1)
            let initPosition = uibonusEnter.GetRewardPosition()
            uibonusGame.Show(initPosition ,function(){		
                gameData.User.Score = gameData.User.Score + gameData.BonusMoney
                gameGlobal.Print("CurrentScore",gameData.User.Score,"BonusMoney",gameData.BonusMoney)
                uiuser.SetCarryMoney(gameData.User.Score)		
                
                GameLayer.ShowJackpotBigWin(receiveMsg)
                
                GameLayer.ChangeTimeScale(tempTimeScale)
            })
        }
        else{
            GameLayer.ShowJackpotBigWin(receiveMsg)
        }
    },
    
    // 表演 big win
    ShowJackpotBigWin(receiveMsg){
        uibigWin.Show(gameData.BonusMoney,function(){
            GameLayer.ShowFreeSpinEnd(receiveMsg)		
        })
    },
    
    //free spin 結束
    ShowFreeSpinEnd(receiveMsg){
        let self = this
        if(uifreeSpin.InState() == true && gameData.FreeSpinCount == 0){
            uifreeSpin.Hide(receiveMsg.FreeGameWinMoney,		
            function(){ 	//close door callback
                self.rootResultFreeSpin.active = false
                self.rootResultNormal.active = false
                self.rootResultLogo.active = true
                self.rootNormalBg.active = true
                uislot.SetReelSetting(gameData.ReelSetting)
            },
            function(){ // open door callback
                GameLayer.ShowNextGame()
            })
        }
        else{
            GameLayer.ShowNextGame()
        }
    },
    
    //下局回合開始
    ShowNextGame(){
        gameGlobal.Print("ShowNextGame",gameData.FinalMoney)
        gameData.User.Score = gameData.FinalMoney
        uiuser.SetCarryMoney(gameData.User.Score)
        gameData.BonusMoney = 0
        gameData.AccWinMoey = 0
        gameData.IsRecover = false
        mResultShowEnd = true
        GameLayer.GameStart()
    },
    
    //玩家資訊
    SetUserData(data){
        uiuser.SetGameUser(data)
    },
    //開始按鈕
    SetBtnStartEnabled(enabled){
        this.btnStart.node.active = enabled
    },
    //自動旋轉按鈕
    SetBtnManualEnabled(enabled){
        this.btnManual.node.active = enabled
    },
    //停止按鈕
    SetBtnStopEnabled(enabled){
        this.btnStop.node.active = enabled
    },
    //加速按鈕
    SetBtnSpeedUpEnabled(enabled){
        this.btnSpeedUp.node.active = enabled
    },
    //減速按鈕
    SetBtnSlowDownEnabled(enabled){
        this.btnSlowDown.node.active = enabled
    },
    
    // 設定按鈕的開關
    SetInteractable(enabled){
        uigoldSymbol.SetInteractable(enabled)

        this.btnStart.interactable = enabled
        this.btnChipUp.interactable = enabled
        this.btnChipDown.interactable = enabled
        this.btnPayTable.interactable = enabled
        this.btnAuto.interactable = enabled
        this.btnSetting.interactable = enabled

        if(enabled == true){
            GameLayer.RefreshChipButton()
        }
    },
    
    // 更改遊戲速度
    ChangeTimeScale(scale){
        mTimeScale = scale
        cc.director.calculateDeltaTime = function (now) {
            if (!now) now = performance.now();
            this._deltaTime = (now - this._lastUpdate) / 1000;
            this._deltaTime *= scale;
            this._lastUpdate = now;
        }
        if (this.isExit == false)
        {
            GameLayer.SetBtnSpeedUpEnabled(scale == 1)
            GameLayer.SetBtnSlowDownEnabled(scale > 1)
        }
    },
    
    //更新Jackpot pool值
    SetJackpotPool(data){
        uijackpotPool.SetData(data)
    },
    
    // 設定指定押注額
    SetCurrentChip(num){
        uichip.SetCurrentBetCount(num)
    },
    
    // 設定目前指定黃金符號
    SetCurrentGoldSymbol(num){
        uigoldSymbol.SetCurrentCredits(num)
    },
    
    // 設定黃金符號資料
    SetGoldenDetail(data){
        uigoldSymbol.SetData(data.GoldenDetail)
    },
    
    // 設定賠付線數值
    SetPayTable(data){
        uipayTable.SetData(data)
    },
    
    // 設定歷史紀錄
    SetHistoryFindData(data){
        uihistory.SetFindData(data)
    },
    
    // 關閉自動下注
    SetCloseAutoSpin(){
        GameLayer.SetBtnStartEnabled(true)
        GameLayer.SetBtnManualEnabled(false)
        uiautoSpin.SetManual()
    },
    
    // 重新整理選擇的下注金額
    RefreshChipButton(){
        let show = (gameData.State == 0 && gameData.FreeSpinCount == 0)
        let index = uichip.GetCurrentIndex()
        this.btnChipUp.interactable = (gameData.BetCount.length - 1 > index && show)
        this.btnChipDown.interactable = (index > 0 && show)	
        
        gameData.SetChipMoney(uichip.GetCurrentBetCount())
        
        this.txtChip.string = "X" + gameGlobal.FormatNum(gameData.GetBetMoney())
        this.txtTotalBet.string = gameGlobal.FormatNum(gameData.GetTotalBetMoney())
        
        uijackpotPool.RefreshData()
    },
    
    // 重新整理選擇的黃金符號
    RefreshGoldSymbolCredits(){
        
        let coin = uichip.GetCurrentBetCount()
        this.txtChip.string = "X" + gameGlobal.FormatNum(coin)
        
        let credits = uigoldSymbol.GetChooseCredits()	
        let total = coin * credits
        this.txtTotalBet.string = gameGlobal.FormatNum(total)
        
        gameData.SetGoldenSymbolStep(uigoldSymbol.GetChooseStep())
        gameData.SetGoldenSymbolCredits(credits)
        
        uijackpotPool.RefreshData()
    },
};

module.exports = GameLayer;
