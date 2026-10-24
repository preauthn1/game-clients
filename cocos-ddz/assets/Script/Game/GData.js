var GEnum = require("GEnum")
var GameG = require("GameGlobal")

var GData = {
	extends: cc.Component,

	ator(){
		//////////////////////////////////////////////////////////////-
		//出牌方式
		this.OutCardMode = 2 	//(1-2_(1:正常出牌,2:特殊出牌))
		//桌子规则
		this.stRuleConfig = []
		//桌子配置
		this.stDeskConfig = []
		//座位数据
		this.Chairs = []
		//玩家位置(实际座位号)
		this.nOwnSeatId = -1
		//最大人数
		this.PLAY_NUM = 3
		//手牌数量17
		this.nHandCount = 17
		//出牌数据(自己)
		this.OutCard = []
		//
		this.stPeng = []
		//出牌操作数据
		this.KOper = []
		//出牌数据
		this.stCHUPHint = [] //[nOperType = 0, nKey = 0,nSeatId=0, number=0, data =[card1,card2,card3,card4]]
		//提示数据(出牌)
		this.stCPGHint = []
		//提示index
		this.HINDIDX = 0
		//是否有弹窗
		this.bDialog = false
		//游戏状态
		this.cbGameStatus = GEnum.GameStatus.kGSNone
		RESPath = ""
		SRCPath = "/ddz/"
		//////-判断倍率相加或相乘////////////////////////////-
		this.Calculation = 0
		this.oct = 0
		////测试用////////-
		this.text = null
		this.text1 = null
		this.text2 = null
		this.text3 = null
		this.text4 = null
		//[[选择扑克,操作]]//////////////
		this.nSelIndex = -1  //选择牌index
		this.pDargCard = null //拖拽的牌
		this.nSelOut = -1   //自动出牌idx
		this.pSelPos = null  //牌的初始位置
		//保存牌的初始位置
		this.pMjLoc = null
		this.pMjLLoc = null
		//////////////////////////////////////////////////////////////
		this.stDeskConfig = {}
		this.stDeskConfig.nDeskBaseScore = -1 		////底分
		this.stDeskConfig.nGameOvertime = -1 		////准备超时 时间
		this.stDeskConfig.nGameBaseBeishu = -1 	////游戏倍数:(默认1)
		this.stDeskConfig.nGameMaxBeishu = -1 	////游戏最大倍数:(默认1)
		//设计分辨率大小
		var CC_DESIGN_RESOLUTION = {}
		CC_DESIGN_RESOLUTION.width = 1334
		CC_DESIGN_RESOLUTION.height = 750
		//屏幕大小
		var display = {}
		display.width = GameG.GetScreenWidth()
		display.height = GameG.GetScreenHeight()
		
		/*////////////////////////////-
			屏幕适应
		////////////////////////////////-*/
		this.winScale = {}
		//计算屏幕变形比例
		this.winScale.x = display.width/CC_DESIGN_RESOLUTION.width
		this.winScale.y = display.height/CC_DESIGN_RESOLUTION.height
		this.winScale.max = Math.max(this.winScale.x, this.winScale.y)
		this.winScale.min = Math.min(this.winScale.x, this.winScale.y)
		this.display = {}
		this.display.width=display.width
		this.display.height=display.height
	},

	GetByUserID( nUserID ){
		for(let i in (this.Chairs)){ 
			let chair = this.Chairs[i] 
			if(chair && chair.pUser!=null && chair.pUser.UserID == nUserID){
				return chair
			}
		}
		return null
	},

	Clear( ){
		this.OutCard = []
		this.KOper = []
		this.stCHUPHint = []
		this.stCPGHint = []
		this.HINDIDX = 0
		this.cbGameStatus = -1
	    this.oct=0
		this.bDialog = false
	},

	Rest(){
		this.OutCard = []
		this.KOper = []
		this.stCHUPHint = []
		this.stCPGHint = []
		this.HINDIDX = 0
	},

	//椅子号转换(椅子号(0)开始)
	SwitchToView( nchair_idx ){
		return Math.mod(nchair_idx +this.PLAY_NUM - this.nOwnSeatId, this.PLAY_NUM) + 1
	},

	SwitchToIndex( nview_idx ){
		return Math.mod(this.nOwnSeatId+nview_idx-1, this.PLAY_NUM)
	},

	GetViewChair( nchair_idx ){
		let idx = this.SwitchToView(nchair_idx)
		return this.Chairs[idx]
	},

	//[[坐标,转换]]//////////////
	WorldToScreenPoint( loc_ ){
		// 修正Camera使用錯誤，應該使用遊戲中的Camera By Rayon
		let loc = CS.GameManager.Instance.GetCamera().WorldToScreenPoint(cc.v3(loc_.x,loc_.y,1))
		return loc
	},

	ScreenToWorldPoint( loc_ ){
		// 修正Camera使用錯誤，應該使用遊戲中的Camera By Rayon
		let loc = CS.GameManager.Instance.GetCamera().ScreenToWorldPoint(cc.v3(loc_.x,loc_.y,10.0))
		loc.z = loc.z - loc.z
		return loc
	},

	pSub( loc_1, loc_2 ){
		if( loc_2 ==0){ return [x=0,y=0] }
		let x = 0
		let y = 0
		x = loc_1.x - loc_2.x
		y = loc_1.y - loc_2.y
		return [x=x,y=y]
	},

	//[[ 矩形碰撞, 判断 ]]////////-
	rectContainsPoint( rect, loc ){
		if(loc.x >= rect.x && loc.x <= (rect.x+rect.width) && 
			loc.y >= rect.y && loc.y <= (rect.y+rect.height)){
			return true
		}
		return false
	},

	PlaySoundMJ( k_oper, n_gender, n_key ){

	},

	//排序提示数据
	SortHintCard(  ){
		if(this.stCPGHint.length <2){ return }
	
		let compare = function(data1,data2){
			let nKey1 = data1.nKey==2 && data1.nKey+12.5 || data1.nKey
			let nKey2 = data2.nKey==2 && data2.nKey+12.5 || data2.nKey

			if(data1.nOperType==10 || data1.nOperType==10){
				if(data1.nOperType==10 && data2.nOperType!=10){
					return false
				} 
				else if(data1.nOperType!=10 && data2.nOperType==10){
					return true
				} 
				else{
					return nKey1 - nKey2
				}
			}

			//炸弹(比key)
			if(data1.nOperType==4 || data2.nOperType==4){
				if(data1.nOperType==4 && data2.nOperType!=4){
					return false
				} 
				else if(data1.nOperType!=4 && data2.nOperType==4){
						return true
				} 
				else{
					return nKey1 - nKey2
				}
			}
			if(data1.nOperType < data2.nOperType){
				return true
			} 
			else if(data1.nOperType > data2.nOperType){
				return false
			} 
			else{
				return nKey1 - nKey2
			}		
		}
		this.stCPGHint.sort(compare);
	},
};

module.exports = GData
