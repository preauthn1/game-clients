//region *.lua
//Date
//此文件由[BabeLua]插件自动生成
//endregion
var G = require("Global")
var GameControl = fmg.class("GameControl")

var GameControl = {
	extends: cc.Component,

//- 构造函数
	GameControl:ctor(){
	    self:initData()
	
	    self:initEvent()
	
	},

//- 清理函数
	GameControl:onExit(){
	    hhdz.gameAudio:stopTurnStep()
	},

//- 初始化监听
	GameControl:initEvent(){
	
//    G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game_HHDZ.hhdzStateID, function(data)
//    end, hhdz.gameName)
	
    // 添加事件监听函数
	    let  event = function(evt){
	        G.NetQ.RegMsgHook(G.Proto.BClass.Game, G.Proto.Game_HHDZ[evt], fmg.handler(self, self[evt]), hhdz.gameName)
	    }
	    
	    event("HHDZSettingID")
	    event("HHDZStateID")
	    event("HHDZBroadCastBetID")
	    event("HHDZGameResultPokerID")
	    event("HHDZGameSceneID")
	    event("HHDZGameResultWinID")
	    event("HHDZBetInfoID")
	    event("HHDZBetRetID")
	    event("HHDZResultCardListID")
	    event("HHDZBetClearRetID")
	    event("HHDZRichestListID")
	    event("HHDZLuckyStarListID")
	    event("HHDZRoundID")
	
	},

//- 初始化数据
	GameControl:initData(){
	//hhdz.IDTitle = "ID:"
		hhdz.IDTitle = ""
	    hhdz.dtBetRecode = []                    // 此局已下注记录
	    hhdz.dtBetRecodeOrg = []                 // 上一局下注记录
	    hhdz.dtBetRecodePrv = null                // 待回应下注记录
	    hhdz.hAdioCoinAdd = []                   // 筹码增加音效列表
	    hhdz.hAddCoin = [0, 0, 0]                // 筹码增加动画列表
	    hhdz.dtBetRate = 1                       // 1注筹码到钱的换算比例
	    hhdz.dtUserBet = null                     // 当前倍数
	    hhdz.bBetted = false                     // 是否下过注
	    hhdz.bAutoBet = false                    // 是否自动下注
	    hhdz.bMidEnter = true                    // 是否是游戏中加入
	    hhdz.breakCoin = 0                       // 断线重连下注数
		hhdz.resultOdd = [1, 8, 1]               // 赔率
	},

//- 更新玩家信息
	GameControl:updateUser(data){
	    hhdz.gameLayer:updateUserInfo(true, data)
	    hhdz.resultLayer:updateUser(data)
	},

//- 设置下注状态 state-0:下注阶段；1:开奖阶段；2:动画阶段；3:等待阶段
	GameControl:SetBetState(state){
	
	    hhdz.dtBetState = state
	    if(state == 0 ){	
	        hhdz.bBetted = false
	        hhdz.bReqUpBanker = false
	        hhdz.bReqDownBanker = false
	        hhdz.bMidEnter = false
	        hhdz.bClearReq = null
	        hhdz.hAdioCoinAdd = []
	        hhdz.BroadBet = []
	        
        // 处理压注
	        hhdz.dtBetRecodePrv = null
	        if(self:coluBetCoin(hhdz.dtBetRecode) > 0 ){ hhdz.dtBetRecodeOrg = fmg.clone(hhdz.dtBetRecode) }
	        hhdz.dtBetRecode = []
	        if(hhdz.bAutoBet ){ self:BetCoinAry(hhdz.dtBetRecodeOrg) }
	
        // 处理筹码
	for(let          j = 1;          j <= 4; ++         j){//        for j=1,4 do
	for(let              i = 1;              i <= hhdz.gameLayer.uiCast[j].length; ++             i){//            for i=1,hhdz.gameLayer.uiCast[j].length do
	                hhdz.poolCast:remove(hhdz.gameLayer.uiCast[j][i])
	            }
	        }
	        hhdz.gameLayer.uiCastIdx = [0, 0, 0,]
	        hhdz.gameLayer.uiCast = [[],[],[],[]]
	
        // 重置ui
        //hhdz.gameLayer.uiRoot.time.betTip.gameObject:SetActive(true)
	        hhdz.gameLayer.uiRoot.time.rstTip.active =(false)
	for(let          i = 1;          i <= 3; ++         i){//        for i=1,3 do
	            hhdz.gameLayer.uiRoot.betNum.iBet[i].text = "0"
	            hhdz.gameLayer:updateAllBetNum(i, 0)
	        }
	
	        hhdz.gameScene:hideHold()
	        hhdz.compare:stopBlinkWinBg()
        //hhdz.gameAudio:bgmNormal()
	        CS.UILoadingData.Hide()
	
	} 
    else if( state >= 1 ){

        //hhdz.gameLayer.uiRoot.time.betTip.gameObject:SetActive(false)
	        hhdz.gameLayer.uiRoot.time.rstTip.active =(false)
	        hhdz.gameLayer:stopBetTimer()
        //hhdz.gameAudio:bgmOpenCard()
	        hhdz.gameAudio:turnStep(3)
	
	    }
	
	    hhdz.gameLayer:updateBetBtnState()
	},

//- 获取下注记录的总钱
	GameControl:coluBetCoin(ary){
	    let coin = 0
	for(let _ in (ary)){ 
	let v = ary[_] 

	        coin = coin + (v.Count || 0)
	    }
	
	    return coin
	},

//- 单个下注
	GameControl:BetCoin(idx){
	    if(hhdz.dtUserBet == null ){ return }
	    let data = [[]]
	    data[1].BetType = idx
	    data[1].Count = hhdz.dtUserBet
	
	    return self:BetCoinAry(data)
	},

//- 数组下注
	GameControl:BetCoinAry(data){
	    
    //if hhdz.dtBetRecodePrv~=nil or hhdz.bClearReq then return end
	    if(hhdz.UserInfo == null ){
	        hhdz.toast:show("当前不能下注", 1.5)
	        return false
	    }
	    if(hhdz.bIBanker ){
	        hhdz.toast:show("庄家不能下注", 1.5)
	        return false
	    }
	
    //
	    let coin = 0
	    let tmp = []
	for(let _ in (data)){ 
	let v = data[_] 

	        coin = coin + v.Count
	        if(v.Count > 0 ){ tmp[tmp+1].length = v }
	    }
	    if(coin <= 0 ){
	        hhdz.toast:show("当前下注倍数为0", 1.5)
	        return
	    }
	
	    if(coin*hhdz.dtBetRate <= hhdz.UserInfo.Score ){
	        hhdz.gameControl:HHDZBetID(tmp)
	        hhdz.dtBetRecodePrv = data
	        return true
	} 
    else{
	        hhdz.toast:show("金币不足，押注失败", 1)
	    }
	
	    return false
	},

//- 初始化牌面
	GameControl:initCard(obj, number, color){
	    if(number==null || number==0 ){
	        number = 0
	        color = 0
	    }
	
	    GameG.SetImageSprite(obj, G.GetGamePName(), "card_"+number+"_"+color, false)
	},

//- - 事件处理
	GameControl:HHDZSettingID(data){
    //print("ftest event HHDZSettingID")
	    fmg.fpack(data)
    //print("<color=#FF0000>ftest2 setting clock="..(os.clock())..";data="..(os.date("%M:%S")).."</color>")
	    hhdz.dtBetRate = data.BetMoney
	    hhdz.svrData.HHDZSettingID = data
	  
	    table.sort(data.BetCount, function (a,b){ return a < b })
	    hhdz.dtUserBet = data.BetCount[1]
	    hhdz.dtBaseBet = data.BetCount
	    hhdz.betlimitmoney = data.betlimitmoney
		hhdz.chooseBet = 1
	    hhdz.gameLayer:updateBetBtns(data.BetCount)
	    hhdz.gameLayer:updateGameInfo(data.BetCount[1],data.BetMax[1])
	    hhdz.chartLayer:updateLimit(data.BetMax[1],data.BetMax[3])
	    hhdz.gameLayer.uiRoot.recharge.text.text = hhdz.betlimitmoney > 0 && "需要携带"+hhdz.betlimitmoney+"元才能下注,请前往充值" || "携带金额不足，请先充值"
	},

	GameControl:HHDZStateID(data){
    //print("ftest event HHDZStateID")
	    fmg.fpack(data)
	    self:SetBetState(data.State)
		
		if(data.State==0 ){
			hhdz.gameLayer:beginBetTimer(data.Time)
		}
		
    // 执行开始动画
	    if(data.State==0 && data.Time>=3 && hhdz.bFirstState0!=1 ){
	        hhdz.gameLayer:animStart()
	        hhdz.gameAudio:turnStep(1)
	} 
    else if( data.State == 1 ){

	        hhdz.gameLayer:stopBetTimer()
	} 
	else if( data.State==0 && data.Time < 3 && hhdz.bFirstState0!=1 ){

			hhdz.compare:playCard()
	    }
	
    // 屏蔽首次进入可能双次收到此消息
	    if(hhdz.bFirstState0 == null ){
	        hhdz.bFirstState0 = 1
	        fmg.delayFunc(function(adt){ hhdz.bFirstState0 = 2 }, 1, [])
	    }
	},

	GameControl:HHDZBroadCastBetID(data){
    //print("ftest event HHDZBroadCastBetID")
	    fmg.fpack(data)
	
    // 是否筹码未连续变动（清除行为/第一次进入）
	for(let bk in (data.BroadCastBetArr)){ 
	let bv = data.BroadCastBetArr[bk] 

	     if(bv.Type<4) {
	        hhdz.gameLayer:updateAllBetNum(bv.Type, bv.Money)
			hhdz.gameLayer:ShowBroadCastBetAll(bv.Type,bv.Money)
	        let coin = 0
	for(let _ in (hhdz.BroadBet){ 
	let lv = hhdz.BroadBet[_] 

	            if(bv.Type == lv.Type ){
	                coin = lv.Money;
	            }
	        }
			
		//hhdz.gameLayer:ShowLuckyStar(bv.Type,bv.LuckyStar)
					
        // 其他玩家投注
        //if coin < bv.Money and hhdz.dtBetRecodePrv==nil then
	        if(coin < bv.Money && data.UserID != GameConfig.getUserID() ){
	            let tmp = bv.Type
	            if(hhdz.hAddCoin[tmp] <= 3 ){
	                hhdz.hAddCoin[tmp] = hhdz.hAddCoin[tmp] + 1
	                hhdz.gameAudio:addCoin()
                /*hhdz.gameLayer:animAddCast({{BetType=bv.Type, Count=(bv.Money-coin)/hhdz.dtBetRate}}, false, function()
                    hhdz.hAddCoin[tmp] = hhdz.hAddCoin[tmp] - 1
                end, true)*/
					
	            }
	//----->需重新編譯程式碼			let sequence = CS.DG.Tweening.DOTween.Sequence()
				let CheckBet = require("CheckBet")
				let BetData, CountData = CheckBet.Init(bv.Money-coin, hhdz.dtBaseBet, hhdz.dtBetRate)
	for(let  i = 1;  i <= BetData.length; ++ i){//			for i=1,BetData.length do
	for(let  j = 1;  j <= CountData[i]; ++ j){//				for j=1,CountData[i] do
	//----->需重新編譯程式碼					sequence:AppendInterval(0.1)
	//----->需重新編譯程式碼					sequence.call( function(){ 
	//----->需重新編譯程式碼						hhdz.gameLayer:ShowCastBetChip(bv.Type,BetData[i],BetData.length - i +1,data.UserID)
	//----->需重新編譯程式碼					})
					}
				}
        // 其他玩家清除操作
	} 
        else if( coin > bv.Money ){

	            hhdz.gameLayer:resetBetCast(bv.Type, bv.Money/hhdz.dtBetRate)
				hhdz.gameLayer:ShowClearBetChip(data.UserID)
	        }
	     }
	    }
	
	    hhdz.bFirstBroadBet = true
	    hhdz.BroadBet = fmg.clone(data.BroadCastBetArr)
	},

	GameControl:HHDZGameResultPokerID(data){
    //print("ftest event HHDZGameResultPokerID")
	    hhdz.gameLayer:animEndBet()
	    fmg.fpack(data)
	    hhdz.dtRstWin = hhdz.CompState(data.HungPoker[1].Number, data.HungPoker[2].Number)
	    self:SetBetState(1)
	    hhdz.bFirstState0 = 2
	    hhdz.resultLayer:setWinRst(hhdz.dtRstWin)
		
		hhdz.resultPoker = []
		hhdz.resultPoker.Win = data.Win
		hhdz.resultPoker.HungZuHe = data.HungZuHe
		hhdz.resultPoker.HeiZuHe = data.HeiZuHe
    //hhdz.chartLayer:addRst(data,data.RoundID,true)
	    ;
	    if(hhdz.bMidEnter != null ){	
	    
	        hhdz.compare:animOpenCards(data, function(){
	         
			    
		
				hhdz.gameLayer:ShowResultPoker(data)
	             hhdz.chartLayer:addRst(data,data.RoundID,true)
	            if(hhdz.chShowRst ){
	                coroutine.resume(hhdz.chShowRst)
	            }
	        })	
	} 
    else{
	        hhdz.gameScene:hold("请等待新一局游戏开始...", 20)
	    }
	},

	GameControl:HHDZGameSceneID(data){
    //print("ftest event HHDZGameSceneID")
	    fmg.fpack(data)
	},

	GameControl:HHDZGameResultWinID(data){
    //print("ftest event HHDZGameResultWinID")
	    fmg.fpack(data)
	    hhdz.breakCoin = 0
	    hhdz.UserInfo.Score = hhdz.UserInfo.Score + data.SelfWin
	    hhdz.resultLayer:update(data)
	    hhdz.chShowRst = coroutine.create(function(){
	        hhdz.gameLayer.hAddUseCoin = hhdz.gameLayer.hAddUseCoin || [obj = hhdz.gameLayer.uiRoot.user.coin, now = hhdz.UserInfo.Score]
	        if(hhdz.gameLayer.dtOpenCardStep != 0 ){
	            coroutine.yield()
	        }
	        hhdz.gameScene:hideHold()
	        hhdz.chShowRst = null
        //hhdz.gameAudio:turnStep(6, {data.SelfWin > 0})
	        hhdz.resultLayer:show(true)
			hhdz.gameLayer.bLockUseCoin = false
			hhdz.gameLayer:showAddCoin(data.SelfWin, 2, 1.7, hhdz.UserInfo.Score)
	        hhdz.resultLayer.hideCall = function(){
            //hhdz.gameAudio:bgmNormal()
	            hhdz.resultLayer.hideCall = null
	        }
	    })
		hhdz.gameLayer:ShowResultWin(data)
	    coroutine.resume(hhdz.chShowRst)
	},

	GameControl:HHDZBetInfoID(data){
    //print("ftest event HHDZBetInfoID")
	    fmg.fpack(data)
	    let coin = 0
	for(let _ in (data.BetInfo)){ 
	let v = data.BetInfo[_] 

	        coin = coin + v.Money
	        hhdz.gameLayer.uiRoot.betNum.iBet[v.Type].text = G.Tool.UserHelper.ToCash(v.Money)
	        hhdz.dtBetRecode[v.Type] = hhdz.dtBetRecode[v.Type] || []
	        hhdz.dtBetRecode[v.Type].BetType = v.Type
	        hhdz.dtBetRecode[v.Type].Count = v.Money/hhdz.dtBetRate + (hhdz.dtBetRecode[v.Type].Count || 0)
        //hhdz.gameLayer:animAddCast({{BetType=v.Type, Count=v.Money/hhdz.dtBetRate}}, false)
	        if(v.Money > 0 ){ hhdz.bBetted = true }
			
			hhdz.gameLayer:ShowBroadCastBetMy(v.Type,hhdz.dtBetRecode[v.Type].Count*hhdz.dtBetRate)
			let CheckBet = require("CheckBet")
			let BetData, CountData = CheckBet.Init(v.Money-coin, hhdz.dtBaseBet, hhdz.dtBetRate)
	for(let  i = 1;  i <= BetData.length; ++ i){//		for i=1,BetData.length do
	for(let  j = 1;  j <= CountData[i]; ++ j){//			for j=1,CountData[i] do
					hhdz.gameLayer:ShowCastBetChip(v.Type,BetData[i],BetData.length - i +1,data.UserID)
				}
			}
	    }
	
	    hhdz.breakCoin = coin
	    hhdz.UserInfo.Score = hhdz.UserInfo.Score - coin
    //hhdz.gameLayer.uiRoot.user.coin.text = G.Tool.UserHelper.ToCash(hhdz.UserInfo.Score)
	    hhdz.gameLayer:updateUserCoin(hhdz.UserInfo.Score)
	    hhdz.gameLayer:updateBetBtnState()
	},

	GameControl:HHDZBetRetID(data){
    //print("ftest event HHDZBetRetID")
	    fmg.fpack(data)
	
	    hhdz.UserInfo.Score = data.Money
	    hhdz.gameLayer:updateUserCoin(data.Money)
		if(data.Ret != 0 ){
	for(let k in (data.BetArr)){ 
	let v = data.BetArr[k] 

				hhdz.gameLayer:ClearBetRetError(v.BetType,v.Count*hhdz.dtBetRate,GameConfig.getUserID())
			}
		}
		
	    if(data.Ret == 0 ){
        //hhdz.toast:show("下注成功")
	        hhdz.bBetted = true
        //hhdz.gameLayer:animAddCast(data.BetArr)
	for(let _ in (data.BetArr)){ 
	let v = data.BetArr[_] 

	            hhdz.dtBetRecode[v.BetType] = hhdz.dtBetRecode[v.BetType] || []
	            hhdz.dtBetRecode[v.BetType].BetType = v.BetType
	            hhdz.dtBetRecode[v.BetType].Count = v.Count + (hhdz.dtBetRecode[v.BetType].Count || 0)
	            hhdz.gameLayer.uiRoot.betNum.iBet[v.BetType].text = G.Tool.UserHelper.ToCash(hhdz.dtBetRecode[v.BetType].Count*hhdz.dtBetRate)
				
				hhdz.gameLayer:ShowBroadCastBetMy(v.BetType,hhdz.dtBetRecode[v.BetType].Count*hhdz.dtBetRate)
				hhdz.gameLayer:ShowCastBetChip(v.BetType,v.Count*hhdz.dtBetRate,hhdz.chooseBet,GameConfig.getUserID())
	        }
	
	} 
    else if( data.Ret == -1 ){

	        hhdz.toast:show("金币不足")
	} 
    else if( data.Ret == -2 ){

	        hhdz.toast:show("下注类型错误")
	} 
    else if( data.Ret == -3 ){

	        hhdz.toast:show("庄家不能下注")
	} 
    else if( data.Ret == -4 ){

	        hhdz.toast:show("总注数超过上限")
	// By Rayon
	} 
    else if( data.Ret == -5 ){

	        hhdz.toast:show("不可同时下注红与黑")
	} 
    else if( data.Ret == -6 ){

			let MinCarryingScore = hhdz.betlimitmoney
	        hhdz.toast:show("携带金币少于" + MinCarryingScore + "无法下注喔!您可以前往充值后再来")
	    }
	    
	
	    hhdz.dtBetRecodePrv = null
	    hhdz.gameLayer:updateBetBtnState()
	},

	GameControl:HHDZResultCardListID(data){
    //print("ftest event HHDZResultCardListID")	
	    fmg.fpack(data)
	    fmg.revertTable(data.CardList)
	for(let      i = 1;      i <= data.CardList.length; ++     i){//    for i=1,data.CardList.length do
	        hhdz.chartLayer:addRst(data.CardList[i],data.CardList[i].RoundID)
	    }
	},

	GameControl:HHDZBetClearRetID(data){
    //print("ftest event HHDZBetClearRetID")
	    fmg.fpack(data)
	    hhdz.UserInfo.Score = data.Money
	    hhdz.gameLayer:updateUserCoin(data.Money)
	    if(data.Ret == 0 ){
	        hhdz.toast:show("退还押注成功")
	        hhdz.bBetted = false
	        hhdz.gameLayer:updateBetBtnState()
			hhdz.gameLayer:ShowClearBetChip(GameConfig.getUserID())
	        hhdz.dtBetRecode = []
	for(let          i = 1;          i <= 3; ++         i){//        for i=1,3 do
	            hhdz.gameLayer.uiRoot.betNum.iBet[i].text = "0"
	        }
	} 
    else{
	        hhdz.toast:show("清理次数超过上限，清理失败")
	    }
	    hhdz.bClearReq = null
	},

//大富豪列表的消息
	GameControl:HHDZRichestListID(data){
		hhdz.gameLayer:SetUserList(data)
	},

//明燈玩家的消息
	GameControl:HHDZLuckyStarListID(data){
		hhdz.gameLayer:SetUserStar(data)
	},

//龙虎斗本局局数
	GameControl:HHDZRoundID(data){
		hhdz.resultRound = []
		hhdz.resultRound.RoundID = data.RoundID
		hhdz.resultRound.HeiWin = data.HeiWin
	    hhdz.resultRound.HungWin = data.HungWin
	},

//- - 发送请求
	GameControl:HHDZBetID(data){
	    fmg.fpack(data)
    //G.Proto.BClass.GameRoom
	    G.NetQ.SendMsg(G.Proto.BClass.Game, hhdz.gameProto.HHDZBetID, [BetArr = data])
	},

	GameControl:HHDZBetClearID(){
	    fmg.fpack(data)
	    G.NetQ.SendMsg(G.Proto.BClass.Game, hhdz.gameProto.HHDZBetClearID, [])
	},

//- 测试
	GameControl:test(){
	
	    if( CS.UnityEngine.Input.GetKeyUp(CS.UnityEngine.KeyCode.Alpha1)){
	        hhdz.testNum = hhdz.testNum && hhdz.testNum+1 || 1
	
	        hhdz.playerList.bNoMaxLen = true
	        let data = [DrawCount=39,FaceID=6,LoseCount=248,NickName="来自火星",Score=274765,SeatNo=0,Sex=0,StateValue=2,TableNo=0,UserID=GameConfig.getUserID(),WinCount=51,]
	for(let          i = -5;          i <=  95; ++         i){//        for i=-5, 95 do
	            let user = fmg.clone(data)
	            user.UserID = user.UserID + i
	            user.NickName = user.NickName+user.UserID
	            hhdz.testuserid = user.UserID
	            hhdz.playerList.dtTableUsers[user.UserID] = []
	            hhdz.playerList.dtTableUsers[user.UserID].user = user
	        }
	
	} 
    else if( CS.UnityEngine.Input.GetKeyUp(CS.UnityEngine.KeyCode.Alpha2)){

	        hhdz.testNum = hhdz.testNum && hhdz.testNum+1 || 1
	        
	        hhdz.testuserid = hhdz.testuserid || 1
	        let data = [DrawCount=39,FaceID=6,LoseCount=248,NickName="来自火星",Score=274765,SeatNo=0,Sex=0,StateValue=2,TableNo=0,UserID=GameConfig.getUserID()+hhdz.testuserid,WinCount=51,]
	        hhdz.testuserid = hhdz.testuserid + 1
	        hhdz.playerList.dtTableUsers[data.UserID] = []
	        hhdz.playerList.dtTableUsers[data.UserID].user = data
	
//        local data = {BroadCastBetArr={{Money= 2,Type=2,},}}
//        self:HHDZBroadCastBetID(data)
	
//         local data = {Time=9,State=hhdz.testNum%2,}
//         self:HHDZStateID(data)
	
	} 
    else if( CS.UnityEngine.Input.GetKeyUp(CS.UnityEngine.KeyCode.Alpha3)){

	        hhdz.testNum = hhdz.testNum && hhdz.testNum+1 || 1
	        
	        hhdz.compare:blinkWinBetBg(hhdz.testNum%3 + 1)
	
//        local data = {Poker={{Color=1,Number=8},{Color=1,Number=2},}}
//        self:HHDZGameResultPokerID(data)
//        local data = {SelfWin=200, WinUserInfo={{UserName="来自火星",Win=200},}, ZhuangWin=0}
//        self:HHDZGameResultWinID(data)
	        
//        hhdz.dtBetRecodePrv = {{BetType=1,Count=5}}
//        local data = {BroadCastBetArr={{Money= 2,Type=2,},}}
//        self:HHDZBroadCastBetID(data)
//        local data = {Money=9999222386,Ret=0}
//        self:HHDZBetRetID(data)
	
//        local data = {BetCount={1,5,10,20,30,},}
//        self:HHDZSettingID(data)
	
	} 
    else if( CS.UnityEngine.Input.GetKeyUp(CS.UnityEngine.KeyCode.Alpha4)){

	} 
    else if( CS.UnityEngine.Input.GetKeyUp(CS.UnityEngine.KeyCode.Alpha5)){

	} 
    else if( CS.UnityEngine.Input.GetKeyUp(CS.UnityEngine.KeyCode.Alpha6)){

	    }
	
	},


};

module.exports = GameControl
