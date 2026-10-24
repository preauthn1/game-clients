require("Module")
mmodule(...)
local HallG = require("Global")
local GameG = HallG.RequireG("GameGlobal")
local gameData = GameG.RequireG("GameData")
local uiScroll = GameG.RequireG("MScrollChoose")


function Create(root)
	local rootRect = root.transform:GetComponent("RectTransform")
	local target = {}
	local currentYear = os.date("%Y")
	local currentMonth = os.date("%m")
	local currentDay = os.date("%d")
	local changeCallback = nil
	local sequenceListener = nil
	
	local function SetPosition(pool, scroll, dateTime)
		local index = 1
		for i=1, #pool do
			if(tonumber(pool[i].content) == tonumber(dateTime))then
				index = i
			end
		end
		local totalCount = 0
		for i=1, #pool do
			if(pool[i].root.gameObject.activeSelf == true)then
				totalCount = totalCount +1
			end
		end
		index = totalCount - index
		scroll.MoveIndex(index)
	end
	
	local function GetPosition(pool,index)
		local totalCount = 0
		for i=#pool, 1, -1 do
			if(pool[i].root.gameObject.activeSelf == true)then
				if(index == totalCount)then
					return i
				end
				totalCount = totalCount +1
			end
		end
		
		return index		
	end
	
    local prefabYear = rootRect.transform:Find("Year/Content/Text"):GetComponent("RectTransform")
	prefabYear.gameObject:SetActive(false)
	local poolYear = {}
	local scrollRectYear = rootRect.transform:Find("Year"):GetComponent("ScrollRect")
	local scrollYear = uiScroll.Create(scrollRectYear, prefabYear.sizeDelta.y, function(index)
		index = GetPosition(poolYear, index)
		local current = poolYear[index].content
		target.SetCurrentDate(current,currentMonth,currentDay)
				
		if(changeCallback ~= nil)then
			changeCallback()
		end
	end)
    	
	local prefabMonth = rootRect.transform:Find("Month/Content/Text"):GetComponent("RectTransform")		
	prefabMonth.gameObject:SetActive(false)
	local poolMonth = {}
	local scrollRectMonth = rootRect.transform:Find("Month"):GetComponent("ScrollRect")
	local scrollMonth = uiScroll.Create(scrollRectMonth, prefabMonth.sizeDelta.y, function(index)
		index = GetPosition(poolMonth, index)
		local current = poolMonth[index].content
		target.SetCurrentDate(currentYear,current,currentDay)
		if(changeCallback ~= nil)then
			changeCallback()
		end
	end)
    	
	local prefabDay = rootRect.transform:Find("Day/Content/Text"):GetComponent("RectTransform")
	prefabDay.gameObject:SetActive(false)
	local poolDay = {}
	local scrollRectDay = rootRect.transform:Find("Day"):GetComponent("ScrollRect")
	local scrollDay = uiScroll.Create(scrollRectDay, prefabDay.sizeDelta.y, function(index)
		index = GetPosition(poolDay, index)
		local current = poolDay[index].content
		target.SetCurrentDate(currentYear,currentMonth,current)
				
		if(changeCallback ~= nil)then
			changeCallback()
		end
	end)
		
	local rangeStartYear = currentYear
	local rangeStartMonth = currentMonth
	local rangeStartDay = currentDay
			
	local rangeEndYear = currentYear
	local rangeEndMonth = currentMonth
	local rangeEndDay = currentDay
		
	local function CreateClone(index,pool,prefab)
		if(pool[index] ~= nil) then return end
		local clone = CS.UnityEngine.GameObject.Instantiate(prefab.gameObject)
		local height = prefab.transform:GetComponent("RectTransform").sizeDelta.y
		if(clone == nil)then return end
		clone.transform:SetParent(prefab.transform.parent)
		clone.transform.localPosition = CS.UnityEngine.Vector3(0,height * (index -1) * -1,0)
		clone.transform.localScale = CS.UnityEngine.Vector3.one
		clone.transform.name = prefab.transform.name .. index
		clone.gameObject:SetActive(true)
			
		pool[index] = {}
		pool[index].root = clone.transform:GetComponent("RectTransform")
		pool[index].txt = clone.transform:GetComponent("Text")
		pool[index].content = nil
		pool[index].txt.text = "-"
	end
		
	local function SetPoolYear()
		for k,v in pairs(poolYear) do
			poolYear[k].root.gameObject:SetActive(false)
			poolYear[k].content = nil
			poolYear[k].txt.text = "-"
		end
		for i=1, rangeEndYear-rangeStartYear +1 do 
			CreateClone(i,poolYear,prefabYear)  
			poolYear[i].root.gameObject:SetActive(true) 
			local content = tonumber(rangeStartYear) + i -1
			poolYear[i].content = content
			poolYear[i].txt.text = content
		end
		
		local pool = {}
		for i=1,#poolYear do
			if(poolYear[i].root.gameObject.activeSelf == true)then
				pool[i] = poolYear[i]
			end
		end
		scrollYear.SetPool(pool)
	end
	
	local function SetPoolMonth()	
		local startMonth = 1
		if(rangeStartYear - currentYear == 0)then
			startMonth = rangeStartMonth
		end
		
		local endMonth = 12
		if(rangeEndYear - currentYear == 0)then
			endMonth = rangeEndMonth
		end
		
		for k,v in pairs(poolMonth) do
			poolMonth[k].root.gameObject:SetActive(false)
			poolMonth[k].content = nil
			poolMonth[k].txt.text = "-"
		end
		for i=1, endMonth-startMonth +1 do 
			CreateClone(i,poolMonth,prefabMonth)  
			poolMonth[i].root.gameObject:SetActive(true)
			local content = tonumber(startMonth) + i -1
			poolMonth[i].content = content
			poolMonth[i].txt.text = content
		end
		
		local pool = {}
		for i=1,#poolMonth do
			if(poolMonth[i].root.gameObject.activeSelf == true)then
				pool[i] = poolMonth[i]
			end
		end
		scrollMonth.SetPool(pool)
	end
	
	local function SetPoolDay()	
		local startDay = 1
		if(rangeStartYear - currentYear == 0)then
			if(rangeStartMonth - currentMonth == 0)then
				startDay = rangeStartDay
			end
		end
		
		local endDay = os.date("%d",os.time({year=currentYear,month=currentMonth +1,day=0}))
		if(rangeEndYear - currentYear == 0)then
			if(rangeEndMonth - currentMonth == 0)then
				endDay = rangeEndDay
			end
		end
			
		for k,v in pairs(poolDay) do
			poolDay[k].root.gameObject:SetActive(false)
			poolDay[k].content = nil
			poolDay[k].txt.text = "-"
		end
		for i=1, endDay-startDay +1 do 
			CreateClone(i,poolDay,prefabDay)
			poolDay[i].root.gameObject:SetActive(true) 
			local content = tonumber(startDay) + i -1
			poolDay[i].content = content
			poolDay[i].txt.text = content
		end
		
		local pool = {}
		for i=1,#poolDay do
			if(poolDay[i].root.gameObject.activeSelf == true)then
				pool[i] = poolDay[i]
			end
		end
		scrollDay.SetPool(pool)
	end
		
	target.SetChangeCallback = function(callback)
		changeCallback = callback
	end
		
	-- 設置時間範圍
	target.SetRangeDate = function(startYear,startMonth,startDay,endYear,endMonth,endDay)
		print("SetRangeDate",startYear,startMonth,startDay,endYear,endMonth,endDay)
		rangeStartYear = startYear
		rangeStartMonth = startMonth
		rangeStartDay = startDay
		
		rangeEndYear = endYear
		rangeEndMonth = endMonth
		rangeEndDay = endDay
		
		if(sequenceListener ~= nil)then
			sequenceListener:Kill()
			sequenceListener = nil
		end
	end
	
	target.SetCurrentDate = function(year,month,day)
		currentYear = year
		if(tonumber(currentYear) < tonumber(rangeStartYear))then
			currentYear = rangeStartYear
		end
		if(tonumber(currentYear) > tonumber(rangeEndYear))then
			currentYear = rangeEndYear
		end
		
		currentMonth = month
		if(tonumber(currentYear) == tonumber(rangeStartYear))then
			if(tonumber(currentMonth) < tonumber(rangeStartMonth))then
				currentMonth = rangeStartMonth
			end
		end
		if(tonumber(currentYear) == tonumber(rangeEndYear))then
			if(tonumber(currentMonth) > tonumber(rangeEndMonth))then
				currentMonth = rangeEndMonth
			end
		end
		
		currentDay = day
		if(tonumber(currentYear) == tonumber(rangeStartYear) and tonumber(currentMonth) == tonumber(rangeStartMonth))then
			if(tonumber(currentDay) < tonumber(rangeStartDay))then
				currentDay = rangeStartDay
			end
		end
		if(tonumber(currentYear) == tonumber(rangeEndYear) and tonumber(currentMonth) == tonumber(rangeEndMonth))then
			if(tonumber(currentDay) > tonumber(rangeEndDay))then
				currentDay = rangeEndDay
			end
		end
		local lastDay = os.date("%d",os.time({year=currentYear,month=currentMonth+1,day=0}))
		if(tonumber(currentDay) > tonumber(lastDay))then
			currentDay = lastDay
		end
		
		SetPoolYear()
		SetPosition(poolYear, scrollYear, currentYear)
		SetPoolMonth()
		SetPosition(poolMonth, scrollMonth, currentMonth)
		SetPoolDay()
		SetPosition(poolDay, scrollDay, currentDay)
	end
	
	target.GetCurrentYear = function()
		return currentYear
	end
	target.GetCurrentMonth = function()
		return currentMonth
	end
	target.GetCurrentDay = function()
		return currentDay
	end
	
	target.GetCurrentDate = function()
		return os.date("%Y-%m-%d",os.time({year = currentYear, month = currentMonth, day = currentDay}))
	end
	
	target.onExit = function()	
		for i=1, #poolYear do	poolYear[i] = nil	end
		for i=1, #poolMonth do	poolMonth[i] = nil	end
		for i=1, #poolDay do	poolDay[i] = nil	end
		
		if(sequenceListener ~= nil)then
			sequenceListener:Kill()
			sequenceListener = nil
		end
		
		scrollYear.Close()
		scrollMonth.Close()
		scrollDay.Close()
	end
	
	target.Show = function()
		scrollYear.Show()
		scrollMonth.Show()
		scrollDay.Show()
	end
	
	target.Hide = function()
		scrollYear.Close()
		scrollMonth.Close()
		scrollDay.Close()
	end
	
	return target
end