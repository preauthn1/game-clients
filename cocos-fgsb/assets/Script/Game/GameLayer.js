window.GameModel = null;
window.UIDealer  = null;
window.UIBottom  = null;
window.UIChip    = null;
window.UIMain    = null;

var G           = require("../Base/Global");
var GameG       = require("GameGlobal");
var gameManager = require("../Base/GameManager");
var userCount   = 5;
var UIUser      = null;
var Tool        = null;
var root        = null;
var users       = [];
var selfSeat    = null;
var canBet      = false;
var haveBet     = false;
var autoBet     = false;
var kick        = false;
var betRecord   = [];

var GameLayer = {
    extends : cc.Component,
    
    Init(){
        root = cc.find("Canvas/GameLayer");
        Tool = require("Tool");
        Tool.Init();
        GameModel = require("GameModel");
        UIDealer  = new (require("UIDealer"))(cc.find("UIDealer", root), null);
        UIUser    = require("UIUser");
        UIBottom  = require("UIBottom");
        UIBottom.Create(cc.find("UIBottom", root));
        UIChip    = new (require("UIChip"))(cc.find("UIChip", root), this);
        UIMain    = new (require("UIMain"))(cc.find("UIMain", root));
        users     = [];
        selfSeat  = null;
        canBet    = false;
        autoBet   = false;
        kick      = false;
        betRecord = [0, 0];
        
        let userPrefab   = cc.find("UIUser/UserPrefab", root);
        let userPosition = [null, cc.v3(515, -150, 0), cc.v3(266, -195, 0), cc.v3(0, -215.6, 0), cc.v3(-266, -195, 0), cc.v3(-515, -150, 0)];
        
        let userRotation = [null, 14.3, 7.7, 0, -7.7, -14.3];
        
        
        for(let i = 1; i <= userCount; i++){
            let user      = cc.instantiate(userPrefab);
            user.parent   = (userPrefab.parent);
            user.position = userPosition[i];
            user.angle    = userRotation[i];
            user.scale    = cc.v3(1, 1, 1);
            user.name     = "User" + i;
            users[i]      = new UIUser(user, i);
            users[i].ClearUserInfo();
            
        }
        userPrefab.active = false;
        GameG.PlayGameBGM("main");
        
    },
    
    Start(){
    },
    
    OnDestroy(){
        Tool.OnDestroy();
    },
    
    GetUserMoney(){
        return selfSeat == null ? 0 : users[selfSeat].money;
    },
    
    GetBetTotal(){
        return selfSeat == null ? null : users[selfSeat].GetBetTotal();
    },
    
    //設置玩家金額
    SetUserMoney(seat, money){
        users[seat].SetMoney(money);
        if(selfSeat != null && seat == selfSeat){
            
            UIBottom.RefreshMoney();
        }
    },
    
    //動畫播放完成
    FGSB_UserActionCommitID(name){
        let data        = {};
        data.ActionName = name;
        GameModel.FGSB_UserActionCommitID(data);
    },
    
    ClearUser(){
        for(let k in (users)){
            let v = users[k];
            v.ClearUser();
        }
        UIDealer.ClearSeat();
    },
    
    CheckSeat(){
        let sitdown = selfSeat != null;
        let vacancy = 0;
        for(let k in (users)){
            let v = users[k];
            
            v.SetActiveSitDownButton(!sitdown);
            
            if(v.userState == 0){
                vacancy = vacancy + 1;
            }
        }
        
        if(sitdown == false && kick == false){
            UIMain.ShowGameStateMessage(vacancy > 0 && GameG.GetLocalizedString("请选择座位") || GameG.GetLocalizedString("目前位子已满"));
        }
    },
    
    SetUserInfo(data){
        for(let k in (data.UserInfo)){
            let v = data.UserInfo[k];
            
            let user = users[v.SeatNo];
            user.SetUserInfo(v);
            if(user.own){
                selfSeat = v.SeatNo;
                UIBottom.SetUserInfo(v);
            }
        }
        this.CheckSeat();
    },
    
    //10001 S2C 牌局資訊，於玩家進入牌局或斷線重連時傳送
    FGSB_GameInfo(data){
        Tool.SetChipData(data.ChipValue);
        this.SetUserInfo(data);
        UIChip.CreateChip(data.ChipValue);//創造新選擇代幣按鈕
        UIMain.SetGameDescriptionText(data.Manual);
        UIMain.SetOddsText(1, data.SideSheet);
        UIMain.SetOddsText(2, data.SpecialSheet);
        //data.ChipValue[0] 底注
        UIMain.SetRoomInfo(data.ChipValue[0], data.Bet_Limit, data.Bet_SideLimit, data.TableNo);
        UIMain.SetRound(data.Round);
        UIChip.SetMaxBet(data.Bet_Limit, data.Bet_SideLimit);
        UIBottom.SetUserInfo(data.SelfInfo);
        this.Reconnect(data);
    },
    
    //斷線重連 0:等待遊戲開始，1:開始下注，2:停止下注，3:發牌，4:邊注、特殊牌型結算，5:加注，6:底注、加注結算，7:遊戲結束
    Reconnect(data){
        let self = this;
        if(data.GameState == 6 || data.GameState == 7){
            UIMain.SetActiveWaitStart(true);
            return;
        }
        
        if([0, 2, 3, 4, 6, 7].includes(data.GameState)) gameManager.calLoadTime();
        
        this.CreateBet(data);
        this.CreateCard(data);
        if(data.GameState == 1){
            let LT = gameManager.calLoadTime();
            let tr = data.TimeRemain - LT;
            
            UIMain.StartCountdown(tr - 1, function(){
                self.SetActiveBetPool(false);
            });
            this.SetActiveBetPool(true);
        }else if(data.GameState == 5){
            if(selfSeat != null){
                for(let k in (data.UserInfo)){
                    let v = data.UserInfo[k];
                    
                    if(v.SeatNo == selfSeat && v.Bet_Double <= 0){
                        this.FGSB_DoubleBetStart(data);
                    }
                }
            }
        }
    },
    
    CreateBet(data){
        for(let k in (data.UserInfo)){
            let v = data.UserInfo[k];
            
            let user = users[v.SeatNo];
            user.Bet(1, v.Bet_Base, null, true);
            user.Bet(2, v.Bet_Side, null, true);
            user.Bet(3, v.Win_Special, null, true);
            user.Bet(4, v.Win_Side, null, true);
            if(v.Bet_Base > 0){
                haveBet = true;
            }
        }
    },
    
    CreateCard(data){
        // let sequence=Tool.GetSequence();
        for(let k in (data.UserInfo)){
            let v = data.UserInfo[k];
            
            if(v.UserCards != null && v.UserCards.Cards != null && v.UserCards.Cards.length > 0){
                //牌組
                for(let cardSetIndex = 0; cardSetIndex < v.UserCards.Cards.length; cardSetIndex++){
                    let cardInfo = v.UserCards.Cards[cardSetIndex];
                    users[v.SeatNo].Deal(cardSetIndex, cardInfo, false);
                }
                if(v.State == 1){
                    users[v.SeatNo].ShowPattern(v.UserCards.Pattern, false);
                }else if(v.State == 3){
                    users[v.SeatNo].ShowPattern(-1, false);
                }
                if(v.Win_Special > 1){
                    users[v.SeatNo].ShowSpecial();
                }
            }
        }
        if(data.BankerCards != null && data.BankerCards.Cards != null && data.BankerCards.Cards.length > 0){
            for(let k in (data.BankerCards.Cards)){
                let v = data.BankerCards.Cards[k];
                UIDealer.Deal(k, v, false);//UIDealer.Deal(k, v, sequence, false);
            }
        }
        // sequence.start();
    },
    
    // 10002 S2C 玩家資訊，當玩家人數或狀態有變動時傳送
    FGSB_AllUserInfo(data){
        this.SetUserInfo(data);
        this.SetActiveBetPool(canBet);
    },
    
    //下注池開關
    SetActiveBetPool(value){
        if(selfSeat != null && users[selfSeat].userState == 1){
            UIChip.SetChipsActive(value);
            if(kick == false){
                if(value){
                    UIMain.ShowGameStateImage("bet");
                }else{
                    UIMain.HideGameState();
                }
            }
        }
        canBet = value;
    },
    
    //10003 S2C 玩家開始下注
    FGSB_UserBettingStart(data){
        let self = this;
        haveBet  = false;
        // GameG.PlayGameSound("BetBegin");
        UIMain.SetActiveWaitStart(false);
        UIDealer.PlayAnimation("start_bet", 2.3);
        //開始下注
        UIMain.PlayStartBetAnimation();
        UIMain.SetRound(data.Round);
        let LT = gameManager.calLoadTime();
        let tr = data.TimeRemain - LT;
        UIMain.StartCountdown(tr, function(){
            self.SetActiveBetPool(false);
        });
        this.SetActiveBetPool(true);
        if(autoBet){
            for(let k in (betRecord)){
                let v = betRecord[k];
                
                if(v > 0){
                    GameModel.FGSB_Bet([Bet = v, BetType = k]);
                }
            }
            betRecord = [0, 0];
        }
    },
    
    //10004 C2S 玩家下注
    FGSB_Bet(type){
        let bet = UIChip.GetChooseChipMoney();
        
        if(canBet && selfSeat != null){
            if(type == 2 && this.GetBetTotal()[1] <= 0){
                UIMain.ShowMessage("需先下底注");
            }else{
                GameModel.FGSB_Bet({ Bet : bet, BetType : type });
            }
        }
    },
    
    //10005 S2C 玩家下注結果
    FGSB_BetResult(data){
        let seat = data.SeatNo;
        let own  = seat == selfSeat;
        if(data.Result == 0){
            let bet  = data.Bet;
            let type = data.BetType;
            
            let position = own && UIChip.GetChipPosition(bet) || users[seat].root;
            
            users[seat].Bet(type, bet, position, true);
            
            this.SetUserMoney(seat, data.MoneyRemain);
            
            
            if(selfSeat != null && seat == selfSeat){
                betRecord[type] = betRecord[type] + bet;
                
                if(kick){
                    kick = false;
                    UIMain.ShowGameStateImage("bet");
                }
                
                UIChip.RefreshChipInteractable();
            }
            haveBet = true;
        }else if(own && data.Result != 0){
            
            if(data.Result == -1){
                UIMain.ShowMessage("携带金额不足");
            }else if(data.Result == -2){
                UIMain.ShowMessage("已停止下注");
            }else if(data.Result == -3){
                
                UIMain.ShowMessage("总压注额超过上限");
            }else if(data.Result == -4){
                
                UIMain.ShowMessage("压注金额低于1");
            }else if(data.Result == -5){
                
                UIMain.ShowMessage("需先下底注");
            }else if(data.Result == -6){
                UIMain.ShowMessage("压注失败");
            }
        }
    },
    
    //10006 S2C 播放停止下注動畫
    FGSB_StopBettingAnimation(data){
        let self = this;
        
        if(!haveBet){
            UIMain.ShowMessage("无人下注", 3);//无人下注,游戏将重新开始
        }
        this.SetActiveBetPool(false);
        // GameG.PlayGameSound("BetEnd");
        UIDealer.PlayAnimation("stop_bet", 2.7, 2);
        UIMain.PlayEndBetAnimation();
        Tool.Delay(3, function(){
            self.FGSB_UserActionCommitID(data.ActionName);
        });
    },
    
    //10007 S2C 發牌
    FGSB_Deal(data){
        let self = this;
        UIDealer.PlayAnimation("swipe", 2.3, 1);
        
        let sequence = Tool.GetSequence()//tween 用來啟動內層 tween
                           .delay(0.8);
        
        let duration = 0.2;
        //發牌
        for(let k in (data.UserInfo)){
            let v = data.UserInfo[k];
            if(v.State == 1 && v.UserCards != null && v.UserCards.Cards != null){
                for(let i = 0; i < 3; i++){
                    sequence.call(function(){
                        users[v.SeatNo].Deal(i, v.UserCards.Cards[i], true);
                    }).delay(duration);
                }
                sequence.delay(0.1)
                        .call(function(){
                            users[v.SeatNo].ShowPattern(v.UserCards.Pattern, true);
                        });
            }
        }
        sequence.delay(0.1);
        for(let i = 0; i < 3; i++){
            sequence.call(function(){
                        UIDealer.Deal(i, data.BankerCards.Cards[i], true);
                    })
                    .delay(duration);
        }
        sequence.call(function(){
            self.FGSB_UserActionCommitID(data.ActionName);
        }).start();
    },
    
    //10008 S2C 邊注、特殊牌型結算
    FGSB_SideSettlement(data){
        let self     = this;
        let position = UIDealer.root;
        let delay    = 0;
        for(let k in (data.UserInfo)){
            let v = data.UserInfo[k];
            
            if(v.State == 1 && (v.Win_Side > 0 || v.Win_Special > 0) && selfSeat != null && v.SeatNo == selfSeat){
                UIMain.PlaySWinAnimation();
                delay = 2;
                break;
            }
        }
        for(let k in (data.UserInfo)){
            let v = data.UserInfo[k];
            
            Tool.Delay(delay, function(){
                users[v.SeatNo].Bet(4, v.Win_Side, position, true);
                users[v.SeatNo].Bet(3, v.Win_Special, position, true);
                if(v.Win_Special > 0){
                    users[v.SeatNo].ShowSpecial();
                }
            });
        }
        Tool.Delay(delay + 1, function(){ self.FGSB_UserActionCommitID(data.ActionName); });
    },
    
    //10009 S2C 玩家開始加注
    FGSB_DoubleBetStart(data){
        if(selfSeat != null && users[selfSeat].userState == 1 && users[selfSeat].cards.length > 0){
            UIBottom.SetActiveActionArea(true);
            if(kick == false){
                // UIMain.ShowGameStateImage("choose");
                UIMain.ShowGameStateMessage(GameG.GetLocalizedString("请选择"));
            }
            if(autoBet){
                this.DoubleAction(0);
            }
        }
        let LT = gameManager.calLoadTime();
        let tr = data.TimeRemain - LT;
        UIMain.StartCountdown(tr, function(){
            UIBottom.SetActiveActionArea(false);
        });
    },
    
    DoubleAction(action){
        if(action == 0){
            this.FGSB_FoldCard();
        }else if(action == 1){
            this.FGSB_DoubleBet();
        }
        UIBottom.SetActiveActionArea(false);
    },
    
    //10010 C2S 玩家加注
    FGSB_DoubleBet(data){
        GameModel.FGSB_DoubleBet(data);
    },
    
    //10011 C2S 棄牌
    FGSB_FoldCard(data){
        GameModel.FGSB_FoldCard(data);
    },
    
    //10012 S2C 玩家加注結果
    FGSB_DoubleBetResult(data){
        if(data.Result == 1){
            let user = users[data.SeatNo];
            user.Bet(1, data.Bet, user.root, true);
            user.ShowActionSignImage(1);
            
            //SetUserMoney(data.SeatNo,data.MoneyRemain) //已結算過邊注
            let userMoneyRemain = users[data.SeatNo].money - data.Bet;
            
            //ChipValue[0]      
            
            this.SetUserMoney(data.SeatNo, userMoneyRemain);
            if(selfSeat != null && user.own && kick == false){
                UIMain.HideGameState();
            }
            
        }else{
            this.GiveUp(data);
            if(data.Result == -1){
                UIMain.ShowMessage("余额不足");
            }
        }
    },
    
    GiveUp(data){
        users[data.SeatNo].ShowPattern(-1);
        users[data.SeatNo].ShowActionSignImage(0);
    },
    
    //10013 S2C 總結算
    FGSB_Settlement(data){
        UIMain.StopCountdown();
        if(selfSeat != null && kick == false){
            UIMain.HideGameState();
        }
        for(let k in (data.UserInfo)){
            let v = data.UserInfo[k];
            
            if(v.State == 1){
                this.ShowCards(data);
                return;
            }
        }
        this.ShowResults(data);
    },
    
    //開牌
    ShowCards(data){
        let self = this;
        UIMain.PlayDealerOpenAnimation(function(){
            UIDealer.ShowCards(0, 2, data.BankerCards.Cards, function(){
                UIDealer.ShowPattern(data.BankerCards.Pattern);
                GameG.PlayGameSound("open");
                Tool.Delay(1, function(){
                    self.ShowResults(data);
                });
            });
        });
    },
    
    //輸贏結果
    ShowResults(data){
        let self = this;
        let time = 1;
        for(let k in (data.UserInfo)){
            let v = data.UserInfo[k];
            
            if((v.State == 1 || v.State == 3) && v.SeatNo == selfSeat){
                if(v.Winner == 1){	//贏
                    time = 3;
                    users[v.SeatNo].Flicker(1);
                    UIMain.PlayUserWinAnimation();
                    UIDealer.PlayAnimation("lose", 2.1);
                    GameG.PlayGameSound("win");
                }else if(v.Winner == 2){
                    
                    UIDealer.PlayAnimation("win", 2);
                    GameG.PlayGameSound("lose");
                }
                Tool.Delay(time, function(){ self.GiveMoney(data); });
                return;
            }
        }
        this.GiveMoney(data);
    },
    
    //賠付
    GiveMoney(data){
        let time = 0;
        let self = this;
        for(let k in (data.UserInfo)){
            let v = data.UserInfo[k];
            
            if(v.State == 1 && v.Winner == 1){ //贏
                time = 1;
                users[v.SeatNo].Bet(1, v.Win_Base, UIDealer.root, false);
            }
        }
        Tool.Delay(time, function(){ self.MoveBet(data); });
    },
    
    //移動籌碼
    MoveBet(data){
        let self = this;
        for(let k in (data.UserInfo)){
            let v = data.UserInfo[k];
            
            if(v.State == 1 || v.State == 3){
                //0:和，1:贏，2:輸
                let user            = users[v.SeatNo];
                let baseDestination = v.Winner == 2 && UIDealer.root || user.root;
                let sideDestination = (v.Win_Side > 0 || v.Win_Special > 0) && user.root || UIDealer.root;
                if(v.Winner == 0 || v.Winner == 1){
                    GameG.PlayGameSound("coin");
                }else if(v.Winner == 2){
                    GameG.PlayGameSound("chip_banker");
                }
                
                user.MoveBetPool(1, baseDestination);
                user.MoveBetPool(2, sideDestination);
                user.MoveBetPool(3, user.root);
                user.MoveBetPool(4, user.root);
                
                let win          = v.Win_Base > 0 || v.Win_Side > 0 || v.Win_Special > 0;
                let totalWinLose = win && v.TotalWinLose + v.Bet_Base + v.Bet_Double + v.Bet_Side || v.TotalWinLose;
                this.SetUserMoney(v.SeatNo, v.Money);
                
                user.ShowWinLoseMoney(totalWinLose);
            }
        }
        Tool.Delay(2, function(){
            self.RecoverCard(data);
        });
    },
    
    //回收牌
    RecoverCard(data){
        let self = this;
        let time = 0;
        for(let k in (users)){
            let v = users[k];
            if(v.userState == 1 || v.userState == 3){
                Tool.Delay(time, function(){ v.RecoverCard(); });
                time = time + 0.1;
            }
        }
        Tool.Delay(time, function(){ UIDealer.RecoverCard(); });
        Tool.Delay(time + 2, function(){
            self.ClearUser();
            self.FGSB_UserActionCommitID(data.ActionName);
        });
    },
    
    // 10014 C2S 玩家選座位
    FGSB_SelectSeat(seat){
        let seatplus = seat;
        GameModel.FGSB_SelectSeat({ SeatNo : seatplus });//to massage
    },
    
    //10015 S2C 玩家選座位結果
    FGSB_SelectSeat_OK(data){
        if(data.Result == 0){
            selfSeat = data.SeatNo;
            kick     = false;
            UIMain.StopKickCountdown();
            UIMain.HideGameState();
            this.SetActiveBetPool(canBet);
        }else if(data.Result == -1){
            UIMain.ShowMessage("座位已有其他玩家");
        }else if(data.Result == -2){
            UIMain.ShowMessage("其它错误");
        }
    },
    
    //10016 S2C 踢人倒數提示
    FGSB_KickTip(data){
        kick = true;
        if(data.Time > 0){
            UIMain.StartKickCountdown(data.Time);
        }else if(data.Round > 0){
            UIMain.ShowGameStateMessage(GameG.GetLocalizedString("长时间未下注", data.Round));
        }
    },
    
    //10017 S2C 觀戰人數
    FGSB_WatchUserCountID(data){
        UIMain.SetWatchCount(data.Count);
    },
    
    
};

module.exports = GameLayer;
