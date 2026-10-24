let GameG = require("GameGlobal")
var gameModel= require("GameModel")

/** 用途: 歷史紀錄日期介面 */
function UIHistoryDate(root){
    let rootRect = root

    let rangeDateStart = null
    let rangeDateEnd = null
    let changeCallback = null

    let poolYear = new Map()
    let scrollYear = cc.find("Year", root).getComponent("CCScrollView")
    let prefabYear = cc.find("Year/Content/Text", root)
    let yearIndex = null

    let poolMonth = new Map()
    let scrollMonth = cc.find("Month", root).getComponent("CCScrollView")
    let prefabMonth = cc.find("Month/Content/Text", root)
    let monthIndex = null

    let poolDay = new Map()
    let scrollDay = cc.find("Day", root).getComponent("CCScrollView")
    let prefabDay = cc.find("Day/Content/Text", root)
    let dayIndex = null

    let GetPoolByIndex = function(pool, prefab, index){
        if(pool.has(index) == false){
            let clone = GameG.CreateClone(prefab)
            let data = {}
            data.root = clone
            data.txt = clone.getComponent(cc.Label)
            data.time = null

            pool.set(index, data)
        }
        return pool.get(index)
    }
    
    let SetPool = function(pool, prefab, startIndex, endIndex, scroll, currentIndex, callback){
        for (let data of pool.values()) {
            data.root.active = false
            data.time = null
            data.txt.string = ""
            data.root.name = data.txt.string
        }

        let front = GetPoolByIndex(pool, prefab, 0)
        front.root.active = true
        front.root.setSiblingIndex(-1)
        front.txt.string = "-"
        front.root.name = front.txt.string

        for(let i= startIndex; i <= endIndex; ++i){
            let date = GetPoolByIndex(pool, prefab, i)
            date.root.active = true
            date.root.setSiblingIndex(-1)
            date.time = i
            date.txt.string = i.toString()
            date.root.name = date.txt.string
        }

        let later = GetPoolByIndex(pool, prefab, endIndex +1)
        later.root.active = true
        later.root.setSiblingIndex(-1)
        later.txt.string = "-"
        later.root.name = later.txt.string
        // 指定目前日期
        let current = GetPoolByIndex(pool, prefab, currentIndex)
        scroll.SetChildAlignCenter(current.root)
        // 設定滾動結束事件
        scroll.SetCallbackScrollEnd(function(event){
            let child = scroll.GetChildAlignCenter()
			for (let data of pool.values()) {
				if(data.root.uuid == child.uuid){
					callback(data.time)
				}
			}
        })
    }
    /** 設置日期範圍 */
    this.SetRangeDate = function(startDate, endDate){
		console.log("SetRangeDate startDate",startDate.format("yyyy-MM-dd HH:mm:ss"))
		console.log("SetRangeDate endDate",endDate.format("yyyy-MM-dd HH:mm:ss"))
        rangeDateStart = startDate
        rangeDateEnd = endDate

        this.SetCurrentDate(endDate)
    }
    /** 設置目前日期 */
    this.SetCurrentDate = function(date){
        if(date.getTime() < rangeDateStart.getTime()){
            date = rangeDateStart
        }
        else if(date.getTime() > rangeDateEnd.getTime()){
            date = rangeDateEnd
        }

        yearIndex = date.getFullYear()
        monthIndex = date.getMonth() +1
        dayIndex = date.getDate()
        
        let self = this
        // year
        let startIndex = rangeDateStart.getFullYear()
        let endIndex = rangeDateEnd.getFullYear()
        SetPool(poolYear, prefabYear, startIndex, endIndex, scrollYear, yearIndex, function(dateTime){
            yearIndex = dateTime
            self.SetCurrentDate(self.GetCurrentDate())
            if(changeCallback != null){
                changeCallback()
            }
        })
        // month
        startIndex = (yearIndex == rangeDateStart.getFullYear()) ? (rangeDateStart.getMonth() +1) : 1
        endIndex = (yearIndex == rangeDateEnd.getFullYear()) ? (rangeDateEnd.getMonth() +1) : 12
        SetPool(poolMonth, prefabMonth, startIndex, endIndex, scrollMonth, monthIndex, function(dateTime){
            monthIndex = dateTime
            self.SetCurrentDate(self.GetCurrentDate())
            if(changeCallback != null){
                changeCallback()
            }
        })
        // day
        startIndex = (yearIndex == rangeDateStart.getFullYear() && monthIndex == rangeDateStart.getMonth() +1) ? rangeDateStart.getDate() : 1
        endIndex = (yearIndex == rangeDateEnd.getFullYear() && monthIndex == rangeDateEnd.getMonth() +1) ? rangeDateEnd.getDate() : new Date(yearIndex, monthIndex, 0).getDate()
        SetPool(poolDay, prefabDay, startIndex, endIndex, scrollDay, dayIndex, function(dateTime){
            dayIndex = dateTime
            self.SetCurrentDate(self.GetCurrentDate())
            if(changeCallback != null){
                changeCallback()
            }
        })
    }
    /** 取得目前日期 */
    this.GetCurrentDate = function(){
        return new Date(yearIndex + "/" + monthIndex + "/" + dayIndex)
    }
    /** 時間異動回調 */
    this.SetChangeCallback = function(callback){
        changeCallback = callback
    }
};

module.exports = UIHistoryDate