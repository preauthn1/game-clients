var G = require( "Global")
var GameG = require("GameGlobal")
var GameConfig = require("GameConfig")
var GameModel = require("GameModel")
var userinfo = []
var dealerCards = []
var gameover = false

var GameServer = {
	extends: cc.Component,

	Start(){
		userinfo.Money = 100000;                   	//玩家金錢
		userinfo.SeatNo = 1;                      	//玩家座位，從 1 開始
		userinfo.UserID = GameConfig.getUserID();//玩家ID，若是空位時，玩家ID = -1
		this.Reset()
		this.GameInfo()
	},

	Reset(){
		gameover = false
		userinfo.UserCards = [];  					// 玩家手牌
		userinfo.State = 1;                       	//玩家狀態，0:空位，1:正常，2:觀戰
		userinfo.Bet_Base = 0;                    	// 玩家底注
		userinfo.Bet_Side = 0;                    	// 玩家平手注
		userinfo.Bet_Double = 0;                  	// 玩家戰爭階段加注
		userinfo.GetJackpot = false;            	// 玩家是否中 Jackpot
		userinfo.JPMoney = 0;               		// 玩家所中 Jackpot 金額
		userinfo.WinLoseMoney = 0;         			// 玩家本次輸贏金錢，若值為負數，則為玩家輸掉的金額
		userinfo.TotalWinLose = 0;         			// 玩家總輸贏金錢
		userinfo.Winner = -1;               		// 贏家，-1:發牌前狀態，0:和，1:贏，2:輸
		userinfo.MaxBetBase = 500000;           	// 可以下的最大底注值
		userinfo.ZhuangBet_Side = 0	;       		// 玩家莊家邊注
		userinfo.ZhuangGetJackpot = false;     		// 玩家是否中 莊家Jackpot
		userinfo.ZhuangJPMoney = 0;        			// 玩家所中 莊家Jackpot 金額
		userinfo.FaceID = 0;        				// 頭像ID
		userinfo.BetBaseWinLoseMoney = 0;       	// 底注_玩家本次輸贏金錢，若值為負數，則為玩家輸掉的金額
		userinfo.BetDoubleWinLoseMoney = 0;     	// 加注_玩家本次輸贏金錢，若值為負數，則為玩家輸掉的金額
	
		dealerCards = []
		
		this.AllUserInfo()	
		this.WaitingStart()
	},

	Delay (time,fun){
		GameG.NewDelayOnce(function(){
			if(fun != null ){ 
				fun()
			}			
		}, time)
	},

	GetCard (){
		let card = {}
		card.CardNumber = GameG.RandomInt(0,13)
		card.Color = GameG.RandomInt(0,3)
		return card
	},

	Receive(packageId, param){
		//開始下注動畫播放完成
		if(packageId == G.Proto.Game_JLBPK.StartBettingAnimationOK){

		}
		//玩家下注結果	
		if(packageId == G.Proto.Game_JLBPK.Bet){
			this.BetResult(param)
		}
		//停止下注動畫播放完成	
		if(packageId == G.Proto.Game_JLBPK.StopBettingAnimationOK){
			this.Deal()
		}
		//發牌動畫播放完成
		if(packageId == G.Proto.Game_JLBPK.DealOk){
			this.DoubleBetStart()
		}
		//玩家加注
		if(packageId == G.Proto.Game_JLBPK.DoubleBet){
			this.DoubleBetResult()
		}
		//玩家棄牌
		if(packageId == G.Proto.Game_JLBPK.FoldCard){
			this.UserFoldCard()
		}
		//總結算OK  
		if(packageId == G.Proto.Game_JLBPK.SettlementOK){
			this.Reset()
		}
		//if(packageId == G.Proto.Game_JLBPK.JLBPK_StopBettingAnimationOK)	then JLBPK_Deal_Normal(param) end
		
	},

	//S2C 牌局資訊，於玩家進入牌局或斷線重連時傳送
	GameInfo(){	
		let param = {}
		param.GameState = 0;               	// 遊戲狀態，0:等待遊戲開始，1:開始下注，2:發牌，3:加注，4:邊注結算，5:底注結算，6:加注結算
	    param.JPSheet = 2;                	// Jackpot 賠率表
		param.SpecialSheet = 3;           	// 特殊牌賠率表
		param.PokerManual = [] 				//遊戲說明
		param.PokerManual[1] = "莊家和每位下注的客人會獲發一張牌，單憑比較莊家和玩家的點數大小分勝負。"
		param.PokerManual[2] = "如果玩家的點數大於莊家，則可獲相等於下注金額的賠彩。"
		param.PokerManual[3] = "由於牌的花色於此遊戲中無效，故當莊家和玩家的點數相同時，玩家可作以下選擇 :"
		param.PokerManual[4] = "投降(Surrender) : 玩家可取回下注金額的一半。"
		param.PokerManual[5] = "進入賭場戰爭(Going to War) : 玩家需額外再加上相等於原注的金額進入賭場戰爭，然後莊荷會消去三張牌，再發牌給客人，及後再消去三張牌，發牌給自己，如果莊家點數較大，玩家會輸掉原注和額外加注。如玩家點數較大，則只會贏取與額外加注相等的金額。如兩者點數再次相同，玩家則可贏取原注與額外加注共兩份的賠彩。"
	    param.JPMoney = 1000000;            // Jackpot 金額
	    param.TimeRemain = 6;              	// 剩餘時間
		param.UserInfo = [] 				// 所有玩家資訊
		param.UserInfo[0] = userinfo
		param.ChipValue = []	
		param.ChipValue[0] = 100 			// 籌碼面額
	    param.ChipValue[1] = 1000
	    param.ChipValue[2] = 5000
	    param.ChipValue[3] = 10000
	    param.ChipValue[4] = 50000
		param.ChipValue[5] = 100000     
		param.ChipValue[6] = 500000   
	    param.Bet_Side = 0
		param.BankerCards = dealerCards;  	// 莊家手牌
		GameModel.GameInfo(param)
	},

	//10002 S2C 玩家資訊，當玩家人數或狀態有變動時傳送
	AllUserInfo(){	
		let param = {}
		param.UserInfo = [] // 所有玩家資訊
		param.UserInfo[0] = userinfo
		GameModel.AllUserInfo(param)
	},

	//10003 S2C 等待遊戲開始，此階段玩家可自由進出遊戲
	WaitingStart(){	 
		let param = {}
		param.TimeRemain = 2;       
		GameModel.WaitingStart(param)
		
		let self = this
		this.Delay(param.TimeRemain,function(){ 
			self.StartBettingAnimation()
			self.UserBettingStart()
		})
	},

	//10004 S2C 遊戲開始，播放開始下注動畫
	StartBettingAnimation(){	 
		GameModel.StartBettingAnimation()
	},

	//10006 S2C 玩家開始下注
	UserBettingStart(){	 
		let param = {}
		param.TimeRemain = 10;       
		GameModel.UserBettingStart(param)
		
		let self = this
		this.Delay(0.1,function(){ 
			self.BetResult([SeatNo=1,BetType=0,Bet=100,MoneyRemain=userinfo.Money,Result=0])
		})
		
		this.Delay(param.TimeRemain,function(){ 
			self.StopBettingAnimation()
		})
	},

	////10008 S2C 玩家下注結果
	BetResult(receiveMsg){	 
		userinfo.Money = userinfo.Money - receiveMsg.Bet
		if(receiveMsg.BetType == 0 ){
			userinfo.Bet_Base = userinfo.Bet_Base + receiveMsg.Bet
		} 
		else if( receiveMsg.BetType == 1 ){
			userinfo.Bet_Side = userinfo.Bet_Side + receiveMsg.Bet
		} 
		else if( receiveMsg.BetType == 2 ){
			userinfo.ZhuangBet_Side = userinfo.ZhuangBet_Side + receiveMsg.Bet
		}
		
		let param 			= {}
		param.SeatNo 		= 1;					//下注玩家座位，從 1 開始	
		param.BetType 		= receiveMsg.BetType;   //下注類別，0:底注，1:平手注
		param.Bet 			= receiveMsg.Bet;       //下注金額
		param.MoneyRemain 	= userinfo.Money;     	//下注後玩家剩餘金錢
		param.Result 		= 0;       				//下注結果，0:下注成功，-1:玩家餘額不足，-2:已停止下注，-3:已下過邊注，-4:底注超過上限，-5:邊注小於下限，-6:押注金額<=0
	
		// if userinfo.Money <= 0 then 
		// 	param.Result = -1 
		// end
		GameModel.BetResult(param)
	},

	//10009 S2C 玩家停止下注
	StopBettingAnimation(){
		GameModel.StopBettingAnimation()
	},

	// 10011  S2C 發牌
	Deal(){
		let param = {}
		param.UserInfo = [] // 所有玩家資訊
		param.UserInfo.push(userinfo)
		param.UserInfo[0].UserCards = {}         
		param.UserInfo[0].UserCards.Cards = []       
		dealerCards.Cards = []
	
		for(let i = 0;  i < 5; ++i){ 
			param.UserInfo[0].UserCards.Cards[i] = GetCard() //玩家手牌
			dealerCards.Cards.push(GetCard())
		}
	
		param.BankerCards = dealerCards
		GameModel.Deal(param)
	},

 	// 10013 S2C 玩家開始加注
	DoubleBetStart(){	
		let param = {}
		param.TimeRemain = 6  // 剩餘時間
		GameModel.DoubleBetStart(param)
	},

 	// 10015 S2C 玩家加注結果
	DoubleBetResult(){	
		let param = {}
		userinfo.Money = userinfo.Money - (userinfo.Bet_Base * 2)
		param.SeatNo = 1 					// 加注玩家座位
	    param.MoneyRemain = userinfo.Money 	// 加注後玩家剩餘金錢
	    param.Result = 0;       			//加注結果，0:加注成功，-1:餘額不足-棄牌
		param.Bet = userinfo.Bet_Base * 2
		GameModel.DoubleBetResult(param)
		
		let self = this
		this.Delay(2,function(){ 
			self.Settlement()
		})
	},

 	// 10017 S2C 傳送玩家棄牌訊息，玩家於加注倒數時間結束時仍未加注，亦傳送此協定強制棄牌
	UserFoldCard(){
		userinfo.State = 3	
		let param = {}
		param.SeatNo = 1 // 棄牌玩家座位
		GameModel.UserFoldCard(param)
		
		let self = this
		this.Delay(2,function(){ 
			self.Settlement()
		})
	},

	// 10025 S2C 總結算
	Settlement(){	
		userinfo.BetBaseWinLoseMoney = GameG.RandomInt(100,500000)
		userinfo.BetDoubleWinLoseMoney = userinfo.BetBaseWinLoseMoney * 2
		userinfo.UserCards.Pattern = GameG.RandomInt(0,9)
		userinfo.Winner = 2// GameG.RandomInt(-1,1)
		dealerCards.Pattern = GameG.RandomInt(-1,10)
	
		//玩家JP
		userinfo.GetJackpot = true//GameG.RandomInt(0,2) == 1
		userinfo.JPMoney = 49000//GameG.RandomInt(100,50000)
		//莊JP
		userinfo.ZhuangGetJackpot = false//GameG.RandomInt(0,2) == 1
		userinfo.ZhuangJPMoney = 49000//GameG.RandomInt(100,50000)
	
		userinfo.TotalWinLose = GameG.RandomInt(-50000,50000)
	
		let param = {}
		param.UserInfo = [] // 所有玩家資訊
		param.UserInfo.push(userinfo)
	    param.BankerCards = dealerCards;  //莊家手牌
		GameModel.Settlement(param)
	},
};

module.exports = GameServer
