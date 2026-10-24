var G = require( "Global")
var gameData = require("GameData")
var uiScroll = require("MScrollChoose")

function UIHistoryDate(root){
	let rootRect = root
	let target = []
	let nowDate = new Date();
	let currentYear = nowDate.getFullYear()
	let currentMonth = nowDate.getMonth() + 1
	let currentDay = nowDate.getDate()
	let changeCallback = null
	let sequenceListener = null
	
	let  SetPosition = function(pool, scroll, dateTime){
		let index = 1
		for(let i = 1; i <= pool.length; ++ i){
			if(tonumber(pool[i].content) == tonumber(dateTime)){
				index = i
			}
		}
		let totalCount = 0
		for(let i = 1; i <= pool.length; ++ i){
			if(pool[i].root.activeSelf == true){
				totalCount = totalCount +1
			}
		}
		index = totalCount - index
		scroll.MoveIndex(index)
	}
	
	let  GetPosition = function(pool,index){
		let totalCount = 0
		for(let i = pool.length; i <=  1; ++ i){
			if(pool[i].root.activeSelf == true){
				if(index == totalCount){
					return i
				}
				totalCount = totalCount +1
			}
		}
		
		return index		
	}
	
	let prefabYear = cc.find("Year/Content/Text",rootRect)
	prefabYear.active =(false)
	let poolYear = []
	let scrollRectYear = cc.find("Year",rootRect).getComponent(cc.ScrollView)
	let scrollYear = new uiScroll(scrollRectYear, prefabYear.height, function(index){
		index = GetPosition(poolYear, index)
		let current = poolYear[index].content
		SetCurrentDate(current,currentMonth,currentDay)
				
		if(changeCallback != null){
			changeCallback()
		}
	})
		
	let prefabMonth = cc.find("Month/Content/Text",rootRect)		
	prefabMonth.active =(false)
	let poolMonth = []
	let scrollRectMonth = cc.find("Month",rootRect).getComponent(cc.ScrollView)
	let scrollMonth = new uiScroll(scrollRectMonth, prefabMonth.height, function(index){
		index = GetPosition(poolMonth, index)
		let current = poolMonth[index].content
		SetCurrentDate(currentYear,current,currentDay)
		if(changeCallback != null){
			changeCallback()
		}
	})
		
	let prefabDay = cc.find("Day/Content/Text",rootRect)
	prefabDay.active =(false)
	let poolDay = []
	let scrollRectDay = cc.find("Day",rootRect).getComponent(cc.ScrollView)
	let scrollDay = new uiScroll(scrollRectDay, prefabDay.height, function(index){
		index = GetPosition(poolDay, index)
		let current = poolDay[index].content
		SetCurrentDate(currentYear,currentMonth,current)
				
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
		if(pool[index] != null) { return }
		let clone = cc.instantiate(prefab)
		let height = prefab.sizeDelta.y
		if(clone == null){ return }
		clone.parent =(prefab.parent)
		clone.position = cc.v3(0,height * (index -1) * -1,0)
		clone.scale = 1
		clone.name = prefab.name + index
		clone.active =(true)
			
		pool[index] = []
		pool[index].root = clone
		pool[index].txt = clone.getComponent(cc.Label)
		pool[index].content = null
		pool[index].txt.text = "-"
	}
		
	let  SetPoolYear = function(){
		for(let k in (poolYear)){ 
			let v = poolYear[k] 

			poolYear[k].root.active =(false)
			poolYear[k].content = null
			poolYear[k].txt.text = "-"
		}
		for(let  i = 1;  i <=  rangeEndYear-rangeStartYear +1; ++ i){ 
			CreateClone(i,poolYear,prefabYear)  
			poolYear[i].root.active =(true) 
			let content = tonumber(rangeStartYear) + i -1
			poolYear[i].content = content
			poolYear[i].txt.text = content
		}
		
		let pool = []
		for(let  i = 1;  i <= poolYear.length; ++ i){
			if(poolYear[i].root.activeSelf == true){
				pool[i] = poolYear[i]
			}
		}
		scrollYear.SetPool(pool)
	}
	
	let  SetPoolMonth = function(){	
		let startMonth = 1
		if(rangeStartYear - currentYear == 0){
			startMonth = rangeStartMonth
		}
		
		let endMonth = 12
		if(rangeEndYear - currentYear == 0){
			endMonth = rangeEndMonth
		}
		
		for(let k in (poolMonth)){ 
			let v = poolMonth[k] 

			poolMonth[k].root.active =(false)
			poolMonth[k].content = null
			poolMonth[k].txt.text = "-"
		}
		for(let  i = 1;  i <=  endMonth-startMonth +1; ++ i){ 
			CreateClone(i,poolMonth,prefabMonth)  
			poolMonth[i].root.active =(true)
			let content = tonumber(startMonth) + i -1
			poolMonth[i].content = content
			poolMonth[i].txt.text = content
		}
		
		let pool = []
		for(let  i = 1;  i <= poolMonth.length; ++ i){
			if(poolMonth[i].root.activeSelf == true){
				pool[i] = poolMonth[i]
			}
		}
		scrollMonth.SetPool(pool)
	}
	
	let  SetPoolDay = function(){	
		let startDay = 1
		if(rangeStartYear - currentYear == 0){
			if(rangeStartMonth - currentMonth == 0){
				startDay = rangeStartDay
			}
		}
		
		let endDay = os.date("%d",os.time([year=currentYear,month=currentMonth +1,day=0]))
		if(rangeEndYear - currentYear == 0){
			if(rangeEndMonth - currentMonth == 0){
				endDay = rangeEndDay
			}
		}
			
		for(let k in (poolDay)){ 
			let v = poolDay[k] 

			poolDay[k].root.active =(false)
			poolDay[k].content = null
			poolDay[k].txt.text = "-"
		}
		for(let  i = 1;  i <=  endDay-startDay +1; ++ i){ 
			CreateClone(i,poolDay,prefabDay)
			poolDay[i].root.active =(true) 
			let content = tonumber(startDay) + i -1
			poolDay[i].content = content
			poolDay[i].txt.text = content
		}
		
		let pool = []
		for(let  i = 1;  i <= poolDay.length; ++ i){
			if(poolDay[i].root.activeSelf == true){
				pool[i] = poolDay[i]
			}
		}
		scrollDay.SetPool(pool)
	}
		
	var SetChangeCallback = function(callback){
		changeCallback = callback
	}
		
// 設置時間範圍
	var SetRangeDate = function(startYear,startMonth,startDay,endYear,endMonth,endDay){
		console.log("SetRangeDate",startYear,startMonth,startDay,endYear,endMonth,endDay)
		rangeStartYear = startYear
		rangeStartMonth = startMonth
		rangeStartDay = startDay
		
		rangeEndYear = endYear
		rangeEndMonth = endMonth
		rangeEndDay = endDay
		
		if(sequenceListener != null){
//----->需重新編譯程式碼			sequenceListener:Kill()
			sequenceListener = null
		}
	}
	
	var SetCurrentDate = function(year,month,day){
		currentYear = year
		if(tonumber(currentYear) < tonumber(rangeStartYear)){
			currentYear = rangeStartYear
		}
		if(tonumber(currentYear) > tonumber(rangeEndYear)){
			currentYear = rangeEndYear
		}
		
		currentMonth = month
		if(tonumber(currentYear) == tonumber(rangeStartYear)){
			if(tonumber(currentMonth) < tonumber(rangeStartMonth)){
				currentMonth = rangeStartMonth
			}
		}
		if(tonumber(currentYear) == tonumber(rangeEndYear)){
			if(tonumber(currentMonth) > tonumber(rangeEndMonth)){
				currentMonth = rangeEndMonth
			}
		}
		
		currentDay = day
		if(tonumber(currentYear) == tonumber(rangeStartYear) && tonumber(currentMonth) == tonumber(rangeStartMonth)){
			if(tonumber(currentDay) < tonumber(rangeStartDay)){
				currentDay = rangeStartDay
			}
		}
		if(tonumber(currentYear) == tonumber(rangeEndYear) && tonumber(currentMonth) == tonumber(rangeEndMonth)){
			if(tonumber(currentDay) > tonumber(rangeEndDay)){
				currentDay = rangeEndDay
			}
		}
		let lastDay = os.date("%d",os.time([year=currentYear,month=currentMonth+1,day=0]))
		if(tonumber(currentDay) > tonumber(lastDay)){
			currentDay = lastDay
		}
		
		SetPoolYear()
		SetPosition(poolYear, scrollYear, currentYear)
		SetPoolMonth()
		SetPosition(poolMonth, scrollMonth, currentMonth)
		SetPoolDay()
		SetPosition(poolDay, scrollDay, currentDay)
	}
	
	var GetCurrentYear = function(){
		return currentYear
	}
	var GetCurrentMonth = function(){
		return currentMonth
	}
	var GetCurrentDay = function(){
		return currentDay
	}
	
	var GetCurrentDate = function(){
		return os.date("%Y-%m-%d",os.time([year = currentYear, month = currentMonth, day = currentDay]))
	}
	
	var onExit = function(){	
for(let  i = 1;  i <=  poolYear.length; ++ i){	poolYear[i] = null	}
for(let  i = 1;  i <=  poolMonth.length; ++ i){	poolMonth[i] = null	}
for(let  i = 1;  i <=  poolDay.length; ++ i){	poolDay[i] = null	}
		
		if(sequenceListener != null){
//----->需重新編譯程式碼			sequenceListener:Kill()
			sequenceListener = null
		}
		
		scrollYear.Close()
		scrollMonth.Close()
		scrollDay.Close()
	}
	
	var Show = function(){
		scrollYear.Show()
		scrollMonth.Show()
		scrollDay.Show()
	}
	
	var Hide = function(){
		scrollYear.Close()
		scrollMonth.Close()
		scrollDay.Close()
	}
};

module.exports = UIHistoryDate
