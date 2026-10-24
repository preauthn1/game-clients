var G = require( "Global")
var goldFlowerModel = require("GoldFlowerModel")
var UIPlayer = require("UIPlayer")
//----->需重新編譯程式碼var DOTween = CS.DG.Tweening.DOTween
//- 以上内容为工具脚本自动生成，请不要在这之上做任何修改//-
// region 方法
var OnCompareButton
var OnWaiveButton
var OnLookButton
var OnFollowButton
var OnAddButton
var OnBetBaseButton
var OnAddValueButton
var SetAddNode
var HideAddNode
var OnReadyGame
var OnChangeButton
var CallSetHeadHome
var CallFapai
var ShowReadyTime
var OnAutoReadyButton
var OnNoAutoReadyButton
var OnExitButton
// endregion
// region UI
var RectOperation // 操作节点
var CompareButton // 比牌
var CompareNo
var WaiveButton   // 弃牌
var LookButton    // 查看
var FollowButton  // 跟注
var AddButton     // 加注
var AddNode
var AddNumButton1
var AddNumButton2
var AddNumButton3
var AddNumButton4
var JackpotMoney  // 桌面的钱
var RectWinCalc   // 结算节点
var RectOperation // 操作节点
var RectReadyGame // 准备节点
var RectWaiveChange // 弃牌换桌节点
var ReadyGame     // 准备按钮
var ChangeButton  //  换桌按钮
var WaiveChangeButton  //  弃牌换桌按钮
var ReadyTime1     // 准备倒计时
var ReadyTime2     // 自动准备倒计时
var HeadHomeIcon  // 庄家标记
var SelectHeadHome// 选庄框
var MoneyPrefab = []  // 下注的筹码
var MoneyPrefabNode
var MoneyCull = []     // 桌面的筹码cull总数
var AutoReadyButton
var NoAutoReadyButton
var CompareNode1
var CompareNode2
var ExitButton	// 離開遊戲按鈕 yukiusagi
var RoundText
var FireObj = []
var CountText
var CountTextBG
var NowAllIn = false
// endregion
// region 数据
var maxPlayerNumber = 5
var isShowAddNode = false
var playerPos = []
var playerEffectPos = []
var headHomePos = [cc.v3(465, 205, 0), cc.v3(590, -33, 0), cc.v3(-258, -110, 0), cc.v3(-500, -33, 0), cc.v3(-375, 205, 0)]
var uiPlayer = []
// endregion
var isSendEarlyLeaveTable = false
var operTime
var bufSound = []

var UIGoldFlower = {
	extends: cc.Component,

// 初始化UI
	InitUI(th){
	    root = cc.find("UIGoldFlower",th)
	
	    let TopNode = cc.find("TopNode",this)
	    G.Service.Game.InitGameTopMenu(TopNode)
		
		G.Service.Game.SetCallbackExit(function(event){
			if(isSendEarlyLeaveTable == false ){
				goldFlowerModel.Call.SendEarlyLeaveTable()
	
				isSendEarlyLeaveTable = true
				setTimeout(function () {
					GameG.ExitGame();
				}.bind(this), 0.4 * 1000);
			}
	
   // goldFlowerModel.Call.SetCallbackExit(event)
	     
//		if(RectWaiveChange.gameObject.activeSelf) then	
	
//			//goldFlowerModel.Call.SendEarlyChangeTable()
//			//goldFlowerModel.Call.SetCallbackExit(event)
	
//		else
//         //   goldFlowerModel.Call.SendEarlyChangeTable()
//			//event()
//		end
		})	
		
	    let RoomText = cc.find("RoomTextBG/RoomText",this).getComponent(cc.Label)
	    RoomText.text = G.Tool.UserHelper.ToCash(G.Room.GetRoomInfo().BaseScore)
    //RoomText.text = "底分：" .. G.Tool.UserHelper.ToCash(G.Room.GetRoomInfo().BaseScore)
		
		RoundText = cc.find("RoundText",this).getComponent(cc.Label)
		SetRoundText(0)
	
	    uiPlayer = []
	    MoneyCull = []
		for(let i = 1; i <= maxPlayerNumber; ++ i ){
			playerPos[i] = cc.find("RectPlayer/Player",this + i).position
			playerEffectPos[i] = cc.find("RectPlayer/Player",this + i + "/HeadImage").position
	        uiPlayer[i] = new UIPlayer(cc.find("RectPlayer/Player" + i, this.transform))
	        uiPlayer[i].InitUI(i)
	    }
	
	    MoneyPrefab[1] = cc.find("MoneyPrefab1",this)
	    MoneyPrefab[2] = cc.find("MoneyPrefab2",this)
	    MoneyPrefab[3] = cc.find("MoneyPrefab3",this)
	    MoneyPrefab[4] = cc.find("MoneyPrefab4",this)
	    MoneyPrefabNode = cc.find("MoneyPrefabNode",this)
	
	    CompareNode1 = cc.find("CompareNode1",this)
	    CompareNode2 = cc.find("CompareNode2",this)
	    CompareNode1.active =(false)
	    CompareNode2.active =(false)
	
	    RectWinCalc = cc.find("RectWinCalc",this)
	    RectOperation = cc.find("RectOperation",this)
	    RectReadyGame = cc.find("RectReadyGame",this)
		RectWaiveChange = cc.find("RectWaiveChange",this)
	    ReadyGame = cc.find("RectReadyGame/ReadyGame",this).getComponent(cc.Button)
	    ChangeButton = cc.find("RectReadyGame/ChangeButton",this).getComponent(cc.Button)
	    ReadyTime1 = cc.find("RectReadyGame/TimeBG1/ReadyTime",this).getComponent(cc.Label)
	    ReadyTime2 = cc.find("RectReadyGame/TimeBG2/ReadyTime",this).getComponent(cc.Label)
		WaiveChangeButton = cc.find("RectWaiveChange/ChangeButton",this).getComponent(cc.Button)
	    ReadyGame.node.on('click', function(){
			OnReadyGame()
			GameG.PlayGameSound("se_click")
		})
		ChangeButton.node.on('click', function(){
			OnChangeButton()
			GameG.PlayGameSound("se_click")
		})
		WaiveChangeButton.node.on('click', function(){
			OnWaiveChangeButton()
			GameG.PlayGameSound("se_click")
		})
	    HeadHomeIcon = cc.find("RectPlayer/HeadHomeIcon",this)
	    SelectHeadHome = cc.find("RectPlayer/SelectHeadHome",this)
	    AutoReadyButton = cc.find("RectReadyGame/AutoReadyButton",this).getComponent(cc.Button)
	    NoAutoReadyButton = cc.find("RectReadyGame/NoAutoReadyButton",this).getComponent(cc.Button)
		AutoReadyButton.node.on('click', function (){ 
			GameG.PlayGameSound("se_click")
			OnAutoReadyButton() 
		})
	    NoAutoReadyButton.node.on('click', function (){ 
			GameG.PlayGameSound("se_click")
			OnNoAutoReadyButton() 
		})	
	    CompareButton = cc.find("RectOperation/CompareButton",this).getComponent(cc.Button)
	    CompareNo = cc.find("RectOperation/CompareNo",this)
    //WaiveButton = this.transform:Find("RectOperation/WaiveButton"):GetComponent("Button")
    //LookButton = this.transform:Find("RectOperation/LookButton"):GetComponent("Button")
	    FollowButton = cc.find("RectOperation/FollowButton",this).getComponent(cc.Button)
	    AddButton = cc.find("RectOperation/AddButton",this).getComponent(cc.Button)
	    AllInButton = cc.find("RectOperation/AllInButton",this).getComponent(cc.Button)
	    BetButton = cc.find("RectOperation/BetButton",this).getComponent(cc.Button)
	    FollowNode = cc.find("RectPlayer/Player3/FollowNode",this)
	// yukiusagi
		WaiveButton = cc.find("RectPlayer/Player3/WaiveButton",this).getComponent(cc.Button)
		LookButton = cc.find("RectPlayer/Player3/LookButton",this).getComponent(cc.Button)
		ExitButton = cc.find("RectReadyGame/ExitButton",this).getComponent(cc.Button)
		ExitButton.node.on('click', function(){
			OnExitButton()
			GameG.PlayGameSound("se_click")
		})		
		
		for(let  i  =  1;  i  <=  2; ++ i ){
			if(i < 3 ){			
				obj = cc.find("FireAnime_"+i,this)
			} 
			else{
				obj = cc.find("FireAnime_"+i,th)
			}
			FireObj[i] = obj
			
		// 利用火焰不同的播放速度錯開動畫
			let childrenlength = obj.children.length
			for(let j = 0; j <= childrenlength - 1; ++ j ){		
				let item = obj.children[j]
				anim = item.getComponent(cc.AnimationController)
				speed = 1 - (0.3 - math.random() * 0.6)
			//print("speed " .. speed)
				anim.speed = speed
			}
	    }	
		
		CountTextBG = cc.find("CountTimeBG",th)
		CountText = cc.find("CountTimeBG/CountTime",th).getComponent(cc.Label)
		CountTextBG.active =(false)
	// yukiusagi
	
	    JackpotMoney = cc.find("JackpotBG/JackpotMoney",this).getComponent(cc.Label)
	
	    AddNode = cc.find("RectOperation/AddNode",this)
	    AddNumButton1 = cc.find("RectOperation/AddNumButton1",this).getComponent(cc.Button)
	    AddNumButton2 = cc.find("RectOperation/AddNumButton2",this).getComponent(cc.Button)
	    AddNumButton3 = cc.find("RectOperation/AddNumButton3",this).getComponent(cc.Button)
	    AddNumButton4 = cc.find("RectOperation/AddNumButton4",this).getComponent(cc.Button)
	    AddNode.active =(false)
	    AddNumButton1.node.on('click', function (){ 
			GameG.PlayGameSound("se_click")
			OnAddValueButton(1) 
		})

	    AddNumButton2.node.on('click', function (){ 
			GameG.PlayGameSound("se_click")
			OnAddValueButton(2) 
		})

	    AddNumButton3.node.on('click', function (){ 
			GameG.PlayGameSound("se_click")
			OnAddValueButton(3) 
		})

	    AddNumButton4.node.on('click', function (){ 
			GameG.PlayGameSound("se_click")
			OnAddValueButton(4) 
		})

    //this.transform:Find("RectOperation/AddNode/AddTouch"):GetComponent("Button"):AddClickListener(function () HideAddNode() end)
		AddButton.active =(false)
	
		CompareButton.node.on('click', function(){
			GameG.PlayGameSound("se_click")
			OnCompareButton ()
		})
	    WaiveButton.node.on('click', function(){
			GameG.PlayGameSound("se_click")
			OnWaiveButton()
		})
	    LookButton.node.on('click', function(){
			GameG.PlayGameSound("se_click")
			OnLookButton()
		})
	    FollowButton.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			OnFollowButton()
		})
	    AddButton.node.on('click', function(){
			GameG.PlayGameSound("se_click")
			OnAddButton()
		})
		BetButton.node.on('click', function(){
			GameG.PlayGameSound("se_click")
			OnAddButton()
		})
	    AllInButton.node.on('click', function(){
			GameG.PlayGameSound("se_click")
			OnAllInButton()
		})
		
		BetButton.active =(false)
	},

	StartCountDown(data){
		goldFlowerModel.Call.KillSequence("CountDownTime")
		CountTextBG.active =(true)
		let ReadySequence = goldFlowerModel.Call.GetSequence("CountDownTime")
		
		for(let i = data.Time; i <= 0; ++ i ){
	//----->需重新編譯程式碼		ReadySequence:AppendCallback(
	//----->需重新編譯程式碼			function (){
	//----->需重新編譯程式碼				CountText.text = string.format("%d", i)				
	//----->需重新編譯程式碼			}
	//----->需重新編譯程式碼		)
	//----->需重新編譯程式碼		ReadySequence:AppendInterval(1)
		}
	
	//----->需重新編譯程式碼	ReadySequence:OnComplete( function(){
	//----->需重新編譯程式碼        CountTextBG.active =(false)
	//----->需重新編譯程式碼    })
		
	},

	StopCountDown(){	
		goldFlowerModel.Call.KillSequence("CountDownTime")
		CountTextBG.active =(false)
	},

	CloseFireAnime(){
	for(let  i  =  1;  i  <=  2; ++ i ){
			FireObj[i].active =(false);
	    }
		G.Tool.Sound.CloseLoopSound("drums2")
	},

	OpenFireAnime(){
		let bk = cc.find("背景",this)
		let sc = bk.rect.width / 1336
		
		if(FireObj[1].visible ){
			return;
		}
		
	for(let  i  =  1;  i  <=  2; ++ i ){
			FireObj[i].active =(true);
			FireObj[i].scale = cc.v3(8 * sc, 8 * sc, 1)
	    }
	
		let sequence = goldFlowerModel.Call.GetSequence()	
		G.Tool.Sound.PlayGameSound("drums1")
	//----->需重新編譯程式碼	sequence:AppendInterval(2.8)
	//----->需重新編譯程式碼    sequence:AppendCallback(
	//----->需重新編譯程式碼		function (){
	//----->需重新編譯程式碼			G.Tool.Sound.PlayGameSound("drums2", true)
	//----->需重新編譯程式碼		}
	//----->需重新編譯程式碼	)	
	},

// 清除游戏桌面的钱币UI
	CloseMoneyCull(){
		for(let i = MoneyCull.length; i <=  1; ++ i ){
	        MoneyCull[i].destroy();
	        table.remove(MoneyCull, i)
	    }
	    MoneyCull = []
	},

// 初始化游戏
	InitGame(){
		for(let i = 1; i <= maxPlayerNumber; ++ i ){
	        uiPlayer[i].HideUI()
	    }
	    CloseMoneyCull()
	    JackpotMoney.text = "0"
	    RectOperation.active =(false)
	    RectReadyGame.active =(false)
	    RectWinCalc.active =(false)
	    HeadHomeIcon.active =(false)
		RectWaiveChange.active =(false)
	// yukiusagi
		LookButton.active =(false)	
		SetRoundText(0)
		CloseFireAnime()
		NowAllIn = false
	// yukiusagi
	},

// 恢复游戏
	RecoverGame(AllinAnime){
		for(let i = 1; i <= maxPlayerNumber; ++ i ){
	        uiPlayer[i].HideUI()
	    }
		for(let k in (goldFlowerModel.UserDataList)){ 
			let v = goldFlowerModel.UserDataList[k] 

	        let i = goldFlowerModel.Call.GetSeatnoToPos(v.User.SeatNo)
	        uiPlayer[i].SetPlayerEnter(v.User.SeatNo)
	        uiPlayer[i].RecoverGame(v.User.SeatNo)
	
	        if (v.User.UserID==G.User.GetCurrentUser().UserID) {
	
	         LookButton.active =( v.check != true);
	        }
	
	
	    }
	
	    UpdateDesktopMoney(0)
	    CallSetHeadHome()
	    UserOperationTime()
	    SetFollowEnd()
	// yukiusagi	
		SetRoundText(goldFlowerModel.GoldFlowerModelTab.Currturn)
		if(AllinAnime ){
			OpenFireAnime()
		}
		NowAllIn = AllinAnime
	// yukiusagi
	},

// 旁观者
	SetLookOn(){
		for(let k in (goldFlowerModel.UserDataList)){ 
			let v = goldFlowerModel.UserDataList[k] 

	        let i = goldFlowerModel.Call.GetSeatnoToPos(v.User.SeatNo)
	        uiPlayer[i].SetLookOn(v.User.SeatNo, goldFlowerModel.Call.IsLookOn(v))
	        ChangePlayerState(v.User.SeatNo)
	    }
	},

// 准备开始游戏
	OpenHintUI(){
		for(let i = 1; i <= maxPlayerNumber; ++ i ){
	        uiPlayer[i].HideUI()
	    }
	    G.Tool.UILoading.ShowTxt("匹配中……", 0)
	    JackpotMoney.text = "0"
	    RectOperation.active =(false)
	    RectReadyGame.active =(false)
	    RectWinCalc.active =(false)
		RectWaiveChange.active =(false)
	// yukiusagi
		LookButton.active =(false)	
		CloseFireAnime()
		NowAllIn = false
	// yukiusagi
	},

// 开始游戏
	OpenUI(){
		for(let i = 1; i <= maxPlayerNumber; ++ i ){
	        uiPlayer[i].HideUI()
	    }
		for(let k in (goldFlowerModel.UserDataList)){ 
			let v = goldFlowerModel.UserDataList[k] 

	        SetPlayerEnter(v.User.SeatNo)
	    }
	    HideAddNode()
		StopCountDown()
	},

// 设置玩家进入UI
	SetPlayerEnter(seatno){
	    let i = goldFlowerModel.Call.GetSeatnoToPos(seatno)
	    uiPlayer[i].SetPlayerEnter(seatno)
	},

// 设置玩家离开
	SetPlayerExit(seatno){
	    let i = goldFlowerModel.Call.GetSeatnoToPos(seatno)
	    
	    uiPlayer[i].SetPlayerExit(seatno)
	},

// 玩家状态改变
	ChangePlayerState(seatno){
	    let i = goldFlowerModel.Call.GetSeatnoToPos(seatno)
	    uiPlayer[i].ChangePlayerState(seatno)
	},

// 准备游戏
	UpdateReadyGame(data){
	    let u = goldFlowerModel.Call.GetPlayerData()
	    HeadHomeIcon.active =(false)
	    if(tonumber(u.User.StateValue) != 3 ){
	        goldFlowerModel.Call.DJS(true)
	
	        RectReadyGame.active =(true)
	        let ReadySequence = goldFlowerModel.Call.GetSequence("ReadyGameTime")
			for(let i = tonumber(data.ReadyTime); i <=  1; ++ i ){
	//----->需重新編譯程式碼            ReadySequence:AppendCallback(function (){
	//----->需重新編譯程式碼            ReadyTime1.text = "" + math.ceil(i)
	//----->需重新編譯程式碼            })
	//----->需重新編譯程式碼            ReadySequence:AppendInterval(1)
	        }
	//----->需重新編譯程式碼        ReadySequence:OnComplete( function(){
	//----->需重新編譯程式碼        goldFlowerModel.Call.DJS(false)
	//----->需重新編譯程式碼        if(goldFlowerModel.isAutoReady ){
	//----->需重新編譯程式碼            OnReadyGame()
	//----->需重新編譯程式碼} 
//----->需重新編譯程式碼        else{
	//----->需重新編譯程式碼            G.Service.Game.ExitGame()
	//----->需重新編譯程式碼        }
	//----->需重新編譯程式碼        })
	        let AutoReadySequence = goldFlowerModel.Call.GetSequence("AutoReadyGameTime")
	        let autoTime = G.GameConfig.GetAutoReadyCountNum()
			for(let i = tonumber(autoTime); i <= 1; ++ i ){
	//----->需重新編譯程式碼            AutoReadySequence:AppendCallback(function (){
	//----->需重新編譯程式碼            ReadyTime2.text = "" + math.ceil(i)
	//----->需重新編譯程式碼            })
	//----->需重新編譯程式碼            AutoReadySequence:AppendInterval(1)
	        }
	//----->需重新編譯程式碼        AutoReadySequence:OnComplete( function(){
	//----->需重新編譯程式碼        goldFlowerModel.Call.DJS(false)
	//----->需重新編譯程式碼        if(goldFlowerModel.isAutoReady ){
	//----->需重新編譯程式碼            OnReadyGame()
	//----->需重新編譯程式碼        }
	//----->需重新編譯程式碼        })
	
	        SetReadyUI()
	    }
	},

// 设置准备界面
	SetReadyUI(){
	    let b = false
	    if(goldFlowerModel.isAutoReady ){
	        b = true
	    }
	    ChangeButton.active =(b == false)
    //ReadyGame.active =(not b)
		ReadyGame.active =(false)
    //AutoReadyButton.active =(not b)
		AutoReadyButton.active =(false)
    //NoAutoReadyButton.active =(b)
		NoAutoReadyButton.active =(false)
	    cc.find("RectReadyGame/TimeBG1", this.node).active =(b == false)
	    cc.find("RectReadyGame/TimeBG2", this.node).active =(b)
		ExitButton.active =(b == false) // yukiusagi
	},

// 一局游戏结束
	GameEnd(){
	    CloseMoneyCull()
	    HeadHomeIcon.active =(false)
	    RectWinCalc.active =(false)
	    RectWaiveChange.active =(false)
	    UpdateDesktopMoney(0)
		for(let k in (goldFlowerModel.UserDataList)){ 
			let v = goldFlowerModel.UserDataList[k] 

	        SetPlayerEnter(v.User.SeatNo)
	        ChangePlayerState(v.User.SeatNo)
	    }
		for(let k in (goldFlowerModel.LeaveUser)){ 
			let v = goldFlowerModel.LeaveUser[k] 

			let i = goldFlowerModel.Call.GetSeatnoToPos(k)
	    
	        uiPlayer[i].Hide(k)
	    }
	    goldFlowerModel.LeaveUser=[]
	},

// 选庄家
	PlaySelectHeadHome(){
	    let sequence = goldFlowerModel.Call.GetSequence()
	    let ss
	    SelectHeadHome.active =(true)
	    let selectHHT = 1.5 //选庄1.5秒动画
	    let step = selectHHT / (5 * goldFlowerModel.Call.GetUserCount())
		for(let      i  =  1;      i  <=  5; ++     i ){
			for(let k in (goldFlowerModel.UserDataList)){ 
				let v = goldFlowerModel.UserDataList[k] 

	            if(v.User.StateValue < 4 ){
                // 未入座
				} 
				else{
	                ss = v.User.SeatNo
	                let pos = goldFlowerModel.Call.GetSeatnoToPos(ss)
	//----->需重新編譯程式碼                sequence:App}Callback(function (){ SelectHeadHome.position = playerEffectPos[tonumber(pos)] })
	//----->需重新編譯程式碼                sequence:AppendInterval(step)
	            }
	        }
	    }
	    if(tonumber(ss) != tonumber(goldFlowerModel.GoldFlowerModelTab.headHome) ){
	        ss = goldFlowerModel.GoldFlowerModelTab.headHome
	        let pos = goldFlowerModel.Call.GetSeatnoToPos(ss)
	//----->需重新編譯程式碼        sequence:App}Callback(function (){ SelectHeadHome.position = playerEffectPos[tonumber(pos)] })
	//----->需重新編譯程式碼        sequence:AppendInterval(0.2)
	    }
	//----->需重新編譯程式碼    sequence:AppendInterval(0.5)
	//----->需重新編譯程式碼    sequence:AppendCallback(function (){
	//----->需重新編譯程式碼    SelectHeadHome.active =(false)
	//----->需重新編譯程式碼    })
	    return sequence
	},

// 发牌
	Fapai(isPlay){	
	    return CallFapai(isPlay)	
	},

	CallFapai(isPlay){
	    let sequence = goldFlowerModel.Call.GetSequence()
	    let i = 0
	
	    let shunS = []
		for(let k in (goldFlowerModel.UserDataList)){ 
			let v = goldFlowerModel.UserDataList[k] 

	        if(v.User.StateValue < 4 ){
            // 未入座
			} 
      		else{
	            shunS[tostring(v.User.SeatNo)] = 1
	        }
	    }
	
	    G.Tool.Sound.PlayGameSound("fapai")
    // 庄家的下一家开始发牌，顺时针发牌
	    let curr = tonumber(goldFlowerModel.GoldFlowerModelTab.headHome)
	    let animTime = 0.5
	    let stepT = 0
		for(let j  =  1; j <= maxPlayerNumber; ++ j ){
	        let seatno = tonumber(tonumber(curr) + tonumber(j)) % tonumber(maxPlayerNumber)
	        if(shunS[tostring(seatno)] ){
	            let i = goldFlowerModel.Call.GetSeatnoToPos(seatno)
	            if(isPlay ){
	                sequence = uiPlayer[i].CallFapai(isPlay, seatno, sequence)
	//----->需重新編譯程式碼                sequence:AppendInterval(-(animTime + stepT))
				} 
          		else{
	                uiPlayer[i].CallFapai(isPlay, seatno, sequence)
	            }
	        }
	    }
	    if(isPlay ){
	//----->需重新編譯程式碼        sequence:AppendInterval(2)
	    }
	    return sequence
	},

// 设置玩家跟注到底
	SetFollowEnd(){
	    let seatno = goldFlowerModel.Call.GetPlayerSeat()
	    let i = goldFlowerModel.Call.GetSeatnoToPos(seatno)
	    uiPlayer[i].SetFollowEnd(seatno)
	},

// 隐藏跟到底UI
	HideFollowEnd(){
	    let seatno = goldFlowerModel.Call.GetPlayerSeat()
	    let i = goldFlowerModel.Call.GetSeatnoToPos(seatno)
	    uiPlayer[i].HideFollowEnd(seatno)
		WaiveButton.active =(false)
	},

// 更新玩家钱
	UpdatePlayerMoneyNumber(seatno){
	    let i = goldFlowerModel.Call.GetSeatnoToPos(seatno)
	    uiPlayer[i].UpdatePlayerMoneyNumber(seatno)
	},

// 隐藏庄家
	HideHeadHome(){
	    HeadHomeIcon.active =(false)
	},

// 设置庄家
	SetHeadHome(){
	    CallSetHeadHome()
	},

// 设置庄家
	CallSetHeadHome(){
	    if(goldFlowerModel.GoldFlowerModelTab.headHome ){
	        let pos = goldFlowerModel.Call.GetSeatnoToPos(goldFlowerModel.GoldFlowerModelTab.headHome)
	        HeadHomeIcon.active =(true)
	        HeadHomeIcon.position = playerEffectPos[pos] + cc.v3(-50, 50, 0)
	    }
	},

// 用户可操作的功能
	UserOperation(){
	    RectOperation.active =(true)
		
	    if(goldFlowerModel.GoldFlowerModelTab.waitOpt.compare ){
        //CompareButton.active =(true)
        //CompareNo.active =(false)
			goldFlowerModel.Call.OpenCompare()
	} 
    else{
        //CompareButton.active =(false)
        //CompareNo.active =(true)
			goldFlowerModel.Call.CloseCompare()
	    }
	
	/* 20180903 yukiusagi
    if goldFlowerModel.GoldFlowerModelTab.waitOpt.drop then
        WaiveButton.active =(true)
    else
        WaiveButton.active =(false)
    end
	
    if goldFlowerModel.GoldFlowerModelTab.waitOpt.check then
        LookButton.active =(true)
    else
        LookButton.active =(false)
    end*/ // yukiusagi
	     
	    if(goldFlowerModel.GoldFlowerModelTab.waitOpt.allin ){
	        AllInButton.active =(true)
	} 
    else{
	        AllInButton.active =(false)
	    }
	
	    if(goldFlowerModel.GoldFlowerModelTab.waitOpt.fill ){
	        FollowButton.active =(true)       
	} 
    else{
	        FollowButton.active =(false)       
	    }
		
    /*if goldFlowerModel.GoldFlowerModelTab.waitOpt.betadd and #(goldFlowerModel.GoldFlowerModelTab.waitOpt.betaddvalue) > 0 and goldFlowerModel.GoldFlowerModelTab.waitOpt.first == false then
		AddButton.active =(true)       
    else
		AddButton.active =(false)
    end*/
    // 每局的第一次操作没有跟注
	    if(goldFlowerModel.GoldFlowerModelTab.waitOpt.first ){
	        FollowButton.active =(false)		
	        FollowNode.active =(false)
			BetButton.active =(false)		
	} 
	else{
			BetButton.active =(false)
	        FollowNode.active =(true)		
	    }
		
		SetAddNumButton()	
	},

// 其他玩家可操作的功能
	OtherUserOperation(){	
	    RectOperation.active =(false)
		goldFlowerModel.Call.CloseCompare()
	    let seat = goldFlowerModel.Call.GetSeatnoToPos(goldFlowerModel.GoldFlowerModelTab.currSeatno)
	    uiPlayer[seat].HideTime()
	},

	WaiveUserOperation(){
		if(RectOperation.visible ){
			RectOperation.active =(false)
			let seat = goldFlowerModel.Call.GetPlayerSeat()
			uiPlayer[seat].HideTime()
		}
	},

// 操作的座位号对应操作时间
	UserOperationTime(){
	    let tt = goldFlowerModel.GoldFlowerModelTab.currOperTime
	    let seat = goldFlowerModel.Call.GetSeatnoToPos(goldFlowerModel.GoldFlowerModelTab.currSeatno)
	for(let      i  =  1;      i  <=  maxPlayerNumber; ++     i ){
	        uiPlayer[i].HideTime()
	    }
	    uiPlayer[seat].UserOperationTime()
	
	    if(goldFlowerModel.Call.IsPlayerSeat != null(goldFlowerModel.GoldFlowerModelTab.currSeatno) ){
	        RectOperation.active =(false)
	    }
	},

// 看牌返回的信息
	UserCardsInfo(seatno){
	    let seat = goldFlowerModel.Call.GetSeatnoToPos(seatno)
	    let sequence = goldFlowerModel.Call.GetSequence()
	    uiPlayer[seat].UserCardsInfo(sequence, seatno)
	},

// 看牌的广播
	UserLookCastBroad(seatno){
	    let seat = goldFlowerModel.Call.GetSeatnoToPos(seatno)
	    let sequence = goldFlowerModel.Call.GetSequence()
	    return uiPlayer[seat].UserLookCastBroad(sequence, seatno)
	},

// 牌型的信息
	UserCardsType(seatno){
	    let seat = goldFlowerModel.Call.GetSeatnoToPos(seatno)
	    let sequence = goldFlowerModel.Call.GetSequence()
	    uiPlayer[seat].UserCardsType(sequence, seatno)
	},

// 弃牌的广播
	UserDropCastBroad(seatno){
	    PlaySound(seatno, "qipai")
	    let seat = goldFlowerModel.Call.GetSeatnoToPos(seatno)
	    let sequence = goldFlowerModel.Call.GetSequence()
	    uiPlayer[seat].UserDropCastBroad(sequence, seatno)
	    if(goldFlowerModel.Call.IsPlayerSeat(seatno) ){
			LookButton.active =(false);
	        RectOperation.active =(false)
	        HideFollowEnd()
	//----->需重新編譯程式碼        sequence:AppendInterval(-0.4)
        //uiPlayer[seat].PlayUserDropCast(sequence, seatno)
	//----->需重新編譯程式碼		sequence:AppendInterval(0.5)
	//----->需重新編譯程式碼		sequence:AppendCallback(function(){
	//----->需重新編譯程式碼			RectWaiveChange.active =(goldFlowerModel.Call.GetUserGameCount() >=2)
	//----->需重新編譯程式碼		})		
	    }
	    return sequence
	},

// 比牌的广播
	UserCompareCastBroad(seatno,win){
	    let seat = goldFlowerModel.Call.GetSeatnoToPos(seatno)
	    uiPlayer[seat].UserCompareCastBroad(seatno, win)
	},

// 比牌的提示动画
	UserCompareAnim(seatno1, seatno2){
   // CompareNode1.transform.localPosition = playerPos[goldFlowerModel.Call.GetSeatnoToPos(seatno1)]
   // CompareNode2.transform.localPosition = playerPos[goldFlowerModel.Call.GetSeatnoToPos(seatno2)]
   // CompareNode1.active =(true)
   // CompareNode2.active =(true)
	    let sequence = goldFlowerModel.Call.GetSequence()
	//----->需重新編譯程式碼     sequence:AppendInterval(1)
//----->需重新編譯程式碼    // sequence:AppendCallback(function ()
//----->需重新編譯程式碼    // CompareNode1.active =(false)
//----->需重新編譯程式碼    // CompareNode2.active =(false)
//----->需重新編譯程式碼    // end)
	//----->需重新編譯程式碼    return sequence
	//----->需重新編譯程式碼},

// 比牌扣钱
	//----->需重新編譯程式碼CompareCastAddBetBroad(data){
	//----->需重新編譯程式碼    OtherUserOperation()
	//----->需重新編譯程式碼    let sequence = goldFlowerModel.Call.GetSequence()
	//----->需重新編譯程式碼    let seat = goldFlowerModel.Call.GetSeatnoToPos(goldFlowerModel.GoldFlowerModelTab.currSeatno)
	//----->需重新編譯程式碼    DownBroadAnim(sequence, goldFlowerModel.GoldFlowerModelTab.currSeatno, data.compareMoney, data.odd)
	//----->需重新編譯程式碼    sequence:AppendInterval(-0.4)
	//----->需重新編譯程式碼    return uiPlayer[seat].CompareCastAddBetBroad(sequence, data)
	//----->需重新編譯程式碼},

//比牌失敗換桌
	//----->需重新編譯程式碼CompareFailWaiveChange(data){	
	//----->需重新編譯程式碼    let sequence = goldFlowerModel.Call.GetSequence()
	//----->需重新編譯程式碼	if(goldFlowerModel.Call.IsPlayerSeat(data.faildseatno) ){
	//----->需重新編譯程式碼		LookButton.active =(false); // yukiusagi
	//----->需重新編譯程式碼		sequence:AppendInterval(0.5)
	//----->需重新編譯程式碼		sequence:AppendCallback(function(){
	//----->需重新編譯程式碼       
	//----->需重新編譯程式碼			RectWaiveChange.active =(true)
	//----->需重新編譯程式碼		})
	//----->需重新編譯程式碼    }
	},

	FailWaiveChange(seatno){
	    let sequence = goldFlowerModel.Call.GetSequence()
		if(goldFlowerModel.Call.IsPlayerSeat(seatno) ){
	//----->需重新編譯程式碼		sequence:AppendInterval(0.5)
	//----->需重新編譯程式碼		sequence:AppendCallback(function(){
	//----->需重新編譯程式碼       
	//----->需重新編譯程式碼			RectWaiveChange.active =(true)
	//----->需重新編譯程式碼		})
	    }
	},

// 跟注的广播(不区分自己或其他)
	UserFollowBroad(data){
	    PlaySound(goldFlowerModel.GoldFlowerModelTab.currSeatno, "genzhu")
	    PlaySound(0, "chouma")
	    OtherUserOperation()
	    let sequence = goldFlowerModel.Call.GetSequence()
	    let seat = goldFlowerModel.Call.GetSeatnoToPos(data.seatno)    
	  
	    DownBroadAnim(sequence, data.seatno, data.follow, data.odd)
	//----->需重新編譯程式碼    sequence:AppendInterval(-0.4)
	// yukiusagi
		if(data.seatno == goldFlowerModel.Call.GetPlayerSeat() ){
			let user = goldFlowerModel.Call.GetSeatnoToUser(data.seatno)
			if(user.check != null ){
				LookButton.active =(true)
			}
		}
	// yukiusagi
	    return uiPlayer[seat].UserFollowBroad(sequence, data)
	},

// 加注的广播(不区分自己或其他)
	UserAddBroad(data){
	
	    if(data.isfirst ){
	        PlaySound(goldFlowerModel.GoldFlowerModelTab.currSeatno, "xiazhu")
	} 
    else{
	        PlaySound(goldFlowerModel.GoldFlowerModelTab.currSeatno, "jiazhu")
	    }
	    
	    PlaySound(0, "chouma")
	    OtherUserOperation()
	    let sequence = goldFlowerModel.Call.GetSequence()
	    let seat = goldFlowerModel.Call.GetSeatnoToPos(data.seatno)
	  
	    DownBroadAnim(sequence, data.seatno, data.betadd, data.odd)
	//----->需重新編譯程式碼    sequence:AppendInterval(-0.4)
	// yukiusagi
		if(data.seatno == goldFlowerModel.Call.GetPlayerSeat() ){
			let user = goldFlowerModel.Call.GetSeatnoToUser(data.seatno)
			if(user.check != null ){
				LookButton.active =(true)
			}
			if(FollowNode.visible != null ){
				FollowNode.active =(true)
			}
		}
	// yukiusagi
	    return uiPlayer[seat].UserAddBroad(sequence, data)
	},

// All的广播(不区分自己或其他)
	UserAllinBroad(data){
		OpenFireAnime()
	    
	    PlaySound(goldFlowerModel.GoldFlowerModelTab.currSeatno, "allin")
	    PlaySound(0, "chouma")
	    OtherUserOperation()
	    let sequence = goldFlowerModel.Call.GetSequence()
	    let seat = goldFlowerModel.Call.GetSeatnoToPos(data.seatno)
		goldFlowerModel.GoldFlowerModelTab.FollowEnd = false
		
		let temp_seat = goldFlowerModel.Call.GetPlayerSeat()
	    let i = goldFlowerModel.Call.GetSeatnoToPos(temp_seat)
	    uiPlayer[i].SetFollowEnd(temp_seat)
	
		NowAllIn = true
	    DownBroadAnim(sequence, data.seatno, data.betadd, data.odd)
	//----->需重新編譯程式碼    sequence:AppendInterval(-0.4)
	    return uiPlayer[seat].UserAllInBroad(sequence, data)
	},

// 下底
	UserBetBase(data){
	    JackpotMoney.text = "0"
	    PlaySound(0, "chouma")
	    let sequence = goldFlowerModel.Call.GetSequence()
	for(let k in (goldFlowerModel.UserDataList)){ 
	let v = goldFlowerModel.UserDataList[k] 

	        if(v.User.StateValue < 4 ){
            // 未入座
	} 
        else{
	            DownBroadAnim(sequence, v.User.SeatNo, data.betbase, 1)
	//----->需重新編譯程式碼            sequence:AppendInterval(-0.4)
	        }
	    }
	//----->需重新編譯程式碼    sequence:AppendInterval(0.4)
	    return sequence
	},

// 加注顯示籌碼
	AddBroad(num, bufCount){
	    DownBroadAnim(null, 0, num, bufCount)
	},

// 更新桌面的钱数
	UpdateDesktopMoney(mm){
	    let money = tonumber(goldFlowerModel.ZJHDesktopMoney)
	    money = G.Tool.UserHelper.ToCash(money)
	    JackpotMoney.text = tostring(money)
	},

// 所有的投币动画
	DownBroadAnim(sequence, seatno, num, bufCount){
		if(bufCount == 0 ){
			return sequence
		}
    //print("<color=#EBF81BFF>num: " .. tostring(num).."</color>")
    //print("<color=#EBF81BFF>bufCount: " .. tostring(bufCount).."</color>")
    //local prefab = MoneyPrefab[goldFlowerModel.Call.GetBetArrToIndex(num)]
	// yukiusagi
		let prefab;
		let kind;
		console.log(G.Tool.UserHelper.ToCash(num))
		console.log(bufCount)
	
		if(NowAllIn != null ){
			kind = 1;
		} 
		else{
			kind = 2;		
		}
		
		prefab = MoneyPrefab[kind];
	// yukiusagi
		for(let i  =  1; i  <=  tonumber(bufCount); ++ i ){
	        let obj = cc.instantiate(prefab)
	        obj.parent =(MoneyPrefabNode)
	        obj.scale = cc.v3(1, 1, 1)
	        obj.active =(true)
			cc.find("Number", obj).getComponent(cc.Label).string = "" + G.Tool.UserHelper.ToCash(num)
			if(kind == 2 ){
				obj:Rotate(cc.v3(0, 0, math.random(-15,15)))
			} 
			else{
				obj:Rotate(cc.v3(0, 0, math.random(-45,45)))
			}
	        table.insert(MoneyCull, obj)
	        let endP = cc.v3(math.random(-350/2, 350/2), math.random(-120/2, 120/2), 0)
	//----->需重新編譯程式碼		if(sequence != null ){
	//----->需重新編譯程式碼			let begP = playerEffectPos[goldFlowerModel.Call.GetSeatnoToPos(seatno)]
	//----->需重新編譯程式碼			obj.position = begP
	//----->需重新編譯程式碼			sequence:App}(DOTween.To( function(){ return obj.position }, function(v) obj.position = v }, }P, 0.4))
	//----->需重新編譯程式碼			sequence:AppendInterval(-0.4)
	//----->需重新編譯程式碼} 
//----->需重新編譯程式碼		else{
	//----->需重新編譯程式碼			obj.position = endP		
	//----->需重新編譯程式碼		}
	    }
		
		if(sequence != null ){
	//----->需重新編譯程式碼		sequence:AppendInterval(0.4)
		}
		
	    if(MoneyCull.length > 36 ){
	        let co = MoneyCull.length - 36
			for(let i  =  co; i  <=  1; ++ i ){
	            MoneyCull[i].destroy();
	            table.remove(MoneyCull, i)
	        }
	    }
	    return sequence
	},
	
// 结算信息 2秒
	UpdateGameResult(data, JSPokerData){
	
	   
	    
    // 显示牌型
		CloseFireAnime() // yukiusagi
	    GameG.RemoveCountDown("UserOperationTime")
	    RectOperation.active =(false)
		RectWaiveChange.active =(true)
		
		for(let i = 1; i <= maxPlayerNumber; ++ i ){
	        uiPlayer[i].HideTime()
	    }
	    let u = goldFlowerModel.Call.GetSeatnoToUser(data.winSeatNO)
	    let bet = 0
	    if(goldFlowerModel.UserBetMoneyList[tostring(u.User.UserID)] ){
	        bet = goldFlowerModel.UserBetMoneyList[tostring(u.User.UserID)].BetMoney
	    }
	    u.User.Score = tonumber(u.User.Score) + tonumber(data.money)	
	    
	    RectWinCalc.active =(true)
	    let pos = goldFlowerModel.Call.GetSeatnoToPos(data.winSeatNO)
	    RectWinCalc.position = playerEffectPos[tonumber(pos)]
	    let CalcMoney = cc.find("CalcMoney",RectWinCalc)
	    CalcMoney.getComponent(cc.Label).string = "+" + G.Tool.UserHelper.ToCashDetail(data.money)
	    CalcMoney.scale = cc.v3(0, 0, 0)
	    let dayingjia_touxiang = cc.find("dayingjia_touxiang",this)
	    dayingjia_touxiang.position = playerEffectPos[tonumber(pos)]
	    dayingjia_touxiang.active =(false)
	    dayingjia_touxiang.active =(true)
    //显示牌型2秒
	    UpdateGameResultPoker(JSPokerData)
	
		let animTime = 1
		let sequence = goldFlowerModel.Call.GetSequence()
	//----->需重新編譯程式碼	sequence:AppendInterval(0.5)
	//----->需重新編譯程式碼	sequence:AppendCallback(function () 
		//if goldFlowerModel.Call.IsPlayerSeat(data.winSeatNO) then
	//----->需重新編譯程式碼	   G.Tool.Sound.PlayGameSound("CoinDown") 
		//end
	//----->需重新編譯程式碼	end)
		for(let i = 1; i <= MoneyCull.length; ++i){
	//----->需重新編譯程式碼		sequence:Append(DOTween.To( function() return MoneyCull[i].transform.localScale end, function(v) MoneyCull[i].transform.localScale = v end, cc.v3(0, 0, 0), animTime) )
	//----->需重新編譯程式碼		sequence:AppendInterval(-1 * animTime)
	//----->需重新編譯程式碼		sequence:Append(DOTween.To( function() return MoneyCull[i].transform.localPosition end, function(v) MoneyCull[i].transform.localPosition = v end, playerPos[tonumber(pos)], animTime) )
	//----->需重新編譯程式碼		sequence:AppendInterval(-1 * animTime)
		}
		//sequence:AppendInterval(animTime)
	//----->需重新編譯程式碼	sequence:AppendInterval(0.2)
		let endP = cc.v3(playerPos[tonumber(pos)].x, playerPos[tonumber(pos)].y + 50, 0)
	//----->需重新編譯程式碼	sequence:Append(DOTween.To( function() return CalcMoney.transform.localScale end, function(v) CalcMoney.transform.localScale = v end, cc.v3(1, 1, 1), 0.3) )
	//----->需重新編譯程式碼	sequence:AppendInterval(0.5)
	//----->需重新編譯程式碼	sequence:AppendCallback(function ()
	//----->需重新編譯程式碼	CloseMoneyCull()
	//----->需重新編譯程式碼	dayingjia_touxiang.active =(false)
	//----->需重新編譯程式碼	RectWinCalc.active =(false)
	//----->需重新編譯程式碼	end)
		UpdatePlayerMoneyNumber(data.winSeatNO) 
		return sequence
	},

	// 显示玩家的牌
	UpdateGameResultPoker(data){
		// 观战的不会收到结算的牌型
		if(data == nil){
			return
		}
		// 显示牌型
		// yukiusagi
		CloseFireAnime()
		LookButton.active =(false);
		// yukiusagi
		GameG.RemoveCountDown("UserOperationTime")
		RectOperation.active =(false)
		for(let i = 1; i <= maxPlayerNumber; ++i){      
			uiPlayer[i].HideTime()
		}
		for(let k in pairs(data.OtherPoker)){
			let v = data.OtherPoker[k]
			let u = goldFlowerModel.Call.GetSeatnoToUser(v.userpokergroup.SeatNo)
			if(u != null) {
				u.Cards = v.userpokergroup.Cards
				u.PokerType = v.PokerType
				UserCardsInfo(v.userpokergroup.SeatNo)
				UserCardsType(v.userpokergroup.SeatNo)
			}
		}
	},
	
	SetRoundText(round){
		RoundText.string = string.format("%d", round)
	},
	
	// 隐藏加注节点
	HideAddNode (){
		isShowAddNode = false
		SetAddNode(isShowAddNode)
	},
	// 设置加注节点显示与隐藏
	SetAddNode(b){
		AddNode.active =(b)
		if(b == false){
			return
		}
		let betaddvalue = goldFlowerModel.GoldFlowerModelTab.waitOpt.betaddvalue
		if(betaddvalue.length == 1 ){
			AddNumButton1.active =(false)
			AddNumButton2.active =(false)
			AddNumButton3.active =(false)
			AddNumButton4.active =(true)
			AddNumButton4.transform.localPosition = cc.v3(0, 106, 0)
			cc.find("Number", AddNumButton4).getComponent(cc.Label).string = "" + G.Tool.UserHelper.ToCash(betaddvalue[1])
		}
		else if(betaddvalue.length == 2){
			AddNumButton1.active =(false)
			AddNumButton2.active =(false)
			AddNumButton3.active =(true)
			AddNumButton4.active =(true)
			AddNumButton3.transform.localPosition = cc.v3(-108, 0, 0)
			AddNumButton4.transform.localPosition = cc.v3(108, 0, 0)
			cc.find("Number", AddNumButton3).getComponent(cc.Label).string = "" + G.Tool.UserHelper.ToCash(betaddvalue[1])
			cc.find("Number", AddNumButton4).getComponent(cc.Label).string = "" + G.Tool.UserHelper.ToCash(betaddvalue[2])
		}
		else if(betaddvalue == 3){
			AddNumButton1.active =(false)
			AddNumButton2.active =(true)
			AddNumButton3.active =(true)
			AddNumButton4.active =(true)
			AddNumButton2.transform.localPosition = cc.v3(-94, -50, 0)
			AddNumButton3.transform.localPosition = cc.v3(0, 106, 0)
			AddNumButton4.transform.localPosition = cc.v3(94, -50, 0)
			cc.find("Number", AddNumButton2).getComponent(cc.Label).string = "" + G.Tool.UserHelper.ToCash(betaddvalue[1])
			cc.find("Number", AddNumButton3).getComponent(cc.Label).string = "" + G.Tool.UserHelper.ToCash(betaddvalue[2])
			cc.find("Number", AddNumButton4).getComponent(cc.Label).string = "" + G.Tool.UserHelper.ToCash(betaddvalue[3])
		}
		else if(betaddvalue == 4){
			AddNumButton1.active =(true)
			AddNumButton2.active =(true)
			AddNumButton3.active =(true)
			AddNumButton4.active =(true)
			AddNumButton1.transform.localPosition = cc.v3(-108, 0, 0)
			AddNumButton2.transform.localPosition = cc.v3(0, 106, 0)
			AddNumButton3.transform.localPosition = cc.v3(108, 0, 0)
			AddNumButton4.transform.localPosition = cc.v3(0, -106, 0)
			cc.find("Number", AddNumButton1).getComponent(cc.Label).string = "" + G.Tool.UserHelper.ToCash(betaddvalue[1])
			cc.find("Number", AddNumButton2).getComponent(cc.Label).string = "" + G.Tool.UserHelper.ToCash(betaddvalue[2])
			cc.find("Number", AddNumButton3).getComponent(cc.Label).string = "" + G.Tool.UserHelper.ToCash(betaddvalue[3])
			cc.find("Number", AddNumButton4).getComponent(cc.Label).string = "" + G.Tool.UserHelper.ToCash(betaddvalue[4])
		}
		else{
			AddNode.active =(false)
		}
		let BG = cc.find("RectOperation/AddNode/BG", this.node)
		BG.transform.localScale = cc.v3(0, 0, 0)
	//----->需重新編譯程式碼	local sequence = goldFlowerModel.Call.GetSequence()
	//----->需重新編譯程式碼	sequence:Append(DOTween.To( function() return BG.transform.localScale end, function(v) BG.transform.localScale = v end, cc.v3(1, 1, 1), 0.15) )
	},
	
	SetAddNumButton(){
		let betaddvalue = goldFlowerModel.GoldFlowerModelTab.waitOpt.betaddvalue
		if(betaddvalue.length == 1 ){
			AddNumButton1.active =(false)
			AddNumButton2.active =(false)
			AddNumButton3.active =(false)
			AddNumButton4.active =(true)
			cc.find("Number", AddNumButton4).getComponent(cc.Label).string = "" + G.Tool.UserHelper.ToCash(betaddvalue[1])
		}
		else if(betaddvalue.length == 2){
			AddNumButton1.active =(false)
			AddNumButton2.active =(false)
			AddNumButton3.active =(true)
			AddNumButton4.active =(true)
			cc.find("Number", AddNumButton3).getComponent(cc.Label).string = "" + G.Tool.UserHelper.ToCash(betaddvalue[1])
			cc.find("Number", AddNumButton4).getComponent(cc.Label).string = "" + G.Tool.UserHelper.ToCash(betaddvalue[2])
		}
		else if(betaddvalue.length == 3){
			AddNumButton1.active =(false)
			AddNumButton2.active =(true)
			AddNumButton3.active =(true)
			AddNumButton4.active =(true)
			cc.find("Number", AddNumButton2).getComponent(cc.Label).string = "" + G.Tool.UserHelper.ToCash(betaddvalue[1])
			cc.find("Number", AddNumButton3).getComponent(cc.Label).string = "" + G.Tool.UserHelper.ToCash(betaddvalue[2])
			cc.find("Number", AddNumButton4).getComponent(cc.Label).string = "" + G.Tool.UserHelper.ToCash(betaddvalue[3])
		}
		else if(betaddvalue.length == 4 ){
			AddNumButton1.active =(true)
			AddNumButton2.active =(true)
			AddNumButton3.active =(true)
			AddNumButton4.active =(true)
			cc.find("Number", AddNumButton1).getComponent(cc.Label).string = "" + G.Tool.UserHelper.ToCash(betaddvalue[1])
			cc.find("Number", AddNumButton2).getComponent(cc.Label).string = "" + G.Tool.UserHelper.ToCash(betaddvalue[2])
			cc.find("Number", AddNumButton3).getComponent(cc.Label).string = "" + G.Tool.UserHelper.ToCash(betaddvalue[3])
			cc.find("Number", AddNumButton4).getComponent(cc.Label).string = "" + G.Tool.UserHelper.ToCash(betaddvalue[4])
		}
		else{
			AddNumButton1.active =(false)
			AddNumButton2.active =(false)
			AddNumButton3.active =(false)
			AddNumButton4.active =(false)
		}
	},
	
	// region But
	// 比牌的按钮
	OnCompareButton(){
		goldFlowerModel.Call.OpenCompare()
	},
	// 弃牌的按钮
	OnWaiveButton(){
		let sendMsg = []
		sendMsg.UserId = tonumber(G.User.GetCurrentUser().UserID);
		
		//OtherUserOperation()
		goldFlowerModel.Call.SendWaivePoker(sendMsg) // yukiusagi add sendMsg
		
		// yukiusagi
		WaiveUserOperation();	
		LookButton.active =(false);
		// yukiusagi
	},
	// 看牌按钮
	OnLookButton(){
		goldFlowerModel.Call.SendLookPoker()
		LookButton.active =(false) // yukiusagi
	},
	// 跟注的按钮
	OnFollowButton(){
		OtherUserOperation()
		goldFlowerModel.Call.SendFollow()
	},
	// 加注的按钮
	OnAddButton(){
		isShowAddNode = (isShowAddNode == false)
		SetAddNode(isShowAddNode)
	},
	// 全鴨的按钮
	OnAllInButton(){
		OtherUserOperation()
		goldFlowerModel.Call.SendAllIn()
		// yukiusagi
		WaiveButton.active =(false)
		FollowNode.active =(false)
		goldFlowerModel.Call.CloseCompare()
		// yukiusagi
	},
	// 加注的具体金额的按钮
	OnAddValueButton(i){
		OtherUserOperation()
		HideAddNode()
		let nn = goldFlowerModel.GoldFlowerModelTab.waitOpt.betaddvalue.length
		i = tonumber(i) - (4 - tonumber(nn))
		let data = []
		data.betadd = goldFlowerModel.GoldFlowerModelTab.waitOpt.betaddvalue[i]
		goldFlowerModel.Call.SendAdd(data)
	},
	// 准备的按钮
	OnReadyGame(){
		goldFlowerModel.Call.KillSequence("ReadyGameTime")
		goldFlowerModel.Call.KillSequence("AutoReadyGameTime")
		goldFlowerModel.Call.SendReadyGame()
		RectReadyGame.active =(false)
		G.Tool.UILoading.ShowTxt(G.Room.RoomTips.WaitGameStart, 0)
	},
	// 换桌的按钮
	OnChangeButton(){
		goldFlowerModel.Call.KillSequence("ReadyGameTime")
		goldFlowerModel.Call.KillSequence("AutoReadyGameTime")
		goldFlowerModel.Call.SendChangeDesk()
	},
	// 弃牌换桌的按钮
	OnWaiveChangeButton(){
		RectWaiveChange.active =(false)
		goldFlowerModel.Call.SendEarlyChangeTable()
	},
	// 自动准备的按钮
	OnAutoReadyButton(){
		goldFlowerModel.isAutoReady = true
		//SetReadyUI()
		OnReadyGame()
	},
	// 取消自动准备的按钮
	OnNoAutoReadyButton(){
		goldFlowerModel.isAutoReady = false
		SetReadyUI()
	},
	
	OnExitButton(){
		if(isSendEarlyLeaveTable == false){		
			goldFlowerModel.Call.SendEarlyLeaveTable()
	
			isSendEarlyLeaveTable = true
			CS.TimeManager.Instance.DelayInvoke(0.4, function( ){
				G.Service.Game.ExitGame(nil,nil,function(){
				});
			})
		}
	},
	//endregion
	
	InitData(){

		bufSound["chouma"] = {}
		bufSound["chouma"].name = "chouma"
		bufSound["chouma"].isSex = false
		bufSound["chouma"].count = 1
		
		bufSound["jiazhu"] = {}
		bufSound["jiazhu"].name = "jiazhu"
		bufSound["jiazhu"].isSex = true
		bufSound["jiazhu"].count = 3
		
		bufSound["bipai"] = {}
		bufSound["bipai"].name = "bipai"
		bufSound["bipai"].isSex = true
		bufSound["bipai"].count = 3
		
		bufSound["genzhu"] = {}
		bufSound["genzhu"].name = "genzhu"
		bufSound["genzhu"].isSex = true
		bufSound["genzhu"].count = 3
		
		bufSound["kanpai"] = {}
		bufSound["kanpai"].name = "kanpai"
		bufSound["kanpai"].isSex = true
		bufSound["kanpai"].count = 3
		
		bufSound["qipai"] = {}
		bufSound["qipai"].name = "qipai"
		bufSound["qipai"].isSex = true
		bufSound["qipai"].count = 3
		
		bufSound["xiazhu"] = {}
		bufSound["xiazhu"].name = "xiazhu"
		bufSound["xiazhu"].isSex = true
		bufSound["xiazhu"].count = 1
		
		bufSound["allin"] = {}
		bufSound["allin"].name = "allin"
		bufSound["allin"].isSex = true
		bufSound["allin"].count = 2
		
		bufSound["DanZhang"] = {}
		bufSound["DanZhang"].name = "DanZhang"
		bufSound["DanZhang"].isSex = true
		bufSound["DanZhang"].count = 1
		
		bufSound["DuiZi"] = {}
		bufSound["DuiZi"].name = "DuiZi"
		bufSound["DuiZi"].isSex = true
		bufSound["DuiZi"].count = 1
		
		bufSound["ShunZi"] = {}
		bufSound["ShunZi"].name = "ShunZi"
		bufSound["ShunZi"].isSex = true
		bufSound["ShunZi"].count = 1
		
		bufSound["JinHua"] = {}
		bufSound["JinHua"].name = "JinHua"
		bufSound["JinHua"].isSex = true
		bufSound["JinHua"].count = 1
		
		bufSound["ShunJin"] = {}
		bufSound["ShunJin"].name = "ShunJin"
		bufSound["ShunJin"].isSex = true
		bufSound["ShunJin"].count = 1
		
		bufSound["BaoZi"] = {}
		bufSound["BaoZi"].name = "BaoZi"
		bufSound["BaoZi"].isSex = true
		bufSound["BaoZi"].count = 1
	},
	
	// 播放的音效名字
	PlaySound(seatno, name){
		console.log("<color=red>PlaySound name = " + name + "</color>")
		let tempfile=""
		let count = bufSound[name].count
		let i = math.random(1, count)
		if(bufSound[name].isSex){
			let v = goldFlowerModel.Call.GetSeatnoToUser(seatno)
			let sex = ""
			if(v.User.Sex == 1){
				sex = "nv"
			}
			else{
				sex = "nan"
			}
			tempfile = string.format("%s_%s%d", sex, bufSound[name].name, i)
		}
		else{
			tempfile = string.format("%s%d", bufSound[name].name, i)
		}
		
		G.Tool.Sound.PlayGameSound(tempfile)
	},
};

module.exports = UIGoldFlower
