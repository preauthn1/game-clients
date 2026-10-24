var G = require( "Global")
var GameG = require( "GameGlobal")
var goldFlowerModel = require("GoldFlowerModel")
//----->需重新編譯程式碼var DOTween = CS.DG.Tweening.DOTween
var Color = cc.Color
var Vector3 = cc.v3

// region 私有方法
var OnBackButton
var ShowUserCompare
var CallShowUserCompare
var ShowOtherCompare
var CallShowOtherCompare
// endregion
// region UI
var SelectCompare
var CompareOtherShow
var CompareUserShow
var BackButton    // 返回
var Player = []
var PKButton = []
// endregion
// region 数据
var maxPlayerNumber = 5
// endregion
// endregion

var UICompare = {
	extends: cc.Component,

	OnDestroy(){
	    CloseUI()
	},

	InitUI(th){
	    root = cc.find("UICompare",th)
	    SelectCompare = cc.find("SelectCompare", root)
	    CompareOtherShow = cc.find("CompareOtherShow", root)
	    CompareUserShow = cc.find("CompareUserShow", root)
	    SelectCompare.active =(false)
	    CompareOtherShow.active =(false)
	    CompareUserShow.active =(false)
    // region SelectCompare
	    BackButton = cc.find("BackButton",SelectCompare).getComponent(cc.Button)
	    BackButton.node.on('click', function(){
			GameG.PlayGameSound("se_click")
			OnBackButton()
		})		
		for(let i  =  1; i  <=  maxPlayerNumber; ++ i ){
			Player[i] = cc.find("Player",SelectCompare + i)
			PKButton[i] = cc.find("Player",SelectCompare + i + "/PokerStart").getComponent(cc.Button)
			PKButton[i].node.on('click', function (){ 
				GameG.PlayGameSound("se_click")
				OnCompareButton(i) 
			})
			Player[i].active =(false)
	    }
    // endregion
	},

	// 打开比牌界面
	OpenCompare(){
	    
    /*if(IsLastGame()) then
     print("<color=yellow>Final Game</color>")
            
       OnCompareButton(LastPlayer());
    end*/
	
	    this.active =(true)
	    SelectCompare.active =(true)
		for(let i  =  1; i <= maxPlayerNumber; ++ i ){
	        Player[i].active =(false)
	    }	
	
		for(let k in (goldFlowerModel.UserDataList)){ 
			let v = goldFlowerModel.UserDataList[k] 

	        if(tonumber(v.User.StateValue) >= 4 ){
	            let pos = goldFlowerModel.Call.GetSeatnoToPos(v.User.SeatNo)
	            
	            if(goldFlowerModel.Call.IsPlayerSeat != null(v.User.SeatNo) ){
	                if(v.drop && v.lose != null ){
	                      Player[pos].active =(true)
	                }
				} 
            	else{
	               
	                Player[pos].active =(true)
					cc.find("PlayerID", Player[pos]).getComponent(cc.Label).string = goldFlowerModel.GoldFlowerModelTab.IDTitle + v.User.UserID
	                let bet = 0
	                if(goldFlowerModel.UserBetMoneyList[tostring(v.User.UserID)] ){
	                    bet = goldFlowerModel.UserBetMoneyList[tostring(v.User.UserID)].BetMoney
	                }
	                cc.find("MoneyNumber", Player[pos]).getComponent(cc.Label).string = G.Tool.UserHelper.ToCash(tonumber(v.User.Score) - tonumber(bet))
	                cc.find("HeadImage", Player[pos]).active =(true)
					GameG.SetImageSprite(cc.find("HeadImage", Player[pos]).getComponent(cc.Sprite), v.User.FaceID.toString())
	                operTime = cc.find("OperTime",Player[pos]).getComponent(cc.Sprite)
	                operTime.active =(true)
	                operTime.fillAmount = 1
	
	                GameG.RemoveCountDown("UserCompareTime")
	                GameG.StartCountDown(tonumber(goldFlowerModel.GoldFlowerModelTab.currOperTime), "UserCompareTime", ShowTime, 0.1)
	
	                if(v.check ){
	                    let cards = goldFlowerModel.Call.SortPoker(goldFlowerModel.Call.GetSeatnoToUser(v.User.SeatNo).Cards)
						for(let i = 1; i <= cards.length; ++ i ){
	                        GameG.SetImageSprite(cc.find("BigPoker/BigCard",Player[pos] + i).getComponent(cc.Sprite), G.GetGamePName(), string.format("zjh_%s_%s", cards[i].Color, cards[i].CardNumber), false)
	                    }
					} 
              		else{
						for(let i = 1; i <= 3; ++ i ){
	                        GameG.SetImageSprite(cc.find("BigPoker/BigCard",Player[pos] + i).getComponent(cc.Sprite), G.GetGamePName(), "yes_color", false)
	                    }
	                }
	            }
	        }
	    }
		Player[3].active =(false)
	},

	// 显示玩家操作时间倒计时
	ShowTime(t){
	    let ss = tonumber(t) / tonumber(goldFlowerModel.GoldFlowerModelTab.currMaxOperTime)
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

	// 打开比牌动画UI
	OpenVS(data){
	    this.active =(true)
	    SelectCompare.active =(false)
   		// 当前玩家是不是"我""
	    if(goldFlowerModel.Call.IsPlayerSeat(goldFlowerModel.GoldFlowerModelTab.currSeatno) ){
	        return ShowUserCompare(data)
	} 
    else{
	        return ShowOtherCompare(data)
	    }
	},

	// 关闭比牌界面
	CloseUI(){
	    CS.UILoadingData.Hide()
	    GameG.RemoveCountDown("UserCompareTime")
	    SelectCompare.active =(false)
	    CompareOtherShow.active =(false)
	    CompareUserShow.active =(false)
	    this.active =(false)
	},

	IsLastGame(){
		let sum=0;
		for(let k in (goldFlowerModel.UserDataList)){ 
			let v = goldFlowerModel.UserDataList[k] 

	        if(tonumber(v.User.StateValue) >= 4 ){
	            let pos = goldFlowerModel.Call.GetSeatnoToPos(v.User.SeatNo)
	            
	            if(goldFlowerModel.Call.IsPlayerSeat != null(v.User.SeatNo) ){
	                if(v.drop && v.lose != null ){
	                    sum=sum+1;
	                   
	                }
				} 
           		else{
	                 if(v.drop && v.lose != null ){
	                    sum=sum+5
	                 }
	            }
	        }
	 }
	
	 return (sum==6)
	},

	LastPlayer(){
	
		for(let k in (goldFlowerModel.UserDataList)){ 
			let v = goldFlowerModel.UserDataList[k] 

	        if(tonumber(v.User.StateValue) >= 4 ){
	            let pos = goldFlowerModel.Call.GetSeatnoToPos(v.User.SeatNo)
	            
	            if(goldFlowerModel.Call.IsPlayerSeat != null(v.User.SeatNo) ){
	                if(v.drop && v.lose != null ){
	                 return pos;
	                }
	            }
	        }
	  }
	},

	// 显示自己的比牌结果 2.5秒
	ShowUserCompare(data){
	    CompareUserShow.active =(true)
	    let seatnoL = goldFlowerModel.GoldFlowerModelTab.currSeatno
	    let isWinL = tonumber(seatnoL) == tonumber(data.winseatno)
	    let seatnoR
	    if(isWinL ){
	        seatnoR = data.faildseatno
		} 
		else{
	        seatnoR = data.winseatno
	    }
	    let vL = goldFlowerModel.Call.GetSeatnoToUser(seatnoL)
	    let vR = goldFlowerModel.Call.GetSeatnoToUser(seatnoR)
	
	    let tran = CompareUserShow
		GameG.SetImageSprite(cc.find("LeftBG/LeftIcon",tran).getComponent(cc.Sprite), vL.User.FaceID.toString())
		GameG.SetImageSprite(cc.find("RightBG/RightIcon",tran).getComponent(cc.Sprite), vR.User.FaceID.toString())
	    let PokerStateL = cc.find("LeftBG/PokerStateL",tran)
	    let PokerStateR = cc.find("RightBG/PokerStateR",tran)
	    tran:Find("PK_shengli").active =(false)
	    GameG.SetImageSprite(PokerStateL.getComponent(cc.Sprite), G.GetGamePName(), "normal_3l", false)
	    GameG.SetImageSprite(PokerStateR.getComponent(cc.Sprite), G.GetGamePName(), "normal_3l", false)
	
	//----->需重新編譯程式碼    let sequence = DOTween.Sequence()
	//----->需重新編譯程式碼    sequence:AppendInterval(0.5)
	//----->需重新編譯程式碼    sequence:App}Callback(function (){ CallShowUserCompare(data) })
	//----->需重新編譯程式碼    sequence:AppendInterval(2)
	//----->需重新編譯程式碼    sequence:App}Callback(function (){ CloseUI() })
	    return sequence
	},

	CallShowUserCompare(data){
	    let seatnoL = goldFlowerModel.GoldFlowerModelTab.currSeatno
	    let isWinL = tonumber(seatnoL) == tonumber(data.winseatno)
	    let seatnoR
	    if(isWinL ){
	        seatnoR = data.faildseatno
		} 
		else{
	        seatnoR = data.winseatno
	    }
	    let vL = goldFlowerModel.Call.GetSeatnoToUser(seatnoL)
	    let vR = goldFlowerModel.Call.GetSeatnoToUser(seatnoR)
	
	    let tran = CompareUserShow
	    tran:Find("PK_shengli").active =(true)
	
	    if(isWinL ){
	        GameG.SetImageSprite(cc.find("LeftBG/PokerStateL",tran).getComponent(cc.Sprite), G.GetGamePName(), "normal_3l", false)
	        GameG.SetImageSprite(cc.find("RightBG/PokerStateR",tran).getComponent(cc.Sprite), G.GetGamePName(), "lose_3l", false)
	        tran:Find("PK_shengli/ALL/shengli").position = Vector3(-117, 196, 0),tran
	        tran:Find("PK_shengli/ALL/shibai").position = Vector3(146, 90, 0)
		} 
		else{
	        GameG.SetImageSprite(cc.find("RightBG/PokerStateR",tran).getComponent(cc.Sprite), G.GetGamePName(), "normal_3l", false)
	        GameG.SetImageSprite(cc.find("LeftBG/PokerStateL",tran).getComponent(cc.Sprite), G.GetGamePName(), "lose_3l", false)
	        tran:Find("PK_shengli/ALL/shibai").position = Vector3(-115, 181, 0,tran)
	        tran:Find("PK_shengli/ALL/shengli").position = Vector3(143, 105, 0)
	    }
	},

	// 显示别人的比牌结果 2.5秒
	ShowOtherCompare(data){
	    CompareOtherShow.active =(true)
	    let seatnoL = goldFlowerModel.GoldFlowerModelTab.currSeatno
	    let isWinL = tonumber(seatnoL) == tonumber(data.winseatno)
	    let seatnoR
	    if(isWinL ){
	        seatnoR = data.faildseatno
		} 
		else{
	        seatnoR = data.winseatno
	    }
	    let vL = goldFlowerModel.Call.GetSeatnoToUser(seatnoL)
	    let vR = goldFlowerModel.Call.GetSeatnoToUser(seatnoR)
	
	    let tran = CompareOtherShow
	    tran:Find("PK_wanjia").active =(false)
	    tran:Find("PK_shengli").active =(false)
		GameG.SetImageSprite(cc.find("LeftBG/LeftIcon",tran).getComponent(cc.Sprite), vL.User.FaceID.toString())
		GameG.SetImageSprite(cc.find("RightBG/RightIcon",tran).getComponent(cc.Sprite), vR.User.FaceID.toString())
	
	//----->需重新編譯程式碼    let sequence = DOTween.Sequence()
	//----->需重新編譯程式碼    sequence:AppendInterval(0.5)
	//----->需重新編譯程式碼    sequence:AppendCallback(function (){
	//----->需重新編譯程式碼    tran:Find("PK_wanjia").active =(true)
	//----->需重新編譯程式碼    G.Tool.Sound.PlayGameSound("bipai")
	//----->需重新編譯程式碼    })
	//----->需重新編譯程式碼    sequence:AppendInterval(0.5)
	//----->需重新編譯程式碼    sequence:AppendCallback(function (){
	//----->需重新編譯程式碼    CallShowOtherCompare(data)
	//----->需重新編譯程式碼    })
	//----->需重新編譯程式碼    sequence:AppendInterval(1.5)
	//----->需重新編譯程式碼    sequence:AppendCallback(function (){
	//----->需重新編譯程式碼    CloseUI()
	//----->需重新編譯程式碼    tran:Find("PK_shengli").active =(false)
	//----->需重新編譯程式碼    })
	    return sequence
	},

	CallShowOtherCompare(data){
	    let tran = CompareOtherShow
	    let seatnoL = goldFlowerModel.GoldFlowerModelTab.currSeatno
	    let isWinL = tonumber(seatnoL) == tonumber(data.winseatno)
	    let seatnoR
	    if(isWinL ){
	        seatnoR = data.faildseatno
	} 
    else{
	        seatnoR = data.winseatno
	    }
	    let vL = goldFlowerModel.Call.GetSeatnoToUser(seatnoL)
	    let vR = goldFlowerModel.Call.GetSeatnoToUser(seatnoR)
	    tran:Find("PK_wanjia").active =(false)
	    tran:Find("PK_shengli").active =(true)
	    if(isWinL ){
	        tran:Find("PK_shengli/ALL/shengli").position = Vector3(-180, 11, 0)
	        tran:Find("PK_shengli/ALL/shibai").position = Vector3(180, -5, 0)
	} 
    else{
	        tran:Find("PK_shengli/ALL/shibai").position = Vector3(-180, -5, 0),tran
	        tran:Find("PK_shengli/ALL/shengli").position = Vector3(180, 11, 0)
	    }
	},

// region But
// 关闭按钮
	OnBackButton(){
	    CloseUI()
	},

// 比牌按钮
	OnCompareButton(i){
	    CS.UILoadingData.Hide()
	    let data = []
	    data.seatno = goldFlowerModel.Call.GetPosToSeatno(i)
	    goldFlowerModel.Call.SendCompare(data)
	},


};

module.exports = UICompare
