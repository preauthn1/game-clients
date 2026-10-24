var G             = require("Global");
var GameModel     = require("GameModel");
var Tool          = require("Tool");
var betTime       = 6;
var doubleBetTime = 5;
var userCount     = 5;
var chipValue     = [100, 500, 1000, 5000, 10000, 50000, 100000];
var allUserInfo   = [];
var userinfo      = [];
var dealerCards   = [];
var selected      = false;
var canBet        = false;
var round         = 0;
var specialSheet  = ["同花順,1賠40", "三條,1賠30", "順子,1賠6", "同花,1賠4", "對子,1賠1"];
var sideSheet     = ["同花順,1賠5", "三條,1賠4", "順子,1賠1"];
var manual        = ["一副标准的52张牌中，每名玩家发到3张牌，之后就不再发任何牌了。这3张牌都是暗牌（面朝下）。", "三张牌扑克中，顺子比同花大。所有花色不分大小，牌型排序依次为：A（最大）、K、Q、J、10、9、8、7、6、5、4、3 和 2。同花 A-K-Q 最大，有时也称为皇家同花顺。2-3-5 最小。如果闲家和庄家牌型相同，则打成平手", "对牌以上下注：", "只要玩家的牌大于等于一对，玩家就可赢钱。如果玩家的牌不成对，则玩家会输掉赌注。", "底注红利：", "无论庄家成手与否，无论闲家牌大还是牌小，始终会支付底注红利", "顺子（底注 1 比 1）、三条（底注 4 比 1）和同花顺（底注 5 比 1）",];
var odds          = [1, 1, 4, 6, 30, 40];
var poker         = [];
var someoneBet    = false;

var GameServer = {
    extends : cc.Component,
    
    GetNullUser(seatNo){
        return [Money = 0, SeatNo = seatNo, UserID = -1, UserCards = [], State = 0, Bet_Base = 0, Bet_Side = 0, Bet_Double = 0, Winner = -1, Win_Side = 0, Win_Special = 0, Win_Base = 0, Win_Double = 0, FaceID = 0,];
    },
    
    GetRandomUser(seatNo){
        return [Money = 9999999, SeatNo = seatNo, UserID = Tool.Random(11111111, 99999999), UserCards = [], State = 1, Bet_Base = 0, Bet_Side = 0, Bet_Double = 0, Winner = -1, Win_Side = 0, Win_Special = 0, Win_Base = 0, Win_Double = 0, FaceID = 0,];
    },
    
    Start(){
        userinfo        = this.GetNullUser();
        userinfo.Money  = 100000;                          //玩家金錢
        userinfo.UserID = GameG.getUserID();      //玩家ID，若是空位時，玩家ID = -1
        userinfo.FaceID = 1;
        for(let i = 0; i < userCount; i++){
            allUserInfo[i] = this.GetRandomUser(i);
        }
        this.Reset();
        this.FGSB_GameInfo();
    },
    
    Reset(){
        let self   = this;
        selected   = false;
        someoneBet = false;
        poker      = [];
        for(let i = 0; i < 4; i++){
            poker[i] = [];
            for(let j = 2; j < 14; j++){
                poker[i][j] = true;
            }
        }
        
        for(let k in (allUserInfo)){
            let v = allUserInfo[k];
            
            v.UserCards   = [];  					// 玩家手牌
            v.State       = 1;                       	// 玩家狀態，0:空位，1:正常，2:觀戰
            v.Bet_Base    = 0;                    	// 玩家底注
            v.Bet_Side    = 0;                    	// 玩家平手注
            v.Bet_Double  = 0;                  	// 玩家戰爭階段加注
            v.Winner      = -1;               		// 贏家，-1:發牌前狀態，0:和，1:贏，2:輸
            v.Win_Side    = 0;            	 		// 贏得邊注
            v.Win_Special = 0;         	 		// 贏得特殊牌型
            v.Win_Base    = 0;            	 		// 贏得底注
            v.Win_Double  = 0;           			// 贏得加注
            v.FaceID      = 0;        					// 頭像ID
        }
        
        dealerCards = [];
        round       = round + 1;
        this.FGSB_AllUserInfo();
        Tool.Delay(1, function(){
            self.FGSB_UserBettingStart();
        });
    },
    
    GetCard(){
        let card = null;
        while(true){
            let c = Tool.Random(0, 4);
            let n = Tool.Random(2, 15);
            if(poker[c][n] != null){
                card        = [Color = c, CardNumber = n];
                poker[c][n] = null;
                break;
            }
        }
        return card;
    },
    
    //牌型，0:不成局，1:高牌，2:對子，3:同花，4:順子，5:三條，6:同花順
    Getpattern(cards){
        let pattern = 1;
        
        if(cards[1].CardNumber == cards[2].CardNumber || cards[1].CardNumber == cards[3].CardNumber || cards[2].CardNumber == cards[3].CardNumber){
            pattern = 2;
        }
        
        if(cards[1].Color == cards[2].Color && cards[1].Color == cards[3].Color){
            pattern = 3;
        }
        
        if(cards[2].CardNumber == cards[1].CardNumber + 1 && cards[3].CardNumber == cards[1].CardNumber + 2){
            pattern = 4;
            if(cards[1].Color == cards[2].Color && cards[1].Color == cards[3].Color){
                pattern = 6;
            }
        }
        
        if(cards[1].CardNumber == cards[2].CardNumber && cards[3].CardNumber == cards[1].CardNumber){
            pattern = 5;
        }
        
        if(cards[1].CardNumber == 14 && cards[2].CardNumber == 12 && cards[3].CardNumber == 13){
            pattern = 7;
        }
        
        return pattern;
    },
    
    Receive(packageId, param){
        if(packageId == G.Proto.Game_FGSB.FGSB_Bet){
            this.FGSB_BetResult(param, userinfo.SeatNo);
        } //下注
        if(packageId == G.Proto.Game_FGSB.FGSB_DoubleBet){
            this.FGSB_DoubleBetResult(userinfo, 1);
        } 	//玩家加注
        if(packageId == G.Proto.Game_FGSB.FGSB_FoldCard){
            this.FGSB_DoubleBetResult(userinfo, 0);
        } 	//棄牌
        if(packageId == G.Proto.Game_FGSB.FGSB_SelectSeat){
            this.FGSB_SelectSeat_OK(param);
        } 	//選座位
        
        //動畫完成
        if(packageId == G.Proto.Game_FGSB.FGSB_UserActionCommitID){
            let n = param.ActionName;
            if(n == "stopbet"){
                this.FGSB_Deal();
            }else if(n == "deal"){
                this.FGSB_SideSettlement();
            }else if(n == "sidesettlement"){
                this.FGSB_DoubleBetStart();
            }else if(n == "settlement"){
                this.Reset();
            }
        }
        
        //if(packageId == G.Proto.Game_FGSB.FGSB_StopBettingAnimationOK)	then FGSB_Deal_Normal(param) end
        
    },
    
    //S2C 牌局資訊，於玩家進入牌局或斷線重連時傳送
    FGSB_GameInfo(){
        let param           = [];
        param.GameState     = 6;     		//遊戲狀態 0:等待遊戲開始，1:開始下注，2:發牌，3:邊注結算，4:加注，5:結算
        param.SpecialSheet  = specialSheet;  //特殊牌賠率表
        param.SideSheet     = sideSheet;     //Side 賠率表
        param.Manual        = manual;		//遊戲說明
        param.ChipValue     = chipValue;		//籌碼面額
        param.Bet_Limit     = 500000;       	//底注上限
        param.Bet_SideLimit = 500000;       	//邊注上限
        param.Round         = round;         //局數
        param.TimeRemain    = 6;           	//剩餘時間
        param.UserInfo      = allUserInfo;	//所有玩家資訊
        param.BankerCards   = dealerCards; 	//莊家手牌
        param.SelfInfo      = userinfo; 		//自己資訊
        GameModel.FGSB_GameInfo(param);
    },
    
    //10002 S2C 玩家資訊，當玩家人數或狀態有變動時傳送
    FGSB_AllUserInfo(){
        let param      = [];
        param.UserInfo = allUserInfo; // 所有玩家資訊
        GameModel.FGSB_AllUserInfo(param);
    },
    
    WaitBet(){
        Tool.Delay(Tool.Random(100, 300) / 1000, function(){
            if(canBet){
                BotBet();
            }
        });
    },
    
    BotBet(){
        let user = allUserInfo[Tool.Random(1, 5)];
        if(user.State == 1){
            let type = null;
            if(user.Bet_Base == 0){
                type = 1;
            }else{
                type = Tool.Random(0, 2) == 1 && 1 || 2;
            }
            
            let bet = chipValue[Tool.Random(1, 7)];
            if(type == 1){
                user.Bet_Base = bet;
                this.FGSB_BetResult([BetType = 1, Bet = user.Bet_Base], user.SeatNo);
            }else{
                user.Bet_Side = bet;
                this.FGSB_BetResult([BetType = 2, Bet = user.Bet_Side], user.SeatNo);
            }
        }
        this.WaitBet();
    },
    
    //10003 S2C 玩家開始下注
    FGSB_UserBettingStart(){
        canBet           = true;
        let param        = [];
        param.TimeRemain = betTime;
        param.Round      = round;
        GameModel.FGSB_UserBettingStart(param);
        
        Tool.Delay(param.TimeRemain, function(){
            this.FGSB_StopBettingAnimation();
        });
        
        this.WaitBet();
    },
    
    ////10005 S2C 玩家下注結果
    FGSB_BetResult(receiveMsg, seatNo){
        let result = 0;
        let user   = allUserInfo[seatNo];
        if(user.Money - receiveMsg.Bet >= 0){
            if(receiveMsg.BetType == 1){
                user.Bet_Base = user.Bet_Base + receiveMsg.Bet;
            }else if(receiveMsg.BetType == 2){
                
                user.Bet_Side = user.Bet_Side + receiveMsg.Bet;
            }
            user.Money = user.Money - receiveMsg.Bet;
            someoneBet = true;
            result     = 0;
        }else{
            result = -1;
        }
        
        let param         = [];
        param.SeatNo      = seatNo;			        //下注玩家座位，從 1 開始	
        param.BetType     = receiveMsg.BetType;       //下注類別，0:底注，1:平手注
        param.Bet         = receiveMsg.Bet;       		//下注金額
        param.MoneyRemain = user.Money;     	 	//下注後玩家剩餘金錢
        param.Result      = result;       				//下注結果，0:下注成功，-1:玩家餘額不足，-2:已停止下注，-3:已下過邊注，-4:底注超過上限，-5:邊注小於下限，-6:押注金額<=0
        
        GameModel.FGSB_BetResult(param);
    },
    
    //10006  S2C 播放停止下注動畫
    FGSB_StopBettingAnimation(){
        canBet           = false;
        let param        = [];
        param.ActionName = "stopbet";
        GameModel.FGSB_StopBettingAnimation(param);
    },
    
    //10007 S2C 發牌
    FGSB_Deal(){
        if(someoneBet != null){
            this.Reset();
            return;
        }
        dealerCards.Cards = [];
        
        for(let k in (allUserInfo)){
            let v = allUserInfo[k];
            
            if(v.State == 1 && v.Bet_Base > 0){
                v.UserCards       = [];
                v.UserCards.Cards = [];
                for(let i = 0; i < 3; i++){
                    v.UserCards.Cards[i] = GetCard(); //玩家手牌
                    dealerCards.Cards[i] = [CardNumber = 0, Color = 7];
                }
                v.UserCards.Pattern = this.Getpattern(v.UserCards.Cards);
            }
        }
        
        let param         = [];
        param.UserInfo    = allUserInfo; // 所有玩家資訊
        param.BankerCards = dealerCards;
        param.ActionName  = "deal";
        GameModel.FGSB_Deal(param);
    },
    
    //10008 S2C 邊注、特殊牌型結算
    FGSB_SideSettlement(){
        
        for(let k in (allUserInfo)){
            let v = allUserInfo[k];
            
            if(v.State == 1 && v.Bet_Side > 0 && v.UserCards.Pattern >= 3){
                v.Win_Side    = Tool.Random(100, 100000);            	 		// 贏得邊注
                v.Win_Special = Tool.Random(100, 100000);         	 		// 贏得特殊牌型
            }
        }
        
        let param        = [];
        param.UserInfo   = allUserInfo; // 所有玩家資訊
        param.ActionName = "sidesettlement";
        
        GameModel.FGSB_SideSettlement(param);
    },
    
    // 10009 S2C 玩家開始加注
    FGSB_DoubleBetStart(){
        let param        = [];
        param.TimeRemain = doubleBetTime;  // 剩餘時間
        GameModel.FGSB_DoubleBetStart(param);
        
        for(let k in (allUserInfo)){
            let v = allUserInfo[k];
            
            if(v.State == 1 && v.Bet_Base > 0){
                Tool.Delay(Tool.Random(1000, 4000) / 1000, function(){
                    this.FGSB_DoubleBetResult(v, 1);
                });
            }
        }
        
        Tool.Delay(doubleBetTime, function(){
            if(selected != null){
                this.FGSB_DoubleBetResult(0);
            }
            this.FGSB_Settlement();
        });
    },
    
    //10012 S2C 玩家加注結果
    FGSB_DoubleBetResult(user, result){
        selected = true;
        if(result == 1 && user.Bet_Double <= 0){
            user.Bet_Double = user.Bet_Base;
            user.Money      = user.Money - user.Bet_Double;
        }
        let param         = [];
        param.SeatNo      = user.SeatNo; 		                // 加注玩家座位
        param.MoneyRemain = user.Money; 	                // 加注後玩家剩餘金錢
        param.Result      = result;       		                // 加注結果，1:加注成功 0:棄牌，-1:餘額不足-棄牌
        param.Bet         = user.Bet_Double;						// 加注金額
        GameModel.FGSB_DoubleBetResult(param);
    },
    
    //10013 S2C 總結算
    FGSB_Settlement(){
        
        for(let i = 0; i < 3; i++){
            dealerCards.Cards[i] = this.GetCard();
        }
        let pattern         = this.Getpattern(dealerCards.Cards);
        dealerCards.Pattern = pattern == 1 && 0 || pattern;
        
        for(let k in (allUserInfo)){
            let v = allUserInfo[k];
            
            if(v.UserCards != null && v.UserCards.Cards != null){
                let win = v.UserCards.Pattern >= dealerCards.Pattern;
                if(v.State == 1 && v.Bet_Double > 0){
                    if(v.UserCards.Pattern > dealerCards.Pattern){
                        v.Win_Base = v.Bet_Base * odds[v.UserCards.Pattern];
                        v.Winner   = 1;
                    }else if(v.UserCards.Pattern == dealerCards.Pattern){
                        
                        v.Win_Base = 0;
                        v.Winner   = 0;
                        
                    }else if(v.UserCards.Pattern < dealerCards.Pattern){
                        
                        v.Win_Base = -v.Bet_Base;
                        v.Winner   = 2;
                    }
                }
            }
        }
        
        
        let param         = [];
        param.UserInfo    = allUserInfo; // 所有玩家資訊
        param.BankerCards = dealerCards;  //莊家手牌
        param.ActionName  = "settlement";
        
        GameModel.FGSB_Settlement(param);
    },
    
    //10015 2C 玩家選座位結果
    FGSB_SelectSeat_OK(receiveMsg){
        userinfo.SeatNo = receiveMsg.SeatNo;
        userinfo.State  = 1;
        
        allUserInfo[receiveMsg.SeatNo] = userinfo;
        
        let param    = [];
        param.SeatNo = receiveMsg.SeatNo;
        param.Result = 0;
        GameModel.FGSB_SelectSeat_OK(param);
        this.FGSB_AllUserInfo();
    },
};
module.exports = GameServer;
