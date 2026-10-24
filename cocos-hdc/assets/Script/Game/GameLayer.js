var GameG = require("GameGlobal")
var GameConfig = require("GameConfig")
var GameManager = require("GameManager")
var root = null
var uiDealer = null
var uiUser = null
var uiChip = null
var uiMain = null
var gameModel = null
var seatNo = null
var userCount = 7
var users = []
var sequenceArray = []
var canUpdateJpMoney = true
var jpMoney = 0
var userCardsPattern = null

var GameLayer = {
	extends: cc.Component,

	Init(){
		root		= cc.find("Canvas/GameLayer")
		uiChip		= new (require("UIChip"))(cc.find("UIChip", root))
		uiDealer 	= new (require("UIDealer"))(cc.find("UIDealer", root))
		uiMain 		= new (require("UIMain"))(cc.find("UIMain", root))
		uiUser		= require("UIUser")
		gameModel 	= require("GameModel")

		uiUser.Init()
		sequenceArray = []
		users = []
		canUpdateJpMoney = true
		jpMoney = 0
	
		for(let i = 1;  i <=  userCount; ++ i){
			users[i] = uiUser.Create(cc.find("UIUser/User"+i,root))
		}
	},

	GetSequence(node){
		let sequence = GameG.NewTween(node)
		sequenceArray.push(sequence)
		return sequence
	},

	RemoveAllSequence(){
		for(let k in sequenceArray){ 
			let v = sequenceArray[k]
			v.stop()
		}
	},

	Delay(time,fun){
		GameG.NewDelayOnce(function(){
			if(fun != null ){ 
				fun()
			}			
		}, time)
	},

	MoneyText(money){
		let betMoneyText = money / 100
		if(betMoneyText % 1 == 0 ){
			betMoneyText = Math.ceil(betMoneyText)
		}
		return betMoneyText
	},

	SwitchAmplificationCardWindow(){
		uiMain.SwitchAmplificationCardWindow()
	},

	CloseAmplificationCardWindow(){
		uiMain.CloseAmplificationCardWindow()
	},

	UpdateBaseBetTotal(){
		let betTotal = users[seatNo].GetBetTotal(0)
		uiChip.SetBaseBet(betTotal)
	},

	onDestroy(){
		this.RemoveAllSequence()
	},

	CreateBet(data){
		for(let k in data.UserInfo){ 
			let v = data.UserInfo[k] 
			if ((v.State == 1 || v.State == 3) && v.Bet_Base > 0) {
				users[v.SeatNo].Bet(v.Bet_Base, 0, null, 0)
				users[v.SeatNo].Bet(v.Bet_Double, 3, null, 0)
				if(v.SeatNo == seatNo ){ 
					users[v.SeatNo].Bet(v.Bet_Side, 1, null, 0)
					users[v.SeatNo].Bet(v.ZhuangBet_Side, 2, null, 0)
				}
			}
		}
	},

	CreateCard(data){
		let sequence = null
		for(let k in data.UserInfo){ 
			let v = data.UserInfo[k] 
			if ((v.State == 1 || v.State == 3) && v.UserCards.Cards != null && v.UserCards.Cards.length > 0) {
				if (sequence == null)
					sequence = this.GetSequence(root)

				let user = users[v.SeatNo]
				for(let cardIndex in v.UserCards.Cards){ 
					let cardInfo = v.UserCards.Cards[cardIndex] 
					user.Deal(cardIndex, cardInfo, sequence, 0)
				}
				if(v.SeatNo == seatNo ){
					uiMain.SetAmplificationCard(v.UserCards.Cards,v.UserCards.Pattern)
				}
			}
		}
	
		if(data.BankerCards.Cards != null && data.BankerCards.Cards.length > 0 ){
			if (sequence == null)
				sequence = this.GetSequence(root)

			for(let k in (data.BankerCards.Cards)){ 
				let v = data.BankerCards.Cards[k] 
				uiDealer.Deal(k, v, sequence, 0)
			}
		}
		if (sequence != null)
			sequence.start()
	},

	//設置玩家金額
	SetUserMoney(seat,money){
		users[seat].SetMoney (money)
		if(seat == seatNo ){ 
			uiMain.SetUserMoney(money)
			uiChip.SetUserMoney(money)
		}
	},

	//10001 S2C 牌局資訊，於玩家進入牌局或斷線重連時傳送
	GameInfo(data){
		this.AllUserInfo(data)
		uiChip.CreateChip(data.ChipValue)
		uiUser.SetChipData(data.ChipValue)
		uiUser.SetSideBet (data.Bet_Side)
		this.UpdateJackpot(data)
		this.Reconnect(data)
	},

	Reconnect(data){
		if(data.GameState == 7 && data.TimeRemain < 5 ){
			return
		}
	
		//斷線重連
		this.CreateBet(data)
		this.CreateCard(data)
	
		//1:開始下注，2:發牌，3:加注，4:邊注結算，5:底注結算，6:加注結算
		//1:開始下注
		if (data.GameState == 1){
			this.UserBettingStart(data)
		}
		//2:發牌
		else if (data.GameState == 2){
			for(let k in data.UserInfo){ 
				let v = data.UserInfo[k] 
				if(v.State == 1 && v.SeatNo == seatNo ){ 
					users[v.SeatNo].ShowPattern(v.UserCards.Pattern)
				}						
			}
		} 		
		//3:加注
		else if (data.GameState == 3){
			canUpdateJpMoney = false
			for(let k in data.UserInfo){ 
				let v = data.UserInfo[k] 
				if(v.State == 1 && v.SeatNo == seatNo && v.Bet_Double <= 0 ){ 
					this.DoubleBetStart(data)
				}
				if(v.State == 1 && v.SeatNo == seatNo ){ 
					users[v.SeatNo].ShowPattern(v.UserCards.Pattern)
				}						
			}
		} 
		//7:結算
		else if( data.GameState == 7 ){
			for(let k in data.UserInfo){ 
				let v = data.UserInfo[k] 
				if(v.State == 1 ){
					users[v.SeatNo].ShowPattern(v.UserCards.Pattern)
				}
			}
			uiDealer.ShowPattern(data.BankerCards.Pattern)
			this.GiveMoney(data)
		}
	
		if(data.GameState >= 4){
			GameManager.calLoadTime()
		}	

		for(let k in (data.UserInfo)){ 
			let v = data.UserInfo[k] 
			if (v.State == 3){
				users[v.SeatNo].SetActiveAbandonImage(true)
			}
		}
	
		this.UpdateBaseBetTotal()
	},

	// 10002 S2C 玩家資訊，當玩家人數或狀態有變動時傳送
	AllUserInfo(data){ 
		for(let k in data.UserInfo){ 
			let v = data.UserInfo[k] 
			users[v.SeatNo].SetUser(v)	
			if (v.UserID == GameConfig.getUserID()){
				seatNo = v.SeatNo
				this.SetUserMoney(v.SeatNo,v.Money)
				uiMain.SetUserInfo(v.UserID,v.Money,v.FaceID)
			}
		}
	},

	//等待遊戲開始，此階段玩家可自由進出遊戲
	WaitingStart(data){ 
		uiMain.StartCountdown(data.Time,function(){ 
			uiMain.SetWaitStart(false)
		})
		uiMain.SetWaitStart(true)
	},

	//10004 S2C 遊戲開始，播放開始下注動畫
	StartBettingAnimation(data){ 
		GameG.PlayGameSound("BetBegin")
		let self = this
		uiMain.PlayStartBetAnimation(function(){ 
			self.StartBettingAnimationOK()
		})
	},

	//10005 C2S 開始下注動畫播放完成
	StartBettingAnimationOK(){	 
		gameModel.StartBettingAnimationOK()
	},

	//下注池開關
	SetActiveBetPool(value){
		if (users[seatNo].GetState() == 1){ 
			for(let k in (users)){ 
				let v = users[k] 
				v.SetActivePleaseBetImage(value)
			}
			for (let i = 0;  i <= 2; ++i){ 
				users[seatNo].SetBetPoolActive(i,value)
			}
			uiChip.SetChipsActive(value)
			this.UpdateBaseBetTotal()
		}
	},

	//10006 S2C 開始下注
	UserBettingStart(data){ 
		this.SetActiveBetPool(true)
		let self = this
		uiMain.StartCountdown(data.TimeRemain,function(){ 
			self.SetActiveBetPool(false)
		})
	},

	//10007 C2S 玩家下注
	Bet(type){ 
		let data = []
		data.BetType = type
		if (type == 1 || type == 2){
			data.Bet = uiUser.GetSideBetMoney()
		} 
		else{
			data.Bet = uiChip.GetChooseChipMoney()
		}
		if (data.Bet <= 0){
			return
		}
		gameModel.Bet(data) 
	},

	//10008 S2C 玩家下注結果
	BetResult (data){ 
		if (data.Result == 0){
			let own = data.SeatNo == seatNo
			let bet = data.Bet
			let type = data.BetType
			let startNode = null
			if (own == true){
				startNode = uiChip.GetChooseChip(bet)
			}
			else{
				startNode = users[data.SeatNo].GetRoot()
			}

			//不顯示其他玩家下注彩金
			if (type == 0 || own){
				users[data.SeatNo].Bet(bet, type, startNode)
				this.UpdateBaseBetTotal()
			}
			this.SetUserMoney(data.SeatNo, data.MoneyRemain)
		} 
		else if (data.Result == -1){
			uiMain.ShowMessage("余额不足")
		} 
		else if (data.Result == -2){
			uiMain.ShowMessage("已停止下注")
		} 
		else if (data.Result == -3){
			uiMain.ShowMessage("已下过边注")
		} 
		else if (data.Result == -4){
			uiMain.ShowMessage("总压注额超过上限")
		} 
		else if (data.Result == -5){
			uiMain.ShowMessage("边注小于下限")
		} 
		else if (data.Result == -6){
			uiMain.ShowMessage("压注金额低于1")
		}
	},

	//10009 S2C 播放停止下注動畫
	StopBettingAnimation(){
		GameG.PlayGameSound("BetEnd")
		this.SetActiveBetPool(false)
		let self = this
		uiMain.PlayStopBetAnimation(function(){ 
			self.StopBettingAnimationOK()
		})
	},

	// 10010 C2S 玩家停止下注動畫播放完成
	StopBettingAnimationOK(){
		gameModel.StopBettingAnimationOK()
	},

	// 10011 S2C 發牌
	Deal(data){
		let self = this
		let sequence = this.GetSequence(root)
		//玩家發牌
		for(let k in data.UserInfo){ 
			let v = data.UserInfo[k] 
			if (v.State == 1 && v.UserCards != null && v.UserCards.Cards.length > 0){
				sequence.call(function(){
					GameG.PlayGameSound("deal")
				})
				for (let i = 0;  i < 5; ++i){
					users[v.SeatNo].Deal(i, v.UserCards.Cards[i], sequence) 
				}
	
				if (v.SeatNo == seatNo){
					uiMain.SetAmplificationCard(v.UserCards.Cards,v.UserCards.Pattern)
					userCardsPattern = v.UserCards.Pattern
					sequence.delay(0.5)
					sequence.call(function(){
						users[v.SeatNo].ShowPattern(v.UserCards.Pattern)
					})
				}
			}
		}
		sequence.call(function(){
			GameG.PlayGameSound("deal")
		})
		//莊家發牌
		for (let i = 0;  i < 5; ++i){
			uiDealer.Deal(i, data.BankerCards.Cards[i], sequence) 
		}
		sequence.delay(1)
		sequence.call(function(){ 
			self.DealOk()
		})
		sequence.start()
	},

	//10012 C2S 發牌動畫播放完成
	DealOk(){
		gameModel.DealOk()
	},

 	// 10013 S2C 玩家開始加注
	DoubleBetStart(data){
		canUpdateJpMoney = false
		if (users[seatNo].GetState() == 1){ 
			// users[seatNo].SetActiveAmplificationButton(true) 
			uiMain.SetActiveAction(true)
		}
		uiMain.StartCountdown(data.TimeRemain,function(){ 
			uiMain.SetActiveAction(false)
		})
	},

	//10014 C2S 玩家加注
	DoubleBet(){
		gameModel.DoubleBet()
	},

	//10015 S2C 玩家加注結果
	DoubleBetResult(data){
		if (data.Result == 0){
			let seatNode = users[data.SeatNo].GetRoot()
			users[data.SeatNo].Bet(data.Bet, 3, seatNode)
			users[data.SeatNo].DoubleAction("double")
			this.SetUserMoney(data.SeatNo,data.MoneyRemain)
		} 
		else if( data.Result == -1 ){
			uiMain.ShowMessage("余额不足")
		}
	},

	//10016 C2S 棄牌
	FoldCard(){
		gameModel.FoldCard()
	},

	//10017 S2C 傳送玩家棄牌訊息，玩家於加注倒數時間結束時仍未加注，亦傳送此協定強制棄牌
	UserFoldCard(data){
		users[data.SeatNo].SetActiveAbandonImage(true)
		users[data.SeatNo].AbandonAction()
	},

	// 10025 S2C 總結算
	Settlement(data){	
		this.ShowCards(data)
	},

	//開牌
	ShowCards(data){
		//關閉點擊看牌
		users[seatNo].SetActiveAmplificationButton(false) 
	
		for (let k in data.UserInfo){ 
			let v = data.UserInfo[k] 
			if (v.State == 1){
				if (v.SeatNo != seatNo){
					//開牌
					users[v.SeatNo].ShowCards(0,4,v.UserCards.Cards) 
				}
	
				//牌型
				this.Delay(0.5,function(){ 
					users[v.SeatNo].ShowPattern(v.UserCards.Pattern)
				})
			}
		}
	
		uiDealer.ShowCards(0,4,data.BankerCards.Cards,function(){ 
			uiDealer.ShowPattern(data.BankerCards.Pattern)
		}) 
	
		let self = this
		this.Delay(2,function(){
			self.ShowResults(data)
		})
	},

	//輸贏結果
	ShowResults(data){
		for (let k in data.UserInfo){ 
			let v = data.UserInfo[k] 
			if ((v.State == 1 || v.State == 3) && v.SeatNo == seatNo) {
				//和
				if(v.Winner == 0 ){
					uiMain.PlayEquarAnimation()
				}
				//贏
				else if( v.Winner == 1 ){
					GameG.PlayGameSound("win")
					uiMain.PlayWinAnimation()
				} 
				//輸
				else if( v.Winner == 2 ){
					GameG.PlayGameSound("lose")
					uiMain.PlayLoseAnimation()
				}
				break
			}
		}

		let self = this
		this.Delay(3,
			function(){
				self.GiveMoney(data)
			}
		)
	},

	//賠付
	GiveMoney(data){
		for(let k in (data.UserInfo)){ 
			let v = data.UserInfo[k] 
			//贏
			if(v.State == 1 && v.Winner == 1 ){
				let user = users[v.SeatNo] 
				user.Bet(v.BetBaseWinLoseMoney, 0, uiDealer.GetRoot())
				user.Bet(v.BetDoubleWinLoseMoney, 3, uiDealer.GetRoot())
			}
		}

		let self = this
		this.Delay(1,
			function(){
				self.ShowGetJackpot(data)
			}
		)
	},

	//JP
	ShowGetJackpot(data){
		let self = this
		for (let k in data.UserInfo){ 
			let v = data.UserInfo[k] 
			if ((v.State == 1 || v.State == 3) && (v.GetJackpot || v.ZhuangGetJackpot) && v.SeatNo == seatNo) {
				let jpMoney = v.JPMoney + v.ZhuangJPMoney
				uiMain.ShowGetJackpotAnimation(jpMoney,function(){ 
					self.MoveBet(data)
				})
				return
			}
		}
		this.MoveBet(data)
	},

	//移動籌碼
	MoveBet(data){
		let self = this
		for(let k in data.UserInfo){ 
			let v = data.UserInfo[k] 
			if(v.State == 1 || v.State == 3 ){
				let betDestination = v.Winner == 2 && uiDealer.GetRoot() || users[v.SeatNo].GetRoot()
				let user = users[v.SeatNo] 
				user.MoveBetPool(0, betDestination)
				user.MoveBetPool(3, betDestination)
				if(v.SeatNo == seatNo ){
					user.MoveBetPool(1, uiMain.GetJackpot())
					user.MoveBetPool(2, uiMain.GetJackpot())
				}
				//玩家Jackpot
				if(v.GetJackpot ){
					user.ShootMoney(v.JPMoney, uiMain.GetJackpot())
				}
				//莊家Jackpot
				if(v.ZhuangGetJackpot ){
					user.ShootMoney(v.ZhuangJPMoney, uiMain.GetJackpot())
				}
				//開啟寶箱動畫
				if(v.GetJackpot || v.ZhuangGetJackpot ){
					users[v.SeatNo].ShowChestAnimation()
				}
				user.ShowWinLoseMoney(v.TotalWinLose,function(){ 
					self.SetUserMoney(v.SeatNo,v.Money)
				}) 
			}
		}
		this.Delay(1,function(){ 
			canUpdateJpMoney = true
			self.UpdateJackpotMoney() 
			self.RecoverCard()
		})
	},

	//回收牌
	RecoverCard(){
		for(let k in users){ 
			let v = users[k] 
			v.RecoverCard()
			v.HidePattern()
			v.SetActiveAbandonImage(false)
		}
		uiDealer.RecoverCard(true)
		uiDealer.HidePattern()
		
		let self = this
		this.Delay(2,function(){ self.SettlementOK() })
	},

	//10026 C2S 總結算OK  
	SettlementOK(){ 
		gameModel.SettlementOK()
	},

	//10024 S2C 更新 Jackpot 金額
	UpdateJackpot(data){
		jpMoney = data.JPMoney
		this.UpdateJackpotMoney()
	},

	UpdateJackpotMoney(){
		if(canUpdateJpMoney){
			uiMain.SetJackpotMoney(jpMoney)
		}
	},
};

module.exports = GameLayer
