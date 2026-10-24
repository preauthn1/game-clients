var GameG = require("GameGlobal")
var gameData = require("GameData")
var gameModel= require("GameModel")
var UIHistoryDate = require("UIHistoryDate")

/** 用途: 歷史紀錄介面 */
var UIHistory = {
    extends: cc.Component,
    
	/** 遊戲離開(斷線重連) */
    onExit(){
        if (this.uidateStart)
            this.uidateStart.onExit()
        if (this.uidateEnd)
            this.uidateEnd.onExit()
    },
    
    CreateClone(index){
        let clone = cc.instantiate(this.prefab)
        if(clone == null) return null
        this.prefab.parent.addChild(clone)
        clone.scale = 1
        clone.active = false
        
        this.pool[index] = {}
        this.pool[index].root = clone
        this.pool[index].bg = cc.find("Background", clone)
        this.pool[index].txtBetCoin = cc.find("TextBetCoin", clone).getComponent(cc.Label)
        this.pool[index].txtOrderID = cc.find("TextOrderID", clone).getComponent(cc.Label)
        this.pool[index].txtProfit = cc.find("TextProfit", clone).getComponent(cc.Label)
        this.pool[index].txtTime = cc.find("TextTime", clone).getComponent(cc.Label)
        this.pool[index].imgCoin = cc.find("ImageCoin", clone).getComponent(cc.Sprite)
            
        return clone	
    },
    /** 初始化 */
    Init(root){
        this.betMoney = 0
        this.pageCurrent = 1 // 目前頁數
        this.pageTotal = 1 // 總頁數
        this.poolMaxCount = 9 // 單頁最大數量
        this.startFindDate = null // 開始查詢的日期
        this.endFindDate = null // 開始查詢的日期
        this.pool = []

        this.rootRect = root
        this.rootRect.active = false
        // 關閉按鈕
        this.btnClose = cc.find("ButtonClose", root).getComponent(cc.Button)
        this.btnClose.node.on('click', function () {
            GameG.PlayGameSound("se_click")
            UIHistory.Hide()
        })
        // 搜尋按鈕
        this.btnFind = cc.find("ButtonFind", root).getComponent(cc.Button)
        this.btnFind.node.on('click', function () {
            GameG.PlayGameSound("se_click")
            UIHistory.ShowFindOption()
        })

        this.btnShow = cc.find("ButtonFind/ImageShow", root).addComponent(cc.Button)
        this.btnShow.node.on('click', function () {
            GameG.PlayGameSound("se_click")
            UIHistory.ShowFindOption()
        })  

        this.btnHide = cc.find("ButtonFind/ImageHide", root).addComponent(cc.Button)
        this.btnHide.node.on('click', function () {
            GameG.PlayGameSound("se_click")
            UIHistory.ShowFindOption()
        })      
        // 上一頁按鈕
        this.btnFront = cc.find("ButtonFront", root).getComponent(cc.Button)
        this.btnFront.node.on('click', function () {
            GameG.PlayGameSound("se_click")
            UIHistory.pageCurrent = UIHistory.pageCurrent -1
            UIHistory.ChangePage()
            UIHistory.SendFindDate(UIHistory.startFindDate, UIHistory.endFindDate)
        })
        // 下一頁按鈕
        this.btnNext = cc.find("ButtonNext", root).getComponent(cc.Button)
        this.btnNext.node.on('click', function () {
            GameG.PlayGameSound("se_click")
            UIHistory.pageCurrent = UIHistory.pageCurrent +1
            UIHistory.ChangePage()
            UIHistory.SendFindDate(UIHistory.startFindDate, UIHistory.endFindDate)
        })
        // 搜尋文字
        this.txtFind = cc.find("ButtonFind/Text", root).getComponent(cc.Label)
        // 頁數文字
        this.txtPage = cc.find("ImagePage/Text", root).getComponent(cc.Label)

        this.rootCustom = cc.find("Custom", root)
        this.rootCustom.active = false
            
        this.rootFindOption = cc.find("FindOption", root)
        this.rootFindOption.scaleX = 1;
        this.rootFindOption.scaleY = 0;
        this.rootFindOption.scaleZ = 1;
        this.rootFindHide = cc.find("ButtonFind/ImageHide", root)
        this.rootFindHide.active = false
        this.rootFindShow = cc.find("ButtonFind/ImageShow", root)
        this.rootFindShow.active = true
        
        // 自訂日期-開始日期
        this.uidateStart = new UIHistoryDate(cc.find("Custom/ImageStart", root))
        // 自訂日期-結束日期
        this.uidateEnd = new UIHistoryDate(cc.find("Custom/ImageEnd", root))
        
        this.prefab = cc.find("ScrollView/Content/Prefab", root)
        this.prefab.active = false
        for (let i = 0; i < this.poolMaxCount; ++i)
        UIHistory.CreateClone(i)
        
        // 查詢天
        this.txtFindToday = cc.find("FindOption/ButtonToday/Text", root).getComponent(cc.Label)
        this.btnFindToday = cc.find("FindOption/ButtonToday", root).getComponent(cc.Button)
        this.btnFindToday.node.on('click', function () {
            GameG.PlayGameSound("se_click")
            UIHistory.pageCurrent = 1
            UIHistory.ChangePage()
            let nowDate = new Date()
            UIHistory.SendFindDate(nowDate,nowDate)
            UIHistory.ShowFindText(UIHistory.txtFindToday)
            UIHistory.ShowFindOption()
        })
        // 查詢周
        this.txtFindWeek = cc.find("FindOption/ButtonWeek/Text", root).getComponent(cc.Label)
        this.btnFindWeek = cc.find("FindOption/ButtonWeek", root).getComponent(cc.Button)
        this.btnFindWeek.node.on('click', function () {
            GameG.PlayGameSound("se_click")
            UIHistory.pageCurrent = 1
            UIHistory.ChangePage()
            let nowDate = new Date()
            let startDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() - 7);
            UIHistory.SendFindDate(startDate,nowDate)
            UIHistory.ShowFindText(UIHistory.txtFindWeek)
            UIHistory.ShowFindOption()
        })
        // 查詢月
        this.txtFindMonth = cc.find("FindOption/ButtonMonth/Text", root).getComponent(cc.Label)
        this.btnFindMonth = cc.find("FindOption/ButtonMonth", root).getComponent(cc.Button)
        this.btnFindMonth.node.on('click', function () {
            GameG.PlayGameSound("se_click")
            UIHistory.pageCurrent = 1
            UIHistory.ChangePage()
            let nowDate = new Date()
            let startDate = new Date(nowDate.getFullYear(), nowDate.getMonth() - 1, nowDate.getDate());
            UIHistory.SendFindDate(startDate,nowDate)
            UIHistory.ShowFindText(UIHistory.txtFindMonth)
            UIHistory.ShowFindOption()
        })
        // 自訂查詢
        this.txtFindCustom = cc.find("FindOption/ButtonCustom/Text", root).getComponent(cc.Label)
        this.btnFindCustom = cc.find("FindOption/ButtonCustom", root).getComponent(cc.Button)
        this.btnFindCustom.node.on('click', function () {
            GameG.PlayGameSound("se_click")
            UIHistory.pageCurrent = 1
            UIHistory.ChangePage()
            UIHistory.ShowFindText(UIHistory.txtFindCustom)
            UIHistory.ShowFindOption()
            UIHistory.rootCustom.active = true
			UIHistory.uidateStart.Show()
			UIHistory.uidateEnd.Show()
        })
        
        //　確認查詢
        this.btnEnter = cc.find("Custom/ButtonEnter", root).getComponent(cc.Button)
        this.btnEnter.node.on('click', function () {
            GameG.PlayGameSound("se_click")
            UIHistory.pageCurrent = 1
            UIHistory.ChangePage()
            UIHistory.rootCustom.active = false
            let startDate = UIHistory.uidateStart.GetCurrentDate()
            let endDate = UIHistory.uidateEnd.GetCurrentDate()
            UIHistory.SendFindDate(startDate,endDate)
			UIHistory.uidateStart.Hide()
			UIHistory.uidateEnd.Hide()
        })
    },

    /** 顯示介面 */
    Show(){
        this.rootRect.active = true
        this.rootCustom.active = false

        let nowDate = new Date();
        let year = nowDate.getFullYear()
        let month = nowDate.getMonth() + 1
        let day = nowDate.getDate()
		let self = this

        UIHistory.SendFindDate(nowDate,nowDate)
        UIHistory.ShowFindText(this.txtFindToday)
        
        this.uidateStart.SetRangeDate(2018,1,1,year,month,day)
        this.uidateStart.SetCurrentDate(year,month,day)
        this.uidateStart.SetChangeCallback(function(){
            let startYear = self.uidateStart.GetCurrentYear()
            let startMonth = self.uidateStart.GetCurrentMonth()
            let startDay = self.uidateStart.GetCurrentDay()
            
            let endYear = self.uidateEnd.GetCurrentYear()
            let endMonth = self.uidateEnd.GetCurrentMonth()
            let endDay = self.uidateEnd.GetCurrentDay()
            
            self.uidateEnd.SetRangeDate(startYear,startMonth,startDay,year,month,day)
            self.uidateEnd.SetCurrentDate(endYear,endMonth,endDay)
            
        })
        this.uidateEnd.SetRangeDate(year,month,day,year,month,day)
        this.uidateEnd.SetCurrentDate(year,month,day)	

        UIHistory.ChangePage()
    },
        
    /** 關閉介面 */
    Hide(){
        this.rootRect.active = false
    },
    
    // 回合開始
    SetGameStart(){
    
    },
    
    // 回合結束
    SetGameEnd(){
        
    },
    /** 動畫-下拉式選單-查詢日期類型 */
    ShowFindOption(){
        this.rootFindShow.active = this.rootFindHide.activeInHierarchy == true
        this.rootFindHide.active = this.rootFindHide.activeInHierarchy  == false
		let sequence = cc.tween(this.rootFindOption)
        if(this.rootFindHide.activeInHierarchy == true){
			sequence.to(0.2, {scaleY: 1})
        }
        else{
            this.rootCustom.active = false
			sequence.to(0.2, {scaleY: 0})
        }
		sequence.start()
    },
    
    ShowFindText(temp){
        this.txtFindToday.color = cc.Color.WHITE
        this.txtFindWeek.color = cc.Color.WHITE
        this.txtFindMonth.color = cc.Color.WHITE
        this.txtFindCustom.color = cc.Color.WHITE
        this.txtFind.string = temp.string
        temp.color = this.txtFind.color
    },
    
    DateToUtcString(date){
        // var d  = date.getUTCDate();
        // var day = (d < 10) ? '0' + d : d;
        // var m = date.getUTCMonth() + 1;
        // var month = (m < 10) ? '0' + m : m;
        // var yy = date.getUTCFullYear();
        // var year = (yy < 1000) ? yy + 1900 : yy;
        
        // var finalDate = year + "-" + month + "-" + day;
        var finalDate = date.toISOString();
        return finalDate;
    },

    GetTimeZone()
    {
        var time = new Date();
        var timeZone = -(time.getTimezoneOffset() / 60);
        return timeZone;
    },

    // 送出查詢(開始日期,結束日期)
    SendFindDate(startDate,endDate){
        this.startFindDate = startDate
        this.endFindDate = endDate

        startDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), 0,  0, 0);
        endDate = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), 23, 59, 59);

		startDate = this.DateToUtcString(startDate);
		endDate = this.DateToUtcString(endDate);

        gameModel.SendFindHistory(startDate, endDate, this.pageCurrent, this.poolMaxCount)
    },
    
    DateToLocaleString(date){
        let string = date.toLocaleString('zh',
        {
            year:'numeric',
            month:'2-digit',
            day:'2-digit',
            hour:'2-digit',
            minute:'2-digit',
            second:'2-digit',
            hour12:false
        });

        string = string.replace(/\//ig, "-"); 
        return string
    },

    // 接收查詢資訊
    SetFindData(data){
        this.pageTotal = Math.ceil(data.PageCount / this.poolMaxCount)
        
        for (let i = 0; i < this.pool.length; ++i){
            this.pool[i].root.active = false
        }
        
        let list = data.SendHistoryLog || {}
        for (let i = 0; i < list.length; ++i){
            this.pool[i].root.active = true
            this.pool[i].txtBetCoin.string = GameG.FormatNum(list[i].BetMoney)
            this.pool[i].txtOrderID.string = list[i].OrderID
            this.pool[i].txtProfit.string = GameG.FormatNum(list[i].Profit)
            this.pool[i].bg.active = i%2 == 1
            let UTCTimeObj = new Date(list[i].CreateTime)
            this.pool[i].txtTime.string = this.DateToLocaleString(UTCTimeObj)
            this.pool[i].imgCoin.node.active = (parseInt(list[i].Profit) > 0)
        }
        
        UIHistory.ChangePage()
    },
    
    ChangePage(){
        
        this.btnFront.node.active = this.pageCurrent > 1
        this.btnNext.node.active = this.pageCurrent < this.pageTotal
        
        this.txtPage.string = GameG.GetLocalizedString("页数").replace("####", this.pageCurrent)
    },
};

module.exports = UIHistory;