var G = require( "Global")
var GameG = require("GameGlobal")
var GameModel = require("GameModel")
var Tool = require("Tool")
var betTime = 600
var userCount = 8
var manual = ["轉","2"]
var chipValue = [100,500,1000,5000,10000,50000,100000]
var allUserInfo = []
var userinfo = []
var gameState = 0

var GameServer = {
	extends: cc.Component,

	GetNullUser(seatNo){
		return [
			UserID = -1,
			State = 0,
			SeatNo = seatNo,
			FaceID = 0  ,
			Money = 0,
			Winner = -1,
			WinLoseMoney = 0,
			TotalWinLose = 0,
		]
	},

	GetRandomUser(seatNo){
		return [
			UserID = Tool.Random(11111111,99999999),
			State = 1,
			SeatNo = seatNo,
			FaceID = Tool.Random(1,17),
			Money = Tool.Random(1,5000)*100,
			Winner = -1,
			WinLoseMoney = 0,
			TotalWinLose = 0,
		]
	},

	Start(){
		for(let  i  =  2;  i  <= userCount; ++ i ){
			allUserInfo[i] = GetRandomUser(i)
		}
		allUserInfo[1] = [
			UserID = G.User.GetCurrentUserID(),
			State = 1,
			SeatNo = 1,
			FaceID = 1,
			Money = 1000000000,
			Winner = 0,
			WinLoseMoney = 0,
			TotalWinLose = 0,
		]
		HLJBP_GameInfo()
		Tool.Delay(3,function (){
			Reset()
		})
	},

	Reset(){
		for(let _ in (allUserInfo)){ 
			let v = allUserInfo[_] 

			v.Winner = -1
			v.WinLoseMoney = 0
		}
	
		HLJBP_AllUserInfo()
		HLJBP_UserBettingStart ()
	},

	Receive(packageId, param){
		 if(packageId == G.Proto.Game_HLJBP.HLJBP_Bet 	){ HLJBP_BetResult(allUserInfo[1].SeatNo,param.Bet) } 	  				//下注
	
	// //動畫完成
	// if packageId == G.Proto.Game_HLJBP.HLJBP_UserActionCommitID then 
	// 	local n = param.ActionName
	// 	if n == "stopbet" then
	// 		HLJBP_Deal()
	// 	elseif n == "deal" then
	// 		HLJBP_SideSettlement()
	// 	elseif n == "sidesettlement" then
	// 		HLJBP_DoubleBetStart()
	// 	elseif n == "settlement" then
	// 		Reset()
	// 	end
	// end 	  				
		
	//if(packageId == G.Proto.Game_HLJBP.HLJBP_StopBettingAnimationOK)	then HLJBP_Deal_Normal(param) end
		
	},

//S2C 牌局資訊，於玩家進入牌局或斷線重連時傳送
	HLJBP_GameInfo(){
		let param = []
		param.Manual = manual                // 遊戲說明
	    param.ChipValue = chipValue              // 籌碼面額
	    param.Bet_Limit = 500000000;              // 押注上限
	    param.GameState = 0;  			// 遊戲狀態 0:等待遊戲開始，1:開始下注，2:結算，3:遊戲結束
	    param.TimeRemain = 6; 				//剩餘時間
	    param.UserInfo = allUserInfo;  				//所有玩家資訊
	    param.SelfInfo = userinfo;  				//自己資訊
		param.LuckyNumber = 8023;            //場上開出數字
		GameModel.HLJBP_GameInfo(param)
	},

// HLJBP_AllUserInfo = 10002;                // S2C 玩家資訊，當玩家人數或狀態有變動時傳送
	HLJBP_AllUserInfo(){
		let param = []
		param.UserInfo = allUserInfo;  				//所有玩家資訊
		GameModel.HLJBP_AllUserInfo(param)
	},

	RandomBet(  ){
		if(gameState != 1 ){ return }
		let time = Tool.Random(10,50) / 100
		Tool.Delay(time,function (  ){
			BotBet(  )
		})
	},

	BotBet(  ){
		let seat = Tool.Random(2,9)
		let bet = chipValue[Tool.Random(0,chipValue.length)]
		HLJBP_BetResult (seat,bet)
		RandomBet(  )
	},

// HLJBP_UserBettingStart = 10003;           // S2C 玩家開始下注
	HLJBP_UserBettingStart (){
		gameState = 1
		let param = []
		param.TimeRemain = betTime
		GameModel.HLJBP_UserBettingStart(param)
	
		RandomBet(  )
		RandomBet(  )
		RandomBet(  )
		Tool.Delay(betTime,function (){
			HLJBP_Settlement ()
		})
	},

// HLJBP_BetResult = 10005;                  // S2C 玩家下注結果
	HLJBP_BetResult (seat,money){
		let user = allUserInfo[seat]
		let result = 0
		if(user.Money - money >= 0 ){
			user.Money = user.Money - money
		} 
		else{
			result = -1
		}
		
		let param = []
	    param.SeatNo = seat
	    param.Bet = money
	    param.MoneyRemain = user.Money
		param.Result = result      // // 下注結果，0:下注成功，-1:玩家餘額不足，-2:已停止下注，-3:底注超過上限，-4:押注金額<=0，-5:壓注失敗
		
		GameModel.HLJBP_BetResult(param)
	
	},

// HLJBP_Settlement = 10006;         // S2C 總結算
	HLJBP_Settlement (){
		let user = allUserInfo[Tool.Random(1,allUserInfo.length)]
		user.WinLoseMoney = Tool.Random(1,500) * 100
		user.Winner = 1
		user.Money = user.Money + user.WinLoseMoney
		gameState = 2
		let param = []
	    param.IsSettlement = 1;            				//是否結算
	    param.LuckyNumber = Tool.Random(1111,9999);     //場上開出數字
	    param.UserInfo = allUserInfo  					//所有玩家資訊
		param.ActionName = "Settlement"  				//動畫名稱
		GameModel.HLJBP_Settlement(param)
	
		Tool.Delay(20,function (){
			Reset()
		})
	},


};

module.exports = GameServer
