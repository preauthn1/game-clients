var G=require("Global")
var GameG=require("GameGlobal")
var GameManager=require("GameManager")
var userCount=8
var Tool=null
var GameModel=null
var UIUser=null
var UIBottom=null
var UIChip=null
var UIBet=null
var UIMain=null
var UITreasureBowl=null
var root=null
var users=[]
var selfSeat=null
var canBet=false
var kick=false
var previousBet=0
var gameState=0

var GameLayer={
    extends : cc.Component,

    Init() {
        root=cc.find("Canvas/UI/GameLayer")
        Tool=require("Tool")
        UIBottom=require("UIBottom")
        UITreasureBowl=require("UITreasureBowl")
        UIUser=require("UIUser")
        UIMain=require("UIMain")
        UIChip=require("UIChip")
        UIBet=require("UIBet")
        GameModel=require("GameModel")

        users=[]
        selfSeat=null
        canBet=false
        kick=false
        previousBet=0
        gameState=0

        Tool.Init()
        UIBottom.Init()
        UITreasureBowl.Init()
        UIMain.Init()
        UIChip.Init()
        UIBet.Init()
        for (let i=1; i<=userCount; ++ i) {
            users[i]=new UIUser(cc.find("UIUser/User" + i, root), i)
        }

        GameG.PlayGameBGM("main")
    },

    Start() {
    },

    OnDestroy() {
        Tool.OnDestroy()
        UIMain.OnDestroy()
    },

    GetUserMoney() {
        return selfSeat == null ? 0 : users[selfSeat].GetMoney()
    },

    CheckOnlineUserCount() {
        if (gameState == 1 || gameState == 2) {
            return
        }
        let count=0
        for (let k in (users)) {
            let v=users[k]

            if (v.GetState() != 0) {
                count=count + 1
            }
        }
        if (count<=1) {
            UIMain.ShowWarningMessage(GameG.GetLocalizedString("等待游戏开始"))
        }
    },

    //設置玩家金額
    SetUserMoney(seat, money) {
        users[seat].SetMoney(money)
        if (selfSeat != null && seat == selfSeat) {
            UIBottom.RefreshMoney()
        }
    },

    SetBetState(value) {
        canBet=value
        UIChip.SetChipsActive(value)
        UITreasureBowl.SetActiveBetingParticle(value)
        UIBet.SetActiveBeting(value)
        if (value != null) {
            UIBet.SetActiveClickBet(false)
        }
    },

    //自己下注金額
    GetOwnTotalBet() {
        let bet=UIBet.GetUserBet(selfSeat)
        return bet != null ? bet : 0
    },

    SetUserInfo(data) {
        for (let k in (data)) {
            let v=data[k]

            let user=users[v.SeatNo]
            if (v.State != user.GetState()) {
                user.SetUserInfo(v)
                if (Tool.IsSelf(v.UserID)) {
                    selfSeat=v.SeatNo
                    UIBottom.SetUserInfo(v)
                }
            }
        }
    },

    //10001;                   // S2C 牌局資訊，於玩家進入牌局或斷線重連時傳送
    HLJBP_GameInfo(data) {
        Tool.SetChipData(data.ChipValue)
        UIChip.CreateChip(data.ChipValue)
        UIChip.SetBetLimit(data.Bet_Limit)
        UIMain.SetBetLimit(data.ChipValue[0], data.Bet_Limit)
        //UIMain.SetGameDescriptionText(data.Manual)
        this.SetUserInfo(data.UserInfo)
        UITreasureBowl.SetWinningNumber(data.LuckyNumber)
        this.Reconnect(data)
        if (selfSeat != null) {
            users[selfSeat].ShowOwnSeat()
        }
    },

    //遊戲狀態 0:等待遊戲開始，1:開始下注，2:結算，3:遊戲結束
    Reconnect(data) {
        GameManager.calLoadTime()

        gameState=data.GameState
        if (gameState == 0 || gameState == 3) {
            UIMain.ShowWarningMessage(GameG.GetLocalizedString("等待游戏开始"));
        }
        else if (gameState == 1) {

            for (let k in (data.UserInfo)) {
                let v=data.UserInfo[k]

                UIBet.Bet(v.SeatNo, v.Bet)
                if (v.SeatNo == selfSeat) {
                    UIBet.SetActiveClickBet(v.Bet<=0)
                }
            }
            UITreasureBowl.RefreshRoulette()
            this.RefreshUserBetPercentage()
            this.SetBetState(true)
            let self=this
            UIMain.StartCountdown(data.TimeRemain - 1, function () {
                self.SetBetState(false)
            })
        }
        else if (gameState == 2) {

            UIMain.ShowWarningImage("settlement")
        }
    },

    //10002;                // S2C 玩家資訊，當玩家人數或狀態有變動時傳送
    HLJBP_AllUserInfo(data) {
        this.SetUserInfo(data.UserInfo)
        this.CheckOnlineUserCount()
    },

    //10003;           // S2C 玩家開始下注
    HLJBP_UserBettingStart(data) {
        gameState=1
        if (kick != null) {
            UIMain.HideWarningMessage(false)
        }
        this.SetBetState(true)
        UIMain.PlayStartBetAnimation()
        let self=this
        UIMain.StartCountdown(data.TimeRemain, function () {
            self.SetBetState(false)
        })
        UIBet.SetActiveClickBet(true)

        let autoBet=UIChip.AutoBetIsOn()
        if (autoBet) {
            if (previousBet>0) {
                if (previousBet>this.GetUserMoney()) {
                    UIMain.ShowMessage(GameG.GetLocalizedString("续压金额不足"), 3);
                    UIChip.SetAutoBet(false)
                }
                else {
                    let data={}
                    data.Bet=previousBet
                    GameModel.HLJBP_Bet(data)
                    UIBet.SetActiveClickBet(false)
                }
            }
        }
    },

    //10004;                        // C2S 玩家下注
    HLJBP_Bet() {
        let bet=UIChip.GetChooseChipMoney()
        if (canBet && selfSeat != null) {
            let data={}
            data.Bet=bet
            GameModel.HLJBP_Bet(data)
            UITreasureBowl.PlayBetParticle()
        }
    },

    //更新每個玩家下注百分比
    RefreshUserBetPercentage() {
        for (let k in (users)) {
            let v=users[k]

            let percentage=UIBet.GetUserBetPercentage(k)
            v.SetPercentage(percentage)
            if (v.IsSelf()) {
                let bet=UIBet.GetUserBet(k)
                UIBottom.SetCurrentBet(bet, percentage)
            }
        }
    },

    //10005;                  // S2C 玩家下注結果
    HLJBP_BetResult(data) {
        let seat=data.SeatNo
        let own=seat == selfSeat

        if (data.Result == 0) {
            let bet=data.Bet

            let betArray=Tool.SplitBet(bet)
            for (let k in (betArray)) {
                let v=betArray[k]
                let path=own ? UIChip.GetChipBetPath(v) : users[seat].BetPath()
                UIBet.Bet(seat, v, path)
            }

            this.SetUserMoney(seat, data.MoneyRemain)
            if (own) {
                UIChip.RefreshChipInteractable()
                UIBet.SetActiveClickBet(false)
                if (kick) {
                    kick=false
                    UIMain.HideWarningMessage()
                }
            }
            this.RefreshUserBetPercentage()
        }
        else if (own && data.Result != 0) {

            if (data.Result == - 1) {
                UIMain.ShowMessage(GameG.GetLocalizedString("携带金额不足"));
            }
            else if (data.Result == - 2) {
                UIMain.ShowMessage(GameG.GetLocalizedString("已停止下注"));
            }
            else if (data.Result == - 3) {
                UIMain.ShowMessage(GameG.GetLocalizedString("总压注额超过上限"));
            }
            else if (data.Result == - 4) {
                UIMain.ShowMessage(GameG.GetLocalizedString("压注金额低于1"));
            }
            else if (data.Result == - 5) {
                UIMain.ShowMessage(GameG.GetLocalizedString("压注失败"));
            }
        }
    },

    // HLJBP_Settlement = 10006;         // S2C 總結算
    HLJBP_Settlement(data) {
        gameState=2
        previousBet=this.GetOwnTotalBet()
        let self=this
        UIMain.PlayEndBetAnimation(function () {
            if (data.IsSettlement) {
                self.Settlement(data)
            }
            else {
                UIMain.ShowMessage(GameG.GetLocalizedString("无人下注,游戏将重新开始"), 2);
                Tool.Delay(2, function () { self.Gameover(data) }, this)
            }
        })
    },

    GetWinner(userinfo) {
        for (let k in (userinfo)) {
            let v=userinfo[k]

            if (v.Winner == 1) {
                return k
            }
        }
    },

    GiveMoney(winnerIndex, winnerSeat, data, winMoney) {
        this.SetUserMoney(winnerSeat, data.UserInfo[winnerIndex].Money)
        UIBet.MoveBet(users[winnerSeat].GetPosition())
        users[winnerSeat].ShowWinLoseMoney(winMoney)
        if (winnerSeat == selfSeat) {
            UIBottom.ShowWinLoseMoney(winMoney)
        }
    },

    Settlement(data) {
        let winnerIndex=this.GetWinner(data.UserInfo)
        let winnerSeat=data.UserInfo[winnerIndex].SeatNo
        let winMoney=data.UserInfo[winnerIndex].TotalWinLose

        let self=this
        //只有一人下注直接退籌碼
        if (users[winnerSeat].GetPercentage()>=100) {
            this.GiveMoney(winnerIndex, winnerSeat, data, winMoney)
            Tool.Delay(2, function () { self.Gameover(data) }, this)
        }
        else {
            //轉動輪盤
            UITreasureBowl.Turn(winnerSeat, function () {
                UITreasureBowl.SetWinningNumber(data.LuckyNumber)
                Tool.Delay(1, function () {
                        users[winnerSeat].Flicker()
                        GameG.PlayGameSound("cheer")
                        self.GiveMoney(winnerIndex, winnerSeat, data, winMoney)
                        Tool.Delay(3, function () { self.Gameover(data) }, self)

                        //獲獎記錄
                        let windata={}
                        windata.faceid=data.UserInfo[winnerIndex].FaceID
                        windata.userid=data.UserInfo[winnerIndex].UserID
                        windata.winMoney=winMoney
                        windata.number=data.LuckyNumber
                        windata.percentage=users[winnerSeat].GetPercentage()
                        UIMain.AddWinningRecord(windata)

                        //下注記錄
                        let selfBet=self.GetOwnTotalBet()
                        if (selfBet>0) {
                            let betHistory={}
                            betHistory.bet=selfBet
                            betHistory.percentage=users[selfSeat].GetPercentage()
                            betHistory.win=winnerSeat == selfSeat
                            UIBottom.AddBetHistory(betHistory)
                        }
                    },
                    this)
            })
        }
    },

    Gameover(data) {
        gameState=3
        this.Reset()
        this.CheckOnlineUserCount()
        this.HLJBP_UserActionCommitID(data.ActionName)
    },

    HLJBP_UserActionCommitID(name) {
        let data={}
        data.ActionName=name
        GameModel.HLJBP_UserActionCommitID(data)
    },

    Reset() {
        for (let k in (users)) {
            let v=users[k]

            v.Reset()
        }
        UIBet.Reset()
        UITreasureBowl.Reset()
        UIBottom.SetCurrentBet(0, 0)
    },

    HLJBP_KickTip(data) {
        if (data.Round>0) {
            kick=true
            UIMain.ShowWarningMessage(GameG.GetLocalizedString("长时间未下注").replace("####", data.Round));
        }
    },


};

module.exports=GameLayer
