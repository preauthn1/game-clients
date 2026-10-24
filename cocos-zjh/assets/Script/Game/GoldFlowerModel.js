/*
游戏名：炸金花
开发人：农民工10
//*/
var G = require( "Global")
var GameG = require( "GameGlobal")
var uiGoldFlower = require("UIGoldFlower")
var uiHelp = require("UIHelp")
var uiCompare = require("UICompare")
var CheckBet = require("CheckBet")
var TableToStr
// endregion
// 消息tag
var receiveName = G.GetGamePName()
// region方法
var IsPlayerSeat
var GetPlayerSeat
var GetSeatnoToUser
var GetPlayerData
var GetUserCount
var GetSeatnoToPos
var GetPosToSeatno
var IsLookOn
var SortPoker
var UpdatePlayerMoney
var GetBetArrToIndex
var GetBetArrLast
var InitModel
var GetSequence
var KillSequence
var CloseSequence
var OpenCompare
var CloseCompare
// endregion
var maxPlayerNumber = 5
var Call = []   // 方法
// region 网络数据
// currSeatno当前操作的椅子号 currMaxOperTime最大的操作时间 currOperTime剩余操作时间 headHome庄家 BetArr所有的下注额度
var GoldFlowerModelTab = []
// 玩家数据: User用户数据 Cards用户卡牌 lose失败 drop弃牌 check查看 isLook观战
var UserDataList = []
var UserBetMoneyList = [] // 用户已下注的钱
var ZJHDesktopMoney = 0 // 炸金花桌面总钱数
var isAutoReady = false // 是否自动准备
var LeaveUser=[]
// endregion
// endregion
// endregion
var JSPokerData//结算的牌型数据
// endregion
// 动画管理 Sequence
var SequenceDict = []
var autoSequenceKey = 1
var DJS
var djsB
var djsE
var CallbackExit = null

var GoldFlowerModel = {
	extends: cc.Component,

	ShowTab(tips, tab){
		console.log(tips , (tab))
	},

// region 公用方法
// 该座位号是不是自己
	IsPlayerSeat(seat){
		for(let k in (UserDataList)){ 
			let v = UserDataList[k] 

	        if(tonumber(v.User.SeatNo) == tonumber(seat) && (G.User.GetCurrentUserID()).toString() == (k).toString() ){
	            return true
	        }
	    }
	    return false
	},

// 返回自己的数据
	GetPlayerData(){
	    return GetSeatnoToUser(GetPlayerSeat())
	},

// 返回自己的座位号
	GetPlayerSeat(){
		for(let k in (UserDataList)){ 
			let v = UserDataList[k] 

	        if((G.User.GetCurrentUserID()).toString() == (k).toString() ){
	            return tonumber(v.User.SeatNo)
	        }
	    }
	    return 0
	},

// 根据座位号返回玩家数据
	GetSeatnoToUser(seatno){
		for(let k in (UserDataList)){ 
			let v = UserDataList[k] 

	        if(tonumber(v.User.SeatNo) == tonumber(seatno) ){
	            return v
	        }
	    }
	},

// 获取玩家数
	GetUserCount(){
	    let nn = 0
		for(let k in (UserDataList)){ 
			let v = UserDataList[k] 

	        if(tonumber(v.User.StateValue) >= 4 ){
	            nn = nn + 1
	        }
	    }
	    return nn
	},

// 获取玩家正在遊玩数
	GetUserGameCount(){
	   
		console.log("GetUserGameCount")
	    let nn = 0
		for(let k in (UserDataList)){ 
			let v = UserDataList[k] 

	        if(tonumber(v.User.StateValue) == 4 ){
				console.log(G.User.GetCurrentUserID(), (k).toString(),v.lose,v.drop)
				if(v.lose == false ){
					if(v.drop == false ){
						nn = nn + 1
					}
				}
	        }
	    }
	   
		console.log("GetUserGameCount",nn)
	    return nn
	},

// 获取玩家真实位置
	GetSeatnoToPos(seatno){
	    let seftSeatno = GetPlayerSeat()
	    return (seatno + (2-seftSeatno) + maxPlayerNumber) % maxPlayerNumber + 1
	},

// 获取玩家座位号 根据玩家真实位置
	GetPosToSeatno(pos){
	    let seftSeatno = GetPlayerSeat()
	    return (pos - 3 + seftSeatno + maxPlayerNumber) % maxPlayerNumber
	},

// 该玩家是否为旁观
	IsLookOn(userdata){
		return userdata.isLook
		
    // nmg10 20171204【弃用】
	    let num1 = 0//游戏中的人数
	    let num2 = 0//没有在游戏中的人数
		for(let k in (UserDataList)){ 
			let v = UserDataList[k] 

	        if(tonumber(v.User.StateValue) == 4 || tonumber(v.User.StateValue) == 5 ){
	            num1 = num1 + 1
			} 
    	    else{
	            num2 = num2 + 1
	        }
	    }
    // num1 ~= 0 and num2 ~= 0表示有观战的人, userdata.StateValue ~= 4 and userdata.StateValue ~= 5表示观战的是"我"
	    return num1 != 0 && num2 != 0 && userdata.User.StateValue != 4 && userdata.User.StateValue != 5
	},

// 排序
	SortPoker(cards){
	    if(cards != null ){
	        return
	    }
		for(let i = 1; i <= cards.length; ++ i ){
			for(let j = i + 1; j <= cards.length; ++ j ){
	            if ((cards[i].CardNumber > cards[j].CardNumber) || (cards[i].CardNumber == cards[j].CardNumber && cards[i].Color > cards[j].Color)) {
	                cards[i].CardNumber, cards[j].CardNumber = cards[j].CardNumber, cards[i].CardNumber
	                cards[i].Color, cards[j].Color = cards[j].Color, cards[i].Color
	            }
	        }
	    }
	    return cards
	},

// 返回下注对应的索引(用于选择钱的种类)
	GetBetArrToIndex(bet){
	    if(GoldFlowerModelTab.BetArr != null ){
	        return 1
	    }
		for(let i = 1; i <= GoldFlowerModelTab.BetArr.length; ++ i ){
	        if(tonumber(GoldFlowerModelTab.BetArr[i]) == tonumber(bet) ){
	            return i
	        }
	    }
	    return 1
	},

// 返回下注对应的最後索引(用于全押)
	GetBetArrLast(){
	        return GoldFlowerModelTab.BetArr.length
	   
	},

// region 游戏网络接口
// region Send
// 比牌
	SendCompare(data){
	    uiGoldFlower.PlaySound(GetPlayerSeat(), "bipai")
	    uiGoldFlower.OtherUserOperation()
	    G.NetQ.SendMsg(G.Proto.BClass.Game, G.Proto.Game_ZJH.CompareID, data)
	},

// 查看手牌
	SendLookPoker(data){
	    G.NetQ.SendMsg(G.Proto.BClass.Game, G.Proto.Game_ZJH.CheckCardsID, null)
	},

// 弃牌
	SendWaivePoker(data){
	    G.NetQ.SendMsg(G.Proto.BClass.Game, G.Proto.Game_ZJH.DropID, data)	
	},

// 跟注
	SendFollow(data){
	    G.NetQ.SendMsg(G.Proto.BClass.Game, G.Proto.Game_ZJH.FollowID, null)
	},

// 加注
	SendAdd(data){
	    G.NetQ.SendMsg(G.Proto.BClass.Game, G.Proto.Game_ZJH.BetAddID, data)
	},

// 准备
	SendReadyGame(data){
	    console.log("发送准备消息 SendReadyGame time = " + os.date("%c", os.time()))
	    G.NetQ.SendMsg(G.Proto.BClass.GameRoom, G.Proto.GameRoom.GameReadyID, null)
	},

// 换桌
	SendChangeDesk(){
	    G.Service.Game.ChangeDesk()
	},

// 弃牌换桌
	SendEarlyChangeTable(){
	    G.NetQ.SendMsg(G.Proto.BClass.Game, G.Proto.Game_ZJH.EarlyChangeTable, null)
	},

// 提早離開桌子
	SendEarlyLeaveTable(){
	    G.NetQ.SendMsg(G.Proto.BClass.Game, G.Proto.Game_ZJH.EarlyLeaveTable, null)
	},

// 跟注到底
	SendFollowEnd(){
	    G.NetQ.SendMsg(G.Proto.BClass.Game, G.Proto.Game_ZJH.FollowEndID, null)
	},

// 全鴨
	SendAllIn(){
	    G.NetQ.SendMsg(G.Proto.BClass.Game, G.Proto.Game_ZJH.AllinID, null)
	},

// 下底
	CallBetBase(data){
	    G.NetQ.Pause()
	    ZJHDesktopMoney = 0
	    ShowTab("CallBetBase", data)
		for(let k in (UserDataList)){ 
			let v = UserDataList[k] 

	        if(UserBetMoneyList[(v.User.UserID).toString()] != null ){
	            UserBetMoneyList[(v.User.UserID).toString()] = []
	            UserBetMoneyList[(v.User.UserID).toString()].BetMoney = 0
	        }
	        if(tonumber(v.User.StateValue) == 4 ){
	            UserBetMoneyList[(v.User.UserID).toString()].BetMoney = tonumber(UserBetMoneyList[(v.User.UserID).toString()].BetMoney) + tonumber(data.betbase)
	            uiGoldFlower.UpdatePlayerMoneyNumber(v.User.SeatNo)
	        }
	    }
	
	//----->需重新編譯程式碼    uiGoldFlower.UserBetBase(data):OnComplete(function (){ G.NetQ.Resume() })
	    ZJHDesktopMoney = ZJHDesktopMoney + tonumber(data.betbase) * tonumber(data.betcount)
	    uiGoldFlower.UpdateDesktopMoney(tonumber(data.betbase) * tonumber(data.betcount))
		
		console.log("11111111111111111 " + (tonumber(data.betbase).toString() * tonumber(data.betcount)))
	},

// 发牌
	CallFapai(data){
	    ShowTab("CallFapai", data)
	
	    G.NetQ.Pause()
		for(let k in (UserDataList)){ 
			let v = UserDataList[k] 

	        v.lose = false
	        v.drop = false
	        v.check = false
	    }
    // nmg10 todo
	    let isSelectHeadHome = data.bfirst
	    GoldFlowerModelTab.headHome = data.seatno
	    GoldFlowerModelTab.BetArr = data.BetArr
	    if(isSelectHeadHome ){
	//----->需重新編譯程式碼        uiGoldFlower.PlaySelectHeadHome():AppendCallback(function (){
	//----->需重新編譯程式碼        uiGoldFlower.SetHeadHome()
	//----->需重新編譯程式碼        uiGoldFlower.Fapai(true):OnComplete(function (){
	//----->需重新編譯程式碼            GoldFlowerModelTab.FollowEnd = false
	//----->需重新編譯程式碼            uiGoldFlower.SetFollowEnd()
	//----->需重新編譯程式碼            G.NetQ.Resume()
	//----->需重新編譯程式碼            G.Service.Game.SendUserActionCommit("fapai", IsLookOn(GetPlayerData()))
	//----->需重新編譯程式碼            })
	//----->需重新編譯程式碼        })
		} 
		else{
	        uiGoldFlower.SetHeadHome()
	//----->需重新編譯程式碼        uiGoldFlower.Fapai(true):OnComplete(function (){
	//----->需重新編譯程式碼            GoldFlowerModelTab.FollowEnd = false
	//----->需重新編譯程式碼            uiGoldFlower.SetFollowEnd()
	//----->需重新編譯程式碼            G.NetQ.Resume()
	//----->需重新編譯程式碼            G.Service.Game.SendUserActionCommit("fapai", IsLookOn(GetPlayerData()))
	//----->需重新編譯程式碼            })
	    }
	    
	    
	},

// 等待操作
	CallWaitOpt(data){
	    ShowTab("CallWaitOpt", data)
	
	    G.NetQ.Pause()
	    GoldFlowerModelTab.waitOpt = data
	    uiGoldFlower.UserOperation()
	    G.NetQ.Resume()
	},

// 当前操作的椅子号
	CallCurrOpt(data){
	    ShowTab("CallCurrOpt", data)
	    G.NetQ.Pause()
	
	    GoldFlowerModelTab.currSeatno = data.seatno
	    GoldFlowerModelTab.currMaxOperTime = data.optTime
	    GoldFlowerModelTab.currOperTime = data.optTime
	    uiGoldFlower.UserOperationTime()
	
	    G.NetQ.Resume()
	},

// 手牌信息
	CallCardsInfo(data){
	    ShowTab("CallCardsInfo", data)
	    UserDataList[tostring(data.UserID)].Cards = data.Cards
	    uiGoldFlower.UserCardsInfo(GetPlayerSeat())
	},

//比牌結果
	CallCompareRet(data){
	    G.NetQ.Pause()
	    ShowTab("CallCompareRet", data)
	    let v = GetSeatnoToUser(data.faildseatno)
	    v.lose = true
	    uiGoldFlower.CompareCastAddBetBroad(data)
	    let money = tonumber(data.compareMoney) * tonumber(data.odd)
	    
	    v = GetSeatnoToUser(GoldFlowerModelTab.currSeatno)
	    if(UserBetMoneyList[(v.User.UserID).toString()]  != null){
	        UserBetMoneyList[(v.User.UserID).toString()] = []
	        UserBetMoneyList[(v.User.UserID).toString()].BetMoney = 0
	    }
	    UserBetMoneyList[(v.User.UserID).toString()].BetMoney = tonumber(UserBetMoneyList[(v.User.UserID).toString()].BetMoney) + tonumber(money)
	    uiGoldFlower.UpdatePlayerMoneyNumber(GoldFlowerModelTab.currSeatno)
	    	
	    CloseCompare()
	    ZJHDesktopMoney = ZJHDesktopMoney + tonumber(money)
	    uiGoldFlower.UpdateDesktopMoney(tonumber(money))
		console.log("22222222222222 " + (tonumber(money).toString()))
	    uiGoldFlower.SetFollowEnd()
	//----->需重新編譯程式碼    uiGoldFlower.UserCompareAnim(data.winseatno, data.faildseatno):OnComplete(function (){
	//----->需重新編譯程式碼    uiCompare.OpenVS(data):OnComplete(function (){
	//----->需重新編譯程式碼    uiGoldFlower.UserCompareCastBroad(data.winseatno, true)
	//----->需重新編譯程式碼    uiGoldFlower.UserCompareCastBroad(data.faildseatno, false)
	//----->需重新編譯程式碼	uiGoldFlower.CompareFailWaiveChange(data)
	//----->需重新編譯程式碼    G.Service.Game.SendUserActionCommit("compare", IsLookOn(GetPlayerData()))
	//----->需重新編譯程式碼    G.NetQ.Resume()
	//----->需重新編譯程式碼    })
	//----->需重新編譯程式碼    })
	},

// 跟注广播
	CallFollowBrod(data){
	    ShowTab("CallFollowBrod", data)
	    G.NetQ.Pause()
	    let money = tonumber(data.follow) * tonumber(data.odd)
	    let v = GetSeatnoToUser(data.seatno)
	    if(UserBetMoneyList[(v.User.UserID).toString()] != null){
	        UserBetMoneyList[(v.User.UserID).toString()] = []
	        UserBetMoneyList[(v.User.UserID).toString()].BetMoney = 0
	    }
	    UserBetMoneyList[(v.User.UserID).toString()].BetMoney = tonumber(UserBetMoneyList[(v.User.UserID).toString()].BetMoney) + tonumber(money)
	
	    uiGoldFlower.UpdatePlayerMoneyNumber(data.seatno)
	//----->需重新編譯程式碼    uiGoldFlower.UserFollowBroad(data):OnComplete(function (){ G.Service.Game.S}UserActionCommit("bet", IsLookOn(GetPlayerData())) G.NetQ.Resume() })
	    ZJHDesktopMoney = ZJHDesktopMoney + tonumber(money)
	    uiGoldFlower.UpdateDesktopMoney(tonumber(money))
		console.log("333333333333333333 " + (tonumber(money)).toString())
	},

// 加注广播
	CallAddBrod(data){
	    ShowTab("CallAddBrod", data)
	    G.NetQ.Pause()
	    let money = tonumber(data.betadd) * tonumber(data.odd)
	    let v = GetSeatnoToUser(data.seatno)
	    if(UserBetMoneyList[(v.User.UserID).toString()] != null ){
	        UserBetMoneyList[(v.User.UserID).toString()] = []
	        UserBetMoneyList[(v.User.UserID).toString()].BetMoney = 0
	    }
	    UserBetMoneyList[(v.User.UserID).toString()].BetMoney = tonumber(UserBetMoneyList[(v.User.UserID).toString()].BetMoney) + tonumber(money)
	
	    uiGoldFlower.UpdatePlayerMoneyNumber(data.seatno)
	//----->需重新編譯程式碼    uiGoldFlower.UserAddBroad(data):OnComplete(function (){ G.NetQ.Resume() })
	    ZJHDesktopMoney = ZJHDesktopMoney + tonumber(money)
	    uiGoldFlower.UpdateDesktopMoney(tonumber(money))
		console.log("44444444444 " + (tonumber(money)).toString())
	},

// ALL IN广播
	CallAllInBrod(data){
	    ShowTab("CallAllInBrod", data)
	    G.NetQ.Pause()
	    let money = tonumber(data.betadd*data.odd) 
	    let v = GetSeatnoToUser(data.seatno)
	    if(UserBetMoneyList[(v.User.UserID).toString()] != null){
	        UserBetMoneyList[(v.User.UserID).toString()] = []
	        UserBetMoneyList[(v.User.UserID).toString()].BetMoney = 0
	    }
	    UserBetMoneyList[(v.User.UserID).toString()].BetMoney = tonumber(UserBetMoneyList[(v.User.UserID).toString()].BetMoney) + tonumber(money)
	
	    uiGoldFlower.UpdatePlayerMoneyNumber(data.seatno)
	//----->需重新編譯程式碼    uiGoldFlower.UserAllinBroad(data):OnComplete(function (){ G.NetQ.Resume() })
	    ZJHDesktopMoney = ZJHDesktopMoney + tonumber(money)
	    uiGoldFlower.UpdateDesktopMoney(tonumber(money))
		
	},

// 游戏结算 获胜者的钱
	CallGameResult(data){
	    ShowTab("CallGameResult", data)
	    uiGoldFlower.HideHeadHome()
	    uiGoldFlower.HideFollowEnd()
	//----->需重新編譯程式碼    uiGoldFlower.UpdateGameResult(data, JSPokerData):OnComplete(function (){
	//----->需重新編譯程式碼    UserBetMoneyList = []
	//----->需重新編譯程式碼    G.Service.Game.SendUserActionCommit("end", IsLookOn(GetPlayerData()))
	//----->需重新編譯程式碼    })
	},

// 游戏结算 牌型和牌的数据
	CallComparePoker(data){
	    ShowTab("CallComparePoker", data)
	    JSPokerData = data
	},

// 游戏恢复
	CallUserInfoArr(data){
	    ShowTab("CallUserInfoArr", data)
	    G.NetQ.Pause()
	
	    ZJHDesktopMoney = tonumber(data.BetTotal)
	    GoldFlowerModelTab.currMaxOperTime = data.OptTimeTotal
	    GoldFlowerModelTab.currOperTime = data.OptTime
	    GoldFlowerModelTab.headHome = data.ZhuangSeatNO
	    GoldFlowerModelTab.currSeatno = data.CurrOptSeatno
	    GoldFlowerModelTab.BetArr = data.BetArr
	    GoldFlowerModelTab.FollowEnd = null
	    if(data.FollowEnd ){
	        GoldFlowerModelTab.FollowEnd = data.FollowEnd
	    }
		
		// 牌桌中央顯示籌碼數量 By Rayon
		let BetData, CountData = CheckBet.Init(data.BetTotal, GoldFlowerModelTab.BetArr)		
	     
		for(let i = 1; i <= CountData.length; ++ i ){
			uiGoldFlower.AddBroad(BetData[i], CountData[i])
		}
		// 牌桌中央顯示籌碼數量 By Rayon
	    UserBetMoneyList = []
		for(let i = 1; i <= data.UserInfo.length; ++ i ){     
	        if( (data.UserInfo[i].seatno).toString() != "-1") {
	            let v = GetSeatnoToUser(data.UserInfo[i].seatno)
	            UserBetMoneyList[(v.User.UserID).toString()] = []
	            UserBetMoneyList[(v.User.UserID).toString()].BetMoney = data.UserInfo[i].BetMoney
			
		    // 牌桌中央顯示籌碼數量 By Rayon
		    // Note:有時候data.UserInfo[i].BetMoney會取不到值，所以移置上方使用總數
		    /*
		    local BetData, CountData = CheckBet.Init(data.UserInfo[i].BetMoney, GoldFlowerModelTab.BetArr)
		    for i = 1, #CountData, 1 do
			    uiGoldFlower.AddBroad(BetData[i], CountData[i])
		    end
		    *///
		    // 牌桌中央顯示籌碼數量 By Rayon		
			 
	            if (v.User.UserID==G.User.GetCurrentUser().UserID &&  data.UserInfo[i].drop) {
	               uiGoldFlower.FailWaiveChange(data.UserInfo[i].seatno)
	            }
	                v.lose = data.UserInfo[i].comparefailed
         //   end
          //  if data.UserInfo[i].drop then
	                v.drop = data.UserInfo[i].drop
          //  end
          //  if data.UserInfo[i].check then
	                v.check = data.UserInfo[i].check
          //  end
	        }
	    }
		GoldFlowerModelTab.Currturn = data.Currturn
	    uiGoldFlower.RecoverGame(data.Allin)
	    G.NetQ.Resume()
	},

// 弃牌广播
	CallDropBroadCast(data){
	    ShowTab("CallDropBroadCast", data)
	    G.NetQ.Pause()
	    let v = GetSeatnoToUser(data.seatno)
	    v.drop = true
	//----->需重新編譯程式碼    uiGoldFlower.UserDropCastBroad(data.seatno):OnComplete(function (){ G.NetQ.Resume() })
	},

// 看牌广播
	CallCheckCardsBroadCast(data){
	    ShowTab("CallCheckCardsBroadCast", data)
	    let v = GetSeatnoToUser(data.seatno)
	    v.check = true
	    uiGoldFlower.UserLookCastBroad(data.seatno)
	    uiGoldFlower.PlaySound(data.seatno, "kanpai")
	// yukiusagi
		if(GoldFlowerModelTab.PokerType != null ){
	//----->需重新編譯程式碼		let sequence = Call.GetSequence()
	//----->需重新編譯程式碼		sequence:AppendInterval(1)
	//----->需重新編譯程式碼		sequence:AppendCallback( function (){		
	//----->需重新編譯程式碼			if(GoldFlowerModelTab.PokerType == 0 ){
	//----->需重新編譯程式碼				uiGoldFlower.PlaySound(data.seatno, "DanZhang")
	//----->需重新編譯程式碼} 
//----->需重新編譯程式碼			else if( GoldFlowerModelTab.PokerType == 1 ){
//----->需重新編譯程式碼
	//----->需重新編譯程式碼				uiGoldFlower.PlaySound(data.seatno, "DuiZi")
	//----->需重新編譯程式碼} 
//----->需重新編譯程式碼			else if( GoldFlowerModelTab.PokerType == 2 ){
//----->需重新編譯程式碼
	//----->需重新編譯程式碼				uiGoldFlower.PlaySound(data.seatno, "ShunZi")
	//----->需重新編譯程式碼} 
//----->需重新編譯程式碼			else if( GoldFlowerModelTab.PokerType == 3 ){
//----->需重新編譯程式碼
	//----->需重新編譯程式碼				uiGoldFlower.PlaySound(data.seatno, "JinHua")
	//----->需重新編譯程式碼} 
//----->需重新編譯程式碼			else if( GoldFlowerModelTab.PokerType == 4 ){
//----->需重新編譯程式碼
	//----->需重新編譯程式碼				uiGoldFlower.PlaySound(data.seatno, "ShunJin")
	//----->需重新編譯程式碼} 
//----->需重新編譯程式碼			else if( GoldFlowerModelTab.PokerType == 5 ){
//----->需重新編譯程式碼
	//----->需重新編譯程式碼				uiGoldFlower.PlaySound(data.seatno, "BaoZi")
	//----->需重新編譯程式碼			}
	//----->需重新編譯程式碼			GoldFlowerModelTab.PokerType = -1;
	//----->需重新編譯程式碼			}
	//----->需重新編譯程式碼		)
		}	
	// yukiusagi
	},

// 刷新用户当前剩余的钱
	UpdatePlayerMoney(){
		for(let k in (UserDataList)){ 
		let v = UserDataList[k] 

	        uiGoldFlower.UpdatePlayerMoneyNumber(v.User.SeatNo)
	    }
	},

// region 公用网络接口
// 用户进入桌子消息
	CallUserEnter(data){
	    G.NetQ.Pause()
	    CS.UILoadingData.Hide()
	    ShowTab("CallUserEnter", data)
	   
	    if(UserDataList[(data.User.UserID).toString()] != null){
	        UserDataList[(data.User.UserID).toString()] = []
	    }
	    UserDataList[(data.User.UserID).toString()].User = data.User
	    uiGoldFlower.SetPlayerEnter(data.User.SeatNo)
	    if (data.User.UserID == G.User.GetCurrentUser().UserID) {
	        GoldFlowerModelTab.FollowEnd = false
	        uiGoldFlower.SetFollowEnd()
	        G.Tool.UILoading.ShowTxt(G.Room.RoomTips.WaitOtherPlayer, 0)
	    }
	    uiGoldFlower.ChangePlayerState(data.User.SeatNo)
	    UpdatePlayerMoney()
	    G.NetQ.Resume()
	},

// 用户状态改变
	CallUserStateChange(data){
		if (data.User.UserID == G.User.GetCurrentUser().UserID) {
			if(data.User.StateValue == 0) {
				if(CallbackExit != null) {
					CallbackExit()
					return
				}
			}
		}
	    if(G.User.CurrentUserTableNo() == -1 ){
	        InitModel()
	        uiGoldFlower.InitGame()
	        G.Tool.UILoading.ShowTxt(G.Room.RoomTips.Allot, 0)
	        return
	    }
	    G.NetQ.Pause()
	    ShowTab("CallUserStateChange", data)
	    if(UserDataList[(data.User.UserID).toString()] ){
	        UserDataList[(data.User.UserID).toString()].User = data.User
	        uiGoldFlower.ChangePlayerState(data.User.SeatNo)
	        UpdatePlayerMoney()
	        uiGoldFlower.SetLookOn()
	
		} 
		else{
	        console.log("<color=red>Error:Exit && Change</color>")
	    }
	    
	    G.NetQ.Resume()
	},

// 收到游戏开始消息
	CallGameStart(data){
	    CS.UILoadingData.Hide()
	    G.NetQ.Pause()
	    console.log("<color=red>CallGameStart</color>")
		for(let k in (UserDataList)){ 
			let v = UserDataList[k] 

	        v.Cards = null
	        v.lose = false
	        v.drop = false
	        v.check = false
	        v.isLook = false
	    }
	    
	    uiGoldFlower.OpenUI()
	    G.NetQ.Resume()
	},

// 游戏结束消息
	CallGameEnd(data){
	    console.log("<color=red>CallGameEnd</color>")
	    UserBetMoneyList = []
	    ZJHDesktopMoney = 0
	    uiGoldFlower.GameEnd()
	    uiGoldFlower.HideFollowEnd()
	    if (IsLookOn(GetPlayerData())) {
	        G.Tool.UILoading.ShowTxt(G.Room.RoomTips.WaitGameStart, 0)
	    }
	},

	CallGameCurrturn(data){
		ShowTab("CallAllInBrod", data)
	    G.NetQ.Pause()
		GoldFlowerModelTab.Currturn = data.Currturn
		uiGoldFlower.SetRoundText(GoldFlowerModelTab.Currturn)
		G.NetQ.Resume()
	},

	CallUserCardType(data){
		ShowTab("CallUserCardType", data)
	    G.NetQ.Pause()	
		GoldFlowerModelTab.PokerType = data.PokerType
		G.NetQ.Resume()
	},

	IsGameing(){
	    return ZJHDesktopMoney>0
	},

// 其它用户离开桌子消息
	CallUserLeave(data){
	    ShowTab("CallUserLeave", data)
	    let k = (data.User.UserID).toString()
	    uiGoldFlower.SetPlayerExit(data.User.SeatNo)
		uiGoldFlower.SetLookOn()
	    if(UserDataList[k] ){
			UserDataList[k] = null
	    }    
	},

// 观战消息
	CallUserLook(data){
	    ShowTab("CallUserLook", data)
		for(let _ in (UserDataList)){ 
			let v = UserDataList[_] 

	        v.isLook = false
	    }
	    if (data != null && data.UserID != null) {
			for(let _ in (data.UserID)){ 
				let uid = data.UserID[_] 

	            if (UserDataList[(uid).toString()]) {
	                UserDataList[(uid).toString()].isLook = true
	            }
	        }
	    }
	    uiGoldFlower.SetLookOn()
	},

// 动画完成
	CallGameActionFinish(data){
	    ShowTab("CallGameActionFinish", data)
	    CloseSequence()
	    uiGoldFlower.UpdateReadyGame(data)
	},

// 场景初始化
	GameSceneDestory(){
	    console.log("<color=red>GameSceneDestory</color>")
	    uiGoldFlower.InitGame()
	    InitModel()
	},

// 注册消息的处理方法
	RegMsgHook(){
	    G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game_ZJH.BetBaseId, CallBetBase, receiveName)
	    G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game_ZJH.FaPaiId, CallFapai, receiveName)
	    G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game_ZJH.WaitOptID, CallWaitOpt, receiveName)
	    G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game_ZJH.CurrOptID, CallCurrOpt, receiveName)
	    G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game_ZJH.CardsInfo, CallCardsInfo, receiveName)
	    G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game_ZJH.CompareRetID, CallCompareRet, receiveName)
	    G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game_ZJH.FollowBrodCastID, CallFollowBrod, receiveName)
	    G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game_ZJH.BetAddBrodCastID, CallAddBrod, receiveName)
	    G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game_ZJH.GameResultID, CallGameResult, receiveName)
	    G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game_ZJH.ZJHGameSceneID, CallUserInfoArr, receiveName)
	    G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game_ZJH.DropBroadCastID, CallDropBroadCast, receiveName)
	    G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game_ZJH.CheckCardsBroadCastID, CallCheckCardsBroadCast, receiveName)
	    G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game_ZJH.ReadyTime, CallGameActionFinish, receiveName)
	    G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game_ZJH.ComparePokerID, CallComparePoker, receiveName)
	    G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game_ZJH.AllinRetID, CallAllInBrod, receiveName)
		G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game_ZJH.GameCurrturn, CallGameCurrturn, receiveName)
		G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game_ZJH.UserCardType, CallUserCardType, receiveName)
	    G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game_ZJH.AllInSettlement, CallComparePoker, receiveName)
	
	    G.Service.Game.RegUserEnterMsg(CallUserEnter)
	    G.Service.Game.RegUserStateChangeMsg(CallUserStateChange)
	    G.Service.Game.RegGameStartMsg(CallGameStart)
	    G.Service.Game.RegGameEndMsg(CallGameEnd)
	    G.Service.Game.RegUserLeaveMsg(CallUserLeave)
	    G.Service.Game.RegLookOnUserNotify(CallUserLook)
		
		G.Service.Game.RegGameBeginCountDownMsg(uiGoldFlower.StartCountDown)
		G.Service.Game.RegGameBeginCountDownStopMsg(uiGoldFlower.StopCountDown)
	
    // 注册游戏场景初始化方法,只有在断线重连时有意义
	    G.Service.Game.RegNotifyGameSceneInit( function(){ GameSceneDestory() } )
	},

// 回收当前页面注册的消息
	Close(){
	    G.NetQ.RemoveMsgHookByGroup(receiveName)
	    UserDataList = []
	    CloseSequence()
	    GameG.RemoveCountDown("UserCompareTime")
	    GameG.RemoveCountDown("UserOperationTime")
	},

// 打开比牌界面
	OpenCompare(){
    //G.Tool.UILoading.ShowTxt("选择牌组进行比牌……", 0)
	    uiCompare.OpenCompare()
	},

// 关闭比牌界面
	CloseCompare(){
	    uiCompare.CloseUI()
	},

// 初始化数据
	InitModel(){
	    CloseSequence()
	    GoldFlowerModelTab = []
		GoldFlowerModelTab.IDTitle = ""//"ID:"
	    UserDataList = []
	// 初始化時不再重設自動，維持上一場設定 By Rayon
    //isAutoReady = false
	    UserBetMoneyList = []
	    ZJHDesktopMoney = 0
	    JSPokerData = null
	    GameG.RemoveCountDown("UserCompareTime")
	    GameG.RemoveCountDown("UserOperationTime")
	    GameG.RemoveCountDown("ReadyGameTime")
	    GameG.RemoveCountDown("AutoReadyGameTime")
	},

// 获取Sequence，key为空就自动索引加1
	GetSequence(key){
	    if(key != null ){
	        key = "AutoSequenceKey_" + autoSequenceKey
	        autoSequenceKey = autoSequenceKey + 1
	    }
	    if(SequenceDict[key] != null ){
	//----->需重新編譯程式碼        SequenceDict[key] = CS.DG.Tweening.DOTween.Sequence()
	    }
	    return SequenceDict[key]
	},

// 关闭Sequence
	KillSequence(key){
	    if(SequenceDict[key] ){
	//----->需重新編譯程式碼        SequenceDict[key]:Kill()
	    }
	    SequenceDict[key] = null
	},

// 关闭所有Sequence
	CloseSequence(){
		for(let k in (SequenceDict)){ 
			let v = SequenceDict[k] 

	//----->需重新編譯程式碼        v:Kill()
	    }
	    SequenceDict = []
	    autoSequenceKey = 1
	},

// 测试倒计时
	DJS(b){
	    if(b ){
	        djsB = os.time()
		} 
    	else{
	        djsE = os.time()
	        if(djsB ){
	            console.log("\n\n************************************\ndjsB = " + os.date("%c", djsB) + ", djsE = " + os.date("%c", djsE) + ", time = " + djsE - djsB + "\n\n************************************\n")
	        }
	    }
	},

	SetCallbackExit(callback){
		CallbackExit = callback
	},


};

module.exports = GoldFlowerModel
