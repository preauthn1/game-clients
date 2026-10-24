var G = require( "Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var gameModel= require("GameModel")
var uiHistoryDate = require("UIHistoryDate")
var uidateStart = null
var uidateEnd = null
var betMoney = 0
var pageCurrent = 1 // 目前頁數
var pageTotal = 1 // 總頁數
var poolMaxCount = 9 // 單頁最大數量
var startFindDate = null // 開始查詢的日期
var endFindDate = null // 開始查詢的日期
var pool = []

var UIHistory = {
	extends: cc.Component,

//離開遊戲
	onExit(){
		uidateStart.onExit()
		uidateEnd.onExit()
	},

	CreateClone(index){
		let clone = cc.instantiate(this.prefab)
		if(clone == null){ return null }
		clone.parent =(this.prefab.parent)
		clone.position = cc.v3(0, 0, 0)
		clone.scale = 1
		clone.active =(false)
		
		pool[index] = []
		pool[index].root = clone
		pool[index].bg = cc.find("Background",clone)
		pool[index].txtBetCoin = cc.find("TextBetCoin",clone).getComponent(cc.Label)
		pool[index].txtOrderID = cc.find("TextOrderID",clone).getComponent(cc.Label)
		pool[index].txtProfit = cc.find("TextProfit",clone).getComponent(cc.Label)
		pool[index].txtTime = cc.find("TextTime",clone).getComponent(cc.Label)
		pool[index].imageCoin = cc.find("ImageCoin",clone)
		
		return clone	
	},

	Init(root){
		this.rootRect = root
		this.rootRect.active =(false)
		
		this.btnClose = cc.find("ButtonClose",root).getComponent(cc.Button)
		this.btnClose.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			Hide()
	    })
		
		this.btnFind = cc.find("ButtonFind",root).getComponent(cc.Button)
		this.btnFind.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			this.ShowFindOption()
	    })
		
		this.btnFront = cc.find("ButtonFront",root).getComponent(cc.Button)
		this.btnFront.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			pageCurrent = pageCurrent -1
			this.ChangePage()
			this.SendFindDate(startFindDate, endFindDate)
	    })
		
		this.btnNext = cc.find("ButtonNext",root).getComponent(cc.Button)
		this.btnNext.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			pageCurrent = pageCurrent +1
			this.ChangePage()
			this.SendFindDate(startFindDate, endFindDate)
	    })
		
		this.txtFind = cc.find("ButtonFind/Text",root).getComponent(cc.Label)
		this.txtPage = cc.find("ImagePage/Text",root).getComponent(cc.Label)
			
		this.rootCustom = cc.find("Custom",root)
		this.rootCustom.active =(false)
			
		this.rootFindOption = cc.find("FindOption",root)
		this.rootFindOption.scaleX = 1
		this.rootFindOption.scaleY = 0
		this.rootFindHide = cc.find("ButtonFind/ImageHide",root)
		this.rootFindHide.active =(false)
		this.rootFindShow = cc.find("ButtonFind/ImageShow",root)
		this.rootFindShow.active =(true)
		
		uidateStart = new uiHistoryDate(cc.find("Custom/ImageStart",root))
		uidateEnd = new uiHistoryDate(cc.find("Custom/ImageEnd",root))
		
		this.prefab = cc.find("ScrollView/Content/Prefab",root)
		this.prefab.active =(false)
		for(let i = 0; i <= poolMaxCount; ++ i){ 
			this.CreateClone(i) 
		}
		
	// 查詢天
		this.txtFindToday = cc.find("FindOption/ButtonToday/Text",root).getComponent(cc.Label)
		this.btnFindToday = cc.find("FindOption/ButtonToday",root).getComponent(cc.Button)
		this.btnFindToday.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			pageCurrent = 1
			this.ChangePage()
			let startDate = os.date("%Y-%m-%d")
			let endDate = os.date("%Y-%m-%d")
			this.SendFindDate(startDate,endDate)
			this.ShowFindText(this.txtFindToday)
			this.ShowFindOption()
	    })
	// 查詢周
		this.txtFindWeek = cc.find("FindOption/ButtonWeek/Text",root).getComponent(cc.Label)
		this.btnFindWeek = cc.find("FindOption/ButtonWeek",root).getComponent(cc.Button)
		this.btnFindWeek.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			pageCurrent = 1
			this.ChangePage()
			let startDate = os.date("%Y-%m-%d",os.time([year=os.date("%Y"),month=os.date("%m"),day=os.date("%d")-6]))
			let endDate = os.date("%Y-%m-%d")
			this.SendFindDate(startDate,endDate)
			this.ShowFindText(this.txtFindWeek)
			this.ShowFindOption()
	    })
	// 查詢月
		this.txtFindMonth = cc.find("FindOption/ButtonMonth/Text",root).getComponent(cc.Label)
		this.btnFindMonth = cc.find("FindOption/ButtonMonth",root).getComponent(cc.Button)
		this.btnFindMonth.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			pageCurrent = 1
			this.ChangePage()
			let startDate = os.date("%Y-%m-%d",os.time([year=os.date("%Y"),month=os.date("%m")-1,day=os.date("%d")+1]))
			let endDate = os.date("%Y-%m-%d")
			this.SendFindDate(startDate,endDate)
			this.ShowFindText(this.txtFindMonth)
			this.ShowFindOption()
	    })
	// 自訂查詢
		this.txtFindCustom = cc.find("FindOption/ButtonCustom/Text",root).getComponent(cc.Label)
		this.btnFindCustom = cc.find("FindOption/ButtonCustom",root).getComponent(cc.Button)
		this.btnFindCustom.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			pageCurrent = 1
			this.ChangePage()
			this.ShowFindText(this.txtFindCustom)
			this.ShowFindOption()
			this.rootCustom.active =(true)
			uidateStart.Show()
			uidateEnd.Show()
	    })
		
	//　確認查詢
		this.btnEnter = cc.find("Custom/ButtonEnter",root).getComponent(cc.Button)
		this.btnEnter.node.on('click',function(){
			GameG.PlayGameSound("se_click")
			pageCurrent = 1
			this.ChangePage()
			this.rootCustom.active =(false)
			let startDate = uidateStart.GetCurrentDate()
			let endDate = uidateEnd.GetCurrentDate()
			this.SendFindDate(startDate,endDate)
			uidateStart.Hide()
			uidateEnd.Hide()
	    })
	},

// 顯示介面
	Show(){
		this.rootRect.active =(true)
		this.rootCustom.active =(false)
				
        let nowDate = new Date();
        let year = nowDate.getFullYear()
        let month = nowDate.getMonth() + 1
        let day = nowDate.getDate()
		let self = this
		
        UIHistory.this.SendFindDate(nowDate,nowDate)
		this.ShowFindText(this.txtFindToday)
		
        this.uidateStart.SetRangeDate(2018,1,1,year,month,day)
        this.uidateStart.SetCurrentDate(year,month,day)
		uidateStart.SetChangeCallback(function(){		
			let startYear = uidateStart.GetCurrentYear()
			let startMonth = uidateStart.GetCurrentMonth()
			let startDay = uidateStart.GetCurrentDay()
			
			let endYear = uidateEnd.GetCurrentYear()
			let endMonth = uidateEnd.GetCurrentMonth()
			let endDay = uidateEnd.GetCurrentDay()
			
            self.uidateEnd.SetRangeDate(startYear,startMonth,startDay,year,month,day)
			uidateEnd.SetCurrentDate(endYear,endMonth,endDay)
			
		})
        this.uidateEnd.SetRangeDate(year,month,day,year,month,day)
        this.uidateEnd.SetCurrentDate(year,month,day)	
		
		this.ChangePage()
	},

// 關閉介面
	Hide(){
		this.rootRect.active =(false)
	},

// 回合開始
	SetGameStart(){	
	
	},

// 回合結束
	SetGameEnd(){
		
	},

	ShowFindOption(){
		this.rootFindShow.active =(this.rootFindHide.activeSelf == true)
		this.rootFindHide.active =(this.rootFindHide.activeSelf  == false)
		if(this.rootFindHide.activeSelf == true){
			let sequence = GameG.NewTween(this.rootFindHide)
			sequence.to(0.2, {scaleY: 1})
	} 
	else{
			this.rootCustom.active =(false)
			let sequence = GameG.NewTween(this.rootFindHide)
			sequence.to(0.2, {scaleY: 0})
		}
	},

	ShowFindText(temp){
		this.txtFindToday.color = cc.Color.white
		this.txtFindWeek.color = cc.Color.white
		this.txtFindMonth.color = cc.Color.white
		this.txtFindCustom.color = cc.Color.white
		this.txtFind.text = temp.text
		temp.color = this.txtFind.color
	},

// 送出查詢(開始日期,結束日期)
	SendFindDate(startDate,endDate){
		startFindDate = startDate
		endFindDate = endDate
		
		gameModel.SendFindHistory(startDate, endDate, pageCurrent, poolMaxCount)
	},

// 接收查詢資訊
	SetFindData(data){
		pageTotal = math.ceil(data.PageCount / poolMaxCount)
		
	for(let  i = 1;  i <=  pool.length; ++ i){
			pool[i].root.active =(false)
		} 
		
		let list = data.SendHistoryLog || []
	for(let  i = 1;  i <=  list.length; ++ i){
			pool[i].root.active =(true)
			pool[i].txtBetCoin.text = string.format("%.2f", list[i].BetMoney * 0.01)
			pool[i].txtOrderID.text = list[i].OrderID
			pool[i].txtProfit.text = string.format("%.2f", list[i].Profit * 0.01)
			pool[i].txtTime.text = list[i].CreateTime
			pool[i].imageCoin.active =(list[i].Profit > 0)
			pool[i].bg.active =(i%2 == 1)
		}
		
		this.ChangePage()
	},

	ChangePage(){
		
		this.btnFront.active =(pageCurrent > 1)
		this.btnNext.active =(pageCurrent < pageTotal)
		
		this.txtPage.text = pageCurrent
	},


};

module.exports = UIHistory
