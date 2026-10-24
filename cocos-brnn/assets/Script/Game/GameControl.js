// region *.lua
// Date
// 此文件由[BabeLua]插件自动生成
// endregion
var G = require("Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var UIManager = require("UIManager")

var fmg = null
var compare = null
var GameConfig = require("GameConfig")

var networkQueue = null
var BClass = null
var Game_BRNN = null

var gameLayer = null

var UIStart = require("UIStart")
var GameManager = require("GameManager")

var GameControl = {
	extends: cc.Component,

	//- 清理函数
	onExit(){

	},

	Init(){
		fmg = require("FFunction")
		networkQueue = require("NetworkQueue");
		BClass = require("BClass")
		Game_BRNN = require("Game_BRNN")
		compare = require("Compare")

		gameLayer = require("GameLayer")

		this.initEvent()
		this.initData()
	},

	//- 初始化监听
	initEvent(){
		let self = this

    	// 添加事件监听函数
	    let event = function(evt){
	        networkQueue.RegMsgHook(BClass.Game, Game_BRNN[evt], fmg.handler(self, self[evt]))
	    }
	
		networkQueue.RegMsgHook(BClass.Game, Game_BRNN.BRNNSettingID, this.BRNNSettingID)
		networkQueue.RegMsgHook(BClass.Game, Game_BRNN.BRNNStateID, this.BRNNStateID)

		networkQueue.RegMsgHook(BClass.Game, Game_BRNN.BRNNBroadCastBetID, this.BRNNBroadCastBetID)
		networkQueue.RegMsgHook(BClass.Game, Game_BRNN.BRNNGameResultPokerID, this.BRNNGameResultPokerID)
		networkQueue.RegMsgHook(BClass.Game, Game_BRNN.BRNNGameResultWinID, this.BRNNGameResultWinID)
		networkQueue.RegMsgHook(BClass.Game, Game_BRNN.BRNNBetInfoID, this.BRNNBetInfoID)
		networkQueue.RegMsgHook(BClass.Game, Game_BRNN.BRNNBetRetID, this.BRNNBetRetID)
		networkQueue.RegMsgHook(BClass.Game, Game_BRNN.BRNNShangZhuangRetID, this.BRNNShangZhuangRetID)

		networkQueue.RegMsgHook(BClass.Game, Game_BRNN.BRNNShangZhuangListInfoID, this.BRNNShangZhuangListInfoID)
		networkQueue.RegMsgHook(BClass.Game, Game_BRNN.BRNNZhuangInfoID, this.BRNNZhuangInfoID)

		networkQueue.RegMsgHook(BClass.Game, Game_BRNN.BRNNResultCardListID, this.BRNNResultCardListID)
		networkQueue.RegMsgHook(BClass.Game, Game_BRNN.BRNNBetClearRetID, this.BRNNBetClearRetID)
		networkQueue.RegMsgHook(BClass.Game, Game_BRNN.BRNNBroadCastFapaiThreeCard, this.BRNNBroadCastFapaiThreeCard)
		networkQueue.RegMsgHook(BClass.Game, Game_BRNN.BRNNBroadCastTotalBet, this.BRNNBroadCastTotalBet)
		networkQueue.RegMsgHook(BClass.Game, Game_BRNN.BRNNBroadCastFapaiTwoCard, this.BRNNBroadCastFapaiTwoCard)
		networkQueue.RegMsgHook(BClass.Game, Game_BRNN.BRNNRichestListID, this.BRNNRichestListID)
		networkQueue.RegMsgHook(BClass.Game, Game_BRNN.BRNNLuckyStarListID, this.BRNNLuckyStarListID)
	},

	//- 初始化数据
	initData(){
	    gameData.dtBetRecode = [] // 此局已下注记录
	    gameData.dtBetTotal = 0 // 此局已下注總額
	    gameData.dtBetRecodeOrg = [] // 上一局下注记录
	    gameData.dtBetRecodePrv = null // 待回应下注记录
	    gameData.hAdioCoinAdd = [] // 筹码增加音效列表
	    gameData.hAddCoin = [ 0, 0, 0 ] // 筹码增加动画列表
	    gameData.dtBetLimt = 0 // 下注上限
	    gameData.dtBetRate = 1 // 1注筹码到钱的换算比例
	    gameData.dtUserBet = null // 当前倍数
	    gameData.bBetted = false // 是否下过注
	    gameData.bIBanker = false // 是否是庄
	    gameData.bReqUpBanker = false // 是否申请了上庄
	    gameData.bReqDownBanker = false // 是否申请了下庄
	    gameData.bAutoBet = false // 是否自动下注
	    gameData.bMidEnter = true // 是否是游戏中加入
	    gameData.breakCoin = 0 // 断线重连下注数
	    gameData.dtBankerReqNum = 0 // 上庄申请的人数
	    gameData.channel = 20 // debug channel列印測試訊息頻道
	    gameData.bankno = 0
	    gameData.wincount = 0 // 閒家贏的次數加總
	    gameData.casttype = [] // 籌碼種類
	    gameData.bccoin = [] // 廣播下注金額
	    gameData.AbleTotalBet = 0;
	    gameData.ThreeCardGet = false // 是否拿到三張牌
		gameData.PlayerPokers = [] // 所有使用者的牌

		gameData.bClearReq = null
		gameData.hAdioCoinAdd = []
		gameData.BroadBet = []
		gameData.bccoin = []
	},
	
	//- 更新玩家信息
	updateUser(data){

		
	},

	//- 设置下注状态 state-0:下注阶段；1:开奖阶段；2:动画阶段；3:等待阶段
	SetBetState(state){
	
	    gameData.dtBetState = state
	    gameData.SetState(state)
	    if(state == 0 ){
	        gameData.wincount = 0
	        gameData.bBetted = false
	        gameData.bReqUpBanker = false
	        gameData.bReqDownBanker = false
	        gameData.bMidEnter = false
	        gameData.bClearReq = null
	        gameData.hAdioCoinAdd = []
	        gameData.BroadBet = []
	        gameData.bccoin = []
	
	        if (gameData.ThreeCardGet == false) {
	            GameControl.BRNNGetFapeiThreeCard();
	        }
	        if (gameData.bIBanker != null) {
	            gameLayer.CheckScore(true);
	        }
	
        	// 处理压注
	        gameData.dtBetRecodePrv = null
	        if(GameControl.coluBetCoin(gameData.dtBetRecode) > 0 ){ gameData.dtBetRecodeOrg = fmg.clone(gameData.dtBetRecode) }
	        gameData.dtBetRecode = []
	        if(gameData.bAutoBet ){
	            if (GameControl.CanBetAuto()) {
	                GameControl.BetCoinAry(gameData.dtBetRecodeOrg);
				} 
           		else{
					gameLayer.ShowMessage("已超过能下注上限，开启自动下注失败")
					gameData.bAutoBet = false;
					gameLayer.ShowAutoButton(true)
	            }
	        }
	
	        gameData.gameScene.hideHold()

	        UIManager.HideMessageFull()
		} 
    	else if( state >= 1 ){

	    }
	},

	//- 获取下注记录的总钱
	coluBetCoin(ary){
	    let coin = 0
		for(let _ in (ary)){ 
			let v = ary[_] 

	        coin = coin + (v.Count || 0)
	    }
	
	    return coin
	},

	//- 单个下注
	BetCoin(idx, amt){
		let data = []
		data[0] = {}		
	    data[0].BetType = idx
	    data[0].Count = amt
	
	    return GameControl.BetCoinAry(data)
	},

	//- 单个下注
	BetAgain(){
	    return GameControl.BetCoinAry(gameData.dtBetRecodeOrg)
	},

	CanBetAgain(){
	    data = gameData.dtBetRecodeOrg
	    let coin = 0
	    let tmp = []
		for(let _ in (data)){ 
			let v = data[_] 

	        coin = coin + v.Count
	        if(v.Count > 0 ){ tmp[tmp.length + 1] = v }
	    }
	
	    if (coin == 0) {
	        gameLayer.ShowMessage("注码未选择，押注失败");
	    }
	    return (coin > 0)
	},

	CanBetAuto(){
	    dataorg = gameData.dtBetRecodeOrg
	    data = gameData.dtBetRecode
	
	    let BetCoin = 0;
	
	    let CurrBeted = GameControl.coluBetCoin(data) != 0;
	    let PrevBeted = GameControl.coluBetCoin(dataorg) != 0;
	
	
	    if (CurrBeted && PrevBeted != null) {
	
	        return false;
	    }
	
	    BetCoin = (PrevBeted) && GameControl.coluBetCoin(dataorg) || GameControl.coluBetCoin(data)
	
	    let Betlimit = parseInt(gameData.UserInfo.Score / 10)
	    if(BetCoin * gameData.dtBetRate <= gameData.UserInfo.Score && (GameControl.coluBetCoin(data) + BetCoin * gameData.dtBetRate) <= Betlimit ){
	        return true
	} 
    else{
	
	        return false
	    }
	},

	//- 数组下注
	BetCoinAry(data){
	    if(gameData.UserInfo == null ){
	        gameLayer.ShowMessage("使用者資料空白,当前不能下注")
	
	        return false
	    }
	    if(gameData.bIBanker ){
	        gameLayer.ShowMessage("庄家不能下注")
	        return false
	    }
	
    //
	    let coin = 0
	    let tmp = []
		for(let _ in (data)){ 
			let v = data[_] 

	        coin = coin + v.Count
	        if(v.Count > 0 ){
				//tmp[tmp.length + 1] = v 
				tmp.push(v)
			}
	    }
	    if(coin <= 0 ){
	        gameLayer.ShowMessage("注码未选择，押注失败");
	        return
	    }
	
	    if (coin > gameData.AbleTotalBet) {
	        gameLayer.ShowMessage("已超过能下注上限，押注失败");
	        return
	    }
	
	
	    let Betlimit = parseInt(gameData.UserInfo.Score / 10)
	    if(coin * gameData.dtBetRate <= gameData.UserInfo.Score && (GameControl.coluBetCoin(gameData.dtBetRecode) + coin * gameData.dtBetRate) <= Betlimit ){
	        GameControl.BRNNBetID(tmp)
	        gameData.dtBetRecodePrv = data
	        return true
		}
    	else{
	        gameLayer.ShowMessage("金币不足或已超过能下注上限，押注失败");
	    }
	
	    return false
	},

	//- 初始化牌面
	initCard(obj, number, color){
	    if(number == null || number == 0 ){
	        number = 0
	        color = 0
	    }
	
	    GameG.SetImageSprite(obj, G.GetGamePName(), "card_" + number + "_" + color, false)
	},

	//- - 事件处理
	BRNNSettingID(data){
	    fmg.fpack(data)
	    gameData.svrData.brnnSettingID = data
		
		let sortDataFun = function(dataA,dataB){
			return dataA - dataB
		}
		data.BetCount.sort(sortDataFun);

	    gameData.dtBetRate = data.BetMoney
	    gameData.dtBaseBet = data.BetCount
	    gameData.betlimitmoney = data.betlimitmoney
	    gameData.dtBankMax = data.MaxZhuang

	    gameData.SetSetting(data)
	    gameLayer.SetChip(data.BetCount)
	
	    GameControl.SetCast(data.BetCount);
	},

	SetCast(data){
		for(let i = 1; i <= data.length; ++i ){
	        gameData.casttype[i] = data[i-1];
	    }
	},

	doAddCoinArr(data, userid){
		for(let k in (data)){ 
			let v = data[k] 

			let bettype = null;
	        let betmoney = null;
	
	        if (userid == "0" || userid) {
	            bettype = v.Type;
	            betmoney = gameData.bccoin[v.Type] || 0;
	            gameData.bccoin[v.Type] = 0;
			} 
        	else{
	            bettype = v.BetType;
	            betmoney = v.Count;
	        }
	
	        let vec = []
			for(let i = gameData.casttype.length; i >= 1; --i ){
	            if(gameData.casttype[i] && gameData.casttype[i] > 0 ){
	                vec[i] = Math.floor(betmoney / gameData.casttype[i])
	                if (vec[i] > 20) {
	                    vec[i] = 20;
	                }
	                betmoney = betmoney % gameData.casttype[i]
				} 
            	else{
	                vec[i] = 0
	            }
	        }
			for(let i  =  1; i <= vec.length; ++i ){
	            if (vec[i] > 0) {
					for(let j =  1; j <= vec[i]; ++j ){
	                    if (userid) {
							GameG.NewDelayOnce(
								function(){
									gameLayer.ShowCastBetChip(bettype, gameData.casttype[i], i - 1, userid) 
								}, 
								(Math.random() * 0.8)
							)
						}
                    	else{
	                        gameLayer.ShowCastBetChip(bettype, gameData.casttype[i], i - 1, GameConfig.getUserID(), v.Count)
	                    }
	                }
	            }
	        }
	    }
	},

	//計算籌碼arr
	getCoinArr(num){
	
	    let betmoney = num;
	
	    let vec = []
		for(let i =  gameData.casttype.length; i >= 0; --i ){
	        if(gameData.casttype[i] && gameData.casttype[i] > 0 ){
	            vec[i] = Math.floor(betmoney / gameData.casttype[i])
	            if (vec[i] > 20) {
	                vec[i] = 20;
	            }
	            betmoney = betmoney % gameData.casttype[i]
			} 
        	else{
	            vec[i] = 0
	        }
	    }

		return vec;
	},

	BRNNStateID(data){
	    fmg.fpack(data)
		//  Bet            = iota //下注状态
		//KaiJiang              //开奖状态  1
		//KaiJiangAction        //开奖动画  2
		//EndAction             //结算动画  3
		//Wait                  //等待游戏开始 4
		GameControl.SetBetState(data.State)
	
	
   		// 执行开始动画
	    if(gameData.dtBetState == 0 ){
	        if(data.Time >= 3 && gameData.bFirstState0 != 1 ){

	        }

		} 
    	else if( gameData.dtBetState == 1 ){

	    }
	
	    // 屏蔽首次进入可能双次收到此消息
	    if(gameData.bFirstState0 == null ){
			gameData.bFirstState0 = 1
			GameG.NewDelayOnce(
				function(){
					gameData.bFirstState0 = 2 
				},
				1
			)
	    }
	
	    gameLayer.UpdateState(data.State)
	    if(data.State == 0 ){
	        gameLayer.SetBetTimer(data.Time)
	        if(data.Time > 4 ){
				UIStart.Hide()

	            gameLayer.ShowBetStart()
	        }
		} 
		else if( data.State == 1 ){
			UIStart.Hide()
	        gameLayer.StopBetTimer()
	        gameLayer.ShowBetEnd()
		}
		else{
			UIStart.Hide()
		}
		GameManager.calLoadTime()
	},

	BRNNBroadCastTotalBet(data){
    	//廣播已下注和還可下注	
	gameData.AbleTotalBet = data.AbleTotalBet;
	    gameLayer.ShowBroadCastTotal(data)
	},

	BRNNBroadCastBetID(data){	
    	////广播用户下注的数组, 廣播下注消息
	    fmg.fpack(data)
	
	    // 是否筹码未连续变动（清除行为/第一次进入）
		for(let bk in (data.BroadCastBetArr)){

			let bv = data.BroadCastBetArr[bk] 
	        let coin = 0
			for(let _ in gameData.BroadBet)
			{ 
				let lv = gameData.BroadBet[_] 
	            if(bv.Type == lv.Type ){
					coin = lv.Money;
					break;
	            }
	        }
	        gameLayer.ShowBroadCastBetAll(bv.Type, bv.Money)
	        gameLayer.ShowLuckyStar(bv.Type, bv.LuckyStar)
       		// 其他玩家投注
			if(coin < bv.Money && data.UserID != GameConfig.getUserID() ){

	            let tmp = bv.Type
	            gameData.bccoin[tmp] = bv.Money - coin;
	            gameData.hAddCoin[tmp] = gameData.hAddCoin[tmp] || 0
	            if(gameData.hAddCoin[tmp] <= 4 ){
	                gameData.hAddCoin[tmp] = gameData.hAddCoin[tmp] + 1;

	            }	
			} 
            // 其他玩家清除操作
        	else if( coin > bv.Money && data.UserID != GameConfig.getUserID() ){

	        }
	    }
	    if (data.UserID != GameConfig.getUserID()) {
	        GameControl.doAddCoinArr(data.BroadCastBetArr, data.UserID)
	    }
	
	    gameData.bFirstBroadBet = true
	    gameData.BroadBet = fmg.clone(data.BroadCastBetArr)
	},

	BRNNBroadCastFapaiThreeCard(data){
	    gameData.ThreeCardGet = true
		for(let bk in (data.UserPokerCard)){ 
			let bv = data.UserPokerCard[bk] 

	        let coin = 0
	
	        let card = "";
			for(let pk in (bv.CardGroup)){ 
				let pv = bv.CardGroup[pk] 

	            card = card + pv.Color + ":" + pv.CardNumber + ",";
	        }
	    }
	
	    gameLayer.ShowFapaiThreeCard(data)
	},

	BRNNBroadCastFapaiTwoCard(data){	
    	//最後兩張牌
		for(let bk in (data.UserPokerCard)){ 
			let bv = data.UserPokerCard[bk] 
	        let coin = 0
	
	        let card = "";
			for(let pk in (bv.CardGroup)){ 
				let pv = bv.CardGroup[pk] 

	            card = card + pv.Color + ":" + pv.CardNumber + ",";
	        }
	    }
	
	    gameLayer.ShowFapaiTwoCard(data)
	},

	BRNNGameResultPokerID(data){
    	////游戏结果扑克 S2C , 廣播開獎結果
	
	    fmg.fpack(data)
	
		gameData.bFirstState0 = 2;
		
	    let card = "";
		for(let pk in (data.SitPoker)){ 
			let pv = data.SitPoker[pk] 

	        card = card + pv.Color + ":" + pv.CardNumber + ",";
	    }
	
	    if (data.SitNo == 0) {
	        gameData.bankno = (parseInt(data.NiuNiuRet) * 10) + (10 - parseInt(data.NiuNiuNumber))
		}
    	else{
	        if (data.WinLoss == 1) {
	            gameData.wincount = gameData.wincount + 1
	        }
	    }
	
	
	    if(gameData.bMidEnter != null ){
	        gameData.SetGameResult(data)
	        gameLayer.ShowResultPoker(data)
		} 
		else{
	        gameData.gameScene.hold("请等待新一局游戏开始...", 20)
	    }
	},
	
	BRNNGameResultWinID(data){	
	    fmg.fpack(data)
	    gameData.breakCoin = 0

	    gameData.UserInfo.Score = gameData.UserInfo.Score + data.SelfWin
	    gameData.SetGameResultWin(data)
	
	    gameData.ThreeCardGet = false
	    //gameData.chShowRst = coroutine.create(function(){
	        gameData.gameScene.hideHold()
	        gameData.chShowRst = null

	    //})
	},
	
	//斷線重連
	BRNNBetInfoID(data){
	    fmg.fpack(data)
	    if (gameData.ThreeCardGet == false && gameData.dtBetState == 0) {
	        GameControl.BRNNGetFapeiThreeCard();
	    }
	    let coin = 0
		for(let _ in (data.BetInfo)){ 
			let v = data.BetInfo[_] 

	        coin = coin + v.Money

			gameData.dtBetRecode[v.Type] = gameData.dtBetRecode[v.Type] || []
	        gameData.dtBetRecode[v.Type].BetType = v.Type
	        gameData.dtBetRecode[v.Type].Count = v.Money / gameData.dtBetRate + (gameData.dtBetRecode[v.Type].Count || 0)

	        gameData.SetAddCastBet(v.Type, v.Money)
	        gameLayer.ShowBroadCastBetMy(v.Type)
	        if(v.Money > 0 ){ gameData.bBetted = true }
	    }
	
	    gameData.breakCoin = coin
	    gameData.UserInfo.Score = gameData.UserInfo.Score - coin

	    gameData.SetGameUserScore(GameConfig.getUserID(), data.UserMoney)
	    gameLayer.SetUserScore(data.UserMoney)
	},
	
	BRNNBetRetID(data){
	    fmg.fpack(data)
	
	    gameData.UserInfo.Score = data.Money
	
	    if(data.Ret != 1 ){
			for(let k in (data.BetArr)){ 
				let v = data.BetArr[k] 
	            gameLayer.ClearBetRetError(v.BetType, v.Count * gameData.dtBetRate, GameConfig.getUserID())
	        }
	    }
	    if(data.Ret == 1 ){
        	// TODO 訊息下注成功

			for(let k in (data.BetArr)){ 
				let v = data.BetArr[k] 

	            gameData.SetAddCastBet(v.BetType, v.Count)
	            gameLayer.ShowBroadCastBetMy(v.BetType)
            // TODO 下注成功動畫
	        }
	        gameData.SetGameUserScore(gameData.userSelf.UserID, data.Money)
	        gameLayer.SetUser(gameData.userSelf)
	        gameData.bBetted = true
	
			for(let _ in (data.BetArr)){ 
				let v = data.BetArr[_] 

	            gameData.dtBetRecode[v.BetType] = gameData.dtBetRecode[v.BetType] || []
	            gameData.dtBetRecode[v.BetType].BetType = v.BetType
	            gameData.dtBetRecode[v.BetType].Count = v.Count + (gameData.dtBetRecode[v.BetType].Count || 0)
	            gameData.dtBetTotal = gameData.dtBetTotal + v.Count
	        }
	        gameLayer.CheckScore()
		} 
		else if( data.Ret == "NOMONEY" ){
			gameLayer.ShowMessage("金币不足或已超过能下注上限")
		} 
		else if( data.Ret == "NONTYPE" ){
			gameLayer.ShowMessage("下注类型错误")
		} 
		else if( data.Ret == "ISZHUANG" ){
			gameLayer.ShowMessage("庄家不能下注")
		} 
		else if( data.Ret == "BETOUTOFRANGE" ){
			gameLayer.ShowMessage("总注数超过上限")
		} 
		else if( data.Ret == "MONEYLESSLIMIT" ){
			let MinCarryingScore = gameData.betlimitmoney
			gameLayer.ShowMessage("携带金币少于" + MinCarryingScore + "无法下注喔!您可以前往充值后再来")
		}
		
	    gameData.dtBetRecodePrv = null
	},
	
	BRNNShangZhuangRetID(data){	
	    fmg.fpack(data)
	    if(data.ret == 1 ){
	        gameLayer.ShowMessage("下庄成功")
	        gameData.bReqDownBanker = true
	        gameLayer.ShowUpZhuangButton(gameData.bReqUpBanker)
		} 
		else if( data.ret == 0 ){
			gameLayer.ShowMessage("上庄成功")
			gameData.bReqUpBanker = true
			gameLayer.ShowUpZhuangButton(!gameData.bReqUpBanker)
		} 
		else if( data.ret == -1 ){
			gameLayer.ShowMessage("金币不足，上庄失败")
		} 
		else if( data.ret == -2 ){	
			gameLayer.ShowMessage("您已经在上庄列表中咯")
			gameData.bReqUpBanker = true
	    }
	},
	
	BRNNShangZhuangListInfoID(data){	
	    fmg.fpack(data)
		for(let i = 1; i <= data.UserInfo.length; ++i ){
	        if(data.UserInfo[i].UserID == GameConfig.getUserID() ){
	            gameData.bReqUpBanker = true
	
	            break
	        }
	    }
	
	    gameData.dtBankerReqNum = data.UserInfo.length
	
	    gameData.SetZhuangList(data)
	    gameLayer.ShowZhunglist()
	},
	
	BRNNZhuangInfoID(data){
    //當無人坐莊時參數皆為0
	    fmg.fpack(data)
	    gameData.bIBanker = data.UserID == GameConfig.getUserID()
	
    	// 换庄
	    if(data.UserID != 0 && (gameData.svrData.BRNNZhuangInfoID == null || data.UserID != gameData.svrData.BRNNZhuangInfoID.UserID) ){
	        gameData.dtBankerCoinOrg = data.UserInfo[1].Score // 庄家上庄时钱
	    }
	
	    gameData.SetZhuang(data.UserInfo[1])
	    gameLayer.SetZhuang(data)
	
	    if (gameData.svrData.BRNNZhuangInfoID != null && gameData.svrData.BRNNZhuangInfoID.UserID == GameConfig.getUserID() && data.UserID != GameConfig.getUserID()) {
	        gameLayer.ShowUpZhuangButton(true);
	    }
	
	    gameData.svrData.BRNNZhuangInfoID = data
	},
	
	BRNNResultCardListID(data){	
		if (data.PokerList == null)
			return
		
		fmg.fpack(data)
	    fmg.revertTable(data.PokerList)
	
		//最後20組牌
		for(let i =  0; i < data.PokerList.length; ++i ){
	        let winresult = ""
			for(let j =  0; j < data.PokerList[i].RetType.length; ++j ){
	            winresult = winresult + data.PokerList[i].RetType[j] + ","
	        }
	    }
	    gameLayer.ShowRoadmapList(data.PokerList)
	    gameData.chartLayer.update(data)
	},
	
	//清除下注回復
	BRNNBetClearRetID(data){	
	    fmg.fpack(data)
	
	    gameData.UserInfo.Score = data.Money
	
	    if(data.Ret == 0 ){
	        gameLayer.ShowMessage("退还押注成功")
	
	        gameData.bBetted = false
	
	        gameData.dtBetRecode = []
	        gameData.SetClearCastBet()
	        gameData.SetGameUserScore(GameConfig.getUserID(), data.Money)
	        gameLayer.SetUser(userList[GameConfig.getUserID()])
	        gameLayer.ShowClearBetChipMy()
		} 
		else{
	        gameLayer.ShowMessage("清理次数超过上限，清理失败")
	    }
   		//清空綁定狀態
		   gameData.bClearReq = null
	},
	
	//大富豪列表的消息
	BRNNRichestListID(data){
	    gameLayer.SetUserList(data)
	},
	
	//明燈玩家的消息
	BRNNLuckyStarListID(data){
	    gameLayer.SetUserStar(data)
	},

	//// 发送请求
	
	//下注
	BRNNBetID(data){
		let param = {}
		param.BetArr = data		
	    networkQueue.SendMsg(BClass.Game, Game_BRNN.BRNNBetID, param)
	},
	
	// 送出上莊請求
	BRNNShangZhuangID(bUp){	
		fmg.fpack(bUp)
        let param = {}
        param.IsShangZhuang =  bUp		
	    networkQueue.SendMsg(BClass.Game, Game_BRNN.BRNNShangZhuangID, param)
	},
	
	// 取得上莊列表
	BRNNGetShangZhuangListID(){	
	    networkQueue.SendMsg(BClass.Game, Game_BRNN.BRNNGetShangZhuangListID, null)
	},
	
	// 清除下注
	BRNNBetClearID(){	
		networkQueue.SendMsg(BClass.Game, Game_BRNN.BRNNBetClearID, null)
	},
	
	// 當半途進場時未取得三張牌時就重要三張
	BRNNGetFapeiThreeCard(){	
		networkQueue.SendMsg(BClass.Game, Game_BRNN.BRNNGetFapeiThreeCard, null)
	},
};

module.exports = GameControl
