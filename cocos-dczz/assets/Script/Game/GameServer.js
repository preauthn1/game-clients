var G           = require("Global");
var gameModel   = require("GameModel");
var userinfo    = [];
var dealerCards = [];
var gameover    = false;
var gamelayer   = require("GameLayer");
//10002 S2C 玩家資訊，當玩家人數或狀態有變動時傳送

var GameServer = {
    extends : cc.Component,
    
    Start(){
        userinfo.Money  = 10000000;                   //玩家金錢
        userinfo.SeatNo = 1;                      	//玩家座位，從 1 開始
        userinfo.State  = 1;                       	//玩家狀態，0:空位，1:正常，2:觀戰
        userinfo.UserID = G.User.GetCurrentUserID();//玩家ID，若是空位時，玩家ID = -1
        
        this.Reset();
        this.DCZZ_GameInfo();
    },
    
    Reset(){
        gameover              = false;
        userinfo.HandCards    = [];
        userinfo.Bet_Base     = 0;                      	//玩家底注
        userinfo.Bet_Side     = 0;                      	//玩家平手注
        userinfo.Bet_Double   = 0;                    	//玩家戰爭階段加注
        userinfo.TotalWinLose = 0;                  	//總輸贏
        userinfo.IsTied       = false;                      //是否跟莊家平手
        userinfo.GetTieAward  = true;                 //玩家是否於一般階段贏得平手賠付
        userinfo.CanEnterWar  = false;                 //可否進入戰爭階段
        userinfo.IsFolded     = false;                    //玩家是否已棄牌
        userinfo.FoldRecover  = 0;                  	//玩家於戰爭階段選擇棄牌收回的注碼
        userinfo.Winner       = false;
        dealerCards           = [];
        
        this.DCZZ_AllUserInfo();
        this.DCZZ_WaitingStart();
    },
    
    GetCard(){
        return [CardNumber = 13, Color = 0];
    },
    
    Receive(packageId, param){
        if(packageId == G.Proto.Game_DCZZ.DCZZ_ShuffleOK){
            this.DCZZ_StartBetting(param);
        }
        if(packageId == G.Proto.Game_DCZZ.DCZZ_Bet){
            this.DCZZ_BetResult(param);
        }
        if(packageId == G.Proto.Game_DCZZ.DCZZ_StopBettingAnimationOK){
            this.DCZZ_Deal_Normal(param);
        }
        if(packageId == G.Proto.Game_DCZZ.DCZZ_DealAnimationOK_Normal){
            this.DCZZ_Settlement_Normal(param);
        }
        if(packageId == G.Proto.Game_DCZZ.DCZZ_Settlement_Normal_OK && gameover != null){
            this.DCZZ_WarPhase(param);
        }
        if(packageId == G.Proto.Game_DCZZ.DCZZ_WarPhaseSelection){
            this.DCZZ_WarPhaseselectionResult(param);
        }
        if(packageId == G.Proto.Game_DCZZ.DCZZ_WarPhaseAnimationOK){
            this.DCZZ_Deal_War(param);
        }
        if(packageId == G.Proto.Game_DCZZ.DCZZ_DealAnimationOK_War){
            this.DCZZ_Settlement_War(param);
        }
        if(packageId == G.Proto.Game_DCZZ.DCZZ_Settlement_War_OK){
            this.DCZZ_GameOver();
        }
    },
    
    DCZZ_GameInfo(){
        let param        = [];
        param.TimeRemain = 6;                      // 剩餘時間
        
        param.PokerManual    = [];// 遊戲說明	
        param.PokerManual[1] = "莊家和每位下注的客人會獲發一張牌，單憑比較莊家和玩家的點數大小分勝負。";
        param.PokerManual[2] = "如果玩家的點數大於莊家，則可獲相等於下注金額的賠彩。";
        param.PokerManual[3] = "由於牌的花色於此遊戲中無效，故當莊家和玩家的點數相同時，玩家可作以下選擇 :";
        param.PokerManual[4] = "投降(Surrender) : 玩家可取回下注金額的一半。";
        param.PokerManual[5] = "進入賭場戰爭(Going to War) : 玩家需額外再加上相等於原注的金額進入賭場戰爭，然後莊荷會消去三張牌，再發牌給客人，及後再消去三張牌，發牌給自己，如果莊家點數較大，玩家會輸掉原注和額外加注。如玩家點數較大，則只會贏取與額外加注相等的金額。如兩者點數再次相同，玩家則可贏取原注與額外加注共兩份的賠彩。";
        
        param.ChipValue      = [];
        param.ChipValue[1]   = 100;// 籌碼面額
        param.ChipValue[2]   = 1000;
        param.ChipValue[3]   = 5000;
        param.ChipValue[4]   = 10000;
        param.ChipValue[5]   = 50000;
        param.ChipValue[6]   = 100000;
        param.ChipValue[7]   = 500000;
        param.AllUserInfo    = [];// 所有玩家資訊
        param.AllUserInfo[1] = userinfo;
        param.DealerCards    = dealerCards;                // 莊家手牌
        param.BetBaseLimit   = 500000;            //底注額上限
        param.BetSideLimit   = 500000;            //平手額上限
        gameModel.DCZZ_GameInfo(param);
    },
    
    DCZZ_AllUserInfo(){
        let param            = [];
        param.AllUserInfo    = [];// 所有玩家資訊
        param.AllUserInfo[1] = userinfo;
        gameModel.DCZZ_AllUserInfo(param);
    },
    
    DCZZ_WaitingStart(){	 //// S2C 等待遊戲開始，此階段玩家可自由進出遊戲
        let param        = [];
        param.TimeRemain = 6;
        gameModel.DCZZ_WaitingStart(param);
        let self = this;
        gamelayer.Delay(param.TimeRemain, function(){
            self.DCZZ_Shuffle();
        });
    },
    
    //10004 S2C 洗牌
    DCZZ_Shuffle(){
        gameModel.DCZZ_Shuffle();
    },
    
    ////10006 S2C 開始下注
    DCZZ_StartBetting(){
        let param        = [];
        param.TimeRemain = 10;
        gameModel.DCZZ_StartBetting(param);
        let data = [BetType = 0, Bet = 100];
        this.DCZZ_BetResult(data);
        let self = this;
        gamelayer.Delay(param.TimeRemain, function(){
            self.DCZZ_StopBetting();
        });
    },
    
    DCZZ_BetResult(receiveMsg){	 ////10008 S2C 玩家下注結果
        userinfo.Money = userinfo.Money - receiveMsg.Bet;
        if(receiveMsg.BetType == 0){
            userinfo.Bet_Base = userinfo.Bet_Base + receiveMsg.Bet;
        }else{
            userinfo.Bet_Side = userinfo.Bet_Side + receiveMsg.Bet;
        }
        let param         = [];
        param.SeatNo      = 1;					//下注玩家座位，從 1 開始	
        param.BetType     = receiveMsg.BetType;       	//下注類別，0:底注，1:平手注
        param.Bet         = receiveMsg.Bet;       		//下注金額
        param.MoneyRemain = userinfo.Money;     	 //下注後玩家剩餘金錢
        param.Result      = 0;       	//下注結果，0:成功，-1:失敗，-2:餘額不足，-3:已停止下注，-4:總押注額超過上限，-5:押注金額<=0
        
        gameModel.DCZZ_BetResult(param);
    },
    
    DCZZ_StopBetting(){	 //10009 S2C 玩家停止下注
        gameModel.DCZZ_StopBetting();
    },
    
    DCZZ_Deal_Normal(){	 // 10011 S2C 一般發牌
        let param                         = [];
        param.AllUserInfo                 = [];// 所有玩家資訊
        param.AllUserInfo[1]              = userinfo;
        param.AllUserInfo[1].HandCards    = [];
        param.AllUserInfo[1].HandCards[1] = this.GetCard();           		//玩家手牌
        dealerCards[1]                    = this.GetCard();
        
        param.DealerCards = dealerCards;
        gameModel.DCZZ_Deal_Normal(param);
    },
    
    // 10013 S2C 一般結算
    DCZZ_Settlement_Normal(){
        let userNumber   = userinfo.HandCards[1].CardNumber == 1 && 14 || userinfo.HandCards[1].CardNumber;
        let dealerNumber = dealerCards[1].CardNumber == 1 && 14 || dealerCards[1].CardNumber;
        if(userNumber != dealerNumber){
            if(userNumber > dealerNumber){
                userinfo.TotalWinLose = (userinfo.Bet_Base * 2) - userinfo.Bet_Side;
                userinfo.Money        = userinfo.Money + userinfo.TotalWinLose;
                userinfo.Winner       = 1;
            }else if(userNumber < dealerNumber){
                
                userinfo.TotalWinLose = -(userinfo.Bet_Base + userinfo.Bet_Side);
                userinfo.Winner       = 0;
            }
            gameover = true;
            let self = this;
            gamelayer.Delay(6, function(){ self.DCZZ_GameOver(); });
        }else if(userNumber == dealerNumber){
            
            userinfo.CanEnterWar = true;
            userinfo.IsTied      = true;
            userinfo.Money       = userinfo.Money + userinfo.Bet_Side * 10;
        }
        
        let param            = [];
        param.AllUserInfo    = [];// 所有玩家資訊
        param.AllUserInfo[1] = userinfo;
        gameModel.DCZZ_Settlement_Normal(param);
    },
    
    // 10015 S2C 進入戰爭階段，符合資格玩家選擇是否要進入
    DCZZ_WarPhase(){
        let param            = [];
        param.AllUserInfo    = [];// 所有玩家資訊
        param.AllUserInfo[1] = userinfo;
        param.TimeRemain     = 8;
        gameModel.DCZZ_WarPhase(param);
    },
    
    // 10017  S2C 戰爭階段選擇結果
    DCZZ_WarPhaseselectionResult(receiveMsg){
        let param       = [];
        param.SeatNo    = 1;
        param.Selection = receiveMsg.Selection;
        gameModel.DCZZ_WarPhaseselectionResult(param);
        
        if(receiveMsg.Selection == 0){
            gamelayer.Delay(6, function(){ this.DCZZ_GameOver(); });
        }else{
            userinfo.Bet_Double = userinfo.Bet_Base;
            this.DCZZ_WarPhaseBegin();
        }
    },
    
    // 10018 S2C 開始戰爭階段
    DCZZ_WarPhaseBegin(){
        gameModel.DCZZ_WarPhaseBegin();
    },
    
    //10020 S2C 戰爭階段發牌
    DCZZ_Deal_War(){
        userinfo.HandCards[2]            = [];
        userinfo.HandCards[2].CardNumber = 17;
        userinfo.HandCards[2].Color      = 4;
        userinfo.HandCards[3]            = [];
        userinfo.HandCards[3].CardNumber = 17;
        userinfo.HandCards[3].Color      = 4;
        userinfo.HandCards[4]            = [];
        userinfo.HandCards[4].CardNumber = 17;
        userinfo.HandCards[4].Color      = 4;
        userinfo.HandCards[5]            = this.GetCard();
        
        dealerCards[2]            = [];
        dealerCards[2].CardNumber = 17;
        dealerCards[2].Color      = 4;
        dealerCards[3]            = [];
        dealerCards[3].CardNumber = 17;
        dealerCards[3].Color      = 4;
        dealerCards[4]            = [];
        dealerCards[4].CardNumber = 17;
        dealerCards[4].Color      = 4;
        dealerCards[5]            = this.GetCard();
        
        let param            = [];
        param.AllUserInfo    = [];// 所有玩家資訊
        param.AllUserInfo[1] = userinfo;
        param.DealerCards    = dealerCards;
        gameModel.DCZZ_Deal_War(param);
    },
    
    //10022 S2C 戰爭階段結算
    DCZZ_Settlement_War(){
        let userNumber   = userinfo.HandCards[5].CardNumber == 1 && 14 || userinfo.HandCards[5].CardNumber;
        let dealerNumber = dealerCards[5].CardNumber == 1 && 14 || dealerCards[5].CardNumber;
        if(userNumber > dealerNumber){
            userinfo.Winner       = 1;
            userinfo.TotalWinLose = userinfo.Bet_Base + (userinfo.Bet_Double * 2);
            userinfo.Money        = userinfo.Money + userinfo.TotalWinLose;
        }else if(userNumber < dealerNumber){
            userinfo.Winner       = 0;
            userinfo.TotalWinLose = -(userinfo.Bet_Base + userinfo.Bet_Double);
        }else if(userNumber == dealerNumber){
            userinfo.Winner       = 1;
            userinfo.TotalWinLose = (userinfo.Bet_Base + userinfo.Bet_Double) * 2;
            userinfo.Money        = userinfo.Money + userinfo.TotalWinLose;
        }
        let param            = [];
        param.AllUserInfo    = []; // 所有玩家資訊              
        param.AllUserInfo[1] = userinfo;
        gameModel.DCZZ_Settlement_War(param);
    },
    
    //10024  S2C 本局結束
    DCZZ_GameOver(){
        gameModel.DCZZ_GameOver();
        let self = this;
        gamelayer.Delay(3, function(){ self.Reset(); });
    },
    
    
};

module.exports = GameServer;
