var uiScroll = require("MScrollChoose")

/** 用途: 歷史紀錄日期介面 */
function UIHistoryDate(root){
	
	let rootRect = root
	let nowDate = new Date();
	let currentYear = nowDate.getFullYear()
	let currentMonth = nowDate.getMonth() + 1
	let currentDay = nowDate.getDate()
	let changeCallback = null
	let self = this
	
	var SetPosition = function(pool, scroll, dateTime){
		let index = 1
		for (let i in pool) {
			if(parseInt(pool[i].content) == parseInt(dateTime)){
				index = i
			}
		}
		let totalCount = 0
		for (let i in pool) {
			if(pool[i].root.active == true){
				totalCount = totalCount +1
			}
		}
		index = totalCount - index -1
		scroll.MoveIndex(index)
	};
	
	var GetPosition = function(pool,index){
		let totalCount = 0
		for (let i = pool.length -1; i > 0; --i) {
			if(pool[i].root.active == true){
				if(index == totalCount){
					return i
				}
				totalCount = totalCount +1
			}
		}
		
		return index		
	};
	
    let prefabYear = cc.find("Year/Content/Text", root)
	prefabYear.active = false
	let poolYear = []
	let scrollRectYear = cc.find("Year", root).getComponent(cc.ScrollView)
	let scrollYear = new uiScroll(scrollRectYear, prefabYear.height, function(index){
		index = GetPosition(poolYear, index)
		let current = poolYear[index].content
		self.SetCurrentDate(current,currentMonth,currentDay)
				
		if(changeCallback != null){
			changeCallback()
		}
	})
    	
	let prefabMonth = cc.find("Month/Content/Text", root)
	prefabMonth.active = false
	let poolMonth = []
	let scrollRectMonth = cc.find("Month", root).getComponent(cc.ScrollView)
	let scrollMonth = new uiScroll(scrollRectMonth, prefabMonth.height, function(index){
		index = GetPosition(poolMonth, index)
		let current = poolMonth[index].content
		self.SetCurrentDate(currentYear,current,currentDay)
		if(changeCallback != null){
			changeCallback()
		}
	})
    	
	let prefabDay = cc.find("Day/Content/Text", root)
	prefabDay.active = false
	let poolDay = []
	let scrollRectDay = cc.find("Day", root).getComponent(cc.ScrollView)
	let scrollDay = new uiScroll(scrollRectDay, prefabDay.height, function(index){
		index = GetPosition(poolDay, index)
		let current = poolDay[index].content
		self.SetCurrentDate(currentYear,currentMonth,current)
				
		if(changeCallback != null){
			changeCallback()
		}
	})
		
	let rangeStartYear = currentYear
	let rangeStartMonth = currentMonth
	let rangeStartDay = currentDay
			
	let rangeEndYear = currentYear
	let rangeEndMonth = currentMonth
	let rangeEndDay = currentDay
		
	let CreateClone = function(index,pool,prefab){
		if(pool[index] != null){
			pool[index].root.active = true
			pool[index].content = null
			pool[index].txt.string = "-"
			return
		}
		let clone = cc.instantiate(prefab)
		let height = prefab.height
		if(clone == null) return
		prefab.parent.addChild(clone)
		clone.localPosition = cc.v3(0,height * (index -1) * -1,0)
		clone.scale = 1
		clone.name = prefab.name + index
		clone.active = true
			
		pool[index] = []
		pool[index].root = clone
		pool[index].txt = clone.getComponent(cc.Label)
		pool[index].content = null
		pool[index].txt.string = "-"
	};
		
	let SetPoolYear = function(){
		for (let i in poolYear) {
			poolYear[i].root.active = false
			poolYear[i].content = null
			poolYear[i].txt.string = "-"
		}

		let index = 0
		CreateClone(index,poolYear,prefabYear)
		for (let i = 1; i <= rangeEndYear-rangeStartYear +1; ++i) {
			CreateClone(i,poolYear,prefabYear)  
			poolYear[i].root.active = true
			let content = parseInt(rangeStartYear) + i -1
			poolYear[i].content = content
			poolYear[i].txt.string = content
			index = i +1
		}
		CreateClone(index,poolYear,prefabYear)
		
		let pool = []
		for (let i in poolYear) {
			if(poolYear[i].root.active == true){
				pool[i] = poolYear[i]
			}
		}
		scrollYear.SetPool(pool)
	};
	
	let SetPoolMonth = function(){
		let startMonth = 1
		if(rangeStartYear - currentYear == 0){
			startMonth = rangeStartMonth
		}
		
		let endMonth = 12
		if(rangeEndYear - currentYear == 0){
			endMonth = rangeEndMonth
		}
		
		for (let i in poolMonth) {
			poolMonth[i].root.active = false
			poolMonth[i].content = null
			poolMonth[i].txt.string = "-"
		}
		
		let index = 0
		CreateClone(index,poolMonth,prefabMonth)
		for (let i = 1; i <= endMonth-startMonth +1; ++i) {
			CreateClone(i,poolMonth,prefabMonth)  
			poolMonth[i].root.active = true
			let content = parseInt(startMonth) + i -1
			poolMonth[i].content = content
			poolMonth[i].txt.string = content
			index = i +1
		}
		CreateClone(index,poolMonth,prefabMonth)
		
		let pool = []
		for (let i in poolMonth) {
			if(poolMonth[i].root.active == true){
				pool[i] = poolMonth[i]
			}
		}
		scrollMonth.SetPool(pool)
	};
	
	let SetPoolDay = function(){
		let startDay = 1
		if(rangeStartYear - currentYear == 0){
			if(rangeStartMonth - currentMonth == 0){
				startDay = rangeStartDay
			}
		}
		
		let nowDate = new Date()
		let endDate = new Date(nowDate.getFullYear(), currentMonth, 0)
		let endDay = endDate.getDate()
		if(rangeEndYear - currentYear == 0){
			if(rangeEndMonth - currentMonth == 0){
				endDay = rangeEndDay
			}
		}
				
		for (let i in poolDay) {
			poolDay[i].root.active = false
			poolDay[i].content = null
			poolDay[i].txt.string = "-"
		}
		
		let index = 0
		CreateClone(index,poolDay,prefabDay)
		for (let i = 1; i <= endDay-startDay +1; ++i) {
			CreateClone(i,poolDay,prefabDay)
			poolDay[i].root.active = true
			let content = parseInt(startDay) + i -1
			poolDay[i].content = content
			poolDay[i].txt.string = content
			index = i +1
		}
		CreateClone(index,poolDay,prefabDay)
		
		let pool = []
		for (let i in poolDay) {
			if(poolDay[i].root.active == true){
				pool[i] = poolDay[i]
			}
		}
		scrollDay.SetPool(pool)
	};
		
	this.SetChangeCallback = function(callback){
		changeCallback = callback
	};
		
    /** 設置日期範圍 */
	this.SetRangeDate = function(startYear,startMonth,startDay,endYear,endMonth,endDay){
		console.log("SetRangeDate",startYear,startMonth,startDay,"~",endYear,endMonth,endDay)
		rangeStartYear = startYear
		rangeStartMonth = startMonth
		rangeStartDay = startDay
		
		rangeEndYear = endYear
		rangeEndMonth = endMonth
		rangeEndDay = endDay
	};
    /** 設置目前日期 */
	this.SetCurrentDate = function(year,month,day){
		currentYear = year
		if(parseInt(currentYear) < parseInt(rangeStartYear)){
			currentYear = rangeStartYear
		}
		if(parseInt(currentYear) > parseInt(rangeEndYear)){
			currentYear = rangeEndYear
		}
		
		currentMonth = month
		if(parseInt(currentYear) == parseInt(rangeStartYear)){
			if(parseInt(currentMonth) < parseInt(rangeStartMonth)){
				currentMonth = rangeStartMonth
			}
		}
		if(parseInt(currentYear) == parseInt(rangeEndYear)){
			if(parseInt(currentMonth) > parseInt(rangeEndMonth)){
				currentMonth = rangeEndMonth
			}
		}
		
		currentDay = day
		if(parseInt(currentYear) == parseInt(rangeStartYear) && parseInt(currentMonth) == parseInt(rangeStartMonth)){
			if(parseInt(currentDay) < parseInt(rangeStartDay)){
				currentDay = rangeStartDay
			}
		}
		if(parseInt(currentYear) == parseInt(rangeEndYear) && parseInt(currentMonth) == parseInt(rangeEndMonth)){
			if(parseInt(currentDay) > parseInt(rangeEndDay)){
				currentDay = rangeEndDay
			}
		}
		let nowDate = new Date()
		let endDate = new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 0)
		let lastDay = endDate.getDate()
		if(parseInt(currentDay) > parseInt(lastDay)){
			currentDay = lastDay
		}
		
		SetPoolYear()
		SetPosition(poolYear, scrollYear, currentYear)
		SetPoolMonth()
		SetPosition(poolMonth, scrollMonth, currentMonth)
		SetPoolDay()
		SetPosition(poolDay, scrollDay, currentDay)
	};
	
	this.GetCurrentYear = function(){
		return currentYear
	};
	this.GetCurrentMonth = function(){
		return currentMonth
	};
	this.GetCurrentDay = function(){
		return currentDay
	};
    /** 取得目前日期 */
	this.GetCurrentDate = function(){
		return new Date(currentYear, currentMonth -1, currentDay)
	};
	
	this.onExit = function(){
		for (let i = 0; i < poolYear.length; ++i)
			poolYear[i] = null
		for (let i = 0; i < poolMonth.length; ++i)
			poolMonth[i] = null
		for (let i = 0; i < poolDay.length; ++i)
			poolDay[i] = null
		
		scrollYear.Close()
		scrollMonth.Close()
		scrollDay.Close()
	};
	
	this.Show = function(){
		scrollYear.Show()
		scrollMonth.Show()
		scrollDay.Show()
				
		this.SetCurrentDate(currentYear, currentMonth, currentDay)
	};
	
	this.Hide = function(){
		scrollYear.Close()
		scrollMonth.Close()
		scrollDay.Close()
	};
	
}

module.exports = UIHistoryDate;