var G = require( "Global")
var goldFlowerModel = require("GoldFlowerModel")
UIPlayer = []
//----->需重新編譯程式碼var DOTween = CS.DG.Tweening.DOTween
var Color = cc.Color
var Vector3 = cc.v3
//- 以上内容为工具脚本自动生成，请不要在这之上做任何修改//-
// region 私有方法
// endregion
// 站立0 排队1 坐下2 举手3 游戏4 断线5 
// region UI
var FollowNode
var AutoFollowButton
var AutoTag
var WaiveButton
// endregion
// region 数据
var beginVec = []
beginVec[1] = Vector3(-285, 41, 0)
beginVec[2] = Vector3(-484, 285, 0)
beginVec[3] = Vector3(304, 542, 0)
beginVec[4] = Vector3(484, 285, 0)
beginVec[5] = Vector3(285, 41, 0)
var endVec = []
endVec[1] = []
endVec[2] = []
endVec[3] = []
endVec[4] = []
endVec[5] = []
endVec[1][1] = Vector3(-168, 21.5, 0) // -33, -140,
endVec[1][2] = Vector3(-135, 21.5, 0) // 0, -140,
endVec[1][3] = Vector3(-102, 21.5, 0) // 33, -140,
endVec[2][1] = Vector3(-168, 23, 0) // -176, -39.5,
endVec[2][2] = Vector3(-135, 23, 0) // -142, -39.5,
endVec[2][3] = Vector3(-102, 23, 0) // -109, -39.5,
endVec[3][1] = Vector3(162, -32, 0)
endVec[3][2] = Vector3(305, -32, 0)
endVec[3][3] = Vector3(446, -32, 0)
endVec[4][1] = Vector3(105, 23, 0) // 116, -39.5,
endVec[4][2] = Vector3(138, 23, 0) // 150, -39.5,
endVec[4][3] = Vector3(171, 23, 0) // 183, -39.5,
endVec[5][1] = Vector3(104.5, 22, 0) // -33, -140,
endVec[5][2] = Vector3(134.5, 22, 0) // 0, -140,
endVec[5][3] = Vector3(164.5, 22, 0) // 33, -140,
// endregion

function UIPlayer (root){

// 初始化UI
	InitUI = function(seatno){
	    self.AutoFollowButton = cc.find("FollowNode/AutoFollowButton",self.this)
	    self.FollowNode = cc.find("FollowNode",self.this)
	    self.AutoTag = cc.find("FollowNode/AutoTag",self.this)
		self.WaiveButton = cc.find("WaiveButton",self.this)
	    if(self.AutoFollowButton ){
	        self.AutoFollowButton.getComponent(cc.Button).node.on('click', function (){ 
				GameG.PlayGameSound("se_click")
				self:OnFollowEnd(seatno) 
			})
	    }
	};

// 隐藏UI
	HideUI = function(){
	    self.this.active =(false)
	};

// 发牌动画
	CallFapai = function(isPlay, seatno, sequence){
	    let v = goldFlowerModel.Call.GetSeatnoToUser(seatno)
	    let posI = goldFlowerModel.Call.GetSeatnoToPos(seatno)
	    
	    if(isPlay != null ){
			for(let i = 1; i <= 3; ++ i ){
	            let obj = cc.find("AnimCard",self.this + i)
	            obj.active =(true)
	            GameG.SetImageSprite(obj.getComponent(cc.Sprite), G.GetGamePName(), "yes_color", false)
	            obj.scale = Vector3(1, 1, 1)
	            obj.position = endVec[posI][i]
	        }
		} 
    	else{
	        let animTime = 0.5
	        let stepT = 0
			for(let i = 1; i <= 3; ++ i ){
	            let obj = cc.find("AnimCard",self.this + i)
	            obj.active =(true)
	            GameG.SetImageSprite(obj.getComponent(cc.Sprite), G.GetGamePName(), "yes_color", false)
	            obj.scale = Vector3(0, 0, 0)
	            obj.position = beginVec[posI]
	//----->需重新編譯程式碼            sequence:App}(DOTween.To( function(){ return obj.scale }, function(v) obj.scale = v }, Vector3(1, 1, 1), animTime) )
	//----->需重新編譯程式碼            sequence:AppendInterval(-1 * animTime)
	//----->需重新編譯程式碼            sequence:App}(DOTween.To( function(){ return obj.position }, function(v) obj.position = v }, }Vec[posI][i], animTime) )
	//----->需重新編譯程式碼            sequence:AppendInterval(-1 * animTime)
	//----->需重新編譯程式碼            if(i < 3 ){
	//----->需重新編譯程式碼                sequence:AppendInterval(stepT)
	//----->需重新編譯程式碼            }
	        }
	//----->需重新編譯程式碼        sequence:AppendInterval(animTime)
	//----->需重新編譯程式碼        return sequence
	    }    
	};
	
// 设置玩家进入UI
	SetPlayerEnter = function(seatno){
	
	    let v = goldFlowerModel.Call.GetSeatnoToUser(seatno)
	    this.node.active =(true)
    //self.this.transform:Find("PlayerID"):GetComponent("Text").text = goldFlowerModel.GoldFlowerModelTab.IDTitle .. v.User.NickName
		if(goldFlowerModel.Call.IsPlayerSeat(seatno)) {
			cc.find("PlayerID", this.node).getComponent(cc.Label).string = goldFlo,self.thiswerModel.GoldFlowerModelTab.IDTitle + v.User.UserID
		} 
   		else {
	    	cc.find("PlayerID", this.node).getComponent(cc.Label).string =  v.User,self.this.UserID //v.User.NickName
		}
	    
	    this.UpdatePlayerMoneyNumber(seatno)
	    cc.find("OperTime", this.node).active =(false)
	    cc.find("baojingqi", this.node).active =(false)
	    cc.find("ChatBG", this.node).active =(false)
	    cc.find("PokerType", this.node).active =(false)
	    let LookOnNode = cc.find("LookOnNode", this.node)
	    if(LookOnNode ){
	        LookOnNode.active =(false)
	    }
	    
	    cc.find("HeadImage", this.node).active =(true)
		GameG.SetImageSprite(cc.find("HeadImage", this.node).getComponent(cc.Sprite), v.User.FaceID.toString())
		for(let i = 1; i <= 3; ++i ){
	        cc.find("AnimCard" + i, this.node).active =(false)
	    }
	    cc.find("PokerStart", this.node).active =(false)
	    this.SetPokerState()
	    this.ChangePlayerState(seatno)
	};
	
// 设置玩家离开
	SetPlayerExit = function(seatno){
   // self.this.gameObject:SetActive(false)
		console.log("<color=yellow>player exit"+tostring(seatno)+",IsGameing:"+tostring(goldFlowerModel.Call.IsGameing())+"</color>")
		if( goldFlowerModel.Call.IsPlayerSeat != null(seatno) && goldFlowerModel.Call.IsGameing() ){
			this.SetPlayerState(6,seatno);
			goldFlowerModel.LeaveUser[seatno]=1;
		} 
 		else if(goldFlowerModel.Call.IsGameing != null()) {
			this.node.active =(false)
		}
	};

	Hide = function(seatno){
	    this.node.active =(false) 
	};
	
// 玩家恢复游戏
	RecoverGame = function(seatno){
	    let v = goldFlowerModel.Call.GetSeatnoToUser(seatno)
	    let posI = goldFlowerModel.Call.GetSeatnoToPos(seatno)
	    if(tonumber(v.User.StateValue) == 4 || tonumber(v.User.StateValue) == 5 ){
	        self:PokerState(seatno)
	    }
	};
	
// 扑克的状态
	PokerState = function(seatno){
	
	    let data = goldFlowerModel.Call.GetSeatnoToUser(seatno)
	    let posI = goldFlowerModel.Call.GetSeatnoToPos(seatno)
	    if(data.lose ){
			for(let i = 1; i <= 3; ++ i ){
	            let obj = cc.find("AnimCard",self.this + i)
	            obj.active =(false)
	        }
	        cc.find("PokerStart", this.node).active =(true)
	        this.SetPokerState(1)
	        GameG.SetImageSprite(cc.find("PokerStart",self.this).getComponent(cc.Sprite), G.GetGamePName(), "lose_3l", false)
		} 
    	else if( data.drop ){

			for(let i = 1; i <= 3; ++ i ){
	        	console.log("<color=yellow>dropdropdropdropdrop</color>")
        //    local obj = self.this.transform:Find("AnimCard" .. i)
        //    obj.gameObject:SetActive(false)
	        }
	        cc.find("PokerStart", this.node).active =(true)
	        this.SetPokerState(2)
	        GameG.SetImageSprite(cc.find("PokerStart",self.this).getComponent(cc.Sprite), G.GetGamePName(), "waive_3l", false)
		} 
   		else if( data.check ){

	        if(goldFlowerModel.Call.IsPlayerSeat != null(seatno) ){
				for(let i = 1; i <= 3; ++ i ){
	                let obj = cc.find("AnimCard",self.this + i)
	                obj.active =(true)
	            }
	            cc.find("PokerStart", this.node).active =(true)
	            this.SetPokerState(3)
	            GameG.SetImageSprite(cc.find("PokerStart",self.this).getComponent(cc.Sprite), G.GetGamePName(), "normal_3l", false)
	        }
		} 
    	else{
			for(let i = 1; i <= 3; ++ i ){
	            let obj = cc.find("AnimCard",self.this + i)
	            obj.active =(true)
	            GameG.SetImageSprite(obj.getComponent(cc.Sprite), G.GetGamePName(), "yes_color", false)
	            obj.scale = Vector3(1, 1, 1)
	            obj.position = endVec[posI][i]
	        }
	    }
	};

// 设置牌状态 1失败 2弃牌 3看牌 0空
	SetPokerState = function(state){
 //print("<color=yellow>SetPokerState</color>")
	    let LoseState = cc.find("PokerStart/LoseState",self.this)
	    let DropState = cc.find("PokerStart/DropState",self.this)
	    let CheckState = cc.find("PokerStart/CheckState",self.this)
	    if(state != null ){
	        LoseState.active =(false)
	        DropState.active =(false)
	        CheckState.active =(false)
		} 
		else if( tonumber(state) == 1 ){

	        LoseState.active =(true)
	        DropState.active =(false)
	        CheckState.active =(false)
		} 
		else if( tonumber(state) == 2 ){

	        LoseState.active =(false)
	        DropState.active =(true)
	        CheckState.active =(false)
		} 
		else if( tonumber(state) == 3 ){

	        LoseState.active =(false)
	        DropState.active =(false)
	        CheckState.active =(true)
	    }
	};

// 旁观者
	SetLookOn = function(seatno, b){
	    cc.find("LookOnNode", this.node).active =(b)
	};

// 玩家状态改变
	ChangePlayerState = function(seatno){
	    let v = goldFlowerModel.Call.GetSeatnoToUser(seatno)
	    this.SetPlayerState(v.User.StateValue, seatno)
	};

// 设置玩家状态
	SetPlayerState = function(state, seatno){
	    let v = goldFlowerModel.Call.GetSeatnoToUser(seatno)
	    let ReadyState = cc.find("ReadyState",self.this)
	    let OffState = cc.find("OffState",self.this)
	    let LeaveState = cc.find("LeaveState",self.this)
	    
	    if(state != null ){
	        ReadyState.active =(false)
	        OffState.active =(false)
	        LeaveState.active =(false)
		} 
   		else if( tonumber(state) == 3 ){

	        if(v.isLook ){
	            ReadyState.active =(false)
			} 
        	else{
	            ReadyState.active =(true)
	        }
	        OffState.active =(false)
	        LeaveState.active =(false)
		} 
   		else if( tonumber(state) == 5 ){

	        ReadyState.active =(false)
	        OffState.active =(true)
	        LeaveState.active =(false)
		} 
    	else if( tonumber(state) == 6 ){

	         ReadyState.active =(false)
	         OffState.active =(false)
	         LeaveState.active =(true)
		} 
    	else{
	        ReadyState.active =(false)
	        OffState.active =(false)
	        LeaveState.active =(false)
	    }
	};
// 更新玩家钱
	UpdatePlayerMoneyNumber = function(seatno){
	    let v = goldFlowerModel.Call.GetSeatnoToUser(seatno)
	    let bet = 0
	    if(goldFlowerModel.UserBetMoneyList[tostring(v.User.UserID)] ){
	        bet = goldFlowerModel.UserBetMoneyList[tostring(v.User.UserID)].BetMoney
	    }
	    console.log(tonumber(v.User.Score) + "  " + tonumber(bet))
	    let money = tonumber(v.User.Score) - tonumber(bet)
	    money = G.Tool.UserHelper.ToCash(money)
		if(G.User.GetCurrentUser().UserID == v.User.UserID ){
			cc.find("MoneyNumber", this.node).getComponent(cc.Label).string = money
		} 
		else{
			cc.find("MoneyNumber", this.node).getComponent(cc.Label).string = "******"
		}
	    cc.find("BetMoneyNumber", this.node).getComponent(cc.Label).string = G.Tool.UserHe,self.thislper.ToCash(bet)	
	};

// 隐藏时间
	HideTime = function(){
	    GameG.RemoveCountDown("UserOperationTime")
	    cc.find("OperTime").active =(false)
	    cc.find("baojingqi").active =(false)
	};
// 操作的座位号对应操作时间
	UserOperationTime = function(){
	    GameG.RemoveCountDown("UserOperationTime")
	    let operTime
	//剩余操作时间
	    let tt = goldFlowerModel.GoldFlowerModelTab.currOperTime
	
	    operTime = cc.find("OperTime", this.node).getComponent(cc.Sprite)
	    operTimer = cc.find("OperTime/CountTime", this.node).getComponent(cc.Label)
	    operTime.active =(true)
	    cc.find("baojingqi", this.node).active =(true)
	    operTime.fillAmount = 1
	
	    let isdjsts = false	
	    GameG.StartCountDown(tonumber(tt), "UserOperationTime", function (t){
	        goldFlowerModel.GoldFlowerModelTab.currOperTime = t
	        operTimer.text=tostring(math.floor(goldFlowerModel.GoldFlowerModelTab.currOperTime))
			if(t < 4 ){
				operTimer.color = cc.Color.red
			} 
			else{
				operTimer.color = cc.Color.white
			}
	        let ss = tonumber(goldFlowerModel.GoldFlowerModelTab.currOperTime) / tonumber(goldFlowerModel.GoldFlowerModelTab.currMaxOperTime)
	        if(isdjsts == false && t < 3 ){
	            G.Tool.Sound.PlayGameSound("djsts")
	            isdjsts = true
	        }
	        if(ss > 5.0 / 8.0 ){
	            operTime.color = Color(0 / 255, 255 / 255, 0 / 255, 1)
			} 
        	else if( ss > 3.0 / 8.0 ){

	            operTime.color = Color(255 / 255, 255 / 255, 0 / 255, 1)
			} 
      		else if( ss > 1.0 / 8.0 ){

	            operTime.color = Color(255 / 255, 140 / 255, 0 / 255, 1)
			} 
        	else{
	            operTime.color = Color(255 / 255, 0 / 255, 0 / 255, 1)
	        }
	        if(operTime ){
	            operTime.fillAmount = ss
	        }
	    }, 
	    0.1)
	};

	OnFollowEnd = function(i){
	    if(goldFlowerModel.GoldFlowerModelTab.FollowEnd ){
	        goldFlowerModel.GoldFlowerModelTab.FollowEnd = false
		} 
		else{
	        goldFlowerModel.GoldFlowerModelTab.FollowEnd = true
	    }
	    goldFlowerModel.Call.SendFollowEnd()
	    self:SetFollowEnd(goldFlowerModel.Call.GetPosToSeatno(i))
	};

// 隐藏跟注到底
	HideFollowEnd = function(seatno){
	    self.FollowNode.active =(false)
	};

// 设置跟注到底
	SetFollowEnd = function(seatno){    
	    if(goldFlowerModel.Call.IsPlayerSeat(seatno) ){
	        let data = goldFlowerModel.Call.GetSeatnoToUser(seatno)
	        console.log(tonumber(data.User.StateValue))
	        if(tonumber(data.User.StateValue) == 4 && data.lose && data.drop != null ){
	            self.FollowNode.active =(true)
				self.WaiveButton.active =(true)
	            if(goldFlowerModel.GoldFlowerModelTab.FollowEnd ){
	                self.AutoTag.active =(true)
				} 
				else{
	                self.AutoTag.active =(false)
	            }
			} 
			else{
	            self.FollowNode.active =(false)
				self.WaiveButton.active =(false)
	        }
	    }
	};

// 看牌返回的信息
	UserCardsInfo = function(sequence, seatno){
	    let cards = goldFlowerModel.Call.SortPoker(goldFlowerModel.Call.GetSeatnoToUser(seatno).Cards)
	    let posI = goldFlowerModel.Call.GetSeatnoToPos(seatno)
	    G.Tool.Sound.PlayGameSound("fanzhuan")
		for(let i = 1; i <= 3; ++ i ){
	        let obj = cc.find("AnimCard",self.this + i)
	        obj.active =(true)
	        obj.scale = Vector3(1, 1, 1)
	        obj.position = endVec[posI][i]
	//----->需重新編譯程式碼        sequence:Append(obj:DOScaleX(0, 0.25))
	//----->需重新編譯程式碼        sequence:AppendCallback(function (){
	//----->需重新編譯程式碼        GameG.SetImageSprite(obj.getComponent(cc.Sprite), G.GetGamePName(), string.format("zjh_%s_%s", cards[i].Color, cards[i].CardNumber), false)
	//----->需重新編譯程式碼        })
	//----->需重新編譯程式碼        sequence:Append(obj:DOScaleX(1, 0.25))
	//----->需重新編譯程式碼        sequence:AppendInterval(-0.5)
	    }
	//----->需重新編譯程式碼    sequence:AppendInterval(0.5)
	    return sequence
	};

// 看牌的广播
	UserLookCastBroad = function(sequence, seatno){
	    if(goldFlowerModel.Call.IsPlayerSeat != null(seatno) ){
	        cc.find("PokerStart", this.node).active =(true)
	        this.SetPokerState(3)
	        GameG.SetImageSprite(cc.find("PokerStart",self.this).getComponent(cc.Sprite), G.GetGamePName(), "normal_3l", false)
			for(let i = 1; i <= 3; ++ i ){
	            let obj = cc.find("AnimCard",self.this + i)
	            obj.active =(false)
	        }
	    }
	    let chatBG = cc.find("ChatBG",self.this)
	    cc.find("ChatBG/Chat").getComponent(cc.Label).string = "看牌"
	    return ChatAnim(sequence, chatBG)
	};

// 显示牌型 1.5秒
	UserCardsType = function(sequence, seatno){
	    cc.find("PokerStart", this.node).active =(false)
	    let v = goldFlowerModel.Call.GetSeatnoToUser(seatno)
	    let obj = cc.find("PokerType",self.this)
	    let img = cc.find("ImageType",obj).getComponent(cc.Sprite)
	    let pokerType = tonumber(v.PokerType)
	    if(pokerType == 0 ){
	        GameG.SetImageSprite(img, G.GetGamePName(), "danzhang_ArtStatic_6", false)
		} 
		else if( pokerType == 1 ){

	        GameG.SetImageSprite(img, G.GetGamePName(), "duizi_ArtStatic_5", false)
		} 
		else if( pokerType == 2 ){

	        GameG.SetImageSprite(img, G.GetGamePName(), "shunzi_ArtStatic_4", false)
		} 
		else if( pokerType == 3 ){

	        GameG.SetImageSprite(img, G.GetGamePName(), "jinhua_ArtStatic_3", false)
		} 
		else if( pokerType == 4 ){

	        GameG.SetImageSprite(img, G.GetGamePName(), "shunjin_ArtStatic_2", false)
		} 
		else if( pokerType == 5 ){

	        GameG.SetImageSprite(img, G.GetGamePName(), "baozi_ArtStatic_1", false)
		} 
		else{
	        GameG.SetImageSprite(img, G.GetGamePName(), "teshu_ArtStatic_7", false)
	    }
	//----->需重新編譯程式碼    sequence:AppendInterval(0.2)
	//----->需重新編譯程式碼    sequence:AppendCallback(function (){
	//----->需重新編譯程式碼    self.this:Find("PokerType").active =(true)
	//----->需重新編譯程式碼    })
	//----->需重新編譯程式碼    sequence:AppendInterval(1.3)
	    return sequence
	};
	
// 弃牌的广播
	UserDropCastBroad = function(sequence, seatno){
	 console.log("<color=yellow>UserDropCastBroad</color>")
	    if(goldFlowerModel.Call.IsPlayerSeat != null(seatno) ){
	        cc.find("AnimCard1", this.node).active =(false)
	        cc.find("AnimCard2", this.node).active =(false)
	        cc.find("AnimCard3", this.node).active =(false)
	} 
    else{
	        goldFlowerModel.Call.CloseCompare()
	    }
	    cc.find("PokerStart", this.node).active =(true)
	    self:SetPokerState(2)
	    GameG.SetImageSprite(cc.find("PokerStart",self.this).getComponent(cc.Sprite), G.GetGamePName(), "waive_3l", false)
	
	    let chatBG = cc.find("ChatBG",self.this)
	    cc.find("ChatBG/Chat", this.node).getComponent(cc.Label).string = "弃牌"
	    return ChatAnim(sequence, chatBG)
	};
// 弃牌的动画
	PlayUserDropCast = function(sequence, seatno){
	console.log("<color=yellow>PlayUserDropCast</color>")
	
	    let animTime = 0.6
	    let posI = goldFlowerModel.Call.GetSeatnoToPos(seatno)
		for(let i = 1; i <= 3; ++ i ){
	        let obj = cc.find("AnimCard",self.this + i)
	        obj.scale = Vector3(1, 1, 1)
	        obj.position = endVec[posI][i]
	//----->需重新編譯程式碼        sequence:App}(DOTween.To( function(){ return obj.scale }, function(v) obj.scale = v }, Vector3(0, 0, 0), animTime) )
	//----->需重新編譯程式碼        sequence:AppendInterval(-1 * animTime)
	//----->需重新編譯程式碼        sequence:App}(DOTween.To( function(){ return obj.position }, function(v) obj.position = v }, beginVec[posI], animTime) )
	//----->需重新編譯程式碼        sequence:AppendInterval(-1 * animTime)
		}
	//----->需重新編譯程式碼    sequence:AppendInterval(animTime)
	//----->需重新編譯程式碼    sequence:AppendCallback(function (){
	//----->需重新編譯程式碼    self.this:Find("AnimCard1").active =(false)
	//----->需重新編譯程式碼    self.this:Find("AnimCard2").active =(false)
	//----->需重新編譯程式碼    self.this:Find("AnimCard3").active =(false)
	//----->需重新編譯程式碼    })
	//----->需重新編譯程式碼    
	//----->需重新編譯程式碼    return sequence
	};

// 比牌的广播
	UserCompareCastBroad = function(seatno,win){
		console.log("<color=yellow>UserCompareCastBroad</color>")
	    if(goldFlowerModel.Call.IsPlayerSeat(seatno) ){
	        if(win ){
	            G.Tool.Sound.PlayGameSound("win")
			} 
			else{
	            G.Tool.Sound.PlayGameSound("lose")
	        }
	    }
	    if(win != null ){
			if(goldFlowerModel.Call.IsPlayerSeat != null(seatno) ){
				cc.find("AnimCard1", this.node).active =(false)
				cc.find("AnimCard2", this.node).active =(false)
				cc.find("AnimCard3", this.node).active =(false)
			}
	        cc.find("PokerStart", this.node).active =(true)
	        self:SetPokerState(1)
	        GameG.SetImageSprite(cc.find("PokerStart", this.node).getComponent(cc.Sprite), G.GetGamePName(), "lose_3l", false)
	    }
	};

// 比牌的广播(当前操作的玩家)
	CompareCastAddBetBroad = function(sequence, data){
	    let seat = goldFlowerModel.Call.GetSeatnoToPos(goldFlowerModel.GoldFlowerModelTab.currSeatno)
	    let chatBG = cc.find("ChatBG",self.this)
	    let money = tonumber(data.compareMoney) * tonumber(data.odd)
	    money = G.Tool.UserHelper.ToCash(money)
	    cc.find("ChatBG/Chat", this.node).getComponent(cc.Label).string = "比牌" + ton,self.thisumber(money)
	    return ChatAnim(sequence, chatBG)
	};

// 跟注的广播(不区分自己或其他)
	UserFollowBroad = function(sequence, data){
	    let seat = goldFlowerModel.Call.GetSeatnoToPos(data.seatno)
	    let chatBG = cc.find("ChatBG",self.this)
	    let money = tonumber(data.follow) * tonumber(data.odd)
	    money = G.Tool.UserHelper.ToCash(money)
	    cc.find("ChatBG/Chat", this.node).getComponent(cc.Label).string = "跟注" + mon,self.thisey
	    return ChatAnim(sequence, chatBG)
	};

// 下注的广播(不区分自己或其他)
	UserAddBroad = function(sequence, data){
	    let seat = goldFlowerModel.Call.GetSeatnoToPos(data.seatno)
	    let chatBG = cc.find("ChatBG",self.this)
	    let money = tonumber(data.betadd) * tonumber(data.odd)
	    money = G.Tool.UserHelper.ToCash(money)
		if(data.isfirst == true ){
			cc.find("ChatBG/Chat", this.node).getComponent(cc.Label).string = "下注" + mon,self.thisey
	} 
	else{
			cc.find("ChatBG/Chat", this.node).getComponent(cc.Label).string = "加注" + mon,self.thisey
		}
	    return ChatAnim(sequence, chatBG)
	};
	
	UserAllInBroad = function(sequence, data){
	    let seat = goldFlowerModel.Call.GetSeatnoToPos(data.seatno)
	    let chatBG = cc.find("ChatBG",self.this)
	    let money = tonumber(data.betadd) * tonumber(data.odd)
	    money = G.Tool.UserHelper.ToCash(money)
		
		cc.find("ChatBG/Chat", this.node).getComponent(cc.Label).string = "全押 " + mo,self.thisney
		
	    return ChatAnim(sequence, chatBG)
	};

// 聊天效果 1
	ChatAnim = function(sequence, chatBG){
	    chatBG.active =(true)
	    chatBG.scale = Vector3(0, 0, 0)
	//----->需重新編譯程式碼    sequence:App}(DOTween.To( function(){ return chatBG.scale }, function(v) chatBG.scale = v }, Vector3(1, 1, 1), 0.1))
	//----->需重新編譯程式碼    sequence:AppendInterval(0.9)
	//----->需重新編譯程式碼    sequence:App}Callback(function (){ chatBG.active =(false) })
	//----->需重新編譯程式碼    return sequence
	};
	

};

module.exports = UIPlayer
