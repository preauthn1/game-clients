var G = require("Global")
var GameG = require("GameGlobal")
var gameAudio = require("GameAudio")
var GameData = require("GameData")
var fmg  = require("FFunction")
var networkQueue = require("NetworkQueue")
var BClass = require("BClass")
var Game_HHDZ = require("Game_HHDZ")
var UIManager = require("UIManager")
var GameConfig = require("GameConfig")
var GameManager = require("GameManager")

var GameControl = {
	extends: cc.Component,

	//- 清理函数
	onExit(){
	    gameAudio.stopTurnStep()
	},

	init(){
		this.initData()
	    this.initEvent()
	},

	//- 初始化监听
	initEvent(){
        let groupName = GameG.GetGameName()

    	// 添加事件监听函数
		networkQueue.RegMsgHook(BClass.Game, Game_HHDZ.HHDZSettingID, this.HHDZSettingID, groupName)
		networkQueue.RegMsgHook(BClass.Game, Game_HHDZ.HHDZStateID, this.HHDZStateID, groupName)
		networkQueue.RegMsgHook(BClass.Game, Game_HHDZ.HHDZBroadCastBetID, this.HHDZBroadCastBetID, groupName)
		networkQueue.RegMsgHook(BClass.Game, Game_HHDZ.HHDZGameResultPokerID, this.HHDZGameResultPokerID, groupName)
		networkQueue.RegMsgHook(BClass.Game, Game_HHDZ.HHDZGameSceneID, this.HHDZGameSceneID, groupName)

		networkQueue.RegMsgHook(BClass.Game, Game_HHDZ.HHDZGameResultWinID, this.HHDZGameResultWinID, groupName)
		networkQueue.RegMsgHook(BClass.Game, Game_HHDZ.HHDZBetInfoID, this.HHDZBetInfoID, groupName)
		networkQueue.RegMsgHook(BClass.Game, Game_HHDZ.HHDZBetRetID, this.HHDZBetRetID, groupName)
		networkQueue.RegMsgHook(BClass.Game, Game_HHDZ.HHDZResultCardListID, this.HHDZResultCardListID, groupName)
		networkQueue.RegMsgHook(BClass.Game, Game_HHDZ.HHDZBetClearRetID, this.HHDZBetClearRetID, groupName)

		networkQueue.RegMsgHook(BClass.Game, Game_HHDZ.HHDZRichestListID, this.HHDZRichestListID, groupName)
		networkQueue.RegMsgHook(BClass.Game, Game_HHDZ.HHDZLuckyStarListID, this.HHDZLuckyStarListID, groupName)
		networkQueue.RegMsgHook(BClass.Game, Game_HHDZ.HHDZRoundID, this.HHDZRoundID, groupName)
	},

	//- 初始化数据
	initData(){
		//GameData.IDTitle = "ID:"
		GameData.IDTitle = ""
		GameData.dtBetRecode = []                    // 此局已下注记录
		GameData.dtBetRecodeOrg = []                 // 上一局下注记录
		GameData.dtBetRecodePrv = null                // 待回应下注记录
		GameData.hAdioCoinAdd = []                   // 筹码增加音效列表
		GameData.hAddCoin = [0, 0, 0]                // 筹码增加动画列表
		GameData.dtBetRate = 1                       // 1注筹码到钱的换算比例
		GameData.dtUserBet = null                     // 当前倍数
		GameData.bBetted = false                     // 是否下过注
		GameData.bAutoBet = false                    // 是否自动下注
		GameData.bMidEnter = true                    // 是否是游戏中加入
		GameData.breakCoin = 0                       // 断线重连下注数
		GameData.resultOdd = [1, 8, 1]               // 赔率
	},

	//- 更新玩家信息
	updateUser(data){
	    GameData.gameLayer.updateUserInfo(true, data)
	    GameData.resultLayer.updateUser(data)
	},

	//- 设置下注状态 state-0:下注阶段；1:开奖阶段；2:动画阶段；3:等待阶段
	SetBetState(state){
	
	    GameData.dtBetState = state
	    if(state == 0 ){	
	        GameData.bBetted = false
	        GameData.bReqUpBanker = false
	        GameData.bReqDownBanker = false
	        GameData.bMidEnter = false
	        GameData.bClearReq = null
	        GameData.hAdioCoinAdd = []
	        GameData.BroadBet = []
	        
       		// 处理压注
			GameData.dtBetRecodePrv = null
	        if(this.coluBetCoin(GameData.dtBetRecode) > 0 ){
				GameData.dtBetRecodeOrg = fmg.clone(GameData.dtBetRecode)
			}
	        GameData.dtBetRecode = []
	        if(GameData.bAutoBet ){ this.BetCoinAry(GameData.dtBetRecodeOrg) }
	
			// 处理筹码
			let uiCastData = GameData.gameLayer.GetCastData()
			for(let j = 1; j <= 4; ++j){
				for(let i = 1; i <= uiCastData.length; ++i){
	                GameData.poolCast.remove(uiCastData[j][i])
	            }
			}			
	        GameData.gameLayer.ClearCastData()
	
        	// 重置ui
			GameData.gameLayer.uiRoot.time.rstTip.active =(false)
			for(let i = 1;i <= 3; ++i){
	            GameData.gameLayer.uiRoot.betNum.iBet[i].string = "0"
	            GameData.gameLayer.updateAllBetNum(i, 0)
	        }
			
	        GameData.gameScene.hideHold()
	        GameData.compare.stopBlinkWinBg()
			
			UIManager.HideMessageGameFull()
		} 
		else if( state >= 1 ){
			GameData.gameLayer.uiRoot.time.rstTip.active =(false)
			GameData.gameLayer.stopBetTimer()
			gameAudio.turnStep(3)
	
	    }
	
	    GameData.gameLayer.updateBetBtnState()
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
	BetCoin(idx){
	    if(GameData.dtUserBet == null ){ return }
		let data = []
		data[0] = {}
	    data[0].BetType = idx
	    data[0].Count = GameData.dtUserBet
	    return this.BetCoinAry(data)
	},

	//- 数组下注
	BetCoinAry(data){
	    if(GameData.UserInfo == null ){
	        GameData.toast.show(GameG.GetLocalizedString("当前不能下注"), 1.5)
	        return false
	    }
	    if(GameData.bIBanker ){
	        GameData.toast.show(GameG.GetLocalizedString("庄家不能下注"), 1.5)
	        return false
	    }
	
		let coin = 0
	    let tmp = []
		for(let _ in (data)){ 
			let v = data[_] 

	        coin = coin + v.Count
	        if(v.Count > 0 ){ tmp[tmp.length] = v }
	    }
	    if(coin <= 0 ){
	        //GameData.toast.show("当前下注倍数为0", 1.5)
	        return
	    }
	
	    if(coin*GameData.dtBetRate <= GameData.UserInfo.Score ){
	        this.HHDZBetID(tmp)
	        GameData.dtBetRecodePrv = data
	        return true
		} 
    	else{
	        GameData.toast.show(GameG.GetLocalizedString("押注失败"), 1)
	    }
	
	    return false
	},

	//- 初始化牌面
	initCard(obj, number, color){
	    if(number==null || number==0 ){
	        number = 0
	        color = 0
	    }
		obj.node.name = "card_"+number+"_"+color
		GameG.SetImageSprite(obj, G.GetGamePName(), "card_"+number+"_"+color, false)
	},

	//- - 事件处理
	HHDZSettingID(data){
		GameData.dtBetRate = data.BetMoney
	    GameData.svrData.HHDZSettingID = data
	  
		let compare = function(dataA,dataB){
			return dataA - dataB
		}
		data.BetCount.sort(compare);

	    GameData.dtUserBet = data.BetCount[0]
	    GameData.dtBaseBet = data.BetCount
	    GameData.betlimitmoney = data.betlimitmoney
		GameData.chooseBet = 1
	    GameData.gameLayer.updateBetBtns(data.BetCount)
		GameData.gameLayer.updateGameInfo(data.BetCount[0]* GameData.dtBetRate,data.BetMax[0])
		GameData.chartLayer.updateLimit(data.BetMax[0],data.BetMax[2])
		if (GameData.betlimitmoney > 0){
			GameData.gameLayer.uiRoot.recharge.text.text = GameG.GetLocalizedString("请前往充值").replace("####", GameData.betlimitmoney)
		}
		else{
			GameData.gameLayer.uiRoot.recharge.text.text = GameG.GetLocalizedString("携带金额不足请先充值")

		}
	},

	HHDZStateID(data){
		GameControl.SetBetState(data.State)

		if(data.State==0 ){
			GameData.gameLayer.beginBetTimer(data.Time)
		}
		else{
			GameManager.calLoadTime()
		}
		
    	// 执行开始动画
	    if(data.State==0 && data.Time>=3 && GameData.bFirstState0!=1 ){
	        GameData.gameLayer.animStart()
	        gameAudio.turnStep(1)
		} 
		else if( data.State == 1 ){
			GameData.gameLayer.stopBetTimer()
		} 
		else if( data.State==0 && data.Time < 3 && GameData.bFirstState0!=1 ){
			GameData.compare.playCard()
	    }
	
    	// 屏蔽首次进入可能双次收到此消息
	    if(GameData.bFirstState0 == null ){
	        GameData.bFirstState0 = 1
	        fmg.delayFunc(function(adt){ GameData.bFirstState0 = 2 }, 1, [])
	    }
	},

	HHDZBroadCastBetID(data){	
    	// 是否筹码未连续变动（清除行为/第一次进入）
		for(let bk in (data.BroadCastBetArr)){ 
			let bv = data.BroadCastBetArr[bk] 

	     	if(bv.Type<4) {
	        	GameData.gameLayer.updateAllBetNum(bv.Type, bv.Money)
				GameData.gameLayer.ShowBroadCastBetAll(bv.Type,bv.Money)
	        	let coin = 0
				for(let _ in (GameData.BroadBet)) {
					let lv = GameData.BroadBet[_] 

					if(bv.Type == lv.Type ){
						coin = lv.Money;
					}
				}
									
				// 其他玩家投注
				if(coin < bv.Money && data.UserID != GameConfig.getUserID() ){
					let tmp = bv.Type
					if(GameData.hAddCoin[tmp] <= 3 ){
						GameData.hAddCoin[tmp] = GameData.hAddCoin[tmp] + 1
						gameAudio.addCoin()
					}
					
					let CheckBet = require("CheckBet")
					let Data = CheckBet.Init(bv.Money-coin, GameData.dtBaseBet, GameData.dtBetRate)
					let BetData = Data.value
					let CountData = Data.count
					let isFirst = true

					for(let  i = 1;  i <= BetData.length; ++ i){
						for(let  j = 1;  j <= CountData[i]; ++ j){
							if (isFirst == true){
								GameData.gameLayer.ShowCastBetChip(bv.Type,BetData[i],BetData.length - i,data.UserID)
								isFirst = false
							}
							else{
								GameG.NewDelayOnce(
									function(){
										GameData.gameLayer.ShowCastBetChip(bv.Type,BetData[i],BetData.length - i,data.UserID)
									}, 
									(Math.random() * 0.5)
								)
							}
						}
					}
				} 
				// 其他玩家清除操作
				else if( coin > bv.Money ){
					GameData.gameLayer.resetBetCast(bv.Type, bv.Money/GameData.dtBetRate)
					GameData.gameLayer.ShowClearBetChip(data.UserID)
				}
			}
	    }
	
	    GameData.bFirstBroadBet = true
	    GameData.BroadBet = fmg.clone(data.BroadCastBetArr)
	},

	HHDZGameResultPokerID(data){
		GameData.gameLayer.animEndBet()
		GameData.dtRstWin = GameData.CompState(data.HungPoker[1].Number, data.HungPoker[2].Number)
	    GameControl.SetBetState(1)
	    GameData.bFirstState0 = 2
	    GameData.resultLayer.setWinRst(GameData.dtRstWin)
		
		GameData.resultPoker = {}
		GameData.resultPoker.Win = data.Win
		GameData.resultPoker.HungZuHe = data.HungZuHe
		GameData.resultPoker.HeiZuHe = data.HeiZuHe

	    if(GameData.bMidEnter == false ){	
	        GameData.compare.animOpenCards(data, function(){
		
				GameData.gameLayer.ShowResultPoker(data)
	            GameData.chartLayer.addRst(data,data.RoundID,true)
	            if(GameData.chShowRst ){

				}
	        })	
		} 
		else{
			GameData.gameScene.hold("请等待新一局游戏开始", 20)
		}
	},

	HHDZGameSceneID(data){

	},

	HHDZGameResultWinID(data){
		GameData.breakCoin = 0
		GameData.UserInfo.Score = GameData.UserInfo.Score + data.SelfWin
		GameData.resultLayer.update(data)
		
		function Coroutine(f) {
            var o=f();
            o.next();
            return function (x) {
                o.next(x);
            }
		}
		
		gameData.chShowRst=Coroutine(function* () {
			var obj, now;
			GameData.gameLayer.hAddUseCoin = GameData.gameLayer.hAddUseCoin || [obj = GameData.gameLayer.uiRoot.user.coin, now = GameData.UserInfo.Score]
			
			if (GameData.bMidEnter == true){
	            yield;
			}
			
			if(GameData.gameLayer.dtOpenCardStep != 0 ){
	            yield;
	        }
	        GameData.gameScene.hideHold()
	        GameData.chShowRst = null
			GameData.resultLayer.show(true)
			GameData.gameLayer.bLockUseCoin = false
			GameData.gameLayer.showAddCoin(data.SelfWin, 2, 1.7, GameData.UserInfo.Score)
			GameData.resultLayer.hideCall = function(){
				GameData.resultLayer.hideCall = null
	        }
        });
		GameData.gameLayer.ShowResultWin(data)
		GameData.chShowRst = null

	},

	HHDZBetInfoID(data){
	    let coin = 0
		for(let _ in (data.BetInfo)){ 
			let v = data.BetInfo[_] 

	        coin = coin + v.Money
	        GameData.gameLayer.uiRoot.betNum.iBet[v.Type].text = G.FormatDecimal(v.Money, 0)
	        GameData.dtBetRecode[v.Type] = GameData.dtBetRecode[v.Type] || {}
	        GameData.dtBetRecode[v.Type].BetType = v.Type
	        GameData.dtBetRecode[v.Type].Count = v.Money/GameData.dtBetRate + (GameData.dtBetRecode[v.Type].Count || 0)
	        if(v.Money > 0 ){ GameData.bBetted = true }
			
			GameData.gameLayer.ShowBroadCastBetMy(v.Type,GameData.dtBetRecode[v.Type].Count*GameData.dtBetRate)
			let CheckBet = require("CheckBet")
			let Data = CheckBet.Init(v.Money-coin, GameData.dtBaseBet, GameData.dtBetRate)
			let BetData = Data.value
			let CountData = Data.count			
			for(let  i = 1;  i <= BetData.length; ++ i){
				for(let  j = 1;  j <= CountData[i]; ++ j){
					GameData.gameLayer.ShowCastBetChip(v.Type,BetData[i],BetData.length - i +1,data.UserID)
				}
			}
	    }
	
	    GameData.breakCoin = coin
	    GameData.UserInfo.Score = GameData.UserInfo.Score - coin
	    GameData.gameLayer.updateUserCoin(GameData.UserInfo.Score)
	    GameData.gameLayer.updateBetBtnState()
	},

	HHDZBetRetID(data){
	    GameData.UserInfo.Score = data.Money
	    GameData.gameLayer.updateUserCoin(data.Money)
		// if(data.Ret != 0 ){
		// 	for(let k in (data.BetArr)){ 
		// 		let v = data.BetArr[k] 

		// 		GameData.gameLayer.ClearBetRetError(v.BetType,v.Count*GameData.dtBetRate,GameConfig.getUserID())
		// 	}
		// }
		
	    if(data.Ret == 0 ){
	        GameData.bBetted = true
			for(let _ in (data.BetArr)){ 
				let v = data.BetArr[_] 

				GameData.dtBetRecode[v.BetType] = GameData.dtBetRecode[v.BetType] || {}
				GameData.dtBetRecode[v.BetType].BetType = v.BetType
				GameData.dtBetRecode[v.BetType].Count = v.Count + (GameData.dtBetRecode[v.BetType].Count || 0)
				GameData.gameLayer.uiRoot.betNum.iBet[v.BetType].text = G.FormatDecimal(GameData.dtBetRecode[v.BetType].Count*GameData.dtBetRate, 0)
				
				GameData.gameLayer.ShowBroadCastBetMy(v.BetType,GameData.dtBetRecode[v.BetType].Count*GameData.dtBetRate)

				let CheckBet = require("CheckBet")
				let Data = CheckBet.Init(v.Count * GameData.dtBetRate, GameData.dtBaseBet, GameData.dtBetRate)
				let BetData = Data.value
				let CountData = Data.count
				for(let  i = 1;  i <= BetData.length; ++ i){
					for(let  j = 1;  j <= CountData[i]; ++ j){
						GameG.NewDelayOnce(
							function(){
								GameData.gameLayer.ShowCastBetChip(v.BetType,BetData[i],BetData.length - i, GameConfig.getUserID())
							}, 
							(Math.random() * 0.5)
						)
					}
				}
				//GameData.gameLayer.ShowCastBetChip(v.BetType,v.Count*GameData.dtBetRate,GameData.chooseBet,GameConfig.getUserID())
			}
		
		} 
		else if( data.Ret == -1 ){
			GameData.toast.show(GameG.GetLocalizedString("金币不足"))
		} 
		else if( data.Ret == -2 ){
			GameData.toast.show(GameG.GetLocalizedString("下注类型错误"))
		} 
		else if( data.Ret == -3 ){
			GameData.toast.show(GameG.GetLocalizedString("庄家不能下注"))
		} 
		else if( data.Ret == -4 ){
			GameData.toast.show(GameG.GetLocalizedString("总注数超过上限"))
		// By Rayon
		} 
		else if( data.Ret == -5 ){
			GameData.toast.show(GameG.GetLocalizedString("不可同时下注红与黑"))
		} 
		else if( data.Ret == -6 ){
			let MinCarryingScore = GameData.betlimitmoney
	        GameData.toast.show(GameG.GetLocalizedString("前往充值后再来").replace("####", MinCarryingScore))
	    }
	    
	    GameData.dtBetRecodePrv = null
	    GameData.gameLayer.updateBetBtnState()
	},

	HHDZResultCardListID(data){
		if (data.CardList == null)
			return;

		for(let i = 0; i < data.CardList.length; ++i){
	        GameData.chartLayer.addRst(data.CardList[i],data.CardList[i].RoundID)
	    }
	},

	HHDZBetClearRetID(data){
	    GameData.UserInfo.Score = data.Money
	    GameData.gameLayer.updateUserCoin(data.Money)
	    if(data.Ret == 0 ){
	        GameData.toast.show(GameG.GetLocalizedString("退还押注成功"))
	        GameData.bBetted = false
	        GameData.gameLayer.updateBetBtnState()
			GameData.gameLayer.ShowClearBetChip(GameConfig.getUserID())
	        GameData.dtBetRecode = []
			for(leti = 1;i <= 3; ++i){
				GameData.gameLayer.uiRoot.betNum.iBet[i].text = "0"
			}
		} 
		else{
			GameData.toast.show(GameG.GetLocalizedString("清理次数超过上限，清理失败"))
		}
		GameData.bClearReq = null
	},

	//大富豪列表的消息
	HHDZRichestListID(data){
		GameData.gameLayer.SetUserList(data)
	},

	//明燈玩家的消息
	HHDZLuckyStarListID(data){
		GameData.gameLayer.SetUserStar(data)
	},

	//龙虎斗本局局数
	HHDZRoundID(data){
		if (data == null)
			return

		GameData.resultRound = {}
		GameData.resultRound.RoundID = data.RoundID
		GameData.resultRound.HeiWin = data.HeiWin
		GameData.resultRound.HungWin = data.HungWin
		//GameData.gameLayer.updateRound(data.RoundID)
	},

	//- - 发送请求
	HHDZBetID(data){
        let param = {}
		param.BetArr =  data
	    networkQueue.SendMsg(BClass.Game, GameData.gameProto.HHDZBetID, param)
	},

	HHDZBetClearID(){
	    networkQueue.SendMsg(BClass.Game, GameData.gameProto.HHDZBetClearID, null)
	},
};

module.exports = GameControl
