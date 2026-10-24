let GameG = require("GameGlobal")
var gameModel = require("GameModel")
var UIHistoryDate = require("UIHistoryDate")

let rootRect = null
let isShowFindOption = false
let poolFind = []
let findOptionIndex = 0
let findPageIndex = 1
let findPageMax = 1
let findMaxCount = 9
let poolData = []
let findDateStart = null
let findDateEnd = null

/** 用途: 歷史紀錄介面 */
var UIHistory = {
	/** 遊戲離開(斷線重連) */
	onExit(){
        isShowFindOption = false
        poolFind = []
        findOptionIndex = 0
        findPageIndex = 1
        findPageMax = 1
        findMaxCount = 9
        poolData = []
        findDateStart = null
        findDateEnd = null
    },
    /** 初始化 */
    Init(root){        
        rootRect = root
        rootRect.active = false 
        // 設置多國語言
        GameG.SetNodeLocalized(cc.find("Background/TextTitle", root),"HistoryTitle")
        GameG.SetNodeLocalized(cc.find("Custom/TextTitle", root),"HistoryTitle")
        GameG.SetNodeLocalized(cc.find("ScrollView/TextTime", root),"HistoryDate")
        GameG.SetNodeLocalized(cc.find("ScrollView/TextOrderID", root),"HistoryOrder")
        GameG.SetNodeLocalized(cc.find("ScrollView/TextBetCoin", root),"HistoryStack")
        GameG.SetNodeLocalized(cc.find("ScrollView/TextProfit", root),"HistoryReturns")
        GameG.SetNodeLocalized(cc.find("Custom/ImageStart/TextTitle", root),"HistoryStart")
        GameG.SetNodeLocalized(cc.find("Custom/ImageEnd/TextTitle", root),"HistoryEnd")

        let self = this
        // 關閉按鈕
        this.btnHide = cc.find("ButtonHide", root).getComponent(cc.Button)
        this.btnHide.node.on('click', function () {
            GameG.PlayGameSound("se_click")
            self.Hide()
        })
        // 頁數文字
        this.txtFindPage = cc.find("ImagePage/Text", root).getComponent(cc.Label)
        // 搜尋文字
        this.txtFindOption = cc.find("ButtonFind/Text", root).getComponent(cc.Label)
        this.rootFindShow = cc.find("ButtonFind/ImageShow", root)
        this.rootFindHide = cc.find("ButtonFind/ImageHide", root)
        // 搜尋按鈕
        this.btnFind = cc.find("ButtonFind", root).getComponent(cc.Button)
        this.btnFind.node.on('click', function () {
            GameG.PlayGameSound("se_click")
            self.ShowFindOption(isShowFindOption == false, 0.2)
        })

        this.prefabData = cc.find("ScrollView/Content/Prefab", root)
        this.prefabData.active = false

        this.rootCustom = cc.find("Custom", root)

        this.rootFindOption = cc.find("FindOption", root)        
        for(let i in this.rootFindOption.children){
            let rootDate = this.rootFindOption.children[i]
            poolFind[i] = {}
            poolFind[i].txt = cc.find("Text", rootDate).getComponent(cc.Label)
            poolFind[i].txt.string = GameG.GetLocalizedString("HistoryFind" + i)
            poolFind[i].btn = rootDate.getComponent(cc.Button)
            poolFind[i].btn.node.on('click', function () {
                GameG.PlayGameSound("se_click")
                self.ShowFindOption(false, 0.2)                
                self.rootCustom.active = (i == 3)
                self.SendFindHistory(i)
            })
        }
        // 上一頁按鈕
        this.btnFront = cc.find("ButtonFront", root).getComponent(cc.Button)
        this.btnFront.node.on('click', function () {
            GameG.PlayGameSound("se_click")
            findPageIndex = findPageIndex -1
            self.SendFindHistory(findOptionIndex)
        })
        // 下一頁按鈕
        this.btnNext = cc.find("ButtonNext", root).getComponent(cc.Button)
        this.btnNext.node.on('click', function () {
            GameG.PlayGameSound("se_click")
            findPageIndex = findPageIndex +1
            self.SendFindHistory(findOptionIndex)
        })
        // 自訂日期-確定按鈕
        this.btnEnter = cc.find("Custom/ButtonEnter", root).getComponent(cc.Button)
        this.btnEnter.node.on('click', function () {
            GameG.PlayGameSound("se_click")
            self.rootCustom.active = false
            self.SendFindHistory(3)
        })
        // 自訂日期-開始日期
        findDateStart = new UIHistoryDate(cc.find("Custom/ImageStart", root)) 
        findDateStart.SetChangeCallback(function(){
            let dateTime = findDateEnd.GetCurrentDate()
            findDateEnd.SetRangeDate(findDateStart.GetCurrentDate(), new Date())
            findDateEnd.SetCurrentDate(dateTime)
        })
        // 自訂日期-結束日期
        findDateEnd = new UIHistoryDate(cc.find("Custom/ImageEnd", root)) 
    },

    CreateClone(index){
        if(poolData[index] == null){
            let clone = GameG.CreateClone(this.prefabData)

            poolData[index] = {}
            poolData[index].root = clone
            poolData[index].bg = cc.find("Background", clone)
            poolData[index].txtBetCoin = cc.find("TextBetCoin", clone).getComponent(cc.Label)
            poolData[index].txtOrderID = cc.find("TextOrderID", clone).getComponent(cc.Label)
            poolData[index].txtProfit = cc.find("TextProfit", clone).getComponent(cc.Label)
            poolData[index].txtTime = cc.find("TextTime", clone).getComponent(cc.Label)
            poolData[index].imgCoin = cc.find("ImageCoin", clone).getComponent(cc.Sprite)
        }
    },
    /** 顯示介面 */
    Show(){
        rootRect.active = true
        this.ShowFindOption(false)
        this.SendFindHistory(findOptionIndex)

        findDateStart.SetRangeDate(new Date('2018-01-01'), new Date())
        findDateEnd.SetRangeDate(findDateStart.GetCurrentDate(), new Date())
    },
    /** 關閉介面 */
    Hide(){
        rootRect.active = false 
    },
    /** 動畫-下拉式選單-查詢日期類型 */
    ShowFindOption(enable, timer){
        timer = timer || 0
        isShowFindOption = enable    
        this.rootFindShow.active = (enable == false)
        this.rootFindHide.active = (enable == true)
		let sequence = GameG.NewTween(this.rootFindOption)
        if(enable == true){
			sequence.to(timer, {scaleY: 1})
        }
        else{
            this.rootCustom.active = false
			sequence.to(timer, {scaleY: 0})
        }
		sequence.start()
    },
    /** 查詢歷史紀錄
     * @param {number} index (0:今天, 1:過去7天, 2:過去30天, 3:自訂日期)
     */
    SendFindHistory(index){
        if(findOptionIndex != index){
            findPageIndex = 1
        }

        findOptionIndex = index
        this.txtFindOption.string = poolFind[index].txt.string
        for(let i in poolFind){
            poolFind[i].txt.color = (i == index)? this.txtFindOption.color : cc.Color.WHITE
        }

        let dt = new Date()
        let endDate = dt
        
        if(findOptionIndex == 1){
            dt.setDate(dt.getDate() -7)
        }
        else if(findOptionIndex == 2){
            dt.setDate(dt.getDate() -30)
        }
        else if(findOptionIndex == 3){
            dt = findDateStart.GetCurrentDate()
            endDate = findDateEnd.GetCurrentDate()
        }
        let startDate = dt
        
        gameModel.SendFindHistory(startDate.firstTime(), endDate.lastTime(), findPageIndex, findMaxCount)
    },
    /** 歷史訊息
	 * @param {WLZBJP_MSG_GameLogRecord} receiveMsg 封包: CSDJP_LoadHistoryRetID = 22002
     */
    SetFindData(data){
        findPageMax = Math.ceil(data.PageCount / findMaxCount)
        this.btnFront.node.active = (findPageIndex > 1)
        this.btnNext.node.active = (findPageIndex < findPageMax)
        this.txtFindPage.string = GameG.GetLocalizedString("HistoryPage").replace("####", findPageIndex)
        for(let i in poolData){
            poolData[i].root.active = false
        }
        
        let list = data.Logs || {}
        for (let i in data.Logs){
            this.CreateClone(i)
            poolData[i].root.active = true
            poolData[i].txtBetCoin.string = GameG.FormatNum(list[i].BetMoney)
            poolData[i].txtOrderID.string = list[i].OrderID
            poolData[i].txtProfit.string = GameG.FormatNum(list[i].Profit)
            poolData[i].bg.active = (i%2 == 1)
            poolData[i].txtTime.string = new Date(list[i].CreateTime).format("yyyy-MM-dd HH:mm:ss");
            poolData[i].imgCoin.node.active = (parseInt(list[i].Profit) > 0)
        }
    },
};

module.exports = UIHistory

Date.prototype.format = function(fmt) {
    fmt = fmt.replace('yyyy', this.getFullYear())
    fmt = fmt.replace('MM', ('0' + (this.getMonth() + 1)).substr(-2))
    fmt = fmt.replace('dd', ('0' + (this.getDate())).substr(-2))
    fmt = fmt.replace('HH', ('0' + (this.getHours())).substr(-2))
    fmt = fmt.replace('mm', ('0' + (this.getMinutes())).substr(-2))
    fmt = fmt.replace('ss', ('0' + (this.getSeconds())).substr(-2))
    return fmt;
}

Date.prototype.firstTime = function() {
    let dt = this
    dt = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(), 0,  0, 0)
    return dt;
}

Date.prototype.lastTime = function() {
    let dt = this
    dt = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(),23,  59, 59)
    return dt;
}